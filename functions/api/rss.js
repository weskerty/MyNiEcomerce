const H = { 'Content-Type': 'application/xml', 'Access-Control-Allow-Origin': '*', 'cache-control': 'public,max-age=600' };
const H_E = { 'Content-Type': 'application/xml', 'Access-Control-Allow-Origin': '*', 'cache-control': 'no-store' };

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url).searchParams.get('url');
  if (!url) return new Response('', { status: 400, headers: H_E });

  const RC1 = caches.default, RK1 = new Request(request.url);
  const hit = await RC1.match(RK1);
  if (hit) return hit;

  const res = await fetch(`${env.SERVER_URL}/rss?url=${encodeURIComponent(url)}`, {
    headers: { 'x-bridge-key': env.BRIDGE_KEY, 'x-fwip': request.headers.get('cf-connecting-ip') || '' }
  });
  if (!res.ok) return new Response(res.body, { status: res.status, headers: H_E });

  const out = new Response(res.body, { status: 200, headers: H });
  context.waitUntil(RC1.put(RK1, out.clone()));
  return out;
}
