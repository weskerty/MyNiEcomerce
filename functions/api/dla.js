const URL_RE=/https?:\/\/[^\s"'<>]+/;
const RH_JSON={'content-type':'application/json','cache-control':'no-store'};

export async function onRequestGet(context){
 const{request,env}=context;
 const q=new URL(request.url).searchParams.get('q')||'';
 if(!q.trim()) return new Response('[]',{status:200,headers:RH_JSON});
 const DC1=caches.default,DK1=new Request(`${new URL(request.url).origin}/api/dla?q=${encodeURIComponent(q.trim().toLowerCase().replace(/\s+/g,' '))}`);
 const hit=await DC1.match(DK1);
 if(hit) return hit;
 try{
  const res=await fetch(`${env.SERVER_URL}/dla?q=${encodeURIComponent(q.trim())}`,{
   headers:{'x-bridge-key':env.BRIDGE_KEY,'x-fwip':request.headers.get('cf-connecting-ip')||''}
  });
  if(!res.ok) return new Response('[]',{status:200,headers:RH_JSON});
  const t=await res.text();
  let n=0;try{n=JSON.parse(t).length}catch{}
  if(n<2) return new Response(t,{status:200,headers:RH_JSON});
  const out=new Response(t,{status:200,headers:{...RH_JSON,'cache-control':'public,max-age=604800'}});
  context.waitUntil(DC1.put(DK1,out.clone()));
  return out;
 }catch{
  return new Response('[]',{status:200,headers:RH_JSON});
 }
}

export async function onRequestPost(context){
 const{request,env}=context;

 let raw,type,mode,fresh;
 try{const j=await request.json();raw=j.url;type=j.type;mode=j.mode;fresh=j.fresh;}
 catch{return new Response(JSON.stringify({error:'Invalid body'}),{status:400,headers:RH_JSON});}

 const m=URL_RE.exec(String(raw||''));
 if(!m) return new Response(JSON.stringify({error:'No URL found'}),{status:400,headers:RH_JSON});

 const res=await fetch(`${env.SERVER_URL}/dla`,{
  method:'POST',
  headers:{'x-bridge-key':env.BRIDGE_KEY,'content-type':'application/json','x-fwip':request.headers.get('cf-connecting-ip')||''},
  body:JSON.stringify({url:m[0],type:type==='audio'?'audio':'video',...(mode==='stream'&&{mode:'stream'}),...(fresh&&{fresh:1})})
 });

 const j=await res.json().catch(()=>({}));
 return new Response(JSON.stringify(j),{status:res.status,headers:RH_JSON});
}
