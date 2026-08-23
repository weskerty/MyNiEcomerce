!function(){if(window.__GI)return;window.__GI=true;
document.addEventListener('contextmenu',ev=>{
  if(ev.target.closest('.gallery-item,.gi-track,.gi-grid-inner,.gi-section,.gi-hd-flat,.BS1'))ev.preventDefault();
});
const DJ='web/Dinamico/data.json',JC={},IDX={},ITEM=150,GAP=8,STRIDE=ITEM+GAP,PAGE=6,_observed=new Set();
const SP=!!window.__CFG?.showPrice;
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
.gi-track{position:relative;height:${ITEM}px;cursor:grab;overflow:hidden;touch-action:pan-y}
.gi-track:active{cursor:grabbing}
.gi-node{position:absolute;top:0;left:0;width:${ITEM}px;height:${ITEM}px}
.gi-grid-inner{width:100%;overflow:hidden}
.gi-grid-row{display:grid;grid-template-columns:repeat(auto-fill,150px);gap:8px;justify-content:center;margin-bottom:8px}
.gi-pg{display:flex;justify-content:center;gap:12px;margin-top:4px}
.gi-pg button{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:10px;color:white;padding:6px 18px;cursor:pointer;font-size:.85em;transition:background .2s}
.gi-pg button:hover{background:rgba(255,255,255,.22)}
.gi-pg button:disabled{opacity:.3;cursor:default}
@keyframes gi-in{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
.gi-anim{animation:gi-in .25s ease both}
.gi-skeleton{display:flex;flex-direction:column;gap:8px;padding:8px 0}
.gi-sk-item{height:${ITEM}px;border-radius:20px;background:linear-gradient(90deg,rgba(255,255,255,.04) 0%,rgba(255,255,255,.09) 50%,rgba(255,255,255,.04) 100%);background-size:200% 100%;animation:gi-shimmer 1.4s infinite}
@keyframes gi-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
.gallery-item{position:relative;display:block;width:${ITEM}px;height:${ITEM}px;flex-shrink:0;box-sizing:border-box;background:linear-gradient(135deg,rgba(255,255,255,.25) 0%,rgba(255,255,255,.05) 50%,rgba(255,255,255,.15) 100%);border:1px solid rgba(255,255,255,.2);border-bottom:1px solid rgba(255,255,255,.05);border-radius:20px;box-shadow:0 6px 24px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.3),inset 0 -1px 0 rgba(255,255,255,.05);cursor:pointer;overflow:hidden;text-decoration:none;color:white;transition:transform .2s ease,box-shadow .2s ease}
.gallery-item:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 10px 32px rgba(0,0,0,.28);text-decoration:none;color:white}
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
.gi-navtile .mc p{font-weight:600}
.gi-section{position:relative;border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:16px;margin-top:14px}
.gi-section:has(.grid-gallery){padding-left:0;padding-right:0}
.gi-section>a.gi-hd{position:absolute;top:0;left:50%;transform:translate(-50%,-50%);padding:0 14px;margin:0;background:inherit;display:inline-block;white-space:nowrap;text-decoration:none;color:inherit}
.gi-section>a.gi-hd>h2{margin:0;border:none!important;display:inline}
.gi-hd-flat{display:block;text-align:center;text-decoration:none;color:inherit;margin-bottom:8px}
.gi-hd-flat>h2{margin:0;display:inline}`;
document.head.appendChild(_S);
const IO=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){IO.unobserve(x.target);_observed.delete(x.target);x.target.__ld&&x.target.__ld()}})},{rootMargin:'300px'});
let _hidden=false;document.addEventListener('visibilitychange',()=>{_hidden=document.hidden});
function fN(p){return p.split('/').pop().replace(/\.[^.]+$/,'')}
const _CD0=/CD=0(?!\d)/;
function fCD0(idx){
  if(idx._f0)return idx._f0;
  return idx._f0={_all:idx._all.filter(p=>!_CD0.test(p)),f:Object.fromEntries(Object.entries(idx.f).map(([k,v])=>[k,v.filter(p=>!_CD0.test(p))]))};
}
function nN(n){const m=n.match(/NB=([^.]+)/);return m?m[1]:n}
function mL(p){return p.replace(/\.[^.]+$/,'.md')}
const _PC=/PC=(\d+)/;
function fPC(n){const m=n.match(_PC);return m?m[1].replace(/\B(?=(\d{3})+(?!\d))/g,'.')+' Gs':''}
const NAV_NEXT='Siguiente, mostrar mas',NAV_PREV='Anterior, mostrar anteriores';
function mkNavNode(label,emoji){
  const a=document.createElement('div');a.className='gallery-item gi-navtile';
  const ico=document.createElement('div');ico.className='gi-navtile-ico';ico.textContent=emoji;
  const m=document.createElement('div');m.className='mc';
  const pt=document.createElement('p');pt.className='gi-txt';pt.textContent=label;
  m.appendChild(pt);a.appendChild(ico);a.appendChild(m);
  return a;
}
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
  let idx=0,p=0;
  while(idx<total){
    const hasPrev=p>0;
    let slots=ps-(hasPrev?1:0);
    const hasNext=(total-idx)>slots;
    if(hasNext)slots--;
    const count=Math.min(slots,total-idx);
    pages.push({start:idx,end:idx+count,hasPrev,hasNext});
    idx+=count;p++;
  }
  return pages.length?pages:[{start:0,end:0,hasPrev:false,hasNext:false}];
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
    {}
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

function mkCarousel(c,imgs,isMD,altMap){
  const total=imgs.length;if(!total)return;
  const getAlt=i=>altMap?altMap[i%altMap.length]?.alt||null:null;
  const loop=total>=5;
  if(!loop){const row=document.createElement('div');row.style.cssText='display:flex;gap:'+GAP+'px;overflow-x:auto;height:'+ITEM+'px;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch';imgs.forEach((p,i)=>{const a=mkNode(p,isMD?p:null,getAlt(i));if(isMD)a.target='_blank';a.style.scrollSnapAlign='start';row.appendChild(a);});c.appendChild(row);return;}
  const DUR=380,TICK=5000;

  const track=document.createElement('div');track.className='gi-track';c.appendChild(track);

  let vw=c.offsetWidth||320;
  const calcVis=()=>Math.max(1,Math.floor((vw+GAP)/STRIDE));
  let vis=calcVis(),cur=0,busy=false,visibleNow=false;
  const nodes=[],pos=[];
  let timer=null;

  const _wm=new Set();
  function warm(i){
    const s=imgs[((i%total)+total)%total];
    if(!s||_wm.has(s))return;
    _wm.add(s);
    const im=new Image();im.decoding='async';im.src=s;
  }

  function build(){
    track.innerHTML='';nodes.length=0;pos.length=0;
    for(let i=0;i<=vis;i++){
      const w=document.createElement('div');w.className='gi-node';
      const src=imgs[(cur+i)%total];
      const n=mkNode(src,isMD?src:null,getAlt((cur+i)%total),true);
      if(isMD)n.target='_blank';
      w.appendChild(n);
      pos.push(i*STRIDE);
      w.style.transform='translate3d('+(i*STRIDE)+'px,0,0)';
      track.appendChild(w);nodes.push(w);
    }
    warm(cur+vis+1);warm(cur-1);
  }

  function applyTx(dur){
    nodes.forEach((n,i)=>{
      n.style.transition=dur?'transform '+dur+'ms ease':'';
      n.style.transform='translate3d('+pos[i]+'px,0,0)';
    });
  }

  function doAdvance(animated,cb){
    if(busy)return;busy=true;
    const dur=animated?DUR:0;
    for(let i=0;i<=vis;i++)pos[i]-=STRIDE;
    applyTx(dur);
    const finish=()=>{
      nodes.forEach(n=>n.style.transition='');
      const recycled=nodes.shift();pos.shift();
      cur=(cur+1)%total;
      const src=imgs[(cur+vis)%total];
      patchNode(recycled.firstChild,src,isMD?src:null,getAlt((cur+vis)%total));
      recycled.style.transform='translate3d('+(vis*STRIDE)+'px,0,0)';
      nodes.push(recycled);pos.push(vis*STRIDE);
      for(let i=0;i<vis;i++)pos[i]=i*STRIDE;
      warm(cur+vis+1);
      busy=false;if(cb)cb();
    };
    if(dur)nodes[0].addEventListener('transitionend',finish,{once:true});
    else finish();
  }

  function doRetreat(animated,cb){
    if(busy)return;busy=true;
    const dur=animated?DUR:0;
    for(let i=0;i<=vis;i++)pos[i]+=STRIDE;
    applyTx(dur);
    const finish=()=>{
      nodes.forEach(n=>n.style.transition='');
      const recycled=nodes.pop();pos.pop();
      cur=(cur-1+total)%total;
      const src=imgs[cur];
      patchNode(recycled.firstChild,src,isMD?src:null,getAlt(cur));
      recycled.style.transform='translate3d(0px,0,0)';
      nodes.unshift(recycled);pos.unshift(0);
      for(let i=0;i<=vis;i++)pos[i]=i*STRIDE;
      warm(cur-1);
      busy=false;if(cb)cb();
    };
    if(dur)nodes[nodes.length-1].addEventListener('transitionend',finish,{once:true});
    else finish();
  }

  function startTimer(){
    clearTimeout(timer);timer=null;
    if(_hidden||!visibleNow)return;
    timer=setTimeout(()=>doAdvance(true,startTimer),TICK);
  }
  function stopTimer(){clearTimeout(timer);timer=null;}

  const visIO=new IntersectionObserver(([e])=>{
    visibleNow=e.isIntersecting;
    visibleNow?startTimer():stopTimer();
  },{threshold:0});
  visIO.observe(c);

  const FLICK=.25;
  let sxStart=0,syStart=0,sx=0,lastX=0,lastT=0,vx=0,dragging=false,dirLocked=false,pid=null,isMs=false,noClick=false;
  const ac=new AbortController(),sig=ac.signal;

  function endDrag(){
    if(pid!==null){try{track.releasePointerCapture(pid)}catch{}}
    pid=null;dragging=false;dirLocked=false;
  }
  function snapBack(){
    nodes.forEach((n,i)=>{n.style.transition='transform '+DUR+'ms ease';n.style.transform='translate3d('+pos[i]+'px,0,0)';});
    setTimeout(startTimer,DUR);
  }

  function onDown(e){
    if(busy||pid!==null)return;
    if(e.pointerType==='mouse'&&e.button!==0)return;
    pid=e.pointerId;isMs=e.pointerType==='mouse';noClick=false;
    sx=sxStart=lastX=e.clientX;syStart=e.clientY;lastT=e.timeStamp;vx=0;
    stopTimer();
    nodes.forEach(n=>n.style.transition='');
  }
  function onMove(e){
    if(e.pointerId!==pid)return;
    const x=e.clientX;
    if(!dirLocked){
      const dx=Math.abs(x-sxStart),dy=Math.abs(e.clientY-syStart);
      if(dx<5&&dy<5)return;
      dirLocked=true;
      if(!isMs&&dx<=dy*1.5){endDrag();startTimer();return;}
      dragging=true;noClick=true;
      try{track.setPointerCapture(pid)}catch{}
    }
    if(!dragging)return;
    const dt=e.timeStamp-lastT;
    if(dt>0){const iv=(x-lastX)/dt;vx=vx?vx*.6+iv*.4:iv}
    lastX=x;lastT=e.timeStamp;sx=x;
    const delta=x-sxStart;
    if(Math.abs(delta)>STRIDE/3){
      dragging=false;
      delta<0?doAdvance(true,startTimer):doRetreat(true,startTimer);
      return;
    }
    nodes.forEach((n,i)=>n.style.transform='translate3d('+(pos[i]+delta)+'px,0,0)');
  }
  function onUp(e){
    if(e.pointerId!==pid)return;
    const was=dragging,delta=sx-sxStart;
    endDrag();
    if(!was){startTimer();return;}
    if(delta<-STRIDE/3||vx<-FLICK)doAdvance(true,startTimer);
    else if(delta>STRIDE/3||vx>FLICK)doRetreat(true,startTimer);
    else snapBack();
  }
  function onCancel(e){
    if(e.pointerId!==pid)return;
    const was=dragging;
    endDrag();
    was?snapBack():startTimer();
  }

  document.addEventListener('visibilitychange',()=>{
    if(document.hidden)stopTimer();else if(visibleNow)startTimer();
  },{signal:sig});

  const ro=new ResizeObserver(()=>_ric(()=>{
    vw=c.offsetWidth||320;const nv=calcVis();
    if(nv===vis)return;
    vis=nv;stopTimer();build();
    if(visibleNow)startTimer();
  }));
  ro.observe(c);

  track.addEventListener('click',e=>{if(noClick){noClick=false;e.preventDefault();e.stopPropagation();}},{capture:true,signal:sig});
  track.addEventListener('pointerdown',onDown,{signal:sig});
  track.addEventListener('pointermove',onMove,{signal:sig});
  track.addEventListener('pointerup',onUp,{signal:sig});
  track.addEventListener('pointercancel',onCancel,{signal:sig});

  build();

  c.__stop=()=>{
    stopTimer();ro.disconnect();visIO.disconnect();ac.abort();
    track.innerHTML='';nodes.length=0;pos.length=0;
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
      const wasActive=active===name;
      active=wasActive?null:name;
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
  const row=document.createElement('div');row.className='gi-grid-row';inner.appendChild(row);
  let nav=null,pg=0,pageSize=PAGE,pages=buildPages(imgs,pageSize);
  function applyPageSize(n){
    if(n===pageSize)return;
    pageSize=n;pg=0;pages=buildPages(imgs,pageSize);renderPage(0,false);
  }
  let ro=null,destroyed=false,pending=false;
  function stop(){destroyed=true;if(ro){ro.disconnect();ro=null}}
  if(!document.body.classList.contains('low-perf')){
    loadGF().then(gf=>{
      if(!gf||destroyed)return;
      const scheduleCompute=()=>{
        if(pending)return;pending=true;
        _ric(()=>{pending=false;if(destroyed)return;
          applyPageSize(gf.itemsPerPage(c,ITEM,ITEM,GAP,60));
        });
      };
      scheduleCompute();
      ro=new ResizeObserver(scheduleCompute);
      ro.observe(c);
    });
  }
  function ensureKind(slot,kind,makeFn){
    let el=row.children[slot];
    if(!el){el=makeFn();el.dataset.kind=kind;row.appendChild(el);return el}
    if(el.dataset.kind!==kind){const ne=makeFn();ne.dataset.kind=kind;row.replaceChild(ne,el);return ne}
    return el;
  }
  function goPrev(ev){if(ev)ev.preventDefault();if(pg>0){pg--;renderPage(pg,true)}}
  function goNext(ev){if(ev)ev.preventDefault();if(pg<pages.length-1){pg++;renderPage(pg,true)}}
  function renderPage(p,scroll){
    const{start,end,hasPrev,hasNext}=pages[p];
    let slot=0;
    if(hasPrev){ensureKind(slot,'prev',()=>mkNavNode(NAV_PREV,'⬅️')).onclick=goPrev;slot++}
    for(let i=start;i<end;i++,slot++){const el=ensureKind(slot,'img',()=>mkNode(imgs[i]));patchNode(el,imgs[i])}
    if(hasNext){ensureKind(slot,'next',()=>mkNavNode(NAV_NEXT,'➡️')).onclick=goNext;slot++}
    while(row.children.length>slot)row.lastChild.remove();
    if(pages.length>1){
      if(!nav){nav=document.createElement('div');nav.className='gi-pg';
        const bP=document.createElement('button');bP.textContent='⬅️ Anterior';
        const bN=document.createElement('button');bN.textContent='Siguiente ➡️';
        bP.onclick=goPrev;bN.onclick=goNext;
        nav.appendChild(bP);nav.appendChild(bN);inner.appendChild(nav)}
      nav.firstChild.disabled=p===0;nav.lastChild.disabled=p===pages.length-1;nav.style.display=''}
    else if(nav)nav.style.display='none';
    inner.classList.remove('gi-anim');void inner.offsetWidth;inner.classList.add('gi-anim');
    if(scroll&&c.scrollIntoView)c.scrollIntoView({behavior:'smooth',block:'start'})}
  renderPage(0,false);
  return{setImgs(ni){imgs=ni;pg=0;pages=buildPages(imgs,pageSize);renderPage(0,false)},stop};
}

function decorate(c){
  if(c.dataset.decorated)return c;
  c.dataset.decorated='1';
  const title=c.dataset.title||c.id.replace(/-gallery$|-grid$/,'');
  const href=c.dataset.href;
  if(!title)return c;
  const sec=document.createElement('div');sec.className='gi-section';
  c.parentNode.insertBefore(sec,c);
  const hd=document.createElement(href?'a':'div');
  hd.className='gi-hd';
  if(href)hd.href=href;
  const h2=document.createElement('h2');h2.textContent=title+' ➡️';
  hd.appendChild(h2);
  sec.appendChild(hd);sec.appendChild(c);
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
if(!document.contains(c)){
if(c.__stop){c.__stop();c.__stop=null}
IO.unobserve(c);_observed.delete(c)
}});
iG()});
loadGU();reqGeo(()=>{});
iG()}();