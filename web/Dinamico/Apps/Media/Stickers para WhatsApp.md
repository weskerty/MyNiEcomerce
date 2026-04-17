<div style="text-align:center">
<style>
._nb{position:absolute;top:0;font-size:1.8rem;text-decoration:none;z-index:10}
._nb.l{left:0}._nb.r{right:0}
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
.sc-btn{padding:8px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.14);color:white;cursor:pointer;font-size:.9em;transition:background .2s}
.sc-btn:hover{background:rgba(255,255,255,.24)}
.sc-btn:disabled{opacity:.4;cursor:not-allowed}
.sc-dz{border:2px dashed rgba(255,255,255,.25);border-radius:14px;padding:28px 16px;text-align:center;cursor:pointer;transition:border-color .2s,background .2s;color:rgba(255,255,255,.55);font-size:.9em;margin-bottom:12px}
.sc-dz:hover,.sc-dz.over{border-color:rgba(255,255,255,.55);background:rgba(255,255,255,.06)}
.sc-dz input{display:none}
.sc-frames{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;min-height:0}
.sc-fr{position:relative;width:80px;height:80px;border-radius:10px;overflow:hidden;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.15);cursor:grab;touch-action:none;flex-shrink:0}
.sc-fr img{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}
.sc-fr .sc-rm{position:absolute;top:2px;right:2px;background:rgba(0,0,0,.7);border:none;color:white;border-radius:50%;width:18px;height:18px;font-size:10px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1}
.sc-fr .sc-dl{position:absolute;bottom:2px;left:0;right:0;text-align:center;display:none}
.sc-fr .sc-dl input{width:50px;font-size:.7em;background:rgba(0,0,0,.7);border:1px solid rgba(255,255,255,.2);border-radius:4px;color:white;text-align:center;padding:1px 2px}
.sc-fr .sc-dl input::placeholder{color:rgba(255,255,255,.5)}
.sc-fr.drag-over{border-color:#4ade80;box-shadow:0 0 0 2px #4ade8055}
.sc-fr.dragging{opacity:.4}
.sc-opts{display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;align-items:center}
.sc-mode{display:flex;border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,.2)}
.sc-mode button{padding:6px 14px;background:rgba(255,255,255,.08);border:none;color:rgba(255,255,255,.6);cursor:pointer;font-size:.82em;transition:background .2s,color .2s}
.sc-mode button.active{background:rgba(255,255,255,.22);color:white}
.sc-modal{display:none;position:fixed;inset:0;z-index:200;align-items:center;justify-content:center;flex-direction:column;gap:12px}
.sc-modal.open{display:flex}
.sc-modal.z3{z-index:300}
.sc-crop-bg{background:rgba(0,0,0,.85)}
.sc-proc-bg,.sc-prev-bg{background:rgba(0,0,0,.88)}
.sc-crop-wrap{position:relative;max-width:min(90vw,420px);max-height:60vh;overflow:hidden}
.sc-crop-wrap img{display:block;max-width:100%;max-height:60vh}
.sc-pbar-w{width:240px;height:8px;background:rgba(255,255,255,.1);border-radius:4px;overflow:hidden}
.sc-pbar{height:100%;background:#4ade80;width:0%;transition:width .2s}
.sc-plbl{color:rgba(255,255,255,.8);font-size:.9em}
.sc-prev-modal img{max-width:256px;max-height:256px;border-radius:12px;image-rendering:pixelated}
.sc-prev-list{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width:400px}
.sc-prev-list img{width:80px;height:80px;border-radius:8px;object-fit:cover;image-rendering:pixelated}
.sc-sz{color:rgba(255,255,255,.5);font-size:.78em}
</style>

<a class="_nb l" href="web/blogs.html">🔔</a>
<a class="_nb r" href="web/search.html">🔍</a>
<img src="web/ICON.png" width="90px">

<div class="sk-wrap" id="sk-search">
  <div class="sk-bar">
    <input id="sk-q" type="text" placeholder="Buscar stickers...">
    <button id="sk-btn">Buscar</button>
    <button id="sk-crear" onclick="document.getElementById('sk-search').style.display='none';document.getElementById('sk-creator').style.display='';document.getElementById('sk-creator').scrollIntoView({behavior:'smooth',block:'start'})">Crear</button>
  </div>
  <div id="sk-grid" class="sk-grid"></div>
  <div id="sk-pg" class="gi-pg"></div>
  <div class="sk-foot">
    <button id="sk-cf" class="sk-cf" disabled>Confirmar (<span id="sk-n">0</span>)</button>
  </div>
</div>

<div class="sk-wrap" id="sk-creator" style="display:none">
  <div class="sk-bar" style="margin-bottom:8px">
    <button class="sc-btn" onclick="document.getElementById('sk-creator').style.display='none';document.getElementById('sk-search').style.display=''">← Buscar</button>
  </div>
  <div class="sc-dz" id="sc-dz">
    <input type="file" id="sc-in" accept="image/*,video/mp4,.gif" multiple>
    <div>Subir imagenes, GIF o MP4<br><small style="opacity:.6">Max 5MB por archivo - Max 50</small></div>
  </div>
  <div class="sc-frames" id="sc-frames"></div>
  <div class="sc-opts" id="sc-opts" style="display:none">
    <div class="sc-mode" id="sc-mode">
      <button class="active" data-m="sep">Stickers separados</button>
      <button data-m="anim">Sticker animado</button>
    </div>
  </div>
  <div class="sk-foot" id="sc-foot">
    <button class="sc-btn" id="sc-cf" disabled>Procesar</button>
  </div>
</div>

<div class="sk-toast" id="sk-toast"></div>

<div class="sc-modal sc-crop-bg" id="sc-crop-modal">
  <div class="sc-crop-wrap"><img id="sc-crop-img" src=""></div>
  <div style="display:flex;gap:10px">
    <button class="sc-btn" id="sc-crop-ok">Recortar</button>
    <button class="sc-btn" id="sc-crop-skip">Saltar</button>
  </div>
</div>

<div class="sc-modal sc-proc-bg z3" id="sc-prog-modal">
  <div style="font-size:2rem">⚙</div>
  <div class="sc-plbl" id="sc-prog-lbl">Iniciando...</div>
  <div class="sc-pbar-w"><div class="sc-pbar" id="sc-pbar"></div></div>
  <div class="sc-sz" id="sc-prog-sz"></div>
</div>

<div class="sc-modal sc-prev-bg z3 sc-prev-modal" id="sc-prev-modal">
  <div style="color:white;font-size:1em;margin-bottom:4px">Vista previa</div>
  <div id="sc-prev-cont"></div>
  <div class="sc-sz" id="sc-prev-sz"></div>
  <div style="display:flex;gap:10px;margin-top:4px">
    <button class="sc-btn" id="sc-prev-ok">Confirmar</button>
    <button class="sc-btn" id="sc-prev-cancel">Cancelar</button>
  </div>
</div>

<script>
(function(){
  const PG=18,MAX_SEL=50,CD_MS=10000;
  let R=[],S=new Set(),pg=0,cdEnd=0,cdRaf=null;
  const wEl=document.getElementById('sk-search'),gEl=document.getElementById('sk-grid'),pgEl=document.getElementById('sk-pg'),tEl=document.getElementById('sk-toast');
  let _tt;
  function toast(m){tEl.textContent=m;tEl.classList.add('show');clearTimeout(_tt);_tt=setTimeout(()=>tEl.classList.remove('show'),2200);}
  function getCf(){return document.getElementById('sk-cf-search')||document.getElementById('sk-cf');}
  function startCD(){
    cdEnd=Date.now()+CD_MS;const btn=document.getElementById('sk-btn');btn.disabled=true;btn.classList.add('sk-cd');
    function tick(){const rem=cdEnd-Date.now();if(rem<=0){btn.disabled=false;btn.classList.remove('sk-cd');btn.style.removeProperty('--sk-cd-p');btn.textContent='Buscar';cdRaf=null;return;}
    btn.style.setProperty('--sk-cd-p',((1-rem/CD_MS)*100).toFixed(1)+'%');btn.textContent=Math.ceil(rem/1000)+'s';cdRaf=requestAnimationFrame(tick);}
    cdRaf=requestAnimationFrame(tick);
  }
  function reset(){R=[];S.clear();pg=0;gEl.innerHTML='';pgEl.innerHTML='';document.getElementById('sk-q').value='';
    document.querySelector('#sk-search .sk-foot').innerHTML='<button id="sk-cf" class="sk-cf" disabled>Confirmar (<span id="sk-n">0</span>)</button>';
    document.getElementById('sk-cf').onclick=confirm;}
  function renderPage(p){
    pg=p;const sl=p*PG,chunk=R.slice(sl,sl+PG);gEl.innerHTML='';
    chunk.forEach(item=>{
      const url=item.file?.hd?.webp?.url;if(!url)return;
      const sel=S.has(url),atMax=!sel&&S.size>=MAX_SEL;
      const d=document.createElement('div');d.className='sk-it'+(sel?' sk-on':'')+(atMax?' sk-max':'');
      const img=document.createElement('img');img.src=item.blur_preview;img.decoding='async';
      if(!atMax||sel){const r=new Image();r.onload=()=>{img.src=url};r.src=url;}
      d.appendChild(img);
      if(!atMax||sel){d.onclick=()=>{
        const was=S.has(url);if(was){S.delete(url);d.classList.remove('sk-on','sk-max');gEl.querySelectorAll('.sk-it.sk-max').forEach(e=>e.classList.remove('sk-max'));}
        else{if(S.size>=MAX_SEL){toast('Solo '+MAX_SEL+' a la vez');return;}S.add(url);d.classList.add('sk-on');if(S.size>=MAX_SEL)gEl.querySelectorAll('.sk-it:not(.sk-on)').forEach(e=>e.classList.add('sk-max'));}
        const n=document.getElementById('sk-n'),cf=document.getElementById('sk-cf');if(n)n.textContent=S.size;if(cf)cf.disabled=S.size===0;
      };}
      gEl.appendChild(d);
    });
    renderPg();wEl.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function renderPg(){pgEl.innerHTML='';if(R.length<=PG)return;const max=Math.ceil(R.length/PG)-1;const bP=document.createElement('button'),bN=document.createElement('button');bP.textContent='Anterior';bN.textContent='Siguiente';bP.disabled=pg===0;bN.disabled=pg===max;bP.onclick=()=>renderPage(pg-1);bN.onclick=()=>renderPage(pg+1);pgEl.appendChild(bP);pgEl.appendChild(bN);}
  async function search(){
    if(Date.now()<cdEnd)return;const q=document.getElementById('sk-q').value.trim();if(!q)return;
    gEl.innerHTML='<div class="sk-searching"><span>⏳</span><span>Buscando</span></div>';pgEl.innerHTML='';R=[];S.clear();pg=0;
    const n=document.getElementById('sk-n'),cf=document.getElementById('sk-cf');if(n)n.textContent=0;if(cf)cf.disabled=true;
    startCD();
    try{const res=await fetch('/api/stickers?q='+encodeURIComponent(q));const data=await res.json();R=data.data?.data||[];R.length?renderPage(0):(gEl.innerHTML='<p class="sk-msg">Sin resultados</p>');}
    catch(e){gEl.innerHTML='<p class="sk-msg">Error '+e.message+'</p>';}
  }
  async function confirm(){
    const cf=document.getElementById('sk-cf');if(cf){cf.disabled=true;cf.textContent='Procesando...';}
    try{
      const res=await fetch('/api/stickers',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({urls:[...S]})});
      const {sid}=await res.json();
      document.querySelector('#sk-search .sk-foot').innerHTML='<a class="sk-wa" id="sk-wa-btn" href="https://wa.me/595972184435?text=CALS='+sid+'" target="_blank">Agrega los Stickers a WhatsApp</a>';
      document.getElementById('sk-wa-btn').addEventListener('click',()=>setTimeout(reset,300));
    }catch(e){const cf2=document.getElementById('sk-cf');if(cf2){cf2.innerHTML='Confirmar (<span id="sk-n">'+S.size+'</span>)';cf2.disabled=false;}}
  }
  document.getElementById('sk-btn').onclick=search;
  document.getElementById('sk-q').addEventListener('keydown',e=>{if(e.key==='Enter')search();});
  document.getElementById('sk-cf').onclick=confirm;
  const cont=document.getElementById('content');
  if(cont)cont.addEventListener('contentUnload',()=>{R=[];S.clear();if(cdRaf)cancelAnimationFrame(cdRaf);},{once:true});
})();

(function(){
  const MAX_F=50,MAX_SZ=5*1024*1024,TARGET=950*1024,DIM=256;
  const FF_URL='https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.11.6/dist/ffmpeg.min.js';
  const FC_ST='https://cdn.jsdelivr.net/npm/@ffmpeg/core-st@0.11.1/dist/ffmpeg-core.js';
  let frames=[],cropQ=[],cropper=null,mode='sep',_ff=null,_ffP=null,_progCb=null;
  const frEl=document.getElementById('sc-frames'),optsEl=document.getElementById('sc-opts'),cfEl=document.getElementById('sc-cf'),
        dzEl=document.getElementById('sc-dz'),inEl=document.getElementById('sc-in'),modeEl=document.getElementById('sc-mode'),
        cropM=document.getElementById('sc-crop-modal'),cropImg=document.getElementById('sc-crop-img'),
        cropOk=document.getElementById('sc-crop-ok'),cropSkip=document.getElementById('sc-crop-skip'),
        progM=document.getElementById('sc-prog-modal'),pBar=document.getElementById('sc-pbar'),pLbl=document.getElementById('sc-prog-lbl'),pSz=document.getElementById('sc-prog-sz'),
        prevM=document.getElementById('sc-prev-modal'),prevCont=document.getElementById('sc-prev-cont'),prevSz=document.getElementById('sc-prev-sz'),
        prevOk=document.getElementById('sc-prev-ok'),prevCancel=document.getElementById('sc-prev-cancel');
  function isA(f){return f.type==='image/gif'||f.type==='video/mp4'||f.name?.endsWith('.mp4');}
  function toast(m){const t=document.getElementById('sk-toast');if(!t)return;t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200);}
  function setProg(p,l,s){pBar.style.width=p+'%';if(l!=null)pLbl.textContent=l;if(s!=null)pSz.textContent=s;}
  function loadFFScript(){
    return new Promise((res,rej)=>{
      if(window.FFmpeg){res();return;}
      const s=document.createElement('script');s.src=FF_URL;s.onload=res;s.onerror=rej;document.head.appendChild(s);
    });
  }
  function loadFF(){
    if(!_ffP)_ffP=(async()=>{
      await loadFFScript();
      const {createFFmpeg,fetchFile}=window.FFmpeg;
      _ff=createFFmpeg({mainName:'main',corePath:FC_ST,progress:({ratio})=>{if(_progCb)_progCb(Math.round(Math.max(0,Math.min(1,ratio||0))*100));}});
      _ff._fetchFile=fetchFile;
      await _ff.load();
    })();
    return _ffP;
  }
  async function _run(args){await _ff.run(...args);}
  async function _write(name,blob){_ff.FS('writeFile',name,await _ff._fetchFile(blob));}
  function _read(name){return new Blob([_ff.FS('readFile',name)],{type:'image/webp'});}
  function _rm(name){try{_ff.FS('unlink',name);}catch(_){}}
  async function ffToWebp(blob,name,cb){
    await loadFF();_progCb=cb||null;
    await _write(name,blob);
    await _run(['-i',name,'-vf','scale='+DIM+':'+DIM+':force_original_aspect_ratio=decrease,pad='+DIM+':'+DIM+':(ow-iw)/2:(oh-ih)/2','-quality','40','-loop','0','o.webp']);
    let r=_read('o.webp');_rm(name);_rm('o.webp');
    if(r.size>TARGET){
      await _write(name,r);
      await _run(['-i',name,'-vf','scale='+DIM+':'+DIM+':force_original_aspect_ratio=decrease,pad='+DIM+':'+DIM+':(ow-iw)/2:(oh-ih)/2','-quality','10','-loop','0','o.webp']);
      r=_read('o.webp');_rm(name);_rm('o.webp');
    }
    _progCb=null;return r;
  }
  async function ffAnim(blobs,delays,cb){
    await loadFF();_progCb=cb||null;
    for(let i=0;i<blobs.length;i++)await _write('f'+i+'.webp',blobs[i]);
    let txt='';for(let i=0;i<blobs.length;i++)txt+="file 'f"+i+".webp'\nduration "+((delays[i]||200)/1000).toFixed(3)+'\n';
    txt+="file 'f"+(blobs.length-1)+".webp'\n";
    _ff.FS('writeFile','c.txt',new TextEncoder().encode(txt));
    const run=async(sc,q)=>{
      await _run(['-f','concat','-safe','0','-i','c.txt','-vf','scale='+sc+':'+sc+':force_original_aspect_ratio=decrease,pad='+sc+':'+sc+':(ow-iw)/2:(oh-ih)/2','-quality',String(q),'-loop','0','a.webp']);
      const r=_read('a.webp');_rm('a.webp');return r;
    };
    let r=await run(DIM,40);if(r.size>TARGET)r=await run(DIM,10);if(r.size>TARGET)r=await run(128,10);
    for(let i=0;i<blobs.length;i++)_rm('f'+i+'.webp');
    _rm('c.txt');_progCb=null;return r;
  }
  async function imgFrom(blob){return new Promise(res=>{const u=URL.createObjectURL(blob);const img=new Image();img.onload=()=>res({img,u});img.src=u;});}
  async function toWebpCanvas(blob,q,dim){
    const d=dim||DIM,{img,u}=await imgFrom(blob),c=document.createElement('canvas');
    c.width=d;c.height=d;c.getContext('2d').drawImage(img,0,0,d,d);URL.revokeObjectURL(u);
    return new Promise(res=>c.toBlob(res,'image/webp',q));
  }
  async function compress(blob){
    for(const q of[.4,.2,.1,.09,.08,.07,.06,.05,.04,.03,.02,.01]){const o=await toWebpCanvas(blob,q);if(o.size<=TARGET)return o;}
    return toWebpCanvas(blob,.1,128);
  }
  function syncDL(){const show=mode==='anim';frEl.querySelectorAll('.sc-dl').forEach(e=>e.style.display=show?'block':'none');}
  function renderFrames(){
    frEl.innerHTML='';
    frames.forEach((f,i)=>{
      const d=document.createElement('div');d.className='sc-fr';d.draggable=true;
      const img=document.createElement('img');img.src=f.preview;
      const rm=document.createElement('button');rm.className='sc-rm';rm.textContent='x';
      rm.onclick=e=>{e.stopPropagation();frames.splice(i,1);renderFrames();syncOpts();};
      d.appendChild(img);d.appendChild(rm);
      if(!isA(f.file)){
        const dd=document.createElement('div');dd.className='sc-dl';dd.style.display=mode==='anim'?'block':'none';
        const inp=document.createElement('input');inp.type='tel';inp.inputMode='numeric';inp.pattern='[0-9]*';inp.placeholder='Tiempo';
        if(f.delay)inp.value=f.delay;inp.title='ms';
        inp.oninput=e=>{frames[i].delay=parseInt(e.target.value.replace(/\D/g,''))||null;};
        inp.onclick=e=>e.stopPropagation();dd.appendChild(inp);d.appendChild(dd);
      }
      d.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',String(i));d.classList.add('dragging');});
      d.addEventListener('dragend',()=>d.classList.remove('dragging'));
      d.addEventListener('dragover',e=>{e.preventDefault();d.classList.add('drag-over');});
      d.addEventListener('dragleave',()=>d.classList.remove('drag-over'));
      d.addEventListener('drop',e=>{e.preventDefault();d.classList.remove('drag-over');const from=parseInt(e.dataTransfer.getData('text/plain'));if(from!==i){[frames[from],frames[i]]=[frames[i],frames[from]];renderFrames();}});
      frEl.appendChild(d);
    });
    cfEl.disabled=frames.length===0;
  }
  function syncOpts(){
    const sc=frames.filter(f=>!isA(f.file)).length;optsEl.style.display=sc>1?'flex':'none';
    if(sc<=1&&mode==='anim'){mode='sep';modeEl.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.m==='sep'));}
    cfEl.disabled=frames.length===0;
  }
  function videoThumb(file){
    return new Promise(res=>{
      const v=document.createElement('video');v.muted=true;v.playsInline=true;
      const u=URL.createObjectURL(file);
      v.onloadeddata=()=>{v.currentTime=0;};
      v.onseeked=()=>{
        const c=document.createElement('canvas');c.width=80;c.height=80;
        c.getContext('2d').drawImage(v,0,0,80,80);
        URL.revokeObjectURL(u);res(c.toDataURL('image/webp',.7));
      };
      v.onerror=()=>{URL.revokeObjectURL(u);res('');};
      v.src=u;v.load();
    });
  }
  async function addFiles(list){
    const valid=[...list].filter(f=>{if(f.size>MAX_SZ){toast('Max 5MB: '+f.name);return false;}return true;});
    if(frames.length+valid.length>MAX_F){toast('Max '+MAX_F+' archivos');valid.length=Math.max(0,MAX_F-frames.length);}
    const nf=await Promise.all(valid.map(async f=>{
      const preview=isA(f)?await videoThumb(f):URL.createObjectURL(f);
      return {file:f,preview,delay:null,croppedBlob:null};
    }));
    frames.push(...nf);renderFrames();syncOpts();
    const st=nf.filter(f=>!isA(f.file));
    if(st.length){cropQ.push(...st);if(cropQ.length===st.length)nextCrop();}
  }
  function nextCrop(){
    if(!cropQ.length){cropM.classList.remove('open');return;}
    const fr=cropQ[0];cropImg.src=fr.preview;cropM.classList.add('open');
    if(cropper){cropper.destroy();cropper=null;}
    cropImg.onload=()=>{if(!window.Cropper)loadCropperJS().then(initCropper);else initCropper();};
  }
  function initCropper(){cropper=new Cropper(cropImg,{aspectRatio:1,viewMode:1,dragMode:'move',background:false,autoCropArea:.9});}
  function loadCropperJS(){
    return new Promise((res,rej)=>{
      const l=document.createElement('link');l.rel='stylesheet';l.href='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.2/cropper.min.css';document.head.appendChild(l);
      const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.2/cropper.min.js';s.onload=res;s.onerror=rej;document.head.appendChild(s);
    });
  }
  cropOk.onclick=()=>{
    if(!cropper)return;
    cropper.getCroppedCanvas({width:DIM,height:DIM,imageSmoothingQuality:'high'}).toBlob(blob=>{
      const fr=cropQ.shift();const idx=frames.indexOf(fr);
      if(idx>-1){URL.revokeObjectURL(fr.preview);fr.preview=URL.createObjectURL(blob);fr.croppedBlob=blob;const img=frEl.children[idx]?.querySelector('img');if(img)img.src=fr.preview;}
      if(cropper){cropper.destroy();cropper=null;}nextCrop();
    },'image/webp',.9);
  };
  cropSkip.onclick=()=>{cropQ.shift();if(cropper){cropper.destroy();cropper=null;}nextCrop();};
  modeEl.querySelectorAll('button').forEach(btn=>{btn.onclick=()=>{modeEl.querySelectorAll('button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');mode=btn.dataset.m;syncDL();};});
  dzEl.onclick=()=>inEl.click();
  inEl.onchange=e=>{addFiles(e.target.files);inEl.value='';};
  dzEl.addEventListener('dragover',e=>{e.preventDefault();dzEl.classList.add('over');});
  dzEl.addEventListener('dragleave',()=>dzEl.classList.remove('over'));
  dzEl.addEventListener('drop',e=>{e.preventDefault();dzEl.classList.remove('over');addFiles(e.dataTransfer.files);});
  cfEl.onclick=processAll;
  async function processAll(){
    cfEl.disabled=true;progM.classList.add('open');setProg(0,'Preparando...');
    try{
      const results=[],animF=frames.filter(f=>isA(f.file)),statF=frames.filter(f=>!isA(f.file));
      for(let i=0;i<animF.length;i++){
        const fr=animF[i];
        const out=await ffToWebp(fr.file,fr.file.name,p=>setProg(p,'Convirtiendo '+fr.file.name));
        results.push({blob:out,name:fr.file.name.replace(/\.[^.]+$/,'.webp')});
      }
      if(statF.length){
        if(mode==='sep'||statF.length===1){
          for(let i=0;i<statF.length;i++){
            setProg(Math.round(i/statF.length*100),'Frame '+(i+1)+'/'+statF.length);
            const out=await compress(statF[i].croppedBlob||statF[i].file);
            results.push({blob:out,name:statF[i].file.name.replace(/\.[^.]+$/,'.webp')});
          }
        }else{
          const out=await ffAnim(statF.map(f=>f.croppedBlob||f.file),statF.map(f=>f.delay||200),p=>setProg(p,'Generando sticker animado...'));
          results.push({blob:out,name:'sticker_animado.webp'});
        }
      }
      setProg(100,'Listo');progM.classList.remove('open');showPreview(results);
    }catch(e){progM.classList.remove('open');toast('Error: '+e.message);cfEl.disabled=false;}
  }
  let _pend=[];
  function showPreview(results){
    _pend=results;prevCont.innerHTML='';let kb=0;
    if(results.length===1){const img=document.createElement('img');img.src=URL.createObjectURL(results[0].blob);prevCont.appendChild(img);kb=results[0].blob.size/1024;}
    else{const w=document.createElement('div');w.className='sc-prev-list';results.forEach(r=>{const img=document.createElement('img');img.src=URL.createObjectURL(r.blob);w.appendChild(img);kb+=r.blob.size/1024;});prevCont.appendChild(w);}
    prevSz.textContent=results.length+' sticker'+(results.length>1?'s':'')+' - '+kb.toFixed(0)+'kb total';
    prevM.classList.add('open');
  }
  prevCancel.onclick=()=>{prevM.classList.remove('open');_pend=[];cfEl.disabled=false;};
  prevOk.onclick=async()=>{
    prevM.classList.remove('open');progM.classList.add('open');setProg(0,'Subiendo...');
    try{
      const form=new FormData();_pend.forEach((r,i)=>form.append('files',r.blob,r.name||'sticker_'+i+'.webp'));
      const res=await fetch('/api/stickers',{method:'POST',body:form});
      const {sid}=await res.json();progM.classList.remove('open');
      const foot=document.getElementById('sc-foot');
      foot.innerHTML='<a class="sk-wa" href="https://wa.me/595972184435?text=CALS='+sid+'" target="_blank">Agregar a WhatsApp</a>';
      setTimeout(()=>{frames=[];_pend=[];cropQ=[];mode='sep';renderFrames();syncOpts();foot.innerHTML='<button class="sc-btn" id="sc-cf" disabled>Procesar</button>';document.getElementById('sc-cf').onclick=processAll;},15000);
    }catch(e){progM.classList.remove('open');toast('Error subida: '+e.message);cfEl.disabled=false;}
  };
})();
</script>
</div>
