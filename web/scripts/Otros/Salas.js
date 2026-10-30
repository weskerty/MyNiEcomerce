export async function SL_A1(m,p,b){
  const r=await fetch('/api/chat'+p,{method:m,headers:{'Content-Type':'application/json'},body:b?JSON.stringify(b):undefined});
  const d=await r.json().catch(()=>({}));
  if(!r.ok)throw Object.assign(new Error(d.error||String(r.status)),{status:r.status});
  return d;
}

export function SL1(o){
  let rid=null,tk=null,me=null,iv=null,pp=null,ids=new Set();
  const up=l=>{ids=new Set(l.map(p=>p.pid));if(o.on)o.on(l);};
  const tick=async()=>{
    if(!rid)return;
    try{up((await SL_A1('POST','/rooms/'+rid+'/ping',{pid:me,token:tk})).peers||[]);}
    catch(e){if(e.status===401&&rid)try{up((await S.join(rid,me)).peers||[]);}catch(x){}}
  };
  const S={
    get room(){return rid;},
    async join(r,pid){
      const d=await SL_A1('POST','/rooms/'+r+'/join',{pw:o.pw||'',pid,nick:o.nick||''});
      rid=r;tk=d.token;me=pid;ids=new Set((d.peers||[]).map(p=>p.pid));
      clearInterval(iv);iv=setInterval(S.ping,o.ms||10000);
      return d;
    },
    ping(){return pp||(pp=tick().finally(()=>{pp=null;}));},
    leave(){
      clearInterval(iv);iv=null;
      if(rid)SL_A1('DELETE','/rooms/'+rid+'/leave',{pid:me,token:tk}).catch(()=>{});
      rid=tk=null;ids=new Set();
    },
    async ok(p){
      if(!rid)return false;
      if(!ids.has(p))await S.ping();
      return ids.has(p);
    },
    async acc(c){
      const b=[],f=d=>b.push(d);
      c.on('data',f);
      const v=await S.ok(c.peer);
      c.off('data',f);
      if(v)return b;
      try{c.close();}catch(e){}
      return null;
    }
  };
  return S;
}
