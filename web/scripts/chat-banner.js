(function(){
const W={p:'Hola%20Quiero%20Comprar%20',d:'https://wa.me/595972184435?text=Hola%2C%20Quiero%20saber%20mas%20de%20la%20Tienda%20YoGano%0A%0A'};
let S={c:[],r:false},A={b:false};
const B=document.createElement('div');
B.className='b';
B.innerHTML='💬';
B.style.boxShadow='0 8px 32px rgba(34,197,94,0.3)';
const F=document.createElement('div');
F.className='f';
F.innerHTML='👇';
B.appendChild(F);
document.body.appendChild(B);
const M=document.createElement('div');
M.className='m';
M.innerHTML='<div class="mc"><div class="mh">🛒 Carrito<span class="mx">✕</span></div><div class="mb"></div></div>';
document.body.appendChild(M);
const s=document.createElement('style');
s.textContent=`
.b{position:fixed;bottom:20px;right:20px;width:60px;height:60px;border-radius:50%;background:rgba(255,255,255,0.18);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:9999;font-size:30px;color:#fff;transition:all 0.3s ease}
.b.e{left:50%;right:auto;transform:translateX(-50%);width:300px;height:60px;border-radius:30px;font-size:18px}
.b.ab{animation:ab 0.8s cubic-bezier(0.68,-0.55,0.265,1.55)}
@keyframes ab{0%{transform:rotate(0deg) translateY(0)}15%{transform:rotate(-8deg) translateY(0)}30%{transform:rotate(-15deg) translateY(12px)}50%{transform:rotate(-12deg) translateY(18px)}70%{transform:rotate(-6deg) translateY(10px)}85%{transform:rotate(-2deg) translateY(4px)}100%{transform:rotate(0deg) translateY(0)}}
.b.e.ab{animation:abe 0.8s cubic-bezier(0.68,-0.55,0.265,1.55)}
@keyframes abe{0%{transform:translateX(-50%) rotate(0deg) translateY(0)}15%{transform:translateX(-50%) rotate(-8deg) translateY(0)}30%{transform:translateX(-50%) rotate(-15deg) translateY(12px)}50%{transform:translateX(-50%) rotate(-12deg) translateY(18px)}70%{transform:translateX(-50%) rotate(-6deg) translateY(10px)}85%{transform:translateX(-50%) rotate(-2deg) translateY(4px)}100%{transform:translateX(-50%) rotate(0deg) translateY(0)}}
.f{position:absolute;top:-55px;left:50%;transform:translateX(-50%);font-size:40px;opacity:0;pointer-events:none;transition:opacity 0.3s}
.f.v{opacity:1;animation:fb 0.8s ease-in-out infinite}
.fz{display:inline-block;animation:fzo 1.6s ease-out}
@keyframes fzo{0%{transform:scale(0.5);opacity:0}50%{transform:scale(1.3)}100%{transform:scale(1);opacity:1}}
@keyframes fb{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(12px)}}
.m{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;z-index:99999}
.m.v{display:flex}
.mc{background:rgba(255,255,255,0.15);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.25);border-radius:20px;width:90%;max-width:600px;max-height:80vh;overflow:hidden;display:flex;flex-direction:column}
@media(min-width:769px){.mc{width:600px}}
.mh{padding:20px;font-size:24px;font-weight:bold;border-bottom:1px solid rgba(255,255,255,0.2);color:#fff;text-align:center;position:relative}
.mx{position:absolute;right:20px;top:50%;transform:translateY(-50%);font-size:28px;cursor:pointer;width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:50%}
.mx:hover{background:rgba(255,255,255,0.2)}
.mb{padding:20px;overflow-y:auto;flex:1;color:#fff}
.cp{margin-bottom:30px}
.cn{font-size:18px;font-weight:bold;margin-bottom:15px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.15)}
.ci{background:rgba(255,255,255,0.1);border-radius:12px;padding:15px;margin-bottom:12px;transition:opacity 0.4s ease,transform 0.4s ease}
.ci.rm{opacity:0;transform:translateY(-20px)}
.ct{font-size:16px;font-weight:bold;margin-bottom:8px}
.cr{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;font-size:14px}
.cc{display:flex;align-items:center;gap:10px}
.cc button{width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.3);color:#fff;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center}
.cc button:hover{background:rgba(255,255,255,0.3)}
.cc span{min-width:30px;text-align:center;font-weight:bold}
.to{margin-top:20px;padding-top:20px;border-top:2px solid rgba(255,255,255,0.3);font-size:20px;font-weight:bold;text-align:center}
.ca{display:flex;gap:10px;margin-top:20px;justify-content:center;flex-wrap:wrap}
.bt{padding:12px 24px;border-radius:20px;border:1px solid rgba(255,255,255,0.4);background:rgba(255,255,255,0.2);color:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;gap:8px}
.bt:hover{background:rgba(255,255,255,0.3)}
.bt.w{background:rgba(34,197,94,0.3);border-color:rgba(34,197,94,0.6)}
.bt.g{background:rgba(59,130,246,0.3);border-color:rgba(59,130,246,0.6)}
.em{text-align:center;padding:40px 20px;font-size:18px;opacity:0.7}
`;
document.head.appendChild(s);

function UB(){
if(S.c.length>0){
if(B.classList.contains('e')){
B.innerHTML='🛒 Finalizar compra';
}else{
B.innerHTML='🛒';
}
}else{
if(B.classList.contains('e')){
B.innerHTML='💬 Clic para chatear';
}else{
B.innerHTML='💬';
}
}
B.appendChild(F);
}

function UF(){
if(S.c.length===0){
F.classList.remove('v');
return;
}
F.classList.remove('v');
const z=document.createElement('span');
z.className='fz';
z.innerHTML='🫵';
B.innerHTML='';
B.appendChild(z);
B.appendChild(F);
setTimeout(()=>{
UB();
setTimeout(()=>{
F.classList.add('v');
},100);
},1200);
}

function HF(){
F.classList.remove('v');
UB();
}

function AB(){
if(A.b)return;
A.b=true;
B.classList.add('ab');
setTimeout(()=>{
B.classList.remove('ab');
A.b=false;
},800);
}

function RI(el){
el.classList.add('rm');
setTimeout(()=>el.remove(),400);
}

function R(){
if(!S.r)return;
const d=document.getElementById('disqus-container');
if(!d)return;
const t=d.offsetTop,b=window.pageYOffset+window.innerHeight;
if(b>=t){
if(!B.classList.contains('e')){
B.classList.add('e');
UB();
}
}else{
if(B.classList.contains('e')){
B.classList.remove('e');
B.style.position='fixed';
B.style.bottom='20px';
B.style.top='';
HF();
}
}
if(B.classList.contains('e')){
const db=t+d.offsetHeight;
if(b>=db-20){
if(B.style.position!=='absolute'){
B.style.position='absolute';
B.style.bottom='';
B.style.top=(db-80)+'px';
UF();
}
}else{
if(B.style.position==='absolute'){
B.style.position='fixed';
B.style.top='';
B.style.bottom='20px';
HF();
}
}
}
}

function C(t,n,i,d,p,b,m='add'){
const x=S.c.findIndex(z=>z.i===i&&z.t===t&&z.n===n);
if(m==='set'){
if(x>-1){S.c[x].d=d;if(S.c[x].d<=0)S.c.splice(x,1)}
}else{
if(x>-1){S.c[x].d+=d;if(S.c[x].d<=0)S.c.splice(x,1)}
else if(d>0)S.c.push({t:t,n:n,i:i,d:d,p:p,b:b});
}
UB();
if(m==='add'&&d>0)AB();
}

function V(){
if(!S.c.length){M.querySelector('.mb').innerHTML='<div class="em">🛒 Carrito vacío</div>';return}
const g={};
S.c.forEach(x=>{
const k=x.t+'-'+x.n;
if(!g[k])g[k]={t:x.t,n:x.n,items:[]};
g[k].items.push(x);
});
let h='',total=0;
Object.keys(g).forEach(k=>{
const grp=g[k];
h+=`<div class="cp"><div class="cn">📦 ${grp.n}</div>`;
grp.items.forEach(i=>{
const tp=i.p*i.d;
total+=tp;
h+=`<div class="ci" data-key="${i.t}-${i.n}-${i.i}"><div class="ct">${i.b}</div><div class="cr"><span>👛 ${i.p}Gs</span><span>💰 ${tp}Gs</span></div><div class="cr"><span>🛒</span><div class="cc"><button data-t="${i.t}" data-n="${i.n}" data-i="${i.i}" data-a="-">−</button><span>${i.d}</span><button data-t="${i.t}" data-n="${i.n}" data-i="${i.i}" data-a="+">+</button></div></div></div>`;
});
let msg='';
grp.items.forEach(i=>msg+=`CD=${i.d}-ID=${i.i};`);
msg=msg.slice(0,-1);
const me=encodeURIComponent(W.p+msg);
h+=`<div class="ca">`;
if(grp.t==='wt'){
h+=`<button class="bt w" data-l="https://wa.me/${grp.n}?text=${me}">📱 WhatsApp</button>`;
h+=`<button class="bt g" data-l="https://t.me/+${grp.n}?text=${me}">✈️ Telegram</button>`;
}else if(grp.t==='w'){
h+=`<button class="bt w" data-l="https://wa.me/${grp.n}?text=${me}">📱 WhatsApp</button>`;
}else if(grp.t==='t'){
h+=`<button class="bt g" data-l="https://t.me/+${grp.n}?text=${me}">✈️ Telegram</button>`;
}
h+=`</div></div>`;
});
h+=`<div class="to">💸 Total: ${total}Gs</div>`;
M.querySelector('.mb').innerHTML=h;
}

function T(){M.classList.toggle('v');if(M.classList.contains('v'))V()}

B.addEventListener('click',()=>{
if(S.c.length>0){
T();
}else{
window.open(W.d,'_blank');
}
});

M.addEventListener('click',e=>{
if(e.target===M||e.target.classList.contains('mx'))T();
const btn=e.target.closest('button');
if(btn){
if(btn.dataset.l){window.open(btn.dataset.l,'_blank');T()}
else if(btn.dataset.a){
const t=btn.dataset.t,n=btn.dataset.n,i=btn.dataset.i;
const x=S.c.find(z=>z.i===i&&z.t===t&&z.n===n);
if(x){
const nd=btn.dataset.a==='+'?x.d+1:x.d-1;
if(nd<=0){
const el=M.querySelector(`.ci[data-key="${t}-${n}-${i}"]`);
if(el)RI(el);
setTimeout(()=>{C(t,n,i,nd,x.p,x.b,'set');V()},400);
}else{
C(t,n,i,nd,x.p,x.b,'set');
V();
}
}
}
}
});

window.addEventListener('cartAdd',e=>{
const {type,num,id,q,pc,nb}=e.detail;
C(type,num,id,q,pc,nb);
});

window.addEventListener('scroll',R);
window.addEventListener('resize',R);

setTimeout(()=>{S.r=true;R()},2000);
})();
