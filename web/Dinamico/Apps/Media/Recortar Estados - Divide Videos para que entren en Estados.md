<div style="text-align:center;position:relative;padding-top:0;margin-top:0">
<style>
.vc-wrap{padding:12px;max-width:100%}
.vc-drop{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;min-height:160px;border:2px dashed rgba(255,255,255,.2);border-radius:20px;background:rgba(255,255,255,.05);cursor:pointer;transition:border-color .2s,background .2s;padding:24px 16px;margin-bottom:14px}
.vc-drop:hover,.vc-drop.vc-over{border-color:rgba(56,189,248,.5);background:rgba(56,189,248,.07)}
.vc-drop span{color:rgba(255,255,255,.5);font-size:.9em}
.vc-btns{display:none;justify-content:center;gap:10px;margin-bottom:14px;flex-wrap:wrap}
.vc-sb{padding:10px 22px;border-radius:12px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.1);color:white;cursor:pointer;font-size:.95em;transition:background .2s}
.vc-sb:hover:not(:disabled){background:rgba(255,255,255,.2)}
.vc-sb:disabled{opacity:.35;cursor:not-allowed}
.vc-list{display:flex;flex-direction:column;gap:8px;margin-bottom:14px}
.vc-it{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:10px 14px}
.vc-it span{flex:1;color:rgba(255,255,255,.8);font-size:.88em;text-align:left}
.vc-dl{padding:7px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(56,189,248,.18);color:white;cursor:pointer;font-size:.85em;text-decoration:none;white-space:nowrap}
.vc-prog-w{width:100%;height:6px;background:rgba(255,255,255,.1);border-radius:3px;overflow:hidden;margin-bottom:4px;display:none}
.vc-prog{height:100%;background:#38bdf8;width:0%;transition:width .2s}
.vc-lbl{color:rgba(255,255,255,.6);font-size:.83em;text-align:center;min-height:1.2em;margin-bottom:10px}
.vc-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(30,30,30,.97);border:1px solid rgba(255,255,255,.15);color:white;padding:10px 22px;border-radius:12px;font-size:.88em;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:999}
.vc-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.vc-reset{padding:8px 18px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:rgba(255,255,255,.6);cursor:pointer;font-size:.85em;display:none}
.vc-dbg{margin-top:10px;background:#0a0a0a;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:8px;font-size:.75em;color:#7dd3fc;text-align:left;white-space:pre-wrap;max-height:180px;overflow-y:auto;display:none}
</style>

<div class="vc-wrap">
  <div class="vc-drop" id="vc-drop">
    <span style="font-size:2.5rem">🎬</span>
    <span>Toca para seleccionar un video</span>
    <input type="file" id="vc-in" accept="video/*" style="display:none">
  </div>
  <div class="vc-btns" id="vc-btns">
    <button class="vc-sb" data-s="30">✂️ 30s</button>
    <button class="vc-sb" data-s="60">✂️ 1 min</button>
    <button class="vc-sb" data-s="90">✂️ 1m 30s</button>
  </div>
  <div style="text-align:center;margin-bottom:10px">
    <div class="vc-prog-w" id="vc-prog-w"><div class="vc-prog" id="vc-prog"></div></div>
    <div class="vc-lbl" id="vc-lbl"></div>
    <button class="vc-reset" id="vc-reset">🗑 Nuevo video</button>
  </div>
  <div class="vc-list" id="vc-list"></div>
  <div class="vc-dbg" id="vc-dbg"></div>
</div>
<div class="vc-toast" id="vc-toast"></div>

<script>
(function(){
  var A=document.getElementById('vc-drop');
  var B=document.getElementById('vc-in');
  var C=document.getElementById('vc-btns');
  var D=document.getElementById('vc-list');
  var E=document.getElementById('vc-prog-w');
  var F=document.getElementById('vc-prog');
  var G=document.getElementById('vc-lbl');
  var H=document.getElementById('vc-reset');
  var I=document.getElementById('vc-toast');
  var DBG=document.getElementById('vc-dbg');

  var J=null,K=0,L=[],M=false,N=null,MB=null;

  function log(t){DBG.style.display='block';DBG.textContent+=t+'\n';DBG.scrollTop=DBG.scrollHeight;}

  function O(a){I.textContent=a;I.classList.add('show');clearTimeout(N);N=setTimeout(function(){I.classList.remove('show');},2800);}

  function P(a,b){F.style.width=a+'%';G.textContent=b||'';}

  function Q(a){var b=Math.floor(a/60),c=Math.floor(a%60);return b+':'+(c<10?'0':'')+c;}

  function R(){L.forEach(function(a){URL.revokeObjectURL(a);});L=[];D.innerHTML='';}

  function S(){
    if(M)return;
    R();J=null;K=0;
    A.style.display='';C.style.display='none';H.style.display='none';
    E.style.display='none';P(0,'');B.value='';
    DBG.style.display='none';DBG.textContent='';
  }

  A.onclick=function(){B.click();};
  A.ondragover=function(a){a.preventDefault();A.classList.add('vc-over');};
  A.ondragleave=function(){A.classList.remove('vc-over');};
  A.ondrop=function(a){a.preventDefault();A.classList.remove('vc-over');var b=a.dataTransfer.files[0];if(b)T(b);};
  B.onchange=function(a){var b=a.target.files[0];if(b)T(b);};
  H.onclick=S;

  function T(a){
    if(!a.type.startsWith('video/')){O('Solo videos');return;}
    var b=document.createElement('video');
    b.preload='metadata';
    b.onloadedmetadata=function(){
      K=b.duration;J=a;
      A.style.display='none';C.style.display='flex';H.style.display='inline-block';
      URL.revokeObjectURL(b.src);
      diagFile(a);
    };
    b.onerror=function(){O('Video invalido');};
    b.src=URL.createObjectURL(a);
  }

  function loadMB(){
    if(MB)return MB;
    MB=import('https://cdn.jsdelivr.net/npm/mediabunny@1.41.0/+esm');
    return MB;
  }

  async function diagFile(f){
    try{
      var lib=await loadMB();
      var {Input,BlobSource,ALL_FORMATS}=lib;
      var inp=new Input({source:new BlobSource(f),formats:ALL_FORMATS});
      log('file: '+f.name+' '+Math.round(f.size/1024)+'KB');
      var mime=await inp.getMimeType();
      log('mime: '+mime);
      var dur=await inp.computeDuration();
      log('dur: '+dur.toFixed(2)+'s');
      var vt=await inp.getPrimaryVideoTrack();
      if(vt){
        var dec=await vt.canDecode();
        var w=await vt.getDisplayWidth();
        var h=await vt.getDisplayHeight();
        log('video: '+w+'x'+h+' canDecode:'+dec);
        var dcfg=await vt.getDecoderConfig();
        log('codec: '+(dcfg?dcfg.codec:'unknown'));
      } else log('video: no track');
      var at=await inp.getPrimaryAudioTrack();
      if(at){var adec=await at.canDecode();log('audio canDecode:'+adec);}
      else log('audio: no track');
    }catch(err){log('diag err: '+err.message+'\n'+(err.stack||''));}
  }

  async function CUT(cs){
    if(M||!J)return;
    M=true;R();
    C.querySelectorAll('.vc-sb').forEach(function(x){x.disabled=true;});
    E.style.display='';P(5,'Cargando...');
    DBG.textContent='';

    try{
      var lib=await loadMB();
      var {Input,Output,Conversion,BlobSource,Mp4OutputFormat,BufferTarget,ALL_FORMATS}=lib;
      var total=Math.ceil(K/cs);
      var base=J.name.replace(/\.[^.]+$/,'');
      log('cutting '+total+' parts x'+cs+'s');

      for(var i=0;i<total;i++){
        var ts=i*cs,te=Math.min((i+1)*cs,K);
        var pct=Math.round((i/total)*85)+5;
        P(pct,'Parte '+(i+1)+'/'+total+' ('+Q(ts)+' - '+Q(te)+')');
        log('part '+(i+1)+' ['+ts.toFixed(1)+'-'+te.toFixed(1)+']');

        var inp=new Input({source:new BlobSource(J),formats:ALL_FORMATS});
        var out=new Output({format:new Mp4OutputFormat(),target:new BufferTarget()});
        var cv=await Conversion.init({
          input:inp,
          output:out,
          trim:{start:ts,end:te},
          video:{forceTranscode:false},
          audio:{forceTranscode:false}
        });

        log('valid:'+cv.isValid+' discarded:'+cv.discardedTracks.length);
        if(cv.discardedTracks.length>0){
          cv.discardedTracks.forEach(function(t){log('discarded: '+JSON.stringify(t.reason));});
        }
        if(!cv.isValid){O('Formato no compatible parte '+(i+1));log('skip part '+(i+1));continue;}

        var idx=i,ptotal=total,ppct=pct;
        cv.onProgress=function(p){P(ppct+Math.round(p*(85/ptotal)),'Parte '+(idx+1)+'/'+ptotal);};
        await cv.execute();

        var sz=out.target.buffer.byteLength;
        log('part '+(i+1)+' ok '+Math.round(sz/1024)+'KB');

        var blob=new Blob([out.target.buffer],{type:'video/mp4'});
        var url=URL.createObjectURL(blob);
        L.push(url);

        var it=document.createElement('div');it.className='vc-it';
        var sp=document.createElement('span');sp.textContent='Parte '+(i+1)+' ('+Q(ts)+' - '+Q(te)+')';
        var dl=document.createElement('a');dl.className='vc-dl';dl.href=url;
        dl.download=base+'_part'+(i+1)+'.mp4';dl.textContent='⬇ Descargar';
        it.appendChild(sp);it.appendChild(dl);D.appendChild(it);
      }
      P(100,'Listo');log('done');
    }catch(e){
      log('CUT err: '+e.message+'\n'+(e.stack||''));
      O('Error: '+e.message);E.style.display='none';P(0,'');
    }

    C.querySelectorAll('.vc-sb').forEach(function(x){x.disabled=false;});
    M=false;
  }

  C.querySelectorAll('.vc-sb').forEach(function(a){
    a.onclick=function(){CUT(parseInt(a.dataset.s));};
  });
})();
</script>
</div>
