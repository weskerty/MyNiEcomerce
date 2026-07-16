<div style="position:relative;padding-top:0;margin-top:0">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}
.D{font-family:'Syne',sans-serif;max-width:640px;margin:0 auto;padding:14px 12px}
.D *{font-family:inherit}
.D-screen{display:none}
.D-screen.D-on{display:block}
.D-home{padding:8px 0 16px}
.D-home-head{display:flex;align-items:center;gap:12px;padding:6px 4px 24px}
.D-home-icon{font-size:2rem;line-height:1}
.D-home-ttl{color:white;font-size:1.4em;font-weight:800;letter-spacing:-.01em}
.D-home-sub{color:rgba(255,255,255,.35);font-size:.75em;font-weight:400;margin-top:1px}
.D-card{display:flex;align-items:center;gap:16px;width:100%;padding:18px 20px;border-radius:18px;background:rgba(0,0,0,.36);border:1px solid rgba(255,255,255,.16);color:white;cursor:pointer;font-family:inherit;text-align:left;transition:background .18s,transform .14s,border-color .18s;margin-bottom:10px;box-shadow:0 2px 16px rgba(0,0,0,.28)}
.D-card:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.3);transform:translateY(-2px)}
.D-card-ic{font-size:2rem;flex-shrink:0;line-height:1}
.D-card-lbl{font-size:1em;font-weight:700;color:white}
.D-card-desc{font-size:.75em;color:rgba(255,255,255,.38);margin-top:2px;font-weight:400}
.D-card-arr{margin-left:auto;color:rgba(255,255,255,.25);font-size:1.1rem}
.D-topbar{display:flex;align-items:center;gap:8px;padding:0 0 14px}
.D-back{background:rgba(0,0,0,.32);border:1px solid rgba(255,255,255,.14);color:white;cursor:pointer;padding:7px 13px 7px 10px;border-radius:10px;font-size:.82em;font-family:inherit;font-weight:600;display:flex;align-items:center;gap:5px;flex-shrink:0;transition:background .15s}
.D-back:hover{background:rgba(255,255,255,.1)}
.D-scr-ttl{color:rgba(255,255,255,.55);font-size:.8em;font-weight:600;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.D-doc-name{flex:1;font-size:1.05em;font-weight:700;color:white;background:none;border:none;outline:none;min-width:0;font-family:inherit}
.D-doc-name::placeholder{color:rgba(255,255,255,.22);font-weight:400}
.D-toolbar{display:flex;align-items:center;gap:7px;padding:0 0 14px;flex-wrap:wrap}
.D-tbtn{display:flex;align-items:center;gap:5px;padding:8px 14px;border-radius:10px;background:rgba(0,0,0,.32);border:1px solid rgba(255,255,255,.14);color:white;cursor:pointer;font-size:.8em;font-weight:600;font-family:inherit;transition:background .15s,border-color .15s;white-space:nowrap;flex-shrink:0}
.D-tbtn:hover:not(:disabled){background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.28)}
.D-tbtn:disabled{opacity:.3;cursor:default}
.D-tbtn-ic{font-size:1.05em;line-height:1}
.D-tbtn-pri{background:rgba(29,78,216,.6);border-color:rgba(96,165,250,.45);font-weight:700}
.D-tbtn-pri:hover:not(:disabled){background:rgba(29,78,216,.88) !important}
.D-tbtn-dan{background:none;border-color:transparent}
.D-tbtn-dan:hover:not(:disabled){background:rgba(220,38,38,.18) !important;border-color:rgba(220,38,38,.4) !important;color:#fca5a5 !important}
.D-tsep{width:1px;height:26px;background:rgba(255,255,255,.1);flex-shrink:0}
.D-fmt{display:flex;border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,.14);flex-shrink:0}
.D-fmt button{padding:8px 16px;background:none;border:none;color:rgba(255,255,255,.38);cursor:pointer;font-size:.78em;font-weight:700;font-family:inherit;transition:all .15s}
.D-fmt button.D-on{background:rgba(255,255,255,.18);color:white}
.D-grid{display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-start;min-height:40px;margin-bottom:8px}
.D-pgcard{width:108px;height:144px;border-radius:14px;overflow:hidden;position:relative;background:rgba(0,0,0,.46);border:2px solid rgba(255,255,255,.16);cursor:pointer;flex-shrink:0;transition:border-color .15s,transform .15s,box-shadow .15s;user-select:none;box-shadow:0 2px 10px rgba(0,0,0,.4)}
.D-pgcard:hover{transform:scale(1.04);box-shadow:0 6px 22px rgba(0,0,0,.55)}
.D-pgcard img{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}
.D-pgtxt{width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;color:rgba(255,255,255,.45);font-size:.7em;padding:10px;text-align:center;line-height:1.4}
.D-pgload{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.3);font-size:.7em;background:rgba(0,0,0,.18)}
.D-pgnum{position:absolute;bottom:5px;left:5px;background:rgba(0,0,0,.82);color:white;font-size:.62em;border-radius:6px;padding:2px 6px;pointer-events:none;font-weight:700}
.D-pgrm{position:absolute;top:5px;right:5px;background:rgba(0,0,0,.7);border:none;color:rgba(255,255,255,.7);border-radius:50%;width:22px;height:22px;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s,color .15s}
.D-pgrm:hover{background:rgba(220,38,38,.9);color:white}
.D-pgcard.D-done{border-color:rgba(74,222,128,.7)}
.D-pgcard.D-sortable-ghost{opacity:.15}
.D-pgcard.D-sortable-drag{box-shadow:0 12px 40px rgba(0,0,0,.7)}
.D-hint{color:rgba(255,255,255,.22);font-size:.76em;text-align:center;padding:30px 0;margin:0}
.D-info{color:rgba(255,255,255,.3);font-size:.74em;padding:0 2px 10px;font-weight:600;letter-spacing:.01em}
.D-viewer{background:rgba(0,0,0,.5);border-radius:14px;border:1px solid rgba(255,255,255,.08);overflow:auto;max-height:66vh;display:flex;justify-content:center;padding:12px;margin-bottom:10px}
.D-viewer canvas{max-width:100%;height:auto;border-radius:3px;box-shadow:0 4px 28px rgba(0,0,0,.6)}
.D-epub{width:100%;min-height:60vh;background:white;border-radius:14px;overflow:hidden;margin-bottom:10px}
.D-navig{display:flex;justify-content:center;align-items:center;gap:8px;margin-top:4px}
.D-npg{background:rgba(0,0,0,.38);border:1px solid rgba(255,255,255,.14);border-radius:10px;color:white;padding:8px 20px;cursor:pointer;font-size:.82em;font-family:inherit;font-weight:600;transition:background .18s}
.D-npg:hover{background:rgba(255,255,255,.12)}
.D-npg:disabled{opacity:.25;cursor:default}
.D-nlbl{color:rgba(255,255,255,.45);font-size:.78em;min-width:68px;text-align:center;background:rgba(0,0,0,.32);padding:6px 10px;border-radius:8px;font-weight:600}
.D-modal{display:none;position:fixed;inset:0;z-index:300;align-items:center;justify-content:center;flex-direction:column;gap:12px;background:rgba(0,0,0,.93)}
.D-modal.open{display:flex}
.D-cropwrap{position:relative;max-width:min(92vw,440px);max-height:56vh;overflow:hidden;border-radius:8px}
.D-cropwrap img{display:block;max-width:100%;max-height:56vh}
.D-cropinf{color:rgba(255,255,255,.4);font-size:.76em;font-weight:600}
.D-box{background:rgba(6,12,30,.97);border:1px solid rgba(255,255,255,.14);border-radius:20px;padding:20px;display:flex;flex-direction:column;gap:11px;width:min(92vw,370px)}
.D-box-h{color:white;font-weight:800;font-size:.95em}
.D-txtin{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.13);border-radius:10px;padding:9px 13px;color:white;font-size:.88em;width:100%;outline:none;font-family:inherit;resize:vertical;min-height:130px}
.D-txtin:focus{border-color:rgba(96,165,250,.55)}
.D-progbox{background:rgba(6,12,30,.97);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:30px 48px;display:flex;flex-direction:column;align-items:center;gap:14px}
.D-pbarw{width:220px;height:5px;background:rgba(255,255,255,.1);border-radius:3px;overflow:hidden}
.D-pbar{height:100%;background:linear-gradient(90deg,#3b82f6,#4ade80);width:0%;transition:width .25s}
.D-plbl{color:rgba(255,255,255,.65);font-size:.86em;font-weight:600}
.D-toast{position:fixed;bottom:22px;left:50%;transform:translateX(-50%) translateY(14px);background:rgba(6,12,30,.97);border:1px solid rgba(255,255,255,.14);color:white;padding:10px 22px;border-radius:13px;font-size:.82em;opacity:0;pointer-events:none;transition:opacity .22s,transform .22s;z-index:999;white-space:nowrap;box-shadow:0 4px 22px rgba(0,0,0,.5);font-weight:600}
.D-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
</style>

<div class="D" id="D-root">

  <div id="D-s-home" class="D-screen D-on">
    <div class="D-home">
      <div class="D-home-head">
        <span class="D-home-icon">📄</span>
        <div>
          <div class="D-home-ttl">Documentos</div>
          <div class="D-home-sub">Sin servidor, sin cuenta</div>
        </div>
      </div>
      <button class="D-card" id="D-btn-new">
        <span class="D-card-ic">✏️</span>
        <div>
          <div class="D-card-lbl">Nuevo Documento</div>
          <div class="D-card-desc">Crea un PDF o EPUB desde imagenes y texto</div>
        </div>
        <span class="D-card-arr">›</span>
      </button>
      <button class="D-card" id="D-btn-open">
        <span class="D-card-ic">📂</span>
        <div>
          <div class="D-card-lbl">Abrir Documento</div>
          <div class="D-card-desc">Visualiza o edita un PDF o EPUB existente</div>
        </div>
        <span class="D-card-arr">›</span>
      </button>
    </div>
    <input type="file" id="D-open-in" accept=".pdf,.epub" style="display:none">
  </div>

  <div id="D-s-create" class="D-screen">
    <div class="D-topbar">
      <button class="D-back" id="D-c-back">← Inicio</button>
      <input class="D-doc-name" id="D-doc-ttl" type="text" placeholder="Nombre del documento...">
    </div>
    <div class="D-toolbar">
      <button class="D-tbtn" id="D-c-addimg"><span class="D-tbtn-ic">🖼️</span> Imagen</button>
      <button class="D-tbtn" id="D-c-addtxt"><span class="D-tbtn-ic">📝</span> Texto</button>
      <div class="D-tsep"></div>
      <div class="D-fmt" id="D-fmt">
        <button data-f="pdf" class="D-on">PDF</button>
        <button data-f="epub">EPUB</button>
      </div>
      <button class="D-tbtn D-tbtn-pri" id="D-c-export" disabled style="margin-left:auto"><span class="D-tbtn-ic">⬇️</span> Exportar</button>
    </div>
    <input type="file" id="D-img-in" accept="image/*" multiple style="display:none">
    <div class="D-grid" id="D-c-grid"></div>
    <p class="D-hint" id="D-c-empty">Agrega imagenes o paginas de texto para comenzar</p>
  </div>

  <div id="D-s-view" class="D-screen">
    <div class="D-topbar">
      <button class="D-back" id="D-v-back">← Inicio</button>
      <span class="D-scr-ttl" id="D-v-name"></span>
    </div>
    <div class="D-toolbar">
      <button class="D-tbtn D-tbtn-pri" id="D-v-edit" style="display:none"><span class="D-tbtn-ic">✏️</span> Editar PDF</button>
      <div class="D-tsep" id="D-v-sep" style="display:none"></div>
      <button class="D-tbtn" id="D-v-zout"><span class="D-tbtn-ic">🔍</span>−</button>
      <button class="D-tbtn" id="D-v-zin"><span class="D-tbtn-ic">🔍</span>+</button>
    </div>
    <div class="D-viewer" id="D-v-cvwrap"><canvas id="D-canvas"></canvas></div>
    <div class="D-epub" id="D-v-epub" style="display:none"></div>
    <div class="D-navig">
      <button class="D-npg" id="D-v-prev">◀</button>
      <span class="D-nlbl" id="D-v-pglbl"></span>
      <button class="D-npg" id="D-v-next">▶</button>
    </div>
  </div>

  <div id="D-s-edit" class="D-screen">
    <div class="D-topbar">
      <button class="D-back" id="D-e-back">← Ver</button>
      <span class="D-scr-ttl">Editar PDF</span>
    </div>
    <div class="D-toolbar">
      <button class="D-tbtn" id="D-e-addimg"><span class="D-tbtn-ic">➕</span> Pagina</button>
      <button class="D-tbtn D-tbtn-pri" id="D-e-save" style="margin-left:auto"><span class="D-tbtn-ic">⬇️</span> Guardar PDF</button>
    </div>
    <input type="file" id="D-e-imgin" accept="image/*" multiple style="display:none">
    <p class="D-info" id="D-e-info"></p>
    <div class="D-grid" id="D-e-grid"></div>
    <p class="D-hint" id="D-e-empty" style="display:none">Sin paginas</p>
  </div>

</div>

<div class="D-modal" id="D-m-crop">
  <div class="D-cropwrap"><img id="D-crop-img" src=""></div>
  <div class="D-cropinf" id="D-crop-inf"></div>
  <div style="display:flex;gap:10px;margin-top:8px">
    <button class="D-tbtn D-tbtn-pri" id="D-crop-ok">Recortar</button>
    <button class="D-tbtn" id="D-crop-skip">Saltar</button>
    <button class="D-tbtn D-tbtn-dan" id="D-crop-close">Cerrar</button>
  </div>
</div>

<div class="D-modal" id="D-m-txt">
  <div class="D-box">
    <div class="D-box-h">📝 Pagina de texto</div>
    <textarea class="D-txtin" id="D-txtin" placeholder="Escribe el contenido..."></textarea>
    <div style="display:flex;gap:8px">
      <button class="D-tbtn D-tbtn-pri" id="D-txt-ok">Agregar</button>
      <button class="D-tbtn" id="D-txt-cancel">Cancelar</button>
    </div>
  </div>
</div>

<div class="D-modal" id="D-m-prog">
  <div class="D-progbox">
    <div style="font-size:2rem">⚙️</div>
    <div class="D-plbl" id="D-plbl">Procesando...</div>
    <div class="D-pbarw"><div class="D-pbar" id="D-pbar"></div></div>
  </div>
</div>

<div class="D-toast" id="D-toast"></div>

<script>
(function(){
var MAX=50,LT='\x3c';
var pages=[],fmt='pdf',cropQ=[],cropper=null,sortable=null;
var vPDF=null,vPage=1,vTotal=0,vScale=1.5,vEPUB=null,vRend=null,vBuf=null;
var eItems=[],eThumbs={},eSortable=null,eCropCtx=false;
var _tt;

function $(i){return document.getElementById(i);}
var sHome=$('D-s-home'),sCreate=$('D-s-create'),sView=$('D-s-view'),sEdit=$('D-s-edit');
var cGrid=$('D-c-grid'),cEmpty=$('D-c-empty');
var eGrid=$('D-e-grid'),eEmpty=$('D-e-empty'),eInfo=$('D-e-info');
var mCrop=$('D-m-crop'),cropImg=$('D-crop-img'),cropInf=$('D-crop-inf');
var mTxt=$('D-m-txt'),txtin=$('D-txtin');
var mProg=$('D-m-prog'),pbar=$('D-pbar'),plbl=$('D-plbl');
var elToast=$('D-toast');

var screens={home:sHome,create:sCreate,view:sView,edit:sEdit};
function show(m){Object.values(screens).forEach(function(s){s.classList.remove('D-on');});screens[m].classList.add('D-on');}
show('home');

function toastMsg(m){elToast.textContent=m;elToast.classList.add('show');clearTimeout(_tt);_tt=setTimeout(function(){elToast.classList.remove('show');},2600);}
function sprog(p,l){pbar.style.width=p+'%';if(l!=null)plbl.textContent=l;}
function oprog(l){sprog(0,l);mProg.classList.add('open');document.body.style.overflow='hidden';}
function cprog(){mProg.classList.remove('open');document.body.style.overflow='';}

$('D-fmt').addEventListener('click',function(e){
  var b=e.target.closest('button[data-f]');if(!b)return;
  fmt=b.dataset.f;
  $('D-fmt').querySelectorAll('button').forEach(function(x){x.classList.toggle('D-on',x.dataset.f===fmt);});
});

$('D-btn-new').onclick=function(){show('create');};
$('D-btn-open').onclick=function(){$('D-open-in').click();};
$('D-open-in').onchange=function(e){var f=e.target.files[0];if(f)openFile(f);e.target.value='';};
$('D-c-back').onclick=function(){resetCreate();show('home');};
$('D-c-addimg').onclick=function(){$('D-img-in').click();};
$('D-img-in').onchange=function(e){if(e.target.files.length){addImages(Array.from(e.target.files));e.target.value='';}};
$('D-c-addtxt').onclick=function(){txtin.value='';mTxt.classList.add('open');document.body.style.overflow='hidden';};
$('D-txt-cancel').onclick=function(){mTxt.classList.remove('open');document.body.style.overflow='';};
$('D-txt-ok').onclick=function(){
  var t=txtin.value.trim();if(!t)return;
  pages.push({type:'txt',text:t});
  mTxt.classList.remove('open');document.body.style.overflow='';
  renderPages();
};
$('D-c-export').onclick=async function(){
  if(!pages.length)return;oprog('Iniciando...');
  try{if(fmt==='pdf')await doExportPDF();else await doExportEPUB();setTimeout(cprog,900);}
  catch(e){cprog();toastMsg('Error: '+e.message);}
};

$('D-v-back').onclick=function(){resetView();show('home');};
$('D-v-edit').onclick=function(){initEdit();};
$('D-v-zout').onclick=async function(){vScale=Math.max(vScale-.25,.5);await renderPDFPage();};
$('D-v-zin').onclick=async function(){vScale=Math.min(vScale+.25,4);await renderPDFPage();};
$('D-v-prev').onclick=async function(){if(vPDF&&vPage>1){vPage--;await renderPDFPage();updNav();}else if(vRend)vRend.prev();};
$('D-v-next').onclick=async function(){if(vPDF&&vPage<vTotal){vPage++;await renderPDFPage();updNav();}else if(vRend)vRend.next();};

$('D-e-back').onclick=function(){resetEdit();show('view');};
$('D-e-addimg').onclick=function(){$('D-e-imgin').click();};
$('D-e-imgin').onchange=function(e){
  if(!e.target.files.length)return;
  var files=Array.from(e.target.files).filter(function(f){if(!f.type.startsWith('image/')){toastMsg('Solo imagenes: '+f.name);return false;}return true;});
  var nw=files.map(function(f){return{type:'img',file:f,preview:URL.createObjectURL(f),croppedBlob:null};});
  eItems.push.apply(eItems,nw);e.target.value='';
  renderEGrid();
  if(nw.length){eCropCtx=true;cropQ.push.apply(cropQ,nw);if(cropQ.length===nw.length)nextCrop();}
};
$('D-e-save').onclick=async function(){
  if(!eItems.length)return;oprog('Iniciando...');
  try{await doExportEdit();setTimeout(cprog,900);}
  catch(e){cprog();toastMsg('Error: '+e.message);}
};

$('D-crop-ok').onclick=function(){
  if(!cropper)return;
  var ctx=eCropCtx;
  cropper.getCroppedCanvas({imageSmoothingQuality:'high'}).toBlob(function(blob){
    var p=cropQ.shift();
    if(p.croppedBlob)URL.revokeObjectURL(p.croppedBlob);
    p.croppedBlob=blob;
    if(cropper){cropper.destroy();cropper=null;}
    if(ctx){renderEGrid();nextCrop();}else{renderPages();nextCrop();}
  },'image/png');
};
$('D-crop-skip').onclick=function(){cropQ.shift();if(cropper){cropper.destroy();cropper=null;}nextCrop();};
$('D-crop-close').onclick=function(){cropQ=[];eCropCtx=false;if(cropper){cropper.destroy();cropper=null;}mCrop.classList.remove('open');document.body.style.overflow='';};

function loadScript(src){
  return new Promise(function(res,rej){
    if(document.querySelector('script[src="'+src+'"]')){res();return;}
    var s=document.createElement('script');s.src=src;s.onload=res;s.onerror=rej;document.head.appendChild(s);
  });
}
function loadCSS(href){
  if(document.querySelector('link[href="'+href+'"]'))return;
  var l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l);
}
var LS={
  sortable:function(){return window.Sortable?Promise.resolve():loadScript('https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.2/Sortable.min.js');},
  cropper:function(){if(window.Cropper)return Promise.resolve();loadCSS('https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.2/cropper.min.css');return loadScript('https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.2/cropper.min.js');},
  pdflib:function(){return window.PDFLib?Promise.resolve():loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js');},
  pdfjs:function(){if(window.pdfjsLib)return Promise.resolve();return loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js').then(function(){window.pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';});},
  jszip:function(){return window.JSZip?Promise.resolve():loadScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js');},
  epub:function(){return window.ePub?Promise.resolve():loadScript('https://cdn.jsdelivr.net/npm/epubjs@0.3.93/dist/epub.min.js');}
};

function addImages(files){
  var valid=files.filter(function(f){if(!f.type.startsWith('image/')){toastMsg('Solo imagenes: '+f.name);return false;}return true;});
  if(pages.length+valid.length>MAX){toastMsg('Max '+MAX+' paginas');valid.length=Math.max(0,MAX-pages.length);}
  var nw=valid.map(function(f){return{type:'img',file:f,preview:URL.createObjectURL(f),croppedBlob:null};});
  pages.push.apply(pages,nw);show('create');renderPages();
  if(nw.length){eCropCtx=false;cropQ.push.apply(cropQ,nw);if(cropQ.length===nw.length)nextCrop();}
}

function mkCard(it,i,onRm,onCk){
  var d=document.createElement('div');
  d.className='D-pgcard'+(it.croppedBlob?' D-done':'');d.dataset.i=i;
  if(it.type==='img'){
    var img=document.createElement('img');
    img.src=it.croppedBlob?URL.createObjectURL(it.croppedBlob):it.preview;
    img.loading='lazy';d.appendChild(img);
    if(onCk)d.onclick=onCk;
  } else if(it.type==='pdf-page'){
    if(eThumbs[it.idx]){var img=document.createElement('img');img.src=eThumbs[it.idx];d.appendChild(img);}
    else{var sp=document.createElement('div');sp.className='D-pgload';sp.textContent='cargando...';d.appendChild(sp);}
  } else {
    var div=document.createElement('div');div.className='D-pgtxt';
    div.innerHTML='📝<br>'+it.text.slice(0,55)+(it.text.length>55?'...':'');d.appendChild(div);
  }
  var num=document.createElement('div');num.className='D-pgnum';num.textContent=i+1;d.appendChild(num);
  var rm=document.createElement('button');rm.className='D-pgrm';rm.innerHTML='&#10005;';
  rm.onclick=function(e){e.stopPropagation();onRm(i);};d.appendChild(rm);
  return d;
}

function renderPages(){
  cGrid.innerHTML='';cEmpty.style.display=pages.length?'none':'';
  $('D-c-export').disabled=!pages.length;
  pages.forEach(function(p,i){
    var card=mkCard(p,i,function(idx){
      var pp=pages[idx];if(pp.preview)URL.revokeObjectURL(pp.preview);if(pp.croppedBlob)URL.revokeObjectURL(pp.croppedBlob);
      pages.splice(idx,1);renderPages();
    },p.type==='img'?function(){eCropCtx=false;cropQ=[p];nextCrop();}:null);
    cGrid.appendChild(card);
  });
  LS.sortable().then(function(){
    if(sortable)sortable.destroy();
    if(!window.Sortable||!cGrid.children.length)return;
    sortable=new Sortable(cGrid,{animation:150,ghostClass:'D-sortable-ghost',dragClass:'D-sortable-drag',
      onEnd:function(e){var m=pages.splice(e.oldIndex,1)[0];pages.splice(e.newIndex,0,m);renderPages();}});
  });
}

function renderEGrid(){
  eGrid.innerHTML='';
  eInfo.textContent=eItems.length+' pagina'+(eItems.length!==1?'s':'')+' — arrastra para reordenar';
  eEmpty.style.display=eItems.length?'none':'';
  eItems.forEach(function(it,i){
    var card=mkCard(it,i,function(idx){
      var it2=eItems[idx];
      if(it2.type==='img'){if(it2.preview)URL.revokeObjectURL(it2.preview);if(it2.croppedBlob)URL.revokeObjectURL(it2.croppedBlob);}
      eItems.splice(idx,1);renderEGrid();
    },it.type==='img'?function(){eCropCtx=true;cropQ=[it];nextCrop();}:null);
    eGrid.appendChild(card);
  });
  LS.sortable().then(function(){
    if(eSortable)eSortable.destroy();
    if(!window.Sortable||!eGrid.children.length)return;
    eSortable=new Sortable(eGrid,{animation:150,ghostClass:'D-sortable-ghost',dragClass:'D-sortable-drag',
      onEnd:function(e){var m=eItems.splice(e.oldIndex,1)[0];eItems.splice(e.newIndex,0,m);renderEGrid();}});
  });
}

function nextCrop(){
  if(!cropQ.length){mCrop.classList.remove('open');document.body.style.overflow='';eCropCtx=false;return;}
  var p=cropQ[0];
  var list=eCropCtx?eItems.filter(function(x){return x.type==='img';}):pages;
  var idx=list.indexOf(p);
  cropInf.textContent=(idx>=0?idx+1:'-')+' / '+list.length;
  mCrop.classList.add('open');document.body.style.overflow='hidden';
  if(cropper){cropper.destroy();cropper=null;}
  var src=p.croppedBlob?URL.createObjectURL(p.croppedBlob):p.preview;
  cropImg.onload=function(){
    LS.cropper().then(function(){
      if(cropper){cropper.destroy();cropper=null;}
      cropper=new Cropper(cropImg,{viewMode:1,dragMode:'move',background:false,autoCropArea:1});
    });
  };
  cropImg.src=src;
}

async function initEdit(){
  eItems=Array.from({length:vTotal},function(_,i){return{type:'pdf-page',idx:i};});
  eThumbs={};renderEGrid();show('edit');
  for(var i=0;i<vTotal;i++){
    var url=await renderThumb(i+1);eThumbs[i]=url;
    var card=eGrid.querySelector('[data-i="'+i+'"]');
    if(card){var sp=card.querySelector('.D-pgload');if(sp)sp.remove();var img=document.createElement('img');img.src=url;card.insertBefore(img,card.firstChild);}
  }
}

async function renderThumb(n){
  var page=await vPDF.getPage(n);var vp=page.getViewport({scale:.32});
  var c=document.createElement('canvas');c.width=vp.width;c.height=vp.height;
  await page.render({canvasContext:c.getContext('2d'),viewport:vp}).promise;
  return c.toDataURL();
}

async function doExportEdit(){
  await LS.pdflib();
  var src=await PDFLib.PDFDocument.load(vBuf);var out=await PDFLib.PDFDocument.create();
  for(var i=0;i<eItems.length;i++){
    sprog(Math.round(i/eItems.length*92),'Pagina '+(i+1)+'/'+eItems.length);
    var it=eItems[i];
    if(it.type==='pdf-page'){var cp=await out.copyPages(src,[it.idx]);out.addPage(cp[0]);}
    else{var png=await getBlobPNG(it);var bytes=await png.arrayBuffer();var emb=await out.embedPng(bytes);var pg=out.addPage([emb.width,emb.height]);pg.drawImage(emb,{x:0,y:0,width:emb.width,height:emb.height});}
  }
  sprog(96,'Guardando...');
  download(await out.save(),($('D-v-name').textContent||'editado').replace(/\.pdf$/i,'')+'_editado.pdf','application/pdf');
  sprog(100,'Listo');
}

function resetEdit(){
  eItems.forEach(function(it){if(it.type==='img'){if(it.preview)URL.revokeObjectURL(it.preview);if(it.croppedBlob)URL.revokeObjectURL(it.croppedBlob);}});
  eItems=[];eThumbs={};if(eSortable){eSortable.destroy();eSortable=null;}eGrid.innerHTML='';
}
function resetCreate(){
  pages.forEach(function(p){if(p.preview)URL.revokeObjectURL(p.preview);if(p.croppedBlob)URL.revokeObjectURL(p.croppedBlob);});
  pages=[];cropQ=[];if(cropper){cropper.destroy();cropper=null;}if(sortable){sortable.destroy();sortable=null;}
  cGrid.innerHTML='';cEmpty.style.display='';$('D-c-export').disabled=true;$('D-doc-ttl').value='';
}
function resetView(){
  if(vPDF){vPDF.destroy();vPDF=null;}
  if(vEPUB){try{vEPUB.destroy();}catch(_){}vEPUB=null;vRend=null;}
  vPage=1;vTotal=0;vBuf=null;
  var cv=$('D-canvas');cv.width=0;cv.height=0;$('D-v-epub').innerHTML='';
  $('D-v-edit').style.display='none';$('D-v-sep').style.display='none';
  $('D-v-zout').style.display='';$('D-v-zin').style.display='';
}

function toPNG(blob){
  return new Promise(function(res){
    var u=URL.createObjectURL(blob),img=new Image();
    img.onload=function(){var c=document.createElement('canvas');c.width=img.naturalWidth;c.height=img.naturalHeight;c.getContext('2d').drawImage(img,0,0);URL.revokeObjectURL(u);c.toBlob(res,'image/png');};img.src=u;
  });
}
function textToPNG(text){
  return new Promise(function(res){
    var W=595,H=842,PAD=56,LH=26,FS=15;
    var c=document.createElement('canvas');c.width=W;c.height=H;var ctx=c.getContext('2d');
    ctx.fillStyle='#ffffff';ctx.fillRect(0,0,W,H);ctx.fillStyle='#1c1c1c';ctx.font=FS+'px Georgia,serif';
    var maxW=W-PAD*2,y=PAD+FS;
    var paras=text.split('\n');
    for(var pi=0;pi<paras.length;pi++){
      if(y>H-PAD)break;var para=paras[pi];
      if(!para.trim()){y+=LH;continue;}
      var words=para.split(' '),line='';
      for(var wi=0;wi<words.length;wi++){
        var test=line+(line?' ':'')+words[wi];
        if(ctx.measureText(test).width>maxW&&line){ctx.fillText(line,PAD,y);line=words[wi];y+=LH;if(y>H-PAD)break;}
        else line=test;
      }
      if(line&&y<=H-PAD)ctx.fillText(line,PAD,y);y+=LH+10;
    }
    c.toBlob(res,'image/png');
  });
}
function getBlobPNG(p){return p.type==='txt'?textToPNG(p.text):toPNG(p.croppedBlob||p.file);}

async function doExportPDF(){
  await LS.pdflib();var doc=await PDFLib.PDFDocument.create();
  for(var i=0;i<pages.length;i++){
    sprog(Math.round(i/pages.length*92),'Pagina '+(i+1)+'/'+pages.length);
    var png=await getBlobPNG(pages[i]);var bytes=await png.arrayBuffer();
    var img=await doc.embedPng(bytes);var pg=doc.addPage([img.width,img.height]);
    pg.drawImage(img,{x:0,y:0,width:img.width,height:img.height});
  }
  sprog(96,'Guardando...');
  download(await doc.save(),($('D-doc-ttl').value.trim()||'documento')+'.pdf','application/pdf');
  sprog(100,'Listo');
}

async function doExportEPUB(){
  await LS.jszip();var zip=new JSZip(),title=$('D-doc-ttl').value.trim()||'documento';
  var uid='urn:uuid:'+crypto.randomUUID();var now=new Date().toISOString().replace(/\.\d{3}Z$/,'Z');
  zip.file('mimetype','application/epub+zip',{compression:'STORE',compressionOptions:{level:0}});
  var mif=zip.folder('META-INF');
  mif.file('container.xml','<?xml version="1.0"?>'+LT+'container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">'+LT+'rootfiles>'+LT+'rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>'+LT+'/rootfiles>'+LT+'/container>');
  var ob=zip.folder('OEBPS'),ib=ob.folder('images'),mf=[],sp=[],nav=[];
  for(var i=0;i<pages.length;i++){
    sprog(Math.round(i/pages.length*88),'Pagina '+(i+1)+'/'+pages.length);
    var idx=String(i+1).padStart(3,'0');var png=await getBlobPNG(pages[i]);var buf=await png.arrayBuffer();
    ib.file('p'+idx+'.png',buf);mf.push(LT+'item id="i'+idx+'" href="images/p'+idx+'.png" media-type="image/png"/>');
    var xhtml='<?xml version="1.0" encoding="UTF-8"?>'+LT+'!DOCTYPE html>'+LT+'html xmlns="http://www.w3.org/1999/xhtml">'+LT+'head>'+LT+'title>Pagina '+(i+1)+LT+'/title>'+LT+'style>body{margin:0;padding:0;text-align:center;background:#000}img{max-width:100%;height:auto}'+LT+'/style>'+LT+'/head>'+LT+'body>'+LT+'img src="images/p'+idx+'.png" alt="Pagina '+(i+1)+'"/>'+LT+'/body>'+LT+'/html>';
    ob.file('p'+idx+'.xhtml',xhtml);mf.push(LT+'item id="p'+idx+'" href="p'+idx+'.xhtml" media-type="application/xhtml+xml"/>');
    sp.push(LT+'itemref idref="p'+idx+'"/>');nav.push(LT+'li>'+LT+'a href="p'+idx+'.xhtml">Pagina '+(i+1)+LT+'/a>'+LT+'/li>');
  }
  ob.file('nav.xhtml','<?xml version="1.0" encoding="UTF-8"?>'+LT+'!DOCTYPE html>'+LT+'html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">'+LT+'head>'+LT+'title>'+title+LT+'/title>'+LT+'/head>'+LT+'body>'+LT+'nav epub:type="toc">'+LT+'ol>'+nav.join('')+LT+'/ol>'+LT+'/nav>'+LT+'/body>'+LT+'/html>');
  ob.file('content.opf','<?xml version="1.0" encoding="UTF-8"?>'+LT+'package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="uid">'+LT+'metadata xmlns:dc="http://purl.org/dc/elements/1.1/">'+LT+'dc:title>'+title+LT+'/dc:title>'+LT+'dc:identifier id="uid">'+uid+LT+'/dc:identifier>'+LT+'dc:language>es'+LT+'/dc:language>'+LT+'meta property="dcterms:modified">'+now+LT+'/meta>'+LT+'/metadata>'+LT+'manifest>'+LT+'item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>'+mf.join('')+LT+'/manifest>'+LT+'spine>'+sp.join('')+LT+'/spine>'+LT+'/package>');
  sprog(95,'Comprimiendo...');
  download(await zip.generateAsync({type:'blob',compression:'DEFLATE',compressionOptions:{level:6}}),title+'.epub','application/epub+zip');
  sprog(100,'Listo');
}

async function openFile(file){
  $('D-v-name').textContent=file.name;show('view');
  try{
    var buf=await file.arrayBuffer();var ext=file.name.split('.').pop().toLowerCase();
    if(ext==='pdf')await initPDFView(buf);
    else if(ext==='epub')await initEPUBView(buf);
    else{toastMsg('Formato no soportado');show('home');}
  }catch(e){toastMsg('Error: '+e.message);show('home');}
}

async function initPDFView(buf){
  await LS.pdfjs();vBuf=buf;
  $('D-v-cvwrap').style.display='';$('D-v-epub').style.display='none';
  $('D-v-edit').style.display='';$('D-v-sep').style.display='';
  $('D-v-zout').style.display='';$('D-v-zin').style.display='';
  vPage=1;vScale=1.5;vPDF=await pdfjsLib.getDocument({data:buf}).promise;vTotal=vPDF.numPages;
  await renderPDFPage();updNav();
}
async function renderPDFPage(){
  if(!vPDF)return;var page=await vPDF.getPage(vPage);var vp=page.getViewport({scale:vScale});
  var cv=$('D-canvas');cv.width=vp.width;cv.height=vp.height;
  await page.render({canvasContext:cv.getContext('2d'),viewport:vp}).promise;
}
async function initEPUBView(buf){
  await LS.epub();$('D-v-cvwrap').style.display='none';$('D-v-epub').style.display='';
  $('D-v-edit').style.display='none';$('D-v-sep').style.display='none';
  $('D-v-zout').style.display='none';$('D-v-zin').style.display='none';
  $('D-v-epub').innerHTML='';if(vEPUB){try{vEPUB.destroy();}catch(_){}}
  vEPUB=ePub(buf);vRend=vEPUB.renderTo('D-v-epub',{width:'100%',height:'520px',spread:'none'});
  await vRend.display();vTotal=null;updNav();
}
function updNav(){
  if(vTotal!==null){$('D-v-pglbl').textContent=vPage+' / '+vTotal;$('D-v-prev').disabled=vPage<=1;$('D-v-next').disabled=vPage>=vTotal;}
  else{$('D-v-pglbl').textContent='';$('D-v-prev').disabled=false;$('D-v-next').disabled=false;}
}
function download(data,name,type){
  var blob=data instanceof Blob?data:new Blob([data],{type:type});
  var u=URL.createObjectURL(blob);var a=document.createElement('a');a.href=u;a.download=name;a.click();
  setTimeout(function(){URL.revokeObjectURL(u);},6000);
}

(async function(){
  try{
    var r=await fetch('/_share_pending');var d=await r.json();
    if(!d||(!d.blobs||!d.blobs.length)&&!d.url&&!d.text)return;
    await fetch('/_share_clear',{method:'POST'});
    if(d.blobs&&d.blobs.length){
      var files=d.blobs.map(function(b){return new File([new Uint8Array(b.data)],b.name,{type:b.type});});
      var docs=files.filter(function(f){return /\.(pdf|epub)$/i.test(f.name);});
      var imgs=files.filter(function(f){return f.type.startsWith('image/');});
      if(docs.length)openFile(docs[0]);else if(imgs.length){show('create');addImages(imgs);}
    }
  }catch(_){}
})();

var cont=document.getElementById('content');
if(cont)cont.addEventListener('contentUnload',function(){
  resetCreate();resetView();resetEdit();if(cropper){cropper.destroy();cropper=null;}
},{once:true});
})();
</script>

</br></br>
<a href="web/otros/Archivos/HTML/apps.html" class="back-button">&#x2190; Volver a Aplicaciones</a>
</div>
