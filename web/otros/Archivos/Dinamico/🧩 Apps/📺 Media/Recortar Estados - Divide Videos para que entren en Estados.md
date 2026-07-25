<div style="text-align:center;position:relative;padding-top:0;margin-top:0">
<style>
.vc-wrap{padding:12px;max-width:100%}
.vc-drop{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;min-height:160px;border:2px dashed rgba(255,255,255,.2);border-radius:20px;background:rgba(255,255,255,.05);cursor:pointer;transition:border-color .2s,background .2s;padding:24px 16px;margin-bottom:14px}
.vc-drop:hover,.vc-drop.vc-over{border-color:rgba(56,189,248,.5);background:rgba(56,189,248,.07)}
.vc-drop span{color:rgba(255,255,255,.5);font-size:.9em}
.vc-btns{display:none;justify-content:center;gap:10px;margin-bottom:14px;flex-wrap:wrap}
.vc-sb{padding:10px 22px;border-radius:12px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.1);color:white;cursor:pointer;font-size:.95em;transition:background .2s}
.vc-sb:hover:not(:disabled){background:rgba(255,255,255,.2)}
.vc-sb:disabled{opacity:.35;cursor:not-allowed}
.vc-list{display:flex;flex-direction:column;gap:8px;margin-bottom:14px}
.vc-it{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:10px 14px}
.vc-it span{flex:1;color:rgba(255,255,255,.8);font-size:.88em;text-align:left}
.vc-dl{padding:7px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(56,189,248,.18);color:white;cursor:pointer;font-size:.85em;text-decoration:none;white-space:nowrap}
.vc-prog-w{width:100%;height:6px;background:rgba(255,255,255,.1);border-radius:3px;overflow:hidden;margin-bottom:4px;display:none}
.vc-prog{height:100%;background:#38bdf8;width:0%;transition:width .2s}
.vc-lbl{color:rgba(255,255,255,.6);font-size:.83em;text-align:center;min-height:1.2em;margin-bottom:10px}
.vc-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:white;padding:10px 22px;border-radius:12px;font-size:.88em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999}
.vc-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.vc-reset{padding:8px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:rgba(255,255,255,.6);cursor:pointer;font-size:.85em;display:none}
</style>

<div class="vc-wrap">
  <div class="vc-drop" id="vc-drop">
    <span style="font-size:2.5rem">🎬</span>
    <span>Toca para seleccionar un video</span>
    <input type="file" id="vc-in" accept="video/*" style="display:none">
  </div>

  <div class="vc-btns" id="vc-btns">
    <button class="vc-sb" data-s="30">✂️ 30s</button>
    <button class="vc-sb" data-s="60">✂️ 1 min</button>
    <button class="vc-sb" data-s="90">✂️ 1m 30s</button>
  </div>

  <div style="text-align:center;margin-bottom:10px">
    <div class="vc-prog-w" id="vc-prog-w">
      <div class="vc-prog" id="vc-prog"></div>
    </div>
    <div class="vc-lbl" id="vc-lbl"></div>
    <button class="vc-reset" id="vc-reset">🗑 Nuevo video</button>
  </div>

  <div class="vc-list" id="vc-list"></div>
</div>

<div class="vc-toast" id="vc-toast"></div>

<script>
(async()=>{

const A=document.getElementById('vc-drop');
const B=document.getElementById('vc-in');
const C=document.getElementById('vc-btns');
const D=document.getElementById('vc-list');
const E=document.getElementById('vc-prog-w');
const F=document.getElementById('vc-prog');
const G=document.getElementById('vc-lbl');
const H=document.getElementById('vc-reset');
const I=document.getElementById('vc-toast');

const FF_BASE='https://unpkg.com/@ffmpeg/ffmpeg@0.12.15/dist/umd';
const FF_JS=FF_BASE+'/ffmpeg.js';
const FF_CORE_BASE='https://unpkg.com/@ffmpeg/core@0.12.10/dist/umd';

let J=null,K=0,L=[],M=false,N=null,U=null;

const lg=(...a)=>console.log('[vc]',...a);
const le=(...a)=>console.error('[vc][ERR]',...a);

function O(a){
  le('toast',a);
  I.textContent=a;
  I.classList.add('show');
  clearTimeout(N);
  N=setTimeout(()=>I.classList.remove('show'),2200);
}

function P(a,b){
  lg('prog',a+'%',b||'');
  F.style.width=a+'%';
  G.textContent=b||'';
}

function Q(a){
  const b=Math.floor(a/60);
  const c=Math.floor(a%60);
  return b+':'+(c<10?'0':'')+c;
}

function R(){
  lg('R revoke',L.length,'urls');
  L.forEach(a=>URL.revokeObjectURL(a));
  L=[];
  D.innerHTML='';
}

function S(){
  lg('S reset');
  if(M){lg('S busy skip');return;}
  R();
  J=null;K=0;
  A.style.display='';
  C.style.display='none';
  H.style.display='none';
  E.style.display='none';
  P(0,'');
  B.value='';
}

A.onclick=()=>{lg('drop click');B.click();};
A.ondragover=a=>{a.preventDefault();A.classList.add('vc-over');};
A.ondragleave=()=>{A.classList.remove('vc-over');};
A.ondrop=a=>{
  a.preventDefault();
  A.classList.remove('vc-over');
  const b=a.dataTransfer.files[0];
  lg('drop file',b?.name,b?.type,b?.size);
  if(b)T(b);
};
B.onchange=a=>{
  const b=a.target.files[0];
  lg('input file',b?.name,b?.type,b?.size);
  if(b)T(b);
};
H.onclick=S;

function T(a){
  lg('T file',a?.name,a?.type,a?.size);
  if(!a||!a.type.startsWith('video/')){
    le('T tipo invalido',a?.type);
    O('Solo videos');
    return;
  }
  const b=document.createElement('video');
  b.preload='metadata';
  b.onloadedmetadata=()=>{
    lg('T meta ok dur',b.duration,'w',b.videoWidth,'h',b.videoHeight);
    if(!b.duration||!isFinite(b.duration)){
      le('T duracion invalida',b.duration);
      O('Video sin duracion valida');
      return;
    }
    K=b.duration;
    J=a;
    A.style.display='none';
    C.style.display='flex';
    H.style.display='inline-block';
    URL.revokeObjectURL(b.src);
  };
  b.onerror=(ev)=>{
    le('T meta error',ev,b.error?.code,b.error?.message);
    O('Video invalido');
  };
  const ou=URL.createObjectURL(a);
  lg('T objectURL',ou);
  b.src=ou;
}

async function V(){
  if(U){
    lg('V cache hit');
    const d=await U;
    lg('V cache ffmpeg',d);
    return d;
  }
  lg('V init start');
  U=(async()=>{
    E.style.display='';
    P(5,'FFmpeg...');

    lg('V fetch ffjs',FF_JS);
    let ffText;
    try{
      const r=await fetch(FF_JS);
      lg('V ffjs status',r.status,r.ok);
      if(!r.ok) throw new Error('ffmpeg.js HTTP '+r.status);
      ffText=await r.text();
      lg('V ffjs len',ffText.length);
    }catch(err){
      le('V ffjs fetch fail',err);
      throw err;
    }

    const wm=ffText.match(/new Worker\b[\s\S]*?e\.u\((\d+)\)/);
    lg('V worker regex match',wm?.[1]);
    if(!wm) throw new Error('worker id regex fail');
    const FF_W=FF_BASE+'/'+wm[1]+'.ffmpeg.js';
    lg('V worker url',FF_W);

    P(20,'assets...');
    lg('V fetch assets: worker + core + wasm');
    let wBuf,cBuf,waBuf;
    try{
      [wBuf,cBuf,waBuf]=await Promise.all([
        fetch(FF_W).then(r=>{
          lg('V worker fetch',r.status,r.ok);
          if(!r.ok) throw new Error('worker HTTP '+r.status);
          return r.arrayBuffer();
        }),
        fetch(FF_CORE_BASE+'/ffmpeg-core.js').then(r=>{
          lg('V core fetch',r.status,r.ok);
          if(!r.ok) throw new Error('core.js HTTP '+r.status);
          return r.arrayBuffer();
        }),
        fetch(FF_CORE_BASE+'/ffmpeg-core.wasm').then(r=>{
          lg('V wasm fetch',r.status,r.ok);
          if(!r.ok) throw new Error('core.wasm HTTP '+r.status);
          return r.arrayBuffer();
        }),
      ]);
      lg('V assets ok worker',wBuf.byteLength,'core',cBuf.byteLength,'wasm',waBuf.byteLength);
    }catch(err){
      le('V assets fetch fail',err);
      throw err;
    }

    const wURL=URL.createObjectURL(new Blob([wBuf],{type:'text/javascript'}));
    const cURL=URL.createObjectURL(new Blob([cBuf],{type:'text/javascript'}));
    const waURL=URL.createObjectURL(new Blob([waBuf],{type:'application/wasm'}));
    lg('V blob urls created');

    P(75,'init...');
    const jsURL=URL.createObjectURL(new Blob([ffText],{type:'text/javascript'}));
    await new Promise((a,b)=>{
      const c=document.createElement('script');
      c.src=jsURL;
      c.onload=()=>{
        lg('V script load ok, FFmpegWASM=',typeof window.FFmpegWASM);
        URL.revokeObjectURL(jsURL);
        a();
      };
      c.onerror=(ev)=>{
        le('V script load fail',ev);
        b(new Error('script load fail'));
      };
      document.head.appendChild(c);
    });

    if(!window.FFmpegWASM){
      le('V window.FFmpegWASM undefined');
      throw new Error('FFmpegWASM missing after script load');
    }
    lg('V FFmpegWASM keys',Object.keys(window.FFmpegWASM));

    const {FFmpeg}=window.FFmpegWASM;
    if(!FFmpeg){
      le('V FFmpeg class undefined');
      throw new Error('FFmpeg class missing');
    }

    const d=new FFmpeg();
    lg('V FFmpeg instance',d);

    d.on('log',({type,message})=>lg('ff-log',type,message));
    d.on('progress',({progress,time})=>lg('ff-progress',Math.round(progress*100)+'%','t',time));

    P(90,'core load...');
    lg('V d.load start');
    try{
      await d.load({classWorkerURL:wURL,coreURL:cURL,wasmURL:waURL});
      lg('V d.load ok');
    }catch(err){
      le('V d.load fail',err);
      throw err;
    }

    URL.revokeObjectURL(wURL);
    URL.revokeObjectURL(cURL);
    URL.revokeObjectURL(waURL);

    E.style.display='none';
    P(0,'');
    lg('V ready');
    return d;
  })();
  return U;
}

async function W(a,b,c){
  lg('W start ss',b,'to',c,'file',a?.name,'size',a?.size);
  let d;
  try{
    d=await V();
    lg('W ffmpeg ok',d);
  }catch(err){
    le('W V() fail',err);
    throw err;
  }

  const ts=Date.now();
  const e='i_'+ts+'.mp4';
  const f='o_'+ts+'.mp4';

  lg('W arrayBuffer start');
  let ab;
  try{
    ab=await a.arrayBuffer();
    lg('W arrayBuffer ok byteLen',ab.byteLength);
  }catch(err){
    le('W arrayBuffer fail',err);
    throw err;
  }

  lg('W writeFile',e);
  try{
    await d.writeFile(e,new Uint8Array(ab));
    lg('W writeFile ok');
  }catch(err){
    le('W writeFile fail',err);
    throw err;
  }

  const cmd=['-ss',String(b),'-to',String(c),'-i',e,'-c','copy','-avoid_negative_ts','make_zero',f];
  lg('W exec cmd',cmd.join(' '));
  let ret;
  try{
    ret=await d.exec(cmd);
    lg('W exec ret',ret,'(0=ok)');
    if(ret!==0) le('W exec non-zero ret',ret,'puede indicar fallo ffmpeg');
  }catch(err){
    le('W exec throw',err);
    throw err;
  }

  lg('W readFile',f);
  let g;
  try{
    g=await d.readFile(f);
    lg('W readFile ok type',g?.constructor?.name,'byteLen',g?.byteLength,'buffer?',!!g?.buffer,'bufLen',g?.buffer?.byteLength);
  }catch(err){
    le('W readFile fail',err);
    throw err;
  }

  if(!g){
    le('W g undefined');
    throw new Error('readFile undefined ret='+ret);
  }
  if(!g.byteLength){
    le('W g byteLength 0 o undefined',g);
    throw new Error('readFile vacio byteLen='+g.byteLength+' ret='+ret);
  }

  try{
    await d.deleteFile(e);
    await d.deleteFile(f);
    lg('W deleteFiles ok');
  }catch(err){
    le('W deleteFiles fail (no critico)',err);
  }

  const ua=g instanceof Uint8Array?g:new Uint8Array(g.buffer);
  lg('W ua len',ua.length);
  const blob=new Blob([ua],{type:'video/mp4'});
  lg('W blob size',blob.size);
  if(!blob.size) throw new Error('blob vacio post-corte ss='+b+' to='+c);
  return blob;
}

async function X(a){
  lg('X seg',a,'dur',K);
  if(M){lg('X busy skip');return;}
  if(!J){le('X J null');return;}
  M=true;
  R();
  E.style.display='';
  try{
    const b=Math.ceil(K/a);
    lg('X total parts',b);
    for(let c=0;c<b;c++){
      const d=c*a;
      const e=Math.min((c+1)*a,K);
      lg('X part',c+1,'/',b,'ss',d,'to',e);
      P(Math.round((c/b)*100),'part '+(c+1)+'/'+b);
      let f;
      try{
        f=await W(J,d,e);
      }catch(err){
        le('X W fail part',c+1,err);
        throw err;
      }
      lg('X blob part',c+1,'size',f?.size);
      if(!f||!f.size){
        le('X blob invalido part',c+1,'size',f?.size);
        throw new Error('blob invalido part '+(c+1));
      }
      const g=URL.createObjectURL(f);
      L.push(g);
      const h=J.name.replace(/\.[^.]+$/,'')+'_p'+(c+1)+'.mp4';
      const i=document.createElement('div');
      i.className='vc-it';
      const j=document.createElement('span');
      j.textContent='p'+(c+1)+' '+Q(d)+'-'+Q(e);
      const k=document.createElement('a');
      k.className='vc-dl';k.href=g;k.download=h;k.textContent='dl';
      i.appendChild(j);i.appendChild(k);D.appendChild(i);
      lg('X part',c+1,'done url',g);
    }
    P(100,'listo');
    lg('X all done');
  }catch(err){
    le('X fatal',err);
    O('Error: '+err.message);
    E.style.display='none';
    P(0,'');
    U=null;
  }
  M=false;
}

C.querySelectorAll('.vc-sb').forEach(a=>{
  a.onclick=()=>{
    lg('btn click seg',a.dataset.s);
    X(parseInt(a.dataset.s));
  };
});

lg('init ok');

})();
</script>
</div>
