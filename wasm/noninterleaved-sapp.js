var e;e||(e=typeof Module !== 'undefined' ? Module : {});var g={},h;for(h in e)e.hasOwnProperty(h)&&(g[h]=e[h]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var m=!1,q=!1,aa=!1,ba=!1;m="object"===typeof window;q="function"===typeof importScripts;aa="object"===typeof process&&"function"===typeof require&&!m&&!q;ba=!m&&!aa&&!q;var r="";
if(aa){r=__dirname+"/";var ca,da;e.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||t("Assertion failed: undefined");return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof
u))throw a;});process.on("unhandledRejection",t);e.quit=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||t("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),
"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(m||q)q?r=self.location.href:document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?r.substr(0,r.lastIndexOf("/")+1):"",e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;
d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};var ea=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),v=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ea);for(h in g)g.hasOwnProperty(h)&&(e[h]=g[h]);g=void 0;
var fa={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};"object"!==typeof WebAssembly&&v("no native wasm support detected");var ha,ia=!1,ja="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function x(a,b){if(a){var c=y,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ja)a=ja.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var l=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|l:(f&7)<<18|k<<12|l<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function z(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var l=a.charCodeAt(k);if(55296<=l&&57343>=l){var F=a.charCodeAt(++k);l=65536+((l&1023)<<10)|F&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-f}
function ka(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function la(a){var b=ka(a)+1,c=ma(b);z(a,na,c,b);return c}var buffer,na,y,oa,A,B,C,D=e.TOTAL_MEMORY||134217728;5242880>D&&v("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+D+"! (TOTAL_STACK=5242880)");
e.buffer?buffer=e.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(ha=new WebAssembly.Memory({initial:D/65536,maximum:D/65536}),buffer=ha.buffer):buffer=new ArrayBuffer(D);e.HEAP8=na=new Int8Array(buffer);e.HEAP16=oa=new Int16Array(buffer);e.HEAP32=A=new Int32Array(buffer);e.HEAPU8=y=new Uint8Array(buffer);e.HEAPU16=new Uint16Array(buffer);e.HEAPU32=new Uint32Array(buffer);e.HEAPF32=B=new Float32Array(buffer);e.HEAPF64=C=new Float64Array(buffer);A[2948]=5254704;
function E(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Gb;"number"===typeof c?void 0===b.pb?e.dynCall_v(c):e.dynCall_vi(c,b.pb):c(void 0===b.pb?null:b.pb)}}}var pa=[],qa=[],ra=[],sa=[],ta=[],ua=!1;function va(){var a=e.preRun.shift();pa.unshift(a)}var G=0,wa=null,H=null;e.preloadedImages={};e.preloadedAudios={};
function xa(){var a=I;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var I="noninterleaved-sapp.wasm";if(!xa()){var za=I;I=e.locateFile?e.locateFile(za,r):r+za}function Aa(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(I);throw"both async and sync fetching of the wasm failed";}catch(a){t(a)}}
function Ba(){return e.wasmBinary||!m&&!q||"function"!==typeof fetch?new Promise(function(a){a(Aa())}):fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Aa()})}
function Ca(a){function b(a){e.asm=a.exports;G--;e.monitorRunDependencies&&e.monitorRunDependencies(G);0==G&&(null!==wa&&(clearInterval(wa),wa=null),H&&(a=H,H=null,a()))}function c(a){b(a.instance)}function d(a){Ba().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){v("failed to asynchronously prepare wasm: "+a);t(a)})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:fa};G++;e.monitorRunDependencies&&e.monitorRunDependencies(G);if(e.instantiateWasm)try{return e.instantiateWasm(f,
b)}catch(k){return v("Module.instantiateWasm callback failed with error: "+k),!1}e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||xa()||"function"!==typeof fetch?d(c):WebAssembly.instantiateStreaming(fetch(I,{credentials:"same-origin"}),f).then(c,function(a){v("wasm streaming compile failed: "+a);v("falling back to ArrayBuffer instantiation");d(c)});return{}}
e.asm=function(a,b){b.memory=ha;b.table=new WebAssembly.Table({initial:28,maximum:28,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Ca(b)};var Da=0,Ea=0,J=0,Fa=0,Ga=0,Ha=null,Ia=null,Ja=!1;function Ka(){for(var a=K.length-1;0<=a;--a)La(a);K=[];Ma=[]}var Ma=[];function Na(){if(Oa&&Pa.ib)for(var a=0;a<Ma.length;++a){var b=Ma[a];Ma.splice(a,1);--a;b.Kb.apply(this,b.Db)}}var Oa=0,Pa=null,K=[];
function Qa(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function La(a){var b=K[a];b.target.removeEventListener(b.hb,b.yb,b.kb);K.splice(a,1)}function L(a){function b(b){++Oa;Pa=a;Na();a.mb(b);Na();--Oa}if(a.lb)a.yb=b,a.target.addEventListener(a.hb,b,a.kb),K.push(a),Ja||(sa.push(Ka),Ja=!0);else for(var c=0;c<K.length;++c)K[c].target==a.target&&K[c].hb==a.hb&&La(c--)}
var Ra=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function M(a){try{if(!a)return window;"number"===typeof a&&(a=Ra[a]||x(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Sa(){t("OOM")}
function Ta(a){"number"===typeof a&&(a=x(a));return a&&"#canvas"!==a?"undefined"!==typeof Ua&&Va[a]?Va[a]:M(a):"undefined"!==typeof Ua&&Va.canvas?Va.canvas:e.canvas}
function Wa(a,b,c,d,f,k){Da||(Da=N(164));a={target:M(a),ib:Qa()?!1:!0,hb:k,lb:d,mb:function(a){a=a||window.event;var c=Da;z(a.key?a.key:"",y,c+0,32);z(a.code?a.code:"",y,c+32,32);A[c+64>>2]=a.location;A[c+68>>2]=a.ctrlKey;A[c+72>>2]=a.shiftKey;A[c+76>>2]=a.altKey;A[c+80>>2]=a.metaKey;A[c+84>>2]=a.repeat;z(a.locale?a.locale:"",y,c+88,32);z(a.char?a.char:"",y,c+120,32);A[c+152>>2]=a.charCode;A[c+156>>2]=a.keyCode;A[c+160>>2]=a.which;O(d,f,c,b)&&a.preventDefault()},kb:c};L(a)}
function Xa(a,b,c){C[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();A[a+8>>2]=b.screenX;A[a+12>>2]=b.screenY;A[a+16>>2]=b.clientX;A[a+20>>2]=b.clientY;A[a+24>>2]=b.ctrlKey;A[a+28>>2]=b.shiftKey;A[a+32>>2]=b.altKey;A[a+36>>2]=b.metaKey;oa[a+40>>1]=b.button;oa[a+42>>1]=b.buttons;A[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ha;A[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ia;if(e.canvas){var d=e.canvas.getBoundingClientRect();
A[a+60>>2]=b.clientX-d.left;A[a+64>>2]=b.clientY-d.top}else A[a+60>>2]=0,A[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},A[a+52>>2]=b.clientX-d.left,A[a+56>>2]=b.clientY-d.top):(A[a+52>>2]=0,A[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ha=b.screenX,Ia=b.screenY)}
function Q(a,b,c,d,f,k){Ea||(Ea=N(72));a=M(a);c={target:a,ib:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,hb:k,lb:d,mb:function(c){c=c||window.event;Xa(Ea,c,a);O(d,f,Ea,b)&&c.preventDefault()},kb:c};Qa()&&"mousedown"==k&&(c.ib=!1);L(c)}
function Ya(a,b,c,d){Fa||(Fa=N(36));a=M(a);L({target:a,ib:!1,hb:"resize",lb:d,mb:function(c){c=c||window.event;if(c.target==a){var f=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Fa;A[l>>2]=c.detail;A[l+4>>2]=document.body.clientWidth;
A[l+8>>2]=document.body.clientHeight;A[l+12>>2]=window.innerWidth;A[l+16>>2]=window.innerHeight;A[l+20>>2]=window.outerWidth;A[l+24>>2]=window.outerHeight;A[l+28>>2]=f[0];A[l+32>>2]=f[1];O(d,10,l,b)&&c.preventDefault()}},kb:c})}
function Za(a,b,c,d,f,k){Ga||(Ga=N(1684));a=M(a);L({target:a,ib:"touchstart"==k||"touchend"==k,hb:k,lb:d,mb:function(c){c=c||window.event;for(var k={},l=0;l<c.touches.length;++l){var p=c.touches[l];k[p.identifier]=p}for(l=0;l<c.changedTouches.length;++l)p=c.changedTouches[l],k[p.identifier]=p,p.xb=!0;for(l=0;l<c.targetTouches.length;++l)p=c.targetTouches[l],k[p.identifier].Bb=!0;var n=p=Ga;A[n+4>>2]=c.ctrlKey;A[n+8>>2]=c.shiftKey;A[n+12>>2]=c.altKey;A[n+16>>2]=c.metaKey;n+=20;var ya=e.canvas?e.canvas.getBoundingClientRect():
void 0,$a=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},ab=0;for(l in k){var w=k[l];A[n>>2]=w.identifier;A[n+4>>2]=w.screenX;A[n+8>>2]=w.screenY;A[n+12>>2]=w.clientX;A[n+16>>2]=w.clientY;A[n+20>>2]=w.pageX;A[n+24>>2]=w.pageY;A[n+28>>2]=w.xb;A[n+32>>2]=w.Bb;ya?(A[n+44>>2]=w.clientX-ya.left,A[n+48>>2]=w.clientY-ya.top):(A[n+44>>2]=0,A[n+48>>2]=0);A[n+36>>2]=w.clientX-$a.left;A[n+40>>2]=w.clientY-$a.top;n+=52;if(32<=++ab)break}A[p>>2]=ab;O(d,f,p,b)&&c.preventDefault()},kb:c})}
function bb(a,b,c,d,f,k){a||(a=e.canvas);a={target:M(a),ib:!1,hb:k,lb:d,mb:function(a){a=a||window.event;O(d,f,0,b)&&a.preventDefault()},kb:c};L(a)}
function cb(a,b,c,d,f){function k(c){c=c||window.event;Xa(J,c,a);C[J+72>>3]=c.wheelDeltaX||0;C[J+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);C[J+88>>3]=0;A[J+96>>2]=0;O(d,9,J,b)&&c.preventDefault()}function l(c){c=c||window.event;var f=J;Xa(f,c,a);C[f+72>>3]=c.deltaX;C[f+80>>3]=c.deltaY;C[f+88>>3]=c.deltaZ;A[f+96>>2]=c.deltaMode;O(d,9,f,b)&&c.preventDefault()}J||(J=N(104));L({target:a,ib:!0,hb:f,lb:d,mb:"wheel"==f?l:k,kb:c})}
var db=1,eb=0,fb=[],R=[],gb=[],hb=[],ib=[],S=[],T=[],jb=[],kb={},U=null,Va={},V={},lb={};function W(a){eb||(eb=a)}function X(a){for(var b=db++,c=a.length;c<b;c++)a[c]=null;return b}var mb=null,Y=[0];function nb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=N(8),f={handle:d,attributes:b,version:b.vb,rb:a};f.jb=2<=f.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.Cb=f);kb[d]=f;("undefined"===typeof b.ub||b.ub)&&ob(f);return d}
function ob(a){a||(a=U);if(!a.Ab){a.Ab=!0;var b=a.rb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,f){c.drawArraysInstancedANGLE(a,b,d,f)},b.drawElementsInstanced=function(a,b,d,f,k){c.drawElementsInstancedANGLE(a,b,d,f,k)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var f=b.getExtension("WEBGL_draw_buffers");f&&(b.drawBuffers=function(a,b){f.drawBuffersWEBGL(a,b)})}b.Fb=b.getExtension("EXT_disjoint_timer_query");var k="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=k.indexOf(a)&&b.getExtension(a)})}}var Ua={},pb,qb,rb=["default","low-power","high-performance"],sb=[];function tb(a,b,c,d){for(var f=0;f<a;f++){var k=Z[c](),l=k&&X(d);k?(k.name=l,d[l]=k):W(1282);A[b+4*f>>2]=l}}
function ub(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){W(1282);return}c=2*Z.getSupportedExtensions().length;break;case 33307:case 33308:if(2>U.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)A[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);v("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);return}A[b>>2]=c}else W(1281)}function vb(a){var b=ka(a)+1,c=N(b);z(a,y,c,b);return c}var Z;mb=new Float32Array(256);
for(var wb=0;256>wb;wb++)Y[wb]=mb.subarray(0,wb+1);for(var xb=0;32>xb;xb++)sb.push(Array(xb));
var zb=e.asm({},{d:t,Q:function(a){e.___errno_location&&(A[e.___errno_location()>>2]=a);return a},P:function(){return window.devicePixelRatio||1},L:function(a,b,c){a=a?M(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),C[b>>3]=a.right-a.left,C[c>>3]=a.bottom-a.top):(C[b>>3]=a.clientWidth,C[c>>3]=a.clientHeight);return 0},Aa:function(){return na.length},ra:function(a,b,c){y.set(y.subarray(b,b+c),a)},oa:function(a,b){function c(d){yb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},
ia:function(a){Sa(a)},u:function(a,b,c){a=Ta(a);if(!a)return-4;a.width=b;a.height=c;return 0},Y:function(a,b,c,d){Wa(a,b,c,d,2,"keydown");return 0},Ra:function(a,b,c,d){Wa(a,b,c,d,1,"keypress");return 0},Qa:function(a,b,c,d){Wa(a,b,c,d,3,"keyup");return 0},Pa:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},Oa:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},Na:function(a,b,c,d){Q(a,b,c,d,34,"mouseleave");return 0},Ma:function(a,b,c,d){Q(a,b,c,d,8,"mousemove");return 0},La:function(a,b,
c,d){Q(a,b,c,d,6,"mouseup");return 0},Ka:function(a,b,c,d){Ya(a,b,c,d);return 0},Ja:function(a,b,c,d){Za(a,b,c,d,25,"touchcancel");return 0},Ia:function(a,b,c,d){Za(a,b,c,d,23,"touchend");return 0},Ha:function(a,b,c,d){Za(a,b,c,d,24,"touchmove");return 0},Ga:function(a,b,c,d){Za(a,b,c,d,22,"touchstart");return 0},Fa:function(a,b,c,d){bb(a,b,c,d,31,"webglcontextlost");return 0},Ea:function(a,b,c,d){bb(a,b,c,d,32,"webglcontextrestored");return 0},Da:function(a,b,c,d){a=M(a);return"undefined"!==typeof a.onwheel?
(cb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(cb(a,b,c,d,"mousewheel"),0):-1},O:function(a,b){var c={};b>>=2;c.alpha=!!A[b];c.depth=!!A[b+1];c.stencil=!!A[b+2];c.antialias=!!A[b+3];c.premultipliedAlpha=!!A[b+4];c.preserveDrawingBuffer=!!A[b+5];c.powerPreference=rb[A[b+6]];c.failIfMajorPerformanceCaveat=!!A[b+7];c.vb=A[b+8];c.Hb=A[b+9];c.ub=A[b+10];c.zb=A[b+11];c.Ib=A[b+12];c.Jb=A[b+13];a=Ta(a);!a||c.zb?c=0:c=(a=1<c.vb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",
c))&&nb(a,c);return c},Ca:function(a){a>>=2;for(var b=0;14>b;++b)A[a+b]=0;A[a]=A[a+1]=A[a+3]=A[a+4]=A[a+8]=A[a+10]=1},Ba:function(a){U=kb[a];e.Eb=Z=U&&U.rb;return!a||Z?0:-5},N:function(a){Z.activeTexture(a)},M:function(a,b){Z.attachShader(R[a],T[b])},i:function(a,b){35051==a?Z.sb=b:35052==a&&(Z.tb=b);Z.bindBuffer(a,fb[b])},f:function(a,b){Z.bindFramebuffer(a,gb[b])},K:function(a,b){Z.bindTexture(a,ib[b])},J:function(a){Z.bindVertexArray(jb[a])},I:function(a,b,c,d){Z.blendColor(a,b,c,d)},H:function(a,
b){Z.blendEquationSeparate(a,b)},G:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},l:function(a,b,c,d,f,k,l,F,P,p){Z.blitFramebuffer(a,b,c,d,f,k,l,F,P,p)},F:function(a,b,c,d){U.jb?c?Z.bufferData(a,y,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?y.subarray(c,c+b):b,d)},E:function(a,b,c,d){U.jb?Z.bufferSubData(a,b,y,d,c):Z.bufferSubData(a,b,y.subarray(d,d+c))},za:function(a){Z.clear(a)},ya:function(a,b,c,d){Z.clearColor(a,b,c,d)},xa:function(a){Z.clearDepth(a)},wa:function(a){Z.clearStencil(a)},q:function(a,
b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},va:function(a){Z.compileShader(T[a])},ua:function(){var a=X(R),b=Z.createProgram();b.name=a;R[a]=b;return a},ta:function(a){var b=X(T);T[b]=Z.createShader(a);return b},D:function(a){Z.cullFace(a)},sa:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],f=fb[d];f&&(Z.deleteBuffer(f),f.name=0,fb[d]=null,d==pb&&(pb=0),d==qb&&(qb=0),d==Z.sb&&(Z.sb=0),d==Z.tb&&(Z.tb=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=A[b+4*c>>2],f=gb[d];f&&(Z.deleteFramebuffer(f),f.name=
0,gb[d]=null)}},C:function(a){if(a){var b=R[a];b?(Z.deleteProgram(b),b.name=0,R[a]=null,V[a]=null):W(1281)}},B:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],f=hb[d];f&&(Z.deleteRenderbuffer(f),f.name=0,hb[d]=null)}},p:function(a){if(a){var b=T[a];b?(Z.deleteShader(b),T[a]=null):W(1281)}},qa:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],f=ib[d];f&&(Z.deleteTexture(f),f.name=0,ib[d]=null)}},pa:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2];Z.deleteVertexArray(jb[d]);jb[d]=null}},
o:function(a){Z.depthFunc(a)},n:function(a){Z.depthMask(!!a)},c:function(a){Z.disable(a)},b:function(a){Z.disableVertexAttribArray(a)},na:function(a,b,c){Z.drawArrays(a,b,c)},k:function(a,b){for(var c=sb[a],d=0;d<a;d++)c[d]=A[b+4*d>>2];Z.drawBuffers(c)},ma:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},la:function(a){Z.enableVertexAttribArray(a)},A:function(a){Z.frontFace(a)},z:function(a,b){tb(a,b,"createBuffer",fb)},ka:function(a,b){tb(a,b,"createVertexArray",jb)},ja:function(a,
b){return Z.getAttribLocation(R[a],x(b))},y:function(a,b){ub(a,b)},ha:function(a,b,c,d){a=Z.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");0<b&&d?(b=z(a,y,d,b),c&&(A[c>>2]=b)):c&&(A[c>>2]=0)},x:function(a,b,c){if(c)if(a>=db)W(1281);else{var d=V[a];if(d)if(35716==b)a=Z.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),A[c>>2]=a.length+1;else if(35719==b)A[c>>2]=d.qb;else if(35722==b){if(-1==d.nb){a=R[a];var f=Z.getProgramParameter(a,35721);for(b=d.nb=0;b<f;++b)d.nb=Math.max(d.nb,Z.getActiveAttrib(a,
b).name.length+1)}A[c>>2]=d.nb}else if(35381==b){if(-1==d.ob)for(a=R[a],f=Z.getProgramParameter(a,35382),b=d.ob=0;b<f;++b)d.ob=Math.max(d.ob,Z.getActiveUniformBlockName(a,b).length+1);A[c>>2]=d.ob}else A[c>>2]=Z.getProgramParameter(R[a],b);else W(1282)}else W(1281)},ga:function(a,b,c,d){a=Z.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");0<b&&d?(b=z(a,y,d,b),c&&(A[c>>2]=b)):c&&(A[c>>2]=0)},w:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),A[c>>2]=a.length+
1):35720==b?(a=Z.getShaderSource(T[a]),A[c>>2]=null===a||0==a.length?0:a.length+1):A[c>>2]=Z.getShaderParameter(T[a],b):W(1281)},fa:function(a){if(lb[a])return lb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=vb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||W(1280);b=vb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=U.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=vb(b);
break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=vb(b);break;default:return W(1280),0}return lb[a]=b},g:function(a,b){b=x(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=V[a]&&V[a].wb[b])&&0<=c&&c<a[0]?a[1]+c:-1},ea:function(a){Z.linkProgram(R[a]);var b=R[a];a=V[a]={wb:{},qb:0,
nb:-1,ob:-1};for(var c=a.wb,d=Z.getProgramParameter(b,35718),f=0;f<d;++f){var k=Z.getActiveUniform(b,f),l=k.name;a.qb=Math.max(a.qb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var F=Z.getUniformLocation(b,l);if(F){var P=X(S);c[l]=[k.size,P];S[P]=F;for(var p=1;p<k.size;++p)F=Z.getUniformLocation(b,l+"["+p+"]"),P=X(S),S[P]=F}}},v:function(a,b){Z.polygonOffset(a,b)},j:function(a){Z.readBuffer(a)},da:function(a,b,c,d){Z.scissor(a,b,c,d)},ca:function(a,b,c,d){for(var f="",k=0;k<b;++k){var l=
d?A[d+4*k>>2]:-1;f+=x(A[c+4*k>>2],0>l?void 0:l)}Z.shaderSource(T[a],f)},ba:function(a,b,c){Z.stencilFunc(a,b,c)},t:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},m:function(a){Z.stencilMask(a)},aa:function(a,b,c){Z.stencilOp(a,b,c)},s:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},$:function(a,b,c){if(U.jb)Z.uniform1fv(S[a],B,c>>2,b);else{if(256>=b)for(var d=Y[b-1],f=0;f<b;++f)d[f]=B[c+4*f>>2];else d=B.subarray(c>>2,c+4*b>>2);Z.uniform1fv(S[a],d)}},r:function(a,b){Z.uniform1i(S[a],b)},_:function(a,
b,c){if(U.jb)Z.uniform2fv(S[a],B,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],f=0;f<2*b;f+=2)d[f]=B[c+4*f>>2],d[f+1]=B[c+(4*f+4)>>2];else d=B.subarray(c>>2,c+8*b>>2);Z.uniform2fv(S[a],d)}},Z:function(a,b,c){if(U.jb)Z.uniform3fv(S[a],B,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],f=0;f<3*b;f+=3)d[f]=B[c+4*f>>2],d[f+1]=B[c+(4*f+4)>>2],d[f+2]=B[c+(4*f+8)>>2];else d=B.subarray(c>>2,c+12*b>>2);Z.uniform3fv(S[a],d)}},X:function(a,b,c){if(U.jb)Z.uniform4fv(S[a],B,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*
b-1],f=0;f<4*b;f+=4)d[f]=B[c+4*f>>2],d[f+1]=B[c+(4*f+4)>>2],d[f+2]=B[c+(4*f+8)>>2],d[f+3]=B[c+(4*f+12)>>2];else d=B.subarray(c>>2,c+16*b>>2);Z.uniform4fv(S[a],d)}},W:function(a,b,c,d){if(U.jb)Z.uniformMatrix4fv(S[a],!!c,B,d>>2,16*b);else{if(256>=16*b)for(var f=Y[16*b-1],k=0;k<16*b;k+=16)f[k]=B[d+4*k>>2],f[k+1]=B[d+(4*k+4)>>2],f[k+2]=B[d+(4*k+8)>>2],f[k+3]=B[d+(4*k+12)>>2],f[k+4]=B[d+(4*k+16)>>2],f[k+5]=B[d+(4*k+20)>>2],f[k+6]=B[d+(4*k+24)>>2],f[k+7]=B[d+(4*k+28)>>2],f[k+8]=B[d+(4*k+32)>>2],f[k+9]=
B[d+(4*k+36)>>2],f[k+10]=B[d+(4*k+40)>>2],f[k+11]=B[d+(4*k+44)>>2],f[k+12]=B[d+(4*k+48)>>2],f[k+13]=B[d+(4*k+52)>>2],f[k+14]=B[d+(4*k+56)>>2],f[k+15]=B[d+(4*k+60)>>2];else f=B.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(S[a],!!c,f)}},V:function(a){Z.useProgram(R[a])},U:function(a,b){Z.vertexAttribDivisor(a,b)},T:function(a,b,c,d,f,k){Z.vertexAttribPointer(a,b,c,!!d,f,k)},S:function(a,b,c,d){Z.viewport(a,b,c,d)},R:Sa,a:11792},buffer);e.asm=zb;
e.___em_js___sapp_js_create_textfield=function(){return e.asm.Sa.apply(null,arguments)};e.___em_js___sapp_js_focus_textfield=function(){return e.asm.Ta.apply(null,arguments)};e.___em_js___sapp_js_unfocus_textfield=function(){return e.asm.Ua.apply(null,arguments)};e.___em_js___saudio_js_buffer_frames=function(){return e.asm.Va.apply(null,arguments)};e.___em_js___saudio_js_init=function(){return e.asm.Wa.apply(null,arguments)};
e.___em_js___saudio_js_sample_rate=function(){return e.asm.Xa.apply(null,arguments)};e.___em_js___stm_js_perfnow=function(){return e.asm.Ya.apply(null,arguments)};e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.Za.apply(null,arguments)};e.__saudio_emsc_pull=function(){return e.asm._a.apply(null,arguments)};e._free=function(){return e.asm.$a.apply(null,arguments)};e._main=function(){return e.asm.ab.apply(null,arguments)};
var N=e._malloc=function(){return e.asm.bb.apply(null,arguments)},ma=e.stackAlloc=function(){return e.asm.gb.apply(null,arguments)},yb=e.dynCall_idi=function(){return e.asm.cb.apply(null,arguments)},O=e.dynCall_iiii=function(){return e.asm.db.apply(null,arguments)};e.dynCall_v=function(){return e.asm.eb.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.fb.apply(null,arguments)};e.asm=zb;
function u(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}u.prototype=Error();u.prototype.constructor=u;H=function Ab(){e.calledRun||Bb();e.calledRun||(H=Ab)};
e.callMain=function(a){a=a||[];ua||(ua=!0,E(qa));var b=a.length+1,c=ma(4*(b+1));A[c>>2]=la(e.thisProgram);for(var d=1;d<b;d++)A[(c>>2)+d]=la(a[d-1]);A[(c>>2)+b]=0;try{var f=e._main(b,c,0);if(!e.noExitRuntime||0!==f){if(!e.noExitRuntime&&(ia=!0,e.onExit))e.onExit(f);e.quit(f,new u(f))}}catch(k){k instanceof u||("SimulateInfiniteLoop"==k?e.noExitRuntime=!0:((a=k)&&"object"===typeof k&&k.stack&&(a=[k,k.stack]),v("exception thrown: "+a),e.quit(1,k)))}finally{}};
function Bb(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!ia)){ua||(ua=!0,E(qa));E(ra);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&Cb&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();ta.unshift(b)}E(ta)}}a=a||e.arguments;if(!(0<G)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)va();E(pa);0<G||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}}e.run=Bb;function t(a){if(e.onAbort)e.onAbort(a);void 0!==a?(ea(a),v(a),a=JSON.stringify(a)):a="";ia=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=t;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Cb=!0;e.noInitialRun&&(Cb=!1);e.noExitRuntime=!0;Bb();
