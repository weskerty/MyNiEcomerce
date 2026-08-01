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
if(window.__ENV?.pwa)document.getElementById('INS_W').style.display='none';
</script>
</div>