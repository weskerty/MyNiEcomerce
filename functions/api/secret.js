const H = { 'content-type': 'application/json' }

function IP(r){
  return r.headers.get('cf-connecting-ip')||''
}

export async function onRequestGet({request,env}){
  const u=new URL(request.url)
  const id=u.searchParams.get('id')
  const off=u.searchParams.get('off')||0

  const t=id
    ? `${env.SERVER_URL}/SB/post?id=${encodeURIComponent(id)}&coff=${off}`
    : `${env.SERVER_URL}/SB/posts?off=${off}`

  try{
    const r=await fetch(t,{
      headers:{
        'x-bridge-key':env.BRIDGE_KEY,
        'x-real-ip':IP(request)
      }
    })
    return new Response(await r.text(),{status:r.status,headers:H})
  }catch{
    return new Response('[]',{status:200,headers:H})
  }
}

export async function onRequestPost({request,env}){
  const u=new URL(request.url)
  const c=u.searchParams.get('c')==='1'

  let j
  try{j=await request.json()}
  catch{return new Response('{"e":"bad"}',{status:400,headers:H})}

  const t=`${env.SERVER_URL}/SB/${c?'comment':'post'}`

  try{
    const r=await fetch(t,{
      method:'POST',
      headers:{
        'x-bridge-key':env.BRIDGE_KEY,
        'x-real-ip':IP(request),
        'content-type':'application/json'
      },
      body:JSON.stringify(j)
    })

    return new Response(await r.text(),{
      status:r.status,
      headers:H
    })
  }catch{
    return new Response('{"e":"fail"}',{status:500,headers:H})
  }
}