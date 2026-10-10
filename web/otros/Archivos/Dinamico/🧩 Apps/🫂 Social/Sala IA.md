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
.SI_er{color:var(--err,#f87171);font-size:.8em;margin:8px auto 0;max-width:420px;min-height:1em}
.SI_r input.er{border-color:var(--err,#f87171)}
#SI_ch{border:1px solid rgba(255,255,255,.09);border-radius:var(--r-sm,12px);background:rgba(0,0,0,.2);overflow:hidden}
.SI_h{display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.1)}
.SI_hx{flex:1;min-width:0}
.SI_hn{font-size:.92rem;font-weight:600}
.SI_hs{font-size:.68rem;color:rgba(255,255,255,.5)}
.SI_ib{border:none;background:rgba(255,255,255,.07);color:#fff;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:1rem;flex:0 0 auto;display:flex;align-items:center;justify-content:center;padding:0}
.SI_ib.sn{background:var(--accent)}
.SI_cf{display:grid;gap:6px;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.1)}
.SI_cf label{font-size:.7rem;color:rgba(255,255,255,.5)}
.SI_cf textarea,.SI_cf select,.SI_cf input{width:100%;font-family:var(--font);font-size:.86em}
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
.SI_g{display:flex;gap:8px;max-width:84%;align-self:flex-start;align-items:flex-end}
.SI_g.me{align-self:flex-end;flex-direction:row-reverse}
.SI_av{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.55rem;font-weight:700;color:#fff;flex:0 0 auto}
.SI_b{padding:8px 12px;border-radius:16px;border-bottom-left-radius:4px;font-size:.86rem;line-height:1.4;word-break:break-word;white-space:pre-wrap;background:rgba(255,255,255,.06)}
.SI_g.me .SI_b{background:rgba(var(--accent-rgb),.28);border-radius:16px 16px 4px 16px}
.SI_n{font-size:.62rem;font-weight:600;margin-bottom:2px}
.SI_s{font-size:.68rem;color:rgba(255,255,255,.45);text-align:center;padding:4px 0}
.SI_qw{flex:0 0 100%;text-align:center}
.SI_qr{background:#fff;border-radius:14px;padding:8px;display:inline-block;line-height:0}
.SI_ct{font-family:monospace;font-size:1.4em;letter-spacing:.18em;font-weight:700;cursor:pointer;margin-top:6px}
#SI_pl{display:flex;flex-wrap:wrap;gap:16px;flex:0 0 100%}
.SI_pb{display:flex;flex-direction:column;align-items:center;gap:6px;width:76px;background:none;border:none;color:#fff;cursor:pointer;font-family:inherit;padding:0}
.SI_pc{position:relative;width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff}
.SI_pn{font-size:.7rem;max-width:76px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.SI_lp{border:none;background:rgba(255,255,255,.08);border-radius:50%;width:26px;height:26px;font-size:.72rem;cursor:pointer;opacity:.45;padding:0;flex:0 0 auto;color:#fff}
.SI_g:hover .SI_lp,.SI_lp:active{opacity:1}
.SI_lp:disabled{opacity:.2;cursor:default}
.SI_fb{position:absolute;top:-4px;right:-6px;min-width:18px;height:18px;border-radius:9px;background:var(--err,#f87171);color:#fff;font-size:.65rem;display:flex;align-items:center;justify-content:center;padding:0 4px}
#SI_wa{display:none;align-items:center;justify-content:center;gap:8px;font-size:.78rem;color:rgba(255,255,255,.55)}
#SI_wa img{width:28px;height:28px;object-fit:contain;opacity:.85}
#SI_wa.sm{display:flex;padding:6px}
#SI_wa.on{display:flex;flex-direction:column;height:52vh;gap:10px}
#SI_wa.on img{width:64px;height:64px}
#SI_ch:has(#SI_wa.on) .SI_m,#SI_ch:has(#SI_wa.on) .SI_pp{display:none!important}
.SI_in{display:flex;align-items:flex-end;gap:6px;padding:8px 10px;border-top:1px solid rgba(255,255,255,.1)}
.SI_in textarea{flex:1;min-width:0;padding:9px 13px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:18px;color:#fff;font-family:var(--font);font-size:.88rem;outline:none;resize:none;height:38px;line-height:1.4}
.SI_tk{display:flex;align-items:center;gap:8px;padding:6px 12px;border-bottom:1px solid rgba(255,255,255,.1);font-size:.68rem;color:rgba(255,255,255,.6)}
.SI_tb{flex:1;height:6px;border-radius:3px;background:rgba(255,255,255,.1);overflow:hidden}
.SI_tb i{display:block;height:100%;width:0;border-radius:3px;background:var(--ok);transition:width .4s,background .4s}
.SI_tb i.w{background:var(--warn)}
.SI_tb i.e{background:var(--err)}
#SI_sc{position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:998;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px}
#SI_rd{width:100%;max-width:360px}
#SI_rd video{width:100%!important;border-radius:var(--r-sm,12px)}
#SI_rd img{display:none!important}
#SI_t{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:#fff;padding:10px 22px;border-radius:12px;font-size:.85em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999;max-width:80vw}
#SI_t.show{opacity:1;transform:translateX(-50%) translateY(0)}
</style>

<div id="SI_lb" class="SI_c">
<div style="font-size:2.8rem;line-height:1.2">🧠</div>
<div class="SI_t">Sala IA</div>
<div class="SI_bd hide" id="SI_bd"><s></s><span id="SI_bt"></span></div>
<div class="SI_pg hide" id="SI_pg"><i></i></div>
<div class="SI_r"><input type="text" id="SI_nk" placeholder="Tu nombre" maxlength="24" autocomplete="off"></div>
<div class="SI_r"><button id="SI_nw" style="flex:1">➕ Crear sala</button></div>
<div class="SI_er" id="SI_er"></div>
<hr style="border:none;border-top:1px solid rgba(255,255,255,.08);margin:20px auto;max-width:420px">
<div class="SI_r"><input type="text" id="SI_cd" placeholder="ID de sala" maxlength="8" autocomplete="off" autocorrect="off" spellcheck="false" style="text-transform:uppercase;letter-spacing:.12em"><button class="SI_ib" id="SI_sq" title="Escanear QR">📷</button><button id="SI_jn">Unirme</button></div>
</div>

<div id="SI_ch" class="hide">
<div class="SI_h">
<button class="SI_ib" id="SI_bk">←</button>
<div class="SI_hx"><div class="SI_hn" id="SI_hn"></div><div class="SI_hs" id="SI_hs"></div></div>
<button class="SI_ib" id="SI_bs" title="Voz de la IA">🔊</button>
<button class="SI_ib" id="SI_bm" title="Microfono">🎤</button>
<button class="SI_ib" id="SI_bv" title="Camara">📷</button>
<button class="SI_ib" id="SI_bp" title="Invitar y participantes">👥</button>
<button class="SI_ib hide" id="SI_bc" title="Ajustes de la IA">⚙️</button>
</div>
<div class="SI_tk hide" id="SI_tk"><span>🧠 IA</span><div class="SI_tb"><i id="SI_ti"></i></div><span id="SI_tn"></span></div>
<div class="SI_cf hide" id="SI_cf">
<label>Instrucciones</label><textarea id="SI_sy" rows="3" maxlength="2000"></textarea>
<label>Creatividad</label><select id="SI_sm"></select>
<label>Voz de la IA</label><select id="SI_tl"></select><select id="SI_tv"></select>
<label>Velocidad</label><input type="range" id="SI_tr" min=".5" max="2" step=".1">
<label>Tono</label><input type="range" id="SI_tp" min="0" max="2" step=".1">
<button id="SI_ap">Aplicar</button>
</div>
<div id="SI_vg"></div>
<div class="SI_m" id="SI_ms"></div>
<div class="SI_pp" id="SI_pp">
<div class="SI_qw"><div class="SI_hs" style="margin-bottom:8px">Escanea para entrar</div><div class="SI_qr" id="SI_qr"></div><div class="SI_ct" id="SI_ct"></div></div>
<div id="SI_pl"></div>
<button id="SI_rb" style="flex:0 0 100%">📝 Resumen del debate</button>
</div>
<div id="SI_wa"><img alt=""><span id="SI_wt"></span></div>
<div class="SI_in"><textarea id="SI_ip" rows="1" placeholder="Mensaje..." maxlength="2000"></textarea><button class="SI_ib sn" id="SI_sn">➤</button></div>
</div>

<div class="SI_hs SI_c" id="SI_ft"></div>

<div id="SI_sc" class="hide"><div id="SI_rd"></div><button id="SI_sx">Cancelar</button></div>
<div id="SI_t"></div>

<script>
(function(){
const $=i=>document.getElementById(i),mk=(t,c)=>{const e=document.createElement(t);if(c)e.className=c;return e};
if(!$('SI_app'))return;
const MP='https://cdn.jsdelivr.net/npm/peerjs@1.5.5/+esm',MQ='https://cdn.jsdelivr.net/npm/qr-creator@1.0.0/+esm',MH='https://cdn.jsdelivr.net/npm/html5-qrcode@2.3.8/html5-qrcode.min.js',PF='cheia-',AL='ABCDEFGHJKMNPQRSTUVWXYZ23456789',RE=/^IA[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/,MX=2000,HS=120,QM=8,HB=10000;
const OP={expectedInputs:[{type:'text',languages:['es']}],expectedOutputs:[{type:'text',languages:['es']}]};
const SM=['most-predictable','predictable','slightly-predictable','balanced','slightly-creative','creative','most-creative'];
const CL=['#e8a0a0','#e8c4a0','#a8d8a0','#a0c4e8','#c4a8e8','#e8a8d0','#a8dede','#e8e0a0'];
let Peer,peer,pid='',host=0,code='',conns={},nick='',sess,busy=0,q=[],left=0,ro={},ab,dlp=0,wa=0,rt=0,vs,calls={},wl,hbi,cu,log=[],cc={},ci=0,jd=0,rj=0,rr=0,lc,tt,mi,mm=0,mu={},au={},tc={},mn=0,sd=new Set(),fc={},bl=0,hr=0,vo=localStorage.getItem('si_vo')!=='0';
const cfg={tl:'es',tv:'',tr:1,tp:1,sys:'Eres un arbitro anti falacias en un debate entre amigos. Revisa el ultimo mensaje usando el contexto de la conversacion. Marca found solo si hay una falacia claramente presente, indica su nombre en fallacy y explicala en una frase en explanation. Si no hay, found false y textos vacios. Texto plano, sin Markdown.',sm:''};
const SC={type:'object',properties:{found:{type:'boolean'},fallacy:{type:'string'},explanation:{type:'string'}},required:['found','fallacy','explanation']};
const tf=()=>({t:'tt',l:cfg.tl,v:cfg.tv,r:cfg.tr,p:cfg.tp});
const cut=v=>String(v==null?'':v).slice(0,MX);
const col=i=>cc[i]||(cc[i]=CL[ci++%CL.length]);
const ht=t=>{$('SI_er').textContent=t};
const sc=()=>{const w=$('SI_ms');w.scrollTop=w.scrollHeight};
const tos=t=>{const e=$('SI_t');e.textContent=t;e.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('show'),3500)};
const gc=()=>{const r=crypto.getRandomValues(new Uint32Array(6));let s='IA';for(const x of r)s+=AL[x%AL.length];return s};
const ids=()=>Object.keys(ro).filter(i=>i!==pid);
const cx0=c=>{try{c.close()}catch(e){}};
const bd=(c,t)=>{$('SI_bd').className='SI_bd'+(c?' '+c:'')+(t?'':' hide');$('SI_bt').textContent=t||''};
const pg=p=>{const g=$('SI_pg');g.classList.toggle('hide',p==null);if(p!=null)g.firstChild.style.width=p+'%'};

try{const j=JSON.parse(localStorage.getItem('si_cfg')||'null');if(j){cfg.sys=String(j.sys||cfg.sys).slice(0,MX);cfg.sm=SM.includes(j.sm)?j.sm:'';cfg.tl=String(j.tl||'es').slice(0,12);cfg.tv=String(j.tv||'').slice(0,80);cfg.tr=+j.tr||1;cfg.tp=+j.tp||1}}catch(e){}
nick=(localStorage.getItem('si_nick')||'').slice(0,24);
$('SI_nk').value=nick;
const PH=(location.hash.replace(/^#/,'').split('#')[1]||'').trim().toUpperCase();
if(RE.test(PH))$('SI_cd').value=PH;
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
  if(a==='available'){rt=0;bd('ok','IA local lista');pg()}
  else if(a==='no'||a==='unavailable')bd();
  else{
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
  sess=null;sess=await mkS();cx();
}
function cx(c){
  c=c||sess;
  if(!c||typeof c.contextUsage!=='number')return;
  snd({t:'x',u:c.contextUsage,w:c.contextWindow});
}

function sp(t){
  if(!vo||!self.speechSynthesis||!t||!t.trim())return;
  const u=new SpeechSynthesisUtterance(t.replace(/[*_#`>~|]/g,'')),V=speechSynthesis.getVoices(),l=String(tc.l||'es').toLowerCase();
  const v=V.find(x=>x.name===tc.v)||V.find(x=>x.lang.toLowerCase()===l)||V.find(x=>x.lang.toLowerCase().startsWith(l.slice(0,2)));
  if(v)u.voice=v;
  u.lang=(v&&v.lang)||tc.l||'es';u.rate=tc.r||1;u.pitch=tc.p||1;
  speechSynthesis.speak(u);
}
function pv(){
  if(!self.speechSynthesis)return;
  const V=speechSynthesis.getVoices(),l=$('SI_tl'),v=$('SI_tv');
  l.replaceChildren(...[...new Set(V.map(x=>x.lang).concat(cfg.tl))].sort().map(x=>new Option(x)));l.value=cfg.tl;
  v.replaceChildren(new Option('Voz automatica',''),...V.filter(x=>x.lang===cfg.tl).map(x=>new Option(x.name)));v.value=cfg.tv;
}
function tu(){
  try{localStorage.setItem('si_cfg',JSON.stringify(cfg))}catch(e){}
  snd(tf());
  if(self.speechSynthesis){speechSynthesis.cancel();sp('Hola')}
}
function ad(k,w,tx,id,ia,ix){
  const m=$('SI_ms'),g=mk('div',k==='s'?'SI_s':'SI_g'+(k?' '+k:'')),s=mk('span');
  s.textContent=tx;
  if(k==='s')g.append(s);
  else{
    const b=mk('div','SI_b'),W=mk('div');
    if(k!=='me'){
      const c=ia?'#38bdf8':col(id||w),n=mk('div','SI_n'),a=mk('div','SI_av');
      n.textContent=w;n.style.color=c;b.style.background=c+'26';
      a.textContent=w.slice(0,2).toUpperCase();a.style.background=c;
      b.append(s);W.append(n,b);g.append(a,W);
    }else{b.append(s);g.append(b)}
    if(ix){g.dataset.i=ix;const l=mk('button','SI_lp');l.textContent='🔍';l.onclick=()=>rq({t:'sc',i:ix});g.append(l)}
  }
  m.append(g);while(m.children.length>HS)m.firstChild.remove();sc();return s;
}
function hs(){
  const n=Object.keys(ro).length||1;
  $('SI_hs').textContent=n+(n===1?' persona':' personas')+(rj?' · Reconectando...':'');
  const H=ro[PF+code];$('SI_ft').textContent=H?'La IA es local, no consume agua ni se ejecuta en un centro de datos, la IA esta funcionando directamente desde la computadora de '+H:'';
  $('SI_tk').classList.toggle('hide',!cu);
  if(cu){const p=Math.min(100,Math.round(cu.u/cu.w*100)),i=$('SI_ti');i.style.width=p+'%';i.className=p>90?'e':p>70?'w':'';$('SI_tn').textContent=cu.u+' / '+cu.w+' tokens'}
}
function rp(){
  const w=$('SI_pl');w.textContent='';
  Object.keys(ro).forEach(id=>{
    const b=mk('button','SI_pb'),c=mk('div','SI_pc'),n=mk('div','SI_pn');
    c.style.background=col(id);c.textContent=ro[id].slice(0,2).toUpperCase();
    if(fc[id]){const x=mk('div','SI_fb');x.textContent=fc[id];c.append(x)}
    n.textContent=ro[id]+(id===pid?' (vos)':'')+(mu[id]?' 🔇':'');
    b.append(c,n);
    if(id!==pid)b.onclick=()=>{const i=$('SI_ip');i.value+=(i.value&&!i.value.endsWith(' ')?' ':'')+'@'+ro[id]+' ';sv('m');i.focus()};
    w.append(b);
  });
}
const sv=v=>{$('SI_ms').classList.toggle('hid',v!=='m');$('SI_pp').classList.toggle('on',v==='p');if(v==='p')rp()};

function wx(v,l,m){
  const w=$('SI_wa');
  w.className=v?(l?'on':'sm'):'';
  $('SI_wt').textContent=m||'';
  if(v)w.firstChild.src=(window.__CFG&&window.__CFG.waitAnim)||'';
  $('SI_ip').disabled=$('SI_sn').disabled=!!(v&&l);
}
function ap(m){
  const t=m.t;
  if(t==='m')ad(m.from===pid?'me':'',m.nick||'?',cut(m.txt),m.from,0,m.i);
  else if(t==='ru'){
    const e=document.querySelector('#SI_ms [data-i="'+m.i+'"] .SI_lp');if(e)e.disabled=1;
    if(m.txt){const x=String(m.txt).slice(0,4000);ad('','IA',x,0,1);if(!hr)x.split(/(?<=[.!?])\s+/).forEach(sp)}
    else ad('s','','Sin falacias: '+cut(m.nick));
  }
  else if(t==='w')wx(m.v,m.l,m.m);
  else if(t==='fc'){fc=m.m||{};rp()}
  else if(t==='s')ad('s','',cut(m.m));
  else if(t==='x'){cu=m;hs()}
  else if(t==='tt')tc=m;
  else if(t==='mu'){mu[m.id]=m.v;rp()}
  else if(t==='r'){ro=m.l||{};rp();hs();if((mi||vs)&&peer)ids().forEach(i=>{if(!calls[i])cl(i)})}
  else if(t==='h'){$('SI_ms').textContent='';hr=1;(m.l||[]).forEach(ap);hr=0}
}
function snd(m){Object.values(conns).forEach(c=>{try{c.open&&c.send(m)}catch(e){}});ap(m)}
function bc(m){log.push(m);if(log.length>HS)log.shift();snd(m)}

function bk(k){
  const B=Math.round((sess.contextWindow||4096)*1.5);let n=0,a=[];
  for(let j=k;j>=0&&n<B;j--){const x=log[j];if(x.t!=='m')continue;n+=x.nick.length+x.txt.length+2;a.unshift(x)}
  return a;
}
const ts=k=>bk(k).map(x=>x.nick+': '+x.txt).join('\n');
function tg(k){
  const g={};
  bk(k).forEach(x=>(g[x.from]=g[x.from]||{n:x.nick,l:[]}).l.push(x.txt));
  const P=Object.values(g);
  return 'Participantes: '+P.map(p=>p.n).join(', ')+'. Cada nombre es una sola persona.\n\n'+P.map(p=>p.n+':\n- '+p.l.join('\n- ')).join('\n\n')+'\n\nFalacias detectadas: '+Object.keys(g).map(i=>g[i].n+': '+(fc[i]||0)).join(', ')+'\n\nResume el debate con una linea por participante: su postura y sus puntos validos. Al final indica quien tuvo mas falacias.';
}
async function an(i){
  const k=log.findIndex(x=>x.t==='m'&&x.i===i);if(k<0)return null;
  let c;
  try{
    if(!sess)await rs();
    c=await sess.clone({signal:ab.signal});
    const r=await c.prompt(ts(k)+'\n\nAnaliza solo el ultimo mensaje.',{responseConstraint:SC,signal:ab.signal});
    cx(c);return JSON.parse(r);
  }catch(e){return null}finally{try{c&&c.destroy()}catch(x){}}
}
async function scn(i){
  const x=log.find(y=>y.t==='m'&&y.i===i);if(!x||sd.has(i))return;
  sd.add(i);snd({t:'w',v:1,m:'Analizando a '+x.nick+'...'});
  const r=await an(i);
  snd({t:'w',v:0});
  if(!r){sd.delete(i);snd({t:'s',m:'Error IA'});return}
  let tx='';
  if(r.found){fc[x.from]=(fc[x.from]||0)+1;snd({t:'fc',m:fc});tx=x.nick+': '+(r.fallacy||'Falacia')+'. '+r.explanation}
  bc({t:'ru',i,nick:x.nick,txt:tx});
}
async function sum(){
  bl=1;
  try{
    const ms=log.filter(x=>x.t==='m'&&!sd.has(x.i)&&x.txt.length>15);
    for(let n=0;n<ms.length&&!left;n++){
      snd({t:'w',v:1,l:1,m:'Analizando '+(n+1)+'/'+ms.length});
      sd.add(ms[n].i);
      const r=await an(ms[n].i);
      if(r&&r.found)fc[ms[n].from]=(fc[ms[n].from]||0)+1;
    }
    snd({t:'fc',m:fc});
    snd({t:'w',v:1,l:1,m:'Escribiendo resumen...'});
    if(!sess)await rs();
    const c=await sess.clone({signal:ab.signal});
    try{
      const r=await c.prompt(tg(log.length-1),{signal:ab.signal});
      cx(c);bc({t:'ru',i:0,nick:'',txt:r.trim()||'Sin resumen'});
    }finally{c.destroy()}
  }catch(e){snd({t:'s',m:'Error IA'})}
  bl=0;snd({t:'w',v:0});
}
function jb(d){
  if(bl||q.length>=QM)return;
  if(d.t==='sc'&&(sd.has(d.i)||q.some(x=>x.i===d.i)))return;
  if(d.t==='rs'&&q.some(x=>x.t==='rs'))return;
  q.push(d);pump();
}
async function pump(){
  if(busy)return;busy=1;
  while(q.length&&!left){const j=q.shift();await(j.t==='rs'?sum():scn(j.i))}
  busy=0;
}
const rq=d=>{if(host)jb(d);else{try{conns[PF+code].send(d)}catch(e){}}};

function hb(){
  clearInterval(hbi);
  hbi=setInterval(()=>{Object.values(conns).forEach(c=>{if(++c.__m>3){cx0(c);return}try{c.send({t:'p'})}catch(e){}})},HB);
}
const rc=()=>{if(left||!peer)return;setTimeout(()=>{try{if(peer.disconnected&&!peer.destroyed)peer.reconnect()}catch(e){}},2000)};

function hh(c){
  c.on('open',()=>{
    const o=conns[c.peer];if(o&&o!==c)cx0(o);
    const re=!!ro[c.peer],b=cut((c.metadata&&c.metadata.nick)||'Alguien').slice(0,24);let n=b,k=1;
    while(Object.keys(ro).some(i=>i!==c.peer&&ro[i]===n))n=b+'_'+(++k);
    conns[c.peer]=c;c.__m=0;ro[c.peer]=n;
    try{c.send({t:'h',l:log})}catch(e){}
    if(cu)try{c.send({t:'x',u:cu.u,w:cu.w})}catch(e){}
    try{c.send(tc)}catch(e){}
    try{c.send({t:'fc',m:fc})}catch(e){}
    Object.keys(mu).forEach(k=>{try{c.send({t:'mu',id:k,v:mu[k]})}catch(e){}});
    if(!re)bc({t:'s',m:n+' entro'});
    snd({t:'r',l:ro});
  });
  c.on('data',d=>{
    c.__m=0;
    if(!d)return;
    if(d.t==='p'){try{c.send({t:'o'})}catch(e){}return}
    if(d.t==='mu'){snd({t:'mu',id:c.peer,v:!!d.v});return}
    if(d.t==='sc'||d.t==='rs'){jb({t:d.t,i:+d.i});return}
    if(d.t!=='q'||bl)return;
    const tx=cut(d.txt).trim();if(!tx)return;
    bc({t:'m',i:++mn,from:c.peer,nick:ro[c.peer]||'Alguien',txt:tx});
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

const ms=()=>{const s=new MediaStream();[mi,vs].forEach(x=>x&&x.getTracks().forEach(t=>s.addTrack(t)));return s};
function cl(i){if(mi||vs)hc(peer.call(i,ms(),{metadata:{nick}}))}
function ra(p){const a=au[p];if(a){a.srcObject=null;a.remove();delete au[p]}}
function hc(c){
  const p=c.peer;
  if(calls[p]&&calls[p]!==c)cx0(calls[p]);
  calls[p]=c;
  c.on('stream',s=>{
    c.__s=1;
    if(s.getVideoTracks().length)vp(p,s);else rv(p);
    if(s.getAudioTracks().length){
      let a=au[p];
      if(!a){a=mk('audio');a.autoplay=1;document.body.append(a);au[p]=a}
      a.srcObject=new MediaStream(s.getAudioTracks());
    }
  });
  c.on('close',()=>{
    if(calls[p]!==c)return;
    delete calls[p];rv(p);ra(p);
    if(c.__s&&(mi||vs)&&ro[p]&&!left)setTimeout(()=>{if((mi||vs)&&ro[p]&&!calls[p]&&peer)cl(p)},800);
  });
}
async function sa(){
  try{mi=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true},video:false});ids().forEach(cl)}
  catch(e){$('SI_bm').style.opacity=.4}
}
function vp(id,s,n){
  let e=$('SI_v'+id);
  if(!e){
    e=mk('div','SI_vp');e.id='SI_v'+id;
    const v=mk('video'),l=mk('div');v.autoplay=v.playsInline=1;v.muted=1;
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
        peer.on('call',c=>{const o=calls[c.peer];if(o&&!o.open&&pid>c.peer)return cx0(c);c.answer(ms());hc(c)});
        res();
      });
    };
    if(Peer)return go(Peer);
    import(MP).then(m=>{Peer=m.Peer||m.default;go(Peer)}).catch(rej);
  });
}
async function qr(){
  $('SI_ct').textContent=code;
  try{const Q=(await import(MQ)).default,b=$('SI_qr');b.textContent='';Q.render({text:code,radius:.4,ecLevel:'M',size:174,quiet:2,fill:'#000',background:'#fff'},b)}
  catch(e){$('SI_qr').textContent='QR no disponible'}
}
async function cp(){try{await navigator.clipboard.writeText(code)}catch(e){}}
async function wk(){
  if(wl||!code||!('wakeLock' in navigator))return;
  try{wl=await navigator.wakeLock.request('screen');wl.addEventListener('release',()=>{wl=null})}catch(e){}
}
const vc=()=>{if(document.visibilityState==='visible'&&code){wk();rc()}};
function nk(){const v=$('SI_nk').value.trim().slice(0,24);$('SI_nk').classList.toggle('er',!v);if(!v){ht('Escribi tu nombre');$('SI_nk').focus();return 0}ht('');nick=v;try{localStorage.setItem('si_nick',nick)}catch(e){}return 1}

function en(){
  $('SI_lb').classList.add('hide');$('SI_ch').classList.remove('hide');
  $('SI_hn').textContent='Sala '+code;
  $('SI_bc').classList.toggle('hide',!host);
  if(host){$('SI_sy').value=cfg.sys;$('SI_sm').value=cfg.sm;$('SI_tr').value=cfg.tr;$('SI_tp').value=cfg.tp;pv()}
  ht('');sv('m');hs();hb();wk();qr();sa();
}
async function create(){
  if(!nk())return;
  const a=await av();
  if(a!=='available'){
    ht(a==='no'?'Requiere Chrome 148 o mas nuevo en escritorio':a==='unavailable'?'Este equipo no tiene IA integrada':'Espera a que termine la descarga del modelo');
    return chk();
  }
  $('SI_nw').disabled=1;
  ab=new AbortController();left=0;
  try{await rs()}catch(e){ht('No se pudo iniciar la IA');stop();$('SI_nw').disabled=0;return chk()}
  host=1;
  for(let i=0;i<4;i++){
    code=gc();
    try{await mp(PF+code);break}
    catch(e){try{peer&&peer.destroy()}catch(x){}peer=null;if(!(e&&e.type==='unavailable-id'))break}
  }
  if(!peer){ht('No se pudo abrir la sala');stop();host=0;$('SI_nw').disabled=0;return chk()}
  peer.on('connection',hh);
  ro={[pid]:nick};log=[];tc=tf();mn=0;sd=new Set();fc={};bl=0;
  en();cp();
  ad('s','','Sala abierta. Escribi vos o espera a que entren.');
}
async function join(){
  const v=$('SI_cd').value.trim().toUpperCase();
  if(!nk())return;
  if(!RE.test(v))return ht('ID invalido');
  code=v;host=0;left=0;jd=0;rr=0;rj=0;
  $('SI_jn').disabled=1;
  try{await mp('')}catch(e){$('SI_jn').disabled=0;return ht('No se pudo conectar')}
  $('SI_jn').disabled=0;
  hg(peer.connect(PF+code,{metadata:{nick},reliable:true}));
}
function send(){
  const v=cut($('SI_ip').value).trim();if(!v)return;
  $('SI_ip').value='';
  if(host)bc({t:'m',i:++mn,from:pid,nick,txt:v});
  else{try{conns[PF+code].send({t:'q',txt:v})}catch(e){tos('No se pudo enviar')}}
}
function stop(){
  left=1;clearInterval(hbi);
  try{ab&&ab.abort()}catch(e){}
  Object.values(conns).forEach(cx0);conns={};
  Object.values(calls).forEach(cx0);calls={};
  [mi,vs].forEach(x=>x&&x.getTracks().forEach(t=>t.stop()));mi=vs=null;Object.keys(au).forEach(ra);mm=0;mu={};if(self.speechSynthesis)speechSynthesis.cancel();
  q=[];busy=0;
  try{sess&&sess.destroy()}catch(e){}
  sess=null;
  try{peer&&!peer.destroyed&&peer.destroy()}catch(e){}
  peer=null;pid='';
  if(wl){wl.release().catch(()=>{});wl=null}
}
function out(){
  stop();host=0;code='';log=[];ro={};cu=null;fc={};sd=new Set();bl=0;wx(0);
  $('SI_ms').textContent='';$('SI_vg').textContent='';$('SI_vg').classList.remove('on');
  $('SI_bv').style.opacity=1;$('SI_bm').style.opacity=1;$('SI_bm').textContent='🎤';
  $('SI_ch').classList.add('hide');$('SI_cf').classList.add('hide');$('SI_lb').classList.remove('hide');
  $('SI_jn').disabled=$('SI_nw').disabled=0;$('SI_ft').textContent='';chk();
}
function fail(m){out();ht(m)}

$('SI_nw').onclick=create;
$('SI_jn').onclick=join;
$('SI_bk').onclick=out;
$('SI_sn').onclick=send;
$('SI_bp').onclick=()=>{const o=$('SI_pp').classList.contains('on');sv(o?'m':'p');if(!o)cp()};
$('SI_bc').onclick=()=>$('SI_cf').classList.toggle('hide');
$('SI_cd').addEventListener('keydown',e=>{if(e.key==='Enter')join()});
$('SI_ip').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send()}});
$('SI_bm').onclick=()=>{
  if(!mi)return sa();
  mm=!mm;mi.getAudioTracks().forEach(t=>t.enabled=!mm);
  $('SI_bm').textContent=mm?'🔇':'🎤';
  if(host)snd({t:'mu',id:pid,v:mm});else{try{conns[PF+code].send({t:'mu',v:mm})}catch(e){}}
};
$('SI_bv').onclick=async()=>{
  if(vs){
    vs.getTracks().forEach(t=>t.stop());vs=null;rv('me');$('SI_bv').style.opacity=1;
    if(mi)ids().forEach(cl);else{Object.values(calls).forEach(cx0);calls={}}
    return;
  }
  try{
    vs=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:{ideal:640},height:{ideal:480},frameRate:{max:24}},audio:false});
    vp('me',vs,nick+' (vos)');ids().forEach(cl);$('SI_bv').style.opacity=.5;
  }catch(e){tos('Sin acceso a camara')}
};
let qc;
const lj=u=>new Promise((r,j)=>{const e=mk('script');e.src=u;e.onload=r;e.onerror=j;document.head.append(e)});
function ks(c){if(c)Promise.resolve().then(()=>c.stop()).catch(()=>{}).then(()=>{try{c.clear()}catch(e){}})}
function ss(){const c=qc;qc=null;ks(c);$('SI_sc').classList.add('hide')}
async function scan(){
  if(qc)return;
  $('SI_sc').classList.remove('hide');
  try{
    if(!self.Html5Qrcode)await lj(MH);
    $('SI_rd').innerHTML='';
    const i=new Html5Qrcode('SI_rd');qc=i;
    await i.start({facingMode:'environment'},{fps:10,qrbox:{width:240,height:240}},raw=>{
      const t=String(raw||'').trim(),c=(t.includes('#')?t.split('#').pop():t).trim().toUpperCase();
      if(!c)return;
      ss();$('SI_cd').value=c;join();
    },()=>{});
    if(qc!==i)ks(i);
  }catch(e){ss();ht('Error camara')}
}
$('SI_sq').onclick=scan;
$('SI_rb').onclick=()=>{sv('m');rq({t:'rs'})};
$('SI_bs').style.opacity=vo?1:.4;
if(!self.speechSynthesis)$('SI_bs').classList.add('hide');
else speechSynthesis.addEventListener('voiceschanged',()=>{if(host)pv()});
$('SI_bs').onclick=()=>{vo=!vo;try{localStorage.setItem('si_vo',vo?'1':'0')}catch(e){}$('SI_bs').style.opacity=vo?1:.4;if(!vo&&self.speechSynthesis)speechSynthesis.cancel()};
$('SI_tl').onchange=()=>{cfg.tl=$('SI_tl').value;cfg.tv='';pv();tu()};
['SI_tv','SI_tr','SI_tp'].forEach(i=>$(i).onchange=()=>{cfg.tv=$('SI_tv').value;cfg.tr=+$('SI_tr').value;cfg.tp=+$('SI_tp').value;tu()});
$('SI_sx').onclick=ss;
['SI_nk','SI_cd'].forEach(i=>$(i).addEventListener('input',()=>{$('SI_nk').classList.remove('er');ht('')}));
$('SI_ap').onclick=async()=>{
  cfg.sys=cut($('SI_sy').value);cfg.sm=$('SI_sm').value;
  try{localStorage.setItem('si_cfg',JSON.stringify(cfg))}catch(e){}
  $('SI_ap').disabled=1;
  try{
    await rs();
    if(cfg.sm&&sess.samplingMode!==cfg.sm)tos('Creatividad no soportada');
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
  ss();
  stop();
}
const ce=$('content');
if(ce)ce.addEventListener('contentUnload',td,{once:true});
window.addEventListener('beforeunload',td);
})();
</script>

</div>