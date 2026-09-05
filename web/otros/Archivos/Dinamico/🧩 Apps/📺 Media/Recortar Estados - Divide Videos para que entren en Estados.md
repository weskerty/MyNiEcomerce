<div style="text-align:center;position:relative;padding-top:0;margin-top:0">
<style>
.vc-wrap{padding:12px;max-width:100%;position:relative}
.vc-drop{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;min-height:160px;border:2px dashed rgba(255,255,255,.2);border-radius:20px;background:rgba(255,255,255,.05);cursor:pointer;transition:border-color .2s,background .2s;padding:24px 16px;margin-bottom:14px}
.vc-drop:hover,.vc-drop.vc-over{border-color:rgba(56,189,248,.5);background:rgba(56,189,248,.07)}
.vc-drop span{color:rgba(255,255,255,.5);font-size:.9em}
.vc-btns{display:none;justify-content:center;gap:10px;margin-bottom:14px;flex-wrap:wrap}
.vc-sb{padding:10px 22px;border-radius:12px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.1);color:white;cursor:pointer;font-size:.95em;transition:background .2s}
.vc-sb:hover:not(:disabled){background:rgba(255,255,255,.2)}
.vc-sb:disabled{opacity:.35;cursor:not-allowed}
.vc-list{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-bottom:14px}
.vc-prog-w{width:100%;height:6px;background:rgba(255,255,255,.1);border-radius:3px;overflow:hidden;margin-bottom:4px;display:none}
.vc-prog{height:100%;background:#38bdf8;width:0%;transition:width .2s}
.vc-lbl{color:rgba(255,255,255,.6);font-size:.83em;text-align:center;min-height:1.2em;margin-bottom:10px}
.vc-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:white;padding:10px 22px;border-radius:12px;font-size:.88em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999}
.vc-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.vc-reset{padding:8px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:rgba(255,255,255,.6);cursor:pointer;font-size:.85em;display:none}
.VS1{display:none;margin-bottom:14px}
.VS2{width:100%;max-width:340px;border-radius:14px;background:#000;display:block;margin:0 auto}
.VS2[data-a="1"]{max-width:340px;height:44px;background:none}
.VS3{position:relative;height:34px;max-width:340px;margin:8px auto 0}
.VS3::before{content:'';position:absolute;top:14px;left:9px;right:9px;height:6px;background:rgba(255,255,255,.12);border-radius:3px}
.VS4{position:absolute;top:14px;height:6px;background:#38bdf8;border-radius:3px;pointer-events:none}
.VS5{position:absolute;top:0;left:0;width:100%;height:34px;margin:0;padding:0;border:none;background:none;-webkit-appearance:none;appearance:none;pointer-events:none}
.VS5:focus{border:none}
.VS5::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#38bdf8;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.5);cursor:pointer;pointer-events:auto}
.VS5::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#38bdf8;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.5);cursor:pointer;pointer-events:auto}
.VS5::-webkit-slider-runnable-track{height:6px;background:none}
.VS5::-moz-range-track{height:6px;background:none}
.VS6{color:rgba(255,255,255,.7);font-size:.85em;margin:2px 0 10px;font-variant-numeric:tabular-nums}
.VS7{color:rgba(255,255,255,.5);font-size:.8em;margin:0 0 8px}
.VS8{display:none;position:absolute;inset:0;z-index:50;background:rgba(12,12,14,.72);flex-direction:column;align-items:center;justify-content:center;gap:12px;border-radius:20px;text-align:center;padding:16px}
.VS8.on{display:flex}
.VS9{font-size:.85rem;color:rgba(255,255,255,.85);max-width:80%;min-height:1.2em}
.VS8 .vc-prog-w{max-width:220px}
</style>

<div class="vc-wrap">
  <div class="vc-drop" id="vc-drop">
    <span style="font-size:2.5rem">🎬</span>
    <span>Toca para seleccionar un video o audio</span>
    <input type="file" id="vc-in" accept="video/*,audio/*" style="display:none">
  </div>

  <div class="VS1" id="vc-sel">
    <video class="VS2" id="vc-pv" controls playsinline preload="metadata"></video>
    <audio class="VS2" id="vc-pa" data-a="1" controls preload="metadata"></audio>
    <div class="VS3" id="vc-bar">
      <div class="VS4" id="vc-hl"></div>
      <input type="range" class="VS5" id="vc-r1" min="0" value="0">
      <input type="range" class="VS5" id="vc-r2" min="0" value="0">
    </div>
    <div class="VS6" id="vc-rt"></div>
    <div class="vc-list">
      <button class="vc-sb" id="vc-play">▶️ Escuchar tramo</button>
      <button class="vc-sb" id="vc-cut">✂️ Cortar tramo</button>
    </div>
  </div>

  <div class="VS1" id="vc-res">
    <p class="VS7" id="vc-rest"></p>
    <div class="vc-list">
      <button class="vc-sb" id="vc-rdl">⬇️ Descargar</button>
      <button class="vc-sb" id="vc-rbk">↩️ Elegir otro tramo</button>
    </div>
  </div>

  <div class="vc-btns" id="vc-btns">
    <button class="vc-sb" data-s="30">✂️ 30s</button>
    <button class="vc-sb" data-s="60">✂️ 1 min</button>
    <button class="vc-sb" data-s="90">✂️ 1m 30s</button>
  </div>

  <div style="text-align:center;margin-bottom:10px">
    <div class="vc-lbl" id="vc-lbl"></div>
    <button class="vc-reset" id="vc-dla">⬇️ Descargar todo</button>
    <button class="vc-reset" id="vc-reset">🗑 Nuevo archivo</button>
  </div>

  <div class="vc-list" id="vc-list"></div>

  <div class="VS8" id="vc-wt">
    <img class="wait-anim" alt="">
    <div class="VS9" id="vc-wt-t"></div>
    <div class="vc-prog-w" id="vc-prog-w">
      <div class="vc-prog" id="vc-prog"></div>
    </div>
  </div>
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
const VC_B1=document.getElementById('vc-dla');
const VS_SEL=document.getElementById('vc-sel');
const VS_PV=document.getElementById('vc-pv');
const VS_PA=document.getElementById('vc-pa');
const VS_R1=document.getElementById('vc-r1');
const VS_R2=document.getElementById('vc-r2');
const VS_HL=document.getElementById('vc-hl');
const VS_RT=document.getElementById('vc-rt');
const VS_RES=document.getElementById('vc-res');
const VS_RTX=document.getElementById('vc-rest');
const VS_WT=document.getElementById('vc-wt');
const VS_WTT=document.getElementById('vc-wt-t');

const FF_BASE='https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.15/dist/umd';
const FF_JS=FF_BASE+'/ffmpeg.js';
const FF_CORE_BASE='https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd';

let J=null,K=0,L=[],M=false,N=null,U=null;
let VS_MD=null,VS_OU=null,VS_RU=null,VS_RN='',VS_ST=null;

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
  VS_WTT.textContent=b||'';
  G.textContent=VS_WT.classList.contains('on')?'':(b||'');
}

function VS_W1(a){
  if(a){
    const b=VS_WT.querySelector('img');
    if(!b.getAttribute('src'))b.src=(window.__CFG&&window.__CFG.waitAnim)||'';
  }
  VS_WT.classList.toggle('on',!!a);
  if(!a)G.textContent=VS_WTT.textContent;
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
  VS_RU=null;
  D.innerHTML='';
  VC_B1.style.display='none';
}

function VS_Q1(a){
  const b=Math.floor(a/60);
  const c=Math.floor(a%60);
  return b+':'+(c<10?'0':'')+c+'.'+Math.floor((a%1)*10);
}

function VS_E1(){
  const a=/\.([a-z0-9]{1,5})$/i.exec(J?J.name:'');
  return a?a[1].toLowerCase():'mp4';
}

function VS_L1(a,b,c){
  a.onloadedmetadata=c||null;
  a.src=b;
}

function VS_X1(){
  VS_P2();
  [VS_PV,VS_PA].forEach(a=>{a.pause();a.onloadedmetadata=null;a.onerror=null;a.removeAttribute('src');a.load();});
  if(VS_OU){URL.revokeObjectURL(VS_OU);VS_OU=null;}
  VS_MD=null;J=null;K=0;
  VS_SEL.style.display='none';
  VS_RES.style.display='none';
}

function VS_I1(){
  const a=Math.max(1,Math.round(K*10));
  VS_R1.max=String(a);VS_R2.max=String(a);
  VS_R1.value='0';
  VS_R2.value=String(Math.min(a,300));
  VS_SEL.style.display='block';
  VS_RES.style.display='none';
  VS_U1();
}

function VS_V1(){
  return [parseInt(VS_R1.value,10)/10,parseInt(VS_R2.value,10)/10];
}

function VS_U1(){
  const n=parseInt(VS_R1.max,10);
  let a=parseInt(VS_R1.value,10),b=parseInt(VS_R2.value,10);
  if(a>=b){
    if(document.activeElement===VS_R1){a=Math.max(0,b-1);VS_R1.value=String(a);}
    else{b=Math.min(n,a+1);VS_R2.value=String(b);}
  }
  const l=a/n*100,r=b/n*100;
  VS_HL.style.left='calc('+l+'% + '+(9-l*.18).toFixed(2)+'px)';
  VS_HL.style.width='calc('+(r-l)+'% - '+((r-l)*.18).toFixed(2)+'px)';
  VS_RT.textContent=VS_Q1(a/10)+'  a  '+VS_Q1(b/10)+'   ('+((b-a)/10).toFixed(1)+'s)';
}

function VS_S1(a){
  VS_P2();
  VS_U1();
  if(!VS_MD)return;
  const b=(a&&a.target===VS_R2?parseInt(VS_R2.value,10):parseInt(VS_R1.value,10))/10;
  try{VS_MD.currentTime=b;}catch(err){le('VS_S1 seek fail',err);}
}

function VS_P2(){
  if(VS_ST){clearInterval(VS_ST);VS_ST=null;}
}

function VS_P1(){
  if(!VS_MD)return;
  const [a,b]=VS_V1();
  VS_P2();
  VS_MD.currentTime=a;
  VS_MD.play().catch(err=>le('VS_P1 play fail',err));
  VS_ST=setInterval(()=>{
    if(!VS_MD||VS_MD.paused){VS_P2();return;}
    if(VS_MD.currentTime>=b){VS_MD.pause();VS_P2();}
  },80);
}

function VS_FR1(){
  VS_P2();
  if(!VS_MD)return;
  VS_MD.pause();
  VS_MD.removeAttribute('src');
  VS_MD.load();
}

function VS_B1(){
  VS_P2();
  VS_RES.style.display='none';
  if(!J)return;
  VS_SEL.style.display='block';
  if(VS_MD&&VS_OU&&VS_MD.src!==VS_OU)VS_L1(VS_MD,VS_OU,null);
}

async function VS_M1(a){
  const b=await V();
  try{await b.createDir('/vc');}catch(err){}
  await b.mount(window.FFmpegWASM.FFFSType.WORKERFS,{files:[J]},'/vc');
  lg('VS_M1 mount ok /vc/'+J.name);
  try{
    return await a(b,'/vc/'+J.name);
  }finally{
    try{await b.unmount('/vc');lg('VS_M1 unmount ok');}
    catch(err){le('VS_M1 unmount fail',err);}
  }
}

async function VS_C1(){
  lg('VS_C1 cortar tramo');
  if(M){lg('VS_C1 busy skip');return;}
  if(!J){le('VS_C1 J null');return;}
  const [a,b]=VS_V1();
  if(b-a<0.2){O('Tramo muy corto');return;}
  M=true;
  VS_FR1();
  R();
  VS_W1(true);
  E.style.display='';
  P(10,'preparando...');
  try{
    const c=await VS_M1((d,e)=>W(e,a,b));
    lg('VS_C1 blob',c.size);
    VS_RU=URL.createObjectURL(c);
    L.push(VS_RU);
    VS_RN=J.name.replace(/\.[^.]+$/,'')+'_'+Math.round(a)+'s-'+Math.round(b)+'s.'+VS_E1();
    VS_SEL.style.display='none';
    VS_RES.style.display='block';
    VS_RTX.textContent='Preparando...';
    VS_L1(VS_MD,VS_RU,()=>{
      const d=VS_MD.duration,e=b-a;
      lg('VS_C1 dur real',d,'pedida',e);
      VS_RTX.textContent=isFinite(d)
        ?('Quedo en '+d.toFixed(1)+'s, pediste '+e.toFixed(1)+'s.'+(d-e>0.3?' El corte arranca en el fotograma clave anterior.':''))
        :('Listo, '+Math.round(c.size/1024)+' KB');
    });
    P(100,'listo');
    E.style.display='none';
    P(0,'');
  }catch(err){
    le('VS_C1 fatal',err);
    O('Error: '+err.message);
    E.style.display='none';
    P(0,'');
    U=null;
    VS_B1();
  }finally{
    M=false;
    VS_W1(false);
  }
}

function VC_DL1(a,b){
  const c=document.createElement('a');
  c.href=a;c.download=b;
  document.body.appendChild(c);
  c.click();
  c.remove();
}

async function VC_DA1(){
  const a=[...D.querySelectorAll('button')];
  lg('VC_DA1 descargas',a.length);
  for(const b of a){
    b.click();
    await new Promise(c=>setTimeout(c,400));
  }
}

function S(){
  lg('S reset');
  if(M){lg('S busy skip');return;}
  R();
  VS_X1();
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
VC_B1.onclick=VC_DA1;

function T(a){
  lg('T file',a?.name,a?.type,a?.size);
  const au=!!a&&a.type.startsWith('audio/');
  if(!a||(!a.type.startsWith('video/')&&!au)){
    le('T tipo invalido',a?.type);
    O('Solo video o audio');
    return;
  }
  VS_X1();
  const b=au?VS_PA:VS_PV;
  VS_MD=b;
  VS_PV.style.display=au?'none':'';
  VS_PA.style.display=au?'':'none';
  b.onerror=(ev)=>{
    le('T meta error',ev,b.error?.code,b.error?.message);
    O(au?'Audio invalido':'Video invalido');
  };
  VS_OU=URL.createObjectURL(a);
  lg('T objectURL',VS_OU);
  VS_L1(b,VS_OU,()=>{
    lg('T meta ok dur',b.duration);
    if(!b.duration||!isFinite(b.duration)){
      le('T duracion invalida',b.duration);
      O('Archivo sin duracion valida');
      return;
    }
    K=b.duration;
    J=a;
    A.style.display='none';
    C.style.display='flex';
    H.style.display='inline-block';
    VS_I1();
  });
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
      if(!ffText.includes('{type:"module"}')) throw new Error('worker type patch fail');
      ffText=ffText.replace('{type:"module"}','{type:void 0}');
    }catch(err){
      le('V ffjs fetch fail',err);
      throw err;
    }

    const wm=ffText.match(/new Worker\b[\s\S]*?e\.u\((\d+)\)/);
    lg('V worker regex match',wm?.[1]);
    if(!wm) throw new Error('worker id regex fail');
    const FF_W=FF_BASE+'/'+wm[1]+'.ffmpeg.js';
    lg('V worker url',FF_W);

    P(20,'bajando FFmpeg 32 MB, la primera vez tarda...');
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

    P(90,'iniciando FFmpeg...');
    lg('V d.load start');
    try{
      await d.load({classWorkerURL:wURL,coreURL:cURL,wasmURL:waURL});
      lg('V d.load ok');
    }catch(err){
      le('V d.load fail',err);
      try{d.terminate();}catch(e2){}
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
  lg('W start ss',b,'to',c,'in',a);
  let d;
  try{
    d=await V();
    lg('W ffmpeg ok',d);
  }catch(err){
    le('W V() fail',err);
    throw err;
  }

  const f='o_'+Date.now()+'.'+VS_E1();

  const cmd=['-ss',String(b),'-to',String(c),'-i',a,'-c','copy','-avoid_negative_ts','make_zero',f];
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
    await d.deleteFile(f);
    lg('W deleteFile ok');
  }catch(err){
    le('W deleteFile fail (no critico)',err);
  }

  const ua=g instanceof Uint8Array?g:new Uint8Array(g.buffer);
  lg('W ua len',ua.length);
  const blob=new Blob([ua],{type:(J&&J.type)||'video/mp4'});
  lg('W blob size',blob.size);
  if(!blob.size) throw new Error('blob vacio post-corte ss='+b+' to='+c);
  return blob;
}

async function X(a){
  lg('X seg',a,'dur',K);
  if(M){lg('X busy skip');return;}
  if(!J){le('X J null');return;}
  M=true;
  VS_B1();
  VS_FR1();
  R();
  VS_W1(true);
  E.style.display='';
  P(10,'preparando...');
  try{
    await VS_M1(async(VC_D1,VC_P1)=>{
      const b=Math.ceil(K/a);
      lg('X total parts',b);
      for(let c=0;c<b;c++){
        const d=c*a;
        const e=Math.min((c+1)*a,K);
        lg('X part',c+1,'/',b,'ss',d,'to',e);
        P(Math.round((c/b)*100),'part '+(c+1)+'/'+b);
        let f;
        try{
          f=await W(VC_P1,d,e);
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
        const h=J.name.replace(/\.[^.]+$/,'')+'_p'+(c+1)+'.'+VS_E1();
        const i=document.createElement('button');
        i.textContent='⬇️ '+(c+1);
        i.title=Q(d)+'-'+Q(e);
        i.onclick=()=>VC_DL1(g,h);
        D.appendChild(i);
        lg('X part',c+1,'done url',g);
      }
    });
    P(100,'listo');
    lg('X all done');
    VC_B1.style.display='inline-block';
    await VC_DA1();
  }catch(err){
    le('X fatal',err);
    O('Error: '+err.message);
    E.style.display='none';
    P(0,'');
    U=null;
  }finally{
    M=false;
    VS_W1(false);
    VS_B1();
  }
}

C.querySelectorAll('.vc-sb').forEach(a=>{
  a.onclick=()=>{
    lg('btn click seg',a.dataset.s);
    X(parseInt(a.dataset.s));
  };
});

VS_R1.oninput=VS_S1;
VS_R2.oninput=VS_S1;
document.getElementById('vc-play').onclick=VS_P1;
document.getElementById('vc-cut').onclick=VS_C1;
document.getElementById('vc-rdl').onclick=()=>{if(VS_RU)VC_DL1(VS_RU,VS_RN);};
document.getElementById('vc-rbk').onclick=VS_B1;

function VC_TD1(){
  lg('VC_TD1 teardown urls',L.length);
  clearTimeout(N);
  VS_W1(false);
  VS_P2();
  [VS_PV,VS_PA].forEach(a=>{a.pause();a.removeAttribute('src');});
  if(VS_OU){URL.revokeObjectURL(VS_OU);VS_OU=null;}
  L.forEach(a=>URL.revokeObjectURL(a));
  L=[];
  if(U){U.then(a=>a.terminate()).catch(()=>{});U=null;}
}
document.addEventListener('contentUnload',VC_TD1,{once:true});

lg('init ok');

})();
</script>
</div>
