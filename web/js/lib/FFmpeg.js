(()=>{
  if(window.FF1)return;
  const C='https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd/';
  let P=null;
  const S=()=>window.FFmpegWASM?Promise.resolve():P||(P=new Promise((ok,no)=>{
    const s=document.createElement('script');
    s.src='web/js/lib/FFmpeg/ffmpeg.js';
    s.onload=ok;
    s.onerror=()=>{P=null;s.remove();no(new Error('ffmpeg'));};
    document.head.appendChild(s);
  }));
  window.FF1=async()=>{
    await S();
    const f=new FFmpegWASM.FFmpeg();
    try{await f.load({coreURL:C+'ffmpeg-core.js',wasmURL:C+'ffmpeg-core.wasm'});}
    catch(e){f.terminate();throw e;}
    return f;
  };
})();
