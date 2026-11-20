!function(){
const WA_BASE="https://wa.me/595972184435?text=";
const SHARE_ALL=true;
const IMG_BASE="web/recursos/svg/chatbanner/";
const OFICIALPROVIDER=["595972184435"];
const HIDE_PATHS=["web/🧩 Apps/","web/🎮 Juegos/","web/paginas/centralPage.html","web/DemoDire","web/pruebas/"];
const GL_P=["web/es.html","web/blogs.html","web/search.html","web/paginas/apps.html","web/paginas/Grupos.html","web/tienda/","web/Blogs/"];
const NB_SC=false;
const NB_ROUTES=[
  {path:'web/es.html',label:'Tienda',emoji:'🛍️',r:'web/es.html web/tienda/'},
  {path:'web/blogs.html',label:'Blog',emoji:'🔔',r:'web/blogs.html web/Blogs/'},
  {path:'web/paginas/apps.html',label:'Apps',emoji:'🎮',r:'web/paginas/apps.html web/🧩 Apps/ web/🎮 Juegos/'},
  {path:'web/paginas/Grupos.html',label:'Eventos',emoji:'👥',r:'web/paginas/Grupos.html'},
  {path:'web/search.html',label:'Buscar',emoji:'🔍',r:'web/search.html'}
];
const night=(h=>h>=19||h<5)(new Date().getHours());
const grSrc=IMG_BASE+(night?"first_quarter_moon_face_animated.avif":"sun_with_face_animated.avif");

let RT_K1,RT_V1;
function CB_H1(){
  const r=window.__RUTA||"";
  if(r!==RT_K1){RT_K1=r;try{RT_V1=decodeURIComponent(r)}catch(e){RT_V1=r}}
  return RT_V1;
}
function isHidden(){
  const r=CB_H1();
  return !r.endsWith("Grilla.vr.html")&&HIDE_PATHS.some(p=>r.includes(p));
}
function isGL(){
  const r=CB_H1();
  return r.endsWith("Grilla.vr.html")||GL_P.some(p=>r.startsWith(p));
}
function getRouteWA(){
  const mNM=CB_H1().match(/NM=(\d+)-/);
  return mNM?mNM[1]:null;
}

const css=document.createElement("style");
css.textContent=`
.NB1,.NB_HD{position:fixed;z-index:9999;display:flex;align-items:center;box-sizing:border-box;font-family:var(--font);color:var(--RD_F);text-shadow:0 1px 3px rgba(0,0,0,.35);border:1px solid var(--RD_L);background:var(--RD_C);backdrop-filter:var(--RD_GF);box-shadow:var(--RD_SH);transition:opacity .3s ease-out,transform .4s cubic-bezier(.4,0,.2,1),visibility .4s}
.NB_HD{top:0;left:0;right:0;height:64px;padding:0 var(--RD_W);border-width:0 0 1px}
.NB_HD .NB_CX{margin-left:auto;padding:0}
body.NB_V{padding-top:64px}
body.NB_V #content .NB_TT{display:none}
.NB1>*{order:2;flex-shrink:0}
.NB_I{display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:1px solid #0000;color:inherit;text-decoration:none;cursor:pointer;transition:background .2s}
.NB_E{line-height:1}
.NB_L{white-space:nowrap;color:rgba(255,255,255,.75)}
.NB_I[aria-current] .NB_L{color:#fff;font-weight:600}
.NB_BR,.NB_GR{display:flex;align-items:center;gap:8px;font-family:var(--font-h);font-weight:700;white-space:nowrap;color:inherit;text-decoration:none;animation:NB_FI .5s ease}
.NB_BR img{width:30px;height:30px}
.NB_GR img{width:34px;height:34px}
.NB_BR{font-size:1.1rem}
.NB_GR{font-size:1.05rem}
.NB_HD:is(.NB_G,.NB_P) .NB_BR,.NB_HD:not(.NB_G) .NB_GR,.NB_HD:is(.NB_G,:not(.NB_P)) .NB_PT{display:none}
.NB_PT{display:flex;align-items:center;animation:NB_FI .5s ease}
.NB_PT>*{display:flex;align-items:center;gap:.3em;margin:0;padding:0;border:0;font:700 1.15rem var(--font-h);color:inherit;white-space:nowrap}
.NB_PT svg{height:1.9em;width:auto;margin:-.35em 0}
.NB_PT img{height:1.5em;width:auto}
@keyframes NB_FI{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:none}}
.NB_BD{position:absolute;top:-7px;right:-7px;min-width:18px;height:18px;padding:0 4px;box-sizing:border-box;border:1.5px solid rgba(255,255,255,.3);border-radius:9px;background:#ef4444;color:#fff;font-size:11px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,.4)}
.NB_CX .NB_CT{position:relative}
.NB_CX.NB_BN{animation:NB_BK .6s cubic-bezier(.22,1,.36,1)}
@keyframes NB_BK{30%{transform:scale(1.14)}60%{transform:scale(.96)}100%{transform:none}}
.NB_CX{display:flex;align-items:center}
.NB_CX:empty{display:none}
.NB_CX button{display:inline-flex;align-items:center;gap:6px;height:40px;padding:0 16px;border-radius:10px;font:600 15px var(--font);text-shadow:inherit;white-space:nowrap;cursor:pointer}
.NB_CX .NB_AK{font-weight:500}
.NB_TM{display:grid;place-items:center;width:38px;height:38px;padding:0;border-radius:10px;cursor:pointer}
.NB_S{width:1px;height:26px;background:rgba(255,255,255,.15)}
:is(.NB1,.NB_HD).NB_H{opacity:0;pointer-events:none;visibility:hidden}
.NB_HD.NB_H{transform:translateY(-100%)}
@media(orientation:portrait){
.NB1{bottom:8px;left:50%;transform:translateX(-50%);height:56px;padding:0 6px;gap:2px;border-radius:28px;box-shadow:0 8px 28px rgba(0,0,0,.28)}
.NB1.NB_H{transform:translateX(calc(50vw - 34px - 50%)) scale(.14)}
body.NB_V{padding-bottom:76px}
.NB_I{flex-direction:column;gap:3px;min-width:62px;height:48px;padding:0 6px;border-radius:24px}
.NB_E{font-size:24px}
.NB_L{font-size:11px}
.NB_I0{order:0}.NB_S0{order:1}.NB_S1{order:3}.NB_I4{order:4}
.NB_TM,.NB1.NB_C .NB_M{display:none}
.NB_CX{padding:0 6px}
}
@media(orientation:landscape){
.NB1{top:0;right:0;height:64px;padding:0 var(--RD_W);gap:4px;border:0;background:none;backdrop-filter:none;box-shadow:none}
.NB1.NB_H{transform:translateY(-100%)}
.NB1 .NB_I{order:1;gap:7px;height:40px;padding:0 12px;border-radius:10px}
.NB_E{font-size:18px}
.NB_L{font-size:15px;font-weight:500}
.NB_S{display:none}
.NB1 .NB_CX{order:0;margin-right:12px}
.NB_TM{margin-left:10px}
.cb-pk,.cb-fng{display:none}
body.NB_SD :is(.NB1,.NB_HD):not(.NB_H){transform:translateY(-100%)}
}
@media(orientation:landscape) and (max-width:980px){.NB1 .NB_L,.NB_HD .NB_BR span{display:none}}
.NB_F1{margin-top:72px;padding:48px var(--RD_W) 32px;border-top:1px solid var(--RD_L);background:var(--RD_C);backdrop-filter:var(--RD_GF);box-shadow:var(--RD_SH);color:var(--RD_F)}
body:not(.NB_V) .NB_F1{display:none}
.NB_F2{display:grid;grid-template-columns:2fr repeat(3,1fr);gap:32px;max-width:1120px;margin:0 auto}
@media(max-width:760px){.NB_F2{grid-template-columns:1fr 1fr}.NB_F2>div:first-child{grid-column:1/-1}}
.NB_F2 b{display:block;font-size:.85rem;margin-bottom:10px}
.NB_F2>div>a:not(.NB_BR){display:block;padding:4px 0;color:var(--RD_MF);font-size:.92rem}
.NB_F2>div>a:not(.NB_BR):hover{color:var(--RD_F)}
.NB_F2 p{margin:14px 0 18px;max-width:28em;color:var(--RD_MF);font-size:.92rem}
.NB_F2 .NB_BR{display:inline-flex;font-size:1.1rem}
.NB_F3{display:flex;gap:8px}
.NB_F3 a{width:38px;height:38px;display:grid;place-items:center;padding:0;border:1px solid var(--RD_L);border-radius:10px;background:none}
.NB_F3 .lk::before{width:18px;height:18px}
.NB_F3 img{width:18px;height:18px}
.cb-pk{position:fixed;bottom:80px;left:50%;transform:translateX(-50%);font-size:45px;opacity:0;pointer-events:none;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.4));will-change:transform,opacity;z-index:10000}
.cb-pk.cb-dr{animation:cb-pk 1s ease-in-out;animation-fill-mode:both}
@keyframes cb-pk{0%{opacity:0;transform:translateX(-50%) translateY(-30px) rotate(-12deg) scale(0.4)}20%{opacity:1;transform:translateX(-50%) translateY(0px) rotate(6deg) scale(0.9)}40%{transform:translateX(-50%) translateY(10px) rotate(-4deg) scale(1.05)}55%{transform:translateX(-50%) translateY(20px) rotate(2deg) scale(1.1)}70%{transform:translateX(-50%) translateY(30px) rotate(-1deg) scale(1.05)}85%{opacity:1;transform:translateX(-50%) translateY(40px) rotate(0deg) scale(0.95)}100%{opacity:0;transform:translateX(-50%) translateY(54px) rotate(0deg) scale(0.7)}}
.cb-d{flex-direction:column;width:min(440px,100vw);max-width:100vw;height:100dvh;max-height:100dvh;margin:0 0 0 auto;padding:0;border-width:0 0 0 1px;border-radius:24px 0 0 24px;overflow:hidden}
.cb-d[open]{display:flex;animation:CB_IN .34s cubic-bezier(.22,1,.36,1)}
@keyframes CB_IN{from{transform:translateX(100%)}}
@keyframes CB_UP{from{transform:translateY(100%)}}
@media(orientation:portrait){.cb-d{width:100vw;height:fit-content;max-height:88dvh;margin:auto 0 0;border-width:1px 0 0;border-radius:24px 24px 0 0;touch-action:none}.cb-mb{touch-action:pan-y}.cb-mh{cursor:grab}.cb-d[open]{animation-name:CB_UP}.cb-d::before{content:'';align-self:center;flex-shrink:0;width:40px;height:4px;margin-top:10px;border-radius:2px;background:var(--RD_L)}}
body.low-perf .cb-d[open]{animation:none}
@media(prefers-reduced-motion:reduce){.cb-d[open]{animation:none}}
.cb-mh{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 20px 14px;border-bottom:1px solid var(--RD_L)}
.cb-mhl{display:flex;align-items:baseline;gap:10px;min-width:0}
.cb-h1{font:700 1.3rem var(--font-h)}
.cb-mhN{font-size:.85rem;color:var(--RD_MF);white-space:nowrap}
.cb-mx{width:36px;height:36px;flex-shrink:0;border:1px solid var(--RD_L);border-radius:10px;background:var(--RD_BT);color:var(--RD_F);font-size:1rem;cursor:pointer;transition:background-color .15s}
.cb-mx:hover{background:var(--RD_BH)}
.cb-mb{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;gap:14px;overflow-y:auto;overscroll-behavior:contain;padding:16px 16px 20px}
.cb-mu{padding:10px 14px;border:1px solid rgba(251,191,36,.3);border-radius:12px;background:rgba(251,191,36,.08);font-size:.85rem;line-height:1.5;color:var(--RD_F2)}
.cb-mu a{color:var(--warn);font-weight:600;text-decoration:underline}
.cb-cp{flex-shrink:0;border:1px solid var(--RD_L);border-radius:18px;background:rgba(255,255,255,.03);overflow:hidden}
.cb-cn{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 14px;border-bottom:1px solid var(--RD_L);font-size:.8rem;font-weight:600;color:var(--RD_MF)}
.cb-gs{font-size:.92rem;color:var(--RD_F)}
.cb-ci{display:flex;gap:12px;padding:12px 14px;border-bottom:1px solid rgba(255,255,255,.06);transition:opacity .35s,transform .35s}
.cb-ci.cb-rm{opacity:0;transform:translateX(40px)}
.cb-im{flex:0 0 64px;width:64px;height:64px;border-radius:12px;object-fit:cover;background:var(--RD_M);display:grid;place-items:center;font-size:1.6rem}
.cb-cx{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.cb-ct{font-size:.92rem;font-weight:600;line-height:1.3;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}
.cb-cu{font-size:.75rem;color:var(--RD_MF)}
.cb-cr{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:auto;padding-top:6px}
.cb-cc{display:inline-flex;align-items:center;border:1px solid var(--RD_L);border-radius:10px;background:var(--RD_BT);overflow:hidden}
.cb-cc button{width:32px;height:30px;padding:0;border:0;border-radius:0;background:none;font-size:1rem}
.cb-cc span{min-width:28px;text-align:center;font-size:.9rem;font-weight:700}
.cb-cs{font-size:.95rem;white-space:nowrap}
.cb-cf{display:flex;flex-direction:column;gap:8px;padding:12px 14px 14px}
.cb-ch{font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--RD_MF)}
.cb-ca{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px}
.cb-ca .lk{justify-content:center;height:40px;border-radius:10px;font-family:inherit;font-size:.88rem;cursor:pointer}
.cb-ca .lk-wa{background:rgba(37,211,102,.14);border-color:rgba(37,211,102,.4)}
.cb-ca .lk-tg{background:rgba(44,165,224,.14);border-color:rgba(44,165,224,.4)}
.cb-sm{--LK_C:#a855f7}
.cb-sm::before{display:none}
.cb-mb .cb-s{flex-shrink:0;padding:16px;border:1px solid rgba(52,211,153,.35);border-radius:18px;background:rgba(52,211,153,.08);font-weight:600;text-align:center}
.cb-em{margin:auto;display:flex;flex-direction:column;align-items:center;gap:8px;padding:40px 20px;text-align:center}
.cb-em span{font-size:3.4rem;line-height:1}
.cb-em b{font:700 1.15rem var(--font-h)}
.cb-em p{max-width:26em;margin:0 0 8px;font-size:.9rem;color:var(--RD_MF)}
.cb-mf{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 20px calc(14px + env(safe-area-inset-bottom));border-top:1px solid var(--RD_L);background:var(--RD_S)}
.cb-mf[hidden]{display:none}
.cb-mf span{display:block;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--RD_MF)}
.cb-mhT{font:700 1.35rem var(--font-h)}
#cs{max-width:360px;margin:24px auto;padding:20px;border:1px solid var(--RD_L);border-radius:20px;background:var(--RD_C);color:var(--RD_F);text-align:center;box-shadow:var(--RD_SH);overflow:hidden}
#cs.cb-404{padding:0}
#cs.cb-404 img{width:100%;height:100%;object-fit:cover;display:block}
#cs .cb-p{font-family:var(--font-h);font-size:1.2em;font-weight:700;margin-bottom:12px}
#cs .cb-t{color:var(--accent-2)}
#cs .cb-dsp{font-size:.85em;color:var(--warn);margin-bottom:10px}
#cs .cb-o{display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:14px}
#cs .cb-o button{width:40px;height:40px;padding:0;border-radius:10px;font-size:1.2em}
#cs .cb-o button:disabled{opacity:.35;pointer-events:none}
#cs .cb-qv{width:70px;font-size:1.2em;font-weight:700;text-align:center;padding:5px}
#cs .cb-qv::-webkit-inner-spin-button,#cs .cb-qv::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
#cs .view-all-button{display:block;width:100%;margin:0}
#cs .cb-s{font-size:1.3em;font-weight:700;color:var(--ok);margin-bottom:10px}
#cs .cb-s2{font-size:.9em;color:var(--RD_MF)}
#cs .cb-er{font-size:1.3em;font-weight:700;color:var(--warn)}
#compartir-bloque{margin:30px 0;padding:10px 0;display:flex;align-items:center;justify-content:center}
#compartir-bloque .share-btn{margin:0;padding:11px 28px}
.share-btn::before{content:'↗';margin-right:6px;font-size:1.15em;line-height:1}
.cb-bl{position:fixed;right:10px;bottom:8px;width:48px;height:48px;box-sizing:border-box;padding:0;border-radius:50%;display:flex;align-items:center;justify-content:center;font:inherit;cursor:pointer;z-index:9999;color:var(--RD_F);border:1px solid var(--RD_L);background:var(--RD_C);backdrop-filter:var(--RD_GF);box-shadow:var(--RD_SH);transition:opacity .4s ease-in,transform .4s cubic-bezier(.4,0,.2,1),visibility .4s}
.cb-bl.cb-bh{opacity:0;transform:scale(.4);pointer-events:none;visibility:hidden;transition:opacity .25s ease-out,transform .4s cubic-bezier(.4,0,.2,1),visibility .4s}
.cb-bl img{width:32px;height:32px}
.cb-fv{bottom:64px;font-size:24px}
.cb-tl{background:rgba(250,204,21,.25);border-radius:6px;box-shadow:0 0 0 4px rgba(250,204,21,.25);transition:background .3s}
.cb-fng{position:fixed;bottom:78px;left:50%;transform:translateX(-50%);font-size:38px;opacity:0;pointer-events:none;z-index:10000;transition:opacity .3s;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.4))}
.cb-fng.cb-v{opacity:1;animation:cb-fngb 1s ease-in-out infinite}
@keyframes cb-fngb{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(10px)}}`;
document.head.appendChild(css);

const IMG404='<img src="web/recursos/404.avif">';
function set404(el){el.className='cb-404';el.innerHTML=IMG404}

let st={c:[]},BN1=!1;
const CB_Q1=()=>st.c.reduce((a,b)=>a+b.d,0);

const modal=document.createElement("dialog");

function fmt(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}

const _iOS=/iP(hone|od|ad)/.test(navigator.userAgent);
function openExt(url){
  if(url.startsWith('sms:')){
    if(_iOS)url=url.split('&body=')[0].replace('?body=','&body=');
    location.href=url;return;
  }
  if(_iOS&&url.includes('wa.me')){
    const m=url.match(/wa\.me\/(\d+)\?text=(.*)/s);
    if(m){location.href=`whatsapp://send?phone=${m[1]}&text=${m[2]}`;return;}
  }
  window.open(url,'_blank');
}

const HM=(window.__CFG&&window.__CFG.home)||'web/blogs.html';
const BR_H=`<a class="NB_BR" href="${HM}"><img src="web/recursos/iconos/ICON.webp" alt=""><span>Che Agana</span></a>`;
const _nb=document.createElement('nav');
_nb.className='NB1 NB_H';_nb.setAttribute('aria-label','Menu');
const _hd=document.createElement('div');_hd.className='NB_HD NB_H';
_hd.innerHTML=`${BR_H}<span class="NB_GR"><img src="${grSrc}" alt="">${night?'Buenas noches':'Buenos dias'}</span><span class="NB_PT"></span>`;
const _pt=_hd.querySelector('.NB_PT');
function NB_P1(){
  const t=document.querySelector('#content .NB_TT');
  _hd.classList.toggle('NB_P',!!t);
  if(!t)return void _pt.replaceChildren();
  const k=t.cloneNode(!0),e=document.createElement('span');
  k.querySelectorAll('[id]').forEach(x=>x.removeAttribute('id'));
  e.className=t.className;e.append(...k.childNodes);
  _pt.replaceChildren(e);
}
const _its=NB_ROUTES.map((r,i)=>{
  const a=document.createElement('a');
  a.className='NB_I'+(i===0?' NB_I0':i===4?' NB_I4':' NB_M');
  a.href=r.path;a.dataset.r=r.r;a.setAttribute('aria-label',r.label);
  a.innerHTML=`<span class=NB_E>${r.emoji}</span><span class=NB_L>${r.label}</span>`;
  return a;
});
const _cx=document.createElement('div');_cx.className='NB_CX';
const _tm=document.createElement('button');_tm.className='NB_TM';_tm.setAttribute('aria-label','Tema');
_tm.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg>';
_tm.addEventListener('click',()=>{
  const lp=document.body.classList.toggle('low-perf');
  try{localStorage.setItem('perf',lp?'low':'high')}catch(e){}
  const v=document.getElementById('bg-video');if(v&&lp)v.pause();
});
function _mkSep(c){const s=document.createElement('span');s.className='NB_S '+c;return s;}
_nb.append(_its[0],_mkSep('NB_S0'),_its[1],_its[2],_its[3],_cx,_mkSep('NB_S1'),_its[4],_tm);
document.body.append(_hd,_nb);

const ft=document.createElement('footer');ft.className='NB_F1';
ft.innerHTML=`<div class="NB_F2"><div>${BR_H}<p>Tienda facil y segura en Paraguay. Arma tu carrito y pedi por WhatsApp.</p><div class="NB_F3"><a class="lk lk-wa" href="${WA_BASE}" aria-label="WhatsApp"></a><a href="https://www.facebook.com/yoganopy" aria-label="Facebook"><img src="web/recursos/svg/facebook-1-svgrepo-com.svg" alt=""></a><a href="https://www.instagram.com/cheagana" aria-label="Instagram"><img src="web/recursos/svg/instagram-2016-logo-svgrepo-com.svg" alt=""></a><a href="web/paginas/About.html" aria-label="Git"><img src="web/recursos/svg/git-svgrepo-com.svg" alt=""></a></div></div><div><b>Tienda</b><a href="web/es.html">Productos</a><a href="web/search.html">Buscar</a><a href="web/paginas/SerParte.html">Vender aca</a><a href="web/paginas/Install.html">Instalar app</a></div><div><b>Comunidad</b><a href="web/blogs.html">Blog</a><a href="web/paginas/Grupos.html">Eventos</a><a href="web/paginas/apps.html">Apps</a></div><div><b>Sitio</b><a href="web/paginas/PoliticaPrivacidad.html">Acuerdo y Privacidad</a><a href="web/paginas/About.html">Acerca de</a><a href="web/paginas/config.html">Configuracion</a></div></div>`;
document.body.appendChild(ft);

const pk=document.createElement("div");pk.className="cb-pk";pk.innerHTML="📦";
document.body.appendChild(pk);

const fng=document.createElement("div");fng.className="cb-fng";fng.innerHTML="👇";
document.body.appendChild(fng);

let _scrollAsk=!1,_cxK='';
const OR1=matchMedia('(orientation:portrait)');
OR1.addEventListener('change',()=>syncNB());

function CX_S1(k,mk){
  const p=OR1.matches&&k.startsWith('tts')?_hd:_nb;
  _nb.classList.toggle('NB_C',!!k&&p===_nb);
  if(_cx.parentNode!==p)p.append(_cx);
  if(k===_cxK)return!1;
  _cxK=k;_cx.replaceChildren(...(mk?[mk()]:[]));
  return!0;
}

function _mkCart(){
  const el=document.createElement('button');el.className='NB_CT GL_C FR_I1';
  el.innerHTML=`🛒 Finalizar Compra <span class=NB_BD>${CB_Q1()}</span>`;
  el.addEventListener('click',toggleModal);
  return el;
}

function _mkAsk(){
  const el=document.createElement('button');el.className='NB_AK GL_C FR_I1';
  el.textContent='Pregunta 🤗';
  el.addEventListener('click',()=>{
    const wa=getRouteWA();
    openExt((wa?"https://wa.me/"+wa+"?text=":WA_BASE)+encodeURIComponent("Hola, Quisiera saber mas sobre esto "+window.location.href));
  });
  return el;
}

let _op=!1,OP_T1=0;
const _bl=document.createElement('button');_bl.className='cb-bl cb-bh';_bl.setAttribute('aria-label','Mostrar menu');
_bl.innerHTML=`<img src="${grSrc}" alt="">`;
_bl.addEventListener('click',()=>{_op=!0;syncNB();clearTimeout(OP_T1);OP_T1=setTimeout(()=>{_op=!1;syncNB()},5e3)});
document.body.appendChild(_bl);

const FV_K="⭐ Favoritos",FV_P=["web/🧩 Apps/","web/🎮 Juegos/"];
const _fv=document.createElement('button');_fv.className='cb-bl cb-bh cb-fv';_fv.setAttribute('aria-label','Favorito');
function FV_L1(){try{return JSON.parse(localStorage.getItem('FAV')).galleries[FV_K]||[]}catch(e){return[]}}
function FV_I2(){
  const m=document.querySelector('#content meta[property="og:image"]');
  try{return m?decodeURIComponent(new URL(m.content).pathname.slice(1)):null}catch(e){return null}
}
function FV_I1(){return FV_P.some(p=>CB_H1().includes(p))?FV_I2():null}
function FV_S1(hid){
  const i=hid&&FV_I1();
  _fv.classList.toggle('cb-bh',!i);
  if(i){const f=FV_L1().includes(i);_fv.textContent=f?'⭐':'☆';_fv.setAttribute('aria-pressed',f)}
}
_fv.addEventListener('click',()=>{
  const i=FV_I1();if(!i)return;
  const l=FV_L1(),k=l.indexOf(i);
  k<0?l.push(i):l.splice(k,1);
  try{localStorage.setItem('FAV',JSON.stringify({galleries:{[FV_K]:l}}))}catch(e){}
  FV_S1(!0);
});
document.body.appendChild(_fv);

const TT_P="web/Blogs/",TT_S=window.speechSynthesis;
let _top=!0,_tts=null;
const TT_VO1=()=>TT_S&&TT_S.getVoices().find(v=>/^es/i.test(v.lang));
const TT_ON1=()=>CB_H1().includes(TT_P)&&!!TT_VO1();
function TT_G1(){
  const r=document.querySelector('#content .markdown-content')||document.getElementById('content'),q=[];
  r.querySelectorAll('h1,h2,h3,h4,p,li:not(:has(p,li))').forEach(e=>{
    if(e.closest('#compartir-bloque,#cs'))return;
    const s=e.textContent.replace(/[\p{Extended_Pictographic}️‍]/gu,'').replace(/\s+/g,' ').trim();
    (s.match(/[^.!?…]+[.!?…]*/g)||[]).forEach(f=>{f=f.trim();if(/[\p{L}\p{N}]/u.test(f))q.push({e,s:f})});
  });
  return q;
}
function TT_X1(){const t=_tts;if(!t)return;_tts=null;TT_S.cancel();t.e&&t.e.classList.remove('cb-tl')}
function TT_N1(){
  const t=_tts;if(!t)return;
  const c=t.q[t.i];
  if(!c){TT_X1();syncNB();return}
  if(c.e!==t.e){t.e&&t.e.classList.remove('cb-tl');c.e.classList.add('cb-tl');c.e.scrollIntoView({behavior:'smooth',block:'center'});t.e=c.e}
  const u=new SpeechSynthesisUtterance(c.s);
  u.lang='es';u.voice=TT_VO1()||null;
  u.onend=()=>{if(_tts===t){t.i++;TT_N1()}};
  u.onerror=()=>{if(_tts===t){TT_X1();syncNB()}};
  TT_S.speak(u);
}
function _mkTts(){
  const el=document.createElement('button');el.className='NB_AK';
  el.textContent=_tts?'⏹ Detener':'🔊 Escuchar';
  el.addEventListener('click',()=>{
    if(_tts)TT_X1();
    else{const q=TT_G1();if(q.length){TT_S.cancel();_tts={q,i:0,e:null};TT_N1()}}
    syncNB();
  });
  return el;
}
if(TT_S){
  TT_S.addEventListener('voiceschanged',()=>syncNB());
  document.addEventListener('contentUnload',TT_X1);
  window.addEventListener('pagehide',TT_X1);
  window.addEventListener('scroll',()=>{const t=scrollY<150;if(t!==_top){_top=t;syncNB()}},{passive:!0});
}

function syncNB(){
  if(_tts&&!CB_H1().includes(TT_P))TT_X1();
  const rh=isHidden(),hid=rh&&!_op,b=document.body.classList;
  b.toggle('NB_V',!rh);
  b.toggle('NB_GL',isGL());
  _nb.classList.toggle('NB_H',hid);_hd.classList.toggle('NB_H',hid);
  _bl.classList.toggle('cb-bh',!hid);
  FV_S1(hid);
  if(hid){fng.classList.remove('cb-v');return;}

  const route=CB_H1();
  _its.forEach(el=>el.dataset.r.split(' ').some(x=>route.startsWith(x))?el.setAttribute('aria-current','page'):el.removeAttribute('aria-current'));

  const hasCH=!!getRouteWA(),n=st.c.length;
  fng.classList.toggle('cb-v',_scrollAsk&&hasCH&&n>0);
  const k=n?'cart':_scrollAsk&&hasCH?'ask':(_tts||(_top&&TT_ON1()))?'tts'+(_tts?1:0):'';
  if(!CX_S1(k,{cart:_mkCart,ask:_mkAsk,tts0:_mkTts,tts1:_mkTts}[k])&&k==='cart'){
    const bdg=_cx.querySelector('.NB_BD');
    if(bdg)bdg.textContent=CB_Q1();
  }
}

if(!isHidden()){
  _hd.classList.add('NB_G');
  setTimeout(()=>_hd.classList.remove('NB_G'),4000);
}

function bounce(){
  if(BN1)return;BN1=!0;
  document.body.classList.remove('NB_SD');
  _cx.classList.add("NB_BN");
  pk.classList.remove("cb-dr");pk.offsetWidth;pk.classList.add("cb-dr");
  setTimeout(()=>pk.classList.remove("cb-dr"),1200);
  setTimeout(()=>{_cx.classList.remove("NB_BN");BN1=!1},800);
}

function addItem(tp,num,id,q,pc,nb,mode="add",g){
  const idx=st.c.findIndex(x=>x.i===id&&x.t===tp&&x.n===num);
  if("set"===mode){
    if(idx>-1){st.c[idx].d=q;if(st.c[idx].d<=0)st.c.splice(idx,1)}
  } else {
    if(idx>-1){st.c[idx].d+=q;st.c[idx].g||=g;if(st.c[idx].d<=0)st.c.splice(idx,1)}
    else if(q>0)st.c.push({t:tp,n:num,i:id,d:q,p:pc,b:nb,g});
  }
  syncNB();
  if("add"===mode&&q>0)bounce();
}

function updMHT(){
  const q=CB_Q1();
  modal.querySelector(".cb-mhT").textContent=fmt(st.c.reduce((a,b)=>a+b.p*b.d,0))+" Gs";
  modal.querySelector(".cb-mhN").textContent=q?q+(q>1?" productos":" producto"):"";
  modal.querySelector(".cb-mf").hidden=!q;
}

const CB_X1=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
function renderCart(){
  updMHT();
  if(!st.c.length)return void(modal.querySelector(".cb-mb").innerHTML='<div class="cb-em"><span>🛒</span><b>Tu carrito esta vacio</b><p>Agrega productos con el boton + de cada tarjeta o desde la pagina del producto.</p><a class="RD_B1" href="web/es.html">Ir a la tienda</a></div>');
  const groups={};
  st.c.forEach(x=>{const k=x.t+"-"+x.n;groups[k]||(groups[k]={t:x.t,n:x.n,items:[]});groups[k].items.push(x)});
  const gks=Object.keys(groups),multi=gks.length>1;
  let html=multi?`<div class="cb-mu">⚠️ Productos de ${gks.length} proveedores: cada pedido se compra por separado. <a href="web/paginas/SerParte.html">Saber mas</a></div>`:"";
  gks.forEach(k=>{
    const g=groups[k],K=CB_X1(k),N=CB_X1(g.n);
    html+=`<section class="cb-cp" data-gk="${K}"><header class="cb-cn"><span>${OFICIALPROVIDER.includes(g.n)?'Che Agana ✓':'Proveedor +'+N}</span><b class="cb-gs">${fmt(g.items.reduce((a,x)=>a+x.p*x.d,0))} Gs</b></header>`;
    g.items.forEach(x=>{
      const T=CB_X1(x.t),Q=CB_X1(x.n),I=CB_X1(x.i),G=/^(https?:\/\/|web\/)/.test(x.g||'')?CB_X1(x.g):'';
      html+=`<div class="cb-ci">${G?`<img class="cb-im" src="${G}" alt="">`:'<span class="cb-im">📦</span>'}<div class="cb-cx"><span class="cb-ct">${CB_X1(x.b)}</span><span class="cb-cu">${fmt(x.p)} Gs c/u</span><div class="cb-cr"><div class="cb-cc"><button data-t="${T}" data-n="${Q}" data-i="${I}" data-a="-" aria-label="Quitar uno">−</button><span>${CB_X1(x.d)}</span><button data-t="${T}" data-n="${Q}" data-i="${I}" data-a="+" aria-label="Agregar uno">+</button></div><b class="cb-cs">${fmt(x.p*x.d)} Gs</b></div></div></div>`;
    });
    const msg=CB_X1("Hola quiero%0A"+g.items.map(x=>`[${x.d}] de ${encodeURIComponent(x.b)} [ID=${encodeURIComponent(x.i)}]`).join("%0A"));
    const CH_BTN={WA:g=>`<button class="lk lk-wa" data-l="https://wa.me/${N}?text=${msg}" data-gk="${K}" data-lbl="WhatsApp">WhatsApp</button>`,TG:g=>`<button class="lk lk-tg" data-l="https://t.me/+${N}?text=${msg}" data-gk="${K}" data-lbl="Telegram">Telegram</button>`,SM:g=>`<button class="lk cb-sm" data-l="sms:+${N}?body=${msg}&body=${msg}" data-gk="${K}" data-lbl="SMS">✉️ SMS</button>`};
    let btns=g.t.split('.').map(c=>CH_BTN[c]?CH_BTN[c](g):"").join("");
    html+=`<div class="cb-cf"><span class="cb-ch">Pedir por</span><div class="cb-ca">${btns}</div></div></section>`;
  });
  modal.querySelector(".cb-mb").innerHTML=html;
}

function toggleModal(){
  if(modal.open)return void modal.close();
  renderCart();modal.showModal();document.body.style.overflow="hidden";
  const t=Math.random();CB_HM.add(t);window.__HS3?.("CB",t);
}
const CB_HM=new Set();

let _dcO1=null;
function dcW1(){
  if(_dcO1)return;
  const dc=document.getElementById("disqus-container");
  if(!dc)return;
  _dcO1=new IntersectionObserver(([e])=>{
    const w=_scrollAsk;
    _scrollAsk=e.isIntersecting;
    if(_scrollAsk!==w)syncNB();
  },{rootMargin:"0px 0px 100px 0px"});
  _dcO1.observe(dc);
}

modal.className="cb-d";
modal.innerHTML='<div class="cb-mh"><div class="cb-mhl"><span class="cb-h1">Tu carrito</span><span class="cb-mhN"></span></div><button class="cb-mx" aria-label="Cerrar">✕</button></div><div class="cb-mb"></div><div class="cb-mf"><div><span>Total</span><b class="cb-mhT"></b></div><button class="RD_B1 cb-sc">Seguir comprando</button></div>';
function SW1(d){
  let y0=null,dy=0;
  const E=()=>{
    if(y0===null)return;
    y0=null;d.style.transition="transform .25s ease";
    if(dy>90){d.style.transform="translateY(100%)";setTimeout(()=>d.close(),230)}else d.style.transform="";
  };
  d.addEventListener("pointerdown",ev=>{
    if(!matchMedia("(orientation:portrait)").matches||ev.target.closest("button,a,.cb-mb,.cb-mf"))return;
    y0=ev.clientY;dy=0;d.style.transition="none";d.setPointerCapture(ev.pointerId);
  });
  d.addEventListener("pointermove",ev=>{if(y0===null)return;dy=Math.max(0,ev.clientY-y0);d.style.transform=`translateY(${dy}px)`});
  d.addEventListener("pointerup",E);d.addEventListener("pointercancel",E);
  d.addEventListener("close",()=>{document.body.style.overflow="";d.style.transform=d.style.transition=""});
}
const CB_FU=(d,ev)=>{const r=d.getBoundingClientRect();return ev.target===d&&(ev.clientX<r.left||ev.clientX>r.right||ev.clientY<r.top||ev.clientY>r.bottom)};
SW1(modal);
modal.addEventListener("close",()=>{if(CB_HM.has(history.state?.CB))history.back()});
document.body.appendChild(modal);

modal.addEventListener("click",ev=>{
  const a=ev.target.closest("a[href]");
  if(a&&CB_HM.has(history.state?.CB)){ev.preventDefault();ev.stopPropagation();addEventListener("popstate",()=>setTimeout(()=>location.hash="#"+a.getAttribute("href")),{once:!0});return void modal.close()}
  if(CB_FU(modal,ev)||ev.target.closest(".cb-mx,.cb-sc,a[href]"))return void toggleModal();
  const b=ev.target.closest("button");
  if(!b)return;
  if(b.dataset.l){
    openExt(b.dataset.l);
    const gk=b.dataset.gk,lbl=b.dataset.lbl;
    if(gk){
      st.c=st.c.filter(x=>x.t+"-"+x.n!==gk);
      syncNB();
      const grpEl=b.closest(".cb-cp");
      if(grpEl)grpEl.outerHTML=`<div class="cb-s">✅ Completa el pedido en ${CB_X1(lbl)}</div>`;
      updMHT();
      if(!st.c.length)setTimeout(()=>modal.close(),2e3);
    }
    return;
  }
  if(b.dataset.a){
    const tp=b.dataset.t,nm=b.dataset.n,id=b.dataset.i;
    const item=st.c.find(x=>x.i===id&&x.t===tp&&x.n===nm);if(!item)return;
    const nq="+"===b.dataset.a?item.d+1:item.d-1;
    if(nq<=0){
      b.closest(".cb-ci")?.classList.add("cb-rm");
      setTimeout(()=>{addItem(tp,nm,id,nq,item.p,item.b,"set");renderCart();},350);
    } else {
      addItem(tp,nm,id,nq,item.p,item.b,"set");
      renderCart();
    }
  }
});

function initProduct(){
  const dec=CB_H1();if(!dec||/\?|\.vr\.html$/.test(dec))return;
  const mID=dec.match(/ID=([^-\s]+)/),mPC=dec.match(/PC=([^-\s]+)/),mNB=dec.match(/NB=([^.]+)/),mNM=dec.match(/NM=([^-\s]+)/),mCD=dec.match(/CD=([^-\s]+)/),mCM=dec.match(/CM=([^-\s]+)/),mCH=dec.match(/CH=([^-\s]+)/),mTM=dec.match(/TM=(\d{2}\.\d{2}\.\d{4}\.\d{2}\.\d{2})/);
  if(!(mID&&mPC&&mNB&&mNM))return;
  let cs=document.getElementById("cs");
  if(!cs){
    const gal=document.querySelector(".galeriaMD");
    cs=document.createElement("div");
    cs.id="cs";
    if(gal)gal.insertAdjacentElement("afterend",cs);
    else CB_E1().appendChild(cs);
  }
  const id=mID[1],pc=parseInt(mPC[1]),nb=mNB[1],num=mNM[1],avail=mCD?parseInt(mCD[1]):null;
  const tp=mCH?mCH[1]:"WA";
  const isOff=OFICIALPROVIDER.includes(num);
  const minQ=mCM?parseInt(mCM[1])||1:parseInt(cs.getAttribute("min"))||1,maxQ=null!==avail?avail:999;
  if(avail===0)return void set404(cs);
  let qty=minQ,locked=!1,tmExp=null,tmInt=null;
  if(mTM){const[d,mo,y,h,mi]=mTM[1].split('.').map(Number);tmExp=new Date(y,mo-1,d,h,mi);}
  function fmtTM(){if(!tmExp)return'';const diff=tmExp-new Date();if(diff<=0)return null;const td=Math.floor(diff/864e5),th=Math.floor((diff%864e5)/36e5),tm=Math.floor((diff%36e5)/6e4);return td>0?`${td} dia${td>1?'s':''} y ${th} hora${th!==1?'s':''}`:`${th} hora${th!==1?'s':''} ${tm} min`;}
  function render(){
    const tmStr=tmExp?fmtTM():null;
    if(tmExp&&tmStr===null)return void set404(cs);
    cs.className='';
    cs.innerHTML=
      (!isOff?`<div class="cb-dsp"><a href="web/paginas/SerParte.html" style="color:var(--warn);font-weight:600;font-size:13px;text-decoration:none">Proveedor Externo ↗️</a></div>`:"")+
      (tmStr?`<div class="cb-dsp cb-dsp-tm">⏳ Se Acaba En: ${tmStr}</div>`:"")+
      (null!==avail?`<div class="cb-dsp">Disponible: ${avail} unidades</div>`:"")+
      `<div class="cb-p">Precio: <span class="cb-t" id="cpt">${fmt(pc*qty)}</span>Gs</div>`+
      `<div class="cb-o"><span>Cantidad:</span><button id="cbm">−</button><input type="number" class="cb-qv" id="cqv" value="${qty}" min="${minQ}" max="${maxQ}"><button id="cbp">+</button></div><button class="view-all-button" id="cba">🛍️ Añadir al Carrito</button>`;
    const inp=document.getElementById("cqv"),priceEl=document.getElementById("cpt"),btnM=document.getElementById("cbm"),btnP=document.getElementById("cbp"),btnA=document.getElementById("cba");
    function clamp(){let v=parseInt(inp.value);isNaN(v)||(v>maxQ&&(v=maxQ),v<minQ&&(v=minQ),qty=v,priceEl.textContent=fmt(pc*qty),btnM.disabled=qty<=minQ,btnP.disabled=qty>=maxQ)}
    clamp();
    inp.addEventListener("input",clamp);
    btnM.onclick=()=>{if(qty>minQ){qty--;inp.value=qty;priceEl.textContent=fmt(pc*qty);clamp()}};
    btnP.onclick=()=>{if(qty<maxQ){qty++;inp.value=qty;priceEl.textContent=fmt(pc*qty);clamp()}};
    btnA.onclick=()=>{
      if(locked)return;
      const v=parseInt(inp.value);
      if(isNaN(v)||v<minQ)return void(cs.innerHTML=`<div class="cb-er">⚠️ El Minimo es ${minQ}</div>`,setTimeout(render,3e3));
      if(v>maxQ)return void(cs.innerHTML=`<div class="cb-er">⚠️ Maximo Disponible: ${maxQ}</div>`,setTimeout(render,3e3));
      qty=v;addItem(tp,num,id,qty,pc,nb,"add",FV_I2());locked=!0;
      cs.innerHTML='<div class="cb-s">✅ Añadido a la Lista</div><div class="cb-s2">Continua la Compra en el Carrito 🛒</div>';
    };
    if(tmExp&&!tmInt){tmInt=setInterval(()=>{if(!cs.isConnected)return clearInterval(tmInt);const s=fmtTM();if(s===null){clearInterval(tmInt);set404(cs);return;}const el=cs.querySelector('.cb-dsp-tm');if(el)el.textContent='⏳ Se Acaba En: '+s;},6e4);}
  }
  render();
}

function CB_E1(){return document.querySelector("#content .markdown-content")||document.getElementById("content");}
function initShare(){
  let el=document.getElementById("sh");
  if(!el){
    if(!SHARE_ALL||document.getElementById("compartir-enlace"))return;
    el=document.createElement("div");
    CB_E1().appendChild(el);
  }
  el.id="compartir-enlace";
  el.innerHTML=`<div id="compartir-bloque"><button id="compartir-btn" type="button" class="share-btn view-all-button GL_C">Compartir</button></div>`;
  const b=document.getElementById("compartir-btn");
  b.addEventListener("click",()=>{
    const t=el.dataset.t,u=location.href;
    if(navigator.share)return navigator.share(t?{text:t,url:u}:{url:u}).catch(()=>{});
    navigator.clipboard.writeText(t?t+" "+u:u).then(()=>{b.textContent="Link copiado";setTimeout(()=>{b.textContent="Compartir"},2000)}).catch(()=>{});
  });
}

function CB_A1(){
  const s=document.querySelector('#content script[src$="HTMLCoreInyector.js"]');
  if(!s||!s.dataset.a)return;
  const a=history.state&&history.state.a;
  history.replaceState(history.state,'','A/'+s.dataset.a+(a?'#'+a:''));
}

function initPage(){initProduct();initShare();syncNB();CB_A1();}

window.addEventListener("cartAdd",ev=>{const{type:tp,num,id,q,pc,nb,img}=ev.detail;addItem(tp,num,id,q,pc,nb,"add",img)});

let _sy=scrollY;
if(NB_SC)window.addEventListener('scroll',()=>{const y=scrollY,d=y-_sy;if(Math.abs(d)<6)return;document.body.classList.toggle('NB_SD',d>0&&y>80);_sy=y},{passive:!0});

const content=document.getElementById("content");
NB_P1();syncNB();
dcW1();requestAnimationFrame(initPage);
if(content)content.addEventListener("contentState",e=>{const t=e.detail.CB;if(!CB_HM.has(t)){if(modal.open)modal.close()}else if(!modal.open&&st.c.length){renderCart();modal.showModal();document.body.style.overflow="hidden"}});
if(content)content.addEventListener("contentLoaded",()=>{_op=!1;document.body.classList.remove('NB_SD');NB_P1();syncNB();setTimeout(()=>{dcW1();requestAnimationFrame(initPage)},10)});
}();
