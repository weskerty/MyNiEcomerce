(function(){
if(window.VF1)return;
const W='595972184435',B='cheaganaBot';
const P=(a,o)=>fetch('/api/productos',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...o,action:a})}).then(async r=>({ok:r.ok,d:await r.json().catch(()=>({}))})).catch(()=>({ok:false,d:{}}));
window.VF1=async function(b,toast){
  const{ok,d}=await P('codigo',b);
  if(!ok)return toast(d.error||'Error','err'),null;
  let g=document.getElementById('VF_DG1');
  if(!g){
    g=document.createElement('dialog');g.id='VF_DG1';
    g.style.cssText='width:auto;max-width:min(420px,calc(100vw - 40px));text-align:center';
    g.innerHTML='<h3></h3><p>Envia el mensaje <b>desde ese numero</b>, por una de estas opciones:</p><div class="PG1"><a class="view-all-button" target="_blank" rel="noopener">WhatsApp</a> <a class="view-all-button">SMS</a> <a class="view-all-button" target="_blank" rel="noopener">Telegram</a></div><p class="fg-hint"></p><button type="button">Cancelar</button>';
    document.body.appendChild(g);
  }
  const e=encodeURIComponent(d.tx),a=g.querySelectorAll('a'),s=g.querySelector('p.fg-hint');
  g.querySelector('h3').textContent='📞 '+(b.telefonoNuevo||b.telefono);
  a[0].href=`https://wa.me/${W}?text=${e}`;
  a[1].href=`sms:+${W}?&body=${e}`;
  a[2].href=`https://t.me/${B}?start=${d.codigo}`;
  s.textContent='Esperando confirmacion...';
  g.showModal();
  return new Promise(res=>{
    let f=0,t;
    const end=(v,m)=>{if(f)return;f=1;clearInterval(t);g.close();if(m)toast(m,'err');res(v);};
    g.querySelector('button').onclick=()=>end(null);
    g.oncancel=()=>end(null);
    t=setInterval(async()=>{
      const{d:r}=await P('estado',{sid:d.sid});
      if(r.st==='ok')end(r);
      else if(r.error)end(null,r.error);
      else if(r.st==='sin')s.textContent='WhatsApp no mostro tu numero. Usa SMS';
    },3000);
  });
};
})();
