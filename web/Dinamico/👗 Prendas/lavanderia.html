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
const PUNTOS=[
  {
    id:1,lat:-25.259691,lng:-57.499129,
    nombre:'Paraguay Insumos',
    dir:'Barrio Loma Merlo, Calle America 5868 c/ Juan Bautista Rivarola, Luque',
    horario:'Lun - Vie: 8:00 - 18:00',
    tel:null,wa:'595983596037'
  },
  {
    id:2,lat:-25.336771,lng:-57.524364,
    nombre:'Sede IICA - Campus UNA',
    dir:'Gral. Patricio Escobar casi Ruta Mcal. Estigarribia, San Lorenzo',
    horario:'Lun - Vie: 9:00 - Cierre campus',
    tel:'59521584060',wa:null
  },
  {
    id:3,lat:-25.334896,lng:-57.520645,
    nombre:'UNA Rectorado - Dir. Informatica',
    dir:'San Lorenzo, Campus UNA',
    horario:'Lun - Vie: 8:00 - Cierre campus',
    tel:null,wa:null
  },
  {
    id:4,lat:-27.307036,lng:-55.888031,
    nombre:'Universidad Nacional de Itapua',
    dir:'Abg. Lorenzo Zacarias Lopez 255 y Ruta PY01 Km 2,5, Barrio Ka agua Rory, Encarnacion',
    horario:null,
    tel:'595986668545',wa:null
  },
  {
    id:5,lat:-25.288448,lng:-57.64311,
    nombre:'Universidad Iberoamericana (UNIBE)',
    dir:'15 de Agosto esq. Ygatimi, Asuncion',
    horario:'Lun - Vie: 8:00 - 19:30 | Sab: 8:00 - 13:00',
    tel:null,wa:'595986100680'
  }
];

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
  if(p.horario)rows.push(`<div class="rc-drow"><span>🕐</span><span>${p.horario}</span></div>`);
  if(p.tel)rows.push(`<div class="rc-drow"><span>📞</span><span>${p.tel}</span></div>`);

  const acts=[];
  acts.push(`<a class="rc-abtn rc-abtn-geo" href="geo:${p.lat},${p.lng}?q=${p.lat},${p.lng}">🗺️ Abrir Maps</a>`);
  acts.push(`<a class="rc-abtn rc-abtn-gm" href="https://www.google.com/maps?q=${p.lat},${p.lng}" target="_blank" rel="noopener noreferrer">🟠 GMaps</a>`);
  acts.push(`<a class="rc-abtn rc-abtn-am" href="https://maps.apple.com/?q=${p.lat},${p.lng}" target="_blank" rel="noopener noreferrer">🍎 Maps</a>`);
  if(p.wa){
    const num=p.wa.replace(/\D/g,'');
    acts.push(`<a class="rc-abtn rc-abtn-wa" href="https://wa.me/${num}" target="_blank" rel="noopener noreferrer"><span class="rc-wa-icon"></span>WhatsApp</a>`);
  }

  dtEl.innerHTML=`<div class="rc-dname">${p.nombre}</div>
    <div class="rc-daddr">${p.dir}</div>
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

loadLeaflet(initMap);
})();
</script>

<br>

<h2> Faltan Mas Lugares? </h2> <a href="web/otros/Archivos/MarkDowns/SerParte.md" > <h5> Se parte ↗️ </h5> </a>
