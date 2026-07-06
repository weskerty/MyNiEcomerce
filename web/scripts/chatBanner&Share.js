!function(){
const WA_BASE="https://wa.me/595972184435?text=";
const IMG_BASE="web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/";
const OFICIALPROVIDER=["595972184435"];
const HIDE_PATHS=["web/Dinamico/Apps/","web/Dinamico/Juegos/","web/otros/Archivos/HTML/centralPage.html","web/otros/Archivos/HTML/PrivateMod.html","web/otros/Archivos/HTML/AgregarProducto.html","web/otros/Archivos/HTML/moi.html","web/otros/Privado"];
const NB_ROUTES=[
  {path:'web/es.html',label:'Tienda',emoji:'🛍️'},
  {path:'web/blogs.html',label:'Blog',emoji:'🔔'},
  {path:'web/otros/Archivos/HTML/apps.html',label:'Juegos',emoji:'🎮'},
  {path:'web/otros/Archivos/HTML/Grupos.html',label:'Actividades',emoji:'👥'},
  {path:'web/search.html',label:'Buscar',emoji:'🔍'}
];
const night=(h=>h>=19||h<5)(new Date().getHours());
const grSrc=IMG_BASE+(night?"first_quarter_moon_face_animated.avif":"sun_with_face_animated.avif");

function isHidden(){
  let h;try{h=decodeURIComponent(location.hash.slice(1))}catch(e){h=location.hash.slice(1)}
  return HIDE_PATHS.some(p=>h.includes(p));
}
function getRouteWA(){
  const hash=location.hash;if(!hash)return null;
  let dec;try{dec=decodeURIComponent(hash)}catch(e){dec=hash}
  const mNM=dec.match(/NM=([^-\s]+)/);if(!mNM)return null;
  const nm=mNM[1];
  if(nm.startsWith("WATG"))return nm.substring(4);
  if(nm.startsWith("WA"))return nm.substring(2);
  return null;
}

const css=document.createElement("style");
css.textContent=`
.cb-pk{position:fixed;bottom:80px;left:50%;transform:translateX(-50%);font-size:45px;opacity:0;pointer-events:none;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.4));will-change:transform,opacity;z-index:10000}
.cb-pk.cb-dr{animation:cb-pk 1s ease-in-out;animation-fill-mode:both}
@keyframes cb-pk{0%{opacity:0;transform:translateX(-50%) translateY(-30px) rotate(-12deg) scale(0.4)}20%{opacity:1;transform:translateX(-50%) translateY(0px) rotate(6deg) scale(0.9)}40%{transform:translateX(-50%) translateY(10px) rotate(-4deg) scale(1.05)}55%{transform:translateX(-50%) translateY(20px) rotate(2deg) scale(1.1)}70%{transform:translateX(-50%) translateY(30px) rotate(-1deg) scale(1.05)}85%{opacity:1;transform:translateX(-50%) translateY(40px) rotate(0deg) scale(0.95)}100%{opacity:0;transform:translateX(-50%) translateY(54px) rotate(0deg) scale(0.7)}}
.cb-fz{display:inline-block;animation:cb-fzo 1.6s ease-out}
@keyframes cb-fzo{0%{transform:scale(0.5);opacity:0}50%{transform:scale(1.3)}100%{transform:scale(1);opacity:1}}
@keyframes cb-fb{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(12px)}}
.cb-modal{position:fixed;inset:0;background:rgba(0,0,0,0.7);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;z-index:99999}
.cb-modal.cb-v{display:flex}
.cb-mc{background:rgba(255,255,255,0.15);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.25);border-radius:20px;width:90%;max-width:600px;max-height:80vh;overflow:hidden;display:flex;flex-direction:column}
@media(min-width:769px){.cb-mc{width:600px}}
.cb-mh{padding:20px;font-size:24px;font-weight:bold;border-bottom:1px solid rgba(255,255,255,0.2);color:#fff;display:flex;align-items:center;justify-content:space-between;position:relative}
.cb-mhl{display:flex;align-items:baseline;gap:10px;min-width:0;flex:1}
.cb-mhT{font-size:.68em;font-weight:normal;opacity:.85;white-space:nowrap}
.cb-mx{font-size:28px;cursor:pointer;width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:50%;flex-shrink:0}
.cb-mx:hover{background:rgba(255,255,255,0.2)}
.cb-mb{padding:20px;overflow-y:auto;flex:1;color:#fff;overscroll-behavior:contain}
.cb-cp{margin-bottom:12px;border:1px solid rgba(255,255,255,0.25);border-radius:14px;padding:14px;background:rgba(255,255,255,0.04)}
.cb-cn{font-size:12px;font-weight:600;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.2);opacity:.85;letter-spacing:.07em;text-transform:uppercase}
.cb-ci{background:rgba(255,255,255,0.1);border-radius:12px;padding:10px 15px;margin-bottom:8px;transition:opacity 0.4s ease,transform 0.4s ease;display:flex;align-items:center;gap:10px;border:1px solid rgba(255,255,255,0.06)}
.cb-ci.cb-rm{opacity:0;transform:translateY(-20px)}
.cb-ct{font-size:15px;font-weight:bold;flex:1;min-width:0}
.cb-cr{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;font-size:14px}
.cb-cc{display:flex;align-items:center;gap:10px}
.cb-cc button{width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.3);color:#fff;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center}
.cb-cc button:hover{background:rgba(255,255,255,0.3)}
.cb-cc span{min-width:30px;text-align:center;font-weight:bold}
.cb-ca{display:flex;gap:10px;justify-content:flex-start;flex-wrap:wrap}
.cb-cf{display:flex;align-items:center;gap:12px;margin-top:16px;flex-wrap:wrap}
.cb-ch{margin:0;font-size:14px;opacity:.7;font-weight:normal;text-decoration:none;white-space:nowrap}
.cb-cn a{text-decoration:none}
.cb-bt{padding:9px 16px;border-radius:20px;border:1px solid rgba(255,255,255,0.4);background:rgba(255,255,255,0.2);color:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;gap:6px;transition:transform .15s ease,background .2s ease}
.cb-bt:hover{background:rgba(255,255,255,0.3);transform:translateY(-2px)}
.cb-bt.cb-wa{background:rgba(34,197,94,0.3);border-color:rgba(34,197,94,0.6)}
.cb-bt.cb-wa:hover{background:rgba(34,197,94,0.45)}
.cb-bt.cb-tg{background:rgba(59,130,246,0.3);border-color:rgba(59,130,246,0.6)}
.cb-bt.cb-tg:hover{background:rgba(59,130,246,0.45)}
.cb-bt.cb-sm{background:rgba(168,85,247,0.3);border-color:rgba(168,85,247,0.6)}
.cb-bt.cb-sm:hover{background:rgba(168,85,247,0.45)}
.cb-cs{white-space:nowrap;font-size:13px;opacity:.85}
.cb-em{text-align:center;padding:40px 20px;font-size:18px;opacity:0.7}
#cs{background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.3);border-radius:15px;padding:20px;margin:20px auto;max-width:340px;color:#fff;text-align:center;overflow:hidden}
#cs.cb-404{padding:0}
#cs.cb-404 img{width:100%;height:100%;object-fit:cover;display:block;border-radius:14px}
#cs .cb-p{font-size:20px;font-weight:bold;margin-bottom:15px}
#cs .cb-t{color:#22c55e}
#cs .cb-dsp{font-size:14px;color:#fbbf24;margin-bottom:15px}
#cs .cb-o{display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:15px}
#cs .cb-o span{font-size:16px}
#cs .cb-k{width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.25);color:#fff;cursor:pointer;font-size:20px;display:flex;align-items:center;justify-content:center;border:none}
#cs .cb-k:hover{background:rgba(255,255,255,0.35);transform:scale(1.1)}
#cs .cb-k:disabled{opacity:0.3;cursor:not-allowed}
#cs .cb-k:disabled:hover{background:rgba(255,255,255,0.25);transform:scale(1)}
#cs .cb-qv{min-width:50px;font-size:20px;font-weight:bold;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);border-radius:8px;color:#fff;text-align:center;width:70px;padding:5px}
#cs .cb-qv::-webkit-inner-spin-button,#cs .cb-qv::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
#cs .cb-qv:focus{outline:2px solid rgba(34,197,94,0.5)}
#cs .cb-a{background:rgba(34,197,94,0.35);padding:12px 24px;border-radius:12px;color:#fff;cursor:pointer;font-weight:bold;width:100%;font-size:16px;border:none}
#cs .cb-a:hover{background:rgba(34,197,94,0.5)}
#cs .cb-s{font-size:24px;font-weight:bold;color:#22c55e;margin-bottom:10px}
#cs .cb-s2{font-size:16px;color:#fff}
#cs .cb-er{font-size:22px;font-weight:bold;color:#fbbf24}
#compartir-bloque{margin:30px 0;padding:10px 0;position:relative;display:flex;align-items:center;justify-content:center}
#compartir-bloque a{position:relative;z-index:2;text-decoration:none}
.share-btn{display:inline-flex;align-items:center;gap:10px;padding:13px 28px;border-radius:50px;font-family:var(--font);font-size:1em;font-weight:700;color:#fff;background:linear-gradient(135deg,#10b981 0%,#059669 40%,#065f46 100%);box-shadow:0 4px 18px rgba(16,185,129,0.45),0 0 0 0 rgba(16,185,129,0.4);border:1px solid rgba(255,255,255,0.15);transition:transform 0.2s ease,box-shadow 0.2s ease;animation:SH_pulse 2.4s infinite ease-in-out;cursor:pointer;will-change:transform}
.share-btn::before{content:'↗';font-size:1.15em;line-height:1}
.share-btn:hover{transform:scale(1.06) translateY(-2px);box-shadow:0 8px 30px rgba(16,185,129,0.65),0 0 0 0 rgba(16,185,129,0);text-decoration:none}
@keyframes SH_pulse{0%,100%{box-shadow:0 4px 18px rgba(16,185,129,0.45),0 0 0 0 rgba(16,185,129,0.35)}60%{box-shadow:0 4px 18px rgba(16,185,129,0.45),0 0 0 14px rgba(16,185,129,0)}}
.cb-nb{position:fixed;bottom:8px;left:50%;transform:translateX(-50%);height:62px;border-radius:34px;display:flex;align-items:center;background:rgba(255,255,255,0.12);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.18);z-index:9999;transition:opacity .3s,transform .3s,width .4s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 24px rgba(0,0,0,0.25);padding:0 8px;gap:2px;width:340px;overflow:hidden}
.cb-nb.cb-nh{opacity:0;transform:translateX(-50%) translateY(80px);pointer-events:none}
.cb-nb.cb-ab{animation:cb-nab .6s cubic-bezier(0.22,1,0.36,1)}
@keyframes cb-nab{0%{transform:translateX(-50%) translateY(0) rotate(0deg)}18%{transform:translateX(-50%) translateY(4px) rotate(-3deg)}36%{transform:translateX(-50%) translateY(9px) rotate(-5deg)}54%{transform:translateX(-50%) translateY(5px) rotate(-2deg)}72%{transform:translateX(-50%) translateY(2px) rotate(-1deg)}100%{transform:translateX(-50%) translateY(0) rotate(0deg)}}
.cb-nb-i{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;min-width:66px;height:58px;padding:0 10px;border-radius:28px;cursor:pointer;transition:background .2s,transform .2s;box-sizing:border-box;flex-shrink:0}
.cb-nb-i:hover{background:rgba(255,255,255,.15)}
.cb-nb-i.cb-na{background:rgba(255,255,255,.22);box-shadow:inset 0 1px 0 rgba(255,255,255,.28),0 4px 14px rgba(0,0,0,.12),0 0 0 1px rgba(255,255,255,.08);transform:scale(1.03);position:relative;overflow:hidden}
.cb-nb-e{font-size:25px;line-height:1}
.cb-nb-l{font-size:11px;color:rgba(255,255,255,0.75);white-space:nowrap}
.cb-nb-i.cb-na .cb-nb-l{color:#fff;font-weight:600}
.cb-nb-sep{width:1px;height:34px;background:rgba(255,255,255,.15);flex-shrink:0;margin:0 2px}
.cb-nb-mid{display:flex;align-items:center;justify-content:center;flex:1;min-width:0;transition:opacity .25s,transform .25s}
.cb-nb-mid.cb-fo{opacity:0;transform:scale(.9);pointer-events:none}
.cb-nb-cart{display:flex;align-items:center;gap:6px;padding:10px 18px;border-radius:26px;background:rgba(34,197,94,0.25);border:1px solid rgba(34,197,94,0.4);cursor:pointer;color:#fff;font-size:16px;font-weight:600;white-space:nowrap;transition:background .2s}
.cb-nb-cart:hover{background:rgba(34,197,94,0.38)}
.cb-nb-bdg{background:rgba(239,68,68,.95);color:#fff;font-size:11px;font-weight:bold;min-width:18px;height:18px;border-radius:9px;display:inline-flex;align-items:center;justify-content:center;padding:0 4px;border:1.5px solid rgba(255,255,255,.3)}
.cb-nb-ask{display:flex;align-items:center;gap:6px;color:rgba(255,255,255,.9);font-size:15px;font-weight:500;padding:8px 12px;cursor:pointer;white-space:nowrap}
.cb-nb-gr{display:flex;align-items:center;gap:8px;color:#fff;font-size:16px;font-weight:500;padding:4px 8px;white-space:nowrap}
.cb-nb-gr img{width:38px;height:38px;flex-shrink:0}
.cb-nb-midbtns{display:flex;align-items:center;gap:2px}
.cb-nb-i.cb-wv::after{content:'';position:absolute;inset:0;border-radius:28px;background:radial-gradient(circle,rgba(255,255,255,.35) 0%,transparent 70%);animation:cb-wvk .5s ease-out}
@keyframes cb-wvk{0%{transform:scale(.3);opacity:1}100%{transform:scale(1.8);opacity:0}}
.cb-fng{position:fixed;bottom:78px;left:50%;transform:translateX(-50%);font-size:38px;opacity:0;pointer-events:none;z-index:10000;transition:opacity .3s;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.4))}
.cb-fng.cb-v{opacity:1;animation:cb-fngb 1s ease-in-out infinite}
@keyframes cb-fngb{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(10px)}}`;
document.head.appendChild(css);

const IMG404='<img src="web/otros/Archivos/Imagenes/Permanente/404.avif">';
function set404(el){el.className='cb-404';el.innerHTML=IMG404}

let st={c:[],r:!1},ab={b:!1};

const modal=document.createElement("div");

function fmt(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}

const _iPWA=/iP(hone|od|ad)/.test(navigator.userAgent)&&!!navigator.standalone;
function openExt(url){
  if(url.startsWith('sms:')){location.href=url;return;}
  if(_iPWA&&url.includes('wa.me')){
    const m=url.match(/wa\.me\/(\d+)\?text=(.*)/s);
    if(m){location.href=`whatsapp://send?phone=${m[1]}&text=${m[2]}`;return;}
  }
  window.open(url,'_blank');
}

const _nb=document.createElement('div');
_nb.className='cb-nb cb-nh';
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
  const el=document.createElement('div');el.className='cb-nb-cart';
  const tot=st.c.reduce((a,b)=>a+b.d,0);
  el.innerHTML=`🛒 Finalizar Compra <span class=cb-nb-bdg>${tot}</span>`;
  el.addEventListener('click',toggleModal);
  return el;
}

function _mkAsk(){
  const el=document.createElement('div');el.className='cb-nb-ask';
  el.innerHTML='📩 Clic para Preguntar 🤗';
  el.addEventListener('click',()=>{
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

let _grShown=false;

function syncNB(){
  if(isHidden()){_nb.classList.add('cb-nh');fng.classList.remove('cb-v');return;}
  _nb.classList.remove('cb-nh');

  if(_grShown)return;

  const route=_nbRoute();
  [_iL,_iR].forEach((el,i)=>{
    const r=i===0?_rL:_rR;
    const wasActive=el.classList.contains('cb-na');
    const isActive=!!r.path&&route.includes(r.path);
    el.classList.toggle('cb-na',isActive);
    if(isActive&&!wasActive){el.classList.remove('cb-wv');el.offsetWidth;el.classList.add('cb-wv');setTimeout(()=>el.classList.remove('cb-wv'),500);}
  });

  if(_scrollAsk&&st.c.length>0){
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

  if(_scrollAsk){
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

function _nbRoute(){
  let h;try{h=decodeURIComponent(location.hash.slice(1))}catch(e){h=location.hash.slice(1)}
  return h;
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
  let html=multi?'<div style="text-align:center;margin-bottom:8px"><a href="web/otros/Archivos/MarkDowns/SerParte.md" style="color:#facc15;font-weight:600;font-size:.85rem">⚠️ Varios Proveedores ❔</a></div>':"";
  gks.forEach(k=>{
    const g=groups[k];
    html+=`<div class="cb-cp" data-gk="${k}"><p class="cb-cn">📦 ${g.n}</p>`;
    g.items.forEach(x=>{
      const sub=x.p*x.d;
      html+=`<div class="cb-ci" data-key="${x.t}-${x.n}-${x.i}"><span class="cb-ct">${x.b}</span><span class="cb-cs">💰 ${fmt(sub)}Gs</span><div class="cb-cc"><button data-t="${x.t}" data-n="${x.n}" data-i="${x.i}" data-a="-">−</button><span>${x.d}</span><button data-t="${x.t}" data-n="${x.n}" data-i="${x.i}" data-a="+">+</button></div></div>`;
    });
    const msg="Hola quiero%0A"+g.items.map(x=>`[${x.d}] de ${encodeURIComponent(x.b)} [ID=${x.i}]`).join("%0A");
    const svgWA=`<img src="web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/WhatsAppLogo.svg" style="width:28px;height:28px;vertical-align:middle">`;
    const svgTG=`<img src="web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/TelegramLogo.svg" style="width:28px;height:28px;vertical-align:middle">`;
    let btns="";
    if("wt"===g.t)btns=`<button class="cb-bt cb-wa" data-l="https://wa.me/${g.n}?text=${msg}" data-gk="${k}" data-lbl="WhatsApp">${svgWA}↗️</button><button class="cb-bt cb-tg" data-l="https://t.me/+${g.n}?text=${msg}" data-gk="${k}" data-lbl="Telegram">${svgTG}↗️</button><button class="cb-bt cb-sm" data-l="sms:+${g.n}?body=${msg}" data-gk="${k}" data-lbl="SMS">✉️↗️</button>`;
    else if("w"===g.t)btns=`<button class="cb-bt cb-wa" data-l="https://wa.me/${g.n}?text=${msg}" data-gk="${k}" data-lbl="WhatsApp">${svgWA}↗️</button><button class="cb-bt cb-sm" data-l="sms:+${g.n}?body=${msg}" data-gk="${k}" data-lbl="SMS">✉️↗️</button>`;
    else if("t"===g.t)btns=`<button class="cb-bt cb-tg" data-l="https://t.me/+${g.n}?text=${msg}" data-gk="${k}" data-lbl="Telegram">${svgTG}↗️</button><button class="cb-bt cb-sm" data-l="sms:+${g.n}?body=${msg}" data-gk="${k}" data-lbl="SMS">✉️↗️</button>`;
    html+=`<div class="cb-cf"><h5 class="cb-ch">Termina la Compra en</h5><div class="cb-ca">${btns}</div></div></div>`;
  });
  modal.querySelector(".cb-mb").innerHTML=html;
  updMHT();
}

function toggleModal(){
  modal.classList.toggle("cb-v");
  const open=modal.classList.contains("cb-v");
  document.body.style.overflow=open?"hidden":"";
  if(open)renderCart();
}

let _sRaf=null;
function onScroll(){
  if(!st.r)return;
  const dc=document.getElementById("disqus-container");
  if(!dc)return;
  const dcTop=dc.offsetTop,scrollBot=window.pageYOffset+window.innerHeight;
  const wasAsk=_scrollAsk;
  _scrollAsk=scrollBot>=dcTop-100;
  if(_scrollAsk!==wasAsk)syncNB();
}
function _onScrollThrottled(){if(!_sRaf)_sRaf=requestAnimationFrame(()=>{_sRaf=null;onScroll()})}

modal.className="cb-modal";
modal.innerHTML='<div class="cb-mc"><div class="cb-mh"><div class="cb-mhl"><span>🛒 Carrito</span><span class="cb-mhT"></span></div><span class="cb-mx">✕</span></div><div class="cb-mb"></div></div>';
document.body.appendChild(modal);

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
      if(!st.c.length)setTimeout(toggleModal,2e3);
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
        const sep=btn.dataset.l.includes("?body=")?"?body=":"?text=";
        const base=btn.dataset.l.split(sep)[0];
        btn.dataset.l=base+sep+newMsg;
      });
      updMHT();
    }
  }
});

function initProduct(){
  const hash=location.hash;if(!hash)return;
  let dec;try{dec=decodeURIComponent(hash)}catch(e){dec=hash}
  const mID=dec.match(/ID=([^-\s]+)/),mPC=dec.match(/PC=([^-\s]+)/),mNB=dec.match(/NB=([^.]+)/),mNM=dec.match(/NM=([^-\s]+)/),mCD=dec.match(/CD=([^-\s]+)/),mTM=dec.match(/TM=(\d{2}\.\d{2}\.\d{4}\.\d{2}\.\d{2})/);
  if(!(mID&&mPC&&mNB&&mNM))return;
  let cs=document.getElementById("cs");
  if(!cs){
    const gal=document.querySelector(".galeriaMD");
    if(!gal)return;
    cs=document.createElement("div");
    cs.id="cs";
    gal.insertAdjacentElement("afterend",cs);
  }
  const id=mID[1],pc=parseInt(mPC[1]),nb=mNB[1],nm=mNM[1],avail=mCD?parseInt(mCD[1]):null;
  if(mTM){const[d,mo,y,h,mi]=mTM[1].split('.').map(Number);const e=new Date(y,mo-1,d,h,mi);if(e<=new Date())return void set404(cs);}
  let tp,num;
  if(nm.startsWith("WATG")){tp="wt";num=nm.substring(4)}
  else if(nm.startsWith("WA")){tp="w";num=nm.substring(2)}
  else if(nm.startsWith("TG")){tp="t";num=nm.substring(2)}
  else return;
  const isOff=OFICIALPROVIDER.includes(num);
  const minQ=parseInt(cs.getAttribute("min"))||1,maxQ=null!==avail?avail:999;
  if(avail===0)return void set404(cs);
  let qty=minQ,locked=!1,tmExp=null,tmInt=null;
  if(mTM){const[d,mo,y,h,mi]=mTM[1].split('.').map(Number);tmExp=new Date(y,mo-1,d,h,mi);}
  function fmtTM(){if(!tmExp)return'';const diff=tmExp-new Date();if(diff<=0)return null;const td=Math.floor(diff/864e5),th=Math.floor((diff%864e5)/36e5),tm=Math.floor((diff%36e5)/6e4);return td>0?`${td} dia${td>1?'s':''} y ${th} hora${th!==1?'s':''}`:`${th} hora${th!==1?'s':''} ${tm} min`;}
  function render(){
    const tmStr=tmExp?fmtTM():null;
    if(tmExp&&tmStr===null)return void set404(cs);
    cs.className='';
    cs.innerHTML=
      (!isOff?`<div class="cb-dsp"><a href="web/otros/Archivos/MarkDowns/SerParte.md" style="color:#fbbf24;font-weight:600;font-size:13px;text-decoration:none">Proveedor Externo ↗️</a></div>`:"")+
      (tmStr?`<div class="cb-dsp cb-dsp-tm">⏳ Se Acaba En: ${tmStr}</div>`:"")+
      (null!==avail?`<div class="cb-dsp">Disponible: ${avail} unidades</div>`:"")+
      `<div class="cb-p">Precio: <span class="cb-t" id="cpt">${fmt(pc*qty)}</span>Gs</div>`+
      `<div class="cb-o"><span>Cantidad:</span><button class="cb-k" id="cbm">−</button><input type="number" class="cb-qv" id="cqv" value="${qty}" min="${minQ}" max="${maxQ}"><button class="cb-k" id="cbp">+</button></div><button class="cb-a" id="cba">🛍️ Añadir al Carrito</button>`;
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

function initShare(){
  let el=document.getElementById("sh");
  if(!el)return;
  el.id="compartir-enlace";
  el.innerHTML=`<div id="compartir-bloque"><a id="compartir-btn" href="#"><span class="share-btn">Compartir</span></a></div>`;
  const a=document.getElementById("compartir-btn");
  if(!a||!navigator.share)return;
  a.removeAttribute("href");a.style.cursor="pointer";
  function onSh(e){e.preventDefault();navigator.share({title:"😻 Compartir",text:"😻 Comparte para ser mas Amigos cada Dia 😻",url:location.href});}
  a.addEventListener("click",onSh);
  document.addEventListener("contentUnload",()=>a.removeEventListener("click",onSh),{once:true});
}

function initPage(){initProduct();initShare();syncNB();}

window.addEventListener("cartAdd",ev=>{const{type:tp,num,id,q,pc,nb}=ev.detail;addItem(tp,num,id,q,pc,nb)});
window.addEventListener("scroll",_onScrollThrottled);
window.addEventListener("resize",_onScrollThrottled);

const content=document.getElementById("content");
st.r=!0;onScroll();requestAnimationFrame(initPage);
if(content)content.addEventListener("contentLoaded",()=>{st.r=!0;syncNB();setTimeout(()=>{onScroll();requestAnimationFrame(initPage)},100)});
window.addEventListener("hashchange",syncNB);
}();