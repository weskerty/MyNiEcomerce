(function(){
if(window.AG1)return;
const AU='/api/productos',W='595972184435',TG='cheaganaBot',MX=204800,PZ=10;
const TY={'':['📦','Producto'],Propuestas:['💡','Propuesta'],'Ejemplos de Corrupcion':['⚖️','Caso de Corrupcion'],Blogs:['📰','Blog'],evento:['🥳','Evento'],minecraft:['⛏️','Servidor Minecraft'],jugadores:['🎮','Encuentra Jugadores']};
const CR=[{k:'css',l:'web/js/lib/Cropper/cropper.min.css',c:'https://cdn.jsdelivr.net/npm/cropperjs@1/dist/cropper.min.css'},{k:'js',l:'web/js/lib/Cropper/cropper.min.js',c:'https://cdn.jsdelivr.net/npm/cropperjs@1/dist/cropper.min.js',ok:()=>window.Cropper}];
const GF={k:'js',l:'web/js/lib/GridFit.js',ok:()=>window.GridFit};
const TSL={k:'js',l:'web/js/lib/Turnstile.js',ok:()=>window.TS1};
const st=document.createElement('style');
st.textContent=`.AG1:not([hidden]){display:grid;gap:16px}.AG1 [hidden]{display:none!important}.AG1>[data-v]:not(.GL_P1){display:grid;gap:16px;align-content:start}
.AG1 h2{margin:0 0 14px;font-size:1.2rem}.AG1 .GL_P1>:last-child{margin-bottom:0}
.AG_K{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px}.AG_K+.AG_H{margin:-6px 0 18px}.AG_CU{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}.AG_CU p{margin:0}[data-v=cta] form{margin-top:22px;padding-top:20px;border-top:1px solid var(--RD_L)}.AG_L>input{width:100%;margin-bottom:12px}.AG_TB{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.AG_TB .PL1{flex-direction:column;justify-content:center;gap:2px;height:auto;padding:8px 4px;font-size:.75rem}.AG_TB b{font-size:1.3rem;font-weight:400;line-height:1}
.AG_F{display:grid;gap:4px;margin:0 0 14px}.AG_F>span{font-size:.85rem;color:var(--RD_MF)}.AG_F :is(input,select,textarea){width:100%;min-width:0}.AG_R2>*{min-width:0}.AG_H+.AG_GO{margin-top:12px}
.AG_R2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 12px}@media(max-width:480px){.AG_W{grid-column:1/-1}}
.AG_H{display:block;margin:4px 0 0;font-size:.82rem;color:var(--RD_MF)}.AG_H.ok{color:var(--ok)}.AG_H.err{color:var(--err)}.AG_C{text-align:center}
.AG_GO{display:block;width:100%;margin:0;padding:14px;font-size:1rem}
.AG_IR{display:flex;gap:14px;align-items:flex-start;margin-bottom:14px}.AG_IR>div{flex:1;min-width:0}.AG_IR .AG_F:last-child{margin-bottom:0}
.AG_IM{position:relative;display:grid;place-items:center;flex-shrink:0;width:var(--w,96px);aspect-ratio:var(--ar,1);border:1.5px dashed var(--RD_BHB);border-radius:12px;background:var(--RD_BT);cursor:pointer;overflow:hidden}
.AG_IM:hover,.AG_IM.on{background:var(--RD_BH);border-color:var(--RD_BSB)}.AG_IM:focus-within{outline:2px solid var(--RD_F);outline-offset:2px}
.AG_IM input{position:absolute;width:1px;height:1px;opacity:0}.AG_IM b{font-size:1.6rem;font-weight:400}
.AG_IM img{position:absolute;inset:0;width:100%;height:100%;object-fit:var(--of,cover)}.AG_IM img:not([src]),.AG_IM small:empty{display:none}
.AG_IM small{position:absolute;bottom:4px;left:50%;transform:translateX(-50%);padding:0 6px;border-radius:6px;font-size:.7rem;background:var(--RD_DG);color:var(--RD_F);white-space:nowrap}
.AG_L{--LR_I:84px}.AG_L .BMD1::before{content:none}.AG_L .BMD1-CN{padding:10px 12px 10px var(--LR_P)}.AG_L .BMD1:last-child{margin:0}
.AG_LI{display:grid;place-items:center;width:var(--LR_I);min-height:var(--LR_I);flex-shrink:0;align-self:stretch;background:var(--RD_M);font-size:2rem}.AG_LI img{width:100%;height:100%;object-fit:cover}
.AG_AC{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}.AG_AC button{padding:4px 10px;font-size:.8rem}
.AG_B{display:inline-block;margin-left:6px;padding:0 7px;border:1px solid;border-radius:6px;font:600 .7rem/1.6 var(--font);vertical-align:middle;color:var(--warn)}.AG_B.r{color:var(--err)}
.BMD1-CN .AG_NG{margin-top:6px;padding:6px 10px;border-radius:8px;color:var(--err);background:color-mix(in srgb,var(--err) 12%,transparent)}
.AG_TS{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;max-width:88vw;padding:10px 22px;border:1px solid var(--ok);border-radius:12px;background:var(--RD_DG);color:var(--ok);box-shadow:var(--GL_E);backdrop-filter:var(--RD_GF);pointer-events:none;text-align:center}
.AG_DG{width:auto;max-width:min(420px,calc(100vw - 40px));text-align:center}.AG_DG p.err{color:var(--err)}.AG_DG p.warn{color:var(--warn)}
.AG_DG div{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:16px}.AG_DG .view-all-button{margin:0}
#AG_CR{width:fit-content;padding:12px}.AG_CR{max-width:min(90vw,420px);max-height:60vh;overflow:hidden}.AG_CR img{display:block;max-width:100%;max-height:60vh}
@keyframes AG_SH{20%,60%{translate:-6px}40%,80%{translate:6px}}.AG_SH{animation:AG_SH .4s 3;border-color:var(--err)!important}
body.low-perf .AG_SH{animation:none}@media(prefers-reduced-motion:reduce){.AG_SH{animation:none}}`;
document.head.append(st);
let S={},U={},P={},TS;
const E=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};
const Q=s=>S.r.querySelector(s);
const NZ=s=>String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
const CK=k=>{const m=document.cookie.match(new RegExp('(?:^|; )'+k+'=([^;]*)'));return m?decodeURIComponent(m[1]):null};
const SK=(k,v)=>document.cookie=`${k}=${encodeURIComponent(v)};path=/;max-age=7776000;SameSite=Strict${location.protocol==='https:'?';Secure':''}`;
const LP={};
function LL(o){
  if(o.ok?.())return Promise.resolve();
  const css=o.k==='css';
  if(css&&document.querySelector(`link[data-ag="${o.l}"]`))return Promise.resolve();
  return LP[o.l]||(LP[o.l]=new Promise(res=>{
    const ld=(u,f)=>{const e=E(css?'link':'script');if(css){e.rel='stylesheet';e.dataset.ag=o.l;e.href=u}else e.src=u;e.onload=res;e.onerror=f;document.head.append(e)};
    ld(o.l,()=>o.c?ld(o.c,res):res());
  }).finally(()=>delete LP[o.l]));
}
function T(t,tp='ok',d=3000){
  if(tp!=='ok'){
    if(!S.r?.isConnected)return;
    let g=Q('#AG_DG');
    if(!g){g=E('dialog','AG_DG');g.id='AG_DG';g.innerHTML='<form method="dialog"><p></p><div><button>Aceptar</button><button type="button">Ayuda</button></div></form>';S.r.append(g)}
    const p=g.querySelector('p');p.textContent=t;p.className=tp;
    g.querySelector('[type=button]').onclick=()=>open('https://wa.me/'+W+'?text='+encodeURIComponent('Ayuda: '+t),'_blank','noopener');
    if(!g.open)g.showModal();
    return;
  }
  TS?.remove();const m=TS=E('div','AG_TS',t);document.body.append(m);setTimeout(()=>m.remove(),d);
}
async function A(a,b={}){
  let r,d={};
  const h={'Content-Type':'application/json'};
  if(/^(codigo|login|enviar)$/.test(a)){try{await LL(TSL);h['x-ts']=await window.TS1()}catch{return{ok:false,d:{error:'Error verificacion, recarga la pagina'}}}}
  try{r=await fetch(AU,{method:'POST',headers:h,body:JSON.stringify({token:U.tk||undefined,...b,action:a})});d=await r.json().catch(()=>({}))}
  catch{return{ok:false,d:{error:'Sin conexion'}}}
  if(r.status===401&&!/^(login|codigo|cambiarPass)$/.test(a))OUT();
  if(r.ok&&d.alias&&d.alias!==U.al)SK('ap_al',U.al=d.alias);
  return{ok:r.ok,d};
}
function OUT(){['ap_tel','ap_tk','ap_al'].forEach(k=>document.cookie=k+'=;path=/;max-age=0');U={};if(S.r?.isConnected)V()}
function IN(tel,d){U={tel,tk:d.token,al:d.alias||U.al};SK('ap_tel',tel);SK('ap_tk',U.tk);if(U.al)SK('ap_al',U.al);T('Bienvenido');V('nuevo')}
async function VF(b){
  let g=Q('#AG_VF');
  if(!g){g=E('dialog','AG_DG');g.id='AG_VF';g.innerHTML='<h3></h3><p>Envia el mensaje <b>desde ese numero</b>, por una de estas opciones:</p><div><img class="wait-anim" alt=""><a class="view-all-button" target="_blank" rel="noopener">WhatsApp</a><a class="view-all-button">SMS</a><a class="view-all-button" target="_blank" rel="noopener">Telegram</a></div><p class="AG_H"></p><div><button type="button">Cancelar</button></div>';g.querySelector('img').src=window.__CFG?.waitAnim||'';S.r.append(g)}
  const a=g.querySelectorAll('a'),i=g.querySelector('img'),s=g.querySelector('p.AG_H');
  g.querySelector('h3').textContent='📞 '+(b.telefonoNuevo||b.telefono);
  a.forEach(x=>x.hidden=1);i.hidden=0;s.textContent='';g.showModal();
  return new Promise(async res=>{
    let f=0,t;
    const end=(v,m)=>{if(f)return;f=1;clearInterval(t);g.close();if(m)T(m,'err');res(v)};
    g.querySelector('button').onclick=()=>end(null);g.oncancel=()=>end(null);
    const{ok,d}=await A('codigo',b);
    if(f)return;
    if(!ok)return end(null,d.error||'Error');
    const e=encodeURIComponent(d.tx);
    i.hidden=1;a[0].hidden=!d.wa;a[1].hidden=b.tipo!=='alta';a[2].hidden=0;
    a[0].href=`https://wa.me/${d.wa}?text=${e}`;a[1].href=`sms:+${W}?&body=${e}`;a[2].href=`https://t.me/${TG}?start=${encodeURIComponent(d.codigo)}`;
    s.textContent='Esperando confirmacion...';
    t=setInterval(async()=>{
      if(!g.isConnected)return end(null);
      const{d:r}=await A('estado',{sid:d.sid});
      if(r.st==='ok')end(r);else if(r.error)end(null,r.error);else if(r.st==='sin')s.textContent='WhatsApp no mostro tu numero. Usa '+(b.tipo==='alta'?'SMS':'Telegram');
    },3000);
  });
}
async function IM(f,o){
  const hd=String.fromCharCode(...new Uint8Array(await f.slice(0,12).arrayBuffer())),an=/^RIFF[\s\S]{4}WEBP/.test(hd)?'.webp':/^[\s\S]{4}ftypavi[fs]/.test(hd)?'.avif':'';
  if(an&&f.size<=MX)return{b:f,x:an};
  if(an&&!confirm(`Supera ${MX/1024}KB, se comprimira y perdera la animacion. Continuar?`))return{e:'Cancelado'};
  const u=URL.createObjectURL(f),im=new Image();
  try{await new Promise((ok,ko)=>{im.onload=ok;im.onerror=ko;im.src=u})}catch{URL.revokeObjectURL(u);return{e:'Imagen no compatible'}}
  const s=o.crop&&await CROP(u,o.ar)||{x:0,y:0,width:im.width,height:im.height};
  URL.revokeObjectURL(u);
  const cv=E('canvas'),dw=(w,h)=>{cv.width=w;cv.height=h;cv.getContext('2d').drawImage(im,s.x,s.y,s.width,s.height,0,0,w,h)},tb=q=>new Promise(r=>cv.toBlob(r,'image/webp',q));
  if(o.fit){
    for(const m of[1280,1024,800,640,480]){
      const k=Math.min(1,m/Math.max(s.width,s.height));dw(Math.round(s.width*k),Math.round(s.height*k));
      for(const q of[.8,.6,.4]){const b=await tb(q);if(b&&b.size<=MX)return{b,x:'.webp'}}
    }
    return{e:'Imagen muy pesada'};
  }
  dw(256,256);
  for(let q=.85;q>0;q-=.1){const b=await tb(q);if(b&&b.size<=MX)return{b,x:'.webp'}}
  return{e:'Imagen muy pesada'};
}
async function CROP(u,ar){
  await Promise.all(CR.map(LL));
  if(!window.Cropper)return null;
  let g=Q('#AG_CR');
  if(!g){g=E('dialog','AG_DG');g.id='AG_CR';g.innerHTML='<div class="AG_CR"><img alt=""></div><div><button type="button">Recortar</button><button type="button">Saltar</button></div>';S.r.append(g)}
  const ci=g.querySelector('img'),[b1,b2]=g.querySelectorAll('button');
  g.showModal();await new Promise(r=>{ci.onload=r;ci.src=u});
  const cp=new Cropper(ci,{viewMode:1,dragMode:'move',background:false,autoCropArea:.9,aspectRatio:ar});
  const ok=await new Promise(r=>{b1.onclick=()=>r(1);b2.onclick=()=>r(0);g.oncancel=()=>r(0)});
  const d=ok?cp.getData(true):null;cp.destroy();g.close();ci.removeAttribute('src');
  return d;
}
function IZ(L,of){
  L.innerHTML='<input type="file" accept="image/avif,image/webp,image/*" aria-label="Imagen"><img alt=""><b>📷</b><small></small>';L.title='Toca, arrastra o pega una imagen';
  const i=L.querySelector('input'),pv=L.querySelector('img'),sm=L.querySelector('small');
  const z={v:null,f:null,L,
    async set(f){z.f=f;const r=await IM(f,of());if(r.e)return T(r.e,'err');z.v=r;if(pv.src)URL.revokeObjectURL(pv.src);pv.src=URL.createObjectURL(r.b);sm.textContent=Math.round(r.b.size/1024)+' KB'},
    re(){if(z.f)z.set(z.f)},
    clr(){z.v=z.f=null;pv.removeAttribute('src');sm.textContent=''}};
  i.onchange=()=>{if(i.files[0])z.set(i.files[0]);i.value=''};
  L.ondragover=e=>{e.preventDefault();L.classList.add('on')};
  L.ondragleave=()=>L.classList.remove('on');
  L.ondrop=e=>{e.preventDefault();L.classList.remove('on');const f=[...e.dataTransfer.files].find(f=>f.type.startsWith('image/'));if(f)z.set(f)};
  return S.z=z;
}
document.addEventListener('paste',e=>{
  const a=document.activeElement;
  if(!S.z||!S.r?.isConnected||S.v!=='nuevo'||!U.tk||a?.matches('input,textarea,[contenteditable]'))return;
  const f=[...(e.clipboardData?.items||[])].find(i=>i.type.startsWith('image/'))?.getAsFile();
  if(f){e.preventDefault();S.z.set(f)}
});
function F(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.classList.remove('AG_SH');void el.offsetWidth;el.classList.add('AG_SH');setTimeout(()=>el.classList.remove('AG_SH'),1300)}
const J=u=>fetch(u).then(r=>r.ok?r.json():{}).then(d=>d.galleries||d).catch(()=>({}));
function EX(n,c,s,o){
  if(Array.isArray(n))return n.forEach(fn=>{
    if(typeof fn!=='string')return;
    const f=fn.slice(fn.lastIndexOf('/')+1),g=k=>f.match(new RegExp('(?:^|-)'+k+'=([^-]+)'))?.[1],ID=g('ID');
    if(ID)o.push({fn,ID,NM:g('NM'),PC:+g('PC')||0,CD:g('CD'),CM:g('CM')||'',CH:g('CH')||'',CT:g('CT')||null,TM:g('TM')||null,NB:f.match(/(?:^|-)NB=(.+)\.\w+$/)?.[1]||ID,categoria:c,sub:s});
  });
  if(n&&typeof n==='object')Object.entries(n).forEach(([k,v])=>EX(v,c,s||k,o));
}
async function DEL(ID,nb){
  if(!confirm(`Pedir el borrado de "${nb}"? Un admin lo confirma.`))return;
  const{ok,d}=await A('solicitarBorrado',{ID});
  T(ok?'Borrado solicitado':d.error||'Error',ok?'ok':'err');
}
async function SEND(g,b,rs){
  const t=g.textContent;g.disabled=true;g.textContent='Enviando...';
  const{ok,d}=await A('enviar',b);
  g.disabled=false;g.textContent=t;
  if(!ok)return T(d.error||'Error al enviar','err');
  T('Solicitud enviada!');rs();S.e=null;V('sol');window.__HS2?.('AG',{v:'sol'});
}
const B64=b=>new Promise(r=>{const f=new FileReader();f.onload=()=>r(f.result.split(',')[1]);f.readAsDataURL(b)});
function K(el,ks,cur,on){
  el.replaceChildren(...ks.map(k=>{
    const b=E('button','PL1',TY[k].join(' '));b.type='button';b.setAttribute('aria-pressed',k===cur);
    b.onclick=()=>{el.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));on(k)};
    return b;
  }));
}
function RW(x){
  const W=u=>/^web\//.test(u||'')?u:null;x={...x,href:W(x.href),img:W(x.img)};
  const r=E('div','BMD1'),c=E('div','BMD1-CN'),h=E('h3'),t=E(x.href?'a':'span',0,x.nb),im=E(x.href?'a':'span','AG_LI',x.img?null:x.ic||TY[x.tp]?.[0]||'📦');
  if(x.href){t.href=im.href=x.href;im.tabIndex=-1;im.setAttribute('aria-hidden','true')}
  if(x.img){const i=E('img');i.src=x.img;i.alt='';i.loading='lazy';i.decoding='async';im.append(i)}
  h.append(t);if(x.b)h.append(x.b);c.append(h,E('p',0,x.meta));
  if(x.ng)c.append(E('p','AG_NG',x.ng));
  if(x.acts?.length){const ac=E('div','AG_AC');for(const[k,f]of x.acts){const b=E('button',0,k);b.type='button';b.onclick=f;ac.append(b)}c.append(ac)}
  r.append(im,c);
  return r;
}
async function PUB(){
  const c=Q('[data-v=pub]'),L=c.querySelector('[data-l]');
  L.replaceChildren(E('p','AG_H AG_C','Cargando...'));
  S.ok.pub=1;P={all:await S.c.pub(),q:'',t:'*',pg:0};
  const qi=c.querySelector('input');qi.value='';qi.hidden=P.all.length<=8;
  PF();PR();
}
function PF(){
  const f=Q('[data-v=pub] .AG_K'),n={};
  P.all.forEach(x=>n[x.tp]=(n[x.tp]||0)+1);
  const ks=Object.keys(n);f.hidden=ks.length<2;
  f.replaceChildren(...ks.map(k=>{
    const b=E('button','PL1',`${TY[k]?.join(' ')||k} (${n[k]})`);b.type='button';b.setAttribute('aria-pressed',k===P.t);
    b.onclick=()=>{P.t=P.t===k?'*':k;P.pg=0;PF();PR()};
    return b;
  }));
}
function PR(){
  const c=Q('[data-v=pub]'),q=NZ(P.q),pg=c.querySelector('[data-pg]');
  const l=P.all.filter(x=>(P.t==='*'||x.tp===P.t)&&(!q||NZ(x.nb+' '+x.ID).includes(q))),n=Math.ceil(l.length/PZ)||1;
  P.pg=Math.min(P.pg,n-1);
  c.querySelector('[data-l]').replaceChildren(...(l.length?l.slice(P.pg*PZ,P.pg*PZ+PZ).map(RW):[E('p','AG_H AG_C',P.all.length?'Sin resultados':S.c.pe||'Sin publicaciones aun')]));
  if(n<2)return pg.replaceChildren();
  LL(GF).then(()=>window.GridFit?.PN1(pg,P.pg,n,i=>{P.pg=i;PR();c.scrollIntoView({block:'start'})}));
}
const NM=e=>(/^(minecraft|jugadores)$/.test(e.categoria)?String(e.NB).split(';')[0]:e.NB)||e.ID;
function TL(c,s){const t=TY[c==='DemoDire'?s:c];return t?[t[0],t[1]+(c==='Blogs'&&s?' · '+s:'')]:['📦',c+(s?' / '+s:'')]}
async function SOL(){
  const c=Q('[data-v=sol]');S.ok.sol=1;
  c.replaceChildren(E('p','AG_H AG_C','Cargando...'));
  const{ok,d}=await A('historial');
  if(!ok)return c.replaceChildren(E('p','AG_H err AG_C',d.error||'Error'));
  const l=(d.entries||[]).map(e=>{
    const[ic,n]=TL(e.categoria,e.sub),rj=e.estado==='rechazado';
    return RW({nb:NM(e),ic,meta:n,b:E('span','AG_B'+(rj?' r':''),rj?'Rechazado':'Pendiente'),ng:rj&&e.motivo,acts:rj&&S.c.own(e.categoria)?[['✏️ Editar y Reenviar',()=>ED(e.ID,1)]]:[]});
  });
  c.replaceChildren(...(d.telPend?[E('p','AG_H ok AG_C','Cambio de numero pendiente: '+d.telPend)]:[]),...(l.length?l:[E('p','AG_H AG_C','Sin solicitudes pendientes')]),E('p','AG_H AG_C','Lo aprobado sale de esta lista. Maximo 5 pendientes.'));
}
async function ED(ID,j,pop){
  if(!pop)window.__HS3?.('AG',{v:'nuevo',e:ID,j});
  if(pop&&S.e===ID)return V('nuevo',1);
  S.e=ID;V('nuevo',pop);
  if(!j)return S.c.edit?.(ID);
  const{ok,d}=await A('pendienteDetalle',{ID});
  if(!ok)return T(d.error||'Error','err');
  S.c.fix(d);
}
const R=(h,pop)=>h?.e?ED(h.e,h.j,pop):V(h?.v||'nuevo',pop);
document.addEventListener('contentState',e=>{if(S.r?.isConnected&&U.tk)R(e.detail.AG,1)});
function V(v,pop){
  const inn=!!U.tk;
  if(inn&&v)S.v=v;
  Q('.AG_TB').hidden=!inn;
  S.r.querySelectorAll('[data-v]').forEach(e=>e.hidden=inn?e.dataset.v!==S.v:e.dataset.v!=='in');
  S.r.querySelectorAll('.AG_TB button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.t===S.v));
  if(!inn)return;
  if(v&&!pop&&S.r.getBoundingClientRect().top<0)S.r.scrollIntoView();
  if(S.v==='pub'&&!(pop&&S.ok.pub))PUB();
  if(S.v==='sol'&&!(pop&&S.ok.sol))SOL();
  if(S.v==='cta')Q('[data-tel]').textContent='📞 '+U.tel;
  S.c.vw?.(S.v);
}
const PW='<label class="AG_F"><span>{L}</span><input name="{N}" type="password" placeholder="••••••" autocomplete="{A}" required{M}></label>';
const pw=(L,N,A,m)=>PW.replace('{L}',L).replace('{N}',N).replace('{A}',A).replace('{M}',m?' minlength="10"':'');
const TEL='<label class="AG_F"><span>{L}</span><input name="t" type="tel" inputmode="numeric" placeholder="595981123456" autocomplete="{A}" required><small class="AG_H">Con codigo de pais, sin + ni 0: 595 y tu numero</small></label>';
function UI(){
  const r=S.r,tb=E('div','AG_TB');
  [['nuevo','➕','Nueva'],['pub','📦','Publicados'],['sol','⏳','Solicitudes'],['cta','👤','Cuenta']].forEach(([k,i,n])=>{const b=E('button','PL1');b.type='button';b.dataset.t=k;b.append(E('b',0,i),n);b.onclick=()=>{V(k);window.__HS2?.('AG',{v:k})};tb.append(b)});
  r.prepend(tb);
  r.insertAdjacentHTML('beforeend',`<form data-v="in" class="GL_P1"><div class="AG_K"><button type="button" class="PL1" data-m="in">Iniciar Sesion</button><button type="button" class="PL1" data-m="reg">Crear Cuenta</button></div><h2></h2>${TEL.replace('{L}','Numero de telefono').replace('{A}','username')}${pw('Contrasena','p','current-password')}${pw('Confirmar contrasena','p2','new-password',1)}<button class="view-all-button AG_GO"></button><p class="AG_H AG_C"><a href="#" data-m="rst">Olvide mi contrasena</a></p><p class="AG_H AG_C">Una sola cuenta para vender y publicar eventos</p></form>
<div data-v="pub" class="GL_P1 AG_L"><input type="search" placeholder="Buscar por nombre o ID" autocomplete="off"><div class="AG_K"></div><div data-l></div><div data-pg></div></div>
<div data-v="sol" class="GL_P1 AG_L"></div>
<div data-v="cta" class="GL_P1"><div class="AG_CU"><p data-tel></p><button type="button" data-out>Cerrar Sesion</button></div><form data-f="pw"><h2>Cambiar contrasena</h2>${pw('Contrasena actual','p','current-password')}${pw('Nueva contrasena','n','new-password',1)}${pw('Confirmar nueva','n2','new-password',1)}<button class="view-all-button AG_GO">Guardar contrasena</button></form><form data-f="tel"><h2>Cambiar numero</h2>${TEL.replace('{L}','Numero nuevo').replace('{A}','off')}${pw('Contrasena actual','p','current-password')}<p class="AG_H">Confirmas enviando un mensaje desde el numero nuevo</p><button class="view-all-button AG_GO">Solicitar cambio</button></form></div>`);
  const fi=Q('[data-v=in]'),fs=fi.elements,tf=fs.t.nextElementSibling;
  const MO=m=>{
    fi.dataset.m=m;const rg=m!=='in';
    fi.querySelectorAll('[data-m=in],[data-m=reg]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.m===m));
    fi.querySelector('h2').textContent=m==='in'?'Acceso':m==='reg'?'Nuevo usuario':'Recuperar cuenta';
    fi.querySelector('.AG_GO').textContent=m==='in'?'Entrar':m==='reg'?'Crear cuenta':'Cambiar contrasena';
    fs.p.autocomplete=rg?'new-password':'current-password';fs.p.minLength=rg?10:0;
    fs.p2.disabled=!rg;fs.p2.parentNode.hidden=!rg;tf.hidden=m!=='reg';
    fi.querySelector('a[data-m]').parentNode.hidden=m!=='in';
  };
  fi.querySelectorAll('[data-m]').forEach(b=>b.onclick=e=>{e.preventDefault();MO(b.dataset.m)});
  MO('in');
  fi.onsubmit=async e=>{
    e.preventDefault();
    const m=fi.dataset.m,tel=fs.t.value.replace(/\D/g,''),p=fs.p.value;
    if(m==='in'){const{ok,d}=await A('login',{telefono:tel,password:p});if(!ok)return T(d.error||'Error','err');fi.reset();return IN(tel,d)}
    if(p!==fs.p2.value)return T('Las contrasenas no coinciden','warn');
    const r=await VF({tipo:m==='reg'?'alta':'clave',telefono:tel,password:p});
    if(r){fi.reset();IN(tel,r)}
  };
  const fp=Q('[data-f=pw]'),ft=Q('[data-f=tel]');
  fp.onsubmit=async e=>{
    e.preventDefault();const f=fp.elements;
    if(f.n.value!==f.n2.value)return T('Las contrasenas nuevas no coinciden','warn');
    const{ok,d}=await A('cambiarPass',{password:f.p.value,passwordNuevo:f.n.value});
    if(!ok)return T(d.error||'Error','err');
    SK('ap_tk',U.tk=d.token);fp.reset();T('Contrasena actualizada');
  };
  ft.onsubmit=async e=>{
    e.preventDefault();const f=ft.elements;
    if(await VF({tipo:'numero',token:U.tk,password:f.p.value,telefonoNuevo:f.t.value.replace(/\D/g,'')})){ft.reset();T('Cambio solicitado')}
  };
  Q('[data-out]').onclick=async()=>{await A('logout');OUT()};
  Q('[data-v=pub] input').oninput=e=>{P.q=e.target.value;P.pg=0;PR()};
}
function AG1(c){
  const r=document.getElementById('ag');
  if(!r)return;
  S={r,c,v:'nuevo',z:null,ok:{},e:null};const h=window.__HS1?.AG;U={tel:CK('ap_tel'),tk:CK('ap_tk'),al:CK('ap_al')};
  UI();c.ini?.();
  const go=()=>{r.hidden=false;U.tk?R(h,1):V()};
  if(U.tk)A('historial').then(go);else go();
}
Object.assign(AG1,{TY,E,T,A,F,K,LL,IZ,B64,V,ED,J,EX,DEL,SEND,U:()=>U});
window.AG1=AG1;
if(window.AG_Q){const q=window.AG_Q;window.AG_Q=null;AG1(q)}
})();
