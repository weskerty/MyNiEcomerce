const H = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method === 'OPTIONS') return new Response('', { status: 204, headers: H });

  const url    = new URL(request.url);
  const target = url.pathname.replace(/^\/chat/, '') || '/';
  const fwd    = `${env.SIGNAL_URL}${target}${url.search}`;

  const init = {
    method: request.method,
    headers: { 'x-bridge-key': env.BRIDGE_KEY, 'Content-Type': 'application/json' },
  };
  if (request.method !== 'GET' && request.method !== 'DELETE') {
    init.body = await request.text();
  }
  if (request.method === 'DELETE') {
    const body = await request.text();
    if (body) init.body = body;
  }

  try {
    const res  = await fetch(fwd, init);
    const text = await res.text();
    return new Response(text, { status: res.status, headers: H });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 502, headers: H });
  }
}
