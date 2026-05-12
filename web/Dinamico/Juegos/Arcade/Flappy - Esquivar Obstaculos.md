

<style data-content>
:root{
  --fb-accent:#39ff14;
  --fb-danger:#ff2d6b;
  --fb-hud:48px;
}
#FB_W{
  position:relative;
  width:100%;
  height:calc(100vh - var(--fb-hud));
  min-height:320px;
  overflow:hidden;
  font-family:'Courier New',monospace;
  background:transparent;
  user-select:none;
  -webkit-user-select:none;
  touch-action:none;
}
#FB_CV{position:absolute;inset:0;width:100%;height:100%;}
#FB_HUD{
  position:absolute;
  top:0;left:0;right:0;
  height:var(--fb-hud);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 16px;
  pointer-events:none;
  z-index:10;
}
#FB_SC{
  font-size:2rem;
  font-weight:900;
  color:var(--fb-accent);
  text-shadow:0 0 12px var(--fb-accent),0 0 24px var(--fb-accent);
  letter-spacing:2px;
}
#FB_NET{font-size:.7rem;color:#ffffff55;text-align:right;line-height:1.4;}
#FB_NET.FB_con{color:var(--fb-accent);}
#FB_OV{
  position:absolute;
  inset:0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:12px;
  z-index:20;
  background:#00000066;
}
#FB_OV.FB_h{display:none;}
#FB_OV h2{
  color:var(--fb-accent);
  font-size:2.2rem;
  font-weight:900;
  text-shadow:0 0 20px var(--fb-accent);
  margin:0;
  letter-spacing:4px;
  text-transform:uppercase;
}
#FB_OV p{color:#fff;font-size:.95rem;margin:0;opacity:.8;}
#FB_BTN{
  margin-top:8px;
  padding:10px 32px;
  background:transparent;
  border:2px solid var(--fb-accent);
  color:var(--fb-accent);
  font-family:'Courier New',monospace;
  font-size:1rem;
  font-weight:900;
  letter-spacing:3px;
  cursor:pointer;
  text-transform:uppercase;
  text-shadow:0 0 8px var(--fb-accent);
  box-shadow:0 0 16px #39ff1444;
  transition:background .15s,color .15s;
}
#FB_BTN:hover,#FB_BTN:active{background:var(--fb-accent);color:#070710;}
#FB_MUTE{
  position:absolute;
  bottom:12px;right:12px;
  background:transparent;
  border:1px solid #ffffff33;
  color:#fff;
  font-size:1.2rem;
  width:36px;height:36px;
  border-radius:50%;
  cursor:pointer;
  z-index:15;
  display:none;
  align-items:center;
  justify-content:center;
  transition:border-color .2s;
}
#FB_MUTE.FB_vis{display:flex;}
#FB_MUTE.FB_muted{border-color:var(--fb-danger);color:var(--fb-danger);}
</style>

<div id="FB_W">
  <canvas id="FB_CV"></canvas>
  <div id="FB_HUD">
    <div id="FB_SC">0</div>
    <div id="FB_NET">sin red</div>
  </div>
  <div id="FB_OV">
    <h2 id="FB_OT">FLAPPY</h2>
    <p id="FB_OM">Toca o pulsa espacio para jugar</p>
    <button id="FB_BTN">JUGAR</button>
  </div>
  <button id="FB_MUTE">🎤</button>
</div>

<script>
(function(){

const FB={
  W:document.getElementById('FB_W'),
  cv:document.getElementById('FB_CV'),
  sc:document.getElementById('FB_SC'),
  net:document.getElementById('FB_NET'),
  ov:document.getElementById('FB_OV'),
  ot:document.getElementById('FB_OT'),
  om:document.getElementById('FB_OM'),
  btn:document.getElementById('FB_BTN'),
  mute:document.getElementById('FB_MUTE'),
  content:document.getElementById('content'),
};
const ctx=FB.cv.getContext('2d');

const CFG={
  gravity:0.38,
  flap:-7.2,
  pipeW:52,
  pipeGap:145,
  pipeSpd:2.2,
  pipeDist:260,
  birdX:80,
  birdR:17,
  lobbyId:'flappy-p2p-v1',
  appId:{appId:'flappy-p2p-v1'},
  findSec:6,
  imgSrc:'https://picsum.photos/seed/',
  posSendMs:50,
};

let W=0,H=0;
function FB_resize(){
  W=FB.W.offsetWidth;
  H=FB.W.offsetHeight;
  FB.cv.width=W;
  FB.cv.height=H;
}
FB_resize();
const RO=new ResizeObserver(FB_resize);
RO.observe(FB.W);

function rng32(s){
  return function(){
    s=s+0x6d2b79f5|0;
    let t=Math.imul(s^s>>>15,1|s);
    t^=t+Math.imul(t^t>>>7,61|t);
    return((t^t>>>14)>>>0)/4294967296;
  };
}

let rng=null;
let pipes=[],score=0,best=0;
let by=0,bvy=0,alive=false,started=false;
let rafId=null,posIv=null;

function newPipe(x){
  return{x,topH:H*0.15+rng()*(H*0.55),passed:false};
}

function initGame(){
  rng=rng32(Date.now()&0xFFFFFFFF);
  pipes=[];
  score=0;
  by=H/2;
  bvy=0;
  alive=true;
  started=false;
  FB.sc.textContent='0';
  pipes.push(newPipe(W+CFG.pipeDist));
  pipes.push(newPipe(W+CFG.pipeDist*2));
}

function flap(){
  if(!alive)return;
  started=true;
  bvy=CFG.flap;
}

function tick(){
  if(!alive||!started)return;
  bvy+=CFG.gravity;
  by+=bvy;
  for(const p of pipes)p.x-=CFG.pipeSpd;
  if(pipes[pipes.length-1].x<W-CFG.pipeDist)pipes.push(newPipe(W+10));
  while(pipes.length&&pipes[0].x<-CFG.pipeW-10)pipes.shift();
  const bx=CFG.birdX,br=CFG.birdR-3;
  for(const p of pipes){
    if(!p.passed&&p.x+CFG.pipeW<bx){p.passed=true;score++;FB.sc.textContent=score;}
    const inX=bx+br>p.x&&bx-br<p.x+CFG.pipeW;
    const inY=by-br<p.topH||by+br>p.topH+CFG.pipeGap;
    if(inX&&inY){die();return;}
  }
  if(by-CFG.birdR<0||by+CFG.birdR>H){die();return;}
}

function die(){
  alive=false;
  if(score>best)best=score;
  FB.ot.textContent='GAME OVER';
  FB.om.textContent='Puntaje: '+score+' | Mejor: '+best;
  FB.ov.classList.remove('FB_h');
}

function drawPipe(p){
  const g=ctx.createLinearGradient(p.x,0,p.x+CFG.pipeW,0);
  g.addColorStop(0,'#1a3a1a');g.addColorStop(.4,'#2d7a2d');g.addColorStop(1,'#1a3a1a');
  ctx.fillStyle=g;
  ctx.fillRect(p.x,0,CFG.pipeW,p.topH-4);
  ctx.fillRect(p.x,p.topH+CFG.pipeGap+4,CFG.pipeW,H);
  ctx.fillStyle='#3daf3d';
  ctx.fillRect(p.x-4,p.topH-18,CFG.pipeW+8,18);
  ctx.fillRect(p.x-4,p.topH+CFG.pipeGap,CFG.pipeW+8,18);
}

const birdImgs={};
function getImg(id){
  if(birdImgs[id])return birdImgs[id];
  const img=new Image();
  img.crossOrigin='anonymous';
  img.src=CFG.imgSrc+id+'/'+(CFG.birdR*4)+'/'+(CFG.birdR*4);
  return(birdImgs[id]=img);
}

const MY_ID=Math.random().toString(36).slice(2,8);
const peers={};

function drawBird(x,y,id,alpha,angle){
  ctx.save();
  ctx.globalAlpha=alpha;
  ctx.translate(x,y);
  ctx.rotate(angle);
  const r=CFG.birdR,img=getImg(id);
  ctx.beginPath();
  ctx.arc(0,0,r,0,Math.PI*2);
  if(img.complete&&img.naturalWidth){
    ctx.clip();
    ctx.drawImage(img,-r,-r,r*2,r*2);
  }else{
    ctx.fillStyle=id===MY_ID?'#39ff14':'#f7c948';
    ctx.fill();
  }
  ctx.restore();
}

function render(){
  ctx.clearRect(0,0,W,H);
  for(const p of pipes)drawPipe(p);
  drawBird(CFG.birdX,by,MY_ID,1,Math.max(-0.5,Math.min(1.2,bvy*0.06)));
  for(const [pid,ps] of Object.entries(peers)){
    if(ps.y!=null&&ps.alive)drawBird(CFG.birdX+4,ps.y,pid,0.72,0);
  }
  if(!started&&alive){
    ctx.fillStyle='#ffffff55';
    ctx.font='bold 14px "Courier New"';
    ctx.textAlign='center';
    ctx.fillText('TAP / ESPACIO',W/2,H/2+50);
    ctx.textAlign='left';
  }
}

function loop(){
  tick();
  render();
  rafId=requestAnimationFrame(loop);
}

function startGame(){
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  FB.ov.classList.add('FB_h');
  initGame();
  rafId=requestAnimationFrame(loop);
}

const FB_key=function(e){
  if(e.code==='Space'||e.code==='ArrowUp'){
    e.preventDefault();
    if(!alive){startGame();return;}
    flap();
  }
};
document.addEventListener('keydown',FB_key);

FB.btn.addEventListener('click',startGame);
FB.W.addEventListener('click',function(e){
  if(e.target===FB.btn)return;
  if(!alive){startGame();return;}
  flap();
});
FB.W.addEventListener('touchstart',function(e){
  e.preventDefault();
  if(!alive){startGame();return;}
  flap();
},{passive:false});

let room=null,sendPos=null;
let ls=null,ra=null,mm=false,voiceInit=false;

async function initVoice(){
  if(voiceInit||!room)return;
  voiceInit=true;
  try{
    ls=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:1,noiseSuppression:1},video:false});
  }catch(e){ls=null;voiceInit=false;return;}
  FB.mute.classList.add('FB_vis');
  room.addStream(ls);
  room.onPeerStream(function(s){
    if(ra){ra.pause();ra.srcObject=null;ra.remove();}
    ra=document.createElement('audio');
    ra.srcObject=s;ra.autoplay=1;ra.playsInline=1;ra.volume=.7;
    document.body.appendChild(ra);
  });
}

async function initNet(){
  try{
    const {joinRoom}=await import('https://esm.run/trystero@0.22.0');
    room=joinRoom(CFG.appId,CFG.lobbyId);
    FB.net.textContent='buscando...';
    let getSP;
    [sendPos,getSP]=room.makeAction('pos');
    getSP(function({y,alive:a},from){
      if(!peers[from])peers[from]={};
      peers[from].y=y;
      peers[from].alive=a;
    });
    room.onPeerJoin(function(id){
      peers[id]={};
      FB.net.textContent=Object.keys(peers).length+' online';
      FB.net.classList.add('FB_con');
      initVoice();
    });
    room.onPeerLeave(function(id){
      delete peers[id];
      const n=Object.keys(peers).length;
      FB.net.textContent=n?n+' online':'sin peers';
      if(!n)FB.net.classList.remove('FB_con');
    });
    setTimeout(function(){
      if(!FB.net.classList.contains('FB_con'))FB.net.textContent='sin red';
    },CFG.findSec*1000);
  }catch(e){
    FB.net.textContent='sin red';
  }
}

posIv=setInterval(function(){
  if(sendPos&&alive)sendPos({y:by,alive});
},CFG.posSendMs);

FB.mute.addEventListener('click',function(){
  mm=!mm;
  if(ls)ls.getAudioTracks().forEach(function(t){t.enabled=!mm;});
  FB.mute.classList.toggle('FB_muted',mm);
  FB.mute.textContent=mm?'🔇':'🎤';
});

initNet();
startGame();

FB.content.addEventListener('contentUnload',function(){
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  if(posIv){clearInterval(posIv);posIv=null;}
  document.removeEventListener('keydown',FB_key);
  RO.disconnect();
  if(ls){ls.getTracks().forEach(function(t){t.stop();});ls=null;}
  if(ra){ra.pause();ra.srcObject=null;ra.remove();ra=null;}
  try{if(room)room.leave();}catch(e){}
},{once:true});

})();
</script>

</body>
