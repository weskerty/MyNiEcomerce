(function(){
const D='https://wa.me/595972184435?text=';
const M='Hola%2C%20Quiero%20saber%20mas%20de%20la%20Tienda%20YoGano%0A%0A';
const P='Hola.%20Me%20interesa%20este%20producto%3A%20';

const S={
position:'fixed',
bottom:'20px',
right:'20px',
width:'60px',
height:'60px',
borderRadius:'50%',
background:'rgba(255, 255, 255, 0.18)',
backdropFilter:'blur(12px)',
WebkitBackdropFilter:'blur(12px)',
border:'1px solid rgba(255, 255, 255, 0.3)',
display:'flex',
alignItems:'center',
justifyContent:'center',
cursor:'pointer',
transition:'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
boxShadow:'0 8px 32px rgba(31, 38, 135, 0.37)',
zIndex:'9999',
fontSize:'30px',
overflow:'hidden',
color:'white'
};

const B=document.createElement('div');
Object.assign(B.style,S);
B.innerHTML='💬';
B.dataset.exp='0';
B.dataset.end='0';
document.body.appendChild(B);

let T,L='',E='💬',A1,A2;

function gD(){
let h=window.location.hash;
if(!h)return{t:'d',v:null};
try{
h=decodeURIComponent(h);
}catch(e){}
const m=h.match(/NM=([^-\s]+)/);
if(!m)return{t:'d',v:null};
const n=m[1];
if(n.startsWith('WA'))return{t:'w',v:n.substring(2)};
if(n.startsWith('TG@'))return{t:'ta',v:n.substring(3)};
if(n.startsWith('TG'))return{t:'tn',v:n.substring(2)};
return{t:'d',v:null}
}

function uL(){
const d=gD();
const u=encodeURIComponent(window.location.href);
if(d.t==='w'){
E='💬🟢';
L=`https://wa.me/${d.v}?text=${P}${u}%0A`;
}else if(d.t==='ta'){
E='💬🔷';
L=`https://t.me/${d.v}?text=${P}${u}%0A`;
}else if(d.t==='tn'){
E='💬🔷';
L=`https://t.me/+${d.v}?text=${P}${u}%0A`;
}else{
E='💬';
L=D+M;
}
if(B.dataset.exp==='0'&&B.dataset.end==='0'){
B.innerHTML=E;
}else if(B.dataset.end==='0'){
B.innerHTML=E+' Clic para chatear';
}
}

function sFA(){
if(A1)clearTimeout(A1);
if(A2)clearInterval(A2);
B.style.animation='';
}

function stFA(){
sFA();
B.innerHTML='🫵';
B.style.animation='fingerZoom 0.9s ease-out';
A1=setTimeout(()=>{
B.innerHTML='👆';
B.style.animation='fingerBounce 0.8s ease-in-out infinite';
},900);
}

function cP(){
const dc=document.getElementById('disqus-container');
if(!dc){
B.style.bottom='20px';
B.style.position='fixed';
return;
}

const dcT=dc.offsetTop;
const dcH=dc.offsetHeight;
const dcB=dcT+dcH;
const w=window.innerHeight;
const sT=window.pageYOffset||document.documentElement.scrollTop;
const vB=sT+w;
const gap=20;

if(vB>=dcT&&B.dataset.exp==='0'){
B.dataset.exp='1';
clearTimeout(T);
B.style.right='';
B.style.left='50%';
B.style.transform='translateX(-50%)';
B.style.width='300px';
B.style.height='60px';
B.style.borderRadius='30px';
B.style.fontSize='18px';
T=setTimeout(()=>{
B.innerHTML=E+' Clic para chatear';
},300);
}else if(vB<dcT&&B.dataset.exp==='1'){
B.dataset.exp='0';
B.dataset.end='0';
sFA();
clearTimeout(T);
B.style.left='';
B.style.transform='';
B.style.right='20px';
B.style.width='60px';
B.style.height='60px';
B.style.borderRadius='50%';
B.style.fontSize='30px';
B.style.position='fixed';
B.style.bottom='20px';
B.innerHTML=E;
}

if(B.dataset.exp==='1'){
if(vB>=dcB-gap){
if(B.dataset.end==='0'){
B.dataset.end='1';
B.style.position='absolute';
B.style.bottom='';
B.style.top=(dcB-80)+'px';
stFA();
}
}else{
if(B.dataset.end==='1'){
B.dataset.end='0';
sFA();
B.innerHTML=E+' Clic para chatear';
}
B.style.position='fixed';
B.style.top='';
B.style.bottom='20px';
}
}
}

const css=document.createElement('style');
css.textContent=`
@keyframes fingerZoom{
0%{transform:translateX(-50%) scale(0.5);opacity:0}
100%{transform:translateX(-50%) scale(1);opacity:1}
}
@keyframes fingerBounce{
0%,100%{transform:translateX(-50%) translateY(0)}
50%{transform:translateX(-50%) translateY(-10px)}
}
`;
document.head.appendChild(css);

B.addEventListener('click',()=>{
if(L)window.open(L,'_blank');
});

window.addEventListener('scroll',cP);
window.addEventListener('resize',cP);
window.addEventListener('hashchange',()=>{
uL();
setTimeout(cP,300);
});
window.addEventListener('popstate',()=>{
uL();
setTimeout(cP,300);
});

const oPS=window.history.pushState;
window.history.pushState=function(){
oPS.apply(window.history,arguments);
uL();
setTimeout(cP,300);
};

let tO;
const obs=new MutationObserver(()=>{
clearTimeout(tO);
tO=setTimeout(()=>{
cP();
uL();
},150);
});
const c=document.getElementById('content');
if(c){
obs.observe(c,{childList:true,subtree:true});
}

uL();
cP();
})();
