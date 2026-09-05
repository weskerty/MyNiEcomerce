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
.sc-lv{display:none;border-radius:10px;width:min(180px,70vw);height:min(180px,70vw)}
.sc-ov-wrap{position:relative;flex-shrink:0}
.sc-ov-wrap canvas{display:block;border-radius:12px;touch-action:none;width:min(256px,85vw);height:min(256px,85vw)}
.sc-ov-it{position:absolute;touch-action:none;user-select:none;cursor:move}
.sc-ov-it img{display:block;pointer-events:none;border-radius:4px}
.ov-rm{position:absolute;top:-7px;right:-7px;background:rgba(0,0,0,.85);border:none;color:white;border-radius:50%;width:18px;height:18px;font-size:10px;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:2;line-height:1;padding:0}
.sc-ov-bar{margin-bottom:0;width:min(280px,85vw);max-width:100%}
.sc-ov-res{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;width:min(280px,85vw);max-height:160px;overflow-y:auto}
.ov-it{width:80px;height:80px;border-radius:12px;overflow:hidden;cursor:pointer;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.15);box-sizing:border-box;transition:transform .15s,border-color .15s;flex-shrink:0}
.ov-it img{width:100%;height:100%;object-fit:cover;display:block}
.ov-it:hover{transform:scale(1.05);border-color:rgba(56,189,248,.5)}
.sc-ov-it.ov-sel{outline:2px solid rgba(56,189,248,.8);outline-offset:2px;border-radius:4px}
.sc-ov-szrow{display:flex;align-items:center;gap:8px}
.sc-ov-szrow span{color:rgba(255,255,255,.6);font-size:.82em;min-width:52px;text-align:center}
.sc-ovb{position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.65);border:none;color:white;font-size:.7em;cursor:pointer;padding:3px 0;z-index:1;border-radius:0 0 14px 14px}
.sc-fr.ov-on .sc-ovb{background:rgba(56,189,248,.75)}
#sc-ov-modal{overflow-y:auto;padding:16px 0}
</style>

<img class="_ic" src="web/otros/Archivos/Imagenes/Permanente/ICONS/ICON-Klipy.avif" width="90px">

<div class="sk-wrap" id="sk-search">
  <div class="sk-bar" id="sk-bar">
    <a class="sk-home" href="web/es.html">🏠</a>
    <input id="sk-q" type="text" placeholder="Buscar en Klipy o pega enlace de Stickers Telegram...">
    <button class="sk-ib" id="sk-btn">🔍</button>
    <button class="sk-ib" id="sk-crear">📤</button>
    <input type="file" id="sc-in" accept="image/*,video/mp4" multiple style="display:none">
  </div>
  <div id="sk-grid" class="sk-grid"></div>
  <div id="sk-pg" class="PG1"></div>
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
  <img id="sc-ck" class="wait-anim" src="">
  <canvas id="sc-lv" class="sc-lv" width="256" height="256"></canvas>
  <div class="sc-plbl" id="sc-prog-lbl">📤 Subiendo...</div>
  <div class="sc-pbar-w"><div class="sc-pbar" id="sc-pbar"></div></div>
</div>

<div class="sc-modal sc-proc-bg" id="sc-ov-modal">
  <div class="sc-ov-wrap" id="sc-ov-wrap">
    <canvas id="sc-ov-c" width="256" height="256"></canvas>
  </div>
  <div class="sc-ov-szrow">
    <button class="sc-btn" id="ov-sm">−</button>
    <span id="ov-sz-lbl">64px</span>
    <button class="sc-btn" id="ov-lg">+</button>
  </div>
  <div class="sk-bar sc-ov-bar" id="sc-ov-bar">
    <input id="sc-ov-q" type="text" placeholder="Buscar en Klipy o subir imagen...">
    <button class="sk-ib" id="sc-ov-sb">🔍</button>
    <button class="sk-ib" id="sc-ov-up">📁</button>
    <input type="file" id="sc-ov-fi" accept="image/*" style="display:none">
  </div>
  <div class="sc-ov-res" id="sc-ov-res"></div>
  <div style="display:flex;gap:10px;margin-top:4px">
    <button class="sc-btn" id="sc-ov-ok">✅ Listo</button>
    <button class="sc-btn" id="sc-ov-cx">Cancelar</button>
  </div>
</div>

<script>
(function(){
  const ITEM=120,GAP=8,PG_FALLBACK=6,MAX_SEL=10,CD_MS=10000,ADS=false;
  const MAX_F=30,MAX_SZ=20*1024*1024,DIM=256,TARGET=900*1024;
  const FF_B='https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.15/dist/umd';
  const FF_C='https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd';
  const MAXFR=150,VID_MAX=10,VID_FPS=15;
  let FFP=null;
  const WA=window.__CFG?.waitAnim||'';
  document.getElementById('sc-ck').src=WA;
  const CK=['🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛'];
  let _ckiv=null,_cki=0;
  function ckStart(el){if(_ckiv)clearInterval(_ckiv);_cki=0;_ckiv=setInterval(()=>el.textContent=CK[_cki++%12],150);}
  function ckStop(){if(_ckiv){clearInterval(_ckiv);_ckiv=null;}}

  let R=[],S=new Set(),pg=0,cdEnd=0,cdRaf=null;
  let frames=[],cropQ=[],cropper=null,mode='search';
  let ovFr=null,ovNS=64,ovSel=-1;
  let _cropImgUrl=null;

  const gEl=document.getElementById('sk-grid'),pgEl=document.getElementById('sk-pg'),tEl=document.getElementById('sk-toast');
  const cfEl=document.getElementById('sk-cf'),waBtn=document.getElementById('wa-btn');
  const scCf=document.getElementById('sc-cf');
  const inEl=document.getElementById('sc-in');
  let _GF=window.GridFit||null,_GFp=null;
  function loadGF(){
    if(_GF)return Promise.resolve(_GF);
    if(_GFp)return _GFp;
    _GFp=new Promise(res=>{
      const s=document.createElement('script');
      s.src='web/scripts/Otros/GridFit.js';
      s.onload=()=>{_GF=window.GridFit;res(_GF)};
      s.onerror=()=>res(null);
      document.head.appendChild(s);
    });
    return _GFp;
  }
  let PG=PG_FALLBACK,_gfRo=null,_gfPending=false;
  function applyPG(n){
    if(n===PG)return;
    PG=n;
    if(mode==='search'&&R.length)renderPage(0);
  }
  if(!document.body.classList.contains('low-perf')){
    loadGF().then(gf=>{
      if(!gf)return;
      const scheduleGF=()=>{
        if(_gfPending)return;_gfPending=true;
        (window.requestIdleCallback||(cb=>setTimeout(cb,1)))(()=>{
          _gfPending=false;
          applyPG(gf.itemsPerPage(gEl,ITEM,ITEM,GAP,140));
        });
      };
      scheduleGF();
      _gfRo=new ResizeObserver(scheduleGF);
      _gfRo.observe(gEl);
    });
  }
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

  function freeOv(f){(f.overlays||[]).forEach(o=>{if(o.src?.startsWith('blob:'))URL.revokeObjectURL(o.src);});}
  function freeFrame(f){URL.revokeObjectURL(f.preview);if(f.croppedBlob)URL.revokeObjectURL(f.croppedBlob);if(f.previewCropped)URL.revokeObjectURL(f.previewCropped);freeOv(f);}

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
    const dir=p>pg?1:p<pg?-1:0;
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
    gEl.style.setProperty('--d',dir?(dir>0?'24px':'-24px'):'0px');
    gEl.classList.remove('AN1');void gEl.offsetWidth;gEl.classList.add('AN1');
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
    if(mode==='create'){frames.forEach(freeFrame);frames=[];cropQ=[];}
    setMode('search');S.clear();updCf();
    gEl.innerHTML='<div class="sk-searching"><img class="wait-anim" src="'+WA+'"><span>Buscando</span></div>';
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
    if(mode==='create'){frames.forEach(freeFrame);frames=[];cropQ=[];}
    setMode('search');S.clear();updCf();
    cfEl.style.display='none';waBtn.style.display='none';
    gEl.innerHTML='<div class="sk-searching"><img class="wait-anim" src="'+WA+'"><span>Descargando pack TG...</span></div>';
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

  async function KL_1(u,onp){
    const b=await fetch(u).then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.blob();});
    let w=0,h=0;
    try{const bm=await createImageBitmap(b);w=bm.width;h=bm.height;bm.close();}catch{}
    const ty=await AN_T1(b);
    const sq=w&&h&&w/h>=.8&&w/h<=1.25;
    if(ty!=='gif'&&sq&&b.size<TARGET)return b;
    if(ty){
      const an=await AN_D1(b,ty);
      if(an){try{return await WB_E1({},an,[],an.fps,onp);}finally{AN_F1(an);}}
    }
    return toWebp(b,[]);
  }

  async function confirmSearch(){
    const urls=[...S];
    cfEl.disabled=true;ckStart(cfEl);
    try{
      let sid;
      if(typeof ImageDecoder==='undefined'){
        const res=await fetch('/api/stickers',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({urls})});
        sid=(await res.json()).sid;
      }else{
        progM.classList.add('open');document.body.style.overflow='hidden';
        setProg(0,'Procesando...');
        const form=new FormData();
        for(let i=0;i<urls.length;i++){
          const b0=Math.round(i/urls.length*80),b1=Math.round((i+1)/urls.length*80);
          setProg(b0,'Procesando '+(i+1)+'/'+urls.length);
          const out=await KL_1(urls[i],p=>setProg(Math.round(b0+(b1-b0)*p)));
          form.append('files',out,String(i+1).padStart(3,'0')+'.webp');
        }
        setProg(85,'Subiendo...');
        const res=await fetch('/api/stickers',{method:'POST',body:form});
        if(!res.ok)throw new Error('HTTP '+res.status);
        sid=(await res.json()).sid;
        progM.classList.remove('open');document.body.style.overflow='';
      }
      ckStop();cfEl.style.display='none';
      waBtn.href='https://wa.me/595973254371?text=CALS='+sid;
      waBtn.style.display='';
      waBtn.onclick=(e)=>{e.preventDefault();window.open(waBtn.href,'_blank');resetWaState();};
    }catch(e){
      ckStop();progM.classList.remove('open');document.body.style.overflow='';
      toast('Error: '+e.message);
      cfEl.innerHTML='👉 Confirmar ✅ (<span id="sk-n">'+S.size+'</span>) 👈';cfEl.disabled=false;
    }
  }

  function renderFrames(){
    gEl.innerHTML='';
    if(!frames.length){setMode('search');if(R.length)renderPage(pg);return;}
    frames.forEach((f,i)=>{
      const d=document.createElement('div');
      d.className='sc-fr'+((f.croppedBlob||f.cropData||f.previewCropped)?' sc-done':'')+(f.overlays?.length?' ov-on':'');
      const img=document.createElement('img');
      img.src=f.previewCropped||f.preview||'';
      img.onerror=()=>{img.src='';};
      const rm=document.createElement('button');rm.className='sc-rm';rm.textContent='x';
      rm.onclick=e=>{e.stopPropagation();freeFrame(f);frames.splice(i,1);renderFrames();};
      const ovB=document.createElement('button');ovB.className='sc-ovb';ovB.textContent=f.overlays?.length?'🖼 ExtraImagen ✓':'🖼 Añadir Imagen';
      ovB.onclick=e=>{e.stopPropagation();ovOpen(f);};
      d.appendChild(img);d.appendChild(rm);d.appendChild(ovB);
      if(!f.isWebp)d.onclick=()=>{cropQ=[f];nextCrop();};
      gEl.appendChild(d);
    });
    scCf.disabled=false;
  }

  function loadCropperJS(){
    return new Promise((res,rej)=>{
      if(window.Cropper){res();return;}
      const l=document.createElement('link');l.rel='stylesheet';l.href='https://cdn.jsdelivr.net/npm/cropperjs@1.6.2/dist/cropper.min.css';document.head.appendChild(l);
      const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/cropperjs@1.6.2/dist/cropper.min.js';s.onload=res;s.onerror=rej;document.head.appendChild(s);
    });
  }

  function initCropper(){
    loadCropperJS().then(()=>{
      if(cropper){cropper.destroy();cropper=null;}
      setTimeout(()=>{
        if(!cropM.classList.contains('open'))return;
        cropper=new Cropper(cropImg,{viewMode:1,dragMode:'move',background:false,autoCropArea:.9});
      },0);
    });
  }

  function _setCropSrc(fr){
    if(_cropImgUrl){URL.revokeObjectURL(_cropImgUrl);_cropImgUrl=null;}
    if(fr.croppedBlob&&!fr.isVid){_cropImgUrl=URL.createObjectURL(fr.croppedBlob);return _cropImgUrl;}
    return fr.preview;
  }

  function nextCrop(){
    if(!cropQ.length){
      if(_cropImgUrl){URL.revokeObjectURL(_cropImgUrl);_cropImgUrl=null;}
      cropM.classList.remove('open');document.body.style.overflow='';
      return;
    }
    const fr=cropQ[0],idx=frames.indexOf(fr)+1;
    cropInfo.textContent=idx+' / '+frames.length+(fr.isVid?' 🎬':'');
    cropM.classList.add('open');document.body.style.overflow='hidden';
    if(cropper){cropper.destroy();cropper=null;}
    const src=_setCropSrc(fr);
    cropImg.onload=initCropper;
    cropImg.onerror=()=>{cropSkip.onclick();};
    cropImg.src=src;
    if(cropImg.complete&&cropImg.naturalWidth)initCropper();
  }

  cropOk.onclick=()=>{
    if(!cropper)return;
    const fr=cropQ.shift();if(!fr)return;
    const advance=()=>{
      if(cropper){cropper.destroy();cropper=null;}
      if(!cropQ.length&&frames.indexOf(fr)<frames.length-1){const nxt=frames[frames.indexOf(fr)+1];if(nxt)cropQ.push(nxt);}
      nextCrop();
    };
    if(fr.isVid||fr.isAnim){
      const d=cropper.getData(true);
      fr.cropData={x:d.x,y:d.y,w:d.width,h:d.height,sw:cropImg.naturalWidth||DIM,sh:cropImg.naturalHeight||DIM};
      cropper.getCroppedCanvas({width:DIM,height:DIM,imageSmoothingQuality:'high'}).toBlob(b=>{
        if(b){const old=fr.previewCropped;if(old)URL.revokeObjectURL(old);fr.previewCropped=URL.createObjectURL(b);const el=gEl.children[frames.indexOf(fr)];if(el){el.querySelector('img').src=fr.previewCropped;el.classList.add('sc-done');}}
        advance();
      },'image/webp',.7);
    }else{
      cropper.getCroppedCanvas({imageSmoothingQuality:'high'}).toBlob(blob=>{
        if(!blob){advance();return;}
        if(fr.croppedBlob)URL.revokeObjectURL(fr.croppedBlob);
        const oldPrev=fr.preview;
        fr.croppedBlob=blob;
        fr.preview=URL.createObjectURL(blob);
        URL.revokeObjectURL(oldPrev);
        const el=gEl.children[frames.indexOf(fr)];
        if(el){el.querySelector('img').src=fr.preview;el.classList.add('sc-done');}
        advance();
      },'image/webp',.92);
    }
  };

  cropSkip.onclick=()=>{
    const fr=cropQ.shift();if(cropper){cropper.destroy();cropper=null;}
    if(!cropQ.length&&frames.indexOf(fr)<frames.length-1){const nxt=frames[frames.indexOf(fr)+1];if(nxt)cropQ.push(nxt);}
    nextCrop();
  };

  async function getVidThumb(file){
    return new Promise(res=>{
      const v=document.createElement('video'),u=URL.createObjectURL(file);
      let done=false;
      const finish=()=>{
        if(done)return;done=true;clearTimeout(to);
        const c=document.createElement('canvas');c.width=DIM;c.height=DIM;
        c.getContext('2d').drawImage(v,0,0,DIM,DIM);
        URL.revokeObjectURL(u);v.src='';
        c.toBlob(b=>res(b?URL.createObjectURL(b):''),'image/webp',.7);
      };
      const to=setTimeout(()=>{if(!done){done=true;URL.revokeObjectURL(u);v.src='';res('');}},5000);
      v.src=u;v.muted=true;v.playsInline=true;v.preload='metadata';
      v.onseeked=finish;
      v.onerror=()=>{if(!done){done=true;clearTimeout(to);URL.revokeObjectURL(u);res('');}};
      v.onloadedmetadata=()=>{v.currentTime=Math.min(0.5,v.duration*0.1||0);};
    });
  }

  function FF_L1(){
    if(FFP)return FFP;
    FFP=(async()=>{
      let t=await fetch(FF_B+'/ffmpeg.js').then(r=>r.text());
      const wm=t.match(/new Worker\b[\s\S]*?e\.u\((\d+)\)/);
      if(!wm)throw new Error('worker id regex fail');
      if(!t.includes('{type:"module"}'))throw new Error('worker type patch fail');
      t=t.replace('{type:"module"}','{type:void 0}');
      const [w,c,wa]=await Promise.all([
        fetch(FF_B+'/'+wm[1]+'.ffmpeg.js').then(r=>r.arrayBuffer()),
        fetch(FF_C+'/ffmpeg-core.js').then(r=>r.arrayBuffer()),
        fetch(FF_C+'/ffmpeg-core.wasm').then(r=>r.arrayBuffer())
      ]);
      const bu=(b,ty)=>URL.createObjectURL(new Blob([b],{type:ty}));
      const js=bu(t,'text/javascript');
      await new Promise((ok,no)=>{const s=document.createElement('script');s.src=js;s.onload=ok;s.onerror=()=>no(new Error('script load fail'));document.head.appendChild(s);});
      URL.revokeObjectURL(js);
      const f=new window.FFmpegWASM.FFmpeg();
      await f.load({classWorkerURL:bu(w,'text/javascript'),coreURL:bu(c,'text/javascript'),wasmURL:bu(wa,'application/wasm')});
      return f;
    })();
    FFP.catch(()=>{FFP=null;});
    return FFP;
  }

  async function AN_T1(f){
    const h=new Uint8Array(await f.slice(0,4096).arrayBuffer());
    let s='';for(let i=0;i<h.length;i++)s+=String.fromCharCode(h[i]);
    if(s.startsWith('GIF8'))return 'gif';
    if(s.startsWith('RIFF')&&s.substr(8,4)==='WEBP')return s.indexOf('ANIM',12)>0?'webp_anim':false;
    return false;
  }

  async function AN_D1(b,ty){
    if(typeof ImageDecoder==='undefined')return null;
    let dec;
    try{
      dec=new ImageDecoder({data:await b.arrayBuffer(),type:ty==='gif'?'image/gif':'image/webp'});
      await dec.tracks.ready;
    }catch{return null;}
    const tr=dec.tracks.selectedTrack;
    if(!tr||!tr.frameCount||tr.frameCount<2){try{dec.close();}catch{}return null;}
    const n=Math.min(tr.frameCount,MAXFR),fr=[];let dur=0;
    try{
      for(let i=0;i<n;i++){const r=await dec.decode({frameIndex:i});fr.push(r.image);dur+=(r.image.duration||100000)/1000;}
    }catch{fr.forEach(x=>{try{x.close();}catch{}});try{dec.close();}catch{}return null;}
    try{dec.close();}catch{}
    return {fr,fps:Math.max(1,Math.min(30,Math.round(1000/(dur/n||100))))};
  }

  function AN_F1(a){(a?.fr||[]).forEach(x=>{try{x.close();}catch{}});}

  function DR_B1(ctx,img,cd){
    if(cd){
      const sw=img.displayWidth||img.videoWidth||img.naturalWidth||img.width;
      const sh=img.displayHeight||img.videoHeight||img.naturalHeight||img.height;
      const kx=sw/cd.sw,ky=sh/cd.sh;
      ctx.drawImage(img,cd.x*kx,cd.y*ky,cd.w*kx,cd.h*ky,0,0,DIM,DIM);
    }else ctx.drawImage(img,0,0,DIM,DIM);
  }

  function DR_O1(ctx,ovs,i){
    ovs.forEach(o=>{
      const src=o.an?o.an.fr[i%o.an.fr.length]:o.img;
      try{ctx.drawImage(src,o.x-o.s/2,o.y-o.s/2,o.s,o.s);}catch{}
    });
  }

  async function OV_P1(overlays){
    const out=[];
    for(const o of (overlays||[])){
      let an=null;
      if(o.blob&&o.anim)an=await AN_D1(o.blob,o.anim);
      out.push({img:o.img,an,x:o.x,y:o.y,s:o.s});
    }
    return out;
  }

  async function WB_E1(fr,base,ovs,fps,onp){
    const ff=await FF_L1();
    const c=document.createElement('canvas');c.width=DIM;c.height=DIM;
    const ctx=c.getContext('2d');
    const lv=document.getElementById('sc-lv'),ckEl=document.getElementById('sc-ck');
    const lctx=lv.getContext('2d');
    ckEl.style.display='none';lv.style.display='block';
    const nb=base.fr?base.fr.length:1;
    const no=ovs.reduce((m,o)=>Math.max(m,o.an?o.an.fr.length:1),1);
    const n=Math.min(MAXFR,Math.max(nb,no));
    const names=[];
    try{
      for(let i=0;i<n;i++){
        ctx.clearRect(0,0,DIM,DIM);
        DR_B1(ctx,base.fr?base.fr[i%nb]:base.img,fr.cropData);
        DR_O1(ctx,ovs,i);
        try{lctx.clearRect(0,0,DIM,DIM);lctx.drawImage(c,0,0,DIM,DIM);}catch{}
        const bl=await new Promise(r=>c.toBlob(r,'image/png'));
        const nm='i'+String(i).padStart(4,'0')+'.png';
        await ff.writeFile(nm,new Uint8Array(await bl.arrayBuffer()));
        names.push(nm);
        if(onp)onp((i+1)/n);
      }
      let out=null;
      for(const q of [50,30,15,8]){
        await ff.exec(['-framerate',String(fps),'-i','i%04d.png','-c:v','libwebp_anim','-f','webp','-quality',String(q),'-loop','0','-y','o.webp']);
        out=await ff.readFile('o.webp');
        if(out.byteLength<=TARGET)break;
      }
      await ff.deleteFile('o.webp').catch(()=>{});
      return new Blob([out],{type:'image/webp'});
    }finally{
      for(const nm of names)await ff.deleteFile(nm).catch(()=>{});
      lv.style.display='none';ckEl.style.display='';
    }
  }

  async function VD_F1(file,fps){
    const v=document.createElement('video'),u=URL.createObjectURL(file);
    v.src=u;v.muted=true;v.playsInline=true;v.preload='auto';
    try{
      await new Promise((res,rej)=>{v.onloadedmetadata=res;v.onerror=()=>rej(new Error('Video load failed'));});
      const dur=Math.min(v.duration||0,VID_MAX);
      if(!dur||!isFinite(dur))throw new Error('Video sin duracion');
      const n=Math.min(MAXFR,Math.max(1,Math.round(dur*fps)));
      const fr=[];
      for(let i=0;i<n;i++){
        await new Promise((res,rej)=>{
          const to=setTimeout(res,3000);
          v.onseeked=()=>{clearTimeout(to);res();};
          v.onerror=()=>{clearTimeout(to);rej(new Error('Video seek fail'));};
          v.currentTime=Math.min(dur-.001,i/fps);
        });
        fr.push(await createImageBitmap(v));
      }
      return {fr,fps};
    }finally{URL.revokeObjectURL(u);v.removeAttribute('src');v.load();}
  }

  async function toWebp(blob,overlays){
    const ql=[.92,.7,.5,.3,.15,.08,.04,.02,.01];
    const dOv=ctx=>{if(overlays?.length)overlays.forEach(o=>{try{ctx.drawImage(o.img,o.x-o.s/2,o.y-o.s/2,o.s,o.s);}catch{}});};
    const render=(srcBlob,q,w,h)=>new Promise((res,rej)=>{
      const u=URL.createObjectURL(srcBlob);
      const img=new Image();
      img.onload=()=>{
        const c=document.createElement('canvas');c.width=w;c.height=h;
        const ctx=c.getContext('2d');
        ctx.drawImage(img,0,0,w,h);
        dOv(ctx);
        URL.revokeObjectURL(u);
        c.toBlob(b=>b?res(b):rej(new Error('toBlob null')),'image/webp',q);
      };
      img.onerror=()=>{URL.revokeObjectURL(u);rej(new Error('img load failed'));};
      img.src=u;
    });
    for(const q of ql){
      try{
        const out=await render(blob,q,DIM,DIM);
        if(out.size<=TARGET)return out;
      }catch(e){if(q===ql[ql.length-1])throw e;}
    }
    return render(blob,.05,128,128);
  }

  function IMG_L1(b){
    return new Promise((res,rej)=>{
      const u=URL.createObjectURL(b),i=new Image();
      i.onload=()=>{URL.revokeObjectURL(u);res(i);};
      i.onerror=()=>{URL.revokeObjectURL(u);rej(new Error('img load failed'));};
      i.src=u;
    });
  }

  async function EX_1(fr,onp){
    if(fr.isWebp&&!fr.croppedBlob&&!fr.cropData&&!fr.overlays?.length)return fr.file;
    let base=null,ovs=null;
    try{
      if(fr.isVid)base=await VD_F1(fr.file,VID_FPS);
      else if(fr.isAnim)base=await AN_D1(fr.file,fr.isAnim);
      ovs=await OV_P1(fr.overlays);
      if(!base&&!ovs.some(o=>o.an)){
        if(fr.isWebp&&!fr.croppedBlob&&!fr.overlays?.length)return fr.file;
        return await toWebp(fr.croppedBlob||fr.file,fr.overlays||[]);
      }
      if(!base)base={img:await IMG_L1(fr.croppedBlob||fr.file)};
      const fps=base.fps||ovs.find(o=>o.an)?.an.fps||VID_FPS;
      return await WB_E1(fr,base,ovs,fps,onp);
    }finally{
      AN_F1(base);
      (ovs||[]).forEach(o=>AN_F1(o.an));
    }
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
      const isAnim=isVid?false:await AN_T1(f);
      const preview=isVid?await getVidThumb(f):URL.createObjectURL(f);
      return{file:f,preview,croppedBlob:null,cropData:null,previewCropped:null,isVid,isWebp,isAnim,overlays:[]};
    }));
    frames.push(...nf);renderFrames();
    const forCrop=nf.filter(f=>!f.isWebp||f.isAnim);
    if(forCrop.length){const wasEmpty=!cropQ.length;cropQ.push(...forCrop);if(wasEmpty)nextCrop();}
  }

  scCf.onclick=async()=>{
    scCf.disabled=true;progM.classList.add('open');document.body.style.overflow='hidden';
    setProg(0,'Procesando...');
    try{
      const form=new FormData();
      for(let i=0;i<frames.length;i++){
        const b0=Math.round(i/frames.length*80),b1=Math.round((i+1)/frames.length*80);
        setProg(b0,'Procesando '+(i+1)+'/'+frames.length);
        const fr=frames[i];
        const out=await EX_1(fr,p=>setProg(Math.round(b0+(b1-b0)*p),'Procesando '+(i+1)+'/'+frames.length));
        form.append('files',out,fr.file.name.replace(/\.[^.]+$/,'.webp'));
      }
      setProg(85,'Subiendo...');
      const res=await fetch('/api/stickers',{method:'POST',body:form});
      if(!res.ok)throw new Error('HTTP '+res.status);
      const {sid}=await res.json();
      ckStop();setProg(100,'Listo');progM.classList.remove('open');document.body.style.overflow='';
      scCf.style.display='none';
      waBtn.href='https://wa.me/595973254371?text=CALS='+sid;
      waBtn.style.display='';
      waBtn.onclick=(e)=>{
        e.preventDefault();window.open(waBtn.href,'_blank');
        frames.forEach(freeFrame);
        frames=[];cropQ=[];waBtn.href='#';
        setMode('search');
        if(R.length)renderPage(pg);else doFetch('');
      };
    }catch(e){ckStop();progM.classList.remove('open');document.body.style.overflow='';toast('Error: '+e.message);scCf.disabled=false;}
  };

  function ovOpen(fr){
    ovFr=fr;ovSel=-1;
    document.getElementById('ov-sz-lbl').textContent=ovNS+'px';
    document.getElementById('sc-ov-res').innerHTML='';
    document.getElementById('sc-ov-q').value='';
    const c=document.getElementById('sc-ov-c'),ctx=c.getContext('2d');
    ctx.clearRect(0,0,DIM,DIM);
    const bg=new Image();
    bg.onload=()=>ctx.drawImage(bg,0,0,DIM,DIM);
    bg.onerror=()=>{};
    bg.src=fr.previewCropped||fr.preview;
    document.getElementById('sc-ov-modal').classList.add('open');
    document.body.style.overflow='hidden';
    requestAnimationFrame(ovRL);
  }

  function ovSC(){const c=document.getElementById('sc-ov-c'),r=c.getBoundingClientRect();return r.width>0?r.width/DIM:1;}

  function ovRL(){
    const wrap=document.getElementById('sc-ov-wrap');
    wrap.querySelectorAll('.sc-ov-it').forEach(e=>e.remove());
    if(!ovFr)return;
    const sc=ovSC();
    (ovFr.overlays||[]).forEach((ov,i)=>{
      const d=document.createElement('div');d.className='sc-ov-it'+(i===ovSel?' ov-sel':'');
      d.style.cssText='left:'+(ov.x-ov.s/2)*sc+'px;top:'+(ov.y-ov.s/2)*sc+'px;width:'+ov.s*sc+'px;height:'+ov.s*sc+'px';
      const img=document.createElement('img');img.src=ov.src;img.style.cssText='width:'+ov.s*sc+'px;height:'+ov.s*sc+'px';
      const rm=document.createElement('button');rm.className='ov-rm';rm.textContent='✕';
      rm.onclick=e=>{e.stopPropagation();ovFr.overlays.splice(i,1);if(ovSel===i)ovSel=-1;else if(ovSel>i)ovSel--;document.getElementById('ov-sz-lbl').textContent=ovNS+'px';ovRL();};
      d.appendChild(img);d.appendChild(rm);
      ovDrag(d,ov,i);
      wrap.appendChild(d);
    });
  }

  function ovDrag(el,ov,i){
    el.addEventListener('pointerdown',e=>{
      if(e.target.classList.contains('ov-rm'))return;
      ovSel=i;document.getElementById('ov-sz-lbl').textContent=ov.s+'px';
      el.parentElement.querySelectorAll('.sc-ov-it').forEach(x=>x.classList.remove('ov-sel'));
      el.classList.add('ov-sel');
      el.setPointerCapture(e.pointerId);
      let lx=e.clientX,ly=e.clientY;
      const sc=ovSC();
      const mm=pe=>{
        ov.x=Math.max(ov.s/2,Math.min(DIM-ov.s/2,ov.x+(pe.clientX-lx)/sc));
        ov.y=Math.max(ov.s/2,Math.min(DIM-ov.s/2,ov.y+(pe.clientY-ly)/sc));
        lx=pe.clientX;ly=pe.clientY;
        el.style.left=(ov.x-ov.s/2)*sc+'px';
        el.style.top=(ov.y-ov.s/2)*sc+'px';
      };
      el.addEventListener('pointermove',mm);
      el.addEventListener('pointerup',()=>el.removeEventListener('pointermove',mm),{once:true});
      e.preventDefault();
    });
  }

  async function ovAdd(url,isBlob){
    try{
      let blob=isBlob?url:null,src=null,anim=false;
      if(!blob){try{blob=await fetch(url).then(r=>r.blob());}catch{}}
      if(blob){src=URL.createObjectURL(blob);anim=await AN_T1(blob);}
      else src=url;
      const img=new Image();
      if(!blob)img.crossOrigin='anonymous';
      await new Promise((res,rej)=>{img.onload=res;img.onerror=rej;img.src=src;});
      if(!ovFr.overlays)ovFr.overlays=[];
      ovFr.overlays.push({img,src,blob,x:128,y:128,s:ovNS,anim});
      ovSel=ovFr.overlays.length-1;
      document.getElementById('ov-sz-lbl').textContent=ovNS+'px';
      ovRL();
    }catch{toast('Error imagen');}
  }

  async function ovSrch(q){
    if(!q)return;
    const res=document.getElementById('sc-ov-res');
    res.innerHTML='<span style="color:rgba(255,255,255,.5);font-size:.82em;padding:8px">Buscando...</span>';
    try{
      const params=new URLSearchParams({q,cid:getCID()});
      const j=await fetch('/api/stickers?'+params).then(r=>r.json());
      res.innerHTML='';
      (j.data||[]).slice(0,16).forEach(item=>{
        if(!item.url)return;
        const d=document.createElement('div');d.className='ov-it';
        const img=document.createElement('img');img.src=item.blur_preview||item.url;img.decoding='async';
        if(item.blur_preview){const ri=new Image();ri.onload=()=>img.src=item.url;ri.src=item.url;}
        d.appendChild(img);
        d.onclick=()=>ovAdd(item.url);
        res.appendChild(d);
      });
      if(!res.children.length)res.innerHTML='<span style="color:rgba(255,255,255,.5);font-size:.82em;padding:8px">Sin resultados</span>';
    }catch{res.innerHTML='';}
  }

  document.getElementById('ov-sm').onclick=()=>{
    const ov=ovSel>=0?ovFr?.overlays?.[ovSel]:null;
    if(ov){ov.s=Math.max(16,ov.s-16);document.getElementById('ov-sz-lbl').textContent=ov.s+'px';ovRL();}
    else{ovNS=Math.max(16,ovNS-16);document.getElementById('ov-sz-lbl').textContent=ovNS+'px';}
  };
  document.getElementById('ov-lg').onclick=()=>{
    const ov=ovSel>=0?ovFr?.overlays?.[ovSel]:null;
    if(ov){ov.s=Math.min(240,ov.s+16);document.getElementById('ov-sz-lbl').textContent=ov.s+'px';ovRL();}
    else{ovNS=Math.min(240,ovNS+16);document.getElementById('ov-sz-lbl').textContent=ovNS+'px';}
  };
  document.getElementById('sc-ov-sb').onclick=()=>ovSrch(document.getElementById('sc-ov-q').value.trim());
  document.getElementById('sc-ov-q').addEventListener('keydown',e=>{if(e.key==='Enter')ovSrch(e.target.value.trim());});
  document.getElementById('sc-ov-fi').onchange=e=>{const f=e.target.files[0];if(!f)return;ovAdd(f,true);e.target.value='';};
  document.getElementById('sc-ov-up').onclick=()=>document.getElementById('sc-ov-fi').click();
  document.getElementById('sc-ov-ok').onclick=()=>{document.getElementById('sc-ov-modal').classList.remove('open');document.body.style.overflow='';renderFrames();ovFr=null;};
  document.getElementById('sc-ov-cx').onclick=()=>{document.getElementById('sc-ov-modal').classList.remove('open');document.body.style.overflow='';ovFr=null;};

  document.getElementById('sk-btn').onclick=search;
  qEl.addEventListener('keydown',e=>{if(e.key==='Enter')search();});
  cfEl.onclick=confirmSearch;
  document.getElementById('sk-crear').onclick=()=>inEl.click();
  inEl.onchange=e=>{
    if(!e.target.files.length)return;
    setMode('create');addFiles(e.target.files);inEl.value='';
  };

  const cont=document.getElementById('content');
  if(cont)cont.addEventListener('contentUnload',()=>{
    frames.forEach(freeFrame);
    frames=[];ckStop();if(cdRaf)cancelAnimationFrame(cdRaf);
    if(_cropImgUrl){URL.revokeObjectURL(_cropImgUrl);_cropImgUrl=null;}
    if(_gfRo){_gfRo.disconnect();_gfRo=null}
    if(FFP){FFP.then(f=>f.terminate()).catch(()=>{});FFP=null;}
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