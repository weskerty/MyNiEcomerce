const RH = { "Content-Type": "application/json" };
const RH_C = { "Content-Type": "application/json", "cache-control": "public,max-age=86400" };
const RH_N = { "Content-Type": "application/json", "cache-control": "no-store" };
const QUALITY = 'sm';
const LOCALE = 'PY';
const CONTENT_FILTER = 'off';
const ENABLED = { stickers: true, gifs: true, memes: true, emojis: false, clips: true };

const BASE = 'https://api.klipy.com/api/v1';
const EP = {
  stickers: { search: 'stickers/search',    trending: 'stickers/trending' },
  gifs:     { search: 'gifs/search',         trending: 'gifs/trending' },
  memes:    { search: 'static-memes/search', trending: 'static-memes/trending' },
  emojis:   { search: 'emojis/search',       trending: 'emojis/trending' },
  clips:    { search: 'clips/search',        trending: 'clips/trending' },
};

function norm(item) {
  if (item.type === 'ad') return item.content ? { type: 'ad', content: item.content, width: item.width, height: item.height } : null;
  const f = item.file;
  if (!f) return null;
  const url = typeof f.webp === 'string' ? f.webp : f[QUALITY]?.webp?.url;
  if (!url) return null;
  return { url, title: item.title || '', type: item.type, blur_preview: item.blur_preview || '' };
}

async function BK_1(env, p, init) {
  try {
    const res = await fetch(`${env.SERVER_URL}/stickers/${p}`, init);
    return new Response(await res.text(), { status: res.status, headers: RH_N });
  } catch {
    return new Response(JSON.stringify({ error: 'Error Stickers' }), { status: 502, headers: RH_N });
  }
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const u = new URL(request.url);
  const sp  = u.searchParams;
  if (sp.has('sid')) {
    const sid = sp.get('sid');
    if (!/^[a-f0-9]{12}$/.test(sid)) return new Response('', { status: 400, headers: RH_N });
    return BK_1(env, `estado?sid=${sid}`, { headers: { 'x-bridge-key': env.BRIDGE_KEY, 'x-fwip': request.headers.get('cf-connecting-ip') || '' } });
  }
  const q   = sp.get('q') || '';
  const cid = sp.get('cid') || 'anon';
  const ua  = request.headers.get('user-agent') || '';
  const key = env.KLIPY_KEY;
  const mode = q ? 'search' : 'trending';

  const cache = caches.default;
  const cacheKey = new Request(`${u.origin}${u.pathname}?q=${encodeURIComponent(q)}`, request);
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const base = new URLSearchParams({
    page: '1', per_page: '50',
    customer_id: cid,
    locale: LOCALE,
    content_filter: CONTENT_FILTER,
  });
  if (q) base.set('q', q);
  const AD = sp.get('ad') === '0' ? '' : '&ad-min-width=50&ad-max-width=400&ad-min-height=50&ad-max-height=250';

  const results = await Promise.all(
    Object.entries(ENABLED)
      .filter(([, v]) => v)
      .map(([name]) =>
        fetch(`${BASE}/${key}/${EP[name][mode]}?${base}${name === 'stickers' ? AD : ''}`, {
          headers: { 'Content-Type': 'application/json', 'User-Agent': ua }
        }).then(r => r.ok ? r.json() : null).catch(() => null)
      )
  );

  const data = [];
  let fail = false;
  for (const r of results) {
    if (!r?.result) { fail = true; continue; }
    for (const item of (r.data?.data || [])) {
      const n = norm(item);
      if (n) data.push(n);
    }
  }

  if (fail || !data.length) return new Response(JSON.stringify({ data }), { status: data.length ? 200 : 503, headers: RH_N });
  context.waitUntil(cache.put(cacheKey, new Response(JSON.stringify({ data: data.filter(x => x.type !== 'ad') }), { status: 200, headers: RH_C })));
  return new Response(JSON.stringify({ data }), { status: 200, headers: RH_N });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const ct = request.headers.get('content-type') || '';
  const ip = request.headers.get('cf-connecting-ip') || '';

  if (ct.includes('multipart/form-data')) {
    return BK_1(env, 'upload', {
      method: 'POST',
      headers: { 'x-bridge-key': env.BRIDGE_KEY, 'content-type': ct, 'x-fwip': ip },
      body: request.body
    });
  }

  let pack;
  try { pack = (await request.json()).pack; } catch {}
  if (typeof pack !== 'string' || !pack || pack.length > 200) return new Response('', { status: 400, headers: RH });
  return BK_1(env, 'tgpack', {
    method: 'POST',
    headers: { 'x-bridge-key': env.BRIDGE_KEY, 'Content-Type': 'application/json', 'x-fwip': ip },
    body: JSON.stringify({ pack })
  });
}
