window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();window._PWA=e;});
window.addEventListener('appinstalled',()=>{window._PWA=null;});
