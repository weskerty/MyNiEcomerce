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
.cw-msg .cw-avi img{width:100%;height:100%;object-fit:cover}
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
#cw-ep{display:none;border-top:1px solid rgba(255,255,255,.08);max-height:260px}
#cw-ep.on{display:flex;flex-direction:column}
#cw-ep emoji-picker{--background:transparent;--border-color:rgba(255,255,255,.1);--text-color:#fff;width:100%;height:220px}
#cw-ib{display:flex;align-items:flex-end;gap:6px;padding:8px 10px}
#cw-mi{flex:1;padding:9px 13px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:18px;color:#fff;font-size:.88rem;outline:none;resize:none;max-height:110px;line-height:1.4}
.cw-ibtn{border:none;background:rgba(255,255,255,.07);color:#fff;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:1rem;flex-shrink:0;display:flex;align-items:center;justify-content:center}
.cw-ibtn.send{background:var(--accent);color:#fff}

#cw-participants{display:none;overflow-y:auto;padding:16px 12px;flex-wrap:wrap;gap:16px;align-content:flex-start;height:52vh;max-height:52vh}
#cw-participants.on{display:flex}
#cw-msgs.hid{display:none}
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

dialog.cw-dlg{max-width:min(360px,calc(100vw - 40px))}
dialog.cw-dlg[open]{display:flex;flex-direction:column;gap:10px}
dialog.cw-dlg h3{margin:0 0 4px;font-size:1rem;border:none!important}
.cw-lbl{font-size:.7rem;color:rgba(255,255,255,.5);letter-spacing:.05em;text-transform:uppercase;margin-bottom:3px}
.cw-row{display:flex;gap:8px}
.cw-row .Bp{flex:1}
</style>

<div id="chatw">
  <div id="cw-lobby">
    <div id="cw-lb-h">
      <h2>Chats</h2>
      <button class="B Bi" id="cw-new" title="Agregar chat" style="background:rgba(255,255,255,.08);border:none;color:#fff;width:38px;height:38px;border-radius:50%;cursor:pointer">+</button>
    </div>
    <div id="cw-share-banner">Seleccionar chat para enviar</div>
    <div id="cw-search">
      <input id="cw-si" placeholder="Buscar chats..." type="search">
    </div>
    <div id="cw-list"><div id="cw-empty">Sin chats guardados. Toca + para agregar uno.</div></div>
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
    <div id="cw-iw">
      <div id="cw-qb">
        <div id="cw-qb-info"><div id="cw-qb-nm"></div><div id="cw-qb-tx"></div></div>
        <button id="cw-qb-x">✕</button>
      </div>
      <div id="cw-ep"><div id="cw-epc"><emoji-picker id="cw-emj"></emoji-picker></div></div>
      <div id="cw-ib">
        <button class="cw-ibtn" id="cw-be">😊</button>
        <textarea id="cw-mi" rows="1" placeholder="Mensaje..."></textarea>
        <label class="cw-ibtn" style="cursor:pointer" title="Archivo (se comparte P2P via torrent)">📎<input type="file" id="cw-fl" style="display:none"></label>
        <button class="cw-ibtn send" id="cw-sn">➤</button>
      </div>
    </div>
  </div>
</div>

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
      <option value="room">Sala P2P (directa, sin servidor)</option>
      <option value="irc">Canal IRC</option>
    </select>
  </div>
  <div>
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
const TRYSTERO_APP='cheagana-chat',HIST=200,DOM=80,IM_STK=524288,AUTO_DL_MAX=1048576;
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const mk=(tag,cls)=>{const e=document.createElement(tag);if(cls)e.className=cls;return e;};
const COLS=['#e8a0a0','#e8c4a0','#a8d8a0','#a0c4e8','#c4a8e8','#e8a8d0','#a8dede','#e8e0a0'];
const uC={};let cI=0;
const gUC=pid=>{if(!uC[pid])uC[pid]=COLS[(cI++)%COLS.length];return uC[pid];};
const fSz=b=>b>1048576?(b/1048576).toFixed(1)+'MB':(b/1024).toFixed(0)+'KB';

function seedHash(s){let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;return h;}
const avatarUrl=pidLike=>`https://picsum.photos/seed/${seedHash(String(pidLike))}/64/64`;

function ckGet(k){const m=document.cookie.match(new RegExp('(?:^|; )'+k+'=([^;]*)'));return m?decodeURIComponent(m[1]):null;}
function ckSet(k,v){const sec=location.protocol==='https:'?';Secure':'';document.cookie=`${k}=${encodeURIComponent(v)};path=/;max-age=31536000;SameSite=Strict${sec}`;}
let nick=ckGet('cw_nick')||'';
function saveNick(n){nick=n;ckSet('cw_nick',n);}

import('https://cdn.jsdelivr.net/npm/emoji-picker-element@1/index.js').catch(e=>console.error('[emoji-picker]',e));

let trysteroP=null;
function loadTrystero(){if(!trysteroP)trysteroP=import('https://esm.sh/trystero@0.25.3');return trysteroP;}

let room=null,pid=null,curCfg=null;
let pNk={},pAu={},pVStr={},pMu={};
let aStream=null,vStream=null,muted=false,vidOn=false;
let hist=[],domCount=0,torrentClient=null;
let epOpen=false;
let msgAct=null,metaAct=null,histAct=null,muteAct=null,fileAct=null;

let ircSocket=null,ircMode=false,ircNick='',ircChannel='',ircChanKey='',ircUsers=new Map();
function inAnyChat(){return!!room||ircMode;}

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
function onVisChange(){if(document.visibilityState==='visible'&&inAnyChat()&&!wakeLock)wakeAcquire();}
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
  const lb=$('cw-list');
  if(!arr.length){lb.innerHTML='<div id="cw-empty">Sin chats guardados. Toca + para agregar uno.</div>';return;}
  lb.innerHTML='';
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
  showModal('cw-m-add');setTimeout(()=>$('cw-ad-nm').focus(),80);
};
$('cw-ad-rid-gen').onclick=()=>{$('cw-ad-rid').value=genRoomId();};
$('cw-ad-cx').onclick=()=>hideModal('cw-m-add');
$('cw-ad-ok').onclick=()=>{
  const label=$('cw-ad-nm').value.trim();
  if(!label)return;
  const kind=$('cw-ad-tipo').value==='irc'?'irc':'room';
  const id=Date.now().toString(36)+Math.random().toString(36).slice(2,7);
  if(kind==='room'){
    const rid=$('cw-ad-rid').value.trim();
    if(!rid)return;
    chatList.push({id,kind,label,roomId:rid,roomPw:$('cw-ad-rpw').value||''});
  }else{
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

async function enterRoom(cfg){
  $('cw-msgs').innerHTML='';$('cw-vl').innerHTML='';$('cw-vg').classList.remove('on');
  pNk={};pAu={};pVStr={};pMu={};
  hist=[];domCount=0;curCfg=cfg;

  $('cw-ch-nm').textContent=cfg.label.length>26?cfg.label.slice(0,26)+'…':cfg.label;
  $('cw-ch-sb').textContent='Conectando...';
  $('cw-bm').style.display='';$('cw-bv').style.display='';
  $('cw-ch-inv').style.display='';
  $('cw-lobby').classList.add('hid');$('cw-chat').classList.add('on');

  let joinRoom,selfId;
  try{({joinRoom,selfId}=await loadTrystero());}
  catch(e){addSys('Error al cargar Trystero');return goBack();}
  pid=selfId;

  try{room=joinRoom({appId:TRYSTERO_APP,password:cfg.roomPw||undefined,relayConfig:{redundancy:12}},cfg.roomId);}
  catch(e){addSys('Error al unirse a la sala');return goBack();}

  msgAct=room.makeAction('msg');
  metaAct=room.makeAction('meta');
  histAct=room.makeAction('hist');
  muteAct=room.makeAction('mute');
  fileAct=room.makeAction('file');

  msgAct.onMessage=(d,peerId)=>{
    const col=gUC(peerId);
    addMsg(pNk[peerId]||peerId.slice(0,8),d.v,false,col,avatarUrl(peerId),d.quote,d.mid);
    hist.push({from:peerId,nick:pNk[peerId]||peerId.slice(0,8),v:d.v,col,quote:d.quote,mid:d.mid});
    if(hist.length>HIST)hist.shift();
    checkMention(d.v);
  };
  metaAct.onMessage=(d,peerId)=>{pNk[peerId]=d.nick||pNk[peerId]||peerId.slice(0,8);renderPeers();};
  histAct.onMessage=(d,peerId)=>{
    if(!hist.length&&d?.length)d.forEach(m=>{
      uC[m.from]=m.col||gUC(m.from);
      addMsg(m.nick,m.v,false,m.col,avatarUrl(m.from),m.quote,m.mid);
      hist.push(m);
    });
  };
  muteAct.onMessage=(d,peerId)=>{
    const el=$('cw-vp-'+peerId);
    if(el){const n=el.querySelector('.cw-vp-n');if(n)n.textContent=(pNk[peerId]||peerId.slice(0,8))+(d?' 🔇':'');}
  };
  fileAct.onMessage=(d,peerId)=>addFileMsg(peerId,d);

  room.onPeerJoin=peerId=>{
    pNk[peerId]=peerId.slice(0,8);
    metaAct.send(meta(),peerId);
    histAct.send(hist.slice(-HIST),peerId);
    if(aStream)room.addStream(aStream,{target:peerId});
    if(vStream)room.addStream(vStream,{target:peerId});
    addSys((pNk[peerId]||peerId.slice(0,8))+' se unio');
    renderPeers();updateRoomCount();
  };
  room.onPeerLeave=peerId=>{
    addSys((pNk[peerId]||peerId.slice(0,8))+' salio');
    delete pNk[peerId];
    if(pAu[peerId]){pAu[peerId].pause();pAu[peerId].srcObject=null;pAu[peerId].remove();delete pAu[peerId];}
    rmVid(peerId);renderPeers();updateRoomCount();
  };
  room.onPeerStream=(stream,peerId)=>{
    if(stream.getVideoTracks().length){pVStr[peerId]=stream;addVidPeer(peerId,stream);}
    if(stream.getAudioTracks().length){
      let a=pAu[peerId];
      if(!a){a=mk('audio');a.autoplay=a.playsInline=1;document.body.appendChild(a);pAu[peerId]=a;}
      a.srcObject=new MediaStream(stream.getAudioTracks());
      if(pMu[peerId])a.muted=true;
    }
  };

  wakeAcquire();maybeShowSharePrompt();
  addSys('Conectado como '+nick);
  updateRoomCount();
  startAudio();
}

function updateRoomCount(){
  if(!room)return;
  const n=Object.keys(room.getPeers()).length+1;
  $('cw-ch-sb').textContent=(curCfg&&curCfg.roomPw?'🔒 ':'🔗 ')+n+' en sala';
}

async function startAudio(){
  try{
    aStream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true},video:false});
    if(room)room.addStream(aStream);
  }catch(e){}
}

$('cw-ch-inv').onclick=async()=>{
  if(!curCfg)return;
  const txt='ID: '+curCfg.roomId+(curCfg.roomPw?'\nContrasena: '+curCfg.roomPw:'');
  try{await navigator.clipboard.writeText(txt);addSys('Invitacion copiada al portapapeles');}
  catch(e){addSys('No se pudo copiar la invitacion');}
};

let ircTransport='ws';
function ircSend(raw){
  if(!ircSocket||ircSocket.readyState!==1)return;
  if(ircTransport==='sockjs')ircSocket.send(':1 '+raw);
  else ircSocket.send(raw+'\r\n');
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
    const dd={magnet:m[0],name:text.replace(m[0],'').trim()||'archivo compartido',size:0,mime:'application/octet-stream'};
    const{d,inner}=mkBubble(from,col,avatarUrl(from),false);
    const wrap=mk('div');inner.appendChild(wrap);
    renderTorrentCard(dd,wrap);
    mg.appendChild(d);mg.scrollTop=mg.scrollHeight;
  }else{
    addMsg(from,text,false,col,avatarUrl(from));
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
  if(command==='433'){addSys('Nick en uso, reconectando con otro...');ircNick+='_';ircSend('NICK '+ircNick);return;}
}

async function enterIrc(cfg){
  $('cw-msgs').innerHTML='';$('cw-vl').innerHTML='';$('cw-vg').classList.remove('on');
  hist=[];domCount=0;ircUsers=new Map();
  ircMode=true;
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
      const{default:SockJS}=await import('https://esm.sh/sockjs-client@1.6.1');
      ircSocket=new SockJS(cfg.gatewayUrl);
    }catch(e){addSys('No se pudo conectar: '+e.message);return goBack();}
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
    catch(e){addSys('No se pudo conectar: '+e.message);return goBack();}
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
  if(ircMode){
    if(ircSocket){try{ircSocket.close();}catch(e){}ircSocket=null;}
    ircMode=false;ircUsers=new Map();ircChannel='';ircChanKey='';
  }else if(room){
    try{room.leave();}catch(e){}
    room=null;msgAct=metaAct=histAct=muteAct=fileAct=null;pid=null;curCfg=null;pNk={};
  }
  if(aStream){aStream.getTracks().forEach(t=>t.stop());aStream=null;}
  if(vStream){vStream.getTracks().forEach(t=>t.stop());vStream=null;}
  Object.values(pAu).forEach(a=>{a.pause();a.srcObject=null;a.remove();});
  pAu={};pVStr={};pMu={};muted=false;vidOn=false;
  $('cw-bm').textContent='🎤';$('cw-bv').style.opacity='1';
  $('cw-ch-inv').style.display='none';
  closeEmoji();hidePP();
  $('cw-chat').classList.remove('on');$('cw-lobby').classList.remove('hid');
  renderChatList();
}
$('cw-bk').onclick=goBack;

$('cw-bm').onclick=()=>{
  if(!aStream)return;muted=!muted;
  aStream.getAudioTracks().forEach(t=>t.enabled=!muted);
  $('cw-bm').textContent=muted?'🔇':'🎤';
  if(muteAct)muteAct.send(muted);
};

$('cw-bv').onclick=async()=>{
  if(!vidOn){
    try{
      vStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:{ideal:640},height:{ideal:480},frameRate:{max:24}},audio:false});
      addVidSelf();
      if(room)room.addStream(vStream);
      $('cw-vg').classList.add('on');vidOn=true;$('cw-bv').style.opacity='.5';
    }catch(e){addSys('Sin acceso a camara');}
  }else{
    if(vStream){
      if(room)room.removeStream(vStream);
      vStream.getTracks().forEach(t=>t.stop());vStream=null;
    }
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

let showingParticipants=false;
function showParticipants(v){
  showingParticipants=v;
  $('cw-participants').classList.toggle('on',v);
  $('cw-msgs').classList.toggle('hid',v);
  if(v)renderPeers();
}
function hidePP(){showParticipants(false);}
$('cw-bp').onclick=()=>showParticipants(!showingParticipants);

function mentionUser(nickName){
  const mi=$('cw-mi');
  mi.value=(mi.value&&!mi.value.endsWith(' ')?mi.value+' ':mi.value)+'@'+nickName+' ';
  showParticipants(false);
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
  }else if(room){
    addBubble(nick,pid||'me',true);
    Object.keys(room.getPeers()).forEach(p=>addBubble(pNk[p]||p.slice(0,8),p,false));
  }
}

function trimDom(mg){if(domCount>=DOM){const f=mg.querySelector('.cw-msg,.cw-sys');if(f)f.remove();}else domCount++;}

let msgSeq=0;
function newMsgId(){return(pid||'me')+'_'+Date.now()+'_'+(msgSeq++);}

function mkBubble(nm,col,av,me,mid,quoteLabel){
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
    const img=mk('img');img.src=av;avd.appendChild(img);
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

function scrollToMsg(mid){
  if(!mid)return;
  const el=$('cw-msgs').querySelector(`[data-mid="${CSS.escape(mid)}"]`);
  if(!el){addSys('El mensaje original ya no esta disponible');return;}
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches||document.body.classList.contains('low-perf');
  el.scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'});
  el.classList.add('cw-flash');
  setTimeout(()=>el.classList.remove('cw-flash'),1200);
}

function addMsg(nm,txt,me,col,av,quote,mid){
  const mg=$('cw-msgs');
  const atBottom=mg.scrollHeight-mg.scrollTop-mg.clientHeight<80;
  trimDom(mg);
  const{d,inner}=mkBubble(nm,col,av,me,mid,txt);
  if(quote){
    const q=mk('div','cw-quote');
    const qn=mk('div','cw-quote-nm');qn.textContent=quote.nick;
    const qt=mk('div','cw-quote-tx');qt.textContent=quote.txt;
    q.append(qn,qt);
    if(quote.mid){q.style.cursor='pointer';q.onclick=e=>{e.stopPropagation();scrollToMsg(quote.mid);};}
    inner.appendChild(q);
  }
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
  const v=$('cw-mi').value.trim();if(!v)return;
  if(ircMode){
    ircSend('PRIVMSG '+ircChannel+' :'+v);
    addMsg(ircNick,v,true,gUC(ircNick),avatarUrl(ircNick));
    $('cw-mi').value='';$('cw-mi').style.height='';
    return;
  }
  if(!room)return;
  const col=gUC(pid||'me');
  const q=quoting?{...quoting}:undefined;
  const mid=newMsgId();
  msgAct.send({v,quote:q,mid});
  addMsg(nick,v,true,col,avatarUrl(pid||'me'),q,mid);
  hist.push({from:pid||'me',nick,v,col,quote:q,mid});
  if(hist.length>HIST)hist.shift();
  $('cw-mi').value='';$('cw-mi').style.height='';
  clearQuote();
}
$('cw-sn').onclick=sendMsg;
$('cw-mi').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMsg();}});
$('cw-mi').addEventListener('input',function(){this.style.height='';this.style.height=Math.min(this.scrollHeight,110)+'px';});

$('cw-be').onclick=()=>{epOpen=!epOpen;$('cw-ep').classList.toggle('on',epOpen);};
function closeEmoji(){epOpen=false;$('cw-ep').classList.remove('on');}
$('cw-emj').addEventListener('emoji-click',e=>{$('cw-mi').value+=(e.detail.unicode||'');$('cw-mi').focus();});

async function getTorrentClient(){
  if(torrentClient)return torrentClient;
  const{default:WebTorrent}=await import('https://esm.sh/webtorrent@3.0.16/dist/webtorrent.min.js');
  torrentClient=new WebTorrent();
  torrentClient.on('error',e=>console.error('[webtorrent]',e.message));
  return torrentClient;
}

async function sendFileP2P(f){
  try{
    const client=await getTorrentClient();
    client.seed(f,{name:f.name},torrent=>{
      if(ircMode){
        ircSend('PRIVMSG '+ircChannel+' :'+f.name+' '+torrent.magnetURI);
        addOwnFileMsg(f,{name:f.name,size:f.size,mime:f.type||'application/octet-stream'},torrent);
        return;
      }
      if(!room)return;
      const id=torrent.infoHash,mid=newMsgId();
      let w=0,h=0;
      const dd={id,mid,magnet:torrent.magnetURI,name:f.name,size:f.size,mime:f.type||'application/octet-stream',w,h};
      const afterDims=()=>{fileAct.send(dd);addOwnFileMsg(f,dd,torrent);};
      if(/^image\//.test(f.type)){
        const u=URL.createObjectURL(f),i=new Image();
        i.onload=()=>{dd.w=i.naturalWidth;dd.h=i.naturalHeight;URL.revokeObjectURL(u);afterDims();};
        i.onerror=()=>afterDims();
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
  const{d,inner}=mkBubble(nick,gUC(pid||'me'),avatarUrl(pid||'me'),true,dd.mid,'📎 '+dd.name);
  const wrap=mk('div');inner.appendChild(wrap);
  const url=URL.createObjectURL(file);
  if(isStk(dd)){const img=mk('img','cw-stk');img.src=url;wrap.appendChild(img);}
  else{
    const btn=mk('div','cw-dl');btn.innerHTML=`⬇ ${esc(dd.name)} <span style="opacity:.6">(${fSz(dd.size)})</span>`;
    btn.onclick=()=>{const a=mk('a');a.href=url;a.download=dd.name;a.click();};
    wrap.appendChild(btn);
  }
  mg.appendChild(d);mg.scrollTop=mg.scrollHeight;
}

function downloadTorrent(dd,wrap){
  const pr=mk('div','cw-torrent-pr');pr.textContent='Descargando de la red...';
  wrap.innerHTML='';wrap.appendChild(pr);
  getTorrentClient().then(client=>{
    client.add(dd.magnet,torrent=>{
      const iv=setInterval(()=>{
        if(!document.body.contains(pr))return clearInterval(iv);
        pr.textContent=`Descargando... ${(torrent.progress*100).toFixed(0)}% (${torrent.numPeers} fuentes)`;
      },500);
      torrent.on('done',async()=>{
        clearInterval(iv);
        const file=torrent.files[0];
        const blob=await file.blob();
        const url=URL.createObjectURL(blob);
        wrap.innerHTML='';
        if(isStk(dd)){const img=mk('img','cw-stk');img.src=url;wrap.appendChild(img);}
        else{
          const btn=mk('div','cw-dl');btn.innerHTML=`✓ ${esc(dd.name)} <span style="opacity:.6">(${fSz(dd.size)})</span>`;
          const a=mk('a');a.href=url;a.download=dd.name;
          btn.onclick=()=>a.click();
          wrap.appendChild(btn);
          a.click();
        }
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
  const{d,inner}=mkBubble(nm,col,avatarUrl(from),false,dd.mid,'📎 '+dd.name);
  const wrap=mk('div');inner.appendChild(wrap);
  mg.appendChild(d);mg.scrollTop=mg.scrollHeight;
  if(dd.size<=AUTO_DL_MAX)downloadTorrent(dd,wrap);
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
  document.querySelectorAll('dialog.cw-dlg').forEach(dlg=>{if(dlg.open)dlg.close();});
  document.body.style.overflow='';
  document.removeEventListener('visibilitychange',onVisChange);
  if(torrentClient){try{torrentClient.destroy();}catch(e){}torrentClient=null;}
}
if(contentEl)contentEl.addEventListener('contentUnload',teardown,{once:true});
window.addEventListener('beforeunload',teardown);

renderChatList();checkPendingShare();
}();
</script>
