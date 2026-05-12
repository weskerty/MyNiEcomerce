<div style="text-align:center;position:relative;padding-top:0;margin-top:0">
<style>
:root{
--bg1:rgba(255,255,255,.05);
--bg2:rgba(255,255,255,.07);
--bg3:rgba(255,255,255,.1);
--bd1:rgba(255,255,255,.08);
--bd2:rgba(255,255,255,.12);
--tx1:#fff;
--tx2:rgba(255,255,255,.72);
--tx3:rgba(255,255,255,.46);
--ac:rgba(96,165,250,.18);
--ac2:rgba(125,211,252,.32);
--sd:0 10px 30px rgba(0,0,0,.22);
}

.wt-wrap{
padding:14px;
max-width:560px;
}

.sk-bar{
background:linear-gradient(180deg,rgba(255,255,255,.09),rgba(255,255,255,.05));
border:1px solid var(--bd2);
border-radius:28px;
padding:12px 16px;
backdrop-filter:saturate(160%);
box-shadow:var(--sd);
}

.sk-bar:focus-within{
border-color:var(--ac2);
box-shadow:
0 0 0 3px rgba(96,165,250,.08),
0 14px 40px rgba(0,0,0,.28);
}

.sk-home,
.sk-ib{
opacity:.82;
transition:
transform .18s,
opacity .18s,
filter .18s;
}

.sk-home:hover,
.sk-ib:hover{
opacity:1;
transform:translateY(-1px) scale(1.08);
filter:drop-shadow(0 4px 10px rgba(255,255,255,.15));
}

.sk-bar input[type=text]{
font-size:.93rem;
letter-spacing:.01em;
}

.sk-bar input[type=text]::placeholder{
color:rgba(255,255,255,.38);
}

.wt-card{
background:
linear-gradient(
180deg,
rgba(255,255,255,.09),
rgba(255,255,255,.045)
);
border:1px solid var(--bd1);
border-radius:24px;
padding:18px;
margin-bottom:12px;
box-shadow:var(--sd);
transition:
transform .2s,
border-color .2s,
background .2s;
}

.wt-card:hover{
transform:translateY(-2px);
border-color:rgba(255,255,255,.16);
background:
linear-gradient(
180deg,
rgba(255,255,255,.11),
rgba(255,255,255,.055)
);
}

.wt-city{
font-size:1.28em;
letter-spacing:-.02em;
}

.wt-sub,
.wt-time,
.wt-desc,
.wt-fl,
.wt-sk,
.wt-fc-dn,
.wt-hr-h{
color:var(--tx3);
}

.wt-main{
gap:16px;
margin:14px 0 16px;
}

.wt-icon{
font-size:4.4rem;
filter:
drop-shadow(0 6px 18px rgba(0,0,0,.28))
drop-shadow(0 0 18px rgba(255,255,255,.08));
}

.wt-temp{
font-size:3.4rem;
letter-spacing:-.05em;
}

.wt-unit{
color:var(--tx3);
font-size:1rem;
}

.wt-desc{
font-size:.92em;
margin-top:4px;
}

.wt-fl{
font-size:.76em;
margin-top:3px;
}

.wt-grid{
gap:9px;
margin-top:2px;
}

.wt-st{
background:linear-gradient(180deg,var(--bg2),var(--bg1));
border:1px solid rgba(255,255,255,.05);
border-radius:14px;
padding:10px 12px;
transition:
background .18s,
transform .18s;
}

.wt-st:hover{
background:linear-gradient(180deg,var(--bg3),var(--bg2));
transform:translateY(-1px);
}

.wt-st span:first-child{
font-size:1.15rem;
filter:drop-shadow(0 2px 8px rgba(0,0,0,.3));
}

.wt-sv{
font-size:.9em;
font-weight:700;
}

.wt-sunrow{
margin-top:12px;
background:linear-gradient(180deg,var(--bg2),var(--bg1));
border:1px solid rgba(255,255,255,.05);
border-radius:16px;
padding:11px 0;
}

.wt-sec{
font-size:.72em;
letter-spacing:.12em;
margin-bottom:10px;
}

.wt-hr,
.wt-fc{
gap:8px;
padding-bottom:2px;
}

.wt-hr-it,
.wt-fc-d{
background:
linear-gradient(
180deg,
rgba(255,255,255,.08),
rgba(255,255,255,.045)
);
border:none;
border-radius:16px;
box-shadow:0 4px 18px rgba(0,0,0,.12);
transition:
transform .18s,
background .18s;
}

.wt-hr-it{
padding:10px 10px;
min-width:62px;
}

.wt-fc-d{
padding:11px 10px;
min-width:74px;
}

.wt-hr-it:hover,
.wt-fc-d:hover{
transform:translateY(-2px);
background:
linear-gradient(
180deg,
rgba(255,255,255,.12),
rgba(255,255,255,.06)
);
}

.wt-hr-ic{
font-size:1.35rem;
}

.wt-fc-ic{
font-size:1.65rem;
}

.wt-hr-r,
.wt-fc-pp{
color:#7dd3fc;
font-weight:700;
}

.wt-fav-it{
background:
linear-gradient(
180deg,
rgba(255,255,255,.07),
rgba(255,255,255,.04)
);
border:none;
border-radius:16px;
padding:11px 14px;
margin-bottom:8px;
box-shadow:0 4px 16px rgba(0,0,0,.1);
transition:
transform .18s,
background .18s;
}

.wt-fav-it:hover{
transform:translateY(-1px);
background:
linear-gradient(
180deg,
rgba(255,255,255,.11),
rgba(255,255,255,.05)
);
}

.wt-fav-n{
font-size:.92em;
}

.wt-fav-d{
color:var(--tx3);
}

.wt-fav-tmp{
font-size:1.1em;
}

.wt-rm{
opacity:.4;
transition:
opacity .15s,
transform .15s,
color .15s;
}

.wt-rm:hover{
opacity:1;
transform:scale(1.12);
color:#f87171;
}

.wt-addbtn{
margin-top:12px;
background:
linear-gradient(
180deg,
rgba(96,165,250,.2),
rgba(96,165,250,.1)
);
border:1px solid rgba(125,211,252,.18);
border-radius:14px;
padding:10px 15px;
font-size:.84em;
font-weight:600;
letter-spacing:.01em;
box-shadow:0 6px 20px rgba(59,130,246,.12);
transition:
transform .18s,
background .18s,
box-shadow .18s;
}

.wt-addbtn:hover{
transform:translateY(-1px);
background:
linear-gradient(
180deg,
rgba(96,165,250,.28),
rgba(96,165,250,.14)
);
box-shadow:0 10px 28px rgba(59,130,246,.18);
}

.wt-sug{
background:rgba(20,20,30,.88);
border:1px solid rgba(255,255,255,.08);
border-radius:18px;
overflow:hidden;
box-shadow:0 18px 40px rgba(0,0,0,.3);
backdrop-filter:blur(18px) saturate(160%);
}

.wt-sug-it{
padding:12px 16px;
transition:
background .15s,
padding-left .15s;
}

.wt-sug-it:hover{
background:rgba(255,255,255,.08);
padding-left:20px;
}

.sk-toast{
background:rgba(20,20,25,.82);
border:1px solid rgba(255,255,255,.1);
border-radius:16px;
backdrop-filter:blur(20px) saturate(160%);
box-shadow:0 18px 50px rgba(0,0,0,.35);
padding:11px 22px;
}

.wt-msg{
color:rgba(255,255,255,.52);
}

@media(min-width:720px){
.wt-wrap{
max-width:920px;
}

.wt-grid{
grid-template-columns:repeat(3,1fr);
}

.wt-fc,
.wt-hr{
overflow:visible;
flex-wrap:wrap;
}
}
</style>

<img class="_ic" src="web/otros/Archivos/Imagenes/Permanente/ICON.avif" width="90px">

<div class="wt-wrap" id="wt-wrap">
  <div class="sk-bar" id="wt-bar">
    <a class="sk-home" href="web/es.html">🏠</a>
    <input id="wt-q" type="text" placeholder="Buscar ciudad en Paraguay...">
    <button class="sk-ib" id="wt-sbtn">🔍</button>
    <button class="sk-ib" id="wt-gbtn" title="Mi ubicacion">📍</button>
  </div>
  <div class="wt-sug" id="wt-sug"></div>
  <div id="wt-main"></div>
  <div id="wt-favs"></div>
</div>
<div class="sk-toast" id="wt-toast"></div>

<script>
(function(){
  const CD=8000,LS='wt_f_v1';
  const CK=['🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛'];
  const WI={
    200:'⛈️',201:'⛈️',202:'⛈️',210:'🌩️',211:'🌩️',212:'🌩️',221:'🌩️',230:'⛈️',231:'⛈️',232:'⛈️',
    300:'🌦️',301:'🌦️',302:'🌧️',310:'🌦️',311:'🌧️',312:'🌧️',313:'🌦️',314:'🌧️',321:'🌦️',
    500:'🌧️',501:'🌧️',502:'🌧️',503:'🌧️',504:'🌧️',511:'🌨️',520:'🌦️',521:'🌦️',522:'🌧️',531:'🌦️',
    600:'❄️',601:'❄️',602:'❄️',611:'🌨️',612:'🌨️',613:'🌨️',615:'🌨️',616:'🌨️',620:'❄️',621:'❄️',622:'❄️',
    701:'🌫️',711:'🌫️',721:'🌫️',731:'🌪️',741:'🌫️',751:'🌫️',761:'🌫️',762:'🌋',771:'🌬️',781:'🌪️',
    800:'☀️',801:'🌤️',802:'⛅',803:'🌥️',804:'☁️'
  };
  let _cdEnd=0,_cdRaf=null,_cki=0,_ckiv=null,_ac=null,_fac=null,_sac=null,_sugT,_tt;

  const mainEl=document.getElementById('wt-main');
  const favEl=document.getElementById('wt-favs');
  const qEl=document.getElementById('wt-q');
  const sugEl=document.getElementById('wt-sug');
  const tEl=document.getElementById('wt-toast');

  function toast(m){tEl.textContent=m;tEl.classList.add('show');clearTimeout(_tt);_tt=setTimeout(()=>tEl.classList.remove('show'),2800);}
  function wi(id){return WI[id]||'🌡️';}
  function R(n){return Math.round(n);}
  function stopCK(){clearInterval(_ckiv);_ckiv=null;}

  function fmtT(ts,tz){return new Date((ts+tz)*1000).toLocaleTimeString('es-PY',{hour:'2-digit',minute:'2-digit',timeZone:'UTC'});}
  function fmtDay(ts,tz,i){
    if(i===0)return'Hoy';
    return new Date((ts+tz)*1000).toLocaleDateString('es-PY',{weekday:'short',timeZone:'UTC'});
  }
  function windDir(d){return['N','NE','E','SE','S','SO','O','NO'][Math.round(d/45)%8];}

  function getFavs(){try{return JSON.parse(localStorage.getItem(LS)||'[]');}catch{return[];}}
  function saveFavs(f){localStorage.setItem(LS,JSON.stringify(f));}
  function addFav(e){const f=getFavs();if(f.some(x=>x.name===e.name))return;f.unshift(e);if(f.length>10)f.pop();saveFavs(f);renderFavs();}
  function rmFav(n){saveFavs(getFavs().filter(f=>f.name!==n));renderFavs();}

  function startCD(){
    _cdEnd=Date.now()+CD;qEl.readOnly=true;qEl.blur();
    const b=document.getElementById('wt-sbtn'),bar=document.getElementById('wt-bar');
    b.disabled=true;bar.classList.add('sk-cd');
    function tick(){
      const r=_cdEnd-Date.now();
      if(r<=0){b.disabled=false;bar.classList.remove('sk-cd');bar.style.removeProperty('--sk-cd-p');b.textContent='🔍';qEl.readOnly=false;_cdRaf=null;return;}
      bar.style.setProperty('--sk-cd-p',((1-r/CD)*100).toFixed(1)+'%');
      b.textContent=Math.ceil(r/1000)+'s';_cdRaf=requestAnimationFrame(tick);
    }
    _cdRaf=requestAnimationFrame(tick);
  }

  function showLoad(){
    mainEl.innerHTML='<div class="wt-ld"><span id="wt-ck">🕐</span><span>Cargando clima...</span></div>';
    const e=document.getElementById('wt-ck');_cki=0;stopCK();
    _ckiv=setInterval(()=>{if(e)e.textContent=CK[_cki++%12];},150);
  }

  function mkDays(list,tz){
    const m={};
    list.forEach(x=>{
      const k=new Date((x.dt+tz)*1000).toISOString().slice(0,10);
      if(!m[k])m[k]={dt:x.dt,t:[],ic:[],pop:[]};
      m[k].t.push(x.main.temp);m[k].ic.push(x.weather[0].id);m[k].pop.push(x.pop||0);
    });
    return Object.values(m).slice(0,6);
  }

  function render(dW,dF){
    stopCK();
    const w=dW,tz=w.timezone,list=dF.list||[];
    const days=mkDays(list,tz),hrs=list.slice(0,12);
    const isFav=getFavs().some(f=>f.name===w.name);
    const now=new Date().toLocaleTimeString('es-PY',{hour:'2-digit',minute:'2-digit'});

    let h=`<div class="wt-card">
<div class="wt-hdr">
  <div><div class="wt-city">📍 ${w.name}</div><div class="wt-sub">🇵🇾 Paraguay · Actualizado ${now}</div></div>
</div>
<div class="wt-main">
  <span class="wt-icon">${wi(w.weather[0].id)}</span>
  <div class="wt-temps">
    <div class="wt-temp">${R(w.main.temp)}<span class="wt-unit">°C</span></div>
    <div class="wt-desc">${w.weather[0].description}</div>
    <div class="wt-fl">Sensacion ${R(w.main.feels_like)}°C · Max ${R(w.main.temp_max)}° Min ${R(w.main.temp_min)}°</div>
  </div>
</div>
<div class="wt-grid">
  <div class="wt-st"><span>💧</span><div class="wt-sl"><span class="wt-sk">Humedad</span><span class="wt-sv">${w.main.humidity}%</span></div></div>
  <div class="wt-st"><span>💨</span><div class="wt-sl"><span class="wt-sk">Viento</span><span class="wt-sv">${R(w.wind.speed*3.6)} km/h ${windDir(w.wind.deg)}</span></div></div>
  <div class="wt-st"><span>👁️</span><div class="wt-sl"><span class="wt-sk">Visibilidad</span><span class="wt-sv">${w.visibility?R(w.visibility/1000)+' km':'--'}</span></div></div>
  <div class="wt-st"><span>📊</span><div class="wt-sl"><span class="wt-sk">Presion</span><span class="wt-sv">${w.main.pressure} hPa</span></div></div>
  <div class="wt-st"><span>☁️</span><div class="wt-sl"><span class="wt-sk">Nubosidad</span><span class="wt-sv">${w.clouds.all}%</span></div></div>
  ${w.wind.gust?`<div class="wt-st"><span>🌬️</span><div class="wt-sl"><span class="wt-sk">Rafaga</span><span class="wt-sv">${R(w.wind.gust*3.6)} km/h</span></div></div>`:'<div class="wt-st"><span>🌡️</span><div class="wt-sl"><span class="wt-sk">Punto rocio</span><span class="wt-sv">--</span></div></div>'}
</div>
<div class="wt-sunrow">
  <div class="wt-sun"><span>🌅</span><span>${fmtT(w.sys.sunrise,tz)}</span></div>
  <div class="wt-sun"><span>☀️</span><span>Amanecer / Ocaso</span></div>
  <div class="wt-sun"><span>🌇</span><span>${fmtT(w.sys.sunset,tz)}</span></div>
</div>
${!isFav?`<button class="wt-addbtn" id="wt-ab">⭐ Agregar a favoritos</button>`:''}
</div>`;

    if(hrs.length){
      h+=`<div class="wt-card"><div class="wt-sec">🕐 Proximas horas</div><div class="wt-hr">`;
      hrs.forEach(x=>{
        const pp=x.pop?R(x.pop*100):0;
        h+=`<div class="wt-hr-it"><span class="wt-hr-h">${fmtT(x.dt,tz)}</span><span class="wt-hr-ic">${wi(x.weather[0].id)}</span><span class="wt-hr-t">${R(x.main.temp)}°</span>${pp>10?`<span class="wt-hr-r">💧${pp}%</span>`:''}</div>`;
      });
      h+=`</div></div>`;
    }

    if(days.length){
      h+=`<div class="wt-card"><div class="wt-sec">📅 Pronostico 5 dias</div><div class="wt-fc">`;
      days.forEach((d,i)=>{
        const hi=Math.max(...d.t),lo=Math.min(...d.t);
        const ic=d.ic[Math.floor(d.ic.length/2)]||d.ic[0];
        const pp=d.pop.length?R(Math.max(...d.pop)*100):0;
        h+=`<div class="wt-fc-d"><span class="wt-fc-dn">${fmtDay(d.dt,tz,i)}</span><span class="wt-fc-ic">${wi(ic)}</span><span class="wt-fc-hi">${R(hi)}°</span><span class="wt-fc-lo">${R(lo)}°</span>${pp>10?`<span class="wt-fc-pp">💧${pp}%</span>`:''}</div>`;
      });
      h+=`</div></div>`;
    }

    mainEl.innerHTML=h;
    const ab=document.getElementById('wt-ab');
    if(ab)ab.onclick=()=>{
      addFav({name:w.name,lat:w.coord.lat,lon:w.coord.lon,temp:R(w.main.temp),icon:wi(w.weather[0].id),desc:w.weather[0].description});
      ab.remove();toast('Agregado ⭐');
    };
  }

  async function loadW(params){
    if(_ac){_ac.abort();_ac=null;}_ac=new AbortController();
    showLoad();
    try{
      const r=await fetch('/api/weather?'+new URLSearchParams(params),{signal:_ac.signal});
      const d=await r.json();
      if(!r.ok)throw new Error(d.error||r.status);
      render(d.weather,d.forecast);
    }catch(e){
      stopCK();
      if(e.name==='AbortError')return;
      mainEl.innerHTML=`<p class="wt-msg">${e.message==='Solo Paraguay'?'📍 Solo ciudades de Paraguay':'⚠️ '+e.message}</p>`;
    }
  }

  function search(){
    if(Date.now()<_cdEnd)return;
    const q=qEl.value.trim();if(!q)return;
    sugEl.style.display='none';startCD();loadW({q});
  }

  function geoLocate(){
    const b=document.getElementById('wt-gbtn');
    if(!navigator.geolocation){toast('GPS no disponible');return;}
    b.disabled=true;b.textContent='⏳';
    navigator.geolocation.getCurrentPosition(
      p=>{b.disabled=false;b.textContent='📍';loadW({lat:p.coords.latitude,lon:p.coords.longitude});},
      e=>{b.disabled=false;b.textContent='📍';toast('GPS: '+e.message);},
      {timeout:10000,maximumAge:60000}
    );
  }

  let _sugDebounce;
  qEl.addEventListener('input',()=>{
    clearTimeout(_sugDebounce);
    const v=qEl.value.trim();
    if(v.length<2){sugEl.style.display='none';return;}
    _sugDebounce=setTimeout(async()=>{
      if(_sac){_sac.abort();}_sac=new AbortController();
      try{
        const r=await fetch('/api/weather?type=geo&q='+encodeURIComponent(v),{signal:_sac.signal});
        if(!r.ok){sugEl.style.display='none';return;}
        const d=await r.json();
        if(!d.length){sugEl.style.display='none';return;}
        sugEl.innerHTML='';
        d.forEach(c=>{
          const el=document.createElement('div');el.className='wt-sug-it';
          el.textContent=`📍 ${c.name}${c.state?', '+c.state:''}`;
          el.onclick=()=>{qEl.value=c.name;sugEl.style.display='none';if(Date.now()<_cdEnd)return;startCD();loadW({lat:c.lat,lon:c.lon});};
          sugEl.appendChild(el);
        });
        sugEl.style.display='';
      }catch{}
    },380);
  });

  document.addEventListener('click',e=>{if(!sugEl.contains(e.target)&&e.target!==qEl)sugEl.style.display='none';});
  document.getElementById('wt-sbtn').onclick=search;
  document.getElementById('wt-gbtn').onclick=geoLocate;
  qEl.addEventListener('keydown',e=>{if(e.key==='Enter')search();});

  async function renderFavs(){
    const favs=getFavs();
    if(!favs.length){favEl.innerHTML='';return;}
    favEl.innerHTML=`<div class="wt-card"><div class="wt-sec">⭐ Favoritos</div><div id="wt-fl"></div></div>`;
    const fl=document.getElementById('wt-fl');
    favs.forEach(f=>{
      const d=document.createElement('div');d.className='wt-fav-it';
      d.innerHTML=`<div><div class="wt-fav-n">${f.name}</div><div class="wt-fav-d">${f.desc||''}</div></div>
<div class="wt-fav-r"><span class="wt-fav-ic">${f.icon||'🌡️'}</span><span class="wt-fav-tmp" id="ft-${f.name.replace(/\W/g,'_')}">${f.temp!=null?f.temp+'°':'...'}</span><button class="wt-rm">✕</button></div>`;
      d.querySelector('.wt-rm').onclick=e=>{e.stopPropagation();rmFav(f.name);};
      d.onclick=e=>{if(e.target.classList.contains('wt-rm'))return;loadW({lat:f.lat,lon:f.lon});document.getElementById('wt-wrap').scrollIntoView({behavior:'smooth',block:'start'});};
      fl.appendChild(d);
    });
    refreshFavTemps(favs);
  }

  async function refreshFavTemps(favs){
    if(_fac){_fac.abort();}_fac=new AbortController();
    await Promise.all(favs.map(async f=>{
      try{
        const r=await fetch(`/api/weather?lat=${f.lat}&lon=${f.lon}`,{signal:_fac.signal});
        if(!r.ok)return;
        const d=await r.json();
        const el=document.getElementById('ft-'+f.name.replace(/\W/g,'_'));
        if(el&&d.weather){
          const t=R(d.weather.main.temp);el.textContent=t+'°';
          const fs=getFavs(),idx=fs.findIndex(x=>x.name===f.name);
          if(idx>=0){fs[idx].temp=t;fs[idx].icon=wi(d.weather.weather[0].id);fs[idx].desc=d.weather.weather[0].description;saveFavs(fs);}
        }
      }catch{}
    }));
  }

  const _cu=document.getElementById('content');
  if(_cu)_cu.addEventListener('contentUnload',()=>{
    if(_ac){_ac.abort();_ac=null;}
    if(_fac){_fac.abort();_fac=null;}
    if(_sac){_sac.abort();_sac=null;}
    if(_cdRaf){cancelAnimationFrame(_cdRaf);_cdRaf=null;}
    stopCK();
  },{once:true});

  renderFavs();
  geoLocate();
})();
</script>

<br>
<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Aplicaciones</a>
</div>
