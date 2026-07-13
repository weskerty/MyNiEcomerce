<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>WebADB Debloater</title>
</head>
<body>
<div id="app">
<h1>WebADB Debloater</h1>
<p id="st">Iniciando…</p>
<button id="btnCnn" disabled>Conectar teléfono</button>
<button id="btnRld" disabled>Actualizar lista UAD</button>
<button id="btnRep">Repair Screen Broken</button>
<div id="dev"></div>
<div id="lst"></div>
</div>

<dialog id="repDlg">
<h2>Reparar acceso ADB (pantalla rota + TWRP)</h2>
<div id="repStep1">
<p>Esto sirve si tu pantalla está rota/no responde al tacto y tu teléfono tiene <strong>TWRP u otro custom recovery</strong> instalado. No funciona con el recovery de fábrica de Android.</p>
<ol>
<li>Apaga el teléfono.</li>
<li>Mantén presionado <strong>Volumen abajo + Power</strong> (la combinación varía según marca) hasta entrar al recovery.</li>
<li>Conecta el cable USB a la computadora.</li>
<li>Presiona "Probar conexión" abajo.</li>
</ol>
<button id="btnRepTest">Probar conexión</button>
<p id="repMsg"></p>
</div>
<div id="repStep2" style="display:none">
<p id="repPlan"></p>
<button id="btnRepRun">Ejecutar reparación</button>
</div>
<div id="repStep3" style="display:none">
<p id="repDone"></p>
</div>
<button id="btnRepClose">Cerrar</button>
</dialog>

<script type="module">
import { AdbDaemonTransport, Adb, adbGeneratePublicKey } from "https://esm.unpkg.com/@yume-chan/adb@2.6.0?bundle&target=esnext";
import { AdbDaemonWebUsbDeviceManager } from "https://esm.unpkg.com/@yume-chan/adb-daemon-webusb@2.1.0?bundle&target=esnext";
import AdbWebCredentialStore from "https://esm.unpkg.com/@yume-chan/adb-credential-web@2.0.1?bundle&target=esnext";

const U1 = "https://raw.githubusercontent.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/main/resources/assets/uad_lists.json";
const R1 = ["Recommended", "Advanced", "Expert", "Unsafe"];
const PR1 = ["com.android.systemui", "com.android.settings", "com.android.phone", "com.android.shell", "android"];

let D1 = null;
let A1 = null;
let CS1 = new AdbWebCredentialStore("WebADBDebloater");

const stEl = document.getElementById("st");
const btnCnn = document.getElementById("btnCnn");
const btnRld = document.getElementById("btnRld");
const devEl = document.getElementById("dev");
const lstEl = document.getElementById("lst");
const btnRep = document.getElementById("btnRep");
const repDlg = document.getElementById("repDlg");
const repMsg = document.getElementById("repMsg");
const repStep1 = document.getElementById("repStep1");
const repStep2 = document.getElementById("repStep2");
const repStep3 = document.getElementById("repStep3");
const repPlan = document.getElementById("repPlan");
const repDone = document.getElementById("repDone");
const btnRepTest = document.getElementById("btnRepTest");
const btnRepRun = document.getElementById("btnRepRun");
const btnRepClose = document.getElementById("btnRepClose");

function setSt(s1) {
  stEl.textContent = s1;
}

async function ldJson() {
  setSt("Descargando lista UAD…");
  const r1 = await fetch(U1, { cache: "no-store" });
  if (!r1.ok) throw new Error("HTTP " + r1.status);
  const j1 = await r1.json();
  D1 = j1;
  setSt("Lista UAD cargada: " + Object.keys(D1).length + " paquetes conocidos.");
  btnCnn.disabled = false;
  btnRld.disabled = false;
}

async function runSh(cmd1) {
  return await A1.subprocess.noneProtocol.spawnWaitText(cmd1);
}

async function uninst(id1) {
  return await runSh("pm uninstall --user 0 " + id1);
}

async function restr(id1) {
  return await runSh("cmd package install-existing " + id1);
}

function parsePkgs(txt1) {
  const arr1 = [];
  for (const ln1 of txt1.split("\n")) {
    const m1 = ln1.match(/^package:(\S+)/);
    if (m1) arr1.push(m1[1]);
  }
  return arr1;
}

function grp(pkgs1) {
  const g1 = { Recommended: [], Advanced: [], Expert: [], Unsafe: [], Unlisted: [] };
  for (const p1 of pkgs1) {
    const e1 = D1[p1];
    if (!e1) { g1.Unlisted.push({ id: p1 }); continue; }
    const k1 = R1.includes(e1.removal) ? e1.removal : "Unlisted";
    g1[k1].push({ id: p1, ...e1 });
  }
  return g1;
}

function render(g1) {
  lstEl.innerHTML = "";
  const ord1 = [...R1, "Unlisted"];
  for (const k1 of ord1) {
    const items1 = g1[k1];
    if (!items1.length) continue;
    const det1 = document.createElement("details");
    const sum1 = document.createElement("summary");
    sum1.textContent = k1 + " (" + items1.length + ")";
    det1.appendChild(sum1);
    for (const it1 of items1.sort((a2, b2) => a2.id.localeCompare(b2.id))) {
      const div1 = document.createElement("div");
      const h1 = document.createElement("strong");
      h1.textContent = it1.id;
      const de1 = document.createElement("p");
      de1.textContent = it1.description || "(sin descripción en la base UAD)";
      const li1 = document.createElement("small");
      li1.textContent = it1.list ? "Origen: " + it1.list : "";
      const res1 = document.createElement("small");
      div1.appendChild(h1);
      div1.appendChild(de1);
      div1.appendChild(li1);
      if (PR1.includes(it1.id)) {
        const wn1 = document.createElement("small");
        wn1.textContent = " (paquete crítico, bloqueado por seguridad)";
        div1.appendChild(wn1);
      } else {
        const bU1 = document.createElement("button");
        bU1.textContent = "Desinstalar";
        bU1.addEventListener("click", async () => {
          if (!confirm("¿Desinstalar " + it1.id + " para el usuario actual? Es reversible.")) return;
          bU1.disabled = true;
          res1.textContent = await uninst(it1.id);
        });
        const bR1 = document.createElement("button");
        bR1.textContent = "Restaurar";
        bR1.addEventListener("click", async () => {
          res1.textContent = await restr(it1.id);
          bU1.disabled = false;
        });
        div1.appendChild(bU1);
        div1.appendChild(bR1);
        div1.appendChild(res1);
      }
      det1.appendChild(div1);
    }
    lstEl.appendChild(det1);
  }
}

async function onCnn() {
  try {
    setSt("Selecciona el dispositivo en el diálogo de Chrome…");
    const mgr1 = AdbDaemonWebUsbDeviceManager.BROWSER;
    if (!mgr1) { setSt("WebUSB no disponible en este navegador."); return; }
    const dv1 = await mgr1.requestDevice();
    if (!dv1) { setSt("No se seleccionó ningún dispositivo."); return; }
    const cn1 = await dv1.connect();
    setSt("Autenticando (revisa el teléfono si pide confirmar)…");
    const tr1 = await AdbDaemonTransport.authenticate({
      serial: dv1.serial,
      connection: cn1,
      credentialStore: CS1,
    });
    A1 = new Adb(tr1);
    devEl.textContent = "Conectado: " + (A1.banner?.model || dv1.serial);
    setSt("Listando paquetes instalados…");
    const raw1 = await runSh("pm list packages");
    const pk1 = parsePkgs(raw1);
    setSt("Cruzando " + pk1.length + " paquetes contra la base UAD…");
    render(grp(pk1));
    setSt("Listo.");
  } catch (e1) {
    setSt("Error: " + e1.message);
    console.error(e1);
  }
}

let AR1 = null;
const RPARTS1 = ["system", "system_root", "vendor", "vendor_dlkm", "odm", "odm_dlkm", "product", "system_ext"];
const RCAND1 = ["/build.prop", "/system/build.prop", "/default.prop"];

async function runShR(cmd1) {
  return await AR1.subprocess.noneProtocol.spawnWaitText(cmd1);
}

async function pubKeyLine() {
  for await (const k1 of CS1.iterateKeys()) {
    const pub1 = adbGeneratePublicKey(k1.buffer);
    const b64_1 = btoa(String.fromCharCode(...pub1));
    return b64_1 + " " + k1.name;
  }
  throw new Error("No hay clave ADB generada todavía; conecta primero por USB normal una vez.");
}

function resetRepUi() {
  repStep1.style.display = "";
  repStep2.style.display = "none";
  repStep3.style.display = "none";
  repMsg.textContent = "";
  btnRepTest.disabled = false;
}

btnRep.addEventListener("click", () => {
  resetRepUi();
  repDlg.showModal();
});
btnRepClose.addEventListener("click", () => repDlg.close());

btnRepTest.addEventListener("click", async () => {
  btnRepTest.disabled = true;
  repMsg.textContent = "Conectando…";
  try {
    const mgr1 = AdbDaemonWebUsbDeviceManager.BROWSER;
    if (!mgr1) { repMsg.textContent = "WebUSB no disponible en este navegador."; btnRepTest.disabled = false; return; }
    const dv1 = await mgr1.requestDevice();
    if (!dv1) { repMsg.textContent = "No se seleccionó ningún dispositivo."; btnRepTest.disabled = false; return; }
    const cn1 = await dv1.connect();
    const tr1 = await AdbDaemonTransport.authenticate({ serial: dv1.serial, connection: cn1, credentialStore: CS1 });
    AR1 = new Adb(tr1);

    repMsg.textContent = "Probando comando twrp…";
    const out1 = await runShR("twrp 2>&1; echo EXIT:$?");
    const low1 = out1.toLowerCase();

    if (low1.includes("not appear to be running") || low1.includes("waiting for twrp")) {
      repMsg.textContent = "TWRP detectado pero el demonio todavía no arrancó. Espera unos segundos y presiona 'Probar conexión' de nuevo.";
      btnRepTest.disabled = false;
      return;
    }
    if (low1.includes("inaccessible") || low1.includes("not found") || low1.includes("no such file") || low1.includes("unknown command")) {
      repMsg.textContent = "El comando 'twrp' no existe en este recovery. Esto solo funciona con TWRP u otro custom recovery compatible, no con el recovery de fábrica.";
      btnRepTest.disabled = false;
      return;
    }

    repMsg.textContent = "TWRP respondió correctamente.";
    repStep1.style.display = "none";
    repStep2.style.display = "";
    repPlan.textContent = "Se copiará tu clave ADB pública y se habilitará ADB inseguro en las particiones de sistema disponibles. Al finalizar el teléfono se reiniciará a Android normal.";
  } catch (e1) {
    repMsg.textContent = "Error de conexión: " + e1.message;
    btnRepTest.disabled = false;
    console.error(e1);
  }
});

btnRepRun.addEventListener("click", async () => {
  btnRepRun.disabled = true;
  repPlan.textContent = "Ejecutando…";
  const done1 = [];
  try {
    const key1 = await pubKeyLine();
    const keySafe1 = key1.replace(/'/g, "'\\''");
    await runShR("mkdir -p /data/misc/adb");
    await runShR("echo '" + keySafe1 + "' > /data/misc/adb/adb_keys");
    await runShR("chmod 600 /data/misc/adb/adb_keys");
    await runShR("chown 2000:2000 /data/misc/adb/adb_keys");
    done1.push("/data/misc/adb/adb_keys (clave copiada)");

    for (const p1 of RPARTS1) {
      await runShR("mount /" + p1 + " 2>/dev/null; mount -o rw,remount /" + p1 + " 2>/dev/null; true");
    }

    let found1 = false;
    for (const p1 of RPARTS1) {
      for (const c1 of RCAND1) {
        const path1 = "/" + p1 + c1;
        const ex1 = (await runShR("[ -f " + path1 + " ] && echo si || echo no")).trim();
        if (ex1 !== "si") continue;
        found1 = true;
        done1.push(path1);
        await runShR("grep -q '^ro.adb.secure=' " + path1 + " && sed -i 's/^ro.adb.secure=.*/ro.adb.secure=0/' " + path1 + " || echo 'ro.adb.secure=0' >> " + path1);
        await runShR("grep -q '^persist.sys.usb.config=' " + path1 + " && sed -i 's/^persist.sys.usb.config=.*/persist.sys.usb.config=adb/' " + path1 + " || echo 'persist.sys.usb.config=adb' >> " + path1);
      }
    }
    if (!found1) {
      await runShR("echo 'ro.adb.secure=0' >> /default.prop");
      await runShR("echo 'persist.sys.usb.config=adb' >> /default.prop");
      done1.push("/default.prop (fallback)");
    }

    repStep2.style.display = "none";
    repStep3.style.display = "";
    repDone.textContent = "Reiniciando a Android…";
    try {
      await runShR("reboot");
    } catch (e2) {
      console.error("reboot cortó la conexión (normal):", e2);
    }
    repDone.innerHTML = "Listo. Archivos modificados: " + done1.join(", ") +
      "<br><br>Ahora necesitas descargar y usar el programa " +
      '<a href="https://github.com/Genymobile/scrcpy/releases" target="_blank">scrcpy</a> para controlar tu teléfono.';
  } catch (e1) {
    repPlan.textContent = "Error durante la reparación: " + e1.message;
    btnRepRun.disabled = false;
    console.error(e1);
  }
});

btnCnn.addEventListener("click", onCnn);
btnRld.addEventListener("click", ldJson);

ldJson().catch((e1) => setSt("Error al cargar lista UAD: " + e1.message));
</script>
</body>
</html>