const V='v28';
const N_ICON='web/otros/Archivos/Imagenes/Permanente/ICONS/ICON.png';
const N_ICO='web/otros/Archivos/Imagenes/Permanente/ICONS/NOTIFY-MNCM-96x96.png';
const N_BANNER='web/otros/Archivos/Imagenes/Permanente/ICONS/notif-banner.jpg';
const MD_LIMIT=30;
const PRE=[
'index.html',
'web/scripts/Otros/MarkDownIT/markdown-it.min.js',
'web/scripts/Otros/MarkDownIT/markdownItAnchor.umd.min.js',
'web/scripts/Otros/MiniSearch/index.js',
'web/scripts/Otros/core.js',
'web/scripts/list.json',
'web/es.html',
'web/estilo.css',
'web/otros/Archivos/Fuentes/Comfortaa/font.woff2',
'web/search.html',
'web/blogs.html',
'web/favicon.ico',
'web/404.html',
'web/otros/Archivos/HTML/centralPage.html',
'web/otros/Archivos/HTML/apps.html',
'web/fondo.json',
'web/otros/Archivos/Imagenes/pexels-cody-king-433493-1118667.jpg',
'web/otros/Archivos/Imagenes/Permanente/404.avif',
'web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/man_factory_worker_animated.avif',
'web/scripts/Galerias.js',
'web/scripts/chatBanner&Share.js',
'web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/first_quarter_moon_face_animated.avif',
'web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/sun_with_face_animated.avif',
'web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/TelegramLogo.svg',
'web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/WhatsAppLogo.svg',
N_ICON,
N_ICO,
N_BANNER
];

const TEMP_ROUTES=[{match:'/api/',ttl:86400000}];
const DJ=/\/data\.json(\?|$)/;
const DJ_URL='web/Dinamico/data.json';
const DJ_ABS=new URL(DJ_URL,self.location).href;
const TS_CK='__chk_ts';
const CHK_INT=86400000;
const TEMP_C=V+'-tmp';
const MD_C=V+'-md';
const SHARE_C='share-pending';
const SHARE_KEY='__share_data';
const APPS_URL='web/Dinamico/Apps/es.html';

const NTL={blog:'Nuevo Blog \uD83D\uDCDD',app:'Nueva App \uD83D\uDCF1',game:'Nuevo Juego \uD83C\uDFAE',product:'Nuevo Producto \uD83D\uDED2'};

function P2MD(p){return p.replace(/\.[^.]+$/,'.md');}

function EP(dj){
  return Object.values(dj.galleries).flatMap(cat=>Object.values(cat).flat());
}

function eN(p){
  const fname=p.split('/').pop().replace(/\.[^.]+$/,'');
  if(p.includes('/Blogs/'))return{type:'blog',name:fname};
  if(p.includes('/Apps/'))return{type:'app',name:fname};
  if(p.includes('/Juegos/'))return{type:'game',name:fname};
  const m=fname.match(/NB=([^.]+)$/);
  return{type:'product',name:m?m[1]:fname};
}

function eID(p){
  const fname=p.split('/').pop().replace(/\.[^.]+$/,'');
  if(p.includes('/Blogs/')||p.includes('/Apps/')||p.includes('/Juegos/'))return fname;
  const m=fname.match(/ID=([^-]+)/);
  return m?m[1]:fname;
}

function showItem(p){
  const{type,name}=eN(p);
  const url='/#'+P2MD(p).replace(/ /g,'%20');
  return self.registration.showNotification(NTL[type],{
    body:name,icon:N_ICON,badge:N_ICO,image:N_BANNER,
    tag:eID(p),data:{url}
  });
}

async function tmpGet(req){
  const c=await caches.open(TEMP_C);
  const r=await c.match(req);
  if(!r)return null;
  if(Date.now()>parseInt(r.headers.get('X-Expires')||0)){await c.delete(req);return null;}
  return r;
}
async function tmpPut(req,res,ttl){
  const c=await caches.open(TEMP_C);
  const buf=await res.clone().arrayBuffer();
  const h=new Headers(res.headers);
  h.set('X-Expires',String(Date.now()+ttl));
  await c.put(req,new Response(buf,{status:res.status,statusText:res.statusText,headers:h}));
}

async function syncMD(nArr,oArr){
  if(!MD_LIMIT)return;
  try{
    const toURL=p=>new URL(p,self.location).href;
    const nSet=new Set(nArr.map(P2MD).map(toURL));
    const oSet=new Set(oArr.map(P2MD).map(toURL));
    const c=await caches.open(MD_C);
    await Promise.all([...oSet].filter(u=>!nSet.has(u)).map(u=>c.delete(u)));
    const toFetch=[...nSet].filter(u=>!oSet.has(u)).slice(0,MD_LIMIT);
    await Promise.all(toFetch.map(async u=>{
      try{const r=await fetch(u);if(r.ok)await c.put(u,r);}catch{}
    }));
  }catch{}
}

async function chkDJ(){
  try{
    const r=await fetch(DJ_ABS,{cache:'no-store'});
    if(!r?.ok)return false;
    const txt=await r.text();
    const c=await caches.open(V);
    const prev=await c.match(DJ_ABS);
    const prevTxt=prev?await prev.text():null;
    await c.put(DJ_ABS,new Response(txt,{headers:{'Content-Type':'application/json'}}));
    await c.put(TS_CK,new Response(String(Date.now())));
    const nArr=EP(JSON.parse(txt));
    const oArr=prevTxt?EP(JSON.parse(prevTxt)):[];
    await syncMD(nArr,oArr);
    if(prevTxt!==null&&txt!==prevTxt){
      const oIDs=new Set(oArr.map(eID));
      const newPaths=nArr.filter(p=>!oIDs.has(eID(p)));
      if(newPaths.length){
        await Promise.all(newPaths.map(showItem));
        return true;
      }
    }
    return false;
  }catch{return null;}
}

async function maybeCHK(){
  try{
    const c=await caches.open(V);
    const last=await c.match(TS_CK);
    const ts=last?parseInt(await last.text()):0;
    if(Date.now()-ts<CHK_INT)return;
    await chkDJ();
  }catch{}
}

async function saveShareData(formData){
  const meta={title:formData.get('title')||'',text:formData.get('text')||'',url:formData.get('url')||'',files:[]};
  const raw=formData.getAll('files').filter(f=>f&&f.size>0);
  const sc=await caches.open(SHARE_C);
  await Promise.all(raw.map(async(f,i)=>{
    const key='/__share_file_'+i;
    await sc.put(key,new Response(f,{headers:{'Content-Type':f.type||'application/octet-stream','X-Share-Name':f.name||('file'+i),'X-Share-Type':f.type||''}}));
    meta.files.push({key,name:f.name||('file'+i),type:f.type||'',size:f.size});
  }));
  await sc.put(SHARE_KEY,new Response(JSON.stringify(meta),{headers:{'Content-Type':'application/json'}}));
}

async function clearShareData(){
  await caches.delete(SHARE_C);
}

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(V).then(c=>c.addAll(PRE)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(ks=>Promise.all(
      ks.filter(k=>k!==V&&k!==TEMP_C&&k!==MD_C&&k!==SHARE_C).map(k=>caches.delete(k))
    )).then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);

  if(url.pathname==='/_share'&&e.request.method==='POST'){
    e.respondWith((async()=>{
      try{await saveShareData(await e.request.formData());}catch{}
      return Response.redirect('/#'+APPS_URL,303);
    })());
    return;
  }

  if(url.pathname==='/_share_pending'&&e.request.method==='GET'){
    e.respondWith((async()=>{
      const sc=await caches.open(SHARE_C);
      const meta=await sc.match(SHARE_KEY);
      if(!meta)return new Response('null',{headers:{'Content-Type':'application/json'}});
      const m=JSON.parse(await meta.text());
      if(!m.files||!m.files.length)return new Response(JSON.stringify({...m,blobs:[]}),{headers:{'Content-Type':'application/json'}});
      const blobs=await Promise.all(m.files.map(async f=>{
        const r=await sc.match(f.key);
        if(!r)return null;
        const ab=await r.arrayBuffer();
        return{name:f.name,type:f.type,size:f.size,data:Array.from(new Uint8Array(ab))};
      }));
      return new Response(JSON.stringify({...m,blobs:blobs.filter(Boolean)}),{headers:{'Content-Type':'application/json'}});
    })());
    return;
  }

  if(url.pathname==='/_share_clear'&&e.request.method==='POST'){
    e.respondWith(clearShareData().then(()=>new Response('ok')));
    return;
  }

  if(e.request.method!=='GET')return;
  if(url.origin!==self.location.origin)return;

  if(DJ.test(url.pathname)){
    e.respondWith(
      fetch(DJ_ABS,{cache:'no-store'}).then(r=>{
        if(r?.ok){const rc=r.clone();caches.open(V).then(c=>c.put(DJ_ABS,rc));}
        return r;
      }).catch(()=>caches.open(V).then(c=>c.match(DJ_ABS)))
    );
    return;
  }

  if(url.pathname.endsWith('.md')){
    e.respondWith(
      fetch(e.request).then(r=>{
        if(r?.ok){const rc=r.clone();caches.open(MD_C).then(c=>c.put(e.request,rc));}
        return r;
      }).catch(()=>caches.open(MD_C).then(c=>c.match(e.request)))
    );
    return;
  }

  const tmpRoute=TEMP_ROUTES.find(r=>url.pathname.startsWith(r.match));
  if(tmpRoute){
    e.respondWith((async()=>{
      const cached=await tmpGet(e.request);
      if(cached)return cached;
      const r=await fetch(e.request);
      if(r?.ok)await tmpPut(e.request,r,tmpRoute.ttl);
      return r;
    })());
    return;
  }

  e.waitUntil(maybeCHK());

  e.respondWith(
    caches.match(e.request).then(h=>{
      if(h)return h;
      return fetch(e.request).then(r=>{
        if(r?.status===200){const rc=r.clone();caches.open(V).then(c=>c.put(e.request,rc));}
        return r;
      }).catch(()=>caches.match('web/404.html'));
    })
  );
});

self.addEventListener('push',e=>{
  e.waitUntil((async()=>{
    const c=await caches.open(V);
    await c.put(TS_CK,new Response(String(Date.now())));
    const result=await chkDJ();
    if(result===null){
      await self.registration.showNotification('Che Agana',{
        body:'Hay Novedades!',icon:N_ICON,badge:N_ICO,image:N_BANNER,
        tag:'fallback',data:{url:self.location.origin}
      });
    }
  })());
});

self.addEventListener('notificationclick',e=>{
  e.notification.close();
  const target=e.notification.data?.url||'/';
  e.waitUntil(
    clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{
      const c=cs.find(x=>x.url.startsWith(self.location.origin)&&'focus' in x);
      if(c){if('navigate' in c)c.navigate(target);return c.focus();}
      return clients.openWindow(target);
    })
  );
});

self.addEventListener('message',e=>{
  if(e.data==='CHECK_DJ')e.waitUntil(chkDJ());
});
