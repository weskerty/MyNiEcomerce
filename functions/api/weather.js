const OWM='https://api.openweathermap.org/data/2.5';
const GEO='https://api.openweathermap.org/geo/1.0';
const CORS={'Content-Type':'application/json','Access-Control-Allow-Origin':'*'};

function err(msg,s=403){return new Response(JSON.stringify({error:msg}),{status:s,headers:CORS});}
function isPY(d){return d?.sys?.country==='PY'||d?.city?.country==='PY';}

export async function onRequest({request,env}){
  if(request.method==='OPTIONS')return new Response(null,{headers:{...CORS,'Access-Control-Allow-Methods':'GET','Access-Control-Allow-Headers':'*'}});
  const K=env.OWM_KEY;
  if(!K)return err('Config error',500);
  const u=new URL(request.url);
  const type=u.searchParams.get('type')||'weather';
  const q=u.searchParams.get('q')||'';
  const lat=u.searchParams.get('lat');
  const lon=u.searchParams.get('lon');
  const base=`&appid=${K}&units=metric&lang=es`;

  if(type==='geo'){
    if(!q)return err('q requerido',400);
    const r=await fetch(`${GEO}/direct?q=${encodeURIComponent(q)},PY&limit=5${base}`);
    const d=await r.json();
    if(!Array.isArray(d))return err('Geo error',502);
    const py=d.filter(x=>x.country==='PY');
    if(!py.length)return err('Solo Paraguay',403);
    return new Response(JSON.stringify(py),{headers:CORS});
  }

  let wUrl,fUrl;
  if(lat&&lon){
    wUrl=`${OWM}/weather?lat=${lat}&lon=${lon}${base}`;
    fUrl=`${OWM}/forecast?lat=${lat}&lon=${lon}&cnt=40${base}`;
  }else if(q){
    wUrl=`${OWM}/weather?q=${encodeURIComponent(q)},PY${base}`;
    fUrl=`${OWM}/forecast?q=${encodeURIComponent(q)},PY&cnt=40${base}`;
  }else return err('lat/lon o q requerido',400);

  const[rW,rF]=await Promise.all([fetch(wUrl),fetch(fUrl)]);
  const[dW,dF]=await Promise.all([rW.json(),rF.json()]);

  if(!isPY(dW))return err('Solo Paraguay',403);
  if(dW.cod&&dW.cod!==200)return err(dW.message||'OWM error',400);

  return new Response(JSON.stringify({weather:dW,forecast:dF}),{headers:CORS});
}
