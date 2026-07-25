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
.pw-note{color:rgba(255,255,255,.38);font-size:.76em;max-width:380px;margin:0 auto 16px;line-height:1.5}
.pw-card{border-radius:14px;padding:14px 16px;margin:8px auto;max-width:420px;text-align:left;border:1px solid rgba(255,255,255,.13);background:rgba(255,255,255,.06)}
.pw-card.g{border-color:rgba(37,211,102,.4);background:rgba(37,211,102,.08)}
.pw-card.r{border-color:rgba(239,68,68,.4);background:rgba(239,68,68,.08)}
.pw-ch{font-weight:700;font-size:1em;margin-bottom:6px;display:flex;align-items:center;gap:8px;color:#fff}
.pw-cd{font-size:.82em;color:rgba(255,255,255,.6);line-height:1.55}
.pw-tk{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:white;padding:10px 22px;border-radius:12px;font-size:.88em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999;white-space:nowrap}
.pw-tk.show{opacity:1;transform:translateX(-50%) translateY(0)}
</style>

<div style="font-size:2.8rem;margin:0 auto 4px;line-height:1.2">🔐</div>
<div class="pw-st" id="pw-st">Pwned Checker</div>

<div class="pw-wrap">
  <div class="pw-bar" id="pw-pb-bar">
    <input type="text" id="pw-pi" placeholder="Contraseña a verificar..." autocomplete="new-password" autocorrect="off" autocapitalize="off" spellcheck="false" name="q-3f7a">
    <button class="pw-ib" id="pw-pb" title="Verificar">🔍</button>
  </div>
  <div class="pw-note">🔒 Solo los primeros 5 chars del hash SHA-1 se envian. La contraseña nunca sale del dispositivo.</div>
  <div id="pw-pr"></div>
</div>

<div class="pw-tk" id="pw-tk"></div>

<script>
(function(){
  const $=id=>document.getElementById(id);
  const st=$('pw-st'),tk=$('pw-tk'),pi=$('pw-pi'),r=$('pw-pr');
  let _btt=null,_deb=null;

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

  async function PW_HP(pass){
    const buf=await crypto.subtle.digest('SHA-1',new TextEncoder().encode(pass));
    const hex=[...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join('').toUpperCase();
    const pre=hex.slice(0,5),suf=hex.slice(5);
    const res=await fetch('https://api.pwnedpasswords.com/range/'+pre,{headers:{'Add-Padding':'true'}});
    const txt=await res.text();
    const found=txt.split('\n').find(l=>l.startsWith(suf));
    return found?parseInt(found.split(':')[1].trim()):0;
  }

  async function PW_CHK(){
    const pass=pi.value;
    if(!pass){r.innerHTML='';PW_ST('Pwned Checker');return;}
    const btn=$('pw-pb');btn.disabled=true;
    PW_ST('Verificando...','act');
    r.innerHTML='';
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
  }

  pi.addEventListener('input',()=>{
    clearTimeout(_deb);
    _deb=setTimeout(PW_CHK,5000);
  });
  pi.addEventListener('keydown',e=>{if(e.key==='Enter'){clearTimeout(_deb);PW_CHK();}});
  $('pw-pb').onclick=()=>{clearTimeout(_deb);PW_CHK();};
})();
</script>

</div>


<div style="text-align:center;">
  <a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver al Inicio</a>
</div>