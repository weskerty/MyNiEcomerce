<div style="text-align:center;position:relative;padding-top:0;margin-top:0">
<style>
._ic{display:block;margin:0 auto 8px}
#DL_ST{margin:12px auto;max-width:300px;font-size:.9rem;opacity:.85}
.INS_B{display:flex;flex-direction:column;gap:6px;margin:12px auto;max-width:280px;text-align:left;font-size:.85rem}
.app-btn{margin:10px auto 0;padding:8px 18px;border-radius:20px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:rgba(255,255,255,.85);font-size:.78rem;cursor:pointer;transition:background .2s,transform .15s}
.app-btn:hover{background:rgba(255,255,255,.16);transform:translateY(-1px)}
.dl-ov{display:none;position:fixed;inset:0;z-index:200;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);background:rgba(0,0,0,.5);align-items:center;justify-content:center;flex-direction:column;gap:10px}
.dl-ov.open{display:flex}
.dl-ov span:first-child{font-size:3rem;animation:dl-pulse 1.2s ease-in-out infinite}
.dl-ov span:last-child{color:rgba(255,255,255,.8);font-size:.95em}
@keyframes dl-pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:.7}}
</style>

  <h2>Instala la App.</h2>
  <p>Al instalar la App las cosas Cargan mas Rapido y Reduces el consumo de Datos </p>

<div id="DL_INS">
  <img class="_ic" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png" width="90px">

  <div class="INS_B">
  </div>
  <button id="PI" class="app-btn" style="display:none">📲 Instalar App 💕</button>
  <div style="display:flex;justify-content:center;margin-top:12px">
    <img src="web/otros/Archivos/Imagenes/Permanente/Install.md/UnInstall.avif"
    style="width:320px;height:120px;object-fit:cover;border-radius:12px">
  </div>
</div>

<div id="DL_ST"></div>

<div class="dl-ov" id="dl-ov">
  <span id="dl-ovck">🕐</span>
  <span>Descargando...</span>
</div>

<script>
(function(){
  const CK=['🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛'];
  let _oviv=null,_ovck=0;
  const ovEl=document.getElementById('dl-ov');
  const ovckEl=document.getElementById('dl-ovck');

  function ST(msg){const e=document.getElementById('DL_ST');if(e)e.textContent=msg;}
  function showOv(){ovEl.classList.add('open');_ovck=0;_oviv=setInterval(()=>{ovckEl.textContent=CK[_ovck++%12];},150);}
  function hideOv(){clearInterval(_oviv);_oviv=null;ovEl.classList.remove('open');}

  const _ac=new AbortController();
  document.getElementById('content').addEventListener('contentUnload',()=>{_ac.abort();hideOv();},{once:true});

  const SA=window.matchMedia('(display-mode: standalone)').matches||!!navigator.standalone;
  if(SA) document.getElementById('DL_INS').style.display='none';

  if(!SA)return;

  (async()=>{
    try{
      const r=await fetch('/_share_pending',{signal:_ac.signal});
      const d=await r.json();
      if(!d)return;
      if(!d.url&&!d.text){
        if(d.files&&d.files.length)ST('No Media, Solo URL');
        return;
      }
      await fetch('/_share_clear',{method:'POST',signal:_ac.signal});
      const val=(d.url||d.text).trim();
      showOv();
      const res=await fetch('/api/dla',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({url:val}),
        signal:_ac.signal
      });
      if(res.status===413){hideOv();ST((await res.json().catch(()=>({}))).error||'Archivo muy pesado');return;}
      if(!res.ok){hideOv();ST('Error al descargar');return;}
      const cd=res.headers.get('content-disposition')||'';
      const fn=decodeURIComponent(cd.match(/filename="?([^";\n]+)"?/)?.[1]||('media_'+Date.now()));
      const blob=await res.blob();
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a');
      a.href=url;a.download=fn;a.click();
      setTimeout(()=>URL.revokeObjectURL(url),15000);
      hideOv();
      ST('Listo');
      const file=new File([blob],fn,{type:blob.type||'application/octet-stream'});
      if(navigator.canShare&&navigator.canShare({files:[file]})){
        navigator.share({files:[file]}).catch(()=>{});
      }
    }catch(e){hideOv();if(e.name!=='AbortError')ST('Error al descargar');}
  })();
})();
</script>

<br><br><br>
<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Aplicaciones</a>
</div>
