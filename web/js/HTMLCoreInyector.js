(function(){
if(window.__CFG)return;
try{new Function('a?.b')}catch(e){return}
const cs=document.currentScript,r=cs&&cs.dataset.r;
if(cs&&cs.dataset.a&&!document.head.querySelector('title')){
 const t=document.createElement('title'),l=document.createElement('link');
 t.textContent=(cs.dataset.t||cs.dataset.a)+' - Che Agana';l.rel='canonical';l.href='https://cheagana.com/A/'+cs.dataset.a;
 document.head.append(t,l);
}
let p=r?encodeURI(r):location.pathname.slice(1);
if(!/\.html$/i.test(p))p+='.html';
history.replaceState(null,'','/#'+p+location.hash);
const h=document.head;
h.querySelectorAll('script,base,meta[name=viewport]').forEach(e=>e.remove());
const hh=h.innerHTML;
document.write('<plaintext hidden>');
fetch('/').then(r=>r.text()).then(t=>{
 const d=new DOMParser().parseFromString(t,'text/html'),ti=d.title;
 d.head.querySelectorAll('title,meta[charset],meta[property],meta[name=description],meta[name^=twitter],link[rel=canonical]').forEach(e=>e.remove());
 const s='<!DOCTYPE html><html lang="es"><head>'+hh+d.head.innerHTML+'</head>'+d.body.outerHTML+'</html>';
 document.open();document.write(s);document.close();
 const c=document.getElementById('content'),f=()=>{if(decodeURI(window.__RUTA||'')!==decodeURI(p)){document.title=ti;c.removeEventListener('contentLoaded',f)}};
 c.addEventListener('contentLoaded',f);
});
})();
