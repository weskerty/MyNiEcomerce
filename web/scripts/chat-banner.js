(function(){
const s={
position:'fixed',
bottom:'20px',
right:'20px',
width:'60px',
height:'60px',
borderRadius:'50%',
background:'rgba(255, 255, 255, 0.15)',
backdropFilter:'blur(10px)',
WebkitBackdropFilter:'blur(10px)',
border:'1px solid rgba(255, 255, 255, 0.3)',
display:'flex',
alignItems:'center',
justifyContent:'center',
cursor:'pointer',
transition:'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
boxShadow:'0 8px 32px 0 rgba(31, 38, 135, 0.37)',
zIndex:'9999',
fontSize:'30px',
overflow:'hidden',
color:'white'
};
const e={
position:'fixed',
bottom:'20px',
left:'50%',
transform:'translateX(-50%)',
width:'300px',
height:'60px',
borderRadius:'30px',
background:'rgba(255, 255, 255, 0.15)',
backdropFilter:'blur(10px)',
WebkitBackdropFilter:'blur(10px)',
border:'1px solid rgba(255, 255, 255, 0.3)',
display:'flex',
alignItems:'center',
justifyContent:'center',
cursor:'pointer',
boxShadow:'0 8px 32px 0 rgba(31, 38, 135, 0.37)',
zIndex:'9999',
fontSize:'18px',
color:'white',
fontWeight:'bold',
fontFamily:'system-ui, -apple-system, sans-serif'
};
const b=document.createElement('div');
Object.assign(b.style,s);
b.innerHTML='💬';
b.dataset.exp='0';
document.body.appendChild(b);

let t;
function ck(){
const d=document.getElementById('disqus-container');
if(!d)return;
const r=d.getBoundingClientRect();
const w=window.innerHeight;
if(r.top<=w&&b.dataset.exp==='0'){
b.dataset.exp='1';
clearTimeout(t);
b.style.right='';
b.style.left='50%';
b.style.transform='translateX(-50%)';
b.style.width='300px';
b.style.height='60px';
b.style.borderRadius='30px';
b.style.fontSize='18px';
t=setTimeout(()=>{
b.innerHTML='💬 Clic para chatear';
},300)
}else if(r.top>w&&b.dataset.exp==='1'){
b.dataset.exp='0';
clearTimeout(t);
b.style.left='';
b.style.transform='';
b.style.right='20px';
b.style.width='60px';
b.style.height='60px';
b.style.borderRadius='50%';
b.style.fontSize='30px';
b.innerHTML='💬'
}
}

b.addEventListener('click',()=>{
window.open('https://placeholder.com','_blank')
});

window.addEventListener('scroll',ck);
window.addEventListener('resize',ck);
ck()
})();
