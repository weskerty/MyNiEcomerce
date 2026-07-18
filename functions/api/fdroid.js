const RH={'content-type':'application/json'};
const TO=8000;
const FS='https://search.f-droid.org/api/search_apps?q=';
const FP='https://f-droid.org/api/v1/packages/';
const FR='https://f-droid.org/repo/';

function fetchTO(url,opts){
  const ac=new AbortController();
  const t=setTimeout(()=>ac.abort(),TO);
  return fetch(url,{...opts,signal:ac.signal}).finally(()=>clearTimeout(t));
}

export async function onRequestGet({request}){
  const u=new URL(request.url);
  const act=u.searchParams.get('action');

  try{
    if(act==='search'){
      const q=u.searchParams.get('q')||'';
      const r=await fetchTO(FS+encodeURIComponent(q));
      return new Response(await r.text(),{status:r.status,headers:RH});
    }

    if(act==='pkg'){
      const id=u.searchParams.get('id')||'';
      const r=await fetchTO(FP+encodeURIComponent(id));
      return new Response(await r.text(),{status:r.status,headers:RH});
    }

    if(act==='apk'){
      const pkg=u.searchParams.get('pkg')||'';
      const vc=u.searchParams.get('vc')||'';
      const r=await fetchTO(FR+encodeURIComponent(pkg)+'_'+encodeURIComponent(vc)+'.apk');
      return new Response(r.body,{status:r.status,headers:{'content-type':'application/vnd.android.package-archive'}});
    }

    return new Response(JSON.stringify({error:'action invalido'}),{status:400,headers:RH});
  }catch(e){
    return new Response(JSON.stringify({error:'timeout o error de red'}),{status:502,headers:RH});
  }
}