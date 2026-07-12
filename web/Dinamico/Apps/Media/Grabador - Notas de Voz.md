<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.css">
<script src="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dompurify@3.4.11/dist/purify.min.js"></script>
<style>
:root{
--g1:rgba(255,255,255,0.06);
--g2:rgba(255,255,255,0.10);
--gb:rgba(255,255,255,0.13);
--gbb:rgba(255,255,255,0.18);
--acc:#4f8ef7;
--acc2:#a78bfa;
--ok:#34d399;
--err:#f87171;
--warn:#fbbf24;
--txt:rgba(255,255,255,0.92);
--txt2:rgba(255,255,255,0.45);
--r:16px;
--ri:12px;
}
#nv-wrap{color:var(--txt);font-family:-apple-system,'SF Pro Display','Helvetica Neue',sans-serif;padding:0 0 90px;-webkit-font-smoothing:antialiased}
#nv-wrap *{box-sizing:border-box}
.nv-top{padding:22px 18px 16px;display:flex;align-items:center;gap:14px;border-bottom:1px solid var(--gb)}
.nv-top h1{margin:0;font-size:19px;font-weight:700;letter-spacing:-.3px}
.nv-top span{font-size:12px;color:var(--txt2);margin-top:2px;display:block}
.nv-logo{width:42px;height:42px;background:linear-gradient(135deg,var(--acc),var(--acc2));border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:21px;flex-shrink:0;box-shadow:0 4px 14px rgba(79,142,247,.28)}
.nv-sect{max-width:600px;margin:0 auto;padding:18px 14px 0}
.nv-card{background:var(--g1);border:1px solid var(--gb);border-radius:var(--r);padding:18px;margin-bottom:14px}
.nv-card h2{margin:0 0 14px;font-size:11px;font-weight:600;color:var(--txt2);text-transform:uppercase;letter-spacing:.1em}
.fg{margin-bottom:12px}
.fg label{display:block;font-size:12px;font-weight:500;color:var(--txt2);margin-bottom:5px;letter-spacing:.03em}
.fg input,.fg textarea{
width:100%;background:var(--g1);border:1px solid var(--gb);border-radius:var(--ri);color:var(--txt);
padding:10px 13px;font-size:15px;outline:none;transition:border .15s,background .15s;
-webkit-appearance:none;font-family:inherit;
}
.fg input:focus{border-color:rgba(79,142,247,.6);background:var(--g2)}

.nv-btn{
display:inline-flex;align-items:center;justify-content:center;gap:7px;
padding:12px 20px;border:none;border-radius:var(--ri);
font-size:15px;font-weight:600;cursor:pointer;
transition:opacity .15s,transform .1s,box-shadow .15s;
width:100%;font-family:inherit;letter-spacing:-.1px;
}
.nv-btn:active{transform:scale(.97)}
.nv-btn.pri{background:linear-gradient(135deg,var(--acc),var(--acc2));color:#fff;box-shadow:0 4px 18px rgba(79,142,247,.3)}
.nv-btn.pri:hover{box-shadow:0 6px 22px rgba(79,142,247,.45)}
.nv-btn.sec{background:transparent;color:var(--txt);border:1px solid var(--gbb)}
.nv-btn.sec:hover{background:var(--g2)}
.nv-btn.danger{background:transparent;color:#fca5a5;border:1px solid rgba(248,113,113,.35)}
.nv-btn.danger:hover{background:rgba(248,113,113,.1)}
.nv-btn.small{width:auto;padding:9px 16px;font-size:13px}
.nv-btn:disabled{opacity:.4;cursor:not-allowed}
.nv-btn.icon{width:52px;height:52px;border-radius:50%;padding:0;font-size:20px;flex-shrink:0}

.nv-msg{
position:fixed;bottom:28px;left:50%;transform:translateX(-50%);
background:rgba(20,20,35,0.85);border:1px solid var(--gb);border-radius:50px;padding:10px 22px;
font-size:13px;font-weight:500;color:var(--txt);z-index:9999;pointer-events:none;white-space:nowrap;
max-width:88vw;text-overflow:ellipsis;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,.35);
}
.nv-msg.ok{border-color:rgba(52,211,153,.4);color:var(--ok)}
.nv-msg.err{border-color:rgba(248,113,113,.4);color:var(--err)}
.nv-msg.warn{border-color:rgba(251,191,36,.4);color:var(--warn)}

.nv-item{background:var(--g1);border:1px solid var(--gb);border-radius:var(--ri);padding:13px;margin-bottom:10px;display:flex;gap:11px;align-items:center;cursor:pointer;transition:background .15s}
.nv-item:hover{background:var(--g2)}
.nv-item .ic{font-size:22px;flex-shrink:0}
.nv-item .info{flex:1;min-width:0}
.nv-item .nm{font-size:14px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.nv-item .dt{font-size:11px;color:var(--txt2);margin-top:3px}
.nv-empty{text-align:center;color:var(--txt2);padding:40px 16px;font-size:13px}

.nv-recbar{display:flex;gap:10px;justify-content:center;margin-bottom:12px}
.nv-recst{text-align:center;font-size:12px;color:var(--txt2);margin-bottom:10px;min-height:1.2em}
.nv-recst.on{color:#fca5a5}
.nv-track{display:flex;align-items:center;gap:10px;background:var(--g1);border:1px solid var(--gb);border-radius:var(--ri);padding:8px 10px;margin-bottom:8px}
.nv-track.playing{border-color:rgba(79,142,247,.5);background:rgba(79,142,247,.08)}
.nv-track .n{font-size:11px;color:var(--txt2);width:22px;flex-shrink:0}
.nv-track audio{flex:1;height:32px;min-width:0}
.nv-track button{background:transparent;border:1px solid rgba(248,113,113,.3);color:#fca5a5;border-radius:8px;padding:5px 10px;cursor:pointer;font-size:12px;flex-shrink:0}

.nv-gal{display:grid;grid-template-columns:repeat(auto-fill,minmax(76px,1fr));gap:8px;margin-top:10px}
.nv-gi{position:relative;aspect-ratio:1;border-radius:var(--ri);overflow:hidden;background:var(--g1);border:1px solid var(--gb)}
.nv-gi img,.nv-gi video{width:100%;height:100%;object-fit:cover;display:block}
.nv-gi .rm{position:absolute;top:3px;right:3px;background:rgba(0,0,0,.65);border:none;color:#fff;border-radius:50%;width:20px;height:20px;font-size:11px;cursor:pointer;line-height:1}

#nv-mde .EasyMDEContainer{background:transparent!important;border-radius:var(--ri);overflow:hidden}
#nv-mde .CodeMirror{background:var(--g1)!important;color:var(--txt)!important;min-height:180px;border-radius:0 0 var(--ri) var(--ri)!important;border:1px solid var(--gb)!important;border-top:none!important}
#nv-mde .editor-toolbar{background:var(--g1)!important;border:1px solid var(--gb)!important;border-bottom:1px solid var(--gb)!important;border-radius:var(--ri) var(--ri) 0 0!important}
#nv-mde .editor-toolbar button{color:var(--txt2)!important}
#nv-mde .editor-toolbar button:hover,#nv-mde .editor-toolbar button.active{background:var(--g2)!important;border-color:var(--gb)!important}
#nv-mde .editor-toolbar i.separator{border-color:var(--gb)!important}

.nv-savest{text-align:center;font-size:11px;color:var(--txt2);margin-top:8px}
</style>

<div id="nv-wrap">

<div id="nv-scr-list">
  <div class="nv-top">
    <div class="nv-logo">🎙️</div>
    <div><h1>Notas de Voz</h1><span>Tu bitacora personal de audio</span></div>
  </div>
  <div class="nv-sect">
    <button class="nv-btn pri" id="nv-add" style="margin-bottom:16px">➕ Nueva Entrada</button>
    <div id="nv-list"><div class="nv-empty">Cargando...</div></div>
  </div>
</div>

<div id="nv-scr-edit" style="display:none">
  <div class="nv-top">
    <div class="nv-logo" id="nv-back" style="cursor:pointer">←</div>
    <div style="flex:1"><h1>Editar Entrada</h1><span>Se guarda automaticamente</span></div>
  </div>
  <div class="nv-sect">

    <div class="nv-card">
      <h2>Nombre</h2>
      <div class="fg"><input id="ne-name" type="text" placeholder="Nombre de la nota (opcional)" maxlength="80"></div>
    </div>

    <div class="nv-card">
      <h2>Grabacion de Audio</h2>
      <div class="nv-recst" id="ne-recst"></div>
      <div class="nv-recbar">
        <button class="nv-btn icon" id="ne-brec" style="background:rgba(248,113,113,.9);color:#fff" title="Grabar">⏺</button>
        <button class="nv-btn icon" id="ne-bpause" style="background:rgba(251,191,36,.9);color:#1a1a1a;display:none" title="Pausar">⏸</button>
        <button class="nv-btn icon" id="ne-bresume" style="background:rgba(52,211,153,.9);color:#1a1a1a;display:none" title="Reanudar">▶</button>
        <button class="nv-btn icon" id="ne-bstop" style="background:var(--g2);border:1px solid var(--gbb);display:none" title="Detener y guardar">⏹</button>
      </div>
      <div id="ne-tracks"></div>
      <button class="nv-btn sec" id="ne-playall" style="display:none;margin-top:6px">▶️ Reproducir todo en orden</button>
    </div>

    <div class="nv-card" id="nv-mde">
      <h2>Nota (Markdown)</h2>
      <p style="font-size:12px;color:var(--txt2);margin:0 0 10px">Toca "Adjuntar" para insertar imagenes o videos de tu galeria. Se guardan en esta misma entrada.</p>
      <button class="nv-btn sec small" id="ne-addmedia" style="margin-bottom:10px">🖼️ Adjuntar de galeria</button>
      <input type="file" id="ne-filein" accept="image/*,video/*" multiple style="display:none">
      <div class="nv-gal" id="ne-gal"></div>
      <textarea id="ne-mdtxt"></textarea>
      <div class="nv-savest" id="ne-savest"></div>
    </div>

    <button class="nv-btn pri" id="ne-save">💾 Guardar</button>
    <div style="height:10px"></div>
    <button class="nv-btn danger" id="ne-del">🗑️ Borrar esta entrada</button>

  </div>
</div>

</div>

<script>
(function(){
  const scrList=document.getElementById('nv-scr-list'),scrEdit=document.getElementById('nv-scr-edit');
  let dirH=null,mde=null,mediaRec=null,mediaStream=null,trackN=0,curId=null,saveTO=null,_msg=null;

  function toast(t,tp,d){
    tp=tp||'ok';d=d||2500;
    if(_msg)_msg.remove();
    _msg=document.createElement('div');
    _msg.className='nv-msg '+tp;
    _msg.textContent=t;
    document.body.appendChild(_msg);
    setTimeout(function(){if(_msg){_msg.remove();_msg=null;}},d);
  }

  function waitLibs(){
    return new Promise(function(res){
      (function chk(){
        if(window.EasyMDE&&window.DOMPurify)return res();
        setTimeout(chk,50);
      })();
    });
  }

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
    scrList.style.display=s==='list'?'block':'none';
    scrEdit.style.display=s==='edit'?'block':'none';
  }

  async function loadList(){
    const listEl=document.getElementById('nv-list');
    listEl.innerHTML='<div class="nv-empty">Cargando...</div>';
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
        }catch(e){}
        for await(const[n2,h2]of handle.entries()){
          if(h2.kind==='file'&&/^audio-\d+\./.test(n2))naudios++;
        }
        items.push({id:name,nombre:nombre,fecha:fecha,naudios:naudios});
      }
      items.sort(function(a,b){return b.fecha-a.fecha||b.id.localeCompare(a.id);});
      if(!items.length){listEl.innerHTML='<div class="nv-empty">Sin notas de voz aun.<br>Toca "Nueva Entrada" para crear la primera.</div>';return;}
      listEl.innerHTML='';
      items.forEach(function(it){
        const div=document.createElement('div');div.className='nv-item';
        div.innerHTML='<span class="ic">🎙️</span><div class="info"><div class="nm"></div><div class="dt"></div></div>';
        div.querySelector('.nm').textContent=it.nombre;
        div.querySelector('.dt').textContent=(it.fecha?fmtDate(it.fecha):'')+(it.naudios?' · '+it.naudios+' audio'+(it.naudios>1?'s':''):' · sin audio');
        div.onclick=function(){openEditor(it.id);};
        listEl.appendChild(div);
      });
    }catch(e){
      listEl.innerHTML='<div class="nv-empty">Error: '+e.message+'</div>';
    }
  }

  document.getElementById('nv-add').onclick=async function(){
    const id=Date.now().toString(36);
    try{
      const nv=await getNVRoot();
      await nv.getDirectoryHandle(id,{create:true});
      openEditor(id);
    }catch(e){toast('Error al crear: '+e.message,'err');}
  };

  function extFromMime(m){
    if(m.indexOf('webm')>-1)return 'webm';
    if(m.indexOf('ogg')>-1)return 'ogg';
    if(m.indexOf('mp4')>-1)return 'mp4';
    return 'webm';
  }

  async function loadInfo(){
    try{
      const f=await dirH.getFileHandle('info.json');
      const j=JSON.parse(await (await f.getFile()).text());
      document.getElementById('ne-name').value=j.nombre||'';
      return j;
    }catch(e){return{fecha:Date.now()};}
  }

  async function saveInfo(patch){
    let cur={};
    try{
      const f=await dirH.getFileHandle('info.json');
      cur=JSON.parse(await (await f.getFile()).text());
    }catch(e){}
    const j=Object.assign({fecha:Date.now()},cur,patch);
    const fh=await dirH.getFileHandle('info.json',{create:true});
    const w=await fh.createWritable();
    await w.write(JSON.stringify(j));
    await w.close();
  }

  async function listTracks(){
    const items=[];
    for await(const[name,handle]of dirH.entries()){
      const m=name.match(/^audio-(\d+)\./);
      if(handle.kind==='file'&&m)items.push({name:name,n:parseInt(m[1])});
    }
    items.sort(function(a,b){return a.n-b.n;});
    return items;
  }

  async function renderTracks(){
    const tracksEl=document.getElementById('ne-tracks');
    const playAllBtn=document.getElementById('ne-playall');
    const items=await listTracks();
    tracksEl.innerHTML='';
    if(!items.length){playAllBtn.style.display='none';trackN=0;return;}
    playAllBtn.style.display='block';
    for(const it of items){
      const fh=await dirH.getFileHandle(it.name);
      const file=await fh.getFile();
      const url=URL.createObjectURL(file);
      const row=document.createElement('div');row.className='nv-track';row.dataset.n=it.n;
      row.innerHTML='<span class="n">#'+it.n+'</span><audio controls src="'+url+'"></audio><button>🗑️</button>';
      row.querySelector('button').onclick=async function(){
        if(!confirm('Borrar el audio #'+it.n+'?'))return;
        await dirH.removeEntry(it.name);
        renderTracks();
      };
      tracksEl.appendChild(row);
    }
    trackN=items[items.length-1].n;
  }

  let playQueue=[],playIdx=0;
  document.getElementById('ne-playall').onclick=async function(){
    const items=await listTracks();
    if(!items.length)return;
    playQueue=items;playIdx=0;
    playNext();
  };
  function playNext(){
    document.querySelectorAll('.nv-track').forEach(function(r){r.classList.remove('playing');});
    if(playIdx>=playQueue.length)return;
    const it=playQueue[playIdx];
    const row=document.querySelector('.nv-track[data-n="'+it.n+'"]');
    if(!row)return;
    row.classList.add('playing');
    const audioEl=row.querySelector('audio');
    audioEl.currentTime=0;
    audioEl.onended=function(){playIdx++;playNext();};
    audioEl.play().catch(function(){});
  }

  const recBtn=document.getElementById('ne-brec'),pauseBtn=document.getElementById('ne-bpause');
  const resumeBtn=document.getElementById('ne-bresume'),stopBtn=document.getElementById('ne-bstop');
  const recSt=document.getElementById('ne-recst');

  function setRecUI(state){
    recBtn.style.display=state==='idle'?'flex':'none';
    pauseBtn.style.display=state==='recording'?'flex':'none';
    resumeBtn.style.display=state==='paused'?'flex':'none';
    stopBtn.style.display=(state==='recording'||state==='paused')?'flex':'none';
    recSt.classList.toggle('on',state==='recording');
    recSt.textContent=state==='recording'?'Grabando...':state==='paused'?'En pausa':'';
  }

  recBtn.onclick=async function(){
    try{
      mediaStream=await navigator.mediaDevices.getUserMedia({audio:true});
      mediaRec=new MediaRecorder(mediaStream);
      const chunks=[];
      mediaRec.ondataavailable=function(e){if(e.data.size)chunks.push(e.data);};
      mediaRec.onstop=async function(){
        mediaStream.getTracks().forEach(function(t){t.stop();});
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
        toast('Audio guardado');
      };
      mediaRec.start();
      setRecUI('recording');
    }catch(e){toast('No se pudo acceder al microfono: '+e.message,'err',4000);}
  };
  pauseBtn.onclick=function(){if(mediaRec&&mediaRec.state==='recording'){mediaRec.pause();setRecUI('paused');}};
  resumeBtn.onclick=function(){if(mediaRec&&mediaRec.state==='paused'){mediaRec.resume();setRecUI('recording');}};
  stopBtn.onclick=function(){if(mediaRec&&mediaRec.state!=='inactive')mediaRec.stop();};

  const MAX_SIZE=10*1024*1024;
  const galEl=document.getElementById('ne-gal');
  document.getElementById('ne-addmedia').onclick=function(e){e.preventDefault();document.getElementById('ne-filein').click();};

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
      const gi=document.createElement('div');gi.className='nv-gi';
      const isVid=file.type.indexOf('video/')===0;
      gi.innerHTML=isVid?'<video src="'+url+'" muted></video>':'<img src="'+url+'">';
      const rm=document.createElement('button');rm.className='rm';rm.textContent='✕';
      rm.onclick=async function(){
        if(!confirm('Quitar este adjunto? Tambien se quitara la referencia del texto si la agregaste.'))return;
        await dirH.removeEntry(name);
        renderGal();
      };
      gi.appendChild(rm);
      galEl.appendChild(gi);
    }
  }

  document.getElementById('ne-filein').onchange=async function(e){
    const files=[].slice.call(e.target.files);
    this.value='';
    for(const f of files){
      if(f.size>MAX_SIZE){toast(f.name+' supera 10MB, se omite','warn',3500);continue;}
      const extm=f.name.match(/\.(\w+)$/);
      const ext=extm?extm[1]:(f.type.split('/')[1]||'bin');
      const n=Date.now()+Math.floor(Math.random()*1000);
      const fname='media-'+n+'.'+ext;
      const fh=await dirH.getFileHandle(fname,{create:true});
      const w=await fh.createWritable();
      await w.write(f);
      await w.close();
      if(mde){
        const cm=mde.codemirror;
        const cur=cm.getCursor();
        cm.replaceRange('![]('+fname+')\n',cur);
      }
    }
    renderGal();
    clearTimeout(saveTO);
    saveTO=setTimeout(saveMD,600);
  };

  function sanitizeMD(raw){
    if(!/[<>]/.test(raw))return raw;
    if(!window.DOMPurify)return raw.replace(/<script[\s\S]*?<\/script>/gi,'');
    return window.DOMPurify.sanitize(raw,{ALLOWED_TAGS:['b','i','em','strong','a','code','pre','br','p','ul','ol','li','h1','h2','h3','blockquote','img'],ALLOWED_ATTR:['href','src','alt']});
  }

  function initMDE(){
    if(mde){mde.toTextArea();mde=null;}
    mde=new EasyMDE({
      element:document.getElementById('ne-mdtxt'),
      spellChecker:false,autofocus:false,status:false,
      toolbar:['bold','italic','heading','|','quote','unordered-list','ordered-list','|','link','preview','guide']
    });
    mde.codemirror.on('change',function(){
      clearTimeout(saveTO);
      document.getElementById('ne-savest').textContent='Editando...';
      saveTO=setTimeout(saveMD,1500);
    });
  }

  async function loadMD(){
    try{
      const fh=await dirH.getFileHandle('nota.md');
      const txt=await (await fh.getFile()).text();
      mde.value(txt);
    }catch(e){mde.value('');}
  }

  async function saveMD(){
    if(!mde)return;
    const raw=mde.value();
    const clean=sanitizeMD(raw);
    const fh=await dirH.getFileHandle('nota.md',{create:true});
    const w=await fh.createWritable();
    await w.write(clean);
    await w.close();
    document.getElementById('ne-savest').textContent='Guardado '+new Date().toLocaleTimeString('es-PY',{hour:'2-digit',minute:'2-digit'});
  }

  document.getElementById('ne-save').onclick=async function(){
    await saveMD();
    await saveInfo({nombre:document.getElementById('ne-name').value.trim()});
    toast('Nota guardada');
  };

  document.getElementById('ne-name').onchange=async function(){
    await saveInfo({nombre:this.value.trim()});
  };

  document.getElementById('ne-del').onclick=async function(){
    if(!confirm('Borrar esta nota de voz completa? Esto no se puede deshacer.'))return;
    try{
      const nv=await getNVRoot();
      await nv.removeEntry(curId,{recursive:true});
      backToList();
      toast('Entrada borrada');
    }catch(e){toast('Error al borrar: '+e.message,'err');}
  };

  function stopRecordingIfActive(){
    if(mediaRec&&mediaRec.state!=='inactive')mediaRec.stop();
    clearTimeout(saveTO);
  }

  document.getElementById('nv-back').onclick=function(){
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
    document.getElementById('ne-name').value='';
    await loadInfo();
    setRecUI('idle');
    await renderTracks();
    await renderGal();
    await waitLibs();
    initMDE();
    await loadMD();
    showScreen('edit');
  }

  const _el=document.getElementById('content');
  if(_el)_el.addEventListener('contentUnload',function(){
    stopRecordingIfActive();
    if(mde){mde.toTextArea();mde=null;}
  },{once:true});

  loadList();
})();
</script>