
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in e)e.hasOwnProperty(l)&&(h[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
e.print||console.log.bind(console);var y=e.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(e[l]=h[l]);h=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var A,ja=!1;function assert(a,b){a||x("Assertion failed: "+b)}
function ka(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}function la(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=C(q);D(n,E,p,q)}return p},array:function(n){var p=C(n.length);ma.set(n,p);return p}};a=ka(a);var f=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=na()),f[g]=m(c[g])):f[g]=c[g]}a.apply(null,f);0!==k&&oa(k)}
var pa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&pa)a=pa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|g:(f&7)<<18|k<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ra(a){var b=qa(a)+1,c=C(b);D(a,ma,c,b);return c}var sa,ma,E,ta,ua,G,va,H,I;
function wa(a){sa=a;e.HEAP8=ma=new Int8Array(a);e.HEAP16=ta=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=ua=new Uint16Array(a);e.HEAPU32=va=new Uint32Array(a);e.HEAPF32=H=new Float32Array(a);e.HEAPF64=I=new Float64Array(a)}var xa=e.INITIAL_MEMORY||33554432;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:xa/65536,maximum:32768});A&&(sa=A.buffer);xa=sa.byteLength;wa(sa);var J,ya=[],za=[],Aa=[],Ba=[],Ca=[];
function Da(){var a=e.preRun.shift();ya.unshift(a)}var K=0,Ea=null,Fa=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);y(a);ja=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ga(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ha(){return Ga("data:application/octet-stream;base64,")}var L="offscreen-sapp.wasm";
if(!Ha()){var Ia=L;L=e.locateFile?e.locateFile(Ia,v):v+Ia}function Ja(){try{if(z)return new Uint8Array(z);if(w)return w(L);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}function Ka(){return z||!ba&&!u||"function"!==typeof fetch||Ga("file://")?Promise.resolve().then(Ja):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ja()})}
function La(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Ic;"number"===typeof c?void 0===b.rc?J.get(c)():J.get(c)(b.rc):c(void 0===b.rc?null:b.rc)}}}var Ma=0;function Na(){for(var a=M.length-1;0<=a;--a)Oa(a);M=[];Pa=[]}var Pa=[];function Qa(){if(Ma&&Ra.pc)for(var a=0;a<Pa.length;++a){var b=Pa[a];Pa.splice(a,1);--a;b.Zc.apply(null,b.Nc)}}var M=[];function Oa(a){var b=M[a];b.target.removeEventListener(b.hc,b.Gc,b.ic);M.splice(a,1)}
function N(a){function b(d){++Ma;Ra=a;Qa();a.kc(d);Qa();--Ma}if(a.jc)a.Gc=b,a.target.addEventListener(a.hc,b,a.ic),M.push(a),Sa||(Ba.push(Na),Sa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].hc==a.hc&&Oa(c--)}var Sa,Ra,Ta,Ua,Va,Wa,Xa,Ya,Za=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){a=2<a?F(a):a;return Za[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function $a(a){return 0>Za.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function ab(a,b,c,d,f,k){Ta||(Ta=P(164));a={target:O(a),pc:!0,hc:k,jc:d,kc:function(g){var m=Ta,n=m>>2;G[n]=g.location;G[n+1]=g.ctrlKey;G[n+2]=g.shiftKey;G[n+3]=g.altKey;G[n+4]=g.metaKey;G[n+5]=g.repeat;G[n+6]=g.charCode;G[n+7]=g.keyCode;G[n+8]=g.which;D(g.key||"",E,m+36,32);D(g.code||"",E,m+68,32);D(g.char||"",E,m+100,32);D(g.locale||"",E,m+132,32);J.get(d)(f,m,b)&&g.preventDefault()},ic:c};N(a)}
function bb(a,b,c){a>>=2;G[a]=b.screenX;G[a+1]=b.screenY;G[a+2]=b.clientX;G[a+3]=b.clientY;G[a+4]=b.ctrlKey;G[a+5]=b.shiftKey;G[a+6]=b.altKey;G[a+7]=b.metaKey;ta[2*a+16]=b.button;ta[2*a+17]=b.buttons;G[a+9]=b.movementX;G[a+10]=b.movementY;c=$a(c);G[a+11]=b.clientX-c.left;G[a+12]=b.clientY-c.top}function cb(a,b,c,d,f,k){Ua||(Ua=P(64));a=O(a);N({target:a,pc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,hc:k,jc:d,kc:function(g){g=g||event;bb(Ua,g,a);J.get(d)(f,Ua,b)&&g.preventDefault()},ic:c})}
function db(a,b,c,d,f){Va||(Va=P(260));N({target:a,hc:f,jc:d,kc:function(k){k=k||event;var g=Va,m=document.pointerLockElement||document.vc||document.xc||document.wc;G[g>>2]=!!m;var n=m&&m.id?m.id:"";D(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",E,g+4,128);D(n,E,g+132,128);J.get(d)(20,g,b)&&k.preventDefault()},ic:c})}function eb(a,b,c,d,f){N({target:a,hc:f,jc:d,kc:function(k){k=k||event;J.get(d)(38,0,b)&&k.preventDefault()},ic:c})}
function fb(a,b,c,d){Wa||(Wa=P(36));a=O(a);N({target:a,hc:"resize",jc:d,kc:function(f){f=f||event;if(f.target==a){var k=document.body;if(k){var g=Wa;G[g>>2]=f.detail;G[g+4>>2]=k.clientWidth;G[g+8>>2]=k.clientHeight;G[g+12>>2]=innerWidth;G[g+16>>2]=innerHeight;G[g+20>>2]=outerWidth;G[g+24>>2]=outerHeight;G[g+28>>2]=pageXOffset;G[g+32>>2]=pageYOffset;J.get(d)(10,g,b)&&f.preventDefault()}}},ic:c})}
function gb(a,b,c,d,f,k){Xa||(Xa=P(1684));a=O(a);N({target:a,pc:"touchstart"==k||"touchend"==k,hc:k,jc:d,kc:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.Kc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].Lc=1;n=Xa;q=n>>2;G[q+1]=g.ctrlKey;G[q+2]=g.shiftKey;G[q+3]=g.altKey;G[q+4]=g.metaKey;q+=5;var mb=$a(a),nb=0;for(p in m){var B=m[p];G[q]=B.identifier;G[q+1]=B.screenX;G[q+2]=
B.screenY;G[q+3]=B.clientX;G[q+4]=B.clientY;G[q+5]=B.pageX;G[q+6]=B.pageY;G[q+7]=B.Kc;G[q+8]=B.Lc;G[q+9]=B.clientX-mb.left;G[q+10]=B.clientY-mb.top;q+=13;if(31<++nb)break}G[n>>2]=nb;J.get(d)(f,n,b)&&g.preventDefault()},ic:c})}function hb(a,b,c,d,f,k){a={target:O(a),hc:k,jc:d,kc:function(g){g=g||event;J.get(d)(f,0,b)&&g.preventDefault()},ic:c};N(a)}
function ib(a,b,c,d){Ya||(Ya=P(96));N({target:a,pc:!0,hc:"wheel",jc:d,kc:function(f){f=f||event;var k=Ya;bb(k,f,a);I[k+64>>3]=f.deltaX;I[k+72>>3]=f.deltaY;I[k+80>>3]=f.deltaZ;G[k+88>>2]=f.deltaMode;J.get(d)(9,k,b)&&f.preventDefault()},ic:c})}
function jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,g){b.drawElementsInstancedANGLE(c,d,f,k,g)})}
function kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function lb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ob(a){a.Pc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function pb(a){a.Sc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function qb(a){a.Uc=a.getExtension("WEBGL_multi_draw")}var rb=1,sb=[],Q=[],tb=[],ub=[],R=[],S=[],T=[],vb=[],wb=[],xb={},yb={},zb={};function U(a){Ab||(Ab=a)}function V(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a){a||(a=W);if(!a.Jc){a.Jc=!0;var b=a.qc;jb(b);kb(b);lb(b);ob(b);pb(b);b.Qc=b.getExtension("EXT_disjoint_timer_query");qb(b);var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var Ab,W,Cb=["default","low-power","high-performance"],Db=[];function Eb(a,b,c,d){for(var f=0;f<a;f++){var k=X[c](),g=k&&V(d);k?(k.name=g,d[g]=k):U(1282);G[b+4*f>>2]=g}}
function Fb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){U(1282);return}c=2*(X.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){U(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:U(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else U(1281)}
function Gb(a){var b=qa(a)+1,c=P(b);D(a,E,c,b);return c}function Hb(a){a-=5120;return 0==a?ma:1==a?E:2==a?ta:4==a?G:6==a?H:5==a||28922==a||28520==a||30779==a||30782==a?va:ua}function Ib(a,b,c,d,f){a=Hb(a);var k=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>k,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<k)+4-1&-4)>>k)}for(var Y=[],X,Z=0;32>Z;++Z)Db.push(Array(Z));var Jb=new Float32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Jb.subarray(0,Z+1);za.push({Ic:function(){Kb()}});
var Pb={Z:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ua:function(a,b,c){a=O(a);if(!a)return-4;a=$a(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},ab:function(a,b,c){E.copyWithin(a,b,b+c)},Oa:function(a,b){function c(d){J.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},bb:function(a){a>>>=0;var b=E.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);
a:{try{A.grow(Math.min(2147483648,d)-sa.byteLength+65535>>>16);wa(A.buffer);var f=1;break a}catch(k){}f=void 0}if(f)return!0}return!1},Y:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},ia:function(a,b,c,d){ab(a,b,c,d,2,"keydown");return 0},ga:function(a,b,c,d){ab(a,b,c,d,1,"keypress");return 0},ha:function(a,b,c,d){ab(a,b,c,d,3,"keyup");return 0},ta:function(a,b,c,d){cb(a,b,c,d,5,"mousedown");return 0},la:function(a,b,c,d){cb(a,b,c,d,33,"mouseenter");return 0},ka:function(a,b,
c,d){cb(a,b,c,d,34,"mouseleave");return 0},ma:function(a,b,c,d){cb(a,b,c,d,8,"mousemove");return 0},pa:function(a,b,c,d){cb(a,b,c,d,6,"mouseup");return 0},ba:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.vc||document.body.xc||document.body.wc))return-1;a=O(a);if(!a)return-4;db(a,b,c,d,"pointerlockchange");db(a,b,c,d,"mozpointerlockchange");db(a,b,c,d,"webkitpointerlockchange");db(a,b,c,d,"mspointerlockchange");return 0},aa:function(a,b,c,d){if(!document||
!(document.body.requestPointerLock||document.body.vc||document.body.xc||document.body.wc))return-1;a=O(a);if(!a)return-4;eb(a,b,c,d,"pointerlockerror");eb(a,b,c,d,"mozpointerlockerror");eb(a,b,c,d,"webkitpointerlockerror");eb(a,b,c,d,"mspointerlockerror");return 0},$a:function(a,b,c,d){fb(a,b,c,d);return 0},ca:function(a,b,c,d){gb(a,b,c,d,25,"touchcancel");return 0},da:function(a,b,c,d){gb(a,b,c,d,23,"touchend");return 0},ea:function(a,b,c,d){gb(a,b,c,d,24,"touchmove");return 0},fa:function(a,b,c,
d){gb(a,b,c,d,22,"touchstart");return 0},$:function(a,b,c,d){hb(a,b,c,d,31,"webglcontextlost");return 0},_:function(a,b,c,d){hb(a,b,c,d,32,"webglcontextrestored");return 0},ja:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(ib(a,b,c,d),0):-1},J:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=Cb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.yc=G[b+
8];c.Tc=G[b+9];c.uc=G[b+10];c.Hc=G[b+11];c.Vc=G[b+12];c.Wc=G[b+13];a=O(a);if(!a||c.Hc)c=0;else if(a=1<c.yc?a.getContext("webgl2",c):a.getContext("webgl",c)){b=V(wb);var d={Rc:b,attributes:c,version:c.yc,qc:a};a.canvas&&(a.canvas.Mc=d);wb[b]=d;("undefined"===typeof c.uc||c.uc)&&Bb(d);c=b}else c=0;return c},ya:function(a,b){a=wb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&jb(X);"OES_vertex_array_object"==b&&kb(X);"WEBGL_draw_buffers"==b&&lb(X);"WEBGL_draw_instanced_base_vertex_base_instance"==
b&&ob(X);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&pb(X);"WEBGL_multi_draw"==b&&qb(X);return!!a.qc.getExtension(b)},Na:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},Ea:function(a){W=wb[a];e.Oc=X=W&&W.qc;return!a||X?0:-5},c:function(a){X.activeTexture(a)},H:function(a,b){X.attachShader(Q[a],T[b])},f:function(a,b){35051==a?X.tc=b:35052==a&&(X.lc=b);X.bindBuffer(a,sb[b])},e:function(a,b){X.bindFramebuffer(a,tb[b])},L:function(a,b){X.bindRenderbuffer(a,
ub[b])},b:function(a,b){X.bindTexture(a,R[b])},X:function(a){X.bindVertexArray(vb[a])},T:function(a,b,c,d){X.blendColor(a,b,c,d)},U:function(a,b){X.blendEquationSeparate(a,b)},V:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},v:function(a,b,c,d,f,k,g,m,n,p){X.blitFramebuffer(a,b,c,d,f,k,g,m,n,p)},O:function(a,b,c,d){2<=W.version?c?X.bufferData(a,E,d,c,b):X.bufferData(a,b,d):X.bufferData(a,c?E.subarray(c,c+b):b,d)},N:function(a,b,c,d){2<=W.version?X.bufferSubData(a,b,E,d,c):X.bufferSubData(a,b,E.subarray(d,
d+c))},o:function(a){return X.checkFramebufferStatus(a)},ra:function(a){X.clear(a)},nb:function(a,b,c,d){X.clearBufferfi(a,b,c,d)},qa:function(a,b,c){X.clearBufferfv(a,b,H,c>>2)},mb:function(a,b,c){X.clearBufferiv(a,b,G,c>>2)},qb:function(a,b,c,d){X.clearColor(a,b,c,d)},pb:function(a){X.clearDepth(a)},ob:function(a){X.clearStencil(a)},y:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},Aa:function(a){X.compileShader(T[a])},Ka:function(a,b,c,d,f,k,g,m){2<=W.version?X.lc?X.compressedTexImage2D(a,b,c,
d,f,k,g,m):X.compressedTexImage2D(a,b,c,d,f,k,E,m,g):X.compressedTexImage2D(a,b,c,d,f,k,m?E.subarray(m,m+g):null)},Ia:function(a,b,c,d,f,k,g,m,n){X.lc?X.compressedTexImage3D(a,b,c,d,f,k,g,m,n):X.compressedTexImage3D(a,b,c,d,f,k,g,E,n,m)},Ga:function(){var a=V(Q),b=X.createProgram();b.name=a;Q[a]=b;return a},Ca:function(a){var b=V(T);T[b]=X.createShader(a);return b},Q:function(a){X.cullFace(a)},wa:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=sb[d];f&&(X.deleteBuffer(f),f.name=0,sb[d]=null,
d==X.tc&&(X.tc=0),d==X.lc&&(X.lc=0))}},m:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],f=tb[d];f&&(X.deleteFramebuffer(f),f.name=0,tb[d]=null)}},F:function(a){if(a){var b=Q[a];b?(X.deleteProgram(b),b.name=0,Q[a]=null,xb[a]=null):U(1281)}},sa:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=ub[d];f&&(X.deleteRenderbuffer(f),f.name=0,ub[d]=null)}},x:function(a){if(a){var b=T[a];b?(X.deleteShader(b),T[a]=null):U(1281)}},va:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=R[d];f&&(X.deleteTexture(f),
f.name=0,R[d]=null)}},Sa:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2];X.deleteVertexArray(vb[d]);vb[d]=null}},B:function(a){X.depthFunc(a)},A:function(a){X.depthMask(!!a)},h:function(a){X.disable(a)},W:function(a){X.disableVertexAttribArray(a)},cb:function(a,b,c){X.drawArrays(a,b,c)},n:function(a,b){for(var c=Db[a],d=0;d<a;d++)c[d]=G[b+4*d>>2];X.drawBuffers(c)},db:function(a,b,c,d){X.drawElements(a,b,c,d)},k:function(a){X.enable(a)},jb:function(a){X.enableVertexAttribArray(a)},l:function(a,
b,c,d){X.framebufferRenderbuffer(a,b,c,ub[d])},d:function(a,b,c,d,f){X.framebufferTexture2D(a,b,c,R[d],f)},i:function(a,b,c,d,f){X.framebufferTextureLayer(a,b,R[c],d,f)},R:function(a){X.frontFace(a)},P:function(a,b){Eb(a,b,"createBuffer",sb)},p:function(a,b){Eb(a,b,"createFramebuffer",tb)},M:function(a,b){Eb(a,b,"createRenderbuffer",ub)},La:function(a,b){Eb(a,b,"createTexture",R)},Ra:function(a,b){Eb(a,b,"createVertexArray",vb)},xa:function(a,b){return X.getAttribLocation(Q[a],F(b))},g:function(a,
b){Fb(a,b)},Da:function(a,b,c,d){a=X.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},G:function(a,b,c){if(c)if(a>=rb)U(1281);else{var d=xb[a];if(d)if(35716==b)a=X.getProgramInfoLog(Q[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.sc;else if(35722==b){if(-1==d.mc){a=Q[a];var f=X.getProgramParameter(a,35721);for(b=d.mc=0;b<f;++b)d.mc=Math.max(d.mc,X.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.mc}else if(35381==b){if(-1==
d.nc)for(a=Q[a],f=X.getProgramParameter(a,35382),b=d.nc=0;b<f;++b)d.nc=Math.max(d.nc,X.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.nc}else G[c>>2]=X.getProgramParameter(Q[a],b);else U(1282)}else U(1281)},za:function(a,b,c,d){a=X.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},D:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),G[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(T[a]),G[c>>2]=a?a.length+1:0):
G[c>>2]=X.getShaderParameter(T[a],b):U(1281)},Ua:function(a){if(yb[a])return yb[a];switch(a){case 7939:var b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Gb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||U(1280);b=Gb(b);break;case 7938:b=X.getParameter(7938);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Gb(b);break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Gb(b);break;default:return U(1280),0}return yb[a]=b},Ta:function(a,b){if(2>W.version)return U(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=X.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Gb(d)}),c=zb[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},r:function(a,b){b=F(b);var c=0;if("]"==b[b.length-
1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=xb[a]&&xb[a].Fc[b])&&0<=c&&c<a[0]?a[1]+c:-1},Fa:function(a){X.linkProgram(Q[a]);var b=Q[a];a=xb[a]={Fc:{},sc:0,mc:-1,nc:-1};for(var c=a.Fc,d=X.getProgramParameter(b,35718),f=0;f<d;++f){var k=X.getActiveUniform(b,f),g=k.name;a.sc=Math.max(a.sc,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=X.getUniformLocation(b,g);if(m){var n=V(S);c[g]=[k.size,n];S[n]=m;for(var p=1;p<k.size;++p)m=X.getUniformLocation(b,
g+"["+p+"]"),n=V(S),S[n]=m}}},S:function(a,b){X.polygonOffset(a,b)},w:function(a){X.readBuffer(a)},Ma:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},K:function(a,b,c,d,f){X.renderbufferStorageMultisample(a,b,c,d,f)},rb:function(a,b,c,d){X.scissor(a,b,c,d)},Ba:function(a,b,c,d){for(var f="",k=0;k<b;++k){var g=d?G[d+4*k>>2]:-1;f+=F(G[c+4*k>>2],0>g?void 0:g)}X.shaderSource(T[a],f)},Qa:function(a,b,c){X.stencilFunc(a,b,c)},oa:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},z:function(a){X.stencilMask(a)},
Pa:function(a,b,c){X.stencilOp(a,b,c)},na:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},Ja:function(a,b,c,d,f,k,g,m,n){if(2<=W.version)if(X.lc)X.texImage2D(a,b,c,d,f,k,g,m,n);else if(n){var p=Hb(m);X.texImage2D(a,b,c,d,f,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else X.texImage2D(a,b,c,d,f,k,g,m,null);else X.texImage2D(a,b,c,d,f,k,g,m,n?Ib(m,g,d,f,n):null)},Ha:function(a,b,c,d,f,k,g,m,n,p){if(X.lc)X.texImage3D(a,b,c,d,f,k,g,m,n,p);else if(p){var q=Hb(n);X.texImage3D(a,b,c,d,f,k,g,m,n,q,p>>
31-Math.clz32(q.BYTES_PER_ELEMENT))}else X.texImage3D(a,b,c,d,f,k,g,m,n,null)},I:function(a,b,c){X.texParameterf(a,b,c)},j:function(a,b,c){X.texParameteri(a,b,c)},ib:function(a,b,c){if(2<=W.version)X.uniform1fv(S[a],H,c>>2,b);else{if(288>=b)for(var d=Y[b-1],f=0;f<b;++f)d[f]=H[c+4*f>>2];else d=H.subarray(c>>2,c+4*b>>2);X.uniform1fv(S[a],d)}},E:function(a,b){X.uniform1i(S[a],b)},hb:function(a,b,c){if(2<=W.version)X.uniform2fv(S[a],H,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],f=0;f<2*b;f+=2)d[f]=H[c+
4*f>>2],d[f+1]=H[c+(4*f+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);X.uniform2fv(S[a],d)}},gb:function(a,b,c){if(2<=W.version)X.uniform3fv(S[a],H,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],f=0;f<3*b;f+=3)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2],d[f+2]=H[c+(4*f+8)>>2];else d=H.subarray(c>>2,c+12*b>>2);X.uniform3fv(S[a],d)}},fb:function(a,b,c){if(2<=W.version)X.uniform4fv(S[a],H,c>>2,4*b);else{if(72>=b){var d=Y[4*b-1],f=H;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=f[g];d[k+1]=f[g+1];d[k+2]=f[g+2];d[k+
3]=f[g+3]}}else d=H.subarray(c>>2,c+16*b>>2);X.uniform4fv(S[a],d)}},eb:function(a,b,c,d){if(2<=W.version)X.uniformMatrix4fv(S[a],!!c,H,d>>2,16*b);else{if(18>=b){var f=Y[16*b-1],k=H;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=k[m];f[g+1]=k[m+1];f[g+2]=k[m+2];f[g+3]=k[m+3];f[g+4]=k[m+4];f[g+5]=k[m+5];f[g+6]=k[m+6];f[g+7]=k[m+7];f[g+8]=k[m+8];f[g+9]=k[m+9];f[g+10]=k[m+10];f[g+11]=k[m+11];f[g+12]=k[m+12];f[g+13]=k[m+13];f[g+14]=k[m+14];f[g+15]=k[m+15]}}else f=H.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(S[a],
!!c,f)}},q:function(a){X.useProgram(Q[a])},kb:function(a,b){X.vertexAttribDivisor(a,b)},lb:function(a,b,c,d,f,k){X.vertexAttribPointer(a,b,c,!!d,f,k)},sb:function(a,b,c,d){X.viewport(a,b,c,d)},a:A,_a:function(){e.zc=function(a){0!=Lb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.zc)},Za:function(){e.Ec=function(a){a=a.clipboardData.getData("text");la("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.Ec)},Ya:function(a){e.Xc=[];a=F(a);a=document.getElementById(a);
e.Ac=function(b){b.stopPropagation();b.preventDefault()};e.Bc=function(b){b.stopPropagation();b.preventDefault()};e.Cc=function(b){b.stopPropagation();b.preventDefault()};e.Dc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;e.Yc=c;Mb(c.length);var d;for(d=0;d<c.length;d++)la("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Nb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.Ac,!1);a.addEventListener("dragleave",e.Bc,!1);a.addEventListener("dragover",e.Cc,!1);
a.addEventListener("drop",e.Dc,!1)},u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},t:function(){document.getElementById("_sokol_app_input_element").focus()},tb:function(a){a=F(a);e.oc=document.getElementById(a);e.oc||console.log("sokol_app.h: invalid target:"+a);e.oc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Xa:function(){window.removeEventListener("beforeunload",e.zc)},Wa:function(){window.removeEventListener("paste",e.Ec)},Va:function(a){a=F(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.Ac);a.removeEventListener("dragleave",e.Bc);a.removeEventListener("dragover",e.Cc);a.removeEventListener("drop",e.Dc)},C:function(){e.oc&&e.oc.requestPointerLock&&e.oc.requestPointerLock()},s:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(f){e.asm=f.exports;J=e.asm.ub;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Ea&&(clearInterval(Ea),Ea=null),Fa&&(f=Fa,Fa=null,f()))}function b(f){a(f.instance)}function c(f){return Ka().then(function(k){return WebAssembly.instantiate(k,d)}).then(f,function(k){y("failed to asynchronously prepare wasm: "+k);x(k)})}var d={a:Pb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||Ga("file://")||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(k){y("wasm streaming compile failed: "+k);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Kb=e.___wasm_call_ctors=function(){return(Kb=e.___wasm_call_ctors=e.asm.vb).apply(null,arguments)},Ob=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=e.__sapp_emsc_notify_keyboard_hidden=e.asm.wb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.xb).apply(null,arguments)};
var Lb=e.__sapp_html5_get_ask_leave_site=function(){return(Lb=e.__sapp_html5_get_ask_leave_site=e.asm.yb).apply(null,arguments)},Mb=e.__sapp_emsc_begin_drop=function(){return(Mb=e.__sapp_emsc_begin_drop=e.asm.zb).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.Ab).apply(null,arguments)};var Nb=e.__sapp_emsc_end_drop=function(){return(Nb=e.__sapp_emsc_end_drop=e.asm.Bb).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.Cb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.Db).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.Eb).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.Fb).apply(null,arguments)};
e.___em_js__sapp_js_add_beforeunload_listener=function(){return(e.___em_js__sapp_js_add_beforeunload_listener=e.asm.Gb).apply(null,arguments)};e.___em_js__sapp_js_remove_beforeunload_listener=function(){return(e.___em_js__sapp_js_remove_beforeunload_listener=e.asm.Hb).apply(null,arguments)};e.___em_js__sapp_js_add_clipboard_listener=function(){return(e.___em_js__sapp_js_add_clipboard_listener=e.asm.Ib).apply(null,arguments)};
e.___em_js__sapp_js_remove_clipboard_listener=function(){return(e.___em_js__sapp_js_remove_clipboard_listener=e.asm.Jb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.Kb).apply(null,arguments)};e.___em_js__sapp_js_add_dragndrop_listeners=function(){return(e.___em_js__sapp_js_add_dragndrop_listeners=e.asm.Lb).apply(null,arguments)};
e.___em_js__sapp_js_dropped_file_size=function(){return(e.___em_js__sapp_js_dropped_file_size=e.asm.Mb).apply(null,arguments)};e.___em_js__sapp_js_fetch_dropped_file=function(){return(e.___em_js__sapp_js_fetch_dropped_file=e.asm.Nb).apply(null,arguments)};e.___em_js__sapp_js_remove_dragndrop_listeners=function(){return(e.___em_js__sapp_js_remove_dragndrop_listeners=e.asm.Ob).apply(null,arguments)};
e.___em_js__sapp_js_pointer_init=function(){return(e.___em_js__sapp_js_pointer_init=e.asm.Pb).apply(null,arguments)};e.___em_js__sapp_js_request_pointerlock=function(){return(e.___em_js__sapp_js_request_pointerlock=e.asm.Qb).apply(null,arguments)};e.___em_js__sapp_js_exit_pointerlock=function(){return(e.___em_js__sapp_js_exit_pointerlock=e.asm.Rb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Sb).apply(null,arguments)};
e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.Tb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.Ub).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.Vb).apply(null,arguments)};e.___em_js__saudio_js_shutdown=function(){return(e.___em_js__saudio_js_shutdown=e.asm.Wb).apply(null,arguments)};
e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.Xb).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.Yb).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.Zb).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm._b).apply(null,arguments)};
e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.$b).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.ac).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.bc).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.cc).apply(null,arguments)};
var P=e._malloc=function(){return(P=e._malloc=e.asm.dc).apply(null,arguments)},na=e.stackSave=function(){return(na=e.stackSave=e.asm.ec).apply(null,arguments)},oa=e.stackRestore=function(){return(oa=e.stackRestore=e.asm.fc).apply(null,arguments)},C=e.stackAlloc=function(){return(C=e.stackAlloc=e.asm.gc).apply(null,arguments)},Qb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Fa=function Rb(){Qb||Sb();Qb||(Fa=Rb)};
function Sb(a){function b(){if(!Qb&&(Qb=!0,e.calledRun=!0,!ja)){La(za);La(Aa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Tb){var c=a,d=e._main;c=c||[];var f=c.length+1,k=C(4*(f+1));G[k>>2]=ra(aa);for(var g=1;g<f;g++)G[(k>>2)+g]=ra(c[g-1]);G[(k>>2)+f]=0;try{var m=d(f,k);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(e.onExit)e.onExit(m);ja=!0}t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ca.unshift(c);La(Ca)}}a=a||r;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Da();La(ya);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Sb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Tb=!0;e.noInitialRun&&(Tb=!1);noExitRuntime=!0;Sb();
