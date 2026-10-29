!function(){
const WA_BASE="https://wa.me/595972184435?text=";
const IA=false;
const SHARE_ALL=true;
const IA_URL="/api/ia";
const IMG_BASE="web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/";
const OFICIALPROVIDER=["595972184435"];
const HIDE_PATHS=["web/otros/Archivos/Dinamico/🧩 Apps/","web/otros/Archivos/Dinamico/🎮 Juegos/","web/otros/Archivos/HTML/centralPage.html","web/otros/Archivos/DemoDire/","web/otros/Archivos/HTML/AgregarProducto.html","web/otros/Archivos/Dinamico/DemoDire","web/Pruebas/"];
const NB_ROUTES=[
  {path:'web/es.html',label:'Tienda',emoji:'🛍️'},
  {path:'web/blogs.html',label:'Blog',emoji:'🔔'},
  {path:'web/otros/Archivos/HTML/apps.html',label:'Apps',emoji:'🎮'},
  {path:'web/otros/Archivos/HTML/Grupos.html',label:'Eventos',emoji:'👥'},
  {path:'web/search.html',label:'Buscar',emoji:'🔍'}
];
const night=(h=>h>=19||h<5)(new Date().getHours());
const grSrc=IMG_BASE+(night?"first_quarter_moon_face_animated.avif":"sun_with_face_animated.avif");

function CB_H1(){
  const r=window.__RUTA||"";try{return decodeURIComponent(r)}catch(e){return r}
}
function isHidden(){
  return HIDE_PATHS.some(p=>CB_H1().includes(p));
}
function getRouteWA(){
  const mNM=CB_H1().match(/NM=(\d+)-/);
  return mNM?mNM[1]:null;
}

const css=document.createElement("style");
css.textContent=`
.cb-pk{position:fixed;bottom:80px;left:50%;transform:translateX(-50%);font-size:45px;opacity:0;pointer-events:none;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.4));will-change:transform,opacity;z-index:10000}
.cb-pk.cb-dr{animation:cb-pk 1s ease-in-out;animation-fill-mode:both}
@keyframes cb-pk{0%{opacity:0;transform:translateX(-50%) translateY(-30px) rotate(-12deg) scale(0.4)}20%{opacity:1;transform:translateX(-50%) translateY(0px) rotate(6deg) scale(0.9)}40%{transform:translateX(-50%) translateY(10px) rotate(-4deg) scale(1.05)}55%{transform:translateX(-50%) translateY(20px) rotate(2deg) scale(1.1)}70%{transform:translateX(-50%) translateY(30px) rotate(-1deg) scale(1.05)}85%{opacity:1;transform:translateX(-50%) translateY(40px) rotate(0deg) scale(0.95)}100%{opacity:0;transform:translateX(-50%) translateY(54px) rotate(0deg) scale(0.7)}}
.cb-fz{display:inline-block;animation:cb-fzo 1.6s ease-out}
@keyframes cb-fzo{0%{transform:scale(0.5);opacity:0}50%{transform:scale(1.3)}100%{transform:scale(1);opacity:1}}
@keyframes cb-fb{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(12px)}}
:root{--CB_SF:rgba(255,255,255,.08)}
@media(prefers-reduced-motion:reduce){:root{--CB_SF:#1E395B}html #cs{--GL_SF:var(--CB_SF)}}
body.low-perf{--CB_SF:#1E395B}
body.low-perf #cs{--GL_SF:var(--CB_SF)}
#cs,.cb-nb,.cb-bl{border:var(--GL_BW) solid var(--GL_BC);background-color:#0000;background-image:var(--GL_RS),linear-gradient(var(--GL_SF),var(--GL_SF));background-clip:var(--GL_CL);background-origin:border-box}
.cb-d{width:520px;padding:0}
.cb-d[open]{display:flex;flex-direction:column;max-height:calc(100dvh - 40px);overflow:hidden}
.cb-mh{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:16px 18px 10px}
.cb-mhl{display:flex;align-items:baseline;gap:10px;min-width:0;flex:1}
.cb-mhl>span:first-child{font-family:var(--font-h);font-size:1.2em;font-weight:700}
.cb-mhT{font-size:.85em;opacity:.8;white-space:nowrap}
.cb-mx{width:34px;height:34px;border:none;border-radius:10px;background:rgba(255,255,255,.09);color:#fff;cursor:pointer;flex-shrink:0;transition:background .18s,transform .15s}
.cb-mx:hover{background:rgba(255,255,255,.18);transform:scale(1.06)}
.cb-mb{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:4px 18px 18px;color:#fff}
.cb-cp{margin-bottom:10px;padding:12px;border-radius:var(--r-md);background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09)}
.cb-cn{margin:0 0 10px;font-size:.75em;font-weight:600;letter-spacing:.07em;text-transform:uppercase;opacity:.75}
.cb-ci{display:flex;flex-direction:column;gap:6px;margin-bottom:8px;padding:10px 12px;border-radius:14px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);transition:opacity .4s,transform .4s}
.cb-ci.cb-rm{opacity:0;transform:translateY(-20px)}
.cb-ct{font-size:.92em;font-weight:600;line-height:1.35}
.cb-cr{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px 10px}
.cb-cs{font-size:.85em;opacity:.85;white-space:nowrap}
.cb-cc{display:flex;align-items:center;gap:10px;margin-left:auto}
.cb-cc span{min-width:24px;text-align:center;font-weight:700}
.cb-mb .cb-cc button{width:32px;height:32px;padding:0;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1rem}
.cb-cf{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:12px}
.cb-ch{font-size:.85em;opacity:.7;white-space:nowrap}
.cb-ca{display:flex;gap:8px;flex-wrap:wrap}
.cb-ca .lk{font-family:inherit;cursor:pointer}
.cb-sm{border-color:rgba(168,85,247,.3);color:#c4a0f7}
.cb-sm:hover{background:rgba(168,85,247,.12)}
.cb-sm::before{display:none}
.cb-em{padding:40px 20px;text-align:center;font-size:1.1em;opacity:.7}
#cs{--GL_SF:rgba(255,255,255,.04);box-shadow:var(--GL_IN);border-radius:var(--r-md);padding:18px;margin:20px auto;max-width:340px;color:#fff;text-align:center;overflow:hidden}
#cs.cb-404{padding:0}
#cs.cb-404 img{width:100%;height:100%;object-fit:cover;display:block}
#cs .cb-p{font-family:var(--font-h);font-size:1.2em;font-weight:700;margin-bottom:12px}
#cs .cb-t{color:var(--accent-2)}
#cs .cb-dsp{font-size:.85em;color:var(--warn);margin-bottom:10px}
#cs .cb-o{display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:14px}
#cs .cb-o button{width:40px;height:40px;padding:0;border-radius:50%;font-size:1.2em}
#cs .cb-o button:disabled{opacity:.35;pointer-events:none}
#cs .cb-qv{width:70px;font-size:1.2em;font-weight:700;text-align:center;padding:5px}
#cs .cb-qv::-webkit-inner-spin-button,#cs .cb-qv::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
#cs .view-all-button{display:block;width:100%;margin:0;font:inherit;font-weight:700}
#cs .cb-s{font-size:1.4em;font-weight:700;color:#22c55e;margin-bottom:10px}
#cs .cb-s2{color:#fff}
#cs .cb-er{font-size:1.3em;font-weight:700;color:var(--warn)}
#compartir-bloque{margin:30px 0;padding:10px 0;position:relative;display:flex;align-items:center;justify-content:center}
#compartir-bloque a{position:relative;z-index:2;text-decoration:none}
#compartir-bloque .share-btn{display:inline-flex;align-items:center;gap:8px;margin:0;padding:12px 28px;font-weight:700}
.share-btn::before{content:'↗';font-size:1.15em;line-height:1}
.cb-nb{position:fixed;bottom:8px;left:50%;transform:translateX(-50%);height:48px;border-radius:26px;display:flex;align-items:center;--GL_SF:var(--CB_SF);backdrop-filter:var(--BF_DG);-webkit-backdrop-filter:var(--BF_DG);z-index:9999;transition:opacity .3s ease-out,transform .4s cubic-bezier(.4,0,.2,1),width .4s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 24px rgba(0,0,0,.25),var(--GL_IN);padding:0 8px;gap:2px;width:340px}
@supports (background-clip:border-area){.cb-nb{background-image:linear-gradient(135deg,rgba(255,255,255,.5),rgba(255,255,255,.08) 32%,rgba(255,255,255,.05) 62%,rgba(255,255,255,.4)),linear-gradient(var(--GL_SF),var(--GL_SF))}}
.cb-nb.cb-nh{opacity:0;transform:translateX(calc(50vw - 34px - 50%)) scale(.14);pointer-events:none;transition:opacity .4s ease-in,transform .4s cubic-bezier(.4,0,.2,1)}
.cb-nb.cb-ab{animation:cb-nab .6s cubic-bezier(0.22,1,0.36,1)}
@keyframes cb-nab{0%{transform:translateX(-50%) translateY(0) rotate(0deg)}18%{transform:translateX(-50%) translateY(4px) rotate(-3deg)}36%{transform:translateX(-50%) translateY(9px) rotate(-5deg)}54%{transform:translateX(-50%) translateY(5px) rotate(-2deg)}72%{transform:translateX(-50%) translateY(2px) rotate(-1deg)}100%{transform:translateX(-50%) translateY(0) rotate(0deg)}}
.cb-nb-i{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;min-width:66px;height:44px;padding:0 10px;border-radius:28px;cursor:pointer;transition:background .2s,transform .2s;box-sizing:border-box;flex-shrink:0}
.cb-nb-i:hover{background:rgba(255,255,255,.15)}
.cb-nb-i.cb-na{background:rgba(255,255,255,.22);box-shadow:inset 0 1px 0 rgba(255,255,255,.28),0 4px 14px rgba(0,0,0,.12),0 0 0 1px rgba(255,255,255,.08);transform:scale(1.03);position:relative;overflow:hidden}
.cb-nb-e{font-size:25px;line-height:1}
.cb-nb-l{font-size:11px;color:rgba(255,255,255,0.75);white-space:nowrap}
.cb-nb-i.cb-na .cb-nb-l{color:#fff;font-weight:600}
.cb-nb-sep{width:1px;height:26px;background:rgba(255,255,255,.15);flex-shrink:0;margin:0 2px}
.cb-nb-mid{display:flex;align-items:center;justify-content:center;flex:1;min-width:0;transition:opacity .25s,transform .25s}
.cb-nb-mid.cb-fo{opacity:0;transform:scale(.9);pointer-events:none}
.cb-nb .cb-nb-cart::after{display:none}
.cb-nb .cb-nb-cart{overflow:visible;display:flex;align-items:center;gap:6px;margin:0;padding:8px 18px;border-radius:var(--r-sm);font-size:16px;font-weight:600;white-space:nowrap;cursor:pointer}
.cb-nb-bdg{position:absolute;top:-7px;right:-7px;box-shadow:0 2px 6px rgba(0,0,0,.4);background:rgba(239,68,68,.95);color:#fff;font-size:11px;font-weight:bold;min-width:18px;height:18px;border-radius:9px;display:inline-flex;align-items:center;justify-content:center;padding:0 4px;border:1.5px solid rgba(255,255,255,.3)}
.cb-nb-ask{display:flex;align-items:center;gap:6px;color:rgba(255,255,255,.9);font-size:15px;font-weight:500;padding:8px 12px;cursor:pointer;white-space:nowrap}
.cb-nb-gr{display:flex;align-items:center;gap:8px;color:#fff;font-size:16px;font-weight:500;padding:4px 8px;white-space:nowrap}
.cb-nb-gr img{width:38px;height:38px;flex-shrink:0}
.cb-nb-midbtns{display:flex;align-items:center;gap:2px}
.cb-nb-i.cb-wv::after{content:'';position:absolute;inset:0;border-radius:28px;background:radial-gradient(circle,rgba(255,255,255,.35) 0%,transparent 70%);animation:cb-wvk .5s ease-out}
@keyframes cb-wvk{0%{transform:scale(.3);opacity:1}100%{transform:scale(1.8);opacity:0}}
.cb-bl{--GL_SF:var(--CB_SF);position:fixed;right:10px;bottom:8px;width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:9999;backdrop-filter:var(--BF_DG);-webkit-backdrop-filter:var(--BF_DG);box-shadow:0 4px 24px rgba(0,0,0,.25),var(--GL_IN);transition:opacity .4s ease-in,transform .4s cubic-bezier(.4,0,.2,1)}
.cb-bl.cb-bh{opacity:0;transform:scale(.4);pointer-events:none;transition:opacity .25s ease-out,transform .4s cubic-bezier(.4,0,.2,1)}
.cb-bl img{width:32px;height:32px}
.cb-fv{bottom:64px;font-size:24px}
.cb-tl{background:rgba(255,255,255,.12);border-radius:6px;box-shadow:0 0 0 4px rgba(255,255,255,.12);transition:background .3s}
.cb-fng{position:fixed;bottom:78px;left:50%;transform:translateX(-50%);font-size:38px;opacity:0;pointer-events:none;z-index:10000;transition:opacity .3s;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.4))}
.cb-fng.cb-v{opacity:1;animation:cb-fngb 1s ease-in-out infinite}
@keyframes cb-fngb{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(10px)}}
.ia-mb{display:flex;flex-direction:column;gap:10px}
.ia-msg{max-width:85%;padding:10px 14px;border-radius:14px;font-size:14px;line-height:1.4;white-space:pre-wrap}
.ia-u{align-self:flex-end;background:rgba(34,197,94,0.3);border:1px solid rgba(34,197,94,0.4)}
.ia-a{align-self:flex-start;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15)}
.ia-load{align-self:flex-start;opacity:.6;font-size:13px}
.ia-foot{display:flex;gap:8px;padding:14px 20px;border-top:1px solid rgba(255,255,255,0.2)}
.ia-in{flex:1;border-radius:20px}
.ia-send{background:rgba(34,197,94,0.35);border:1px solid rgba(34,197,94,0.5);border-radius:50%;width:38px;height:38px;color:#fff;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.ia-send:hover{background:rgba(34,197,94,0.5)}
.ia-addbtn{align-self:flex-start;background:rgba(34,197,94,0.3);border:1px solid rgba(34,197,94,0.45);border-radius:10px;padding:6px 12px;font-size:13px;color:#fff;cursor:pointer;margin-top:2px}
.ia-addbtn:hover{background:rgba(34,197,94,0.45)}`;
document.head.appendChild(css);

const IMG404='<img src="web/otros/Archivos/Imagenes/Permanente/404.avif">';
function set404(el){el.className='cb-404';el.innerHTML=IMG404}

let st={c:[],r:!1},ab={b:!1};

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

const _nb=document.createElement('div');
_nb.className='cb-nb cb-nh';_nb.setAttribute('role','navigation');_nb.setAttribute('aria-label','Menu');
const _nbCt=_nb;

const pk=document.createElement("div");pk.className="cb-pk";pk.innerHTML="📦";
document.body.appendChild(pk);

const fng=document.createElement("div");fng.className="cb-fng";fng.innerHTML="👇";
document.body.appendChild(fng);

const _iL=document.createElement('div');_iL.className='cb-nb-i';
const _rL=NB_ROUTES[0];
_iL.innerHTML=`<span class=cb-nb-e>${_rL.emoji}</span><span class=cb-nb-l>${_rL.label}</span>`;
_iL.addEventListener('click',()=>_navTo(_rL.path));
_nb.appendChild(_iL);

_nb.appendChild(_mkSep());

const _midWrap=document.createElement('div');_midWrap.className='cb-nb-mid';
_nb.appendChild(_midWrap);

_nb.appendChild(_mkSep());

const _iR=document.createElement('div');_iR.className='cb-nb-i';
const _rR=NB_ROUTES[4];
_iR.innerHTML=`<span class=cb-nb-e>${_rR.emoji}</span><span class=cb-nb-l>${_rR.label}</span>`;
_iR.addEventListener('click',()=>_navTo(_rR.path));
_nb.appendChild(_iR);

document.body.appendChild(_nb);

function _mkSep(){const s=document.createElement('div');s.className='cb-nb-sep';return s;}
function _navTo(path){
  const a=document.createElement("a");a.href="#"+path;document.body.appendChild(a);a.click();document.body.removeChild(a);
}

let _scrollAsk=!1;

function _setMid(content){
  _midWrap.classList.add('cb-fo');
  setTimeout(()=>{_midWrap.innerHTML='';if(content)_midWrap.appendChild(content);_midWrap.classList.remove('cb-fo');},200);
}

function _mkMidBtns(){
  const wrap=document.createElement('div');wrap.className='cb-nb-midbtns';
  NB_ROUTES.slice(1,4).forEach(r=>{
    const item=document.createElement('div');item.className='cb-nb-i';
    item.innerHTML=`<span class=cb-nb-e>${r.emoji}</span><span class=cb-nb-l>${r.label}</span>`;
    if(r.path)item.addEventListener('click',()=>_navTo(r.path));
    wrap.appendChild(item);
  });
  return wrap;
}

function _mkCart(){
  const el=document.createElement('div');el.className='cb-nb-cart view-all-button GL_C';
  const tot=st.c.reduce((a,b)=>a+b.d,0);
  el.innerHTML=`🛒 Finalizar Compra <span class=cb-nb-bdg>${tot}</span>`;
  el.addEventListener('click',toggleModal);
  return el;
}

function _mkAsk(){
  const el=document.createElement('div');el.className='cb-nb-ask';
  el.innerHTML='📩 Clic para Preguntar 🤗';
  el.addEventListener('click',()=>{
    if(IA){
      toggleIaModal(!0);
      if(!iaModal.querySelector(".ia-mb").children.length){
        iaSendMessage("Hola quiero hacer unas compras").catch(()=>{
          toggleIaModal(!1);
          const wa=getRouteWA();
          const base=wa?"https://wa.me/"+wa+"?text=":WA_BASE;
          openExt(base+encodeURIComponent("Hola, Quisiera saber mas sobre esto "+window.location.href));
        });
      }
      return;
    }
    const wa=getRouteWA();
    const base=wa?"https://wa.me/"+wa+"?text=":WA_BASE;
    openExt(base+encodeURIComponent("Hola, Quisiera saber mas sobre esto "+window.location.href));
  });
  return el;
}

function _mkGreet(){
  const el=document.createElement('div');el.className='cb-nb-gr';
  el.innerHTML=`<img src="${grSrc}">${night?'Buenas noches':'Buenos dias'}`;
  return el;
}

let _grShown=false,_op=!1;
const _bl=document.createElement('div');_bl.className='cb-bl cb-bh';
_bl.innerHTML=`<img src="${grSrc}">`;
_bl.addEventListener('click',()=>{_op=!0;syncNB();setTimeout(()=>{_op=!1;syncNB()},5e3)});
document.body.appendChild(_bl);

const FV_K="⭐ Favoritos",FV_P=["web/otros/Archivos/Dinamico/🧩 Apps/","web/otros/Archivos/Dinamico/🎮 Juegos/"];
const _fv=document.createElement('div');_fv.className='cb-bl cb-bh cb-fv';
function FV_L1(){try{return JSON.parse(localStorage.getItem('FAV')).galleries[FV_K]||[]}catch(e){return[]}}
function FV_I1(){
  const m=document.querySelector('#content meta[property="og:image"]');
  if(!m||!FV_P.some(p=>CB_H1().includes(p)))return null;
  try{return decodeURIComponent(new URL(m.content).pathname.slice(1))}catch(e){return null}
}
function FV_S1(hid){
  const i=hid&&FV_I1();
  _fv.classList.toggle('cb-bh',!i);
  if(i)_fv.textContent=FV_L1().includes(i)?'⭐':'☆';
}
_fv.addEventListener('click',()=>{
  const i=FV_I1();if(!i)return;
  const l=FV_L1(),k=l.indexOf(i);
  k<0?l.push(i):l.splice(k,1);
  try{localStorage.setItem('FAV',JSON.stringify({galleries:{[FV_K]:l}}))}catch(e){}
  FV_S1(!0);
});
document.body.appendChild(_fv);

const TT_P="Dinamico/Blogs/",TT_S=window.speechSynthesis;
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
  const el=document.createElement('div');el.className='cb-nb-ask';el.dataset.tt=_tts?'1':'0';
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
  const hid=isHidden()&&!_op;
  _nb.classList.toggle('cb-nh',hid);
  _bl.classList.toggle('cb-bh',!hid);
  FV_S1(hid);
  if(hid){fng.classList.remove('cb-v');return;}

  if(_grShown)return;

  const route=CB_H1();
  [_iL,_iR].forEach((el,i)=>{
    const r=i===0?_rL:_rR;
    const wasActive=el.classList.contains('cb-na');
    const isActive=!!r.path&&route.includes(r.path);
    el.classList.toggle('cb-na',isActive);
    if(isActive&&!wasActive){el.classList.remove('cb-wv');el.offsetWidth;el.classList.add('cb-wv');setTimeout(()=>el.classList.remove('cb-wv'),500);}
  });

  const hasCH=!!getRouteWA();

  if(_scrollAsk&&hasCH&&st.c.length>0){
    fng.classList.add('cb-v');
    const midEl=_midWrap.firstChild;
    if(!midEl||!midEl.classList.contains('cb-nb-cart')){
      _setMid(_mkCart());
    } else {
      const bdg=midEl.querySelector('.cb-nb-bdg');
      if(bdg)bdg.textContent=st.c.reduce((a,b)=>a+b.d,0);
    }
    return;
  }

  fng.classList.remove('cb-v');

  if(_scrollAsk&&hasCH){
    _setMid(_mkAsk());
    return;
  }

  if(st.c.length>0){
    const midEl=_midWrap.firstChild;
    if(!midEl||!midEl.classList.contains('cb-nb-cart')){
      _setMid(_mkCart());
    } else {
      const bdg=midEl.querySelector('.cb-nb-bdg');
      if(bdg)bdg.textContent=st.c.reduce((a,b)=>a+b.d,0);
    }
    return;
  }

  if(_tts||(_top&&TT_ON1())){
    const m=_midWrap.firstChild;
    if(!m||m.dataset.tt!==(_tts?'1':'0'))_setMid(_mkTts());
    return;
  }

  const midEl=_midWrap.firstChild;
  if(!midEl||!midEl.classList.contains('cb-nb-midbtns')){
    _setMid(_mkMidBtns());
  } else {
    midEl.querySelectorAll('.cb-nb-i').forEach((el,i)=>{
      const r=NB_ROUTES[i+1];
      const wasActive=el.classList.contains('cb-na');
      const isActive=!!r.path&&route.includes(r.path);
      el.classList.toggle('cb-na',isActive);
      if(isActive&&!wasActive){el.classList.remove('cb-wv');el.offsetWidth;el.classList.add('cb-wv');setTimeout(()=>el.classList.remove('cb-wv'),500);}
    });
  }
}


if(!isHidden()){
  _grShown=true;
  _nb.classList.remove('cb-nh');
  _setMid(_mkGreet());
  setTimeout(()=>{_grShown=false;syncNB();},4000);
}

function bounce(){
  if(ab.b)return;ab.b=!0;
  _nb.style.willChange="transform";
  _nb.classList.add("cb-ab");
  pk.classList.remove("cb-dr");pk.offsetWidth;pk.classList.add("cb-dr");
  setTimeout(()=>pk.classList.remove("cb-dr"),1200);
  setTimeout(()=>{_nb.classList.remove("cb-ab");_nb.style.willChange="";ab.b=!1},800);
}

function addItem(tp,num,id,q,pc,nb,mode="add"){
  const idx=st.c.findIndex(x=>x.i===id&&x.t===tp&&x.n===num);
  if("set"===mode){
    if(idx>-1){st.c[idx].d=q;if(st.c[idx].d<=0)st.c.splice(idx,1)}
  } else {
    if(idx>-1){st.c[idx].d+=q;if(st.c[idx].d<=0)st.c.splice(idx,1)}
    else if(q>0)st.c.push({t:tp,n:num,i:id,d:q,p:pc,b:nb});
  }
  syncNB();
  if("add"===mode&&q>0)bounce();
}

function updMHT(){
  const el=modal.querySelector(".cb-mhT");
  if(!el)return;
  el.textContent=st.c.length?"💸 "+fmt(st.c.reduce((a,b)=>a+b.p*b.d,0))+"Gs":"";
}

function renderCart(){
  if(!st.c.length)return void(modal.querySelector(".cb-mb").innerHTML='<div class="cb-em">🛒 Carrito vacio</div>');
  const groups={};
  st.c.forEach(x=>{const k=x.t+"-"+x.n;groups[k]||(groups[k]={t:x.t,n:x.n,items:[]});groups[k].items.push(x)});
  const gks=Object.keys(groups),multi=gks.length>1;
  let html=multi?'<div style="text-align:center;margin-bottom:8px"><a href="web/otros/Archivos/MarkDowns/SerParte.html" style="color:var(--warn);font-weight:600;font-size:.85rem">⚠️ Varios Proveedores ❔</a></div>':"";
  gks.forEach(k=>{
    const g=groups[k];
    html+=`<div class="cb-cp" data-gk="${k}"><p class="cb-cn">📦 ${g.n}</p>`;
    g.items.forEach(x=>{
      const sub=x.p*x.d;
      html+=`<div class="cb-ci" data-key="${x.t}-${x.n}-${x.i}"><span class="cb-ct">${x.b}</span><div class="cb-cr"><span class="cb-cs">💰 ${fmt(sub)}Gs</span><div class="cb-cc"><button data-t="${x.t}" data-n="${x.n}" data-i="${x.i}" data-a="-">−</button><span>${x.d}</span><button data-t="${x.t}" data-n="${x.n}" data-i="${x.i}" data-a="+">+</button></div></div></div>`;
    });
    const msg="Hola quiero%0A"+g.items.map(x=>`[${x.d}] de ${encodeURIComponent(x.b)} [ID=${x.i}]`).join("%0A");
    const CH_BTN={WA:g=>`<button class="lk lk-wa" data-l="https://wa.me/${g.n}?text=${msg}" data-gk="${k}" data-lbl="WhatsApp">WhatsApp</button>`,TG:g=>`<button class="lk lk-tg" data-l="https://t.me/+${g.n}?text=${msg}" data-gk="${k}" data-lbl="Telegram">Telegram</button>`,SM:g=>`<button class="lk cb-sm" data-l="sms:+${g.n}?body=${msg}&body=${msg}" data-gk="${k}" data-lbl="SMS">✉️ SMS</button>`};
    let btns=g.t.split('.').map(c=>CH_BTN[c]?CH_BTN[c](g):"").join("");
    html+=`<div class="cb-cf"><span class="cb-ch">Termina la Compra en</span><div class="cb-ca">${btns}</div></div></div>`;
  });
  modal.querySelector(".cb-mb").innerHTML=html;
  updMHT();
}

function toggleModal(){
  if(modal.open)return void modal.close();
  renderCart();modal.showModal();document.body.style.overflow="hidden";
}

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
modal.innerHTML='<div class="cb-mh"><div class="cb-mhl"><span>🛒 Carrito</span><span class="cb-mhT"></span></div><button class="cb-mx">✕</button></div><div class="cb-mb"></div>';
modal.addEventListener("close",()=>{document.body.style.overflow=""});
document.body.appendChild(modal);

const iaModal=document.createElement("dialog");
iaModal.className="cb-d";
iaModal.addEventListener("close",()=>{document.body.style.overflow=""});
iaModal.innerHTML='<div class="cb-mh"><div class="cb-mhl"><span>💬 Asistente</span></div><button class="cb-mx">✕</button></div><div class="cb-mb ia-mb"></div><div class="ia-foot"><input type="text" class="ia-in" id="iaInput" placeholder="Escribe tu mensaje"><button class="ia-send" id="iaSend">➤</button></div>';
document.body.appendChild(iaModal);
let iaPrevU="",iaPrevA="",iaBusy=!1;

function toggleIaModal(show){
  if(show===iaModal.open)return;
  show?iaModal.showModal():iaModal.close();
}

function iaAddMsg(cls,text){
  const el=document.createElement("div");
  el.className="ia-msg "+cls;
  el.textContent=text;
  const box=iaModal.querySelector(".ia-mb");
  box.appendChild(el);
  return el;
}

function iaScrollBottom(){
  const box=iaModal.querySelector(".ia-mb");
  requestAnimationFrame(()=>{box.scrollTop=box.scrollHeight;});
}

function iaTrim(){
  const box=iaModal.querySelector(".ia-mb");
  const msgs=[...box.querySelectorAll(".ia-u,.ia-a")];
  const cut=msgs.length-3;
  for(let i=0;i<cut;i++)msgs[i].remove();
}

async function iaCallApi(msg){
  const r=await fetchTOIa(IA_URL,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({msg,prevU:iaPrevU,prevA:iaPrevA})
  });
  const d=await r.json();
  if(!r.ok||d.error)throw new Error(d.error||"down");
  return d.reply;
}

function fetchTOIa(url,opts){
  const ac=new AbortController();
  const t=setTimeout(()=>ac.abort(),15000);
  return fetch(url,{...opts,signal:ac.signal}).finally(()=>clearTimeout(t));
}

function iaParseReply(raw){
  let text=raw,action=null;
  const mAdd=text.match(/\[ADDP:([^,\]]+),([^,\]]+),([^,\]]+),([^,\]]+)\]/);
  if(mAdd){
    action={type:"add",id:mAdd[1],pc:parseInt(mAdd[2]),ch:mAdd[3],nm:mAdd[4]};
    text=text.replace(mAdd[0],"").trim();
  }
  const mAsk=text.match(/\[ASK\]/);
  if(mAsk){
    action={...action,ask:!0};
    text=text.replace(mAsk[0],"").trim();
  }
  return{text,action};
}

function iaDoAsk(){
  const wa=getRouteWA();
  const base=wa?"https://wa.me/"+wa+"?text=":WA_BASE;
  openExt(base+encodeURIComponent("Hola, Quisiera saber mas sobre esto "+window.location.href));
}

async function iaSendMessage(userText){
  if(iaBusy||!userText)return;
  iaBusy=!0;
  iaAddMsg("ia-u",userText);
  iaScrollBottom();
  const loadEl=iaAddMsg("ia-load","...");
  iaScrollBottom();
  try{
    const raw=await iaCallApi(userText);
    loadEl.remove();
    const{text,action}=iaParseReply(raw);
    if(text)iaAddMsg("ia-a",text);
    iaPrevU=userText;
    iaPrevA=raw;
    iaModal.querySelectorAll(".ia-addbtn").forEach(b=>b.remove());
    if(action?.type==="add"){
      const btn=document.createElement("button");
      btn.className="ia-addbtn";
      btn.textContent="🛍️ Añadir "+action.nm+" al Carrito";
      btn.onclick=()=>{addItem(action.ch,action.nm,action.id,1,action.pc,action.nm);btn.remove();};
      iaModal.querySelector(".ia-mb").appendChild(btn);
    }
    if(action?.ask)iaDoAsk();
    iaTrim();
    iaScrollBottom();
  }catch(e){
    loadEl.remove();
    throw e;
  }finally{
    iaBusy=!1;
  }
}

iaModal.addEventListener("click",ev=>{
  if(ev.target===iaModal||ev.target.classList.contains("cb-mx"))toggleIaModal(!1);
});
iaModal.querySelector("#iaSend").addEventListener("click",()=>{
  const inp=iaModal.querySelector("#iaInput");
  const v=inp.value.trim();
  if(!v)return;
  inp.value="";
  iaSendMessage(v).catch(()=>{iaAddMsg("ia-a","No se pudo responder, intenta de nuevo");});
});
iaModal.querySelector("#iaInput").addEventListener("keydown",ev=>{
  if(ev.key==="Enter")iaModal.querySelector("#iaSend").click();
});

modal.addEventListener("click",ev=>{
  if(ev.target===modal||ev.target.classList.contains("cb-mx")||ev.target.closest("a[href]"))toggleModal();
  const b=ev.target.closest("button");
  if(!b)return;
  if(b.dataset.l){
    openExt(b.dataset.l);
    const gk=b.dataset.gk,lbl=b.dataset.lbl;
    if(gk){
      st.c=st.c.filter(x=>x.t+"-"+x.n!==gk);
      syncNB();
      const grpEl=modal.querySelector(`.cb-cp[data-gk="${gk}"]`);
      if(grpEl)grpEl.outerHTML=`<div class="cb-s">✅ Completa la Compra Anterior en ${lbl}</div>`;
      if(!st.c.length)setTimeout(()=>modal.close(),2e3);
    }
    return;
  }
  if(b.dataset.a){
    const tp=b.dataset.t,nm=b.dataset.n,id=b.dataset.i;
    const item=st.c.find(x=>x.i===id&&x.t===tp&&x.n===nm);if(!item)return;
    const nq="+"===b.dataset.a?item.d+1:item.d-1;
    if(nq<=0){
      const el=modal.querySelector(`.cb-ci[data-key="${tp}-${nm}-${id}"]`);
      if(el){el.classList.add("cb-rm");setTimeout(()=>el.remove(),400)}
      setTimeout(()=>{addItem(tp,nm,id,nq,item.p,item.b,"set");renderCart();},400);
    } else {
      addItem(tp,nm,id,nq,item.p,item.b,"set");
      const ciEl=modal.querySelector(`.cb-ci[data-key="${tp}-${nm}-${id}"]`);
      if(ciEl){
        ciEl.querySelector(".cb-cc span").textContent=nq;
        ciEl.querySelector(".cb-cs").textContent="💰 "+fmt(item.p*nq)+"Gs";
      }
      const gk=tp+"-"+nm;
      const grp=st.c.filter(x=>x.t+"-"+x.n===gk);
      const newMsg="Hola quiero%0A"+grp.map(x=>`[${x.d}] de ${encodeURIComponent(x.b)} [ID=${x.i}]`).join("%0A");
      modal.querySelectorAll(`.cb-cp[data-gk="${gk}"] button[data-gk]`).forEach(btn=>{
        if(btn.dataset.l.startsWith("sms:")){
          const base=btn.dataset.l.split("?body=")[0];
          btn.dataset.l=base+"?body="+newMsg+"&body="+newMsg;
        }else{
          const base=btn.dataset.l.split("?text=")[0];
          btn.dataset.l=base+"?text="+newMsg;
        }
      });
      updMHT();
    }
  }
});

function initProduct(){
  const dec=CB_H1();if(!dec)return;
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
  if(mTM){const[d,mo,y,h,mi]=mTM[1].split('.').map(Number);const e=new Date(y,mo-1,d,h,mi);if(e<=new Date())return void set404(cs);}
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
      (!isOff?`<div class="cb-dsp"><a href="web/otros/Archivos/MarkDowns/SerParte.html" style="color:var(--warn);font-weight:600;font-size:13px;text-decoration:none">Proveedor Externo ↗️</a></div>`:"")+
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
      qty=v;addItem(tp,num,id,qty,pc,nb);locked=!0;
      cs.innerHTML='<div class="cb-s">✅ Añadido a la Lista</div><div class="cb-s2">Continua la Compra en el Carrito 👇</div>';
    };
    if(tmExp&&!tmInt){tmInt=setInterval(()=>{const s=fmtTM();if(s===null){clearInterval(tmInt);set404(cs);return;}const el=cs.querySelector('.cb-dsp-tm');if(el)el.textContent='⏳ Se Acaba En: '+s;},6e4);}
  }
  render();
}

function CB_E1(){return document.querySelector("#content .markdown-content")||document.getElementById("content");}
function initShare(){
  let el=document.getElementById("sh");
  if(!el){
    if(!SHARE_ALL||!navigator.share||document.getElementById("compartir-enlace"))return;
    el=document.createElement("div");
    CB_E1().appendChild(el);
  }
  el.id="compartir-enlace";
  el.innerHTML=`<div id="compartir-bloque"><a id="compartir-btn" href="#"><span class="share-btn view-all-button GL_C">Compartir</span></a></div>`;
  const a=document.getElementById("compartir-btn");
  if(!a||!navigator.share)return;
  a.removeAttribute("href");a.style.cursor="pointer";
  function onSh(e){e.preventDefault();navigator.share({title:"😻 Compartir",text:"😻 Comparte para ser mas Amigos cada Dia 😻",url:location.href});}
  a.addEventListener("click",onSh);
  document.addEventListener("contentUnload",()=>a.removeEventListener("click",onSh),{once:true});
}

function CB_H2(s){let a=0xdeadbeef,b=0x41c6ce57;for(const c of s){const k=c.codePointAt(0);a=Math.imul(a^k,2654435761);b=Math.imul(b^k,1597334677)}a=Math.imul(a^a>>>16,2246822507)^Math.imul(b^b>>>13,3266489909);b=Math.imul(b^b>>>16,2246822507)^Math.imul(a^a>>>13,3266489909);return(4294967296*(2097151&b)+(a>>>0)).toString(36).padStart(11,'0').slice(-7)}
function CB_A1(){
  const r=CB_H1();
  const s=document.querySelector('#content script[src$="HTMLCoreInyector.js"]');
  if(/^web\/(otros\/Archivos\/Imagenes|Pruebas)\//.test(r)||!s)return;
  const f=r.split('/').pop().replace(/\.[^.]+$/,'').normalize('NFC'),m=f.match(/ID=(.*?)(?=-[A-Z]{2}=|$)/);
  const a=history.state&&history.state.a;
  history.replaceState(history.state,'','A/'+(s.dataset.a||(m?m[1].replace(/[^A-Za-z0-9_]/g,''):'')||CB_H2(f))+(a?'#'+a:''));
}

function initPage(){initProduct();initShare();syncNB();CB_A1();}

window.addEventListener("cartAdd",ev=>{const{type:tp,num,id,q,pc,nb}=ev.detail;addItem(tp,num,id,q,pc,nb)});

const content=document.getElementById("content");
st.r=!0;dcW1();requestAnimationFrame(initPage);
if(content)content.addEventListener("contentLoaded",()=>{st.r=!0;syncNB();setTimeout(()=>{dcW1();requestAnimationFrame(initPage)},10)});
window.addEventListener("hashchange",()=>{_op=!1;syncNB()});
}();