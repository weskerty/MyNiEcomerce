!function(){
const L=window.__CFG&&window.__CFG.DATADOWNLOAD,K='DD1_R',IM=/\.(avif|webp|jpe?g|png|gif)$/i,CN=2;
if(!Array.isArray(L)||!L.length||window.__DD1)return;
window.__DD1=1;
const WK=(v,o=[])=>{typeof v=='string'?o.push(v):v&&typeof v=='object'&&Object.values(v).forEach(x=>WK(x,o));return o};
const LD=async j=>{
let g=window.__DJ&&window.__DJ[j];
if(!g){try{g=(await(await fetch(j)).json()).galleries}catch{return null}}
const a=g?WK(g).filter(p=>IM.test(p)):[];
return a.length?a:null;
};
const DL=async u=>{
try{
if(await caches.match(u))return;
const r=await fetch(u,{priority:'low'});
if(r.ok)await r.arrayBuffer();
}catch{}
};
const Q=async a=>{
let i=0;
await Promise.all(Array.from({length:CN},async()=>{while(i<a.length)await DL(a[i++])}));
};
const CL=async a=>{
for(const k of await caches.keys()){
const c=await caches.open(k);
for(const u of a)await c.delete(u);
}
};
const RN=async()=>{
if(document.hidden||!(navigator.serviceWorker&&navigator.serviceWorker.controller))return;
const R=await Promise.all(L.map(LD));
if(R.some(x=>!x))return;
const cur=new Set(R.flat());
if(!(navigator.connection&&navigator.connection.saveData)&&!document.body.classList.contains('low-perf'))await Q([...cur].map(p=>p.replace(IM,'.html')));
let pv=[];
try{pv=JSON.parse(localStorage.getItem(K))||[]}catch{}
const gone=pv.filter(p=>!cur.has(p));
if(gone.length)await CL(gone.flatMap(p=>[p,p.replace(IM,'.html')]));
try{localStorage.setItem(K,JSON.stringify([...cur]))}catch{}
};
setTimeout(()=>RN().catch(()=>{}),9000);
}();
