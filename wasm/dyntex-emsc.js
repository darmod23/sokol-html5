var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var p=!1,q=!1,t=!1,aa=!1;
if(e.ENVIRONMENT)if("WEB"===e.ENVIRONMENT)p=!0;else if("WORKER"===e.ENVIRONMENT)q=!0;else if("NODE"===e.ENVIRONMENT)t=!0;else if("SHELL"===e.ENVIRONMENT)aa=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else p="object"===typeof window,q="function"===typeof importScripts,t="object"===typeof process&&"function"===typeof require&&!p&&!q,aa=!p&&!t&&!q;
if(t){var ba,ca;e.read=function(a,b){ba||(ba=require("fs"));ca||(ca=require("path"));a=ca.normalize(a);a=ba.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof u))throw a;});process.on("unhandledRejection",
function(){process.exit(1)});e.inspect=function(){return"[Emscripten Module object]"}}else if(aa)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(p||q)e.read=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};
e.print="undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null;e.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||e.print;e.print=e.print;e.printErr=e.printErr;for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=void 0;function da(a){assert(!ea);var b=v;v=v+a+15&-16;return b}function fa(a){var b;b||(b=16);return Math.ceil(a/b)*b}function ha(a){ia||(ia={});ia[a]||(ia[a]=1,e.printErr(a))}var ia,w=0;
function assert(a,b){a||x("Assertion failed: "+b)}function ja(a){if("number"===typeof a){var b=!0;var c=a}else b=!1,c=a.length;var d=("function"===typeof ka?ka:da)(Math.max(c,1));if(b){a=d;assert(0==(d&3));for(b=d+(c&-4);a<b;a+=4)z[a>>2]=0;for(b=d+c;a<b;)A[a++>>0]=0;return d}a.subarray||a.slice?B.set(a,d):B.set(new Uint8Array(a),d);return d}
function D(a,b){if(0===b||!a)return"";for(var c=0,d,f=0;;){d=B[a+f>>0];c|=d;if(0==d&&!b)break;f++;if(b&&f==b)break}b||(b=f);d="";if(128>c){for(;0<b;)c=String.fromCharCode.apply(String,B.subarray(a,a+Math.min(b,1024))),d=d?d+c:c,a+=1024,b-=1024;return d}a:{b=B;for(c=a;b[c];)++c;if(16<c-a&&b.subarray&&la)a=la.decode(b.subarray(a,c));else for(c="";;){d=b[a++];if(!d){a=c;break a}if(d&128)if(f=b[a++]&63,192==(d&224))c+=String.fromCharCode((d&31)<<6|f);else{var g=b[a++]&63;if(224==(d&240))d=(d&15)<<12|
f<<6|g;else{var h=b[a++]&63;if(240==(d&248))d=(d&7)<<18|f<<12|g<<6|h;else{var n=b[a++]&63;if(248==(d&252))d=(d&3)<<24|f<<18|g<<12|h<<6|n;else{var m=b[a++]&63;d=(d&1)<<30|f<<24|g<<18|h<<12|n<<6|m}}}65536>d?c+=String.fromCharCode(d):(d-=65536,c+=String.fromCharCode(55296|d>>10,56320|d&1023))}else c+=String.fromCharCode(d)}}return a}var la="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ma(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);55296<=h&&57343>=h&&(h=65536+((h&1023)<<10)|a.charCodeAt(++g)&1023);if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(2097151>=h){if(c+3>=d)break;b[c++]=240|h>>18}else{if(67108863>=h){if(c+4>=d)break;b[c++]=248|h>>24}else{if(c+5>=d)break;b[c++]=252|h>>30;b[c++]=128|h>>24&63}b[c++]=128|h>>18&63}b[c++]=128|
h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}function na(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:2097151>=d?b+4:67108863>=d?b+5:b+6}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function oa(a){var b=na(a)+1,c=pa(b);ma(a,A,c,b);return c}var buffer,A,B,qa,ra,z,E,F,G;
function sa(){e.HEAP8=A=new Int8Array(buffer);e.HEAP16=qa=new Int16Array(buffer);e.HEAP32=z=new Int32Array(buffer);e.HEAPU8=B=new Uint8Array(buffer);e.HEAPU16=ra=new Uint16Array(buffer);e.HEAPU32=E=new Uint32Array(buffer);e.HEAPF32=F=new Float32Array(buffer);e.HEAPF64=G=new Float64Array(buffer)}var ta,v,ea,ua,va,wa,xa,ya;ta=v=ua=va=wa=xa=ya=0;ea=!1;
function za(){x("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+H+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var Aa=e.TOTAL_STACK||5242880,H=e.TOTAL_MEMORY||134217728;H<Aa&&e.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+H+"! (TOTAL_STACK="+Aa+")");
e.buffer?buffer=e.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(e.wasmMemory=new WebAssembly.Memory({initial:H/65536,maximum:H/65536}),buffer=e.wasmMemory.buffer):buffer=new ArrayBuffer(H),e.buffer=buffer);sa();z[0]=1668509029;qa[1]=25459;if(115!==B[2]||99!==B[3])throw"Runtime error: expected the system to be little-endian!";
function I(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.C;"number"===typeof c?void 0===b.f?e.dynCall_v(c):e.dynCall_vi(c,b.f):c(void 0===b.f?null:b.f)}}}var Ba=[],Ca=[],Da=[],Ea=[],Fa=[],Ga=!1;function Ha(){var a=e.preRun.shift();Ba.unshift(a)}var J=0,Ia=null,K=null;e.preloadedImages={};e.preloadedAudios={};
function Ja(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(f);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(y){x(y)}}function b(){return e.wasmBinary||!p&&!q||"function"!==typeof fetch?new Promise(function(b){b(a())}):fetch(f,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+f+
"'";return a.arrayBuffer()}).catch(function(){return a()})}function c(a){function c(a){n=a.exports;if(n.memory){a=n.memory;var b=e.buffer;a.byteLength<b.byteLength&&e.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);e.buffer=buffer=a;sa()}e.asm=n;e.usingWasm=!0;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);0==J&&(null!==Ia&&(clearInterval(Ia),Ia=null),K&&(a=K,K=null,a()))}
function d(a){c(a.instance)}function g(a){b().then(function(a){return WebAssembly.instantiate(a,h)}).then(a).catch(function(a){e.printErr("failed to asynchronously prepare wasm: "+a);x(a)})}if("object"!==typeof WebAssembly)return e.printErr("no native wasm support detected"),!1;if(!(e.wasmMemory instanceof WebAssembly.Memory))return e.printErr("no native wasm Memory in use"),!1;a.memory=e.wasmMemory;h.global={NaN:NaN,Infinity:Infinity};h["global.Math"]=Math;h.env=a;J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);
if(e.instantiateWasm)try{return e.instantiateWasm(h,c)}catch(Mb){return e.printErr("Module.instantiateWasm callback failed with error: "+Mb),!1}e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Ja(f)||"function"!==typeof fetch?g(d):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),h).then(d).catch(function(a){e.printErr("wasm streaming compile failed: "+a);e.printErr("falling back to ArrayBuffer instantiation");g(d)});return{}}var d="dyntex-emsc.wast",f="dyntex-emsc.wasm",
g="dyntex-emsc.temp.asm.js";"function"===typeof e.locateFile&&(Ja(d)||(d=e.locateFile(d)),Ja(f)||(f=e.locateFile(f)),Ja(g)||(g=e.locateFile(g)));var h={global:null,env:null,asm2wasm:{"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},parent:e},n=null;e.asmPreload=e.asm;var m=e.reallocBuffer;e.reallocBuffer=function(a){if("asmjs"===r)var b=m(a);else a:{var c=e.usingWasm?65536:16777216;0<a%c&&(a+=c-a%c);c=e.buffer.byteLength;if(e.usingWasm)try{b=-1!==e.wasmMemory.grow((a-c)/65536)?
e.buffer=e.wasmMemory.buffer:null;break a}catch(bc){b=null;break a}b=void 0}return b};var r="";e.asm=function(a,b){if(!b.table){a=e.wasmTableSize;void 0===a&&(a=1024);var d=e.wasmMaxTableSize;b.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==d?new WebAssembly.Table({initial:a,maximum:d,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):Array(a);e.wasmTable=b.table}b.memoryBase||(b.memoryBase=e.STATIC_BASE);b.tableBase||(b.tableBase=0);(b=c(b))||
x("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return b}})();ta=1024;v=ta+20304;Ca.push();e.STATIC_BASE=ta;e.STATIC_BUMP=20304;v+=16;var L=0,Ka=0,La=!1;function Ma(){La||(Ea.push(function(){for(var a=M.length-1;0<=a;--a)Na(a)}),La=!0)}
function Oa(a){return a?("number"==typeof a&&(a=D(a)),"#window"==a?window:"#document"==a?document:"#screen"==a?window.screen:"#canvas"==a?e.canvas:"string"==typeof a?document.getElementById(a):a):window}var Pa=[];function Qa(){if(Ra&&Sa.u)for(var a=0;a<Pa.length;++a){var b=Pa[a];Pa.splice(a,1);--a;b.T.apply(this,b.K)}}var Ra=0,Sa=null,M=[];function Na(a){var b=M[a];b.target.removeEventListener(b.h,b.B,b.s);M.splice(a,1)}
function Ta(a){function b(b){++Ra;Sa=a;Qa();a.D(b);Qa();--Ra}if(a.A)a.B=b,a.target.addEventListener(a.h,b,a.s),M.push(a),Ma();else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].h==a.h&&Na(c--)}
function Ua(a,b,c,d){L||(L=ka(36));a=Oa(a);Ta({target:a,u:!1,h:"resize",A:d,D:function(c){c=c||window.event;if(c.target==a){var f=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0];z[L>>2]=c.detail;z[L+4>>2]=document.body.clientWidth;
z[L+8>>2]=document.body.clientHeight;z[L+12>>2]=window.innerWidth;z[L+16>>2]=window.innerHeight;z[L+20>>2]=window.outerWidth;z[L+24>>2]=window.outerHeight;z[L+28>>2]=f[0];z[L+32>>2]=f[1];e.dynCall_iiii(d,10,L,b)&&c.preventDefault()}},s:c})}var N=null,Va="",O=0,Wa=null,Xa=0,Ya=0,Za=0,$a=0,ab=[],bb={},cb,db,eb,fb=!1,gb=!1,hb=[];
function ib(){function a(){gb=document.pointerLockElement===e.canvas||document.mozPointerLockElement===e.canvas||document.webkitPointerLockElement===e.canvas||document.msPointerLockElement===e.canvas}e.preloadPlugins||(e.preloadPlugins=[]);if(!jb){jb=!0;try{kb=!0}catch(c){kb=!1,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}lb="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:kb?null:console.log("warning: no BlobBuilder");
mb="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:void 0;e.m||"undefined"!==typeof mb||(console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),e.m=!0);e.preloadPlugins.push({canHandle:function(a){return!e.m&&/\.(jpg|jpeg|png|bmp)$/i.test(a)},handle:function(a,b,f,g){var c=null;if(kb)try{c=new Blob([a],{type:nb(b)}),c.size!==a.length&&(c=new Blob([(new Uint8Array(a)).buffer],{type:nb(b)}))}catch(r){ha("Blob constructor present but fails: "+
r+"; falling back to blob builder")}c||(c=new lb,c.append((new Uint8Array(a)).buffer),c=c.getBlob());var d=mb.createObjectURL(c),m=new Image;m.onload=function(){assert(m.complete,"Image "+b+" could not be decoded");var c=document.createElement("canvas");c.width=m.width;c.height=m.height;c.getContext("2d").drawImage(m,0,0);e.preloadedImages[b]=c;mb.revokeObjectURL(d);f&&f(a)};m.onerror=function(){console.log("Image "+d+" could not be decoded");g&&g()};m.src=d}});e.preloadPlugins.push({canHandle:function(a){return!e.S&&
a.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(a,b,f,g){function c(c){m||(m=!0,e.preloadedAudios[b]=c,f&&f(a))}function d(){m||(m=!0,e.preloadedAudios[b]=new Audio,g&&g())}var m=!1;if(kb){try{var r=new Blob([a],{type:nb(b)})}catch(C){return d()}r=mb.createObjectURL(r);var y=new Audio;y.addEventListener("canplaythrough",function(){c(y)},!1);y.onerror=function(){if(!m){console.log("warning: browser could not fully decode audio "+b+", trying slower base64 approach");for(var d="",f=0,g=0,
h=0;h<a.length;h++)for(f=f<<8|a[h],g+=8;6<=g;){var n=f>>g-6&63;g-=6;d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[n]}2==g?(d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&3)<<4],d+="=="):4==g&&(d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&15)<<2],d+="=");y.src="data:audio/x-"+b.substr(-3)+";base64,"+d;c(y)}};y.src=r;ob(function(){c(y)})}else return d()}});var b=e.canvas;b&&(b.requestPointerLock=b.requestPointerLock||b.mozRequestPointerLock||
b.webkitRequestPointerLock||b.msRequestPointerLock||function(){},b.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||function(){},b.exitPointerLock=b.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",a,!1),document.addEventListener("mozpointerlockchange",a,!1),document.addEventListener("webkitpointerlockchange",a,!1),document.addEventListener("mspointerlockchange",a,!1),e.elementPointerLock&&
b.addEventListener("click",function(a){!gb&&e.canvas.requestPointerLock&&(e.canvas.requestPointerLock(),a.preventDefault())},!1))}}
function pb(a,b,c,d){if(b&&e.g&&a==e.canvas)return e.g;if(b){var f={antialias:!1,alpha:!1};if(d)for(var g in d)f[g]=d[g];if(f=qb(a,f))var h=rb[f].GLctx}else h=a.getContext("2d");if(!h)return null;c&&(b||assert("undefined"===typeof GLctx,"cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),e.g=h,b&&sb(f),e.U=b,hb.forEach(function(a){a()}),ib());return h}var tb=!1,ub=void 0,P=void 0;
function vb(a,b,c){function d(){fb=!1;var a=f.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a?(f.exitFullscreen=document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){},f.exitFullscreen=f.exitFullscreen.bind(document),ub&&f.requestPointerLock(),fb=!0,P&&("undefined"!=typeof SDL&&
(z[SDL.screen>>2]=E[SDL.screen>>2]|8388608),wb())):(a.parentNode.insertBefore(f,a),a.parentNode.removeChild(a),P&&("undefined"!=typeof SDL&&(z[SDL.screen>>2]=E[SDL.screen>>2]&-8388609),wb()));if(e.onFullScreen)e.onFullScreen(fb);if(e.onFullscreen)e.onFullscreen(fb);xb(f)}ub=a;P=b;yb=c;"undefined"===typeof ub&&(ub=!0);"undefined"===typeof P&&(P=!1);"undefined"===typeof yb&&(yb=null);var f=e.canvas;tb||(tb=!0,document.addEventListener("fullscreenchange",d,!1),document.addEventListener("mozfullscreenchange",
d,!1),document.addEventListener("webkitfullscreenchange",d,!1),document.addEventListener("MSFullscreenChange",d,!1));var g=document.createElement("div");f.parentNode.insertBefore(g,f);g.appendChild(f);g.requestFullscreen=g.requestFullscreen||g.mozRequestFullScreen||g.msRequestFullscreen||(g.webkitRequestFullscreen?function(){g.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}:null)||(g.webkitRequestFullScreen?function(){g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:null);c?g.requestFullscreen({V:c}):
g.requestFullscreen()}function zb(a,b,c){e.printErr("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");zb=function(a,b,c){return vb(a,b,c)};return vb(a,b,c)}var Ab=0;function Bb(a){var b=Date.now();if(0===Ab)Ab=b+1E3/60;else for(;b+2>=Ab;)Ab+=1E3/60;setTimeout(a,Math.max(Ab-b,0))}
function Cb(a){"undefined"===typeof window?Bb(a):(window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||Bb),window.requestAnimationFrame(a))}function ob(a){e.noExitRuntime=!0;setTimeout(function(){w||a()},1E4)}
function nb(a){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".")+1)]}var Db=[];function wb(){var a=e.canvas;Db.forEach(function(b){b(a.width,a.height)})}
function xb(a,b,c){b&&c?(a.I=b,a.F=c):(b=a.I,c=a.F);var d=b,f=c;e.forcedAspectRatio&&0<e.forcedAspectRatio&&(d/f<e.forcedAspectRatio?d=Math.round(f*e.forcedAspectRatio):f=Math.round(d/e.forcedAspectRatio));if((document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a.parentNode&&"undefined"!=typeof screen){var g=Math.min(screen.width/d,screen.height/f);d=Math.round(d*g);f=Math.round(f*g)}P?
(a.width!=d&&(a.width=d),a.height!=f&&(a.height=f),"undefined"!=typeof a.style&&(a.style.removeProperty("width"),a.style.removeProperty("height"))):(a.width!=b&&(a.width=b),a.height!=c&&(a.height=c),"undefined"!=typeof a.style&&(d!=b||f!=c?(a.style.setProperty("width",d+"px","important"),a.style.setProperty("height",f+"px","important")):(a.style.removeProperty("width"),a.style.removeProperty("height"))))}var jb,kb,lb,mb,yb;
function Eb(a,b){Ya=a;Za=b;if(Wa)if(0==a)N=function(){var a=Math.max(0,db+b-Q())|0;setTimeout(eb,a)},Va="timeout";else if(1==a)N=function(){Cb(eb)},Va="rAF";else if(2==a){if("undefined"===typeof setImmediate){var c=[];addEventListener("message",function(a){if("setimmediate"===a.data||"setimmediate"===a.data.target)a.stopPropagation(),c.shift()()},!0);setImmediate=function(a){c.push(a);q?(void 0===e.setImmediates&&(e.setImmediates=[]),e.setImmediates.push(a),postMessage({target:"setimmediate"})):postMessage("setimmediate",
"*")}}N=function(){setImmediate(eb)};Va="immediate"}}function Q(){x()}
function Fb(a,b,c,d,f){e.noExitRuntime=!0;assert(!Wa,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");Wa=a;Xa=d;var g="undefined"!==typeof d?function(){e.dynCall_vi(a,d)}:function(){e.dynCall_v(a)};var h=O;eb=function(){if(!w)if(0<ab.length){var a=Date.now(),b=ab.shift();b.C(b.f);if(cb){var c=cb,d=0==c%1?c-1:Math.floor(c);cb=b.L?d:(8*c+(d+.5))/9}console.log('main loop blocker "'+
b.name+'" took '+(Date.now()-a)+" ms");e.setStatus&&(a=e.statusMessage||"Please wait...",b=cb,c=bb.O,b?b<c?e.setStatus(a+" ("+(c-b)+"/"+c+")"):e.setStatus(a):e.setStatus(""));h<O||setTimeout(eb,0)}else if(!(h<O))if($a=$a+1|0,1==Ya&&1<Za&&0!=$a%Za)N();else{0==Ya&&(db=Q());"timeout"===Va&&e.g&&(e.printErr("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"),
Va="");a:if(!(w||e.preMainLoop&&!1===e.preMainLoop())){try{g()}catch(C){if(C instanceof u)break a;C&&"object"===typeof C&&C.stack&&e.printErr("exception thrown: "+[C,C.stack]);throw C;}e.postMainLoop&&e.postMainLoop()}h<O||("object"===typeof SDL&&SDL.audio&&SDL.audio.H&&SDL.audio.H(),N())}};f||(b&&0<b?Eb(0,1E3/b):Eb(1,1),N());if(c)throw"SimulateInfiniteLoop";}var Gb=1,Hb=0,Ib=[],R=[],Jb=[],Kb=[],S=[],T=[],rb=[],U=null,Lb={},V={},Nb={},Ob=[];function W(a){Hb||(Hb=a)}
function X(a){for(var b=Gb++,c=a.length;c<b;c++)a[c]=null;return b}var Pb=null,Y=[0];
function qb(a,b){function c(a){d=a.statusMessage||d}"undefined"===typeof b.majorVersion&&"undefined"===typeof b.minorVersion&&(b.majorVersion="undefined"!==typeof WebGL2RenderingContext?2:1,b.minorVersion=0);var d="?";try{a.addEventListener("webglcontextcreationerror",c,!1);try{if(1==b.majorVersion&&0==b.minorVersion)var f=a.getContext("webgl",b)||a.getContext("experimental-webgl",b);else if(2==b.majorVersion&&0==b.minorVersion)f=a.getContext("webgl2",b);else throw"Unsupported WebGL context version "+
majorVersion+"."+minorVersion+"!";}finally{a.removeEventListener("webglcontextcreationerror",c,!1)}if(!f)throw":(";}catch(g){return e.print("Could not create canvas: "+[d,g,JSON.stringify(b)]),0}return f?Qb(f,b):0}
function Qb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=X(rb),f={handle:d,attributes:b,version:b.majorVersion,GLctx:a};f.a=2<=f.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.i=f);rb[d]=f;("undefined"===typeof b.enableExtensionsByDefault||b.enableExtensionsByDefault)&&Rb(f);return d}function sb(a){a=rb[a];if(!a)return!1;GLctx=e.g=a.GLctx;U=a;return!0}
function Rb(a){a||(a=U);if(!a.G){a.G=!0;var b=a.GLctx;a.R=b.getParameter(b.MAX_VERTEX_ATTRIBS);if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,f){c.drawArraysInstancedANGLE(a,b,d,f)},b.drawElementsInstanced=function(a,b,d,f,g){c.drawElementsInstancedANGLE(a,b,d,f,g)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},
b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var f=b.getExtension("WEBGL_draw_buffers");f&&(b.drawBuffers=function(a,b){f.drawBuffersWEBGL(a,b)})}b.N=b.getExtension("EXT_disjoint_timer_query");var g="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear WEBGL_compressed_texture_atc WEBKIT_WEBGL_compressed_texture_pvrtc WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_frag_depth EXT_sRGB WEBGL_draw_buffers WEBGL_shared_resources EXT_shader_texture_lod EXT_color_buffer_float".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=g.indexOf(a)&&b.getExtension(a)})}}function _glDrawArrays(a,b,c){GLctx.drawArrays(a,b,c)}function _glDrawElements(a,b,c,d){GLctx.drawElements(a,b,c,d)}
function Sb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:c=GLctx.getParameter(34467).length;break;case 33309:if(2>GLctx.canvas.i.version){W(1282);return}c=2*GLctx.getSupportedExtensions().length;break;case 33307:case 33308:if(2>GLctx.canvas.i.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(c=GLctx.getParameter(a),typeof c){case "number":break;case "boolean":c=c?1:0;break;case "string":W(1280);return;case "object":if(null===
c)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:W(1280);return}else{if(c instanceof Float32Array||c instanceof Uint32Array||c instanceof Int32Array||c instanceof Array){for(a=0;a<c.length;++a)z[b+4*a>>2]=c[a];return}if(c instanceof WebGLBuffer||c instanceof WebGLProgram||c instanceof WebGLFramebuffer||c instanceof WebGLRenderbuffer||c instanceof WebGLQuery||c instanceof WebGLSampler||c instanceof WebGLSync||
c instanceof WebGLTransformFeedback||c instanceof WebGLVertexArrayObject||c instanceof WebGLTexture)c=c.name|0;else{W(1280);return}}break;default:W(1280);return}z[b>>2]=c}else W(1281)}
function Tb(a,b,c,d,f){switch(b){case 6406:case 6409:case 6402:case 6403:case 36244:b=1;break;case 6410:case 33319:case 33320:b=2;break;case 6407:case 35904:case 36248:b=3;break;case 6408:case 35906:case 36249:b=4;break;default:return W(1280),null}switch(a){case 5121:case 5120:b*=1;break;case 5123:case 36193:case 5131:case 5122:b*=2;break;case 5125:case 5126:case 5124:b*=4;break;case 34042:case 35902:case 33640:case 35899:case 34042:b=4;break;case 33635:case 32819:case 32820:b=2;break;default:return W(1280),
null}c*=b;b=4*Math.floor((c+4-1)/4);d=0>=d?0:(d-1)*b+c;switch(a){case 5120:return A.subarray(f,f+d);case 5121:return B.subarray(f,f+d);case 5122:return qa.subarray(f>>1,f+d>>1);case 5124:return z.subarray(f>>2,f+d>>2);case 5126:return F.subarray(f>>2,f+d>>2);case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return E.subarray(f>>2,f+d>>2);case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return ra.subarray(f>>1,f+d>>1);default:return W(1280),null}}
function Ub(a){switch(a){case 5120:return A;case 5121:return B;case 5122:return qa;case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return ra;case 5124:return z;case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return E;case 5126:return F;default:return null}}
function Vb(a){switch(a){case 5120:case 5121:return 0;case 5122:case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return 1;case 5124:case 5126:case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return 2;default:return 0}}
(function(){if("undefined"!==typeof window){window.addEventListener("gamepadconnected",function(){++Ka});window.addEventListener("gamepaddisconnected",function(){--Ka});var a=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads?navigator.webkitGetGamepads():null;a&&(Ka=a.length)}})();e.requestFullScreen=function(a,b,c){e.printErr("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");e.requestFullScreen=e.requestFullscreen;zb(a,b,c)};
e.requestFullscreen=function(a,b,c){vb(a,b,c)};e.requestAnimationFrame=function(a){Cb(a)};e.setCanvasSize=function(a,b,c){xb(e.canvas,a,b);c||wb()};e.pauseMainLoop=function(){N=null;O++};e.resumeMainLoop=function(){O++;var a=Ya,b=Za,c=Wa;Wa=null;Fb(c,0,!1,Xa,!0);Eb(a,b);N()};e.getUserMedia=function(){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia);window.getUserMedia(void 0)};e.createContext=function(a,b,c,d){return pb(a,b,c,d)};
t?Q=function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:"undefined"!==typeof dateNow?Q=dateNow:"object"===typeof self&&self.performance&&"function"===typeof self.performance.now?Q=function(){return self.performance.now()}:"object"===typeof performance&&"function"===typeof performance.now?Q=function(){return performance.now()}:Q=Date.now;var GLctx;Pb=new Float32Array(256);for(var Z=0;256>Z;Z++)Y[Z]=Pb.subarray(0,Z+1);for(Z=0;32>Z;Z++)Ob.push(Array(Z));ya=da(4);ua=va=fa(v);wa=ua+Aa;xa=fa(wa);
z[ya>>2]=xa;ea=!0;function Wb(a){var b=Array(na(a)+1);ma(a,b,0,b.length);return b}e.wasmTableSize=4;e.wasmMaxTableSize=4;e.v={};
e.w={abort:x,enlargeMemory:function(){za()},getTotalMemory:function(){return H},abortOnCannotGrowMemory:za,___setErrNo:function(a){e.___errno_location&&(z[e.___errno_location()>>2]=a);return a},_emscripten_get_element_css_size:function(a,b,c){a=a?Oa(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),G[b>>3]=a.right-a.left,G[c>>3]=a.bottom-a.top):(G[b>>3]=a.clientWidth,G[c>>3]=a.clientHeight);return 0},_emscripten_memcpy_big:function(a,b,c){B.set(B.subarray(b,b+c),a);return a},
_emscripten_set_canvas_element_size:function(a,b,c){a=a?Oa(a):e.canvas;if(!a)return-4;a.width=b;a.height=c;return 0},_emscripten_set_main_loop:Fb,_emscripten_set_resize_callback:function(a,b,c,d){Ua(a,b,c,d);return 0},_emscripten_webgl_create_context:function(a,b){var c={};c.alpha=!!z[b>>2];c.depth=!!z[b+4>>2];c.stencil=!!z[b+8>>2];c.antialias=!!z[b+12>>2];c.premultipliedAlpha=!!z[b+16>>2];c.preserveDrawingBuffer=!!z[b+20>>2];c.preferLowPowerToHighPerformance=!!z[b+24>>2];c.failIfMajorPerformanceCaveat=
!!z[b+28>>2];c.majorVersion=z[b+32>>2];c.minorVersion=z[b+36>>2];c.explicitSwapControl=z[b+44>>2];a=(a=D(a))&&"#canvas"!==a||!e.canvas?Lb[a]||Oa(a):e.canvas.id?Lb[e.canvas.id]||Oa(e.canvas.id):e.canvas;return a?c.explicitSwapControl?(console.error("emscripten_webgl_create_context failed: explicitSwapControl is not supported, please rebuild with -s OFFSCREENCANVAS_SUPPORT=1 to enable targeting the experimental OffscreenCanvas specification!"),0):qb(a,c):0},_emscripten_webgl_init_context_attributes:function(a){z[a>>
2]=1;z[a+4>>2]=1;z[a+8>>2]=0;z[a+12>>2]=1;z[a+16>>2]=1;z[a+20>>2]=0;z[a+24>>2]=0;z[a+28>>2]=0;z[a+32>>2]=1;z[a+36>>2]=0;z[a+40>>2]=1;z[a+44>>2]=0},_emscripten_webgl_make_context_current:function(a){return sb(a)?0:-5},_glActiveTexture:function(a){GLctx.activeTexture(a)},_glAttachShader:function(a,b){GLctx.attachShader(R[a],T[b])},_glBindBuffer:function(a,b){var c=b?Ib[b]:null;35051==a?GLctx.M=b:35052==a&&(GLctx.l=b);GLctx.bindBuffer(a,c)},_glBindFramebuffer:function(a,b){GLctx.bindFramebuffer(a,b?
Jb[b]:null)},_glBindTexture:function(a,b){GLctx.bindTexture(a,b?Kb[b]:null)},_glBlendColor:function(a,b,c,d){GLctx.blendColor(a,b,c,d)},_glBlendEquationSeparate:function(a,b){GLctx.blendEquationSeparate(a,b)},_glBlendFuncSeparate:function(a,b,c,d){GLctx.blendFuncSeparate(a,b,c,d)},_glBufferData:function(a,b,c,d){c?U.a?GLctx.bufferData(a,B,d,c,b):GLctx.bufferData(a,B.subarray(c,c+b),d):GLctx.bufferData(a,b,d)},_glBufferSubData:function(a,b,c,d){U.a?GLctx.bufferSubData(a,b,B,d,c):GLctx.bufferSubData(a,
b,B.subarray(d,d+c))},_glClear:function(a){GLctx.clear(a)},_glClearColor:function(a,b,c,d){GLctx.clearColor(a,b,c,d)},_glClearDepthf:function(a){GLctx.clearDepth(a)},_glClearStencil:function(a){GLctx.clearStencil(a)},_glColorMask:function(a,b,c,d){GLctx.colorMask(!!a,!!b,!!c,!!d)},_glCompileShader:function(a){GLctx.compileShader(T[a])},_glCreateProgram:function(){var a=X(R),b=GLctx.createProgram();b.name=a;R[a]=b;return a},_glCreateShader:function(a){var b=X(T);T[b]=GLctx.createShader(a);return b},
_glCullFace:function(a){GLctx.cullFace(a)},_glDeleteProgram:function(a){if(a){var b=R[a];b?(GLctx.deleteProgram(b),b.name=0,R[a]=null,V[a]=null):W(1281)}},_glDeleteShader:function(a){if(a){var b=T[a];b?(GLctx.deleteShader(b),T[a]=null):W(1281)}},_glDepthFunc:function(a){GLctx.depthFunc(a)},_glDepthMask:function(a){GLctx.depthMask(!!a)},_glDisable:function(a){GLctx.disable(a)},_glDisableVertexAttribArray:function(a){GLctx.disableVertexAttribArray(a)},_glDrawArrays:_glDrawArrays,_glDrawElements:_glDrawElements,
_glEnable:function(a){GLctx.enable(a)},_glEnableVertexAttribArray:function(a){GLctx.enableVertexAttribArray(a)},_glFrontFace:function(a){GLctx.frontFace(a)},_glGenBuffers:function(a,b){for(var c=0;c<a;c++){var d=GLctx.createBuffer();if(!d){for(W(1282);c<a;)z[b+4*c++>>2]=0;break}var f=X(Ib);d.name=f;Ib[f]=d;z[b+4*c>>2]=f}},_glGenTextures:function(a,b){for(var c=0;c<a;c++){var d=GLctx.createTexture();if(!d){for(W(1282);c<a;)z[b+4*c++>>2]=0;break}var f=X(Kb);d.name=f;Kb[f]=d;z[b+4*c>>2]=f}},_glGetAttribLocation:function(a,
b){a=R[a];b=D(b);return GLctx.getAttribLocation(a,b)},_glGetIntegerv:function(a,b){Sb(a,b)},_glGetProgramInfoLog:function(a,b,c,d){a=GLctx.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");0<b&&d?(b=ma(a,B,d,b),c&&(z[c>>2]=b)):c&&(z[c>>2]=0)},_glGetProgramiv:function(a,b,c){if(c)if(a>=Gb)W(1281);else{var d=V[a];if(d)if(35716==b)a=GLctx.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),z[c>>2]=a.length+1;else if(35719==b)z[c>>2]=d.j;else if(35722==b){if(-1==d.b){a=R[a];var f=GLctx.getProgramParameter(a,
GLctx.ACTIVE_ATTRIBUTES);for(b=d.b=0;b<f;++b)d.b=Math.max(d.b,GLctx.getActiveAttrib(a,b).name.length+1)}z[c>>2]=d.b}else if(35381==b){if(-1==d.c)for(a=R[a],f=GLctx.getProgramParameter(a,GLctx.J),b=d.c=0;b<f;++b){var g=GLctx.P(a,b);d.c=Math.max(d.c,g.length+1)}z[c>>2]=d.c}else z[c>>2]=GLctx.getProgramParameter(R[a],b);else W(1282)}else W(1281)},_glGetShaderInfoLog:function(a,b,c,d){a=GLctx.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");0<b&&d?(b=ma(a,B,d,b),c&&(z[c>>2]=b)):c&&(z[c>>2]=0)},
_glGetShaderiv:function(a,b,c){c?35716==b?(a=GLctx.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),z[c>>2]=a.length+1):35720==b?(a=GLctx.getShaderSource(T[a]),z[c>>2]=null===a||0==a.length?0:a.length+1):z[c>>2]=GLctx.getShaderParameter(T[a],b):W(1281)},_glGetString:function(a){if(Nb[a])return Nb[a];switch(a){case 7936:case 7937:case 37445:case 37446:var b=ja(Wb(GLctx.getParameter(a)));break;case 7938:b=GLctx.getParameter(GLctx.VERSION);b=2<=GLctx.canvas.i.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+
b+")";b=ja(Wb(b));break;case 7939:b=GLctx.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=ja(Wb(c.join(" ")));break;case 35724:b=GLctx.getParameter(GLctx.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=ja(Wb(b));break;default:return W(1280),0}return Nb[a]=b},_glGetUniformLocation:function(a,b){b=D(b);var c=0;if(-1!==b.indexOf("]",b.length-
1)){var d=b.lastIndexOf("["),f=b.slice(d+1,-1);if(0<f.length&&(c=parseInt(f),0>c))return-1;b=b.slice(0,d)}a=V[a];return a?(b=a.o[b])&&c<b[0]?b[1]+c:-1:-1},_glLinkProgram:function(a){GLctx.linkProgram(R[a]);V[a]=null;var b=R[a];V[a]={o:{},j:0,b:-1,c:-1};a=V[a];for(var c=a.o,d=GLctx.getProgramParameter(b,GLctx.ACTIVE_UNIFORMS),f=0;f<d;++f){var g=GLctx.getActiveUniform(b,f),h=g.name;a.j=Math.max(a.j,h.length+1);-1!==h.indexOf("]",h.length-1)&&(h=h.slice(0,h.lastIndexOf("[")));var n=GLctx.getUniformLocation(b,
h);if(null!=n){var m=X(S);c[h]=[g.size,m];S[m]=n;for(var r=1;r<g.size;++r)n=GLctx.getUniformLocation(b,h+"["+r+"]"),m=X(S),S[m]=n}}},_glPolygonOffset:function(a,b){GLctx.polygonOffset(a,b)},_glScissor:function(a,b,c,d){GLctx.scissor(a,b,c,d)},_glShaderSource:function(a,b,c,d){for(var f="",g=0;g<b;++g){if(d){var h=z[d+4*g>>2];h=0>h?D(z[c+4*g>>2]):D(z[c+4*g>>2],h)}else h=D(z[c+4*g>>2]);f+=h}GLctx.shaderSource(T[a],f)},_glStencilFunc:function(a,b,c){GLctx.stencilFunc(a,b,c)},_glStencilFuncSeparate:function(a,
b,c,d){GLctx.stencilFuncSeparate(a,b,c,d)},_glStencilMask:function(a){GLctx.stencilMask(a)},_glStencilOp:function(a,b,c){GLctx.stencilOp(a,b,c)},_glStencilOpSeparate:function(a,b,c,d){GLctx.stencilOpSeparate(a,b,c,d)},_glTexImage2D:function(a,b,c,d,f,g,h,n,m){if(U.a)GLctx.l?GLctx.texImage2D(a,b,c,d,f,g,h,n,m):0!=m?GLctx.texImage2D(a,b,c,d,f,g,h,n,Ub(n),m>>Vb(n)):GLctx.texImage2D(a,b,c,d,f,g,h,n,null);else{var r=null;m&&(r=Tb(n,h,d,f,m));GLctx.texImage2D(a,b,c,d,f,g,h,n,r)}},_glTexParameteri:function(a,
b,c){GLctx.texParameteri(a,b,c)},_glTexSubImage2D:function(a,b,c,d,f,g,h,n,m){if(U.a)GLctx.l?GLctx.texSubImage2D(a,b,c,d,f,g,h,n,m):0!=m?GLctx.texSubImage2D(a,b,c,d,f,g,h,n,Ub(n),m>>Vb(n)):GLctx.texSubImage2D(a,b,c,d,f,g,h,n,null);else{var r=null;m&&(r=Tb(n,h,f,g,m));GLctx.texSubImage2D(a,b,c,d,f,g,h,n,r)}},_glUniform1fv:function(a,b,c){if(U.a)GLctx.uniform1fv(S[a],F,c>>2,b);else{if(256>=b){var d=Y[b-1];for(var f=0;f<b;++f)d[f]=F[c+4*f>>2]}else d=F.subarray(c>>2,c+4*b>>2);GLctx.uniform1fv(S[a],d)}},
_glUniform1i:function(a,b){GLctx.uniform1i(S[a],b)},_glUniform2fv:function(a,b,c){if(U.a)GLctx.uniform2fv(S[a],F,c>>2,2*b);else{if(256>=2*b){var d=Y[2*b-1];for(var f=0;f<2*b;f+=2)d[f]=F[c+4*f>>2],d[f+1]=F[c+(4*f+4)>>2]}else d=F.subarray(c>>2,c+8*b>>2);GLctx.uniform2fv(S[a],d)}},_glUniform3fv:function(a,b,c){if(U.a)GLctx.uniform3fv(S[a],F,c>>2,3*b);else{if(256>=3*b){var d=Y[3*b-1];for(var f=0;f<3*b;f+=3)d[f]=F[c+4*f>>2],d[f+1]=F[c+(4*f+4)>>2],d[f+2]=F[c+(4*f+8)>>2]}else d=F.subarray(c>>2,c+12*b>>2);
GLctx.uniform3fv(S[a],d)}},_glUniform4fv:function(a,b,c){if(U.a)GLctx.uniform4fv(S[a],F,c>>2,4*b);else{if(256>=4*b){var d=Y[4*b-1];for(var f=0;f<4*b;f+=4)d[f]=F[c+4*f>>2],d[f+1]=F[c+(4*f+4)>>2],d[f+2]=F[c+(4*f+8)>>2],d[f+3]=F[c+(4*f+12)>>2]}else d=F.subarray(c>>2,c+16*b>>2);GLctx.uniform4fv(S[a],d)}},_glUniformMatrix4fv:function(a,b,c,d){if(U.a)GLctx.uniformMatrix4fv(S[a],!!c,F,d>>2,16*b);else{if(256>=16*b){var f=Y[16*b-1];for(var g=0;g<16*b;g+=16)f[g]=F[d+4*g>>2],f[g+1]=F[d+(4*g+4)>>2],f[g+2]=F[d+
(4*g+8)>>2],f[g+3]=F[d+(4*g+12)>>2],f[g+4]=F[d+(4*g+16)>>2],f[g+5]=F[d+(4*g+20)>>2],f[g+6]=F[d+(4*g+24)>>2],f[g+7]=F[d+(4*g+28)>>2],f[g+8]=F[d+(4*g+32)>>2],f[g+9]=F[d+(4*g+36)>>2],f[g+10]=F[d+(4*g+40)>>2],f[g+11]=F[d+(4*g+44)>>2],f[g+12]=F[d+(4*g+48)>>2],f[g+13]=F[d+(4*g+52)>>2],f[g+14]=F[d+(4*g+56)>>2],f[g+15]=F[d+(4*g+60)>>2]}else f=F.subarray(d>>2,d+64*b>>2);GLctx.uniformMatrix4fv(S[a],!!c,f)}},_glUseProgram:function(a){GLctx.useProgram(a?R[a]:null)},_glVertexAttribDivisorEXT:function(a,b){GLctx.vertexAttribDivisor(a,
b)},_glVertexAttribPointer:function(a,b,c,d,f,g){GLctx.vertexAttribPointer(a,b,c,!!d,f,g)},_glViewport:function(a,b,c,d){GLctx.viewport(a,b,c,d)},DYNAMICTOP_PTR:ya,STACKTOP:va};var Xb=e.asm(e.v,e.w,buffer);e.asm=Xb;e._main=function(){return e.asm._main.apply(null,arguments)};var ka=e._malloc=function(){return e.asm._malloc.apply(null,arguments)},pa=e.stackAlloc=function(){return e.asm.stackAlloc.apply(null,arguments)};e.dynCall_iiii=function(){return e.asm.dynCall_iiii.apply(null,arguments)};
e.dynCall_v=function(){return e.asm.dynCall_v.apply(null,arguments)};e.asm=Xb;function u(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}u.prototype=Error();u.prototype.constructor=u;K=function Yb(){e.calledRun||Zb();e.calledRun||(K=Yb)};
e.callMain=function(a){a=a||[];Ga||(Ga=!0,I(Ca));var b=a.length+1,c=pa(4*(b+1));z[c>>2]=oa(e.thisProgram);for(var d=1;d<b;d++)z[(c>>2)+d]=oa(a[d-1]);z[(c>>2)+b]=0;try{var f=e._main(b,c,0);$b(f,!0)}catch(g){g instanceof u||("SimulateInfiniteLoop"==g?e.noExitRuntime=!0:((a=g)&&"object"===typeof g&&g.stack&&(a=[g,g.stack]),e.printErr("exception thrown: "+a),e.quit(1,g)))}finally{}};
function Zb(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!w)){Ga||(Ga=!0,I(Ca));I(Da);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&ac&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();Fa.unshift(b)}I(Fa)}}a=a||e.arguments;if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ha();I(Ba);0<J||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}}e.run=Zb;function $b(a,b){if(!b||!e.noExitRuntime||0!==a){if(!e.noExitRuntime&&(w=!0,va=void 0,I(Ea),e.onExit))e.onExit(a);t&&process.exit(a);e.quit(a,new u(a))}}e.exit=$b;function x(a){if(e.onAbort)e.onAbort(a);void 0!==a?(e.print(a),e.printErr(a),a=JSON.stringify(a)):a="";w=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=x;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var ac=!0;
e.noInitialRun&&(ac=!1);e.noExitRuntime=!0;Zb();
