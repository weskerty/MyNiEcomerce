const H = { 'Content-Type': 'application/xml', 'Access-Control-Allow-Origin': '*' };

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url).searchParams.get('url');
  if (!url) return new Response('', { status: 400, headers: H });

  const res = await fetch(`${env.SERVER_URL}/rss?url=${encodeURIComponent(url)}`, {
    headers: { 'x-bridge-key': env.BRIDGE_KEY }
  });

  return new Response(await res.text(), { status: res.status, headers: H });
}
