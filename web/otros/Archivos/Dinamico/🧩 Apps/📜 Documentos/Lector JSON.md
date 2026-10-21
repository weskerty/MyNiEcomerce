<style>
#JS_W{max-width:560px;margin:0 auto;display:flex;flex-direction:column;gap:10px;text-align:center}
#JS_W textarea{width:100%;box-sizing:border-box}
#JS_W .JS_R{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;align-items:center}
#JS_O{font-family:monospace;font-size:.8rem;white-space:pre;text-align:left}
#JS_M{margin:0;font-size:.8rem;opacity:.8}
</style>
<div id="JS_W">
<h2>Formateador JSON</h2>
<div class="JS_R"><button id="JS_L">Cargar JSON</button><label><input id="JS_S" type="checkbox" checked> Ordenar claves</label></div>
<input id="JS_F" type="file" accept=".json,application/json" hidden>
<textarea id="JS_O" rows="14" readonly placeholder="Resultado"></textarea>
<div class="JS_R"><button id="JS_C">Copiar</button></div>
<p id="JS_M"></p>
</div>
<script>
!function(){
const $=i=>document.getElementById(i),O=$('JS_O'),S=$('JS_S'),T=$('JS_M');
let src='',nm='';
const SO=v=>Array.isArray(v)?v.map(SO):v&&typeof v=='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,SO(v[k])])):v;
function RN(){
if(!src)return;
try{
let v=JSON.parse(src);
if(S.checked)v=SO(v);
O.value=JSON.stringify(v,null,2);
T.textContent=nm+' ('+O.value.length+' caracteres)';
}catch(e){O.value='';T.textContent='Error '+e.message}
}
$('JS_L').onclick=()=>$('JS_F').click();
$('JS_F').onchange=async e=>{
const f=e.target.files[0];
if(!f)return;
nm=f.name;src=await f.text();
e.target.value='';
RN();
};
S.onchange=RN;
$('JS_C').onclick=()=>{O.select();navigator.clipboard?navigator.clipboard.writeText(O.value):document.execCommand('copy');T.textContent='Copiado'};
}();
</script>