var e;e||(e=typeof Module !== 'undefined' ? Module : {});var g={},l;for(l in e)e.hasOwnProperty(l)&&(g[l]=e[l]);var q=[],aa="./this.program";function t(a,b){throw b;}var u=!1,v=!1,ba=!1,ca=!1,ea=!1;u="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!v;ea=!u&&!ba&&!v;var w="",fa,x,ha,ia;
if(ba)w=__dirname+"/",fa=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},x=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),q=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",ka),t=function(a){process.exit(a)},
e.inspect=function(){return"[Emscripten Module object]"};else if(ea)"undefined"!=typeof read&&(fa=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?q=scriptArgs:"undefined"!=typeof arguments&&(q=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=
console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var la=e.print||console.log.bind(console),z=e.printErr||console.warn.bind(console);for(l in g)g.hasOwnProperty(l)&&(e[l]=g[l]);g=null;e.arguments&&(q=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var A;e.wasmBinary&&(A=e.wasmBinary);var B;e.noExitRuntime&&(B=e.noExitRuntime);"object"!==typeof WebAssembly&&z("no native wasm support detected");var C,ma=new WebAssembly.Table({initial:23,maximum:23,element:"anyfunc"}),na=!1;function assert(a,b){a||ka("Assertion failed: "+b)}
function oa(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}function pa(a){var b=["string"],c={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=D(c);E(a,F,b,c)}return b},array:function(a){var b=D(a.length);qa.set(a,b);return b}},d=oa(),f=[],h=0;if(a)for(var k=0;k<a.length;k++){var m=c[b[k]];m?(0===h&&(h=ra()),f[k]=m(a[k])):f[k]=a[k]}d.apply(null,f);0!==h&&sa(h)}
var ta="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function G(a,b){if(a){var c=F,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ta)a=ta.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var k=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|k:(f&7)<<18|h<<12|k<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function E(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var k=a.charCodeAt(h);if(55296<=k&&57343>=k){var m=a.charCodeAt(++h);k=65536+((k&1023)<<10)|m&1023}if(127>=k){if(c>=d)break;b[c++]=k}else{if(2047>=k){if(c+1>=d)break;b[c++]=192|k>>6}else{if(65535>=k){if(c+2>=d)break;b[c++]=224|k>>12}else{if(c+3>=d)break;b[c++]=240|k>>18;b[c++]=128|k>>12&63}b[c++]=128|k>>6&63}b[c++]=128|k&63}}b[c]=0;return c-f}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function va(a){var b=ua(a)+1,c=D(b);E(a,qa,c,b);return c}var buffer,qa,F,wa,xa,H,ya,I,J;
function za(a){buffer=a;e.HEAP8=qa=new Int8Array(a);e.HEAP16=wa=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=F=new Uint8Array(a);e.HEAPU16=xa=new Uint16Array(a);e.HEAPU32=ya=new Uint32Array(a);e.HEAPF32=I=new Float32Array(a);e.HEAPF64=J=new Float64Array(a)}var Aa=e.TOTAL_MEMORY||33554432;e.wasmMemory?C=e.wasmMemory:C=new WebAssembly.Memory({initial:Aa/65536});C&&(buffer=C.buffer);Aa=buffer.byteLength;za(buffer);H[533332]=7376368;
function Ba(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.lc;"number"===typeof c?void 0===b.bc?e.dynCall_v(c):e.dynCall_vi(c,b.bc):c(void 0===b.bc?null:b.bc)}}}var Ca=[],Da=[],Ea=[],Fa=[],Ga=[];function Ha(){var a=e.preRun.shift();Ca.unshift(a)}var K=0,Ia=null,Ja=null;e.preloadedImages={};e.preloadedAudios={};function ka(a){if(e.onAbort)e.onAbort(a);la(a);z(a);na=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ka(){var a=L;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var L="plmpeg-sapp.wasm";if(!Ka()){var La=L;L=e.locateFile?e.locateFile(La,w):w+La}function Ma(){try{if(A)return new Uint8Array(A);if(x)return x(L);throw"both async and sync fetching of the wasm failed";}catch(a){ka(a)}}
function Na(){return A||!u&&!v||"function"!==typeof fetch?new Promise(function(a){a(Ma())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ma()})}Da.push({lc:function(){Oa()}});var Pa=0,Qa=0,M=0,Ra=0,Sa=0,Ta=null,Ua=null,Va=!1;function Wa(){for(var a=N.length-1;0<=a;--a)Xa(a);N=[];Ya=[]}var Ya=[];
function Za(){if($a&&ab.$b)for(var a=0;a<Ya.length;++a){var b=Ya[a];Ya.splice(a,1);--a;b.vc.apply(this,b.pc)}}var $a=0,ab=null,N=[];function Xa(a){var b=N[a];b.target.removeEventListener(b.Sb,b.jc,b.Ub);N.splice(a,1)}function O(a){function b(b){++$a;ab=a;Za();a.Wb(b);Za();--$a}if(a.Vb)a.jc=b,a.target.addEventListener(a.Sb,b,a.Ub),N.push(a),Va||(Fa.push(Wa),Va=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Sb==a.Sb&&Xa(c--)}function bb(a){return a===a+0?G(a):a}
var cb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){return cb[a]||("undefined"!==typeof document?document.querySelector(bb(a)):void 0)}
function db(a,b,c,d,f,h){Pa||(Pa=Q(164));a={target:P(a),$b:!0,Sb:h,Vb:d,Wb:function(a){a=a||event;var c=Pa;E(a.key?a.key:"",F,c+0,32);E(a.code?a.code:"",F,c+32,32);H[c+64>>2]=a.location;H[c+68>>2]=a.ctrlKey;H[c+72>>2]=a.shiftKey;H[c+76>>2]=a.altKey;H[c+80>>2]=a.metaKey;H[c+84>>2]=a.repeat;E(a.locale?a.locale:"",F,c+88,32);E(a.char?a.char:"",F,c+120,32);H[c+152>>2]=a.charCode;H[c+156>>2]=a.keyCode;H[c+160>>2]=a.which;R(d,f,c,b)&&a.preventDefault()},Ub:c};O(a)}
function eb(a,b,c){H[a>>2]=b.screenX;H[a+4>>2]=b.screenY;H[a+8>>2]=b.clientX;H[a+12>>2]=b.clientY;H[a+16>>2]=b.ctrlKey;H[a+20>>2]=b.shiftKey;H[a+24>>2]=b.altKey;H[a+28>>2]=b.metaKey;wa[a+32>>1]=b.button;wa[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Ua;H[a+36>>2]=b.movementX||b.screenX-Ta;H[a+40>>2]=d;c=0>cb.indexOf(c)?c.getBoundingClientRect():{left:0,top:0};H[a+44>>2]=b.clientX-c.left;H[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&"mousewheel"!==b.type&&(Ta=b.screenX,Ua=b.screenY)}
function fb(a,b,c,d,f,h){Qa||(Qa=Q(64));a=P(a);O({target:a,$b:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Sb:h,Vb:d,Wb:function(c){c=c||event;eb(Qa,c,a);R(d,f,Qa,b)&&c.preventDefault()},Ub:c})}
function gb(a,b,c,d){Ra||(Ra=Q(36));a=P(a);O({target:a,Sb:"resize",Vb:d,Wb:function(c){c=c||event;if(c.target==a){var f=Ra,k=document.body;H[f>>2]=c.detail;H[f+4>>2]=k.clientWidth;H[f+8>>2]=k.clientHeight;H[f+12>>2]=innerWidth;H[f+16>>2]=innerHeight;H[f+20>>2]=outerWidth;H[f+24>>2]=outerHeight;H[f+28>>2]=pageXOffset;H[f+32>>2]=pageYOffset;R(d,10,f,b)&&c.preventDefault()}},Ub:c})}
function hb(a,b,c,d,f,h){Sa||(Sa=Q(1684));a=P(a);O({target:a,$b:"touchstart"==h||"touchend"==h,Sb:h,Vb:d,Wb:function(c){c=c||event;for(var h={},k=0;k<c.touches.length;++k){var p=c.touches[k];p.dc=!1;h[p.identifier]=p}for(k=0;k<c.changedTouches.length;++k)p=c.changedTouches[k],h[p.identifier]=p,p.dc=!0;for(k=0;k<c.targetTouches.length;++k)p=c.targetTouches[k],h[p.identifier].nc=!0;var r=p=Sa;H[r+4>>2]=c.ctrlKey;H[r+8>>2]=c.shiftKey;H[r+12>>2]=c.altKey;H[r+16>>2]=c.metaKey;r+=20;var da=a.getBoundingClientRect(),
nb=0;for(k in h){var y=h[k];H[r>>2]=y.identifier;H[r+4>>2]=y.screenX;H[r+8>>2]=y.screenY;H[r+12>>2]=y.clientX;H[r+16>>2]=y.clientY;H[r+20>>2]=y.pageX;H[r+24>>2]=y.pageY;H[r+28>>2]=y.dc;H[r+32>>2]=y.nc;H[r+36>>2]=y.clientX-da.left;H[r+40>>2]=y.clientY-da.top;r+=52;if(32<=++nb)break}H[p>>2]=nb;R(d,f,p,b)&&c.preventDefault()},Ub:c})}function ib(a,b,c,d,f,h){a={target:P(a),Sb:h,Vb:d,Wb:function(a){a=a||event;R(d,f,0,b)&&a.preventDefault()},Ub:c};O(a)}
function jb(a,b,c,d,f){function h(c){c=c||event;eb(M,c,a);J[M+64>>3]=c.wheelDeltaX||0;J[M+72>>3]=-(c.wheelDeltaY||c.wheelDelta);J[M+80>>3]=0;H[M+88>>2]=0;R(d,9,M,b)&&c.preventDefault()}function k(c){c=c||event;var f=M;eb(f,c,a);J[f+64>>3]=c.deltaX;J[f+72>>3]=c.deltaY;J[f+80>>3]=c.deltaZ;H[f+88>>2]=c.deltaMode;R(d,9,f,b)&&c.preventDefault()}M||(M=Q(96));O({target:a,$b:!0,Sb:f,Vb:d,Wb:"wheel"==f?k:h,Ub:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,f,h){b.drawArraysInstancedANGLE(a,d,f,h)},a.drawElementsInstanced=function(a,d,f,h,k){b.drawElementsInstancedANGLE(a,d,f,h,k)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
var ob=1,pb=0,qb=[],S=[],rb=[],sb=[],tb=[],T=[],U=[],ub=[],vb={},V=null,wb={},xb={},yb={};function W(a){pb||(pb=a)}function zb(a){for(var b=ob++,c=a.length;c<b;c++)a[c]=null;return b}var X=[0];
function Ab(a){a||(a=V);if(!a.mc){a.mc=!0;var b=a.ac;2>a.version&&(kb(b),lb(b),mb(b));b.rc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var Bb,Cb,Db=["default","low-power","high-performance"],Eb=[];function Fb(a,b,c,d){for(var f=0;f<a;f++){var h=Y[c](),k=h&&zb(d);h?(h.name=k,d[k]=h):W(1282);H[b+4*f>>2]=k}}
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){W(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>V.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else W(1281)}
function Hb(a){var b=ua(a)+1,c=Q(b);E(a,F,c,b);return c}function Ib(a){a-=5120;return 0==a?qa:1==a?F:2==a?wa:4==a?H:6==a?I:5==a||28922==a||28520==a||30779==a||30782==a?ya:xa}function Jb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Kb(a,b,c,d,f){a=Ib(a);var h=Jb(a);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Y,Lb=new Float32Array(256),Z=0;256>Z;Z++)X[Z]=Lb.subarray(0,Z+1);for(Z=0;256>Z;Z++);
for(var Mb=0;32>Mb;Mb++)Eb.push(Array(Mb));
var Vb={$a:function(){},W:function(){},V:function(){return devicePixelRatio||1},$:function(a,b,c){a=P(a);if(!a)return-4;a=a.getBoundingClientRect();J[b>>3]=a.width;J[c>>3]=a.height;return 0},Za:function(a,b,c){F.set(F.subarray(b,b+c),a)},La:function(a,b){function c(d){Nb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},_a:function(a){var b=qa.length;if(2147418112<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-
d%65536);a:{try{C.grow(Math.min(2147418112,d)-buffer.byteLength+65535>>16);za(C.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},O:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=c;return 0},Va:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},Ta:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},Ua:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},ia:function(a,b,c,d){fb(a,b,c,d,5,"mousedown");return 0},Ya:function(a,b,c,d){fb(a,b,c,d,33,"mouseenter");return 0},Xa:function(a,
b,c,d){fb(a,b,c,d,34,"mouseleave");return 0},eb:function(a,b,c,d){fb(a,b,c,d,8,"mousemove");return 0},kb:function(a,b,c,d){fb(a,b,c,d,6,"mouseup");return 0},Qa:function(a,b,c,d){gb(a,b,c,d);return 0},Oa:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");return 0},Pa:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},Ra:function(a,b,c,d){hb(a,b,c,d,24,"touchmove");return 0},Sa:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},Na:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},Ma:function(a,
b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},Wa:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(jb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(jb(a,b,c,d,"mousewheel"),0):-1},H:function(a,b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=Db[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.hc=H[b+8];c.sc=H[b+9];c.fc=H[b+10];c.kc=H[b+11];c.tc=
H[b+12];c.uc=H[b+13];a=P(a);if(!a||c.kc)c=0;else if(a=1<c.hc?a.getContext("webgl2",c):a.getContext("webgl",c)){b=Q(8);var d={handle:b,attributes:c,version:c.hc,ac:a};a.canvas&&(a.canvas.oc=d);vb[b]=d;("undefined"===typeof c.fc||c.fc)&&Ab(d);c=b}else c=0;return c},na:function(a,b){a=vb[a];b=G(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?kb(Y):"OES_vertex_array_object"==b?lb(Y):"WEBGL_draw_buffers"==b&&mb(Y);return!!a.ac.getExtension(b)},Ba:function(a){a>>=2;for(var b=0;14>b;++b)H[a+
b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},ra:function(a){V=vb[a];e.qc=Y=V&&V.ac;return!a||Y?0:-5},g:function(a){Y.activeTexture(a)},J:function(a,b){Y.attachShader(S[a],U[b])},c:function(a,b){35051==a?Y.ec=b:35052==a&&(Y.Tb=b);Y.bindBuffer(a,qb[b])},h:function(a,b){Y.bindFramebuffer(a,rb[b])},M:function(a,b){Y.bindRenderbuffer(a,sb[b])},a:function(a,b){Y.bindTexture(a,tb[b])},U:function(a){Y.bindVertexArray(ub[a])},B:function(a,b,c,d){Y.blendColor(a,b,c,d)},C:function(a,b){Y.blendEquationSeparate(a,
b)},D:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},k:function(a,b,c,d,f,h,k,m,n,p){Y.blitFramebuffer(a,b,c,d,f,h,k,m,n,p)},Q:function(a,b,c,d){2<=V.version?c?Y.bufferData(a,F,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?F.subarray(c,c+b):b,d)},P:function(a,b,c,d){2<=V.version?Y.bufferSubData(a,b,F,d,c):Y.bufferSubData(a,b,F.subarray(d,d+c))},G:function(a){Y.clear(a)},qa:function(a,b,c,d){Y.clearColor(a,b,c,d)},pa:function(a){Y.clearDepth(a)},oa:function(a){Y.clearStencil(a)},u:function(a,b,c,d){Y.colorMask(!!a,
!!b,!!c,!!d)},bb:function(a){Y.compileShader(U[a])},Ca:function(a,b,c,d,f,h,k,m){2<=V.version?Y.Tb?Y.compressedTexImage2D(a,b,c,d,f,h,k,m):Y.compressedTexImage2D(a,b,c,d,f,h,F,m,k):Y.compressedTexImage2D(a,b,c,d,f,h,m?F.subarray(m,m+k):null)},za:function(a,b,c,d,f,h,k,m,n){Y.Tb?Y.compressedTexImage3D(a,b,c,d,f,h,k,m,n):Y.compressedTexImage3D(a,b,c,d,f,h,k,F,n,m)},xa:function(){var a=zb(S),b=Y.createProgram();b.name=a;S[a]=b;return a},db:function(a){var b=zb(U);U[b]=Y.createShader(a);return b},A:function(a){Y.cullFace(a)},
Fa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=qb[d];f&&(Y.deleteBuffer(f),f.name=0,qb[d]=null,d==Bb&&(Bb=0),d==Cb&&(Cb=0),d==Y.ec&&(Y.ec=0),d==Y.Tb&&(Y.Tb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],f=rb[d];f&&(Y.deleteFramebuffer(f),f.name=0,rb[d]=null)}},S:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),b.name=0,S[a]=null,wb[a]=null):W(1281)}},n:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=sb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,sb[d]=null)}},v:function(a){if(a){var b=
U[a];b?(Y.deleteShader(b),U[a]=null):W(1281)}},T:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=tb[d];f&&(Y.deleteTexture(f),f.name=0,tb[d]=null)}},Ga:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];Y.deleteVertexArray(ub[d]);ub[d]=null}},s:function(a){Y.depthFunc(a)},t:function(a){Y.depthMask(!!a)},b:function(a){Y.disable(a)},w:function(a){Y.disableVertexAttribArray(a)},ba:function(a,b,c){Y.drawArrays(a,b,c)},m:function(a,b){for(var c=Eb[a],d=0;d<a;d++)c[d]=H[b+4*d>>2];Y.drawBuffers(c)},
ca:function(a,b,c,d){Y.drawElements(a,b,c,d)},e:function(a){Y.enable(a)},ja:function(a){Y.enableVertexAttribArray(a)},z:function(a){Y.frontFace(a)},R:function(a,b){Fb(a,b,"createBuffer",qb)},N:function(a,b){Fb(a,b,"createRenderbuffer",sb)},Da:function(a,b){Fb(a,b,"createTexture",tb)},Ha:function(a,b){Fb(a,b,"createVertexArray",ub)},ua:function(a,b){return Y.getAttribLocation(S[a],G(b))},d:function(a,b){Gb(a,b)},va:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&
d?E(a,F,d,b):0;c&&(H[c>>2]=b)},I:function(a,b,c){if(c)if(a>=ob)W(1281);else{var d=wb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.cc;else if(35722==b){if(-1==d.Yb){a=S[a];var f=Y.getProgramParameter(a,35721);for(b=d.Yb=0;b<f;++b)d.Yb=Math.max(d.Yb,Y.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.Yb}else if(35381==b){if(-1==d.Zb)for(a=S[a],f=Y.getProgramParameter(a,35382),b=d.Zb=0;b<f;++b)d.Zb=Math.max(d.Zb,Y.getActiveUniformBlockName(a,
b).length+1);H[c>>2]=d.Zb}else H[c>>2]=Y.getProgramParameter(S[a],b);else W(1282)}else W(1281)},ab:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},X:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(U[a]),H[c>>2]=null===a||0==a.length?0:a.length+1):H[c>>2]=Y.getShaderParameter(U[a],b):W(1281)},Ja:function(a){if(xb[a])return xb[a];switch(a){case 7939:var b=
Y.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Hb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=Hb(b);break;case 7938:b=Y.getParameter(7938);b=2<=V.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Hb(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Hb(b);break;default:return W(1280),
0}return xb[a]=b},Ia:function(a,b){if(2>V.version)return W(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(a){return"GL_"+a})),c=c.map(function(a){return Hb(a)}),c=yb[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},j:function(a,b){b=G(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=wb[a]&&wb[a].ic[b])&&0<=
c&&c<a[0]?a[1]+c:-1},wa:function(a){Y.linkProgram(S[a]);var b=S[a];a=wb[a]={ic:{},cc:0,Yb:-1,Zb:-1};for(var c=a.ic,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var h=Y.getActiveUniform(b,f),k=h.name;a.cc=Math.max(a.cc,k.length+1);"]"==k.slice(-1)&&(k=k.slice(0,k.lastIndexOf("[")));var m=Y.getUniformLocation(b,k);if(m){var n=zb(T);c[k]=[h.size,n];T[n]=m;for(var p=1;p<h.size;++p)m=Y.getUniformLocation(b,k+"["+p+"]"),n=zb(T),T[n]=m}}},y:function(a,b){Y.polygonOffset(a,b)},l:function(a){Y.readBuffer(a)},
Ea:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},L:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},sa:function(a,b,c,d){Y.scissor(a,b,c,d)},cb:function(a,b,c,d){for(var f="",h=0;h<b;++h){var k=d?H[d+4*h>>2]:-1;f+=G(H[c+4*h>>2],0>k?void 0:k)}Y.shaderSource(U[a],f)},aa:function(a,b,c){Y.stencilFunc(a,b,c)},F:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},r:function(a){Y.stencilMask(a)},jb:function(a,b,c){Y.stencilOp(a,b,c)},E:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Aa:function(a,
b,c,d,f,h,k,m,n){if(2<=V.version)if(Y.Tb)Y.texImage2D(a,b,c,d,f,h,k,m,n);else if(n){var p=Ib(m);Y.texImage2D(a,b,c,d,f,h,k,m,p,n>>Jb(p))}else Y.texImage2D(a,b,c,d,f,h,k,m,null);else Y.texImage2D(a,b,c,d,f,h,k,m,n?Kb(m,k,d,f,n):null)},ya:function(a,b,c,d,f,h,k,m,n,p){if(Y.Tb)Y.texImage3D(a,b,c,d,f,h,k,m,n,p);else if(p){var r=Ib(n);Y.texImage3D(a,b,c,d,f,h,k,m,n,r,p>>Jb(r))}else Y.texImage3D(a,b,c,d,f,h,k,m,n,null)},K:function(a,b,c){Y.texParameterf(a,b,c)},f:function(a,b,c){Y.texParameteri(a,b,c)},
Z:function(a,b,c,d,f,h,k,m,n){if(2<=V.version)if(Y.Tb)Y.texSubImage2D(a,b,c,d,f,h,k,m,n);else if(n){var p=Ib(m);Y.texSubImage2D(a,b,c,d,f,h,k,m,p,n>>Jb(p))}else Y.texSubImage2D(a,b,c,d,f,h,k,m,null);else p=null,n&&(p=Kb(m,k,f,h,n)),Y.texSubImage2D(a,b,c,d,f,h,k,m,p)},_:function(a,b,c,d,f,h,k,m,n,p,r){if(Y.Tb)Y.texSubImage3D(a,b,c,d,f,h,k,m,n,p,r);else if(r){var da=Ib(p);Y.texSubImage3D(a,b,c,d,f,h,k,m,n,p,da,r>>Jb(da))}else Y.texSubImage3D(a,b,c,d,f,h,k,m,n,p,null)},ha:function(a,b,c){if(2<=V.version)Y.uniform1fv(T[a],
I,c>>2,b);else{if(256>=b)for(var d=X[b-1],f=0;f<b;++f)d[f]=I[c+4*f>>2];else d=I.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)}},x:function(a,b){Y.uniform1i(T[a],b)},ga:function(a,b,c){if(2<=V.version)Y.uniform2fv(T[a],I,c>>2,2*b);else{if(256>=2*b)for(var d=X[2*b-1],f=0;f<2*b;f+=2)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);Y.uniform2fv(T[a],d)}},fa:function(a,b,c){if(2<=V.version)Y.uniform3fv(T[a],I,c>>2,3*b);else{if(256>=3*b)for(var d=X[3*b-1],f=0;f<3*b;f+=3)d[f]=I[c+
4*f>>2],d[f+1]=I[c+(4*f+4)>>2],d[f+2]=I[c+(4*f+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);Y.uniform3fv(T[a],d)}},ea:function(a,b,c){if(2<=V.version)Y.uniform4fv(T[a],I,c>>2,4*b);else{if(256>=4*b)for(var d=X[4*b-1],f=0;f<4*b;f+=4)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2],d[f+2]=I[c+(4*f+8)>>2],d[f+3]=I[c+(4*f+12)>>2];else d=I.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],d)}},da:function(a,b,c,d){if(2<=V.version)Y.uniformMatrix4fv(T[a],!!c,I,d>>2,16*b);else{if(256>=16*b)for(var f=X[16*b-1],h=0;h<16*b;h+=
16)f[h]=I[d+4*h>>2],f[h+1]=I[d+(4*h+4)>>2],f[h+2]=I[d+(4*h+8)>>2],f[h+3]=I[d+(4*h+12)>>2],f[h+4]=I[d+(4*h+16)>>2],f[h+5]=I[d+(4*h+20)>>2],f[h+6]=I[d+(4*h+24)>>2],f[h+7]=I[d+(4*h+28)>>2],f[h+8]=I[d+(4*h+32)>>2],f[h+9]=I[d+(4*h+36)>>2],f[h+10]=I[d+(4*h+40)>>2],f[h+11]=I[d+(4*h+44)>>2],f[h+12]=I[d+(4*h+48)>>2],f[h+13]=I[d+(4*h+52)>>2],f[h+14]=I[d+(4*h+56)>>2],f[h+15]=I[d+(4*h+60)>>2];else f=I.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],!!c,f)}},ma:function(a){Y.useProgram(S[a])},ka:function(a,b){Y.vertexAttribDivisor(a,
b)},la:function(a,b,c,d,f,h){Y.vertexAttribPointer(a,b,c,!!d,f,h)},ta:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:C,q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},Ka:function(){window.addEventListener("beforeunload",function(a){0!=Pb()&&(a.preventDefault(),a.returnValue=" ")})},
lb:function(){window.addEventListener("paste",function(a){a=a.clipboardData.getData("text");pa([a])})},o:function(){document.getElementById("_sokol_app_input_element").blur()},gb:function(){return e.Xb?e.Xb.bufferSize:0},ib:function(a,b,c){e.Rb=null;e.Xb=null;"undefined"!==typeof AudioContext?(e.Rb=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?(e.Rb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),
console.log("sokol_audio.h: created webkitAudioContext")):(e.Rb=null,console.log("sokol_audio.h: no WebAudio support"));return e.Rb?(console.log("sokol_audio.h: sample rate ",e.Rb.sampleRate),e.Xb=e.Rb.createScriptProcessor(c,0,b),e.Xb.onaudioprocess=function(a){var b=a.outputBuffer.length,c=Qb(b);if(c)for(var d=a.outputBuffer.numberOfChannels,m=0;m<d;m++)for(var n=a.outputBuffer.getChannelData(m),p=0;p<b;p++)n[p]=I[(c>>2)+(d*p+m)]},e.Xb.connect(e.Rb.destination),a=function(){e.Rb&&"suspended"===
e.Rb.state&&e.Rb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},hb:function(){return e.Rb?e.Rb.sampleRate:0},Y:function(a,b,c,d,f,h){b=G(b);var k=new XMLHttpRequest;k.open("GET",b);k.responseType="arraybuffer";var m=0<d;m&&k.setRequestHeader("Range","bytes="+c+"-"+(c+d));k.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var b=new Uint8Array(k.response),
c=b.length;c<=h?(F.set(b,f),Rb(a,d,c)):Sb(a)}else Tb(a,this.status)};k.send()},fb:function(a,b){b=G(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var b=this.getResponseHeader("Content-Length");Ub(a,b)}else Tb(a,this.status)};c.send()},table:ma},Wb=function(){function a(a){e.asm=a.exports;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Ia&&(clearInterval(Ia),Ia=null),Ja&&(a=Ja,Ja=null,a()))}function b(b){a(b.instance)}
function c(a){return Na().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+a);ka(a)})}var d={env:Vb,wasi_snapshot_preview1:Vb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return z("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||"function"!==typeof fetch)return c(b);
fetch(L,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){z("wasm streaming compile failed: "+a);z("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();e.asm=Wb;var Oa=e.___wasm_call_ctors=function(){return(Oa=e.___wasm_call_ctors=e.asm.mb).apply(null,arguments)},Q=e._malloc=function(){return(Q=e._malloc=e.asm.nb).apply(null,arguments)};e._free=function(){return(e._free=e.asm.ob).apply(null,arguments)};
var Ob=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=e.__sapp_emsc_notify_keyboard_hidden=e.asm.pb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.qb).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.rb).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.sb).apply(null,arguments)};
e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.tb).apply(null,arguments)};var Pb=e.__sapp_html5_get_ask_leave_site=function(){return(Pb=e.__sapp_html5_get_ask_leave_site=e.asm.ub).apply(null,arguments)};e.___em_js__sapp_js_hook_beforeunload=function(){return(e.___em_js__sapp_js_hook_beforeunload=e.asm.vb).apply(null,arguments)};e.___em_js__sapp_js_init_clipboard=function(){return(e.___em_js__sapp_js_init_clipboard=e.asm.wb).apply(null,arguments)};
e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.xb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.yb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.zb).apply(null,arguments)};var Qb=e.__saudio_emsc_pull=function(){return(Qb=e.__saudio_emsc_pull=e.asm.Ab).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.Bb).apply(null,arguments)};
e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.Cb).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.Db).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.Eb).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.Fb).apply(null,arguments)};
var Ub=e.__sfetch_emsc_head_response=function(){return(Ub=e.__sfetch_emsc_head_response=e.asm.Gb).apply(null,arguments)},Rb=e.__sfetch_emsc_get_response=function(){return(Rb=e.__sfetch_emsc_get_response=e.asm.Hb).apply(null,arguments)},Tb=e.__sfetch_emsc_failed_http_status=function(){return(Tb=e.__sfetch_emsc_failed_http_status=e.asm.Ib).apply(null,arguments)},Sb=e.__sfetch_emsc_failed_buffer_too_small=function(){return(Sb=e.__sfetch_emsc_failed_buffer_too_small=e.asm.Jb).apply(null,arguments)},ra=
e.stackSave=function(){return(ra=e.stackSave=e.asm.Kb).apply(null,arguments)},D=e.stackAlloc=function(){return(D=e.stackAlloc=e.asm.Lb).apply(null,arguments)},sa=e.stackRestore=function(){return(sa=e.stackRestore=e.asm.Mb).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.Nb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.Ob).apply(null,arguments)};
var R=e.dynCall_iiii=function(){return(R=e.dynCall_iiii=e.asm.Pb).apply(null,arguments)},Nb=e.dynCall_idi=function(){return(Nb=e.dynCall_idi=e.asm.Qb).apply(null,arguments)};e.asm=Wb;var Xb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ja=function Yb(){Xb||Zb();Xb||(Ja=Yb)};
function Zb(a){function b(){if(!Xb&&(Xb=!0,!na)){Ba(Da);Ba(Ea);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if($b){var b=a,d=e._main;b=b||[];var f=b.length+1,h=D(4*(f+1));H[h>>2]=va(aa);for(var k=1;k<f;k++)H[(h>>2)+k]=va(b[k-1]);H[(h>>2)+f]=0;try{var m=d(f,h);if(!B||0!==m){if(!B&&(na=!0,e.onExit))e.onExit(m);t(m,new ja(m))}}catch(n){n instanceof ja||("unwind"==n?B=!0:((b=n)&&"object"===typeof n&&n.stack&&(b=[n,n.stack]),z("exception thrown: "+b),t(1,n)))}finally{}}if(e.postRun)for("function"==
typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)b=e.postRun.shift(),Ga.unshift(b);Ba(Ga)}}a=a||q;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ha();Ba(Ca);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Zb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var $b=!0;e.noInitialRun&&($b=!1);B=!0;Zb();
