const RH = { "Content-Type": "application/json" };
const QUALITY = 'sm';
const LOCALE = 'PY';
const CONTENT_FILTER = 'off';
const ENABLED = { stickers: true, gifs: true, memes: true, emojis: false, clips: true };

const BASE = 'https://api.klipy.com/api/v1';
const EP = {
  stickers: { search: 'stickers/search',       trending: 'stickers/trending' },
  gifs:     { search: 'gifs/search',            trending: 'gifs/trending' },
  memes:    { search: 'static-memes/search',    trending: 'static-memes/trending' },
  emojis:   { search: 'emojis/search',          trending: 'emojis/trending' },
  clips:    { search: 'clips/search',            trending: 'clips/trending' },
};

function norm(item) {
  if (item.type === 'ad') return item.content ? { type: 'ad', content: item.content, width: item.width, height: item.height } : null;
  const f = item.file;
  if (!f) return null;
  const url = typeof f.webp === 'string' ? f.webp : f[QUALITY]?.webp?.url;
  if (!url) return null;
  return { url, title: item.title || '', type: item.type, blur_preview: item.blur_preview || '' };
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const sp = new URL(request.url).searchParams;
  const q   = sp.get('q') || '';
  const cid  = sp.get('cid') || 'anon';
  const ua   = request.headers.get('user-agent') || '';
  const key  = env.KLIPY_KEY;
  const mode = q ? 'search' : 'trending';

  const base = new URLSearchParams({
    page: '1', per_page: '50',
    customer_id: cid,
    locale: LOCALE,
    content_filter: CONTENT_FILTER,
    'ad-min-width': '50', 'ad-max-width': '400',
    'ad-min-height': '50', 'ad-max-height': '250',
  });
  if (q) base.set('q', q);

  const fetches = Object.entries(ENABLED)
    .filter(([, v]) => v)
    .map(([name]) =>
      fetch(`${BASE}/${key}/${EP[name][mode]}?${base}`, {
        headers: { 'Content-Type': 'application/json', 'User-Agent': ua }
      }).then(r => r.ok ? r.json() : null).catch(() => null)
    );

  const results = await Promise.all(fetches);
  const data = [];

  for (const r of results) {
    if (!r?.result) continue;
    for (const item of (r.data?.data || [])) {
      const n = norm(item);
      if (n) data.push(n);
    }
  }

  return new Response(JSON.stringify({ data }), { status: 200, headers: RH });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const ct = request.headers.get('content-type') || '';

  if (ct.includes('multipart/form-data')) {
    const res = await fetch(`${env.SERVER_URL}/upload`, {
      method: 'POST',
      headers: { 'x-bridge-key': env.BRIDGE_KEY, 'content-type': ct },
      body: request.body
    });
    return new Response(await res.text(), { status: res.status, headers: RH });
  }

  const res = await fetch(`${env.SERVER_URL}/process`, {
    method: 'POST',
    headers: { 'x-bridge-key': env.BRIDGE_KEY, 'Content-Type': 'application/json' },
    body: await request.text()
  });
  return new Response(await res.text(), { status: res.status, headers: RH });
}
