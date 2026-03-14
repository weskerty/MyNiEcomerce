require('dotenv').config();
const express=require('express');
const cors=require('cors');
const multer=require('multer');
const fs=require('fs');
const fsp=require('fs/promises');
const path=require('path');
const os=require('os');
const {spawn}=require('child_process');
const crypto=require('crypto');

const PORT=process.env.PORT||3387;
const BASE=path.resolve((process.env.BASE_PATH||path.join(os.homedir(),'Proyectos/YoGano')).replace(/^~/,os.homedir()));
const CM=process.env.CONVERT_MODE||'browser';
const SESSION_TIMEOUT=parseInt(process.env.SESSION_TIMEOUT||'10')*60*1000;
const USERS=Object.fromEntries(
  (process.env.USERS||'').split(',').filter(Boolean)
    .map(u=>{const[k,...v]=u.split(':');return[k,v.join(':')];})
);

console.log(`[CFG] BASE: ${BASE}`);
console.log(`[CFG] CONVERT_MODE: ${CM}`);
console.log(`[CFG] SESSION_TIMEOUT: ${SESSION_TIMEOUT/60000}min`);
console.log(`[CFG] Usuarios: ${Object.keys(USERS).join(', ')||'(ninguno - sin auth)'}`);

const sessions={};
const userSession={};
const sessionTimers={};
const noAuth=Object.keys(USERS).length===0;

function mkToken(){return crypto.randomBytes(32).toString('hex');}

function clearSession(tk){
  const u=sessions[tk];
  if(u){
    delete sessions[tk];
    delete userSession[u];
    if(sessionTimers[tk]){clearTimeout(sessionTimers[tk]);delete sessionTimers[tk];}
    console.log(`[AUTH] Sesion expirada: ${u}`);
  }
}

function touchSession(tk){
  if(!sessions[tk])return;
  if(sessionTimers[tk])clearTimeout(sessionTimers[tk]);
  sessionTimers[tk]=setTimeout(()=>clearSession(tk),SESSION_TIMEOUT);
}

function auth(req,res,next){
  if(noAuth)return next();
  const tk=req.headers['x-token'];
  if(!tk||!sessions[tk])return res.status(401).json({error:'No autorizado'});
  req.user=sessions[tk];
  touchSession(tk);
  next();
}

const app=express();
app.use(cors({origin:true,credentials:true}));
app.use(express.json({limit:'50mb'}));
app.use((req,res,next)=>{console.log(`[REQ] ${req.method} ${req.path}`);next();});
app.use(express.static(__dirname));

const up=multer({dest:os.tmpdir(),limits:{fileSize:100*1024*1024}});

app.get('/api/config',(req,res)=>{
  res.json({authRequired:!noAuth,convertMode:CM});
});

app.post('/api/login',(req,res)=>{
  if(noAuth)return res.json({ok:true,token:'noauth',user:'guest'});
  const{user,pass}=req.body;
  if(!user||!pass||USERS[user]!==pass)return res.status(401).json({error:'Credenciales invalidas'});
  if(userSession[user]){
    console.log(`[AUTH] Rechazado: '${user}' ya tiene sesion`);
    return res.status(409).json({error:`'${user}' ya tiene una sesion activa`});
  }
  const tk=mkToken();
  sessions[tk]=user;
  userSession[user]=tk;
  touchSession(tk);
  console.log(`[AUTH] Login: ${user}`);
  res.json({ok:true,token:tk,user});
});

app.post('/api/logout',auth,(req,res)=>{
  const tk=req.headers['x-token'];
  clearSession(tk);
  res.json({ok:true});
});

function safe(p){
  try{
    const r=path.resolve(BASE,p);
    if(!r.startsWith(BASE+path.sep)&&r!==BASE)return null;
    return r;
  }catch{return null;}
}

async function safeMoveFile(src,dest){
  try{
    await fsp.rename(src,dest);
  }catch(e){
    if(e.code==='EXDEV'){
      await fsp.copyFile(src,dest);
      await fsp.unlink(src);
    }else{throw e;}
  }
}

async function walk(dir){
  const g={};
  async function w(d){
    const ents=await fsp.readdir(d,{withFileTypes:true});
    const imgs=ents.filter(e=>e.isFile()&&/\.(jpg|jpeg|png|gif|webp|avif)$/i.test(e.name));
    const links=ents.filter(e=>e.isFile()&&/\.(html|md)$/i.test(e.name));
    if(imgs.length){
      const rp=path.relative(dir,d)||'.';
      const gk=rp==='.'?'root':rp.replace(/[/\\]/g,'_');
      const lm={};
      links.forEach(l=>lm[path.parse(l.name).name]=l.name);
      const gi=[];
      for(const img of imgs){
        const nm=path.parse(img.name).name;
        const rroot=path.relative(BASE,d).replace(/\\/g,'/');
        const it={image:`${rroot}/${img.name}`,name:nm};
        if(rp!='.')it.path=rp.replace(/\\/g,'/');
        const lk=lm[nm];
        if(lk)it.link=`${rroot}/${lk}`;
        gi.push(it);
      }
      g[gk]={images:gi};
    }
    for(const e of ents)if(e.isDirectory())await w(path.join(d,e.name));
  }
  await w(dir);
  return g;
}

let WQ=Promise.resolve();
function enqueue(fn){
  const p=WQ.then(()=>fn());
  WQ=p.catch(e=>console.error('[QUEUE]',e.message));
  return p;
}

function launchChild(script,tag){
  return new Promise(res=>{
    const p=path.join(__dirname,script);
    console.log(`${tag} Lanzando ${script}...`);
    const ch=spawn('node',[p,BASE],{cwd:BASE,stdio:['ignore','pipe','pipe'],detached:false});
    ch.stdout.on('data',d=>process.stdout.write(`${tag} ${d}`));
    ch.stderr.on('data',d=>process.stderr.write(`${tag} ${d}`));
    ch.on('close',code=>{console.log(`${tag} ${script} termino (exit ${code})`);res();});
    ch.on('error',e=>{console.log(`${tag} ${script} error: ${e.message}`);res();});
  });
}

async function runPipeline(){
  await launchChild('scripts/converter.js','[CONV]');
  await launchChild('scripts/git.js','[GIT]');
}

setInterval(()=>launchChild('scripts/git.js','[GIT]'),90*60*1000);

app.get('/api/scan',auth,async(req,res)=>{
  const p=req.query.path||'web/Dinamico';
  const f=safe(p);
  if(!f)return res.status(403).json({error:'Invalid'});
  if(!fs.existsSync(f))return res.status(400).json({error:'Not exist'});
  const g=await walk(f).catch(e=>{res.status(500).json({error:e.message});return null;});
  if(g)res.json({galleries:g});
});

app.get('/api/list',auth,async(req,res)=>{
  const f=safe(req.query.path||'');
  if(!f)return res.status(403).json({error:'Invalid'});
  const st=await fsp.stat(f).catch(()=>null);
  if(!st?.isDirectory())return res.status(400).json({error:'Not dir'});
  const ents=await fsp.readdir(f,{withFileTypes:true});
  res.json({files:ents.map(e=>({name:e.name,type:e.isDirectory()?'dir':'file',size:e.isFile()?fs.statSync(path.join(f,e.name)).size:0}))});
});

app.get('/api/read',auth,async(req,res)=>{
  const f=safe(req.query.path||'');
  if(!f)return res.status(403).json({error:'Invalid'});
  const st=await fsp.stat(f).catch(()=>null);
  if(!st?.isFile())return res.status(400).json({error:'Not file'});
  try{res.json({content:await fsp.readFile(f,'utf8')});}
  catch{const b=await fsp.readFile(f);res.json({content:b.toString('hex'),binary:true});}
});

app.post('/api/write',auth,async(req,res)=>{
  const{path:p,content,binary}=req.body;
  const f=safe(p);
  if(!f)return res.status(403).json({error:'Invalid'});
  try{
    await enqueue(async()=>{
      await fsp.mkdir(path.dirname(f),{recursive:true});
      if(binary)await fsp.writeFile(f,Buffer.from(content,'hex'));
      else await fsp.writeFile(f,content,'utf8');
    });
    res.json({ok:true});
  }catch(e){res.status(500).json({error:e.message});}
});

app.post('/api/upload',auth,up.single('file'),async(req,res)=>{
  if(!req.file)return res.status(400).json({error:'No file'});
  const dest=safe(req.body.destPath);
  if(!dest)return res.status(403).json({error:'Invalid path'});
  try{
    await enqueue(async()=>{
      await fsp.mkdir(path.dirname(dest),{recursive:true});
      await safeMoveFile(req.file.path,dest);
    });
    res.json({ok:true,path:req.body.destPath});
  }catch(e){
    await fsp.unlink(req.file.path).catch(()=>{});
    res.status(500).json({error:e.message});
  }
});

app.post('/api/rename',auth,async(req,res)=>{
  const{old:op,new:np}=req.body;
  const of_=safe(op),nf=safe(np);
  if(!of_||!nf)return res.status(403).json({error:'Invalid'});
  try{
    await enqueue(async()=>{
      if(!fs.existsSync(of_))throw new Error('Old not exist');
      await fsp.mkdir(path.dirname(nf),{recursive:true});
      if(fs.existsSync(nf)&&of_!==nf)await fsp.unlink(nf);
      await fsp.rename(of_,nf);
    });
    res.json({ok:true});
  }catch(e){res.status(500).json({error:e.message});}
});

app.delete('/api/delete',auth,async(req,res)=>{
  const f=safe(req.query.path||'');
  if(!f)return res.status(403).json({error:'Invalid'});
  try{
    await enqueue(async()=>{
      const st=await fsp.stat(f).catch(()=>null);
      if(!st)return;
      if(st.isDirectory())await fsp.rm(f,{recursive:true,force:true});
      else await fsp.unlink(f);
    });
    res.json({ok:true});
  }catch(e){res.status(500).json({error:e.message});}
});

app.post('/api/stock',auth,async(req,res)=>{
  const{imgPath,mdPath,delta,devolucion}=req.body;
  if(!imgPath||delta==null)return res.status(400).json({error:'imgPath y delta requeridos'});
  let result={};
  try{
    await enqueue(async()=>{
      const imgF=safe(imgPath);
      if(!imgF||!fs.existsSync(imgF))throw new Error('Imagen no existe: '+imgPath);
      const dir=path.dirname(imgF);
      const parsed=path.parse(imgF);
      const nm=parsed.name,ext=parsed.ext;
      const mCD=nm.match(/CD=(\d+)/);
      if(!mCD)throw new Error('CD= no encontrado en: '+nm);
      const cdActual=parseInt(mCD[1]);
      const cdNuevo=devolucion?cdActual+Math.abs(delta):cdActual-Math.abs(delta);
      if(!devolucion&&cdNuevo<0)throw new Error(`Stock insuficiente: CD=${cdActual} delta=${delta}`);
      const nmNuevo=nm.replace(/CD=\d+/,`CD=${cdNuevo}`);
      console.log(`[STOCK] ${nm} CD:${cdActual}→${cdNuevo} (${devolucion?'+':'-'}${Math.abs(delta)})`);
      await fsp.rename(imgF,path.join(dir,nmNuevo+ext));
      result.newImgPath=path.relative(BASE,path.join(dir,nmNuevo+ext)).replace(/\\/g,'/');
      result.cdNuevo=cdNuevo;
      if(mdPath){
        const mdF=safe(mdPath);
        if(mdF&&fs.existsSync(mdF)){
          const mdNuevo=path.join(path.dirname(mdF),nmNuevo+path.parse(mdF).ext);
          await fsp.rename(mdF,mdNuevo);
          result.newMdPath=path.relative(BASE,mdNuevo).replace(/\\/g,'/');
        }
      }
    });
    res.json({ok:true,...result});
  }catch(e){res.status(400).json({error:e.message});}
});

app.get('/web/*',(req,res)=>{
  const f=safe('web/'+req.params[0]);
  if(!f)return res.status(403).send('Invalid');
  res.sendFile(f);
});

app.listen(PORT,'0.0.0.0',()=>{
  console.log(`[SRV] API en 0.0.0.0:${PORT}`);
  const ifaces=os.networkInterfaces();
  Object.values(ifaces).flat().filter(i=>i.family==='IPv4'&&!i.internal)
    .forEach(i=>console.log(`[SRV] Red: http://${i.address}:${PORT}`));
  runPipeline();
});

const app2=express();
app2.use(cors());
app2.use(express.static(BASE));
app2.listen(8000,'0.0.0.0',()=>{
  console.log(`[WEB] Proyecto en 0.0.0.0:8000 → ${BASE}`);
  const ifaces=os.networkInterfaces();
  Object.values(ifaces).flat().filter(i=>i.family==='IPv4'&&!i.internal)
    .forEach(i=>console.log(`[WEB] Red: http://${i.address}:8000`));
});
