const H={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,POST,DELETE,OPTIONS','Access-Control-Allow-Headers':'Content-Type'};

export async function onRequest(context){
  const{request,env}=context;
  if(request.method==='OPTIONS')return new Response('',{status:204,headers:H});
  const u=new URL(request.url);
  const fwd=`${env.SERVER_URL}/productos${u.pathname.replace(/^\/api\/productos/,'')}${u.search}`;
  const init={method:request.method,headers:{'x-bridge-key':env.BRIDGE_KEY,'Content-Type':request.headers.get('Content-Type')||'application/json'}};
  if(request.method!=='GET')init.body=await request.text();
  const res=await fetch(fwd,init);
  return new Response(res.body,{status:res.status,headers:{...H,'Content-Type':res.headers.get('Content-Type')||'application/json'}});
}
