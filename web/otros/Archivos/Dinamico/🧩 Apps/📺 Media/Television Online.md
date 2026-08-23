## Reproductor

<style>
#ctw{--ct-r:var(--r-md,16px);display:flex;flex-direction:column;gap:12px}
#ctw *{box-sizing:border-box}
#ctw button{cursor:pointer;font-family:inherit}
.ct-card{border:1px solid rgba(255,255,255,.1);border-radius:var(--ct-r);padding:14px}
.ct-h{display:flex;align-items:center;gap:10px;margin-bottom:10px}
.ct-h h3{margin:0;border:none!important;font-size:1rem;flex:1}
.ct-b{border:none;border-radius:var(--ct-r);padding:10px 16px;font-size:.85rem;background:rgba(255,255,255,.08);color:#fff}
.ct-b.on{background:var(--accent,#4ade80);color:#000;font-weight:600}
.ct-b:disabled{opacity:.4;cursor:not-allowed}
.ct-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
#ct-qr{width:190px;height:190px;background:#fff;border-radius:var(--ct-r);padding:8px;display:flex;align-items:center;justify-content:center;margin:0 auto}
#ct-code{text-align:center;font-size:1.6rem;font-weight:700;letter-spacing:.09em;margin:10px 0 2px}
#ct-hint{text-align:center;font-size:.76rem;color:rgba(255,255,255,.55);margin-bottom:12px}
#ct-join{flex:1;min-width:150px;padding:10px;border-radius:var(--ct-r);border:1px solid rgba(255,255,255,.15);background:rgba(0,0,0,.25);color:#fff;font-size:.9rem}
.ct-mod{display:none;position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.92);flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px}
.ct-mod.on{display:flex}
#ct-reader{width:100%;max-width:360px}
#ct-reader video{width:100%!important;border-radius:var(--ct-r)}
#ct-reader img{display:none!important}
#ct-wait{display:none;text-align:center;padding:20px 10px;font-size:.95rem;color:rgba(255,255,255,.72)}
#ct-wait.on{display:block}
#ct-send.off{display:none}
#ct-main{display:none}
#ct-main.on{display:block}
#ct-pair.off{display:none}
#ct-link{width:100%;padding:10px;border-radius:var(--ct-r);border:1px solid rgba(255,255,255,.15);background:rgba(0,0,0,.25);color:#fff;font-size:.85rem;margin-bottom:8px}
#ct-video{width:100%;max-height:64vh;background:#000;border-radius:var(--ct-r);display:none}
#ct-video.on{display:block}
#ct-msg{font-size:.82rem;padding:9px 12px;border-radius:var(--ct-r);background:rgba(255,255,255,.06);margin-top:8px;display:none}
#ct-msg.on{display:block}
#ct-msg.err{background:rgba(248,113,113,.18);color:#fca5a5}
#ct-bar{height:5px;border-radius:99px;background:rgba(255,255,255,.1);overflow:hidden;margin-top:8px;display:none}
#ct-bar.on{display:block}
#ct-bar i{display:block;height:100%;width:0;background:var(--accent,#4ade80);transition:width .3s}
.ct-hid{display:none}
</style>

<div id="ctw">
<div class="ct-card" id="ct-pair">
<div class="ct-h"><h3>Conectar TV y telefono</h3></div>
<div id="ct-qr"></div>
<div id="ct-code">...</div>
<div id="ct-hint">Escanea este codigo desde el otro dispositivo</div>
<div class="ct-row">
<input id="ct-join" placeholder="Codigo del otro dispositivo" autocomplete="off">
<button class="ct-b" id="ct-go">Unirse</button>
<button class="ct-b" id="ct-scan" title="Escanear con la camara">📷</button>
</div>
</div>
<div class="ct-card" id="ct-main">
<div class="ct-h"><h3 id="ct-tt">Conectado</h3></div>
<div id="ct-wait">Esperando contenido del otro dispositivo</div>
<div id="ct-send">
<input id="ct-link" placeholder="Pega un enlace https de video" autocomplete="off">
<div class="ct-row">
<button class="ct-b on" id="ct-send-link">Enviar enlace</button>
<button class="ct-b" id="ct-send-file">Enviar archivo</button>
<button class="ct-b ct-hid" id="ct-send-scr">Espejar pantalla</button>
<button class="ct-b" id="ct-stop">Detener</button>
</div>
</div>
<input type="file" id="ct-fi" accept="video/*,audio/*" class="ct-hid">
<div id="ct-bar"><i id="ct-bar-i"></i></div>
<video id="ct-video" controls playsinline></video>
</div>
<div id="ct-msg"></div>
<div class="ct-mod" id="ct-cmod">
<div id="ct-reader"></div>
<button class="ct-b" id="ct-ccl">Cerrar</button>
</div>
</div>

<script>
(function(){
const CTE=document.getElementById('ctw');
if(!CTE)return;
const $=i=>document.getElementById(i);
const API='/api/chat',PING=10000;
const M_PEER='https://esm.unpkg.com/peerjs@1.5.5?bundle&target=esnext';
const M_WT='https://esm.sh/webtorrent@3.0.16/dist/webtorrent.min.js';
const M_HCS='https://esm.sh/hybrid-chunk-store@1.2.6';
const M_QR='https://esm.unpkg.com/qr-creator@1.0.0?bundle&target=esnext';
const M_H5Q='https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js';
let peer=null,pid=null,room=null,token=null,pingIv=null,conns={},wl=null;
let wt=null,HCS=null,curTorrent=null,qrCam=null,scrStream=null,curCall=null;
let dead=false,isHost=true,myCode='',hbIv=null,miss={},seedT=null,linked=false,joinTo=null;
const HP=location.hash.replace(/^#/,'').split('#');
const CTP=HP[0]||'';
const PRE=(HP[1]||'').trim().toUpperCase();

async function api(m,p,b){
  const o={method:m,headers:{'Content-Type':'application/json'}};
  if(b)o.body=JSON.stringify(b);
  const r=await fetch(API+p,o);
  const d=await r.json().catch(()=>({}));
  if(!r.ok)throw Object.assign(new Error(d.error||String(r.status)),{status:r.status});
  return d;
}
function msg(t,err){
  const e=$('ct-msg');
  e.textContent=t;
  e.classList.toggle('err',!!err);
  e.classList.toggle('on',!!t);
}
function bar(v){
  const b=$('ct-bar');
  if(v==null){b.classList.remove('on');return;}
  b.classList.add('on');
  $('ct-bar-i').style.width=Math.max(0,Math.min(100,v))+'%';
}
function genCode(){
  const A='ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let s='';
  for(let i=0;i<5;i++)s+=A[Math.floor(Math.random()*A.length)];
  return s;
}

async function wlGet(){
  if(!('wakeLock' in navigator)||wl||dead)return;
  try{wl=await navigator.wakeLock.request('screen');wl.addEventListener('release',()=>{wl=null;});}catch(e){}
}
async function wlDrop(){
  if(wl){await wl.release().catch(()=>{});wl=null;}
}
function onVis(){
  if(document.visibilityState==='visible'&&!wl&&!dead)wlGet();
}

async function initPeer(){
  if(peer&&!peer.destroyed&&pid)return;
  const pm=await import(M_PEER);
  const Peer=pm.Peer||pm.default;
  await new Promise((res,rej)=>{
    peer=new Peer();
    peer.once('open',id=>{
      pid=id;
      peer.on('connection',c=>hookConn(c));
      peer.on('call',call=>{
        call.answer();
        call.on('stream',s=>playStream(s));
        curCall=call;
      });
      peer.on('disconnected',()=>{if(room&&!dead)peer.reconnect();});
      res();
    });
    peer.once('error',rej);
  });
}

function hookConn(c){
  conns[c.peer]=c;
  miss[c.peer]=0;
  c.on('open',()=>{
    linked=true;
    clearTimeout(joinTo);
    msg('');
    $('ct-pair').classList.add('off');
    $('ct-main').classList.add('on');
    $('ct-tt').textContent=isHost?'Modo TV':'Enviar a la TV';
    $('ct-wait').classList.toggle('on',isHost);
    $('ct-send').classList.toggle('off',isHost);
    startHB();
  });
  c.on('data',d=>onData(d,c.peer));
  c.on('close',()=>dropPeer(c.peer));
  c.on('error',()=>dropPeer(c.peer));
}
function dropPeer(p){
  const c=conns[p];
  if(c){try{c.close();}catch(e){}}
  delete conns[p];delete miss[p];
  if(Object.keys(conns).length)return;
  if(linked)resetPair('Se desconecto el otro dispositivo');
}
function send(d){
  Object.values(conns).forEach(c=>{if(c.open)try{c.send(d);}catch(e){}});
}
function startHB(){
  if(hbIv)return;
  hbIv=setInterval(()=>{
    Object.keys(conns).forEach(p=>{
      const c=conns[p];
      if(!c||!c.open){dropPeer(p);return;}
      miss[p]=(miss[p]||0)+1;
      if(miss[p]>3){dropPeer(p);return;}
      try{c.send({t:'ping'});}catch(e){dropPeer(p);}
    });
  },5000);
}
function stopHB(){if(hbIv){clearInterval(hbIv);hbIv=null;}}
async function resetPair(txt){
  linked=false;
  clearTimeout(joinTo);
  stopHB();
  stopAll(false);
  $('ct-main').classList.remove('on');
  $('ct-pair').classList.remove('off');
  msg(txt||'',!!txt);
  if(dead)return;
  isHost=true;
  myCode=genCode();
  await joinRoom('cast-'+myCode);
  showQR(myCode);
}

async function joinRoom(rid){
  await initPeer();
  let d;
  try{d=await api('POST','/rooms/'+rid+'/join',{pw:'',pid,nick:'cast'});}
  catch(e){msg(e.status===429?'Demasiados intentos, espera un rato':'Error al unirse',true);return false;}
  room=rid;token=d.token;
  connectMissing(d.peers);
  startPing();
  return true;
}
function connectMissing(peers){
  (peers||[]).forEach(p=>{
    if(p.pid===pid||conns[p.pid])return;
    hookConn(peer.connect(p.pid,{reliable:true}));
  });
}
function startPing(){
  stopPing();
  pingIv=setInterval(async()=>{
    if(!room)return;
    try{
      const d=await api('POST','/rooms/'+room+'/ping',{pid,token});
      connectMissing(d.peers);
    }catch(e){}
  },PING);
}
function stopPing(){if(pingIv){clearInterval(pingIv);pingIv=null;}}
function leaveRoom(){
  if(room&&pid)api('DELETE','/rooms/'+room+'/leave',{pid,token}).catch(()=>{});
  stopPing();
  room=null;token=null;
}

async function showQR(code){
  $('ct-code').textContent=code;
  try{
    const QR=(await import(M_QR)).default;
    const box=$('ct-qr');
    box.innerHTML='';
    QR.render({text:code,radius:.4,ecLevel:'M',size:174,fill:'#000',background:'#fff'},box);
  }catch(e){$('ct-qr').textContent='QR no disponible';}
}

function loadJS(u){
  return new Promise((res,rej)=>{
    const s=document.createElement('script');
    s.src=u;s.onload=res;s.onerror=rej;
    document.head.appendChild(s);
  });
}
async function scan(){
  if(qrCam)return;
  $('ct-cmod').classList.add('on');
  msg('Iniciando camara...');
  try{
    if(!window.Html5Qrcode)await loadJS(M_H5Q);
    $('ct-reader').innerHTML='';
    qrCam=new Html5Qrcode('ct-reader');
    await qrCam.start({facingMode:'environment'},{fps:10,qrbox:{width:240,height:240}},raw=>{
      const s=String(raw||'').trim();
      const code=(s.includes('#')?s.split('#').pop():s).trim().toUpperCase();
      if(!code)return;
      stopScan();
      $('ct-join').value=code;
      doJoin();
    },()=>{});
    msg('Apunta al codigo QR');
  }catch(e){
    stopScan();
    msg('Error camara',true);
  }
}
function stopScan(){
  const c=qrCam;
  qrCam=null;
  if(c)c.stop().catch(()=>{}).then(()=>{try{c.clear();}catch(e){}});
  $('ct-cmod').classList.remove('on');
}

async function doJoin(){
  const code=($('ct-join').value||'').trim().toUpperCase();
  if(!code)return;
  if(code===myCode){msg('Ese es tu propio codigo',true);return;}
  msg('Conectando...');
  leaveRoom();
  isHost=false;
  if(!await joinRoom('cast-'+code))return;
  clearTimeout(joinTo);
  joinTo=setTimeout(()=>{
    if(!linked)msg('No se encontro ese codigo',true);
  },15000);
}

function fsReq(){
  const v=$('ct-video');
  if(v.requestFullscreen)return v.requestFullscreen();
  if(v.webkitRequestFullscreen)return Promise.resolve(v.webkitRequestFullscreen());
  if(v.webkitEnterFullscreen)return Promise.resolve(v.webkitEnterFullscreen());
  return Promise.reject();
}
function exitFS(){
  if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});
  else if(document.webkitFullscreenElement&&document.webkitExitFullscreen)document.webkitExitFullscreen();
}
function playStream(s){
  const v=$('ct-video');
  v.classList.add('on');
  v.srcObject=s;
  v.play().catch(()=>msg('Toca el video para reproducir'));
}
function playSrc(u){
  const v=$('ct-video');
  v.classList.add('on');
  v.srcObject=null;
  v.src=u;
  v.play().catch(()=>msg('Toca el video para reproducir'));
}

async function playLink(u){
  const v=$('ct-video');
  msg('Cargando enlace...');
  const ok=await new Promise(res=>{
    const done=r=>{v.removeEventListener('error',onE);v.removeEventListener('loadeddata',onL);res(r);};
    const onE=()=>done(false),onL=()=>done(true);
    v.addEventListener('error',onE,{once:true});
    v.addEventListener('loadeddata',onL,{once:true});
    playSrc(u);
    setTimeout(()=>done(false),12000);
  });
  if(ok){msg('');return;}
  msg('No se pudo reproducir directo, descargando...');
  try{
    const r=await fetch(u);
    if(!r.ok)throw 0;
    const b=await r.blob();
    playSrc(URL.createObjectURL(b));
    msg('');
  }catch(e){
    msg('Enlace no compatible',true);
  }
}

async function getWT(){
  if(wt)return wt;
  const[a,b]=await Promise.all([import(M_WT),import(M_HCS)]);
  HCS=b.default||b;
  wt=new(a.default||a)();
  wt.on('error',e=>msg('Error Archivo '+(e&&e.message?e.message:''),true));
  return wt;
}
async function isFrag(f){
  try{
    const u=new Uint8Array(await f.slice(0,65536).arrayBuffer());
    for(let i=0;i<u.length-3;i++)if(u[i]===109&&u[i+1]===111&&u[i+2]===111&&u[i+3]===102)return true;
  }catch(e){}
  return false;
}
async function sendFile(f){
  msg('Preparando archivo...');
  let frag=false,c=null;
  try{
    frag=(f.type||'').includes('webm')||await isFrag(f);
    c=await getWT();
  }catch(e){msg('No se pudo preparar el envio',true);return;}
  if(seedT){try{seedT.destroy();}catch(e){}seedT=null;}
  try{
  c.seed(f,{name:f.name,store:HCS},t=>{
    seedT=t;
    send({t:'file',magnet:t.magnetURI,name:f.name,mime:f.type||'',frag});
    msg('Esperando que la TV empiece a descargar');
    bar(0);
    t.on('upload',()=>{
      const p=Math.min(100,t.uploaded/f.size*100);
      msg('Enviando '+f.name);
      bar(p);
    });
  });
  }catch(e){msg('No se pudo preparar el envio',true);}
}
async function recvFile(d){
  msg(d.frag?'Descargando, ya se puede ver':'Descargando, hay que esperar a que termine');
  bar(0);
  let c;
  try{c=await getWT();}catch(e){msg('No se pudo recibir el archivo',true);bar(null);return;}
  if(curTorrent){curTorrent.destroy();curTorrent=null;}
  c.add(d.magnet,{store:HCS},t=>{
    curTorrent=t;
    const f=t.files[0];
    if(!f){msg('Error Archivo, torrent vacio',true);return;}
    t.on('download',()=>bar(t.progress*100));
    if(d.frag&&f.streamTo){
      const v=$('ct-video');
      v.classList.add('on');v.srcObject=null;
      try{f.streamTo(v);}catch(e){}
      v.play().catch(()=>{});
      msg('');
    }
    t.once('done',async()=>{
      bar(null);
      send({t:'fileok'});
      if(d.frag)return;
      try{
        playSrc(URL.createObjectURL(await f.blob()));
        msg('');
      }catch(e){msg('Error Archivo, no se pudo abrir',true);}
    });
  });
}

async function shareScreen(){
  if(!navigator.mediaDevices||!navigator.mediaDevices.getDisplayMedia){msg('Este dispositivo no puede compartir pantalla',true);return;}
  try{scrStream=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:30},audio:true});}
  catch(e){return;}
  const to=Object.keys(conns)[0];
  if(!to){msg('Sin conexion',true);return;}
  curCall=peer.call(to,scrStream);
  msg('Compartiendo pantalla');
  scrStream.getVideoTracks()[0].addEventListener('ended',()=>stopAll(true));
}

function stopAll(local){
  if(scrStream){scrStream.getTracks().forEach(t=>t.stop());scrStream=null;}
  if(curCall){try{curCall.close();}catch(e){}curCall=null;}
  if(curTorrent){try{curTorrent.destroy();}catch(e){}curTorrent=null;}
  exitFS();
  const v=$('ct-video');
  v.pause();v.removeAttribute('src');v.srcObject=null;v.classList.remove('on');v.load();
  bar(null);msg('');
  if(local)send({t:'stop'});
}

function onData(d,from){
  if(!d||!d.t)return;
  if(from)miss[from]=0;
  if(d.t==='ping'){const c=conns[from];if(c&&c.open)try{c.send({t:'pong'});}catch(e){}return;}
  if(d.t==='pong')return;
  if(d.t==='fileok'){bar(null);msg('Enviado');return;}
  if(d.t==='link')playLink(d.v);
  else if(d.t==='file')recvFile(d);
  else if(d.t==='stop')stopAll(false);
}

$('ct-video').addEventListener('playing',()=>fsReq().catch(()=>{}));
$('ct-go').onclick=doJoin;
$('ct-scan').onclick=scan;
$('ct-ccl').onclick=stopScan;
$('ct-join').addEventListener('keydown',e=>{if(e.key==='Enter')doJoin();});
$('ct-send-link').onclick=()=>{
  const u=($('ct-link').value||'').trim();
  if(!u)return;
  send({t:'link',v:u});
  msg('Enlace enviado');
};
$('ct-send-file').onclick=()=>$('ct-fi').click();
$('ct-fi').onchange=e=>{const f=e.target.files[0];if(f)sendFile(f);};
$('ct-send-scr').onclick=shareScreen;
$('ct-stop').onclick=()=>stopAll(true);

if(navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia)$('ct-send-scr').classList.remove('ct-hid');

function teardown(){
  dead=true;
  stopScan();
  stopHB();
  stopAll(false);
  leaveRoom();
  Object.values(conns).forEach(c=>{try{c.close();}catch(e){}});
  conns={};
  if(wt){try{wt.destroy();}catch(e){}wt=null;}
  if(peer&&!peer.destroyed){try{peer.destroy();}catch(e){}}
  peer=null;pid=null;
  wlDrop();
  document.removeEventListener('visibilitychange',onVis);
}
document.addEventListener('visibilitychange',onVis);
const cEl=document.getElementById('content');
if(cEl)cEl.addEventListener('contentUnload',teardown,{once:true});

(async function(){
  wlGet();
  try{
    await initPeer();
  }catch(e){msg('Error Conexion, no se pudo iniciar',true);return;}
  if(PRE){
    $('ct-join').value=PRE;
    showQR(PRE);
    doJoin();
    return;
  }
  isHost=true;
  myCode=genCode();
  await joinRoom('cast-'+myCode);
  showQR(myCode);
})();
})();
</script>

<div class="contenedor-imagenes-animado" data-title="📺 Lista Canales" data-gallery-key="TeleOnline" data-json-path="web/otros/Archivos/Imagenes/TeleOnline/data.json"></div>
