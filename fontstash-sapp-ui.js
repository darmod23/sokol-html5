var g;g||(g=typeof Module !== 'undefined' ? Module : {});var h={},k;for(k in g)g.hasOwnProperty(k)&&(h[k]=g[k]);var n=[],aa="./this.program";function t(a,b){throw b;}var u=!1,v=!1,ba=!1,ca=!1,da=!1;u="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!v;da=!u&&!ba&&!v;var w="",ea,fa;
if(ba){w=__dirname+"/";var ha,ia;ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);a=ha.readFileSync(a);return b?a:a.toString()};fa=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||x("Assertion failed: undefined");return a};1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/"));n=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=g);process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;});process.on("unhandledRejection",
x);t=function(a){process.exit(a)};g.inspect=function(){return"[Emscripten Module object]"}}else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),fa=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||x("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?n=scriptArgs:"undefined"!=typeof arguments&&(n=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===
typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=g.print||console.log.bind(console),z=g.printErr||console.warn.bind(console);for(k in h)h.hasOwnProperty(k)&&(g[k]=h[k]);h=null;g.arguments&&(n=g.arguments);g.thisProgram&&(aa=g.thisProgram);g.quit&&(t=g.quit);var la;g.wasmBinary&&(la=g.wasmBinary);var ma;g.noExitRuntime&&(ma=g.noExitRuntime);"object"!==typeof WebAssembly&&z("no native wasm support detected");var A,na=!1,oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function pa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&oa)return oa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var f=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|f<<6|l:(e&7)<<18|f<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function B(a,b){return a?pa(C,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var f=0;f<a.length;++f){var l=a.charCodeAt(f);if(55296<=l&&57343>=l){var m=a.charCodeAt(++f);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ra(a){var b=qa(a)+1,c=sa(b);D(a,E,c,b);return c}function ta(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,E,C,ua,va,F,wa,G,H;
function xa(a){buffer=a;g.HEAP8=E=new Int8Array(a);g.HEAP16=ua=new Int16Array(a);g.HEAP32=F=new Int32Array(a);g.HEAPU8=C=new Uint8Array(a);g.HEAPU16=va=new Uint16Array(a);g.HEAPU32=wa=new Uint32Array(a);g.HEAPF32=G=new Float32Array(a);g.HEAPF64=H=new Float64Array(a)}var ya=g.TOTAL_MEMORY||33554432;g.wasmMemory?A=g.wasmMemory:A=new WebAssembly.Memory({initial:ya/65536});A&&(buffer=A.buffer);ya=buffer.byteLength;xa(buffer);F[1114600]=9701296;
function za(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.$b;"number"===typeof c?void 0===b.Qb?g.dynCall_v(c):g.dynCall_vi(c,b.Qb):c(void 0===b.Qb?null:b.Qb)}}}var Aa=[],Ba=[],Ca=[],Da=[],Ea=[];function Fa(){var a=g.preRun.shift();Aa.unshift(a)}var I=0,Ga=null,Ha=null;g.preloadedImages={};g.preloadedAudios={};
function Ia(){var a=J;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var J="fontstash-sapp-ui.wasm";if(!Ia()){var Ja=J;J=g.locateFile?g.locateFile(Ja,w):w+Ja}function Ka(){try{if(la)return new Uint8Array(la);if(fa)return fa(J);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function La(){return la||!u&&!v||"function"!==typeof fetch?new Promise(function(a){a(Ka())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ka()})}
function Ma(a){function b(a){g.asm=a.exports;I--;g.monitorRunDependencies&&g.monitorRunDependencies(I);0==I&&(null!==Ga&&(clearInterval(Ga),Ga=null),Ha&&(a=Ha,Ha=null,a()))}function c(a){b(a.instance)}function d(a){return La().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+a);x(a)})}var e={env:a,wasi_unstable:a};I++;g.monitorRunDependencies&&g.monitorRunDependencies(I);if(g.instantiateWasm)try{return g.instantiateWasm(e,b)}catch(f){return z("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(la||"function"!==typeof WebAssembly.instantiateStreaming||Ia()||"function"!==typeof fetch)return d(c);fetch(J,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(c,function(a){z("wasm streaming compile failed: "+a);z("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}g.asm=function(a,b){b.memory=A;b.table=new WebAssembly.Table({initial:97,maximum:97,element:"anyfunc"});return Ma(b)};Ba.push({$b:function(){Na()}});
var Oa=[null,[],[]],K=0;function L(){K+=4;return F[K-4>>2]}var Pa={};function Qa(){g.___errno_location&&(F[g.___errno_location()>>2]=12)}var Ra=0,Sa=0,M=0,Ta=0,Ua=0,Va=null,Wa=null,Xa=!1;function Ya(){for(var a=N.length-1;0<=a;--a)Za(a);N=[];$a=[]}var $a=[];function ab(){if(bb&&cb.Ib)for(var a=0;a<$a.length;++a){var b=$a[a];$a.splice(a,1);--a;b.lc.apply(this,b.dc)}}var bb=0,cb=null,N=[];function db(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}
function Za(a){var b=N[a];b.target.removeEventListener(b.Gb,b.Yb,b.Jb);N.splice(a,1)}function O(a){function b(b){++bb;cb=a;ab();a.Lb(b);ab();--bb}if(a.Kb)a.Yb=b,a.target.addEventListener(a.Gb,b,a.Jb),N.push(a),Xa||(Da.push(Ya),Xa=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Gb==a.Gb&&Za(c--)}var eb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function P(a){try{if(!a)return window;"number"===typeof a&&(a=eb[a]||B(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?g.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function fb(a){"number"===typeof a&&(a=B(a));return a&&"#canvas"!==a?"undefined"!==typeof gb&&hb[a]?hb[a]:P(a):"undefined"!==typeof gb&&hb.canvas?hb.canvas:g.canvas}
function ib(a,b,c,d,e,f){Ra||(Ra=Q(164));a={target:P(a),Ib:db()?!1:!0,Gb:f,Kb:d,Lb:function(a){a=a||event;var c=Ra;D(a.key?a.key:"",C,c+0,32);D(a.code?a.code:"",C,c+32,32);F[c+64>>2]=a.location;F[c+68>>2]=a.ctrlKey;F[c+72>>2]=a.shiftKey;F[c+76>>2]=a.altKey;F[c+80>>2]=a.metaKey;F[c+84>>2]=a.repeat;D(a.locale?a.locale:"",C,c+88,32);D(a.char?a.char:"",C,c+120,32);F[c+152>>2]=a.charCode;F[c+156>>2]=a.keyCode;F[c+160>>2]=a.which;R(d,e,c,b)&&a.preventDefault()},Jb:c};O(a)}
function jb(a,b,c){H[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();F[a+8>>2]=b.screenX;F[a+12>>2]=b.screenY;F[a+16>>2]=b.clientX;F[a+20>>2]=b.clientY;F[a+24>>2]=b.ctrlKey;F[a+28>>2]=b.shiftKey;F[a+32>>2]=b.altKey;F[a+36>>2]=b.metaKey;ua[a+40>>1]=b.button;ua[a+42>>1]=b.buttons;F[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Va;F[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Wa;if(g.canvas){var d=g.canvas.getBoundingClientRect();
F[a+60>>2]=b.clientX-d.left;F[a+64>>2]=b.clientY-d.top}else F[a+60>>2]=0,F[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},F[a+52>>2]=b.clientX-d.left,F[a+56>>2]=b.clientY-d.top):(F[a+52>>2]=0,F[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Va=b.screenX,Wa=b.screenY)}
function kb(a,b,c,d,e,f){Sa||(Sa=Q(72));a=P(a);c={target:a,Ib:"mousemove"!=f&&"mouseenter"!=f&&"mouseleave"!=f,Gb:f,Kb:d,Lb:function(c){c=c||event;jb(Sa,c,a);R(d,e,Sa,b)&&c.preventDefault()},Jb:c};db()&&"mousedown"==f&&(c.Ib=!1);O(c)}
function lb(a,b,c,d){Ta||(Ta=Q(36));a=P(a);O({target:a,Ib:!1,Gb:"resize",Kb:d,Lb:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ta;F[l>>2]=c.detail;F[l+4>>2]=document.body.clientWidth;F[l+8>>2]=document.body.clientHeight;
F[l+12>>2]=innerWidth;F[l+16>>2]=innerHeight;F[l+20>>2]=outerWidth;F[l+24>>2]=outerHeight;F[l+28>>2]=e[0];F[l+32>>2]=e[1];R(d,10,l,b)&&c.preventDefault()}},Jb:c})}
function mb(a,b,c,d,e,f){Ua||(Ua=Q(1684));a=P(a);O({target:a,Ib:"touchstart"==f||"touchend"==f,Gb:f,Kb:d,Lb:function(c){c=c||event;for(var f={},l=0;l<c.touches.length;++l){var q=c.touches[l];q.Sb=!1;f[q.identifier]=q}for(l=0;l<c.changedTouches.length;++l)q=c.changedTouches[l],f[q.identifier]=q,q.Sb=!0;for(l=0;l<c.targetTouches.length;++l)q=c.targetTouches[l],f[q.identifier].bc=!0;var r=q=Ua;F[r+4>>2]=c.ctrlKey;F[r+8>>2]=c.shiftKey;F[r+12>>2]=c.altKey;F[r+16>>2]=c.metaKey;r+=20;var U=g.canvas?g.canvas.getBoundingClientRect():
void 0,tb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},ub=0;for(l in f){var y=f[l];F[r>>2]=y.identifier;F[r+4>>2]=y.screenX;F[r+8>>2]=y.screenY;F[r+12>>2]=y.clientX;F[r+16>>2]=y.clientY;F[r+20>>2]=y.pageX;F[r+24>>2]=y.pageY;F[r+28>>2]=y.Sb;F[r+32>>2]=y.bc;U?(F[r+44>>2]=y.clientX-U.left,F[r+48>>2]=y.clientY-U.top):(F[r+44>>2]=0,F[r+48>>2]=0);F[r+36>>2]=y.clientX-tb.left;F[r+40>>2]=y.clientY-tb.top;r+=52;if(32<=++ub)break}F[q>>2]=ub;R(d,e,q,b)&&c.preventDefault()},Jb:c})}
function nb(a,b,c,d,e,f){a||(a=g.canvas);a={target:P(a),Ib:!1,Gb:f,Kb:d,Lb:function(a){a=a||event;R(d,e,0,b)&&a.preventDefault()},Jb:c};O(a)}
function ob(a,b,c,d,e){function f(c){c=c||event;jb(M,c,a);H[M+72>>3]=c.wheelDeltaX||0;H[M+80>>3]=-(c.wheelDeltaY||c.wheelDelta);H[M+88>>3]=0;F[M+96>>2]=0;R(d,9,M,b)&&c.preventDefault()}function l(c){c=c||event;var e=M;jb(e,c,a);H[e+72>>3]=c.deltaX;H[e+80>>3]=c.deltaY;H[e+88>>3]=c.deltaZ;F[e+96>>2]=c.deltaMode;R(d,9,e,b)&&c.preventDefault()}M||(M=Q(104));O({target:a,Ib:!0,Gb:e,Kb:d,Lb:"wheel"==e?l:f,Jb:c})}
var pb=1,qb=0,rb=[],S=[],sb=[],vb=[],wb=[],T=[],V=[],xb=[],yb={},W=null,hb={},zb={},Ab={},Bb={};function X(a){qb||(qb=a)}function Cb(a){for(var b=pb++,c=a.length;c<b;c++)a[c]=null;return b}var Db=null,Y=[0];
function Eb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=Q(8),e={handle:d,attributes:b,version:b.Wb,Pb:a};e.Fb=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.cc=e);yb[d]=e;("undefined"===typeof b.Ub||b.Ub)&&Fb(e);return d}
function Gb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,f){b.drawArraysInstancedANGLE(a,d,e,f)},a.drawElementsInstanced=function(a,d,e,f,l){b.drawElementsInstancedANGLE(a,d,e,f,l)})}
function Hb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Ib(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function Fb(a){a||(a=W);if(!a.ac){a.ac=!0;var b=a.Pb;2>a.version&&(Gb(b),Hb(b),Ib(b));b.fc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var gb={},Jb,Kb,Lb=["default","low-power","high-performance"],Mb=[];function Nb(a,b,c,d){for(var e=0;e<a;e++){var f=Z[c](),l=f&&Cb(d);f?(f.name=l,d[l]=f):X(1282);F[b+4*e>>2]=l}}
function Ob(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}c=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else X(1281)}
function Pb(a){var b=qa(a)+1,c=Q(b);D(a,C,c,b);return c}var Qb={6402:1,6403:1,6406:1,6407:3,6408:4,6409:1,6410:2,33319:2,33320:2,35904:3,35906:4,36244:1,36248:3,36249:4},Rb={5120:1,5121:1,5122:2,5123:2,5124:4,5125:4,5126:4,5131:2,32819:2,32820:2,33635:2,33640:4,34042:4,35899:4,35902:4,36193:2};
function Sb(a,b,c,d,e){if(b=Qb[b]*Rb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5120:return E.subarray(e,c);case 5121:return C.subarray(e,c);case 5122:return ua.subarray(e>>1,c>>1);case 5124:return F.subarray(e>>2,c>>2);case 5126:return G.subarray(e>>2,c>>2);case 5125:case 34042:case 35902:case 33640:case 35899:return wa.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return va.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}
function Tb(a){switch(a){case 5120:return E;case 5121:return C;case 5122:return ua;case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return va;case 5124:return F;case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return wa;case 5126:return G}}var Ub={5122:1,5123:1,5124:2,5125:2,5126:2,5131:1,32819:1,32820:1,33635:1,33640:2,34042:2,35899:2,35902:2,36193:1},Z;Db=new Float32Array(256);for(var Vb=0;256>Vb;Vb++)Y[Vb]=Db.subarray(0,Vb+1);for(var Wb=0;32>Wb;Wb++)Mb.push(Array(Wb));
var dc=g.asm({},{bb:function(){},eb:function(a,b){K=b;try{return Pa.Vb(),L(),L(),L(),L(),0}catch(c){return x(c),-c.Ob}},cb:function(a,b){K=b;try{var c=Pa.Vb(),d=L(),e=L();return Pa.hc(c,d,e)}catch(f){return x(f),-f.Ob}},q:function(a,b){K=b;return 0},gb:function(a,b){K=b;try{var c=B(L()),d=L(),e=L();return(void 0).open(c,d,e).fd}catch(f){return x(f),-f.Ob}},fb:function(a,b){K=b;return 0},aa:function(a,b){K=b;try{return Pa.Vb(),0}catch(c){return x(c),-c.Ob}},A:function(){},$:function(){return devicePixelRatio||
1},fa:function(a,b,c){a=a?P(a):g.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),H[b>>3]=a.right-a.left,H[c>>3]=a.bottom-a.top):(H[b>>3]=a.clientWidth,H[c>>3]=a.clientHeight);return 0},$a:function(a,b,c){C.set(C.subarray(b,b+c),a)},Qa:function(a,b){function c(d){Xb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Z:function(a,b,c){a=fb(a);if(!a)return-4;a.width=b;a.height=c;return 0},Za:function(a,b,c,d){ib(a,b,c,d,2,"keydown");return 0},Xa:function(a,b,
c,d){ib(a,b,c,d,1,"keypress");return 0},Ya:function(a,b,c,d){ib(a,b,c,d,3,"keyup");return 0},ua:function(a,b,c,d){kb(a,b,c,d,5,"mousedown");return 0},ib:function(a,b,c,d){kb(a,b,c,d,33,"mouseenter");return 0},ab:function(a,b,c,d){kb(a,b,c,d,34,"mouseleave");return 0},nb:function(a,b,c,d){kb(a,b,c,d,8,"mousemove");return 0},oa:function(a,b,c,d){kb(a,b,c,d,6,"mouseup");return 0},ob:function(a,b,c,d){lb(a,b,c,d);return 0},Ta:function(a,b,c,d){mb(a,b,c,d,25,"touchcancel");return 0},Ua:function(a,b,c,
d){mb(a,b,c,d,23,"touchend");return 0},Va:function(a,b,c,d){mb(a,b,c,d,24,"touchmove");return 0},Wa:function(a,b,c,d){mb(a,b,c,d,22,"touchstart");return 0},Sa:function(a,b,c,d){nb(a,b,c,d,31,"webglcontextlost");return 0},Ra:function(a,b,c,d){nb(a,b,c,d,32,"webglcontextrestored");return 0},_a:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(ob(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(ob(a,b,c,d,"mousewheel"),0):-1},Q:function(a,b){var c={};b>>=2;c.alpha=!!F[b];c.depth=
!!F[b+1];c.stencil=!!F[b+2];c.antialias=!!F[b+3];c.premultipliedAlpha=!!F[b+4];c.preserveDrawingBuffer=!!F[b+5];c.powerPreference=Lb[F[b+6]];c.failIfMajorPerformanceCaveat=!!F[b+7];c.Wb=F[b+8];c.ic=F[b+9];c.Ub=F[b+10];c.Zb=F[b+11];c.jc=F[b+12];c.kc=F[b+13];a=fb(a);!a||c.Zb?c=0:c=(a=1<c.Wb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?Eb(a,c):0;return c},xa:function(a,b){a=yb[a];b=B(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?Gb(Z):
"OES_vertex_array_object"==b?Hb(Z):"WEBGL_draw_buffers"==b&&Ib(Z);return!!a.Pb.getExtension(b)},Ka:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},za:function(a){W=yb[a];g.ec=Z=W&&W.Pb;return!a||Z?0:-5},db:function(a,b,c,d){try{for(var e=0,f=0;f<c;f++){for(var l=F[b+8*f>>2],m=F[b+(8*f+4)>>2],p=0;p<m;p++){var q=C[l+p],r=Oa[a];0===q||10===q?((1===a?ka:z)(pa(r,0)),r.length=0):r.push(q)}e+=m}F[d>>2]=e;return 0}catch(U){return x(U),-U.Ob}},g:function(a){Z.activeTexture(a)},
P:function(a,b){Z.attachShader(S[a],V[b])},b:function(a,b){35051==a?Z.Tb=b:35052==a&&(Z.Hb=b);Z.bindBuffer(a,rb[b])},h:function(a,b){Z.bindFramebuffer(a,sb[b])},T:function(a,b){Z.bindRenderbuffer(a,vb[b])},a:function(a,b){Z.bindTexture(a,wb[b])},_:function(a){Z.bindVertexArray(xb[a])},G:function(a,b,c,d){Z.blendColor(a,b,c,d)},H:function(a,b){Z.blendEquationSeparate(a,b)},I:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},m:function(a,b,c,d,e,f,l,m,p,q){Z.blitFramebuffer(a,b,c,d,e,f,l,m,p,q)},V:function(a,
b,c,d){W.Fb?c?Z.bufferData(a,C,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?C.subarray(c,c+b):b,d)},l:function(a,b,c,d){W.Fb?Z.bufferSubData(a,b,C,d,c):Z.bufferSubData(a,b,C.subarray(d,d+c))},L:function(a){Z.clear(a)},ya:function(a,b,c,d){Z.clearColor(a,b,c,d)},wa:function(a){Z.clearDepth(a)},va:function(a){Z.clearStencil(a)},x:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},jb:function(a){Z.compileShader(V[a])},Ha:function(a,b,c,d,e,f,l,m){W.Fb?Z.Hb?Z.compressedTexImage2D(a,b,c,d,e,f,l,m):Z.compressedTexImage2D(a,
b,c,d,e,f,C,m,l):Z.compressedTexImage2D(a,b,c,d,e,f,m?C.subarray(m,m+l):null)},Fa:function(a,b,c,d,e,f,l,m,p){W.Fb?Z.Hb?Z.compressedTexImage3D(a,b,c,d,e,f,l,m,p):Z.compressedTexImage3D(a,b,c,d,e,f,l,C,p,m):Z.compressedTexImage3D(a,b,c,d,e,f,l,p?C.subarray(p,p+m):null)},Da:function(){var a=Cb(S),b=Z.createProgram();b.name=a;S[a]=b;return a},lb:function(a){var b=Cb(V);V[b]=Z.createShader(a);return b},F:function(a){Z.cullFace(a)},Y:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=rb[d];e&&(Z.deleteBuffer(e),
e.name=0,rb[d]=null,d==Jb&&(Jb=0),d==Kb&&(Kb=0),d==Z.Tb&&(Z.Tb=0),d==Z.Hb&&(Z.Hb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=sb[d];e&&(Z.deleteFramebuffer(e),e.name=0,sb[d]=null)}},z:function(a){if(a){var b=S[a];b?(Z.deleteProgram(b),b.name=0,S[a]=null,zb[a]=null):X(1281)}},p:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=vb[d];e&&(Z.deleteRenderbuffer(e),e.name=0,vb[d]=null)}},y:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},X:function(a,b){for(var c=
0;c<a;c++){var d=F[b+4*c>>2],e=wb[d];e&&(Z.deleteTexture(e),e.name=0,wb[d]=null)}},La:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];Z.deleteVertexArray(xb[d]);xb[d]=null}},v:function(a){Z.depthFunc(a)},w:function(a){Z.depthMask(!!a)},c:function(a){Z.disable(a)},B:function(a){Z.disableVertexAttribArray(a)},ia:function(a,b,c){Z.drawArrays(a,b,c)},o:function(a,b){for(var c=Mb[a],d=0;d<a;d++)c[d]=F[b+4*d>>2];Z.drawBuffers(c)},ja:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},
qa:function(a){Z.enableVertexAttribArray(a)},E:function(a){Z.frontFace(a)},W:function(a,b){Nb(a,b,"createBuffer",rb)},U:function(a,b){Nb(a,b,"createRenderbuffer",vb)},Ia:function(a,b){Nb(a,b,"createTexture",wb)},Ma:function(a,b){Nb(a,b,"createVertexArray",xb)},Aa:function(a,b){return Z.getAttribLocation(S[a],B(b))},d:function(a,b){Ob(a,b)},Ba:function(a,b,c,d){a=Z.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,C,d,b):0;c&&(F[c>>2]=b)},O:function(a,b,c){if(c)if(a>=pb)X(1281);
else{var d=zb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.Rb;else if(35722==b){if(-1==d.Mb){a=S[a];var e=Z.getProgramParameter(a,35721);for(b=d.Mb=0;b<e;++b)d.Mb=Math.max(d.Mb,Z.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.Mb}else if(35381==b){if(-1==d.Nb)for(a=S[a],e=Z.getProgramParameter(a,35382),b=d.Nb=0;b<e;++b)d.Nb=Math.max(d.Nb,Z.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.Nb}else F[c>>2]=Z.getProgramParameter(S[a],
b);else X(1282)}else X(1281)},hb:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,C,d,b):0;c&&(F[c>>2]=b)},ba:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),F[c>>2]=null===a||0==a.length?0:a.length+1):F[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},Oa:function(a){if(Ab[a])return Ab[a];switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+
a}));b=Pb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Pb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Pb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Pb(b);break;default:return X(1280),0}return Ab[a]=b},Na:function(a,b){if(2>
W.version)return X(1282),0;var c=Bb[a];if(c)return 0>b||b>=c.length?(X(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(a){return"GL_"+a})),c=c.map(function(a){return Pb(a)}),c=Bb[a]=c,0>b||b>=c.length?(X(1281),0):c[b];default:return X(1280),0}},k:function(a,b){b=B(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=zb[a]&&zb[a].Xb[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ca:function(a){Z.linkProgram(S[a]);
var b=S[a];a=zb[a]={Xb:{},Rb:0,Mb:-1,Nb:-1};for(var c=a.Xb,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var f=Z.getActiveUniform(b,e),l=f.name;a.Rb=Math.max(a.Rb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var m=Z.getUniformLocation(b,l);if(m){var p=Cb(T);c[l]=[f.size,p];T[p]=m;for(var q=1;q<f.size;++q)m=Z.getUniformLocation(b,l+"["+q+"]"),p=Cb(T),T[p]=m}}},D:function(a,b){Z.polygonOffset(a,b)},n:function(a){Z.readBuffer(a)},Ja:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},
S:function(a,b,c,d,e){Z.renderbufferStorageMultisample(a,b,c,d,e)},M:function(a,b,c,d){Z.scissor(a,b,c,d)},kb:function(a,b,c,d){for(var e="",f=0;f<b;++f){var l=d?F[d+4*f>>2]:-1;e+=B(F[c+4*f>>2],0>l?void 0:l)}Z.shaderSource(V[a],e)},ha:function(a,b,c){Z.stencilFunc(a,b,c)},K:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},u:function(a){Z.stencilMask(a)},ga:function(a,b,c){Z.stencilOp(a,b,c)},J:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},Ga:function(a,b,c,d,e,f,l,m,p){W.Fb?Z.Hb?Z.texImage2D(a,
b,c,d,e,f,l,m,p):0!=p?Z.texImage2D(a,b,c,d,e,f,l,m,Tb(m),p>>(Ub[m]|0)):Z.texImage2D(a,b,c,d,e,f,l,m,null):Z.texImage2D(a,b,c,d,e,f,l,m,p?Sb(m,l,d,e,p):null)},Ea:function(a,b,c,d,e,f,l,m,p,q){Z.Hb?Z.texImage3D(a,b,c,d,e,f,l,m,p,q):0!=q?Z.texImage3D(a,b,c,d,e,f,l,m,p,Tb(p),q>>(Ub[p]|0)):Z.texImage3D(a,b,c,d,e,f,l,m,p,null)},R:function(a,b,c){Z.texParameterf(a,b,c)},f:function(a,b,c){Z.texParameteri(a,b,c)},da:function(a,b,c,d,e,f,l,m,p){if(W.Fb)Z.Hb?Z.texSubImage2D(a,b,c,d,e,f,l,m,p):0!=p?Z.texSubImage2D(a,
b,c,d,e,f,l,m,Tb(m),p>>(Ub[m]|0)):Z.texSubImage2D(a,b,c,d,e,f,l,m,null);else{var q=null;p&&(q=Sb(m,l,e,f,p));Z.texSubImage2D(a,b,c,d,e,f,l,m,q)}},ea:function(a,b,c,d,e,f,l,m,p,q,r){Z.Hb?Z.texSubImage3D(a,b,c,d,e,f,l,m,p,q,r):0!=r?Z.texSubImage3D(a,b,c,d,e,f,l,m,p,q,Tb(q),r>>(Ub[q]|0)):Z.texSubImage3D(a,b,c,d,e,f,l,m,p,q,null)},pa:function(a,b,c){if(W.Fb)Z.uniform1fv(T[a],G,c>>2,b);else{if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);Z.uniform1fv(T[a],d)}},
C:function(a,b){Z.uniform1i(T[a],b)},na:function(a,b,c){if(W.Fb)Z.uniform2fv(T[a],G,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);Z.uniform2fv(T[a],d)}},ma:function(a,b,c){if(W.Fb)Z.uniform3fv(T[a],G,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);Z.uniform3fv(T[a],d)}},la:function(a,b,c){if(W.Fb)Z.uniform4fv(T[a],
G,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2],d[e+3]=G[c+(4*e+12)>>2];else d=G.subarray(c>>2,c+16*b>>2);Z.uniform4fv(T[a],d)}},ka:function(a,b,c,d){if(W.Fb)Z.uniformMatrix4fv(T[a],!!c,G,d>>2,16*b);else{if(256>=16*b)for(var e=Y[16*b-1],f=0;f<16*b;f+=16)e[f]=G[d+4*f>>2],e[f+1]=G[d+(4*f+4)>>2],e[f+2]=G[d+(4*f+8)>>2],e[f+3]=G[d+(4*f+12)>>2],e[f+4]=G[d+(4*f+16)>>2],e[f+5]=G[d+(4*f+20)>>2],e[f+6]=G[d+(4*f+24)>>2],e[f+7]=G[d+
(4*f+28)>>2],e[f+8]=G[d+(4*f+32)>>2],e[f+9]=G[d+(4*f+36)>>2],e[f+10]=G[d+(4*f+40)>>2],e[f+11]=G[d+(4*f+44)>>2],e[f+12]=G[d+(4*f+48)>>2],e[f+13]=G[d+(4*f+52)>>2],e[f+14]=G[d+(4*f+56)>>2],e[f+15]=G[d+(4*f+60)>>2];else e=G.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(T[a],!!c,e)}},ta:function(a){Z.useProgram(S[a])},ra:function(a,b){Z.vertexAttribDivisor(a,b)},sa:function(a,b,c,d,e,f){Z.vertexAttribPointer(a,b,c,!!d,e,f)},N:function(a,b,c,d){Z.viewport(a,b,c,d)},t:function(){var a=document.createElement("input");
a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Yb()});document.body.append(a)},s:function(){document.getElementById("_sokol_app_input_element").focus()},Pa:function(){window.addEventListener("beforeunload",function(a){0!=Zb()&&(a.preventDefault(),a.returnValue=" ")})},r:function(){document.getElementById("_sokol_app_input_element").blur()},i:function(a){a|=0;var b=E.length|0;var c=F[1114600]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|
0))return x("OOM"),0,Qa(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)var e=!1;else{for(b=Math.max(E.length,16777216);b<a;)536870912>=b?b=ta(2*b):b=Math.min(ta((3*b+2147483648)/4),2147418112);b:{try{A.grow(b-buffer.byteLength+65535>>16);xa(A.buffer);e=1;break b}catch(f){}e=void 0}e=e?!0:!1}a=!(e|0)}if(a)return Qa(),-1;F[1114600]=d|0;return c|0},ca:function(a,b,c,d,e,f){b=B(b);var l=new XMLHttpRequest;l.open("GET",b);l.responseType="arraybuffer";var m=0<d;m&&l.setRequestHeader("Range","bytes="+c+"-"+
(c+d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var b=new Uint8Array(l.response),c=b.length;c<=f?(C.set(b,e),$b(a,d,c)):ac(a)}else bc(a,this.status)};l.send()},mb:function(a,b){b=B(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var b=this.getResponseHeader("Content-Length");cc(a,b)}else bc(a,this.status)};c.send()}},buffer);g.asm=dc;
var Na=g.___wasm_call_ctors=function(){return g.asm.pb.apply(null,arguments)},Q=g._malloc=function(){return g.asm.qb.apply(null,arguments)};g._free=function(){return g.asm.rb.apply(null,arguments)};var Yb=g.__sapp_emsc_notify_keyboard_hidden=function(){return g.asm.sb.apply(null,arguments)},Zb=g.__sapp_html5_get_ask_leave_site=function(){return g.asm.tb.apply(null,arguments)};g._main=function(){return g.asm.ub.apply(null,arguments)};g.__saudio_emsc_pull=function(){return g.asm.vb.apply(null,arguments)};
var cc=g.__sfetch_emsc_head_response=function(){return g.asm.wb.apply(null,arguments)},$b=g.__sfetch_emsc_get_response=function(){return g.asm.xb.apply(null,arguments)},bc=g.__sfetch_emsc_failed_http_status=function(){return g.asm.yb.apply(null,arguments)},ac=g.__sfetch_emsc_failed_buffer_too_small=function(){return g.asm.zb.apply(null,arguments)},sa=g.stackAlloc=function(){return g.asm.Ab.apply(null,arguments)};g.dynCall_vi=function(){return g.asm.Bb.apply(null,arguments)};
g.dynCall_v=function(){return g.asm.Cb.apply(null,arguments)};var R=g.dynCall_iiii=function(){return g.asm.Db.apply(null,arguments)},Xb=g.dynCall_idi=function(){return g.asm.Eb.apply(null,arguments)};g.asm=dc;var ec;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ha=function fc(){ec||hc();ec||(Ha=fc)};
function hc(a){function b(){if(!ec&&(ec=!0,!na)){za(Ba);za(Ca);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(ic){var b=a;b=b||[];var d=b.length+1,e=sa(4*(d+1));F[e>>2]=ra(aa);for(var f=1;f<d;f++)F[(e>>2)+f]=ra(b[f-1]);F[(e>>2)+d]=0;try{var l=g._main(d,e);if(!ma||0!==l){if(!ma&&(na=!0,g.onExit))g.onExit(l);t(l,new ja(l))}}catch(m){m instanceof ja||("SimulateInfiniteLoop"==m?ma=!0:((b=m)&&"object"===typeof m&&m.stack&&(b=[m,m.stack]),z("exception thrown: "+b),t(1,m)))}finally{}}if(g.postRun)for("function"==
typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;)b=g.postRun.shift(),Ea.unshift(b);za(Ea)}}a=a||n;if(!(0<I)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Fa();za(Aa);0<I||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},1)):b())}}g.run=hc;function x(a){if(g.onAbort)g.onAbort(a);ka(a);z(a);na=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}g.abort=x;
if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var ic=!0;g.noInitialRun&&(ic=!1);ma=!0;hc();
