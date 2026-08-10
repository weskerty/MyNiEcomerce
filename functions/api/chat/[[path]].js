const ALLOWED_ORIGIN='https://cheagana.com';
const H={'Content-Type':'application/json','Access-Control-Allow-Origin':ALLOWED_ORIGIN,'Access-Control-Allow-Methods':'GET,POST,DELETE,OPTIONS','Access-Control-Allow-Headers':'Content-Type','Vary':'Origin'};
const CACHE_TTL=5;

export async function onRequest(context){
  const{request,env}=context;
  if(request.method==='OPTIONS')return new Response('',{status:204,headers:H});
  const u=new URL(request.url);
  const sub=u.pathname.replace(/^\/api\/chat/,'');
  const isCacheable=request.method==='GET'&&sub==='/nearby';

  const cache=caches.default;
  if(isCacheable){
    const hit=await cache.match(request);
    if(hit)return hit;
  }

  const ip=request.headers.get('cf-connecting-ip')||'';
  const init={method:request.method,headers:{'x-bridge-key':env.BRIDGE_KEY,'x-real-ip':ip,'Content-Type':'application/json'}};
  if(request.method!=='GET')init.body=await request.text();
  const res=await fetch(`${env.SERVER_URL}/chat${sub}${u.search}`,init);

  const outHeaders={...H,'Content-Type':res.headers.get('Content-Type')||'application/json'};
  if(isCacheable&&res.ok)outHeaders['Cache-Control']=`public, max-age=${CACHE_TTL}`;
  const out=new Response(res.body,{status:res.status,headers:outHeaders});

  if(isCacheable&&res.ok)context.waitUntil(cache.put(request,out.clone()));
  return out;
}
