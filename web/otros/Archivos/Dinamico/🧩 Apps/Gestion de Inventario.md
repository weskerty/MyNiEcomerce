<div style="text-align:center;position:relative;padding-top:0;margin-top:0" id="gi-app">
<style>
.GI0{font-size:2.8rem;line-height:1.2;margin:0 auto 4px}
.GI1{color:rgba(255,255,255,.75);font-size:1.3em;font-weight:600;margin:6px 0 16px}
.GI2{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:var(--r-md);padding:14px;margin:0 0 14px;color:rgba(255,255,255,.7)}
.GI3{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:0 0 12px}
.GI4{flex:1 1 190px;min-width:0;font-size:1.05rem}
.GI5{width:74px;flex:0 0 auto;text-align:center}
.GI6{flex:0 0 auto;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:var(--r-sm);padding:6px 12px;text-align:left;line-height:1.15}
.GI7{font-size:.62rem;color:rgba(255,255,255,.5);letter-spacing:.04em}
.GI8{font-size:1.15rem;font-weight:700}
.GI9{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:12px 0}
.GIa{display:flex;flex-direction:column;gap:5px;margin:0 0 12px;text-align:left}
.GIb{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:var(--r-sm);padding:6px 10px}
.GIc{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600}
.GId{flex:0 0 auto;color:rgba(255,255,255,.55);font-size:.8rem}
.GIe{flex:0 0 auto;display:flex;align-items:center;gap:4px}
.GIe button{padding:2px 9px!important;font-size:.95rem!important;border-radius:9px!important}
.GIf{width:44px;height:44px;border-radius:8px;object-fit:cover;flex:0 0 auto;background:rgba(255,255,255,.07)}
.GIg{display:grid;grid-template-columns:repeat(auto-fill,minmax(255px,1fr));gap:8px;text-align:left}
.GIh{color:rgba(255,255,255,.5);font-size:.9em;margin:14px 0}
.GIi{display:flex;gap:6px;align-items:center}
.GIi input{flex:1 1 auto;min-width:0}
.GIj{width:100%;max-width:190px;border-radius:var(--r-sm);margin:8px auto 0;display:none}
.GIk{width:100%;max-width:320px;margin:8px auto 0;display:none}
#gi-dlg label{display:block;text-align:left;font-size:.72rem;color:rgba(255,255,255,.55);letter-spacing:.03em;margin:10px 0 3px}
#gi-dlg input{width:100%;box-sizing:border-box}
#gi-dlg{max-width:420px;width:calc(100% - 28px)}
.GIl{position:fixed;left:50%;bottom:86px;transform:translateX(-50%);background:rgba(20,20,24,.95);border:1px solid rgba(255,255,255,.15);border-radius:999px;padding:8px 18px;z-index:10000;pointer-events:none;opacity:0;transition:opacity .2s}
.GIl.on{opacity:1}
</style>
<div class="GI0">📦</div>
<div class="GI1">Gestion de Inventario</div>
<div id="gi-nos" class="GI2" style="display:none">Tu navegador no soporta el Sistema de Archivos Privado. La app no puede guardar.</div>
<div class="GI3">
<input class="GI4" id="gi-cb" placeholder="Codigo de barras o nombre" autocomplete="off" spellcheck="false">
<input class="GI5" id="gi-q" type="number" min="1" step="1" value="1" inputmode="numeric" title="Cantidad">
<div class="GI6"><div class="GI7">TOTAL</div><div class="GI8" id="gi-tot">0 Gs</div></div>
</div>
<div class="GIa" id="gi-cart"></div>
<div class="GI9" id="gi-cba" style="display:none"><button id="gi-pay">💳 Cobrar</button><button id="gi-clr">🗑️ Vaciar</button></div>
<div class="GI9"><button id="gi-new">➕ Nuevo articulo</button><button id="gi-exp">⬇️ Exportar</button><button id="gi-imp">⬆️ Importar</button></div>
<input type="file" id="gi-impf" accept="application/json,.json" style="display:none">
<p class="GIh" id="gi-msg"></p>
<div class="GIg" id="gi-list"></div>
<dialog id="gi-dlg">
<h3 id="gi-dt" style="margin:0">Nuevo articulo</h3>
<label for="gi-ecb">Codigo de barras</label>
<div class="GIi"><input id="gi-ecb" autocomplete="off" spellcheck="false"><button id="gi-ecam" title="Escanear con la camara">📷</button></div>
<div class="GIk" id="gi-scan"></div>
<label for="gi-enb">Nombre</label>
<input id="gi-enb" maxlength="80">
<label for="gi-epc">Precio en guaranies</label>
<input id="gi-epc" inputmode="numeric" placeholder="5000">
<label for="gi-ecd">Cantidad (vacio = ilimitado)</label>
<input id="gi-ecd" inputmode="numeric" placeholder="ilimitado">
<label for="gi-eimg">Foto (opcional)</label>
<input type="file" id="gi-eimg" accept="image/*">
<img class="GIj" id="gi-eprev" alt="">
<div class="GI9"><button id="gi-save">💾 Guardar</button><button id="gi-del" style="display:none">🗑️ Borrar</button><button id="gi-cancel">Cancelar</button></div>
</dialog>
<div class="GIl" id="gi-toast"></div>

<script>
(function(){
const A=document.getElementById('gi-app');
if(!A||A.dataset.on)return;
A.dataset.on='1';
const $=i=>document.getElementById(i);
const CB=$('gi-cb'),QQ=$('gi-q'),TOT=$('gi-tot'),CART=$('gi-cart'),CBA=$('gi-cba'),
LST=$('gi-list'),MSG=$('gi-msg'),DLG=$('gi-dlg'),TST=$('gi-toast');
const H5Q='https://cdn.jsdelivr.net/npm/html5-qrcode@2.3.8/html5-qrcode.min.js';
const IMW=256,IMX=50*1024,QL=[.85,.7,.55,.4,.28,.18,.1];
const HAS=typeof navigator.storage?.getDirectory==='function'&&typeof FileSystemFileHandle?.prototype?.createWritable==='function';
let IT=[],VT=[],ED=null,CAM=null,TT=null,AC=null;

function fp(n){return String(Math.round(n||0)).replace(/\B(?=(\d{3})+(?!\d))/g,'.')+' Gs'}
function esc(v){return String(v==null?'':v)}
function toast(m){TST.textContent=m;TST.classList.add('on');clearTimeout(TT);TT=setTimeout(()=>TST.classList.remove('on'),2200)}
function foc(){if(!DLG.open){CB.focus();CB.select()}}
function bip(){
  try{
    AC=AC||new (window.AudioContext||window.webkitAudioContext)();
    if(AC.state==='suspended')AC.resume();
    const o=AC.createOscillator(),g=AC.createGain();
    o.type='square';o.frequency.value=1880;
    g.gain.setValueAtTime(.07,AC.currentTime);
    g.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+.11);
    o.connect(g);g.connect(AC.destination);o.start();o.stop(AC.currentTime+.12);
  }catch(e){}
  if(navigator.vibrate)navigator.vibrate(45);
}

async function dir(){
  const r=await navigator.storage.getDirectory();
  const a=await r.getDirectoryHandle('Apps',{create:true});
  return a.getDirectoryHandle('Inventario',{create:true});
}
async function load(){
  if(!HAS)return;
  try{
    const f=await (await (await dir()).getFileHandle('items.json')).getFile();
    const j=JSON.parse(await f.text());
    if(Array.isArray(j.items))IT=j.items;
  }catch(e){}
}
async function save(){
  if(!HAS)return;
  try{
    const h=await (await dir()).getFileHandle('items.json',{create:true});
    const w=await h.createWritable();
    await w.write(JSON.stringify({v:1,items:IT}));
    await w.close();
  }catch(e){toast('Error al guardar')}
}

function byCb(c){return IT.find(x=>x.cb&&x.cb===c)}
function byId(i){return IT.find(x=>x.id===i)}
function filt(){
  const q=CB.value.trim().toLowerCase();
  if(!q)return IT;
  return IT.filter(x=>(x.nb||'').toLowerCase().includes(q)||(x.cb||'').toLowerCase().includes(q));
}
function inCart(id){const v=VT.find(x=>x.id===id);return v?v.q:0}

function rL(){
  const f=filt();
  LST.innerHTML='';
  MSG.textContent=IT.length?(f.length+' de '+IT.length+' articulos'):'Todavia no hay articulos. Toca Nuevo articulo.';
  f.forEach(x=>{
    const r=document.createElement('div');r.className='GIb';
    if(x.img){const im=document.createElement('img');im.className='GIf';im.src=x.img;im.alt='';r.appendChild(im)}
    const c=document.createElement('div');c.style.cssText='flex:1 1 auto;min-width:0';
    const n=document.createElement('div');n.className='GIc';n.textContent=x.nb;
    const d=document.createElement('div');d.className='GId';
    d.textContent=fp(x.pc)+(x.cd==null?'':'  ·  '+(x.cd-inCart(x.id))+' en stock')+(x.cb?'  ·  '+x.cb:'');
    c.append(n,d);
    const e=document.createElement('div');e.className='GIe';
    const b=document.createElement('button');b.textContent='➕';b.title='Anadir';b.onclick=()=>add(x.id,1);
    const p=document.createElement('button');p.textContent='✏️';p.title='Editar';p.onclick=()=>edit(x);
    e.append(b,p);
    r.append(c,e);LST.appendChild(r);
  });
}
function rC(){
  CART.innerHTML='';
  let t=0;
  VT.forEach(v=>{
    const x=byId(v.id);if(!x)return;
    t+=x.pc*v.q;
    const r=document.createElement('div');r.className='GIb';
    const c=document.createElement('div');c.style.cssText='flex:1 1 auto;min-width:0';
    const n=document.createElement('div');n.className='GIc';n.textContent=x.nb;
    const d=document.createElement('div');d.className='GId';d.textContent=v.q+' x '+fp(x.pc)+' = '+fp(x.pc*v.q);
    c.append(n,d);
    const e=document.createElement('div');e.className='GIe';
    const m=document.createElement('button');m.textContent='−';m.onclick=()=>qty(v.id,-1);
    const p=document.createElement('button');p.textContent='+';p.onclick=()=>qty(v.id,1);
    e.append(m,p);
    r.append(c,e);CART.appendChild(r);
  });
  TOT.textContent=fp(t);
  CBA.style.display=VT.length?'':'none';
}
function rAll(){rC();rL()}

function add(id,q){
  const x=byId(id);if(!x)return;
  const c=Math.max(1,q|0),v=VT.find(y=>y.id===id);
  if(x.cd!=null&&(v?v.q:0)+c>x.cd){toast('Stock insuficiente: '+x.nb);return}
  if(v)v.q+=c;else VT.push({id:id,q:c});
  rAll();bip();
}
function qty(id,d){
  const v=VT.find(y=>y.id===id);if(!v)return;
  const x=byId(id);
  if(d>0&&x&&x.cd!=null&&v.q+d>x.cd){toast('Stock insuficiente: '+x.nb);return}
  v.q+=d;if(v.q<=0)VT=VT.filter(y=>y.id!==id);
  rAll();
}

CB.addEventListener('input',rL);
CB.addEventListener('keydown',e=>{
  if(e.key!=='Enter')return;
  e.preventDefault();
  const v=CB.value.trim();if(!v)return;
  const q=Math.max(1,parseInt(QQ.value,10)||1);
  const x=byCb(v)||(filt().length===1?filt()[0]:null);
  if(x){add(x.id,q);CB.value='';QQ.value=1;rL();foc()}
  else{toast('Codigo no encontrado');foc()}
});
$('gi-clr').onclick=()=>{if(VT.length&&confirm('Vaciar la venta?')){VT=[];rAll();foc()}};
$('gi-pay').onclick=async()=>{
  if(!VT.length)return;
  let t=0;
  VT.forEach(v=>{const x=byId(v.id);if(!x)return;t+=x.pc*v.q;if(x.cd!=null)x.cd=Math.max(0,x.cd-v.q)});
  VT=[];rAll();toast('Venta hecha: '+fp(t));foc();await save();
};

async function shrink(file){
  const b=await createImageBitmap(file);
  const c=document.createElement('canvas');c.width=c.height=IMW;
  c.getContext('2d').drawImage(b,0,0,IMW,IMW);
  b.close();
  let d='';
  for(const q of QL){
    d=c.toDataURL('image/webp',q);
    if(d.length*.75<IMX)return d;
  }
  return d;
}

function edit(x){
  ED=x||null;
  $('gi-dt').textContent=x?'Editar articulo':'Nuevo articulo';
  $('gi-ecb').value=x?esc(x.cb):'';
  $('gi-enb').value=x?esc(x.nb):'';
  $('gi-epc').value=x?String(x.pc):'';
  $('gi-ecd').value=x&&x.cd!=null?String(x.cd):'';
  $('gi-eimg').value='';
  const p=$('gi-eprev');
  if(x&&x.img){p.src=x.img;p.style.display=''}else{p.removeAttribute('src');p.style.display='none'}
  $('gi-del').style.display=x?'':'none';
  killCam();
  DLG.showModal();
}
$('gi-new').onclick=()=>edit(null);
$('gi-cancel').onclick=()=>{killCam();DLG.close();foc()};
DLG.addEventListener('close',()=>{killCam();foc()});
$('gi-epc').oninput=function(){this.value=this.value.replace(/\D/g,'').slice(0,12)};
$('gi-ecd').oninput=function(){this.value=this.value.replace(/\D/g,'').slice(0,7)};
$('gi-eimg').onchange=async function(){
  const f=this.files&&this.files[0];if(!f)return;
  try{
    const d=await shrink(f);
    const p=$('gi-eprev');p.src=d;p.style.display='';
    toast('Foto lista: '+Math.round(d.length*.75/1024)+' KB');
  }catch(e){toast('No se pudo leer la imagen')}
  this.value='';
};
$('gi-save').onclick=async()=>{
  const nb=$('gi-enb').value.trim();
  if(!nb){toast('Falta el nombre');return}
  const cb=$('gi-ecb').value.trim();
  if(cb){const o=byCb(cb);if(o&&o!==ED){toast('Ese codigo ya es de '+o.nb);return}}
  const pc=parseInt($('gi-epc').value,10)||0;
  const cdr=$('gi-ecd').value.trim();
  const cd=cdr===''?null:(parseInt(cdr,10)||0);
  const p=$('gi-eprev');
  const img=p.style.display==='none'?'':(p.getAttribute('src')||'');
  if(ED){Object.assign(ED,{cb:cb,nb:nb,pc:pc,cd:cd,img:img})}
  else IT.push({id:'i'+Date.now().toString(36)+Math.random().toString(36).slice(2,7),cb:cb,nb:nb,pc:pc,cd:cd,img:img});
  DLG.close();rAll();toast('Guardado');await save();
};
$('gi-del').onclick=async()=>{
  if(!ED||!confirm('Borrar '+ED.nb+'?'))return;
  VT=VT.filter(v=>v.id!==ED.id);
  IT=IT.filter(x=>x!==ED);
  DLG.close();rAll();toast('Borrado');await save();
};

function stopCam(c){try{const p=c&&c.stop();if(p&&p.catch)p.catch(()=>{})}catch(e){}}
function killCam(){
  const c=CAM;CAM=null;stopCam(c);
  const s=$('gi-scan');if(s){s.style.display='none';s.innerHTML=''}
}
$('gi-ecam').onclick=async()=>{
  if(CAM){killCam();return}
  const s=$('gi-scan');
  try{
    if(!window.Html5Qrcode)await new Promise((ok,no)=>{
      const e=document.createElement('script');e.src=H5Q;e.onload=ok;e.onerror=no;document.head.appendChild(e)});
    s.style.display='';s.innerHTML='';
    const inst=new Html5Qrcode('gi-scan');CAM=inst;
    await inst.start({facingMode:'environment'},
      {fps:20,qrbox:{width:220,height:120},
       formatsToSupport:[Html5QrcodeSupportedFormats.EAN_13,Html5QrcodeSupportedFormats.EAN_8,
         Html5QrcodeSupportedFormats.UPC_A,Html5QrcodeSupportedFormats.UPC_E,Html5QrcodeSupportedFormats.CODE_128],
       experimentalFeatures:{useBarCodeDetectorIfSupported:true}},
      t=>{if(CAM!==inst)return;$('gi-ecb').value=String(t).trim();bip();killCam()},()=>{});
    if(CAM!==inst)stopCam(inst);
  }catch(e){killCam();toast('Sin camara')}
};

function dl(blob,name){
  const u=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(u),15000);
}
$('gi-exp').onclick=()=>{
  if(!IT.length){toast('No hay nada que exportar');return}
  const d=new Date(),p=n=>String(n).padStart(2,'0');
  dl(new Blob([JSON.stringify({v:1,items:IT})],{type:'application/json'}),
     'inventario-'+d.getFullYear()+p(d.getMonth()+1)+p(d.getDate())+'.json');
};
$('gi-imp').onclick=()=>$('gi-impf').click();
$('gi-impf').onchange=async function(){
  const f=this.files&&this.files[0];this.value='';
  if(!f)return;
  try{
    const j=JSON.parse(await f.text());
    if(!Array.isArray(j.items))throw 0;
    if(IT.length&&!confirm('Reemplazar los '+IT.length+' articulos actuales por los '+j.items.length+' del archivo?'))return;
    IT=j.items.filter(x=>x&&typeof x.nb==='string').map(x=>({
      id:String(x.id||('i'+Math.random().toString(36).slice(2,9))),
      cb:String(x.cb||''),nb:String(x.nb),pc:parseInt(x.pc,10)||0,
      cd:x.cd==null?null:(parseInt(x.cd,10)||0),
      img:typeof x.img==='string'&&x.img.startsWith('data:image/')?x.img:''}));
    VT=[];rAll();toast('Importados '+IT.length+' articulos');await save();
  }catch(e){toast('Archivo invalido')}
};

if(!HAS)$('gi-nos').style.display='';
if(navigator.storage&&navigator.storage.persist)navigator.storage.persist().catch(()=>{});
load().then(()=>{rAll();foc()});

document.addEventListener('contentUnload',function td(){killCam();clearTimeout(TT);if(AC)AC.close().catch(()=>{})},{once:true});
})();
</script>

</div>
