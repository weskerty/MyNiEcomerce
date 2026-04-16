<div style="text-align:center;">
<style>
._nb{position:absolute;top:0;font-size:1.8rem;text-decoration:none;z-index:10}
._nb.l{left:0}
._nb.r{right:0}
</style>
<a class="_nb l" href="web/blogs.html">🔔</a>
<a class="_nb r" href="web/search.html">🔍</a>
<img src="web/ICON.png" width="90px" />

<style>
.sk-wrap{padding:12px;max-width:100%}
.sk-bar{display:flex;gap:8px;margin-bottom:14px}
.sk-bar input{flex:1;padding:8px 12px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.1);color:white;font-size:.9em;outline:none}
.sk-bar input::placeholder{color:rgba(255,255,255,.45)}
.sk-bar button{padding:8px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.14);color:white;cursor:pointer;font-size:.9em;transition:background .2s}
.sk-bar button:hover{background:rgba(255,255,255,.24)}
.sk-bar button:disabled{opacity:.4;cursor:not-allowed}
.sk-bar button.sk-cd{position:relative;overflow:hidden}
.sk-bar button.sk-cd::after{content:'';position:absolute;left:0;top:0;height:100%;width:var(--sk-cd-p,0%);background:rgba(255,255,255,.08);transition:width .1s linear}
.sk-grid{display:grid;grid-template-columns:repeat(auto-fill,120px);gap:8px;justify-content:center;margin-bottom:8px;min-height:40px}
.sk-it{width:120px;height:120px;border-radius:16px;overflow:hidden;cursor:pointer;position:relative;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.15);box-sizing:border-box;transition:transform .15s,border-color .15s,box-shadow .15s;will-change:transform;flex-shrink:0}
.sk-it img{width:100%;height:100%;object-fit:fill;display:block}
.sk-it:hover{transform:scale(1.05)}
.sk-it.sk-on{border-color:#4ade80;box-shadow:0 0 0 2px #4ade8055}
.sk-it.sk-on::after{content:'✓';position:absolute;top:4px;right:6px;color:#4ade80;font-size:1.1em;font-weight:bold;text-shadow:0 1px 4px rgba(0,0,0,.9)}
.sk-it.sk-max{opacity:.45;cursor:not-allowed}
.sk-it.sk-max:hover{transform:none}
.gi-pg{display:flex;justify-content:center;gap:12px;margin-top:4px}
.gi-pg button{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:10px;color:white;padding:6px 18px;cursor:pointer;font-size:.85em;transition:background .2s}
.gi-pg button:hover{background:rgba(255,255,255,.22)}
.gi-pg button:disabled{opacity:.3;cursor:default}
.sk-foot{display:flex;justify-content:center;margin-top:14px}
.sk-cf{padding:10px 28px;border-radius:12px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.14);color:white;cursor:pointer;font-size:.95em;transition:background .2s}
.sk-cf:hover:not(:disabled){background:rgba(255,255,255,.24)}
.sk-cf:disabled{opacity:.4;cursor:default}
.sk-wa{display:inline-block;padding:10px 28px;border-radius:12px;background:#25d366;color:white;text-decoration:none;font-size:.95em;font-weight:600;transition:background .2s}
.sk-wa:hover{background:#1ebe5d;color:white;text-decoration:none}
.sk-msg{text-align:center;color:rgba(255,255,255,.55);font-size:.9em;padding:20px 0;margin:0}
.sk-searching{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 0;gap:8px;width:100%;grid-column:1/-1}
.sk-searching span:first-child{font-size:3.5rem;animation:sk-pulse 1.2s ease-in-out infinite}
.sk-searching span:last-child{color:rgba(255,255,255,.6);font-size:.95em}
@keyframes sk-pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:.7}}
.sk-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:white;padding:10px 22px;border-radius:12px;font-size:.88em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999;white-space:nowrap}
.sk-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
</style>

<div class="sk-wrap" id="sk-wrap">
  <div class="sk-bar">
    <input id="sk-q" type="text" placeholder="Buscar stickers...">    <button id="sk-btn">Buscar</button>
    <button onclick="document.getElementById('sk-wrap').style.display='none'; _SC_show();">Crear</button>
  </div>
  <div id="sk-grid" class="sk-grid"></div>
  <div id="sk-pg" class="gi-pg"></div>
  <div class="sk-foot">
    <button id="sk-cf" class="sk-cf" disabled>Confirmar (<span id="sk-n">0</span>)</button>
  </div>
</div>

<style>
.sc-btn{padding:8px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.14);color:white;cursor:pointer;font-size:.9em;transition:background .2s}
.sc-btn:hover{background:rgba(255,255,255,.24)}
.sc-btn:disabled{opacity:.4;cursor:not-allowed}
.sc-dropzone{border:2px dashed rgba(255,255,255,.25);border-radius:14px;padding:28px 16px;text-align:center;cursor:pointer;transition:border-color .2s,background .2s;color:rgba(255,255,255,.55);font-size:.9em;margin-bottom:12px}
.sc-dropzone:hover,.sc-dropzone.over{border-color:rgba(255,255,255,.55);background:rgba(255,255,255,.06)}
.sc-dropzone input{display:none}
.sc-frames{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;min-height:0}
.sc-frame{position:relative;width:80px;height:80px;border-radius:10px;overflow:hidden;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.15);cursor:grab;touch-action:none;flex-shrink:0}
.sc-frame img{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}
.sc-frame .sc-rm{position:absolute;top:2px;right:2px;background:rgba(0,0,0,.7);border:none;color:white;border-radius:50%;width:18px;height:18px;font-size:10px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1}
.sc-frame .sc-delay{position:absolute;bottom:2px;left:0;right:0;text-align:center;display:none}
.sc-frame .sc-delay input{width:50px;font-size:.7em;background:rgba(0,0,0,.7);border:1px solid rgba(255,255,255,.2);border-radius:4px;color:white;text-align:center;padding:1px 2px}
.sc-frame .sc-delay input::placeholder{color:rgba(255,255,255,.5)}
.sc-frame.drag-over{border-color:#4ade80;box-shadow:0 0 0 2px #4ade8055}
.sc-frame.dragging{opacity:.4}
.sc-opts{display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;align-items:center}
.sc-mode{display:flex;gap:0;border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,.2)}
.sc-mode button{padding:6px 14px;background:rgba(255,255,255,.08);border:none;color:rgba(255,255,255,.6);cursor:pointer;font-size:.82em;transition:background .2s,color .2s}
.sc-mode button.active{background:rgba(255,255,255,.22);color:white}
.sc-crop-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:200;align-items:center;justify-content:center;flex-direction:column;gap:12px}
.sc-crop-modal.open{display:flex}
.sc-crop-wrap{position:relative;max-width:min(90vw,420px);max-height:60vh;overflow:hidden}
.sc-crop-wrap img{display:block;max-width:100%;max-height:60vh}
.sc-prog-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:300;align-items:center;justify-content:center;flex-direction:column;gap:16px}
.sc-prog-modal.open{display:flex}
.sc-prog-bar-wrap{width:240px;height:8px;background:rgba(255,255,255,.1);border-radius:4px;overflow:hidden}
.sc-prog-bar{height:100%;background:#4ade80;width:0%;transition:width .2s}
.sc-prog-label{color:rgba(255,255,255,.8);font-size:.9em}
.sc-preview-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:300;align-items:center;justify-content:center;flex-direction:column;gap:14px}
.sc-preview-modal.open{display:flex}
.sc-preview-modal img{max-width:256px;max-height:256px;border-radius:12px;image-rendering:pixelated}
.sc-preview-list{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width:400px}
.sc-preview-list img{width:80px;height:80px;border-radius:8px;object-fit:cover;image-rendering:pixelated}
.sc-size-tag{color:rgba(255,255,255,.5);font-size:.78em}
</style>

<div class="sk-wrap" id="sc-wrap" style="display:none">
  <div style="padding:12px;max-width:100%">
    <div class="sc-dropzone" id="sc-drop">      <input type="file" id="sc-input" accept="image/*,video/mp4,.gif" multiple>
      <div>Subir imagenes, GIF o MP4<br><small style="opacity:.6">Max 5MB por archivo - Max 50</small></div>
    </div>
    <div class="sc-frames" id="sc-frames"></div>
    <div class="sc-opts" id="sc-opts" style="display:none">
      <div class="sc-mode" id="sc-mode">
        <button class="active" data-m="sep">Stickers separados</button>
        <button data-m="anim">Sticker animado</button>
      </div>
    </div>
    <div class="sk-foot">
      <button class="sc-btn" id="sc-confirm" disabled>Procesar</button>
    </div>
  </div>
</div>

<div class="sc-crop-modal" id="sc-crop-modal">
  <div class="sc-crop-wrap"><img id="sc-crop-img" src=""></div>
  <div style="display:flex;gap:10px">
    <button class="sc-btn" id="sc-crop-ok">Recortar</button>
    <button class="sc-btn" id="sc-crop-skip">Saltar</button>
  </div>
</div>

<div class="sc-prog-modal" id="sc-prog-modal">
  <div style="font-size:2rem">⚙</div>
  <div class="sc-prog-label" id="sc-prog-label">Iniciando...</div>
  <div class="sc-prog-bar-wrap"><div class="sc-prog-bar" id="sc-prog-bar"></div></div>
  <div class="sc-size-tag" id="sc-size-tag"></div>
</div>

<div class="sc-preview-modal" id="sc-preview-modal">
  <div style="color:white;font-size:1em;margin-bottom:4px">Vista previa</div>
  <div id="sc-preview-content"></div>
  <div class="sc-size-tag" id="sc-preview-size"></div>
  <div style="display:flex;gap:10px;margin-top:4px">
    <button class="sc-btn" id="sc-preview-ok">Confirmar</button>
    <button class="sc-btn" id="sc-preview-cancel">Cancelar</button>
  </div>
</div>

<script>
(function(){
  const PG       = 18;
  const MAX_SEL  = 50;
  const CD_MS    = 10000;

  let R=[],S=new Set(),pg=0,cdEnd=0,cdRaf=null;

  const wrapEl = document.getElementById('sk-wrap'),        gEl    = document.getElementById('sk-grid'),
        pgEl   = document.getElementById('sk-pg'),
        tEl    = document.getElementById('sk-toast');

  let _tt;
  function toast(msg){
    tEl.textContent=msg;
    tEl.classList.add('show');
    clearTimeout(_tt);
    _tt=setTimeout(()=>tEl.classList.remove('show'),2200);
  }

  function getCf(){ return document.getElementById('sk-cf'); }
  function getN(){  return document.getElementById('sk-n');  }
  function getBtn(){ return document.getElementById('sk-btn'); }

  function startCooldown(){
    cdEnd=Date.now()+CD_MS;
    const btn=getBtn();
    btn.disabled=true;
    btn.classList.add('sk-cd');
    function tick(){
      const rem=cdEnd-Date.now();
      if(rem<=0){
        btn.disabled=false;
        btn.classList.remove('sk-cd');
        btn.style.removeProperty('--sk-cd-p');
        btn.textContent='Buscar';
        cdRaf=null;
        return;
      }
      const pct=(1-rem/CD_MS)*100;
      btn.style.setProperty('--sk-cd-p', pct.toFixed(1)+'%');
      btn.textContent=Math.ceil(rem/1000)+'s';
      cdRaf=requestAnimationFrame(tick);
    }
    cdRaf=requestAnimationFrame(tick);
  }

  function reset(){
    R=[];S.clear();pg=0;
    gEl.innerHTML='';
    pgEl.innerHTML='';
    document.getElementById('sk-q').value='';
    document.querySelector('.sk-foot').innerHTML='<button id="sk-cf" class="sk-cf" disabled>Confirmar (<span id="sk-n">0</span>)</button>';
    document.getElementById('sk-cf').onclick=confirm;
  }

  function renderPage(p){
    pg=p;    const sl=p*PG, chunk=R.slice(sl,sl+PG);
    gEl.innerHTML='';
    chunk.forEach(item=>{
      const url=item.file?.hd?.webp?.url;
      if(!url)return;
      const selected=S.has(url);
      const atMax=!selected&&S.size>=MAX_SEL;
      const d=document.createElement('div');
      d.className='sk-it'+(selected?' sk-on':'')+(atMax?' sk-max':'');
      const img=document.createElement('img');
      img.src=item.blur_preview;
      img.decoding='async';
      if(!atMax||selected){
        const real=new Image();
        real.onload=()=>{img.src=url};
        real.src=url;
      }
      d.appendChild(img);
      if(!atMax||selected){
        d.onclick=()=>{
          const wasOn=S.has(url);
          if(wasOn){
            S.delete(url);
            d.classList.remove('sk-on');
            d.classList.remove('sk-max');
            gEl.querySelectorAll('.sk-it.sk-max').forEach(el=>el.classList.remove('sk-max'));
          } else {
            if(S.size>=MAX_SEL){ toast('Solo '+MAX_SEL+' a la vez'); return; }
            S.add(url);
            d.classList.add('sk-on');
            if(S.size>=MAX_SEL){
              gEl.querySelectorAll('.sk-it:not(.sk-on)').forEach(el=>el.classList.add('sk-max'));
            }
          }
          const n=getN(), cf=getCf();
          if(n)n.textContent=S.size;
          if(cf)cf.disabled=S.size===0;
        };
      }
      gEl.appendChild(d);
    });
    renderPg();
    wrapEl.scrollIntoView({behavior:'smooth',block:'start'});
  }

  function renderPg(){
    pgEl.innerHTML='';
    if(R.length<=PG)return;
    const max=Math.ceil(R.length/PG)-1;
    const bP=document.createElement('button'),bN=document.createElement('button');    bP.textContent='Anterior';bN.textContent='Siguiente';
    bP.disabled=pg===0;bN.disabled=pg===max;
    bP.onclick=()=>renderPage(pg-1);
    bN.onclick=()=>renderPage(pg+1);
    pgEl.appendChild(bP);pgEl.appendChild(bN);
  }

  async function search(){
    if(Date.now()<cdEnd)return;
    const q=document.getElementById('sk-q').value.trim();
    if(!q)return;
    gEl.innerHTML='<div class="sk-searching"><span>⏳</span><span>Buscando</span></div>';
    pgEl.innerHTML='';R=[];S.clear();pg=0;
    const n=getN(),cf=getCf();
    if(n)n.textContent=0;
    if(cf)cf.disabled=true;
    startCooldown();
    try{
      const res=await fetch('/api/stickers?q='+encodeURIComponent(q));
      const data=await res.json();
      R=data.data?.data||[];
      R.length?renderPage(0):(gEl.innerHTML='<p class="sk-msg">Sin resultados</p>');
    }catch(e){gEl.innerHTML='<p class="sk-msg">Error '+e.message+'</p>';}
  }

  async function confirm(){
    const cf=getCf();
    if(cf){cf.disabled=true;cf.textContent='Procesando...';}
    try{
      const res=await fetch('/api/stickers',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({urls:[...S]})
      });
      const {sid}=await res.json();
      document.querySelector('.sk-foot').innerHTML='<a class="sk-wa" id="sk-wa-btn" href="https://wa.me/595972184435?text=CALS='+sid+'" target="_blank">Agrega los Stickers a WhatsApp</a>';
      document.getElementById('sk-wa-btn').addEventListener('click',()=>setTimeout(reset,300));
    }catch(e){
      const cf2=getCf();
      if(cf2){cf2.innerHTML='Confirmar (<span id="sk-n">'+S.size+'</span>)';cf2.disabled=false;}
    }
  }

  document.getElementById('sk-btn').onclick=search;
  document.getElementById('sk-q').addEventListener('keydown',e=>{if(e.key==='Enter')search();});
  document.getElementById('sk-cf').onclick=confirm;

  const cont=document.getElementById('content');
  if(cont)cont.addEventListener('contentUnload',()=>{
    R=[];S.clear();    if(cdRaf)cancelAnimationFrame(cdRaf);
  },{once:true});
})();
</script>

<script>
(function(){
  const MAX_F  = 50;
  const MAX_SZ = 5*1024*1024;
  const TARGET = 950*1024;
  const DIM    = 256;
  const FF_URL = 'https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.6/dist/esm/index.js';
  const FU_URL = 'https://cdn.jsdelivr.net/npm/@ffmpeg/util@0.12.1/dist/esm/index.js';
  const FC_BASE= 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/esm';

  let frames=[],cropQueue=[],cropCropper=null,mode='sep';
  let _ff=null,_ffFetch=null,_ffLoadP=null,_progCb=null;

  const wrapEl    =document.getElementById('sc-wrap'),
        framesEl  =document.getElementById('sc-frames'),
        optsEl    =document.getElementById('sc-opts'),
        confirmEl =document.getElementById('sc-confirm'),
        dropEl    =document.getElementById('sc-drop'),
        inputEl   =document.getElementById('sc-input'),
        modeEl    =document.getElementById('sc-mode'),
        cropModal =document.getElementById('sc-crop-modal'),
        cropImg   =document.getElementById('sc-crop-img'),
        cropOk    =document.getElementById('sc-crop-ok'),
        cropSkip  =document.getElementById('sc-crop-skip'),
        progModal =document.getElementById('sc-prog-modal'),
        progBar   =document.getElementById('sc-prog-bar'),
        progLbl   =document.getElementById('sc-prog-label'),
        sizeLbl   =document.getElementById('sc-size-tag'),
        prevModal =document.getElementById('sc-preview-modal'),
        prevCont  =document.getElementById('sc-preview-content'),
        prevSize  =document.getElementById('sc-preview-size'),
        prevOk    =document.getElementById('sc-preview-ok'),
        prevCancel=document.getElementById('sc-preview-cancel');

  function isAnim(f){
    return f.type==='image/gif'||f.type==='video/mp4'||f.name?.endsWith('.mp4');
  }

  function toast(msg){
    const t=document.getElementById('sk-toast');
    if(!t)return;
    t.textContent=msg;t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'),2200);
  }
  function setProgress(pct,label,sz){
    progBar.style.width=pct+'%';
    if(label!=null)progLbl.textContent=label;
    if(sz!=null)sizeLbl.textContent=sz;
  }

  function loadFF(){
    if(!_ffLoadP)_ffLoadP=(async()=>{
      const [{FFmpeg},{fetchFile,toBlobURL}]=await Promise.all([
        import(FF_URL),
        import(FU_URL)
      ]);
      _ffFetch=fetchFile;
      _ff=new FFmpeg();
      _ff.on('progress',({progress})=>{
        if(_progCb)_progCb(Math.round(Math.max(0,Math.min(1,progress||0))*100));
      });
      await _ff.load({
        coreURL: await toBlobURL(`${FC_BASE}/ffmpeg-core.js`,'text/javascript'),
        wasmURL: await toBlobURL(`${FC_BASE}/ffmpeg-core.wasm`,'application/wasm'),
      });
    })();
    return _ffLoadP;
  }

  async function ffToWebp(blob,fname,onProg){
    await loadFF();
    _progCb=onProg||null;
    await _ff.writeFile(fname,await _ffFetch(blob));
    await _ff.exec(['-i',fname,
      '-vf',`scale=${DIM}:${DIM}:force_original_aspect_ratio=decrease,pad=${DIM}:${DIM}:(ow-iw)/2:(oh-ih)/2`,
      '-quality','40','-loop','0','out.webp']);
    let raw=await _ff.readFile('out.webp');
    try{await _ff.deleteFile(fname);}catch(_){}
    try{await _ff.deleteFile('out.webp');}catch(_){}
    let r=new Blob([raw],{type:'image/webp'});
    if(r.size>TARGET){
      _progCb=null;
      await _ff.writeFile(fname,await _ffFetch(r));
      await _ff.exec(['-i',fname,
        '-vf',`scale=${DIM}:${DIM}:force_original_aspect_ratio=decrease,pad=${DIM}:${DIM}:(ow-iw)/2:(oh-ih)/2`,
        '-quality','10','-loop','0','out.webp']);
      raw=await _ff.readFile('out.webp');
      try{await _ff.deleteFile(fname);}catch(_){}
      try{await _ff.deleteFile('out.webp');}catch(_){}
      r=new Blob([raw],{type:'image/webp'});
    }
    _progCb=null;
    return r;
  }
  async function ffAnimated(blobs,delays,onProg){
    await loadFF();
    _progCb=onProg||null;
    const enc=new TextEncoder();
    for(let i=0;i<blobs.length;i++)
      await _ff.writeFile(`f${i}.webp`,await _ffFetch(blobs[i]));
    let txt='';
    for(let i=0;i<blobs.length;i++)
      txt+=`file 'f${i}.webp'\nduration ${((delays[i]||200)/1000).toFixed(3)}\n`;
    txt+=`file 'f${blobs.length-1}.webp'\n`;
    await _ff.writeFile('c.txt',enc.encode(txt));
    const runAnim=async(scale,q)=>{
      await _ff.exec(['-f','concat','-safe','0','-i','c.txt',
        '-vf',`scale=${scale}:${scale}:force_original_aspect_ratio=decrease,pad=${scale}:${scale}:(ow-iw)/2:(oh-ih)/2`,
        '-quality',String(q),'-loop','0','anim.webp']);
      const d=await _ff.readFile('anim.webp');
      try{await _ff.deleteFile('anim.webp');}catch(_){}
      return new Blob([d],{type:'image/webp'});
    };
    let r=await runAnim(DIM,40);
    if(r.size>TARGET)r=await runAnim(DIM,10);
    if(r.size>TARGET)r=await runAnim(128,10);
    for(let i=0;i<blobs.length;i++)try{await _ff.deleteFile(`f${i}.webp`);}catch(_){}
    try{await _ff.deleteFile('c.txt');}catch(_){}
    _progCb=null;
    return r;
  }

  async function imgFromBlob(blob){
    return new Promise(res=>{
      const u=URL.createObjectURL(blob);
      const img=new Image();
      img.onload=()=>res({img,u});
      img.src=u;
    });
  }

  async function canvasWebp(blob,q,dim){
    const d=dim||DIM;
    const {img,u}=await imgFromBlob(blob);
    const c=document.createElement('canvas');
    c.width=d;c.height=d;
    c.getContext('2d').drawImage(img,0,0,d,d);
    URL.revokeObjectURL(u);
    return new Promise(res=>c.toBlob(res,'image/webp',q));
  }

  async function compressFrame(blob){
    for(const q of [.4,.2,.1,.09,.08,.07,.06,.05,.04,.03,.02,.01]){      const out=await canvasWebp(blob,q);
      if(out.size<=TARGET)return out;
    }
    return canvasWebp(blob,.1,128);
  }

  function syncDelayVis(){
    const show=mode==='anim';
    framesEl.querySelectorAll('.sc-delay').forEach(el=>{
      el.style.display=show?'block':'none';
    });
  }

  function renderFrames(){
    framesEl.innerHTML='';
    frames.forEach((f,i)=>{
      const d=document.createElement('div');
      d.className='sc-frame';
      d.draggable=true;
      const img=document.createElement('img');
      img.src=f.preview;
      const rm=document.createElement('button');
      rm.className='sc-rm';rm.textContent='x';
      rm.onclick=e=>{e.stopPropagation();frames.splice(i,1);renderFrames();syncOpts();};
      d.appendChild(img);d.appendChild(rm);
      if(!isAnim(f.file)){
        const dd=document.createElement('div');
        dd.className='sc-delay';
        dd.style.display=mode==='anim'?'block':'none';
        const inp=document.createElement('input');
        inp.type='tel';
        inp.inputMode='numeric';
        inp.pattern='[0-9]*';
        inp.placeholder='Tiempo';
        if(f.delay)inp.value=f.delay;
        inp.title='ms';
        inp.oninput=e=>{
          const v=parseInt(e.target.value.replace(/\D/g,''))||null;
          frames[i].delay=v;
        };
        inp.onclick=e=>e.stopPropagation();
        dd.appendChild(inp);d.appendChild(dd);
      }
      setupDrag(d,i);
      framesEl.appendChild(d);
    });
    confirmEl.disabled=frames.length===0;
  }

  function setupDrag(el,idx){    el.addEventListener('dragstart',e=>{
      e.dataTransfer.setData('text/plain',String(idx));
      el.classList.add('dragging');
    });
    el.addEventListener('dragend',()=>el.classList.remove('dragging'));
    el.addEventListener('dragover',e=>{e.preventDefault();el.classList.add('drag-over');});
    el.addEventListener('dragleave',()=>el.classList.remove('drag-over'));
    el.addEventListener('drop',e=>{
      e.preventDefault();el.classList.remove('drag-over');
      const from=parseInt(e.dataTransfer.getData('text/plain'));
      if(from===idx)return;
      [frames[from],frames[idx]]=[frames[idx],frames[from]];
      renderFrames();
    });
  }

  function syncOpts(){
    const sc=frames.filter(f=>!isAnim(f.file)).length;
    optsEl.style.display=sc>1?'flex':'none';
    if(sc<=1&&mode==='anim'){
      mode='sep';
      modeEl.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.m==='sep'));
    }
    confirmEl.disabled=frames.length===0;
  }

  async function addFiles(list){
    const valid=[...list].filter(f=>{
      if(f.size>MAX_SZ){toast('Max 5MB: '+f.name);return false;}
      return true;
    });
    if(frames.length+valid.length>MAX_F){
      toast('Max '+MAX_F+' archivos');
      valid.length=Math.max(0,MAX_F-frames.length);
    }
    const newF=valid.map(f=>({file:f,preview:URL.createObjectURL(f),delay:null,croppedBlob:null}));
    frames.push(...newF);
    renderFrames();syncOpts();
    const statics=newF.filter(f=>!isAnim(f.file));
    if(statics.length){cropQueue.push(...statics);if(cropQueue.length===statics.length)nextCrop();}
  }

  function nextCrop(){
    if(!cropQueue.length){cropModal.classList.remove('open');return;}
    const fr=cropQueue[0];
    cropImg.src=fr.preview;
    cropModal.classList.add('open');
    if(cropCropper){cropCropper.destroy();cropCropper=null;}
    cropImg.onload=()=>{
      if(!window.Cropper)loadCropperJS().then(initCropper);      else initCropper();
    };
  }

  function initCropper(){
    cropCropper=new Cropper(cropImg,{aspectRatio:1,viewMode:1,dragMode:'move',background:false,autoCropArea:.9});
  }

  function loadCropperJS(){
    return new Promise((res,rej)=>{
      const l=document.createElement('link');
      l.rel='stylesheet';l.href='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.2/cropper.min.css';
      document.head.appendChild(l);
      const s=document.createElement('script');
      s.src='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.2/cropper.min.js';
      s.onload=res;s.onerror=rej;document.head.appendChild(s);
    });
  }

  cropOk.onclick=()=>{
    if(!cropCropper)return;
    cropCropper.getCroppedCanvas({width:DIM,height:DIM,imageSmoothingQuality:'high'}).toBlob(blob=>{
      const fr=cropQueue.shift();
      const idx=frames.indexOf(fr);
      if(idx>-1){
        URL.revokeObjectURL(fr.preview);
        fr.preview=URL.createObjectURL(blob);
        fr.croppedBlob=blob;
        const img=framesEl.children[idx]?.querySelector('img');
        if(img)img.src=fr.preview;
      }
      if(cropCropper){cropCropper.destroy();cropCropper=null;}
      nextCrop();
    },'image/webp',.9);
  };

  cropSkip.onclick=()=>{
    cropQueue.shift();
    if(cropCropper){cropCropper.destroy();cropCropper=null;}
    nextCrop();
  };

  modeEl.querySelectorAll('button').forEach(btn=>{
    btn.onclick=()=>{
      modeEl.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      mode=btn.dataset.m;
      syncDelayVis();
    };
  });
  dropEl.onclick=()=>inputEl.click();
  inputEl.onchange=e=>{addFiles(e.target.files);inputEl.value='';};
  dropEl.addEventListener('dragover',e=>{e.preventDefault();dropEl.classList.add('over');});
  dropEl.addEventListener('dragleave',()=>dropEl.classList.remove('over'));
  dropEl.addEventListener('drop',e=>{e.preventDefault();dropEl.classList.remove('over');addFiles(e.dataTransfer.files);});

  confirmEl.onclick=processAll;

  async function processAll(){
    confirmEl.disabled=true;
    progModal.classList.add('open');
    setProgress(0,'Preparando...');
    try{
      const results=[];
      const animFiles=frames.filter(f=>isAnim(f.file));
      const staticFiles=frames.filter(f=>!isAnim(f.file));

      for(let i=0;i<animFiles.length;i++){
        const fr=animFiles[i];
        const out=await ffToWebp(fr.file,fr.file.name,(p)=>
          setProgress(p,`Convirtiendo ${fr.file.name}`));
        results.push({blob:out,name:fr.file.name.replace(/\.[^.]+$/,'.webp')});
      }

      if(staticFiles.length){
        if(mode==='sep'||staticFiles.length===1){
          for(let i=0;i<staticFiles.length;i++){
            setProgress(Math.round(i/staticFiles.length*100),`Frame ${i+1}/${staticFiles.length}`);
            const out=await compressFrame(staticFiles[i].croppedBlob||staticFiles[i].file);
            results.push({blob:out,name:staticFiles[i].file.name.replace(/\.[^.]+$/,'.webp')});
          }
        } else {
          const out=await ffAnimated(
            staticFiles.map(f=>f.croppedBlob||f.file),
            staticFiles.map(f=>f.delay||200),
            p=>setProgress(p,'Generando sticker animado...')
          );
          results.push({blob:out,name:'sticker_animado.webp'});
        }
      }

      setProgress(100,'Listo');
      progModal.classList.remove('open');
      showPreview(results);
    }catch(e){
      progModal.classList.remove('open');
      toast('Error: '+e.message);
      confirmEl.disabled=false;
    }  }

  let _pending=[];

  function showPreview(results){
    _pending=results;
    prevCont.innerHTML='';
    let totalKb=0;
    if(results.length===1){
      const img=document.createElement('img');
      img.src=URL.createObjectURL(results[0].blob);
      prevCont.appendChild(img);
      totalKb=results[0].blob.size/1024;
    } else {
      const wrap=document.createElement('div');
      wrap.className='sc-preview-list';
      results.forEach(r=>{
        const img=document.createElement('img');
        img.src=URL.createObjectURL(r.blob);
        wrap.appendChild(img);
        totalKb+=r.blob.size/1024;
      });
      prevCont.appendChild(wrap);
    }
    prevSize.textContent=results.length+' sticker'+(results.length>1?'s':'')+' - '+totalKb.toFixed(0)+'kb total';
    prevModal.classList.add('open');
  }

  prevCancel.onclick=()=>{prevModal.classList.remove('open');_pending=[];confirmEl.disabled=false;};

  prevOk.onclick=async()=>{
    prevModal.classList.remove('open');
    progModal.classList.add('open');
    setProgress(0,'Subiendo...');
    try{
      const form=new FormData();
      _pending.forEach((r,i)=>form.append('files',r.blob,r.name||('sticker_'+i+'.webp')));
      const res=await fetch('/api/stickers',{method:'POST',body:form});
      const {sid}=await res.json();
      progModal.classList.remove('open');
      const foot=document.querySelector('#sc-wrap .sk-foot');
      foot.innerHTML='<a class="sk-wa" href="https://wa.me/595972184435?text=CALS='+sid+'" target="_blank">Agregar a WhatsApp</a>';
      setTimeout(()=>{
        frames=[];_pending=[];cropQueue=[];mode='sep';
        renderFrames();syncOpts();
        foot.innerHTML='<button class="sc-btn" id="sc-confirm" disabled>Procesar</button>';
        document.getElementById('sc-confirm').onclick=processAll;
      },15000);
    }catch(e){
      progModal.classList.remove('open');      toast('Error subida: '+e.message);
      confirmEl.disabled=false;
    }
  };

  window._SC_show=()=>{document.getElementById('sk-wrap').style.display='none'; wrapEl.style.display='';wrapEl.scrollIntoView({behavior:'smooth',block:'start'});};
  window._SC_hide=()=>{wrapEl.style.display='none';document.getElementById('sk-wrap').style.display='';};
})();
</script>

<div class="sk-toast" id="sk-toast"></div>

</div>




</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>

</br>







<!-- 

<div style="text-align:center;">
<style>
._nb{position:absolute;top:0;font-size:1.8rem;text-decoration:none;z-index:10}
._nb.l{left:0}
._nb.r{right:0}
</style>
<a class="_nb l" href="web/es.html">🏠</a>
<a class="_nb r" href="web/search.html">🔍</a>
<h1>Redireccionando</h1>
<p> </p>
<a href="web/otros/Archivos/HTML/Stickers.html"><p>Si no sucede nada Presiona Aqui ⬅️</p></a>

<a href="web/es.html" class="back-button">← Volver al Inicio</a>




<script>
const a=document.createElement("a");
a.href="web/otros/Archivos/HTML/Stickers.html";
a.style.display="none";
document.body.appendChild(a);
a.click();
a.remove();

// setTimeout(()=>history.back(),1000);

</script> 

--> 