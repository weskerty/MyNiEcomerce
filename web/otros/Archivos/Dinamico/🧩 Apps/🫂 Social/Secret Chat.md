<style>
#chatw{--cw-r-lg:var(--r-lg,24px);--cw-r-md:var(--r-md,16px);--cw-r-sm:var(--r-sm,12px);display:flex;flex-direction:column;gap:10px}
#chatw *{box-sizing:border-box}

#cw-lb-h{display:flex;align-items:center;gap:10px;padding:14px 16px}
#cw-lb-h h2{flex:1;margin:0;border:none!important;font-size:1.05rem}
#cw-search{padding:0 16px 4px}
#cw-list{display:flex;flex-direction:column;gap:6px;padding:6px 10px 14px;max-height:62vh;overflow-y:auto}
.cw-room{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:var(--cw-r-sm);cursor:pointer;transition:background .15s;border:1px solid rgba(255,255,255,.08)}
.cw-room:hover{background:rgba(255,255,255,.06)}
.cw-room-ic{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.07);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0}
.cw-room-tx{flex:1;min-width:0}
.cw-room-nm{font-size:.9rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cw-room-sb{font-size:.72rem;color:rgba(255,255,255,.5);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cw-room-rm{border:none;background:none;color:rgba(255,255,255,.4);font-size:.85rem;cursor:pointer;padding:4px;flex-shrink:0}
#cw-empty{text-align:center;padding:26px;color:rgba(255,255,255,.5);font-size:.85rem}
#cw-share-banner{display:none;margin:0 16px 8px;padding:9px 14px;border-radius:var(--cw-r-sm);background:rgba(var(--accent-rgb),.18);border:1px solid rgba(var(--accent-rgb),.35);font-size:.82rem;text-align:center}
#cw-share-prompt{display:none;align-items:center;gap:8px;padding:8px 12px;background:rgba(var(--accent-rgb),.15);border-bottom:1px solid rgba(255,255,255,.1)}
#cw-share-prompt-tx{flex:1;font-size:.8rem}
#cw-share-prompt button{border:none;border-radius:var(--cw-r-sm);padding:6px 12px;font-size:.78rem;cursor:pointer}
#cw-share-send{background:var(--accent);color:#fff}
#cw-share-discard{background:rgba(255,255,255,.08);color:#fff}

#cw-chat{display:none;flex-direction:column;overflow:hidden}
#cw-chat.on{display:flex}
#cw-lobby.hid{display:none}
#cw-ch-h{display:flex;align-items:center;gap:10px;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.1)}
#cw-ch-tx{flex:1;min-width:0}
#cw-ch-nm{font-size:.92rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#cw-ch-sb{font-size:.68rem;color:rgba(255,255,255,.5)}
#cw-vg{display:none;gap:8px;padding:8px;overflow-x:auto;border-bottom:1px solid rgba(255,255,255,.1)}
#cw-vg.on{display:flex}
.cw-vp{flex-shrink:0;position:relative}
.cw-vp video{width:100px;height:75px;border-radius:var(--cw-r-sm);object-fit:cover;background:#000;display:block}
.cw-vp-n{font-size:.6rem;color:rgba(255,255,255,.6);text-align:center;margin-top:2px;max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#cw-msgs{overflow-y:auto;padding:12px 10px;display:flex;flex-direction:column;gap:6px;height:52vh;max-height:52vh}
.cw-msg{display:flex;gap:8px;max-width:82%;align-items:flex-end}
.cw-msg.me{flex-direction:row-reverse;align-self:flex-end}
.cw-msg .cw-avi{width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-size:.55rem;font-weight:700;flex-shrink:0;overflow:hidden}
.cw-msg-b{padding:8px 12px;border-radius:16px;font-size:.86rem;line-height:1.4;word-break:break-word;background:rgba(255,255,255,.06)}
.cw-msg.me .cw-msg-b{background:rgba(var(--accent-rgb),.28);border-bottom-right-radius:4px}
.cw-msg:not(.me) .cw-msg-b{border-bottom-left-radius:4px}
.cw-msg-nm{font-size:.62rem;margin-bottom:2px;font-weight:600;color:var(--accent-2,#38bdf8)}
.cw-sys{font-size:.68rem;color:rgba(255,255,255,.45);text-align:center;padding:4px 0}
.cw-flash .cw-msg-b{animation:cw-flash-anim 1s ease}
@keyframes cw-flash-anim{0%,100%{box-shadow:none}30%{box-shadow:0 0 0 2px rgba(var(--accent-rgb),.7)}}
body.low-perf .cw-flash .cw-msg-b{animation:none}
.cw-stk{width:120px;height:120px;display:block;border-radius:var(--cw-r-sm);object-fit:contain;background:rgba(255,255,255,.04)}
.cw-dl{display:inline-flex;align-items:center;gap:6px;padding:6px 11px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);border-radius:var(--cw-r-sm);font-size:.76rem;cursor:pointer;margin-top:3px}
.cw-dl:hover{background:rgba(255,255,255,.13)}
.cw-torrent-pr{font-size:.64rem;color:rgba(255,255,255,.5);margin-top:2px}

#cw-iw{border-top:1px solid rgba(255,255,255,.1)}
#cw-sp{display:none;overflow-y:auto;padding:16px 12px;flex-wrap:wrap;gap:10px;align-content:flex-start;height:52vh;max-height:52vh}
#cw-sp.on{display:flex}
.cw-sp-item{position:relative;width:64px;height:64px;border:none;background:rgba(255,255,255,.05);border-radius:var(--cw-r-sm);cursor:pointer;padding:0;overflow:hidden;flex-shrink:0}
.cw-sp-item img{width:100%;height:100%;object-fit:contain}
.cw-sp-add{width:64px;height:64px;border:1px dashed rgba(255,255,255,.3);background:none;border-radius:var(--cw-r-sm);color:#fff;font-size:1.5rem;cursor:pointer;flex-shrink:0}
#cw-ib{display:flex;align-items:flex-end;gap:6px;padding:8px 10px}
#cw-mi{flex:1;padding:9px 13px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:18px;color:#fff;font-size:.88rem;outline:none;resize:none;max-height:110px;line-height:1.4}
.cw-ibtn{border:none;background:rgba(255,255,255,.07);color:#fff;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:1rem;flex-shrink:0;display:flex;align-items:center;justify-content:center}
.cw-ibtn.send{background:var(--accent);color:#fff}

#cw-participants{display:none;overflow-y:auto;padding:16px 12px;flex-wrap:wrap;gap:16px;align-content:flex-start;height:52vh;max-height:52vh}
#cw-participants.on{display:flex}
#cw-msgs.hid{display:none}
#cw-wait{display:none;flex-direction:column;align-items:center;justify-content:center;gap:10px;height:52vh;max-height:52vh}
#cw-wait.on{display:flex}
#cw-wait-img{width:64px;height:64px;object-fit:contain;opacity:.85}
#cw-wait-tx{font-size:.78rem;color:rgba(255,255,255,.55)}
.cw-ibtn:disabled,#cw-mi:disabled{opacity:.4;cursor:default}
.cw-bubble{display:flex;flex-direction:column;align-items:center;gap:6px;width:76px;cursor:pointer;background:none;border:none;font-family:inherit}
.cw-bubble:disabled{cursor:default}
.cw-bubble-c{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1rem;color:#fff}
.cw-bubble-n{font-size:.7rem;text-align:center;color:#fff;max-width:76px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

#cw-qb{display:none;align-items:center;gap:8px;padding:6px 12px;background:rgba(255,255,255,.05);border-top:1px solid rgba(255,255,255,.08)}
#cw-qb.on{display:flex}
#cw-qb-info{flex:1;min-width:0;border-left:3px solid var(--accent);padding-left:8px}
#cw-qb-nm{font-size:.68rem;color:var(--accent-2,#38bdf8);font-weight:600}
#cw-qb-tx{font-size:.75rem;color:rgba(255,255,255,.6);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#cw-qb-x{border:none;background:none;color:rgba(255,255,255,.6);font-size:.9rem;cursor:pointer;padding:4px}
.cw-quote{border-left:3px solid var(--accent);padding:3px 8px;margin-bottom:4px;border-radius:6px;background:rgba(255,255,255,.06)}
.cw-quote-nm{font-size:.62rem;color:var(--accent-2,#38bdf8);font-weight:600}
.cw-quote-tx{font-size:.72rem;color:rgba(255,255,255,.55);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.cw-msg-b.cw-sticker-msg{background:transparent;padding:0}
.cw-sticker-msg .cw-stk{background:transparent}

dialog.cw-dlg{max-width:min(360px,calc(100vw - 40px))}
dialog.cw-dlg[open]{display:flex;flex-direction:column;gap:10px}
dialog.cw-dlg h3{margin:0 0 4px;font-size:1rem;border:none!important}
.cw-lbl{font-size:.7rem;color:rgba(255,255,255,.5);letter-spacing:.05em;text-transform:uppercase;margin-bottom:3px}
.cw-row{display:flex;gap:8px}
.cw-row .Bp{flex:1}

#cw-near-list{display:none;flex-direction:column;gap:6px;padding:6px 10px 14px;max-height:62vh;overflow-y:auto}
#cw-near-list.on{display:flex}
.cw-room-in{border-color:rgba(var(--accent-rgb),.5);background:rgba(var(--accent-rgb),.08)}

#cw-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:#fff;padding:10px 22px;border-radius:12px;font-size:.85em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999;max-width:80vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer}
#cw-toast.show{opacity:1;transform:translateX(-50%) translateY(0);pointer-events:auto}
</style>

<div id="chatw">
  <div id="cw-lobby">
    <div id="cw-lb-h">
      <h2>Chats</h2>
      <button class="B Bi" id="cw-near" title="Cerca de mi" style="background:rgba(255,255,255,.08);border:none;color:#fff;width:38px;height:38px;border-radius:50%;cursor:pointer">🗺️</button>
      <button class="B Bi" id="cw-new" title="Agregar chat" style="background:rgba(255,255,255,.08);border:none;color:#fff;width:38px;height:38px;border-radius:50%;cursor:pointer">+</button>
    </div>
    <div id="cw-share-banner">Seleccionar chat para enviar</div>
    <div id="cw-search">
      <input id="cw-si" placeholder="Buscar chats..." type="search">
    </div>
    <div id="cw-list"><div id="cw-empty">Sin chats guardados. Toca + para agregar uno.</div></div>
    <div id="cw-near-list"></div>
  </div>

  <div id="cw-chat">
    <div id="cw-share-prompt">
      <span id="cw-share-prompt-tx"></span>
      <button id="cw-share-send">Enviar</button>
      <button id="cw-share-discard">Descartar</button>
    </div>
    <div id="cw-ch-h">
      <button class="cw-ibtn" id="cw-bk">←</button>
      <div id="cw-ch-tx">
        <div id="cw-ch-nm"></div>
        <div id="cw-ch-sb"></div>
      </div>
      <button class="cw-ibtn" id="cw-ch-inv" title="Copiar invitacion" style="display:none">🔗</button>
      <button class="cw-ibtn" id="cw-bm" title="Microfono">🎤</button>
      <button class="cw-ibtn" id="cw-bv" title="Camara">📷</button>
      <button class="cw-ibtn" id="cw-bp" title="Participantes">👥</button>
    </div>
    <div id="cw-vg"><div id="cw-vl" style="display:flex;gap:8px"></div></div>
    <div id="cw-msgs"></div>
    <div id="cw-participants"></div>
    <div id="cw-sp"></div>
    <div id="cw-wait"><img id="cw-wait-img" alt=""><div id="cw-wait-tx">Conectando...</div></div>
    <input type="file" id="cw-sp-file" accept="image/webp,image/avif,image/*" style="display:none">
    <div id="cw-iw">
      <div id="cw-qb">
        <div id="cw-qb-info"><div id="cw-qb-nm"></div><div id="cw-qb-tx"></div></div>
        <button id="cw-qb-x">✕</button>
      </div>
      <div id="cw-ib">
        <button class="cw-ibtn" id="cw-be">🏷️</button>
        <textarea id="cw-mi" rows="1" placeholder="Mensaje..." maxlength="4000"></textarea>
        <label class="cw-ibtn" style="cursor:pointer" title="Archivo (se comparte P2P via torrent)">📎<input type="file" id="cw-fl" style="display:none"></label>
        <button class="cw-ibtn send" id="cw-sn">➤</button>
      </div>
    </div>
  </div>
</div>

<div id="cw-toast"></div>

<dialog class="cw-dlg" id="cw-m-perfil">
  <h3>Tu nombre</h3>
  <div>
    <div class="cw-lbl">Como te ven los demas</div>
    <input class="MI" id="cw-pf-nk" placeholder="Tu nombre..." maxlength="24">
  </div>
  <div class="cw-row">
    <button class="B Bp Bac view-all-button" id="cw-pf-ok">Continuar</button>
    <button class="B Bp Bs back-button" id="cw-pf-cx">Cancelar</button>
  </div>
</dialog>

<dialog class="cw-dlg" id="cw-m-add">
  <h3>Agregar chat</h3>
  <div>
    <div class="cw-lbl">Tipo</div>
    <select class="MI" id="cw-ad-tipo">
      <option value="room">Sala P2P</option>
      <option value="irc">Canal IRC</option>
    </select>
  </div>
  <div id="cw-ad-nm-wrap">
    <div class="cw-lbl">Nombre</div>
    <input class="MI" id="cw-ad-nm" placeholder="Para identificarlo en tu lista..." maxlength="40">
  </div>

  <div id="cw-ad-room-fields">
    <div class="cw-row">
      <div style="flex:1">
        <div class="cw-lbl">ID de sala (compartila para invitar)</div>
        <input class="MI" id="cw-ad-rid" placeholder="sala-xxxxxx">
      </div>
      <button class="B Bi" id="cw-ad-rid-gen" title="Generar ID nueva" style="align-self:flex-end;background:rgba(255,255,255,.08);border:none;color:#fff;width:38px;height:38px;border-radius:50%;cursor:pointer">🎲</button>
    </div>
    <div>
      <div class="cw-lbl">Contrasena (opcional)</div>
      <input class="MI" id="cw-ad-rpw" type="password" placeholder="...">
    </div>
  </div>

  <div id="cw-ad-irc-fields" style="display:none">
    <div>
      <div class="cw-lbl">Tipo de conexion</div>
      <select class="MI" id="cw-irc-transport">
        <option value="ws">WebSocket directo (servidor con soporte nativo)</option>
        <option value="sockjs">SockJS (gateway tipo KiwiIRC)</option>
      </select>
    </div>
    <div id="cw-irc-ws-fields" class="cw-row">
      <div style="flex:2">
        <div class="cw-lbl">Servidor</div>
        <input class="MI" id="cw-irc-host" placeholder="irc.ejemplo.org">
      </div>
      <div style="flex:1">
        <div class="cw-lbl">Puerto WS</div>
        <input class="MI" id="cw-irc-port" type="number" placeholder="443">
      </div>
    </div>
    <div id="cw-irc-sockjs-fields" style="display:none">
      <div>
        <div class="cw-lbl">URL del gateway</div>
        <input class="MI" id="cw-irc-gw-url" placeholder="https://web.libera.chat/webirc/kiwiirc">
      </div>
      <div class="cw-row">
        <div style="flex:2">
          <div class="cw-lbl">Host IRC interno (normalmente "default")</div>
          <input class="MI" id="cw-irc-gw-host" placeholder="default">
        </div>
        <div style="flex:1">
          <div class="cw-lbl">Puerto</div>
          <input class="MI" id="cw-irc-gw-port" type="number" placeholder="6667">
        </div>
      </div>
    </div>
    <div>
      <div class="cw-lbl">Canal</div>
      <input class="MI" id="cw-irc-chan" placeholder="#canal">
    </div>
    <div>
      <div class="cw-lbl">Contrasena del canal (opcional)</div>
      <input class="MI" id="cw-irc-key" type="password" placeholder="...">
    </div>
  </div>

  <div class="cw-row">
    <button class="B Bp Bac view-all-button" id="cw-ad-ok">Guardar</button>
    <button class="B Bp Bs back-button" id="cw-ad-cx">Cancelar</button>
  </div>
</dialog>

<script>
!function(){
const HIST=200,DOM=80,IM_STK=524288,AUTO_DL_MAX=1048576,MSG_MAX=4000;
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const mk=(tag,cls)=>{const e=document.createElement(tag);if(cls)e.className=cls;return e;};
const imgB=(blob,cls)=>{const i=mk('img',cls),u=URL.createObjectURL(blob);i.onload=()=>URL.revokeObjectURL(u);i.onerror=()=>URL.revokeObjectURL(u);i.src=u;return i;};
const COLS=['#e8a0a0','#e8c4a0','#a8d8a0','#a0c4e8','#c4a8e8','#e8a8d0','#a8dede','#e8e0a0'];
const uC={};let cI=0;
const gUC=pid=>{if(!uC[pid])uC[pid]=COLS[(cI++)%COLS.length];return uC[pid];};
const fSz=b=>b>1048576?(b/1048576).toFixed(1)+'MB':(b/1024).toFixed(0)+'KB';
const cut=v=>String(v==null?'':v).slice(0,MSG_MAX);
function dlBlob(blob,name){
  const u=URL.createObjectURL(blob);
  const a=mk('a');a.href=u;a.download=name;a.click();
  setTimeout(()=>URL.revokeObjectURL(u),15000);
}

const disqusEl=document.getElementById('disqus-container');
const disqusPrevDisplay=disqusEl?disqusEl.style.display:null;
if(disqusEl)disqusEl.style.display='none';


function ckGet(k){const m=document.cookie.match(new RegExp('(?:^|; )'+k+'=([^;]*)'));return m?decodeURIComponent(m[1]):null;}
function ckSet(k,v){const sec=location.protocol==='https:'?';Secure':'';document.cookie=`${k}=${encodeURIComponent(v)};path=/;max-age=31536000;SameSite=Strict${sec}`;}
let nick=ckGet('cw_nick')||'';
function saveNick(n){
  nick=n;ckSet('cw_nick',n);
  if(geoWatchId!=null&&myGeoPos)geoPing(myGeoPos.lat,myGeoPos.lon);
}

let peerP=null;
function loadPeerJS(){if(!peerP)peerP=import('https://cdn.jsdelivr.net/npm/peerjs@1.5.5/+esm').then(m=>m.Peer||m.default);return peerP;}

const API='/api/chat',PING=10000;
async function api(method,path,body){
  const o={method,headers:{'Content-Type':'application/json'}};
  if(body)o.body=JSON.stringify(body);
  const r=await fetch(API+path,o);
  const data=await r.json().catch(()=>({}));
  if(!r.ok)throw Object.assign(new Error(data.error||String(r.status)),{status:r.status});
  return data;
}

let peer=null,pid=null,curCfg=null,curRoom=null,curToken=null,pingIv=null;
let conns={},pNk={},pAu={},pVStr={},pMu={},connectingSince={},pingMisses={};
let aStream=null,vStream=null,muted=false,vidOn=false,pCalls={};
let hist=[],domCount=0,torrentClient=null,torrentStore=null;

let ircSocket=null,ircMode=false,ircNick='',ircChannel='',ircChanKey='',ircUsers=new Map();
function inAnyChat(){return!!curRoom||!!curDM||ircMode;}

// --- DM directo (Cerca de mi): conexion P2P sin sala, sin bcrypt, reusa el reloj de espera de las salas ---
let curDM=null,dmReconnectTries={},pendingDM={};

// --- geolocalizacion: se comparte apenas se abre el chat, igual que clima.md ---
let _GU=window.GeoUtils||null,_GUp=null;
function loadGU(){
  if(_GU)return Promise.resolve(_GU);
  if(_GUp)return _GUp;
  _GUp=new Promise(res=>{
    const s=document.createElement('script');
    s.src='web/scripts/Otros/Geo/GeoUtils.js';
    s.onload=()=>{_GU=window.GeoUtils;res(_GU)};
    s.onerror=()=>res(null);
    document.head.appendChild(s);
  });
  return _GUp;
}
const GEO_MIN_PING_MS=15000,GEO_MOVE_KM=0.15,GEO_CELL_PREC=4;
let geoToken=null,geoLastPingAt=0,geoLastPos=null,geoWatchId=null,geoPingTimer=null,myGeoPos=null;
let nearbyPeople=[],nearShown=false;

function distBucket(km){
  if(km<1)return'<1km';
  if(km<3)return'1-3km';
  if(km<10)return'3-10km';
  if(km<30)return'10-30km';
  return'30-60km';
}

let _toastTimer=null,_toastAction=null;
function showToast(msg,action){
  const t=$('cw-toast');
  t.textContent=msg;
  _toastAction=action||null;
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer=setTimeout(()=>t.classList.remove('show'),4000);
}
$('cw-toast').onclick=()=>{if(_toastAction)_toastAction();$('cw-toast').classList.remove('show');};

let chatList=[];
function loadChatList(){try{return JSON.parse(localStorage.getItem('cw_chats')||'[]');}catch{return[];}}
function saveChatList(){try{localStorage.setItem('cw_chats',JSON.stringify(chatList));}catch{}}
chatList=loadChatList();

const HASWL='wakeLock' in navigator;
let wakeLock=null;
async function wakeAcquire(){
  if(!HASWL||wakeLock||!inAnyChat())return;
  try{wakeLock=await navigator.wakeLock.request('screen');wakeLock.addEventListener('release',()=>{wakeLock=null;});}catch(e){}
}
async function wakeRelease(){
  if(wakeLock){await wakeLock.release().catch(()=>{});wakeLock=null;}
}
function onVisChange(){
  if(document.visibilityState==='visible'&&inAnyChat()&&!wakeLock)wakeAcquire();
}
document.addEventListener('visibilitychange',onVisChange);

function showModal(id){$(id).showModal();document.body.style.overflow='hidden';}
function hideModal(id){$(id).close();}
document.querySelectorAll('dialog.cw-dlg').forEach(dlg=>{
  dlg.addEventListener('close',()=>{document.body.style.overflow='';});
});

function genRoomId(){return'sala-'+Math.random().toString(36).slice(2,8);}

function renderChatList(){
  const fv=$('cw-si').value.trim().toLowerCase();
  const arr=chatList.filter(c=>!fv||(c.label||'').toLowerCase().includes(fv));
  const incoming=Object.entries(pendingDM);
  const lb=$('cw-list');
  if(!incoming.length&&!arr.length){lb.innerHTML='<div id="cw-empty">Sin chats guardados. Toca + para agregar uno.</div>';return;}
  lb.innerHTML='';
  incoming.forEach(([fromPid,p])=>{
    const d=mk('div','cw-room cw-room-in');
    const ic=mk('div','cw-room-ic');ic.textContent='💬';
    const tx=mk('div','cw-room-tx');
    const nm=mk('div','cw-room-nm');nm.textContent=p.nick;
    const sb=mk('div','cw-room-sb');sb.textContent='Quiere chatear con vos';
    tx.append(nm,sb);
    d.append(ic,tx);
    d.onclick=()=>openIncomingDM(fromPid);
    lb.appendChild(d);
  });
  arr.forEach(c=>{
    const d=mk('div','cw-room');
    const ic=mk('div','cw-room-ic');ic.textContent=c.kind==='irc'?'🌐':(c.roomPw?'🔒':'🔗');
    const tx=mk('div','cw-room-tx');
    const nm=mk('div','cw-room-nm');nm.textContent=c.label;
    const sb=mk('div','cw-room-sb');sb.textContent=c.kind==='irc'?((c.transport==='sockjs'?c.gatewayUrl:c.host)+' - '+c.channel):('Sala: '+c.roomId);
    tx.append(nm,sb);
    const rm=mk('button','cw-room-rm');rm.textContent='✕';rm.title='Quitar';
    rm.onclick=e=>{e.stopPropagation();chatList=chatList.filter(x=>x.id!==c.id);saveChatList();renderChatList();};
    d.append(ic,tx,rm);
    d.onclick=()=>clickChat(c);
    lb.appendChild(d);
  });
}
$('cw-si').oninput=renderChatList;

function renderNearby(){
  const wrap=$('cw-near-list');
  wrap.innerHTML='';
  if(!nearbyPeople.length){wrap.innerHTML='<div class="cw-empty-near" style="text-align:center;padding:26px;color:rgba(255,255,255,.5);font-size:.85rem">Nadie cerca por ahora</div>';return;}
  nearbyPeople.forEach(p=>{
    const d=mk('div','cw-room');
    const ic=mk('div','cw-room-ic');ic.textContent='🧑';
    const tx=mk('div','cw-room-tx');
    const nm=mk('div','cw-room-nm');nm.textContent=p.nick;
    const sb=mk('div','cw-room-sb');sb.textContent=distBucket(p.km);
    tx.append(nm,sb);
    d.append(ic,tx);
    d.onclick=()=>openDM(p.id,p.nick);
    wrap.appendChild(d);
  });
}

$('cw-near').onclick=()=>{
  nearShown=!nearShown;
  $('cw-list').style.display=nearShown?'none':'';
  $('cw-near-list').classList.toggle('on',nearShown);
  $('cw-near').style.background=nearShown?'rgba(74,222,128,.25)':'rgba(255,255,255,.08)';
  if(nearShown)renderNearby();
};

async function geoPing(lat,lon){
  myGeoPos={lat,lon};
  try{
    await initPeer();
    const d=await api('POST','/ping',{pid,token:geoToken,nick:nick||'Anonimo',lat,lon});
    geoToken=d.token;
    geoLastPingAt=Date.now();
    geoLastPos=myGeoPos;
    fetchNearby();
  }catch(e){}
}

function onGeoUpdate(pos){
  const lat=pos.coords.latitude,lon=pos.coords.longitude;
  const now=Date.now();
  const moved=geoLastPos&&_GU?_GU.haversine(geoLastPos.lat,geoLastPos.lon,lat,lon):Infinity;
  if(!geoLastPos||(now-geoLastPingAt>=GEO_MIN_PING_MS&&moved>=GEO_MOVE_KM)){
    geoPing(lat,lon);
  }else{
    myGeoPos={lat,lon};
  }
}

function startGeoShare(){
  if(geoWatchId!=null||!navigator.geolocation)return;
  geoWatchId=navigator.geolocation.watchPosition(onGeoUpdate,()=>{},{enableHighAccuracy:false,maximumAge:30000,timeout:15000});
  geoPingTimer=setInterval(()=>{
    if(!myGeoPos)return;
    if(Date.now()-geoLastPingAt>=GEO_MIN_PING_MS)geoPing(myGeoPos.lat,myGeoPos.lon);
    else fetchNearby();
  },20000);
  localStorage.setItem('UBI','1');
}

function stopGeoShare(){
  if(geoWatchId!=null){navigator.geolocation.clearWatch(geoWatchId);geoWatchId=null;}
  if(geoPingTimer){clearInterval(geoPingTimer);geoPingTimer=null;}
  if(geoToken&&pid){api('DELETE','/leave',{pid,token:geoToken}).catch(()=>{});geoToken=null;}
}

async function fetchNearby(){
  if(!myGeoPos||!_GU)return;
  const cell=_GU.encode(myGeoPos.lat,myGeoPos.lon,GEO_CELL_PREC);
  let list;
  try{list=await api('GET','/nearby?cell='+cell);}catch(e){return;}
  nearbyPeople=list.filter(p=>p.id!==pid).map(p=>({...p,km:_GU.haversine(myGeoPos.lat,myGeoPos.lon,p.lat,p.lon)}));
  nearbyPeople.sort((a,b)=>a.km-b.km);
  if(nearShown)renderNearby();
}

function initGeoSharing(){
  if(!navigator.geolocation)return;
  loadGU().then(()=>{
    navigator.geolocation.getCurrentPosition(
      p=>{
        if(!nick){
          $('cw-pf-nk').value='';showModal('cw-m-perfil');
          $('cw-pf-ok').onclick=()=>{const n=$('cw-pf-nk').value.trim();if(!n)return;saveNick(n);hideModal('cw-m-perfil');startGeoShare();onGeoUpdate(p);};
          return;
        }
        startGeoShare();onGeoUpdate(p);
      },
      ()=>{},
      {timeout:10000,maximumAge:60000}
    );
  });
}

function clickChat(c){
  if(!nick){
    $('cw-pf-nk').value='';showModal('cw-m-perfil');
    $('cw-pf-ok').onclick=()=>{const n=$('cw-pf-nk').value.trim();if(!n)return;saveNick(n);hideModal('cw-m-perfil');routeChat(c);};
    return;
  }
  routeChat(c);
}
function routeChat(c){c.kind==='irc'?enterIrc(c):enterRoom(c);}
$('cw-pf-cx').onclick=()=>hideModal('cw-m-perfil');

function adToggleFields(){
  const irc=$('cw-ad-tipo').value==='irc';
  $('cw-ad-room-fields').style.display=irc?'none':'';
  $('cw-ad-irc-fields').style.display=irc?'':'none';
  $('cw-ad-nm-wrap').style.display=irc?'':'none';
}
$('cw-ad-tipo').onchange=adToggleFields;
function ircToggleFields(){
  const sockjs=$('cw-irc-transport').value==='sockjs';
  $('cw-irc-ws-fields').style.display=sockjs?'none':'flex';
  $('cw-irc-sockjs-fields').style.display=sockjs?'':'none';
}
$('cw-irc-transport').onchange=ircToggleFields;

$('cw-new').onclick=()=>{
  $('cw-ad-tipo').value='room';adToggleFields();
  $('cw-ad-nm').value='';
  $('cw-ad-rid').value=genRoomId();$('cw-ad-rpw').value='';
  $('cw-irc-host').value='';$('cw-irc-port').value='443';
  $('cw-irc-gw-url').value='';$('cw-irc-gw-host').value='default';$('cw-irc-gw-port').value='6667';
  $('cw-irc-chan').value='';$('cw-irc-key').value='';
  $('cw-irc-transport').value='ws';ircToggleFields();
  showModal('cw-m-add');setTimeout(()=>$('cw-ad-rid').focus(),80);
};
$('cw-ad-rid-gen').onclick=()=>{$('cw-ad-rid').value=genRoomId();};
$('cw-ad-cx').onclick=()=>hideModal('cw-m-add');
$('cw-ad-ok').onclick=()=>{
  const kind=$('cw-ad-tipo').value==='irc'?'irc':'room';
  const id=Date.now().toString(36)+Math.random().toString(36).slice(2,7);
  if(kind==='room'){
    const rid=$('cw-ad-rid').value.trim();
    if(!rid)return;
    chatList.push({id,kind,label:rid,roomId:rid,roomPw:$('cw-ad-rpw').value||''});
  }else{
    const label=$('cw-ad-nm').value.trim();
    if(!label)return;
    const chan=$('cw-irc-chan').value.trim();
    if(!chan)return;
    const transport=$('cw-irc-transport').value==='sockjs'?'sockjs':'ws';
    const cfg={id,kind,label,transport,channel:chan,key:$('cw-irc-key').value||''};
    if(transport==='sockjs'){
      const gw=$('cw-irc-gw-url').value.trim();
      if(!gw)return;
      cfg.gatewayUrl=gw;cfg.gatewayHost=$('cw-irc-gw-host').value.trim()||'default';cfg.gatewayPort=parseInt($('cw-irc-gw-port').value)||6667;
    }else{
      const host=$('cw-irc-host').value.trim();
      if(!host)return;
      cfg.host=host;cfg.port=parseInt($('cw-irc-port').value)||443;
    }
    chatList.push(cfg);
  }
  saveChatList();renderChatList();hideModal('cw-m-add');
};

function meta(){return{nick};}
function dmMeta(){return{nick,dm:true};}

function initPeer(){
  return new Promise((res,rej)=>{
    if(peer&&!peer.destroyed&&pid){res();return;}
    if(peer&&!peer.destroyed)peer.destroy();
    loadPeerJS().then(Peer=>{
      peer=new Peer();
      peer.on('error',e=>{
        const t=e&&e.type;
        if(t==='peer-unavailable')return;
        if(!pid){rej(e);return;}
        if(inAnyChat())addSys('Error de conexion '+(t||''));
      });
      peer.once('open',id=>{
        pid=id;
        peer.on('connection',conn=>{
          if(conn.metadata&&conn.metadata.dm)onIncomingDM(conn);
          else onConn(conn);
        });
        peer.on('call',call=>{
          const s=new MediaStream();
          if(aStream)aStream.getTracks().forEach(t=>s.addTrack(t));
          if(vStream)vStream.getTracks().forEach(t=>s.addTrack(t));
          call.answer(s.getTracks().length?s:new MediaStream());
          hCall(call);
        });
        peer.on('disconnected',()=>{if(curRoom||geoWatchId!=null)peer.reconnect();});
        res();
      });
    }).catch(rej);
  });
}

function onConn(conn){
  conn.on('open',()=>{
    conns[conn.peer]=conn;
    delete connectingSince[conn.peer];
    pingMisses[conn.peer]=0;
    const m=conn.metadata||{};
    pNk[conn.peer]=m.nick||conn.peer.slice(0,8);
    conn.send({t:'meta',v:meta()});
    conn.send({t:'hist',v:hist.slice(-HIST)});
    addSys((pNk[conn.peer]||conn.peer.slice(0,8))+' se unio');
    renderPeers();updateRoomCount();refreshWaitState();
    callPeer(conn.peer);
  });
  conn.on('data',d=>onData(d,conn.peer));
  conn.on('close',()=>discPeer(conn.peer));
  conn.on('error',()=>discPeer(conn.peer));
}

function wireDMConn(conn,otherPid){
  const onOpen=()=>{
    conns[otherPid]=conn;
    dmReconnectTries[otherPid]=0;
    delete connectingSince[otherPid];
    try{conn.send({t:'meta',v:meta()});}catch(e){}
    try{conn.send({t:'hist',v:hist.slice(-HIST)});}catch(e){}
    if(curDM===otherPid){
      addSys((pNk[otherPid]||otherPid.slice(0,8))+' se conecto');
      $('cw-ch-sb').textContent='Conectado';
    }
    refreshWaitState();
  };
  if(conn.open)onOpen();else conn.on('open',onOpen);
  conn.on('data',d=>onData(d,otherPid));
  conn.on('close',()=>{discPeer(otherPid);if(curDM===otherPid)scheduleDMReconnect(otherPid);});
  conn.on('error',()=>{discPeer(otherPid);if(curDM===otherPid)scheduleDMReconnect(otherPid);});
}

function scheduleDMReconnect(otherPid){
  const tries=(dmReconnectTries[otherPid]||0)+1;
  if(tries>3)return;
  dmReconnectTries[otherPid]=tries;
  setTimeout(()=>{
    if(curDM!==otherPid||!peer||peer.destroyed)return;
    const conn=peer.connect(otherPid,{metadata:dmMeta(),reliable:true});
    if(!conn)return;
    conns[otherPid]=conn;
    wireDMConn(conn,otherPid);
  },2000*tries);
}

function enterDMUI(otherPid,otherNick){
  $('cw-msgs').innerHTML='';$('cw-vl').innerHTML='';$('cw-vg').classList.remove('on');
  conns={};pAu={};pVStr={};pMu={};pNk={};connectingSince={};pingMisses={};pCalls={};
  hist=[];domCount=0;curCfg=null;curRoom=null;curDM=otherPid;
  pNk[otherPid]=otherNick;
  $('cw-ch-nm').textContent=otherNick.length>26?otherNick.slice(0,26)+'…':otherNick;
  $('cw-ch-sb').textContent='Conectando...';
  $('cw-bm').style.display='';$('cw-bv').style.display='';
  $('cw-ch-inv').style.display='none';
  $('cw-bp').style.display='none';
  $('cw-lobby').classList.add('hid');$('cw-chat').classList.add('on');
}

async function startDM(otherPid,otherNick){
  enterDMUI(otherPid,otherNick);
  setWaiting(true,'Conectando...');
  try{await initPeer();}catch(e){showToast('Error al conectar');return goBack();}
  const conn=peer.connect(otherPid,{metadata:dmMeta(),reliable:true});
  if(!conn){showToast('Error al conectar');return goBack();}
  wireDMConn(conn,otherPid);
  wakeAcquire();
}

function openDM(otherPid,otherNick){
  if(!nick){
    $('cw-pf-nk').value='';showModal('cw-m-perfil');
    $('cw-pf-ok').onclick=()=>{const n=$('cw-pf-nk').value.trim();if(!n)return;saveNick(n);hideModal('cw-m-perfil');startDM(otherPid,otherNick);};
    return;
  }
  startDM(otherPid,otherNick);
}

function onIncomingDM(conn){
  const fromPid=conn.peer;
  const fromNick=(conn.metadata&&conn.metadata.nick)||fromPid.slice(0,8);
  if(curDM===fromPid){
    conns[fromPid]=conn;
    wireDMConn(conn,fromPid);
    refreshWaitState();
    return;
  }
  pendingDM[fromPid]={conn,nick:fromNick};
  conn.on('close',()=>{if(pendingDM[fromPid]&&pendingDM[fromPid].conn===conn){delete pendingDM[fromPid];renderChatList();}});
  conn.on('error',()=>{if(pendingDM[fromPid]&&pendingDM[fromPid].conn===conn){delete pendingDM[fromPid];renderChatList();}});
  showToast(fromNick+' quiere chatear con vos',()=>openIncomingDM(fromPid));
  renderChatList();
}

function openIncomingDM(fromPid){
  const p=pendingDM[fromPid];
  if(!p)return;
  const proceed=()=>{
    delete pendingDM[fromPid];
    enterDMUI(fromPid,p.nick);
    setWaiting(true,'Conectando...');
    wireDMConn(p.conn,fromPid);
    wakeAcquire();
  };
  if(!nick){
    $('cw-pf-nk').value='';showModal('cw-m-perfil');
    $('cw-pf-ok').onclick=()=>{const n=$('cw-pf-nk').value.trim();if(!n)return;saveNick(n);hideModal('cw-m-perfil');proceed();};
    return;
  }
  proceed();
}

function callPeer(p){
  const s=new MediaStream();
  if(aStream)aStream.getTracks().forEach(t=>s.addTrack(t));
  if(vStream)vStream.getTracks().forEach(t=>s.addTrack(t));
  if(!s.getTracks().length)return;
  hCall(peer.call(p,s,{metadata:meta()}));
}

function broadcast(data){Object.values(conns).filter(c=>c.open).forEach(c=>{try{c.send(data);}catch(e){}});}

function onData(d,from){
  if(!d||!d.t)return;
  switch(d.t){
    case'msg':{
      const col=gUC(from),tx=cut(d.v);
      addMsg(pNk[from]||from.slice(0,8),tx,false,col,d.quote,d.mid);
      hist.push({t:'msg',from,nick:pNk[from]||from.slice(0,8),v:tx,col,quote:d.quote,mid:d.mid});
      if(hist.length>HIST)hist.shift();
      checkMention(tx);
      break;
    }
    case'meta':pNk[from]=d.v.nick||pNk[from];renderPeers();break;
    case'hist':{
      if(!d.v||!d.v.length)break;
      const known=new Set(hist.map(m=>m.mid).filter(Boolean));
      d.v.slice(-HIST).forEach(m=>{
        if(m.t!=='msg'&&m.t!=='file')return;
        if(m.mid&&known.has(m.mid))return;
        if(m.t==='msg'){
          uC[m.from]=m.col||gUC(m.from);
          m.v=cut(m.v);
          addMsg(m.nick,m.v,false,m.col,m.quote,m.mid);
        }else{
          addFileMsg(m.from,m);
        }
        hist.push(m);
        if(m.mid)known.add(m.mid);
      });
      if(hist.length>HIST)hist.splice(0,hist.length-HIST);
      break;
    }
    case'mute':{
      pMu[from]=d.v;
      if(pAu[from])pAu[from].muted=d.v;
      const el=$('cw-vp-'+from);
      if(el){const n=el.querySelector('.cw-vp-n');if(n)n.textContent=(pNk[from]||from.slice(0,8))+(d.v?' 🔇':'');}
      break;
    }
    case'file':{
      addFileMsg(from,d);
      hist.push({t:'file',from,...d});
      if(hist.length>HIST)hist.shift();
      break;
    }
    case'ping':{const c=conns[from];if(c&&c.open)try{c.send({t:'pong'});}catch(e){}break;}
    case'pong':pingMisses[from]=0;break;
  }
}

function pingConns(){
  Object.keys(conns).forEach(p=>{
    const c=conns[p];
    if(!c||!c.open)return;
    const misses=(pingMisses[p]||0)+1;
    if(misses>2){
      pingMisses[p]=0;
      try{c.close();}catch(e){}
      discPeer(p);
      return;
    }
    pingMisses[p]=misses;
    try{c.send({t:'ping'});}catch(e){
      pingMisses[p]=0;
      try{c.close();}catch(e2){}
      discPeer(p);
    }
  });
}

function hCall(call){
  const cp=call.peer;
  if(pCalls[cp]&&pCalls[cp]!==call){try{pCalls[cp].close();}catch(e){}}
  pCalls[cp]=call;
  call.on('stream',stream=>{
    const p=call.peer;
    if(stream.getVideoTracks().length){pVStr[p]=stream;addVidPeer(p,stream);}
    if(stream.getAudioTracks().length){
      let a=pAu[p];
      if(!a){a=mk('audio');a.autoplay=a.playsInline=1;document.body.appendChild(a);pAu[p]=a;}
      a.srcObject=new MediaStream(stream.getAudioTracks());
      if(pMu[p])a.muted=true;
    }
  });
  call.on('close',()=>{rmVid(cp);if(pCalls[cp]===call)delete pCalls[cp];});
}

function discPeer(p){
  delete connectingSince[p];
  delete pingMisses[p];
  if(pCalls[p]){try{pCalls[p].close();}catch(e){}delete pCalls[p];}
  if(!conns[p]&&!pNk[p])return;
  addSys((pNk[p]||p.slice(0,8))+' salio');
  delete conns[p];delete pNk[p];
  if(pAu[p]){pAu[p].pause();pAu[p].srcObject=null;pAu[p].remove();delete pAu[p];}
  rmVid(p);renderPeers();updateRoomCount();
  refreshWaitState(curDM?'Reconectando...':'Conexion perdida, esperando...');
}

function connectMissing(activePeers){
  if(!peer||peer.destroyed)return;
  (activePeers||[]).forEach(p=>{
    if(p.pid===pid||conns[p.pid])return;
    const since=connectingSince[p.pid];
    if(since&&Date.now()-since.t<20000)return;
    if(since&&since.c){try{since.c.close();}catch(e){}}
    pNk[p.pid]=p.nick||pNk[p.pid]||p.pid.slice(0,8);
    const c=peer.connect(p.pid,{metadata:meta(),reliable:true});
    if(!c){delete connectingSince[p.pid];return;}
    connectingSince[p.pid]={t:Date.now(),c};
    onConn(c);
  });
}

async function enterRoom(cfg){
  $('cw-msgs').innerHTML='';$('cw-vl').innerHTML='';$('cw-vg').classList.remove('on');
  conns={};pAu={};pVStr={};pMu={};pNk={};connectingSince={};pingMisses={};pCalls={};
  hist=[];domCount=0;curCfg=cfg;

  $('cw-ch-nm').textContent=cfg.label.length>26?cfg.label.slice(0,26)+'…':cfg.label;
  $('cw-ch-sb').textContent='Conectando...';
  $('cw-bm').style.display='';$('cw-bv').style.display='';
  $('cw-ch-inv').style.display='';
  $('cw-lobby').classList.add('hid');$('cw-chat').classList.add('on');
  setWaiting(true,'Conectando...');

  try{await initPeer();}catch(e){showToast('Error al conectar');return goBack();}

  let data;
  try{data=await api('POST',`/rooms/${cfg.roomId}/join`,{pw:cfg.roomPw||'',pid,nick});}
  catch(e){showToast(e.status===403?'Contrasena incorrecta':(e.status===429?'Demasiados intentos, espera un rato':'Error al unirse'));return goBack();}

  curRoom=cfg.roomId;curToken=data.token;
  wakeAcquire();maybeShowSharePrompt();
  addSys('Uniendose a la sala como '+nick);

  connectMissing(data.peers);
  updateRoomCount();refreshWaitState('Esperando a que alguien mas se conecte...');
  startAudio();
  startPresenceLoop();
}

function startPresenceLoop(){
  stopPresenceLoop();
  pingIv=setInterval(async()=>{
    if(!curRoom)return;
    pingConns();
    try{
      const d=await api('POST',`/rooms/${curRoom}/ping`,{pid,token:curToken});
      const active=new Set((d.peers||[]).map(p=>p.pid));
      Object.keys(conns).forEach(p=>{if(!active.has(p))discPeer(p);});
      connectMissing(d.peers);
      updateRoomCount();
    }catch(e){}
  },PING);
}
function stopPresenceLoop(){
  if(pingIv){clearInterval(pingIv);pingIv=null;}
}

function updateRoomCount(){
  if(!curRoom)return;
  const n=Object.keys(conns).length+1;
  $('cw-ch-sb').textContent=(curCfg&&curCfg.roomPw?'🔒 ':'🔗 ')+n+' en sala';
}

async function startAudio(){
  try{
    aStream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true},video:false});
    Object.keys(conns).forEach(p=>callPeer(p));
  }catch(e){}
}

$('cw-ch-inv').onclick=async()=>{
  if(!curCfg)return;
  try{await navigator.clipboard.writeText(curCfg.roomId);addSys('ID copiado al portapapeles');}
  catch(e){addSys('No se pudo copiar el ID');}
};

let ircTransport='ws',ircNickTries=0;
function ircSend(raw){
  if(!ircSocket||ircSocket.readyState!==1)return;
  const line=String(raw).replace(/[\r\n]+/g,' ');
  if(ircTransport==='sockjs')ircSocket.send(':1 '+line);
  else ircSocket.send(line+'\r\n');
}

function ircParseLine(line){
  let prefix='',rest=line;
  if(line.startsWith(':')){
    const sp=line.indexOf(' ');
    prefix=line.slice(1,sp);rest=line.slice(sp+1);
  }
  let trailing=null,paramsPart=rest;
  const tIdx=rest.indexOf(' :');
  if(tIdx>=0){paramsPart=rest.slice(0,tIdx);trailing=rest.slice(tIdx+2);}
  else if(rest.startsWith(':')){paramsPart='';trailing=rest.slice(1);}
  const params=paramsPart.split(' ').filter(Boolean);
  const command=params.shift()||'';
  if(trailing!=null)params.push(trailing);
  return{prefix,command,params};
}

const MAGNET_RE=/magnet:\?xt=urn:btih:[a-zA-Z0-9]+[^\s]*/;

function ircAddIncoming(from,text){
  const col=gUC(from);
  const m=text.match(MAGNET_RE);
  if(m){
    const mg=$('cw-msgs');trimDom(mg);
    const name=text.replace(m[0],'').trim()||'archivo compartido';
    const dd={magnet:m[0],name,size:0,mime:'application/octet-stream'};
    const{d,inner}=mkBubble(from,col,false);
    const wrap=mk('div');inner.appendChild(wrap);
    const sm=name.match(STICKER_RE);
    if(sm){
      inner.classList.add('cw-sticker-msg');
      const fname=sm[1]+'.'+sm[2];
      loadStickerBlob(fname).then(blob=>{
        wrap.appendChild(imgB(blob,'cw-stk'));
      }).catch(()=>downloadStickerTorrent(dd,wrap,fname));
    }else renderTorrentCard(dd,wrap);
    mg.appendChild(d);mg.scrollTop=mg.scrollHeight;
  }else{
    addMsg(from,text,false,col);
    checkMention(text);
  }
}

function ircHandleLine(line){
  const{prefix,command,params}=ircParseLine(line);
  if(command==='PING'){ircSend('PONG :'+(params[0]||''));return;}
  if(command==='001'){
    ircSend('JOIN '+ircChannel+(ircChanKey?(' '+ircChanKey):''));
    $('cw-ch-sb').textContent='Conectado';
    return;
  }
  if(command==='PRIVMSG'){
    const from=prefix.split('!')[0]||prefix;
    const target=params[0],text=params[1]||'';
    if(!target||target.toLowerCase()!==ircChannel.toLowerCase())return;
    ircAddIncoming(from,text);
    return;
  }
  if(command==='JOIN'){
    const who=prefix.split('!')[0];
    if(!who)return;
    ircUsers.set(who,true);
    if(who!==ircNick)addSys(who+' se unio al canal');
    renderPeers();
    return;
  }
  if(command==='PART'||command==='QUIT'){
    const who=prefix.split('!')[0];
    if(!who||!ircUsers.has(who))return;
    ircUsers.delete(who);
    addSys(who+' salio del canal');
    renderPeers();
    return;
  }
  if(command==='NICK'){
    const who=prefix.split('!')[0],nw=params[0];
    if(who&&ircUsers.has(who)){ircUsers.delete(who);ircUsers.set(nw,true);renderPeers();}
    return;
  }
  if(command==='353'){
    (params[params.length-1]||'').split(' ').filter(Boolean).forEach(n=>ircUsers.set(n.replace(/^[@+~%&]/,''),true));
    return;
  }
  if(command==='366'){renderPeers();return;}
  if(command==='433'||command==='432'){
    if(ircNickTries++>=5){addSys('No se pudo elegir un nick');return;}
    ircNick='Guest'+Math.floor(Math.random()*99999);
    addSys('Nick en uso, probando '+ircNick);
    ircSend('NICK '+ircNick);
    return;
  }
}

async function enterIrc(cfg){
  $('cw-msgs').innerHTML='';$('cw-vl').innerHTML='';$('cw-vg').classList.remove('on');
  hist=[];domCount=0;ircUsers=new Map();
  ircMode=true;ircNickTries=0;
  ircTransport=cfg.transport==='sockjs'?'sockjs':'ws';
  ircNick=(nick||('Guest'+Math.floor(Math.random()*9999))).replace(/[^a-zA-Z0-9_-]/g,'')||'Guest'+Math.floor(Math.random()*9999);
  ircChannel=cfg.channel.startsWith('#')?cfg.channel:'#'+cfg.channel;
  ircChanKey=cfg.key||'';

  $('cw-ch-nm').textContent=(cfg.label||cfg.channel).length>26?(cfg.label||cfg.channel).slice(0,26)+'…':(cfg.label||cfg.channel);
  $('cw-ch-sb').textContent='Conectando...';
  $('cw-bm').style.display='none';$('cw-bv').style.display='none';
  $('cw-ch-inv').style.display='none';
  $('cw-lobby').classList.add('hid');$('cw-chat').classList.add('on');

  if(ircTransport==='sockjs'){
    try{
      const{default:SockJS}=await import('https://cdn.jsdelivr.net/npm/sockjs-client@1.6.1/+esm');
      ircSocket=new SockJS(cfg.gatewayUrl);
    }catch(e){showToast('No se pudo conectar');return goBack();}
    ircSocket.onopen=()=>{
      ircSocket.send(':0 CONTROL START');
      ircSend('HOST '+(cfg.gatewayHost||'default')+':'+(cfg.gatewayPort||6667));
      ircSend('ENCODING utf8');
      ircSend('NICK '+ircNick);
      ircSend('USER '+ircNick+' 0 * :'+ircNick);
    };
    ircSocket.onmessage=ev=>{
      const m=String(ev.data).match(/^:1 ?(.*)$/);
      if(m&&m[1])ircHandleLine(m[1]);
    };
  }else{
    try{ircSocket=new WebSocket(`wss://${cfg.host}:${cfg.port}/`);}
    catch(e){showToast('No se pudo conectar');return goBack();}
    let buf='';
    ircSocket.onopen=()=>{
      ircSend('NICK '+ircNick);
      ircSend('USER '+ircNick+' 0 * :'+ircNick);
    };
    ircSocket.onmessage=ev=>{
      buf+=String(ev.data);
      let idx;
      while((idx=buf.indexOf('\n'))>=0){
        let line=buf.slice(0,idx);buf=buf.slice(idx+1);
        if(line.endsWith('\r'))line=line.slice(0,-1);
        if(line)ircHandleLine(line);
      }
    };
  }
  ircSocket.onclose=()=>{if(ircMode)addSys('Desconectado del chat IRC');};
  ircSocket.onerror=()=>{addSys('Error de conexion al chat IRC');};

  wakeAcquire();
  maybeShowSharePrompt();
}

function goBack(){
  wakeRelease();
  stopPresenceLoop();
  if(ircMode){
    if(ircSocket){try{ircSocket.close();}catch(e){}ircSocket=null;}
    ircMode=false;ircUsers=new Map();ircChannel='';ircChanKey='';
  }else if(curRoom){
    if(pid)api('DELETE',`/rooms/${curRoom}/leave`,{pid,token:curToken}).catch(()=>{});
    Object.values(conns).forEach(c=>{try{c.close();}catch(e){}});
    conns={};pNk={};connectingSince={};pingMisses={};curCfg=null;curRoom=null;curToken=null;
  }else if(curDM){
    const c=conns[curDM];
    if(c){try{c.close();}catch(e){}}
    delete dmReconnectTries[curDM];
    conns={};pNk={};connectingSince={};pingMisses={};curDM=null;
  }
  Object.values(pCalls).forEach(c=>{try{c.close();}catch(e){}});
  pCalls={};
  if(aStream){aStream.getTracks().forEach(t=>t.stop());aStream=null;}
  if(vStream){vStream.getTracks().forEach(t=>t.stop());vStream=null;}
  Object.values(pAu).forEach(a=>{a.pause();a.srcObject=null;a.remove();});
  pAu={};pVStr={};pMu={};muted=false;vidOn=false;
  $('cw-msgs').innerHTML='';$('cw-vl').innerHTML='';$('cw-vg').classList.remove('on');
  domCount=0;hist=[];clearQuote();
  $('cw-bm').textContent='🎤';$('cw-bv').style.opacity='1';
  $('cw-ch-inv').style.display='none';
  $('cw-bp').style.display='';
  waiting=false;
  $('cw-mi').disabled=$('cw-sn').disabled=$('cw-fl').disabled=$('cw-bp').disabled=$('cw-be').disabled=false;
  setView('msgs');
  $('cw-chat').classList.remove('on');$('cw-lobby').classList.remove('hid');
  renderChatList();
}
$('cw-bk').onclick=goBack;

$('cw-bm').onclick=()=>{
  if(!aStream)return;muted=!muted;
  aStream.getAudioTracks().forEach(t=>t.enabled=!muted);
  $('cw-bm').textContent=muted?'🔇':'🎤';
  broadcast({t:'mute',v:muted});
};

$('cw-bv').onclick=async()=>{
  if(!vidOn){
    try{
      vStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:{ideal:640},height:{ideal:480},frameRate:{max:24}},audio:false});
      addVidSelf();Object.keys(conns).forEach(p=>callPeer(p));
      $('cw-vg').classList.add('on');vidOn=true;$('cw-bv').style.opacity='.5';
    }catch(e){addSys('Sin acceso a camara');}
  }else{
    if(vStream){vStream.getTracks().forEach(t=>t.stop());vStream=null;}
    rmVid('me');vidOn=false;$('cw-bv').style.opacity='1';
    if(!Object.keys(pVStr).length)$('cw-vg').classList.remove('on');
  }
};

function mkVP(id,label,stream){
  let ve=$('cw-vp-'+id);
  if(!ve){
    ve=mk('div','cw-vp');ve.id='cw-vp-'+id;
    const vid=mk('video');vid.autoplay=vid.playsInline=1;if(id==='me')vid.muted=1;
    const n=mk('div','cw-vp-n');n.textContent=label;
    ve.append(vid,n);$('cw-vl').appendChild(ve);
  }
  ve.querySelector('video').srcObject=stream;
  return ve;
}
function addVidSelf(){mkVP('me',nick+' (vos)',vStream);}
function addVidPeer(p,s){mkVP(p,pNk[p]||p,s);}
function rmVid(p){const v=$('cw-vp-'+p);if(v)v.remove();delete pVStr[p];if(!Object.keys(pVStr).length&&!vidOn)$('cw-vg').classList.remove('on');}

let curView='msgs',waiting=false;
function setView(v){
  curView=v;
  $('cw-participants').classList.toggle('on',!waiting&&v==='participants');
  $('cw-sp').classList.toggle('on',!waiting&&v==='stickers');
  $('cw-msgs').classList.toggle('hid',waiting||v!=='msgs');
  $('cw-wait').classList.toggle('on',waiting);
  if(!waiting&&v==='participants')renderPeers();
  if(!waiting&&v==='stickers')renderStickerPicker();
}
function setWaiting(on,msg){
  if(waiting===on){
    if(on&&msg)$('cw-wait-tx').textContent=msg;
    return;
  }
  waiting=on;
  if(on){
    $('cw-wait-tx').textContent=msg||'Conectando...';
    $('cw-wait-img').src=(window.__CFG&&window.__CFG.waitAnim)||'';
  }
  setView(curView);
  $('cw-mi').disabled=on;$('cw-sn').disabled=on;$('cw-fl').disabled=on;
  $('cw-bp').disabled=on;$('cw-be').disabled=on;
}
function refreshWaitState(msg){
  if(ircMode||(!curRoom&&!curDM))return;
  const n=Object.keys(conns).length;
  if(n>0)setWaiting(false);
  else setWaiting(true,msg||(curDM?'Reconectando...':'Esperando a que alguien mas se conecte...'));
}
$('cw-bp').onclick=()=>setView(curView==='participants'?'msgs':'participants');
$('cw-be').onclick=()=>setView(curView==='stickers'?'msgs':'stickers');

function mentionUser(nickName){
  const mi=$('cw-mi');
  mi.value=(mi.value&&!mi.value.endsWith(' ')?mi.value+' ':mi.value)+'@'+nickName+' ';
  setView('msgs');
  mi.focus();
}

function renderPeers(){
  const wrap=$('cw-participants');
  wrap.innerHTML='';
  const addBubble=(label,pidLike,isMe)=>{
    const b=mk('button','cw-bubble');
    if(isMe)b.disabled=true;
    const c=mk('div','cw-bubble-c');c.style.background=gUC(pidLike);c.textContent=label.slice(0,2).toUpperCase();
    const n=mk('div','cw-bubble-n');n.textContent=label+(isMe?' (vos)':'');
    b.append(c,n);
    if(!isMe)b.onclick=()=>mentionUser(label);
    wrap.appendChild(b);
  };
  if(ircMode){
    [...ircUsers.keys()].forEach(u=>addBubble(u,u,u===ircNick));
  }else if(curRoom){
    addBubble(nick,pid||'me',true);
    Object.keys(conns).forEach(p=>addBubble(pNk[p]||p.slice(0,8),p,false));
  }
}

function trimDom(mg){if(domCount>=DOM){const f=mg.querySelector('.cw-msg,.cw-sys');if(f)f.remove();}else domCount++;}

let msgSeq=0;
function newMsgId(){return(pid||'me')+'_'+Date.now()+'_'+(msgSeq++);}

function mkBubble(nm,col,me,mid,quoteLabel){
  const d=mk('div','cw-msg'+(me?' me':''));
  if(mid)d.dataset.mid=mid;
  const bwrap=mk('div');
  const inner=mk('div','cw-msg-b');
  if(!me){
    const sn=mk('div','cw-msg-nm');sn.textContent=nm;sn.style.color=col;bwrap.appendChild(sn);
    inner.style.background=col+'26';
  }
  bwrap.appendChild(inner);
  if(me){
    d.appendChild(bwrap);
  }else{
    const avd=mk('div','cw-avi');
    avd.textContent=String(nm||'?').slice(0,2).toUpperCase();
    avd.style.background=col;
    d.append(avd,bwrap);
  }
  if(quoteLabel!=null)d.addEventListener('dblclick',()=>setQuote(nm,quoteLabel,mid));
  return{d,inner};
}

let quoting=null;
function setQuote(nickName,txt,mid){
  quoting={nick:nickName,txt:txt.length>80?txt.slice(0,80)+'…':txt,mid};
  $('cw-qb-nm').textContent=nickName;
  $('cw-qb-tx').textContent=quoting.txt;
  $('cw-qb').classList.add('on');
  $('cw-mi').focus();
}
function clearQuote(){quoting=null;$('cw-qb').classList.remove('on');}
$('cw-qb-x').onclick=clearQuote;

function renderQuoteBlock(inner,quote){
  if(!quote)return;
  const q=mk('div','cw-quote');
  const qn=mk('div','cw-quote-nm');qn.textContent=quote.nick;
  const qt=mk('div','cw-quote-tx');qt.textContent=quote.txt;
  q.append(qn,qt);
  if(quote.mid){q.style.cursor='pointer';q.onclick=e=>{e.stopPropagation();scrollToMsg(quote.mid);};}
  inner.appendChild(q);
}

function scrollToMsg(mid){
  if(!mid)return;
  const el=$('cw-msgs').querySelector(`[data-mid="${CSS.escape(mid)}"]`);
  if(!el){addSys('El mensaje original ya no esta disponible');return;}
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches||document.body.classList.contains('low-perf');
  el.scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'});
  el.classList.add('cw-flash');
  setTimeout(()=>el.classList.remove('cw-flash'),1200);
}

function addMsg(nm,txt,me,col,quote,mid){
  const mg=$('cw-msgs');
  const atBottom=mg.scrollHeight-mg.scrollTop-mg.clientHeight<80;
  trimDom(mg);
  const{d,inner}=mkBubble(nm,col,me,mid,txt);
  renderQuoteBlock(inner,quote);
  const txtEl=mk('div');txtEl.textContent=txt;inner.appendChild(txtEl);
  mg.appendChild(d);
  if(atBottom||me)mg.scrollTop=mg.scrollHeight;
}
function addSys(t){
  const mg=$('cw-msgs');trimDom(mg);
  const d=mk('div','cw-sys');d.textContent=t;
  mg.appendChild(d);mg.scrollTop=mg.scrollHeight;
}

const NOTIFY_SND=new Audio('web/otros/Archivos/Sonidos/notify.ogg');
function checkMention(text){
  if(!nick||!text)return;
  if(text.toLowerCase().includes('@'+nick.toLowerCase())){
    try{NOTIFY_SND.currentTime=0;NOTIFY_SND.play().catch(()=>{});}catch(e){}
  }
}

function sendMsg(){
  const v=$('cw-mi').value.trim().slice(0,MSG_MAX);if(!v)return;
  if(ircMode){
    ircSend('PRIVMSG '+ircChannel+' :'+v);
    addMsg(ircNick,v,true,gUC(ircNick));
    $('cw-mi').value='';$('cw-mi').style.height='';
    return;
  }
  if(!curRoom&&!curDM)return;
  const col=gUC(pid||'me');
  const q=quoting?{...quoting}:undefined;
  const mid=newMsgId();
  broadcast({t:'msg',v,quote:q,mid});
  addMsg(nick,v,true,col,q,mid);
  hist.push({t:'msg',from:pid||'me',nick,v,col,quote:q,mid});
  if(hist.length>HIST)hist.shift();
  $('cw-mi').value='';$('cw-mi').style.height='';
  clearQuote();
}
$('cw-sn').onclick=sendMsg;
$('cw-mi').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMsg();}});
$('cw-mi').addEventListener('input',function(){this.style.height='';this.style.height=Math.min(this.scrollHeight,110)+'px';});


const STICKER_MAX=1024*1024;
const STICKER_RE=/^sticker_([0-9a-f]{64})\.(webp|avif)$/;
let opfsStickersDir=null,stickerMagnetCache={};

async function getStickersDir(){
  if(opfsStickersDir)return opfsStickersDir;
  const root=await navigator.storage.getDirectory();
  const apps=await root.getDirectoryHandle('Apps',{create:true});
  const chat=await apps.getDirectoryHandle('Chat',{create:true});
  opfsStickersDir=await chat.getDirectoryHandle('Stickers',{create:true});
  return opfsStickersDir;
}
async function saveStickerBlob(fname,blob){
  const dir=await getStickersDir();
  const fh=await dir.getFileHandle(fname,{create:true});
  const w=await fh.createWritable();await w.write(blob);await w.close();
}
async function loadStickerBlob(fname){
  const dir=await getStickersDir();
  const fh=await dir.getFileHandle(fname);
  return await fh.getFile();
}
async function listStickers(){
  const dir=await getStickersDir();
  const names=[];
  for await(const[name,handle]of dir.entries()){if(handle.kind==='file')names.push(name);}
  return names;
}
async function hashBlob(blob){
  const buf=await blob.arrayBuffer();
  const h=await crypto.subtle.digest('SHA-256',buf);
  return[...new Uint8Array(h)].map(b=>b.toString(16).padStart(2,'0')).join('');
}
async function processStickerImg(file){
  if(file.type==='image/avif'){
    if(file.size<=STICKER_MAX)return{blob:file,ext:'avif'};
    alert('El sticker debe pesar menos de 1MB');
    return null;
  }
  const url=URL.createObjectURL(file);
  const img=new Image();
  const ok=await new Promise(r=>{img.onload=()=>r(true);img.onerror=()=>r(false);img.src=url;});
  URL.revokeObjectURL(url);
  if(!ok){alert('No se pudo leer la imagen');return null;}
  const cv=mk('canvas');cv.width=256;cv.height=256;
  cv.getContext('2d').drawImage(img,0,0,256,256);
  let q=0.85,blob=null,tries=0;
  do{blob=await new Promise(r=>cv.toBlob(r,'image/webp',q));q=Math.max(0.05,q-0.1);tries++;}
  while(blob&&blob.size>STICKER_MAX&&tries<12);
  return{blob,ext:'webp'};
}
async function createStickerFromFile(file){
  const result=await processStickerImg(file);
  if(!result||!result.blob)return;
  const hash=await hashBlob(result.blob);
  const fname=hash+'.'+result.ext;
  await saveStickerBlob(fname,result.blob);
  renderStickerPicker();
}

function stickerMimeFor(fname){return fname.endsWith('.avif')?'image/avif':'image/webp';}
async function mkStickerThumb(fname){
  const btn=mk('button','cw-sp-item');
  try{
    const blob=await loadStickerBlob(fname);
    btn.appendChild(imgB(blob));
  }catch(e){}
  btn.onclick=()=>{sendSticker(fname);setView('msgs');};
  return btn;
}
async function renderStickerPicker(){
  const grid=$('cw-sp');
  grid.innerHTML='';
  const addBtn=mk('button','cw-sp-add');addBtn.textContent='+';
  addBtn.onclick=()=>$('cw-sp-file').click();
  grid.appendChild(addBtn);
  const all=await listStickers();
  (await Promise.all(all.map(f=>mkStickerThumb(f)))).forEach(b=>grid.appendChild(b));
}
$('cw-sp-file').onchange=function(){
  const f=this.files[0];this.value='';if(!f)return;
  createStickerFromFile(f);
};

async function downloadStickerTorrent(dd,wrap,fname){
  const pr=mk('div','cw-torrent-pr');pr.textContent='Descargando sticker...';
  wrap.innerHTML='';wrap.appendChild(pr);
  try{
    const client=await getTorrentClient();
    client.add(dd.magnet,{store:torrentStore,destroyStoreOnDestroy:true},torrent=>{
      const file=torrent.files[0];
      if(!file||file.length>STICKER_MAX){
        pr.textContent='Sticker invalido (supera 1MB)';
        try{client.remove(torrent);}catch(e){}
        return;
      }
      torrent.on('done',async()=>{
        const blob=await file.blob();
        const realHash=await hashBlob(blob);
        if(realHash!==fname.split('.')[0]){
          pr.textContent='Sticker invalido (no coincide el hash)';
          try{client.remove(torrent);}catch(e){}
          return;
        }
        wrap.innerHTML='';
        wrap.appendChild(imgB(blob,'cw-stk'));
        saveStickerBlob(fname,blob).catch(()=>{});
      });
    });
  }catch(e){pr.textContent='Error al descargar sticker';}
}

async function sendSticker(fname){
  if(!curRoom&&!curDM&&!ircMode)return;
  const q=quoting?{...quoting}:undefined;
  try{
    const blob=await loadStickerBlob(fname);
    const mime=stickerMimeFor(fname);
    if(stickerMagnetCache[fname]){sendStickerMsg(fname,stickerMagnetCache[fname],blob.size,q);return;}
    const file=new File([blob],'sticker_'+fname,{type:mime});
    const client=await getTorrentClient();
    client.seed(file,{name:'sticker_'+fname,store:torrentStore,destroyStoreOnDestroy:true},torrent=>{
      stickerMagnetCache[fname]=torrent.magnetURI;
      sendStickerMsg(fname,torrent.magnetURI,blob.size,q);
    });
  }catch(e){addSys('Error al enviar sticker: '+e.message);}
}
function sendStickerMsg(fname,magnet,size,quote){
  const mid=newMsgId();
  const dd={id:fname,mid,magnet,name:'sticker_'+fname,size,mime:stickerMimeFor(fname),w:0,h:0,quote};
  if(ircMode){
    ircSend('PRIVMSG '+ircChannel+' :'+dd.name+' '+magnet);
    addOwnStickerMsg(fname,dd);
    clearQuote();
    return;
  }
  if(!curRoom&&!curDM)return;
  broadcast({t:'file',...dd});
  addOwnStickerMsg(fname,dd);
  hist.push({t:'file',from:pid||'me',...dd});
  if(hist.length>HIST)hist.shift();
  clearQuote();
}
async function addOwnStickerMsg(fname,dd){
  const mg=$('cw-msgs');trimDom(mg);
  const{d,inner}=mkBubble(nick,gUC(pid||'me'),true,dd.mid,'🏷️ sticker');
  inner.classList.add('cw-sticker-msg');
  renderQuoteBlock(inner,dd.quote);
  try{
    const blob=await loadStickerBlob(fname);
    inner.appendChild(imgB(blob,'cw-stk'));
  }catch(e){}
  mg.appendChild(d);mg.scrollTop=mg.scrollHeight;
}

async function cwDlDir(){
  const root=await navigator.storage.getDirectory();
  const apps=await root.getDirectoryHandle('Apps',{create:true});
  const chat=await apps.getDirectoryHandle('Chat',{create:true});
  return await chat.getDirectoryHandle('Descargas',{create:true});
}
async function cwDlSave(file,name){
  const dir=await cwDlDir();
  const fh=await dir.getFileHandle(name,{create:true});
  await file.stream().pipeTo(await fh.createWritable());
  return await fh.getFile();
}
async function cwDlClear(){
  try{
    const root=await navigator.storage.getDirectory();
    const chat=await(await root.getDirectoryHandle('Apps')).getDirectoryHandle('Chat');
    await chat.removeEntry('Descargas',{recursive:true});
  }catch(e){}
}

async function getTorrentClient(){
  if(torrentClient)return torrentClient;
  const[wt,hcs]=await Promise.all([
    import('https://cdn.jsdelivr.net/npm/webtorrent@3.0.16/dist/webtorrent.min.js'),
    import('https://cdn.jsdelivr.net/npm/hybrid-chunk-store@1.2.6/+esm')
  ]);
  torrentStore=hcs.default||hcs;
  torrentClient=new(wt.default||wt)();
  torrentClient.on('error',e=>console.error('[webtorrent]',e.message));
  return torrentClient;
}

async function sendFileP2P(f){
  const q=quoting?{...quoting}:undefined;
  try{
    const client=await getTorrentClient();
    client.seed(f,{name:f.name,store:torrentStore,destroyStoreOnDestroy:true},torrent=>{
      if(ircMode){
        ircSend('PRIVMSG '+ircChannel+' :'+f.name+' '+torrent.magnetURI);
        addOwnFileMsg(f,{name:f.name,size:f.size,mime:f.type||'application/octet-stream',quote:q},torrent);
        clearQuote();
        return;
      }
      if(!curRoom&&!curDM)return;
      const id=torrent.infoHash,mid=newMsgId();
      let w=0,h=0;
      const dd={id,mid,magnet:torrent.magnetURI,name:f.name,size:f.size,mime:f.type||'application/octet-stream',w,h,quote:q};
      const afterDims=()=>{
        broadcast({t:'file',...dd});
        addOwnFileMsg(f,dd,torrent);
        hist.push({t:'file',from:pid||'me',...dd});
        if(hist.length>HIST)hist.shift();
        clearQuote();
      };
      if(/^image\//.test(f.type)){
        const u=URL.createObjectURL(f),i=new Image();
        i.onload=()=>{dd.w=i.naturalWidth;dd.h=i.naturalHeight;URL.revokeObjectURL(u);afterDims();};
        i.onerror=()=>{URL.revokeObjectURL(u);afterDims();};
        i.src=u;
      }else afterDims();
    });
  }catch(e){addSys('Error al compartir archivo: '+e.message);}
}

$('cw-fl').onchange=function(){
  const f=this.files[0];this.value='';if(!f)return;
  sendFileP2P(f);
};

const isStk=fm=>/^image\/(avif|webp|gif|png|jpeg)$/.test(fm.mime)&&fm.size<=IM_STK&&fm.w>0&&fm.w<=600&&fm.h>0&&fm.h<=600;

function addOwnFileMsg(file,dd,torrent){
  const mg=$('cw-msgs');trimDom(mg);
  const{d,inner}=mkBubble(nick,gUC(pid||'me'),true,dd.mid,'📎 '+dd.name);
  renderQuoteBlock(inner,dd.quote);
  const wrap=mk('div');inner.appendChild(wrap);
  if(isStk(dd)){wrap.appendChild(imgB(file,'cw-stk'));}
  else{
    const btn=mk('div','cw-dl');btn.innerHTML=`⬇ ${esc(dd.name)} <span style="opacity:.6">(${fSz(dd.size)})</span>`;
    btn.onclick=()=>dlBlob(file,dd.name);
    wrap.appendChild(btn);
  }
  mg.appendChild(d);mg.scrollTop=mg.scrollHeight;
}

function downloadTorrent(dd,wrap,auto){
  const pr=mk('div','cw-torrent-pr');pr.textContent='Descargando de la red...';
  wrap.innerHTML='';wrap.appendChild(pr);
  getTorrentClient().then(client=>{
    client.add(dd.magnet,{store:torrentStore,destroyStoreOnDestroy:true},torrent=>{
      const file0=torrent.files[0];
      if(auto&&file0&&file0.length>AUTO_DL_MAX){
        try{client.remove(torrent);}catch(e){}
        renderTorrentCard(dd,wrap);
        return;
      }
      const iv=setInterval(()=>{
        if(!document.body.contains(pr))return clearInterval(iv);
        pr.textContent=`Descargando... ${(torrent.progress*100).toFixed(0)}% (${torrent.numPeers} fuentes)`;
      },500);
      torrent.on('done',async()=>{
        clearInterval(iv);
        const file=torrent.files[0];
        try{
          if(isStk(dd)){
            const blob=await file.blob();
            wrap.innerHTML='';
            wrap.appendChild(imgB(blob,'cw-stk'));
            try{torrent.destroy({destroyStore:true});}catch(e){}
            return;
          }
          pr.textContent='Guardando...';
          const local=await cwDlSave(file,String(dd.id||dd.mid||Date.now()));
          try{torrent.destroy({destroyStore:true});}catch(e){}
          wrap.innerHTML='';
          const btn=mk('div','cw-dl');btn.innerHTML=`✓ ${esc(dd.name)} <span style="opacity:.6">(${fSz(dd.size)})</span>`;
          btn.onclick=()=>dlBlob(local,dd.name);
          wrap.appendChild(btn);
          dlBlob(local,dd.name);
        }catch(e){pr.textContent='Error al guardar: '+e.message;}
      });
    });
  }).catch(e=>{pr.textContent='Error al descargar: '+e.message;});
}

function renderTorrentCard(dd,wrap){
  const card=mk('div','cw-dl');
  const sizeTxt=dd.size?` <span style="opacity:.6">(${fSz(dd.size)})</span>`:'';
  card.innerHTML=`🧲 ${esc(dd.name)}${sizeTxt}`;
  const hint=mk('div','cw-torrent-pr');hint.textContent='Clic para descargar';
  card.onclick=()=>downloadTorrent(dd,wrap);
  wrap.append(card,hint);
}

async function addFileMsg(from,dd){
  const mg=$('cw-msgs');trimDom(mg);
  const nm=pNk[from]||from,col=gUC(from);
  const{d,inner}=mkBubble(nm,col,false,dd.mid,'📎 '+dd.name);
  const sm=dd.name&&dd.name.match(STICKER_RE);
  if(sm)inner.classList.add('cw-sticker-msg');
  renderQuoteBlock(inner,dd.quote);
  const wrap=mk('div');inner.appendChild(wrap);
  mg.appendChild(d);mg.scrollTop=mg.scrollHeight;
  if(sm){
    const fname=sm[1]+'.'+sm[2];
    try{
      const blob=await loadStickerBlob(fname);
      wrap.appendChild(imgB(blob,'cw-stk'));
    }catch(e){downloadStickerTorrent(dd,wrap,fname);}
    return;
  }
  if(dd.size<=AUTO_DL_MAX)downloadTorrent(dd,wrap,true);
  else renderTorrentCard(dd,wrap);
}

let pendingShare=null;

function fileFromShareBlob(b){
  return new File([new Uint8Array(b.data)],b.name,{type:b.type||'application/octet-stream'});
}

async function checkPendingShare(){
  try{
    const r=await fetch('/_share_pending');
    const d=await r.json();
    const has=d&&((d.blobs&&d.blobs.length)||d.text||d.url);
    pendingShare=has?d:null;
    $('cw-share-banner').style.display=has?'':'none';
    if(has)maybeShowSharePrompt();
  }catch(e){}
}

async function clearPendingShare(){
  pendingShare=null;
  $('cw-share-banner').style.display='none';
  $('cw-share-prompt').style.display='none';
  try{await fetch('/_share_clear',{method:'POST'});}catch(e){}
}

function shareLabel(){
  if(!pendingShare)return'';
  const f=(pendingShare.blobs||[])[0];
  return f?f.name:(pendingShare.text||pendingShare.url||'contenido compartido');
}

function maybeShowSharePrompt(){
  if(!pendingShare||!inAnyChat())return;
  $('cw-share-prompt-tx').textContent=`Enviar "${shareLabel()}" compartido a esta sala?`;
  $('cw-share-prompt').style.display='flex';
}

$('cw-share-send').onclick=async()=>{
  if(!pendingShare)return;
  const f=(pendingShare.blobs||[])[0];
  if(f)sendFileP2P(fileFromShareBlob(f));
  else if(pendingShare.text||pendingShare.url){
    $('cw-mi').value=[pendingShare.text,pendingShare.url].filter(Boolean).join(' ');
    sendMsg();
  }
  await clearPendingShare();
};
$('cw-share-discard').onclick=clearPendingShare;

const contentEl=document.getElementById('content');
function teardown(){
  if(inAnyChat())goBack();
  stopGeoShare();
  if(peer){try{peer.destroy();}catch(e){}peer=null;pid=null;}
  document.querySelectorAll('dialog.cw-dlg').forEach(dlg=>{if(dlg.open)dlg.close();});
  document.body.style.overflow='';
  document.removeEventListener('visibilitychange',onVisChange);
  if(torrentClient){try{torrentClient.destroy({destroyStore:true});}catch(e){}torrentClient=null;}
  cwDlClear();
  window.removeEventListener('beforeunload',teardown);
  if(disqusEl)disqusEl.style.display=disqusPrevDisplay||'';
}
if(contentEl)contentEl.addEventListener('contentUnload',teardown,{once:true});
window.addEventListener('beforeunload',teardown);

renderChatList();checkPendingShare();cwDlClear();
initPeer().then(initGeoSharing).catch(()=>{});
}();
</script>
