<style>
*{box-sizing:border-box}

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

.rc-dname{font-size:1.08em;font-weight:700;color:#fff;margin:0 0 4px}
.rc-daddr{font-size:.82em;color:rgba(255,255,255,.5);margin:0 0 10px;line-height:1.45}
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

<h1 style="margin:0 0 14px;font-size:1.4em;font-weight:700;color:#fff">👕 Lavanderias</h1>

<div id="rc-map"></div>

<div id="rc-panel">
  <div id="rc-empty">📍 Selecciona un punto</div>
  <div id="rc-detail"></div>
</div>

<script>
(function(){
const JSON_URL='web/otros/Archivos/Dinamico/Publico/lavanderia/data.json';
let PUNTOS=[];

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
  return{id,lat:ll.lat,lng:ll.lng,nombre:parts[0]||'Sin nombre',horario:parts[1]||'',tel:mNM?mNM[1]:null,ch:mCH?mCH[1]:''};
}

let map=null,markers=[],selId=null;

function mkIcon(){
  return L.divIcon({
    html:`<div style="font-size:20px;line-height:1;filter:drop-shadow(0 2px 4px rgba(0,0,0,.4))">👕</div>`,
    className:'',iconSize:[24,24],iconAnchor:[12,12]
  });
}

function showDetail(p){
  document.getElementById('rc-empty').style.display='none';
  const dtEl=document.getElementById('rc-detail');
  dtEl.style.display='block';

  const rows=[];
  if(p.horario)rows.push(`<div class="rc-drow"><span>🕐</span><span>${esc(p.horario)}</span></div>`);
  if(p.tel)rows.push(`<div class="rc-drow"><span>📞</span><span>${esc(p.tel)}</span></div>`);

  const acts=[];
  acts.push(`<a class="rc-abtn rc-abtn-geo" href="geo:${p.lat},${p.lng}?q=${p.lat},${p.lng}">🗺️ Abrir Maps</a>`);
  acts.push(`<a class="rc-abtn rc-abtn-gm" href="https://www.google.com/maps?q=${p.lat},${p.lng}" target="_blank" rel="noopener noreferrer">🟠 GMaps</a>`);
  acts.push(`<a class="rc-abtn rc-abtn-am" href="https://maps.apple.com/?q=${p.lat},${p.lng}" target="_blank" rel="noopener noreferrer">🍎 Maps</a>`);
  if(p.tel&&(p.ch||'').includes('WA')){
    const num=p.tel.replace(/\D/g,'');
    acts.push(`<a class="rc-abtn rc-abtn-wa" href="https://wa.me/${num}" target="_blank" rel="noopener noreferrer"><span class="rc-wa-icon"></span>WhatsApp</a>`);
  }

  dtEl.innerHTML=`<div class="rc-dname">${esc(p.nombre)}</div>
    <div class="rc-dmeta">${rows.join('')}</div>
    <div class="rc-actions">${acts.join('')}</div>`;
}

function selectPin(p){
  selId=p.id;
  showDetail(p);
  document.getElementById('rc-panel').scrollIntoView({behavior:'smooth',block:'nearest'});
}

function initMap(){
  if(map)return;
  if(!PUNTOS.length){document.getElementById('rc-empty').textContent='Sin lavanderias publicadas aun';return;}
  map=L.map('rc-map',{zoomControl:true,scrollWheelZoom:false,tap:true});
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom:19
  }).addTo(map);

  PUNTOS.forEach(p=>{
    const mk=L.marker([p.lat,p.lng],{icon:mkIcon()});
    mk.on('click',()=>selectPin(p));
    mk.addTo(map);
    markers.push({id:p.id,marker:mk});
  });

  const bounds=L.latLngBounds(PUNTOS.map(p=>[p.lat,p.lng]));
  map.fitBounds(bounds,{padding:[32,32],maxZoom:13});
}

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

document.addEventListener('contentUnload',function(){
  if(map){map.remove();map=null;markers=[];}
},{once:true});

fetch(JSON_URL)
  .then(r=>r.json())
  .then(data=>{
    const files=(data.galleries||{}).lavanderia||[];
    PUNTOS=files.map((f,i)=>parseEntry(f,i)).filter(Boolean);
    loadLeaflet(initMap);
  })
  .catch(()=>{document.getElementById('rc-empty').textContent='Error al cargar lavanderias';});
})();
</script>

<br>

<h2> Faltan Mas Lugares? </h2> <a href="web/otros/Archivos/MarkDowns/SerParte.md" > <h5> Se parte ↗️ </h5> </a>
