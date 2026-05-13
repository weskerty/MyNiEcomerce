<div style="text-align:center;position:relative;padding-top:0;margin-top:0">
<style>
.vc-wrap{padding:12px;max-width:100%}
.vc-drop{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;min-height:160px;border:2px dashed rgba(255,255,255,.2);border-radius:20px;background:rgba(255,255,255,.05);cursor:pointer;transition:border-color .2s,background .2s;padding:24px 16px;margin-bottom:14px}
.vc-drop:hover,.vc-drop.vc-over{border-color:rgba(56,189,248,.5);background:rgba(56,189,248,.07)}
.vc-drop span{color:rgba(255,255,255,.5);font-size:.9em}
.vc-preview{display:none;width:100%;max-width:420px;border-radius:16px;background:#000;margin:0 auto 14px;overflow:hidden;position:relative}
.vc-preview video{width:100%;display:block;border-radius:16px}
.vc-info{color:rgba(255,255,255,.55);font-size:.82em;margin-top:4px;text-align:center}
.vc-btns{display:flex;justify-content:center;gap:10px;margin-bottom:14px;flex-wrap:wrap}
.vc-sb{padding:10px 22px;border-radius:12px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.1);color:white;cursor:pointer;font-size:.95em;transition:background .2s,border-color .2s,box-shadow .2s}
.vc-sb:hover:not(:disabled){background:rgba(255,255,255,.2)}
.vc-sb.vc-act{border-color:rgba(56,189,248,.6);background:rgba(56,189,248,.15);box-shadow:0 0 0 2px rgba(56,189,248,.15)}
.vc-sb:disabled{opacity:.35;cursor:not-allowed}
.vc-go{padding:12px 36px;border-radius:12px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.14);color:white;cursor:pointer;font-size:1.1em;transition:background .2s;display:none}
.vc-go:hover:not(:disabled){background:rgba(255,255,255,.24)}
.vc-go:disabled{opacity:.4;cursor:default}
.vc-list{display:flex;flex-direction:column;gap:8px;margin-bottom:14px}
.vc-it{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:10px 14px}
.vc-it span{flex:1;color:rgba(255,255,255,.8);font-size:.88em;text-align:left}
.vc-dl{padding:7px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(56,189,248,.18);color:white;cursor:pointer;font-size:.85em;text-decoration:none;transition:background .2s;white-space:nowrap}
.vc-dl:hover{background:rgba(56,189,248,.32);color:white}
.vc-prog-w{width:100%;height:6px;background:rgba(255,255,255,.1);border-radius:3px;overflow:hidden;margin-bottom:4px;display:none}
.vc-prog{height:100%;background:#38bdf8;width:0%;transition:width .2s}
.vc-lbl{color:rgba(255,255,255,.6);font-size:.83em;text-align:center;min-height:1.2em;margin-bottom:10px}
.vc-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:white;padding:10px 22px;border-radius:12px;font-size:.88em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999;white-space:nowrap}
.vc-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.vc-reset{padding:8px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:rgba(255,255,255,.6);cursor:pointer;font-size:.85em;transition:background .2s;display:none}
.vc-reset:hover{background:rgba(255,255,255,.16)}
</style>

<img class="_ic" src="web/otros/Archivos/Imagenes/Permanente/ICONS/ICON-Klipy.avif" width="90px">

<div class="vc-wrap">
  <div class="vc-drop" id="vc-drop">
    <span style="font-size:2.5rem">🎬</span>
    <span>Toca para seleccionar un video</span>
    <input type="file" id="vc-in" accept="video/mp4,video/*" style="display:none">
  </div>

  <div class="vc-preview" id="vc-preview">
    <video id="vc-vid" preload="metadata" playsinline muted controls></video>
    <div class="vc-info" id="vc-info"></div>
  </div>

  <div class="vc-btns" id="vc-btns" style="display:none">
    <button class="vc-sb" data-s="30">✂️ 30s</button>
    <button class="vc-sb" data-s="60">✂️ 1 min</button>
    <button class="vc-sb" data-s="90">✂️ 1m 30s</button>
  </div>

  <div style="text-align:center;margin-bottom:10px">
    <div class="vc-prog-w" id="vc-prog-w"><div class="vc-prog" id="vc-prog"></div></div>
    <div class="vc-lbl" id="vc-lbl"></div>
    <button class="vc-go" id="vc-go">✂️ Cortar</button>
    <button class="vc-reset" id="vc-reset">🗑 Nuevo video</button>
  </div>

  <div class="vc-list" id="vc-list"></div>
</div>

<div class="vc-toast" id="vc-toast"></div>

<script>
(function(){
  const SEG=[30,60,90];
  let _file=null,_dur=0,_seg=0,_blobs=[],_tt,_busy=false;

  const dropEl=document.getElementById('vc-drop');
  const inEl=document.getElementById('vc-in');
  const prevEl=document.getElementById('vc-preview');
  const vidEl=document.getElementById('vc-vid');
  const infoEl=document.getElementById('vc-info');
  const btnsEl=document.getElementById('vc-btns');
  const goEl=document.getElementById('vc-go');
  const listEl=document.getElementById('vc-list');
  const progW=document.getElementById('vc-prog-w');
  const progEl=document.getElementById('vc-prog');
  const lblEl=document.getElementById('vc-lbl');
  const rstEl=document.getElementById('vc-reset');
  const toastEl=document.getElementById('vc-toast');

  function toast(m){toastEl.textContent=m;toastEl.classList.add('show');clearTimeout(_tt);_tt=setTimeout(()=>toastEl.classList.remove('show'),2400);}
  function fmt(s){const m=Math.floor(s/60),ss=Math.round(s%60);return m+':'+(ss<10?'0':'')+ss;}
  function setProg(p,t){progEl.style.width=p+'%';lblEl.textContent=t;}

  function loadFile(f){
    if(!f||!f.type.startsWith('video/'))return toast('Solo videos');
    _file=f;_blobs=[];listEl.innerHTML='';goEl.style.display='none';rstEl.style.display='';
    const u=URL.createObjectURL(f);
    vidEl.src=u;
    vidEl.onloadedmetadata=()=>{
      _dur=vidEl.duration;
      prevEl.style.display='';
      dropEl.style.display='none';
      btnsEl.style.display='';
      infoEl.textContent=f.name+' · '+fmt(_dur);
      document.querySelectorAll('.vc-sb').forEach(b=>b.classList.remove('vc-act'));
      _seg=0;goEl.style.display='none';
      setProg(0,'');progW.style.display='none';
    };
  }

  dropEl.onclick=()=>inEl.click();
  dropEl.ondragover=e=>{e.preventDefault();dropEl.classList.add('vc-over');};
  dropEl.ondragleave=()=>dropEl.classList.remove('vc-over');
  dropEl.ondrop=e=>{e.preventDefault();dropEl.classList.remove('vc-over');const f=e.dataTransfer.files[0];if(f)loadFile(f);};
  inEl.onchange=e=>{if(e.target.files[0])loadFile(e.target.files[0]);inEl.value='';};

  btnsEl.querySelectorAll('.vc-sb').forEach(b=>{
    b.onclick=()=>{
      if(_busy)return;
      document.querySelectorAll('.vc-sb').forEach(x=>x.classList.remove('vc-act'));
      b.classList.add('vc-act');
      _seg=parseInt(b.dataset.s);
      const n=Math.ceil(_dur/_seg);
      goEl.style.display='';
      goEl.textContent='✂️ Cortar en '+n+' parte'+(n>1?'s':'');
      _blobs=[];listEl.innerHTML='';
      setProg(0,'');progW.style.display='none';
    };
  });

  rstEl.onclick=()=>{
    if(_busy)return;
    URL.revokeObjectURL(vidEl.src);
    _blobs.forEach(b=>URL.revokeObjectURL(b.url));
    _blobs=[];_file=null;_dur=0;_seg=0;
    vidEl.src='';listEl.innerHTML='';
    prevEl.style.display='none';
    btnsEl.style.display='none';
    goEl.style.display='none';
    rstEl.style.display='none';
    dropEl.style.display='';
    setProg(0,'');progW.style.display='none';
    document.querySelectorAll('.vc-sb').forEach(b=>b.classList.remove('vc-act'));
  };

  goEl.onclick=async()=>{
    if(!_file||!_seg||_busy)return;
    _busy=true;
    goEl.disabled=true;
    btnsEl.querySelectorAll('.vc-sb').forEach(b=>b.disabled=true);
    listEl.innerHTML='';
    _blobs.forEach(b=>URL.revokeObjectURL(b.url));
    _blobs=[];
    progW.style.display='';
    setProg(0,'Cargando mp4box...');

    try{
      await loadMP4Box();
      const n=Math.ceil(_dur/_seg);
      for(let i=0;i<n;i++){
        const start=i*_seg,end=Math.min((i+1)*_seg,_dur);
        setProg(Math.round((i/n)*90),'Segmento '+(i+1)+'/'+n+'...');
        const blob=await extractSegment(_file,start,end);
        const url=URL.createObjectURL(blob);
        const name=_file.name.replace(/\.[^.]+$/,'')+'_part'+(i+1)+'.mp4';
        _blobs.push({url,name});
        addItem(i+1,fmt(start),fmt(end),url,name);
      }
      setProg(100,'Listo');
      goEl.style.display='none';
    }catch(e){
      toast('Error: '+e.message);
      setProg(0,'');progW.style.display='none';
    }finally{
      _busy=false;
      goEl.disabled=false;
      btnsEl.querySelectorAll('.vc-sb').forEach(b=>b.disabled=false);
    }
  };

  function addItem(n,s,e,url,name){
    const d=document.createElement('div');
    d.className='vc-it';
    d.innerHTML='<span>Parte '+n+' &nbsp;('+s+' – '+e+')</span>';
    const a=document.createElement('a');
    a.className='vc-dl';a.href=url;a.download=name;a.textContent='⬇ Descargar';
    d.appendChild(a);
    listEl.appendChild(d);
  }

  let _mp4loaded=false;
  function loadMP4Box(){
    if(_mp4loaded)return Promise.resolve();
    return new Promise((res,rej)=>{
      const s=document.createElement('script');
      s.src='https://cdn.jsdelivr.net/npm/mp4box@0.5.2/dist/mp4box.all.min.js';
      s.onload=()=>{_mp4loaded=true;res();};
      s.onerror=()=>rej(new Error('No se pudo cargar mp4box'));
      document.head.appendChild(s);
    });
  }

  function extractSegment(file,startSec,endSec){
    return new Promise((res,rej)=>{
      const mp4=MP4Box.createFile();
      let started=false,segBlob=null;
      const chunks=[];

      mp4.onReady=info=>{
        const trak=info.videoTracks[0]||info.tracks[0];
        if(!trak)return rej(new Error('Sin pista de video'));
        mp4.setSegmentOptions(trak.id,null,{nbSamples:1000});
        mp4.setExtractionOptions(trak.id,null,{nbSamples:1000});
        const at=info.audioTracks&&info.audioTracks[0];
        if(at){
          mp4.setSegmentOptions(at.id,null,{nbSamples:1000});
          mp4.setExtractionOptions(at.id,null,{nbSamples:1000});
        }
        mp4.seek(startSec,true);
        mp4.start();
      };

      mp4.onSegment=(id,user,buffer,sampleNum,last)=>{
        chunks.push(new Uint8Array(buffer));
        if(last){
          const total=chunks.reduce((a,b)=>a+b.length,0);
          const out=new Uint8Array(total);
          let off=0;
          for(const c of chunks){out.set(c,off);off+=c.length;}
          res(new Blob([out],{type:'video/mp4'}));
        }
      };

      mp4.onError=e=>rej(new Error(e));

      const CHUNK=4*1024*1024;
      let offset=0;
      function readNext(){
        const slice=file.slice(offset,offset+CHUNK);
        const fr=new FileReader();
        fr.onload=e=>{
          const buf=e.target.result;
          buf.fileStart=offset;
          offset+=buf.byteLength;
          const next=mp4.appendBuffer(buf);
          if(next<file.size&&next>=0)readNext();
          else mp4.flush();
        };
        fr.onerror=()=>rej(new Error('FileReader error'));
        fr.readAsArrayBuffer(slice);
      }
      readNext();
    });
  }

  const cont=document.getElementById('content');
  if(cont)cont.addEventListener('contentUnload',()=>{
    URL.revokeObjectURL(vidEl.src);
    _blobs.forEach(b=>URL.revokeObjectURL(b.url));
    _blobs=[];_file=null;_busy=false;
    clearTimeout(_tt);
  },{once:true});

})();
</script>

</div>
