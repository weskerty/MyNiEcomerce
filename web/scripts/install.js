!function(){
const PI_K='PI_SEEN1',PI_N='PI_NO1';
const PI_F=localStorage.getItem(PI_K);
if(!PI_F)localStorage.setItem(PI_K,'1');
const PI_S=PI_F&&!window.__ENV?.pwa&&!localStorage.getItem(PI_N);
customElements.whenDefined('pwa-install').then(()=>{
  const p=document.querySelector('pwa-install');
  if(!p)return;
  p.addEventListener('pwa-user-choice-result-event',e=>{
    if(e.detail?.message==='dismissed')localStorage.setItem(PI_N,'1');
  });
  if(!PI_S)return;
  const s=()=>p.showDialog();
  p.isInstallAvailable?s():p.addEventListener('pwa-install-available-event',s,{once:true});
});
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
  b.onclick=()=>{
    const pi=document.querySelector('pwa-install');
    if(pi&&customElements.get('pwa-install')){pi.showDialog(true);return;}
    if(!window._PWA)return;
    window._PWA.prompt();
    window._PWA=null;
    b.style.display='none';
  };
}

document.addEventListener('contentLoaded',bindPI);
requestAnimationFrame(()=>requestAnimationFrame(bindPI));
}();