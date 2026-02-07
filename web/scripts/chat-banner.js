(function(){
const W={p:'Hola%20Quiero%20Comprar%20',d:'https://wa.me/595972184435?text=Hola%2C%20Quiero%20saber%20mas%20de%20la%20Tienda%20YoGano%0A%0A'};
let S={c:[],r:false};
const B=document.createElement('div');
B.className='b';
B.innerHTML='💬';
B.style.boxShadow='0 8px 32px rgba(34,197,94,0.3)';
document.body.appendChild(B);
const M=document.createElement('div');
M.className='m';
M.innerHTML='<div class="mc"><div class="mh">🛒 Carrito<span class="mx">✕</span></div><div class="mb"></div></div>';
document.body.appendChild(M);
const s=document.createElement('style');
s.textContent=`
.b{position:fixed;bottom:20px;right:20px;width:60px;height:60px;border-radius:50%;background:rgba(255,255,255,0.18);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:9999;font-size:30px;color:#fff}
.b.e{left:50%;right:auto;transform:translateX(-50%);width:300px;height:60px;border-radius:30px;font-size:18px}
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
.ci{background:rgba(255,255,255,0.1);border-radius:12px;padding:15px;margin-bottom:12px}
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

function R(){
if(!S.r)return;
const d=document.getElementById('disqus-container');
if(!d)return;
const t=d.offsetTop,b=window.pageYOffset+window.innerHeight;
if(b>=t){
if(!B.classList.contains('e')){
B.classList.add('e');
B.innerHTML=(S.c.length>0?'🛒':'💬')+' '+(S.c.length>0?'Finalizar compra':'Clic para chatear');
}
}else{
if(B.classList.contains('e')){
B.classList.remove('e');
B.innerHTML=S.c.length>0?'🛒':'💬';
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
const hi=S.c.length>0;
if(B.classList.contains('e')){
B.innerHTML=(hi?'🛒':'💬')+' '+(hi?'Finalizar compra':'Clic para chatear');
}else{
B.innerHTML=hi?'🛒':'💬';
}
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
h+=`<div class="ci"><div class="ct">${i.b}</div><div class="cr"><span>👛 ${i.p}Gs</span><span>💰 ${tp}Gs</span></div><div class="cr"><span>🛒</span><div class="cc"><button data-t="${i.t}" data-n="${i.n}" data-i="${i.i}" data-a="-">−</button><span>${i.d}</span><button data-t="${i.t}" data-n="${i.n}" data-i="${i.i}" data-a="+">+</button></div></div></div>`;
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
if(x){const d=btn.dataset.a==='+'?x.d+1:x.d-1;C(t,n,i,d,x.p,x.b,'set');V()}
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
