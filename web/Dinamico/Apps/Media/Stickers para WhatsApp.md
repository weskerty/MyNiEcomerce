<div style="text-align:center;position:relative;padding-top:0;margin-top:0">
<style>
._ic{display:block;margin:0 auto 8px}
.sk-wrap{padding:12px;max-width:100%}
.sk-bar{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);border-radius:24px;padding:10px 16px;margin-bottom:14px;position:relative;overflow:hidden;transition:border-color .2s,box-shadow .2s}
.sk-bar:focus-within{border-color:rgba(56,189,248,.4);box-shadow:0 0 0 3px rgba(56,189,248,.08),0 8px 32px rgba(0,0,0,.25)}
.sk-bar input[type=text]{flex:1;background:none;border:none;outline:none;color:white;font-size:.9em;min-width:0;font-family:inherit;position:relative;z-index:1}
.sk-bar input[type=text]::placeholder{color:rgba(255,255,255,.45)}
.sk-home{font-size:1.3rem;text-decoration:none;flex-shrink:0;line-height:1;opacity:.8;transition:opacity .2s,transform .2s;position:relative;z-index:1}
.sk-home:hover{opacity:1;transform:scale(1.15)}
.sk-ib{background:none;border:none;color:white;cursor:pointer;font-size:1.15rem;flex-shrink:0;padding:0 2px;opacity:.7;transition:opacity .2s,transform .2s;line-height:1;position:relative;z-index:1;min-width:1.6em;text-align:center;font-family:inherit}
.sk-ib:hover{opacity:1;transform:scale(1.1)}
.sk-ib:disabled{opacity:.3;cursor:not-allowed;transform:none}
.sk-bar.sk-cd::after{content:'';position:absolute;left:0;top:0;height:100%;width:var(--sk-cd-p,0%);background:rgba(56,189,248,.13);transition:width .1s linear;pointer-events:none;z-index:0}
.sk-grid{display:grid;grid-template-columns:repeat(auto-fill,120px);min-width:calc(120px*2 + 8px*1);gap:8px;justify-content:center;margin-bottom:8px;min-height:40px}
.sk-grid-c{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:8px;min-height:40px;min-width:calc(120px*3 + 8px*2)}
.sk-it{width:120px;height:120px;border-radius:16px;overflow:hidden;cursor:pointer;position:relative;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.15);box-sizing:border-box;transition:transform .15s,border-color .15s,box-shadow .15s;will-change:transform;flex-shrink:0}
.sk-it img{width:100%;height:100%;object-fit:fill;display:block}
.sk-it:hover{transform:scale(1.05)}
.sk-it.sk-on{border-color:#4ade80;box-shadow:0 0 0 2px #4ade8055}
.sk-it.sk-on::after{content:'✅';position:absolute;top:4px;right:6px;font-size:1.1em}
.sk-it.sk-max{opacity:.45;cursor:not-allowed}
.sk-it.sk-max:hover{transform:none}
.sk-ad{grid-column:1/-1;display:flex;justify-content:center;overflow:hidden}
.gi-pg{display:flex;justify-content:center;align-items:center;gap:12px;margin-top:4px}
.gi-pg button{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:10px;color:white;padding:6px 18px;cursor:pointer;font-size:.85em;transition:background .2s}
.gi-pg button:hover{background:rgba(255,255,255,.22)}
.gi-pg button:disabled{opacity:.3;cursor:default}
.gi-pg span{color:rgba(255,255,255,.55);font-size:.82em}
.sk-foot{display:flex;justify-content:center;gap:10px;margin-top:14px}
.sk-cf{padding:14px 36px;border-radius:12px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.14);color:white;cursor:pointer;font-size:1.1em;transition:background .2s}
.sk-cf:hover:not(:disabled){background:rgba(255,255,255,.24)}
.sk-cf:disabled{opacity:.4;cursor:default}
.sk-wa{display:inline-block;padding:10px 28px;border-radius:12px;background:#25d366;color:white;text-decoration:none;font-size:.95em;font-weight:600;transition:background .2s}
.sk-wa:hover{background:#1ebe5d;color:white;text-decoration:none}
.sk-msg{text-align:center;color:rgba(255,255,255,.55);font-size:.9em;padding:20px 0;margin:0}
.sk-searching{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 0;gap:8px;width:100%;grid-column:1/-1}
.sk-searching span:first-child{font-size:3.5rem}
.sk-searching span:last-child{color:rgba(255,255,255,.6);font-size:.95em}
.sk-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:white;padding:10px 22px;border-radius:12px;font-size:.88em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999;white-space:nowrap}
.sk-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.sc-btn{padding:8px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.14);color:white;cursor:pointer;font-size:.9em;transition:background .2s}
.sc-btn:hover{background:rgba(255,255,255,.24)}
.sc-btn:disabled{opacity:.4;cursor:not-allowed}
.sc-fr{position:relative;width:120px;height:120px;border-radius:16px;overflow:hidden;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.15);cursor:pointer;flex-shrink:0}
.sc-fr img{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}
.sc-fr .sc-rm{position:absolute;top:2px;right:2px;background:rgba(0,0,0,.7);border:none;color:white;border-radius:50%;width:18px;height:18px;font-size:10px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1}
.sc-fr.sc-done{border-color:#4ade80}
.sc-modal{display:none;position:fixed;inset:0;z-index:200;align-items:center;justify-content:center;flex-direction:column;gap:12px}
.sc-modal.open{display:flex}
.sc-crop-bg{background:rgba(0,0,0,.88)}
.sc-proc-bg{background:rgba(0,0,0,.88)}
.sc-crop-wrap{position:relative;max-width:min(90vw,420px);max-height:60vh;overflow:hidden}
.sc-crop-wrap img{display:block;max-width:100%;max-height:60vh}
.sc-crop-info{color:rgba(255,255,255,.55);font-size:.8em;margin-top:4px}
.sc-pbar-w{width:240px;height:8px;background:rgba(255,255,255,.1);border-radius:4px;overflow:hidden}
.sc-pbar{height:100%;background:#4ade80;width:0%;transition:width .3s}
.sc-plbl{color:rgba(255,255,255,.8);font-size:.9em}
</style>

<img class="_ic" src="web/otros/Archivos/Imagenes/Permanente/ICONS/ICON-Klipy.avif" width="90px">

<div class="sk-wrap" id="sk-search">
  <div class="sk-bar" id="sk-bar">
    <a class="sk-home" href="web/es.html">🏠</a>
    <input id="sk-q" type="text" placeholder="Buscar en Klipy o pega enlace de Stickers TG...">
    <button class="sk-ib" id="sk-btn">🔍</button>
    <button class="sk-ib" id="sk-crear">📤</button>
    <input type="file" id="sc-in" accept="image/*,video/mp4" multiple style="display:none">
  </div>
  <div id="sk-grid" class="sk-grid"></div>
  <div id="sk-pg" class="gi-pg"></div>
  <div class="sk-foot">
    <button id="sk-cf" class="sk-cf" disabled>👉 Confirmar ✅ (<span id="sk-n">0</span>) 👈</button>
    <a id="wa-btn" class="sk-wa" style="display:none" href="#" target="_blank">Agregar a WhatsApp</a>
    <button id="sc-cf" class="sc-btn" style="display:none" disabled>👉 Enviar 👈</button>
  </div>
</div>

<div class="sk-toast" id="sk-toast"></div>

<div class="sc-modal sc-crop-bg" id="sc-crop-modal">
  <div class="sc-crop-wrap"><img id="sc-crop-img" src=""></div>
  <div class="sc-crop-info" id="sc-crop-info"></div>
  <div style="display:flex;gap:10px;margin-top:8px">
    <button class="sc-btn" id="sc-crop-ok">Recortar</button>
    <button class="sc-btn" id="sc-crop-skip">Saltar</button>
  </div>
</div>

<div class="sc-modal sc-proc-bg" id="sc-prog-modal">
  <span id="sc-ck" style="font-size:2.5rem">🕐</span>
  <div class="sc-plbl" id="sc-prog-lbl">📤 Subiendo...</div>
  <div class="sc-pbar-w"><div class="sc-pbar" id="sc-pbar"></div></div>
</div>

<script>
(function(){
  const PG_H=18,PG_V=6,MAX_SEL=30,CD_MS=10000,ADS=false;
  const MAX_F=30,MAX_SZ=20*1024*1024,DIM=256,TARGET=900*1024;
  const CK=['🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛'];
  let PG=window.innerHeight>window.innerWidth?PG_V:PG_H;
  let _ckiv=null,_cki=0;
  function ckStart(el){if(_ckiv)clearInterval(_ckiv);_cki=0;_ckiv=setInterval(()=>el.textContent=CK[_cki++%12],150);}
  function ckStop(){if(_ckiv){clearInterval(_ckiv);_ckiv=null;}}

  let R=[],S=new Set(),pg=0,cdEnd=0,cdRaf=null;
  let frames=[],cropQ=[],cropper=null,mode='search';

  const gEl=document.getElementById('sk-grid'),pgEl=document.getElementById('sk-pg'),tEl=document.getElementById('sk-toast');
  const cfEl=document.getElementById('sk-cf'),waBtn=document.getElementById('wa-btn');
  const scCf=document.getElementById('sc-cf');
  const inEl=document.getElementById('sc-in');
  const cropM=document.getElementById('sc-crop-modal'),cropImg=document.getElementById('sc-crop-img');
  const cropInfo=document.getElementById('sc-crop-info'),cropOk=document.getElementById('sc-crop-ok'),cropSkip=document.getElementById('sc-crop-skip');
  const progM=document.getElementById('sc-prog-modal'),pBar=document.getElementById('sc-pbar'),pLbl=document.getElementById('sc-prog-lbl');
  const qEl=document.getElementById('sk-q');
  let _tt;

  const TG_IP=q=>/(?:t\.me\/addstickers\/|addstickers\/)/.test(q);
  const TG_PN=q=>{const m=q.match(/(?:t\.me\/addstickers\/|addstickers\/)([^/?#\s]+)/);return m?m[1]:q;};

  function getCID(){let id=localStorage.getItem('sk_cid');if(!id){id=crypto.randomUUID();localStorage.setItem('sk_cid',id);}return id;}
  function toast(m){tEl.textContent=m;tEl.classList.add('show');clearTimeout(_tt);_tt=setTimeout(()=>tEl.classList.remove('show'),2200);}
  function setProg(p,l){pBar.style.width=p+'%';if(l!=null)pLbl.textContent=l;}

  function setMode(m){
    mode=m;const isC=m==='create';
    gEl.className=isC?'sk-grid-c':'sk-grid';
    pgEl.innerHTML='';
    cfEl.style.display=isC?'none':'';
    waBtn.style.display='none';
    scCf.style.display=isC?'':'none';
  }

  function startCD(){
    cdEnd=Date.now()+CD_MS;
    qEl.readOnly=true;qEl.blur();
    const btn=document.getElementById('sk-btn'),bar=document.getElementById('sk-bar');
    btn.disabled=true;bar.classList.add('sk-cd');
    function tick(){const rem=cdEnd-Date.now();if(rem<=0){btn.disabled=false;bar.classList.remove('sk-cd');bar.style.removeProperty('--sk-cd-p');btn.textContent='🔍';qEl.readOnly=false;cdRaf=null;return;}
    bar.style.setProperty('--sk-cd-p',((1-rem/CD_MS)*100).toFixed(1)+'%');btn.textContent=Math.ceil(rem/1000)+'s';cdRaf=requestAnimationFrame(tick);}
    cdRaf=requestAnimationFrame(tick);
  }

  function updCf(){document.getElementById('sk-n').textContent=S.size;cfEl.disabled=S.size===0;}

  function resetWaState(){
    S.clear();
    gEl.querySelectorAll('.sk-it.sk-on,.sk-it.sk-max').forEach(e=>e.classList.remove('sk-on','sk-max'));
    waBtn.style.display='none';waBtn.href='#';
    cfEl.innerHTML='👉 Confirmar ✅ (<span id="sk-n">0</span>) 👈';
    cfEl.disabled=true;cfEl.style.display='';
  }

  function renderPage(p){
    pg=p;const sl=p*PG,chunk=R.slice(sl,sl+PG);gEl.innerHTML='';
    chunk.forEach(item=>{
      if(item.type==='ad'){
        if(!item.content||!ADS)return;
        const d=document.createElement('div');d.className='sk-ad';d.innerHTML=item.content;
        const vis=[...d.querySelectorAll('*')].some(el=>el.style.display!=='none'&&el.style.opacity!=='0'&&el.style.visibility!=='hidden');
        if(vis)gEl.appendChild(d);return;
      }
      const url=item.url;if(!url)return;
      const sel=S.has(url),atMax=!sel&&S.size>=MAX_SEL;
      const d=document.createElement('div');d.className='sk-it'+(sel?' sk-on':'')+(atMax?' sk-max':'');
      const img=document.createElement('img');img.src=item.blur_preview||'';img.decoding='async';
      if(!atMax||sel){const r=new Image();r.onload=()=>{img.src=url};r.src=url;}
      d.appendChild(img);
      if(!atMax||sel){d.onclick=()=>{
        const was=S.has(url);if(was){S.delete(url);d.classList.remove('sk-on','sk-max');gEl.querySelectorAll('.sk-it.sk-max').forEach(e=>e.classList.remove('sk-max'));}
        else{if(S.size>=MAX_SEL){toast('Solo '+MAX_SEL+' a la vez');return;}S.add(url);d.classList.add('sk-on');if(S.size>=MAX_SEL)gEl.querySelectorAll('.sk-it:not(.sk-on)').forEach(e=>e.classList.add('sk-max'));}
        updCf();
      };}
      gEl.appendChild(d);
    });
    renderPg();
    document.getElementById('sk-search').scrollIntoView({behavior:'smooth',block:'start'});
  }

  function renderPg(){
    pgEl.innerHTML='';const total=Math.ceil(R.length/PG);if(total<=1)return;
    const bP=document.createElement('button');bP.textContent='Anterior';bP.disabled=pg===0;bP.onclick=()=>renderPage(pg-1);
    const bN=document.createElement('button');bN.textContent='Siguiente';bN.disabled=pg>=total-1;bN.onclick=()=>renderPage(pg+1);
    const sp=document.createElement('span');sp.textContent=(pg+1)+'/'+total;
    pgEl.appendChild(bP);pgEl.appendChild(sp);pgEl.appendChild(bN);
  }

  async function doFetch(q){
    if(mode==='create'){frames.forEach(f=>{URL.revokeObjectURL(f.preview);if(f.croppedBlob)URL.revokeObjectURL(f.croppedBlob);});frames=[];cropQ=[];}
    setMode('search');S.clear();updCf();
    gEl.innerHTML='<div class="sk-searching"><span id="sk-ck">🕐</span><span>Buscando</span></div>';
    ckStart(document.getElementById('sk-ck'));
    pgEl.innerHTML='';
    const params=new URLSearchParams({cid:getCID()});if(q)params.set('q',q);
    try{
      const j=await fetch('/api/stickers?'+params).then(r=>r.json());
      ckStop();R=j.data||[];pg=0;
      R.length?renderPage(0):(gEl.innerHTML='<p class="sk-msg">Sin resultados</p>');
    }catch(e){ckStop();toast('Error: '+e.message);gEl.innerHTML='';}
  }

  async function TG_DF(q){
    const pack=TG_PN(q);
    if(mode==='create'){frames.forEach(f=>{URL.revokeObjectURL(f.preview);if(f.croppedBlob)URL.revokeObjectURL(f.croppedBlob);});frames=[];cropQ=[];}
    setMode('search');S.clear();updCf();
    cfEl.style.display='none';waBtn.style.display='none';
    gEl.innerHTML='<div class="sk-searching"><span id="sk-ck">🕐</span><span>Descargando pack TG...</span></div>';
    ckStart(document.getElementById('sk-ck'));
    pgEl.innerHTML='';
    try{
      const res=await fetch('/api/stickers',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({pack})});
      ckStop();
      if(!res.ok)throw new Error(res.status);
      const {sid}=await res.json();
      gEl.innerHTML='<p class="sk-msg">✅ Pack listo</p>';
      waBtn.href='https://wa.me/595973254371?text=CALS='+sid;
      waBtn.style.display='';
      waBtn.onclick=e=>{e.preventDefault();window.open(waBtn.href,'_blank');resetWaState();doFetch('');};
    }catch(e){
      ckStop();cfEl.style.display='';gEl.innerHTML='';
      toast('Error TG: '+e.message);
    }
  }

  function search(){
    if(Date.now()<cdEnd)return;const q=qEl.value.trim();if(!q)return;
    if(TG_IP(q)){TG_DF(q);return;}
    startCD();doFetch(q);
  }

  async function confirmSearch(){
    cfEl.disabled=true;ckStart(cfEl);
    try{
      const res=await fetch('/api/stickers',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({urls:[...S]})});
      const {sid}=await res.json();
      ckStop();cfEl.style.display='none';
      waBtn.href='https://wa.me/595973254371?text=CALS='+sid;
      waBtn.style.display='';
      waBtn.onclick=(e)=>{e.preventDefault();window.open(waBtn.href,'_blank');resetWaState();};
    }catch(e){ckStop();cfEl.innerHTML='👉 Confirmar ✅ (<span id="sk-n">'+S.size+'</span>) 👈';cfEl.disabled=false;}
  }

  function renderFrames(){
    gEl.innerHTML='';
    if(!frames.length){setMode('search');if(R.length)renderPage(pg);return;}
    frames.forEach((f,i)=>{
      const d=document.createElement('div');
      d.className='sc-fr'+((f.croppedBlob||f.cropData)?' sc-done':'');
      const img=document.createElement('img');img.src=f.preview;
      const rm=document.createElement('button');rm.className='sc-rm';rm.textContent='x';
      rm.onclick=e=>{e.stopPropagation();URL.revokeObjectURL(f.preview);if(f.croppedBlob)URL.revokeObjectURL(f.croppedBlob);frames.splice(i,1);renderFrames();};
      d.appendChild(img);d.appendChild(rm);
      if(!f.isWebp)d.onclick=()=>{cropQ=[f];nextCrop();};
      gEl.appendChild(d);
    });
    scCf.disabled=false;
  }

  function loadCropperJS(){
    return new Promise((res,rej)=>{
      if(window.Cropper){res();return;}
      const l=document.createElement('link');l.rel='stylesheet';l.href='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.2/cropper.min.css';document.head.appendChild(l);
      const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.2/cropper.min.js';s.onload=res;s.onerror=rej;document.head.appendChild(s);
    });
  }

  function initCropper(){
    loadCropperJS().then(()=>{
      if(cropper){cropper.destroy();cropper=null;}
      cropper=new Cropper(cropImg,{viewMode:1,dragMode:'move',background:false,autoCropArea:.9});
    });
  }

  function nextCrop(){
    if(!cropQ.length){cropM.classList.remove('open');document.body.style.overflow='';return;}
    const fr=cropQ[0],idx=frames.indexOf(fr)+1;
    cropInfo.textContent=idx+' / '+frames.length+(fr.isVid?' 🎬':'');
    cropM.classList.add('open');document.body.style.overflow='hidden';
    if(cropper){cropper.destroy();cropper=null;}
    const src=fr.croppedBlob?URL.createObjectURL(fr.croppedBlob):fr.preview;
    cropImg.onload=initCropper;cropImg.src=src;
    if(cropImg.complete&&cropImg.naturalWidth)initCropper();
  }

  cropOk.onclick=()=>{
    if(!cropper)return;
    const fr=cropQ.shift();if(!fr)return;
    const doNext=()=>{
      if(cropper){cropper.destroy();cropper=null;}
      if(!cropQ.length&&frames.indexOf(fr)<frames.length-1){const next=frames[frames.indexOf(fr)+1];if(next)cropQ.push(next);}
      nextCrop();
    };
    if(fr.isVid){
      const d=cropper.getData(true);
      fr.cropData={x:d.x,y:d.y,w:d.width,h:d.height};
      const el=gEl.children[frames.indexOf(fr)];if(el)el.classList.add('sc-done');
      doNext();
    }else{
      cropper.getCroppedCanvas({imageSmoothingQuality:'high'}).toBlob(blob=>{
        if(fr.croppedBlob)URL.revokeObjectURL(fr.croppedBlob);
        fr.croppedBlob=blob;fr.preview=URL.createObjectURL(blob);
        const el=gEl.children[frames.indexOf(fr)];
        if(el){el.querySelector('img').src=fr.preview;el.classList.add('sc-done');}
        doNext();
      },'image/webp',.92);
    }
  };

  cropSkip.onclick=()=>{
    const fr=cropQ.shift();if(cropper){cropper.destroy();cropper=null;}
    if(!cropQ.length&&frames.indexOf(fr)<frames.length-1){const next=frames[frames.indexOf(fr)+1];if(next)cropQ.push(next);}
    nextCrop();
  };

  async function getVidThumb(file){
    return new Promise(res=>{
      const v=document.createElement('video'),u=URL.createObjectURL(file);
      v.src=u;v.muted=true;v.playsInline=true;v.currentTime=0.1;
      v.onloadeddata=()=>{
        const c=document.createElement('canvas');c.width=DIM;c.height=DIM;
        c.getContext('2d').drawImage(v,0,0,DIM,DIM);
        URL.revokeObjectURL(u);c.toBlob(b=>res(URL.createObjectURL(b)),'image/webp',.7);
      };
      v.onerror=()=>{URL.revokeObjectURL(u);res('');};
    });
  }

  async function mp4ToWebM(file,cropData){
    return new Promise((res,rej)=>{
      const v=document.createElement('video'),u=URL.createObjectURL(file);
      v.src=u;v.muted=true;v.playsInline=true;v.loop=false;
      const c=document.createElement('canvas');c.width=DIM;c.height=DIM;
      const ctx=c.getContext('2d');
      v.onloadedmetadata=()=>{
        const mime=MediaRecorder.isTypeSupported('video/webm;codecs=vp9')?'video/webm;codecs=vp9':'video/webm';
        const chunks=[],stream=c.captureStream(15);
        const rec=new MediaRecorder(stream,{mimeType:mime});
        rec.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};
        rec.onstop=()=>{stream.getTracks().forEach(t=>t.stop());URL.revokeObjectURL(u);res(new Blob(chunks,{type:'video/webm'}));};
        rec.start(200);
        const stop=()=>{if(rec.state!=='inactive')rec.stop();};
        v.onended=stop;
        const drawFrame=()=>{
          if(cropData){
            const sx=cropData.x*(v.videoWidth/DIM),sy=cropData.y*(v.videoHeight/DIM);
            const sw=cropData.w*(v.videoWidth/DIM),sh=cropData.h*(v.videoHeight/DIM);
            ctx.drawImage(v,sx,sy,sw,sh,0,0,DIM,DIM);
          }else{ctx.drawImage(v,0,0,DIM,DIM);}
        };
        if(v.requestVideoFrameCallback){
          const draw=()=>{drawFrame();if(!v.ended)v.requestVideoFrameCallback(draw);};
          v.requestVideoFrameCallback(draw);
        }else{
          const iv=setInterval(()=>{if(v.ended)clearInterval(iv);else drawFrame();},1000/15);
          rec.addEventListener('stop',()=>clearInterval(iv),{once:true});
        }
        v.play().catch(rej);
      };
      v.onerror=()=>{URL.revokeObjectURL(u);rej(new Error('Video load failed'));};
    });
  }

  async function addFiles(list){
    const valid=[...list].filter(f=>{
      const ok=f.type.startsWith('image/')||f.type==='video/mp4';
      if(!ok){toast('Formato no soportado: '+f.name);return false;}
      if(f.size>MAX_SZ){toast('Max 20MB: '+f.name);return false;}
      return true;
    });
    if(frames.length+valid.length>MAX_F){toast('Max '+MAX_F+' archivos');valid.length=Math.max(0,MAX_F-frames.length);}
    const nf=await Promise.all(valid.map(async f=>{
      const isVid=f.type==='video/mp4';const isWebp=f.type==='image/webp';
      const preview=isVid?await getVidThumb(f):URL.createObjectURL(f);
      return{file:f,preview,croppedBlob:null,cropData:null,isVid,isWebp};
    }));
    frames.push(...nf);renderFrames();
    const forCrop=nf.filter(f=>!f.isWebp);
    if(forCrop.length){const wasEmpty=!cropQ.length;cropQ.push(...forCrop);if(wasEmpty)nextCrop();}
  }

  async function toWebp(blob){
    const ql=[.92,.7,.5,.3,.15,.08,.04,.02,.01];
    for(const q of ql){
      const out=await new Promise(res=>{
        const u=URL.createObjectURL(blob);const img=new Image();
        img.onload=()=>{const c=document.createElement('canvas');c.width=DIM;c.height=DIM;c.getContext('2d').drawImage(img,0,0,DIM,DIM);URL.revokeObjectURL(u);c.toBlob(res,'image/webp',q);};img.src=u;
      });
      if(out.size<=TARGET)return out;
    }
    return new Promise(res=>{
      const u=URL.createObjectURL(blob);const img=new Image();
      img.onload=()=>{const c=document.createElement('canvas');c.width=128;c.height=128;c.getContext('2d').drawImage(img,0,0,128,128);URL.revokeObjectURL(u);c.toBlob(res,'image/webp',.05);};img.src=u;
    });
  }

  scCf.onclick=async()=>{
    scCf.disabled=true;progM.classList.add('open');document.body.style.overflow='hidden';
    ckStart(document.getElementById('sc-ck'));setProg(0,'Procesando...');
    try{
      const form=new FormData();
      for(let i=0;i<frames.length;i++){
        setProg(Math.round(i/frames.length*80),'Procesando '+(i+1)+'/'+frames.length);
        const fr=frames[i];
        if(fr.isVid){
          const webm=await mp4ToWebM(fr.file,fr.cropData||null);
          form.append('files',webm,fr.file.name.replace(/\.[^.]+$/,'.webm'));
        }else if(fr.isWebp&&!fr.croppedBlob){
          form.append('files',fr.file,fr.file.name);
        }else{
          const webp=await toWebp(fr.croppedBlob||fr.file);
          form.append('files',webp,fr.file.name.replace(/\.[^.]+$/,'.webp'));
        }
      }
      setProg(85,'Subiendo...');
      const res=await fetch('/api/stickers',{method:'POST',body:form});
      const {sid}=await res.json();
      ckStop();setProg(100,'Listo');progM.classList.remove('open');document.body.style.overflow='';
      scCf.style.display='none';
      waBtn.href='https://wa.me/595973254371?text=CALS='+sid;
      waBtn.style.display='';
      waBtn.onclick=(e)=>{
        e.preventDefault();window.open(waBtn.href,'_blank');
        frames.forEach(f=>{URL.revokeObjectURL(f.preview);if(f.croppedBlob)URL.revokeObjectURL(f.croppedBlob);});
        frames=[];cropQ=[];waBtn.href='#';
        setMode('search');
        if(R.length)renderPage(pg);else doFetch('');
      };
    }catch(e){ckStop();progM.classList.remove('open');document.body.style.overflow='';toast('Error: '+e.message);scCf.disabled=false;}
  };

  document.getElementById('sk-btn').onclick=search;
  qEl.addEventListener('keydown',e=>{if(e.key==='Enter')search();});
  cfEl.onclick=confirmSearch;
  document.getElementById('sk-crear').onclick=()=>inEl.click();
  inEl.onchange=e=>{
    if(!e.target.files.length)return;
    setMode('create');addFiles(e.target.files);inEl.value='';
  };

  const _ori=window.matchMedia('(orientation: portrait)');
  _ori.addEventListener('change',e=>{
    PG=e.matches?PG_V:PG_H;
    if(mode==='search'&&R.length)renderPage(0);
  });

  const cont=document.getElementById('content');
  if(cont)cont.addEventListener('contentUnload',()=>{
    frames.forEach(f=>{URL.revokeObjectURL(f.preview);if(f.croppedBlob)URL.revokeObjectURL(f.croppedBlob);});
    frames=[];ckStop();if(cdRaf)cancelAnimationFrame(cdRaf);
    _ori.removeEventListener('change',arguments.callee);
  },{once:true});

  (async()=>{
    try{
      const r=await fetch('/_share_pending');
      const d=await r.json();
      if(!d||(!d.blobs?.length&&!d.url&&!d.text)){doFetch('');return;}
      await fetch('/_share_clear',{method:'POST'});
      if(d.blobs?.length){
        const files=d.blobs.map(b=>new File([new Uint8Array(b.data)],b.name,{type:b.type}));
        setMode('create');await addFiles(files);
      }else if(d.url||d.text){
        const q=(d.url||d.text).trim();
        if(TG_IP(q)){qEl.value=q;TG_DF(q);}
        else if(d.url){toast('No compatible');doFetch('');}
        else doFetch('');
      }else doFetch('');
    }catch{doFetch('');}
  })();
})();
</script>

</br>

<details>
  <summary style="font-size: 1.5em; font-weight: bold;"> 🤔 ¿Como Usar?</summary>

<iframe width="560" height="315" src="https://www.youtube.com/embed/7J9x16irofc?si=cp_GO720xz8qq6R-&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</details>

</br>

<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Applicaciones </a>

</br>

<div id="sh"></div>
