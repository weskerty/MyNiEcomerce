!function(){if(window.__GI)return;window.__GI=true;
document.addEventListener('contextmenu',ev=>{
  if(ev.target.closest('.gallery-item,.gi-track,.gi-grid-inner,.gi-section,.gi-hd-flat,.BS1'))ev.preventDefault();
});
const DJ='web/Dinamico/data.json',JC={},IDX={},ITEM=150,IH=ITEM,GAP=8,STRIDE=ITEM+GAP,PAGE=6,_observed=new Set();
const SP=!!window.__CFG?.showPrice,CR=Math.max(1,parseInt(window.__CFG?.carouselRows)||1);
let _GU=window.GeoUtils||null,_GUp=null;
function loadGU(){
  if(_GU)return Promise.resolve(_GU);
  if(_GUp)return _GUp;
  _GUp=new Promise(res=>{
    const s=document.createElement('script');
    s.src='web/scripts/Otros/Geo/GeoUtils.js';
    s.onload=()=>{_GU=window.GeoUtils;res(_GU)};
    s.onerror=()=>res(null);
    document.head.appendChild(s);
  });
  return _GUp;
}
const _S=document.createElement('style');
_S.textContent=`
.contenedor-imagenes-animado{width:100%;position:relative;overflow:hidden}
.gi-track{position:relative;height:${IH}px;cursor:grab;overflow:hidden;touch-action:pan-y}
.gi-track:active{cursor:grabbing}
.gi-strip{position:absolute;inset:0}
.gi-node{position:absolute;top:0;left:0;width:${ITEM}px;display:flex;flex-direction:column;gap:${GAP}px}
.gi-grid-inner{width:100%;overflow:hidden}
.gi-gv{position:relative;touch-action:pan-y}
.gi-gh{position:absolute;top:0;left:0;right:0}
.gi-grid-row{display:grid;grid-template-columns:repeat(auto-fill,${ITEM}px);gap:${GAP}px;justify-content:center;margin-bottom:${GAP}px}
.gi-skeleton{display:flex;flex-direction:column;gap:8px;padding:8px 0}
.gi-sk-item{height:${IH}px;border-radius:20px;background:linear-gradient(90deg,rgba(255,255,255,.04) 0%,rgba(255,255,255,.09) 50%,rgba(255,255,255,.04) 100%);background-size:200% 100%;animation:gi-shimmer 1.4s infinite}
@keyframes gi-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
.gallery-item{position:relative;display:block;width:${ITEM}px;height:${IH}px;flex-shrink:0;box-sizing:border-box;--GL_PF:linear-gradient(135deg,rgba(255,255,255,.25) 0%,rgba(255,255,255,.05) 50%,rgba(255,255,255,.15) 100%);background:var(--GL_PF);border:1px solid rgba(255,255,255,.2);border-bottom:1px solid rgba(255,255,255,.05);border-radius:20px;box-shadow:0 6px 24px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.3),inset 0 -1px 0 rgba(255,255,255,.05);cursor:pointer;overflow:hidden;text-decoration:none;color:white;transition:box-shadow .2s ease}
.gallery-item:hover{box-shadow:0 10px 32px rgba(0,0,0,.28);text-decoration:none;color:white}
.gallery-item::after{content:'';position:absolute;inset:0;z-index:2;background:var(--glass-sweep);transform:translateX(-120%);transition:.6s;pointer-events:none}
.gallery-item:hover::after{transform:translateX(120%)}
@media(prefers-reduced-motion:reduce){.gallery-item::after{display:none}}
body.low-perf .gallery-item::after{display:none}
.gallery-item img{position:absolute;inset:0;width:100%;height:100%;object-fit:fill}
.gallery-item .mc{position:absolute;left:0;right:0;bottom:0;padding:16px 7px 8px;box-sizing:border-box;pointer-events:none;background:linear-gradient(0deg,rgba(0,0,0,.85) 0%,rgba(0,0,0,.55) 55%,transparent 100%)}
.gallery-item .mc p{margin:0;font-size:.78em;color:white;line-height:1.2;text-align:center;word-break:break-word;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-shadow:0 1px 4px rgba(0,0,0,.7)}
.gi-pc{position:absolute;top:6px;right:6px;max-width:calc(100% - 12px);padding:2px 7px;border-radius:11px;background:rgba(0,0,0,.62);border:1px solid rgba(255,255,255,.16);font-size:.62rem;font-weight:600;line-height:1.55;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none}
.gi-txt{font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif!important}
.gi-navtile-ico{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding-bottom:22px;box-sizing:border-box;font-size:44px;line-height:1;background:rgba(255,255,255,.05)}
.gi-section{position:relative;border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:16px;margin-top:14px}
.gi-section:has(.grid-gallery){padding-left:0;padding-right:0}
.gi-section>a.gi-hd{position:absolute;top:0;left:50%;transform:translate(-50%,-50%);padding:0 14px;margin:0;background:inherit;display:inline-block;white-space:nowrap;text-decoration:none;color:inherit}
.gi-section>a.gi-hd>h2,.gi-hd-flat>h2{margin:0;border:none!important;padding:0;display:inline;color:#fff;-webkit-mask:none;mask:none}
.gi-hd-flat{display:block;text-align:center;text-decoration:none;color:inherit;margin-bottom:8px}
.BS1 .BS2.GL_C{translate:0 calc(1px*var(--GL_M));scale:calc(1 - .015*var(--GL_M));box-shadow:inset 0 3px 8px rgba(0,0,0,.4),var(--GL_IN)}`;
document.head.appendChild(_S);
const IO=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){IO.unobserve(x.target);x.target.__ld&&x.target.__ld()}})},{rootMargin:'300px'});
let _hidden=false;document.addEventListener('visibilitychange',()=>{_hidden=document.hidden});
function fN(p){return p.split('/').pop().replace(/\.[^.]+$/,'')}
const _CD0=/CD=0(?!\d)/;
function fCD0(idx){
  if(idx._f0)return idx._f0;
  return idx._f0={_all:idx._all.filter(p=>!_CD0.test(p)),f:Object.fromEntries(Object.entries(idx.f).map(([k,v])=>[k,v.filter(p=>!_CD0.test(p))]))};
}
function nN(n){const m=n.match(/NB=([^.]+)/);return m?m[1]:n}
function mL(p){return p.replace(/\.[^.]+$/,'.html')}
const _PC=/PC=(\d+)/;
function fPC(n){const m=n.match(_PC);return m?m[1].replace(/\B(?=(\d{3})+(?!\d))/g,'.')+' Gs':''}
let _GF=window.GridFit||null,_GFp=null;
function loadGF(){
  if(_GF)return Promise.resolve(_GF);
  if(_GFp)return _GFp;
  _GFp=new Promise(res=>{
    const s=document.createElement('script');
    s.src='web/scripts/Otros/GridFit.js';
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
  if(!x._pc){const s=document.createElement('span');s.className='gi-pc gi-txt';x.appendChild(s);x._pc=s}
  x._pc.textContent=v;
}
function mkNode(p,h,a,eg){const t=a||nN(fN(p)),x=document.createElement('a');x.href=h||mL(p);x.className='gallery-item';const i=document.createElement('img');i.alt=t;i.decoding='async';i.loading=eg?'eager':'lazy';i.src=p;const m=document.createElement('div');m.className='mc';const pt=document.createElement('p');pt.className='gi-txt';pt.textContent=t;m.appendChild(pt);x.appendChild(i);x.appendChild(m);x._img=i;x._p=pt;x._src=p;x._raw=!!h;if(SP)sPC(x,p);return x}
function patchNode(a,p,h,t){if(a._src===p)return;const raw=!!h,s=t||nN(fN(p));a.href=raw?p:mL(p);a._p.textContent=s;a._img.src=p;a._img.alt=s;a._src=p;a._raw=raw;if(SP)sPC(a,p)}
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
  JC[j+'_p']=fetch(j).then(r=>r.json()).then(d=>{
    JC[j]=d.galleries;
    IDX[j]=bIdx(JC[j]||{});
    window.__GIDX=IDX;
    (window.__DJ=window.__DJ||{})[j]=JC[j];
    delete JC[j+'_p'];
    if(_geo)sortIdxByCT(IDX[j]);
    return JC[j];
  }).catch(()=>{JC[j]=null;IDX[j]=null;delete JC[j+'_p'];return null});
  return JC[j+'_p'];
}
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
    p=>{
      _geo={lat:p.coords.latitude,lon:p.coords.longitude};
      _geoCbs.forEach(f=>f(_geo));
      _geoCbs=[];
    },
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
  _reRender.forEach(f=>f());
  _reRender.length=0;
}
loadGU().then(()=>reqGeo(sortAllLoaded));

const FL=.25,_wm=new Set();
function wm(s){if(!s||_wm.has(s))return;_wm.add(s);const i=new Image();i.decoding='async';i.src=s}
function DR1(el,sig,o){
  let sx=0,sy=0,lx=0,lt=0,vx=0,dr=false,lk=false,pid=null,ms=false,nc=false;
  const rel=()=>{if(pid!==null){try{el.releasePointerCapture(pid)}catch{}}pid=null;dr=false;lk=false};
  el.addEventListener('click',e=>{if(nc){nc=false;e.preventDefault();e.stopPropagation()}},{capture:true,signal:sig});
  el.addEventListener('pointerdown',e=>{
    if(pid!==null||(e.pointerType==='mouse'&&e.button!==0)||(o.ok&&!o.ok()))return;
    pid=e.pointerId;ms=e.pointerType==='mouse';nc=false;sx=lx=e.clientX;sy=e.clientY;lt=e.timeStamp;vx=0;
    if(o.down)o.down();
  },{signal:sig});
  el.addEventListener('pointermove',e=>{
    if(e.pointerId!==pid)return;
    const x=e.clientX;
    if(!lk){
      const dx=Math.abs(x-sx),dy=Math.abs(e.clientY-sy);
      if(dx<5&&dy<5)return;
      lk=true;
      if(!ms&&dx<=dy*1.5){rel();o.up(false,0);return}
      dr=true;nc=true;try{el.setPointerCapture(pid)}catch{}
      o.lock();
    }
    if(!dr)return;
    const dt=e.timeStamp-lt;
    if(dt>0){const iv=(x-lx)/dt;vx=vx?vx*.6+iv*.4:iv}
    const d=x-lx;lx=x;lt=e.timeStamp;o.move(d);
  },{signal:sig});
  el.addEventListener('pointerup',e=>{if(e.pointerId!==pid)return;const w=dr;if(e.timeStamp-lt>100)vx=0;rel();o.up(w,vx)},{signal:sig});
  el.addEventListener('pointercancel',e=>{if(e.pointerId!==pid)return;const w=dr;rel();o.up(w,0,1)},{signal:sig});
}

function mkCarousel(c,imgs,isMD,altMap){
  const total=imgs.length;if(!total)return;
  const getAlt=i=>altMap?altMap[i%altMap.length]?.alt||null:null;
  const R=isMD?1:Math.max(1,parseInt(c.dataset.rows)||CR),H=R*IH+(R-1)*GAP;
  if(Math.ceil(total/R)<5){const row=document.createElement('div');row.style.cssText='display:grid;grid-auto-flow:column;grid-template-rows:repeat('+R+','+IH+'px);grid-auto-columns:'+ITEM+'px;gap:'+GAP+'px;overflow-x:auto;height:'+H+'px;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch';imgs.forEach((p,i)=>{const a=mkNode(p,isMD?p:null,getAlt(i));if(isMD)a.target='_blank';a.style.scrollSnapAlign='start';row.appendChild(a);});c.appendChild(row);return;}
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
  DR1(track,sig,{
    down(){held=true;stopTimer()},
    lock(){halt();strip.style.willChange='transform'},
    move(d){off+=d;while(off<-STRIDE)sh(true);while(off>STRIDE)sh(false);mv(0)},
    up(w,vx,k){held=false;strip.style.willChange='';if(!w){if(!anim)startTimer();return}go(k?0:off<-STRIDE/3||vx<-FL?1:off>STRIDE/3||vx>FL?-1:0)}
  });

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

function mkSubBtns(c,subcats,onPick){
  const bar=document.createElement('div');bar.className='BS1';
  let active=null;
const _seg=typeof Intl!=='undefined'&&Intl.Segmenter?new Intl.Segmenter('es',{granularity:'grapheme'}):null;
const _emoRe=/\p{Extended_Pictographic}/u;
const _EMO_FALLBACK='📦';
function splitEmoji(name){
  if(!_seg)return{emo:_EMO_FALLBACK,txt:name};
  const g=[..._seg.segment(name)][0]?.segment||'';
  if(g&&_emoRe.test(g))return{emo:g,txt:name.slice(g.length).trim()};
  return{emo:_EMO_FALLBACK,txt:name};
}
  for(const name in subcats){
    if(!subcats[name].length)continue;
    const{emo,txt}=splitEmoji(name);
    const a=document.createElement('a');a.className='BS2';a.href='#';
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
  c.parentNode.insertBefore(bar,c);
  return bar;
}

function mkGrid(c,imgs){
  if(!imgs.length)return;
  const inner=document.createElement('div');inner.className='gi-grid-inner';c.appendChild(inner);
  const view=document.createElement('div');view.className='gi-gv';inner.appendChild(view);
  const mkR=()=>{const r=document.createElement('div');r.className='gi-grid-row';view.appendChild(r);return r};
  let row=mkR(),gh=mkR();gh.classList.add('gi-gh');gh.hidden=true;
  let nav=null,bP=null,bN=null,pg=0,gp=-1,off=0,W=0,anim=false,aT=null,pageSize=PAGE,pages=buildPages(imgs,pageSize);
  function applyPageSize(n){
    if(n===pageSize)return;
    const f=pages[pg]?pages[pg].start:0;
    pageSize=n;pages=buildPages(imgs,pageSize);pg=Math.min(pages.length-1,Math.floor(f/n));renderPage(pg,false);
  }
  let ro=null,destroyed=false,pending=false;
  const ac=new AbortController();
  function stop(){destroyed=true;clearTimeout(aT);ac.abort();if(ro){ro.disconnect();ro=null}}
  loadGF().then(gf=>{
    if(!gf||destroyed)return;
    const scheduleCompute=()=>{
      if(pending)return;pending=true;
      _ric(()=>{pending=false;if(destroyed)return;
        applyPageSize(gf.itemsPerPage(c,ITEM,IH,GAP,120));
      });
    };
    scheduleCompute();
    ro=new ResizeObserver(scheduleCompute);
    ro.observe(c);
  });
  function cell(slot,p){
    let el=row.children[slot];
    if(!el){el=mkNode(p);row.appendChild(el);return el}
    patchNode(el,p);return el;
  }
  function fillG(p){
    if(gp===p)return;gp=p;
    const{start,end}=pages[p];let s=0;
    for(let i=start;i<end;i++,s++){let el=gh.children[s];if(!el){gh.appendChild(mkNode(imgs[i],null,null,true));continue}el._img.loading='eager';patchNode(el,imgs[i])}
    while(gh.children.length>s)gh.lastChild.remove();
  }
  function tx(d){
    const t=(off>0&&pg===0)||(off<0&&pg===pages.length-1)?off/3:off,v=d?'transform '+d+'ms ease':'';
    row.style.transition=gh.style.transition=v;
    row.style.transform='translate3d('+t+'px,0,0)';
    if(!gh.hidden)gh.style.transform='translate3d('+(t+(gp>pg?W:-W))+'px,0,0)';
  }
  const lp=()=>document.body.classList.contains('low-perf');
  DR1(view,ac.signal,{
    ok:()=>!anim&&pages.length>1,
    lock(){W=view.offsetWidth+GAP;off=0;row.classList.remove('AN1');gh.classList.remove('AN1')},
    move(d){
      off+=d;if(lp())return;
      const n=off<0?pg+1:pg-1;
      if(n>=0&&n<pages.length){fillG(n);gh.hidden=false}else gh.hidden=true;
      tx(0);
    },
    up(w,vx,k){
      if(!w)return;
      const n=k?0:(off<-W/3||vx<-FL)&&pg<pages.length-1?1:(off>W/3||vx>FL)&&pg>0?-1:0;
      if(lp()){off=0;if(n)n>0?goNext():goPrev();return}
      if(n&&gp!==pg+n){fillG(pg+n);gh.hidden=false}
      anim=true;off=-n*W;tx(250);
      aT=setTimeout(()=>{
        anim=false;
        if(n){const t=row;row=gh;gh=t;row.classList.remove('gi-gh');gh.classList.add('gi-gh');gp=pg;pg+=n;renderPage(pg,c.getBoundingClientRect().top<0,0,1)}
        off=0;gh.hidden=true;tx(0);
      },270);
    }
  });
  function goPrev(ev){if(ev)ev.preventDefault();if(pg>0){pg--;renderPage(pg,true,-1)}}
  function goNext(ev){if(ev)ev.preventDefault();if(pg<pages.length-1){pg++;renderPage(pg,true,1)}}
  function jump(n){if(n!==pg){const d=n>pg?1:-1;pg=n;renderPage(pg,true,d)}}
  function mkB(t,l,f){const b=document.createElement('button');b.textContent=t;b.setAttribute('aria-label',l);b.onclick=f;return b}
  function renderPage(p,scroll,dir,sw){
    const{start,end}=pages[p];
    let slot=0;
    for(let i=start;i<end;i++,slot++)cell(slot,imgs[i]);
    while(row.children.length>slot)row.lastChild.remove();
    if(pages.length>1){
      if(!nav){nav=document.createElement('nav');nav.className='PG1 PG2';nav.setAttribute('aria-label','Paginas');
        bP=mkB('◀️','Anterior',goPrev);bN=mkB('▶️','Siguiente',goNext);nav.append(bP,bN);inner.appendChild(nav)}
      const k=Math.min(pages.length,c.offsetWidth<480?5:7),s=Math.max(0,Math.min(p-(k>>1),pages.length-k));
      while(nav.children.length-2>k)nav.children[1].remove();
      while(nav.children.length-2<k){const b=mkB('','',()=>jump(+b.dataset.p));nav.insertBefore(b,bN)}
      for(let i=0;i<k;i++){const b=nav.children[i+1],n=s+i;b.textContent=n+1;b.dataset.p=n;b.setAttribute('aria-label','Pagina '+(n+1));n===p?b.setAttribute('aria-current','page'):b.removeAttribute('aria-current')}
      bP.disabled=p===0;bN.disabled=p===pages.length-1;nav.style.display=''}
    else if(nav)nav.style.display='none';
    if(!sw){
      gp=-1;
      row.style.setProperty('--d',dir?(dir>0?'24px':'-24px'):'0px');
      row.classList.remove('AN1');void row.offsetWidth;row.classList.add('AN1');
    }
    const q=pages[p+1];
    if(q)_ric(()=>{for(let i=q.start;i<q.end;i++)wm(imgs[i])});
    if(scroll&&c.scrollIntoView)c.scrollIntoView({behavior:'smooth',block:'start'})}
  renderPage(0,false);
  return{setImgs(ni){imgs=ni;pg=0;pages=buildPages(imgs,pageSize);renderPage(0,false)},stop};
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
  const h2=document.createElement('h2');h2.textContent=title+' ➡️';
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
  const ac=new AbortController();c.__fetchAC=ac;
  const j=c.dataset.jsonPath||DJ,k=c.dataset.galleryKey,fFixed=c.dataset.pathFilter,key=k||c.id.replace(/-gallery|-grid/g,'');
  const needsWait=JC[j]===undefined;
  if(needsWait){
    showGISkeleton(c);
    await new Promise(res=>paintThen(res));
    if(ac.signal.aborted)return;
  }
  await lGD(j);
  if(ac.signal.aborted)return;c.__fetchAC=null;
  if(!IDX[j]){c.innerHTML='<p>Error</p>';return}
  const idxRaw=IDX[j][key]||{_all:[],f:{}};
  const fRaw=()=>fCD0(idxRaw);
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
    if(isSw){mkCarousel(c,imgs);return}
    const grid=mkGrid(c,imgs);
    if(grid){
      c.__stop=grid.stop;
      if(!_geo){
        const cb=()=>{const r=fRaw();grid.setImgs(fFixed?(r.f[fFixed]||[]):r._all)};
        _reRender.push(cb);
        const prevStop=c.__stop;
        c.__stop=()=>{const i=_reRender.indexOf(cb);if(i>-1)_reRender.splice(i,1);if(prevStop)prevStop()};
      }
    }
    return;
  }
  decorateFlat(c);
  c.innerHTML='';
  const grid=mkGrid(c,idx._all);
  if(!grid)return;
  let curName=null;
  c.__stop=grid.stop;
  if(!_geo){
    const cb=()=>{const r=fRaw();grid.setImgs(curName?r.f[curName]:r._all)};
    _reRender.push(cb);
    const prevStop=c.__stop;
    c.__stop=()=>{const i=_reRender.indexOf(cb);if(i>-1)_reRender.splice(i,1);if(prevStop)prevStop()};
  }
  const bar=mkSubBtns(c,idx.f,name=>{
    curName=name;
    const r=fRaw();
    if(c._h2)c._h2.textContent=name||c._baseTitle;
    grid.setImgs(name?r.f[name]:r._all);
  });
  c._subBar=bar;
}

function cMD(c){const imgs=[...c.querySelectorAll('img')].map(i=>({src:i.src,alt:i.alt}));if(!imgs.length)return;c.innerHTML='';
mkCarousel(c,imgs.map(x=>x.src),true,imgs)}

let iGR=false;
async function iG(){if(iGR)return;iGR=true;
try{
const s=[...document.querySelectorAll('.contenedor-imagenes-animado:not([data-gi])')],
g=[...document.querySelectorAll('.grid-gallery:not([data-gi])')],
m=[...document.querySelectorAll('.galeriaMD:not([data-gi])')];
if(!s.length&&!g.length&&!m.length)return;
s.forEach(c=>{c.dataset.gi=1;decorate(c);c.__ld=()=>pCont(c,true);IO.observe(c);_observed.add(c)});
g.forEach(c=>{c.dataset.gi=1;c.__ld=()=>pCont(c,false);IO.observe(c);_observed.add(c)});
m.forEach(c=>{c.dataset.gi=1;decorate(c);c.__ld=()=>cMD(c);IO.observe(c);_observed.add(c)});
}finally{iGR=false}}

document.addEventListener('contentLoaded',()=>{
_observed.forEach(c=>{
if(!c.isConnected&&c.getRootNode().nodeType!==11){
if(c.__stop){c.__stop();c.__stop=null}
IO.unobserve(c);_observed.delete(c)
}});
iG()});
loadGU();reqGeo(()=>{});
iG()}();