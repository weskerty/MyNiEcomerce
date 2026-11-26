window.MUP1=async(b,n,h)=>{
  const f=new FormData();
  f.append('file',b,n);
  f.append('expireValue',String(h||3));
  f.append('expireUnit','hour');
  const r=await fetch('https://evogb.win/api/upload',{method:'POST',body:f});
  const j=await r.json().catch(()=>({}));
  if(!r.ok||!j.success||!/^https:\/\/[^\s?#]+$/.test(j.url||''))throw new Error('MediaUP');
  return j.url;
};
