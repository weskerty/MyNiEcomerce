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
const B32='0123456789bcdefghjkmnpqrstuvwxyz';
function encode(lat,lon,precision){
  precision=precision||9;
  let latR=[-90,90],lonR=[-180,180],bit=0,ch=0,even=true,out='';
  while(out.length<precision){
    if(even){const mid=(lonR[0]+lonR[1])/2;if(lon>mid){ch=(ch<<1)+1;lonR[0]=mid}else{ch=ch<<1;lonR[1]=mid}}
    else{const mid=(latR[0]+latR[1])/2;if(lat>mid){ch=(ch<<1)+1;latR[0]=mid}else{ch=ch<<1;latR[1]=mid}}
    even=!even;
    if(++bit===5){out+=B32[ch];bit=0;ch=0}
  }
  return out;
}
window.GeoUtils={haversine,parseCT,encode};
}();
