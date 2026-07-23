!function(){
function haversine(lat1,lon1,lat2,lon2){
  const R=6371,dLat=(lat2-lat1)*Math.PI/180,dLon=(lon2-lon1)*Math.PI/180;
  const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}
function parseCT(name){
  const m=name.match(/CT=([SN])([\d.]+)([WE])([\d.]+)/);
  if(!m)return null;
  return{lat:(m[1]==='S'?-1:1)*parseFloat(m[2]),lon:(m[3]==='W'?-1:1)*parseFloat(m[4])};
}
window.GeoUtils={haversine,parseCT};
}();
