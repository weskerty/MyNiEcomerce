## Instalar Aplicacion
Al Instala como Aplicacion reduces el consumo de datos moviles, Carga las cosas mas rapido y siempre tendras casi todo a disposicion incluso sin conexion a internet. Util si tienes plan de datos limitado asi no gastar saldo innecesariamente. 

<style>
.app-btn{margin:10px auto 0;padding:8px 18px;border-radius:20px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:rgba(255,255,255,.85);font-size:.78rem;letter-spacing:.05em;cursor:pointer;transition:background .2s,transform .15s}
.app-btn:hover{background:rgba(255,255,255,.16);transform:translateY(-1px)}
.app-btn:disabled{opacity:.5;cursor:default;transform:none}
</style>

<button id="PI" class="app-btn" style="display:none">📲 Instalar App 💕</button>
<script>
const _b=document.getElementById('PI');
if(window._PWA)_b.style.display='';
_b.onclick=()=>{if(!window._PWA)return;window._PWA.prompt();window._PWA=null;_b.style.display='none';};
</script>

### ⬆️ Pruebalo ⬆️ 

y si no te Gusta se Desinstala como cualquier otra App 🤗


## Notificaciones 

Tambien puedes activar las notificaciones para recibir las ofertas y nuevos productos 

<button id="NT" class="app-btn" style="display:none"></button>
<script>
(function(){
const W='https://yoganopy-push.marcoygor0.workers.dev';
const VP='BHhzutw-yWrRIzIXr3NS1VlY9Z0ryqQ5FRm-W-p3lBN6wj9jePY7tBqatF_OUkMWJcobIpzucuqqgkV159lC_Mk';
if(!('serviceWorker' in navigator)||!('PushManager' in window))return;
if(Notification.permission==='denied')return;
const btn=document.getElementById('NT');
function u8(s){const p=atob(s.replace(/-/g,'+').replace(/_/g,'/'));return Uint8Array.from(p,c=>c.charCodeAt(0));}
function swR(){return Promise.race([navigator.serviceWorker.ready,new Promise((_,rj)=>setTimeout(()=>rj(new Error),3000))]);}
async function upd(sw){try{const s=await sw.pushManager.getSubscription();btn.textContent=s?'🔕 Desactivar Notificaciones':'🔔 Activar Notificaciones';btn.style.display='block';}catch(e){}}
async function tog(sw){btn.disabled=true;try{const s=await sw.pushManager.getSubscription();if(s){await fetch(W+'/unsubscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({endpoint:s.endpoint})}).catch(()=>{});await s.unsubscribe();}else{const p=await Notification.requestPermission();if(p!=='granted'){btn.disabled=false;return;}const ns=await sw.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:u8(VP)});await fetch(W+'/subscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(ns.toJSON())}).catch(()=>{});}await upd(sw);}catch(e){}btn.disabled=false;}
swR().then(sw=>{upd(sw);btn.addEventListener('click',()=>tog(sw));}).catch(()=>{});
})();
</script>
