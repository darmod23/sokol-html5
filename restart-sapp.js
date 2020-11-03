
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var A,ka=!1;function assert(a,b){a||x("Assertion failed: "+b)}
function la(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}function ma(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=C(q);D(n,E,p,q)}return p},array:function(n){var p=C(n.length);F.set(n,p);return p}};a=la(a);var f=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=na()),f[g]=m(c[g])):f[g]=c[g]}a.apply(null,f);0!==h&&oa(h)}
var pa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function qa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&pa)return pa.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=a[b++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function G(a,b){return a?qa(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ra(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function sa(a){var b=ra(a)+1,c=C(b);D(a,F,c,b);return c}var H,F,E,ta,ua,I,va,J,K;
function wa(a){H=a;e.HEAP8=F=new Int8Array(a);e.HEAP16=ta=new Int16Array(a);e.HEAP32=I=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=ua=new Uint16Array(a);e.HEAPU32=va=new Uint32Array(a);e.HEAPF32=J=new Float32Array(a);e.HEAPF64=K=new Float64Array(a)}var xa=e.INITIAL_MEMORY||33554432;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:xa/65536,maximum:32768});A&&(H=A.buffer);xa=H.byteLength;wa(H);var L,ya=[],za=[],Aa=[],Ba=[],Ca=[];
function Da(){var a=e.preRun.shift();ya.unshift(a)}var M=0,Ea=null,Fa=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);y(a);ka=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ga(a){var b=N;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ha(){return Ga("data:application/octet-stream;base64,")}var N="restart-sapp.wasm";if(!Ha()){var Ia=N;N=e.locateFile?e.locateFile(Ia,v):v+Ia}
function Ja(){try{if(z)return new Uint8Array(z);if(w)return w(N);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}function Ka(){return z||!ba&&!u||"function"!==typeof fetch||Ga("file://")?Promise.resolve().then(Ja):fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return Ja()})}
function La(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Uc;"number"===typeof c?void 0===b.Dc?L.get(c)():L.get(c)(b.Dc):c(void 0===b.Dc?null:b.Dc)}}}var Ma=[null,[],[]],Na={},Oa=0;function Pa(){for(var a=O.length-1;0<=a;--a)Qa(a);O=[];Ra=[]}var Ra=[];function Sa(){if(Oa&&Ta.Bc)for(var a=0;a<Ra.length;++a){var b=Ra[a];Ra.splice(a,1);--a;b.od.apply(null,b.Zc)}}var O=[];function Qa(a){var b=O[a];b.target.removeEventListener(b.sc,b.Sc,b.tc);O.splice(a,1)}
function P(a){function b(d){++Oa;Ta=a;Sa();a.wc(d);Sa();--Oa}if(a.vc)a.Sc=b,a.target.addEventListener(a.sc,b,a.tc),O.push(a),Ua||(Ba.push(Pa),Ua=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].sc==a.sc&&Qa(c--)}var Ua,Ta,Va,Wa,Xa,Ya,Za,$a,ab=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Q(a){a=2<a?G(a):a;return ab[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function bb(a){return 0>ab.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function cb(a,b,c,d,f,h){Va||(Va=R(164));a={target:Q(a),Bc:!0,sc:h,vc:d,wc:function(g){var m=Va,n=m>>2;I[n]=g.location;I[n+1]=g.ctrlKey;I[n+2]=g.shiftKey;I[n+3]=g.altKey;I[n+4]=g.metaKey;I[n+5]=g.repeat;I[n+6]=g.charCode;I[n+7]=g.keyCode;I[n+8]=g.which;D(g.key||"",E,m+36,32);D(g.code||"",E,m+68,32);D(g.char||"",E,m+100,32);D(g.locale||"",E,m+132,32);L.get(d)(f,m,b)&&g.preventDefault()},tc:c};P(a)}
function db(a,b,c){a>>=2;I[a]=b.screenX;I[a+1]=b.screenY;I[a+2]=b.clientX;I[a+3]=b.clientY;I[a+4]=b.ctrlKey;I[a+5]=b.shiftKey;I[a+6]=b.altKey;I[a+7]=b.metaKey;ta[2*a+16]=b.button;ta[2*a+17]=b.buttons;I[a+9]=b.movementX;I[a+10]=b.movementY;c=bb(c);I[a+11]=b.clientX-c.left;I[a+12]=b.clientY-c.top}function eb(a,b,c,d,f,h){Wa||(Wa=R(64));a=Q(a);P({target:a,Bc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,sc:h,vc:d,wc:function(g){g=g||event;db(Wa,g,a);L.get(d)(f,Wa,b)&&g.preventDefault()},tc:c})}
function fb(a,b,c,d,f){Xa||(Xa=R(260));P({target:a,sc:f,vc:d,wc:function(h){h=h||event;var g=Xa,m=document.pointerLockElement||document.Ic||document.Qc||document.Jc;I[g>>2]=!!m;var n=m&&m.id?m.id:"";D(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",E,g+4,128);D(n,E,g+132,128);L.get(d)(20,g,b)&&h.preventDefault()},tc:c})}function gb(a,b,c,d,f){P({target:a,sc:f,vc:d,wc:function(h){h=h||event;L.get(d)(38,0,b)&&h.preventDefault()},tc:c})}
function hb(a,b,c,d){Ya||(Ya=R(36));a=Q(a);P({target:a,sc:"resize",vc:d,wc:function(f){f=f||event;if(f.target==a){var h=document.body;if(h){var g=Ya;I[g>>2]=f.detail;I[g+4>>2]=h.clientWidth;I[g+8>>2]=h.clientHeight;I[g+12>>2]=innerWidth;I[g+16>>2]=innerHeight;I[g+20>>2]=outerWidth;I[g+24>>2]=outerHeight;I[g+28>>2]=pageXOffset;I[g+32>>2]=pageYOffset;L.get(d)(10,g,b)&&f.preventDefault()}}},tc:c})}
function ib(a,b,c,d,f,h){Za||(Za=R(1684));a=Q(a);P({target:a,Bc:"touchstart"==h||"touchend"==h,sc:h,vc:d,wc:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.Wc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].Xc=1;n=Za;q=n>>2;I[q+1]=g.ctrlKey;I[q+2]=g.shiftKey;I[q+3]=g.altKey;I[q+4]=g.metaKey;q+=5;var sb=bb(a),tb=0;for(p in m){var B=m[p];I[q]=B.identifier;I[q+1]=B.screenX;I[q+2]=
B.screenY;I[q+3]=B.clientX;I[q+4]=B.clientY;I[q+5]=B.pageX;I[q+6]=B.pageY;I[q+7]=B.Wc;I[q+8]=B.Xc;I[q+9]=B.clientX-sb.left;I[q+10]=B.clientY-sb.top;q+=13;if(31<++tb)break}I[n>>2]=tb;L.get(d)(f,n,b)&&g.preventDefault()},tc:c})}function jb(a,b,c,d,f,h){a={target:Q(a),sc:h,vc:d,wc:function(g){g=g||event;L.get(d)(f,0,b)&&g.preventDefault()},tc:c};P(a)}
function kb(a,b,c,d){$a||($a=R(96));P({target:a,Bc:!0,sc:"wheel",vc:d,wc:function(f){f=f||event;var h=$a;db(h,f,a);K[h+64>>3]=f.deltaX;K[h+72>>3]=f.deltaY;K[h+80>>3]=f.deltaZ;I[h+88>>2]=f.deltaMode;L.get(d)(9,h,b)&&f.preventDefault()},tc:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ob(a){a.ad=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function pb(a){a.gd=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function qb(a){a.jd=a.getExtension("WEBGL_multi_draw")}var rb=1,ub=[],S=[],vb=[],wb=[],xb=[],T=[],U=[],yb=[],zb=[],Ab={},Bb={},Cb={};function V(a){Db||(Db=a)}function W(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function Eb(a){a||(a=X);if(!a.Vc){a.Vc=!0;var b=a.Cc;lb(b);mb(b);nb(b);ob(b);pb(b);b.bd=b.getExtension("EXT_disjoint_timer_query");qb(b);var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var Db,X,Fb=["default","low-power","high-performance"],Gb={};function Hb(){if(!Ib){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:aa||"./this.program"},b;for(b in Gb)a[b]=Gb[b];var c=[];for(b in a)c.push(b+"="+a[b]);Ib=c}return Ib}var Ib;
function Jb(a,b,c,d){for(var f=0;f<a;f++){var h=Y[c](),g=h&&W(d);h?(h.name=g,d[g]=h):V(1282);I[b+4*f>>2]=g}}
function Kb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)I[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}I[b>>2]=c}else V(1281)}
function Lb(a){var b=ra(a)+1,c=R(b);D(a,E,c,b);return c}function Mb(a){a-=5120;return 0==a?F:1==a?E:2==a?ta:4==a?I:6==a?J:5==a||28922==a||28520==a||30779==a||30782==a?va:ua}function Nb(a,b,c,d,f){a=Mb(a);var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}var Z=[],Ob;ca?Ob=function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:"undefined"!==typeof dateNow?Ob=dateNow:Ob=function(){return performance.now()};
function Pb(a){for(var b=Ob();Ob()-b<a/1E3;);}e._usleep=Pb;for(var Y,Qb=new Float32Array(288),Rb=0;288>Rb;++Rb)Z[Rb]=Qb.subarray(0,Rb+1);za.push({Uc:function(){Sb()}});
var cc={ma:function(){return 0},gb:function(){return 0},hb:function(){},cb:function(){x()},X:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ea:function(a,b,c){a=Q(a);if(!a)return-4;a=bb(a);K[b>>3]=a.width;K[c>>3]=a.height;return 0},ab:function(a,b,c){E.copyWithin(a,b,b+c)},Na:function(a,b){function c(d){L.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},bb:function(a){a>>>=0;var b=E.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+
.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{A.grow(Math.min(2147483648,d)-H.byteLength+65535>>>16);wa(A.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},U:function(a,b,c){a=Q(a);if(!a)return-4;a.width=b;a.height=c;return 0},ha:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},fa:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},ga:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},qa:function(a,b,c,d){eb(a,b,c,d,5,"mousedown");
return 0},ka:function(a,b,c,d){eb(a,b,c,d,33,"mouseenter");return 0},ja:function(a,b,c,d){eb(a,b,c,d,34,"mouseleave");return 0},la:function(a,b,c,d){eb(a,b,c,d,8,"mousemove");return 0},pa:function(a,b,c,d){eb(a,b,c,d,6,"mouseup");return 0},$:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Ic||document.body.Qc||document.body.Jc))return-1;a=Q(a);if(!a)return-4;fb(a,b,c,d,"pointerlockchange");fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,"webkitpointerlockchange");
fb(a,b,c,d,"mspointerlockchange");return 0},_:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Ic||document.body.Qc||document.body.Jc))return-1;a=Q(a);if(!a)return-4;gb(a,b,c,d,"pointerlockerror");gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return 0},Xa:function(a,b,c,d){hb(a,b,c,d);return 0},aa:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},ba:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},
ca:function(a,b,c,d){ib(a,b,c,d,24,"touchmove");return 0},da:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},Z:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},Y:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},ia:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(kb(a,b,c,d),0):-1},G:function(a,b){var c={};b>>=2;c.alpha=!!I[b];c.depth=!!I[b+1];c.stencil=!!I[b+2];c.antialias=!!I[b+3];c.premultipliedAlpha=!!I[b+4];c.preserveDrawingBuffer=!!I[b+5];c.powerPreference=
Fb[I[b+6]];c.failIfMajorPerformanceCaveat=!!I[b+7];c.Hc=I[b+8];c.hd=I[b+9];c.Gc=I[b+10];c.Tc=I[b+11];c.kd=I[b+12];c.ld=I[b+13];a=Q(a);if(!a||c.Tc)c=0;else if(a=1<c.Hc?a.getContext("webgl2",c):a.getContext("webgl",c)){b=W(zb);var d={ed:b,attributes:c,version:c.Hc,Cc:a};a.canvas&&(a.canvas.Yc=d);zb[b]=d;("undefined"===typeof c.Gc||c.Gc)&&Eb(d);c=b}else c=0;return c},Bb:function(a,b){a=zb[a];b=G(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(Y);"OES_vertex_array_object"==b&&
mb(Y);"WEBGL_draw_buffers"==b&&nb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ob(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&pb(Y);"WEBGL_multi_draw"==b&&qb(Y);return!!a.Cc.getExtension(b)},Ka:function(a){a>>=2;for(var b=0;14>b;++b)I[a+b]=0;I[a]=I[a+1]=I[a+3]=I[a+4]=I[a+8]=I[a+10]=1},za:function(a){X=zb[a];e.$c=Y=X&&X.Cc;return!a||Y?0:-5},db:function(a,b){var c=0;Hb().forEach(function(d,f){var h=b+c;f=I[a+4*f>>2]=h;for(h=0;h<d.length;++h)F[f++>>0]=d.charCodeAt(h);F[f>>
0]=0;c+=d.length+1});return 0},eb:function(a,b){var c=Hb();I[a>>2]=c.length;var d=0;c.forEach(function(f){d+=f.length+1});I[b>>2]=d;return 0},oa:function(){return 0},fb:function(a,b,c,d){a=Na.dd(a);b=Na.cd(a,b,c);I[d>>2]=b;return 0},$a:function(){},na:function(a,b,c,d){for(var f=0,h=0;h<c;h++){for(var g=I[b+8*h>>2],m=I[b+(8*h+4)>>2],n=0;n<m;n++){var p=E[g+n],q=Ma[a];0===p||10===p?((1===a?ja:y)(qa(q,0)),q.length=0):q.push(p)}f+=m}I[d>>2]=f;return 0},d:function(a){Y.activeTexture(a)},H:function(a,b){Y.attachShader(S[a],
U[b])},c:function(a,b){35051==a?Y.Fc=b:35052==a&&(Y.xc=b);Y.bindBuffer(a,ub[b])},i:function(a,b){Y.bindFramebuffer(a,vb[b])},K:function(a,b){Y.bindRenderbuffer(a,wb[b])},b:function(a,b){Y.bindTexture(a,xb[b])},W:function(a){Y.bindVertexArray(yb[a])},R:function(a,b,c,d){Y.blendColor(a,b,c,d)},S:function(a,b){Y.blendEquationSeparate(a,b)},T:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},r:function(a,b,c,d,f,h,g,m,n,p){Y.blitFramebuffer(a,b,c,d,f,h,g,m,n,p)},M:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,
E,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?E.subarray(c,c+b):b,d)},l:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,E,d,c):Y.bufferSubData(a,b,E.subarray(d,d+c))},yb:function(a){Y.clear(a)},ua:function(a,b,c,d){Y.clearColor(a,b,c,d)},Ab:function(a){Y.clearDepth(a)},zb:function(a){Y.clearStencil(a)},u:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},Aa:function(a){Y.compileShader(U[a])},Ja:function(a,b,c,d,f,h,g,m){2<=X.version?Y.xc?Y.compressedTexImage2D(a,b,c,d,f,h,g,m):Y.compressedTexImage2D(a,
b,c,d,f,h,E,m,g):Y.compressedTexImage2D(a,b,c,d,f,h,m?E.subarray(m,m+g):null)},Ha:function(a,b,c,d,f,h,g,m,n){Y.xc?Y.compressedTexImage3D(a,b,c,d,f,h,g,m,n):Y.compressedTexImage3D(a,b,c,d,f,h,g,E,n,m)},Fa:function(){var a=W(S),b=Y.createProgram();b.name=a;S[a]=b;return a},Ca:function(a){var b=W(U);U[b]=Y.createShader(a);return b},O:function(a){Y.cullFace(a)},wa:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],f=ub[d];f&&(Y.deleteBuffer(f),f.name=0,ub[d]=null,d==Y.Fc&&(Y.Fc=0),d==Y.xc&&(Y.xc=0))}},
j:function(a,b){for(var c=0;c<a;++c){var d=I[b+4*c>>2],f=vb[d];f&&(Y.deleteFramebuffer(f),f.name=0,vb[d]=null)}},n:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),b.name=0,S[a]=null,Ab[a]=null):V(1281)}},C:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],f=wb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,wb[d]=null)}},t:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):V(1281)}},va:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],f=xb[d];f&&(Y.deleteTexture(f),f.name=0,xb[d]=null)}},
Ra:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2];Y.deleteVertexArray(yb[d]);yb[d]=null}},x:function(a){Y.depthFunc(a)},w:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},V:function(a){Y.disableVertexAttribArray(a)},ob:function(a,b,c){Y.drawArrays(a,b,c)},pb:function(a,b,c,d){Y.drawElements(a,b,c,d)},h:function(a){Y.enable(a)},vb:function(a){Y.enableVertexAttribArray(a)},P:function(a){Y.frontFace(a)},N:function(a,b){Jb(a,b,"createBuffer",ub)},L:function(a,b){Jb(a,b,"createRenderbuffer",
wb)},La:function(a,b){Jb(a,b,"createTexture",xb)},Qa:function(a,b){Jb(a,b,"createVertexArray",yb)},xa:function(a,b){return Y.getAttribLocation(S[a],G(b))},f:function(a,b){Kb(a,b)},Da:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(I[c>>2]=b)},F:function(a,b,c){if(c)if(a>=rb)V(1281);else{var d=Ab[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),I[c>>2]=a.length+1;else if(35719==b)I[c>>2]=d.Ec;else if(35722==b){if(-1==
d.yc){a=S[a];var f=Y.getProgramParameter(a,35721);for(b=d.yc=0;b<f;++b)d.yc=Math.max(d.yc,Y.getActiveAttrib(a,b).name.length+1)}I[c>>2]=d.yc}else if(35381==b){if(-1==d.zc)for(a=S[a],f=Y.getProgramParameter(a,35382),b=d.zc=0;b<f;++b)d.zc=Math.max(d.zc,Y.getActiveUniformBlockName(a,b).length+1);I[c>>2]=d.zc}else I[c>>2]=Y.getProgramParameter(S[a],b);else V(1282)}else V(1281)},ya:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(I[c>>2]=b)},D:function(a,
b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),I[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(U[a]),I[c>>2]=a?a.length+1:0):I[c>>2]=Y.getShaderParameter(U[a],b):V(1281)},Ta:function(a){if(Bb[a])return Bb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Lb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Lb(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?
"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Lb(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Lb(b);break;default:return V(1280),0}return Bb[a]=b},Sa:function(a,b){if(2>X.version)return V(1282),0;var c=Cb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+
d})),c=c.map(function(d){return Lb(d)}),c=Cb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},m:function(a,b){b=G(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Ab[a]&&Ab[a].Rc[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ea:function(a){Y.linkProgram(S[a]);var b=S[a];a=Ab[a]={Rc:{},Ec:0,yc:-1,zc:-1};for(var c=a.Rc,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var h=Y.getActiveUniform(b,f),g=h.name;a.Ec=Math.max(a.Ec,g.length+
1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,g);if(m){var n=W(T);c[g]=[h.size,n];T[n]=m;for(var p=1;p<h.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=W(T),T[n]=m}}},Q:function(a,b){Y.polygonOffset(a,b)},s:function(a){Y.readBuffer(a)},Ma:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},J:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},A:function(a,b,c,d){Y.scissor(a,b,c,d)},Ba:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?I[d+4*h>>2]:
-1;f+=G(I[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(U[a],f)},Pa:function(a,b,c){Y.stencilFunc(a,b,c)},sa:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},v:function(a){Y.stencilMask(a)},Oa:function(a,b,c){Y.stencilOp(a,b,c)},ra:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Ia:function(a,b,c,d,f,h,g,m,n){if(2<=X.version)if(Y.xc)Y.texImage2D(a,b,c,d,f,h,g,m,n);else if(n){var p=Mb(m);Y.texImage2D(a,b,c,d,f,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,f,h,g,m,null);else Y.texImage2D(a,
b,c,d,f,h,g,m,n?Nb(m,g,d,f,n):null)},Ga:function(a,b,c,d,f,h,g,m,n,p){if(Y.xc)Y.texImage3D(a,b,c,d,f,h,g,m,n,p);else if(p){var q=Mb(n);Y.texImage3D(a,b,c,d,f,h,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,b,c,d,f,h,g,m,n,null)},I:function(a,b,c){Y.texParameterf(a,b,c)},g:function(a,b,c){Y.texParameteri(a,b,c)},ub:function(a,b,c){if(2<=X.version)Y.uniform1fv(T[a],J,c>>2,b);else{if(288>=b)for(var d=Z[b-1],f=0;f<b;++f)d[f]=J[c+4*f>>2];else d=J.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],
d)}},E:function(a,b){Y.uniform1i(T[a],b)},tb:function(a,b,c){if(2<=X.version)Y.uniform2fv(T[a],J,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],f=0;f<2*b;f+=2)d[f]=J[c+4*f>>2],d[f+1]=J[c+(4*f+4)>>2];else d=J.subarray(c>>2,c+8*b>>2);Y.uniform2fv(T[a],d)}},sb:function(a,b,c){if(2<=X.version)Y.uniform3fv(T[a],J,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],f=0;f<3*b;f+=3)d[f]=J[c+4*f>>2],d[f+1]=J[c+(4*f+4)>>2],d[f+2]=J[c+(4*f+8)>>2];else d=J.subarray(c>>2,c+12*b>>2);Y.uniform3fv(T[a],d)}},rb:function(a,b,
c){if(2<=X.version)Y.uniform4fv(T[a],J,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],f=J;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=f[g];d[h+1]=f[g+1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=J.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],d)}},qb:function(a,b,c,d){if(2<=X.version)Y.uniformMatrix4fv(T[a],!!c,J,d>>2,16*b);else{if(18>=b){var f=Z[16*b-1],h=J;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=h[m];f[g+1]=h[m+1];f[g+2]=h[m+2];f[g+3]=h[m+3];f[g+4]=h[m+4];f[g+5]=h[m+5];f[g+6]=h[m+6];f[g+7]=h[m+7];f[g+8]=
h[m+8];f[g+9]=h[m+9];f[g+10]=h[m+10];f[g+11]=h[m+11];f[g+12]=h[m+12];f[g+13]=h[m+13];f[g+14]=h[m+14];f[g+15]=h[m+15]}}else f=J.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],!!c,f)}},k:function(a){Y.useProgram(S[a])},wb:function(a,b){Y.vertexAttribDivisor(a,b)},xb:function(a,b,c,d,f,h){Y.vertexAttribPointer(a,b,c,!!d,f,h)},B:function(a,b,c,d){Y.viewport(a,b,c,d)},a:A,ib:function(a,b){if(0===a)return I[Tb()>>2]=28,-1;var c=I[a>>2];a=I[a+4>>2];if(0>a||999999999<a||0>c)return I[Tb()>>2]=28,-1;0!==
b&&(I[b>>2]=0,I[b+4>>2]=0);return Pb(1E6*c+a/1E3)},_a:function(){e.Kc=function(a){0!=Ub()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.Kc)},Za:function(){e.Pc=function(a){a=a.clipboardData.getData("text");ma("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.Pc)},Ya:function(a){e.md=[];a=G(a);a=document.getElementById(a);e.Lc=function(b){b.stopPropagation();b.preventDefault()};e.Mc=function(b){b.stopPropagation();b.preventDefault()};e.Nc=function(b){b.stopPropagation();
b.preventDefault()};e.Oc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;e.nd=c;Vb(c.length);var d;for(d=0;d<c.length;d++)ma("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Wb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.Lc,!1);a.addEventListener("dragleave",e.Mc,!1);a.addEventListener("dragover",e.Nc,!1);a.addEventListener("drop",e.Oc,!1)},q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize=
"none";a.addEventListener("focusout",function(){Xb()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},Cb:function(a){a=G(a);e.Ac=document.getElementById(a);e.Ac||console.log("sokol_app.h: invalid target:"+a);e.Ac.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Wa:function(){window.removeEventListener("beforeunload",e.Kc)},Va:function(){window.removeEventListener("paste",e.Pc)},Ua:function(a){a=G(a);a=
document.getElementById(a);a.removeEventListener("dragenter",e.Lc);a.removeEventListener("dragleave",e.Mc);a.removeEventListener("dragover",e.Nc);a.removeEventListener("drop",e.Oc)},y:function(){e.Ac&&e.Ac.requestPointerLock&&e.Ac.requestPointerLock()},o:function(){document.getElementById("_sokol_app_input_element").blur()},lb:function(){return e.uc?e.uc.bufferSize:0},nb:function(a,b,c){e.rc=null;e.uc=null;"undefined"!==typeof AudioContext?e.rc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):
"undefined"!==typeof webkitAudioContext?e.rc=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(e.rc=null,console.log("sokol_audio.h: no WebAudio support"));return e.rc?(console.log("sokol_audio.h: sample rate ",e.rc.sampleRate),e.uc=e.rc.createScriptProcessor(c,0,b),e.uc.onaudioprocess=function(d){var f=d.outputBuffer.length,h=Yb(f);if(h)for(var g=d.outputBuffer.numberOfChannels,m=0;m<g;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<f;p++)n[p]=J[(h>>2)+(g*p+m)]},e.uc.connect(e.rc.destination),
a=function(){e.rc&&"suspended"===e.rc.state&&e.rc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},mb:function(){return e.rc?e.rc.sampleRate:0},z:function(){null!==e.rc&&(e.uc&&e.uc.disconnect(),e.rc.close(),e.rc=null,e.uc=null)},ta:function(a,b,c,d,f,h){b=G(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+
(c+d));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(g.response),p=n.length;p<=h?(E.set(n,f),Zb(a,d,p)):$b(a)}else ac(a,this.status)};g.send()},kb:function(a,b){b=G(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");bc(a,d)}else ac(a,this.status)};c.send()},jb:function(a){var b=Date.now()/1E3|0;a&&
(I[a>>2]=b);return b}};
(function(){function a(f){e.asm=f.exports;L=e.asm.Db;M--;e.monitorRunDependencies&&e.monitorRunDependencies(M);0==M&&(null!==Ea&&(clearInterval(Ea),Ea=null),Fa&&(f=Fa,Fa=null,f()))}function b(f){a(f.instance)}function c(f){return Ka().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:cc};M++;e.monitorRunDependencies&&e.monitorRunDependencies(M);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||Ga("file://")||"function"!==typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Sb=e.___wasm_call_ctors=function(){return(Sb=e.___wasm_call_ctors=e.asm.Eb).apply(null,arguments)},Xb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Xb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.Fb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.Gb).apply(null,arguments)};
var Ub=e.__sapp_html5_get_ask_leave_site=function(){return(Ub=e.__sapp_html5_get_ask_leave_site=e.asm.Hb).apply(null,arguments)},Vb=e.__sapp_emsc_begin_drop=function(){return(Vb=e.__sapp_emsc_begin_drop=e.asm.Ib).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.Jb).apply(null,arguments)};var Wb=e.__sapp_emsc_end_drop=function(){return(Wb=e.__sapp_emsc_end_drop=e.asm.Kb).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.Lb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.Mb).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.Nb).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.Ob).apply(null,arguments)};
e.___em_js__sapp_js_add_beforeunload_listener=function(){return(e.___em_js__sapp_js_add_beforeunload_listener=e.asm.Pb).apply(null,arguments)};e.___em_js__sapp_js_remove_beforeunload_listener=function(){return(e.___em_js__sapp_js_remove_beforeunload_listener=e.asm.Qb).apply(null,arguments)};e.___em_js__sapp_js_add_clipboard_listener=function(){return(e.___em_js__sapp_js_add_clipboard_listener=e.asm.Rb).apply(null,arguments)};
e.___em_js__sapp_js_remove_clipboard_listener=function(){return(e.___em_js__sapp_js_remove_clipboard_listener=e.asm.Sb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.Tb).apply(null,arguments)};e.___em_js__sapp_js_add_dragndrop_listeners=function(){return(e.___em_js__sapp_js_add_dragndrop_listeners=e.asm.Ub).apply(null,arguments)};
e.___em_js__sapp_js_dropped_file_size=function(){return(e.___em_js__sapp_js_dropped_file_size=e.asm.Vb).apply(null,arguments)};e.___em_js__sapp_js_fetch_dropped_file=function(){return(e.___em_js__sapp_js_fetch_dropped_file=e.asm.Wb).apply(null,arguments)};e.___em_js__sapp_js_remove_dragndrop_listeners=function(){return(e.___em_js__sapp_js_remove_dragndrop_listeners=e.asm.Xb).apply(null,arguments)};
e.___em_js__sapp_js_pointer_init=function(){return(e.___em_js__sapp_js_pointer_init=e.asm.Yb).apply(null,arguments)};e.___em_js__sapp_js_request_pointerlock=function(){return(e.___em_js__sapp_js_request_pointerlock=e.asm.Zb).apply(null,arguments)};e.___em_js__sapp_js_exit_pointerlock=function(){return(e.___em_js__sapp_js_exit_pointerlock=e.asm._b).apply(null,arguments)};e._main=function(){return(e._main=e.asm.$b).apply(null,arguments)};
e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.ac).apply(null,arguments)};var Yb=e.__saudio_emsc_pull=function(){return(Yb=e.__saudio_emsc_pull=e.asm.bc).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.cc).apply(null,arguments)};e.___em_js__saudio_js_shutdown=function(){return(e.___em_js__saudio_js_shutdown=e.asm.dc).apply(null,arguments)};
e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.ec).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.fc).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.gc).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.hc).apply(null,arguments)};
var bc=e.__sfetch_emsc_head_response=function(){return(bc=e.__sfetch_emsc_head_response=e.asm.ic).apply(null,arguments)},Zb=e.__sfetch_emsc_get_response=function(){return(Zb=e.__sfetch_emsc_get_response=e.asm.jc).apply(null,arguments)},ac=e.__sfetch_emsc_failed_http_status=function(){return(ac=e.__sfetch_emsc_failed_http_status=e.asm.kc).apply(null,arguments)},$b=e.__sfetch_emsc_failed_buffer_too_small=function(){return($b=e.__sfetch_emsc_failed_buffer_too_small=e.asm.lc).apply(null,arguments)},R=
e._malloc=function(){return(R=e._malloc=e.asm.mc).apply(null,arguments)},Tb=e.___errno_location=function(){return(Tb=e.___errno_location=e.asm.nc).apply(null,arguments)},na=e.stackSave=function(){return(na=e.stackSave=e.asm.oc).apply(null,arguments)},oa=e.stackRestore=function(){return(oa=e.stackRestore=e.asm.pc).apply(null,arguments)},C=e.stackAlloc=function(){return(C=e.stackAlloc=e.asm.qc).apply(null,arguments)},dc;
function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Fa=function ec(){dc||fc();dc||(Fa=ec)};
function fc(a){function b(){if(!dc&&(dc=!0,e.calledRun=!0,!ka)){La(za);La(Aa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(hc){var c=a,d=e._main;c=c||[];var f=c.length+1,h=C(4*(f+1));I[h>>2]=sa(aa);for(var g=1;g<f;g++)I[(h>>2)+g]=sa(c[g-1]);I[(h>>2)+f]=0;try{var m=d(f,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(e.onExit)e.onExit(m);ka=!0}t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ca.unshift(c);La(Ca)}}a=a||r;if(!(0<M)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Da();La(ya);0<M||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=fc;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var hc=!0;e.noInitialRun&&(hc=!1);noExitRuntime=!0;fc();
