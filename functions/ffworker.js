export async function onRequestGet(){
  const r=await fetch('https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.6/dist/esm/worker.js');
  const txt=await r.text();
  return new Response(txt,{headers:{'Content-Type':'text/javascript','Cache-Control':'public,max-age=86400'}});
}
