<div style="text-align:center;position:relative;padding-top:0;margin-top:0">
<style>
._ic{display:block;margin:0 auto 8px}
.sk-wrap{padding:12px;max-width:100%}
.sk-bar{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);border-radius:24px;padding:10px 16px;margin-bottom:14px;position:relative;overflow:hidden;transition:border-color .2s,box-shadow .2s}
.sk-bar:focus-within{border-color:rgba(56,189,248,.4);box-shadow:0 0 0 3px rgba(56,189,248,.08),0 8px 32px rgba(0,0,0,.25)}
.sk-bar input[type=text]{flex:1;background:none;border:none;outline:none;color:white;font-size:.9em;min-width:0;font-family:inherit;position:relative;z-index:1}
.sk-bar input[type=text]::placeholder{color:rgba(255,255,255,.45)}
.sk-home{font-size:1.3rem;text-decoration:none;flex-shrink:0;line-height:1;opacity:.8;transition:opacity .2s,transform .2s;position:relative;z-index:1}
.sk-home:hover{opacity:1;transform:scale(1.15)}
.sk-ib{background:none;border:none;color:white;cursor:pointer;font-size:1.15rem;flex-shrink:0;padding:0 2px;opacity:.7;transition:opacity .2s,transform .2s;line-height:1;position:relative;z-index:1;min-width:1.6em;text-align:center;font-family:inherit}
.sk-ib:hover{opacity:1;transform:scale(1.1)}
.sk-ib:disabled{opacity:.3;cursor:not-allowed;transform:none}
.sk-bar.sk-cd::after{content:'';position:absolute;left:0;top:0;height:100%;width:var(--sk-cd-p,0%);background:rgba(56,189,248,.13);transition:width .1s linear;pointer-events:none;z-index:0}
.gi-pg{display:flex;justify-content:center;align-items:center;gap:12px;margin-top:4px}
.gi-pg button{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:10px;color:white;padding:6px 18px;cursor:pointer;font-size:.85em;transition:background .2s}
.gi-pg button:hover{background:rgba(255,255,255,.22)}
.gi-pg button:disabled{opacity:.3;cursor:default}
.gi-pg span{color:rgba(255,255,255,.55);font-size:.82em}
.sk-msg{text-align:center;color:rgba(255,255,255,.55);font-size:.9em;padding:20px 0;margin:0}
.sk-searching{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 0;gap:8px;width:100%;grid-column:1/-1}
.sk-searching span:first-child{font-size:3.5rem;animation:sk-pulse 1.2s ease-in-out infinite}
.sk-searching span:last-child{color:rgba(255,255,255,.6);font-size:.95em}
@keyframes sk-pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:.7}}
.sk-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:white;padding:10px 22px;border-radius:12px;font-size:.88em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999;white-space:nowrap}
.sk-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.wp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:8px;margin-bottom:8px;min-height:40px}
.wp-it{aspect-ratio:16/9;border-radius:12px;overflow:hidden;cursor:pointer;position:relative;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.15);box-sizing:border-box;transition:transform .15s,border-color .15s}
.wp-it img{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}
.wp-it:hover{transform:scale(1.03);border-color:rgba(56,189,248,.4)}
.wp-attr{position:absolute;bottom:0;left:0;right:0;padding:3px 7px;background:rgba(0,0,0,.62);font-size:.6em;color:rgba(255,255,255,.85);opacity:0;transition:opacity .2s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:left}
.wp-it:hover .wp-attr{opacity:1}
.wp-it.wp-ld{cursor:wait}
.wp-it.wp-ld img{opacity:.5;transition:opacity .2s}
.wp-it.wp-ld::after{content:'⬇';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.8rem;pointer-events:none}
</style>

<img class="_ic" src="web/otros/Archivos/Imagenes/Permanente/ICON.avif" width="90px">

<div class="sk-wrap" id="wp-wrap">
  <div class="sk-bar" id="wp-bar">
    <a class="sk-home" href="web/es.html">🏠</a>
    <input id="wp-q" type="text" placeholder="Buscar wallpapers...">
    <button class="sk-ib" id="wp-btn">🔍</button>
  </div>
  <div id="wp-grid" class="wp-grid"></div>
  <div id="wp-pg" class="gi-pg"></div>
  <p id="wp-st" class="sk-msg"></p>
</div>

<div class="sk-toast" id="wp-toast"></div>

<script>
(function(){
  const CD=10000;
  let R=[],TP=1,pg=1,CQ='',cdEnd=0,cdRaf=null,_sac=null;

  const gEl=document.getElementById('wp-grid');
  const pgEl=document.getElementById('wp-pg');
  const stEl=document.getElementById('wp-st');
  const qEl=document.getElementById('wp-q');
  const tEl=document.getElementById('wp-toast');
  const wrap=document.getElementById('wp-wrap');
  let _tt;

  function toast(m){tEl.textContent=m;tEl.classList.add('show');clearTimeout(_tt);_tt=setTimeout(()=>tEl.classList.remove('show'),2500);}
  function ST(m){if(stEl)stEl.textContent=m;}

  function startCD(){
    cdEnd=Date.now()+CD;
    qEl.readOnly=true;qEl.blur();
    const btn=document.getElementById('wp-btn'),bar=document.getElementById('wp-bar');
    btn.disabled=true;bar.classList.add('sk-cd');
    function tick(){
      const rem=cdEnd-Date.now();
      if(rem<=0){btn.disabled=false;bar.classList.remove('sk-cd');bar.style.removeProperty('--sk-cd-p');btn.textContent='🔍';qEl.readOnly=false;cdRaf=null;return;}
      bar.style.setProperty('--sk-cd-p',((1-rem/CD)*100).toFixed(1)+'%');
      btn.textContent=Math.ceil(rem/1000)+'s';
      cdRaf=requestAnimationFrame(tick);
    }
    cdRaf=requestAnimationFrame(tick);
  }

  function renderPG(){
    pgEl.innerHTML='';
    if(TP<=1)return;
    const bP=document.createElement('button');
    bP.textContent='Anterior';bP.disabled=pg<=1;
    bP.onclick=()=>doSearch(CQ,pg-1);
    const sp=document.createElement('span');
    sp.textContent=pg+' / '+TP;
    const bN=document.createElement('button');
    bN.textContent='Siguiente';bN.disabled=pg>=TP;
    bN.onclick=()=>doSearch(CQ,pg+1);
    pgEl.append(bP,sp,bN);
  }

  function render(items){
    gEl.innerHTML='';ST('');
    if(!items.length){ST('Sin resultados');return;}
    items.forEach(item=>{
      const d=document.createElement('div');d.className='wp-it';
      const img=document.createElement('img');
      img.src=item.thumb;img.alt=item.alt;img.loading='lazy';
      const at=document.createElement('div');at.className='wp-attr';
      const lk=document.createElement('a');
      lk.href=item.userUrl;lk.target='_blank';lk.rel='noopener noreferrer';
      lk.textContent='📷 '+item.user+' · Unsplash';
      lk.style.cssText='color:inherit;text-decoration:none';
      lk.onclick=e=>e.stopPropagation();
      at.appendChild(lk);
      d.append(img,at);
      d.onclick=()=>dlImg(item,d);
      gEl.appendChild(d);
    });
    renderPG();
    wrap.scrollIntoView({behavior:'smooth',block:'start'});
  }

  async function doSearch(q,p){
    if(_sac){_sac.abort();_sac=null;}
    _sac=new AbortController();
    pg=p;CQ=q;ST('');
    gEl.innerHTML='<div class="sk-searching"><span>🖼</span><span>Buscando...</span></div>';
    pgEl.innerHTML='';
    try{
      const r=await fetch('/api/wallpaper?q='+encodeURIComponent(q)+'&page='+p,{signal:_sac.signal});
      if(!r.ok)throw new Error(r.status);
      const d=await r.json();
      R=d.results||[];TP=d.total_pages||1;
      render(R);
    }catch(e){
      if(e.name==='AbortError')return;
      gEl.innerHTML='';ST('Error: '+e.message);
    }
  }

  async function dlImg(item,el){
    if(el.classList.contains('wp-ld'))return;
    el.classList.add('wp-ld');
    fetch('/api/wallpaper?track='+encodeURIComponent(item.dl)).catch(()=>{});
    try{
      const r=await fetch(item.full);
      if(!r.ok)throw new Error(r.status);
      const blob=await r.blob();
      const a=document.createElement('a');
      a.href=URL.createObjectURL(blob);
      a.download='unsplash-'+item.id+'.jpg';
      a.click();
      setTimeout(()=>URL.revokeObjectURL(a.href),15000);
      toast('Descargando...');
    }catch{toast('Error descarga');}
    el.classList.remove('wp-ld');
  }

  function search(){
    if(Date.now()<cdEnd)return;
    const q=qEl.value.trim();if(!q)return;
    startCD();doSearch(q,1);
  }

  document.getElementById('wp-btn').onclick=search;
  qEl.addEventListener('keydown',e=>{if(e.key==='Enter')search();});

  const _el=document.getElementById('content');
  if(_el)_el.addEventListener('contentUnload',()=>{
    if(_sac){_sac.abort();_sac=null;}
    if(cdRaf){cancelAnimationFrame(cdRaf);cdRaf=null;}
  },{once:true});

  doSearch('nature landscape',1);
})();
</script>

<br><br><br>
<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Aplicaciones</a>
</div>
