## MotionCap 2

<style>
#m2w{--m2-r:var(--r-md,16px);display:flex;flex-direction:column;gap:12px;position:relative}
#m2w *{box-sizing:border-box}
#m2w button{cursor:pointer;font-family:inherit}
.m2-card{border:1px solid rgba(255,255,255,.1);border-radius:var(--m2-r);padding:14px}
.m2-h{display:flex;align-items:center;gap:10px;margin-bottom:10px}
.m2-h h3{margin:0;border:none!important;font-size:1rem;flex:1}
.m2-b{border:none;border-radius:var(--m2-r);padding:9px 14px;font-size:.82rem;background:rgba(255,255,255,.08);color:#fff}
.m2-b.on{background:var(--accent,#4ade80);color:#000;font-weight:600}
.m2-b:disabled{opacity:.4;cursor:not-allowed}
.m2-b.sm{padding:5px 9px;font-size:.72rem}
.m2-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
#m2-qr{width:190px;height:190px;background:#fff;border-radius:var(--m2-r);padding:8px;display:flex;align-items:center;justify-content:center;margin:0 auto}
#m2-code{text-align:center;font-size:1.6rem;font-weight:700;letter-spacing:.09em;margin:10px 0 2px}
#m2-hint{text-align:center;font-size:.76rem;color:rgba(255,255,255,.55);margin-bottom:12px}
#m2-join{flex:1;min-width:150px;padding:10px;border-radius:var(--m2-r);border:1px solid rgba(255,255,255,.15);background:rgba(0,0,0,.25);color:#fff;font-size:.9rem}
#m2-msg{font-size:.82rem;padding:9px 12px;border-radius:var(--m2-r);background:rgba(255,255,255,.06);display:none}
#m2-msg.on{display:block}
#m2-msg.err{background:rgba(248,113,113,.18);color:#fca5a5}
select.m2-s,#m2-port{padding:8px 10px;border-radius:var(--m2-r);border:1px solid rgba(255,255,255,.15);background:rgba(0,0,0,.25);color:#fff;font-size:.82rem}
#m2-port{width:90px}
.m2-sl{display:flex;align-items:center;gap:8px;font-size:.74rem;color:rgba(255,255,255,.6);margin-top:8px}
.m2-sl input{flex:1;accent-color:var(--accent,#4ade80)}
.m2-sl span{min-width:104px}
#m2-stage{position:relative;width:100%;max-width:420px;margin:0 auto;border-radius:var(--m2-r);overflow:hidden;background:#000}
#m2-vid{width:100%;display:block;transform:scaleX(-1)}
#m2-ov{position:absolute;inset:0;width:100%;height:100%;transform:scaleX(-1)}
#m2-st{font-size:.76rem;color:rgba(255,255,255,.55);text-align:center;margin-top:6px}
#m2-host,#m2-cam,#m2-ctl{display:none}
#m2-host.on,#m2-cam.on,#m2-ctl.on{display:block}
.m2-ct{display:flex;gap:6px;align-items:center;margin-bottom:6px}
.m2-ct select,.m2-ct input{padding:6px 8px;border-radius:var(--m2-r);border:1px solid rgba(255,255,255,.15);background:rgba(0,0,0,.25);color:#fff;font-size:.76rem;flex:1;min-width:0}
#m2-surf{display:none;position:fixed;inset:0;z-index:150;background:#111;flex-direction:column;padding:18px;gap:10px;touch-action:none;user-select:none;-webkit-user-select:none}
#m2-surf.on{display:flex}
#m2-sh{display:flex;align-items:center;gap:10px;font-size:.78rem;color:rgba(255,255,255,.55)}
#m2-sb{flex:1;display:flex;flex-wrap:wrap;gap:10px;align-content:flex-start;padding:6px 2px}
#m2-sb button{flex:1 1 40%;min-height:64px;font-size:.95rem}
#m2-sj{display:flex;gap:14px;justify-content:space-between}
.m2-joy{width:132px;height:132px;border-radius:99px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);position:relative;flex:none;touch-action:none}
.m2-joy i{position:absolute;width:46px;height:46px;border-radius:99px;background:rgba(255,255,255,.35);left:50%;top:50%;transform:translate(-50%,-50%);pointer-events:none}
.m2-joy span{position:absolute;bottom:6px;left:0;right:0;text-align:center;font-size:.62rem;color:rgba(255,255,255,.4)}
.m2-dv{border:1px solid rgba(255,255,255,.1);border-radius:var(--m2-r);padding:9px;margin-bottom:6px;font-size:.8rem;display:flex;align-items:center;gap:8px}
.m2-dv.dead{opacity:.45}
.m2-dot{width:10px;height:10px;border-radius:99px;background:var(--accent,#4ade80);flex:none}
.m2-mod{display:none;position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.92);flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px}
.m2-mod.on{display:flex}
#m2-reader{width:100%;max-width:360px}
#m2-reader video{width:100%!important;border-radius:var(--m2-r)}
#m2-reader img{display:none!important}
</style>

<div id="m2w">

<div class="m2-card" id="m2-pair">
<div class="m2-h"><h3>Vincular</h3></div>
<div id="m2-qr"></div>
<div id="m2-code">...</div>
<div id="m2-hint">Escanea desde un telefono para usarlo como camara, o usa la camara de esta PC.</div>
<div class="m2-row">
<input id="m2-join" placeholder="Codigo" autocomplete="off">
<button class="m2-b" id="m2-go">Unirse</button>
<button class="m2-b" id="m2-scan" title="Escanear">&#128247;</button>
</div>
</div>

<div id="m2-host">
<div class="m2-card">
<div class="m2-h"><h3>Camara</h3></div>
<div class="m2-row">
<button class="m2-b" id="m2-local">Usar camara de esta PC</button>
<select class="m2-s" id="m2-model"></select>
</div>
<div id="m2-devs"></div>
<div id="m2-none" style="font-size:.8rem;color:rgba(255,255,255,.5)">Sin dispositivos.</div>
</div>

<div class="m2-card">
<div class="m2-h"><h3>Controles del telefono</h3></div>
<div class="m2-row" style="margin-bottom:10px">
<select id="m2-edd" class="m2-b" style="flex:1;min-width:140px"></select>
<button class="m2-b sm" id="m2-adj">+ Joystick</button>
<button class="m2-b sm" id="m2-adb">+ Boton</button>
</div>
<div id="m2-ctrls"></div>
<div id="m2-keyn" style="font-size:.72rem;color:rgba(255,255,255,.45);margin-top:6px"></div>
</div>

<div class="m2-card">
<div class="m2-h"><h3>Ajustes</h3></div>
<div class="m2-sl"><span id="m2-lsm">Suavizado 50%</span><input type="range" id="m2-sm" min="0" max="100" value="50"></div>
<div class="m2-sl"><span id="m2-lbd">Codo 100%</span><input type="range" id="m2-bd" min="0" max="200" value="100"></div>
<div class="m2-sl"><span id="m2-lfp">Analisis 20/s</span><input type="range" id="m2-fp" min="10" max="30" value="20"></div>
</div>

<div class="m2-card">
<div class="m2-h"><h3>Enlace con el mod</h3></div>
<div class="m2-row">
<span style="font-size:.8rem">ws://127.0.0.1:</span>
<input id="m2-port" type="number" value="8787">
<button class="m2-b" id="m2-wsb">Conectar</button>
<span id="m2-wst" style="font-size:.78rem;color:rgba(255,255,255,.6)">Desconectado</span>
</div>
</div>
</div>

<div id="m2-cam">
<div class="m2-card">
<div class="m2-h"><h3 id="m2-ct">Camara</h3></div>
<div id="m2-stage"><video id="m2-vid" playsinline muted></video><canvas id="m2-ov"></canvas></div>
<div id="m2-st">Sin iniciar</div>
<div class="m2-row" style="margin-top:10px;justify-content:center">
<button class="m2-b on" id="m2-start">Iniciar camara</button>
<button class="m2-b" id="m2-stop">Detener</button>
<button class="m2-b" id="m2-hide">Ocultar video</button>
</div>
</div>
</div>

<div id="m2-ctl">
<div class="m2-card">
<div class="m2-h"><h3 id="m2-ctt">Control</h3></div>
<p style="font-size:.82rem;color:rgba(255,255,255,.6)">Sujeta el telefono como lo vas a usar y toca el boton.</p>
<button class="m2-b on" id="m2-cgo" style="width:100%;padding:20px;font-size:1.1rem;font-weight:600">Listo</button>
</div>
</div>

<div id="m2-msg"></div>
<div class="m2-mod" id="m2-cmod"><div id="m2-reader"></div><button class="m2-b" id="m2-ccl">Cerrar</button></div>
</div>

<div id="m2-surf">
<div id="m2-sh"><b id="m2-sr">-</b><span id="m2-ss"></span><button class="m2-b sm" id="m2-sx" style="margin-left:auto">Salir</button></div>
<div id="m2-sb"></div>
<div id="m2-sj"></div>
</div>

<script>
(function(){
const MW=document.getElementById('m2w');
if(!MW)return;
const $=i=>document.getElementById(i);
const API='/api/chat',PING=10000,RT=20000;
const M_PEER='https://cdn.jsdelivr.net/npm/peerjs@1.5.5/+esm';
const M_QR='https://cdn.jsdelivr.net/npm/qr-creator@1.0.0/+esm';
const M_H5Q='https://cdn.jsdelivr.net/npm/html5-qrcode@2.3.8/html5-qrcode.min.js';
const MP_V='1.0.1';
const MP_W='https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@'+MP_V+'/wasm';
const MP_M='https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@'+MP_V;
const MB='https://storage.googleapis.com/mediapipe-models/pose_landmarker/';
const MODELS=[
  ['lite','Lite, el mas rapido (5,5 MB)',MB+'pose_landmarker_lite/float16/latest/pose_landmarker_lite.task'],
  ['full','Full, intermedio (9 MB)',MB+'pose_landmarker_full/float16/latest/pose_landmarker_full.task'],
  ['heavy','Heavy, el mas preciso (29 MB)',MB+'pose_landmarker_heavy/float16/latest/pose_landmarker_heavy.task']
];
const PIN_A='ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const PIN_RE=/^MC[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/;
const LSK='MC2_CFG';
const ACTS=[
{id:'move',k:'joy',n:'Mover'},
{id:'look',k:'joy',n:'Camara'},
{id:'attack',k:'btn',n:'Atacar'},
{id:'use',k:'btn',n:'Usar'},
{id:'jump',k:'btn',n:'Saltar'},
{id:'sneak',k:'btn',n:'Agacharse'},
{id:'sprint',k:'btn',n:'Correr'},
{id:'slotn',k:'btn',n:'Slot siguiente'},
{id:'slotp',k:'btn',n:'Slot anterior'},
{id:'drop',k:'btn',n:'Soltar'},
{id:'inv',k:'btn',n:'Inventario'},
{id:'key',k:'btn',n:'Tecla de un mod'},
{id:'chat',k:'btn',n:'Comando de chat'},
{id:'pause',k:'btn',n:'Pausar captura'}
];
const LM={nose:0,earL:7,earR:8,shL:11,shR:12,elL:13,elR:14,wrL:15,wrR:16,hipL:23,hipR:24};
let peer=null,pid=null,room=null,token=null,pingIv=null,dead=false;
let conns={},cSince={},miss={},hbIv=null,myCode='',isHost=true,joinTo=null,qrCam=null;
let devs={},ws=null,localCam=false;
let cfg={port:8787,model:'lite',sm:.5,bend:1,fps:20,ctrls:[],dev:{}};
let camShow=true,wl=null;
let keyL=[],myMode='',myTw='',myCtrls=[],joyV={},btnS=[];
let sen=null,evtOn=false,qRaw=null,txIv=null,ctlOn=false;
let ctlSt={a:[],mv:[0,0],lk:[0,0]},twQ={};
let PL=null,plBusy=false,stream=null,rafId=0,lastT=-1,camOn=false;
let oe={},lastFrame=0;
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
  const e=$('m2-msg');
  e.textContent=t||'';
  e.classList.toggle('err',!!err);
  e.classList.toggle('on',!!t);
}
function mkEl(t,c){const e=document.createElement(t);if(c)e.className=c;return e;}
function genCode(){
  const r=crypto.getRandomValues(new Uint32Array(6));
  let s='MC';
  for(let i=0;i<6;i++)s+=PIN_A[r[i]%PIN_A.length];
  return s;
}
function isPin(v){return PIN_RE.test(String(v||'').trim().toUpperCase());}

function sub(a,b){return [a.x-b.x,a.y-b.y,a.z-b.z];}
function mid(a,b){return {x:(a.x+b.x)/2,y:(a.y+b.y)/2,z:(a.z+b.z)/2};}
function dot(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2];}
function crs(a,b){return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];}
function nrm(v){const n=Math.hypot(v[0],v[1],v[2])||1;return [v[0]/n,v[1]/n,v[2]/n];}
function ort(v,u){const d=dot(v,u);return nrm([v[0]-u[0]*d,v[1]-u[1]*d,v[2]-u[2]*d]);}
function qcj(q){return [-q[0],-q[1],-q[2],q[3]];}
function twist(q,ax){
  const d=q[0]*ax[0]+q[1]*ax[1]+q[2]*ax[2];
  const t=[ax[0]*d,ax[1]*d,ax[2]*d,q[3]];
  const n=Math.hypot(t[0],t[1],t[2],t[3]);
  if(!(n>1e-6))return [0,0,0,1];
  return [t[0]/n,t[1]/n,t[2]/n,t[3]/n];
}
function qm(a,b){
  return [
    a[3]*b[0]+a[0]*b[3]+a[1]*b[2]-a[2]*b[1],
    a[3]*b[1]-a[0]*b[2]+a[1]*b[3]+a[2]*b[0],
    a[3]*b[2]+a[0]*b[1]-a[1]*b[0]+a[2]*b[3],
    a[3]*b[3]-a[0]*b[0]-a[1]*b[1]-a[2]*b[2]
  ];
}
function arc(u,v){
  const d=dot(u,v);
  if(d>.999999)return [0,0,0,1];
  if(d<-.999999){
    const p=Math.abs(u[0])<.9?[1,0,0]:[0,1,0];
    const c=nrm(crs(u,p));
    return [c[0],c[1],c[2],0];
  }
  const c=crs(u,v),w=1+d;
  const n=Math.hypot(c[0],c[1],c[2],w)||1;
  return [c[0]/n,c[1]/n,c[2]/n,w/n];
}
function m2q(r,u,f){
  const m=[r[0],u[0],f[0],r[1],u[1],f[1],r[2],u[2],f[2]];
  const t=m[0]+m[4]+m[8];
  let q;
  if(t>0){
    const s=Math.sqrt(t+1)*2;
    q=[(m[7]-m[5])/s,(m[2]-m[6])/s,(m[3]-m[1])/s,.25*s];
  }else if(m[0]>m[4]&&m[0]>m[8]){
    const s=Math.sqrt(1+m[0]-m[4]-m[8])*2;
    q=[.25*s,(m[1]+m[3])/s,(m[2]+m[6])/s,(m[7]-m[5])/s];
  }else if(m[4]>m[8]){
    const s=Math.sqrt(1+m[4]-m[0]-m[8])*2;
    q=[(m[1]+m[3])/s,.25*s,(m[5]+m[7])/s,(m[2]-m[6])/s];
  }else{
    const s=Math.sqrt(1+m[8]-m[0]-m[4])*2;
    q=[(m[2]+m[6])/s,(m[5]+m[7])/s,.25*s,(m[3]-m[1])/s];
  }
  const n=Math.hypot(q[0],q[1],q[2],q[3])||1;
  return [q[0]/n,q[1]/n,q[2]/n,q[3]/n];
}
function mkOE(){
  let p=null,dp=[0,0,0,0],tp=0;
  return function(q,t,mn,be){
    if(!p){p=q.slice();tp=t;return p;}
    let dt=(t-tp)/1000;
    tp=t;
    if(!(dt>0)||dt>.5)dt=1/30;
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
function smooth(k,q){
  if(!oe[k])oe[k]=mkOE();
  return oe[k](q,performance.now(),.02+(1-cfg.sm)*1.6,.7);
}

function pose(W){
  const shM=mid(W[LM.shL],W[LM.shR]);
  const hpM=mid(W[LM.hipL],W[LM.hipR]);
  const up=nrm(sub(shM,hpM));
  const rt=ort(sub(W[LM.shR],W[LM.shL]),up);
  let fw=nrm(crs(rt,up));
  if(dot(fw,sub(W[LM.nose],shM))<0)fw=[-fw[0],-fw[1],-fw[2]];
  const loc=v=>[dot(v,rt),dot(v,up),dot(v,fw)];
  const out={};
  const arm=(sh,el,wr,key)=>{
    const ua=nrm(sub(W[el],W[sh]));
    const fa=nrm(sub(W[wr],W[el]));
    const hs=sub(W[wr],W[sh]);
    const hl=Math.hypot(hs[0],hs[1],hs[2]);
    const d=nrm(loc(hl>.08?nrm(hs):ua));
    const ang=Math.acos(Math.max(-1,Math.min(1,dot(ua,fa))));
    out[key]={q:smooth(key,arc([0,-1,0],d)),bd:ang*cfg.bend};
  };
  arm(LM.shR,LM.elR,LM.wrR,'R');
  arm(LM.shL,LM.elL,LM.wrL,'L');
  const eM=mid(W[LM.earL],W[LM.earR]);
  const hr=nrm(sub(W[LM.earR],W[LM.earL]));
  let hf=ort(sub(W[LM.nose],eM),hr);
  const hu=nrm(crs(hf,hr));
  const R=loc(hr),U=loc(hu),F=loc(hf);
  out.H={q:smooth('H',m2q(nrm(R),nrm(U),nrm(F))),bd:0};
  return out;
}

async function plLoad(){
  const m=MODELS.find(x=>x[0]===cfg.model)||MODELS[0];
  camSt('Cargando modelo '+m[0]+'...');
  const V=await import(MP_M+'/vision_bundle.mjs');
  const fs=await V.FilesetResolver.forVisionTasks(MP_W);
  if(PL){try{PL.close();}catch(e){}PL=null;}
  PL=await V.PoseLandmarker.createFromOptions(fs,{
    baseOptions:{modelAssetPath:m[2],delegate:'GPU'},
    runningMode:'VIDEO',
    numPoses:1
  });
  camSt('Modelo '+m[0]+' listo');
}
function camSt(t){const e=$('m2-st');if(e)e.textContent=t;}
async function camStart(){
  if(camOn)return;
  try{
    stream=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:'user'},audio:false});
  }catch(e){camSt('Sin permiso de camara');msg('Sin permiso de camara',true);return;}
  const v=$('m2-vid');
  v.srcObject=stream;
  await v.play().catch(()=>{});
  try{await plLoad();}
  catch(e){camSt('Error cargando modelo');msg('Error modelo '+(e&&e.message||''),true);return;}
  camOn=true;
  wlGet();
  $('m2-ov').width=v.videoWidth||640;
  $('m2-ov').height=v.videoHeight||480;
  loop();
}
function camStop(){
  camOn=false;
  wlDrop();
  cancelAnimationFrame(rafId);
  if(stream){stream.getTracks().forEach(t=>t.stop());stream=null;}
  const v=$('m2-vid');
  if(v)v.srcObject=null;
  if(PL){try{PL.close();}catch(e){}PL=null;}
  camSt('Detenida');
}
function draw(res){
  const c=$('m2-ov'),x=c.getContext('2d');
  x.clearRect(0,0,c.width,c.height);
  if(!res||!res.landmarks||!res.landmarks.length)return;
  const L=res.landmarks[0];
  const P=[[11,13],[13,15],[12,14],[14,16],[11,12],[11,23],[12,24],[23,24],[7,8]];
  x.strokeStyle='#4ade80';x.lineWidth=3;x.lineCap='round';
  x.beginPath();
  for(const [a,b] of P){
    if(!L[a]||!L[b])continue;
    x.moveTo(L[a].x*c.width,L[a].y*c.height);
    x.lineTo(L[b].x*c.width,L[b].y*c.height);
  }
  x.stroke();
  x.fillStyle='#fff';
  for(const i of [0,11,12,13,14,15,16,23,24]){
    if(!L[i])continue;
    x.beginPath();x.arc(L[i].x*c.width,L[i].y*c.height,4,0,7);x.fill();
  }
}
function loop(){
  if(!camOn){return;}
  rafId=requestAnimationFrame(loop);
  const v=$('m2-vid');
  if(!PL||plBusy||!v.videoWidth||v.currentTime===lastT)return;
  const now=performance.now();
  if(now-lastFrame<1000/(cfg.fps||20))return;
  lastFrame=now;
  lastT=v.currentTime;
  plBusy=true;
  let res=null;
  try{res=PL.detectForVideo(v,now);}catch(e){}
  plBusy=false;
  if(!res)return;
  if(camShow)draw(res);
  const W=res.worldLandmarks&&res.worldLandmarks[0];
  if(!W||W.length<25)return;
  const o=pose(W);
  if(!o)return;
  camSt(camShow?'Siguiendo':'Siguiendo (video oculto)');
  for(const k of ['L','R','H'])emit({r:k,q:o[k].q,bd:o[k].bd});
}
function camHide(v){
  camShow=!v;
  $('m2-stage').style.display=camShow?'':'none';
  $('m2-hide').textContent=camShow?'Ocultar video':'Mostrar video';
  $('m2-hide').classList.toggle('on',!camShow);
  if(!camShow){
    const c=$('m2-ov');
    c.getContext('2d').clearRect(0,0,c.width,c.height);
  }
}
async function wlGet(){
  try{
    if(!navigator.wakeLock||wl)return;
    wl=await navigator.wakeLock.request('screen');
    wl.addEventListener('release',()=>{wl=null;});
  }catch(e){}
}
function wlDrop(){
  if(!wl)return;
  try{wl.release();}catch(e){}
  wl=null;
}
function emit(f){
  if(isHost&&localCam){hostFwd(f);return;}
  Object.values(conns).forEach(c=>{if(c.open)try{c.send(f);}catch(e){}});
}
function hostFwd(f){
  if((f.r==='L'||f.r==='R')&&twQ[f.r]){
    const ax=qv(f.q,[0,-1,0]);
    f=Object.assign({},f,{q:qm(twist(twQ[f.r],ax),f.q)});
  }
  if(f.r==='R'){
    f=Object.assign({},f,{a:ctlSt.a,mv:ctlSt.mv,lk:ctlSt.lk});
  }
  fwd(f);
}

function mkJoy(lbl,i){
  const d=mkEl('div','m2-joy');
  const k=mkEl('i'),sp=mkEl('span');
  sp.textContent=lbl;
  d.appendChild(k);d.appendChild(sp);
  let act=null;
  const set=(x,y)=>{
    joyV[i]=[x,y];
    k.style.transform='translate(calc(-50% + '+(x*40)+'px), calc(-50% + '+(-y*40)+'px))';
  };
  set(0,0);
  function mv(e){
    const r=d.getBoundingClientRect();
    let x=(e.clientX-r.left-r.width/2)/(r.width/2);
    let y=-(e.clientY-r.top-r.height/2)/(r.height/2);
    const m=Math.hypot(x,y);
    if(m>1){x/=m;y/=m;}
    set(x,y);
  }
  d.addEventListener('pointerdown',e=>{act=e.pointerId;d.setPointerCapture(act);mv(e);});
  d.addEventListener('pointermove',e=>{if(act===e.pointerId)mv(e);});
  const up=e=>{if(act!==e.pointerId)return;act=null;set(0,0);};
  d.addEventListener('pointerup',up);
  d.addEventListener('pointercancel',up);
  return d;
}
function surfDraw(){
  const bb=$('m2-sb'),jb=$('m2-sj');
  bb.innerHTML='';jb.innerHTML='';
  joyV={};btnS=[];
  myCtrls.forEach((c,i)=>{
    const act=ACTS.find(a=>a.id===c.a);
    const nm=act?act.n:c.a;
    if(c.k==='joy'){joyV[i]=[0,0];jb.appendChild(mkJoy(nm,i));return;}
    const b=mkEl('button');
    b.textContent=c.a==='chat'?(c.v||'Comando'):(c.a==='key'?(c.v||'Tecla'):nm);
    btnS[i]=0;
    const dn=e=>{e.preventDefault();btnS[i]=1;try{if(navigator.vibrate)navigator.vibrate(18);}catch(x){}};
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
    const x=e.beta*Math.PI/360,y=e.gamma*Math.PI/360,z=e.alpha*Math.PI/360;
    const cX=Math.cos(x),cY=Math.cos(y),cZ=Math.cos(z);
    const sX=Math.sin(x),sY=Math.sin(y),sZ=Math.sin(z);
    qRaw=[sX*cY*cZ-cX*sY*sZ,cX*sY*cZ+sX*cY*sZ,cX*cY*sZ+sX*sY*cZ,cX*cY*cZ-sX*sY*sZ];
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
      if(ps.some(x=>x.state==='denied'))throw 0;
      sen=new RelativeOrientationSensor({frequency:60,referenceFrame:'screen'});
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
function ctlTx(){
  const c=Object.values(conns).find(x=>x&&x.open);
  if(!c)return;
  const a=[],mv=[0,0],lk=[0,0];
  myCtrls.forEach((x,i)=>{
    if(x.k==='joy'){
      const v=joyV[i]||[0,0];
      if(x.a==='move'){mv[0]=v[0];mv[1]=v[1];}
      else if(x.a==='look'){lk[0]=v[0];lk[1]=v[1];}
      return;
    }
    if(!btnS[i])return;
    if(x.a==='chat')a.push('chat:'+(x.v||''));
    else if(x.a==='key')a.push('key:'+(x.v||''));
    else a.push(x.a);
  });
  const m={t:'ctl',a,mv,lk};
  if(myTw&&qRaw)m.q=qRaw;
  try{c.send(m);}catch(e){}
}
async function ctlGo(){
  if(myTw){
    const ok=await senStart();
    if(!ok)msg('Sin permiso de sensores, los botones igual andan',true);
  }
  $('m2-surf').classList.add('on');
  try{
    if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();
    if(screen.orientation&&screen.orientation.lock)await screen.orientation.lock('portrait');
  }catch(e){}
  surfDraw();
  wlGet();
  ctlOn=true;
  if(txIv)clearInterval(txIv);
  txIv=setInterval(ctlTx,1000/40);
  $('m2-ss').textContent='enviando';
}
function ctlStop(){
  ctlOn=false;
  wlDrop();
  if(txIv){clearInterval(txIv);txIv=null;}
  if(sen){try{sen.stop();}catch(e){}sen=null;}
  $('m2-surf').classList.remove('on');
  try{if(document.fullscreenElement)document.exitFullscreen();}catch(e){}
  try{if(screen.orientation&&screen.orientation.unlock)screen.orientation.unlock();}catch(e){}
}

function wsSt(t){$('m2-wst').textContent=t;}
function wsGo(){
  if(ws){try{ws.close();}catch(e){}ws=null;}
  cfg.port=Number($('m2-port').value)||8787;
  cfgSave();
  wsSt('Conectando...');
  try{ws=new WebSocket('ws://127.0.0.1:'+cfg.port);}
  catch(e){wsSt('Bloqueado por el navegador');return;}
  ws.onopen=()=>{
    wsSt('Conectado');
    try{ws.send(JSON.stringify({t:'getkeys'}));}catch(e){}
  };
  ws.onmessage=ev=>{
    try{
      const d=JSON.parse(ev.data);
      if(d&&d.t==='keys'&&Array.isArray(d.v)){
        keyL=d.v;
        keyN();
        edDraw();
      }
    }catch(e){}
  };
  ws.onclose=()=>{ws=null;wsSt('Desconectado');keyL=[];keyN();};
  ws.onerror=()=>wsSt('Sin respuesta, revisa el mod');
}
function fwd(f){
  if(!ws||ws.readyState!==1)return;
  try{ws.send(JSON.stringify(f));}catch(e){}
}

function cfgLoad(){
  try{
    const r=JSON.parse(localStorage.getItem(LSK)||'null');
    if(r&&typeof r==='object')cfg=Object.assign(cfg,r);
  }catch(e){}
  if(!Array.isArray(cfg.ctrls))cfg.ctrls=[];
  if(!cfg.dev||typeof cfg.dev!=='object')cfg.dev={};
  $('m2-port').value=cfg.port;
  $('m2-sm').value=String(Math.round(cfg.sm*100));
  $('m2-bd').value=String(Math.round(cfg.bend*100));
  $('m2-fp').value=String(cfg.fps||20);
  lbls();
}
function cfgSave(){try{localStorage.setItem(LSK,JSON.stringify(cfg));}catch(e){}}
function lbls(){
  $('m2-lsm').textContent='Suavizado '+Math.round(cfg.sm*100)+'%';
  $('m2-lbd').textContent='Codo '+Math.round(cfg.bend*100)+'%';
  $('m2-lfp').textContent='Analisis '+(cfg.fps||20)+'/s';
}
function mdlFill(){
  const s=$('m2-model');
  s.innerHTML='';
  MODELS.forEach(m=>{
    const o=mkEl('option');
    o.value=m[0];o.textContent=m[1];
    s.appendChild(o);
  });
  s.value=cfg.model;
}

function chkConn(){
  if(dead)return;
  Object.keys(conns).forEach(p=>{
    const c=conns[p];
    if(c&&c.open)return;
    if(c){try{c.close();}catch(e){}}
    delete conns[p];delete miss[p];
    if(isHost&&devs[p]){devs[p].ok=false;devDraw();}
  });
  if(!isHost&&!Object.keys(conns).length&&room)rejoin();
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
      peer.on('connection',c=>hookConn(c));
      peer.on('disconnected',()=>{if(room&&!dead)peer.reconnect();});
      res();
    });
  });
}
function hookConn(c){
  conns[c.peer]=c;
  miss[c.peer]=0;
  c.on('open',()=>{
    delete cSince[c.peer];
    clearTimeout(joinTo);
    msg('');
    if(isHost){
      devs[c.peer]={ok:true,last:0};
      devDraw();
      pushDev(c.peer);
    }else{
      $('m2-pair').style.display='none';
      $('m2-ctl').classList.add('on');
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
  if(isHost&&devs[p]){devs[p].ok=false;devDraw();}
}
function startHB(){
  if(hbIv)return;
  hbIv=setInterval(()=>{
    Object.keys(conns).forEach(p=>{
      const c=conns[p];
      if(!c||!c.open){dropPeer(p);return;}
      miss[p]=(miss[p]||0)+1;
      if(miss[p]>4){dropPeer(p);return;}
      try{c.send({t:'ping'});}catch(e){dropPeer(p);}
    });
  },5000);
}
function onData(d,from){
  if(!d)return;
  if(from)miss[from]=0;
  if(d.t==='ping'){const c=conns[from];if(c&&c.open)try{c.send({t:'pong'});}catch(e){}return;}
  if(d.t==='pong')return;
  if(d.t==='cfg'){
    if(typeof d.sm==='number')cfg.sm=d.sm;
    if(typeof d.bend==='number')cfg.bend=d.bend;
    if(typeof d.fps==='number')cfg.fps=d.fps;
    if(d.model&&d.model!==cfg.model){cfg.model=d.model;if(camOn)plLoad().catch(()=>{});}
    if(isHost)return;
    if(typeof d.mode!=='string'&&!Array.isArray(d.ctrls))return;
    if(typeof d.mode==='string')myMode=d.mode;
    if(typeof d.tw==='string')myTw=d.tw;
    if(Array.isArray(d.ctrls))myCtrls=d.ctrls;
    $('m2-cam').classList.toggle('on',myMode==='cam');
    $('m2-ctl').classList.toggle('on',myMode!=='cam');
    $('m2-ctt').textContent=myTw?('Control y torsion '+(myTw==='L'?'brazo izq':'brazo der')):'Control';
    $('m2-sr').textContent=$('m2-ctt').textContent;
    if(ctlOn)surfDraw();
    return;
  }
  if(!isHost)return;
  if(d.t==='ctl'){
    if(devs[from]){devs[from].ok=true;devs[from].last=Date.now();}
    ctlSt={a:d.a||[],mv:d.mv||[0,0],lk:d.lk||[0,0]};
    const dc=cfg.dev[from];
    if(dc&&dc.tw&&d.q)twQ[dc.tw]=d.q;
    return;
  }
  if(!d.r)return;
  if(devs[from]){devs[from].ok=true;devs[from].last=Date.now();}
  hostFwd(d);
}
function pushCfg(){
  Object.keys(conns).forEach(p=>pushDev(p));
}
function devCfg(p){
  if(!cfg.dev[p])cfg.dev[p]={mode:'ctl',tw:''};
  return cfg.dev[p];
}
function pushDev(p){
  const c=devCfg(p);
  sendTo(p,{t:'cfg',mode:c.mode,tw:c.tw,ctrls:cfg.ctrls,sm:cfg.sm,bend:cfg.bend,model:cfg.model,fps:cfg.fps});
}
function sendTo(p,d){
  const c=conns[p];
  if(c&&c.open)try{c.send(d);}catch(e){}
}
function devDraw(){
  const b=$('m2-devs');
  b.innerHTML='';
  const ks=Object.keys(devs);
  $('m2-none').style.display=(ks.length||localCam)?'none':'block';
  ks.forEach(p=>{
    const c=devCfg(p);
    const el=mkEl('div','m2-dv');
    el.style.display='block';
    if(!devs[p].ok)el.classList.add('dead');
    const top=mkEl('div');
    top.style.cssText='display:flex;align-items:center;gap:8px;margin-bottom:6px';
    const dt=mkEl('span','m2-dot');
    const n=mkEl('span');
    n.style.cssText='font-family:monospace;font-size:.74rem';
    n.textContent=p.slice(0,10)+(devs[p].ok?'':' (desconectado)');
    top.appendChild(dt);top.appendChild(n);
    el.appendChild(top);
    const row=mkEl('div','m2-row');
    const sm=mkEl('select','m2-s');
    [['ctl','Control'],['cam','Camara']].forEach(o=>{
      const op=mkEl('option');op.value=o[0];op.textContent=o[1];sm.appendChild(op);
    });
    sm.value=c.mode;
    sm.onchange=()=>{c.mode=sm.value;cfgSave();devDraw();pushDev(p);};
    row.appendChild(sm);
    if(c.mode==='ctl'){
      const st=mkEl('select','m2-s');
      [['','Sin torsion'],['L','Torsion brazo izq'],['R','Torsion brazo der']].forEach(o=>{
        const op=mkEl('option');op.value=o[0];op.textContent=o[1];st.appendChild(op);
      });
      st.value=c.tw||'';
      st.onchange=()=>{c.tw=st.value;cfgSave();pushDev(p);};
      row.appendChild(st);
    }
    el.appendChild(row);
    b.appendChild(el);
  });
}
function keyN(){
  const e=$('m2-keyn');
  if(!e)return;
  e.textContent=keyL.length
    ? (keyL.length+' teclas del juego disponibles. Elegi la accion "Tecla de un mod" en un boton para usarlas.')
    : 'Sin teclas todavia. Conecta el mod arriba y se cargan solas.';
}
function edDraw(){
  const box=$('m2-ctrls');
  if(!box)return;
  box.innerHTML='';
  cfg.ctrls.forEach((c,i)=>{
    const row=mkEl('div','m2-ct');
    const tag=mkEl('span');
    tag.style.cssText='font-size:.72rem;color:rgba(255,255,255,.45)';
    tag.textContent=c.k==='joy'?'JOY':'BTN';
    const sel=mkEl('select');
    ACTS.filter(a=>a.k===c.k).forEach(a=>{
      const o=mkEl('option');o.value=a.id;o.textContent=a.n;sel.appendChild(o);
    });
    sel.value=c.a;
    sel.onchange=()=>{c.a=sel.value;c.v='';cfgSave();edDraw();pushAll();};
    row.appendChild(tag);row.appendChild(sel);
    if(c.a==='chat'){
      const t=mkEl('input');
      t.placeholder='/time set day';
      t.value=c.v||'';
      t.oninput=()=>{c.v=t.value;cfgSave();pushAll();};
      row.appendChild(t);
    }
    if(c.a==='key'){
      const ks=mkEl('select');
      const blank=mkEl('option');
      blank.value='';
      blank.textContent=keyL.length?'(elegir tecla)':'(conecta el mod)';
      ks.appendChild(blank);
      keyL.forEach(k=>{
        const o=mkEl('option');o.value=k.n;o.textContent=k.n;ks.appendChild(o);
      });
      ks.value=c.v||'';
      ks.onchange=()=>{c.v=ks.value;cfgSave();edDraw();pushAll();};
      row.appendChild(ks);
      const t=mkEl('input');
      t.placeholder='key.emotecraft.menu';
      t.value=c.v||'';
      t.oninput=()=>{c.v=t.value;cfgSave();pushAll();};
      row.appendChild(t);
    }
    const del=mkEl('button','m2-b sm');
    del.textContent='X';
    del.onclick=()=>{cfg.ctrls.splice(i,1);cfgSave();edDraw();pushAll();};
    row.appendChild(del);
    box.appendChild(row);
  });
}
function pushAll(){Object.keys(devs).forEach(p=>{if(devs[p].ok)pushDev(p);});}
function edAdd(k){
  cfg.ctrls.push({k,a:k==='joy'?'move':'attack',v:''});
  cfgSave();
  edDraw();
  pushAll();
}
async function joinRoom(rid,noConn){
  await initPeer();
  let d;
  try{d=await api('POST','/rooms/'+rid+'/join',{pw:'',pid,nick:'mcap2'});}
  catch(e){msg(e.status===429?'Demasiados intentos, espera un rato':'Error al unirse',true);return false;}
  room=rid;token=d.token;
  if(!noConn&&!isHost)connectMissing(d.peers);
  startPing();
  return d;
}
async function newRoom(){
  for(let i=0;i<4;i++){
    if(!myCode||i>0)myCode=genCode();
    const d=await joinRoom('mcap2-'+myCode,true);
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
    const nc=peer.connect(p.pid,{reliable:true});
    if(!nc){delete cSince[p.pid];return;}
    cSince[p.pid]={t:Date.now(),c:nc};
    hookConn(nc);
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
  $('m2-code').textContent=code;
  try{
    const QR=(await import(M_QR)).default;
    const b=$('m2-qr');
    b.innerHTML='';
    QR.render({text:code,radius:.4,ecLevel:'M',size:174,quiet:2,fill:'#000',background:'#fff'},b);
  }catch(e){$('m2-qr').textContent='QR no disponible';}
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
  $('m2-cmod').classList.add('on');
  msg('Iniciando camara...');
  try{
    if(!window.Html5Qrcode)await loadJS(M_H5Q);
    $('m2-reader').innerHTML='';
    const inst=new Html5Qrcode('m2-reader');
    qrCam=inst;
    await inst.start({facingMode:'environment'},{fps:10,qrbox:{width:240,height:240}},raw=>{
      const s=String(raw||'').trim();
      const code=(s.includes('#')?s.split('#').pop():s).trim().toUpperCase();
      if(!code)return;
      stopScan();
      $('m2-join').value=code;
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
  $('m2-cmod').classList.remove('on');
}
async function doJoin(){
  const raw=($('m2-join').value||'').trim().toUpperCase();
  if(!raw)return;
  if(!isPin(raw)){msg('Ese codigo no es valido',true);return;}
  if(raw===myCode){msg('Ese es tu propio codigo',true);return;}
  msg('Conectando...');
  leaveRoom();
  isHost=false;
  $('m2-host').classList.remove('on');
  if(!await joinRoom('mcap2-'+raw))return;
  clearTimeout(joinTo);
  joinTo=setTimeout(()=>{if(!Object.keys(conns).length)msg('No se encontro ese codigo',true);},15000);
}

$('m2-go').onclick=doJoin;
$('m2-scan').onclick=scan;
$('m2-ccl').onclick=stopScan;
$('m2-join').addEventListener('keydown',e=>{if(e.key==='Enter')doJoin();});
$('m2-wsb').onclick=wsGo;
$('m2-port').onchange=cfgSave;
$('m2-start').onclick=camStart;
$('m2-cgo').onclick=ctlGo;
$('m2-sx').onclick=ctlStop;
$('m2-adj').onclick=()=>edAdd('joy');
$('m2-adb').onclick=()=>edAdd('btn');
$('m2-stop').onclick=camStop;
$('m2-local').onclick=()=>{
  localCam=true;
  $('m2-cam').classList.add('on');
  $('m2-local').classList.add('on');
  $('m2-local').disabled=true;
  devDraw();
  camStart();
};
$('m2-model').onchange=()=>{
  cfg.model=$('m2-model').value;
  cfgSave();
  pushCfg();
  if(camOn)plLoad().catch(e=>msg('Error modelo',true));
};
$('m2-sm').oninput=()=>{cfg.sm=Number($('m2-sm').value)/100;lbls();cfgSave();pushCfg();};
$('m2-bd').oninput=()=>{cfg.bend=Number($('m2-bd').value)/100;lbls();cfgSave();pushCfg();};
$('m2-fp').oninput=()=>{cfg.fps=Number($('m2-fp').value)||20;lbls();cfgSave();pushCfg();};
$('m2-hide').onclick=()=>camHide(camShow);

function teardown(){
  dead=true;
  stopScan();
  ctlStop();
  camStop();
  if(hbIv){clearInterval(hbIv);hbIv=null;}
  stopPing();
  if(ws){try{ws.close();}catch(e){}ws=null;}
  leaveRoom();
  Object.values(conns).forEach(c=>{try{c.close();}catch(e){}});
  conns={};
  if(peer&&!peer.destroyed){try{peer.destroy();}catch(e){}}
  peer=null;pid=null;
  document.removeEventListener('visibilitychange',onVis);
  window.removeEventListener('online',chkConn);
  window.removeEventListener('beforeunload',teardown);
}
function onVis(){
  if(document.visibilityState!=='visible'||dead)return;
  chkConn();
  if(camOn||ctlOn)wlGet();
}
document.addEventListener('visibilitychange',onVis);
window.addEventListener('online',chkConn);
window.addEventListener('beforeunload',teardown);
const cEl=document.getElementById('content');
if(cEl)cEl.addEventListener('contentUnload',teardown,{once:true});

(async function(){
  cfgLoad();
  mdlFill();
  keyN();
  edDraw();
  try{await initPeer();}
  catch(e){msg('Error Conexion, no se pudo iniciar',true);return;}
  if(PRE&&isPin(PRE)){
    $('m2-join').value=PRE;
    doJoin();
    return;
  }
  isHost=true;
  $('m2-host').classList.add('on');
  await newRoom();
  showQR(myCode);
})();
})();
</script>
