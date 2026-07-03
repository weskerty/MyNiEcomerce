const SB_H = { 'content-type': 'application/json' };

function SB_IP(request) {
  return request.headers.get('cf-connecting-ip') || '';
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const u = new URL(request.url);
  const id = u.searchParams.get('id');

  const target = id
    ? `${env.SERVER_URL}/secret/post?id=${encodeURIComponent(id)}&coff=${encodeURIComponent(u.searchParams.get('coff') || '0')}`
    : `${env.SERVER_URL}/secret/posts?off=${encodeURIComponent(u.searchParams.get('off') || '0')}`;

  try {
    const res = await fetch(target, { headers: { 'x-bridge-key': env.BRIDGE_KEY, 'x-real-ip': SB_IP(request) } });
    return new Response(res.body, { status: res.status, headers: SB_H });
  } catch {
    return new Response('[]', { status: 200, headers: SB_H });
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const u = new URL(request.url);
  const isC = u.searchParams.get('c') === '1';

  let j;
  try { j = await request.json(); } catch { return new Response(JSON.stringify({ error: 'bad_body' }), { status: 400, headers: SB_H }); }

  const target = `${env.SERVER_URL}/secret/${isC ? 'comment' : 'post'}`;
  const res = await fetch(target, {
    method: 'POST',
    headers: { 'x-bridge-key': env.BRIDGE_KEY, 'x-real-ip': SB_IP(request), 'content-type': 'application/json' },
    body: JSON.stringify(j)
  });

  const body = await res.text();
  return new Response(body, { status: res.status, headers: SB_H });
}
