(function(){
const W={p:'Vengo%20de%20YoGano%20y%20quiero%20Comprar%20estos%20Productos%20LISTA%3D',d:'https://wa.me/595972184435?text=Hola%2C%20Quiero%20saber%20mas%20de%20la%20Tienda%20YoGano%0A%0A'};
let S={c:[],r:false},A={b:false},L={s:null,a:false};

const B=document.createElement('div');B.className='cb-btn';B.innerHTML='💬';B.style.boxShadow='0 8px 32px rgba(34,197,94,0.3)';
const F=document.createElement('div');F.className='cb-fng';F.innerHTML='👇';
const Q=document.createElement('div');Q.className='cb-bdg';
const P=document.createElement('div');P.className='cb-pk';P.innerHTML='📦';
B.appendChild(F);B.appendChild(Q);B.appendChild(P);
document.body.appendChild(B);
const M=document.createElement('div');
M.className='cb-modal';
M.innerHTML='<div class="cb-mc"><div class="cb-mh">🛒 Carrito<span class="cb-mx">✕</span></div><div class="cb-mb"></div></div>';
document.body.appendChild(M);



function N(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,'.');}

function UQ(){
const tc=S.c.reduce((a,i)=>a+i.d,0);
if(tc>0){Q.textContent=tc;Q.classList.add('cb-v');}
else Q.classList.remove('cb-v');
}

function UB(){
if(S.c.length>0){
if(B.classList.contains('cb-exp')){B.innerHTML='🛒 Finalizar compra';B.classList.add('cb-c');}
else{B.innerHTML='🛒';B.classList.remove('cb-c');}
}else{
if(B.classList.contains('cb-exp')){B.innerHTML='💬 Clic para chatear';B.classList.add('cb-c');}
else{B.innerHTML='💬';B.classList.remove('cb-c');}
}
B.appendChild(F);B.appendChild(Q);B.appendChild(P);UQ();
}

function UF(){
if(S.c.length===0){F.classList.remove('cb-v');return;}
F.classList.remove('cb-v');
const z=document.createElement('span');z.className='cb-fz';z.innerHTML='🫵';
B.innerHTML='';B.appendChild(z);B.appendChild(F);B.appendChild(Q);B.appendChild(P);
setTimeout(()=>{UB();setTimeout(()=>{F.classList.add('cb-v');},100);},1200);
}

function HF(){F.classList.remove('cb-v');UB();}

function PK(){
P.classList.remove('cb-dr');void P.offsetWidth;P.classList.add('cb-dr');
setTimeout(()=>{P.classList.remove('cb-dr');},1200);
}

function AB(){
if(A.b)return;A.b=true;
B.classList.add('cb-ab');PK();
if(!B.classList.contains('cb-exp')){B.classList.add('cb-exp');UB();L.a=true;clearTimeout(L.s);}
setTimeout(()=>{B.classList.remove('cb-ab');A.b=false;},800);
}

function RI(el){el.classList.add('cb-rm');setTimeout(()=>el.remove(),400);}

function RS(){
if(!L.a)return;
clearTimeout(L.s);
L.s=setTimeout(()=>{
if(B.classList.contains('cb-exp')&&!M.classList.contains('cb-v')){
const d=document.getElementById('disqus-container');
if(!d||(window.pageYOffset+window.innerHeight<d.offsetTop)){
B.classList.remove('cb-exp');B.style.position='fixed';B.style.bottom='20px';B.style.top='';
HF();L.a=false;
}
}
},1500);
}

function R(){
if(!S.r)return;
const d=document.getElementById('disqus-container');
if(!d)return;
const t=d.offsetTop,b=window.pageYOffset+window.innerHeight;
if(b>=t){
if(!B.classList.contains('cb-exp')&&!L.a){B.classList.add('cb-exp');UB();}
}else{
if(B.classList.contains('cb-exp')&&!L.a){B.classList.remove('cb-exp');B.style.position='fixed';B.style.bottom='20px';B.style.top='';HF();}
}
if(B.classList.contains('cb-exp')){
const db=t+d.offsetHeight;
if(b>=db-20){
if(B.style.position!=='absolute'){B.style.position='absolute';B.style.bottom='';B.style.top=(db-80)+'px';UF();}
}else{
if(B.style.position==='absolute'){B.style.position='fixed';B.style.top='';B.style.bottom='20px';HF();}
}
}
RS();
}

function C(t,n,i,d,p,b,m='add'){
const x=S.c.findIndex(z=>z.i===i&&z.t===t&&z.n===n);
if(m==='set'){
if(x>-1){S.c[x].d=d;if(S.c[x].d<=0)S.c.splice(x,1);}
}else{
if(x>-1){S.c[x].d+=d;if(S.c[x].d<=0)S.c.splice(x,1);}
else if(d>0)S.c.push({t,n,i,d,p,b});
}
UB();if(m==='add'&&d>0)AB();
}

function V(){
if(!S.c.length){M.querySelector('.cb-mb').innerHTML='<div class="cb-em">🛒 Carrito vacío</div>';return;}
const g={};
S.c.forEach(x=>{const k=x.t+'-'+x.n;if(!g[k])g[k]={t:x.t,n:x.n,items:[]};g[k].items.push(x);});
let h='',total=0;
Object.keys(g).forEach(k=>{
const grp=g[k];
h+=`<div class="cb-cp"><div class="cb-cn">📦 ${grp.n}</div>`;
grp.items.forEach(i=>{
const tp=i.p*i.d;total+=tp;
h+=`<div class="cb-ci" data-key="${i.t}-${i.n}-${i.i}"><div class="cb-ct">${i.b}</div><div class="cb-cr"><span>👛 ${N(i.p)}Gs</span><span>💰 ${N(tp)}Gs</span></div><div class="cb-cr"><span>🛒</span><div class="cb-cc"><button data-t="${i.t}" data-n="${i.n}" data-i="${i.i}" data-a="-">−</button><span>${i.d}</span><button data-t="${i.t}" data-n="${i.n}" data-i="${i.i}" data-a="+">+</button></div></div></div>`;
});
let msg='';grp.items.forEach(i=>msg+=`CD=${i.d}-ID=${i.i};`);msg=msg.slice(0,-1);
const me=W.p+encodeURIComponent(msg);
h+=`<div class="cb-ca">`;
if(grp.t==='wt'){h+=`<button class="cb-bt cb-wa" data-l="https://wa.me/${grp.n}?text=${me}">📱 WhatsApp</button><button class="cb-bt cb-tg" data-l="https://t.me/+${grp.n}?text=${me}">✈️ Telegram</button>`;}
else if(grp.t==='w'){h+=`<button class="cb-bt cb-wa" data-l="https://wa.me/${grp.n}?text=${me}">📱 WhatsApp</button>`;}
else if(grp.t==='t'){h+=`<button class="cb-bt cb-tg" data-l="https://t.me/+${grp.n}?text=${me}">✈️ Telegram</button>`;}
h+=`</div></div>`;
});
h+=`<div class="cb-to">💸 Total: ${N(total)}Gs</div>`;
M.querySelector('.cb-mb').innerHTML=h;
}

function T(){M.classList.toggle('cb-v');if(M.classList.contains('cb-v'))V();}

B.addEventListener('click',()=>{S.c.length>0?T():window.open(W.d,'_blank');});

M.addEventListener('click',e=>{
if(e.target===M||e.target.classList.contains('cb-mx'))T();
const btn=e.target.closest('button');
if(!btn)return;
if(btn.dataset.l){window.open(btn.dataset.l,'_blank');T();}
else if(btn.dataset.a){
const t=btn.dataset.t,n=btn.dataset.n,i=btn.dataset.i;
const x=S.c.find(z=>z.i===i&&z.t===t&&z.n===n);
if(!x)return;
const nd=btn.dataset.a==='+'?x.d+1:x.d-1;
if(nd<=0){const el=M.querySelector(`.cb-ci[data-key="${t}-${n}-${i}"]`);if(el)RI(el);setTimeout(()=>{C(t,n,i,nd,x.p,x.b,'set');V();},400);}
else{C(t,n,i,nd,x.p,x.b,'set');V();}
}
});

window.addEventListener('cartAdd',e=>{
const{type,num,id,q,pc,nb}=e.detail;C(type,num,id,q,pc,nb);
});
window.addEventListener('scroll',R);
window.addEventListener('resize',R);

function iCS(){
const e=document.getElementById('cs');
if(!e)return;
const h=location.hash;
if(!h)return;
let u;try{u=decodeURIComponent(h)}catch(_){u=h;}
const ma=u.match(/ID=([^-\s]+)/),mb=u.match(/PC=([^-\s]+)/),mc=u.match(/NB=([^.]+)/),md=u.match(/NM=([^-\s]+)/),mf=u.match(/CD=([^-\s]+)/);
if(!ma||!mb||!mc||!md)return;
const id=ma[1],pc=parseInt(mb[1]),nb=mc[1],nm=md[1],cd=mf?parseInt(mf[1]):null;
let tp,tn;
if(nm.startsWith('WATG')){tp='wt';tn=nm.substring(4);}
else if(nm.startsWith('WA')){tp='w';tn=nm.substring(2);}
else if(nm.startsWith('TG')){tp='t';tn=nm.substring(2);}
else return;
const mn=parseInt(e.getAttribute('min'))||1,mx=cd!==null?cd:999;
let q=mn,lk=false;
function rW(){
e.innerHTML=(cd!==null?`<div class="cb-dsp">Disponible: ${cd} unidades</div>`:'')+
`<div class="cb-p">Precio: <span class="cb-t" id="cpt">${N(pc*q)}</span>Gs</div>`+
`<div class="cb-o"><span>Cantidad:</span><button class="cb-k" id="cbm">−</button><input type="number" class="cb-qv" id="cqv" value="${q}" min="${mn}" max="${mx}"><button class="cb-k" id="cbp">+</button></div>`+
`<button class="cb-a" id="cba">🛍️ Añadir al Carrito</button>`;
const qv=document.getElementById('cqv'),pt=document.getElementById('cpt'),bm=document.getElementById('cbm'),bp=document.getElementById('cbp'),ba=document.getElementById('cba');
function sv(){let x=parseInt(qv.value);if(!isNaN(x)){if(x>mx)x=mx;if(x<mn)x=mn;q=x;pt.textContent=N(pc*q);bm.disabled=q<=mn;bp.disabled=q>=mx;}}
sv();
qv.addEventListener('input',sv);
bm.onclick=()=>{if(q>mn){q--;qv.value=q;pt.textContent=N(pc*q);sv();}};
bp.onclick=()=>{if(q<mx){q++;qv.value=q;pt.textContent=N(pc*q);sv();}};
ba.onclick=()=>{
if(lk)return;
let x=parseInt(qv.value);
if(isNaN(x)||x<mn){e.innerHTML=`<div class="cb-er">⚠️ El Mínimo es ${mn}</div>`;setTimeout(()=>{q=mn;rW();},3000);return;}
if(x>mx){e.innerHTML=`<div class="cb-er">⚠️ Máximo Disponible: ${mx}</div>`;setTimeout(()=>{q=mx;rW();},3000);return;}
q=x;C(tp,tn,id,q,pc,nb);lk=true;
e.innerHTML='<div class="cb-s">✅ Añadido a la Lista</div><div class="cb-s2">Continúa la Compra en el Carrito 👇</div>';
};
}
rW();
}

const ct=document.getElementById('content');
if(ct){
ct.addEventListener('contentLoaded',()=>{S.r=true;setTimeout(()=>{R();requestAnimationFrame(iCS);},1000);});
}else{
S.r=true;R();
}
S.r=true;R();requestAnimationFrame(iCS);
})();
