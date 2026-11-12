!function(){
const S=window.__CFG&&window.__CFG.disqus,C=document.getElementById('disqus-container');
if(!S||!C||window.__DQ)return;window.__DQ=1;
const DQ_G='Che Agana 😻 Tienda Facil';
let cur=null,ld=0;
function DQ_K(){
  let r=window.__RUTA||'';try{r=decodeURIComponent(r)}catch(e){}
  const m=r.split('/').pop().replace(/\.[^.]+$/,'').normalize('NFC').match(/ID=(.*?)(?=-[A-Z]{2}=|$)/),id=m&&m[1].replace(/[^A-Za-z0-9_]/g,'');
  return id?{i:'ID='+id,u:location.origin+'/A/'+id}:{i:DQ_G,u:location.origin+'/'};
}
function DQ_L(){
  if(ld)return;ld=1;
  const d=document.createElement('div');d.id='disqus_thread';C.appendChild(d);
  window.disqus_config=function(){cur=DQ_K();this.page.identifier=cur.i;this.page.url=cur.u};
  const s=document.createElement('script');s.src=`https://${S}.disqus.com/embed.js`;s.setAttribute('data-timestamp',+new Date);document.body.appendChild(s);
}
function DQ_S(){
  if(!cur||!window.DISQUS)return;
  const k=DQ_K();if(k.i===cur.i)return;cur=k;
  window.DISQUS.reset({reload:!0,config:function(){this.page.identifier=k.i;this.page.url=k.u}});
}
const IO=new IntersectionObserver(e=>{if(e[0].isIntersecting){IO.disconnect();DQ_L()}},{rootMargin:'300px'});
IO.observe(C);
document.addEventListener('contentLoaded',DQ_S);
}();
