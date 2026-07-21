const H = { 'Content-Type': 'application/xml', 'Access-Control-Allow-Origin': '*', 'cache-control': 'public,max-age=3600,stale-while-revalidate=21600' };
const H_E = { 'Content-Type': 'application/xml', 'Access-Control-Allow-Origin': '*', 'cache-control': 'no-store' };

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url).searchParams.get('url');
  if (!url) return new Response('', { status: 400, headers: H_E });

  const res = await fetch(`${env.SERVER_URL}/rss?url=${encodeURIComponent(url)}`, {
    headers: { 'x-bridge-key': env.BRIDGE_KEY, 'x-real-ip': request.headers.get('cf-connecting-ip') || '' }
  });

  return new Response(res.body, { status: res.status, headers: res.ok ? H : H_E });
}
