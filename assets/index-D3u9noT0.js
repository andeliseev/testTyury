const __vite__fileDeps=["assets/browserAll-C2ayFjqG.js","assets/webworkerAll-CGKu1wd5.js","assets/colorToUniform-eVMmJoTT.js","assets/CanvasPool-yXnkFlU9.js","assets/getBatchSamplersUniformGroup-DtVLuNLP.js","assets/WebGPURenderer-Q85d1G1n.js","assets/SharedSystems-DndZCaU5.js","assets/WebGLRenderer-DQn1MGoJ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var Qa=Object.defineProperty;var Ja=(n,t,e)=>t in n?Qa(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var b=(n,t,e)=>(Ja(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const tl="modulepreload",el=function(n){return"/testTyury/"+n},zi={},In=function(t,e,r){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(e.map(a=>{if(a=el(a),a in zi)return;zi[a]=!0;const l=a.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":tl,l||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var D=(n=>(n.Application="application",n.WebGLPipes="webgl-pipes",n.WebGLPipesAdaptor="webgl-pipes-adaptor",n.WebGLSystem="webgl-system",n.WebGPUPipes="webgpu-pipes",n.WebGPUPipesAdaptor="webgpu-pipes-adaptor",n.WebGPUSystem="webgpu-system",n.CanvasSystem="canvas-system",n.CanvasPipesAdaptor="canvas-pipes-adaptor",n.CanvasPipes="canvas-pipes",n.Asset="asset",n.LoadParser="load-parser",n.ResolveParser="resolve-parser",n.CacheParser="cache-parser",n.DetectionParser="detection-parser",n.MaskEffect="mask-effect",n.BlendMode="blend-mode",n.TextureSource="texture-source",n.Environment="environment",n))(D||{});const Fr=n=>{if(typeof n=="function"||typeof n=="object"&&n.extension){if(!n.extension)throw new Error("Extension class must have an extension object");n={...typeof n.extension!="object"?{type:n.extension}:n.extension,ref:n}}if(typeof n=="object")n={...n};else throw new Error("Invalid extension type");return typeof n.type=="string"&&(n.type=[n.type]),n},sn=(n,t)=>Fr(n).priority??t,gt={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...n){return n.map(Fr).forEach(t=>{t.type.forEach(e=>{var r,i;return(i=(r=this._removeHandlers)[e])==null?void 0:i.call(r,t)})}),this},add(...n){return n.map(Fr).forEach(t=>{t.type.forEach(e=>{var s,o;const r=this._addHandlers,i=this._queue;r[e]?(o=r[e])==null||o.call(r,t):(i[e]=i[e]||[],(s=i[e])==null||s.push(t))})}),this},handle(n,t,e){var o;const r=this._addHandlers,i=this._removeHandlers;if(r[n]||i[n])throw new Error(`Extension type ${n} already has a handler`);r[n]=t,i[n]=e;const s=this._queue;return s[n]&&((o=s[n])==null||o.forEach(a=>t(a)),delete s[n]),this},handleByMap(n,t){return this.handle(n,e=>{e.name&&(t[e.name]=e.ref)},e=>{e.name&&delete t[e.name]})},handleByNamedList(n,t,e=-1){return this.handle(n,r=>{t.findIndex(s=>s.name===r.name)>=0||(t.push({name:r.name,value:r.ref}),t.sort((s,o)=>sn(o.value,e)-sn(s.value,e)))},r=>{const i=t.findIndex(s=>s.name===r.name);i!==-1&&t.splice(i,1)})},handleByList(n,t,e=-1){return this.handle(n,r=>{t.includes(r.ref)||(t.push(r.ref),t.sort((i,s)=>sn(s,e)-sn(i,e)))},r=>{const i=t.indexOf(r.ref);i!==-1&&t.splice(i,1)})}},nl={extension:{type:D.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await In(()=>import("./browserAll-C2ayFjqG.js"),__vite__mapDeps([0,1,2,3,4]))}},rl={extension:{type:D.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await In(()=>import("./webworkerAll-CGKu1wd5.js"),__vite__mapDeps([1,2,3,4]))}};class ht{constructor(t,e,r){this._x=e||0,this._y=r||0,this._observer=t}clone(t){return new ht(t??this._observer,this._x,this._y)}set(t=0,e=t){return(this._x!==t||this._y!==e)&&(this._x=t,this._y=e,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}function oi(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bs={exports:{}};(function(n){var t=Object.prototype.hasOwnProperty,e="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(e=!1));function i(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function s(l,c,u,h,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var d=new i(u,h||l,f),m=e?e+c:c;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],d]:l._events[m].push(d):(l._events[m]=d,l._eventsCount++),l}function o(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,h;if(this._eventsCount===0)return c;for(h in u=this._events)t.call(u,h)&&c.push(e?h.slice(1):h);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=e?e+c:c,h=this._events[u];if(!h)return[];if(h.fn)return[h.fn];for(var f=0,d=h.length,m=new Array(d);f<d;f++)m[f]=h[f].fn;return m},a.prototype.listenerCount=function(c){var u=e?e+c:c,h=this._events[u];return h?h.fn?1:h.length:0},a.prototype.emit=function(c,u,h,f,d,m){var g=e?e+c:c;if(!this._events[g])return!1;var p=this._events[g],x=arguments.length,v,y;if(p.fn){switch(p.once&&this.removeListener(c,p.fn,void 0,!0),x){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,u),!0;case 3:return p.fn.call(p.context,u,h),!0;case 4:return p.fn.call(p.context,u,h,f),!0;case 5:return p.fn.call(p.context,u,h,f,d),!0;case 6:return p.fn.call(p.context,u,h,f,d,m),!0}for(y=1,v=new Array(x-1);y<x;y++)v[y-1]=arguments[y];p.fn.apply(p.context,v)}else{var _=p.length,z;for(y=0;y<_;y++)switch(p[y].once&&this.removeListener(c,p[y].fn,void 0,!0),x){case 1:p[y].fn.call(p[y].context);break;case 2:p[y].fn.call(p[y].context,u);break;case 3:p[y].fn.call(p[y].context,u,h);break;case 4:p[y].fn.call(p[y].context,u,h,f);break;default:if(!v)for(z=1,v=new Array(x-1);z<x;z++)v[z-1]=arguments[z];p[y].fn.apply(p[y].context,v)}}return!0},a.prototype.on=function(c,u,h){return s(this,c,u,h,!1)},a.prototype.once=function(c,u,h){return s(this,c,u,h,!0)},a.prototype.removeListener=function(c,u,h,f){var d=e?e+c:c;if(!this._events[d])return this;if(!u)return o(this,d),this;var m=this._events[d];if(m.fn)m.fn===u&&(!f||m.once)&&(!h||m.context===h)&&o(this,d);else{for(var g=0,p=[],x=m.length;g<x;g++)(m[g].fn!==u||f&&!m[g].once||h&&m[g].context!==h)&&p.push(m[g]);p.length?this._events[d]=p.length===1?p[0]:p:o(this,d)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=e?e+c:c,this._events[u]&&o(this,u)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=e,a.EventEmitter=a,n.exports=a})(Bs);var il=Bs.exports;const Tt=oi(il),sl=Math.PI*2,ol=180/Math.PI,Ce=Math.PI/180;class ut{constructor(t=0,e=0){this.x=0,this.y=0,this.x=t,this.y=e}clone(){return new ut(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,e=t){return this.x=t,this.y=e,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return jn.x=0,jn.y=0,jn}}const jn=new ut;class H{constructor(t=1,e=0,r=0,i=1,s=0,o=0){this.array=null,this.a=t,this.b=e,this.c=r,this.d=i,this.tx=s,this.ty=o}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,e,r,i,s,o){return this.a=t,this.b=e,this.c=r,this.d=i,this.tx=s,this.ty=o,this}toArray(t,e){this.array||(this.array=new Float32Array(9));const r=e||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(t,e){e=e||new ut;const r=t.x,i=t.y;return e.x=this.a*r+this.c*i+this.tx,e.y=this.b*r+this.d*i+this.ty,e}applyInverse(t,e){e=e||new ut;const r=this.a,i=this.b,s=this.c,o=this.d,a=this.tx,l=this.ty,c=1/(r*o+s*-i),u=t.x,h=t.y;return e.x=o*c*u+-s*c*h+(l*s-a*o)*c,e.y=r*c*h+-i*c*u+(-l*r+a*i)*c,e}translate(t,e){return this.tx+=t,this.ty+=e,this}scale(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this}rotate(t){const e=Math.cos(t),r=Math.sin(t),i=this.a,s=this.c,o=this.tx;return this.a=i*e-this.b*r,this.b=i*r+this.b*e,this.c=s*e-this.d*r,this.d=s*r+this.d*e,this.tx=o*e-this.ty*r,this.ty=o*r+this.ty*e,this}append(t){const e=this.a,r=this.b,i=this.c,s=this.d;return this.a=t.a*e+t.b*i,this.b=t.a*r+t.b*s,this.c=t.c*e+t.d*i,this.d=t.c*r+t.d*s,this.tx=t.tx*e+t.ty*i+this.tx,this.ty=t.tx*r+t.ty*s+this.ty,this}appendFrom(t,e){const r=t.a,i=t.b,s=t.c,o=t.d,a=t.tx,l=t.ty,c=e.a,u=e.b,h=e.c,f=e.d;return this.a=r*c+i*h,this.b=r*u+i*f,this.c=s*c+o*h,this.d=s*u+o*f,this.tx=a*c+l*h+e.tx,this.ty=a*u+l*f+e.ty,this}setTransform(t,e,r,i,s,o,a,l,c){return this.a=Math.cos(a+c)*s,this.b=Math.sin(a+c)*s,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=t-(r*this.a+i*this.c),this.ty=e-(r*this.b+i*this.d),this}prepend(t){const e=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const r=this.a,i=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=i*t.a+this.d*t.c,this.d=i*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this}decompose(t){const e=this.a,r=this.b,i=this.c,s=this.d,o=t.pivot,a=-Math.atan2(-i,s),l=Math.atan2(r,e),c=Math.abs(a+l);return c<1e-5||Math.abs(sl-c)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=l),t.scale.x=Math.sqrt(e*e+r*r),t.scale.y=Math.sqrt(i*i+s*s),t.position.x=this.tx+(o.x*e+o.y*i),t.position.y=this.ty+(o.x*r+o.y*s),t}invert(){const t=this.a,e=this.b,r=this.c,i=this.d,s=this.tx,o=t*i-e*r;return this.a=i/o,this.b=-e/o,this.c=-r/o,this.d=t/o,this.tx=(r*this.ty-i*s)/o,this.ty=-(t*this.ty-e*s)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new H;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return ll.identity()}static get shared(){return al.identity()}}const al=new H,ll=new H,Kt=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],Zt=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Qt=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Jt=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Ir=[],ks=[],on=Math.sign;function ul(){for(let n=0;n<16;n++){const t=[];Ir.push(t);for(let e=0;e<16;e++){const r=on(Kt[n]*Kt[e]+Qt[n]*Zt[e]),i=on(Zt[n]*Kt[e]+Jt[n]*Zt[e]),s=on(Kt[n]*Qt[e]+Qt[n]*Jt[e]),o=on(Zt[n]*Qt[e]+Jt[n]*Jt[e]);for(let a=0;a<16;a++)if(Kt[a]===r&&Zt[a]===i&&Qt[a]===s&&Jt[a]===o){t.push(a);break}}}for(let n=0;n<16;n++){const t=new H;t.set(Kt[n],Zt[n],Qt[n],Jt[n],0,0),ks.push(t)}}ul();const tt={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:n=>Kt[n],uY:n=>Zt[n],vX:n=>Qt[n],vY:n=>Jt[n],inv:n=>n&8?n&15:-n&7,add:(n,t)=>Ir[n][t],sub:(n,t)=>Ir[n][tt.inv(t)],rotate180:n=>n^4,isVertical:n=>(n&3)===2,byDirection:(n,t)=>Math.abs(n)*2<=Math.abs(t)?t>=0?tt.S:tt.N:Math.abs(t)*2<=Math.abs(n)?n>0?tt.E:tt.W:t>0?n>0?tt.SE:tt.SW:n>0?tt.NE:tt.NW,matrixAppendRotationInv:(n,t,e=0,r=0)=>{const i=ks[tt.inv(t)];i.tx=e,i.ty=r,n.append(i)}},an=[new ut,new ut,new ut,new ut];class at{constructor(t=0,e=0,r=0,i=0){this.type="rectangle",this.x=Number(t),this.y=Number(e),this.width=Number(r),this.height=Number(i)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new at(0,0,0,0)}clone(){return new at(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height}strokeContains(t,e,r){const{width:i,height:s}=this;if(i<=0||s<=0)return!1;const o=this.x,a=this.y,l=o-r/2,c=o+i+r/2,u=a-r/2,h=a+s+r/2,f=o+r/2,d=o+i-r/2,m=a+r/2,g=a+s-r/2;return t>=l&&t<=c&&e>=u&&e<=h&&!(t>f&&t<d&&e>m&&e<g)}intersects(t,e){if(!e){const I=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=I)return!1;const w=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>w}const r=this.left,i=this.right,s=this.top,o=this.bottom;if(i<=r||o<=s)return!1;const a=an[0].set(t.left,t.top),l=an[1].set(t.left,t.bottom),c=an[2].set(t.right,t.top),u=an[3].set(t.right,t.bottom);if(c.x<=a.x||l.y<=a.y)return!1;const h=Math.sign(e.a*e.d-e.b*e.c);if(h===0||(e.apply(a,a),e.apply(l,l),e.apply(c,c),e.apply(u,u),Math.max(a.x,l.x,c.x,u.x)<=r||Math.min(a.x,l.x,c.x,u.x)>=i||Math.max(a.y,l.y,c.y,u.y)<=s||Math.min(a.y,l.y,c.y,u.y)>=o))return!1;const f=h*(l.y-a.y),d=h*(a.x-l.x),m=f*r+d*s,g=f*i+d*s,p=f*r+d*o,x=f*i+d*o;if(Math.max(m,g,p,x)<=f*a.x+d*a.y||Math.min(m,g,p,x)>=f*u.x+d*u.y)return!1;const v=h*(a.y-c.y),y=h*(c.x-a.x),_=v*r+y*s,z=v*i+y*s,E=v*r+y*o,T=v*i+y*o;return!(Math.max(_,z,E,T)<=v*a.x+y*a.y||Math.min(_,z,E,T)>=v*u.x+y*u.y)}pad(t=0,e=t){return this.x-=t,this.y-=e,this.width+=t*2,this.height+=e*2,this}fit(t){const e=Math.max(this.x,t.x),r=Math.min(this.x+this.width,t.x+t.width),i=Math.max(this.y,t.y),s=Math.min(this.y+this.height,t.y+t.height);return this.x=e,this.width=Math.max(r-e,0),this.y=i,this.height=Math.max(s-i,0),this}ceil(t=1,e=.001){const r=Math.ceil((this.x+this.width-e)*t)/t,i=Math.ceil((this.y+this.height-e)*t)/t;return this.x=Math.floor((this.x+e)*t)/t,this.y=Math.floor((this.y+e)*t)/t,this.width=r-this.x,this.height=i-this.y,this}enlarge(t){const e=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),i=Math.min(this.y,t.y),s=Math.max(this.y+this.height,t.y+t.height);return this.x=e,this.width=r-e,this.y=i,this.height=s-i,this}getBounds(t){return t=t||new at,t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const qn={default:-1};function it(n="default"){return qn[n]===void 0&&(qn[n]=-1),++qn[n]}const Mi={},Q="8.0.0";function U(n,t,e=3){if(Mi[t])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${n}`):(r=r.split(`
`).splice(e).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${n}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${n}`),console.warn(r))),Mi[t]=!0}const Es=()=>{};function Fi(n){return n+=n===0?1:0,--n,n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n+1}function Ii(n){return!(n&n-1)&&!!n}function cl(n){const t={};for(const e in n)n[e]!==void 0&&(t[e]=n[e]);return t}const Oi=Object.create(null);function hl(n){const t=Oi[n];return t===void 0&&(Oi[n]=it("resource")),t}const Ds=class Ls extends Tt{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...Ls.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){U(Q,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=hl(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Ds.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let fl=Ds;const Gs=class Ns extends Tt{constructor(t={}){super(),this.options=t,this.uid=it("textureSource"),this._resourceType="textureSource",this._resourceId=it("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...Ns.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new fl(cl(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){var e,r;this.style!==t&&((e=this._style)==null||e.off("change",this._onStyleChange,this),this._style=t,(r=this._style)==null||r.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=it("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,e,r){r=r||this._resolution,t=t||this.width,e=e||this.height;const i=Math.round(t*r),s=Math.round(e*r);return this.width=i/r,this.height=s/r,this._resolution=r,this.pixelWidth===i&&this.pixelHeight===s?!1:(this._refreshPOT(),this.pixelWidth=i,this.pixelHeight=s,this.emit("resize",this),this._resourceId=it("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Ii(this.pixelWidth)&&Ii(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};Gs.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let Pt=Gs;class ai extends Pt{constructor(t){const e=t.resource||new Float32Array(t.width*t.height*4);let r=t.format;r||(e instanceof Float32Array?r="rgba32float":e instanceof Int32Array||e instanceof Uint32Array?r="rgba32uint":e instanceof Int16Array||e instanceof Uint16Array?r="rgba16uint":(e instanceof Int8Array,r="bgra8unorm")),super({...t,resource:e,format:r}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}ai.extension=D.TextureSource;const Ri=new H;class dl{constructor(t,e){this.mapCoord=new H,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof e>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=e,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){var e;this.texture!==t&&((e=this._texture)==null||e.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,e){e===void 0&&(e=t);const r=this.mapCoord;for(let i=0;i<t.length;i+=2){const s=t[i],o=t[i+1];e[i]=s*r.a+o*r.c+r.tx,e[i+1]=s*r.b+o*r.d+r.ty}return e}update(){const t=this._texture;this._updateID++;const e=t.uvs;this.mapCoord.set(e.x1-e.x0,e.y1-e.y0,e.x3-e.x0,e.y3-e.y0,e.x0,e.y0);const r=t.orig,i=t.trim;i&&(Ri.set(r.width/i.width,0,0,r.height/i.height,-i.x/i.width,-i.y/i.height),this.mapCoord.append(Ri));const s=t.source,o=this.uClampFrame,a=this.clampMargin/s._resolution,l=this.clampOffset;return o[0]=(t.frame.x+a+l)/s.width,o[1]=(t.frame.y+a+l)/s.height,o[2]=(t.frame.x+t.frame.width-a+l)/s.width,o[3]=(t.frame.y+t.frame.height-a+l)/s.height,this.uClampOffset[0]=l/s.pixelWidth,this.uClampOffset[1]=l/s.pixelHeight,this.isSimple=t.frame.width===s.width&&t.frame.height===s.height&&t.rotate===0,!0}}class F extends Tt{constructor({source:t,label:e,frame:r,orig:i,trim:s,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:c}={}){if(super(),this.uid=it("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new at,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=e,this.source=(t==null?void 0:t.source)??new Pt,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:u,height:h}=this._source;this.frame.width=u,this.frame.height=h}this.orig=i||this.frame,this.trim=s,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=c||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new dl(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:e}=this,{width:r,height:i}=this._source,s=e.x/r,o=e.y/i,a=e.width/r,l=e.height/i;let c=this.rotate;if(c){const u=a/2,h=l/2,f=s+u,d=o+h;c=tt.add(c,tt.NW),t.x0=f+u*tt.uX(c),t.y0=d+h*tt.uY(c),c=tt.add(c,2),t.x1=f+u*tt.uX(c),t.y1=d+h*tt.uY(c),c=tt.add(c,2),t.x2=f+u*tt.uX(c),t.y2=d+h*tt.uY(c),c=tt.add(c,2),t.x3=f+u*tt.uX(c),t.y3=d+h*tt.uY(c)}else t.x0=s,t.y0=o,t.x1=s+a,t.y1=o,t.x2=s+a,t.y2=o+l,t.x3=s,t.y3=o+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return U(Q,"Texture.baseTexture is now Texture.source"),this._source}}F.EMPTY=new F({label:"EMPTY",source:new Pt({label:"EMPTY"})});F.EMPTY.destroy=Es;F.WHITE=new F({source:new ai({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});F.WHITE.destroy=Es;function ml(n,t,e,r){const{width:i,height:s}=e.orig,o=e.trim;if(o){const a=o.width,l=o.height;n.minX=o.x-t._x*i-r,n.maxX=n.minX+a,n.minY=o.y-t._y*s-r,n.maxY=n.minY+l}else n.minX=-t._x*i-r,n.maxX=n.minX+i,n.minY=-t._y*s-r,n.maxY=n.minY+s}var pl={grad:.9,turn:360,rad:360/(2*Math.PI)},zt=function(n){return typeof n=="string"?n.length>0:typeof n=="number"},ot=function(n,t,e){return t===void 0&&(t=0),e===void 0&&(e=Math.pow(10,t)),Math.round(e*n)/e+0},mt=function(n,t,e){return t===void 0&&(t=0),e===void 0&&(e=1),n>e?e:n>t?n:t},$s=function(n){return(n=isFinite(n)?n%360:0)>0?n:n+360},Ui=function(n){return{r:mt(n.r,0,255),g:mt(n.g,0,255),b:mt(n.b,0,255),a:mt(n.a)}},Kn=function(n){return{r:ot(n.r),g:ot(n.g),b:ot(n.b),a:ot(n.a,3)}},gl=/^#([0-9a-f]{3,8})$/i,ln=function(n){var t=n.toString(16);return t.length<2?"0"+t:t},Vs=function(n){var t=n.r,e=n.g,r=n.b,i=n.a,s=Math.max(t,e,r),o=s-Math.min(t,e,r),a=o?s===t?(e-r)/o:s===e?2+(r-t)/o:4+(t-e)/o:0;return{h:60*(a<0?a+6:a),s:s?o/s*100:0,v:s/255*100,a:i}},Ws=function(n){var t=n.h,e=n.s,r=n.v,i=n.a;t=t/360*6,e/=100,r/=100;var s=Math.floor(t),o=r*(1-e),a=r*(1-(t-s)*e),l=r*(1-(1-t+s)*e),c=s%6;return{r:255*[r,a,o,o,l,r][c],g:255*[l,r,r,a,o,o][c],b:255*[o,o,l,r,r,a][c],a:i}},Bi=function(n){return{h:$s(n.h),s:mt(n.s,0,100),l:mt(n.l,0,100),a:mt(n.a)}},ki=function(n){return{h:ot(n.h),s:ot(n.s),l:ot(n.l),a:ot(n.a,3)}},Ei=function(n){return Ws((e=(t=n).s,{h:t.h,s:(e*=((r=t.l)<50?r:100-r)/100)>0?2*e/(r+e)*100:0,v:r+e,a:t.a}));var t,e,r},We=function(n){return{h:(t=Vs(n)).h,s:(i=(200-(e=t.s))*(r=t.v)/100)>0&&i<200?e*r/100/(i<=100?i:200-i)*100:0,l:i/2,a:t.a};var t,e,r,i},xl=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,vl=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,yl=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,_l=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Or={string:[[function(n){var t=gl.exec(n);return t?(n=t[1]).length<=4?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:n.length===4?ot(parseInt(n[3]+n[3],16)/255,2):1}:n.length===6||n.length===8?{r:parseInt(n.substr(0,2),16),g:parseInt(n.substr(2,2),16),b:parseInt(n.substr(4,2),16),a:n.length===8?ot(parseInt(n.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(n){var t=yl.exec(n)||_l.exec(n);return t?t[2]!==t[4]||t[4]!==t[6]?null:Ui({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(n){var t=xl.exec(n)||vl.exec(n);if(!t)return null;var e,r,i=Bi({h:(e=t[1],r=t[2],r===void 0&&(r="deg"),Number(e)*(pl[r]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Ei(i)},"hsl"]],object:[[function(n){var t=n.r,e=n.g,r=n.b,i=n.a,s=i===void 0?1:i;return zt(t)&&zt(e)&&zt(r)?Ui({r:Number(t),g:Number(e),b:Number(r),a:Number(s)}):null},"rgb"],[function(n){var t=n.h,e=n.s,r=n.l,i=n.a,s=i===void 0?1:i;if(!zt(t)||!zt(e)||!zt(r))return null;var o=Bi({h:Number(t),s:Number(e),l:Number(r),a:Number(s)});return Ei(o)},"hsl"],[function(n){var t=n.h,e=n.s,r=n.v,i=n.a,s=i===void 0?1:i;if(!zt(t)||!zt(e)||!zt(r))return null;var o=function(a){return{h:$s(a.h),s:mt(a.s,0,100),v:mt(a.v,0,100),a:mt(a.a)}}({h:Number(t),s:Number(e),v:Number(r),a:Number(s)});return Ws(o)},"hsv"]]},Di=function(n,t){for(var e=0;e<t.length;e++){var r=t[e][0](n);if(r)return[r,t[e][1]]}return[null,void 0]},bl=function(n){return typeof n=="string"?Di(n.trim(),Or.string):typeof n=="object"&&n!==null?Di(n,Or.object):[null,void 0]},Zn=function(n,t){var e=We(n);return{h:e.h,s:mt(e.s+100*t,0,100),l:e.l,a:e.a}},Qn=function(n){return(299*n.r+587*n.g+114*n.b)/1e3/255},Li=function(n,t){var e=We(n);return{h:e.h,s:e.s,l:mt(e.l+100*t,0,100),a:e.a}},Rr=function(){function n(t){this.parsed=bl(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return n.prototype.isValid=function(){return this.parsed!==null},n.prototype.brightness=function(){return ot(Qn(this.rgba),2)},n.prototype.isDark=function(){return Qn(this.rgba)<.5},n.prototype.isLight=function(){return Qn(this.rgba)>=.5},n.prototype.toHex=function(){return t=Kn(this.rgba),e=t.r,r=t.g,i=t.b,o=(s=t.a)<1?ln(ot(255*s)):"","#"+ln(e)+ln(r)+ln(i)+o;var t,e,r,i,s,o},n.prototype.toRgb=function(){return Kn(this.rgba)},n.prototype.toRgbString=function(){return t=Kn(this.rgba),e=t.r,r=t.g,i=t.b,(s=t.a)<1?"rgba("+e+", "+r+", "+i+", "+s+")":"rgb("+e+", "+r+", "+i+")";var t,e,r,i,s},n.prototype.toHsl=function(){return ki(We(this.rgba))},n.prototype.toHslString=function(){return t=ki(We(this.rgba)),e=t.h,r=t.s,i=t.l,(s=t.a)<1?"hsla("+e+", "+r+"%, "+i+"%, "+s+")":"hsl("+e+", "+r+"%, "+i+"%)";var t,e,r,i,s},n.prototype.toHsv=function(){return t=Vs(this.rgba),{h:ot(t.h),s:ot(t.s),v:ot(t.v),a:ot(t.a,3)};var t},n.prototype.invert=function(){return bt({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},n.prototype.saturate=function(t){return t===void 0&&(t=.1),bt(Zn(this.rgba,t))},n.prototype.desaturate=function(t){return t===void 0&&(t=.1),bt(Zn(this.rgba,-t))},n.prototype.grayscale=function(){return bt(Zn(this.rgba,-1))},n.prototype.lighten=function(t){return t===void 0&&(t=.1),bt(Li(this.rgba,t))},n.prototype.darken=function(t){return t===void 0&&(t=.1),bt(Li(this.rgba,-t))},n.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},n.prototype.alpha=function(t){return typeof t=="number"?bt({r:(e=this.rgba).r,g:e.g,b:e.b,a:t}):ot(this.rgba.a,3);var e},n.prototype.hue=function(t){var e=We(this.rgba);return typeof t=="number"?bt({h:t,s:e.s,l:e.l,a:e.a}):ot(e.h)},n.prototype.isEqual=function(t){return this.toHex()===bt(t).toHex()},n}(),bt=function(n){return n instanceof Rr?n:new Rr(n)},Gi=[],Sl=function(n){n.forEach(function(t){Gi.indexOf(t)<0&&(t(Rr,Or),Gi.push(t))})};function wl(n,t){var e={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var i in e)r[e[i]]=i;var s={};n.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,c=r[this.toHex()];if(c)return c;if(o!=null&&o.closest){var u=this.toRgb(),h=1/0,f="black";if(!s.length)for(var d in e)s[d]=new n(e[d]).toRgb();for(var m in e){var g=(a=u,l=s[m],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));g<h&&(h=g,f=m)}return f}},t.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":e[a];return l?new n(l).toRgb():null},"name"])}Sl([wl]);const Ae=class Ne{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof Ne)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._normalize(t),this._value=this._cloneSource(t))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,e){const r=typeof t;if(r!==typeof e)return!1;if(r==="number"||r==="string"||t instanceof Number)return t===e;if(Array.isArray(t)&&Array.isArray(e)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(e))return t.length!==e.length?!1:t.every((s,o)=>s===e[o]);if(t!==null&&e!==null){const s=Object.keys(t),o=Object.keys(e);return s.length!==o.length?!1:s.every(a=>t[a]===e[a])}return t===e}toRgba(){const[t,e,r,i]=this._components;return{r:t,g:e,b:r,a:i}}toRgb(){const[t,e,r]=this._components;return{r:t,g:e,b:r}}toRgbaString(){const[t,e,r]=this.toUint8RgbArray();return`rgba(${t},${e},${r},${this.alpha})`}toUint8RgbArray(t){const[e,r,i]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb,t[0]=Math.round(e*255),t[1]=Math.round(r*255),t[2]=Math.round(i*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t=t||this._arrayRgba;const[e,r,i,s]=this._components;return t[0]=e,t[1]=r,t[2]=i,t[3]=s,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb;const[e,r,i]=this._components;return t[0]=e,t[1]=r,t[2]=i,t}toNumber(){return this._int}toBgrNumber(){const[t,e,r]=this.toUint8RgbArray();return(r<<16)+(e<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[e,r,i,s]=Ne._temp.setValue(t)._components;return this._components[0]*=e,this._components[1]*=r,this._components[2]*=i,this._components[3]*=s,this._refreshInt(),this._value=null,this}premultiply(t,e=!0){return e&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,e=!0){if(t===1)return(255<<24)+this._int;if(t===0)return e?0:this._int;let r=this._int>>16&255,i=this._int>>8&255,s=this._int&255;return e&&(r=r*t+.5|0,i=i*t+.5|0,s=s*t+.5|0),(t*255<<24)+(r<<16)+(i<<8)+s}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const e=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-e.length)+e}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let e,r,i,s;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const o=t;e=(o>>16&255)/255,r=(o>>8&255)/255,i=(o&255)/255,s=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[e,r,i,s=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[e,r,i,s=255]=t,e/=255,r/=255,i/=255,s/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const a=Ne.HEX_PATTERN.exec(t);a&&(t=`#${a[2]}`)}const o=bt(t);o.isValid()&&({r:e,g:r,b:i,a:s}=o.rgba,e/=255,r/=255,i/=255)}if(e!==void 0)this._components[0]=e,this._components[1]=r,this._components[2]=i,this._components[3]=s,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,e,r]=this._components;this._int=(t*255<<16)+(e*255<<8)+(r*255|0)}_clamp(t,e=0,r=1){return typeof t=="number"?Math.min(Math.max(t,e),r):(t.forEach((i,s)=>{t[s]=Math.min(Math.max(i,e),r)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof Ne||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};Ae.shared=new Ae;Ae._temp=new Ae;Ae.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let j=Ae;const Cl={cullArea:null,cullable:!1,cullableChildren:!0};function Al(n,t,e){const r=n.length;let i;if(t>=r||e===0)return;e=t+e>r?r-t:e;const s=r-e;for(i=t;i<s;++i)n[i]=n[i+e];n.length=s}const Tl={allowChildren:!0,removeChildren(n=0,t){const e=t??this.children.length,r=e-n,i=[];if(r>0&&r<=e){for(let o=e-1;o>=n;o--){const a=this.children[o];a&&(i.push(a),a.parent=null)}Al(this.children,n,e);const s=this.renderGroup||this.parentRenderGroup;s&&s.removeChildren(i);for(let o=0;o<i.length;++o)this.emit("childRemoved",i[o],this,o),i[o].emit("removed",this);return i}else if(r===0&&this.children.length===0)return i;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(n){const t=this.getChildAt(n);return this.removeChild(t)},getChildAt(n){if(n<0||n>=this.children.length)throw new Error(`getChildAt: Index (${n}) does not exist.`);return this.children[n]},setChildIndex(n,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(n),this.addChildAt(n,t)},getChildIndex(n){const t=this.children.indexOf(n);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(n,t){this.allowChildren||U(Q,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:e}=this;if(t<0||t>e.length)throw new Error(`${n}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);if(n.parent){const i=n.parent.children.indexOf(n);if(n.parent===this&&i===t)return n;i!==-1&&n.parent.children.splice(i,1)}t===e.length?e.push(n):e.splice(t,0,n),n.parent=this,n.didChange=!0,n.didViewUpdate=!1,n._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(n),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",n,this,t),n.emit("added",this),n},swapChildren(n,t){if(n===t)return;const e=this.getChildIndex(n),r=this.getChildIndex(t);this.children[e]=t,this.children[r]=n},removeFromParent(){var n;(n=this.parent)==null||n.removeChild(this)}};class Ni{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class li{constructor(t,e){this._pool=[],this._count=0,this._index=0,this._classType=t,e&&this.prepopulate(e)}prepopulate(t){for(let e=0;e<t;e++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){var r;let e;return this._index>0?e=this._pool[--this._index]:e=new this._classType,(r=e.init)==null||r.call(e,t),e}return(t){var e;(e=t.reset)==null||e.call(t),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}}class Pl{constructor(){this._poolsByClass=new Map}prepopulate(t,e){this.getPool(t).prepopulate(e)}get(t,e){return this.getPool(t).get(e)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new li(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(e=>{const r=t[e._classType.name]?e._classType.name+e._classType.ID:e._classType.name;t[r]={free:e.totalFree,used:e.totalUsed,size:e.totalSize}}),t}}const Ot=new Pl;class zl{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let e=0;e<this._tests.length;e++){const r=this._tests[e];if(r.test(t))return Ot.get(r.maskClass,t)}return t}returnMaskEffect(t){Ot.return(t)}}const Ur=new zl;gt.handleByList(D.MaskEffect,Ur._effectClasses);const Ml={_maskEffect:null,_filterEffect:null,effects:[],addEffect(n){if(this.effects.indexOf(n)!==-1)return;this.effects.push(n),this.effects.sort((r,i)=>r.priority-i.priority);const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0),this._updateIsSimple()},removeEffect(n){const t=this.effects.indexOf(n);t!==-1&&(this.effects.splice(t,1),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateIsSimple())},set mask(n){const t=this._maskEffect;(t==null?void 0:t.mask)!==n&&(t&&(this.removeEffect(t),Ur.returnMaskEffect(t),this._maskEffect=null),n!=null&&(this._maskEffect=Ur.getMaskEffect(n),this.addEffect(this._maskEffect)))},get mask(){var n;return(n=this._maskEffect)==null?void 0:n.mask},set filters(n){var s;!Array.isArray(n)&&n&&(n=[n]);const t=this._filterEffect||(this._filterEffect=new Ni);n=n;const e=(n==null?void 0:n.length)>0,r=((s=t.filters)==null?void 0:s.length)>0,i=e!==r;n=Array.isArray(n)?n.slice(0):n,t.filters=Object.freeze(n),i&&(e?this.addEffect(t):(this.removeEffect(t),t.filters=n??null))},get filters(){var n;return(n=this._filterEffect)==null?void 0:n.filters},set filterArea(n){this._filterEffect||(this._filterEffect=new Ni),this._filterEffect.filterArea=n},get filterArea(){var n;return(n=this._filterEffect)==null?void 0:n.filterArea}},Fl={label:null,get name(){return U(Q,"Container.name property has been removed, use Container.label instead"),this.label},set name(n){U(Q,"Container.name property has been removed, use Container.label instead"),this.label=n},getChildByName(n,t=!1){return this.getChildByLabel(n,t)},getChildByLabel(n,t=!1){const e=this.children;for(let r=0;r<e.length;r++){const i=e[r];if(i.label===n||n instanceof RegExp&&n.test(i.label))return i}if(t)for(let r=0;r<e.length;r++){const s=e[r].getChildByLabel(n,!0);if(s)return s}return null},getChildrenByLabel(n,t=!1,e=[]){const r=this.children;for(let i=0;i<r.length;i++){const s=r[i];(s.label===n||n instanceof RegExp&&n.test(s.label))&&e.push(s)}if(t)for(let i=0;i<r.length;i++)r[i].getChildrenByLabel(n,!0,e);return e}},$i=new H;class Ct{constructor(t=1/0,e=1/0,r=-1/0,i=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=$i,this.minX=t,this.minY=e,this.maxX=r,this.maxY=i}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new at);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=$i,this}set(t,e,r,i){this.minX=t,this.minY=e,this.maxX=r,this.maxY=i}addFrame(t,e,r,i,s){s||(s=this.matrix);const o=s.a,a=s.b,l=s.c,c=s.d,u=s.tx,h=s.ty;let f=this.minX,d=this.minY,m=this.maxX,g=this.maxY,p=o*t+l*e+u,x=a*t+c*e+h;p<f&&(f=p),x<d&&(d=x),p>m&&(m=p),x>g&&(g=x),p=o*r+l*e+u,x=a*r+c*e+h,p<f&&(f=p),x<d&&(d=x),p>m&&(m=p),x>g&&(g=x),p=o*t+l*i+u,x=a*t+c*i+h,p<f&&(f=p),x<d&&(d=x),p>m&&(m=p),x>g&&(g=x),p=o*r+l*i+u,x=a*r+c*i+h,p<f&&(f=p),x<d&&(d=x),p>m&&(m=p),x>g&&(g=x),this.minX=f,this.minY=d,this.maxX=m,this.maxY=g}addRect(t,e){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,e)}addBounds(t,e){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,e)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const e=this.minX,r=this.minY,i=this.maxX,s=this.maxY,{a:o,b:a,c:l,d:c,tx:u,ty:h}=t;let f=o*e+l*r+u,d=a*e+c*r+h;this.minX=f,this.minY=d,this.maxX=f,this.maxY=d,f=o*i+l*r+u,d=a*i+c*r+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*e+l*s+u,d=a*e+c*s+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*i+l*s+u,d=a*i+c*s+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,e,r,i){return this.minX<t&&(this.minX=t),this.maxX>e&&(this.maxX=e),this.minY<r&&(this.minY=r),this.maxY>i&&(this.maxY=i),this}pad(t,e=t){return this.minX-=t,this.maxX+=t,this.minY-=e,this.maxY+=e,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Ct(this.minX,this.minY,this.maxX,this.maxY)}scale(t,e=t){return this.minX*=t,this.minY*=e,this.maxX*=t,this.maxY*=e,this}get x(){return this.minX}set x(t){const e=this.maxX-this.minX;this.minX=t,this.maxX=t+e}get y(){return this.minY}set y(t){const e=this.maxY-this.minY;this.minY=t,this.maxY=t+e}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,e,r,i){let s=this.minX,o=this.minY,a=this.maxX,l=this.maxY;i||(i=this.matrix);const c=i.a,u=i.b,h=i.c,f=i.d,d=i.tx,m=i.ty;for(let g=e;g<r;g+=2){const p=t[g],x=t[g+1],v=c*p+h*x+d,y=u*p+f*x+m;s=v<s?v:s,o=y<o?y:o,a=v>a?v:a,l=y>l?y:l}this.minX=s,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(t,e){return this.minX<=t&&this.minY<=e&&this.maxX>=t&&this.maxY>=e}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}const Rt=new li(H),Te=new li(Ct);function Xs(n,t,e){e.clear();let r,i;return n.parent?t?r=n.parent.worldTransform:(i=Rt.get().identity(),r=On(n,i)):r=H.IDENTITY,Ys(n,e,r,t),i&&Rt.return(i),e.isValid||e.set(0,0,0,0),e}function Ys(n,t,e,r){var a,l;if(!n.visible||!n.measurable)return;let i;r?i=n.worldTransform:(n.updateLocalTransform(),i=Rt.get(),i.appendFrom(n.localTransform,e));const s=t,o=!!n.effects.length;if(o&&(t=Te.get().clear()),n.boundsArea)t.addRect(n.boundsArea,i);else{n.addBounds&&(t.matrix=i,n.addBounds(t));for(let c=0;c<n.children.length;c++)Ys(n.children[c],t,i,r)}if(o){for(let c=0;c<n.effects.length;c++)(l=(a=n.effects[c]).addBounds)==null||l.call(a,t);s.addBounds(t,H.IDENTITY),Te.return(t)}r||Rt.return(i)}function On(n,t){const e=n.parent;return e&&(On(e,t),e.updateLocalTransform(),t.append(e.localTransform)),t}let Jn=0;const Vi=500;function ct(...n){Jn!==Vi&&(Jn++,Jn===Vi?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...n))}function Hs(n,t,e){return t.clear(),e||(e=H.IDENTITY),js(n,t,e,n,!0),t.isValid||t.set(0,0,0,0),t}function js(n,t,e,r,i){var l,c;let s;if(i)s=Rt.get(),s=e.copyTo(s);else{if(!n.visible||!n.measurable)return;n.updateLocalTransform();const u=n.localTransform;s=Rt.get(),s.appendFrom(u,e)}const o=t,a=!!n.effects.length;if(a&&(t=Te.get().clear()),n.boundsArea)t.addRect(n.boundsArea,s);else{n.renderPipeId&&(t.matrix=s,n.addBounds(t));const u=n.children;for(let h=0;h<u.length;h++)js(u[h],t,s,r,!1)}if(a){for(let u=0;u<n.effects.length;u++)(c=(l=n.effects[u]).addLocalBounds)==null||c.call(l,t,r);o.addBounds(t,H.IDENTITY),Te.return(t)}Rt.return(s)}function qs(n,t){const e=n.children;for(let r=0;r<e.length;r++){const i=e[r],s=(i.uid&255)<<24|i._didChangeId&16777215;t.data[t.index]!==s&&(t.data[t.index]=s,t.didChange=!0),t.index++,i.children.length&&qs(i,t)}return t.didChange}const Il=new H,Ol={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(n,t){const e=Math.sign(this.scale.x)||1;t!==0?this.scale.x=n/t*e:this.scale.x=e},_setHeight(n,t){const e=Math.sign(this.scale.y)||1;t!==0?this.scale.y=n/t*e:this.scale.y=e},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Ct});const n=this._localBoundsCacheData;return n.index=1,n.didChange=!1,n.data[0]!==this._didChangeId>>12&&(n.didChange=!0,n.data[0]=this._didChangeId>>12),qs(this,n),n.didChange&&Hs(this,n.localBounds,Il),n.localBounds},getBounds(n,t){return Xs(this,n,t||new Ct)}},Rl={_onRender:null,set onRender(n){const t=this.renderGroup||this.parentRenderGroup;if(!n){this._onRender&&(t==null||t.removeOnRender(this)),this._onRender=null;return}this._onRender||t==null||t.addOnRender(this),this._onRender=n},get onRender(){return this._onRender}},Ul={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(n){this._zIndex!==n&&(this._zIndex=n,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(Bl))}};function Bl(n,t){return n._zIndex-t._zIndex}const kl={getGlobalPosition(n=new ut,t=!1){return this.parent?this.parent.toGlobal(this._position,n,t):(n.x=this._position.x,n.y=this._position.y),n},toGlobal(n,t,e=!1){if(!e){this.updateLocalTransform();const r=On(this,new H);return r.append(this.localTransform),r.apply(n,t)}return this.worldTransform.apply(n,t)},toLocal(n,t,e,r){if(t&&(n=t.toGlobal(n,e,r)),!r){this.updateLocalTransform();const i=On(this,new H);return i.append(this.localTransform),i.applyInverse(n,e)}return this.worldTransform.applyInverse(n,e)}};class Ks{constructor(){this.uid=it("instructionSet"),this.instructions=[],this.instructionSize=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}class El{constructor(t){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new H,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new Ks,this._onRenderContainers=[],this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const e=t.children;for(let r=0;r<e.length;r++)this.addChild(e[r])}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const e=this.renderGroupChildren.indexOf(t);e>-1&&this.renderGroupChildren.splice(e,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const e=t.children;for(let r=0;r<e.length;r++)this.addChild(e[r])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const e=t.children;for(let r=0;r<e.length;r++)this.removeChild(e[r])}removeChildren(t){for(let e=0;e<t.length;e++)this.removeChild(t[e])}onChildUpdate(t){let e=this.childrenToUpdate[t.relativeRenderGroupDepth];e||(e=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),e.list[e.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(t.didViewUpdate=!1,this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t))}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}getChildren(t=[]){const e=this.root.children;for(let r=0;r<e.length;r++)this._getChildren(e[r],t);return t}_getChildren(t,e=[]){if(e.push(t),t.renderGroup)return e;const r=t.children;for(let i=0;i<r.length;i++)this._getChildren(r[i],e);return e}}function Dl(n,t,e={}){for(const r in t)!e[r]&&t[r]!==void 0&&(n[r]=t[r])}const tr=new ht(null),er=new ht(null),nr=new ht(null,1,1),Wi=1,Ll=2,rr=4;class Z extends Tt{constructor(t={}){var e,r;super(),this.uid=it("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new H,this.relativeGroupTransform=new H,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new ht(this,0,0),this._scale=nr,this._pivot=er,this._skew=tr,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didChangeId=0,this._didLocalTransformChangeId=-1,Dl(this,t,{children:!0,parent:!0,effects:!0}),(e=t.children)==null||e.forEach(i=>this.addChild(i)),this.effects=[],(r=t.parent)==null||r.addChild(this)}static mixin(t){Object.defineProperties(Z.prototype,Object.getOwnPropertyDescriptors(t))}addChild(...t){if(this.allowChildren||U(Q,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let i=0;i<t.length;i++)this.addChild(t[i]);return t[0]}const e=t[0];if(e.parent===this)return this.children.splice(this.children.indexOf(e),1),this.children.push(e),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),e;e.parent&&e.parent.removeChild(e),this.children.push(e),this.sortableChildren&&(this.sortDirty=!0),e.parent=this,e.didChange=!0,e.didViewUpdate=!1,e._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(e),this.emit("childAdded",e,this,this.children.length-1),e.emit("added",this),this._didChangeId+=4096,e._zIndex!==0&&e.depthOfChildModified(),e}removeChild(...t){if(t.length>1){for(let i=0;i<t.length;i++)this.removeChild(t[i]);return t[0]}const e=t[0],r=this.children.indexOf(e);return r>-1&&(this._didChangeId+=4096,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(e):this.parentRenderGroup&&this.parentRenderGroup.removeChild(e),e.parent=null,this.emit("childRemoved",e,this,r),e.emit("removed",this)),e}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didChangeId++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){if(this.renderGroup&&t===!1)throw new Error("[Pixi] cannot undo a render group just yet");t&&this.enableRenderGroup()}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t&&t.removeChild(this),this.renderGroup=new El(this),t&&t.addChild(this),this._updateIsSimple(),this.groupTransform=H.IDENTITY}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new H),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*ol}set angle(t){this.rotation=t*Ce}get pivot(){return this._pivot===er&&(this._pivot=new ht(this,0,0)),this._pivot}set pivot(t){this._pivot===er&&(this._pivot=new ht(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===tr&&(this._skew=new ht(this,0,0)),this._skew}set skew(t){this._skew===tr&&(this._skew=new ht(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===nr&&(this._scale=new ht(this,1,1)),this._scale}set scale(t){this._scale===nr&&(this._scale=new ht(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const e=this.getLocalBounds().width;this._setWidth(t,e)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const e=this.getLocalBounds().height;this._setHeight(t,e)}getSize(t){t||(t={});const e=this.getLocalBounds();return t.width=Math.abs(this.scale.x*e.width),t.height=Math.abs(this.scale.y*e.height),t}setSize(t,e){const r=this.getLocalBounds();let i,s;typeof t!="object"?(i=t,s=e??t):(i=t.width,s=t.height??t.width),i!==void 0&&this._setWidth(i,r.width),s!==void 0&&this._setHeight(s,r.height)}_updateSkew(){const t=this._rotation,e=this._skew;this._cx=Math.cos(t+e._y),this._sx=Math.sin(t+e._y),this._cy=-Math.sin(t-e._x),this._sy=Math.cos(t-e._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){if((this._didLocalTransformChangeId&15)===this._didChangeId)return;this._didLocalTransformChangeId=this._didChangeId;const t=this.localTransform,e=this._scale,r=this._pivot,i=this._position,s=e._x,o=e._y,a=r._x,l=r._y;t.a=this._cx*s,t.b=this._sx*s,t.c=this._cy*o,t.d=this._sy*o,t.tx=i._x-(a*t.a+l*t.c),t.ty=i._y-(a*t.b+l*t.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=Wi,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const r=j.shared.setValue(t??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=Wi,this._onUpdate())}get tint(){const t=this.localColor;return((t&255)<<16)+(t&65280)+(t>>16&255)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Ll,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const e=t?1:0;(this.localDisplayStatus&2)>>1!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=rr,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const e=t?1:0;(this.localDisplayStatus&4)>>2!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=rr,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const e=t?1:0;(this.localDisplayStatus&1)!==e&&(this._updateFlags|=rr,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0;const e=this.removeChildren(0,this.children.length);if(this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.children)for(let i=0;i<e.length;++i)e[i].destroy(t)}}Z.mixin(Tl);Z.mixin(kl);Z.mixin(Rl);Z.mixin(Ol);Z.mixin(Ml);Z.mixin(Fl);Z.mixin(Ul);Z.mixin(Cl);class et extends Z{constructor(t=F.EMPTY){t instanceof F&&(t={texture:t});const{texture:e=F.EMPTY,anchor:r,roundPixels:i,width:s,height:o,...a}=t;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._didSpriteUpdate=!1,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this._sourceBoundsDirty=!0,this._roundPixels=0,this._anchor=new ht({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:e.defaultAnchor&&(this.anchor=e.defaultAnchor),this.texture=e,this.allowChildren=!1,this.roundPixels=i??!1,s&&(this.width=s),o&&(this.height=o)}static from(t,e=!1){return t instanceof F?new et(t):new et(F.from(t,e))}set texture(t){t||(t=F.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(t){const e=this.sourceBounds;return t.x>=e.maxX&&t.x<=e.minX&&t.y>=e.maxY&&t.y<=e.minY}addBounds(t){const e=this._texture.trim?this.sourceBounds:this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}onViewUpdate(){if(this._didChangeId+=4096,this._didSpriteUpdate=!0,this._sourceBoundsDirty=this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}_updateBounds(){ml(this._bounds,this._anchor,this._texture,0)}_updateSourceBounds(){const t=this._anchor,e=this._texture,r=this._sourceBounds,{width:i,height:s}=e.orig;r.maxX=-t._x*i,r.minX=r.maxX+i,r.maxY=-t._y*s,r.minY=r.maxY+s}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const r=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(r)}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width)}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,e){let r,i;typeof t!="object"?(r=t,i=e??t):(r=t.width,i=t.height??t.width),r!==void 0&&this._setWidth(r,this._texture.orig.width),i!==void 0&&this._setHeight(i,this._texture.orig.height)}}const Gl=new Ct;function Zs(n,t,e){const r=Gl;n.measurable=!0,Xs(n,e,r),t.addBoundsMask(r),n.measurable=!1}function Qs(n,t,e){const r=Te.get();n.measurable=!0;const i=Rt.get().identity(),s=Js(n,e,i);Hs(n,r,s),n.measurable=!1,t.addBoundsMask(r),Rt.return(i),Te.return(r)}function Js(n,t,e){return n?(n!==t&&(Js(n.parent,t,e),n.updateLocalTransform(),e.append(n.localTransform)),e):(ct("Mask bounds, renderable is not inside the root container"),e)}class to{constructor(t){this.priority=0,this.pipe="alphaMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof et),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,e){Zs(this.mask,t,e)}addLocalBounds(t,e){Qs(this.mask,t,e)}containsPoint(t,e){const r=this.mask;return e(r,t)}destroy(){this.reset()}static test(t){return t instanceof et}}to.extension=D.MaskEffect;class eo{constructor(t){this.priority=0,this.pipe="colorMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}eo.extension=D.MaskEffect;class no{constructor(t){this.priority=0,this.pipe="stencilMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,e){Zs(this.mask,t,e)}addLocalBounds(t,e){Qs(this.mask,t,e)}containsPoint(t,e){const r=this.mask;return e(r,t)}destroy(){this.reset()}static test(t){return t instanceof Z}}no.extension=D.MaskEffect;const Nl={createCanvas:(n,t)=>{const e=document.createElement("canvas");return e.width=n,e.height=t,e},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(n,t)=>fetch(n,t),parseXML:n=>new DOMParser().parseFromString(n,"text/xml")};let Xi=Nl;const lt={get(){return Xi},set(n){Xi=n}};class ro extends Pt{constructor(t){t.resource||(t.resource=lt.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity;const e=t.resource;(this.pixelWidth!==e.width||this.pixelWidth!==e.height)&&this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,e=this.height,r=this._resolution){const i=super.resize(t,e,r);return i&&this.resizeCanvas(),i}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}}ro.extension=D.TextureSource;class ze extends Pt{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const e=lt.get().createCanvas(t.resource.width,t.resource.height);e.getContext("2d").drawImage(t.resource,0,0),t.resource=e,ct("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap}}ze.extension=D.TextureSource;var Br=(n=>(n[n.INTERACTION=50]="INTERACTION",n[n.HIGH=25]="HIGH",n[n.NORMAL=0]="NORMAL",n[n.LOW=-25]="LOW",n[n.UTILITY=-50]="UTILITY",n))(Br||{});class ir{constructor(t,e=null,r=0,i=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=e,this.priority=r,this._once=i}match(t,e=null){return this._fn===t&&this._context===e}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const e=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),e}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const e=this.next;return this.next=t?null:e,this.previous=null,e}}const io=class dt{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new ir(null,null,1/0),this.deltaMS=1/dt.targetFPMS,this.elapsedMS=1/dt.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,e,r=Br.NORMAL){return this._addListener(new ir(t,e,r))}addOnce(t,e,r=Br.NORMAL){return this._addListener(new ir(t,e,r,!0))}_addListener(t){let e=this._head.next,r=this._head;if(!e)t.connect(r);else{for(;e;){if(t.priority>e.priority){t.connect(r);break}r=e,e=e.next}t.previous||t.connect(r)}return this._startIfPossible(),this}remove(t,e){let r=this._head.next;for(;r;)r.match(t,e)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,e=this._head;for(;e=e.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let e;if(t>this.lastTime){if(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){const s=t-this._lastFrame|0;if(s<this._minElapsedMS)return;this._lastFrame=t-s%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*dt.targetFPMS;const r=this._head;let i=r.next;for(;i;)i=i.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const e=Math.min(this.maxFPS,t),r=Math.min(Math.max(0,e)/1e3,dt.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3)}}static get shared(){if(!dt._shared){const t=dt._shared=new dt;t.autoStart=!0,t._protected=!0}return dt._shared}static get system(){if(!dt._system){const t=dt._system=new dt;t.autoStart=!0,t._protected=!0}return dt._system}};io.targetFPMS=.06;let un=io,sr;async function so(){return sr??(sr=(async()=>{var o;const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const e=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!e)return"premultiply-alpha-on-upload";const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const i=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e);const s=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,s),t.deleteFramebuffer(i),t.deleteTexture(r),(o=t.getExtension("WEBGL_lose_context"))==null||o.loseContext(),s[0]<=s[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),sr}const kn=class oo extends Pt{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...oo.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=un.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,e=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(e.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await so(),this._load=new Promise((r,i)=>{this.isValid?r(this):(this._resolve=r,this._reject=i,e.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(un.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(un.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(un.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||globalThis.VideoFrame&&t instanceof VideoFrame}};kn.extension=D.TextureSource;kn.defaultOptions={...Pt.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};kn.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let bn=kn;const yt=(n,t,e=!1)=>(Array.isArray(n)||(n=[n]),t?n.map(r=>typeof r=="string"||e?t(r):r):n);class $l{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const e=this._cache.get(t);return e||ct(`[Assets] Asset id ${t} was not found in the Cache`),e}set(t,e){const r=yt(t);let i;for(let l=0;l<this.parsers.length;l++){const c=this.parsers[l];if(c.test(e)){i=c.getCacheableAssets(r,e);break}}const s=new Map(Object.entries(i||{}));i||r.forEach(l=>{s.set(l,e)});const o=[...s.keys()],a={cacheKeys:o,keys:r};r.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const c=i?i[l]:e;this._cache.has(l)&&this._cache.get(l)!==c&&ct("[Cache] already has key:",l),this._cache.set(l,s.get(l))})}remove(t){if(!this._cacheMap.has(t)){ct(`[Assets] Asset id ${t} was not found in the Cache`);return}const e=this._cacheMap.get(t);e.cacheKeys.forEach(i=>{this._cache.delete(i)}),e.keys.forEach(i=>{this._cacheMap.delete(i)})}get parsers(){return this._parsers}}const ft=new $l,kr=[];gt.handleByList(D.TextureSource,kr);function Vl(n={}){const t=n&&n.resource,e=t?n.resource:n,r=t?n:{resource:n};for(let i=0;i<kr.length;i++){const s=kr[i];if(s.test(e))return new s(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function Wl(n={},t=!1){const e=n&&n.resource,r=e?n.resource:n,i=e?n:{resource:n};if(!t&&ft.has(r))return ft.get(r);const s=new F({source:Vl(i)});return s.on("destroy",()=>{ft.has(r)&&ft.remove(r)}),t||ft.set(r,s),s}function Xl(n,t=!1){return typeof n=="string"?ft.get(n):n instanceof Pt?new F({source:n}):Wl(n,t)}F.from=Xl;gt.add(to,eo,no,bn,ze,ro,ai);var le=(n=>(n[n.Low=0]="Low",n[n.Normal=1]="Normal",n[n.High=2]="High",n))(le||{});function vt(n){if(typeof n!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(n)}`)}function ke(n){return n.split("?")[0].split("#")[0]}function Yl(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Hl(n,t,e){return n.replace(new RegExp(Yl(t),"g"),e)}function jl(n,t){let e="",r=0,i=-1,s=0,o=-1;for(let a=0;a<=n.length;++a){if(a<n.length)o=n.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(e.length<2||r!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){const l=e.lastIndexOf("/");if(l!==e.length-1){l===-1?(e="",r=0):(e=e.slice(0,l),r=e.length-1-e.lastIndexOf("/")),i=a,s=0;continue}}else if(e.length===2||e.length===1){e="",r=0,i=a,s=0;continue}}}else e.length>0?e+=`/${n.slice(i+1,a)}`:e=n.slice(i+1,a),r=a-i-1;i=a,s=0}else o===46&&s!==-1?++s:s=-1}return e}const At={toPosix(n){return Hl(n,"\\","/")},isUrl(n){return/^https?:/.test(this.toPosix(n))},isDataUrl(n){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(n)},isBlobUrl(n){return n.startsWith("blob:")},hasProtocol(n){return/^[^/:]+:/.test(this.toPosix(n))},getProtocol(n){vt(n),n=this.toPosix(n);const t=/^file:\/\/\//.exec(n);if(t)return t[0];const e=/^[^/:]+:\/{0,2}/.exec(n);return e?e[0]:""},toAbsolute(n,t,e){if(vt(n),this.isDataUrl(n)||this.isBlobUrl(n))return n;const r=ke(this.toPosix(t??lt.get().getBaseUrl())),i=ke(this.toPosix(e??this.rootname(r)));return n=this.toPosix(n),n.startsWith("/")?At.join(i,n.slice(1)):this.isAbsolute(n)?n:this.join(r,n)},normalize(n){if(vt(n),n.length===0)return".";if(this.isDataUrl(n)||this.isBlobUrl(n))return n;n=this.toPosix(n);let t="";const e=n.startsWith("/");this.hasProtocol(n)&&(t=this.rootname(n),n=n.slice(t.length));const r=n.endsWith("/");return n=jl(n),n.length>0&&r&&(n+="/"),e?`/${n}`:t+n},isAbsolute(n){return vt(n),n=this.toPosix(n),this.hasProtocol(n)?!0:n.startsWith("/")},join(...n){if(n.length===0)return".";let t;for(let e=0;e<n.length;++e){const r=n[e];if(vt(r),r.length>0)if(t===void 0)t=r;else{const i=n[e-1]??"";this.joinExtensions.includes(this.extname(i).toLowerCase())?t+=`/../${r}`:t+=`/${r}`}}return t===void 0?".":this.normalize(t)},dirname(n){if(vt(n),n.length===0)return".";n=this.toPosix(n);let t=n.charCodeAt(0);const e=t===47;let r=-1,i=!0;const s=this.getProtocol(n),o=n;n=n.slice(s.length);for(let a=n.length-1;a>=1;--a)if(t=n.charCodeAt(a),t===47){if(!i){r=a;break}}else i=!1;return r===-1?e?"/":this.isUrl(o)?s+n:s:e&&r===1?"//":s+n.slice(0,r)},rootname(n){vt(n),n=this.toPosix(n);let t="";if(n.startsWith("/")?t="/":t=this.getProtocol(n),this.isUrl(n)){const e=n.indexOf("/",t.length);e!==-1?t=n.slice(0,e):t=n,t.endsWith("/")||(t+="/")}return t},basename(n,t){vt(n),t&&vt(t),n=ke(this.toPosix(n));let e=0,r=-1,i=!0,s;if(t!==void 0&&t.length>0&&t.length<=n.length){if(t.length===n.length&&t===n)return"";let o=t.length-1,a=-1;for(s=n.length-1;s>=0;--s){const l=n.charCodeAt(s);if(l===47){if(!i){e=s+1;break}}else a===-1&&(i=!1,a=s+1),o>=0&&(l===t.charCodeAt(o)?--o===-1&&(r=s):(o=-1,r=a))}return e===r?r=a:r===-1&&(r=n.length),n.slice(e,r)}for(s=n.length-1;s>=0;--s)if(n.charCodeAt(s)===47){if(!i){e=s+1;break}}else r===-1&&(i=!1,r=s+1);return r===-1?"":n.slice(e,r)},extname(n){vt(n),n=ke(this.toPosix(n));let t=-1,e=0,r=-1,i=!0,s=0;for(let o=n.length-1;o>=0;--o){const a=n.charCodeAt(o);if(a===47){if(!i){e=o+1;break}continue}r===-1&&(i=!1,r=o+1),a===46?t===-1?t=o:s!==1&&(s=1):t!==-1&&(s=-1)}return t===-1||r===-1||s===0||s===1&&t===r-1&&t===e+1?"":n.slice(t,r)},parse(n){vt(n);const t={root:"",dir:"",base:"",ext:"",name:""};if(n.length===0)return t;n=ke(this.toPosix(n));let e=n.charCodeAt(0);const r=this.isAbsolute(n);let i;t.root=this.rootname(n),r||this.hasProtocol(n)?i=1:i=0;let s=-1,o=0,a=-1,l=!0,c=n.length-1,u=0;for(;c>=i;--c){if(e=n.charCodeAt(c),e===47){if(!l){o=c+1;break}continue}a===-1&&(l=!1,a=c+1),e===46?s===-1?s=c:u!==1&&(u=1):s!==-1&&(u=-1)}return s===-1||a===-1||u===0||u===1&&s===a-1&&s===o+1?a!==-1&&(o===0&&r?t.base=t.name=n.slice(1,a):t.base=t.name=n.slice(o,a)):(o===0&&r?(t.name=n.slice(1,s),t.base=n.slice(1,a)):(t.name=n.slice(o,s),t.base=n.slice(o,a)),t.ext=n.slice(s,a)),t.dir=this.dirname(n),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function ao(n,t,e,r,i){const s=t[e];for(let o=0;o<s.length;o++){const a=s[o];e<t.length-1?ao(n.replace(r[e],a),t,e+1,r,i):i.push(n.replace(r[e],a))}}function ql(n){const t=/\{(.*?)\}/g,e=n.match(t),r=[];if(e){const i=[];e.forEach(s=>{const o=s.substring(1,s.length-1).split(",");i.push(o)}),ao(n,i,0,e,r)}else r.push(n);return r}const Rn=n=>!Array.isArray(n);class Me{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,e)=>`${t}${this._bundleIdConnector}${e}`,extractAssetIdFromBundle:(t,e)=>e.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(e=>{this._preferredOrder.push(e),e.priority||(e.priority=Object.keys(e.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const e=t;this._defaultSearchParams=Object.keys(e).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`).join("&")}}getAlias(t){const{alias:e,src:r}=t;return yt(e||r,s=>typeof s=="string"?s:Array.isArray(s)?s.map(o=>(o==null?void 0:o.src)??o):s!=null&&s.src?s.src:s,!0)}addManifest(t){this._manifest&&ct("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(e=>{this.addBundle(e.name,e.assets)})}addBundle(t,e){const r=[];let i=e;Array.isArray(e)||(i=Object.entries(e).map(([s,o])=>typeof o=="string"||Array.isArray(o)?{alias:s,src:o}:{alias:s,...o})),i.forEach(s=>{const o=s.src,a=s.alias;let l;if(typeof a=="string"){const c=this._createBundleAssetId(t,a);r.push(c),l=[a,c]}else{const c=a.map(u=>this._createBundleAssetId(t,u));r.push(...c),l=[...a,...c]}this.add({...s,alias:l,src:o})}),this._bundles[t]=r}add(t){const e=[];Array.isArray(t)?e.push(...t):e.push(t);let r;r=s=>{this.hasKey(s)&&ct(`[Resolver] already has key: ${s} overwriting`)},yt(e).forEach(s=>{const{src:o}=s;let{data:a,format:l,loadParser:c}=s;const u=yt(o).map(d=>typeof d=="string"?ql(d):Array.isArray(d)?d:[d]),h=this.getAlias(s);Array.isArray(h)?h.forEach(r):r(h);const f=[];u.forEach(d=>{d.forEach(m=>{let g={};if(typeof m!="object"){g.src=m;for(let p=0;p<this._parsers.length;p++){const x=this._parsers[p];if(x.test(m)){g=x.parse(m);break}}}else a=m.data??a,l=m.format??l,c=m.loadParser??c,g={...g,...m};if(!h)throw new Error(`[Resolver] alias is undefined for this asset: ${g.src}`);g=this._buildResolvedAsset(g,{aliases:h,data:a,format:l,loadParser:c}),f.push(g)})}),h.forEach(d=>{this._assetMap[d]=f})})}resolveBundle(t){const e=Rn(t);t=yt(t);const r={};return t.forEach(i=>{const s=this._bundles[i];if(s){const o=this.resolve(s),a={};for(const l in o){const c=o[l];a[this._extractAssetIdFromBundle(i,l)]=c}r[i]=a}}),e?r[t[0]]:r}resolveUrl(t){const e=this.resolve(t);if(typeof t!="string"){const r={};for(const i in e)r[i]=e[i].src;return r}return e.src}resolve(t){const e=Rn(t);t=yt(t);const r={};return t.forEach(i=>{if(!this._resolverHash[i])if(this._assetMap[i]){let s=this._assetMap[i];const o=this._getPreferredOrder(s);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const c=s.filter(u=>u[a]?u[a]===l:!1);c.length&&(s=c)})}),this._resolverHash[i]=s[0]}else this._resolverHash[i]=this._buildResolvedAsset({alias:[i],src:i},{});r[i]=this._resolverHash[i]}),e?r[t[0]]:r}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let e=0;e<t.length;e++){const r=t[0],i=this._preferredOrder.find(s=>s.params.format.includes(r.format));if(i)return i}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const e=/\?/.test(t)?"&":"?";return`${t}${e}${this._defaultSearchParams}`}_buildResolvedAsset(t,e){const{aliases:r,data:i,loadParser:s,format:o}=e;return(this._basePath||this._rootPath)&&(t.src=At.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=r??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...i||{},...t.data},t.loadParser=s??t.loadParser,t.format=o??t.format??Kl(t.src),t}}Me.RETINA_PREFIX=/@([0-9\.]+)x/;function Kl(n){return n.split(".").pop().split("?").shift().split("#").shift()}const Yi=(n,t)=>{const e=t.split("?")[1];return e&&(n+=`?${e}`),n},lo=class $e{constructor(t,e){this.linkedSheets=[],this._texture=t instanceof F?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=e;const r=parseFloat(e.meta.scale);r?(this.resolution=r,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=$e.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let e=t;const r=$e.BATCH_SIZE;for(;e-t<r&&e<this._frameKeys.length;){const i=this._frameKeys[e],s=this._frames[i],o=s.frame;if(o){let a=null,l=null;const c=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,u=new at(0,0,Math.floor(c.w)/this.resolution,Math.floor(c.h)/this.resolution);s.rotated?a=new at(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new at(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(l=new at(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[i]=new F({source:this.textureSource,frame:a,orig:u,trim:l,rotate:s.rotated?2:0,defaultAnchor:s.anchor,defaultBorders:s.borders,label:i.toString()})}e++}}_processAnimations(){const t=this.data.animations||{};for(const e in t){this.animations[e]=[];for(let r=0;r<t[e].length;r++){const i=t[e][r];this.animations[e].push(this.textures[i])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*$e.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*$e.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){var e;for(const r in this.textures)this.textures[r].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((e=this._texture)==null||e.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};lo.BATCH_SIZE=1e3;let Hi=lo;const Zl=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function uo(n,t,e){const r={};if(n.forEach(i=>{r[i]=t}),Object.keys(t.textures).forEach(i=>{r[i]=t.textures[i]}),!e){const i=At.dirname(n[0]);t.linkedSheets.forEach((s,o)=>{const a=uo([`${i}/${t.data.meta.related_multi_packs[o]}`],s,!0);Object.assign(r,a)})}return r}const Ql={extension:D.Asset,cache:{test:n=>n instanceof Hi,getCacheableAssets:(n,t)=>uo(n,t,!1)},resolver:{test:n=>{const e=n.split("?")[0].split("."),r=e.pop(),i=e.pop();return r==="json"&&Zl.includes(i)},parse:n=>{var e;const t=n.split(".");return{resolution:parseFloat(((e=Me.RETINA_PREFIX.exec(n))==null?void 0:e[1])??"1"),format:t[t.length-2],src:n}}},loader:{name:"spritesheetLoader",extension:{type:D.LoadParser,priority:le.Normal},async testParse(n,t){return At.extname(t.src).toLowerCase()===".json"&&!!n.frames},async parse(n,t,e){var c,u;const{texture:r,imageFilename:i}=(t==null?void 0:t.data)??{};let s=At.dirname(t.src);s&&s.lastIndexOf("/")!==s.length-1&&(s+="/");let o;if(r instanceof F)o=r;else{const h=Yi(s+(i??n.meta.image),t.src);o=(await e.load([h]))[h]}const a=new Hi(o.source,n);await a.parse();const l=(c=n==null?void 0:n.meta)==null?void 0:c.related_multi_packs;if(Array.isArray(l)){const h=[];for(const d of l){if(typeof d!="string")continue;let m=s+d;(u=t.data)!=null&&u.ignoreMultiPack||(m=Yi(m,t.src),h.push(e.load({src:m,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(h);a.linkedSheets=f,f.forEach(d=>{d.linkedSheets=[a].concat(a.linkedSheets.filter(m=>m!==d))})}return a},async unload(n,t,e){await e.unload(n.textureSource._sourceOrigin),n.destroy(!1)}}};gt.add(Ql);var or=/iPhone/i,ji=/iPod/i,qi=/iPad/i,Ki=/\biOS-universal(?:.+)Mac\b/i,ar=/\bAndroid(?:.+)Mobile\b/i,Zi=/Android/i,ce=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,cn=/Silk/i,Mt=/Windows Phone/i,Qi=/\bWindows(?:.+)ARM\b/i,Ji=/BlackBerry/i,ts=/BB10/i,es=/Opera Mini/i,ns=/\b(CriOS|Chrome)(?:.+)Mobile/i,rs=/Mobile(?:.+)Firefox\b/i,is=function(n){return typeof n<"u"&&n.platform==="MacIntel"&&typeof n.maxTouchPoints=="number"&&n.maxTouchPoints>1&&typeof MSStream>"u"};function Jl(n){return function(t){return t.test(n)}}function ss(n){var t={userAgent:"",platform:"",maxTouchPoints:0};!n&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof n=="string"?t.userAgent=n:n&&n.userAgent&&(t={userAgent:n.userAgent,platform:n.platform,maxTouchPoints:n.maxTouchPoints||0});var e=t.userAgent,r=e.split("[FBAN");typeof r[1]<"u"&&(e=r[0]),r=e.split("Twitter"),typeof r[1]<"u"&&(e=r[0]);var i=Jl(e),s={apple:{phone:i(or)&&!i(Mt),ipod:i(ji),tablet:!i(or)&&(i(qi)||is(t))&&!i(Mt),universal:i(Ki),device:(i(or)||i(ji)||i(qi)||i(Ki)||is(t))&&!i(Mt)},amazon:{phone:i(ce),tablet:!i(ce)&&i(cn),device:i(ce)||i(cn)},android:{phone:!i(Mt)&&i(ce)||!i(Mt)&&i(ar),tablet:!i(Mt)&&!i(ce)&&!i(ar)&&(i(cn)||i(Zi)),device:!i(Mt)&&(i(ce)||i(cn)||i(ar)||i(Zi))||i(/\bokhttp\b/i)},windows:{phone:i(Mt),tablet:i(Qi),device:i(Mt)||i(Qi)},other:{blackberry:i(Ji),blackberry10:i(ts),opera:i(es),firefox:i(rs),chrome:i(ns),device:i(Ji)||i(ts)||i(es)||i(rs)||i(ns)},any:!1,phone:!1,tablet:!1};return s.any=s.apple.device||s.android.device||s.windows.device||s.other.device,s.phone=s.apple.phone||s.android.phone||s.windows.phone,s.tablet=s.apple.tablet||s.android.tablet||s.windows.tablet,s}const tu=ss.default??ss,lr=tu(globalThis.navigator),ur=Object.create(null),os=Object.create(null);function ui(n,t){let e=os[n];return e===void 0&&(ur[t]===void 0&&(ur[t]=1),os[n]=e=ur[t]++),e}let he;function co(){return(!he||he!=null&&he.isContextLost())&&(he=lt.get().createCanvas().getContext("webgl",{})),he}let hn;function eu(){if(!hn){hn="mediump";const n=co();n&&n.getShaderPrecisionFormat&&(hn=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision?"highp":"mediump")}return hn}function nu(n,t,e){return t?n:e?(n=n.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${n}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${n}
        `}function ru(n,t,e){const r=e?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(n.substring(0,9)!=="precision"){let i=e?t.requestedFragmentPrecision:t.requestedVertexPrecision;return i==="highp"&&r!=="highp"&&(i="mediump"),`precision ${i} float;
${n}`}else if(r!=="highp"&&n.substring(0,15)==="precision highp")return n.replace("precision highp","precision mediump");return n}function iu(n,t){return t?`#version 300 es
${n}`:n}const su={},ou={};function au(n,{name:t="pixi-program"},e=!0){t=t.replace(/\s+/g,"-"),t+=e?"-fragment":"-vertex";const r=e?su:ou;return r[t]?(r[t]++,t+=`-${r[t]}`):r[t]=1,n.indexOf("#define SHADER_NAME")!==-1?n:`${`#define SHADER_NAME ${t}`}
${n}`}function lu(n,t){return t?n.replace("#version 300 es",""):n}const cr={stripVersion:lu,ensurePrecision:ru,addProgramDefines:nu,setProgramName:au,insertVersion:iu},hr=Object.create(null),ho=class Er{constructor(t){t={...Er.defaultOptions,...t};const e=t.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:e,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:eu()},setProgramName:{name:t.name},addProgramDefines:e,insertVersion:e};let i=t.fragment,s=t.vertex;Object.keys(cr).forEach(o=>{const a=r[o];i=cr[o](i,a,!0),s=cr[o](s,a,!1)}),this.fragment=i,this.vertex=s,this._key=ui(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const e=`${t.vertex}:${t.fragment}`;return hr[e]||(hr[e]=new Er(t)),hr[e]}};ho.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let N=ho;const as={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function uu(n){return as[n]??as.float32}const cu={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function hu({source:n,entryPoint:t}){const e={},r=n.indexOf(`fn ${t}`);if(r!==-1){const i=n.indexOf("->",r);if(i!==-1){const s=n.substring(r,i),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(s))!==null;){const l=cu[a[3]]??"float32";e[a[2]]={location:parseInt(a[1],10),format:l,stride:uu(l).stride,offset:0,instance:!1,start:0}}}}return e}function fr(n){var h,f;const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,e=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,i=/var(<[^>]+>)? (\w+)/,s=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,c=(h=n.match(t))==null?void 0:h.map(d=>({group:parseInt(d.match(e)[1],10),binding:parseInt(d.match(r)[1],10),name:d.match(i)[2],isUniform:d.match(i)[1]==="<uniform>",type:d.match(s)[1]}));if(!c)return{groups:[],structs:[]};const u=((f=n.match(o))==null?void 0:f.map(d=>{const m=d.match(l)[1],g=d.match(a).reduce((p,x)=>{const[v,y]=x.split(":");return p[v.trim()]=y.trim(),p},{});return g?{name:m,members:g}:null}).filter(({name:d})=>c.some(m=>m.type===d)))??[];return{groups:c,structs:u}}var Ve=(n=>(n[n.VERTEX=1]="VERTEX",n[n.FRAGMENT=2]="FRAGMENT",n[n.COMPUTE=4]="COMPUTE",n))(Ve||{});function fu({groups:n}){const t=[];for(let e=0;e<n.length;e++){const r=n[e];t[r.group]||(t[r.group]=[]),r.isUniform?t[r.group].push({binding:r.binding,visibility:Ve.VERTEX|Ve.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?t[r.group].push({binding:r.binding,visibility:Ve.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&t[r.group].push({binding:r.binding,visibility:Ve.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function du({groups:n}){const t=[];for(let e=0;e<n.length;e++){const r=n[e];t[r.group]||(t[r.group]={}),t[r.group][r.name]=r.binding}return t}function mu(n,t){const e=new Set,r=new Set,i=[...n.structs,...t.structs].filter(o=>e.has(o.name)?!1:(e.add(o.name),!0)),s=[...n.groups,...t.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return r.has(a)?!1:(r.add(a),!0)});return{structs:i,groups:s}}const dr=Object.create(null);class L{constructor(t){var a,l;this._layoutKey=0;const{fragment:e,vertex:r,layout:i,gpuLayout:s,name:o}=t;if(this.name=o,this.fragment=e,this.vertex=r,e.source===r.source){const c=fr(e.source);this.structsAndGroups=c}else{const c=fr(r.source),u=fr(e.source);this.structsAndGroups=mu(c,u)}this.layout=i??du(this.structsAndGroups),this.gpuLayout=s??fu(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:e}=this,r=t.source+e.source+t.entryPoint+e.entryPoint;this._layoutKey=ui(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=hu(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const e=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return dr[e]||(dr[e]=new L(t)),dr[e]}}const fo=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],pu=fo.reduce((n,t)=>(n[t]=!0,n),{});function gu(n,t){switch(n){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const mo=class po{constructor(t,e){this._touched=0,this.uid=it("uniform"),this._resourceType="uniformGroup",this._resourceId=it("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,e={...po.defaultOptions,...e},this.uniformStructures=t;const r={};for(const i in t){const s=t[i];if(s.name=i,s.size=s.size??1,!pu[s.type])throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${fo.join(", ")}`);s.value??(s.value=gu(s.type,s.size)),r[i]=s.value}this.uniforms=r,this._dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this._signature=ui(Object.keys(r).map(i=>`${i}-${t[i].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};mo.defaultOptions={ubo:!1,isStatic:!1};let go=mo;class Sn{constructor(t){this.resources=Object.create(null),this._dirty=!0;let e=0;for(const r in t){const i=t[r];this.setResource(i,e++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let e=0;for(const r in this.resources)t[e++]=this.resources[r]._resourceId;this._key=t.join("|")}setResource(t,e){var i,s;const r=this.resources[e];t!==r&&(r&&((i=t.off)==null||i.call(t,"change",this.onResourceChange,this)),(s=t.on)==null||s.call(t,"change",this.onResourceChange,this),this.resources[e]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const e=this.resources;for(const r in e)e[r]._touched=t}destroy(){var e;const t=this.resources;for(const r in t){const i=t[r];(e=i.off)==null||e.call(i,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const e=this.resources;for(const r in e)e[r]===t&&(e[r]=null)}else this._updateKey()}}var Un=(n=>(n[n.WEBGL=1]="WEBGL",n[n.WEBGPU=2]="WEBGPU",n[n.BOTH=3]="BOTH",n))(Un||{});class ci extends Tt{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:e,glProgram:r,groups:i,resources:s,compatibleRenderers:o,groupMap:a}=t;this.gpuProgram=e,this.glProgram=r,o===void 0&&(o=0,e&&(o|=Un.WEBGPU),r&&(o|=Un.WEBGL)),this.compatibleRenderers=o;const l={};if(!s&&!i&&(s={}),s&&i)throw new Error("[Shader] Cannot have both resources and groups");if(!e&&i&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&i&&a)for(const c in a)for(const u in a[c]){const h=a[c][u];l[h]={group:c,binding:u,name:h}}else if(e&&i&&!a){const c=e.structsAndGroups.groups;a={},c.forEach(u=>{a[u.group]=a[u.group]||{},a[u.group][u.binding]=u.name,l[u.name]=u})}else if(s){if(e){const c=e.structsAndGroups.groups;a={},c.forEach(u=>{a[u.group]=a[u.group]||{},a[u.group][u.binding]=u.name,l[u.name]=u})}else{a={},i={99:new Sn},this._ownedBindGroups.push(i[99]);let c=0;for(const u in s)l[u]={group:99,binding:c,name:u},a[99]=a[99]||{},a[99][c]=u,c++}i={};for(const c in s){const u=c;let h=s[c];!h.source&&!h._resourceType&&(h=new go(h));const f=l[u];f&&(i[f.group]||(i[f.group]=new Sn,this._ownedBindGroups.push(i[f.group])),i[f.group].setResource(h,f.binding))}}this.groups=i,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(i,l)}addResource(t,e,r){var i,s;(i=this._uniformBindMap)[e]||(i[e]={}),(s=this._uniformBindMap[e])[r]||(s[r]=t),this.groups[e]||(this.groups[e]=new Sn,this._ownedBindGroups.push(this.groups[e]))}_buildResourceAccessor(t,e){const r={};for(const i in e){const s=e[i];Object.defineProperty(r,s.name,{get(){return t[s.group].getResource(s.binding)},set(o){t[s.group].setResource(o,s.binding)}})}return r}destroy(t=!1){var e,r;this.emit("destroy",this),t&&((e=this.gpuProgram)==null||e.destroy(),(r=this.glProgram)==null||r.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(i=>{i.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:e,gl:r,...i}=t;let s,o;return e&&(s=L.from(e)),r&&(o=N.from(r)),new ci({gpuProgram:s,glProgram:o,...i})}}const xu={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},mr=0,pr=1,gr=2,xr=3,vr=4,yr=5,Dr=class xo{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<mr)}set blend(t){!!(this.data&1<<mr)!==t&&(this.data^=1<<mr)}get offsets(){return!!(this.data&1<<pr)}set offsets(t){!!(this.data&1<<pr)!==t&&(this.data^=1<<pr)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<gr)}set culling(t){!!(this.data&1<<gr)!==t&&(this.data^=1<<gr)}get depthTest(){return!!(this.data&1<<xr)}set depthTest(t){!!(this.data&1<<xr)!==t&&(this.data^=1<<xr)}get depthMask(){return!!(this.data&1<<yr)}set depthMask(t){!!(this.data&1<<yr)!==t&&(this.data^=1<<yr)}get clockwiseFrontFace(){return!!(this.data&1<<vr)}set clockwiseFrontFace(t){!!(this.data&1<<vr)!==t&&(this.data^=1<<vr)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=xu[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new xo;return t.depthTest=!1,t.blend=!0,t}};Dr.default2d=Dr.for2d();let vu=Dr;const vo=class Lr extends ci{constructor(t){t={...Lr.defaultOptions,...t},super(t),this.enabled=!0,this._state=vu.for2d(),this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.addResource("uTexture",0,1)}apply(t,e,r,i){t.applyFilter(this,e,r,i)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:e,gl:r,...i}=t;let s,o;return e&&(s=L.from(e)),r&&(o=N.from(r)),new Lr({gpuProgram:s,glProgram:o,...i})}};vo.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1};let $=vo;const Gr=[];gt.handleByNamedList(D.Environment,Gr);async function yu(n){if(n)for(let t=0;t<Gr.length;t++){const e=Gr[t];if(e.value.test()){await e.value.load();return}}}let Ee;function _u(){if(typeof Ee=="boolean")return Ee;try{Ee=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Ee=!1}return Ee}var hi={exports:{}};hi.exports=En;hi.exports.default=En;function En(n,t,e){e=e||2;var r=t&&t.length,i=r?t[0]*e:n.length,s=yo(n,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,c,u,h,f,d;if(r&&(s=Au(n,t,s,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(var m=e;m<i;m+=e)h=n[m],f=n[m+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return He(s,o,e,a,l,d,0),o}function yo(n,t,e,r,i){var s,o;if(i===Vr(n,t,e,r)>0)for(s=t;s<e;s+=r)o=ls(s,n[s],n[s+1],o);else for(s=e-r;s>=t;s-=r)o=ls(s,n[s],n[s+1],o);return o&&Dn(o,o.next)&&(qe(o),o=o.next),o}function ae(n,t){if(!n)return n;t||(t=n);var e=n,r;do if(r=!1,!e.steiner&&(Dn(e,e.next)||nt(e.prev,e,e.next)===0)){if(qe(e),e=t=e.prev,e===e.next)break;r=!0}else e=e.next;while(r||e!==t);return t}function He(n,t,e,r,i,s,o){if(n){!o&&s&&Fu(n,r,i,s);for(var a=n,l,c;n.prev!==n.next;){if(l=n.prev,c=n.next,s?Su(n,r,i,s):bu(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),qe(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=wu(ae(n),t,e),He(n,t,e,r,i,s,2)):o===2&&Cu(n,t,e,r,i,s):He(ae(n),t,e,r,i,s,1);break}}}}function bu(n){var t=n.prev,e=n,r=n.next;if(nt(t,e,r)>=0)return!1;for(var i=t.x,s=e.x,o=r.x,a=t.y,l=e.y,c=r.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c,m=r.next;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&ye(i,a,s,l,o,c,m.x,m.y)&&nt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Su(n,t,e,r){var i=n.prev,s=n,o=n.next;if(nt(i,s,o)>=0)return!1;for(var a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,x=Nr(d,m,t,e,r),v=Nr(g,p,t,e,r),y=n.prevZ,_=n.nextZ;y&&y.z>=x&&_&&_.z<=v;){if(y.x>=d&&y.x<=g&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&ye(a,u,l,h,c,f,y.x,y.y)&&nt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=g&&_.y>=m&&_.y<=p&&_!==i&&_!==o&&ye(a,u,l,h,c,f,_.x,_.y)&&nt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=x;){if(y.x>=d&&y.x<=g&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&ye(a,u,l,h,c,f,y.x,y.y)&&nt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=g&&_.y>=m&&_.y<=p&&_!==i&&_!==o&&ye(a,u,l,h,c,f,_.x,_.y)&&nt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function wu(n,t,e){var r=n;do{var i=r.prev,s=r.next.next;!Dn(i,s)&&_o(i,r,r.next,s)&&je(i,s)&&je(s,i)&&(t.push(i.i/e|0),t.push(r.i/e|0),t.push(s.i/e|0),qe(r),qe(r.next),r=n=s),r=r.next}while(r!==n);return ae(r)}function Cu(n,t,e,r,i,s){var o=n;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&Ru(o,a)){var l=bo(o,a);o=ae(o,o.next),l=ae(l,l.next),He(o,t,e,r,i,s,0),He(l,t,e,r,i,s,0);return}a=a.next}o=o.next}while(o!==n)}function Au(n,t,e,r){var i=[],s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*r,l=s<o-1?t[s+1]*r:n.length,c=yo(n,a,l,r,!1),c===c.next&&(c.steiner=!0),i.push(Ou(c));for(i.sort(Tu),s=0;s<i.length;s++)e=Pu(i[s],e);return e}function Tu(n,t){return n.x-t.x}function Pu(n,t){var e=zu(n,t);if(!e)return t;var r=bo(e,n);return ae(r,r.next),ae(e,e.next)}function zu(n,t){var e=t,r=n.x,i=n.y,s=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){var a=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=r&&a>s&&(s=a,o=e.x<e.next.x?e:e.next,a===r))return o}e=e.next}while(e!==t);if(!o)return null;var l=o,c=o.x,u=o.y,h=1/0,f;e=o;do r>=e.x&&e.x>=c&&r!==e.x&&ye(i<u?r:s,i,c,u,i<u?s:r,i,e.x,e.y)&&(f=Math.abs(i-e.y)/(r-e.x),je(e,n)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Mu(o,e)))&&(o=e,h=f)),e=e.next;while(e!==l);return o}function Mu(n,t){return nt(n.prev,n,t.prev)<0&&nt(t.next,n,n.next)<0}function Fu(n,t,e,r){var i=n;do i.z===0&&(i.z=Nr(i.x,i.y,t,e,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==n);i.prevZ.nextZ=null,i.prevZ=null,Iu(i)}function Iu(n){var t,e,r,i,s,o,a,l,c=1;do{for(e=n,n=null,s=null,o=0;e;){for(o++,r=e,a=0,t=0;t<c&&(a++,r=r.nextZ,!!r);t++);for(l=c;a>0||l>0&&r;)a!==0&&(l===0||!r||e.z<=r.z)?(i=e,e=e.nextZ,a--):(i=r,r=r.nextZ,l--),s?s.nextZ=i:n=i,i.prevZ=s,s=i;e=r}s.nextZ=null,c*=2}while(o>1);return n}function Nr(n,t,e,r,i){return n=(n-e)*i|0,t=(t-r)*i|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ou(n){var t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ye(n,t,e,r,i,s,o,a){return(i-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(r-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(r-a)}function Ru(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Uu(n,t)&&(je(n,t)&&je(t,n)&&Bu(n,t)&&(nt(n.prev,n,t.prev)||nt(n,t.prev,t))||Dn(n,t)&&nt(n.prev,n,n.next)>0&&nt(t.prev,t,t.next)>0)}function nt(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Dn(n,t){return n.x===t.x&&n.y===t.y}function _o(n,t,e,r){var i=dn(nt(n,t,e)),s=dn(nt(n,t,r)),o=dn(nt(e,r,n)),a=dn(nt(e,r,t));return!!(i!==s&&o!==a||i===0&&fn(n,e,t)||s===0&&fn(n,r,t)||o===0&&fn(e,n,r)||a===0&&fn(e,t,r))}function fn(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function dn(n){return n>0?1:n<0?-1:0}function Uu(n,t){var e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&_o(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function je(n,t){return nt(n.prev,n,n.next)<0?nt(n,t,n.next)>=0&&nt(n,n.prev,t)>=0:nt(n,t,n.prev)<0||nt(n,n.next,t)<0}function Bu(n,t){var e=n,r=!1,i=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(r=!r),e=e.next;while(e!==n);return r}function bo(n,t){var e=new $r(n.i,n.x,n.y),r=new $r(t.i,t.x,t.y),i=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=i,i.prev=e,r.next=e,e.prev=r,s.next=r,r.prev=s,r}function ls(n,t,e,r){var i=new $r(n,t,e);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function qe(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $r(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}En.deviation=function(n,t,e,r){var i=t&&t.length,s=i?t[0]*e:n.length,o=Math.abs(Vr(n,0,s,e));if(i)for(var a=0,l=t.length;a<l;a++){var c=t[a]*e,u=a<l-1?t[a+1]*e:n.length;o-=Math.abs(Vr(n,c,u,e))}var h=0;for(a=0;a<r.length;a+=3){var f=r[a]*e,d=r[a+1]*e,m=r[a+2]*e;h+=Math.abs((n[f]-n[m])*(n[d+1]-n[f+1])-(n[f]-n[d])*(n[m+1]-n[f+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function Vr(n,t,e,r){for(var i=0,s=t,o=e-r;s<e;s+=r)i+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return i}En.flatten=function(n){for(var t=n[0][0].length,e={vertices:[],holes:[],dimensions:t},r=0,i=0;i<n.length;i++){for(var s=0;s<n[i].length;s++)for(var o=0;o<t;o++)e.vertices.push(n[i][s][o]);i>0&&(r+=n[i-1].length,e.holes.push(r))}return e};var ku=hi.exports;const Eu=oi(ku);var So=(n=>(n[n.NONE=0]="NONE",n[n.COLOR=16384]="COLOR",n[n.STENCIL=1024]="STENCIL",n[n.DEPTH=256]="DEPTH",n[n.COLOR_DEPTH=16640]="COLOR_DEPTH",n[n.COLOR_STENCIL=17408]="COLOR_STENCIL",n[n.DEPTH_STENCIL=1280]="DEPTH_STENCIL",n[n.ALL=17664]="ALL",n))(So||{});class Du{constructor(t){this.items=[],this._name=t}emit(t,e,r,i,s,o,a,l){const{name:c,items:u}=this;for(let h=0,f=u.length;h<f;h++)u[h][c](t,e,r,i,s,o,a,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const e=this.items.indexOf(t);return e!==-1&&this.items.splice(e,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Lu=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],wo=class Co extends Tt{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name;const e=[...Lu,...t.runners??[]];this._addRunners(...e),this._addSystems(t.systems),this._addPipes(t.renderPipes,t.renderPipeAdaptors),this._unsafeEvalCheck()}async init(t={}){for(const e in this._systemsHash)t={...this._systemsHash[e].constructor.defaultOptions,...t};t={...Co.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let e=0;e<this.runners.init.items.length;e++)await this.runners.init.items[e].init(t);this._initOptions=t}render(t,e){let r=t;if(r instanceof Z&&(r={container:r},e&&(U(Q,"passing a second argument is deprecated, please use render options instead"),r.target=e.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const i=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=i?r.clearColor:j.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(t,e,r){this.view.resize(t,e,r),this.emit("resize",this.view.screen.width,this.view.screen.height)}clear(t={}){const e=this;t.target||(t.target=e.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=So.ALL);const{clear:r,clearColor:i,target:s}=t;j.shared.setValue(i??this.background.colorRgba),e.renderTarget.clear(s,r,j.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(e=>{this.runners[e]=new Du(e)})}_addSystems(t){let e;for(e in t){const r=t[e];this._addSystem(r.value,r.name)}}_addSystem(t,e){const r=new t(this);if(this[e])throw new Error(`Whoops! The name "${e}" is already in use`);this[e]=r,this._systemsHash[e]=r;for(const i in this.runners)this.runners[i].add(r);return this}_addPipes(t,e){const r=e.reduce((i,s)=>(i[s.name]=s.value,i),{});t.forEach(i=>{const s=i.value,o=i.name,a=r[o];this.renderPipes[o]=new s(this,a?new a:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!_u())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};wo.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Ao=wo,mn;function Gu(n){return mn!==void 0||(mn=(()=>{var e;const t={stencil:!0,failIfMajorPerformanceCaveat:n??Ao.defaultOptions.failIfMajorPerformanceCaveat};try{if(!lt.get().getWebGLRenderingContext())return!1;let i=lt.get().createCanvas().getContext("webgl",t);const s=!!((e=i==null?void 0:i.getContextAttributes())!=null&&e.stencil);if(i){const o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,s}catch{return!1}})()),mn}let pn;async function Nu(n={}){return pn!==void 0||(pn=await(async()=>{if(!lt.get().getNavigator().gpu)return!1;try{return await(await navigator.gpu.requestAdapter(n)).requestDevice(),!0}catch{return!1}})()),pn}const us=["webgl","webgpu","canvas"];async function $u(n){let t=[];n.preference?(t.push(n.preference),us.forEach(s=>{s!==n.preference&&t.push(s)})):t=us.slice();let e;await yu(n.manageImports??!0);let r={};for(let s=0;s<t.length;s++){const o=t[s];if(o==="webgpu"&&await Nu()){const{WebGPURenderer:a}=await In(()=>import("./WebGPURenderer-Q85d1G1n.js"),__vite__mapDeps([5,2,6,3]));e=a,r={...n,...n.webgpu};break}else if(o==="webgl"&&Gu(n.failIfMajorPerformanceCaveat??Ao.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await In(()=>import("./WebGLRenderer-DQn1MGoJ.js"),__vite__mapDeps([7,2,4,6]));e=a,r={...n,...n.webgl};break}else if(o==="canvas")throw r={...n},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!e)throw new Error("No available renderer for the current environment");const i=new e;return await i.init(r),i}const To=class Wr{constructor(...t){this.stage=new Z,t[0]!==void 0&&U(Q,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await $u(t),Wr._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return U(Q,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,e=!1){const r=Wr._plugins.slice(0);r.reverse(),r.forEach(i=>{i.destroy.call(this)}),this.stage.destroy(e),this.stage=null,this.renderer.destroy(t),this.renderer=null}};To._plugins=[];let Po=To;gt.handleByList(D.Application,Po._plugins);class Vu{constructor(t,e=!1){this._loader=t,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(t){t.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const t=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let r=0;r<e;r++)t.push(this._assetList.pop());await this._loader.load(t),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(t){this._isActive!==t&&(this._isActive=t,t&&!this._isLoading&&this._next())}}const Wu={extension:D.CacheParser,test:n=>Array.isArray(n)&&n.every(t=>t instanceof F),getCacheableAssets:(n,t)=>{const e={};return n.forEach(r=>{t.forEach((i,s)=>{e[r+(s===0?"":s+1)]=i})}),e}};async function zo(n){if("Image"in globalThis)return new Promise(t=>{const e=new Image;e.onload=()=>{t(!0)},e.onerror=()=>{t(!1)},e.src=n});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const t=await(await fetch(n)).blob();await createImageBitmap(t)}catch{return!1}return!0}return!1}const Xu={extension:{type:D.DetectionParser,priority:1},test:async()=>zo("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async n=>[...n,"avif"],remove:async n=>n.filter(t=>t!=="avif")},cs=["png","jpg","jpeg"],Yu={extension:{type:D.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async n=>[...n,...cs],remove:async n=>n.filter(t=>!cs.includes(t))},Hu="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function fi(n){return Hu?!1:document.createElement("video").canPlayType(n)!==""}const ju={extension:{type:D.DetectionParser,priority:0},test:async()=>fi("video/mp4"),add:async n=>[...n,"mp4","m4v"],remove:async n=>n.filter(t=>t!=="mp4"&&t!=="m4v")},qu={extension:{type:D.DetectionParser,priority:0},test:async()=>fi("video/ogg"),add:async n=>[...n,"ogv"],remove:async n=>n.filter(t=>t!=="ogv")},Ku={extension:{type:D.DetectionParser,priority:0},test:async()=>fi("video/webm"),add:async n=>[...n,"webm"],remove:async n=>n.filter(t=>t!=="webm")},Zu={extension:{type:D.DetectionParser,priority:0},test:async()=>zo("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async n=>[...n,"webp"],remove:async n=>n.filter(t=>t!=="webp")};let Qu=class{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(t,e,r)=>(this._parsersValidated=!1,t[e]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(t,e){const r={promise:null,parser:null};return r.promise=(async()=>{var o,a;let i=null,s=null;if(e.loadParser&&(s=this._parserHash[e.loadParser],s||ct(`[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`)),!s){for(let l=0;l<this.parsers.length;l++){const c=this.parsers[l];if(c.load&&((o=c.test)!=null&&o.call(c,t,e,this))){s=c;break}}if(!s)return ct(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await s.load(t,e,this),r.parser=s;for(let l=0;l<this.parsers.length;l++){const c=this.parsers[l];c.parse&&c.parse&&await((a=c.testParse)==null?void 0:a.call(c,i,e,this))&&(i=await c.parse(i,e,this)||i,r.parser=c)}return i})(),r}async load(t,e){this._parsersValidated||this._validateParsers();let r=0;const i={},s=Rn(t),o=yt(t,c=>({alias:[c],src:c})),a=o.length,l=o.map(async c=>{const u=At.toAbsolute(c.src);if(!i[c.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,c)),i[c.src]=await this.promiseCache[u].promise,e&&e(++r/a)}catch(h){throw delete this.promiseCache[u],delete i[c.src],new Error(`[Loader.load] Failed to load ${u}.
${h}`)}});return await Promise.all(l),s?i[o[0].src]:i}async unload(t){const r=yt(t,i=>({alias:[i],src:i})).map(async i=>{var a,l;const s=At.toAbsolute(i.src),o=this.promiseCache[s];if(o){const c=await o.promise;delete this.promiseCache[s],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,c,i,this))}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(t=>t.name).reduce((t,e)=>(e.name?t[e.name]&&ct(`[Assets] loadParser name conflict "${e.name}"`):ct("[Assets] loadParser should have a name"),{...t,[e.name]:e}),{})}};function Fe(n,t){if(Array.isArray(t)){for(const e of t)if(n.startsWith(`data:${e}`))return!0;return!1}return n.startsWith(`data:${t}`)}function Ie(n,t){const e=n.split("?")[0],r=At.extname(e).toLowerCase();return Array.isArray(t)?t.includes(r):r===t}const Ju=".json",tc="application/json",ec={extension:{type:D.LoadParser,priority:le.Low},name:"loadJson",test(n){return Fe(n,tc)||Ie(n,Ju)},async load(n){return await(await lt.get().fetch(n)).json()}},nc=".txt",rc="text/plain",ic={name:"loadTxt",extension:{type:D.LoadParser,priority:le.Low},test(n){return Fe(n,rc)||Ie(n,nc)},async load(n){return await(await lt.get().fetch(n)).text()}},sc=["normal","bold","100","200","300","400","500","600","700","800","900"],oc=[".ttf",".otf",".woff",".woff2"],ac=["font/ttf","font/otf","font/woff","font/woff2"],lc=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function uc(n){const t=At.extname(n),i=At.basename(n,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let s=i.length>0;for(const a of i)if(!a.match(lc)){s=!1;break}let o=i.join(" ");return s||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const cc=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function hc(n){return cc.test(n)?n:encodeURI(n)}const fc={extension:{type:D.LoadParser,priority:le.Low},name:"loadWebFont",test(n){return Fe(n,ac)||Ie(n,oc)},async load(n,t){var r,i,s;const e=lt.get().getFontFaceSet();if(e){const o=[],a=((r=t.data)==null?void 0:r.family)??uc(n),l=((s=(i=t.data)==null?void 0:i.weights)==null?void 0:s.filter(u=>sc.includes(u)))??["normal"],c=t.data??{};for(let u=0;u<l.length;u++){const h=l[u],f=new FontFace(a,`url(${hc(n)})`,{...c,weight:h});await f.load(),e.add(f),o.push(f)}return ft.set(`${a}-and-url`,{url:n,fontFaces:o}),o.length===1?o[0]:o}return ct("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(n){(Array.isArray(n)?n:[n]).forEach(t=>{ft.remove(t.family),lt.get().getFontFaceSet().delete(t)})}};var dc=pc,_r={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},mc=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function pc(n){var t=[];return n.replace(mc,function(e,r,i){var s=r.toLowerCase();for(i=xc(i),s=="m"&&i.length>2&&(t.push([r].concat(i.splice(0,2))),s="l",r=r=="m"?"l":"L");;){if(i.length==_r[s])return i.unshift(r),t.push(i);if(i.length<_r[s])throw new Error("malformed path data");t.push([r].concat(i.splice(0,_r[s])))}}),t}var gc=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function xc(n){var t=n.match(gc);return t?t.map(Number):[]}const vc=oi(dc);function yc(n,t){const e=vc(n),r=[];let i=null,s=0,o=0;for(let a=0;a<e.length;a++){const l=e[a],c=l[0],u=l;switch(c){case"M":s=u[1],o=u[2],t.moveTo(s,o);break;case"m":s+=u[1],o+=u[2],t.moveTo(s,o);break;case"H":s=u[1],t.lineTo(s,o);break;case"h":s+=u[1],t.lineTo(s,o);break;case"V":o=u[1],t.lineTo(s,o);break;case"v":o+=u[1],t.lineTo(s,o);break;case"L":s=u[1],o=u[2],t.lineTo(s,o);break;case"l":s+=u[1],o+=u[2],t.lineTo(s,o);break;case"C":s=u[5],o=u[6],t.bezierCurveTo(u[1],u[2],u[3],u[4],s,o);break;case"c":t.bezierCurveTo(s+u[1],o+u[2],s+u[3],o+u[4],s+u[5],o+u[6]),s+=u[5],o+=u[6];break;case"S":s=u[3],o=u[4],t.bezierCurveToShort(u[1],u[2],s,o);break;case"s":t.bezierCurveToShort(s+u[1],o+u[2],s+u[3],o+u[4]),s+=u[3],o+=u[4];break;case"Q":s=u[3],o=u[4],t.quadraticCurveTo(u[1],u[2],s,o);break;case"q":t.quadraticCurveTo(s+u[1],o+u[2],s+u[3],o+u[4]),s+=u[3],o+=u[4];break;case"T":s=u[1],o=u[2],t.quadraticCurveToShort(s,o);break;case"t":s+=u[1],o+=u[2],t.quadraticCurveToShort(s,o);break;case"A":s=u[6],o=u[7],t.arcToSvg(u[1],u[2],u[3],u[4],u[5],s,o);break;case"a":s+=u[6],o+=u[7],t.arcToSvg(u[1],u[2],u[3],u[4],u[5],s,o);break;case"Z":case"z":t.closePath(),r.length>0&&(i=r.pop(),i?(s=i.startX,o=i.startY):(s=0,o=0)),i=null;break;default:ct(`Unknown SVG path command: ${c}`)}c!=="Z"&&c!=="z"&&i===null&&(i={startX:s,startY:o},r.push(i))}return t}class di{constructor(t=0,e=0,r=0){this.type="circle",this.x=t,this.y=e,this.radius=r}clone(){return new di(this.x,this.y,this.radius)}contains(t,e){if(this.radius<=0)return!1;const r=this.radius*this.radius;let i=this.x-t,s=this.y-e;return i*=i,s*=s,i+s<=r}strokeContains(t,e,r){if(this.radius===0)return!1;const i=this.x-t,s=this.y-e,o=this.radius,a=r/2,l=Math.sqrt(i*i+s*s);return l<o+a&&l>o-a}getBounds(t){return t=t||new at,t.x=this.x-this.radius,t.y=this.y-this.radius,t.width=this.radius*2,t.height=this.radius*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.radius=t.radius,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class mi{constructor(t=0,e=0,r=0,i=0){this.type="ellipse",this.x=t,this.y=e,this.halfWidth=r,this.halfHeight=i}clone(){return new mi(this.x,this.y,this.halfWidth,this.halfHeight)}contains(t,e){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let r=(t-this.x)/this.halfWidth,i=(e-this.y)/this.halfHeight;return r*=r,i*=i,r+i<=1}strokeContains(t,e,r){const{halfWidth:i,halfHeight:s}=this;if(i<=0||s<=0)return!1;const o=r/2,a=i-o,l=s-o,c=i+o,u=s+o,h=t-this.x,f=e-this.y,d=h*h/(a*a)+f*f/(l*l),m=h*h/(c*c)+f*f/(u*u);return d>1&&m<=1}getBounds(){return new at(this.x-this.halfWidth,this.y-this.halfHeight,this.halfWidth*2,this.halfHeight*2)}copyFrom(t){return this.x=t.x,this.y=t.y,this.halfWidth=t.halfWidth,this.halfHeight=t.halfHeight,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function _c(n,t,e,r,i,s){const o=n-e,a=t-r,l=i-e,c=s-r,u=o*l+a*c,h=l*l+c*c;let f=-1;h!==0&&(f=u/h);let d,m;f<0?(d=e,m=r):f>1?(d=i,m=s):(d=e+f*l,m=r+f*c);const g=n-d,p=t-m;return g*g+p*p}class _e{constructor(...t){this.type="polygon";let e=Array.isArray(t[0])?t[0]:t;if(typeof e[0]!="number"){const r=[];for(let i=0,s=e.length;i<s;i++)r.push(e[i].x,e[i].y);e=r}this.points=e,this.closePath=!0}clone(){const t=this.points.slice(),e=new _e(t);return e.closePath=this.closePath,e}contains(t,e){let r=!1;const i=this.points.length/2;for(let s=0,o=i-1;s<i;o=s++){const a=this.points[s*2],l=this.points[s*2+1],c=this.points[o*2],u=this.points[o*2+1];l>e!=u>e&&t<(c-a)*((e-l)/(u-l))+a&&(r=!r)}return r}strokeContains(t,e,r){const i=r/2,s=i*i,{points:o}=this,a=o.length-(this.closePath?0:2);for(let l=0;l<a;l+=2){const c=o[l],u=o[l+1],h=o[(l+2)%o.length],f=o[(l+3)%o.length];if(_c(t,e,c,u,h,f)<=s)return!0}return!1}getBounds(t){t=t||new at;const e=this.points;let r=1/0,i=-1/0,s=1/0,o=-1/0;for(let a=0,l=e.length;a<l;a+=2){const c=e[a],u=e[a+1];r=c<r?c:r,i=c>i?c:i,s=u<s?u:s,o=u>o?u:o}return t.x=r,t.width=i-r,t.y=s,t.height=o-s,t}copyFrom(t){return this.points=t.points.slice(),this.closePath=t.closePath,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t,e)=>`${t}, ${e}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const gn=(n,t,e,r,i,s)=>{const o=n-e,a=t-r,l=Math.sqrt(o*o+a*a);return l>=i-s&&l<=i+s};class pi{constructor(t=0,e=0,r=0,i=0,s=20){this.type="roundedRectangle",this.x=t,this.y=e,this.width=r,this.height=i,this.radius=s}getBounds(t){return t=t||new at,t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}clone(){return new pi(this.x,this.y,this.width,this.height,this.radius)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){const r=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(e>=this.y+r&&e<=this.y+this.height-r||t>=this.x+r&&t<=this.x+this.width-r)return!0;let i=t-(this.x+r),s=e-(this.y+r);const o=r*r;if(i*i+s*s<=o||(i=t-(this.x+this.width-r),i*i+s*s<=o)||(s=e-(this.y+this.height-r),i*i+s*s<=o)||(i=t-(this.x+r),i*i+s*s<=o))return!0}return!1}strokeContains(t,e,r){const{x:i,y:s,width:o,height:a,radius:l}=this,c=r/2,u=i+l,h=s+l,f=o-l*2,d=a-l*2,m=i+o,g=s+a;return(t>=i-c&&t<=i+c||t>=m-c&&t<=m+c)&&e>=h&&e<=h+d||(e>=s-c&&e<=s+c||e>=g-c&&e<=g+c)&&t>=u&&t<=u+f?!0:t<u&&e<h&&gn(t,e,u,h,l,c)||t>m-l&&e<h&&gn(t,e,m-l,h,l,c)||t>m-l&&e>g-l&&gn(t,e,m-l,g-l,l,c)||t<u&&e>g-l&&gn(t,e,u,g-l,l,c)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}var rt=(n=>(n[n.MAP_READ=1]="MAP_READ",n[n.MAP_WRITE=2]="MAP_WRITE",n[n.COPY_SRC=4]="COPY_SRC",n[n.COPY_DST=8]="COPY_DST",n[n.INDEX=16]="INDEX",n[n.VERTEX=32]="VERTEX",n[n.UNIFORM=64]="UNIFORM",n[n.STORAGE=128]="STORAGE",n[n.INDIRECT=256]="INDIRECT",n[n.QUERY_RESOLVE=512]="QUERY_RESOLVE",n[n.STATIC=1024]="STATIC",n))(rt||{});class Nt extends Tt{constructor(t){let{data:e,size:r}=t;const{usage:i,label:s,shrinkToFit:o}=t;super(),this.uid=it("buffer"),this._resourceType="buffer",this._resourceId=it("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,r=r??(e==null?void 0:e.byteLength);const a=!!e;this.descriptor={size:r,usage:i,mappedAtCreation:a,label:s},this.shrinkToFit=o??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get static(){return!!(this.descriptor.usage&rt.STATIC)}set static(t){t?this.descriptor.usage|=rt.STATIC:this.descriptor.usage&=~rt.STATIC}setDataWithSize(t,e,r){if(this._updateID++,this._updateSize=e*t.BYTES_PER_ELEMENT,this._data===t){r&&this.emit("update",this);return}const i=this._data;if(this._data=t,i.length!==t.length){!this.shrinkToFit&&t.byteLength<i.byteLength?r&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=it("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function Mo(n,t){if(!(n instanceof Nt)){let e=t?rt.INDEX:rt.VERTEX;n instanceof Array&&(t?(n=new Uint32Array(n),e=rt.INDEX|rt.COPY_DST):(n=new Float32Array(n),e=rt.VERTEX|rt.COPY_DST)),n=new Nt({data:n,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:e})}return n}function bc(n,t,e){const r=n.getAttribute(t);if(!r)return e.minX=0,e.minY=0,e.maxX=0,e.maxY=0,e;const i=r.buffer.data;let s=1/0,o=1/0,a=-1/0,l=-1/0;const c=i.BYTES_PER_ELEMENT,u=(r.offset||0)/c,h=(r.stride||2*4)/c;for(let f=u;f<i.length;f+=h){const d=i[f],m=i[f+1];d>a&&(a=d),m>l&&(l=m),d<s&&(s=d),m<o&&(o=m)}return e.minX=s,e.minY=o,e.maxX=a,e.maxY=l,e}function Sc(n){return(n instanceof Nt||Array.isArray(n)||n.BYTES_PER_ELEMENT)&&(n={buffer:n}),n.buffer=Mo(n.buffer,!1),n}class Fo extends Tt{constructor(t){const{attributes:e,indexBuffer:r,topology:i}=t;super(),this.uid=it("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Ct,this._boundsDirty=!0,this.attributes=e,this.buffers=[],this.instanceCount=t.instanceCount||1;for(const s in e){const o=e[s]=Sc(e[s]);this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this),o.buffer.on("change",this.onBufferUpdate,this))}r&&(this.indexBuffer=Mo(r,!0),this.buffers.push(this.indexBuffer)),this.topology=i||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const e=this.attributes[t];return e.buffer.data.length/(e.stride/4||e.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,bc(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(e=>e.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const wc=new Float32Array(1),Cc=new Uint32Array(1);class Ac extends Fo{constructor(){const e=new Nt({data:wc,label:"attribute-batch-buffer",usage:rt.VERTEX|rt.COPY_DST,shrinkToFit:!1}),r=new Nt({data:Cc,label:"index-batch-buffer",usage:rt.INDEX|rt.COPY_DST,shrinkToFit:!1}),i=6*4;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:i,offset:0,location:1},aUV:{buffer:e,format:"float32x2",stride:i,offset:2*4,location:3},aColor:{buffer:e,format:"unorm8x4",stride:i,offset:4*4,location:0},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:i,offset:5*4,location:2}},indexBuffer:r})}}let xn=null;function Io(){if(xn)return xn;const n=co();return xn=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),xn}const Oo={};function Tc(n,t){let e=0;for(let r=0;r<t;r++)e=e*31+n[r].uid>>>0;return Oo[e]||Pc(n,e)}let br=0;function Pc(n,t){const e={};let r=0;br||(br=Io());for(let s=0;s<br;s++){const o=s<n.length?n[s]:F.EMPTY.source;e[r++]=o.source,e[r++]=o.style}const i=new Sn(e);return Oo[t]=i,i}class hs{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function fs(n,t){const e=n.byteLength/8|0,r=new Float64Array(n,0,e);new Float64Array(t,0,e).set(r);const s=n.byteLength-e*8;if(s>0){const o=new Uint8Array(n,e*8,s);new Uint8Array(t,e*8,s).set(o)}}const zc={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var Mc=(n=>(n[n.DISABLED=0]="DISABLED",n[n.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",n[n.MASK_ACTIVE=2]="MASK_ACTIVE",n[n.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",n[n.NONE=4]="NONE",n))(Mc||{});function ds(n,t){return t.alphaMode==="no-premultiply-alpha"&&zc[n]||n}class ms{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class ps{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}let De=0;const Ro=class Uo{constructor(t={}){this.uid=it("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],this._batchPool=[],this._batchPoolIndex=0,this._textureBatchPool=[],this._textureBatchPoolIndex=0,t={...Uo.defaultOptions,...t};const{vertexSize:e,indexSize:r}=t;this.attributeBuffer=new hs(e*this._vertexSize*4),this.indexBuffer=new Uint16Array(r),this._maxTextures=Io()}begin(){this.batchIndex=0,this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0,this._batchPoolIndex=0,this._textureBatchPoolIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t.indexStart=this.indexSize,t.location=this.attributeSize,t.batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.vertexSize*this._vertexSize}checkAndUpdateTexture(t,e){const r=t.batch.textures.ids[e._source.uid];return!r&&r!==0?!1:(t.textureId=r,t.texture=e,!0)}updateElement(t){this.dirty=!0,t.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,t.location,t.textureId)}break(t){const e=this._elements;let r=this._textureBatchPool[this._textureBatchPoolIndex++]||new ms;if(r.clear(),!e[this.elementStart])return;const i=e[this.elementStart];let s=ds(i.blendMode,i.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const o=this.attributeBuffer.float32View,a=this.attributeBuffer.uint32View,l=this.indexBuffer;let c=this._batchIndexSize,u=this._batchIndexStart,h="startBatch",f=this._batchPool[this._batchPoolIndex++]||new ps;const d=this._maxTextures;for(let m=this.elementStart;m<this.elementSize;++m){const g=e[m];e[m]=null;const x=g.texture._source,v=ds(g.blendMode,x),y=s!==v;if(x._batchTick===De&&!y){g.textureId=x._textureBindLocation,c+=g.indexSize,g.packAttributes(o,a,g.location,g.textureId),g.packIndex(l,g.indexStart,g.location/this._vertexSize),g.batch=f;continue}x._batchTick=De,(r.count>=d||y)&&(this._finishBatch(f,u,c-u,r,s,t,h),h="renderBatch",u=c,s=v,r=this._textureBatchPool[this._textureBatchPoolIndex++]||new ms,r.clear(),f=this._batchPool[this._batchPoolIndex++]||new ps,++De),g.textureId=x._textureBindLocation=r.count,r.ids[x.uid]=r.count,r.textures[r.count++]=x,g.batch=f,c+=g.indexSize,g.packAttributes(o,a,g.location,g.textureId),g.packIndex(l,g.indexStart,g.location/this._vertexSize)}r.count>0&&(this._finishBatch(f,u,c-u,r,s,t,h),u=c,++De),this.elementStart=this.elementSize,this._batchIndexStart=u,this._batchIndexSize=c}_finishBatch(t,e,r,i,s,o,a){t.gpuBindGroup=null,t.action=a,t.batcher=this,t.textures=i,t.blendMode=s,t.start=e,t.size=r,++De,o.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),r=new hs(e);fs(this.attributeBuffer.rawBinaryData,r.rawBinaryData),this.attributeBuffer=r}_resizeIndexBuffer(t){const e=this.indexBuffer;let r=Math.max(t,e.length*1.5);r+=r%2;const i=r>65535?new Uint32Array(r):new Uint16Array(r);if(i.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let s=0;s<e.length;s++)i[s]=e[s];else fs(e.buffer,i.buffer);this.indexBuffer=i}destroy(){for(let t=0;t<this.batches.length;t++)this.batches[t].destroy();this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};Ro.defaultOptions={vertexSize:4,indexSize:6};let Fc=Ro;function Ic(n,t,e,r,i,s,o,a=null){let l=0;e*=t,i*=s;const c=a.a,u=a.b,h=a.c,f=a.d,d=a.tx,m=a.ty;for(;l<o;){const g=n[e],p=n[e+1];r[i]=c*g+h*p+d,r[i+1]=u*g+f*p+m,i+=s,e+=t,l++}}function Oc(n,t,e,r){let i=0;for(t*=e;i<r;)n[t]=0,n[t+1]=0,t+=e,i++}function Bo(n,t,e,r,i){const s=t.a,o=t.b,a=t.c,l=t.d,c=t.tx,u=t.ty;e=e||0,r=r||2,i=i||n.length/r-e;let h=e*r;for(let f=0;f<i;f++){const d=n[h],m=n[h+1];n[h]=s*d+a*m+c,n[h+1]=o*d+l*m+u,h+=r}}function Rc(n,t){if(n===16777215||!t)return t;if(t===16777215||!n)return n;const e=n>>16&255,r=n>>8&255,i=n&255,s=t>>16&255,o=t>>8&255,a=t&255,l=e*s/255,c=r*o/255,u=i*a/255;return(l<<16)+(c<<8)+u}class ko{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0,this.roundPixels=0}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}packIndex(t,e,r){const i=this.geometryData.indices;for(let s=0;s<this.indexSize;s++)t[e++]=i[s+this.indexOffset]+r-this.vertexOffset}packAttributes(t,e,r,i){const s=this.geometryData,o=this.renderable,a=s.vertices,l=s.uvs,c=this.vertexOffset*2,u=(this.vertexOffset+this.vertexSize)*2,h=this.color,f=h>>16|h&65280|(h&255)<<16;if(this.applyTransform){const d=Rc(f,o.groupColor)+(this.alpha*o.groupAlpha*255<<24),m=o.groupTransform,g=i<<16|this.roundPixels&65535,p=m.a,x=m.b,v=m.c,y=m.d,_=m.tx,z=m.ty;for(let E=c;E<u;E+=2){const T=a[E],I=a[E+1];t[r]=p*T+v*I+_,t[r+1]=x*T+y*I+z,t[r+2]=l[E],t[r+3]=l[E+1],e[r+4]=d,e[r+5]=g,r+=6}}else{const d=f+(this.alpha*255<<24);for(let m=c;m<u;m+=2)t[r]=a[m],t[r+1]=a[m+1],t[r+2]=l[m],t[r+3]=l[m+1],e[r+4]=d,e[r+5]=i<<16,r+=6}}get vertSize(){return this.vertexSize}copyTo(t){t.indexOffset=this.indexOffset,t.indexSize=this.indexSize,t.vertexOffset=this.vertexOffset,t.vertexSize=this.vertexSize,t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.geometryData=this.geometryData}reset(){this.applyTransform=!0}}const Sr={build(n,t){let e,r,i,s,o,a;if(n.type==="circle"){const _=n;e=_.x,r=_.y,o=a=_.radius,i=s=0}else if(n.type==="ellipse"){const _=n;e=_.x,r=_.y,o=_.halfWidth,a=_.halfHeight,i=s=0}else{const _=n,z=_.width/2,E=_.height/2;e=_.x+z,r=_.y+E,o=a=Math.max(0,Math.min(_.radius,Math.min(z,E))),i=z-o,s=E-a}if(!(o>=0&&a>=0&&i>=0&&s>=0))return t;const l=Math.ceil(2.3*Math.sqrt(o+a)),c=l*8+(i?4:0)+(s?4:0);if(c===0)return t;if(l===0)return t[0]=t[6]=e+i,t[1]=t[3]=r+s,t[2]=t[4]=e-i,t[5]=t[7]=r-s,t;let u=0,h=l*4+(i?2:0)+2,f=h,d=c,m=i+o,g=s,p=e+m,x=e-m,v=r+g;if(t[u++]=p,t[u++]=v,t[--h]=v,t[--h]=x,s){const _=r-g;t[f++]=x,t[f++]=_,t[--d]=_,t[--d]=p}for(let _=1;_<l;_++){const z=Math.PI/2*(_/l),E=i+Math.cos(z)*o,T=s+Math.sin(z)*a,I=e+E,S=e-E,w=r+T,q=r-T;t[u++]=I,t[u++]=w,t[--h]=w,t[--h]=S,t[f++]=S,t[f++]=q,t[--d]=q,t[--d]=I}m=i,g=s+a,p=e+m,x=e-m,v=r+g;const y=r-g;return t[u++]=p,t[u++]=v,t[--d]=y,t[--d]=p,i&&(t[u++]=x,t[u++]=v,t[--d]=y,t[--d]=x),t},triangulate(n,t,e,r,i,s){if(n.length===0)return;let o=0,a=0;for(let u=0;u<n.length;u+=2)o+=n[u],a+=n[u+1];o/=n.length/2,a/=n.length/2;let l=r;t[l*e]=o,t[l*e+1]=a;const c=l++;for(let u=0;u<n.length;u+=2)t[l*e]=n[u],t[l*e+1]=n[u+1],u>0&&(i[s++]=l,i[s++]=c,i[s++]=l-1),l++;i[s++]=c+1,i[s++]=c,i[s++]=l-1}},Uc=1e-4,gs=1e-4;function Bc(n){const t=n.length;if(t<6)return 1;let e=0;for(let r=0,i=n[t-2],s=n[t-1];r<t;r+=2){const o=n[r],a=n[r+1];e+=(o-i)*(a+s),i=o,s=a}return e<0?-1:1}function xs(n,t,e,r,i,s,o,a){const l=n-e*i,c=t-r*i,u=n+e*s,h=t+r*s;let f,d;o?(f=r,d=-e):(f=-r,d=e);const m=l+f,g=c+d,p=u+f,x=h+d;return a.push(m,g),a.push(p,x),2}function jt(n,t,e,r,i,s,o,a){const l=e-n,c=r-t;let u=Math.atan2(l,c),h=Math.atan2(i-n,s-t);a&&u<h?u+=Math.PI*2:!a&&u>h&&(h+=Math.PI*2);let f=u;const d=h-u,m=Math.abs(d),g=Math.sqrt(l*l+c*c),p=(15*m*Math.sqrt(g)/Math.PI>>0)+1,x=d/p;if(f+=x,a){o.push(n,t),o.push(e,r);for(let v=1,y=f;v<p;v++,y+=x)o.push(n,t),o.push(n+Math.sin(y)*g,t+Math.cos(y)*g);o.push(n,t),o.push(i,s)}else{o.push(e,r),o.push(n,t);for(let v=1,y=f;v<p;v++,y+=x)o.push(n+Math.sin(y)*g,t+Math.cos(y)*g),o.push(n,t);o.push(i,s),o.push(n,t)}return p*2}function kc(n,t,e,r,i,s,o,a,l){const c=Uc;if(n.length===0)return;const u=t;let h=u.alignment;if(t.alignment!==.5){let K=Bc(n);h=(h-.5)*K+.5}const f=new ut(n[0],n[1]),d=new ut(n[n.length-2],n[n.length-1]),m=r,g=Math.abs(f.x-d.x)<c&&Math.abs(f.y-d.y)<c;if(m){n=n.slice(),g&&(n.pop(),n.pop(),d.set(n[n.length-2],n[n.length-1]));const K=(f.x+d.x)*.5,Ut=(d.y+f.y)*.5;n.unshift(K,Ut),n.push(K,Ut)}const p=i,x=n.length/2;let v=n.length;const y=p.length/2,_=u.width/2,z=_*_,E=u.miterLimit*u.miterLimit;let T=n[0],I=n[1],S=n[2],w=n[3],q=0,xt=0,k=-(I-w),M=T-S,V=0,J=0,A=Math.sqrt(k*k+M*M);k/=A,M/=A,k*=_,M*=_;const Y=h,C=(1-Y)*2,B=Y*2;m||(u.cap==="round"?v+=jt(T-k*(C-B)*.5,I-M*(C-B)*.5,T-k*C,I-M*C,T+k*B,I+M*B,p,!0)+2:u.cap==="square"&&(v+=xs(T,I,k,M,C,B,!0,p))),p.push(T-k*C,I-M*C),p.push(T+k*B,I+M*B);for(let K=1;K<x-1;++K){T=n[(K-1)*2],I=n[(K-1)*2+1],S=n[K*2],w=n[K*2+1],q=n[(K+1)*2],xt=n[(K+1)*2+1],k=-(I-w),M=T-S,A=Math.sqrt(k*k+M*M),k/=A,M/=A,k*=_,M*=_,V=-(w-xt),J=S-q,A=Math.sqrt(V*V+J*J),V/=A,J/=A,V*=_,J*=_;const Ut=S-T,Oe=I-w,Re=S-q,Ue=xt-w,Ci=Ut*Re+Oe*Ue,en=Oe*Re-Ue*Ut,Be=en<0;if(Math.abs(en)<.001*Math.abs(Ci)){p.push(S-k*C,w-M*C),p.push(S+k*B,w+M*B),Ci>=0&&(u.join==="round"?v+=jt(S,w,S-k*C,w-M*C,S-V*C,w-J*C,p,!1)+4:v+=2,p.push(S-V*B,w-J*B),p.push(S+V*C,w+J*C));continue}const Ai=(-k+T)*(-M+w)-(-k+S)*(-M+I),Ti=(-V+q)*(-J+w)-(-V+S)*(-J+xt),nn=(Ut*Ti-Re*Ai)/en,rn=(Ue*Ai-Oe*Ti)/en,Hn=(nn-S)*(nn-S)+(rn-w)*(rn-w),Wt=S+(nn-S)*C,Xt=w+(rn-w)*C,Yt=S-(nn-S)*B,Ht=w-(rn-w)*B,Ka=Math.min(Ut*Ut+Oe*Oe,Re*Re+Ue*Ue),Pi=Be?C:B,Za=Ka+Pi*Pi*z;Hn<=Za?u.join==="bevel"||Hn/z>E?(Be?(p.push(Wt,Xt),p.push(S+k*B,w+M*B),p.push(Wt,Xt),p.push(S+V*B,w+J*B)):(p.push(S-k*C,w-M*C),p.push(Yt,Ht),p.push(S-V*C,w-J*C),p.push(Yt,Ht)),v+=2):u.join==="round"?Be?(p.push(Wt,Xt),p.push(S+k*B,w+M*B),v+=jt(S,w,S+k*B,w+M*B,S+V*B,w+J*B,p,!0)+4,p.push(Wt,Xt),p.push(S+V*B,w+J*B)):(p.push(S-k*C,w-M*C),p.push(Yt,Ht),v+=jt(S,w,S-k*C,w-M*C,S-V*C,w-J*C,p,!1)+4,p.push(S-V*C,w-J*C),p.push(Yt,Ht)):(p.push(Wt,Xt),p.push(Yt,Ht)):(p.push(S-k*C,w-M*C),p.push(S+k*B,w+M*B),u.join==="round"?Be?v+=jt(S,w,S+k*B,w+M*B,S+V*B,w+J*B,p,!0)+2:v+=jt(S,w,S-k*C,w-M*C,S-V*C,w-J*C,p,!1)+2:u.join==="miter"&&Hn/z<=E&&(Be?(p.push(Yt,Ht),p.push(Yt,Ht)):(p.push(Wt,Xt),p.push(Wt,Xt)),v+=2),p.push(S-V*C,w-J*C),p.push(S+V*B,w+J*B),v+=2)}T=n[(x-2)*2],I=n[(x-2)*2+1],S=n[(x-1)*2],w=n[(x-1)*2+1],k=-(I-w),M=T-S,A=Math.sqrt(k*k+M*M),k/=A,M/=A,k*=_,M*=_,p.push(S-k*C,w-M*C),p.push(S+k*B,w+M*B),m||(u.cap==="round"?v+=jt(S-k*(C-B)*.5,w-M*(C-B)*.5,S-k*C,w-M*C,S+k*B,w+M*B,p,!1)+2:u.cap==="square"&&(v+=xs(S,w,k,M,C,B,!1,p)));const tn=gs*gs;for(let K=y;K<v+y-2;++K)T=p[K*2],I=p[K*2+1],S=p[(K+1)*2],w=p[(K+1)*2+1],q=p[(K+2)*2],xt=p[(K+2)*2+1],!(Math.abs(T*(w-xt)+S*(xt-I)+q*(I-w))<tn)&&a.push(K,K+1,K+2)}function Eo(n,t,e,r,i,s,o){const a=Eu(n,t,2);if(!a)return;for(let c=0;c<a.length;c+=3)s[o++]=a[c]+i,s[o++]=a[c+1]+i,s[o++]=a[c+2]+i;let l=i*r;for(let c=0;c<n.length;c+=2)e[l]=n[c],e[l+1]=n[c+1],l+=r}const Ec=[],Dc={build(n,t){for(let e=0;e<n.points.length;e++)t[e]=n.points[e];return t},triangulate(n,t,e,r,i,s){Eo(n,Ec,t,e,r,i,s)}},Lc={build(n,t){const e=n,r=e.x,i=e.y,s=e.width,o=e.height;return s>=0&&o>=0&&(t[0]=r,t[1]=i,t[2]=r+s,t[3]=i,t[4]=r+s,t[5]=i+o,t[6]=r,t[7]=i+o),t},triangulate(n,t,e,r,i,s){let o=0;r*=e,t[r+o]=n[0],t[r+o+1]=n[1],o+=e,t[r+o]=n[2],t[r+o+1]=n[3],o+=e,t[r+o]=n[6],t[r+o+1]=n[7],o+=e,t[r+o]=n[4],t[r+o+1]=n[5],o+=e;const a=r/e;i[s++]=a,i[s++]=a+1,i[s++]=a+2,i[s++]=a+1,i[s++]=a+3,i[s++]=a+2}},Gc={build(n,t){return t[0]=n.x,t[1]=n.y,t[2]=n.x2,t[3]=n.y2,t[4]=n.x3,t[5]=n.y3,t},triangulate(n,t,e,r,i,s){let o=0;r*=e,t[r+o]=n[0],t[r+o+1]=n[1],o+=e,t[r+o]=n[2],t[r+o+1]=n[3],o+=e,t[r+o]=n[4],t[r+o+1]=n[5];const a=r/e;i[s++]=a,i[s++]=a+1,i[s++]=a+2}},gi={rectangle:Lc,polygon:Dc,triangle:Gc,circle:Sr,ellipse:Sr,roundedRectangle:Sr},Nc=new at;function $c(n,t){const{geometryData:e,batches:r}=t;r.length=0,e.indices.length=0,e.vertices.length=0,e.uvs.length=0;for(let i=0;i<n.instructions.length;i++){const s=n.instructions[i];if(s.action==="texture")Vc(s.data,r,e);else if(s.action==="fill"||s.action==="stroke"){const o=s.action==="stroke",a=s.data.path.shapePath,l=s.data.style,c=s.data.hole;o&&c&&vs(c.shapePath,l,null,!0,r,e),vs(a,l,c,o,r,e)}}}function Vc(n,t,e){const{vertices:r,uvs:i,indices:s}=e,o=s.length,a=r.length/2,l=[],c=gi.rectangle,u=Nc,h=n.image;u.x=n.dx,u.y=n.dy,u.width=n.dw,u.height=n.dh;const f=n.transform;c.build(u,l),f&&Bo(l,f),c.triangulate(l,r,2,a,s,o);const d=h.uvs;i.push(d.x0,d.y0,d.x1,d.y1,d.x3,d.y3,d.x2,d.y2);const m=Ot.get(ko);m.indexOffset=o,m.indexSize=s.length-o,m.vertexOffset=a,m.vertexSize=r.length/2-a,m.color=n.style,m.alpha=n.alpha,m.texture=h,m.geometryData=e,t.push(m)}function vs(n,t,e,r,i,s){const{vertices:o,uvs:a,indices:l}=s,c=n.shapePrimitives.length-1;n.shapePrimitives.forEach(({shape:u,transform:h},f)=>{const d=l.length,m=o.length/2,g=[],p=gi[u.type];if(p.build(u,g),h&&Bo(g,h),r){const _=u.closePath??!0;kc(g,t,!1,_,o,2,m,l)}else if(e&&c===f){c!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const _=[],z=g.slice();Wc(e.shapePath).forEach(T=>{_.push(z.length/2),z.push(...T)}),Eo(z,_,o,2,m,l,d)}else p.triangulate(g,o,2,m,l,d);const x=a.length/2,v=t.texture;if(v!==F.WHITE){const _=t.matrix;h&&_.append(h.clone().invert()),Ic(o,2,m,a,x,2,o.length/2-m,_)}else Oc(a,x,2,o.length/2-m);const y=Ot.get(ko);y.indexOffset=d,y.indexSize=l.length-d,y.vertexOffset=m,y.vertexSize=o.length/2-m,y.color=t.color,y.alpha=t.alpha,y.texture=v,y.geometryData=s,i.push(y)})}function Wc(n){if(!n)return[];const t=n.shapePrimitives,e=[];for(let r=0;r<t.length;r++){const i=t[r].shape,s=[];gi[i.type].build(i,s),e.push(s)}return e}class Xc{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class Yc{constructor(){this.geometry=new Ac,this.instructions=new Ks}init(){this.instructions.reset()}}const xi=class Xr{constructor(){this._activeBatchers=[],this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null)}init(t){Xr.defaultOptions.bezierSmoothness=(t==null?void 0:t.bezierSmoothness)??Xr.defaultOptions.bezierSmoothness}prerender(){this._returnActiveBatchers()}getContextRenderData(t){return this._graphicsDataContextHash[t.uid]||this._initContextRenderData(t)}updateGpuContext(t){let e=this._gpuContextHash[t.uid]||this._initContext(t);if(t.dirty){e?this._cleanGraphicsContextData(t):e=this._initContext(t),$c(t,e);const r=t.batchMode;t.customShader||r==="no-batch"?e.isBatchable=!1:r==="auto"&&(e.isBatchable=e.geometryData.vertices.length<400),t.dirty=!1}return e}getGpuContext(t){return this._gpuContextHash[t.uid]||this._initContext(t)}_returnActiveBatchers(){for(let t=0;t<this._activeBatchers.length;t++)Ot.return(this._activeBatchers[t]);this._activeBatchers.length=0}_initContextRenderData(t){const e=Ot.get(Yc),{batches:r,geometryData:i}=this._gpuContextHash[t.uid],s=i.vertices.length,o=i.indices.length;for(let u=0;u<r.length;u++)r[u].applyTransform=!1;const a=Ot.get(Fc);this._activeBatchers.push(a),a.ensureAttributeBuffer(s),a.ensureIndexBuffer(o),a.begin();for(let u=0;u<r.length;u++){const h=r[u];a.add(h)}a.finish(e.instructions);const l=e.geometry;l.indexBuffer.setDataWithSize(a.indexBuffer,a.indexSize,!0),l.buffers[0].setDataWithSize(a.attributeBuffer.float32View,a.attributeSize,!0);const c=a.batches;for(let u=0;u<c.length;u++){const h=c[u];h.bindGroup=Tc(h.textures.textures,h.textures.count)}return this._graphicsDataContextHash[t.uid]=e,e}_initContext(t){const e=new Xc;return e.context=t,this._gpuContextHash[t.uid]=e,t.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]}onGraphicsContextDestroy(t){this._cleanGraphicsContextData(t),t.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]=null}_cleanGraphicsContextData(t){const e=this._gpuContextHash[t.uid];e.isBatchable||this._graphicsDataContextHash[t.uid]&&(Ot.return(this.getContextRenderData(t)),this._graphicsDataContextHash[t.uid]=null),e.batches&&e.batches.forEach(r=>{Ot.return(r)})}destroy(){for(const t in this._gpuContextHash)this._gpuContextHash[t]&&this.onGraphicsContextDestroy(this._gpuContextHash[t].context)}};xi.extension={type:[D.WebGLSystem,D.WebGPUSystem,D.CanvasSystem],name:"graphicsContext"};xi.defaultOptions={bezierSmoothness:.5};let Do=xi;const Hc=8,vn=11920929e-14,jc=1;function Lo(n,t,e,r,i,s,o,a,l,c){const h=Math.min(.99,Math.max(0,c??Do.defaultOptions.bezierSmoothness));let f=(jc-h)/1;return f*=f,qc(t,e,r,i,s,o,a,l,n,f),n}function qc(n,t,e,r,i,s,o,a,l,c){Yr(n,t,e,r,i,s,o,a,l,c,0),l.push(o,a)}function Yr(n,t,e,r,i,s,o,a,l,c,u){if(u>Hc)return;const h=(n+e)/2,f=(t+r)/2,d=(e+i)/2,m=(r+s)/2,g=(i+o)/2,p=(s+a)/2,x=(h+d)/2,v=(f+m)/2,y=(d+g)/2,_=(m+p)/2,z=(x+y)/2,E=(v+_)/2;if(u>0){let T=o-n,I=a-t;const S=Math.abs((e-o)*I-(r-a)*T),w=Math.abs((i-o)*I-(s-a)*T);if(S>vn&&w>vn){if((S+w)*(S+w)<=c*(T*T+I*I)){l.push(z,E);return}}else if(S>vn){if(S*S<=c*(T*T+I*I)){l.push(z,E);return}}else if(w>vn){if(w*w<=c*(T*T+I*I)){l.push(z,E);return}}else if(T=z-(n+o)/2,I=E-(t+a)/2,T*T+I*I<=c){l.push(z,E);return}}Yr(n,t,h,f,x,v,z,E,l,c,u+1),Yr(z,E,y,_,g,p,o,a,l,c,u+1)}const Kc=8,Zc=11920929e-14,Qc=1;function Jc(n,t,e,r,i,s,o,a){const c=Math.min(.99,Math.max(0,a??Do.defaultOptions.bezierSmoothness));let u=(Qc-c)/1;return u*=u,th(t,e,r,i,s,o,n,u),n}function th(n,t,e,r,i,s,o,a){Hr(o,n,t,e,r,i,s,a,0),o.push(i,s)}function Hr(n,t,e,r,i,s,o,a,l){if(l>Kc)return;const c=(t+r)/2,u=(e+i)/2,h=(r+s)/2,f=(i+o)/2,d=(c+h)/2,m=(u+f)/2;let g=s-t,p=o-e;const x=Math.abs((r-s)*p-(i-o)*g);if(x>Zc){if(x*x<=a*(g*g+p*p)){n.push(d,m);return}}else if(g=d-(t+s)/2,p=m-(e+o)/2,g*g+p*p<=a){n.push(d,m);return}Hr(n,t,e,c,u,d,m,a,l+1),Hr(n,d,m,h,f,s,o,a,l+1)}function Go(n,t,e,r,i,s,o,a){let l=Math.abs(i-s);(!o&&i>s||o&&s>i)&&(l=2*Math.PI-l),a=a||Math.max(6,Math.floor(6*Math.pow(r,1/3)*(l/Math.PI))),a=Math.max(a,3);let c=l/a,u=i;c*=o?-1:1;for(let h=0;h<a+1;h++){const f=Math.cos(u),d=Math.sin(u),m=t+f*r,g=e+d*r;n.push(m,g),u+=c}}function eh(n,t,e,r,i,s){const o=n[n.length-2],l=n[n.length-1]-e,c=o-t,u=i-e,h=r-t,f=Math.abs(l*h-c*u);if(f<1e-8||s===0){(n[n.length-2]!==t||n[n.length-1]!==e)&&n.push(t,e);return}const d=l*l+c*c,m=u*u+h*h,g=l*u+c*h,p=s*Math.sqrt(d)/f,x=s*Math.sqrt(m)/f,v=p*g/d,y=x*g/m,_=p*h+x*c,z=p*u+x*l,E=c*(x+v),T=l*(x+v),I=h*(p+y),S=u*(p+y),w=Math.atan2(T-z,E-_),q=Math.atan2(S-z,I-_);Go(n,_+t,z+e,s,w,q,c*u>h*l)}const Xe=Math.PI*2,wr={centerX:0,centerY:0,ang1:0,ang2:0},Cr=({x:n,y:t},e,r,i,s,o,a,l)=>{n*=e,t*=r;const c=i*n-s*t,u=s*n+i*t;return l.x=c+o,l.y=u+a,l};function nh(n,t){const e=t===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(t/4),r=t===1.5707963267948966?.551915024494:e,i=Math.cos(n),s=Math.sin(n),o=Math.cos(n+t),a=Math.sin(n+t);return[{x:i-s*r,y:s+i*r},{x:o+a*r,y:a-o*r},{x:o,y:a}]}const ys=(n,t,e,r)=>{const i=n*r-t*e<0?-1:1;let s=n*e+t*r;return s>1&&(s=1),s<-1&&(s=-1),i*Math.acos(s)},rh=(n,t,e,r,i,s,o,a,l,c,u,h,f)=>{const d=Math.pow(i,2),m=Math.pow(s,2),g=Math.pow(u,2),p=Math.pow(h,2);let x=d*m-d*p-m*g;x<0&&(x=0),x/=d*p+m*g,x=Math.sqrt(x)*(o===a?-1:1);const v=x*i/s*h,y=x*-s/i*u,_=c*v-l*y+(n+e)/2,z=l*v+c*y+(t+r)/2,E=(u-v)/i,T=(h-y)/s,I=(-u-v)/i,S=(-h-y)/s,w=ys(1,0,E,T);let q=ys(E,T,I,S);a===0&&q>0&&(q-=Xe),a===1&&q<0&&(q+=Xe),f.centerX=_,f.centerY=z,f.ang1=w,f.ang2=q};function ih(n,t,e,r,i,s,o,a=0,l=0,c=0){if(s===0||o===0)return;const u=Math.sin(a*Xe/360),h=Math.cos(a*Xe/360),f=h*(t-r)/2+u*(e-i)/2,d=-u*(t-r)/2+h*(e-i)/2;if(f===0&&d===0)return;s=Math.abs(s),o=Math.abs(o);const m=Math.pow(f,2)/Math.pow(s,2)+Math.pow(d,2)/Math.pow(o,2);m>1&&(s*=Math.sqrt(m),o*=Math.sqrt(m)),rh(t,e,r,i,s,o,l,c,u,h,f,d,wr);let{ang1:g,ang2:p}=wr;const{centerX:x,centerY:v}=wr;let y=Math.abs(p)/(Xe/4);Math.abs(1-y)<1e-7&&(y=1);const _=Math.max(Math.ceil(y),1);p/=_;let z=n[n.length-2],E=n[n.length-1];const T={x:0,y:0};for(let I=0;I<_;I++){const S=nh(g,p),{x:w,y:q}=Cr(S[0],s,o,h,u,x,v,T),{x:xt,y:k}=Cr(S[1],s,o,h,u,x,v,T),{x:M,y:V}=Cr(S[2],s,o,h,u,x,v,T);Lo(n,z,E,w,q,xt,k,M,V),z=M,E=V,g+=p}}function sh(n,t,e){const r=(o,a)=>{const l=a.x-o.x,c=a.y-o.y,u=Math.sqrt(l*l+c*c),h=l/u,f=c/u;return{len:u,nx:h,ny:f}},i=(o,a)=>{o===0?n.moveTo(a.x,a.y):n.lineTo(a.x,a.y)};let s=t[t.length-1];for(let o=0;o<t.length;o++){const a=t[o%t.length],l=a.radius??e;if(l<=0){i(o,a),s=a;continue}const c=t[(o+1)%t.length],u=r(a,s),h=r(a,c);if(u.len<1e-4||h.len<1e-4){i(o,a),s=a;continue}let f=Math.asin(u.nx*h.ny-u.ny*h.nx),d=1,m=!1;u.nx*h.nx-u.ny*-h.ny<0?f<0?f=Math.PI+f:(f=Math.PI-f,d=-1,m=!0):f>0&&(d=-1,m=!0);const g=f/2;let p,x=Math.abs(Math.cos(g)*l/Math.sin(g));x>Math.min(u.len/2,h.len/2)?(x=Math.min(u.len/2,h.len/2),p=Math.abs(x*Math.sin(g)/Math.cos(g))):p=l;const v=a.x+h.nx*x+-h.ny*p*d,y=a.y+h.ny*x+h.nx*p*d,_=Math.atan2(u.ny,u.nx)+Math.PI/2*d,z=Math.atan2(h.ny,h.nx)-Math.PI/2*d;o===0&&n.moveTo(v+Math.cos(_)*p,y+Math.sin(_)*p),n.arc(v,y,p,_,z,m),s=a}}function oh(n,t,e,r){const i=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),s=(a,l,c)=>({x:a.x+(l.x-a.x)*c,y:a.y+(l.y-a.y)*c}),o=t.length;for(let a=0;a<o;a++){const l=t[(a+1)%o],c=l.radius??e;if(c<=0){a===0?n.moveTo(l.x,l.y):n.lineTo(l.x,l.y);continue}const u=t[a],h=t[(a+2)%o],f=i(u,l);let d;if(f<1e-4)d=l;else{const p=Math.min(f/2,c);d=s(l,u,p/f)}const m=i(h,l);let g;if(m<1e-4)g=l;else{const p=Math.min(m/2,c);g=s(l,h,p/m)}a===0?n.moveTo(d.x,d.y):n.lineTo(d.x,d.y),n.quadraticCurveTo(l.x,l.y,g.x,g.y,r)}}const ah=new at;class lh{constructor(t){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new Ct,this._graphicsPath2D=t}moveTo(t,e){return this.startPoly(t,e),this}lineTo(t,e){this._ensurePoly();const r=this._currentPoly.points,i=r[r.length-2],s=r[r.length-1];return(i!==t||s!==e)&&r.push(t,e),this}arc(t,e,r,i,s,o){this._ensurePoly(!1);const a=this._currentPoly.points;return Go(a,t,e,r,i,s,o),this}arcTo(t,e,r,i,s){this._ensurePoly();const o=this._currentPoly.points;return eh(o,t,e,r,i,s),this}arcToSvg(t,e,r,i,s,o,a){const l=this._currentPoly.points;return ih(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,t,e,r,i,s),this}bezierCurveTo(t,e,r,i,s,o,a){this._ensurePoly();const l=this._currentPoly;return Lo(this._currentPoly.points,l.lastX,l.lastY,t,e,r,i,s,o,a),this}quadraticCurveTo(t,e,r,i,s){this._ensurePoly();const o=this._currentPoly;return Jc(this._currentPoly.points,o.lastX,o.lastY,t,e,r,i,s),this}closePath(){return this.endPoly(!0),this}addPath(t,e){this.endPoly(),e&&!e.isIdentity()&&(t=t.clone(!0),t.transform(e));for(let r=0;r<t.instructions.length;r++){const i=t.instructions[r];this[i.action](...i.data)}return this}finish(t=!1){this.endPoly(t)}rect(t,e,r,i,s){return this.drawShape(new at(t,e,r,i),s),this}circle(t,e,r,i){return this.drawShape(new di(t,e,r),i),this}poly(t,e,r){const i=new _e(t);return i.closePath=e,this.drawShape(i,r),this}regularPoly(t,e,r,i,s=0,o){i=Math.max(i|0,3);const a=-1*Math.PI/2+s,l=Math.PI*2/i,c=[];for(let u=0;u<i;u++){const h=u*l+a;c.push(t+r*Math.cos(h),e+r*Math.sin(h))}return this.poly(c,!0,o),this}roundPoly(t,e,r,i,s,o=0,a){if(i=Math.max(i|0,3),s<=0)return this.regularPoly(t,e,r,i,o);const l=r*Math.sin(Math.PI/i)-.001;s=Math.min(s,l);const c=-1*Math.PI/2+o,u=Math.PI*2/i,h=(i-2)*Math.PI/i/2;for(let f=0;f<i;f++){const d=f*u+c,m=t+r*Math.cos(d),g=e+r*Math.sin(d),p=d+Math.PI+h,x=d-Math.PI-h,v=m+s*Math.cos(p),y=g+s*Math.sin(p),_=m+s*Math.cos(x),z=g+s*Math.sin(x);f===0?this.moveTo(v,y):this.lineTo(v,y),this.quadraticCurveTo(m,g,_,z,a)}return this.closePath()}roundShape(t,e,r=!1,i){return t.length<3?this:(r?oh(this,t,e,i):sh(this,t,e),this.closePath())}filletRect(t,e,r,i,s){if(s===0)return this.rect(t,e,r,i);const o=Math.min(r,i)/2,a=Math.min(o,Math.max(-o,s)),l=t+r,c=e+i,u=a<0?-a:0,h=Math.abs(a);return this.moveTo(t,e+h).arcTo(t+u,e+u,t+h,e,h).lineTo(l-h,e).arcTo(l-u,e+u,l,e+h,h).lineTo(l,c-h).arcTo(l-u,c-u,t+r-h,c,h).lineTo(t+h,c).arcTo(t+u,c-u,t,c-h,h).closePath()}chamferRect(t,e,r,i,s,o){if(s<=0)return this.rect(t,e,r,i);const a=Math.min(s,Math.min(r,i)/2),l=t+r,c=e+i,u=[t+a,e,l-a,e,l,e+a,l,c-a,l-a,c,t+a,c,t,c-a,t,e+a];for(let h=u.length-1;h>=2;h-=2)u[h]===u[h-2]&&u[h-1]===u[h-3]&&u.splice(h-1,2);return this.poly(u,!0,o)}ellipse(t,e,r,i,s){return this.drawShape(new mi(t,e,r,i),s),this}roundRect(t,e,r,i,s,o){return this.drawShape(new pi(t,e,r,i,s),o),this}drawShape(t,e){return this.endPoly(),this.shapePrimitives.push({shape:t,transform:e}),this}startPoly(t,e){let r=this._currentPoly;return r&&this.endPoly(),r=new _e,r.points.push(t,e),this._currentPoly=r,this}endPoly(t=!1){const e=this._currentPoly;return e&&e.points.length>2&&(e.closePath=t,this.shapePrimitives.push({shape:e})),this._currentPoly=null,this}_ensurePoly(t=!0){if(!this._currentPoly&&(this._currentPoly=new _e,t)){const e=this.shapePrimitives[this.shapePrimitives.length-1];if(e){let r=e.shape.x,i=e.shape.y;if(!e.transform.isIdentity()){const s=e.transform,o=r;r=s.a*r+s.c*i+s.tx,i=s.b*o+s.d*i+s.ty}this._currentPoly.points.push(r,i)}else this._currentPoly.points.push(0,0)}}buildPath(){const t=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let e=0;e<t.instructions.length;e++){const r=t.instructions[e];this[r.action](...r.data)}this.finish()}get bounds(){const t=this._bounds;t.clear();const e=this.shapePrimitives;for(let r=0;r<e.length;r++){const i=e[r],s=i.shape.getBounds(ah);i.transform?t.addRect(s,i.transform):t.addRect(s)}return t}}class Pe{constructor(t){this.instructions=[],this.uid=it("graphicsPath"),this._dirty=!0,typeof t=="string"?yc(t,this):this.instructions=(t==null?void 0:t.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new lh(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(t,e){return t=t.clone(),this.instructions.push({action:"addPath",data:[t,e]}),this._dirty=!0,this}arc(...t){return this.instructions.push({action:"arc",data:t}),this._dirty=!0,this}arcTo(...t){return this.instructions.push({action:"arcTo",data:t}),this._dirty=!0,this}arcToSvg(...t){return this.instructions.push({action:"arcToSvg",data:t}),this._dirty=!0,this}bezierCurveTo(...t){return this.instructions.push({action:"bezierCurveTo",data:t}),this._dirty=!0,this}bezierCurveToShort(t,e,r,i,s){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(ut.shared);let l=0,c=0;if(!o||o.action!=="bezierCurveTo")l=a.x,c=a.y;else{l=o.data[2],c=o.data[3];const u=a.x,h=a.y;l=u+(u-l),c=h+(h-c)}return this.instructions.push({action:"bezierCurveTo",data:[l,c,t,e,r,i,s]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...t){return this.instructions.push({action:"ellipse",data:t}),this._dirty=!0,this}lineTo(...t){return this.instructions.push({action:"lineTo",data:t}),this._dirty=!0,this}moveTo(...t){return this.instructions.push({action:"moveTo",data:t}),this}quadraticCurveTo(...t){return this.instructions.push({action:"quadraticCurveTo",data:t}),this._dirty=!0,this}quadraticCurveToShort(t,e,r){const i=this.instructions[this.instructions.length-1],s=this.getLastPoint(ut.shared);let o=0,a=0;if(!i||i.action!=="quadraticCurveTo")o=s.x,a=s.y;else{o=i.data[0],a=i.data[1];const l=s.x,c=s.y;o=l+(l-o),a=c+(c-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,t,e,r]}),this._dirty=!0,this}rect(t,e,r,i,s){return this.instructions.push({action:"rect",data:[t,e,r,i,s]}),this._dirty=!0,this}circle(t,e,r,i){return this.instructions.push({action:"circle",data:[t,e,r,i]}),this._dirty=!0,this}roundRect(...t){return this.instructions.push({action:"roundRect",data:t}),this._dirty=!0,this}poly(...t){return this.instructions.push({action:"poly",data:t}),this._dirty=!0,this}regularPoly(...t){return this.instructions.push({action:"regularPoly",data:t}),this._dirty=!0,this}roundPoly(...t){return this.instructions.push({action:"roundPoly",data:t}),this._dirty=!0,this}roundShape(...t){return this.instructions.push({action:"roundShape",data:t}),this._dirty=!0,this}filletRect(...t){return this.instructions.push({action:"filletRect",data:t}),this._dirty=!0,this}chamferRect(...t){return this.instructions.push({action:"chamferRect",data:t}),this._dirty=!0,this}star(t,e,r,i,s,o,a){s=s||i/2;const l=-1*Math.PI/2+o,c=r*2,u=Math.PI*2/c,h=[];for(let f=0;f<c;f++){const d=f%2?s:i,m=f*u+l;h.push(t+d*Math.cos(m),e+d*Math.sin(m))}return this.poly(h,!0,a),this}clone(t=!1){const e=new Pe;if(!t)e.instructions=this.instructions.slice();else for(let r=0;r<this.instructions.length;r++){const i=this.instructions[r];e.instructions.push({action:i.action,data:i.data.slice()})}return e}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(t){if(t.isIdentity())return this;const e=t.a,r=t.b,i=t.c,s=t.d,o=t.tx,a=t.ty;let l=0,c=0,u=0,h=0,f=0,d=0,m=0,g=0;for(let p=0;p<this.instructions.length;p++){const x=this.instructions[p],v=x.data;switch(x.action){case"moveTo":case"lineTo":l=v[0],c=v[1],v[0]=e*l+i*c+o,v[1]=r*l+s*c+a;break;case"bezierCurveTo":u=v[0],h=v[1],f=v[2],d=v[3],l=v[4],c=v[5],v[0]=e*u+i*h+o,v[1]=r*u+s*h+a,v[2]=e*f+i*d+o,v[3]=r*f+s*d+a,v[4]=e*l+i*c+o,v[5]=r*l+s*c+a;break;case"quadraticCurveTo":u=v[0],h=v[1],l=v[2],c=v[3],v[0]=e*u+i*h+o,v[1]=r*u+s*h+a,v[2]=e*l+i*c+o,v[3]=r*l+s*c+a;break;case"arcToSvg":l=v[5],c=v[6],m=v[0],g=v[1],v[0]=e*m+i*g,v[1]=r*m+s*g,v[5]=e*l+i*c+o,v[6]=r*l+s*c+a;break;case"circle":v[4]=Le(v[3],t);break;case"rect":v[4]=Le(v[4],t);break;case"ellipse":v[8]=Le(v[8],t);break;case"roundRect":v[5]=Le(v[5],t);break;case"addPath":v[0].transform(t);break;case"poly":v[2]=Le(v[2],t);break;default:ct("unknown transform action",x.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(t){let e=this.instructions.length-1,r=this.instructions[e];if(!r)return t.x=0,t.y=0,t;for(;r.action==="closePath";){if(e--,e<0)return t.x=0,t.y=0,t;r=this.instructions[e]}switch(r.action){case"moveTo":case"lineTo":t.x=r.data[0],t.y=r.data[1];break;case"quadraticCurveTo":t.x=r.data[2],t.y=r.data[3];break;case"bezierCurveTo":t.x=r.data[4],t.y=r.data[5];break;case"arc":case"arcToSvg":t.x=r.data[5],t.y=r.data[6];break;case"addPath":r.data[0].getLastPoint(t);break}return t}}function Le(n,t){return n?n.prepend(t):t.clone()}function uh(n,t){if(typeof n=="string"){const r=document.createElement("div");r.innerHTML=n.trim(),n=r.querySelector("svg")}const e={context:t,path:new Pe};return No(n,e,null,null),t}function No(n,t,e,r){const i=n.children,{fillStyle:s,strokeStyle:o}=ch(n);s&&e?e={...e,...s}:s&&(e=s),o&&r?r={...r,...o}:o&&(r=o),t.context.fillStyle=e,t.context.strokeStyle=r;let a,l,c,u,h,f,d,m,g,p,x,v,y,_,z,E,T;switch(n.nodeName.toLowerCase()){case"path":_=n.getAttribute("d"),z=new Pe(_),t.context.path(z),e&&t.context.fill(),r&&t.context.stroke();break;case"circle":d=st(n,"cx",0),m=st(n,"cy",0),g=st(n,"r",0),t.context.ellipse(d,m,g,g),e&&t.context.fill(),r&&t.context.stroke();break;case"rect":a=st(n,"x",0),l=st(n,"y",0),E=st(n,"width",0),T=st(n,"height",0),p=st(n,"rx",0),x=st(n,"ry",0),p||x?t.context.roundRect(a,l,E,T,p||x):t.context.rect(a,l,E,T),e&&t.context.fill(),r&&t.context.stroke();break;case"ellipse":d=st(n,"cx",0),m=st(n,"cy",0),p=st(n,"rx",0),x=st(n,"ry",0),t.context.beginPath(),t.context.ellipse(d,m,p,x),e&&t.context.fill(),r&&t.context.stroke();break;case"line":c=st(n,"x1",0),u=st(n,"y1",0),h=st(n,"x2",0),f=st(n,"y2",0),t.context.beginPath(),t.context.moveTo(c,u),t.context.lineTo(h,f),r&&t.context.stroke();break;case"polygon":y=n.getAttribute("points"),v=y.match(/\d+/g).map(I=>parseInt(I,10)),t.context.poly(v,!0),e&&t.context.fill(),r&&t.context.stroke();break;case"polyline":y=n.getAttribute("points"),v=y.match(/\d+/g).map(I=>parseInt(I,10)),t.context.poly(v,!1),r&&t.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${n.nodeName}> elements unsupported`);break}}for(let I=0;I<i.length;I++)No(i[I],t,e,r)}function st(n,t,e){const r=n.getAttribute(t);return r?Number(r):e}function ch(n){const t=n.getAttribute("style"),e={},r={};let i=!1,s=!1;if(t){const o=t.split(";");for(let a=0;a<o.length;a++){const l=o[a],[c,u]=l.split(":");switch(c){case"stroke":u!=="none"&&(e.color=j.shared.setValue(u).toNumber(),s=!0);break;case"stroke-width":e.width=Number(u);break;case"fill":u!=="none"&&(i=!0,r.color=j.shared.setValue(u).toNumber());break;case"fill-opacity":r.alpha=Number(u);break;case"stroke-opacity":e.alpha=Number(u);break;case"opacity":r.alpha=Number(u),e.alpha=Number(u);break}}}else{const o=n.getAttribute("stroke");o&&o!=="none"&&(s=!0,e.color=j.shared.setValue(o).toNumber(),e.width=st(n,"stroke-width",1));const a=n.getAttribute("fill");a&&a!=="none"&&(i=!0,r.color=j.shared.setValue(a).toNumber())}return{strokeStyle:s?e:null,fillStyle:i?r:null}}const $o=class jr{constructor(t,e,r,i){this.uid=it("fillGradient"),this.type="linear",this.gradientStops=[],this.x0=t,this.y0=e,this.x1=r,this.y1=i}addColorStop(t,e){return this.gradientStops.push({offset:t,color:j.shared.setValue(e).toHex()}),this}buildLinearGradient(){const t=jr.defaultTextureSize,{gradientStops:e}=this,r=lt.get().createCanvas();r.width=t,r.height=t;const i=r.getContext("2d"),s=i.createLinearGradient(0,0,jr.defaultTextureSize,1);for(let g=0;g<e.length;g++){const p=e[g];s.addColorStop(p.offset,p.color)}i.fillStyle=s,i.fillRect(0,0,t,t),this.texture=new F({source:new ze({resource:r,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:c}=this,u=new H,h=l-o,f=c-a,d=Math.sqrt(h*h+f*f),m=Math.atan2(f,h);u.translate(-o,-a),u.scale(1/t,1/t),u.rotate(-m),u.scale(256/d,1),this.transform=u}};$o.defaultTextureSize=256;let Vo=$o;const _s={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class hh{constructor(t,e){this.uid=it("fillPattern"),this.transform=new H,this.texture=t,this.transform.scale(1/t.frame.width,1/t.frame.height),e&&(t.source.style.addressModeU=_s[e].addressModeU,t.source.style.addressModeV=_s[e].addressModeV)}setTransform(t){const e=this.texture;this.transform.copyFrom(t),this.transform.invert(),this.transform.scale(1/e.frame.width,1/e.frame.height)}}function Lt(n,t){var o;if(n==null)return null;let e,r;if(n!=null&&n.fill?(r=n.fill,e={...t,...n}):(r=n,e=t),j.isColorLike(r)){const a=j.shared.setValue(r??0);return{...e,color:a.toNumber(),alpha:a.alpha===1?e.alpha:a.alpha,texture:F.WHITE}}else if(r instanceof hh){const a=r;return{...e,color:16777215,texture:a.texture,matrix:a.transform,fill:e.fill??null}}else if(r instanceof Vo){const a=r;return a.buildLinearGradient(),{...e,color:16777215,texture:a.texture,matrix:a.transform}}const i={...t,...n};if(i.texture){if(i.texture!==F.WHITE){const l=((o=i.matrix)==null?void 0:o.invert())||new H;l.scale(1/i.texture.frame.width,1/i.texture.frame.height),i.matrix=l}const a=i.texture.source.style;a.addressMode==="clamp-to-edge"&&(a.addressMode="repeat")}const s=j.shared.setValue(i.color);return i.alpha*=s.alpha,i.color=s.toNumber(),i.matrix=i.matrix?i.matrix.clone():null,i}const fh=new ut,bs=new H,vi=class St extends Tt{constructor(){super(...arguments),this.uid=it("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new Pe,this._transform=new H,this._fillStyle={...St.defaultFillStyle},this._strokeStyle={...St.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new Ct,this._boundsDirty=!0}clone(){const t=new St;return t.batchMode=this.batchMode,t.instructions=this.instructions.slice(),t._activePath=this._activePath.clone(),t._transform=this._transform.clone(),t._fillStyle={...this._fillStyle},t._strokeStyle={...this._strokeStyle},t._stateStack=this._stateStack.slice(),t._bounds=this._bounds.clone(),t._boundsDirty=!0,t}get fillStyle(){return this._fillStyle}set fillStyle(t){this._fillStyle=Lt(t,St.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(t){this._strokeStyle=Lt(t,St.defaultStrokeStyle)}setFillStyle(t){return this._fillStyle=Lt(t,St.defaultFillStyle),this}setStrokeStyle(t){return this._strokeStyle=Lt(t,St.defaultStrokeStyle),this}texture(t,e,r,i,s,o){return this.instructions.push({action:"texture",data:{image:t,dx:r||0,dy:i||0,dw:s||t.frame.width,dh:o||t.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:e?j.shared.setValue(e).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new Pe,this}fill(t,e){let r;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i&&i.action==="stroke"?r=i.data.path:r=this._activePath.clone(),r?(t!=null&&(e!==void 0&&typeof t=="number"&&(U(Q,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),t={color:t,alpha:e}),this._fillStyle=Lt(t,St.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:r}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:t,y:e}=this._activePath.getLastPoint(ut.shared);this._activePath.clear(),this._activePath.moveTo(t,e)}stroke(t){let e;const r=this.instructions[this.instructions.length-1];return this._tick===0&&r&&r.action==="fill"?e=r.data.path:e=this._activePath.clone(),e?(t!=null&&(this._strokeStyle=Lt(t,St.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:e}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let t=0;t<2;t++){const e=this.instructions[this.instructions.length-1-t],r=this._activePath.clone();if(e&&(e.action==="stroke"||e.action==="fill"))if(e.data.hole)e.data.hole.addPath(r);else{e.data.hole=r;break}}return this._initNextPathLocation(),this}arc(t,e,r,i,s,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*t+a.c*e+a.tx,a.b*t+a.d*e+a.ty,r,i,s,o),this}arcTo(t,e,r,i,s){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}arcToSvg(t,e,r,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(t,e,r,i,s,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(t,e,r,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*t+l.c*e+l.tx,l.b*t+l.d*e+l.ty,l.a*r+l.c*i+l.tx,l.b*r+l.d*i+l.ty,l.a*s+l.c*o+l.tx,l.b*s+l.d*o+l.ty,a),this}closePath(){var t;return this._tick++,(t=this._activePath)==null||t.closePath(),this}ellipse(t,e,r,i){return this._tick++,this._activePath.ellipse(t,e,r,i,this._transform.clone()),this}circle(t,e,r){return this._tick++,this._activePath.circle(t,e,r,this._transform.clone()),this}path(t){return this._tick++,this._activePath.addPath(t,this._transform.clone()),this}lineTo(t,e){this._tick++;const r=this._transform;return this._activePath.lineTo(r.a*t+r.c*e+r.tx,r.b*t+r.d*e+r.ty),this}moveTo(t,e){this._tick++;const r=this._transform,i=this._activePath.instructions,s=r.a*t+r.c*e+r.tx,o=r.b*t+r.d*e+r.ty;return i.length===1&&i[0].action==="moveTo"?(i[0].data[0]=s,i[0].data[1]=o,this):(this._activePath.moveTo(s,o),this)}quadraticCurveTo(t,e,r,i,s){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}rect(t,e,r,i){return this._tick++,this._activePath.rect(t,e,r,i,this._transform.clone()),this}roundRect(t,e,r,i,s){return this._tick++,this._activePath.roundRect(t,e,r,i,s,this._transform.clone()),this}poly(t,e){return this._tick++,this._activePath.poly(t,e,this._transform.clone()),this}regularPoly(t,e,r,i,s=0,o){return this._tick++,this._activePath.regularPoly(t,e,r,i,s,o),this}roundPoly(t,e,r,i,s,o){return this._tick++,this._activePath.roundPoly(t,e,r,i,s,o),this}roundShape(t,e,r,i){return this._tick++,this._activePath.roundShape(t,e,r,i),this}filletRect(t,e,r,i,s){return this._tick++,this._activePath.filletRect(t,e,r,i,s),this}chamferRect(t,e,r,i,s,o){return this._tick++,this._activePath.chamferRect(t,e,r,i,s,o),this}star(t,e,r,i,s=0,o=0){return this._tick++,this._activePath.star(t,e,r,i,s,o,this._transform.clone()),this}svg(t){return this._tick++,uh(t,this),this}restore(){const t=this._stateStack.pop();return t&&(this._transform=t.transform,this._fillStyle=t.fillStyle,this._strokeStyle=t.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(t){return this._transform.rotate(t),this}scale(t,e=t){return this._transform.scale(t,e),this}setTransform(t,e,r,i,s,o){return t instanceof H?(this._transform.set(t.a,t.b,t.c,t.d,t.tx,t.ty),this):(this._transform.set(t,e,r,i,s,o),this)}transform(t,e,r,i,s,o){return t instanceof H?(this._transform.append(t),this):(bs.set(t,e,r,i,s,o),this._transform.append(bs),this)}translate(t,e=t){return this._transform.translate(t,e),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const t=this._bounds;t.clear();for(let e=0;e<this.instructions.length;e++){const r=this.instructions[e],i=r.action;if(i==="fill"){const s=r.data;t.addBounds(s.path.bounds)}else if(i==="texture"){const s=r.data;t.addFrame(s.dx,s.dy,s.dx+s.dw,s.dy+s.dh,s.transform)}if(i==="stroke"){const s=r.data,o=s.style.width/2,a=s.path.bounds;t.addFrame(a.minX-o,a.minY-o,a.maxX+o,a.maxY+o)}}return t}containsPoint(t){var i;if(!this.bounds.containsPoint(t.x,t.y))return!1;const e=this.instructions;let r=!1;for(let s=0;s<e.length;s++){const o=e[s],a=o.data,l=a.path;if(!o.action||!l)continue;const c=a.style,u=l.shapePath.shapePrimitives;for(let h=0;h<u.length;h++){const f=u[h].shape;if(!c||!f)continue;const d=u[h].transform,m=d?d.applyInverse(t,fh):t;o.action==="fill"?r=f.contains(m.x,m.y):r=f.strokeContains(m.x,m.y,c.width);const g=a.hole;if(g){const p=(i=g.shapePath)==null?void 0:i.shapePrimitives;if(p)for(let x=0;x<p.length;x++)p[x].shape.contains(m.x,m.y)&&(r=!1)}if(r)return!0}}return r}destroy(t=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const r=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(r),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(r)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};vi.defaultFillStyle={color:16777215,alpha:1,texture:F.WHITE,matrix:null,fill:null};vi.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:F.WHITE,matrix:null,fill:null};let Gt=vi;function yi(n,t=1){var r;const e=(r=Me.RETINA_PREFIX)==null?void 0:r.exec(n);return e?parseFloat(e[1]):t}function _i(n,t,e){n.label=e,n._sourceOrigin=e;const r=new F({source:n,label:e}),i=()=>{delete t.promiseCache[e],ft.has(e)&&ft.remove(e)};return r.source.once("destroy",()=>{t.promiseCache[e]&&(ct("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),i())}),r.once("destroy",()=>{n.destroyed||(ct("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),i())}),r}const dh=".svg",mh="image/svg+xml",ph={extension:{type:D.LoadParser,priority:le.Low},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(n){return Fe(n,mh)||Ie(n,dh)},async load(n,t,e){return t.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?xh(n):gh(n,t,e,this.config.crossOrigin)},unload(n){n.destroy(!0)}};async function gh(n,t,e,r){var p,x,v;const s=await(await lt.get().fetch(n)).blob(),o=URL.createObjectURL(s),a=new Image;a.src=o,a.crossOrigin=r,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),c=l.getContext("2d"),u=((p=t.data)==null?void 0:p.resolution)||yi(n),h=((x=t.data)==null?void 0:x.width)??a.width,f=((v=t.data)==null?void 0:v.height)??a.height;l.width=h*u,l.height=f*u,c.drawImage(a,0,0,h*u,f*u);const{parseAsGraphicsContext:d,...m}=t.data,g=new ze({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:u,...m});return _i(g,e,n)}async function xh(n){const e=await(await lt.get().fetch(n)).text(),r=new Gt;return r.svg(e),r}const vh=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;let be=null,qr=class{constructor(){be||(be=URL.createObjectURL(new Blob([vh],{type:"application/javascript"}))),this.worker=new Worker(be)}};qr.revokeObjectURL=function(){be&&(URL.revokeObjectURL(be),be=null)};const yh=`(function () {
    'use strict';

    async function loadImageBitmap(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      const imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap;
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;let Se=null;class Wo{constructor(){Se||(Se=URL.createObjectURL(new Blob([yh],{type:"application/javascript"}))),this.worker=new Worker(Se)}}Wo.revokeObjectURL=function(){Se&&(URL.revokeObjectURL(Se),Se=null)};let Ss=0,Ar;class _h{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(t=>{const{worker:e}=new qr;e.addEventListener("message",r=>{e.terminate(),qr.revokeObjectURL(),t(r.data)})}),this._isImageBitmapSupported)}loadImageBitmap(t){return this._run("loadImageBitmap",[t])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Ar===void 0&&(Ar=navigator.hardwareConcurrency||4);let t=this._workerPool.pop();return!t&&this._createdWorkers<Ar&&(this._createdWorkers++,t=new Wo().worker,t.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),t}_returnWorker(t){this._workerPool.push(t)}_complete(t){t.error!==void 0?this._resolveHash[t.uuid].reject(t.error):this._resolveHash[t.uuid].resolve(t.data),this._resolveHash[t.uuid]=null}async _run(t,e){await this._initWorkers();const r=new Promise((i,s)=>{this._queue.push({id:t,arguments:e,resolve:i,reject:s})});return this._next(),r}_next(){if(!this._queue.length)return;const t=this._getWorker();if(!t)return;const e=this._queue.pop(),r=e.id;this._resolveHash[Ss]={resolve:e.resolve,reject:e.reject},t.postMessage({data:e.arguments,uuid:Ss++,id:r})}}const ws=new _h,bh=[".jpeg",".jpg",".png",".webp",".avif"],Sh=["image/jpeg","image/png","image/webp","image/avif"];async function wh(n){const t=await lt.get().fetch(n);if(!t.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${n}: ${t.status} ${t.statusText}`);const e=await t.blob();return await createImageBitmap(e)}const Xo={name:"loadTextures",extension:{type:D.LoadParser,priority:le.High},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(n){return Fe(n,Sh)||Ie(n,bh)},async load(n,t,e){var s;let r=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await ws.isImageBitmapSupported()?r=await ws.loadImageBitmap(n):r=await wh(n):r=await new Promise(o=>{r=new Image,r.crossOrigin=this.config.crossOrigin,r.src=n,r.complete?o(r):r.onload=()=>{o(r)}});const i=new ze({resource:r,alphaMode:"premultiply-alpha-on-upload",resolution:((s=t.data)==null?void 0:s.resolution)||yi(n),...t.data});return _i(i,e,n)},unload(n){n.destroy(!0)}},Yo=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Ch=Yo.map(n=>`video/${n.substring(1)}`);function Ah(n,t,e){e===void 0&&!t.startsWith("data:")?n.crossOrigin=Ph(t):e!==!1&&(n.crossOrigin=typeof e=="string"?e:"anonymous")}function Th(n){return new Promise((t,e)=>{n.addEventListener("canplaythrough",r),n.addEventListener("error",i),n.load();function r(){s(),t()}function i(o){s(),e(o)}function s(){n.removeEventListener("canplaythrough",r),n.removeEventListener("error",i)}})}function Ph(n,t=globalThis.location){if(n.startsWith("data:"))return"";t=t||globalThis.location;const e=new URL(n,document.baseURI);return e.hostname!==t.hostname||e.port!==t.port||e.protocol!==t.protocol?"anonymous":""}const zh={name:"loadVideo",extension:{type:D.LoadParser},config:null,test(n){const t=Fe(n,Ch),e=Ie(n,Yo);return t||e},async load(n,t,e){var l,c;const r={...bn.defaultOptions,resolution:((l=t.data)==null?void 0:l.resolution)||yi(n),alphaMode:((c=t.data)==null?void 0:c.alphaMode)||await so(),...t.data},i=document.createElement("video"),s={preload:r.autoLoad!==!1?"auto":void 0,"webkit-playsinline":r.playsinline!==!1?"":void 0,playsinline:r.playsinline!==!1?"":void 0,muted:r.muted===!0?"":void 0,loop:r.loop===!0?"":void 0,autoplay:r.autoPlay!==!1?"":void 0};Object.keys(s).forEach(u=>{const h=s[u];h!==void 0&&i.setAttribute(u,h)}),r.muted===!0&&(i.muted=!0),Ah(i,n,r.crossorigin);const o=document.createElement("source");let a;if(n.startsWith("data:"))a=n.slice(5,n.indexOf(";"));else if(!n.startsWith("blob:")){const u=n.split("?")[0].slice(n.lastIndexOf(".")+1).toLowerCase();a=bn.MIME_TYPES[u]||`video/${u}`}return o.src=n,a&&(o.type=a),new Promise(u=>{const h=async()=>{const f=new bn({...r,resource:i});i.removeEventListener("canplay",h),t.data.preload&&await Th(i),u(_i(f,e,n))};i.addEventListener("canplay",h),i.appendChild(o)})},unload(n){n.destroy(!0)}},Ho={extension:D.ResolveParser,test:Xo.test,parse:n=>{var t;return{resolution:parseFloat(((t=Me.RETINA_PREFIX.exec(n))==null?void 0:t[1])??"1"),format:n.split(".").pop(),src:n}}},Mh={extension:D.ResolveParser,test:n=>Me.RETINA_PREFIX.test(n)&&n.endsWith(".json"),parse:Ho.parse};class Fh{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Me,this.loader=new Qu,this.cache=ft,this._backgroundLoader=new Vu(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(t={}){var s,o;if(this._initialized){ct("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,t.defaultSearchParams&&this.resolver.setDefaultSearchParams(t.defaultSearchParams),t.basePath&&(this.resolver.basePath=t.basePath),t.bundleIdentifier&&this.resolver.setBundleIdentifier(t.bundleIdentifier),t.manifest){let a=t.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const e=((s=t.texturePreference)==null?void 0:s.resolution)??1,r=typeof e=="number"?[e]:e,i=await this._detectFormats({preferredFormats:(o=t.texturePreference)==null?void 0:o.format,skipDetections:t.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:i,resolution:r}}),t.preferences&&this.setPreferences(t.preferences)}add(t){this.resolver.add(t)}async load(t,e){this._initialized||await this.init();const r=Rn(t),i=yt(t).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(c=>!this.resolver.hasKey(c))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),s=this.resolver.resolve(i),o=await this._mapLoadToResolve(s,e);return r?o[i[0]]:o}addBundle(t,e){this.resolver.addBundle(t,e)}async loadBundle(t,e){this._initialized||await this.init();let r=!1;typeof t=="string"&&(r=!0,t=[t]);const i=this.resolver.resolveBundle(t),s={},o=Object.keys(i);let a=0,l=0;const c=()=>{e==null||e(++a/l)},u=o.map(h=>{const f=i[h];return l+=Object.keys(f).length,this._mapLoadToResolve(f,c).then(d=>{s[h]=d})});return await Promise.all(u),r?s[t[0]]:s}async backgroundLoad(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolve(t);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolveBundle(t);Object.values(e).forEach(r=>{this._backgroundLoader.add(Object.values(r))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(t){if(typeof t=="string")return ft.get(t);const e={};for(let r=0;r<t.length;r++)e[r]=ft.get(t[r]);return e}async _mapLoadToResolve(t,e){const r=[...new Set(Object.values(t))];this._backgroundLoader.active=!1;const i=await this.loader.load(r,e);this._backgroundLoader.active=!0;const s={};return r.forEach(o=>{const a=i[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(c=>{s[c]=a}),ft.set(l,a)}),s}async unload(t){this._initialized||await this.init();const e=yt(t).map(i=>typeof i!="string"?i.src:i),r=this.resolver.resolve(e);await this._unloadFromResolved(r)}async unloadBundle(t){this._initialized||await this.init(),t=yt(t);const e=this.resolver.resolveBundle(t),r=Object.keys(e).map(i=>this._unloadFromResolved(e[i]));await Promise.all(r)}async _unloadFromResolved(t){const e=Object.values(t);e.forEach(r=>{ft.remove(r.src)}),await this.loader.unload(e)}async _detectFormats(t){let e=[];t.preferredFormats&&(e=Array.isArray(t.preferredFormats)?t.preferredFormats:[t.preferredFormats]);for(const r of t.detections)t.skipDetections||await r.test()?e=await r.add(e):t.skipDetections||(e=await r.remove(e));return e=e.filter((r,i)=>e.indexOf(r)===i),e}get detections(){return this._detections}setPreferences(t){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(r=>r in t).forEach(r=>{e.config[r]=t[r]})})}}const re=new Fh;gt.handleByList(D.LoadParser,re.loader.parsers).handleByList(D.ResolveParser,re.resolver.parsers).handleByList(D.CacheParser,re.cache.parsers).handleByList(D.DetectionParser,re.detections);gt.add(Wu,Yu,Xu,Zu,ju,qu,Ku,ec,ic,fc,ph,Xo,zh,Ho,Mh);const Cs={loader:D.LoadParser,resolver:D.ResolveParser,cache:D.CacheParser,detection:D.DetectionParser};gt.handle(D.Asset,n=>{const t=n.ref;Object.entries(Cs).filter(([e])=>!!t[e]).forEach(([e,r])=>gt.add(Object.assign(t[e],{extension:t[e].extension??r})))},n=>{const t=n.ref;Object.keys(Cs).filter(e=>!!t[e]).forEach(e=>gt.remove(t[e]))});var Ih=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,Oh=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,As=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;const jo=class qo extends ${constructor(t){t={...qo.defaultOptions,...t};const e=L.from({vertex:{source:As,entryPoint:"mainVertex"},fragment:{source:As,entryPoint:"mainFragment"}}),r=N.from({vertex:Ih,fragment:Oh,name:"alpha-filter"}),{alpha:i,...s}=t,o=new go({uAlpha:{value:i,type:"f32"}});super({...s,gpuProgram:e,glProgram:r,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};jo.defaultOptions={alpha:1};let Rh=jo,Uh=0;class Bh{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,e,r){const i=new Pt({...this.textureOptions,width:t,height:e,resolution:1,antialias:r,autoGarbageCollect:!0});return new F({source:i,label:`texturePool_${Uh++}`})}getOptimalTexture(t,e,r=1,i){let s=Math.ceil(t*r-1e-6),o=Math.ceil(e*r-1e-6);s=Fi(s),o=Fi(o);const a=(s<<17)+(o<<1)+(i?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(s,o,i)),l.source._resolution=r,l.source.width=s/r,l.source.height=o/r,l.source.pixelWidth=s,l.source.pixelHeight=o,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=e,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(t,e=!1){const r=t.source;return this.getOptimalTexture(t.width,t.height,r._resolution,e)}returnTexture(t){const e=this._poolKeyHash[t.uid];this._texturePool[e].push(t)}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const r=this._texturePool[e];if(r)for(let i=0;i<r.length;i++)r[i].destroy(!0)}this._texturePool={}}}const pt=new Bh,Ko={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},kh=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function Eh(n){const t=Ko[n],e=t.length;let r=kh,i="";const s="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let o;for(let a=0;a<n;a++){let l=s.replace("%index%",a.toString());o=a,a>=e&&(o=n-a-1),l=l.replace("%value%",t[o].toString()),i+=l,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r}const Dh=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function Lh(n,t){const e=Math.ceil(n/2);let r=Dh,i="",s;t?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let o=0;o<n;o++){let a=s.replace("%index%",o.toString());a=a.replace("%sampleIndex%",`${o-(e-1)}.0`),i+=a,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r=r.replace("%dimension%",t?"z":"w"),r}function Gh(n,t){const e=Lh(t,n),r=Eh(t);return N.from({vertex:e,fragment:r,name:`blur-${n?"horizontal":"vertical"}-pass-filter`})}var Nh=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let strength = gfu.uInputSize.w * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function $h(n,t){const e=Ko[t],r=e.length,i=[],s=[],o=[];for(let h=0;h<t;h++){i[h]=`@location(${h}) offset${h}: vec2<f32>,`,n?s[h]=`filteredCord + vec2(${h-r+1} * strength, 0.0),`:s[h]=`filteredCord + vec2(0.0, ${h-r+1} * strength),`;const f=h<r?h:t-h-1,d=e[f].toString();o[h]=`finalColor += textureSample(uTexture, uSampler, offset${h}) * ${d};`}const a=i.join(`
`),l=s.join(`
`),c=o.join(`
`),u=Nh.replace("%blur-struct%",a).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",a).replace("%blur-sampling%",c);return L.from({vertex:{source:u,entryPoint:"mainVertex"},fragment:{source:u,entryPoint:"mainFragment"}})}const Zo=class Qo extends ${constructor(t){t={...Qo.defaultOptions,...t};const e=Gh(t.horizontal,t.kernelSize),r=$h(t.horizontal,t.kernelSize);super({glProgram:e,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,e,r,i){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,e,r,i);else{const s=pt.getSameSizeTexture(e);let o=e,a=s;this._state.blend=!1;for(let l=0;l<this.passes-1;l++){t.applyFilter(this,o,a,t.renderer.type===Un.WEBGPU);const c=a;a=o,o=c}this._state.blend=!0,t.applyFilter(this,o,r,i),pt.returnTexture(s)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};Zo.defaultOptions={strength:8,quality:4,kernelSize:5};let Ts=Zo;class $t extends Z{constructor(t){t instanceof Gt&&(t={context:t});const{context:e,roundPixels:r,...i}=t||{};super({label:"Graphics",...i}),this.canBundle=!0,this.renderPipeId="graphics",this._roundPixels=0,e?this._context=e:this._context=this._ownedContext=new Gt,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=r??!1}set context(t){t!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=t,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(t){t.addBounds(this._context.bounds)}containsPoint(t){return this._context.containsPoint(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}onViewUpdate(){if(this._didChangeId+=4096,this._didGraphicsUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){this._ownedContext&&!t?this._ownedContext.destroy(t):(t===!0||(t==null?void 0:t.context)===!0)&&this._context.destroy(t),this._ownedContext=null,this._context=null,super.destroy(t)}_callContextMethod(t,e){return this.context[t](...e),this}setFillStyle(...t){return this._callContextMethod("setFillStyle",t)}setStrokeStyle(...t){return this._callContextMethod("setStrokeStyle",t)}fill(...t){return this._callContextMethod("fill",t)}stroke(...t){return this._callContextMethod("stroke",t)}texture(...t){return this._callContextMethod("texture",t)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...t){return this._callContextMethod("arc",t)}arcTo(...t){return this._callContextMethod("arcTo",t)}arcToSvg(...t){return this._callContextMethod("arcToSvg",t)}bezierCurveTo(...t){return this._callContextMethod("bezierCurveTo",t)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...t){return this._callContextMethod("ellipse",t)}circle(...t){return this._callContextMethod("circle",t)}path(...t){return this._callContextMethod("path",t)}lineTo(...t){return this._callContextMethod("lineTo",t)}moveTo(...t){return this._callContextMethod("moveTo",t)}quadraticCurveTo(...t){return this._callContextMethod("quadraticCurveTo",t)}rect(...t){return this._callContextMethod("rect",t)}roundRect(...t){return this._callContextMethod("roundRect",t)}poly(...t){return this._callContextMethod("poly",t)}regularPoly(...t){return this._callContextMethod("regularPoly",t)}roundPoly(...t){return this._callContextMethod("roundPoly",t)}roundShape(...t){return this._callContextMethod("roundShape",t)}filletRect(...t){return this._callContextMethod("filletRect",t)}chamferRect(...t){return this._callContextMethod("chamferRect",t)}star(...t){return this._callContextMethod("star",t)}svg(...t){return this._callContextMethod("svg",t)}restore(...t){return this._callContextMethod("restore",t)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...t){return this._callContextMethod("rotate",t)}scaleTransform(...t){return this._callContextMethod("scale",t)}setTransform(...t){return this._callContextMethod("setTransform",t)}transform(...t){return this._callContextMethod("transform",t)}translateTransform(...t){return this._callContextMethod("translate",t)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(t){this._context.fillStyle=t}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(t){this._context.strokeStyle=t}clone(t=!1){return t?new $t(this._context.clone()):(this._ownedContext=null,new $t(this._context))}lineStyle(t,e,r){U(Q,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const i={};return t&&(i.width=t),e&&(i.color=e),r&&(i.alpha=r),this.context.strokeStyle=i,this}beginFill(t,e){U(Q,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const r={};return t&&(r.color=t),e&&(r.alpha=e),this.context.fillStyle=r,this}endFill(){U(Q,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const t=this.context.strokeStyle;return(t.width!==Gt.defaultStrokeStyle.width||t.color!==Gt.defaultStrokeStyle.color||t.alpha!==Gt.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...t){return U(Q,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",t)}drawEllipse(...t){return U(Q,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",t)}drawPolygon(...t){return U(Q,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",t)}drawRect(...t){return U(Q,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",t)}drawRoundedRect(...t){return U(Q,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",t)}drawStar(...t){return U(Q,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",t)}}const Jo=class ta extends Fo{constructor(...t){let e=t[0]??{};e instanceof Float32Array&&(U(Q,"use new MeshGeometry({ positions, uvs, indices }) instead"),e={positions:e,uvs:t[1],indices:t[2]}),e={...ta.defaultOptions,...e};const r=e.positions||new Float32Array([0,0,1,0,1,1,0,1]),i=e.uvs||new Float32Array([0,0,1,0,1,1,0,1]),s=e.indices||new Uint32Array([0,1,2,0,2,3]),o=e.shrinkBuffersToFit,a=new Nt({data:r,label:"attribute-mesh-positions",shrinkToFit:o,usage:rt.VERTEX|rt.COPY_DST}),l=new Nt({data:i,label:"attribute-mesh-uvs",shrinkToFit:o,usage:rt.VERTEX|rt.COPY_DST}),c=new Nt({data:s,label:"index-mesh-buffer",shrinkToFit:o,usage:rt.INDEX|rt.COPY_DST});super({attributes:{aPosition:{buffer:a,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:l,format:"float32x2",stride:2*4,offset:0}},indexBuffer:c,topology:e.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(t){this.attributes.aPosition.buffer.data=t}get uvs(){return this.attributes.aUV.buffer.data}set uvs(t){this.attributes.aUV.buffer.data=t}get indices(){return this.indexBuffer.data}set indices(t){this.indexBuffer.data=t}};Jo.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let Vh=Jo;class Wh extends Z{constructor(t,e){const{text:r,resolution:i,style:s,anchor:o,width:a,height:l,roundPixels:c,...u}=t;super({...u}),this.batched=!0,this.resolution=null,this._didTextUpdate=!0,this._roundPixels=0,this._bounds=new Ct,this._boundsDirty=!0,this._styleClass=e,this.text=r??"",this.style=s,this.resolution=i??null,this.allowChildren=!1,this._anchor=new ht({_onUpdate:()=>{this.onViewUpdate()}}),o&&(this.anchor=o),this.roundPixels=c??!1,a&&(this.width=a),l&&(this.height=l)}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}set text(t){t=t.toString(),this._text!==t&&(this._text=t,this.onViewUpdate())}get text(){return this._text}get style(){return this._style}set style(t){var e;t=t||{},(e=this._style)==null||e.off("update",this.onViewUpdate,this),t instanceof this._styleClass?this._style=t:this._style=new this._styleClass(t),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(t){this._setWidth(t,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(t){this._setHeight(t,this.bounds.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this.bounds.width,t.height=Math.abs(this.scale.y)*this.bounds.height,t}setSize(t,e){let r,i;typeof t!="object"?(r=t,i=e??t):(r=t.width,i=t.height??t.width),r!==void 0&&this._setWidth(r,this.bounds.width),i!==void 0&&this._setHeight(i,this.bounds.height)}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}containsPoint(t){const e=this.bounds.maxX,r=this.bounds.maxY,i=-e*this.anchor.x;let s=0;return t.x>=i&&t.x<=i+e&&(s=-r*this.anchor.y,t.y>=s&&t.y<=s+r)}onViewUpdate(){if(this._didChangeId+=4096,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0,this._didTextUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}_getKey(){return`${this.text}:${this._style.styleKey}`}destroy(t=!1){super.destroy(t),this.owner=null,this._bounds=null,this._anchor=null,(typeof t=="boolean"?t:t!=null&&t.style)&&this._style.destroy(t),this._style=null,this._text=null}}function Xh(n,t){let e=n[0]??{};return(typeof e=="string"||n[1])&&(U(Q,`use new ${t}({ text: "hi!", style }) instead`),e={text:e,style:n[1]}),e}const Yh=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function Hh(n){const t=typeof n.fontSize=="number"?`${n.fontSize}px`:n.fontSize;let e=n.fontFamily;Array.isArray(n.fontFamily)||(e=n.fontFamily.split(","));for(let r=e.length-1;r>=0;r--){let i=e[r].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&!Yh.includes(i)&&(i=`"${i}"`),e[r]=i}return`${n.fontStyle} ${n.fontVariant} ${n.fontWeight} ${t} ${e.join(",")}`}const Tr={willReadFrequently:!0},_t=class P{static get experimentalLetterSpacingSupported(){let t=P._experimentalLetterSpacingSupported;if(t!==void 0){const e=lt.get().getCanvasRenderingContext2D().prototype;t=P._experimentalLetterSpacingSupported="letterSpacing"in e||"textLetterSpacing"in e}return t}constructor(t,e,r,i,s,o,a,l,c){this.text=t,this.style=e,this.width=r,this.height=i,this.lines=s,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=c}static measureText(t=" ",e,r=P._canvas,i=e.wordWrap){var v;const s=`${t}:${e.styleKey}`;if(P._measurementCache[s])return P._measurementCache[s];const o=Hh(e),a=P.measureFont(o);a.fontSize===0&&(a.fontSize=e.fontSize,a.ascent=e.fontSize);const l=P.__context;l.font=o;const u=(i?P._wordWrap(t,e,r):t).split(/(?:\r\n|\r|\n)/),h=new Array(u.length);let f=0;for(let y=0;y<u.length;y++){const _=P._measureText(u[y],e.letterSpacing,l);h[y]=_,f=Math.max(f,_)}const d=((v=e._stroke)==null?void 0:v.width)||0;let m=f+d;e.dropShadow&&(m+=e.dropShadow.distance);const g=e.lineHeight||a.fontSize+d;let p=Math.max(g,a.fontSize+d*2)+(u.length-1)*(g+e.leading);return e.dropShadow&&(p+=e.dropShadow.distance),new P(t,e,m,p,u,h,g+e.leading,f,a)}static _measureText(t,e,r){let i=!1;P.experimentalLetterSpacingSupported&&(P.experimentalLetterSpacing?(r.letterSpacing=`${e}px`,r.textLetterSpacing=`${e}px`,i=!0):(r.letterSpacing="0px",r.textLetterSpacing="0px"));let s=r.measureText(t).width;return s>0&&(i?s-=e:s+=(P.graphemeSegmenter(t).length-1)*e),s}static _wordWrap(t,e,r=P._canvas){const i=r.getContext("2d",Tr);let s=0,o="",a="";const l=Object.create(null),{letterSpacing:c,whiteSpace:u}=e,h=P._collapseSpaces(u),f=P._collapseNewlines(u);let d=!h;const m=e.wordWrapWidth+c,g=P._tokenize(t);for(let p=0;p<g.length;p++){let x=g[p];if(P._isNewline(x)){if(!f){a+=P._addLine(o),d=!h,o="",s=0;continue}x=" "}if(h){const y=P.isBreakingSpace(x),_=P.isBreakingSpace(o[o.length-1]);if(y&&_)continue}const v=P._getFromCache(x,c,l,i);if(v>m)if(o!==""&&(a+=P._addLine(o),o="",s=0),P.canBreakWords(x,e.breakWords)){const y=P.wordWrapSplit(x);for(let _=0;_<y.length;_++){let z=y[_],E=z,T=1;for(;y[_+T];){const S=y[_+T];if(!P.canBreakChars(E,S,x,_,e.breakWords))z+=S;else break;E=S,T++}_+=T-1;const I=P._getFromCache(z,c,l,i);I+s>m&&(a+=P._addLine(o),d=!1,o="",s=0),o+=z,s+=I}}else{o.length>0&&(a+=P._addLine(o),o="",s=0);const y=p===g.length-1;a+=P._addLine(x,!y),d=!1,o="",s=0}else v+s>m&&(d=!1,a+=P._addLine(o),o="",s=0),(o.length>0||!P.isBreakingSpace(x)||d)&&(o+=x,s+=v)}return a+=P._addLine(o,!1),a}static _addLine(t,e=!0){return t=P._trimRight(t),t=e?`${t}
`:t,t}static _getFromCache(t,e,r,i){let s=r[t];return typeof s!="number"&&(s=P._measureText(t,e,i)+e,r[t]=s),s}static _collapseSpaces(t){return t==="normal"||t==="pre-line"}static _collapseNewlines(t){return t==="normal"}static _trimRight(t){if(typeof t!="string")return"";for(let e=t.length-1;e>=0;e--){const r=t[e];if(!P.isBreakingSpace(r))break;t=t.slice(0,-1)}return t}static _isNewline(t){return typeof t!="string"?!1:P._newlines.includes(t.charCodeAt(0))}static isBreakingSpace(t,e){return typeof t!="string"?!1:P._breakingSpaces.includes(t.charCodeAt(0))}static _tokenize(t){const e=[];let r="";if(typeof t!="string")return e;for(let i=0;i<t.length;i++){const s=t[i],o=t[i+1];if(P.isBreakingSpace(s,o)||P._isNewline(s)){r!==""&&(e.push(r),r=""),e.push(s);continue}r+=s}return r!==""&&e.push(r),e}static canBreakWords(t,e){return e}static canBreakChars(t,e,r,i,s){return!0}static wordWrapSplit(t){return P.graphemeSegmenter(t)}static measureFont(t){if(P._fonts[t])return P._fonts[t];const e=P._context;e.font=t;const r=e.measureText(P.METRICS_STRING+P.BASELINE_SYMBOL),i={ascent:r.actualBoundingBoxAscent,descent:r.actualBoundingBoxDescent,fontSize:r.actualBoundingBoxAscent+r.actualBoundingBoxDescent};return P._fonts[t]=i,i}static clearMetrics(t=""){t?delete P._fonts[t]:P._fonts={}}static get _canvas(){if(!P.__canvas){let t;try{const e=new OffscreenCanvas(0,0),r=e.getContext("2d",Tr);if(r!=null&&r.measureText)return P.__canvas=e,e;t=lt.get().createCanvas()}catch{t=lt.get().createCanvas()}t.width=t.height=10,P.__canvas=t}return P.__canvas}static get _context(){return P.__context||(P.__context=P._canvas.getContext("2d",Tr)),P.__context}};_t.METRICS_STRING="|ÉqÅ";_t.BASELINE_SYMBOL="M";_t.BASELINE_MULTIPLIER=1.4;_t.HEIGHT_MULTIPLIER=2;_t.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const n=new Intl.Segmenter;return t=>[...n.segment(t)].map(e=>e.segment)}return n=>[...n]})();_t.experimentalLetterSpacing=!1;_t._fonts={};_t._newlines=[10,13];_t._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];_t._measurementCache={};let jh=_t;const Ps=["_fontFamily","_fontStyle","_fontSize","_fontVariant","_fontWeight","_breakWords","_align","_leading","_letterSpacing","_lineHeight","_textBaseline","_whiteSpace","_wordWrap","_wordWrapWidth","_padding","_cssOverrides","_trim"];function qh(n){const t=[];let e=0;for(let r=0;r<Ps.length;r++){const i=Ps[r];t[e++]=n[i]}return e=ea(n._fill,t,e),e=Kh(n._stroke,t,e),t.join("-")}function ea(n,t,e){var r;return n&&(t[e++]=n.color,t[e++]=n.alpha,t[e++]=(r=n.fill)==null?void 0:r.uid),e}function Kh(n,t,e){return n&&(e=ea(n,t,e),t[e++]=n.width,t[e++]=n.alignment,t[e++]=n.cap,t[e++]=n.join,t[e++]=n.miterLimit),e}const bi=class me extends Tt{constructor(t={}){super(),Zh(t);const e={...me.defaultTextStyle,...t};for(const r in e){const i=r;this[i]=e[r]}this.update()}get align(){return this._align}set align(t){this._align=t,this.update()}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords=t,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(t){t!==null&&typeof t=="object"?this._dropShadow={...me.defaultDropShadow,...t}:this._dropShadow=t?{...me.defaultDropShadow}:null,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily=t,this.update()}get fontSize(){return this._fontSize}set fontSize(t){typeof t=="string"?this._fontSize=parseInt(t,10):this._fontSize=t,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle=t,this.update()}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant=t,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight=t,this.update()}get leading(){return this._leading}set leading(t){this._leading=t,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing=t,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight=t,this.update()}get padding(){return this._padding}set padding(t){this._padding=t,this.update()}get trim(){return this._trim}set trim(t){this._trim=t,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline=t,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace=t,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap=t,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth=t,this.update()}get fill(){return this._originalFill}set fill(t){t!==this._originalFill&&(this._originalFill=t,this._fill=Lt(t===0?"black":t,Gt.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(t){t!==this._originalStroke&&(this._originalStroke=t,this._stroke=Lt(t,Gt.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=qh(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}reset(){const t=me.defaultTextStyle;for(const e in t)this[e]=t[e]}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new me({align:this.align,breakWords:this.breakWords,dropShadow:this.dropShadow,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(t=!1){var r,i,s,o;if(this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const a=typeof t=="boolean"?t:t==null?void 0:t.textureSource;(r=this._fill)!=null&&r.texture&&this._fill.texture.destroy(a),(i=this._originalFill)!=null&&i.texture&&this._originalFill.texture.destroy(a),(s=this._stroke)!=null&&s.texture&&this._stroke.texture.destroy(a),(o=this._originalStroke)!=null&&o.texture&&this._originalStroke.texture.destroy(a)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}};bi.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};bi.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let na=bi;function Zh(n){const t=n;if(typeof t.dropShadow=="boolean"&&t.dropShadow){const e=na.defaultDropShadow;n.dropShadow={alpha:t.dropShadowAlpha??e.alpha,angle:t.dropShadowAngle??e.angle,blur:t.dropShadowBlur??e.blur,color:t.dropShadowColor??e.color,distance:t.dropShadowDistance??e.distance}}if(t.strokeThickness!==void 0){U(Q,"strokeThickness is now a part of stroke");const e=t.stroke;n.stroke={color:e,width:t.strokeThickness}}if(Array.isArray(t.fill)){U(Q,"gradient fill is now a fill pattern: `new FillGradient(...)`");const e=new Vo(0,0,0,n.fontSize*1.7),r=t.fill.map(i=>j.shared.setValue(i).toNumber());r.forEach((i,s)=>{const o=t.fillGradientStops[s]??s/r.length;e.addColorStop(o,i)}),n.fill={fill:e}}}class Qh extends Wh{constructor(...t){const e=Xh(t,"Text");super(e,na),this.renderPipeId="text"}_updateBounds(){const t=this._bounds,e=this._style.padding,r=this._anchor,i=jh.measureText(this._text,this._style),{width:s,height:o}=i;t.minX=-r._x*s-e,t.maxX=t.minX+s+e*2,t.minY=-r._y*o-e,t.maxY=t.minY+o+e*2}}const ra=class ia extends Vh{constructor(...t){super({});let e=t[0]??{};typeof e=="number"&&(U(Q,"PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"),e={width:e,height:t[1],verticesX:t[2],verticesY:t[3]}),this.build(e)}build(t){t={...ia.defaultOptions,...t},this.verticesX=this.verticesX??t.verticesX,this.verticesY=this.verticesY??t.verticesY,this.width=this.width??t.width,this.height=this.height??t.height;const e=this.verticesX*this.verticesY,r=[],i=[],s=[],o=this.verticesX-1,a=this.verticesY-1,l=this.width/o,c=this.height/a;for(let h=0;h<e;h++){const f=h%this.verticesX,d=h/this.verticesX|0;r.push(f*l,d*c),i.push(f/o,d/a)}const u=o*a;for(let h=0;h<u;h++){const f=h%o,d=h/o|0,m=d*this.verticesX+f,g=d*this.verticesX+f+1,p=(d+1)*this.verticesX+f,x=(d+1)*this.verticesX+f+1;s.push(m,g,p,g,x,p)}this.buffers[0].data=new Float32Array(r),this.buffers[1].data=new Float32Array(i),this.indexBuffer.data=new Uint32Array(s),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}};ra.defaultOptions={width:100,height:100,verticesX:10,verticesY:10};let Jh=ra;const sa=class oa extends Jh{constructor(t={}){t={...oa.defaultOptions,...t},super({width:t.width,height:t.height,verticesX:4,verticesY:4}),this.update(t)}update(t){this.width=t.width??this.width,this.height=t.height??this.height,this._originalWidth=t.originalWidth??this._originalWidth,this._originalHeight=t.originalHeight??this._originalHeight,this._leftWidth=t.leftWidth??this._leftWidth,this._rightWidth=t.rightWidth??this._rightWidth,this._topHeight=t.topHeight??this._topHeight,this._bottomHeight=t.bottomHeight??this._bottomHeight,this.updateUvs(),this.updatePositions()}updatePositions(){const t=this.positions,e=this._leftWidth+this._rightWidth,r=this.width>e?1:this.width/e,i=this._topHeight+this._bottomHeight,s=this.height>i?1:this.height/i,o=Math.min(r,s);t[9]=t[11]=t[13]=t[15]=this._topHeight*o,t[17]=t[19]=t[21]=t[23]=this.height-this._bottomHeight*o,t[25]=t[27]=t[29]=t[31]=this.height,t[2]=t[10]=t[18]=t[26]=this._leftWidth*o,t[4]=t[12]=t[20]=t[28]=this.width-this._rightWidth*o,t[6]=t[14]=t[22]=t[30]=this.width,this.getBuffer("aPosition").update()}updateUvs(){const t=this.uvs;t[0]=t[8]=t[16]=t[24]=0,t[1]=t[3]=t[5]=t[7]=0,t[6]=t[14]=t[22]=t[30]=1,t[25]=t[27]=t[29]=t[31]=1;const e=1/this._originalWidth,r=1/this._originalHeight;t[2]=t[10]=t[18]=t[26]=e*this._leftWidth,t[9]=t[11]=t[13]=t[15]=r*this._topHeight,t[4]=t[12]=t[20]=t[28]=1-e*this._rightWidth,t[17]=t[19]=t[21]=t[23]=1-r*this._bottomHeight,this.getBuffer("aUV").update()}};sa.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100};let fe=sa;const aa=class la extends Z{constructor(t){var h,f,d,m;t instanceof F&&(t={texture:t});const{width:e,height:r,leftWidth:i,rightWidth:s,topHeight:o,bottomHeight:a,texture:l,roundPixels:c,...u}=t;super({label:"NineSliceSprite",...u}),this._roundPixels=0,this.renderPipeId="nineSliceSprite",this.batched=!0,this._didSpriteUpdate=!0,this.bounds={minX:0,minY:0,maxX:0,maxY:0},this._leftWidth=i??((h=l==null?void 0:l.defaultBorders)==null?void 0:h.left)??fe.defaultOptions.leftWidth,this._topHeight=o??((f=l==null?void 0:l.defaultBorders)==null?void 0:f.top)??fe.defaultOptions.topHeight,this._rightWidth=s??((d=l==null?void 0:l.defaultBorders)==null?void 0:d.right)??fe.defaultOptions.rightWidth,this._bottomHeight=a??((m=l==null?void 0:l.defaultBorders)==null?void 0:m.bottom)??fe.defaultOptions.bottomHeight,this.bounds.maxX=this._width=e??l.width??fe.defaultOptions.width,this.bounds.maxY=this._height=r??l.height??fe.defaultOptions.height,this.allowChildren=!1,this.texture=l??la.defaultOptions.texture,this.roundPixels=c??!1}get width(){return this._width}set width(t){this.bounds.maxX=this._width=t,this.onViewUpdate()}get height(){return this._height}set height(t){this.bounds.maxY=this._height=t,this.onViewUpdate()}get leftWidth(){return this._leftWidth}set leftWidth(t){this._leftWidth=t,this.onViewUpdate()}get topHeight(){return this._topHeight}set topHeight(t){this._topHeight=t,this.onViewUpdate()}get rightWidth(){return this._rightWidth}set rightWidth(t){this._rightWidth=t,this.onViewUpdate()}get bottomHeight(){return this._bottomHeight}set bottomHeight(t){this._bottomHeight=t,this.onViewUpdate()}get texture(){return this._texture}set texture(t){t||(t=F.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}get originalWidth(){return this._texture.width}get originalHeight(){return this._texture.height}onViewUpdate(){if(this._didChangeId+=4096,this._didSpriteUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}containsPoint(t){const e=this.bounds;return t.x>=e.minX&&t.x<=e.maxX&&t.y>=e.minY&&t.y<=e.maxY}destroy(t){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const r=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(r)}this._texture=null,this.bounds=null}};aa.defaultOptions={texture:F.EMPTY};let wn=aa;gt.add(nl,rl);const zs={bundles:[{name:"background",assets:{komnata1:"backgrounds/komnata1.jpg",model1:"backgrounds/model1f.webp",reflection:"backgrounds/reflection.png",hand:"backgrounds/handNew.png",beard:"backgrounds/beard.png",box:"backgrounds/box.png",leftArmTopZone:"backgrounds/leftArmTopZone.png",leftArmTop0:"backgrounds/leftArmTop0.png",leftArmBottomZone:"backgrounds/leftArmBottomZone.png",leftArmBottom0:"backgrounds/leftArmBottom0.png",rightArmTopZone:"backgrounds/rightArmTopZone.png",rightArmTop0:"backgrounds/rightArmTop0.png",RightArmBottomZone:"backgrounds/RightArmBottomZone.png",RightArmBottom0:"backgrounds/RightArmBottom0.png",RightLegTopZone:"backgrounds/RightLegTopZone.png",RightLegTop0:"backgrounds/RightLegTop0.png",RightLegBottomZone:"backgrounds/RightLegBottomZone.png",RightLegBottom0:"backgrounds/RightLegBottom0.png",LeftLegTopZone:"backgrounds/LeftLegTopZone.png",LeftLegTop0:"backgrounds/LeftLegTop0.png",LeftLegBottomZone:"backgrounds/LeftLegBottomZone.png",LeftLegBottom0:"backgrounds/LeftLegBottom0.png",LeftShoulderZone:"backgrounds/LeftShoulderZone.png",LeftShoulder0:"backgrounds/LeftShoulder0.png",RightShoulderZone:"backgrounds/RightShoulderZone.png",RightShoulder0:"backgrounds/RightShoulder0.png",MiddleZone:"backgrounds/MiddleZone.png",Middle0:"backgrounds/Middle0.png"}},{name:"buildings",assets:{}},{name:"diceAsset",assets:{dice:"dice/dice.webp",diceShadow:"dice/diceShadow.png",diceBackground:"dice/diceBackground.jpg",floor:"dice/floor.webp",wood:"dice/wood.webp"}},{name:"uiAsset",assets:{roomIcon:"UI/roomIcon.webp",buildings:"buildings/buildings.json"}},{name:"fonts",assets:{SofiaSans:"fonts/SofiaSans.ttf"}}]};var te={},Vt={};Object.defineProperty(Vt,"__esModule",{value:!0});Vt.Collector=void 0;class tf{constructor(t){this.emit=(...e)=>{t.emitCollecting(this,e)}}}Vt.Collector=tf;var Ln={};Object.defineProperty(Ln,"__esModule",{value:!0});Ln.CollectorArray=void 0;const ef=Vt;class nf extends ef.Collector{constructor(){super(...arguments),this.result=[]}handleResult(t){return this.result.push(t),!0}getResult(){return this.result}reset(){this.result.length=0}}Ln.CollectorArray=nf;var Gn={};Object.defineProperty(Gn,"__esModule",{value:!0});Gn.CollectorLast=void 0;const rf=Vt;class sf extends rf.Collector{handleResult(t){return this.result=t,!0}getResult(){return this.result}reset(){delete this.result}}Gn.CollectorLast=sf;var Nn={};Object.defineProperty(Nn,"__esModule",{value:!0});Nn.CollectorUntil0=void 0;const of=Vt;class af extends of.Collector{constructor(){super(...arguments),this.result=!1}handleResult(t){return this.result=t,this.result}getResult(){return this.result}reset(){this.result=!1}}Nn.CollectorUntil0=af;var $n={};Object.defineProperty($n,"__esModule",{value:!0});$n.CollectorWhile0=void 0;const lf=Vt;class uf extends lf.Collector{constructor(){super(...arguments),this.result=!1}handleResult(t){return this.result=t,!this.result}getResult(){return this.result}reset(){this.result=!1}}$n.CollectorWhile0=uf;var Vn={},Wn={};Object.defineProperty(Wn,"__esModule",{value:!0});Wn.SignalConnectionImpl=void 0;class cf{constructor(t,e){this.link=t,this.parentCleanup=e}disconnect(){return this.link!==null?(this.link.unlink(),this.link=null,this.parentCleanup(),this.parentCleanup=null,!0):!1}set enabled(t){this.link&&this.link.setEnabled(t)}get enabled(){return this.link!==null&&this.link.isEnabled()}}Wn.SignalConnectionImpl=cf;var Xn={};Object.defineProperty(Xn,"__esModule",{value:!0});Xn.SignalLink=void 0;class Si{constructor(t=null,e=null,r=0){this.enabled=!0,this.newLink=!1,this.callback=null,this.prev=t??this,this.next=e??this,this.order=r}isEnabled(){return this.enabled&&!this.newLink}setEnabled(t){this.enabled=t}unlink(){this.callback=null,this.next.prev=this.prev,this.prev.next=this.next}insert(t,e){let r=this.prev;for(;r!==this&&!(r.order<=e);)r=r.prev;const i=new Si(r,r.next,e);return i.callback=t,r.next=i,i.next.prev=i,i}}Xn.SignalLink=Si;Object.defineProperty(Vn,"__esModule",{value:!0});Vn.Signal=void 0;const hf=Wn,ff=Xn;class df{constructor(){this.head=new ff.SignalLink,this.hasNewLinks=!1,this.emitDepth=0,this.connectionsCount=0}getConnectionsCount(){return this.connectionsCount}hasConnections(){return this.connectionsCount>0}connect(t,e=0){this.connectionsCount++;const r=this.head.insert(t,e);return this.emitDepth>0&&(this.hasNewLinks=!0,r.newLink=!0),new hf.SignalConnectionImpl(r,()=>this.decrementConnectionCount())}decrementConnectionCount(){this.connectionsCount--}disconnect(t){for(let e=this.head.next;e!==this.head;e=e.next)if(e.callback===t)return this.decrementConnectionCount(),e.unlink(),!0;return!1}disconnectAll(){for(;this.head.next!==this.head;)this.head.next.unlink();this.connectionsCount=0}emit(...t){this.emitDepth++;for(let e=this.head.next;e!==this.head;e=e.next)e.isEnabled()&&e.callback&&e.callback.apply(null,t);this.emitDepth--,this.unsetNewLink()}emitCollecting(t,e){this.emitDepth++;for(let r=this.head.next;r!==this.head;r=r.next)if(r.isEnabled()&&r.callback){const i=r.callback.apply(null,e);if(!t.handleResult(i))break}this.emitDepth--,this.unsetNewLink()}unsetNewLink(){if(this.hasNewLinks&&this.emitDepth===0){for(let t=this.head.next;t!==this.head;t=t.next)t.newLink=!1;this.hasNewLinks=!1}}}Vn.Signal=df;var Yn={};Object.defineProperty(Yn,"__esModule",{value:!0});Yn.SignalConnections=void 0;class mf{constructor(){this.list=[]}add(t){this.list.push(t)}disconnectAll(){for(const t of this.list)t.disconnect();this.list=[]}getCount(){return this.list.length}isEmpty(){return this.list.length===0}}Yn.SignalConnections=mf;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.SignalConnections=n.Signal=n.CollectorWhile0=n.CollectorUntil0=n.CollectorLast=n.CollectorArray=n.Collector=void 0;var t=Vt;Object.defineProperty(n,"Collector",{enumerable:!0,get:function(){return t.Collector}});var e=Ln;Object.defineProperty(n,"CollectorArray",{enumerable:!0,get:function(){return e.CollectorArray}});var r=Gn;Object.defineProperty(n,"CollectorLast",{enumerable:!0,get:function(){return r.CollectorLast}});var i=Nn;Object.defineProperty(n,"CollectorUntil0",{enumerable:!0,get:function(){return i.CollectorUntil0}});var s=$n;Object.defineProperty(n,"CollectorWhile0",{enumerable:!0,get:function(){return s.CollectorWhile0}});var o=Vn;Object.defineProperty(n,"Signal",{enumerable:!0,get:function(){return o.Signal}});var a=Yn;Object.defineProperty(n,"SignalConnections",{enumerable:!0,get:function(){return a.SignalConnections}})})(te);var pf=Object.defineProperty,gf=(n,t,e)=>t in n?pf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Bt=(n,t,e)=>(gf(n,typeof t!="symbol"?t+"":t,e),e);class xf{constructor(){Bt(this,"_isMouseIn"),Bt(this,"_isDown"),Bt(this,"onDown"),Bt(this,"onUp"),Bt(this,"onUpOut"),Bt(this,"onOut"),Bt(this,"onPress"),Bt(this,"onHover"),this.onPress=new te.Signal,this.onDown=new te.Signal,this.onUp=new te.Signal,this.onHover=new te.Signal,this.onOut=new te.Signal,this.onUpOut=new te.Signal}connectEvents(t){lr.any?(t.on("pointerdown",this.processDown,this),t.on("pointerup",this.processUp,this),t.on("pointerupoutside",this.processUpOut,this),t.on("pointerout",this.processOut,this),t.on("pointertap",this.processPress,this),t.on("pointerover",this.processOver,this)):(t.on("mousedown",this.processDown,this),t.on("mouseup",this.processUp,this),t.on("mouseupoutside",this.processUpOut,this),t.on("mouseout",this.processOut,this),t.on("click",this.processPress,this),t.on("mouseover",this.processOver,this))}disconnectEvents(t){lr.any?(t.off("pointerdown",this.processDown,this),t.off("pointerup",this.processUp,this),t.off("pointerupoutside",this.processUpOut,this),t.off("pointerout",this.processOut,this),t.off("pointertap",this.processPress,this),t.off("pointerover",this.processOver,this)):(t.off("mousedown",this.processDown,this),t.off("mouseup",this.processUp,this),t.off("mouseupoutside",this.processUpOut,this),t.off("mouseout",this.processOut,this),t.off("click",this.processPress,this),t.off("mouseover",this.processOver,this))}processDown(t){this._isDown=!0,this.onDown.emit(this,t),this.down(t)}processUp(t){this._isDown&&(this.onUp.emit(this,t),this.up(t)),this._isDown=!1}processUpOut(t){this._isDown&&(this.onUp.emit(this,t),this.onUpOut.emit(this,t),this.up(t),this.upOut(t)),this._isDown=!1}processOut(t){this._isMouseIn&&(this._isMouseIn=!1,this.onOut.emit(this,t),this.out(t))}processPress(t){this._isDown=!1,this.onPress.emit(this,t),this.press(t)}processOver(t){lr.any||(this._isMouseIn=!0,this.onHover.emit(this,t),this.hover(t))}down(t){}up(t){}upOut(t){}out(t){}press(t){}hover(t){}get isDown(){return this._isDown}}var vf=Object.defineProperty,yf=(n,t,e)=>t in n?vf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Et=(n,t,e)=>(yf(n,typeof t!="symbol"?t+"":t,e),e);class _f extends xf{constructor(t){super(),Et(this,"_view"),t&&(this.view=t,this.enabled=!0)}set view(t){!!this._view&&this.disconnectEvents(this._view),this._view=t,this.connectEvents(this._view)}get view(){return this._view}set enabled(t){if(!this.view){console.error("Button view is not set. Please set it before enabling the button.");return}this.view.eventMode=t?"static":"auto",this.view.cursor=t?"pointer":"default",!t&&this.isDown&&this.processUp()}get enabled(){return this.view.eventMode==="static"}}class bf extends Z{constructor(t){super(),Et(this,"button"),Et(this,"onDown"),Et(this,"onUp"),Et(this,"onUpOut"),Et(this,"onOut"),Et(this,"onPress"),Et(this,"onHover"),this.button=new _f(this),this.button.enabled=!0,t&&this.addChild(t),this.onPress=this.button.onPress,this.onDown=this.button.onDown,this.onUp=this.button.onUp,this.onHover=this.button.onHover,this.onOut=this.button.onOut,this.onUpOut=this.button.onUpOut}set enabled(t){this.button.enabled=t}get enabled(){return this.button.enabled}}function Ms(n){return typeof n=="string"?et.from(n):n}var Sf=Object.defineProperty,wf=(n,t,e)=>t in n?Sf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,kt=(n,t,e)=>(wf(n,typeof t!="symbol"?t+"":t,e),e);class Cf extends Z{constructor(t){super(),kt(this,"bg"),kt(this,"fill"),kt(this,"fillMask"),kt(this,"progressStart",0),kt(this,"_progress",0),kt(this,"options"),kt(this,"innerView"),kt(this,"_view"),this.options=t,this.innerView=new Z,this.addChild(this.innerView),t!=null&&t.bg&&(t!=null&&t.fill)&&this.init(t)}init({bg:t,fill:e,fillPaddings:r,progress:i}){this.setBackground(t),this.setFill(e,r),this.progress=i}setBackground(t){var e;this.bg&&this.bg.destroy(),(e=this.options)!=null&&e.nineSliceSprite&&(typeof t=="string"?this.bg=new wn({texture:F.from(t),leftWidth:this.options.nineSliceSprite.bg[0],topHeight:this.options.nineSliceSprite.bg[1],rightWidth:this.options.nineSliceSprite.bg[2],bottomHeight:this.options.nineSliceSprite.bg[3]}):console.warn("NineSliceSprite can not be used with views set as Container.")),t instanceof $t&&(this.bg=t),!this.bg&&(typeof t=="string"||t instanceof et)&&(this.bg=Ms(t)),this.innerView.addChildAt(this.bg,0)}setFill(t,e){var u;if(this.fill&&this.fill.destroy(),this.bg instanceof et&&t===this.bg){console.warn("Can not use same Sprite instance for bg and fill.");return}(u=this.options)!=null&&u.nineSliceSprite&&(typeof t=="string"?this.fill=new wn({texture:F.from(t),leftWidth:this.options.nineSliceSprite.fill[0],topHeight:this.options.nineSliceSprite.fill[1],rightWidth:this.options.nineSliceSprite.fill[2],bottomHeight:this.options.nineSliceSprite.fill[3]}):console.warn("NineSliceSprite can not be used with views set as Container.")),this.fill||(t instanceof $t?this.fill=t:this.fill=Ms(t)),this.innerView.addChildAt(this.fill,1);const r=(e==null?void 0:e.left)??0,i=(e==null?void 0:e.top)??0;this.fill.x=r,this.fill.y=i,this.fillMask&&(this.fill.mask=null,this.fillMask.destroy());const s=this.fill.width/2,o=this.fill.width/2,a=this.fill.height/2,l=this.fill.height/2;let c=F.WHITE;this.fill instanceof et&&this.fill.texture&&(c=this.fill.texture),this.fillMask=new wn({texture:c,leftWidth:s,topHeight:a,rightWidth:o,bottomHeight:l}),this.fillMask.position.copyFrom(this.fill),this.addChild(this.fillMask),this.fill.mask=this.fillMask}validate(t){return t=Math.round(t),t<0?0:t>100?100:t}set progress(t){this._progress=this.validate(t),this.fill&&this.fillMask&&(this.fill.mask=null,this.fillMask.width=this.fill.width/100*(this._progress-this.progressStart),this.fillMask.x=this.progressStart/100*this.fill.width+this.fill.x,this.fillMask.height=this.fill.height,this.fill.mask=this.fillMask)}get progress(){return this._progress}set width(t){var e,r,i;if((e=this.options)!=null&&e.nineSliceSprite){if(this.bg&&(this.bg.width=t),this.fill){const s=((r=this.options.fillPaddings)==null?void 0:r.left)??0,o=((i=this.options.fillPaddings)==null?void 0:i.right)??0;this.fill.width=t-s-o,this.fillMask.width=t-s-o}this.progress=this._progress}else super.width=t}get width(){return super.width}set height(t){var e,r,i;if((e=this.options)!=null&&e.nineSliceSprite){if(this.bg&&(this.bg.height=t),this.fill){const s=((r=this.options.fillPaddings)==null?void 0:r.top)??0,o=((i=this.options.fillPaddings)==null?void 0:i.bottom)??0;this.fill.height=t-s-o,this.fillMask.height=t-s-o}this.progress=this._progress}else super.height=t}get height(){return super.height}}class Af extends Cf{constructor(){const t=R.width,e=20,r=20,i=25,s=1,o="#FFFFFF",a="#270f07",l="#07dd00",c=new $t().roundRect(e,0,t-e*2,r,i).fill(o).roundRect(s+e,s,t-s*2-e*2,r-s*2,i).fill(a),u=new $t().roundRect(e,0,t-e*2,r,i).fill(o).roundRect(s+e,s,t-s*2-e*2,r-s*2,i).fill(l);super({bg:c,fill:u,progress:0})}downloadProgress(t){this.progress=t*100}}const Ft=window.Telegram.WebApp;class Ke{static get isDesktop(){return Ft.platform==="tdesktop"}static get isDev(){return Ft.platform==="unknown"}static get isMobile(){return Ft.platform==="ios"||Ft.platform==="android"}static Init(){Ft.platform!=="unknown"&&(Ft.ready(),Ft.enableClosingConfirmation(),Ft.setBackgroundColor("#000000"))}static FixScroll(t){Ft.expand(),document.body.style.overflowY="hidden",document.body.style.marginTop=`${t}px`;const e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);document.body.style.height=e+t+"px",document.body.style.paddingBottom=`${t}px`,window.scrollTo(0,t)}}window.Telegram.WebApp;const O=class O{constructor(){}static get width(){return this._width}static get height(){return this._height}static get realHeight(){return this._realHeight}static get realWidth(){return this._realWidth}static get enlargedWidth(){return this._enlargedWidth}static get enlargedHeight(){return this._enlargedHeight}static get leftPos(){return this._leftPos}static get rightPos(){return this._rightPos}static get topPos(){return this._topPos}static get bottomPos(){return this._bottomPos}static async Init(t,e,r,i){O.initializeAssetsPromise=re.init({manifest:zs});const s=zs.bundles.map(a=>a.name);O.initializeAssetsPromise.then(()=>re.backgroundLoadBundle(s)),O._overflow=i,O._width=t,O._height=e,Ke.Init(),Ke.FixScroll(O._overflow),O.app=new Po;let o=2*(window.devicePixelRatio??1);await O.app.init({resolution:o,background:r,autoDensity:!1,width:t,height:e,hello:!1}),document.body.appendChild(O.app.canvas),O.app.ticker.add(O.update),window.addEventListener("resize",()=>{O.Resize()}),O.Resize()}static Resize(){const t=Math.max(document.documentElement.clientWidth,window.innerWidth||0),e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);e/t<1.5&&(O.needOffset=!0),this.scaleFactor=Math.ceil(e/O.height),this._enlargedWidth=Math.round(this.scaleFactor*O.width),this._enlargedHeight=Math.round(this.scaleFactor*O.height),this._realWidth=Math.round(t/this.scaleFactor),this._realHeight=Math.round(e/this.scaleFactor),this._leftPos=Math.max(this._width/2-this._realWidth/2,0),this._rightPos=Math.min(this._width/2+this._realWidth/2,this._width),this._topPos=Math.max(this._height/2-this._realHeight/2,0),this._bottomPos=Math.min(this._height/2+this._realHeight/2,this._height);const r=Math.round((t-this._enlargedWidth)/2),i=Math.round((e-this._enlargedHeight)/2);O.app.canvas.style.width=`${this._enlargedWidth}px`,O.app.canvas.style.height=`${this._enlargedHeight}px`,O.app.canvas.style.marginLeft=O.app.canvas.style.marginRight=`${r}px`,O.app.canvas.style.marginTop=O.app.canvas.style.marginBottom=`${i}px`}static async ChangeScene(t){await O.initializeAssetsPromise,O.currentScene&&(O.app.stage.removeChild(O.currentScene),O.currentScene.destroy());let e=new Af;e.y=O.height/2,O.app.stage.addChild(e),await re.loadBundle(t.assetBundles,e.downloadProgress.bind(e)),O.app.stage.removeChild(e),t.constructorWithAssets(),O.currentScene=t,O.app.stage.addChild(O.currentScene),O.Resize()}static update(t){window.scrollTo(0,O._overflow),O.currentScene&&O.currentScene.update(t)}};b(O,"needOffset",!1),b(O,"app"),b(O,"currentScene"),b(O,"_width"),b(O,"_height"),b(O,"_realWidth"),b(O,"_realHeight"),b(O,"_leftPos"),b(O,"_rightPos"),b(O,"_topPos"),b(O,"_bottomPos"),b(O,"_enlargedWidth"),b(O,"_enlargedHeight"),b(O,"_overflow"),b(O,"initializeAssetsPromise"),b(O,"scaleFactor");let R=O;class Tf{constructor(){b(this,"energy");b(this,"money");this.energy=50,this.money=0}}const Fs=1;class Ze{static SaveData(t){localStorage.setItem("tyuryaga_saveVersion",Fs.toString()),localStorage.setItem("tyuryaga_playerData",JSON.stringify(t))}static LoadData(){const t=localStorage.getItem("tyuryaga_saveVersion");if(t!==null&&parseInt(t)===Fs){const e=localStorage.getItem("tyuryaga_playerData");if(e!==null){const r=JSON.parse(e);if(r!=null)return r}}return new Tf}static ThrowDice(t){return t.energy>0?(t.energy--,Ze.SaveData(t),!0):(t.energy=50,Ze.SaveData(t),!0)}static ClearData(){localStorage.clear(),window.location.reload()}}function se(n){return new Qh({text:n,style:{fontFamily:"SofiaSans",fontSize:9,fill:"white",align:"center",dropShadow:{alpha:.5,distance:1,angle:1,color:"#252b39"},stroke:{color:"#4a1850",width:1,join:"round"}}})}class qt extends bf{constructor(e){super();b(this,"text");b(this,"buttonBg");b(this,"noteText");b(this,"changeTintOnClick",!0);b(this,"defaultBGTint");this.buttonBg=new wn(F.from("button.png")),e!=null&&e.tint&&(this.buttonBg.tint=e.tint,this.defaultBGTint=e.tint),e!=null&&e.width&&(this.buttonBg.width=e.width),e!=null&&e.height&&(this.buttonBg.height=e.height),this.text=se((e==null?void 0:e.text)??""),this.text.anchor.set(.5),this.text.x=this.buttonBg.width/2,this.text.y=this.buttonBg.height/2-2,this.addChild(this.buttonBg),this.addChild(this.text),e!=null&&e.note&&(this.noteText=se(e==null?void 0:e.note),this.noteText.x=this.buttonBg.width-this.noteText.width-5,this.addChild(this.noteText)),this.onDown.connect(()=>{if(this.changeTintOnClick){let r=new j(this.defaultBGTint).toRgba();r.r+=.25,r.g+=.25,r.b+=.25,this.buttonBg.tint=[r.r,r.g,r.b]}}),this.onUp.connect(()=>{this.changeTintOnClick&&(this.buttonBg.tint=this.defaultBGTint)})}updateWidth(e){this.buttonBg.width=e,this.text.x=this.buttonBg.width/2}setEnabled(e){this.enabled=e,this.alpha=e?1:.4}}const Dt=(n,t,e)=>n*(1-e)+t*e,Ge=(n,t,e,r,i)=>r+(i-r)*(n-t)/(e-t),Pf=(n,t)=>String(n).padStart(t,"0");function zf(n){return Pf(n,2)}function Is(n,t){const e=Math.ceil(n),r=Math.floor(t);return Math.floor(Math.random()*(r-e)+e)}var W=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,X=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,Mf=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`,Ff=`struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`,If=Object.defineProperty,Of=(n,t,e)=>t in n?If(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ua=(n,t,e)=>(Of(n,typeof t!="symbol"?t+"":t,e),e);const Rf=class ca extends ${constructor(t){t={...ca.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Ff,entryPoint:"mainFragment"}}),r=N.from({vertex:W,fragment:Mf,name:"adjustment-filter"});super({gpuProgram:e,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),ua(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};ua(Rf,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var Uf=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`,Bf=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`,kf=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`,Ef=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`,Df=Object.defineProperty,Lf=(n,t,e)=>t in n?Df(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ee=(n,t,e)=>(Lf(n,typeof t!="symbol"?t+"":t,e),e);const ha=class fa extends ${constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e))&&(U("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),e={strength:e},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.clamp=t[2])),e={...fa.DEFAULT_OPTIONS,...e};const r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:e!=null&&e.clamp?Ef:Bf,entryPoint:"mainFragment"}}),i=N.from({vertex:W,fragment:e!=null&&e.clamp?kf:Uf,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ee(this,"uniforms"),ee(this,"_pixelSize",{x:0,y:0}),ee(this,"_clamp"),ee(this,"_kernels",[]),ee(this,"_blur"),ee(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=e.pixelSize??{x:1,y:1},Array.isArray(e.strength)?this.kernels=e.strength:typeof e.strength=="number"&&(this._blur=e.strength,this.quality=e.quality??3),this._clamp=!!e.clamp}apply(t,e,r,i){const s=this.pixelSizeX/e.source.width,o=this.pixelSizeY/e.source.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,e,r,i);else{const l=pt.getSameSizeTexture(e);let c=e,u=l,h;const f=this._quality-1;for(let d=0;d<f;d++)a=this._kernels[d]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,c,u,!0),h=c,c=u,u=h;a=this._kernels[f]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,c,r,i),pt.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,e)=>t+e+.5,0))}_generateKernels(){const t=this._blur,e=this._quality,r=[t];if(t>0){let i=t;const s=t/e;for(let o=1;o<e;o++)i-=s,r.push(i)}this._kernels=r,this._updatePadding()}};ee(ha,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let da=ha;var Gf=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`,Nf=`struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`,$f=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,Vf=`struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`,Wf=Object.defineProperty,Xf=(n,t,e)=>t in n?Wf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ma=(n,t,e)=>(Xf(n,typeof t!="symbol"?t+"":t,e),e);const pa=class ga extends ${constructor(t){t={...ga.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Vf,entryPoint:"mainFragment"}}),r=N.from({vertex:W,fragment:$f,name:"extract-brightness-filter"});super({gpuProgram:e,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),ma(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};ma(pa,"DEFAULT_OPTIONS",{threshold:.5});let Yf=pa;var Hf=Object.defineProperty,jf=(n,t,e)=>t in n?Hf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,pe=(n,t,e)=>(jf(n,typeof t!="symbol"?t+"":t,e),e);const qf=class xa extends ${constructor(t){t={...xa.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Nf,entryPoint:"mainFragment"}}),r=N.from({vertex:W,fragment:Gf,name:"advanced-bloom-filter"});super({gpuProgram:e,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:F.WHITE}}),pe(this,"uniforms"),pe(this,"bloomScale",1),pe(this,"brightness",1),pe(this,"_extractFilter"),pe(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new Yf({threshold:t.threshold}),this._blurFilter=new da({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,e,r,i){const s=pt.getSameSizeTexture(e);this._extractFilter.apply(t,e,s,!0);const o=pt.getSameSizeTexture(e);this._blurFilter.apply(t,s,o,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=o.source,t.applyFilter(this,e,r,i),pt.returnTexture(o),pt.returnTexture(s)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};pe(qf,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});var Kf=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`,Zf=`struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`,Qf=Object.defineProperty,Jf=(n,t,e)=>t in n?Qf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Kr=(n,t,e)=>(Jf(n,typeof t!="symbol"?t+"":t,e),e);const td=class va extends ${constructor(...t){let e=t[0]??{};typeof e=="number"&&(U("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),e={size:e});const r=(e==null?void 0:e.color)&&e.replaceColor!==!1;e={...va.DEFAULT_OPTIONS,...e};const i=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Zf,entryPoint:"mainFragment"}}),s=N.from({vertex:W,fragment:Kf,name:"ascii-filter"});super({gpuProgram:i,glProgram:s,resources:{asciiUniforms:{uSize:{value:e.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),Kr(this,"uniforms"),Kr(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new j,this.color=e.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};Kr(td,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var ed=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`,nd=`struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`,rd=Object.defineProperty,id=(n,t,e)=>t in n?rd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ge=(n,t,e)=>(id(n,typeof t!="symbol"?t+"":t,e),e);const sd=class ya extends ${constructor(t){t={...ya.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:nd,entryPoint:"mainFragment"}}),r=N.from({vertex:W,fragment:ed,name:"bevel-filter"});super({gpuProgram:e,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),ge(this,"uniforms"),ge(this,"_thickness"),ge(this,"_rotation"),ge(this,"_lightColor"),ge(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new j,this._shadowColor=new j,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/Ce}set rotation(t){this._rotation=t*Ce,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[e,r,i]=this._lightColor.toArray();this.uniforms.uLightColor[0]=e,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=i}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[e,r,i]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=e,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=i}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};ge(sd,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var od=Object.defineProperty,ad=(n,t,e)=>t in n?od(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Cn=(n,t,e)=>(ad(n,typeof t!="symbol"?t+"":t,e),e);const ld=class _a extends Rh{constructor(...t){let e=t[0]??{};if(typeof e=="number"||Array.isArray(e)||"x"in e&&"y"in e){U("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=e;Array.isArray(r)&&(r={x:r[0],y:r[1]}),e={strength:r},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.resolution=t[2]),t[3]!==void 0&&(e.kernelSize=t[3])}e={..._a.DEFAULT_OPTIONS,...e},super(),Cn(this,"_blurXFilter"),Cn(this,"_blurYFilter"),Cn(this,"_strength"),this._strength={x:2,y:2},e.strength&&(typeof e.strength=="number"?(this._strength.x=e.strength,this._strength.y=e.strength):(this._strength.x=e.strength.x,this._strength.y=e.strength.y)),this._blurXFilter=new Ts({...e,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new Ts({...e,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,e)}apply(t,e,r,i){const s=pt.getSameSizeTexture(e);t.applyFilter(this,e,r,i),this._blurXFilter.apply(t,e,s,!0),this._blurYFilter.apply(t,s,r,!1),pt.returnTexture(s)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return U("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){U("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return U("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){U("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return U("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){U("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};Cn(ld,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var ud=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`,cd=`struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`,hd=Object.defineProperty,fd=(n,t,e)=>t in n?hd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ba=(n,t,e)=>(fd(n,typeof t!="symbol"?t+"":t,e),e);const dd=class Sa extends ${constructor(t){t={...Sa.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:cd,entryPoint:"mainFragment"}}),r=N.from({vertex:W,fragment:ud,name:"bulge-pinch-filter"});super({gpuProgram:e,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),ba(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,r,i)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};ba(dd,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var md=`precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`,pd=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`,Os=`struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`,ue=ue||{};ue.stringify=function(){var n={"visit_linear-gradient":function(t){return n.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return n.visit_gradient(t)},"visit_radial-gradient":function(t){return n.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return n.visit_gradient(t)},visit_gradient:function(t){var e=n.visit(t.orientation);return e&&(e+=", "),t.type+"("+e+n.visit(t.colorStops)+")"},visit_shape:function(t){var e=t.value,r=n.visit(t.at),i=n.visit(t.style);return i&&(e+=" "+i),r&&(e+=" at "+r),e},"visit_default-radial":function(t){var e="",r=n.visit(t.at);return r&&(e+=r),e},"visit_extent-keyword":function(t){var e=t.value,r=n.visit(t.at);return r&&(e+=" at "+r),e},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return n.visit(t.value.x)+" "+n.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return n.visit_color(t.value,t)},visit_hex:function(t){return n.visit_color("#"+t.value,t)},visit_rgb:function(t){return n.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return n.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,e){var r=t,i=n.visit(e.length);return i&&(r+=" "+i),r},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var e="",r=t.length;return t.forEach(function(i,s){e+=n.visit(i),s<r-1&&(e+=", ")}),e},visit:function(t){if(!t)return"";var e="";if(t instanceof Array)return n.visit_array(t,e);if(t.type){var r=n["visit_"+t.type];if(r)return r(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return n.visit(t)}}();var ue=ue||{};ue.parse=function(){var n={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function e(A){var Y=new Error(t+": "+A);throw Y.source=t,Y}function r(){var A=i();return t.length>0&&e("Invalid input not EOF"),A}function i(){return y(s)}function s(){return o("linear-gradient",n.linearGradient,l)||o("repeating-linear-gradient",n.repeatingLinearGradient,l)||o("radial-gradient",n.radialGradient,h)||o("repeating-radial-gradient",n.repeatingRadialGradient,h)}function o(A,Y,C){return a(Y,function(B){var tn=C();return tn&&(V(n.comma)||e("Missing comma before color stops")),{type:A,orientation:tn,colorStops:y(_)}})}function a(A,Y){var C=V(A);if(C){V(n.startCall)||e("Missing (");var B=Y(C);return V(n.endCall)||e("Missing )"),B}}function l(){return c()||u()}function c(){return M("directional",n.sideOrCorner,1)}function u(){return M("angular",n.angleValue,1)}function h(){var A,Y=f(),C;return Y&&(A=[],A.push(Y),C=t,V(n.comma)&&(Y=f(),Y?A.push(Y):t=C)),A}function f(){var A=d()||m();if(A)A.at=p();else{var Y=g();if(Y){A=Y;var C=p();C&&(A.at=C)}else{var B=x();B&&(A={type:"default-radial",at:B})}}return A}function d(){var A=M("shape",/^(circle)/i,0);return A&&(A.style=k()||g()),A}function m(){var A=M("shape",/^(ellipse)/i,0);return A&&(A.style=q()||g()),A}function g(){return M("extent-keyword",n.extentKeywords,1)}function p(){if(M("position",/^at/,0)){var A=x();return A||e("Missing positioning value"),A}}function x(){var A=v();if(A.x||A.y)return{type:"position",value:A}}function v(){return{x:q(),y:q()}}function y(A){var Y=A(),C=[];if(Y)for(C.push(Y);V(n.comma);)Y=A(),Y?C.push(Y):e("One extra comma");return C}function _(){var A=z();return A||e("Expected color definition"),A.length=q(),A}function z(){return T()||S()||I()||E()}function E(){return M("literal",n.literalColor,0)}function T(){return M("hex",n.hexColor,1)}function I(){return a(n.rgbColor,function(){return{type:"rgb",value:y(w)}})}function S(){return a(n.rgbaColor,function(){return{type:"rgba",value:y(w)}})}function w(){return V(n.number)[1]}function q(){return M("%",n.percentageValue,1)||xt()||k()}function xt(){return M("position-keyword",n.positionKeywords,1)}function k(){return M("px",n.pixelValue,1)||M("em",n.emValue,1)}function M(A,Y,C){var B=V(Y);if(B)return{type:A,value:B[C]}}function V(A){var Y,C;return C=/^[\n\r\t\s]+/.exec(t),C&&J(C[0].length),Y=A.exec(t),Y&&J(Y[0].length),Y}function J(A){t=t.substr(A)}return function(A){return t=A.toString(),r()}}();var gd=ue.parse;ue.stringify;function xd(n){const t=gd(Ad(n));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const e=t[0],r=vd(e.type),i=yd(e.colorStops),s=wd(e.orientation);return{type:r,stops:i,angle:s}}function vd(n){const t={"linear-gradient":0,"radial-gradient":1};if(!(n in t))throw new Error(`Unsupported gradient type "${n}"`);return t[n]}function yd(n){const t=bd(n),e=[],r=new j;for(let i=0;i<n.length;i++){const s=_d(n[i]),o=r.setValue(s).toArray();e.push({offset:t[i],color:o.slice(0,3),alpha:o[3]})}return e}function _d(n){switch(n.type){case"hex":return`#${n.value}`;case"literal":return n.value;default:return`${n.type}(${n.value.join(",")})`}}function bd(n){const t=[];for(let s=0;s<n.length;s++){const o=n[s];let a=-1;o.type==="literal"&&o.length&&"type"in o.length&&o.length.type==="%"&&"value"in o.length&&(a=parseFloat(o.length.value)/100),t.push(a)}const r=s=>{for(let o=s;o<t.length;o++)if(t[o]!==-1)return{indexDelta:o-s,offset:t[o]};return{indexDelta:t.length-1-s,offset:1}};let i=0;for(let s=0;s<t.length;s++){const o=t[s];if(o!==-1)i=o;else if(s===0)t[s]=0;else if(s+1===t.length)t[s]=1;else{const a=r(s),c=(a.offset-i)/(1+a.indexDelta);for(let u=0;u<=a.indexDelta;u++)t[s+u]=i+(u+1)*c;s+=a.indexDelta,i=t[s]}}return t.map(Sd)}function Sd(n){return n.toString().length>6?parseFloat(n.toString().substring(0,6)):n}function wd(n){if(typeof n>"u")return 0;if("type"in n&&"value"in n)switch(n.type){case"angular":return parseFloat(n.value);case"directional":return Cd(n.value)}return 0}function Cd(n){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(n in t))throw new Error(`Unsupported directional value "${n}"`);return t[n]}function Ad(n){let t=n.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var Td=Object.defineProperty,Pd=(n,t,e)=>t in n?Td(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,oe=(n,t,e)=>(Pd(n,typeof t!="symbol"?t+"":t,e),e);const Pr=90;function zd(n){return[...n].sort((t,e)=>t.offset-e.offset)}const Qe=class An extends ${constructor(t){if(t&&"css"in t?t={...xd(t.css||""),alpha:t.alpha??An.defaults.alpha,maxColors:t.maxColors??An.defaults.maxColors}:t={...An.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const e=L.from({vertex:{source:Os,entryPoint:"mainVertex"},fragment:{source:Os,entryPoint:"mainFragment"}}),r=N.from({vertex:pd,fragment:md,name:"color-gradient-filter"}),i=32;super({gpuProgram:e,glProgram:r,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??Pr,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(i*3),type:"vec3<f32>",size:i},uStops:{value:new Float32Array(i*4),type:"vec4<f32>",size:i}}}}),oe(this,"baseUniforms"),oe(this,"stopsUniforms"),oe(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const e=zd(t),r=new j;let i,s,o;for(let a=0;a<e.length;a++){r.setValue(e[a].color);const l=a*3;[i,s,o]=r.toArray(),this.stopsUniforms.uColors[l]=i,this.stopsUniforms.uColors[l+1]=s,this.stopsUniforms.uColors[l+2]=o,this.stopsUniforms.uStops[a*4]=e[a].offset,this.stopsUniforms.uStops[a*4+1]=e[a].alpha}this.baseUniforms.uCounts[0]=e.length,this._stops=e}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+Pr}set angle(t){this.baseUniforms.uOptions[1]=t-Pr}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};oe(Qe,"LINEAR",0);oe(Qe,"RADIAL",1);oe(Qe,"CONIC",2);oe(Qe,"defaults",{type:Qe.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var Md=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`,Fd=`struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`,Id=Object.defineProperty,Od=(n,t,e)=>t in n?Id(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,It=(n,t,e)=>(Od(n,typeof t!="symbol"?t+"":t,e),e);const Rd=class wa extends ${constructor(...t){let e=t[0]??{};if((e instanceof F||e instanceof Pt)&&(U("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),e={colorMap:e},t[1]!==void 0&&(e.nearest=t[1]),t[2]!==void 0&&(e.mix=t[2])),e={...wa.DEFAULT_OPTIONS,...e},!e.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Fd,entryPoint:"mainFragment"}}),i=N.from({vertex:W,fragment:Md,name:"color-map-filter"});super({gpuProgram:r,glProgram:i,resources:{colorMapUniforms:{uMix:{value:e.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:e.colorMap.source,uMapSampler:e.colorMap.source.style}}),It(this,"uniforms"),It(this,"_size",0),It(this,"_sliceSize",0),It(this,"_slicePixelSize",0),It(this,"_sliceInnerSize",0),It(this,"_nearest",!1),It(this,"_scaleMode","linear"),It(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,e)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const e=t instanceof F?t.source:t;e.style.scaleMode=this._scaleMode,e.autoGenerateMipmaps=!1,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=e,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const e=this._colorMap;e&&e.source&&(e.source.scaleMode=this._scaleMode,e.source.autoGenerateMipmaps=!1,e.source.style.update(),e.source.update())}updateColorMap(){const t=this._colorMap;t!=null&&t.source&&(t.source.update(),this.colorMap=t)}destroy(){var t;(t=this._colorMap)==null||t.destroy(),super.destroy()}};It(Rd,"DEFAULT_OPTIONS",{colorMap:F.WHITE,nearest:!1,mix:1});var Ud=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,Bd=`struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`,kd=Object.defineProperty,Ed=(n,t,e)=>t in n?kd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Zr=(n,t,e)=>(Ed(n,typeof t!="symbol"?t+"":t,e),e);const Dd=class Ca extends ${constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(U("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),e={color:e},t[1]!==void 0&&(e.alpha=t[1])),e={...Ca.DEFAULT_OPTIONS,...e};const r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Bd,entryPoint:"mainFragment"}}),i=N.from({vertex:W,fragment:Ud,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:i,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"}}}}),Zr(this,"uniforms"),Zr(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new j,this.color=e.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Zr(Dd,"DEFAULT_OPTIONS",{color:0,alpha:1});var Ld=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`,Gd=`struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`,Nd=Object.defineProperty,$d=(n,t,e)=>t in n?Nd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Tn=(n,t,e)=>($d(n,typeof t!="symbol"?t+"":t,e),e);const Vd=class Aa extends ${constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(U("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),e={originalColor:e},t[1]!==void 0&&(e.targetColor=t[1]),t[2]!==void 0&&(e.tolerance=t[2])),e={...Aa.DEFAULT_OPTIONS,...e};const r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Gd,entryPoint:"mainFragment"}}),i=N.from({vertex:W,fragment:Ld,name:"color-replace-filter"});super({gpuProgram:r,glProgram:i,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:e.tolerance,type:"f32"}}}}),Tn(this,"uniforms"),Tn(this,"_originalColor"),Tn(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new j,this._targetColor=new j,this.originalColor=e.originalColor??16711680,this.targetColor=e.targetColor??0,Object.assign(this,e)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[e,r,i]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=e,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=i}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[e,r,i]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=e,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=i}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){U("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return U("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){U("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return U("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};Tn(Vd,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var Wd=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`,Xd=`struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`,Yd=Object.defineProperty,Hd=(n,t,e)=>t in n?Yd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ta=(n,t,e)=>(Hd(n,typeof t!="symbol"?t+"":t,e),e);const jd=class Pa extends ${constructor(...t){let e=t[0]??{};Array.isArray(e)&&(U("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),e={matrix:e},t[1]!==void 0&&(e.width=t[1]),t[2]!==void 0&&(e.height=t[2])),e={...Pa.DEFAULT_OPTIONS,...e};const r=e.width??200,i=e.height??200,s=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Xd,entryPoint:"mainFragment"}}),o=N.from({vertex:W,fragment:Wd,name:"convolution-filter"});super({gpuProgram:s,glProgram:o,resources:{convolutionUniforms:{uMatrix:{value:e.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/i},type:"vec2<f32>"}}}}),Ta(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=i}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((e,r)=>{this.uniforms.uMatrix[r]=e})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};Ta(jd,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var qd=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,Kd=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,Zd=Object.defineProperty,Qd=(n,t,e)=>t in n?Zd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Pn=(n,t,e)=>(Qd(n,typeof t!="symbol"?t+"":t,e),e);const Jd=class za extends ${constructor(t){t={...za.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Kd,entryPoint:"mainFragment"}}),r=N.from({vertex:W,fragment:qd,name:"crt-filter"});super({gpuProgram:e,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Pn(this,"uniforms"),Pn(this,"seed"),Pn(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};Pn(Jd,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var tm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`,em=`struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`,nm=Object.defineProperty,rm=(n,t,e)=>t in n?nm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,im=(n,t,e)=>(rm(n,t+"",e),e);const sm=class Ma extends ${constructor(...t){let e=t[0]??{};typeof e=="number"&&(U("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),e={scale:e},t[1]!==void 0&&(e.angle=t[1]),t[2]!==void 0&&(e.grayscale=t[2])),e={...Ma.DEFAULT_OPTIONS,...e};const r={uScale:{value:e.scale,type:"f32"},uAngle:{value:e.angle,type:"f32"},uGrayScale:{value:e.grayscale?1:0,type:"f32"}},i=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:em,entryPoint:"mainFragment"}}),s=N.from({vertex:W,fragment:tm,name:"dot-filter"});super({gpuProgram:i,glProgram:s,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};im(sm,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var om=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`,am=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`,lm=Object.defineProperty,um=(n,t,e)=>t in n?lm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,xe=(n,t,e)=>(um(n,typeof t!="symbol"?t+"":t,e),e);const cm=class Fa extends ${constructor(t){t={...Fa.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:am,entryPoint:"mainFragment"}}),r=N.from({vertex:W,fragment:om,name:"drop-shadow-filter"});super({gpuProgram:e,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),xe(this,"uniforms"),xe(this,"shadowOnly",!1),xe(this,"_color"),xe(this,"_blurFilter"),xe(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new j,this.color=t.color??0,this._blurFilter=new da({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new $({gpuProgram:L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:N.from({vertex:W,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,e,r,i){const s=pt.getSameSizeTexture(e);t.applyFilter(this,e,s,!0),this._blurFilter.apply(t,s,r,i),this.shadowOnly||t.applyFilter(this._basePass,e,r,!1),pt.returnTexture(s)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};xe(cm,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var hm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`,fm=`struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`,dm=Object.defineProperty,mm=(n,t,e)=>t in n?dm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,wt=(n,t,e)=>(mm(n,typeof t!="symbol"?t+"":t,e),e);const pm=class Ia extends ${constructor(t){t={...Ia.defaults,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:fm,entryPoint:"mainFragment"}}),r=N.from({vertex:W,fragment:hm,name:"glitch-filter"}),i=document.createElement("canvas");i.width=4,i.height=t.sampleSize??512;const s=new F({source:new ze({resource:i})});super({gpuProgram:e,glProgram:r,resources:{glitchUniforms:{uSeed:{value:(t==null?void 0:t.seed)??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:(t==null?void 0:t.fillMode)??0,type:"f32"},uOffset:{value:(t==null?void 0:t.offset)??100,type:"f32"},uDirection:{value:(t==null?void 0:t.direction)??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:s.source,uDisplacementSampler:s.source.style}}),wt(this,"uniforms"),wt(this,"average",!1),wt(this,"minSize",8),wt(this,"sampleSize",512),wt(this,"_canvas"),wt(this,"texture"),wt(this,"_slices",0),wt(this,"_sizes",new Float32Array(1)),wt(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=i,this.texture=s,Object.assign(this,t)}apply(t,e,r,i){const{width:s,height:o}=e.frame;this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,t.applyFilter(this,e,r,i)}_randomizeSizes(){const t=this._sizes,e=this._slices-1,r=this.sampleSize,i=Math.min(this.minSize/r,.9/this._slices);if(this.average){const s=this._slices;let o=1;for(let a=0;a<e;a++){const l=o/(s-a),c=Math.max(l*(1-Math.random()*.6),i);t[a]=c,o-=c}t[e]=o}else{let s=1;const o=Math.sqrt(1/this._slices);for(let a=0;a<e;a++){const l=Math.max(o*s*Math.random(),i);t[a]=l,s-=l}t[e]=s}this.shuffle()}shuffle(){const t=this._sizes,e=this._slices-1;for(let r=e;r>0;r--){const i=Math.random()*r>>0,s=t[r];t[r]=t[i],t[i]=s}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,e=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);let i,s=0;for(let o=0;o<this._slices;o++){i=Math.floor(this._offsets[o]*256);const a=this._sizes[o]*t,l=i>0?i:0,c=i<0?-i:0;r.fillStyle=`rgba(${l}, ${c}, 0, 1)`,r.fillRect(0,s>>0,t,a+1>>0),s+=a}e.source.update()}set sizes(t){const e=Math.min(this._slices,t.length);for(let r=0;r<e;r++)this._sizes[r]=t[r]}get sizes(){return this._sizes}set offsets(t){const e=Math.min(this._slices,t.length);for(let r=0;r<e;r++)this._offsets[r]=t[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/Ce}set direction(t){this.uniforms.uDirection=t*Ce}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){var t;(t=this.texture)==null||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};wt(pm,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var gm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,xm=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,vm=Object.defineProperty,ym=(n,t,e)=>t in n?vm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Qr=(n,t,e)=>(ym(n,typeof t!="symbol"?t+"":t,e),e);const _m=class Oa extends ${constructor(t){t={...Oa.DEFAULT_OPTIONS,...t};const e=t.distance??10,r=t.quality??.1,i=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:xm,entryPoint:"mainFragment"}}),s=N.from({vertex:W,fragment:gm.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/e).toFixed(7)}`).replace(/__DIST__/gi,`${e.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:i,glProgram:s,resources:{glowUniforms:{uDistance:{value:e,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:(t==null?void 0:t.knockout)??!1?1:0,type:"f32"}}},padding:e}),Qr(this,"uniforms"),Qr(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new j,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};Qr(_m,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var bm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`,Sm=`struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`,wm=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,Cm=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`,Am=Object.defineProperty,Tm=(n,t,e)=>t in n?Am(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ve=(n,t,e)=>(Tm(n,typeof t!="symbol"?t+"":t,e),e);const Pm=class Ra extends ${constructor(t){t={...Ra.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Sm.replace("${PERLIN}",Cm),entryPoint:"mainFragment"}}),r=N.from({vertex:W,fragment:bm.replace("${PERLIN}",wm),name:"god-ray-filter"});super({gpuProgram:e,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ve(this,"uniforms"),ve(this,"time",0),ve(this,"_angleLight",[0,0]),ve(this,"_angle",0),ve(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){const s=e.frame.width,o=e.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get angle(){return this._angle}set angle(t){this._angle=t;const e=t*Ce;this._angleLight[0]=Math.cos(e),this._angleLight[1]=Math.sin(e)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};ve(Pm,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var zm=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`,Mm=`struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`,Fm=Object.defineProperty,Im=(n,t,e)=>t in n?Fm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Jr=(n,t,e)=>(Im(n,typeof t!="symbol"?t+"":t,e),e);const Om=class Ua extends ${constructor(t){t={...Ua.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Mm,entryPoint:"mainFragment"}}),r=N.from({vertex:W,fragment:zm,name:"hsl-adjustment-filter"});super({gpuProgram:e,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),Jr(this,"uniforms"),Jr(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,this.hue=t.hue}get hue(){return this._hue}set hue(t){this._hue=t,this.resources.hslUniforms.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.resources.hslUniforms.uniforms.uHsl[1]}set saturation(t){this.resources.hslUniforms.uniforms.uHsl[1]=t}get lightness(){return this.resources.hslUniforms.uniforms.uHsl[2]}set lightness(t){this.resources.hslUniforms.uniforms.uHsl[2]=t}get colorize(){return this.resources.hslUniforms.uniforms.uColorize===1}set colorize(t){this.resources.hslUniforms.uniforms.uColorize=t?1:0}get alpha(){return this.resources.hslUniforms.uniforms.uAlpha}set alpha(t){this.resources.hslUniforms.uniforms.uAlpha=t}};Jr(Om,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var Rm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`,Um=`struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`,Bm=Object.defineProperty,km=(n,t,e)=>t in n?Bm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ti=(n,t,e)=>(km(n,typeof t!="symbol"?t+"":t,e),e);const Em=class Ba extends ${constructor(...t){let e=t[0]??{};if(Array.isArray(e)||"x"in e&&"y"in e||e instanceof ht){U("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const s="x"in e?e.x:e[0],o="y"in e?e.y:e[1];e={velocity:{x:s,y:o}},t[1]!==void 0&&(e.kernelSize=t[1]),t[2]!==void 0&&(e.offset=t[2])}e={...Ba.DEFAULT_OPTIONS,...e};const r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Um,entryPoint:"mainFragment"}}),i=N.from({vertex:W,fragment:Rm,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{motionBlurUniforms:{uVelocity:{value:e.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(e.kernelSize??5),type:"f32"},uOffset:{value:e.offset,type:"f32"}}}}),ti(this,"uniforms"),ti(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,e)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};ti(Em,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var Dm=`in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`,Lm=`struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`,Gm=Object.defineProperty,Nm=(n,t,e)=>t in n?Gm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,zn=(n,t,e)=>(Nm(n,typeof t!="symbol"?t+"":t,e),e);const $m=class ka extends ${constructor(...t){let e=t[0]??{};Array.isArray(e)&&(U("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),e={replacements:e},t[1]&&(e.tolerance=t[1]),t[2]&&(e.maxColors=t[2])),e={...ka.DEFAULT_OPTIONS,...e};const r=e.maxColors??e.replacements.length,i=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Lm.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),s=N.from({vertex:W,fragment:Dm.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:i,glProgram:s,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:e.tolerance,type:"f32"}}}}),zn(this,"uniforms"),zn(this,"_replacements",[]),zn(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=e.replacements}set replacements(t){const e=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,i=t.length,s=new j;if(i>this._maxColors)throw new Error(`Length of replacements (${i}) exceeds the maximum colors length (${this._maxColors})`);e[i*3]=-1;let o,a,l;for(let c=0;c<i;c++){const u=t[c];s.setValue(u[0]),[o,a,l]=s.toArray(),e[c*3]=o,e[c*3+1]=a,e[c*3+2]=l,s.setValue(u[1]),[o,a,l]=s.toArray(),r[c*3]=o,r[c*3+1]=a,r[c*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){U("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return U("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};zn($m,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var Vm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`,Wm=`struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`,Xm=Object.defineProperty,Ym=(n,t,e)=>t in n?Xm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ei=(n,t,e)=>(Ym(n,typeof t!="symbol"?t+"":t,e),e);const Hm=class Ea extends ${constructor(t){t={...Ea.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Wm,entryPoint:"mainFragment"}}),r=N.from({vertex:W,fragment:Vm,name:"old-film-filter"});super({gpuProgram:e,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ei(this,"uniforms"),ei(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,e,r,i)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};ei(Hm,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var jm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,qm=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,Km=Object.defineProperty,Zm=(n,t,e)=>t in n?Km(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ie=(n,t,e)=>(Zm(n,typeof t!="symbol"?t+"":t,e),e);const wi=class ne extends ${constructor(...t){let e=t[0]??{};typeof e=="number"&&(U("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),e={thickness:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.quality=t[2]),t[3]!==void 0&&(e.alpha=t[3]),t[4]!==void 0&&(e.knockout=t[4])),e={...ne.DEFAULT_OPTIONS,...e};const r=e.quality??.1,i=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:qm,entryPoint:"mainFragment"}}),s=N.from({vertex:W,fragment:jm.replace(/\$\{ANGLE_STEP\}/,ne.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:i,glProgram:s,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:e.knockout?1:0,type:"f32"}}}}),ie(this,"uniforms"),ie(this,"_thickness"),ie(this,"_quality"),ie(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=ne.getAngleStep(r),this._color=new j,this.color=e.color??0,Object.assign(this,e)}apply(t,e,r,i){this.uniforms.uThickness[0]=this.thickness/e.source.width,this.uniforms.uThickness[1]=this.thickness/e.source.height,t.applyFilter(this,e,r,i)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*ne.MAX_SAMPLES,ne.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=ne.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};ie(wi,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});ie(wi,"MIN_SAMPLES",1);ie(wi,"MAX_SAMPLES",100);var Qm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform vec2 uSize;
uniform sampler2D uTexture;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 uSize)
{
	return floor( coord / uSize ) * uSize;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = pixelate(coord, uSize);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,Jm=`struct PixelateUniforms {
  uSize:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> pixelateUniforms : PixelateUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let pixelSize: vec2<f32> = pixelateUniforms.uSize;
  let coord: vec2<f32> = mapCoord(uv);

  var pixCoord: vec2<f32> = pixelate(coord, pixelSize);
  pixCoord = unmapCoord(pixCoord);

  return textureSample(uTexture, uSampler, pixCoord);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
  return floor( coord / size ) * size;
}

`;class Rs extends ${constructor(t=10){const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Jm,entryPoint:"mainFragment"}}),r=N.from({vertex:W,fragment:Qm,name:"pixelate-filter"});super({gpuProgram:e,glProgram:r,resources:{pixelateUniforms:{uSize:{value:new Float32Array(2),type:"vec2<f32>"}}}}),this.size=t}get size(){return this.resources.pixelateUniforms.uniforms.uSize}set size(t){t instanceof ut?(this.sizeX=t.x,this.sizeY=t.y):Array.isArray(t)?this.resources.pixelateUniforms.uniforms.uSize=t:this.sizeX=this.sizeY=t}get sizeX(){return this.resources.pixelateUniforms.uniforms.uSize[0]}set sizeX(t){this.resources.pixelateUniforms.uniforms.uSize[0]=t}get sizeY(){return this.resources.pixelateUniforms.uniforms.uSize[1]}set sizeY(t){this.resources.pixelateUniforms.uniforms.uSize[1]=t}}var tp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`,ep=`struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`,np=Object.defineProperty,rp=(n,t,e)=>t in n?np(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Mn=(n,t,e)=>(rp(n,typeof t!="symbol"?t+"":t,e),e);const ip=class Da extends ${constructor(...t){let e=t[0]??{};if(typeof e=="number"){if(U("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),e={angle:e},t[1]){const s="x"in t[1]?t[1].x:t[1][0],o="y"in t[1]?t[1].y:t[1][1];e.center={x:s,y:o}}t[2]&&(e.kernelSize=t[2]),t[3]&&(e.radius=t[3])}e={...Da.DEFAULT_OPTIONS,...e};const r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:ep,entryPoint:"mainFragment"}}),i=N.from({vertex:W,fragment:tp,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uKernelSize:{value:e.kernelSize,type:"i32"},uRadius:{value:e.radius,type:"f32"}}}}),Mn(this,"uniforms"),Mn(this,"_angle"),Mn(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,e)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};Mn(ip,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var sp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`,op=`struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`,ap=Object.defineProperty,lp=(n,t,e)=>t in n?ap(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ni=(n,t,e)=>(lp(n,typeof t!="symbol"?t+"":t,e),e);const up=class La extends ${constructor(t){t={...La.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:op,entryPoint:"mainFragment"}}),r=N.from({vertex:W,fragment:sp,name:"reflection-filter"});super({gpuProgram:e,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ni(this,"uniforms"),ni(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};ni(up,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var cp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,hp=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,fp=Object.defineProperty,dp=(n,t,e)=>t in n?fp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ga=(n,t,e)=>(dp(n,typeof t!="symbol"?t+"":t,e),e);const mp=class Na extends ${constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(U("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),e={red:e},t[1]!==void 0&&(e.green=t[1]),t[2]!==void 0&&(e.blue=t[2])),e={...Na.DEFAULT_OPTIONS,...e};const r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:hp,entryPoint:"mainFragment"}}),i=N.from({vertex:W,fragment:cp,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:i,resources:{rgbSplitUniforms:{uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}}}}),Ga(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,e)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};Ga(mp,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var pp=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`,gp=`
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`,xp=Object.defineProperty,vp=(n,t,e)=>t in n?xp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ri=(n,t,e)=>(vp(n,typeof t!="symbol"?t+"":t,e),e);const yp=class $a extends ${constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(U("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),e={center:e,...t[1]},t[2]!==void 0&&(e.time=t[2])),e={...$a.DEFAULT_OPTIONS,...e};const r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:gp,entryPoint:"mainFragment"}}),i=N.from({vertex:W,fragment:pp,name:"shockwave-filter"});super({gpuProgram:r,glProgram:i,resources:{shockwaveUniforms:{uTime:{value:e.time,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uSpeed:{value:e.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),ri(this,"uniforms"),ri(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,e)}apply(t,e,r,i){this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};ri(yp,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var _p=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`,bp=`struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`,Sp=Object.defineProperty,wp=(n,t,e)=>t in n?Sp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Fn=(n,t,e)=>(wp(n,typeof t!="symbol"?t+"":t,e),e);const Cp=class Va extends ${constructor(...t){let e=t[0]??{};if(e instanceof F&&(U("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),e={lightMap:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.alpha=t[2])),e={...Va.DEFAULT_OPTIONS,...e},!e.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:bp,entryPoint:"mainFragment"}}),i=N.from({vertex:W,fragment:_p,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:i,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:e.lightMap.source,uMapSampler:e.lightMap.source.style}}),Fn(this,"uniforms"),Fn(this,"_color"),Fn(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new j,this.color=e.color??0,Object.assign(this,e)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,r,i)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Fn(Cp,"DEFAULT_OPTIONS",{lightMap:F.WHITE,color:0,alpha:1});var Ap=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uTexSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uTexSize - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uTexSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`,Tp=`struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uTexSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uTexSize = tiltShiftUniforms.uTexSize;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uTexSize - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uTexSize * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`,Pp=Object.defineProperty,zp=(n,t,e)=>t in n?Pp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ii=(n,t,e)=>(zp(n,typeof t!="symbol"?t+"":t,e),e);const Mp=class Wa extends ${constructor(t){t={...Wa.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Tp,entryPoint:"mainFragment"}}),r=N.from({vertex:W,fragment:Ap,name:"tilt-shift-axis-filter"});super({gpuProgram:e,glProgram:r,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur??100,t.gradientBlur??600]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([30,30]),type:"vec2<f32>"},uTexSize:{value:new Float32Array([window.innerWidth,window.innerHeight]),type:"vec2<f32>"}}}}),ii(this,"uniforms"),ii(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis,this.updateDelta()}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,e=this.uniforms.uStart,r=t.x-e.x,i=t.y-e.y,s=Math.sqrt(r*r+i*i),o=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=o?-i/s:r/s,this.uniforms.uDelta[1]=o?r/s:i/s}};ii(Mp,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600,start:{x:0,y:window.innerHeight/2},end:{x:600,y:window.innerHeight/2}});var Fp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,Ip=`struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`,Op=Object.defineProperty,Rp=(n,t,e)=>t in n?Op(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Xa=(n,t,e)=>(Rp(n,typeof t!="symbol"?t+"":t,e),e);const Up=class Ya extends ${constructor(t){t={...Ya.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Ip,entryPoint:"mainFragment"}}),r=N.from({vertex:W,fragment:Fp,name:"twist-filter"});super({gpuProgram:e,glProgram:r,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),Xa(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};Xa(Up,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var Bp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,kp=`struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`,Ep=Object.defineProperty,Dp=(n,t,e)=>t in n?Ep(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ha=(n,t,e)=>(Dp(n,typeof t!="symbol"?t+"":t,e),e);const Lp=class ja extends ${constructor(t){t={...ja.DEFAULT_OPTIONS,...t};const e=t.maxKernelSize??32,r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:kp.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),entryPoint:"mainFragment"}}),i=N.from({vertex:W,fragment:Bp.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Ha(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};Ha(Lp,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});const Ye=20;class Gp extends Z{constructor(){super();b(this,"bg");b(this,"model");b(this,"hand");b(this,"beard");b(this,"tattoo");b(this,"zones");b(this,"tattoos",[]);b(this,"isShown",!1);b(this,"text");this.bg=new et({texture:F.from("komnata1")}),this.bg.scale=.5,this.bg.x=-this.bg.width/2+R.width/2,this.bg.y=R.topPos+Ye,this.addChild(this.bg);const e=new et({texture:F.from("box")});e.scale=.7,e.x=-e.width/2+R.width/2,e.y=R.bottomPos-e.height-Ye,e.eventMode="static",e.cursor="pointer";const r=a=>{this.isShown=!this.isShown;for(let l=0;l<this.tattoos.length;l++)this.tattoos[l].visible=this.isShown};e.on("pointerdown",r),this.addChild(e),this.model=new et({texture:F.from("model1")}),this.model.scale=.5,this.model.x=-this.model.width/2+R.width/2,this.model.y=R.topPos+Ye+10,this.addChild(this.model),this.hand=new et({texture:F.from("hand")}),this.hand.anchor.x=.9,this.hand.anchor.y=.09,this.hand.x=366,this.hand.y=488,this.model.addChild(this.hand);const i=(a,l)=>{l.alpha==0?l.alpha=.5:l.alpha==.5?(l.filters[0].size=3,l.alpha=.75):l.alpha==.75?(l.filters[0].size=1.5,l.alpha=.85):l.alpha==.85?(l.filters[0].size=1,l.alpha=.95):l.alpha==.95?(l.filters=[],l.alpha=1):l.alpha==1&&(l.filters=[new Rs(5)],l.alpha=0),l.visible=l.alpha>0},s=(a,l,c,u)=>{const h=new et({texture:F.from(a+"Zone")}),f=!1;h.hitArea=new _e(l),h.eventMode="static",h.cursor="pointer",h.alpha=0,h.scale=2,h.x=u[0]*2,h.y=u[1]*2,this.model.addChild(h);const d=new et({texture:F.from(a+"0")});d.scale=2,d.x=(u[0]+c[0])*2,d.y=(u[1]+c[1])*2,d.visible=f,this.model.addChild(d),d.filters=[new Rs(5)],d.alpha=0,this.tattoos.push(d),h.on("pointerdown",m=>i(m,d))};s("leftArmTop",[0,45,80,0,96,35,35,60],[5,-1],[2,80]),s("leftArmBottom",[-5,2,35,20,40,85,22,100],[1,-3],[0,126]),s("rightArmTop",[-5,2,35,10,55,110,20,80],[1,2],[212,118]),s("RightArmBottom",[0,36,65,0,85,25,16,55],[11,-1],[172,204]),s("RightLegTop",[0,26,10,0,45,20,25,50],[5,2],[250,230]),s("RightLegBottom",[0,96,55,0,92,25,25,105],[21,4],[183,260]),s("LeftLegTop",[0,10,25,5,35,40,10,55],[-2,1],[10,230]),s("LeftLegBottom",[90,105,40,5,0,30,55,105],[1,0],[23,260]),s("LeftShoulder",[2,10,45,0,55,20,12,30],[5,0],[80,66]),s("RightShoulder",[0,0,30,5,55,40,15,30],[1,-2],[194,86]),s("Middle",[20,-15,110,0,115,55,10,45],[4,-49],[90,112]);const o=new et({texture:F.from("reflection")});this.model.addChild(o),this.beard=new et({texture:F.from("beard")}),this.beard.x=274,this.beard.y=-2,this.model.addChild(this.beard)}update(e){this.hand.rotation=Dt(0,-.12,Math.sin(e.lastTime*.004))}}class G{constructor(t,e,r){b(this,"x");b(this,"y");b(this,"z");this.x=t,this.y=e,this.z=r}clone(){return new G(this.x,this.y,this.z)}size(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}normalize(){const t=this.size();return t==0?this:(this.x/=t,this.y/=t,this.z/=t,this)}add(t){return new G(this.x+t.x,this.y+t.y,this.z+t.z)}mul(t){return new G(this.x*t,this.y*t,this.z*t)}cross(t){return new G(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}rotateX(t){const e=Math.sin(t),r=Math.cos(t);return new G(this.x,this.y*r-this.z*e,this.y*e+this.z*r)}rotateY(t){const e=Math.sin(t),r=Math.cos(t);return new G(this.x*r+this.z*e,this.y,-this.x*e+this.z*r)}rotateZ(t){const e=Math.sin(t),r=Math.cos(t);return new G(this.x*r-this.y*e,this.x*e+this.y*r,this.z)}}class we{constructor(t){b(this,"m");this.m=t}static fromOrientationVectors(t,e){const r=t.cross(e);return new we([[t.x,e.x,r.x],[t.y,e.y,r.y],[t.z,e.z,r.z]])}transpose(){const t=this.m;return new we([[t[0][0],t[1][0],t[2][0]],[t[0][1],t[1][1],t[2][1]],[t[0][2],t[1][2],t[2][2]]])}multiply(t){const e=[];for(let r=0;r<3;r++){e[r]=[];for(let i=0;i<3;i++){e[r][i]=0;for(let s=0;s<3;s++)e[r][i]+=this.m[r][s]*t.m[s][i]}}return new we(e)}multiplyVector(t){const e=this.m[0][0]*t.x+this.m[0][1]*t.y+this.m[0][2]*t.z,r=this.m[1][0]*t.x+this.m[1][1]*t.y+this.m[1][2]*t.z,i=this.m[2][0]*t.x+this.m[2][1]*t.y+this.m[2][2]*t.z;return new G(e,r,i)}}const zr=50,yn=150,_n=15,de=12;class Np{constructor(){b(this,"x",0);b(this,"y",0);b(this,"z",0);b(this,"vx",0);b(this,"vy",0);b(this,"vz",0);b(this,"va",new G(0,0,0));b(this,"oldX",0);b(this,"oldY",0);b(this,"oldZ",0);b(this,"oldVZ",0);b(this,"oldVAsize",0)}}class $p{constructor(){b(this,"vecX");b(this,"vecY");b(this,"x");b(this,"y");b(this,"z")}}class Mr extends et{constructor(e,r,i,s){super();b(this,"spriteX",0);b(this,"spriteY",4);b(this,"vecX",new G(1,0,0));b(this,"vecY",new G(0,1,0));b(this,"physicsData");b(this,"diceTexture");b(this,"shadow");b(this,"needPlayback",!1);b(this,"recordedData",[]);b(this,"needFinalOffset",!1);b(this,"randomAngle",0);this.physicsData=new Np,this.physicsData.x=e,this.physicsData.y=r,this.physicsData.oldX=e,this.physicsData.oldY=r,this.diceTexture=i,this.shadow=new et({texture:s}),this.shadow.x=this.physicsData.x,this.shadow.y=this.physicsData.y,this.shadow.blendMode="multiply",this.shadow.alpha=.8;const o=this.getRandomFaceIndex();this.needFinalOffset=o==2;const a=this.getFaceOrientation(o);this.vecX=a[0],this.vecY=a[1],this.roundPixels=!0,this.anchor.set(.5),this.CalculateSpriteFaceAndAngle()}getRandomFaceIndex(){return Is(0,6)}getFaceOrientation(e){return e==0?[new G(1,0,0),new G(0,1,0)]:e==1?[new G(0,0,1),new G(0,1,0)]:e==2?[new G(1,0,0),new G(0,0,1)]:e==3?[new G(1,0,0),new G(0,0,-1)]:e==4?[new G(0,0,-1),new G(0,1,0)]:[new G(-1,0,0),new G(0,1,0)]}Rotate(e,r){if(r==0)return;let i,s,o;const a=e.clone().normalize(),l=new G(e.x,e.y,0).normalize();i=Math.acos(l.x),l.y<0&&(i=-i),s=a.z==0?0:a.z>0?Math.PI/2:-Math.PI/2,o=Math.acos(Math.min(Math.max(a.dot(l),-1),1)),this.vecX=this.vecX.rotateZ(-i).rotateX(-s).rotateZ(-o),this.vecX=this.vecX.rotateX(r),this.vecX=this.vecX.rotateZ(o).rotateX(s).rotateZ(i),this.vecY=this.vecY.rotateZ(-i).rotateX(-s).rotateZ(-o),this.vecY=this.vecY.rotateX(r),this.vecY=this.vecY.rotateZ(o).rotateX(s).rotateZ(i),this.vecX.normalize(),this.vecY.normalize()}Stabilize(){let e=new G(this.vecX.x,this.vecX.y,0);Math.abs(this.vecX.z)<=e.size()?this.vecX=e.normalize():this.vecX=new G(0,0,this.vecX.z>0?1:-1),e=new G(this.vecY.x,this.vecY.y,0),Math.abs(this.vecY.z)<=e.size()&&Math.abs(e.dot(this.vecX))<.01||this.vecX.z!=0?this.vecY=e.normalize():this.vecY=new G(0,0,this.vecY.z>0?1:-1)}AddImpact(e,r){const i=this.getRandomFaceIndex(),s=this.getFaceOrientation(i);this.vecX=s[0],this.vecY=s[1],e?this.physicsData.vz=Dt(2,3,Math.random()):this.physicsData.vz=Dt(.5,1,Math.random()),this.physicsData.vy=Math.random()>.5?Dt(-10,-50,Math.random()):Dt(10,50,Math.random());let o=Dt(-5,5,Math.random()),a=Dt(-5,5,Math.random());this.physicsData.va=new G(o,a,Math.random()),this.recordedData=[];let l=!1;for(;!l;){this.CalculatePhysics();let c=new $p;if(c.vecX=this.vecX,c.vecY=this.vecY,c.x=this.physicsData.x,c.y=this.physicsData.y,c.z=this.physicsData.z,this.recordedData.push(c),this.physicsData.vx==0&&this.physicsData.vy==0&&this.physicsData.vz==0&&this.physicsData.va.size()<.01){this.randomAngle=0,r==-1&&(r=Is(0,6)),this.needFinalOffset=r==2,this.randomAngle=Dt(-40,40,Math.random());const[u,h]=this.getFaceOrientation(r),f=we.fromOrientationVectors(this.vecX,this.vecY),m=we.fromOrientationVectors(u,h).multiply(f.transpose());for(let g of this.recordedData)g.vecX=m.multiplyVector(g.vecX).normalize(),g.vecY=m.multiplyVector(g.vecY).normalize();this.recordedData.reverse(),l=!0,this.needPlayback=!0}}}UpdateSpriteFace(e,r){const i=new at(e*yn,r*yn,yn,yn);this.texture=new F({source:this.diceTexture.source,frame:i})}CalculatePhysics(){const e=this.vecX.cross(this.vecY);for(let l=-1;l<=1;l+=2)for(let c=-1;c<=1;c+=2)for(let u=-1;u<=1;u+=2){const h=new G(l*this.vecX.x+c*this.vecY.x+u*e.x,l*this.vecX.y+c*this.vecY.y+u*e.y,l*this.vecX.z+c*this.vecY.z+u*e.z);if(this.physicsData.z+h.z<-1){let f=h.cross(new G(0,0,1));f.normalize(),f=f.mul((Math.max(0,-this.physicsData.vz)+Math.max(0,this.physicsData.va.dot(f.mul(-1))))*.5+.1),this.physicsData.va=this.physicsData.va.add(f),this.physicsData.z=-1-h.z}}this.Rotate(this.physicsData.va,this.physicsData.va.size()/10),this.physicsData.z>10&&(this.physicsData.z=10),this.physicsData.z>0&&(this.physicsData.vz-=.16),this.physicsData.x+=this.physicsData.vx,this.physicsData.y+=this.physicsData.vy,this.physicsData.z+=this.physicsData.vz;const r=Math.min(Ge(this.physicsData.z,0,4,zr/1.5,zr),zr),i=R.topPos+38+r,s=R.topPos+38+376-r,o=R.width/2-340/2+r,a=R.width/2-340/2+340-r;this.physicsData.x<o&&(this.physicsData.x=o,this.physicsData.vx<0&&(this.physicsData.vx=-this.physicsData.vx*.5)),this.physicsData.x>a&&(this.physicsData.x=a,this.physicsData.vx>0&&(this.physicsData.vx=-this.physicsData.vx*.5)),this.physicsData.y<i&&(this.physicsData.y=i,this.physicsData.vy<0&&(this.physicsData.vy=-this.physicsData.vy*.5)),this.physicsData.y>s&&(this.physicsData.y=s,this.physicsData.vy>0&&(this.physicsData.vy=-this.physicsData.vy*.5)),this.physicsData.z<=.01&&(this.physicsData.z=0,this.physicsData.vx*=.5,Math.abs(this.physicsData.vx)<.01&&(this.physicsData.vx=0),this.physicsData.vy*=.5,Math.abs(this.physicsData.vy)<.01&&(this.physicsData.vy=0),this.physicsData.vz*=.5,Math.abs(this.physicsData.vz)<.01&&(this.physicsData.vz=0),this.physicsData.va=new G(0,0,0),this.Stabilize()),this.physicsData.oldZ<.5&&this.physicsData.z<.5&&(this.physicsData.z=0),Math.abs(this.physicsData.oldVZ)<.5&&Math.abs(this.physicsData.vz)<.5&&(this.physicsData.vz=0),this.physicsData.z==0&&this.physicsData.oldVAsize<.4&&this.physicsData.va.size()<.4&&(this.physicsData.va=new G(0,0,0),this.Stabilize()),this.physicsData.oldZ=this.physicsData.z,this.physicsData.oldVZ=this.physicsData.vz,this.physicsData.oldVAsize=this.physicsData.va.size()}GetCurrentFace(){return this.spriteX==0&&this.spriteY==6?1:this.spriteX==6&&this.spriteY==6?2:this.spriteX==0&&this.spriteY==12?3:this.spriteX==0&&this.spriteY==0?4:this.spriteX==18&&this.spriteY==6?5:this.spriteX==12&&this.spriteY==6?6:-1}CalculateSpriteFaceAndAngle(){let e=0,r,i,s,o,a,l,c;r=Math.asin(this.vecY.z)*180/Math.PI,a=new G(this.vecY.x,this.vecY.y,0),a.normalize(),s=Math.acos(a.y)*180/Math.PI,a.x>0&&(s=-s),c=a.y,l=Math.sin(s*Math.PI/180),o=new G(this.vecX.x*c+this.vecX.y*l,-this.vecX.x*l+this.vecX.y*c,this.vecX.z),l=this.vecY.z,c=Math.sqrt(1-l*l),o=new G(o.x,o.y*c+o.z*l,-o.y*l+o.z*c),i=Math.acos(o.x)*180/Math.PI,o.z>0&&(i=-i),this.spriteY=Math.round(r/_n)+de/2,this.spriteX=(Math.round(-(i-180)/_n)+de)%(de*2),(this.spriteY==0||this.spriteY==de)&&(this.spriteX=0),this.spriteY==0&&(e=i),this.spriteY==de&&(i<0&&(e=180),this.needFinalOffset&&(e-=90)),e-=s,e+=this.randomAngle,this.spriteY!=0&&this.spriteY!=de&&(e=Math.round(e/_n)*_n),this.angle=e,this.Draw()}Draw(){this.x=this.physicsData.x,this.y=this.physicsData.y,this.physicsData.z>2?(this.scale=Ge(this.physicsData.z,2,10,.7,.9),this.shadow.scale=Ge(this.physicsData.z,2,10,2,2.6)):(this.scale=Ge(this.physicsData.z,0,2,.5,.7),this.shadow.scale=Ge(this.physicsData.z,0,2,1.4,2)),this.shadow.x=this.x-this.width+this.physicsData.z*4-4,this.shadow.y=this.y-this.height+this.physicsData.z*4-4,this.zIndex=this.physicsData.z,this.UpdateSpriteFace(this.spriteX,this.spriteY)}SkipPlayback(){if(this.needPlayback&&this.recordedData.length>0){const e=this.recordedData[0];this.vecX=e.vecX,this.vecY=e.vecY,this.physicsData.x=e.x,this.physicsData.y=e.y,this.physicsData.z=e.z,this.CalculateSpriteFaceAndAngle(),this.needPlayback=!1}}Update(){if(this.needPlayback){const e=this.recordedData.pop();e!=null?(this.vecX=e.vecX,this.vecY=e.vecY,this.physicsData.x=e.x,this.physicsData.y=e.y,this.physicsData.z=e.z,this.CalculateSpriteFaceAndAngle()):this.needPlayback=!1}}}class Vp extends Z{constructor(){super();b(this,"boxContainer");b(this,"bg");b(this,"dice");b(this,"dice2");b(this,"dice3");b(this,"randomBtn");b(this,"shake");b(this,"energyText");this.bg=new et({texture:F.from("floor")}),this.bg.scale=.7,this.bg.x=-this.bg.width/2+R.width/2,this.bg.y=R.bottomPos-this.bg.height,this.addChild(this.bg),this.boxContainer=new Z,this.addChild(this.boxContainer),this.bg=new et({texture:F.from("diceBackground")}),this.bg.scale=.6,this.bg.x=-this.bg.width/2+R.width/2,this.bg.y=R.topPos+Ye,this.boxContainer.addChild(this.bg);const e=new et({texture:F.from("wood")});e.scale=.5,e.x=-e.width/2+R.width/2,e.y=R.topPos,e.zIndex=0,this.boxContainer.addChild(e);const r=new $t().rect(R.width/2-350/2,R.topPos+38,350,380).fill("#df6c6c");this.boxContainer.addChild(r),this.bg.mask=r,this.energyText=se(this.ourEnergyText),this.energyText.x=R.width/2,this.energyText.y=R.topPos+432,this.energyText.style.fontSize=22,this.energyText.anchor.set(.5),this.boxContainer.addChild(this.energyText);let i=F.from("dice"),s=F.from("diceShadow");this.dice=new Mr(R.width/2-100,this.bg.y+330,i,s),this.dice2=new Mr(R.width/2+100,this.bg.y+330,i,s),this.dice3=new Mr(R.width/2,this.bg.y+330,i,s),this.boxContainer.addChild(this.dice.shadow),this.boxContainer.addChild(this.dice2.shadow),this.boxContainer.addChild(this.dice3.shadow),this.boxContainer.addChild(this.dice),this.boxContainer.addChild(this.dice2),this.boxContainer.addChild(this.dice3),this.dice.Draw(),this.dice2.Draw(),this.dice3.Draw();const o=R.topPos+38+382+40;this.randomBtn=new qt({text:"Random",tint:"#9296A0"}),this.randomBtn.scale=1.9,this.randomBtn.x=R.width/2-this.randomBtn.width/2,this.randomBtn.y=o+(R.bottomPos-o)/2-this.randomBtn.height*2,this.addChild(this.randomBtn),this.randomBtn.on("pointerdown",()=>this.ThrowDiceButtonClick(-1)),this.randomBtn=new qt({text:"Sugar",tint:"#9296A0"}),this.randomBtn.scale=1.9,this.randomBtn.x=R.width/2-this.randomBtn.width-2,this.randomBtn.y=o+(R.bottomPos-o)/2-this.randomBtn.height,this.addChild(this.randomBtn),this.randomBtn.on("pointerdown",()=>this.ThrowDiceButtonClick(0)),this.randomBtn=new qt({text:"PVP",tint:"#9296A0"}),this.randomBtn.scale=1.9,this.randomBtn.x=R.width/2+2,this.randomBtn.y=o+(R.bottomPos-o)/2-this.randomBtn.height,this.addChild(this.randomBtn),this.randomBtn.on("pointerdown",()=>this.ThrowDiceButtonClick(1)),this.randomBtn=new qt({text:"Free",tint:"#9296A0"}),this.randomBtn.scale=1.9,this.randomBtn.x=R.width/2-this.randomBtn.width-2,this.randomBtn.y=o+(R.bottomPos-o)/2,this.addChild(this.randomBtn),this.randomBtn.on("pointerdown",()=>this.ThrowDiceButtonClick(2)),this.randomBtn=new qt({text:"Event",tint:"#9296A0"}),this.randomBtn.scale=1.9,this.randomBtn.x=R.width/2+2,this.randomBtn.y=o+(R.bottomPos-o)/2,this.addChild(this.randomBtn),this.randomBtn.on("pointerdown",()=>this.ThrowDiceButtonClick(3)),this.randomBtn=new qt({text:"Fight",tint:"#9296A0"}),this.randomBtn.scale=1.9,this.randomBtn.x=R.width/2-this.randomBtn.width-2,this.randomBtn.y=o+(R.bottomPos-o)/2+this.randomBtn.height,this.addChild(this.randomBtn),this.randomBtn.on("pointerdown",()=>this.ThrowDiceButtonClick(4)),this.randomBtn=new qt({text:"Jackpot",tint:"#9296A0"}),this.randomBtn.scale=1.9,this.randomBtn.x=R.width/2+2,this.randomBtn.y=o+(R.bottomPos-o)/2+this.randomBtn.height,this.addChild(this.randomBtn),this.randomBtn.on("pointerdown",()=>this.ThrowDiceButtonClick(5))}get ourEnergyText(){return`Energy: ${zf(Je.data.energy)}/50`}SkipDicePlayback(){this.dice.SkipPlayback(),this.dice2.SkipPlayback(),this.dice3.SkipPlayback()}ThrowDiceButtonClick(e){!this.dice.needPlayback&&!this.dice2.needPlayback&&!this.dice3.needPlayback?Ze.ThrowDice(Je.data)&&this.ThrowDices(e):this.SkipDicePlayback()}ThrowDices(e){let r=!1;Math.random()>.8&&(r=!0),this.dice.AddImpact(r,e),this.dice2.AddImpact(r,e),this.dice3.AddImpact(r,e)}update(e){this.dice.Update(),this.dice2.Update(),this.dice3.Update(),this.energyText.text=this.ourEnergyText}}const Bn=class Bn extends Z{constructor(){super();b(this,"roomScreen");b(this,"diceScreen");b(this,"backButton");b(this,"timer");b(this,"assetBundles",["diceAsset","uiAsset","background","fonts"]);b(this,"data");this.data=Ze.LoadData(),Bn.data=this.data,screen.orientation.addEventListener("change",()=>{switch(screen.orientation.type){case"landscape-primary":case"landscape-secondary":this.roomScreen.visible=!1,this.diceScreen.visible=!1;break}})}constructorWithAssets(){this.roomScreen=new Gp,this.addChild(this.roomScreen),this.diceScreen=new Vp,this.addChild(this.diceScreen),this.roomScreen.visible=!1,this.diceScreen.visible=!0,this.backButton=new et({texture:F.from("roomIcon")}),this.backButton.scale=.5,this.backButton.x=R.rightPos-this.backButton.width-10,this.backButton.y=R.bottomPos-this.backButton.height-Ye,this.backButton.eventMode="static",this.backButton.cursor="pointer",this.backButton.on("pointerdown",()=>{this.flipScrens()}),this.addChild(this.backButton)}flipScrens(){this.roomScreen.visible=!this.roomScreen.visible,this.diceScreen.visible=!this.diceScreen.visible}update(e){this.roomScreen.update(e),this.roomScreen.y=0,this.diceScreen.update(e)}sizeLog(){const e=Math.max(document.documentElement.clientWidth,window.innerWidth||0),r=Math.max(document.documentElement.clientHeight,window.innerHeight||0),i=se(e+"x"+r);i.anchor.set(.5),i.x=R.width/2,i.y=R.width/2-10,this.addChild(i);const s=se(R.enlargedWidth+"x"+R.enlargedHeight);s.anchor.set(.5),s.x=R.width/2,s.y=R.width/2,this.addChild(s);const o=se(window.Telegram.WebApp.platform);o.anchor.set(.5),o.x=R.width/2,o.y=R.width/2+10,this.addChild(o)}};b(Bn,"data");let Je=Bn;class Wp extends Z{constructor(){super();b(this,"assetBundles",["fonts"])}constructorWithAssets(){const e=se("Играй на телефоне бро!");e.style.fontSize=30,e.anchor.set(.5),e.x=R.width/2,e.y=R.height/2,this.addChild(e)}update(e){}}let Xp=750,qa=100;Ke.isDesktop&&(qa=0);let si;const Yp=n=>{si=n.touches[0].clientY},Us=document.getElementsByTagName("body")[0],Hp=n=>{if(Us){const t=Us.scrollTop,e=n.changedTouches[0].clientY;t<=0&&si!==void 0&&si<e,n.preventDefault()}};document.documentElement.addEventListener("touchstart",Yp,{passive:!1});document.documentElement.addEventListener("touchmove",Hp,{passive:!1});(async()=>(await R.Init(550,Xp,1,qa),Ke.isMobile||Ke.isDev?await R.ChangeScene(new Je):await R.ChangeScene(new Wp)))();export{Q as $,Ao as A,rt as B,Z as C,lt as D,D as E,$ as F,L as G,Ct as H,Ni as I,et as J,uu as K,_u as L,H as M,it as N,at as O,ut as P,Du as Q,Un as R,vu as S,un as T,go as U,Wi as V,Ll as W,rr as X,j as Y,Hs as Z,U as _,Br as a,Fo as a0,Te as a1,hh as a2,Vo as a3,Hh as a4,jh as a5,ze as a6,ft as a7,na as a8,qh as a9,ko as aa,fe as ab,Vh as ac,le as ad,At as ae,Yi as af,$t as ag,ml as ah,Do as ai,Tt as b,N as c,ci as d,gt as e,fs as f,Tc as g,Mc as h,lr as i,Nt as j,Sn as k,ui as l,Io as m,Fi as n,So as o,ro as p,Pt as q,Al as r,F as s,dl as t,Fc as u,Ac as v,ct as w,Ot as x,Xs as y,pt as z};
