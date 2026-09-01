## MotionCap

<style>
#mcw{--mc-r:var(--r-md,16px);display:flex;flex-direction:column;gap:12px;position:relative}
#mcw *{box-sizing:border-box}
#mcw button{cursor:pointer;font-family:inherit}
.mc-card{border:1px solid rgba(255,255,255,.1);border-radius:var(--mc-r);padding:14px}
.mc-h{display:flex;align-items:center;gap:10px;margin-bottom:10px}
.mc-h h3{margin:0;border:none!important;font-size:1rem;flex:1}
.mc-b{border:none;border-radius:var(--mc-r);padding:9px 14px;font-size:.82rem;background:rgba(255,255,255,.08);color:#fff}
.mc-b.on{background:var(--accent,#4ade80);color:#000;font-weight:600}
.mc-b:disabled{opacity:.4;cursor:not-allowed}
.mc-b.sm{padding:5px 9px;font-size:.72rem}
.mc-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
#mc-qr{width:190px;height:190px;background:#fff;border-radius:var(--mc-r);padding:8px;display:flex;align-items:center;justify-content:center;margin:0 auto}
#mc-code{text-align:center;font-size:1.6rem;font-weight:700;letter-spacing:.09em;margin:10px 0 2px}
#mc-hint{text-align:center;font-size:.76rem;color:rgba(255,255,255,.55);margin-bottom:12px}
#mc-join{flex:1;min-width:150px;padding:10px;border-radius:var(--mc-r);border:1px solid rgba(255,255,255,.15);background:rgba(0,0,0,.25);color:#fff;font-size:.9rem}
#mc-msg{font-size:.82rem;padding:9px 12px;border-radius:var(--mc-r);background:rgba(255,255,255,.06);display:none}
#mc-msg.on{display:block}
#mc-msg.err{background:rgba(248,113,113,.18);color:#fca5a5}
.mc-dv{border:1px solid rgba(255,255,255,.1);border-radius:var(--mc-r);padding:10px;margin-bottom:8px}
.mc-dv.dead{opacity:.45}
.mc-dt{display:flex;align-items:center;gap:8px;margin-bottom:8px;font-size:.85rem}
.mc-dot{width:12px;height:12px;border-radius:99px;background:rgba(255,255,255,.25);flex:none}
.mc-dn{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:monospace;font-size:.74rem}
.mc-sl{display:flex;align-items:center;gap:8px;font-size:.74rem;color:rgba(255,255,255,.6);margin-top:8px}
.mc-sl input{flex:1;accent-color:var(--accent,#4ade80)}
.mc-ct{display:flex;gap:6px;align-items:center;margin-bottom:6px}
.mc-ct select,.mc-ct input{padding:6px 8px;border-radius:var(--mc-r);border:1px solid rgba(255,255,255,.15);background:rgba(0,0,0,.25);color:#fff;font-size:.76rem}
.mc-ct select{flex:1;min-width:0}
.mc-ct input{flex:1;min-width:0}
#mc-prevs{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.mc-pv{text-align:center}
.mc-pv canvas{background:rgba(0,0,0,.3);border-radius:var(--mc-r);display:block}
.mc-pv span{font-size:.7rem;color:rgba(255,255,255,.5)}
#mc-port{width:90px;padding:8px;border-radius:var(--mc-r);border:1px solid rgba(255,255,255,.15);background:rgba(0,0,0,.25);color:#fff;font-size:.82rem}
#mc-wst{font-size:.78rem;color:rgba(255,255,255,.6)}
.mc-mod{display:none;position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.92);flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px}
.mc-mod.on{display:flex}
#mc-reader{width:100%;max-width:360px}
#mc-reader video{width:100%!important;border-radius:var(--mc-r)}
#mc-reader img{display:none!important}
#mc-host,#mc-cli{display:none}
#mc-host.on,#mc-cli.on{display:block}
#mc-go1{width:100%;padding:20px;font-size:1.1rem;font-weight:600}
#mc-surf{display:none;position:fixed;inset:0;z-index:150;background:#111;flex-direction:column;padding:18px;gap:10px;touch-action:none;user-select:none;-webkit-user-select:none}
#mc-surf.on{display:flex}
#mc-sh{display:flex;align-items:center;gap:10px;font-size:.78rem;color:rgba(255,255,255,.55)}
#mc-sh b{font-size:.9rem;color:#fff}
#mc-sb{flex:1;display:flex;flex-wrap:wrap;gap:10px;align-content:flex-start;padding:6px 2px}
#mc-sb button{flex:1 1 40%;min-height:64px;font-size:.95rem}
#mc-sj{display:flex;gap:14px;justify-content:space-between}
.mc-joy{width:132px;height:132px;border-radius:99px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);position:relative;flex:none;touch-action:none}
.mc-joy i{position:absolute;width:46px;height:46px;border-radius:99px;background:rgba(255,255,255,.35);left:50%;top:50%;transform:translate(-50%,-50%);pointer-events:none}
.mc-joy span{position:absolute;bottom:6px;left:0;right:0;text-align:center;font-size:.62rem;color:rgba(255,255,255,.4)}
#mc-flash{position:fixed;inset:0;z-index:400;display:none;pointer-events:none}
#mc-flash.on{display:block}
</style>

<div id="mcw">

<div class="mc-card" id="mc-pair">
<div class="mc-h"><h3>Vincular dispositivos</h3></div>
<div id="mc-qr"></div>
<div id="mc-code">...</div>
<div id="mc-hint">Escanea este codigo desde cada telefono. Hasta 3 dispositivos.</div>
<div class="mc-row">
<input id="mc-join" placeholder="Codigo" autocomplete="off">
<button class="mc-b" id="mc-godev">Unirse</button>
<button class="mc-b" id="mc-scan" title="Escanear">📷</button>
</div>
</div>

<div id="mc-host">
<div class="mc-card">
<div class="mc-h"><h3>Dispositivos</h3><button class="mc-b sm" id="mc-cal">Calibrar todo</button></div>
<div id="mc-devs"></div>
<div id="mc-none" style="font-size:.8rem;color:rgba(255,255,255,.5)">Ninguno conectado todavia.</div>
</div>

<div class="mc-card">
<div class="mc-h"><h3>Controles en pantalla</h3></div>
<div class="mc-row" style="margin-bottom:10px">
<select id="mc-edd" class="mc-b" style="flex:1;min-width:140px"></select>
<button class="mc-b sm" id="mc-adj">+ Joystick</button>
<button class="mc-b sm" id="mc-adb">+ Boton</button>
</div>
<div id="mc-ctrls"></div>
</div>

<div class="mc-card">
<div class="mc-h"><h3>Enlace con el mod</h3></div>
<div class="mc-row">
<span style="font-size:.8rem">ws://127.0.0.1:</span>
<input id="mc-port" type="number" value="8787">
<button class="mc-b" id="mc-wsb">Conectar</button>
<span id="mc-wst">Desconectado</span>
</div>
</div>

<div class="mc-card">
<div class="mc-h"><h3>Vista</h3><button class="mc-b sm" id="mc-pause">Pausar</button></div>
<div id="mc-prevs"></div>
</div>
</div>

<div id="mc-cli">
<div class="mc-card">
<div class="mc-h"><h3 id="mc-crole">Conectado</h3></div>
<p style="font-size:.82rem;color:rgba(255,255,255,.6)">Sujeta el telefono como lo vas a usar y toca el boton. Se bloquea la pantalla en vertical y no se apaga.</p>
<button class="mc-b on" id="mc-go1">Listo</button>
</div>
</div>

<div id="mc-msg"></div>

<div class="mc-mod" id="mc-cmod">
<div id="mc-reader"></div>
<button class="mc-b" id="mc-ccl">Cerrar</button>
</div>
</div>

<div id="mc-surf">
<div id="mc-sh"><b id="mc-sr">-</b><span id="mc-ss"></span><button class="mc-b sm" id="mc-sx" style="margin-left:auto">Salir</button></div>
<div id="mc-sb"></div>
<div id="mc-sj"></div>
</div>
<div id="mc-flash"></div>

<script>
(function(){
const MW=document.getElementById('mcw');
if(!MW)return;
const $=i=>document.getElementById(i);
const API='/api/chat',PING=10000,RT=20000,HZ=60;
const M_PEER='https://cdn.jsdelivr.net/npm/peerjs@1.5.5/+esm';
const M_QR='https://cdn.jsdelivr.net/npm/qr-creator@1.0.0/+esm';
const M_H5Q='https://cdn.jsdelivr.net/npm/html5-qrcode@2.3.8/html5-qrcode.min.js';
const PIN_A='ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const PIN_RE=/^WA[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/;
const SLOTS={L:{n:'Brazo izquierdo',c:'#3b82f6'},R:{n:'Brazo derecho',c:'#22c55e'},H:{n:'Cabeza',c:'#f59e0b'}};
const SK=['L','R','H'];
const ACTS=[
{id:'move',k:'joy',n:'Mover'},
{id:'look',k:'joy',n:'Camara'},
{id:'head',k:'joy',n:'Cabeza'},
{id:'attack',k:'btn',n:'Atacar'},
{id:'use',k:'btn',n:'Usar'},
{id:'jump',k:'btn',n:'Saltar'},
{id:'sneak',k:'btn',n:'Agacharse'},
{id:'sprint',k:'btn',n:'Correr'},
{id:'slotn',k:'btn',n:'Slot siguiente'},
{id:'slotp',k:'btn',n:'Slot anterior'},
{id:'drop',k:'btn',n:'Soltar'},
{id:'inv',k:'btn',n:'Inventario'},
{id:'chat',k:'btn',n:'Comando de chat'},
{id:'cal',k:'btn',n:'Calibrar'},
{id:'pause',k:'btn',n:'Pausar captura'}
];
const META={cal:1,pause:1};
const LSK='MC_CFG';
let peer=null,pid=null,room=null,token=null,pingIv=null,wl=null,dead=false;
let conns={},fast={},cSince={},miss={},hbIv=null,myCode='',isHost=true,joinTo=null;
let devs={},bind={},live={},paused=false,ws=null,wsTo=null,qrCam=null,edSel='';
let cfg={port:8787,slots:{}};
let myRole='',myCtrls=[],mySm=.5,sen=null,evtOn=false,qRaw=null,qZero=null,txIv=null;
let joyV={},btnS=[],oef=null,ac=null;
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
  const e=$('mc-msg');
  e.textContent=t||'';
  e.classList.toggle('err',!!err);
  e.classList.toggle('on',!!t);
}
function mkEl(t,c){const e=document.createElement(t);if(c)e.className=c;return e;}
function genCode(){
  const r=crypto.getRandomValues(new Uint32Array(6));
  let s='WA';
  for(let i=0;i<6;i++)s+=PIN_A[r[i]%PIN_A.length];
  return s;
}
function isPin(v){return PIN_RE.test(String(v||'').trim().toUpperCase());}

function qm(a,b){
  return [
    a[3]*b[0]+a[0]*b[3]+a[1]*b[2]-a[2]*b[1],
    a[3]*b[1]-a[0]*b[2]+a[1]*b[3]+a[2]*b[0],
    a[3]*b[2]+a[0]*b[1]-a[1]*b[0]+a[2]*b[3],
    a[3]*b[3]-a[0]*b[0]-a[1]*b[1]-a[2]*b[2]
  ];
}
function qcj(q){return [-q[0],-q[1],-q[2],q[3]];}
function qv(q,v){
  const t=[2*(q[1]*v[2]-q[2]*v[1]),2*(q[2]*v[0]-q[0]*v[2]),2*(q[0]*v[1]-q[1]*v[0])];
  return [
    v[0]+q[3]*t[0]+q[1]*t[2]-q[2]*t[1],
    v[1]+q[3]*t[1]+q[2]*t[0]-q[0]*t[2],
    v[2]+q[3]*t[2]+q[0]*t[1]-q[1]*t[0]
  ];
}
function e2q(a,b,g){
  const x=b*Math.PI/360,y=g*Math.PI/360,z=a*Math.PI/360;
  const cX=Math.cos(x),cY=Math.cos(y),cZ=Math.cos(z);
  const sX=Math.sin(x),sY=Math.sin(y),sZ=Math.sin(z);
  return [
    sX*cY*cZ-cX*sY*sZ,
    cX*sY*cZ+sX*cY*sZ,
    cX*cY*sZ+sX*sY*cZ,
    cX*cY*cZ-sX*sY*sZ
  ];
}
function mkOE(){
  let p=null,dp=[0,0,0,0],tp=0;
  return function(q,t,mn,be){
    if(!p){p=q.slice();tp=t;return p;}
    let dt=(t-tp)/1000;
    tp=t;
    if(!(dt>0)||dt>.5)dt=1/HZ;
    if(q[0]*p[0]+q[1]*p[1]+q[2]*p[2]+q[3]*p[3]<0)q=[-q[0],-q[1],-q[2],-q[3]];
    const o=[];
    let s=0;
    for(let i=0;i<4;i++){
      const dx=(q[i]-p[i])/dt;
      const ad=1/(1+1/(2*Math.PI*dt));
      dp[i]=dp[i]+ad*(dx-dp[i]);
      const cut=mn+be*Math.abs(dp[i]);
      const al=1/(1+1/(2*Math.PI*cut*dt));
      o[i]=p[i]+al*(q[i]-p[i]);
      s+=o[i]*o[i];
    }
    s=Math.sqrt(s)||1;
    for(let i=0;i<4;i++)o[i]/=s;
    p=o;
    return o;
  };
}

function cfgLoad(){
  try{
    const r=JSON.parse(localStorage.getItem(LSK)||'null');
    if(r&&typeof r==='object')cfg=Object.assign({port:8787,slots:{}},r);
  }catch(e){}
  SK.forEach(k=>{if(!cfg.slots[k])cfg.slots[k]={ctrls:[],sm:.5};});
  $('mc-port').value=cfg.port||8787;
}
function cfgSave(){
  cfg.port=Number($('mc-port').value)||8787;
  try{localStorage.setItem(LSK,JSON.stringify(cfg));}catch(e){}
}

async function wlGet(){
  try{
    if(!navigator.wakeLock)return;
    wl=await navigator.wakeLock.request('screen');
    wl.addEventListener('release',()=>{wl=null;});
  }catch(e){}
}
function wlDrop(){if(wl){wl.release().catch(()=>{});wl=null;}}
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
    if(fast[p]){try{fast[p].close();}catch(e){}delete fast[p];}
    if(isHost)devGone(p);
  });
  if(!isHost&&!Object.keys(conns).length)rejoin();
}
async function rejoin(){
  if(dead||!room)return;
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
      peer.on('connection',c=>{
        if(c.metadata&&c.metadata.f)hookFast(c);
        else hookConn(c);
      });
      peer.on('disconnected',()=>{if(room&&!dead)peer.reconnect();});
      res();
    });
  });
}
function hookFast(c){
  fast[c.peer]=c;
  c.on('data',d=>onFast(d,c.peer));
  c.on('close',()=>{delete fast[c.peer];});
  c.on('error',()=>{delete fast[c.peer];});
}
function hookConn(c){
  conns[c.peer]=c;
  miss[c.peer]=0;
  c.on('open',()=>{
    delete cSince[c.peer];
    clearTimeout(joinTo);
    msg('');
    if(isHost){devAdd(c.peer);}
    else{
      $('mc-pair').style.display='none';
      $('mc-cli').classList.add('on');
    }
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
  if(fast[p]){try{fast[p].close();}catch(e){}delete fast[p];}
  if(isHost)devGone(p);
  else if(!Object.keys(conns).length)msg('Se perdio la conexion con el host',true);
}
function sendTo(p,d){
  const c=conns[p];
  if(c&&c.open)try{c.send(d);}catch(e){}
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
async function joinRoom(rid,noConn){
  await initPeer();
  let d;
  try{d=await api('POST','/rooms/'+rid+'/join',{pw:'',pid,nick:'mcap'});}
  catch(e){msg(e.status===429?'Demasiados intentos, espera un rato':'Error al unirse',true);return false;}
  room=rid;token=d.token;
  if(!noConn&&!isHost)connectMissing(d.peers);
  startPing();
  return d;
}
async function newRoom(){
  for(let i=0;i<4;i++){
    if(!myCode||i>0)myCode=genCode();
    const d=await joinRoom('warms-'+myCode,true);
    if(!d)return false;
    if(!d.peers||!d.peers.length)return d;
    leaveRoom();
  }
  return false;
}
function connectMissing(peers){
  if(!peer||peer.destroyed)return;
  (peers||[]).forEach(p=>{
    if(p.pid===pid)return;
    const c=conns[p.pid];
    if(c&&c.open)return;
    const s=cSince[p.pid];
    if(s&&Date.now()-s.t<RT)return;
    if(s&&s.c){try{s.c.close();}catch(e){}}
    if(c){try{c.close();}catch(e){}delete conns[p.pid];delete miss[p.pid];}
    const nc=peer.connect(p.pid,{reliable:true});
    if(!nc){delete cSince[p.pid];return;}
    cSince[p.pid]={t:Date.now(),c:nc};
    hookConn(nc);
    const nf=peer.connect(p.pid,{metadata:{f:1}});
    if(nf)hookFast(nf);
  });
}
function startPing(){
  stopPing();
  pingIv=setInterval(async()=>{
    if(!room)return;
    try{
      const d=await api('POST','/rooms/'+room+'/ping',{pid,token});
      if(!isHost)connectMissing(d.peers);
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
  $('mc-code').textContent=code;
  try{
    const QR=(await import(M_QR)).default;
    const box=$('mc-qr');
    box.innerHTML='';
    QR.render({text:code,radius:.4,ecLevel:'M',size:174,quiet:2,fill:'#000',background:'#fff'},box);
  }catch(e){$('mc-qr').textContent='QR no disponible';}
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
  $('mc-cmod').classList.add('on');
  msg('Iniciando camara...');
  try{
    if(!window.Html5Qrcode)await loadJS(M_H5Q);
    $('mc-reader').innerHTML='';
    const inst=new Html5Qrcode('mc-reader');
    qrCam=inst;
    await inst.start({facingMode:'environment'},{fps:10,qrbox:{width:240,height:240}},raw=>{
      const s=String(raw||'').trim();
      const code=(s.includes('#')?s.split('#').pop():s).trim().toUpperCase();
      if(!code)return;
      stopScan();
      $('mc-join').value=code;
      doJoin();
    },()=>{});
    if(qrCam!==inst){killScan(inst);return;}
    msg('Apunta al codigo QR');
  }catch(e){stopScan();msg('Error camara',true);}
}
function killScan(c){
  if(!c)return;
  Promise.resolve().then(()=>c.stop()).catch(()=>{}).then(()=>{try{c.clear();}catch(e){}});
}
function stopScan(){
  const c=qrCam;
  qrCam=null;
  killScan(c);
  $('mc-cmod').classList.remove('on');
}
async function doJoin(){
  const raw=($('mc-join').value||'').trim().toUpperCase();
  if(!raw)return;
  if(!isPin(raw)){msg('Ese codigo no es valido',true);return;}
  if(raw===myCode){msg('Ese es tu propio codigo',true);return;}
  msg('Conectando...');
  leaveRoom();
  isHost=false;
  $('mc-host').classList.remove('on');
  if(!await joinRoom('warms-'+raw))return;
  clearTimeout(joinTo);
  joinTo=setTimeout(()=>{if(!Object.keys(conns).length)msg('No se encontro ese codigo',true);},15000);
}

function devAdd(p){
  if(!devs[p])devs[p]={p,ok:true,last:0};
  devs[p].ok=true;
  const orph=SK.filter(k=>bind[k]&&(!devs[bind[k]]||!devs[bind[k]].ok));
  const un=Object.keys(devs).filter(x=>devs[x].ok&&!SK.some(k=>bind[k]===x));
  if(orph.length===1&&un.length===1&&un[0]===p)setBind(orph[0],p);
  devDraw();
  pushCfg(p);
}
function devGone(p){
  if(devs[p])devs[p].ok=false;
  devDraw();
}
function setBind(k,p){
  SK.forEach(o=>{if(o!==k&&bind[o]===p)delete bind[o];});
  if(p)bind[k]=p;else delete bind[k];
  devDraw();
  edFill();
  if(p)pushCfg(p);
}
function slotOf(p){return SK.find(k=>bind[k]===p)||'';}
function pushCfg(p){
  const k=slotOf(p);
  const s=k?cfg.slots[k]:null;
  sendTo(p,{t:'cfg',role:k,name:k?SLOTS[k].n:'',col:k?SLOTS[k].c:'#888',ctrls:s?s.ctrls:[],sm:s?s.sm:.5});
}
function pushAll(){Object.keys(devs).forEach(p=>{if(devs[p].ok)pushCfg(p);});}
function devDraw(){
  const box=$('mc-devs');
  box.innerHTML='';
  const ks=Object.keys(devs);
  $('mc-none').style.display=ks.length?'none':'block';
  ks.forEach(p=>{
    const d=devs[p],k=slotOf(p);
    const el=mkEl('div','mc-dv');
    if(!d.ok)el.classList.add('dead');
    const top=mkEl('div','mc-dt');
    const dot=mkEl('span','mc-dot');
    if(k)dot.style.background=SLOTS[k].c;
    const nm=mkEl('span','mc-dn');
    nm.textContent=p.slice(0,12);
    const bid=mkEl('button','mc-b sm');
    bid.textContent='Identificar';
    bid.onclick=()=>sendTo(p,{t:'id'});
    top.appendChild(dot);top.appendChild(nm);top.appendChild(bid);
    el.appendChild(top);
    const row=mkEl('div','mc-row');
    SK.forEach(s=>{
      const b=mkEl('button','mc-b sm');
      if(k===s)b.classList.add('on');
      b.textContent=SLOTS[s].n;
      b.onclick=()=>setBind(s,k===s?null:p);
      row.appendChild(b);
    });
    el.appendChild(row);
    if(k){
      const sl=mkEl('div','mc-sl');
      const lb=mkEl('span');
      lb.textContent='Suavizado';
      const inp=mkEl('input');
      inp.type='range';inp.min='0';inp.max='100';
      inp.value=String(Math.round(cfg.slots[k].sm*100));
      inp.oninput=()=>{
        cfg.slots[k].sm=Number(inp.value)/100;
        cfgSave();
        pushCfg(p);
      };
      sl.appendChild(lb);sl.appendChild(inp);
      el.appendChild(sl);
    }
    box.appendChild(el);
  });
}

function edFill(){
  const s=$('mc-edd');
  const prev=edSel;
  s.innerHTML='';
  SK.forEach(k=>{
    const o=mkEl('option');
    o.value=k;
    o.textContent=SLOTS[k].n+(bind[k]?'':' (sin dispositivo)');
    s.appendChild(o);
  });
  edSel=SK.indexOf(prev)>=0?prev:'L';
  s.value=edSel;
  edDraw();
}
function edDraw(){
  const box=$('mc-ctrls');
  box.innerHTML='';
  const sl=cfg.slots[edSel];
  if(!sl)return;
  sl.ctrls.forEach((c,i)=>{
    const row=mkEl('div','mc-ct');
    const tag=mkEl('span');
    tag.style.fontSize='.72rem';
    tag.style.color='rgba(255,255,255,.45)';
    tag.textContent=c.k==='joy'?'JOY':'BTN';
    const sel=mkEl('select');
    ACTS.filter(a=>a.k===c.k).forEach(a=>{
      const o=mkEl('option');
      o.value=a.id;o.textContent=a.n;
      sel.appendChild(o);
    });
    sel.value=c.a;
    sel.onchange=()=>{c.a=sel.value;cfgSave();edDraw();pushSlot();};
    row.appendChild(tag);row.appendChild(sel);
    if(c.a==='chat'){
      const t=mkEl('input');
      t.placeholder='/time set day';
      t.value=c.v||'';
      t.oninput=()=>{c.v=t.value;cfgSave();pushSlot();};
      row.appendChild(t);
    }
    const del=mkEl('button','mc-b sm');
    del.textContent='✕';
    del.onclick=()=>{sl.ctrls.splice(i,1);cfgSave();edDraw();pushSlot();};
    row.appendChild(del);
    box.appendChild(row);
  });
}
function pushSlot(){
  const p=bind[edSel];
  if(p)pushCfg(p);
}
function edAdd(k){
  const sl=cfg.slots[edSel];
  if(!sl)return;
  sl.ctrls.push({k,a:k==='joy'?'look':'attack'});
  cfgSave();
  edDraw();
  pushSlot();
}

function wsSt(t){$('mc-wst').textContent=t;}
function wsOff(){
  clearTimeout(wsTo);
  if(ws){try{ws.close();}catch(e){}ws=null;}
}
function wsGo(){
  wsOff();
  cfgSave();
  const p=cfg.port;
  wsSt('Conectando...');
  try{ws=new WebSocket('ws://127.0.0.1:'+p);}
  catch(e){wsSt('Bloqueado por el navegador');return;}
  ws.onopen=()=>wsSt('Conectado');
  ws.onclose=()=>{ws=null;wsSt('Desconectado');};
  ws.onerror=()=>wsSt('Sin respuesta, revisa el mod');
}
function fwd(k,f){
  if(!ws||ws.readyState!==1||paused)return;
  try{ws.send(JSON.stringify(f));}catch(e){}
}

function onData(d,from){
  if(!d||!d.t)return;
  if(from)miss[from]=0;
  if(d.t==='ping'){sendTo(from,{t:'pong'});return;}
  if(d.t==='pong')return;
  if(d.t==='cfg'){
    myRole=d.role||'';
    myCtrls=d.ctrls||[];
    mySm=typeof d.sm==='number'?d.sm:.5;
    $('mc-crole').textContent=d.name||'Sin rol asignado';
    $('mc-sr').textContent=d.name||'Sin rol';
    document.documentElement.style.setProperty('--mc-col',d.col||'#888');
    $('mc-sh').style.color=d.col||'#888';
    surfDraw();
    return;
  }
  if(d.t==='id'){identify();return;}
  if(d.t==='cnt'){beep(660,90);vib(60);return;}
  if(d.t==='cal'){beep(990,220);vib([40,60,40]);qZero=qRaw?qcj(qRaw):null;oef=mkOE();return;}
}
function onFast(d,from){
  if(!isHost||!d)return;
  const k=slotOf(from);
  if(!k)return;
  const dv=devs[from];
  if(dv)dv.last=Date.now();
  const sl=cfg.slots[k];
  const f={r:k,q:d.q||[0,0,0,1],mv:[0,0],lk:[0,0],hd:[0,0],a:[],c:[]};
  (sl.ctrls||[]).forEach((c,i)=>{
    if(c.k==='joy'){
      const v=(d.j&&d.j[i])||[0,0];
      if(c.a==='move')f.mv=v;
      else if(c.a==='look')f.lk=v;
      else if(c.a==='head')f.hd=v;
      return;
    }
    if(!(d.b&&d.b[i]))return;
    if(c.a==='cal'){calAll();return;}
    if(c.a==='pause'){setPause(!paused);return;}
    if(c.a==='chat'){if(c.v)f.c.push(c.v);return;}
    f.a.push(c.a);
  });
  live[k]={q:f.q,t:Date.now()};
  fwd(k,f);
}

function setPause(v){
  paused=!!v;
  $('mc-pause').textContent=paused?'Reanudar':'Pausar';
  $('mc-pause').classList.toggle('on',paused);
}
let calBusy=false;
async function calAll(){
  if(calBusy)return;
  calBusy=true;
  const ps=Object.keys(devs).filter(p=>devs[p].ok);
  for(let n=3;n>0;n--){
    msg('Calibrando en '+n+'... brazos abajo');
    ps.forEach(p=>sendTo(p,{t:'cnt',n}));
    await new Promise(r=>setTimeout(r,1000));
  }
  ps.forEach(p=>sendTo(p,{t:'cal'}));
  msg('Calibrado');
  setTimeout(()=>msg(''),1500);
  calBusy=false;
}

function prevInit(){
  const box=$('mc-prevs');
  box.innerHTML='';
  SK.forEach(k=>{
    const w=mkEl('div','mc-pv');
    const cv=mkEl('canvas');
    cv.id='mc-cv-'+k;
    cv.width=120;cv.height=120;
    const s=mkEl('span');
    s.textContent=SLOTS[k].n;
    w.appendChild(cv);w.appendChild(s);
    box.appendChild(w);
  });
}
function prevDraw(){
  SK.forEach(k=>{
    const cv=$('mc-cv-'+k);
    if(!cv)return;
    const x=cv.getContext('2d');
    x.clearRect(0,0,120,120);
    const st=live[k];
    const on=st&&Date.now()-st.t<600;
    x.strokeStyle='rgba(255,255,255,.12)';
    x.lineWidth=1;
    x.beginPath();x.arc(60,60,50,0,7);x.stroke();
    if(!on){
      x.fillStyle='rgba(255,255,255,.25)';
      x.font='11px sans-serif';
      x.textAlign='center';
      x.fillText('sin senal',60,64);
      return;
    }
    const q=st.q;
    const ar=qv(q,[0,-1,0]),rl=qv(q,[1,0,0]);
    const px=v=>[60+v[0]*44,60-v[1]*44];
    const a=px(ar),r=px(rl);
    x.strokeStyle=SLOTS[k].c;
    x.lineWidth=7;
    x.lineCap='round';
    x.beginPath();x.moveTo(60,60);x.lineTo(a[0],a[1]);x.stroke();
    x.strokeStyle='rgba(255,255,255,.5)';
    x.lineWidth=2;
    x.beginPath();
    x.moveTo(a[0]-(r[0]-60)*.28,a[1]-(r[1]-60)*.28);
    x.lineTo(a[0]+(r[0]-60)*.28,a[1]+(r[1]-60)*.28);
    x.stroke();
  });
}
let rafId=0;
function loop(){
  if(dead)return;
  if(isHost)prevDraw();
  rafId=requestAnimationFrame(loop);
}

function actx(){
  if(!ac){try{ac=new (window.AudioContext||window.webkitAudioContext)();}catch(e){}}
  if(ac&&ac.state==='suspended')ac.resume().catch(()=>{});
  return ac;
}
function beep(f,ms){
  const c=actx();
  if(!c)return;
  try{
    const o=c.createOscillator(),g=c.createGain();
    o.frequency.value=f;
    g.gain.value=.14;
    o.connect(g);g.connect(c.destination);
    o.start();
    o.stop(c.currentTime+ms/1000);
  }catch(e){}
}
function vib(p){try{if(navigator.vibrate)navigator.vibrate(p);}catch(e){}}
function identify(){
  beep(880,320);
  vib([90,70,90,70,90]);
  const f=$('mc-flash');
  f.style.background=(getComputedStyle(document.documentElement).getPropertyValue('--mc-col')||'').trim()||'#fff';
  f.classList.add('on');
  setTimeout(()=>f.classList.remove('on'),320);
  setTimeout(()=>{f.classList.add('on');setTimeout(()=>f.classList.remove('on'),320);},480);
}

function mkJoy(lbl,i){
  const d=mkEl('div','mc-joy');
  const k=mkEl('i'),s=mkEl('span');
  s.textContent=lbl;
  d.appendChild(k);d.appendChild(s);
  let act=null;
  const set=(x,y)=>{
    joyV[i]=[x,y];
    k.style.transform='translate(calc(-50% + '+(x*40)+'px), calc(-50% + '+(-y*40)+'px))';
  };
  set(0,0);
  d.addEventListener('pointerdown',e=>{
    act=e.pointerId;
    d.setPointerCapture(act);
    mv(e);
  });
  d.addEventListener('pointermove',e=>{if(act===e.pointerId)mv(e);});
  const up=e=>{
    if(act!==e.pointerId)return;
    act=null;
    set(0,0);
  };
  d.addEventListener('pointerup',up);
  d.addEventListener('pointercancel',up);
  function mv(e){
    const r=d.getBoundingClientRect();
    let x=(e.clientX-r.left-r.width/2)/(r.width/2);
    let y=-(e.clientY-r.top-r.height/2)/(r.height/2);
    const m=Math.hypot(x,y);
    if(m>1){x/=m;y/=m;}
    set(x,y);
  }
  return d;
}
function surfDraw(){
  const bb=$('mc-sb'),jb=$('mc-sj');
  bb.innerHTML='';jb.innerHTML='';
  joyV={};btnS=[];
  myCtrls.forEach((c,i)=>{
    const act=ACTS.find(a=>a.id===c.a);
    const nm=act?act.n:c.a;
    if(c.k==='joy'){
      joyV[i]=[0,0];
      jb.appendChild(mkJoy(nm,i));
      return;
    }
    const b=mkEl('button');
    b.textContent=c.a==='chat'?(c.v||'Comando'):nm;
    btnS[i]=0;
    const dn=e=>{e.preventDefault();btnS[i]=1;vib(18);};
    const up=e=>{e.preventDefault();btnS[i]=0;};
    b.addEventListener('pointerdown',dn);
    b.addEventListener('pointerup',up);
    b.addEventListener('pointercancel',up);
    b.addEventListener('pointerleave',up);
    bb.appendChild(b);
  });
}

function doEvt(){
  if(evtOn)return true;
  evtOn=true;
  window.addEventListener('deviceorientation',e=>{
    if(e.alpha==null)return;
    qRaw=e2q(e.alpha,e.beta,e.gamma);
  });
  return true;
}
async function senStart(){
  if(sen||evtOn)return true;
  try{
    if(window.RelativeOrientationSensor&&navigator.permissions){
      const ps=await Promise.all([
        navigator.permissions.query({name:'accelerometer'}),
        navigator.permissions.query({name:'gyroscope'})
      ]);
      if(ps.some(p=>p.state==='denied'))throw 0;
      sen=new RelativeOrientationSensor({frequency:HZ,referenceFrame:'screen'});
      sen.onreading=()=>{qRaw=Array.from(sen.quaternion);};
      sen.onerror=()=>{sen=null;doEvt();};
      sen.start();
      return true;
    }
  }catch(e){}
  try{
    if(typeof DeviceOrientationEvent!=='undefined'&&DeviceOrientationEvent.requestPermission){
      const r=await DeviceOrientationEvent.requestPermission();
      if(r!=='granted')return false;
    }
  }catch(e){}
  return doEvt();
}
function tx(){
  const c=Object.values(fast).find(x=>x&&x.open);
  if(!c)return;
  let q=qRaw||[0,0,0,1];
  if(!oef)oef=mkOE();
  q=oef(q,performance.now(),.02+(1-mySm)*1.4,.6);
  if(qZero)q=qm(qZero,q);
  const j={},b={};
  myCtrls.forEach((x,i)=>{
    if(x.k==='joy')j[i]=joyV[i]||[0,0];
    else b[i]=btnS[i]||0;
  });
  try{c.send({q,j,b});}catch(e){}
}
async function cliGo(){
  const ok=await senStart();
  if(!ok){msg('Sin permiso de sensores',true);return;}
  actx();
  $('mc-surf').classList.add('on');
  try{
    if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();
    if(screen.orientation&&screen.orientation.lock)await screen.orientation.lock('portrait');
  }catch(e){}
  wlGet();
  surfDraw();
  if(txIv)clearInterval(txIv);
  txIv=setInterval(tx,1000/HZ);
  $('mc-ss').textContent='enviando';
}
function cliStop(){
  if(txIv){clearInterval(txIv);txIv=null;}
  $('mc-surf').classList.remove('on');
  try{if(document.fullscreenElement)document.exitFullscreen();}catch(e){}
  try{if(screen.orientation&&screen.orientation.unlock)screen.orientation.unlock();}catch(e){}
}

$('mc-godev').onclick=doJoin;
$('mc-scan').onclick=scan;
$('mc-ccl').onclick=stopScan;
$('mc-join').addEventListener('keydown',e=>{if(e.key==='Enter')doJoin();});
$('mc-cal').onclick=calAll;
$('mc-pause').onclick=()=>setPause(!paused);
$('mc-wsb').onclick=wsGo;
$('mc-port').onchange=cfgSave;
$('mc-edd').onchange=()=>{edSel=$('mc-edd').value;edDraw();};
$('mc-adj').onclick=()=>edAdd('joy');
$('mc-adb').onclick=()=>edAdd('btn');
$('mc-go1').onclick=cliGo;
$('mc-sx').onclick=cliStop;

function teardown(){
  dead=true;
  stopScan();
  stopHB();
  stopPing();
  cliStop();
  wsOff();
  cancelAnimationFrame(rafId);
  if(sen){try{sen.stop();}catch(e){}sen=null;}
  leaveRoom();
  Object.values(conns).forEach(c=>{try{c.close();}catch(e){}});
  Object.values(fast).forEach(c=>{try{c.close();}catch(e){}});
  conns={};fast={};
  if(peer&&!peer.destroyed){try{peer.destroy();}catch(e){}}
  peer=null;pid=null;
  if(ac){try{ac.close();}catch(e){}ac=null;}
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
  cfgLoad();
  prevInit();
  edFill();
  loop();
  try{await initPeer();}
  catch(e){msg('Error Conexion, no se pudo iniciar',true);return;}
  if(PRE&&isPin(PRE)){
    $('mc-join').value=PRE;
    doJoin();
    return;
  }
  isHost=true;
  $('mc-host').classList.add('on');
  await newRoom();
  showQR(myCode);
  wlGet();
})();
})();
</script>
