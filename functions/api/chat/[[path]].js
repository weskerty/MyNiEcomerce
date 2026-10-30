const ALLOWED_ORIGIN='https://cheagana.com';
const H={'Content-Type':'application/json','Access-Control-Allow-Origin':ALLOWED_ORIGIN,'Access-Control-Allow-Methods':'POST,DELETE,OPTIONS','Access-Control-Allow-Headers':'Content-Type','Vary':'Origin','Cache-Control':'no-store'};

export async function onRequest(context){
  const{request,env}=context;
  if(request.method==='OPTIONS')return new Response('',{status:204,headers:H});
  if(request.method!=='POST'&&request.method!=='DELETE')return new Response('{}',{status:405,headers:H});
  const u=new URL(request.url);
  const sub=u.pathname.replace(/^\/api\/chat/,'');
  const ip=request.headers.get('cf-connecting-ip')||'';
  const res=await fetch(`${env.SERVER_URL}/chat${sub}`,{method:request.method,headers:{'x-bridge-key':env.BRIDGE_KEY,'x-fwip':ip,'Content-Type':'application/json'},body:await request.text()});
  return new Response(res.body,{status:res.status,headers:{...H,'Content-Type':res.headers.get('Content-Type')||'application/json'}});
}
