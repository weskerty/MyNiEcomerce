<div style="text-align:center;">
<style>
.app-btn{margin:10px auto 0;padding:8px 18px;border-radius:20px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:rgba(255,255,255,.85);font-size:.78rem;letter-spacing:.05em;cursor:pointer;transition:background .2s,transform .15s}
.app-btn:hover{background:rgba(255,255,255,.16);transform:translateY(-1px)}
.app-btn:disabled{opacity:.5;cursor:default;transform:none}
</style>

<div id="INS_W">
  <h2>Instalar Aplicacion</h2>
  <p>Al instalar como aplicacion gastas menos saldo al navegar por aqui, carga mas rapido y tienes casi todo disponible incluso sin conexion. Util si tienes datos limitados para no gastar saldo innecesariamente.</p>
  <button id="PI" class="app-btn" style="display:none">📲 Instalar App 💕</button>
  <h3 style="display:flex;justify-content:center;">⬆️ Pruebalo ⬆️</h3>
  <p>y si no te gusta se desinstala como cualquier otra app 🤗</p>
  <div style="display:flex;justify-content:center;">
    <img src="web/otros/Archivos/Imagenes/Permanente/Install.md/UnInstall.avif"
    style="width:320px;height:120px;object-fit:cover;border-radius:12px">
  </div>
</div>

<h2>Notificaciones</h2>
<p>Tambien puedes activar notificaciones para recibir ofertas y nuevos productos</p>
<button id="NT" class="app-btn" style="display:none"></button>

<script>
(function(){
  const _ac=new AbortController();
  document.getElementById('content').addEventListener('contentUnload',()=>_ac.abort(),{once:true});

  if(window.matchMedia('(display-mode: standalone)').matches||!!navigator.standalone)
    document.getElementById('INS_W').style.display='none';

  const W='https://yoganopy-push.marcoygor0.workers.dev';
  const VP='BHhzutw-yWrRIzIXr3NS1VlY9Z0ryqQ5FRm-W-p3lBN6wj9jePY7tBqatF_OUkMWJcobIpzucuqqgkV159lC_Mk';
  if(!('serviceWorker' in navigator)||!('PushManager' in window))return;
  if(Notification.permission==='denied')return;
  const btn=document.getElementById('NT');
  function u8(s){const p=atob(s.replace(/-/g,'+').replace(/_/g,'/'));return Uint8Array.from(p,c=>c.charCodeAt(0));}
  async function upd(sw){
    if(_ac.signal.aborted)return;
    try{const s=await sw.pushManager.getSubscription();btn.textContent=s?'🔕 Desactivar Notificaciones':'🔔 Activar Notificaciones';btn.style.display='block';}catch{}
  }
  async function tog(sw){
    btn.disabled=true;
    try{
      const s=await sw.pushManager.getSubscription();
      if(s){
        await fetch(W+'/unsubscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({endpoint:s.endpoint})}).catch(()=>{});
        await s.unsubscribe();
      }else{
        if(await Notification.requestPermission()!=='granted'){btn.disabled=false;return;}
        const ns=await sw.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:u8(VP)});
        await fetch(W+'/subscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(ns.toJSON())}).catch(()=>{});
      }
      await upd(sw);
    }catch{}
    btn.disabled=false;
  }
  Promise.race([navigator.serviceWorker.ready,new Promise((_,rj)=>setTimeout(()=>rj(),3000))])
    .then(sw=>{if(_ac.signal.aborted)return;upd(sw);btn.addEventListener('click',()=>tog(sw));})
    .catch(()=>{});
})();
</script>
</div>
