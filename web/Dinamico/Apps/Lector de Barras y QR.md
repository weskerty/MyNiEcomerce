<div style="text-align:center;position:relative;padding-top:0;margin-top:0">
<style>
.qr-wrap{padding:12px;max-width:100%}
.qr-bar{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);border-radius:24px;padding:10px 16px;margin-bottom:14px}
.qr-bar:focus-within{border-color:rgba(56,189,248,.4);box-shadow:0 0 0 3px rgba(56,189,248,.08)}
.qr-st{flex:1;color:rgba(255,255,255,.6);font-size:.9em;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.qr-hm{font-size:1.3rem;text-decoration:none;flex-shrink:0;line-height:1;opacity:.8;transition:opacity .2s,transform .2s}
.qr-hm:hover{opacity:1;transform:scale(1.15)}
.qr-ib{background:none;border:none;color:white;cursor:pointer;font-size:1.15rem;flex-shrink:0;padding:0 2px;opacity:.7;transition:opacity .2s,transform .2s;line-height:1;font-family:inherit}
.qr-ib:hover{opacity:1;transform:scale(1.1)}
.qr-ib:disabled{opacity:.3;cursor:not-allowed;transform:none}
.qr-area{margin:0 auto;max-width:320px;border-radius:16px;overflow:hidden;position:relative;background:rgba(0,0,0,.25)}
.qr-rt{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);border-radius:12px;padding:12px 16px;color:white;font-size:.9em;word-break:break-all;text-align:left;margin-bottom:10px;max-height:160px;overflow-y:auto;white-space:pre-wrap}
.qr-rl{display:inline-block;padding:8px 20px;border-radius:10px;background:rgba(37,211,102,.85);color:white;text-decoration:none;font-size:.9em;margin-bottom:10px;transition:background .2s}
.qr-rl:hover{background:#1ebe5d;color:white;text-decoration:none}
.qr-ac{display:flex;gap:8px;justify-content:center;flex-wrap:wrap}
.qr-btn{padding:8px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.14);color:white;cursor:pointer;font-size:.9em;transition:background .2s;font-family:inherit}
.qr-btn:hover{background:rgba(255,255,255,.24)}
.qr-tk{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:white;padding:10px 22px;border-radius:12px;font-size:.88em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999;white-space:nowrap}
.qr-tk.show{opacity:1;transform:translateX(-50%) translateY(0)}
.qr-modal{display:none;position:fixed;inset:0;z-index:200;align-items:center;justify-content:center;flex-direction:column;gap:12px;background:rgba(0,0,0,.88)}
.qr-modal.open{display:flex}
.qr-cw{position:relative;max-width:min(90vw,420px);max-height:60vh;overflow:hidden}
.qr-cw img{display:block;max-width:100%;max-height:60vh}
.qr-help{color:rgba(255,255,255,.4);font-size:.85em;padding:32px 0}
#qr-reader video{width:100%!important;border-radius:0}
#qr-reader img{display:none!important}
</style>

<div style="font-size:2.8rem;margin:0 auto 6px;display:block;line-height:1.2">🔍</div>

<div class="qr-wrap">
  <div class="qr-bar">
    <a class="qr-hm" href="web/es.html">🏠</a>
    <span class="qr-st" id="qr-st">Lector QR</span>
    <button class="qr-ib" id="qr-fb" title="Subir imagen">🖼️</button>
    <button class="qr-ib" id="qr-cb" title="Camara">📷</button>
    <input type="file" id="qr-in" accept="image/*" style="display:none">
  </div>

  <div id="qr-idle" class="qr-help">📷 Camara &nbsp;·&nbsp; 🖼️ Subir imagen</div>

  <div class="qr-area" id="qr-sa" style="display:none">
    <div id="qr-reader"></div>
  </div>

  <div id="qr-ra" style="display:none;padding:12px 0">
    <div class="qr-rt" id="qr-rt"></div>
    <a class="qr-rl" id="qr-rl" href="#" target="_blank" rel="noopener noreferrer" style="display:none">🔗 Abrir enlace</a>
    <div class="qr-ac">
      <button class="qr-btn" id="qr-cp">📋 Copiar</button>
      <button class="qr-btn" id="qr-ns">🔄 Nuevo</button>
    </div>
  </div>
</div>

<div class="qr-tk" id="qr-tk"></div>

<div class="qr-modal" id="qr-cm">
  <div class="qr-cw"><img id="qr-ci" src="" alt=""></div>
  <div id="qr-cif" style="color:rgba(255,255,255,.55);font-size:.8em;margin-top:4px"></div>
  <div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap;justify-content:center">
    <button class="qr-btn" id="qr-cok">✂️ Recortar</button>
    <button class="qr-btn" id="qr-csk">↩ Sin recorte</button>
    <button class="qr-btn" id="qr-ccl">✕</button>
  </div>
</div>

<script>
(function(){
  const H5Q='https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js';
  const CJS='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.2/cropper.min.js';
  const CCS='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.2/cropper.min.css';

  let _cam=null,_cp=null,_pf=null,_res='',_det=false,_tt=null;

  const $=id=>document.getElementById(id);
  const st=$('qr-st'),sa=$('qr-sa'),ra=$('qr-ra'),idle=$('qr-idle');
  const rt=$('qr-rt'),rl=$('qr-rl'),cb=$('qr-cb'),fb=$('qr-fb');
  const inEl=$('qr-in'),cm=$('qr-cm'),ci=$('qr-ci'),cif=$('qr-cif'),tk=$('qr-tk');

  function QS_T(m){tk.textContent=m;tk.classList.add('show');clearTimeout(_tt);_tt=setTimeout(()=>tk.classList.remove('show'),2500);}

  function QS_SZ(raw){
    const t=raw.trim();
    try{const u=new URL(t);if(u.protocol==='http:'||u.protocol==='https:')return{text:t,url:u.href};}catch{}
    return{text:t,url:null};
  }

  function QS_SR(raw){
    const{text,url}=QS_SZ(raw);
    _res=text;
    idle.style.display='none';sa.style.display='none';ra.style.display='';
    rt.textContent=text;
    if(url){rl.href=url;rl.style.display='';}
    else{rl.style.display='none';rl.removeAttribute('href');}
    st.textContent='Resultado';
    cb.disabled=false;fb.disabled=false;
  }

  function QS_LS(url){
    return new Promise((res,rej)=>{
      const s=document.createElement('script');s.src=url;s.onload=res;s.onerror=rej;document.head.appendChild(s);
    });
  }

  async function QS_LC(){
    if(window.Cropper)return;
    const l=document.createElement('link');l.rel='stylesheet';l.href=CCS;document.head.appendChild(l);
    await QS_LS(CJS);
  }

  async function QS_LH(){
    if(window.Html5Qrcode)return;
    await QS_LS(H5Q);
  }

  function QS_KK(){
    if(_cam){_cam.stop().catch(()=>{});_cam=null;}
    _det=false;
  }

  async function QS_SC(){
    QS_KK();
    cb.disabled=true;fb.disabled=true;
    idle.style.display='none';ra.style.display='none';
    st.textContent='Iniciando camara...';
    try{
      await QS_LH();
      $('qr-reader').innerHTML='';
      _cam=new Html5Qrcode('qr-reader');
      sa.style.display='';
      await _cam.start(
        {facingMode:'environment'},
        {fps:10,qrbox:{width:240,height:240}},
        raw=>{
          if(_det)return;_det=true;
          _cam.stop().catch(()=>{});_cam=null;
          sa.style.display='none';
          QS_SR(raw);
        },
        ()=>{}
      );
      st.textContent='Apunta al QR...';cb.disabled=false;fb.disabled=false;
    }catch(e){
      sa.style.display='none';idle.style.display='';
      cb.disabled=false;fb.disabled=false;
      QS_T('Error camara: '+(e.message||e));st.textContent='Lector QR';
    }
  }

  async function QS_SB(input){
    idle.style.display='none';
    st.textContent='Procesando...';
    try{
      await QS_LH();
      const div=document.createElement('div');div.style.display='none';document.body.appendChild(div);
      const uid='qr-tmp-'+Date.now();div.id=uid;
      const inst=new Html5Qrcode(uid);
      const f=input instanceof File?input:new File([input],'qr.png',{type:'image/png'});
      try{
        const raw=await inst.scanFile(f,false);
        QS_SR(raw);
      }catch{
        QS_T('No se encontro QR');
        st.textContent='Lector QR';
        idle.style.display='';
        cb.disabled=false;fb.disabled=false;
      }finally{div.remove();}
    }catch(e){
      QS_T('Error: '+(e.message||e));
      st.textContent='Lector QR';
      idle.style.display='';
      cb.disabled=false;fb.disabled=false;
    }
  }

  async function QS_HF(file){
    if(!file.type.startsWith('image/')){QS_T('Solo imagenes');return;}
    _pf=file;
    QS_KK();
    cb.disabled=true;fb.disabled=true;
    try{await QS_LC();}catch{}
    const url=URL.createObjectURL(file);
    ci.onload=()=>{
      URL.revokeObjectURL(url);
      if(window.Cropper){
        if(_cp){_cp.destroy();_cp=null;}
        _cp=new Cropper(ci,{viewMode:1,dragMode:'move',background:false,autoCropArea:.9,aspectRatio:NaN});
      }
      cm.classList.add('open');document.body.style.overflow='hidden';
    };
    ci.src=url;
    cif.textContent=file.name;
  }

  $('qr-cok').onclick=()=>{
    if(!_cp){$('qr-ccl').onclick();return;}
    const canvas=_cp.getCroppedCanvas({imageSmoothingQuality:'high'});
    _cp.destroy();_cp=null;
    cm.classList.remove('open');document.body.style.overflow='';
    _pf=null;
    canvas.toBlob(b=>QS_SB(b),'image/png');
  };

  $('qr-csk').onclick=()=>{
    if(_cp){_cp.destroy();_cp=null;}
    cm.classList.remove('open');document.body.style.overflow='';
    const f=_pf;_pf=null;
    if(f)QS_SB(f);
  };

  $('qr-ccl').onclick=()=>{
    if(_cp){_cp.destroy();_cp=null;}
    cm.classList.remove('open');document.body.style.overflow='';
    _pf=null;cb.disabled=false;fb.disabled=false;
    if(!_res&&sa.style.display==='none'){idle.style.display='';st.textContent='Lector QR';}
  };

  cb.onclick=QS_SC;
  fb.onclick=()=>inEl.click();
  inEl.onchange=e=>{if(e.target.files[0])QS_HF(e.target.files[0]);inEl.value='';};

  $('qr-cp').onclick=async()=>{
    if(!_res)return;
    try{await navigator.clipboard.writeText(_res);QS_T('Copiado');}
    catch{QS_T('Error al copiar');}
  };

  $('qr-ns').onclick=()=>{
    QS_KK();
    sa.style.display='none';ra.style.display='none';idle.style.display='';
    rl.style.display='none';rl.removeAttribute('href');
    rt.textContent='';_res='';
    st.textContent='Lector QR';cb.disabled=false;fb.disabled=false;
  };

  const cont=document.getElementById('content');
  if(cont)cont.addEventListener('contentUnload',()=>{
    QS_KK();
    if(_cp){_cp.destroy();_cp=null;}
    if(cm.classList.contains('open')){cm.classList.remove('open');document.body.style.overflow='';}
    clearTimeout(_tt);
  },{once:true});

  (async()=>{
    try{
      const d=await fetch('/_share_pending').then(r=>r.json());
      if(!d?.blobs?.length)return;
      await fetch('/_share_clear',{method:'POST'});
      const b=d.blobs[0];
      if(b?.type?.startsWith('image/')){
        QS_HF(new File([new Uint8Array(b.data)],b.name,{type:b.type}));
      }
    }catch{}
  })();
})();
</script>

<br>
<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Aplicaciones</a>
<br>
</div>
