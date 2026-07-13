<style>
.nv-top{padding:16px 4px;display:flex;align-items:center;gap:12px;border-bottom:1px solid rgba(255,255,255,.13);margin-bottom:16px}
.nv-top .ic{font-size:28px;flex-shrink:0}
.nv-top h3{margin:0;border:none;padding:0}
.nv-top span:not(.nv-back){font-size:.78em;color:rgba(255,255,255,.5);display:block;margin-top:2px}
.nv-back{cursor:pointer;flex-shrink:0;opacity:.8}
.nv-back:hover{opacity:1}
.nv-sec{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:16px;margin-bottom:14px}
.nv-sec h4{margin:0 0 10px;font-size:.78em;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.08em;border:none;padding:0}
.nv-fg{margin-bottom:0}
.nv-fg input[type=text]{width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:10px;color:#fff;padding:9px 12px;font-size:.95em;font-family:inherit}
.nv-list-it{display:flex;gap:10px;align-items:center;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:12px;margin-bottom:8px;cursor:pointer;transition:background .15s}
.nv-list-it:hover{background:rgba(255,255,255,.1)}
.nv-list-it .ic{font-size:20px}
.nv-list-it .nm{font-weight:600;font-size:.92em}
.nv-list-it .dt{font-size:.75em;color:rgba(255,255,255,.5);margin-top:2px}
.nv-empty{text-align:center;color:rgba(255,255,255,.5);padding:30px 10px;font-size:.9em}
.nv-nr{display:flex;align-items:center;gap:8px}
.nv-nr .nv-fg{flex:1;min-width:0}
.nv-recbar{display:flex;gap:6px;flex-shrink:0}
.nv-recst{text-align:center;font-size:.8em;color:rgba(255,255,255,.5);margin-top:6px;min-height:1.2em}
.nv-recst.on{color:#f87171}
.BS2-CN{width:40px;height:40px;padding:0;margin:0;border-radius:10px}
.BS2-CN .BS4{font-size:1.3em}
.nv-track{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:6px 8px;margin-bottom:6px}
.nv-track.playing{border-color:rgba(79,142,247,.6)}
.nv-track .n{font-size:.7em;color:rgba(255,255,255,.5);width:20px}
.nv-track audio{flex:1;height:32px;min-width:0}
.nv-track button{background:none;border:1px solid rgba(248,113,113,.35);color:#fca5a5;border-radius:8px;padding:4px 9px;cursor:pointer;font-size:.75em}
.nv-savest{text-align:center;font-size:.72em;color:rgba(255,255,255,.4);margin-top:6px}
.nv-msg{position:fixed;bottom:26px;left:50%;transform:translateX(-50%);background:rgba(20,20,25,.92);border:1px solid rgba(255,255,255,.15);border-radius:30px;padding:9px 18px;font-size:.82em;color:#fff;z-index:9999;pointer-events:none;white-space:nowrap;max-width:88vw;overflow:hidden;text-overflow:ellipsis}
.nv-msg.err{border-color:rgba(248,113,113,.5);color:#fca5a5}
.nv-msg.warn{border-color:rgba(251,191,36,.5);color:#fbbf24}
.nv-read{padding:0 2px}
.nv-read img{max-width:100%;border-radius:10px;display:block;margin:8px 0}
.nv-read h1,.nv-read h2,.nv-read h3{color:#fff}
.nv-read a{color:#7dabff}
.nv-read blockquote{color:rgba(255,255,255,.6);border-left:3px solid rgba(255,255,255,.25);padding-left:10px;margin:8px 0}
.nv-read code{background:rgba(255,255,255,.1);color:#fff;padding:2px 5px;border-radius:5px}
#nv-mde{margin-bottom:14px}
#nv-mde .EasyMDEContainer{background:transparent!important;border-radius:10px;overflow:hidden}
#nv-mde .CodeMirror{background:rgba(255,255,255,.04)!important;color:#fff!important;height:auto!important;min-height:160px;border-radius:0 0 10px 10px!important;border:1px solid rgba(255,255,255,.15)!important;border-top:none!important}
#nv-mde .CodeMirror-scroll{overflow:visible!important;height:auto!important}
#nv-mde .CodeMirror-cursor{border-color:#fff!important}
#nv-mde .editor-toolbar{background:rgba(255,255,255,.04)!important;border:1px solid rgba(255,255,255,.15)!important;border-bottom:none!important;border-radius:10px 10px 0 0!important}
#nv-mde .editor-toolbar button{color:rgba(255,255,255,.6)!important;background:transparent!important}
#nv-mde .editor-toolbar button:hover,#nv-mde .editor-toolbar button.active{background:rgba(255,255,255,.1)!important}
</style>

<div id="nv-scr-list">
  <div class="nv-top">
    <span class="ic">🎙️</span>
    <div><h3>Notas de Voz</h3><span>Tu bitacora Personal.</span></div>
  </div>
  <div class="BS1" style="margin-bottom:16px">
    <div class="BS2" id="nv-add"><div class="BS3"><span class="BS4">➕</span><p class="BS5">Añadir</p></div></div>
  </div>
  <div id="nv-list"><div class="nv-empty">Cargando...</div></div>
</div>

<div id="nv-scr-read" style="display:none">
  <div class="nv-top">
    <span class="nv-back" id="nvr-back">←</span>
    <div style="flex:1"><h3 id="nvr-name">Nota</h3><span id="nvr-date"></span></div>
    <div class="BS1" style="margin:0"><div class="BS2" id="nvr-edit" style="width:44px;height:44px"><div class="BS3"><span class="BS4" style="font-size:1.5em">✏️</span></div></div></div>
  </div>
  <div id="nvr-tracks"></div>
  <a class="back-button" id="nvr-playall" style="display:none;width:100%;text-align:center;box-sizing:border-box">▶️ Reproducir todo en orden</a>
  <div class="nv-read" id="nvr-body"></div>
</div>

<div id="nv-scr-edit" style="display:none">
  <div class="nv-top">
    <span class="nv-back" id="nv-back">←</span>
    <div><h3>Editar Entrada</h3><span>Expresate</span></div>
  </div>

  <div class="nv-sec">
    <div class="nv-nr">
      <div class="nv-fg" id="ne-namewrap"><input id="ne-name" type="text" placeholder="Nombre de la Nota" maxlength="80"></div>
      <div class="nv-recbar">
        <div class="BS2 BS2-CN" id="ne-brec" title="Grabar"><div class="BS3"><span class="BS4">⏺️</span></div></div>
        <div class="BS2 BS2-CN" id="ne-bpause" title="Pausar" style="display:none"><div class="BS3"><span class="BS4">⏸️</span></div></div>
        <div class="BS2 BS2-CN" id="ne-bresume" title="Reanudar" style="display:none"><div class="BS3"><span class="BS4">▶️</span></div></div>
        <div class="BS2 BS2-CN" id="ne-bstop" title="Detener y guardar" style="display:none"><div class="BS3"><span class="BS4">⏹️</span></div></div>
      </div>
    </div>
    <div class="nv-recst" id="ne-recst"></div>
    <div id="ne-tracks"></div>
    <a class="back-button" id="ne-playall" style="display:none;width:100%;text-align:center;box-sizing:border-box">▶️ Reproducir todo en orden</a>
  </div>

  <div id="nv-mde">
    <input type="file" id="ne-filein" accept="image/*,video/*" multiple style="display:none">
    <textarea id="ne-mdtxt"></textarea>
    <div class="nv-savest" id="ne-savest"></div>
  </div>

  <div class="BS1">
    <div class="BS2" id="ne-save"><div class="BS3"><span class="BS4">💾</span><p class="BS5">Guardar</p></div></div>
    <div class="BS2" id="ne-del"><div class="BS3"><span class="BS4">🗑️</span><p class="BS5">Borrar</p></div></div>
  </div>
</div>

<div class="nv-msg" id="nv-toast" style="display:none"></div>

<script>
(function(){
  const _self=document.currentScript;
  const LIBS=[
    {k:'css',url:'https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.css'},
    {k:'js',url:'https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.js'},
    {k:'js',url:'https://cdn.jsdelivr.net/npm/dompurify@3.4.11/dist/purify.min.js'}
  ];
  function loadLib(l){
    return new Promise((res,rej)=>{
      if(l.k==='css'){
        if(document.querySelector(`link[href="${l.url}"]`))return res();
        const e=document.createElement('link');
        e.rel='stylesheet';e.href=l.url;e.onload=res;e.onerror=rej;
        document.head.appendChild(e);
      }else{
        if(l.url.includes('easymde')&&window.EasyMDE)return res();
        if(l.url.includes('purify')&&window.DOMPurify)return res();
        const e=document.createElement('script');
        e.src=l.url;e.onload=res;e.onerror=rej;
        document.head.appendChild(e);
      }
    });
  }
  const libsReady=Promise.all(LIBS.map(loadLib));

  const scrList=document.getElementById('nv-scr-list'),scrEdit=document.getElementById('nv-scr-edit'),scrRead=document.getElementById('nv-scr-read');
  let dirH=null,mde=null,mediaRec=null,mediaStream=null,trackN=0,curId=null,saveTO=null,readBlobs=[];
  let mdReader=null;
  const tEl=document.getElementById('nv-toast');
  let _tt;

  function toast(t,tp,d){
    tp=tp||'ok';d=d||2500;
    tEl.className='nv-msg'+(tp!=='ok'?' '+tp:'');
    tEl.textContent=t;tEl.style.display='block';
    clearTimeout(_tt);
    _tt=setTimeout(()=>{tEl.style.display='none';},d);
  }

  const _hasOPFS=typeof navigator.storage?.getDirectory==='function';

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
    scrRead.style.display=s==='read'?'block':'none';
  }

  async function loadList(){
    const listEl=document.getElementById('nv-list');
    if(!_hasOPFS){listEl.innerHTML='<div class="nv-empty">Tu navegador No es compatible con el Sistema de Archivos Privado o no concediste permisos.</div>';return;}
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
      items.sort((a,b)=>b.fecha-a.fecha||b.id.localeCompare(a.id));
      if(!items.length){listEl.innerHTML='<div class="nv-empty">Sin notas.<br>Toca "Añadir" para crear la primera.</div>';return;}
      listEl.innerHTML='';
      items.forEach(it=>{
        const div=document.createElement('div');div.className='nv-list-it';
        div.innerHTML='<span class="ic">🎙️</span><div><div class="nm"></div><div class="dt"></div></div>';
        div.querySelector('.nm').textContent=it.nombre;
        div.querySelector('.dt').textContent=(it.fecha?fmtDate(it.fecha):'')+(it.naudios?' · '+it.naudios+' audio'+(it.naudios>1?'s':''):' · sin audio');
        div.onclick=()=>openReader(it.id);
        listEl.appendChild(div);
      });
    }catch(e){
      listEl.innerHTML='<div class="nv-empty">Error: '+e.message+'</div>';
    }
  }

  document.getElementById('nv-add').onclick=async()=>{
    if(!_hasOPFS){toast('Tu navegador no soporta esta funcion','err',3500);return;}
    const id=Date.now().toString(36);
    try{
      const nv=await getNVRoot();
      await nv.getDirectoryHandle(id,{create:true});
      openEditor(id);
    }catch(e){toast('Error al crear: '+e.message,'err');}
  };

  async function resolveMediaImgs(root,dh){
    if(!root||!dh)return[];
    const urls=[];
    const imgs=root.querySelectorAll('img[src]');
    for(const img of imgs){
      const src=img.getAttribute('src');
      if(!src||/^(https?:|data:|blob:)/i.test(src))continue;
      try{
        const fh=await dh.getFileHandle(src);
        const file=await fh.getFile();
        const url=URL.createObjectURL(file);
        img.src=url;
        urls.push(url);
      }catch(e){}
    }
    return urls;
  }

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
    items.sort((a,b)=>a.n-b.n);
    return items;
  }

  async function renderTracksInto(trackId,playId,editable){
    const tracksEl=document.getElementById(trackId);
    const playAllBtn=document.getElementById(playId);
    const items=await listTracks();
    tracksEl.innerHTML='';
    if(!items.length){playAllBtn.style.display='none';if(editable)trackN=0;return;}
    playAllBtn.style.display='block';
    for(const it of items){
      const fh=await dirH.getFileHandle(it.name);
      const file=await fh.getFile();
      const url=URL.createObjectURL(file);
      const row=document.createElement('div');row.className='nv-track';row.dataset.n=it.n;
      row.innerHTML='<span class="n">#'+it.n+'</span><audio controls src="'+url+'"></audio>'+(editable?'<button>Borrar</button>':'');
      if(editable)row.querySelector('button').onclick=async()=>{
        if(!confirm('Borrar el audio #'+it.n+'?'))return;
        await dirH.removeEntry(it.name);
        renderTracksInto(trackId,playId,editable);
      };
      tracksEl.appendChild(row);
    }
    if(editable)trackN=items[items.length-1].n;
  }
  function renderTracks(){return renderTracksInto('ne-tracks','ne-playall',true);}

  let playQueue=[],playIdx=0;
  function bindPlayAll(btnId){
    document.getElementById(btnId).onclick=async()=>{
      const items=await listTracks();
      if(!items.length)return;
      playQueue=items;playIdx=0;
      playNext();
    };
  }
  bindPlayAll('ne-playall');
  bindPlayAll('nvr-playall');
  function playNext(){
    document.querySelectorAll('.nv-track').forEach(r=>r.classList.remove('playing'));
    if(playIdx>=playQueue.length)return;
    const it=playQueue[playIdx];
    const row=document.querySelector('.nv-track[data-n="'+it.n+'"]');
    if(!row)return;
    row.classList.add('playing');
    const audioEl=row.querySelector('audio');
    audioEl.currentTime=0;
    audioEl.onended=()=>{playIdx++;playNext();};
    audioEl.play().catch(()=>{});
  }

  const recBtn=document.getElementById('ne-brec'),pauseBtn=document.getElementById('ne-bpause');
  const resumeBtn=document.getElementById('ne-bresume'),stopBtn=document.getElementById('ne-bstop');
  const recSt=document.getElementById('ne-recst'),nameWrap=document.getElementById('ne-namewrap');

  function setRecUI(state){
    const busy=state==='recording'||state==='paused';
    recBtn.style.display=state==='idle'?'flex':'none';
    pauseBtn.style.display=state==='recording'?'flex':'none';
    resumeBtn.style.display=state==='paused'?'flex':'none';
    stopBtn.style.display=busy?'flex':'none';
    nameWrap.style.display=busy?'none':'block';
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
        toast('Audio guardado');
      };
      mediaRec.start();
      setRecUI('recording');
    }catch(e){toast('No se pudo acceder al microfono: '+e.message,'err',4000);}
  };
  pauseBtn.onclick=()=>{if(mediaRec&&mediaRec.state==='recording'){mediaRec.pause();setRecUI('paused');}};
  resumeBtn.onclick=()=>{if(mediaRec&&mediaRec.state==='paused'){mediaRec.resume();setRecUI('recording');}};
  stopBtn.onclick=()=>{if(mediaRec&&mediaRec.state!=='inactive')mediaRec.stop();};

  const MAX_SIZE=10*1024*1024;

  document.getElementById('ne-filein').onchange=async function(e){
    const files=[].slice.call(e.target.files);
    this.value='';
    for(const f of files){
      if(f.size>MAX_SIZE){toast(f.name+' supera 10MB...','warn',3500);continue;}
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
    clearTimeout(saveTO);
    saveTO=setTimeout(saveMD,600);
  };

  const MD_ALLOWED_TAGS=['b','i','em','strong','a','code','pre','br','p','ul','ol','li','h1','h2','h3','blockquote','img'];
  const MD_ALLOWED_ATTR=['href','src','alt'];

  function sanitizeMD(raw){
    if(!/[<>]/.test(raw))return{clean:raw,ok:true};
    if(!window.DOMPurify)return{clean:raw,ok:false};
    const clean=window.DOMPurify.sanitize(raw,{
      ALLOWED_TAGS:MD_ALLOWED_TAGS,
      ALLOWED_ATTR:MD_ALLOWED_ATTR,
      FORBID_TAGS:['script','style','iframe','object','embed','svg','form'],
      FORBID_ATTR:['style','on*']
    });
    return{clean:clean,ok:true};
  }

  function initMDE(){
    if(mde){mde.toTextArea();mde=null;}
    mde=new EasyMDE({
      element:document.getElementById('ne-mdtxt'),
      spellChecker:false,autofocus:false,status:false,
      scrollbarStyle:'null',
      toolbar:['bold','italic','heading','|','quote','unordered-list','ordered-list','|','link',{
        name:'adjuntar',action:()=>document.getElementById('ne-filein').click(),
        className:'fa fa-picture-o',title:'Adjuntar imagen o video'
      },'guide']
    });
    mde.codemirror.on('change',()=>{
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
    const r=sanitizeMD(raw);
    if(!r.ok){
      document.getElementById('ne-savest').textContent='No guardado: filtro de seguridad no disponible';
      toast('No se guardo, falta libreria de seguridad. Reintenta','err',4000);
      return;
    }
    const fh=await dirH.getFileHandle('nota.md',{create:true});
    const w=await fh.createWritable();
    await w.write(r.clean);
    await w.close();
    document.getElementById('ne-savest').textContent='Guardado '+new Date().toLocaleTimeString('es-PY',{hour:'2-digit',minute:'2-digit'});
  }

  document.getElementById('ne-save').onclick=async()=>{
    await saveMD();
    await saveInfo({nombre:document.getElementById('ne-name').value.trim()});
    stopRecordingIfActive();
    backToList();
    toast('Nota guardada');
  };

  document.getElementById('ne-name').onchange=async function(){
    await saveInfo({nombre:this.value.trim()});
  };

  document.getElementById('ne-del').onclick=async e=>{
    e.preventDefault();
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

  document.getElementById('nv-back').onclick=()=>{
    stopRecordingIfActive();
    backToList();
  };

  document.getElementById('nvr-back').onclick=()=>{
    backToList();
  };

  function clearReadBlobs(){
    readBlobs.forEach(u=>URL.revokeObjectURL(u));
    readBlobs=[];
  }

  function backToList(){
    curId=null;dirH=null;
    clearReadBlobs();
    showScreen('list');
    loadList();
  }

  async function openReader(id){
    curId=id;
    const nv=await getNVRoot();
    dirH=await nv.getDirectoryHandle(id,{create:true});
    const info=await loadInfo();
    document.getElementById('nvr-name').textContent=info.nombre||'Nota';
    document.getElementById('nvr-date').textContent=info.fecha?fmtDate(info.fecha):'';
    await renderTracksInto('nvr-tracks','nvr-playall',false);
    let txt='';
    try{
      const fh=await dirH.getFileHandle('nota.md');
      txt=await (await fh.getFile()).text();
    }catch(e){}
    if(!mdReader)mdReader=window.markdownit({html:!1,breaks:!0,linkify:!0,typographer:!0});
    const body=document.getElementById('nvr-body');
    body.innerHTML=txt?mdReader.render(txt):'<p style="opacity:.5">Sin contenido de texto.</p>';
    clearReadBlobs();
    readBlobs=await resolveMediaImgs(body,dirH);
    showScreen('read');
  }

  async function enterEditMode(){
    document.getElementById('ne-name').value='';
    await loadInfo();
    setRecUI('idle');
    await renderTracks();
    showScreen('edit');
    try{
      await libsReady;
      initMDE();
      await loadMD();
    }catch(e){
      toast('Error cargando editor de texto','err',4000);
    }
  }

  async function openEditor(id){
    curId=id;
    const nv=await getNVRoot();
    dirH=await nv.getDirectoryHandle(id,{create:true});
    await enterEditMode();
  }

  document.getElementById('nvr-edit').onclick=()=>{
    clearReadBlobs();
    enterEditMode();
  };

  const _el=document.getElementById('content');
  if(_el){
    _el.addEventListener('contentUnload',function _cleanup(){
      stopRecordingIfActive();
      if(mde){mde.toTextArea();mde=null;}
      clearReadBlobs();
      _el.removeEventListener('contentUnload',_cleanup);
      if(_self&&_self.parentNode)_self.parentNode.removeChild(_self);
    },{once:true});
  }


  loadList();
})();
</script>