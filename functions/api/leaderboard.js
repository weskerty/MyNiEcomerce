export async function onRequest({request,env}) {
  const url    = new URL(request.url);
  const sub    = url.pathname.replace(/^\/api\/leaderboard/,'') || '/';
  const target = `${env.SERVER_URL}/leaderboard${sub}${url.search}`;
  const body   = ['GET','HEAD'].includes(request.method) ? undefined : await request.arrayBuffer();
  const h      = new Headers(request.headers);
  h.set('x-bridge-key',env.BRIDGE_KEY);
  const r = await fetch(target,{method:request.method,headers:h,body});
  return new Response(r.body,{status:r.status,headers:r.headers});
}
