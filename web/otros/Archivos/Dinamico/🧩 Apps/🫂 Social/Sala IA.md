<div id="SI_app">
<style>
#SI_app{max-width:640px;margin:0 auto;display:flex;flex-direction:column;gap:10px;text-align:left}
#SI_app *{box-sizing:border-box}
#SI_app .hide{display:none!important}
.SI_c{text-align:center}
.SI_t{color:rgba(255,255,255,.75);font-size:1.3em;font-weight:600;margin:6px 0 10px}
.SI_bd{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:20px;font-size:.78em;font-weight:600;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06)}
.SI_bd s{width:8px;height:8px;border-radius:50%;background:var(--warn);text-decoration:none}
.SI_bd.ok s{background:var(--ok)}
.SI_bd.no s{background:var(--err)}
.SI_pg{height:4px;border-radius:2px;background:rgba(255,255,255,.1);overflow:hidden;max-width:420px;margin:8px auto 0}
.SI_pg i{display:block;height:100%;width:0;background:var(--accent);transition:width .3s}
.SI_r{display:flex;gap:8px;max-width:420px;margin:10px auto 0}
.SI_r input{flex:1;min-width:0;text-align:center}
.SI_ht{color:rgba(255,255,255,.45);font-size:.8em;margin:10px auto 0;max-width:420px}
#SI_ch{border:1px solid rgba(255,255,255,.09);border-radius:var(--r-sm,12px);background:rgba(0,0,0,.2);overflow:hidden}
.SI_h{display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.1)}
.SI_hx{flex:1;min-width:0}
.SI_hn{font-size:.92rem;font-weight:600}
.SI_hs{font-size:.68rem;color:rgba(255,255,255,.5)}
.SI_ib{border:none;background:rgba(255,255,255,.07);color:#fff;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:1rem;flex:0 0 auto;display:flex;align-items:center;justify-content:center;padding:0}
.SI_ib.sn{background:var(--accent)}
.SI_cf{display:grid;gap:6px;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.1)}
.SI_cf label{font-size:.7rem;color:rgba(255,255,255,.5)}
.SI_cf textarea,.SI_cf select{width:100%;font-family:var(--font);font-size:.86em}
#SI_vg{display:none;gap:8px;padding:8px;overflow-x:auto;border-bottom:1px solid rgba(255,255,255,.1)}
#SI_vg.on{display:flex}
.SI_vp{flex:0 0 auto}
.SI_vp video{width:100px;height:75px;border-radius:12px;object-fit:cover;background:#000;display:block}
.SI_vp div{font-size:.6rem;color:rgba(255,255,255,.6);text-align:center;max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.SI_m,.SI_pp{height:52vh;overflow-y:auto;padding:12px 10px}
.SI_m{display:flex;flex-direction:column;gap:6px}
.SI_m.hid{display:none}
.SI_pp{display:none;flex-wrap:wrap;gap:16px;align-content:flex-start}
.SI_pp.on{display:flex}
.SI_g{display:flex;max-width:84%;align-self:flex-start}
.SI_g.me{align-self:flex-end}
.SI_b{padding:8px 12px;border-radius:16px;border-bottom-left-radius:4px;font-size:.86rem;line-height:1.4;word-break:break-word;white-space:pre-wrap;background:rgba(255,255,255,.06)}
.SI_g.me .SI_b{background:rgba(var(--accent-rgb),.28);border-radius:16px 16px 4px 16px}
.SI_n{font-size:.62rem;font-weight:600;margin-bottom:2px}
.SI_s{font-size:.68rem;color:rgba(255,255,255,.45);text-align:center;padding:4px 0}
.SI_qw{flex:0 0 100%;text-align:center}
.SI_qr{background:#fff;border-radius:14px;padding:8px;display:inline-block;line-height:0}
.SI_ct{font-family:monospace;font-size:1.4em;letter-spacing:.18em;font-weight:700;cursor:pointer;margin-top:6px}
#SI_pl{display:flex;flex-wrap:wrap;gap:16px;flex:0 0 100%}
.SI_pb{display:flex;flex-direction:column;align-items:center;gap:6px;width:76px;background:none;border:none;color:#fff;cursor:pointer;font-family:inherit;padding:0}
.SI_pc{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff}
.SI_pn{font-size:.7rem;max-width:76px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.SI_in{display:flex;align-items:flex-end;gap:6px;padding:8px 10px;border-top:1px solid rgba(255,255,255,.1)}
.SI_in textarea{flex:1;min-width:0;padding:9px 13px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:18px;color:#fff;font-family:var(--font);font-size:.88rem;outline:none;resize:none;height:38px;line-height:1.4}
#SI_nt{padding:0 12px 8px;min-height:1em}
#SI_t{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:#fff;padding:10px 22px;border-radius:12px;font-size:.85em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999;max-width:80vw}
#SI_t.show{opacity:1;transform:translateX(-50%) translateY(0)}
</style>

<div id="SI_lb" class="SI_c">
<div style="font-size:2.8rem;line-height:1.2">🧠</div>
<div class="SI_t">Sala IA</div>
<div class="SI_bd" id="SI_bd"><s></s><span id="SI_bt">Comprobando IA local...</span></div>
<div class="SI_pg hide" id="SI_pg"><i></i></div>
<div class="SI_r"><input type="text" id="SI_nk" placeholder="Tu nombre" maxlength="24" autocomplete="off"></div>
<div class="SI_r"><button id="SI_nw" style="flex:1" disabled>➕ Crear sala</button></div>
<p class="SI_ht" id="SI_ht">Quien crea la sala presta su IA local (requiere Chrome de escritorio). Los que se unen no necesitan nada.</p>
<hr style="border:none;border-top:1px solid rgba(255,255,255,.08);margin:20px auto;max-width:420px">
<div class="SI_r"><input type="text" id="SI_cd" placeholder="ID de sala" maxlength="8" autocomplete="off" autocorrect="off" spellcheck="false" style="text-transform:uppercase;letter-spacing:.12em"><button id="SI_jn">Unirme</button></div>
</div>

<div id="SI_ch" class="hide">
<div class="SI_h">
<button class="SI_ib" id="SI_bk">←</button>
<div class="SI_hx"><div class="SI_hn" id="SI_hn"></div><div class="SI_hs" id="SI_hs"></div></div>
<button class="SI_ib" id="SI_cp" title="Copiar ID">🔗</button>
<button class="SI_ib" id="SI_bv" title="Camara">📷</button>
<button class="SI_ib" id="SI_bp" title="Participantes">👥</button>
<button class="SI_ib hide" id="SI_bc" title="Ajustes de la IA">⚙️</button>
</div>
<div class="SI_cf hide" id="SI_cf">
<label>Instrucciones</label><textarea id="SI_sy" rows="3" maxlength="2000"></textarea>
<label>Creatividad</label><select id="SI_sm"></select>
<div class="SI_hs" id="SI_ci"></div>
<div class="SI_hs">Modelo: el que Chrome tenga instalado (Gemini Nano), no se puede elegir desde la pagina. Creatividad solo funciona con el origin trial de Chrome. Aplicar borra la memoria de la IA.</div>
<button id="SI_ap">Aplicar y reiniciar</button>
</div>
<div id="SI_vg"></div>
<div class="SI_m" id="SI_ms"></div>
<div class="SI_pp" id="SI_pp">
<div class="SI_qw hide" id="SI_qw"><div class="SI_qr" id="SI_qr"></div><div class="SI_ct" id="SI_ct"></div></div>
<div id="SI_pl"></div>
</div>
<div class="SI_in"><textarea id="SI_ip" rows="1" placeholder="Mensaje..." maxlength="2000"></textarea><button class="SI_ib sn" id="SI_sn">➤</button></div>
<div class="SI_hs" id="SI_nt"></div>
</div>

<div id="SI_t"></div>

<script>
(function(){
const $=i=>document.getElementById(i),mk=(t,c)=>{const e=document.createElement(t);if(c)e.className=c;return e};
if(!$('SI_app'))return;
const MP='https://cdn.jsdelivr.net/npm/peerjs@1.5.5/+esm',MQ='https://cdn.jsdelivr.net/npm/qr-creator@1.0.0/+esm',PF='cheia-',AL='ABCDEFGHJKMNPQRSTUVWXYZ23456789',RE=/^IA[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/,MX=2000,HS=120,QM=8,HB=10000;
const OP={expectedInputs:[{type:'text',languages:['es']}],expectedOutputs:[{type:'text',languages:['es']}]};
const SM=['most-predictable','predictable','slightly-predictable','balanced','slightly-creative','creative','most-creative'];
const CL=['#e8a0a0','#e8c4a0','#a8d8a0','#a0c4e8','#c4a8e8','#e8a8d0','#a8dede','#e8e0a0'];
let Peer,peer,pid='',host=0,code='',conns={},nick='',sess,busy=0,q=[],ac=0,left=0,ro={},ab,dlp=0,wa=0,rt=0,vs,calls={},wl,hbi,cu,log=[],bub={},cc={},ci=0,jd=0,rj=0,rr=0,lc,tt;
const cfg={sys:'Detecta solo falacias claramente presentes. Ignora posibles o discutibles. Explica brevemente cual es y por que. Si no hay ninguna, no respondas. Texto plano, sin Markdown. Formato: Falacia: Tipo: Explicacion:',sm:''};
const cut=v=>String(v==null?'':v).slice(0,MX);
const col=i=>cc[i]||(cc[i]=CL[ci++%CL.length]);
const ht=t=>{$('SI_ht').textContent=t};
const nt=t=>{$('SI_nt').textContent=t};
const sc=()=>{const w=$('SI_ms');w.scrollTop=w.scrollHeight};
const tos=t=>{const e=$('SI_t');e.textContent=t;e.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('show'),3500)};
const gc=()=>{const r=crypto.getRandomValues(new Uint32Array(6));let s='IA';for(const x of r)s+=AL[x%AL.length];return s};
const ids=()=>Object.keys(ro).filter(i=>i!==pid);
const cx0=c=>{try{c.close()}catch(e){}};
const bd=(c,t)=>{$('SI_bd').className='SI_bd'+(c?' '+c:'');$('SI_bt').textContent=t};
const pg=p=>{const g=$('SI_pg');g.classList.toggle('hide',p==null);if(p!=null)g.firstChild.style.width=p+'%'};

try{const j=JSON.parse(localStorage.getItem('si_cfg')||'null');if(j){cfg.sys=String(j.sys||cfg.sys).slice(0,MX);cfg.sm=SM.includes(j.sm)?j.sm:''}}catch(e){}
nick=(localStorage.getItem('si_nick')||'').slice(0,24);
$('SI_nk').value=nick;
$('SI_sm').innerHTML='<option value="">Automatica</option>'+SM.map(s=>'<option>'+s+'</option>').join('');

async function av(){
  if(!self.LanguageModel)return'no';
  try{return await LanguageModel.availability(OP)}catch(e){return'unavailable'}
}
const go=()=>{if(rt++<8)dl();else bd('no','No se pudo bajar el modelo, recarga la pagina')};
function wt(){
  if(wa)return;wa=1;
  const E=['pointerdown','pointerup','keydown'],f=()=>{wa=0;E.forEach(k=>document.removeEventListener(k,f,true));go()};
  E.forEach(k=>document.addEventListener(k,f,true));
}
async function chk(){
  const a=await av();
  $('SI_nw').disabled=a!=='available';
  if(a==='available'){rt=0;bd('ok','IA local lista');pg()}
  else if(a==='no'||a==='unavailable'){
    bd('no',a==='no'?'Falta Chrome 148 o mas nuevo (escritorio)':'Este equipo no soporta la IA integrada');
    ht('Para crear una sala hace falta Chrome 148 o mas nuevo en escritorio con la IA integrada (22 GB libres y GPU con mas de 4 GB de VRAM o 16 GB de RAM). Para unirte no hace falta nada.');
  }else{
    bd('',a==='downloading'?'Bajando el modelo...':'Falta bajar el modelo');
    if(a==='downloading'||(navigator.userActivation&&navigator.userActivation.isActive))go();else wt();
  }
}
function dl(){
  if(dlp)return;
  const da=new AbortController();let lp=Date.now(),iv;
  const end=()=>{if(!dlp)return;clearInterval(iv);dlp=0;setTimeout(chk,500)};
  dlp=1;
  LanguageModel.create({...OP,signal:da.signal,monitor:m=>m.addEventListener('downloadprogress',e=>{lp=Date.now();const p=Math.round((e.loaded||0)*100);bd('',p>=99?'Cargando el modelo...':'Bajando el modelo '+p+'%');pg(p)})}).then(s=>s.destroy()).catch(()=>{}).then(end);
  iv=setInterval(async()=>{if(!dlp)return;if(await av()==='available')end();else if(Date.now()-lp>9e4)da.abort()},3000);
}

const mkS=()=>LanguageModel.create({...OP,initialPrompts:[{role:'system',content:cfg.sys}],...(cfg.sm?{samplingMode:cfg.sm}:{})});
async function rs(){
  try{sess&&sess.destroy()}catch(e){}
  sess=null;sess=await mkS();
  sess.addEventListener('contextoverflow',()=>{bc({t:'s',m:'La IA olvido los mensajes mas viejos'});cx()});
  cx();
}
function cx(){
  if(!sess||typeof sess.contextUsage!=='number')return;
  snd({t:'x',u:sess.contextUsage,w:sess.contextWindow});
}

function ad(k,w,tx,id,ia){
  const m=$('SI_ms'),g=mk('div',k==='s'?'SI_s':'SI_g'+(k?' '+k:'')),s=mk('span');
  s.textContent=tx;
  if(k==='s')g.append(s);
  else{
    const b=mk('div','SI_b');
    if(k!=='me'){const c=ia?'#38bdf8':col(id||w),n=mk('div','SI_n');n.textContent=w;n.style.color=c;b.style.background=c+'26';b.append(n)}
    b.append(s);g.append(b);
  }
  m.append(g);while(m.children.length>HS)m.firstChild.remove();sc();return s;
}
function hs(){
  const n=Object.keys(ro).length||1;
  $('SI_hs').textContent=(host?'🔗 ':'')+n+(n===1?' persona':' personas')+(cu?' · IA '+cu.u+'/'+cu.w:'')+(rj?' · Reconectando...':'');
  $('SI_ci').textContent=cu?'Contexto usado: '+cu.u+' de '+cu.w+' tokens ('+Math.round(cu.u/cu.w*100)+'%)':'';
}
function rp(){
  const w=$('SI_pl');w.textContent='';
  Object.keys(ro).forEach(id=>{
    const b=mk('button','SI_pb'),c=mk('div','SI_pc'),n=mk('div','SI_pn');
    c.style.background=col(id);c.textContent=ro[id].slice(0,2).toUpperCase();
    n.textContent=ro[id]+(id===pid?' (vos)':'');
    b.append(c,n);
    if(id!==pid)b.onclick=()=>{const i=$('SI_ip');i.value+=(i.value&&!i.value.endsWith(' ')?' ':'')+'@'+ro[id]+' ';sv('m');i.focus()};
    w.append(b);
  });
}
const sv=v=>{$('SI_ms').classList.toggle('hid',v!=='m');$('SI_pp').classList.toggle('on',v==='p');if(v==='p')rp()};

function ap(m){
  const t=m.t;
  if(t==='m')ad(m.from===pid?'me':'',m.nick||'?',cut(m.txt),m.from);
  else if(t==='a')ad('','IA',cut(m.txt),0,1);
  else if(t==='a0')bub[m.id]=ad('','IA','',0,1);
  else if(t==='ch'){const b=bub[m.id]||(bub[m.id]=ad('','IA','',0,1));b.textContent+=cut(m.d);sc()}
  else if(t==='end')delete bub[m.id];
  else if(t==='err'){const b=bub[m.id];if(!b)ad('s','',cut(m.m));else if(!b.textContent)b.textContent=cut(m.m);delete bub[m.id]}
  else if(t==='s')ad('s','',cut(m.m));
  else if(t==='x'){cu=m;hs()}
  else if(t==='r'){ro=m.l||{};rp();hs();if(vs&&peer)ids().forEach(i=>{if(!calls[i])cl(i)})}
  else if(t==='h'){$('SI_ms').textContent='';bub={};(m.l||[]).forEach(ap)}
}
function snd(m){Object.values(conns).forEach(c=>{try{c.open&&c.send(m)}catch(e){}});ap(m)}
function bc(m){log.push(m);if(log.length>HS)log.shift();snd(m)}

async function once(id,p){
  let f='';
  for await(const c of sess.promptStreaming(p,{signal:ab.signal})){f+=c;snd({t:'ch',id,d:cut(c)})}
  return f;
}
async function run(nk,tx){
  const id=++ac;snd({t:'a0',id});
  try{
    if(!sess)await rs();
    const f=await once(id,nk+': '+tx);
    log.push({t:'a',txt:f});if(log.length>HS)log.shift();
    snd({t:'end',id});
  }catch(e){
    snd({t:'err',id,m:'Error IA '+((e&&e.name)||'')});
    if(!left&&!(e&&e.name==='AbortError')){try{sess.destroy()}catch(x){}sess=null}
  }
  cx();
}
async function pump(){
  if(busy)return;busy=1;
  while(q.length&&!left){const j=q.shift();nt(q.length?'En cola: '+q.length:'IA escribiendo...');await run(j[0],j[1])}
  busy=0;nt('');
}
function ask(nk,tx){
  if(q.length>=QM){bc({t:'s',m:'Cola llena, esperen un momento'});return}
  q.push([nk,tx]);pump();
}

function hb(){
  clearInterval(hbi);
  hbi=setInterval(()=>{Object.values(conns).forEach(c=>{if(++c.__m>3){cx0(c);return}try{c.send({t:'p'})}catch(e){}})},HB);
}
const rc=()=>{if(left||!peer)return;setTimeout(()=>{try{if(peer.disconnected&&!peer.destroyed)peer.reconnect()}catch(e){}},2000)};

function hh(c){
  c.on('open',()=>{
    const o=conns[c.peer];if(o&&o!==c)cx0(o);
    const re=!!ro[c.peer],n=cut((c.metadata&&c.metadata.nick)||'Alguien').slice(0,24);
    conns[c.peer]=c;c.__m=0;ro[c.peer]=n;
    try{c.send({t:'h',l:log})}catch(e){}
    if(!re)bc({t:'s',m:n+' entro'});
    snd({t:'r',l:ro});
  });
  c.on('data',d=>{
    c.__m=0;
    if(!d)return;
    if(d.t==='p'){try{c.send({t:'o'})}catch(e){}return}
    if(d.t!=='q')return;
    const tx=cut(d.txt).trim();if(!tx)return;
    const n=ro[c.peer]||'Alguien';
    bc({t:'m',from:c.peer,nick:n,txt:tx});ask(n,tx);
  });
  const by=()=>{
    if(conns[c.peer]!==c)return;
    delete conns[c.peer];const n=ro[c.peer]||'Alguien';delete ro[c.peer];
    bc({t:'s',m:n+' salio'});snd({t:'r',l:ro});
  };
  c.on('close',by);c.on('error',by);
}
function hg(c){
  lc=c;let ok=0;
  c.on('open',()=>{ok=1;rj=0;rr=0;c.__m=0;conns[c.peer]=c;if(!jd){jd=1;en()}hs()});
  c.on('data',d=>{c.__m=0;if(!d||!d.t)return;if(d.t==='p'){try{c.send({t:'o'})}catch(e){}}else if(d.t!=='o')ap(d)});
  c.on('close',()=>gl(c));c.on('error',()=>gl(c));
  setTimeout(()=>{if(!ok)gl(c)},15000);
}
function gl(c){
  if(left||host||c.__x)return;c.__x=1;
  if(conns[c.peer]===c)delete conns[c.peer];
  if(!jd)return fail('No se encontro esa sala');
  if(rr>=4)return fail('Se cerro la sala');
  rj=1;rr++;hs();
  setTimeout(()=>{if(left)return;if(!peer||peer.destroyed)return fail('Se corto la sala');hg(peer.connect(PF+code,{metadata:{nick},reliable:true}))},2000*rr);
}

function cl(i){hc(peer.call(i,vs,{metadata:{nick}}))}
function hc(c){
  const p=c.peer;
  if(calls[p]&&calls[p]!==c)cx0(calls[p]);
  calls[p]=c;
  c.on('stream',s=>{c.__s=1;if(s.getVideoTracks().length)vp(p,s)});
  c.on('close',()=>{
    if(calls[p]!==c)return;
    delete calls[p];rv(p);
    if(c.__s&&vs&&ro[p]&&!left)setTimeout(()=>{if(vs&&ro[p]&&!calls[p]&&peer)cl(p)},800);
  });
}
function vp(id,s,n){
  let e=$('SI_v'+id);
  if(!e){
    e=mk('div','SI_vp');e.id='SI_v'+id;
    const v=mk('video'),l=mk('div');v.autoplay=v.playsInline=1;if(id==='me')v.muted=1;
    l.textContent=n||ro[id]||id.slice(0,8);e.append(v,l);$('SI_vg').append(e);
  }
  e.firstChild.srcObject=s;$('SI_vg').classList.add('on');
}
function rv(id){const e=$('SI_v'+id);if(e)e.remove();if(!$('SI_vg').children.length)$('SI_vg').classList.remove('on')}

function mp(id){
  return new Promise((res,rej)=>{
    const go=P=>{
      peer=id?new P(id):new P();let ok=0;
      peer.on('error',e=>{
        const t=(e&&e.type)||'';
        if(t==='peer-unavailable'){if(lc&&!host)gl(lc);return}
        if(!ok){ok=1;rej(e);return}
        if(!left){tos('Error de conexion '+t);rc()}
      });
      peer.once('open',x=>{
        ok=1;pid=x;
        peer.on('disconnected',rc);
        peer.on('call',c=>{c.answer(vs||new MediaStream());hc(c)});
        res();
      });
    };
    if(Peer)return go(Peer);
    import(MP).then(m=>{Peer=m.Peer||m.default;go(Peer)}).catch(rej);
  });
}
async function qr(){
  $('SI_ct').textContent=code;
  try{const Q=(await import(MQ)).default,b=$('SI_qr');b.textContent='';Q.render({text:code,radius:.4,ecLevel:'M',size:168,quiet:2,fill:'#000',background:'#fff'},b)}
  catch(e){$('SI_qr').textContent='QR no disponible'}
}
async function cp(){
  if(!code)return;
  try{await navigator.clipboard.writeText(code);tos('ID copiado: '+code)}catch(e){tos('No se pudo copiar el ID')}
}
async function wk(){
  if(wl||!code||!('wakeLock' in navigator))return;
  try{wl=await navigator.wakeLock.request('screen');wl.addEventListener('release',()=>{wl=null})}catch(e){}
}
const vc=()=>{if(document.visibilityState==='visible'&&code){wk();rc()}};
function nk(){nick=$('SI_nk').value.trim().slice(0,24)||'Alguien';try{localStorage.setItem('si_nick',nick)}catch(e){}}

function en(){
  $('SI_lb').classList.add('hide');$('SI_ch').classList.remove('hide');
  $('SI_hn').textContent='Sala '+code;
  $('SI_bc').classList.toggle('hide',!host);$('SI_qw').classList.toggle('hide',!host);
  if(host){$('SI_sy').value=cfg.sys;$('SI_sm').value=cfg.sm}
  sv('m');hs();hb();wk();
}
async function create(){
  nk();$('SI_nw').disabled=1;bd('','Preparando la IA...');
  ab=new AbortController();left=0;
  try{await rs()}catch(e){ht('No se pudo iniciar la IA local');stop();return chk()}
  host=1;
  for(let i=0;i<4;i++){
    code=gc();
    try{await mp(PF+code);break}
    catch(e){try{peer&&peer.destroy()}catch(x){}peer=null;if(!(e&&e.type==='unavailable-id'))break}
  }
  if(!peer){ht('No se pudo abrir la sala');stop();host=0;return chk()}
  peer.on('connection',hh);
  ro={[pid]:nick};log=[];
  en();qr();cp();
  ad('s','','Sala abierta. Escribi vos o espera a que entren.');
}
async function join(){
  const v=$('SI_cd').value.trim().toUpperCase();
  if(!RE.test(v))return ht('ID invalido. Son 8 caracteres que empiezan con IA');
  nk();code=v;host=0;left=0;jd=0;rr=0;rj=0;
  $('SI_jn').disabled=1;ht('Conectando...');
  try{await mp('')}catch(e){$('SI_jn').disabled=0;return ht('No se pudo conectar')}
  $('SI_jn').disabled=0;
  hg(peer.connect(PF+code,{metadata:{nick},reliable:true}));
}
function send(){
  const v=cut($('SI_ip').value).trim();if(!v)return;
  $('SI_ip').value='';
  if(host){bc({t:'m',from:pid,nick,txt:v});ask(nick,v)}
  else{try{conns[PF+code].send({t:'q',txt:v})}catch(e){tos('No se pudo enviar')}}
}
function stop(){
  left=1;clearInterval(hbi);
  try{ab&&ab.abort()}catch(e){}
  Object.values(conns).forEach(cx0);conns={};
  Object.values(calls).forEach(cx0);calls={};
  if(vs){vs.getTracks().forEach(t=>t.stop());vs=null}
  q=[];busy=0;
  try{sess&&sess.destroy()}catch(e){}
  sess=null;
  try{peer&&!peer.destroyed&&peer.destroy()}catch(e){}
  peer=null;pid='';
  if(wl){wl.release().catch(()=>{});wl=null}
}
function out(){
  stop();host=0;code='';log=[];ro={};cu=null;bub={};
  $('SI_ms').textContent='';$('SI_vg').textContent='';$('SI_vg').classList.remove('on');
  $('SI_bv').style.opacity=1;
  $('SI_ch').classList.add('hide');$('SI_cf').classList.add('hide');$('SI_lb').classList.remove('hide');
  $('SI_jn').disabled=0;nt('');chk();
}
function fail(m){out();ht(m)}

$('SI_nw').onclick=create;
$('SI_jn').onclick=join;
$('SI_bk').onclick=out;
$('SI_sn').onclick=send;
$('SI_cp').onclick=cp;
$('SI_ct').onclick=cp;
$('SI_bp').onclick=()=>sv($('SI_pp').classList.contains('on')?'m':'p');
$('SI_bc').onclick=()=>$('SI_cf').classList.toggle('hide');
$('SI_cd').addEventListener('keydown',e=>{if(e.key==='Enter')join()});
$('SI_ip').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send()}});
$('SI_bv').onclick=async()=>{
  if(vs){
    vs.getTracks().forEach(t=>t.stop());vs=null;
    Object.values(calls).forEach(cx0);calls={};
    rv('me');$('SI_bv').style.opacity=1;return;
  }
  try{
    vs=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:{ideal:640},height:{ideal:480},frameRate:{max:24}},audio:false});
    vp('me',vs,nick+' (vos)');ids().forEach(cl);$('SI_bv').style.opacity=.5;
  }catch(e){tos('Sin acceso a camara')}
};
$('SI_ap').onclick=async()=>{
  cfg.sys=cut($('SI_sy').value);cfg.sm=$('SI_sm').value;
  try{localStorage.setItem('si_cfg',JSON.stringify(cfg))}catch(e){}
  $('SI_ap').disabled=1;
  try{
    await rs();bc({t:'s',m:'La IA arranca de cero'});
    if(cfg.sm&&sess.samplingMode!==cfg.sm)tos('Este Chrome ignoro la creatividad (requiere origin trial)');
  }catch(e){ad('s','','Error IA al reiniciar')}
  $('SI_ap').disabled=0;
};

chk();
document.addEventListener('visibilitychange',vc);
window.addEventListener('online',rc);
function td(){
  window.removeEventListener('beforeunload',td);
  document.removeEventListener('visibilitychange',vc);
  window.removeEventListener('online',rc);
  stop();
}
const ce=$('content');
if(ce)ce.addEventListener('contentUnload',td,{once:true});
window.addEventListener('beforeunload',td);
})();
</script>

<br>
<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Aplicaciones</a>
</div>
