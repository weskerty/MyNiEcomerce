<div style="text-align:center;position:relative;padding-top:0;margin-top:0">
<style>
._ic{display:block;margin:0 auto 8px}
#DLA_APP{padding:8px 12px;max-width:600px;margin:0 auto}
.da-bar{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);border-radius:24px;padding:10px 16px;margin-bottom:14px;transition:border-color .2s,box-shadow .2s}
.da-bar:focus-within{border-color:rgba(56,189,248,.4);box-shadow:0 0 0 3px rgba(56,189,248,.08)}
.da-bar input{flex:1;background:none;border:none;outline:none;color:white;font-size:.9em;min-width:0;font-family:inherit}
.da-bar input::placeholder{color:rgba(255,255,255,.45)}
.da-ib{background:none;border:none;color:white;cursor:pointer;font-size:1.15rem;flex-shrink:0;padding:0 2px;opacity:.7;transition:opacity .2s,transform .2s;line-height:1}
.da-ib:hover{opacity:1;transform:scale(1.1)}
.da-grp+.da-grp{border-top:1px solid rgba(255,255,255,.1);margin-top:10px;padding-top:10px}
.da-item{display:flex;align-items:center;gap:10px;padding:10px;border-radius:14px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);margin-bottom:8px;box-shadow:0 2px 8px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.06);transition:background .15s}
.da-item:last-child{margin-bottom:0}
.da-item:hover{background:rgba(255,255,255,.12)}
.da-thumb{width:56px;height:56px;border-radius:8px;object-fit:cover;flex-shrink:0;background:rgba(255,255,255,.05)}
.da-info{flex:1;min-width:0;text-align:left}
.da-title{font-size:.88em;color:rgba(255,255,255,.92);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:2px}
.da-meta{font-size:.75em;color:rgba(255,255,255,.45)}
.da-acts{display:flex;gap:6px;flex-shrink:0}
.da-ab{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.15);border-radius:8px;color:white;cursor:pointer;font-size:1.1em;padding:5px 8px;transition:background .15s,border-color .15s;line-height:1}
.da-ab:hover{background:rgba(255,255,255,.18);border-color:rgba(255,255,255,.3)}
.dl-ov{display:none;position:fixed;inset:0;z-index:200;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);background:rgba(0,0,0,.5);align-items:center;justify-content:center;flex-direction:column;gap:10px}
.dl-ov.open{display:flex}
.dl-ov span:first-child{font-size:3rem;animation:dl-pulse 1.2s ease-in-out infinite}
.dl-ov span:last-child{color:rgba(255,255,255,.8);font-size:.95em}
@keyframes dl-pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:.7}}
#DL_ST{margin:10px auto;max-width:300px;font-size:.9rem;opacity:.85;min-height:1.2em}
.da-searching{display:flex;flex-direction:column;align-items:center;padding:32px 0;gap:8px}
.da-searching span:first-child{font-size:3rem}
.da-searching span:last-child{color:rgba(255,255,255,.6);font-size:.9em}
.da-msg{color:rgba(255,255,255,.5);font-size:.88em;padding:20px 0;margin:0}
</style>

<div id="DLA_APP" style="display:none">
  <div class="da-bar">
    <input id="DLA_IN" type="text" placeholder="">
    <button class="da-ib" id="DLA_SB">🔍</button>
  </div>
  <div id="DL_ST"></div>
  <div id="DLA_RES"></div>
</div>

<div class="dl-ov" id="dl-ov">
  <span id="dl-ovck">🕐</span>
  <span>Espera, Generando con IA...</span>
</div>

<script>
(function(){
  const SA=window.matchMedia('(display-mode: standalone)').matches||!!navigator.standalone;
  const NP='Notification' in window&&Notification.permission==='granted';
  if(!SA||!NP){
  document.querySelector('a.back-button').href='web/otros/Archivos/MarkDowns/Install.md';
  document.querySelector('a.back-button').click();
  return;
}

  document.getElementById('DLA_APP').style.display='';

  const CK=['🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛'];
  let _oviv=null,_ovck=0;
  const ovEl=document.getElementById('dl-ov');
  const ovckEl=document.getElementById('dl-ovck');
  const stEl=document.getElementById('DL_ST');
  const resEl=document.getElementById('DLA_RES');
  const inEl=document.getElementById('DLA_IN');

  const _ac=new AbortController();
  document.getElementById('content').addEventListener('contentUnload',()=>{_ac.abort();hideOv();},{once:true});

  function ST(msg){if(stEl)stEl.textContent=msg;}
  function showOv(){ovEl.classList.add('open');_ovck=0;_oviv=setInterval(()=>{ovckEl.textContent=CK[_ovck++%12];},150);}
  function hideOv(){clearInterval(_oviv);_oviv=null;ovEl.classList.remove('open');}

  function fmtDur(s){
    if(!s)return'';
    const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),sc=Math.floor(s%60);
    if(h)return`${h}:${String(m).padStart(2,'0')}:${String(sc).padStart(2,'0')}`;
    return`${m}:${String(sc).padStart(2,'0')}`;
  }

  const _hasBGF='serviceWorker' in navigator&&'BackgroundFetchManager' in self;
  const _bgfWait=new Map();

  if(_hasBGF)navigator.serviceWorker.addEventListener('message',ev=>{
    const d=ev.data;
    if(!d||!_bgfWait.has(d.id))return;
    const{resolve,reject}=_bgfWait.get(d.id);
    _bgfWait.delete(d.id);
    d.type==='DLA_DONE'?resolve():reject();
  });

  async function fetchBlobBG(url,id){
    const reg=await navigator.serviceWorker.ready;
    const bgf=await reg.backgroundFetch.fetch(id,[url],{title:'Descargando media'});
    await new Promise((resolve,reject)=>{_bgfWait.set(id,{resolve,reject});});
    const c=await caches.open('dla-fetch');
    const res=await c.match(url);
    if(!res)throw 0;
    await c.delete(url);
    return await res.blob();
  }

  async function doDownload(url,type){
    ST('');
    showOv();
    try{
      const res=await fetch('/api/dla',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({url,type}),
        signal:_ac.signal
      });
      const j=await res.json().catch(()=>({}));
      if(!res.ok){hideOv();ST(j.error||'Perdon, Error al Generar 😿');return;}
      if(!j.url){hideOv();ST('Perdon, Error al Generar 😿');return;}
      hideOv();ST('Listo ✅');
      try{
        const blob=_hasBGF
          ?await fetchBlobBG(j.url,'dla-'+Date.now())
          :await(async()=>{const br=await fetch(j.url,{signal:_ac.signal});if(!br.ok)throw 0;return br.blob();})();
        const burl=URL.createObjectURL(blob);
        const a=document.createElement('a');
        a.href=burl;a.download=j.filename||'media';a.click();
        setTimeout(()=>URL.revokeObjectURL(burl),15000);
      }catch{window.open(j.url,'_blank');}
    }catch(e){hideOv();if(e.name!=='AbortError')ST('Perdon, Error al Generar 😿');}
  }

  function renderResults(groups){
    resEl.innerHTML='';
    if(!groups.length){resEl.innerHTML='<p class="da-msg">Perdon, Error al Generar 😿</p>';return;}
    groups.forEach(items=>{
      const grp=document.createElement('div');
      grp.className='da-grp';
      items.forEach(item=>{
        const dur=item.duration?fmtDur(item.duration):'';
        const meta=[item.uploader,dur].filter(Boolean).join(' · ');
        const card=document.createElement('div');
        card.className='da-item';
        card.innerHTML=`<img class="da-thumb" src="${item.thumbnail||''}" loading="lazy" onerror="this.style.visibility='hidden'">
<div class="da-info"><div class="da-title">${item.title}</div>${meta?`<div class="da-meta">${meta}</div>`:''}</div>
<div class="da-acts"><button class="da-ab" title="Audio">🎵</button><button class="da-ab" title="Video">🎬</button></div>`;
        card.querySelectorAll('.da-ab')[0].onclick=()=>doDownload(item.url,'audio');
        card.querySelectorAll('.da-ab')[1].onclick=()=>doDownload(item.url,'video');
        grp.appendChild(card);
      });
      resEl.appendChild(grp);
    });
  }

  async function doSearch(q){
    q=q.trim();if(!q)return;
    resEl.innerHTML='<div class="da-searching"><span>🔍</span><span>Generando...</span></div>';
    try{
      const r=await fetch(`/api/dla?q=${encodeURIComponent(q)}`,{signal:_ac.signal});
      const data=await r.json();
      renderResults(Array.isArray(data)?data:[]);
    }catch(e){if(e.name!=='AbortError')resEl.innerHTML='<p class="da-msg">Perdon, Error al Generar 😿</p>';}
  }

  document.getElementById('DLA_SB').onclick=()=>doSearch(inEl.value);
  inEl.addEventListener('keydown',e=>{if(e.key==='Enter')doSearch(inEl.value);});

  (async()=>{
    try{
      const r=await fetch('/_share_pending',{signal:_ac.signal});
      const d=await r.json();
      if(!d)return;
      if(!d.url&&!d.text){if(d.files&&d.files.length)ST('Perdon, Error al Generar 😿');return;}
      await fetch('/_share_clear',{method:'POST',signal:_ac.signal});
      const val=(d.url||d.text).trim();
      await doDownload(val,'video');
    }catch(e){if(e.name!=='AbortError'){}}
  })();
})();
</script>

<br><br><br>
<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Aplicaciones</a>
</div>
