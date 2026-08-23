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
#ct-cam{display:none;width:100%;max-width:330px;border-radius:var(--ct-r);margin:10px auto 0}
#ct-cam.on{display:block}
#ct-main{display:none}
#ct-main.on{display:block}
#ct-pair.off{display:none}
.ct-net{font-size:.74rem;padding:3px 9px;border-radius:99px;background:rgba(255,255,255,.08)}
.ct-net.local{background:rgba(74,222,128,.22);color:#4ade80}
.ct-net.net{background:rgba(250,204,21,.2);color:#facc15}
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
<button class="ct-b" id="ct-scan">Escanear</button>
</div>
<video id="ct-cam" playsinline muted></video>
</div>
<div class="ct-card" id="ct-main">
<div class="ct-h"><h3>Conectado</h3><span class="ct-net" id="ct-net">Revisando</span></div>
<input id="ct-link" placeholder="Pega un enlace https de video" autocomplete="off">
<div class="ct-row">
<button class="ct-b on" id="ct-send-link">Enviar enlace</button>
<button class="ct-b" id="ct-send-file">Enviar archivo</button>
<button class="ct-b ct-hid" id="ct-send-scr">Espejar pantalla</button>
<button class="ct-b" id="ct-stop">Detener</button>
</div>
<input type="file" id="ct-fi" accept="video/*,audio/*" class="ct-hid">
<div id="ct-bar"><i id="ct-bar-i"></i></div>
<div id="ct-msg"></div>
<video id="ct-video" controls playsinline></video>
</div>
</div>

<script>
(function(){
const CTE=document.getElementById('ctw');
if(!CTE)return;
const $=i=>document.getElementById(i);
const API='/api/chat',PING=10000;
const M_PEER='https://esm.unpkg.com/peerjs@1.5.5?bundle&target=esnext';
const M_WT='https://esm.unpkg.com/webtorrent@3.0.21?bundle&target=esnext';
const M_HCS='https://esm.unpkg.com/hybrid-chunk-store@1.2.6?bundle&target=esnext';
const M_QR='https://esm.unpkg.com/qr-creator@1.0.0?bundle&target=esnext';
let peer=null,pid=null,room=null,token=null,pingIv=null,conns={},wl=null;
let wt=null,HCS=null,curTorrent=null,camStream=null,scanRun=false,scrStream=null,curCall=null;
let dead=false;
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
  c.on('open',()=>{
    $('ct-pair').classList.add('off');
    $('ct-main').classList.add('on');
    netCheck(c);
  });
  c.on('data',d=>onData(d));
  c.on('close',()=>{delete conns[c.peer];if(!Object.keys(conns).length)msg('Se desconecto el otro dispositivo',true);});
  c.on('error',()=>{delete conns[c.peer];});
}
function send(d){
  Object.values(conns).forEach(c=>{if(c.open)try{c.send(d);}catch(e){}});
}

async function netCheck(c){
  const el=$('ct-net');
  const pc=c.peerConnection;
  if(!pc){el.textContent='Conectado';return;}
  for(let i=0;i<10;i++){
    try{
      const st=await pc.getStats();
      let pair=null;
      st.forEach(r=>{if(r.type==='candidate-pair'&&r.state==='succeeded')pair=r;});
      if(pair){
        const lc=st.get(pair.localCandidateId),rc=st.get(pair.remoteCandidateId);
        const a=lc&&lc.candidateType,b=rc&&rc.candidateType;
        if(a==='host'&&b==='host'){el.textContent='Red local, no gasta datos';el.className='ct-net local';}
        else{el.textContent='Por internet, gasta datos';el.className='ct-net net';}
        return;
      }
    }catch(e){}
    await new Promise(r=>setTimeout(r,600));
  }
  el.textContent='Conectado';
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
    QR.render({text:location.origin+location.pathname+'#'+CTP+'#'+code,radius:.4,ecLevel:'M',size:174,fill:'#000',background:'#fff'},box);
  }catch(e){$('ct-qr').textContent='QR no disponible';}
}

async function scan(){
  if(scanRun)return;
  if(!('BarcodeDetector'in window)){msg('Este navegador no puede escanear, escribe el codigo',true);return;}
  const v=$('ct-cam');
  try{camStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}});}
  catch(e){msg('Sin acceso a la camara',true);return;}
  v.srcObject=camStream;v.classList.add('on');
  await v.play().catch(()=>{});
  scanRun=true;
  const det=new BarcodeDetector({formats:['qr_code']});
  while(scanRun&&!dead){
    try{
      const r=await det.detect(v);
      if(r&&r.length){
        const raw=(r[0].rawValue||'').trim();
        const code=(raw.includes('#')?raw.split('#').pop():raw).toUpperCase();
        if(code){stopScan();$('ct-join').value=code;doJoin();return;}
      }
    }catch(e){}
    await new Promise(r=>setTimeout(r,350));
  }
}
function stopScan(){
  scanRun=false;
  if(camStream){camStream.getTracks().forEach(t=>t.stop());camStream=null;}
  const v=$('ct-cam');
  v.srcObject=null;v.classList.remove('on');
}

async function doJoin(){
  const code=($('ct-join').value||'').trim().toUpperCase();
  if(!code)return;
  msg('Conectando...');
  leaveRoom();
  if(await joinRoom('cast-'+code))msg('');
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
    msg('Error Enlace, el servidor no lo permite o no es https',true);
  }
}

async function getWT(){
  if(wt)return wt;
  const[a,b]=await Promise.all([import(M_WT),import(M_HCS)]);
  HCS=b.default||b;
  wt=new(a.default||a)();
  wt.on('error',()=>{});
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
  const frag=(f.type||'').includes('webm')||await isFrag(f);
  const c=await getWT();
  c.seed(f,{name:f.name,store:HCS},t=>{
    send({t:'file',magnet:t.magnetURI,name:f.name,mime:f.type||'',frag});
    msg('Enviando '+f.name);
    t.on('upload',()=>bar(t.progress*100));
  });
}
async function recvFile(d){
  msg(d.frag?'Descargando, se reproduce mientras baja':'Este formato necesita descargarse entero antes de verse');
  bar(0);
  const c=await getWT();
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
  const v=$('ct-video');
  v.pause();v.removeAttribute('src');v.srcObject=null;v.classList.remove('on');v.load();
  bar(null);msg('');
  if(local)send({t:'stop'});
}

function onData(d){
  if(!d||!d.t)return;
  if(d.t==='link')playLink(d.v);
  else if(d.t==='file')recvFile(d);
  else if(d.t==='stop')stopAll(false);
}

$('ct-go').onclick=doJoin;
$('ct-scan').onclick=scan;
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
  const code=genCode();
  await joinRoom('cast-'+code);
  showQR(code);
})();
})();
</script>

<div class="contenedor-imagenes-animado" data-title="📺 Lista Canales" data-gallery-key="TeleOnline" data-json-path="web/otros/Archivos/Imagenes/TeleOnline/data.json"></div>
