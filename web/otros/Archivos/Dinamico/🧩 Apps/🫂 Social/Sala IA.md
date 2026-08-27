<div style="text-align:center;position:relative;padding-top:0;margin-top:0" id="si-app">
<style>
.SI0{color:rgba(255,255,255,.75);font-size:1.3em;font-weight:600;margin:10px 0 14px;min-height:1.5em}
.SI1{display:inline-flex;align-items:center;gap:7px;padding:5px 13px;border-radius:20px;font-size:.78em;font-weight:600;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);margin-bottom:16px}
.SI1 s{width:8px;height:8px;border-radius:50%;background:var(--warn);text-decoration:none;flex:0 0 auto}
.SI1.ok s{background:var(--ok)}
.SI1.no s{background:var(--err)}
.SI2{display:flex;gap:8px;max-width:420px;margin:0 auto 10px}
.SI2 input{flex:1;min-width:0;text-align:center;letter-spacing:.12em;text-transform:uppercase;font-size:1.05em}
.SI3{background:#fff;border-radius:14px;padding:8px;display:inline-block;line-height:0;margin:10px auto 6px}
.SI4{font-family:monospace;font-size:1.5em;letter-spacing:.18em;font-weight:700;user-select:all}
.SI5{text-align:left;height:52vh;min-height:280px;overflow-y:auto;border:1px solid rgba(255,255,255,.09);border-radius:var(--r-sm);background:rgba(0,0,0,.2);padding:10px;display:flex;flex-direction:column;gap:8px}
.SI6{max-width:88%;padding:8px 12px;border-radius:14px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.08);font-size:.9em;line-height:1.45;overflow-wrap:break-word;white-space:pre-wrap}
.SI6.me{align-self:flex-end;background:rgba(var(--accent-rgb),.22);border-color:rgba(var(--accent-rgb),.35)}
.SI6.ia{align-self:flex-start;background:rgba(var(--accent-2-rgb),.13);border-color:rgba(var(--accent-2-rgb),.28)}
.SI6.sys{align-self:center;max-width:100%;background:none;border:none;color:rgba(255,255,255,.4);font-size:.78em;padding:2px}
.SI6 b{display:block;font-size:.72em;opacity:.65;margin-bottom:2px;font-weight:600}
.SI7{display:flex;gap:8px;margin-top:10px}
.SI7 textarea{flex:1;min-width:0;font-family:var(--font);font-size:.9em;resize:none;height:44px}
.SI8{color:rgba(255,255,255,.45);font-size:.8em;margin:10px 0 0}
.SI9{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:14px 0 4px}
.SIA{display:grid;gap:4px;text-align:left;margin-bottom:10px}
.SIA label{font-size:.72rem;color:rgba(255,255,255,.5);letter-spacing:.03em}
.SIA input,.SIA textarea{width:100%;font-family:var(--font);font-size:.86em}
</style>

<div style="font-size:2.8rem;margin:0 auto 4px;line-height:1.2">🧠</div>
<div class="SI0" id="si-st">Sala IA</div>

<div id="si-lobby">
<div class="SI1" id="si-badge"><s></s><span id="si-badge-t">Comprobando IA local...</span></div>

<div class="SI2">
<input type="text" id="si-nick" placeholder="Tu nombre" maxlength="24" autocomplete="off" style="text-transform:none;letter-spacing:normal">
</div>

<div class="SI9">
<button id="si-new">➕ Crear sala</button>
<button id="si-dl" class="hide">⬇️ Bajar el modelo</button>
</div>
<p class="SI8" id="si-hint">Quien crea la sala presta su IA local. Los que se unen no necesitan nada.</p>

<hr style="border:none;border-top:1px solid rgba(255,255,255,.08);margin:20px auto;max-width:420px">

<div class="SI2">
<input type="text" id="si-code" placeholder="Codigo de sala" maxlength="8" autocomplete="off" autocorrect="off" spellcheck="false">
<button id="si-join">Unirme</button>
</div>
<p class="SI8">Tambien podes entrar con el codigo que te pasen, sin IA en tu equipo.</p>
</div>

<div id="si-room" class="hide">

<div id="si-share" class="hide">
<div class="SI3" id="si-qr"></div>
<div class="SI4" id="si-codetxt"></div>
<p class="SI8">Pasale este codigo o el QR a quien quieras invitar.</p>
</div>

<div class="SI5" id="si-msgs"></div>
<div class="SI7">
<textarea id="si-in" placeholder="Escribi tu mensaje..." maxlength="2000"></textarea>
<button id="si-send">Enviar</button>
</div>
<p class="SI8" id="si-note"></p>

<details id="si-cfg" class="hide">
<summary>⚙️ Ajustes de la IA</summary>
<section>
<div class="SIA"><label>Instrucciones del sistema</label><textarea id="si-sys" rows="3"></textarea></div>
<div class="SIA"><label>Temperatura <span id="si-tv"></span></label><input type="range" id="si-temp" min="0" max="1" step=".1"></div>
<div class="SIA"><label>Top K <span id="si-kv"></span></label><input type="range" id="si-topk" min="1" max="10" step="1"></div>
<div class="SI9"><button id="si-apply">Aplicar y reiniciar</button></div>
<p class="SI8">Cambiar esto borra la conversacion que la IA recuerda. Lo que ya se escribio en pantalla queda.</p>
</section>
</details>

<div class="SI9"><button id="si-out">Salir de la sala</button></div>
</div>

<script>
(function(){
  const $=i=>document.getElementById(i);
  if(!$('si-app'))return;

  const M_PEER='https://cdn.jsdelivr.net/npm/peerjs@1.5.5/+esm';
  const M_QR='https://cdn.jsdelivr.net/npm/qr-creator@1.0.0/+esm';
  const PFX='cheia-';
  const AL='ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  const RE=/^IA[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/;
  const MAX=2000,HIST=120,QMAX=8;

  let Peer=null,peer=null,pid='',host=false,code='',conns={},nick='',sess=null,nosys=false,deg=[],busy=false,q=[],ac=0,left=false;
  const cfg={sys:'Sos un asistente breve y claro. Responde siempre en espanol.',temp:.8,topk:3};

  const cut=v=>String(v==null?'':v).slice(0,MAX);
  const st=t=>{$('si-st').textContent=t};
  const note=t=>{$('si-note').textContent=t};

  function genCode(){
    const r=crypto.getRandomValues(new Uint32Array(6));
    let s='IA';
    for(let i=0;i<6;i++)s+=AL[r[i]%AL.length];
    return s;
  }

  try{
    const j=JSON.parse(localStorage.getItem('si_cfg')||'null');
    if(j){cfg.sys=String(j.sys||cfg.sys).slice(0,MAX);cfg.temp=+j.temp||cfg.temp;cfg.topk=+j.topk||cfg.topk}
  }catch(e){}
  nick=(localStorage.getItem('si_nick')||'').slice(0,24);
  $('si-nick').value=nick;

  function LM(){
    if(self.LanguageModel)return self.LanguageModel;
    const a=self.ai;
    if(a&&(a.languageModel||a.assistant))return a.languageModel||a.assistant;
    return null;
  }

  const OK1={available:1,readily:1};
  const DL1={downloadable:1,downloading:1,'after-download':1};

  async function avail(){
    const m=LM();
    if(!m)return 'no';
    let v='';
    try{
      if(m.availability)v=await m.availability();
      else if(m.capabilities)v=(await m.capabilities()).available;
    }catch(e){}
    if(OK1[v])return 'ok';
    if(DL1[v])return 'dl';
    return 'no';
  }

  function badge(cls,txt){
    const b=$('si-badge');
    b.className='SI1'+(cls?' '+cls:'');
    $('si-badge-t').textContent=txt;
  }

  async function chk(){
    const a=await avail();
    if(a==='ok'){badge('ok','IA local lista');$('si-new').disabled=false;$('si-dl').classList.add('hide')}
    else if(a==='dl'){badge('','Falta bajar el modelo');$('si-new').disabled=true;$('si-dl').classList.remove('hide')}
    else{
      badge('no','Sin IA local en este equipo');
      $('si-new').disabled=true;
      $('si-dl').classList.add('hide');
      $('si-hint').textContent='Para crear una sala hace falta Chrome 148 o mas nuevo en una PC, con la IA integrada activada. Igual podes unirte a la sala de otro.';
    }
    return a;
  }

  async function mkSess(){
    const m=LM();
    if(!m)throw new Error('sin IA');
    const mon=x=>{x.addEventListener('downloadprogress',e=>{
      const p=Math.round((e.loaded||0)*100);
      badge('','Bajando el modelo '+p+'%');
      st('Bajando el modelo '+p+'%');
    })};
    if(!m.create){
      nosys=true;
      deg=['ajustes'];
      return await m.createTextSession({temperature:cfg.temp,topK:cfg.topk});
    }
    const ip=[{role:'system',content:cfg.sys}];
    const sp={temperature:cfg.temp,topK:cfg.topk};
    const sets=[
      Object.assign({initialPrompts:ip,expectedInputs:[{type:'text',languages:['es']}]},sp),
      Object.assign({initialPrompts:ip},sp),
      {initialPrompts:ip},
      {}
    ];
    let last=null;
    for(let i=0;i<sets.length;i++){
      try{
        const x=await m.create(Object.assign({monitor:mon},sets[i]));
        nosys=i===3;
        deg=[];
        if(i>=2)deg.push('temperatura y Top K');
        if(i>=3)deg.push('instrucciones del sistema como mensaje aparte');
        return x;
      }catch(e){last=e}
    }
    throw last||new Error('sin IA');
  }

  async function resetSess(){
    try{if(sess&&sess.destroy)sess.destroy()}catch(e){}
    sess=null;nosys=false;deg=[];
    sess=await mkSess();
    try{
      if(sess.addEventListener)sess.addEventListener('contextoverflow',()=>{
        bcast({t:'sys',m:'La IA se quedo sin memoria y olvido lo mas viejo'});
      });
    }catch(e){}
    if(deg.length)add('sys','','Este navegador no acepto: '+deg.join(', '));
  }

  function add(kind,who,txt){
    const w=$('si-msgs');
    const d=document.createElement('div');
    d.className='SI6 '+kind;
    if(who){const b=document.createElement('b');b.textContent=who;d.appendChild(b)}
    const s=document.createElement('span');
    s.textContent=txt||'';
    d.appendChild(s);
    w.appendChild(d);
    while(w.children.length>HIST)w.removeChild(w.firstChild);
    w.scrollTop=w.scrollHeight;
    return s;
  }

  const bubbles={};
  function apply(m){
    if(m.t==='m')add(m.from===pid?'me':'',m.nick||'?',cut(m.txt));
    else if(m.t==='a0')bubbles[m.id]=add('ia','IA','');
    else if(m.t==='ch'){
      const b=bubbles[m.id];
      if(b){b.textContent+=cut(m.d);$('si-msgs').scrollTop=$('si-msgs').scrollHeight}
    }
    else if(m.t==='end')delete bubbles[m.id];
    else if(m.t==='err'){
      const b=bubbles[m.id];
      if(b)b.textContent=b.textContent||('Error IA '+cut(m.m));
      else add('sys','',cut(m.m));
      delete bubbles[m.id];
    }
    else if(m.t==='sys')add('sys','',cut(m.m));
    else if(m.t==='hist'&&Array.isArray(m.msgs))m.msgs.slice(-HIST).forEach(apply);
  }

  const log=[];
  function bcast(m,skip){
    log.push(m);
    if(log.length>HIST)log.shift();
    for(const k in conns){
      if(k===skip)continue;
      try{conns[k].send(m)}catch(e){}
    }
    apply(m);
  }

  function toHost(m){
    const c=conns[PFX+code];
    if(!c)return false;
    try{c.send(m);return true}catch(e){return false}
  }

  async function once(id,p){
    let got=false;
    if(sess.promptStreaming){
      try{
        let acc='';
        const s=sess.promptStreaming(p);
        for await(const c of s){
          let d=c;
          if(typeof c==='string'&&c.length>=acc.length&&c.indexOf(acc)===0){d=c.slice(acc.length);acc=c}
          else acc+=c;
          if(d){got=true;bcast({t:'ch',id,d:cut(d)})}
        }
      }catch(e){if(got||(e&&e.name==='QuotaExceededError'))throw e}
    }
    if(!got){
      const r=await sess.prompt(p);
      bcast({t:'ch',id,d:cut(r)});
    }
  }

  async function run(nk,txt){
    const id=++ac;
    bcast({t:'a0',id});
    try{
      if(!sess)await resetSess();
      const p=(nosys?cfg.sys+'\n\n':'')+nk+': '+txt;
      try{await once(id,p)}
      catch(e){
        if(!e||e.name!=='QuotaExceededError')throw e;
        bcast({t:'sys',m:'La IA se quedo sin memoria, arranca de cero'});
        await resetSess();
        await once(id,(nosys?cfg.sys+'\n\n':'')+nk+': '+txt);
      }
      bcast({t:'end',id});
    }catch(e){
      bcast({t:'err',id,m:'Error IA '+((e&&e.name)||'')});
      try{if(sess&&sess.destroy)sess.destroy()}catch(x){}
      sess=null;
    }
  }

  async function pump(){
    if(busy)return;
    busy=true;
    while(q.length){
      const j=q.shift();
      note(q.length?'En cola: '+q.length:'');
      await run(j[0],j[1]);
    }
    busy=false;
    note('');
  }

  function ask(nk,txt){
    if(q.length>=QMAX){bcast({t:'sys',m:'Cola llena, esperen un momento'});return}
    q.push([nk,txt]);
    if(q.length>1)note('En cola: '+q.length);
    pump();
  }

  function hookHost(c){
    c.on('open',()=>{
      conns[c.peer]=c;
      const n=cut((c.metadata&&c.metadata.nick)||'Alguien').slice(0,24);
      c.__n=n;
      try{c.send({t:'hist',msgs:log})}catch(e){}
      bcast({t:'sys',m:n+' entro'});
      who();
    });
    c.on('data',d=>{
      if(!d||d.t!=='q')return;
      const txt=cut(d.txt).trim();
      if(!txt)return;
      const n=c.__n||'Alguien';
      bcast({t:'m',from:c.peer,nick:n,txt});
      ask(n,txt);
    });
    const bye=()=>{
      if(!conns[c.peer])return;
      delete conns[c.peer];
      bcast({t:'sys',m:(c.__n||'Alguien')+' salio'});
      who();
    };
    c.on('close',bye);
    c.on('error',bye);
  }

  function who(){
    const n=Object.keys(conns).length;
    st('Sala '+code+' · '+(n+1)+(n+1===1?' persona':' personas'));
  }

  function hookGuest(c){
    let ok=false;
    c.on('open',()=>{
      ok=true;
      conns[c.peer]=c;
      st('Sala '+code);
      $('si-room').classList.remove('hide');
      $('si-lobby').classList.add('hide');
      add('sys','','Conectado. La IA la pone quien creo la sala.');
    });
    c.on('data',d=>{if(d&&d.t)apply(d)});
    c.on('close',()=>{if(!left)fail('Se corto la sala')});
    c.on('error',()=>{if(!ok)fail('No se encontro ese codigo')});
    setTimeout(()=>{if(!ok&&!left)fail('No se encontro ese codigo')},15000);
  }

  function fail(m){
    st('Sala IA');
    note('');
    $('si-room').classList.add('hide');
    $('si-lobby').classList.remove('hide');
    $('si-hint').textContent=m;
    stop();
  }

  function mkPeer(id){
    return new Promise((res,rej)=>{
      const go=P=>{
        peer=id?new P(id):new P();
        let done=false;
        peer.on('error',e=>{
          const t=(e&&e.type)||'';
          if(t==='peer-unavailable')return;
          if(!done){done=true;rej(e);return}
          if(!left)add('sys','','Error de conexion '+t);
        });
        peer.once('open',x=>{
          done=true;pid=x;
          peer.on('disconnected',()=>{if(!left)peer.reconnect()});
          res();
        });
      };
      if(Peer)return go(Peer);
      import(M_PEER).then(m=>{Peer=m.Peer||m.default;go(Peer)}).catch(rej);
    });
  }

  async function showQR(){
    $('si-codetxt').textContent=code;
    try{
      const QR=(await import(M_QR)).default;
      const b=$('si-qr');
      b.innerHTML='';
      QR.render({text:code,radius:.4,ecLevel:'M',size:168,quiet:2,fill:'#000',background:'#fff'},b);
    }catch(e){$('si-qr').textContent='QR no disponible'}
  }

  function askNick(){
    nick=$('si-nick').value.trim().slice(0,24)||'Alguien';
    try{localStorage.setItem('si_nick',nick)}catch(e){}
    return true;
  }

  async function create(){
    if(!askNick())return;
    $('si-new').disabled=true;
    st('Preparando la IA...');
    try{await resetSess()}
    catch(e){st('Sala IA');$('si-hint').textContent='No se pudo iniciar la IA local.';$('si-new').disabled=false;chk();return}
    host=true;left=false;
    for(let i=0;i<4;i++){
      code=genCode();
      try{await mkPeer(PFX+code);break}
      catch(e){
        try{if(peer&&!peer.destroyed)peer.destroy()}catch(x){}
        peer=null;
        if(e&&e.type==='unavailable-id'&&i<3){code='';continue}
        break;
      }
    }
    if(!peer||peer.destroyed){
      st('Sala IA');$('si-hint').textContent='No se pudo abrir la sala.';$('si-new').disabled=false;
      try{if(sess&&sess.destroy)sess.destroy()}catch(e){}
      sess=null;return;
    }
    peer.on('connection',hookHost);
    $('si-lobby').classList.add('hide');
    $('si-room').classList.remove('hide');
    $('si-share').classList.remove('hide');
    $('si-cfg').classList.remove('hide');
    $('si-sys').value=cfg.sys;
    $('si-temp').value=cfg.temp;$('si-tv').textContent=cfg.temp;
    $('si-topk').value=cfg.topk;$('si-kv').textContent=cfg.topk;
    who();
    showQR();
    add('sys','','Sala abierta. Escribi vos o espera a que entren.');
  }

  async function join(){
    const v=$('si-code').value.trim().toUpperCase();
    if(!RE.test(v)){$('si-hint').textContent='Codigo invalido. Son 8 caracteres que empiezan con IA.';return}
    if(!askNick())return;
    code=v;host=false;left=false;
    $('si-join').disabled=true;
    st('Conectando...');
    try{await mkPeer('')}
    catch(e){$('si-join').disabled=false;st('Sala IA');$('si-hint').textContent='No se pudo conectar.';return}
    const c=peer.connect(PFX+code,{metadata:{nick},reliable:true});
    $('si-join').disabled=false;
    if(!c){fail('No se pudo conectar');return}
    hookGuest(c);
  }

  function send(){
    const v=cut($('si-in').value).trim();
    if(!v)return;
    $('si-in').value='';
    if(host){
      bcast({t:'m',from:pid,nick,txt:v});
      ask(nick,v);
    } else if(!toHost({t:'q',txt:v}))add('sys','','No se pudo enviar');
  }

  function stop(){
    left=true;
    for(const k in conns){try{conns[k].close()}catch(e){}}
    conns={};
    q=[];busy=false;
    try{if(sess&&sess.destroy)sess.destroy()}catch(e){}
    sess=null;
    try{if(peer&&!peer.destroyed)peer.destroy()}catch(e){}
    peer=null;pid='';
  }

  function out(){
    stop();
    host=false;code='';log.length=0;
    $('si-msgs').textContent='';
    $('si-room').classList.add('hide');
    $('si-share').classList.add('hide');
    $('si-cfg').classList.add('hide');
    $('si-lobby').classList.remove('hide');
    $('si-new').disabled=false;
    st('Sala IA');note('');
    chk();
  }

  $('si-new').onclick=create;
  $('si-join').onclick=join;
  $('si-out').onclick=out;
  $('si-send').onclick=send;
  $('si-code').addEventListener('keydown',e=>{if(e.key==='Enter')join()});
  $('si-in').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send()}});
  $('si-temp').oninput=()=>{$('si-tv').textContent=$('si-temp').value};
  $('si-topk').oninput=()=>{$('si-kv').textContent=$('si-topk').value};

  $('si-dl').onclick=async()=>{
    $('si-dl').disabled=true;
    try{
      const s=await mkSess();
      if(s&&s.destroy)s.destroy();
      $('si-hint').textContent='Modelo listo. Ya podes crear una sala.';
    }catch(e){$('si-hint').textContent='No se pudo bajar el modelo.'}
    $('si-dl').disabled=false;
    st('Sala IA');
    chk();
  };

  $('si-apply').onclick=async()=>{
    cfg.sys=cut($('si-sys').value);
    cfg.temp=+$('si-temp').value;
    cfg.topk=+$('si-topk').value;
    try{localStorage.setItem('si_cfg',JSON.stringify(cfg))}catch(e){}
    $('si-apply').disabled=true;
    try{await resetSess();bcast({t:'sys',m:'La IA arranca de cero'})}
    catch(e){add('sys','','Error IA al reiniciar')}
    $('si-apply').disabled=false;
  };

  chk();

  function teardown(){
    window.removeEventListener('beforeunload',teardown);
    stop();
  }
  const ce=$('content');
  if(ce)ce.addEventListener('contentUnload',teardown,{once:true});
  window.addEventListener('beforeunload',teardown);
})();
</script>

<br>
<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Aplicaciones</a>
</div>
