const V='v1';
const PRE=[
'index.html',
'web/es.html',
'web/estilo.css',
'web/search.html',
'web/blogs.html',
'web/fondo.json',
'web/favicon.ico',
'web/ICON.png',
'web/404.html',
'web/centralPage.html',
'web/otros/Archivos/Imagenes/pexels-eberhardgross-2098428.jpg',
'web/otros/Archivos/Fuentes/OpenDyslexic/OpenDyslexic-Regular.woff2',
'web/scripts/SwiperGallerys.js',
'web/scripts/chat-banner.js',
'web/scripts/list.json',
'web/scripts/Otros/core.js',
'web/scripts/Otros/MarkDownIT/markdown-it.min.js',
'web/scripts/Otros/MarkDownIT/markdownItAnchor.umd.min.js',
'web/scripts/Otros/MiniSearch/index.js',
'web/scripts/Otros/Swiper/swiper-bundle.min.css',
'web/scripts/Otros/Swiper/swiper-bundle.min.js'
];

const DJ=/\/data\.json(\?|$)/;
const DJ_URL='web/Dinamico/data.json';
const DJ_CK='dj_snapshot';

self.addEventListener('install',e=>{
e.waitUntil(
caches.open(V).then(c=>c.addAll(PRE)).then(()=>self.skipWaiting())
);
});

self.addEventListener('activate',e=>{
e.waitUntil(
caches.keys().then(ks=>Promise.all(
ks.filter(k=>k!==V).map(k=>caches.delete(k))
)).then(()=>self.clients.claim())
);
});

self.addEventListener('fetch',e=>{
const u=e.request.url;
if(e.request.method!=='GET')return;
if(DJ.test(u)){
e.respondWith(
fetch(e.request).catch(()=>caches.match(e.request))
);
return;
}
e.respondWith(
caches.match(e.request).then(h=>{
if(h)return h;
return fetch(e.request).then(r=>{
if(!r||r.status!==200||r.type==='opaque')return r;
const rc=r.clone();
caches.open(V).then(c=>c.put(e.request,rc));
return r;
}).catch(()=>caches.match('web/404.html'));
})
);
});

self.addEventListener('push',e=>{
let d={title:'🛍️ Yo Gano PY',body:'Hay Novedades 🤗!',icon:'web/ICON.png'};
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

async function chkDJ(){
try{
const r=await fetch(DJ_URL+'?_='+Date.now());
if(!r||!r.ok)return;
const txt=await r.text();
const c=await caches.open(V);
const prev=await c.match(DJ_CK);
const prevTxt=prev?await prev.text():null;
if(prevTxt===null){
await c.put(DJ_CK,new Response(txt));
return;
}
if(txt!==prevTxt){
await c.put(DJ_CK,new Response(txt));
await self.registration.showNotification('🛍️ Yo Gano PY',{
body:'¡Hay Novedades 🤗!',
icon:'web/ICON.png',
badge:'web/ICON.png',
data:{url:self.location.origin}
});
}
}catch(e){}
}

self.addEventListener('message',e=>{
if(e.data==='CHECK_DJ')e.waitUntil(chkDJ());
});
