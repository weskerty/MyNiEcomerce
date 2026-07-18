import {B as e, C as t, Et as n, F as r, L as i, N as a, P as o, Q as s, S as c, T as l, U as u, V as d, W as f, _ as p, b as m, ct as h, et as g, g as _, j as v, m as y, p as b, rt as x, t as S, v as C, w, wt as ee, y as te} from "./vue.Cn5tnr29-BIDn0ro5.js";
import {a as ne, i as T, o as E, r as re} from "./runtime-dom.esm-bundler-CC8VYxL9.js";
import {c as ie, f as ae, l as D} from "./mdi-Bmg800Sy.js";
import {s as oe} from "./index-Bho8QC0v.js";
import {n as se, t as O} from "./formatFileSize-ClFbAH4G.js";
function k(e) {
    return new Promise( (t, n) => {
        let r = new FileReader;
        r.onload = () => {
            t(r.result)
        }
        ,
        r.onerror = () => {
            n(r.error)
        }
        ,
        r.readAsArrayBuffer(e)
    }
    )
}
var A = 4294967295
  , ce = 65535
  , le = 101010256
  , ue = 39169
  , de = 21589
  , fe = 28789
  , pe = 25461
  , me = 6534
  , he = 30837
  , ge = 30805
  , _e = 2048
  , ve = 61440
  , ye = 16384
  , be = 2048
  , xe = 1024
  , Se = 1 / 0
  , Ce = `undefined`
  , we = `function`
  , Te = 64
  , Ee = 2;
try {
    typeof navigator < `u` && navigator.hardwareConcurrency && (Ee = navigator.hardwareConcurrency)
} catch {}
var De = Object.assign({}, {
    workerURI: `./core/web-worker-wasm.js`,
    wasmURI: `./core/streams/zlib-wasm/zlib-streams.wasm`,
    chunkSize: 64 * 1024,
    maxWorkers: Ee,
    terminateWorkerTimeout: 5e3,
    useWebWorkers: !0,
    useCompressionStream: !0,
    CompressionStream: typeof CompressionStream < `u` && CompressionStream,
    DecompressionStream: typeof DecompressionStream < `u` && DecompressionStream
});
function Oe() {
    return De
}
function ke(e) {
    return Math.max(e.chunkSize, Te)
}
function Ae(e) {
    let {baseURI: t, chunkSize: n, maxWorkers: r, terminateWorkerTimeout: i, useCompressionStream: a, useWebWorkers: o, CompressionStream: s, DecompressionStream: c, CompressionStreamZlib: l, DecompressionStreamZlib: u, workerURI: d, wasmURI: f} = e;
    j(`baseURI`, t),
    j(`wasmURI`, f),
    j(`workerURI`, d),
    j(`chunkSize`, n),
    j(`maxWorkers`, r),
    j(`terminateWorkerTimeout`, i),
    j(`useCompressionStream`, a),
    j(`useWebWorkers`, o),
    j(`CompressionStream`, s),
    j(`DecompressionStream`, c),
    j(`CompressionStreamZlib`, l),
    j(`DecompressionStreamZlib`, u)
}
function j(e, t) {
    t !== void 0 && (De[e] = t)
}
function je(e) {
    e({
        workerURI: e => {
            if (e) {
                let e = new Blob([`(t=>{"function"==typeof define&&define.amd?define(t):t()})(function(){"use strict";const{Array:t,Object:e,Number:n,Math:s,Error:r,Uint8Array:o,Uint16Array:i,Uint32Array:c,Int32Array:a,Map:h,DataView:f,Promise:l,TextEncoder:u,crypto:w,postMessage:p,TransformStream:d,ReadableStream:y,WritableStream:m,CompressionStream:g,DecompressionStream:S}=self,b=void 0,v="undefined",k="function",z=[];for(let t=0;256>t;t++){let e=t;for(let t=0;8>t;t++)1&e?e=e>>>1^3988292384:e>>>=1;z[t]=e}class C{constructor(t){this.t=t||-1}append(t){let e=0|this.t;for(let n=0,s=0|t.length;s>n;n++)e=e>>>8^z[255&(e^t[n])];this.t=e}get(){return~this.t}}class A extends d{constructor(){let t;const e=new C;super({transform(t,n){e.append(t),n.enqueue(t)},flush(){const n=new o(4);new f(n.buffer).setUint32(0,e.get()),t.value=n}}),t=this}}const x={concat(t,e){if(0===t.length||0===e.length)return t.concat(e);const n=t[t.length-1],s=x.o(n);return 32===s?t.concat(e):x.i(e,s,0|n,t.slice(0,t.length-1))},h(t){const e=t.length;if(0===e)return 0;const n=t[e-1];return 32*(e-1)+x.o(n)},l(t,e){if(32*t.length<e)return t;const n=(t=t.slice(0,s.ceil(e/32))).length;return e&=31,n>0&&e&&(t[n-1]=x.u(e,t[n-1]&2147483648>>e-1,1)),t},u:(t,e,n)=>32===t?e:(n?0|e:e<<32-t)+1099511627776*t,o:t=>s.round(t/1099511627776)||32,i(t,e,n,s){for(void 0===s&&(s=[]);e>=32;e-=32)s.push(n),n=0;if(0===e)return s.concat(t);for(let r=0;r<t.length;r++)s.push(n|t[r]>>>e),n=t[r]<<32-e;const r=t.length?t[t.length-1]:0,o=x.o(r);return s.push(x.u(e+o&31,e+o>32?n:s.pop(),1)),s}},I={bytes:{p(t){const e=x.h(t)/8,n=new o(e);let s;for(let r=0;e>r;r++)3&r||(s=t[r/4]),n[r]=s>>>24,s<<=8;return n},m(t){const e=[];let n,s=0;for(n=0;n<t.length;n++)s=s<<8|t[n],3&~n||(e.push(s),s=0);return 3&n&&e.push(x.u(8*(3&n),s)),e}}},R=class{constructor(t){const e=this;e.blockSize=512,e.S=[1732584193,4023233417,2562383102,271733878,3285377520],e.v=[1518500249,1859775393,2400959708,3395469782],t?(e.k=t.k.slice(0),e.C=t.C.slice(0),e.A=t.A):e.reset()}reset(){const t=this;return t.k=t.S.slice(0),t.C=[],t.A=0,t}update(t){const e=this;"string"==typeof t&&(t=I.I.m(t));const n=e.C=x.concat(e.C,t),s=e.A,o=e.A=s+x.h(t);if(o>9007199254740991)throw new r("Cannot hash more than 2^53 - 1 bits");const i=new c(n);let a=0;for(let t=e.blockSize+s-(e.blockSize+s&e.blockSize-1);o>=t;t+=e.blockSize)e.R(i.subarray(16*a,16*(a+1))),a+=1;return n.splice(0,16*a),e}P(){const t=this;let e=t.C;const n=t.k;e=x.concat(e,[x.u(1,1)]);for(let t=e.length+2;15&t;t++)e.push(0);for(e.push(s.floor(t.A/4294967296)),e.push(0|t.A);e.length;)t.R(e.splice(0,16));return t.reset(),n}U(t,e,n,s){return t>19?t>39?t>59?t>79?void 0:e^n^s:e&n|e&s|n&s:e^n^s:e&n|~e&s}V(t,e){return e<<t|e>>>32-t}R(e){const n=this,r=n.k,o=t(80);for(let t=0;16>t;t++)o[t]=e[t];let i=r[0],c=r[1],a=r[2],h=r[3],f=r[4];for(let t=0;79>=t;t++){16>t||(o[t]=n.V(1,o[t-3]^o[t-8]^o[t-14]^o[t-16]));const e=n.V(5,i)+n.U(t,c,a,h)+f+o[t]+n.v[s.floor(t/20)]|0;f=h,h=a,a=n.V(30,c),c=i,i=e}r[0]=r[0]+i|0,r[1]=r[1]+c|0,r[2]=r[2]+a|0,r[3]=r[3]+h|0,r[4]=r[4]+f|0}},P={getRandomValues(t){const e=new c(t.buffer),n=t=>{let e=987654321;const n=4294967295;return()=>(e=36969*(65535&e)+(e>>16)&n,(((e<<16)+(t=18e3*(65535&t)+(t>>16)&n)&n)/4294967296+.5)*(s.random()>.5?1:-1))};for(let r,o=0;o<t.length;o+=4){const t=n(4294967296*(r||s.random()));r=987654071*t(),e[o/4]=4294967296*t()|0}return t}},U={importKey:t=>new U.M(I.bytes.m(t)),_(t,e,n,s){if(n=n||1e4,0>s||0>n)throw new r("invalid params to pbkdf2");const o=1+(s>>5)<<2;let i,c,a,h,l;const u=new ArrayBuffer(o),w=new f(u);let p=0;const d=x;for(e=I.bytes.m(e),l=1;(o||1)>p;l++){for(i=c=t.encrypt(d.concat(e,[l])),a=1;n>a;a++)for(c=t.encrypt(c),h=0;h<c.length;h++)i[h]^=c[h];for(a=0;(o||1)>p&&a<i.length;a++)w.setInt32(p,i[a]),p+=4}return u.slice(0,s/8)},M:class{constructor(t){const e=this,n=e.B=R,s=[[],[]];e.D=[new n,new n];const r=e.D[0].blockSize/32;t.length>r&&(t=(new n).update(t).P());for(let e=0;r>e;e++)s[0][e]=909522486^t[e],s[1][e]=1549556828^t[e];e.D[0].update(s[0]),e.D[1].update(s[1]),e.W=new n(e.D[0])}reset(){const t=this;t.W=new t.B(t.D[0]),t.K=!1}update(t){this.K=!0,this.W.update(t)}digest(){const t=this,e=t.W.P(),n=new t.B(t.D[1]).update(e).P();return t.reset(),n}encrypt(t){if(this.K)throw new r("encrypt on already updated hmac called!");return this.update(t),this.digest(t)}}},V=typeof w!=v&&typeof w.getRandomValues==k,M="Invalid password",_="Invalid signature",B="zipjs-abort-check-password";function D(t){return V?w.getRandomValues(t):P.getRandomValues(t)}const W=16,K={name:"PBKDF2"},E=e.assign({hash:{name:"HMAC"}},K),L=e.assign({iterations:1e3,hash:{name:"SHA-1"}},K),O=["deriveBits"],T=[8,12,16],j=[16,24,32],H=10,Z=[0,0,0,0],F=typeof w!=v,N=F&&w.subtle,q=F&&typeof N!=v,G=I.bytes,J=class{constructor(t){const e=this;e.L=[[[],[],[],[],[]],[[],[],[],[],[]]],e.L[0][0][0]||e.O();const n=e.L[0][4],s=e.L[1],o=t.length;let i,c,a,h=1;if(4!==o&&6!==o&&8!==o)throw new r("invalid aes key size");for(e.v=[c=t.slice(0),a=[]],i=o;4*o+28>i;i++){let t=c[i-1];(i%o===0||8===o&&i%o===4)&&(t=n[t>>>24]<<24^n[t>>16&255]<<16^n[t>>8&255]<<8^n[255&t],i%o===0&&(t=t<<8^t>>>24^h<<24,h=h<<1^283*(h>>7))),c[i]=c[i-o]^t}for(let t=0;i;t++,i--){const e=c[3&t?i:i-4];a[t]=4>=i||4>t?e:s[0][n[e>>>24]]^s[1][n[e>>16&255]]^s[2][n[e>>8&255]]^s[3][n[255&e]]}}encrypt(t){return this.T(t,0)}decrypt(t){return this.T(t,1)}O(){const t=this.L[0],e=this.L[1],n=t[4],s=e[4],r=[],o=[];let i,c,a,h;for(let t=0;256>t;t++)o[(r[t]=t<<1^283*(t>>7))^t]=t;for(let f=i=0;!n[f];f^=c||1,i=o[i]||1){let o=i^i<<1^i<<2^i<<3^i<<4;o=o>>8^255&o^99,n[f]=o,s[o]=f,h=r[a=r[c=r[f]]];let l=16843009*h^65537*a^257*c^16843008*f,u=257*r[o]^16843008*o;for(let n=0;4>n;n++)t[n][f]=u=u<<24^u>>>8,e[n][o]=l=l<<24^l>>>8}for(let n=0;5>n;n++)t[n]=t[n].slice(0),e[n]=e[n].slice(0)}T(t,e){if(4!==t.length)throw new r("invalid aes block size");const n=this.v[e],s=n.length/4-2,o=[0,0,0,0],i=this.L[e],c=i[0],a=i[1],h=i[2],f=i[3],l=i[4];let u,w,p,d=t[0]^n[0],y=t[e?3:1]^n[1],m=t[2]^n[2],g=t[e?1:3]^n[3],S=4;for(let t=0;s>t;t++)u=c[d>>>24]^a[y>>16&255]^h[m>>8&255]^f[255&g]^n[S],w=c[y>>>24]^a[m>>16&255]^h[g>>8&255]^f[255&d]^n[S+1],p=c[m>>>24]^a[g>>16&255]^h[d>>8&255]^f[255&y]^n[S+2],g=c[g>>>24]^a[d>>16&255]^h[y>>8&255]^f[255&m]^n[S+3],S+=4,d=u,y=w,m=p;for(let t=0;4>t;t++)o[e?3&-t:t]=l[d>>>24]<<24^l[y>>16&255]<<16^l[m>>8&255]<<8^l[255&g]^n[S++],u=d,d=y,y=m,m=g,g=u;return o}},Q=class{constructor(t,e){this.j=t,this.H=e,this.Z=e}reset(){this.Z=this.H}update(t){return this.F(this.j,t,this.Z)}N(t){if(255&~(t>>24))t+=1<<24;else{let e=t>>16&255,n=t>>8&255,s=255&t;255===e?(e=0,255===n?(n=0,255===s?s=0:++s):++n):++e,t=0,t+=e<<16,t+=n<<8,t+=s}return t}q(t){0===(t[0]=this.N(t[0]))&&(t[1]=this.N(t[1]))}F(t,e,n){let s;if(!(s=e.length))return[];const r=x.h(e);for(let r=0;s>r;r+=4){this.q(n);const s=t.encrypt(n);e[r]^=s[0],e[r+1]^=s[1],e[r+2]^=s[2],e[r+3]^=s[3]}return x.l(e,r)}},X=U.M;let Y=F&&q&&typeof N.importKey==k,$=F&&q&&typeof N.deriveBits==k;class tt extends d{constructor({password:t,rawPassword:n,signed:s,encryptionStrength:i,checkPasswordOnly:c}){super({start(){e.assign(this,{ready:new l(t=>this.G=t),password:rt(t,n),signed:s,J:i-1,pending:new o})},async transform(t,e){const n=this,{password:s,J:i,G:a,ready:h}=n;s?(await(async(t,e,n,s)=>{const o=await st(t,e,n,it(s,0,T[e])),i=it(s,T[e]);if(o[0]!=i[0]||o[1]!=i[1])throw new r(M)})(n,i,s,it(t,0,T[i]+2)),t=it(t,T[i]+2),c?e.error(new r(B)):a()):await h;const f=new o(t.length-H-(t.length-H)%W);e.enqueue(nt(n,t,f,0,H,!0))},async flush(t){const{signed:e,X:n,Y:s,pending:i,ready:c}=this;if(s&&n){await c;const a=it(i,0,i.length-H),h=it(i,i.length-H);let f=new o;if(a.length){const t=at(G,a);s.update(t);const e=n.update(t);f=ct(G,e)}if(e){const t=it(ct(G,s.digest()),0,H);for(let e=0;H>e;e++)if(t[e]!=h[e])throw new r(_)}t.enqueue(f)}}})}}class et extends d{constructor({password:t,rawPassword:n,encryptionStrength:s}){let r;super({start(){e.assign(this,{ready:new l(t=>this.G=t),password:rt(t,n),J:s-1,pending:new o})},async transform(t,e){const n=this,{password:s,J:r,G:i,ready:c}=n;let a=new o;s?(a=await(async(t,e,n)=>{const s=D(new o(T[e]));return ot(s,await st(t,e,n,s))})(n,r,s),i()):await c;const h=new o(a.length+t.length-t.length%W);h.set(a,0),e.enqueue(nt(n,t,h,a.length,0))},async flush(t){const{X:e,Y:n,pending:s,ready:i}=this;if(n&&e){await i;let c=new o;if(s.length){const t=e.update(at(G,s));n.update(t),c=ct(G,t)}r.signature=ct(G,n.digest()).slice(0,H),t.enqueue(ot(c,r.signature))}}}),r=this}}function nt(t,e,n,s,r,i){const{X:c,Y:a,pending:h}=t,f=e.length-r;let l;for(h.length&&(e=ot(h,e),n=((t,e)=>{if(e&&e>t.length){const n=t;(t=new o(e)).set(n,0)}return t})(n,f-f%W)),l=0;f-W>=l;l+=W){const t=at(G,it(e,l,l+W));i&&a.update(t);const r=c.update(t);i||a.update(r),n.set(ct(G,r),l+s)}return t.pending=it(e,l),n}async function st(n,s,r,i){n.password=null;const c=await(async(t,e,n,s,r)=>{if(!Y)return U.importKey(e);try{return await N.importKey("raw",e,n,!1,r)}catch{return Y=!1,U.importKey(e)}})(0,r,E,0,O),a=await(async(t,e,n)=>{if(!$)return U._(e,t.salt,L.iterations,n);try{return await N.deriveBits(t,e,n)}catch{return $=!1,U._(e,t.salt,L.iterations,n)}})(e.assign({salt:i},L),c,8*(2*j[s]+2)),h=new o(a),f=at(G,it(h,0,j[s])),l=at(G,it(h,j[s],2*j[s])),u=it(h,2*j[s]);return e.assign(n,{keys:{key:f,$:l,passwordVerification:u},X:new Q(new J(f),t.from(Z)),Y:new X(l)}),u}function rt(t,e){return e===b?(t=>{if(typeof u==v){const e=new o((t=unescape(encodeURIComponent(t))).length);for(let n=0;n<e.length;n++)e[n]=t.charCodeAt(n);return e}return(new u).encode(t)})(t):e}function ot(t,e){let n=t;return t.length+e.length&&(n=new o(t.length+e.length),n.set(t,0),n.set(e,t.length)),n}function it(t,e,n){return t.subarray(e,n)}function ct(t,e){return t.p(e)}function at(t,e){return t.m(e)}class ht extends d{constructor({password:t,passwordVerification:n,checkPasswordOnly:s}){super({start(){e.assign(this,{password:t,passwordVerification:n}),wt(this,t)},transform(t,e){const n=this;if(n.password){const e=lt(n,t.subarray(0,12));if(n.password=null,e.at(-1)!=n.passwordVerification)throw new r(M);t=t.subarray(12)}s?e.error(new r(B)):e.enqueue(lt(n,t))}})}}class ft extends d{constructor({password:t,passwordVerification:n}){super({start(){e.assign(this,{password:t,passwordVerification:n}),wt(this,t)},transform(t,e){const n=this;let s,r;if(n.password){n.password=null;const e=D(new o(12));e[11]=n.passwordVerification,s=new o(t.length+e.length),s.set(ut(n,e),0),r=12}else s=new o(t.length),r=0;s.set(ut(n,t),r),e.enqueue(s)}})}}function lt(t,e){const n=new o(e.length);for(let s=0;s<e.length;s++)n[s]=dt(t)^e[s],pt(t,n[s]);return n}function ut(t,e){const n=new o(e.length);for(let s=0;s<e.length;s++)n[s]=dt(t)^e[s],pt(t,e[s]);return n}function wt(t,n){const s=[305419896,591751049,878082192];e.assign(t,{keys:s,tt:new C(s[0]),et:new C(s[2])});for(let e=0;e<n.length;e++)pt(t,n.charCodeAt(e))}function pt(t,e){let[n,r,o]=t.keys;t.tt.append([e]),n=~t.tt.get(),r=mt(s.imul(mt(r+yt(n)),134775813)+1),t.et.append([r>>>24]),o=~t.et.get(),t.keys=[n,r,o]}function dt(t){const e=2|t.keys[2];return yt(s.imul(e,1^e)>>>8)}function yt(t){return 255&t}function mt(t){return 4294967295&t}class gt extends d{constructor(t,{chunkSize:e,nt:n,CompressionStream:s}){super({});const{compressed:r,encrypted:o,useCompressionStream:i,zipCrypto:c,signed:a,level:h}=t,l=this;let u,w,p=super.readable;o&&!c||!a||(u=new A,p=kt(p,u)),r&&(p=vt(p,i,{level:h,chunkSize:e},s,n,s)),o&&(c?p=kt(p,new ft(t)):(w=new et(t),p=kt(p,w))),bt(l,p,()=>{let t;o&&!c&&(t=w.signature),o&&!c||!a||(t=new f(u.value.buffer).getUint32(0)),l.signature=t})}}class St extends d{constructor(t,{chunkSize:e,st:n,DecompressionStream:s}){super({});const{zipCrypto:o,encrypted:i,signed:c,signature:a,compressed:h,useCompressionStream:l,rt:u}=t;let w,p,d=super.readable;i&&(o?d=kt(d,new ht(t)):(p=new tt(t),d=kt(d,p))),h&&(d=vt(d,l,{chunkSize:e,rt:u},s,n,s)),i&&!o||!c||(w=new A,d=kt(d,w)),bt(this,d,()=>{if((!i||o)&&c){const t=new f(w.value.buffer);if(a!=t.getUint32(0,!1))throw new r(_)}})}}function bt(t,n,s){n=kt(n,new d({flush:s})),e.defineProperty(t,"readable",{get:()=>n})}function vt(t,e,n,s,r,o){const i=e&&s?s:r||o,c=n.rt?"deflate64-raw":"deflate-raw";try{t=kt(t,new i(c,n))}catch(s){if(!e)throw s;if(r)t=kt(t,new r(c,n));else{if(!o)throw s;t=kt(t,new o(c,n))}}return t}function kt(t,e){return t.pipeThrough(e)}const zt="data",Ct="close";class At extends d{constructor(t,n){super({});const s=this,{codecType:o}=t;let i;o.startsWith("deflate")?i=gt:o.startsWith("inflate")&&(i=St),s.outputSize=0;let c=0;const a=new i(t,n),h=super.readable,f=new d({transform(t,e){t&&t.length&&(c+=t.length,e.enqueue(t))},flush(){e.assign(s,{inputSize:c})}}),l=new d({transform(e,n){if(e&&e.length&&(n.enqueue(e),s.outputSize+=e.length,t.outputSize!==b&&s.outputSize>t.outputSize))throw new r("Invalid uncompressed size")},flush(){const{signature:t}=a;e.assign(s,{signature:t,inputSize:c})}});e.defineProperty(s,"readable",{get:()=>h.pipeThrough(f).pipeThrough(a).pipeThrough(l)})}}class xt extends d{constructor(t){let e;super({transform:function n(s,r){if(e){const t=new o(e.length+s.length);t.set(e),t.set(s,e.length),s=t,e=null}s.length>t?(r.enqueue(s.slice(0,t)),n(s.slice(t),r)):e=s},flush(t){e&&e.length&&t.enqueue(e)}})}}const It=new h,Rt=new h;let Pt,Ut,Vt,Mt,_t,Bt=0;async function Dt(t){try{const{options:e,config:s}=t;if(!e.useCompressionStream)try{await self.initModule(t.config)}catch{e.useCompressionStream=!0}s.CompressionStream=self.CompressionStream,s.DecompressionStream=self.DecompressionStream;const r={highWaterMark:1},o=t.readable||new y({async pull(t){const e=new l(t=>It.set(Bt,t));Wt({type:"pull",messageId:Bt}),Bt=(Bt+1)%n.MAX_SAFE_INTEGER;const{value:s,done:r}=await e;t.enqueue(s),r&&t.close()}},r),i=t.writable||new m({async write(t){let e;const s=new l(t=>e=t);Rt.set(Bt,e),Wt({type:zt,value:t,messageId:Bt}),Bt=(Bt+1)%n.MAX_SAFE_INTEGER,await s}},r),c=new At(e,s);Pt=new AbortController;const{signal:a}=Pt;await o.pipeThrough(c).pipeThrough(new xt(s.chunkSize)).pipeTo(i,{signal:a,preventClose:!0,preventAbort:!0}),await i.getWriter().close();const{signature:h,inputSize:f,outputSize:u}=c;Wt({type:Ct,result:{signature:h,inputSize:f,outputSize:u}})}catch(t){t.outputSize=0,Kt(t)}}function Wt(t){let{value:e}=t;if(e)if(e.length)try{e=new o(e),t.value=e.buffer,p(t,[t.value])}catch{p(t)}else p(t);else p(t)}function Kt(t=new r("Unknown error")){const{message:e,stack:n,code:s,name:o,outputSize:i}=t;p({error:{message:e,stack:n,code:s,name:o,outputSize:i}})}function Et(t,e,n={}){const i="number"==typeof n.level?n.level:-1,c="number"==typeof n.ot?n.ot:65536,a="number"==typeof n.it?n.it:65536;return new d({start(){let n;if(this.ct=Vt(c),this.in=Vt(a),this.it=a,this.ht=new o(c),t?(this.ft=Ut.deflate_process,this.lt=Ut.deflate_last_consumed,this.ut=Ut.deflate_end,this.wt=Ut.deflate_new(),n="gzip"===e?Ut.deflate_init_gzip(this.wt,i):"deflate-raw"===e?Ut.deflate_init_raw(this.wt,i):Ut.deflate_init(this.wt,i)):"deflate64-raw"===e?(this.ft=Ut.inflate9_process,this.lt=Ut.inflate9_last_consumed,this.ut=Ut.inflate9_end,this.wt=Ut.inflate9_new(),n=Ut.inflate9_init_raw(this.wt)):(this.ft=Ut.inflate_process,this.lt=Ut.inflate_last_consumed,this.ut=Ut.inflate_end,this.wt=Ut.inflate_new(),n="deflate-raw"===e?Ut.inflate_init_raw(this.wt):"gzip"===e?Ut.inflate_init_gzip(this.wt):Ut.inflate_init(this.wt)),0!==n)throw new r("init failed:"+n)},transform(e,n){try{const i=e,a=new o(_t.buffer),h=this.ft,f=this.lt,l=this.ct,u=this.ht;let w=0;for(;w<i.length;){const e=s.min(i.length-w,32768);this.in&&this.it>=e||(this.in&&Mt&&Mt(this.in),this.in=Vt(e),this.it=e),a.set(i.subarray(w,w+e),this.in);const o=h(this.wt,this.in,e,l,c,0),p=16777215&o;if(p&&(u.set(a.subarray(l,l+p),0),n.enqueue(u.slice(0,p))),!t){const t=o>>24&255,e=128&t?t-256:t;if(0>e)throw new r("process error:"+e)}const d=f(this.wt);if(0===d)break;w+=d}}catch(t){this.ut&&this.wt&&this.ut(this.wt),this.in&&Mt&&Mt(this.in),this.ct&&Mt&&Mt(this.ct),n.error(t)}},flush(e){try{const n=new o(_t.buffer),s=this.ft,i=this.ct,a=this.ht;for(;;){const o=s(this.wt,0,0,i,c,4),h=16777215&o,f=o>>24&255;if(!t){const t=128&f?f-256:f;if(0>t)throw new r("process error:"+t)}if(h&&(a.set(n.subarray(i,i+h),0),e.enqueue(a.slice(0,h))),1===f||0===h)break}}catch(t){e.error(t)}finally{if(this.ut&&this.wt){const t=this.ut(this.wt);0!==t&&e.error(new r("end error:"+t))}this.in&&Mt&&Mt(this.in),this.ct&&Mt&&Mt(this.ct)}}})}addEventListener("message",({data:t})=>{const{type:e,messageId:n,value:s,done:r}=t;try{if("start"==e&&Dt(t),e==zt){const t=It.get(n);It.delete(n),t({value:new o(s),done:r})}if("ack"==e){const t=Rt.get(n);Rt.delete(n),t()}e==Ct&&Pt.abort()}catch(t){Kt(t)}});class Lt{constructor(t="deflate",e){return Et(!0,t,e)}}class Ot{constructor(t="deflate",e){return Et(!1,t,e)}}let Tt=!1;self.initModule=async t=>{try{const e=await(async(t,{baseURI:e})=>{if(!Tt){let n,s;try{try{s=new URL(t,e)}catch{}const r=await fetch(s);n=await r.arrayBuffer()}catch(e){if(!t.startsWith("data:application/wasm;base64,"))throw e;n=(t=>{const e=t.split(",")[1],n=atob(e),s=n.length,r=new o(s);for(let t=0;s>t;++t)r[t]=n.charCodeAt(t);return r.buffer})(t)}(t=>{if(Ut=t,({malloc:Vt,free:Mt,memory:_t}=Ut),"function"!=typeof Vt||"function"!=typeof Mt||!_t)throw Ut=Vt=Mt=_t=null,new r("Invalid WASM module")})((await WebAssembly.instantiate(n)).instance.exports),Tt=!0}})(t.wasmURI,t);return t.nt=Lt,t.st=Ot,e}catch{}}});
`],{
                    type: `text/javascript`
                });
                return URL.createObjectURL(e)
            }
            return `data:text/javascript,(t%3D%3E%7B%22function%22%3D%3Dtypeof%20define%26%26define.amd%3Fdefine(t)%3At()%7D)(function()%7B%22use%20strict%22%3Bconst%7BArray%3At%2CObject%3Ae%2CNumber%3An%2CMath%3As%2CError%3Ar%2CUint8Array%3Ao%2CUint16Array%3Ai%2CUint32Array%3Ac%2CInt32Array%3Aa%2CMap%3Ah%2CDataView%3Af%2CPromise%3Al%2CTextEncoder%3Au%2Ccrypto%3Aw%2CpostMessage%3Ap%2CTransformStream%3Ad%2CReadableStream%3Ay%2CWritableStream%3Am%2CCompressionStream%3Ag%2CDecompressionStream%3AS%7D%3Dself%2Cb%3Dvoid%200%2Cv%3D%22undefined%22%2Ck%3D%22function%22%2Cz%3D%5B%5D%3Bfor(let%20t%3D0%3B256%3Et%3Bt%2B%2B)%7Blet%20e%3Dt%3Bfor(let%20t%3D0%3B8%3Et%3Bt%2B%2B)1%26e%3Fe%3De%3E%3E%3E1%5E3988292384%3Ae%3E%3E%3E%3D1%3Bz%5Bt%5D%3De%7Dclass%20C%7Bconstructor(t)%7Bthis.t%3Dt%7C%7C-1%7Dappend(t)%7Blet%20e%3D0%7Cthis.t%3Bfor(let%20n%3D0%2Cs%3D0%7Ct.length%3Bs%3En%3Bn%2B%2B)e%3De%3E%3E%3E8%5Ez%5B255%26(e%5Et%5Bn%5D)%5D%3Bthis.t%3De%7Dget()%7Breturn~this.t%7D%7Dclass%20A%20extends%20d%7Bconstructor()%7Blet%20t%3Bconst%20e%3Dnew%20C%3Bsuper(%7Btransform(t%2Cn)%7Be.append(t)%2Cn.enqueue(t)%7D%2Cflush()%7Bconst%20n%3Dnew%20o(4)%3Bnew%20f(n.buffer).setUint32(0%2Ce.get())%2Ct.value%3Dn%7D%7D)%2Ct%3Dthis%7D%7Dconst%20x%3D%7Bconcat(t%2Ce)%7Bif(0%3D%3D%3Dt.length%7C%7C0%3D%3D%3De.length)return%20t.concat(e)%3Bconst%20n%3Dt%5Bt.length-1%5D%2Cs%3Dx.o(n)%3Breturn%2032%3D%3D%3Ds%3Ft.concat(e)%3Ax.i(e%2Cs%2C0%7Cn%2Ct.slice(0%2Ct.length-1))%7D%2Ch(t)%7Bconst%20e%3Dt.length%3Bif(0%3D%3D%3De)return%200%3Bconst%20n%3Dt%5Be-1%5D%3Breturn%2032*(e-1)%2Bx.o(n)%7D%2Cl(t%2Ce)%7Bif(32*t.length%3Ce)return%20t%3Bconst%20n%3D(t%3Dt.slice(0%2Cs.ceil(e%2F32))).length%3Breturn%20e%26%3D31%2Cn%3E0%26%26e%26%26(t%5Bn-1%5D%3Dx.u(e%2Ct%5Bn-1%5D%262147483648%3E%3Ee-1%2C1))%2Ct%7D%2Cu%3A(t%2Ce%2Cn)%3D%3E32%3D%3D%3Dt%3Fe%3A(n%3F0%7Ce%3Ae%3C%3C32-t)%2B1099511627776*t%2Co%3At%3D%3Es.round(t%2F1099511627776)%7C%7C32%2Ci(t%2Ce%2Cn%2Cs)%7Bfor(void%200%3D%3D%3Ds%26%26(s%3D%5B%5D)%3Be%3E%3D32%3Be-%3D32)s.push(n)%2Cn%3D0%3Bif(0%3D%3D%3De)return%20s.concat(t)%3Bfor(let%20r%3D0%3Br%3Ct.length%3Br%2B%2B)s.push(n%7Ct%5Br%5D%3E%3E%3Ee)%2Cn%3Dt%5Br%5D%3C%3C32-e%3Bconst%20r%3Dt.length%3Ft%5Bt.length-1%5D%3A0%2Co%3Dx.o(r)%3Breturn%20s.push(x.u(e%2Bo%2631%2Ce%2Bo%3E32%3Fn%3As.pop()%2C1))%2Cs%7D%7D%2CI%3D%7Bbytes%3A%7Bp(t)%7Bconst%20e%3Dx.h(t)%2F8%2Cn%3Dnew%20o(e)%3Blet%20s%3Bfor(let%20r%3D0%3Be%3Er%3Br%2B%2B)3%26r%7C%7C(s%3Dt%5Br%2F4%5D)%2Cn%5Br%5D%3Ds%3E%3E%3E24%2Cs%3C%3C%3D8%3Breturn%20n%7D%2Cm(t)%7Bconst%20e%3D%5B%5D%3Blet%20n%2Cs%3D0%3Bfor(n%3D0%3Bn%3Ct.length%3Bn%2B%2B)s%3Ds%3C%3C8%7Ct%5Bn%5D%2C3%26~n%7C%7C(e.push(s)%2Cs%3D0)%3Breturn%203%26n%26%26e.push(x.u(8*(3%26n)%2Cs))%2Ce%7D%7D%7D%2CR%3Dclass%7Bconstructor(t)%7Bconst%20e%3Dthis%3Be.blockSize%3D512%2Ce.S%3D%5B1732584193%2C4023233417%2C2562383102%2C271733878%2C3285377520%5D%2Ce.v%3D%5B1518500249%2C1859775393%2C2400959708%2C3395469782%5D%2Ct%3F(e.k%3Dt.k.slice(0)%2Ce.C%3Dt.C.slice(0)%2Ce.A%3Dt.A)%3Ae.reset()%7Dreset()%7Bconst%20t%3Dthis%3Breturn%20t.k%3Dt.S.slice(0)%2Ct.C%3D%5B%5D%2Ct.A%3D0%2Ct%7Dupdate(t)%7Bconst%20e%3Dthis%3B%22string%22%3D%3Dtypeof%20t%26%26(t%3DI.I.m(t))%3Bconst%20n%3De.C%3Dx.concat(e.C%2Ct)%2Cs%3De.A%2Co%3De.A%3Ds%2Bx.h(t)%3Bif(o%3E9007199254740991)throw%20new%20r(%22Cannot%20hash%20more%20than%202%5E53%20-%201%20bits%22)%3Bconst%20i%3Dnew%20c(n)%3Blet%20a%3D0%3Bfor(let%20t%3De.blockSize%2Bs-(e.blockSize%2Bs%26e.blockSize-1)%3Bo%3E%3Dt%3Bt%2B%3De.blockSize)e.R(i.subarray(16*a%2C16*(a%2B1)))%2Ca%2B%3D1%3Breturn%20n.splice(0%2C16*a)%2Ce%7DP()%7Bconst%20t%3Dthis%3Blet%20e%3Dt.C%3Bconst%20n%3Dt.k%3Be%3Dx.concat(e%2C%5Bx.u(1%2C1)%5D)%3Bfor(let%20t%3De.length%2B2%3B15%26t%3Bt%2B%2B)e.push(0)%3Bfor(e.push(s.floor(t.A%2F4294967296))%2Ce.push(0%7Ct.A)%3Be.length%3B)t.R(e.splice(0%2C16))%3Breturn%20t.reset()%2Cn%7DU(t%2Ce%2Cn%2Cs)%7Breturn%20t%3E19%3Ft%3E39%3Ft%3E59%3Ft%3E79%3Fvoid%200%3Ae%5En%5Es%3Ae%26n%7Ce%26s%7Cn%26s%3Ae%5En%5Es%3Ae%26n%7C~e%26s%7DV(t%2Ce)%7Breturn%20e%3C%3Ct%7Ce%3E%3E%3E32-t%7DR(e)%7Bconst%20n%3Dthis%2Cr%3Dn.k%2Co%3Dt(80)%3Bfor(let%20t%3D0%3B16%3Et%3Bt%2B%2B)o%5Bt%5D%3De%5Bt%5D%3Blet%20i%3Dr%5B0%5D%2Cc%3Dr%5B1%5D%2Ca%3Dr%5B2%5D%2Ch%3Dr%5B3%5D%2Cf%3Dr%5B4%5D%3Bfor(let%20t%3D0%3B79%3E%3Dt%3Bt%2B%2B)%7B16%3Et%7C%7C(o%5Bt%5D%3Dn.V(1%2Co%5Bt-3%5D%5Eo%5Bt-8%5D%5Eo%5Bt-14%5D%5Eo%5Bt-16%5D))%3Bconst%20e%3Dn.V(5%2Ci)%2Bn.U(t%2Cc%2Ca%2Ch)%2Bf%2Bo%5Bt%5D%2Bn.v%5Bs.floor(t%2F20)%5D%7C0%3Bf%3Dh%2Ch%3Da%2Ca%3Dn.V(30%2Cc)%2Cc%3Di%2Ci%3De%7Dr%5B0%5D%3Dr%5B0%5D%2Bi%7C0%2Cr%5B1%5D%3Dr%5B1%5D%2Bc%7C0%2Cr%5B2%5D%3Dr%5B2%5D%2Ba%7C0%2Cr%5B3%5D%3Dr%5B3%5D%2Bh%7C0%2Cr%5B4%5D%3Dr%5B4%5D%2Bf%7C0%7D%7D%2CP%3D%7BgetRandomValues(t)%7Bconst%20e%3Dnew%20c(t.buffer)%2Cn%3Dt%3D%3E%7Blet%20e%3D987654321%3Bconst%20n%3D4294967295%3Breturn()%3D%3E(e%3D36969*(65535%26e)%2B(e%3E%3E16)%26n%2C(((e%3C%3C16)%2B(t%3D18e3*(65535%26t)%2B(t%3E%3E16)%26n)%26n)%2F4294967296%2B.5)*(s.random()%3E.5%3F1%3A-1))%7D%3Bfor(let%20r%2Co%3D0%3Bo%3Ct.length%3Bo%2B%3D4)%7Bconst%20t%3Dn(4294967296*(r%7C%7Cs.random()))%3Br%3D987654071*t()%2Ce%5Bo%2F4%5D%3D4294967296*t()%7C0%7Dreturn%20t%7D%7D%2CU%3D%7BimportKey%3At%3D%3Enew%20U.M(I.bytes.m(t))%2C_(t%2Ce%2Cn%2Cs)%7Bif(n%3Dn%7C%7C1e4%2C0%3Es%7C%7C0%3En)throw%20new%20r(%22invalid%20params%20to%20pbkdf2%22)%3Bconst%20o%3D1%2B(s%3E%3E5)%3C%3C2%3Blet%20i%2Cc%2Ca%2Ch%2Cl%3Bconst%20u%3Dnew%20ArrayBuffer(o)%2Cw%3Dnew%20f(u)%3Blet%20p%3D0%3Bconst%20d%3Dx%3Bfor(e%3DI.bytes.m(e)%2Cl%3D1%3B(o%7C%7C1)%3Ep%3Bl%2B%2B)%7Bfor(i%3Dc%3Dt.encrypt(d.concat(e%2C%5Bl%5D))%2Ca%3D1%3Bn%3Ea%3Ba%2B%2B)for(c%3Dt.encrypt(c)%2Ch%3D0%3Bh%3Cc.length%3Bh%2B%2B)i%5Bh%5D%5E%3Dc%5Bh%5D%3Bfor(a%3D0%3B(o%7C%7C1)%3Ep%26%26a%3Ci.length%3Ba%2B%2B)w.setInt32(p%2Ci%5Ba%5D)%2Cp%2B%3D4%7Dreturn%20u.slice(0%2Cs%2F8)%7D%2CM%3Aclass%7Bconstructor(t)%7Bconst%20e%3Dthis%2Cn%3De.B%3DR%2Cs%3D%5B%5B%5D%2C%5B%5D%5D%3Be.D%3D%5Bnew%20n%2Cnew%20n%5D%3Bconst%20r%3De.D%5B0%5D.blockSize%2F32%3Bt.length%3Er%26%26(t%3D(new%20n).update(t).P())%3Bfor(let%20e%3D0%3Br%3Ee%3Be%2B%2B)s%5B0%5D%5Be%5D%3D909522486%5Et%5Be%5D%2Cs%5B1%5D%5Be%5D%3D1549556828%5Et%5Be%5D%3Be.D%5B0%5D.update(s%5B0%5D)%2Ce.D%5B1%5D.update(s%5B1%5D)%2Ce.W%3Dnew%20n(e.D%5B0%5D)%7Dreset()%7Bconst%20t%3Dthis%3Bt.W%3Dnew%20t.B(t.D%5B0%5D)%2Ct.K%3D!1%7Dupdate(t)%7Bthis.K%3D!0%2Cthis.W.update(t)%7Ddigest()%7Bconst%20t%3Dthis%2Ce%3Dt.W.P()%2Cn%3Dnew%20t.B(t.D%5B1%5D).update(e).P()%3Breturn%20t.reset()%2Cn%7Dencrypt(t)%7Bif(this.K)throw%20new%20r(%22encrypt%20on%20already%20updated%20hmac%20called!%22)%3Breturn%20this.update(t)%2Cthis.digest(t)%7D%7D%7D%2CV%3Dtypeof%20w!%3Dv%26%26typeof%20w.getRandomValues%3D%3Dk%2CM%3D%22Invalid%20password%22%2C_%3D%22Invalid%20signature%22%2CB%3D%22zipjs-abort-check-password%22%3Bfunction%20D(t)%7Breturn%20V%3Fw.getRandomValues(t)%3AP.getRandomValues(t)%7Dconst%20W%3D16%2CK%3D%7Bname%3A%22PBKDF2%22%7D%2CE%3De.assign(%7Bhash%3A%7Bname%3A%22HMAC%22%7D%7D%2CK)%2CL%3De.assign(%7Biterations%3A1e3%2Chash%3A%7Bname%3A%22SHA-1%22%7D%7D%2CK)%2CO%3D%5B%22deriveBits%22%5D%2CT%3D%5B8%2C12%2C16%5D%2Cj%3D%5B16%2C24%2C32%5D%2CH%3D10%2CZ%3D%5B0%2C0%2C0%2C0%5D%2CF%3Dtypeof%20w!%3Dv%2CN%3DF%26%26w.subtle%2Cq%3DF%26%26typeof%20N!%3Dv%2CG%3DI.bytes%2CJ%3Dclass%7Bconstructor(t)%7Bconst%20e%3Dthis%3Be.L%3D%5B%5B%5B%5D%2C%5B%5D%2C%5B%5D%2C%5B%5D%2C%5B%5D%5D%2C%5B%5B%5D%2C%5B%5D%2C%5B%5D%2C%5B%5D%2C%5B%5D%5D%5D%2Ce.L%5B0%5D%5B0%5D%5B0%5D%7C%7Ce.O()%3Bconst%20n%3De.L%5B0%5D%5B4%5D%2Cs%3De.L%5B1%5D%2Co%3Dt.length%3Blet%20i%2Cc%2Ca%2Ch%3D1%3Bif(4!%3D%3Do%26%266!%3D%3Do%26%268!%3D%3Do)throw%20new%20r(%22invalid%20aes%20key%20size%22)%3Bfor(e.v%3D%5Bc%3Dt.slice(0)%2Ca%3D%5B%5D%5D%2Ci%3Do%3B4*o%2B28%3Ei%3Bi%2B%2B)%7Blet%20t%3Dc%5Bi-1%5D%3B(i%25o%3D%3D%3D0%7C%7C8%3D%3D%3Do%26%26i%25o%3D%3D%3D4)%26%26(t%3Dn%5Bt%3E%3E%3E24%5D%3C%3C24%5En%5Bt%3E%3E16%26255%5D%3C%3C16%5En%5Bt%3E%3E8%26255%5D%3C%3C8%5En%5B255%26t%5D%2Ci%25o%3D%3D%3D0%26%26(t%3Dt%3C%3C8%5Et%3E%3E%3E24%5Eh%3C%3C24%2Ch%3Dh%3C%3C1%5E283*(h%3E%3E7)))%2Cc%5Bi%5D%3Dc%5Bi-o%5D%5Et%7Dfor(let%20t%3D0%3Bi%3Bt%2B%2B%2Ci--)%7Bconst%20e%3Dc%5B3%26t%3Fi%3Ai-4%5D%3Ba%5Bt%5D%3D4%3E%3Di%7C%7C4%3Et%3Fe%3As%5B0%5D%5Bn%5Be%3E%3E%3E24%5D%5D%5Es%5B1%5D%5Bn%5Be%3E%3E16%26255%5D%5D%5Es%5B2%5D%5Bn%5Be%3E%3E8%26255%5D%5D%5Es%5B3%5D%5Bn%5B255%26e%5D%5D%7D%7Dencrypt(t)%7Breturn%20this.T(t%2C0)%7Ddecrypt(t)%7Breturn%20this.T(t%2C1)%7DO()%7Bconst%20t%3Dthis.L%5B0%5D%2Ce%3Dthis.L%5B1%5D%2Cn%3Dt%5B4%5D%2Cs%3De%5B4%5D%2Cr%3D%5B%5D%2Co%3D%5B%5D%3Blet%20i%2Cc%2Ca%2Ch%3Bfor(let%20t%3D0%3B256%3Et%3Bt%2B%2B)o%5B(r%5Bt%5D%3Dt%3C%3C1%5E283*(t%3E%3E7))%5Et%5D%3Dt%3Bfor(let%20f%3Di%3D0%3B!n%5Bf%5D%3Bf%5E%3Dc%7C%7C1%2Ci%3Do%5Bi%5D%7C%7C1)%7Blet%20o%3Di%5Ei%3C%3C1%5Ei%3C%3C2%5Ei%3C%3C3%5Ei%3C%3C4%3Bo%3Do%3E%3E8%5E255%26o%5E99%2Cn%5Bf%5D%3Do%2Cs%5Bo%5D%3Df%2Ch%3Dr%5Ba%3Dr%5Bc%3Dr%5Bf%5D%5D%5D%3Blet%20l%3D16843009*h%5E65537*a%5E257*c%5E16843008*f%2Cu%3D257*r%5Bo%5D%5E16843008*o%3Bfor(let%20n%3D0%3B4%3En%3Bn%2B%2B)t%5Bn%5D%5Bf%5D%3Du%3Du%3C%3C24%5Eu%3E%3E%3E8%2Ce%5Bn%5D%5Bo%5D%3Dl%3Dl%3C%3C24%5El%3E%3E%3E8%7Dfor(let%20n%3D0%3B5%3En%3Bn%2B%2B)t%5Bn%5D%3Dt%5Bn%5D.slice(0)%2Ce%5Bn%5D%3De%5Bn%5D.slice(0)%7DT(t%2Ce)%7Bif(4!%3D%3Dt.length)throw%20new%20r(%22invalid%20aes%20block%20size%22)%3Bconst%20n%3Dthis.v%5Be%5D%2Cs%3Dn.length%2F4-2%2Co%3D%5B0%2C0%2C0%2C0%5D%2Ci%3Dthis.L%5Be%5D%2Cc%3Di%5B0%5D%2Ca%3Di%5B1%5D%2Ch%3Di%5B2%5D%2Cf%3Di%5B3%5D%2Cl%3Di%5B4%5D%3Blet%20u%2Cw%2Cp%2Cd%3Dt%5B0%5D%5En%5B0%5D%2Cy%3Dt%5Be%3F3%3A1%5D%5En%5B1%5D%2Cm%3Dt%5B2%5D%5En%5B2%5D%2Cg%3Dt%5Be%3F1%3A3%5D%5En%5B3%5D%2CS%3D4%3Bfor(let%20t%3D0%3Bs%3Et%3Bt%2B%2B)u%3Dc%5Bd%3E%3E%3E24%5D%5Ea%5By%3E%3E16%26255%5D%5Eh%5Bm%3E%3E8%26255%5D%5Ef%5B255%26g%5D%5En%5BS%5D%2Cw%3Dc%5By%3E%3E%3E24%5D%5Ea%5Bm%3E%3E16%26255%5D%5Eh%5Bg%3E%3E8%26255%5D%5Ef%5B255%26d%5D%5En%5BS%2B1%5D%2Cp%3Dc%5Bm%3E%3E%3E24%5D%5Ea%5Bg%3E%3E16%26255%5D%5Eh%5Bd%3E%3E8%26255%5D%5Ef%5B255%26y%5D%5En%5BS%2B2%5D%2Cg%3Dc%5Bg%3E%3E%3E24%5D%5Ea%5Bd%3E%3E16%26255%5D%5Eh%5By%3E%3E8%26255%5D%5Ef%5B255%26m%5D%5En%5BS%2B3%5D%2CS%2B%3D4%2Cd%3Du%2Cy%3Dw%2Cm%3Dp%3Bfor(let%20t%3D0%3B4%3Et%3Bt%2B%2B)o%5Be%3F3%26-t%3At%5D%3Dl%5Bd%3E%3E%3E24%5D%3C%3C24%5El%5By%3E%3E16%26255%5D%3C%3C16%5El%5Bm%3E%3E8%26255%5D%3C%3C8%5El%5B255%26g%5D%5En%5BS%2B%2B%5D%2Cu%3Dd%2Cd%3Dy%2Cy%3Dm%2Cm%3Dg%2Cg%3Du%3Breturn%20o%7D%7D%2CQ%3Dclass%7Bconstructor(t%2Ce)%7Bthis.j%3Dt%2Cthis.H%3De%2Cthis.Z%3De%7Dreset()%7Bthis.Z%3Dthis.H%7Dupdate(t)%7Breturn%20this.F(this.j%2Ct%2Cthis.Z)%7DN(t)%7Bif(255%26~(t%3E%3E24))t%2B%3D1%3C%3C24%3Belse%7Blet%20e%3Dt%3E%3E16%26255%2Cn%3Dt%3E%3E8%26255%2Cs%3D255%26t%3B255%3D%3D%3De%3F(e%3D0%2C255%3D%3D%3Dn%3F(n%3D0%2C255%3D%3D%3Ds%3Fs%3D0%3A%2B%2Bs)%3A%2B%2Bn)%3A%2B%2Be%2Ct%3D0%2Ct%2B%3De%3C%3C16%2Ct%2B%3Dn%3C%3C8%2Ct%2B%3Ds%7Dreturn%20t%7Dq(t)%7B0%3D%3D%3D(t%5B0%5D%3Dthis.N(t%5B0%5D))%26%26(t%5B1%5D%3Dthis.N(t%5B1%5D))%7DF(t%2Ce%2Cn)%7Blet%20s%3Bif(!(s%3De.length))return%5B%5D%3Bconst%20r%3Dx.h(e)%3Bfor(let%20r%3D0%3Bs%3Er%3Br%2B%3D4)%7Bthis.q(n)%3Bconst%20s%3Dt.encrypt(n)%3Be%5Br%5D%5E%3Ds%5B0%5D%2Ce%5Br%2B1%5D%5E%3Ds%5B1%5D%2Ce%5Br%2B2%5D%5E%3Ds%5B2%5D%2Ce%5Br%2B3%5D%5E%3Ds%5B3%5D%7Dreturn%20x.l(e%2Cr)%7D%7D%2CX%3DU.M%3Blet%20Y%3DF%26%26q%26%26typeof%20N.importKey%3D%3Dk%2C%24%3DF%26%26q%26%26typeof%20N.deriveBits%3D%3Dk%3Bclass%20tt%20extends%20d%7Bconstructor(%7Bpassword%3At%2CrawPassword%3An%2Csigned%3As%2CencryptionStrength%3Ai%2CcheckPasswordOnly%3Ac%7D)%7Bsuper(%7Bstart()%7Be.assign(this%2C%7Bready%3Anew%20l(t%3D%3Ethis.G%3Dt)%2Cpassword%3Art(t%2Cn)%2Csigned%3As%2CJ%3Ai-1%2Cpending%3Anew%20o%7D)%7D%2Casync%20transform(t%2Ce)%7Bconst%20n%3Dthis%2C%7Bpassword%3As%2CJ%3Ai%2CG%3Aa%2Cready%3Ah%7D%3Dn%3Bs%3F(await(async(t%2Ce%2Cn%2Cs)%3D%3E%7Bconst%20o%3Dawait%20st(t%2Ce%2Cn%2Cit(s%2C0%2CT%5Be%5D))%2Ci%3Dit(s%2CT%5Be%5D)%3Bif(o%5B0%5D!%3Di%5B0%5D%7C%7Co%5B1%5D!%3Di%5B1%5D)throw%20new%20r(M)%7D)(n%2Ci%2Cs%2Cit(t%2C0%2CT%5Bi%5D%2B2))%2Ct%3Dit(t%2CT%5Bi%5D%2B2)%2Cc%3Fe.error(new%20r(B))%3Aa())%3Aawait%20h%3Bconst%20f%3Dnew%20o(t.length-H-(t.length-H)%25W)%3Be.enqueue(nt(n%2Ct%2Cf%2C0%2CH%2C!0))%7D%2Casync%20flush(t)%7Bconst%7Bsigned%3Ae%2CX%3An%2CY%3As%2Cpending%3Ai%2Cready%3Ac%7D%3Dthis%3Bif(s%26%26n)%7Bawait%20c%3Bconst%20a%3Dit(i%2C0%2Ci.length-H)%2Ch%3Dit(i%2Ci.length-H)%3Blet%20f%3Dnew%20o%3Bif(a.length)%7Bconst%20t%3Dat(G%2Ca)%3Bs.update(t)%3Bconst%20e%3Dn.update(t)%3Bf%3Dct(G%2Ce)%7Dif(e)%7Bconst%20t%3Dit(ct(G%2Cs.digest())%2C0%2CH)%3Bfor(let%20e%3D0%3BH%3Ee%3Be%2B%2B)if(t%5Be%5D!%3Dh%5Be%5D)throw%20new%20r(_)%7Dt.enqueue(f)%7D%7D%7D)%7D%7Dclass%20et%20extends%20d%7Bconstructor(%7Bpassword%3At%2CrawPassword%3An%2CencryptionStrength%3As%7D)%7Blet%20r%3Bsuper(%7Bstart()%7Be.assign(this%2C%7Bready%3Anew%20l(t%3D%3Ethis.G%3Dt)%2Cpassword%3Art(t%2Cn)%2CJ%3As-1%2Cpending%3Anew%20o%7D)%7D%2Casync%20transform(t%2Ce)%7Bconst%20n%3Dthis%2C%7Bpassword%3As%2CJ%3Ar%2CG%3Ai%2Cready%3Ac%7D%3Dn%3Blet%20a%3Dnew%20o%3Bs%3F(a%3Dawait(async(t%2Ce%2Cn)%3D%3E%7Bconst%20s%3DD(new%20o(T%5Be%5D))%3Breturn%20ot(s%2Cawait%20st(t%2Ce%2Cn%2Cs))%7D)(n%2Cr%2Cs)%2Ci())%3Aawait%20c%3Bconst%20h%3Dnew%20o(a.length%2Bt.length-t.length%25W)%3Bh.set(a%2C0)%2Ce.enqueue(nt(n%2Ct%2Ch%2Ca.length%2C0))%7D%2Casync%20flush(t)%7Bconst%7BX%3Ae%2CY%3An%2Cpending%3As%2Cready%3Ai%7D%3Dthis%3Bif(n%26%26e)%7Bawait%20i%3Blet%20c%3Dnew%20o%3Bif(s.length)%7Bconst%20t%3De.update(at(G%2Cs))%3Bn.update(t)%2Cc%3Dct(G%2Ct)%7Dr.signature%3Dct(G%2Cn.digest()).slice(0%2CH)%2Ct.enqueue(ot(c%2Cr.signature))%7D%7D%7D)%2Cr%3Dthis%7D%7Dfunction%20nt(t%2Ce%2Cn%2Cs%2Cr%2Ci)%7Bconst%7BX%3Ac%2CY%3Aa%2Cpending%3Ah%7D%3Dt%2Cf%3De.length-r%3Blet%20l%3Bfor(h.length%26%26(e%3Dot(h%2Ce)%2Cn%3D((t%2Ce)%3D%3E%7Bif(e%26%26e%3Et.length)%7Bconst%20n%3Dt%3B(t%3Dnew%20o(e)).set(n%2C0)%7Dreturn%20t%7D)(n%2Cf-f%25W))%2Cl%3D0%3Bf-W%3E%3Dl%3Bl%2B%3DW)%7Bconst%20t%3Dat(G%2Cit(e%2Cl%2Cl%2BW))%3Bi%26%26a.update(t)%3Bconst%20r%3Dc.update(t)%3Bi%7C%7Ca.update(r)%2Cn.set(ct(G%2Cr)%2Cl%2Bs)%7Dreturn%20t.pending%3Dit(e%2Cl)%2Cn%7Dasync%20function%20st(n%2Cs%2Cr%2Ci)%7Bn.password%3Dnull%3Bconst%20c%3Dawait(async(t%2Ce%2Cn%2Cs%2Cr)%3D%3E%7Bif(!Y)return%20U.importKey(e)%3Btry%7Breturn%20await%20N.importKey(%22raw%22%2Ce%2Cn%2C!1%2Cr)%7Dcatch%7Breturn%20Y%3D!1%2CU.importKey(e)%7D%7D)(0%2Cr%2CE%2C0%2CO)%2Ca%3Dawait(async(t%2Ce%2Cn)%3D%3E%7Bif(!%24)return%20U._(e%2Ct.salt%2CL.iterations%2Cn)%3Btry%7Breturn%20await%20N.deriveBits(t%2Ce%2Cn)%7Dcatch%7Breturn%20%24%3D!1%2CU._(e%2Ct.salt%2CL.iterations%2Cn)%7D%7D)(e.assign(%7Bsalt%3Ai%7D%2CL)%2Cc%2C8*(2*j%5Bs%5D%2B2))%2Ch%3Dnew%20o(a)%2Cf%3Dat(G%2Cit(h%2C0%2Cj%5Bs%5D))%2Cl%3Dat(G%2Cit(h%2Cj%5Bs%5D%2C2*j%5Bs%5D))%2Cu%3Dit(h%2C2*j%5Bs%5D)%3Breturn%20e.assign(n%2C%7Bkeys%3A%7Bkey%3Af%2C%24%3Al%2CpasswordVerification%3Au%7D%2CX%3Anew%20Q(new%20J(f)%2Ct.from(Z))%2CY%3Anew%20X(l)%7D)%2Cu%7Dfunction%20rt(t%2Ce)%7Breturn%20e%3D%3D%3Db%3F(t%3D%3E%7Bif(typeof%20u%3D%3Dv)%7Bconst%20e%3Dnew%20o((t%3Dunescape(encodeURIComponent(t))).length)%3Bfor(let%20n%3D0%3Bn%3Ce.length%3Bn%2B%2B)e%5Bn%5D%3Dt.charCodeAt(n)%3Breturn%20e%7Dreturn(new%20u).encode(t)%7D)(t)%3Ae%7Dfunction%20ot(t%2Ce)%7Blet%20n%3Dt%3Breturn%20t.length%2Be.length%26%26(n%3Dnew%20o(t.length%2Be.length)%2Cn.set(t%2C0)%2Cn.set(e%2Ct.length))%2Cn%7Dfunction%20it(t%2Ce%2Cn)%7Breturn%20t.subarray(e%2Cn)%7Dfunction%20ct(t%2Ce)%7Breturn%20t.p(e)%7Dfunction%20at(t%2Ce)%7Breturn%20t.m(e)%7Dclass%20ht%20extends%20d%7Bconstructor(%7Bpassword%3At%2CpasswordVerification%3An%2CcheckPasswordOnly%3As%7D)%7Bsuper(%7Bstart()%7Be.assign(this%2C%7Bpassword%3At%2CpasswordVerification%3An%7D)%2Cwt(this%2Ct)%7D%2Ctransform(t%2Ce)%7Bconst%20n%3Dthis%3Bif(n.password)%7Bconst%20e%3Dlt(n%2Ct.subarray(0%2C12))%3Bif(n.password%3Dnull%2Ce.at(-1)!%3Dn.passwordVerification)throw%20new%20r(M)%3Bt%3Dt.subarray(12)%7Ds%3Fe.error(new%20r(B))%3Ae.enqueue(lt(n%2Ct))%7D%7D)%7D%7Dclass%20ft%20extends%20d%7Bconstructor(%7Bpassword%3At%2CpasswordVerification%3An%7D)%7Bsuper(%7Bstart()%7Be.assign(this%2C%7Bpassword%3At%2CpasswordVerification%3An%7D)%2Cwt(this%2Ct)%7D%2Ctransform(t%2Ce)%7Bconst%20n%3Dthis%3Blet%20s%2Cr%3Bif(n.password)%7Bn.password%3Dnull%3Bconst%20e%3DD(new%20o(12))%3Be%5B11%5D%3Dn.passwordVerification%2Cs%3Dnew%20o(t.length%2Be.length)%2Cs.set(ut(n%2Ce)%2C0)%2Cr%3D12%7Delse%20s%3Dnew%20o(t.length)%2Cr%3D0%3Bs.set(ut(n%2Ct)%2Cr)%2Ce.enqueue(s)%7D%7D)%7D%7Dfunction%20lt(t%2Ce)%7Bconst%20n%3Dnew%20o(e.length)%3Bfor(let%20s%3D0%3Bs%3Ce.length%3Bs%2B%2B)n%5Bs%5D%3Ddt(t)%5Ee%5Bs%5D%2Cpt(t%2Cn%5Bs%5D)%3Breturn%20n%7Dfunction%20ut(t%2Ce)%7Bconst%20n%3Dnew%20o(e.length)%3Bfor(let%20s%3D0%3Bs%3Ce.length%3Bs%2B%2B)n%5Bs%5D%3Ddt(t)%5Ee%5Bs%5D%2Cpt(t%2Ce%5Bs%5D)%3Breturn%20n%7Dfunction%20wt(t%2Cn)%7Bconst%20s%3D%5B305419896%2C591751049%2C878082192%5D%3Be.assign(t%2C%7Bkeys%3As%2Ctt%3Anew%20C(s%5B0%5D)%2Cet%3Anew%20C(s%5B2%5D)%7D)%3Bfor(let%20e%3D0%3Be%3Cn.length%3Be%2B%2B)pt(t%2Cn.charCodeAt(e))%7Dfunction%20pt(t%2Ce)%7Blet%5Bn%2Cr%2Co%5D%3Dt.keys%3Bt.tt.append(%5Be%5D)%2Cn%3D~t.tt.get()%2Cr%3Dmt(s.imul(mt(r%2Byt(n))%2C134775813)%2B1)%2Ct.et.append(%5Br%3E%3E%3E24%5D)%2Co%3D~t.et.get()%2Ct.keys%3D%5Bn%2Cr%2Co%5D%7Dfunction%20dt(t)%7Bconst%20e%3D2%7Ct.keys%5B2%5D%3Breturn%20yt(s.imul(e%2C1%5Ee)%3E%3E%3E8)%7Dfunction%20yt(t)%7Breturn%20255%26t%7Dfunction%20mt(t)%7Breturn%204294967295%26t%7Dclass%20gt%20extends%20d%7Bconstructor(t%2C%7BchunkSize%3Ae%2Cnt%3An%2CCompressionStream%3As%7D)%7Bsuper(%7B%7D)%3Bconst%7Bcompressed%3Ar%2Cencrypted%3Ao%2CuseCompressionStream%3Ai%2CzipCrypto%3Ac%2Csigned%3Aa%2Clevel%3Ah%7D%3Dt%2Cl%3Dthis%3Blet%20u%2Cw%2Cp%3Dsuper.readable%3Bo%26%26!c%7C%7C!a%7C%7C(u%3Dnew%20A%2Cp%3Dkt(p%2Cu))%2Cr%26%26(p%3Dvt(p%2Ci%2C%7Blevel%3Ah%2CchunkSize%3Ae%7D%2Cs%2Cn%2Cs))%2Co%26%26(c%3Fp%3Dkt(p%2Cnew%20ft(t))%3A(w%3Dnew%20et(t)%2Cp%3Dkt(p%2Cw)))%2Cbt(l%2Cp%2C()%3D%3E%7Blet%20t%3Bo%26%26!c%26%26(t%3Dw.signature)%2Co%26%26!c%7C%7C!a%7C%7C(t%3Dnew%20f(u.value.buffer).getUint32(0))%2Cl.signature%3Dt%7D)%7D%7Dclass%20St%20extends%20d%7Bconstructor(t%2C%7BchunkSize%3Ae%2Cst%3An%2CDecompressionStream%3As%7D)%7Bsuper(%7B%7D)%3Bconst%7BzipCrypto%3Ao%2Cencrypted%3Ai%2Csigned%3Ac%2Csignature%3Aa%2Ccompressed%3Ah%2CuseCompressionStream%3Al%2Crt%3Au%7D%3Dt%3Blet%20w%2Cp%2Cd%3Dsuper.readable%3Bi%26%26(o%3Fd%3Dkt(d%2Cnew%20ht(t))%3A(p%3Dnew%20tt(t)%2Cd%3Dkt(d%2Cp)))%2Ch%26%26(d%3Dvt(d%2Cl%2C%7BchunkSize%3Ae%2Crt%3Au%7D%2Cs%2Cn%2Cs))%2Ci%26%26!o%7C%7C!c%7C%7C(w%3Dnew%20A%2Cd%3Dkt(d%2Cw))%2Cbt(this%2Cd%2C()%3D%3E%7Bif((!i%7C%7Co)%26%26c)%7Bconst%20t%3Dnew%20f(w.value.buffer)%3Bif(a!%3Dt.getUint32(0%2C!1))throw%20new%20r(_)%7D%7D)%7D%7Dfunction%20bt(t%2Cn%2Cs)%7Bn%3Dkt(n%2Cnew%20d(%7Bflush%3As%7D))%2Ce.defineProperty(t%2C%22readable%22%2C%7Bget%3A()%3D%3En%7D)%7Dfunction%20vt(t%2Ce%2Cn%2Cs%2Cr%2Co)%7Bconst%20i%3De%26%26s%3Fs%3Ar%7C%7Co%2Cc%3Dn.rt%3F%22deflate64-raw%22%3A%22deflate-raw%22%3Btry%7Bt%3Dkt(t%2Cnew%20i(c%2Cn))%7Dcatch(s)%7Bif(!e)throw%20s%3Bif(r)t%3Dkt(t%2Cnew%20r(c%2Cn))%3Belse%7Bif(!o)throw%20s%3Bt%3Dkt(t%2Cnew%20o(c%2Cn))%7D%7Dreturn%20t%7Dfunction%20kt(t%2Ce)%7Breturn%20t.pipeThrough(e)%7Dconst%20zt%3D%22data%22%2CCt%3D%22close%22%3Bclass%20At%20extends%20d%7Bconstructor(t%2Cn)%7Bsuper(%7B%7D)%3Bconst%20s%3Dthis%2C%7BcodecType%3Ao%7D%3Dt%3Blet%20i%3Bo.startsWith(%22deflate%22)%3Fi%3Dgt%3Ao.startsWith(%22inflate%22)%26%26(i%3DSt)%2Cs.outputSize%3D0%3Blet%20c%3D0%3Bconst%20a%3Dnew%20i(t%2Cn)%2Ch%3Dsuper.readable%2Cf%3Dnew%20d(%7Btransform(t%2Ce)%7Bt%26%26t.length%26%26(c%2B%3Dt.length%2Ce.enqueue(t))%7D%2Cflush()%7Be.assign(s%2C%7BinputSize%3Ac%7D)%7D%7D)%2Cl%3Dnew%20d(%7Btransform(e%2Cn)%7Bif(e%26%26e.length%26%26(n.enqueue(e)%2Cs.outputSize%2B%3De.length%2Ct.outputSize!%3D%3Db%26%26s.outputSize%3Et.outputSize))throw%20new%20r(%22Invalid%20uncompressed%20size%22)%7D%2Cflush()%7Bconst%7Bsignature%3At%7D%3Da%3Be.assign(s%2C%7Bsignature%3At%2CinputSize%3Ac%7D)%7D%7D)%3Be.defineProperty(s%2C%22readable%22%2C%7Bget%3A()%3D%3Eh.pipeThrough(f).pipeThrough(a).pipeThrough(l)%7D)%7D%7Dclass%20xt%20extends%20d%7Bconstructor(t)%7Blet%20e%3Bsuper(%7Btransform%3Afunction%20n(s%2Cr)%7Bif(e)%7Bconst%20t%3Dnew%20o(e.length%2Bs.length)%3Bt.set(e)%2Ct.set(s%2Ce.length)%2Cs%3Dt%2Ce%3Dnull%7Ds.length%3Et%3F(r.enqueue(s.slice(0%2Ct))%2Cn(s.slice(t)%2Cr))%3Ae%3Ds%7D%2Cflush(t)%7Be%26%26e.length%26%26t.enqueue(e)%7D%7D)%7D%7Dconst%20It%3Dnew%20h%2CRt%3Dnew%20h%3Blet%20Pt%2CUt%2CVt%2CMt%2C_t%2CBt%3D0%3Basync%20function%20Dt(t)%7Btry%7Bconst%7Boptions%3Ae%2Cconfig%3As%7D%3Dt%3Bif(!e.useCompressionStream)try%7Bawait%20self.initModule(t.config)%7Dcatch%7Be.useCompressionStream%3D!0%7Ds.CompressionStream%3Dself.CompressionStream%2Cs.DecompressionStream%3Dself.DecompressionStream%3Bconst%20r%3D%7BhighWaterMark%3A1%7D%2Co%3Dt.readable%7C%7Cnew%20y(%7Basync%20pull(t)%7Bconst%20e%3Dnew%20l(t%3D%3EIt.set(Bt%2Ct))%3BWt(%7Btype%3A%22pull%22%2CmessageId%3ABt%7D)%2CBt%3D(Bt%2B1)%25n.MAX_SAFE_INTEGER%3Bconst%7Bvalue%3As%2Cdone%3Ar%7D%3Dawait%20e%3Bt.enqueue(s)%2Cr%26%26t.close()%7D%7D%2Cr)%2Ci%3Dt.writable%7C%7Cnew%20m(%7Basync%20write(t)%7Blet%20e%3Bconst%20s%3Dnew%20l(t%3D%3Ee%3Dt)%3BRt.set(Bt%2Ce)%2CWt(%7Btype%3Azt%2Cvalue%3At%2CmessageId%3ABt%7D)%2CBt%3D(Bt%2B1)%25n.MAX_SAFE_INTEGER%2Cawait%20s%7D%7D%2Cr)%2Cc%3Dnew%20At(e%2Cs)%3BPt%3Dnew%20AbortController%3Bconst%7Bsignal%3Aa%7D%3DPt%3Bawait%20o.pipeThrough(c).pipeThrough(new%20xt(s.chunkSize)).pipeTo(i%2C%7Bsignal%3Aa%2CpreventClose%3A!0%2CpreventAbort%3A!0%7D)%2Cawait%20i.getWriter().close()%3Bconst%7Bsignature%3Ah%2CinputSize%3Af%2CoutputSize%3Au%7D%3Dc%3BWt(%7Btype%3ACt%2Cresult%3A%7Bsignature%3Ah%2CinputSize%3Af%2CoutputSize%3Au%7D%7D)%7Dcatch(t)%7Bt.outputSize%3D0%2CKt(t)%7D%7Dfunction%20Wt(t)%7Blet%7Bvalue%3Ae%7D%3Dt%3Bif(e)if(e.length)try%7Be%3Dnew%20o(e)%2Ct.value%3De.buffer%2Cp(t%2C%5Bt.value%5D)%7Dcatch%7Bp(t)%7Delse%20p(t)%3Belse%20p(t)%7Dfunction%20Kt(t%3Dnew%20r(%22Unknown%20error%22))%7Bconst%7Bmessage%3Ae%2Cstack%3An%2Ccode%3As%2Cname%3Ao%2CoutputSize%3Ai%7D%3Dt%3Bp(%7Berror%3A%7Bmessage%3Ae%2Cstack%3An%2Ccode%3As%2Cname%3Ao%2CoutputSize%3Ai%7D%7D)%7Dfunction%20Et(t%2Ce%2Cn%3D%7B%7D)%7Bconst%20i%3D%22number%22%3D%3Dtypeof%20n.level%3Fn.level%3A-1%2Cc%3D%22number%22%3D%3Dtypeof%20n.ot%3Fn.ot%3A65536%2Ca%3D%22number%22%3D%3Dtypeof%20n.it%3Fn.it%3A65536%3Breturn%20new%20d(%7Bstart()%7Blet%20n%3Bif(this.ct%3DVt(c)%2Cthis.in%3DVt(a)%2Cthis.it%3Da%2Cthis.ht%3Dnew%20o(c)%2Ct%3F(this.ft%3DUt.deflate_process%2Cthis.lt%3DUt.deflate_last_consumed%2Cthis.ut%3DUt.deflate_end%2Cthis.wt%3DUt.deflate_new()%2Cn%3D%22gzip%22%3D%3D%3De%3FUt.deflate_init_gzip(this.wt%2Ci)%3A%22deflate-raw%22%3D%3D%3De%3FUt.deflate_init_raw(this.wt%2Ci)%3AUt.deflate_init(this.wt%2Ci))%3A%22deflate64-raw%22%3D%3D%3De%3F(this.ft%3DUt.inflate9_process%2Cthis.lt%3DUt.inflate9_last_consumed%2Cthis.ut%3DUt.inflate9_end%2Cthis.wt%3DUt.inflate9_new()%2Cn%3DUt.inflate9_init_raw(this.wt))%3A(this.ft%3DUt.inflate_process%2Cthis.lt%3DUt.inflate_last_consumed%2Cthis.ut%3DUt.inflate_end%2Cthis.wt%3DUt.inflate_new()%2Cn%3D%22deflate-raw%22%3D%3D%3De%3FUt.inflate_init_raw(this.wt)%3A%22gzip%22%3D%3D%3De%3FUt.inflate_init_gzip(this.wt)%3AUt.inflate_init(this.wt))%2C0!%3D%3Dn)throw%20new%20r(%22init%20failed%3A%22%2Bn)%7D%2Ctransform(e%2Cn)%7Btry%7Bconst%20i%3De%2Ca%3Dnew%20o(_t.buffer)%2Ch%3Dthis.ft%2Cf%3Dthis.lt%2Cl%3Dthis.ct%2Cu%3Dthis.ht%3Blet%20w%3D0%3Bfor(%3Bw%3Ci.length%3B)%7Bconst%20e%3Ds.min(i.length-w%2C32768)%3Bthis.in%26%26this.it%3E%3De%7C%7C(this.in%26%26Mt%26%26Mt(this.in)%2Cthis.in%3DVt(e)%2Cthis.it%3De)%2Ca.set(i.subarray(w%2Cw%2Be)%2Cthis.in)%3Bconst%20o%3Dh(this.wt%2Cthis.in%2Ce%2Cl%2Cc%2C0)%2Cp%3D16777215%26o%3Bif(p%26%26(u.set(a.subarray(l%2Cl%2Bp)%2C0)%2Cn.enqueue(u.slice(0%2Cp)))%2C!t)%7Bconst%20t%3Do%3E%3E24%26255%2Ce%3D128%26t%3Ft-256%3At%3Bif(0%3Ee)throw%20new%20r(%22process%20error%3A%22%2Be)%7Dconst%20d%3Df(this.wt)%3Bif(0%3D%3D%3Dd)break%3Bw%2B%3Dd%7D%7Dcatch(t)%7Bthis.ut%26%26this.wt%26%26this.ut(this.wt)%2Cthis.in%26%26Mt%26%26Mt(this.in)%2Cthis.ct%26%26Mt%26%26Mt(this.ct)%2Cn.error(t)%7D%7D%2Cflush(e)%7Btry%7Bconst%20n%3Dnew%20o(_t.buffer)%2Cs%3Dthis.ft%2Ci%3Dthis.ct%2Ca%3Dthis.ht%3Bfor(%3B%3B)%7Bconst%20o%3Ds(this.wt%2C0%2C0%2Ci%2Cc%2C4)%2Ch%3D16777215%26o%2Cf%3Do%3E%3E24%26255%3Bif(!t)%7Bconst%20t%3D128%26f%3Ff-256%3Af%3Bif(0%3Et)throw%20new%20r(%22process%20error%3A%22%2Bt)%7Dif(h%26%26(a.set(n.subarray(i%2Ci%2Bh)%2C0)%2Ce.enqueue(a.slice(0%2Ch)))%2C1%3D%3D%3Df%7C%7C0%3D%3D%3Dh)break%7D%7Dcatch(t)%7Be.error(t)%7Dfinally%7Bif(this.ut%26%26this.wt)%7Bconst%20t%3Dthis.ut(this.wt)%3B0!%3D%3Dt%26%26e.error(new%20r(%22end%20error%3A%22%2Bt))%7Dthis.in%26%26Mt%26%26Mt(this.in)%2Cthis.ct%26%26Mt%26%26Mt(this.ct)%7D%7D%7D)%7DaddEventListener(%22message%22%2C(%7Bdata%3At%7D)%3D%3E%7Bconst%7Btype%3Ae%2CmessageId%3An%2Cvalue%3As%2Cdone%3Ar%7D%3Dt%3Btry%7Bif(%22start%22%3D%3De%26%26Dt(t)%2Ce%3D%3Dzt)%7Bconst%20t%3DIt.get(n)%3BIt.delete(n)%2Ct(%7Bvalue%3Anew%20o(s)%2Cdone%3Ar%7D)%7Dif(%22ack%22%3D%3De)%7Bconst%20t%3DRt.get(n)%3BRt.delete(n)%2Ct()%7De%3D%3DCt%26%26Pt.abort()%7Dcatch(t)%7BKt(t)%7D%7D)%3Bclass%20Lt%7Bconstructor(t%3D%22deflate%22%2Ce)%7Breturn%20Et(!0%2Ct%2Ce)%7D%7Dclass%20Ot%7Bconstructor(t%3D%22deflate%22%2Ce)%7Breturn%20Et(!1%2Ct%2Ce)%7D%7Dlet%20Tt%3D!1%3Bself.initModule%3Dasync%20t%3D%3E%7Btry%7Bconst%20e%3Dawait(async(t%2C%7BbaseURI%3Ae%7D)%3D%3E%7Bif(!Tt)%7Blet%20n%2Cs%3Btry%7Btry%7Bs%3Dnew%20URL(t%2Ce)%7Dcatch%7B%7Dconst%20r%3Dawait%20fetch(s)%3Bn%3Dawait%20r.arrayBuffer()%7Dcatch(e)%7Bif(!t.startsWith(%22data%3Aapplication%2Fwasm%3Bbase64%2C%22))throw%20e%3Bn%3D(t%3D%3E%7Bconst%20e%3Dt.split(%22%2C%22)%5B1%5D%2Cn%3Datob(e)%2Cs%3Dn.length%2Cr%3Dnew%20o(s)%3Bfor(let%20t%3D0%3Bs%3Et%3B%2B%2Bt)r%5Bt%5D%3Dn.charCodeAt(t)%3Breturn%20r.buffer%7D)(t)%7D(t%3D%3E%7Bif(Ut%3Dt%2C(%7Bmalloc%3AVt%2Cfree%3AMt%2Cmemory%3A_t%7D%3DUt)%2C%22function%22!%3Dtypeof%20Vt%7C%7C%22function%22!%3Dtypeof%20Mt%7C%7C!_t)throw%20Ut%3DVt%3DMt%3D_t%3Dnull%2Cnew%20r(%22Invalid%20WASM%20module%22)%7D)((await%20WebAssembly.instantiate(n)).instance.exports)%2CTt%3D!0%7D%7D)(t.wasmURI%2Ct)%3Breturn%20t.nt%3DLt%2Ct.st%3DOt%2Ce%7Dcatch%7B%7D%7D%7D)%3B%0A`
        }
    })
}
var Me = [];
for (let e = 0; e < 256; e++) {
    let t = e;
    for (let e = 0; e < 8; e++)
        t & 1 ? t = t >>> 1 ^ 3988292384 : t >>>= 1;
    Me[e] = t
}
var Ne = class {
    constructor(e) {
        this.crc = e || -1
    }
    append(e) {
        let t = this.crc | 0;
        for (let n = 0, r = e.length | 0; n < r; n++)
            t = t >>> 8 ^ Me[(t ^ e[n]) & 255];
        this.crc = t
    }
    get() {
        return ~this.crc
    }
}
  , Pe = class extends TransformStream {
    constructor() {
        let e, t = new Ne;
        super({
            transform(e, n) {
                t.append(e),
                n.enqueue(e)
            },
            flush() {
                let n = new Uint8Array(4);
                new DataView(n.buffer).setUint32(0, t.get()),
                e.value = n
            }
        }),
        e = this
    }
}
;
function Fe(e) {
    if (typeof TextEncoder > `u`) {
        e = unescape(encodeURIComponent(e));
        let t = new Uint8Array(e.length);
        for (let n = 0; n < t.length; n++)
            t[n] = e.charCodeAt(n);
        return t
    } else
        return new TextEncoder().encode(e)
}
var M = {
    concat(e, t) {
        if (e.length === 0 || t.length === 0)
            return e.concat(t);
        let n = e[e.length - 1]
          , r = M.getPartial(n);
        return r === 32 ? e.concat(t) : M._shiftRight(t, r, n | 0, e.slice(0, e.length - 1))
    },
    bitLength(e) {
        let t = e.length;
        if (t === 0)
            return 0;
        let n = e[t - 1];
        return (t - 1) * 32 + M.getPartial(n)
    },
    clamp(e, t) {
        if (e.length * 32 < t)
            return e;
        e = e.slice(0, Math.ceil(t / 32));
        let n = e.length;
        return t &= 31,
        n > 0 && t && (e[n - 1] = M.partial(t, e[n - 1] & 2147483648 >> t - 1, 1)),
        e
    },
    partial(e, t, n) {
        return e === 32 ? t : (n ? t | 0 : t << 32 - e) + e * 1099511627776
    },
    getPartial(e) {
        return Math.round(e / 1099511627776) || 32
    },
    _shiftRight(e, t, n, r) {
        for (r === void 0 && (r = []); t >= 32; t -= 32)
            r.push(n),
            n = 0;
        if (t === 0)
            return r.concat(e);
        for (let i = 0; i < e.length; i++)
            r.push(n | e[i] >>> t),
            n = e[i] << 32 - t;
        let i = e.length ? e[e.length - 1] : 0
          , a = M.getPartial(i);
        return r.push(M.partial(t + a & 31, t + a > 32 ? n : r.pop(), 1)),
        r
    }
}
  , Ie = {
    bytes: {
        fromBits(e) {
            let t = M.bitLength(e) / 8, n = new Uint8Array(t), r;
            for (let i = 0; i < t; i++)
                i & 3 || (r = e[i / 4]),
                n[i] = r >>> 24,
                r <<= 8;
            return n
        },
        toBits(e) {
            let t = [], n, r = 0;
            for (n = 0; n < e.length; n++)
                r = r << 8 | e[n],
                (n & 3) == 3 && (t.push(r),
                r = 0);
            return n & 3 && t.push(M.partial(8 * (n & 3), r)),
            t
        }
    }
}
  , Le = {};
Le.sha1 = class {
    constructor(e) {
        let t = this;
        t.blockSize = 512,
        t._init = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
        t._key = [1518500249, 1859775393, 2400959708, 3395469782],
        e ? (t._h = e._h.slice(0),
        t._buffer = e._buffer.slice(0),
        t._length = e._length) : t.reset()
    }
    reset() {
        let e = this;
        return e._h = e._init.slice(0),
        e._buffer = [],
        e._length = 0,
        e
    }
    update(e) {
        let t = this;
        typeof e == `string` && (e = Ie.utf8String.toBits(e));
        let n = t._buffer = M.concat(t._buffer, e)
          , r = t._length
          , i = t._length = r + M.bitLength(e);
        if (i > 9007199254740991)
            throw Error(`Cannot hash more than 2^53 - 1 bits`);
        let a = new Uint32Array(n)
          , o = 0;
        for (let e = t.blockSize + r - (t.blockSize + r & t.blockSize - 1); e <= i; e += t.blockSize)
            t._block(a.subarray(16 * o, 16 * (o + 1))),
            o += 1;
        return n.splice(0, 16 * o),
        t
    }
    finalize() {
        let e = this
          , t = e._buffer
          , n = e._h;
        t = M.concat(t, [M.partial(1, 1)]);
        for (let e = t.length + 2; e & 15; e++)
            t.push(0);
        for (t.push(Math.floor(e._length / 4294967296)),
        t.push(e._length | 0); t.length; )
            e._block(t.splice(0, 16));
        return e.reset(),
        n
    }
    _f(e, t, n, r) {
        if (e <= 19)
            return t & n | ~t & r;
        if (e <= 39)
            return t ^ n ^ r;
        if (e <= 59)
            return t & n | t & r | n & r;
        if (e <= 79)
            return t ^ n ^ r
    }
    _S(e, t) {
        return t << e | t >>> 32 - e
    }
    _block(e) {
        let t = this
          , n = t._h
          , r = Array(80);
        for (let t = 0; t < 16; t++)
            r[t] = e[t];
        let i = n[0]
          , a = n[1]
          , o = n[2]
          , s = n[3]
          , c = n[4];
        for (let e = 0; e <= 79; e++) {
            e >= 16 && (r[e] = t._S(1, r[e - 3] ^ r[e - 8] ^ r[e - 14] ^ r[e - 16]));
            let n = t._S(5, i) + t._f(e, a, o, s) + c + r[e] + t._key[Math.floor(e / 20)] | 0;
            c = s,
            s = o,
            o = t._S(30, a),
            a = i,
            i = n
        }
        n[0] = n[0] + i | 0,
        n[1] = n[1] + a | 0,
        n[2] = n[2] + o | 0,
        n[3] = n[3] + s | 0,
        n[4] = n[4] + c | 0
    }
}
;
var Re = {};
Re.aes = class {
    constructor(e) {
        let t = this;
        t._tables = [[[], [], [], [], []], [[], [], [], [], []]],
        t._tables[0][0][0] || t._precompute();
        let n = t._tables[0][4], r = t._tables[1], i = e.length, a, o, s, c = 1;
        if (i !== 4 && i !== 6 && i !== 8)
            throw Error(`invalid aes key size`);
        for (t._key = [o = e.slice(0), s = []],
        a = i; a < 4 * i + 28; a++) {
            let e = o[a - 1];
            (a % i === 0 || i === 8 && a % i === 4) && (e = n[e >>> 24] << 24 ^ n[e >> 16 & 255] << 16 ^ n[e >> 8 & 255] << 8 ^ n[e & 255],
            a % i === 0 && (e = e << 8 ^ e >>> 24 ^ c << 24,
            c = c << 1 ^ (c >> 7) * 283)),
            o[a] = o[a - i] ^ e
        }
        for (let e = 0; a; e++,
        a--) {
            let t = o[e & 3 ? a : a - 4];
            a <= 4 || e < 4 ? s[e] = t : s[e] = r[0][n[t >>> 24]] ^ r[1][n[t >> 16 & 255]] ^ r[2][n[t >> 8 & 255]] ^ r[3][n[t & 255]]
        }
    }
    encrypt(e) {
        return this._crypt(e, 0)
    }
    decrypt(e) {
        return this._crypt(e, 1)
    }
    _precompute() {
        let e = this._tables[0], t = this._tables[1], n = e[4], r = t[4], i = [], a = [], o, s, c, l;
        for (let e = 0; e < 256; e++)
            a[(i[e] = e << 1 ^ (e >> 7) * 283) ^ e] = e;
        for (let u = o = 0; !n[u]; u ^= s || 1,
        o = a[o] || 1) {
            let a = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4;
            a = a >> 8 ^ a & 255 ^ 99,
            n[u] = a,
            r[a] = u,
            l = i[c = i[s = i[u]]];
            let d = l * 16843009 ^ c * 65537 ^ s * 257 ^ u * 16843008
              , f = i[a] * 257 ^ a * 16843008;
            for (let n = 0; n < 4; n++)
                e[n][u] = f = f << 24 ^ f >>> 8,
                t[n][a] = d = d << 24 ^ d >>> 8
        }
        for (let n = 0; n < 5; n++)
            e[n] = e[n].slice(0),
            t[n] = t[n].slice(0)
    }
    _crypt(e, t) {
        if (e.length !== 4)
            throw Error(`invalid aes block size`);
        let n = this._key[t], r = n.length / 4 - 2, i = [0, 0, 0, 0], a = this._tables[t], o = a[0], s = a[1], c = a[2], l = a[3], u = a[4], d = e[0] ^ n[0], f = e[t ? 3 : 1] ^ n[1], p = e[2] ^ n[2], m = e[t ? 1 : 3] ^ n[3], h = 4, g, _, v;
        for (let e = 0; e < r; e++)
            g = o[d >>> 24] ^ s[f >> 16 & 255] ^ c[p >> 8 & 255] ^ l[m & 255] ^ n[h],
            _ = o[f >>> 24] ^ s[p >> 16 & 255] ^ c[m >> 8 & 255] ^ l[d & 255] ^ n[h + 1],
            v = o[p >>> 24] ^ s[m >> 16 & 255] ^ c[d >> 8 & 255] ^ l[f & 255] ^ n[h + 2],
            m = o[m >>> 24] ^ s[d >> 16 & 255] ^ c[f >> 8 & 255] ^ l[p & 255] ^ n[h + 3],
            h += 4,
            d = g,
            f = _,
            p = v;
        for (let e = 0; e < 4; e++)
            i[t ? 3 & -e : e] = u[d >>> 24] << 24 ^ u[f >> 16 & 255] << 16 ^ u[p >> 8 & 255] << 8 ^ u[m & 255] ^ n[h++],
            g = d,
            d = f,
            f = p,
            p = m,
            m = g;
        return i
    }
}
;
var ze = {
    getRandomValues(e) {
        let t = new Uint32Array(e.buffer)
          , n = e => {
            let t = 987654321
              , n = 4294967295;
            return function() {
                return t = 36969 * (t & 65535) + (t >> 16) & n,
                e = 18e3 * (e & 65535) + (e >> 16) & n,
                (((t << 16) + e & n) / 4294967296 + .5) * (Math.random() > .5 ? 1 : -1)
            }
        }
        ;
        for (let r = 0, i; r < e.length; r += 4) {
            let e = n((i || Math.random()) * 4294967296);
            i = e() * 987654071,
            t[r / 4] = e() * 4294967296 | 0
        }
        return e
    }
}
  , Be = {};
Be.ctrGladman = class {
    constructor(e, t) {
        this._prf = e,
        this._initIv = t,
        this._iv = t
    }
    reset() {
        this._iv = this._initIv
    }
    update(e) {
        return this.calculate(this._prf, e, this._iv)
    }
    incWord(e) {
        if ((e >> 24 & 255) == 255) {
            let t = e >> 16 & 255
              , n = e >> 8 & 255
              , r = e & 255;
            t === 255 ? (t = 0,
            n === 255 ? (n = 0,
            r === 255 ? r = 0 : ++r) : ++n) : ++t,
            e = 0,
            e += t << 16,
            e += n << 8,
            e += r
        } else
            e += 1 << 24;
        return e
    }
    incCounter(e) {
        (e[0] = this.incWord(e[0])) === 0 && (e[1] = this.incWord(e[1]))
    }
    calculate(e, t, n) {
        let r;
        if (!(r = t.length))
            return [];
        let i = M.bitLength(t);
        for (let i = 0; i < r; i += 4) {
            this.incCounter(n);
            let r = e.encrypt(n);
            t[i] ^= r[0],
            t[i + 1] ^= r[1],
            t[i + 2] ^= r[2],
            t[i + 3] ^= r[3]
        }
        return M.clamp(t, i)
    }
}
;
var Ve = {
    importKey(e) {
        return new Ve.hmacSha1(Ie.bytes.toBits(e))
    },
    pbkdf2(e, t, n, r) {
        if (n ||= 1e4,
        r < 0 || n < 0)
            throw Error(`invalid params to pbkdf2`);
        let i = (r >> 5) + 1 << 2, a, o, s, c, l, u = new ArrayBuffer(i), d = new DataView(u), f = 0, p = M;
        for (t = Ie.bytes.toBits(t),
        l = 1; f < (i || 1); l++) {
            for (a = o = e.encrypt(p.concat(t, [l])),
            s = 1; s < n; s++)
                for (o = e.encrypt(o),
                c = 0; c < o.length; c++)
                    a[c] ^= o[c];
            for (s = 0; f < (i || 1) && s < a.length; s++)
                d.setInt32(f, a[s]),
                f += 4
        }
        return u.slice(0, r / 8)
    }
};
Ve.hmacSha1 = class {
    constructor(e) {
        let t = this
          , n = t._hash = Le.sha1
          , r = [[], []];
        t._baseHash = [new n, new n];
        let i = t._baseHash[0].blockSize / 32;
        e.length > i && (e = new n().update(e).finalize());
        for (let t = 0; t < i; t++)
            r[0][t] = e[t] ^ 909522486,
            r[1][t] = e[t] ^ 1549556828;
        t._baseHash[0].update(r[0]),
        t._baseHash[1].update(r[1]),
        t._resultHash = new n(t._baseHash[0])
    }
    reset() {
        let e = this;
        e._resultHash = new e._hash(e._baseHash[0]),
        e._updated = !1
    }
    update(e) {
        let t = this;
        t._updated = !0,
        t._resultHash.update(e)
    }
    digest() {
        let e = this
          , t = e._resultHash.finalize()
          , n = new e._hash(e._baseHash[1]).update(t).finalize();
        return e.reset(),
        n
    }
    encrypt(e) {
        if (this._updated)
            throw Error(`encrypt on already updated hmac called!`);
        return this.update(e),
        this.digest(e)
    }
}
;
var He = typeof crypto < `u` && typeof crypto.getRandomValues == `function`
  , Ue = `Invalid password`
  , We = `Invalid signature`
  , Ge = `zipjs-abort-check-password`;
function Ke(e) {
    return He ? crypto.getRandomValues(e) : ze.getRandomValues(e)
}
var qe = 16
  , Je = `raw`
  , Ye = {
    name: `PBKDF2`
}
  , Xe = {
    name: `HMAC`
}
  , Ze = `SHA-1`
  , Qe = Object.assign({
    hash: Xe
}, Ye)
  , $e = Object.assign({
    iterations: 1e3,
    hash: {
        name: Ze
    }
}, Ye)
  , et = [`deriveBits`]
  , tt = [8, 12, 16]
  , nt = [16, 24, 32]
  , rt = 10
  , it = [0, 0, 0, 0]
  , at = typeof crypto != Ce
  , ot = at && crypto.subtle
  , st = at && ot !== void 0
  , ct = Ie.bytes
  , lt = Re.aes
  , ut = Be.ctrGladman
  , dt = Ve.hmacSha1
  , ft = at && st && typeof ot.importKey == `function`
  , pt = at && st && typeof ot.deriveBits == `function`
  , mt = class extends TransformStream {
    constructor({password: e, rawPassword: t, signed: n, encryptionStrength: r, checkPasswordOnly: i}) {
        super({
            start() {
                Object.assign(this, {
                    ready: new Promise(e => this.resolveReady = e),
                    password: St(e, t),
                    signed: n,
                    strength: r - 1,
                    pending: new Uint8Array
                })
            },
            async transform(e, t) {
                let n = this
                  , {password: r, strength: a, resolveReady: o, ready: s} = n;
                r ? (await _t(n, a, r, Tt(e, 0, tt[a] + 2)),
                e = Tt(e, tt[a] + 2),
                i ? t.error(Error(Ge)) : o()) : await s;
                let c = new Uint8Array(e.length - rt - (e.length - rt) % qe);
                t.enqueue(gt(n, e, c, 0, rt, !0))
            },
            async flush(e) {
                let {signed: t, ctr: n, hmac: r, pending: i, ready: a} = this;
                if (r && n) {
                    await a;
                    let o = Tt(i, 0, i.length - rt)
                      , s = Tt(i, i.length - rt)
                      , c = new Uint8Array;
                    if (o.length) {
                        let e = Dt(ct, o);
                        r.update(e),
                        c = Et(ct, n.update(e))
                    }
                    if (t) {
                        let e = Tt(Et(ct, r.digest()), 0, rt);
                        for (let t = 0; t < rt; t++)
                            if (e[t] != s[t])
                                throw Error(We)
                    }
                    e.enqueue(c)
                }
            }
        })
    }
}
  , ht = class extends TransformStream {
    constructor({password: e, rawPassword: t, encryptionStrength: n}) {
        let r;
        super({
            start() {
                Object.assign(this, {
                    ready: new Promise(e => this.resolveReady = e),
                    password: St(e, t),
                    strength: n - 1,
                    pending: new Uint8Array
                })
            },
            async transform(e, t) {
                let n = this
                  , {password: r, strength: i, resolveReady: a, ready: o} = n
                  , s = new Uint8Array;
                r ? (s = await vt(n, i, r),
                a()) : await o;
                let c = new Uint8Array(s.length + e.length - e.length % qe);
                c.set(s, 0),
                t.enqueue(gt(n, e, c, s.length, 0))
            },
            async flush(e) {
                let {ctr: t, hmac: n, pending: i, ready: a} = this;
                if (n && t) {
                    await a;
                    let o = new Uint8Array;
                    if (i.length) {
                        let e = t.update(Dt(ct, i));
                        n.update(e),
                        o = Et(ct, e)
                    }
                    r.signature = Et(ct, n.digest()).slice(0, rt),
                    e.enqueue(Ct(o, r.signature))
                }
            }
        }),
        r = this
    }
}
;
function gt(e, t, n, r, i, a) {
    let {ctr: o, hmac: s, pending: c} = e
      , l = t.length - i;
    c.length && (t = Ct(c, t),
    n = wt(n, l - l % qe));
    let u;
    for (u = 0; u <= l - qe; u += qe) {
        let e = Dt(ct, Tt(t, u, u + qe));
        a && s.update(e);
        let i = o.update(e);
        a || s.update(i),
        n.set(Et(ct, i), u + r)
    }
    return e.pending = Tt(t, u),
    n
}
async function _t(e, t, n, r) {
    let i = await yt(e, t, n, Tt(r, 0, tt[t]))
      , a = Tt(r, tt[t]);
    if (i[0] != a[0] || i[1] != a[1])
        throw Error(Ue)
}
async function vt(e, t, n) {
    let r = Ke(new Uint8Array(tt[t]));
    return Ct(r, await yt(e, t, n, r))
}
async function yt(e, t, n, r) {
    e.password = null;
    let i = await bt(Je, n, Qe, !1, et)
      , a = await xt(Object.assign({
        salt: r
    }, $e), i, 8 * (nt[t] * 2 + 2))
      , o = new Uint8Array(a)
      , s = Dt(ct, Tt(o, 0, nt[t]))
      , c = Dt(ct, Tt(o, nt[t], nt[t] * 2))
      , l = Tt(o, nt[t] * 2);
    return Object.assign(e, {
        keys: {
            key: s,
            authentication: c,
            passwordVerification: l
        },
        ctr: new ut(new lt(s),Array.from(it)),
        hmac: new dt(c)
    }),
    l
}
async function bt(e, t, n, r, i) {
    if (ft)
        try {
            return await ot.importKey(e, t, n, r, i)
        } catch {
            return ft = !1,
            Ve.importKey(t)
        }
    else
        return Ve.importKey(t)
}
async function xt(e, t, n) {
    if (pt)
        try {
            return await ot.deriveBits(e, t, n)
        } catch {
            return pt = !1,
            Ve.pbkdf2(t, e.salt, $e.iterations, n)
        }
    else
        return Ve.pbkdf2(t, e.salt, $e.iterations, n)
}
function St(e, t) {
    return t === void 0 ? Fe(e) : t
}
function Ct(e, t) {
    let n = e;
    return e.length + t.length && (n = new Uint8Array(e.length + t.length),
    n.set(e, 0),
    n.set(t, e.length)),
    n
}
function wt(e, t) {
    if (t && t > e.length) {
        let n = e;
        e = new Uint8Array(t),
        e.set(n, 0)
    }
    return e
}
function Tt(e, t, n) {
    return e.subarray(t, n)
}
function Et(e, t) {
    return e.fromBits(t)
}
function Dt(e, t) {
    return e.toBits(t)
}
var Ot = 12
  , kt = class extends TransformStream {
    constructor({password: e, passwordVerification: t, checkPasswordOnly: n}) {
        super({
            start() {
                Object.assign(this, {
                    password: e,
                    passwordVerification: t
                }),
                Nt(this, e)
            },
            transform(e, t) {
                let r = this;
                if (r.password) {
                    let t = jt(r, e.subarray(0, Ot));
                    if (r.password = null,
                    t.at(-1) != r.passwordVerification)
                        throw Error(Ue);
                    e = e.subarray(Ot)
                }
                n ? t.error(Error(Ge)) : t.enqueue(jt(r, e))
            }
        })
    }
}
  , At = class extends TransformStream {
    constructor({password: e, passwordVerification: t}) {
        super({
            start() {
                Object.assign(this, {
                    password: e,
                    passwordVerification: t
                }),
                Nt(this, e)
            },
            transform(e, t) {
                let n = this, r, i;
                if (n.password) {
                    n.password = null;
                    let t = Ke(new Uint8Array(Ot));
                    t[Ot - 1] = n.passwordVerification,
                    r = new Uint8Array(e.length + t.length),
                    r.set(Mt(n, t), 0),
                    i = Ot
                } else
                    r = new Uint8Array(e.length),
                    i = 0;
                r.set(Mt(n, e), i),
                t.enqueue(r)
            }
        })
    }
}
;
function jt(e, t) {
    let n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++)
        n[r] = Ft(e) ^ t[r],
        Pt(e, n[r]);
    return n
}
function Mt(e, t) {
    let n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++)
        n[r] = Ft(e) ^ t[r],
        Pt(e, t[r]);
    return n
}
function Nt(e, t) {
    let n = [305419896, 591751049, 878082192];
    Object.assign(e, {
        keys: n,
        crcKey0: new Ne(n[0]),
        crcKey2: new Ne(n[2])
    });
    for (let n = 0; n < t.length; n++)
        Pt(e, t.charCodeAt(n))
}
function Pt(e, t) {
    let[n,r,i] = e.keys;
    e.crcKey0.append([t]),
    n = ~e.crcKey0.get(),
    r = Lt(Math.imul(Lt(r + It(n)), 134775813) + 1),
    e.crcKey2.append([r >>> 24]),
    i = ~e.crcKey2.get(),
    e.keys = [n, r, i]
}
function Ft(e) {
    let t = e.keys[2] | 2;
    return It(Math.imul(t, t ^ 1) >>> 8)
}
function It(e) {
    return e & 255
}
function Lt(e) {
    return e & 4294967295
}
var Rt = `Invalid uncompressed size`
  , zt = `deflate-raw`
  , Bt = `deflate64-raw`
  , Vt = class extends TransformStream {
    constructor(e, {chunkSize: t, CompressionStreamZlib: n, CompressionStream: r}) {
        super({});
        let {compressed: i, encrypted: a, useCompressionStream: o, zipCrypto: s, signed: c, level: l} = e, u = this, d, f, p = super.readable;
        (!a || s) && c && (d = new Pe,
        p = Gt(p, d)),
        i && (p = Wt(p, o, {
            level: l,
            chunkSize: t
        }, r, n, r)),
        a && (s ? p = Gt(p, new At(e)) : (f = new ht(e),
        p = Gt(p, f))),
        Ut(u, p, () => {
            let e;
            a && !s && (e = f.signature),
            (!a || s) && c && (e = new DataView(d.value.buffer).getUint32(0)),
            u.signature = e
        }
        )
    }
}
  , Ht = class extends TransformStream {
    constructor(e, {chunkSize: t, DecompressionStreamZlib: n, DecompressionStream: r}) {
        super({});
        let {zipCrypto: i, encrypted: a, signed: o, signature: s, compressed: c, useCompressionStream: l, deflate64: u} = e, d, f, p = super.readable;
        a && (i ? p = Gt(p, new kt(e)) : (f = new mt(e),
        p = Gt(p, f))),
        c && (p = Wt(p, l, {
            chunkSize: t,
            deflate64: u
        }, r, n, r)),
        (!a || i) && o && (d = new Pe,
        p = Gt(p, d)),
        Ut(this, p, () => {
            if ((!a || i) && o && s != new DataView(d.value.buffer).getUint32(0, !1))
                throw Error(We)
        }
        )
    }
}
;
function Ut(e, t, n) {
    t = Gt(t, new TransformStream({
        flush: n
    })),
    Object.defineProperty(e, "readable", {
        get() {
            return t
        }
    })
}
function Wt(e, t, n, r, i, a) {
    let o = t && r ? r : i || a
      , s = n.deflate64 ? Bt : zt;
    try {
        e = Gt(e, new o(s,n))
    } catch (r) {
        if (t)
            if (i)
                e = Gt(e, new i(s,n));
            else if (a)
                e = Gt(e, new a(s,n));
            else
                throw r;
        else
            throw r
    }
    return e
}
function Gt(e, t) {
    return e.pipeThrough(t)
}
var Kt = `message`, qt = `start`, Jt = `data`, Yt = `close`, Xt = `inflate`, Zt = class extends TransformStream {
    constructor(e, t) {
        super({});
        let n = this, {codecType: r} = e, i;
        r.startsWith(`deflate`) ? i = Vt : r.startsWith(`inflate`) && (i = Ht),
        n.outputSize = 0;
        let a = 0
          , o = new i(e,t)
          , s = super.readable
          , c = new TransformStream({
            transform(e, t) {
                e && e.length && (a += e.length,
                t.enqueue(e))
            },
            flush() {
                Object.assign(n, {
                    inputSize: a
                })
            }
        })
          , l = new TransformStream({
            transform(t, r) {
                if (t && t.length && (r.enqueue(t),
                n.outputSize += t.length,
                e.outputSize !== void 0 && n.outputSize > e.outputSize))
                    throw Error(Rt)
            },
            flush() {
                let {signature: e} = o;
                Object.assign(n, {
                    signature: e,
                    inputSize: a
                })
            }
        });
        Object.defineProperty(n, "readable", {
            get() {
                return s.pipeThrough(c).pipeThrough(o).pipeThrough(l)
            }
        })
    }
}
, Qt = class extends TransformStream {
    constructor(e) {
        let t;
        super({
            transform: n,
            flush(e) {
                t && t.length && e.enqueue(t)
            }
        });
        function n(r, i) {
            if (t) {
                let e = new Uint8Array(t.length + r.length);
                e.set(t),
                e.set(r, t.length),
                r = e,
                t = null
            }
            r.length > e ? (i.enqueue(r.slice(0, e)),
            n(r.slice(e), i)) : t = r
        }
    }
}
, $t = {
    type: `module`
}, en, tn, nn, rn = !0;
try {
    rn = typeof structuredClone == `function` && structuredClone(new DOMException(``,`AbortError`)).code !== void 0
} catch {}
var an = () => {}
;
function on({initModule: e}) {
    an = e
}
var sn = class {
    constructor(e, {readable: t, writable: n}, {options: r, config: i, streamOptions: a, useWebWorkers: o, transferStreams: s, workerURI: c}, l) {
        let {signal: u} = a;
        return Object.assign(e, {
            busy: !0,
            readable: t.pipeThrough(new Qt(i.chunkSize)).pipeThrough(new cn(a), {
                signal: u
            }),
            writable: n,
            options: Object.assign({}, r),
            workerURI: c,
            transferStreams: s,
            terminate() {
                return new Promise(t => {
                    let {worker: n, busy: r} = e;
                    n ? (r ? e.resolveTerminated = t : (n.terminate(),
                    t()),
                    e.interface = null) : t()
                }
                )
            },
            onTaskFinished() {
                let {resolveTerminated: t} = e;
                t && (e.resolveTerminated = null,
                e.terminated = !0,
                e.worker.terminate(),
                t()),
                e.busy = !1,
                l(e)
            }
        }),
        en === void 0 && (en = typeof Worker != Ce),
        (o && en ? dn : un)(e, i)
    }
}
  , cn = class extends TransformStream {
    constructor({onstart: e, onprogress: t, size: n, onend: r}) {
        let i = 0;
        super({
            async start() {
                e && await ln(e, n)
            },
            async transform(e, r) {
                i += e.length,
                t && await ln(t, i, n),
                r.enqueue(e)
            },
            async flush() {
                r && await ln(r, i)
            }
        })
    }
}
;
async function ln(e, ...t) {
    try {
        await e(...t)
    } catch {}
}
function un(e, t) {
    return {
        run: () => fn(e, t)
    }
}
function dn(e, t) {
    let {baseURI: n, chunkSize: r} = t
      , {wasmURI: i} = t;
    if (!e.interface) {
        typeof i == `function` && (i = i());
        let a;
        try {
            a = hn(e.workerURI, n, e)
        } catch {
            return en = !1,
            un(e, t)
        }
        Object.assign(e, {
            worker: a,
            interface: {
                run: () => pn(e, {
                    chunkSize: r,
                    wasmURI: i,
                    baseURI: n
                })
            }
        })
    }
    return e.interface
}
async function fn({options: e, readable: t, writable: n, onTaskFinished: r}, i) {
    let a;
    try {
        if (!e.useCompressionStream)
            try {
                await an(i)
            } catch {
                e.useCompressionStream = !0
            }
        a = new Zt(e,i),
        await t.pipeThrough(a).pipeTo(n, {
            preventClose: !0,
            preventAbort: !0
        });
        let {signature: r, inputSize: o, outputSize: s} = a;
        return {
            signature: r,
            inputSize: o,
            outputSize: s
        }
    } catch (e) {
        throw a && (e.outputSize = a.outputSize),
        e
    } finally {
        r()
    }
}
async function pn(e, t) {
    let n, r, i = new Promise( (e, t) => {
        n = e,
        r = t
    }
    );
    Object.assign(e, {
        reader: null,
        writer: null,
        resolveResult: n,
        rejectResult: r,
        result: i
    });
    let {readable: a, options: o} = e
      , {writable: s, closed: c} = mn(e.writable)
      , l = gn({
        type: qt,
        options: o,
        config: t,
        readable: a,
        writable: s
    }, e);
    l || Object.assign(e, {
        reader: a.getReader(),
        writer: s.getWriter()
    });
    let u = await i;
    return l || await s.getWriter().close(),
    await c,
    u
}
function mn(e) {
    let {writable: t, readable: n} = new TransformStream;
    return {
        writable: t,
        closed: n.pipeTo(e, {
            preventClose: !0
        })
    }
}
function hn(e, t, n, r, i=!0) {
    let a, o, s;
    if (tn === void 0) {
        let c = typeof e == we;
        o = c ? e(i) : e;
        let l = o.startsWith(`data:`)
          , u = o.startsWith(`blob:`);
        if (l || u) {
            r === void 0 && (r = !1),
            r && (s = $t);
            try {
                a = new Worker(o,s)
            } catch (i) {
                if (u)
                    try {
                        URL.revokeObjectURL(o)
                    } catch {}
                if (c && u)
                    return hn(e, t, n, r, !1);
                if (r)
                    throw i;
                return hn(e, t, n, !0, !1)
            }
        } else {
            r === void 0 && (r = !0),
            r && (s = $t);
            try {
                o = new URL(o,t)
            } catch {}
            try {
                a = new Worker(o,s)
            } catch (a) {
                if (r)
                    throw a;
                return hn(e, t, n, !1, i)
            }
        }
        tn = o,
        nn = s
    } else
        a = new Worker(tn,nn);
    return a.addEventListener(Kt, e => _n(e, n)),
    a
}
function gn(e, {worker: t, writer: n, onTaskFinished: r, transferStreams: i}) {
    try {
        let {value: n, readable: r, writable: a} = e
          , o = [];
        if (n && (e.value = n,
        o.push(e.value.buffer)),
        i && rn ? (r && o.push(r),
        a && o.push(a)) : e.readable = e.writable = null,
        o.length)
            try {
                return t.postMessage(e, o),
                !0
            } catch {
                rn = !1,
                e.readable = e.writable = null,
                t.postMessage(e)
            }
        else
            t.postMessage(e)
    } catch (e) {
        throw n && n.releaseLock(),
        r(),
        e
    }
}
async function _n({data: e}, t) {
    let {type: n, value: r, messageId: i, result: a, error: o} = e
      , {reader: s, writer: c, resolveResult: l, rejectResult: u, onTaskFinished: d} = t;
    try {
        if (o) {
            let {message: e, stack: t, code: n, name: r, outputSize: i} = o
              , a = Error(e);
            Object.assign(a, {
                stack: t,
                code: n,
                name: r,
                outputSize: i
            }),
            f(a)
        } else {
            if (n == `pull`) {
                let {value: e, done: n} = await s.read();
                gn({
                    type: Jt,
                    value: e,
                    done: n,
                    messageId: i
                }, t)
            }
            n == `data` && (await c.ready,
            await c.write(new Uint8Array(r)),
            gn({
                type: `ack`,
                messageId: i
            }, t)),
            n == `close` && f(null, a)
        }
    } catch (e) {
        gn({
            type: Yt,
            messageId: i
        }, t),
        f(e)
    }
    function f(e, t) {
        e ? u(e) : l(t),
        c && c.releaseLock(),
        d()
    }
}
var vn = []
  , yn = []
  , bn = 0;
async function xn(e, t) {
    let {options: n, config: r} = t
      , {transferStreams: i, useWebWorkers: a, useCompressionStream: o, compressed: s, signed: c, encrypted: l} = n
      , {workerURI: u, maxWorkers: d} = r;
    return t.transferStreams = i || i === void 0,
    t.useWebWorkers = !(!s && !c && !l && !t.transferStreams) && (a || a === void 0 && r.useWebWorkers),
    t.workerURI = t.useWebWorkers && u ? u : void 0,
    n.useCompressionStream = o || o === void 0 && r.useCompressionStream,
    (await f()).run();
    async function f() {
        let n = vn.find(e => !e.busy);
        if (n)
            return Cn(n),
            new sn(n,e,t,p);
        if (vn.length < d) {
            let n = {
                indexWorker: bn
            };
            return bn++,
            vn.push(n),
            new sn(n,e,t,p)
        } else
            return new Promise(n => yn.push({
                resolve: n,
                stream: e,
                workerOptions: t
            }))
    }
    function p(e) {
        if (yn.length) {
            let[{resolve: t, stream: n, workerOptions: r}] = yn.splice(0, 1);
            t(new sn(e,n,r,p))
        } else
            e.worker ? (Cn(e),
            Sn(e, t)) : vn = vn.filter(t => t != e)
    }
}
function Sn(e, t) {
    let {config: n} = t
      , {terminateWorkerTimeout: r} = n;
    Number.isFinite(r) && r >= 0 && (e.terminated ? e.terminated = !1 : e.terminateTimeout = setTimeout(async () => {
        vn = vn.filter(t => t != e);
        try {
            await e.terminate()
        } catch {}
    }
    , r))
}
function Cn(e) {
    let {terminateTimeout: t} = e;
    t && (clearTimeout(t),
    e.terminateTimeout = null)
}
var wn = `Writer iterator completed too soon`
  , Tn = `Content-Type`
  , En = 64 * 1024
  , Dn = `writable`
  , On = class {
    constructor() {
        this.size = 0
    }
    init() {
        this.initialized = !0
    }
}
  , kn = class extends On {
    get readable() {
        let e = this
          , {chunkSize: t=En} = e
          , n = new ReadableStream({
            start() {
                this.chunkOffset = 0
            },
            async pull(r) {
                let {offset: i=0, size: a, diskNumberStart: o} = n
                  , {chunkOffset: s} = this
                  , c = a === void 0 ? t : Math.min(t, a - s)
                  , l = await N(e, i + s, c, o);
                r.enqueue(l),
                s + t > a || a === void 0 && !l.length && c ? r.close() : this.chunkOffset += t
            }
        });
        return n
    }
}
  , An = class extends kn {
    constructor(e) {
        super(),
        Object.assign(this, {
            blob: e,
            size: e.size
        })
    }
    async readUint8Array(e, t) {
        let n = this
          , r = e + t
          , i = await (e || r < n.size ? n.blob.slice(e, r) : n.blob).arrayBuffer();
        return i.byteLength > t && (i = i.slice(e, r)),
        new Uint8Array(i)
    }
}
  , jn = class extends On {
    constructor(e) {
        super();
        let t = this
          , n = new TransformStream
          , r = [];
        e && r.push([Tn, e]),
        Object.defineProperty(t, Dn, {
            get() {
                return n.writable
            }
        }),
        t.blob = new Response(n.readable,{
            headers: r
        }).blob()
    }
    getData() {
        return this.blob
    }
}
  , Mn = class extends jn {
    constructor(e) {
        super(e),
        Object.assign(this, {
            encoding: e,
            utf8: !e || e.toLowerCase() == `utf-8`
        })
    }
    async getData() {
        let {encoding: e, utf8: t} = this
          , n = await super.getData();
        if (n.text && t)
            return n.text();
        {
            let t = new FileReader;
            return new Promise( (r, i) => {
                Object.assign(t, {
                    onload: ({target: e}) => r(e.result),
                    onerror: () => i(t.error)
                }),
                t.readAsText(n, e)
            }
            )
        }
    }
}
  , Nn = class extends kn {
    constructor(e) {
        super(),
        this.readers = e
    }
    async init() {
        let e = this
          , {readers: t} = e;
        e.lastDiskNumber = 0,
        e.lastDiskOffset = 0,
        await Promise.all(t.map(async (n, r) => {
            await n.init(),
            r != t.length - 1 && (e.lastDiskOffset += n.size),
            e.size += n.size
        }
        )),
        super.init()
    }
    async readUint8Array(e, t, n=0) {
        let r = this, {readers: i} = this, a, o = n;
        o == -1 && (o = i.length - 1);
        let s = e;
        for (; i[o] && s >= i[o].size; )
            s -= i[o].size,
            o++;
        let c = i[o];
        if (c) {
            let i = c.size;
            if (s + t <= i)
                a = await N(c, s, t);
            else {
                let o = i - s;
                a = new Uint8Array(t);
                let l = await N(c, s, o);
                a.set(l, 0);
                let u = await r.readUint8Array(e + o, t - o, n);
                a.set(u, o),
                l.length + u.length < t && (a = a.subarray(0, l.length + u.length))
            }
        } else
            a = new Uint8Array;
        return r.lastDiskNumber = Math.max(o, r.lastDiskNumber),
        a
    }
}
  , Pn = class extends On {
    constructor(e, t=4294967295) {
        super();
        let n = this;
        Object.assign(n, {
            diskNumber: 0,
            diskOffset: 0,
            size: 0,
            maxSize: t,
            availableSize: t
        });
        let r, i, a, o = new WritableStream({
            async write(t) {
                let {availableSize: o} = n;
                if (a)
                    t.length >= o ? (await s(t.subarray(0, o)),
                    await c(),
                    n.diskOffset += r.size,
                    n.diskNumber++,
                    a = null,
                    await this.write(t.subarray(o))) : await s(t);
                else {
                    let {value: o, done: s} = await e.next();
                    if (s && !o)
                        throw Error(wn);
                    r = o,
                    r.size = 0,
                    r.maxSize && (n.maxSize = r.maxSize),
                    n.availableSize = n.maxSize,
                    await Ln(r),
                    i = o.writable,
                    a = i.getWriter(),
                    await this.write(t)
                }
            },
            async close() {
                await a.ready,
                await c()
            }
        });
        Object.defineProperty(n, Dn, {
            get() {
                return o
            }
        });
        async function s(e) {
            let t = e.length;
            t && (await a.ready,
            await a.write(e),
            r.size += t,
            n.size += t,
            n.availableSize -= t)
        }
        async function c() {
            await a.close()
        }
    }
}
  , Fn = class {
    constructor(e) {
        return Array.isArray(e) && (e = new Nn(e)),
        e instanceof ReadableStream && (e = {
            readable: e
        }),
        e
    }
}
  , In = class {
    constructor(e) {
        return e.writable === void 0 && typeof e.next == `function` && (e = new Pn(e)),
        e instanceof WritableStream && (e = {
            writable: e
        }),
        e.size === void 0 && (e.size = 0),
        e instanceof Pn || Object.assign(e, {
            diskNumber: 0,
            diskOffset: 0,
            availableSize: Se,
            maxSize: Se
        }),
        e
    }
}
;
async function Ln(e, t) {
    if (e.init && !e.initialized)
        await e.init(t);
    else
        return Promise.resolve()
}
function N(e, t, n, r) {
    return e.readUint8Array(t, n, r)
}
var Rn = `\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ `.split(``)
  , zn = Rn.length == 256;
function Bn(e) {
    if (zn) {
        let t = ``;
        for (let n = 0; n < e.length; n++)
            t += Rn[e[n]];
        return t
    } else
        return new TextDecoder().decode(e)
}
function Vn(e, t) {
    return t && t.trim().toLowerCase() == `cp437` ? Bn(e) : new TextDecoder(t).decode(e)
}
var Hn = `filename`
  , Un = `rawFilename`
  , Wn = `comment`
  , Gn = `rawComment`
  , Kn = `uncompressedSize`
  , qn = `compressedSize`
  , Jn = `offset`
  , Yn = `diskNumberStart`
  , Xn = `lastModDate`
  , Zn = `rawLastModDate`
  , Qn = `lastAccessDate`
  , $n = `rawLastAccessDate`
  , er = `creationDate`
  , tr = `rawCreationDate`
  , nr = [Hn, Un, Kn, qn, Xn, Zn, Wn, Gn, Qn, er, tr, Jn, Yn, `internalFileAttributes`, `externalFileAttributes`, `msdosAttributesRaw`, `msdosAttributes`, `msDosCompatible`, `zip64`, `encrypted`, `version`, `versionMadeBy`, `zipCrypto`, `directory`, `executable`, `compressionMethod`, `signature`, `extraField`, `extraFieldUnix`, `extraFieldInfoZip`, `uid`, `gid`, `unixMode`, `setuid`, `setgid`, `sticky`, `bitFlag`, `filenameUTF8`, `commentUTF8`, `rawExtraField`, `extraFieldZip64`, `extraFieldUnicodePath`, `extraFieldUnicodeComment`, `extraFieldAES`, `extraFieldNTFS`, `extraFieldExtendedTimestamp`]
  , rr = class {
    constructor(e) {
        nr.forEach(t => this[t] = e[t])
    }
}
  , ir = `filenameEncoding`
  , ar = `commentEncoding`
  , or = `extractPrependedData`
  , sr = `extractAppendedData`
  , cr = `password`
  , lr = `rawPassword`
  , ur = `passThrough`
  , dr = `signal`
  , fr = `checkPasswordOnly`
  , pr = `checkOverlappingEntryOnly`
  , mr = `checkOverlappingEntry`
  , hr = `useWebWorkers`
  , gr = `useCompressionStream`
  , _r = `transferStreams`
  , vr = `File format is not recognized`
  , yr = `End of central directory not found`
  , br = `End of Zip64 central directory locator not found`
  , xr = `Central directory header not found`
  , Sr = `Local file header not found`
  , Cr = `Zip64 extra field not found`
  , wr = `File contains encrypted entry`
  , Tr = `Encryption method not supported`
  , Er = `Compression method not supported`
  , Dr = `Split zip file`
  , Or = `Overlapping entry found`
  , kr = `utf-8`
  , Ar = `UTF8`
  , jr = `cp437`
  , Mr = [[Kn, A], [qn, A], [Jn, A], [Yn, ce]]
  , Nr = {
    [ce]: {
        getValue: I,
        bytes: 4
    },
    [A]: {
        getValue: Xr,
        bytes: 8
    }
}
  , Pr = class {
    constructor(e, t={}) {
        Object.assign(this, {
            reader: new Fn(e),
            options: t,
            config: Oe(),
            readRanges: []
        })
    }
    async*getEntriesGenerator(e={}) {
        let t = this
          , {reader: n} = t
          , {config: r} = t;
        if (await Ln(n),
        (n.size === void 0 || !n.readUint8Array) && (n = new An(await new Response(n.readable).blob()),
        await Ln(n)),
        n.size < 22)
            throw Error(vr);
        n.chunkSize = ke(r);
        let i = await Kr(n, le, n.size, 22, ce * 16);
        if (!i)
            throw I(L(await N(n, 0, 4))) == 134695760 ? Error(Dr) : Error(yr);
        let a = L(i)
          , o = I(a, 12)
          , s = I(a, 16)
          , c = i.offset
          , l = F(a, 20)
          , u = c + 22 + l
          , d = F(a, 4)
          , f = n.lastDiskNumber || 0
          , p = F(a, 6)
          , m = F(a, 8)
          , h = 0
          , g = 0;
        if (s == 4294967295 || o == 4294967295 || m == 65535 || p == 65535) {
            let e = L(await N(n, i.offset - 20, 20));
            if (I(e, 0) == 117853008) {
                s = Xr(e, 8);
                let t = await N(n, s, 56, -1)
                  , r = L(t)
                  , a = i.offset - 20 - 56;
                if (I(r, 0) != 101075792 && s != a) {
                    let e = s;
                    s = a,
                    s > e && (h = s - e),
                    t = await N(n, s, 56, -1),
                    r = L(t)
                }
                if (I(r, 0) != 101075792)
                    throw Error(br);
                d == 65535 && (d = I(r, 16)),
                p == 65535 && (p = I(r, 20)),
                m == 65535 && (m = Xr(r, 32)),
                o == 4294967295 && (o = Xr(r, 40)),
                s -= o
            }
        }
        if (s >= n.size && (h = n.size - s - o - 22,
        s = n.size - o - 22),
        f != d)
            throw Error(Dr);
        if (s < 0)
            throw Error(vr);
        let _ = 0
          , v = await N(n, s, o, p)
          , y = L(v);
        if (o) {
            let e = i.offset - o;
            if (I(y, _) != 33639248 && s != e) {
                let t = s;
                s = e,
                s > t && (h += s - t),
                v = await N(n, s, o, p),
                y = L(v)
            }
        }
        let b = i.offset - s - (n.lastDiskOffset || 0);
        if (o != b && b >= 0 && (o = b,
        v = await N(n, s, o, p),
        y = L(v)),
        s < 0 || s >= n.size)
            throw Error(vr);
        let x = P(t, e, ir)
          , S = P(t, e, ar);
        for (let i = 0; i < m; i++) {
            let a = new Fr(n,r,t.options);
            if (I(y, _) != 33639248)
                throw Error(xr);
            Ir(a, y, _ + 6);
            let o = !!a.bitFlag.languageEncodingFlag
              , s = _ + 46
              , c = s + a.filenameLength
              , l = c + a.extraFieldLength
              , u = F(y, _ + 4)
              , d = u >> 8 == 0
              , f = u >> 8 == 3
              , p = v.subarray(s, c)
              , b = F(y, _ + 32)
              , C = l + b
              , w = v.subarray(l, C)
              , ee = o
              , te = o
              , ne = I(y, _ + 38)
              , T = ne & 255
              , E = {
                readOnly: !!(T & 1),
                hidden: !!(T & 2),
                system: !!(T & 4),
                directory: !!(T & 16),
                archive: !!(T & 32)
            }
              , re = I(y, _ + 42) + h
              , ie = P(t, e, `decodeText`) || Vn
              , ae = ee ? kr : x || jr
              , D = te ? kr : S || jr
              , oe = ie(p, ae);
            oe === void 0 && (oe = Vn(p, ae));
            let se = ie(w, D);
            se === void 0 && (se = Vn(w, D)),
            Object.assign(a, {
                versionMadeBy: u,
                msDosCompatible: d,
                compressedSize: 0,
                uncompressedSize: 0,
                commentLength: b,
                offset: re,
                diskNumberStart: F(y, _ + 34),
                internalFileAttributes: F(y, _ + 36),
                externalFileAttributes: ne,
                msdosAttributesRaw: T,
                msdosAttributes: E,
                rawFilename: p,
                filenameUTF8: ee,
                commentUTF8: te,
                rawExtraField: v.subarray(c, l),
                rawComment: w,
                filename: oe,
                comment: se
            }),
            g = Math.max(re, g),
            Lr(a, a, y, _ + 6);
            let O = a.externalFileAttributes >> 16 & ce;
            a.unixMode === void 0 && O & 16877 && (a.unixMode = O);
            let k = !!(a.unixMode & be)
              , A = !!(a.unixMode & xe)
              , le = !!(a.unixMode & 512)
              , ue = a.unixMode === void 0 ? f && (O & 73) != 0 : (a.unixMode & 73) != 0
              , de = a.unixMode !== void 0 && (a.unixMode & 61440) == 16384
              , fe = (O & ve) == ye;
            Object.assign(a, {
                setuid: k,
                setgid: A,
                sticky: le,
                unixExternalUpper: O,
                internalFileAttribute: a.internalFileAttributes,
                externalFileAttribute: a.externalFileAttributes,
                executable: ue,
                directory: de || fe || d && E.directory || oe.endsWith(`/`) && !a.uncompressedSize,
                zipCrypto: a.encrypted && !a.extraFieldAES
            });
            let pe = new rr(a);
            pe.getData = (e, n) => a.getData(e, pe, t.readRanges, n),
            pe.arrayBuffer = async e => {
                let n = new TransformStream
                  , [r] = await Promise.all([new Response(n.readable).arrayBuffer(), a.getData(n, pe, t.readRanges, e)]);
                return r
            }
            ,
            _ = C;
            let {onprogress: me} = e;
            if (me)
                try {
                    await me(i + 1, m, new rr(a))
                } catch {}
            yield pe
        }
        let C = P(t, e, or)
          , w = P(t, e, sr);
        return C && (t.prependedData = g > 0 ? await N(n, 0, g) : new Uint8Array),
        t.comment = l ? await N(n, c + 22, l) : new Uint8Array,
        w && (t.appendedData = u < n.size ? await N(n, u, n.size - u) : new Uint8Array),
        !0
    }
    async getEntries(e={}) {
        let t = [];
        for await(let n of this.getEntriesGenerator(e))
            t.push(n);
        return t
    }
    async close() {}
}
  , Fr = class {
    constructor(e, t, n) {
        Object.assign(this, {
            reader: e,
            config: t,
            options: n
        })
    }
    async getData(e, t, n, r={}) {
        let i = this
          , {reader: a, offset: o, diskNumberStart: s, extraFieldAES: c, extraFieldZip64: l, compressionMethod: u, config: d, bitFlag: f, signature: p, rawLastModDate: m, uncompressedSize: h, compressedSize: g} = i
          , {dataDescriptor: _} = f
          , v = t.localDirectory = {}
          , y = L(await N(a, o, 30, s))
          , b = P(i, r, cr)
          , x = P(i, r, lr)
          , S = P(i, r, ur);
        if (b = b && b.length && b,
        x = x && x.length && x,
        c && c.originalCompressionMethod != 99 || u != 0 && u != 8 && u != 9 && !S)
            throw Error(Er);
        if (I(y, 0) != 67324752)
            throw Error(Sr);
        Ir(v, y, 4);
        let {extraFieldLength: C, filenameLength: w, lastAccessDate: ee, creationDate: te} = v;
        v.rawExtraField = C ? await N(a, o + 30 + w, C, s) : new Uint8Array,
        Lr(i, v, y, 4, !0),
        Object.assign(t, {
            lastAccessDate: ee,
            creationDate: te
        });
        let ne = i.encrypted && v.encrypted && !S
          , T = ne && !c;
        if (S || (t.zipCrypto = T),
        ne) {
            if (!T && c.strength === void 0)
                throw Error(Tr);
            if (!b && !x)
                throw Error(wr)
        }
        let E = o + 30 + w + C
          , re = g
          , ie = a.readable;
        Object.assign(ie, {
            diskNumberStart: s,
            offset: E,
            size: re
        });
        let ae = P(i, r, dr)
          , D = P(i, r, fr)
          , oe = P(i, r, mr)
          , se = P(i, r, pr);
        se && (oe = !0);
        let {onstart: O, onprogress: k, onend: A} = r
          , ce = u == 9
          , le = P(i, r, gr);
        ce && (le = !1);
        let ue = {
            options: {
                codecType: Xt,
                password: b,
                rawPassword: x,
                zipCrypto: T,
                encryptionStrength: c && c.strength,
                signed: P(i, r, `checkSignature`) && !S,
                passwordVerification: T && (_ ? m >>> 8 & 255 : p >>> 24 & 255),
                outputSize: S ? g : h,
                signature: p,
                compressed: u != 0 && !S,
                encrypted: i.encrypted && !S,
                useWebWorkers: P(i, r, hr),
                useCompressionStream: le,
                transferStreams: P(i, r, _r),
                deflate64: ce,
                checkPasswordOnly: D
            },
            config: d,
            streamOptions: {
                signal: ae,
                size: re,
                onstart: O,
                onprogress: k,
                onend: A
            }
        };
        oe && await Gr({
            reader: a,
            fileEntry: t,
            offset: o,
            diskNumberStart: s,
            signature: p,
            compressedSize: g,
            uncompressedSize: h,
            dataOffset: E,
            dataDescriptor: _ || v.bitFlag.dataDescriptor,
            extraFieldZip64: l || v.extraFieldZip64,
            readRanges: n
        });
        let de;
        try {
            if (!se) {
                D && (e = new WritableStream),
                e = new In(e),
                await Ln(e, S ? g : h),
                {writable: de} = e;
                let {outputSize: t} = await xn({
                    readable: ie,
                    writable: de
                }, ue);
                if (e.size += t,
                t != (S ? g : h))
                    throw Error(Rt)
            }
        } catch (t) {
            if (t.outputSize !== void 0 && (e.size += t.outputSize),
            !D || t.message != `zipjs-abort-check-password`)
                throw t
        } finally {
            !P(i, r, `preventClose`) && de && !de.locked && await de.getWriter().close()
        }
        return D || se ? void 0 : e.getData ? e.getData() : de
    }
}
;
function Ir(e, t, n) {
    let r = e.rawBitFlag = F(t, n + 2)
      , i = (r & 1) == 1
      , a = I(t, n + 6);
    Object.assign(e, {
        encrypted: i,
        version: F(t, n),
        bitFlag: {
            level: (r & 6) >> 1,
            dataDescriptor: (r & 8) == 8,
            languageEncodingFlag: (r & _e) == _e
        },
        rawLastModDate: a,
        lastModDate: qr(a),
        filenameLength: F(t, n + 22),
        extraFieldLength: F(t, n + 24)
    })
}
function Lr(e, t, n, r, i) {
    let {rawExtraField: a} = t
      , o = t.extraField = new Map
      , s = L(new Uint8Array(a))
      , c = 0;
    try {
        for (; c < a.length; ) {
            let e = F(s, c)
              , t = F(s, c + 2);
            o.set(e, {
                type: e,
                data: a.slice(c + 4, c + 4 + t)
            }),
            c += 4 + t
        }
    } catch {}
    let l = F(n, r + 4);
    Object.assign(t, {
        signature: I(n, r + 10),
        compressedSize: I(n, r + 14),
        uncompressedSize: I(n, r + 18)
    });
    let u = o.get(1);
    u && (Rr(u, t),
    t.extraFieldZip64 = u);
    let d = o.get(fe);
    d && (zr(d, Hn, Un, t, e),
    t.extraFieldUnicodePath = d);
    let f = o.get(pe);
    f && (zr(f, Wn, Gn, t, e),
    t.extraFieldUnicodeComment = f);
    let p = o.get(ue);
    p ? (Br(p, t, l),
    t.extraFieldAES = p) : t.compressionMethod = l;
    let m = o.get(10);
    m && (Vr(m, t),
    t.extraFieldNTFS = m);
    let h = o.get(ge);
    if (h)
        Hr(h, t, !1),
        t.extraFieldUnix = h;
    else {
        let e = o.get(he);
        e && (Hr(e, t, !0),
        t.extraFieldInfoZip = e)
    }
    let g = o.get(de);
    g && (Wr(g, t, i),
    t.extraFieldExtendedTimestamp = g);
    let _ = o.get(me);
    _ && (t.extraFieldUSDZ = _)
}
function Rr(e, t) {
    t.zip64 = !0;
    let n = L(e.data)
      , r = Mr.filter( ([e,n]) => t[e] == n);
    for (let i = 0, a = 0; i < r.length; i++) {
        let[o,s] = r[i];
        if (t[o] == s) {
            let r = Nr[s];
            t[o] = e[o] = r.getValue(n, a),
            a += r.bytes
        } else if (e[o])
            throw Error(Cr)
    }
}
function zr(e, t, n, r, i) {
    let a = L(e.data)
      , o = new Ne;
    o.append(i[n]);
    let s = L(new Uint8Array(4));
    s.setUint32(0, o.get(), !0);
    let c = I(a, 1);
    Object.assign(e, {
        version: Yr(a, 0),
        [t]: Vn(e.data.subarray(5)),
        valid: !i.bitFlag.languageEncodingFlag && c == I(s, 0)
    }),
    e.valid && (r[t] = e[t],
    r[t + Ar] = !0)
}
function Br(e, t, n) {
    let r = L(e.data)
      , i = Yr(r, 4);
    Object.assign(e, {
        vendorVersion: Yr(r, 0),
        vendorId: Yr(r, 2),
        strength: i,
        originalCompressionMethod: n,
        compressionMethod: F(r, 5)
    }),
    t.compressionMethod = e.compressionMethod
}
function Vr(e, t) {
    let n = L(e.data), r = 4, i;
    try {
        for (; r < e.data.length && !i; ) {
            let t = F(n, r)
              , a = F(n, r + 2);
            t == 1 && (i = e.data.slice(r + 4, r + 4 + a)),
            r += 4 + a
        }
    } catch {}
    try {
        if (i && i.length == 24) {
            let n = L(i)
              , r = n.getBigUint64(0, !0)
              , a = n.getBigUint64(8, !0)
              , o = n.getBigUint64(16, !0);
            Object.assign(e, {
                rawLastModDate: r,
                rawLastAccessDate: a,
                rawCreationDate: o
            });
            let s = {
                lastModDate: Jr(r),
                lastAccessDate: Jr(a),
                creationDate: Jr(o)
            };
            Object.assign(e, s),
            Object.assign(t, s)
        }
    } catch {}
}
function Hr(e, t, n) {
    try {
        let r = L(new Uint8Array(e.data))
          , i = 0
          , a = Yr(r, i++)
          , o = Yr(r, i++)
          , s = e.data.subarray(i, i + o);
        i += o;
        let c = Ur(s)
          , l = Yr(r, i++)
          , u = e.data.subarray(i, i + l);
        i += l;
        let d = Ur(u), f;
        if (!n && i + 2 <= e.data.length) {
            let t = e.data;
            f = new DataView(t.buffer,t.byteOffset + i,2).getUint16(0, !0)
        }
        Object.assign(e, {
            version: a,
            uid: c,
            gid: d,
            unixMode: f
        }),
        c !== void 0 && (t.uid = c),
        d !== void 0 && (t.gid = d),
        f !== void 0 && (t.unixMode = f)
    } catch {}
}
function Ur(e) {
    let t = new Uint8Array(4);
    return t.set(e, 0),
    new DataView(t.buffer,t.byteOffset,4).getUint32(0, !0)
}
function Wr(e, t, n) {
    let r = L(e.data)
      , i = Yr(r, 0)
      , a = []
      , o = [];
    n ? ((i & 1) == 1 && (a.push(Xn),
    o.push(Zn)),
    (i & 2) == 2 && (a.push(Qn),
    o.push($n)),
    (i & 4) == 4 && (a.push(er),
    o.push(tr))) : e.data.length >= 5 && (a.push(Xn),
    o.push(Zn));
    let s = 1;
    a.forEach( (n, i) => {
        if (e.data.length >= s + 4) {
            let a = I(r, s);
            t[n] = e[n] = new Date(a * 1e3);
            let c = o[i];
            e[c] = a
        }
        s += 4
    }
    )
}
async function Gr({reader: e, fileEntry: t, offset: n, diskNumberStart: r, signature: i, compressedSize: a, uncompressedSize: o, dataOffset: s, dataDescriptor: c, extraFieldZip64: l, readRanges: u}) {
    let d = 0;
    if (r)
        for (let t = 0; t < r; t++) {
            let n = e.readers[t];
            d += n.size
        }
    let f = 0;
    if (c && (f = l ? 20 : 12),
    f) {
        let n = await N(e, s + a, f + 4, r);
        if (I(L(n), 0) == 134695760) {
            let e = I(L(n), 4), r, s;
            l ? (r = Xr(L(n), 8),
            s = Xr(L(n), 16)) : (r = I(L(n), 8),
            s = I(L(n), 12)),
            (t.encrypted && !t.zipCrypto || e == i) && r == a && s == o && (f += 4)
        }
    }
    let p = {
        start: d + n,
        end: d + s + a + f,
        fileEntry: t
    };
    for (let e of u)
        if (e.fileEntry != t && p.start >= e.start && p.start < e.end) {
            let t = Error(Or);
            throw t.overlappingEntry = e.fileEntry,
            t
        }
    u.push(p)
}
async function Kr(e, t, n, r, i) {
    let a = new Uint8Array(4);
    Zr(L(a), 0, t);
    let o = r + i;
    return await s(r) || await s(Math.min(o, n));
    async function s(t) {
        let i = n - t
          , o = await N(e, i, t);
        for (let e = o.length - r; e >= 0; e--)
            if (o[e] == a[0] && o[e + 1] == a[1] && o[e + 2] == a[2] && o[e + 3] == a[3])
                return {
                    offset: i + e,
                    buffer: o.slice(e, e + r).buffer
                }
    }
}
function P(e, t, n) {
    return t[n] === void 0 ? e.options[n] : t[n]
}
function qr(e) {
    let t = (e & 4294901760) >> 16
      , n = e & ce;
    try {
        return new Date(1980 + ((t & 65024) >> 9),((t & 480) >> 5) - 1,t & 31,(n & 63488) >> 11,(n & 2016) >> 5,(n & 31) * 2,0)
    } catch {}
}
function Jr(e) {
    return new Date(Number(e / BigInt(1e4) - BigInt(0xa9730b66800)))
}
function Yr(e, t) {
    return e.getUint8(t)
}
function F(e, t) {
    return e.getUint16(t, !0)
}
function I(e, t) {
    return e.getUint32(t, !0)
}
function Xr(e, t) {
    return Number(e.getBigUint64(t, !0))
}
function Zr(e, t, n) {
    e.setUint32(t, n, !0)
}
function L(e) {
    return new DataView(e.buffer)
}
new Uint8Array([7, 0, 2, 0, 65, 69, 3, 0, 0]);
try {
    Ae({
        baseURI: import.meta.url
    })
} catch {}
var Qr = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;
function $r(e) {
    let t;
    e({
        wasmURI: () => (t ||= `data:application/wasm;base64,` + (e => {
            e = (e => {
                let t = (e = (e + ``).replace(/[^A-Za-z0-9+/=]/g, ``)).length
                  , n = [];
                for (let r = 0; t > r; r += 4) {
                    let t = Qr.indexOf(e[r]) << 18 | Qr.indexOf(e[r + 1]) << 12 | (63 & Qr.indexOf(e[r + 2])) << 6 | 63 & Qr.indexOf(e[r + 3]);
                    n.push(t >> 16 & 255),
                    e[r + 2] !== `=` && n.push(t >> 8 & 255),
                    e[r + 3] !== `=` && n.push(255 & t)
                }
                return new Uint8Array(n)
            }
            )(e);
            let t = new Uint8Array(1024)
              , n = 0;
            for (let i = 0; i < e.length; ) {
                let a = e[i++];
                if (128 & a) {
                    let o = 3 + (127 & a)
                      , s = e[i++] << 8 | e[i++]
                      , c = n - s;
                    r(n + o);
                    for (let e = 0; o > e; e++)
                        t[n++] = t[c + e]
                } else {
                    let o = a;
                    r(n + o);
                    for (let r = 0; o > r && i < e.length; r++)
                        t[n++] = e[i++]
                }
            }
            return (e => {
                let t = ``
                  , n = e.length
                  , r = 0;
                for (; n > r + 2; r += 3) {
                    let n = e[r] << 16 | e[r + 1] << 8 | e[r + 2];
                    t += Qr[n >> 18 & 63] + Qr[n >> 12 & 63] + Qr[n >> 6 & 63] + Qr[63 & n]
                }
                let i = n - r;
                if (i === 1) {
                    let n = e[r] << 16;
                    t += Qr[n >> 18 & 63] + Qr[n >> 12 & 63] + `==`
                } else if (i === 2) {
                    let n = e[r] << 16 | e[r + 1] << 8;
                    t += Qr[n >> 18 & 63] + Qr[n >> 12 & 63] + Qr[n >> 6 & 63] + `=`
                }
                return t
            }
            )(new Uint8Array(t.buffer.slice(0, n)));
            function r(e) {
                if (t.length < e) {
                    let r = 2 * t.length;
                    for (; e > r; )
                        r *= 2;
                    let i = new Uint8Array(r);
                    i.set(t.subarray(0, n)),
                    t = i
                }
            }
        }
        )(`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BAGZgAAEAVmAAAQB2YAABAE5gAAEAbmAAAQBeYAABAH5gAAEAQWAAAQBhYAABAFFgAAEAcWAAAQBJYAABAGlgAAEAWWAAAQB5YAABAEVgAAEAZWAAAQBVYAABAHVgAAEATWAAAQBtYAABAF1gAAEAfWAAAQBDYAABAGNgAAEAU2AAAQBzYAABIARMwIArYAABAFtgAAEAe2AAAQBHYAABAGdgAAEAV2AAAQB3YAABAE9gAAEAb2AAAQBfYAABAH9gAAEAROAAMIFEwEJAJOAAAgBk4AACAFTgAAIAVOAAAgB04AACAHTgAAIATOAAAgBM4AACAGzgAAIAbOAAAgBc4AACAFzgAAIAfOAAAgB84AACAELgAAIgBDagAQCgAAEgAAIAUuAAAgBS4AACAHLgAAIAcuAAAgBK4AACAErgAAIAauAAAgBq4AACAFrgAAIAWuAAAgB64AACAHrgAAIARuAAAgBG4AACAGbgAAIAZuAAAgBW4AACAFbgAAIAduAAAgB24AACAE7gAAIATuAAAgBu4AACAG7gAAIAXuAAAgBe4AACAH7gAAIAfuAAAiBA7YBB4AACAGHgAAIAYeAAAgBR4AACAFHgAAIAceAAAgBx4AACAEngAAIASeAAAgBp4AACAGngAAIAWeAAAgBZ4AACAHngAAIAeeAAAgBF4AACAEXgAAIAZeAAAgBl4AACAFXgAAIAVeAAAgB14AACAHXgAAIATeAAAgBN4AACAG3gAAIAbeAAAgBd4AACAF3gAAIAfeAAAgB94AACAEPgAAIAQ+AAAgBj4AACAGPgAAIAU+AAAgBT4AACAHPgAAIAc+AAAgBL4AACAEvgAAIAa+AAAgBr4AACAFvgAAIAW+AAAgB74AACAHvgAAIAR+AAAgBH4AACAGfgAAIAZ+AAAgBX4AACAFfgAAIAd+AAAgB34AACAE/gAAIAT+AAAgBv4AACAG/gAAIAX+AAAgBf4AACAH/gAAIAf+AAAiBBAoBQIAABAEggAAEAWCAAAQBEIAABAFQgAAEATCAAAQBcIIFVgMHAEiAAAQBKIAABAFogAAEARiAAAQBWIAABAE4gAAEAXiAAAQBBIAABAFEgAAEASSAAAQBZIAABAEUgAAEAVSAAAQBNIAABAF0gAAEAQOAAEIBg4AABAFDgAAEAcOAAAQBI4AABAGjgAAEAWOAAAQB44AABIC+K4AAdIECxgEFgABcAQWCBUoBFIAABAEMgAAEARyAAASAvlaABEQBBYIGBAEaggXqAQWAA9QBBYADuAEFgAOcgE92gAAEARGAAAQBCYAABAEZgAAEgQACARWAAAQBDYAABAEdgAAEgL59gAKkgQZAAQWAAiyBBaYBBYABtAEFgD3fAxsLTYMfuYcABIC+rooABIEHUYkABAEEjAAEAQWKAAQEQbAcC4C9CosAS40AO4UALwEGhAAEgQWIgQAEgQEKgQAEgQGSgQAEgIS2ggAEAQuEAAQBDIQABIAF24FHeQTgHQsjhQBfhQXLAhARgAVtBgcJBgoFC4A6uAQNAg4BgAclBJQeC2mFAJCFAIiFAICFAHiBAGiBAFyBBh8BEIAABAEUgAAEARiAAAQBHIAABAEggAAEASiAAAQBMIAABAE4gAAEAUCAAAQBUIAABIEGvQFwgAAEAYCAAAQBoIAABAHAgAAEAeCAAG8DHwtyjQBvgQBrgQBngQBjgQBfgQBbgQBXgQBTgQBPgQBLgQBHgQBDgQE8AYCvAEGAUc0CC22BAMcBBIAAAgEIgAAEgQEzgQJLARCAAA6DAAyBnqyAqmuEACSBB3OBAE8BCIAACIEAGIUADIEIt4MADAEggQCUgDKEgQBrAYCBCC8BBIMADIA/SAoBABAMAEGRIQv/gCUfgMDAgIKxBQgJCQoKgEk3gAABAQ2AAAEBDoAAAQEPgAABARCEAAEBEYQAAQEShAABAROEAAEBFIwAAQEVjAABARaMAAEBF4wAAQEYnAABARmcAAEBGpwAAQEbmwABARyBffsEBAQFBYHB1QEHgAABAQiEAAGAXSqCAAEBCowAAYAnsooAAYEBMJkAAYEBTJkAAYEBaLkAAYEBpLkAAYIDdYABzoUBvI0BqJ0BkLwBgAIbHLwAAQEdvAABgA9PgH05A9AqAQ==`),
        t)
    })
}
var R, ei, ti, ni;
function ri(e) {
    if (R = e,
    {malloc: ei, free: ti, memory: ni} = R,
    typeof ei != `function` || typeof ti != `function` || !ni)
        throw R = ei = ti = ni = null,
        Error(`Invalid WASM module`)
}
function ii(e, t, n={}) {
    let r = typeof n.level == `number` ? n.level : -1
      , i = typeof n.outBuffer == `number` ? n.outBuffer : 64 * 1024
      , a = typeof n.inBufferSize == `number` ? n.inBufferSize : 64 * 1024;
    return new TransformStream({
        start() {
            let n;
            if (this.out = ei(i),
            this.in = ei(a),
            this.inBufferSize = a,
            this._scratch = new Uint8Array(i),
            e ? (this._process = R.deflate_process,
            this._last_consumed = R.deflate_last_consumed,
            this._end = R.deflate_end,
            this.streamHandle = R.deflate_new(),
            n = t === `gzip` ? R.deflate_init_gzip(this.streamHandle, r) : t === `deflate-raw` ? R.deflate_init_raw(this.streamHandle, r) : R.deflate_init(this.streamHandle, r)) : t === `deflate64-raw` ? (this._process = R.inflate9_process,
            this._last_consumed = R.inflate9_last_consumed,
            this._end = R.inflate9_end,
            this.streamHandle = R.inflate9_new(),
            n = R.inflate9_init_raw(this.streamHandle)) : (this._process = R.inflate_process,
            this._last_consumed = R.inflate_last_consumed,
            this._end = R.inflate_end,
            this.streamHandle = R.inflate_new(),
            n = t === `deflate-raw` ? R.inflate_init_raw(this.streamHandle) : t === `gzip` ? R.inflate_init_gzip(this.streamHandle) : R.inflate_init(this.streamHandle)),
            n !== 0)
                throw Error(`init failed:` + n)
        },
        transform(t, n) {
            try {
                let r = t
                  , a = new Uint8Array(ni.buffer)
                  , o = this._process
                  , s = this._last_consumed
                  , c = this.out
                  , l = this._scratch
                  , u = 0;
                for (; u < r.length; ) {
                    let t = Math.min(r.length - u, 32 * 1024);
                    (!this.in || this.inBufferSize < t) && (this.in && ti && ti(this.in),
                    this.in = ei(t),
                    this.inBufferSize = t),
                    a.set(r.subarray(u, u + t), this.in);
                    let d = o(this.streamHandle, this.in, t, c, i, 0)
                      , f = d & 16777215;
                    if (f && (l.set(a.subarray(c, c + f), 0),
                    n.enqueue(l.slice(0, f))),
                    !e) {
                        let e = d >> 24 & 255
                          , t = e & 128 ? e - 256 : e;
                        if (t < 0)
                            throw Error(`process error:` + t)
                    }
                    let p = s(this.streamHandle);
                    if (p === 0)
                        break;
                    u += p
                }
            } catch (e) {
                this._end && this.streamHandle && this._end(this.streamHandle),
                this.in && ti && ti(this.in),
                this.out && ti && ti(this.out),
                n.error(e)
            }
        },
        flush(t) {
            try {
                let n = new Uint8Array(ni.buffer)
                  , r = this._process
                  , a = this.out
                  , o = this._scratch;
                for (; ; ) {
                    let s = r(this.streamHandle, 0, 0, a, i, 4)
                      , c = s & 16777215
                      , l = s >> 24 & 255;
                    if (!e) {
                        let e = l & 128 ? l - 256 : l;
                        if (e < 0)
                            throw Error(`process error:` + e)
                    }
                    if (c && (o.set(n.subarray(a, a + c), 0),
                    t.enqueue(o.slice(0, c))),
                    l === 1 || c === 0)
                        break
                }
            } catch (e) {
                t.error(e)
            } finally {
                if (this._end && this.streamHandle) {
                    let e = this._end(this.streamHandle);
                    e !== 0 && t.error(Error(`end error:` + e))
                }
                this.in && ti && ti(this.in),
                this.out && ti && ti(this.out)
            }
        }
    })
}
var ai = class {
    constructor(e=`deflate`, t) {
        return ii(!0, e, t)
    }
}
  , oi = class {
    constructor(e=`deflate`, t) {
        return ii(!1, e, t)
    }
}
  , si = !1;
async function ci(e, {baseURI: t}) {
    if (!si) {
        let n, r;
        try {
            try {
                r = new URL(e,t)
            } catch {}
            n = await (await fetch(r)).arrayBuffer()
        } catch (t) {
            if (e.startsWith(`data:application/wasm;base64,`))
                n = li(e);
            else
                throw t
        }
        ri((await WebAssembly.instantiate(n)).instance.exports),
        si = !0
    }
}
function li(e) {
    let t = e.split(`,`)[1]
      , n = atob(t)
      , r = n.length
      , i = new Uint8Array(r);
    for (let e = 0; e < r; ++e)
        i[e] = n.charCodeAt(e);
    return i.buffer
}
var ui;
$r(Ae),
on({
    initModule: e => {
        if (!ui) {
            let {wasmURI: t} = e;
            typeof t == `function` && (t = t()),
            ui = ci(t, e)
        }
        return ui
    }
}),
Ae({
    CompressionStreamZlib: ai,
    DecompressionStreamZlib: oi
});
var di = {
    application: {
        "andrew-inset": `ez`,
        annodex: `anx`,
        "atom+xml": `atom`,
        "atomcat+xml": `atomcat`,
        "atomserv+xml": `atomsrv`,
        bbolin: `lin`,
        "cu-seeme": `cu`,
        "davmount+xml": `davmount`,
        dsptype: `tsp`,
        ecmascript: [`es`, `ecma`],
        futuresplash: `spl`,
        hta: `hta`,
        "java-archive": `jar`,
        "java-serialized-object": `ser`,
        "java-vm": `class`,
        m3g: `m3g`,
        "mac-binhex40": `hqx`,
        mathematica: [`nb`, `ma`, `mb`],
        msaccess: `mdb`,
        msword: [`doc`, `dot`, `wiz`],
        mxf: `mxf`,
        oda: `oda`,
        ogg: `ogx`,
        pdf: `pdf`,
        "pgp-keys": `key`,
        "pgp-signature": [`asc`, `sig`],
        "pics-rules": `prf`,
        postscript: [`ps`, `ai`, `eps`, `epsi`, `epsf`, `eps2`, `eps3`],
        rar: `rar`,
        "rdf+xml": `rdf`,
        "rss+xml": `rss`,
        rtf: `rtf`,
        "xhtml+xml": [`xhtml`, `xht`],
        xml: [`xml`, `xsl`, `xsd`, `xpdl`],
        "xspf+xml": `xspf`,
        zip: `zip`,
        "vnd.android.package-archive": `apk`,
        "vnd.cinderella": `cdy`,
        "vnd.google-earth.kml+xml": `kml`,
        "vnd.google-earth.kmz": `kmz`,
        "vnd.mozilla.xul+xml": `xul`,
        "vnd.ms-excel": [`xls`, `xlb`, `xlt`, `xlm`, `xla`, `xlc`, `xlw`],
        "vnd.ms-pki.seccat": `cat`,
        "vnd.ms-pki.stl": `stl`,
        "vnd.ms-powerpoint": [`ppt`, `pps`, `pot`, `ppa`, `pwz`],
        "vnd.oasis.opendocument.chart": `odc`,
        "vnd.oasis.opendocument.database": `odb`,
        "vnd.oasis.opendocument.formula": `odf`,
        "vnd.oasis.opendocument.graphics": `odg`,
        "vnd.oasis.opendocument.graphics-template": `otg`,
        "vnd.oasis.opendocument.image": `odi`,
        "vnd.oasis.opendocument.presentation": `odp`,
        "vnd.oasis.opendocument.presentation-template": `otp`,
        "vnd.oasis.opendocument.spreadsheet": `ods`,
        "vnd.oasis.opendocument.spreadsheet-template": `ots`,
        "vnd.oasis.opendocument.text": `odt`,
        "vnd.oasis.opendocument.text-master": [`odm`, `otm`],
        "vnd.oasis.opendocument.text-template": `ott`,
        "vnd.oasis.opendocument.text-web": `oth`,
        "vnd.openxmlformats-officedocument.spreadsheetml.sheet": `xlsx`,
        "vnd.openxmlformats-officedocument.spreadsheetml.template": `xltx`,
        "vnd.openxmlformats-officedocument.presentationml.presentation": `pptx`,
        "vnd.openxmlformats-officedocument.presentationml.slideshow": `ppsx`,
        "vnd.openxmlformats-officedocument.presentationml.template": `potx`,
        "vnd.openxmlformats-officedocument.wordprocessingml.document": `docx`,
        "vnd.openxmlformats-officedocument.wordprocessingml.template": `dotx`,
        "vnd.smaf": `mmf`,
        "vnd.stardivision.calc": `sdc`,
        "vnd.stardivision.chart": `sds`,
        "vnd.stardivision.draw": `sda`,
        "vnd.stardivision.impress": `sdd`,
        "vnd.stardivision.math": [`sdf`, `smf`],
        "vnd.stardivision.writer": [`sdw`, `vor`],
        "vnd.stardivision.writer-global": `sgl`,
        "vnd.sun.xml.calc": `sxc`,
        "vnd.sun.xml.calc.template": `stc`,
        "vnd.sun.xml.draw": `sxd`,
        "vnd.sun.xml.draw.template": `std`,
        "vnd.sun.xml.impress": `sxi`,
        "vnd.sun.xml.impress.template": `sti`,
        "vnd.sun.xml.math": `sxm`,
        "vnd.sun.xml.writer": `sxw`,
        "vnd.sun.xml.writer.global": `sxg`,
        "vnd.sun.xml.writer.template": `stw`,
        "vnd.symbian.install": [`sis`, `sisx`],
        "vnd.visio": [`vsd`, `vst`, `vss`, `vsw`, `vsdx`, `vssx`, `vstx`, `vssm`, `vstm`],
        "vnd.wap.wbxml": `wbxml`,
        "vnd.wap.wmlc": `wmlc`,
        "vnd.wap.wmlscriptc": `wmlsc`,
        "vnd.wordperfect": `wpd`,
        "vnd.wordperfect5.1": `wp5`,
        "x-123": `wk`,
        "x-7z-compressed": `7z`,
        "x-abiword": `abw`,
        "x-apple-diskimage": `dmg`,
        "x-bcpio": `bcpio`,
        "x-bittorrent": `torrent`,
        "x-cbr": [`cbr`, `cba`, `cbt`, `cb7`],
        "x-cbz": `cbz`,
        "x-cdf": [`cdf`, `cda`],
        "x-cdlink": `vcd`,
        "x-chess-pgn": `pgn`,
        "x-cpio": `cpio`,
        "x-csh": `csh`,
        "x-director": [`dir`, `dxr`, `cst`, `cct`, `cxt`, `w3d`, `fgd`, `swa`],
        "x-dms": `dms`,
        "x-doom": `wad`,
        "x-dvi": `dvi`,
        "x-httpd-eruby": `rhtml`,
        "x-font": `pcf.Z`,
        "x-freemind": `mm`,
        "x-gnumeric": `gnumeric`,
        "x-go-sgf": `sgf`,
        "x-graphing-calculator": `gcf`,
        "x-gtar": [`gtar`, `taz`],
        "x-hdf": `hdf`,
        "x-httpd-php": [`phtml`, `pht`, `php`],
        "x-httpd-php-source": `phps`,
        "x-httpd-php3": `php3`,
        "x-httpd-php3-preprocessed": `php3p`,
        "x-httpd-php4": `php4`,
        "x-httpd-php5": `php5`,
        "x-ica": `ica`,
        "x-info": `info`,
        "x-internet-signup": [`ins`, `isp`],
        "x-iphone": `iii`,
        "x-iso9660-image": `iso`,
        "x-java-jnlp-file": `jnlp`,
        "x-jmol": `jmz`,
        "x-killustrator": `kil`,
        "x-latex": `latex`,
        "x-lyx": `lyx`,
        "x-lzx": `lzx`,
        "x-maker": [`frm`, `fb`, `fbdoc`],
        "x-ms-wmd": `wmd`,
        "x-msdos-program": [`com`, `exe`, `bat`, `dll`],
        "x-netcdf": [`nc`],
        "x-ns-proxy-autoconfig": [`pac`, `dat`],
        "x-nwc": `nwc`,
        "x-object": `o`,
        "x-oz-application": `oza`,
        "x-pkcs7-certreqresp": `p7r`,
        "x-python-code": [`pyc`, `pyo`],
        "x-qgis": [`qgs`, `shp`, `shx`],
        "x-quicktimeplayer": `qtl`,
        "x-redhat-package-manager": [`rpm`, `rpa`],
        "x-ruby": `rb`,
        "x-sh": `sh`,
        "x-shar": `shar`,
        "x-shockwave-flash": [`swf`, `swfl`],
        "x-silverlight": `scr`,
        "x-stuffit": `sit`,
        "x-sv4cpio": `sv4cpio`,
        "x-sv4crc": `sv4crc`,
        "x-tar": `tar`,
        "x-tex-gf": `gf`,
        "x-tex-pk": `pk`,
        "x-texinfo": [`texinfo`, `texi`],
        "x-trash": [`~`, `%`, `bak`, `old`, `sik`],
        "x-ustar": `ustar`,
        "x-wais-source": `src`,
        "x-wingz": `wz`,
        "x-x509-ca-cert": [`crt`, `der`, `cer`],
        "x-xcf": `xcf`,
        "x-xfig": `fig`,
        "x-xpinstall": `xpi`,
        applixware: `aw`,
        "atomsvc+xml": `atomsvc`,
        "ccxml+xml": `ccxml`,
        "cdmi-capability": `cdmia`,
        "cdmi-container": `cdmic`,
        "cdmi-domain": `cdmid`,
        "cdmi-object": `cdmio`,
        "cdmi-queue": `cdmiq`,
        "docbook+xml": `dbk`,
        "dssc+der": `dssc`,
        "dssc+xml": `xdssc`,
        "emma+xml": `emma`,
        "epub+zip": `epub`,
        exi: `exi`,
        "font-tdpfr": `pfr`,
        "gml+xml": `gml`,
        "gpx+xml": `gpx`,
        gxf: `gxf`,
        hyperstudio: `stk`,
        "inkml+xml": [`ink`, `inkml`],
        ipfix: `ipfix`,
        "jsonml+json": `jsonml`,
        "lost+xml": `lostxml`,
        "mads+xml": `mads`,
        marc: `mrc`,
        "marcxml+xml": `mrcx`,
        "mathml+xml": [`mathml`, `mml`],
        mbox: `mbox`,
        "mediaservercontrol+xml": `mscml`,
        "metalink+xml": `metalink`,
        "metalink4+xml": `meta4`,
        "mets+xml": `mets`,
        "mods+xml": `mods`,
        mp21: [`m21`, `mp21`],
        mp4: `mp4s`,
        "oebps-package+xml": `opf`,
        "omdoc+xml": `omdoc`,
        onenote: [`onetoc`, `onetoc2`, `onetmp`, `onepkg`],
        oxps: `oxps`,
        "patch-ops-error+xml": `xer`,
        "pgp-encrypted": `pgp`,
        pkcs10: `p10`,
        "pkcs7-mime": [`p7m`, `p7c`],
        "pkcs7-signature": `p7s`,
        pkcs8: `p8`,
        "pkix-attr-cert": `ac`,
        "pkix-crl": `crl`,
        "pkix-pkipath": `pkipath`,
        pkixcmp: `pki`,
        "pls+xml": `pls`,
        "prs.cww": `cww`,
        "pskc+xml": `pskcxml`,
        "reginfo+xml": `rif`,
        "relax-ng-compact-syntax": `rnc`,
        "resource-lists+xml": `rl`,
        "resource-lists-diff+xml": `rld`,
        "rls-services+xml": `rs`,
        "rpki-ghostbusters": `gbr`,
        "rpki-manifest": `mft`,
        "rpki-roa": `roa`,
        "rsd+xml": `rsd`,
        "sbml+xml": `sbml`,
        "scvp-cv-request": `scq`,
        "scvp-cv-response": `scs`,
        "scvp-vp-request": `spq`,
        "scvp-vp-response": `spp`,
        sdp: `sdp`,
        "set-payment-initiation": `setpay`,
        "set-registration-initiation": `setreg`,
        "shf+xml": `shf`,
        "sparql-query": `rq`,
        "sparql-results+xml": `srx`,
        srgs: `gram`,
        "srgs+xml": `grxml`,
        "sru+xml": `sru`,
        "ssdl+xml": `ssdl`,
        "ssml+xml": `ssml`,
        "tei+xml": [`tei`, `teicorpus`],
        "thraud+xml": `tfi`,
        "timestamped-data": `tsd`,
        "vnd.3gpp.pic-bw-large": `plb`,
        "vnd.3gpp.pic-bw-small": `psb`,
        "vnd.3gpp.pic-bw-var": `pvb`,
        "vnd.3gpp2.tcap": `tcap`,
        "vnd.3m.post-it-notes": `pwn`,
        "vnd.accpac.simply.aso": `aso`,
        "vnd.accpac.simply.imp": `imp`,
        "vnd.acucobol": `acu`,
        "vnd.acucorp": [`atc`, `acutc`],
        "vnd.adobe.air-application-installer-package+zip": `air`,
        "vnd.adobe.formscentral.fcdt": `fcdt`,
        "vnd.adobe.fxp": [`fxp`, `fxpl`],
        "vnd.adobe.xdp+xml": `xdp`,
        "vnd.adobe.xfdf": `xfdf`,
        "vnd.ahead.space": `ahead`,
        "vnd.airzip.filesecure.azf": `azf`,
        "vnd.airzip.filesecure.azs": `azs`,
        "vnd.amazon.ebook": `azw`,
        "vnd.americandynamics.acc": `acc`,
        "vnd.amiga.ami": `ami`,
        "vnd.anser-web-certificate-issue-initiation": `cii`,
        "vnd.anser-web-funds-transfer-initiation": `fti`,
        "vnd.antix.game-component": `atx`,
        "vnd.apple.installer+xml": `mpkg`,
        "vnd.apple.mpegurl": `m3u8`,
        "vnd.aristanetworks.swi": `swi`,
        "vnd.astraea-software.iota": `iota`,
        "vnd.audiograph": `aep`,
        "vnd.blueice.multipass": `mpm`,
        "vnd.bmi": `bmi`,
        "vnd.businessobjects": `rep`,
        "vnd.chemdraw+xml": `cdxml`,
        "vnd.chipnuts.karaoke-mmd": `mmd`,
        "vnd.claymore": `cla`,
        "vnd.cloanto.rp9": `rp9`,
        "vnd.clonk.c4group": [`c4g`, `c4d`, `c4f`, `c4p`, `c4u`],
        "vnd.cluetrust.cartomobile-config": `c11amc`,
        "vnd.cluetrust.cartomobile-config-pkg": `c11amz`,
        "vnd.commonspace": `csp`,
        "vnd.contact.cmsg": `cdbcmsg`,
        "vnd.cosmocaller": `cmc`,
        "vnd.crick.clicker": `clkx`,
        "vnd.crick.clicker.keyboard": `clkk`,
        "vnd.crick.clicker.palette": `clkp`,
        "vnd.crick.clicker.template": `clkt`,
        "vnd.crick.clicker.wordbank": `clkw`,
        "vnd.criticaltools.wbs+xml": `wbs`,
        "vnd.ctc-posml": `pml`,
        "vnd.cups-ppd": `ppd`,
        "vnd.curl.car": `car`,
        "vnd.curl.pcurl": `pcurl`,
        "vnd.dart": `dart`,
        "vnd.data-vision.rdz": `rdz`,
        "vnd.dece.data": [`uvf`, `uvvf`, `uvd`, `uvvd`],
        "vnd.dece.ttml+xml": [`uvt`, `uvvt`],
        "vnd.dece.unspecified": [`uvx`, `uvvx`],
        "vnd.dece.zip": [`uvz`, `uvvz`],
        "vnd.denovo.fcselayout-link": `fe_launch`,
        "vnd.dna": `dna`,
        "vnd.dolby.mlp": `mlp`,
        "vnd.dpgraph": `dpg`,
        "vnd.dreamfactory": `dfac`,
        "vnd.ds-keypoint": `kpxx`,
        "vnd.dvb.ait": `ait`,
        "vnd.dvb.service": `svc`,
        "vnd.dynageo": `geo`,
        "vnd.ecowin.chart": `mag`,
        "vnd.enliven": `nml`,
        "vnd.epson.esf": `esf`,
        "vnd.epson.msf": `msf`,
        "vnd.epson.quickanime": `qam`,
        "vnd.epson.salt": `slt`,
        "vnd.epson.ssf": `ssf`,
        "vnd.eszigno3+xml": [`es3`, `et3`],
        "vnd.ezpix-album": `ez2`,
        "vnd.ezpix-package": `ez3`,
        "vnd.fdf": `fdf`,
        "vnd.fdsn.mseed": `mseed`,
        "vnd.fdsn.seed": [`seed`, `dataless`],
        "vnd.flographit": `gph`,
        "vnd.fluxtime.clip": `ftc`,
        "vnd.framemaker": [`fm`, `frame`, `maker`, `book`],
        "vnd.frogans.fnc": `fnc`,
        "vnd.frogans.ltf": `ltf`,
        "vnd.fsc.weblaunch": `fsc`,
        "vnd.fujitsu.oasys": `oas`,
        "vnd.fujitsu.oasys2": `oa2`,
        "vnd.fujitsu.oasys3": `oa3`,
        "vnd.fujitsu.oasysgp": `fg5`,
        "vnd.fujitsu.oasysprs": `bh2`,
        "vnd.fujixerox.ddd": `ddd`,
        "vnd.fujixerox.docuworks": `xdw`,
        "vnd.fujixerox.docuworks.binder": `xbd`,
        "vnd.fuzzysheet": `fzs`,
        "vnd.genomatix.tuxedo": `txd`,
        "vnd.geogebra.file": `ggb`,
        "vnd.geogebra.tool": `ggt`,
        "vnd.geometry-explorer": [`gex`, `gre`],
        "vnd.geonext": `gxt`,
        "vnd.geoplan": `g2w`,
        "vnd.geospace": `g3w`,
        "vnd.gmx": `gmx`,
        "vnd.grafeq": [`gqf`, `gqs`],
        "vnd.groove-account": `gac`,
        "vnd.groove-help": `ghf`,
        "vnd.groove-identity-message": `gim`,
        "vnd.groove-injector": `grv`,
        "vnd.groove-tool-message": `gtm`,
        "vnd.groove-tool-template": `tpl`,
        "vnd.groove-vcard": `vcg`,
        "vnd.hal+xml": `hal`,
        "vnd.handheld-entertainment+xml": `zmm`,
        "vnd.hbci": `hbci`,
        "vnd.hhe.lesson-player": `les`,
        "vnd.hp-hpgl": `hpgl`,
        "vnd.hp-hpid": `hpid`,
        "vnd.hp-hps": `hps`,
        "vnd.hp-jlyt": `jlt`,
        "vnd.hp-pcl": `pcl`,
        "vnd.hp-pclxl": `pclxl`,
        "vnd.hydrostatix.sof-data": `sfd-hdstx`,
        "vnd.ibm.minipay": `mpy`,
        "vnd.ibm.modcap": [`afp`, `listafp`, `list3820`],
        "vnd.ibm.rights-management": `irm`,
        "vnd.ibm.secure-container": `sc`,
        "vnd.iccprofile": [`icc`, `icm`],
        "vnd.igloader": `igl`,
        "vnd.immervision-ivp": `ivp`,
        "vnd.immervision-ivu": `ivu`,
        "vnd.insors.igm": `igm`,
        "vnd.intercon.formnet": [`xpw`, `xpx`],
        "vnd.intergeo": `i2g`,
        "vnd.intu.qbo": `qbo`,
        "vnd.intu.qfx": `qfx`,
        "vnd.ipunplugged.rcprofile": `rcprofile`,
        "vnd.irepository.package+xml": `irp`,
        "vnd.is-xpr": `xpr`,
        "vnd.isac.fcs": `fcs`,
        "vnd.jam": `jam`,
        "vnd.jcp.javame.midlet-rms": `rms`,
        "vnd.jisp": `jisp`,
        "vnd.joost.joda-archive": `joda`,
        "vnd.kahootz": [`ktz`, `ktr`],
        "vnd.kde.karbon": `karbon`,
        "vnd.kde.kchart": `chrt`,
        "vnd.kde.kformula": `kfo`,
        "vnd.kde.kivio": `flw`,
        "vnd.kde.kontour": `kon`,
        "vnd.kde.kpresenter": [`kpr`, `kpt`],
        "vnd.kde.kspread": `ksp`,
        "vnd.kde.kword": [`kwd`, `kwt`],
        "vnd.kenameaapp": `htke`,
        "vnd.kidspiration": `kia`,
        "vnd.kinar": [`kne`, `knp`],
        "vnd.koan": [`skp`, `skd`, `skt`, `skm`],
        "vnd.kodak-descriptor": `sse`,
        "vnd.las.las+xml": `lasxml`,
        "vnd.llamagraphics.life-balance.desktop": `lbd`,
        "vnd.llamagraphics.life-balance.exchange+xml": `lbe`,
        "vnd.lotus-1-2-3": `123`,
        "vnd.lotus-approach": `apr`,
        "vnd.lotus-freelance": `pre`,
        "vnd.lotus-notes": `nsf`,
        "vnd.lotus-organizer": `org`,
        "vnd.lotus-screencam": `scm`,
        "vnd.lotus-wordpro": `lwp`,
        "vnd.macports.portpkg": `portpkg`,
        "vnd.mcd": `mcd`,
        "vnd.medcalcdata": `mc1`,
        "vnd.mediastation.cdkey": `cdkey`,
        "vnd.mfer": `mwf`,
        "vnd.mfmp": `mfm`,
        "vnd.micrografx.flo": `flo`,
        "vnd.micrografx.igx": `igx`,
        "vnd.mif": `mif`,
        "vnd.mobius.daf": `daf`,
        "vnd.mobius.dis": `dis`,
        "vnd.mobius.mbk": `mbk`,
        "vnd.mobius.mqy": `mqy`,
        "vnd.mobius.msl": `msl`,
        "vnd.mobius.plc": `plc`,
        "vnd.mobius.txf": `txf`,
        "vnd.mophun.application": `mpn`,
        "vnd.mophun.certificate": `mpc`,
        "vnd.ms-artgalry": `cil`,
        "vnd.ms-cab-compressed": `cab`,
        "vnd.ms-excel.addin.macroenabled.12": `xlam`,
        "vnd.ms-excel.sheet.binary.macroenabled.12": `xlsb`,
        "vnd.ms-excel.sheet.macroenabled.12": `xlsm`,
        "vnd.ms-excel.template.macroenabled.12": `xltm`,
        "vnd.ms-fontobject": `eot`,
        "vnd.ms-htmlhelp": `chm`,
        "vnd.ms-ims": `ims`,
        "vnd.ms-lrm": `lrm`,
        "vnd.ms-officetheme": `thmx`,
        "vnd.ms-powerpoint.addin.macroenabled.12": `ppam`,
        "vnd.ms-powerpoint.presentation.macroenabled.12": `pptm`,
        "vnd.ms-powerpoint.slide.macroenabled.12": `sldm`,
        "vnd.ms-powerpoint.slideshow.macroenabled.12": `ppsm`,
        "vnd.ms-powerpoint.template.macroenabled.12": `potm`,
        "vnd.ms-project": [`mpp`, `mpt`],
        "vnd.ms-word.document.macroenabled.12": `docm`,
        "vnd.ms-word.template.macroenabled.12": `dotm`,
        "vnd.ms-works": [`wps`, `wks`, `wcm`, `wdb`],
        "vnd.ms-wpl": `wpl`,
        "vnd.ms-xpsdocument": `xps`,
        "vnd.mseq": `mseq`,
        "vnd.musician": `mus`,
        "vnd.muvee.style": `msty`,
        "vnd.mynfc": `taglet`,
        "vnd.neurolanguage.nlu": `nlu`,
        "vnd.nitf": [`ntf`, `nitf`],
        "vnd.noblenet-directory": `nnd`,
        "vnd.noblenet-sealer": `nns`,
        "vnd.noblenet-web": `nnw`,
        "vnd.nokia.n-gage.data": `ngdat`,
        "vnd.nokia.n-gage.symbian.install": `n-gage`,
        "vnd.nokia.radio-preset": `rpst`,
        "vnd.nokia.radio-presets": `rpss`,
        "vnd.novadigm.edm": `edm`,
        "vnd.novadigm.edx": `edx`,
        "vnd.novadigm.ext": `ext`,
        "vnd.oasis.opendocument.chart-template": `otc`,
        "vnd.oasis.opendocument.formula-template": `odft`,
        "vnd.oasis.opendocument.image-template": `oti`,
        "vnd.olpc-sugar": `xo`,
        "vnd.oma.dd2+xml": `dd2`,
        "vnd.openofficeorg.extension": `oxt`,
        "vnd.openxmlformats-officedocument.presentationml.slide": `sldx`,
        "vnd.osgeo.mapguide.package": `mgp`,
        "vnd.osgi.dp": `dp`,
        "vnd.osgi.subsystem": `esa`,
        "vnd.palm": [`pdb`, `pqa`, `oprc`],
        "vnd.pawaafile": `paw`,
        "vnd.pg.format": `str`,
        "vnd.pg.osasli": `ei6`,
        "vnd.picsel": `efif`,
        "vnd.pmi.widget": `wg`,
        "vnd.pocketlearn": `plf`,
        "vnd.powerbuilder6": `pbd`,
        "vnd.previewsystems.box": `box`,
        "vnd.proteus.magazine": `mgz`,
        "vnd.publishare-delta-tree": `qps`,
        "vnd.pvi.ptid1": `ptid`,
        "vnd.quark.quarkxpress": [`qxd`, `qxt`, `qwd`, `qwt`, `qxl`, `qxb`],
        "vnd.realvnc.bed": `bed`,
        "vnd.recordare.musicxml": `mxl`,
        "vnd.recordare.musicxml+xml": `musicxml`,
        "vnd.rig.cryptonote": `cryptonote`,
        "vnd.rn-realmedia": `rm`,
        "vnd.rn-realmedia-vbr": `rmvb`,
        "vnd.route66.link66+xml": `link66`,
        "vnd.sailingtracker.track": `st`,
        "vnd.seemail": `see`,
        "vnd.sema": `sema`,
        "vnd.semd": `semd`,
        "vnd.semf": `semf`,
        "vnd.shana.informed.formdata": `ifm`,
        "vnd.shana.informed.formtemplate": `itp`,
        "vnd.shana.informed.interchange": `iif`,
        "vnd.shana.informed.package": `ipk`,
        "vnd.simtech-mindmapper": [`twd`, `twds`],
        "vnd.smart.teacher": `teacher`,
        "vnd.solent.sdkm+xml": [`sdkm`, `sdkd`],
        "vnd.spotfire.dxp": `dxp`,
        "vnd.spotfire.sfs": `sfs`,
        "vnd.stepmania.package": `smzip`,
        "vnd.stepmania.stepchart": `sm`,
        "vnd.sus-calendar": [`sus`, `susp`],
        "vnd.svd": `svd`,
        "vnd.syncml+xml": `xsm`,
        "vnd.syncml.dm+wbxml": `bdm`,
        "vnd.syncml.dm+xml": `xdm`,
        "vnd.tao.intent-module-archive": `tao`,
        "vnd.tcpdump.pcap": [`pcap`, `cap`, `dmp`],
        "vnd.tmobile-livetv": `tmo`,
        "vnd.trid.tpt": `tpt`,
        "vnd.triscape.mxs": `mxs`,
        "vnd.trueapp": `tra`,
        "vnd.ufdl": [`ufd`, `ufdl`],
        "vnd.uiq.theme": `utz`,
        "vnd.umajin": `umj`,
        "vnd.unity": `unityweb`,
        "vnd.uoml+xml": `uoml`,
        "vnd.vcx": `vcx`,
        "vnd.visionary": `vis`,
        "vnd.vsf": `vsf`,
        "vnd.webturbo": `wtb`,
        "vnd.wolfram.player": `nbp`,
        "vnd.wqd": `wqd`,
        "vnd.wt.stf": `stf`,
        "vnd.xara": `xar`,
        "vnd.xfdl": `xfdl`,
        "vnd.yamaha.hv-dic": `hvd`,
        "vnd.yamaha.hv-script": `hvs`,
        "vnd.yamaha.hv-voice": `hvp`,
        "vnd.yamaha.openscoreformat": `osf`,
        "vnd.yamaha.openscoreformat.osfpvg+xml": `osfpvg`,
        "vnd.yamaha.smaf-audio": `saf`,
        "vnd.yamaha.smaf-phrase": `spf`,
        "vnd.yellowriver-custom-menu": `cmp`,
        "vnd.zul": [`zir`, `zirz`],
        "vnd.zzazz.deck+xml": `zaz`,
        "voicexml+xml": `vxml`,
        widget: `wgt`,
        winhlp: `hlp`,
        "wsdl+xml": `wsdl`,
        "wspolicy+xml": `wspolicy`,
        "x-ace-compressed": `ace`,
        "x-authorware-bin": [`aab`, `x32`, `u32`, `vox`],
        "x-authorware-map": `aam`,
        "x-authorware-seg": `aas`,
        "x-blorb": [`blb`, `blorb`],
        "x-bzip": `bz`,
        "x-bzip2": [`bz2`, `boz`],
        "x-cfs-compressed": `cfs`,
        "x-chat": `chat`,
        "x-conference": `nsc`,
        "x-dgc-compressed": `dgc`,
        "x-dtbncx+xml": `ncx`,
        "x-dtbook+xml": `dtb`,
        "x-dtbresource+xml": `res`,
        "x-eva": `eva`,
        "x-font-bdf": `bdf`,
        "x-font-ghostscript": `gsf`,
        "x-font-linux-psf": `psf`,
        "x-font-pcf": `pcf`,
        "x-font-snf": `snf`,
        "x-font-ttf": [`ttf`, `ttc`],
        "x-font-type1": [`pfa`, `pfb`, `pfm`, `afm`],
        "x-freearc": `arc`,
        "x-gca-compressed": `gca`,
        "x-glulx": `ulx`,
        "x-gramps-xml": `gramps`,
        "x-install-instructions": `install`,
        "x-lzh-compressed": [`lzh`, `lha`],
        "x-mie": `mie`,
        "x-mobipocket-ebook": [`prc`, `mobi`],
        "x-ms-application": `application`,
        "x-ms-shortcut": `lnk`,
        "x-ms-xbap": `xbap`,
        "x-msbinder": `obd`,
        "x-mscardfile": `crd`,
        "x-msclip": `clp`,
        "application/x-ms-installer": `msi`,
        "x-msmediaview": [`mvb`, `m13`, `m14`],
        "x-msmetafile": [`wmf`, `wmz`, `emf`, `emz`],
        "x-msmoney": `mny`,
        "x-mspublisher": `pub`,
        "x-msschedule": `scd`,
        "x-msterminal": `trm`,
        "x-mswrite": `wri`,
        "x-nzb": `nzb`,
        "x-pkcs12": [`p12`, `pfx`],
        "x-pkcs7-certificates": [`p7b`, `spc`],
        "x-research-info-systems": `ris`,
        "x-silverlight-app": `xap`,
        "x-sql": `sql`,
        "x-stuffitx": `sitx`,
        "x-subrip": `srt`,
        "x-t3vm-image": `t3`,
        "x-tex-tfm": `tfm`,
        "x-tgif": `obj`,
        "x-xliff+xml": `xlf`,
        "x-xz": `xz`,
        "x-zmachine": [`z1`, `z2`, `z3`, `z4`, `z5`, `z6`, `z7`, `z8`],
        "xaml+xml": `xaml`,
        "xcap-diff+xml": `xdf`,
        "xenc+xml": `xenc`,
        "xml-dtd": `dtd`,
        "xop+xml": `xop`,
        "xproc+xml": `xpl`,
        "xslt+xml": `xslt`,
        "xv+xml": [`mxml`, `xhvml`, `xvml`, `xvm`],
        yang: `yang`,
        "yin+xml": `yin`,
        envoy: `evy`,
        fractals: `fif`,
        "internet-property-stream": `acx`,
        olescript: `axs`,
        "vnd.ms-outlook": `msg`,
        "vnd.ms-pkicertstore": `sst`,
        "x-compress": `z`,
        "x-perfmon": [`pma`, `pmc`, `pmr`, `pmw`],
        "ynd.ms-pkipko": `pko`,
        gzip: [`gz`, `tgz`],
        "smil+xml": [`smi`, `smil`],
        "vnd.debian.binary-package": [`deb`, `udeb`],
        "vnd.hzn-3d-crossword": `x3d`,
        "vnd.sqlite3": [`db`, `sqlite`, `sqlite3`, `db-wal`, `sqlite-wal`, `db-shm`, `sqlite-shm`],
        "vnd.wap.sic": `sic`,
        "vnd.wap.slc": `slc`,
        "x-krita": [`kra`, `krz`],
        "x-perl": [`pm`, `pl`],
        yaml: [`yaml`, `yml`]
    },
    audio: {
        amr: `amr`,
        "amr-wb": `awb`,
        annodex: `axa`,
        basic: [`au`, `snd`],
        flac: `flac`,
        midi: [`mid`, `midi`, `kar`, `rmi`],
        mpeg: [`mpga`, `mpega`, `mp3`, `m4a`, `mp2a`, `m2a`, `m3a`],
        mpegurl: `m3u`,
        ogg: [`oga`, `ogg`, `spx`],
        "prs.sid": `sid`,
        "x-aiff": `aifc`,
        "x-gsm": `gsm`,
        "x-ms-wma": `wma`,
        "x-ms-wax": `wax`,
        "x-pn-realaudio": `ram`,
        "x-realaudio": `ra`,
        "x-sd2": `sd2`,
        adpcm: `adp`,
        mp4: `mp4a`,
        s3m: `s3m`,
        silk: `sil`,
        "vnd.dece.audio": [`uva`, `uvva`],
        "vnd.digital-winds": `eol`,
        "vnd.dra": `dra`,
        "vnd.dts": `dts`,
        "vnd.dts.hd": `dtshd`,
        "vnd.lucent.voice": `lvp`,
        "vnd.ms-playready.media.pya": `pya`,
        "vnd.nuera.ecelp4800": `ecelp4800`,
        "vnd.nuera.ecelp7470": `ecelp7470`,
        "vnd.nuera.ecelp9600": `ecelp9600`,
        "vnd.rip": `rip`,
        webm: `weba`,
        "x-caf": `caf`,
        "x-matroska": `mka`,
        "x-pn-realaudio-plugin": `rmp`,
        xm: `xm`,
        aac: `aac`,
        aiff: [`aiff`, `aif`, `aff`],
        opus: `opus`,
        wav: `wav`
    },
    chemical: {
        "x-alchemy": `alc`,
        "x-cache": [`cac`, `cache`],
        "x-cache-csf": `csf`,
        "x-cactvs-binary": [`cbin`, `cascii`, `ctab`],
        "x-cdx": `cdx`,
        "x-chem3d": `c3d`,
        "x-cif": `cif`,
        "x-cmdf": `cmdf`,
        "x-cml": `cml`,
        "x-compass": `cpa`,
        "x-crossfire": `bsd`,
        "x-csml": [`csml`, `csm`],
        "x-ctx": `ctx`,
        "x-cxf": [`cxf`, `cef`],
        "x-embl-dl-nucleotide": [`emb`, `embl`],
        "x-gamess-input": [`inp`, `gam`, `gamin`],
        "x-gaussian-checkpoint": [`fch`, `fchk`],
        "x-gaussian-cube": `cub`,
        "x-gaussian-input": [`gau`, `gjc`, `gjf`],
        "x-gaussian-log": `gal`,
        "x-gcg8-sequence": `gcg`,
        "x-genbank": `gen`,
        "x-hin": `hin`,
        "x-isostar": [`istr`, `ist`],
        "x-jcamp-dx": [`jdx`, `dx`],
        "x-kinemage": `kin`,
        "x-macmolecule": `mcm`,
        "x-macromodel-input": `mmod`,
        "x-mdl-molfile": `mol`,
        "x-mdl-rdfile": `rd`,
        "x-mdl-rxnfile": `rxn`,
        "x-mdl-sdfile": `sd`,
        "x-mdl-tgf": `tgf`,
        "x-mmcif": `mcif`,
        "x-mol2": `mol2`,
        "x-molconn-Z": `b`,
        "x-mopac-graph": `gpt`,
        "x-mopac-input": [`mop`, `mopcrt`, `zmt`],
        "x-mopac-out": `moo`,
        "x-ncbi-asn1": `asn`,
        "x-ncbi-asn1-ascii": [`prt`, `ent`],
        "x-ncbi-asn1-binary": `val`,
        "x-rosdal": `ros`,
        "x-swissprot": `sw`,
        "x-vamas-iso14976": `vms`,
        "x-vmd": `vmd`,
        "x-xtel": `xtel`,
        "x-xyz": `xyz`
    },
    font: {
        otf: `otf`,
        woff: `woff`,
        woff2: `woff2`
    },
    image: {
        gif: `gif`,
        ief: `ief`,
        jpeg: [`jpeg`, `jpg`, `jpe`, `jfif`, `jfif-tbnl`, `jif`],
        pcx: `pcx`,
        png: `png`,
        "svg+xml": [`svg`, `svgz`],
        tiff: [`tiff`, `tif`],
        "vnd.djvu": [`djvu`, `djv`],
        "vnd.wap.wbmp": `wbmp`,
        "x-canon-cr2": `cr2`,
        "x-canon-crw": `crw`,
        "x-cmu-raster": `ras`,
        "x-coreldraw": `cdr`,
        "x-coreldrawpattern": `pat`,
        "x-coreldrawtemplate": `cdt`,
        "x-corelphotopaint": `cpt`,
        "x-epson-erf": `erf`,
        "x-icon": `ico`,
        "x-jg": `art`,
        "x-jng": `jng`,
        "x-nikon-nef": `nef`,
        "x-olympus-orf": `orf`,
        "x-portable-anymap": `pnm`,
        "x-portable-bitmap": `pbm`,
        "x-portable-graymap": `pgm`,
        "x-portable-pixmap": `ppm`,
        "x-rgb": `rgb`,
        "x-xbitmap": `xbm`,
        "x-xpixmap": `xpm`,
        "x-xwindowdump": `xwd`,
        bmp: `bmp`,
        cgm: `cgm`,
        g3fax: `g3`,
        ktx: `ktx`,
        "prs.btif": `btif`,
        sgi: `sgi`,
        "vnd.dece.graphic": [`uvi`, `uvvi`, `uvg`, `uvvg`],
        "vnd.dwg": `dwg`,
        "vnd.dxf": `dxf`,
        "vnd.fastbidsheet": `fbs`,
        "vnd.fpx": `fpx`,
        "vnd.fst": `fst`,
        "vnd.fujixerox.edmics-mmr": `mmr`,
        "vnd.fujixerox.edmics-rlc": `rlc`,
        "vnd.ms-modi": `mdi`,
        "vnd.ms-photo": `wdp`,
        "vnd.net-fpx": `npx`,
        "vnd.xiff": `xif`,
        webp: `webp`,
        "x-3ds": `3ds`,
        "x-cmx": `cmx`,
        "x-freehand": [`fh`, `fhc`, `fh4`, `fh5`, `fh7`],
        "x-pict": [`pic`, `pct`],
        "x-tga": `tga`,
        "cis-cod": `cod`,
        avif: `avifs`,
        heic: [`heif`, `heic`],
        pjpeg: [`pjpg`],
        "vnd.adobe.photoshop": `psd`,
        "x-adobe-dng": `dng`,
        "x-fuji-raf": `raf`,
        "x-icns": `icns`,
        "x-kodak-dcr": `dcr`,
        "x-kodak-k25": `k25`,
        "x-kodak-kdc": `kdc`,
        "x-minolta-mrw": `mrw`,
        "x-panasonic-raw": [`raw`, `rw2`, `rwl`],
        "x-pentax-pef": [`pef`, `ptx`],
        "x-sigma-x3f": `x3f`,
        "x-sony-arw": `arw`,
        "x-sony-sr2": `sr2`,
        "x-sony-srf": `srf`
    },
    message: {
        rfc822: [`eml`, `mime`, `mht`, `mhtml`, `nws`]
    },
    model: {
        iges: [`igs`, `iges`],
        mesh: [`msh`, `mesh`, `silo`],
        vrml: [`wrl`, `vrml`],
        "x3d+vrml": [`x3dv`, `x3dvz`],
        "x3d+xml": `x3dz`,
        "x3d+binary": [`x3db`, `x3dbz`],
        "vnd.collada+xml": `dae`,
        "vnd.dwf": `dwf`,
        "vnd.gdl": `gdl`,
        "vnd.gtw": `gtw`,
        "vnd.mts": `mts`,
        "vnd.usdz+zip": `usdz`,
        "vnd.vtu": `vtu`
    },
    text: {
        "cache-manifest": [`manifest`, `appcache`],
        calendar: [`ics`, `icz`, `ifb`],
        css: `css`,
        csv: `csv`,
        h323: `323`,
        html: [`html`, `htm`, `shtml`, `stm`],
        iuls: `uls`,
        plain: [`txt`, `text`, `brf`, `conf`, `def`, `list`, `log`, `in`, `bas`, `diff`, `ksh`],
        richtext: `rtx`,
        scriptlet: [`sct`, `wsc`],
        texmacs: `tm`,
        "tab-separated-values": `tsv`,
        "vnd.sun.j2me.app-descriptor": `jad`,
        "vnd.wap.wml": `wml`,
        "vnd.wap.wmlscript": `wmls`,
        "x-bibtex": `bib`,
        "x-boo": `boo`,
        "x-c++hdr": [`h++`, `hpp`, `hxx`, `hh`],
        "x-c++src": [`c++`, `cpp`, `cxx`, `cc`],
        "x-component": `htc`,
        "x-dsrc": `d`,
        "x-diff": `patch`,
        "x-haskell": `hs`,
        "x-java": `java`,
        "x-literate-haskell": `lhs`,
        "x-moc": `moc`,
        "x-pascal": [`p`, `pas`, `pp`, `inc`],
        "x-pcs-gcd": `gcd`,
        "x-python": `py`,
        "x-scala": `scala`,
        "x-setext": `etx`,
        "x-tcl": [`tcl`, `tk`],
        "x-tex": [`tex`, `ltx`, `sty`, `cls`],
        "x-vcalendar": `vcs`,
        "x-vcard": `vcf`,
        n3: `n3`,
        "prs.lines.tag": `dsc`,
        sgml: [`sgml`, `sgm`],
        troff: [`t`, `tr`, `roff`, `man`, `me`, `ms`],
        turtle: `ttl`,
        "uri-list": [`uri`, `uris`, `urls`],
        vcard: `vcard`,
        "vnd.curl": `curl`,
        "vnd.curl.dcurl": `dcurl`,
        "vnd.curl.scurl": `scurl`,
        "vnd.curl.mcurl": `mcurl`,
        "vnd.dvb.subtitle": `sub`,
        "vnd.fly": `fly`,
        "vnd.fmi.flexstor": `flx`,
        "vnd.graphviz": `gv`,
        "vnd.in3d.3dml": `3dml`,
        "vnd.in3d.spot": `spot`,
        "x-asm": [`s`, `asm`],
        "x-c": [`c`, `h`, `dic`],
        "x-fortran": [`f`, `for`, `f77`, `f90`],
        "x-opml": `opml`,
        "x-nfo": `nfo`,
        "x-sfv": `sfv`,
        "x-uuencode": `uu`,
        webviewhtml: `htt`,
        javascript: `js`,
        json: `json`,
        markdown: [`md`, `markdown`, `mdown`, `markdn`],
        "vnd.wap.si": `si`,
        "vnd.wap.sl": `sl`
    },
    video: {
        avif: `avif`,
        "3gpp": `3gp`,
        annodex: `axv`,
        dl: `dl`,
        dv: [`dif`, `dv`],
        fli: `fli`,
        gl: `gl`,
        mpeg: [`mpeg`, `mpg`, `mpe`, `m1v`, `m2v`, `mp2`, `mpa`, `mpv2`],
        mp4: [`mp4`, `mp4v`, `mpg4`],
        quicktime: [`qt`, `mov`],
        ogg: `ogv`,
        "vnd.mpegurl": [`mxu`, `m4u`],
        "x-flv": `flv`,
        "x-la-asf": [`lsf`, `lsx`],
        "x-mng": `mng`,
        "x-ms-asf": [`asf`, `asx`, `asr`],
        "x-ms-wm": `wm`,
        "x-ms-wmv": `wmv`,
        "x-ms-wmx": `wmx`,
        "x-ms-wvx": `wvx`,
        "x-msvideo": `avi`,
        "x-sgi-movie": `movie`,
        "x-matroska": [`mpv`, `mkv`, `mk3d`, `mks`],
        "3gpp2": `3g2`,
        h261: `h261`,
        h263: `h263`,
        h264: `h264`,
        jpeg: `jpgv`,
        jpm: [`jpm`, `jpgm`],
        mj2: [`mj2`, `mjp2`],
        "vnd.dece.hd": [`uvh`, `uvvh`],
        "vnd.dece.mobile": [`uvm`, `uvvm`],
        "vnd.dece.pd": [`uvp`, `uvvp`],
        "vnd.dece.sd": [`uvs`, `uvvs`],
        "vnd.dece.video": [`uvv`, `uvvv`],
        "vnd.dvb.file": `dvb`,
        "vnd.fvt": `fvt`,
        "vnd.ms-playready.media.pyv": `pyv`,
        "vnd.uvvu.mp4": [`uvu`, `uvvu`],
        "vnd.vivo": `viv`,
        webm: `webm`,
        "x-f4v": `f4v`,
        "x-m4v": `m4v`,
        "x-ms-vob": `vob`,
        "x-smv": `smv`,
        mp2t: `ts`
    },
    "x-conference": {
        "x-cooltalk": `ice`
    },
    "x-world": {
        "x-vrml": [`vrm`, `flr`, `wrz`, `xaf`, `xof`]
    }
};
( () => {
    let e = {};
    for (let t of Object.keys(di))
        for (let n of Object.keys(di[t])) {
            let r = di[t][n];
            if (typeof r == `string`)
                e[r] = t + `/` + n;
            else
                for (let i = 0; i < r.length; i++)
                    e[r[i]] = t + `/` + n
        }
    return e
}
)(),
je(Ae);
var fi = class extends Error {
    status;
    bootloaderMessage;
    constructor(e, t) {
        super(`Bootloader replied with ${e}: ${t}`),
        this.status = e,
        this.bootloaderMessage = t,
        this.name = `FastbootError`
    }
}
  , pi = class extends Error {
    constructor(e) {
        super(e),
        this.name = `ImageError`
    }
}
  , z = class extends Error {
    constructor(e) {
        super(e),
        this.name = `LpError`
    }
}
  , mi = class extends Error {
    timeout;
    constructor(e) {
        super(`Timeout of ${e} ms exceeded`),
        this.name = `TimeoutError`,
        this.timeout = e
    }
}
  , hi = class extends Error {
    constructor(e) {
        super(e),
        this.name = `UsbError`
    }
}
  , gi = 0
  , _i = console.log;
function B(...e) {
    gi >= 1 && _i(...e)
}
function vi(...e) {
    gi >= 2 && _i(...e)
}
function yi(e) {
    gi = e
}
function bi(e) {
    _i = e
}
function xi() {
    return new Promise(e => {
        window.requestAnimationFrame(e)
    }
    )
}
async function Si(e, t, n, r, i) {
    let a = new Date().getTime()
      , o = !1;
    e(t, n, 0);
    let s = (async () => {
        let i, s = a + r;
        do
            i = new Date().getTime(),
            e(t, n, (i - a) / r),
            await xi();
        while (!o && i < s)
    }
    )();
    await Promise.race([s, i]),
    o = !0,
    await s,
    await i,
    e(t, n, 1)
}
function Ci(e, t) {
    return new Promise( (n, r) => {
        let i = !1
          , a = setTimeout( () => {
            i = !0,
            r(new mi(t))
        }
        , t);
        e.then(e => {
            i || n(e)
        }
        ).catch(e => {
            i || r(e)
        }
        ).finally( () => {
            i || clearTimeout(a)
        }
        )
    }
    )
}
var wi = [`boot`, `dt`, `dtbo`, `init_boot`, `pvmfw`, `recovery`, `vbmeta_system`, `vbmeta_vendor`, `vbmeta`, `vendor_boot`, `vendor_kernel_boot`]
  , Ti = [`odm`, `odm_dlkm`, `product`, `system_dlkm`, `system_ext`, `system`, `vendor_dlkm`, `vendor`]
  , Ei = 4e3
  , Di = 16e3
  , Oi = 1e3;
async function ki(e, t, n, r, i=`current`) {
    B(`Unpacking ${r}`),
    n(`unpack`, r, 0);
    let a = await t.getData(new jn(`application/octet-stream`), {
        onprogress: (e, t) => {
            n(`unpack`, r, e / t)
        }
    });
    B(`Flashing ${r}`),
    n(`flash`, r, 0),
    await e.flashBlob(r, i, a, e => {
        n(`flash`, r, e)
    }
    )
}
async function Ai(e, t, n, r, i=`current`) {
    for (let a of r) {
        let r = RegExp(`${a}(?:-.+)?\\.img$`)
          , o = t.find(e => e.filename.match(r));
        o !== void 0 && await ki(e, o, n, a, i)
    }
}
async function ji(e, t) {
    for (let n of t.replace(`\r`, ``).split(`
`)) {
        let t = n.match(/^require\s+(.+?)=(.+)$/);
        if (!t)
            continue;
        let r = t[1];
        r === `board` && (r = `product`);
        let i = t[2]
          , a = i.split(`|`);
        if (r === `partition-exists`) {
            let t = await e.getVariable(`has-slot:${i}`);
            if (t !== `yes` && t !== `no`)
                throw new fi(`FAIL`,`Requirement ${r}=${i} failed, device lacks partition`);
            if (!wi.includes(i) && !Ti.includes(i))
                throw new fi(`FAIL`,`Requirement ${r}=${i} failed, unrecognized partition`)
        } else {
            let t = await e.getVariable(r);
            if (a.includes(t))
                B(`Requirement ${r}=${i} passed`);
            else {
                let e = `Requirement ${r}=${i} failed, value = ${t}`;
                throw B(e),
                new fi(`FAIL`,e)
            }
        }
    }
}
async function Mi(e, t, n) {
    try {
        await e.rebootSwitchSlot(t, !1)
    } catch {}
    await e.waitForConnect(n)
}
async function Ni(e, t, n, r, i= () => {}
) {
    i(`load`, `package`, 0);
    let a = (await new Pr(new An(t)).getEntries()).filter(e => !e.directory)
      , o = a.find(e => e.filename.endsWith(`avb_custom_key.img`));
    if (o === void 0)
        throw Error(`avb_custom_key.img not found! bootloader locking would fail.`);
    await e.getVariable(`is-userspace`) === `yes` && await e.reboot(`bootloader`, !0, r),
    await Ai(e, a, i, [`bootloader`], `other`),
    await Si(i, `reboot`, `device`, Ei, Mi(e, `bootloader`, r)),
    await Ai(e, a, i, [`bootloader`], `other`),
    await Si(i, `reboot`, `device`, Ei, Mi(e, `bootloader`, r)),
    await Ai(e, a, i, [`radio`], `other`),
    await Si(i, `reboot`, `device`, Ei, Mi(e, `bootloader`, r)),
    await Ai(e, a, i, [`radio`], `other`),
    await Si(i, `reboot`, `device`, Ei, Mi(e, `bootloader`, r));
    let s = await e.getVariable(`snapshot-update-status`);
    s !== null && s !== `none` && await e.runCommand(`snapshot-update:cancel`),
    B(`Loading nested images from zip`),
    i(`unpack`, `images`, 0);
    let c = a.find(e => e.filename.match(/image-.+\.zip$/))
      , l = (await new Pr(new An(await c.getData(new jn(`application/zip`), {
        onprogress: (e, t) => {
            i(`unpack`, `images`, e / t)
        }
    }))).getEntries()).filter(e => !e.directory);
    if (await e.runCommand(`erase:avb_custom_key`),
    await ki(e, o, i, `avb_custom_key`),
    c = l.find(e => e.filename === `android-info.txt`),
    c !== void 0 && await ji(e, await c.getData(new Mn)),
    await Ai(e, l, i, wi),
    c = l.find(e => e.filename === `super_empty.img`),
    c !== void 0) {
        await Si(i, `reboot`, `device`, Di, e.reboot(`fastboot`, !0, r));
        let t = await e.getVariable(`super-partition-name`);
        t ||= `super`;
        let a = n ? `wipe` : `flash`;
        i(a, `super`, 0);
        let o = await c.getData(new jn(`application/octet-stream`));
        await e.upload(t, await k(o), e => {
            i(a, `super`, e)
        }
        ),
        await e.runCommand(`update-super:${t}${n ? `:wipe` : ``}`)
    }
    await Ai(e, l, i, Ti),
    await e.getVariable(`is-userspace`) === `yes` && await Si(i, `reboot`, `device`, Ei, e.reboot(`bootloader`, !0, r)),
    n && await Si(i, `wipe`, `data`, Oi, e.runCommand(`erase:userdata`))
}
var Pi = 3978755898
  , Fi = 1
  , Ii = 0
  , Li = 12
  , Ri = 64 * 1024 * 1024
  , zi = class {
    blob;
    type;
    constructor(e=``) {
        this.type = e,
        this.blob = new Blob([],{
            type: this.type
        })
    }
    append(e) {
        this.blob = new Blob([this.blob, e],{
            type: this.type
        })
    }
    getBlob() {
        return this.blob
    }
}
;
function Bi(e) {
    let t = new DataView(e);
    if (t.getUint32(0, !0) !== Pi)
        return null;
    let n = t.getUint16(4, !0)
      , r = t.getUint16(6, !0);
    if (n !== Fi || r < Ii)
        throw new pi(`Unsupported sparse image version ${n}.${r}`);
    let i = t.getUint16(8, !0)
      , a = t.getUint16(10, !0);
    if (i !== 28 || a !== Li)
        throw new pi(`Invalid file header size ${i}, chunk header size ${a}`);
    let o = t.getUint32(12, !0);
    if (o % 4 != 0)
        throw new pi(`Block size ${o} is not a multiple of 4`);
    return {
        blockSize: o,
        blocks: t.getUint32(16, !0),
        chunks: t.getUint32(20, !0),
        crc32: t.getUint32(24, !0)
    }
}
function Vi(e) {
    let t = new DataView(e);
    return {
        type: t.getUint16(0, !0),
        blocks: t.getUint32(4, !0),
        dataBytes: t.getUint32(8, !0) - Li,
        data: null
    }
}
function Hi(e) {
    return e.map(e => e.blocks).reduce( (e, t) => e + t, 0)
}
function Ui(e) {
    return e.map(e => e.data.size).reduce( (e, t) => e + t, 0)
}
function Wi(e) {
    return 28 + Li * e.length + Ui(e)
}
async function Gi(e, t) {
    let n = new zi
      , r = new ArrayBuffer(28)
      , i = new DataView(r);
    i.setUint32(0, Pi, !0),
    i.setUint16(4, Fi, !0),
    i.setUint16(6, Ii, !0),
    i.setUint16(8, 28, !0),
    i.setUint16(10, Li, !0),
    i.setUint32(12, e.blockSize, !0),
    i.setUint32(16, e.blocks, !0),
    i.setUint32(20, t.length, !0),
    i.setUint32(24, 0, !0),
    n.append(new Blob([r]));
    for (let e of t) {
        r = new ArrayBuffer(Li + e.data.size),
        i = new DataView(r);
        let t = new Uint8Array(r);
        i.setUint16(0, e.type, !0),
        i.setUint16(2, 0, !0),
        i.setUint32(4, e.blocks, !0),
        i.setUint32(8, Li + e.data.size, !0);
        let a = new Uint8Array(await k(e.data));
        t.set(a, Li),
        n.append(new Blob([r]))
    }
    return n.getBlob()
}
async function Ki(e) {
    let t = {
        blockSize: 4096,
        blocks: e.size / 4096,
        chunks: 1,
        crc32: 0
    }
      , n = [];
    for (; e.size > 0; ) {
        let r = Math.min(e.size, Ri);
        n.push({
            type: 51905,
            blocks: r / t.blockSize,
            data: e.slice(0, r)
        }),
        e = e.slice(r)
    }
    return Gi(t, n)
}
async function *qi(e, t) {
    B(`Splitting ${e.size}-byte sparse image into ${t}-byte chunks`);
    let n = Math.floor(7 / 8 * t);
    if (e.size <= t) {
        B(`Blob fits in 1 payload, not splitting`),
        yield{
            data: await k(e),
            bytes: e.size
        };
        return
    }
    let r = Bi(await k(e.slice(0, 28)));
    if (r === null)
        throw new pi(`Blob is not a sparse image`);
    r.crc32 = 0,
    e = e.slice(28);
    let i = []
      , a = 0;
    for (let o = 0; o < r.chunks; o++) {
        let s = Vi(await k(e.slice(0, Li)));
        s.data = e.slice(Li, Li + s.dataBytes),
        e = e.slice(Li + s.dataBytes);
        let c = [];
        if (s.dataBytes > n) {
            B(`Data of chunk ${o} is bigger than the maximum allowed download size: ${s.dataBytes} > ${n}`);
            let e = s.dataBytes
              , t = s.data;
            for (; e > 0; ) {
                let i = Math.min(n, e);
                c.push({
                    type: s.type,
                    dataBytes: i,
                    data: t.slice(0, i),
                    blocks: i / r?.blockSize
                }),
                t = t.slice(i),
                e -= i
            }
            B(`chunksToProcess`, c)
        } else
            c.push(s);
        for (let e of c) {
            let n = t - Wi(i);
            if (vi(`  Chunk ${o}: type ${e.type}, ${e.dataBytes} bytes / ${e.blocks} blocks, ${n} bytes remaining`),
            n >= e.dataBytes)
                vi(`    Space is available, adding chunk`),
                i.push(e),
                a += e.blocks * r.blockSize;
            else {
                let t = Hi(i);
                i.push({
                    type: 51907,
                    blocks: r.blocks - t,
                    data: new Blob([]),
                    dataBytes: 0
                }),
                vi(`Partition is ${r.blocks} blocks, used ${t}, padded with ${r.blocks - t}, finishing split with ${Hi(i)} blocks`);
                let n = await Gi(r, i);
                B(`Finished ${n.size}-byte split with ${i.length} chunks`),
                yield{
                    data: await k(n),
                    bytes: a
                },
                vi(`Starting new split: skipping first ${t} blocks and adding chunk`),
                i = [{
                    type: 51907,
                    blocks: t,
                    data: new Blob([]),
                    dataBytes: 0
                }, e],
                a = e.dataBytes
            }
        }
    }
    if (i.length > 0 && (i.length > 1 || i[0].type !== 51907)) {
        let e = await Gi(r, i);
        B(`Finishing final ${e.size}-byte split with ${i.length} chunks`),
        yield{
            data: await k(e),
            bytes: a
        }
    }
}
var Ji = 1634485351
  , Yi = 1095520304
  , Xi = 512
  , Zi = 4096
  , Qi = 4096
  , $i = 10
  , ea = 2
  , ta = 1
  , na = 2
  , ra = 52
  , ia = 128
  , aa = 256
  , oa = 52
  , sa = 24
  , ca = 48
  , la = 64
  , ua = 1
  , da = 3
  , fa = 0;
function pa(e, t, n) {
    let r = [];
    for (let i = 0; i < n; i++) {
        let n = e.getUint8(t + i);
        if (n === 0)
            break;
        r.push(n)
    }
    return new TextDecoder().decode(new Uint8Array(r))
}
async function ma(e) {
    let t = await crypto.subtle.digest(`SHA-256`, e);
    return new Uint8Array(t)
}
function ha(e, t) {
    if (e.length !== t.length)
        return !1;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t[n])
            return !1;
    return !0
}
function ga(...e) {
    let t = e.reduce( (e, t) => e + t.byteLength, 0)
      , n = new Uint8Array(t)
      , r = 0;
    for (let t of e)
        n.set(new Uint8Array(t), r),
        r += t.byteLength;
    return n.buffer
}
function _a(e, t) {
    if (e.byteLength === t)
        return e;
    let n = new Uint8Array(t);
    return n.set(new Uint8Array(e.slice(0, Math.min(e.byteLength, t)))),
    n.buffer
}
async function va(e) {
    if (e.byteLength < ra)
        throw new z(`Geometry buffer too small`);
    let t = new DataView(e)
      , n = t.getUint32(0, !0);
    if (n !== Ji)
        throw new z(`Invalid geometry magic: 0x${n.toString(16)}`);
    let r = t.getUint32(4, !0);
    if (r > Zi)
        throw new z(`Geometry struct_size ${r} exceeds LP_METADATA_GEOMETRY_SIZE`);
    let i = new Uint8Array(e.slice(8, 40))
      , a = new Uint8Array(e.slice(0, r));
    if (a.fill(0, 8, 40),
    !ha(await ma(a.buffer), i))
        throw new z(`Geometry checksum mismatch`);
    let o = t.getUint32(40, !0)
      , s = t.getUint32(44, !0)
      , c = t.getUint32(48, !0);
    if (r !== ra)
        throw new z(`Geometry struct_size ${r} does not match expected ${ra}`);
    if (s === 0)
        throw new z(`Geometry has invalid slot count (0)`);
    if (o % Xi !== 0)
        throw new z(`Geometry metadata_max_size ${o} is not sector-aligned`);
    return {
        magic: n,
        structSize: r,
        checksum: i,
        metadataMaxSize: o,
        metadataSlotCount: s,
        logicalBlockSize: c
    }
}
function ya(e, t) {
    return {
        offset: e.getUint32(t + 0, !0),
        numEntries: e.getUint32(t + 4, !0),
        entrySize: e.getUint32(t + 8, !0)
    }
}
function ba(e, t) {
    if (t.offset > e.tablesSize)
        return !1;
    let n = t.numEntries * t.entrySize;
    return !(n < 0 || e.tablesSize - t.offset < n)
}
async function xa(e, t) {
    if (e.byteLength < ia)
        throw new z(`Header buffer too small`);
    let n = new DataView(e)
      , r = n.getUint32(0, !0);
    if (r !== Yi)
        throw new z(`Invalid header magic: 0x${r.toString(16)}`);
    let i = n.getUint16(4, !0)
      , a = n.getUint16(6, !0);
    if (i !== $i)
        throw new z(`Unsupported LP metadata major version: ${i}`);
    if (a > ea)
        throw new z(`Unsupported LP metadata minor version: ${a}`);
    let o = n.getUint32(8, !0);
    if (o !== (a < na ? ia : aa) || o > e.byteLength)
        throw new z(`Invalid header size: ${o}`);
    let s = new Uint8Array(e.slice(12, 44))
      , c = new Uint8Array(e.slice(0, o));
    if (c.fill(0, 12, 44),
    !ha(await ma(c.buffer), s))
        throw new z(`Header checksum mismatch`);
    let l = n.getUint32(44, !0)
      , u = new Uint8Array(e.slice(48, 80));
    if (t.byteLength < l)
        throw new z(`Tables buffer too small`);
    if (!ha(await ma(t.slice(0, l)), u))
        throw new z(`Tables checksum mismatch`);
    let d = ya(n, 80)
      , f = ya(n, 92)
      , p = ya(n, 104)
      , m = ya(n, 116);
    if (!ba({
        tablesSize: l
    }, d) || !ba({
        tablesSize: l
    }, f) || !ba({
        tablesSize: l
    }, p) || !ba({
        tablesSize: l
    }, m))
        throw new z(`Invalid table bounds in metadata header`);
    return {
        magic: r,
        majorVersion: i,
        minorVersion: a,
        headerSize: o,
        headerChecksum: s,
        tablesSize: l,
        tablesChecksum: u,
        partitions: d,
        extents: f,
        groups: p,
        blockDevices: m,
        flags: o >= aa ? n.getUint32(128, !0) : 0
    }
}
function Sa(e, t) {
    return {
        name: pa(e, t + 0, 36),
        attributes: e.getUint32(t + 36, !0),
        firstExtentIndex: e.getUint32(t + 40, !0),
        numExtents: e.getUint32(t + 44, !0),
        groupIndex: e.getUint32(t + 48, !0)
    }
}
function Ca(e, t) {
    return {
        numSectors: e.getBigUint64(t + 0, !0),
        targetType: e.getUint32(t + 8, !0),
        targetData: e.getBigUint64(t + 12, !0),
        targetSource: e.getUint32(t + 20, !0)
    }
}
function wa(e, t) {
    return {
        name: pa(e, t + 0, 36),
        flags: e.getUint32(t + 36, !0),
        maximumSize: e.getBigUint64(t + 40, !0)
    }
}
function Ta(e, t) {
    return {
        firstLogicalSector: e.getBigUint64(t + 0, !0),
        alignment: e.getUint32(t + 8, !0),
        alignmentOffset: e.getUint32(t + 12, !0),
        size: e.getBigUint64(t + 16, !0),
        partitionName: pa(e, t + 24, 36),
        flags: e.getUint32(t + 60, !0)
    }
}
function Ea(e, t, n, r) {
    if (t.entrySize !== n)
        throw new z(`Table entry size mismatch: expected ${n}, got ${t.entrySize}`);
    let i = t.numEntries * t.entrySize;
    if (t.offset > e.byteLength || i > e.byteLength - t.offset)
        throw new z(`Table descriptor points outside tables buffer`);
    let a = [];
    for (let n = 0; n < t.numEntries; n++) {
        let i = t.offset + n * t.entrySize;
        a.push(r(e, i))
    }
    return a
}
function Da(e, t, n, r, i, a) {
    let o = a[0];
    if (!o)
        throw new z(`Metadata does not specify a super block device`);
    let s = t.minorVersion >= ta ? 15 : da;
    for (let e of n) {
        if (e.attributes & ~s)
            throw new z(`Partition "${e.name}" has invalid attributes`);
        let t = e.firstExtentIndex + e.numExtents;
        if (t < e.firstExtentIndex || t > r.length)
            throw new z(`Partition "${e.name}" has invalid extent list`);
        if (e.groupIndex >= i.length)
            throw new z(`Partition "${e.name}" has invalid group index`)
    }
    for (let e of r)
        if (e.targetType === fa && e.targetSource >= a.length)
            throw new z(`Linear extent references invalid block device`);
    if (BigInt(Qi) + BigInt(Zi + e.metadataMaxSize * e.metadataSlotCount) * 2n > o.firstLogicalSector * BigInt(Xi))
        throw new z(`Metadata region overlaps with logical partition contents`)
}
async function Oa(e) {
    B(`Parsing LP metadata from ${e.size}-byte image`);
    let t = await va(await k(e.slice(0, 4096)));
    B(`LP geometry: maxSize=${t.metadataMaxSize}, slotCount=${t.metadataSlotCount}, blockSize=${t.logicalBlockSize}`);
    let n = Zi
      , r = await k(e.slice(n, 4224))
      , i = new DataView(r)
      , a = i.getUint32(8, !0)
      , o = i.getUint32(44, !0);
    if (o > t.metadataMaxSize)
        throw new z(`Metadata tables exceed geometry.metadata_max_size`);
    let s = await k(e.slice(n, n + a))
      , c = await k(e.slice(n + a, n + a + o))
      , l = await xa(s, c);
    B(`LP header: v${l.majorVersion}.${l.minorVersion}, headerSize=${l.headerSize}`);
    let u = new DataView(c)
      , d = Ea(u, l.partitions, oa, Sa)
      , f = Ea(u, l.extents, sa, Ca)
      , p = Ea(u, l.groups, ca, wa)
      , m = Ea(u, l.blockDevices, la, Ta);
    Da(t, l, d, f, p, m),
    B(`LP: ${d.length} partitions, ${m.length} block device(s)`);
    for (let e of m)
        B(`  block device "${e.partitionName}": size=${e.size}, flags=0x${e.flags.toString(16)}`);
    return {
        geometry: t,
        header: l,
        partitions: d,
        extents: f,
        groups: p,
        blockDevices: m
    }
}
function ka(e) {
    return e.blockDevices[0] ?? null
}
function Aa(e) {
    return e.partitionName
}
async function ja(e) {
    let t = new ArrayBuffer(ra)
      , n = new DataView(t);
    n.setUint32(0, e.magic, !0),
    n.setUint32(4, e.structSize, !0),
    n.setUint32(40, e.metadataMaxSize, !0),
    n.setUint32(44, e.metadataSlotCount, !0),
    n.setUint32(48, e.logicalBlockSize, !0);
    let r = await ma(t);
    return new Uint8Array(t).set(r, 8),
    _a(t, Zi)
}
function Ma(e, t, n) {
    e.setUint32(t + 0, n.offset, !0),
    e.setUint32(t + 4, n.numEntries, !0),
    e.setUint32(t + 8, n.entrySize, !0)
}
function Na(e, t, n, r) {
    let i = new TextEncoder().encode(n);
    for (let n = 0; n < r; n++)
        e.setUint8(t + n, n < i.length ? i[n] : 0)
}
function Pa(e) {
    let t = new ArrayBuffer(oa)
      , n = new DataView(t);
    return Na(n, 0, e.name, 36),
    n.setUint32(36, e.attributes, !0),
    n.setUint32(40, e.firstExtentIndex, !0),
    n.setUint32(44, e.numExtents, !0),
    n.setUint32(48, e.groupIndex, !0),
    t
}
function Fa(e) {
    let t = new ArrayBuffer(sa)
      , n = new DataView(t);
    return n.setBigUint64(0, e.numSectors, !0),
    n.setUint32(8, e.targetType, !0),
    n.setBigUint64(12, e.targetData, !0),
    n.setUint32(20, e.targetSource, !0),
    t
}
function Ia(e) {
    let t = new ArrayBuffer(ca)
      , n = new DataView(t);
    return Na(n, 0, e.name, 36),
    n.setUint32(36, e.flags, !0),
    n.setBigUint64(40, e.maximumSize, !0),
    t
}
function La(e) {
    let t = new ArrayBuffer(la)
      , n = new DataView(t);
    return n.setBigUint64(0, e.firstLogicalSector, !0),
    n.setUint32(8, e.alignment, !0),
    n.setUint32(12, e.alignmentOffset, !0),
    n.setBigUint64(16, e.size, !0),
    Na(n, 24, e.partitionName, 36),
    n.setUint32(60, e.flags, !0),
    t
}
async function Ra(e) {
    let {header: t} = e
      , n = e.partitions.map(Pa)
      , r = e.extents.map(Fa)
      , i = e.groups.map(Ia)
      , a = e.blockDevices.map(La)
      , o = ga(...n, ...r, ...i, ...a)
      , s = n.reduce( (e, t) => e + t.byteLength, 0)
      , c = s + r.reduce( (e, t) => e + t.byteLength, 0)
      , l = c + i.reduce( (e, t) => e + t.byteLength, 0)
      , u = await ma(o)
      , d = o.byteLength
      , f = t.minorVersion < na ? ia : aa
      , p = new ArrayBuffer(f)
      , m = new DataView(p);
    m.setUint32(0, Yi, !0),
    m.setUint16(4, t.majorVersion, !0),
    m.setUint16(6, t.minorVersion, !0),
    m.setUint32(8, f, !0),
    m.setUint32(44, d, !0),
    new Uint8Array(p).set(u, 48);
    let h = new DataView(p);
    Ma(h, 80, {
        offset: 0,
        numEntries: e.partitions.length,
        entrySize: oa
    }),
    Ma(h, 92, {
        offset: s,
        numEntries: e.extents.length,
        entrySize: sa
    }),
    Ma(h, 104, {
        offset: c,
        numEntries: e.groups.length,
        entrySize: ca
    }),
    Ma(h, 116, {
        offset: l,
        numEntries: e.blockDevices.length,
        entrySize: la
    }),
    f >= aa && m.setUint32(128, t.flags, !0);
    let g = await ma(p);
    return new Uint8Array(p).set(g, 12),
    ga(p, o)
}
async function za(e) {
    let {geometry: t} = e
      , n = t.logicalBlockSize;
    if (n % Xi !== 0)
        throw new z(`Block size ${n} must be a multiple of sector size ${Xi}`);
    if (Zi % n !== 0)
        throw new z(`Geometry size ${Zi} is not a multiple of block size ${n}`);
    if (Qi % n !== 0)
        throw new z(`Reserved size ${Qi} is not a multiple of block size ${n}`);
    if (t.metadataMaxSize % n !== 0)
        throw new z(`Metadata max size ${t.metadataMaxSize} must be a multiple of block size ${n}`);
    let[r,i] = await Promise.all([ja(t), Ra(e)])
      , a = _a(i, t.metadataMaxSize)
      , o = t.metadataSlotCount
      , s = ga(r, r, ...Array(o).fill(a), ...Array(o).fill(a))
      , c = s.byteLength / n
      , l = Qi / n
      , u = [];
    for (let t = 0; t < e.blockDevices.length; t++) {
        let r = e.blockDevices[t]
          , i = Aa(r)
          , a = !!(r.flags & ua);
        if (r.size % BigInt(n) !== 0n)
            throw new z(`Device "${i}" size ${r.size} is not a multiple of block size ${n}`);
        let o = Number(r.size) / n;
        if (o >= 4294967295)
            throw new z(`Device "${i}" is too large to encode with sparse format`);
        let d;
        if (t === 0) {
            let e = o - l - c;
            if (e < 0)
                throw new z(`Device "${i}" is too small to hold LP metadata`);
            d = await Gi({
                blockSize: n,
                blocks: o,
                chunks: 3,
                crc32: 0
            }, [{
                type: 51906,
                blocks: l,
                dataBytes: 4,
                data: new Blob([new Uint32Array([0]).buffer])
            }, {
                type: 51905,
                blocks: c,
                dataBytes: s.byteLength,
                data: new Blob([s])
            }, {
                type: 51907,
                blocks: e,
                dataBytes: 0,
                data: new Blob([])
            }])
        } else
            d = await Gi({
                blockSize: n,
                blocks: o,
                chunks: 1,
                crc32: 0
            }, [{
                type: 51907,
                blocks: o,
                dataBytes: 0,
                data: new Blob([])
            }]);
        let f = await k(d);
        B(`Generated ${f.byteLength}-byte sparse image for "${i}"`),
        u.push({
            partitionName: i,
            data: f,
            forceSlot: a
        })
    }
    return u
}
var Ba = 255
  , Va = 66
  , Ha = 3
  , Ua = 16384
  , Wa = 512 * 1024 * 1024
  , Ga = 1024 * 1024 * 1024
  , Ka = 1e4
  , qa = class {
    device;
    epIn;
    epOut;
    _registeredUsbListeners;
    _connectResolve;
    _connectReject;
    _disconnectResolve;
    constructor() {
        this.device = null,
        this.epIn = null,
        this.epOut = null,
        this._registeredUsbListeners = !1,
        this._connectResolve = null,
        this._connectReject = null,
        this._disconnectResolve = null
    }
    get isConnected() {
        return this.device !== null && this.device.opened && this.device.configurations[0].interfaces[0].claimed
    }
    async _validateAndConnectDevice() {
        if (this.device === null)
            throw new hi(`Attempted to connect to null device`);
        let e = this.device.configurations[0].interfaces[0].alternates[0];
        if (e.endpoints.length !== 2)
            throw new hi(`Interface has wrong number of endpoints`);
        this.epIn = null,
        this.epOut = null;
        for (let t of e.endpoints) {
            if (vi(`Checking endpoint: endpointNumber=${t.endpointNumber}, direction=${t.direction}, type=${t.type}, packetSize=${t.packetSize}`),
            t.type !== `bulk`)
                throw new hi(`Interface endpoint is not bulk`);
            if (t.direction === `in`)
                if (this.epIn === null)
                    this.epIn = t.endpointNumber;
                else
                    throw new hi(`Interface has multiple IN endpoints`);
            else if (t.direction === `out`)
                if (this.epOut === null)
                    this.epOut = t.endpointNumber;
                else
                    throw new hi(`Interface has multiple OUT endpoints`)
        }
        vi(`Endpoints: in=${this.epIn}, out=${this.epOut}`);
        try {
            await this.device.open(),
            await this.device.selectConfiguration(1),
            await this.device.claimInterface(0)
        } catch (e) {
            throw this._connectReject !== null && (this._connectReject(e),
            this._connectResolve = null,
            this._connectReject = null),
            e
        }
        this._connectResolve !== null && (this._connectResolve(void 0),
        this._connectResolve = null,
        this._connectReject = null)
    }
    async waitForDisconnect() {
        if (this.device !== null)
            return await new Promise(e => {
                this._disconnectResolve = e
            }
            )
    }
    async waitForConnect(e= () => {}
    ) {
        return navigator.userAgent.includes(`Android`) && (await this.waitForDisconnect(),
        e()),
        await new Promise( (e, t) => {
            this._connectResolve = e,
            this._connectReject = t
        }
        )
    }
    async connect() {
        this.device = await navigator.usb.requestDevice({
            filters: [{
                classCode: Ba,
                subclassCode: Va,
                protocolCode: Ha
            }]
        }),
        B(`Using USB device:`, this.device),
        this._registeredUsbListeners ||= (navigator.usb.addEventListener(`disconnect`, e => {
            e.device === this.device && (B(`USB device disconnected`),
            this._disconnectResolve !== null && (this._disconnectResolve(void 0),
            this._disconnectResolve = null))
        }
        ),
        navigator.usb.addEventListener(`connect`, async e => {
            B(`USB device connected`),
            this.device = e.device;
            let t = this._connectReject !== null;
            try {
                await this._validateAndConnectDevice()
            } catch (e) {
                if (!t)
                    throw e
            }
        }
        ),
        !0),
        await this._validateAndConnectDevice()
    }
    async _readResponse() {
        let e = {
            text: ``
        }, t;
        do {
            let n = await this.device.transferIn(this.epIn, 64)
              , r = new TextDecoder().decode(n.data);
            t = r.substring(0, 4);
            let i = r.substring(4);
            if (B(`Response: ${t} ${i}`),
            t === `OKAY`)
                e.text += i;
            else if (t === `INFO`)
                e.text += i + `
`;
            else if (t === `DATA`)
                e.dataSize = i;
            else
                throw new fi(t,i)
        } while (t === `INFO`);
        return e
    }
    async runCommand(e) {
        if (e.length > 64)
            throw RangeError();
        let t = new TextEncoder().encode(e);
        return await this.device.transferOut(this.epOut, t),
        B(`Command:`, e),
        this._readResponse()
    }
    async getVariable(e) {
        let t;
        try {
            t = (await Ci(this.runCommand(`getvar:${e}`), Ka)).text
        } catch (e) {
            if (e instanceof fi && e.status == `FAIL`)
                t = null;
            else
                throw e
        }
        return t ? t.trim() : null
    }
    async _getDownloadSize() {
        try {
            let e = (await this.getVariable(`max-download-size`)).toLowerCase();
            if (e) {
                let t = e.startsWith(`0x`) ? 16 : e.startsWith(`0`) ? 8 : 10;
                return Math.min(parseInt(e, t), Ga)
            }
        } catch {}
        return Wa
    }
    async _sendRawPayload(e, t) {
        let n = 0
          , r = e.byteLength;
        for (; r > 0; ) {
            let i = e.slice(n * Ua, (n + 1) * Ua);
            n % 1e3 == 0 && vi(`  Sending ${i.byteLength} bytes to endpoint, ${r} remaining, i=${n}`),
            n % 10 == 0 && t((e.byteLength - r) / e.byteLength),
            await this.device.transferOut(this.epOut, i),
            r -= i.byteLength,
            n += 1
        }
        t(1)
    }
    async upload(e, t, n= () => {}
    ) {
        B(`Uploading single sparse to ${e}: ${t.byteLength} bytes`);
        let r = t.byteLength.toString(16).padStart(8, `0`);
        if (r.length !== 8)
            throw new fi(`FAIL`,`Transfer size overflow: ${r} is more than 8 digits`);
        let i = await this.runCommand(`download:${r}`);
        if (i.dataSize === void 0)
            throw new fi(`FAIL`,`Unexpected response to download command: ${i.text}`);
        let a = parseInt(i.dataSize, 16);
        if (a !== t.byteLength)
            throw new fi(`FAIL`,`Bootloader wants ${a} bytes, requested to send ${t.byteLength} bytes`);
        B(`Sending payload: ${t.byteLength} bytes`),
        await this._sendRawPayload(t, n),
        B(`Payload sent, waiting for response...`),
        await this._readResponse()
    }
    async reboot(e=``, t=!1, n= () => {}
    ) {
        e.length > 0 ? await this.runCommand(`reboot-${e}`) : await this.runCommand(`reboot`),
        t && await this.waitForConnect(n)
    }
    async rebootSwitchSlot(e=``, t=!1, n= () => {}
    ) {
        let r = await this.getOtherSlot();
        await this.runCommand(`set_active:${r}`),
        e.length > 0 ? await this.runCommand(`reboot-${e}`) : await this.runCommand(`reboot`),
        t && await this.waitForConnect(n)
    }
    async flashBlob(e, t=`current`, n, r= () => {}
    ) {
        if (await this.getVariable(`has-slot:${e}`) === `yes`) {
            let n = await this.getSlot();
            if (t === `current`)
                e += `_` + n;
            else if (t === `other`) {
                let t = await this.getOtherSlot();
                e += `_` + t
            } else if (t === `a` || t === `b`)
                e += `_` + t;
            else
                throw new fi(`FAIL`,`Unknown Slot: ${t}`)
        }
        B(`Flashing partition ${e}`);
        let i = await this._getDownloadSize()
          , a = await k(n.slice(0, 28))
          , o = n.size
          , s = !1;
        try {
            let e = Bi(a);
            e !== null && (o = e.blocks * e.blockSize,
            s = !0)
        } catch {}
        await this.getVariable(`is-logical:${e}`) === `yes` && (await this.runCommand(`resize-logical-partition:${e}:0`),
        await this.runCommand(`resize-logical-partition:${e}:${o}`)),
        n.size > i && !s && (B(`${e} image is raw, converting to sparse`),
        n = await Ki(n)),
        B(`Flashing ${n.size} bytes to ${e}, ${i} bytes per split`);
        let c = 0
          , l = 0;
        for await(let t of qi(n, i))
            await this.upload(e, t.data, e => {
                r((l + e * t.bytes) / o)
            }
            ),
            B(`Flashing payload...`),
            await this.runCommand(`flash:${e}`),
            c += 1,
            l += t.bytes;
        B(`Flashed ${e} with ${c} split(s)`)
    }
    async bootBlob(e, t= () => {}
    ) {
        B(`Booting ${e.size} bytes image`);
        let n = await k(e);
        await this.upload(`boot.img`, n, t),
        B(`Booting payload...`),
        await this.runCommand(`boot`),
        B(`Booted ${e.size} bytes image`)
    }
    async flashFactoryZip(e, t, n, r= () => {}
    ) {
        return await Ni(this, e, t, n, r)
    }
    async wipeSuper(e, t=`current`, n= () => {}
    ) {
        let r = await Oa(e)
          , i = t;
        t === `current` ? i = await this.getSlot() ?? `a` : t === `other` && (i = await this.getOtherSlot()),
        B(`Targeting slot "${i}"`);
        let a = await za(r)
          , o = ka(r);
        if (o !== null && Aa(o) !== `super`)
            try {
                await this.runCommand(`oem allow-flash-super`)
            } catch {}
        for (let e of a) {
            let t = e.partitionName;
            await this.getVariable(`has-slot:${e.partitionName}`) === `yes` ? t = `${e.partitionName}_${i}` : e.forceSlot && B(`Warning: ${e.partitionName} does not support slots but slot suffix was requested`),
            B(`Flashing ${e.data.byteLength} bytes to "${t}"`),
            await this.upload(t, e.data, n),
            await this.runCommand(`flash:${t}`)
        }
    }
    async getSlot() {
        return (await this.getVariable(`current-slot`))?.slice(-1)
    }
    async getOtherSlot() {
        let e = await this.getSlot();
        if (e === `a`)
            return `b`;
        if (e === `b`)
            return `a`;
        throw new fi(`FAIL`,`Unable to determine other slot, current slot: ${e}`)
    }
}
  , Ja = {
    class: `order-1 flex-none grow-0 self-stretch`
}
  , Ya = [`placeholder`, `disabled`]
  , Xa = {
    class: `mb-4 justify-center`
}
  , Za = {
    class: `flex flex-wrap`
}
  , Qa = {
    class: `mb-4 w-full text-center`
}
  , $a = {
    key: 0
}
  , eo = {
    key: 1
}
  , to = {
    key: 2
}
  , no = l({
    name: `FastbootView`,
    __name: `FastbootClient`,
    props: {
        appendLog: {
            type: Function
        },
        clearLog: {
            type: Function
        },
        active: {
            type: Boolean
        }
    },
    setup(t) {
        let n = g(!1)
          , i = g(null)
          , s = g(!1)
          , c = g(``)
          , l = g(`idle`)
          , d = g(``)
          , h = g(!1)
          , b = g(null)
          , x = _( () => l.value === `flash` || l.value === `variable` || l.value === `set-active` || l.value === `reboot` || l.value === `run-command`)
          , S = _( () => l.value === `awaiting-boot` || l.value === `awaiting-flash` || l.value === `awaiting-wipe-super`)
          , ie = _( () => {
            switch (l.value) {
            case `flash`:
                return `Partition name (e.g. boot)`;
            case `variable`:
                return `Variable name (e.g. version-bootloader)`;
            case `set-active`:
                return `Slot (a or b)`;
            case `reboot`:
                return `Reboot target (e.g. recovery)`;
            case `run-command`:
                return `Command (e.g. flashing unlock, oem unlock)`;
            case `awaiting-boot`:
                return `Drop boot image here, or click to browse...`;
            case `awaiting-flash`:
                return `Drop image for partition "${c.value}" here, or click to browse...`;
            case `awaiting-wipe-super`:
                return `Drop super_empty image here, or click to browse...`;
            default:
                return `Click an action below`
            }
        }
        )
          , ae = _( () => {
            let e = b.value;
            switch (e?.kind) {
            case `boot`:
                return `Boot ${e.file.name}?`;
            case `flash`:
                return `Flash ${e.file.name} to partition ${e.partition}?`;
            case `wipe-super`:
                return `Wipe super using ${e.file.name}?`;
            default:
                return ``
            }
        }
        )
          , D = _( () => {
            switch (b.value?.kind) {
            case `boot`:
                return `Boot`;
            case `flash`:
                return `Flash`;
            case `wipe-super`:
                return `Wipe super`;
            default:
                return `Confirm`
            }
        }
        )
          , oe = e(`bootImageInput`)
          , O = e(`flashImageInput`)
          , k = e(`wipeSuperInput`)
          , A = e(`inputRef`)
          , ce = t;
        a( () => {
            i.value = new qa,
            yi(2),
            bi( (...e) => {
                console.log(...e),
                ce.appendLog([...e].join(` `))
            }
            )
        }
        ),
        o( () => {
            n.value = !1,
            i.value = null,
            c.value = ``
        }
        );
        async function le() {
            try {
                await i.value?.connect(),
                ce.clearLog(),
                n.value = !0,
                i.value?.waitForDisconnect().then( () => {
                    n.value = !1,
                    l.value = `idle`
                }
                ),
                await i.value?.getVariable(`product`),
                await i.value?.getVariable(`serialno`),
                s.value = (await i.value?.getSlot())?.length === 1
            } catch (e) {
                console.log(e)
            }
        }
        function ue() {
            l.value = `awaiting-boot`
        }
        function de(e) {
            let t = e?.currentTarget;
            if (!t)
                return;
            let n = t.files?.[0];
            t.value = ``,
            n && ke({
                kind: `boot`,
                file: n
            })
        }
        async function fe() {
            let e = b.value;
            e?.kind === `boot` && (b.value = null,
            l.value = `idle`,
            await i.value?.bootBlob(e.file))
        }
        function pe() {
            l.value = `flash`,
            d.value = ``,
            v( () => A.value?.focus())
        }
        function me() {
            let e = d.value.trim();
            e && (c.value = e,
            d.value = ``,
            l.value = `awaiting-flash`)
        }
        function he(e) {
            let t = e?.currentTarget;
            if (!t)
                return;
            let n = t.files?.[0];
            t.value = ``,
            !(!n || !c.value) && ke({
                kind: `flash`,
                file: n,
                partition: c.value
            })
        }
        async function ge() {
            let e = b.value;
            e?.kind === `flash` && (b.value = null,
            c.value = ``,
            l.value = `idle`,
            await i.value?.flashBlob(e.partition, `current`, e.file))
        }
        function _e() {
            l.value = `awaiting-wipe-super`
        }
        function ve(e) {
            let t = e?.currentTarget;
            if (!t)
                return;
            let n = t.files?.[0];
            t.value = ``,
            n && ke({
                kind: `wipe-super`,
                file: n
            })
        }
        async function ye() {
            let e = b.value;
            e?.kind === `wipe-super` && (b.value = null,
            l.value = `idle`,
            await i.value?.wipeSuper(e.file, `current`))
        }
        function be() {
            l.value = `variable`,
            d.value = ``,
            v( () => A.value?.focus())
        }
        async function xe() {
            let e = d.value.trim();
            e && (l.value = `idle`,
            d.value = ``,
            await i.value?.getVariable(e))
        }
        function Se() {
            l.value = `set-active`,
            d.value = ``,
            v( () => A.value?.focus())
        }
        async function Ce() {
            let e = d.value.trim();
            e !== `a` && e !== `b` || (l.value = `idle`,
            d.value = ``,
            await i.value?.runCommand(`set_active:${e}`))
        }
        function we() {
            l.value = `reboot`,
            d.value = ``,
            v( () => A.value?.focus())
        }
        async function Te() {
            let e = d.value.trim();
            if (l.value = `idle`,
            d.value = ``,
            e === `~recovery`) {
                await i.value?.flashBlob(`misc`, `current`, new Blob([`boot-recovery`])),
                await i.value?.reboot();
                return
            }
            await i.value?.reboot(e)
        }
        function Ee() {
            l.value = `run-command`,
            d.value = ``,
            v( () => A.value?.focus())
        }
        async function De() {
            let e = d.value.trim();
            e && (e = e.replace(/^fastboot\s+/i, ``),
            e && (l.value = `idle`,
            d.value = ``,
            await i.value?.runCommand(e)))
        }
        async function Oe() {
            switch (l.value) {
            case `flash`:
                me();
                break;
            case `variable`:
                await xe();
                break;
            case `set-active`:
                await Ce();
                break;
            case `reboot`:
                await Te();
                break;
            case `run-command`:
                await De();
                break
            }
        }
        function ke(e) {
            b.value = e
        }
        function Ae() {
            b.value = null,
            l.value = `idle`
        }
        async function j() {
            switch (b.value?.kind) {
            case `boot`:
                await fe();
                break;
            case `flash`:
                await ge();
                break;
            case `wipe-super`:
                await ye();
                break
            }
        }
        function je() {
            switch (l.value) {
            case `awaiting-boot`:
                oe.value?.click();
                break;
            case `awaiting-flash`:
                O.value?.click();
                break;
            case `awaiting-wipe-super`:
                k.value?.click();
                break
            }
        }
        function Me() {
            h.value = !0
        }
        function Ne() {
            h.value = !1
        }
        function Pe(e) {
            if (h.value = !1,
            !S.value)
                return;
            let t = e.dataTransfer?.files?.[0];
            if (t)
                switch (l.value) {
                case `awaiting-boot`:
                    ke({
                        kind: `boot`,
                        file: t
                    });
                    break;
                case `awaiting-flash`:
                    ke({
                        kind: `flash`,
                        file: t,
                        partition: c.value
                    });
                    break;
                case `awaiting-wipe-super`:
                    ke({
                        kind: `wipe-super`,
                        file: t
                    });
                    break
                }
        }
        return (e, i) => (r(),
        m(`div`, Ja, [(r(),
        C(y, {
            to: `#fastboot-input-footer`,
            defer: ``,
            disabled: !t.active
        }, [f(p(`div`, {
            class: ee([`flex items-center border-t border-black/10 bg-gray-200 px-6 transition-colors md:px-4 dark:border-white/10 dark:bg-black`, {
                "bg-brand-primary/10! dark:bg-brand-primary/10!": h.value,
                "cursor-pointer": S.value
            }]),
            onDragover: E(Me, [`prevent`]),
            onDragleave: E(Ne, [`prevent`]),
            onDrop: E(Pe, [`prevent`]),
            onClick: je
        }, [p(`span`, {
            class: ee([`font-mono select-none`, l.value === `idle` ? `text-black/25 dark:text-white/25` : `text-black/85 dark:text-white/85`])
        }, `$`, 2), f(p(`input`, {
            ref_key: `inputRef`,
            ref: A,
            "onUpdate:modelValue": i[0] ||= e => d.value = e,
            class: ee([`w-full bg-transparent p-2 font-mono outline-none`, x.value ? `text-black/85 dark:text-white/85` : `pointer-events-none text-black/40 dark:text-white/40`]),
            type: `text`,
            placeholder: ie.value,
            disabled: !x.value,
            onKeyup: [ne(Oe, [`enter`]), i[1] ||= ne(e => l.value = `idle`, [`esc`])]
        }, null, 42, Ya), [[re, d.value]])], 34), [[T, n.value]])], 8, [`disabled`])), f(p(`div`, Xa, [p(`div`, Za, [p(`button`, {
            class: `btn mr-3 mb-3 px-4 py-1`,
            onClick: ue
        }, `Boot image`), p(`button`, {
            class: `btn mr-3 mb-3 px-4 py-1`,
            onClick: pe
        }, `Flash image`), p(`button`, {
            class: `btn mr-3 mb-3 px-4 py-1`,
            onClick: _e
        }, `Wipe super`), p(`button`, {
            class: `btn mr-3 mb-3 px-4 py-1`,
            onClick: be
        }, `Get variable`), f(p(`button`, {
            class: `btn mr-3 mb-3 px-4 py-1`,
            onClick: Se
        }, ` Set active slot `, 512), [[T, s.value]]), p(`button`, {
            class: `btn mr-3 mb-3 px-4 py-1`,
            onClick: we
        }, `Reboot`), p(`button`, {
            class: `btn mr-3 mb-3 px-4 py-1`,
            onClick: Ee
        }, `Run command`)]), p(`input`, {
            ref_key: `bootImageInput`,
            ref: oe,
            class: `hidden`,
            type: `file`,
            onChange: de
        }, null, 544), p(`input`, {
            ref_key: `flashImageInput`,
            ref: O,
            class: `hidden`,
            type: `file`,
            onChange: he
        }, null, 544), p(`input`, {
            ref_key: `wipeSuperInput`,
            ref: k,
            class: `hidden`,
            type: `file`,
            onChange: ve
        }, null, 544)], 512), [[T, n.value]]), f(p(`div`, Qa, [p(`button`, {
            class: `btn btn-primary mx-auto px-4 py-1`,
            onClick: le
        }, `Connect`), i[2] ||= p(`div`, {
            class: `mt-3 flex justify-center text-sm`
        }, `Reboot to fastboot before connecting.`, -1)], 512), [[T, !n.value]]), w(se, {
            open: b.value !== null,
            title: ae.value,
            "confirm-label": D.value,
            onCancel: Ae,
            onConfirm: j
        }, {
            default: u( () => [b.value?.kind === `flash` ? (r(),
            m(`p`, $a, `This will overwrite the current partition contents.`)) : b.value?.kind === `wipe-super` ? (r(),
            m(`p`, eo, `All dynamic partitions will be erased.`)) : b.value?.kind === `boot` ? (r(),
            m(`p`, to, `No partitions are modified.`)) : te(``, !0)]),
            _: 1
        }, 8, [`open`, `title`, `confirm-label`])]))
    }
})
  , V = class {
    #e;
    get promise() {
        return this.#e
    }
    #t;
    #n;
    #r = `running`;
    get state() {
        return this.#r
    }
    constructor() {
        this.#e = new Promise( (e, t) => {
            this.#t = e,
            this.#n = t
        }
        )
    }
    resolve = e => {
        this.#t(e),
        this.#r = `resolved`
    }
    ;
    reject = e => {
        this.#n(e),
        this.#r = `rejected`
    }
}
  , ro = class {
    nextId;
    pendingResolvers = new Map;
    constructor(e=0) {
        this.nextId = e
    }
    add() {
        let e = this.nextId++
          , t = new V;
        return this.pendingResolvers.set(e, t),
        [e, t.promise]
    }
    getResolver(e) {
        if (!this.pendingResolvers.has(e))
            return null;
        let t = this.pendingResolvers.get(e);
        return this.pendingResolvers.delete(e),
        t
    }
    resolve(e, t) {
        let n = this.getResolver(e);
        return n === null ? !1 : (n.resolve(t),
        !0)
    }
    reject(e, t) {
        let n = this.getResolver(e);
        return n === null ? !1 : (n.reject(t),
        !0)
    }
}
;
function io(e) {
    return new Promise(t => {
        globalThis.setTimeout( () => t(), e)
    }
    )
}
function ao(e) {
    return typeof e == `object` && !!e && `then`in e
}
function oo(e, t) {
    for (; ; ) {
        let {done: n, value: r} = e.next(t);
        if (n)
            return r;
        if (ao(r))
            return r.then(t => oo(e, {
                resolved: t
            }), t => oo(e, {
                error: t
            }));
        t = r
    }
}
function so(e, t) {
    function n(...t) {
        return oo(e.call(this, function*(e) {
            if (ao(e)) {
                let t = yield e;
                if (`resolved`in t)
                    return t.resolved;
                throw t.error
            }
            return e
        }, ...t), void 0)
    }
    return t ? n.bind(t) : n
}
function co(e) {
    return (t, n) => {
        if (`buffer`in n) {
            let r = e(t, n);
            return n.buffer.set(r, n.index),
            r.length
        } else
            return e(t, n)
    }
}
function lo(e, t) {
    return (n, r) => {
        if (`buffer`in r)
            return r.index ??= 0,
            t(n, r),
            e;
        {
            let i = new Uint8Array(e);
            return t(n, {
                buffer: i,
                index: 0,
                littleEndian: r.littleEndian
            }),
            i
        }
    }
}
function uo(e, t, n, r, i) {
    let a = {
        size: e,
        type: t,
        serialize: t === "default" ? co(n) : lo(e, n),
        deserialize: so(r),
        omitInit: i?.omitInit
    };
    return i?.init && (a.init = i.init),
    a
}
var fo = uo
  , H = new Uint8Array;
function po(e, t, n, r) {
    t.length < r ? (e.set(t, n),
    e.fill(0, n + t.length, n + r)) : t.length === r ? e.set(t, n) : e.set(t.subarray(0, r), n)
}
function mo(e, t) {
    if (typeof e == `number`) {
        let n, r, i;
        return e === 0 ? (n = () => {}
        ,
        r = t ? function*() {
            return t.convert(H)
        }
        : function*() {
            return H
        }
        ) : (n = (t, {buffer: n, index: r}) => po(n, t, r, e),
        t ? (r = function*(n, r) {
            let i = r.readExactly(e);
            return t.convert(yield*n(i))
        }
        ,
        i = e => t.back(e)) : r = function*(t, n) {
            return n.readExactly(e)
        }
        ),
        fo(e, `byob`, n, r, {
            init: i
        })
    }
    if ((typeof e == `object` || typeof e == `function`) && `serialize`in e) {
        let n, r;
        return t ? (n = function*(n, r, i) {
            let a = yield*n(e.deserialize(r, i))
              , o = a === 0 ? H : r.readExactly(a);
            return t.convert(yield*n(o))
        }
        ,
        r = e => t.back(e)) : n = function*(t, n, r) {
            let i = yield*t(e.deserialize(n, r));
            return i === 0 ? H : n.readExactly(i)
        }
        ,
        fo(e.size, `default`, (t, {littleEndian: n}) => {
            if (e.type === "default") {
                let r = e.serialize(t.length, {
                    littleEndian: n
                });
                if (t.length === 0)
                    return r;
                let i = new Uint8Array(r.length + t.length);
                return i.set(r, 0),
                i.set(t, r.length),
                i
            } else {
                let r = new Uint8Array(e.size + t.length);
                return e.serialize(t.length, {
                    buffer: r,
                    index: 0,
                    littleEndian: n
                }),
                r.set(t, e.size),
                r
            }
        }
        , n, {
            init: r
        })
    }
    if (typeof e == `string`) {
        let n, r;
        return t ? (n = function*(n, r, {dependencies: i}) {
            let a = i[e]
              , o = a === 0 ? H : r.readExactly(a);
            return t.convert(yield*n(o))
        }
        ,
        r = (n, r) => {
            let i = t.back(n);
            return r[e] = i.length,
            i
        }
        ) : (n = function*(t, n, {dependencies: r}) {
            let i = r[e];
            return i === 0 ? H : n.readExactly(i)
        }
        ,
        r = (t, n) => {
            let r = t;
            return n[e] = r.length,
            r
        }
        ),
        fo(0, `default`, e => e, n, {
            init: r
        })
    }
    let n, r;
    return t ? (n = function*(n, r, {dependencies: i}) {
        let a = i[e.field]
          , o = e.convert(a)
          , s = o === 0 ? H : r.readExactly(o);
        return t.convert(yield*n(s))
    }
    ,
    r = (n, r) => {
        let i = t.back(n);
        return r[e.field] = e.back(i.length),
        i
    }
    ) : (n = function*(t, n, {dependencies: r}) {
        let i = r[e.field]
          , a = e.convert(i);
        return a === 0 ? H : n.readExactly(a)
    }
    ,
    r = (t, n) => {
        let r = t;
        return n[e.field] = e.back(r.length),
        r
    }
    ),
    fo(0, `default`, e => e, n, {
        init: r
    })
}
var ho = class extends Error {
    constructor() {
        super(`ExactReadable ended`)
    }
}
  , go = class {
    #e;
    #t;
    get position() {
        return this.#t
    }
    constructor(e) {
        this.#e = e,
        this.#t = 0
    }
    readExactly(e) {
        if (this.#t + e > this.#e.length)
            throw new ho;
        let t = this.#e.subarray(this.#t, this.#t + e);
        return this.#t += e,
        t
    }
}
  , _o = class extends Error {
    constructor(e) {
        super(e)
    }
}
  , vo = class extends _o {
    constructor() {
        super(`The underlying readable was ended before the struct was fully deserialized`)
    }
}
  , yo = class extends _o {
    constructor() {
        super(`The underlying readable doesn't contain any more struct`)
    }
}
;
function U(e, t) {
    let n = Object.entries(e)
      , r = 0
      , i = !0;
    for (let[,e] of n)
        r += e.size,
        i && e.type !== `byob` && (i = !1);
    let a = t.littleEndian
      , o = t.extra ? Object.getOwnPropertyDescriptors(t.extra) : void 0;
    return {
        littleEndian: a,
        fields: e,
        extra: t.extra,
        type: i ? `byob` : `default`,
        size: r,
        serialize(e, t) {
            let r = {
                ...e
            };
            for (let[e,t] of n)
                e in r && `init`in t && (r[e] = t.init?.(r[e], r));
            let i = Array(n.length)
              , o = Array(n.length);
            {
                let e = {
                    littleEndian: a
                };
                for (let[t,[a,s]] of n.entries())
                    s.type === `byob` ? i[t] = s.size : (o[t] = s.serialize(r[a], e),
                    i[t] = o[t].length)
            }
            let s = i.reduce( (e, t) => e + t, 0), c, l, u;
            if (t instanceof Uint8Array) {
                if (t.length < s)
                    throw Error(`Buffer too small`);
                c = !0,
                l = t,
                u = 0
            } else if (typeof t == `object` && `buffer`in t) {
                if (c = !0,
                l = t.buffer,
                u = t.index ?? 0,
                l.length - u < s)
                    throw Error(`Buffer too small`)
            } else
                c = !1,
                l = new Uint8Array(s),
                u = 0;
            let d = {
                buffer: l,
                index: u,
                littleEndian: a
            };
            for (let[e,[t,a]] of n.entries())
                o[e] ? l.set(o[e], d.index) : a.serialize(r[t], d),
                d.index += i[e];
            return c ? s : l
        },
        deserialize: so(function*(e, r) {
            let i = r.position
              , s = {}
              , c = {
                dependencies: s,
                littleEndian: a
            };
            try {
                for (let[t,i] of n)
                    s[t] = yield*e(i.deserialize(r, c))
            } catch (e) {
                throw e instanceof ho ? r.position === i ? new yo : new vo : e
            }
            return o && Object.defineProperties(s, o),
            t.postDeserialize ? t.postDeserialize.call(s, s) : s
        })
    }
}
function bo(e, t, n) {
    return U(Object.assign({}, e.fields, t), {
        littleEndian: n?.littleEndian ?? e.littleEndian,
        extra: e.extra,
        postDeserialize: n?.postDeserialize
    })
}
function xo(e, t, n) {
    return n ? e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24 : e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
}
function So(e, t, n, r) {
    r ? (e[t] = n,
    e[t + 1] = n >> 8,
    e[t + 2] = n >> 16,
    e[t + 3] = n >> 24) : (e[t] = n >> 24,
    e[t + 1] = n >> 16,
    e[t + 2] = n >> 8,
    e[t + 3] = n)
}
function Co(e, t, n) {
    e[t] = Number(n & 255n),
    e[t + 1] = Number(n >> 8n & 255n),
    e[t + 2] = Number(n >> 16n & 255n),
    e[t + 3] = Number(n >> 24n & 255n),
    e[t + 4] = Number(n >> 32n & 255n),
    e[t + 5] = Number(n >> 40n & 255n),
    e[t + 6] = Number(n >> 48n & 255n),
    e[t + 7] = Number(n >> 56n & 255n)
}
function wo(e, t, n) {
    e[t] = Number(n >> 56n & 255n),
    e[t + 1] = Number(n >> 48n & 255n),
    e[t + 2] = Number(n >> 40n & 255n),
    e[t + 3] = Number(n >> 32n & 255n),
    e[t + 4] = Number(n >> 24n & 255n),
    e[t + 5] = Number(n >> 16n & 255n),
    e[t + 6] = Number(n >> 8n & 255n),
    e[t + 7] = Number(n & 255n)
}
function To(e, t) {
    return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
}
function Eo(e, t, n) {
    return n ? (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0 : (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
}
function Do(e, t, n) {
    e[t] = n,
    e[t + 1] = n >> 8,
    e[t + 2] = n >> 16,
    e[t + 3] = n >> 24
}
function Oo(e, t, n, r) {
    r ? (e[t] = n,
    e[t + 1] = n >> 8,
    e[t + 2] = n >> 16,
    e[t + 3] = n >> 24) : (e[t] = n >> 24,
    e[t + 1] = n >> 16,
    e[t + 2] = n >> 8,
    e[t + 3] = n)
}
function ko(e, t) {
    return BigInt(e[t]) << 56n | BigInt(e[t + 1]) << 48n | BigInt(e[t + 2]) << 40n | BigInt(e[t + 3]) << 32n | BigInt(e[t + 4]) << 24n | BigInt(e[t + 5]) << 16n | BigInt(e[t + 6]) << 8n | BigInt(e[t + 7])
}
function Ao(e, t, n) {
    return n ? BigInt(e[t]) | BigInt(e[t + 1]) << 8n | BigInt(e[t + 2]) << 16n | BigInt(e[t + 3]) << 24n | BigInt(e[t + 4]) << 32n | BigInt(e[t + 5]) << 40n | BigInt(e[t + 6]) << 48n | BigInt(e[t + 7]) << 56n : BigInt(e[t]) << 56n | BigInt(e[t + 1]) << 48n | BigInt(e[t + 2]) << 40n | BigInt(e[t + 3]) << 32n | BigInt(e[t + 4]) << 24n | BigInt(e[t + 5]) << 16n | BigInt(e[t + 6]) << 8n | BigInt(e[t + 7])
}
function jo(e, t, n, r) {
    r ? (e[t] = Number(n & 255n),
    e[t + 1] = Number(n >> 8n & 255n),
    e[t + 2] = Number(n >> 16n & 255n),
    e[t + 3] = Number(n >> 24n & 255n),
    e[t + 4] = Number(n >> 32n & 255n),
    e[t + 5] = Number(n >> 40n & 255n),
    e[t + 6] = Number(n >> 48n & 255n),
    e[t + 7] = Number(n >> 56n & 255n)) : (e[t] = Number(n >> 56n & 255n),
    e[t + 1] = Number(n >> 48n & 255n),
    e[t + 2] = Number(n >> 40n & 255n),
    e[t + 3] = Number(n >> 32n & 255n),
    e[t + 4] = Number(n >> 24n & 255n),
    e[t + 5] = Number(n >> 16n & 255n),
    e[t + 6] = Number(n >> 8n & 255n),
    e[t + 7] = Number(n & 255n))
}
function Mo(e, t, n) {
    let r = ( () => r);
    return Object.assign(r, fo(e, `byob`, t, n)),
    r
}
var No = Mo(1, (e, {buffer: t, index: n}) => {
    t[n] = e
}
, function*(e, t) {
    return (yield*e(t.readExactly(1)))[0]
})
  , W = Mo(4, (e, {buffer: t, index: n, littleEndian: r}) => {
    Oo(t, n, e, r)
}
, function*(e, t, {littleEndian: n}) {
    return Eo(yield*e(t.readExactly(4)), 0, n)
})
  , Po = Mo(4, (e, {buffer: t, index: n, littleEndian: r}) => {
    So(t, n, e, r)
}
, function*(e, t, {littleEndian: n}) {
    return xo(yield*e(t.readExactly(4)), 0, n)
})
  , Fo = Mo(8, (e, {buffer: t, index: n, littleEndian: r}) => {
    jo(t, n, e, r)
}
, function*(e, t, {littleEndian: n}) {
    return Ao(yield*e(t.readExactly(8)), 0, n)
})
  , {TextEncoder: Io, TextDecoder: Lo} = globalThis
  , Ro = new Io
  , zo = new Lo;
function Bo(e) {
    return Ro.encode(e)
}
function Vo(e) {
    return zo.decode(e)
}
var Ho = (e => {
    let t = mo(e, {
        convert: Vo,
        back: Bo
    });
    return t.as = () => t,
    t
}
)
  , {AbortController: Uo} = globalThis
  , Wo = ( () => {
    let {ReadableStream: e} = globalThis;
    return e.from ||= function(t) {
        let n = Symbol.asyncIterator in t ? t[Symbol.asyncIterator]() : t[Symbol.iterator]();
        return new e({
            async pull(e) {
                let t = await n.next();
                if (t.done) {
                    e.close();
                    return
                }
                e.enqueue(t.value)
            },
            async cancel(e) {
                await n.return?.(e)
            }
        })
    }
    ,
    (!e.prototype[Symbol.asyncIterator] || !e.prototype.values) && (e.prototype.values = async function*(e) {
        let t = this.getReader();
        try {
            for (; ; ) {
                let {done: e, value: n} = await t.read();
                if (e)
                    return;
                yield n
            }
        } finally {
            e?.preventCancel || await t.cancel(),
            t.releaseLock()
        }
    }
    ,
    e.prototype[Symbol.asyncIterator] = e.prototype.values),
    e
}
)()
  , {WritableStream: Go, TransformStream: Ko} = globalThis
  , qo = class extends Wo {
    constructor(e, t, n) {
        let r, i = !1, a = new Uo;
        super({
            start: t => {
                let o = e({
                    abortSignal: a.signal,
                    enqueue: async e => {
                        if (n?.({
                            source: `producer`,
                            operation: `enqueue`,
                            value: e,
                            phase: `start`
                        }),
                        a.signal.aborted) {
                            n?.({
                                source: `producer`,
                                operation: `enqueue`,
                                value: e,
                                phase: `ignored`
                            });
                            return
                        }
                        if (t.desiredSize === null) {
                            t.enqueue(e);
                            return
                        }
                        if (i) {
                            i = !1,
                            t.enqueue(e),
                            n?.({
                                source: `producer`,
                                operation: `enqueue`,
                                value: e,
                                phase: `complete`
                            });
                            return
                        }
                        if (t.desiredSize <= 0 && (n?.({
                            source: `producer`,
                            operation: `enqueue`,
                            value: e,
                            phase: `waiting`
                        }),
                        r = new V,
                        await r.promise,
                        a.signal.aborted)) {
                            n?.({
                                source: `producer`,
                                operation: `enqueue`,
                                value: e,
                                phase: `ignored`
                            });
                            return
                        }
                        t.enqueue(e),
                        n?.({
                            source: `producer`,
                            operation: `enqueue`,
                            value: e,
                            phase: `complete`
                        })
                    }
                    ,
                    close() {
                        if (n?.({
                            source: `producer`,
                            operation: `close`,
                            explicit: !0,
                            phase: `start`
                        }),
                        a.signal.aborted) {
                            n?.({
                                source: `producer`,
                                operation: `close`,
                                explicit: !0,
                                phase: `ignored`
                            });
                            return
                        }
                        t.close(),
                        n?.({
                            source: `producer`,
                            operation: `close`,
                            explicit: !0,
                            phase: `complete`
                        })
                    },
                    error(e) {
                        n?.({
                            source: `producer`,
                            operation: `error`,
                            explicit: !0,
                            phase: `start`
                        }),
                        t.error(e),
                        n?.({
                            source: `producer`,
                            operation: `error`,
                            explicit: !0,
                            phase: `complete`
                        })
                    }
                });
                o && `then`in o && o.then( () => {
                    n?.({
                        source: `producer`,
                        operation: `close`,
                        explicit: !1,
                        phase: `start`
                    });
                    try {
                        t.close(),
                        n?.({
                            source: `producer`,
                            operation: `close`,
                            explicit: !1,
                            phase: `complete`
                        })
                    } catch {
                        n?.({
                            source: `producer`,
                            operation: `close`,
                            explicit: !1,
                            phase: `ignored`
                        })
                    }
                }
                , e => {
                    n?.({
                        source: `producer`,
                        operation: `error`,
                        explicit: !1,
                        phase: `start`
                    }),
                    t.error(e),
                    n?.({
                        source: `producer`,
                        operation: `error`,
                        explicit: !1,
                        phase: `complete`
                    })
                }
                )
            }
            ,
            pull: () => {
                n?.({
                    source: `consumer`,
                    operation: `pull`,
                    phase: `start`
                }),
                r ? r.resolve() : t?.highWaterMark === 0 && (i = !0),
                n?.({
                    source: `consumer`,
                    operation: `pull`,
                    phase: `complete`
                })
            }
            ,
            cancel: e => {
                n?.({
                    source: `consumer`,
                    operation: `cancel`,
                    phase: `start`
                }),
                a.abort(e),
                r?.resolve(),
                n?.({
                    source: `consumer`,
                    operation: `cancel`,
                    phase: `complete`
                })
            }
        }, t)
    }
}
;
function Jo(e) {
    try {
        let t = e.close();
        return ao(t) ? t.then( () => !0, () => !1) : !0
    } catch {
        return !1
    }
}
async function Yo(e) {
    try {
        return await e.cancel(),
        !0
    } catch {
        return !1
    }
}
var Xo = class {
    #e;
    #t = 0;
    #n = 0;
    #r = 0;
    get position() {
        return this.#r
    }
    stream;
    reader;
    constructor(e) {
        this.stream = e,
        this.reader = e.getReader()
    }
    #i(e) {
        if (!this.#e)
            return;
        let t = this.#e.subarray(this.#t, this.#t + e);
        return this.#n > e ? (this.#r += e,
        this.#t += e,
        this.#n -= e,
        t) : (this.#r += this.#n,
        this.#e = void 0,
        this.#t = 0,
        this.#n = 0,
        t)
    }
    async #a(e) {
        let {done: t, value: n} = await this.reader.read();
        if (t)
            throw new ho;
        return n.length > e ? (this.#e = n,
        this.#t = e,
        this.#n = n.length - e,
        this.#r += e,
        n.subarray(0, e)) : (this.#r += n.length,
        n)
    }
    iterateExactly(e) {
        let t = +!this.#e;
        return {
            next: () => {
                switch (t) {
                case 0:
                    {
                        let n = this.#i(e);
                        return n.length === e ? t = 2 : (e -= n.length,
                        t = 1),
                        {
                            done: !1,
                            value: n
                        }
                    }
                case 1:
                    return t = 3,
                    {
                        done: !1,
                        value: this.#a(e).then(n => (n.length === e ? t = 2 : (e -= n.length,
                        t = 1),
                        n))
                    };
                case 2:
                    return {
                        done: !0,
                        value: void 0
                    };
                case 3:
                    throw Error("Can't call `next` before previous Promise resolves");
                default:
                    throw Error(`unreachable`)
                }
            }
        }
    }
    readExactly = so(function*(e, t) {
        let n, r = 0, i = this.#i(t);
        if (i) {
            if (i.length === t)
                return i;
            n = new Uint8Array(t),
            n.set(i, r),
            r += i.length,
            t -= i.length
        } else
            n = new Uint8Array(t);
        for (; t > 0; ) {
            let i = yield*e(this.#a(t));
            n.set(i, r),
            r += i.length,
            t -= i.length
        }
        return n
    });
    release() {
        return this.#n > 0 ? new qo(async e => {
            let t = this.#e.subarray(this.#t);
            for (await e.enqueue(t),
            e.abortSignal.addEventListener(`abort`, () => {
                Yo(this.reader)
            }
            ); ; ) {
                let {done: t, value: n} = await this.reader.read();
                if (t)
                    return;
                await e.enqueue(n)
            }
        }
        ) : (this.reader.releaseLock(),
        this.stream)
    }
    async cancel(e) {
        await this.reader.cancel(e)
    }
}
  , Zo = class {
    #e;
    get readable() {
        return this.#e
    }
    #t;
    get writable() {
        return this.#t
    }
    constructor(e) {
        let t, n, r = new Xo(new qo(e => {
            t = e
        }
        ));
        this.#e = new Wo({
            async pull(t) {
                try {
                    let n = await e(r);
                    t.enqueue(n)
                } catch (e) {
                    if (e instanceof yo) {
                        t.close();
                        return
                    }
                    throw e
                }
            },
            cancel: e => n.error(e)
        }),
        this.#t = new Go({
            start(e) {
                n = e
            },
            async write(e) {
                await t.enqueue(e)
            },
            abort() {
                t.close()
            },
            close() {
                t.close()
            }
        })
    }
}
  , Qo = class {
    #e = ``;
    #t = new V;
    #n = new Go({
        write: e => {
            this.#e += e
        }
        ,
        close: () => {
            this.#t.resolve(this.#e),
            this.#r.enqueue(this.#e),
            this.#r.close()
        }
        ,
        abort: e => {
            this.#t.reject(e),
            this.#r.error(e)
        }
    });
    get writable() {
        return this.#n
    }
    #r;
    #i = new Wo({
        start: e => {
            this.#r = e
        }
    });
    get readable() {
        return this.#i
    }
    constructor() {
        Object.defineProperties(this.#i, {
            then: {
                get: () => this.#t.promise.then.bind(this.#t.promise)
            },
            catch: {
                get: () => this.#t.promise.catch.bind(this.#t.promise)
            },
            finally: {
                get: () => this.#t.promise.finally.bind(this.#t.promise)
            }
        })
    }
}
  , $o = class {
    #e = [];
    #t = new V;
    #n = new Go({
        write: e => {
            this.#e.push(e)
        }
        ,
        close: () => {
            let e, t = 0;
            switch (this.#e.length) {
            case 0:
                e = H;
                break;
            case 1:
                e = this.#e[0];
                break;
            default:
                e = new Uint8Array(this.#e.reduce( (e, t) => e + t.length, 0));
                for (let n of this.#e)
                    e.set(n, t),
                    t += n.length;
                break
            }
            this.#t.resolve(e),
            this.#r.enqueue(e),
            this.#r.close()
        }
        ,
        abort: e => {
            this.#t.reject(e),
            this.#r.error(e)
        }
    });
    get writable() {
        return this.#n
    }
    #r;
    #i = new Wo({
        start: e => {
            this.#r = e
        }
    });
    get readable() {
        return this.#i
    }
    constructor() {
        Object.defineProperties(this.#i, {
            then: {
                get: () => this.#t.promise.then.bind(this.#t.promise)
            },
            catch: {
                get: () => this.#t.promise.catch.bind(this.#t.promise)
            },
            finally: {
                get: () => this.#t.promise.finally.bind(this.#t.promise)
            }
        })
    }
}
  , es = class e extends Wo {
    static async enqueue(e, t) {
        let n = new os(t);
        e.enqueue(n),
        await n.consumed
    }
    constructor(t, n) {
        let r, i;
        n && (i = {},
        `highWaterMark`in n && (i.highWaterMark = n.highWaterMark),
        `size`in n && (i.size = e => n.size(e.value))),
        super({
            start(n) {
                return r = {
                    enqueue(t) {
                        return e.enqueue(n, t)
                    },
                    close() {
                        n.close()
                    },
                    error(e) {
                        n.error(e)
                    }
                },
                t.start?.(r)
            },
            pull() {
                return t.pull?.(r)
            },
            cancel(e) {
                return t.cancel?.(e)
            }
        }, i)
    }
}
  , ts = class extends Wo {
    constructor(e, t, n) {
        let r = e.getReader({
            mode: `byob`
        })
          , i = new Uint8Array(t);
        super({
            async pull(e) {
                let {done: t, value: a} = await r.read(i, {
                    min: n
                });
                if (t) {
                    e.close();
                    return
                }
                await es.enqueue(e, a),
                i = new Uint8Array(a.buffer)
            },
            cancel(e) {
                return r.cancel(e)
            }
        })
    }
}
  , ns = class extends Go {
    constructor(e) {
        let t = e.getWriter();
        super({
            write(e) {
                return e.tryConsume(e => t.write(e))
            },
            abort(e) {
                return t.abort(e)
            },
            close() {
                return t.close()
            }
        })
    }
}
  , rs = class extends Go {
    static async write(e, t) {
        let n = new os(t);
        await e.write(n),
        await n.consumed
    }
    constructor(e, t) {
        let n;
        t && (n = {},
        `highWaterMark`in t && (n.highWaterMark = t.highWaterMark),
        `size`in t && (n.size = e => t.size(e instanceof os ? e.value : e))),
        super({
            start(t) {
                return e.start?.(t)
            },
            write(t, n) {
                return t.tryConsume(t => e.write?.(t, n))
            },
            abort(t) {
                return e.abort?.(t)
            },
            close() {
                return e.close?.()
            }
        }, n)
    }
}
  , {console: is} = globalThis
  , as = is?.createTask?.bind(is) ?? ( () => ({
    run(e) {
        return e()
    }
}))
  , os = class {
    static WritableStream = rs;
    static WrapWritableStream = ns;
    static ReadableStream = es;
    static WrapByteReadableStream = ts;
    #e;
    #t;
    value;
    consumed;
    constructor(e) {
        this.#e = as(`Consumable`),
        this.value = e,
        this.#t = new V,
        this.consumed = this.#t.promise
    }
    consume() {
        this.#t.resolve()
    }
    error(e) {
        this.#t.reject(e)
    }
    tryConsume(e) {
        try {
            let t = this.#e.run( () => e(this.value));
            return ao(t) ? t = t.then(e => (this.#t.resolve(),
            e), e => {
                throw this.#t.reject(e),
                e
            }
            ) : this.#t.resolve(),
            t
        } catch (e) {
            throw this.#t.reject(e),
            e
        }
    }
}
;
function ss(e, t) {
    return e instanceof os ? e.tryConsume(t) : t(e)
}
var cs = class extends Go {
    constructor(e, t) {
        let n;
        t && (n = {},
        `highWaterMark`in t && (n.highWaterMark = t.highWaterMark),
        `size`in t && (n.size = e => t.size(e instanceof os ? e.value : e))),
        super({
            start(t) {
                return e.start?.(t)
            },
            write(t, n) {
                return ss(t, t => e.write?.(t, n))
            },
            abort(t) {
                return e.abort?.(t)
            },
            close() {
                return e.close?.()
            }
        }, n)
    }
}
  , ls = class {
    #e;
    #t;
    #n;
    #r;
    constructor(e) {
        this.#e = e,
        this.#t = new Uint8Array(e),
        this.#n = 0,
        this.#r = e
    }
    *push(e) {
        let t = 0
          , n = e.length;
        if (this.#n !== 0)
            if (n >= this.#r) {
                if (this.#t.set(e.subarray(0, this.#r), this.#n),
                t += this.#r,
                n -= this.#r,
                yield this.#t,
                this.#n = 0,
                this.#r = this.#e,
                n === 0)
                    return
            } else {
                this.#t.set(e, this.#n),
                this.#n += n,
                this.#r -= n;
                return
            }
        for (; n >= this.#e; ) {
            let r = t + this.#e;
            yield e.subarray(t, r),
            t = r,
            n -= this.#e
        }
        n > 0 && (this.#t.set(e.subarray(t), this.#n),
        this.#n += n,
        this.#r -= n)
    }
    flush() {
        if (this.#n === 0)
            return;
        let e = this.#t.subarray(0, this.#n);
        return this.#n = 0,
        this.#r = this.#e,
        e
    }
}
  , us = class extends Ko {
    constructor(e, t=!1) {
        let n = t ? new ls(e) : void 0;
        super({
            async transform(t, r) {
                await ss(t, async t => {
                    if (n)
                        for (let e of n.push(t))
                            await os.ReadableStream.enqueue(r, e);
                    else {
                        let n = 0
                          , i = t.length;
                        for (; i > 0; ) {
                            let a = n + e;
                            await os.ReadableStream.enqueue(r, t.subarray(n, a)),
                            n = a,
                            i -= e
                        }
                    }
                }
                )
            },
            flush(e) {
                if (n) {
                    let t = n.flush();
                    t && e.enqueue(t)
                }
            }
        })
    }
}
;
function ds(e, t) {
    return `start`in e ? e.start(t) : typeof e == `function` ? e(t) : e
}
var fs = class extends Wo {
    readable;
    #e;
    constructor(e, t) {
        super({
            start: async t => {
                let n = await ds(e, t);
                this.readable = n,
                this.#e = this.readable.getReader()
            }
            ,
            pull: async t => {
                let {done: n, value: r} = await this.#e.read().catch(t => {
                    throw `error`in e && e.error(t),
                    t
                }
                );
                n ? (t.close(),
                `close`in e && await e.close?.()) : t.enqueue(r)
            }
            ,
            cancel: async t => {
                await this.#e.cancel(t),
                `cancel`in e && await e.cancel?.(t)
            }
        }, t)
    }
}
  , ps = () => {}
  , ms = class {
    #e = [];
    #t = [];
    #n = !1;
    get writableClosed() {
        return this.#n
    }
    #r = new V;
    get closed() {
        return this.#r.promise
    }
    #i;
    constructor(e) {
        this.#i = e ?? {}
    }
    wrapReadable(e, t) {
        return new fs({
            start: t => (this.#e.push(t),
            e),
            cancel: async () => {
                await this.close()
            }
            ,
            close: async () => {
                await this.dispose()
            }
        },t)
    }
    createWritable(e) {
        let t = e.getWriter();
        return this.#t.push(t),
        new Go({
            write: async e => {
                await t.write(e)
            }
            ,
            abort: async e => {
                await t.abort(e),
                await this.close()
            }
            ,
            close: async () => {
                await t.close().catch(ps),
                await this.close()
            }
        })
    }
    async close() {
        if (!this.#n) {
            this.#n = !0,
            await this.#i.close?.() !== !1 && await this.dispose();
            for (let e of this.#t)
                e.close().catch(ps)
        }
    }
    async dispose() {
        this.#n = !0,
        this.#r.resolve();
        for (let e of this.#e)
            Jo(e);
        await this.#i.dispose?.()
    }
}
  , hs = globalThis
  , gs = hs.TextDecoderStream;
hs.TextEncoderStream;
function _s(e, t) {
    let n = t.writable.getWriter()
      , r = t.readable.pipeTo(e);
    return new Go({
        async write(e) {
            await n.write(e)
        },
        async close() {
            await n.close(),
            await r
        }
    })
}
var vs = class extends Zo {
    constructor(e) {
        super(t => e.deserialize(t))
    }
}
  , ys = class {
    #e = [];
    constructor() {
        this.dispose = this.dispose.bind(this)
    }
    addDisposable(e) {
        return this.#e.push(e),
        e
    }
    dispose() {
        for (let e of this.#e)
            e.dispose();
        this.#e = []
    }
}
  , bs = class {
    listeners = [];
    constructor() {
        this.event = this.event.bind(this)
    }
    addEventListener(e) {
        this.listeners.push(e);
        let t = () => {
            let t = this.listeners.indexOf(e);
            t !== -1 && this.listeners.splice(t, 1)
        }
        ;
        return t.dispose = t,
        t
    }
    event = (e, t, ...n) => {
        let r = {
            listener: e,
            thisArg: t,
            args: n
        };
        return this.addEventListener(r)
    }
    ;
    fire(e) {
        for (let t of this.listeners.slice())
            t.listener.call(t.thisArg, e, ...t.args)
    }
    dispose() {
        this.listeners.length = 0
    }
}
  , xs = Symbol(`undefined`)
  , Ss = class extends bs {
    #e = xs;
    addEventListener(e) {
        return this.#e !== xs && e.listener.call(e.thisArg, this.#e, ...e.args),
        super.addEventListener(e)
    }
    fire(e) {
        this.#e = e,
        super.fire(e)
    }
}
  , Cs = class extends ys {
    #e;
    get adb() {
        return this.#e
    }
    constructor(e) {
        super(),
        this.#e = e
    }
}
  , ws = U({
    version: W
}, {
    littleEndian: !0
})
  , Ts = U({
    bpp: W,
    size: W,
    width: W,
    height: W,
    red_offset: W,
    red_length: W,
    blue_offset: W,
    blue_length: W,
    green_offset: W,
    green_length: W,
    alpha_offset: W,
    alpha_length: W,
    data: mo(`size`)
}, {
    littleEndian: !0
})
  , Es = U({
    bpp: W,
    colorSpace: W,
    size: W,
    width: W,
    height: W,
    red_offset: W,
    red_length: W,
    blue_offset: W,
    blue_length: W,
    green_offset: W,
    green_length: W,
    alpha_offset: W,
    alpha_length: W,
    data: mo(`size`)
}, {
    littleEndian: !0
})
  , Ds = class extends Error {
    constructor(e, t) {
        super(e, t)
    }
}
  , Os = class extends Ds {
    constructor(e) {
        super(`Unsupported FrameBuffer version ${e}`)
    }
}
  , ks = class extends Ds {
    constructor() {
        super(`FrameBuffer is disabled by current app`)
    }
}
;
async function As(e) {
    let t = new Xo((await e.createSocket(`framebuffer:`)).readable), n;
    try {
        ({version: n} = await ws.deserialize(t))
    } catch (e) {
        throw e instanceof yo ? new ks : e
    }
    switch (n) {
    case 1:
        return await Ts.deserialize(t);
    case 2:
        return await Es.deserialize(t);
    default:
        throw new Os(n)
    }
}
var js = class extends Cs {
    reboot(e=``) {
        return this.adb.createSocketAndWait(`reboot:${e}`)
    }
    bootloader() {
        return this.reboot(`bootloader`)
    }
    fastboot() {
        return this.reboot(`fastboot`)
    }
    recovery() {
        return this.reboot(`recovery`)
    }
    sideload() {
        return this.reboot(`sideload`)
    }
    qualcommEdlMode() {
        return this.reboot(`edl`)
    }
    powerOff() {
        return this.adb.subprocess.noneProtocol.spawnWaitText([`reboot`, `-p`])
    }
    powerButton(e=!1) {
        let t = [`input`, `keyevent`];
        return e && t.push(`--longpress`),
        t.push(`POWER`),
        this.adb.subprocess.noneProtocol.spawnWaitText(t)
    }
    samsungOdin() {
        return this.reboot(`download`)
    }
}
;
function Ms(e) {
    if (e.buffer instanceof ArrayBuffer)
        return e;
    let t = new Uint8Array(e.length);
    return t.set(e),
    t
}
var Ns = class {
    #e;
    #t = [];
    constructor(e=!1) {
        this.#e = e
    }
    wait() {
        if (!this.#e && (this.#e = !0,
        this.#t.length === 0))
            return Promise.resolve();
        let e = new V;
        return this.#t.push(e),
        e.promise
    }
    notifyOne() {
        this.#t.length === 0 ? this.#e = !1 : this.#t.pop().resolve()
    }
    dispose() {
        for (let e of this.#t)
            e.reject(Error(`The AutoResetEvent has been disposed`));
        this.#t.length = 0
    }
}
  , [Ps,G,Fs] = ( () => {
    let e = []
      , t = [];
    function n(n, r) {
        let i = n.charCodeAt(0)
          , a = r.charCodeAt(0);
        for (let n = i; n <= a; n += 1)
            e[n] = t.length,
            t.push(n)
    }
    return n(`A`, `Z`),
    n(`a`, `z`),
    n(`0`, `9`),
    n(`+`, `+`),
    n(`/`, `/`),
    [e, t, 61]
}
)();
function Is(e) {
    let t = e % 3
      , n = t === 0 ? 0 : 3 - t;
    return [(e + n) / 3 * 4, n]
}
function Ls(e, t) {
    let[n,r] = Is(e.length);
    if (t) {
        if (t.length < n)
            throw TypeError(`output buffer is too small`);
        if (t = t.subarray(0, n),
        e.buffer !== t.buffer)
            Rs(e, t, r);
        else if (t.byteOffset + t.length - (r + 1) <= e.byteOffset + e.length)
            Rs(e, t, r);
        else if (t.byteOffset >= e.byteOffset - 1)
            zs(e, t, r);
        else
            throw TypeError(`input and output cannot overlap`);
        return n
    } else
        return t = new Uint8Array(n),
        Rs(e, t, r),
        t
}
function Rs(e, t, n) {
    let r = 0
      , i = 0;
    for (; r < e.length - 2; ) {
        let n = e[r];
        r += 1;
        let a = e[r];
        r += 1;
        let o = e[r];
        r += 1,
        t[i] = G[n >> 2],
        i += 1,
        t[i] = G[(n & 3) << 4 | a >> 4],
        i += 1,
        t[i] = G[(a & 15) << 2 | o >> 6],
        i += 1,
        t[i] = G[o & 63],
        i += 1
    }
    if (n === 2) {
        let n = e[r];
        r += 1,
        t[i] = G[n >> 2],
        i += 1,
        t[i] = G[(n & 3) << 4],
        i += 1,
        t[i] = Fs,
        i += 1,
        t[i] = Fs
    } else if (n === 1) {
        let n = e[r];
        r += 1;
        let a = e[r];
        r += 1,
        t[i] = G[n >> 2],
        i += 1,
        t[i] = G[(n & 3) << 4 | a >> 4],
        i += 1,
        t[i] = G[(a & 15) << 2],
        i += 1,
        t[i] = Fs
    }
}
function zs(e, t, n) {
    let r = e.length - 1
      , i = t.length - 1;
    if (n === 2) {
        let n = e[r];
        --r,
        t[i] = Fs,
        --i,
        t[i] = Fs,
        --i,
        t[i] = G[(n & 3) << 4],
        --i,
        t[i] = G[n >> 2],
        --i
    } else if (n === 1) {
        let n = e[r];
        --r;
        let a = e[r];
        --r,
        t[i] = Fs,
        --i,
        t[i] = G[(n & 15) << 2],
        --i,
        t[i] = G[(a & 3) << 4 | n >> 4],
        --i,
        t[i] = G[a >> 2],
        --i
    }
    for (; r >= 0; ) {
        let n = e[r];
        --r;
        let a = e[r];
        --r;
        let o = e[r];
        --r,
        t[i] = G[n & 63],
        --i,
        t[i] = G[(a & 15) << 2 | n >> 6],
        --i,
        t[i] = G[(o & 3) << 4 | a >> 4],
        --i,
        t[i] = G[o >> 2],
        --i
    }
}
function Bs(e) {
    if (e < 48)
        throw TypeError(`Invalid hex char ${e}`);
    if (e < 58)
        return e - 48;
    if (e < 65)
        throw TypeError(`Invalid hex char ${e}`);
    if (e < 71)
        return e - 55;
    if (e < 97)
        throw TypeError(`Invalid hex char ${e}`);
    if (e < 103)
        return e - 87;
    throw TypeError(`Invalid hex char ${e}`)
}
function Vs(e) {
    let t = 0;
    for (let n = 0; n < e.length; n += 1)
        t = t << 4 | Bs(e[n]);
    return t
}
var Hs = () => {}
;
function Us(...e) {
    throw Error(`Unreachable. Arguments:
` + e.join(`
`))
}
function Ws(e, t) {
    if (e.length !== t.length)
        return !1;
    for (let n = 0; n < e.length; n += 1)
        if (e[n] !== t[n])
            return !1;
    return !0
}
var Gs = U({
    length: Ho(4),
    content: Ho({
        field: `length`,
        convert(e) {
            return Number.parseInt(e, 16)
        },
        back(e) {
            return e.toString(16).padStart(4, `0`)
        }
    })
}, {
    littleEndian: !0
})
  , Ks = class extends Error {
    constructor(e) {
        super(e)
    }
}
  , qs = class extends Ks {
    constructor() {
        super(`ADB reverse tunnel is not supported on this device when connected wirelessly.`)
    }
}
  , Js = bo(Gs, {}, {
    postDeserialize(e) {
        throw e.content === `more than one device/emulator` ? new qs : new Ks(e.content)
    }
});
function Ys(e) {
    let t = 0;
    for (let n of e) {
        if (n < 48 || n > 57)
            return t;
        t = t * 10 + n - 48
    }
    return t
}
var Xs = Bo(`OKAY`)
  , Zs = class extends Cs {
    #e = new Map;
    async createBufferedStream(e) {
        return new Xo((await this.adb.createSocket(e)).readable)
    }
    async sendRequest(e) {
        let t = await this.createBufferedStream(e);
        return Ws(await t.readExactly(4), Xs) || await Js.deserialize(t),
        t
    }
    async list() {
        let e = await this.createBufferedStream(`reverse:list-forward`);
        return (await Gs.deserialize(e)).content.split(`
`).filter(e => !!e).map(e => {
            let[t,n,r] = e.split(` `);
            return {
                deviceSerial: t,
                localName: n,
                remoteName: r
            }
        }
        )
    }
    async addExternal(e, t) {
        let n = await this.sendRequest(`reverse:forward:${e};${t}`);
        if (e.startsWith(`tcp:`)) {
            let t = n.position;
            try {
                let t = Vs(await n.readExactly(4));
                e = `tcp:${Ys(await n.readExactly(t))}`
            } catch (e) {
                if (!(e instanceof ho && n.position === t))
                    throw e
            }
        }
        return e
    }
    async add(e, t, n) {
        n = await this.adb.transport.addReverseTunnel(t, n);
        try {
            return e = await this.addExternal(e, n),
            this.#e.set(e, n),
            e
        } catch (e) {
            throw await this.adb.transport.removeReverseTunnel(n),
            e
        }
    }
    async remove(e) {
        let t = this.#e.get(e);
        t && await this.adb.transport.removeReverseTunnel(t),
        await this.sendRequest(`reverse:killforward:${e}`)
    }
    async removeAll() {
        await this.adb.transport.clearReverseTunnels(),
        this.#e.clear(),
        await this.sendRequest(`reverse:killforward-all`)
    }
}
  , Qs = class {
    #e;
    get stdin() {
        return this.#e.writable
    }
    get output() {
        return this.#e.readable
    }
    #t;
    get exited() {
        return this.#t
    }
    constructor(e, t) {
        if (this.#e = e,
        t) {
            let e = new V;
            this.#e.closed.then( () => e.resolve(void 0), t => e.reject(t)),
            t.addEventListener(`abort`, () => {
                e.reject(t.reason),
                this.#e.close()
            }
            ),
            this.#t = e.promise
        } else
            this.#t = this.#e.closed
    }
    kill() {
        return this.#e.close()
    }
}
  , $s = class {
    #e;
    #t;
    #n;
    get input() {
        return this.#n
    }
    get output() {
        return this.#e.readable
    }
    get exited() {
        return this.#e.closed
    }
    constructor(e) {
        this.#e = e,
        this.#t = this.#e.writable.getWriter(),
        this.#n = new cs({
            write: e => this.#t.write(e)
        })
    }
    sigint() {
        return this.#t.write(new Uint8Array([3]))
    }
    kill() {
        return this.#e.close()
    }
}
;
function ec(e) {
    let t = ``;
    t += `'`;
    let n = 0;
    for (; ; ) {
        let r = e.indexOf(`'`, n);
        if (r === -1) {
            t += e.substring(n);
            break
        }
        t += e.substring(n, r),
        t += String.raw`'\''`,
        n = r + 1
    }
    return t += `'`,
    t
}
function tc(e) {
    let t = [], n, r = !1, i = 0;
    for (let a = 0, o = e.length; a < o; a += 1) {
        if (r) {
            r = !1;
            continue
        }
        let o = e.charAt(a);
        switch (o) {
        case ` `:
            !n && a !== i && (t.push(e.substring(i, a)),
            i = a + 1);
            break;
        case `'`:
        case `"`:
            n ? o === n && (n = void 0) : n = o;
            break;
        case `\\`:
            r = !0;
            break
        }
    }
    return i < e.length && t.push(e.substring(i)),
    t
}
var nc = class {
    #e;
    constructor(e) {
        this.#e = e
    }
    spawn(e, t) {
        return t?.throwIfAborted(),
        typeof e == `string` && (e = tc(e)),
        this.#e(e, t)
    }
    async spawnWait(e) {
        return await (await this.spawn(e)).output.pipeThrough(new $o)
    }
    async spawnWaitText(e) {
        return await (await this.spawn(e)).output.pipeThrough(new gs).pipeThrough(new Qo)
    }
}
  , rc = class extends nc {
    #e;
    get adb() {
        return this.#e
    }
    constructor(e) {
        super(async (e, t) => {
            let n = await this.#e.createSocket(`exec:${e.join(` `)}`);
            if (t?.aborted)
                throw await n.close(),
                t.reason;
            return new Qs(n,t)
        }
        ),
        this.#e = e
    }
    async pty(e) {
        return e === void 0 ? e = `` : Array.isArray(e) && (e = e.join(` `)),
        new $s(await this.#e.createSocket(`shell:${e}`))
    }
}
  , K = {
    ShellV2: `shell_v2`,
    Cmd: `cmd`,
    StatV2: `stat_v2`,
    ListV2: `ls_v2`,
    FixedPushMkdir: `fixed_push_mkdir`,
    Abb: `abb`,
    AbbExec: `abb_exec`,
    SendReceiveV2: `sendrecv_v2`,
    DelayedAck: `delayed_ack`
}
  , ic = {
    Stdin: 0,
    Stdout: 1,
    Stderr: 2,
    Exit: 3,
    CloseStdin: 4,
    WindowSizeChange: 5
}
  , ac = U({
    id: No(),
    data: mo(W)
}, {
    littleEndian: !0
})
  , oc = class {
    #e;
    #t;
    #n;
    get stdin() {
        return this.#n
    }
    #r;
    get stdout() {
        return this.#r
    }
    #i;
    get stderr() {
        return this.#i
    }
    #a;
    get exited() {
        return this.#a
    }
    constructor(e, t) {
        this.#e = e;
        let n, r;
        this.#r = new qo(e => {
            n = e
        }
        ),
        this.#i = new qo(e => {
            r = e
        }
        );
        let i = new V;
        this.#a = i.promise,
        e.readable.pipeThrough(new vs(ac)).pipeTo(new Go({
            write: async e => {
                switch (e.id) {
                case ic.Exit:
                    i.resolve(e.data[0]);
                    break;
                case ic.Stdout:
                    await n.enqueue(e.data);
                    break;
                case ic.Stderr:
                    await r.enqueue(e.data);
                    break;
                default:
                    break
                }
            }
        })).then( () => {
            n.close(),
            r.close(),
            i.reject(Error(`Socket ended without exit message`))
        }
        , e => {
            n.error(e),
            r.error(e),
            i.reject(e)
        }
        ),
        t && t.addEventListener(`abort`, () => {
            i.reject(t.reason),
            this.#e.close()
        }
        ),
        this.#t = this.#e.writable.getWriter(),
        this.#n = new cs({
            write: async e => {
                await this.#t.write(ac.serialize({
                    id: ic.Stdin,
                    data: e
                }))
            }
            ,
            close: () => this.#t.write(ac.serialize({
                id: ic.CloseStdin,
                data: H
            }))
        })
    }
    kill() {
        return this.#e.close()
    }
}
  , sc = class {
    #e;
    #t;
    #n;
    get input() {
        return this.#n
    }
    #r;
    get output() {
        return this.#r
    }
    #i = new V;
    get exited() {
        return this.#i.promise
    }
    constructor(e) {
        this.#e = e;
        let t;
        this.#r = new qo(e => {
            t = e
        }
        ),
        e.readable.pipeThrough(new vs(ac)).pipeTo(new Go({
            write: async e => {
                switch (e.id) {
                case ic.Exit:
                    this.#i.resolve(e.data[0]);
                    break;
                case ic.Stdout:
                    await t.enqueue(e.data);
                    break
                }
            }
        })).then( () => {
            t.close(),
            this.#i.reject(Error(`Socket ended without exit message`))
        }
        , e => {
            t.error(e),
            this.#i.reject(e)
        }
        ),
        this.#t = this.#e.writable.getWriter(),
        this.#n = new cs({
            write: e => this.#a(e)
        })
    }
    #a(e) {
        return this.#t.write(ac.serialize({
            id: ic.Stdin,
            data: e
        }))
    }
    async resize(e, t) {
        await this.#t.write(ac.serialize({
            id: ic.WindowSizeChange,
            data: Bo(`${e}x${t},0x0\0`)
        }))
    }
    sigint() {
        return this.#a(new Uint8Array([3]))
    }
    kill() {
        return this.#e.close()
    }
}
  , cc = class {
    #e;
    constructor(e) {
        this.#e = e
    }
    spawn(e, t) {
        return t?.throwIfAborted(),
        typeof e == `string` && (e = tc(e)),
        this.#e(e, t)
    }
    async spawnWait(e) {
        let t = await this.spawn(e)
          , [n,r,i] = await Promise.all([t.stdout.pipeThrough(new $o), t.stderr.pipeThrough(new $o), t.exited]);
        return {
            stdout: n,
            stderr: r,
            exitCode: i
        }
    }
    async spawnWaitText(e) {
        let t = await this.spawn(e)
          , [n,r,i] = await Promise.all([t.stdout.pipeThrough(new gs).pipeThrough(new Qo), t.stderr.pipeThrough(new gs).pipeThrough(new Qo), t.exited]);
        return {
            stdout: n,
            stderr: r,
            exitCode: i
        }
    }
}
  , lc = class extends cc {
    #e;
    get adb() {
        return this.#e
    }
    get isSupported() {
        return this.#e.canUseFeature(K.ShellV2)
    }
    constructor(e) {
        super(async (e, t) => {
            let n = await this.#e.createSocket(`shell,v2,raw:${e.join(` `)}`);
            if (t?.aborted)
                throw await n.close(),
                t.reason;
            return new oc(n,t)
        }
        ),
        this.#e = e
    }
    async pty(e) {
        let t = `shell,v2,pty`;
        return e?.terminalType && (t += `,TERM=` + e.terminalType),
        t += `:`,
        e && (typeof e.command == `string` ? t += e.command : Array.isArray(e.command) && (t += e.command.join(` `))),
        new sc(await this.#e.createSocket(t))
    }
}
  , uc = class {
    #e;
    get adb() {
        return this.#e
    }
    #t;
    get noneProtocol() {
        return this.#t
    }
    #n;
    get shellProtocol() {
        return this.#n
    }
    constructor(e) {
        this.#e = e,
        this.#t = new rc(e),
        e.canUseFeature(K.ShellV2) && (this.#n = new lc(e))
    }
}
;
function dc(e) {
    let t = new Uint8Array(e.length);
    for (let n = 0; n < e.length; n += 1)
        t[n] = e.charCodeAt(n);
    return t
}
function q(e) {
    return To(dc(e), 0)
}
var fc = {
    Entry: q(`DENT`),
    Entry2: q(`DNT2`),
    Lstat: q(`STAT`),
    Stat: q(`STA2`),
    Lstat2: q(`LST2`),
    Done: q(`DONE`),
    Data: q(`DATA`),
    Ok: q(`OKAY`),
    Fail: q(`FAIL`)
}
  , pc = class extends Error {
}
  , mc = U({
    message: Ho(W)
}, {
    littleEndian: !0,
    postDeserialize(e) {
        throw new pc(e.message)
    }
});
async function hc(e, t, n) {
    typeof t == `string` && (t = q(t));
    let r = await e.readExactly(4);
    switch (To(r, 0)) {
    case fc.Fail:
        throw await mc.deserialize(e),
        Error(`Unreachable`);
    case t:
        return await n.deserialize(e);
    default:
        throw Error(`Expected '${t}', but got '${Vo(r)}'`)
    }
}
async function *gc(e, t, n) {
    for (typeof t == `string` && (t = q(t)); ; ) {
        let r = await e.readExactly(4);
        switch (To(r, 0)) {
        case fc.Fail:
            await mc.deserialize(e),
            Us();
        case fc.Done:
            await e.readExactly(n.size);
            return;
        case t:
            yield await n.deserialize(e);
            break;
        default:
            throw Error(`Expected '${t}' or '${fc.Done}', but got '${Vo(r)}'`)
        }
    }
}
var _c = {
    List: q(`LIST`),
    ListV2: q(`LIS2`),
    Send: q(`SEND`),
    SendV2: q(`SND2`),
    Lstat: q(`STAT`),
    Stat: q(`STA2`),
    LstatV2: q(`LST2`),
    Data: q(`DATA`),
    Done: q(`DONE`),
    Receive: q(`RECV`)
}
  , vc = U({
    id: W,
    arg: W
}, {
    littleEndian: !0
});
async function yc(e, t, n) {
    if (typeof t == `string` && (t = q(t)),
    typeof n == `number`) {
        await e.write(vc.serialize({
            id: t,
            arg: n
        }));
        return
    }
    typeof n == `string` && (n = Bo(n)),
    await e.write(vc.serialize({
        id: t,
        arg: n.length
    })),
    await e.write(n)
}
var bc = {
    Directory: 4,
    File: 8,
    Link: 10
}
  , xc = U({
    mode: W,
    size: W,
    mtime: W
}, {
    littleEndian: !0,
    extra: {
        get type() {
            return this.mode >> 12
        },
        get permission() {
            return this.mode & 4095
        }
    },
    postDeserialize(e) {
        if (e.mode === 0 && e.size === 0 && e.mtime === 0)
            throw Error(`lstat error`);
        return e
    }
})
  , Sc = {
    SUCCESS: 0,
    EACCES: 13,
    EEXIST: 17,
    EFAULT: 14,
    EFBIG: 27,
    EINTR: 4,
    EINVAL: 22,
    EIO: 5,
    EISDIR: 21,
    ELOOP: 40,
    EMFILE: 24,
    ENAMETOOLONG: 36,
    ENFILE: 23,
    ENOENT: 2,
    ENOMEM: 12,
    ENOSPC: 28,
    ENOTDIR: 20,
    EOVERFLOW: 75,
    EPERM: 1,
    EROFS: 30,
    ETXTBSY: 26
}
  , Cc = Object.fromEntries(Object.entries(Sc).map( ([e,t]) => [t, e]))
  , wc = U({
    error: W(),
    dev: Fo,
    ino: Fo,
    mode: W,
    nlink: W,
    uid: W,
    gid: W,
    size: Fo,
    atime: Fo,
    mtime: Fo,
    ctime: Fo
}, {
    littleEndian: !0,
    extra: {
        get type() {
            return this.mode >> 12
        },
        get permission() {
            return this.mode & 4095
        }
    },
    postDeserialize(e) {
        if (e.error)
            throw Error(Cc[e.error]);
        return e
    }
});
async function Tc(e, t, n) {
    let r = await e.lock();
    try {
        if (n)
            return await yc(r, _c.LstatV2, t),
            await hc(r, fc.Lstat2, wc);
        {
            await yc(r, _c.Lstat, t);
            let e = await hc(r, fc.Lstat, xc);
            return {
                mode: e.mode,
                size: BigInt(e.size),
                mtime: BigInt(e.mtime),
                get type() {
                    return e.type
                },
                get permission() {
                    return e.permission
                }
            }
        }
    } finally {
        r.release()
    }
}
async function Ec(e, t) {
    let n = await e.lock();
    try {
        return await yc(n, _c.Stat, t),
        await hc(n, fc.Stat, wc)
    } finally {
        n.release()
    }
}
var Dc = bo(xc, {
    name: Ho(W)
})
  , Oc = bo(wc, {
    name: Ho(W)
});
async function *kc(e, t) {
    let n = await e.lock();
    try {
        await yc(n, _c.ListV2, t);
        for await(let e of gc(n, fc.Entry2, Oc))
            e.error === Sc.SUCCESS && (yield e)
    } finally {
        n.release()
    }
}
async function *Ac(e, t) {
    let n = await e.lock();
    try {
        await yc(n, _c.List, t);
        for await(let e of gc(n, fc.Entry, Dc))
            yield e
    } finally {
        n.release()
    }
}
async function *jc(e, t, n) {
    if (n)
        yield*kc(e, t);
    else
        for await(let n of Ac(e, t))
            yield{
                mode: n.mode,
                size: BigInt(n.size),
                mtime: BigInt(n.mtime),
                get type() {
                    return n.type
                },
                get permission() {
                    return n.permission
                },
                name: n.name
            }
}
var Mc = U({
    data: mo(W)
}, {
    littleEndian: !0
});
async function *Nc(e, t) {
    let n = await e.lock()
      , r = !1;
    try {
        await yc(n, _c.Receive, t);
        for await(let e of gc(n, fc.Data, Mc))
            yield e.data;
        r = !0
    } catch (e) {
        throw r = !0,
        e
    } finally {
        if (!r)
            for await(let e of gc(n, fc.Data, Mc))
                ;
        n.release()
    }
}
function Pc(e, t) {
    return Wo.from(Nc(e, t))
}
var Fc = 64 * 1024
  , Ic = U({
    unused: W
}, {
    littleEndian: !0
});
async function Lc(e, t, n, r) {
    let i = new Uo;
    t.pipeThrough(new us(n,!0)).pipeTo(new cs({
        write(t) {
            return yc(e, _c.Data, t)
        }
    }), {
        signal: i.signal
    }).then(async () => {
        await yc(e, _c.Done, r),
        await e.flush()
    }
    , Hs),
    await hc(e, fc.Ok, Ic).catch(e => {
        throw i.abort(),
        e
    }
    )
}
async function Rc({socket: e, filename: t, file: n, type: r=bc.File, permission: i=438, mtime: a=Date.now() / 1e3 | 0, packetSize: o=Fc}) {
    let s = await e.lock();
    try {
        let e = `${t},${(r << 12 | i).toString()}`;
        await yc(s, _c.Send, e),
        await Lc(s, n, o, a)
    } finally {
        s.release()
    }
}
var zc = {
    None: 0,
    Brotli: 1,
    Lz4: 2,
    Zstd: 4,
    DryRun: 2147483648
}
  , Bc = U({
    id: W,
    mode: W,
    flags: W()
}, {
    littleEndian: !0
});
async function Vc({socket: e, filename: t, file: n, type: r=bc.File, permission: i=438, mtime: a=Date.now() / 1e3 | 0, packetSize: o=Fc, dryRun: s=!1}) {
    let c = await e.lock();
    try {
        await yc(c, _c.SendV2, t);
        let e = r << 12 | i
          , l = zc.None;
        s && (l |= zc.DryRun),
        await c.write(Bc.serialize({
            id: _c.SendV2,
            mode: e,
            flags: l
        })),
        await Lc(c, n, o, a)
    } finally {
        c.release()
    }
}
function Hc(e) {
    if (e.v2)
        return Vc(e);
    if (e.dryRun)
        throw Error(`dryRun is not supported in v1`);
    return Rc(e)
}
var Uc = class {
    #e;
    #t;
    #n;
    #r = new Ns;
    #i;
    get position() {
        return this.#t.position
    }
    constructor(e, t, n, r) {
        this.#e = e,
        this.#t = t,
        this.#n = r,
        this.#i = new ls(n)
    }
    #a(e) {
        return os.WritableStream.write(this.#e, e)
    }
    async flush() {
        try {
            await this.#r.wait();
            let e = this.#i.flush();
            e && await this.#a(e)
        } finally {
            this.#r.notifyOne()
        }
    }
    async write(e) {
        try {
            await this.#r.wait();
            for (let t of this.#i.push(e))
                await this.#a(t)
        } finally {
            this.#r.notifyOne()
        }
    }
    async readExactly(e) {
        return await this.flush(),
        await this.#t.readExactly(e)
    }
    release() {
        this.#i.flush(),
        this.#n.notifyOne()
    }
    async close() {
        await this.#t.cancel()
    }
}
  , Wc = class {
    #e = new Ns;
    #t;
    #n;
    constructor(e, t) {
        this.#t = e,
        this.#n = new Uc(e.writable.getWriter(),new Xo(e.readable),t,this.#e)
    }
    async lock() {
        return await this.#e.wait(),
        this.#n
    }
    async close() {
        await this.#n.close(),
        await this.#t.close()
    }
}
;
function Gc(e) {
    let t = e.lastIndexOf(`/`);
    if (t === -1)
        throw Error(`Invalid path`);
    return t === 0 ? `/` : e.substring(0, t)
}
var Kc = class {
    _adb;
    _socket;
    #e;
    #t;
    #n;
    #r;
    #i;
    get supportsStat() {
        return this.#e
    }
    get supportsListV2() {
        return this.#t
    }
    get fixedPushMkdir() {
        return this.#n
    }
    get supportsSendReceiveV2() {
        return this.#r
    }
    get needPushMkdirWorkaround() {
        return this.#i
    }
    constructor(e, t) {
        this._adb = e,
        this._socket = new Wc(t,e.maxPayloadSize),
        this.#e = e.canUseFeature(K.StatV2),
        this.#t = e.canUseFeature(K.ListV2),
        this.#n = e.canUseFeature(K.FixedPushMkdir),
        this.#r = e.canUseFeature(K.SendReceiveV2),
        this.#i = this._adb.canUseFeature(K.ShellV2) && !this.fixedPushMkdir
    }
    async lstat(e) {
        return await Tc(this._socket, e, this.#e)
    }
    async stat(e) {
        if (!this.#e)
            throw Error(`Not supported`);
        return await Ec(this._socket, e)
    }
    async isDirectory(e) {
        try {
            return await this.lstat(e + `/`),
            !0
        } catch {
            return !1
        }
    }
    opendir(e) {
        return jc(this._socket, e, this.supportsListV2)
    }
    async readdir(e) {
        let t = [];
        for await(let n of this.opendir(e))
            t.push(n);
        return t
    }
    read(e) {
        return Pc(this._socket, e)
    }
    async write(e) {
        this.needPushMkdirWorkaround && await this._adb.subprocess.noneProtocol.spawnWait([`mkdir`, `-p`, ec(Gc(e.filename))]),
        await Hc({
            v2: this.supportsSendReceiveV2,
            socket: this._socket,
            ...e
        })
    }
    lockSocket() {
        return this._socket.lock()
    }
    dispose() {
        return this._socket.close()
    }
}
;
function qc(e) {
    if (!(!e || e === `0`))
        return Number.parseInt(e, 10)
}
var Jc = class extends Cs {
    async getListenAddresses() {
        let e = await this.adb.getProp(`service.adb.listen_addrs`)
          , t = await this.adb.getProp(`service.adb.tcp.port`)
          , n = await this.adb.getProp(`persist.adb.tcp.port`);
        return {
            serviceListenAddresses: e == `` ? [] : e.split(`,`),
            servicePort: qc(t),
            persistPort: qc(n)
        }
    }
    async setPort(e) {
        if (e <= 0)
            throw TypeError(`Invalid port ${e}`);
        let t = await this.adb.createSocketAndWait(`tcpip:${e}`);
        if (t !== `restarting in TCP mode port: ${e}\n`)
            throw Error(t);
        return t
    }
    async disable() {
        let e = await this.adb.createSocketAndWait(`usb:`);
        if (e !== `restarting in USB mode
`)
            throw Error(e);
        return e
    }
}
  , Yc = class {
    #e;
    get transport() {
        return this.#e
    }
    get serial() {
        return this.#e.serial
    }
    get maxPayloadSize() {
        return this.#e.maxPayloadSize
    }
    get banner() {
        return this.#e.banner
    }
    get disconnected() {
        return this.#e.disconnected
    }
    get clientFeatures() {
        return this.#e.clientFeatures
    }
    get deviceFeatures() {
        return this.banner.features
    }
    subprocess;
    power;
    reverse;
    tcpip;
    constructor(e) {
        this.#e = e,
        this.subprocess = new uc(this),
        this.power = new js(this),
        this.reverse = new Zs(this),
        this.tcpip = new Jc(this)
    }
    canUseFeature(e) {
        return this.clientFeatures.includes(e) && this.deviceFeatures.includes(e)
    }
    async createSocket(e) {
        return this.#e.connect(e)
    }
    async createSocketAndWait(e) {
        return await (await this.createSocket(e)).readable.pipeThrough(new gs).pipeThrough(new Qo)
    }
    getProp(e) {
        return this.subprocess.noneProtocol.spawnWaitText([`getprop`, e]).then(e => e.trim())
    }
    rm(e, t) {
        let n = [`rm`];
        if (t?.recursive && n.push(`-r`),
        t?.force && n.push(`-f`),
        Array.isArray(e))
            for (let t of e)
                n.push(ec(t));
        else
            n.push(ec(e));
        return n.push(`</dev/null`),
        this.subprocess.noneProtocol.spawnWaitText(n)
    }
    async sync() {
        let e = await this.createSocket(`sync:`);
        return new Kc(this,e)
    }
    async framebuffer() {
        return As(this)
    }
    async close() {
        await this.#e.close()
    }
}
  , Xc = {
    Product: `ro.product.name`,
    Model: `ro.product.model`,
    Device: `ro.product.device`,
    Features: `features`
}
  , Zc = class e {
    static parse(t) {
        let n, r, i, a, o = [], s = t.split(`::`);
        if (s.length > 1) {
            n = s[0].trim() || void 0;
            let e = s[1];
            for (let t of e.split(`;`)) {
                if (!t)
                    continue;
                let e = t.split(`=`);
                if (e.length !== 2)
                    continue;
                let[n,s] = e;
                switch (n) {
                case Xc.Product:
                    r = s;
                    break;
                case Xc.Model:
                    i = s;
                    break;
                case Xc.Device:
                    a = s;
                    break;
                case Xc.Features:
                    o = s.split(`,`);
                    break
                }
            }
        }
        return new e(n,r,i,a,o)
    }
    #e;
    get state() {
        return this.#e
    }
    #t;
    get product() {
        return this.#t
    }
    #n;
    get model() {
        return this.#n
    }
    #r;
    get device() {
        return this.#r
    }
    #i = [];
    get features() {
        return this.#i
    }
    constructor(e, t, n, r, i) {
        this.#e = e,
        this.#t = t,
        this.#n = n,
        this.#r = r,
        this.#i = i
    }
}
;
function Qc(e, t, n) {
    let r = 0n;
    for (let i = t; i < t + n; i += 8) {
        r <<= 64n;
        let t = ko(e, i);
        r |= t
    }
    return r
}
function $c(e, t, n, r, i) {
    if (i)
        for (; r > 0n; )
            Co(e, t, r),
            t += 8,
            r >>= 64n;
    else {
        let i = t + n - 8;
        for (; r > 0n; )
            wo(e, i, r),
            i -= 8,
            r >>= 64n
    }
}
var el = 38
  , tl = 2048 / 8
  , nl = 303
  , rl = 2048 / 8;
function il(e) {
    return [Qc(e, el, tl), Qc(e, nl, rl)]
}
function al(e, t) {
    let n = e % t;
    return n > 0 ? n : n + (t > 0 ? t : -t)
}
function ol(e, t) {
    if (e = al(e, t),
    !e || t < 2)
        return NaN;
    let n = []
      , r = t;
    for (; r; )
        [e,r] = [r, e % r],
        n.push({
            a: e,
            b: r
        });
    if (e !== 1)
        return NaN;
    let i = 1
      , a = 0;
    for (let e = n.length - 2; e >= 0; --e)
        [i,a] = [a, i - a * Math.floor(n[e].a / n[e].b)];
    return al(a, t)
}
var sl = 2048 / 8
  , cl = sl / 4;
function ll() {
    return 524
}
function ul(e, t) {
    let n, r = ll();
    if (!t)
        t = new Uint8Array(r),
        n = `Uint8Array`;
    else {
        if (t.length < r)
            throw TypeError(`output buffer is too small`);
        n = `number`
    }
    let i = new DataView(t.buffer,t.byteOffset,t.length)
      , a = 0;
    i.setUint32(a, cl, !0),
    a += 4;
    let[o] = il(e)
      , s = -ol(Number(o % 2n ** 32n), 2 ** 32);
    i.setInt32(a, s, !0),
    a += 4,
    $c(t, a, sl, o, !0),
    a += sl;
    let c = 2n ** 4096n % o;
    return $c(t, a, sl, c, !0),
    a += sl,
    i.setUint32(a, 65537, !0),
    a += 4,
    n === `Uint8Array` ? t : r
}
function dl(e, t, n) {
    if (n === 1n)
        return 0n;
    let r = 1n;
    for (e %= n; t > 0n; )
        BigInt.asUintN(1, t) === 1n && (r = r * e % n),
        e = e * e % n,
        t >>= 1n;
    return r
}
var fl = new Uint8Array([48, 33, 48, 9, 6, 5, 43, 14, 3, 2, 26, 5, 0, 4, 20]);
function pl(e, t) {
    let[n,r] = il(e)
      , i = new Uint8Array(256)
      , a = 0;
    i[a] = 0,
    a += 1,
    i[a] = 1,
    a += 1;
    let o = i.length - fl.length - t.length - 1;
    for (; a < o; )
        i[a] = 255,
        a += 1;
    i[a] = 0,
    a += 1,
    i.set(fl, a),
    a += fl.length,
    i.set(t, a);
    let s = dl(Qc(i, 0, i.length), r, n);
    return $c(i, 0, i.length, s, !1),
    i
}
var J = {
    Auth: 1213486401,
    Close: 1163086915,
    Connect: 1314410051,
    Okay: 1497451343,
    Open: 1313165391,
    Write: 1163154007
}
  , ml = U({
    command: W,
    arg0: W,
    arg1: W,
    payloadLength: W,
    checksum: W,
    magic: Po
}, {
    littleEndian: !0
});
function hl(e) {
    return e.reduce( (e, t) => e + t, 0)
}
var gl = class extends Ko {
    constructor() {
        let e = new Uint8Array(ml.size);
        super({
            transform: async (t, n) => {
                await t.tryConsume(async t => {
                    let r = t;
                    r.payloadLength = r.payload.length,
                    ml.serialize(r, e),
                    await os.ReadableStream.enqueue(n, e),
                    r.payloadLength && await os.ReadableStream.enqueue(n, r.payload)
                }
                )
            }
        })
    }
}
  , _l = {
    Token: 1,
    Signature: 2,
    PublicKey: 3
}
  , vl = [async function*(e, t) {
    for await(let n of e.iterateKeys()) {
        let e = await t();
        if (e.arg0 !== _l.Token)
            return;
        let r = pl(n.buffer, e.payload);
        yield{
            command: J.Auth,
            arg0: _l.Signature,
            arg1: 0,
            payload: r
        }
    }
}
, async function*(e, t) {
    if ((await t()).arg0 !== _l.Token)
        return;
    let n;
    for await(let t of e.iterateKeys()) {
        n = t;
        break
    }
    n ||= await e.generateKey();
    let r = ll()
      , [i] = Is(r)
      , a = n.name?.length ? Bo(n.name) : H
      , o = new Uint8Array(i + (a.length ? a.length + 1 : 0) + 1);
    ul(n.buffer, o),
    Ls(o.subarray(0, r), o),
    a.length && (o[i] = 32,
    o.set(a, i + 1)),
    yield{
        command: J.Auth,
        arg0: _l.PublicKey,
        arg1: 0,
        payload: o
    }
}
]
  , yl = class {
    authenticators;
    #e;
    #t = new V;
    #n;
    constructor(e, t) {
        this.authenticators = e,
        this.#e = t
    }
    #r = () => this.#t.promise;
    async*#i() {
        for (let e of this.authenticators)
            for await(let t of e(this.#e, this.#r))
                this.#t = new V,
                yield t
    }
    async process(e) {
        this.#n ||= this.#i(),
        this.#t.resolve(e);
        let t = await this.#n.next();
        if (t.done)
            throw Error(`No authenticator can handle the request`);
        return t.value
    }
    dispose() {
        this.#n?.return?.()
    }
}
  , bl = class {
    #e;
    localId;
    remoteId;
    localCreated;
    service;
    #t;
    #n;
    get readable() {
        return this.#t
    }
    #r;
    writable;
    #i = !1;
    #a = new V;
    get closed() {
        return this.#a.promise
    }
    #o;
    get socket() {
        return this.#o
    }
    #s;
    #c = 0;
    constructor(e) {
        this.#e = e.dispatcher,
        this.localId = e.localId,
        this.remoteId = e.remoteId,
        this.localCreated = e.localCreated,
        this.service = e.service,
        this.#t = new qo(e => {
            this.#n = e
        }
        ),
        this.writable = new cs({
            start: e => {
                this.#r = e,
                e.signal.addEventListener(`abort`, () => {
                    this.#s?.reject(e.signal.reason)
                }
                )
            }
            ,
            write: async e => {
                let t = e.length
                  , n = this.#e.options.maxPayloadSize;
                for (let r = 0, i = n; r < t; r = i,
                i += n) {
                    let t = e.subarray(r, i);
                    await this.#l(t)
                }
            }
        }),
        this.#o = new xl(this),
        this.#c = e.availableWriteBytes
    }
    async #l(e) {
        let t = e.length;
        for (; this.#c < t; ) {
            let e = new V;
            this.#s = e,
            await e.promise
        }
        this.#c === 1 / 0 ? this.#c = -1 : this.#c -= t,
        await this.#e.sendPacket(J.Write, this.localId, this.remoteId, e)
    }
    async enqueue(e) {
        await this.#n.enqueue(e)
    }
    ack(e) {
        this.#c += e,
        this.#s?.resolve()
    }
    async close() {
        if (!this.#i) {
            this.#i = !0,
            this.#s?.reject(Error(`Socket closed`));
            try {
                this.#r.error(Error(`Socket closed`))
            } catch {}
            await this.#e.sendPacket(J.Close, this.localId, this.remoteId, H)
        }
    }
    dispose() {
        this.#n.close(),
        this.#a.resolve(void 0)
    }
}
  , xl = class {
    #e;
    get localId() {
        return this.#e.localId
    }
    get remoteId() {
        return this.#e.remoteId
    }
    get localCreated() {
        return this.#e.localCreated
    }
    get service() {
        return this.#e.service
    }
    get readable() {
        return this.#e.readable
    }
    get writable() {
        return this.#e.writable
    }
    get closed() {
        return this.#e.closed
    }
    constructor(e) {
        this.#e = e
    }
    close() {
        return this.#e.close()
    }
}
  , Sl = class {
    #e = new ro(1);
    #t = new Map;
    #n;
    options;
    #r = !1;
    #i = new V;
    get disconnected() {
        return this.#i.promise
    }
    #a = new Map;
    #o = new Uo;
    constructor(e, t) {
        this.options = t,
        this.options.initialDelayedAckBytes < 0 && (this.options.initialDelayedAckBytes = 0),
        e.readable.pipeTo(new Go({
            write: async (e, t) => {
                switch (e.command) {
                case J.Close:
                    await this.#s(e);
                    break;
                case J.Okay:
                    this.#c(e);
                    break;
                case J.Open:
                    await this.#u(e);
                    break;
                case J.Write:
                    this.#d(e).catch(e => {
                        t.error(e)
                    }
                    );
                    break;
                default:
                    throw Error(`Unknown command: ${e.command.toString(16)}`)
                }
            }
        }), {
            preventCancel: t.preserveConnection ?? !1,
            signal: this.#o.signal
        }).then( () => {
            this.#f()
        }
        , e => {
            this.#r || this.#i.reject(e),
            this.#f()
        }
        ),
        this.#n = e.writable.getWriter()
    }
    async #s(e) {
        if (e.arg0 === 0 && this.#e.reject(e.arg1, Error(`Socket open failed`)))
            return;
        let t = this.#t.get(e.arg1);
        if (t) {
            await t.close(),
            t.dispose(),
            this.#t.delete(e.arg1);
            return
        }
    }
    #c(e) {
        let t;
        if (this.options.initialDelayedAckBytes !== 0) {
            if (e.payload.length !== 4)
                throw Error(`Invalid OKAY packet. Payload size should be 4`);
            t = To(e.payload, 0)
        } else {
            if (e.payload.length !== 0)
                throw Error(`Invalid OKAY packet. Payload size should be 0`);
            t = 1 / 0
        }
        if (this.#e.resolve(e.arg1, {
            remoteId: e.arg0,
            availableWriteBytes: t
        }))
            return;
        let n = this.#t.get(e.arg1);
        if (n) {
            n.ack(t);
            return
        }
        this.sendPacket(J.Close, e.arg1, e.arg0, H)
    }
    #l(e, t, n) {
        let r;
        return this.options.initialDelayedAckBytes === 0 ? r = H : (r = new Uint8Array(4),
        Do(r, 0, n)),
        this.sendPacket(J.Okay, e, t, r)
    }
    async #u(e) {
        let[t] = this.#e.add();
        this.#e.resolve(t, void 0);
        let n = e.arg0
          , r = e.arg1
          , i = Vo(e.payload);
        if (i.endsWith(`\0`) && (i = i.substring(0, i.length - 1)),
        this.options.initialDelayedAckBytes === 0) {
            if (r !== 0)
                throw Error(`Invalid OPEN packet. arg1 should be 0`);
            r = 1 / 0
        } else if (r === 0)
            throw Error(`Invalid OPEN packet. arg1 should be greater than 0`);
        let a = this.#a.get(i);
        if (!a) {
            await this.sendPacket(J.Close, 0, n, H);
            return
        }
        let o = new bl({
            dispatcher: this,
            localId: t,
            remoteId: n,
            localCreated: !1,
            service: i,
            availableWriteBytes: r
        });
        try {
            await a(o.socket),
            this.#t.set(t, o),
            await this.#l(t, n, this.options.initialDelayedAckBytes)
        } catch {
            await this.sendPacket(J.Close, 0, n, H)
        }
    }
    async #d(e) {
        let t = this.#t.get(e.arg1);
        if (!t)
            throw Error(`Unknown local socket id: ${e.arg1}`);
        let n = !1
          , r = [(async () => {
            await t.enqueue(e.payload),
            await this.#l(e.arg1, e.arg0, e.payload.length),
            n = !0
        }
        )()];
        this.options.readTimeLimit && r.push((async () => {
            if (await io(this.options.readTimeLimit),
            !n)
                throw Error(`readable of \`${t.service}\` has stalled for ${this.options.readTimeLimit} milliseconds`)
        }
        )()),
        await Promise.race(r)
    }
    async createSocket(e) {
        this.options.appendNullToServiceString && (e += `\0`);
        let[t,n] = this.#e.add();
        await this.sendPacket(J.Open, t, this.options.initialDelayedAckBytes, e);
        let {remoteId: r, availableWriteBytes: i} = await n
          , a = new bl({
            dispatcher: this,
            localId: t,
            remoteId: r,
            localCreated: !0,
            service: e,
            availableWriteBytes: i
        });
        return this.#t.set(t, a),
        a.socket
    }
    addReverseTunnel(e, t) {
        this.#a.set(e, t)
    }
    removeReverseTunnel(e) {
        this.#a.delete(e)
    }
    clearReverseTunnels() {
        this.#a.clear()
    }
    async sendPacket(e, t, n, r) {
        if (typeof r == `string` && (r = Bo(r)),
        r.length > this.options.maxPayloadSize)
            throw TypeError(`payload too large`);
        await os.WritableStream.write(this.#n, {
            command: e,
            arg0: t,
            arg1: n,
            payload: r,
            checksum: this.options.calculateChecksum ? hl(r) : 0,
            magic: e ^ 4294967295
        })
    }
    async close() {
        await Promise.all(Array.from(this.#t.values(), e => e.close())),
        this.#r = !0,
        this.#o.abort(),
        this.options.preserveConnection ? this.#n.releaseLock() : await this.#n.close()
    }
    #f() {
        for (let e of this.#t.values())
            e.dispose();
        this.#i.resolve()
    }
}
  , Cl = [K.ShellV2, K.Cmd, K.StatV2, K.ListV2, K.FixedPushMkdir, `apex`, K.Abb, `fixed_push_symlink_timestamp`, K.AbbExec, `remount_shell`, `track_app`, K.SendReceiveV2, `sendrecv_v2_brotli`, `sendrecv_v2_lz4`, `sendrecv_v2_zstd`, `sendrecv_v2_dry_run_send`, K.DelayedAck]
  , wl = 32 * 1024 * 1024
  , Tl = class e {
    static async authenticate({serial: t, connection: n, credentialStore: r, authenticators: i=vl, features: a=Cl, initialDelayedAckBytes: o=wl, ...s}) {
        let c = 16777217
          , l = 1024 * 1024
          , u = new V
          , d = new yl(i,r)
          , f = new Uo
          , p = n.readable.pipeTo(new Go({
            async write(e) {
                switch (e.command) {
                case J.Connect:
                    c = Math.min(c, e.arg0),
                    l = Math.min(l, e.arg1),
                    u.resolve(Vo(e.payload));
                    break;
                case J.Auth:
                    await h(await d.process(e));
                    break;
                default:
                    break
                }
            }
        }), {
            preventCancel: !0,
            signal: f.signal
        }).then( () => {
            u.reject(Error(`Connection closed unexpectedly`))
        }
        , e => {
            u.reject(e)
        }
        )
          , m = n.writable.getWriter();
        async function h(e) {
            e.checksum = hl(e.payload),
            e.magic = e.command ^ 4294967295,
            await os.WritableStream.write(m, e)
        }
        let g = a.slice();
        if (o <= 0) {
            let e = a.indexOf(K.DelayedAck);
            e !== -1 && g.splice(e, 1)
        }
        let _;
        try {
            await h({
                command: J.Connect,
                arg0: c,
                arg1: l,
                payload: Bo(`host::features=${g.join(`,`)}`)
            }),
            _ = await u.promise
        } finally {
            f.abort(),
            m.releaseLock(),
            await p
        }
        return new e({
            serial: t,
            connection: n,
            version: c,
            maxPayloadSize: l,
            banner: _,
            features: g,
            initialDelayedAckBytes: o,
            ...s
        })
    }
    #e;
    get connection() {
        return this.#e
    }
    #t;
    #n;
    get serial() {
        return this.#n
    }
    #r;
    get protocolVersion() {
        return this.#r
    }
    get maxPayloadSize() {
        return this.#t.options.maxPayloadSize
    }
    #i;
    get banner() {
        return this.#i
    }
    get disconnected() {
        return this.#t.disconnected
    }
    #a;
    get clientFeatures() {
        return this.#a
    }
    constructor({serial: e, connection: t, version: n, banner: r, features: i=Cl, initialDelayedAckBytes: a, ...o}) {
        if (this.#n = e,
        this.#e = t,
        this.#i = Zc.parse(r),
        this.#a = i,
        i.includes(K.DelayedAck)) {
            if (a <= 0)
                throw TypeError("`initialDelayedAckBytes` must be greater than 0 when DelayedAck feature is enabled.");
            this.#i.features.includes(K.DelayedAck) || (a = 0)
        } else
            a = 0;
        let s, c;
        n >= 16777217 ? (s = !1,
        c = !1) : (s = !0,
        c = !0),
        this.#t = new Sl(t,{
            calculateChecksum: s,
            appendNullToServiceString: c,
            initialDelayedAckBytes: a,
            ...o
        }),
        this.#r = n
    }
    connect(e) {
        return this.#t.createSocket(e)
    }
    addReverseTunnel(e, t) {
        return t ||= `localabstract:reverse_${Math.random().toString().substring(2)}`,
        this.#t.addReverseTunnel(t, e),
        t
    }
    removeReverseTunnel(e) {
        this.#t.removeReverseTunnel(e)
    }
    clearReverseTunnels() {
        this.#t.clearReverseTunnels()
    }
    close() {
        return this.#t.close()
    }
}
;
function El(e, t) {
    t < 0 || t >= e.length || (e[t] = e[e.length - 1],
    --e.length)
}
var Dl = class extends Error {
    constructor(e) {
        super(`The device is already in used by another program`, {
            cause: e
        })
    }
}
;
function Ol(e, t) {
    return typeof e == `object` && !!e && `name`in e && e.name === t
}
function kl(e) {
    return e.classCode !== void 0 && e.subclassCode !== void 0 && e.protocolCode !== void 0
}
function Al(e, t) {
    return e.interfaceClass === t.classCode && e.interfaceSubclass === t.subclassCode && e.interfaceProtocol === t.protocolCode
}
function jl(e, t) {
    for (let n of e.configurations)
        for (let e of n.interfaces)
            for (let r of e.alternates)
                if (Al(r, t))
                    return {
                        configuration: n,
                        interface_: e,
                        alternate: r
                    }
}
function Ml(e) {
    return e.toString(16).padStart(4, `0`)
}
function Nl(e) {
    return e.serialNumber ? e.serialNumber : Ml(e.vendorId) + `x` + Ml(e.productId)
}
function Pl(e) {
    if (e.length === 0)
        throw TypeError(`No endpoints given`);
    let t, n;
    for (let r of e)
        switch (r.direction) {
        case `in`:
            if (t = r,
            n)
                return {
                    inEndpoint: t,
                    outEndpoint: n
                };
            break;
        case `out`:
            if (n = r,
            t)
                return {
                    inEndpoint: t,
                    outEndpoint: n
                };
            break
        }
    throw t ? n ? Error(`unreachable`) : TypeError(`No output endpoint found.`) : TypeError(`No input endpoint found.`)
}
function Fl(e, t) {
    return t.vendorId !== void 0 && e.vendorId !== t.vendorId || t.productId !== void 0 && e.productId !== t.productId || t.serialNumber !== void 0 && Nl(e) !== t.serialNumber ? !1 : kl(t) ? jl(e, t) || !1 : !0
}
function Il(e, t, n) {
    if (n && n.length > 0 && Il(e, n))
        return !1;
    for (let n of t) {
        let t = Fl(e, n);
        if (t)
            return t
    }
    return !1
}
var Ll = {
    classCode: 255,
    subclassCode: 66,
    protocolCode: 1
};
function Rl(e) {
    return !e || e.length === 0 ? [Ll] : e.map(e => ({
        ...e,
        classCode: e.classCode ?? Ll.classCode,
        subclassCode: e.subclassCode ?? Ll.subclassCode,
        protocolCode: e.protocolCode ?? Ll.protocolCode
    }))
}
var zl = class {
    #e;
    get device() {
        return this.#e
    }
    #t;
    get inEndpoint() {
        return this.#t
    }
    #n;
    get outEndpoint() {
        return this.#n
    }
    #r;
    get readable() {
        return this.#r
    }
    #i;
    get writable() {
        return this.#i
    }
    constructor(e, t, n, r) {
        this.#e = e,
        this.#t = t,
        this.#n = n;
        let i = !1
          , a = new ms({
            close: async () => {
                try {
                    i = !0,
                    await e.raw.close()
                } catch {}
            }
            ,
            dispose: () => {
                i = !0,
                r.removeEventListener(`disconnect`, o)
            }
        });
        function o(t) {
            t.device === e.raw && a.dispose().catch(Us)
        }
        r.addEventListener(`disconnect`, o),
        this.#r = a.wrapReadable(new Wo({
            pull: async e => {
                let t = await this.#a();
                t ? e.enqueue(t) : e.close()
            }
        },{
            highWaterMark: 0
        }));
        let s = n.packetSize - 1;
        this.#i = _s(a.createWritable(new cs({
            write: async t => {
                try {
                    await e.raw.transferOut(n.endpointNumber, Ms(t)),
                    s && (t.length & s) === 0 && await e.raw.transferOut(n.endpointNumber, H)
                } catch (e) {
                    if (i)
                        return;
                    throw e
                }
            }
        })), new gl)
    }
    async #a() {
        try {
            for (; ; ) {
                let e = await this.#e.raw.transferIn(this.#t.endpointNumber, this.#t.packetSize);
                if (e.data.byteLength !== 24)
                    continue;
                let t = new go(new Uint8Array(e.data.buffer))
                  , n = ml.deserialize(t);
                if (n.magic === (n.command ^ 4294967295)) {
                    if (n.payloadLength !== 0) {
                        let e = await this.#e.raw.transferIn(this.#t.endpointNumber, n.payloadLength);
                        n.payload = new Uint8Array(e.data.buffer)
                    } else
                        n.payload = H;
                    return n
                }
            }
        } catch (e) {
            if (Ol(e, `NetworkError`) && (await new Promise(e => {
                setTimeout( () => {
                    e()
                }
                , 100)
            }
            ),
            closed))
                return;
            throw e
        }
    }
}
  , Bl = class e {
    static DeviceBusyError = Dl;
    #e;
    #t;
    #n;
    get raw() {
        return this.#n
    }
    #r;
    get serial() {
        return this.#r
    }
    get name() {
        return this.#n.productName
    }
    constructor(e, t, n) {
        this.#n = e,
        this.#r = Nl(e),
        this.#e = t,
        this.#t = n
    }
    async #i() {
        this.#n.opened || await this.#n.open();
        let {configuration: t, interface_: n, alternate: r} = this.#e;
        if (this.#n.configuration?.configurationValue !== t.configurationValue && await this.#n.selectConfiguration(t.configurationValue),
        !n.claimed)
            try {
                await this.#n.claimInterface(n.interfaceNumber)
            } catch (t) {
                throw Ol(t, `NetworkError`) ? new e.DeviceBusyError(t) : t
            }
        return n.alternate.alternateSetting !== r.alternateSetting && await this.#n.selectAlternateInterface(n.interfaceNumber, r.alternateSetting),
        Pl(r.endpoints)
    }
    async connect() {
        let {inEndpoint: e, outEndpoint: t} = await this.#i();
        return new zl(this,e,t,this.#t)
    }
}
  , Vl = class e {
    static async create(t, n={}) {
        return new e(t,await t.getDevices(),n)
    }
    #e;
    #t;
    #n;
    #r = new bs;
    onDeviceAdd = this.#r.event;
    #i = new bs;
    onDeviceRemove = this.#i.event;
    #a = new Ss;
    onListChange = this.#a.event;
    current = [];
    constructor(e, t, n={}) {
        this.#e = Rl(n.filters),
        this.#t = n.exclusionFilters,
        this.#n = e,
        this.current = t.map(e => this.#o(e)).filter(e => !!e),
        this.#a.fire(this.current),
        this.#n.addEventListener(`connect`, this.#s),
        this.#n.addEventListener(`disconnect`, this.#c)
    }
    #o(e) {
        let t = Il(e, this.#e, this.#t);
        if (t)
            return new Bl(e,t,this.#n)
    }
    #s = e => {
        let t = this.#o(e.device);
        if (!t || this.current.some(e => e.raw === t.raw))
            return;
        let n = this.current.slice();
        n.push(t),
        this.current = n,
        this.#r.fire([t]),
        this.#a.fire(this.current)
    }
    ;
    #c = e => {
        let t = this.current.findIndex(t => t.raw === e.device);
        if (t !== -1) {
            let e = this.current[t]
              , n = this.current.slice();
            El(n, t),
            this.current = n,
            this.#i.fire([e]),
            this.#a.fire(this.current)
        }
    }
    ;
    stop() {
        this.#n.removeEventListener(`connect`, this.#s),
        this.#n.removeEventListener(`disconnect`, this.#c),
        this.#r.dispose(),
        this.#i.dispose(),
        this.#a.dispose()
    }
}
  , Hl = class e {
    static BROWSER = globalThis.navigator !== void 0 && globalThis.navigator.usb ? new e(globalThis.navigator.usb) : void 0;
    #e;
    constructor(e) {
        this.#e = e
    }
    async requestDevice(e={}) {
        let t = Rl(e.filters);
        try {
            let n = await this.#e.requestDevice({
                filters: t,
                exclusionFilters: e.exclusionFilters
            })
              , r = Il(n, t, e.exclusionFilters);
            return r ? (this.#e.dispatchEvent(new USBConnectionEvent(`connect`,{
                device: n
            })),
            new Bl(n,r,this.#e)) : void 0
        } catch (e) {
            if (Ol(e, `NotFoundError`))
                return;
            throw e
        }
    }
    async getDevices(e={}) {
        let t = Rl(e.filters)
          , n = await this.#e.getDevices()
          , r = [];
        for (let i of n) {
            let n = Il(i, t, e.exclusionFilters);
            n && r.push(new Bl(i,n,this.#e))
        }
        return r
    }
    trackDevices(e={}) {
        return Vl.create(this.#e, e)
    }
}
;
function Ul() {
    return new Promise( (e, t) => {
        let n = indexedDB.open(`Tango`, 1);
        n.onerror = () => {
            t(n.error)
        }
        ,
        n.onupgradeneeded = () => {
            n.result.createObjectStore(`Authentication`, {
                autoIncrement: !0
            })
        }
        ,
        n.onsuccess = () => {
            let t = n.result;
            e(t)
        }
    }
    )
}
async function Wl(e) {
    let t = await Ul();
    return new Promise( (n, r) => {
        let i = t.transaction(`Authentication`, `readwrite`)
          , a = i.objectStore(`Authentication`).add(e);
        a.onerror = () => {
            r(a.error)
        }
        ,
        a.onsuccess = () => {
            n()
        }
        ,
        i.onerror = () => {
            r(i.error)
        }
        ,
        i.oncomplete = () => {
            t.close()
        }
    }
    )
}
async function Gl() {
    let e = await Ul();
    return new Promise( (t, n) => {
        let r = e.transaction(`Authentication`, `readonly`)
          , i = r.objectStore(`Authentication`).getAll();
        i.onerror = () => {
            n(i.error)
        }
        ,
        i.onsuccess = () => {
            t(i.result)
        }
        ,
        r.onerror = () => {
            n(r.error)
        }
        ,
        r.oncomplete = () => {
            e.close()
        }
    }
    )
}
var Kl = class {
    #e;
    constructor(e=`Tango`) {
        this.#e = e
    }
    async generateKey() {
        let {privateKey: e} = await crypto.subtle.generateKey({
            name: `RSASSA-PKCS1-v1_5`,
            modulusLength: 2048,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: `SHA-1`
        }, !0, [`sign`, `verify`])
          , t = new Uint8Array(await crypto.subtle.exportKey(`pkcs8`, e));
        return await Wl(t),
        {
            buffer: t,
            name: `${this.#e}@${globalThis.location.hostname}`
        }
    }
    async*iterateKeys() {
        for (let e of await Gl())
            yield{
                buffer: e,
                name: `${this.#e}@${globalThis.location.hostname}`
            }
    }
}
  , ql = `DONEDONE`
  , Jl = `FAILFAIL`
  , Yl = 65536
  , Xl = class {
    manager;
    device;
    adb;
    credentialStore = new Kl;
    observer;
    observerStopped = !1;
    banner;
    get isConnected() {
        return !!this.adb
    }
    get deviceName() {
        return this.device?.name
    }
    get deviceSerial() {
        return this.device?.serial
    }
    get deviceState() {
        return this.banner?.state
    }
    init() {
        this.manager = Hl.BROWSER
    }
    async initObserver() {
        if (!this.manager)
            throw Error(`AdbService not initialized`);
        this.observerStopped = !1;
        let e = await this.manager.trackDevices();
        return this.observerStopped ? e.stop() : this.observer = e,
        e
    }
    stopObserver() {
        this.observerStopped = !0,
        this.observer?.stop(),
        this.observer = void 0
    }
    async connect() {
        if (!this.manager)
            throw Error(`AdbService not initialized`);
        if (this.device = await this.manager.requestDevice(),
        !this.device)
            throw Error(`No device selected`);
        let e = await this.device.connect()
          , t = await Tl.authenticate({
            serial: this.device.serial,
            connection: e,
            credentialStore: this.credentialStore
        });
        return this.banner = t.banner,
        this.adb = new Yc(t),
        {
            name: this.device.name,
            serial: this.device.serial
        }
    }
    async disconnect() {
        try {
            await this.adb?.close()
        } finally {
            this.adb = void 0,
            this.banner = void 0,
            this.device = void 0
        }
    }
    async reboot(e) {
        if (!this.adb)
            throw Error(`Not connected`);
        await this.adb.power.reboot(e)
    }
    async sideload(e, t= () => {}
    ) {
        if (!this.adb)
            throw Error(`Not connected`);
        let n = await this.adb.createSocket(`sideload-host:${e.size}:${Yl}`)
          , r = n.readable.getReader()
          , i = n.writable.getWriter();
        try {
            let n = 0;
            for (; ; ) {
                let a = await r.read();
                if (a.done)
                    throw Error(`Reader unexpectedly ended`);
                let o = new TextDecoder(`ascii`).decode(a.value);
                if (o === ql)
                    break;
                if (o === Jl)
                    throw Error(`Sideload failed`);
                let s = parseInt(o)
                  , c = s * Yl;
                if (c > e.size)
                    throw Error(`adb: failed to read block ${s} at offset ${c}, past end ${e.size}`);
                let l = e.slice(c, Math.min(c + Yl, e.size));
                await i.write(new Uint8Array(await l.arrayBuffer())),
                n += l.size,
                t(Math.min(100, Math.floor(n / e.size * 100)))
            }
        } finally {
            try {
                await n.close()
            } catch {}
            await this.disconnect().catch( () => {}
            )
        }
    }
}
  , Zl = {
    class: `order-1 flex-none grow-0 self-stretch`
}
  , Ql = {
    key: 0,
    class: `rounded-2xl border border-black/25 p-4 dark:border-white/25`
}
  , $l = {
    class: `flex flex-wrap items-center gap-2`
}
  , eu = [`disabled`]
  , tu = [`disabled`]
  , nu = [`disabled`]
  , ru = {
    class: `flex flex-wrap items-center gap-3`
}
  , iu = {
    class: `btn btn-outline px-4 py-1.5`
}
  , au = {
    class: `min-w-0 flex-1`
}
  , ou = {
    key: 0,
    class: `truncate text-sm font-medium`
}
  , su = {
    key: 1,
    class: `text-base-content/60 text-xs`
}
  , cu = [`disabled`]
  , lu = {
    key: 1,
    class: `mb-4 w-full text-center`
}
  , uu = l({
    __name: `AdbClient`,
    props: {
        appendLog: {
            type: Function
        },
        updateLastLog: {
            type: Function
        }
    },
    setup(i) {
        let s = g(!1)
          , c = g(!1)
          , l = g(!1)
          , u = g(null)
          , d = g(null)
          , f = e(`fileInput`)
          , _ = new Xl
          , v = i;
        a(async () => {
            _.init();
            try {
                (await _.initObserver()).onDeviceRemove(async e => {
                    for (let t of e)
                        t.serial === _.deviceSerial && (await _.disconnect(),
                        s.value = !1,
                        v.appendLog(`Disconnected ${t.name} (${t.serial})`))
                }
                )
            } catch (e) {
                v.appendLog(`Device tracking unavailable: ${String(e)}`)
            }
        }
        ),
        o(async () => {
            _.stopObserver(),
            s.value = !1,
            await _.disconnect().catch( () => {}
            )
        }
        );
        async function y() {
            try {
                let {name: e, serial: t} = await _.connect();
                s.value = !0,
                v.appendLog(`Connected to ${e} (${t}) [${_.deviceState}]`)
            } catch (e) {
                let t = String(e);
                e instanceof Error && e.message === `The device is already in used by another program` && (t += ` (try adb kill-server)`),
                v.appendLog(`Connection failed: ${t}`)
            }
        }
        function x(e) {
            d.value = e.target.files?.[0] ?? null
        }
        async function S() {
            if (d.value) {
                c.value = !0;
                try {
                    v.appendLog(`serving: '${d.value.name}'  (~0%)`),
                    await _.sideload(d.value, e => {
                        v.updateLastLog(`serving: '${d.value.name}'  (~${e}%)`)
                    }
                    ),
                    v.updateLastLog(`serving: '${d.value.name}'  (~100%)`),
                    v.appendLog(`Sideload complete!`)
                } catch (e) {
                    v.appendLog(`Sideload failed: ${String(e)}`)
                } finally {
                    c.value = !1,
                    s.value = !1,
                    f.value && (f.value.value = ``),
                    d.value = null
                }
            }
        }
        async function C(e) {
            if (!l.value) {
                l.value = !0,
                u.value = e ?? `system`;
                try {
                    let t = e ?? `system`;
                    v.appendLog(`Rebooting device to ${t}...`),
                    await _.reboot(e),
                    v.appendLog(`Reboot command sent (${t}).`)
                } catch (e) {
                    v.appendLog(`Reboot failed: ${String(e)}`)
                } finally {
                    l.value = !1,
                    u.value = null,
                    s.value = !1
                }
            }
        }
        return (e, i) => (r(),
        m(`div`, Zl, [s.value ? (r(),
        m(`div`, Ql, [h(_).deviceState === `device` || h(_).deviceState === `recovery` ? (r(),
        m(b, {
            key: 0
        }, [i[3] ||= p(`div`, {
            class: `mb-2 text-xs font-semibold tracking-wide uppercase opacity-70`
        }, ` Device reboot `, -1), p(`div`, $l, [p(`button`, {
            class: `btn btn-outline px-4 py-1.5`,
            disabled: l.value,
            onClick: i[0] ||= e => C()
        }, n(u.value === `system` ? `Rebooting…` : `Reboot system`), 9, eu), p(`button`, {
            class: `btn btn-outline px-4 py-1.5`,
            disabled: l.value,
            onClick: i[1] ||= e => C(`recovery`)
        }, n(u.value === `recovery` ? `Rebooting…` : `Reboot recovery`), 9, tu), p(`button`, {
            class: `btn btn-outline px-4 py-1.5`,
            disabled: l.value,
            onClick: i[2] ||= e => C(`bootloader`)
        }, n(u.value === `bootloader` ? `Rebooting…` : `Reboot bootloader`), 9, nu)]), i[4] ||= p(`p`, {
            class: `mt-3 text-xs text-black/50 dark:text-white/50`
        }, [t(` To sideload a ZIP, reboot to recovery and select `), p(`code`, {
            class: `font-mono`
        }, `Apply update › Apply from ADB`), t(`, then reconnect. `)], -1)], 64)) : h(_).deviceState === `sideload` ? (r(),
        m(b, {
            key: 1
        }, [i[6] ||= p(`div`, {
            class: `mb-2 text-xs font-semibold tracking-wide uppercase opacity-70`
        }, `Sideload`, -1), p(`div`, ru, [p(`label`, iu, [i[5] ||= t(` Choose ZIP `, -1), p(`input`, {
            ref_key: `fileInput`,
            ref: f,
            type: `file`,
            accept: `.zip,application/zip`,
            class: `hidden`,
            onChange: x
        }, null, 544)]), p(`div`, au, [d.value ? (r(),
        m(`div`, ou, n(d.value.name), 1)) : (r(),
        m(`div`, su, `No ZIP selected`))]), p(`button`, {
            class: `btn btn-primary px-4 py-1.5`,
            disabled: c.value || !d.value,
            onClick: S
        }, n(c.value ? `Sideloading…` : `Sideload`), 9, cu)]), i[7] ||= p(`p`, {
            class: `mt-3 text-xs text-black/50 dark:text-white/50`
        }, ` Reboot options are unavailable in sideload mode. They will return once you reconnect in normal ADB mode. `, -1)], 64)) : te(``, !0)])) : (r(),
        m(`div`, lu, [p(`button`, {
            class: `btn btn-primary mx-auto px-4 py-1`,
            onClick: y
        }, `Connect`)]))]))
    }
})
  , du = 1256
  , fu = 26113
  , pu = 26717
  , mu = 26819
  , hu = {
    UsbConstants: {
        DeviceFilters: [{
            vendorId: du,
            productId: fu
        }, {
            vendorId: du,
            productId: pu
        }, {
            vendorId: du,
            productId: mu
        }]
    },
    SerialConstants: {
        PortFilters: [{
            usbVendorId: du,
            usbProductId: fu
        }, {
            usbVendorId: du,
            usbProductId: pu
        }, {
            usbVendorId: du,
            usbProductId: mu
        }]
    }
}
  , gu = {
    fromString(e, t) {
        let n = new TextEncoder().encode(e)
          , r = t ?? n.byteLength
          , i = new Uint8Array(r);
        return i.set(n.subarray(0, r)),
        i
    },
    toString(e) {
        let t = e.indexOf(0)
          , n = e.subarray(0, t === -1 ? e.length : t);
        return new TextDecoder().decode(n)
    }
}
  , Y = {
    FileIdentifier: 305436790,
    HeaderDataSize: 28,
    EntryDataSize: 132,
    PaddedSizeMultiplicand: 4096,
    PartitionNameMaxLength: 32,
    FlashFilenameMaxLength: 32,
    FotaFilenameMaxLength: 32
}
  , _u = class {
    binaryType = 0;
    deviceType = 0;
    identifier = 0;
    attributes = 1;
    updateAttributes = 1;
    blockSizeOrOffset = 0;
    blockCount = 0;
    fileOffset = 0;
    fileSize = 0;
    _partitionName;
    _flashFilename;
    _fotaFilename;
    constructor(e) {
        this._partitionName = new Uint8Array(Y.PartitionNameMaxLength),
        this._flashFilename = new Uint8Array(Y.FlashFilenameMaxLength),
        this._fotaFilename = new Uint8Array(Y.FotaFilenameMaxLength),
        e && Object.assign(this, e)
    }
    matches(e) {
        return e !== void 0 && this.binaryType === e.binaryType && this.deviceType === e.deviceType && this.identifier === e.identifier && this.attributes === e.attributes && this.updateAttributes === e.updateAttributes && this.blockSizeOrOffset === e.blockSizeOrOffset && this.blockCount === e.blockCount && this.fileOffset === e.fileOffset && this.fileSize === e.fileSize && this.partitionName === e.partitionName && this.flashFilename === e.flashFilename && this.fotaFilename === e.fotaFilename
    }
    get isFlashable() {
        return !!this.partitionName.trim()?.length
    }
    get partitionName() {
        return gu.toString(this._partitionName)
    }
    set partitionName(e) {
        this._partitionName = gu.fromString(e, Y.PartitionNameMaxLength)
    }
    get partitionSize() {
        return this.deviceType === 8 ? this.blockCount * 4096 : this.blockCount * 512
    }
    get flashFilename() {
        return gu.toString(this._flashFilename)
    }
    set flashFilename(e) {
        this._flashFilename = gu.fromString(e, Y.FlashFilenameMaxLength)
    }
    get fotaFilename() {
        return gu.toString(this._fotaFilename)
    }
    set fotaFilename(e) {
        this._fotaFilename = gu.fromString(e, Y.FotaFilenameMaxLength)
    }
}
  , vu = class {
    _fileType = new Uint8Array(8);
    _boardType = new Uint8Array(8);
    entryCount = 0;
    entries = [];
    lunCount = 0;
    matches(e) {
        return this.entryCount === e.entryCount && this.fileType === e.fileType && this.boardType === e.boardType && this.lunCount === e.lunCount && this.entries.every( (t, n) => t.matches(e.entries[n]))
    }
    clear() {
        this._fileType = new Uint8Array(8),
        this._boardType = new Uint8Array(8),
        this.lunCount = 0,
        this.entryCount = 0,
        this.entries = []
    }
    getDataSize() {
        return Y.HeaderDataSize + this.entries.length * Y.EntryDataSize
    }
    getPaddedSize() {
        let e = this.getDataSize();
        return Math.ceil(e / Y.PaddedSizeMultiplicand) * Y.PaddedSizeMultiplicand
    }
    unpackInteger(e, t) {
        return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
    }
    packInteger(e, t, n) {
        e[t] = n & 255,
        e[t + 1] = (n & 65280) >> 8,
        e[t + 2] = (n & 16711680) >> 16,
        e[t + 3] = (n & 4278190080) >> 24
    }
    unpackShort(e, t) {
        return e[t] | e[t + 1] << 8
    }
    packShort(e, t, n) {
        e[t] = n & 255,
        e[t + 1] = (n & 65280) >> 8
    }
    unpackCharArray(e, t, n) {
        return e.slice(t, t + n)
    }
    packCharArray(e, t, n) {
        e.set(n, t)
    }
    unpack(e) {
        if (this.unpackInteger(e, 0) !== Y.FileIdentifier || (this.entries = [],
        this.entryCount = this.unpackInteger(e, 4),
        Y.HeaderDataSize + this.entryCount * Y.EntryDataSize > e.length))
            return !1;
        this.entries = Array(this.entryCount),
        this._fileType = this.unpackCharArray(e, 8, 8),
        this._boardType = this.unpackCharArray(e, 16, 8),
        this.lunCount = this.unpackShort(e, 24);
        let t;
        for (let n = 0; n < this.entryCount; n++)
            t = Y.HeaderDataSize + n * Y.EntryDataSize,
            this.entries[n] = new _u({
                binaryType: this.unpackInteger(e, t),
                deviceType: this.unpackInteger(e, t + 4),
                identifier: this.unpackInteger(e, t + 8),
                attributes: this.unpackInteger(e, t + 12),
                updateAttributes: this.unpackInteger(e, t + 16),
                blockSizeOrOffset: this.unpackInteger(e, t + 20),
                blockCount: this.unpackInteger(e, t + 24),
                fileOffset: this.unpackInteger(e, t + 28),
                fileSize: this.unpackInteger(e, t + 32),
                _partitionName: this.unpackCharArray(e, t + 36, Y.PartitionNameMaxLength),
                _flashFilename: this.unpackCharArray(e, t + 36 + Y.PartitionNameMaxLength, Y.FlashFilenameMaxLength),
                _fotaFilename: this.unpackCharArray(e, t + 36 + Y.PartitionNameMaxLength + Y.FlashFilenameMaxLength, Y.FotaFilenameMaxLength)
            });
        return !0
    }
    pack(e) {
        this.packInteger(e, 0, Y.FileIdentifier),
        this.packInteger(e, 4, this.entryCount),
        this.packCharArray(e, 8, this._fileType),
        this.packCharArray(e, 16, this._boardType),
        this.packShort(e, 24, this.lunCount);
        let t;
        for (let n = 0; n < this.entryCount; n++) {
            t = Y.HeaderDataSize + n * Y.EntryDataSize;
            let r = this.entries[n];
            this.packInteger(e, t, r.binaryType),
            this.packInteger(e, t + 4, r.deviceType),
            this.packInteger(e, t + 8, r.identifier),
            this.packInteger(e, t + 12, r.attributes),
            this.packInteger(e, t + 16, r.updateAttributes),
            this.packInteger(e, t + 20, r.blockSizeOrOffset),
            this.packInteger(e, t + 24, r.blockCount),
            this.packInteger(e, t + 28, r.fileOffset),
            this.packInteger(e, t + 32, r.fileSize),
            this.packCharArray(e, t + 36, r._partitionName),
            this.packCharArray(e, t + 36 + Y.PartitionNameMaxLength, r._flashFilename),
            this.packCharArray(e, t + 36 + Y.PartitionNameMaxLength + Y.FlashFilenameMaxLength, r._fotaFilename)
        }
    }
    get fileType() {
        return gu.toString(this._fileType)
    }
    set fileType(e) {
        this._fileType = gu.fromString(e, this._fileType.length)
    }
    get boardType() {
        return gu.toString(this._boardType)
    }
    set boardType(e) {
        this._boardType = gu.fromString(e, this._boardType.length)
    }
    getEntry(e) {
        return this.entries[e]
    }
    findEntryByName(e) {
        return this.entries.find(t => t.isFlashable && t.partitionName === e)
    }
    findEntryByIdentifier(e) {
        return this.entries.find(t => t.isFlashable && t.identifier === e)
    }
}
  , yu = (e, ...t) => {
    e === `info` ? console.info(...t) : console.log(...t)
}
  , bu = class {
    size;
    data;
    _buffer;
    constructor(e) {
        this.size = e,
        this._buffer = new ArrayBuffer(e),
        this.data = new Uint8Array(this._buffer)
    }
}
  , xu = class extends bu {
    sizeVariable;
    receivedSize = -1;
    constructor(e, t=!1) {
        super(e),
        this.sizeVariable = t
    }
    unpackInteger(e) {
        return (this.data[e] | this.data[e + 1] << 8 | this.data[e + 2] << 16 | this.data[e + 3] << 24) >>> 0
    }
    unpack() {
        return Promise.reject(Error("Packet has not implemented the `unpack` method"))
    }
}
  , Su = class extends xu {
    responseType;
    constructor(e) {
        super(8),
        this.responseType = e
    }
    static get dataSize() {
        return 4
    }
    unpack() {
        let e = this.unpackInteger(0);
        return e === this.responseType ? Promise.resolve() : (this.responseType = e,
        Promise.reject(Error(`requested and received response types differ`)))
    }
}
  , Cu = class extends Su {
    constructor() {
        super(103)
    }
    async unpack() {
        await super.unpack()
    }
}
  , wu = class extends Su {
    constructor() {
        super(102)
    }
    async unpack() {
        await super.unpack()
    }
}
  , Tu = class extends Su {
    fileSize = 0;
    constructor() {
        super(101)
    }
    async unpack() {
        await super.unpack(),
        this.fileSize = this.unpackInteger(Su.dataSize)
    }
}
  , Eu = class e extends xu {
    fileSize = 0;
    static get dataSize() {
        return 500
    }
    constructor() {
        super(e.dataSize, !0)
    }
    async unpack() {}
}
  , Du = class extends Su {
    partIndex = -1;
    constructor() {
        super(0)
    }
    async unpack() {
        await super.unpack(),
        this.partIndex = this.unpackInteger(Su.dataSize)
    }
}
  , Ou = class extends Su {
    result = 0;
    constructor() {
        super(100)
    }
    async unpack() {
        await super.unpack(),
        this.result = this.unpackInteger(Su.dataSize)
    }
}
  , ku = class extends bu {
    constructor(e) {
        super(e)
    }
    packInteger(e, t) {
        this.data[e] = t & 255,
        this.data[e + 1] = (t & 65280) >> 8,
        this.data[e + 2] = (t & 16711680) >> 16,
        this.data[e + 3] = (t & 4278190080) >> 24
    }
    packShort(e, t) {
        this.data[e] = t & 255,
        this.data[e + 1] = (t & 65280) >> 8
    }
    pack() {
        throw Error("Packet has not implemented the `pack` method")
    }
}
  , Au = class extends ku {
    controlType;
    constructor(e) {
        super(1024),
        this.controlType = e
    }
    static get dataSize() {
        return 4
    }
    pack() {
        this.packInteger(0, this.controlType)
    }
}
  , ju = class extends Au {
    request;
    constructor(e) {
        super(100),
        this.request = e
    }
    static get dataSize() {
        return super.dataSize + 4
    }
    pack() {
        super.pack(),
        this.packInteger(Au.dataSize, this.request)
    }
}
  , Mu = class extends ju {
    constructor() {
        super(0)
    }
    static get dataSize() {
        return super.dataSize + 4
    }
    pack() {
        super.pack(),
        this.packInteger(ju.dataSize, 4)
    }
}
  , Nu = class extends ju {
    constructor() {
        super(1)
    }
}
  , Pu = class extends Au {
    request;
    constructor(e) {
        super(101),
        this.request = e
    }
    static get dataSize() {
        return super.dataSize + 4
    }
    pack() {
        super.pack(),
        this.packInteger(Au.dataSize, this.request)
    }
}
  , Fu = class extends Pu {
    partIndex;
    constructor(e) {
        super(2),
        this.partIndex = e
    }
    pack() {
        super.pack(),
        this.packInteger(Pu.dataSize, this.partIndex)
    }
}
  , Iu = class extends Au {
    request;
    constructor(e) {
        super(102),
        this.request = e
    }
    static get dataSize() {
        return super.dataSize + 4
    }
    pack() {
        super.pack(),
        this.packInteger(Au.dataSize, this.request)
    }
}
  , Lu = class extends Iu {
    destination;
    sequenceByteCount;
    binaryType;
    deviceType;
    constructor(e, t, n, r, i=!1) {
        super(i ? 7 : 3),
        this.destination = e,
        this.sequenceByteCount = t,
        this.binaryType = n,
        this.deviceType = r
    }
    static get dataSize() {
        return super.dataSize + 16
    }
    pack() {
        super.pack(),
        this.packInteger(Iu.dataSize, this.destination),
        this.packInteger(Iu.dataSize + 4, this.sequenceByteCount),
        this.packInteger(Iu.dataSize + 8, this.binaryType),
        this.packInteger(Iu.dataSize + 12, this.deviceType)
    }
}
  , Ru = class extends Lu {
    endOfFile;
    constructor(e, t, n, r, i=!1) {
        super(1, e, t, n, i),
        this.endOfFile = +!!r
    }
    pack() {
        super.pack(),
        this.packInteger(Lu.dataSize, this.endOfFile)
    }
}
  , zu = class extends Lu {
    fileIdentifier;
    endOfFile;
    constructor(e, t, n, r, i, a=!1) {
        super(0, e, t, n, a),
        this.fileIdentifier = r,
        this.endOfFile = +!!i
    }
    pack() {
        super.pack(),
        this.packInteger(Lu.dataSize, this.fileIdentifier),
        this.packInteger(Lu.dataSize + 4, this.endOfFile)
    }
}
  , Bu = class extends Pu {
    fileSize;
    constructor(e) {
        super(3),
        this.fileSize = e
    }
    pack() {
        super.pack(),
        this.packInteger(Pu.dataSize, this.fileSize)
    }
}
  , Vu = class extends Au {
    request;
    constructor(e) {
        super(103),
        this.request = e
    }
    pack() {
        super.pack(),
        this.packInteger(Au.dataSize, this.request)
    }
}
  , Hu = class extends ju {
    constructor() {
        super(7)
    }
}
  , Uu = class extends ju {
    filePartSize;
    constructor(e) {
        super(5),
        this.filePartSize = e
    }
    pack() {
        super.pack(),
        this.packInteger(ju.dataSize, this.filePartSize)
    }
}
  , Wu = class extends Iu {
    sequenceByteCount;
    constructor(e, t=!1) {
        super(t ? 6 : 2),
        this.sequenceByteCount = e
    }
    pack() {
        super.pack(),
        this.packInteger(Iu.dataSize, this.sequenceByteCount)
    }
}
  , Gu = class extends Pu {
    fileSize;
    constructor(e) {
        super(2),
        this.fileSize = e
    }
    pack() {
        super.pack(),
        this.packInteger(Pu.dataSize, this.fileSize)
    }
}
  , Ku = class extends ku {
    constructor(e, t) {
        super(t),
        this.data.set(e)
    }
    pack() {}
}
  , qu = class extends ju {
    fileTotalSize;
    constructor(e) {
        super(2),
        this.fileTotalSize = e
    }
    pack() {
        super.pack(),
        this.packInteger(ju.dataSize, this.fileTotalSize),
        this.packInteger(ju.dataSize + 4, Math.floor(this.fileTotalSize / 4294967296))
    }
}
  , X = (e, t, n) => {
    let r;
    return Promise.race([e, new Promise( (e, i) => {
        r = setTimeout( () => i(Error(t)), n)
    }
    )]).finally( () => clearTimeout(r))
}
;
function Ju(e, t, n) {
    let r = i => {
        t(i) && (n(),
        e.removeEventListener(`disconnect`, r))
    }
    ;
    e.addEventListener(`disconnect`, r)
}
var Yu = 10
  , Xu = class {
    device;
    outEndpointNum = -1;
    inEndpointNum = -1;
    _orphanedReceive;
    constructor(e) {
        this.device = e
    }
    async connect(e) {
        if (await X(this.device.open(), `[connect] unable to open device handle`, e),
        this.device.configuration || await X(this.device.selectConfiguration(1), `[connect] unable to select device configuration`, e),
        !this.device.configuration)
            throw Error(`Unable to select the proper configuration`);
        let t = -1
          , n = -1;
        for (let e of this.device.configuration.interfaces) {
            for (let t of e.alternates) {
                let e = t.endpoints.find(e => e.direction === `out`)?.endpointNumber ?? -1
                  , r = t.endpoints.find(e => e.direction === `in`)?.endpointNumber ?? -1;
                if (t.endpoints.length === 2 && t.interfaceClass === Yu && e !== -1 && r !== -1) {
                    n = t.alternateSetting,
                    this.outEndpointNum = e,
                    this.inEndpointNum = r;
                    break
                }
            }
            if (n !== -1) {
                t = e.interfaceNumber;
                break
            }
        }
        if (this.outEndpointNum === -1 || this.inEndpointNum === -1)
            throw Error(`Unable to locate the bulk command endpoints`);
        await X(this.device.claimInterface(t), `[connect] unable to claim device interface`, e),
        n !== 0 && await X(this.device.selectAlternateInterface(t, n), `[connect] unable to select device's ODIN interface`, e)
    }
    async send(e, t) {
        let n = await X(this.device.transferOut(this.outEndpointNum, e), `[device] unable to send packet`, t);
        if (n.status !== `ok`)
            throw Error(`transmit status ${n.status}`)
    }
    async receive(e, t) {
        let n = this._orphanedReceive;
        if (n) {
            this._orphanedReceive = void 0;
            let e;
            try {
                e = await X(n, `[device] unable to receive packet from device`, t)
            } catch (e) {
                throw this._orphanedReceive = n,
                e
            }
            if (e.data !== void 0 && e.data.byteLength > 0)
                return Zu(e)
        }
        return Zu(await X(this.device.transferIn(this.inEndpointNum, e), `[device] unable to receive packet from device`, t))
    }
    async emptyReceive(e, t) {
        let n = this._orphanedReceive ?? this.device.transferIn(this.inEndpointNum, e);
        this._orphanedReceive = void 0;
        try {
            await X(n, `[device] device did not respond to empty receive`, t)
        } catch {
            this._orphanedReceive = n
        }
    }
    async reset(e) {
        await X(this.device.reset(), `[device] unable to reset device`, e)
    }
    async close(e) {
        await X(this.device.close(), `[close] unable to close device`, e)
    }
    onDisconnect(e) {
        Ju(navigator.usb, e => e.device === this.device, e)
    }
}
;
function Zu(e) {
    if (e.data === void 0 || e.status !== `ok`)
        throw Error(`receive failed with status ${e.status}`);
    let t = e.data
      , n = new Uint8Array(t.byteLength);
    return n.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),
    n
}
var Qu = 407708164
  , $u = {
    4: 64 * 1024,
    5: 256 * 1024,
    6: 1024 * 1024,
    7: 4 * 1024 * 1024
};
function ed(e) {
    return e.length < 4 ? !1 : new DataView(e.buffer,e.byteOffset,e.byteLength).getUint32(0, !0) === Qu
}
function td(e) {
    if (!ed(e))
        throw Error(`Not a valid LZ4 frame`);
    if (e.length < 15)
        throw Error(`LZ4 frame header is truncated`);
    let t = new DataView(e.buffer,e.byteOffset,e.byteLength)
      , n = e[4]
      , r = n >> 6 & 3;
    if (r !== 1)
        throw Error(`Unsupported LZ4 version: ${r}`);
    let i = (n >> 5 & 1) == 1
      , a = (n >> 4 & 1) == 1
      , o = (n >> 3 & 1) == 1
      , s = (n & 1) == 1;
    if (!o)
        throw Error(`LZ4 content size must be enabled`);
    if (a)
        throw Error(`LZ4 block checksum must be disabled`);
    if (!i)
        throw Error(`LZ4 block independence must be enabled`);
    let c = e[5] >> 4 & 7
      , l = $u[c];
    if (!l)
        throw Error(`Invalid block max size code: ${c}`);
    let u = t.getUint32(10, !0) * 4294967296 + t.getUint32(6, !0)
      , d = 14;
    return s && (d += 4),
    d += 1,
    {
        contentSize: u,
        blockMaxSize: l,
        headerLength: d
    }
}
function nd(e, t) {
    let n = new Uint8Array(t)
      , r = 0
      , i = 0;
    for (; r < e.length; ) {
        let t = e[r++]
          , a = t >> 4;
        if (a === 15) {
            let t;
            do
                t = e[r++],
                a += t;
            while (t === 255)
        }
        if (i + a > n.length)
            throw Error(`LZ4 block exceeds max decompressed size`);
        if (n.set(e.subarray(r, r + a), i),
        r += a,
        i += a,
        r >= e.length)
            break;
        let o = e[r] | e[r + 1] << 8;
        if (r += 2,
        o === 0 || o > i)
            throw Error(`Invalid LZ4 block match offset`);
        let s = (t & 15) + 4;
        if ((t & 15) == 15) {
            let t;
            do
                t = e[r++],
                s += t;
            while (t === 255)
        }
        if (i + s > n.length)
            throw Error(`LZ4 block exceeds max decompressed size`);
        let c = i - o;
        for (let e = 0; e < s; e++)
            n[i++] = n[c++]
    }
    return n.subarray(0, i)
}
function rd(e, t) {
    let n = new DataView(e.buffer,e.byteOffset,e.byteLength)
      , r = []
      , i = 0
      , a = 0;
    for (; i + 4 <= e.length; ) {
        let o = n.getUint32(i, !0);
        i += 4;
        let s = o & 2147483647
          , c = e.subarray(i, i + s);
        i += s;
        let l = o & 2147483648 ? c : nd(c, t);
        r.push(l),
        a += l.length
    }
    let o = new Uint8Array(a)
      , s = 0;
    for (let e of r)
        o.set(e, s),
        s += e.length;
    return o
}
async function *id(e, t, n) {
    let r = t.contentSize
      , i = t.headerLength
      , a = !1;
    for (; !a; ) {
        let o = Math.min(r, n);
        r -= o;
        let s = 0
          , c = i;
        for (; ; ) {
            if (c + 4 > e.size) {
                a = !0;
                break
            }
            let n = new Uint8Array(await e.slice(c, c + 4).arrayBuffer())
              , r = new DataView(n.buffer).getUint32(0, !0);
            if (r === 0) {
                a = !0;
                break
            }
            if (s += t.blockMaxSize,
            c += 4 + (r & 2147483647),
            c > e.size) {
                c = e.size,
                a = !0;
                break
            }
            if (s >= o)
                break
        }
        if (c === i)
            return;
        yield{
            decompressedSize: o,
            data: e.slice(i, c)
        },
        i = c
    }
}
var ad = 3e3
  , od = 100
  , sd = {
    logging: !1,
    timeout: 5e3,
    resetOnInit: !1
};
function cd(e) {
    return `transferIn`in e && typeof e.transferIn == `function`
}
var ld = class {
    transport;
    deviceOptions;
    _devicePit;
    _flashTimeout = 3e4;
    _flashSequence = 800;
    _flashPacketSize = 131072;
    _flashSessionStarted = !1;
    _lz4Supported = !1;
    constructor(e, t) {
        this.transport = cd(e) ? new Xu(e) : e,
        this.deviceOptions = {
            ...sd,
            ...t
        }
    }
    get usbDevice() {
        return this.transport instanceof Xu ? this.transport.device : void 0
    }
    get lz4Supported() {
        return this._lz4Supported
    }
    _log(e, ...t) {
        e === `debug` && !this.deviceOptions.logging || (this.deviceOptions.logger ?? yu)(e, ...t)
    }
    onDisconnect(e) {
        this.transport.onDisconnect( () => {
            e(),
            this._flashSessionStarted = !1
        }
        )
    }
    async initialize() {
        try {
            await this.transport.connect(this.deviceOptions.timeout)
        } catch (e) {
            throw this._log(`debug`, e),
            Error(`Unable to open and claim device`, {
                cause: e
            })
        }
        return this.handshake()
    }
    async handshake() {
        let e = `ODIN`;
        this.deviceOptions.resetOnInit && await this.transport.reset(this.deviceOptions.timeout),
        await this.transport.send(gu.fromString(e), this.deviceOptions.timeout),
        this._log(`debug`, `sent: ${e}`);
        let t = await this.transport.receive(4, this.deviceOptions.timeout)
          , n = gu.toString(t);
        if (this._log(`debug`, `received: ${n}`),
        n !== `LOKE`)
            throw Error(`handshake challenge mismatch`)
    }
    async close() {
        await this.transport.close(this.deviceOptions.timeout)
    }
    async requestDeviceType() {
        await this.sendPacket(new Nu),
        await this.receivePacket(Ou)
    }
    async beginSession(e=!1) {
        if (this._flashSessionStarted && !e)
            return;
        await this.sendPacket(new Mu);
        let t = (await this.receivePacket(Ou)).result;
        this._lz4Supported = (t & 32768) != 0,
        await new Promise(e => setTimeout(e, ad)),
        t !== 0 && (this._flashTimeout = 12e4,
        await this.setFlashPacketSize(1048576, 30)),
        this._flashSessionStarted = !0
    }
    async setFlashPacketSize(e, t) {
        await this.sendPacket(new Uu(e));
        let n = await this.receivePacket(Ou);
        if (n.result !== 0)
            throw Error(`Unexpected file part size response!, Expected: 0, Received: ${n.result}`);
        this._flashPacketSize = e,
        this._flashSequence = t
    }
    async setFlashTotalSize(e) {
        await this.sendPacket(new qu(e));
        let t = await this.receivePacket(Ou);
        if (t.result !== 0)
            throw Error(`Unexpected file part size response!, Expected: 0, Received: ${t.result}`)
    }
    async endSession(e=!1, t=!1) {
        !this._flashSessionStarted && !t || (await this.sendPacket(new Vu(+!!e)),
        await this.receivePacket(Cu),
        this._flashSessionStarted = !1)
    }
    async reboot() {
        await this.endSession(!0, !0)
    }
    async getPitData() {
        await this.sendPacket(new Pu(1));
        let e = (await this.receivePacket(Tu)).fileSize
          , t = Math.ceil(e / Eu.dataSize)
          , n = new ArrayBuffer(e)
          , r = new Uint8Array(n)
          , i = 0;
        for (let n = 0; n < t; n++) {
            this._log(`debug`, `getPitData: sending partial packet ${n + 1} of ${t}`),
            await this.sendPacket(new Fu(n));
            let a = Math.min(Eu.dataSize, e - i)
              , o = await this.receivePacket(Eu, void 0, a);
            r.set(o.data, i),
            i += o.receivedSize
        }
        await this._emptyReceive();
        try {
            await this.sendPacket(new Pu(3)),
            await this.receivePacket(Tu)
        } catch {
            this._log(`info`, `getPitData: failed to fully end PIT transfer session, continuing anyways...`)
        }
        let a = new vu;
        return a.unpack(r),
        this._devicePit = a,
        a
    }
    async flashPit(e) {
        await this.beginSession();
        let t;
        e instanceof vu ? (t = new Uint8Array(e.getDataSize()),
        e.pack(t)) : t = new Uint8Array(await e.arrayBuffer());
        let n = t.byteLength
          , r = !1;
        try {
            await this.sendPacket(new Pu(0)),
            await this.receivePacket(Tu),
            await this.sendPacket(new Gu(n)),
            await this.receivePacket(Tu),
            await this.sendPacket(new Ku(t,n)),
            await this.receivePacket(Tu),
            await this.sendPacket(new Bu(n)),
            await this.receivePacket(Tu),
            r = !0
        } finally {
            delete this._devicePit,
            await (r ? this.endSession() : this.endSession().catch( () => {}
            ))
        }
    }
    async flashPartition(e, t) {
        await this.beginSession(),
        this._devicePit || await this.getPitData();
        let n = this._devicePit?.findEntryByName(e);
        if (!n)
            throw Error(`flashPartition: device PIT does not have a partition named ${e}`);
        let r = new Uint8Array(await t.slice(0, 32).arrayBuffer())
          , i = !1;
        try {
            if (ed(r)) {
                let e = td(r);
                await this.setFlashTotalSize(e.contentSize),
                await this.sendLz4File(t, n.binaryType, n.deviceType, n.identifier)
            } else
                await this.setFlashTotalSize(t.size),
                await this.sendFile(t, n.binaryType, n.deviceType, n.identifier);
            i = !0
        } finally {
            await (i ? this.endSession() : this.endSession().catch( () => {}
            ))
        }
    }
    async eraseUserdata() {
        await this.sendPacket(new Hu),
        await this.receivePacket(Ou)
    }
    async sendFile(e, t, n, r) {
        await this.sendPacket(new Iu(0)),
        await this.receivePacket(wu);
        let i = e.size
          , a = this._flashSequence * this._flashPacketSize
          , o = Math.ceil(i / a);
        for (let s = 0; s < o; s++) {
            this._log(`info`, `sending sequence ${s + 1} of ${o}`);
            let c = s * a
              , l = e.slice(c, Math.min(c + a, i))
              , u = s === o - 1;
            await this._sendFileSequence(l, l.size, t, n, r, u, !1)
        }
    }
    async sendLz4File(e, t, n, r) {
        let i = td(new Uint8Array(await e.slice(0, 32).arrayBuffer()))
          , a = this._lz4Supported && i.blockMaxSize === 1024 * 1024;
        await this.sendPacket(new Iu(a ? 5 : 0)),
        await this.receivePacket(wu);
        let o = await Array.fromAsync(id(e, i, this._flashSequence * this._flashPacketSize));
        for (let e = 0; e < o.length; e++) {
            this._log(`info`, `sending sequence ${e + 1} of ${o.length}`);
            let {decompressedSize: s} = o[e]
              , {data: c} = o[e]
              , l = e === o.length - 1;
            if (!a && (c = new Blob([new Uint8Array(rd(new Uint8Array(await c.arrayBuffer()), i.blockMaxSize))]),
            c.size !== s))
                throw Error(`Expected decompressed sequence size: ${s} Received: ${c.size}`);
            await this._sendFileSequence(c, s, t, n, r, l, a)
        }
    }
    async _sendFileSequence(e, t, n, r, i, a, o) {
        await this.sendPacket(new Wu(e.size,o), void 0, this._flashTimeout),
        await this.receivePacket(wu, this._flashTimeout);
        let s = Math.ceil(e.size / this._flashPacketSize);
        for (let t = 0; t < s; t++) {
            this._log(`info`, `sending part ${t + 1} of ${s}`);
            let n = t * this._flashPacketSize
              , r = new Uint8Array(await e.slice(n, n + this._flashPacketSize).arrayBuffer());
            await this.sendPacket(new Ku(r,this._flashPacketSize), t === 0 ? 0 : 1, this._flashTimeout);
            let i = (await this.receivePacket(Du, this._flashTimeout)).partIndex;
            if (i !== t)
                throw Error(`Expected file part index: ${t} Received: ${i}`)
        }
        let c = n === 1 ? new Ru(t,n,r,a,o) : new zu(t,n,r,i,a,o);
        await this.sendPacket(c, 3, this._flashTimeout),
        await this.receivePacket(wu, this._flashTimeout)
    }
    async sendPacket(e, t, n) {
        e.pack(),
        this._log(`debug`, `sending`, e),
        t === void 0 && (t = 2),
        t & 1 && await this.transport.send(new Uint8Array, od).catch( () => {}
        ),
        await this.transport.send(e.data, n ?? this.deviceOptions.timeout),
        t & 2 && await this.transport.send(new Uint8Array, od).catch( () => {}
        ),
        this._log(`debug`, `sendPacket sent`, e)
    }
    async receivePacket(e, t, n) {
        let r = new e
          , i = await this.transport.receive(n ?? r.size, t ?? this.deviceOptions.timeout);
        if (this._log(`debug`, `received packet`, r),
        i.byteLength !== r.size && !r.sizeVariable)
            throw Error(`incorrect size received`);
        return r.data = i,
        r.receivedSize = i.byteLength,
        await r.unpack(),
        r
    }
    async _emptyReceive(e) {
        await this.transport.emptyReceive(1024, e ?? od)
    }
}
  , ud = 115200
  , dd = 4096
  , fd = class {
    port;
    _reader;
    _writer;
    _chunks = [];
    _chunkOffset = 0;
    _available = 0;
    _pendingRead;
    constructor(e) {
        this.port = e
    }
    async connect(e) {
        await X(this.port.open({
            baudRate: ud,
            bufferSize: dd
        }), `[connect] unable to open serial port`, e);
        try {
            await this.port.setSignals({
                dataTerminalReady: !0
            })
        } catch {}
        if (!this.port.readable || !this.port.writable)
            throw Error(`serial port did not expose readable/writable streams`);
        this._reader = this.port.readable.getReader(),
        this._writer = this.port.writable.getWriter()
    }
    async send(e, t) {
        if (!this._writer)
            throw Error(`serial port is not open`);
        await X(this._writer.write(e), `[device] unable to send packet`, t)
    }
    async receive(e, t) {
        for (; this._available < e; )
            this._append(await this._readChunk(t));
        let n = new Uint8Array(e)
          , r = 0;
        for (; r < e; ) {
            let t = this._chunks[0]
              , i = t.length - this._chunkOffset
              , a = Math.min(i, e - r);
            n.set(t.subarray(this._chunkOffset, this._chunkOffset + a), r),
            r += a,
            a === i ? (this._chunks.shift(),
            this._chunkOffset = 0) : this._chunkOffset += a
        }
        return this._available -= e,
        n
    }
    async emptyReceive(e, t) {
        try {
            this._append(await this._readChunk(t))
        } catch {}
    }
    reset() {
        return Promise.resolve()
    }
    async close(e) {
        if (this._reader) {
            try {
                await this._reader.cancel()
            } catch {}
            this._reader.releaseLock(),
            this._reader = void 0
        }
        if (this._writer) {
            try {
                this._writer.releaseLock()
            } catch {}
            this._writer = void 0
        }
        this._pendingRead = void 0,
        this._chunks = [],
        this._chunkOffset = 0,
        this._available = 0,
        await X(this.port.close(), `[close] unable to close serial port`, e)
    }
    onDisconnect(e) {
        Ju(navigator.serial, e => e.target === this.port, e)
    }
    async _readChunk(e) {
        if (!this._reader)
            throw Error(`serial port is not open`);
        let t = this._pendingRead ?? this._reader.read();
        this._pendingRead = t;
        let n = await X(t, `[device] timed out waiting for serial data`, e);
        if (this._pendingRead = void 0,
        n.done)
            throw Error(`serial stream closed`);
        return n.value
    }
    _append(e) {
        e.length !== 0 && (this._chunks.push(e),
        this._available += e.length)
    }
}
  , pd = {
    requestDevice: async function(e) {
        return navigator.usb ? navigator.usb.requestDevice({
            filters: hu.UsbConstants.DeviceFilters
        }).then(t => new ld(t,e)) : Promise.reject(Error(`Browser missing WebUSB feature`))
    },
    requestSerialDevice: async function(e) {
        return navigator.serial ? new ld(new fd(await navigator.serial.requestPort({
            filters: hu.SerialConstants.PortFilters
        })),e) : Promise.reject(Error(`Browser missing Web Serial feature`))
    }
}
  , md = {
    class: `order-1 flex-none grow-0 self-stretch`
}
  , hd = [`placeholder`, `disabled`]
  , gd = {
    class: `mb-4 justify-center`
}
  , _d = {
    class: `mb-4 w-full text-center`
}
  , vd = {
    class: `mt-2 flex justify-center gap-2 text-xs text-black/60 dark:text-white/70`
}
  , yd = l({
    __name: `OdinClient`,
    props: {
        appendLog: {
            type: Function
        },
        clearLog: {
            type: Function
        },
        active: {
            type: Boolean
        }
    },
    setup(t) {
        let i = g(!1)
          , a = g(!1)
          , s = g(null)
          , c = g(fe() ? `webserial` : `webusb`)
          , l = g(``)
          , h = g(`idle`)
          , b = g(``)
          , x = g(!1)
          , S = g(null)
          , te = g(null);
        d(b, e => {
            let t = e.toUpperCase();
            t !== e && (b.value = t)
        }
        );
        let ie = e(`flashImageInput`)
          , ae = e(`inputRef`)
          , D = t
          , oe = _( () => h.value === `flash`)
          , k = _( () => h.value === `awaiting-flash`)
          , A = _( () => c.value === `webusb` ? `WebUSB` : `Web Serial`)
          , ce = _( () => c.value === `webusb` ? `Web Serial` : `WebUSB`);
        function le() {
            c.value = c.value === `webusb` ? `webserial` : `webusb`
        }
        let ue = _( () => {
            switch (h.value) {
            case `flash`:
                return `Partition name (e.g. RECOVERY)`;
            case `awaiting-flash`:
                return `Drop image for "${l.value}" here, or click to browse...`;
            default:
                return `Click an action below`
            }
        }
        )
          , de = _( () => {
            let e = S.value;
            return e ? `Flash ${e.file.name} to partition ${e.partition}?` : ``
        }
        );
        o( () => {
            i.value = !1,
            a.value = !1,
            s.value = null,
            l.value = ``,
            te.value = null
        }
        );
        function fe() {
            let e = navigator.userAgentData?.platform ?? navigator.platform ?? navigator.userAgent;
            return /win/i.test(e)
        }
        async function pe() {
            try {
                let e = {
                    logging: !1,
                    timeout: 15e3,
                    logger: (e, ...t) => D.appendLog([...t].join(` `))
                }
                  , t = c.value === `webserial` ? await pd.requestSerialDevice(e) : await pd.requestDevice(e);
                await t.initialize(),
                D.clearLog(),
                s.value = t,
                i.value = !0,
                t.onDisconnect( () => {
                    i.value = !1,
                    a.value = !1,
                    s.value = null,
                    te.value = null,
                    h.value = `idle`
                }
                ),
                await he(),
                a.value = !0
            } catch (e) {
                D.appendLog(String(e))
            }
        }
        function me(e) {
            let t = [`PIT — board: ${e.boardType}`];
            for (let n of e.entries) {
                if (!n.isFlashable)
                    continue;
                let e = n.flashFilename && n.flashFilename !== `-` ? ` (${n.flashFilename})` : ``
                  , r = O(n.partitionSize);
                t.push(`  [${n.identifier}] ${n.partitionName}${e} — ${r}`)
            }
            return t.join(`
`)
        }
        async function he() {
            let e = s.value;
            if (!e)
                return;
            await e.beginSession();
            let t = await e.getPitData();
            te.value = t,
            D.appendLog(me(t))
        }
        function ge() {
            h.value = `flash`,
            b.value = ``,
            v( () => ae.value?.focus())
        }
        function _e() {
            let e = b.value.trim().toUpperCase();
            if (!e)
                return;
            let t = te.value?.entries.find(t => t.isFlashable && t.partitionName.toUpperCase() === e);
            if (!t) {
                D.appendLog(`Unknown partition "${e}".`);
                return
            }
            l.value = t.partitionName,
            b.value = ``,
            h.value = `awaiting-flash`
        }
        function ve(e) {
            let t = e?.currentTarget;
            if (!t)
                return;
            let n = t.files?.[0];
            t.value = ``,
            !(!n || !l.value) && (S.value = {
                file: n,
                partition: l.value
            })
        }
        async function ye() {
            let e = S.value;
            e && (S.value = null,
            l.value = ``,
            h.value = `idle`,
            D.appendLog(`${e.partition} upload start`),
            await s.value?.flashPartition(e.partition, e.file),
            D.appendLog(`${e.partition} upload successful`))
        }
        async function be() {
            await s.value?.reboot()
        }
        function xe() {
            h.value === `flash` && _e()
        }
        function Se() {
            S.value = null,
            h.value = `idle`
        }
        async function Ce() {
            await ye()
        }
        function we() {
            h.value === `awaiting-flash` && ie.value?.click()
        }
        function Te() {
            x.value = !0
        }
        function Ee() {
            x.value = !1
        }
        function De(e) {
            if (x.value = !1,
            !k.value)
                return;
            let t = e.dataTransfer?.files?.[0];
            t && (S.value = {
                file: t,
                partition: l.value
            })
        }
        return (e, o) => (r(),
        m(`div`, md, [(r(),
        C(y, {
            to: `#odin-input-footer`,
            defer: ``,
            disabled: !t.active
        }, [f(p(`div`, {
            class: ee([`flex items-center border-t border-black/10 bg-gray-200 px-6 transition-colors md:px-4 dark:border-white/10 dark:bg-black`, {
                "bg-brand-primary/10! dark:bg-brand-primary/10!": x.value,
                "cursor-pointer": k.value
            }]),
            onDragover: E(Te, [`prevent`]),
            onDragleave: E(Ee, [`prevent`]),
            onDrop: E(De, [`prevent`]),
            onClick: we
        }, [p(`span`, {
            class: ee([`font-mono select-none`, h.value === `idle` ? `text-black/25 dark:text-white/25` : `text-black/85 dark:text-white/85`])
        }, `$`, 2), f(p(`input`, {
            ref_key: `inputRef`,
            ref: ae,
            "onUpdate:modelValue": o[0] ||= e => b.value = e,
            class: ee([`w-full bg-transparent p-2 font-mono outline-none`, oe.value ? `text-black/85 dark:text-white/85` : `pointer-events-none text-black/40 dark:text-white/40`]),
            type: `text`,
            placeholder: ue.value,
            disabled: !oe.value,
            onKeyup: [ne(xe, [`enter`]), o[1] ||= ne(e => h.value = `idle`, [`esc`])]
        }, null, 42, hd), [[re, b.value]])], 34), [[T, a.value]])], 8, [`disabled`])), f(p(`div`, gd, [p(`div`, {
            class: `flex flex-wrap`
        }, [p(`button`, {
            class: `btn mr-3 mb-3 px-4 py-1`,
            onClick: ge
        }, `Flash partition`), p(`button`, {
            class: `btn mr-3 mb-3 px-4 py-1`,
            onClick: be
        }, `Reboot`)]), p(`input`, {
            ref_key: `flashImageInput`,
            ref: ie,
            class: `hidden`,
            type: `file`,
            onChange: ve
        }, null, 544)], 512), [[T, a.value]]), f(p(`div`, _d, [p(`button`, {
            class: `btn btn-primary mx-auto px-4 py-1`,
            onClick: pe
        }, `Connect`), o[2] ||= p(`div`, {
            class: `mt-3 flex justify-center text-sm`
        }, `Reboot to download mode before connecting.`, -1), p(`div`, vd, [p(`span`, null, `Using ` + n(A.value), 1), p(`button`, {
            class: `cursor-pointer underline`,
            onClick: le
        }, ` Use ` + n(ce.value) + ` instead `, 1)])], 512), [[T, !i.value]]), w(se, {
            open: S.value !== null,
            title: de.value,
            "confirm-label": `Flash`,
            "cancel-label": `Cancel`,
            onCancel: Se,
            onConfirm: Ce
        }, {
            default: u( () => [...o[3] ||= [p(`p`, null, `This will overwrite the current partition contents.`, -1)]]),
            _: 1
        }, 8, [`open`, `title`])]))
    }
})
  , bd = [{
    vendorId: 7054,
    productId: 49155
}]
  , Z = {
    WRITE_MEM: 1,
    READ_MEM: 2,
    FILL_MEM: 3,
    MODIFY_MEM: 4,
    RUN_IN_ADDR: 5,
    WRITE_AUX: 6,
    READ_AUX: 7,
    WR_LARGE_MEM: 17,
    RD_LARGE_MEM: 18,
    IDENTIFY_HOST: 32,
    TPL_CMD: 48,
    TPL_STAT: 49,
    WRITE_MEDIA: 50,
    READ_MEDIA: 51,
    BULKCMD: 52,
    PASSWORD: 53,
    NOP: 54,
    GET_AMLC: 80,
    WRITE_AMLC: 96
}
  , xd = 65535
  , Sd = 16384
  , Cd = 65536
  , wd = 65536
  , Q = class extends Error {
    constructor(e, t) {
        super(e, t),
        this.name = new.target.name
    }
}
  , Td = class extends Q {
    command;
    response;
    constructor(e, t, n) {
        super(`${e} command '${t}' failed: '${n}'`),
        this.command = t,
        this.response = n
    }
}
  , Ed = class extends Td {
    constructor(e, t) {
        super(`bulk`, e, t)
    }
}
  , Dd = class extends Td {
    constructor(e, t) {
        super(`TPL`, e, t)
    }
}
  , Od = class extends Q {
    seq;
    attempts;
    constructor(e, t, n) {
        super(`media write failed at block ${e} after ${t} attempts`, n),
        this.seq = e,
        this.attempts = t
    }
}
  , kd = class extends Q {
    constructor() {
        super(`the WebUSB grant was dropped on re-enumeration (serial-less device); prompt the user with requestDevice() to reacquire it`)
    }
}
  , Ad = class extends Q {
}
  , jd = class extends Q {
}
  , Md = class extends Q {
}
;
function Nd(e) {
    let t = new Uint8Array(e.length);
    for (let n = 0; n < e.length; n++)
        t[n] = e.charCodeAt(n);
    return t
}
function Pd(e) {
    let t = e.indexOf(0)
      , n = t === -1 ? e.length : t;
    return new TextDecoder().decode(e.subarray(0, n))
}
function Fd(e, t=0) {
    let n = new Uint8Array(Math.max(e.length * 4, t))
      , r = new DataView(n.buffer);
    return e.forEach( (e, t) => r.setUint32(t * 4, e, !0)),
    n
}
function Id(e, t=0) {
    return new DataView(e.buffer,e.byteOffset,e.byteLength).getUint32(t, !0)
}
function Ld(e) {
    let t = new Uint8Array(e.reduce( (e, t) => e + t.length, 0))
      , n = 0;
    for (let r of e)
        t.set(r, n),
        n += r.length;
    return t
}
function Rd(e) {
    return {
        value: e >>> 16,
        index: e & 65535
    }
}
function zd(e) {
    if (e.length + 1 >= 128)
        throw new Q(`command must be shorter than 127 characters`);
    let t = new Uint8Array(e.length + 1);
    return t.set(Nd(e)),
    t
}
function Bd(e, t) {
    let n = new Uint8Array(16)
      , r = new DataView(n.buffer);
    return r.setUint32(0, e, !0),
    r.setUint32(4, t, !0),
    n
}
function Vd(e, t, n, r, i) {
    let a = new Uint8Array(32)
      , o = new DataView(a.buffer);
    return o.setUint32(0, e, !0),
    o.setUint32(4, t, !0),
    o.setUint32(8, n, !0),
    o.setUint32(12, r, !0),
    o.setUint16(16, 239, !0),
    o.setUint16(18, i, !0),
    a
}
function Hd(e, t) {
    let n = new Uint8Array(16);
    return n.set([65, 77, 76, 83]),
    n[4] = e,
    new DataView(n.buffer).setUint32(8, t, !0),
    n
}
function Ud(e) {
    if (e.length < 16 || !Gd(e, `AMLC`))
        throw new Ad(`invalid AMLC request: '${Kd(e.slice(0, 16))}'`);
    let t = new DataView(e.buffer,e.byteOffset,e.byteLength);
    return {
        length: t.getUint32(8, !0),
        offset: t.getUint32(12, !0)
    }
}
function Wd() {
    let e = new Uint8Array(16);
    return e.set([79, 75, 65, 89]),
    e
}
function Gd(e, t) {
    if (e.length < t.length)
        return !1;
    for (let n = 0; n < t.length; n++)
        if (e[n] !== t.charCodeAt(n))
            return !1;
    return !0
}
function Kd(e) {
    return Pd(e)
}
var $ = class e {
    raw;
    static STAGE_MINOR_IPL = 0;
    static STAGE_MINOR_SPL = 8;
    static STAGE_MINOR_TPL = 16;
    constructor(e) {
        if (this.raw = e,
        e.length < 4)
            throw new Q(`identify response too short (${e.length} bytes)`)
    }
    get major() {
        return this.raw[0]
    }
    get minor() {
        return this.raw[1]
    }
    get stageMajor() {
        return this.raw[2]
    }
    get stageMinor() {
        return this.raw[3]
    }
    get supportsPassword() {
        return this.raw.length >= 6
    }
    get needPassword() {
        return !!this.byteAt(4)
    }
    get passwordOk() {
        return !!this.byteAt(5)
    }
    get stageName() {
        if (this.stageMajor !== 0)
            return `UNKNOWN`;
        switch (this.stageMinor) {
        case e.STAGE_MINOR_IPL:
            return `IPL`;
        case e.STAGE_MINOR_SPL:
            return `SPL`;
        case e.STAGE_MINOR_TPL:
            return `TPL`;
        default:
            return `UNKNOWN`
        }
    }
    toString() {
        let e = Array.from(this.raw.slice(4)).map(e => `-${e}`).join(``);
        return `${this.major}-${this.minor}-${this.stageMajor}-${this.stageMinor}${e} (${this.stageName})`
    }
    byteAt(e) {
        let t = this.raw[e];
        if (t === void 0)
            throw new Q(`identify response too short (${this.raw.length} bytes)`);
        return t
    }
}
  , qd = (e, ...t) => {
    e === `info` ? console.info(...t) : console.log(...t)
}
  , Jd = (e, t, n) => {
    let r;
    return Promise.race([e, new Promise( (e, i) => {
        r = setTimeout( () => i(Error(t)), n)
    }
    )]).finally( () => clearTimeout(r))
}
  , Yd = e => new Promise(t => setTimeout(t, e))
  , Xd = 255
  , Zd = class {
    device;
    outEndpointNum = -1;
    inEndpointNum = -1;
    constructor(e) {
        this.device = e
    }
    async connect(e) {
        if (await Jd(this.device.open(), `[connect] unable to open device handle`, e),
        this.device.configuration || await Jd(this.device.selectConfiguration(1), `[connect] unable to select device configuration`, e),
        !this.device.configuration)
            throw Error(`Unable to select the proper configuration`);
        let t = -1
          , n = -1;
        for (let e of this.device.configuration.interfaces) {
            for (let t of e.alternates) {
                let e = t.endpoints.find(e => e.direction === `out`)?.endpointNumber ?? -1
                  , r = t.endpoints.find(e => e.direction === `in`)?.endpointNumber ?? -1;
                if (t.interfaceClass === Xd && e !== -1 && r !== -1) {
                    n = t.alternateSetting,
                    this.outEndpointNum = e,
                    this.inEndpointNum = r;
                    break
                }
            }
            if (n !== -1) {
                t = e.interfaceNumber;
                break
            }
        }
        if (this.outEndpointNum === -1 || this.inEndpointNum === -1)
            throw Error(`Unable to locate the bulk endpoints`);
        await Jd(this.device.claimInterface(t), `[connect] unable to claim device interface`, e),
        n !== 0 && await Jd(this.device.selectAlternateInterface(t, n), `[connect] unable to select the device's boot interface`, e)
    }
    async controlOut(e, t, n, r, i) {
        let a = await Jd(this.device.controlTransferOut({
            requestType: `vendor`,
            recipient: `device`,
            request: e,
            value: t,
            index: n
        }, r), `[device] unable to send control transfer`, i);
        if (a.status !== `ok`)
            throw Error(`control transfer status ${a.status}`);
        return a.bytesWritten
    }
    async controlIn(e, t, n, r, i) {
        return $d(await Jd(this.device.controlTransferIn({
            requestType: `vendor`,
            recipient: `device`,
            request: e,
            value: t,
            index: n
        }, r), `[device] unable to receive control transfer`, i))
    }
    async bulkOut(e, t) {
        let n = await Jd(this.device.transferOut(this.outEndpointNum, e), `[device] unable to send bulk data`, t);
        if (n.status !== `ok`)
            throw Error(`transmit status ${n.status}`)
    }
    async bulkIn(e, t) {
        return $d(await Jd(this.device.transferIn(this.inEndpointNum, e), `[device] unable to receive bulk data`, t))
    }
    async close(e) {
        await Jd(this.device.close(), `[close] unable to close device`, e)
    }
    onDisconnect(e) {
        Qd(navigator.usb, e => e.device === this.device, e)
    }
}
;
function Qd(e, t, n) {
    let r = i => {
        t(i) && (n(),
        e.removeEventListener(`disconnect`, r))
    }
    ;
    e.addEventListener(`disconnect`, r)
}
function $d(e) {
    if (e.data === void 0 || e.status !== `ok`)
        throw Error(`receive failed with status ${e.status}`);
    let t = e.data
      , n = new Uint8Array(t.byteLength);
    return n.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),
    n
}
function ef(e) {
    return e instanceof Blob ? e : new Blob([e])
}
async function tf(e, t, n) {
    return new Uint8Array(await e.slice(t, t + n).arrayBuffer())
}
function nf(e) {
    let t = new DataView(e.buffer,e.byteOffset,e.byteLength)
      , n = 0
      , r = 0;
    for (; r < e.length; ) {
        let i = e.length - r, a;
        a = i >= 4 ? t.getUint32(r, !0) : i === 3 ? t.getUint16(r, !0) | t.getUint8(r + 2) << 16 : i === 2 ? t.getUint16(r, !0) : t.getUint8(r),
        n = (n + a) % 4294967296,
        r += 4
    }
    return n
}
var rf = {
    logging: !1,
    timeout: 5e3
}
  , af = 3e3
  , of = 1e4
  , sf = 200;
function cf(e) {
    return `controlTransferIn`in e && typeof e.controlTransferIn == `function`
}
function lf(e) {
    return e.catch( () => {}
    ),
    e
}
function uf(e) {
    return typeof e == `string` ? Nd(e) : new Uint8Array(e)
}
var df = class {
    transport;
    deviceOptions;
    constructor(e, t) {
        this.transport = cf(e) ? new Zd(e) : e,
        this.deviceOptions = {
            ...rf,
            ...t
        }
    }
    get usbDevice() {
        return this.transport instanceof Zd ? this.transport.device : void 0
    }
    _log(e, ...t) {
        e === `debug` && !this.deviceOptions.logging || (this.deviceOptions.logger ?? qd)(e, ...t)
    }
    async initialize() {
        try {
            await this.transport.connect(this.deviceOptions.timeout)
        } catch (e) {
            throw this._log(`debug`, e),
            new Q(`Unable to open and claim device`,{
                cause: e
            })
        }
    }
    async close() {
        try {
            await this.transport.close(this.deviceOptions.timeout)
        } catch (e) {
            throw new Q(`Unable to close device`,{
                cause: e
            })
        }
    }
    onDisconnect(e) {
        this.transport.onDisconnect(e)
    }
    get timeout() {
        return this.deviceOptions.timeout
    }
    async identify() {
        return new $(await this.transport.controlIn(Z.IDENTIFY_HOST, 0, 0, 8, this.timeout))
    }
    async nop() {
        await this.transport.controlOut(Z.NOP, 0, 0, void 0, this.timeout)
    }
    async sendPassword(e) {
        await this.transport.controlOut(Z.PASSWORD, 0, 0, uf(e), this.timeout)
    }
    async writeSimpleMemory(e, t) {
        if (t.length > 64)
            throw new Q(`maximum size of 64 bytes`);
        let {value: n, index: r} = Rd(e);
        await this.transport.controlOut(Z.WRITE_MEM, n, r, uf(t), this.timeout)
    }
    async writeMemory(e, t) {
        for (let n = 0; n < t.length; n += 64)
            await this.writeSimpleMemory(e + n, t.subarray(n, n + 64))
    }
    async readSimpleMemory(e, t) {
        if (t === 0)
            return new Uint8Array;
        if (t > 64)
            throw new Q(`maximum size of 64 bytes`);
        let {value: n, index: r} = Rd(e);
        return this.transport.controlIn(Z.READ_MEM, n, r, t, this.timeout)
    }
    async readMemory(e, t) {
        let n = [];
        for (let r = 0; r < t; r += 64)
            n.push(await this.readSimpleMemory(e + r, Math.min(64, t - r)));
        return Ld(n)
    }
    async modifyMemory(e, t, n, r, i) {
        let a = Fd([t, n, r, i]);
        await this.transport.controlOut(Z.MODIFY_MEM, e, 0, a, this.timeout)
    }
    async readReg(e) {
        return Id(await this.readSimpleMemory(e, 4))
    }
    async writeReg(e, t) {
        await this.modifyMemory(0, e, t, 0, 0)
    }
    async run(e, t=!0) {
        let {value: n, index: r} = Rd(e)
          , i = Fd([t ? e | 16 : e]);
        await this.transport.controlOut(Z.RUN_IN_ADDR, n, r, i, this.timeout)
    }
    async writeLargeMemory(e, t, n) {
        let {blockLength: r=64, appendZeros: i=!1, onProgress: a} = n ?? {}
          , o = ef(t);
        if (!i && o.size % r !== 0)
            throw new Q(`large data must be a multiple of the block length`);
        let s = xd * r
          , c = e => tf(o, e, Math.min(s, o.size - e))
          , l = 0
          , u = lf(c(0));
        for (; l < o.size; ) {
            let t = await u
              , n = t;
            t.length % r !== 0 && (n = new Uint8Array(t.length + r - t.length % r),
            n.set(t));
            let i = n.length / r
              , s = l + t.length;
            u = s < o.size ? lf(c(s)) : void 0,
            await this.transport.controlOut(Z.WR_LARGE_MEM, r, i, Bd(e + l, n.length), this.timeout);
            for (let e = 0; e < n.length; e += r)
                await this.transport.bulkOut(n.subarray(e, e + r), this.timeout);
            l = s,
            a?.({
                bytesTransferred: l,
                totalBytes: o.size
            })
        }
    }
    async readLargeMemory(e, t, n) {
        let {blockLength: r=64} = n ?? {};
        if (t % r !== 0)
            throw new Q(`large data must be a multiple of the block length`);
        let i = xd * r
          , a = []
          , o = 0;
        for (; o < t; ) {
            let n = Math.min(i, t - o)
              , s = n / r;
            await this.transport.controlOut(Z.RD_LARGE_MEM, r, s, Bd(e + o, n), this.timeout);
            for (let e = 0; e < s; e++) {
                let e = await this.transport.bulkIn(r, this.timeout);
                if (e.length !== r)
                    throw new Q(`short bulk read: expected ${r} bytes, received ${e.length}`);
                a.push(e)
            }
            o += n
        }
        return Ld(a)
    }
    async tplCommand(e, t) {
        await this.transport.controlOut(Z.TPL_CMD, 0, e, zd(t), this.timeout)
    }
    async tplStat(e) {
        return this.transport.controlIn(Z.TPL_STAT, 0, 0, 64, e ?? this.timeout)
    }
    async checkTplCommand(e, t=`success`) {
        await this.tplCommand(1, e);
        let n = Kd(await this.tplStat());
        if (n !== t)
            throw new Dd(e,n)
    }
    async bulkCmd(e, t) {
        let {readStatus: n=!0, timeout: r} = t ?? {};
        if (await this.transport.controlOut(Z.BULKCMD, 0, 2, zd(e), this.timeout),
        n)
            return this.bulkCmdStat(r)
    }
    async bulkCmdStat(e) {
        return this.transport.bulkIn(512, e ?? this.timeout)
    }
    async pollThroughBusy(e, t, n, r, i) {
        let a = Date.now() + n;
        for (; ; ) {
            let n;
            try {
                let n = await e();
                if (!Gd(n, t))
                    return n
            } catch (e) {
                n = e
            }
            if (Date.now() >= a)
                throw n instanceof Error ? n : new Q(i);
            n === void 0 && await Yd(r)
        }
    }
    async checkBulkCmd(e, t) {
        let n = e.trim().split(/\s+/);
        if (n[0] === `printenv`) {
            let e = n.slice(1);
            return this.readEnv({
                vars: e,
                ...t?.timeout === void 0 ? {} : {
                    timeout: t.timeout
                }
            })
        }
        let {expect: r=`success`, timeout: i=3e3, busyRetryDelay: a=af} = t ?? {};
        await this.bulkCmd(e, {
            readStatus: !1
        });
        let o = Kd(await this.pollThroughBusy( () => this.bulkCmdStat(i), `Continue:34`, i, a, `bulk command '${e}' timed out`));
        if (o !== r)
            throw new Ed(e,o);
        return o
    }
    async readEnv(e) {
        let {vars: t=[], address: n=17301504, size: r=61440, timeout: i} = e ?? {}
          , a = `0x${n.toString(16)}`
          , o = t.length ? ` ${t.join(` `)}` : ``;
        return await this.checkBulkCmd(`env export -t ${a}${o}`, {
            ...i === void 0 ? {} : {
                timeout: i
            }
        }),
        await this.checkBulkCmd(`upload mem ${a} normal 0x${r.toString(16)}`, {
            ...i === void 0 ? {} : {
                timeout: i
            }
        }),
        Kd(await this.readMedia(r, i)).trimEnd()
    }
    async writeMedia(e, t) {
        let {ackLen: n=512, seq: r=0, retryTimes: i=0} = t ?? {}
          , a = Vd(i, e.length, r, nf(e), n);
        await this.transport.controlOut(Z.WRITE_MEDIA, 1, 65535, a, this.timeout),
        await this.transport.bulkOut(e, this.timeout)
    }
    async writeMediaStream(e, t) {
        let n = ef(e)
          , r = e => tf(n, e, Math.min(wd, n.size - e))
          , i = 0
          , a = 0
          , o = lf(r(0));
        for (; a < n.size; ) {
            let e = await o
              , s = a + e.length;
            o = s < n.size ? lf(r(s)) : void 0,
            await this.tryWriteMedia(e, i, t),
            i += 1,
            a = s,
            t?.onProgress?.({
                bytesTransferred: a,
                totalBytes: n.size
            })
        }
    }
    async tryWriteMedia(e, t, n) {
        let {ackLen: r=512, resendTimes: i=3, ackTimeout: a=of, busyRetryDelay: o=af, resendDelay: s=sf} = n ?? {}, c = 0, l;
        for (; ; ) {
            let n;
            try {
                await this.writeMedia(e, {
                    ackLen: r,
                    seq: t,
                    retryTimes: c
                }),
                n = await this.pollThroughBusy( () => this.transport.bulkIn(r, this.timeout), `Continue:32`, a, o, `media write ack timed out at block ${t}`)
            } catch (e) {
                l = e,
                this._log(`debug`, e)
            }
            if (n !== void 0 && Gd(n, `OK!!`))
                return;
            if (c += 1,
            c > i)
                throw new Od(t,c,{
                    cause: l
                });
            await Yd(s)
        }
    }
    async readMedia(e, t) {
        if (e > 65535)
            throw new Q(`readMedia supports at most 65535 bytes per call`);
        let n = Math.ceil(e / 4096);
        return await this.transport.controlIn(Z.READ_MEDIA, e, n, 16, this.timeout),
        this.transport.bulkIn(e, t ?? this.timeout)
    }
    async getBootAMLC() {
        await this.transport.controlOut(Z.GET_AMLC, 512, 0, void 0, this.timeout);
        let e = Ud(await this.transport.bulkIn(512, this.timeout));
        return await this.transport.bulkOut(Wd(), this.timeout),
        e
    }
    async writeAMLCChunk(e, t) {
        await this.transport.controlOut(Z.WRITE_AMLC, Math.floor(e / 512), t.length - 1, void 0, this.timeout);
        for (let e = 0; e < t.length; e += Sd)
            await this.transport.bulkOut(t.subarray(e, e + Sd), this.timeout);
        let n = await this.transport.bulkIn(16, this.timeout);
        if (!Gd(n, `OKAY`))
            throw new Ad(`invalid AMLC data write ack: '${Kd(n)}'`)
    }
    async writeAMLCData(e, t, n) {
        for (let e = 0; e < n.length; e += Cd)
            await this.writeAMLCChunk(e, n.subarray(e, e + Cd));
        let r = Ld([Hd(e, nf(n)), n.subarray(16, 512)]);
        await this.writeAMLCChunk(t, r)
    }
    async bootAMLC(e, t) {
        let n = ef(e)
          , r = {
            length: -1,
            offset: -1
        }
          , i = 0
          , a = 0;
        for (; ; ) {
            let e = await this.getBootAMLC();
            if (this._log(`debug`, `AMLC dataSize=${e.length}, offset=${e.offset}, seq=${i}`),
            e.length === r.length && e.offset === r.offset)
                break;
            r = e;
            let o = await tf(n, e.offset, e.length);
            if (o.length === 0)
                throw new Ad(`unexpected end of image`);
            await this.writeAMLCData(i, e.offset, o),
            i += 1,
            a = Math.max(a, e.offset + o.length),
            t?.onProgress?.({
                bytesTransferred: a,
                totalBytes: n.size
            })
        }
    }
    async waitForIdentify(e=1e4) {
        let t = !1
          , n = (async () => {
            for (; ; ) {
                try {
                    return await this.identify()
                } catch (e) {
                    if (t)
                        throw e
                }
                await Yd(200)
            }
        }
        )();
        try {
            return await Jd(n, `timed out waiting for the device to identify`, e)
        } finally {
            t = !0,
            n.catch( () => {}
            )
        }
    }
}
;
async function ff(e) {
    if (typeof navigator > `u` || !navigator.usb)
        throw new Q(`WebUSB is not available in this browser`);
    return new df(await navigator.usb.requestDevice({
        filters: bd
    }),e)
}
var pf = 64
  , mf = 666179926
  , hf = new Uint32Array(256);
for (let e = 0; e < 256; e++) {
    let t = e;
    for (let e = 0; e < 8; e++)
        t = t & 1 ? 3988292384 ^ t >>> 1 : t >>> 1;
    hf[e] = t
}
function gf(e, t=0) {
    let n = ~t >>> 0;
    for (let t = 0; t < e.length; t++)
        n = hf[(n ^ e[t]) & 255] ^ n >>> 8;
    return ~n >>> 0
}
var _f = 4 * 1024 * 1024
  , vf = {
    1: 128,
    2: 576
}
  , yf = {
    1: 32,
    2: 256
}
  , bf = {
    0: `normal`,
    254: `sparse`,
    510: `ubi`,
    766: `ubifs`
};
function xf(e, t) {
    let n = e.getBigUint64(t, !0);
    if (n > BigInt(2 ** 53 - 1))
        throw new Md(`64-bit field at ${t} exceeds Number.MAX_SAFE_INTEGER`);
    return Number(n)
}
var Sf = class {
    pkg;
    id;
    fileType;
    offsetInImg;
    size;
    mainType;
    subType;
    verify;
    constructor(e, t, n, r, i, a, o, s) {
        this.pkg = e,
        this.id = t,
        this.fileType = n,
        this.offsetInImg = r,
        this.size = i,
        this.mainType = a,
        this.subType = o,
        this.verify = s
    }
    get blob() {
        return this.pkg.slice(this.offsetInImg, this.offsetInImg + this.size)
    }
    read(e, t) {
        return tf(this.blob, e, t)
    }
    async text() {
        return new TextDecoder().decode(await this.read(0, this.size))
    }
}
  , Cf = class e {
    version;
    imageItems;
    constructor(e, t) {
        this.version = e,
        this.imageItems = t
    }
    static async open(t, n) {
        let r = ef(t);
        if (r.size < pf)
            throw new Md(`image is too small to contain a header`);
        let i = await tf(r, 0, pf)
          , a = new DataView(i.buffer)
          , o = a.getUint32(0, !0)
          , s = a.getUint32(4, !0)
          , c = a.getUint32(8, !0)
          , l = a.getUint32(24, !0);
        if (c !== mf)
            throw new Md(`bad magic 0x${c.toString(16)}`);
        if (s !== 1 && s !== 2)
            throw new Md(`unknown image version ${s}`);
        if (n?.verifyCrc) {
            let e = 0;
            for (let t = 4; t < r.size; t += _f)
                e = gf(await tf(r, t, Math.min(_f, r.size - t)), e);
            let t = (e ^ 4294967295) >>> 0;
            if (t !== o)
                throw new Md(`crc mismatch: stored 0x${o.toString(16)}, computed 0x${t.toString(16)}`)
        }
        let u = vf[s]
          , d = yf[s]
          , f = await tf(r, pf, l * u);
        if (f.length < l * u)
            throw new Md(`truncated item table`);
        let p = [];
        for (let e = 0; e < l; e++) {
            let t = f.subarray(e * u, (e + 1) * u)
              , n = new DataView(t.buffer,t.byteOffset,t.byteLength)
              , i = n.getUint32(4, !0)
              , a = xf(n, 16)
              , o = xf(n, 24)
              , s = Pd(t.subarray(32, 32 + d))
              , c = Pd(t.subarray(32 + d, 32 + 2 * d));
            if (a + o > r.size)
                throw new Md(`item ${s}:${c} overruns the package (${a} + ${o} > ${r.size}); is the image truncated?`);
            p.push(new Sf(r,n.getUint32(0, !0),bf[i] ?? `0x${i.toString(16)}`,a,o,s,c,n.getUint32(32 + 2 * d, !0) !== 0))
        }
        return new e(s,p)
    }
    items(e) {
        return this.imageItems.filter(t => (e?.mainType === void 0 || t.mainType === e.mainType) && (e?.subType === void 0 || t.subType === e.subType) && (e?.fileType === void 0 || t.fileType === e.fileType))
    }
    itemCount(e) {
        return this.items(e === void 0 ? void 0 : {
            mainType: e
        }).length
    }
    itemGet(e, t) {
        return this.items({
            mainType: e,
            subType: t
        })[0]
    }
    itemRequire(e, t) {
        let n = this.itemGet(e, t);
        if (!n)
            throw new Md(`item ${e}:${t} not found`);
        return n
    }
}
  , wf = [{
    pattern: `Platform:`,
    key: `platform`,
    required: !0
}, {
    pattern: `DDRLoad:`,
    key: `ddrLoad`,
    required: !0
}, {
    pattern: `DDRRun:`,
    key: `ddrRun`,
    required: !0
}, {
    pattern: `UbootLoad:`,
    key: `ubootLoad`
}, {
    pattern: `UbootRun:`,
    key: `ubootRun`
}, {
    pattern: `BinPara:`,
    key: `binPara`
}, {
    pattern: `Uboot_down:`,
    key: `ubootDown`
}, {
    pattern: `Uboot_decomp:`,
    key: `ubootDecomp`
}, {
    pattern: `Uboot_enc_down:`,
    key: `ubootEncDown`
}, {
    pattern: `Uboot_enc_run:`,
    key: `ubootEncRun`
}, {
    pattern: `Uboot:`,
    key: `uboot`
}, {
    pattern: `Encrypt_reg:`,
    key: `encryptReg`
}, {
    pattern: `bl2ParaAddr=`,
    key: `bl2ParaAddr`
}, {
    pattern: `Encrypt_reg1=`,
    key: `encryptReg1`
}, {
    pattern: `Encrypt_reg2=`,
    key: `encryptReg2`
}, {
    pattern: `needPassword=`,
    key: `needPassword`
}, {
    pattern: `DDRSize:`,
    key: `ddrSize`
}, {
    pattern: `enc_chip_id1:`,
    key: `encChipId1`
}, {
    pattern: `enc_chip_id2:`,
    key: `encChipId2`
}];
function Tf(e) {
    let t = e.trim()
      , n = Number(t);
    if (t === `` || !Number.isFinite(n))
        throw new Q(`invalid number '${t}' in platform config`);
    return n
}
function Ef(e) {
    let t = {
        platform: 0,
        ddrLoad: 0,
        ddrRun: 0,
        ubootLoad: 0,
        ubootRun: 0,
        binPara: 0,
        ubootDown: 0,
        ubootDecomp: 0,
        ubootEncDown: 0,
        ubootEncRun: 0,
        uboot: 0,
        encryptReg: 0,
        bl2ParaAddr: 0,
        control0Reg: 0,
        control0Val: 0,
        control1Reg: 0,
        control1Val: 0,
        encryptReg1: 0,
        encryptReg2: 0,
        needPassword: 0,
        ddrSize: 0,
        encChipId1: 0,
        encChipId2: 0
    }
      , n = new Set;
    for (let r of e.split(`
`)) {
        let e = r.trim();
        if (!e)
            continue;
        let i = wf.find(t => e.startsWith(t.pattern));
        if (i) {
            t[i.key] = Tf(e.slice(i.pattern.length)),
            n.add(i.pattern);
            continue
        }
        for (let r of [0, 1]) {
            let i = `Control${r}=`;
            if (e.startsWith(i)) {
                let[a,o] = e.slice(i.length).split(`:`);
                if (a === void 0 || o === void 0)
                    throw new Q(`invalid ${i} entry in platform config`);
                t[`control${r}Reg`] = Tf(a),
                t[`control${r}Val`] = Tf(o),
                n.add(i)
            }
        }
    }
    for (let e of wf)
        if (e.required && !n.has(e.pattern))
            throw new Q(`required config ${e.pattern} not found in platform config`);
    return n.has(`UbootLoad:`) || (t.ubootLoad = t.ddrLoad),
    n.has(`UbootRun:`) || (t.ubootRun = t.ddrRun),
    t
}
var Df = {
    None: 0,
    KeepKeys: 1,
    ForceKeepKeys: 2,
    All: 3,
    ForceAll: 4
}
  , Of = {
    stepDelay: 200,
    passwordDelay: 2e3,
    regDelay: 500,
    splRunDelay: 8e3,
    ubootRunDelay: 5e3,
    ubootSettleDelay: 200,
    diskInitialTimeout: 6e4,
    verifyTimeout: 15e4,
    busyRetryDelay: 3e3,
    reacquireTimeout: 1e4
}
  , kf = 2018963371
  , Af = new Set([2065]);
function jf(e, t) {
    e.options.onProgress?.(t)
}
function Mf(e, t) {
    let n = e.image.itemGet(`USB`, e.secure ? `${t}_ENC` : t);
    if (!n)
        throw new Md(`the image does not contain any ${e.secure ? `` : `non-`}signed ${t} item`);
    return n
}
async function Nf(e) {
    let t = await e.device.identify();
    if (!(t.stageMinor !== $.STAGE_MINOR_IPL || !t.supportsPassword) && !(!t.needPassword || t.passwordOk)) {
        if (jf(e, {
            stage: `password`
        }),
        !e.options.password)
            throw new jd(`the board is locked with a password; provide options.password`);
        if (await e.device.sendPassword(e.options.password),
        await Yd(e.timings.passwordDelay),
        !(await e.device.identify()).passwordOk)
            throw new jd(`password check failed`)
    }
}
async function Pf(e) {
    let t = await e.device.identify();
    if (t.stageMinor === $.STAGE_MINOR_IPL)
        return !1;
    if (t.stageMinor !== $.STAGE_MINOR_TPL)
        throw new Q(`invalid power state: ${t.toString()}`);
    jf(e, {
        stage: `erase-bootloader`
    }),
    await e.device.checkTplCommand(`    echo 1234`),
    await Jf(e, `    low_power`);
    try {
        await Jf(e, `bootloader_is_old`)
    } catch (e) {
        if (e instanceof Ed)
            return !1;
        throw e
    }
    await Jf(e, `erase_bootloader`);
    try {
        await Jf(e, `reset`)
    } catch (t) {
        if (t instanceof Ed)
            throw t;
        e.device._log(`debug`, `reset reply not received`, t)
    }
    return await Yf(e.device),
    !0
}
async function Ff(e) {
    let t = await e.device.identify()
      , n = 0;
    if (t.stageMinor === $.STAGE_MINOR_IPL) {
        let t = e.platform.encryptReg;
        if (t === 4294967295)
            throw new Q(`invalid encrypt register`);
        if (!t) {
            let n = Id(await e.device.readLargeMemory(3640918020, 512));
            if (e.platform.encChipId1 === n ? t = e.platform.encryptReg1 : e.platform.encChipId2 === n && (t = e.platform.encryptReg2),
            !t)
                throw new Q(`cannot determine the encrypt register for this chip`)
        }
        n = await e.device.readReg(t)
    } else
        t.stageMinor === $.STAGE_MINOR_TPL && (await Jf(e, `upload mem 0x${e.platform.encryptReg.toString(16)} normal 0x4`),
        n = Id(await e.device.readMedia(4)));
    return (n & 16) != 0
}
async function If(e, t) {
    let n = await e.device.identify()
      , r = [n.major, n.minor, n.stageMajor, n.stageMinor];
    await e.device.run(t, Lf(r, [0, 9, 0, 0]))
}
function Lf(e, t) {
    for (let n = 0; n < t.length; n++) {
        if (e[n] > t[n])
            return !0;
        if (e[n] < t[n])
            return !1
    }
    return !0
}
var Rf = [{
    reg: 3239068060,
    val: 177
}, {
    reg: 3239068020,
    val: 20867
}];
async function zf(e) {
    let {platform: t, device: n, timings: r} = e
      , i = [{
        reg: t.control0Reg,
        val: t.control0Val
    }, {
        reg: t.control1Reg,
        val: t.control1Val
    }];
    for (let[e,t] of Rf.entries()) {
        let {reg: a, val: o} = i[e].reg ? i[e] : t;
        await n.writeSimpleMemory(a, Fd([o])),
        await Yd(r.regDelay)
    }
}
async function Bf(e, t) {
    e.platform.bl2ParaAddr && await e.device.writeLargeMemory(e.platform.bl2ParaAddr, t, {
        blockLength: t.length
    })
}
async function Vf(e) {
    if (!e.platform.bl2ParaAddr)
        return;
    let t = Id(await e.device.readLargeMemory(e.platform.bl2ParaAddr, 512, {
        blockLength: 512
    }));
    if (t !== kf)
        throw new Q(`failed to read back para block: 0x${t.toString(16)}`)
}
async function Hf(e, t, n, r=0) {
    let i = !r || r > t.size ? t.size : r
      , a = 0;
    for (; a < i; ) {
        let r = await t.read(a, Math.min(4096, i - a));
        if (r.length === 0)
            break;
        await e.device.writeLargeMemory(n + a, r, {
            blockLength: r.length
        }),
        a += r.length
    }
    if (a < i)
        throw new Md(`short read streaming ${t.subType}: ${a} < ${i}`)
}
async function Uf(e) {
    let t = await e.device.identify();
    if (t.stageMinor === $.STAGE_MINOR_TPL || t.stageMinor === $.STAGE_MINOR_SPL)
        return;
    if (t.stageMinor !== $.STAGE_MINOR_IPL)
        throw new Q(`unexpected stage: ${t.toString()}`);
    if (!Af.has(e.platform.platform))
        throw new Q(`platform 0x${e.platform.platform.toString(16)} not supported`);
    jf(e, {
        stage: `spl`
    }),
    await zf(e),
    await Hf(e, Mf(e, `DDR`), e.platform.ddrLoad, e.platform.ddrSize),
    await Bf(e, Fd([873647531, 512, 49375, 0, 0, 0])),
    await If(e, e.platform.ddrRun),
    await Yd(e.timings.splRunDelay);
    let n = await e.device.identify();
    if (n.stageMinor !== $.STAGE_MINOR_IPL && !(n.stageMajor === 1 && n.stageMinor === $.STAGE_MINOR_SPL))
        if (n.stageMajor === 0 && n.stageMinor === $.STAGE_MINOR_SPL)
            e.platform.bl2ParaAddr !== 0 && await If(e, e.platform.bl2ParaAddr);
        else
            throw new Q(`unexpected stage after SPL: ${n.toString()}`);
    await Vf(e)
}
async function Wf(e) {
    let t = await e.device.identify();
    t.stageMinor === $.STAGE_MINOR_IPL ? await If(e, e.platform.ubootRun) : t.stageMinor === $.STAGE_MINOR_SPL && t.stageMajor === 0 && await If(e, e.platform.bl2ParaAddr)
}
async function Gf(e, t, n) {
    let r = nf(await t.read(0, t.size));
    await Bf(e, Fd([873647531, 512, 49376, 0, 0, 1, e.platform.ubootLoad, t.size, r], 100)),
    await Wf(e),
    await Yd(e.timings.ubootRunDelay),
    await Vf(e),
    (await e.device.identify()).stageMinor === $.STAGE_MINOR_IPL && n && await Hf(e, n, e.platform.ddrLoad, e.platform.ddrSize)
}
async function Kf(e) {
    let t = Mf(e, `UBOOT`)
      , n = e.image.itemGet(`USB`, e.secure ? `DDR_ENC` : `DDR`)
      , r = await e.device.identify();
    if (r.stageMinor === $.STAGE_MINOR_TPL)
        return !1;
    if (r.stageMinor !== $.STAGE_MINOR_IPL && r.stageMinor !== $.STAGE_MINOR_SPL)
        throw new Q(`unexpected stage before U-Boot: ${r.toString()}`);
    return jf(e, {
        stage: `uboot`
    }),
    r.stageMajor === 1 && r.stageMinor === $.STAGE_MINOR_SPL ? await e.device.bootAMLC(t.blob, {
        onProgress: t => jf(e, {
            stage: `uboot`,
            ...t
        })
    }) : (await Hf(e, t, e.platform.ubootLoad),
    await Yd(e.timings.ubootSettleDelay),
    r = await e.device.identify(),
    r.stageMinor === $.STAGE_MINOR_IPL && n && await Hf(e, n, e.platform.ddrLoad, e.platform.ddrSize),
    e.platform.bl2ParaAddr && (await Gf(e, t, n),
    await Bf(e, Fd([873647531, 512, 49377, 0, 0, 0, 1, e.platform.ubootLoad, t.size]))),
    await Wf(e)),
    await Yf(e.device),
    !0
}
async function qf(e, t) {
    let n = t.subType
      , r = t.mainType === `dtb` ? `mem` : `store`
      , i = n;
    if (t.mainType === `dtb` && (i = `dtb`,
    n === `meson1` && e.secure)) {
        let r = e.image.itemGet(`dtb`, `meson1_ENC`);
        r && r.size !== 0 && (n = `meson1_ENC`,
        t = r)
    }
    if (jf(e, {
        stage: `partition`,
        partition: n
    }),
    await e.device.checkTplCommand(`download ${r} ${i} ${t.fileType} ${t.size}`),
    await e.device.writeMediaStream(t.blob, {
        busyRetryDelay: e.timings.busyRetryDelay,
        onProgress: t => jf(e, {
            stage: `partition`,
            partition: n,
            ...t
        })
    }),
    await Jf(e, `download get_status`),
    t.verify) {
        let t = e.image.itemGet(`VERIFY`, n);
        t && (jf(e, {
            stage: `verify`,
            partition: n
        }),
        await Jf(e, `verify ${(await t.text()).trim()}`, e.timings.verifyTimeout))
    }
}
function Jf(e, t, n) {
    return e.device.checkBulkCmd(t, {
        busyRetryDelay: e.timings.busyRetryDelay,
        ...n === void 0 ? {} : {
            timeout: n
        }
    })
}
async function Yf(e) {
    try {
        await e.close()
    } catch {}
}
async function Xf(e=1e4, t) {
    if (typeof navigator > `u` || !navigator.usb)
        throw new Q(`cannot reacquire the device: WebUSB is unavailable`);
    let n = Date.now()
      , r = !1;
    for (; Date.now() - n < e; ) {
        let e = (await navigator.usb.getDevices()).find(e => e.vendorId === 7054 && e.productId === 49155);
        if (e) {
            r = !0;
            let n = new df(e,t);
            try {
                return await n.initialize(),
                await n.identify(),
                n
            } catch {
                await Yf(n)
            }
        }
        await Yd(200)
    }
    throw r ? new Q(`timed out waiting for the device to re-enumerate`) : new kd
}
async function Zf(e, t, n={}) {
    let r = {
        ...Of,
        ...n.timings
    }
      , i = t.itemGet(`conf`, `platform`);
    if (!i)
        throw new Md(`the image does not contain a platform config`);
    let a = {
        device: e,
        image: t,
        platform: Ef(await i.text()),
        secure: !1,
        timings: r,
        options: n
    }
      , o = async () => {
        a.device = await (n.reacquire ?? ( () => Xf(r.reacquireTimeout, e.deviceOptions)))(),
        await Yd(r.stepDelay)
    }
    ;
    n.noEraseBootloader || (await Nf(a),
    await Pf(a) && await o()),
    await Nf(a),
    jf(a, {
        stage: `secure-check`
    }),
    a.secure = await Ff(a),
    await Uf(a),
    await Kf(a) && await o(),
    jf(a, {
        stage: `disk-initial`
    }),
    await Jf(a, `    low_power`),
    await Jf(a, `disk_initial ${n.wipe ?? Df.None}`, r.diskInitialTimeout);
    for (let e of a.image.items())
        e.mainType !== `PARTITION` && e.mainType !== `dtb` || e.mainType === `dtb` && e.subType === `meson1_ENC` || await qf(a, e);
    jf(a, {
        stage: `finish`
    }),
    await Jf(a, `save_setting`);
    try {
        await Jf(a, `burn_complete ${n.reboot ? 1 : 3}`)
    } catch (e) {
        if (e instanceof Ed)
            throw e;
        a.device._log(`debug`, `burn_complete reply not received`, e)
    }
    return a.device
}
var Qf = {
    class: `order-1 flex-none grow-0 self-stretch`
}
  , $f = [`placeholder`, `disabled`]
  , ep = {
    class: `mb-4 justify-center`
}
  , tp = {
    class: `mb-4 w-full text-center`
}
  , np = l({
    __name: `AmlogicClient`,
    props: {
        appendLog: {
            type: Function
        },
        updateLastLog: {
            type: Function
        },
        clearLog: {
            type: Function
        },
        active: {
            type: Boolean
        }
    },
    setup(t) {
        let n = g(!1)
          , i = g(!1)
          , a = x(null)
          , s = g(`idle`)
          , c = g(``)
          , l = g(!1)
          , d = g(null)
          , h = e(`flashInput`)
          , b = e(`inputRef`)
          , S = t
          , te = _( () => s.value === `command`)
          , ie = _( () => s.value === `awaiting-flash`)
          , ae = _( () => {
            switch (s.value) {
            case `command`:
                return `Bulkcmd (e.g. printenv, fastboot)`;
            case `awaiting-flash`:
                return `Drop aml_install_package.img here, or click to browse...`;
            default:
                return `Click an action below`
            }
        }
        )
          , D = _( () => d.value ? `Flash ${d.value.file.name}?` : ``);
        o( () => {
            n.value = !1,
            i.value = !1,
            a.value = null
        }
        );
        async function oe() {
            try {
                let e = await ff({
                    logging: !1,
                    timeout: 15e3,
                    logger: (e, ...t) => S.appendLog(t.join(` `))
                });
                await e.initialize(),
                S.clearLog(),
                a.value = e,
                n.value = !0,
                e.onDisconnect( () => {
                    n.value = !1,
                    i.value = !1,
                    a.value = null,
                    s.value = `idle`
                }
                );
                let t = await e.identify();
                S.appendLog(`Connected: ${t.toString()}`),
                i.value = !0
            } catch (e) {
                S.appendLog(String(e))
            }
        }
        function k() {
            s.value = `command`,
            c.value = ``,
            v( () => b.value?.focus())
        }
        async function A() {
            let e = c.value.trim();
            if (!e)
                return;
            s.value = `idle`,
            c.value = ``;
            let t = a.value;
            if (t) {
                S.appendLog(`> ${e}`);
                try {
                    let n = await t.checkBulkCmd(e);
                    S.appendLog(n || `success`)
                } catch (e) {
                    S.appendLog(String(e))
                }
            }
        }
        function ce() {
            s.value = `awaiting-flash`
        }
        function le(e) {
            let t = e?.currentTarget;
            if (!t)
                return;
            let n = t.files?.[0];
            t.value = ``,
            n && (d.value = {
                file: n
            })
        }
        let ue = g(``);
        function de(e) {
            let t = [e.stage];
            e.partition && t.push(e.partition),
            e.bytesTransferred !== void 0 && e.totalBytes !== void 0 && t.push(`${O(e.bytesTransferred)} / ${O(e.totalBytes)}`);
            let n = t.join(` `)
              , r = `${e.stage}:${e.partition ?? ``}`;
            r === ue.value ? S.updateLastLog(n) : (ue.value = r,
            S.appendLog(n))
        }
        async function fe() {
            let e = d.value;
            if (!e)
                return;
            d.value = null,
            s.value = `idle`;
            let t = a.value;
            if (t)
                try {
                    S.appendLog(`Opening ${e.file.name}...`);
                    let n = await Cf.open(e.file);
                    ue.value = ``,
                    a.value = await Zf(t, n, {
                        wipe: Df.None,
                        reboot: !0,
                        onProgress: de,
                        reacquire: async () => {
                            try {
                                return await Xf(5e3, {
                                    timeout: 15e3
                                })
                            } catch (e) {
                                if (!(e instanceof kd))
                                    throw e;
                                return S.appendLog(`Device re-enumerated — please re-select it in the browser prompt.`),
                                await ff()
                            }
                        }
                    }),
                    S.appendLog(`Flash complete.`)
                } catch (e) {
                    S.appendLog(String(e))
                }
        }
        function pe() {
            s.value === `command` && A()
        }
        function me() {
            d.value = null,
            s.value = `idle`
        }
        async function he() {
            await fe()
        }
        function ge() {
            s.value === `awaiting-flash` && h.value?.click()
        }
        function _e() {
            l.value = !0
        }
        function ve() {
            l.value = !1
        }
        function ye(e) {
            if (l.value = !1,
            !ie.value)
                return;
            let t = e.dataTransfer?.files?.[0];
            t && (d.value = {
                file: t
            })
        }
        return (e, a) => (r(),
        m(`div`, Qf, [(r(),
        C(y, {
            to: `#amlogic-input-footer`,
            defer: ``,
            disabled: !t.active
        }, [f(p(`div`, {
            class: ee([`flex items-center border-t border-black/10 bg-gray-200 px-6 transition-colors md:px-4 dark:border-white/10 dark:bg-black`, {
                "bg-brand-primary/10! dark:bg-brand-primary/10!": l.value,
                "cursor-pointer": ie.value
            }]),
            onDragover: E(_e, [`prevent`]),
            onDragleave: E(ve, [`prevent`]),
            onDrop: E(ye, [`prevent`]),
            onClick: ge
        }, [p(`span`, {
            class: ee([`font-mono select-none`, s.value === `idle` ? `text-black/25 dark:text-white/25` : `text-black/85 dark:text-white/85`])
        }, `$`, 2), f(p(`input`, {
            ref_key: `inputRef`,
            ref: b,
            "onUpdate:modelValue": a[0] ||= e => c.value = e,
            class: ee([`w-full bg-transparent p-2 font-mono outline-none`, te.value ? `text-black/85 dark:text-white/85` : `pointer-events-none text-black/40 dark:text-white/40`]),
            type: `text`,
            placeholder: ae.value,
            disabled: !te.value,
            onKeyup: [ne(pe, [`enter`]), a[1] ||= ne(e => s.value = `idle`, [`esc`])]
        }, null, 42, $f), [[re, c.value]])], 34), [[T, i.value]])], 8, [`disabled`])), f(p(`div`, ep, [p(`div`, {
            class: `flex flex-wrap`
        }, [p(`button`, {
            class: `btn mr-3 mb-3 px-4 py-1`,
            onClick: k
        }, `Run command`), p(`button`, {
            class: `btn mr-3 mb-3 px-4 py-1`,
            onClick: ce
        }, `Flash package`)]), p(`input`, {
            ref_key: `flashInput`,
            ref: h,
            class: `hidden`,
            type: `file`,
            onChange: le
        }, null, 544)], 512), [[T, i.value]]), f(p(`div`, tp, [p(`button`, {
            class: `btn btn-primary mx-auto px-4 py-1`,
            onClick: oe
        }, `Connect`), a[2] ||= p(`div`, {
            class: `mt-3 flex justify-center text-sm`
        }, `Reboot to USB burn mode before connecting.`, -1)], 512), [[T, !n.value]]), w(se, {
            open: d.value !== null,
            title: D.value,
            "confirm-label": `Flash`,
            "cancel-label": `Cancel`,
            onCancel: me,
            onConfirm: he
        }, {
            default: u( () => [...a[3] ||= [p(`p`, null, `This will overwrite the device with the selected upgrade package.`, -1)]]),
            _: 1
        }, 8, [`open`, `title`])]))
    }
})
  , rp = {
    class: `flex h-full w-full flex-col`
}
  , ip = {
    class: `h-full w-full grow overflow-auto`
}
  , ap = {
    class: `mx-auto max-w-189 min-w-0 px-8`
}
  , op = {
    class: `mb-4 overflow-hidden rounded-2xl border border-solid border-black/15 bg-gray-200 shadow-sm dark:border-white/10 dark:bg-black`
}
  , sp = {
    class: `dark:bg-brand-dark flex [scrollbar-width:none] flex-nowrap items-center gap-2 overflow-x-auto scroll-smooth border-b border-black/10 bg-white px-2 pt-2 dark:border-white/10 [&::-webkit-scrollbar]:hidden`
}
  , cp = [`onClick`]
  , lp = {
    class: `relative`
}
  , up = [`value`]
  , dp = {
    key: 0,
    class: `pointer-events-none absolute inset-0 flex items-center justify-center`
}
  , fp = {
    class: `flex items-center gap-3 text-black/60 dark:text-white/70`
}
  , pp = {
    class: `relative inline-flex items-start gap-8`
}
  , mp = {
    key: 1,
    class: `flex flex-col items-start gap-4 px-6 sm:px-4`
}
  , hp = l({
    __name: `FlashToolsTab`,
    setup(t) {
        S({
            title: `Flash Tools`
        });
        let o = typeof navigator < `u` && navigator.usb !== void 0
          , l = [{
            id: `adb`,
            label: `ADB`
        }, {
            id: `fastboot`,
            label: `Fastboot`
        }, {
            id: `odin`,
            label: `Odin`
        }, {
            id: `amlogic`,
            label: `Amlogic`
        }]
          , u = g(oe().params.tool)
          , y = s({
            fastboot: ``,
            adb: ``,
            odin: ``,
            amlogic: ``
        })
          , x = e(`log`)
          , C = s({})
          , ne = _( () => y[u.value]);
        async function E() {
            await v(),
            x.value && (x.value.scrollTop = x.value.scrollHeight)
        }
        function re(e, t) {
            y[e] = y[e].length ? `${y[e]}\n${t}` : t,
            e === u.value && E()
        }
        function se(e, t) {
            let n = y[e].split(`
`);
            n.length === 0 ? y[e] = t : (n[n.length - 1] = t,
            y[e] = n.join(`
`)),
            e === u.value && E()
        }
        function O(e) {
            y[e] = ``
        }
        function k(e=`smooth`) {
            v( () => {
                let t = C[u.value];
                t && t.scrollIntoView({
                    behavior: e,
                    block: `nearest`,
                    inline: `center`
                })
            }
            )
        }
        return a( () => {
            k(`auto`)
        }
        ),
        d(u, e => {
            history.pushState({}, ``, e),
            E(),
            k(`smooth`)
        }
        ),
        (e, t) => (r(),
        m(`div`, rp, [p(`div`, ip, [p(`div`, ap, [t[6] ||= c(`<div class="flex flex-col items-start gap-4 px-6 pt-10 pb-4 sm:px-4"><h1 class="m-0 flex-none self-stretch text-3xl font-medium">Flash Tools</h1><div class="order-1 flex-none grow-0 self-stretch"><p>Flash your device directly from your browser. Supported modes:</p><ul class="my-0 list-disc pl-8"><li>ADB (Recovery mode)</li><li>Fastboot (Fastboot / Fastbootd mode)</li><li>Odin (Samsung download mode)</li><li>Amlogic (USB burn mode)</li></ul><p> As installation steps vary by device, please refer to the <a href="https://wiki.lineageos.org" target="_blank" class="text-brand-primary font-medium no-underline"> wiki </a> for device-specific instructions. </p></div></div>`, 1), h(o) ? (r(),
        m(b, {
            key: 0
        }, [p(`div`, op, [p(`div`, sp, [(r(),
        m(b, null, i(l, (e, t) => p(`button`, {
            key: e.id,
            ref_for: !0,
            ref: t => {
                t && (C[e.id] = t)
            }
            ,
            class: ee([`shrink-0 cursor-pointer rounded-t-lg px-4 py-1 text-xs font-semibold tracking-wider whitespace-nowrap uppercase transition-all duration-200`, u.value === e.id ? `bg-brand-primary font-bold text-white shadow-xs` : `font-medium text-black/60 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10`]),
            onClick: t => u.value = e.id
        }, n(t + 1) + `: ` + n(e.label), 11, cp)), 64))]), p(`div`, lp, [p(`textarea`, {
            ref_key: `log`,
            ref: x,
            class: `w-full resize-none bg-gray-200 p-6 font-mono focus:outline-none md:p-4 dark:bg-black dark:text-white`,
            rows: `14`,
            readonly: ``,
            value: ne.value
        }, null, 8, up), ne.value.trim().length === 0 ? (r(),
        m(`div`, dp, [p(`div`, fp, [p(`div`, pp, [w(ae, {
            path: h(ie),
            class: `relative z-10 text-2xl opacity-80`
        }, null, 8, [`path`]), w(ae, {
            path: h(D),
            class: `relative z-10 text-2xl opacity-80`
        }, null, 8, [`path`]), t[0] ||= p(`svg`, {
            class: `absolute top-1/2 right-4.5 left-4.5 z-0 h-5 w-[calc(100%-36px)] -translate-y-1/2 text-black/25 dark:text-white/50`,
            viewBox: `0 0 84 20`,
            "aria-hidden": `true`,
            focusable: `false`
        }, [p(`path`, {
            d: `M6,10 C18,2 30,2 42,10 S66,18 78,10`,
            fill: `none`,
            stroke: `currentColor`,
            "stroke-width": `2.2`,
            "stroke-linecap": `round`,
            "stroke-dasharray": `140`,
            "stroke-dashoffset": `140`
        }, [p(`animate`, {
            attributeName: `stroke-dashoffset`,
            values: `140;0;140`,
            keyTimes: `0;0.5;1`,
            dur: `2.4s`,
            repeatCount: `indefinite`
        }), p(`animate`, {
            attributeName: `opacity`,
            values: `0.25;0.8;0.25`,
            keyTimes: `0;0.5;1`,
            dur: `2.4s`,
            repeatCount: `indefinite`
        })])], -1)]), t[1] ||= p(`span`, {
            class: `text-xs tracking-wide uppercase`
        }, `Waiting for USB`, -1)])])) : te(``, !0)]), t[2] ||= p(`div`, {
            id: `fastboot-input-footer`
        }, null, -1), t[3] ||= p(`div`, {
            id: `odin-input-footer`
        }, null, -1), t[4] ||= p(`div`, {
            id: `amlogic-input-footer`
        }, null, -1)]), f(w(no, {
            "append-log": e => re(`fastboot`, e),
            "clear-log": () => O(`fastboot`),
            active: u.value === `fastboot`
        }, null, 8, [`append-log`, `clear-log`, `active`]), [[T, u.value === `fastboot`]]), f(w(uu, {
            "append-log": e => re(`adb`, e),
            "update-last-log": e => se(`adb`, e)
        }, null, 8, [`append-log`, `update-last-log`]), [[T, u.value === `adb`]]), f(w(yd, {
            "append-log": e => re(`odin`, e),
            "clear-log": () => O(`odin`),
            active: u.value === `odin`
        }, null, 8, [`append-log`, `clear-log`, `active`]), [[T, u.value === `odin`]]), f(w(np, {
            "append-log": e => re(`amlogic`, e),
            "update-last-log": e => se(`amlogic`, e),
            "clear-log": () => O(`amlogic`),
            active: u.value === `amlogic`
        }, null, 8, [`append-log`, `update-last-log`, `clear-log`, `active`]), [[T, u.value === `amlogic`]])], 64)) : (r(),
        m(`div`, mp, [...t[5] ||= [p(`p`, {
            class: `bg-[#f8d7da] text-lg font-medium dark:bg-[#522b2a] dark:text-[#f8d7da]`
        }, ` Your browser does not support WebUSB! Please use a Chromium based browser. `, -1)]]))])])]))
    }
});
export {hp as default};
//# sourceMappingURL=FlashToolsTab-C75PVSx3.js.map
