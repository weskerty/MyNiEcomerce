const URL_RE = /https?:\/\/[^\s"'<>]+/;
const RH_ERR = { 'content-type': 'application/json' };

export async function onRequestPost(context) {
  const { request, env } = context;

  let raw;
  try { raw = (await request.json()).url; }
  catch { return new Response(JSON.stringify({ error: 'Invalid body' }), { status: 400, headers: RH_ERR }); }

  const m = URL_RE.exec(String(raw || ''));
  if (!m) return new Response(JSON.stringify({ error: 'No URL found' }), { status: 400, headers: RH_ERR });

  const res = await fetch(`${env.SERVER_URL}/dla`, {
    method: 'POST',
    headers: { 'x-bridge-key': env.BRIDGE_KEY, 'content-type': 'application/json' },
    body: JSON.stringify({ url: m[0] })
  });

  const h = { 'content-type': res.headers.get('content-type') || 'application/octet-stream' };
  const cd = res.headers.get('content-disposition');
  if (cd) h['content-disposition'] = cd;

  return new Response(res.body, { status: res.status, headers: h });
}
