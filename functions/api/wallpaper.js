const RH={'content-type':'application/json'};

export async function onRequestGet(context){
  const{request,env}=context;
  const key=env.UNSPLASH_KEY;
  if(!key) return new Response(JSON.stringify({error:'cfg'}),{status:500,headers:RH});

  const u=new URL(request.url);

  const tr=u.searchParams.get('track');
  if(tr){
    context.waitUntil(fetch(`${decodeURIComponent(tr)}?client_id=${key}`).catch(()=>{}));
    return new Response('ok');
  }

  const q=u.searchParams.get('q')||'nature landscape';
  const pg=Math.max(1,Math.min(333,parseInt(u.searchParams.get('page')||'1')));

  let r;
  try{
    r=await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&per_page=30&page=${pg}&orientation=landscape&client_id=${key}`);
  }catch{
    return new Response(JSON.stringify({error:'fetch'}),{status:502,headers:RH});
  }

  if(!r.ok) return new Response(JSON.stringify({error:r.status}),{status:r.status,headers:RH});

  const d=await r.json();
  return new Response(JSON.stringify({
    results:(d.results||[]).map(p=>({
      id:p.id,
      alt:p.alt_description||p.description||'',
      thumb:p.urls.small,
      full:p.urls.full,
      dl:p.links.download_location,
      user:p.user.name,
      userUrl:p.user.links.html+'?utm_source=app&utm_medium=referral'
    })),
    total_pages:Math.min(d.total_pages||1,333),
    total:d.total||0
  }),{headers:{...RH,'cache-control':'public,max-age=86400'}});
}
