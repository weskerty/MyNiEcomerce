<div style="text-align:center;position:relative;padding-top:0;margin-top:0">
<style>
._ic{display:block;margin:0 auto 8px}
#DL_ST{margin:12px auto;max-width:300px;font-size:.9rem;opacity:.85}
.INS_B{display:flex;flex-direction:column;gap:6px;margin:12px auto;max-width:280px;text-align:left;font-size:.85rem}
.app-btn{margin:10px auto 0;padding:8px 18px;border-radius:20px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:rgba(255,255,255,.85);font-size:.78rem;cursor:pointer;transition:background .2s,transform .15s}
.app-btn:hover{background:rgba(255,255,255,.16);transform:translateY(-1px)}
</style>

<img class="_ic" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down.png" width="90px">

<div id="DL_INS">
  <p>Instala la app y comparte.</p>
  <div class="INS_B">
  </div>
  <button id="PI" class="app-btn" style="display:none">📲 Instalar App 💕</button>
  <div style="display:flex;justify-content:center;margin-top:12px">
    <img src="web/otros/Archivos/Imagenes/Permanente/Install.md/UnInstall.avif"
    style="width:320px;height:120px;object-fit:cover;border-radius:12px">
  </div>
</div>

<div id="DL_ST"></div>

<script>
(function(){
  const _ac=new AbortController();
  document.getElementById('content').addEventListener('contentUnload',()=>_ac.abort(),{once:true});

  const SA=window.matchMedia('(display-mode: standalone)').matches||!!navigator.standalone;
  if(SA) document.getElementById('DL_INS').style.display='none';

  function ST(msg){const e=document.getElementById('DL_ST');if(e)e.textContent=msg;}

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
      ST('Procesando...');
      const res=await fetch('/api/dla',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({url:val}),
        signal:_ac.signal
      });
      if(res.status===413){ST((await res.json().catch(()=>({}))).error||'Archivo muy pesado');return;}
      if(!res.ok){ST('Error al descargar');return;}
      const cd=res.headers.get('content-disposition')||'';
      const fn=cd.match(/filename="?([^";\n]+)"?/)?.[1]||('media_'+Date.now());
      const blob=await res.blob();
      const a=document.createElement('a');
      a.href=URL.createObjectURL(blob);
      a.download=decodeURIComponent(fn);
      a.click();
      setTimeout(()=>URL.revokeObjectURL(a.href),15000);
      ST('Listo');
    }catch(e){if(e.name!=='AbortError')ST('Error al descargar');}
  })();
})();
</script>

<br><br><br>
<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Aplicaciones</a>
</div>
