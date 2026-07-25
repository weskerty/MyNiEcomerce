<div style="text-align:center;position:relative;padding-top:0;margin-top:0">
<style>
._ic{display:block;margin:0 auto 8px}
.sk-bar{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);border-radius:24px;padding:10px 16px;margin-bottom:14px;position:relative;overflow:hidden;transition:border-color .2s,box-shadow .2s}
.sk-bar:focus-within{border-color:rgba(56,189,248,.4);box-shadow:0 0 0 3px rgba(56,189,248,.08),0 8px 32px rgba(0,0,0,.25)}
.sk-bar input[type=text]{flex:1;background:none;border:none;outline:none;color:white;font-size:.9em;min-width:0;font-family:inherit;position:relative;z-index:1}
.sk-bar input[type=text]::placeholder{color:rgba(255,255,255,.45)}
.sk-home{font-size:1.3rem;text-decoration:none;flex-shrink:0;line-height:1;opacity:.8;transition:opacity .2s,transform .2s;position:relative;z-index:1}
.sk-home:hover{opacity:1;transform:scale(1.15)}
.sk-ib{background:none;border:none;color:white;cursor:pointer;font-size:1.15rem;flex-shrink:0;padding:0 2px;opacity:.7;transition:opacity .2s,transform .2s;line-height:1;position:relative;z-index:1;min-width:1.6em;text-align:center;font-family:inherit}
.sk-ib:hover{opacity:1;transform:scale(1.1)}
.sk-ib:disabled{opacity:.3;cursor:not-allowed;transform:none}
.sk-bar.sk-cd::after{content:'';position:absolute;left:0;top:0;height:100%;width:var(--sk-cd-p,0%);background:rgba(56,189,248,.13);transition:width .1s linear;pointer-events:none;z-index:0}
.sk-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:white;padding:10px 22px;border-radius:12px;font-size:.88em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999;white-space:nowrap}
.sk-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.wt-card{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);border-radius:20px;padding:18px 16px;margin-bottom:10px;text-align:left}
.wt-city{font-size:1.3em;font-weight:600;color:white;text-align:center}
.wt-sub{font-size:.78em;color:rgba(255,255,255,.5);text-align:center;margin-top:1px}
.wt-temp{font-size:5rem;font-weight:200;color:white;line-height:1;text-align:center;margin:4px 0}
.wt-desc{font-size:1em;color:rgba(255,255,255,.75);text-transform:capitalize;text-align:center}
.wt-minmax{font-size:.92em;color:rgba(255,255,255,.55);text-align:center;margin-top:4px}
.wt-minmax b{color:rgba(255,255,255,.85);font-weight:600}
.wt-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.wt-st{background:rgba(255,255,255,.06);border-radius:11px;padding:9px 11px;display:flex;align-items:center;gap:8px}
.wt-st span:first-child{font-size:1.2rem;flex-shrink:0}
.wt-sl{display:flex;flex-direction:column}
.wt-sk{font-size:.67em;color:rgba(255,255,255,.38);text-transform:uppercase;letter-spacing:.04em}
.wt-sv{font-size:.87em;color:white;font-weight:600}
.wt-sec{color:rgba(255,255,255,.42);font-size:.75em;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px}
.wt-hr{display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none}
.wt-hr::-webkit-scrollbar{display:none}
.wt-hr-it{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.09);border-radius:12px;padding:8px 9px;min-width:58px;display:flex;flex-direction:column;align-items:center;gap:3px;flex-shrink:0;transition:background .15s}
.wt-hr-it.wt-sun-it{background:rgba(255,200,80,.08);border-color:rgba(255,200,80,.18)}
.wt-hr-h{font-size:.68em;color:rgba(255,255,255,.48)}
.wt-hr-ic{font-size:1.25rem;line-height:1}
.wt-hr-t{font-size:.83em;font-weight:700;color:white}
.wt-hr-r{font-size:.63em;color:#7dd3fc}
.wt-fc{display:flex;gap:7px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none}
.wt-fc::-webkit-scrollbar{display:none}
.wt-fc-d{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.09);border-radius:13px;padding:10px 9px;min-width:68px;display:flex;flex-direction:column;align-items:center;gap:4px;flex-shrink:0}
.wt-fc-dn{font-size:.7em;color:rgba(255,255,255,.5);text-transform:capitalize}
.wt-fc-ic{font-size:1.5rem;line-height:1}
.wt-fc-hi{font-size:.88em;font-weight:700;color:white}
.wt-fc-lo{font-size:.73em;color:rgba(255,255,255,.42)}
.wt-fc-pp{font-size:.65em;color:#7dd3fc}
.wt-msg{text-align:center;color:rgba(255,255,255,.42);font-size:.88em;padding:28px 0}
.wt-rec{text-align:center;font-size:.9em;color:rgba(255,255,255,.75)}
.wt-rec b{color:white}
.wt-ld{display:flex;flex-direction:column;align-items:center;padding:36px 0;gap:8px}
.wt-ld span{color:rgba(255,255,255,.5);font-size:.88em}
.wt-sug{display:none;background:rgba(18,18,28,.97);border:1px solid rgba(255,255,255,.12);border-radius:14px;overflow:hidden;margin-top:-8px;margin-bottom:10px}
.wt-sug-it{padding:10px 16px;cursor:pointer;color:white;font-size:.88em;border-bottom:1px solid rgba(255,255,255,.06);transition:background .15s}
.wt-sug-it:last-child{border-bottom:none}
.wt-sug-it:hover{background:rgba(255,255,255,.1)}
</style>

<img class="_ic" src="web/otros/Archivos/Imagenes/Permanente/ICON.avif" width="90px">

<div class="sk-bar" id="wt-bar">
  <a class="sk-home" href="web/es.html">🏠</a>
  <input id="wt-q" type="text" placeholder="Buscar ciudad en Paraguay...">
  <button class="sk-ib" id="wt-sbtn">🔍</button>
  <button class="sk-ib" id="wt-gbtn" title="Mi ubicacion">📍</button>
</div>
<div class="wt-sug" id="wt-sug"></div>
<div id="wt-main"></div>

<div class="sk-toast" id="wt-toast"></div>

<script>
(function(){
  const CD=8000;
  const WI={
    200:'⛈️',201:'⛈️',202:'⛈️',210:'🌩️',211:'🌩️',212:'🌩️',221:'🌩️',230:'⛈️',231:'⛈️',232:'⛈️',
    300:'🌦️',301:'🌦️',302:'🌧️',310:'🌦️',311:'🌧️',312:'🌧️',313:'🌦️',314:'🌧️',321:'🌦️',
    500:'🌧️',501:'🌧️',502:'🌧️',503:'🌧️',504:'🌧️',511:'🌨️',520:'🌦️',521:'🌦️',522:'🌧️',531:'🌦️',
    600:'❄️',601:'❄️',602:'❄️',611:'🌨️',612:'🌨️',613:'🌨️',615:'🌨️',616:'🌨️',620:'❄️',621:'❄️',622:'❄️',
    701:'🌫️',711:'🌫️',721:'🌫️',731:'🌪️',741:'🌫️',751:'🌫️',761:'🌫️',762:'🌋',771:'🌬️',781:'🌪️',
    800:'☀️',801:'🌤️',802:'⛅',803:'🌥️',804:'☁️'
  };
  const WA=window.__CFG?.waitAnim||'';
  let _cdEnd=0,_cdRaf=null,_ac=null,_sac=null,_sugDebounce,_rac=null;

  const mainEl=document.getElementById('wt-main');
  const qEl=document.getElementById('wt-q');
  const sugEl=document.getElementById('wt-sug');
  const tEl=document.getElementById('wt-toast');

  function toast(m){tEl.textContent=m;tEl.classList.add('show');clearTimeout(_tt);_tt=setTimeout(()=>tEl.classList.remove('show'),2800);}
  function wi(id){return WI[id]||'🌡️';}
  function R(n){return Math.round(n);}

  function fmtT(ts,tz){return new Date((ts+tz)*1000).toLocaleTimeString('es-PY',{hour:'2-digit',minute:'2-digit',timeZone:'UTC'});}
  function fmtDay(ts,tz,i){
    if(i===0)return'Hoy';
    return new Date((ts+tz)*1000).toLocaleDateString('es-PY',{weekday:'short',timeZone:'UTC'});
  }
  function windDir(d){return['N','NE','E','SE','S','SO','O','NO'][Math.round(d/45)%8];}

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
    mainEl.innerHTML=`<div class="wt-ld"><img class="wait-anim" src="${WA}"><span>Cargando clima...</span></div>`;
  }

  function mkHourItems(list,w,tz){
    const items=list.slice(0,8).map(x=>({t:x.dt,type:'w',ic:wi(x.weather[0].id),temp:R(x.main.temp),pop:x.pop?R(x.pop*100):0}));
    const now=Math.floor(Date.now()/1000);
    const sr=w.sys.sunrise,ss=w.sys.sunset;
    if(sr>now)items.push({t:sr,type:'sun',ic:'🌅',label:'Amanecer'});
    if(ss>now)items.push({t:ss,type:'sun',ic:'🌇',label:'Ocaso'});
    items.sort((a,b)=>a.t-b.t);
    return items;
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

  const BGP='web/otros/Archivos/Imagenes/Permanente/ClimApp/';
  const bgEl=document.getElementById('bg');
  let _bgPrev=null,_bgSet=!1;

  function bgFile(id,icon){
    if(id>=200&&id<600)return'lluvia';
    if(id>=600&&id<800)return'nublado';
    if(id===803||id===804)return'nublado';
    if(id===800||id===801||id===802)return icon&&icon.endsWith('n')?'despejado_noche':'soleado';
    return null;
  }

  function setBg(id,icon){
    if(!bgEl)return;
    const f=bgFile(id,icon);
    if(!f)return;
    if(!_bgSet){_bgPrev=bgEl.getAttribute('style');_bgSet=!0;}
    bgEl.style.backgroundImage=`url('${BGP}${f}.avif')`;
    bgEl.style.backgroundSize='cover';
    bgEl.style.backgroundPosition='center';
  }

  function restoreBg(){
    if(!_bgSet||!bgEl)return;
    bgEl.setAttribute('style',_bgPrev||'');
    _bgSet=!1;
  }

  function render(dW,dF){
    const w=dW,tz=w.timezone,list=dF.list||[];
    const days=mkDays(list,tz),hrItems=mkHourItems(list,w,tz);
    const d0=days[0],hiT=d0?R(Math.max(...d0.t)):R(w.main.temp_max),loT=d0?R(Math.min(...d0.t)):R(w.main.temp_min);
    const now=new Date().toLocaleTimeString('es-PY',{hour:'2-digit',minute:'2-digit'});
    setBg(w.weather[0].id,w.weather[0].icon);

    let h=`<div class="wt-card">
<div class="wt-city">📍 ${w.name}</div>
<div class="wt-sub">🇵🇾 Paraguay · Actualizado ${now}</div>
<div class="wt-temp">${R(w.main.temp)}°</div>
<div class="wt-desc">${w.weather[0].description}</div>
<div class="wt-minmax">Maxima: <b>${hiT}°</b>  Minima: <b>${loT}°</b></div>
</div>

<div class="wt-card">
<div class="wt-grid">
  <div class="wt-st"><span>💧</span><div class="wt-sl"><span class="wt-sk">Humedad</span><span class="wt-sv">${w.main.humidity}%</span></div></div>
  <div class="wt-st"><span>💨</span><div class="wt-sl"><span class="wt-sk">Viento</span><span class="wt-sv">${R(w.wind.speed*3.6)} km/h ${windDir(w.wind.deg)}</span></div></div>
  <div class="wt-st"><span>👁️</span><div class="wt-sl"><span class="wt-sk">Visibilidad</span><span class="wt-sv">${w.visibility?R(w.visibility/1000)+' km':'--'}</span></div></div>
  <div class="wt-st"><span>📊</span><div class="wt-sl"><span class="wt-sk">Presion</span><span class="wt-sv">${w.main.pressure} hPa</span></div></div>
  <div class="wt-st"><span>☁️</span><div class="wt-sl"><span class="wt-sk">Nubosidad</span><span class="wt-sv">${w.clouds.all}%</span></div></div>
  ${w.wind.gust?`<div class="wt-st"><span>🌬️</span><div class="wt-sl"><span class="wt-sk">Rafaga</span><span class="wt-sv">${R(w.wind.gust*3.6)} km/h</span></div></div>`:''}
</div>
</div>`;

    if(hrItems.length){
      h+=`<div class="wt-card"><div class="wt-sec">🕐 Proximas horas</div><div class="wt-hr">`;
      hrItems.forEach(x=>{
        if(x.type==='sun'){
          h+=`<div class="wt-hr-it wt-sun-it"><span class="wt-hr-h">${fmtT(x.t,tz)}</span><span class="wt-hr-ic">${x.ic}</span><span class="wt-hr-t" style="font-size:.68em">${x.label}</span></div>`;
        }else{
          h+=`<div class="wt-hr-it"><span class="wt-hr-h">${fmtT(x.t,tz)}</span><span class="wt-hr-ic">${x.ic}</span><span class="wt-hr-t">${x.temp}°</span>${x.pop>10?`<span class="wt-hr-r">💧${x.pop}%</span>`:''}</div>`;
        }
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

    mainEl.innerHTML=h+`<div class="wt-card" id="wt-recCard"><div class="wt-sec">📊 Record historico</div><div id="wt-recBody" class="wt-rec"></div></div>`;
    loadRecord(w.coord.lat,w.coord.lon,R(w.main.temp_max),R(w.main.temp_min));
  }

  async function loadRecord(lat,lon,todayHi,todayLo){
    const body=document.getElementById('wt-recBody');
    if(!body)return;
    body.innerHTML=`<img class="wait-anim" src="${WA}" style="width:32px">`;
    if(_rac){_rac.abort();}_rac=new AbortController();
    try{
      const md=new Date().toISOString().slice(5,10);
      const r=await fetch(`https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=1950-01-01&end_date=${new Date().toISOString().slice(0,10)}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`,{signal:_rac.signal});
      const d=await r.json();
      const t=d.daily?.time||[],hi=d.daily?.temperature_2m_max||[],lo=d.daily?.temperature_2m_min||[];
      let hiV=-999,hiY=null,loV=999,loY=null;
      for(let i=0;i<t.length;i++){
        if(t[i].slice(5,10)!==md)continue;
        if(hi[i]>hiV){hiV=hi[i];hiY=t[i].slice(0,4);}
        if(lo[i]<loV){loV=lo[i];loY=t[i].slice(0,4);}
      }
      if(hiY===null){body.innerHTML='Sin datos historicos';return;}
      const curYear=new Date().getFullYear();
      let out='';
      if(todayHi>hiV){out+=`Este es el dia mas caluroso desde ${hiY}<br>`;hiV=todayHi;hiY=curYear;}
      if(todayLo<loV){out+=`Este es el dia mas frio desde ${loY}<br>`;loV=todayLo;loY=curYear;}
      out+=`Record 🥵 ${R(hiV)}° en ${hiY} / 🥶 ${R(loV)}° en ${loY}`;
      body.innerHTML=`<b>${out}</b>`;
    }catch(e){
      if(e.name==='AbortError')return;
      body.innerHTML='No se pudo calcular el record';
    }
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
      p=>{b.disabled=false;b.textContent='📍';localStorage.setItem('UBI','1');loadW({lat:p.coords.latitude,lon:p.coords.longitude});},
      e=>{b.disabled=false;b.textContent='📍';toast('GPS: '+e.message);},
      {timeout:10000,maximumAge:60000}
    );
  }

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

  const _cu=document.getElementById('content');
  if(_cu)_cu.addEventListener('contentUnload',()=>{
    if(_ac){_ac.abort();_ac=null;}
    if(_sac){_sac.abort();_sac=null;}
    if(_rac){_rac.abort();_rac=null;}
    if(_cdRaf){cancelAnimationFrame(_cdRaf);_cdRaf=null;}
    restoreBg();
  },{once:true});

  geoLocate();
})();
</script>

<br>
<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Aplicaciones</a>
</div>