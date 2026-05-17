const RH={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"};

export async function onRequestGet(context){
  const {request,env}=context;
  const email=new URL(request.url).searchParams.get('email');
  if(!email)return new Response(JSON.stringify({error:'email required'}),{status:400,headers:RH});
  const h={'User-Agent':'pwned-checker'};
  if(env.EMAILREP_KEY)h['Key']=env.EMAILREP_KEY;
  const res=await fetch(`https://emailrep.io/${encodeURIComponent(email)}`,{headers:h});
  const data=await res.text();
  return new Response(data,{status:res.status,headers:RH});
}
