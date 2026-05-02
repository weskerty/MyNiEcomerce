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
.sk-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:white;padding:10px 22px;border-radius:12px;font-size:.88em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999;white-space:nowrap}
.sk-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.dl-spin{display:none;width:48px;height:48px;border:4px solid rgba(255,255,255,.12);border-top-color:rgba(56,189,248,.85);border-radius:50%;animation:dl-r .9s linear infinite;margin:32px auto}
@keyframes dl-r{to{transform:rotate(360deg)}}
</style>

<img class="_ic" src="web/otros/Archivos/Imagenes/Permanente/ICON-ytdlp.avif" width="90px">

<div class="sk-wrap">
  <div class="sk-bar">
    <a class="sk-home" href="web/es.html">🏠</a>
    <input id="dl-q" type="text" placeholder="Enlace o texto...">
    <button class="sk-ib" id="dl-paste">📋</button>
    <button class="sk-ib" id="dl-btn">⬇️</button>
  </div>
  <div class="dl-spin" id="dl-spin"></div>
</div>

<div class="sk-toast" id="dl-toast"></div>

<script>
(function(){
  const qEl=document.getElementById('dl-q'),spin=document.getElementById('dl-spin'),
        toastEl=document.getElementById('dl-toast'),btnEl=document.getElementById('dl-btn'),
        pasteEl=document.getElementById('dl-paste');
  let busy=false,_tt;

  function toast(m,d){toastEl.textContent=m;toastEl.classList.add('show');clearTimeout(_tt);_tt=setTimeout(()=>toastEl.classList.remove('show'),d||2500);}

  function setLoading(v){
    busy=v;spin.style.display=v?'block':'none';
    btnEl.disabled=v;pasteEl.disabled=v;qEl.readOnly=v;
  }

  async function send(val){
    val=(val||qEl.value).trim();
    if(!val){toast('Ingresa un enlace');return;}
    if(busy)return;
    setLoading(true);
    try{
      const res=await fetch('/api/dla',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({url:val})});
      if(!res.ok){
        let msg='Error '+res.status;
        try{const j=await res.json();msg=j.error||msg;}catch{}
        throw new Error(msg);
      }
      const cd=res.headers.get('content-disposition')||'';
      const fname=cd.match(/filename="?([^";\n]+)"?/)?.[1]||('media_'+Date.now());
      const blob=await res.blob();
      const a=document.createElement('a');
      a.href=URL.createObjectURL(blob);a.download=decodeURIComponent(fname);a.click();
      setTimeout(()=>URL.revokeObjectURL(a.href),15000);
      setLoading(false);toast('Listo',3000);qEl.value='';
    }catch(e){setLoading(false);toast(e.message);}
  }

  pasteEl.onclick=async()=>{
    try{const t=await navigator.clipboard.readText();if(t.trim())qEl.value=t.trim();}
    catch{toast('Permiso denegado');}
  };
  btnEl.onclick=()=>send();
  qEl.addEventListener('keydown',e=>{if(e.key==='Enter')send();});

  (async()=>{
    try{
      const r=await fetch('/_share_pending');const d=await r.json();
      if(!d||(!d.url&&!d.text))return;
      await fetch('/_share_clear',{method:'POST'});
      const val=(d.url||d.text).trim();qEl.value=val;send(val);
    }catch{}
  })();
})();
</script>

</br></br></br>

<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Aplicaciones</a>

</div>
