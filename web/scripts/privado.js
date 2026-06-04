!function(){
if(window.__PG)return;window.__PG=true;

const API='/api/privado';
const PREFIX='web/Privado/';
const SK_U='pg_u',SK_P='pg_p';

const CSS=`
.pg-ov{position:fixed;inset:0;background:rgba(0,0,0,.75);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:9998;padding:20px}
.pg-box{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:20px;padding:24px;width:100%;max-width:340px;color:#fff;font-family:inherit}
.pg-box h3{margin:0 0 16px;font-size:17px;font-weight:700;text-align:center}
.pg-fg{margin-bottom:10px}
.pg-fg label{display:block;font-size:12px;color:rgba(255,255,255,.5);margin-bottom:4px}
.pg-fg input{width:100%;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.15);border-radius:10px;color:#fff;padding:9px 12px;font-size:14px;outline:none;box-sizing:border-box;font-family:inherit}
.pg-fg input:focus{border-color:rgba(79,142,247,.6)}
.pg-btn{width:100%;padding:10px;border:none;border-radius:10px;background:linear-gradient(135deg,#4f8ef7,#a78bfa);color:#fff;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit;margin-top:4px}
.pg-btn:disabled{opacity:.5;cursor:not-allowed}
.pg-err{font-size:12px;color:#f87171;text-align:center;margin-top:8px;min-height:16px}
.pg-load{text-align:center;color:rgba(255,255,255,.5);padding:32px 0;font-size:14px}
`;
const st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);

function gU(){return localStorage.getItem(SK_U);}
function gP(){return localStorage.getItem(SK_P);}
function sC(u,p){localStorage.setItem(SK_U,u);localStorage.setItem(SK_P,p);}
function cC(){localStorage.removeItem(SK_U);localStorage.removeItem(SK_P);}

function curPath(){
  let h;try{h=decodeURIComponent(location.hash.slice(1));}catch{h=location.hash.slice(1);}
  return h;
}

function isPrivado(){return curPath().includes(PREFIX);}

async function AP(action,body){
  const res=await fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action,...body})});
  let data;try{data=await res.json();}catch{data={};}
  return{ok:res.ok,status:res.status,data};
}

function mkLogin(div,onOk){
  div.innerHTML=`<div class="pg-ov"><div class="pg-box"><h3>🔒 Contenido Privado</h3><div class="pg-fg"><label>Usuario</label><input id="pg-u" type="text" autocomplete="username" placeholder="tu_usuario"></div><div class="pg-fg"><label>Contrasena</label><input id="pg-p" type="password" autocomplete="current-password" placeholder="••••••"></div><button class="pg-btn" id="pg-ok">Entrar</button><div class="pg-err" id="pg-er"></div></div></div>`;
  const btnEl=div.querySelector('#pg-ok');
  const errEl=div.querySelector('#pg-er');
  async function doLogin(){
    const u=div.querySelector('#pg-u').value.trim();
    const p=div.querySelector('#pg-p').value;
    if(!u||!p){errEl.textContent='Completa los campos';return;}
    btnEl.disabled=true;btnEl.textContent='Verificando...';
    const{ok,data}=await AP('login',{usuario:u,password:p});
    if(!ok){errEl.textContent=data.error||'Error';btnEl.disabled=false;btnEl.textContent='Entrar';return;}
    sC(u,p);
    onOk(u,p);
  }
  btnEl.addEventListener('click',doLogin);
  div.querySelector('#pg-p').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
}

async function loadPrivado(div,u,p){
  div.innerHTML='<div class="pg-load">🔐 Cargando contenido...</div>';
  const file=curPath();
  const{ok,status,data}=await fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'contenido',usuario:u,password:p,file})})
    .then(async r=>({ok:r.ok,status:r.status,data:r.ok?await r.text():await r.json()}))
    .catch(()=>({ok:false,status:503,data:{}}));
  if(status===401){cC();mkLogin(div,(_u,_p)=>loadPrivado(div,_u,_p));return;}
  if(!ok){div.innerHTML='<div class="pg-load">⚠️ Contenido no disponible</div>';return;}
  const md=window.__md||window.markdownit({html:true,breaks:true,linkify:true});
  div.innerHTML=md.render(data);
}

function run(){
  if(!isPrivado())return;
  const div=document.getElementById('privado');
  if(!div)return;
  const u=gU(),p=gP();
  if(!u||!p){mkLogin(div,(nu,np)=>loadPrivado(div,nu,np));return;}
  loadPrivado(div,u,p);
}

document.addEventListener('contentLoaded',run);
run();
}();