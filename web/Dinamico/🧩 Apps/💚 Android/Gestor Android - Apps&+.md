<div class="adb-wrap">
<h2>WebADB Debloater</h2>
<p id="adbSt">Iniciando...</p>

<div class="BS1">
<a class="BS2" id="adbBtnCnn" style="opacity:.5;pointer-events:none">
<span class="BS4">🔌</span><p class="BS5">Conectar</p>
</a>
<a class="BS2" id="adbBtnRld" style="opacity:.5;pointer-events:none">
<span class="BS4">🔄</span><p class="BS5">Actualizar</p>
</a>
<a class="BS2" id="adbBtnRep">
<span class="BS4">🩹</span><p class="BS5">Rep. pantalla</p>
</a>
</div>

<div id="adbLst"></div>
</div>

<dialog id="adbRepDlg">
<h3>Reparar acceso ADB (pantalla rota + TWRP)</h3>
<div id="adbRepStep1">
<p>Esto sirve si tu pantalla esta rota y tu telefono tiene <strong>un custom recovery</strong> instalado. No funciona con el recovery de fabrica.</p>
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
<p style="font-family: monospace; white-space: pre; margin: 0;">⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇</p>
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
(async()=>{
const{AdbDaemonTransport,Adb,adbGeneratePublicKey}=await import("https://esm.unpkg.com/@yume-chan/adb@2.6.0?bundle&target=esnext");
const{AdbDaemonWebUsbDeviceManager}=await import("https://esm.unpkg.com/@yume-chan/adb-daemon-webusb@2.1.0?bundle&target=esnext");
const{default:AdbWebCredentialStore}=await import("https://esm.unpkg.com/@yume-chan/adb-credential-web@2.0.1?bundle&target=esnext");

const U1="https://raw.githubusercontent.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/main/resources/assets/uad_lists.json";
const R1=["Recommended","Advanced","Expert","Unsafe"];
const PR1=["com.android.systemui","com.android.settings","com.android.phone","com.android.shell","android"];

let D1=null,A1=null,AR1=null;
const CS1=new AdbWebCredentialStore("WebADBDebloater");

const el=id=>document.getElementById(id);
const stEl=el("adbSt"),btnCnn=el("adbBtnCnn"),btnRld=el("adbBtnRld"),lstEl=el("adbLst");
const btnRep=el("adbBtnRep"),repDlg=el("adbRepDlg"),repMsg=el("adbRepMsg");
const repStep1=el("adbRepStep1"),repStep2=el("adbRepStep2"),repStep3=el("adbRepStep3");
const repPlan=el("adbRepPlan"),repDone=el("adbRepDone");
const btnRepTest=el("adbBtnRepTest"),btnRepRun=el("adbBtnRepRun"),btnRepClose=el("adbBtnRepClose");

function setSt(s){stEl.textContent=s}
function enable(btn){btn.style.opacity="";btn.style.pointerEvents=""}

async function ldJson(){
setSt("Actualizando lista desde Universal-Debloater-Alliance...");
const r=await fetch(U1,{cache:"no-store"});
if(!r.ok)throw new Error("HTTP "+r.status);
D1=await r.json();
setSt("Lista UAD cargada: "+Object.keys(D1).length+" paquetes conocidos.");
enable(btnCnn);enable(btnRld);
}

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

function render(g){
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
wn.textContent="(paquete critico, bloqueado por seguridad)";
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
if(!confirm("Desinstalar "+it.id+" para el usuario actual? Es reversible."))return;
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

async function onCnn(){
try{
setSt("Selecciona el dispositivo en el dialogo de Chrome...");
const mgr=AdbDaemonWebUsbDeviceManager.BROWSER;
if(!mgr){setSt("WebUSB no disponible en este navegador.");return}
const dv=await mgr.requestDevice();
if(!dv){setSt("No se selecciono ningun dispositivo.");return}
const cn=await dv.connect();
setSt("Autenticando (revisa el telefono si pide confirmar)...");
const tr=await AdbDaemonTransport.authenticate({serial:dv.serial,connection:cn,credentialStore:CS1});
A1=new Adb(tr);
setSt("Listando paquetes instalados...");
const raw=await runSh("pm list packages");
const pk=parsePkgs(raw);
setSt("Cruzando "+pk.length+" paquetes contra la base UAD...");
render(grp(pk));
setSt("Listo. Conectado: "+(A1.banner?.model||dv.serial));
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
throw new Error("No hay clave ADB generada todavia; conecta primero por USB normal una vez.");
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
repMsg.textContent="TWRP detectado pero el demonio todavia no arranco. Espera unos segundos y presiona 'Probar conexion' de nuevo.";
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
repPlan.textContent="Se copiara tu clave ADB publica y se habilitara ADB inseguro en las particiones de sistema disponibles. Al finalizar el telefono se reiniciara a Android normal.";
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

for(const p of RPARTS1){
await runShR("mount /"+p+" 2>/dev/null; mount -o rw,remount /"+p+" 2>/dev/null; true");
}

let found=false;
for(const p of RPARTS1){
for(const c of RCAND1){
const path="/"+p+c;
const ex=(await runShR("[ -f "+path+" ] && echo si || echo no")).trim();
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
"<br><br>Ahora necesitas descargar y usar el programa "+
'<a href="https://github.com/Genymobile/scrcpy/releases" target="_blank">scrcpy</a> para controlar tu telefono.';
}catch(e){
repPlan.textContent="Error durante la reparacion: "+e.message;
btnRepRun.style.pointerEvents="";btnRepRun.style.opacity="";
console.error(e);
}
});

btnCnn.addEventListener("click",onCnn);
btnRld.addEventListener("click",ldJson);

document.getElementById("content").addEventListener("contentUnload",function cu(){
if(A1)A1.close?.().catch(()=>{});
if(AR1)AR1.close?.().catch(()=>{});
if(repDlg.open)repDlg.close();
document.getElementById("content").removeEventListener("contentUnload",cu);
},{once:true});

ldJson().catch(e=>setSt("Error al cargar lista UAD: "+e.message));
})();
</script>