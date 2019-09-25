var e;e||(e=typeof Module !== 'undefined' ? Module : {});var f={},h;for(h in e)e.hasOwnProperty(h)&&(f[h]=e[h]);var p=[],aa="./this.program";function r(a,b){throw b;}var t=!1,v=!1,ba=!1,ca=!1,da=!1;t="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!t&&!v;da=!t&&!ba&&!v;var w="",ea,x;
if(ba){w=__dirname+"/";var fa,ha;ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);a=fa.readFileSync(a);return b?a:a.toString()};x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||y("Assertion failed: undefined");return a};1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/"));p=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;});process.on("unhandledRejection",
y);r=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||y("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?p=scriptArgs:"undefined"!=typeof arguments&&(p=arguments),"function"===typeof quit&&(r=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===
typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(t||v)v?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=e.print||console.log.bind(console),z=e.printErr||console.warn.bind(console);for(h in f)f.hasOwnProperty(h)&&(e[h]=f[h]);f=null;e.arguments&&(p=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(r=e.quit);var A;e.wasmBinary&&(A=e.wasmBinary);var B;e.noExitRuntime&&(B=e.noExitRuntime);"object"!==typeof WebAssembly&&z("no native wasm support detected");var C,ka=!1,la="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&la)a=la.decode(c.subarray(a,b));else{for(d="";a<b;){var g=c[a++];if(g&128){var k=c[a++]&63;if(192==(g&224))d+=String.fromCharCode((g&31)<<6|k);else{var l=c[a++]&63;g=224==(g&240)?(g&15)<<12|k<<6|l:(g&7)<<18|k<<12|l<<6|c[a++]&63;65536>g?d+=String.fromCharCode(g):(g-=65536,d+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else d+=String.fromCharCode(g)}a=d}}else a="";return a}
function F(a,b,c,d){if(!(0<d))return 0;var g=c;d=c+d-1;for(var k=0;k<a.length;++k){var l=a.charCodeAt(k);if(55296<=l&&57343>=l){var n=a.charCodeAt(++k);l=65536+((l&1023)<<10)|n&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-g}
function ma(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function na(a){var b=ma(a)+1,c=oa(b);F(a,pa,c,b);return c}function qa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,pa,E,ra,G,H;
function sa(a){buffer=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=ra=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAPU32=new Uint32Array(a);e.HEAPF32=new Float32Array(a);e.HEAPF64=H=new Float64Array(a)}var ta=e.TOTAL_MEMORY||33554432;e.wasmMemory?C=e.wasmMemory:C=new WebAssembly.Memory({initial:ta/65536});C&&(buffer=C.buffer);ta=buffer.byteLength;sa(buffer);G[6032]=5267024;
function ua(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.xb;"number"===typeof c?void 0===b.mb?e.dynCall_v(c):e.dynCall_vi(c,b.mb):c(void 0===b.mb?null:b.mb)}}}var va=[],wa=[],xa=[],ya=[],za=[];function Aa(){var a=e.preRun.shift();va.unshift(a)}var I=0,Ca=null,J=null;e.preloadedImages={};e.preloadedAudios={};
function Da(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="quad-sapp.wasm";if(!Da()){var Ea=K;K=e.locateFile?e.locateFile(Ea,w):w+Ea}function Fa(){try{if(A)return new Uint8Array(A);if(x)return x(K);throw"both async and sync fetching of the wasm failed";}catch(a){y(a)}}
function Ga(){return A||!t&&!v||"function"!==typeof fetch?new Promise(function(a){a(Fa())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Fa()})}
function Ha(a){function b(a){e.asm=a.exports;I--;e.monitorRunDependencies&&e.monitorRunDependencies(I);0==I&&(null!==Ca&&(clearInterval(Ca),Ca=null),J&&(a=J,J=null,a()))}function c(a){b(a.instance)}function d(a){return Ga().then(function(a){return WebAssembly.instantiate(a,g)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+a);y(a)})}var g={env:a,wasi_unstable:a};I++;e.monitorRunDependencies&&e.monitorRunDependencies(I);if(e.instantiateWasm)try{return e.instantiateWasm(g,b)}catch(k){return z("Module.instantiateWasm callback failed with error: "+
k),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||Da()||"function"!==typeof fetch)return d(c);fetch(K,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,g).then(c,function(a){z("wasm streaming compile failed: "+a);z("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}e.asm=function(a,b){b.memory=C;b.table=new WebAssembly.Table({initial:16,maximum:16,element:"anyfunc"});return Ha(b)};wa.push({xb:function(){Ia()}});
var Ja=0,Ka=0,L=0,La=0,Ma=0,Na=null,Oa=null,Pa=!1;function Qa(){for(var a=M.length-1;0<=a;--a)Ra(a);M=[];Sa=[]}var Sa=[];function Ta(){if(Ua&&Va.fb)for(var a=0;a<Sa.length;++a){var b=Sa[a];Sa.splice(a,1);--a;b.Hb.apply(this,b.Bb)}}var Ua=0,Va=null,M=[];function Wa(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Ra(a){var b=M[a];b.target.removeEventListener(b.eb,b.vb,b.gb);M.splice(a,1)}
function N(a){function b(b){++Ua;Va=a;Ta();a.ib(b);Ta();--Ua}if(a.hb)a.vb=b,a.target.addEventListener(a.eb,b,a.gb),M.push(a),Pa||(ya.push(Qa),Pa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].eb==a.eb&&Ra(c--)}var Xa=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function P(a){try{if(!a)return window;"number"===typeof a&&(a=Xa[a]||D(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Ya(a){"number"===typeof a&&(a=D(a));return a&&"#canvas"!==a?"undefined"!==typeof Za&&$a[a]?$a[a]:P(a):"undefined"!==typeof Za&&$a.canvas?$a.canvas:e.canvas}
function ab(a,b,c,d,g,k){Ja||(Ja=Q(164));a={target:P(a),fb:Wa()?!1:!0,eb:k,hb:d,ib:function(a){a=a||event;var c=Ja;F(a.key?a.key:"",E,c+0,32);F(a.code?a.code:"",E,c+32,32);G[c+64>>2]=a.location;G[c+68>>2]=a.ctrlKey;G[c+72>>2]=a.shiftKey;G[c+76>>2]=a.altKey;G[c+80>>2]=a.metaKey;G[c+84>>2]=a.repeat;F(a.locale?a.locale:"",E,c+88,32);F(a.char?a.char:"",E,c+120,32);G[c+152>>2]=a.charCode;G[c+156>>2]=a.keyCode;G[c+160>>2]=a.which;R(d,g,c,b)&&a.preventDefault()},gb:c};N(a)}
function bb(a,b,c){H[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();G[a+8>>2]=b.screenX;G[a+12>>2]=b.screenY;G[a+16>>2]=b.clientX;G[a+20>>2]=b.clientY;G[a+24>>2]=b.ctrlKey;G[a+28>>2]=b.shiftKey;G[a+32>>2]=b.altKey;G[a+36>>2]=b.metaKey;ra[a+40>>1]=b.button;ra[a+42>>1]=b.buttons;G[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Na;G[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Oa;if(e.canvas){var d=e.canvas.getBoundingClientRect();
G[a+60>>2]=b.clientX-d.left;G[a+64>>2]=b.clientY-d.top}else G[a+60>>2]=0,G[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},G[a+52>>2]=b.clientX-d.left,G[a+56>>2]=b.clientY-d.top):(G[a+52>>2]=0,G[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Na=b.screenX,Oa=b.screenY)}
function S(a,b,c,d,g,k){Ka||(Ka=Q(72));a=P(a);c={target:a,fb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,eb:k,hb:d,ib:function(c){c=c||event;bb(Ka,c,a);R(d,g,Ka,b)&&c.preventDefault()},gb:c};Wa()&&"mousedown"==k&&(c.fb=!1);N(c)}
function cb(a,b,c,d){La||(La=Q(36));a=P(a);N({target:a,fb:!1,eb:"resize",hb:d,ib:function(c){c=c||event;if(c.target==a){var g=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=La;G[l>>2]=c.detail;G[l+4>>2]=document.body.clientWidth;G[l+8>>2]=document.body.clientHeight;
G[l+12>>2]=innerWidth;G[l+16>>2]=innerHeight;G[l+20>>2]=outerWidth;G[l+24>>2]=outerHeight;G[l+28>>2]=g[0];G[l+32>>2]=g[1];R(d,10,l,b)&&c.preventDefault()}},gb:c})}
function db(a,b,c,d,g,k){Ma||(Ma=Q(1684));a=P(a);N({target:a,fb:"touchstart"==k||"touchend"==k,eb:k,hb:d,ib:function(c){c=c||event;for(var l={},k=0;k<c.touches.length;++k){var q=c.touches[k];q.ob=!1;l[q.identifier]=q}for(k=0;k<c.changedTouches.length;++k)q=c.changedTouches[k],l[q.identifier]=q,q.ob=!0;for(k=0;k<c.targetTouches.length;++k)q=c.targetTouches[k],l[q.identifier].zb=!0;var m=q=Ma;G[m+4>>2]=c.ctrlKey;G[m+8>>2]=c.shiftKey;G[m+12>>2]=c.altKey;G[m+16>>2]=c.metaKey;m+=20;var Ba=e.canvas?e.canvas.getBoundingClientRect():
void 0,eb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},fb=0;for(k in l){var u=l[k];G[m>>2]=u.identifier;G[m+4>>2]=u.screenX;G[m+8>>2]=u.screenY;G[m+12>>2]=u.clientX;G[m+16>>2]=u.clientY;G[m+20>>2]=u.pageX;G[m+24>>2]=u.pageY;G[m+28>>2]=u.ob;G[m+32>>2]=u.zb;Ba?(G[m+44>>2]=u.clientX-Ba.left,G[m+48>>2]=u.clientY-Ba.top):(G[m+44>>2]=0,G[m+48>>2]=0);G[m+36>>2]=u.clientX-eb.left;G[m+40>>2]=u.clientY-eb.top;m+=52;if(32<=++fb)break}G[q>>2]=fb;R(d,g,q,b)&&c.preventDefault()},gb:c})}
function gb(a,b,c,d,g,k){a||(a=e.canvas);a={target:P(a),fb:!1,eb:k,hb:d,ib:function(a){a=a||event;R(d,g,0,b)&&a.preventDefault()},gb:c};N(a)}
function hb(a,b,c,d,g){function k(c){c=c||event;bb(L,c,a);H[L+72>>3]=c.wheelDeltaX||0;H[L+80>>3]=-(c.wheelDeltaY||c.wheelDelta);H[L+88>>3]=0;G[L+96>>2]=0;R(d,9,L,b)&&c.preventDefault()}function l(c){c=c||event;var g=L;bb(g,c,a);H[g+72>>3]=c.deltaX;H[g+80>>3]=c.deltaY;H[g+88>>3]=c.deltaZ;G[g+96>>2]=c.deltaMode;R(d,9,g,b)&&c.preventDefault()}L||(L=Q(104));N({target:a,fb:!0,eb:g,hb:d,ib:"wheel"==g?l:k,gb:c})}
var ib=1,jb=0,kb=[],T=[],lb=[],mb=[],nb=[],U=[],V=[],ob=[],pb={},W=null,$a={},X={},qb={},rb={};function Y(a){jb||(jb=a)}function sb(a){for(var b=ib++,c=a.length;c<b;c++)a[c]=null;return b}function tb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=Q(8),g={handle:d,attributes:b,version:b.sb,lb:a};g.tb=2<=g.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.Ab=g);pb[d]=g;("undefined"===typeof b.rb||b.rb)&&ub(g);return d}
function vb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,g,k){b.drawArraysInstancedANGLE(a,d,g,k)},a.drawElementsInstanced=function(a,d,g,k,l){b.drawElementsInstancedANGLE(a,d,g,k,l)})}
function wb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function xb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function ub(a){a||(a=W);if(!a.yb){a.yb=!0;var b=a.lb;2>a.version&&(vb(b),wb(b),xb(b));b.Db=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var Za={},yb,zb,Ab=["default","low-power","high-performance"],Bb=[];function Cb(a,b,c,d){for(var g=0;g<a;g++){var k=Z[c](),l=k&&sb(d);k?(k.name=l,d[l]=k):Y(1282);G[b+4*g>>2]=l}}
function Db(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){Y(1282);return}c=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){Y(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Y(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:Y(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(g){Y(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+g+")");return}}break;default:Y(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else Y(1281)}
function Eb(a){var b=ma(a)+1,c=Q(b);F(a,E,c,b);return c}function Fb(){e.___errno_location&&(G[e.___errno_location()>>2]=12)}for(var Z,Gb=0;256>Gb;Gb++);for(var Hb=0;32>Hb;Hb++)Bb.push(Array(Hb));
var Ob=e.asm({},{R:function(){return devicePixelRatio||1},S:function(a,b,c){a=a?P(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),H[b>>3]=a.right-a.left,H[c>>3]=a.bottom-a.top):(H[b>>3]=a.clientWidth,H[c>>3]=a.clientHeight);return 0},T:function(a,b,c){E.set(E.subarray(b,b+c),a)},Aa:function(a,b){function c(d){Ib(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},P:function(a,b,c){a=Ya(a);if(!a)return-4;a.width=b;a.height=c;return 0},Ja:function(a,b,c,
d){ab(a,b,c,d,2,"keydown");return 0},Ha:function(a,b,c,d){ab(a,b,c,d,1,"keypress");return 0},Ia:function(a,b,c,d){ab(a,b,c,d,3,"keyup");return 0},aa:function(a,b,c,d){S(a,b,c,d,5,"mousedown");return 0},Ma:function(a,b,c,d){S(a,b,c,d,33,"mouseenter");return 0},La:function(a,b,c,d){S(a,b,c,d,34,"mouseleave");return 0},Na:function(a,b,c,d){S(a,b,c,d,8,"mousemove");return 0},W:function(a,b,c,d){S(a,b,c,d,6,"mouseup");return 0},Oa:function(a,b,c,d){cb(a,b,c,d);return 0},Da:function(a,b,c,d){db(a,b,c,d,
25,"touchcancel");return 0},Ea:function(a,b,c,d){db(a,b,c,d,23,"touchend");return 0},Fa:function(a,b,c,d){db(a,b,c,d,24,"touchmove");return 0},Ga:function(a,b,c,d){db(a,b,c,d,22,"touchstart");return 0},Ca:function(a,b,c,d){gb(a,b,c,d,31,"webglcontextlost");return 0},Ba:function(a,b,c,d){gb(a,b,c,d,32,"webglcontextrestored");return 0},Ka:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(hb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(hb(a,b,c,d,"mousewheel"),0):-1},H:function(a,
b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=Ab[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.sb=G[b+8];c.Eb=G[b+9];c.rb=G[b+10];c.wb=G[b+11];c.Fb=G[b+12];c.Gb=G[b+13];a=Ya(a);!a||c.wb?c=0:c=(a=1<c.sb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?tb(a,c):0;return c},ha:function(a,b){a=pb[a];b=D(b);0==b.indexOf("GL_")&&(b=b.substr(3));
"ANGLE_instanced_arrays"==b?vb(Z):"OES_vertex_array_object"==b?wb(Z):"WEBGL_draw_buffers"==b&&xb(Z);return!!a.lb.getExtension(b)},sa:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},ja:function(a){W=pb[a];e.Cb=Z=W&&W.lb;return!a||Z?0:-5},o:function(a){Z.activeTexture(a)},J:function(a,b){Z.attachShader(T[a],V[b])},c:function(a,b){35051==a?Z.pb=b:35052==a&&(Z.qb=b);Z.bindBuffer(a,kb[b])},f:function(a,b){Z.bindFramebuffer(a,lb[b])},a:function(a,b){Z.bindTexture(a,
nb[b])},Q:function(a){Z.bindVertexArray(ob[a])},B:function(a,b,c,d){Z.blendColor(a,b,c,d)},C:function(a,b){Z.blendEquationSeparate(a,b)},D:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},l:function(a,b,c,d,g,k,l,n,O,q){Z.blitFramebuffer(a,b,c,d,g,k,l,n,O,q)},L:function(a,b,c,d){W.tb?c?Z.bufferData(a,E,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?E.subarray(c,c+b):b,d)},K:function(a,b,c,d){W.tb?Z.bufferSubData(a,b,E,d,c):Z.bufferSubData(a,b,E.subarray(d,d+c))},G:function(a){Z.clear(a)},la:function(a,
b,c,d){Z.clearColor(a,b,c,d)},ka:function(a){Z.clearDepth(a)},ia:function(a){Z.clearStencil(a)},t:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},V:function(a){Z.compileShader(V[a])},ra:function(){var a=sb(T),b=Z.createProgram();b.name=a;T[a]=b;return a},Y:function(a){var b=sb(V);V[b]=Z.createShader(a);return b},A:function(a){Z.cullFace(a)},ua:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],g=kb[d];g&&(Z.deleteBuffer(g),g.name=0,kb[d]=null,d==yb&&(yb=0),d==zb&&(zb=0),d==Z.pb&&(Z.pb=0),d==Z.qb&&
(Z.qb=0))}},g:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],g=lb[d];g&&(Z.deleteFramebuffer(g),g.name=0,lb[d]=null)}},N:function(a){if(a){var b=T[a];b?(Z.deleteProgram(b),b.name=0,T[a]=null,X[a]=null):Y(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],g=mb[d];g&&(Z.deleteRenderbuffer(g),g.name=0,mb[d]=null)}},u:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):Y(1281)}},ta:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],g=nb[d];g&&(Z.deleteTexture(g),g.name=0,
nb[d]=null)}},va:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2];Z.deleteVertexArray(ob[d]);ob[d]=null}},r:function(a){Z.depthFunc(a)},s:function(a){Z.depthMask(!!a)},b:function(a){Z.disable(a)},w:function(a){Z.disableVertexAttribArray(a)},ba:function(a,b,c){Z.drawArrays(a,b,c)},n:function(a,b){for(var c=Bb[a],d=0;d<a;d++)c[d]=G[b+4*d>>2];Z.drawBuffers(c)},ca:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},da:function(a){Z.enableVertexAttribArray(a)},z:function(a){Z.frontFace(a)},
M:function(a,b){Cb(a,b,"createBuffer",kb)},wa:function(a,b){Cb(a,b,"createVertexArray",ob)},oa:function(a,b){return Z.getAttribLocation(T[a],D(b))},d:function(a,b){Db(a,b)},pa:function(a,b,c,d){a=Z.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?F(a,E,d,b):0;c&&(G[c>>2]=b)},I:function(a,b,c){if(c)if(a>=ib)Y(1281);else{var d=X[a];if(d)if(35716==b)a=Z.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.nb;else if(35722==b){if(-1==d.jb){a=
T[a];var g=Z.getProgramParameter(a,35721);for(b=d.jb=0;b<g;++b)d.jb=Math.max(d.jb,Z.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.jb}else if(35381==b){if(-1==d.kb)for(a=T[a],g=Z.getProgramParameter(a,35382),b=d.kb=0;b<g;++b)d.kb=Math.max(d.kb,Z.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.kb}else G[c>>2]=Z.getProgramParameter(T[a],b);else Y(1282)}else Y(1281)},U:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?F(a,E,d,b):0;c&&(G[c>>2]=b)},v:function(a,b,
c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Z.getShaderParameter(V[a],b):Y(1281)},ya:function(a){if(qb[a])return qb[a];switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Eb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||Y(1280);b=Eb(b);break;case 7938:b=Z.getParameter(Z.VERSION);
b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Eb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Eb(b);break;default:return Y(1280),0}return qb[a]=b},xa:function(a,b){if(2>W.version)return Y(1282),0;var c=rb[a];if(c)return 0>b||b>=c.length?(Y(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(a){return"GL_"+
a})),c=c.map(function(a){return Eb(a)}),c=rb[a]=c,0>b||b>=c.length?(Y(1281),0):c[b];default:return Y(1280),0}},h:function(a,b){b=D(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=X[a]&&X[a].ub[b])&&0<=c&&c<a[0]?a[1]+c:-1},qa:function(a){Z.linkProgram(T[a]);var b=T[a];a=X[a]={ub:{},nb:0,jb:-1,kb:-1};for(var c=a.ub,d=Z.getProgramParameter(b,35718),g=0;g<d;++g){var k=Z.getActiveUniform(b,g),l=k.name;a.nb=Math.max(a.nb,l.length+
1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var n=Z.getUniformLocation(b,l);if(n){var O=sb(U);c[l]=[k.size,O];U[O]=n;for(var q=1;q<k.size;++q)n=Z.getUniformLocation(b,l+"["+q+"]"),O=sb(U),U[O]=n}}},y:function(a,b){Z.polygonOffset(a,b)},m:function(a){Z.readBuffer(a)},ma:function(a,b,c,d){Z.scissor(a,b,c,d)},X:function(a,b,c,d){for(var g="",k=0;k<b;++k){var l=d?G[d+4*k>>2]:-1;g+=D(G[c+4*k>>2],0>l?void 0:l)}Z.shaderSource(V[a],g)},$:function(a,b,c){Z.stencilFunc(a,b,c)},F:function(a,b,c,d){Z.stencilFuncSeparate(a,
b,c,d)},q:function(a){Z.stencilMask(a)},_:function(a,b,c){Z.stencilOp(a,b,c)},E:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},x:function(a,b){Z.uniform1i(U[a],b)},ga:function(a){Z.useProgram(T[a])},ea:function(a,b){Z.vertexAttribDivisor(a,b)},fa:function(a,b,c,d,g,k){Z.vertexAttribPointer(a,b,c,!!d,g,k)},na:function(a,b,c,d){Z.viewport(a,b,c,d)},k:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",
function(){Jb()});document.body.append(a)},j:function(){document.getElementById("_sokol_app_input_element").focus()},za:function(){window.addEventListener("beforeunload",function(a){0!=Kb()&&(a.preventDefault(),a.returnValue=" ")})},i:function(){document.getElementById("_sokol_app_input_element").blur()},p:function(a){a|=0;var b=pa.length|0;var c=G[6032]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return y("OOM"),0,Fb(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)var g=!1;else{for(b=Math.max(pa.length,
16777216);b<a;)536870912>=b?b=qa(2*b):b=Math.min(qa((3*b+2147483648)/4),2147418112);b:{try{C.grow(b-buffer.byteLength+65535>>16);sa(C.buffer);g=1;break b}catch(k){}g=void 0}g=g?!0:!1}a=!(g|0)}if(a)return Fb(),-1;G[6032]=d|0;return c|0},Z:function(a,b,c,d,g,k){b=D(b);var l=new XMLHttpRequest;l.open("GET",b);l.responseType="arraybuffer";var n=0<d;n&&l.setRequestHeader("Range","bytes="+c+"-"+(c+d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!n){var b=
new Uint8Array(l.response),c=b.length;c<=k?(E.set(b,g),Lb(a,d,c)):Mb(a)}else Nb(a,this.status)};l.send()}},buffer);e.asm=Ob;var Ia=e.___wasm_call_ctors=function(){return e.asm.Pa.apply(null,arguments)},Jb=e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.Qa.apply(null,arguments)},Kb=e.__sapp_html5_get_ask_leave_site=function(){return e.asm.Ra.apply(null,arguments)};e._main=function(){return e.asm.Sa.apply(null,arguments)};var Q=e._malloc=function(){return e.asm.Ta.apply(null,arguments)};
e._free=function(){return e.asm.Ua.apply(null,arguments)};e.__saudio_emsc_pull=function(){return e.asm.Va.apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return e.asm.Wa.apply(null,arguments)};
var Lb=e.__sfetch_emsc_get_response=function(){return e.asm.Xa.apply(null,arguments)},Nb=e.__sfetch_emsc_failed_http_status=function(){return e.asm.Ya.apply(null,arguments)},Mb=e.__sfetch_emsc_failed_buffer_too_small=function(){return e.asm.Za.apply(null,arguments)},oa=e.stackAlloc=function(){return e.asm._a.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.$a.apply(null,arguments)};e.dynCall_v=function(){return e.asm.ab.apply(null,arguments)};
var R=e.dynCall_iiii=function(){return e.asm.bb.apply(null,arguments)},Ib=e.dynCall_idi=function(){return e.asm.cb.apply(null,arguments)};e.asm=Ob;var Pb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Qb(){Pb||Rb();Pb||(J=Qb)};
function Rb(a){function b(){if(!Pb&&(Pb=!0,!ka)){ua(wa);ua(xa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Sb){var b=a;b=b||[];var d=b.length+1,g=oa(4*(d+1));G[g>>2]=na(aa);for(var k=1;k<d;k++)G[(g>>2)+k]=na(b[k-1]);G[(g>>2)+d]=0;try{var l=e._main(d,g);if(!B||0!==l){if(!B&&(ka=!0,e.onExit))e.onExit(l);r(l,new ia(l))}}catch(n){n instanceof ia||("SimulateInfiniteLoop"==n?B=!0:((b=n)&&"object"===typeof n&&n.stack&&(b=[n,n.stack]),z("exception thrown: "+b),r(1,n)))}finally{}}if(e.postRun)for("function"==
typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)b=e.postRun.shift(),za.unshift(b);ua(za)}}a=a||p;if(!(0<I)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Aa();ua(va);0<I||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Rb;function y(a){if(e.onAbort)e.onAbort(a);ja(a);z(a);ka=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=y;
if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Sb=!0;e.noInitialRun&&(Sb=!1);B=!0;Rb();
