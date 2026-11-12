!function(){
  const SK='perf';
  if(localStorage.getItem(SK))return;

  const DL=5000;
  const DUR=8000;
  const INTERVAL=100;
  const THRESHOLD=48;

  setTimeout(()=>{
    const el=document.createElement('div');
    el.style.cssText='position:fixed;inset:0;pointer-events:none;opacity:0;z-index:-9999;will-change:transform,opacity,filter;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)';
    document.body.appendChild(el);

    const frames=[];
    let last=performance.now();
    let rafId;
    let running=true;

    function tick(ts){
      if(!running)return;
      const delta=ts-last;
      if(delta>0)frames.push(1000/delta);
      last=ts;
      rafId=requestAnimationFrame(tick);
    }

    let phase=0;
    const anim=el.animate([
      {transform:'translateZ(0) scale(1)',opacity:0.01},
      {transform:'translateZ(0) scale(1.02)',opacity:0.02},
      {transform:'translateZ(0) scale(1)',opacity:0.01}
    ],{duration:800,iterations:Infinity,easing:'ease-in-out'});

    rafId=requestAnimationFrame(tick);

    setTimeout(()=>{
      running=false;
      cancelAnimationFrame(rafId);
      anim.cancel();
      document.body.removeChild(el);

      if(!frames.length)return;
      const avg=frames.reduce((a,b)=>a+b,0)/frames.length;
      localStorage.setItem(SK,avg<THRESHOLD?'low':'high');
    },DUR);

  },DL);
}();
