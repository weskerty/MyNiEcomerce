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

const st=document.createElement('style');
st.textContent=`
.cb-btn{position:fixed;bottom:20px;right:20px;width:60px;height:60px;border-radius:50%;background:rgba(255,255,255,0.18);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:9999;font-size:30px;color:#fff;transition:all 0.3s ease}
.cb-btn.cb-exp{left:50%;right:auto;transform:translateX(-50%);width:300px;height:60px;border-radius:30px;font-size:18px}
.cb-btn.cb-ab{animation:cb-ab 0.8s cubic-bezier(0.68,-0.55,0.265,1.55)}
@keyframes cb-ab{0%{transform:rotate(0deg) translateY(0)}15%{transform:rotate(-8deg) translateY(0)}30%{transform:rotate(-15deg) translateY(12px)}50%{transform:rotate(-12deg) translateY(18px)}70%{transform:rotate(-6deg) translateY(10px)}85%{transform:rotate(-2deg) translateY(4px)}100%{transform:rotate(0deg) translateY(0)}}
.cb-btn.cb-exp.cb-ab{animation:cb-abe 0.8s cubic-bezier(0.68,-0.55,0.265,1.55)}
@keyframes cb-abe{0%{transform:translateX(-50%) rotate(0deg) translateY(0)}15%{transform:translateX(-50%) rotate(-8deg) translateY(0)}30%{transform:translateX(-50%) rotate(-15deg) translateY(12px)}50%{transform:translateX(-50%) rotate(-12deg) translateY(18px)}70%{transform:translateX(-50%) rotate(-6deg) translateY(10px)}85%{transform:translateX(-50%) rotate(-2deg) translateY(4px)}100%{transform:translateX(-50%) rotate(0deg) translateY(0)}}
.cb-fng{position:absolute;top:-55px;left:50%;transform:translateX(-50%);font-size:40px;opacity:0;pointer-events:none;transition:opacity 0.3s}
.cb-fng.cb-v{opacity:1;animation:cb-fb 0.8s ease-in-out infinite}
.cb-bdg{position:absolute;top:-8px;right:-8px;background:rgba(239,68,68,0.95);color:#fff;font-size:12px;font-weight:bold;min-width:20px;height:20px;border-radius:10px;display:none;align-items:center;justify-content:center;padding:0 5px;border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3)}
.cb-bdg.cb-v{display:flex}
.cb-btn.cb-c .cb-bdg{display:none}
.cb-pk{position:absolute;top:-120px;left:50%;transform:translateX(-50%);font-size:45px;opacity:0;pointer-events:none;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.4))}
.cb-pk.cb-dr{animation:cb-pk 1.2s cubic-bezier(0.34,1.45,0.64,1)}
@keyframes cb-pk{0%{opacity:0;top:-120px;transform:translateX(-50%) rotate(-15deg) scale(0.3)}15%{opacity:1;top:-100px;transform:translateX(-50%) rotate(-8deg) scale(0.6)}30%{top:-60px;transform:translateX(-50%) rotate(5deg) scale(0.85)}50%{top:-20px;transform:translateX(-50%) rotate(-3deg) scale(1.05)}70%{top:-5px;transform:translateX(-50%) rotate(2deg) scale(1.1)}85%{top:5px;transform:translateX(-50%) rotate(-1deg) scale(0.95)}100%{opacity:0;top:15px;transform:translateX(-50%) rotate(0deg) scale(0.7)}}
.cb-fz{display:inline-block;animation:cb-fzo 1.6s ease-out}
@keyframes cb-fzo{0%{transform:scale(0.5);opacity:0}50%{transform:scale(1.3)}100%{transform:scale(1);opacity:1}}
@keyframes cb-fb{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(12px)}}
.cb-modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;z-index:99999}
.cb-modal.cb-v{display:flex}
.cb-mc{background:rgba(255,255,255,0.15);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.25);border-radius:20px;width:90%;max-width:600px;max-height:80vh;overflow:hidden;display:flex;flex-direction:column}
@media(min-width:769px){.cb-mc{width:600px}}
.cb-mh{padding:20px;font-size:24px;font-weight:bold;border-bottom:1px solid rgba(255,255,255,0.2);color:#fff;text-align:center;position:relative}
.cb-mx{position:absolute;right:20px;top:50%;transform:translateY(-50%);font-size:28px;cursor:pointer;width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:50%}
.cb-mx:hover{background:rgba(255,255,255,0.2)}
.cb-mb{padding:20px;overflow-y:auto;flex:1;color:#fff}
.cb-cp{margin-bottom:30px}
.cb-cn{font-size:18px;font-weight:bold;margin-bottom:15px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.15)}
.cb-ci{background:rgba(255,255,255,0.1);border-radius:12px;padding:15px;margin-bottom:12px;transition:opacity 0.4s ease,transform 0.4s ease}
.cb-ci.cb-rm{opacity:0;transform:translateY(-20px)}
.cb-ct{font-size:16px;font-weight:bold;margin-bottom:8px}
.cb-cr{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;font-size:14px}
.cb-cc{display:flex;align-items:center;gap:10px}
.cb-cc button{width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.3);color:#fff;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center}
.cb-cc button:hover{background:rgba(255,255,255,0.3)}
.cb-cc span{min-width:30px;text-align:center;font-weight:bold}
.cb-to{margin-top:20px;padding-top:20px;border-top:2px solid rgba(255,255,255,0.3);font-size:20px;font-weight:bold;text-align:center}
.cb-ca{display:flex;gap:10px;margin-top:20px;justify-content:center;flex-wrap:wrap}
.cb-bt{padding:12px 24px;border-radius:20px;border:1px solid rgba(255,255,255,0.4);background:rgba(255,255,255,0.2);color:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;gap:8px}
.cb-bt:hover{background:rgba(255,255,255,0.3)}
.cb-bt.cb-wa{background:rgba(34,197,94,0.3);border-color:rgba(34,197,94,0.6)}
.cb-bt.cb-tg{background:rgba(59,130,246,0.3);border-color:rgba(59,130,246,0.6)}
.cb-em{text-align:center;padding:40px 20px;font-size:18px;opacity:0.7}
#cs{background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.3);border-radius:15px;padding:20px;margin:20px auto;max-width:340px;color:#fff;text-align:center}
#cs .cb-p{font-size:20px;font-weight:bold;margin-bottom:15px}
#cs .cb-t{color:#22c55e}
#cs .cb-dsp{font-size:14px;color:#fbbf24;margin-bottom:15px}
#cs .cb-o{display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:15px}
#cs .cb-o span{font-size:16px}
#cs .cb-k{width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.25);color:#fff;cursor:pointer;font-size:20px;display:flex;align-items:center;justify-content:center;border:none}
#cs .cb-k:hover{background:rgba(255,255,255,0.35);transform:scale(1.1)}
#cs .cb-k:disabled{opacity:0.3;cursor:not-allowed}
#cs .cb-k:disabled:hover{background:rgba(255,255,255,0.25);transform:scale(1)}
#cs .cb-qv{min-width:50px;font-size:20px;font-weight:bold;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);border-radius:8px;color:#fff;text-align:center;width:70px;padding:5px}
#cs .cb-qv::-webkit-inner-spin-button,#cs .cb-qv::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
#cs .cb-qv:focus{outline:2px solid rgba(34,197,94,0.5)}
#cs .cb-a{background:rgba(34,197,94,0.35);padding:12px 24px;border-radius:12px;color:#fff;cursor:pointer;font-weight:bold;width:100%;font-size:16px;border:none}
#cs .cb-a:hover{background:rgba(34,197,94,0.5)}
#cs .cb-s{font-size:24px;font-weight:bold;color:#22c55e;margin-bottom:10px}
#cs .cb-s2{font-size:16px;color:#fff}
#cs .cb-er{font-size:22px;font-weight:bold;color:#fbbf24}
`;
document.head.appendChild(st);

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
ct.addEventListener('contentLoaded',()=>{S.r=true;R();requestAnimationFrame(iCS);});
}else{
S.r=true;R();
}
S.r=true;R();requestAnimationFrame(iCS);
})();
