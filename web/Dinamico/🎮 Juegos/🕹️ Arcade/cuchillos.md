<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body>

<style data-content>
:root{
  --kn-accent:#e8c840;
  --kn-danger:#ff2d6b;
  --kn-hud:48px;
  --kn-bg:#0a0a0f;
}
#KN_W{
  position:relative;
  width:100%;
  height:calc(60vh - var(--kn-hud));
  min-height:320px;
  overflow:hidden;
  font-family:'Courier New',monospace;
  background:transparent;
  user-select:none;
  -webkit-user-select:none;
  touch-action:none;
}
#KN_CV{position:absolute;inset:0;width:100%;height:100%;}
#KN_HUD{
  position:absolute;
  top:0;left:0;right:0;
  height:var(--kn-hud);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 16px;
  pointer-events:none;
  z-index:10;
}
#KN_LV{
  font-size:1rem;
  font-weight:900;
  color:var(--kn-accent);
  text-shadow:0 0 10px var(--kn-accent);
  letter-spacing:2px;
}
#KN_PR{
  font-size:.85rem;
  color:#fff;
  opacity:.7;
  letter-spacing:1px;
}
#KN_NET{font-size:.7rem;color:#ffffff55;text-align:right;line-height:1.4;}
#KN_NET.KN_con{color:var(--kn-accent);}
#KN_OV{
  position:absolute;
  inset:0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:10px;
  z-index:20;
  background:#00000077;
}
#KN_OV.KN_h{display:none;}
#KN_OV h2{
  color:var(--kn-accent);
  font-size:1.6rem;
  font-weight:900;
  text-shadow:0 0 20px var(--kn-accent);
  margin:0;
  letter-spacing:4px;
  text-transform:uppercase;
}
#KN_OV p{color:#fff;font-size:.85rem;margin:0;opacity:.8;text-align:center;}
#KN_BTN{
  margin-top:6px;
  padding:8px 28px;
  background:transparent;
  border:2px solid var(--kn-accent);
  color:var(--kn-accent);
  font-family:'Courier New',monospace;
  font-size:.9rem;
  font-weight:900;
  letter-spacing:3px;
  cursor:pointer;
  text-transform:uppercase;
  text-shadow:0 0 8px var(--kn-accent);
  box-shadow:0 0 16px #e8c84044;
  transition:background .15s,color .15s;
}
#KN_BTN:hover,#KN_BTN:active{background:var(--kn-accent);color:#0a0a0f;}
#KN_MUTE{
  position:absolute;
  bottom:8px;right:8px;
  background:transparent;
  border:1px solid #ffffff33;
  color:#fff;
  font-size:1rem;
  width:30px;height:30px;
  border-radius:50%;
  cursor:pointer;
  z-index:15;
  display:none;
  align-items:center;
  justify-content:center;
  transition:border-color .2s;
}
#KN_MUTE.KN_vis{display:flex;}
#KN_MUTE.KN_muted{border-color:var(--kn-danger);color:var(--kn-danger);}
</style>

<div id="KN_W">
  <canvas id="KN_CV"></canvas>
  <div id="KN_HUD">
    <div id="KN_LV">LVL 1</div>
    <div id="KN_PR"></div>
    <div id="KN_NET">sin red</div>
  </div>
  <div id="KN_OV">
    <h2 id="KN_OT">⚔️ CUCHILLOS</h2>
    <p id="KN_OM">Toca o pulsa espacio para lanzar</p>
    <button id="KN_BTN">JUGAR</button>
  </div>
  <button id="KN_MUTE">🎤</button>
</div>

<script>
(function(){

const KN={
  W:document.getElementById('KN_W'),
  cv:document.getElementById('KN_CV'),
  lv:document.getElementById('KN_LV'),
  pr:document.getElementById('KN_PR'),
  net:document.getElementById('KN_NET'),
  ov:document.getElementById('KN_OV'),
  ot:document.getElementById('KN_OT'),
  om:document.getElementById('KN_OM'),
  btn:document.getElementById('KN_BTN'),
  mute:document.getElementById('KN_MUTE'),
  content:document.getElementById('content'),
};
const ctx=KN.cv.getContext('2d');

const CFG={
  base:'web/otros/Archivos/Imagenes/Permanente/Juegos/Game cuchillos/',
  circleR:80,
  knifeLen:38,
  knifeW:6,
  knifeSpeed:8,
  knifeEmoji:'🗡️',
  knifeFontSize:28,
  knifePerLevel:8,
  lvlImgCount:6,
  baseRotSpd:0.008,
  rotSpdInc:0.003,
  collisionDeg:12,
  lobbyId:'knifecirc-p2p-v1',
  appId:{appId:'knifecirc-p2p-v1'},
  posSendMs:80,
  maxPeers:3,
  positions:['bottom','left','top','right'],
};

const SFX={
  throw:new Audio(),
  hit:new Audio(),
  lvl:new Audio(),
  die:new Audio(),
};
SFX.throw.src=CFG.base+'throw.ogg';
SFX.hit.src=CFG.base+'hit.ogg';
SFX.lvl.src=CFG.base+'lvl.ogg';
SFX.die.src=CFG.base+'die.ogg';
function sfxPlay(a){if(!a.src)return;a.currentTime=0;a.play().catch(function(){});}

let W=0,H=0,CX=0,CY=0;
function KN_resize(){
  W=KN.W.offsetWidth;
  H=KN.W.offsetHeight;
  KN.cv.width=W;
  KN.cv.height=H;
  CX=W/2;
  CY=H/2;
}
KN_resize();
const RO=new ResizeObserver(KN_resize);
RO.observe(KN.W);

const lvlImgs=[];
(function(){
  for(let i=1;i<=CFG.lvlImgCount;i++){
    const img=new Image();
    img.src=CFG.base+'lvl'+i+'.avif';
    lvlImgs.push(img);
  }
})();

function LI_get(lvl){
  const idx=(lvl-1)%CFG.lvlImgCount;
  const img=lvlImgs[idx];
  if(img&&img.complete&&img.naturalWidth)return img;
  return null;
}

const MY_ID=Math.random().toString(36).slice(2,8);
const peers={};
let myPos=0;

let level=1,rotAngle=0,rotSpd=CFG.baseRotSpd;
let knives=[],flying=[];
let alive=true,spectator=false;
let rafId=null,posIv=null;
let best=0;

function KN_hudUpdate(){
  KN.lv.textContent='LVL '+level;
  const need=KN_knifeTarget();
  const placed=knives.filter(function(k){return k.placed;}).length;
  KN.pr.textContent=placed+'/'+need;
}

function KN_knifeTarget(){
  return CFG.knifePerLevel+Math.floor((level-1)*2);
}

function KN_rotSpd(lvl){
  return CFG.baseRotSpd+CFG.rotSpdInc*(lvl-1);
}

function KN_dir(pos){
  if(pos===0)return{dx:0,dy:-1,ax:CX,ay:H-10};
  if(pos===1)return{dx:-1,dy:0,ax:W-10,ay:CY};
  if(pos===2)return{dx:0,dy:1,ax:CX,ay:10};
  return{dx:1,dy:0,ax:10,ay:CY};
}

function KN_throw(pos){
  if(!alive||spectator)return;
  const d=KN_dir(pos);
  flying.push({
    x:d.ax,y:d.ay,
    dx:d.dx,dy:d.dy,
    pos:pos,
    owner:MY_ID,
    done:false,
  });
  sfxPlay(SFX.throw);
  if(sendThrow)sendThrow({pos,id:MY_ID});
}

function KN_angleDiff(a,b){
  const TAU=Math.PI*2;
  let d=((a-b)%TAU+TAU)%TAU;
  if(d>Math.PI)d=TAU-d;
  return d;
}

function KN_collides(angle){
  const threshold=CFG.collisionDeg*(Math.PI/180);
  for(let i=0;i<knives.length;i++){
    if(Math.abs(KN_angleDiff(angle,knives[i].angle))<threshold)return true;
  }
  return false;
}

function KN_placedAngle(pos){
  const d=KN_dir(pos);
  const worldAngle=Math.atan2(-(d.dy),-(d.dx));
  return worldAngle-rotAngle;
}

function tick(){
  rotAngle+=rotSpd;

  for(let i=flying.length-1;i>=0;i--){
    const f=flying[i];
    if(f.done){flying.splice(i,1);continue;}
    f.x+=f.dx*CFG.knifeSpeed;
    f.y+=f.dy*CFG.knifeSpeed;

    const dist=Math.sqrt((f.x-CX)**2+(f.y-CY)**2);
    if(dist<=CFG.circleR+CFG.knifeLen*0.4){
      const hitAngle=KN_placedAngle(f.pos);
      if(KN_collides(hitAngle)){
        if(f.owner===MY_ID){
          KN_die();
        }else{
          KN_peerDie(f.owner);
        }
        flying.splice(i,1);
        sfxPlay(SFX.die);
        continue;
      }
      knives.push({angle:hitAngle,pos:f.pos,owner:f.owner});
      sfxPlay(SFX.hit);
      flying.splice(i,1);
      KN_checkLevel();
      KN_hudUpdate();
      continue;
    }

    const oob=f.x<-50||f.x>W+50||f.y<-50||f.y>H+50;
    if(oob)flying.splice(i,1);
  }
}

function KN_checkLevel(){
  const need=KN_knifeTarget();
  if(knives.length>=need){
    level++;
    if(level>best)best=level-1;
    rotSpd=KN_rotSpd(level);
    knives=[];
    sfxPlay(SFX.lvl);
    KN_hudUpdate();
    if(sendLevel)sendLevel({level});
  }
}

function KN_die(){
  if(!alive)return;
  alive=false;
  spectator=true;
  sfxPlay(SFX.die);
  if(sendDie)sendDie({});
  const alive_peers=Object.values(peers).filter(function(p){return p.alive;});
  if(alive_peers.length===0){
    KN_gameOver();
  }else{
    KN.ot.textContent='Perdiste 💀';
    KN.om.textContent='Nivel '+level+' | Mejor: '+best+'\nEsperando otros jugadores...';
    KN.ov.classList.remove('KN_h');
    KN.btn.style.display='none';
  }
}

function KN_peerDie(id){
  if(peers[id])peers[id].alive=false;
  const anyAlive=alive||Object.values(peers).some(function(p){return p.alive;});
  if(!anyAlive)KN_gameOver();
}

function KN_gameOver(){
  KN.ot.textContent='Game Over 💀';
  KN.om.textContent='Nivel '+level+' | Mejor: '+best;
  KN.btn.style.display='';
  KN.ov.classList.remove('KN_h');
}

function KN_drawCircle(){
  const img=LI_get(level);
  ctx.save();
  ctx.translate(CX,CY);
  ctx.rotate(rotAngle);
  if(img){
    const r=CFG.circleR;
    ctx.beginPath();
    ctx.arc(0,0,r,0,Math.PI*2);
    ctx.clip();
    ctx.drawImage(img,-r,-r,r*2,r*2);
  }else{
    ctx.beginPath();
    ctx.arc(0,0,CFG.circleR,0,Math.PI*2);
    ctx.fillStyle='#2a1a0a';
    ctx.fill();
    ctx.strokeStyle=CFG.knifeEmoji?'#e8c840':'#888';
    ctx.lineWidth=3;
    ctx.stroke();
  }
  ctx.restore();
}

function KN_drawKnife(x,y,angle,alpha){
  ctx.save();
  ctx.globalAlpha=alpha||1;
  ctx.translate(x,y);
  ctx.rotate(angle);
  ctx.font=CFG.knifeFontSize+'px serif';
  ctx.textAlign='center';
  ctx.textBaseline='middle';
  ctx.fillText(CFG.knifeEmoji,0,0);
  ctx.restore();
}

function KN_placedKnifeXY(k){
  const worldAngle=k.angle+rotAngle;
  const tx=CX+Math.cos(worldAngle)*(CFG.circleR+CFG.knifeLen*0.3);
  const ty=CY+Math.sin(worldAngle)*(CFG.circleR+CFG.knifeLen*0.3);
  return{x:tx,y:ty,angle:0};
}

function KN_drawPlayerSlot(pos,id,isMe,peerAlive){
  const d=KN_dir(pos);
  const alpha=(!isMe&&!peerAlive)?0.3:1;
  ctx.save();
  ctx.globalAlpha=alpha;
  ctx.font='18px serif';
  ctx.textAlign='center';
  ctx.textBaseline='middle';
  const ox=d.ax+d.dx*-18;
  const oy=d.ay+d.dy*-18;
  ctx.fillText(isMe?(alive?'🎯':'💀'):'🎯',ox,oy);
  ctx.restore();
}

function render(){
  ctx.clearRect(0,0,W,H);

  KN_drawCircle();

  for(let i=0;i<knives.length;i++){
    const p=KN_placedKnifeXY(knives[i]);
    KN_drawKnife(p.x,p.y,p.angle,1);
  }

  for(let i=0;i<flying.length;i++){
    const f=flying[i];
    KN_drawKnife(f.x,f.y,0,1);
  }

  KN_drawPlayerSlot(0,MY_ID,true,alive);

  let slotIdx=1;
  for(const[pid,ps]of Object.entries(peers)){
    if(slotIdx>CFG.maxPeers)break;
    KN_drawPlayerSlot(slotIdx,pid,false,ps.alive!==false);
    slotIdx++;
  }
}

function loop(){
  tick();
  render();
  rafId=requestAnimationFrame(loop);
}

function startGame(){
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  level=1;
  rotAngle=0;
  rotSpd=KN_rotSpd(1);
  knives=[];
  flying=[];
  alive=true;
  spectator=false;
  KN.btn.style.display='';
  KN.ov.classList.add('KN_h');
  KN_hudUpdate();
  rafId=requestAnimationFrame(loop);
}

const KN_key=function(e){
  if(e.code==='Space'||e.code==='ArrowUp'||e.code==='ArrowDown'){
    e.preventDefault();
    KN_throw(0);
  }
};
document.addEventListener('keydown',KN_key);

KN.btn.addEventListener('click',startGame);
KN.W.addEventListener('click',function(e){
  if(e.target===KN.btn)return;
  if(!alive){return;}
  KN_throw(0);
});
KN.W.addEventListener('touchstart',function(e){
  e.preventDefault();
  if(!alive)return;
  KN_throw(0);
},{passive:false});

let room=null,sendThrow=null,sendLevel=null,sendDie=null;
let ls=null,ra=null,mm=false,voiceInit=false;

async function initVoice(){
  if(voiceInit||!room)return;
  voiceInit=true;
  try{
    ls=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:1,noiseSuppression:1},video:false});
  }catch(e){ls=null;voiceInit=false;return;}
  KN.mute.classList.add('KN_vis');
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
    const mod=await import('https://esm.run/trystero@0.22.0');
    const{joinRoom}=mod;
    room=joinRoom(CFG.appId,CFG.lobbyId);
    KN.net.textContent='...';

    let getThrow,getLevel,getDie2;
    [sendThrow,getThrow]=room.makeAction('throw');
    [sendLevel,getLevel]=room.makeAction('level');
    [sendDie,getDie2]=room.makeAction('die');

    getThrow(function({pos,id},from){
      const d=KN_dir(pos);
      flying.push({x:d.ax,y:d.ay,dx:d.dx,dy:d.dy,pos,owner:from,done:false});
    });

    getLevel(function({level:l}){
      if(l>level){
        level=l;
        rotSpd=KN_rotSpd(level);
        knives=[];
        sfxPlay(SFX.lvl);
        KN_hudUpdate();
      }
    });

    getDie2(function(_,from){
      KN_peerDie(from);
    });

    room.onPeerJoin(function(id){
      if(Object.keys(peers).length>=CFG.maxPeers)return;
      peers[id]={alive:true};
      const n=Object.keys(peers).length;
      KN.net.textContent=n+' online';
      KN.net.classList.add('KN_con');
      initVoice();
    });

    room.onPeerLeave(function(id){
      delete peers[id];
      const n=Object.keys(peers).length;
      KN.net.textContent=n?n+' online':'0';
      if(!n)KN.net.classList.remove('KN_con');
      if(!alive){
        const anyAlive=Object.values(peers).some(function(p){return p.alive;});
        if(!anyAlive)KN_gameOver();
      }
    });

  }catch(e){
    KN.net.textContent='sin red';
  }
}

KN.mute.addEventListener('click',function(){
  mm=!mm;
  if(ls)ls.getAudioTracks().forEach(function(t){t.enabled=!mm;});
  KN.mute.classList.toggle('KN_muted',mm);
  KN.mute.textContent=mm?'🔇':'🎤';
});

initNet();
startGame();

KN.content.addEventListener('contentUnload',function(){
  if(rafId){cancelAnimationFrame(rafId);rafId=null;}
  if(posIv){clearInterval(posIv);posIv=null;}
  document.removeEventListener('keydown',KN_key);
  RO.disconnect();
  if(ls){ls.getTracks().forEach(function(t){t.stop();});ls=null;}
  if(ra){ra.pause();ra.srcObject=null;ra.remove();ra=null;}
  try{if(room)room.leave();}catch(e){}
},{once:true});

})();
</script>

</body>
</html>
