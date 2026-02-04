(function(){
const C={
wa:'https://wa.me/595972184435?text=',
def:'Hola%2C%20Quiero%20saber%20mas%20de%20la%20Tienda%20YoGano%0A%0A',
prod:'Hola.%20Me%20interesa%20este%20producto%3A%20'
};

let st={
exp:false,
end:false,
type:'d',
link:'',
glow:null
};

const btn=document.createElement('div');
btn.className='chat-btn';
btn.innerHTML='💬';

const hand=document.createElement('div');
hand.className='hand-pointer';
hand.innerHTML='👇';

btn.appendChild(hand);
document.body.appendChild(btn);

const css=`
.chat-btn{
position:fixed;
bottom:20px;
right:20px;
width:60px;
height:60px;
border-radius:50%;
background:rgba(255,255,255,0.18);
backdrop-filter:blur(12px);
-webkit-backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,0.3);
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
transition:all 0.5s cubic-bezier(0.68,-0.55,0.265,1.55);
box-shadow:0 8px 32px rgba(31,38,135,0.37);
z-index:9999;
font-size:30px;
color:white;
}
.chat-btn.expanded{
left:50%;
right:auto;
transform:translateX(-50%);
width:300px;
height:60px;
border-radius:30px;
font-size:18px;
}
.hand-pointer{
position:absolute;
top:-55px;
left:50%;
transform:translateX(-50%);
font-size:40px;
opacity:0;
pointer-events:none;
transition:opacity 0.3s;
}
.hand-pointer.visible{
opacity:1;
animation:handBounce 0.8s ease-in-out infinite;
}
.finger-zoom{
display:inline-block;
animation:fingerZoom 1.6s ease-out;
}
@keyframes fingerZoom{
0%{transform:scale(0.5);opacity:0}
50%{transform:scale(1.3)}
100%{transform:scale(1);opacity:1}
}
@keyframes handBounce{
0%,100%{transform:translateX(-50%) translateY(0)}
50%{transform:translateX(-50%) translateY(12px)}
}
`;

const s=document.createElement('style');
s.textContent=css;
document.head.appendChild(s);

function parse(){
let h=window.location.hash;
if(!h)return{t:'d',v:null};
try{h=decodeURIComponent(h)}catch(e){}
const m=h.match(/NM=([^-\s]+)/);
if(!m)return{t:'d',v:null};
const n=m[1];
if(n.startsWith('WA'))return{t:'w',v:n.substring(2)};
if(n.startsWith('TG@'))return{t:'ta',v:n.substring(3)};
if(n.startsWith('TG'))return{t:'tn',v:n.substring(2)};
return{t:'d',v:null}
}

function updateLink(){
const d=parse();
const u=encodeURIComponent(window.location.href);
st.type=d.t;
if(d.t==='w'){
st.link=`https://wa.me/${d.v}?text=${C.prod}${u}%0A`;
startGlow('green');
}else if(d.t==='ta'){
st.link=`https://t.me/${d.v}?text=${C.prod}${u}%0A`;
startGlow('blue');
}else if(d.t==='tn'){
st.link=`https://t.me/+${d.v}?text=${C.prod}${u}%0A`;
startGlow('blue');
}else{
st.link=C.wa+C.def;
stopGlow();
}
updateBtn();
}

function startGlow(c){
stopGlow();
const col=c==='green'?'34,197,94':'59,130,246';
st.glow=setInterval(()=>{
btn.style.boxShadow=`0 8px 32px rgba(${col},0.5),inset 0 0 20px rgba(${col},0.3)`;
setTimeout(()=>{
btn.style.boxShadow='0 8px 32px rgba(31,38,135,0.37)';
},800);
},3800);
}

function stopGlow(){
if(st.glow){
clearInterval(st.glow);
st.glow=null;
}
btn.style.boxShadow='0 8px 32px rgba(31,38,135,0.37)';
}

function updateBtn(){
if(st.end)return;
if(st.exp){
btn.innerHTML='💬 Clic para chatear';
btn.appendChild(hand);
}else{
btn.innerHTML='💬';
btn.appendChild(hand);
}
}

function showFinger(){
hand.classList.remove('visible');
const fg=document.createElement('span');
fg.className='finger-zoom';
fg.innerHTML='🫵';
btn.innerHTML='';
btn.appendChild(fg);
btn.appendChild(hand);
setTimeout(()=>{
btn.innerHTML='💬 Clic para chatear';
btn.appendChild(hand);
setTimeout(()=>{
hand.classList.add('visible');
},100);
},1200);
}

function hideFinger(){
hand.classList.remove('visible');
updateBtn();
}

function checkPos(){
const dc=document.getElementById('disqus-container');
if(!dc){
btn.style.bottom='20px';
btn.style.position='fixed';
return;
}
const dTop=dc.offsetTop;
const dBot=dTop+dc.offsetHeight;
const vBot=window.pageYOffset+window.innerHeight;
const gap=20;

if(vBot>=dTop&&!st.exp){
st.exp=true;
btn.classList.add('expanded');
setTimeout(updateBtn,300);
}else if(vBot<dTop&&st.exp){
st.exp=false;
st.end=false;
btn.classList.remove('expanded');
btn.style.position='fixed';
btn.style.bottom='20px';
btn.style.top='';
hideFinger();
}

if(st.exp){
if(vBot>=dBot-gap){
if(!st.end){
st.end=true;
btn.style.position='absolute';
btn.style.bottom='';
btn.style.top=(dBot-80)+'px';
showFinger();
}
}else{
if(st.end){
st.end=false;
btn.style.position='fixed';
btn.style.top='';
btn.style.bottom='20px';
hideFinger();
}
}
}
}

btn.addEventListener('click',()=>{
if(st.link)window.open(st.link,'_blank');
});

window.addEventListener('scroll',checkPos);
window.addEventListener('resize',checkPos);
window.addEventListener('hashchange',()=>{updateLink();setTimeout(checkPos,300)});
window.addEventListener('popstate',()=>{updateLink();setTimeout(checkPos,300)});

const oPS=window.history.pushState;
window.history.pushState=function(){
oPS.apply(window.history,arguments);
updateLink();
setTimeout(checkPos,300);
};

const obs=new MutationObserver(()=>{
clearTimeout(obs.timer);
obs.timer=setTimeout(()=>{checkPos();updateLink()},150);
});
const cnt=document.getElementById('content');
if(cnt)obs.observe(cnt,{childList:true,subtree:true});

updateLink();
checkPos();
})();
