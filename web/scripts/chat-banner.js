!function(){
const WA_BASE="https://wa.me/595972184435?text=";
const IMG_BASE="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/";
const night=(h=>h>=19||h<5)(new Date().getHours());
const grSrc=IMG_BASE+(night?"Last%20Quarter%20Moon%20Face.png":"Sun%20with%20Face.png");

const css=document.createElement("style");
css.textContent=`.cb-gr-tip{position:fixed;bottom:88px;right:20px;background:#ffffffee;color:#333;padding:7px 13px;border-radius:18px 18px 4px 18px;font-size:.85rem;font-weight:500;box-shadow:0 4px 16px #0002;white-space:nowrap;z-index:9999;pointer-events:none;opacity:0;transform:translateY(6px);transition:opacity .5s,transform .5s}.cb-gr-tip.on{opacity:1;transform:translateY(0)}@media(prefers-color-scheme:dark){.cb-gr-tip{background:#1e1e1eee;color:#eee}}`;
document.head.appendChild(css);

let st={c:[],r:!1},ab={b:!1},exp={s:null,a:!1};

const btn=document.createElement("div");
btn.className="cb-btn";
btn.style.boxShadow="0 8px 32px rgba(34,197,94,0.3)";

const fng=document.createElement("div");fng.className="cb-fng";fng.innerHTML="👇";
const bdg=document.createElement("div");bdg.className="cb-bdg";
const pk=document.createElement("div");pk.className="cb-pk";pk.innerHTML="📦";

btn.appendChild(fng);btn.appendChild(bdg);btn.appendChild(pk);
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
      ?(btn.innerHTML="🛒 Finalizar compra",btn.classList.add("cb-c"))
      :(btn.innerHTML="🛒",btn.classList.remove("cb-c"));
  } else {
    btn.classList.contains("cb-exp")
      ?(btn.innerHTML="📩 Clic para chatear",btn.classList.add("cb-c"))
      :(btn.innerHTML=`<img src="${grSrc}" style="width:40px;height:40px;display:block;margin:auto">`,btn.classList.remove("cb-c"));
  }
  btn.appendChild(fng);btn.appendChild(bdg);btn.appendChild(pk);
  const tot=st.c.reduce((a,b)=>a+b.d,0);
  tot>1?(bdg.textContent=tot,bdg.classList.add("cb-v")):bdg.classList.remove("cb-v");
}
syncBtn();

function clrFng(){fng.classList.remove("cb-v");syncBtn()}

function bounce(){
  if(ab.b)return;ab.b=!0;
  btn.classList.add("cb-ab");
  pk.classList.remove("cb-dr");pk.offsetWidth;pk.classList.add("cb-dr");
  setTimeout(()=>pk.classList.remove("cb-dr"),1200);
  if(!btn.classList.contains("cb-exp")){btn.classList.add("cb-exp");syncBtn();exp.a=!0;clearTimeout(exp.s)}
  setTimeout(()=>{btn.classList.remove("cb-ab");ab.b=!1},800);
}

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
          const fz=document.createElement("span");fz.className="cb-fz";fz.innerHTML="🫵";
          btn.innerHTML="";btn.appendChild(fz);btn.appendChild(fng);btn.appendChild(bdg);btn.appendChild(pk);
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

function renderCart(){
  if(!st.c.length)return void(modal.querySelector(".cb-mb").innerHTML='<div class="cb-em">🛒 Carrito vacio</div>');
  const groups={};
  st.c.forEach(x=>{const k=x.t+"-"+x.n;groups[k]||(groups[k]={t:x.t,n:x.n,items:[]});groups[k].items.push(x)});
  let html="",total=0;
  Object.keys(groups).forEach(k=>{
    const g=groups[k];
    html+=`<div class="cb-cp" data-gk="${k}"><div class="cb-cn">📦 ${g.n}</div>`;
    g.items.forEach(x=>{
      const sub=x.p*x.d;total+=sub;
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
  html+=`<div class="cb-to">💸 Total: ${fmt(total)}Gs</div>`;
  modal.querySelector(".cb-mb").innerHTML=html;
}

function toggleModal(){modal.classList.toggle("cb-v");if(modal.classList.contains("cb-v"))renderCart()}

function initProduct(){
  const cs=document.getElementById("cs");if(!cs)return;
  const hash=location.hash;if(!hash)return;
  let dec;try{dec=decodeURIComponent(hash)}catch(e){dec=hash}
  const mID=dec.match(/ID=([^-\s]+)/),mPC=dec.match(/PC=([^-\s]+)/),mNB=dec.match(/NB=([^.]+)/),mNM=dec.match(/NM=([^-\s]+)/),mCD=dec.match(/CD=([^-\s]+)/),mTM=dec.match(/TM=(\d{2}\.\d{2}\.\d{4}\.\d{2}\.\d{2})/);
  if(!(mID&&mPC&&mNB&&mNM))return;
  const id=mID[1],pc=parseInt(mPC[1]),nb=mNB[1],nm=mNM[1],avail=mCD?parseInt(mCD[1]):null;
  if(mTM){const[d,mo,y,h,mi]=mTM[1].split('.').map(Number);const exp=new Date(y,mo-1,d,h,mi);if(exp<=new Date())return void(cs.innerHTML='<img src="web/otros/Archivos/Imagenes/Permanente/404.avif" style="max-width:100%;max-height:180px;object-fit:contain;display:block;margin:auto">');}
  
  let tp,num;
  if(nm.startsWith("WATG")){tp="wt";num=nm.substring(4)}
  else if(nm.startsWith("WA")){tp="w";num=nm.substring(2)}
  else if(nm.startsWith("TG")){tp="t";num=nm.substring(2)}
  else return;
  const minQ=parseInt(cs.getAttribute("min"))||1,maxQ=null!==avail?avail:999;
  if(avail===0)return void(cs.innerHTML='<img src="web/otros/Archivos/Imagenes/Permanente/404.avif" style="max-width:100%;max-height:180px;object-fit:contain;display:block;margin:auto">');
  let qty=minQ,locked=!1;
  let tmExp=null,tmInt=null;
  if(mTM){const[d,mo,y,h,mi]=mTM[1].split('.').map(Number);tmExp=new Date(y,mo-1,d,h,mi);}
  function fmtTM(){if(!tmExp)return'';const diff=tmExp-new Date();if(diff<=0)return null;const td=Math.floor(diff/864e5),th=Math.floor((diff%864e5)/36e5),tm=Math.floor((diff%36e5)/6e4);return td>0?`${td} dia${td>1?'s':''} y ${th} hora${th!==1?'s':''}`:`${th} hora${th!==1?'s':''} ${tm} min`;}
  !function render(){
    const tmStr=tmExp?fmtTM():null;
    if(tmExp&&tmStr===null)return void(cs.innerHTML='<img src="web/otros/Archivos/Imagenes/Permanente/404.avif" style="max-width:100%;max-height:180px;object-fit:contain;display:block;margin:auto">');
    cs.innerHTML=(tmStr?`<div class="cb-dsp">⏳ Se Acaba En: ${tmStr}</div>`:"")+
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
      if(isNaN(v)||v<minQ)return void(cs.innerHTML=`<div class="cb-er">⚠️ El Minimo es ${minQ}</div>`,setTimeout(()=>{qty=minQ;render()},3e3));
      if(v>maxQ)return void(cs.innerHTML=`<div class="cb-er">⚠️ Maximo Disponible: ${maxQ}</div>`,setTimeout(()=>{qty=maxQ;render()},3e3));
      qty=v;addItem(tp,num,id,qty,pc,nb);locked=!0;
      cs.innerHTML='<div class="cb-s">✅ Añadido a la Lista</div><div class="cb-s2">Continua la Compra en el Carrito 👇</div>';
    };
    if(tmExp&&!tmInt){tmInt=setInterval(()=>{const s=fmtTM();if(s===null){clearInterval(tmInt);cs.innerHTML='<img src="web/otros/Archivos/Imagenes/Permanente/404.avif" style="max-width:100%;max-height:180px;object-fit:contain;display:block;margin:auto">';return;}const el=cs.querySelector('.cb-dsp');if(el)el.textContent='⏳ Se Acaba En: '+s;},6e4);}
  }();
}

modal.className="cb-modal";
modal.innerHTML='<div class="cb-mc"><div class="cb-mh">🛒 Carrito<span class="cb-mx">✕</span></div><div class="cb-mb"></div></div>';
document.body.appendChild(modal);

btn.addEventListener("click",()=>{
  if(st.c.length>0)return toggleModal();
  const txt=encodeURIComponent("Hola, Quisiera saber mas sobre esto "+window.location.href);
  window.open(WA_BASE+txt,"_blank");
});

modal.addEventListener("click",ev=>{
  if(ev.target===modal||ev.target.classList.contains("cb-mx"))toggleModal();
  const b=ev.target.closest("button");
  if(!b)return;
  if(b.dataset.l){
    window.open(b.dataset.l,"_blank");
    const gk=b.dataset.gk,lbl=b.dataset.lbl;
    if(gk){
      st.c=st.c.filter(x=>x.t+"-"+x.n!==gk);
      syncBtn();
      const grpEl=modal.querySelector(`.cb-cp[data-gk="${gk}"]`);
      if(grpEl)grpEl.outerHTML=`<div class="cb-s">✅ Completa la Compra en ${lbl} 👆</div>`;
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
      setTimeout(()=>{addItem(tp,nm,id,nq,item.p,item.b,"set");
        const tot=st.c.reduce((a,b)=>a+b.d,0);
        const toEl=modal.querySelector(".cb-to");
        if(toEl)toEl.textContent="💸 Total: "+fmt(tot>0?st.c.reduce((a,b)=>a+b.p*b.d,0):0)+"Gs";
        if(!st.c.length)renderCart();
      },400);
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
      const tot=st.c.reduce((a,b)=>a+b.p*b.d,0);
      const toEl=modal.querySelector(".cb-to");
      if(toEl)toEl.textContent="💸 Total: "+fmt(tot)+"Gs";
    }
  }
});

window.addEventListener("cartAdd",ev=>{const{type:tp,num,id,q,pc,nb}=ev.detail;addItem(tp,num,id,q,pc,nb)});
window.addEventListener("scroll",onScroll);
window.addEventListener("resize",onScroll);

const content=document.getElementById("content");
content
  ?content.addEventListener("contentLoaded",()=>{st.r=!0;setTimeout(()=>{onScroll();requestAnimationFrame(initProduct)},1e3)})
  :(st.r=!0,onScroll());
st.r=!0;onScroll();requestAnimationFrame(initProduct);
}();
