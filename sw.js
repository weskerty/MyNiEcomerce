const V='v18';
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
'web/ICON.png',
'web/404.html',
'web/otros/Archivos/HTML/centralPage.html',
'web/fondo.json',
'web/otros/Archivos/Imagenes/pexels-cody-king-433493-1118667.jpg',
'web/otros/Archivos/Imagenes/Permanente/404.avif',
'web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/man_factory_worker_animated.avif',
'web/scripts/my.js',
'web/scripts/chat-banner.js',
'web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/first_quarter_moon_face_animated.avif',
'web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/sun_with_face_animated.avif',
'web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/TelegramLogo.svg',
'web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/WhatsAppLogo.svg'
];

const TEMP_ROUTES=[
  {match:'/api/',ttl:86400000},
];

const DJ=/\/data\.json(\?|$)/;
const DJ_URL='web/Dinamico/data.json';
const DJ_CK='__dj_snap';
const TS_CK='__chk_ts';
const CHK_INT=36000000;
const TEMP_C=V+'-tmp';
const TMP_META='__tmp_meta';

async function getTmpMeta(){
  try{const c=await caches.open(TEMP_C);const r=await c.match(TMP_META);return r?JSON.parse(await r.text()):{};} catch{return{};}
}
async function setTmpMeta(m){
  const c=await caches.open(TEMP_C);await c.put(TMP_META,new Response(JSON.stringify(m)));
}
async function tmpGet(req){
  const m=await getTmpMeta();const exp=m[req.url];
  if(!exp||Date.now()>exp)return null;
  const c=await caches.open(TEMP_C);return c.match(req);
}
async function tmpPut(req,res,ttl){
  const c=await caches.open(TEMP_C);await c.put(req,res.clone());
  const m=await getTmpMeta();m[req.url]=Date.now()+ttl;await setTmpMeta(m);
}

self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open(V).then(c=>c.addAll(PRE)).then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(ks=>Promise.all(
      ks.filter(k=>k!==V&&k!==TEMP_C).map(k=>caches.delete(k))
    )).then(()=>self.clients.claim())
  );
});

async function chkDJ(){
  try{
    const r=await fetch(DJ_URL+'?_='+Date.now());
    if(!r||!r.ok)return;
    const txt=await r.text();
    const c=await caches.open(V);
    const prev=await c.match(DJ_CK);
    const prevTxt=prev?await prev.text():null;
    await c.put(DJ_CK,new Response(txt));
    await c.put(TS_CK,new Response(String(Date.now())));
    if(prevTxt===null)return;
    if(txt!==prevTxt){
      await self.registration.showNotification('Che Agana',{
        body:'Hay Novedades!',
        icon:'web/ICON.png',
        badge:'web/ICON.png',
        data:{url:self.location.origin}
      });
    }
  }catch(e){}
}

async function maybeCHK(){
  try{
    const c=await caches.open(V);
    const last=await c.match(TS_CK);
    const ts=last?parseInt(await last.text()):0;
    if(Date.now()-ts<CHK_INT)return;
    await chkDJ();
  }catch(e){}
}

self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);

  if(e.request.method!=='GET')return;

  if(url.origin!==self.location.origin)return;

  if(DJ.test(url.pathname)){
    e.respondWith(
      fetch(e.request).then(r=>{
        if(r&&r.ok)caches.open(V).then(c=>c.put(e.request,r.clone()));
        return r;
      }).catch(()=>caches.match(e.request))
    );
    return;
  }

  const tmpRoute=TEMP_ROUTES.find(r=>url.pathname.startsWith(r.match));
  if(tmpRoute){
    e.respondWith((async()=>{
      const cached=await tmpGet(e.request);
      if(cached)return cached;
      const r=await fetch(e.request);
      if(r&&r.ok)await tmpPut(e.request,r,tmpRoute.ttl);
      return r;
    })());
    return;
  }

  e.waitUntil(maybeCHK());

  e.respondWith(
    caches.match(e.request).then(h=>{
      if(h)return h;
      return fetch(e.request).then(r=>{
        if(r&&r.status===200){
          const rc=r.clone();
          caches.open(V).then(c=>c.put(e.request,rc));
        }
        return r;
      }).catch(()=>caches.match('web/404.html'));
    })
  );
});

self.addEventListener('push',e=>{
  let d={title:'Che Agana',body:'Hay Novedades! 🤗',icon:'web/ICON.png'};
  try{d={...d,...e.data.json()};}catch(err){}
  e.waitUntil(
    self.registration.showNotification(d.title,{
      body:d.body,
      icon:d.icon||'web/ICON.png',
      badge:'web/ICON.png',
      data:{url:self.location.origin}
    })
  );
});

self.addEventListener('notificationclick',e=>{
  e.notification.close();
  e.waitUntil(
    clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{
      const c=cs.find(x=>x.url.startsWith(self.location.origin)&&'focus' in x);
      if(c)return c.focus();
      return clients.openWindow(self.location.origin);
    })
  );
});

self.addEventListener('message',e=>{
  if(e.data==='CHECK_DJ')e.waitUntil(chkDJ());
});
