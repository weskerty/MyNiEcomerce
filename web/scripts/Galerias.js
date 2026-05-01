!function(){if(window.__GI)return;window.__GI=true;
const DJ='web/Dinamico/data.json',JC={},ITEM=150,GAP=8,STRIDE=ITEM+GAP,IMG_H=110,TEXT_H=ITEM-IMG_H,PAGE=10,_observed=new Set();
const _S=document.createElement('style');
_S.textContent=`
.contenedor-imagenes-animado{width:100%;position:relative;overflow:hidden}
.gi-track{position:relative;height:${ITEM}px;cursor:grab;overflow:hidden}
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
.gallery-item{display:flex;flex-direction:column;width:${ITEM}px;height:${ITEM}px;flex-shrink:0;box-sizing:border-box;background:linear-gradient(135deg,rgba(255,255,255,.25) 0%,rgba(255,255,255,.05) 50%,rgba(255,255,255,.15) 100%);border:1px solid rgba(255,255,255,.2);border-bottom:1px solid rgba(255,255,255,.05);border-radius:20px;box-shadow:0 6px 24px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.3),inset 0 -1px 0 rgba(255,255,255,.05);cursor:pointer;overflow:hidden;text-decoration:none;color:white;transition:transform .2s ease,box-shadow .2s ease}
.gallery-item:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 10px 32px rgba(0,0,0,.28);text-decoration:none;color:white}
.gallery-item img{width:100%;height:${IMG_H}px;object-fit:fill}
.gallery-item .mc{height:${TEXT_H}px;display:flex;align-items:center;justify-content:center;padding:0 6px;box-sizing:border-box;overflow:hidden}
.gallery-item .mc p{margin:0;font-size:.8em;color:white;line-height:1.2;text-align:center;word-break:break-word;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}`;
document.head.appendChild(_S);
const IO=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){IO.unobserve(x.target);_observed.delete(x.target);x.target.__ld&&x.target.__ld()}})},{rootMargin:'300px'});
let _hidden=false;document.addEventListener('visibilitychange',()=>{_hidden=document.hidden});
function fN(p){return p.split('/').pop().replace(/\.[^.]+$/,'')}
function nN(n){const m=n.match(/NB=([^.]+)/);return m?m[1]:n}
function mL(p){return p.replace(/\.[^.]+$/,'.md')}
function mkNode(p,h,a){const t=a||nN(fN(p)),x=document.createElement('a');x.href=h||mL(p);x.className='gallery-item';const i=document.createElement('img');i.alt=t;i.decoding='async';i.loading='lazy';i.src=p;const m=document.createElement('div');m.className='mc';const pt=document.createElement('p');pt.textContent=t;m.appendChild(pt);x.appendChild(i);x.appendChild(m);x._img=i;x._p=pt;x._src=p;x._raw=!!h;return x}
function patchNode(a,p,t){if(a._src===p)return;const s=t||nN(fN(p));a.href=a._raw?p:mL(p);a._p.textContent=s;a._img.src=p;a._img.alt=s;a._src=p}
async function lGD(j){if(JC[j]!==undefined)return JC[j];if(JC[j+'_p'])return JC[j+'_p'];JC[j+'_p']=fetch(j).then(r=>r.json()).then(d=>{JC[j]=d.galleries;(window.__DJ=window.__DJ||{})[j]=JC[j];delete JC[j+'_p'];return JC[j]}).catch(()=>{JC[j]=null;delete JC[j+'_p'];return null});return JC[j+'_p']}
function rI(g,k,f){const v=g[k];if(!v)return[];if(Array.isArray(v))return f?v.filter(p=>p.includes('/'+f+'/')):v;if(f&&v[f])return v[f];return Object.values(v).flat()}
const _ric=window.requestIdleCallback||(cb=>setTimeout(cb,1));

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

  function build(){
    track.innerHTML='';nodes.length=0;pos.length=0;
    for(let i=0;i<=vis;i++){
      const w=document.createElement('div');w.className='gi-node';
      const n=mkNode(imgs[(cur+i)%total],isMD?imgs[(cur+i)%total]:null,getAlt((cur+i)%total));
      if(isMD)n.target='_blank';
      w.appendChild(n);
      pos.push(i*STRIDE);
      w.style.transform='translate3d('+(i*STRIDE)+'px,0,0)';
      track.appendChild(w);nodes.push(w);
    }
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
      patchNode(recycled.firstChild,imgs[(cur+vis)%total],getAlt((cur+vis)%total));
      recycled.style.transform='translate3d('+(vis*STRIDE)+'px,0,0)';
      nodes.push(recycled);pos.push(vis*STRIDE);
      for(let i=0;i<vis;i++)pos[i]=i*STRIDE;
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
      patchNode(recycled.firstChild,imgs[cur],getAlt(cur));
      recycled.style.transform='translate3d(0px,0,0)';
      nodes.unshift(recycled);pos.unshift(0);
      for(let i=0;i<=vis;i++)pos[i]=i*STRIDE;
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

  let sx=0,sy=0,sxStart=0,dragging=false,dirLocked=false;
  const ac=new AbortController(),sig=ac.signal;

  function onDown(e){
    if(busy)return;
    const x=e.touches?e.touches[0].clientX:e.clientX;
    sx=sxStart=x;
    if(e.touches){sy=e.touches[0].clientY;dirLocked=false;dragging=false;}
    else dragging=true;
    stopTimer();
    nodes.forEach(n=>n.style.transition='');
  }
  function onMove(e){
    if(e.touches&&!dirLocked){
      const dx=Math.abs(e.touches[0].clientX-sxStart),dy=Math.abs(e.touches[0].clientY-sy);
      if(dx<5&&dy<5)return;
      if(dx>dy*1.5){dragging=true;dirLocked=true;}
      else{dragging=false;dirLocked=true;return;}
    }
    if(!dragging)return;
    if(e.cancelable)e.preventDefault();
    const x=e.touches?e.touches[0].clientX:e.clientX;
    const delta=x-sxStart;sx=x;
    if(Math.abs(delta)>STRIDE/3){dragging=false;dirLocked=false;if(delta<0)doAdvance(true,startTimer);else doRetreat(true,startTimer);return;}
    nodes.forEach((n,i)=>n.style.transform='translate3d('+(pos[i]+delta)+'px,0,0)');
  }
  function onUp(){
    if(!dragging){startTimer();return;}
    dragging=false;dirLocked=false;
    const delta=sx-sxStart;
    if(delta<-STRIDE/3)doAdvance(true,startTimer);
    else if(delta>STRIDE/3)doRetreat(true,startTimer);
    else{
      nodes.forEach((n,i)=>{n.style.transition='transform '+DUR+'ms ease';n.style.transform='translate3d('+pos[i]+'px,0,0)';});
      setTimeout(startTimer,DUR);
    }
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

  track.addEventListener('mousedown',onDown,{signal:sig});
  track.addEventListener('mousemove',onMove,{signal:sig});
  track.addEventListener('mouseup',onUp,{signal:sig});
  track.addEventListener('mouseleave',onUp,{signal:sig});
  track.addEventListener('touchstart',onDown,{passive:true,signal:sig});
  track.addEventListener('touchmove',onMove,{passive:false,signal:sig});
  track.addEventListener('touchend',onUp,{passive:true,signal:sig});

  build();

  c.__stop=()=>{
    stopTimer();ro.disconnect();visIO.disconnect();ac.abort();
    track.innerHTML='';nodes.length=0;pos.length=0;
  }
}

function mkGrid(c,imgs){
  const total=imgs.length;if(!total)return;
  const inner=document.createElement('div');inner.className='gi-grid-inner';c.appendChild(inner);
  const row=document.createElement('div');row.className='gi-grid-row';inner.appendChild(row);
  let nav=null,pg=0;
  const maxPg=()=>Math.ceil(total/PAGE)-1;
  function renderPage(p,a){
    const s=p*PAGE,e=Math.min(s+PAGE,total),count=e-s;
    const ch=[...row.children];
    for(let i=0;i<count;i++){if(ch[i])patchNode(ch[i],imgs[s+i]);else row.appendChild(mkNode(imgs[s+i]))}
    while(row.children.length>count)row.lastChild.remove();
    if(total>PAGE){
      if(!nav){nav=document.createElement('div');nav.className='gi-pg';
        const bP=document.createElement('button');bP.textContent='Anterior';
        const bN=document.createElement('button');bN.textContent='Siguiente';
        bP.onclick=()=>{pg--;renderPage(pg,true)};
        bN.onclick=()=>{pg++;renderPage(pg,true)};
        nav.appendChild(bP);nav.appendChild(bN);inner.appendChild(nav)}
      nav.firstChild.disabled=p===0;nav.lastChild.disabled=p===maxPg()}
    if(a){inner.classList.remove('gi-anim');void inner.offsetWidth;inner.classList.add('gi-anim');c.scrollIntoView({behavior:'smooth',block:'start'})}}
  renderPage(0,false)}

async function pCont(c,isSw){
  if(c.__stop){c.__stop();c.__stop=null}
  if(c.__fetchAC){c.__fetchAC.abort()}
  const ac=new AbortController();c.__fetchAC=ac;
  const j=c.dataset.jsonPath||DJ,k=c.dataset.galleryKey,f=c.dataset.pathFilter,key=k||c.id.replace(/-gallery|-grid/g,'');
  const gd=await lGD(j);
  if(ac.signal.aborted)return;c.__fetchAC=null;
  if(!gd){c.innerHTML='<p>Error</p>';return}
  const imgs=rI(gd,key,f);if(!imgs.length){c.innerHTML='';return}
  c.innerHTML='';if(isSw)mkCarousel(c,imgs);else mkGrid(c,imgs)}

function cMD(c){const imgs=[...c.querySelectorAll('img')].map(i=>({src:i.src,alt:i.alt}));if(!imgs.length)return;c.innerHTML='';
mkCarousel(c,imgs.map(x=>x.src),true,imgs)}

let iGR=false;
async function iG(){if(iGR)return;iGR=true;
try{
const s=[...document.querySelectorAll('.contenedor-imagenes-animado:not([data-gi])')],
g=[...document.querySelectorAll('.grid-gallery:not([data-gi])')],
m=[...document.querySelectorAll('.galeriaMD:not([data-gi])')];
if(!s.length&&!g.length&&!m.length)return;
s.forEach(c=>{c.dataset.gi=1;c.__ld=()=>pCont(c,true);IO.observe(c);_observed.add(c)});
g.forEach(c=>{c.dataset.gi=1;c.__ld=()=>pCont(c,false);IO.observe(c);_observed.add(c)});
m.forEach(c=>{c.dataset.gi=1;c.__ld=()=>cMD(c);IO.observe(c);_observed.add(c)});
}finally{iGR=false}}

document.addEventListener('contentLoaded',()=>{
_observed.forEach(c=>{
if(!document.contains(c)){
if(c.__stop){c.__stop();c.__stop=null}
IO.unobserve(c);_observed.delete(c)
}});
iG()});
iG()}();