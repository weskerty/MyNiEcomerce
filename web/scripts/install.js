!function(){
const W='https://yoganopy-push.marcoygor0.workers.dev';
const VP='BHhzutw-yWrRIzIXr3NS1VlY9Z0ryqQ5FRm-W-p3lBN6wj9jePY7tBqatF_OUkMWJcobIpzucuqqgkV159lC_Mk';

window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault();
  window._PWA=e;
  const b=document.getElementById('PI');
  if(b)b.style.display='';
});
window.addEventListener('appinstalled',()=>{
  window._PWA=null;
  const b=document.getElementById('PI');
  if(b)b.style.display='none';
});

function bindPI(){
  const b=document.getElementById('PI');
  if(!b||b._bound)return;
  if(window.__ENV?.pwa){b.style.display='none';return;}
  b._bound=true;
  function show(){if(window._PWA)b.style.display='';}
  show();
  navigator.serviceWorker.ready.then(show);
  window.addEventListener('beforeinstallprompt',show);
  b.onclick=()=>{
    const pi=document.querySelector('pwa-install');
    if(pi&&customElements.get('pwa-install')){pi.showDialog(true);return;}
    if(!window._PWA)return;
    window._PWA.prompt();
    window._PWA=null;
    b.style.display='none';
  };
}

function u8(s){
  const p=atob(s.replace(/-/g,'+').replace(/_/g,'/'));
  return Uint8Array.from(p,c=>c.charCodeAt(0));
}

function swR(){
  return navigator.serviceWorker.ready;
}

function bindNT(){
  const b=document.getElementById('NT');
  if(!b||b._bound)return;
  if(!('serviceWorker' in navigator)||!('PushManager' in window))return;
  if(Notification.permission==='denied')return;
  b._bound=true;

  async function upd(sw){
    try{
      const s=await sw.pushManager.getSubscription();
      b.textContent=s?'🔕 Desactivar Notificaciones':'🔔 Activar Notificaciones';
      b.style.display='block';
    }catch{}
  }

  async function tog(sw){
    b.disabled=true;
    try{
      const s=await sw.pushManager.getSubscription();
      if(s){
        await fetch(W+'/unsubscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({endpoint:s.endpoint})}).catch(()=>{});
        await s.unsubscribe();
      }else{
        if(await Notification.requestPermission()!=='granted'){b.disabled=false;return;}
        const ns=await sw.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:u8(VP)});
        await fetch(W+'/subscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(ns.toJSON())}).catch(()=>{});
      }
      await upd(sw);
    }catch{}
    b.disabled=false;
  }

  swR().then(sw=>{
    upd(sw);
    b.onclick=()=>tog(sw);
  }).catch(()=>{});
}

function bindAll(){bindPI();bindNT();}
document.addEventListener('contentLoaded',bindAll);
requestAnimationFrame(()=>requestAnimationFrame(bindAll));
}();