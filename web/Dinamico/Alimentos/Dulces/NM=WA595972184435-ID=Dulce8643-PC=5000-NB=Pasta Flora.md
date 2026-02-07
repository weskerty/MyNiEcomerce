# Pasta Flora
<div class="gallery-container">
    <div class="contenedor-imagenes-animado">
        {"image": "web/otros/Archivos/Imagenes/IB.jpg"},
        {"image": "web/otros/Archivos/Imagenes/IvanBal.jpg"},
        {"image": "https://i.ibb.co/4wDx4rJ2/image.png"}
    </div>
</div>

## Ingredientes
- Harina de trigo 
- Margarina  
- Azúcar  
- Huevos  
- Ralladura de limón  
- Dulce de Guayaba
- Polvo de hornear

> Libre de Lácteos; Sin Caseína ni Lactosa.

<div id="cs"></div>

<script>(function(){function i(){const h=location.hash;if(!h)return;let u;try{u=decodeURIComponent(h)}catch(e){u=h}const a=u.match(/ID=([^-\s]+)/),b=u.match(/PC=([^-\s]+)/),c=u.match(/NB=([^.]+)/),d=u.match(/NM=([^-\s]+)/);if(!a||!b||!c||!d)return;const id=a[1],pc=parseInt(b[1]),nb=c[1],nm=d[1];let t,n;if(nm.startsWith("WATG")){t="wt";n=nm.substring(4)}else if(nm.startsWith("WA")){t="w";n=nm.substring(2)}else if(nm.startsWith("TG")){t="t";n=nm.substring(2)}else return;const e=document.getElementById("cs");if(!e)return;const mn=parseInt(e.getAttribute("min"))||1;let q=mn,l=false;e.style.cssText="background:rgba(255,255,255,0.18);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.3);border-radius:15px;padding:20px;margin:20px auto;max-width:340px;color:#fff;text-align:center";e.innerHTML=`<style>#cs .p{font-size:20px;font-weight:bold;margin-bottom:15px}#cs .t{color:#22c55e}#cs .o{display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:15px}#cs .o span{font-size:16px}#cs .k{width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.25);border:1px solid rgba(255,255,255,0.4);color:#fff;cursor:pointer;font-size:20px;display:flex;align-items:center;justify-content:center;border:none}#cs .k:hover{background:rgba(255,255,255,0.35);transform:scale(1.1)}#cs .k:disabled{opacity:0.5;cursor:not-allowed}#cs .k:disabled:hover{transform:none}#cs .v{min-width:50px;font-size:20px;font-weight:bold;background:transparent;border:none;color:#fff;text-align:center;width:60px}#cs .v::-webkit-inner-spin-button,#cs .v::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}#cs .v:focus{outline:none}#cs .a{background:rgba(34,197,94,0.35);border:1px solid rgba(34,197,94,0.6);padding:12px 24px;border-radius:12px;color:#fff;cursor:pointer;font-weight:bold;width:100%;font-size:16px;border:none}#cs .a:hover{background:rgba(34,197,94,0.5)}#cs .a:disabled{opacity:0.6;cursor:not-allowed}#cs .a:disabled:hover{background:rgba(34,197,94,0.35)}#cs .m{margin-top:10px;font-size:14px;color:#fbbf24}</style><div class="p">Precio: <span class="t" id="pt">${pc*q}</span>Gs</div><div class="o"><span>Cantidad:</span><button class="k" id="bm">−</button><input type="number" class="v" id="qv" value="${q}" min="${mn}" max="999"><button class="k" id="bp">+</button></div><button class="a" id="ba">🛍️ Añadir al Carrito</button><div class="m" id="mg"></div>`;const qv=document.getElementById("qv"),pt=document.getElementById("pt"),bm=document.getElementById("bm"),bp=document.getElementById("bp"),ba=document.getElementById("ba"),mg=document.getElementById("mg");function v(){const x=parseInt(qv.value)||mn;if(x<mn){q=mn;qv.value=mn;mg.textContent="Esta es la Cantidad Mínima";setTimeout(()=>mg.textContent="",3000)}else if(x>999){q=999;qv.value=999}else{q=x}pt.textContent=pc*q}qv.addEventListener("input",v);qv.addEventListener("blur",v);bm.onclick=()=>{if(q>mn){q--;qv.value=q;pt.textContent=pc*q}};bp.onclick=()=>{if(q<999){q++;qv.value=q;pt.textContent=pc*q}};ba.onclick=()=>{if(l)return;window.dispatchEvent(new CustomEvent("cartAdd",{detail:{type:t,num:n,id:id,q:q,pc:pc,nb:nb}}));l=true;ba.disabled=true;bm.disabled=true;bp.disabled=true;qv.disabled=true;mg.innerHTML="Añadido al Carrito 👍<br>Verifica Abajo en el Carrito";setTimeout(()=>{l=false;ba.disabled=false;bm.disabled=false;bp.disabled=false;qv.disabled=false;mg.textContent="";q=mn;qv.value=mn;pt.textContent=pc*mn},30000)}}setTimeout(i,500)})();</script>


## Más información
Este delicioso pastel es perfecto para toda ocasión...

<link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.css onerror="this.href='web/scripts/Otros/Swiper/8.4.5-bundle.min.css'"><script src=https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js onerror="var s=document.createElement('script');s.src='web/scripts/Otros/Swiper/8.4.5-bundle.min.js';document.head.appendChild(s)"></script><script>function p(e){try{let t=e.textContent.trim();if(!t)return null;t=t.replace(/[\n\r\t]/g,'').replace(/\s+/g,' ').trim();let j=`[${t}]`.replace(/,\s*]/g,']');return{images:JSON.parse(j)}}catch{return null}}function c(e,i){e.innerHTML=`<div class=swiper-wrapper>${i.map(a=>`<div class=swiper-slide><a href="${a.link||a.image}" target=_blank><img src="${a.image}" alt="${a.name||'Imagen'}" loading=lazy></a></div>`).join('')}</div>`;return new Swiper(e,{slidesPerView:'auto',spaceBetween:20,loop:!0,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1}})}function i(){if(typeof Swiper=='undefined')return;document.querySelectorAll('.contenedor-imagenes-animado:not([id])').forEach(e=>{let d=p(e);d&&d.images&&d.images.length&&(e.classList.add('swiper'),c(e,d.images))})}function w(){typeof Swiper!='undefined'?i():setTimeout(w,100)}setTimeout(w,500)</script>
