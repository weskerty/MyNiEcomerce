const URL_RE=/https?:\/\/[^\s"'<>]+/;
const RH_ERR={'content-type':'application/json'};
const RH_JSON={'content-type':'application/json'};

export async function onRequestGet(context){
 const{request,env}=context;
 const q=new URL(request.url).searchParams.get('q')||'';
 if(!q.trim()) return new Response('[]',{status:200,headers:RH_JSON});
 try{
  const res=await fetch(`${env.SERVER_URL}/dla?q=${encodeURIComponent(q.trim())}`,{
   headers:{'x-bridge-key':env.BRIDGE_KEY}
  });
  if(!res.ok) return new Response('[]',{status:200,headers:RH_JSON});
  return new Response(res.body,{status:200,headers:RH_JSON});
 }catch{
  return new Response('[]',{status:200,headers:RH_JSON});
 }
}

export async function onRequestPost(context){
 const{request,env}=context;

 let raw,type;
 try{const j=await request.json();raw=j.url;type=j.type;}
 catch{return new Response(JSON.stringify({error:'Invalid body'}),{status:400,headers:RH_ERR});}

 const m=URL_RE.exec(String(raw||''));
 if(!m) return new Response(JSON.stringify({error:'No URL found'}),{status:400,headers:RH_ERR});

 const res=await fetch(`${env.SERVER_URL}/dla`,{
  method:'POST',
  headers:{'x-bridge-key':env.BRIDGE_KEY,'content-type':'application/json'},
  body:JSON.stringify({url:m[0],type:type==='audio'?'audio':'video'})
 });

 const h={'content-type':res.headers.get('content-type')||'application/octet-stream'};
 const cd=res.headers.get('content-disposition');
 if(cd) h['content-disposition']=cd;

 return new Response(res.body,{status:res.status,headers:h});
}
