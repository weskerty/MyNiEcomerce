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
.vc-prog{height:100%;background:#38bdf8;width:0%}
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

let J=null,K=0,L=[],M=false,N=null;

function O(a){
  I.textContent=a;
  I.classList.add('show');
  clearTimeout(N);
  N=setTimeout(()=>I.classList.remove('show'),2200);
}

function P(a,b){
  F.style.width=a+'%';
  G.textContent=b||'';
}

function Q(a){
  const b=Math.floor(a/60);
  const c=Math.floor(a%60);
  return b+':'+(c<10?'0':'')+c;
}

function R(){
  L.forEach(a=>URL.revokeObjectURL(a));
  L=[];
  D.innerHTML='';
}

function S(){
  if(M)return;

  R();

  J=null;
  K=0;

  A.style.display='';
  C.style.display='none';
  H.style.display='none';

  E.style.display='none';
  P(0,'');

  B.value='';
}

A.onclick=()=>B.click();

A.ondragover=a=>{
  a.preventDefault();
  A.classList.add('vc-over');
};

A.ondragleave=()=>A.classList.remove('vc-over');

A.ondrop=a=>{
  a.preventDefault();
  A.classList.remove('vc-over');

  const b=a.dataTransfer.files[0];

  if(b)T(b);
};

B.onchange=a=>{
  const b=a.target.files[0];

  if(b)T(b);
};

H.onclick=S;

function T(a){
  if(!a.type.startsWith('video/')){
    O('Solo videos');
    return;
  }

  const b=document.createElement('video');

  b.preload='metadata';

  b.onloadedmetadata=()=>{
    K=b.duration;

    J=a;

    A.style.display='none';
    C.style.display='flex';
    H.style.display='inline-block';

    URL.revokeObjectURL(b.src);
  };

  b.onerror=()=>O('Video inválido');

  b.src=URL.createObjectURL(a);
}

let U=null;

async function V(){
  if(U)return U;

  U=(async()=>{

    await new Promise((a,b)=>{

      const c=document.createElement('script');

      c.src='https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.6/dist/umd/ffmpeg.js';

      c.onload=a;

      c.onerror=()=>b(new Error('FFmpeg load fail'));

      document.head.appendChild(c);

    });

    if(!window.FFmpegWASM)throw new Error('FFmpeg missing');

    const {FFmpeg}=window.FFmpegWASM;

    const d=new FFmpeg();

    await d.load({
      coreURL:'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.4/dist/umd/ffmpeg-core.js'
    });

    return d;

  })();

  return U;
}

async function W(a,b,c){

  const d=await V();

  const e='i_'+Date.now()+'.mp4';
  const f='o_'+Date.now()+'.mp4';

  await d.writeFile(
    e,
    new Uint8Array(await a.arrayBuffer())
  );

  await d.exec([
    '-ss',String(b),
    '-to',String(c),
    '-i',e,
    '-c','copy',
    f
  ]);

  const g=await d.readFile(f);

  await d.deleteFile(e);
  await d.deleteFile(f);

  return new Blob([g.buffer],{
    type:'video/mp4'
  });
}

async function X(a){

  if(M||!J)return;

  M=true;

  R();

  E.style.display='';

  try{

    const b=Math.ceil(K/a);

    for(let c=0;c<b;c++){

      const d=c*a;
      const e=Math.min((c+1)*a,K);

      P(Math.round((c/b)*100),'Parte '+(c+1)+'/'+b);

      const f=await W(J,d,e);

      const g=URL.createObjectURL(f);

      L.push(g);

      const h=J.name.replace(/\.[^.]+$/,'')+'_part'+(c+1)+'.mp4';

      const i=document.createElement('div');
      i.className='vc-it';

      const j=document.createElement('span');
      j.textContent='Parte '+(c+1)+' ('+Q(d)+' - '+Q(e)+')';

      const k=document.createElement('a');
      k.className='vc-dl';
      k.href=g;
      k.download=h;
      k.textContent='⬇ Descargar';

      i.appendChild(j);
      i.appendChild(k);

      D.appendChild(i);
    }

    P(100,'Listo');

  }catch(a){

    console.error(a);

    O('Error al cortar');

    E.style.display='none';

    P(0,'');

  }

  M=false;
}

C.querySelectorAll('.vc-sb').forEach(a=>{
  a.onclick=()=>X(parseInt(a.dataset.s));
});

})();
</script>
</div>