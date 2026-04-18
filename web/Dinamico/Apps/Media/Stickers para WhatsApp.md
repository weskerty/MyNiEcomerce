<div style="text-align:center;position:relative">
<style>
._nb{position:absolute;top:0;font-size:1.8rem;text-decoration:none;z-index:10}
._nb.l{left:0}._nb.r{right:0}
._ic{display:block;margin:0 auto 8px}
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

<a class="_nb l" href="web/blogs.html">🔔</a>
<a class="_nb r" href="web/search.html">🔍</a>
<img class="_ic" src="web/ICON.png" width="90px">

<div class="sk-wrap" id="sk-search">
  <div class="sk-bar">
    <input id="sk-q" type="text" placeholder="Buscar stickers...">
    <button id="sk-btn">Buscar</button>
    <button id="sk-crear" onclick="document.getElementById('sk-search').style.display='none';document.getElementById('sk-creator').style.display=''">Crear</button>
  </div>
  <div id="sk-grid" class="sk-grid"></div>
  <div id="sk-pg" class="gi-pg"></div>
  <div class="sk-foot">
    <button id="sk-cf" class="sk-cf" disabled>Confirmar (<span id="sk-n">0</span>)</button>
    <a id="sk-wa-btn" class="sk-wa" style="display:none" href="#" target="_blank">Agrega los Stickers a WhatsApp</a>
  </div>
</div>

<div class="sk-wrap" id="sk-creator" style="display:none">
  <div class="sk-bar" style="margin-bottom:8px">
    <button class="sc-btn" onclick="document.getElementById('sk-creator').style.display='none';document.getElementById('sk-search').style.display=''">← Buscar</button>
  </div>
  <div class="sc-dz" id="sc-dz">
    <input type="file" id="sc-in" accept="image/*" multiple>
    <div>Subir imagenes<br><small style="opacity:.6">Max 5MB - Max 50 archivos</small></div>
  </div>
  <div class="sc-frames" id="sc-frames"></div>
  <div class="sk-foot" id="sc-foot">
    <button class="sc-btn" id="sc-cf" disabled>Enviar</button>
    <a id="sc-wa" class="sk-wa" style="display:none" href="#" target="_blank">Agregar a WhatsApp</a>
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
  <div style="font-size:2rem">⚙</div>
  <div class="sc-plbl" id="sc-prog-lbl">Subiendo...</div>
  <div class="sc-pbar-w"><div class="sc-pbar" id="sc-pbar"></div></div>
</div>

<script>
(function(){
  const PG=18,MAX_SEL=50,CD_MS=10000;
  let R=[],S=new Set(),pg=0,cdEnd=0,cdRaf=null;
  const wEl=document.getElementById('sk-search'),gEl=document.getElementById('sk-grid'),pgEl=document.getElementById('sk-pg'),tEl=document.getElementById('sk-toast');
  const cfEl=document.getElementById('sk-cf'),waBtn=document.getElementById('sk-wa-btn');
  let _tt;
  function toast(m){tEl.textContent=m;tEl.classList.add('show');clearTimeout(_tt);_tt=setTimeout(()=>tEl.classList.remove('show'),2200);}
  function startCD(){
    cdEnd=Date.now()+CD_MS;const btn=document.getElementById('sk-btn');btn.disabled=true;btn.classList.add('sk-cd');
    function tick(){const rem=cdEnd-Date.now();if(rem<=0){btn.disabled=false;btn.classList.remove('sk-cd');btn.style.removeProperty('--sk-cd-p');btn.textContent='Buscar';cdRaf=null;return;}
    btn.style.setProperty('--sk-cd-p',((1-rem/CD_MS)*100).toFixed(1)+'%');btn.textContent=Math.ceil(rem/1000)+'s';cdRaf=requestAnimationFrame(tick);}
    cdRaf=requestAnimationFrame(tick);
  }
  function reset(){R=[];S.clear();pg=0;gEl.innerHTML='';pgEl.innerHTML='';document.getElementById('sk-q').value='';
    cfEl.innerHTML='Confirmar (<span id="sk-n">0</span>)';cfEl.disabled=true;cfEl.style.display='';
    waBtn.style.display='none';waBtn.href='#';
  }
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
    cfEl.disabled=true;cfEl.textContent='Procesando...';
    try{
      const res=await fetch('/api/stickers',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({urls:[...S]})});
      const {sid}=await res.json();
      cfEl.style.display='none';
      waBtn.href='https://wa.me/595972184435?text=CALS='+sid;
      waBtn.style.display='';
      waBtn.onclick=()=>setTimeout(reset,300);
    }catch(e){cfEl.innerHTML='Confirmar (<span id="sk-n">'+S.size+'</span>)';cfEl.disabled=false;}
  }
  document.getElementById('sk-btn').onclick=search;
  document.getElementById('sk-q').addEventListener('keydown',e=>{if(e.key==='Enter')search();});
  cfEl.onclick=confirm;
  const cont=document.getElementById('content');
  if(cont)cont.addEventListener('contentUnload',()=>{R=[];S.clear();if(cdRaf)cancelAnimationFrame(cdRaf);},{once:true});
})();

(function(){
  const MAX_F=50,MAX_SZ=5*1024*1024,DIM=256,TARGET=950*1024;
  let frames=[],cropQ=[],cropper=null;
  const frEl=document.getElementById('sc-frames'),
        cfEl=document.getElementById('sc-cf'),
        waEl=document.getElementById('sc-wa'),
        dzEl=document.getElementById('sc-dz'),inEl=document.getElementById('sc-in'),
        cropM=document.getElementById('sc-crop-modal'),cropImg=document.getElementById('sc-crop-img'),
        cropInfo=document.getElementById('sc-crop-info'),
        cropOk=document.getElementById('sc-crop-ok'),cropSkip=document.getElementById('sc-crop-skip'),
        progM=document.getElementById('sc-prog-modal'),pBar=document.getElementById('sc-pbar'),pLbl=document.getElementById('sc-prog-lbl');

  function toast(m){const t=document.getElementById('sk-toast');if(!t)return;t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200);}
  function setProg(p,l){pBar.style.width=p+'%';if(l!=null)pLbl.textContent=l;}

  function renderFrames(){
    frEl.innerHTML='';
    frames.forEach((f,i)=>{
      const d=document.createElement('div');
      d.className='sc-fr'+(f.croppedBlob?' sc-done':'');
      const img=document.createElement('img');img.src=f.preview;
      const rm=document.createElement('button');rm.className='sc-rm';rm.textContent='x';
      rm.onclick=e=>{e.stopPropagation();URL.revokeObjectURL(f.preview);frames.splice(i,1);renderFrames();cfEl.disabled=frames.length===0;};
      d.appendChild(img);d.appendChild(rm);
      d.onclick=()=>{cropQ=[f];nextCrop();};
      frEl.appendChild(d);
    });
    cfEl.disabled=frames.length===0;
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
    if(!cropQ.length){cropM.classList.remove('open');return;}
    const fr=cropQ[0];
    const idx=frames.indexOf(fr)+1;
    cropInfo.textContent=idx+' / '+frames.length;
    cropM.classList.add('open');
    if(cropper){cropper.destroy();cropper=null;}
    const src=fr.croppedBlob?URL.createObjectURL(fr.croppedBlob):fr.preview;
    cropImg.onload=initCropper;
    cropImg.src=src;
    if(cropImg.complete&&cropImg.naturalWidth)initCropper();
  }

  cropOk.onclick=()=>{
    if(!cropper)return;
    cropper.getCroppedCanvas({imageSmoothingQuality:'high'}).toBlob(blob=>{
      const fr=cropQ.shift();
      if(fr.croppedBlob)URL.revokeObjectURL(fr.croppedBlob);
      fr.croppedBlob=blob;
      fr.preview=URL.createObjectURL(blob);
      const idx=frames.indexOf(fr);
      const el=frEl.children[idx];
      if(el){el.querySelector('img').src=fr.preview;el.classList.add('sc-done');}
      if(cropper){cropper.destroy();cropper=null;}
      if(!cropQ.length&&frames.indexOf(fr)<frames.length-1){
        const next=frames[frames.indexOf(fr)+1];
        if(next)cropQ.push(next);
      }
      nextCrop();
    },'image/webp',.92);
  };

  cropSkip.onclick=()=>{
    const fr=cropQ.shift();
    if(cropper){cropper.destroy();cropper=null;}
    if(!cropQ.length&&frames.indexOf(fr)<frames.length-1){
      const next=frames[frames.indexOf(fr)+1];
      if(next)cropQ.push(next);
    }
    nextCrop();
  };

  async function addFiles(list){
    const valid=[...list].filter(f=>{
      if(!f.type.startsWith('image/')){toast('Solo imagenes: '+f.name);return false;}
      if(f.size>MAX_SZ){toast('Max 5MB: '+f.name);return false;}
      return true;
    });
    if(frames.length+valid.length>MAX_F){toast('Max '+MAX_F+' archivos');valid.length=Math.max(0,MAX_F-frames.length);}
    const nf=valid.map(f=>({file:f,preview:URL.createObjectURL(f),croppedBlob:null}));
    frames.push(...nf);renderFrames();
    if(nf.length){cropQ.push(...nf);if(cropQ.length===nf.length)nextCrop();}
  }

  async function toWebp(blob){
    const q_list=[.92,.7,.5,.3,.15,.08,.04,.02,.01];
    for(const q of q_list){
      const out=await new Promise(res=>{
        const u=URL.createObjectURL(blob);const img=new Image();
        img.onload=()=>{
          const c=document.createElement('canvas');c.width=DIM;c.height=DIM;
          c.getContext('2d').drawImage(img,0,0,DIM,DIM);
          URL.revokeObjectURL(u);c.toBlob(res,'image/webp',q);
        };img.src=u;
      });
      if(out.size<=TARGET)return out;
    }
    return new Promise(res=>{
      const u=URL.createObjectURL(blob);const img=new Image();
      img.onload=()=>{
        const c=document.createElement('canvas');c.width=128;c.height=128;
        c.getContext('2d').drawImage(img,0,0,128,128);
        URL.revokeObjectURL(u);c.toBlob(res,'image/webp',.05);
      };img.src=u;
    });
  }

  cfEl.onclick=async()=>{
    cfEl.disabled=true;progM.classList.add('open');setProg(0,'Procesando...');
    try{
      const form=new FormData();
      for(let i=0;i<frames.length;i++){
        setProg(Math.round(i/frames.length*80),'Procesando '+(i+1)+'/'+frames.length);
        const src=frames[i].croppedBlob||frames[i].file;
        const webp=await toWebp(src);
        form.append('files',webp,frames[i].file.name.replace(/\.[^.]+$/,'.webp'));
      }
      setProg(85,'Subiendo...');
      const res=await fetch('/api/stickers',{method:'POST',body:form});
      const {sid}=await res.json();
      setProg(100,'Listo');
      progM.classList.remove('open');
      cfEl.style.display='none';
      waEl.href='https://wa.me/595972184435?text=CALS='+sid;
      waEl.style.display='';
      setTimeout(()=>{
        frames.forEach(f=>{URL.revokeObjectURL(f.preview);if(f.croppedBlob)URL.revokeObjectURL(f.croppedBlob);});
        frames=[];cropQ=[];renderFrames();
        waEl.style.display='none';waEl.href='#';
        cfEl.style.display='';cfEl.disabled=true;
      },15000);
    }catch(e){progM.classList.remove('open');toast('Error: '+e.message);cfEl.disabled=false;}
  };

  dzEl.onclick=()=>inEl.click();
  inEl.onchange=e=>{addFiles(e.target.files);inEl.value='';};
  dzEl.addEventListener('dragover',e=>{e.preventDefault();dzEl.classList.add('over');});
  dzEl.addEventListener('dragleave',()=>dzEl.classList.remove('over'));
  dzEl.addEventListener('drop',e=>{e.preventDefault();dzEl.classList.remove('over');addFiles(e.dataTransfer.files);});
})();
</script>
</div>
