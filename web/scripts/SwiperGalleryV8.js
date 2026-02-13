(function(){
const DJ='web/Dinamico/data.json',
CB='https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.',
LB='web/scripts/Otros/Swiper/8.4.5-bundle.min.';
let SW=false,SWL=false,SWQ=[];
const JC={},SW_I=[];

function lS(cb){
if(SW){cb();return;}
if(SWL){SWQ.push(cb);return;}
SWL=true;SWQ.push(cb);
const lk=document.createElement('link');
lk.rel='stylesheet';lk.href=CB+'css';
lk.onerror=function(){this.href=LB+'css';};
document.head.appendChild(lk);
const st=document.createElement('style');
st.textContent=`.gl-w{overflow:hidden;width:100%;}.gl-w .swiper{overflow:visible;width:100%;padding:30px 0;}.gl-w .swiper-slide{width:220px;}.gl-w .swiper-slide .gallery-item{height:100%;}.gl-w .swiper-slide:not(.swiper-slide-active) .gallery-item{transform:scale(0.9);opacity:0.7;}.gl-w .swiper-slide-active{z-index:2;}`;
document.head.appendChild(st);
const sc=document.createElement('script');
sc.src=CB+'js';
const done=()=>{SW=true;SWQ.forEach(f=>f());SWQ=[];};
sc.onload=done;
sc.onerror=function(){const fb=document.createElement('script');fb.src=LB+'js';fb.onload=done;document.head.appendChild(fb);};
document.head.appendChild(sc);
}

function eN(n){const m=n.match(/NB=([^.]+)/);return m?m[1]:n;}
function sN(p){return p.split('/').pop().replace(/\.[^.]+$/,'');}
function lnk(p){return p.replace(/\.[^.]+$/,'.md');}

async function lGD(j){
if(JC[j]!==undefined)return JC[j];
if(JC[j+'_p'])return JC[j+'_p'];
JC[j+'_p']=fetch(j).then(r=>{if(!r.ok)throw 0;return r.json();})
.then(d=>{JC[j]=d.galleries;delete JC[j+'_p'];return d.galleries;})
.catch(()=>{JC[j]=null;delete JC[j+'_p'];return null;});
return JC[j+'_p'];
}

function rI(g,k,f){
const v=g[k];
if(!v)return[];
if(Array.isArray(v))return f?v.filter(p=>p.includes('/'+f+'/')||p.includes('/'+f+'.')):v;
if(f&&v[f])return v[f];
return Object.values(v).flat();
}

function cGI(p){
const n=sN(p);
return`<a href="${lnk(p)}" class="gallery-item"><img data-src="${p}" class="swiper-lazy" alt="${eN(n)}"/><div class="swiper-lazy-preloader"></div><div class="menu-content"><h3>${eN(n)}</h3></div></a>`;
}

function cGIGrid(p){
const n=sN(p);
return`<a href="${lnk(p)}" class="gallery-item"><img src="${p}" alt="${eN(n)}" loading="lazy"/><div class="menu-content"><h3>${eN(n)}</h3></div></a>`;
}

function dSW(){
for(let i=SW_I.length-1;i>=0;i--){
const sw=SW_I[i];
try{
if(!document.contains(sw.el)){
sw.destroy(true,true);
SW_I.splice(i,1);
}
}catch(e){}
}
}

function mkSW(c){
if(c.swiper)return false;
if(!c.parentNode.classList.contains('gl-w')){
const w=document.createElement('div');
w.className='gl-w';
c.parentNode.insertBefore(w,c);
w.appendChild(c);
}
c.classList.add('swiper');
return true;
}

function cSw(c,imgs){
if(!mkSW(c))return;
c.innerHTML=`<div class="swiper-wrapper">${imgs.map(p=>`<div class="swiper-slide">${cGI(p)}</div>`).join('')}</div>`;
const sw=new Swiper(c,{
slidesPerView:'auto',
spaceBetween:20,
loop:true,
centeredSlides:true,
preloadImages:false,
lazy:true,
autoplay:{delay:3000,disableOnInteraction:false,pauseOnMouseEnter:true},
loopedSlides:imgs.length
});
SW_I.push(sw);
}

function cG(c,imgs){
c.innerHTML=imgs.map(cGIGrid).join('');
}

function cMD(c){
const imgs=[...c.querySelectorAll('img')].map(i=>({src:i.src,alt:i.alt||sN(i.src)}));
if(!imgs.length)return;
if(imgs.length<3){
c.innerHTML=imgs.map(i=>`<a href="${i.src}" class="gallery-item" target="_blank"><img src="${i.src}" alt="${i.alt}" loading="lazy"/><div class="menu-content"><h3>${i.alt}</h3></div></a>`).join('');
return;
}
if(!mkSW(c))return;
c.innerHTML=`<div class="swiper-wrapper">${imgs.map(i=>`<div class="swiper-slide"><a href="${i.src}" class="gallery-item"><img data-src="${i.src}" class="swiper-lazy" alt="${i.alt}"/><div class="swiper-lazy-preloader"></div><div class="menu-content"><h3>${i.alt}</h3></div></a></div>`).join('')}</div>`;
SW_I.push(new Swiper(c,{
slidesPerView:'auto',
spaceBetween:20,
loop:true,
centeredSlides:true,
preloadImages:false,
lazy:true,
autoplay:{delay:3000,disableOnInteraction:false,pauseOnMouseEnter:true},
loopedSlides:imgs.length
}));
}

async function pC(c,isSw){
const j=c.dataset.jsonPath||DJ,k=c.dataset.galleryKey,f=c.dataset.pathFilter;
const gd=await lGD(j);
if(!gd){c.innerHTML='<p>Error al cargar datos</p>';return;}
const imgs=rI(gd,k||c.id.replace(/-gallery|-grid/g,''),f);
if(!imgs.length){c.innerHTML='<p>Sin Elementos</p>';return;}
isSw?cSw(c,imgs):cG(c,imgs);
}

async function iG(){
const root=document.getElementById('content');
const sE=[...root.querySelectorAll('.contenedor-imagenes-animado:not([data-gi])')];
const gE=[...root.querySelectorAll('.grid-gallery:not([data-gi])')];
const mE=[...root.querySelectorAll('.galeriaMD:not([data-gi])')];
if(!sE.length&&!gE.length&&!mE.length)return;
dSW();
sE.forEach(c=>c.setAttribute('data-gi','1'));
gE.forEach(c=>c.setAttribute('data-gi','1'));
mE.forEach(c=>c.setAttribute('data-gi','1'));
const run=async()=>{
await Promise.all([
...sE.map(c=>pC(c,true)),
...gE.map(c=>pC(c,false))
]);
mE.forEach(c=>cMD(c));
};
(sE.length||mE.length)&&!SW?lS(run):run();
}

document.getElementById('content').addEventListener('contentLoaded',iG);
iG();
})();