(function(){
if(window.TS1)return;
const K='0x4AAAAAACqJnWLBv7YxjbjF';
let P,W,D,F,C=Promise.resolve();
const L=()=>P||(P=new Promise((ok,no)=>{const s=document.createElement('script');s.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';s.onload=ok;s.onerror=()=>{P=null;s.remove();no(new Error('ts'))};document.head.append(s)}));
const E=v=>{const f=F;F=null;f?.(v)};
const G=()=>new Promise((ok,no)=>{
  const t=setTimeout(()=>E(),30000);
  F=v=>{clearTimeout(t);v?ok(v):no(new Error('ts'))};
  if(!D){
    D=document.createElement('div');D.style.cssText='position:fixed;width:0;height:0;overflow:hidden';document.body.append(D);
    W=turnstile.render(D,{sitekey:K,execution:'execute',callback:E,'error-callback':()=>E(),'timeout-callback':()=>E()});
  }else turnstile.reset(W);
  turnstile.execute(D);
});
window.TS1=()=>{const r=C.then(L).then(G);C=r.catch(()=>{});return r};
window.TS0=L;
})();
