<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.css">
<script src="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dompurify@3.4.11/dist/purify.min.js"></script>
<style>
#NV_W{padding:8px 12px;max-width:640px;margin:0 auto 60px}
.NV_SCR{display:none}
.NV_SCR.on{display:block}

.NV_TB{display:flex;gap:10px;align-items:center;margin-bottom:14px}
.NV_TB a,.NV_TB span.back{font-size:1.3rem;text-decoration:none;opacity:.8;cursor:pointer}
.NV_TB h1{font-size:1.1em;margin:0;flex:1}
.NV_NEW{background:rgba(56,189,248,.18);border:1px solid rgba(56,189,248,.4);color:#7dd3fc;border-radius:20px;padding:8px 16px;cursor:pointer;font-size:.85em;font-family:inherit}
.NV_NEW:hover{background:rgba(56,189,248,.28)}
.NV_ITEM{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:14px 16px;margin-bottom:9px;cursor:pointer;transition:background .15s}
.NV_ITEM:hover{background:rgba(255,255,255,.11)}
.NV_ITEM .ic{font-size:1.4em}
.NV_ITEM .info{flex:1;min-width:0}
.NV_ITEM .nm{font-size:.95em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.NV_ITEM .dt{font-size:.72em;color:rgba(255,255,255,.45);margin-top:2px}
.NV_MSG{text-align:center;color:rgba(255,255,255,.5);padding:40px 16px;font-size:.9em}

.NE_NAME{flex:1;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:10px;color:#fff;padding:9px 12px;font-size:.95em;font-family:inherit;outline:none}
.NE_NAME:focus{border-color:rgba(56,189,248,.5)}
.NE_DELBTN{background:rgba(255,90,90,.15);border:1px solid rgba(255,90,90,.35);color:#ffb0b0;border-radius:10px;padding:8px 12px;cursor:pointer;font-size:1.05em}
.NE_DELBTN:hover{background:rgba(255,90,90,.28)}

.NE_REC{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:16px;margin-bottom:14px}
.NE_RECBAR{display:flex;gap:10px;justify-content:center;margin-bottom:12px}
.NE_RECBAR button{border:none;border-radius:50%;width:54px;height:54px;font-size:1.4em;cursor:pointer;display:flex;align-items:center;justify-content:center}
.NE_RECBAR .rec{background:rgba(255,90,90,.85);color:#fff}
.NE_RECBAR .pause{background:rgba(251,191,36,.85);color:#1a1a1a;display:none}
.NE_RECBAR .resume{background:rgba(52,211,153,.85);color:#1a1a1a;display:none}
.NE_RECBAR .stop{background:rgba(255,255,255,.15);color:#fff;display:none}
.NE_RECST{text-align:center;font-size:.82em;color:rgba(255,255,255,.55);margin-bottom:4px;min-height:1.2em}
.NE_RECST.on{color:#ff8080}

.NE_TRACKS{display:flex;flex-direction:column;gap:8px}
.NE_TR{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:8px 12px}
.NE_TR.playing{border-color:rgba(56,189,248,.5);background:rgba(56,189,248,.08)}
.NE_TR .n{font-size:.8em;color:rgba(255,255,255,.5);width:20px;flex-shrink:0}
.NE_TR audio{flex:1;height:32px}
.NE_TR button{background:rgba(255,90,90,.12);border:1px solid rgba(255,90,90,.3);color:#ffb0b0;border-radius:8px;padding:5px 10px;cursor:pointer;font-size:.8em;flex-shrink:0}
.NE_PLAYALL{width:100%;background:rgba(56,189,248,.15);border:1px solid rgba(56,189,248,.4);color:#7dd3fc;border-radius:10px;padding:9px;cursor:pointer;font-size:.85em;margin-top:10px;font-family:inherit}
.NE_PLAYALL:hover{background:rgba(56,189,248,.25)}

.NE_ATTBAR{display:flex;gap:8px;margin:14px 0 8px;flex-wrap:wrap}
.NE_GAL{display:grid;grid-template-columns:repeat(auto-fill,minmax(78px,1fr));gap:8px;margin-bottom:12px}
.NE_GI{position:relative;aspect-ratio:1;border-radius:10px;overflow:hidden;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12)}
.NE_GI img,.NE_GI video{width:100%;height:100%;object-fit:cover;display:block}
.NE_GI .rm{position:absolute;top:3px;right:3px;background:rgba(0,0,0,.65);border:none;color:#fff;border-radius:50%;width:22px;height:22px;font-size:.75em;cursor:pointer}
.NE_SAVEST{text-align:center;font-size:.78em;color:rgba(255,255,255,.4);margin-top:8px}

#NE_MDE .EasyMDEContainer{background:transparent!important;border-radius:14px;overflow:hidden}
#NE_MDE .CodeMirror{background:rgba(255,255,255,.05)!important;color:#fff!important;min-height:200px;border-radius:0 0 14px 14px!important;border:1px solid rgba(255,255,255,.12)!important;border-top:none!important}
#NE_MDE .editor-toolbar{background:rgba(255,255,255,.05)!important;border:1px solid rgba(255,255,255,.12)!important;border-radius:14px 14px 0 0!important}
#NE_MDE .editor-toolbar button{color:rgba(255,255,255,.6)!important}
#NE_MDE .editor-toolbar button:hover,#NE_MDE .editor-toolbar button.active{background:rgba(255,255,255,.1)!important}
</style>

<div id="NV_W">

<div class="NV_SCR on" id="NV_S_LIST">
<div class="NV_TB">
<a href="web/es.html">🏠</a>
<h1>🎙️ Notas de Voz</h1>
<button class="NV_NEW" id="NV_ADD">+ Nueva</button>
</div>
<div id="NV_LIST"><div class="NV_MSG">Cargando...</div></div>
</div>

<div class="NV_SCR" id="NV_S_EDIT">
<div class="NV_TB">
<span class="back" id="NE_BACK">←</span>
<input type="text" id="NE_NAME" class="NE_NAME" placeholder="Nombre de la nota...">
<button class="NE_DELBTN" id="NE_DEL">🗑️</button>
</div>

<div class="NE_REC">
<div class="NE_RECST" id="NE_RECST"></div>
<div class="NE_RECBAR">
<button class="rec" id="NE_BREC" title="Grabar">⏺️</button>
<button class="pause" id="NE_BPAUSE" title="Pausar">⏸️</button>
<button class="resume" id="NE_BRESUME" title="Reanudar">▶️</button>
<button class="stop" id="NE_BSTOP" title="Detener y guardar">⏹️</button>
</div>
<div class="NE_TRACKS" id="NE_TRACKS"></div>
<button class="NE_PLAYALL" id="NE_PLAYALL" style="display:none">▶️ Reproducir todo en orden</button>
</div>

<div class="NE_ATTBAR">
<button class="BOTON-L1" id="NE_ADDIMG">🖼️ Adjuntar de galeria</button>
<input type="file" id="NE_FILEIN" accept="image/*,video/*" multiple style="display:none">
</div>
<div class="NE_GAL" id="NE_GAL"></div>

<div id="NE_MDE"><textarea id="NE_MDTXT"></textarea></div>
<div class="NE_SAVEST" id="NE_SAVEST"></div>
<br>
<button class="BOTON-L1" id="NE_SAVE" style="width:100%">💾 Guardar</button>
</div>

</div>

<script>
(function(){
  const scrList=document.getElementById('NV_S_LIST'),scrEdit=document.getElementById('NV_S_EDIT');
  let dirH=null,mde=null,mediaRec=null,mediaStream=null,trackN=0,curId=null,saveTO=null;

  async function getNVRoot(){
    const root=await navigator.storage.getDirectory();
    const apps=await root.getDirectoryHandle('Apps',{create:true});
    return await apps.getDirectoryHandle('NotasVoz',{create:true});
  }

  function fmtDate(ts){
    const d=new Date(ts);
    return d.toLocaleDateString('es-PY',{day:'2-digit',month:'short',year:'numeric'})+' '+d.toLocaleTimeString('es-PY',{hour:'2-digit',minute:'2-digit'});
  }

  function showScreen(s){
    scrList.classList.toggle('on',s==='list');
    scrEdit.classList.toggle('on',s==='edit');
  }

  async function loadList(){
    const listEl=document.getElementById('NV_LIST');
    listEl.innerHTML='<div class="NV_MSG">Cargando...</div>';
    try{
      const nv=await getNVRoot();
      const items=[];
      for await(const[name,handle]of nv.entries()){
        if(handle.kind!=='directory')continue;
        let nombre=name,fecha=0,naudios=0;
        try{
          const f=await handle.getFileHandle('info.json');
          const j=JSON.parse(await (await f.getFile()).text());
          nombre=j.nombre||name;fecha=j.fecha||0;
        }catch{}
        for await(const[n2,h2]of handle.entries()){
          if(h2.kind==='file'&&/^audio-\d+\./.test(n2))naudios++;
        }
        items.push({id:name,nombre,fecha,naudios});
      }
      items.sort((a,b)=>b.fecha-a.fecha||b.id.localeCompare(a.id));
      if(!items.length){listEl.innerHTML='<div class="NV_MSG">Sin notas de voz aun.<br>Toca "+ Nueva" para crear la primera.</div>';return;}
      listEl.innerHTML='';
      items.forEach(it=>{
        const div=document.createElement('div');div.className='NV_ITEM';
        div.innerHTML='<span class="ic">🎙️</span><div class="info"><div class="nm"></div><div class="dt"></div></div>';
        div.querySelector('.nm').textContent=it.nombre;
        div.querySelector('.dt').textContent=(it.fecha?fmtDate(it.fecha):'')+(it.naudios?' · '+it.naudios+' audio'+(it.naudios>1?'s':''):'');
        div.onclick=()=>openEditor(it.id);
        listEl.appendChild(div);
      });
    }catch(e){
      listEl.innerHTML='<div class="NV_MSG">Error: '+e.message+'</div>';
    }
  }

  document.getElementById('NV_ADD').onclick=async()=>{
    const id=Date.now().toString(36);
    try{
      const nv=await getNVRoot();
      await nv.getDirectoryHandle(id,{create:true});
      openEditor(id);
    }catch(e){alert('Error al crear: '+e.message);}
  };

  function extFromMime(m){
    if(m.includes('webm'))return 'webm';
    if(m.includes('ogg'))return 'ogg';
    if(m.includes('mp4'))return 'mp4';
    return 'webm';
  }

  async function loadInfo(){
    try{
      const f=await dirH.getFileHandle('info.json');
      const j=JSON.parse(await (await f.getFile()).text());
      document.getElementById('NE_NAME').value=j.nombre||'';
      return j;
    }catch{return{fecha:Date.now()};}
  }

  async function saveInfo(patch){
    const cur=await loadInfo().catch(()=>({}));
    const j=Object.assign({fecha:Date.now()},cur,patch);
    const fh=await dirH.getFileHandle('info.json',{create:true});
    const w=await fh.createWritable();
    await w.write(JSON.stringify(j));
    await w.close();
  }

  async function listTracks(){
    const items=[];
    for await(const[name,handle]of dirH.entries()){
      if(handle.kind==='file'&&/^audio-(\d+)\./.test(name)){
        const n=parseInt(name.match(/^audio-(\d+)\./)[1]);
        items.push({name,n});
      }
    }
    items.sort((a,b)=>a.n-b.n);
    return items;
  }

  async function renderTracks(){
    const tracksEl=document.getElementById('NE_TRACKS');
    const playAllBtn=document.getElementById('NE_PLAYALL');
    const items=await listTracks();
    tracksEl.innerHTML='';
    if(!items.length){playAllBtn.style.display='none';trackN=0;return;}
    playAllBtn.style.display='block';
    for(const it of items){
      const fh=await dirH.getFileHandle(it.name);
      const file=await fh.getFile();
      const url=URL.createObjectURL(file);
      const row=document.createElement('div');row.className='NE_TR';row.dataset.n=it.n;
      row.innerHTML='<span class="n">#'+it.n+'</span><audio controls src="'+url+'"></audio><button>🗑️</button>';
      row.querySelector('button').onclick=async()=>{
        if(!confirm('Borrar el audio #'+it.n+'?'))return;
        await dirH.removeEntry(it.name);
        renderTracks();
      };
      tracksEl.appendChild(row);
    }
    trackN=items[items.length-1].n;
  }

  let playQueue=[],playIdx=0;
  document.getElementById('NE_PLAYALL').onclick=async()=>{
    const items=await listTracks();
    if(!items.length)return;
    playQueue=items;playIdx=0;
    playNext();
  };
  function playNext(){
    document.querySelectorAll('.NE_TR').forEach(r=>r.classList.remove('playing'));
    if(playIdx>=playQueue.length)return;
    const it=playQueue[playIdx];
    const row=document.querySelector('.NE_TR[data-n="'+it.n+'"]');
    if(!row)return;
    row.classList.add('playing');
    const audioEl=row.querySelector('audio');
    audioEl.currentTime=0;
    audioEl.onended=()=>{playIdx++;playNext();};
    audioEl.play().catch(()=>{});
  }

  const recBtn=document.getElementById('NE_BREC'),pauseBtn=document.getElementById('NE_BPAUSE');
  const resumeBtn=document.getElementById('NE_BRESUME'),stopBtn=document.getElementById('NE_BSTOP');
  const recSt=document.getElementById('NE_RECST');

  function setRecUI(state){
    recBtn.style.display=state==='idle'?'flex':'none';
    pauseBtn.style.display=state==='recording'?'flex':'none';
    resumeBtn.style.display=state==='paused'?'flex':'none';
    stopBtn.style.display=state==='recording'||state==='paused'?'flex':'none';
    recSt.classList.toggle('on',state==='recording');
    recSt.textContent=state==='recording'?'Grabando...':state==='paused'?'En pausa':'';
  }

  recBtn.onclick=async()=>{
    try{
      mediaStream=await navigator.mediaDevices.getUserMedia({audio:true});
      mediaRec=new MediaRecorder(mediaStream);
      const chunks=[];
      mediaRec.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};
      mediaRec.onstop=async()=>{
        mediaStream.getTracks().forEach(t=>t.stop());
        if(!chunks.length)return;
        const blob=new Blob(chunks,{type:mediaRec.mimeType||'audio/webm'});
        trackN++;
        const ext=extFromMime(blob.type);
        const fh=await dirH.getFileHandle('audio-'+trackN+'.'+ext,{create:true});
        const w=await fh.createWritable();
        await w.write(blob);
        await w.close();
        await renderTracks();
        setRecUI('idle');
      };
      mediaRec.start();
      setRecUI('recording');
    }catch(e){alert('No se pudo acceder al microfono: '+e.message);}
  };
  pauseBtn.onclick=()=>{if(mediaRec&&mediaRec.state==='recording'){mediaRec.pause();setRecUI('paused');}};
  resumeBtn.onclick=()=>{if(mediaRec&&mediaRec.state==='paused'){mediaRec.resume();setRecUI('recording');}};
  stopBtn.onclick=()=>{if(mediaRec&&mediaRec.state!=='inactive')mediaRec.stop();};

  const MAX_SIZE=10*1024*1024;
  const galEl=document.getElementById('NE_GAL');
  document.getElementById('NE_ADDIMG').onclick=e=>{e.preventDefault();document.getElementById('NE_FILEIN').click();};

  async function listMedia(){
    const items=[];
    for await(const[name,handle]of dirH.entries()){
      if(handle.kind==='file'&&/^media-\d+\.\w+$/.test(name))items.push(name);
    }
    return items.sort();
  }

  async function renderGal(){
    galEl.innerHTML='';
    const items=await listMedia();
    for(const name of items){
      const fh=await dirH.getFileHandle(name);
      const file=await fh.getFile();
      const url=URL.createObjectURL(file);
      const gi=document.createElement('div');gi.className='NE_GI';
      const isVid=file.type.startsWith('video/');
      gi.innerHTML=isVid?'<video src="'+url+'" muted></video>':'<img src="'+url+'">';
      const rm=document.createElement('button');rm.className='rm';rm.textContent='✕';
      rm.onclick=async()=>{
        if(!confirm('Quitar este adjunto?'))return;
        await dirH.removeEntry(name);
        renderGal();
      };
      gi.appendChild(rm);
      galEl.appendChild(gi);
    }
  }

  document.getElementById('NE_FILEIN').onchange=async function(e){
    const files=[...e.target.files];
    this.value='';
    for(const f of files){
      if(f.size>MAX_SIZE){alert(f.name+' supera 10MB, se omite.');continue;}
      const ext=(f.name.match(/\.(\w+)$/)||[,f.type.split('/')[1]||'bin'])[1];
      const n=Date.now()+Math.floor(Math.random()*1000);
      const fh=await dirH.getFileHandle('media-'+n+'.'+ext,{create:true});
      const w=await fh.createWritable();
      await w.write(f);
      await w.close();
    }
    renderGal();
  };

  function sanitizeMD(raw){
    if(!/[<>]/.test(raw))return raw;
    return window.DOMPurify.sanitize(raw,{ALLOWED_TAGS:['b','i','em','strong','a','code','pre','br','p','ul','ol','li','h1','h2','h3','blockquote','img'],ALLOWED_ATTR:['href','src','alt']});
  }

  function initMDE(){
    if(mde){mde.toTextArea();mde=null;}
    mde=new EasyMDE({
      element:document.getElementById('NE_MDTXT'),
      spellChecker:false,autofocus:false,status:false,
      toolbar:['bold','italic','heading','|','quote','unordered-list','ordered-list','|','link','preview','guide']
    });
    mde.codemirror.on('change',()=>{
      clearTimeout(saveTO);
      document.getElementById('NE_SAVEST').textContent='Editando...';
      saveTO=setTimeout(saveMD,1500);
    });
  }

  async function loadMD(){
    try{
      const fh=await dirH.getFileHandle('nota.md');
      const txt=await (await fh.getFile()).text();
      mde.value(txt);
    }catch{mde.value('');}
  }

  async function saveMD(){
    if(!mde)return;
    const raw=mde.value();
    const clean=sanitizeMD(raw);
    const fh=await dirH.getFileHandle('nota.md',{create:true});
    const w=await fh.createWritable();
    await w.write(clean);
    await w.close();
    document.getElementById('NE_SAVEST').textContent='Guardado '+new Date().toLocaleTimeString('es-PY',{hour:'2-digit',minute:'2-digit'});
  }
  document.getElementById('NE_SAVE').onclick=async()=>{
    await saveMD();
    await saveInfo({nombre:document.getElementById('NE_NAME').value.trim()});
  };

  document.getElementById('NE_NAME').onchange=async function(){
    await saveInfo({nombre:this.value.trim()});
  };

  document.getElementById('NE_DEL').onclick=async()=>{
    if(!confirm('Borrar esta nota de voz completa? Esto no se puede deshacer.'))return;
    try{
      const nv=await getNVRoot();
      await nv.removeEntry(curId,{recursive:true});
      backToList();
    }catch(e){alert('Error al borrar: '+e.message);}
  };

  function stopRecordingIfActive(){
    if(mediaRec&&mediaRec.state!=='inactive')mediaRec.stop();
    clearTimeout(saveTO);
  }

  document.getElementById('NE_BACK').onclick=()=>{
    stopRecordingIfActive();
    backToList();
  };

  function backToList(){
    curId=null;dirH=null;
    showScreen('list');
    loadList();
  }

  async function openEditor(id){
    curId=id;
    const nv=await getNVRoot();
    dirH=await nv.getDirectoryHandle(id,{create:true});
    document.getElementById('NE_NAME').value='';
    await loadInfo();
    setRecUI('idle');
    await renderTracks();
    await renderGal();
    initMDE();
    await loadMD();
    showScreen('edit');
  }

  const _el=document.getElementById('content');
  if(_el)_el.addEventListener('contentUnload',()=>{
    stopRecordingIfActive();
    if(mde){mde.toTextArea();mde=null;}
  },{once:true});

  loadList();
})();
</script>
