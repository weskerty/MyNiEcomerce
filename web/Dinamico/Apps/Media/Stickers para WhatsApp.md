<div style="text-align:center;">
<style>
._nb{position:absolute;top:0;font-size:1.8rem;text-decoration:none;z-index:10}
._nb.l{left:0}
._nb.r{right:0}
</style>
<a class="_nb l" href="web/blogs.html">🔔</a>
<a class="_nb r" href="web/search.html">🔍</a>
<img src="web/ICON.png" width="90px" />

<style>
.sk-wrap{padding:12px;max-width:100%}
.sk-bar{display:flex;gap:8px;margin-bottom:14px}
.sk-bar input{flex:1;padding:8px 12px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.1);color:white;font-size:.9em;outline:none}
.sk-bar input::placeholder{color:rgba(255,255,255,.45)}
.sk-bar button{padding:8px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.14);color:white;cursor:pointer;font-size:.9em;transition:background .2s}
.sk-bar button:hover{background:rgba(255,255,255,.24)}
.sk-bar button:disabled{opacity:.4;cursor:not-allowed}
.sk-bar button.sk-cd{position:relative;overflow:hidden}
.sk-bar button.sk-cd::after{content:'';position:absolute;left:0;top:0;height:100%;width:var(--sk-cd-p,0%);background:rgba(255,255,255,.08);transition:width .1s linear}
.sk-grid{display:grid;grid-template-columns:repeat(auto-fill,120px);gap:8px;justify-content:center;margin-bottom:8px;min-height:40px}
.sk-it{width:120px;height:120px;border-radius:16px;overflow:hidden;cursor:pointer;position:relative;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.15);box-sizing:border-box;transition:transform .15s,border-color .15s,box-shadow .15s;will-change:transform;flex-shrink:0}
.sk-it img{width:100%;height:100%;object-fit:fill;display:block}
.sk-it:hover{transform:scale(1.05)}
.sk-it.sk-on{border-color:#4ade80;box-shadow:0 0 0 2px #4ade8055}
.sk-it.sk-on::after{content:'✓';position:absolute;top:4px;right:6px;color:#4ade80;font-size:1.1em;font-weight:bold;text-shadow:0 1px 4px rgba(0,0,0,.9)}
.sk-it.sk-max{opacity:.45;cursor:not-allowed}
.sk-it.sk-max:hover{transform:none}
.gi-pg{display:flex;justify-content:center;gap:12px;margin-top:4px}
.gi-pg button{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:10px;color:white;padding:6px 18px;cursor:pointer;font-size:.85em;transition:background .2s}
.gi-pg button:hover{background:rgba(255,255,255,.22)}
.gi-pg button:disabled{opacity:.3;cursor:default}
.sk-foot{display:flex;justify-content:center;margin-top:14px}
.sk-cf{padding:10px 28px;border-radius:12px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.14);color:white;cursor:pointer;font-size:.95em;transition:background .2s}
.sk-cf:hover:not(:disabled){background:rgba(255,255,255,.24)}
.sk-cf:disabled{opacity:.4;cursor:default}
.sk-wa{display:inline-block;padding:10px 28px;border-radius:12px;background:#25d366;color:white;text-decoration:none;font-size:.95em;font-weight:600;transition:background .2s}
.sk-wa:hover{background:#1ebe5d;color:white;text-decoration:none}
.sk-msg{text-align:center;color:rgba(255,255,255,.55);font-size:.9em;padding:20px 0;margin:0}
.sk-searching{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 0;gap:8px;width:100%;grid-column:1/-1}
.sk-searching span:first-child{font-size:3.5rem;animation:sk-pulse 1.2s ease-in-out infinite}
.sk-searching span:last-child{color:rgba(255,255,255,.6);font-size:.95em}
@keyframes sk-pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:.7}}
.sk-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:white;padding:10px 22px;border-radius:12px;font-size:.88em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999;white-space:nowrap}
.sk-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
</style>

<div class="sk-wrap" id="sk-wrap">
  <div class="sk-bar">
    <input id="sk-q" type="text" placeholder="Buscar stickers...">
    <button id="sk-btn">Buscar</button>
  </div>
  <div id="sk-grid" class="sk-grid"></div>
  <div id="sk-pg" class="gi-pg"></div>
  <div class="sk-foot">
    <button id="sk-cf" class="sk-cf" disabled>Confirmar (<span id="sk-n">0</span>)</button>
  </div>
</div>
<div class="sk-toast" id="sk-toast"></div>

<script>
(function(){
  const PG       = 18;
  const MAX_SEL  = 50;
  const CD_MS    = 10000;

  let R=[],S=new Set(),pg=0,cdEnd=0,cdRaf=null;

  const wrapEl = document.getElementById('sk-wrap'),
        gEl    = document.getElementById('sk-grid'),
        pgEl   = document.getElementById('sk-pg'),
        tEl    = document.getElementById('sk-toast');

  let _tt;
  function toast(msg){
    tEl.textContent=msg;
    tEl.classList.add('show');
    clearTimeout(_tt);
    _tt=setTimeout(()=>tEl.classList.remove('show'),2200);
  }

  function getCf(){ return document.getElementById('sk-cf'); }
  function getN(){  return document.getElementById('sk-n');  }
  function getBtn(){ return document.getElementById('sk-btn'); }

  function startCooldown(){
    cdEnd=Date.now()+CD_MS;
    const btn=getBtn();
    btn.disabled=true;
    btn.classList.add('sk-cd');
    function tick(){
      const rem=cdEnd-Date.now();
      if(rem<=0){
        btn.disabled=false;
        btn.classList.remove('sk-cd');
        btn.style.removeProperty('--sk-cd-p');
        btn.textContent='Buscar';
        cdRaf=null;
        return;
      }
      const pct=(1-rem/CD_MS)*100;
      btn.style.setProperty('--sk-cd-p', pct.toFixed(1)+'%');
      btn.textContent=Math.ceil(rem/1000)+'s';
      cdRaf=requestAnimationFrame(tick);
    }
    cdRaf=requestAnimationFrame(tick);
  }

  function reset(){
    R=[];S.clear();pg=0;
    gEl.innerHTML='';
    pgEl.innerHTML='';
    document.getElementById('sk-q').value='';
    document.querySelector('.sk-foot').innerHTML='<button id="sk-cf" class="sk-cf" disabled>Confirmar (<span id="sk-n">0</span>)</button>';
    document.getElementById('sk-cf').onclick=confirm;
  }

  function renderPage(p){
    pg=p;
    const sl=p*PG, chunk=R.slice(sl,sl+PG);
    gEl.innerHTML='';
    chunk.forEach(item=>{
      const url=item.file?.hd?.webp?.url;
      if(!url)return;
      const selected=S.has(url);
      const atMax=!selected&&S.size>=MAX_SEL;
      const d=document.createElement('div');
      d.className='sk-it'+(selected?' sk-on':'')+(atMax?' sk-max':'');
      const img=document.createElement('img');
      img.src=item.blur_preview;
      img.decoding='async';
      if(!atMax||selected){
        const real=new Image();
        real.onload=()=>{img.src=url};
        real.src=url;
      }
      d.appendChild(img);
      if(!atMax||selected){
        d.onclick=()=>{
          const wasOn=S.has(url);
          if(wasOn){
            S.delete(url);
            d.classList.remove('sk-on');
            d.classList.remove('sk-max');
            gEl.querySelectorAll('.sk-it.sk-max').forEach(el=>el.classList.remove('sk-max'));
          } else {
            if(S.size>=MAX_SEL){ toast('Solo '+MAX_SEL+' a la vez'); return; }
            S.add(url);
            d.classList.add('sk-on');
            if(S.size>=MAX_SEL){
              gEl.querySelectorAll('.sk-it:not(.sk-on)').forEach(el=>el.classList.add('sk-max'));
            }
          }
          const n=getN(), cf=getCf();
          if(n)n.textContent=S.size;
          if(cf)cf.disabled=S.size===0;
        };
      }
      gEl.appendChild(d);
    });
    renderPg();
    wrapEl.scrollIntoView({behavior:'smooth',block:'start'});
  }

  function renderPg(){
    pgEl.innerHTML='';
    if(R.length<=PG)return;
    const max=Math.ceil(R.length/PG)-1;
    const bP=document.createElement('button'),bN=document.createElement('button');
    bP.textContent='Anterior';bN.textContent='Siguiente';
    bP.disabled=pg===0;bN.disabled=pg===max;
    bP.onclick=()=>renderPage(pg-1);
    bN.onclick=()=>renderPage(pg+1);
    pgEl.appendChild(bP);pgEl.appendChild(bN);
  }

  async function search(){
    if(Date.now()<cdEnd)return;
    const q=document.getElementById('sk-q').value.trim();
    if(!q)return;
    gEl.innerHTML='<div class="sk-searching"><span>⏳</span><span>Buscando</span></div>';
    pgEl.innerHTML='';R=[];S.clear();pg=0;
    const n=getN(),cf=getCf();
    if(n)n.textContent=0;
    if(cf)cf.disabled=true;
    startCooldown();
    try{
      const res=await fetch('/api/stickers?q='+encodeURIComponent(q));
      const data=await res.json();
      R=data.data?.data||[];
      R.length?renderPage(0):(gEl.innerHTML='<p class="sk-msg">Sin resultados</p>');
    }catch(e){gEl.innerHTML='<p class="sk-msg">Error '+e.message+'</p>';}
  }

  async function confirm(){
    const cf=getCf();
    if(cf){cf.disabled=true;cf.textContent='Procesando...';}
    try{
      const res=await fetch('/api/stickers',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({urls:[...S]})
      });
      const {sid}=await res.json();
      document.querySelector('.sk-foot').innerHTML='<a class="sk-wa" id="sk-wa-btn" href="https://wa.me/595972184435?text=CALS='+sid+'" target="_blank">Agrega los Stickers a WhatsApp</a>';
      document.getElementById('sk-wa-btn').addEventListener('click',()=>setTimeout(reset,300));
    }catch(e){
      const cf2=getCf();
      if(cf2){cf2.innerHTML='Confirmar (<span id="sk-n">'+S.size+'</span>)';cf2.disabled=false;}
    }
  }

  document.getElementById('sk-btn').onclick=search;
  document.getElementById('sk-q').addEventListener('keydown',e=>{if(e.key==='Enter')search();});
  document.getElementById('sk-cf').onclick=confirm;

  const cont=document.getElementById('content');
  if(cont)cont.addEventListener('contentUnload',()=>{
    R=[];S.clear();
    if(cdRaf)cancelAnimationFrame(cdRaf);
  },{once:true});
})();
</script>

</div>


</div>




</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>







<!-- 

<div style="text-align:center;">
<style>
._nb{position:absolute;top:0;font-size:1.8rem;text-decoration:none;z-index:10}
._nb.l{left:0}
._nb.r{right:0}
</style>
<a class="_nb l" href="web/es.html">🏠</a>
<a class="_nb r" href="web/search.html">🔍</a>
<h1>Redireccionando</h1>
<p> </p>
<a href="web/otros/Archivos/HTML/Stickers.html"><p>Si no sucede nada Presiona Aqui ⬅️</p></a>

<a href="web/es.html" class="back-button">← Volver al Inicio</a>




<script>
const a=document.createElement("a");
a.href="web/otros/Archivos/HTML/Stickers.html";
a.style.display="none";
document.body.appendChild(a);
a.click();
a.remove();

// setTimeout(()=>history.back(),1000);

</script> 

--> 