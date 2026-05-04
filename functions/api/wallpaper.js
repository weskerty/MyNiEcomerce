const RH={'content-type':'application/json'};
const TO=5000,PPG=20;

function fetchTO(url,opts){
  const ac=new AbortController();
  const t=setTimeout(()=>ac.abort(),TO);
  return fetch(url,{...opts,signal:ac.signal}).finally(()=>clearTimeout(t));
}

async function fromUnsplash(key,q,pg,ori){
  if(!key)return{items:[],tp:0};
  try{
    const r=await fetchTO(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&per_page=${PPG}&page=${pg}&orientation=${ori==='v'?'portrait':'landscape'}&client_id=${key}`);
    if(!r.ok)return{items:[],tp:0};
    const d=await r.json();
    return{
      items:(d.results||[]).map(p=>({
        id:p.id,alt:p.alt_description||p.description||'',
        thumb:p.urls.small,full:p.urls.full,
        dl:p.links.download_location,
        user:p.user.name,
        userUrl:p.user.links.html+'?utm_source=app&utm_medium=referral',
        src:'Unsplash'
      })),
      tp:Math.min(d.total_pages||1,333)
    };
  }catch{return{items:[],tp:0};}
}

async function fromPexels(key,q,pg,ori){
  if(!key)return{items:[],tp:0};
  try{
    const r=await fetchTO(`https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&per_page=${PPG}&page=${pg}&orientation=${ori==='v'?'portrait':'landscape'}`,{
      headers:{Authorization:key}
    });
    if(!r.ok)return{items:[],tp:0};
    const d=await r.json();
    return{
      items:(d.photos||[]).map(p=>({
        id:'px'+p.id,alt:p.alt||'',
        thumb:p.src.medium,full:p.src.original,
        user:p.photographer,userUrl:p.photographer_url,src:'Pexels'
      })),
      tp:Math.ceil((d.total_results||0)/PPG)
    };
  }catch{return{items:[],tp:0};}
}

async function fromPixabay(key,q,pg,ori){
  if(!key)return{items:[],tp:0};
  try{
    const r=await fetchTO(`https://pixabay.com/api/?key=${key}&q=${encodeURIComponent(q)}&per_page=${PPG}&page=${pg}&orientation=${ori==='v'?'vertical':'horizontal'}&image_type=photo`);
    if(!r.ok)return{items:[],tp:0};
    const d=await r.json();
    return{
      items:(d.hits||[]).map(h=>({
        id:'pb'+h.id,alt:h.tags||'',
        thumb:h.webformatURL,full:h.largeImageURL||h.webformatURL,
        user:h.user,userUrl:h.pageURL,src:'Pixabay'
      })),
      tp:Math.ceil((d.totalHits||0)/PPG)
    };
  }catch{return{items:[],tp:0};}
}

export async function onRequestGet(context){
  const{request,env}=context;
  const u=new URL(request.url);

  const tr=u.searchParams.get('track');
  if(tr&&env.UNSPLASH_KEY){
    context.waitUntil(fetch(`${decodeURIComponent(tr)}?client_id=${env.UNSPLASH_KEY}`).catch(()=>{}));
    return new Response('ok');
  }

  const q=u.searchParams.get('q')||'nature landscape';
  const pg=Math.max(1,Math.min(500,parseInt(u.searchParams.get('page')||'1')));
  const ori=u.searchParams.get('ori')||'h';

  const[a,b,c]=await Promise.all([
    fromUnsplash(env.UNSPLASH_KEY,q,pg,ori),
    fromPexels(env.PEXELS_KEY,q,pg,ori),
    fromPixabay(env.PIXABAY_KEY,q,pg,ori)
  ]);

  const results=[...a.items,...b.items,...c.items];
  const tp=Math.min(Math.max(a.tp,b.tp,c.tp,1),500);

  return new Response(JSON.stringify({results,total_pages:tp,total:results.length}),{
    headers:{...RH,'cache-control':'public,max-age=86400'}
  });
}
