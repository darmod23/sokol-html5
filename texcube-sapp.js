
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
e.print||console.log.bind(console);var y=e.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var A,ja=!1;function assert(a,b){a||x("Assertion failed: "+b)}
function ka(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}function la(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=C(q);D(n,E,p,q)}return p},array:function(n){var p=C(n.length);ma.set(n,p);return p}};a=ka(a);var f=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=na()),f[g]=m(c[g])):f[g]=c[g]}a.apply(null,f);0!==h&&oa(h)}
var pa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&pa)a=pa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ra(a){var b=qa(a)+1,c=C(b);D(a,ma,c,b);return c}var G,ma,E,sa,ta,H,ua,I,J;
function va(a){G=a;e.HEAP8=ma=new Int8Array(a);e.HEAP16=sa=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=ta=new Uint16Array(a);e.HEAPU32=ua=new Uint32Array(a);e.HEAPF32=I=new Float32Array(a);e.HEAPF64=J=new Float64Array(a)}var wa=e.INITIAL_MEMORY||33554432;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:wa/65536,maximum:32768});A&&(G=A.buffer);wa=G.byteLength;va(G);var K,xa=[],ya=[],za=[],Aa=[],Ba=[];
function Ca(){var a=e.preRun.shift();xa.unshift(a)}var L=0,Da=null,M=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);y(a);ja=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ea(a){var b=N;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Fa(){return Ea("data:application/octet-stream;base64,")}var N="texcube-sapp.wasm";if(!Fa()){var Ga=N;N=e.locateFile?e.locateFile(Ga,v):v+Ga}
function Ha(){try{if(z)return new Uint8Array(z);if(w)return w(N);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}function Ia(){return z||!ba&&!u||"function"!==typeof fetch||Ea("file://")?Promise.resolve().then(Ha):fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return Ha()})}
function Ja(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Bc;"number"===typeof c?void 0===b.kc?K.get(c)():K.get(c)(b.kc):c(void 0===b.kc?null:b.kc)}}}var Ka=0;function La(){for(var a=O.length-1;0<=a;--a)Ma(a);O=[];Na=[]}var Na=[];function Oa(){if(Ka&&Pa.ic)for(var a=0;a<Na.length;++a){var b=Na[a];Na.splice(a,1);--a;b.Sc.apply(null,b.Gc)}}var O=[];function Ma(a){var b=O[a];b.target.removeEventListener(b.$b,b.zc,b.ac);O.splice(a,1)}
function P(a){function b(d){++Ka;Pa=a;Oa();a.cc(d);Oa();--Ka}if(a.bc)a.zc=b,a.target.addEventListener(a.$b,b,a.ac),O.push(a),Qa||(Aa.push(La),Qa=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].$b==a.$b&&Ma(c--)}var Qa,Pa,Ra,Sa,Ta,Ua,Va,Wa,Xa=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Q(a){a=2<a?F(a):a;return Xa[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function Ya(a){return 0>Xa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function Za(a,b,c,d,f,h){Ra||(Ra=R(164));a={target:Q(a),ic:!0,$b:h,bc:d,cc:function(g){var m=Ra,n=m>>2;H[n]=g.location;H[n+1]=g.ctrlKey;H[n+2]=g.shiftKey;H[n+3]=g.altKey;H[n+4]=g.metaKey;H[n+5]=g.repeat;H[n+6]=g.charCode;H[n+7]=g.keyCode;H[n+8]=g.which;D(g.key||"",E,m+36,32);D(g.code||"",E,m+68,32);D(g.char||"",E,m+100,32);D(g.locale||"",E,m+132,32);K.get(d)(f,m,b)&&g.preventDefault()},ac:c};P(a)}
function $a(a,b,c){a>>=2;H[a]=b.screenX;H[a+1]=b.screenY;H[a+2]=b.clientX;H[a+3]=b.clientY;H[a+4]=b.ctrlKey;H[a+5]=b.shiftKey;H[a+6]=b.altKey;H[a+7]=b.metaKey;sa[2*a+16]=b.button;sa[2*a+17]=b.buttons;H[a+9]=b.movementX;H[a+10]=b.movementY;c=Ya(c);H[a+11]=b.clientX-c.left;H[a+12]=b.clientY-c.top}function ab(a,b,c,d,f,h){Sa||(Sa=R(64));a=Q(a);P({target:a,ic:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,$b:h,bc:d,cc:function(g){g=g||event;$a(Sa,g,a);K.get(d)(f,Sa,b)&&g.preventDefault()},ac:c})}
function bb(a,b,c,d,f){Ta||(Ta=R(260));P({target:a,$b:f,bc:d,cc:function(h){h=h||event;var g=Ta,m=document.pointerLockElement||document.mc||document.oc||document.nc;H[g>>2]=!!m;var n=m&&m.id?m.id:"";D(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",E,g+4,128);D(n,E,g+132,128);K.get(d)(20,g,b)&&h.preventDefault()},ac:c})}function cb(a,b,c,d,f){P({target:a,$b:f,bc:d,cc:function(h){h=h||event;K.get(d)(38,0,b)&&h.preventDefault()},ac:c})}
function db(a,b,c,d){Ua||(Ua=R(36));a=Q(a);P({target:a,$b:"resize",bc:d,cc:function(f){f=f||event;if(f.target==a){var h=document.body;if(h){var g=Ua;H[g>>2]=f.detail;H[g+4>>2]=h.clientWidth;H[g+8>>2]=h.clientHeight;H[g+12>>2]=innerWidth;H[g+16>>2]=innerHeight;H[g+20>>2]=outerWidth;H[g+24>>2]=outerHeight;H[g+28>>2]=pageXOffset;H[g+32>>2]=pageYOffset;K.get(d)(10,g,b)&&f.preventDefault()}}},ac:c})}
function eb(a,b,c,d,f,h){Va||(Va=R(1684));a=Q(a);P({target:a,ic:"touchstart"==h||"touchend"==h,$b:h,bc:d,cc:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.Dc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].Ec=1;n=Va;q=n>>2;H[q+1]=g.ctrlKey;H[q+2]=g.shiftKey;H[q+3]=g.altKey;H[q+4]=g.metaKey;q+=5;var mb=Ya(a),nb=0;for(p in m){var B=m[p];H[q]=B.identifier;H[q+1]=B.screenX;H[q+2]=
B.screenY;H[q+3]=B.clientX;H[q+4]=B.clientY;H[q+5]=B.pageX;H[q+6]=B.pageY;H[q+7]=B.Dc;H[q+8]=B.Ec;H[q+9]=B.clientX-mb.left;H[q+10]=B.clientY-mb.top;q+=13;if(31<++nb)break}H[n>>2]=nb;K.get(d)(f,n,b)&&g.preventDefault()},ac:c})}function fb(a,b,c,d,f,h){a={target:Q(a),$b:h,bc:d,cc:function(g){g=g||event;K.get(d)(f,0,b)&&g.preventDefault()},ac:c};P(a)}
function gb(a,b,c,d){Wa||(Wa=R(96));P({target:a,ic:!0,$b:"wheel",bc:d,cc:function(f){f=f||event;var h=Wa;$a(h,f,a);J[h+64>>3]=f.deltaX;J[h+72>>3]=f.deltaY;J[h+80>>3]=f.deltaZ;H[h+88>>2]=f.deltaMode;K.get(d)(9,h,b)&&f.preventDefault()},ac:c})}
function hb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function ib(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function jb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function kb(a){a.Ic=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function lb(a){a.Lc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function ob(a){a.Nc=a.getExtension("WEBGL_multi_draw")}var pb=1,qb=[],S=[],rb=[],sb=[],tb=[],T=[],U=[],ub=[],vb=[],wb={},xb={},yb={};function V(a){zb||(zb=a)}function W(a){for(var b=pb++,c=a.length;c<b;c++)a[c]=null;return b}
function Ab(a){a||(a=X);if(!a.Cc){a.Cc=!0;var b=a.jc;hb(b);ib(b);jb(b);kb(b);lb(b);b.Jc=b.getExtension("EXT_disjoint_timer_query");ob(b);var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var zb,X,Bb=["default","low-power","high-performance"];function Cb(a,b,c,d){for(var f=0;f<a;f++){var h=Y[c](),g=h&&W(d);h?(h.name=g,d[g]=h):V(1282);H[b+4*f>>2]=g}}
function Db(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else V(1281)}
function Eb(a){var b=qa(a)+1,c=R(b);D(a,E,c,b);return c}function Fb(a){a-=5120;return 0==a?ma:1==a?E:2==a?sa:4==a?H:6==a?I:5==a||28922==a||28520==a||30779==a||30782==a?ua:ta}function Gb(a,b,c,d,f){a=Fb(a);var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Z=[],Y,Hb=new Float32Array(288),Ib=0;288>Ib;++Ib)Z[Ib]=Hb.subarray(0,Ib+1);ya.push({Bc:function(){Jb()}});
var Ob={R:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ja:function(a,b,c){a=Q(a);if(!a)return-4;a=Ya(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},Ya:function(a,b,c){E.copyWithin(a,b,b+c)},Ka:function(a,b){function c(d){K.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){a>>>=0;var b=E.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);
a:{try{A.grow(Math.min(2147483648,d)-G.byteLength+65535>>>16);va(A.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},Q:function(a,b,c){a=Q(a);if(!a)return-4;a.width=b;a.height=c;return 0},aa:function(a,b,c,d){Za(a,b,c,d,2,"keydown");return 0},_:function(a,b,c,d){Za(a,b,c,d,1,"keypress");return 0},$:function(a,b,c,d){Za(a,b,c,d,3,"keyup");return 0},ia:function(a,b,c,d){ab(a,b,c,d,5,"mousedown");return 0},da:function(a,b,c,d){ab(a,b,c,d,33,"mouseenter");return 0},ca:function(a,b,c,
d){ab(a,b,c,d,34,"mouseleave");return 0},ea:function(a,b,c,d){ab(a,b,c,d,8,"mousemove");return 0},fa:function(a,b,c,d){ab(a,b,c,d,6,"mouseup");return 0},V:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.mc||document.body.oc||document.body.nc))return-1;a=Q(a);if(!a)return-4;bb(a,b,c,d,"pointerlockchange");bb(a,b,c,d,"mozpointerlockchange");bb(a,b,c,d,"webkitpointerlockchange");bb(a,b,c,d,"mspointerlockchange");return 0},U:function(a,b,c,d){if(!document||
!(document.body.requestPointerLock||document.body.mc||document.body.oc||document.body.nc))return-1;a=Q(a);if(!a)return-4;cb(a,b,c,d,"pointerlockerror");cb(a,b,c,d,"mozpointerlockerror");cb(a,b,c,d,"webkitpointerlockerror");cb(a,b,c,d,"mspointerlockerror");return 0},Xa:function(a,b,c,d){db(a,b,c,d);return 0},W:function(a,b,c,d){eb(a,b,c,d,25,"touchcancel");return 0},X:function(a,b,c,d){eb(a,b,c,d,23,"touchend");return 0},Y:function(a,b,c,d){eb(a,b,c,d,24,"touchmove");return 0},Z:function(a,b,c,d){eb(a,
b,c,d,22,"touchstart");return 0},T:function(a,b,c,d){fb(a,b,c,d,31,"webglcontextlost");return 0},S:function(a,b,c,d){fb(a,b,c,d,32,"webglcontextrestored");return 0},ba:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(gb(a,b,c,d),0):-1},E:function(a,b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=Bb[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.rc=H[b+8];c.Mc=
H[b+9];c.qc=H[b+10];c.Ac=H[b+11];c.Oc=H[b+12];c.Pc=H[b+13];a=Q(a);if(!a||c.Ac)c=0;else if(a=1<c.rc?a.getContext("webgl2",c):a.getContext("webgl",c)){b=W(vb);var d={Kc:b,attributes:c,version:c.rc,jc:a};a.canvas&&(a.canvas.Fc=d);vb[b]=d;("undefined"===typeof c.qc||c.qc)&&Ab(d);c=b}else c=0;return c},ra:function(a,b){a=vb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&hb(Y);"OES_vertex_array_object"==b&&ib(Y);"WEBGL_draw_buffers"==b&&jb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==
b&&kb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&lb(Y);"WEBGL_multi_draw"==b&&ob(Y);return!!a.jc.getExtension(b)},Ja:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},xa:function(a){X=vb[a];e.Hc=Y=X&&X.jc;return!a||Y?0:-5},c:function(a){Y.activeTexture(a)},C:function(a,b){Y.attachShader(S[a],U[b])},d:function(a,b){35051==a?Y.pc=b:35052==a&&(Y.dc=b);Y.bindBuffer(a,qb[b])},i:function(a,b){Y.bindFramebuffer(a,rb[b])},Ha:function(a,b){Y.bindRenderbuffer(a,
sb[b])},b:function(a,b){Y.bindTexture(a,tb[b])},P:function(a){Y.bindVertexArray(ub[a])},L:function(a,b,c,d){Y.blendColor(a,b,c,d)},M:function(a,b){Y.blendEquationSeparate(a,b)},N:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,f,h,g,m,n,p){Y.blitFramebuffer(a,b,c,d,f,h,g,m,n,p)},G:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,E,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?E.subarray(c,c+b):b,d)},F:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,E,d,c):Y.bufferSubData(a,b,E.subarray(d,
d+c))},ib:function(a){Y.clear(a)},la:function(a,b,c,d){Y.clearColor(a,b,c,d)},ka:function(a){Y.clearDepth(a)},jb:function(a){Y.clearStencil(a)},s:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},ta:function(a){Y.compileShader(U[a])},Da:function(a,b,c,d,f,h,g,m){2<=X.version?Y.dc?Y.compressedTexImage2D(a,b,c,d,f,h,g,m):Y.compressedTexImage2D(a,b,c,d,f,h,E,m,g):Y.compressedTexImage2D(a,b,c,d,f,h,m?E.subarray(m,m+g):null)},Ba:function(a,b,c,d,f,h,g,m,n){Y.dc?Y.compressedTexImage3D(a,b,c,d,f,h,g,m,n):
Y.compressedTexImage3D(a,b,c,d,f,h,g,E,n,m)},za:function(){var a=W(S),b=Y.createProgram();b.name=a;S[a]=b;return a},va:function(a){var b=W(U);U[b]=Y.createShader(a);return b},I:function(a){Y.cullFace(a)},pa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=qb[d];f&&(Y.deleteBuffer(f),f.name=0,qb[d]=null,d==Y.pc&&(Y.pc=0),d==Y.dc&&(Y.dc=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],f=rb[d];f&&(Y.deleteFramebuffer(f),f.name=0,rb[d]=null)}},A:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),
b.name=0,S[a]=null,wb[a]=null):V(1281)}},x:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=sb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,sb[d]=null)}},r:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):V(1281)}},oa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=tb[d];f&&(Y.deleteTexture(f),f.name=0,tb[d]=null)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];Y.deleteVertexArray(ub[d]);ub[d]=null}},v:function(a){Y.depthFunc(a)},u:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},
O:function(a){Y.disableVertexAttribArray(a)},_a:function(a,b,c){Y.drawArrays(a,b,c)},$a:function(a,b,c,d){Y.drawElements(a,b,c,d)},h:function(a){Y.enable(a)},fb:function(a){Y.enableVertexAttribArray(a)},J:function(a){Y.frontFace(a)},H:function(a,b){Cb(a,b,"createBuffer",qb)},Ia:function(a,b){Cb(a,b,"createRenderbuffer",sb)},Ea:function(a,b){Cb(a,b,"createTexture",tb)},Na:function(a,b){Cb(a,b,"createVertexArray",ub)},qa:function(a,b){return Y.getAttribLocation(S[a],F(b))},f:function(a,b){Db(a,b)},
wa:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},B:function(a,b,c){if(c)if(a>=pb)V(1281);else{var d=wb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.lc;else if(35722==b){if(-1==d.ec){a=S[a];var f=Y.getProgramParameter(a,35721);for(b=d.ec=0;b<f;++b)d.ec=Math.max(d.ec,Y.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.ec}else if(35381==b){if(-1==d.fc)for(a=
S[a],f=Y.getProgramParameter(a,35382),b=d.fc=0;b<f;++b)d.fc=Math.max(d.fc,Y.getActiveUniformBlockName(a,b).length+1);H[c>>2]=d.fc}else H[c>>2]=Y.getProgramParameter(S[a],b);else V(1282)}else V(1281)},sa:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},y:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),H[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(U[a]),H[c>>2]=a?a.length+1:0):H[c>>2]=Y.getShaderParameter(U[a],
b):V(1281)},Qa:function(a){if(xb[a])return xb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Eb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Eb(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Eb(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+=
"0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Eb(b);break;default:return V(1280),0}return xb[a]=b},Pa:function(a,b){if(2>X.version)return V(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Eb(d)}),c=yb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},l:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=
b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=wb[a]&&wb[a].yc[b])&&0<=c&&c<a[0]?a[1]+c:-1},ya:function(a){Y.linkProgram(S[a]);var b=S[a];a=wb[a]={yc:{},lc:0,ec:-1,fc:-1};for(var c=a.yc,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var h=Y.getActiveUniform(b,f),g=h.name;a.lc=Math.max(a.lc,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,g);if(m){var n=W(T);c[g]=[h.size,n];T[n]=m;for(var p=1;p<h.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=W(T),
T[n]=m}}},K:function(a,b){Y.polygonOffset(a,b)},q:function(a){Y.readBuffer(a)},Fa:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Ga:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},ma:function(a,b,c,d){Y.scissor(a,b,c,d)},ua:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?H[d+4*h>>2]:-1;f+=F(H[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(U[a],f)},Ma:function(a,b,c){Y.stencilFunc(a,b,c)},ha:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},t:function(a){Y.stencilMask(a)},La:function(a,
b,c){Y.stencilOp(a,b,c)},ga:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Ca:function(a,b,c,d,f,h,g,m,n){if(2<=X.version)if(Y.dc)Y.texImage2D(a,b,c,d,f,h,g,m,n);else if(n){var p=Fb(m);Y.texImage2D(a,b,c,d,f,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,f,h,g,m,null);else Y.texImage2D(a,b,c,d,f,h,g,m,n?Gb(m,g,d,f,n):null)},Aa:function(a,b,c,d,f,h,g,m,n,p){if(Y.dc)Y.texImage3D(a,b,c,d,f,h,g,m,n,p);else if(p){var q=Fb(n);Y.texImage3D(a,b,c,d,f,h,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,
b,c,d,f,h,g,m,n,null)},D:function(a,b,c){Y.texParameterf(a,b,c)},g:function(a,b,c){Y.texParameteri(a,b,c)},eb:function(a,b,c){if(2<=X.version)Y.uniform1fv(T[a],I,c>>2,b);else{if(288>=b)for(var d=Z[b-1],f=0;f<b;++f)d[f]=I[c+4*f>>2];else d=I.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)}},z:function(a,b){Y.uniform1i(T[a],b)},db:function(a,b,c){if(2<=X.version)Y.uniform2fv(T[a],I,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],f=0;f<2*b;f+=2)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2];else d=I.subarray(c>>2,
c+8*b>>2);Y.uniform2fv(T[a],d)}},cb:function(a,b,c){if(2<=X.version)Y.uniform3fv(T[a],I,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],f=0;f<3*b;f+=3)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2],d[f+2]=I[c+(4*f+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);Y.uniform3fv(T[a],d)}},bb:function(a,b,c){if(2<=X.version)Y.uniform4fv(T[a],I,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],f=I;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=f[g];d[h+1]=f[g+1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=I.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],
d)}},ab:function(a,b,c,d){if(2<=X.version)Y.uniformMatrix4fv(T[a],!!c,I,d>>2,16*b);else{if(18>=b){var f=Z[16*b-1],h=I;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=h[m];f[g+1]=h[m+1];f[g+2]=h[m+2];f[g+3]=h[m+3];f[g+4]=h[m+4];f[g+5]=h[m+5];f[g+6]=h[m+6];f[g+7]=h[m+7];f[g+8]=h[m+8];f[g+9]=h[m+9];f[g+10]=h[m+10];f[g+11]=h[m+11];f[g+12]=h[m+12];f[g+13]=h[m+13];f[g+14]=h[m+14];f[g+15]=h[m+15]}}else f=I.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],!!c,f)}},k:function(a){Y.useProgram(S[a])},gb:function(a,
b){Y.vertexAttribDivisor(a,b)},hb:function(a,b,c,d,f,h){Y.vertexAttribPointer(a,b,c,!!d,f,h)},na:function(a,b,c,d){Y.viewport(a,b,c,d)},a:A,Wa:function(){e.sc=function(a){0!=Kb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.sc)},Va:function(){e.xc=function(a){a=a.clipboardData.getData("text");la("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.xc)},Ua:function(a){e.Qc=[];a=F(a);a=document.getElementById(a);e.tc=function(b){b.stopPropagation();
b.preventDefault()};e.uc=function(b){b.stopPropagation();b.preventDefault()};e.vc=function(b){b.stopPropagation();b.preventDefault()};e.wc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;e.Rc=c;Lb(c.length);var d;for(d=0;d<c.length;d++)la("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Mb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.tc,!1);a.addEventListener("dragleave",e.uc,!1);a.addEventListener("dragover",e.vc,!1);a.addEventListener("drop",e.wc,!1)},
o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Nb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},kb:function(a){a=F(a);e.hc=document.getElementById(a);e.hc||console.log("sokol_app.h: invalid target:"+a);e.hc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ta:function(){window.removeEventListener("beforeunload",
e.sc)},Sa:function(){window.removeEventListener("paste",e.xc)},Ra:function(a){a=F(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.tc);a.removeEventListener("dragleave",e.uc);a.removeEventListener("dragover",e.vc);a.removeEventListener("drop",e.wc)},w:function(){e.hc&&e.hc.requestPointerLock&&e.hc.requestPointerLock()},m:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(f){e.asm=f.exports;K=e.asm.lb;L--;e.monitorRunDependencies&&e.monitorRunDependencies(L);0==L&&(null!==Da&&(clearInterval(Da),Da=null),M&&(f=M,M=null,f()))}function b(f){a(f.instance)}function c(f){return Ia().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Ob};L++;e.monitorRunDependencies&&e.monitorRunDependencies(L);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||Ea("file://")||"function"!==typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Jb=e.___wasm_call_ctors=function(){return(Jb=e.___wasm_call_ctors=e.asm.mb).apply(null,arguments)},Nb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Nb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.nb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.ob).apply(null,arguments)};
var Kb=e.__sapp_html5_get_ask_leave_site=function(){return(Kb=e.__sapp_html5_get_ask_leave_site=e.asm.pb).apply(null,arguments)},Lb=e.__sapp_emsc_begin_drop=function(){return(Lb=e.__sapp_emsc_begin_drop=e.asm.qb).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.rb).apply(null,arguments)};var Mb=e.__sapp_emsc_end_drop=function(){return(Mb=e.__sapp_emsc_end_drop=e.asm.sb).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.tb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.ub).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.vb).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.wb).apply(null,arguments)};
e.___em_js__sapp_js_add_beforeunload_listener=function(){return(e.___em_js__sapp_js_add_beforeunload_listener=e.asm.xb).apply(null,arguments)};e.___em_js__sapp_js_remove_beforeunload_listener=function(){return(e.___em_js__sapp_js_remove_beforeunload_listener=e.asm.yb).apply(null,arguments)};e.___em_js__sapp_js_add_clipboard_listener=function(){return(e.___em_js__sapp_js_add_clipboard_listener=e.asm.zb).apply(null,arguments)};
e.___em_js__sapp_js_remove_clipboard_listener=function(){return(e.___em_js__sapp_js_remove_clipboard_listener=e.asm.Ab).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.Bb).apply(null,arguments)};e.___em_js__sapp_js_add_dragndrop_listeners=function(){return(e.___em_js__sapp_js_add_dragndrop_listeners=e.asm.Cb).apply(null,arguments)};
e.___em_js__sapp_js_dropped_file_size=function(){return(e.___em_js__sapp_js_dropped_file_size=e.asm.Db).apply(null,arguments)};e.___em_js__sapp_js_fetch_dropped_file=function(){return(e.___em_js__sapp_js_fetch_dropped_file=e.asm.Eb).apply(null,arguments)};e.___em_js__sapp_js_remove_dragndrop_listeners=function(){return(e.___em_js__sapp_js_remove_dragndrop_listeners=e.asm.Fb).apply(null,arguments)};
e.___em_js__sapp_js_pointer_init=function(){return(e.___em_js__sapp_js_pointer_init=e.asm.Gb).apply(null,arguments)};e.___em_js__sapp_js_request_pointerlock=function(){return(e.___em_js__sapp_js_request_pointerlock=e.asm.Hb).apply(null,arguments)};e.___em_js__sapp_js_exit_pointerlock=function(){return(e.___em_js__sapp_js_exit_pointerlock=e.asm.Ib).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Jb).apply(null,arguments)};
e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.Kb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.Lb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.Mb).apply(null,arguments)};e.___em_js__saudio_js_shutdown=function(){return(e.___em_js__saudio_js_shutdown=e.asm.Nb).apply(null,arguments)};
e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.Ob).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.Pb).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.Qb).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.Rb).apply(null,arguments)};
e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.Sb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.Tb).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.Ub).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.Vb).apply(null,arguments)};
var R=e._malloc=function(){return(R=e._malloc=e.asm.Wb).apply(null,arguments)},na=e.stackSave=function(){return(na=e.stackSave=e.asm.Xb).apply(null,arguments)},oa=e.stackRestore=function(){return(oa=e.stackRestore=e.asm.Yb).apply(null,arguments)},C=e.stackAlloc=function(){return(C=e.stackAlloc=e.asm.Zb).apply(null,arguments)},Pb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}M=function Qb(){Pb||Rb();Pb||(M=Qb)};
function Rb(a){function b(){if(!Pb&&(Pb=!0,e.calledRun=!0,!ja)){Ja(ya);Ja(za);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Sb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=C(4*(f+1));H[h>>2]=ra(aa);for(var g=1;g<f;g++)H[(h>>2)+g]=ra(c[g-1]);H[(h>>2)+f]=0;try{var m=d(f,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(e.onExit)e.onExit(m);ja=!0}t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ba.unshift(c);Ja(Ba)}}a=a||r;if(!(0<L)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ca();Ja(xa);0<L||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Rb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Sb=!0;e.noInitialRun&&(Sb=!1);noExitRuntime=!0;Rb();
