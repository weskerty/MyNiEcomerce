<style>
*{box-sizing:border-box}
.rc-cats{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin-bottom:8px}
.rc-cat{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);border-radius:20px;color:#fff;padding:5px 14px;cursor:pointer;font-size:.82em;transition:background .2s,border-color .2s}
.rc-cat:hover{background:rgba(255,255,255,.16)}
.rc-cat.rc-ca{background:rgba(74,222,128,.2);border-color:rgba(74,222,128,.5);color:#86efac}
.rc-mats{display:none;flex-wrap:wrap;justify-content:center;gap:6px;margin-bottom:14px}
.rc-mats.on{display:flex}

#rc-map{
  width:100%;height:340px;border-radius:18px;overflow:hidden;
  border:1px solid rgba(255,255,255,.1);
  position:relative;
}
#rc-map .leaflet-container{background:#1a1f2e}
#rc-map .leaflet-control-attribution{
  background:rgba(10,12,20,.75)!important;
  color:rgba(255,255,255,.45)!important;font-size:.6em!important;
  border-radius:8px 0 0 0!important;
}
#rc-map .leaflet-control-attribution a{color:rgba(255,255,255,.55)!important}
#rc-map .leaflet-control-zoom a{
  background:rgba(20,24,36,.9)!important;
  color:#fff!important;border-color:rgba(255,255,255,.12)!important;
}
#rc-map .leaflet-control-zoom a:hover{background:rgba(40,48,70,.95)!important}

#rc-panel{
  margin-top:12px;border-radius:18px;
  border:1px solid rgba(255,255,255,.09);
  background:rgba(255,255,255,.04);
  overflow:hidden;
  transition:opacity .22s;
}
#rc-empty{
  padding:28px 16px;text-align:center;
  color:rgba(255,255,255,.35);font-size:.9em;
}
#rc-detail{display:none;padding:16px}
.rc-dthumb{width:56px;height:56px;border-radius:12px;object-fit:cover;background:rgba(255,255,255,.05);float:right;margin-left:10px}

.rc-dtag{
  display:inline-block;margin-bottom:10px;
  padding:3px 10px;border-radius:12px;font-size:.72em;font-weight:700;
  text-transform:uppercase;letter-spacing:.04em;
  background:rgba(74,222,128,.2);color:#86efac;border:1px solid rgba(74,222,128,.3);
}

.rc-dname{font-size:1.08em;font-weight:700;color:#fff;margin:0 0 4px}
.rc-dmeta{display:flex;flex-direction:column;gap:5px;margin-bottom:14px}
.rc-drow{display:flex;gap:8px;font-size:.8em;color:rgba(255,255,255,.65)}
.rc-drow span:first-child{color:rgba(255,255,255,.3);flex-shrink:0;width:18px;text-align:center}

.rc-actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,.07)}
.rc-abtn{
  flex:1;min-width:0;
  display:inline-flex;align-items:center;justify-content:center;gap:5px;
  padding:8px 10px;border-radius:12px;font-size:.77em;font-weight:600;
  text-decoration:none;cursor:pointer;
  border:1px solid rgba(255,255,255,.1);
  background:rgba(255,255,255,.05);color:#fff;
  transition:background .18s,transform .15s;white-space:nowrap;
}
.rc-abtn:hover{background:rgba(255,255,255,.11);transform:translateY(-1px)}
.rc-abtn-geo{border-color:rgba(74,222,128,.3);color:#86efac}
.rc-abtn-geo:hover{background:rgba(74,222,128,.1)}
.rc-abtn-gm{border-color:rgba(234,88,12,.3);color:#fb923c}
.rc-abtn-gm:hover{background:rgba(234,88,12,.08)}
.rc-abtn-am{border-color:rgba(99,179,237,.3);color:#90cdf4}
.rc-abtn-am:hover{background:rgba(99,179,237,.08)}
.rc-abtn-wa{border-color:rgba(37,211,102,.3);color:#4edc7e}
.rc-abtn-wa:hover{background:rgba(37,211,102,.1)}
.rc-wa-icon{
  width:15px;height:15px;flex-shrink:0;
  background:currentColor;
  -webkit-mask:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.122 1.528 5.855L0 24l6.335-1.505A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.498-5.194-1.37l-.372-.22-3.862.918.975-3.768-.242-.387A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'/%3E%3C/svg%3E") no-repeat center/contain;
  mask:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.122 1.528 5.855L0 24l6.335-1.505A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.498-5.194-1.37l-.372-.22-3.862.918.975-3.768-.242-.387A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'/%3E%3C/svg%3E") no-repeat center/contain;
}
</style>

<h1 style="margin:0 0 14px;font-size:1.4em;font-weight:700;color:#fff">📍 Localizador</h1>

<div class="rc-cats" id="rc-cats">
  <button class="rc-cat rc-ca" data-cat="">🗺️ Todos</button>
  <button class="rc-cat" data-cat="banos">🚻 Baños</button>
  <button class="rc-cat" data-cat="agua">💧 Agua</button>
  <button class="rc-cat" data-cat="carga-electrica">🔌 Carga Eléctrica</button>
  <button class="rc-cat" data-cat="lavanderia">👕 Lavandería</button>
  <button class="rc-cat" data-cat="reciclaje">♻️ Reciclaje</button>
</div>
<div class="rc-mats" id="rc-mats">
  <button class="rc-cat rc-ca" data-mat="">Todos</button>
  <button class="rc-cat" data-mat="electronico">🔌 Electronicos</button>
  <button class="rc-cat" data-mat="plastico">🧴 Plastico</button>
  <button class="rc-cat" data-mat="papel">📄 Papel</button>
  <button class="rc-cat" data-mat="vidrio">🍶 Vidrio</button>
  <button class="rc-cat" data-mat="metal">🔩 Metal</button>
</div>

<div id="rc-map"></div>

<div id="rc-panel">
  <div id="rc-empty">📍 Selecciona un punto en el mapa</div>
  <div id="rc-detail"></div>
</div>

<script>
(function(){
const JSON_URL='web/otros/Archivos/Dinamico/Publico/localizador/data.json';
let PUNTOS=[];

const CAT_EMOJI={banos:'🚻',agua:'💧','carga-electrica':'🔌',lavanderia:'👕',reciclaje:'♻️'};
const CAT_LABEL={banos:'Baños',agua:'Agua','carga-electrica':'Carga Electrica',lavanderia:'Lavanderia',reciclaje:'Reciclaje'};
const MAT_EMOJI={electronico:'🔌',plastico:'🧴',papel:'📄',vidrio:'🍶',metal:'🔩'};
const MAT_LABEL={electronico:'Electronicos',plastico:'Plastico',papel:'Papel',vidrio:'Vidrio',metal:'Metal'};

function esc(s){const d=document.createElement('div');d.textContent=s==null?'':String(s);return d.innerHTML;}
function ctToLatLng(ct){
  const m=ct&&ct.match(/^([SN])([\d.]+)([WE])([\d.]+)$/);
  if(!m)return null;
  return{lat:(m[1]==='S'?-1:1)*parseFloat(m[2]),lng:(m[3]==='W'?-1:1)*parseFloat(m[4])};
}
function parseEntry(relPath,id){
  const fn=relPath.split('/').pop();
  const mNM=fn.match(/NM=([^-]+)/),mCH=fn.match(/CH=([^-]+)/),mCT=fn.match(/CT=([SN][\d.]+[WE][\d.]+)/),mNB=fn.match(/NB=(.+)\.\w+$/);
  if(!mNB||!mCT)return null;
  const ll=ctToLatLng(mCT[1]);
  if(!ll)return null;
  const parts=mNB[1].split(';');
  const catRaw=parts[1]||'';
  const isRec=catRaw.indexOf('reciclaje')===0;
  const cat=isRec?'reciclaje':catRaw;
  const mat=isRec?(catRaw.split('-')[1]||''):'';
  if(!CAT_EMOJI[cat])return null;
  return{id,lat:ll.lat,lng:ll.lng,cat,mat,nombre:parts[0]||'Sin nombre',horario:parts[2]||'',tel:mNM?mNM[1]:null,ch:mCH?mCH[1]:'',img:relPath};
}

let map=null,markers=[],selId=null,_filter='',_matFilter='',_myPos=null,myMarker=null;

function mkMyIcon(){
  return L.divIcon({
    html:`<div style="font-size:24px;line-height:1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.5))">📍</div>`,
    className:'',iconSize:[28,28],iconAnchor:[14,26]
  });
}

function addMyMarker(){
  if(!map||!_myPos||myMarker)return;
  myMarker=L.marker([_myPos.lat,_myPos.lng],{icon:mkMyIcon(),zIndexOffset:1000}).addTo(map);
  myMarker.bindTooltip('Tu ubicacion');
}

function geoLocate(){
  if(!navigator.geolocation)return;
  navigator.geolocation.getCurrentPosition(
    p=>{
      _myPos={lat:p.coords.latitude,lng:p.coords.longitude};
      localStorage.setItem('UBI','1');
      addMyMarker();
    },
    ()=>{},
    {timeout:10000,maximumAge:60000}
  );
}

function mkIcon(p,sel){
  const em=p.cat==='reciclaje'&&p.mat?(MAT_EMOJI[p.mat]||'♻️'):(CAT_EMOJI[p.cat]||'📍');
  return L.divIcon({
    html:`<div style="font-size:20px;line-height:1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.4))">${em}</div>`,
    className:'',iconSize:[24,24],iconAnchor:[12,12]
  });
}

function showDetail(p){
  const emEl=document.getElementById('rc-empty');
  const dtEl=document.getElementById('rc-detail');
  emEl.style.display='none';
  dtEl.style.display='block';

  const rows=[];
  if(p.horario)rows.push(`<div class="rc-drow"><span>🕐</span><span>${esc(p.horario)}</span></div>`);
  if(p.tel)rows.push(`<div class="rc-drow"><span>📞</span><span>${esc(p.tel)}</span></div>`);

  const acts=[];
  acts.push(`<a class="rc-abtn rc-abtn-geo" href="geo:${p.lat},${p.lng}?q=${p.lat},${p.lng}">🗺️ Abrir Maps</a>`);
  acts.push(`<a class="rc-abtn rc-abtn-gm" href="https://www.google.com/maps?q=${p.lat},${p.lng}" target="_blank" rel="noopener noreferrer">🟠 Google Maps</a>`);
  acts.push(`<a class="rc-abtn rc-abtn-am" href="https://maps.apple.com/?q=${p.lat},${p.lng}" target="_blank" rel="noopener noreferrer">🍎 Apple Maps</a>`);
  if(p.tel&&(p.ch||'').includes('WA')){
    const num=p.tel.replace(/\D/g,'');
    acts.push(`<a class="rc-abtn rc-abtn-wa" href="https://wa.me/${num}" target="_blank" rel="noopener noreferrer"><span class="rc-wa-icon"></span>WhatsApp</a>`);
  }

  const tagLabel=p.cat==='reciclaje'&&p.mat?`${MAT_EMOJI[p.mat]} ${MAT_LABEL[p.mat]}`:`${CAT_EMOJI[p.cat]} ${CAT_LABEL[p.cat]}`;
  dtEl.innerHTML=`${p.img?`<img class="rc-dthumb" src="${encodeURI(p.img)}" alt="" onerror="this.style.display='none'">`:''}
    <span class="rc-dtag">${tagLabel}</span>
    <div class="rc-dname">${esc(p.nombre)}</div>
    <div class="rc-dmeta">${rows.join('')}</div>
    <div class="rc-actions">${acts.join('')}</div>`;
}

function visibleList(){
  return PUNTOS.filter(p=>(!_filter||p.cat===_filter)&&(_filter!=='reciclaje'||!_matFilter||p.mat===_matFilter));
}

function applyFilter(){
  selId=null;
  document.getElementById('rc-empty').style.display='';
  document.getElementById('rc-detail').style.display='none';
  const visible=visibleList();
  const vis=new Set(visible.map(p=>p.id));
  markers.forEach(({id,marker})=>{
    if(vis.has(id)){if(!map.hasLayer(marker))marker.addTo(map);}
    else{if(map.hasLayer(marker))marker.remove();}
  });
  if(visible.length){
    const bounds=L.latLngBounds(visible.map(p=>[p.lat,p.lng]));
    map.fitBounds(bounds,{padding:[32,32],maxZoom:13});
  }
}

function selectPin(p){
  if(selId!==null){
    const prev=markers.find(m=>m.id===selId);
    if(prev)prev.marker.setIcon(mkIcon(prev.p,false));
  }
  selId=p.id;
  const cur=markers.find(m=>m.id===p.id);
  if(cur)cur.marker.setIcon(mkIcon(p,true));
  showDetail(p);
  document.getElementById('rc-panel').scrollIntoView({behavior:'smooth',block:'nearest'});
}

function initMap(){
  if(map)return;
  if(!PUNTOS.length){document.getElementById('rc-empty').textContent='Sin lugares publicados aun';return;}
  map=L.map('rc-map',{zoomControl:true,scrollWheelZoom:false,tap:true});
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom:19
  }).addTo(map);

  PUNTOS.forEach(p=>{
    const mk=L.marker([p.lat,p.lng],{icon:mkIcon(p,false)});
    mk.on('click',()=>selectPin(p));
    mk.addTo(map);
    markers.push({id:p.id,p,marker:mk});
  });
  addMyMarker();

  const pts=PUNTOS.map(p=>[p.lat,p.lng]);
  if(_myPos)pts.push([_myPos.lat,_myPos.lng]);
  const bounds=L.latLngBounds(pts);
  map.fitBounds(bounds,{padding:[32,32],maxZoom:13});
}

const LF_L='web/scripts/Otros/Leaflet/',LF_C='https://cdn.jsdelivr.net/npm/leaflet@1/dist/';
function loadLeaflet(cb){
  if(window.L){cb();return;}
  const css=document.createElement('link');
  css.rel='stylesheet';css.href=LF_L+'leaflet.css';
  css.onerror=()=>{css.href=LF_C+'leaflet.css'};
  document.head.appendChild(css);
  const add=(src,fb)=>{
    const s=document.createElement('script');
    s.src=src;s.onload=cb;
    s.onerror=fb||(()=>{document.getElementById('rc-empty').textContent='Error al cargar el mapa'});
    document.head.appendChild(s);
  };
  add(LF_L+'leaflet.js',()=>add(LF_C+'leaflet.js'));
}

function selectCat(cat){
  _filter=cat;_matFilter='';
  document.querySelectorAll('#rc-cats .rc-cat').forEach(b=>b.classList.toggle('rc-ca',b.dataset.cat===cat));
  document.querySelectorAll('#rc-mats .rc-cat').forEach(b=>b.classList.toggle('rc-ca',b.dataset.mat===''));
  document.getElementById('rc-mats').classList.toggle('on',cat==='reciclaje');
  if(map)applyFilter();
}

document.querySelectorAll('#rc-cats .rc-cat').forEach(btn=>{
  btn.onclick=()=>selectCat(btn.dataset.cat);
});
document.querySelectorAll('#rc-mats .rc-cat').forEach(btn=>{
  btn.onclick=()=>{
    _matFilter=btn.dataset.mat;
    document.querySelectorAll('#rc-mats .rc-cat').forEach(b=>b.classList.toggle('rc-ca',b===btn));
    if(map)applyFilter();
  };
});

document.addEventListener('contentUnload',function(){
  if(map){map.remove();map=null;markers=[];}
  myMarker=null;_myPos=null;
},{once:true});

function gHA(){
  const h=window.location.hash;
  if(!h)return'';
  const pts=h.substring(1).split('#');
  return pts.length>1?decodeURIComponent(pts[1]):'';
}

geoLocate();

fetch(JSON_URL)
  .then(r=>r.json())
  .then(data=>{
    const files=(data.galleries||{}).localizador||[];
    PUNTOS=files.map((f,i)=>parseEntry(f,i)).filter(Boolean);
    const initCat=gHA();
    if(initCat&&CAT_EMOJI[initCat])selectCat(initCat);
    loadLeaflet(()=>{initMap();if(_filter&&map)applyFilter();});
  })
  .catch(()=>{document.getElementById('rc-empty').textContent='Error al cargar lugares';});
})();
</script>

<br>

<h2> Faltan Mas Lugares? </h2> <a href="web/otros/Archivos/MarkDowns/SerParte.md" > <h5> Se parte ↗️ </h5> </a>

<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Aplicaciones</a>
</div>