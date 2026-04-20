!function(){
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
  b._bound=true;
  function show(){if(window._PWA)b.style.display='';}
  show();
  navigator.serviceWorker.ready.then(show);
  window.addEventListener('beforeinstallprompt',show);
  b.onclick=()=>{if(!window._PWA)return;window._PWA.prompt();window._PWA=null;b.style.display='none';};
}
document.addEventListener('contentLoaded',bindPI);
bindPI();
}();
