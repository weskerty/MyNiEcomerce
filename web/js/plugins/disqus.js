!function(){
const S=window.__CFG&&window.__CFG.disqus,C=document.getElementById('disqus-container');
if(!S||!C||window.__DQ)return;window.__DQ=1;
let cur=null,ld=0;
const T=document.createElement('div'),B=document.createElement('button');
T.id='disqus_thread';B.className='RD_B1 DQ_B1';B.textContent='💬 Ver comentarios';C.append(B,T);
function DQ_K(){
  let r=window.__RUTA||'';try{r=decodeURIComponent(r)}catch(e){}
  const m=r.split('/').pop().replace(/\.[^.]+$/,'').normalize('NFC').match(/ID=(.*?)(?=-[A-Z]{2}=|$)/),id=m&&m[1].replace(/[^A-Za-z0-9_]/g,'');
  return id?{i:'ID='+id,u:location.origin+'/A/'+id}:null;
}
function DQ_L(){
  if(ld)return DQ_S();ld=1;
  const k0=DQ_K();
  window.disqus_config=function(){cur=DQ_K()||k0;this.page.identifier=cur.i;this.page.url=cur.u};
  const s=document.createElement('script');s.src=`https://${S}.disqus.com/embed.js`;s.setAttribute('data-timestamp',+new Date);document.body.appendChild(s);
}
function DQ_S(){
  const k=DQ_K();if(!window.DISQUS||!k||k.i===cur?.i)return;cur=k;
  window.DISQUS.reset({reload:!0,config:function(){this.page.identifier=k.i;this.page.url=k.u}});
}
const IO=new IntersectionObserver(e=>{if(e[0].isIntersecting){IO.unobserve(C);DQ_L()}},{rootMargin:'300px'});
function DQ_R(){
  let on=!1;try{on=!!localStorage.getItem('DQ1')}catch(e){}
  const k=DQ_K();IO.unobserve(C);C.hidden=!k;B.hidden=on;T.hidden=!on;
  if(k&&on)IO.observe(C);
}
B.onclick=()=>{try{localStorage.setItem('DQ1','1')}catch(e){}B.hidden=!0;T.hidden=!1;DQ_L()};
DQ_R();
document.addEventListener('contentLoaded',DQ_R);
}();
