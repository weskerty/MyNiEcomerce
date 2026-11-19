!function(){if(window.__GI)return;window.__GI=true;
document.addEventListener('contextmenu',ev=>{
  if(ev.target.closest('.gallery-item,.gi-track,.gi-grid-inner,.gi-section,.gi-hd-flat,.BS1'))ev.preventDefault();
});
try{localStorage.getItem('GL1')&&document.body.classList.add('LS1')}catch{}
document.addEventListener('click',ev=>{
  const t=ev.target.closest('.GB1,.GV1');if(!t)return;ev.preventDefault();
  if(t.classList.contains('GB1'))return history.back();
  const L=document.body.classList.toggle('LS1');
  try{L?localStorage.setItem('GL1','1'):localStorage.removeItem('GL1')}catch{}
});
const DJ='web/tienda/data.json',JC={},IDX={},ITEM=160,TH=82,IH=ITEM+TH,MW=150,LW=280,GAP=8,STRIDE=ITEM+GAP,PAGE=6,_observed=new Set();
const SP=!!window.__CFG?.showPrice,CR=Math.max(1,parseInt(window.__CFG?.carouselRows)||1);
let _GU=window.GeoUtils||null,_GUp=null;
function loadGU(){
  if(_GU)return Promise.resolve(_GU);
  if(_GUp)return _GUp;
  _GUp=new Promise(res=>{
    const s=document.createElement('script');
    s.src='web/js/lib/GeoUtils.js';
    s.onload=()=>{_GU=window.GeoUtils;res(_GU)};
    s.onerror=()=>res(null);
    document.head.appendChild(s);
  });
  return _GUp;
}
const AP='.GL_AP:is([data-nl],body:not(.LS1) *)',_S=document.createElement('style');
_S.textContent=`
.contenedor-imagenes-animado{width:100%;position:relative;overflow:hidden}
.gi-track{position:relative;height:${IH}px;cursor:grab;overflow:hidden;touch-action:pan-y}
.gi-track:active{cursor:grabbing}
.gi-strip{position:absolute;inset:0}
.gi-node{position:absolute;top:0;left:0;width:${ITEM}px;display:flex;flex-direction:column;gap:${GAP}px}
.gi-grid-inner{width:100%;overflow:hidden}
.gi-grid-row{display:grid;grid-template-columns:repeat(auto-fill,minmax(var(--MW1,${MW}px),1fr));gap:${GAP}px;margin-bottom:${GAP}px}
.gi-skeleton{display:flex;flex-direction:column;gap:8px;padding:8px 0}
.gi-sk-item{height:${IH}px;border-radius:18px;background:linear-gradient(90deg,var(--RD_M),var(--RD_L),var(--RD_M));background-size:200% 100%;animation:gi-shimmer 1.4s infinite}
@keyframes gi-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
.gallery-item{position:relative;display:flex;flex-direction:column;width:${ITEM}px;height:${IH}px;flex-shrink:0;box-sizing:border-box;padding:0;border:1px solid var(--RD_L);border-radius:18px;background:none;box-shadow:var(--RD_SH);color:var(--RD_F);text-decoration:none;overflow:hidden;cursor:pointer;transition:border-color .15s,box-shadow .15s}
@media(hover:hover){.gallery-item:hover{border-color:rgba(255,255,255,.4);box-shadow:var(--RD_SH),0 12px 28px -12px rgba(0,0,0,.5);text-decoration:none}}
.gallery-item>img,.gi-navtile-ico{display:block;width:100%;height:auto;aspect-ratio:1;flex-shrink:0;object-fit:fill}
.gi-navtile-ico{display:flex;align-items:center;justify-content:center;font-size:44px;line-height:1}
.gallery-item .mc{flex:0 0 var(--TH1,${TH}px);min-height:0;display:grid;grid-template-columns:1fr auto;grid-template-rows:1fr auto;align-items:center;gap:2px 6px;padding:8px 10px;text-align:left}
.gallery-item .mc p{align-self:start}
.gallery-item .mc p{grid-column:1/-1;margin:0;font-size:.82rem;font-weight:500;line-height:1.25;color:var(--RD_F);word-break:break-word;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.gi-pc{font-size:.85rem;font-weight:700;color:var(--RD_F);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.gi-ad{grid-column:2;grid-row:2;align-self:end;display:grid;place-items:center;box-sizing:border-box;width:44px;height:40px;margin:0 -10px -8px 0;border-width:1px 0 0 1px;border-radius:14px 0 0 0;font-size:1.3rem;font-weight:500;line-height:1}
.gi-ad.gi-ok{background-color:var(--ok);border-color:var(--ok)}
.gi-grid-row .gallery-item{width:100%;height:auto}
.gallery-item.gi-ph{height:${ITEM}px}
.gi-ph .mc{display:none}
.gi-section,.grid-gallery:not(.gi-section *){position:relative;margin-top:24px;text-align:left}
.gi-section>.gi-hd{display:block;margin:0 0 14px;color:inherit;text-decoration:none}
.gi-section>.gi-hd>h2,.gi-hd-flat>h2{margin:0;font-size:1.4rem;color:var(--RD_F)}
.gi-hd-flat{display:block;margin:0 0 14px;color:inherit;text-decoration:none;text-align:left}
.GL_AP{--MW1:104px;--TH1:46px}
${AP} .gallery-item{border:0;border-radius:0;background:none;box-shadow:none;overflow:visible}
${AP} .gallery-item>img{border-radius:24%;box-shadow:0 10px 24px -10px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,255,255,.1);transition:filter .15s}
@media(hover:hover){${AP} .gallery-item:hover{box-shadow:none}${AP} .gallery-item:hover>img{filter:brightness(1.12)}}
${AP} .gallery-item .mc{grid-template-columns:1fr;align-content:start;padding:8px 2px 0;text-align:center}
${AP} .gallery-item .mc p{font-size:.78rem;font-weight:500}
.GL_AP :is(.gi-pc,.gi-ad){display:none}
.GL_AP .BS1{margin-bottom:20px}
body.LS1 .gi-grid-row:not([data-nl] *){grid-template-columns:repeat(auto-fill,minmax(${LW}px,1fr))}
body.LS1 .gi-grid-row:not([data-nl] *) .gallery-item{flex-direction:row;align-items:center;width:100%;height:calc(var(--LR_I) + 2px);border-radius:14px}
body.LS1 .gi-grid-row:not([data-nl] *) .gallery-item>img{width:var(--LR_I);height:var(--LR_I);aspect-ratio:auto}
body.LS1 .gi-grid-row:not([data-nl] *) .mc{flex:1;align-self:stretch;grid-template-rows:auto auto;align-content:center;padding:0 10px 0 var(--LR_P)}
body.LS1 .gi-grid-row:not([data-nl] *) .mc:has(.gi-ad){padding-right:58px}
body.LS1 .gi-grid-row:not([data-nl] *) .mc p{grid-column:1}
body.LS1 .gi-grid-row:not([data-nl] *) .gi-ad{position:absolute;top:0;right:0;bottom:0;width:48px;height:auto;margin:0;border-width:0 0 0 1px;border-radius:0}`;
document.head.appendChild(_S);
const IO=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){IO.unobserve(x.target);x.target.__ld&&x.target.__ld()}})},{rootMargin:'300px'});
let _hidden=false;document.addEventListener('visibilitychange',()=>{_hidden=document.hidden});
function fN(p){return p.split('/').pop().replace(/\.[^.]+$/,'')}
const _CD0=/CD=0(?!\d)/;
function fCD0(idx){
  if(idx._f0)return idx._f0;
  return idx._f0={_all:idx._all.filter(p=>!_CD0.test(p)),f:Object.fromEntries(Object.entries(idx.f).map(([k,v])=>[k,v.filter(p=>!_CD0.test(p))]))};
}
function nN(n){const m=n.match(/NB=(.+)/);return m?m[1].trim():n}
function mL(p){return p.replace(/\.[^.]+$/,'.html')}
function VH1(j,k){const g=document.createElement('div');g.className='grid-gallery';g.dataset.title=g.dataset.galleryKey=k;g.dataset.jsonPath=j;return'<div style="text-align:center"><div class="GL_P1">'+g.outerHTML+'</div><a href="#" class="back-button GB1">← Volver al Inicio</a></div><script>window.__KP1?.()</script>'}
window.__VR1?.(r=>{try{const d=decodeURIComponent(r),m=!d.includes('..')&&d.match(/^(web\/.*\/)([^/]+)\/Grilla\.vr\.html$/);return m&&VH1(m[1]+'data.json',m[2])}catch{}});
function VG1(c){if(c.dataset.href!=null)return;const j=c.dataset.jsonPath||DJ,k=c.dataset.galleryKey||c.id.replace(/-gallery|-grid/g,'');if(k&&/^web\/.*data\.json$/.test(j))c.dataset.href='#'+j.replace(/data\.json$/,'')+k+'/Grilla.vr.html'}
function GH1(c,k,v){const o=history.state?.G?.[k]||[null,0];if(c.isConnected&&(o[0]!==v[0]||o[1]!==v[1]))window.__HS2('G',{...history.state?.G,[k]:v})}
function BR1(){const ct=document.getElementById('content');if(ct&&!ct.querySelector('.GV1'))(ct.querySelector('.GL_P1')||ct).insertAdjacentHTML('afterbegin','<a href="#" class="_nb l GB1" aria-label="Volver">🔙</a><a href="#" class="_nb r GV1" aria-label="Lista o cuadricula"></a>')}
const _PC=/PC=(\d+)/;
function fPC(n){const m=n.match(_PC);return m?m[1].replace(/\B(?=(\d{3})+(?!\d))/g,'.')+' Gs':''}
let _GF=window.GridFit||null,_GFp=null;
function loadGF(){
  if(_GF)return Promise.resolve(_GF);
  if(_GFp)return _GFp;
  _GFp=new Promise(res=>{
    const s=document.createElement('script');
    s.src='web/js/lib/GridFit.js';
    s.onload=()=>{_GF=window.GridFit;res(_GF)};
    s.onerror=()=>res(null);
    document.head.appendChild(s);
  });
  return _GFp;
}
function buildPages(imgs,ps){
  const total=imgs.length,pages=[];
  for(let i=0;i<total;i+=ps)pages.push({start:i,end:Math.min(i+ps,total)});
  return pages.length?pages:[{start:0,end:0}];
}
function sPC(x,p){
  const v=fPC(fN(p));
  if(!v){if(x._pc){x._pc.remove();x._pc=null}return}
  if(!x._pc){const s=document.createElement('span');s.className='gi-pc';x._m.appendChild(s);x._pc=s}
  x._pc.textContent=v;
}
function pA1(p){
  if(!p.startsWith('web/tienda/'))return null;
  const n=fN(p),g=k=>(n.match(new RegExp('(?:^|-)'+k+'=([^-]+)'))||[])[1],id=g('ID'),pc=parseInt(g('PC')),num=g('NM'),tm=g('TM');
  if(!id||!pc||!/^\d+$/.test(num||''))return null;
  if(tm){const[d,mo,y,h,mi]=tm.split('.').map(Number);if(new Date(y,mo-1,d,h,mi)<=new Date())return null}
  return{type:g('CH')||'WA',num,id,q:Math.max(1,parseInt(g('CM'))||1),pc,nb:nN(n),img:p};
}
function AD1(e){
  e.preventDefault();e.stopPropagation();
  const b=e.currentTarget,x=b.closest('.gallery-item'),d=x&&pA1(x._src);if(!d)return;
  window.dispatchEvent(new CustomEvent('cartAdd',{detail:d}));
  b.textContent='✓';b.classList.add('gi-ok');clearTimeout(b._t);
  b._t=setTimeout(()=>{b.textContent='+';b.classList.remove('gi-ok')},1200);
}
function sAD(x,p){
  if(x._raw||!pA1(p)){if(x._ad){x._ad.remove();x._ad=null}return}
  if(x._ad)return;
  const b=document.createElement('span');b.className='gi-ad';b.setAttribute('role','button');b.setAttribute('aria-label','Agregar al carrito');b.textContent='+';b.addEventListener('click',AD1);x._m.appendChild(b);x._ad=b;
}
function mkNode(p,h,a,eg){const t=a||nN(fN(p)),x=document.createElement('a');x.href=h||mL(p);x.className='gallery-item'+(h?' gi-ph':'');const i=document.createElement('img');i.alt=t;i.decoding='async';i.loading=eg?'eager':'lazy';i.src=p;const m=document.createElement('div');m.className='mc';const pt=document.createElement('p');pt.textContent=t;m.appendChild(pt);x.appendChild(i);x.appendChild(m);x._img=i;x._p=pt;x._m=m;x._src=p;x._raw=!!h;if(SP)sPC(x,p);sAD(x,p);return x}
function patchNode(a,p,h,t){if(a._src===p)return;const raw=!!h,s=t||nN(fN(p));a.href=raw?p:mL(p);a._p.textContent=s;a._img.src=p;a._img.alt=s;a._src=p;a._raw=raw;a.classList.toggle('gi-ph',raw);if(SP)sPC(a,p);sAD(a,p)}
function bIdx(g){
  const idx={};
  for(const k in g){
    const v=g[k];
    if(Array.isArray(v)){
      idx[k]={_all:v,f:{}};
    }else if(v&&typeof v==='object'){
      const all=[];for(const f in v)for(const p of v[f])all.push(p);
      idx[k]={_all:all,f:v};
    }
  }
  return idx;
}
async function lGD(j){
  if(JC[j]!==undefined)return JC[j];
  if(JC[j+'_p'])return JC[j+'_p'];
  const aG=g=>{
    JC[j]=g;
    IDX[j]=bIdx(JC[j]||{});
    window.__GIDX=IDX;
    (window.__DJ=window.__DJ||{})[j]=JC[j];
    delete JC[j+'_p'];
    if(_geo)sortIdxByCT(IDX[j]);
    return JC[j];
  };
  if(window.__DJ?.[j])return aG(window.__DJ[j]);
  JC[j+'_p']=fetch(j).then(r=>r.json()).then(d=>aG(d.galleries)).catch(()=>{delete JC[j+'_p'];return null});
  return JC[j+'_p'];
}
window.__GLD=lGD;
const _ric=window.requestIdleCallback||(cb=>setTimeout(cb,1));

let _geo=null,_geoReq=false,_geoCbs=[];
function reqGeo(cb){
  if(_geo){cb(_geo);return}
  if(!localStorage.getItem('UBI'))return;
  _geoCbs.push(cb);
  if(_geoReq)return;
  _geoReq=true;
  if(!navigator.geolocation)return;
  navigator.geolocation.getCurrentPosition(
    p=>loadGU().then(g=>{
      if(!g)return;
      _geo={lat:p.coords.latitude,lon:p.coords.longitude};
      _geoCbs.forEach(f=>f(_geo));
      _geoCbs=[];
    }),
    ()=>{},
    {maximumAge:600000}
  );
}
window.__reqGeo=reqGeo;
function distOf(p){
  const ct=_GU.parseCT(p);
  return ct?_GU.haversine(_geo.lat,_geo.lon,ct.lat,ct.lon):Infinity;
}
function sortIdxByCT(idx){
  const dc=new Map();
  const dOf=p=>{let v=dc.get(p);if(v===undefined)dc.set(p,v=distOf(p));return v};
  const sortArr=arr=>arr.sort((a,b)=>dOf(a)-dOf(b));
  for(const k in idx){
    sortArr(idx[k]._all);
    for(const f in idx[k].f)sortArr(idx[k].f[f]);
    idx[k]._f0=null;
  }
}
const _reRender=[];
function sortAllLoaded(){
  for(const j in IDX)if(IDX[j])sortIdxByCT(IDX[j]);
  _reRender.splice(0).forEach(f=>f());
}
function rR(c,cb){if(_geo)return;_reRender.push(cb);const s=c.__stop;c.__stop=()=>{const i=_reRender.indexOf(cb);if(i>-1)_reRender.splice(i,1);if(s)s()}}
loadGU();reqGeo(sortAllLoaded);

const _wm=new Set();
function wm(s){if(!s||_wm.has(s))return;_wm.add(s);const i=new Image();i.decoding='async';i.src=s}
function mkCarousel(c,imgs,isMD,altMap){
  const total=imgs.length;if(!total)return;
  const getAlt=i=>altMap?altMap[i%altMap.length]?.alt||null:null;
  const R=isMD?1:Math.max(1,parseInt(c.dataset.rows)||CR),NH=isMD?ITEM:IH,H=R*NH+(R-1)*GAP;
  if(Math.ceil(total/R)<5){const row=document.createElement('div');row.style.cssText='display:grid;grid-auto-flow:column;grid-template-rows:repeat('+R+','+NH+'px);grid-auto-columns:'+ITEM+'px;gap:'+GAP+'px;overflow-x:auto;height:'+H+'px;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch';imgs.forEach((p,i)=>{const a=mkNode(p,isMD?p:null,getAlt(i));if(isMD)a.target='_blank';a.style.scrollSnapAlign='start';row.appendChild(a);});c.appendChild(row);return;}
  const DUR=380,TICK=5000,B=2;
  const track=document.createElement('div');track.className='gi-track';track.style.height=H+'px';
  const strip=document.createElement('div');strip.className='gi-strip';track.appendChild(strip);c.appendChild(track);
  let vw=c.offsetWidth||320;
  const calcVis=()=>Math.max(1,Math.floor((vw+GAP)/STRIDE));
  let vis=calcVis(),cur=0,off=0,pn=0,anim=false,fT=null,visibleNow=false,timer=null;
  const nodes=[],md=i=>((i%total)+total)%total;

  function warm(k){for(let r=0;r<R;r++)wm(imgs[md(k*R+r)])}
  function fill(w,k){for(let r=0;r<R;r++){const i=md(k*R+r),s=imgs[i];patchNode(w.children[r],s,isMD?s:null,getAlt(i))}}
  function lay(){nodes.forEach((w,j)=>{w.style.transform='translate3d('+(j-B)*STRIDE+'px,0,0)'})}
  function mv(d){strip.style.transition=d?'transform '+d+'ms ease':'';strip.style.transform='translate3d('+off+'px,0,0)'}

  function build(){
    strip.innerHTML='';nodes.length=0;
    for(let j=0;j<vis+1+2*B;j++){
      const w=document.createElement('div');w.className='gi-node';
      for(let r=0;r<R;r++){const i=md((cur-B+j)*R+r),s=imgs[i],n=mkNode(s,isMD?s:null,getAlt(i),true);if(isMD)n.target='_blank';w.appendChild(n)}
      strip.appendChild(w);nodes.push(w);
    }
    lay();off=0;mv(0);warm(cur-B-1);warm(cur+vis+B+1);
  }
  function sh(f){
    if(f){const w=nodes.shift();nodes.push(w);cur++;off+=STRIDE;fill(w,cur+vis+B);warm(cur+vis+B+1)}
    else{const w=nodes.pop();nodes.unshift(w);cur--;off-=STRIDE;fill(w,cur-B);warm(cur-B-1)}
    lay();
  }
  function end(){anim=false;if(pn)sh(pn>0);pn=0;mv(0)}
  function go(n){
    pn=n;anim=true;off=-n*STRIDE;mv(DUR);
    fT=setTimeout(()=>{end();if(!held)startTimer()},DUR+20);
  }
  function halt(){
    if(!anim)return;
    clearTimeout(fT);
    off=new DOMMatrix(getComputedStyle(strip).transform).m41;
    end();
  }

  function startTimer(){
    clearTimeout(timer);timer=null;
    if(_hidden||!visibleNow)return;
    timer=setTimeout(()=>go(1),TICK);
  }
  function stopTimer(){clearTimeout(timer);timer=null;}

  const visIO=new IntersectionObserver(([e])=>{
    visibleNow=e.isIntersecting;
    visibleNow?startTimer():stopTimer();
  },{threshold:0});
  visIO.observe(c);

  let held=false;
  const ac=new AbortController(),sig=ac.signal;
  loadGF().then(g=>{if(g)g.DR1(track,sig,{
    down(){held=true;stopTimer()},
    lock(){halt();strip.style.willChange='transform'},
    move(d){off+=d;while(off<-STRIDE)sh(true);while(off>STRIDE)sh(false);mv(0)},
    up(w,vx,k){held=false;strip.style.willChange='';if(!w){if(!anim)startTimer();return}go(k?0:off<-STRIDE/3||vx<-g.FL?1:off>STRIDE/3||vx>g.FL?-1:0)}
  })});

  document.addEventListener('visibilitychange',()=>{
    if(document.hidden)stopTimer();else if(visibleNow)startTimer();
  },{signal:sig});

  const ro=new ResizeObserver(()=>_ric(()=>{
    vw=c.offsetWidth||320;const nv=calcVis();
    if(nv===vis)return;
    vis=nv;stopTimer();halt();build();
    if(visibleNow)startTimer();
  }));
  ro.observe(c);

  build();

  c.__stop=()=>{
    stopTimer();clearTimeout(fT);ro.disconnect();visIO.disconnect();ac.abort();
    strip.innerHTML='';nodes.length=0;
  }
}

const _emoRe=/^\p{Extended_Pictographic}(?:️|\p{EMod}|[\u{E0020}-\u{E007F}])*(?:‍\p{Extended_Pictographic}(?:️|\p{EMod})*)*/u;
const _EMO_FALLBACK='📦';
function splitEmoji(name){
  const g=_emoRe.exec(name)?.[0];
  return g?{emo:g,txt:name.slice(g.length).trim()}:{emo:_EMO_FALLBACK,txt:name};
}
function mkSubBtns(c,subcats,onPick,cur){
  const bar=document.createElement('div');bar.className='BS1';
  let active=cur||null;
  for(const name in subcats){
    if(!subcats[name].length)continue;
    const{emo,txt}=splitEmoji(name);
    const a=document.createElement('a');a.className='BS2'+(name===active?' GL_C':'');a.href='#';
    const box=document.createElement('div');box.className='BS3';
    const sp=document.createElement('span');sp.className='BS4';sp.textContent=emo;
    const pt=document.createElement('p');pt.className='BS5 gi-txt';pt.textContent=txt;
    box.appendChild(sp);box.appendChild(pt);a.appendChild(box);
    a.addEventListener('click',ev=>{
      ev.preventDefault();
      active=active===name?null:name;
      bar.querySelector('.GL_C')?.classList.remove('GL_C');
      a.classList.toggle('GL_C',!!active);
      onPick(active);
    });
    bar.appendChild(a);
  }
  c.insertBefore(bar,c.firstChild);
  return bar;
}

function mkGrid(c,imgs,s0,sv){
  if(!imgs.length)return;
  const inner=document.createElement('div');inner.className='gi-grid-inner';c.appendChild(inner);
  const row=document.createElement('div');row.className='gi-grid-row';inner.appendChild(row);
  const nav=document.createElement('nav');inner.appendChild(nav);
  let pg=0,pageSize=PAGE,pages=buildPages(imgs,pageSize),sw=null,rdy=false;
  function applyPageSize(n){
    if(!(n>0)||n===pageSize)return;
    const f=pages[pg]?pages[pg].start:0;
    pageSize=n;pages=buildPages(imgs,pageSize);pg=Math.min(pages.length-1,Math.floor(f/n));renderPage(pg,false);
  }
  let ro=null,destroyed=false,pending=false;
  const ac=new AbortController(),p0=()=>Math.min(pages.length-1,Math.floor((s0||0)/pageSize));
  function stop(){destroyed=true;ac.abort();if(ro){ro.disconnect();ro=null}}
  loadGF().then(gf=>{
    if(destroyed)return;
    rdy=true;
    if(!gf){renderPage(pg=p0(),false);return}
    sw=gf.SW1(row,{sig:ac.signal,n:()=>pages.length,p:()=>pg,go:i=>{const d=i>pg?1:-1;pg=i;renderPage(pg,false,d,1)},
      fill:(el,i)=>{for(let k=pages[i].start;k<pages[i].end;k++)el.appendChild(mkNode(imgs[k],null,null,true))}});
    const ipp=()=>{if(document.body.classList.contains('LS1')&&!c.closest('[data-nl]'))return gf.itemsPerPage(inner,LW,parseFloat(getComputedStyle(c).getPropertyValue('--LR_I'))+2,GAP,120);const cs=getComputedStyle(c),mw=parseFloat(cs.getPropertyValue('--MW1'))||MW,th=parseFloat(cs.getPropertyValue('--TH1'))||TH,cw=inner.offsetWidth||mw,n=Math.max(1,Math.floor((cw+GAP)/(mw+GAP)));return gf.itemsPerPage(inner,mw,(cw-(n-1)*GAP)/n+th,GAP,120)};
    pageSize=ipp();pages=buildPages(imgs,pageSize);renderPage(pg=p0(),false);
    const scheduleCompute=()=>{
      if(pending)return;pending=true;
      _ric(()=>{pending=false;if(!destroyed)applyPageSize(ipp())});
    };
    ro=new ResizeObserver(scheduleCompute);
    ro.observe(c);
  });
  function cell(slot,p){
    let el=row.children[slot];
    if(!el){el=mkNode(p);row.appendChild(el);return el}
    patchNode(el,p);return el;
  }
  function jump(n){const d=n>pg?1:-1;pg=n;renderPage(pg,true,d)}
  function nv(){if(_GF)_GF.PN1(nav,pg,pages.length,jump)}
  function renderPage(p,scroll,dir,sw1){
    const{start,end}=pages[p];
    let slot=0;
    for(let i=start;i<end;i++,slot++)cell(slot,imgs[i]);
    while(row.children.length>slot)row.lastChild.remove();
    nv();if(sv)sv(start);
    if(!sw1){
      row.style.setProperty('--d',dir?(dir>0?'24px':'-24px'):'0px');
      row.classList.remove('AN1');void row.offsetWidth;row.classList.add('AN1');
      if(sw)sw.pre();
    }
    if(scroll&&c.scrollIntoView)c.scrollIntoView({behavior:'smooth',block:'start'})}
  return{setImgs(ni,k){imgs=ni;if(!k)pg=s0=0;pages=buildPages(imgs,pageSize);pg=Math.min(pg,pages.length-1);if(rdy)renderPage(pg,false)},stop};
}

function decorate(c){
  if(c.dataset.decorated)return c;
  c.dataset.decorated='1';
  const title=c.dataset.title||c.id.replace(/-gallery$|-grid$/,'');
  const href=c.dataset.href;
  if(!title&&c.dataset.title!=='')return c;
  const sec=document.createElement('div');sec.className='gi-section';
  c.parentNode.insertBefore(sec,c);
  sec.appendChild(c);
  if(!title)return c;
  const hd=document.createElement(href?'a':'div');
  hd.className='gi-hd';
  if(href)hd.href=href;
  const h2=document.createElement('h2');h2.textContent=title+(href?' ➡️':'');
  hd.appendChild(h2);
  sec.insertBefore(hd,c);
  c._h2=h2;c._baseTitle=title;
  return c;
}

function decorateFlat(c){
  if(c.dataset.decorated)return c;
  c.dataset.decorated='1';
  const title=c.dataset.title||c.id.replace(/-gallery$|-grid$/,'');
  const href=c.dataset.href;
  if(!title)return c;
  const hd=document.createElement(href?'a':'div');
  hd.className='gi-hd-flat';
  if(href)hd.href=href;
  const h2=document.createElement('h2');h2.textContent=title;
  hd.appendChild(h2);
  c.parentNode.insertBefore(hd,c);
  c._h2=h2;c._baseTitle=title;
  return c;
}

function showGISkeleton(c){
  const sk=document.createElement('div');sk.className='gi-skeleton';
  for(let i=0;i<3;i++){const d=document.createElement('div');d.className='gi-sk-item';d.style.animationDelay=(i*.08)+'s';sk.appendChild(d);}
  c.innerHTML='';c.appendChild(sk);
}
function paintThen(cb){requestAnimationFrame(()=>requestAnimationFrame(cb))}

async function pCont(c,isSw){
  if(c.__stop){c.__stop();c.__stop=null}
  if(c.__fetchAC){c.__fetchAC.abort()}
  if(c._subBar){c._subBar.remove();c._subBar=null}
  const ac=new AbortController();c.__fetchAC=ac;loadGF();
  const j=c.dataset.jsonPath||DJ,k=c.dataset.galleryKey,fFixed=c.dataset.pathFilter,key=k||c.id.replace(/-gallery|-grid/g,''),HK=j+'|'+key,H0=history.state?.G?.[HK]||[];
  const needsWait=JC[j]===undefined;
  if(needsWait){
    showGISkeleton(c);
    await new Promise(res=>paintThen(res));
    if(ac.signal.aborted)return;
  }
  await lGD(j);
  if(ac.signal.aborted)return;c.__fetchAC=null;
  if(!IDX[j]){c.innerHTML='<p>Error</p>';return}
  const fRaw=()=>{if(key!=='*')return fCD0(IDX[j][key]||{_all:[],f:{}});const f={};for(const k in IDX[j])f[k]=IDX[j][k]._all;return fCD0({_all:Object.values(f).flat(),f})};
  const idx=fRaw();
  if(!idx._all.length){
    if(isSw){decorate(c);c.parentNode.style.display='none';}
    else c.style.display='none';
    return;
  }
  const wantBtns=!isSw&&!fFixed&&idx.f&&Object.keys(idx.f).length>1;
  if(!wantBtns){
    decorate(c);
    const imgs=fFixed?(idx.f[fFixed]||[]):idx._all;
    c.innerHTML='';if(!imgs.length)return;
    if(isSw){mkCarousel(c,imgs);rR(c,()=>pCont(c,true));return}
    const grid=mkGrid(c,imgs,H0[1],s=>GH1(c,HK,[null,s]));
    if(grid){c.__stop=grid.stop;rR(c,()=>{const r=fRaw();grid.setImgs(fFixed?(r.f[fFixed]||[]):r._all,1)})}
    return;
  }
  decorateFlat(c);
  c.innerHTML='';
  const n0=idx.f[H0[0]]?.length?H0[0]:null;
  let curName=n0;
  const grid=mkGrid(c,n0?idx.f[n0]:idx._all,H0[1],s=>GH1(c,HK,[curName,s]));
  if(!grid)return;
  c.__stop=grid.stop;
  if(n0&&c._h2)c._h2.textContent=n0;
  rR(c,()=>{const r=fRaw();grid.setImgs(curName?r.f[curName]:r._all,1)});
  const bar=mkSubBtns(c,idx.f,name=>{
    curName=name;
    const r=fRaw();
    if(c._h2)c._h2.textContent=name||c._baseTitle;
    grid.setImgs(name?r.f[name]:r._all);
  },n0);
  c._subBar=bar;
}

function cMD(c){const imgs=[...c.querySelectorAll('img')].map(i=>({src:i.src,alt:i.alt}));if(!imgs.length)return;c.innerHTML='';
mkCarousel(c,imgs.map(x=>x.src),true,imgs)}

function iG(){
const s=[...document.querySelectorAll('.contenedor-imagenes-animado:not([data-gi])')],
g=[...document.querySelectorAll('.grid-gallery:not([data-gi])')],
m=[...document.querySelectorAll('.galeriaMD:not([data-gi])')];
if(!s.length&&!g.length&&!m.length)return;
s.forEach(c=>{c.dataset.gi=1;VG1(c);decorate(c);c.__ld=()=>pCont(c,true);IO.observe(c);_observed.add(c)});
g.forEach(c=>{c.dataset.gi=1;c.__ld=()=>pCont(c,false);IO.observe(c);_observed.add(c)});
if(g.some(c=>c.dataset.title!==''))BR1();
m.forEach(c=>{c.dataset.gi=1;decorate(c);c.__ld=()=>cMD(c);IO.observe(c);_observed.add(c)});
}

document.addEventListener('contentLoaded',()=>{
_observed.forEach(c=>{
if(!c.isConnected&&c.getRootNode().nodeType!==11){
if(c.__stop){c.__stop();c.__stop=null}
IO.unobserve(c);_observed.delete(c)
}});
iG()});
iG()}();