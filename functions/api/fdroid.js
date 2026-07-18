const FS1="https://search.f-droid.org/api/search_apps?q=";
const FP1="https://f-droid.org/api/v1/packages/";
const FR1="https://f-droid.org/repo/";

export async function onRequestGet({request}){
const u=new URL(request.url);
const act=u.searchParams.get("action");

if(act==="search"){
const q=u.searchParams.get("q")||"";
const r=await fetch(FS1+encodeURIComponent(q));
return new Response(await r.text(),{headers:{"content-type":"application/json"}});
}

if(act==="pkg"){
const id=u.searchParams.get("id")||"";
const r=await fetch(FP1+encodeURIComponent(id));
return new Response(await r.text(),{headers:{"content-type":"application/json"}});
}

if(act==="apk"){
const pkg=u.searchParams.get("pkg")||"";
const vc=u.searchParams.get("vc")||"";
const r=await fetch(FR1+encodeURIComponent(pkg)+"_"+encodeURIComponent(vc)+".apk");
return new Response(r.body,{headers:{"content-type":"application/vnd.android.package-archive"}});
}

return new Response("Bad request",{status:400});
}
