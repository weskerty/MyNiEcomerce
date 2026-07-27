const CORS={'Content-Type':'application/json','Access-Control-Allow-Origin':'*'};
const GROQ_URL='https://api.groq.com/openai/v1/chat/completions';
const MODEL='llama-3.3-70b-versatile';
const MAX_TOKENS=600;
const TO=15000;
const CAT_TTL=1800;
const RL_WINDOW=3600;
const RL_MAX=30;
const RL_HOST='https://ia-ratelimit.internal/';

function err(msg,s=400){return new Response(JSON.stringify({error:msg}),{status:s,headers:CORS});}

function fetchTO(url,opts){
  const ac=new AbortController();
  const t=setTimeout(()=>ac.abort(),TO);
  return fetch(url,{...opts,signal:ac.signal}).finally(()=>clearTimeout(t));
}

async function checkRateLimit(ip,context){
  const cache=caches.default;
  const key=new Request(RL_HOST+ip);
  const now=Date.now();
  const hit=await cache.match(key);
  let count=1,windowStart=now;
  if(hit){
    const d=await hit.json();
    if(now-d.windowStart<RL_WINDOW*1000){
      count=d.count+1;
      windowStart=d.windowStart;
    }
  }
  if(count>RL_MAX)return false;
  const out=new Response(JSON.stringify({count,windowStart}),{headers:{'cache-control':`max-age=${RL_WINDOW}`}});
  context.waitUntil(cache.put(key,out));
  return true;
}

async function getCatalogo(origin,context){
  const cache=caches.default;
  const key=new Request(origin+'/web/Dinamico/all.txt');
  const hit=await cache.match(key);
  if(hit)return hit.text();
  const r=await fetchTO(key.url);
  if(!r.ok)return'';
  const txt=await r.text();
  const out=new Response(txt,{headers:{'content-type':'text/plain','cache-control':`max-age=${CAT_TTL}`}});
  context.waitUntil(cache.put(key,out));
  return txt;
}

export async function onRequestOptions(){
  return new Response(null,{headers:{...CORS,'Access-Control-Allow-Methods':'POST','Access-Control-Allow-Headers':'Content-Type'}});
}

export async function onRequestPost(context){
  const{request,env}=context;
  const K=env.GROQ_KEY,BASE_PROMPT=env.IA_SYSTEM_PROMPT;
  if(!K||!BASE_PROMPT)return err('Config error',500);

  const ip=request.headers.get('cf-connecting-ip')||'anon';
  const ok=await checkRateLimit(ip,context);
  if(!ok)return err('rl',429);

  let body;
  try{body=await request.json();}catch{return err('bad_body');}
  const msg=(body.msg||'').toString().slice(0,500);
  const prevU=(body.prevU||'').toString().slice(0,500);
  const prevA=(body.prevA||'').toString().slice(0,500);
  if(!msg)return err('msg requerido');

  const u=new URL(request.url);
  const catalogo=await getCatalogo(u.origin,context);
  const system=BASE_PROMPT+'\n\nCATALOGO:\n'+catalogo;

  const messages=[{role:'system',content:system}];
  if(prevU&&prevA){
    messages.push({role:'user',content:prevU});
    messages.push({role:'assistant',content:prevA});
  }
  messages.push({role:'user',content:msg});

  let r;
  try{
    r=await fetchTO(GROQ_URL,{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':`Bearer ${K}`},
      body:JSON.stringify({model:MODEL,messages,max_tokens:MAX_TOKENS,temperature:0.6})
    });
  }catch{
    return err('down',502);
  }

  if(!r.ok)return err('down',502);

  let data;
  try{data=await r.json();}catch{return err('down',502);}
  const reply=data?.choices?.[0]?.message?.content;
  if(!reply)return err('down',502);

  return new Response(JSON.stringify({reply}),{headers:CORS});
}