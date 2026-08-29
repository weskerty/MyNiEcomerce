<div style="text-align:center;position:relative;padding-top:0;margin-top:0">
<style>
.qr-st{color:rgba(255,255,255,.75);font-size:1.3em;font-weight:600;margin:10px 0 22px;min-height:1.6em;transition:color .2s}
.qr-st.act{color:rgba(56,189,248,.9)}
.qr-st.ok{color:rgba(37,211,102,.9)}
.qr-btns{display:flex;gap:16px;justify-content:center;margin-bottom:18px}
.qr-mi{width:90px;height:90px;flex:0 0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;border-radius:18px;border:none;cursor:pointer;color:white;background:linear-gradient(135deg,rgba(255,255,255,.25),rgba(255,255,255,.05),rgba(255,255,255,.15));transition:transform .2s,opacity .2s;font-family:inherit}
.qr-mi:hover{transform:scale(1.08)}
.qr-mi:disabled{opacity:.35;cursor:not-allowed;transform:none}
.qr-mi-ic{font-size:2rem;line-height:1}
.qr-mi-lb{font-size:.72rem;color:rgba(255,255,255,.8)}
.qr-area{margin:0 auto;max-width:320px;border-radius:16px;overflow:hidden;position:relative;background:rgba(0,0,0,.25)}
.qr-cc{display:block;margin:10px auto 0;background:none;border:none;color:rgba(255,255,255,.45);font-size:.8em;cursor:pointer;font-family:inherit;text-decoration:underline}
.qr-cc:hover{color:rgba(255,255,255,.75)}
.qr-rt{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);border-radius:12px;padding:12px 16px;color:white;font-size:.9em;word-break:break-all;text-align:left;margin-bottom:10px;max-height:160px;overflow-y:auto;white-space:pre-wrap}
.qr-rl{display:inline-block;padding:8px 20px;border-radius:10px;background:rgba(37,211,102,.85);color:white;text-decoration:none;font-size:.9em;margin-bottom:10px;transition:background .2s}
.qr-rl:hover{background:#1ebe5d;color:white;text-decoration:none}
.qr-ac{display:flex;gap:8px;justify-content:center;flex-wrap:wrap}
.qr-btn{padding:8px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.14);color:white;cursor:pointer;font-size:.9em;transition:background .2s;font-family:inherit}
.qr-btn:hover{background:rgba(255,255,255,.24)}
.qr-tk{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:white;padding:10px 22px;border-radius:12px;font-size:.88em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999;white-space:nowrap}
.qr-tk.show{opacity:1;transform:translateX(-50%) translateY(0)}
.qr-modal{display:none;position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.88);overflow-y:auto}
.qr-modal.open{display:flex;flex-direction:column;align-items:center;padding:20px 16px;gap:12px}
.qr-cw{position:relative;max-width:min(90vw,420px);max-height:60vh;overflow:hidden}
.qr-cw img{display:block;max-width:100%;max-height:60vh}
#qr-reader video{width:100%!important;border-radius:0}
#qr-reader img{display:none!important}
.qg-cv{display:block;margin:0 auto;max-width:min(320px,86vw);width:100%;height:auto;border-radius:14px;background:#fff}
.qg-in{width:100%;box-sizing:border-box;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);border-radius:12px;padding:10px 14px;color:white;font-size:.9em;font-family:inherit;outline:none;margin-bottom:10px}
.qg-in:focus{border-color:rgba(56,189,248,.4)}
.qg-row{display:flex;align-items:center;gap:10px;margin:6px 0}
.qg-row label{flex:0 0 92px;text-align:left;color:rgba(255,255,255,.6);font-size:.8em}
.qg-row input[type=range]{flex:1;accent-color:#38bdf8}
.qg-row select{flex:1;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.13);border-radius:10px;color:white;padding:6px 8px;font-family:inherit;font-size:.85em}
.qg-row span{flex:0 0 42px;color:rgba(255,255,255,.5);font-size:.78em;text-align:right}
.qg-adv{margin:10px 0;text-align:left}
.qg-adv summary{cursor:pointer;color:rgba(255,255,255,.6);font-size:.85em;text-align:center}
</style>

<div style="font-size:2.8rem;margin:0 auto 4px;line-height:1.2">🔍</div>
<div class="qr-st" id="qr-st">Lector QR</div>

<div style="padding:0 12px;max-width:100%">

  <div id="qr-idle">
<div class="BOTON-M1">

  <button class="BOTON-M2" id="qr-cb" title="Camara">
    <div class="BOTON-M3">
      <div class="BOTON-M4">📷</div>
      <p class="BOTON-M5">Camara</p>
    </div>
  </button>

  <button class="BOTON-M2" id="qr-fb" title="Subir">
    <div class="BOTON-M3">
      <div class="BOTON-M4">📤</div>
      <p class="BOTON-M5">Subir</p>
    </div>
  </button>

  <button class="BOTON-M2" id="qg-ab" title="Crear">
    <div class="BOTON-M3">
      <div class="BOTON-M4">✨</div>
      <p class="BOTON-M5">Crear</p>
    </div>
  </button>

</div>
    <input type="file" id="qr-in" accept="image/*" style="display:none">
  </div>

  <div id="qg" style="display:none;padding:4px 0 12px">
    <input class="qg-in" id="qg-t" type="text" placeholder="Texto o enlace para el QR">
    <canvas class="qg-cv" id="qg-cv" width="320" height="320"></canvas>
    <div class="qr-ac" style="margin:12px 0">
      <button class="qr-btn" id="qg-ib">🖼 Imagen</button>
      <button class="qr-btn" id="qg-rb" style="display:none">🗑 Quitar</button>
      <button class="qr-btn" id="qg-tb">🔍 Probar escaneo</button>
    </div>
    <input type="file" id="qg-if" accept="image/*" style="display:none">
    <details class="qg-adv">
      <summary>Ajuste fino</summary>
      <div class="qg-row"><label>Densidad</label><select id="qg-v"><option value="0">Automatica</option><option value="5">v5 chico</option><option value="7">v7</option><option value="10">v10</option><option value="14">v14</option><option value="18">v18 denso</option></select></div>
      <div class="qg-row"><label>Correccion</label><select id="qg-e"><option value="H">Alta (30%)</option><option value="Q">Media (25%)</option><option value="M">Baja (15%)</option><option value="L">Minima (7%)</option></select></div>
      <div class="qg-row"><label>Forma</label><select id="qg-sh"><option value="ci">Circulo</option><option value="rd">Redondeado</option><option value="sq">Cuadrado</option></select></div>
      <div class="qg-row"><label>Punto min</label><input type="range" id="qg-mn" min="10" max="80" value="35"><span id="qg-mn-l">35%</span></div>
      <div class="qg-row"><label>Punto max</label><input type="range" id="qg-mx" min="60" max="110" value="100"><span id="qg-mx-l">100%</span></div>
      <div class="qg-row"><label>Fantasma</label><input type="range" id="qg-gh" min="0" max="100" value="70"><span id="qg-gh-l">70%</span></div>
      <div class="qg-row"><label>Umbral</label><input type="range" id="qg-th" min="0" max="90" value="15"><span id="qg-th-l">15%</span></div>
      <div class="qg-row"><label>Saturacion</label><input type="range" id="qg-sa" min="0" max="100" value="40"><span id="qg-sa-l">40%</span></div>
      <div class="qg-row"><label>Color</label><select id="qg-co"><option value="1">De la imagen</option><option value="0">Monocromo</option></select></div>
      <div class="qg-row"><label>Salida</label><select id="qg-px"><option value="512">512 px</option><option value="1024" selected>1024 px</option><option value="2048">2048 px</option></select></div>
    </details>
    <div class="qr-ac">
      <button class="qr-btn" id="qg-pn">⬇️ PNG</button>
      <button class="qr-btn" id="qg-sv">⬇️ SVG</button>
      <button class="qr-btn" id="qg-bk">↩ Volver</button>
    </div>
  </div>

  <div class="qr-area" id="qr-sa" style="display:none">
    <div id="qr-reader"></div>
    <button class="qr-cc" id="qr-cc">Cancelar</button>
  </div>

  <div id="qr-ra" style="display:none;padding:12px 0">
    <div class="qr-rt" id="qr-rt"></div>
    <a class="qr-rl" id="qr-rl" href="#" target="_blank" rel="noopener noreferrer" style="display:none">🔗 Abrir enlace</a>
    <div class="qr-ac">
      <button class="qr-btn" id="qr-cp">📋 Copiar</button>
      <button class="qr-btn" id="qr-ns">🔄 Nuevo</button>
    </div>
  </div>

</div>

<div class="qr-tk" id="qr-tk"></div>

<div class="qr-modal" id="qr-cm">
  <div class="qr-cw"><img id="qr-ci" src="" alt=""></div>
  <div id="qr-cif" style="color:rgba(255,255,255,.55);font-size:.8em;margin-top:4px"></div>
  <div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap;justify-content:center">
    <button class="qr-btn" id="qr-cok">✂️ Recortar</button>
    <button class="qr-btn" id="qr-csk">↩ Sin recorte</button>
    <button class="qr-btn" id="qr-ccl">✕</button>
  </div>
</div>

<script>
(function(){
  const H5Q='https://cdn.jsdelivr.net/npm/html5-qrcode@2.3.8/html5-qrcode.min.js';
  const CJS='https://cdn.jsdelivr.net/npm/cropperjs@1.6.2/dist/cropper.min.js';
  const CCS='https://cdn.jsdelivr.net/npm/cropperjs@1.6.2/dist/cropper.min.css';

  let _cam=null,_cp=null,_pf=null,_res='',_det=false,_tt=null,_blobUrl=null;

  const $=id=>document.getElementById(id);
  const st=$('qr-st'),sa=$('qr-sa'),ra=$('qr-ra'),idle=$('qr-idle');
  const rt=$('qr-rt'),rl=$('qr-rl'),cb=$('qr-cb'),fb=$('qr-fb');
  const inEl=$('qr-in'),cm=$('qr-cm'),ci=$('qr-ci'),cif=$('qr-cif'),tk=$('qr-tk');

  function QS_T(m){tk.textContent=m;tk.classList.add('show');clearTimeout(_tt);_tt=setTimeout(()=>tk.classList.remove('show'),2500);}

  function QS_SZ(raw){
    const t=raw.trim();
    try{const u=new URL(t);if(u.protocol==='http:'||u.protocol==='https:')return{text:t,url:u.href};}catch{}
    return{text:t,url:null};
  }

  function QS_ST(txt,mod){
    st.textContent=txt;
    st.className='qr-st'+(mod?' '+mod:'');
  }

  function QS_SR(raw){
    const{text,url}=QS_SZ(raw);
    _res=text;
    idle.style.display='none';sa.style.display='none';ra.style.display='';
    rt.textContent=text;
    if(url){rl.href=url;rl.style.display='';}
    else{rl.style.display='none';rl.removeAttribute('href');}
    QS_ST('Resultado','ok');
    cb.disabled=false;fb.disabled=false;
  }

  function QS_LS(url){
    return new Promise((res,rej)=>{
      const s=document.createElement('script');s.src=url;s.onload=res;s.onerror=rej;document.head.appendChild(s);
    });
  }

  async function QS_LC(){
    if(window.Cropper)return;
    const l=document.createElement('link');l.rel='stylesheet';l.href=CCS;document.head.appendChild(l);
    await QS_LS(CJS);
  }

  async function QS_LH(){
    if(window.Html5Qrcode)return;
    await QS_LS(H5Q);
  }

  function QS_KK(){
    if(_cam){_cam.stop().catch(()=>{});_cam=null;}
    _det=false;
  }

  async function QS_SC(){
    QS_KK();
    cb.disabled=true;fb.disabled=true;
    idle.style.display='none';ra.style.display='none';
    QS_ST('Iniciando camara...','act');
    try{
      await QS_LH();
      $('qr-reader').innerHTML='';
      _cam=new Html5Qrcode('qr-reader');
      sa.style.display='';
      await _cam.start(
        {facingMode:'environment'},
        {fps:10,qrbox:{width:240,height:240}},
        raw=>{
          if(_det)return;_det=true;
          _cam.stop().catch(()=>{});_cam=null;
          sa.style.display='none';
          QS_SR(raw);
        },
        ()=>{}
      );
      QS_ST('Apunta al QR...','act');cb.disabled=false;fb.disabled=false;
    }catch(e){
      sa.style.display='none';idle.style.display='';
      cb.disabled=false;fb.disabled=false;
      QS_T('Error camara: '+(e.message||e));QS_ST('Lector QR');
    }
  }

  async function QS_SB(input){
    idle.style.display='none';
    QS_ST('Procesando...','act');
    try{
      await QS_LH();
      const div=document.createElement('div');div.style.display='none';document.body.appendChild(div);
      const uid='qr-tmp-'+Date.now();div.id=uid;
      const inst=new Html5Qrcode(uid);
      const f=input instanceof File?input:new File([input],'qr.png',{type:'image/png'});
      try{
        const raw=await inst.scanFile(f,false);
        QS_SR(raw);
      }catch{
        QS_T('No se encontro QR');
        QS_ST('Lector QR');
        idle.style.display='';
        cb.disabled=false;fb.disabled=false;
      }finally{div.remove();}
    }catch(e){
      QS_T('Error: '+(e.message||e));
      QS_ST('Lector QR');
      idle.style.display='';
      cb.disabled=false;fb.disabled=false;
    }
  }

  function QS_CE(open){
    const el=document.getElementById('content');
    if(el)el.style.minHeight=open?(window.innerHeight*1.5)+'px':'';
  }

  async function QS_HF(file){
    if(!file.type.startsWith('image/')){QS_T('Solo imagenes');return;}
    _pf=file;
    QS_KK();
    cb.disabled=true;fb.disabled=true;
    try{await QS_LC();}catch{}
    cif.textContent=file.name;
    QS_CE(true);
    cm.classList.add('open');document.body.style.overflow='hidden';
    const url=URL.createObjectURL(file);
    _blobUrl=url;
    function QS_IC(){
      if(!window.Cropper)return;
      if(_cp){_cp.destroy();_cp=null;}
      _cp=new Cropper(ci,{viewMode:1,dragMode:'move',background:false,autoCropArea:.9,aspectRatio:NaN});
    }
    ci.onload=QS_IC;
    ci.src=url;
    if(ci.complete&&ci.naturalWidth)QS_IC();
  }

  $('qr-cok').onclick=()=>{
    if(!_cp){$('qr-ccl').onclick();return;}
    const canvas=_cp.getCroppedCanvas({imageSmoothingQuality:'high'});
    _cp.destroy();_cp=null;
    if(_blobUrl){URL.revokeObjectURL(_blobUrl);_blobUrl=null;}
    cm.classList.remove('open');document.body.style.overflow='';QS_CE(false);
    _pf=null;
    canvas.toBlob(b=>QS_SB(b),'image/png');
  };

  $('qr-csk').onclick=()=>{
    if(_cp){_cp.destroy();_cp=null;}
    if(_blobUrl){URL.revokeObjectURL(_blobUrl);_blobUrl=null;}
    cm.classList.remove('open');document.body.style.overflow='';QS_CE(false);
    const f=_pf;_pf=null;
    if(f)QS_SB(f);
  };

  $('qr-ccl').onclick=()=>{
    if(_cp){_cp.destroy();_cp=null;}
    if(_blobUrl){URL.revokeObjectURL(_blobUrl);_blobUrl=null;}
    cm.classList.remove('open');document.body.style.overflow='';QS_CE(false);
    _pf=null;cb.disabled=false;fb.disabled=false;
    if(!_res&&sa.style.display==='none'){idle.style.display='';QS_ST('Lector QR');}
  };

  $('qr-cc').onclick=()=>{
    QS_KK();
    sa.style.display='none';idle.style.display='';
    cb.disabled=false;fb.disabled=false;
    QS_ST('Lector QR');
  };

  cb.onclick=QS_SC;
  fb.onclick=()=>{
    if(QG_PD){const f=QG_PD;QG_PD=null;QS_HF(f);return;}
    inEl.click();
  };
  inEl.onchange=e=>{if(e.target.files[0])QS_HF(e.target.files[0]);inEl.value='';};

  $('qr-cp').onclick=async()=>{
    if(!_res)return;
    try{await navigator.clipboard.writeText(_res);QS_T('Copiado');}
    catch{QS_T('Error al copiar');}
  };

  $('qr-ns').onclick=()=>{
    QS_KK();
    sa.style.display='none';ra.style.display='none';idle.style.display='';
    rl.style.display='none';rl.removeAttribute('href');
    rt.textContent='';_res='';
    QS_ST('Lector QR');cb.disabled=false;fb.disabled=false;
  };

  const QG_LIB='https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js';
  const qg=$('qg'),qgc=$('qg-cv');
  const QG_HOME='https://cheagana.com';
  let QG_I=null,QG_IU=null,QG_TO=null,QG_Q=null,QG_PD=null;

  function QG_PR(){
    return{ver:+$('qg-v').value,ecc:$('qg-e').value,sh:$('qg-sh').value,
      mn:+$('qg-mn').value/100,mx:+$('qg-mx').value/100,gh:+$('qg-gh').value/100,
      th:+$('qg-th').value/100,sat:+$('qg-sa').value/100,
      col:$('qg-co').value==='1',px:+$('qg-px').value};
  }

  function QG_M1(txt,ver,ecc){
    try{const q=qrcode(ver,ecc);q.addData(txt);q.make();return q;}
    catch{try{const q=qrcode(0,ecc);q.addData(txt);q.make();return q;}catch{return null;}}
  }

  function QG_G1(img,sz){
    const c=document.createElement('canvas');c.width=c.height=sz;
    const x=c.getContext('2d',{willReadFrequently:true});
    const iw=img.naturalWidth||img.width,ih=img.naturalHeight||img.height;
    const s=Math.max(sz/iw,sz/ih);
    x.drawImage(img,(sz-iw*s)/2,(sz-ih*s)/2,iw*s,ih*s);
    return x.getImageData(0,0,sz,sz);
  }

  function QG_C1(g){
    const bk={};
    for(let i=0;i<g.data.length;i+=4){
      if(g.data[i+3]<128)continue;
      const k=(g.data[i]>>5<<5)+','+(g.data[i+1]>>5<<5)+','+(g.data[i+2]>>5<<5);
      bk[k]=(bk[k]||0)+1;
    }
    const top=Object.keys(bk).sort((a,b)=>bk[b]-bk[a])[0];
    if(!top)return{r:20,g:20,b:20};
    const v=top.split(',').map(Number);
    return{r:v[0],g:v[1],b:v[2]};
  }

  function QG_P1(g,c,r){
    const i=(r*g.width+c)*4;
    return{r:g.data[i],g:g.data[i+1],b:g.data[i+2],a:g.data[i+3]};
  }

  function QG_B1(p,amt){
    const mx=Math.max(p.r,p.g,p.b),mn=Math.min(p.r,p.g,p.b);
    if(mx===mn)return p;
    const f=1+amt;
    const md=(mx+mn)/2;
    const cl=v=>Math.max(0,Math.min(255,Math.round(md+(v-md)*f)));
    return{r:cl(p.r),g:cl(p.g),b:cl(p.b)};
  }

  function QG_A1(n){
    const v=(n-17)/4;
    if(v<2)return[];
    const k=Math.floor(v/7)+2,last=v*4+10;
    if(k===2)return[6,last];
    const st=Math.ceil((last-6)/(k-1)/2)*2,o=[6];
    for(let i=1;i<k;i++)o.push(last-(k-1-i)*st);
    return o;
  }

  function QG_K1(r,c,n,al){
    if(r<8&&c<8)return true;
    if(r<8&&c>=n-8)return true;
    if(r>=n-8&&c<8)return true;
    if(r===6||c===6)return true;
    for(let i=0;i<al.length;i++)for(let j=0;j<al.length;j++){
      const ar=al[i],ac=al[j];
      if((ar<8&&ac<8)||(ar<8&&ac>n-9)||(ar>n-9&&ac<8))continue;
      if(Math.abs(r-ar)<=2&&Math.abs(c-ac)<=2)return true;
    }
    return false;
  }

  function QG_D1(x,cx,cy,rad,sh,col){
    if(rad<=0)return;
    x.fillStyle=col;
    if(sh==='sq'){x.fillRect(cx-rad,cy-rad,rad*2,rad*2);return;}
    if(sh==='rd'&&x.roundRect){x.beginPath();x.roundRect(cx-rad,cy-rad,rad*2,rad*2,rad*.5);x.fill();return;}
    x.beginPath();x.arc(cx,cy,rad,0,6.2832);x.fill();
  }

  function QG_MD(p,L,dom,P){
    if(!P.col)return{r:17,g:17,b:17};
    const b=QG_B1(p,P.sat);
    if(L>.72){const m=(L-.72)/.28*.8;return{r:Math.round(b.r*(1-m)),g:Math.round(b.g*(1-m)),b:Math.round(b.b*(1-m))};}
    return b;
  }

  function QG_R1(){
    if(!QG_Q)return null;
    const P=QG_PR(),n=QG_Q.getModuleCount(),q=4,tot=n+q*2;
    const px=P.px,cell=px/tot,maxR=cell/2;
    qgc.width=qgc.height=px;
    const x=qgc.getContext('2d');
    x.fillStyle='#fff';x.fillRect(0,0,px,px);
    const grid=QG_I?QG_G1(QG_I,n):null,al=QG_A1(n);
    const dom=grid?QG_C1(grid):{r:17,g:17,b:17};
    const fdr=P.col&&grid?'rgb('+Math.round(dom.r*.72)+','+Math.round(dom.g*.72)+','+Math.round(dom.b*.72)+')':'#111';
    for(let r=0;r<n;r++)for(let c=0;c<n;c++){
      const cx=(c+q+.5)*cell,cy=(r+q+.5)*cell;
      const crit=QG_K1(r,c,n,al),dark=QG_Q.isDark(r,c);
      const p=grid?QG_P1(grid,c,r):null;
      const has=!!p&&p.a>60;
      const L=has?(.299*p.r+.587*p.g+.114*p.b)/255:0;
      if(dark){
        if(crit){x.fillStyle=fdr;x.fillRect(cx-cell/2,cy-cell/2,cell+.5,cell+.5);continue;}
        const rad=maxR*(has?Math.min(1.02,P.mn+(P.mx-P.mn)*(1-L)):.98);
        const cc=has?QG_MD(p,L,dom,P):{r:17,g:17,b:17};
        QG_D1(x,cx,cy,rad,P.sh,'rgb('+cc.r+','+cc.g+','+cc.b+')');
      }else if(has&&!crit&&P.gh>0){
        const d=1-L;
        if(d<=P.th)continue;
        const k=(d-P.th)/(1-P.th);
        const cc=P.col?QG_B1(p,P.sat):{r:17,g:17,b:17};
        QG_D1(x,cx+maxR,cy+maxR,maxR*Math.min(.42,.06+.42*P.gh*Math.pow(k,.55)),P.sh,'rgb('+cc.r+','+cc.g+','+cc.b+')');
      }
    }
    return P;
  }

  function QG_SV1(){
    if(!QG_Q)return '';
    const P=QG_PR(),n=QG_Q.getModuleCount(),q=4,tot=n+q*2,px=P.px,cell=px/tot,maxR=cell/2;
    const grid=QG_I?QG_G1(QG_I,n):null,al=QG_A1(n);
    const dom=grid?QG_C1(grid):{r:17,g:17,b:17};
    const fdr=P.col&&grid?'rgb('+Math.round(dom.r*.72)+','+Math.round(dom.g*.72)+','+Math.round(dom.b*.72)+')':'#111';
    const o=['<svg xmlns="http://www.w3.org/2000/svg" width="'+px+'" height="'+px+'" viewBox="0 0 '+px+' '+px+'"><rect width="'+px+'" height="'+px+'" fill="#fff"/>'];
    const sp=(cx,cy,rad,col,al)=>{
      const a=al<1?' opacity="'+al.toFixed(2)+'"':'';
      if(P.sh==='ci')o.push('<circle cx="'+cx.toFixed(1)+'" cy="'+cy.toFixed(1)+'" r="'+rad.toFixed(1)+'" fill="'+col+'"'+a+'/>');
      else o.push('<rect x="'+(cx-rad).toFixed(1)+'" y="'+(cy-rad).toFixed(1)+'" width="'+(rad*2).toFixed(1)+'" height="'+(rad*2).toFixed(1)+'"'+(P.sh==='rd'?' rx="'+(rad*.5).toFixed(1)+'"':'')+' fill="'+col+'"'+a+'/>');
    };
    for(let r=0;r<n;r++)for(let c=0;c<n;c++){
      const cx=(c+q+.5)*cell,cy=(r+q+.5)*cell;
      const crit=QG_K1(r,c,n,al),dark=QG_Q.isDark(r,c);
      const p=grid?QG_P1(grid,c,r):null;
      const has=!!p&&p.a>60;
      const L=has?(.299*p.r+.587*p.g+.114*p.b)/255:0;
      if(dark){
        if(crit){o.push('<rect x="'+(cx-cell/2).toFixed(1)+'" y="'+(cy-cell/2).toFixed(1)+'" width="'+(cell+.5).toFixed(1)+'" height="'+(cell+.5).toFixed(1)+'" fill="'+fdr+'"/>');continue;}
        const cc=has?QG_MD(p,L,dom,P):{r:17,g:17,b:17};
        sp(cx,cy,maxR*(has?Math.min(1.02,P.mn+(P.mx-P.mn)*(1-L)):.98),'rgb('+cc.r+','+cc.g+','+cc.b+')',1);
      }else if(has&&!crit&&P.gh>0){
        const d=1-L;
        if(d<=P.th)continue;
        const k=(d-P.th)/(1-P.th);
        const cc=P.col?QG_B1(p,P.sat):{r:17,g:17,b:17};
        sp(cx+maxR,cy+maxR,maxR*Math.min(.42,.06+.42*P.gh*Math.pow(k,.55)),'rgb('+cc.r+','+cc.g+','+cc.b+')',1);
      }
    }
    o.push('</svg>');
    return o.join('');
  }

  function QG_U1(){
    clearTimeout(QG_TO);
    QG_TO=setTimeout(()=>{
      const t=$('qg-t').value.trim();
      ['mn','mx','gh','th','sa'].forEach(k=>{$('qg-'+k+'-l').textContent=$('qg-'+k).value+'%';});
      if(!t){QG_Q=null;const x=qgc.getContext('2d');qgc.width=qgc.height=320;x.clearRect(0,0,320,320);QS_ST('Crear QR');return;}
      const P=QG_PR();
      QG_Q=QG_M1(t,P.ver,P.ecc);
      if(!QG_Q){QS_ST('Texto muy largo','');QT_ERR();return;}
      QG_R1();
      QS_ST('Crear QR','ok');
    },90);
  }

  function QT_ERR(){QS_T('No entra en ese tamano, subi la densidad');}

  function QG_DL(blob,name){
    const u=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(u),15000);
  }

  function QG_IM1(f){
    if(!f||!f.type.startsWith('image/')){QS_T('Solo imagenes');return;}
    if(QG_IU)URL.revokeObjectURL(QG_IU);
    QG_IU=URL.createObjectURL(f);
    const im=new Image();
    im.onload=()=>{QG_I=im;$('qg-rb').style.display='';QG_U1();};
    im.onerror=()=>{QS_T('Imagen invalida');};
    im.src=QG_IU;
  }

  async function QG_ON(){
    QS_KK();
    QS_ST('Cargando...','act');
    try{if(!window.qrcode)await QS_LS(QG_LIB);}
    catch{QS_T('No se pudo cargar el generador');QS_ST('Lector QR');return;}
    idle.style.display='none';sa.style.display='none';ra.style.display='none';
    qg.style.display='';
    QS_ST('Crear QR');
    if(QG_PD){const f=QG_PD;QG_PD=null;if(!$('qg-t').value.trim())$('qg-t').value=QG_HOME;QG_IM1(f);}
    QG_U1();
  }

  async function QG_SH(blob,name,type){
    if(!navigator.canShare)return false;
    try{
      const f=new File([blob],name,{type});
      if(!navigator.canShare({files:[f]}))return false;
      await navigator.share({files:[f]});
      return true;
    }catch(e){return e&&e.name==='AbortError';}
  }

  async function QG_OUT(blob,name,type){
    if(await QG_SH(blob,name,type))return;
    QG_DL(blob,name);
  }

  function QG_PV(e){
    const its=e.clipboardData&&e.clipboardData.items;
    if(!its)return;
    for(let i=0;i<its.length;i++){
      if(!its[i].type||!its[i].type.startsWith('image/'))continue;
      const f=its[i].getAsFile();
      if(!f)continue;
      e.preventDefault();
      if(qg.style.display!=='none')QG_IM1(f);
      else{QG_PD=null;QS_HF(f);}
      return;
    }
  }

  function QG_OFF(){
    qg.style.display='none';idle.style.display='';
    QS_ST('Lector QR');
    cb.disabled=false;fb.disabled=false;
  }

  $('qg-ab').onclick=QG_ON;
  $('qg-bk').onclick=QG_OFF;
  $('qg-t').addEventListener('input',QG_U1);
  ['qg-v','qg-e','qg-sh','qg-mn','qg-mx','qg-gh','qg-th','qg-sa','qg-co','qg-px'].forEach(id=>{
    $(id).addEventListener('input',QG_U1);
  });
  $('qg-ib').onclick=()=>$('qg-if').click();
  $('qg-if').onchange=e=>{const f=e.target.files[0];e.target.value='';QG_IM1(f);};
  $('qg-rb').onclick=()=>{
    QG_I=null;
    if(QG_IU){URL.revokeObjectURL(QG_IU);QG_IU=null;}
    $('qg-rb').style.display='none';QG_U1();
  };
  $('qg-pn').onclick=()=>{
    if(!QG_Q){QS_T('Escribi algo primero');return;}
    qgc.toBlob(b=>{if(b)QG_OUT(b,'qr.png','image/png');},'image/png');
  };
  $('qg-sv').onclick=()=>{
    if(!QG_Q){QS_T('Escribi algo primero');return;}
    QG_OUT(new Blob([QG_SV1()],{type:'image/svg+xml'}),'qr.svg','image/svg+xml');
  };
  $('qg-tb').onclick=()=>{
    if(!QG_Q){QS_T('Escribi algo primero');return;}
    qgc.toBlob(b=>{if(!b)return;qg.style.display='none';QS_SB(b);},'image/png');
  };

  document.addEventListener('paste',QG_PV);

  const cont=document.getElementById('content');
  if(cont)cont.addEventListener('contentUnload',()=>{
    QS_KK();
    document.removeEventListener('paste',QG_PV);
    if(_cp){_cp.destroy();_cp=null;}
    if(_blobUrl){URL.revokeObjectURL(_blobUrl);_blobUrl=null;}
    if(QG_IU){URL.revokeObjectURL(QG_IU);QG_IU=null;}
    if(cm.classList.contains('open')){cm.classList.remove('open');document.body.style.overflow='';QS_CE(false);}
    clearTimeout(_tt);clearTimeout(QG_TO);
  },{once:true});

  (async()=>{
    try{
      const d=await fetch('/_share_pending').then(r=>r.json());
      if(!d)return;
      const b=d.blobs&&d.blobs[0];
      if(b&&b.type&&b.type.startsWith('image/')){
        await fetch('/_share_clear',{method:'POST'});
        QG_PD=new File([new Uint8Array(b.data)],b.name||'imagen.png',{type:b.type});
        QS_ST('Imagen recibida: leer o crear','act');
        return;
      }
      const t=((d.url||'')+' '+(d.text||'')).trim();
      if(!t)return;
      await fetch('/_share_clear',{method:'POST'});
      await QG_ON();
      $('qg-t').value=t;
      QG_U1();
    }catch{}
  })();
})();
</script>


</br>

<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Applicaciones </a>

</br>

<div id="sh"></div>
