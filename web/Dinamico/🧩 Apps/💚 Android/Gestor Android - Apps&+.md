<style>
#adbStorePg{display:flex;justify-content:center;gap:12px;margin-top:12px}
#adbStorePg button{background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.14);border-radius:10px;color:#fff;padding:6px 18px;cursor:pointer;font-size:.85em;font-family:inherit;transition:background .2s}
#adbStorePg button:hover{background:rgba(255,255,255,.18)}
#adbStorePg button:disabled{opacity:.3;cursor:default}
#adbStWrap{position:relative;display:inline-block}
#adbStOv{position:absolute;inset:-6px -12px;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:flex;align-items:center;gap:8px;border-radius:8px}
#adbStOv img{width:20px;height:20px}
</style>
<div class="adb-wrap">
<h2>Gestor Android</h2>
<div id="adbStWrap"><p id="adbSt">Iniciando...</p><div id="adbStOv" style="display:none"><img id="adbStOvImg"></div></div>

<details id="adbHowTo">
  <summary style="">Como Activar ADB</summary>

VideoFuturo

</details>

<div class="BS1">
<a class="BS2" id="adbBtnCnn">
<span class="BS4">🔌</span><p class="BS5">Conectar</p>
</a>
<a class="BS2" id="adbBtnRep">
<span class="BS4">🩹</span><p class="BS5">Rep. pantalla</p>
</a>
<a class="BS2" id="adbBtnIns" style="opacity:.5;pointer-events:none">
<span class="BS4">📥</span><p class="BS5">Instalar</p>
</a>
<a class="BS2" id="adbBtnUn" style="opacity:.5;pointer-events:none">
<span class="BS4">🧹</span><p class="BS5">Desinstalar</p>
</a>
<a class="BS2" id="adbBtnCmd" style="opacity:.5;pointer-events:none">
<span class="BS4">📟</span><p class="BS5">Comandos</p>
</a>
<a class="BS2" id="adbBtnScr" style="opacity:.5;pointer-events:none">
<span class="BS4">📱</span><p class="BS5">Pantalla</p>
</a>
</div>

<input type="file" id="adbFileApk" accept=".apk" style="display:none">

<div id="adbStore">
<div id="adbSearchBar" style="display:flex;align-items:center;gap:10px;margin:14px 0;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:24px;padding:10px 16px">
<span style="opacity:.5">🔍</span>
<input id="adbSearchInp" type="search" placeholder="Buscar Nuevas Apps..." autocomplete="off" style="flex:1;background:none;border:none;outline:none;color:#fff;font-size:1rem;font-family:inherit">
</div>
<div id="adbStoreGrid"></div>
<div id="adbStorePg" style="display:none">
<button id="adbStorePrev">Anterior</button>
<button id="adbStoreNext">Siguiente</button>
</div>
</div>

<div id="adbLst" style="display:none"></div>

<div id="adbCmdPnl" style="display:none">
<div id="adbCmdGrid" style="display:flex;flex-wrap:wrap;gap:8px;margin:14px 0"></div>
<pre id="adbCmdLog" style="background:rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.14);border-radius:10px;padding:10px 12px;height:220px;overflow-y:auto;font-size:.8em;white-space:pre-wrap;margin:0 0 10px"></pre>
<div style="display:flex;gap:8px">
<input id="adbCmdInp" type="text" placeholder="comando adb shell..." autocomplete="off" style="flex:1;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:10px;padding:8px 12px;color:#fff;font-family:monospace;font-size:.85em;outline:none">
<button id="adbCmdRun" style="background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.14);border-radius:10px;color:#fff;padding:6px 16px;cursor:pointer;font-family:inherit">Ejecutar</button>
</div>
</div>

<div id="adbScrPnl" style="display:none;text-align:center">
<p id="adbScrSt" style="opacity:.7;font-size:.85em">Presiona Pantalla para iniciar</p>
<div id="adbScrHold" style="max-width:100%;display:inline-block;touch-action:none"></div>
</div>
</div>

<dialog id="adbRepDlg">
<h3>Reparar acceso ADB (pantalla rota + TWRP)</h3>
<div id="adbRepStep1">
<p>Esto sirve si tu pantalla esta rota y <strong>Ya tenias TWRP custom recovery</strong> instalado. No funciona con el recovery de fabrica de Android.</p>
<ol>
<li>Apaga el telefono.</li>
<li>Mantene presionado Volumen abajo + Power hasta entrar al recovery.</li>
<li>Conecta el cable USB a la computadora.</li>
<li>Presiona "Probar conexion" abajo.</li>
</ol>


<p style="font-family: monospace; white-space: pre; margin: 0;">             Boton Encendido</p>
<p style="font-family: monospace; white-space: pre; margin: 0;">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⬇️</p>
<p style="font-family: monospace; white-space: pre; margin: 0;">⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⠿⠿⠿⠿⠿⢿⣿⠿⢿⣿⣷⡄</p>
<p style="font-family: monospace; white-space: pre; margin: 0;">⠀⠀⠀⠀⠀⠀⠀⢸⣿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⣿⡇</p>
<p style="font-family: monospace; white-space: pre; margin: 0;">⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿ ⬅️ Volumen +</p>
<p style="font-family: monospace; white-space: pre; margin: 0;">⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀TWRP⠀⠀⠀⠀⣿⡇</p>
<p style="font-family: monospace; white-space: pre; margin: 0;">⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀Recovery ⠀⣿⣿ </p>
<p style="font-family: monospace; white-space: pre; margin: 0;">⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇</p>
<p style="font-family: monospace; white-space: pre; margin: 0;">⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇</p>
<p style="font-family: monospace; white-space: pre; margin: 0;">⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇</p>
<p style="font-family: monospace; white-space: pre; margin: 0;">⠀⠀⠀⠀⠀⠀⠀⢸⣿⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣿⡇</p>
<p style="font-family: monospace; white-space: pre; margin: 0;">⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣦⣤⣤⣤⣤⣴⣿⣿⣿⡿⠃</p>


<a class="back-button" id="adbBtnRepTest">Probar conexion</a>
<p id="adbRepMsg"></p>
</div>
<div id="adbRepStep2" style="display:none">
<p id="adbRepPlan"></p>
<a class="view-all-button" id="adbBtnRepRun">Ejecutar reparacion</a>
</div>
<div id="adbRepStep3" style="display:none">
<p id="adbRepDone"></p>
</div>
<a class="back-button" id="adbBtnRepClose">Cerrar</a>
</dialog>

<script>
const CMDS1=[
{n:"Info bateria",c:"dumpsys battery"},
{n:"Espacio libre",c:"df -h /data"},
{n:"Reiniciar",c:"reboot"},
{n:"Anti-Kill Termux",c:"device_config set_sync_disabled_for_tests persistent;device_config put activity_manager max_phantom_processes 2147483647;device_config put runtime_native_boot use_freezer false;settings put global settings_enable_monitor_phantom_procs false;am set-inactive com.termux false;cmd deviceidle whitelist +com.termux;cmd power set-mode 0;dumpsys deviceidle disable;cmd appops set --uid com.termux RUN_IN_BACKGROUND allow;cmd appops set --uid com.termux RUN_ANY_IN_BACKGROUND allow;cmd appops set --uid com.termux SYSTEM_EXEMPT_FROM_ACTIVITY_BG_START_RESTRICTION allow;cmd appops set --uid com.termux SYSTEM_EXEMPT_FROM_HIBERNATION allow;cmd appops set --uid com.termux SYSTEM_EXEMPT_FROM_POWER_RESTRICTIONS allow;cmd appops set --uid com.termux SYSTEM_EXEMPT_FROM_SUSPENSION allow;cmd appops set --uid com.termux WAKE_LOCK allow;cmd appops set --uid com.termux REQUEST_IGNORE_BATTERY_OPTIMIZATIONS allow;cmd appops set --uid com.termux ACTIVATE_PLATFORM_VPN allow;cmd appops set --uid com.termux INTERACT_ACROSS_PROFILES allow;cmd appops set --uid com.termux SCHEDULE_EXACT_ALARM allow;cmd appops set --uid com.termux START_FOREGROUND allow;echo listo anti-kill"}
];

(async()=>{
const stOv=document.getElementById("adbStOv"),stOvImg=document.getElementById("adbStOvImg");
const wa=window.__CFG?.waitAnim;
if(wa){stOvImg.src=wa;stOv.style.display=""}
try{
const{AdbDaemonTransport,Adb,adbGeneratePublicKey}=await import("https://esm.unpkg.com/@yume-chan/adb@2.6.0?bundle&target=esnext");
const{AdbDaemonWebUsbDeviceManager}=await import("https://esm.unpkg.com/@yume-chan/adb-daemon-webusb@2.1.0?bundle&target=esnext");
const{default:AdbWebCredentialStore}=await import("https://esm.unpkg.com/@yume-chan/adb-credential-web@2.0.1?bundle&target=esnext");
const{DefaultServerPath,AndroidMotionEventAction,ScrcpyPointerId,clamp}=await import("https://esm.unpkg.com/@yume-chan/scrcpy@2.2.0?bundle&target=esnext");
const{AdbScrcpyClient,AdbScrcpyOptions2_1}=await import("https://esm.unpkg.com/@yume-chan/adb-scrcpy@2.3.2?bundle&target=esnext");
const{WebCodecsVideoDecoder,WebGLVideoFrameRenderer,BitmapVideoFrameRenderer}=await import("https://esm.unpkg.com/@yume-chan/scrcpy-decoder-webcodecs?bundle&target=esnext");

const U1="https://raw.githubusercontent.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/main/resources/assets/uad_lists.json";
const R1=["Recommended","Advanced","Expert","Unsafe"];
const PR1=["com.android.systemui","com.android.settings","com.android.phone","com.android.shell","android"];
const FN1="/api/fdroid";
const SRVJ1="web/scripts/Otros/Binarios/scrcpy-server-v3.3.4";

let D1=null,A1=null,AR1=null,abi1=null;
let stCur=[],stPg=0,stDbt=null,stAC=null;
const CS1=new AdbWebCredentialStore("WebADBDebloater");

const el=id=>document.getElementById(id);
const stEl=el("adbSt"),btnCnn=el("adbBtnCnn"),btnIns=el("adbBtnIns"),btnUn=el("adbBtnUn"),lstEl=el("adbLst");
const btnRep=el("adbBtnRep"),repDlg=el("adbRepDlg"),repMsg=el("adbRepMsg");
const repStep1=el("adbRepStep1"),repStep2=el("adbRepStep2"),repStep3=el("adbRepStep3");
const repPlan=el("adbRepPlan"),repDone=el("adbRepDone");
const btnRepTest=el("adbBtnRepTest"),btnRepRun=el("adbBtnRepRun"),btnRepClose=el("adbBtnRepClose");
const storeEl=el("adbStore"),gridEl=el("adbStoreGrid"),pgEl=el("adbStorePg"),pgPrev=el("adbStorePrev"),pgNext=el("adbStoreNext");
const searchInp=el("adbSearchInp"),fileInp=el("adbFileApk");
const btnCmd=el("adbBtnCmd"),cmdPnl=el("adbCmdPnl"),cmdGrid=el("adbCmdGrid"),cmdLog=el("adbCmdLog"),cmdInp=el("adbCmdInp"),cmdRun=el("adbCmdRun");
const howTo=el("adbHowTo");
const btnScr=el("adbBtnScr"),scrPnl=el("adbScrPnl"),scrSt=el("adbScrSt"),scrHold=el("adbScrHold");

function setSt(s){stEl.textContent=s}
function enable(btn){btn.style.opacity="";btn.style.pointerEvents=""}

async function runSh(cmd){return await A1.subprocess.noneProtocol.spawnWaitText(cmd)}
async function uninst(id){return await runSh("pm uninstall --user 0 "+id)}
async function restr(id){return await runSh("cmd package install-existing "+id)}

function parsePkgs(txt){
const arr=[];
for(const ln of txt.split("\n")){
const m=ln.match(/^package:(\S+)/);
if(m)arr.push(m[1]);
}
return arr;
}

function grp(pkgs){
const g={Recommended:[],Advanced:[],Expert:[],Unsafe:[],Unlisted:[]};
for(const p of pkgs){
const e=D1[p];
if(!e){g.Unlisted.push({id:p});continue}
const k=R1.includes(e.removal)?e.removal:"Unlisted";
g[k].push({id:p,...e});
}
return g;
}

function renderUad(g){
lstEl.innerHTML="";
const ord=[...R1,"Unlisted"];
for(const k of ord){
const items=g[k];
if(!items.length)continue;
const det=document.createElement("details");
const sum=document.createElement("summary");
sum.textContent=k+" ("+items.length+")";
det.appendChild(sum);
const sec=document.createElement("section");
for(const it of items.sort((a,b)=>a.id.localeCompare(b.id))){
const div=document.createElement("div");
const h=document.createElement("h3");
h.textContent=it.id;
const de=document.createElement("p");
de.textContent=it.description||"(sin descripcion en la base UAD)";
div.appendChild(h);div.appendChild(de);
if(it.list){
const li=document.createElement("p");
li.style.opacity=".6";li.style.fontSize=".8em";
li.textContent="Origen: "+it.list;
div.appendChild(li);
}
if(PR1.includes(it.id)){
const wn=document.createElement("p");
wn.style.opacity=".7";
wn.textContent="(Desinstalar esto Si o Si Bloqueara tu Telefono, Si quieres Continuar deberas hacerlo Manualmente en la Seccion Comandos.)";
div.appendChild(wn);
}else{
const acts=document.createElement("div");
acts.className="BS1";
acts.style.justifyContent="flex-start";
const res=document.createElement("p");
res.style.fontSize=".85em";res.style.opacity=".8";res.style.width="100%";
const bU=document.createElement("a");
bU.className="BS2";
bU.innerHTML='<span class="BS4">🗑️</span><p class="BS5">Desinstalar</p>';
bU.addEventListener("click",async()=>{
if(!confirm("Desinstalar "+it.id+" para el usuario actual? Se puede Reinstalar con el Boton Restaurar."))return;
bU.style.pointerEvents="none";bU.style.opacity=".5";
res.textContent=await uninst(it.id);
});
const bR=document.createElement("a");
bR.className="BS2";
bR.innerHTML='<span class="BS4">♻️</span><p class="BS5">Restaurar</p>';
bR.addEventListener("click",async()=>{
res.textContent=await restr(it.id);
bU.style.pointerEvents="";bU.style.opacity="";
});
acts.appendChild(bU);acts.appendChild(bR);
div.appendChild(acts);div.appendChild(res);
}
sec.appendChild(div);
}
det.appendChild(sec);
lstEl.appendChild(det);
if(k==="Recommended"){
lstEl.appendChild(document.createElement("br"));
const bq=document.createElement("blockquote");
bq.innerHTML="<p>Desinstalar alguna aplicacion de abajo puede causar problemas. Recuerda leer la descripcion de cada app. Sigue bajo tu responsabilidad.</p>";
lstEl.appendChild(bq);
}
}
}

async function ldUad(){
setSt("Actualizando lista desde Universal-Debloater-Alliance...");
try{
const r=await fetch(U1,{cache:"no-store"});
if(!r.ok)throw new Error("HTTP "+r.status);
D1=await r.json();
const raw=await runSh("pm list packages");
const pk=parsePkgs(raw);
renderUad(grp(pk));
setSt("Lista Universal-Debloater-Alliance actualizada: "+pk.length+" paquetes en el telefono.");
}catch(e){
setSt("Error al cargar lista Universal-Debloater-Alliance: "+e.message);
console.error(e);
}
}

let curView="store";
function setView(v){
if(curView==="scr"&&v!=="scr")scrStop();
curView=v;
storeEl.style.display=v==="store"?"":"none";
lstEl.style.display=v==="uad"?"":"none";
cmdPnl.style.display=v==="cmd"?"":"none";
scrPnl.style.display=v==="scr"?"":"none";
if(v==="uad")ldUad();
}
function showStore(){setView("store")}
function showUad(){setView("uad")}
btnUn.addEventListener("click",()=>{
setView(curView==="uad"?"store":"uad");
});

function pkgIdFromUrl(u){
const m=u.match(/\/packages\/([^/?#]+)/);
return m?m[1]:null;
}

function mkStoreCard(app){
const a=document.createElement("a");
a.className="BMD1";a.href="#";
const img=document.createElement("img");
img.src=app.icon;img.alt=app.name;img.loading="lazy";img.decoding="async";
const cn=document.createElement("div");cn.className="BMD1-CN";
const h=document.createElement("h3");h.textContent=app.name;
const p=document.createElement("p");p.textContent=app.summary||"";
cn.appendChild(h);cn.appendChild(p);
a.appendChild(img);a.appendChild(cn);
let busy=false;
a.addEventListener("click",async ev=>{
ev.preventDefault();
if(busy)return;
if(!A1){p.textContent="Conecta el telefono primero";setTimeout(()=>p.textContent=app.summary||"",2500);return}
busy=true;
p.textContent="Obteniendo version...";
try{
const rp=await fetch(FN1+"?action=pkg&id="+encodeURIComponent(app.pkg));
const dp=await rp.json();
const vc=dp.suggestedVersionCode;
if(!vc)throw new Error("sin version disponible");
p.textContent="Descargando...";
const rd=await fetch(FN1+"?action=apk&pkg="+encodeURIComponent(app.pkg)+"&vc="+encodeURIComponent(vc));
if(!rd.ok)throw new Error("HTTP "+rd.status);
const buf=await rd.arrayBuffer();
p.textContent="Instalando...";
await pushInstall(new Uint8Array(buf),app.pkg+".apk");
p.textContent="Instalado";
}catch(e){
p.textContent="Error: "+e.message;
console.error(e);
}finally{
busy=false;
setTimeout(()=>p.textContent=app.summary||"",2000);
}
});
return a;
}

function renderStorePage(){
gridEl.innerHTML="";
const s=stPg*20,slice=stCur.slice(s,s+20);
slice.forEach(app=>gridEl.appendChild(mkStoreCard(app)));
const maxPg=Math.ceil(stCur.length/20)-1;
if(stCur.length>20){
pgEl.style.display="";
pgPrev.disabled=stPg===0;pgNext.disabled=stPg>=maxPg;
}else pgEl.style.display="none";
}

pgPrev.addEventListener("click",()=>{stPg--;renderStorePage()});
pgNext.addEventListener("click",()=>{stPg++;renderStorePage()});

async function doStoreSearch(){
const q=searchInp.value.trim();
if(!q){stCur=[];stPg=0;renderStorePage();return}
if(stAC)stAC.abort();
stAC=new AbortController();
try{
const r=await fetch(FN1+"?action=search&q="+encodeURIComponent(q),{signal:stAC.signal});
const d=await r.json();
stCur=(d.apps||[]).map(app=>({name:app.name,summary:app.summary,icon:app.icon,pkg:pkgIdFromUrl(app.url)})).filter(a=>a.pkg);
stPg=0;renderStorePage();
}catch(e){
if(e.name==="AbortError")return;
gridEl.innerHTML="<p>Error al buscar apps 😔</p>";
}
}

searchInp.addEventListener("input",()=>{
clearTimeout(stDbt);
stDbt=setTimeout(doStoreSearch,5000);
});

searchInp.addEventListener("keydown",ev=>{
if(ev.key!=="Enter")return;
clearTimeout(stDbt);
doStoreSearch();
});

async function pushInstall(bytes,name){
const tmp="/data/local/tmp/"+name;
const sync=await A1.sync();
try{
await sync.write({filename:tmp,file:new ReadableStream({start(c){c.enqueue(bytes);c.close()}})});
}finally{
await sync.dispose();
}
await runSh("pm install "+tmp);
await runSh("rm "+tmp);
}

btnIns.addEventListener("click",()=>{if(A1)fileInp.click()});
fileInp.addEventListener("change",async()=>{
const f=fileInp.files[0];
if(!f)return;
setSt("Instalando "+f.name+"...");
try{
const buf=await f.arrayBuffer();
await pushInstall(new Uint8Array(buf),f.name);
setSt("Instalado: "+f.name);
}catch(e){
setSt("Error al instalar: "+e.message);
console.error(e);
}
fileInp.value="";
});

function cmdLogLn(s){cmdLog.textContent+=s+"\n";cmdLog.scrollTop=cmdLog.scrollHeight}

async function cmdExec(cmd){
if(!A1){cmdLogLn("! No hay dispositivo conectado");return}
cmdLogLn("$ "+cmd);
try{
const out=await runSh(cmd);
cmdLogLn(out.trim()||"(sin salida)");
}catch(e){
cmdLogLn("Error: "+e.message);
}
}

function renderCmdGrid(){
cmdGrid.innerHTML="";
for(const it of CMDS1){
const b=document.createElement("button");
b.textContent=it.n;
b.style.cssText="background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.14);border-radius:10px;color:#fff;padding:6px 14px;cursor:pointer;font-size:.85em;font-family:inherit";
b.addEventListener("click",()=>cmdExec(it.c));
cmdGrid.appendChild(b);
}
}
renderCmdGrid();

cmdRun.addEventListener("click",()=>{
const v=cmdInp.value.trim();
if(!v)return;
cmdExec(v);
cmdInp.value="";
});
cmdInp.addEventListener("keydown",ev=>{
if(ev.key==="Enter")cmdRun.click();
});

btnCmd.addEventListener("click",()=>{
if(!A1)return;
setView(curView==="cmd"?"store":"cmd");
});

let scrCli=null,scrDec=null,scrVw=0,scrVh=0;

async function scrStart(){
scrSt.textContent="Descargando servidor...";
scrHold.innerHTML="";
try{
const rs=await fetch(SRVJ1);
if(!rs.ok)throw new Error("HTTP "+rs.status+" al obtener jar");
scrSt.textContent="Subiendo servidor al dispositivo...";
await AdbScrcpyClient.pushServer(A1,rs.body);
scrSt.textContent="Iniciando scrcpy...";
scrCli=await AdbScrcpyClient.start(A1,DefaultServerPath,new AdbScrcpyOptions2_1({control:true,audio:false,video:true,videoBitRate:4000000,maxSize:720},{version:"3.3.4"}));
let rend;
if(WebGLVideoFrameRenderer.isSupported)rend=new WebGLVideoFrameRenderer();
else rend=new BitmapVideoFrameRenderer();
scrHold.appendChild(rend.canvas);
rend.canvas.style.maxWidth="100%";rend.canvas.style.touchAction="none";
if(!scrCli.videoStream){scrSt.textContent="Servidor sin video";return}
const{metadata,stream}=await scrCli.videoStream;
scrDec=new WebCodecsVideoDecoder({codec:metadata.codec,renderer:rend});
scrDec.sizeChanged(({width,height})=>{scrVw=width;scrVh=height});
stream.pipeTo(scrDec.writable).catch(e=>console.error(e));
scrHold.addEventListener("pointerdown",scrPtr);
scrHold.addEventListener("pointermove",scrPtr);
scrHold.addEventListener("pointerup",scrPtr);
scrHold.addEventListener("pointercancel",scrPtr);
scrSt.textContent="Conectado";
}catch(e){
if(e?.output){
scrSt.textContent="Error servidor: "+e.message;
console.error("scrcpy server output:",e.output.join("\n"));
}else{
scrSt.textContent="Error: "+e.message;
}
console.error(e);
}
}

async function scrPtr(ev){
ev.preventDefault();
if(!scrCli||!scrCli.controller||!scrVw)return;
scrHold.setPointerCapture(ev.pointerId);
let act;
if(ev.type==="pointerdown")act=AndroidMotionEventAction.Down;
else if(ev.type==="pointermove")act=ev.buttons===0?AndroidMotionEventAction.HoverMove:AndroidMotionEventAction.Move;
else act=AndroidMotionEventAction.Up;
const rc=scrHold.getBoundingClientRect();
const px=clamp((ev.clientX-rc.x)/rc.width,0,1)*scrVw;
const py=clamp((ev.clientY-rc.y)/rc.height,0,1)*scrVh;
try{
await scrCli.controller.injectTouch({
action:act,pointerId:ScrcpyPointerId.Finger,
pointerX:px,pointerY:py,videoWidth:scrVw,videoHeight:scrVh,
pressure:ev.buttons===0?0:1,actionButton:0,buttons:0
});
}catch(e){console.error(e)}
}

async function scrStop(){
scrHold.removeEventListener("pointerdown",scrPtr);
scrHold.removeEventListener("pointermove",scrPtr);
scrHold.removeEventListener("pointerup",scrPtr);
scrHold.removeEventListener("pointercancel",scrPtr);
if(scrCli){try{await scrCli.close()}catch(e){} scrCli=null}
scrDec=null;scrVw=0;scrVh=0;
scrHold.innerHTML="";
scrSt.textContent="Presiona Pantalla para iniciar";
}

btnScr.addEventListener("click",()=>{
if(!A1)return;
if(curView==="scr"){setView("store");return}
setView("scr");
scrStart();
});

async function onCnn(){
try{
setSt("Selecciona el dispositivo en el menu que aparece...");
const mgr=AdbDaemonWebUsbDeviceManager.BROWSER;
if(!mgr){setSt("WebUSB no disponible en este navegador.");return}
const dv=await mgr.requestDevice();
if(!dv){setSt("No elegiste ningun dispositivo.");return}
const cn=await dv.connect();
setSt("Autenticando (revisa el telefono si pide confirmar)...");
const tr=await AdbDaemonTransport.authenticate({serial:dv.serial,connection:cn,credentialStore:CS1});
A1=new Adb(tr);
abi1=(await runSh("getprop ro.product.cpu.abi")).trim();
enable(btnIns);enable(btnUn);enable(btnCmd);enable(btnScr);
howTo.style.display="none";
setSt("Listo. Conectado: "+(A1.banner?.model||dv.serial)+" ("+abi1+")");
if(!searchInp.value.trim()){searchInp.value="music";doStoreSearch()}
}catch(e){
setSt("Error: "+e.message);
console.error(e);
}
}

const RPARTS1=["system","system_root","vendor","vendor_dlkm","odm","odm_dlkm","product","system_ext"];
const RCAND1=["/build.prop","/system/build.prop","/default.prop"];
async function runShR(cmd){return await AR1.subprocess.noneProtocol.spawnWaitText(cmd)}

async function pubKeyLine(){
for await(const k of CS1.iterateKeys()){
const pub=adbGeneratePublicKey(k.buffer);
const b64=btoa(String.fromCharCode(...pub));
return b64+" "+k.name;
}
const nk=await CS1.generateKey();
const pub=adbGeneratePublicKey(nk.buffer);
const b64=btoa(String.fromCharCode(...pub));
return b64+" "+nk.name;
}

function resetRepUi(){
repStep1.style.display="";
repStep2.style.display="none";
repStep3.style.display="none";
repMsg.textContent="";
btnRepTest.style.pointerEvents="";btnRepTest.style.opacity="";
}

function openRep(){resetRepUi();repDlg.showModal()}
function closeRep(){repDlg.close()}

btnRep.addEventListener("click",openRep);
btnRepClose.addEventListener("click",closeRep);

btnRepTest.addEventListener("click",async()=>{
btnRepTest.style.pointerEvents="none";btnRepTest.style.opacity=".5";
repMsg.textContent="Conectando...";
try{
const mgr=AdbDaemonWebUsbDeviceManager.BROWSER;
if(!mgr){repMsg.textContent="WebUSB no disponible en este navegador.";btnRepTest.style.pointerEvents="";btnRepTest.style.opacity="";return}
const dv=await mgr.requestDevice();
if(!dv){repMsg.textContent="No se selecciono ningun dispositivo.";btnRepTest.style.pointerEvents="";btnRepTest.style.opacity="";return}
const cn=await dv.connect();
const tr=await AdbDaemonTransport.authenticate({serial:dv.serial,connection:cn,credentialStore:CS1});
AR1=new Adb(tr);

repMsg.textContent="Probando comando twrp...";
const out=await runShR("twrp 2>&1; echo EXIT:$?");
const low=out.toLowerCase();

if(low.includes("not appear to be running")||low.includes("waiting for twrp")){
repMsg.textContent="TWRP ? 'Probar conexion' de nuevo.";
btnRepTest.style.pointerEvents="";btnRepTest.style.opacity="";
return;
}
if(low.includes("inaccessible")||low.includes("not found")||low.includes("no such file")||low.includes("unknown command")){
repMsg.textContent="El comando 'twrp' no existe en este recovery. Esto solo funciona con TWRP u otro custom recovery compatible, no con el recovery de fabrica.";
btnRepTest.style.pointerEvents="";btnRepTest.style.opacity="";
return;
}

repMsg.textContent="TWRP respondio correctamente.";
repStep1.style.display="none";
repStep2.style.display="";
repPlan.textContent="Se copiara tu clave ADB publica y se habilitara ADB inseguro en las particiones de sistema disponibles. Al finalizar el telefono se reiniciara a Android normal, de esta manera poder usar scrcpy para poder controlar el dispositivo con el boton pantalla que encontraras en el menu.";
}catch(e){
repMsg.textContent="Error de conexion: "+e.message;
btnRepTest.style.pointerEvents="";btnRepTest.style.opacity="";
console.error(e);
}
});

btnRepRun.addEventListener("click",async()=>{
btnRepRun.style.pointerEvents="none";btnRepRun.style.opacity=".5";
repPlan.textContent="Ejecutando...";
const done=[];
try{
const key=await pubKeyLine();
const keySafe=key.replace(/'/g,"'\\''");
await runShR("mkdir -p /data/misc/adb");
await runShR("echo '"+keySafe+"' > /data/misc/adb/adb_keys");
await runShR("chmod 600 /data/misc/adb/adb_keys");
await runShR("chown 2000:2000 /data/misc/adb/adb_keys");
done.push("/data/misc/adb/adb_keys (clave copiada)");

const rw=[];
for(const p of RPARTS1){
await runShR("mount /"+p+" 2>/dev/null; mount -o rw,remount /"+p+" 2>/dev/null; true");
const chk=(await runShR("mount | grep -q ' /"+p+" ' && echo si || echo no")).trim();
if(chk==="si")rw.push(p);
}
if(!rw.length){
repPlan.textContent="Error: ninguna particion pudo montarse. Verifica dm-verity/AVB o revisa el estado del recovery.";
btnRepRun.style.pointerEvents="";btnRepRun.style.opacity="";
return;
}

let found=false;
for(const p of rw){
for(const c of RCAND1){
const path="/"+p+c;
const ex=(await runShR("ls "+path+" >/dev/null 2>&1 && echo si || echo no")).trim();
if(ex!=="si")continue;
found=true;
done.push(path);
await runShR("grep -q '^ro.adb.secure=' "+path+" && sed -i 's/^ro.adb.secure=.*/ro.adb.secure=0/' "+path+" || echo 'ro.adb.secure=0' >> "+path);
await runShR("grep -q '^persist.sys.usb.config=' "+path+" && sed -i 's/^persist.sys.usb.config=.*/persist.sys.usb.config=adb/' "+path+" || echo 'persist.sys.usb.config=adb' >> "+path);
}
}
if(!found){
await runShR("echo 'ro.adb.secure=0' >> /default.prop");
await runShR("echo 'persist.sys.usb.config=adb' >> /default.prop");
done.push("/default.prop (fallback)");
}

repStep2.style.display="none";
repStep3.style.display="";
repDone.textContent="Reiniciando a Android...";
try{await runShR("reboot")}catch(e2){console.error("reboot corto la conexion (normal):",e2)}
repDone.innerHTML="Listo. Archivos modificados: "+done.join(", ")+
"<br><br>Ahora Esperar a que el Telefono inicie para poder controlar el telefono con "+
'<a href="https://github.com/Genymobile/scrcpy/releases" target="_blank">scrcpy</a> desde el Boton Pantalla Aqui. Recuerda Conectar el Telefono.';
}catch(e){
repPlan.textContent="Error durante la reparacion: "+e.message;
btnRepRun.style.pointerEvents="";btnRepRun.style.opacity="";
console.error(e);
}
});

btnCnn.addEventListener("click",onCnn);

document.getElementById("content").addEventListener("contentUnload",function cu(){
if(A1)A1.close?.().catch(()=>{});
if(AR1)AR1.close?.().catch(()=>{});
if(scrCli)scrCli.close?.().catch(()=>{});
if(repDlg.open)repDlg.close();
if(stAC)stAC.abort();
document.getElementById("content").removeEventListener("contentUnload",cu);
},{once:true});

stOv.style.display="none";
setSt("Presiona Conectar para vincular tu telefono.");
}catch(e){
stOv.style.display="none";
setSt("Error al iniciar: "+e.message);
console.error(e);
}
})();
</script>