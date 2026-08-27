<div style="text-align:center;position:relative;padding-top:0;margin-top:0" id="ex-app">
<style>
.EX0{color:rgba(255,255,255,.75);font-size:1.3em;font-weight:600;margin:10px 0 18px;min-height:1.5em;overflow-wrap:break-word}
.EX1{border:1px dashed rgba(255,255,255,.25);border-radius:var(--r-md);padding:26px 16px;background:rgba(255,255,255,.04);cursor:pointer;transition:border-color .2s,background .2s}
.EX1:hover,.EX1.on{border-color:rgba(var(--accent-2-rgb),.6);background:rgba(var(--accent-2-rgb),.08)}
.EX1 p{margin:6px 0 0;color:rgba(255,255,255,.5);font-size:.85em}
.EX2{display:grid;grid-template-columns:repeat(auto-fit,minmax(142px,1fr));gap:10px;text-align:left;margin-bottom:12px}
.EX3{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:var(--r-sm);padding:10px 12px}
.EX3 b{display:block;font-size:.72rem;color:rgba(255,255,255,.5);font-weight:400;letter-spacing:.03em;margin-bottom:3px}
.EX3 span{font-size:1rem;font-weight:600;overflow-wrap:break-word}
.EX4{display:grid;gap:3px;text-align:left;margin-bottom:8px}
.EX4 label{font-size:.72rem;color:rgba(255,255,255,.5);letter-spacing:.03em}
.EX4 input{width:100%;font-size:.85em}
.EX4 input[readonly]{opacity:.55}
.EX5{font-family:monospace;font-size:.72rem;text-align:left;white-space:pre;overflow-x:auto;background:rgba(0,0,0,.3);border-radius:10px;padding:10px;margin:0 0 10px;color:rgba(255,255,255,.75);max-height:36vh;overflow-y:auto}
.EX6{text-align:left;font-family:monospace;font-size:.78rem;max-height:46vh;overflow:auto;border:1px solid rgba(255,255,255,.09);border-radius:var(--r-sm);background:rgba(0,0,0,.2)}
.EX6 div{padding:4px 8px;cursor:pointer;border-bottom:1px solid rgba(255,255,255,.05);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.EX6 div:hover{background:rgba(255,255,255,.07)}
.EX6 div.on{background:rgba(var(--accent-2-rgb),.18)}
.EX6 i{color:rgba(255,255,255,.4);font-style:normal}
.EX7{color:rgba(255,255,255,.45);font-size:.8em;margin:10px 0 0}
.EX8{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:14px 0 4px}
.EX9{font-family:monospace;font-size:.78rem;width:100%;min-height:120px;resize:vertical;white-space:pre;overflow-wrap:normal}
</style>

<div style="font-size:2.8rem;margin:0 auto 4px;line-height:1.2">🏷️</div>
<div class="EX0" id="ex-st">Editor de Metadatos</div>

<div class="EX1" id="ex-drop">
<div style="font-size:2rem;line-height:1">📂</div>
<b>Elegi un archivo o arrastralo aca</b>
<p>Foto, video, audio o lo que sea. Nada sale de tu equipo.</p>
</div>
<input type="file" id="ex-in" style="display:none">
<div class="EX8"><button id="ex-dir">📁 Limpiar una carpeta entera</button></div>

<div id="ex-body" class="hide">

<div class="EX2" id="ex-info"></div>

<details open>
<summary>✏️ Campos</summary>
<section>
<div id="ex-fields"></div>
<p class="EX7" id="ex-fnote"></p>
</section>
</details>

<details open>
<summary>🧱 Estructura</summary>
<section>
<div class="EX6" id="ex-tree"></div>
<p class="EX7">Cada fila es un bloque real del archivo. Toca uno para verlo y editarlo en crudo.</p>
</section>
</details>

<details>
<summary>🔬 Crudo</summary>
<section>
<div id="ex-hnone" class="EX7">Elegi un bloque en Estructura.</div>
<div id="ex-hwrap" class="hide">
<pre class="EX5" id="ex-dump"></pre>
<textarea class="EX9" id="ex-hex" spellcheck="false"></textarea>
<p class="EX7">Se muestran hasta 4 KB. Al aplicar tiene que quedar la misma cantidad de bytes: si cambia, se corren los tamanos del contenedor y el archivo queda roto.</p>
<div class="EX8"><button id="ex-hap">Aplicar al bloque</button></div>
</div>
</section>
</details>

<div class="EX8">
<button id="ex-save">💾 Guardar cambios</button>
<button id="ex-strip">🧹 Borrar todo</button>
<button id="ex-dl">⬇️ Descargar</button>
</div>
<p class="EX7" id="ex-note"></p>

</div>

<script>
(function(){
  const $=i=>document.getElementById(i);
  if(!$('ex-drop'))return;

  const LIB={
    exifr:['https://cdn.jsdelivr.net/npm/exifr@7.1.3/dist/full.umd.js',()=>window.exifr],
    piexif:['https://cdn.jsdelivr.net/npm/piexifjs@1.0.6/piexif.js',()=>window.piexif]
  };
  function LD(k){
    const l=LIB[k];
    if(l[1]())return Promise.resolve();
    return new Promise((rs,rj)=>{
      const s=document.createElement('script');
      s.src=l[0];s.async=false;
      s.onload=()=>l[1]()?rs():rj(new Error(k));
      s.onerror=()=>rj(new Error(k));
      document.body.appendChild(s);
    });
  }

  let U=null,NM='',MT='',FM='',BK=[],SL=-1,RW=[],ED=false,LE=[];

  const CH=(u,p,n)=>{let s='';for(let i=0;i<n;i++)s+=String.fromCharCode(u[p+i]);return s};
  const BSTR=u=>{let s='';for(let i=0;i<u.length;i+=8192)s+=String.fromCharCode.apply(null,u.subarray(i,i+8192));return s};
  const F=n=>{const x=['B','KB','MB','GB'];let i=0;n=Math.abs(n);while(n>=1024&&i<3){n/=1024;i++}return (i?n.toFixed(n<10?2:1):Math.round(n))+' '+x[i]};
  const msg=t=>{$('ex-st').textContent=t};
  const note=t=>{$('ex-note').textContent=t};
  const clean=s=>s.replace(/[ \u0000]+$/,'').replace(/^\uFEFF/,'');

  let CT=null;
  function crc(b,st,en){
    if(!CT){CT=new Uint32Array(256);for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xedb88320^(c>>>1):c>>>1;CT[n]=c>>>0}}
    let c=0xffffffff;
    for(let i=st;i<en;i++)c=CT[(c^b[i])&255]^(c>>>8);
    return (c^0xffffffff)>>>0;
  }
  const cat=a=>{let n=0;for(const x of a)n+=x.length;const o=new Uint8Array(n);let p=0;for(const x of a){o.set(x,p);p+=x.length}return o};
  const b32=(n,le)=>{const o=new Uint8Array(4);new DataView(o.buffer).setUint32(0,n>>>0,!!le);return o};
  const bs=s=>{const o=new Uint8Array(s.length);for(let i=0;i<s.length;i++)o[i]=s.charCodeAt(i)&255;return o};
  const txt=u=>{try{return new TextDecoder('utf-8').decode(u)}catch(e){return CH(u,0,u.length)}};

  function FMT(u){
    const s=CH(u,0,12);
    if(u[0]===0xFF&&u[1]===0xD8)return 'jpeg';
    if(u[0]===0x89&&s.slice(1,4)==='PNG')return 'png';
    if(s.slice(0,4)==='RIFF')return s.slice(8,12)==='WEBP'?'webp':(s.slice(8,12)==='WAVE'?'wav':'riff');
    if(CH(u,4,4)==='ftyp'){const b=CH(u,8,4);return (b==='heic'||b==='heix'||b==='mif1')?'heic':(b==='avif'?'avif':'mp4')}
    if(u[0]===0x1A&&u[1]===0x45&&u[2]===0xDF&&u[3]===0xA3)return 'mkv';
    if(s.slice(0,3)==='ID3')return 'mp3';
    if(s.slice(0,4)==='fLaC')return 'flac';
    if(s.slice(0,4)==='OggS')return 'ogg';
    if(s.slice(0,3)==='GIF')return 'gif';
    if(s.slice(0,2)==='II'||s.slice(0,2)==='MM')return 'tiff';
    if(s.slice(0,4)==='%PDF')return 'pdf';
    if(u[0]===0xFF&&(u[1]&0xE0)===0xE0)return 'mp3';
    return 'bin';
  }
  const ISO=f=>f==='mp4'||f==='heic'||f==='avif';

  const JM={0xC0:'SOF0',0xC1:'SOF1',0xC2:'SOF2',0xC4:'DHT',0xDB:'DQT',0xDA:'SOS',0xDD:'DRI',0xFE:'COM'};
  function JL(u,p,m,l){
    if(m<0xE0||m>0xEF)return '';
    const t=CH(u,p+4,Math.min(Math.max(l-2,0),26));
    if(t.indexOf('Exif')===0)return 'EXIF';
    if(t.indexOf('http://ns.adobe.com/xap')===0)return 'XMP';
    if(t.indexOf('Photoshop')===0)return 'IPTC';
    if(t.indexOf('ICC_PROFILE')===0)return 'ICC';
    if(t.indexOf('JFIF')===0)return 'JFIF';
    if(t.indexOf('Adobe')===0)return 'Adobe';
    if(t.indexOf('http://ns.google.com')===0)return 'Google';
    return '';
  }
  const JMETA=b=>b.type==='COM'||['EXIF','XMP','IPTC','ICC','Google'].indexOf(b.label)>=0;

  const PNL={IHDR:'Cabecera',PLTE:'Paleta',IDAT:'Imagen',IEND:'Fin',tEXt:'Texto',zTXt:'Texto comprimido',iTXt:'Texto UTF-8',eXIf:'EXIF',tIME:'Fecha',iCCP:'ICC',pHYs:'Resolucion',gAMA:'Gamma',sRGB:'sRGB',tRNS:'Transparencia',acTL:'Animacion'};
  const PMETA=['tEXt','zTXt','iTXt','eXIf','tIME','iCCP'];

  const BCONT=new Set(['moov','trak','mdia','minf','stbl','udta','edts','dinf','ilst','moof','traf','mvex','tref','iprp','ipco','meta']);
  const ID3L={TIT2:'Titulo',TPE1:'Artista',TALB:'Album',TYER:'Ano',TDRC:'Fecha',TCON:'Genero',COMM:'Comentario',TRCK:'Pista',TPE2:'Artista del album',TCOM:'Compositor',APIC:'Caratula',TENC:'Codificado por',TSSE:'Programa',TPOS:'Disco',TCOP:'Copyright'};
  const MP4L={'©nam':'Titulo','©ART':'Artista','©alb':'Album','©day':'Fecha','©cmt':'Comentario','©gen':'Genero','©too':'Programa','©wrt':'Compositor',desc:'Descripcion',ldes:'Descripcion larga',covr:'Caratula',aART:'Artista del album'};
  const EBL={0x1A45DFA3:'EBML',0x18538067:'Segmento',0x1549A966:'Info',0x1654AE6B:'Pistas',0xAE:'Pista',0x1254C367:'Etiquetas',0x7373:'Etiqueta',0x67C8:'Campo',0x45A3:'Nombre',0x4487:'Valor',0x1F43B675:'Cluster',0x114D9B74:'Indice',0x1C53BB6B:'Cues',0x1941A469:'Adjuntos',0x1043A770:'Capitulos',0x7BA9:'Titulo',0x4D80:'Programa',0x5741:'Aplicacion',0x4461:'Fecha'};
  const EMAS=new Set([0x1A45DFA3,0x18538067,0x1549A966,0x1654AE6B,0xAE,0x1254C367,0x7373,0x67C8,0x1941A469,0x1043A770]);

  function vint(u,p,keep){
    const b=u[p];
    if(b===undefined||b===0)return null;
    let m=0x80,n=1;
    while(n<=8&&!(b&m)){m>>=1;n++}
    if(n>8)return null;
    let v=keep?b:(b&(m-1));
    for(let i=1;i<n;i++)v=v*256+u[p+i];
    return {v,n};
  }

  function scan(u,fm){
    const o=[],dv=new DataView(u.buffer,u.byteOffset,u.byteLength);
    if(fm==='jpeg'){
      o.push({off:0,len:2,hd:2,type:'SOI',label:'Inicio',d:0});
      let p=2;
      while(p<u.length-1){
        if(u[p]!==0xFF){p++;continue}
        const m=u[p+1];
        if(m===0xFF){p++;continue}
        if(m===0x01||(m>=0xD0&&m<=0xD7)){p+=2;continue}
        if(m===0xD9){o.push({off:p,len:2,hd:2,type:'EOI',label:'Fin',d:0});break}
        if(p+4>u.length)break;
        const l=(u[p+2]<<8)|u[p+3];
        if(l<2||p+2+l>u.length)break;
        const nm=JM[m]||(m>=0xE0&&m<=0xEF?'APP'+(m-0xE0):'0x'+m.toString(16));
        o.push({off:p,len:l+2,hd:4,type:nm,label:JL(u,p,m,l),d:0});
        if(m===0xDA){
          let q=p+2+l;
          while(q<u.length-1&&!(u[q]===0xFF&&u[q+1]===0xD9))q++;
          o.push({off:p+2+l,len:q-(p+2+l),hd:0,type:'DATOS',label:'Imagen comprimida',d:0});
          p=q;continue;
        }
        p+=2+l;
      }
    } else if(fm==='png'){
      o.push({off:0,len:8,hd:8,type:'PNG',label:'Firma',d:0});
      let p=8;
      while(p+12<=u.length){
        const l=dv.getUint32(p),t=CH(u,p+4,4);
        if(p+l+12>u.length)break;
        o.push({off:p,len:l+12,hd:8,type:t,label:PNL[t]||'',d:0});
        p+=l+12;
        if(t==='IEND')break;
      }
    } else if(fm==='webp'||fm==='wav'||fm==='riff'){
      o.push({off:0,len:12,hd:12,type:CH(u,8,4),label:'Contenedor RIFF',d:0});
      let p=12;
      while(p+8<=u.length){
        const t=CH(u,p,4),l=dv.getUint32(p+4,true);
        if(p+8+l>u.length)break;
        o.push({off:p,len:l+8,hd:8,type:t,label:'',d:1});
        p+=8+l+(l&1);
      }
    } else if(ISO(fm)){
      (function bx(st,en,d,pt){
        let p=st;
        while(p+8<=en){
          let l=dv.getUint32(p),t=CH(u,p+4,4),h=8;
          if(l===1){if(p+16>en)break;l=Number(dv.getBigUint64(p+8));h=16}
          else if(l===0)l=en-p;
          if(l<h||p+l>en)break;
          o.push({off:p,len:l,hd:h,type:t,label:MP4L[t]||'',d,path:pt+'/'+t});
          if(t==='meta')bx(p+h+4,p+l,d+1,pt+'/'+t);
          else if(BCONT.has(t))bx(p+h,p+l,d+1,pt+'/'+t);
          else if(pt.slice(-4)==='ilst')bx(p+h,p+l,d+1,pt+'/'+t);
          p+=l;
        }
      })(0,u.length,0,'');
    } else if(fm==='mkv'){
      (function eb(st,en,d){
        let p=st,g=0;
        while(p<en&&g<600){
          const i=vint(u,p,true);
          if(!i)break;
          const s=vint(u,p+i.n,false);
          if(!s)break;
          const hd=i.n+s.n;
          let l=s.v;
          if(l>en-p-hd)l=en-p-hd;
          o.push({off:p,len:hd+l,hd,type:'0x'+i.v.toString(16).toUpperCase(),label:EBL[i.v]||'',d});
          if(EMAS.has(i.v)&&d<5)eb(p+hd,p+hd+l,d+1);
          p+=hd+l;g++;
        }
      })(0,u.length,0);
    } else if(fm==='mp3'){
      let end=0;
      if(CH(u,0,3)==='ID3'){
        const sz=((u[6]&127)<<21)|((u[7]&127)<<14)|((u[8]&127)<<7)|(u[9]&127);
        end=Math.min(10+sz,u.length);
        o.push({off:0,len:end,hd:10,type:'ID3v2.'+u[3],label:'Etiqueta',d:0});
        const v4=u[3]>=4;
        let p=10;
        while(p+10<=end){
          const id=CH(u,p,4);
          if(!/^[A-Z0-9]{4}$/.test(id))break;
          const fs=v4?(((u[p+4]&127)<<21)|((u[p+5]&127)<<14)|((u[p+6]&127)<<7)|(u[p+7]&127)):(((u[p+4]<<24)|(u[p+5]<<16)|(u[p+6]<<8)|u[p+7])>>>0);
          if(fs<0||p+10+fs>end)break;
          o.push({off:p,len:10+fs,hd:10,type:id,label:ID3L[id]||'',d:1});
          p+=10+fs;
        }
      }
      const tg=u.length-128;
      const au=tg>0&&CH(u,tg,3)==='TAG'?tg:u.length;
      o.push({off:end,len:au-end,hd:0,type:'AUDIO',label:'Audio',d:0});
      if(au<u.length)o.push({off:au,len:128,hd:3,type:'ID3v1',label:'Etiqueta vieja',d:0});
    } else if(fm==='flac'){
      o.push({off:0,len:4,hd:4,type:'fLaC',label:'Firma',d:0});
      const FB=['STREAMINFO','PADDING','APPLICATION','SEEKTABLE','VORBIS_COMMENT','CUESHEET','PICTURE'];
      let p=4;
      while(p+4<=u.length){
        const last=u[p]&0x80,ty=u[p]&0x7f,l=(u[p+1]<<16)|(u[p+2]<<8)|u[p+3];
        if(p+4+l>u.length)break;
        o.push({off:p,len:4+l,hd:4,type:FB[ty]||('BLOQUE'+ty),label:'',d:0});
        p+=4+l;
        if(last)break;
      }
      o.push({off:p,len:u.length-p,hd:0,type:'AUDIO',label:'Audio',d:0});
    } else if(fm==='gif'){
      o.push({off:0,len:Math.min(13,u.length),hd:13,type:CH(u,0,6),label:'Cabecera',d:0});
    }
    if(!o.length)o.push({off:0,len:u.length,hd:0,type:'ARCHIVO',label:'Sin estructura conocida',d:0});
    return o;
  }

  function tree(){
    const t=$('ex-tree');t.textContent='';
    BK.forEach((b,i)=>{
      const d=document.createElement('div');
      d.style.paddingLeft=(8+b.d*16)+'px';
      const n=document.createElement('span');
      n.textContent=b.type+' ';
      const e=document.createElement('i');
      e.textContent=(b.label?b.label+' ':'')+'· '+F(b.len);
      d.appendChild(n);d.appendChild(e);
      d.onclick=()=>{SL=i;tree();hex()};
      if(i===SL)d.className='on';
      t.appendChild(d);
    });
  }

  function hex(){
    if(SL<0||!BK[SL]){$('ex-hnone').classList.remove('hide');$('ex-hwrap').classList.add('hide');return}
    $('ex-hnone').classList.add('hide');$('ex-hwrap').classList.remove('hide');
    const b=BK[SL],n=Math.min(b.len,4096);
    let d='',h='';
    for(let i=0;i<n;i+=16){
      let a='',x='';
      for(let j=0;j<16;j++){
        if(i+j<n){const v=U[b.off+i+j];x+=v.toString(16).padStart(2,'0')+' ';a+=(v>=32&&v<127)?String.fromCharCode(v):'.'}
        else x+='   ';
      }
      d+=(b.off+i).toString(16).padStart(8,'0')+'  '+x+' '+a+'\n';
      h+=x.trim()+'\n';
    }
    $('ex-dump').textContent=d;
    $('ex-hex').value=h.trim();
  }

  function hap(){
    if(SL<0)return;
    const b=BK[SL],n=Math.min(b.len,4096);
    const t=$('ex-hex').value.trim().split(/[^0-9a-fA-F]+/).filter(Boolean);
    if(t.length!==n){note('Error Crudo: hay '+t.length+' bytes y hacen falta '+n);return}
    const v=new Uint8Array(n);
    for(let i=0;i<n;i++){
      const x=parseInt(t[i],16);
      if(isNaN(x)||x>255){note('Error Crudo: byte invalido en la posicion '+i);return}
      v[i]=x;
    }
    U.set(v,b.off);
    note('Bloque aplicado. Falta descargar.');
    load(U,NM,MT,true);
  }

  async function inflate(u){
    if(!self.DecompressionStream)return null;
    try{
      const r=new Blob([u]).stream().pipeThrough(new DecompressionStream('deflate'));
      return new Uint8Array(await new Response(r).arrayBuffer());
    }catch(e){return null}
  }

  function pngKey(b){
    const d=U.subarray(b.off+8,b.off+b.len-4);
    const z=d.indexOf(0);
    return txt(d.subarray(0,z<0?0:z));
  }

  async function readFields(){
    RW=[];ED=false;LE=[];
    const dv=new DataView(U.buffer,U.byteOffset,U.byteLength);
    if(FM==='jpeg'){
      try{
        await LD('piexif');
        const P=window.piexif;
        const ex=P.load(BSTR(U));
        const MP={'0th':P.TAGS.Image||P.TAGS['0th'],'1st':P.TAGS.Image||P.TAGS['0th'],Exif:P.TAGS.Exif||P.TAGS.Photo,GPS:P.TAGS.GPS};
        for(const g of ['0th','Exif','GPS','1st']){
          if(!ex[g])continue;
          for(const k in ex[g]){
            const inf=MP[g]&&MP[g][k];
            let v=ex[g][k];
            if(typeof v!=='string')v=JSON.stringify(v);
            RW.push({g,k:+k,n:(inf&&inf.name)||('Tag '+k),v,ed:true});
          }
        }
        ED=true;
      }catch(e){LE.push('piexifjs')}
    } else if(FM==='png'){
      for(const b of BK){
        const d=U.subarray(b.off+8,b.off+b.len-4);
        const z=d.indexOf(0);
        if(b.type==='tEXt'){
          RW.push({g:'tEXt',k:txt(d.subarray(0,z)),n:txt(d.subarray(0,z)),v:txt(d.subarray(z+1)),ed:true});
        } else if(b.type==='iTXt'){
          let p=d.indexOf(0,z+3)+1;
          p=d.indexOf(0,p)+1;
          RW.push({g:'iTXt',k:txt(d.subarray(0,z)),n:txt(d.subarray(0,z)),v:txt(d.subarray(p)),ed:true});
        } else if(b.type==='zTXt'){
          const inf=await inflate(d.subarray(z+2));
          RW.push({g:'zTXt',k:txt(d.subarray(0,z)),n:txt(d.subarray(0,z)),v:inf?txt(inf):'(comprimido)',ed:false});
        }
      }
      ED=true;
    } else if(FM==='mp3'){
      for(const b of BK){
        if(b.d!==1||b.len<11)continue;
        const enc=U[b.off+10];
        const raw=U.subarray(b.off+11,b.off+b.len);
        let v='';
        if(enc===1||enc===2){try{v=new TextDecoder(enc===1?'utf-16':'utf-16be').decode(raw)}catch(e){v=''}}
        else v=txt(raw);
        RW.push({g:'ID3',k:b.type,n:ID3L[b.type]||b.type,v:clean(v),ed:/^T/.test(b.type),raw:U.slice(b.off,b.off+b.len)});
      }
      ED=true;
    } else if(ISO(FM)){
      for(const b of BK){
        if(!b.path||b.path.indexOf('/ilst/')<0||b.type==='data')continue;
        const dt=BK.find(x=>x.type==='data'&&x.off>b.off&&x.off<b.off+b.len);
        if(!dt)continue;
        const ty=dv.getUint32(dt.off+8)&0xffffff;
        const raw=U.subarray(dt.off+16,dt.off+dt.len);
        RW.push({g:'ilst',k:b.type,n:MP4L[b.type]||b.type,v:ty===1?clean(txt(raw)):'('+F(raw.length)+' binario, tipo '+ty+')',ed:ty===1,off:dt.off,len:dt.len});
      }
      ED=RW.length>0;
    } else if(FM==='flac'){
      const vc=BK.find(b=>b.type==='VORBIS_COMMENT');
      if(vc){
        let p=vc.off+4;
        const vl=dv.getUint32(p,true);
        RW.push({g:'FLAC',k:'',n:'Programa',v:txt(U.subarray(p+4,p+4+vl)),ed:false});
        p+=4+vl;
        const n=dv.getUint32(p,true);p+=4;
        for(let i=0;i<n&&p+4<=U.length;i++){
          const l=dv.getUint32(p,true);p+=4;
          const t=txt(U.subarray(p,p+l));p+=l;
          const q=t.indexOf('=');
          if(q<0)continue;
          RW.push({g:'FLAC',k:t.slice(0,q),n:t.slice(0,q),v:t.slice(q+1),ed:true});
        }
        ED=true;
      }
    } else if(FM==='mkv'){
      for(const b of BK){
        if(['Nombre','Valor','Titulo','Programa','Aplicacion','Fecha'].indexOf(b.label)<0)continue;
        RW.push({g:'EBML',k:b.type,n:b.label,v:clean(txt(U.subarray(b.off+b.hd,b.off+b.len))),ed:false});
      }
    }
    if(['jpeg','tiff','png','webp','heic','avif'].indexOf(FM)>=0){
      try{
        await LD('exifr');
        const o=await window.exifr.parse(U,{mergeOutput:false,translateKeys:true,translateValues:true,reviveValues:true,ifd0:true,exif:true,gps:true,interop:true,ifd1:true,iptc:true,xmp:true,icc:true,jfif:true,ihdr:true});
        if(o)for(const g in o){
          if(FM==='jpeg'&&['ifd0','exif','gps','interop','ifd1'].indexOf(g)>=0)continue;
          const v=o[g];
          if(v&&typeof v==='object'&&!(v instanceof Uint8Array)&&!Array.isArray(v)){
            for(const k in v){
              let x=v[k];
              if(x instanceof Uint8Array)x='('+F(x.length)+' binario)';
              else if(x&&typeof x==='object')x=JSON.stringify(x);
              RW.push({g,k,n:k,v:String(x),ed:false});
            }
          } else RW.push({g:'otros',k:g,n:g,v:(v instanceof Uint8Array)?('('+F(v.length)+' binario)'):String(v),ed:false});
        }
      }catch(e){LE.push('exifr')}
    }
  }

  function fields(){
    const c=$('ex-fields');c.textContent='';
    if(!RW.length){$('ex-fnote').textContent=LE.length?('No se pudo cargar '+LE.join(' ni ')+'. Revisa la conexion y volve a abrir el archivo.'):'Este archivo no tiene metadatos legibles. Igual se puede ver y editar en crudo.';return}
    let g='';
    RW.forEach((r,i)=>{
      if(r.g!==g){g=r.g;const h=document.createElement('h3');h.textContent=g;c.appendChild(h)}
      const w=document.createElement('div');w.className='EX4';
      const l=document.createElement('label');l.textContent=r.n;
      const inp=document.createElement('input');
      inp.type='text';inp.value=r.v;
      if(!r.ed)inp.readOnly=true;
      else inp.oninput=()=>{RW[i].v=inp.value;RW[i].mod=true};
      w.appendChild(l);w.appendChild(inp);c.appendChild(w);
    });
    let t=ED?'Los campos atenuados son de solo lectura en este formato.':'Este formato se puede leer y borrar, pero todavia no escribir campo por campo.';
    if(LE.length)t='No se pudo cargar '+LE.join(' ni ')+', asi que faltan campos. Revisa la conexion y volve a abrir el archivo. '+t;
    $('ex-fnote').textContent=t;
  }

  function isoPatch(u,at,oldLen,neu){
    const dv=new DataView(u.buffer,u.byteOffset,u.byteLength);
    const anc=BK.filter(b=>b.path!==undefined&&b.off<at&&b.off+b.len>=at+oldLen);
    const out=cat([u.subarray(0,at),neu,u.subarray(at+oldLen)]);
    const d=neu.length-oldLen;
    if(d===0)return out;
    const od=new DataView(out.buffer);
    for(const a of anc){
      if(a.hd===16)od.setBigUint64(a.off+8,dv.getBigUint64(a.off+8)+BigInt(d));
      else od.setUint32(a.off,dv.getUint32(a.off)+d);
    }
    const mo=BK.find(b=>b.type==='moov'&&b.d===0),md=BK.find(b=>b.type==='mdat'&&b.d===0);
    if(mo&&md&&mo.off<md.off){
      for(const b of BK){
        if(b.type!=='stco'&&b.type!=='co64')continue;
        const base=b.off<at?b.off:b.off+d;
        const n=od.getUint32(base+12);
        for(let i=0;i<n;i++){
          const p=base+16+i*(b.type==='stco'?4:8);
          if(p+8>out.length)break;
          if(b.type==='stco')od.setUint32(p,od.getUint32(p)+d);
          else od.setBigUint64(p,od.getBigUint64(p)+BigInt(d));
        }
      }
    }
    return out;
  }

  function id3Build(){
    const fr=[];
    for(const r of RW){
      if(r.g!=='ID3')continue;
      if(!r.ed){fr.push(r.raw);continue}
      if(!r.v)continue;
      const u16=new Uint8Array(2+r.v.length*2);
      u16[0]=0xFF;u16[1]=0xFE;
      for(let i=0;i<r.v.length;i++){const c=r.v.charCodeAt(i);u16[2+i*2]=c&255;u16[3+i*2]=c>>8}
      const body=cat([new Uint8Array([1]),u16]);
      fr.push(cat([bs(r.k),b32(body.length),new Uint8Array([0,0]),body]));
    }
    const body=cat(fr),n=body.length;
    const hdr=cat([bs('ID3'),new Uint8Array([3,0,0]),new Uint8Array([(n>>21)&127,(n>>14)&127,(n>>7)&127,n&127])]);
    const au=BK.find(b=>b.type==='AUDIO'),t1=BK.find(b=>b.type==='ID3v1');
    const tail=[U.subarray(au.off,au.off+au.len)];
    if(t1)tail.push(U.subarray(t1.off,t1.off+t1.len));
    return cat([hdr,body,...tail]);
  }

  async function save(){
    try{
      if(FM==='jpeg'){
        await LD('piexif');
        const P=window.piexif,st=BSTR(U),ex=P.load(st);
        for(const r of RW){
          if(!r.mod||['0th','Exif','GPS','1st'].indexOf(r.g)<0)continue;
          let v=r.v;
          if(v.charAt(0)==='['||/^-?[0-9.]+$/.test(v)){try{v=JSON.parse(v)}catch(e){}}
          ex[r.g][r.k]=v;
        }
        U=bs(P.insert(P.dump(ex),st));
      } else if(FM==='png'){
        const mod=RW.filter(r=>r.mod&&r.ed);
        const keep=[];
        for(const b of BK){
          if(b.type==='PNG'){keep.push(U.subarray(0,8));continue}
          if((b.type==='tEXt'||b.type==='iTXt')&&mod.some(r=>r.k===pngKey(b)))continue;
          keep.push(U.subarray(b.off,b.off+b.len));
        }
        const ins=[];
        for(const r of mod){
          if(r.g!=='tEXt'&&r.g!=='iTXt')continue;
          const body=cat([bs('tEXt'),bs(r.k),new Uint8Array([0]),new TextEncoder().encode(r.v)]);
          ins.push(cat([b32(body.length-4),body,b32(crc(body,0,body.length))]));
        }
        const e=keep.pop();
        U=cat(keep.concat(ins,[e]));
      } else if(FM==='mp3'){
        U=id3Build();
      } else if(FM==='flac'){
        const vc=BK.find(b=>b.type==='VORBIS_COMMENT');
        if(!vc){note('Este FLAC no tiene bloque de comentarios.');return}
        const dvf=new DataView(U.buffer,U.byteOffset,U.byteLength);
        const vl=dvf.getUint32(vc.off+4,true);
        const it=[];
        for(const r of RW){
          if(r.g!=='FLAC'||!r.ed||!r.v)continue;
          const e=new TextEncoder().encode(r.k+'='+r.v);
          it.push(cat([b32(e.length,true),e]));
        }
        const body=cat([b32(vl,true),U.subarray(vc.off+8,vc.off+8+vl),b32(it.length,true)].concat(it));
        const hd=new Uint8Array([U[vc.off],(body.length>>16)&255,(body.length>>8)&255,body.length&255]);
        U=cat([U.subarray(0,vc.off),hd,body,U.subarray(vc.off+vc.len)]);
      } else if(ISO(FM)){
        let u=U;
        const mods=RW.filter(r=>r.mod&&r.ed).sort((a,b)=>b.off-a.off);
        if(!mods.length){note('No hay cambios para guardar.');return}
        for(const r of mods){
          const p=new TextEncoder().encode(r.v);
          const nd=cat([b32(16+p.length),bs('data'),b32(1),b32(0),p]);
          BK=scan(u,FM);
          u=isoPatch(u,r.off,r.len,nd);
        }
        U=u;
      } else {note('Este formato todavia no se puede escribir campo por campo. Se puede borrar todo o editar en crudo.');return}
      await load(U,NM,MT,true);
      note('Cambios aplicados. Falta descargar.');
    }catch(e){note('Error Guardar: '+((e&&e.message)||e))}
  }

  function strip(u,fm,bk){
    if(fm==='jpeg'){
      const k=[];
      for(const b of bk){if(JMETA(b))continue;k.push(u.subarray(b.off,b.off+b.len))}
      return cat(k);
    }
    if(fm==='png'){
      const k=[];
      for(const b of bk){
        if(PMETA.indexOf(b.type)>=0)continue;
        k.push(b.type==='PNG'?u.subarray(0,8):u.subarray(b.off,b.off+b.len));
      }
      return cat(k);
    }
    if(fm==='webp'||fm==='wav'||fm==='riff'){
      const k=[u.slice(0,12)];
      for(const b of bk){
        if(b.d!==1)continue;
        if(['EXIF','XMP ','ICCP','LIST'].indexOf(b.type)>=0)continue;
        k.push(u.subarray(b.off,b.off+b.len+(b.len&1)));
      }
      const o=cat(k);
      new DataView(o.buffer).setUint32(4,o.length-8,true);
      if(CH(o,12,4)==='VP8X')o[20]&=~0x2C;
      return o;
    }
    if(fm==='mp3'){
      const au=bk.find(b=>b.type==='AUDIO');
      return au?u.slice(au.off,au.off+au.len):null;
    }
    if(ISO(fm)){
      const ud=bk.filter(b=>b.type==='udta'||(b.type==='meta'&&b.path&&b.path.indexOf('/moov/meta')===0));
      if(!ud.length)return null;
      let out=u;
      for(const b of ud.slice().sort((a,b)=>b.off-a.off)){
        BK=scan(out,fm);
        out=isoPatch(out,b.off,b.len,new Uint8Array(0));
      }
      return out;
    }
    if(fm==='flac'){
      const bl=bk.filter(b=>b.hd===4&&b.type!=='fLaC'&&b.type!=='AUDIO');
      const kp=bl.filter(b=>['VORBIS_COMMENT','PICTURE','APPLICATION'].indexOf(b.type)<0);
      if(!kp.length)return null;
      const k=[u.slice(0,4)];
      kp.forEach((b,i)=>{
        const s=u.slice(b.off,b.off+b.len);
        s[0]=i===kp.length-1?(s[0]|0x80):(s[0]&0x7f);
        k.push(s);
      });
      const au=bk.find(b=>b.type==='AUDIO');
      if(au)k.push(u.subarray(au.off,au.off+au.len));
      return cat(k);
    }
    return null;
  }

  async function doStrip(){
    const r=strip(U,FM,BK);
    if(!r){note('Este formato todavia no se puede limpiar solo. Se puede editar en crudo.');return}
    U=r;
    await load(U,NM,MT,true);
    note('Metadatos borrados. Falta descargar.');
  }

  function dl(){
    const b=new Blob([U],{type:MT||'application/octet-stream'});
    const u=URL.createObjectURL(b);
    const a=document.createElement('a');
    a.href=u;a.download=NM.replace(/(\.[^.]+)?$/,'-editado$1');
    document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(u),15000);
  }

  async function load(u,nm,mt,keep){
    U=u;NM=nm;MT=mt;FM=FMT(U);BK=scan(U,FM);
    if(!keep){SL=-1;note('')}
    if(SL>=BK.length)SL=-1;
    msg(nm);
    $('ex-body').classList.remove('hide');
    const inf=$('ex-info');inf.textContent='';
    const dat=[['FORMATO',FM.toUpperCase()],['TAMANO',F(U.length)],['TIPO',mt||'desconocido'],['BLOQUES',String(BK.length)]];
    for(const d of dat){
      const c=document.createElement('div');c.className='EX3';
      const b=document.createElement('b');b.textContent=d[0];
      const s=document.createElement('span');s.textContent=d[1];
      c.appendChild(b);c.appendChild(s);inf.appendChild(c);
    }
    tree();hex();
    $('ex-fields').textContent='';
    $('ex-fnote').textContent='Leyendo campos...';
    await readFields();
    fields();
  }

  async function pick(f){
    if(!f)return;
    msg('Leyendo...');
    try{
      const ab=await f.arrayBuffer();
      await load(new Uint8Array(ab),f.name,f.type,false);
    }catch(e){msg('Error Leer');note(String((e&&e.message)||e))}
  }

  const dz=$('ex-drop'),fi=$('ex-in');
  dz.onclick=()=>fi.click();
  fi.onchange=()=>{pick(fi.files[0]);fi.value=''};
  dz.addEventListener('dragover',e=>{e.preventDefault();dz.classList.add('on')});
  dz.addEventListener('dragleave',()=>dz.classList.remove('on'));
  dz.addEventListener('drop',e=>{e.preventDefault();dz.classList.remove('on');if(e.dataTransfer.files[0])pick(e.dataTransfer.files[0])});

  $('ex-save').onclick=save;
  $('ex-strip').onclick=doStrip;
  $('ex-dl').onclick=dl;
  $('ex-hap').onclick=hap;

  $('ex-dir').onclick=async()=>{
    if(!window.showDirectoryPicker){note('Elegir carpeta solo anda en Chromium de escritorio.');return}
    let d;
    try{d=await window.showDirectoryPicker({mode:'readwrite'})}catch(e){return}
    if(!confirm('Se van a reescribir los archivos de esa carpeta sin copia de respaldo. Seguir?'))return;
    let ok=0,no=0,er=0;
    msg('Limpiando carpeta...');
    for await(const en of d.values()){
      if(en.kind!=='file')continue;
      try{
        const f=await en.getFile();
        const u=new Uint8Array(await f.arrayBuffer());
        const fm=FMT(u);
        const r=strip(u,fm,scan(u,fm));
        if(!r){no++;continue}
        const w=await en.createWritable();
        await w.write(r);
        await w.close();
        ok++;
      }catch(e){er++}
    }
    msg('Carpeta lista');
    note('Limpiados '+ok+', salteados '+no+', con error '+er+'. Se reescribieron en el lugar.');
  };

  const cu=$('content');
  if(cu)cu.addEventListener('contentUnload',()=>{U=null;BK=[];RW=[]},{once:true});
})();
</script>

<br>
<a href="web/otros/Archivos/HTML/apps.html" class="back-button">← Volver a Aplicaciones</a>
</div>
