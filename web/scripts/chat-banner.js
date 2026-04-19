!function(){
const WA_BASE="https://wa.me/595972184435?text=";
const IMG_BASE="web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/";
const OFICIALPROVIDER=["595972184435"];
const night=(h=>h>=19||h<5)(new Date().getHours());
const grSrc=IMG_BASE+(night?"first_quarter_moon_face_animated.avif":"sun_with_face_animated.avif");

const css=document.createElement("style");
css.textContent=`
.cb-gr-tip{position:fixed;bottom:88px;right:20px;background:#ffffffee;color:#333;padding:7px 13px;border-radius:18px 18px 4px 18px;font-size:.85rem;font-weight:500;box-shadow:0 4px 16px #0002;white-space:nowrap;z-index:9999;pointer-events:none;opacity:0;transform:translateY(6px);transition:opacity .5s,transform .5s}
.cb-gr-tip.on{opacity:1;transform:translateY(0)}
@media(prefers-color-scheme:dark){.cb-gr-tip{background:#1e1e1eee;color:#eee}}
.cb-btn{position:fixed;bottom:20px;right:20px;width:60px;height:60px;border-radius:50%;background:rgba(255,255,255,0.18);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:9999;font-size:30px;color:#fff;transition:transform 0.3s ease,box-shadow 0.3s ease;box-shadow:0 8px 32px rgba(0,0,0,0.3);backface-visibility:hidden}
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
.cb-pk{position:absolute;top:-120px;left:50%;transform:translateX(-50%);font-size:45px;opacity:0;pointer-events:none;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.4));will-change:transform,opacity,top}
.cb-pk.cb-dr{animation:cb-pk 1.2s cubic-bezier(0.34,1.45,0.64,1);animation-fill-mode:both}
@keyframes cb-pk{0%{opacity:0;top:-120px;transform:translateX(-50%) rotate(-15deg) scale(0.3)}15%{opacity:1;top:-100px;transform:translateX(-50%) rotate(-8deg) scale(0.6)}30%{top:-60px;transform:translateX(-50%) rotate(5deg) scale(0.85)}50%{top:-20px;transform:translateX(-50%) rotate(-3deg) scale(1.05)}70%{top:-5px;transform:translateX(-50%) rotate(2deg) scale(1.1)}85%{top:5px;transform:translateX(-50%) rotate(-1deg) scale(0.95)}100%{opacity:0;top:15px;transform:translateX(-50%) rotate(0deg) scale(0.7)}}
.cb-fz{display:inline-block;animation:cb-fzo 1.6s ease-out}
@keyframes cb-fzo{0%{transform:scale(0.5);opacity:0}50%{transform:scale(1.3)}100%{transform:scale(1);opacity:1}}
@keyframes cb-fb{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(12px)}}
.cb-modal{position:fixed;inset:0;background:rgba(0,0,0,0.7);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;z-index:99999}
.cb-modal.cb-v{display:flex}
.cb-mc{background:rgba(255,255,255,0.15);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.25);border-radius:20px;width:90%;max-width:600px;max-height:80vh;overflow:hidden;display:flex;flex-direction:column}
@media(min-width:769px){.cb-mc{width:600px}}
.cb-mh{padding:20px;font-size:24px;font-weight:bold;border-bottom:1px solid rgba(255,255,255,0.2);color:#fff;display:flex;align-items:center;justify-content:space-between;position:relative}
.cb-mhl{display:flex;align-items:baseline;gap:10px;min-width:0;flex:1}
.cb-mhT{font-size:.68em;font-weight:normal;opacity:.85;white-space:nowrap}
.cb-mx{font-size:28px;cursor:pointer;width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:50%;flex-shrink:0}
.cb-mx:hover{background:rgba(255,255,255,0.2)}
.cb-mb{padding:20px;overflow-y:auto;flex:1;color:#fff}
.cb-cp{margin-bottom:30px}
.cb-cn{font-size:14px;font-weight:normal;margin-bottom:15px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.15);opacity:.7;letter-spacing:.04em}
.cb-ci{background:rgba(255,255,255,0.1);border-radius:12px;padding:10px 15px;margin-bottom:8px;transition:opacity 0.4s ease,transform 0.4s ease;display:flex;align-items:center;gap:10px}
.cb-ci.cb-rm{opacity:0;transform:translateY(-20px)}
.cb-ct{font-size:15px;font-weight:bold;flex:1;min-width:0}
.cb-cr{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;font-size:14px}
.cb-cc{display:flex;align-items:center;gap:10px}
.cb-cc button{width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.3);color:#fff;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center}
.cb-cc button:hover{background:rgba(255,255,255,0.3)}
.cb-cc span{min-width:30px;text-align:center;font-weight:bold}
.cb-ca{display:flex;gap:10px;margin-top:20px;justify-content:center;flex-wrap:wrap}
.cb-bt{padding:12px 24px;border-radius:20px;border:1px solid rgba(255,255,255,0.4);background:rgba(255,255,255,0.2);color:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;gap:8px}
.cb-bt:hover{background:rgba(255,255,255,0.3)}
.cb-bt.cb-wa{background:rgba(34,197,94,0.3);border-color:rgba(34,197,94,0.6)}
.cb-bt.cb-tg{background:rgba(59,130,246,0.3);border-color:rgba(59,130,246,0.6)}
.cb-cs{white-space:nowrap;font-size:13px;opacity:.85}
.cb-ch{text-align:center;margin:.6rem 0 .3rem;font-size:14px;opacity:.7;font-weight:normal}
.cb-em{text-align:center;padding:40px 20px;font-size:18px;opacity:0.7}
#cs{background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.3);border-radius:15px;padding:20px;margin:20px auto;max-width:340px;color:#fff;text-align:center;overflow:hidden}
#cs.cb-404{padding:0}
#cs.cb-404 img{width:100%;height:100%;object-fit:cover;display:block;border-radius:14px}
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
#cs .cb-er{font-size:22px;font-weight:bold;color:#fbbf24}`;
document.head.appendChild(css);

const IMG404='<img src="web/otros/Archivos/Imagenes/Permanente/404.avif">';
function set404(el){el.className='cb-404';el.innerHTML=IMG404}

let st={c:[],r:!1},ab={b:!1},exp={s:null,a:!1};

const btn=document.createElement("div");
btn.className="cb-btn";
btn.style.boxShadow="0 8px 32px rgba(34,197,94,0.3)";

const fng=document.createElement("div");fng.className="cb-fng";fng.innerHTML="👇";
const bdg=document.createElement("div");bdg.className="cb-bdg";
const pk=document.createElement("div");pk.className="cb-pk";pk.innerHTML="📦";
const btnLbl=document.createElement("span");

btn.appendChild(btnLbl);btn.appendChild(fng);btn.appendChild(bdg);btn.appendChild(pk);
document.body.appendChild(btn);

const tip=document.createElement("div");tip.className="cb-gr-tip";
tip.textContent=night?"Buenas noches":"Buenos dias";
document.body.appendChild(tip);
setTimeout(()=>{
  tip.classList.add("on");
  setTimeout(()=>tip.textContent="Preguntame lo que quieras",2200);
  setTimeout(()=>{tip.classList.remove("on");setTimeout(()=>tip.remove(),600)},5000);
},300);

const modal=document.createElement("div");

function fmt(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}

function syncBtn(){
  if(st.c.length>0){
    btn.classList.contains("cb-exp")
      ?(btnLbl.innerHTML="🛒 Finalizar compra",btn.classList.add("cb-c"))
      :(btnLbl.innerHTML="🛒",btn.classList.remove("cb-c"));
  } else {
    btn.classList.contains("cb-exp")
      ?(btnLbl.innerHTML="📩 Clic Aqui para Preguntar 🤗",btn.classList.add("cb-c"))
      :(btnLbl.innerHTML=`<img src="${grSrc}" style="width:40px;height:40px;display:block;margin:auto">`,btn.classList.remove("cb-c"));
  }
  const tot=st.c.reduce((a,b)=>a+b.d,0);
  tot>=1?(bdg.textContent=tot,bdg.classList.add("cb-v")):bdg.classList.remove("cb-v");
}
syncBtn();

function clrFng(){fng.classList.remove("cb-v");syncBtn()}

function bounce(){
  if(ab.b)return;ab.b=!0;
  btn.style.willChange="transform";
  btn.classList.add("cb-ab");
  pk.classList.remove("cb-dr");pk.offsetWidth;pk.classList.add("cb-dr");
  setTimeout(()=>pk.classList.remove("cb-dr"),1200);
  if(!btn.classList.contains("cb-exp")){btn.classList.add("cb-exp");syncBtn();exp.a=!0;clearTimeout(exp.s)}
  setTimeout(()=>{btn.classList.remove("cb-ab");btn.style.willChange="";ab.b=!1},800);
}

let _sRaf=null;
function onScroll(){
  if(!st.r)return;
  const dc=document.getElementById("disqus-container");
  if(!dc)return;
  const dcTop=dc.offsetTop,scrollBot=window.pageYOffset+window.innerHeight;
  if(scrollBot>=dcTop){
    if(!btn.classList.contains("cb-exp")&&!exp.a){btn.classList.add("cb-exp");syncBtn()}
  } else {
    if(btn.classList.contains("cb-exp")&&!exp.a){btn.classList.remove("cb-exp");btn.style.position="fixed";btn.style.bottom="20px";btn.style.top="";clrFng()}
  }
  if(btn.classList.contains("cb-exp")){
    const dcBot=dcTop+dc.offsetHeight;
    if(scrollBot>=dcBot-20){
      if("absolute"!==btn.style.position){
        btn.style.position="absolute";btn.style.bottom="";btn.style.top=dcBot-80+"px";
        if(st.c.length>0){
          fng.classList.remove("cb-v");
          btnLbl.innerHTML='<span class="cb-fz">🫵</span>';
          setTimeout(()=>{syncBtn();setTimeout(()=>fng.classList.add("cb-v"),100)},1200);
        }
      }
    } else if("absolute"===btn.style.position){
      btn.style.position="fixed";btn.style.top="";btn.style.bottom="20px";clrFng();
    }
  }
  if(exp.a){
    clearTimeout(exp.s);
    exp.s=setTimeout(()=>{
      if(btn.classList.contains("cb-exp")&&!modal.classList.contains("cb-v")){
        const dc2=document.getElementById("disqus-container");
        if(!dc2||window.pageYOffset+window.innerHeight<dc2.offsetTop){
          btn.classList.remove("cb-exp");btn.style.position="fixed";btn.style.bottom="20px";btn.style.top="";clrFng();exp.a=!1;
        }
      }
    },1500);
  }
}
function _onScrollThrottled(){if(!_sRaf)_sRaf=requestAnimationFrame(()=>{_sRaf=null;onScroll()})}

function addItem(tp,num,id,q,pc,nb,mode="add"){
  const idx=st.c.findIndex(x=>x.i===id&&x.t===tp&&x.n===num);
  if("set"===mode){
    if(idx>-1){st.c[idx].d=q;if(st.c[idx].d<=0)st.c.splice(idx,1)}
  } else {
    if(idx>-1){st.c[idx].d+=q;if(st.c[idx].d<=0)st.c.splice(idx,1)}
    else if(q>0)st.c.push({t:tp,n:num,i:id,d:q,p:pc,b:nb});
  }
  syncBtn();
  if("add"===mode&&q>0)bounce();
}

function updMHT(){
  const el=modal.querySelector(".cb-mhT");
  if(!el)return;
  el.textContent=st.c.length?"💸 "+fmt(st.c.reduce((a,b)=>a+b.p*b.d,0))+"Gs":"";
}

function renderCart(){
  if(!st.c.length)return void(modal.querySelector(".cb-mb").innerHTML='<div class="cb-em">🛒 Carrito vacio</div>');
  const groups={};
  st.c.forEach(x=>{const k=x.t+"-"+x.n;groups[k]||(groups[k]={t:x.t,n:x.n,items:[]});groups[k].items.push(x)});
  const gks=Object.keys(groups),multi=gks.length>1;
  let html=multi?'<div style="text-align:center;margin-bottom:8px"><a href="web/otros/Archivos/MarkDowns/SerParte.md" style="color:#facc15;font-weight:600;font-size:.85rem">⚠️ Varios Proveedores ❔</a></div>':"";
  gks.forEach(k=>{
    const g=groups[k];
    html+=`<div class="cb-cp" data-gk="${k}">${multi?`<p class="cb-cn">📦 ${g.n}</p>`:""}`;
    g.items.forEach(x=>{
      const sub=x.p*x.d;
      html+=`<div class="cb-ci" data-key="${x.t}-${x.n}-${x.i}"><span class="cb-ct">${x.b}</span><span class="cb-cs">💰 ${fmt(sub)}Gs</span><div class="cb-cc"><button data-t="${x.t}" data-n="${x.n}" data-i="${x.i}" data-a="-">−</button><span>${x.d}</span><button data-t="${x.t}" data-n="${x.n}" data-i="${x.i}" data-a="+">+</button></div></div>`;
    });
    const msg="Hola quiero%0A"+g.items.map(x=>`[${x.d}] de ${encodeURIComponent(x.b)} [ID=${x.i}]`).join("%0A");
    const svgWA=`<img src="web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/WhatsAppLogo.svg" style="width:20px;height:20px;vertical-align:middle;margin-right:6px">`;
    const svgTG=`<img src="web/otros/Archivos/Imagenes/Permanente/SVG/ChatBanner/TelegramLogo.svg" style="width:20px;height:20px;vertical-align:middle;margin-right:6px">`;
    let btns="";
    if("wt"===g.t)btns=`<button class="cb-bt cb-wa" data-l="https://wa.me/${g.n}?text=${msg}" data-gk="${k}" data-lbl="WhatsApp">${svgWA}WhatsApp</button><button class="cb-bt cb-tg" data-l="https://t.me/+${g.n}?text=${msg}" data-gk="${k}" data-lbl="Telegram">${svgTG}Telegram</button>`;
    else if("w"===g.t)btns=`<button class="cb-bt cb-wa" data-l="https://wa.me/${g.n}?text=${msg}" data-gk="${k}" data-lbl="WhatsApp">${svgWA}WhatsApp</button>`;
    else if("t"===g.t)btns=`<button class="cb-bt cb-tg" data-l="https://t.me/+${g.n}?text=${msg}" data-gk="${k}" data-lbl="Telegram">${svgTG}Telegram</button>`;
    html+=`<h5 class="cb-ch">Termina la Compra en</h5><div class="cb-ca">${btns}</div></div>`;
  });
  modal.querySelector(".cb-mb").innerHTML=html;
  updMHT();
}

function toggleModal(){modal.classList.toggle("cb-v");if(modal.classList.contains("cb-v")){renderCart()}}

function initProduct(){
  const hash=location.hash;if(!hash)return;
  let dec;try{dec=decodeURIComponent(hash)}catch(e){dec=hash}
  const mID=dec.match(/ID=([^-\s]+)/),mPC=dec.match(/PC=([^-\s]+)/),mNB=dec.match(/NB=([^.]+)/),mNM=dec.match(/NM=([^-\s]+)/),mCD=dec.match(/CD=([^-\s]+)/),mTM=dec.match(/TM=(\d{2}\.\d{2}\.\d{4}\.\d{2}\.\d{2})/);
  if(!(mID&&mPC&&mNB&&mNM))return;
  let cs=document.getElementById("cs");
  if(!cs){
    const gal=document.querySelector(".galeriaMD");
    if(!gal)return;
    cs=document.createElement("div");
    cs.id="cs";
    gal.insertAdjacentElement("afterend",cs);
  }
  const id=mID[1],pc=parseInt(mPC[1]),nb=mNB[1],nm=mNM[1],avail=mCD?parseInt(mCD[1]):null;
  if(mTM){const[d,mo,y,h,mi]=mTM[1].split('.').map(Number);const e=new Date(y,mo-1,d,h,mi);if(e<=new Date())return void set404(cs);}
  let tp,num;
  if(nm.startsWith("WATG")){tp="wt";num=nm.substring(4)}
  else if(nm.startsWith("WA")){tp="w";num=nm.substring(2)}
  else if(nm.startsWith("TG")){tp="t";num=nm.substring(2)}
  else return;
  const isOff=OFICIALPROVIDER.includes(num);
  const minQ=parseInt(cs.getAttribute("min"))||1,maxQ=null!==avail?avail:999;
  if(avail===0)return void set404(cs);
  let qty=minQ,locked=!1,tmExp=null,tmInt=null;
  if(mTM){const[d,mo,y,h,mi]=mTM[1].split('.').map(Number);tmExp=new Date(y,mo-1,d,h,mi);}
  function fmtTM(){if(!tmExp)return'';const diff=tmExp-new Date();if(diff<=0)return null;const td=Math.floor(diff/864e5),th=Math.floor((diff%864e5)/36e5),tm=Math.floor((diff%36e5)/6e4);return td>0?`${td} dia${td>1?'s':''} y ${th} hora${th!==1?'s':''}`:`${th} hora${th!==1?'s':''} ${tm} min`;}
  function render(){
    const tmStr=tmExp?fmtTM():null;
    if(tmExp&&tmStr===null)return void set404(cs);
    cs.className='';
    cs.innerHTML=
      (!isOff?`<div class="cb-dsp"><a href="web/otros/Archivos/MarkDowns/SerParte.md" style="color:#fbbf24;font-weight:600;font-size:13px;text-decoration:none">Proveedor Externo ↗️</a></div>`:"")+
      (tmStr?`<div class="cb-dsp cb-dsp-tm">⏳ Se Acaba En: ${tmStr}</div>`:"")+
      (null!==avail?`<div class="cb-dsp">Disponible: ${avail} unidades</div>`:"")+
      `<div class="cb-p">Precio: <span class="cb-t" id="cpt">${fmt(pc*qty)}</span>Gs</div>`+
      `<div class="cb-o"><span>Cantidad:</span><button class="cb-k" id="cbm">−</button><input type="number" class="cb-qv" id="cqv" value="${qty}" min="${minQ}" max="${maxQ}"><button class="cb-k" id="cbp">+</button></div><button class="cb-a" id="cba">🛍️ Añadir al Carrito</button>`;
    const inp=document.getElementById("cqv"),priceEl=document.getElementById("cpt"),btnM=document.getElementById("cbm"),btnP=document.getElementById("cbp"),btnA=document.getElementById("cba");
    function clamp(){let v=parseInt(inp.value);isNaN(v)||(v>maxQ&&(v=maxQ),v<minQ&&(v=minQ),qty=v,priceEl.textContent=fmt(pc*qty),btnM.disabled=qty<=minQ,btnP.disabled=qty>=maxQ)}
    clamp();
    inp.addEventListener("input",clamp);
    btnM.onclick=()=>{if(qty>minQ){qty--;inp.value=qty;priceEl.textContent=fmt(pc*qty);clamp()}};
    btnP.onclick=()=>{if(qty<maxQ){qty++;inp.value=qty;priceEl.textContent=fmt(pc*qty);clamp()}};
    btnA.onclick=()=>{
      if(locked)return;
      const v=parseInt(inp.value);
      if(isNaN(v)||v<minQ)return void(cs.innerHTML=`<div class="cb-er">⚠️ El Minimo es ${minQ}</div>`,setTimeout(render,3e3));
      if(v>maxQ)return void(cs.innerHTML=`<div class="cb-er">⚠️ Maximo Disponible: ${maxQ}</div>`,setTimeout(render,3e3));
      qty=v;addItem(tp,num,id,qty,pc,nb);locked=!0;
      cs.innerHTML='<div class="cb-s">✅ Añadido a la Lista</div><div class="cb-s2">Continua la Compra en el Carrito 👇</div>';
    };
    if(tmExp&&!tmInt){tmInt=setInterval(()=>{const s=fmtTM();if(s===null){clearInterval(tmInt);set404(cs);return;}const el=cs.querySelector('.cb-dsp-tm');if(el)el.textContent='⏳ Se Acaba En: '+s;},6e4);}
  }
  render();
}

modal.className="cb-modal";
modal.innerHTML='<div class="cb-mc"><div class="cb-mh"><div class="cb-mhl"><span>🛒 Carrito</span><span class="cb-mhT"></span></div><span class="cb-mx">✕</span></div><div class="cb-mb"></div></div>';
document.body.appendChild(modal);

btn.addEventListener("click",()=>{
  if(st.c.length>0)return toggleModal();
  const txt=encodeURIComponent("Hola, Quisiera saber mas sobre esto "+window.location.href);
  window.open(WA_BASE+txt,"_blank");
});

modal.addEventListener("click",ev=>{
  if(ev.target===modal||ev.target.classList.contains("cb-mx")||ev.target.closest("a[href]"))toggleModal();
  const b=ev.target.closest("button");
  if(!b)return;
  if(b.dataset.l){
    window.open(b.dataset.l,"_blank");
    const gk=b.dataset.gk,lbl=b.dataset.lbl;
    if(gk){
      st.c=st.c.filter(x=>x.t+"-"+x.n!==gk);
      syncBtn();
      const grpEl=modal.querySelector(`.cb-cp[data-gk="${gk}"]`);
      if(grpEl)grpEl.outerHTML=`<div class="cb-s">✅ Completa la Compra Anterior en ${lbl}</div>`;
      if(!st.c.length)setTimeout(toggleModal,2e3);
    }
    return;
  }
  if(b.dataset.a){
    const tp=b.dataset.t,nm=b.dataset.n,id=b.dataset.i;
    const item=st.c.find(x=>x.i===id&&x.t===tp&&x.n===nm);if(!item)return;
    const nq="+"===b.dataset.a?item.d+1:item.d-1;
    if(nq<=0){
      const el=modal.querySelector(`.cb-ci[data-key="${tp}-${nm}-${id}"]`);
      if(el){el.classList.add("cb-rm");setTimeout(()=>el.remove(),400)}
      setTimeout(()=>{addItem(tp,nm,id,nq,item.p,item.b,"set");renderCart();},400);
    } else {
      addItem(tp,nm,id,nq,item.p,item.b,"set");
      const ciEl=modal.querySelector(`.cb-ci[data-key="${tp}-${nm}-${id}"]`);
      if(ciEl){
        ciEl.querySelector(".cb-cc span").textContent=nq;
        ciEl.querySelector(".cb-cs").textContent="💰 "+fmt(item.p*nq)+"Gs";
      }
      const gk=tp+"-"+nm;
      const grp=st.c.filter(x=>x.t+"-"+x.n===gk);
      const newMsg="Hola quiero%0A"+grp.map(x=>`[${x.d}] de ${encodeURIComponent(x.b)} [ID=${x.i}]`).join("%0A");
      modal.querySelectorAll(`.cb-cp[data-gk="${gk}"] button[data-gk]`).forEach(btn=>{
        const base=btn.dataset.l.split("?text=")[0];
        btn.dataset.l=base+"?text="+newMsg;
      });
      updMHT();
    }
  }
});

window.addEventListener("cartAdd",ev=>{const{type:tp,num,id,q,pc,nb}=ev.detail;addItem(tp,num,id,q,pc,nb)});
window.addEventListener("scroll",_onScrollThrottled);
window.addEventListener("resize",_onScrollThrottled);

const content=document.getElementById("content");
requestAnimationFrame(initProduct);
setTimeout(()=>{st.r=!0;onScroll()},1000);
if(content)content.addEventListener("contentLoaded",()=>{st.r=!1;requestAnimationFrame(initProduct);setTimeout(()=>{st.r=!0;onScroll()},1000)});
}();
