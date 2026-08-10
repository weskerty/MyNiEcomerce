<style>
*{box-sizing:border-box}
.rc-cats{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin-bottom:8px}
.rc-cat{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);border-radius:20px;color:#fff;padding:5px 14px;cursor:pointer;font-size:.82em;transition:background .2s,border-color .2s}
.rc-cat:hover{background:rgba(255,255,255,.16)}
.rc-cat.rc-ca{background:rgba(74,222,128,.2);border-color:rgba(74,222,128,.5);color:#86efac}
.rc-mats{display:none;flex-wrap:wrap;justify-content:center;gap:6px;margin-bottom:14px}
.rc-mats.on{display:flex}

.rc-mode{display:flex;justify-content:center;gap:8px;margin-bottom:12px}
.rc-mbtn{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:14px;color:#fff;padding:8px 18px;cursor:pointer;font-size:.85em;font-weight:600;transition:background .2s,border-color .2s}
.rc-mbtn:hover{background:rgba(255,255,255,.12)}
.rc-mbtn.rc-mo{background:rgba(74,222,128,.2);border-color:rgba(74,222,128,.5);color:#86efac}

#rc-optin{display:none;text-align:center;padding:16px;margin-bottom:10px;border-radius:16px;border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.04)}
#rc-optin.on{display:block}
#rc-optin p{margin:0 0 10px;font-size:.85em;color:rgba(255,255,255,.65)}

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
.rc-pdist{display:inline-block;margin-left:6px;font-size:.7em;font-weight:400;color:rgba(255,255,255,.4)}
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

dialog.rc-dlg{max-width:min(360px,calc(100vw - 40px))}
dialog.rc-dlg[open]{display:flex;flex-direction:column;gap:10px}
dialog.rc-dlg h3{margin:0 0 4px;font-size:1rem;border:none!important}
.rc-row{display:flex;gap:8px}
.rc-row .B{flex:1}
</style>

<h1 style="margin:0 0 14px;font-size:1.4em;font-weight:700;color:#fff">📍 Localizador</h1>

<div class="rc-mode" id="rc-mode">
  <button class="rc-mbtn rc-mo" data-mode="lugares">🗺️ Lugares</button>
  <button class="rc-mbtn" data-mode="personas">🧑‍🤝‍🧑 Personas</button>
</div>

<div id="rc-optin">
  <p>Para ver quien esta cerca, compartí tu ubicación aproximada. Se difumina automáticamente, nunca es exacta, y nadie ve tu posición precisa.</p>
  <button class="B Bp Bac" id="rc-optin-btn">Activar mi ubicacion</button>
</div>

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

<dialog class="rc-dlg" id="rc-m-perfil">
  <h3>Tu nombre</h3>
  <input class="MI" id="rc-pf-nk" placeholder="Como te ven los demas..." maxlength="24">
  <div class="rc-row">
    <button class="B Bp Bac" id="rc-pf-ok">Continuar</button>
    <button class="B Bp Bs" id="rc-pf-cx">Cancelar</button>
  </div>
</dialog>

<script>
(function(){
const JSON_URL='web/otros/Archivos/Dinamico/Publico/localizador/data.json';
let PUNTOS=[];

let _GU=window.GeoUtils||null,_GUp=null;
function loadGU(){
  if(_GU)return Promise.resolve(_GU);
  if(_GUp)return _GUp;
  _GUp=new Promise(res=>{
    const s=document.createElement('script');
    s.src='web/scripts/Otros/Geo/GeoUtils.js';
    s.onload=()=>{_GU=window.GeoUtils;res(_GU)};
    s.onerror=()=>res(null);
    document.head.appendChild(s);
  });
  return _GUp;
}

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

let map=null,markers=[],selId=null,_filter='',_matFilter='',_myPos=null,myMarker=null,_mode='lugares';

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
  markers.forEach(({id,marker})=>{
    const p=PUNTOS.find(x=>x.id===id);
    const show=visible.includes(p);
    if(show){if(!map.hasLayer(marker))marker.addTo(map);}
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
  if(!PUNTOS.length)document.getElementById('rc-empty').textContent='Sin lugares publicados aun';
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
  if(pts.length){
    const bounds=L.latLngBounds(pts);
    map.fitBounds(bounds,{padding:[32,32],maxZoom:13});
  }else{
    map.setView([0,0],2);
  }
  if(_mode==='personas')enterPersonas();
}

const API_LOC='/api/localizador',LOC_TTL_MS=180000,MIN_PING_MS=45000,MOVE_THRESHOLD_KM=0.15,CELL_PRECISION=4;

function ckGet(k){const m=document.cookie.match(new RegExp('(?:^|; )'+k+'=([^;]*)'));return m?decodeURIComponent(m[1]):null;}
function ckSet(k,v){const sec=location.protocol==='https:'?';Secure':'';document.cookie=`${k}=${encodeURIComponent(v)};path=/;max-age=31536000;SameSite=Strict${sec}`;}
function seedHash(s){let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;return h;}

let locId=localStorage.getItem('LOC_ID');
if(!locId){
  locId=(crypto.randomUUID?crypto.randomUUID():(Date.now().toString(36)+Math.random().toString(36).slice(2))).replace(/-/g,'');
  localStorage.setItem('LOC_ID',locId);
}
let locNick=ckGet('cw_nick')||'';

let personToken=null,lastPingAt=0,lastPingPos=null,watchId=null,pingTimer=null;
let people=[],peopleMarkers={},myPos=null;

async function apiLoc(method,path,body){
  const o={method,headers:{'Content-Type':'application/json'}};
  if(body)o.body=JSON.stringify(body);
  const r=await fetch(API_LOC+path,o);
  const data=await r.json().catch(()=>({}));
  if(!r.ok)throw Object.assign(new Error(data.error||String(r.status)),{status:r.status});
  return data;
}

function distBucket(km){
  if(km<1)return'<1km';
  if(km<3)return'1-3km';
  if(km<10)return'3-10km';
  if(km<30)return'10-30km';
  return'30-60km';
}

async function sendPing(lat,lon){
  myPos={lat,lon};
  try{
    const d=await apiLoc('POST','/ping',{id:locId,token:personToken,nick:locNick||'Anonimo',lat,lon});
    personToken=d.token;
    lastPingAt=Date.now();
    lastPingPos=myPos;
    fetchNearby();
  }catch(e){}
}

function onGeoUpdate(pos){
  const lat=pos.coords.latitude,lon=pos.coords.longitude;
  const now=Date.now();
  const moved=lastPingPos&&_GU?_GU.haversine(lastPingPos.lat,lastPingPos.lon,lat,lon):Infinity;
  const dueTime=now-lastPingAt>=MIN_PING_MS;
  if(!lastPingPos||(dueTime&&moved>=MOVE_THRESHOLD_KM)||now-lastPingAt>=LOC_TTL_MS){
    sendPing(lat,lon);
  }else{
    myPos={lat,lon};
  }
}

function startWatch(){
  if(watchId!=null||!navigator.geolocation||!map)return;
  watchId=navigator.geolocation.watchPosition(onGeoUpdate,()=>{},{enableHighAccuracy:false,maximumAge:30000,timeout:15000});
  pingTimer=setInterval(()=>{if(myPos)fetchNearby();},60000);
}
function stopWatch(){
  if(watchId!=null){navigator.geolocation.clearWatch(watchId);watchId=null;}
  if(pingTimer){clearInterval(pingTimer);pingTimer=null;}
  if(personToken){apiLoc('DELETE','/leave',{id:locId,token:personToken}).catch(()=>{});personToken=null;}
  lastPingAt=0;lastPingPos=null;myPos=null;
  Object.values(peopleMarkers).forEach(mk=>mk.remove());
  peopleMarkers={};people=[];
}

async function fetchNearby(){
  if(!myPos||!_GU)return;
  const cell=_GU.encode(myPos.lat,myPos.lon,CELL_PRECISION);
  let list;
  try{list=await apiLoc('GET','/nearby?cell='+cell);}catch(e){return;}
  people=list.filter(p=>p.id!==locId).map(p=>({...p,km:_GU.haversine(myPos.lat,myPos.lon,p.lat,p.lon)}));
  people.sort((a,b)=>a.km-b.km);
  renderPeopleMarkers();
}

function mkPersonIcon(){
  return L.divIcon({
    html:`<div style="font-size:20px;line-height:1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.4))">🧑</div>`,
    className:'',iconSize:[24,24],iconAnchor:[12,12]
  });
}

function renderPeopleMarkers(){
  if(!map)return;
  const seen=new Set();
  people.forEach(p=>{
    seen.add(p.id);
    let m=peopleMarkers[p.id];
    if(!m){
      m=L.marker([p.lat,p.lon],{icon:mkPersonIcon()});
      m.addTo(map);
      peopleMarkers[p.id]=m;
    }else{
      m.setLatLng([p.lat,p.lon]);
    }
    m._p=p;
    m.off('click');
    m.on('click',()=>selectPerson(p));
  });
  Object.keys(peopleMarkers).forEach(id=>{
    if(!seen.has(id)){peopleMarkers[id].remove();delete peopleMarkers[id];}
  });
}

function selectPerson(p){
  document.getElementById('rc-empty').style.display='none';
  const dtEl=document.getElementById('rc-detail');
  dtEl.style.display='block';
  dtEl.innerHTML=`<span class="rc-dtag">🧑 Persona</span>
    <div class="rc-dname">${esc(p.nick)}<span class="rc-pdist">${distBucket(p.km)}</span></div>
    <div class="rc-actions"><button class="rc-abtn rc-abtn-geo" id="rc-p-chat">💬 Chatear</button></div>`;
  document.getElementById('rc-p-chat').onclick=()=>openChatWith(p.id);
  document.getElementById('rc-panel').scrollIntoView({behavior:'smooth',block:'nearest'});
}

function pairKey(idA,idB){
  const sorted=[idA,idB].sort().join('|');
  return{room:'dm'+seedHash('id:'+sorted).toString(36),pass:seedHash('pw:'+sorted).toString(36)};
}
function openChatWith(otherId){
  const{room,pass}=pairKey(locId,otherId);
  const path='web/otros/Archivos/Dinamico/🧩 Apps/🫂 Social/Secret Chat.md';
  location.hash='#'+encodeURI(path)+'#dm='+room+':'+pass;
}

function showModalRC(id){const d=document.getElementById(id);d.showModal();document.body.style.overflow='hidden';}
function hideModalRC(id){document.getElementById(id).close();}
document.querySelectorAll('dialog.rc-dlg').forEach(dlg=>{dlg.addEventListener('close',()=>{document.body.style.overflow='';});});
document.getElementById('rc-pf-cx').onclick=()=>hideModalRC('rc-m-perfil');
document.getElementById('rc-pf-ok').onclick=()=>{
  const n=document.getElementById('rc-pf-nk').value.trim();
  if(!n)return;
  locNick=n;ckSet('cw_nick',n);
  hideModalRC('rc-m-perfil');
  loadGU().then(()=>startWatch());
};

function actuallyStartPersonas(){
  if(!locNick){document.getElementById('rc-pf-nk').value='';showModalRC('rc-m-perfil');return;}
  loadGU().then(()=>startWatch());
}

function enterPersonas(){
  if(!localStorage.getItem('UBI_PERSONAS')){
    document.getElementById('rc-optin').classList.add('on');
    return;
  }
  document.getElementById('rc-optin').classList.remove('on');
  actuallyStartPersonas();
}
document.getElementById('rc-optin-btn').onclick=()=>{
  localStorage.setItem('UBI_PERSONAS','1');
  document.getElementById('rc-optin').classList.remove('on');
  actuallyStartPersonas();
};

function setMode(m){
  if(_mode===m)return;
  _mode=m;
  document.querySelectorAll('#rc-mode .rc-mbtn').forEach(b=>b.classList.toggle('rc-mo',b.dataset.mode===m));
  document.getElementById('rc-empty').style.display='';
  document.getElementById('rc-detail').style.display='none';
  if(m==='lugares'){
    document.getElementById('rc-cats').style.display='';
    document.getElementById('rc-optin').classList.remove('on');
    stopWatch();
    if(map)applyFilter();
  }else{
    document.getElementById('rc-cats').style.display='none';
    document.getElementById('rc-mats').classList.remove('on');
    markers.forEach(({marker})=>{if(map&&map.hasLayer(marker))marker.remove();});
    enterPersonas();
  }
}
document.querySelectorAll('#rc-mode .rc-mbtn').forEach(btn=>{
  btn.onclick=()=>setMode(btn.dataset.mode);
});

function loadLeaflet(cb){
  if(window.L){cb();return;}
  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
  document.head.appendChild(css);
  const s=document.createElement('script');
  s.src='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
  s.onload=cb;
  document.head.appendChild(s);
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
  stopWatch();
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
    loadLeaflet(initMap);
  })
  .catch(()=>{document.getElementById('rc-empty').textContent='Error al cargar lugares';});
})();
</script>

<br>

<h2> Faltan Mas Lugares? </h2> <a href="web/otros/Archivos/MarkDowns/SerParte.md" > <h5> Se parte ↗️ </h5> </a>
