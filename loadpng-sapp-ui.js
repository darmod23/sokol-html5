var e;e||(e=typeof Module !== 'undefined' ? Module : {});var g={},k;for(k in e)e.hasOwnProperty(k)&&(g[k]=e[k]);var n=[],aa="./this.program";function r(a,b){throw b;}var u=!1,v=!1,ba=!1,ca=!1,da=!1;u="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!v;da=!u&&!ba&&!v;var w="",ea,x,fa,ha;
if(ba)w=__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),n=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",ja),r=function(a){process.exit(a)},
e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?n=scriptArgs:"undefined"!=typeof arguments&&(n=arguments),"function"===typeof quit&&(r=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=
console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),z=e.printErr||console.warn.bind(console);for(k in g)g.hasOwnProperty(k)&&(e[k]=g[k]);g=null;e.arguments&&(n=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(r=e.quit);var A;e.wasmBinary&&(A=e.wasmBinary);var B;e.noExitRuntime&&(B=e.noExitRuntime);"object"!==typeof WebAssembly&&z("no native wasm support detected");var C,la=new WebAssembly.Table({initial:92,maximum:92,element:"anyfunc"}),ma=!1;function assert(a,b){a||ja("Assertion failed: "+b)}
function na(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}function oa(a){var b=["string"],c={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=D(c);E(a,F,b,c)}return b},array:function(a){var b=D(a.length);pa.set(a,b);return b}},d=na(),f=[],h=0;if(a)for(var l=0;l<a.length;l++){var m=c[b[l]];m?(0===h&&(h=qa()),f[l]=m(a[l])):f[l]=a[l]}d.apply(null,f);0!==h&&ra(h)}
var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function G(a,b){if(a){var c=F,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var l=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|l:(f&7)<<18|h<<12|l<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function E(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);if(55296<=l&&57343>=l){var m=a.charCodeAt(++h);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ua(a){var b=ta(a)+1,c=D(b);E(a,pa,c,b);return c}var buffer,pa,F,va,wa,H,xa,I,J;
function ya(a){buffer=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=F=new Uint8Array(a);e.HEAPU16=wa=new Uint16Array(a);e.HEAPU32=xa=new Uint32Array(a);e.HEAPF32=I=new Float32Array(a);e.HEAPF64=J=new Float64Array(a)}var za=e.TOTAL_MEMORY||33554432;e.wasmMemory?C=e.wasmMemory:C=new WebAssembly.Memory({initial:za/65536});C&&(buffer=C.buffer);za=buffer.byteLength;ya(buffer);H[458152]=7075648;
function Aa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.ec;"number"===typeof c?void 0===b.Wb?e.dynCall_v(c):e.dynCall_vi(c,b.Wb):c(void 0===b.Wb?null:b.Wb)}}}var Ba=[],Ca=[],Da=[],Ea=[],Fa=[];function Ga(){var a=e.preRun.shift();Ba.unshift(a)}var K=0,Ha=null,Ia=null;e.preloadedImages={};e.preloadedAudios={};function ja(a){if(e.onAbort)e.onAbort(a);ka(a);z(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ja(){var a=L;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var L="loadpng-sapp-ui.wasm";if(!Ja()){var Ka=L;L=e.locateFile?e.locateFile(Ka,w):w+Ka}function La(){try{if(A)return new Uint8Array(A);if(x)return x(L);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Ma(){return A||!u&&!v||"function"!==typeof fetch?new Promise(function(a){a(La())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return La()})}Ca.push({ec:function(){Na()}});var Oa=0,Pa=0,M=0,Qa=0,Ra=0,Sa=null,Ta=null,Ua=!1;function Va(){for(var a=N.length-1;0<=a;--a)Wa(a);N=[];Xa=[]}var Xa=[];
function Ya(){if(Za&&$a.Ub)for(var a=0;a<Xa.length;++a){var b=Xa[a];Xa.splice(a,1);--a;b.pc.apply(this,b.jc)}}var Za=0,$a=null,N=[];function Wa(a){var b=N[a];b.target.removeEventListener(b.Nb,b.cc,b.Ob);N.splice(a,1)}function O(a){function b(b){++Za;$a=a;Ya();a.Rb(b);Ya();--Za}if(a.Pb)a.cc=b,a.target.addEventListener(a.Nb,b,a.Ob),N.push(a),Ua||(Ea.push(Va),Ua=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Nb==a.Nb&&Wa(c--)}function ab(a){return a===a+0?G(a):a}
var bb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){return bb[a]||("undefined"!==typeof document?document.querySelector(ab(a)):void 0)}
function cb(a,b,c,d,f,h){Oa||(Oa=Q(164));a={target:P(a),Ub:!0,Nb:h,Pb:d,Rb:function(a){a=a||event;var c=Oa;E(a.key?a.key:"",F,c+0,32);E(a.code?a.code:"",F,c+32,32);H[c+64>>2]=a.location;H[c+68>>2]=a.ctrlKey;H[c+72>>2]=a.shiftKey;H[c+76>>2]=a.altKey;H[c+80>>2]=a.metaKey;H[c+84>>2]=a.repeat;E(a.locale?a.locale:"",F,c+88,32);E(a.char?a.char:"",F,c+120,32);H[c+152>>2]=a.charCode;H[c+156>>2]=a.keyCode;H[c+160>>2]=a.which;R(d,f,c,b)&&a.preventDefault()},Ob:c};O(a)}
function db(a,b,c){H[a>>2]=b.screenX;H[a+4>>2]=b.screenY;H[a+8>>2]=b.clientX;H[a+12>>2]=b.clientY;H[a+16>>2]=b.ctrlKey;H[a+20>>2]=b.shiftKey;H[a+24>>2]=b.altKey;H[a+28>>2]=b.metaKey;va[a+32>>1]=b.button;va[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Ta;H[a+36>>2]=b.movementX||b.screenX-Sa;H[a+40>>2]=d;c=0>bb.indexOf(c)?c.getBoundingClientRect():{left:0,top:0};H[a+44>>2]=b.clientX-c.left;H[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&"mousewheel"!==b.type&&(Sa=b.screenX,Ta=b.screenY)}
function eb(a,b,c,d,f,h){Pa||(Pa=Q(64));a=P(a);O({target:a,Ub:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Nb:h,Pb:d,Rb:function(c){c=c||event;db(Pa,c,a);R(d,f,Pa,b)&&c.preventDefault()},Ob:c})}
function fb(a,b,c,d){Qa||(Qa=Q(36));a=P(a);O({target:a,Nb:"resize",Pb:d,Rb:function(c){c=c||event;if(c.target==a){var f=Qa,l=document.body;H[f>>2]=c.detail;H[f+4>>2]=l.clientWidth;H[f+8>>2]=l.clientHeight;H[f+12>>2]=innerWidth;H[f+16>>2]=innerHeight;H[f+20>>2]=outerWidth;H[f+24>>2]=outerHeight;H[f+28>>2]=pageXOffset;H[f+32>>2]=pageYOffset;R(d,10,f,b)&&c.preventDefault()}},Ob:c})}
function gb(a,b,c,d,f,h){Ra||(Ra=Q(1684));a=P(a);O({target:a,Ub:"touchstart"==h||"touchend"==h,Nb:h,Pb:d,Rb:function(c){c=c||event;for(var h={},l=0;l<c.touches.length;++l){var q=c.touches[l];q.Yb=!1;h[q.identifier]=q}for(l=0;l<c.changedTouches.length;++l)q=c.changedTouches[l],h[q.identifier]=q,q.Yb=!0;for(l=0;l<c.targetTouches.length;++l)q=c.targetTouches[l],h[q.identifier].hc=!0;var t=q=Ra;H[t+4>>2]=c.ctrlKey;H[t+8>>2]=c.shiftKey;H[t+12>>2]=c.altKey;H[t+16>>2]=c.metaKey;t+=20;var lb=a.getBoundingClientRect(),
mb=0;for(l in h){var y=h[l];H[t>>2]=y.identifier;H[t+4>>2]=y.screenX;H[t+8>>2]=y.screenY;H[t+12>>2]=y.clientX;H[t+16>>2]=y.clientY;H[t+20>>2]=y.pageX;H[t+24>>2]=y.pageY;H[t+28>>2]=y.Yb;H[t+32>>2]=y.hc;H[t+36>>2]=y.clientX-lb.left;H[t+40>>2]=y.clientY-lb.top;t+=52;if(32<=++mb)break}H[q>>2]=mb;R(d,f,q,b)&&c.preventDefault()},Ob:c})}function hb(a,b,c,d,f,h){a={target:P(a),Nb:h,Pb:d,Rb:function(a){a=a||event;R(d,f,0,b)&&a.preventDefault()},Ob:c};O(a)}
function ib(a,b,c,d,f){function h(c){c=c||event;db(M,c,a);J[M+64>>3]=c.wheelDeltaX||0;J[M+72>>3]=-(c.wheelDeltaY||c.wheelDelta);J[M+80>>3]=0;H[M+88>>2]=0;R(d,9,M,b)&&c.preventDefault()}function l(c){c=c||event;var f=M;db(f,c,a);J[f+64>>3]=c.deltaX;J[f+72>>3]=c.deltaY;J[f+80>>3]=c.deltaZ;H[f+88>>2]=c.deltaMode;R(d,9,f,b)&&c.preventDefault()}M||(M=Q(96));O({target:a,Ub:!0,Nb:f,Pb:d,Rb:"wheel"==f?l:h,Ob:c})}
function jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,f,h){b.drawArraysInstancedANGLE(a,d,f,h)},a.drawElementsInstanced=function(a,d,f,h,l){b.drawElementsInstancedANGLE(a,d,f,h,l)})}
function kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
var ob=1,pb=0,qb=[],S=[],rb=[],sb=[],tb=[],T=[],U=[],ub=[],vb={},V=null,wb={},xb={},yb={};function W(a){pb||(pb=a)}function zb(a){for(var b=ob++,c=a.length;c<b;c++)a[c]=null;return b}var X=[0];
function Ab(a){a||(a=V);if(!a.fc){a.fc=!0;var b=a.Vb;2>a.version&&(jb(b),kb(b),nb(b));b.lc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var Bb,Cb,Db=["default","low-power","high-performance"],Eb=[];function Fb(a,b,c,d){for(var f=0;f<a;f++){var h=Y[c](),l=h&&zb(d);h?(h.name=l,d[l]=h):W(1282);H[b+4*f>>2]=l}}
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){W(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>V.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else W(1281)}
function Hb(a){var b=ta(a)+1,c=Q(b);E(a,F,c,b);return c}function Ib(a){a-=5120;return 0==a?pa:1==a?F:2==a?va:4==a?H:6==a?I:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function Jb(a,b,c,d,f){a=Ib(a);var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Y,Kb=new Float32Array(256),Z=0;256>Z;Z++)X[Z]=Kb.subarray(0,Z+1);for(Z=0;256>Z;Z++);for(var Lb=0;32>Lb;Lb++)Eb.push(Array(Lb));
var Tb={Y:function(){return devicePixelRatio||1},aa:function(a,b,c){a=P(a);if(!a)return-4;a=a.getBoundingClientRect();J[b>>3]=a.width;J[c>>3]=a.height;return 0},Xa:function(a,b,c){F.set(F.subarray(b,b+c),a)},Ja:function(a,b){function c(d){Mb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ya:function(a){var b=pa.length;if(2147418112<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{C.grow(Math.min(2147418112,
d)-buffer.byteLength+65535>>16);ya(C.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},S:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=c;return 0},Ta:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},Ra:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},Sa:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},ia:function(a,b,c,d){eb(a,b,c,d,5,"mousedown");return 0},Wa:function(a,b,c,d){eb(a,b,c,d,33,"mouseenter");return 0},Va:function(a,b,c,d){eb(a,b,c,d,34,"mouseleave");
return 0},_a:function(a,b,c,d){eb(a,b,c,d,8,"mousemove");return 0},fb:function(a,b,c,d){eb(a,b,c,d,6,"mouseup");return 0},Oa:function(a,b,c,d){fb(a,b,c,d);return 0},Ma:function(a,b,c,d){gb(a,b,c,d,25,"touchcancel");return 0},Na:function(a,b,c,d){gb(a,b,c,d,23,"touchend");return 0},Pa:function(a,b,c,d){gb(a,b,c,d,24,"touchmove");return 0},Qa:function(a,b,c,d){gb(a,b,c,d,22,"touchstart");return 0},La:function(a,b,c,d){hb(a,b,c,d,31,"webglcontextlost");return 0},Ka:function(a,b,c,d){hb(a,b,c,d,32,"webglcontextrestored");
return 0},Ua:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(ib(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(ib(a,b,c,d,"mousewheel"),0):-1},L:function(a,b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=Db[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.ac=H[b+8];c.mc=H[b+9];c.$b=H[b+10];c.dc=H[b+11];c.nc=H[b+12];c.oc=H[b+13];a=P(a);if(!a||c.dc)c=0;
else if(a=1<c.ac?a.getContext("webgl2",c):a.getContext("webgl",c)){b=Q(8);var d={handle:b,attributes:c,version:c.ac,Vb:a};a.canvas&&(a.canvas.ic=d);vb[b]=d;("undefined"===typeof c.$b||c.$b)&&Ab(d);c=b}else c=0;return c},na:function(a,b){a=vb[a];b=G(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?jb(Y):"OES_vertex_array_object"==b?kb(Y):"WEBGL_draw_buffers"==b&&nb(Y);return!!a.Vb.getExtension(b)},Aa:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=
H[a+10]=1},ra:function(a){V=vb[a];e.kc=Y=V&&V.Vb;return!a||Y?0:-5},j:function(a){Y.activeTexture(a)},N:function(a,b){Y.attachShader(S[a],U[b])},b:function(a,b){35051==a?Y.Zb=b:35052==a&&(Y.Qb=b);Y.bindBuffer(a,qb[b])},g:function(a,b){Y.bindFramebuffer(a,rb[b])},Q:function(a,b){Y.bindRenderbuffer(a,sb[b])},a:function(a,b){Y.bindTexture(a,tb[b])},X:function(a){Y.bindVertexArray(ub[a])},D:function(a,b,c,d){Y.blendColor(a,b,c,d)},E:function(a,b){Y.blendEquationSeparate(a,b)},F:function(a,b,c,d){Y.blendFuncSeparate(a,
b,c,d)},k:function(a,b,c,d,f,h,l,m,p,q){Y.blitFramebuffer(a,b,c,d,f,h,l,m,p,q)},T:function(a,b,c,d){2<=V.version?c?Y.bufferData(a,F,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?F.subarray(c,c+b):b,d)},n:function(a,b,c,d){2<=V.version?Y.bufferSubData(a,b,F,d,c):Y.bufferSubData(a,b,F.subarray(d,d+c))},I:function(a){Y.clear(a)},qa:function(a,b,c,d){Y.clearColor(a,b,c,d)},pa:function(a){Y.clearDepth(a)},oa:function(a){Y.clearStencil(a)},v:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},$a:function(a){Y.compileShader(U[a])},
za:function(a,b,c,d,f,h,l,m){2<=V.version?Y.Qb?Y.compressedTexImage2D(a,b,c,d,f,h,l,m):Y.compressedTexImage2D(a,b,c,d,f,h,F,m,l):Y.compressedTexImage2D(a,b,c,d,f,h,m?F.subarray(m,m+l):null)},xa:function(a,b,c,d,f,h,l,m,p){Y.Qb?Y.compressedTexImage3D(a,b,c,d,f,h,l,m,p):Y.compressedTexImage3D(a,b,c,d,f,h,l,F,p,m)},va:function(){var a=zb(S),b=Y.createProgram();b.name=a;S[a]=b;return a},bb:function(a){var b=zb(U);U[b]=Y.createShader(a);return b},C:function(a){Y.cullFace(a)},W:function(a,b){for(var c=
0;c<a;c++){var d=H[b+4*c>>2],f=qb[d];f&&(Y.deleteBuffer(f),f.name=0,qb[d]=null,d==Bb&&(Bb=0),d==Cb&&(Cb=0),d==Y.Zb&&(Y.Zb=0),d==Y.Qb&&(Y.Qb=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],f=rb[d];f&&(Y.deleteFramebuffer(f),f.name=0,rb[d]=null)}},x:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),b.name=0,S[a]=null,wb[a]=null):W(1281)}},o:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=sb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,sb[d]=null)}},w:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),
U[a]=null):W(1281)}},V:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=tb[d];f&&(Y.deleteTexture(f),f.name=0,tb[d]=null)}},Da:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];Y.deleteVertexArray(ub[d]);ub[d]=null}},t:function(a){Y.depthFunc(a)},u:function(a){Y.depthMask(!!a)},c:function(a){Y.disable(a)},y:function(a){Y.disableVertexAttribArray(a)},ba:function(a,b,c){Y.drawArrays(a,b,c)},m:function(a,b){for(var c=Eb[a],d=0;d<a;d++)c[d]=H[b+4*d>>2];Y.drawBuffers(c)},ca:function(a,b,c,d){Y.drawElements(a,
b,c,d)},e:function(a){Y.enable(a)},ja:function(a){Y.enableVertexAttribArray(a)},B:function(a){Y.frontFace(a)},U:function(a,b){Fb(a,b,"createBuffer",qb)},R:function(a,b){Fb(a,b,"createRenderbuffer",sb)},Ba:function(a,b){Fb(a,b,"createTexture",tb)},Ea:function(a,b){Fb(a,b,"createVertexArray",ub)},sa:function(a,b){return Y.getAttribLocation(S[a],G(b))},d:function(a,b){Gb(a,b)},ta:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},M:function(a,
b,c){if(c)if(a>=ob)W(1281);else{var d=wb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.Xb;else if(35722==b){if(-1==d.Sb){a=S[a];var f=Y.getProgramParameter(a,35721);for(b=d.Sb=0;b<f;++b)d.Sb=Math.max(d.Sb,Y.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.Sb}else if(35381==b){if(-1==d.Tb)for(a=S[a],f=Y.getProgramParameter(a,35382),b=d.Tb=0;b<f;++b)d.Tb=Math.max(d.Tb,Y.getActiveUniformBlockName(a,b).length+1);H[c>>2]=d.Tb}else H[c>>
2]=Y.getProgramParameter(S[a],b);else W(1282)}else W(1281)},Za:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},_:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(U[a]),H[c>>2]=null===a||0==a.length?0:a.length+1):H[c>>2]=Y.getShaderParameter(U[a],b):W(1281)},Ga:function(a){if(xb[a])return xb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||
[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Hb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=Hb(b);break;case 7938:b=Y.getParameter(7938);b=2<=V.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Hb(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Hb(b);break;default:return W(1280),0}return xb[a]=b},
Fa:function(a,b){if(2>V.version)return W(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(a){return"GL_"+a})),c=c.map(function(a){return Hb(a)}),c=yb[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},i:function(a,b){b=G(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=wb[a]&&wb[a].bc[b])&&0<=c&&c<a[0]?a[1]+c:
-1},ua:function(a){Y.linkProgram(S[a]);var b=S[a];a=wb[a]={bc:{},Xb:0,Sb:-1,Tb:-1};for(var c=a.bc,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var h=Y.getActiveUniform(b,f),l=h.name;a.Xb=Math.max(a.Xb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var m=Y.getUniformLocation(b,l);if(m){var p=zb(T);c[l]=[h.size,p];T[p]=m;for(var q=1;q<h.size;++q)m=Y.getUniformLocation(b,l+"["+q+"]"),p=zb(T),T[p]=m}}},A:function(a,b){Y.polygonOffset(a,b)},l:function(a){Y.readBuffer(a)},Ca:function(a,
b,c,d){Y.renderbufferStorage(a,b,c,d)},P:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},J:function(a,b,c,d){Y.scissor(a,b,c,d)},ab:function(a,b,c,d){for(var f="",h=0;h<b;++h){var l=d?H[d+4*h>>2]:-1;f+=G(H[c+4*h>>2],0>l?void 0:l)}Y.shaderSource(U[a],f)},eb:function(a,b,c){Y.stencilFunc(a,b,c)},H:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},s:function(a){Y.stencilMask(a)},db:function(a,b,c){Y.stencilOp(a,b,c)},G:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},ya:function(a,b,
c,d,f,h,l,m,p){if(2<=V.version)if(Y.Qb)Y.texImage2D(a,b,c,d,f,h,l,m,p);else if(p){var q=Ib(m);Y.texImage2D(a,b,c,d,f,h,l,m,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,f,h,l,m,null);else Y.texImage2D(a,b,c,d,f,h,l,m,p?Jb(m,l,d,f,p):null)},wa:function(a,b,c,d,f,h,l,m,p,q){if(Y.Qb)Y.texImage3D(a,b,c,d,f,h,l,m,p,q);else if(q){var t=Ib(p);Y.texImage3D(a,b,c,d,f,h,l,m,p,t,q>>31-Math.clz32(t.BYTES_PER_ELEMENT))}else Y.texImage3D(a,b,c,d,f,h,l,m,p,null)},O:function(a,b,c){Y.texParameterf(a,
b,c)},f:function(a,b,c){Y.texParameteri(a,b,c)},ha:function(a,b,c){if(2<=V.version)Y.uniform1fv(T[a],I,c>>2,b);else{if(256>=b)for(var d=X[b-1],f=0;f<b;++f)d[f]=I[c+4*f>>2];else d=I.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)}},z:function(a,b){Y.uniform1i(T[a],b)},ga:function(a,b,c){if(2<=V.version)Y.uniform2fv(T[a],I,c>>2,2*b);else{if(256>=2*b)for(var d=X[2*b-1],f=0;f<2*b;f+=2)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);Y.uniform2fv(T[a],d)}},fa:function(a,b,c){if(2<=
V.version)Y.uniform3fv(T[a],I,c>>2,3*b);else{if(256>=3*b)for(var d=X[3*b-1],f=0;f<3*b;f+=3)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2],d[f+2]=I[c+(4*f+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);Y.uniform3fv(T[a],d)}},ea:function(a,b,c){if(2<=V.version)Y.uniform4fv(T[a],I,c>>2,4*b);else{if(256>=4*b)for(var d=X[4*b-1],f=0;f<4*b;f+=4)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2],d[f+2]=I[c+(4*f+8)>>2],d[f+3]=I[c+(4*f+12)>>2];else d=I.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],d)}},da:function(a,b,c,d){if(2<=V.version)Y.uniformMatrix4fv(T[a],
!!c,I,d>>2,16*b);else{if(256>=16*b)for(var f=X[16*b-1],h=0;h<16*b;h+=16)f[h]=I[d+4*h>>2],f[h+1]=I[d+(4*h+4)>>2],f[h+2]=I[d+(4*h+8)>>2],f[h+3]=I[d+(4*h+12)>>2],f[h+4]=I[d+(4*h+16)>>2],f[h+5]=I[d+(4*h+20)>>2],f[h+6]=I[d+(4*h+24)>>2],f[h+7]=I[d+(4*h+28)>>2],f[h+8]=I[d+(4*h+32)>>2],f[h+9]=I[d+(4*h+36)>>2],f[h+10]=I[d+(4*h+40)>>2],f[h+11]=I[d+(4*h+44)>>2],f[h+12]=I[d+(4*h+48)>>2],f[h+13]=I[d+(4*h+52)>>2],f[h+14]=I[d+(4*h+56)>>2],f[h+15]=I[d+(4*h+60)>>2];else f=I.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],
!!c,f)}},ma:function(a){Y.useProgram(S[a])},ka:function(a,b){Y.vertexAttribDivisor(a,b)},la:function(a,b,c,d,f,h){Y.vertexAttribPointer(a,b,c,!!d,f,h)},K:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:C,r:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Nb()});document.body.append(a)},q:function(){document.getElementById("_sokol_app_input_element").focus()},Ia:function(){window.addEventListener("beforeunload",
function(a){0!=Ob()&&(a.preventDefault(),a.returnValue=" ")})},gb:function(){window.addEventListener("paste",function(a){a=a.clipboardData.getData("text");oa([a])})},p:function(){document.getElementById("_sokol_app_input_element").blur()},Ha:function(a){a=G(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=
1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},$:function(a,b,c,d,f,h){b=G(b);var l=new XMLHttpRequest;l.open("GET",b);l.responseType="arraybuffer";var m=0<d;m&&l.setRequestHeader("Range","bytes="+c+"-"+(c+d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var b=new Uint8Array(l.response),c=b.length;c<=h?(F.set(b,f),Pb(a,d,c)):Qb(a)}else Rb(a,this.status)};l.send()},
cb:function(a,b){b=G(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var b=this.getResponseHeader("Content-Length");Sb(a,b)}else Rb(a,this.status)};c.send()},Z:function(){return navigator.userAgent.includes("Macintosh")?1:0},table:la},Ub=function(){function a(a){e.asm=a.exports;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Ha&&(clearInterval(Ha),Ha=null),Ia&&(a=Ia,Ia=null,a()))}function b(b){a(b.instance)}
function c(a){return Ma().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+a);ja(a)})}var d={env:Tb,wasi_snapshot_preview1:Tb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return z("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||"function"!==typeof fetch)return c(b);
fetch(L,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){z("wasm streaming compile failed: "+a);z("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();e.asm=Ub;var Na=e.___wasm_call_ctors=function(){return(Na=e.___wasm_call_ctors=e.asm.hb).apply(null,arguments)},Nb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Nb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.ib).apply(null,arguments)};
e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.jb).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.kb).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.lb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.mb).apply(null,arguments)};
var Ob=e.__sapp_html5_get_ask_leave_site=function(){return(Ob=e.__sapp_html5_get_ask_leave_site=e.asm.nb).apply(null,arguments)};e.___em_js__sapp_js_hook_beforeunload=function(){return(e.___em_js__sapp_js_hook_beforeunload=e.asm.ob).apply(null,arguments)};e.___em_js__sapp_js_init_clipboard=function(){return(e.___em_js__sapp_js_init_clipboard=e.asm.pb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.qb).apply(null,arguments)};
e._main=function(){return(e._main=e.asm.rb).apply(null,arguments)};var Q=e._malloc=function(){return(Q=e._malloc=e.asm.sb).apply(null,arguments)};e._free=function(){return(e._free=e.asm.tb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.ub).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.vb).apply(null,arguments)};
e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.wb).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.xb).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.yb).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.zb).apply(null,arguments)};
e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.Ab).apply(null,arguments)};
var Sb=e.__sfetch_emsc_head_response=function(){return(Sb=e.__sfetch_emsc_head_response=e.asm.Bb).apply(null,arguments)},Pb=e.__sfetch_emsc_get_response=function(){return(Pb=e.__sfetch_emsc_get_response=e.asm.Cb).apply(null,arguments)},Rb=e.__sfetch_emsc_failed_http_status=function(){return(Rb=e.__sfetch_emsc_failed_http_status=e.asm.Db).apply(null,arguments)},Qb=e.__sfetch_emsc_failed_buffer_too_small=function(){return(Qb=e.__sfetch_emsc_failed_buffer_too_small=e.asm.Eb).apply(null,arguments)};
e.___em_js__simgui_js_is_osx=function(){return(e.___em_js__simgui_js_is_osx=e.asm.Fb).apply(null,arguments)};var qa=e.stackSave=function(){return(qa=e.stackSave=e.asm.Gb).apply(null,arguments)},D=e.stackAlloc=function(){return(D=e.stackAlloc=e.asm.Hb).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.Ib).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.Jb).apply(null,arguments)};
e.dynCall_v=function(){return(e.dynCall_v=e.asm.Kb).apply(null,arguments)};var R=e.dynCall_iiii=function(){return(R=e.dynCall_iiii=e.asm.Lb).apply(null,arguments)},Mb=e.dynCall_idi=function(){return(Mb=e.dynCall_idi=e.asm.Mb).apply(null,arguments)};e.asm=Ub;var Vb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ia=function Wb(){Vb||Xb();Vb||(Ia=Wb)};
function Xb(a){function b(){if(!Vb&&(Vb=!0,!ma)){Aa(Ca);Aa(Da);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Yb){var b=a,d=e._main;b=b||[];var f=b.length+1,h=D(4*(f+1));H[h>>2]=ua(aa);for(var l=1;l<f;l++)H[(h>>2)+l]=ua(b[l-1]);H[(h>>2)+f]=0;try{var m=d(f,h);if(!B||0!==m){if(!B&&(ma=!0,e.onExit))e.onExit(m);r(m,new ia(m))}}catch(p){p instanceof ia||("unwind"==p?B=!0:((b=p)&&"object"===typeof p&&p.stack&&(b=[p,p.stack]),z("exception thrown: "+b),r(1,p)))}finally{}}if(e.postRun)for("function"==
typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)b=e.postRun.shift(),Fa.unshift(b);Aa(Fa)}}a=a||n;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ga();Aa(Ba);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Xb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Yb=!0;e.noInitialRun&&(Yb=!1);B=!0;Xb();
