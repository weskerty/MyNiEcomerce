!function(){
const FL=.25,RI=window.requestIdleCallback||(f=>setTimeout(f,1));
const LP=()=>document.body.classList.contains('low-perf');
function DR1(el,sig,o){
  let sx=0,sy=0,lx=0,lt=0,vx=0,dr=false,lk=false,pid=null,ms=false,nc=false;
  const rel=()=>{if(pid!==null){try{el.releasePointerCapture(pid)}catch{}}pid=null;dr=false;lk=false;el.classList.remove('DRG')};
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
      dr=true;nc=true;el.classList.add('DRG');try{el.setPointerCapture(pid)}catch{}
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
function PN1(e,p,n,g,t){
  e.innerHTML='';e.className='PG1 PG2';e.setAttribute('role','navigation');e.setAttribute('aria-label','Paginas');
  if(n<2)return;
  const b=(x,l,i,d)=>{const o=document.createElement('button');o.textContent=x;o.setAttribute('aria-label',l);o.disabled=d;o.onclick=v=>{v.preventDefault();if(i!==p)g(i)};e.appendChild(o);return o};
  const k=Math.min(n,innerWidth<=380?3:innerWidth<=480?5:7),s=Math.max(0,Math.min(p-(k>>1),n-k));
  b('◀️','Anterior',p-1,p<1);
  for(let i=s;i<s+k;i++){const o=b(i+1,'Pagina '+(i+1),i,false);if(i===p)o.setAttribute('aria-current','page')}
  b('▶️','Siguiente',p+1,p>=n-1);
  if(t!==0&&n>k){const m=document.createElement('span');m.textContent='/'+n;e.appendChild(m)}
}
function SW1(el,o){
  let gh=null,gp=-1,off=0,W=0,anim=false;
  const fo=()=>!!o.fill&&!LP();
  el.style.touchAction='pan-y';
  function mk(){
    if(gh&&gh.parentElement===el.parentElement)return;
    const p=el.parentElement;
    if(getComputedStyle(p).position==='static')p.style.position='relative';
    gh=document.createElement(el.tagName);gh.style.cssText='position:absolute;z-index:1;pointer-events:none;visibility:hidden;margin:0';gp=-1;p.appendChild(gh);
  }
  function pos(){gh.style.top=el.offsetTop+'px';gh.style.left=el.offsetLeft+'px';gh.style.width=el.offsetWidth+'px'}
  function fl(i){mk();if(gp===i)return;gp=i;gh.className=el.className.replace(/\bAN1\b/g,'');gh.innerHTML='';o.fill(gh,i)}
  function shw(v){const s=v?'visible':'hidden';if(gh&&gh.style.visibility!==s)gh.style.visibility=s}
  function tx(d){
    const n=o.n(),p=o.p(),t=(off>0&&p===0)||(off<0&&p===n-1)?off/3:off,v=d?'transform '+d+'ms ease':'';
    el.style.transition=v;el.style.transform=t?'translate3d('+t+'px,0,0)':'';
    if(gh&&gh.style.visibility==='visible'){gh.style.transition=v;gh.style.transform='translate3d('+(t+(gp>p?W:-W))+'px,0,0)'}
  }
  const S={pre(){
    gp=-1;if(!fo())return;
    setTimeout(()=>RI(()=>{if(anim)return;const i=o.p()+1;if(i<o.n()&&el.isConnected){fl(i);pos();shw(0);gh.style.transition='';gh.style.transform='translate3d('+(el.offsetWidth+16)+'px,0,0)'}}),700);
  }};
  DR1(el,o.sig,{
    ok:()=>!anim&&o.n()>1&&(!o.ok||o.ok()),
    lock(){W=el.offsetWidth+16;off=0;el.classList.remove('AN1');if(fo()){mk();pos()}},
    move(d){
      off+=d;if(!fo())return;
      const i=off<0?o.p()+1:o.p()-1;
      if(i>=0&&i<o.n()){fl(i);shw(1)}else shw(0);
      tx(0);
    },
    up(w,vx,k){
      if(!w)return;
      const p=o.p(),f=fo(),th=f?W/3:50,n=k?0:(off<-th||vx<-FL)&&p<o.n()-1?1:(off>th||vx>FL)&&p>0?-1:0;
      if(!f){off=0;if(n)o.go(p+n,1);return}
      if(n){fl(p+n);shw(1)}
      anim=true;off=-n*W;tx(250);
      setTimeout(()=>{
        off=0;
        if(!n){anim=false;tx(0);shw(0);return}
        o.go(p+n,1);
        el.style.transition='';el.style.transform='';
        if(el.getBoundingClientRect().top<0)el.scrollIntoView({behavior:'smooth',block:'start'});
        const im=[...el.querySelectorAll('img')].map(i=>i.decode?i.decode().catch(()=>{}):0);
        Promise.race([Promise.all(im),new Promise(r=>setTimeout(r,120))]).then(()=>requestAnimationFrame(()=>{shw(0);anim=false;S.pre()}));
      },270);
    }
  });
  return S;
}
window.GridFit={
  FL,DR1,PN1,SW1,
  itemsPerPage(container,itemW,itemH,gap,reserveBottom){
    const cw=container.offsetWidth||itemW;
    const cols=Math.max(1,Math.floor((cw+gap)/(itemW+gap)));
    const avail=Math.max(itemH,window.innerHeight-(reserveBottom||0));
    const rows=Math.max(2,Math.floor((avail+gap)/(itemH+gap)));
    return cols*Math.min(Math.max(rows,Math.ceil(10/cols)),Math.max(1,Math.floor(20/cols)));
  }
};
}();
