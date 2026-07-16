<div style="text-align:center;position:relative;padding-top:0;margin-top:0">
<style>
.pw-st{color:rgba(255,255,255,.75);font-size:1.3em;font-weight:600;margin:10px 0 22px;min-height:1.6em;transition:color .2s}
.pw-st.act{color:rgba(56,189,248,.9)}
.pw-st.ok{color:rgba(37,211,102,.9)}
.pw-st.er{color:rgba(239,68,68,.9)}
.pw-wrap{padding:0 12px;max-width:100%}
.pw-bar{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);border-radius:24px;padding:10px 16px;margin-bottom:14px;position:relative;overflow:hidden;transition:border-color .2s,box-shadow .2s;max-width:420px;margin-left:auto;margin-right:auto}
.pw-bar:focus-within{border-color:rgba(56,189,248,.4);box-shadow:0 0 0 3px rgba(56,189,248,.08)}
.pw-bar input{flex:1;background:none;border:none;outline:none;color:white;font-size:.9em;min-width:0;font-family:inherit}
.pw-bar input::placeholder{color:rgba(255,255,255,.4)}
.pw-ib{background:none;border:none;color:white;cursor:pointer;font-size:1.1rem;flex-shrink:0;padding:0 2px;opacity:.7;transition:opacity .2s,transform .2s;line-height:1;font-family:inherit}
.pw-ib:hover{opacity:1;transform:scale(1.1)}
.pw-ib:disabled{opacity:.3;cursor:not-allowed;transform:none}
.pw-tabs{display:flex;gap:8px;justify-content:center;margin-bottom:20px;flex-wrap:wrap}
.pw-tab{padding:9px 20px;border-radius:20px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.07);color:rgba(255,255,255,.6);cursor:pointer;font-size:.85em;font-family:inherit;transition:all .2s}
.pw-tab.on{background:rgba(255,255,255,.2);border-color:rgba(255,255,255,.35);color:#fff;font-weight:600}
.pw-note{color:rgba(255,255,255,.38);font-size:.76em;max-width:380px;margin:0 auto 16px;line-height:1.5}
.pw-card{border-radius:14px;padding:14px 16px;margin:8px auto;max-width:420px;text-align:left;border:1px solid rgba(255,255,255,.13);background:rgba(255,255,255,.06)}
.pw-card.g{border-color:rgba(37,211,102,.4);background:rgba(37,211,102,.08)}
.pw-card.r{border-color:rgba(239,68,68,.4);background:rgba(239,68,68,.08)}
.pw-card.y{border-color:rgba(251,191,36,.35);background:rgba(251,191,36,.06)}
.pw-ch{font-weight:700;font-size:1em;margin-bottom:6px;display:flex;align-items:center;gap:8px;color:#fff}
.pw-cd{font-size:.82em;color:rgba(255,255,255,.6);line-height:1.55}
.pw-tag{display:inline-block;padding:2px 8px;border-radius:8px;font-size:.72em;background:rgba(255,255,255,.1);margin:2px 2px 0 0;color:rgba(255,255,255,.65)}
.pw-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px;max-width:440px;margin:0 auto;padding:0 2px}
.pw-bc{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:9px 11px;cursor:pointer;text-align:left;transition:background .2s}
.pw-bc:hover{background:rgba(255,255,255,.14)}
.pw-bcn{color:#fff;font-size:.82em;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:3px}
.pw-bcc{color:rgba(255,255,255,.42);font-size:.72em}
.pw-modal{display:none;position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.92);overflow-y:auto}
.pw-modal.open{display:flex;flex-direction:column;align-items:center;padding:20px 16px;gap:12px}
.pw-mw{max-width:min(90vw,440px);width:100%;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.18);border-radius:16px;padding:18px 16px;color:#fff}
.pw-mh{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.pw-mh img{width:36px;height:36px;border-radius:8px;object-fit:contain;background:#fff;padding:3px;flex-shrink:0}
.pw-mht{font-size:1.05em;font-weight:700}
.pw-mhd{font-size:.78em;opacity:.55;margin-top:2px}
.pw-mdesc{font-size:.81em;color:rgba(255,255,255,.6);line-height:1.6;margin:10px 0}
.pw-mdesc a{color:rgba(56,189,248,.8)}
.sc-btn{padding:8px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.14);color:white;cursor:pointer;font-size:.9em;transition:background .2s;font-family:inherit}
.sc-btn:hover{background:rgba(255,255,255,.24)}
.pw-tk{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:white;padding:10px 22px;border-radius:12px;font-size:.88em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999;white-space:nowrap}
.pw-tk.show{opacity:1;transform:translateX(-50%) translateY(0)}
</style>

<div style="font-size:2.8rem;margin:0 auto 4px;line-height:1.2">🔐</div>
<div class="pw-st" id="pw-st">Pwned Checker</div>

<div class="pw-wrap">

<div class="pw-tabs">
  <button class="pw-tab on" data-t="p">🔑 Contraseña</button>
  <button class="pw-tab" data-t="e">📧 Email</button>
  <button class="pw-tab" data-t="b">📋 Breaches</button>
</div>

<div id="pw-sp">
  <div class="pw-bar" id="pw-pb-bar">
    <input type="password" id="pw-pi" placeholder="Contraseña a verificar...">
    <button class="pw-ib" id="pw-pb" title="Verificar">🔍</button>
  </div>
  <div class="pw-note">🔒 Solo los primeros 5 chars del hash SHA-1 se envian. La contraseña nunca sale del dispositivo.</div>
  <div id="pw-pr"></div>
</div>

<div id="pw-se" style="display:none">
  <div class="pw-bar">
    <input type="email" id="pw-ei" placeholder="correo@ejemplo.com">
    <button class="pw-ib" id="pw-eb" title="Verificar">🔍</button>
  </div>
  <div id="pw-er"></div>
</div>

<div id="pw-sb" style="display:none">
  <div class="pw-bar">
    <input id="pw-bi" placeholder="Filtrar breaches...">
    <span style="opacity:.35;font-size:.85em" id="pw-bc-c"></span>
  </div>
  <div id="pw-br"></div>
</div>

</div>

<div class="pw-modal" id="pw-dm">
  <div class="pw-mw" id="pw-mc"></div>
  <button class="sc-btn" id="pw-dcl">✕ Cerrar</button>
</div>

<div class="pw-tk" id="pw-tk"></div>

<script>
(function(){
  const $=id=>document.getElementById(id);
  const st=$('pw-st'),tk=$('pw-tk');
  let _br=null,_btt=null;

  function PW_T(msg){
    clearTimeout(_btt);
    tk.textContent=msg;tk.classList.add('show');
    _btt=setTimeout(()=>tk.classList.remove('show'),2800);
  }

  function PW_ST(txt,cls){
    st.textContent=txt;st.className='pw-st'+(cls?' '+cls:'');
  }

  function PW_FN(n){
    return n>=1e9?(n/1e9).toFixed(1)+'B':n>=1e6?(n/1e6).toFixed(1)+'M':n>=1e3?Math.round(n/1e3)+'K':String(n);
  }

  document.querySelectorAll('.pw-tab').forEach(t=>{
    t.onclick=()=>{
      document.querySelectorAll('.pw-tab').forEach(x=>x.classList.remove('on'));
      t.classList.add('on');
      const tab=t.dataset.t;
      $('pw-sp').style.display=tab==='p'?'':'none';
      $('pw-se').style.display=tab==='e'?'':'none';
      $('pw-sb').style.display=tab==='b'?'':'none';
      if(tab==='b'&&!_br)PW_LB();
      PW_ST('Pwned Checker');
    };
  });

  async function PW_HP(pass){
    const buf=await crypto.subtle.digest('SHA-1',new TextEncoder().encode(pass));
    const hex=[...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join('').toUpperCase();
    const pre=hex.slice(0,5),suf=hex.slice(5);
    const res=await fetch('https://api.pwnedpasswords.com/range/'+pre,{headers:{'Add-Padding':'true'}});
    const txt=await res.text();
    const found=txt.split('\n').find(l=>l.startsWith(suf));
    return found?parseInt(found.split(':')[1].trim()):0;
  }

  $('pw-pb').onclick=async()=>{
    const pass=$('pw-pi').value;
    if(!pass)return;
    const btn=$('pw-pb');btn.disabled=true;
    PW_ST('Verificando...','act');
    const r=$('pw-pr');r.innerHTML='';
    try{
      const n=await PW_HP(pass);
      if(n===0){
        r.innerHTML=`<div class="pw-card g"><div class="pw-ch">✅ Sin filtraciones conocidas</div><div class="pw-cd">Esta contraseña no aparece en ninguna base de datos filtrada. No garantiza que sea segura, pero es buena señal.</div></div>`;
        PW_ST('Sin filtraciones','ok');
      } else {
        r.innerHTML=`<div class="pw-card r"><div class="pw-ch">⚠️ Encontrada ${PW_FN(n)} ${n===1?'vez':'veces'}</div><div class="pw-cd">Esta contraseña aparece en filtraciones de datos. Cambiala en todos los servicios donde la uses.</div></div>`;
        PW_ST('Contraseña comprometida','er');
      }
    }catch{
      PW_T('Error al verificar');PW_ST('Pwned Checker');
    }
    btn.disabled=false;
  };

  $('pw-pi').addEventListener('keydown',e=>{if(e.key==='Enter')$('pw-pb').click();});

  async function PW_FE(email){
    const res=await fetch('/api/hibp?email='+encodeURIComponent(email));
    if(!res.ok)throw new Error(res.status);
    return res.json();
  }

  function PW_RE(data){
    const d=data.details||{};
    const rep=data.reputation||'none';
    const cls={'high':'g','medium':'y','low':'r','none':'r'}[rep]||'r';
    const lbl={'high':'Alta ✅','medium':'Media ⚠️','low':'Baja ⛔','none':'Desconocida ❓'}[rep];
    const flags=[
      [d.credentials_leaked_recent,'🔴 Credenciales filtradas recientemente'],
      [d.credentials_leaked,'🟠 Credenciales en filtraciones previas'],
      [d.data_breach,'⚠️ Encontrada en data breaches'],
      [d.malicious_activity,'🚨 Actividad maliciosa detectada'],
      [d.spam,'📩 Asociada a spam'],
      [d.disposable,'🗑️ Email desechable'],
      [!d.deliverable,'📭 Email no entregable'],
    ].filter(([v])=>v).map(([,l])=>l);

    let html=`<div class="pw-card ${cls}"><div class="pw-ch">📧 Reputacion: ${lbl}</div><div class="pw-cd">`;
    html+=flags.length?flags.join('<br>'):(data.suspicious?'⚠️ Marcada como sospechosa':'Sin señales de problemas detectados.');
    if(d.profiles?.length)html+=`<br><br>Perfiles: ${d.profiles.map(p=>`<span class="pw-tag">${p}</span>`).join('')}`;
    if(d.first_seen&&d.first_seen!=='never')html+=`<br><span style="opacity:.55;font-size:.9em">Vista por primera vez: ${d.first_seen}</span>`;
    html+=`</div></div>`;
    return html;
  }

  $('pw-eb').onclick=async()=>{
    const email=$('pw-ei').value.trim();
    if(!email||!email.includes('@'))return;
    const btn=$('pw-eb');btn.disabled=true;
    PW_ST('Verificando...','act');
    const r=$('pw-er');r.innerHTML='';
    try{
      const data=await PW_FE(email);
      r.innerHTML=PW_RE(data);
      PW_ST(data.suspicious?'Email sospechoso':'Verificacion completa',data.suspicious?'er':'ok');
    }catch{
      r.innerHTML=`<div class="pw-card y"><div class="pw-ch">⚠️ Servicio no disponible</div><div class="pw-cd">Perdon, No se pudo consultar 😿</div></div>`;
      PW_ST('Error','er');
    }
    btn.disabled=false;
  };

  $('pw-ei').addEventListener('keydown',e=>{if(e.key==='Enter')$('pw-eb').click();});

  async function PW_LB(){
    const r=$('pw-br');
    r.innerHTML=`<div style="color:rgba(255,255,255,.35);font-size:.85em;margin:24px 0">Cargando...</div>`;
    try{
      const res=await fetch('https://haveibeenpwned.com/api/v3/breaches');
      _br=await res.json();
      $('pw-bc-c').textContent=_br.length;
      PW_RB(_br);
    }catch{
      r.innerHTML=`<div class="pw-card r"><div class="pw-ch">Error cargando breaches</div></div>`;
    }
  }

  function PW_RB(list){
    const r=$('pw-br');
    if(!list?.length){
      r.innerHTML=`<div style="color:rgba(255,255,255,.35);font-size:.85em;margin:24px 0">Sin resultados</div>`;
      return;
    }
    r.innerHTML=`<div class="pw-grid">${
      list.map(b=>`<div class="pw-bc" data-n="${b.Name}">
        <div class="pw-bcn">${b.Title}</div>
        <div class="pw-bcc">${PW_FN(b.PwnCount)} cuentas</div>
        <div class="pw-bcc">${b.BreachDate?.slice(0,4)||''}</div>
      </div>`).join('')
    }</div>`;
    r.querySelectorAll('.pw-bc').forEach(el=>el.onclick=()=>PW_DB(el.dataset.n));
  }

  $('pw-bi').addEventListener('input',function(){
    if(!_br)return;
    const q=this.value.toLowerCase();
    const f=q?_br.filter(b=>b.Title.toLowerCase().includes(q)||b.Domain.toLowerCase().includes(q)):_br;
    $('pw-bc-c').textContent=f.length;
    PW_RB(f);
  });

  function PW_DB(name){
    const b=_br?.find(x=>x.Name===name);if(!b)return;
    $('pw-mc').innerHTML=`
      <div class="pw-mh">
        ${b.LogoPath?`<img src="${b.LogoPath}" alt="" onerror="this.style.display='none'">`:'' }
        <div>
          <div class="pw-mht">${b.Title}</div>
          <div class="pw-mhd">${b.Domain} · ${b.BreachDate}</div>
        </div>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">
        <span class="pw-tag">🔢 ${PW_FN(b.PwnCount)} cuentas</span>
        ${b.IsVerified?'<span class="pw-tag">✅ Verificado</span>':''}
        ${b.IsSensitive?'<span class="pw-tag" style="color:rgba(239,68,68,.85)">🔴 Sensible</span>':''}
        ${b.IsSpamList?'<span class="pw-tag">📩 Spam</span>':''}
        ${b.IsMalware?'<span class="pw-tag" style="color:rgba(239,68,68,.85)">☠️ Malware</span>':''}
      </div>
      <div class="pw-mdesc">${b.Description}</div>
      <div style="margin-top:8px">${(b.DataClasses||[]).map(c=>`<span class="pw-tag">${c}</span>`).join('')}</div>
    `;
    $('pw-dm').classList.add('open');
    document.body.style.overflow='hidden';
  }

  $('pw-dcl').onclick=()=>{$('pw-dm').classList.remove('open');document.body.style.overflow='';};
  $('pw-dm').addEventListener('click',e=>{if(e.target===$('pw-dm'))$('pw-dcl').click();});

  const cont=document.getElementById('content');
  if(cont)cont.addEventListener('contentUnload',()=>{
    $('pw-dm').classList.remove('open');
    document.body.style.overflow='';
  },{once:true});
})();
</script>

</div>
