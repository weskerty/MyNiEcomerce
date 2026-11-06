(()=>{
const W='https://yoganopy-push.marcoygor0.workers.dev';
const VP='BHhzutw-yWrRIzIXr3NS1VlY9Z0ryqQ5FRm-W-p3lBN6wj9jePY7tBqatF_OUkMWJcobIpzucuqqgkV159lC_Mk';
const u8=s=>Uint8Array.from(atob(s.replace(/-/g,'+').replace(/_/g,'/')),c=>c.charCodeAt(0));
const P1=(p,b)=>fetch(W+p,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)}).catch(()=>{});
const SB1=async sw=>P1('/subscribe',(await sw.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:u8(VP)})).toJSON());
const RF1=s=>{try{if(Date.now()-(+localStorage.PS_T||0)<6048e5)return;localStorage.PS_T=Date.now();P1('/subscribe',s.toJSON())}catch{}};
let CC1=0;
window.PS1=btn=>{
if(!('serviceWorker' in navigator)||!('PushManager' in window)||Notification.permission==='denied')return false;
const upd=async sw=>{try{const s=await sw.pushManager.getSubscription();if(s)RF1(s);btn.textContent=s?'🔕 Desactivar Notificaciones':'🔔 Activar Notificaciones';btn.style.display='block'}catch{}};
const tog=async sw=>{
btn.disabled=true;
try{
const s=await sw.pushManager.getSubscription();
if(s){await P1('/unsubscribe',{endpoint:s.endpoint});await s.unsubscribe()}
else if(await Notification.requestPermission()==='granted')await SB1(sw);
await upd(sw);
}catch{}
btn.disabled=false;
};
Promise.race([navigator.serviceWorker.ready,new Promise((_,r)=>setTimeout(r,3000))]).then(sw=>{
upd(sw);
btn.addEventListener('click',()=>tog(sw));
if(CC1++)return;
navigator.serviceWorker.addEventListener('controllerchange',()=>navigator.serviceWorker.ready.then(async sw=>{
try{if(Notification.permission==='granted'&&!await sw.pushManager.getSubscription())await SB1(sw)}catch{}
}));
}).catch(()=>{});
return true;
};
})();
