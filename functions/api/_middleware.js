export function onRequest({request,next}){
  const u=new URL(request.url);
  return u.hostname==='cheagana.com'||u.pathname.startsWith('/api/rss')?next():new Response('',{status:404});
}
