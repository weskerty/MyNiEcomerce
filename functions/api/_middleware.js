const TS_H={'content-type':'application/json','cache-control':'no-store'};

async function TS_N(request,u){
  if(request.method!=='POST')return false;
  if(/^\/api\/(stickers|secret)\/?$/.test(u.pathname))return true;
  if(!/^\/api\/productos\/?$/.test(u.pathname))return false;
  let b=null;
  try{b=await request.clone().json()}catch{}
  return /^(codigo|login|enviar)$/.test(String(b&&typeof b==='object'&&b.action||u.searchParams.get('action')||''));
}

async function TS_V(request,env){
  const t=request.headers.get('x-ts')||'';
  if(!t||t.length>2048||!env.TURNSTILE_SECRET)return false;
  try{
    const r=await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({secret:env.TURNSTILE_SECRET,response:t,remoteip:request.headers.get('cf-connecting-ip')||undefined})});
    return (await r.json()).success===true;
  }catch{return false}
}

export async function onRequest({request,next,env}){
  const u=new URL(request.url);
  if(u.hostname!=='cheagana.com'&&!u.pathname.startsWith('/api/rss'))return new Response('',{status:404});
  if(await TS_N(request,u)&&!await TS_V(request,env))return new Response(JSON.stringify({error:'Error verificacion, recarga la pagina'}),{status:403,headers:TS_H});
  return next();
}
