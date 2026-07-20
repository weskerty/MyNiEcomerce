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
.wt-hdr{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px}
.wt-city{font-size:1.2em;font-weight:700;color:white}
.wt-sub{font-size:.75em;color:rgba(255,255,255,.45);margin-top:1px}
.wt-main{display:flex;align-items:center;gap:14px;margin:10px 0 14px}
.wt-icon{font-size:3.8rem;line-height:1;filter:drop-shadow(0 2px 10px rgba(0,0,0,.5))}
.wt-temps{display:flex;flex-direction:column}
.wt-temp{font-size:3rem;font-weight:800;color:white;line-height:1}
.wt-unit{font-size:1.1rem;color:rgba(255,255,255,.45);font-weight:400}
.wt-desc{font-size:.88em;color:rgba(255,255,255,.65);text-transform:capitalize;margin-top:3px}
.wt-fl{font-size:.78em;color:rgba(255,255,255,.4);margin-top:1px}
.wt-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.wt-st{background:rgba(255,255,255,.06);border-radius:11px;padding:9px 11px;display:flex;align-items:center;gap:8px}
.wt-st span:first-child{font-size:1.2rem;flex-shrink:0}
.wt-sl{display:flex;flex-direction:column}
.wt-sk{font-size:.67em;color:rgba(255,255,255,.38);text-transform:uppercase;letter-spacing:.04em}
.wt-sv{font-size:.87em;color:white;font-weight:600}
.wt-sunrow{display:flex;justify-content:space-around;margin-top:10px;background:rgba(255,255,255,.05);border-radius:11px;padding:9px 0}
.wt-sun{display:flex;flex-direction:column;align-items:center;gap:2px}
.wt-sun span:first-child{font-size:1.3rem}
.wt-sun span:last-child{font-size:.7em;color:rgba(255,255,255,.5)}
.wt-sec{color:rgba(255,255,255,.42);font-size:.75em;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px}
.wt-hr{display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none}
.wt-hr::-webkit-scrollbar{display:none}
.wt-hr-it{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.09);border-radius:12px;padding:8px 9px;min-width:58px;display:flex;flex-direction:column;align-items:center;gap:3px;flex-shrink:0;transition:background .15s}
.wt-hr-it:hover{background:rgba(255,255,255,.14)}
.wt-hr-h{font-size:.68em;color:rgba(255,255,255,.48)}
.wt-hr-ic{font-size:1.25rem;line-height:1}
.wt-hr-t{font-size:.83em;font-weight:700;color:white}
.wt-hr-r{font-size:.63em;color:#7dd3fc}
.wt-fc{display:flex;gap:7px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none}
.wt-fc::-webkit-scrollbar{display:none}
.wt-fc-d{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.09);border-radius:13px;padding:10px 9px;min-width:68px;display:flex;flex-direction:column;align-items:center;gap:4px;flex-shrink:0;transition:background .15s}
.wt-fc-d:hover{background:rgba(255,255,255,.14)}
.wt-fc-dn{font-size:.7em;color:rgba(255,255,255,.5);text-transform:capitalize}
.wt-fc-ic{font-size:1.5rem;line-height:1}
.wt-fc-hi{font-size:.88em;font-weight:700;color:white}
.wt-fc-lo{font-size:.73em;color:rgba(255,255,255,.42)}
.wt-fc-pp{font-size:.65em;color:#7dd3fc}
.wt-msg{text-align:center;color:rgba(255,255,255,.42);font-size:.88em;padding:28px 0}
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
  let _cdEnd=0,_cdRaf=null,_ac=null,_sac=null,_sugDebounce;

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
    const w=dW,tz=w.timezone,list=dF.list||[];
    const days=mkDays(list,tz),hrs=list.slice(0,12);
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
      p=>{b.disabled=false;b.textContent='📍';loadW({lat:p.coords.latitude,lon:p.coords.longitude});},
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
    if(_cdRaf){cancelAnimationFrame(_cdRaf);_cdRaf=null;}
  },{once:true});

  geoLocate();
})();
</script>

<br>
<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Aplicaciones</a>
</div>