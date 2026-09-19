<div style="text-align:center;position:relative;padding-top:0;margin-top:0">
<style>
.qr-st{color:rgba(255,255,255,.75);font-size:1.3em;font-weight:600;margin:10px 0 22px;min-height:1.6em;transition:color .2s}
.qr-st.act{color:rgba(56,189,248,.9)}
.qr-st.ok{color:rgba(37,211,102,.9)}
.qr-btns{display:flex;gap:16px;justify-content:center;margin-bottom:18px}
.qr-mi{width:90px;height:90px;flex:0 0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;border-radius:18px;border:none;cursor:pointer;color:white;background:linear-gradient(135deg,rgba(255,255,255,.25),rgba(255,255,255,.05),rgba(255,255,255,.15));transition:transform .2s,opacity .2s;font-family:inherit}
.qr-mi:hover{transform:scale(1.08)}
.qr-mi:disabled{opacity:.35;cursor:not-allowed;transform:none}
.qr-mi-ic{font-size:2rem;line-height:1}
.qr-mi-lb{font-size:.72rem;color:rgba(255,255,255,.8)}
.qr-area{margin:0 auto;max-width:320px;border-radius:16px;overflow:hidden;position:relative;background:rgba(0,0,0,.25)}
.qr-cc{display:block;margin:10px auto 0;background:none;border:none;color:rgba(255,255,255,.45);font-size:.8em;cursor:pointer;font-family:inherit;text-decoration:underline}
.qr-cc:hover{color:rgba(255,255,255,.75)}
.qr-rt{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);border-radius:12px;padding:12px 16px;color:white;font-size:.9em;word-break:break-all;text-align:left;margin-bottom:10px;max-height:160px;overflow-y:auto;white-space:pre-wrap}
.qr-rl{display:inline-block;padding:8px 20px;border-radius:10px;background:rgba(37,211,102,.85);color:white;text-decoration:none;font-size:.9em;margin-bottom:10px;transition:background .2s}
.qr-rl:hover{background:#1ebe5d;color:white;text-decoration:none}
.qr-ac{display:flex;gap:8px;justify-content:center;flex-wrap:wrap}
.qr-btn{padding:8px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.14);color:white;cursor:pointer;font-size:.9em;transition:background .2s;font-family:inherit}
.qr-btn:hover{background:rgba(255,255,255,.24)}
.qr-tk{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:white;padding:10px 22px;border-radius:12px;font-size:.88em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999;white-space:nowrap}
.qr-tk.show{opacity:1;transform:translateX(-50%) translateY(0)}
.qr-modal{display:none;position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.88);overflow-y:auto}
.qr-modal.open{display:flex;flex-direction:column;align-items:center;padding:20px 16px;gap:12px}
.qr-cw{position:relative;max-width:min(90vw,420px);max-height:60vh;overflow:hidden}
.qr-cw img{display:block;max-width:100%;max-height:60vh}
#qr-reader video{width:100%!important;border-radius:0}
#qr-reader img{display:none!important}
.qg-wr{position:relative;margin:0 auto;max-width:min(320px,86vw);width:100%}
.qg-cv{display:block;width:100%;height:auto;border-radius:14px;background:#fff}
.qg-ov{position:absolute;left:0;top:0;width:100%;height:100%;border-radius:14px;pointer-events:none}
.qg-dg{margin:0 auto 6px;max-width:min(320px,86vw);text-align:left;font-size:.78em;line-height:1.55;color:rgba(255,255,255,.75);white-space:pre-line;word-break:break-word}
.qr-dt{font-size:11px;opacity:.6;margin:-4px 0 10px;min-height:1em}
.qg-scr{max-height:52vh;overflow-y:auto;padding-right:4px}
.qg-d{margin:2px 0 8px;font-size:11px;opacity:.65;line-height:1.35}
.qg-in{width:100%;box-sizing:border-box;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);border-radius:12px;padding:10px 14px;color:white;font-size:.9em;font-family:inherit;outline:none;margin-bottom:10px}
.qg-in:focus{border-color:rgba(56,189,248,.4)}
.qg-row{display:flex;align-items:center;gap:10px;margin:6px 0}
.qg-row label{flex:0 0 92px;text-align:left;color:rgba(255,255,255,.6);font-size:.8em}
.qg-row input[type=range]{flex:1;accent-color:#38bdf8}
.qg-row select{flex:1;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);border-radius:10px;color:white;padding:6px 8px;font-family:inherit;font-size:.85em}
.qg-row span{flex:0 0 42px;color:rgba(255,255,255,.5);font-size:.78em;text-align:right}
.qg-adv{margin:10px 0;text-align:left}
.qg-adv summary{cursor:pointer;color:rgba(255,255,255,.6);font-size:.85em;text-align:center}
</style>

<div style="font-size:2.8rem;margin:0 auto 4px;line-height:1.2">🔍</div>
<div class="qr-st" id="qr-st">Lector QR</div>

<div style="padding:0 12px;max-width:100%">

  <div id="qr-idle">
<div class="BOTON-M1">

  <button class="BOTON-M2" id="qr-cb" title="Camara">
    <div class="BOTON-M3">
      <div class="BOTON-M4">📷</div>
      <p class="BOTON-M5">Camara</p>
    </div>
  </button>

  <button class="BOTON-M2" id="qr-fb" title="Subir">
    <div class="BOTON-M3">
      <div class="BOTON-M4">📤</div>
      <p class="BOTON-M5">Subir</p>
    </div>
  </button>

  <button class="BOTON-M2" id="qg-ab" title="Crear">
    <div class="BOTON-M3">
      <div class="BOTON-M4">✨</div>
      <p class="BOTON-M5">Crear</p>
    </div>
  </button>

</div>
    <input type="file" id="qr-in" accept="image/*" style="display:none">
  </div>

  <div id="qg" style="display:none;padding:4px 0 12px">
    <input class="qg-in" id="qg-t" type="text" placeholder="Texto o enlace para el QR">
    <div class="qg-row"><label>Tipo</label><select id="qg-k"><option value="qr">QR (lo lee cualquier camara)</option><option value="az">Aztec (mas correccion)</option></select></div>
    <div class="qg-wr"><canvas class="qg-cv" id="qg-cv" width="320" height="320"></canvas><canvas class="qg-ov" id="qg-ov"></canvas></div>
    <div class="qr-ac" style="margin:12px 0">
      <button class="qr-btn" id="qg-ib">🖼 Imagen</button>
      <button class="qr-btn" id="qg-rb" style="display:none">🗑 Quitar</button>
      <button class="qr-btn" id="qg-tb">🔍 Probar escaneo</button>
      <button class="qr-btn" id="qg-mp" style="display:none">🗺 Mapa</button>
    </div>
    <div class="qg-dg" id="qg-dg"></div>
    <input type="file" id="qg-if" accept="image/*" style="display:none">
    <details class="qg-adv">
      <summary>Ajuste fino</summary>
      <div class="qg-scr">
      <div id="qg-gq">
      <div class="qg-row"><label>Densidad</label><select id="qg-v"><option value="0">Automatica</option><option value="5">v5 chico</option><option value="7">v7</option><option value="10">v10</option><option value="14">v14</option><option value="18">v18 denso</option></select></div>
      <p class="qg-d">Mayor = mas espacio para que se note la imagen, pero mas dificil de escanear con camaras simples. Automatica elige el minimo necesario para el texto</p>
      <div class="qg-row"><label>Correccion</label><select id="qg-e"><option value="H">Alta (30%)</option><option value="Q">Media (25%)</option><option value="M">Baja (15%)</option><option value="L">Minima (7%)</option></select></div>
      <p class="qg-d">Mayor = el QR sigue leyendose aunque este sucio o tapado, pero ocupa mas espacio</p>
      </div>
      <div id="qg-ga" style="display:none">
      <p class="qg-d">Aztec: el nucleo central (diana) siempre queda solido y sin margen. La camara nativa del iPhone no lo lee, hace falta una app lectora</p>
      <div class="qg-row"><label>Correccion</label><input type="range" id="qg-ae" min="10" max="95" value="50"><span id="qg-ae-l">50%</span></div>
      <p class="qg-d">Parte del simbolo reservada a correccion. Llega a 95% (repara casi la mitad). Mas = simbolo mas grande, con mas modulos para la imagen</p>
      <div class="qg-row"><label>Forma</label><select id="qg-af"><option value="">Automatica</option><option value="compact">Compacto</option><option value="full">Completo</option></select></div>
      <p class="qg-d">Compacto es mas chico pero admite pocos datos. Completo agrega la grilla de referencia</p>
      </div>
      <div class="qg-row"><label>Forma</label><select id="qg-sh"><option value="ci">Circulo</option><option value="rd">Redondeado</option><option value="sq">Cuadrado</option></select></div>
      <p class="qg-d">Cuadrado es lo mas parecido a un QR normal, mas facil de leer para camaras viejas</p>
      <div class="qg-row"><label>Punto min</label><input type="range" id="qg-mn" min="10" max="80" value="35"><span id="qg-mn-l">35%</span></div>
      <p class="qg-d">Mayor = los puntos claros de la imagen se ven mas grandes</p>
      <div class="qg-row"><label>Punto max</label><input type="range" id="qg-mx" min="60" max="110" value="100"><span id="qg-mx-l">100%</span></div>
      <p class="qg-d">Mayor = los puntos oscuros se agrandan y pueden tocar al vecino, complicando la lectura</p>
      <div class="qg-row"><label>Fantasma</label><input type="range" id="qg-gh" min="0" max="100" value="70"><span id="qg-gh-l">70%</span></div>
      <p class="qg-d">Mayor = se ve mas imagen de fondo entre los bloques del QR</p>
      <div class="qg-row"><label>Umbral</label><input type="range" id="qg-th" min="0" max="90" value="15"><span id="qg-th-l">15%</span></div>
      <p class="qg-d">Menor = mas partes de la imagen se unen entre bloques. Mayor = deja mas huecos en blanco</p>
      <div class="qg-row"><label>Zona calibracion</label><select id="qg-tm"><option value="0">Proteger (recomendado)</option><option value="1">Tambien pintar</option></select></div>
      <p class="qg-d">La cruz (QR) o la grilla (Aztec) que usa la camara para medir se deja en blanco por seguridad. Tambien pintar mete imagen ahi, se ve mas completo pero con mas riesgo de fallar la lectura</p>
      <div class="qg-row"><label>Saturacion</label><input type="range" id="qg-sa" min="0" max="100" value="40"><span id="qg-sa-l">40%</span></div>
      <p class="qg-d">Mayor = colores mas intensos y vivos</p>
      <div class="qg-row"><label>Color</label><select id="qg-co"><option value="1">De la imagen</option><option value="0">Monocromo</option></select></div>
      <p class="qg-d">Monocromo ignora los colores de la imagen, solo usa negro</p>
      <div class="qg-row"><label>Salida</label><select id="qg-px"><option value="512">512 px</option><option value="1024" selected>1024 px</option><option value="2048">2048 px</option></select></div>
      <p class="qg-d">Mayor = mas resolucion en el archivo final, mas pesado</p>
      <div class="qg-row"><label>Detalle img</label><input type="range" id="qg-sd" min="1" max="4" value="1"><span id="qg-sd-l">1x</span></div>
      <p class="qg-d">Mayor = se nota mas la imagen dentro de cada bloque, sin agrandar el QR</p>
      <div class="qg-row" style="margin-top:10px"><label>Posicion X</label><input type="range" id="qg-ix" min="-100" max="100" value="0"><span id="qg-ix-l">0%</span></div>
      <p class="qg-d">Mueve la imagen a la izquierda o derecha</p>
      <div class="qg-row"><label>Posicion Y</label><input type="range" id="qg-iy" min="-100" max="100" value="0"><span id="qg-iy-l">0%</span></div>
      <p class="qg-d">Mueve la imagen hacia arriba o abajo</p>
      <div class="qg-row"><label>Zoom</label><input type="range" id="qg-iz" min="20" max="300" value="100"><span id="qg-iz-l">100%</span></div>
      <p class="qg-d">Mayor = acerca la imagen (se ve mas grande y recortada)</p>
      <div class="qg-row"><label>Giro</label><input type="range" id="qg-ir" min="0" max="359" value="0"><span id="qg-ir-l">0°</span></div>
      <p class="qg-d">Rota la imagen dentro del QR (el QR en si nunca gira)</p>
      <div class="qg-row"><label>Ancho img</label><input type="range" id="qg-iw" min="20" max="300" value="100"><span id="qg-iw-l">100%</span></div>
      <p class="qg-d">Estira o achica la imagen solo a lo ancho</p>
      <div class="qg-row"><label>Alto img</label><input type="range" id="qg-ih" min="20" max="300" value="100"><span id="qg-ih-l">100%</span></div>
      <p class="qg-d">Estira o achica la imagen solo a lo alto</p>
      <div class="qr-ac" style="margin-top:8px"><button class="qr-btn" id="qg-irs">↺ Reiniciar posicion</button></div>
      </div>
    </details>
    <div class="qr-ac">
      <button class="qr-btn" id="qg-pn">⬇️ PNG</button>
      <button class="qr-btn" id="qg-sv">⬇️ SVG</button>
      <button class="qr-btn" id="qg-bk">↩ Volver</button>
    </div>
  </div>

  <div class="qr-area" id="qr-sa" style="display:none">
    <div id="qr-reader"></div>
    <button class="qr-cc" id="qr-cc">Cancelar</button>
  </div>

  <div id="qr-ra" style="display:none;padding:12px 0">
    <div class="qr-rt" id="qr-rt"></div>
    <div class="qr-dt" id="qr-dt"></div>
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
  const ZXW='https://cdn.jsdelivr.net/npm/zxing-wasm@3.1.4/dist/iife/reader/index.js';
  const CJS='https://cdn.jsdelivr.net/npm/cropperjs@1.6.3/dist/cropper.min.js';
  const CCS='https://cdn.jsdelivr.net/npm/cropperjs@1.6.3/dist/cropper.min.css';
  const QGL='https://cdn.jsdelivr.net/npm/qrcode-generator@2.0.4/dist/qrcode.js';
  const QGU='https://cdn.jsdelivr.net/npm/qrcode-generator@2.0.4/dist/qrcode_UTF8.js';
  const BWL='https://cdn.jsdelivr.net/npm/bwip-js@4.11.4/dist/bwip-js-min.js';
  const QG_HOME='https://cheagana.com';

  let _cam=null,_cp=null,_pf=null,_res='',_tt=null,_blobUrl=null;
  let QG_I=null,QG_IU=null,QG_TO=null,QG_M=null,QG_PD=null,QG_K=0;
  const _ld={};

  const $=id=>document.getElementById(id);
  const st=$('qr-st'),sa=$('qr-sa'),ra=$('qr-ra'),idle=$('qr-idle');
  const rt=$('qr-rt'),rl=$('qr-rl'),dt=$('qr-dt'),cb=$('qr-cb'),fb=$('qr-fb');
  const inEl=$('qr-in'),cm=$('qr-cm'),ci=$('qr-ci'),cif=$('qr-cif'),tk=$('qr-tk');
  const qg=$('qg'),qgc=$('qg-cv'),qgo=$('qg-ov'),dg=$('qg-dg'),mp=$('qg-mp');

  function QS_T(m){tk.textContent=m;tk.classList.add('show');clearTimeout(_tt);_tt=setTimeout(()=>tk.classList.remove('show'),2500);}

  function QS_SZ(raw){
    const t=raw.trim();
    try{const u=new URL(t);if(u.protocol==='http:'||u.protocol==='https:')return{text:t,url:u.href};}catch{}
    return{text:t,url:null};
  }

  function QS_ST(txt,mod){
    st.textContent=txt;
    st.className='qr-st'+(mod?' '+mod:'');
  }

  function QS_XI(r){try{return JSON.parse(r.extra||'{}');}catch{return{};}}

  function QS_DT(r){
    const u=QS_XI(r).UEC,p=[r.format];
    if(r.ecLevel)p.push('EC '+r.ecLevel);
    if(r.version)p.push('v'+r.version);
    if(typeof u==='number')p.push('EC libre '+Math.round(u*100)+'%');
    if(r.isInverted)p.push('invertido');
    if(r.isMirrored)p.push('espejo');
    return p.join('  ');
  }

  function QS_SR(r){
    const{text,url}=QS_SZ(r.text);
    _res=text;
    idle.style.display='none';sa.style.display='none';ra.style.display='';
    rt.textContent=text;dt.textContent=QS_DT(r);
    if(url){rl.href=url;rl.style.display='';}
    else{rl.style.display='none';rl.removeAttribute('href');}
    QS_ST('Resultado','ok');
    cb.disabled=false;fb.disabled=false;
  }

  function QS_LS(url){
    return _ld[url]||(_ld[url]=new Promise((res,rej)=>{
      const s=document.createElement('script');s.src=url;s.onload=res;
      s.onerror=()=>{delete _ld[url];s.remove();rej(new Error('carga'));};
      document.head.appendChild(s);
    }));
  }

  async function QS_LC(){
    if(window.Cropper)return;
    const l=document.createElement('link');l.rel='stylesheet';l.href=CCS;document.head.appendChild(l);
    await QS_LS(CJS);
  }

  async function QS_LZ(){if(!window.ZXingWASM)await QS_LS(ZXW);}

  async function QS_DC(inp,fast){
    await QS_LZ();
    const r=await ZXingWASM.readBarcodes(inp,{tryHarder:!fast,tryDenoise:!fast,maxNumberOfSymbols:1});
    return r.find(v=>v.isValid)||null;
  }

  function QS_KK(){
    if(!_cam)return;
    _cam.on=false;clearTimeout(_cam.t);
    _cam.s.getTracks().forEach(t=>t.stop());_cam.v.remove();_cam=null;
  }

  async function QS_SC(){
    QS_KK();
    cb.disabled=true;fb.disabled=true;
    idle.style.display='none';ra.style.display='none';
    QS_ST('Iniciando camara...','act');
    try{
      await QS_LZ();
      const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'},width:{ideal:1280},height:{ideal:720}},audio:false});
      const v=document.createElement('video');
      v.muted=true;v.playsInline=true;v.setAttribute('playsinline','');v.srcObject=s;
      const rd=$('qr-reader');rd.innerHTML='';rd.appendChild(v);
      const k={s,v,on:true,t:0,i:0};_cam=k;
      sa.style.display='';
      await v.play();
      const c=document.createElement('canvas'),x=c.getContext('2d',{willReadFrequently:true});
      QS_ST('Apunta al codigo...','act');cb.disabled=false;fb.disabled=false;
      const lp=async()=>{
        if(!k.on)return;
        if(v.readyState>=2&&v.videoWidth){
          const sc=Math.min(1,960/Math.max(v.videoWidth,v.videoHeight));
          c.width=Math.round(v.videoWidth*sc);c.height=Math.round(v.videoHeight*sc);
          x.drawImage(v,0,0,c.width,c.height);
          let r=null;
          try{r=await QS_DC(x.getImageData(0,0,c.width,c.height),k.i++%3!==2);}catch{}
          if(!k.on)return;
          if(r){QS_KK();QS_SR(r);return;}
        }
        k.t=setTimeout(lp,90);
      };
      lp();
    }catch(e){
      QS_KK();
      sa.style.display='none';idle.style.display='';
      cb.disabled=false;fb.disabled=false;
      QS_T('Error camara: '+(e.name||e.message||e));QS_ST('Lector QR');
    }
  }

  async function QS_SB(input){
    idle.style.display='none';
    QS_ST('Procesando...','act');
    try{
      const r=await QS_DC(input);
      if(r){QS_SR(r);return;}
      QS_T('No se encontro codigo');
    }catch(e){QS_T('Error: '+(e.message||e));}
    QS_ST('Lector QR');
    idle.style.display='';
    cb.disabled=false;fb.disabled=false;
  }

  function QS_CE(open){
    const el=document.getElementById('content');
    if(el)el.style.minHeight=open?(window.innerHeight*1.5)+'px':'';
  }

  function QS_CX(){
    if(_cp){_cp.destroy();_cp=null;}
    if(_blobUrl){URL.revokeObjectURL(_blobUrl);_blobUrl=null;}
    cm.classList.remove('open');document.body.style.overflow='';QS_CE(false);
  }

  async function QS_HF(file){
    if(!file.type.startsWith('image/')){QS_T('Solo imagenes');return;}
    _pf=file;
    QS_KK();
    cb.disabled=true;fb.disabled=true;
    try{await QS_LC();}catch{}
    cif.textContent=file.name;
    QS_CE(true);
    cm.classList.add('open');document.body.style.overflow='hidden';
    const url=URL.createObjectURL(file);
    _blobUrl=url;
    function QS_IC(){
      if(!window.Cropper)return;
      if(_cp){_cp.destroy();_cp=null;}
      _cp=new Cropper(ci,{viewMode:1,dragMode:'move',background:false,autoCropArea:.9,aspectRatio:NaN});
    }
    ci.onload=QS_IC;
    ci.src=url;
    if(ci.complete&&ci.naturalWidth)QS_IC();
  }

  $('qr-cok').onclick=()=>{
    if(!_cp){$('qr-ccl').onclick();return;}
    const canvas=_cp.getCroppedCanvas({imageSmoothingQuality:'high'});
    QS_CX();_pf=null;
    canvas.toBlob(b=>QS_SB(b),'image/png');
  };

  $('qr-csk').onclick=()=>{
    QS_CX();
    const f=_pf;_pf=null;
    if(f)QS_SB(f);
  };

  $('qr-ccl').onclick=()=>{
    QS_CX();
    _pf=null;cb.disabled=false;fb.disabled=false;
    if(!_res&&sa.style.display==='none'){idle.style.display='';QS_ST('Lector QR');}
  };

  $('qr-cc').onclick=()=>{
    QS_KK();
    sa.style.display='none';idle.style.display='';
    cb.disabled=false;fb.disabled=false;
    QS_ST('Lector QR');
  };

  cb.onclick=QS_SC;
  fb.onclick=()=>{
    if(QG_PD){const f=QG_PD;QG_PD=null;QS_HF(f);return;}
    inEl.click();
  };
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
    rt.textContent='';dt.textContent='';_res='';
    QS_ST('Lector QR');cb.disabled=false;fb.disabled=false;
  };

  function QG_PR(){
    return{k:$('qg-k').value,ae:+$('qg-ae').value,af:$('qg-af').value,
      ver:+$('qg-v').value,ecc:$('qg-e').value,sh:$('qg-sh').value,
      mn:+$('qg-mn').value/100,mx:+$('qg-mx').value/100,gh:+$('qg-gh').value/100,
      th:+$('qg-th').value/100,sat:+$('qg-sa').value/100,
      col:$('qg-co').value==='1',px:+$('qg-px').value,sd:+$('qg-sd').value,
      ix:+$('qg-ix').value/100,iy:+$('qg-iy').value/100,iz:+$('qg-iz').value/100,
      ir:+$('qg-ir').value*Math.PI/180,iw:+$('qg-iw').value/100,ih:+$('qg-ih').value/100,
      tm:$('qg-tm').value==='1'};
  }

  function QG_A1(n){
    const v=(n-17)/4;
    if(v<2)return[];
    const k=Math.floor(v/7)+2,last=v*4+10;
    if(k===2)return[6,last];
    const st=Math.ceil((last-6)/(k-1)/2)*2,o=[6];
    for(let i=1;i<k;i++)o.push(last-(k-1-i)*st);
    return o;
  }

  function QG_K1(r,c,n){
    return(r<8&&c<8)||(r<8&&c>=n-8)||(r>=n-8&&c<8);
  }

  function QG_K2(r,c,n,al){
    if(r===6||c===6)return true;
    for(let i=0;i<al.length;i++)for(let j=0;j<al.length;j++){
      const ar=al[i],ac=al[j];
      if((ar<8&&ac<8)||(ar<8&&ac>n-9)||(ar>n-9&&ac<8))continue;
      if(Math.abs(r-ar)<=2&&Math.abs(c-ac)<=2)return true;
    }
    return false;
  }

  function QG_MQ(txt,P){
    let q=null;
    for(const v of[P.ver,0]){
      try{const z=qrcode(v,P.ecc);z.addData(txt);z.make();q=z;break;}catch{}
    }
    if(!q)return null;
    const n=q.getModuleCount(),al=QG_A1(n);
    return{n,q:4,dk:(r,c)=>q.isDark(r,c),cr:(r,c)=>QG_K1(r,c,n),tm:(r,c)=>QG_K2(r,c,n,al)};
  }

  function QG_MA(txt,P){
    try{
      const o={bcid:'azteccode',text:txt,eclevel:P.ae};
      if(P.af)o.format=P.af;
      const a=bwipjs.raw(o)[0],n=a.pixx,c0=(n-1)/2;
      const at=(r,c)=>a.pixs[r*n+c];
      let full=true;
      for(let i=-6;i<=6&&full;i++)for(const[dr,dc]of[[-6,i],[6,i],[i,-6],[i,6]])if(!at(c0+dr,c0+dc)){full=false;break;}
      const cr=full?7:5;
      return{n,q:2,dk:(r,c)=>at(r,c)===1,
        cr:(r,c)=>Math.max(Math.abs(r-c0),Math.abs(c-c0))<=cr,
        tm:(r,c)=>full&&((r-c0)%16===0||(c-c0)%16===0)};
    }catch{return null;}
  }

  function QG_G1(img,sz,P){
    const c=document.createElement('canvas');c.width=c.height=sz;
    const x=c.getContext('2d',{willReadFrequently:true});
    const iw=img.naturalWidth||img.width,ih=img.naturalHeight||img.height;
    const s=Math.max(sz/iw,sz/ih)*(P?P.iz:1);
    const dw=iw*s*(P?P.iw:1),dh=ih*s*(P?P.ih:1);
    x.translate(sz/2+(P?P.ix*sz/2:0),sz/2+(P?P.iy*sz/2:0));
    if(P&&P.ir)x.rotate(P.ir);
    x.drawImage(img,-dw/2,-dh/2,dw,dh);
    return x.getImageData(0,0,sz,sz);
  }

  function QG_P1(g,c,r){
    const i=(r*g.width+c)*4;
    return{r:g.data[i],g:g.data[i+1],b:g.data[i+2],a:g.data[i+3]};
  }

  function QG_B1(p,amt){
    const mx=Math.max(p.r,p.g,p.b),mn=Math.min(p.r,p.g,p.b);
    if(mx===mn)return p;
    const f=1+amt,md=(mx+mn)/2;
    const cl=v=>Math.max(0,Math.min(255,Math.round(md+(v-md)*f)));
    return{r:cl(p.r),g:cl(p.g),b:cl(p.b)};
  }

  function QG_D1(x,cx,cy,rad,sh,col){
    if(rad<=0)return;
    x.fillStyle=col;
    if(sh==='sq'){x.fillRect(cx-rad,cy-rad,rad*2,rad*2);return;}
    if(sh==='rd'&&x.roundRect){x.beginPath();x.roundRect(cx-rad,cy-rad,rad*2,rad*2,rad*.5);x.fill();return;}
    x.beginPath();x.arc(cx,cy,rad,0,6.2832);x.fill();
  }

  function QG_MD(p,L,P){
    if(!P.col)return{r:17,g:17,b:17};
    const b=QG_B1(p,P.sat);
    if(L>.72){const m=(L-.72)/.28*.8;return{r:Math.round(b.r*(1-m)),g:Math.round(b.g*(1-m)),b:Math.round(b.b*(1-m))};}
    return b;
  }

  function QG_RG(c){return'rgb('+c.r+','+c.g+','+c.b+')';}

  function QG_GH(sp,c,r,cell,q,sd,grid,P){
    const sub=cell/sd,srad=sub/2;
    for(let sy=0;sy<sd;sy++)for(let sx=0;sx<sd;sx++){
      const px=QG_P1(grid,c*sd+sx,r*sd+sy);
      if(!px||px.a<=60)continue;
      const d=1-(.299*px.r+.587*px.g+.114*px.b)/255;
      if(d<=P.th)continue;
      const k=(d-P.th)/(1-P.th);
      const cc=P.col?QG_B1(px,P.sat):{r:17,g:17,b:17};
      sp((c+q)*cell+sx*sub+sub,(r+q)*cell+sy*sub+sub,srad*Math.min(.84,.12+.84*P.gh*Math.pow(k,.55)),QG_RG(cc));
    }
  }

  function QG_RD(sp,P,M){
    const n=M.n,q=M.q,cell=P.px/(n+q*2),maxR=cell/2,sd=P.sd||1;
    const grid=QG_I?QG_G1(QG_I,n*sd,P):null,gridM=QG_I?(sd>1?QG_G1(QG_I,n,P):grid):null;
    for(let r=0;r<n;r++)for(let c=0;c<n;c++){
      const cx=(c+q+.5)*cell,cy=(r+q+.5)*cell,crit=M.cr(r,c),dark=M.dk(r,c);
      if(dark&&crit){sp(cx,cy,maxR*.98,'#111');continue;}
      if(dark){
        const p=gridM?QG_P1(gridM,c,r):null,has=!!p&&p.a>60;
        const L=has?(.299*p.r+.587*p.g+.114*p.b)/255:0;
        const cc=has?QG_MD(p,L,P):{r:17,g:17,b:17};
        sp(cx,cy,maxR*(has?Math.min(1.02,P.mn+(P.mx-P.mn)*(1-L)):.98),QG_RG(cc));
      }else if(!crit&&(!M.tm(r,c)||P.tm)&&P.gh>0&&grid)QG_GH(sp,c,r,cell,q,sd,grid,P);
    }
  }

  function QG_R1(){
    if(!QG_M)return;
    const P=QG_PR();
    qgc.width=qgc.height=P.px;
    const x=qgc.getContext('2d');
    x.fillStyle='#fff';x.fillRect(0,0,P.px,P.px);
    QG_RD((cx,cy,rad,col)=>QG_D1(x,cx,cy,rad,P.sh,col),P,QG_M);
  }

  function QG_SV1(){
    if(!QG_M)return '';
    const P=QG_PR(),px=P.px;
    const o=['<svg xmlns="http://www.w3.org/2000/svg" width="'+px+'" height="'+px+'" viewBox="0 0 '+px+' '+px+'"><rect width="'+px+'" height="'+px+'" fill="#fff"/>'];
    const sp=(cx,cy,rad,col)=>{
      if(P.sh==='ci')o.push('<circle cx="'+cx.toFixed(1)+'" cy="'+cy.toFixed(1)+'" r="'+rad.toFixed(1)+'" fill="'+col+'"/>');
      else o.push('<rect x="'+(cx-rad).toFixed(1)+'" y="'+(cy-rad).toFixed(1)+'" width="'+(rad*2).toFixed(1)+'" height="'+(rad*2).toFixed(1)+'"'+(P.sh==='rd'?' rx="'+(rad*.5).toFixed(1)+'"':'')+' fill="'+col+'"/>');
    };
    QG_RD(sp,P,QG_M);
    o.push('</svg>');
    return o.join('');
  }

  function QD_CL(){
    qgo.getContext('2d').clearRect(0,0,qgo.width,qgo.height);
    dg.textContent='';mp.style.display='none';
  }

  async function QD_RUN(){
    if(!QG_M){QS_T('Escribi algo primero');return;}
    const M=QG_M,n=M.n,q=M.q,W=Math.min(qgc.width,1024),cell=W/(n+q*2),txt=$('qg-t').value.trim(),tb=$('qg-tb');
    tb.disabled=true;dg.textContent='Analizando...';
    try{
      const wc=document.createElement('canvas');wc.width=wc.height=W;
      const wx=wc.getContext('2d',{willReadFrequently:true});
      wx.drawImage(qgc,0,0,W,W);
      const d0=wx.getImageData(0,0,W,W),r0=await QS_DC(d0);
      const L=[];
      for(let r=0;r<n;r++)for(let c=0;c<n;c++){
        const x0=Math.floor((c+q+.4)*cell),x1=Math.max(x0+1,Math.ceil((c+q+.6)*cell));
        const y0=Math.floor((r+q+.4)*cell),y1=Math.max(y0+1,Math.ceil((r+q+.6)*cell));
        let s=0,k=0;
        for(let y=y0;y<y1;y++)for(let x=x0;x<x1;x++){const i=(y*W+x)*4;s+=.299*d0.data[i]+.587*d0.data[i+1]+.114*d0.data[i+2];k++;}
        L.push(s/k);
      }
      let t=127;
      for(let i=0;i<12;i++){
        let a=0,ka=0,b=0,kb=0;
        for(const v of L){if(v<t){a+=v;ka++;}else{b+=v;kb++;}}
        const nt=((ka?a/ka:0)+(kb?b/kb:255))/2;
        if(Math.abs(nt-t)<.5)break;
        t=nt;
      }
      qgo.width=qgo.height=W;
      const ox=qgo.getContext('2d'),cand=[];
      let wd=0,wk=0;
      for(let r=0;r<n;r++)for(let c=0;c<n;c++){
        const cr=M.cr(r,c);
        if((L[r*n+c]<t)===!!M.dk(r,c)){if(!cr)cand.push(r*n+c);continue;}
        if(cr)wk++;else wd++;
        ox.fillStyle=cr?'rgba(255,140,0,.6)':'rgba(255,0,60,.5)';
        ox.fillRect((c+q)*cell,(r+q)*cell,cell,cell);
      }
      const tot=wd+cand.length;
      let lo=0;
      if(r0){
        let s=7;
        const rn=()=>(s=(s*1664525+1013904223)>>>0)/4294967296;
        for(let i=cand.length-1;i>0;i--){const j=Math.floor(rn()*(i+1));[cand[i],cand[j]]=[cand[j],cand[i]];}
        let hi=Math.floor(cand.length/2);
        while(hi-lo>Math.max(1,cand.length*.005)){
          const m=(lo+hi)>>1;
          wx.putImageData(d0,0,0);
          for(let i=0;i<m;i++){
            const v=cand[i],r=(v/n)|0,c=v%n;
            wx.fillStyle=M.dk(r,c)?'#fff':'#111';
            wx.fillRect(Math.floor((c+q)*cell),Math.floor((r+q)*cell),Math.ceil(cell),Math.ceil(cell));
          }
          dg.textContent='Margen '+Math.round(m/cand.length*100)+'%...';
          if(await QS_DC(wx.getImageData(0,0,W,W)))lo=m;else hi=m;
        }
      }
      const u=r0?QS_XI(r0).UEC:null,bad=wd+wk;
      const ln=[r0?'Lee: SI'+(r0.text===txt?'':' (texto distinto)')+(typeof u==='number'?(u>.5?' - holgado':u>.2?' - justo':' - al limite'):''):'Lee: NO'];
      if(r0)ln.push(QS_DT(r0));
      ln.push('Modulos mal: '+bad+'/'+n*n+' ('+(bad/n/n*100).toFixed(1)+'%) datos '+wd+' criticos '+wk);
      if(r0)ln.push('Margen: +'+(lo/tot*100).toFixed(1)+'% extra ('+lo+' modulos)');
      dg.textContent=ln.join('\n');
      mp.style.display='';qgo.style.display='';
    }catch(e){dg.textContent='Error: '+(e.message||e);}
    tb.disabled=false;
  }

  async function QG_LQ(){
    if(window.qrcode)return;
    await QS_LS(QGL);await QS_LS(QGU);
  }

  function QG_U1(){
    clearTimeout(QG_TO);
    QG_TO=setTimeout(async()=>{
      const k=++QG_K,t=$('qg-t').value.trim();
      ['mn','mx','gh','th','sa','ae'].forEach(i=>{$('qg-'+i+'-l').textContent=$('qg-'+i).value+'%';});
      $('qg-sd-l').textContent=$('qg-sd').value+'x';
      ['ix','iy','iz','iw','ih'].forEach(i=>{$('qg-'+i+'-l').textContent=$('qg-'+i).value+'%';});
      $('qg-ir-l').textContent=$('qg-ir').value+'°';
      QD_CL();
      const P=QG_PR(),az=P.k==='az';
      $('qg-gq').style.display=az?'none':'';$('qg-ga').style.display=az?'':'none';
      if(!t){QG_M=null;const x=qgc.getContext('2d');qgc.width=qgc.height=320;x.clearRect(0,0,320,320);QS_ST('Crear QR');return;}
      if(az&&!window.bwipjs){
        QS_ST('Cargando Aztec...','act');
        try{await QS_LS(BWL);}catch{QS_T('No se pudo cargar Aztec');QS_ST('Crear QR');return;}
        if(k!==QG_K)return;
      }
      QG_M=az?QG_MA(t,P):QG_MQ(t,P);
      if(!QG_M){QS_ST('Texto muy largo','');QS_T(az?'No entra, baja la correccion':'No entra en ese tamano, subi la densidad');return;}
      QG_R1();
      QS_ST('Crear QR','ok');
    },90);
  }

  function QG_DL(blob,name){
    const u=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(u),15000);
  }

  function QG_IM1(f){
    if(!f||!f.type.startsWith('image/')){QS_T('Solo imagenes');return;}
    if(QG_IU)URL.revokeObjectURL(QG_IU);
    QG_IU=URL.createObjectURL(f);
    const im=new Image();
    im.onload=()=>{QG_I=im;$('qg-rb').style.display='';QG_U1();};
    im.onerror=()=>{QS_T('Imagen invalida');};
    im.src=QG_IU;
  }

  async function QG_ON(){
    QS_KK();
    QS_ST('Cargando...','act');
    try{await QG_LQ();}
    catch{QS_T('No se pudo cargar el generador');QS_ST('Lector QR');return;}
    idle.style.display='none';sa.style.display='none';ra.style.display='none';
    qg.style.display='';
    QS_ST('Crear QR');
    if(QG_PD){const f=QG_PD;QG_PD=null;if(!$('qg-t').value.trim())$('qg-t').value=QG_HOME;QG_IM1(f);}
    QG_U1();
  }

  async function QG_SH(blob,name,type){
    if(!navigator.canShare)return false;
    try{
      const f=new File([blob],name,{type});
      if(!navigator.canShare({files:[f]}))return false;
      await navigator.share({files:[f]});
      return true;
    }catch(e){return e&&e.name==='AbortError';}
  }

  async function QG_OUT(blob,name,type){
    if(await QG_SH(blob,name,type))return;
    QG_DL(blob,name);
  }

  function QG_PV(e){
    const its=e.clipboardData&&e.clipboardData.items;
    if(!its)return;
    for(let i=0;i<its.length;i++){
      if(!its[i].type||!its[i].type.startsWith('image/'))continue;
      const f=its[i].getAsFile();
      if(!f)continue;
      e.preventDefault();
      if(qg.style.display!=='none')QG_IM1(f);
      else{QG_PD=null;QS_HF(f);}
      return;
    }
  }

  function QG_OFF(){
    qg.style.display='none';idle.style.display='';
    QS_ST('Lector QR');
    cb.disabled=false;fb.disabled=false;
  }

  $('qg-ab').onclick=QG_ON;
  $('qg-bk').onclick=QG_OFF;
  $('qg-t').addEventListener('input',QG_U1);
  ['qg-k','qg-ae','qg-af','qg-v','qg-e','qg-sh','qg-mn','qg-mx','qg-gh','qg-th','qg-sa','qg-co','qg-px','qg-sd','qg-ix','qg-iy','qg-iz','qg-ir','qg-iw','qg-ih','qg-tm'].forEach(id=>{
    $(id).addEventListener('input',QG_U1);
  });
  $('qg-irs').onclick=()=>{
    ['qg-ix','qg-iy','qg-ir'].forEach(id=>{$(id).value=0;});
    ['qg-iz','qg-iw','qg-ih'].forEach(id=>{$(id).value=100;});
    QG_U1();
  };
  $('qg-ib').onclick=()=>$('qg-if').click();
  $('qg-if').onchange=e=>{const f=e.target.files[0];e.target.value='';QG_IM1(f);};
  $('qg-rb').onclick=()=>{
    QG_I=null;
    if(QG_IU){URL.revokeObjectURL(QG_IU);QG_IU=null;}
    $('qg-rb').style.display='none';QG_U1();
  };
  $('qg-pn').onclick=()=>{
    if(!QG_M){QS_T('Escribi algo primero');return;}
    qgc.toBlob(b=>{if(b)QG_OUT(b,'qr.png','image/png');},'image/png');
  };
  $('qg-sv').onclick=()=>{
    if(!QG_M){QS_T('Escribi algo primero');return;}
    QG_OUT(new Blob([QG_SV1()],{type:'image/svg+xml'}),'qr.svg','image/svg+xml');
  };
  $('qg-tb').onclick=QD_RUN;
  mp.onclick=()=>{qgo.style.display=qgo.style.display==='none'?'':'none';};

  document.addEventListener('paste',QG_PV);

  const cont=document.getElementById('content');
  if(cont)cont.addEventListener('contentUnload',()=>{
    QS_KK();QS_CX();
    document.removeEventListener('paste',QG_PV);
    if(QG_IU){URL.revokeObjectURL(QG_IU);QG_IU=null;}
    clearTimeout(_tt);clearTimeout(QG_TO);
  },{once:true});

  (async()=>{
    try{
      const d=await fetch('/_share_pending').then(r=>r.json());
      if(!d)return;
      const b=d.blobs&&d.blobs[0];
      if(b&&b.type&&b.type.startsWith('image/')){
        await fetch('/_share_clear',{method:'POST'});
        QG_PD=new File([new Uint8Array(b.data)],b.name||'imagen.png',{type:b.type});
        QS_ST('Imagen recibida: leer o crear','act');
        return;
      }
      const t=((d.url||'')+' '+(d.text||'')).trim();
      if(!t)return;
      await fetch('/_share_clear',{method:'POST'});
      await QG_ON();
      $('qg-t').value=t;
      QG_U1();
    }catch{}
  })();
})();
</script>


</br>

<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Applicaciones </a>

</br>

<div id="sh"></div>