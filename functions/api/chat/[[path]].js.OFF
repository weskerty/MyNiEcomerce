const ALLOWED_ORIGIN='https://cheagana.com';
const H={'Content-Type':'application/json','Access-Control-Allow-Origin':ALLOWED_ORIGIN,'Access-Control-Allow-Methods':'GET,POST,DELETE,OPTIONS','Access-Control-Allow-Headers':'Content-Type','Vary':'Origin'};

export async function onRequest(context){
  const{request,env}=context;
  if(request.method==='OPTIONS')return new Response('',{status:204,headers:H});
  const u=new URL(request.url);
  const sub=u.pathname.replace(/^\/api\/chat/,'');
  const ip=request.headers.get('cf-connecting-ip')||'';
  const init={method:request.method,headers:{'x-bridge-key':env.BRIDGE_KEY,'x-real-ip':ip,'Content-Type':'application/json'}};
  if(request.method!=='GET')init.body=await request.text();
  const res=await fetch(`${env.SERVER_URL}/chat${sub}${u.search}`,init);
  return new Response(res.body,{status:res.status,headers:{...H,'Content-Type':res.headers.get('Content-Type')||'application/json'}});
}
