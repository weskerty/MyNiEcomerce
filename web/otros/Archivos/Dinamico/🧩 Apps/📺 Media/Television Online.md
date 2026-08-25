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
#ct-stop-w{display:none;margin-top:8px}
#ct-stop-w.on{display:flex}
#ct-rc{display:none;margin-top:10px;padding-top:10px;border-top:1px solid rgba(255,255,255,.1)}
#ct-rc.on{display:block}
#ct-rc-t{font-size:.75rem;color:rgba(255,255,255,.6);white-space:nowrap;margin-left:auto}
#ct-rc-s{width:100%;margin-top:8px;accent-color:var(--accent,#4ade80)}
#ct-wt{display:none;justify-content:center;padding:12px 0}
#ct-wt.on{display:flex}
#ct-wt img{width:52px;height:52px;object-fit:contain}
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
</div>
<div id="ct-rc">
<div class="ct-row">
<button class="ct-b" id="ct-rc-b" title="Pausa">⏸</button>
<button class="ct-b" id="ct-rc-m" title="Atras 10s">⏪</button>
<button class="ct-b" id="ct-rc-p" title="Adelante 10s">⏩</button>
<span id="ct-rc-t">0:00 / 0:00</span>
</div>
<input type="range" id="ct-rc-s" min="0" max="1000" value="0">
</div>
</div>
<div class="ct-row" id="ct-stop-w"><button class="ct-b" id="ct-stop">Detener</button><button class="ct-b ct-hid" id="ct-fs">Pantalla Completa</button></div>
<input type="file" id="ct-fi" accept="video/*,audio/*" class="ct-hid">
<div id="ct-bar"><i id="ct-bar-i"></i></div>
<video id="ct-video" controls playsinline></video>
</div>
<div id="ct-wt"><img alt=""></div>
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
const API='/api/chat',PING=10000,CT_RT=20000,CT_MB=209715200;
const M_PEER='https://esm.unpkg.com/peerjs@1.5.5?bundle&target=esnext';
const M_WT='https://esm.sh/webtorrent@3.0.16/dist/webtorrent.min.js';
const M_HCS='https://esm.sh/hybrid-chunk-store@1.2.6';
const M_QR='https://esm.unpkg.com/qr-creator@1.0.0?bundle&target=esnext';
const M_H5Q='https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js';
const M_HLS='https://unpkg.com/hls.js@1.7.1/dist/hls.min.mjs';
let peer=null,pid=null,room=null,token=null,pingIv=null,conns={},wl=null;
let wt=null,HCS=null,curTorrent=null,qrCam=null,scrStream=null,curCall=null;
let dead=false,isHost=true,myCode='',hbIv=null,miss={},seedT=null,linked=false,joinTo=null;
let cSince={},curURL=null,lastProg=-1,hls=null,wasLinked=false;
let stIv=null,rst={p:true,ct:0,d:0},rcDrag=false;
const HP=location.hash.replace(/^#/,'').split('#');
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
function wtOn(){
  const w=$('ct-wt'),i=w.querySelector('img');
  if(!i.src)i.src=(window.__CFG&&window.__CFG.waitAnim)||'';
  w.classList.add('on');
}
function wtOff(){$('ct-wt').classList.remove('on');}
async function pasteIn(){
  try{
    const el=$('ct-link');
    if(el.value.trim())return;
    if(!navigator.clipboard||!navigator.clipboard.readText)return;
    const t=(await navigator.clipboard.readText()||'').trim();
    if(t&&t.length<2048&&okURL(t))el.value=t;
  }catch(e){}
}
function bar(v){
  const b=$('ct-bar');
  if(v==null){b.classList.remove('on');return;}
  b.classList.add('on');
  $('ct-bar-i').style.width=Math.max(0,Math.min(100,v))+'%';
}
function genCode(){
  const A='ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  const r=crypto.getRandomValues(new Uint32Array(5));
  let s='';
  for(let i=0;i<5;i++)s+=A[r[i]%A.length];
  return s;
}
function okURL(u){
  try{const x=new URL(u,location.href);return x.protocol==='https:'||x.protocol==='http:';}
  catch(e){return false;}
}
function isHLS(u){return /\.m3u8($|[?#])/i.test(u);}
function killHLS(){if(hls){try{hls.destroy();}catch(e){}hls=null;}}
const fmtT=s=>{s=Math.max(0,Math.floor(s||0));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0');};
function stSend(){
  const v=$('ct-video');
  if(!v.classList.contains('on'))return;
  send({t:'st',p:v.paused,ct:v.currentTime||0,d:isFinite(v.duration)?v.duration:0});
}
function stStart(){if(!stIv)stIv=setInterval(stSend,1000);}
function stStop(){if(stIv){clearInterval(stIv);stIv=null;}}
function rcShow(d){
  rst=d;
  $('ct-rc').classList.add('on');
  $('ct-rc-b').textContent=d.p?'▶':'⏸';
  $('ct-rc-t').textContent=fmtT(d.ct)+' / '+(d.d?fmtT(d.d):'--:--');
  const sl=$('ct-rc-s');
  sl.disabled=!d.d;
  if(!rcDrag&&d.d>0)sl.value=Math.round(d.ct/d.d*1000);
}
function rcHide(){
  $('ct-rc').classList.remove('on');
  rst={p:true,ct:0,d:0};rcDrag=false;
}
function vLive(){
  const v=$('ct-video');
  return v.classList.contains('on')&&!v.ended&&!!(v.currentSrc||v.srcObject);
}

async function wlGet(){
  if(!('wakeLock' in navigator)||wl||dead)return;
  try{wl=await navigator.wakeLock.request('screen');wl.addEventListener('release',()=>{wl=null;});}catch(e){}
}
async function wlDrop(){
  if(wl){await wl.release().catch(()=>{});wl=null;}
}
function onVis(){
  if(document.visibilityState!=='visible'||dead)return;
  wlGet();
  chkConn();
}
function chkConn(){
  if(dead)return;
  Object.keys(conns).forEach(p=>{
    const c=conns[p];
    if(c&&c.open)return;
    if(c){try{c.close();}catch(e){}}
    delete conns[p];delete miss[p];
  });
  if(Object.keys(conns).length||!wasLinked)return;
  if(linked)loseLink('Se desconecto el otro dispositivo');
  rejoin();
}
async function rejoin(){
  if(dead||!room||linked)return;
  msg('Reconectando...');
  cSince={};
  await joinRoom(room);
}

async function initPeer(){
  if(peer&&!peer.destroyed&&pid)return;
  const pm=await import(M_PEER);
  const Peer=pm.Peer||pm.default;
  await new Promise((res,rej)=>{
    peer=new Peer();
    peer.on('error',e=>{
      const t=e&&e.type;
      if(t==='peer-unavailable')return;
      if(!pid){rej(e);return;}
      if(!dead)msg('Error Conexion '+(t||''),true);
    });
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
  });
}

function hookConn(c){
  conns[c.peer]=c;
  miss[c.peer]=0;
  c.on('open',()=>{
    linked=true;wasLinked=true;
    delete cSince[c.peer];
    clearTimeout(joinTo);
    msg('');
    $('ct-pair').classList.add('off');
    $('ct-main').classList.add('on');
    $('ct-tt').textContent=isHost?'Modo TV':'Enviar a la TV';
    $('ct-wait').classList.toggle('on',isHost);
    $('ct-send').classList.toggle('off',isHost);
    $('ct-stop-w').classList.add('on');
    $('ct-go').disabled=false;
    wtOff();
    if(!isHost)pasteIn();
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
  if(Object.keys(conns).length||!linked)return;
  loseLink('Se desconecto el otro dispositivo');
}
function loseLink(txt){
  linked=false;
  stopHB();
  rcHide();
  msg(txt,true);
  if(vLive())return;
  $('ct-main').classList.remove('on');
  $('ct-pair').classList.remove('off');
  $('ct-stop-w').classList.remove('on');
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
  linked=false;wasLinked=false;
  clearTimeout(joinTo);
  stopHB();
  stopAll(false);
  cSince={};
  $('ct-stop-w').classList.remove('on');
  $('ct-main').classList.remove('on');
  $('ct-pair').classList.remove('off');
  msg(txt||'',!!txt);
  if(dead)return;
  leaveRoom();
  isHost=true;
  if(!myCode)myCode=genCode();
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
  if(!peer||peer.destroyed)return;
  (peers||[]).forEach(p=>{
    if(p.pid===pid)return;
    const c=conns[p.pid];
    if(c&&c.open)return;
    if(cSince[p.pid]&&Date.now()-cSince[p.pid]<CT_RT)return;
    if(c){try{c.close();}catch(e){}delete conns[p.pid];delete miss[p.pid];}
    cSince[p.pid]=Date.now();
    const nc=peer.connect(p.pid,{reliable:true});
    if(nc)hookConn(nc);
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
    QR.render({text:code,radius:.4,ecLevel:'M',size:174,quiet:2,fill:'#000',background:'#fff'},box);
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
    const inst=new Html5Qrcode('ct-reader');
    qrCam=inst;
    await inst.start({facingMode:'environment'},{fps:10,qrbox:{width:240,height:240}},raw=>{
      const s=String(raw||'').trim();
      const code=(s.includes('#')?s.split('#').pop():s).trim().toUpperCase();
      if(!code)return;
      stopScan();
      $('ct-join').value=code;
      doJoin();
    },()=>{});
    if(qrCam!==inst){killScan(inst);return;}
    msg('Apunta al codigo QR');
  }catch(e){
    stopScan();
    msg('Error camara',true);
  }
}
function killScan(c){
  if(!c)return;
  Promise.resolve().then(()=>c.stop()).catch(()=>{}).then(()=>{try{c.clear();}catch(e){}});
}
function stopScan(){
  const c=qrCam;
  qrCam=null;
  killScan(c);
  $('ct-cmod').classList.remove('on');
}

async function doJoin(){
  const code=($('ct-join').value||'').trim().toUpperCase();
  if(!code)return;
  if(code===myCode){msg('Ese es tu propio codigo',true);return;}
  if($('ct-go').disabled)return;
  $('ct-go').disabled=true;
  wtOn();
  msg('Conectando...');
  leaveRoom();
  isHost=false;
  if(!await joinRoom('cast-'+code)){$('ct-go').disabled=false;wtOff();return;}
  clearTimeout(joinTo);
  joinTo=setTimeout(()=>{
    $('ct-go').disabled=false;
    wtOff();
    if(!linked)resetPair('No se encontro ese codigo');
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
function fsGo(){fsReq().catch(()=>{});}
function vShow(){
  $('ct-video').classList.add('on');
  $('ct-stop-w').classList.add('on');
  $('ct-fs').classList.remove('ct-hid');
  stStart();
  fsGo();
}
function playStream(s){
  const v=$('ct-video');
  vShow();
  v.srcObject=s;
  v.play().catch(()=>msg('Toca el video para verlo'));
}
function playSrc(u){
  const v=$('ct-video');
  killHLS();
  vShow();
  v.srcObject=null;
  v.src=u;
  if(curURL&&curURL!==u)URL.revokeObjectURL(curURL);
  curURL=u.slice(0,5)==='blob:'?u:null;
  v.play().catch(()=>msg('Toca el video para verlo'));
}

function vWait(ms){
  const v=$('ct-video');
  return new Promise(res=>{
    const done=r=>{clearTimeout(t);v.removeEventListener('error',onE);v.removeEventListener('loadeddata',onL);res(r);};
    const onE=()=>done(false),onL=()=>done(true);
    const t=setTimeout(()=>done(false),ms);
    v.addEventListener('error',onE);
    v.addEventListener('loadeddata',onL);
  });
}
async function tryNat(u){
  const p=vWait(12000);
  playSrc(u);
  return p;
}
async function tryDL(u){
  try{
    const r=await fetch(u);
    if(!r.ok)return false;
    if(Number(r.headers.get('content-length')||0)>CT_MB)return 'big';
    const b=await r.blob();
    const p=vWait(12000);
    playSrc(URL.createObjectURL(b));
    return p;
  }catch(e){return false;}
}
async function tryDLA(u){
  msg('Buscando otra fuente...');
  const ac=new AbortController();
  const to=setTimeout(()=>ac.abort(),45000);
  let d;
  try{
    const r=await fetch('/api/dla',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({url:u,mode:'stream'}),signal:ac.signal});
    if(!r.ok)return false;
    d=await r.json();
  }catch(e){return false;}
  finally{clearTimeout(to);}
  if(!d||!d.url||!okURL(d.url))return false;
  if(String(d.protocol||'').indexOf('dash')>=0)return false;
  msg('Reproduciendo'+(d.height?' '+d.height+'p':''));
  if(await tryNat(d.url))return true;
  return await tryHLS(d.url);
}
async function tryHLS(u){
  const v=$('ct-video');
  let H;
  try{H=(await import(M_HLS)).default;}catch(e){return false;}
  if(!H||!H.isSupported())return false;
  killHLS();
  vShow();
  v.srcObject=null;
  v.removeAttribute('src');
  if(curURL){URL.revokeObjectURL(curURL);curURL=null;}
  hls=new H();
  let fin;
  const bad=new Promise(r=>{fin=r;});
  hls.on(H.Events.ERROR,(_,d)=>{if(d&&d.fatal)fin(false);});
  hls.on(H.Events.MANIFEST_PARSED,()=>v.play().catch(()=>msg('Toca el video para verlo')));
  hls.loadSource(u);
  hls.attachMedia(v);
  const ok=await Promise.race([vWait(15000),bad]);
  if(!ok)killHLS();
  return ok;
}
async function playLink(u){
  if(!okURL(u)){msg('Enlace no valido',true);return;}
  wtOn();
  try{
    msg('Cargando enlace...');
    if(await tryNat(u)){msg('');return;}
    if(!isHLS(u)){
      msg('No se pudo reproducir directo, descargando...');
      const r=await tryDL(u);
      if(r===true){msg('');return;}
      if(r==='big'){msg('Enlace muy pesado, usa Enviar archivo',true);return;}
    }
    msg('Probando modo stream...');
    if(await tryHLS(u)){msg('');return;}
    if(await tryDLA(u)){msg('');return;}
    const v=$('ct-video');
    v.removeAttribute('src');v.load();v.classList.remove('on');
    msg('Enlace no compatible',true);
  }finally{wtOff();}
}

async function opfsDir(){
  const root=await navigator.storage.getDirectory();
  const apps=await root.getDirectoryHandle('Apps',{create:true});
  return await apps.getDirectoryHandle('Cast',{create:true});
}
async function opfsGet(name){
  const dir=await opfsDir();
  return await(await dir.getFileHandle(name)).getFile();
}
async function opfsSave(f,name){
  const dir=await opfsDir();
  const fh=await dir.getFileHandle(name,{create:true});
  await f.stream().pipeTo(await fh.createWritable());
  return await fh.getFile();
}
async function opfsClear(){
  try{
    const root=await navigator.storage.getDirectory();
    const apps=await root.getDirectoryHandle('Apps');
    await apps.removeEntry('Cast',{recursive:true});
  }catch(e){}
}

async function getWT(){
  if(wt)return wt;
  const[a,b]=await Promise.all([import(M_WT),import(M_HCS)]);
  HCS=b.default||b;
  wt=new(a.default||a)();
  wt.on('error',e=>msg('Error Archivo '+(e&&e.message?e.message:''),true));
  return wt;
}
async function sendFile(f){
  msg('Preparando archivo...');
  wtOn();
  let c=null;
  try{c=await getWT();}
  catch(e){wtOff();msg('No se pudo preparar el envio',true);return;}
  if(seedT){try{seedT.destroy({destroyStore:true});}catch(e){}seedT=null;}
  try{
  c.seed(f,{name:f.name,store:HCS,destroyStoreOnDestroy:true},t=>{
    seedT=t;
    send({t:'file',magnet:t.magnetURI,name:f.name,mime:f.type||''});
    msg('Esperando que la TV empiece a descargar');
    wtOff();
    bar(0);
  });
  }catch(e){wtOff();msg('No se pudo preparar el envio',true);}
}

async function recvFile(d){
  msg('Descargando, se vera cuando termine');
  wtOn();
  bar(0);
  lastProg=-1;
  let c;
  try{c=await getWT();}catch(e){msg('No se pudo recibir el archivo',true);bar(null);return;}
  if(curTorrent){try{curTorrent.destroy({destroyStore:true});}catch(e){}curTorrent=null;}
  await opfsClear();
  c.add(d.magnet,{store:HCS,destroyStoreOnDestroy:true},t=>{
    curTorrent=t;
    const f=t.files[0];
    if(!f){msg('Error Archivo, torrent vacio',true);return;}
    t.on('download',()=>{
      const p=t.progress*100;
      bar(p);
      if(p-lastProg>=1){lastProg=p;send({t:'prog',v:p});}
    });
    t.once('done',async()=>{
      bar(null);
      send({t:'fileok'});
      try{
        wtOff();
        msg('Guardando...');
        const ext=String(d.name||'').match(/\.[a-zA-Z0-9]{1,8}$/);
        const nm='recibido'+(ext?ext[0]:'');
        await opfsSave(f,nm);
        await new Promise(r=>{try{t.destroy({destroyStore:true},r);}catch(e){r();}});
        curTorrent=null;
        playSrc(URL.createObjectURL(await opfsGet(nm)));
        msg('');
      }catch(e){msg('Error Archivo, no se pudo abrir',true);}
    });
  });
}

async function shareScreen(){
  if(!navigator.mediaDevices||!navigator.mediaDevices.getDisplayMedia){msg('Este dispositivo no puede compartir pantalla',true);return;}
  try{scrStream=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:30},audio:true});}
  catch(e){return;}
  const to=Object.keys(conns).find(p=>conns[p]&&conns[p].open);
  if(!to){scrStream.getTracks().forEach(t=>t.stop());scrStream=null;msg('Sin conexion',true);return;}
  curCall=peer.call(to,scrStream);
  msg('Compartiendo pantalla');
  scrStream.getVideoTracks()[0].addEventListener('ended',()=>stopAll(true));
}

function stopAll(local){
  if(scrStream){scrStream.getTracks().forEach(t=>t.stop());scrStream=null;}
  if(curCall){try{curCall.close();}catch(e){}curCall=null;}
  if(curTorrent){try{curTorrent.destroy({destroyStore:true});}catch(e){}curTorrent=null;}
  killHLS();
  stStop();
  rcHide();
  wtOff();
  exitFS();
  opfsClear();
  const v=$('ct-video');
  v.pause();v.removeAttribute('src');v.srcObject=null;v.classList.remove('on');v.load();
  $('ct-fs').classList.add('ct-hid');
  if(curURL){URL.revokeObjectURL(curURL);curURL=null;}
  bar(null);msg('');
  if(local)send({t:'stop'});
}

function onData(d,from){
  if(!d||!d.t)return;
  if(from)miss[from]=0;
  if(d.t==='ping'){const c=conns[from];if(c&&c.open)try{c.send({t:'pong'});}catch(e){}return;}
  if(d.t==='pong')return;
  if(d.t==='fileok'){bar(null);msg('Enviado');return;}
  if(d.t==='prog'){bar(d.v);msg('Enviando archivo');return;}
  if(d.t==='st'){rcShow(d);return;}
  if(d.t==='ctl'){
    const v=$('ct-video');
    if(!v.classList.contains('on'))return;
    if(d.a==='play')v.play().catch(()=>{});
    else if(d.a==='pause')v.pause();
    else if(d.a==='seek'&&isFinite(d.v))v.currentTime=Math.max(0,d.v);
    stSend();
    return;
  }
  if(d.t==='link')playLink(d.v);
  else if(d.t==='file')recvFile(d);
  else if(d.t==='stop')stopAll(false);
}

$('ct-fs').onclick=fsGo;
$('ct-video').addEventListener('play',stSend);
$('ct-video').addEventListener('pause',stSend);
$('ct-video').addEventListener('seeked',stSend);
$('ct-rc-b').onclick=()=>send({t:'ctl',a:rst.p?'play':'pause'});
$('ct-rc-m').onclick=()=>send({t:'ctl',a:'seek',v:Math.max(0,rst.ct-10)});
$('ct-rc-p').onclick=()=>send({t:'ctl',a:'seek',v:rst.ct+10});
$('ct-rc-s').addEventListener('pointerdown',()=>{rcDrag=true;});
$('ct-rc-s').addEventListener('input',()=>{
  if(!rst.d)return;
  $('ct-rc-t').textContent=fmtT($('ct-rc-s').value/1000*rst.d)+' / '+fmtT(rst.d);
});
$('ct-rc-s').addEventListener('change',()=>{
  rcDrag=false;
  if(rst.d)send({t:'ctl',a:'seek',v:$('ct-rc-s').value/1000*rst.d});
});
$('ct-go').onclick=doJoin;
$('ct-scan').onclick=scan;
$('ct-ccl').onclick=stopScan;
$('ct-join').addEventListener('keydown',e=>{if(e.key==='Enter')doJoin();});
$('ct-send-link').onclick=()=>{
  const u=($('ct-link').value||'').trim();
  if(!u)return;
  if(!okURL(u)){msg('Enlace no valido',true);return;}
  send({t:'link',v:u});
  $('ct-link').value='';
  msg('Enlace enviado');
  wtOn();
  setTimeout(wtOff,6000);
};
$('ct-link').addEventListener('focus',pasteIn);
$('ct-send-file').onclick=()=>$('ct-fi').click();
$('ct-fi').onchange=e=>{const f=e.target.files[0];e.target.value='';if(f)sendFile(f);};
$('ct-send-scr').onclick=shareScreen;
$('ct-stop').onclick=()=>{
  stopAll(true);
  if(!linked&&!dead)resetPair();
};

if(navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia)$('ct-send-scr').classList.remove('ct-hid');

function teardown(){
  dead=true;
  stopScan();
  stopHB();
  stopAll(false);
  leaveRoom();
  Object.values(conns).forEach(c=>{try{c.close();}catch(e){}});
  conns={};
  if(seedT){try{seedT.destroy({destroyStore:true});}catch(e){}seedT=null;}
  if(wt){try{wt.destroy();}catch(e){}wt=null;}
  opfsClear();
  if(peer&&!peer.destroyed){try{peer.destroy();}catch(e){}}
  peer=null;pid=null;
  if(curURL){URL.revokeObjectURL(curURL);curURL=null;}
  wlDrop();
  document.removeEventListener('visibilitychange',onVis);
  window.removeEventListener('online',chkConn);
  window.removeEventListener('beforeunload',teardown);
}
document.addEventListener('visibilitychange',onVis);
window.addEventListener('online',chkConn);
window.addEventListener('beforeunload',teardown);
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
