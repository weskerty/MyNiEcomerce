const V='v131';
const N_ICON='web/otros/Archivos/Imagenes/Permanente/ICONS/ICON.png';
const N_ICO='web/otros/Archivos/Imagenes/Permanente/ICONS/NOTIFY-MNCM-96x96.png';
const N_BANNER='web/otros/Archivos/Imagenes/Permanente/ICONS/notif-banner.avif';
const FRASES_HTML='web/otros/Archivos/DataBase/Libros/cuentos.html';
const PRE=[
'index.html',
'web/scripts/Otros/core.js',
'web/es.html',
'web/estilo.css',
'web/search.html',
'web/blogs.html',
'web/otros/Archivos/HTML/centralPage.html',
'web/otros/Archivos/HTML/apps.html',
'web/otros/Archivos/HTML/Grupos.html',
'web/scripts/Galerias.js',
'web/scripts/chatBanner&Share.js',
FRASES_HTML
];


const PERM_C='permanent';
const PRE_PERM=[
'web/scripts/Otros/MarkDownIT/markdown-it.min.js',
'web/scripts/Otros/MarkDownIT/markdownItAnchor.umd.min.js',
'web/scripts/Otros/MiniSearch/index.js',
'web/scripts/Otros/Leaflet/leaflet.js',
'web/scripts/Otros/Leaflet/leaflet.css',
'web/404.html',
'web/favicon.ico',
'web/otros/Archivos/Imagenes/wallpaper.avif',
'web/otros/Archivos/Fuentes/Comfortaa/font.woff2',
'web/otros/Archivos/Fuentes/Emojis/FluentEmojiColor.woff2',
'web/otros/Archivos/Imagenes/Permanente/404.avif',
'web/otros/Archivos/Imagenes/Permanente/wait.avif',
'web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/first_quarter_moon_face_animated.avif',
'web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/sun_with_face_animated.avif',
'web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/TelegramLogo.svg',
'web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/WhatsAppLogo.svg',
'web/otros/Archivos/Imagenes/Permanente/ICONS/Blogs.png',
'web/otros/Archivos/Imagenes/Permanente/ICONS/Apps.png',
'web/otros/Archivos/Imagenes/Permanente/ICONS/CatSmile.png',
'web/otros/Archivos/Imagenes/Permanente/ICONS/Cesta.png',
N_ICON,
N_ICO,
N_BANNER
];

const TEMP_ROUTES=[{match:'/api/chat/',ttl:14000},{match:'/api/',ttl:18000000}];
const EXT_CACHE=[
  {origin:'esm.unpkg.com',ttl:0},
  {origin:'unpkg.com',ttl:0}
];
const MIRRORS=['https://weskerty.github.io/MyNiEcomerce','https://lawiskapy.codeberg.page/kore.js','https://cheagana.netlify.app','https://mc.cheagana.com'];
const MIRROR_TIMEOUT=2000;
let serverIsDown=false;
const EXT_C='ext-fonts';
const DJ=/\/data\.json(\?|$)/;
const TEMP_C=V+'-tmp';
const SHARE_C='share-pending';
const SHARE_KEY='__share_data';
const APPS_URL='web/otros/Archivos/HTML/apps.html';
const OPFS_DIR='notify';
const DLA_C='dla-fetch';
const DLA_TTL=600000;
const SHARE_TTL=3600000;

async function fetchT(input,init){
  const ac=new AbortController();
  const tid=setTimeout(()=>ac.abort(),MIRROR_TIMEOUT);
  try{return await fetch(input,{...init,signal:ac.signal});}
  finally{clearTimeout(tid);}
}

async function tryMirrors(pathname,init){
  for(const base of MIRRORS){
    try{
      const mirrorUrl=base.replace(/\/$/,'')+pathname;
      const r=await fetchT(mirrorUrl,{...init,mode:'cors'});
      if(r&&r.ok){serverIsDown=true;return r;}
    }catch{}
  }
  return null;
}

async function fetchWithMirrors(input,init){
  const pathname=new URL(input instanceof Request?input.url:input,self.location).pathname;
  if(!serverIsDown){
    try{
      const r=await fetchT(input,init);
      if(r.ok)return r;
    }catch{}
  }
  const mirrored=await tryMirrors(pathname,init);
  if(mirrored)return mirrored;
  const r=await fetchT(input,init);
  if(r?.ok)serverIsDown=false;
  return r;
}


// SW WebTorrent inicio
const WT_PATH='/webtorrent';
const WT_TO=15000;
function wtHdr(h){const o={};for(const[k,v]of h.entries())o[k]=v;return o;}
async function wtCli(id){
  if(id){const c=await self.clients.get(id).catch(()=>null);if(c)return c;}
  const all=await self.clients.matchAll({type:'window'});
  return all[0]||null;
}
async function wtHandle(e){
  const u=new URL(e.request.url);
  if(u.pathname.endsWith('/keepalive/')||u.pathname.endsWith('/keepalive'))return new Response(null,{status:204});
  if(u.pathname.endsWith('/cancel/')||u.pathname.endsWith('/cancel'))
    return new Response(new ReadableStream({start(c){c.enqueue(new Uint8Array([0]));}}));
  const cli=await wtCli(e.clientId||e.resultingClientId);
  if(!cli)return new Response('',{status:503});
  const ch=new MessageChannel();
  const q=[];
  let dead=false;
  ch.port1.onmessage=m=>{const r=q.shift();if(r)r(m.data);};
  const wait=()=>new Promise(r=>{
    q.push(r);
    setTimeout(()=>{const i=q.indexOf(r);if(i>=0){q.splice(i,1);r(undefined);}},WT_TO);
  });
  const ask=()=>{const p=wait();if(!dead)ch.port1.postMessage(true);return p;};
  const done=()=>{if(dead)return;dead=true;try{ch.port1.postMessage(false);}catch(x){}};
  const head=wait();
  try{
    cli.postMessage({
      type:'webtorrent',
      url:e.request.url,
      method:e.request.method,
      headers:wtHdr(e.request.headers),
      destination:e.request.destination,
      scope:self.registration.scope
    },[ch.port2]);
  }catch(x){return new Response('',{status:503});}
  const h=await head;
  if(!h)return new Response('',{status:504});
  if(h.body!=='STREAM')return new Response(h.body,{status:h.status,headers:h.headers});
  const body=new ReadableStream({
    async pull(ctrl){
      const chunk=await ask();
      if(chunk){ctrl.enqueue(chunk);return;}
      dead=true;
      ctrl.close();
    },
    cancel(){done();}
  });
  return new Response(body,{status:h.status,headers:h.headers});
}
// SW WebTorrent fin

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

async function cleanDLA(){
  try{
    const c=await caches.open(DLA_C);
    const ks=await c.keys();
    await Promise.all(ks.map(async req=>{
      const r=await c.match(req);
      if(r&&Date.now()>parseInt(r.headers.get('X-Expires')||0))await c.delete(req);
    }));
  }catch{}
}

async function runOPFS(){
  let shown=0;
  try{
    const root=await self.navigator.storage.getDirectory();
    let dir;
    try{dir=await root.getDirectoryHandle(OPFS_DIR);}catch{return shown;}
    const files=[];
    for await(const[name,handle]of dir.entries()){
      if(handle.kind==='file'&&name.endsWith('.js'))files.push([name,handle]);
    }
    const runOne=async([name,handle])=>{
      const txt=await(await handle.getFile()).text();
      const nFn=opts=>{
        if(!opts)return;
        shown++;
        return self.registration.showNotification(opts.title||'Che Agana',{
          body:opts.body||'',
          icon:opts.icon||N_ICON,
          badge:N_ICO,
          image:opts.image||N_BANNER,
          tag:opts.tag||('opfs-'+name),
          data:{url:opts.url||self.location.origin}
        });
      };
      const r=new Function('notify',txt)(nFn);
      if(r instanceof Promise)await Promise.race([r,new Promise((_,j)=>setTimeout(()=>j(new Error('timeout')),5000))]);
    };
    await Promise.allSettled(files.map(f=>runOne(f).catch(()=>{})));
  }catch{}
  return shown;
}

async function saveShareData(formData){
  const meta={title:formData.get('title')||'',text:formData.get('text')||'',url:formData.get('url')||'',files:[]};
  const raw=formData.getAll('files').filter(f=>f&&f.size>0);
  const sc=await caches.open(SHARE_C);
  const exp=String(Date.now()+SHARE_TTL);
  await Promise.all(raw.map(async(f,i)=>{
    const key='/__share_file_'+i;
    await sc.put(key,new Response(f,{headers:{'Content-Type':f.type||'application/octet-stream','X-Share-Name':f.name||('file'+i),'X-Share-Type':f.type||'','X-Expires':exp}}));
    meta.files.push({key,name:f.name||('file'+i),type:f.type||'',size:f.size});
  }));
  await sc.put(SHARE_KEY,new Response(JSON.stringify(meta),{headers:{'Content-Type':'application/json','X-Expires':exp}}));
}

async function clearShareData(){
  await caches.delete(SHARE_C);
}

async function cleanShare(){
  try{
    const c=await caches.open(SHARE_C);
    const meta=await c.match(SHARE_KEY);
    if(!meta)return;
    const exp=parseInt(meta.headers.get('X-Expires')||0);
    if(Date.now()>exp)await clearShareData();
  }catch{}
}

self.addEventListener('install',e=>{
  e.waitUntil(Promise.all([
    caches.open(V).then(c=>Promise.all(PRE.map(u=>
      fetch(new Request(u,{cache:'reload'})).then(r=>{if(r.ok)return c.put(u,r);console.warn('PRE 404',u,r.status);}).catch(err=>console.warn('PRE fail',u,err))
    ))),
    caches.open(PERM_C).then(c=>Promise.all(PRE_PERM.map(async u=>{
      if(await c.match(u))return;
      try{
        const r=await fetch(u);
        if(r.ok)await c.put(u,r);else console.warn('PERM 404',u,r.status);
      }catch(err){console.warn('PERM fail',u,err)}
    })))
  ]).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(ks=>Promise.all(
      ks.filter(k=>k!==V&&k!==TEMP_C&&k!==SHARE_C&&k!==EXT_C&&k!==DLA_C&&k!==PERM_C).map(k=>caches.delete(k))
    )).then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);

  // SW WebTorrent inicio
  if(url.origin===self.location.origin&&url.pathname.startsWith(WT_PATH)){
    e.respondWith(wtHandle(e));
    return;
  }
  // SW WebTorrent fin

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
      const exp=parseInt(meta.headers.get('X-Expires')||0);
      if(exp&&Date.now()>exp){await clearShareData();return new Response('null',{headers:{'Content-Type':'application/json'}});}
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

  if(e.request.headers.get('range'))return;

  const extEntry=EXT_CACHE.find(x=>url.hostname===x.origin);
  if(extEntry){
    e.respondWith((async()=>{
      const c=await caches.open(EXT_C);
      const cached=await c.match(e.request);
      if(cached)return cached;
      try{
        const r=await fetch(e.request);
        if(r?.ok){
          const rc=r.clone();
          if(extEntry.ttl>0){
            const buf=await rc.arrayBuffer();
            const h=new Headers(r.headers);
            h.set('X-Expires',String(Date.now()+extEntry.ttl));
            await c.put(e.request,new Response(buf,{status:r.status,statusText:r.statusText,headers:h}));
          }else{
            await c.put(e.request,rc);
          }
        }
        return r;
      }catch{return cached||new Response('',{status:504});}
    })());
    return;
  }

  if(url.origin!==self.location.origin)return;

  if(DJ.test(url.pathname)){
    const djHref=url.href;
    e.respondWith((async()=>{
      const c=await caches.open(V);
      try{
        const r=await fetchWithMirrors(djHref,{cache:'no-store'});
        if(r?.ok){
          const txt=await r.text();
          await c.put(djHref,new Response(txt,{status:200,headers:new Headers(r.headers)}));
          return new Response(txt,{headers:{'Content-Type':'application/json'}});
        }
      }catch{}
      const cc=await c.match(djHref);
      if(cc)return cc;
      return new Response('{}',{status:503});
    })());
    return;
  }

  if(url.pathname.endsWith('.md')||url.pathname.endsWith('.html')){
    e.respondWith((async()=>{
      const c=await caches.open(V);
      const cc=await c.match(e.request);
      if(cc){
        e.waitUntil((async()=>{
          try{
            const etag=cc.headers.get('etag');
            const r=await fetch(e.request,{cache:'no-store',...(etag&&{headers:{'If-None-Match':etag}})});
            if(r.status===304||!r?.ok)return;
            await c.put(e.request,r);
          }catch{}
        })());
        return cc;
      }
      try{
        const r=await fetchWithMirrors(e.request);
        if(r?.ok)await c.put(e.request,r.clone());
        return r;
      }catch{return new Response('',{status:503});}
    })());
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

  e.respondWith(
    caches.match(e.request).then(h=>{
      if(h)return h;
      return fetchWithMirrors(e.request).then(r=>{
        if(r?.status===200){const rc=r.clone();caches.open(V).then(c=>c.put(e.request,rc));}
        return r;
      }).catch(()=>caches.match('web/404.html'));
    })
  );
});

async function notifyCycle(){
  const shown=await runOPFS();
  await cleanDLA();
  await cleanShare();
  if(shown>0)return;
  await self.registration.showNotification('Che Agana',{
    body:'Ven a ver la frase del dia',icon:N_ICON,badge:N_ICO,image:N_BANNER,
    tag:'fallback',data:{url:self.location.origin+'/#'+FRASES_HTML}
  });
}

self.addEventListener('push',e=>{
  e.waitUntil(notifyCycle());
});

self.addEventListener('periodicsync',e=>{
  if(e.tag==='notify-check')e.waitUntil(notifyCycle());
});

self.addEventListener('notificationclick',e=>{
  e.notification.close();
  const target=e.notification.data?.url||self.location.origin;
  e.waitUntil(
    clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{
      const c=cs.find(x=>x.url.startsWith(self.location.origin)&&'focus' in x);
      if(c)return('navigate' in c?c.navigate(target):Promise.resolve(c)).then(wc=>(wc||c).focus());
      return clients.openWindow(target);
    })
  );
});

self.addEventListener('backgroundfetchsuccess',e=>{
  e.waitUntil((async()=>{
    const bgf=e.registration;
    const recs=await bgf.matchAll();
    const c=await caches.open(DLA_C);
    for(const rec of recs){
      const res=await rec.responseReady;
      const buf=await res.arrayBuffer();
      const h=new Headers(res.headers);
      h.set('X-Expires',String(Date.now()+DLA_TTL));
      await c.put(rec.request,new Response(buf,{status:res.status,statusText:res.statusText,headers:h}));
    }
    const cs=await self.clients.matchAll({type:'window'});
    cs.forEach(cl=>cl.postMessage({type:'DLA_DONE',id:bgf.id}));
    await bgf.updateUI({title:'Descarga completa'}).catch(()=>{});
  })());
});

self.addEventListener('backgroundfetchfail',e=>{
  e.waitUntil((async()=>{
    const bgf=e.registration;
    const recs=await bgf.matchAll();
    const c=await caches.open(DLA_C);
    await Promise.all(recs.map(rec=>c.delete(rec.request)));
    const cs=await self.clients.matchAll({type:'window'});
    cs.forEach(cl=>cl.postMessage({type:'DLA_FAIL',id:bgf.id}));
  })());
});

self.addEventListener('message',e=>{
  if(e.data==='RUN_OPFS')e.waitUntil(notifyCycle());
});