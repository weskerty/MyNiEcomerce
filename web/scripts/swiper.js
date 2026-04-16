!function(){if(window.__GI)return;window.__GI=true;
const _S=document.createElement('style');
_S.textContent=`
.contenedor-imagenes-animado{width:100%;position:relative}
.gl-w{width:100%;position:relative}
.gl-w .swiper{overflow:hidden;width:100%;padding:20px 0;box-sizing:border-box}
.gl-w .swiper-wrapper{align-items:flex-start}
.gl-w .swiper-slide{width:195px!important;box-sizing:border-box;flex-shrink:0}
.gl-w .swiper-slide .gallery-item{height:100%}
.gl-w .swiper-slide-active{z-index:2}
.gl-w .swiper-slide:not(.swiper-slide-active) .gallery-item{transform:scale(0.95);opacity:0.7}
.gallery-item{display:flex;flex-direction:column;align-items:center;gap:0;padding:0 0 10px 0;min-height:190px;width:195px;box-sizing:border-box;background:linear-gradient(135deg,rgba(255,255,255,.25) 0%,rgba(255,255,255,.05) 50%,rgba(255,255,255,.15) 100%);border:1px solid rgba(255,255,255,.2);border-bottom:1px solid rgba(255,255,255,.05);border-radius:24px;box-shadow:0 8px 32px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.3),inset 0 -1px 0 rgba(255,255,255,.05);transition:transform .3s ease,box-shadow .3s ease;cursor:pointer;overflow:hidden;position:relative;will-change:transform;text-decoration:none;color:white}
.gallery-item::before{content:'';position:absolute;top:0;left:-50%;width:200%;height:50%;background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,transparent 100%);pointer-events:none;z-index:1}
.gallery-item:hover{transform:translateY(-3px) scale(1.02);background:linear-gradient(135deg,rgba(255,255,255,.35) 0%,rgba(255,255,255,.1) 50%,rgba(255,255,255,.25) 100%);box-shadow:0 12px 40px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.4),inset 0 -1px 0 rgba(255,255,255,.08);text-decoration:none;color:white}
.gallery-item img{width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:24px 24px 0 0;flex-shrink:0;position:relative;z-index:0;display:block}
.gallery-item .menu-content{flex:1;text-align:center;padding:10px 15px;position:relative;z-index:2;width:100%;box-sizing:border-box}
.gallery-item .menu-content p{margin:0;font-size:1.1em;color:white;text-shadow:0 1px 4px rgba(0,0,0,.3);line-height:1.3;text-decoration:none;overflow-wrap:break-word;word-break:break-word;hyphens:auto;white-space:normal}
.grid-gallery{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:20px;padding:20px}
.grid-gallery .gallery-item{width:100%;min-height:0;height:auto}
.grid-gallery .gallery-item .menu-content{height:auto;flex-shrink:0}
@media(prefers-reduced-motion:reduce){
  .gl-w .swiper-slide:not(.swiper-slide-active) .gallery-item{transform:none!important;opacity:1!important}
  .gallery-item:hover{transform:none!important}
}`;
document.head.appendChild(_S);

const DJ='web/Dinamico/data.json',SW_CDN='https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.',SW_LOCAL='web/scripts/Otros/Swiper/swiper12-bundle.min.';
let SR=false,SL=false,SQ=[];
const JC={},SI=new Set();
let IO_Q=[],IO_T=null;
const IO=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){const c=x.target;IO.unobserve(c);IO_Q.push(c);if(!IO_T)IO_T=setTimeout(fQ,0)}})},{rootMargin:'200px'});
function fQ(){IO_T=null;const batch=IO_Q.splice(0);let i=0;function nx(){if(i>=batch.length)return;const c=batch[i++];c.__ld&&c.__ld().then(()=>setTimeout(nx,50))}nx()}
function lS(cb){if(SR){cb();return}if(SL){SQ.push(cb);return}SL=true;SQ.push(cb);const c=document.createElement('link');c.rel='stylesheet';c.href=SW_CDN+'css';c.onerror=()=>c.href=SW_LOCAL+'css';document.head.appendChild(c);const j=document.createElement('script');j.src=SW_CDN+'js';const d=()=>{SR=true;SQ.forEach(f=>f());SQ=[]};j.onload=d;j.onerror=()=>{const f=document.createElement('script');f.src=SW_LOCAL+'js';f.onload=d;document.head.appendChild(f)};document.head.appendChild(j)}
function fN(p){return p.split('/').pop().replace(/\.[^.]+$/,'')}
function nN(n){const m=n.match(/NB=([^.]+)/);return m?m[1]:n}
function mL(p){return p.replace(/\.[^.]+$/,'.md')}
async function lGD(j){if(JC[j]!==undefined)return JC[j];if(JC[j+'_p'])return JC[j+'_p'];JC[j+'_p']=fetch(j).then(r=>r.json()).then(d=>{JC[j]=d.galleries;delete JC[j+'_p'];return JC[j]}).catch(()=>{JC[j]=null;delete JC[j+'_p'];return null});return JC[j+'_p']}
function rI(g,k,f){const v=g[k];if(!v)return[];if(Array.isArray(v))return f?v.filter(p=>p.includes('/'+f+'/')):v;if(f&&v[f])return v[f];return Object.values(v).flat()}
function cI(p){const n=fN(p),t=nN(n);return`<a href="${mL(p)}" class="gallery-item"><img src="${p}" loading="lazy" decoding="async" fetchpriority="low" alt="${t}"/><div class="menu-content"><p>${t}</p></div></a>`}
function dS(){SI.forEach(sw=>{if(!document.contains(sw.el)){sw.destroy(true,true);SI.delete(sw)}})}
function pC(c){if(c.dataset.sw)return false;if(!c.parentNode.classList.contains('gl-w')){const w=document.createElement('div');w.className='gl-w';c.parentNode.insertBefore(w,c);w.appendChild(c)}c.classList.add('swiper');c.dataset.sw=1;return true}
function bSC(){return{slidesPerView:'auto',spaceBetween:16,centeredSlides:true,rewind:true,watchSlidesProgress:true,observer:true,observeParents:true,resizeObserver:true,autoplay:{delay:3500,disableOnInteraction:false,pauseOnMouseEnter:true}}}
function mSw(c,html){c.innerHTML=`<div class="swiper-wrapper">${html}</div>`;const sw=new Swiper(c,bSC());SI.add(sw)}
function cSw(c,imgs){if(!pC(c))return;mSw(c,imgs.map(p=>`<div class="swiper-slide">${cI(p)}</div>`).join(''))}
function cG(c,imgs){let h='',i=0,l=imgs.length;for(;i<l;i++)h+=cI(imgs[i]);c.innerHTML=h}
function cMD(c){const imgs=[...c.querySelectorAll('img')].map(i=>({s:i.src,a:i.alt||fN(i.src)}));if(!imgs.length)return;if(imgs.length<3){c.innerHTML=imgs.map(i=>`<a href="${i.s}" class="gallery-item" target="_blank"><img src="${i.s}" loading="lazy" decoding="async" alt="${i.a}"/><div class="menu-content"><p>${i.a}</p></div></a>`).join('');return}if(!pC(c))return;mSw(c,imgs.map(i=>`<div class="swiper-slide"><a href="${i.s}" class="gallery-item"><img src="${i.s}" loading="lazy" decoding="async" alt="${i.a}"/><div class="menu-content"><p>${i.a}</p></div></a></div>`).join(''))}
async function pCont(c,isSw){const j=c.dataset.jsonPath||DJ,k=c.dataset.galleryKey,f=c.dataset.pathFilter,key=k||c.id.replace(/-gallery|-grid/g,'');const gd=await lGD(j);if(!gd){c.innerHTML='<p>Error</p>';return}const imgs=rI(gd,key,f);if(!imgs.length){c.innerHTML='';return}isSw?cSw(c,imgs):cG(c,imgs)}
let iGR=false;
async function iG(){if(iGR)return;iGR=true;try{const s=[...document.querySelectorAll('.contenedor-imagenes-animado:not([data-gi])')],g=[...document.querySelectorAll('.grid-gallery:not([data-gi])')],m=[...document.querySelectorAll('.galeriaMD:not([data-gi])')];if(!s.length&&!g.length&&!m.length)return;dS();const r=(c,t)=>{c.dataset.gi=1;c.__ld=async()=>{t?await pCont(c,true):await pCont(c,false)}};s.forEach(c=>{r(c,1);IO.observe(c)});g.forEach(c=>{r(c,0);IO.observe(c)});m.forEach(c=>{c.dataset.gi=1;c.__ld=()=>cMD(c);IO.observe(c)});if((s.length||m.length)&&!SR)lS(()=>{});}finally{iGR=false}}
document.getElementById('content').addEventListener('contentLoaded',iG);iG()}();