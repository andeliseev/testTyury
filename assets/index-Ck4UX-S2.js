const __vite__fileDeps=["assets/browserAll-4a8qd5Gq.js","assets/webworkerAll-AAIef4dx.js","assets/colorToUniform-CE1mKMR5.js","assets/CanvasPool-3ZXD_VXu.js","assets/getBatchSamplersUniformGroup-Cy4IkaVq.js","assets/WebGPURenderer-OFz6ucCE.js","assets/SharedSystems-A0YOGn9f.js","assets/WebGLRenderer-BYC320UH.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var ul=Object.defineProperty;var hl=(n,t,e)=>t in n?ul(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var w=(n,t,e)=>(hl(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const cl="modulepreload",fl=function(n){return"/testTyury/"+n},kr={},Dn=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(e.map(a=>{if(a=fl(a),a in kr)return;kr[a]=!0;const l=a.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${h}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":cl,l||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var D=(n=>(n.Application="application",n.WebGLPipes="webgl-pipes",n.WebGLPipesAdaptor="webgl-pipes-adaptor",n.WebGLSystem="webgl-system",n.WebGPUPipes="webgpu-pipes",n.WebGPUPipesAdaptor="webgpu-pipes-adaptor",n.WebGPUSystem="webgpu-system",n.CanvasSystem="canvas-system",n.CanvasPipesAdaptor="canvas-pipes-adaptor",n.CanvasPipes="canvas-pipes",n.Asset="asset",n.LoadParser="load-parser",n.ResolveParser="resolve-parser",n.CacheParser="cache-parser",n.DetectionParser="detection-parser",n.MaskEffect="mask-effect",n.BlendMode="blend-mode",n.TextureSource="texture-source",n.Environment="environment",n))(D||{});const Ui=n=>{if(typeof n=="function"||typeof n=="object"&&n.extension){if(!n.extension)throw new Error("Extension class must have an extension object");n={...typeof n.extension!="object"?{type:n.extension}:n.extension,ref:n}}if(typeof n=="object")n={...n};else throw new Error("Invalid extension type");return typeof n.type=="string"&&(n.type=[n.type]),n},fn=(n,t)=>Ui(n).priority??t,_t={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...n){return n.map(Ui).forEach(t=>{t.type.forEach(e=>{var i,r;return(r=(i=this._removeHandlers)[e])==null?void 0:r.call(i,t)})}),this},add(...n){return n.map(Ui).forEach(t=>{t.type.forEach(e=>{var s,o;const i=this._addHandlers,r=this._queue;i[e]?(o=i[e])==null||o.call(i,t):(r[e]=r[e]||[],(s=r[e])==null||s.push(t))})}),this},handle(n,t,e){var o;const i=this._addHandlers,r=this._removeHandlers;if(i[n]||r[n])throw new Error(`Extension type ${n} already has a handler`);i[n]=t,r[n]=e;const s=this._queue;return s[n]&&((o=s[n])==null||o.forEach(a=>t(a)),delete s[n]),this},handleByMap(n,t){return this.handle(n,e=>{e.name&&(t[e.name]=e.ref)},e=>{e.name&&delete t[e.name]})},handleByNamedList(n,t,e=-1){return this.handle(n,i=>{t.findIndex(s=>s.name===i.name)>=0||(t.push({name:i.name,value:i.ref}),t.sort((s,o)=>fn(o.value,e)-fn(s.value,e)))},i=>{const r=t.findIndex(s=>s.name===i.name);r!==-1&&t.splice(r,1)})},handleByList(n,t,e=-1){return this.handle(n,i=>{t.includes(i.ref)||(t.push(i.ref),t.sort((r,s)=>fn(s,e)-fn(r,e)))},i=>{const r=t.indexOf(i.ref);r!==-1&&t.splice(r,1)})}},dl={extension:{type:D.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Dn(()=>import("./browserAll-4a8qd5Gq.js"),__vite__mapDeps([0,1,2,3,4]))}},pl={extension:{type:D.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await Dn(()=>import("./webworkerAll-AAIef4dx.js"),__vite__mapDeps([1,2,3,4]))}};class ct{constructor(t,e,i){this._x=e||0,this._y=i||0,this._observer=t}clone(t){return new ct(t??this._observer,this._x,this._y)}set(t=0,e=t){return(this._x!==t||this._y!==e)&&(this._x=t,this._y=e,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}function dr(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ns={exports:{}};(function(n){var t=Object.prototype.hasOwnProperty,e="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(e=!1));function r(l,h,u){this.fn=l,this.context=h,this.once=u||!1}function s(l,h,u,c,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var d=new r(u,c||l,f),p=e?e+h:h;return l._events[p]?l._events[p].fn?l._events[p]=[l._events[p],d]:l._events[p].push(d):(l._events[p]=d,l._eventsCount++),l}function o(l,h){--l._eventsCount===0?l._events=new i:delete l._events[h]}function a(){this._events=new i,this._eventsCount=0}a.prototype.eventNames=function(){var h=[],u,c;if(this._eventsCount===0)return h;for(c in u=this._events)t.call(u,c)&&h.push(e?c.slice(1):c);return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(u)):h},a.prototype.listeners=function(h){var u=e?e+h:h,c=this._events[u];if(!c)return[];if(c.fn)return[c.fn];for(var f=0,d=c.length,p=new Array(d);f<d;f++)p[f]=c[f].fn;return p},a.prototype.listenerCount=function(h){var u=e?e+h:h,c=this._events[u];return c?c.fn?1:c.length:0},a.prototype.emit=function(h,u,c,f,d,p){var g=e?e+h:h;if(!this._events[g])return!1;var m=this._events[g],x=arguments.length,v,y;if(m.fn){switch(m.once&&this.removeListener(h,m.fn,void 0,!0),x){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,u),!0;case 3:return m.fn.call(m.context,u,c),!0;case 4:return m.fn.call(m.context,u,c,f),!0;case 5:return m.fn.call(m.context,u,c,f,d),!0;case 6:return m.fn.call(m.context,u,c,f,d,p),!0}for(y=1,v=new Array(x-1);y<x;y++)v[y-1]=arguments[y];m.fn.apply(m.context,v)}else{var _=m.length,F;for(y=0;y<_;y++)switch(m[y].once&&this.removeListener(h,m[y].fn,void 0,!0),x){case 1:m[y].fn.call(m[y].context);break;case 2:m[y].fn.call(m[y].context,u);break;case 3:m[y].fn.call(m[y].context,u,c);break;case 4:m[y].fn.call(m[y].context,u,c,f);break;default:if(!v)for(F=1,v=new Array(x-1);F<x;F++)v[F-1]=arguments[F];m[y].fn.apply(m[y].context,v)}}return!0},a.prototype.on=function(h,u,c){return s(this,h,u,c,!1)},a.prototype.once=function(h,u,c){return s(this,h,u,c,!0)},a.prototype.removeListener=function(h,u,c,f){var d=e?e+h:h;if(!this._events[d])return this;if(!u)return o(this,d),this;var p=this._events[d];if(p.fn)p.fn===u&&(!f||p.once)&&(!c||p.context===c)&&o(this,d);else{for(var g=0,m=[],x=p.length;g<x;g++)(p[g].fn!==u||f&&!p[g].once||c&&p[g].context!==c)&&m.push(p[g]);m.length?this._events[d]=m.length===1?m[0]:m:o(this,d)}return this},a.prototype.removeAllListeners=function(h){var u;return h?(u=e?e+h:h,this._events[u]&&o(this,u)):(this._events=new i,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=e,a.EventEmitter=a,n.exports=a})(Ns);var ml=Ns.exports;const Et=dr(ml),gl=Math.PI*2,xl=180/Math.PI,ze=Math.PI/180;class lt{constructor(t=0,e=0){this.x=0,this.y=0,this.x=t,this.y=e}clone(){return new lt(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,e=t){return this.x=t,this.y=e,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return ei.x=0,ei.y=0,ei}}const ei=new lt;class j{constructor(t=1,e=0,i=0,r=1,s=0,o=0){this.array=null,this.a=t,this.b=e,this.c=i,this.d=r,this.tx=s,this.ty=o}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,e,i,r,s,o){return this.a=t,this.b=e,this.c=i,this.d=r,this.tx=s,this.ty=o,this}toArray(t,e){this.array||(this.array=new Float32Array(9));const i=e||this.array;return t?(i[0]=this.a,i[1]=this.b,i[2]=0,i[3]=this.c,i[4]=this.d,i[5]=0,i[6]=this.tx,i[7]=this.ty,i[8]=1):(i[0]=this.a,i[1]=this.c,i[2]=this.tx,i[3]=this.b,i[4]=this.d,i[5]=this.ty,i[6]=0,i[7]=0,i[8]=1),i}apply(t,e){e=e||new lt;const i=t.x,r=t.y;return e.x=this.a*i+this.c*r+this.tx,e.y=this.b*i+this.d*r+this.ty,e}applyInverse(t,e){e=e||new lt;const i=this.a,r=this.b,s=this.c,o=this.d,a=this.tx,l=this.ty,h=1/(i*o+s*-r),u=t.x,c=t.y;return e.x=o*h*u+-s*h*c+(l*s-a*o)*h,e.y=i*h*c+-r*h*u+(-l*i+a*r)*h,e}translate(t,e){return this.tx+=t,this.ty+=e,this}scale(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this}rotate(t){const e=Math.cos(t),i=Math.sin(t),r=this.a,s=this.c,o=this.tx;return this.a=r*e-this.b*i,this.b=r*i+this.b*e,this.c=s*e-this.d*i,this.d=s*i+this.d*e,this.tx=o*e-this.ty*i,this.ty=o*i+this.ty*e,this}append(t){const e=this.a,i=this.b,r=this.c,s=this.d;return this.a=t.a*e+t.b*r,this.b=t.a*i+t.b*s,this.c=t.c*e+t.d*r,this.d=t.c*i+t.d*s,this.tx=t.tx*e+t.ty*r+this.tx,this.ty=t.tx*i+t.ty*s+this.ty,this}appendFrom(t,e){const i=t.a,r=t.b,s=t.c,o=t.d,a=t.tx,l=t.ty,h=e.a,u=e.b,c=e.c,f=e.d;return this.a=i*h+r*c,this.b=i*u+r*f,this.c=s*h+o*c,this.d=s*u+o*f,this.tx=a*h+l*c+e.tx,this.ty=a*u+l*f+e.ty,this}setTransform(t,e,i,r,s,o,a,l,h){return this.a=Math.cos(a+h)*s,this.b=Math.sin(a+h)*s,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=t-(i*this.a+r*this.c),this.ty=e-(i*this.b+r*this.d),this}prepend(t){const e=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const i=this.a,r=this.c;this.a=i*t.a+this.b*t.c,this.b=i*t.b+this.b*t.d,this.c=r*t.a+this.d*t.c,this.d=r*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this}decompose(t){const e=this.a,i=this.b,r=this.c,s=this.d,o=t.pivot,a=-Math.atan2(-r,s),l=Math.atan2(i,e),h=Math.abs(a+l);return h<1e-5||Math.abs(gl-h)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=l),t.scale.x=Math.sqrt(e*e+i*i),t.scale.y=Math.sqrt(r*r+s*s),t.position.x=this.tx+(o.x*e+o.y*r),t.position.y=this.ty+(o.x*i+o.y*s),t}invert(){const t=this.a,e=this.b,i=this.c,r=this.d,s=this.tx,o=t*r-e*i;return this.a=r/o,this.b=-e/o,this.c=-i/o,this.d=t/o,this.tx=(i*this.ty-r*s)/o,this.ty=-(t*this.ty-e*s)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new j;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return yl.identity()}static get shared(){return vl.identity()}}const vl=new j,yl=new j,re=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],se=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],oe=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],ae=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Ri=[],$s=[],dn=Math.sign;function _l(){for(let n=0;n<16;n++){const t=[];Ri.push(t);for(let e=0;e<16;e++){const i=dn(re[n]*re[e]+oe[n]*se[e]),r=dn(se[n]*re[e]+ae[n]*se[e]),s=dn(re[n]*oe[e]+oe[n]*ae[e]),o=dn(se[n]*oe[e]+ae[n]*ae[e]);for(let a=0;a<16;a++)if(re[a]===i&&se[a]===r&&oe[a]===s&&ae[a]===o){t.push(a);break}}}for(let n=0;n<16;n++){const t=new j;t.set(re[n],se[n],oe[n],ae[n],0,0),$s.push(t)}}_l();const tt={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:n=>re[n],uY:n=>se[n],vX:n=>oe[n],vY:n=>ae[n],inv:n=>n&8?n&15:-n&7,add:(n,t)=>Ri[n][t],sub:(n,t)=>Ri[n][tt.inv(t)],rotate180:n=>n^4,isVertical:n=>(n&3)===2,byDirection:(n,t)=>Math.abs(n)*2<=Math.abs(t)?t>=0?tt.S:tt.N:Math.abs(t)*2<=Math.abs(n)?n>0?tt.E:tt.W:t>0?n>0?tt.SE:tt.SW:n>0?tt.NE:tt.NW,matrixAppendRotationInv:(n,t,e=0,i=0)=>{const r=$s[tt.inv(t)];r.tx=e,r.ty=i,n.append(r)}},pn=[new lt,new lt,new lt,new lt];class it{constructor(t=0,e=0,i=0,r=0){this.type="rectangle",this.x=Number(t),this.y=Number(e),this.width=Number(i),this.height=Number(r)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new it(0,0,0,0)}clone(){return new it(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height}strokeContains(t,e,i){const{width:r,height:s}=this;if(r<=0||s<=0)return!1;const o=this.x,a=this.y,l=o-i/2,h=o+r+i/2,u=a-i/2,c=a+s+i/2,f=o+i/2,d=o+r-i/2,p=a+i/2,g=a+s-i/2;return t>=l&&t<=h&&e>=u&&e<=c&&!(t>f&&t<d&&e>p&&e<g)}intersects(t,e){if(!e){const z=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=z)return!1;const C=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>C}const i=this.left,r=this.right,s=this.top,o=this.bottom;if(r<=i||o<=s)return!1;const a=pn[0].set(t.left,t.top),l=pn[1].set(t.left,t.bottom),h=pn[2].set(t.right,t.top),u=pn[3].set(t.right,t.bottom);if(h.x<=a.x||l.y<=a.y)return!1;const c=Math.sign(e.a*e.d-e.b*e.c);if(c===0||(e.apply(a,a),e.apply(l,l),e.apply(h,h),e.apply(u,u),Math.max(a.x,l.x,h.x,u.x)<=i||Math.min(a.x,l.x,h.x,u.x)>=r||Math.max(a.y,l.y,h.y,u.y)<=s||Math.min(a.y,l.y,h.y,u.y)>=o))return!1;const f=c*(l.y-a.y),d=c*(a.x-l.x),p=f*i+d*s,g=f*r+d*s,m=f*i+d*o,x=f*r+d*o;if(Math.max(p,g,m,x)<=f*a.x+d*a.y||Math.min(p,g,m,x)>=f*u.x+d*u.y)return!1;const v=c*(a.y-h.y),y=c*(h.x-a.x),_=v*i+y*s,F=v*r+y*s,R=v*i+y*o,T=v*r+y*o;return!(Math.max(_,F,R,T)<=v*a.x+y*a.y||Math.min(_,F,R,T)>=v*u.x+y*u.y)}pad(t=0,e=t){return this.x-=t,this.y-=e,this.width+=t*2,this.height+=e*2,this}fit(t){const e=Math.max(this.x,t.x),i=Math.min(this.x+this.width,t.x+t.width),r=Math.max(this.y,t.y),s=Math.min(this.y+this.height,t.y+t.height);return this.x=e,this.width=Math.max(i-e,0),this.y=r,this.height=Math.max(s-r,0),this}ceil(t=1,e=.001){const i=Math.ceil((this.x+this.width-e)*t)/t,r=Math.ceil((this.y+this.height-e)*t)/t;return this.x=Math.floor((this.x+e)*t)/t,this.y=Math.floor((this.y+e)*t)/t,this.width=i-this.x,this.height=r-this.y,this}enlarge(t){const e=Math.min(this.x,t.x),i=Math.max(this.x+this.width,t.x+t.width),r=Math.min(this.y,t.y),s=Math.max(this.y+this.height,t.y+t.height);return this.x=e,this.width=i-e,this.y=r,this.height=s-r,this}getBounds(t){return t=t||new it,t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const ni={default:-1};function rt(n="default"){return ni[n]===void 0&&(ni[n]=-1),++ni[n]}const Ur={},Q="8.0.0";function O(n,t,e=3){if(Ur[t])return;let i=new Error().stack;typeof i>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${n}`):(i=i.split(`
`).splice(e).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${n}`),console.warn(i),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${n}`),console.warn(i))),Ur[t]=!0}const Ws=()=>{};function Rr(n){return n+=n===0?1:0,--n,n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n+1}function Dr(n){return!(n&n-1)&&!!n}function bl(n){const t={};for(const e in n)n[e]!==void 0&&(t[e]=n[e]);return t}const Lr=Object.create(null);function Sl(n){const t=Lr[n];return t===void 0&&(Lr[n]=rt("resource")),t}const Vs=class Hs extends Et{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...Hs.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){O(Q,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=Sl(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Vs.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let Xs=Vs;const Ys=class js extends Et{constructor(t={}){super(),this.options=t,this.uid=rt("textureSource"),this._resourceType="textureSource",this._resourceId=rt("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...js.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new Xs(bl(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){var e,i;this.style!==t&&((e=this._style)==null||e.off("change",this._onStyleChange,this),this._style=t,(i=this._style)==null||i.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=rt("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,e,i){i=i||this._resolution,t=t||this.width,e=e||this.height;const r=Math.round(t*i),s=Math.round(e*i);return this.width=r/i,this.height=s/i,this._resolution=i,this.pixelWidth===r&&this.pixelHeight===s?!1:(this._refreshPOT(),this.pixelWidth=r,this.pixelHeight=s,this.emit("resize",this),this._resourceId=rt("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Dr(this.pixelWidth)&&Dr(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};Ys.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let kt=Ys;class pr extends kt{constructor(t){const e=t.resource||new Float32Array(t.width*t.height*4);let i=t.format;i||(e instanceof Float32Array?i="rgba32float":e instanceof Int32Array||e instanceof Uint32Array?i="rgba32uint":e instanceof Int16Array||e instanceof Uint16Array?i="rgba16uint":(e instanceof Int8Array,i="bgra8unorm")),super({...t,resource:e,format:i}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}pr.extension=D.TextureSource;const Gr=new j;class Cl{constructor(t,e){this.mapCoord=new j,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof e>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=e,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){var e;this.texture!==t&&((e=this._texture)==null||e.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,e){e===void 0&&(e=t);const i=this.mapCoord;for(let r=0;r<t.length;r+=2){const s=t[r],o=t[r+1];e[r]=s*i.a+o*i.c+i.tx,e[r+1]=s*i.b+o*i.d+i.ty}return e}update(){const t=this._texture;this._updateID++;const e=t.uvs;this.mapCoord.set(e.x1-e.x0,e.y1-e.y0,e.x3-e.x0,e.y3-e.y0,e.x0,e.y0);const i=t.orig,r=t.trim;r&&(Gr.set(i.width/r.width,0,0,i.height/r.height,-r.x/r.width,-r.y/r.height),this.mapCoord.append(Gr));const s=t.source,o=this.uClampFrame,a=this.clampMargin/s._resolution,l=this.clampOffset;return o[0]=(t.frame.x+a+l)/s.width,o[1]=(t.frame.y+a+l)/s.height,o[2]=(t.frame.x+t.frame.width-a+l)/s.width,o[3]=(t.frame.y+t.frame.height-a+l)/s.height,this.uClampOffset[0]=l/s.pixelWidth,this.uClampOffset[1]=l/s.pixelHeight,this.isSimple=t.frame.width===s.width&&t.frame.height===s.height&&t.rotate===0,!0}}class k extends Et{constructor({source:t,label:e,frame:i,orig:r,trim:s,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:h}={}){if(super(),this.uid=rt("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new it,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=e,this.source=(t==null?void 0:t.source)??new kt,this.noFrame=!i,i)this.frame.copyFrom(i);else{const{width:u,height:c}=this._source;this.frame.width=u,this.frame.height=c}this.orig=r||this.frame,this.trim=s,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=h||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new Cl(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:e}=this,{width:i,height:r}=this._source,s=e.x/i,o=e.y/r,a=e.width/i,l=e.height/r;let h=this.rotate;if(h){const u=a/2,c=l/2,f=s+u,d=o+c;h=tt.add(h,tt.NW),t.x0=f+u*tt.uX(h),t.y0=d+c*tt.uY(h),h=tt.add(h,2),t.x1=f+u*tt.uX(h),t.y1=d+c*tt.uY(h),h=tt.add(h,2),t.x2=f+u*tt.uX(h),t.y2=d+c*tt.uY(h),h=tt.add(h,2),t.x3=f+u*tt.uX(h),t.y3=d+c*tt.uY(h)}else t.x0=s,t.y0=o,t.x1=s+a,t.y1=o,t.x2=s+a,t.y2=o+l,t.x3=s,t.y3=o+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return O(Q,"Texture.baseTexture is now Texture.source"),this._source}}k.EMPTY=new k({label:"EMPTY",source:new kt({label:"EMPTY"})});k.EMPTY.destroy=Ws;k.WHITE=new k({source:new pr({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});k.WHITE.destroy=Ws;function wl(n,t,e,i){const{width:r,height:s}=e.orig,o=e.trim;if(o){const a=o.width,l=o.height;n.minX=o.x-t._x*r-i,n.maxX=n.minX+a,n.minY=o.y-t._y*s-i,n.maxY=n.minY+l}else n.minX=-t._x*r-i,n.maxX=n.minX+r,n.minY=-t._y*s-i,n.maxY=n.minY+s}var Pl={grad:.9,turn:360,rad:360/(2*Math.PI)},Ut=function(n){return typeof n=="string"?n.length>0:typeof n=="number"},ot=function(n,t,e){return t===void 0&&(t=0),e===void 0&&(e=Math.pow(10,t)),Math.round(e*n)/e+0},vt=function(n,t,e){return t===void 0&&(t=0),e===void 0&&(e=1),n>e?e:n>t?n:t},qs=function(n){return(n=isFinite(n)?n%360:0)>0?n:n+360},Nr=function(n){return{r:vt(n.r,0,255),g:vt(n.g,0,255),b:vt(n.b,0,255),a:vt(n.a)}},ii=function(n){return{r:ot(n.r),g:ot(n.g),b:ot(n.b),a:ot(n.a,3)}},Al=/^#([0-9a-f]{3,8})$/i,mn=function(n){var t=n.toString(16);return t.length<2?"0"+t:t},Ks=function(n){var t=n.r,e=n.g,i=n.b,r=n.a,s=Math.max(t,e,i),o=s-Math.min(t,e,i),a=o?s===t?(e-i)/o:s===e?2+(i-t)/o:4+(t-e)/o:0;return{h:60*(a<0?a+6:a),s:s?o/s*100:0,v:s/255*100,a:r}},Zs=function(n){var t=n.h,e=n.s,i=n.v,r=n.a;t=t/360*6,e/=100,i/=100;var s=Math.floor(t),o=i*(1-e),a=i*(1-(t-s)*e),l=i*(1-(1-t+s)*e),h=s%6;return{r:255*[i,a,o,o,l,i][h],g:255*[l,i,i,a,o,o][h],b:255*[o,o,l,i,i,a][h],a:r}},$r=function(n){return{h:qs(n.h),s:vt(n.s,0,100),l:vt(n.l,0,100),a:vt(n.a)}},Wr=function(n){return{h:ot(n.h),s:ot(n.s),l:ot(n.l),a:ot(n.a,3)}},Vr=function(n){return Zs((e=(t=n).s,{h:t.h,s:(e*=((i=t.l)<50?i:100-i)/100)>0?2*e/(i+e)*100:0,v:i+e,a:t.a}));var t,e,i},Qe=function(n){return{h:(t=Ks(n)).h,s:(r=(200-(e=t.s))*(i=t.v)/100)>0&&r<200?e*i/100/(r<=100?r:200-r)*100:0,l:r/2,a:t.a};var t,e,i,r},Tl=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ml=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Fl=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Il=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Di={string:[[function(n){var t=Al.exec(n);return t?(n=t[1]).length<=4?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:n.length===4?ot(parseInt(n[3]+n[3],16)/255,2):1}:n.length===6||n.length===8?{r:parseInt(n.substr(0,2),16),g:parseInt(n.substr(2,2),16),b:parseInt(n.substr(4,2),16),a:n.length===8?ot(parseInt(n.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(n){var t=Fl.exec(n)||Il.exec(n);return t?t[2]!==t[4]||t[4]!==t[6]?null:Nr({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(n){var t=Tl.exec(n)||Ml.exec(n);if(!t)return null;var e,i,r=$r({h:(e=t[1],i=t[2],i===void 0&&(i="deg"),Number(e)*(Pl[i]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Vr(r)},"hsl"]],object:[[function(n){var t=n.r,e=n.g,i=n.b,r=n.a,s=r===void 0?1:r;return Ut(t)&&Ut(e)&&Ut(i)?Nr({r:Number(t),g:Number(e),b:Number(i),a:Number(s)}):null},"rgb"],[function(n){var t=n.h,e=n.s,i=n.l,r=n.a,s=r===void 0?1:r;if(!Ut(t)||!Ut(e)||!Ut(i))return null;var o=$r({h:Number(t),s:Number(e),l:Number(i),a:Number(s)});return Vr(o)},"hsl"],[function(n){var t=n.h,e=n.s,i=n.v,r=n.a,s=r===void 0?1:r;if(!Ut(t)||!Ut(e)||!Ut(i))return null;var o=function(a){return{h:qs(a.h),s:vt(a.s,0,100),v:vt(a.v,0,100),a:vt(a.a)}}({h:Number(t),s:Number(e),v:Number(i),a:Number(s)});return Zs(o)},"hsv"]]},Hr=function(n,t){for(var e=0;e<t.length;e++){var i=t[e][0](n);if(i)return[i,t[e][1]]}return[null,void 0]},zl=function(n){return typeof n=="string"?Hr(n.trim(),Di.string):typeof n=="object"&&n!==null?Hr(n,Di.object):[null,void 0]},ri=function(n,t){var e=Qe(n);return{h:e.h,s:vt(e.s+100*t,0,100),l:e.l,a:e.a}},si=function(n){return(299*n.r+587*n.g+114*n.b)/1e3/255},Xr=function(n,t){var e=Qe(n);return{h:e.h,s:e.s,l:vt(e.l+100*t,0,100),a:e.a}},Li=function(){function n(t){this.parsed=zl(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return n.prototype.isValid=function(){return this.parsed!==null},n.prototype.brightness=function(){return ot(si(this.rgba),2)},n.prototype.isDark=function(){return si(this.rgba)<.5},n.prototype.isLight=function(){return si(this.rgba)>=.5},n.prototype.toHex=function(){return t=ii(this.rgba),e=t.r,i=t.g,r=t.b,o=(s=t.a)<1?mn(ot(255*s)):"","#"+mn(e)+mn(i)+mn(r)+o;var t,e,i,r,s,o},n.prototype.toRgb=function(){return ii(this.rgba)},n.prototype.toRgbString=function(){return t=ii(this.rgba),e=t.r,i=t.g,r=t.b,(s=t.a)<1?"rgba("+e+", "+i+", "+r+", "+s+")":"rgb("+e+", "+i+", "+r+")";var t,e,i,r,s},n.prototype.toHsl=function(){return Wr(Qe(this.rgba))},n.prototype.toHslString=function(){return t=Wr(Qe(this.rgba)),e=t.h,i=t.s,r=t.l,(s=t.a)<1?"hsla("+e+", "+i+"%, "+r+"%, "+s+")":"hsl("+e+", "+i+"%, "+r+"%)";var t,e,i,r,s},n.prototype.toHsv=function(){return t=Ks(this.rgba),{h:ot(t.h),s:ot(t.s),v:ot(t.v),a:ot(t.a,3)};var t},n.prototype.invert=function(){return Ft({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},n.prototype.saturate=function(t){return t===void 0&&(t=.1),Ft(ri(this.rgba,t))},n.prototype.desaturate=function(t){return t===void 0&&(t=.1),Ft(ri(this.rgba,-t))},n.prototype.grayscale=function(){return Ft(ri(this.rgba,-1))},n.prototype.lighten=function(t){return t===void 0&&(t=.1),Ft(Xr(this.rgba,t))},n.prototype.darken=function(t){return t===void 0&&(t=.1),Ft(Xr(this.rgba,-t))},n.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},n.prototype.alpha=function(t){return typeof t=="number"?Ft({r:(e=this.rgba).r,g:e.g,b:e.b,a:t}):ot(this.rgba.a,3);var e},n.prototype.hue=function(t){var e=Qe(this.rgba);return typeof t=="number"?Ft({h:t,s:e.s,l:e.l,a:e.a}):ot(e.h)},n.prototype.isEqual=function(t){return this.toHex()===Ft(t).toHex()},n}(),Ft=function(n){return n instanceof Li?n:new Li(n)},Yr=[],Bl=function(n){n.forEach(function(t){Yr.indexOf(t)<0&&(t(Li,Di),Yr.push(t))})};function Ol(n,t){var e={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},i={};for(var r in e)i[e[r]]=r;var s={};n.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,h=i[this.toHex()];if(h)return h;if(o!=null&&o.closest){var u=this.toRgb(),c=1/0,f="black";if(!s.length)for(var d in e)s[d]=new n(e[d]).toRgb();for(var p in e){var g=(a=u,l=s[p],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));g<c&&(c=g,f=p)}return f}},t.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":e[a];return l?new n(l).toRgb():null},"name"])}Bl([Ol]);const Be=class qe{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof qe)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._normalize(t),this._value=this._cloneSource(t))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,e){const i=typeof t;if(i!==typeof e)return!1;if(i==="number"||i==="string"||t instanceof Number)return t===e;if(Array.isArray(t)&&Array.isArray(e)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(e))return t.length!==e.length?!1:t.every((s,o)=>s===e[o]);if(t!==null&&e!==null){const s=Object.keys(t),o=Object.keys(e);return s.length!==o.length?!1:s.every(a=>t[a]===e[a])}return t===e}toRgba(){const[t,e,i,r]=this._components;return{r:t,g:e,b:i,a:r}}toRgb(){const[t,e,i]=this._components;return{r:t,g:e,b:i}}toRgbaString(){const[t,e,i]=this.toUint8RgbArray();return`rgba(${t},${e},${i},${this.alpha})`}toUint8RgbArray(t){const[e,i,r]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb,t[0]=Math.round(e*255),t[1]=Math.round(i*255),t[2]=Math.round(r*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t=t||this._arrayRgba;const[e,i,r,s]=this._components;return t[0]=e,t[1]=i,t[2]=r,t[3]=s,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb;const[e,i,r]=this._components;return t[0]=e,t[1]=i,t[2]=r,t}toNumber(){return this._int}toBgrNumber(){const[t,e,i]=this.toUint8RgbArray();return(i<<16)+(e<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[e,i,r,s]=qe._temp.setValue(t)._components;return this._components[0]*=e,this._components[1]*=i,this._components[2]*=r,this._components[3]*=s,this._refreshInt(),this._value=null,this}premultiply(t,e=!0){return e&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,e=!0){if(t===1)return(255<<24)+this._int;if(t===0)return e?0:this._int;let i=this._int>>16&255,r=this._int>>8&255,s=this._int&255;return e&&(i=i*t+.5|0,r=r*t+.5|0,s=s*t+.5|0),(t*255<<24)+(i<<16)+(r<<8)+s}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const e=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-e.length)+e}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let e,i,r,s;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const o=t;e=(o>>16&255)/255,i=(o>>8&255)/255,r=(o&255)/255,s=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[e,i,r,s=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[e,i,r,s=255]=t,e/=255,i/=255,r/=255,s/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const a=qe.HEX_PATTERN.exec(t);a&&(t=`#${a[2]}`)}const o=Ft(t);o.isValid()&&({r:e,g:i,b:r,a:s}=o.rgba,e/=255,i/=255,r/=255)}if(e!==void 0)this._components[0]=e,this._components[1]=i,this._components[2]=r,this._components[3]=s,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,e,i]=this._components;this._int=(t*255<<16)+(e*255<<8)+(i*255|0)}_clamp(t,e=0,i=1){return typeof t=="number"?Math.min(Math.max(t,e),i):(t.forEach((r,s)=>{t[s]=Math.min(Math.max(r,e),i)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof qe||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};Be.shared=new Be;Be._temp=new Be;Be.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let Y=Be;const El={cullArea:null,cullable:!1,cullableChildren:!0};function kl(n,t,e){const i=n.length;let r;if(t>=i||e===0)return;e=t+e>i?i-t:e;const s=i-e;for(r=t;r<s;++r)n[r]=n[r+e];n.length=s}const Ul={allowChildren:!0,removeChildren(n=0,t){const e=t??this.children.length,i=e-n,r=[];if(i>0&&i<=e){for(let o=e-1;o>=n;o--){const a=this.children[o];a&&(r.push(a),a.parent=null)}kl(this.children,n,e);const s=this.renderGroup||this.parentRenderGroup;s&&s.removeChildren(r);for(let o=0;o<r.length;++o)this.emit("childRemoved",r[o],this,o),r[o].emit("removed",this);return r}else if(i===0&&this.children.length===0)return r;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(n){const t=this.getChildAt(n);return this.removeChild(t)},getChildAt(n){if(n<0||n>=this.children.length)throw new Error(`getChildAt: Index (${n}) does not exist.`);return this.children[n]},setChildIndex(n,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(n),this.addChildAt(n,t)},getChildIndex(n){const t=this.children.indexOf(n);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(n,t){this.allowChildren||O(Q,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:e}=this;if(t<0||t>e.length)throw new Error(`${n}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);if(n.parent){const r=n.parent.children.indexOf(n);if(n.parent===this&&r===t)return n;r!==-1&&n.parent.children.splice(r,1)}t===e.length?e.push(n):e.splice(t,0,n),n.parent=this,n.didChange=!0,n.didViewUpdate=!1,n._updateFlags=15;const i=this.renderGroup||this.parentRenderGroup;return i&&i.addChild(n),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",n,this,t),n.emit("added",this),n},swapChildren(n,t){if(n===t)return;const e=this.getChildIndex(n),i=this.getChildIndex(t);this.children[e]=t,this.children[i]=n},removeFromParent(){var n;(n=this.parent)==null||n.removeChild(this)}};class jr{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class mr{constructor(t,e){this._pool=[],this._count=0,this._index=0,this._classType=t,e&&this.prepopulate(e)}prepopulate(t){for(let e=0;e<t;e++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){var i;let e;return this._index>0?e=this._pool[--this._index]:e=new this._classType,(i=e.init)==null||i.call(e,t),e}return(t){var e;(e=t.reset)==null||e.call(t),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}}class Rl{constructor(){this._poolsByClass=new Map}prepopulate(t,e){this.getPool(t).prepopulate(e)}get(t,e){return this.getPool(t).get(e)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new mr(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(e=>{const i=t[e._classType.name]?e._classType.name+e._classType.ID:e._classType.name;t[i]={free:e.totalFree,used:e.totalUsed,size:e.totalSize}}),t}}const Lt=new Rl;class Dl{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let e=0;e<this._tests.length;e++){const i=this._tests[e];if(i.test(t))return Lt.get(i.maskClass,t)}return t}returnMaskEffect(t){Lt.return(t)}}const Gi=new Dl;_t.handleByList(D.MaskEffect,Gi._effectClasses);const Ll={_maskEffect:null,_filterEffect:null,effects:[],addEffect(n){if(this.effects.indexOf(n)!==-1)return;this.effects.push(n),this.effects.sort((i,r)=>i.priority-r.priority);const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0),this._updateIsSimple()},removeEffect(n){const t=this.effects.indexOf(n);t!==-1&&(this.effects.splice(t,1),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateIsSimple())},set mask(n){const t=this._maskEffect;(t==null?void 0:t.mask)!==n&&(t&&(this.removeEffect(t),Gi.returnMaskEffect(t),this._maskEffect=null),n!=null&&(this._maskEffect=Gi.getMaskEffect(n),this.addEffect(this._maskEffect)))},get mask(){var n;return(n=this._maskEffect)==null?void 0:n.mask},set filters(n){var s;!Array.isArray(n)&&n&&(n=[n]);const t=this._filterEffect||(this._filterEffect=new jr);n=n;const e=(n==null?void 0:n.length)>0,i=((s=t.filters)==null?void 0:s.length)>0,r=e!==i;n=Array.isArray(n)?n.slice(0):n,t.filters=Object.freeze(n),r&&(e?this.addEffect(t):(this.removeEffect(t),t.filters=n??null))},get filters(){var n;return(n=this._filterEffect)==null?void 0:n.filters},set filterArea(n){this._filterEffect||(this._filterEffect=new jr),this._filterEffect.filterArea=n},get filterArea(){var n;return(n=this._filterEffect)==null?void 0:n.filterArea}},Gl={label:null,get name(){return O(Q,"Container.name property has been removed, use Container.label instead"),this.label},set name(n){O(Q,"Container.name property has been removed, use Container.label instead"),this.label=n},getChildByName(n,t=!1){return this.getChildByLabel(n,t)},getChildByLabel(n,t=!1){const e=this.children;for(let i=0;i<e.length;i++){const r=e[i];if(r.label===n||n instanceof RegExp&&n.test(r.label))return r}if(t)for(let i=0;i<e.length;i++){const s=e[i].getChildByLabel(n,!0);if(s)return s}return null},getChildrenByLabel(n,t=!1,e=[]){const i=this.children;for(let r=0;r<i.length;r++){const s=i[r];(s.label===n||n instanceof RegExp&&n.test(s.label))&&e.push(s)}if(t)for(let r=0;r<i.length;r++)i[r].getChildrenByLabel(n,!0,e);return e}},qr=new j;class Bt{constructor(t=1/0,e=1/0,i=-1/0,r=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=qr,this.minX=t,this.minY=e,this.maxX=i,this.maxY=r}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new it);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=qr,this}set(t,e,i,r){this.minX=t,this.minY=e,this.maxX=i,this.maxY=r}addFrame(t,e,i,r,s){s||(s=this.matrix);const o=s.a,a=s.b,l=s.c,h=s.d,u=s.tx,c=s.ty;let f=this.minX,d=this.minY,p=this.maxX,g=this.maxY,m=o*t+l*e+u,x=a*t+h*e+c;m<f&&(f=m),x<d&&(d=x),m>p&&(p=m),x>g&&(g=x),m=o*i+l*e+u,x=a*i+h*e+c,m<f&&(f=m),x<d&&(d=x),m>p&&(p=m),x>g&&(g=x),m=o*t+l*r+u,x=a*t+h*r+c,m<f&&(f=m),x<d&&(d=x),m>p&&(p=m),x>g&&(g=x),m=o*i+l*r+u,x=a*i+h*r+c,m<f&&(f=m),x<d&&(d=x),m>p&&(p=m),x>g&&(g=x),this.minX=f,this.minY=d,this.maxX=p,this.maxY=g}addRect(t,e){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,e)}addBounds(t,e){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,e)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const e=this.minX,i=this.minY,r=this.maxX,s=this.maxY,{a:o,b:a,c:l,d:h,tx:u,ty:c}=t;let f=o*e+l*i+u,d=a*e+h*i+c;this.minX=f,this.minY=d,this.maxX=f,this.maxY=d,f=o*r+l*i+u,d=a*r+h*i+c,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*e+l*s+u,d=a*e+h*s+c,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*r+l*s+u,d=a*r+h*s+c,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,e,i,r){return this.minX<t&&(this.minX=t),this.maxX>e&&(this.maxX=e),this.minY<i&&(this.minY=i),this.maxY>r&&(this.maxY=r),this}pad(t,e=t){return this.minX-=t,this.maxX+=t,this.minY-=e,this.maxY+=e,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Bt(this.minX,this.minY,this.maxX,this.maxY)}scale(t,e=t){return this.minX*=t,this.minY*=e,this.maxX*=t,this.maxY*=e,this}get x(){return this.minX}set x(t){const e=this.maxX-this.minX;this.minX=t,this.maxX=t+e}get y(){return this.minY}set y(t){const e=this.maxY-this.minY;this.minY=t,this.maxY=t+e}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,e,i,r){let s=this.minX,o=this.minY,a=this.maxX,l=this.maxY;r||(r=this.matrix);const h=r.a,u=r.b,c=r.c,f=r.d,d=r.tx,p=r.ty;for(let g=e;g<i;g+=2){const m=t[g],x=t[g+1],v=h*m+c*x+d,y=u*m+f*x+p;s=v<s?v:s,o=y<o?y:o,a=v>a?v:a,l=y>l?y:l}this.minX=s,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(t,e){return this.minX<=t&&this.minY<=e&&this.maxX>=t&&this.maxY>=e}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}const $t=new mr(j),Oe=new mr(Bt);function Qs(n,t,e){e.clear();let i,r;return n.parent?t?i=n.parent.worldTransform:(r=$t.get().identity(),i=Ln(n,r)):i=j.IDENTITY,Js(n,e,i,t),r&&$t.return(r),e.isValid||e.set(0,0,0,0),e}function Js(n,t,e,i){var a,l;if(!n.visible||!n.measurable)return;let r;i?r=n.worldTransform:(n.updateLocalTransform(),r=$t.get(),r.appendFrom(n.localTransform,e));const s=t,o=!!n.effects.length;if(o&&(t=Oe.get().clear()),n.boundsArea)t.addRect(n.boundsArea,r);else{n.addBounds&&(t.matrix=r,n.addBounds(t));for(let h=0;h<n.children.length;h++)Js(n.children[h],t,r,i)}if(o){for(let h=0;h<n.effects.length;h++)(l=(a=n.effects[h]).addBounds)==null||l.call(a,t);s.addBounds(t,j.IDENTITY),Oe.return(t)}i||$t.return(r)}function Ln(n,t){const e=n.parent;return e&&(Ln(e,t),e.updateLocalTransform(),t.append(e.localTransform)),t}let oi=0;const Kr=500;function ut(...n){oi!==Kr&&(oi++,oi===Kr?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...n))}function to(n,t,e){return t.clear(),e||(e=j.IDENTITY),eo(n,t,e,n,!0),t.isValid||t.set(0,0,0,0),t}function eo(n,t,e,i,r){var l,h;let s;if(r)s=$t.get(),s=e.copyTo(s);else{if(!n.visible||!n.measurable)return;n.updateLocalTransform();const u=n.localTransform;s=$t.get(),s.appendFrom(u,e)}const o=t,a=!!n.effects.length;if(a&&(t=Oe.get().clear()),n.boundsArea)t.addRect(n.boundsArea,s);else{n.renderPipeId&&(t.matrix=s,n.addBounds(t));const u=n.children;for(let c=0;c<u.length;c++)eo(u[c],t,s,i,!1)}if(a){for(let u=0;u<n.effects.length;u++)(h=(l=n.effects[u]).addLocalBounds)==null||h.call(l,t,i);o.addBounds(t,j.IDENTITY),Oe.return(t)}$t.return(s)}function no(n,t){const e=n.children;for(let i=0;i<e.length;i++){const r=e[i],s=(r.uid&255)<<24|r._didChangeId&16777215;t.data[t.index]!==s&&(t.data[t.index]=s,t.didChange=!0),t.index++,r.children.length&&no(r,t)}return t.didChange}const Nl=new j,$l={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(n,t){const e=Math.sign(this.scale.x)||1;t!==0?this.scale.x=n/t*e:this.scale.x=e},_setHeight(n,t){const e=Math.sign(this.scale.y)||1;t!==0?this.scale.y=n/t*e:this.scale.y=e},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Bt});const n=this._localBoundsCacheData;return n.index=1,n.didChange=!1,n.data[0]!==this._didChangeId>>12&&(n.didChange=!0,n.data[0]=this._didChangeId>>12),no(this,n),n.didChange&&to(this,n.localBounds,Nl),n.localBounds},getBounds(n,t){return Qs(this,n,t||new Bt)}},Wl={_onRender:null,set onRender(n){const t=this.renderGroup||this.parentRenderGroup;if(!n){this._onRender&&(t==null||t.removeOnRender(this)),this._onRender=null;return}this._onRender||t==null||t.addOnRender(this),this._onRender=n},get onRender(){return this._onRender}},Vl={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(n){this._zIndex!==n&&(this._zIndex=n,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(Hl))}};function Hl(n,t){return n._zIndex-t._zIndex}const Xl={getGlobalPosition(n=new lt,t=!1){return this.parent?this.parent.toGlobal(this._position,n,t):(n.x=this._position.x,n.y=this._position.y),n},toGlobal(n,t,e=!1){if(!e){this.updateLocalTransform();const i=Ln(this,new j);return i.append(this.localTransform),i.apply(n,t)}return this.worldTransform.apply(n,t)},toLocal(n,t,e,i){if(t&&(n=t.toGlobal(n,e,i)),!i){this.updateLocalTransform();const r=Ln(this,new j);return r.append(this.localTransform),r.applyInverse(n,e)}return this.worldTransform.applyInverse(n,e)}};class io{constructor(){this.uid=rt("instructionSet"),this.instructions=[],this.instructionSize=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}class Yl{constructor(t){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new j,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new io,this._onRenderContainers=[],this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const e=t.children;for(let i=0;i<e.length;i++)this.addChild(e[i])}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const e=this.renderGroupChildren.indexOf(t);e>-1&&this.renderGroupChildren.splice(e,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const e=t.children;for(let i=0;i<e.length;i++)this.addChild(e[i])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const e=t.children;for(let i=0;i<e.length;i++)this.removeChild(e[i])}removeChildren(t){for(let e=0;e<t.length;e++)this.removeChild(t[e])}onChildUpdate(t){let e=this.childrenToUpdate[t.relativeRenderGroupDepth];e||(e=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),e.list[e.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(t.didViewUpdate=!1,this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t))}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}getChildren(t=[]){const e=this.root.children;for(let i=0;i<e.length;i++)this._getChildren(e[i],t);return t}_getChildren(t,e=[]){if(e.push(t),t.renderGroup)return e;const i=t.children;for(let r=0;r<i.length;r++)this._getChildren(i[r],e);return e}}function jl(n,t,e={}){for(const i in t)!e[i]&&t[i]!==void 0&&(n[i]=t[i])}const ai=new ct(null),li=new ct(null),ui=new ct(null,1,1),Zr=1,ql=2,hi=4;class N extends Et{constructor(t={}){var e,i;super(),this.uid=rt("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new j,this.relativeGroupTransform=new j,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new ct(this,0,0),this._scale=ui,this._pivot=li,this._skew=ai,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didChangeId=0,this._didLocalTransformChangeId=-1,jl(this,t,{children:!0,parent:!0,effects:!0}),(e=t.children)==null||e.forEach(r=>this.addChild(r)),this.effects=[],(i=t.parent)==null||i.addChild(this)}static mixin(t){Object.defineProperties(N.prototype,Object.getOwnPropertyDescriptors(t))}addChild(...t){if(this.allowChildren||O(Q,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let r=0;r<t.length;r++)this.addChild(t[r]);return t[0]}const e=t[0];if(e.parent===this)return this.children.splice(this.children.indexOf(e),1),this.children.push(e),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),e;e.parent&&e.parent.removeChild(e),this.children.push(e),this.sortableChildren&&(this.sortDirty=!0),e.parent=this,e.didChange=!0,e.didViewUpdate=!1,e._updateFlags=15;const i=this.renderGroup||this.parentRenderGroup;return i&&i.addChild(e),this.emit("childAdded",e,this,this.children.length-1),e.emit("added",this),this._didChangeId+=4096,e._zIndex!==0&&e.depthOfChildModified(),e}removeChild(...t){if(t.length>1){for(let r=0;r<t.length;r++)this.removeChild(t[r]);return t[0]}const e=t[0],i=this.children.indexOf(e);return i>-1&&(this._didChangeId+=4096,this.children.splice(i,1),this.renderGroup?this.renderGroup.removeChild(e):this.parentRenderGroup&&this.parentRenderGroup.removeChild(e),e.parent=null,this.emit("childRemoved",e,this,i),e.emit("removed",this)),e}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didChangeId++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){if(this.renderGroup&&t===!1)throw new Error("[Pixi] cannot undo a render group just yet");t&&this.enableRenderGroup()}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t&&t.removeChild(this),this.renderGroup=new Yl(this),t&&t.addChild(this),this._updateIsSimple(),this.groupTransform=j.IDENTITY}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new j),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*xl}set angle(t){this.rotation=t*ze}get pivot(){return this._pivot===li&&(this._pivot=new ct(this,0,0)),this._pivot}set pivot(t){this._pivot===li&&(this._pivot=new ct(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===ai&&(this._skew=new ct(this,0,0)),this._skew}set skew(t){this._skew===ai&&(this._skew=new ct(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===ui&&(this._scale=new ct(this,1,1)),this._scale}set scale(t){this._scale===ui&&(this._scale=new ct(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const e=this.getLocalBounds().width;this._setWidth(t,e)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const e=this.getLocalBounds().height;this._setHeight(t,e)}getSize(t){t||(t={});const e=this.getLocalBounds();return t.width=Math.abs(this.scale.x*e.width),t.height=Math.abs(this.scale.y*e.height),t}setSize(t,e){const i=this.getLocalBounds();let r,s;typeof t!="object"?(r=t,s=e??t):(r=t.width,s=t.height??t.width),r!==void 0&&this._setWidth(r,i.width),s!==void 0&&this._setHeight(s,i.height)}_updateSkew(){const t=this._rotation,e=this._skew;this._cx=Math.cos(t+e._y),this._sx=Math.sin(t+e._y),this._cy=-Math.sin(t-e._x),this._sy=Math.cos(t-e._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){if((this._didLocalTransformChangeId&15)===this._didChangeId)return;this._didLocalTransformChangeId=this._didChangeId;const t=this.localTransform,e=this._scale,i=this._pivot,r=this._position,s=e._x,o=e._y,a=i._x,l=i._y;t.a=this._cx*s,t.b=this._sx*s,t.c=this._cy*o,t.d=this._sy*o,t.tx=r._x-(a*t.a+l*t.c),t.ty=r._y-(a*t.b+l*t.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=Zr,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const i=Y.shared.setValue(t??16777215).toBgrNumber();i!==this.localColor&&(this.localColor=i,this._updateFlags|=Zr,this._onUpdate())}get tint(){const t=this.localColor;return((t&255)<<16)+(t&65280)+(t>>16&255)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=ql,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const e=t?1:0;(this.localDisplayStatus&2)>>1!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=hi,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const e=t?1:0;(this.localDisplayStatus&4)>>2!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=hi,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const e=t?1:0;(this.localDisplayStatus&1)!==e&&(this._updateFlags|=hi,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0;const e=this.removeChildren(0,this.children.length);if(this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.children)for(let r=0;r<e.length;++r)e[r].destroy(t)}}N.mixin(Ul);N.mixin(Xl);N.mixin(Wl);N.mixin($l);N.mixin(Ll);N.mixin(Gl);N.mixin(Vl);N.mixin(El);class Pt extends N{constructor(t=k.EMPTY){t instanceof k&&(t={texture:t});const{texture:e=k.EMPTY,anchor:i,roundPixels:r,width:s,height:o,...a}=t;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._didSpriteUpdate=!1,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this._sourceBoundsDirty=!0,this._roundPixels=0,this._anchor=new ct({_onUpdate:()=>{this.onViewUpdate()}}),i?this.anchor=i:e.defaultAnchor&&(this.anchor=e.defaultAnchor),this.texture=e,this.allowChildren=!1,this.roundPixels=r??!1,s&&(this.width=s),o&&(this.height=o)}static from(t,e=!1){return t instanceof k?new Pt(t):new Pt(k.from(t,e))}set texture(t){t||(t=k.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(t){const e=this.sourceBounds;return t.x>=e.maxX&&t.x<=e.minX&&t.y>=e.maxY&&t.y<=e.minY}addBounds(t){const e=this._texture.trim?this.sourceBounds:this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}onViewUpdate(){if(this._didChangeId+=4096,this._didSpriteUpdate=!0,this._sourceBoundsDirty=this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}_updateBounds(){wl(this._bounds,this._anchor,this._texture,0)}_updateSourceBounds(){const t=this._anchor,e=this._texture,i=this._sourceBounds,{width:r,height:s}=e.orig;i.maxX=-t._x*r,i.minX=i.maxX+r,i.maxY=-t._y*s,i.minY=i.maxY+s}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const i=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(i)}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width)}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,e){let i,r;typeof t!="object"?(i=t,r=e??t):(i=t.width,r=t.height??t.width),i!==void 0&&this._setWidth(i,this._texture.orig.width),r!==void 0&&this._setHeight(r,this._texture.orig.height)}}const Kl=new Bt;function ro(n,t,e){const i=Kl;n.measurable=!0,Qs(n,e,i),t.addBoundsMask(i),n.measurable=!1}function so(n,t,e){const i=Oe.get();n.measurable=!0;const r=$t.get().identity(),s=oo(n,e,r);to(n,i,s),n.measurable=!1,t.addBoundsMask(i),$t.return(r),Oe.return(i)}function oo(n,t,e){return n?(n!==t&&(oo(n.parent,t,e),n.updateLocalTransform(),e.append(n.localTransform)),e):(ut("Mask bounds, renderable is not inside the root container"),e)}class ao{constructor(t){this.priority=0,this.pipe="alphaMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof Pt),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,e){ro(this.mask,t,e)}addLocalBounds(t,e){so(this.mask,t,e)}containsPoint(t,e){const i=this.mask;return e(i,t)}destroy(){this.reset()}static test(t){return t instanceof Pt}}ao.extension=D.MaskEffect;class lo{constructor(t){this.priority=0,this.pipe="colorMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}lo.extension=D.MaskEffect;class uo{constructor(t){this.priority=0,this.pipe="stencilMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,e){ro(this.mask,t,e)}addLocalBounds(t,e){so(this.mask,t,e)}containsPoint(t,e){const i=this.mask;return e(i,t)}destroy(){this.reset()}static test(t){return t instanceof N}}uo.extension=D.MaskEffect;const Zl={createCanvas:(n,t)=>{const e=document.createElement("canvas");return e.width=n,e.height=t,e},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(n,t)=>fetch(n,t),parseXML:n=>new DOMParser().parseFromString(n,"text/xml")};let Qr=Zl;const at={get(){return Qr},set(n){Qr=n}};class ho extends kt{constructor(t){t.resource||(t.resource=at.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity;const e=t.resource;(this.pixelWidth!==e.width||this.pixelWidth!==e.height)&&this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,e=this.height,i=this._resolution){const r=super.resize(t,e,i);return r&&this.resizeCanvas(),r}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}}ho.extension=D.TextureSource;class ke extends kt{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const e=at.get().createCanvas(t.resource.width,t.resource.height);e.getContext("2d").drawImage(t.resource,0,0),t.resource=e,ut("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap}}ke.extension=D.TextureSource;var Gn=(n=>(n[n.INTERACTION=50]="INTERACTION",n[n.HIGH=25]="HIGH",n[n.NORMAL=0]="NORMAL",n[n.LOW=-25]="LOW",n[n.UTILITY=-50]="UTILITY",n))(Gn||{});class ci{constructor(t,e=null,i=0,r=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=e,this.priority=i,this._once=r}match(t,e=null){return this._fn===t&&this._context===e}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const e=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),e}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const e=this.next;return this.next=t?null:e,this.previous=null,e}}const co=class gt{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new ci(null,null,1/0),this.deltaMS=1/gt.targetFPMS,this.elapsedMS=1/gt.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,e,i=Gn.NORMAL){return this._addListener(new ci(t,e,i))}addOnce(t,e,i=Gn.NORMAL){return this._addListener(new ci(t,e,i,!0))}_addListener(t){let e=this._head.next,i=this._head;if(!e)t.connect(i);else{for(;e;){if(t.priority>e.priority){t.connect(i);break}i=e,e=e.next}t.previous||t.connect(i)}return this._startIfPossible(),this}remove(t,e){let i=this._head.next;for(;i;)i.match(t,e)?i=i.destroy():i=i.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,e=this._head;for(;e=e.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let e;if(t>this.lastTime){if(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){const s=t-this._lastFrame|0;if(s<this._minElapsedMS)return;this._lastFrame=t-s%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*gt.targetFPMS;const i=this._head;let r=i.next;for(;r;)r=r.emit(this);i.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const e=Math.min(this.maxFPS,t),i=Math.min(Math.max(0,e)/1e3,gt.targetFPMS);this._maxElapsedMS=1/i}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3)}}static get shared(){if(!gt._shared){const t=gt._shared=new gt;t.autoStart=!0,t._protected=!0}return gt._shared}static get system(){if(!gt._system){const t=gt._system=new gt;t.autoStart=!0,t._protected=!0}return gt._system}};co.targetFPMS=.06;let Gt=co,fi;async function fo(){return fi??(fi=(async()=>{var o;const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const e=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!e)return"premultiply-alpha-on-upload";const i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i);const r=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,r),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e);const s=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,s),t.deleteFramebuffer(r),t.deleteTexture(i),(o=t.getExtension("WEBGL_lose_context"))==null||o.loseContext(),s[0]<=s[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),fi}const Wn=class po extends kt{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...po.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=Gt.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,e=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(e.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await fo(),this._load=new Promise((i,r)=>{this.isValid?i(this):(this._resolve=i,this._reject=r,e.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Gt.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Gt.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Gt.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||globalThis.VideoFrame&&t instanceof VideoFrame}};Wn.extension=D.TextureSource;Wn.defaultOptions={...kt.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};Wn.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let Tn=Wn;const wt=(n,t,e=!1)=>(Array.isArray(n)||(n=[n]),t?n.map(i=>typeof i=="string"||e?t(i):i):n);class Ql{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const e=this._cache.get(t);return e||ut(`[Assets] Asset id ${t} was not found in the Cache`),e}set(t,e){const i=wt(t);let r;for(let l=0;l<this.parsers.length;l++){const h=this.parsers[l];if(h.test(e)){r=h.getCacheableAssets(i,e);break}}const s=new Map(Object.entries(r||{}));r||i.forEach(l=>{s.set(l,e)});const o=[...s.keys()],a={cacheKeys:o,keys:i};i.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const h=r?r[l]:e;this._cache.has(l)&&this._cache.get(l)!==h&&ut("[Cache] already has key:",l),this._cache.set(l,s.get(l))})}remove(t){if(!this._cacheMap.has(t)){ut(`[Assets] Asset id ${t} was not found in the Cache`);return}const e=this._cacheMap.get(t);e.cacheKeys.forEach(r=>{this._cache.delete(r)}),e.keys.forEach(r=>{this._cacheMap.delete(r)})}get parsers(){return this._parsers}}const ft=new Ql,Ni=[];_t.handleByList(D.TextureSource,Ni);function Jl(n={}){const t=n&&n.resource,e=t?n.resource:n,i=t?n:{resource:n};for(let r=0;r<Ni.length;r++){const s=Ni[r];if(s.test(e))return new s(i)}throw new Error(`Could not find a source type for resource: ${i.resource}`)}function tu(n={},t=!1){const e=n&&n.resource,i=e?n.resource:n,r=e?n:{resource:n};if(!t&&ft.has(i))return ft.get(i);const s=new k({source:Jl(r)});return s.on("destroy",()=>{ft.has(i)&&ft.remove(i)}),t||ft.set(i,s),s}function eu(n,t=!1){return typeof n=="string"?ft.get(n):n instanceof kt?new k({source:n}):tu(n,t)}k.from=eu;_t.add(ao,lo,uo,Tn,ke,ho,pr);var me=(n=>(n[n.Low=0]="Low",n[n.Normal=1]="Normal",n[n.High=2]="High",n))(me||{});function St(n){if(typeof n!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(n)}`)}function We(n){return n.split("?")[0].split("#")[0]}function nu(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function iu(n,t,e){return n.replace(new RegExp(nu(t),"g"),e)}function ru(n,t){let e="",i=0,r=-1,s=0,o=-1;for(let a=0;a<=n.length;++a){if(a<n.length)o=n.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(r===a-1||s===1))if(r!==a-1&&s===2){if(e.length<2||i!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){const l=e.lastIndexOf("/");if(l!==e.length-1){l===-1?(e="",i=0):(e=e.slice(0,l),i=e.length-1-e.lastIndexOf("/")),r=a,s=0;continue}}else if(e.length===2||e.length===1){e="",i=0,r=a,s=0;continue}}}else e.length>0?e+=`/${n.slice(r+1,a)}`:e=n.slice(r+1,a),i=a-r-1;r=a,s=0}else o===46&&s!==-1?++s:s=-1}return e}const Ot={toPosix(n){return iu(n,"\\","/")},isUrl(n){return/^https?:/.test(this.toPosix(n))},isDataUrl(n){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(n)},isBlobUrl(n){return n.startsWith("blob:")},hasProtocol(n){return/^[^/:]+:/.test(this.toPosix(n))},getProtocol(n){St(n),n=this.toPosix(n);const t=/^file:\/\/\//.exec(n);if(t)return t[0];const e=/^[^/:]+:\/{0,2}/.exec(n);return e?e[0]:""},toAbsolute(n,t,e){if(St(n),this.isDataUrl(n)||this.isBlobUrl(n))return n;const i=We(this.toPosix(t??at.get().getBaseUrl())),r=We(this.toPosix(e??this.rootname(i)));return n=this.toPosix(n),n.startsWith("/")?Ot.join(r,n.slice(1)):this.isAbsolute(n)?n:this.join(i,n)},normalize(n){if(St(n),n.length===0)return".";if(this.isDataUrl(n)||this.isBlobUrl(n))return n;n=this.toPosix(n);let t="";const e=n.startsWith("/");this.hasProtocol(n)&&(t=this.rootname(n),n=n.slice(t.length));const i=n.endsWith("/");return n=ru(n),n.length>0&&i&&(n+="/"),e?`/${n}`:t+n},isAbsolute(n){return St(n),n=this.toPosix(n),this.hasProtocol(n)?!0:n.startsWith("/")},join(...n){if(n.length===0)return".";let t;for(let e=0;e<n.length;++e){const i=n[e];if(St(i),i.length>0)if(t===void 0)t=i;else{const r=n[e-1]??"";this.joinExtensions.includes(this.extname(r).toLowerCase())?t+=`/../${i}`:t+=`/${i}`}}return t===void 0?".":this.normalize(t)},dirname(n){if(St(n),n.length===0)return".";n=this.toPosix(n);let t=n.charCodeAt(0);const e=t===47;let i=-1,r=!0;const s=this.getProtocol(n),o=n;n=n.slice(s.length);for(let a=n.length-1;a>=1;--a)if(t=n.charCodeAt(a),t===47){if(!r){i=a;break}}else r=!1;return i===-1?e?"/":this.isUrl(o)?s+n:s:e&&i===1?"//":s+n.slice(0,i)},rootname(n){St(n),n=this.toPosix(n);let t="";if(n.startsWith("/")?t="/":t=this.getProtocol(n),this.isUrl(n)){const e=n.indexOf("/",t.length);e!==-1?t=n.slice(0,e):t=n,t.endsWith("/")||(t+="/")}return t},basename(n,t){St(n),t&&St(t),n=We(this.toPosix(n));let e=0,i=-1,r=!0,s;if(t!==void 0&&t.length>0&&t.length<=n.length){if(t.length===n.length&&t===n)return"";let o=t.length-1,a=-1;for(s=n.length-1;s>=0;--s){const l=n.charCodeAt(s);if(l===47){if(!r){e=s+1;break}}else a===-1&&(r=!1,a=s+1),o>=0&&(l===t.charCodeAt(o)?--o===-1&&(i=s):(o=-1,i=a))}return e===i?i=a:i===-1&&(i=n.length),n.slice(e,i)}for(s=n.length-1;s>=0;--s)if(n.charCodeAt(s)===47){if(!r){e=s+1;break}}else i===-1&&(r=!1,i=s+1);return i===-1?"":n.slice(e,i)},extname(n){St(n),n=We(this.toPosix(n));let t=-1,e=0,i=-1,r=!0,s=0;for(let o=n.length-1;o>=0;--o){const a=n.charCodeAt(o);if(a===47){if(!r){e=o+1;break}continue}i===-1&&(r=!1,i=o+1),a===46?t===-1?t=o:s!==1&&(s=1):t!==-1&&(s=-1)}return t===-1||i===-1||s===0||s===1&&t===i-1&&t===e+1?"":n.slice(t,i)},parse(n){St(n);const t={root:"",dir:"",base:"",ext:"",name:""};if(n.length===0)return t;n=We(this.toPosix(n));let e=n.charCodeAt(0);const i=this.isAbsolute(n);let r;t.root=this.rootname(n),i||this.hasProtocol(n)?r=1:r=0;let s=-1,o=0,a=-1,l=!0,h=n.length-1,u=0;for(;h>=r;--h){if(e=n.charCodeAt(h),e===47){if(!l){o=h+1;break}continue}a===-1&&(l=!1,a=h+1),e===46?s===-1?s=h:u!==1&&(u=1):s!==-1&&(u=-1)}return s===-1||a===-1||u===0||u===1&&s===a-1&&s===o+1?a!==-1&&(o===0&&i?t.base=t.name=n.slice(1,a):t.base=t.name=n.slice(o,a)):(o===0&&i?(t.name=n.slice(1,s),t.base=n.slice(1,a)):(t.name=n.slice(o,s),t.base=n.slice(o,a)),t.ext=n.slice(s,a)),t.dir=this.dirname(n),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function mo(n,t,e,i,r){const s=t[e];for(let o=0;o<s.length;o++){const a=s[o];e<t.length-1?mo(n.replace(i[e],a),t,e+1,i,r):r.push(n.replace(i[e],a))}}function su(n){const t=/\{(.*?)\}/g,e=n.match(t),i=[];if(e){const r=[];e.forEach(s=>{const o=s.substring(1,s.length-1).split(",");r.push(o)}),mo(n,r,0,e,i)}else i.push(n);return i}const Nn=n=>!Array.isArray(n);class Ue{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,e)=>`${t}${this._bundleIdConnector}${e}`,extractAssetIdFromBundle:(t,e)=>e.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(e=>{this._preferredOrder.push(e),e.priority||(e.priority=Object.keys(e.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const e=t;this._defaultSearchParams=Object.keys(e).map(i=>`${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`).join("&")}}getAlias(t){const{alias:e,src:i}=t;return wt(e||i,s=>typeof s=="string"?s:Array.isArray(s)?s.map(o=>(o==null?void 0:o.src)??o):s!=null&&s.src?s.src:s,!0)}addManifest(t){this._manifest&&ut("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(e=>{this.addBundle(e.name,e.assets)})}addBundle(t,e){const i=[];let r=e;Array.isArray(e)||(r=Object.entries(e).map(([s,o])=>typeof o=="string"||Array.isArray(o)?{alias:s,src:o}:{alias:s,...o})),r.forEach(s=>{const o=s.src,a=s.alias;let l;if(typeof a=="string"){const h=this._createBundleAssetId(t,a);i.push(h),l=[a,h]}else{const h=a.map(u=>this._createBundleAssetId(t,u));i.push(...h),l=[...a,...h]}this.add({...s,alias:l,src:o})}),this._bundles[t]=i}add(t){const e=[];Array.isArray(t)?e.push(...t):e.push(t);let i;i=s=>{this.hasKey(s)&&ut(`[Resolver] already has key: ${s} overwriting`)},wt(e).forEach(s=>{const{src:o}=s;let{data:a,format:l,loadParser:h}=s;const u=wt(o).map(d=>typeof d=="string"?su(d):Array.isArray(d)?d:[d]),c=this.getAlias(s);Array.isArray(c)?c.forEach(i):i(c);const f=[];u.forEach(d=>{d.forEach(p=>{let g={};if(typeof p!="object"){g.src=p;for(let m=0;m<this._parsers.length;m++){const x=this._parsers[m];if(x.test(p)){g=x.parse(p);break}}}else a=p.data??a,l=p.format??l,h=p.loadParser??h,g={...g,...p};if(!c)throw new Error(`[Resolver] alias is undefined for this asset: ${g.src}`);g=this._buildResolvedAsset(g,{aliases:c,data:a,format:l,loadParser:h}),f.push(g)})}),c.forEach(d=>{this._assetMap[d]=f})})}resolveBundle(t){const e=Nn(t);t=wt(t);const i={};return t.forEach(r=>{const s=this._bundles[r];if(s){const o=this.resolve(s),a={};for(const l in o){const h=o[l];a[this._extractAssetIdFromBundle(r,l)]=h}i[r]=a}}),e?i[t[0]]:i}resolveUrl(t){const e=this.resolve(t);if(typeof t!="string"){const i={};for(const r in e)i[r]=e[r].src;return i}return e.src}resolve(t){const e=Nn(t);t=wt(t);const i={};return t.forEach(r=>{if(!this._resolverHash[r])if(this._assetMap[r]){let s=this._assetMap[r];const o=this._getPreferredOrder(s);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const h=s.filter(u=>u[a]?u[a]===l:!1);h.length&&(s=h)})}),this._resolverHash[r]=s[0]}else this._resolverHash[r]=this._buildResolvedAsset({alias:[r],src:r},{});i[r]=this._resolverHash[r]}),e?i[t[0]]:i}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let e=0;e<t.length;e++){const i=t[0],r=this._preferredOrder.find(s=>s.params.format.includes(i.format));if(r)return r}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const e=/\?/.test(t)?"&":"?";return`${t}${e}${this._defaultSearchParams}`}_buildResolvedAsset(t,e){const{aliases:i,data:r,loadParser:s,format:o}=e;return(this._basePath||this._rootPath)&&(t.src=Ot.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=i??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...r||{},...t.data},t.loadParser=s??t.loadParser,t.format=o??t.format??ou(t.src),t}}Ue.RETINA_PREFIX=/@([0-9\.]+)x/;function ou(n){return n.split(".").pop().split("?").shift().split("#").shift()}const Jr=(n,t)=>{const e=t.split("?")[1];return e&&(n+=`?${e}`),n},go=class Ke{constructor(t,e){this.linkedSheets=[],this._texture=t instanceof k?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=e;const i=parseFloat(e.meta.scale);i?(this.resolution=i,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=Ke.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let e=t;const i=Ke.BATCH_SIZE;for(;e-t<i&&e<this._frameKeys.length;){const r=this._frameKeys[e],s=this._frames[r],o=s.frame;if(o){let a=null,l=null;const h=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,u=new it(0,0,Math.floor(h.w)/this.resolution,Math.floor(h.h)/this.resolution);s.rotated?a=new it(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new it(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(l=new it(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[r]=new k({source:this.textureSource,frame:a,orig:u,trim:l,rotate:s.rotated?2:0,defaultAnchor:s.anchor,defaultBorders:s.borders,label:r.toString()})}e++}}_processAnimations(){const t=this.data.animations||{};for(const e in t){this.animations[e]=[];for(let i=0;i<t[e].length;i++){const r=t[e][i];this.animations[e].push(this.textures[r])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Ke.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Ke.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){var e;for(const i in this.textures)this.textures[i].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((e=this._texture)==null||e.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};go.BATCH_SIZE=1e3;let ts=go;const au=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function xo(n,t,e){const i={};if(n.forEach(r=>{i[r]=t}),Object.keys(t.textures).forEach(r=>{i[r]=t.textures[r]}),!e){const r=Ot.dirname(n[0]);t.linkedSheets.forEach((s,o)=>{const a=xo([`${r}/${t.data.meta.related_multi_packs[o]}`],s,!0);Object.assign(i,a)})}return i}const lu={extension:D.Asset,cache:{test:n=>n instanceof ts,getCacheableAssets:(n,t)=>xo(n,t,!1)},resolver:{test:n=>{const e=n.split("?")[0].split("."),i=e.pop(),r=e.pop();return i==="json"&&au.includes(r)},parse:n=>{var e;const t=n.split(".");return{resolution:parseFloat(((e=Ue.RETINA_PREFIX.exec(n))==null?void 0:e[1])??"1"),format:t[t.length-2],src:n}}},loader:{name:"spritesheetLoader",extension:{type:D.LoadParser,priority:me.Normal},async testParse(n,t){return Ot.extname(t.src).toLowerCase()===".json"&&!!n.frames},async parse(n,t,e){var h,u;const{texture:i,imageFilename:r}=(t==null?void 0:t.data)??{};let s=Ot.dirname(t.src);s&&s.lastIndexOf("/")!==s.length-1&&(s+="/");let o;if(i instanceof k)o=i;else{const c=Jr(s+(r??n.meta.image),t.src);o=(await e.load([c]))[c]}const a=new ts(o.source,n);await a.parse();const l=(h=n==null?void 0:n.meta)==null?void 0:h.related_multi_packs;if(Array.isArray(l)){const c=[];for(const d of l){if(typeof d!="string")continue;let p=s+d;(u=t.data)!=null&&u.ignoreMultiPack||(p=Jr(p,t.src),c.push(e.load({src:p,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(c);a.linkedSheets=f,f.forEach(d=>{d.linkedSheets=[a].concat(a.linkedSheets.filter(p=>p!==d))})}return a},async unload(n,t,e){await e.unload(n.textureSource._sourceOrigin),n.destroy(!1)}}};_t.add(lu);var di=/iPhone/i,es=/iPod/i,ns=/iPad/i,is=/\biOS-universal(?:.+)Mac\b/i,pi=/\bAndroid(?:.+)Mobile\b/i,rs=/Android/i,xe=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,gn=/Silk/i,Rt=/Windows Phone/i,ss=/\bWindows(?:.+)ARM\b/i,os=/BlackBerry/i,as=/BB10/i,ls=/Opera Mini/i,us=/\b(CriOS|Chrome)(?:.+)Mobile/i,hs=/Mobile(?:.+)Firefox\b/i,cs=function(n){return typeof n<"u"&&n.platform==="MacIntel"&&typeof n.maxTouchPoints=="number"&&n.maxTouchPoints>1&&typeof MSStream>"u"};function uu(n){return function(t){return t.test(n)}}function fs(n){var t={userAgent:"",platform:"",maxTouchPoints:0};!n&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof n=="string"?t.userAgent=n:n&&n.userAgent&&(t={userAgent:n.userAgent,platform:n.platform,maxTouchPoints:n.maxTouchPoints||0});var e=t.userAgent,i=e.split("[FBAN");typeof i[1]<"u"&&(e=i[0]),i=e.split("Twitter"),typeof i[1]<"u"&&(e=i[0]);var r=uu(e),s={apple:{phone:r(di)&&!r(Rt),ipod:r(es),tablet:!r(di)&&(r(ns)||cs(t))&&!r(Rt),universal:r(is),device:(r(di)||r(es)||r(ns)||r(is)||cs(t))&&!r(Rt)},amazon:{phone:r(xe),tablet:!r(xe)&&r(gn),device:r(xe)||r(gn)},android:{phone:!r(Rt)&&r(xe)||!r(Rt)&&r(pi),tablet:!r(Rt)&&!r(xe)&&!r(pi)&&(r(gn)||r(rs)),device:!r(Rt)&&(r(xe)||r(gn)||r(pi)||r(rs))||r(/\bokhttp\b/i)},windows:{phone:r(Rt),tablet:r(ss),device:r(Rt)||r(ss)},other:{blackberry:r(os),blackberry10:r(as),opera:r(ls),firefox:r(hs),chrome:r(us),device:r(os)||r(as)||r(ls)||r(hs)||r(us)},any:!1,phone:!1,tablet:!1};return s.any=s.apple.device||s.android.device||s.windows.device||s.other.device,s.phone=s.apple.phone||s.android.phone||s.windows.phone,s.tablet=s.apple.tablet||s.android.tablet||s.windows.tablet,s}const hu=fs.default??fs,Mn=hu(globalThis.navigator),mi=Object.create(null),ds=Object.create(null);function gr(n,t){let e=ds[n];return e===void 0&&(mi[t]===void 0&&(mi[t]=1),ds[n]=e=mi[t]++),e}let ve;function vo(){return(!ve||ve!=null&&ve.isContextLost())&&(ve=at.get().createCanvas().getContext("webgl",{})),ve}let xn;function cu(){if(!xn){xn="mediump";const n=vo();n&&n.getShaderPrecisionFormat&&(xn=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision?"highp":"mediump")}return xn}function fu(n,t,e){return t?n:e?(n=n.replace("out vec4 finalColor;",""),`
        
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
        `}function du(n,t,e){const i=e?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(n.substring(0,9)!=="precision"){let r=e?t.requestedFragmentPrecision:t.requestedVertexPrecision;return r==="highp"&&i!=="highp"&&(r="mediump"),`precision ${r} float;
${n}`}else if(i!=="highp"&&n.substring(0,15)==="precision highp")return n.replace("precision highp","precision mediump");return n}function pu(n,t){return t?`#version 300 es
${n}`:n}const mu={},gu={};function xu(n,{name:t="pixi-program"},e=!0){t=t.replace(/\s+/g,"-"),t+=e?"-fragment":"-vertex";const i=e?mu:gu;return i[t]?(i[t]++,t+=`-${i[t]}`):i[t]=1,n.indexOf("#define SHADER_NAME")!==-1?n:`${`#define SHADER_NAME ${t}`}
${n}`}function vu(n,t){return t?n.replace("#version 300 es",""):n}const gi={stripVersion:vu,ensurePrecision:du,addProgramDefines:fu,setProgramName:xu,insertVersion:pu},xi=Object.create(null),yo=class $i{constructor(t){t={...$i.defaultOptions,...t};const e=t.fragment.indexOf("#version 300 es")!==-1,i={stripVersion:e,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:cu()},setProgramName:{name:t.name},addProgramDefines:e,insertVersion:e};let r=t.fragment,s=t.vertex;Object.keys(gi).forEach(o=>{const a=i[o];r=gi[o](r,a,!0),s=gi[o](s,a,!1)}),this.fragment=r,this.vertex=s,this._key=gr(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const e=`${t.vertex}:${t.fragment}`;return xi[e]||(xi[e]=new $i(t)),xi[e]}};yo.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let G=yo;const ps={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function yu(n){return ps[n]??ps.float32}const _u={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function bu({source:n,entryPoint:t}){const e={},i=n.indexOf(`fn ${t}`);if(i!==-1){const r=n.indexOf("->",i);if(r!==-1){const s=n.substring(i,r),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(s))!==null;){const l=_u[a[3]]??"float32";e[a[2]]={location:parseInt(a[1],10),format:l,stride:yu(l).stride,offset:0,instance:!1,start:0}}}}return e}function vi(n){var c,f;const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,e=/@group\((\d+)\)/,i=/@binding\((\d+)\)/,r=/var(<[^>]+>)? (\w+)/,s=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,h=(c=n.match(t))==null?void 0:c.map(d=>({group:parseInt(d.match(e)[1],10),binding:parseInt(d.match(i)[1],10),name:d.match(r)[2],isUniform:d.match(r)[1]==="<uniform>",type:d.match(s)[1]}));if(!h)return{groups:[],structs:[]};const u=((f=n.match(o))==null?void 0:f.map(d=>{const p=d.match(l)[1],g=d.match(a).reduce((m,x)=>{const[v,y]=x.split(":");return m[v.trim()]=y.trim(),m},{});return g?{name:p,members:g}:null}).filter(({name:d})=>h.some(p=>p.type===d)))??[];return{groups:h,structs:u}}var Ze=(n=>(n[n.VERTEX=1]="VERTEX",n[n.FRAGMENT=2]="FRAGMENT",n[n.COMPUTE=4]="COMPUTE",n))(Ze||{});function Su({groups:n}){const t=[];for(let e=0;e<n.length;e++){const i=n[e];t[i.group]||(t[i.group]=[]),i.isUniform?t[i.group].push({binding:i.binding,visibility:Ze.VERTEX|Ze.FRAGMENT,buffer:{type:"uniform"}}):i.type==="sampler"?t[i.group].push({binding:i.binding,visibility:Ze.FRAGMENT,sampler:{type:"filtering"}}):i.type==="texture_2d"&&t[i.group].push({binding:i.binding,visibility:Ze.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function Cu({groups:n}){const t=[];for(let e=0;e<n.length;e++){const i=n[e];t[i.group]||(t[i.group]={}),t[i.group][i.name]=i.binding}return t}function wu(n,t){const e=new Set,i=new Set,r=[...n.structs,...t.structs].filter(o=>e.has(o.name)?!1:(e.add(o.name),!0)),s=[...n.groups,...t.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return i.has(a)?!1:(i.add(a),!0)});return{structs:r,groups:s}}const yi=Object.create(null);class L{constructor(t){var a,l;this._layoutKey=0;const{fragment:e,vertex:i,layout:r,gpuLayout:s,name:o}=t;if(this.name=o,this.fragment=e,this.vertex=i,e.source===i.source){const h=vi(e.source);this.structsAndGroups=h}else{const h=vi(i.source),u=vi(e.source);this.structsAndGroups=wu(h,u)}this.layout=r??Cu(this.structsAndGroups),this.gpuLayout=s??Su(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:e}=this,i=t.source+e.source+t.entryPoint+e.entryPoint;this._layoutKey=gr(i,"program")}get attributeData(){return this._attributeData??(this._attributeData=bu(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const e=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return yi[e]||(yi[e]=new L(t)),yi[e]}}const _o=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],Pu=_o.reduce((n,t)=>(n[t]=!0,n),{});function Au(n,t){switch(n){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const bo=class So{constructor(t,e){this._touched=0,this.uid=rt("uniform"),this._resourceType="uniformGroup",this._resourceId=rt("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,e={...So.defaultOptions,...e},this.uniformStructures=t;const i={};for(const r in t){const s=t[r];if(s.name=r,s.size=s.size??1,!Pu[s.type])throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${_o.join(", ")}`);s.value??(s.value=Au(s.type,s.size)),i[r]=s.value}this.uniforms=i,this._dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this._signature=gr(Object.keys(i).map(r=>`${r}-${t[r].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};bo.defaultOptions={ubo:!1,isStatic:!1};let Co=bo;class Fn{constructor(t){this.resources=Object.create(null),this._dirty=!0;let e=0;for(const i in t){const r=t[i];this.setResource(r,e++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let e=0;for(const i in this.resources)t[e++]=this.resources[i]._resourceId;this._key=t.join("|")}setResource(t,e){var r,s;const i=this.resources[e];t!==i&&(i&&((r=t.off)==null||r.call(t,"change",this.onResourceChange,this)),(s=t.on)==null||s.call(t,"change",this.onResourceChange,this),this.resources[e]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const e=this.resources;for(const i in e)e[i]._touched=t}destroy(){var e;const t=this.resources;for(const i in t){const r=t[i];(e=r.off)==null||e.call(r,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const e=this.resources;for(const i in e)e[i]===t&&(e[i]=null)}else this._updateKey()}}var $n=(n=>(n[n.WEBGL=1]="WEBGL",n[n.WEBGPU=2]="WEBGPU",n[n.BOTH=3]="BOTH",n))($n||{});class xr extends Et{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:e,glProgram:i,groups:r,resources:s,compatibleRenderers:o,groupMap:a}=t;this.gpuProgram=e,this.glProgram=i,o===void 0&&(o=0,e&&(o|=$n.WEBGPU),i&&(o|=$n.WEBGL)),this.compatibleRenderers=o;const l={};if(!s&&!r&&(s={}),s&&r)throw new Error("[Shader] Cannot have both resources and groups");if(!e&&r&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&r&&a)for(const h in a)for(const u in a[h]){const c=a[h][u];l[c]={group:h,binding:u,name:c}}else if(e&&r&&!a){const h=e.structsAndGroups.groups;a={},h.forEach(u=>{a[u.group]=a[u.group]||{},a[u.group][u.binding]=u.name,l[u.name]=u})}else if(s){if(e){const h=e.structsAndGroups.groups;a={},h.forEach(u=>{a[u.group]=a[u.group]||{},a[u.group][u.binding]=u.name,l[u.name]=u})}else{a={},r={99:new Fn},this._ownedBindGroups.push(r[99]);let h=0;for(const u in s)l[u]={group:99,binding:h,name:u},a[99]=a[99]||{},a[99][h]=u,h++}r={};for(const h in s){const u=h;let c=s[h];!c.source&&!c._resourceType&&(c=new Co(c));const f=l[u];f&&(r[f.group]||(r[f.group]=new Fn,this._ownedBindGroups.push(r[f.group])),r[f.group].setResource(c,f.binding))}}this.groups=r,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(r,l)}addResource(t,e,i){var r,s;(r=this._uniformBindMap)[e]||(r[e]={}),(s=this._uniformBindMap[e])[i]||(s[i]=t),this.groups[e]||(this.groups[e]=new Fn,this._ownedBindGroups.push(this.groups[e]))}_buildResourceAccessor(t,e){const i={};for(const r in e){const s=e[r];Object.defineProperty(i,s.name,{get(){return t[s.group].getResource(s.binding)},set(o){t[s.group].setResource(o,s.binding)}})}return i}destroy(t=!1){var e,i;this.emit("destroy",this),t&&((e=this.gpuProgram)==null||e.destroy(),(i=this.glProgram)==null||i.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(r=>{r.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:e,gl:i,...r}=t;let s,o;return e&&(s=L.from(e)),i&&(o=G.from(i)),new xr({gpuProgram:s,glProgram:o,...r})}}const Tu={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},_i=0,bi=1,Si=2,Ci=3,wi=4,Pi=5,Wi=class wo{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<_i)}set blend(t){!!(this.data&1<<_i)!==t&&(this.data^=1<<_i)}get offsets(){return!!(this.data&1<<bi)}set offsets(t){!!(this.data&1<<bi)!==t&&(this.data^=1<<bi)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Si)}set culling(t){!!(this.data&1<<Si)!==t&&(this.data^=1<<Si)}get depthTest(){return!!(this.data&1<<Ci)}set depthTest(t){!!(this.data&1<<Ci)!==t&&(this.data^=1<<Ci)}get depthMask(){return!!(this.data&1<<Pi)}set depthMask(t){!!(this.data&1<<Pi)!==t&&(this.data^=1<<Pi)}get clockwiseFrontFace(){return!!(this.data&1<<wi)}set clockwiseFrontFace(t){!!(this.data&1<<wi)!==t&&(this.data^=1<<wi)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=Tu[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new wo;return t.depthTest=!1,t.blend=!0,t}};Wi.default2d=Wi.for2d();let Mu=Wi;const Po=class Vi extends xr{constructor(t){t={...Vi.defaultOptions,...t},super(t),this.enabled=!0,this._state=Mu.for2d(),this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.addResource("uTexture",0,1)}apply(t,e,i,r){t.applyFilter(this,e,i,r)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:e,gl:i,...r}=t;let s,o;return e&&(s=L.from(e)),i&&(o=G.from(i)),new Vi({gpuProgram:s,glProgram:o,...r})}};Po.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1};let $=Po;const Hi=[];_t.handleByNamedList(D.Environment,Hi);async function Fu(n){if(n)for(let t=0;t<Hi.length;t++){const e=Hi[t];if(e.value.test()){await e.value.load();return}}}let Ve;function Iu(){if(typeof Ve=="boolean")return Ve;try{Ve=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Ve=!1}return Ve}var vr={exports:{}};vr.exports=Vn;vr.exports.default=Vn;function Vn(n,t,e){e=e||2;var i=t&&t.length,r=i?t[0]*e:n.length,s=Ao(n,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,h,u,c,f,d;if(i&&(s=ku(n,t,s,e)),n.length>80*e){a=h=n[0],l=u=n[1];for(var p=e;p<r;p+=e)c=n[p],f=n[p+1],c<a&&(a=c),f<l&&(l=f),c>h&&(h=c),f>u&&(u=f);d=Math.max(h-a,u-l),d=d!==0?32767/d:0}return nn(s,o,e,a,l,d,0),o}function Ao(n,t,e,i,r){var s,o;if(r===ji(n,t,e,i)>0)for(s=t;s<e;s+=i)o=ms(s,n[s],n[s+1],o);else for(s=e-i;s>=t;s-=i)o=ms(s,n[s],n[s+1],o);return o&&Hn(o,o.next)&&(sn(o),o=o.next),o}function pe(n,t){if(!n)return n;t||(t=n);var e=n,i;do if(i=!1,!e.steiner&&(Hn(e,e.next)||et(e.prev,e,e.next)===0)){if(sn(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function nn(n,t,e,i,r,s,o){if(n){!o&&s&&Gu(n,i,r,s);for(var a=n,l,h;n.prev!==n.next;){if(l=n.prev,h=n.next,s?Bu(n,i,r,s):zu(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),sn(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=Ou(pe(n),t,e),nn(n,t,e,i,r,s,2)):o===2&&Eu(n,t,e,i,r,s):nn(pe(n),t,e,i,r,s,1);break}}}}function zu(n){var t=n.prev,e=n,i=n.next;if(et(t,e,i)>=0)return!1;for(var r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,h=i.y,u=r<s?r<o?r:o:s<o?s:o,c=a<l?a<h?a:h:l<h?l:h,f=r>s?r>o?r:o:s>o?s:o,d=a>l?a>h?a:h:l>h?l:h,p=i.next;p!==t;){if(p.x>=u&&p.x<=f&&p.y>=c&&p.y<=d&&Te(r,a,s,l,o,h,p.x,p.y)&&et(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Bu(n,t,e,i){var r=n.prev,s=n,o=n.next;if(et(r,s,o)>=0)return!1;for(var a=r.x,l=s.x,h=o.x,u=r.y,c=s.y,f=o.y,d=a<l?a<h?a:h:l<h?l:h,p=u<c?u<f?u:f:c<f?c:f,g=a>l?a>h?a:h:l>h?l:h,m=u>c?u>f?u:f:c>f?c:f,x=Xi(d,p,t,e,i),v=Xi(g,m,t,e,i),y=n.prevZ,_=n.nextZ;y&&y.z>=x&&_&&_.z<=v;){if(y.x>=d&&y.x<=g&&y.y>=p&&y.y<=m&&y!==r&&y!==o&&Te(a,u,l,c,h,f,y.x,y.y)&&et(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=g&&_.y>=p&&_.y<=m&&_!==r&&_!==o&&Te(a,u,l,c,h,f,_.x,_.y)&&et(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=x;){if(y.x>=d&&y.x<=g&&y.y>=p&&y.y<=m&&y!==r&&y!==o&&Te(a,u,l,c,h,f,y.x,y.y)&&et(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=g&&_.y>=p&&_.y<=m&&_!==r&&_!==o&&Te(a,u,l,c,h,f,_.x,_.y)&&et(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ou(n,t,e){var i=n;do{var r=i.prev,s=i.next.next;!Hn(r,s)&&To(r,i,i.next,s)&&rn(r,s)&&rn(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),sn(i),sn(i.next),i=n=s),i=i.next}while(i!==n);return pe(i)}function Eu(n,t,e,i,r,s){var o=n;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&Wu(o,a)){var l=Mo(o,a);o=pe(o,o.next),l=pe(l,l.next),nn(o,t,e,i,r,s,0),nn(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function ku(n,t,e,i){var r=[],s,o,a,l,h;for(s=0,o=t.length;s<o;s++)a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,h=Ao(n,a,l,i,!1),h===h.next&&(h.steiner=!0),r.push($u(h));for(r.sort(Uu),s=0;s<r.length;s++)e=Ru(r[s],e);return e}function Uu(n,t){return n.x-t.x}function Ru(n,t){var e=Du(n,t);if(!e)return t;var i=Mo(e,n);return pe(i,i.next),pe(e,e.next)}function Du(n,t){var e=t,i=n.x,r=n.y,s=-1/0,o;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){var a=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=i&&a>s&&(s=a,o=e.x<e.next.x?e:e.next,a===i))return o}e=e.next}while(e!==t);if(!o)return null;var l=o,h=o.x,u=o.y,c=1/0,f;e=o;do i>=e.x&&e.x>=h&&i!==e.x&&Te(r<u?i:s,r,h,u,r<u?s:i,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(i-e.x),rn(e,n)&&(f<c||f===c&&(e.x>o.x||e.x===o.x&&Lu(o,e)))&&(o=e,c=f)),e=e.next;while(e!==l);return o}function Lu(n,t){return et(n.prev,n,t.prev)<0&&et(t.next,n,n.next)<0}function Gu(n,t,e,i){var r=n;do r.z===0&&(r.z=Xi(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Nu(r)}function Nu(n){var t,e,i,r,s,o,a,l,h=1;do{for(e=n,n=null,s=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,h*=2}while(o>1);return n}function Xi(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function $u(n){var t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Te(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function Wu(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Vu(n,t)&&(rn(n,t)&&rn(t,n)&&Hu(n,t)&&(et(n.prev,n,t.prev)||et(n,t.prev,t))||Hn(n,t)&&et(n.prev,n,n.next)>0&&et(t.prev,t,t.next)>0)}function et(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Hn(n,t){return n.x===t.x&&n.y===t.y}function To(n,t,e,i){var r=yn(et(n,t,e)),s=yn(et(n,t,i)),o=yn(et(e,i,n)),a=yn(et(e,i,t));return!!(r!==s&&o!==a||r===0&&vn(n,e,t)||s===0&&vn(n,i,t)||o===0&&vn(e,n,i)||a===0&&vn(e,t,i))}function vn(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function yn(n){return n>0?1:n<0?-1:0}function Vu(n,t){var e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&To(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function rn(n,t){return et(n.prev,n,n.next)<0?et(n,t,n.next)>=0&&et(n,n.prev,t)>=0:et(n,t,n.prev)<0||et(n,n.next,t)<0}function Hu(n,t){var e=n,i=!1,r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Mo(n,t){var e=new Yi(n.i,n.x,n.y),i=new Yi(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function ms(n,t,e,i){var r=new Yi(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function sn(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Yi(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Vn.deviation=function(n,t,e,i){var r=t&&t.length,s=r?t[0]*e:n.length,o=Math.abs(ji(n,0,s,e));if(r)for(var a=0,l=t.length;a<l;a++){var h=t[a]*e,u=a<l-1?t[a+1]*e:n.length;o-=Math.abs(ji(n,h,u,e))}var c=0;for(a=0;a<i.length;a+=3){var f=i[a]*e,d=i[a+1]*e,p=i[a+2]*e;c+=Math.abs((n[f]-n[p])*(n[d+1]-n[f+1])-(n[f]-n[d])*(n[p+1]-n[f+1]))}return o===0&&c===0?0:Math.abs((c-o)/o)};function ji(n,t,e,i){for(var r=0,s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}Vn.flatten=function(n){for(var t=n[0][0].length,e={vertices:[],holes:[],dimensions:t},i=0,r=0;r<n.length;r++){for(var s=0;s<n[r].length;s++)for(var o=0;o<t;o++)e.vertices.push(n[r][s][o]);r>0&&(i+=n[r-1].length,e.holes.push(i))}return e};var Xu=vr.exports;const Yu=dr(Xu);var Fo=(n=>(n[n.NONE=0]="NONE",n[n.COLOR=16384]="COLOR",n[n.STENCIL=1024]="STENCIL",n[n.DEPTH=256]="DEPTH",n[n.COLOR_DEPTH=16640]="COLOR_DEPTH",n[n.COLOR_STENCIL=17408]="COLOR_STENCIL",n[n.DEPTH_STENCIL=1280]="DEPTH_STENCIL",n[n.ALL=17664]="ALL",n))(Fo||{});class ju{constructor(t){this.items=[],this._name=t}emit(t,e,i,r,s,o,a,l){const{name:h,items:u}=this;for(let c=0,f=u.length;c<f;c++)u[c][h](t,e,i,r,s,o,a,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const e=this.items.indexOf(t);return e!==-1&&this.items.splice(e,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const qu=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Io=class zo extends Et{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name;const e=[...qu,...t.runners??[]];this._addRunners(...e),this._addSystems(t.systems),this._addPipes(t.renderPipes,t.renderPipeAdaptors),this._unsafeEvalCheck()}async init(t={}){for(const e in this._systemsHash)t={...this._systemsHash[e].constructor.defaultOptions,...t};t={...zo.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let e=0;e<this.runners.init.items.length;e++)await this.runners.init.items[e].init(t);this._initOptions=t}render(t,e){let i=t;if(i instanceof N&&(i={container:i},e&&(O(Q,"passing a second argument is deprecated, please use render options instead"),i.target=e.renderTexture)),i.target||(i.target=this.view.renderTarget),i.target===this.view.renderTarget&&(this._lastObjectRendered=i.container,i.clearColor=this.background.colorRgba),i.clearColor){const r=Array.isArray(i.clearColor)&&i.clearColor.length===4;i.clearColor=r?i.clearColor:Y.shared.setValue(i.clearColor).toArray()}i.transform||(i.container.updateLocalTransform(),i.transform=i.container.localTransform),this.runners.prerender.emit(i),this.runners.renderStart.emit(i),this.runners.render.emit(i),this.runners.renderEnd.emit(i),this.runners.postrender.emit(i)}resize(t,e,i){this.view.resize(t,e,i),this.emit("resize",this.view.screen.width,this.view.screen.height)}clear(t={}){const e=this;t.target||(t.target=e.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=Fo.ALL);const{clear:i,clearColor:r,target:s}=t;Y.shared.setValue(r??this.background.colorRgba),e.renderTarget.clear(s,i,Y.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(e=>{this.runners[e]=new ju(e)})}_addSystems(t){let e;for(e in t){const i=t[e];this._addSystem(i.value,i.name)}}_addSystem(t,e){const i=new t(this);if(this[e])throw new Error(`Whoops! The name "${e}" is already in use`);this[e]=i,this._systemsHash[e]=i;for(const r in this.runners)this.runners[r].add(i);return this}_addPipes(t,e){const i=e.reduce((r,s)=>(r[s.name]=s.value,r),{});t.forEach(r=>{const s=r.value,o=r.name,a=i[o];this.renderPipes[o]=new s(this,a?new a:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Iu())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};Io.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Bo=Io,_n;function Ku(n){return _n!==void 0||(_n=(()=>{var e;const t={stencil:!0,failIfMajorPerformanceCaveat:n??Bo.defaultOptions.failIfMajorPerformanceCaveat};try{if(!at.get().getWebGLRenderingContext())return!1;let r=at.get().createCanvas().getContext("webgl",t);const s=!!((e=r==null?void 0:r.getContextAttributes())!=null&&e.stencil);if(r){const o=r.getExtension("WEBGL_lose_context");o&&o.loseContext()}return r=null,s}catch{return!1}})()),_n}let bn;async function Zu(n={}){return bn!==void 0||(bn=await(async()=>{if(!at.get().getNavigator().gpu)return!1;try{return await(await navigator.gpu.requestAdapter(n)).requestDevice(),!0}catch{return!1}})()),bn}const gs=["webgl","webgpu","canvas"];async function Qu(n){let t=[];n.preference?(t.push(n.preference),gs.forEach(s=>{s!==n.preference&&t.push(s)})):t=gs.slice();let e;await Fu(n.manageImports??!0);let i={};for(let s=0;s<t.length;s++){const o=t[s];if(o==="webgpu"&&await Zu()){const{WebGPURenderer:a}=await Dn(()=>import("./WebGPURenderer-OFz6ucCE.js"),__vite__mapDeps([5,2,6,3]));e=a,i={...n,...n.webgpu};break}else if(o==="webgl"&&Ku(n.failIfMajorPerformanceCaveat??Bo.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await Dn(()=>import("./WebGLRenderer-BYC320UH.js"),__vite__mapDeps([7,2,4,6]));e=a,i={...n,...n.webgl};break}else if(o==="canvas")throw i={...n},new Error("CanvasRenderer is not yet implemented")}if(delete i.webgpu,delete i.webgl,!e)throw new Error("No available renderer for the current environment");const r=new e;return await r.init(i),r}const Oo=class qi{constructor(...t){this.stage=new N,t[0]!==void 0&&O(Q,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await Qu(t),qi._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return O(Q,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,e=!1){const i=qi._plugins.slice(0);i.reverse(),i.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(e),this.stage=null,this.renderer.destroy(t),this.renderer=null}};Oo._plugins=[];let Eo=Oo;_t.handleByList(D.Application,Eo._plugins);class Ju{constructor(t,e=!1){this._loader=t,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(t){t.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const t=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<e;i++)t.push(this._assetList.pop());await this._loader.load(t),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(t){this._isActive!==t&&(this._isActive=t,t&&!this._isLoading&&this._next())}}const th={extension:D.CacheParser,test:n=>Array.isArray(n)&&n.every(t=>t instanceof k),getCacheableAssets:(n,t)=>{const e={};return n.forEach(i=>{t.forEach((r,s)=>{e[i+(s===0?"":s+1)]=r})}),e}};async function ko(n){if("Image"in globalThis)return new Promise(t=>{const e=new Image;e.onload=()=>{t(!0)},e.onerror=()=>{t(!1)},e.src=n});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const t=await(await fetch(n)).blob();await createImageBitmap(t)}catch{return!1}return!0}return!1}const eh={extension:{type:D.DetectionParser,priority:1},test:async()=>ko("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async n=>[...n,"avif"],remove:async n=>n.filter(t=>t!=="avif")},xs=["png","jpg","jpeg"],nh={extension:{type:D.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async n=>[...n,...xs],remove:async n=>n.filter(t=>!xs.includes(t))},ih="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function yr(n){return ih?!1:document.createElement("video").canPlayType(n)!==""}const rh={extension:{type:D.DetectionParser,priority:0},test:async()=>yr("video/mp4"),add:async n=>[...n,"mp4","m4v"],remove:async n=>n.filter(t=>t!=="mp4"&&t!=="m4v")},sh={extension:{type:D.DetectionParser,priority:0},test:async()=>yr("video/ogg"),add:async n=>[...n,"ogv"],remove:async n=>n.filter(t=>t!=="ogv")},oh={extension:{type:D.DetectionParser,priority:0},test:async()=>yr("video/webm"),add:async n=>[...n,"webm"],remove:async n=>n.filter(t=>t!=="webm")},ah={extension:{type:D.DetectionParser,priority:0},test:async()=>ko("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async n=>[...n,"webp"],remove:async n=>n.filter(t=>t!=="webp")};let lh=class{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(t,e,i)=>(this._parsersValidated=!1,t[e]=i,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(t,e){const i={promise:null,parser:null};return i.promise=(async()=>{var o,a;let r=null,s=null;if(e.loadParser&&(s=this._parserHash[e.loadParser],s||ut(`[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`)),!s){for(let l=0;l<this.parsers.length;l++){const h=this.parsers[l];if(h.load&&((o=h.test)!=null&&o.call(h,t,e,this))){s=h;break}}if(!s)return ut(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await s.load(t,e,this),i.parser=s;for(let l=0;l<this.parsers.length;l++){const h=this.parsers[l];h.parse&&h.parse&&await((a=h.testParse)==null?void 0:a.call(h,r,e,this))&&(r=await h.parse(r,e,this)||r,i.parser=h)}return r})(),i}async load(t,e){this._parsersValidated||this._validateParsers();let i=0;const r={},s=Nn(t),o=wt(t,h=>({alias:[h],src:h})),a=o.length,l=o.map(async h=>{const u=Ot.toAbsolute(h.src);if(!r[h.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,h)),r[h.src]=await this.promiseCache[u].promise,e&&e(++i/a)}catch(c){throw delete this.promiseCache[u],delete r[h.src],new Error(`[Loader.load] Failed to load ${u}.
${c}`)}});return await Promise.all(l),s?r[o[0].src]:r}async unload(t){const i=wt(t,r=>({alias:[r],src:r})).map(async r=>{var a,l;const s=Ot.toAbsolute(r.src),o=this.promiseCache[s];if(o){const h=await o.promise;delete this.promiseCache[s],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,h,r,this))}});await Promise.all(i)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(t=>t.name).reduce((t,e)=>(e.name?t[e.name]&&ut(`[Assets] loadParser name conflict "${e.name}"`):ut("[Assets] loadParser should have a name"),{...t,[e.name]:e}),{})}};function Re(n,t){if(Array.isArray(t)){for(const e of t)if(n.startsWith(`data:${e}`))return!0;return!1}return n.startsWith(`data:${t}`)}function De(n,t){const e=n.split("?")[0],i=Ot.extname(e).toLowerCase();return Array.isArray(t)?t.includes(i):i===t}const uh=".json",hh="application/json",ch={extension:{type:D.LoadParser,priority:me.Low},name:"loadJson",test(n){return Re(n,hh)||De(n,uh)},async load(n){return await(await at.get().fetch(n)).json()}},fh=".txt",dh="text/plain",ph={name:"loadTxt",extension:{type:D.LoadParser,priority:me.Low},test(n){return Re(n,dh)||De(n,fh)},async load(n){return await(await at.get().fetch(n)).text()}},mh=["normal","bold","100","200","300","400","500","600","700","800","900"],gh=[".ttf",".otf",".woff",".woff2"],xh=["font/ttf","font/otf","font/woff","font/woff2"],vh=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function yh(n){const t=Ot.extname(n),r=Ot.basename(n,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let s=r.length>0;for(const a of r)if(!a.match(vh)){s=!1;break}let o=r.join(" ");return s||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const _h=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function bh(n){return _h.test(n)?n:encodeURI(n)}const Sh={extension:{type:D.LoadParser,priority:me.Low},name:"loadWebFont",test(n){return Re(n,xh)||De(n,gh)},async load(n,t){var i,r,s;const e=at.get().getFontFaceSet();if(e){const o=[],a=((i=t.data)==null?void 0:i.family)??yh(n),l=((s=(r=t.data)==null?void 0:r.weights)==null?void 0:s.filter(u=>mh.includes(u)))??["normal"],h=t.data??{};for(let u=0;u<l.length;u++){const c=l[u],f=new FontFace(a,`url(${bh(n)})`,{...h,weight:c});await f.load(),e.add(f),o.push(f)}return ft.set(`${a}-and-url`,{url:n,fontFaces:o}),o.length===1?o[0]:o}return ut("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(n){(Array.isArray(n)?n:[n]).forEach(t=>{ft.remove(t.family),at.get().getFontFaceSet().delete(t)})}};var Ch=Ph,Ai={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},wh=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function Ph(n){var t=[];return n.replace(wh,function(e,i,r){var s=i.toLowerCase();for(r=Th(r),s=="m"&&r.length>2&&(t.push([i].concat(r.splice(0,2))),s="l",i=i=="m"?"l":"L");;){if(r.length==Ai[s])return r.unshift(i),t.push(r);if(r.length<Ai[s])throw new Error("malformed path data");t.push([i].concat(r.splice(0,Ai[s])))}}),t}var Ah=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function Th(n){var t=n.match(Ah);return t?t.map(Number):[]}const Mh=dr(Ch);function Fh(n,t){const e=Mh(n),i=[];let r=null,s=0,o=0;for(let a=0;a<e.length;a++){const l=e[a],h=l[0],u=l;switch(h){case"M":s=u[1],o=u[2],t.moveTo(s,o);break;case"m":s+=u[1],o+=u[2],t.moveTo(s,o);break;case"H":s=u[1],t.lineTo(s,o);break;case"h":s+=u[1],t.lineTo(s,o);break;case"V":o=u[1],t.lineTo(s,o);break;case"v":o+=u[1],t.lineTo(s,o);break;case"L":s=u[1],o=u[2],t.lineTo(s,o);break;case"l":s+=u[1],o+=u[2],t.lineTo(s,o);break;case"C":s=u[5],o=u[6],t.bezierCurveTo(u[1],u[2],u[3],u[4],s,o);break;case"c":t.bezierCurveTo(s+u[1],o+u[2],s+u[3],o+u[4],s+u[5],o+u[6]),s+=u[5],o+=u[6];break;case"S":s=u[3],o=u[4],t.bezierCurveToShort(u[1],u[2],s,o);break;case"s":t.bezierCurveToShort(s+u[1],o+u[2],s+u[3],o+u[4]),s+=u[3],o+=u[4];break;case"Q":s=u[3],o=u[4],t.quadraticCurveTo(u[1],u[2],s,o);break;case"q":t.quadraticCurveTo(s+u[1],o+u[2],s+u[3],o+u[4]),s+=u[3],o+=u[4];break;case"T":s=u[1],o=u[2],t.quadraticCurveToShort(s,o);break;case"t":s+=u[1],o+=u[2],t.quadraticCurveToShort(s,o);break;case"A":s=u[6],o=u[7],t.arcToSvg(u[1],u[2],u[3],u[4],u[5],s,o);break;case"a":s+=u[6],o+=u[7],t.arcToSvg(u[1],u[2],u[3],u[4],u[5],s,o);break;case"Z":case"z":t.closePath(),i.length>0&&(r=i.pop(),r?(s=r.startX,o=r.startY):(s=0,o=0)),r=null;break;default:ut(`Unknown SVG path command: ${h}`)}h!=="Z"&&h!=="z"&&r===null&&(r={startX:s,startY:o},i.push(r))}return t}class _r{constructor(t=0,e=0,i=0){this.type="circle",this.x=t,this.y=e,this.radius=i}clone(){return new _r(this.x,this.y,this.radius)}contains(t,e){if(this.radius<=0)return!1;const i=this.radius*this.radius;let r=this.x-t,s=this.y-e;return r*=r,s*=s,r+s<=i}strokeContains(t,e,i){if(this.radius===0)return!1;const r=this.x-t,s=this.y-e,o=this.radius,a=i/2,l=Math.sqrt(r*r+s*s);return l<o+a&&l>o-a}getBounds(t){return t=t||new it,t.x=this.x-this.radius,t.y=this.y-this.radius,t.width=this.radius*2,t.height=this.radius*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.radius=t.radius,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class br{constructor(t=0,e=0,i=0,r=0){this.type="ellipse",this.x=t,this.y=e,this.halfWidth=i,this.halfHeight=r}clone(){return new br(this.x,this.y,this.halfWidth,this.halfHeight)}contains(t,e){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let i=(t-this.x)/this.halfWidth,r=(e-this.y)/this.halfHeight;return i*=i,r*=r,i+r<=1}strokeContains(t,e,i){const{halfWidth:r,halfHeight:s}=this;if(r<=0||s<=0)return!1;const o=i/2,a=r-o,l=s-o,h=r+o,u=s+o,c=t-this.x,f=e-this.y,d=c*c/(a*a)+f*f/(l*l),p=c*c/(h*h)+f*f/(u*u);return d>1&&p<=1}getBounds(){return new it(this.x-this.halfWidth,this.y-this.halfHeight,this.halfWidth*2,this.halfHeight*2)}copyFrom(t){return this.x=t.x,this.y=t.y,this.halfWidth=t.halfWidth,this.halfHeight=t.halfHeight,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function Ih(n,t,e,i,r,s){const o=n-e,a=t-i,l=r-e,h=s-i,u=o*l+a*h,c=l*l+h*h;let f=-1;c!==0&&(f=u/c);let d,p;f<0?(d=e,p=i):f>1?(d=r,p=s):(d=e+f*l,p=i+f*h);const g=n-d,m=t-p;return g*g+m*m}class Je{constructor(...t){this.type="polygon";let e=Array.isArray(t[0])?t[0]:t;if(typeof e[0]!="number"){const i=[];for(let r=0,s=e.length;r<s;r++)i.push(e[r].x,e[r].y);e=i}this.points=e,this.closePath=!0}clone(){const t=this.points.slice(),e=new Je(t);return e.closePath=this.closePath,e}contains(t,e){let i=!1;const r=this.points.length/2;for(let s=0,o=r-1;s<r;o=s++){const a=this.points[s*2],l=this.points[s*2+1],h=this.points[o*2],u=this.points[o*2+1];l>e!=u>e&&t<(h-a)*((e-l)/(u-l))+a&&(i=!i)}return i}strokeContains(t,e,i){const r=i/2,s=r*r,{points:o}=this,a=o.length-(this.closePath?0:2);for(let l=0;l<a;l+=2){const h=o[l],u=o[l+1],c=o[(l+2)%o.length],f=o[(l+3)%o.length];if(Ih(t,e,h,u,c,f)<=s)return!0}return!1}getBounds(t){t=t||new it;const e=this.points;let i=1/0,r=-1/0,s=1/0,o=-1/0;for(let a=0,l=e.length;a<l;a+=2){const h=e[a],u=e[a+1];i=h<i?h:i,r=h>r?h:r,s=u<s?u:s,o=u>o?u:o}return t.x=i,t.width=r-i,t.y=s,t.height=o-s,t}copyFrom(t){return this.points=t.points.slice(),this.closePath=t.closePath,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t,e)=>`${t}, ${e}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const Sn=(n,t,e,i,r,s)=>{const o=n-e,a=t-i,l=Math.sqrt(o*o+a*a);return l>=r-s&&l<=r+s};class Sr{constructor(t=0,e=0,i=0,r=0,s=20){this.type="roundedRectangle",this.x=t,this.y=e,this.width=i,this.height=r,this.radius=s}getBounds(t){return t=t||new it,t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}clone(){return new Sr(this.x,this.y,this.width,this.height,this.radius)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){const i=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(e>=this.y+i&&e<=this.y+this.height-i||t>=this.x+i&&t<=this.x+this.width-i)return!0;let r=t-(this.x+i),s=e-(this.y+i);const o=i*i;if(r*r+s*s<=o||(r=t-(this.x+this.width-i),r*r+s*s<=o)||(s=e-(this.y+this.height-i),r*r+s*s<=o)||(r=t-(this.x+i),r*r+s*s<=o))return!0}return!1}strokeContains(t,e,i){const{x:r,y:s,width:o,height:a,radius:l}=this,h=i/2,u=r+l,c=s+l,f=o-l*2,d=a-l*2,p=r+o,g=s+a;return(t>=r-h&&t<=r+h||t>=p-h&&t<=p+h)&&e>=c&&e<=c+d||(e>=s-h&&e<=s+h||e>=g-h&&e<=g+h)&&t>=u&&t<=u+f?!0:t<u&&e<c&&Sn(t,e,u,c,l,h)||t>p-l&&e<c&&Sn(t,e,p-l,c,l,h)||t>p-l&&e>g-l&&Sn(t,e,p-l,g-l,l,h)||t<u&&e>g-l&&Sn(t,e,u,g-l,l,h)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}var nt=(n=>(n[n.MAP_READ=1]="MAP_READ",n[n.MAP_WRITE=2]="MAP_WRITE",n[n.COPY_SRC=4]="COPY_SRC",n[n.COPY_DST=8]="COPY_DST",n[n.INDEX=16]="INDEX",n[n.VERTEX=32]="VERTEX",n[n.UNIFORM=64]="UNIFORM",n[n.STORAGE=128]="STORAGE",n[n.INDIRECT=256]="INDIRECT",n[n.QUERY_RESOLVE=512]="QUERY_RESOLVE",n[n.STATIC=1024]="STATIC",n))(nt||{});class Zt extends Et{constructor(t){let{data:e,size:i}=t;const{usage:r,label:s,shrinkToFit:o}=t;super(),this.uid=rt("buffer"),this._resourceType="buffer",this._resourceId=rt("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,i=i??(e==null?void 0:e.byteLength);const a=!!e;this.descriptor={size:i,usage:r,mappedAtCreation:a,label:s},this.shrinkToFit=o??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get static(){return!!(this.descriptor.usage&nt.STATIC)}set static(t){t?this.descriptor.usage|=nt.STATIC:this.descriptor.usage&=~nt.STATIC}setDataWithSize(t,e,i){if(this._updateID++,this._updateSize=e*t.BYTES_PER_ELEMENT,this._data===t){i&&this.emit("update",this);return}const r=this._data;if(this._data=t,r.length!==t.length){!this.shrinkToFit&&t.byteLength<r.byteLength?i&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=rt("resource"),this.emit("change",this));return}i&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function Uo(n,t){if(!(n instanceof Zt)){let e=t?nt.INDEX:nt.VERTEX;n instanceof Array&&(t?(n=new Uint32Array(n),e=nt.INDEX|nt.COPY_DST):(n=new Float32Array(n),e=nt.VERTEX|nt.COPY_DST)),n=new Zt({data:n,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:e})}return n}function zh(n,t,e){const i=n.getAttribute(t);if(!i)return e.minX=0,e.minY=0,e.maxX=0,e.maxY=0,e;const r=i.buffer.data;let s=1/0,o=1/0,a=-1/0,l=-1/0;const h=r.BYTES_PER_ELEMENT,u=(i.offset||0)/h,c=(i.stride||2*4)/h;for(let f=u;f<r.length;f+=c){const d=r[f],p=r[f+1];d>a&&(a=d),p>l&&(l=p),d<s&&(s=d),p<o&&(o=p)}return e.minX=s,e.minY=o,e.maxX=a,e.maxY=l,e}function Bh(n){return(n instanceof Zt||Array.isArray(n)||n.BYTES_PER_ELEMENT)&&(n={buffer:n}),n.buffer=Uo(n.buffer,!1),n}class Ro extends Et{constructor(t){const{attributes:e,indexBuffer:i,topology:r}=t;super(),this.uid=rt("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Bt,this._boundsDirty=!0,this.attributes=e,this.buffers=[],this.instanceCount=t.instanceCount||1;for(const s in e){const o=e[s]=Bh(e[s]);this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this),o.buffer.on("change",this.onBufferUpdate,this))}i&&(this.indexBuffer=Uo(i,!0),this.buffers.push(this.indexBuffer)),this.topology=r||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const e=this.attributes[t];return e.buffer.data.length/(e.stride/4||e.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,zh(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(e=>e.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const Oh=new Float32Array(1),Eh=new Uint32Array(1);class kh extends Ro{constructor(){const e=new Zt({data:Oh,label:"attribute-batch-buffer",usage:nt.VERTEX|nt.COPY_DST,shrinkToFit:!1}),i=new Zt({data:Eh,label:"index-batch-buffer",usage:nt.INDEX|nt.COPY_DST,shrinkToFit:!1}),r=6*4;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:r,offset:0,location:1},aUV:{buffer:e,format:"float32x2",stride:r,offset:2*4,location:3},aColor:{buffer:e,format:"unorm8x4",stride:r,offset:4*4,location:0},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:r,offset:5*4,location:2}},indexBuffer:i})}}let Cn=null;function Do(){if(Cn)return Cn;const n=vo();return Cn=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),Cn}const Lo={};function Uh(n,t){let e=0;for(let i=0;i<t;i++)e=e*31+n[i].uid>>>0;return Lo[e]||Rh(n,e)}let Ti=0;function Rh(n,t){const e={};let i=0;Ti||(Ti=Do());for(let s=0;s<Ti;s++){const o=s<n.length?n[s]:k.EMPTY.source;e[i++]=o.source,e[i++]=o.style}const r=new Fn(e);return Lo[t]=r,r}class vs{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function ys(n,t){const e=n.byteLength/8|0,i=new Float64Array(n,0,e);new Float64Array(t,0,e).set(i);const s=n.byteLength-e*8;if(s>0){const o=new Uint8Array(n,e*8,s);new Uint8Array(t,e*8,s).set(o)}}const Dh={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var Lh=(n=>(n[n.DISABLED=0]="DISABLED",n[n.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",n[n.MASK_ACTIVE=2]="MASK_ACTIVE",n[n.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",n[n.NONE=4]="NONE",n))(Lh||{});function _s(n,t){return t.alphaMode==="no-premultiply-alpha"&&Dh[n]||n}class bs{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class Ss{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}let He=0;const Go=class No{constructor(t={}){this.uid=rt("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],this._batchPool=[],this._batchPoolIndex=0,this._textureBatchPool=[],this._textureBatchPoolIndex=0,t={...No.defaultOptions,...t};const{vertexSize:e,indexSize:i}=t;this.attributeBuffer=new vs(e*this._vertexSize*4),this.indexBuffer=new Uint16Array(i),this._maxTextures=Do()}begin(){this.batchIndex=0,this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0,this._batchPoolIndex=0,this._textureBatchPoolIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t.indexStart=this.indexSize,t.location=this.attributeSize,t.batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.vertexSize*this._vertexSize}checkAndUpdateTexture(t,e){const i=t.batch.textures.ids[e._source.uid];return!i&&i!==0?!1:(t.textureId=i,t.texture=e,!0)}updateElement(t){this.dirty=!0,t.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,t.location,t.textureId)}break(t){const e=this._elements;let i=this._textureBatchPool[this._textureBatchPoolIndex++]||new bs;if(i.clear(),!e[this.elementStart])return;const r=e[this.elementStart];let s=_s(r.blendMode,r.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const o=this.attributeBuffer.float32View,a=this.attributeBuffer.uint32View,l=this.indexBuffer;let h=this._batchIndexSize,u=this._batchIndexStart,c="startBatch",f=this._batchPool[this._batchPoolIndex++]||new Ss;const d=this._maxTextures;for(let p=this.elementStart;p<this.elementSize;++p){const g=e[p];e[p]=null;const x=g.texture._source,v=_s(g.blendMode,x),y=s!==v;if(x._batchTick===He&&!y){g.textureId=x._textureBindLocation,h+=g.indexSize,g.packAttributes(o,a,g.location,g.textureId),g.packIndex(l,g.indexStart,g.location/this._vertexSize),g.batch=f;continue}x._batchTick=He,(i.count>=d||y)&&(this._finishBatch(f,u,h-u,i,s,t,c),c="renderBatch",u=h,s=v,i=this._textureBatchPool[this._textureBatchPoolIndex++]||new bs,i.clear(),f=this._batchPool[this._batchPoolIndex++]||new Ss,++He),g.textureId=x._textureBindLocation=i.count,i.ids[x.uid]=i.count,i.textures[i.count++]=x,g.batch=f,h+=g.indexSize,g.packAttributes(o,a,g.location,g.textureId),g.packIndex(l,g.indexStart,g.location/this._vertexSize)}i.count>0&&(this._finishBatch(f,u,h-u,i,s,t,c),u=h,++He),this.elementStart=this.elementSize,this._batchIndexStart=u,this._batchIndexSize=h}_finishBatch(t,e,i,r,s,o,a){t.gpuBindGroup=null,t.action=a,t.batcher=this,t.textures=r,t.blendMode=s,t.start=e,t.size=i,++He,o.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),i=new vs(e);ys(this.attributeBuffer.rawBinaryData,i.rawBinaryData),this.attributeBuffer=i}_resizeIndexBuffer(t){const e=this.indexBuffer;let i=Math.max(t,e.length*1.5);i+=i%2;const r=i>65535?new Uint32Array(i):new Uint16Array(i);if(r.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let s=0;s<e.length;s++)r[s]=e[s];else ys(e.buffer,r.buffer);this.indexBuffer=r}destroy(){for(let t=0;t<this.batches.length;t++)this.batches[t].destroy();this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};Go.defaultOptions={vertexSize:4,indexSize:6};let Gh=Go;function Nh(n,t,e,i,r,s,o,a=null){let l=0;e*=t,r*=s;const h=a.a,u=a.b,c=a.c,f=a.d,d=a.tx,p=a.ty;for(;l<o;){const g=n[e],m=n[e+1];i[r]=h*g+c*m+d,i[r+1]=u*g+f*m+p,r+=s,e+=t,l++}}function $h(n,t,e,i){let r=0;for(t*=e;r<i;)n[t]=0,n[t+1]=0,t+=e,r++}function $o(n,t,e,i,r){const s=t.a,o=t.b,a=t.c,l=t.d,h=t.tx,u=t.ty;e=e||0,i=i||2,r=r||n.length/i-e;let c=e*i;for(let f=0;f<r;f++){const d=n[c],p=n[c+1];n[c]=s*d+a*p+h,n[c+1]=o*d+l*p+u,c+=i}}function Wh(n,t){if(n===16777215||!t)return t;if(t===16777215||!n)return n;const e=n>>16&255,i=n>>8&255,r=n&255,s=t>>16&255,o=t>>8&255,a=t&255,l=e*s/255,h=i*o/255,u=r*a/255;return(l<<16)+(h<<8)+u}class Wo{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0,this.roundPixels=0}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}packIndex(t,e,i){const r=this.geometryData.indices;for(let s=0;s<this.indexSize;s++)t[e++]=r[s+this.indexOffset]+i-this.vertexOffset}packAttributes(t,e,i,r){const s=this.geometryData,o=this.renderable,a=s.vertices,l=s.uvs,h=this.vertexOffset*2,u=(this.vertexOffset+this.vertexSize)*2,c=this.color,f=c>>16|c&65280|(c&255)<<16;if(this.applyTransform){const d=Wh(f,o.groupColor)+(this.alpha*o.groupAlpha*255<<24),p=o.groupTransform,g=r<<16|this.roundPixels&65535,m=p.a,x=p.b,v=p.c,y=p.d,_=p.tx,F=p.ty;for(let R=h;R<u;R+=2){const T=a[R],z=a[R+1];t[i]=m*T+v*z+_,t[i+1]=x*T+y*z+F,t[i+2]=l[R],t[i+3]=l[R+1],e[i+4]=d,e[i+5]=g,i+=6}}else{const d=f+(this.alpha*255<<24);for(let p=h;p<u;p+=2)t[i]=a[p],t[i+1]=a[p+1],t[i+2]=l[p],t[i+3]=l[p+1],e[i+4]=d,e[i+5]=r<<16,i+=6}}get vertSize(){return this.vertexSize}copyTo(t){t.indexOffset=this.indexOffset,t.indexSize=this.indexSize,t.vertexOffset=this.vertexOffset,t.vertexSize=this.vertexSize,t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.geometryData=this.geometryData}reset(){this.applyTransform=!0}}const Mi={build(n,t){let e,i,r,s,o,a;if(n.type==="circle"){const _=n;e=_.x,i=_.y,o=a=_.radius,r=s=0}else if(n.type==="ellipse"){const _=n;e=_.x,i=_.y,o=_.halfWidth,a=_.halfHeight,r=s=0}else{const _=n,F=_.width/2,R=_.height/2;e=_.x+F,i=_.y+R,o=a=Math.max(0,Math.min(_.radius,Math.min(F,R))),r=F-o,s=R-a}if(!(o>=0&&a>=0&&r>=0&&s>=0))return t;const l=Math.ceil(2.3*Math.sqrt(o+a)),h=l*8+(r?4:0)+(s?4:0);if(h===0)return t;if(l===0)return t[0]=t[6]=e+r,t[1]=t[3]=i+s,t[2]=t[4]=e-r,t[5]=t[7]=i-s,t;let u=0,c=l*4+(r?2:0)+2,f=c,d=h,p=r+o,g=s,m=e+p,x=e-p,v=i+g;if(t[u++]=m,t[u++]=v,t[--c]=v,t[--c]=x,s){const _=i-g;t[f++]=x,t[f++]=_,t[--d]=_,t[--d]=m}for(let _=1;_<l;_++){const F=Math.PI/2*(_/l),R=r+Math.cos(F)*o,T=s+Math.sin(F)*a,z=e+R,b=e-R,C=i+T,q=i-T;t[u++]=z,t[u++]=C,t[--c]=C,t[--c]=b,t[f++]=b,t[f++]=q,t[--d]=q,t[--d]=z}p=r,g=s+a,m=e+p,x=e-p,v=i+g;const y=i-g;return t[u++]=m,t[u++]=v,t[--d]=y,t[--d]=m,r&&(t[u++]=x,t[u++]=v,t[--d]=y,t[--d]=x),t},triangulate(n,t,e,i,r,s){if(n.length===0)return;let o=0,a=0;for(let u=0;u<n.length;u+=2)o+=n[u],a+=n[u+1];o/=n.length/2,a/=n.length/2;let l=i;t[l*e]=o,t[l*e+1]=a;const h=l++;for(let u=0;u<n.length;u+=2)t[l*e]=n[u],t[l*e+1]=n[u+1],u>0&&(r[s++]=l,r[s++]=h,r[s++]=l-1),l++;r[s++]=h+1,r[s++]=h,r[s++]=l-1}},Vh=1e-4,Cs=1e-4;function Hh(n){const t=n.length;if(t<6)return 1;let e=0;for(let i=0,r=n[t-2],s=n[t-1];i<t;i+=2){const o=n[i],a=n[i+1];e+=(o-r)*(a+s),r=o,s=a}return e<0?-1:1}function ws(n,t,e,i,r,s,o,a){const l=n-e*r,h=t-i*r,u=n+e*s,c=t+i*s;let f,d;o?(f=i,d=-e):(f=-i,d=e);const p=l+f,g=h+d,m=u+f,x=c+d;return a.push(p,g),a.push(m,x),2}function ie(n,t,e,i,r,s,o,a){const l=e-n,h=i-t;let u=Math.atan2(l,h),c=Math.atan2(r-n,s-t);a&&u<c?u+=Math.PI*2:!a&&u>c&&(c+=Math.PI*2);let f=u;const d=c-u,p=Math.abs(d),g=Math.sqrt(l*l+h*h),m=(15*p*Math.sqrt(g)/Math.PI>>0)+1,x=d/m;if(f+=x,a){o.push(n,t),o.push(e,i);for(let v=1,y=f;v<m;v++,y+=x)o.push(n,t),o.push(n+Math.sin(y)*g,t+Math.cos(y)*g);o.push(n,t),o.push(r,s)}else{o.push(e,i),o.push(n,t);for(let v=1,y=f;v<m;v++,y+=x)o.push(n+Math.sin(y)*g,t+Math.cos(y)*g),o.push(n,t);o.push(r,s),o.push(n,t)}return m*2}function Xh(n,t,e,i,r,s,o,a,l){const h=Vh;if(n.length===0)return;const u=t;let c=u.alignment;if(t.alignment!==.5){let K=Hh(n);c=(c-.5)*K+.5}const f=new lt(n[0],n[1]),d=new lt(n[n.length-2],n[n.length-1]),p=i,g=Math.abs(f.x-d.x)<h&&Math.abs(f.y-d.y)<h;if(p){n=n.slice(),g&&(n.pop(),n.pop(),d.set(n[n.length-2],n[n.length-1]));const K=(f.x+d.x)*.5,Wt=(d.y+f.y)*.5;n.unshift(K,Wt),n.push(K,Wt)}const m=r,x=n.length/2;let v=n.length;const y=m.length/2,_=u.width/2,F=_*_,R=u.miterLimit*u.miterLimit;let T=n[0],z=n[1],b=n[2],C=n[3],q=0,bt=0,U=-(z-C),I=T-b,W=0,J=0,A=Math.sqrt(U*U+I*I);U/=A,I/=A,U*=_,I*=_;const V=c,P=(1-V)*2,E=V*2;p||(u.cap==="round"?v+=ie(T-U*(P-E)*.5,z-I*(P-E)*.5,T-U*P,z-I*P,T+U*E,z+I*E,m,!0)+2:u.cap==="square"&&(v+=ws(T,z,U,I,P,E,!0,m))),m.push(T-U*P,z-I*P),m.push(T+U*E,z+I*E);for(let K=1;K<x-1;++K){T=n[(K-1)*2],z=n[(K-1)*2+1],b=n[K*2],C=n[K*2+1],q=n[(K+1)*2],bt=n[(K+1)*2+1],U=-(z-C),I=T-b,A=Math.sqrt(U*U+I*I),U/=A,I/=A,U*=_,I*=_,W=-(C-bt),J=b-q,A=Math.sqrt(W*W+J*J),W/=A,J/=A,W*=_,J*=_;const Wt=b-T,Le=z-C,Ge=b-q,Ne=bt-C,zr=Wt*Ge+Le*Ne,un=Le*Ge-Ne*Wt,$e=un<0;if(Math.abs(un)<.001*Math.abs(zr)){m.push(b-U*P,C-I*P),m.push(b+U*E,C+I*E),zr>=0&&(u.join==="round"?v+=ie(b,C,b-U*P,C-I*P,b-W*P,C-J*P,m,!1)+4:v+=2,m.push(b-W*E,C-J*E),m.push(b+W*P,C+J*P));continue}const Br=(-U+T)*(-I+C)-(-U+b)*(-I+z),Or=(-W+q)*(-J+C)-(-W+b)*(-J+bt),hn=(Wt*Or-Ge*Br)/un,cn=(Ne*Br-Le*Or)/un,ti=(hn-b)*(hn-b)+(cn-C)*(cn-C),Jt=b+(hn-b)*P,te=C+(cn-C)*P,ee=b-(hn-b)*E,ne=C-(cn-C)*E,al=Math.min(Wt*Wt+Le*Le,Ge*Ge+Ne*Ne),Er=$e?P:E,ll=al+Er*Er*F;ti<=ll?u.join==="bevel"||ti/F>R?($e?(m.push(Jt,te),m.push(b+U*E,C+I*E),m.push(Jt,te),m.push(b+W*E,C+J*E)):(m.push(b-U*P,C-I*P),m.push(ee,ne),m.push(b-W*P,C-J*P),m.push(ee,ne)),v+=2):u.join==="round"?$e?(m.push(Jt,te),m.push(b+U*E,C+I*E),v+=ie(b,C,b+U*E,C+I*E,b+W*E,C+J*E,m,!0)+4,m.push(Jt,te),m.push(b+W*E,C+J*E)):(m.push(b-U*P,C-I*P),m.push(ee,ne),v+=ie(b,C,b-U*P,C-I*P,b-W*P,C-J*P,m,!1)+4,m.push(b-W*P,C-J*P),m.push(ee,ne)):(m.push(Jt,te),m.push(ee,ne)):(m.push(b-U*P,C-I*P),m.push(b+U*E,C+I*E),u.join==="round"?$e?v+=ie(b,C,b+U*E,C+I*E,b+W*E,C+J*E,m,!0)+2:v+=ie(b,C,b-U*P,C-I*P,b-W*P,C-J*P,m,!1)+2:u.join==="miter"&&ti/F<=R&&($e?(m.push(ee,ne),m.push(ee,ne)):(m.push(Jt,te),m.push(Jt,te)),v+=2),m.push(b-W*P,C-J*P),m.push(b+W*E,C+J*E),v+=2)}T=n[(x-2)*2],z=n[(x-2)*2+1],b=n[(x-1)*2],C=n[(x-1)*2+1],U=-(z-C),I=T-b,A=Math.sqrt(U*U+I*I),U/=A,I/=A,U*=_,I*=_,m.push(b-U*P,C-I*P),m.push(b+U*E,C+I*E),p||(u.cap==="round"?v+=ie(b-U*(P-E)*.5,C-I*(P-E)*.5,b-U*P,C-I*P,b+U*E,C+I*E,m,!1)+2:u.cap==="square"&&(v+=ws(b,C,U,I,P,E,!1,m)));const ln=Cs*Cs;for(let K=y;K<v+y-2;++K)T=m[K*2],z=m[K*2+1],b=m[(K+1)*2],C=m[(K+1)*2+1],q=m[(K+2)*2],bt=m[(K+2)*2+1],!(Math.abs(T*(C-bt)+b*(bt-z)+q*(z-C))<ln)&&a.push(K,K+1,K+2)}function Vo(n,t,e,i,r,s,o){const a=Yu(n,t,2);if(!a)return;for(let h=0;h<a.length;h+=3)s[o++]=a[h]+r,s[o++]=a[h+1]+r,s[o++]=a[h+2]+r;let l=r*i;for(let h=0;h<n.length;h+=2)e[l]=n[h],e[l+1]=n[h+1],l+=i}const Yh=[],jh={build(n,t){for(let e=0;e<n.points.length;e++)t[e]=n.points[e];return t},triangulate(n,t,e,i,r,s){Vo(n,Yh,t,e,i,r,s)}},qh={build(n,t){const e=n,i=e.x,r=e.y,s=e.width,o=e.height;return s>=0&&o>=0&&(t[0]=i,t[1]=r,t[2]=i+s,t[3]=r,t[4]=i+s,t[5]=r+o,t[6]=i,t[7]=r+o),t},triangulate(n,t,e,i,r,s){let o=0;i*=e,t[i+o]=n[0],t[i+o+1]=n[1],o+=e,t[i+o]=n[2],t[i+o+1]=n[3],o+=e,t[i+o]=n[6],t[i+o+1]=n[7],o+=e,t[i+o]=n[4],t[i+o+1]=n[5],o+=e;const a=i/e;r[s++]=a,r[s++]=a+1,r[s++]=a+2,r[s++]=a+1,r[s++]=a+3,r[s++]=a+2}},Kh={build(n,t){return t[0]=n.x,t[1]=n.y,t[2]=n.x2,t[3]=n.y2,t[4]=n.x3,t[5]=n.y3,t},triangulate(n,t,e,i,r,s){let o=0;i*=e,t[i+o]=n[0],t[i+o+1]=n[1],o+=e,t[i+o]=n[2],t[i+o+1]=n[3],o+=e,t[i+o]=n[4],t[i+o+1]=n[5];const a=i/e;r[s++]=a,r[s++]=a+1,r[s++]=a+2}},Cr={rectangle:qh,polygon:jh,triangle:Kh,circle:Mi,ellipse:Mi,roundedRectangle:Mi},Zh=new it;function Qh(n,t){const{geometryData:e,batches:i}=t;i.length=0,e.indices.length=0,e.vertices.length=0,e.uvs.length=0;for(let r=0;r<n.instructions.length;r++){const s=n.instructions[r];if(s.action==="texture")Jh(s.data,i,e);else if(s.action==="fill"||s.action==="stroke"){const o=s.action==="stroke",a=s.data.path.shapePath,l=s.data.style,h=s.data.hole;o&&h&&Ps(h.shapePath,l,null,!0,i,e),Ps(a,l,h,o,i,e)}}}function Jh(n,t,e){const{vertices:i,uvs:r,indices:s}=e,o=s.length,a=i.length/2,l=[],h=Cr.rectangle,u=Zh,c=n.image;u.x=n.dx,u.y=n.dy,u.width=n.dw,u.height=n.dh;const f=n.transform;h.build(u,l),f&&$o(l,f),h.triangulate(l,i,2,a,s,o);const d=c.uvs;r.push(d.x0,d.y0,d.x1,d.y1,d.x3,d.y3,d.x2,d.y2);const p=Lt.get(Wo);p.indexOffset=o,p.indexSize=s.length-o,p.vertexOffset=a,p.vertexSize=i.length/2-a,p.color=n.style,p.alpha=n.alpha,p.texture=c,p.geometryData=e,t.push(p)}function Ps(n,t,e,i,r,s){const{vertices:o,uvs:a,indices:l}=s,h=n.shapePrimitives.length-1;n.shapePrimitives.forEach(({shape:u,transform:c},f)=>{const d=l.length,p=o.length/2,g=[],m=Cr[u.type];if(m.build(u,g),c&&$o(g,c),i){const _=u.closePath??!0;Xh(g,t,!1,_,o,2,p,l)}else if(e&&h===f){h!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const _=[],F=g.slice();tc(e.shapePath).forEach(T=>{_.push(F.length/2),F.push(...T)}),Vo(F,_,o,2,p,l,d)}else m.triangulate(g,o,2,p,l,d);const x=a.length/2,v=t.texture;if(v!==k.WHITE){const _=t.matrix;c&&_.append(c.clone().invert()),Nh(o,2,p,a,x,2,o.length/2-p,_)}else $h(a,x,2,o.length/2-p);const y=Lt.get(Wo);y.indexOffset=d,y.indexSize=l.length-d,y.vertexOffset=p,y.vertexSize=o.length/2-p,y.color=t.color,y.alpha=t.alpha,y.texture=v,y.geometryData=s,r.push(y)})}function tc(n){if(!n)return[];const t=n.shapePrimitives,e=[];for(let i=0;i<t.length;i++){const r=t[i].shape,s=[];Cr[r.type].build(r,s),e.push(s)}return e}class ec{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class nc{constructor(){this.geometry=new kh,this.instructions=new io}init(){this.instructions.reset()}}const wr=class Ki{constructor(){this._activeBatchers=[],this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null)}init(t){Ki.defaultOptions.bezierSmoothness=(t==null?void 0:t.bezierSmoothness)??Ki.defaultOptions.bezierSmoothness}prerender(){this._returnActiveBatchers()}getContextRenderData(t){return this._graphicsDataContextHash[t.uid]||this._initContextRenderData(t)}updateGpuContext(t){let e=this._gpuContextHash[t.uid]||this._initContext(t);if(t.dirty){e?this._cleanGraphicsContextData(t):e=this._initContext(t),Qh(t,e);const i=t.batchMode;t.customShader||i==="no-batch"?e.isBatchable=!1:i==="auto"&&(e.isBatchable=e.geometryData.vertices.length<400),t.dirty=!1}return e}getGpuContext(t){return this._gpuContextHash[t.uid]||this._initContext(t)}_returnActiveBatchers(){for(let t=0;t<this._activeBatchers.length;t++)Lt.return(this._activeBatchers[t]);this._activeBatchers.length=0}_initContextRenderData(t){const e=Lt.get(nc),{batches:i,geometryData:r}=this._gpuContextHash[t.uid],s=r.vertices.length,o=r.indices.length;for(let u=0;u<i.length;u++)i[u].applyTransform=!1;const a=Lt.get(Gh);this._activeBatchers.push(a),a.ensureAttributeBuffer(s),a.ensureIndexBuffer(o),a.begin();for(let u=0;u<i.length;u++){const c=i[u];a.add(c)}a.finish(e.instructions);const l=e.geometry;l.indexBuffer.setDataWithSize(a.indexBuffer,a.indexSize,!0),l.buffers[0].setDataWithSize(a.attributeBuffer.float32View,a.attributeSize,!0);const h=a.batches;for(let u=0;u<h.length;u++){const c=h[u];c.bindGroup=Uh(c.textures.textures,c.textures.count)}return this._graphicsDataContextHash[t.uid]=e,e}_initContext(t){const e=new ec;return e.context=t,this._gpuContextHash[t.uid]=e,t.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]}onGraphicsContextDestroy(t){this._cleanGraphicsContextData(t),t.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]=null}_cleanGraphicsContextData(t){const e=this._gpuContextHash[t.uid];e.isBatchable||this._graphicsDataContextHash[t.uid]&&(Lt.return(this.getContextRenderData(t)),this._graphicsDataContextHash[t.uid]=null),e.batches&&e.batches.forEach(i=>{Lt.return(i)})}destroy(){for(const t in this._gpuContextHash)this._gpuContextHash[t]&&this.onGraphicsContextDestroy(this._gpuContextHash[t].context)}};wr.extension={type:[D.WebGLSystem,D.WebGPUSystem,D.CanvasSystem],name:"graphicsContext"};wr.defaultOptions={bezierSmoothness:.5};let Ho=wr;const ic=8,wn=11920929e-14,rc=1;function Xo(n,t,e,i,r,s,o,a,l,h){const c=Math.min(.99,Math.max(0,h??Ho.defaultOptions.bezierSmoothness));let f=(rc-c)/1;return f*=f,sc(t,e,i,r,s,o,a,l,n,f),n}function sc(n,t,e,i,r,s,o,a,l,h){Zi(n,t,e,i,r,s,o,a,l,h,0),l.push(o,a)}function Zi(n,t,e,i,r,s,o,a,l,h,u){if(u>ic)return;const c=(n+e)/2,f=(t+i)/2,d=(e+r)/2,p=(i+s)/2,g=(r+o)/2,m=(s+a)/2,x=(c+d)/2,v=(f+p)/2,y=(d+g)/2,_=(p+m)/2,F=(x+y)/2,R=(v+_)/2;if(u>0){let T=o-n,z=a-t;const b=Math.abs((e-o)*z-(i-a)*T),C=Math.abs((r-o)*z-(s-a)*T);if(b>wn&&C>wn){if((b+C)*(b+C)<=h*(T*T+z*z)){l.push(F,R);return}}else if(b>wn){if(b*b<=h*(T*T+z*z)){l.push(F,R);return}}else if(C>wn){if(C*C<=h*(T*T+z*z)){l.push(F,R);return}}else if(T=F-(n+o)/2,z=R-(t+a)/2,T*T+z*z<=h){l.push(F,R);return}}Zi(n,t,c,f,x,v,F,R,l,h,u+1),Zi(F,R,y,_,g,m,o,a,l,h,u+1)}const oc=8,ac=11920929e-14,lc=1;function uc(n,t,e,i,r,s,o,a){const h=Math.min(.99,Math.max(0,a??Ho.defaultOptions.bezierSmoothness));let u=(lc-h)/1;return u*=u,hc(t,e,i,r,s,o,n,u),n}function hc(n,t,e,i,r,s,o,a){Qi(o,n,t,e,i,r,s,a,0),o.push(r,s)}function Qi(n,t,e,i,r,s,o,a,l){if(l>oc)return;const h=(t+i)/2,u=(e+r)/2,c=(i+s)/2,f=(r+o)/2,d=(h+c)/2,p=(u+f)/2;let g=s-t,m=o-e;const x=Math.abs((i-s)*m-(r-o)*g);if(x>ac){if(x*x<=a*(g*g+m*m)){n.push(d,p);return}}else if(g=d-(t+s)/2,m=p-(e+o)/2,g*g+m*m<=a){n.push(d,p);return}Qi(n,t,e,h,u,d,p,a,l+1),Qi(n,d,p,c,f,s,o,a,l+1)}function Yo(n,t,e,i,r,s,o,a){let l=Math.abs(r-s);(!o&&r>s||o&&s>r)&&(l=2*Math.PI-l),a=a||Math.max(6,Math.floor(6*Math.pow(i,1/3)*(l/Math.PI))),a=Math.max(a,3);let h=l/a,u=r;h*=o?-1:1;for(let c=0;c<a+1;c++){const f=Math.cos(u),d=Math.sin(u),p=t+f*i,g=e+d*i;n.push(p,g),u+=h}}function cc(n,t,e,i,r,s){const o=n[n.length-2],l=n[n.length-1]-e,h=o-t,u=r-e,c=i-t,f=Math.abs(l*c-h*u);if(f<1e-8||s===0){(n[n.length-2]!==t||n[n.length-1]!==e)&&n.push(t,e);return}const d=l*l+h*h,p=u*u+c*c,g=l*u+h*c,m=s*Math.sqrt(d)/f,x=s*Math.sqrt(p)/f,v=m*g/d,y=x*g/p,_=m*c+x*h,F=m*u+x*l,R=h*(x+v),T=l*(x+v),z=c*(m+y),b=u*(m+y),C=Math.atan2(T-F,R-_),q=Math.atan2(b-F,z-_);Yo(n,_+t,F+e,s,C,q,h*u>c*l)}const tn=Math.PI*2,Fi={centerX:0,centerY:0,ang1:0,ang2:0},Ii=({x:n,y:t},e,i,r,s,o,a,l)=>{n*=e,t*=i;const h=r*n-s*t,u=s*n+r*t;return l.x=h+o,l.y=u+a,l};function fc(n,t){const e=t===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(t/4),i=t===1.5707963267948966?.551915024494:e,r=Math.cos(n),s=Math.sin(n),o=Math.cos(n+t),a=Math.sin(n+t);return[{x:r-s*i,y:s+r*i},{x:o+a*i,y:a-o*i},{x:o,y:a}]}const As=(n,t,e,i)=>{const r=n*i-t*e<0?-1:1;let s=n*e+t*i;return s>1&&(s=1),s<-1&&(s=-1),r*Math.acos(s)},dc=(n,t,e,i,r,s,o,a,l,h,u,c,f)=>{const d=Math.pow(r,2),p=Math.pow(s,2),g=Math.pow(u,2),m=Math.pow(c,2);let x=d*p-d*m-p*g;x<0&&(x=0),x/=d*m+p*g,x=Math.sqrt(x)*(o===a?-1:1);const v=x*r/s*c,y=x*-s/r*u,_=h*v-l*y+(n+e)/2,F=l*v+h*y+(t+i)/2,R=(u-v)/r,T=(c-y)/s,z=(-u-v)/r,b=(-c-y)/s,C=As(1,0,R,T);let q=As(R,T,z,b);a===0&&q>0&&(q-=tn),a===1&&q<0&&(q+=tn),f.centerX=_,f.centerY=F,f.ang1=C,f.ang2=q};function pc(n,t,e,i,r,s,o,a=0,l=0,h=0){if(s===0||o===0)return;const u=Math.sin(a*tn/360),c=Math.cos(a*tn/360),f=c*(t-i)/2+u*(e-r)/2,d=-u*(t-i)/2+c*(e-r)/2;if(f===0&&d===0)return;s=Math.abs(s),o=Math.abs(o);const p=Math.pow(f,2)/Math.pow(s,2)+Math.pow(d,2)/Math.pow(o,2);p>1&&(s*=Math.sqrt(p),o*=Math.sqrt(p)),dc(t,e,i,r,s,o,l,h,u,c,f,d,Fi);let{ang1:g,ang2:m}=Fi;const{centerX:x,centerY:v}=Fi;let y=Math.abs(m)/(tn/4);Math.abs(1-y)<1e-7&&(y=1);const _=Math.max(Math.ceil(y),1);m/=_;let F=n[n.length-2],R=n[n.length-1];const T={x:0,y:0};for(let z=0;z<_;z++){const b=fc(g,m),{x:C,y:q}=Ii(b[0],s,o,c,u,x,v,T),{x:bt,y:U}=Ii(b[1],s,o,c,u,x,v,T),{x:I,y:W}=Ii(b[2],s,o,c,u,x,v,T);Xo(n,F,R,C,q,bt,U,I,W),F=I,R=W,g+=m}}function mc(n,t,e){const i=(o,a)=>{const l=a.x-o.x,h=a.y-o.y,u=Math.sqrt(l*l+h*h),c=l/u,f=h/u;return{len:u,nx:c,ny:f}},r=(o,a)=>{o===0?n.moveTo(a.x,a.y):n.lineTo(a.x,a.y)};let s=t[t.length-1];for(let o=0;o<t.length;o++){const a=t[o%t.length],l=a.radius??e;if(l<=0){r(o,a),s=a;continue}const h=t[(o+1)%t.length],u=i(a,s),c=i(a,h);if(u.len<1e-4||c.len<1e-4){r(o,a),s=a;continue}let f=Math.asin(u.nx*c.ny-u.ny*c.nx),d=1,p=!1;u.nx*c.nx-u.ny*-c.ny<0?f<0?f=Math.PI+f:(f=Math.PI-f,d=-1,p=!0):f>0&&(d=-1,p=!0);const g=f/2;let m,x=Math.abs(Math.cos(g)*l/Math.sin(g));x>Math.min(u.len/2,c.len/2)?(x=Math.min(u.len/2,c.len/2),m=Math.abs(x*Math.sin(g)/Math.cos(g))):m=l;const v=a.x+c.nx*x+-c.ny*m*d,y=a.y+c.ny*x+c.nx*m*d,_=Math.atan2(u.ny,u.nx)+Math.PI/2*d,F=Math.atan2(c.ny,c.nx)-Math.PI/2*d;o===0&&n.moveTo(v+Math.cos(_)*m,y+Math.sin(_)*m),n.arc(v,y,m,_,F,p),s=a}}function gc(n,t,e,i){const r=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),s=(a,l,h)=>({x:a.x+(l.x-a.x)*h,y:a.y+(l.y-a.y)*h}),o=t.length;for(let a=0;a<o;a++){const l=t[(a+1)%o],h=l.radius??e;if(h<=0){a===0?n.moveTo(l.x,l.y):n.lineTo(l.x,l.y);continue}const u=t[a],c=t[(a+2)%o],f=r(u,l);let d;if(f<1e-4)d=l;else{const m=Math.min(f/2,h);d=s(l,u,m/f)}const p=r(c,l);let g;if(p<1e-4)g=l;else{const m=Math.min(p/2,h);g=s(l,c,m/p)}a===0?n.moveTo(d.x,d.y):n.lineTo(d.x,d.y),n.quadraticCurveTo(l.x,l.y,g.x,g.y,i)}}const xc=new it;class vc{constructor(t){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new Bt,this._graphicsPath2D=t}moveTo(t,e){return this.startPoly(t,e),this}lineTo(t,e){this._ensurePoly();const i=this._currentPoly.points,r=i[i.length-2],s=i[i.length-1];return(r!==t||s!==e)&&i.push(t,e),this}arc(t,e,i,r,s,o){this._ensurePoly(!1);const a=this._currentPoly.points;return Yo(a,t,e,i,r,s,o),this}arcTo(t,e,i,r,s){this._ensurePoly();const o=this._currentPoly.points;return cc(o,t,e,i,r,s),this}arcToSvg(t,e,i,r,s,o,a){const l=this._currentPoly.points;return pc(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,t,e,i,r,s),this}bezierCurveTo(t,e,i,r,s,o,a){this._ensurePoly();const l=this._currentPoly;return Xo(this._currentPoly.points,l.lastX,l.lastY,t,e,i,r,s,o,a),this}quadraticCurveTo(t,e,i,r,s){this._ensurePoly();const o=this._currentPoly;return uc(this._currentPoly.points,o.lastX,o.lastY,t,e,i,r,s),this}closePath(){return this.endPoly(!0),this}addPath(t,e){this.endPoly(),e&&!e.isIdentity()&&(t=t.clone(!0),t.transform(e));for(let i=0;i<t.instructions.length;i++){const r=t.instructions[i];this[r.action](...r.data)}return this}finish(t=!1){this.endPoly(t)}rect(t,e,i,r,s){return this.drawShape(new it(t,e,i,r),s),this}circle(t,e,i,r){return this.drawShape(new _r(t,e,i),r),this}poly(t,e,i){const r=new Je(t);return r.closePath=e,this.drawShape(r,i),this}regularPoly(t,e,i,r,s=0,o){r=Math.max(r|0,3);const a=-1*Math.PI/2+s,l=Math.PI*2/r,h=[];for(let u=0;u<r;u++){const c=u*l+a;h.push(t+i*Math.cos(c),e+i*Math.sin(c))}return this.poly(h,!0,o),this}roundPoly(t,e,i,r,s,o=0,a){if(r=Math.max(r|0,3),s<=0)return this.regularPoly(t,e,i,r,o);const l=i*Math.sin(Math.PI/r)-.001;s=Math.min(s,l);const h=-1*Math.PI/2+o,u=Math.PI*2/r,c=(r-2)*Math.PI/r/2;for(let f=0;f<r;f++){const d=f*u+h,p=t+i*Math.cos(d),g=e+i*Math.sin(d),m=d+Math.PI+c,x=d-Math.PI-c,v=p+s*Math.cos(m),y=g+s*Math.sin(m),_=p+s*Math.cos(x),F=g+s*Math.sin(x);f===0?this.moveTo(v,y):this.lineTo(v,y),this.quadraticCurveTo(p,g,_,F,a)}return this.closePath()}roundShape(t,e,i=!1,r){return t.length<3?this:(i?gc(this,t,e,r):mc(this,t,e),this.closePath())}filletRect(t,e,i,r,s){if(s===0)return this.rect(t,e,i,r);const o=Math.min(i,r)/2,a=Math.min(o,Math.max(-o,s)),l=t+i,h=e+r,u=a<0?-a:0,c=Math.abs(a);return this.moveTo(t,e+c).arcTo(t+u,e+u,t+c,e,c).lineTo(l-c,e).arcTo(l-u,e+u,l,e+c,c).lineTo(l,h-c).arcTo(l-u,h-u,t+i-c,h,c).lineTo(t+c,h).arcTo(t+u,h-u,t,h-c,c).closePath()}chamferRect(t,e,i,r,s,o){if(s<=0)return this.rect(t,e,i,r);const a=Math.min(s,Math.min(i,r)/2),l=t+i,h=e+r,u=[t+a,e,l-a,e,l,e+a,l,h-a,l-a,h,t+a,h,t,h-a,t,e+a];for(let c=u.length-1;c>=2;c-=2)u[c]===u[c-2]&&u[c-1]===u[c-3]&&u.splice(c-1,2);return this.poly(u,!0,o)}ellipse(t,e,i,r,s){return this.drawShape(new br(t,e,i,r),s),this}roundRect(t,e,i,r,s,o){return this.drawShape(new Sr(t,e,i,r,s),o),this}drawShape(t,e){return this.endPoly(),this.shapePrimitives.push({shape:t,transform:e}),this}startPoly(t,e){let i=this._currentPoly;return i&&this.endPoly(),i=new Je,i.points.push(t,e),this._currentPoly=i,this}endPoly(t=!1){const e=this._currentPoly;return e&&e.points.length>2&&(e.closePath=t,this.shapePrimitives.push({shape:e})),this._currentPoly=null,this}_ensurePoly(t=!0){if(!this._currentPoly&&(this._currentPoly=new Je,t)){const e=this.shapePrimitives[this.shapePrimitives.length-1];if(e){let i=e.shape.x,r=e.shape.y;if(!e.transform.isIdentity()){const s=e.transform,o=i;i=s.a*i+s.c*r+s.tx,r=s.b*o+s.d*r+s.ty}this._currentPoly.points.push(i,r)}else this._currentPoly.points.push(0,0)}}buildPath(){const t=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let e=0;e<t.instructions.length;e++){const i=t.instructions[e];this[i.action](...i.data)}this.finish()}get bounds(){const t=this._bounds;t.clear();const e=this.shapePrimitives;for(let i=0;i<e.length;i++){const r=e[i],s=r.shape.getBounds(xc);r.transform?t.addRect(s,r.transform):t.addRect(s)}return t}}class Ee{constructor(t){this.instructions=[],this.uid=rt("graphicsPath"),this._dirty=!0,typeof t=="string"?Fh(t,this):this.instructions=(t==null?void 0:t.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new vc(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(t,e){return t=t.clone(),this.instructions.push({action:"addPath",data:[t,e]}),this._dirty=!0,this}arc(...t){return this.instructions.push({action:"arc",data:t}),this._dirty=!0,this}arcTo(...t){return this.instructions.push({action:"arcTo",data:t}),this._dirty=!0,this}arcToSvg(...t){return this.instructions.push({action:"arcToSvg",data:t}),this._dirty=!0,this}bezierCurveTo(...t){return this.instructions.push({action:"bezierCurveTo",data:t}),this._dirty=!0,this}bezierCurveToShort(t,e,i,r,s){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(lt.shared);let l=0,h=0;if(!o||o.action!=="bezierCurveTo")l=a.x,h=a.y;else{l=o.data[2],h=o.data[3];const u=a.x,c=a.y;l=u+(u-l),h=c+(c-h)}return this.instructions.push({action:"bezierCurveTo",data:[l,h,t,e,i,r,s]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...t){return this.instructions.push({action:"ellipse",data:t}),this._dirty=!0,this}lineTo(...t){return this.instructions.push({action:"lineTo",data:t}),this._dirty=!0,this}moveTo(...t){return this.instructions.push({action:"moveTo",data:t}),this}quadraticCurveTo(...t){return this.instructions.push({action:"quadraticCurveTo",data:t}),this._dirty=!0,this}quadraticCurveToShort(t,e,i){const r=this.instructions[this.instructions.length-1],s=this.getLastPoint(lt.shared);let o=0,a=0;if(!r||r.action!=="quadraticCurveTo")o=s.x,a=s.y;else{o=r.data[0],a=r.data[1];const l=s.x,h=s.y;o=l+(l-o),a=h+(h-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,t,e,i]}),this._dirty=!0,this}rect(t,e,i,r,s){return this.instructions.push({action:"rect",data:[t,e,i,r,s]}),this._dirty=!0,this}circle(t,e,i,r){return this.instructions.push({action:"circle",data:[t,e,i,r]}),this._dirty=!0,this}roundRect(...t){return this.instructions.push({action:"roundRect",data:t}),this._dirty=!0,this}poly(...t){return this.instructions.push({action:"poly",data:t}),this._dirty=!0,this}regularPoly(...t){return this.instructions.push({action:"regularPoly",data:t}),this._dirty=!0,this}roundPoly(...t){return this.instructions.push({action:"roundPoly",data:t}),this._dirty=!0,this}roundShape(...t){return this.instructions.push({action:"roundShape",data:t}),this._dirty=!0,this}filletRect(...t){return this.instructions.push({action:"filletRect",data:t}),this._dirty=!0,this}chamferRect(...t){return this.instructions.push({action:"chamferRect",data:t}),this._dirty=!0,this}star(t,e,i,r,s,o,a){s=s||r/2;const l=-1*Math.PI/2+o,h=i*2,u=Math.PI*2/h,c=[];for(let f=0;f<h;f++){const d=f%2?s:r,p=f*u+l;c.push(t+d*Math.cos(p),e+d*Math.sin(p))}return this.poly(c,!0,a),this}clone(t=!1){const e=new Ee;if(!t)e.instructions=this.instructions.slice();else for(let i=0;i<this.instructions.length;i++){const r=this.instructions[i];e.instructions.push({action:r.action,data:r.data.slice()})}return e}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(t){if(t.isIdentity())return this;const e=t.a,i=t.b,r=t.c,s=t.d,o=t.tx,a=t.ty;let l=0,h=0,u=0,c=0,f=0,d=0,p=0,g=0;for(let m=0;m<this.instructions.length;m++){const x=this.instructions[m],v=x.data;switch(x.action){case"moveTo":case"lineTo":l=v[0],h=v[1],v[0]=e*l+r*h+o,v[1]=i*l+s*h+a;break;case"bezierCurveTo":u=v[0],c=v[1],f=v[2],d=v[3],l=v[4],h=v[5],v[0]=e*u+r*c+o,v[1]=i*u+s*c+a,v[2]=e*f+r*d+o,v[3]=i*f+s*d+a,v[4]=e*l+r*h+o,v[5]=i*l+s*h+a;break;case"quadraticCurveTo":u=v[0],c=v[1],l=v[2],h=v[3],v[0]=e*u+r*c+o,v[1]=i*u+s*c+a,v[2]=e*l+r*h+o,v[3]=i*l+s*h+a;break;case"arcToSvg":l=v[5],h=v[6],p=v[0],g=v[1],v[0]=e*p+r*g,v[1]=i*p+s*g,v[5]=e*l+r*h+o,v[6]=i*l+s*h+a;break;case"circle":v[4]=Xe(v[3],t);break;case"rect":v[4]=Xe(v[4],t);break;case"ellipse":v[8]=Xe(v[8],t);break;case"roundRect":v[5]=Xe(v[5],t);break;case"addPath":v[0].transform(t);break;case"poly":v[2]=Xe(v[2],t);break;default:ut("unknown transform action",x.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(t){let e=this.instructions.length-1,i=this.instructions[e];if(!i)return t.x=0,t.y=0,t;for(;i.action==="closePath";){if(e--,e<0)return t.x=0,t.y=0,t;i=this.instructions[e]}switch(i.action){case"moveTo":case"lineTo":t.x=i.data[0],t.y=i.data[1];break;case"quadraticCurveTo":t.x=i.data[2],t.y=i.data[3];break;case"bezierCurveTo":t.x=i.data[4],t.y=i.data[5];break;case"arc":case"arcToSvg":t.x=i.data[5],t.y=i.data[6];break;case"addPath":i.data[0].getLastPoint(t);break}return t}}function Xe(n,t){return n?n.prepend(t):t.clone()}function yc(n,t){if(typeof n=="string"){const i=document.createElement("div");i.innerHTML=n.trim(),n=i.querySelector("svg")}const e={context:t,path:new Ee};return jo(n,e,null,null),t}function jo(n,t,e,i){const r=n.children,{fillStyle:s,strokeStyle:o}=_c(n);s&&e?e={...e,...s}:s&&(e=s),o&&i?i={...i,...o}:o&&(i=o),t.context.fillStyle=e,t.context.strokeStyle=i;let a,l,h,u,c,f,d,p,g,m,x,v,y,_,F,R,T;switch(n.nodeName.toLowerCase()){case"path":_=n.getAttribute("d"),F=new Ee(_),t.context.path(F),e&&t.context.fill(),i&&t.context.stroke();break;case"circle":d=st(n,"cx",0),p=st(n,"cy",0),g=st(n,"r",0),t.context.ellipse(d,p,g,g),e&&t.context.fill(),i&&t.context.stroke();break;case"rect":a=st(n,"x",0),l=st(n,"y",0),R=st(n,"width",0),T=st(n,"height",0),m=st(n,"rx",0),x=st(n,"ry",0),m||x?t.context.roundRect(a,l,R,T,m||x):t.context.rect(a,l,R,T),e&&t.context.fill(),i&&t.context.stroke();break;case"ellipse":d=st(n,"cx",0),p=st(n,"cy",0),m=st(n,"rx",0),x=st(n,"ry",0),t.context.beginPath(),t.context.ellipse(d,p,m,x),e&&t.context.fill(),i&&t.context.stroke();break;case"line":h=st(n,"x1",0),u=st(n,"y1",0),c=st(n,"x2",0),f=st(n,"y2",0),t.context.beginPath(),t.context.moveTo(h,u),t.context.lineTo(c,f),i&&t.context.stroke();break;case"polygon":y=n.getAttribute("points"),v=y.match(/\d+/g).map(z=>parseInt(z,10)),t.context.poly(v,!0),e&&t.context.fill(),i&&t.context.stroke();break;case"polyline":y=n.getAttribute("points"),v=y.match(/\d+/g).map(z=>parseInt(z,10)),t.context.poly(v,!1),i&&t.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${n.nodeName}> elements unsupported`);break}}for(let z=0;z<r.length;z++)jo(r[z],t,e,i)}function st(n,t,e){const i=n.getAttribute(t);return i?Number(i):e}function _c(n){const t=n.getAttribute("style"),e={},i={};let r=!1,s=!1;if(t){const o=t.split(";");for(let a=0;a<o.length;a++){const l=o[a],[h,u]=l.split(":");switch(h){case"stroke":u!=="none"&&(e.color=Y.shared.setValue(u).toNumber(),s=!0);break;case"stroke-width":e.width=Number(u);break;case"fill":u!=="none"&&(r=!0,i.color=Y.shared.setValue(u).toNumber());break;case"fill-opacity":i.alpha=Number(u);break;case"stroke-opacity":e.alpha=Number(u);break;case"opacity":i.alpha=Number(u),e.alpha=Number(u);break}}}else{const o=n.getAttribute("stroke");o&&o!=="none"&&(s=!0,e.color=Y.shared.setValue(o).toNumber(),e.width=st(n,"stroke-width",1));const a=n.getAttribute("fill");a&&a!=="none"&&(r=!0,i.color=Y.shared.setValue(a).toNumber())}return{strokeStyle:s?e:null,fillStyle:r?i:null}}const qo=class Ji{constructor(t,e,i,r){this.uid=rt("fillGradient"),this.type="linear",this.gradientStops=[],this.x0=t,this.y0=e,this.x1=i,this.y1=r}addColorStop(t,e){return this.gradientStops.push({offset:t,color:Y.shared.setValue(e).toHex()}),this}buildLinearGradient(){const t=Ji.defaultTextureSize,{gradientStops:e}=this,i=at.get().createCanvas();i.width=t,i.height=t;const r=i.getContext("2d"),s=r.createLinearGradient(0,0,Ji.defaultTextureSize,1);for(let g=0;g<e.length;g++){const m=e[g];s.addColorStop(m.offset,m.color)}r.fillStyle=s,r.fillRect(0,0,t,t),this.texture=new k({source:new ke({resource:i,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:h}=this,u=new j,c=l-o,f=h-a,d=Math.sqrt(c*c+f*f),p=Math.atan2(f,c);u.translate(-o,-a),u.scale(1/t,1/t),u.rotate(-p),u.scale(256/d,1),this.transform=u}};qo.defaultTextureSize=256;let Ko=qo;const Ts={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class bc{constructor(t,e){this.uid=rt("fillPattern"),this.transform=new j,this.texture=t,this.transform.scale(1/t.frame.width,1/t.frame.height),e&&(t.source.style.addressModeU=Ts[e].addressModeU,t.source.style.addressModeV=Ts[e].addressModeV)}setTransform(t){const e=this.texture;this.transform.copyFrom(t),this.transform.invert(),this.transform.scale(1/e.frame.width,1/e.frame.height)}}function jt(n,t){var o;if(n==null)return null;let e,i;if(n!=null&&n.fill?(i=n.fill,e={...t,...n}):(i=n,e=t),Y.isColorLike(i)){const a=Y.shared.setValue(i??0);return{...e,color:a.toNumber(),alpha:a.alpha===1?e.alpha:a.alpha,texture:k.WHITE}}else if(i instanceof bc){const a=i;return{...e,color:16777215,texture:a.texture,matrix:a.transform,fill:e.fill??null}}else if(i instanceof Ko){const a=i;return a.buildLinearGradient(),{...e,color:16777215,texture:a.texture,matrix:a.transform}}const r={...t,...n};if(r.texture){if(r.texture!==k.WHITE){const l=((o=r.matrix)==null?void 0:o.invert())||new j;l.scale(1/r.texture.frame.width,1/r.texture.frame.height),r.matrix=l}const a=r.texture.source.style;a.addressMode==="clamp-to-edge"&&(a.addressMode="repeat")}const s=Y.shared.setValue(r.color);return r.alpha*=s.alpha,r.color=s.toNumber(),r.matrix=r.matrix?r.matrix.clone():null,r}const Sc=new lt,Ms=new j,Pr=class It extends Et{constructor(){super(...arguments),this.uid=rt("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new Ee,this._transform=new j,this._fillStyle={...It.defaultFillStyle},this._strokeStyle={...It.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new Bt,this._boundsDirty=!0}clone(){const t=new It;return t.batchMode=this.batchMode,t.instructions=this.instructions.slice(),t._activePath=this._activePath.clone(),t._transform=this._transform.clone(),t._fillStyle={...this._fillStyle},t._strokeStyle={...this._strokeStyle},t._stateStack=this._stateStack.slice(),t._bounds=this._bounds.clone(),t._boundsDirty=!0,t}get fillStyle(){return this._fillStyle}set fillStyle(t){this._fillStyle=jt(t,It.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(t){this._strokeStyle=jt(t,It.defaultStrokeStyle)}setFillStyle(t){return this._fillStyle=jt(t,It.defaultFillStyle),this}setStrokeStyle(t){return this._strokeStyle=jt(t,It.defaultStrokeStyle),this}texture(t,e,i,r,s,o){return this.instructions.push({action:"texture",data:{image:t,dx:i||0,dy:r||0,dw:s||t.frame.width,dh:o||t.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:e?Y.shared.setValue(e).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new Ee,this}fill(t,e){let i;const r=this.instructions[this.instructions.length-1];return this._tick===0&&r&&r.action==="stroke"?i=r.data.path:i=this._activePath.clone(),i?(t!=null&&(e!==void 0&&typeof t=="number"&&(O(Q,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),t={color:t,alpha:e}),this._fillStyle=jt(t,It.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:i}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:t,y:e}=this._activePath.getLastPoint(lt.shared);this._activePath.clear(),this._activePath.moveTo(t,e)}stroke(t){let e;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i&&i.action==="fill"?e=i.data.path:e=this._activePath.clone(),e?(t!=null&&(this._strokeStyle=jt(t,It.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:e}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let t=0;t<2;t++){const e=this.instructions[this.instructions.length-1-t],i=this._activePath.clone();if(e&&(e.action==="stroke"||e.action==="fill"))if(e.data.hole)e.data.hole.addPath(i);else{e.data.hole=i;break}}return this._initNextPathLocation(),this}arc(t,e,i,r,s,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*t+a.c*e+a.tx,a.b*t+a.d*e+a.ty,i,r,s,o),this}arcTo(t,e,i,r,s){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*i+o.c*r+o.tx,o.b*i+o.d*r+o.ty,s),this}arcToSvg(t,e,i,r,s,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(t,e,i,r,s,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(t,e,i,r,s,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*t+l.c*e+l.tx,l.b*t+l.d*e+l.ty,l.a*i+l.c*r+l.tx,l.b*i+l.d*r+l.ty,l.a*s+l.c*o+l.tx,l.b*s+l.d*o+l.ty,a),this}closePath(){var t;return this._tick++,(t=this._activePath)==null||t.closePath(),this}ellipse(t,e,i,r){return this._tick++,this._activePath.ellipse(t,e,i,r,this._transform.clone()),this}circle(t,e,i){return this._tick++,this._activePath.circle(t,e,i,this._transform.clone()),this}path(t){return this._tick++,this._activePath.addPath(t,this._transform.clone()),this}lineTo(t,e){this._tick++;const i=this._transform;return this._activePath.lineTo(i.a*t+i.c*e+i.tx,i.b*t+i.d*e+i.ty),this}moveTo(t,e){this._tick++;const i=this._transform,r=this._activePath.instructions,s=i.a*t+i.c*e+i.tx,o=i.b*t+i.d*e+i.ty;return r.length===1&&r[0].action==="moveTo"?(r[0].data[0]=s,r[0].data[1]=o,this):(this._activePath.moveTo(s,o),this)}quadraticCurveTo(t,e,i,r,s){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*i+o.c*r+o.tx,o.b*i+o.d*r+o.ty,s),this}rect(t,e,i,r){return this._tick++,this._activePath.rect(t,e,i,r,this._transform.clone()),this}roundRect(t,e,i,r,s){return this._tick++,this._activePath.roundRect(t,e,i,r,s,this._transform.clone()),this}poly(t,e){return this._tick++,this._activePath.poly(t,e,this._transform.clone()),this}regularPoly(t,e,i,r,s=0,o){return this._tick++,this._activePath.regularPoly(t,e,i,r,s,o),this}roundPoly(t,e,i,r,s,o){return this._tick++,this._activePath.roundPoly(t,e,i,r,s,o),this}roundShape(t,e,i,r){return this._tick++,this._activePath.roundShape(t,e,i,r),this}filletRect(t,e,i,r,s){return this._tick++,this._activePath.filletRect(t,e,i,r,s),this}chamferRect(t,e,i,r,s,o){return this._tick++,this._activePath.chamferRect(t,e,i,r,s,o),this}star(t,e,i,r,s=0,o=0){return this._tick++,this._activePath.star(t,e,i,r,s,o,this._transform.clone()),this}svg(t){return this._tick++,yc(t,this),this}restore(){const t=this._stateStack.pop();return t&&(this._transform=t.transform,this._fillStyle=t.fillStyle,this._strokeStyle=t.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(t){return this._transform.rotate(t),this}scale(t,e=t){return this._transform.scale(t,e),this}setTransform(t,e,i,r,s,o){return t instanceof j?(this._transform.set(t.a,t.b,t.c,t.d,t.tx,t.ty),this):(this._transform.set(t,e,i,r,s,o),this)}transform(t,e,i,r,s,o){return t instanceof j?(this._transform.append(t),this):(Ms.set(t,e,i,r,s,o),this._transform.append(Ms),this)}translate(t,e=t){return this._transform.translate(t,e),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const t=this._bounds;t.clear();for(let e=0;e<this.instructions.length;e++){const i=this.instructions[e],r=i.action;if(r==="fill"){const s=i.data;t.addBounds(s.path.bounds)}else if(r==="texture"){const s=i.data;t.addFrame(s.dx,s.dy,s.dx+s.dw,s.dy+s.dh,s.transform)}if(r==="stroke"){const s=i.data,o=s.style.width/2,a=s.path.bounds;t.addFrame(a.minX-o,a.minY-o,a.maxX+o,a.maxY+o)}}return t}containsPoint(t){var r;if(!this.bounds.containsPoint(t.x,t.y))return!1;const e=this.instructions;let i=!1;for(let s=0;s<e.length;s++){const o=e[s],a=o.data,l=a.path;if(!o.action||!l)continue;const h=a.style,u=l.shapePath.shapePrimitives;for(let c=0;c<u.length;c++){const f=u[c].shape;if(!h||!f)continue;const d=u[c].transform,p=d?d.applyInverse(t,Sc):t;o.action==="fill"?i=f.contains(p.x,p.y):i=f.strokeContains(p.x,p.y,h.width);const g=a.hole;if(g){const m=(r=g.shapePath)==null?void 0:r.shapePrimitives;if(m)for(let x=0;x<m.length;x++)m[x].shape.contains(p.x,p.y)&&(i=!1)}if(i)return!0}}return i}destroy(t=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const i=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(i),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(i)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};Pr.defaultFillStyle={color:16777215,alpha:1,texture:k.WHITE,matrix:null,fill:null};Pr.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:k.WHITE,matrix:null,fill:null};let Kt=Pr;function Ar(n,t=1){var i;const e=(i=Ue.RETINA_PREFIX)==null?void 0:i.exec(n);return e?parseFloat(e[1]):t}function Tr(n,t,e){n.label=e,n._sourceOrigin=e;const i=new k({source:n,label:e}),r=()=>{delete t.promiseCache[e],ft.has(e)&&ft.remove(e)};return i.source.once("destroy",()=>{t.promiseCache[e]&&(ut("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),i.once("destroy",()=>{n.destroyed||(ut("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),i}const Cc=".svg",wc="image/svg+xml",Pc={extension:{type:D.LoadParser,priority:me.Low},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(n){return Re(n,wc)||De(n,Cc)},async load(n,t,e){return t.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?Tc(n):Ac(n,t,e,this.config.crossOrigin)},unload(n){n.destroy(!0)}};async function Ac(n,t,e,i){var m,x,v;const s=await(await at.get().fetch(n)).blob(),o=URL.createObjectURL(s),a=new Image;a.src=o,a.crossOrigin=i,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),h=l.getContext("2d"),u=((m=t.data)==null?void 0:m.resolution)||Ar(n),c=((x=t.data)==null?void 0:x.width)??a.width,f=((v=t.data)==null?void 0:v.height)??a.height;l.width=c*u,l.height=f*u,h.drawImage(a,0,0,c*u,f*u);const{parseAsGraphicsContext:d,...p}=t.data,g=new ke({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:u,...p});return Tr(g,e,n)}async function Tc(n){const e=await(await at.get().fetch(n)).text(),i=new Kt;return i.svg(e),i}const Mc=`(function () {
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
`;let Fe=null,tr=class{constructor(){Fe||(Fe=URL.createObjectURL(new Blob([Mc],{type:"application/javascript"}))),this.worker=new Worker(Fe)}};tr.revokeObjectURL=function(){Fe&&(URL.revokeObjectURL(Fe),Fe=null)};const Fc=`(function () {
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
`;let Ie=null;class Zo{constructor(){Ie||(Ie=URL.createObjectURL(new Blob([Fc],{type:"application/javascript"}))),this.worker=new Worker(Ie)}}Zo.revokeObjectURL=function(){Ie&&(URL.revokeObjectURL(Ie),Ie=null)};let Fs=0,zi;class Ic{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(t=>{const{worker:e}=new tr;e.addEventListener("message",i=>{e.terminate(),tr.revokeObjectURL(),t(i.data)})}),this._isImageBitmapSupported)}loadImageBitmap(t){return this._run("loadImageBitmap",[t])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){zi===void 0&&(zi=navigator.hardwareConcurrency||4);let t=this._workerPool.pop();return!t&&this._createdWorkers<zi&&(this._createdWorkers++,t=new Zo().worker,t.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),t}_returnWorker(t){this._workerPool.push(t)}_complete(t){t.error!==void 0?this._resolveHash[t.uuid].reject(t.error):this._resolveHash[t.uuid].resolve(t.data),this._resolveHash[t.uuid]=null}async _run(t,e){await this._initWorkers();const i=new Promise((r,s)=>{this._queue.push({id:t,arguments:e,resolve:r,reject:s})});return this._next(),i}_next(){if(!this._queue.length)return;const t=this._getWorker();if(!t)return;const e=this._queue.pop(),i=e.id;this._resolveHash[Fs]={resolve:e.resolve,reject:e.reject},t.postMessage({data:e.arguments,uuid:Fs++,id:i})}}const Is=new Ic,zc=[".jpeg",".jpg",".png",".webp",".avif"],Bc=["image/jpeg","image/png","image/webp","image/avif"];async function Oc(n){const t=await at.get().fetch(n);if(!t.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${n}: ${t.status} ${t.statusText}`);const e=await t.blob();return await createImageBitmap(e)}const Qo={name:"loadTextures",extension:{type:D.LoadParser,priority:me.High},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(n){return Re(n,Bc)||De(n,zc)},async load(n,t,e){var s;let i=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Is.isImageBitmapSupported()?i=await Is.loadImageBitmap(n):i=await Oc(n):i=await new Promise(o=>{i=new Image,i.crossOrigin=this.config.crossOrigin,i.src=n,i.complete?o(i):i.onload=()=>{o(i)}});const r=new ke({resource:i,alphaMode:"premultiply-alpha-on-upload",resolution:((s=t.data)==null?void 0:s.resolution)||Ar(n),...t.data});return Tr(r,e,n)},unload(n){n.destroy(!0)}},Jo=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Ec=Jo.map(n=>`video/${n.substring(1)}`);function kc(n,t,e){e===void 0&&!t.startsWith("data:")?n.crossOrigin=Rc(t):e!==!1&&(n.crossOrigin=typeof e=="string"?e:"anonymous")}function Uc(n){return new Promise((t,e)=>{n.addEventListener("canplaythrough",i),n.addEventListener("error",r),n.load();function i(){s(),t()}function r(o){s(),e(o)}function s(){n.removeEventListener("canplaythrough",i),n.removeEventListener("error",r)}})}function Rc(n,t=globalThis.location){if(n.startsWith("data:"))return"";t=t||globalThis.location;const e=new URL(n,document.baseURI);return e.hostname!==t.hostname||e.port!==t.port||e.protocol!==t.protocol?"anonymous":""}const Dc={name:"loadVideo",extension:{type:D.LoadParser},config:null,test(n){const t=Re(n,Ec),e=De(n,Jo);return t||e},async load(n,t,e){var l,h;const i={...Tn.defaultOptions,resolution:((l=t.data)==null?void 0:l.resolution)||Ar(n),alphaMode:((h=t.data)==null?void 0:h.alphaMode)||await fo(),...t.data},r=document.createElement("video"),s={preload:i.autoLoad!==!1?"auto":void 0,"webkit-playsinline":i.playsinline!==!1?"":void 0,playsinline:i.playsinline!==!1?"":void 0,muted:i.muted===!0?"":void 0,loop:i.loop===!0?"":void 0,autoplay:i.autoPlay!==!1?"":void 0};Object.keys(s).forEach(u=>{const c=s[u];c!==void 0&&r.setAttribute(u,c)}),i.muted===!0&&(r.muted=!0),kc(r,n,i.crossorigin);const o=document.createElement("source");let a;if(n.startsWith("data:"))a=n.slice(5,n.indexOf(";"));else if(!n.startsWith("blob:")){const u=n.split("?")[0].slice(n.lastIndexOf(".")+1).toLowerCase();a=Tn.MIME_TYPES[u]||`video/${u}`}return o.src=n,a&&(o.type=a),new Promise(u=>{const c=async()=>{const f=new Tn({...i,resource:r});r.removeEventListener("canplay",c),t.data.preload&&await Uc(r),u(Tr(f,e,n))};r.addEventListener("canplay",c),r.appendChild(o)})},unload(n){n.destroy(!0)}},ta={extension:D.ResolveParser,test:Qo.test,parse:n=>{var t;return{resolution:parseFloat(((t=Ue.RETINA_PREFIX.exec(n))==null?void 0:t[1])??"1"),format:n.split(".").pop(),src:n}}},Lc={extension:D.ResolveParser,test:n=>Ue.RETINA_PREFIX.test(n)&&n.endsWith(".json"),parse:ta.parse};class Gc{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Ue,this.loader=new lh,this.cache=ft,this._backgroundLoader=new Ju(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(t={}){var s,o;if(this._initialized){ut("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,t.defaultSearchParams&&this.resolver.setDefaultSearchParams(t.defaultSearchParams),t.basePath&&(this.resolver.basePath=t.basePath),t.bundleIdentifier&&this.resolver.setBundleIdentifier(t.bundleIdentifier),t.manifest){let a=t.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const e=((s=t.texturePreference)==null?void 0:s.resolution)??1,i=typeof e=="number"?[e]:e,r=await this._detectFormats({preferredFormats:(o=t.texturePreference)==null?void 0:o.format,skipDetections:t.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:i}}),t.preferences&&this.setPreferences(t.preferences)}add(t){this.resolver.add(t)}async load(t,e){this._initialized||await this.init();const i=Nn(t),r=wt(t).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(h=>!this.resolver.hasKey(h))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),s=this.resolver.resolve(r),o=await this._mapLoadToResolve(s,e);return i?o[r[0]]:o}addBundle(t,e){this.resolver.addBundle(t,e)}async loadBundle(t,e){this._initialized||await this.init();let i=!1;typeof t=="string"&&(i=!0,t=[t]);const r=this.resolver.resolveBundle(t),s={},o=Object.keys(r);let a=0,l=0;const h=()=>{e==null||e(++a/l)},u=o.map(c=>{const f=r[c];return l+=Object.keys(f).length,this._mapLoadToResolve(f,h).then(d=>{s[c]=d})});return await Promise.all(u),i?s[t[0]]:s}async backgroundLoad(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolve(t);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolveBundle(t);Object.values(e).forEach(i=>{this._backgroundLoader.add(Object.values(i))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(t){if(typeof t=="string")return ft.get(t);const e={};for(let i=0;i<t.length;i++)e[i]=ft.get(t[i]);return e}async _mapLoadToResolve(t,e){const i=[...new Set(Object.values(t))];this._backgroundLoader.active=!1;const r=await this.loader.load(i,e);this._backgroundLoader.active=!0;const s={};return i.forEach(o=>{const a=r[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(h=>{s[h]=a}),ft.set(l,a)}),s}async unload(t){this._initialized||await this.init();const e=wt(t).map(r=>typeof r!="string"?r.src:r),i=this.resolver.resolve(e);await this._unloadFromResolved(i)}async unloadBundle(t){this._initialized||await this.init(),t=wt(t);const e=this.resolver.resolveBundle(t),i=Object.keys(e).map(r=>this._unloadFromResolved(e[r]));await Promise.all(i)}async _unloadFromResolved(t){const e=Object.values(t);e.forEach(i=>{ft.remove(i.src)}),await this.loader.unload(e)}async _detectFormats(t){let e=[];t.preferredFormats&&(e=Array.isArray(t.preferredFormats)?t.preferredFormats:[t.preferredFormats]);for(const i of t.detections)t.skipDetections||await i.test()?e=await i.add(e):t.skipDetections||(e=await i.remove(e));return e=e.filter((i,r)=>e.indexOf(i)===r),e}get detections(){return this._detections}setPreferences(t){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(i=>i in t).forEach(i=>{e.config[i]=t[i]})})}}const Nt=new Gc;_t.handleByList(D.LoadParser,Nt.loader.parsers).handleByList(D.ResolveParser,Nt.resolver.parsers).handleByList(D.CacheParser,Nt.cache.parsers).handleByList(D.DetectionParser,Nt.detections);_t.add(th,nh,eh,ah,rh,sh,oh,ch,ph,Sh,Pc,Qo,Dc,ta,Lc);const zs={loader:D.LoadParser,resolver:D.ResolveParser,cache:D.CacheParser,detection:D.DetectionParser};_t.handle(D.Asset,n=>{const t=n.ref;Object.entries(zs).filter(([e])=>!!t[e]).forEach(([e,i])=>_t.add(Object.assign(t[e],{extension:t[e].extension??i})))},n=>{const t=n.ref;Object.keys(zs).filter(e=>!!t[e]).forEach(e=>_t.remove(t[e]))});var Nc=`in vec2 aPosition;
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
`,$c=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,Bs=`struct GlobalFilterUniforms {
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
}`;const ea=class na extends ${constructor(t){t={...na.defaultOptions,...t};const e=L.from({vertex:{source:Bs,entryPoint:"mainVertex"},fragment:{source:Bs,entryPoint:"mainFragment"}}),i=G.from({vertex:Nc,fragment:$c,name:"alpha-filter"}),{alpha:r,...s}=t,o=new Co({uAlpha:{value:r,type:"f32"}});super({...s,gpuProgram:e,glProgram:i,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};ea.defaultOptions={alpha:1};let Wc=ea,Vc=0;class Hc{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,e,i){const r=new kt({...this.textureOptions,width:t,height:e,resolution:1,antialias:i,autoGarbageCollect:!0});return new k({source:r,label:`texturePool_${Vc++}`})}getOptimalTexture(t,e,i=1,r){let s=Math.ceil(t*i-1e-6),o=Math.ceil(e*i-1e-6);s=Rr(s),o=Rr(o);const a=(s<<17)+(o<<1)+(r?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(s,o,r)),l.source._resolution=i,l.source.width=s/i,l.source.height=o/i,l.source.pixelWidth=s,l.source.pixelHeight=o,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=e,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(t,e=!1){const i=t.source;return this.getOptimalTexture(t.width,t.height,i._resolution,e)}returnTexture(t){const e=this._poolKeyHash[t.uid];this._texturePool[e].push(t)}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const i=this._texturePool[e];if(i)for(let r=0;r<i.length;r++)i[r].destroy(!0)}this._texturePool={}}}const yt=new Hc,ia={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Xc=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function Yc(n){const t=ia[n],e=t.length;let i=Xc,r="";const s="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let o;for(let a=0;a<n;a++){let l=s.replace("%index%",a.toString());o=a,a>=e&&(o=n-a-1),l=l.replace("%value%",t[o].toString()),r+=l,r+=`
`}return i=i.replace("%blur%",r),i=i.replace("%size%",n.toString()),i}const jc=`
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
    }`;function qc(n,t){const e=Math.ceil(n/2);let i=jc,r="",s;t?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let o=0;o<n;o++){let a=s.replace("%index%",o.toString());a=a.replace("%sampleIndex%",`${o-(e-1)}.0`),r+=a,r+=`
`}return i=i.replace("%blur%",r),i=i.replace("%size%",n.toString()),i=i.replace("%dimension%",t?"z":"w"),i}function Kc(n,t){const e=qc(t,n),i=Yc(t);return G.from({vertex:e,fragment:i,name:`blur-${n?"horizontal":"vertical"}-pass-filter`})}var Zc=`

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
}`;function Qc(n,t){const e=ia[t],i=e.length,r=[],s=[],o=[];for(let c=0;c<t;c++){r[c]=`@location(${c}) offset${c}: vec2<f32>,`,n?s[c]=`filteredCord + vec2(${c-i+1} * strength, 0.0),`:s[c]=`filteredCord + vec2(0.0, ${c-i+1} * strength),`;const f=c<i?c:t-c-1,d=e[f].toString();o[c]=`finalColor += textureSample(uTexture, uSampler, offset${c}) * ${d};`}const a=r.join(`
`),l=s.join(`
`),h=o.join(`
`),u=Zc.replace("%blur-struct%",a).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",a).replace("%blur-sampling%",h);return L.from({vertex:{source:u,entryPoint:"mainVertex"},fragment:{source:u,entryPoint:"mainFragment"}})}const ra=class sa extends ${constructor(t){t={...sa.defaultOptions,...t};const e=Kc(t.horizontal,t.kernelSize),i=Qc(t.horizontal,t.kernelSize);super({glProgram:e,gpuProgram:i,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,e,i,r){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,e,i,r);else{const s=yt.getSameSizeTexture(e);let o=e,a=s;this._state.blend=!1;for(let l=0;l<this.passes-1;l++){t.applyFilter(this,o,a,t.renderer.type===$n.WEBGPU);const h=a;a=o,o=h}this._state.blend=!0,t.applyFilter(this,o,i,r),yt.returnTexture(s)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};ra.defaultOptions={strength:8,quality:4,kernelSize:5};let Os=ra;class ht extends N{constructor(t){t instanceof Kt&&(t={context:t});const{context:e,roundPixels:i,...r}=t||{};super({label:"Graphics",...r}),this.canBundle=!0,this.renderPipeId="graphics",this._roundPixels=0,e?this._context=e:this._context=this._ownedContext=new Kt,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=i??!1}set context(t){t!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=t,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(t){t.addBounds(this._context.bounds)}containsPoint(t){return this._context.containsPoint(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}onViewUpdate(){if(this._didChangeId+=4096,this._didGraphicsUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){this._ownedContext&&!t?this._ownedContext.destroy(t):(t===!0||(t==null?void 0:t.context)===!0)&&this._context.destroy(t),this._ownedContext=null,this._context=null,super.destroy(t)}_callContextMethod(t,e){return this.context[t](...e),this}setFillStyle(...t){return this._callContextMethod("setFillStyle",t)}setStrokeStyle(...t){return this._callContextMethod("setStrokeStyle",t)}fill(...t){return this._callContextMethod("fill",t)}stroke(...t){return this._callContextMethod("stroke",t)}texture(...t){return this._callContextMethod("texture",t)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...t){return this._callContextMethod("arc",t)}arcTo(...t){return this._callContextMethod("arcTo",t)}arcToSvg(...t){return this._callContextMethod("arcToSvg",t)}bezierCurveTo(...t){return this._callContextMethod("bezierCurveTo",t)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...t){return this._callContextMethod("ellipse",t)}circle(...t){return this._callContextMethod("circle",t)}path(...t){return this._callContextMethod("path",t)}lineTo(...t){return this._callContextMethod("lineTo",t)}moveTo(...t){return this._callContextMethod("moveTo",t)}quadraticCurveTo(...t){return this._callContextMethod("quadraticCurveTo",t)}rect(...t){return this._callContextMethod("rect",t)}roundRect(...t){return this._callContextMethod("roundRect",t)}poly(...t){return this._callContextMethod("poly",t)}regularPoly(...t){return this._callContextMethod("regularPoly",t)}roundPoly(...t){return this._callContextMethod("roundPoly",t)}roundShape(...t){return this._callContextMethod("roundShape",t)}filletRect(...t){return this._callContextMethod("filletRect",t)}chamferRect(...t){return this._callContextMethod("chamferRect",t)}star(...t){return this._callContextMethod("star",t)}svg(...t){return this._callContextMethod("svg",t)}restore(...t){return this._callContextMethod("restore",t)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...t){return this._callContextMethod("rotate",t)}scaleTransform(...t){return this._callContextMethod("scale",t)}setTransform(...t){return this._callContextMethod("setTransform",t)}transform(...t){return this._callContextMethod("transform",t)}translateTransform(...t){return this._callContextMethod("translate",t)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(t){this._context.fillStyle=t}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(t){this._context.strokeStyle=t}clone(t=!1){return t?new ht(this._context.clone()):(this._ownedContext=null,new ht(this._context))}lineStyle(t,e,i){O(Q,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const r={};return t&&(r.width=t),e&&(r.color=e),i&&(r.alpha=i),this.context.strokeStyle=r,this}beginFill(t,e){O(Q,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const i={};return t&&(i.color=t),e&&(i.alpha=e),this.context.fillStyle=i,this}endFill(){O(Q,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const t=this.context.strokeStyle;return(t.width!==Kt.defaultStrokeStyle.width||t.color!==Kt.defaultStrokeStyle.color||t.alpha!==Kt.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...t){return O(Q,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",t)}drawEllipse(...t){return O(Q,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",t)}drawPolygon(...t){return O(Q,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",t)}drawRect(...t){return O(Q,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",t)}drawRoundedRect(...t){return O(Q,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",t)}drawStar(...t){return O(Q,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",t)}}const oa=class aa extends Ro{constructor(...t){let e=t[0]??{};e instanceof Float32Array&&(O(Q,"use new MeshGeometry({ positions, uvs, indices }) instead"),e={positions:e,uvs:t[1],indices:t[2]}),e={...aa.defaultOptions,...e};const i=e.positions||new Float32Array([0,0,1,0,1,1,0,1]),r=e.uvs||new Float32Array([0,0,1,0,1,1,0,1]),s=e.indices||new Uint32Array([0,1,2,0,2,3]),o=e.shrinkBuffersToFit,a=new Zt({data:i,label:"attribute-mesh-positions",shrinkToFit:o,usage:nt.VERTEX|nt.COPY_DST}),l=new Zt({data:r,label:"attribute-mesh-uvs",shrinkToFit:o,usage:nt.VERTEX|nt.COPY_DST}),h=new Zt({data:s,label:"index-mesh-buffer",shrinkToFit:o,usage:nt.INDEX|nt.COPY_DST});super({attributes:{aPosition:{buffer:a,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:l,format:"float32x2",stride:2*4,offset:0}},indexBuffer:h,topology:e.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(t){this.attributes.aPosition.buffer.data=t}get uvs(){return this.attributes.aUV.buffer.data}set uvs(t){this.attributes.aUV.buffer.data=t}get indices(){return this.indexBuffer.data}set indices(t){this.indexBuffer.data=t}};oa.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let Jc=oa;class on extends Pt{constructor(t,e=!0){super(t[0]instanceof k?t[0]:t[0].texture),this._textures=null,this._durations=null,this._autoUpdate=e,this._isConnectedToTicker=!1,this.animationSpeed=1,this.loop=!0,this.updateAnchor=!1,this.onComplete=null,this.onFrameChange=null,this.onLoop=null,this._currentTime=0,this._playing=!1,this._previousFrame=null,this.textures=t}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Gt.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Gt.shared.add(this.update,this,Gn.HIGH),this._isConnectedToTicker=!0))}gotoAndStop(t){this.stop(),this.currentFrame=t}gotoAndPlay(t){this.currentFrame=t,this.play()}update(t){if(!this._playing)return;const e=t.deltaTime,i=this.animationSpeed*e,r=this.currentFrame;if(this._durations!==null){let s=this._currentTime%1*this._durations[this.currentFrame];for(s+=i/60*1e3;s<0;)this._currentTime--,s+=this._durations[this.currentFrame];const o=Math.sign(this.animationSpeed*e);for(this._currentTime=Math.floor(this._currentTime);s>=this._durations[this.currentFrame];)s-=this._durations[this.currentFrame]*o,this._currentTime+=o;this._currentTime+=s/this._durations[this.currentFrame]}else this._currentTime+=i;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):r!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<r||this.animationSpeed<0&&this.currentFrame>r)&&this.onLoop(),this._updateTexture())}_updateTexture(){const t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this.texture=this._textures[t],this.updateAnchor&&this.anchor.copyFrom(this.texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))}destroy(){this.stop(),super.destroy(),this.onComplete=null,this.onFrameChange=null,this.onLoop=null}static fromFrames(t){const e=[];for(let i=0;i<t.length;++i)e.push(k.from(t[i]));return new on(e)}static fromImages(t){const e=[];for(let i=0;i<t.length;++i)e.push(k.from(t[i]));return new on(e)}get totalFrames(){return this._textures.length}get textures(){return this._textures}set textures(t){if(t[0]instanceof k)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(let e=0;e<t.length;e++)this._textures.push(t[e].texture),this._durations.push(t[e].time)}this._previousFrame=null,this.gotoAndStop(0),this._updateTexture()}get currentFrame(){let t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t}set currentFrame(t){if(t<0||t>this.totalFrames-1)throw new Error(`[AnimatedSprite]: Invalid frame index value ${t}, expected to be between 0 and totalFrames ${this.totalFrames}.`);const e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this._updateTexture()}get playing(){return this._playing}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(Gt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Gt.shared.add(this.update,this),this._isConnectedToTicker=!0))}}class tf extends N{constructor(t,e){const{text:i,resolution:r,style:s,anchor:o,width:a,height:l,roundPixels:h,...u}=t;super({...u}),this.batched=!0,this.resolution=null,this._didTextUpdate=!0,this._roundPixels=0,this._bounds=new Bt,this._boundsDirty=!0,this._styleClass=e,this.text=i??"",this.style=s,this.resolution=r??null,this.allowChildren=!1,this._anchor=new ct({_onUpdate:()=>{this.onViewUpdate()}}),o&&(this.anchor=o),this.roundPixels=h??!1,a&&(this.width=a),l&&(this.height=l)}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}set text(t){t=t.toString(),this._text!==t&&(this._text=t,this.onViewUpdate())}get text(){return this._text}get style(){return this._style}set style(t){var e;t=t||{},(e=this._style)==null||e.off("update",this.onViewUpdate,this),t instanceof this._styleClass?this._style=t:this._style=new this._styleClass(t),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(t){this._setWidth(t,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(t){this._setHeight(t,this.bounds.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this.bounds.width,t.height=Math.abs(this.scale.y)*this.bounds.height,t}setSize(t,e){let i,r;typeof t!="object"?(i=t,r=e??t):(i=t.width,r=t.height??t.width),i!==void 0&&this._setWidth(i,this.bounds.width),r!==void 0&&this._setHeight(r,this.bounds.height)}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}containsPoint(t){const e=this.bounds.maxX,i=this.bounds.maxY,r=-e*this.anchor.x;let s=0;return t.x>=r&&t.x<=r+e&&(s=-i*this.anchor.y,t.y>=s&&t.y<=s+i)}onViewUpdate(){if(this._didChangeId+=4096,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0,this._didTextUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}_getKey(){return`${this.text}:${this._style.styleKey}`}destroy(t=!1){super.destroy(t),this.owner=null,this._bounds=null,this._anchor=null,(typeof t=="boolean"?t:t!=null&&t.style)&&this._style.destroy(t),this._style=null,this._text=null}}function ef(n,t){let e=n[0]??{};return(typeof e=="string"||n[1])&&(O(Q,`use new ${t}({ text: "hi!", style }) instead`),e={text:e,style:n[1]}),e}const nf=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function rf(n){const t=typeof n.fontSize=="number"?`${n.fontSize}px`:n.fontSize;let e=n.fontFamily;Array.isArray(n.fontFamily)||(e=n.fontFamily.split(","));for(let i=e.length-1;i>=0;i--){let r=e[i].trim();!/([\"\'])[^\'\"]+\1/.test(r)&&!nf.includes(r)&&(r=`"${r}"`),e[i]=r}return`${n.fontStyle} ${n.fontVariant} ${n.fontWeight} ${t} ${e.join(",")}`}const Bi={willReadFrequently:!0},Tt=class M{static get experimentalLetterSpacingSupported(){let t=M._experimentalLetterSpacingSupported;if(t!==void 0){const e=at.get().getCanvasRenderingContext2D().prototype;t=M._experimentalLetterSpacingSupported="letterSpacing"in e||"textLetterSpacing"in e}return t}constructor(t,e,i,r,s,o,a,l,h){this.text=t,this.style=e,this.width=i,this.height=r,this.lines=s,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=h}static measureText(t=" ",e,i=M._canvas,r=e.wordWrap){var v;const s=`${t}:${e.styleKey}`;if(M._measurementCache[s])return M._measurementCache[s];const o=rf(e),a=M.measureFont(o);a.fontSize===0&&(a.fontSize=e.fontSize,a.ascent=e.fontSize);const l=M.__context;l.font=o;const u=(r?M._wordWrap(t,e,i):t).split(/(?:\r\n|\r|\n)/),c=new Array(u.length);let f=0;for(let y=0;y<u.length;y++){const _=M._measureText(u[y],e.letterSpacing,l);c[y]=_,f=Math.max(f,_)}const d=((v=e._stroke)==null?void 0:v.width)||0;let p=f+d;e.dropShadow&&(p+=e.dropShadow.distance);const g=e.lineHeight||a.fontSize+d;let m=Math.max(g,a.fontSize+d*2)+(u.length-1)*(g+e.leading);return e.dropShadow&&(m+=e.dropShadow.distance),new M(t,e,p,m,u,c,g+e.leading,f,a)}static _measureText(t,e,i){let r=!1;M.experimentalLetterSpacingSupported&&(M.experimentalLetterSpacing?(i.letterSpacing=`${e}px`,i.textLetterSpacing=`${e}px`,r=!0):(i.letterSpacing="0px",i.textLetterSpacing="0px"));let s=i.measureText(t).width;return s>0&&(r?s-=e:s+=(M.graphemeSegmenter(t).length-1)*e),s}static _wordWrap(t,e,i=M._canvas){const r=i.getContext("2d",Bi);let s=0,o="",a="";const l=Object.create(null),{letterSpacing:h,whiteSpace:u}=e,c=M._collapseSpaces(u),f=M._collapseNewlines(u);let d=!c;const p=e.wordWrapWidth+h,g=M._tokenize(t);for(let m=0;m<g.length;m++){let x=g[m];if(M._isNewline(x)){if(!f){a+=M._addLine(o),d=!c,o="",s=0;continue}x=" "}if(c){const y=M.isBreakingSpace(x),_=M.isBreakingSpace(o[o.length-1]);if(y&&_)continue}const v=M._getFromCache(x,h,l,r);if(v>p)if(o!==""&&(a+=M._addLine(o),o="",s=0),M.canBreakWords(x,e.breakWords)){const y=M.wordWrapSplit(x);for(let _=0;_<y.length;_++){let F=y[_],R=F,T=1;for(;y[_+T];){const b=y[_+T];if(!M.canBreakChars(R,b,x,_,e.breakWords))F+=b;else break;R=b,T++}_+=T-1;const z=M._getFromCache(F,h,l,r);z+s>p&&(a+=M._addLine(o),d=!1,o="",s=0),o+=F,s+=z}}else{o.length>0&&(a+=M._addLine(o),o="",s=0);const y=m===g.length-1;a+=M._addLine(x,!y),d=!1,o="",s=0}else v+s>p&&(d=!1,a+=M._addLine(o),o="",s=0),(o.length>0||!M.isBreakingSpace(x)||d)&&(o+=x,s+=v)}return a+=M._addLine(o,!1),a}static _addLine(t,e=!0){return t=M._trimRight(t),t=e?`${t}
`:t,t}static _getFromCache(t,e,i,r){let s=i[t];return typeof s!="number"&&(s=M._measureText(t,e,r)+e,i[t]=s),s}static _collapseSpaces(t){return t==="normal"||t==="pre-line"}static _collapseNewlines(t){return t==="normal"}static _trimRight(t){if(typeof t!="string")return"";for(let e=t.length-1;e>=0;e--){const i=t[e];if(!M.isBreakingSpace(i))break;t=t.slice(0,-1)}return t}static _isNewline(t){return typeof t!="string"?!1:M._newlines.includes(t.charCodeAt(0))}static isBreakingSpace(t,e){return typeof t!="string"?!1:M._breakingSpaces.includes(t.charCodeAt(0))}static _tokenize(t){const e=[];let i="";if(typeof t!="string")return e;for(let r=0;r<t.length;r++){const s=t[r],o=t[r+1];if(M.isBreakingSpace(s,o)||M._isNewline(s)){i!==""&&(e.push(i),i=""),e.push(s);continue}i+=s}return i!==""&&e.push(i),e}static canBreakWords(t,e){return e}static canBreakChars(t,e,i,r,s){return!0}static wordWrapSplit(t){return M.graphemeSegmenter(t)}static measureFont(t){if(M._fonts[t])return M._fonts[t];const e=M._context;e.font=t;const i=e.measureText(M.METRICS_STRING+M.BASELINE_SYMBOL),r={ascent:i.actualBoundingBoxAscent,descent:i.actualBoundingBoxDescent,fontSize:i.actualBoundingBoxAscent+i.actualBoundingBoxDescent};return M._fonts[t]=r,r}static clearMetrics(t=""){t?delete M._fonts[t]:M._fonts={}}static get _canvas(){if(!M.__canvas){let t;try{const e=new OffscreenCanvas(0,0),i=e.getContext("2d",Bi);if(i!=null&&i.measureText)return M.__canvas=e,e;t=at.get().createCanvas()}catch{t=at.get().createCanvas()}t.width=t.height=10,M.__canvas=t}return M.__canvas}static get _context(){return M.__context||(M.__context=M._canvas.getContext("2d",Bi)),M.__context}};Tt.METRICS_STRING="|ÉqÅ";Tt.BASELINE_SYMBOL="M";Tt.BASELINE_MULTIPLIER=1.4;Tt.HEIGHT_MULTIPLIER=2;Tt.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const n=new Intl.Segmenter;return t=>[...n.segment(t)].map(e=>e.segment)}return n=>[...n]})();Tt.experimentalLetterSpacing=!1;Tt._fonts={};Tt._newlines=[10,13];Tt._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];Tt._measurementCache={};let sf=Tt;const Es=["_fontFamily","_fontStyle","_fontSize","_fontVariant","_fontWeight","_breakWords","_align","_leading","_letterSpacing","_lineHeight","_textBaseline","_whiteSpace","_wordWrap","_wordWrapWidth","_padding","_cssOverrides","_trim"];function of(n){const t=[];let e=0;for(let i=0;i<Es.length;i++){const r=Es[i];t[e++]=n[r]}return e=la(n._fill,t,e),e=af(n._stroke,t,e),t.join("-")}function la(n,t,e){var i;return n&&(t[e++]=n.color,t[e++]=n.alpha,t[e++]=(i=n.fill)==null?void 0:i.uid),e}function af(n,t,e){return n&&(e=la(n,t,e),t[e++]=n.width,t[e++]=n.alignment,t[e++]=n.cap,t[e++]=n.join,t[e++]=n.miterLimit),e}const Mr=class Se extends Et{constructor(t={}){super(),lf(t);const e={...Se.defaultTextStyle,...t};for(const i in e){const r=i;this[r]=e[i]}this.update()}get align(){return this._align}set align(t){this._align=t,this.update()}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords=t,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(t){t!==null&&typeof t=="object"?this._dropShadow={...Se.defaultDropShadow,...t}:this._dropShadow=t?{...Se.defaultDropShadow}:null,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily=t,this.update()}get fontSize(){return this._fontSize}set fontSize(t){typeof t=="string"?this._fontSize=parseInt(t,10):this._fontSize=t,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle=t,this.update()}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant=t,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight=t,this.update()}get leading(){return this._leading}set leading(t){this._leading=t,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing=t,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight=t,this.update()}get padding(){return this._padding}set padding(t){this._padding=t,this.update()}get trim(){return this._trim}set trim(t){this._trim=t,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline=t,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace=t,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap=t,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth=t,this.update()}get fill(){return this._originalFill}set fill(t){t!==this._originalFill&&(this._originalFill=t,this._fill=jt(t===0?"black":t,Kt.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(t){t!==this._originalStroke&&(this._originalStroke=t,this._stroke=jt(t,Kt.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=of(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}reset(){const t=Se.defaultTextStyle;for(const e in t)this[e]=t[e]}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new Se({align:this.align,breakWords:this.breakWords,dropShadow:this.dropShadow,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(t=!1){var i,r,s,o;if(this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const a=typeof t=="boolean"?t:t==null?void 0:t.textureSource;(i=this._fill)!=null&&i.texture&&this._fill.texture.destroy(a),(r=this._originalFill)!=null&&r.texture&&this._originalFill.texture.destroy(a),(s=this._stroke)!=null&&s.texture&&this._stroke.texture.destroy(a),(o=this._originalStroke)!=null&&o.texture&&this._originalStroke.texture.destroy(a)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}};Mr.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};Mr.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let ua=Mr;function lf(n){const t=n;if(typeof t.dropShadow=="boolean"&&t.dropShadow){const e=ua.defaultDropShadow;n.dropShadow={alpha:t.dropShadowAlpha??e.alpha,angle:t.dropShadowAngle??e.angle,blur:t.dropShadowBlur??e.blur,color:t.dropShadowColor??e.color,distance:t.dropShadowDistance??e.distance}}if(t.strokeThickness!==void 0){O(Q,"strokeThickness is now a part of stroke");const e=t.stroke;n.stroke={color:e,width:t.strokeThickness}}if(Array.isArray(t.fill)){O(Q,"gradient fill is now a fill pattern: `new FillGradient(...)`");const e=new Ko(0,0,0,n.fontSize*1.7),i=t.fill.map(r=>Y.shared.setValue(r).toNumber());i.forEach((r,s)=>{const o=t.fillGradientStops[s]??s/i.length;e.addColorStop(o,r)}),n.fill={fill:e}}}class uf extends tf{constructor(...t){const e=ef(t,"Text");super(e,ua),this.renderPipeId="text"}_updateBounds(){const t=this._bounds,e=this._style.padding,i=this._anchor,r=sf.measureText(this._text,this._style),{width:s,height:o}=r;t.minX=-i._x*s-e,t.maxX=t.minX+s+e*2,t.minY=-i._y*o-e,t.maxY=t.minY+o+e*2}}const ha=class ca extends Jc{constructor(...t){super({});let e=t[0]??{};typeof e=="number"&&(O(Q,"PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"),e={width:e,height:t[1],verticesX:t[2],verticesY:t[3]}),this.build(e)}build(t){t={...ca.defaultOptions,...t},this.verticesX=this.verticesX??t.verticesX,this.verticesY=this.verticesY??t.verticesY,this.width=this.width??t.width,this.height=this.height??t.height;const e=this.verticesX*this.verticesY,i=[],r=[],s=[],o=this.verticesX-1,a=this.verticesY-1,l=this.width/o,h=this.height/a;for(let c=0;c<e;c++){const f=c%this.verticesX,d=c/this.verticesX|0;i.push(f*l,d*h),r.push(f/o,d/a)}const u=o*a;for(let c=0;c<u;c++){const f=c%o,d=c/o|0,p=d*this.verticesX+f,g=d*this.verticesX+f+1,m=(d+1)*this.verticesX+f,x=(d+1)*this.verticesX+f+1;s.push(p,g,m,g,x,m)}this.buffers[0].data=new Float32Array(i),this.buffers[1].data=new Float32Array(r),this.indexBuffer.data=new Uint32Array(s),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}};ha.defaultOptions={width:100,height:100,verticesX:10,verticesY:10};let hf=ha;const fa=class da extends hf{constructor(t={}){t={...da.defaultOptions,...t},super({width:t.width,height:t.height,verticesX:4,verticesY:4}),this.update(t)}update(t){this.width=t.width??this.width,this.height=t.height??this.height,this._originalWidth=t.originalWidth??this._originalWidth,this._originalHeight=t.originalHeight??this._originalHeight,this._leftWidth=t.leftWidth??this._leftWidth,this._rightWidth=t.rightWidth??this._rightWidth,this._topHeight=t.topHeight??this._topHeight,this._bottomHeight=t.bottomHeight??this._bottomHeight,this.updateUvs(),this.updatePositions()}updatePositions(){const t=this.positions,e=this._leftWidth+this._rightWidth,i=this.width>e?1:this.width/e,r=this._topHeight+this._bottomHeight,s=this.height>r?1:this.height/r,o=Math.min(i,s);t[9]=t[11]=t[13]=t[15]=this._topHeight*o,t[17]=t[19]=t[21]=t[23]=this.height-this._bottomHeight*o,t[25]=t[27]=t[29]=t[31]=this.height,t[2]=t[10]=t[18]=t[26]=this._leftWidth*o,t[4]=t[12]=t[20]=t[28]=this.width-this._rightWidth*o,t[6]=t[14]=t[22]=t[30]=this.width,this.getBuffer("aPosition").update()}updateUvs(){const t=this.uvs;t[0]=t[8]=t[16]=t[24]=0,t[1]=t[3]=t[5]=t[7]=0,t[6]=t[14]=t[22]=t[30]=1,t[25]=t[27]=t[29]=t[31]=1;const e=1/this._originalWidth,i=1/this._originalHeight;t[2]=t[10]=t[18]=t[26]=e*this._leftWidth,t[9]=t[11]=t[13]=t[15]=i*this._topHeight,t[4]=t[12]=t[20]=t[28]=1-e*this._rightWidth,t[17]=t[19]=t[21]=t[23]=1-i*this._bottomHeight,this.getBuffer("aUV").update()}};fa.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100};let ye=fa;const pa=class ma extends N{constructor(t){var c,f,d,p;t instanceof k&&(t={texture:t});const{width:e,height:i,leftWidth:r,rightWidth:s,topHeight:o,bottomHeight:a,texture:l,roundPixels:h,...u}=t;super({label:"NineSliceSprite",...u}),this._roundPixels=0,this.renderPipeId="nineSliceSprite",this.batched=!0,this._didSpriteUpdate=!0,this.bounds={minX:0,minY:0,maxX:0,maxY:0},this._leftWidth=r??((c=l==null?void 0:l.defaultBorders)==null?void 0:c.left)??ye.defaultOptions.leftWidth,this._topHeight=o??((f=l==null?void 0:l.defaultBorders)==null?void 0:f.top)??ye.defaultOptions.topHeight,this._rightWidth=s??((d=l==null?void 0:l.defaultBorders)==null?void 0:d.right)??ye.defaultOptions.rightWidth,this._bottomHeight=a??((p=l==null?void 0:l.defaultBorders)==null?void 0:p.bottom)??ye.defaultOptions.bottomHeight,this.bounds.maxX=this._width=e??l.width??ye.defaultOptions.width,this.bounds.maxY=this._height=i??l.height??ye.defaultOptions.height,this.allowChildren=!1,this.texture=l??ma.defaultOptions.texture,this.roundPixels=h??!1}get width(){return this._width}set width(t){this.bounds.maxX=this._width=t,this.onViewUpdate()}get height(){return this._height}set height(t){this.bounds.maxY=this._height=t,this.onViewUpdate()}get leftWidth(){return this._leftWidth}set leftWidth(t){this._leftWidth=t,this.onViewUpdate()}get topHeight(){return this._topHeight}set topHeight(t){this._topHeight=t,this.onViewUpdate()}get rightWidth(){return this._rightWidth}set rightWidth(t){this._rightWidth=t,this.onViewUpdate()}get bottomHeight(){return this._bottomHeight}set bottomHeight(t){this._bottomHeight=t,this.onViewUpdate()}get texture(){return this._texture}set texture(t){t||(t=k.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}get originalWidth(){return this._texture.width}get originalHeight(){return this._texture.height}onViewUpdate(){if(this._didChangeId+=4096,this._didSpriteUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}containsPoint(t){const e=this.bounds;return t.x>=e.minX&&t.x<=e.maxX&&t.y>=e.minY&&t.y<=e.maxY}destroy(t){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const i=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(i)}this._texture=null,this.bounds=null}};pa.defaultOptions={texture:k.EMPTY};let In=pa;_t.add(dl,pl);const ks={bundles:[{name:"background",assets:{background01:"backgrounds/background01.png",ground01:"backgrounds/ground01.png",clouds01:"backgrounds/clouds01.png",mountain01:"backgrounds/mountain01.png",trees01:"backgrounds/trees01.png",komnata1:"backgrounds/komnata1.png"}},{name:"buildings",assets:{buildings:"buildings/buildings.json"}},{name:"testBundle",assets:{displacement:"https://pixijs.com/assets/tutorials/fish-pond/displacement_map.png"}},{name:"fonts",assets:{tiny:"fonts/tiny.ttf"}}]};var qt={},Qt={};Object.defineProperty(Qt,"__esModule",{value:!0});Qt.Collector=void 0;class cf{constructor(t){this.emit=(...e)=>{t.emitCollecting(this,e)}}}Qt.Collector=cf;var Xn={};Object.defineProperty(Xn,"__esModule",{value:!0});Xn.CollectorArray=void 0;const ff=Qt;class df extends ff.Collector{constructor(){super(...arguments),this.result=[]}handleResult(t){return this.result.push(t),!0}getResult(){return this.result}reset(){this.result.length=0}}Xn.CollectorArray=df;var Yn={};Object.defineProperty(Yn,"__esModule",{value:!0});Yn.CollectorLast=void 0;const pf=Qt;class mf extends pf.Collector{handleResult(t){return this.result=t,!0}getResult(){return this.result}reset(){delete this.result}}Yn.CollectorLast=mf;var jn={};Object.defineProperty(jn,"__esModule",{value:!0});jn.CollectorUntil0=void 0;const gf=Qt;class xf extends gf.Collector{constructor(){super(...arguments),this.result=!1}handleResult(t){return this.result=t,this.result}getResult(){return this.result}reset(){this.result=!1}}jn.CollectorUntil0=xf;var qn={};Object.defineProperty(qn,"__esModule",{value:!0});qn.CollectorWhile0=void 0;const vf=Qt;class yf extends vf.Collector{constructor(){super(...arguments),this.result=!1}handleResult(t){return this.result=t,!this.result}getResult(){return this.result}reset(){this.result=!1}}qn.CollectorWhile0=yf;var Kn={},Zn={};Object.defineProperty(Zn,"__esModule",{value:!0});Zn.SignalConnectionImpl=void 0;class _f{constructor(t,e){this.link=t,this.parentCleanup=e}disconnect(){return this.link!==null?(this.link.unlink(),this.link=null,this.parentCleanup(),this.parentCleanup=null,!0):!1}set enabled(t){this.link&&this.link.setEnabled(t)}get enabled(){return this.link!==null&&this.link.isEnabled()}}Zn.SignalConnectionImpl=_f;var Qn={};Object.defineProperty(Qn,"__esModule",{value:!0});Qn.SignalLink=void 0;class Fr{constructor(t=null,e=null,i=0){this.enabled=!0,this.newLink=!1,this.callback=null,this.prev=t??this,this.next=e??this,this.order=i}isEnabled(){return this.enabled&&!this.newLink}setEnabled(t){this.enabled=t}unlink(){this.callback=null,this.next.prev=this.prev,this.prev.next=this.next}insert(t,e){let i=this.prev;for(;i!==this&&!(i.order<=e);)i=i.prev;const r=new Fr(i,i.next,e);return r.callback=t,i.next=r,r.next.prev=r,r}}Qn.SignalLink=Fr;Object.defineProperty(Kn,"__esModule",{value:!0});Kn.Signal=void 0;const bf=Zn,Sf=Qn;class Cf{constructor(){this.head=new Sf.SignalLink,this.hasNewLinks=!1,this.emitDepth=0,this.connectionsCount=0}getConnectionsCount(){return this.connectionsCount}hasConnections(){return this.connectionsCount>0}connect(t,e=0){this.connectionsCount++;const i=this.head.insert(t,e);return this.emitDepth>0&&(this.hasNewLinks=!0,i.newLink=!0),new bf.SignalConnectionImpl(i,()=>this.decrementConnectionCount())}decrementConnectionCount(){this.connectionsCount--}disconnect(t){for(let e=this.head.next;e!==this.head;e=e.next)if(e.callback===t)return this.decrementConnectionCount(),e.unlink(),!0;return!1}disconnectAll(){for(;this.head.next!==this.head;)this.head.next.unlink();this.connectionsCount=0}emit(...t){this.emitDepth++;for(let e=this.head.next;e!==this.head;e=e.next)e.isEnabled()&&e.callback&&e.callback.apply(null,t);this.emitDepth--,this.unsetNewLink()}emitCollecting(t,e){this.emitDepth++;for(let i=this.head.next;i!==this.head;i=i.next)if(i.isEnabled()&&i.callback){const r=i.callback.apply(null,e);if(!t.handleResult(r))break}this.emitDepth--,this.unsetNewLink()}unsetNewLink(){if(this.hasNewLinks&&this.emitDepth===0){for(let t=this.head.next;t!==this.head;t=t.next)t.newLink=!1;this.hasNewLinks=!1}}}Kn.Signal=Cf;var Jn={};Object.defineProperty(Jn,"__esModule",{value:!0});Jn.SignalConnections=void 0;class wf{constructor(){this.list=[]}add(t){this.list.push(t)}disconnectAll(){for(const t of this.list)t.disconnect();this.list=[]}getCount(){return this.list.length}isEmpty(){return this.list.length===0}}Jn.SignalConnections=wf;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.SignalConnections=n.Signal=n.CollectorWhile0=n.CollectorUntil0=n.CollectorLast=n.CollectorArray=n.Collector=void 0;var t=Qt;Object.defineProperty(n,"Collector",{enumerable:!0,get:function(){return t.Collector}});var e=Xn;Object.defineProperty(n,"CollectorArray",{enumerable:!0,get:function(){return e.CollectorArray}});var i=Yn;Object.defineProperty(n,"CollectorLast",{enumerable:!0,get:function(){return i.CollectorLast}});var r=jn;Object.defineProperty(n,"CollectorUntil0",{enumerable:!0,get:function(){return r.CollectorUntil0}});var s=qn;Object.defineProperty(n,"CollectorWhile0",{enumerable:!0,get:function(){return s.CollectorWhile0}});var o=Kn;Object.defineProperty(n,"Signal",{enumerable:!0,get:function(){return o.Signal}});var a=Jn;Object.defineProperty(n,"SignalConnections",{enumerable:!0,get:function(){return a.SignalConnections}})})(qt);var Pf=Object.defineProperty,Af=(n,t,e)=>t in n?Pf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Vt=(n,t,e)=>(Af(n,typeof t!="symbol"?t+"":t,e),e);class Tf{constructor(){Vt(this,"_isMouseIn"),Vt(this,"_isDown"),Vt(this,"onDown"),Vt(this,"onUp"),Vt(this,"onUpOut"),Vt(this,"onOut"),Vt(this,"onPress"),Vt(this,"onHover"),this.onPress=new qt.Signal,this.onDown=new qt.Signal,this.onUp=new qt.Signal,this.onHover=new qt.Signal,this.onOut=new qt.Signal,this.onUpOut=new qt.Signal}connectEvents(t){Mn.any?(t.on("pointerdown",this.processDown,this),t.on("pointerup",this.processUp,this),t.on("pointerupoutside",this.processUpOut,this),t.on("pointerout",this.processOut,this),t.on("pointertap",this.processPress,this),t.on("pointerover",this.processOver,this)):(t.on("mousedown",this.processDown,this),t.on("mouseup",this.processUp,this),t.on("mouseupoutside",this.processUpOut,this),t.on("mouseout",this.processOut,this),t.on("click",this.processPress,this),t.on("mouseover",this.processOver,this))}disconnectEvents(t){Mn.any?(t.off("pointerdown",this.processDown,this),t.off("pointerup",this.processUp,this),t.off("pointerupoutside",this.processUpOut,this),t.off("pointerout",this.processOut,this),t.off("pointertap",this.processPress,this),t.off("pointerover",this.processOver,this)):(t.off("mousedown",this.processDown,this),t.off("mouseup",this.processUp,this),t.off("mouseupoutside",this.processUpOut,this),t.off("mouseout",this.processOut,this),t.off("click",this.processPress,this),t.off("mouseover",this.processOver,this))}processDown(t){this._isDown=!0,this.onDown.emit(this,t),this.down(t)}processUp(t){this._isDown&&(this.onUp.emit(this,t),this.up(t)),this._isDown=!1}processUpOut(t){this._isDown&&(this.onUp.emit(this,t),this.onUpOut.emit(this,t),this.up(t),this.upOut(t)),this._isDown=!1}processOut(t){this._isMouseIn&&(this._isMouseIn=!1,this.onOut.emit(this,t),this.out(t))}processPress(t){this._isDown=!1,this.onPress.emit(this,t),this.press(t)}processOver(t){Mn.any||(this._isMouseIn=!0,this.onHover.emit(this,t),this.hover(t))}down(t){}up(t){}upOut(t){}out(t){}press(t){}hover(t){}get isDown(){return this._isDown}}var Mf=Object.defineProperty,Ff=(n,t,e)=>t in n?Mf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Yt=(n,t,e)=>(Ff(n,typeof t!="symbol"?t+"":t,e),e);class If extends Tf{constructor(t){super(),Yt(this,"_view"),t&&(this.view=t,this.enabled=!0)}set view(t){!!this._view&&this.disconnectEvents(this._view),this._view=t,this.connectEvents(this._view)}get view(){return this._view}set enabled(t){if(!this.view){console.error("Button view is not set. Please set it before enabling the button.");return}this.view.eventMode=t?"static":"auto",this.view.cursor=t?"pointer":"default",!t&&this.isDown&&this.processUp()}get enabled(){return this.view.eventMode==="static"}}class zf extends N{constructor(t){super(),Yt(this,"button"),Yt(this,"onDown"),Yt(this,"onUp"),Yt(this,"onUpOut"),Yt(this,"onOut"),Yt(this,"onPress"),Yt(this,"onHover"),this.button=new If(this),this.button.enabled=!0,t&&this.addChild(t),this.onPress=this.button.onPress,this.onDown=this.button.onDown,this.onUp=this.button.onUp,this.onHover=this.button.onHover,this.onOut=this.button.onOut,this.onUpOut=this.button.onUpOut}set enabled(t){this.button.enabled=t}get enabled(){return this.button.enabled}}function Us(n){return typeof n=="string"?Pt.from(n):n}var Bf=Object.defineProperty,Of=(n,t,e)=>t in n?Bf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ht=(n,t,e)=>(Of(n,typeof t!="symbol"?t+"":t,e),e);class Ef extends N{constructor(t){super(),Ht(this,"bg"),Ht(this,"fill"),Ht(this,"fillMask"),Ht(this,"progressStart",0),Ht(this,"_progress",0),Ht(this,"options"),Ht(this,"innerView"),Ht(this,"_view"),this.options=t,this.innerView=new N,this.addChild(this.innerView),t!=null&&t.bg&&(t!=null&&t.fill)&&this.init(t)}init({bg:t,fill:e,fillPaddings:i,progress:r}){this.setBackground(t),this.setFill(e,i),this.progress=r}setBackground(t){var e;this.bg&&this.bg.destroy(),(e=this.options)!=null&&e.nineSliceSprite&&(typeof t=="string"?this.bg=new In({texture:k.from(t),leftWidth:this.options.nineSliceSprite.bg[0],topHeight:this.options.nineSliceSprite.bg[1],rightWidth:this.options.nineSliceSprite.bg[2],bottomHeight:this.options.nineSliceSprite.bg[3]}):console.warn("NineSliceSprite can not be used with views set as Container.")),t instanceof ht&&(this.bg=t),!this.bg&&(typeof t=="string"||t instanceof Pt)&&(this.bg=Us(t)),this.innerView.addChildAt(this.bg,0)}setFill(t,e){var u;if(this.fill&&this.fill.destroy(),this.bg instanceof Pt&&t===this.bg){console.warn("Can not use same Sprite instance for bg and fill.");return}(u=this.options)!=null&&u.nineSliceSprite&&(typeof t=="string"?this.fill=new In({texture:k.from(t),leftWidth:this.options.nineSliceSprite.fill[0],topHeight:this.options.nineSliceSprite.fill[1],rightWidth:this.options.nineSliceSprite.fill[2],bottomHeight:this.options.nineSliceSprite.fill[3]}):console.warn("NineSliceSprite can not be used with views set as Container.")),this.fill||(t instanceof ht?this.fill=t:this.fill=Us(t)),this.innerView.addChildAt(this.fill,1);const i=(e==null?void 0:e.left)??0,r=(e==null?void 0:e.top)??0;this.fill.x=i,this.fill.y=r,this.fillMask&&(this.fill.mask=null,this.fillMask.destroy());const s=this.fill.width/2,o=this.fill.width/2,a=this.fill.height/2,l=this.fill.height/2;let h=k.WHITE;this.fill instanceof Pt&&this.fill.texture&&(h=this.fill.texture),this.fillMask=new In({texture:h,leftWidth:s,topHeight:a,rightWidth:o,bottomHeight:l}),this.fillMask.position.copyFrom(this.fill),this.addChild(this.fillMask),this.fill.mask=this.fillMask}validate(t){return t=Math.round(t),t<0?0:t>100?100:t}set progress(t){this._progress=this.validate(t),this.fill&&this.fillMask&&(this.fill.mask=null,this.fillMask.width=this.fill.width/100*(this._progress-this.progressStart),this.fillMask.x=this.progressStart/100*this.fill.width+this.fill.x,this.fillMask.height=this.fill.height,this.fill.mask=this.fillMask)}get progress(){return this._progress}set width(t){var e,i,r;if((e=this.options)!=null&&e.nineSliceSprite){if(this.bg&&(this.bg.width=t),this.fill){const s=((i=this.options.fillPaddings)==null?void 0:i.left)??0,o=((r=this.options.fillPaddings)==null?void 0:r.right)??0;this.fill.width=t-s-o,this.fillMask.width=t-s-o}this.progress=this._progress}else super.width=t}get width(){return super.width}set height(t){var e,i,r;if((e=this.options)!=null&&e.nineSliceSprite){if(this.bg&&(this.bg.height=t),this.fill){const s=((i=this.options.fillPaddings)==null?void 0:i.top)??0,o=((r=this.options.fillPaddings)==null?void 0:r.bottom)??0;this.fill.height=t-s-o,this.fillMask.height=t-s-o}this.progress=this._progress}else super.height=t}get height(){return super.height}}var kf=Object.defineProperty,Uf=(n,t,e)=>t in n?kf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Pn=(n,t,e)=>(Uf(n,typeof t!="symbol"?t+"":t,e),e);class Rf extends N{constructor(t){var e;super(),Pn(this,"options"),Pn(this,"view"),Pn(this,"_type"),Pn(this,"children",[]),t&&this.init(t),(e=t==null?void 0:t.items)==null||e.forEach(i=>this.addChild(i)),this.on("added",()=>this.arrangeChildren()),this.on("childAdded",()=>this.arrangeChildren())}init(t){this.options=t,t!=null&&t.type&&(this.type=t.type),t!=null&&t.children&&t.children.forEach(e=>this.addChild(e))}set type(t){this._type=t,this.arrangeChildren()}get type(){return this._type}set elementsMargin(t){if(!this.options)throw new Error("List has not been initiated!");this.options.elementsMargin=t,this.arrangeChildren()}get elementsMargin(){var t;return((t=this.options)==null?void 0:t.elementsMargin)??0}set padding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.padding=t,this.options.vertPadding=t,this.options.horPadding=t,this.options.leftPadding=t,this.options.rightPadding=t,this.options.topPadding=t,this.options.bottomPadding=t,this.arrangeChildren()}get padding(){var t;return((t=this.options)==null?void 0:t.padding)??0}set vertPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.vertPadding=t,this.options.topPadding=t,this.options.bottomPadding=t,this.arrangeChildren()}get vertPadding(){var t;return((t=this.options)==null?void 0:t.vertPadding)??this.padding??0}set horPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.horPadding=t,this.options.leftPadding=t,this.options.rightPadding=t,this.arrangeChildren()}get horPadding(){var t;return((t=this.options)==null?void 0:t.horPadding)??this.padding??0}set leftPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.leftPadding=t,this.arrangeChildren()}get leftPadding(){var t;return((t=this.options)==null?void 0:t.leftPadding)??this.horPadding}set rightPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.rightPadding=t,this.arrangeChildren()}get rightPadding(){var t;return((t=this.options)==null?void 0:t.rightPadding)??this.horPadding}set topPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.topPadding=t,this.arrangeChildren()}get topPadding(){var t;return((t=this.options)==null?void 0:t.topPadding)??this.vertPadding}set bottomPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.bottomPadding=t,this.arrangeChildren()}get bottomPadding(){var t;return((t=this.options)==null?void 0:t.bottomPadding)??this.vertPadding}arrangeChildren(){var o,a;let t=0,e=this.leftPadding,i=this.topPadding;const r=((o=this.options)==null?void 0:o.elementsMargin)??0;let s=(a=this.parent)==null?void 0:a.width;this.rightPadding&&(s-=this.rightPadding),this.children.forEach((l,h)=>{switch(this.type){case"vertical":l.y=i,l.x=e,i+=r+l.height;break;case"horizontal":l.x=e,l.y=i,e+=r+l.width;break;default:l.x=e,l.y=i,l.x+l.width>s&&h>0&&(i+=r+t,e=this.leftPadding,l.x=e,l.y=i,t=0),t=Math.max(t,l.height),e+=r+l.width;break}})}removeItem(t){const e=this.children[t];e&&(this.removeChild(e),this.arrangeChildren())}}var Df=Object.defineProperty,Lf=(n,t,e)=>t in n?Df(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ye=(n,t,e)=>(Lf(n,typeof t!="symbol"?t+"":t,e),e);class Gf{constructor(t={}){Ye(this,"x"),Ye(this,"ax"),Ye(this,"dx"),Ye(this,"tx"),Ye(this,"_options"),this.x=0,this.ax=0,this.dx=0,this.tx=0,this._options=t,this._options.max=t.max||160,this._options.damp=t.damp||.8,this._options.springiness=t.springiness||.1}update(){this.ax=(this.tx-this.x)*this._options.springiness,this.dx+=this.ax,this.dx*=this._options.damp,this.dx<-this._options.max?this.dx=-this._options.max:this.dx>this._options.max&&(this.dx=this._options.max),this.x+=this.dx}reset(){this.x=0,this.ax=0,this.dx=0,this.tx=0}get max(){return this._options.max}set max(t){this._options.max=t}get damp(){return this._options.damp}set damp(t){this._options.damp=t}get springiness(){return this._options.springiness}set springiness(t){this._options.springiness=t}}var Nf=Object.defineProperty,$f=(n,t,e)=>t in n?Nf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,_e=(n,t,e)=>($f(n,typeof t!="symbol"?t+"":t,e),e);class Wf{constructor(){_e(this,"done"),_e(this,"to"),_e(this,"_spring"),_e(this,"_pos"),_e(this,"_speed"),_e(this,"_correctSpeed"),this._spring=new Gf,this._pos=0,this.to=0}start(t,e,i){this._speed=t,this._pos=e,this.to=i,this.done=!1,this._spring.x=this._pos,this._spring.tx=this.to;const r=this.to-this._pos,s=Math.abs(r)/r,o=Math.abs(this._speed)/this._speed;s!==o?this._correctSpeed=!0:this._correctSpeed=!1}update(){if(this._correctSpeed)this._speed*=.6,Math.abs(this._speed)<2&&(this._correctSpeed=!1),this._pos+=this._speed,this._spring.x=this._pos;else{const t=this.to-this._pos;Math.abs(t)<.05?(this._pos=this.to,this.done=!0):(this._spring.tx=this.to,this._spring.update(),this._pos=this._spring.x)}return this._pos}cancel(){}}var Vf=Object.defineProperty,Hf=(n,t,e)=>t in n?Vf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,dt=(n,t,e)=>(Hf(n,typeof t!="symbol"?t+"":t,e),e);class Rs{constructor(t={}){dt(this,"position",0),dt(this,"constrain",!0),dt(this,"min",0),dt(this,"max",0),dt(this,"maxSpeed",400),dt(this,"_ease"),dt(this,"_offset",0),dt(this,"_prev",0),dt(this,"_speed",0),dt(this,"_hasStopped"),dt(this,"_targetSpeed",0),dt(this,"_speedChecker",0),dt(this,"_grab",0),dt(this,"_activeEase"),this.constrain=t.constrain??!0,this.maxSpeed=t.maxSpeed??400,this._ease=t.ease??new Wf}set value(t){this._speed=0,this.position=t}get value(){return this.position}grab(t){this._grab=t,this._offset=this.position-t,this._speedChecker=0,this._targetSpeed=this._speed=0,this._hasStopped=!1}hold(t){this._speedChecker++,this.position=t+this._offset,this._speedChecker>1&&(this._targetSpeed=this.position-this._prev),this._speed+=(this._targetSpeed-this._speed)/2,this._speed>this.maxSpeed?this._speed=this.maxSpeed:this._speed<-this.maxSpeed&&(this._speed=-this.maxSpeed),this._prev=this.position,this.constrain&&(this._activeEase=null,this.position>this.min?this.position-=(this.position-this.min)/1.5:this.position<this.max&&(this.position+=(this.max-this.position)/1.5))}slide(t=!1){this._hasStopped||(this.constrain?this._updateConstrain(t):this._updateDefault())}get moveAmount(){return-(this.position-this._offset-this._grab)}_updateDefault(){this._speed*=.9,this.position+=this._speed,(this._speed<0?this._speed*-1:this._speed)<.01&&(this._hasStopped=!0)}_updateConstrain(t=!1){const e=this.max;t?(this.value>0&&(this.value=0),this.value>0&&(this.value=0),this.value<this.max&&(this.value=this.max),this.value<this.max&&(this.value=this.max)):this.position>this.min||this.position<e||this._activeEase?(this._activeEase||(this._activeEase=this._ease,this.position>this.min?this._activeEase.start(this._speed,this.position,this.min):this._activeEase.start(this._speed,this.position,e)),this.position=this._activeEase.update(),this._activeEase.done&&(this.position=this._activeEase.to,this._speed=0,this._activeEase=null)):this._updateDefault()}}var Xf=Object.defineProperty,Yf=(n,t,e)=>t in n?Xf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Xt=(n,t,e)=>(Yf(n,typeof t!="symbol"?t+"":t,e),e);class jf{constructor(t){Xt(this,"xAxis"),Xt(this,"yAxis"),Xt(this,"_isDown"),Xt(this,"_globalPosition"),Xt(this,"_frame"),Xt(this,"_bounds"),Xt(this,"_dirty"),Xt(this,"disableEasing",!1),this.xAxis=new Rs({ease:t.xEase,maxSpeed:t.maxSpeed,constrain:t.constrain}),this.yAxis=new Rs({ease:t.yEase,maxSpeed:t.maxSpeed,constrain:t.constrain}),this.disableEasing=t.disableEasing??!1,this._frame=new it,this._bounds=new it,this._globalPosition=new lt}pointerDown(t){this._globalPosition=t,this.xAxis.grab(t.x),this.yAxis.grab(t.y),this._isDown=!0}pointerUp(){this._isDown=!1}pointerMove(t){this._globalPosition=t}update(){this._dirty&&(this._dirty=!1,this.xAxis.min=this._bounds.left,this.xAxis.min=this._bounds.right-this._frame.width,this.xAxis.min=this._bounds.top,this.xAxis.min=this._bounds.bottom-this._frame.height),this._isDown?(this.xAxis.hold(this._globalPosition.x),this.yAxis.hold(this._globalPosition.y)):(this.xAxis.slide(this.disableEasing),this.yAxis.slide(this.disableEasing))}resize(t,e){this._frame.x=0,this._frame.width=t,this._frame.y=0,this._frame.height=e,this._dirty=!0}setBounds(t,e,i,r){this._bounds.x=t,this._bounds.width=e-t,this._bounds.y=i,this._bounds.height=r-i,this._dirty=!0}get x(){return this.xAxis.value}get y(){return this.yAxis.value}}var qf=Object.defineProperty,Kf=(n,t,e)=>t in n?qf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Z=(n,t,e)=>(Kf(n,typeof t!="symbol"?t+"":t,e),e);class Zf extends N{constructor(t){super(),Z(this,"background"),Z(this,"borderMask"),Z(this,"lastWidth"),Z(this,"lastHeight"),Z(this,"__width",0),Z(this,"__height",0),Z(this,"_dimensionChanged",!1),Z(this,"list"),Z(this,"_trackpad"),Z(this,"isDragging",0),Z(this,"interactiveStorage",[]),Z(this,"visibleItems",[]),Z(this,"pressedChild"),Z(this,"ticker",Gt.shared),Z(this,"options"),Z(this,"stopRenderHiddenItemsTimeout"),Z(this,"onMouseScrollBinding",this.onMouseScroll.bind(this)),Z(this,"dragStarTouchPoint"),Z(this,"isOver",!1),Z(this,"proximityRange"),Z(this,"proximityStatusCache",[]),Z(this,"lastScrollX"),Z(this,"lastScrollY"),Z(this,"proximityCheckFrameCounter",0),Z(this,"onProximityChange",new qt.Signal),t&&this.init(t),this.ticker.add(this.update,this)}init(t){this.options=t,this.setBackground(t.background),this.__width=t.width|this.background.width,this.__height=t.height|this.background.height,this.proximityRange=t.proximityRange??0,this.list||(this.list=new Rf,super.addChild(this.list)),this.list.init({type:t.type,elementsMargin:t.elementsMargin,padding:t.padding,vertPadding:t.vertPadding,horPadding:t.horPadding,topPadding:t.topPadding,bottomPadding:t.bottomPadding,leftPadding:t.leftPadding,rightPadding:t.rightPadding}),this.addItems(t.items),this.hasBounds&&(this.addMask(),this.makeScrollable()),this._trackpad.xAxis.value=0,this._trackpad.yAxis.value=0,this.options.globalScroll=t.globalScroll??!0,this.options.shiftScroll=t.shiftScroll??!1,this.resize()}get hasBounds(){return!!this.__width||!!this.__height}addItems(t){t!=null&&t.length&&t.forEach(e=>this.addItem(e))}removeItems(){this.proximityStatusCache.length=0,this.list.removeChildren()}addItem(...t){if(t.length>1)t.forEach(e=>this.addItem(e));else{const e=t[0];(!e.width||!e.height)&&console.error("ScrollBox item should have size"),e.eventMode="static",this.list.addChild(e),this.proximityStatusCache.push(!1),this.options.disableDynamicRendering||(e.renderable=this.isItemVisible(e))}return this.resize(),t[0]}removeItem(t){this.list.removeItem(t),this.proximityStatusCache.splice(t,1),this.resize()}isItemVisible(t,e=0){const i=this.options.type==="vertical"||!this.options.type;let r=!1;const s=this.list;if(i){const o=t.y+s.y;o+t.height>=-e&&o<=this.options.height+e&&(r=!0)}else{const o=t.x+s.x;o+t.width>=-e&&o<=this.options.width+e&&(r=!0)}return r}get items(){var t;return((t=this.list)==null?void 0:t.children)??[]}setBackground(t){this.background&&this.removeChild(this.background),this.options.background=t,this.background=new ht,this.addChildAt(this.background,0),this.resize()}addMask(){this.borderMask||(this.borderMask=new ht,super.addChild(this.borderMask),this.mask=this.borderMask),this.resize()}makeScrollable(){this._trackpad||(this._trackpad=new jf({disableEasing:this.options.disableEasing})),this.on("pointerdown",t=>{this.renderAllItems(),this.isDragging=1,this.dragStarTouchPoint=this.worldTransform.applyInverse(t.global),this._trackpad.pointerDown(this.dragStarTouchPoint);const e=this.list.worldTransform.applyInverse(t.global);this.visibleItems.forEach(i=>{i.x<e.x&&i.x+i.width>e.x&&i.y<e.y&&i.y+i.height>e.y&&(this.pressedChild=i)})}),this.on("pointerup",()=>{this.isDragging=0,this._trackpad.pointerUp(),this.restoreItemsInteractivity(),this.pressedChild=null,this.stopRenderHiddenItems()}),this.on("pointerover",()=>{this.isOver=!0}),this.on("pointerout",()=>{this.isOver=!1}),this.on("pointerupoutside",()=>{this.isDragging=0,this._trackpad.pointerUp(),this.restoreItemsInteractivity(),this.pressedChild=null,this.stopRenderHiddenItems()}),this.on("globalpointermove",t=>{if(!this.isDragging)return;const e=this.worldTransform.applyInverse(t.global);if(this.dragStarTouchPoint){const i=this.options.dragTrashHold??10;if(this.options.type==="horizontal"){const r=e.x-this.dragStarTouchPoint.x;Math.abs(r)>i&&(this.isDragging=2)}else{const r=e.y-this.dragStarTouchPoint.y;Math.abs(r)>i&&(this.isDragging=2)}}this.dragStarTouchPoint&&this.isDragging!==2||(this._trackpad.pointerMove(e),this.pressedChild&&(this.revertClick(this.pressedChild),this.pressedChild=null))}),document.addEventListener("wheel",this.onMouseScrollBinding,!0)}setInteractive(t){this.eventMode=t?"static":"auto"}get listHeight(){return this.list.height+this.list.topPadding+this.list.bottomPadding}get listWidth(){return this.list.width+this.list.leftPadding+this.list.rightPadding}resize(t=!1){if(this.hasBounds){if(this.renderAllItems(),this.borderMask&&(t||this._dimensionChanged||this.lastWidth!==this.listWidth||this.lastHeight!==this.listHeight)){this.options.width||(this.__width+=this.listWidth),this.options.height||(this.__height+=this.listHeight),this.borderMask.clear().roundRect(0,0,this.__width,this.__height,this.options.radius|0).fill(16711935).stroke(0),this.borderMask.eventMode="none";const e=this.options.background;this.background.clear().roundRect(0,0,this.__width,this.__height,this.options.radius|0).fill({color:e??0,alpha:e?1:1e-7}),this.options.type==="horizontal"?this.setInteractive(this.listWidth>this.__width):this.setInteractive(this.listHeight>this.__height),this.lastWidth=this.listWidth,this.lastHeight=this.listHeight}if(this._trackpad){const e=this.borderMask.width-this.list.width-this.list.leftPadding-this.list.rightPadding,i=this.borderMask.height-this.list.height-this.list.topPadding-this.list.bottomPadding;this.options.type==="vertical"?this._trackpad.yAxis.max=-Math.abs(i):this.options.type==="horizontal"?this._trackpad.xAxis.max=-Math.abs(e):(this._trackpad.yAxis.max=-Math.abs(i),this._trackpad.xAxis.max=-Math.abs(e))}this._dimensionChanged?(this.list.arrangeChildren(),this.stopRenderHiddenItems(),this._dimensionChanged=!1):this.updateVisibleItems(),this.lastScrollX=null,this.lastScrollY=null}}onMouseScroll(t){if(!this.isOver&&!this.options.globalScroll)return;this.renderAllItems();const e=this.options.shiftScroll?typeof t.deltaX<"u"||typeof t.deltaY<"u":typeof t.deltaX<"u";if(this.options.type==="horizontal"&&e){const i=this.options.shiftScroll?t.deltaX:t.deltaY,r=this.list.x-i;if(this.listWidth<this.__width)this._trackpad.xAxis.value=0;else{const s=this.__width-this.listWidth,o=0;this._trackpad.xAxis.value=Math.min(o,Math.max(s,r))}}else if(typeof t.deltaY<"u"){const i=this.list.y-t.deltaY;if(this.listHeight<this.__height)this._trackpad.yAxis.value=0;else{const r=this.__height-this.listHeight,s=0;this._trackpad.yAxis.value=Math.min(s,Math.max(r,i))}}this.stopRenderHiddenItems()}scrollBottom(){this.interactive?this.scrollTo(this.list.children.length-1):this.scrollTop()}scrollTop(){this.renderAllItems(),this._trackpad.xAxis.value=0,this._trackpad.yAxis.value=0,this.stopRenderHiddenItems()}renderAllItems(){clearTimeout(this.stopRenderHiddenItemsTimeout),this.stopRenderHiddenItemsTimeout=null,!this.options.disableDynamicRendering&&this.items.forEach(t=>{t.renderable=!0})}stopRenderHiddenItems(){this.options.disableDynamicRendering||(this.stopRenderHiddenItemsTimeout&&(clearTimeout(this.stopRenderHiddenItemsTimeout),this.stopRenderHiddenItemsTimeout=null),this.stopRenderHiddenItemsTimeout=setTimeout(()=>this.updateVisibleItems(),2e3))}updateVisibleItems(){this.visibleItems.length=0,this.items.forEach(t=>{t.renderable=this.isItemVisible(t),this.visibleItems.push(t)})}scrollTo(t){if(!this.interactive)return;const e=this.list.children[t];e&&(this.renderAllItems(),this._trackpad.xAxis.value=this.options.type==="horizontal"?this.__width-e.x-e.width-this.list.rightPadding:0,this._trackpad.yAxis.value=!this.options.type||this.options.type==="vertical"?this.__height-e.y-e.height-this.list.bottomPadding:0,this.stopRenderHiddenItems())}scrollToPosition({x:t,y:e}){t===void 0&&e===void 0||(this.renderAllItems(),t!==void 0&&(this.scrollX=-t),e!==void 0&&(this.scrollY=-e),this.stopRenderHiddenItems())}get height(){return this.__height}set height(t){this.__height=t,this._dimensionChanged=!0,this.resize(),this.scrollTop()}get width(){return this.__width}set width(t){this.__width=t,this._dimensionChanged=!0,this.resize(),this.scrollTop()}get scrollX(){return this._trackpad.xAxis.value}set scrollX(t){this._trackpad.xAxis.value=t}get scrollY(){return this._trackpad.yAxis.value}set scrollY(t){this._trackpad.yAxis.value=t}update(){if(!this.list)return;this._trackpad.update();const t=this.options.type==="horizontal"?"x":"y";this.list[t]!==this._trackpad[t]&&(this.list[t]=this._trackpad[t]),!this.options.disableProximityCheck&&(this._trackpad.x!==this.lastScrollX||this._trackpad.y!==this.lastScrollY)&&(this.proximityCheckFrameCounter++,this.proximityCheckFrameCounter>=(this.options.proximityDebounce??10)&&(this.items.forEach((e,i)=>{const r=this.isItemVisible(e,this.proximityRange),s=this.proximityStatusCache[i];r!==s&&(this.proximityStatusCache[i]=r,this.onProximityChange.emit({item:e,index:i,inRange:r}))}),this.lastScrollX=this._trackpad.x,this.lastScrollY=this._trackpad.y,this.proximityCheckFrameCounter=0))}destroy(t){this.ticker.remove(this.update,this),document.removeEventListener("wheel",this.onMouseScrollBinding,!0),this.background.destroy(),this.list.destroy(),super.destroy(t)}restoreItemsInteractivity(){this.interactiveStorage.forEach(t=>{t.item.eventMode=t.eventMode}),this.interactiveStorage.length=0}revertClick(t){t.eventMode!=="auto"&&(Mn.any?t.emit("pointerupoutside",null):t.emit("mouseupoutside",null),this.interactiveStorage.push({item:t,eventMode:t.eventMode}),t.eventMode="auto"),t instanceof N&&t.children&&t.children.forEach(e=>this.revertClick(e))}}class Qf extends Ef{constructor(){const t=S.width,e=20,i=20,r=25,s=1,o="#FFFFFF",a="#270f07",l="#07dd00",h=new ht().roundRect(e,0,t-e*2,i,r).fill(o).roundRect(s+e,s,t-s*2-e*2,i-s*2,r).fill(a),u=new ht().roundRect(e,0,t-e*2,i,r).fill(o).roundRect(s+e,s,t-s*2-e*2,i-s*2,r).fill(l);super({bg:h,fill:u,progress:0})}downloadProgress(t){this.progress=t*100}}const Mt=window.Telegram.WebApp;class er{static get isDesktop(){return Mt.platform==="tdesktop"}static get isDev(){return Mt.platform==="unknown"}static get isMobile(){return Mt.platform==="ios"||Mt.platform==="android"}static Init(){Mt.platform!=="unknown"&&(Mt.ready(),Mt.enableClosingConfirmation(),Mt.setHeaderColor("#000000"),Mt.setBackgroundColor("#000000"))}static FixScroll(t){Mt.expand(),document.body.style.overflowY="hidden",document.body.style.marginTop=`${t}px`;const e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);document.body.style.height=e+t+"px",document.body.style.paddingBottom=`${t}px`,window.scrollTo(0,t)}}window.Telegram.WebApp;const B=class B{constructor(){}static get width(){return this._width}static get height(){return this._height}static get realHeight(){return this._realHeight}static get realWidth(){return this._realWidth}static get enlargedWidth(){return this._enlargedWidth}static get enlargedHeight(){return this._enlargedHeight}static get leftPos(){return this._leftPos}static get rightPos(){return this._rightPos}static get topPos(){return this._topPos}static get bottomPos(){return this._bottomPos}static async Init(t,e,i,r){B.initializeAssetsPromise=Nt.init({manifest:ks});const s=ks.bundles.map(a=>a.name);B.initializeAssetsPromise.then(()=>Nt.backgroundLoadBundle(s)),B._overflow=r,B._width=t,B._height=e,er.Init(),er.FixScroll(B._overflow),B.app=new Eo;let o=2*(window.devicePixelRatio??1);await B.app.init({resolution:o,antialias:!1,background:i,autoDensity:!1,roundPixels:!0,width:t,height:e,hello:!1}),Xs.defaultOptions.scaleMode="nearest",document.body.appendChild(B.app.canvas),B.app.ticker.add(B.update),window.addEventListener("resize",()=>{B.Resize()}),B.Resize()}static Resize(){const t=Math.max(document.documentElement.clientWidth,window.innerWidth||0),e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);e/t<1.5&&(B.needOffset=!0),this.scaleFactor=Math.ceil(e/B.height),this._enlargedWidth=Math.round(this.scaleFactor*B.width),this._enlargedHeight=Math.round(this.scaleFactor*B.height),this._realWidth=Math.round(t/this.scaleFactor),this._realHeight=Math.round(e/this.scaleFactor),this._leftPos=Math.max(this._width/2-this._realWidth/2,0),this._rightPos=Math.min(this._width/2+this._realWidth/2,this._width),this._topPos=Math.max(this._height/2-this._realHeight/2,0),this._bottomPos=Math.min(this._height/2+this._realHeight/2,this._height);const i=Math.round((t-this._enlargedWidth)/2),r=Math.round((e-this._enlargedHeight)/2);B.app.canvas.style.width=`${this._enlargedWidth}px`,B.app.canvas.style.height=`${this._enlargedHeight}px`,B.app.canvas.style.marginLeft=B.app.canvas.style.marginRight=`${i}px`,B.app.canvas.style.marginTop=B.app.canvas.style.marginBottom=`${r}px`}static async ChangeScene(t){await B.initializeAssetsPromise,B.currentScene&&(B.app.stage.removeChild(B.currentScene),B.currentScene.destroy());let e=new Qf;e.y=B.height/2,B.app.stage.addChild(e),await Nt.loadBundle(t.assetBundles,e.downloadProgress.bind(e)),B.app.stage.removeChild(e),t.constructorWithAssets(),B.currentScene=t,B.app.stage.addChild(B.currentScene),B.Resize()}static update(t){window.scrollTo(0,B._overflow),B.currentScene&&B.currentScene.update(t)}};w(B,"needOffset",!1),w(B,"app"),w(B,"currentScene"),w(B,"_width"),w(B,"_height"),w(B,"_realWidth"),w(B,"_realHeight"),w(B,"_leftPos"),w(B,"_rightPos"),w(B,"_topPos"),w(B,"_bottomPos"),w(B,"_enlargedWidth"),w(B,"_enlargedHeight"),w(B,"_overflow"),w(B,"initializeAssetsPromise"),w(B,"scaleFactor");let S=B;var H=`in vec2 aPosition;
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
}`,Jf=`in vec2 vTextureCoord;
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
`,td=`struct AdjustmentUniforms {
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
}`,ed=Object.defineProperty,nd=(n,t,e)=>t in n?ed(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ga=(n,t,e)=>(nd(n,typeof t!="symbol"?t+"":t,e),e);const id=class xa extends ${constructor(t){t={...xa.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:td,entryPoint:"mainFragment"}}),i=G.from({vertex:H,fragment:Jf,name:"adjustment-filter"});super({gpuProgram:e,glProgram:i,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),ga(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};ga(id,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var rd=`
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
}`,sd=`struct KawaseBlurUniforms {
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
}`,od=`
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
`,ad=`struct KawaseBlurUniforms {
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
}`,ld=Object.defineProperty,ud=(n,t,e)=>t in n?ld(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,le=(n,t,e)=>(ud(n,typeof t!="symbol"?t+"":t,e),e);const va=class ya extends ${constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e))&&(O("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),e={strength:e},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.clamp=t[2])),e={...ya.DEFAULT_OPTIONS,...e};const i=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:e!=null&&e.clamp?ad:sd,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:e!=null&&e.clamp?od:rd,name:"kawase-blur-filter"});super({gpuProgram:i,glProgram:r,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),le(this,"uniforms"),le(this,"_pixelSize",{x:0,y:0}),le(this,"_clamp"),le(this,"_kernels",[]),le(this,"_blur"),le(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=e.pixelSize??{x:1,y:1},Array.isArray(e.strength)?this.kernels=e.strength:typeof e.strength=="number"&&(this._blur=e.strength,this.quality=e.quality??3),this._clamp=!!e.clamp}apply(t,e,i,r){const s=this.pixelSizeX/e.source.width,o=this.pixelSizeY/e.source.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,e,i,r);else{const l=yt.getSameSizeTexture(e);let h=e,u=l,c;const f=this._quality-1;for(let d=0;d<f;d++)a=this._kernels[d]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,h,u,!0),c=h,h=u,u=c;a=this._kernels[f]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,h,i,r),yt.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,e)=>t+e+.5,0))}_generateKernels(){const t=this._blur,e=this._quality,i=[t];if(t>0){let r=t;const s=t/e;for(let o=1;o<e;o++)r-=s,i.push(r)}this._kernels=i,this._updatePadding()}};le(va,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let _a=va;var hd=`in vec2 vTextureCoord;
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
`,cd=`struct AdvancedBloomUniforms {
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
`,fd=`
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
`,dd=`struct ExtractBrightnessUniforms {
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
`,pd=Object.defineProperty,md=(n,t,e)=>t in n?pd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ba=(n,t,e)=>(md(n,typeof t!="symbol"?t+"":t,e),e);const Sa=class Ca extends ${constructor(t){t={...Ca.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:dd,entryPoint:"mainFragment"}}),i=G.from({vertex:H,fragment:fd,name:"extract-brightness-filter"});super({gpuProgram:e,glProgram:i,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),ba(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};ba(Sa,"DEFAULT_OPTIONS",{threshold:.5});let gd=Sa;var xd=Object.defineProperty,vd=(n,t,e)=>t in n?xd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ce=(n,t,e)=>(vd(n,typeof t!="symbol"?t+"":t,e),e);const yd=class wa extends ${constructor(t){t={...wa.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:cd,entryPoint:"mainFragment"}}),i=G.from({vertex:H,fragment:hd,name:"advanced-bloom-filter"});super({gpuProgram:e,glProgram:i,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:k.WHITE}}),Ce(this,"uniforms"),Ce(this,"bloomScale",1),Ce(this,"brightness",1),Ce(this,"_extractFilter"),Ce(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new gd({threshold:t.threshold}),this._blurFilter=new _a({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,e,i,r){const s=yt.getSameSizeTexture(e);this._extractFilter.apply(t,e,s,!0);const o=yt.getSameSizeTexture(e);this._blurFilter.apply(t,s,o,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=o.source,t.applyFilter(this,e,i,r),yt.returnTexture(o),yt.returnTexture(s)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};Ce(yd,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});var _d=`precision highp float;
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
`,bd=`struct AsciiUniforms {
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
}`,Sd=Object.defineProperty,Cd=(n,t,e)=>t in n?Sd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,nr=(n,t,e)=>(Cd(n,typeof t!="symbol"?t+"":t,e),e);const wd=class Pa extends ${constructor(...t){let e=t[0]??{};typeof e=="number"&&(O("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),e={size:e});const i=(e==null?void 0:e.color)&&e.replaceColor!==!1;e={...Pa.DEFAULT_OPTIONS,...e};const r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:bd,entryPoint:"mainFragment"}}),s=G.from({vertex:H,fragment:_d,name:"ascii-filter"});super({gpuProgram:r,glProgram:s,resources:{asciiUniforms:{uSize:{value:e.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(i),type:"f32"}}}}),nr(this,"uniforms"),nr(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new Y,this.color=e.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};nr(wd,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var Pd=`precision highp float;
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
`,Ad=`struct BevelUniforms {
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
}`,Td=Object.defineProperty,Md=(n,t,e)=>t in n?Td(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,we=(n,t,e)=>(Md(n,typeof t!="symbol"?t+"":t,e),e);const Fd=class Aa extends ${constructor(t){t={...Aa.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Ad,entryPoint:"mainFragment"}}),i=G.from({vertex:H,fragment:Pd,name:"bevel-filter"});super({gpuProgram:e,glProgram:i,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),we(this,"uniforms"),we(this,"_thickness"),we(this,"_rotation"),we(this,"_lightColor"),we(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new Y,this._shadowColor=new Y,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/ze}set rotation(t){this._rotation=t*ze,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[e,i,r]=this._lightColor.toArray();this.uniforms.uLightColor[0]=e,this.uniforms.uLightColor[1]=i,this.uniforms.uLightColor[2]=r}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[e,i,r]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=e,this.uniforms.uShadowColor[1]=i,this.uniforms.uShadowColor[2]=r}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};we(Fd,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var Id=Object.defineProperty,zd=(n,t,e)=>t in n?Id(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,zn=(n,t,e)=>(zd(n,typeof t!="symbol"?t+"":t,e),e);const Bd=class Ta extends Wc{constructor(...t){let e=t[0]??{};if(typeof e=="number"||Array.isArray(e)||"x"in e&&"y"in e){O("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let i=e;Array.isArray(i)&&(i={x:i[0],y:i[1]}),e={strength:i},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.resolution=t[2]),t[3]!==void 0&&(e.kernelSize=t[3])}e={...Ta.DEFAULT_OPTIONS,...e},super(),zn(this,"_blurXFilter"),zn(this,"_blurYFilter"),zn(this,"_strength"),this._strength={x:2,y:2},e.strength&&(typeof e.strength=="number"?(this._strength.x=e.strength,this._strength.y=e.strength):(this._strength.x=e.strength.x,this._strength.y=e.strength.y)),this._blurXFilter=new Os({...e,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new Os({...e,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,e)}apply(t,e,i,r){const s=yt.getSameSizeTexture(e);t.applyFilter(this,e,i,r),this._blurXFilter.apply(t,e,s,!0),this._blurYFilter.apply(t,s,i,!1),yt.returnTexture(s)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return O("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){O("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return O("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){O("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return O("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){O("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};zn(Bd,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var Od=`precision highp float;
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
`,Ed=`struct BulgePinchUniforms {
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
}`,kd=Object.defineProperty,Ud=(n,t,e)=>t in n?kd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ma=(n,t,e)=>(Ud(n,typeof t!="symbol"?t+"":t,e),e);const Rd=class Fa extends ${constructor(t){t={...Fa.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Ed,entryPoint:"mainFragment"}}),i=G.from({vertex:H,fragment:Od,name:"bulge-pinch-filter"});super({gpuProgram:e,glProgram:i,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),Ma(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,e,i,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,i,r)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};Ma(Rd,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var Dd=`precision highp float;
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
`,Ld=`in vec2 aPosition;
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
`,Ds=`struct BaseUniforms {
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
const MAX_STOPS: i32 = 32;`,ge=ge||{};ge.stringify=function(){var n={"visit_linear-gradient":function(t){return n.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return n.visit_gradient(t)},"visit_radial-gradient":function(t){return n.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return n.visit_gradient(t)},visit_gradient:function(t){var e=n.visit(t.orientation);return e&&(e+=", "),t.type+"("+e+n.visit(t.colorStops)+")"},visit_shape:function(t){var e=t.value,i=n.visit(t.at),r=n.visit(t.style);return r&&(e+=" "+r),i&&(e+=" at "+i),e},"visit_default-radial":function(t){var e="",i=n.visit(t.at);return i&&(e+=i),e},"visit_extent-keyword":function(t){var e=t.value,i=n.visit(t.at);return i&&(e+=" at "+i),e},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return n.visit(t.value.x)+" "+n.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return n.visit_color(t.value,t)},visit_hex:function(t){return n.visit_color("#"+t.value,t)},visit_rgb:function(t){return n.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return n.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,e){var i=t,r=n.visit(e.length);return r&&(i+=" "+r),i},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var e="",i=t.length;return t.forEach(function(r,s){e+=n.visit(r),s<i-1&&(e+=", ")}),e},visit:function(t){if(!t)return"";var e="";if(t instanceof Array)return n.visit_array(t,e);if(t.type){var i=n["visit_"+t.type];if(i)return i(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return n.visit(t)}}();var ge=ge||{};ge.parse=function(){var n={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function e(A){var V=new Error(t+": "+A);throw V.source=t,V}function i(){var A=r();return t.length>0&&e("Invalid input not EOF"),A}function r(){return y(s)}function s(){return o("linear-gradient",n.linearGradient,l)||o("repeating-linear-gradient",n.repeatingLinearGradient,l)||o("radial-gradient",n.radialGradient,c)||o("repeating-radial-gradient",n.repeatingRadialGradient,c)}function o(A,V,P){return a(V,function(E){var ln=P();return ln&&(W(n.comma)||e("Missing comma before color stops")),{type:A,orientation:ln,colorStops:y(_)}})}function a(A,V){var P=W(A);if(P){W(n.startCall)||e("Missing (");var E=V(P);return W(n.endCall)||e("Missing )"),E}}function l(){return h()||u()}function h(){return I("directional",n.sideOrCorner,1)}function u(){return I("angular",n.angleValue,1)}function c(){var A,V=f(),P;return V&&(A=[],A.push(V),P=t,W(n.comma)&&(V=f(),V?A.push(V):t=P)),A}function f(){var A=d()||p();if(A)A.at=m();else{var V=g();if(V){A=V;var P=m();P&&(A.at=P)}else{var E=x();E&&(A={type:"default-radial",at:E})}}return A}function d(){var A=I("shape",/^(circle)/i,0);return A&&(A.style=U()||g()),A}function p(){var A=I("shape",/^(ellipse)/i,0);return A&&(A.style=q()||g()),A}function g(){return I("extent-keyword",n.extentKeywords,1)}function m(){if(I("position",/^at/,0)){var A=x();return A||e("Missing positioning value"),A}}function x(){var A=v();if(A.x||A.y)return{type:"position",value:A}}function v(){return{x:q(),y:q()}}function y(A){var V=A(),P=[];if(V)for(P.push(V);W(n.comma);)V=A(),V?P.push(V):e("One extra comma");return P}function _(){var A=F();return A||e("Expected color definition"),A.length=q(),A}function F(){return T()||b()||z()||R()}function R(){return I("literal",n.literalColor,0)}function T(){return I("hex",n.hexColor,1)}function z(){return a(n.rgbColor,function(){return{type:"rgb",value:y(C)}})}function b(){return a(n.rgbaColor,function(){return{type:"rgba",value:y(C)}})}function C(){return W(n.number)[1]}function q(){return I("%",n.percentageValue,1)||bt()||U()}function bt(){return I("position-keyword",n.positionKeywords,1)}function U(){return I("px",n.pixelValue,1)||I("em",n.emValue,1)}function I(A,V,P){var E=W(V);if(E)return{type:A,value:E[P]}}function W(A){var V,P;return P=/^[\n\r\t\s]+/.exec(t),P&&J(P[0].length),V=A.exec(t),V&&J(V[0].length),V}function J(A){t=t.substr(A)}return function(A){return t=A.toString(),i()}}();var Gd=ge.parse;ge.stringify;function Nd(n){const t=Gd(qd(n));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const e=t[0],i=$d(e.type),r=Wd(e.colorStops),s=Yd(e.orientation);return{type:i,stops:r,angle:s}}function $d(n){const t={"linear-gradient":0,"radial-gradient":1};if(!(n in t))throw new Error(`Unsupported gradient type "${n}"`);return t[n]}function Wd(n){const t=Hd(n),e=[],i=new Y;for(let r=0;r<n.length;r++){const s=Vd(n[r]),o=i.setValue(s).toArray();e.push({offset:t[r],color:o.slice(0,3),alpha:o[3]})}return e}function Vd(n){switch(n.type){case"hex":return`#${n.value}`;case"literal":return n.value;default:return`${n.type}(${n.value.join(",")})`}}function Hd(n){const t=[];for(let s=0;s<n.length;s++){const o=n[s];let a=-1;o.type==="literal"&&o.length&&"type"in o.length&&o.length.type==="%"&&"value"in o.length&&(a=parseFloat(o.length.value)/100),t.push(a)}const i=s=>{for(let o=s;o<t.length;o++)if(t[o]!==-1)return{indexDelta:o-s,offset:t[o]};return{indexDelta:t.length-1-s,offset:1}};let r=0;for(let s=0;s<t.length;s++){const o=t[s];if(o!==-1)r=o;else if(s===0)t[s]=0;else if(s+1===t.length)t[s]=1;else{const a=i(s),h=(a.offset-r)/(1+a.indexDelta);for(let u=0;u<=a.indexDelta;u++)t[s+u]=r+(u+1)*h;s+=a.indexDelta,r=t[s]}}return t.map(Xd)}function Xd(n){return n.toString().length>6?parseFloat(n.toString().substring(0,6)):n}function Yd(n){if(typeof n>"u")return 0;if("type"in n&&"value"in n)switch(n.type){case"angular":return parseFloat(n.value);case"directional":return jd(n.value)}return 0}function jd(n){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(n in t))throw new Error(`Unsupported directional value "${n}"`);return t[n]}function qd(n){let t=n.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var Kd=Object.defineProperty,Zd=(n,t,e)=>t in n?Kd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,de=(n,t,e)=>(Zd(n,typeof t!="symbol"?t+"":t,e),e);const Oi=90;function Qd(n){return[...n].sort((t,e)=>t.offset-e.offset)}const an=class Bn extends ${constructor(t){if(t&&"css"in t?t={...Nd(t.css||""),alpha:t.alpha??Bn.defaults.alpha,maxColors:t.maxColors??Bn.defaults.maxColors}:t={...Bn.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const e=L.from({vertex:{source:Ds,entryPoint:"mainVertex"},fragment:{source:Ds,entryPoint:"mainFragment"}}),i=G.from({vertex:Ld,fragment:Dd,name:"color-gradient-filter"}),r=32;super({gpuProgram:e,glProgram:i,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??Oi,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(r*3),type:"vec3<f32>",size:r},uStops:{value:new Float32Array(r*4),type:"vec4<f32>",size:r}}}}),de(this,"baseUniforms"),de(this,"stopsUniforms"),de(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const e=Qd(t),i=new Y;let r,s,o;for(let a=0;a<e.length;a++){i.setValue(e[a].color);const l=a*3;[r,s,o]=i.toArray(),this.stopsUniforms.uColors[l]=r,this.stopsUniforms.uColors[l+1]=s,this.stopsUniforms.uColors[l+2]=o,this.stopsUniforms.uStops[a*4]=e[a].offset,this.stopsUniforms.uStops[a*4+1]=e[a].alpha}this.baseUniforms.uCounts[0]=e.length,this._stops=e}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+Oi}set angle(t){this.baseUniforms.uOptions[1]=t-Oi}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};de(an,"LINEAR",0);de(an,"RADIAL",1);de(an,"CONIC",2);de(an,"defaults",{type:an.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var Jd=`in vec2 vTextureCoord;
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

}`,tp=`struct ColorMapUniforms {
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
}`,ep=Object.defineProperty,np=(n,t,e)=>t in n?ep(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Dt=(n,t,e)=>(np(n,typeof t!="symbol"?t+"":t,e),e);const ip=class Ia extends ${constructor(...t){let e=t[0]??{};if((e instanceof k||e instanceof kt)&&(O("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),e={colorMap:e},t[1]!==void 0&&(e.nearest=t[1]),t[2]!==void 0&&(e.mix=t[2])),e={...Ia.DEFAULT_OPTIONS,...e},!e.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const i=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:tp,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:Jd,name:"color-map-filter"});super({gpuProgram:i,glProgram:r,resources:{colorMapUniforms:{uMix:{value:e.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:e.colorMap.source,uMapSampler:e.colorMap.source.style}}),Dt(this,"uniforms"),Dt(this,"_size",0),Dt(this,"_sliceSize",0),Dt(this,"_slicePixelSize",0),Dt(this,"_sliceInnerSize",0),Dt(this,"_nearest",!1),Dt(this,"_scaleMode","linear"),Dt(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,e)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const e=t instanceof k?t.source:t;e.style.scaleMode=this._scaleMode,e.autoGenerateMipmaps=!1,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=e,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const e=this._colorMap;e&&e.source&&(e.source.scaleMode=this._scaleMode,e.source.autoGenerateMipmaps=!1,e.source.style.update(),e.source.update())}updateColorMap(){const t=this._colorMap;t!=null&&t.source&&(t.source.update(),this.colorMap=t)}destroy(){var t;(t=this._colorMap)==null||t.destroy(),super.destroy()}};Dt(ip,"DEFAULT_OPTIONS",{colorMap:k.WHITE,nearest:!1,mix:1});var rp=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,sp=`struct ColorOverlayUniforms {
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
`,op=Object.defineProperty,ap=(n,t,e)=>t in n?op(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ir=(n,t,e)=>(ap(n,typeof t!="symbol"?t+"":t,e),e);const lp=class za extends ${constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(O("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),e={color:e},t[1]!==void 0&&(e.alpha=t[1])),e={...za.DEFAULT_OPTIONS,...e};const i=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:sp,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:rp,name:"color-overlay-filter"});super({gpuProgram:i,glProgram:r,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"}}}}),ir(this,"uniforms"),ir(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new Y,this.color=e.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};ir(lp,"DEFAULT_OPTIONS",{color:0,alpha:1});var up=`in vec2 vTextureCoord;
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
`,hp=`struct ColorReplaceUniforms {
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
}`,cp=Object.defineProperty,fp=(n,t,e)=>t in n?cp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,On=(n,t,e)=>(fp(n,typeof t!="symbol"?t+"":t,e),e);const dp=class Ba extends ${constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(O("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),e={originalColor:e},t[1]!==void 0&&(e.targetColor=t[1]),t[2]!==void 0&&(e.tolerance=t[2])),e={...Ba.DEFAULT_OPTIONS,...e};const i=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:hp,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:up,name:"color-replace-filter"});super({gpuProgram:i,glProgram:r,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:e.tolerance,type:"f32"}}}}),On(this,"uniforms"),On(this,"_originalColor"),On(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new Y,this._targetColor=new Y,this.originalColor=e.originalColor??16711680,this.targetColor=e.targetColor??0,Object.assign(this,e)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[e,i,r]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=e,this.uniforms.uOriginalColor[1]=i,this.uniforms.uOriginalColor[2]=r}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[e,i,r]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=e,this.uniforms.uTargetColor[1]=i,this.uniforms.uTargetColor[2]=r}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){O("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return O("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){O("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return O("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};On(dp,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var pp=`in vec2 vTextureCoord;
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
}`,mp=`struct ConvolutionUniforms {
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
}`,gp=Object.defineProperty,xp=(n,t,e)=>t in n?gp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Oa=(n,t,e)=>(xp(n,typeof t!="symbol"?t+"":t,e),e);const vp=class Ea extends ${constructor(...t){let e=t[0]??{};Array.isArray(e)&&(O("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),e={matrix:e},t[1]!==void 0&&(e.width=t[1]),t[2]!==void 0&&(e.height=t[2])),e={...Ea.DEFAULT_OPTIONS,...e};const i=e.width??200,r=e.height??200,s=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:mp,entryPoint:"mainFragment"}}),o=G.from({vertex:H,fragment:pp,name:"convolution-filter"});super({gpuProgram:s,glProgram:o,resources:{convolutionUniforms:{uMatrix:{value:e.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/i,y:1/r},type:"vec2<f32>"}}}}),Oa(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=i,this.height=r}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((e,i)=>{this.uniforms.uMatrix[i]=e})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};Oa(vp,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var yp=`precision highp float;
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
`,_p=`struct CRTUniforms {
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
}`,bp=Object.defineProperty,Sp=(n,t,e)=>t in n?bp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,En=(n,t,e)=>(Sp(n,typeof t!="symbol"?t+"":t,e),e);const Cp=class ka extends ${constructor(t){t={...ka.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:_p,entryPoint:"mainFragment"}}),i=G.from({vertex:H,fragment:yp,name:"crt-filter"});super({gpuProgram:e,glProgram:i,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),En(this,"uniforms"),En(this,"seed"),En(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,e,i,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,e,i,r)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};En(Cp,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var wp=`precision highp float;
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
`,Pp=`struct DotUniforms {
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
}`,Ap=Object.defineProperty,Tp=(n,t,e)=>t in n?Ap(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Mp=(n,t,e)=>(Tp(n,t+"",e),e);const Fp=class Ua extends ${constructor(...t){let e=t[0]??{};typeof e=="number"&&(O("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),e={scale:e},t[1]!==void 0&&(e.angle=t[1]),t[2]!==void 0&&(e.grayscale=t[2])),e={...Ua.DEFAULT_OPTIONS,...e};const i={uScale:{value:e.scale,type:"f32"},uAngle:{value:e.angle,type:"f32"},uGrayScale:{value:e.grayscale?1:0,type:"f32"}},r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Pp,entryPoint:"mainFragment"}}),s=G.from({vertex:H,fragment:wp,name:"dot-filter"});super({gpuProgram:r,glProgram:s,resources:{dotUniforms:i}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};Mp(Fp,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var Ip=`precision highp float;
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
}`,zp=`struct DropShadowUniforms {
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
}`,Bp=Object.defineProperty,Op=(n,t,e)=>t in n?Bp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Pe=(n,t,e)=>(Op(n,typeof t!="symbol"?t+"":t,e),e);const Ep=class Ra extends ${constructor(t){t={...Ra.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:zp,entryPoint:"mainFragment"}}),i=G.from({vertex:H,fragment:Ip,name:"drop-shadow-filter"});super({gpuProgram:e,glProgram:i,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),Pe(this,"uniforms"),Pe(this,"shadowOnly",!1),Pe(this,"_color"),Pe(this,"_blurFilter"),Pe(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new Y,this.color=t.color??0,this._blurFilter=new _a({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new $({gpuProgram:L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:G.from({vertex:H,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,e,i,r){const s=yt.getSameSizeTexture(e);t.applyFilter(this,e,s,!0),this._blurFilter.apply(t,s,i,r),this.shadowOnly||t.applyFilter(this._basePass,e,i,!1),yt.returnTexture(s)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};Pe(Ep,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var kp=`precision highp float;
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
`,Up=`struct GlitchUniforms {
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
const MIRROR: i32 = 4;`,Rp=Object.defineProperty,Dp=(n,t,e)=>t in n?Rp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,zt=(n,t,e)=>(Dp(n,typeof t!="symbol"?t+"":t,e),e);const Lp=class Da extends ${constructor(t){t={...Da.defaults,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Up,entryPoint:"mainFragment"}}),i=G.from({vertex:H,fragment:kp,name:"glitch-filter"}),r=document.createElement("canvas");r.width=4,r.height=t.sampleSize??512;const s=new k({source:new ke({resource:r})});super({gpuProgram:e,glProgram:i,resources:{glitchUniforms:{uSeed:{value:(t==null?void 0:t.seed)??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:(t==null?void 0:t.fillMode)??0,type:"f32"},uOffset:{value:(t==null?void 0:t.offset)??100,type:"f32"},uDirection:{value:(t==null?void 0:t.direction)??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:s.source,uDisplacementSampler:s.source.style}}),zt(this,"uniforms"),zt(this,"average",!1),zt(this,"minSize",8),zt(this,"sampleSize",512),zt(this,"_canvas"),zt(this,"texture"),zt(this,"_slices",0),zt(this,"_sizes",new Float32Array(1)),zt(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=r,this.texture=s,Object.assign(this,t)}apply(t,e,i,r){const{width:s,height:o}=e.frame;this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,t.applyFilter(this,e,i,r)}_randomizeSizes(){const t=this._sizes,e=this._slices-1,i=this.sampleSize,r=Math.min(this.minSize/i,.9/this._slices);if(this.average){const s=this._slices;let o=1;for(let a=0;a<e;a++){const l=o/(s-a),h=Math.max(l*(1-Math.random()*.6),r);t[a]=h,o-=h}t[e]=o}else{let s=1;const o=Math.sqrt(1/this._slices);for(let a=0;a<e;a++){const l=Math.max(o*s*Math.random(),r);t[a]=l,s-=l}t[e]=s}this.shuffle()}shuffle(){const t=this._sizes,e=this._slices-1;for(let i=e;i>0;i--){const r=Math.random()*i>>0,s=t[i];t[i]=t[r],t[r]=s}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,e=this.texture,i=this._canvas.getContext("2d");i.clearRect(0,0,8,t);let r,s=0;for(let o=0;o<this._slices;o++){r=Math.floor(this._offsets[o]*256);const a=this._sizes[o]*t,l=r>0?r:0,h=r<0?-r:0;i.fillStyle=`rgba(${l}, ${h}, 0, 1)`,i.fillRect(0,s>>0,t,a+1>>0),s+=a}e.source.update()}set sizes(t){const e=Math.min(this._slices,t.length);for(let i=0;i<e;i++)this._sizes[i]=t[i]}get sizes(){return this._sizes}set offsets(t){const e=Math.min(this._slices,t.length);for(let i=0;i<e;i++)this._offsets[i]=t[i]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/ze}set direction(t){this.uniforms.uDirection=t*ze}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){var t;(t=this.texture)==null||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};zt(Lp,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var Gp=`precision highp float;
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
`,Np=`struct GlowUniforms {
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

const PI: f32 = 3.14159265358979323846264;`,$p=Object.defineProperty,Wp=(n,t,e)=>t in n?$p(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,rr=(n,t,e)=>(Wp(n,typeof t!="symbol"?t+"":t,e),e);const Vp=class La extends ${constructor(t){t={...La.DEFAULT_OPTIONS,...t};const e=t.distance??10,i=t.quality??.1,r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Np,entryPoint:"mainFragment"}}),s=G.from({vertex:H,fragment:Gp.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/i/e).toFixed(7)}`).replace(/__DIST__/gi,`${e.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:r,glProgram:s,resources:{glowUniforms:{uDistance:{value:e,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:i,type:"f32"},uKnockout:{value:(t==null?void 0:t.knockout)??!1?1:0,type:"f32"}}},padding:e}),rr(this,"uniforms"),rr(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new Y,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};rr(Vp,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var Hp=`precision highp float;
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
`,Xp=`struct GodrayUniforms {
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

\${PERLIN}`,Yp=`vec3 mod289(vec3 x)
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
`,jp=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

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
}`,qp=Object.defineProperty,Kp=(n,t,e)=>t in n?qp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ae=(n,t,e)=>(Kp(n,typeof t!="symbol"?t+"":t,e),e);const Zp=class Ga extends ${constructor(t){t={...Ga.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Xp.replace("${PERLIN}",jp),entryPoint:"mainFragment"}}),i=G.from({vertex:H,fragment:Hp.replace("${PERLIN}",Yp),name:"god-ray-filter"});super({gpuProgram:e,glProgram:i,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Ae(this,"uniforms"),Ae(this,"time",0),Ae(this,"_angleLight",[0,0]),Ae(this,"_angle",0),Ae(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,e,i,r){const s=e.frame.width,o=e.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,this.uniforms.uTime=this.time,t.applyFilter(this,e,i,r)}get angle(){return this._angle}set angle(t){this._angle=t;const e=t*ze;this._angleLight[0]=Math.cos(e),this._angleLight[1]=Math.sin(e)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};Ae(Zp,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var Qp=`in vec2 vTextureCoord;
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
`,Jp=`struct HslUniforms {
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
}`,tm=Object.defineProperty,em=(n,t,e)=>t in n?tm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,sr=(n,t,e)=>(em(n,typeof t!="symbol"?t+"":t,e),e);const nm=class Na extends ${constructor(t){t={...Na.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Jp,entryPoint:"mainFragment"}}),i=G.from({vertex:H,fragment:Qp,name:"hsl-adjustment-filter"});super({gpuProgram:e,glProgram:i,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),sr(this,"uniforms"),sr(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,this.hue=t.hue}get hue(){return this._hue}set hue(t){this._hue=t,this.resources.hslUniforms.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.resources.hslUniforms.uniforms.uHsl[1]}set saturation(t){this.resources.hslUniforms.uniforms.uHsl[1]=t}get lightness(){return this.resources.hslUniforms.uniforms.uHsl[2]}set lightness(t){this.resources.hslUniforms.uniforms.uHsl[2]=t}get colorize(){return this.resources.hslUniforms.uniforms.uColorize===1}set colorize(t){this.resources.hslUniforms.uniforms.uColorize=t?1:0}get alpha(){return this.resources.hslUniforms.uniforms.uAlpha}set alpha(t){this.resources.hslUniforms.uniforms.uAlpha=t}};sr(nm,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var im=`precision highp float;
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
`,rm=`struct MotionBlurUniforms {
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

const MAX_KERNEL_SIZE: f32 = 2048;`,sm=Object.defineProperty,om=(n,t,e)=>t in n?sm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,or=(n,t,e)=>(om(n,typeof t!="symbol"?t+"":t,e),e);const am=class $a extends ${constructor(...t){let e=t[0]??{};if(Array.isArray(e)||"x"in e&&"y"in e||e instanceof ct){O("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const s="x"in e?e.x:e[0],o="y"in e?e.y:e[1];e={velocity:{x:s,y:o}},t[1]!==void 0&&(e.kernelSize=t[1]),t[2]!==void 0&&(e.offset=t[2])}e={...$a.DEFAULT_OPTIONS,...e};const i=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:rm,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:im,name:"motion-blur-filter"});super({gpuProgram:i,glProgram:r,resources:{motionBlurUniforms:{uVelocity:{value:e.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(e.kernelSize??5),type:"f32"},uOffset:{value:e.offset,type:"f32"}}}}),or(this,"uniforms"),or(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,e)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};or(am,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var lm=`in vec2 vTextureCoord;
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
`,um=`struct MultiColorReplaceUniforms {
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

const MAX_COLORS: i32 = \${MAX_COLORS};`,hm=Object.defineProperty,cm=(n,t,e)=>t in n?hm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,kn=(n,t,e)=>(cm(n,typeof t!="symbol"?t+"":t,e),e);const fm=class Wa extends ${constructor(...t){let e=t[0]??{};Array.isArray(e)&&(O("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),e={replacements:e},t[1]&&(e.tolerance=t[1]),t[2]&&(e.maxColors=t[2])),e={...Wa.DEFAULT_OPTIONS,...e};const i=e.maxColors??e.replacements.length,r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:um.replace(/\$\{MAX_COLORS\}/g,i.toFixed(0)),entryPoint:"mainFragment"}}),s=G.from({vertex:H,fragment:lm.replace(/\$\{MAX_COLORS\}/g,i.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:r,glProgram:s,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*i),type:"vec3<f32>",size:i},uTargetColors:{value:new Float32Array(3*i),type:"vec3<f32>",size:i},uTolerance:{value:e.tolerance,type:"f32"}}}}),kn(this,"uniforms"),kn(this,"_replacements",[]),kn(this,"_maxColors"),this._maxColors=i,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=e.replacements}set replacements(t){const e=this.uniforms.uOriginalColors,i=this.uniforms.uTargetColors,r=t.length,s=new Y;if(r>this._maxColors)throw new Error(`Length of replacements (${r}) exceeds the maximum colors length (${this._maxColors})`);e[r*3]=-1;let o,a,l;for(let h=0;h<r;h++){const u=t[h];s.setValue(u[0]),[o,a,l]=s.toArray(),e[h*3]=o,e[h*3+1]=a,e[h*3+2]=l,s.setValue(u[1]),[o,a,l]=s.toArray(),i[h*3]=o,i[h*3+1]=a,i[h*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){O("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return O("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};kn(fm,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var dm=`precision highp float;
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
}`,pm=`struct OldFilmUniforms {
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
}`,mm=Object.defineProperty,gm=(n,t,e)=>t in n?mm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ar=(n,t,e)=>(gm(n,typeof t!="symbol"?t+"":t,e),e);const xm=class Va extends ${constructor(t){t={...Va.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:pm,entryPoint:"mainFragment"}}),i=G.from({vertex:H,fragment:dm,name:"old-film-filter"});super({gpuProgram:e,glProgram:i,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ar(this,"uniforms"),ar(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,e,i,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,e,i,r)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};ar(xm,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var vm=`precision highp float;
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
`,ym=`struct OutlineUniforms {
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

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,_m=Object.defineProperty,bm=(n,t,e)=>t in n?_m(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ce=(n,t,e)=>(bm(n,typeof t!="symbol"?t+"":t,e),e);const Ir=class ue extends ${constructor(...t){let e=t[0]??{};typeof e=="number"&&(O("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),e={thickness:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.quality=t[2]),t[3]!==void 0&&(e.alpha=t[3]),t[4]!==void 0&&(e.knockout=t[4])),e={...ue.DEFAULT_OPTIONS,...e};const i=e.quality??.1,r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:ym,entryPoint:"mainFragment"}}),s=G.from({vertex:H,fragment:vm.replace(/\$\{ANGLE_STEP\}/,ue.getAngleStep(i).toFixed(7)),name:"outline-filter"});super({gpuProgram:r,glProgram:s,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:e.knockout?1:0,type:"f32"}}}}),ce(this,"uniforms"),ce(this,"_thickness"),ce(this,"_quality"),ce(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=ue.getAngleStep(i),this._color=new Y,this.color=e.color??0,Object.assign(this,e)}apply(t,e,i,r){this.uniforms.uThickness[0]=this.thickness/e.source.width,this.uniforms.uThickness[1]=this.thickness/e.source.height,t.applyFilter(this,e,i,r)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*ue.MAX_SAMPLES,ue.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=ue.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};ce(Ir,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});ce(Ir,"MIN_SAMPLES",1);ce(Ir,"MAX_SAMPLES",100);var Sm=`precision highp float;
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
`,Cm=`struct RadialBlurUniforms {
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

const MAX_KERNEL_SIZE: i32 = 2048;`,wm=Object.defineProperty,Pm=(n,t,e)=>t in n?wm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Un=(n,t,e)=>(Pm(n,typeof t!="symbol"?t+"":t,e),e);const Am=class Ha extends ${constructor(...t){let e=t[0]??{};if(typeof e=="number"){if(O("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),e={angle:e},t[1]){const s="x"in t[1]?t[1].x:t[1][0],o="y"in t[1]?t[1].y:t[1][1];e.center={x:s,y:o}}t[2]&&(e.kernelSize=t[2]),t[3]&&(e.radius=t[3])}e={...Ha.DEFAULT_OPTIONS,...e};const i=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Cm,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:Sm,name:"radial-blur-filter"});super({gpuProgram:i,glProgram:r,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uKernelSize:{value:e.kernelSize,type:"i32"},uRadius:{value:e.radius,type:"f32"}}}}),Un(this,"uniforms"),Un(this,"_angle"),Un(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,e)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};Un(Am,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var Tm=`precision highp float;
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
`,Mm=`struct ReflectionUniforms {
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
}`,Fm=Object.defineProperty,Im=(n,t,e)=>t in n?Fm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,lr=(n,t,e)=>(Im(n,typeof t!="symbol"?t+"":t,e),e);const Xa=class Ya extends ${constructor(t){t={...Ya.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Mm,entryPoint:"mainFragment"}}),i=G.from({vertex:H,fragment:Tm,name:"reflection-filter"});super({gpuProgram:e,glProgram:i,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),lr(this,"uniforms"),lr(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,e,i,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,e,i,r)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};lr(Xa,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});let zm=Xa;var Bm=`precision highp float;
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
`,Om=`struct RgbSplitUniforms {
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
`,Em=Object.defineProperty,km=(n,t,e)=>t in n?Em(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ja=(n,t,e)=>(km(n,typeof t!="symbol"?t+"":t,e),e);const Um=class qa extends ${constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(O("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),e={red:e},t[1]!==void 0&&(e.green=t[1]),t[2]!==void 0&&(e.blue=t[2])),e={...qa.DEFAULT_OPTIONS,...e};const i=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Om,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:Bm,name:"rgb-split-filter"});super({gpuProgram:i,glProgram:r,resources:{rgbSplitUniforms:{uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}}}}),ja(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,e)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};ja(Um,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var Rm=`
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
`,Dm=`
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
`,Lm=Object.defineProperty,Gm=(n,t,e)=>t in n?Lm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ur=(n,t,e)=>(Gm(n,typeof t!="symbol"?t+"":t,e),e);const Nm=class Ka extends ${constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(O("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),e={center:e,...t[1]},t[2]!==void 0&&(e.time=t[2])),e={...Ka.DEFAULT_OPTIONS,...e};const i=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Dm,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:Rm,name:"shockwave-filter"});super({gpuProgram:i,glProgram:r,resources:{shockwaveUniforms:{uTime:{value:e.time,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uSpeed:{value:e.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),ur(this,"uniforms"),ur(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,e)}apply(t,e,i,r){this.uniforms.uTime=this.time,t.applyFilter(this,e,i,r)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};ur(Nm,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var $m=`precision highp float;
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
`,Wm=`struct SimpleLightmapUniforms {
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
}`,Vm=Object.defineProperty,Hm=(n,t,e)=>t in n?Vm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Rn=(n,t,e)=>(Hm(n,typeof t!="symbol"?t+"":t,e),e);const Xm=class Za extends ${constructor(...t){let e=t[0]??{};if(e instanceof k&&(O("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),e={lightMap:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.alpha=t[2])),e={...Za.DEFAULT_OPTIONS,...e},!e.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const i=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Wm,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:$m,name:"simple-lightmap-filter"});super({gpuProgram:i,glProgram:r,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:e.lightMap.source,uMapSampler:e.lightMap.source.style}}),Rn(this,"uniforms"),Rn(this,"_color"),Rn(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new Y,this.color=e.color??0,Object.assign(this,e)}apply(t,e,i,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,i,r)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Rn(Xm,"DEFAULT_OPTIONS",{lightMap:k.WHITE,color:0,alpha:1});var Ym=`in vec2 vTextureCoord;
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
`,jm=`struct TiltShiftUniforms {
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
}`,qm=Object.defineProperty,Km=(n,t,e)=>t in n?qm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,hr=(n,t,e)=>(Km(n,typeof t!="symbol"?t+"":t,e),e);const Zm=class Qa extends ${constructor(t){t={...Qa.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:jm,entryPoint:"mainFragment"}}),i=G.from({vertex:H,fragment:Ym,name:"tilt-shift-axis-filter"});super({gpuProgram:e,glProgram:i,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur??100,t.gradientBlur??600]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([30,30]),type:"vec2<f32>"},uTexSize:{value:new Float32Array([window.innerWidth,window.innerHeight]),type:"vec2<f32>"}}}}),hr(this,"uniforms"),hr(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis,this.updateDelta()}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,e=this.uniforms.uStart,i=t.x-e.x,r=t.y-e.y,s=Math.sqrt(i*i+r*r),o=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=o?-r/s:i/s,this.uniforms.uDelta[1]=o?i/s:r/s}};hr(Zm,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600,start:{x:0,y:window.innerHeight/2},end:{x:600,y:window.innerHeight/2}});var Qm=`precision highp float;
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
`,Jm=`struct TwistUniforms {
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
`,tg=Object.defineProperty,eg=(n,t,e)=>t in n?tg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ja=(n,t,e)=>(eg(n,typeof t!="symbol"?t+"":t,e),e);const ng=class tl extends ${constructor(t){t={...tl.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Jm,entryPoint:"mainFragment"}}),i=G.from({vertex:H,fragment:Qm,name:"twist-filter"});super({gpuProgram:e,glProgram:i,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),Ja(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};Ja(ng,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var ig=`precision highp float;
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
`,rg=`struct ZoomBlurUniforms {
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
}`,sg=Object.defineProperty,og=(n,t,e)=>t in n?sg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,el=(n,t,e)=>(og(n,typeof t!="symbol"?t+"":t,e),e);const ag=class nl extends ${constructor(t){t={...nl.DEFAULT_OPTIONS,...t};const e=t.maxKernelSize??32,i=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:rg.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:ig.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:i,glProgram:r,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),el(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};el(ag,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});function At(n){return new uf({text:n,style:{fontFamily:"tiny",fontSize:9,fill:"white",align:"center",dropShadow:{alpha:.5,distance:1,angle:1,color:"#4a1850"},stroke:{color:"#4a1850",width:1,join:"round"}}})}class xt extends zf{constructor(e){super();w(this,"text");w(this,"buttonBg");w(this,"noteText");w(this,"changeTintOnClick",!0);w(this,"defaultBGTint");this.buttonBg=new In(k.from("button.png")),e!=null&&e.tint&&(this.buttonBg.tint=e.tint,this.defaultBGTint=e.tint),e!=null&&e.width&&(this.buttonBg.width=e.width),e!=null&&e.height&&(this.buttonBg.height=e.height),this.text=At((e==null?void 0:e.text)??""),this.text.anchor.set(.5),this.text.x=this.buttonBg.width/2,this.text.y=this.buttonBg.height/2-2,this.addChild(this.buttonBg),this.addChild(this.text),e!=null&&e.note&&(this.noteText=At(e==null?void 0:e.note),this.noteText.x=this.buttonBg.width-this.noteText.width-5,this.addChild(this.noteText)),this.onDown.connect(()=>{if(this.changeTintOnClick){let i=new Y(this.defaultBGTint).toRgba();i.r+=.25,i.g+=.25,i.b+=.25,this.buttonBg.tint=[i.r,i.g,i.b]}}),this.onUp.connect(()=>{this.changeTintOnClick&&(this.buttonBg.tint=this.defaultBGTint)})}updateWidth(e){this.buttonBg.width=e,this.text.x=this.buttonBg.width/2}setEnabled(e){this.enabled=e,this.alpha=e?1:.4}}const Ei=window.Telegram.WebApp;class lg extends N{constructor(e,i,r){var l,h,u;super();w(this,"sprite");w(this,"nameText");w(this,"levelText");w(this,"data");this.data=r;const s=Nt.get("buildings").data.animations;this.sprite=on.fromImages(s[e]),this.sprite.anchor.set(.5,1),this.sprite.y=Math.round(S.height*.684),this.sprite.x=i*80,this.addChild(this.sprite);let o="Friend "+i,a=Ei==null?void 0:Ei.initDataUnsafe;i==0&&(a==null?void 0:a.user)!==void 0&&((a==null?void 0:a.user.username)!==""||(a==null?void 0:a.user.username)!==void 0?o=(l=a==null?void 0:a.user)==null?void 0:l.username:o=((h=a==null?void 0:a.user)==null?void 0:h.first_name)+" "+((u=a==null?void 0:a.user)==null?void 0:u.last_name)),this.nameText=At(o),this.nameText.anchor.set(.5),this.levelText=At("Lvl. "+r.level),this.levelText.style.fontSize=6,this.levelText.style.fill="gray",this.levelText.style.stroke={color:"black",width:1,join:"round"},this.levelText.style.dropShadow=!1,this.levelText.anchor.set(.5),this.setCurrentLevel()}setCurrentLevel(){this.sprite.currentFrame=Math.min(this.data.level,this.sprite.totalFrames-1),this.nameText.y=this.sprite.y-this.sprite.height-10,this.nameText.x=this.sprite.x,this.levelText.text="Lvl. "+this.data.level,this.levelText.x=this.sprite.x,this.levelText.y=this.sprite.y+6}update(e){}}class ug extends N{constructor(e){super();w(this,"players",[]);this.interactiveChildren=!1}update(e){for(let i=0;i<this.players.length;i++)this.players[i].update(e)}updatePosition(e){this.x=Math.round(e)}addBuilding(e){let i=new lg("building01",this.players.length,e);return this.players.push(i),this.addChild(i),i}}class hg extends N{constructor(){super();w(this,"bg");this.interactiveChildren=!1,this.bg=new Pt({texture:k.from("komnata1")}),this.bg.x=-this.bg.width/2+S.width/2,this.bg.y=-this.bg.height/2+S.height/2-20,this.addChild(this.bg)}updatePosition(e){}update(e){}}var An=[{divider:1e21,suffix:"Z"},{divider:1e18,suffix:"E"},{divider:1e15,suffix:"P"},{divider:1e12,suffix:"T"},{divider:1e9,suffix:"G"},{divider:1e6,suffix:"M"},{divider:1e3,suffix:"k"}];const cr=(n,t,e)=>n*(1-e)+t*e;function il(n){for(let t=0;t<An.length;t++)if(n>=An[t].divider)return(n/An[t].divider).toFixed(3).toString()+An[t].suffix;return n.toString()}function cg(n,t){const e=Math.ceil(n),i=Math.floor(t);return Math.floor(Math.random()*(i-e)+e)}class fg{constructor(){w(this,"friends");this.friends=[]}get ourMoney(){return this.friends[0].money}set ourMoney(t){this.friends[0].money=t}get ourLevel(){return this.friends[0].level}get ourBusiness0(){const t=this.friends[0].business0;return t!==void 0?t:0}increaseMoney(t,e){this.friends[t].money+=e}increaseLevel(t){this.friends[t].level++}setBusiness0(t,e){this.friends[t].business0=e}}class rl{constructor(t,e){w(this,"level");w(this,"money");w(this,"business0");t!=null?this.level=t:this.level=0,e!=null?this.money=e:this.money=0}}const fe=[0,5,15,30,60,120,240,500,1100,2250,5e3],dg=50;class pg extends N{constructor(e){super();w(this,"scroller");w(this,"view");w(this,"ingameUI");w(this,"background");w(this,"buildings");w(this,"reflectionFilter");w(this,"_isDrag",!1);w(this,"_delta");w(this,"_prevDragPos");w(this,"_currentDragPosition");w(this,"_viewPos");w(this,"data");this.data=e,this.scroller=new N;const i=new ht().rect(0,0,S.width,S.height).fill("#1F66BA");this.scroller.addChild(i),this.scroller.eventMode="static",this.addChild(this.scroller),this.view=new N,this.addChild(this.view),this.background=new hg,this.view.addChild(this.background),this.ingameUI=new N,this.buildings=new ug(dg),this.ingameUI.x=this.buildings.x,this.addChild(this.ingameUI);for(let a=0;a<e.friends.length;a++)this.addPlayer(e.friends[a]);this.view.addChild(this.buildings),this.reflectionFilter=new zm({boundary:.71,alpha:[.5,.25],amplitude:[1,2]});const r=a=>{this._isDrag=!0,this._currentDragPosition=a.global.x,this._prevDragPos=this._currentDragPosition,this.scroller.on("pointermove",s)},s=a=>{this._currentDragPosition=a.global.x},o=()=>{this._isDrag=!1,this.scroller.off("pointermove",s)};this.scroller.on("pointerdown",r),this.scroller.on("pointerup",o),this.scroller.on("pointerupoutside",o),this._viewPos=S.width/2,this.updatePosition()}get currentViewPos(){return this.buildings.x}addPlayer(e){const i=this.buildings.addBuilding(e);this.ingameUI.addChild(i.nameText),this.ingameUI.addChild(i.levelText)}increasePlayerLevel(e){this.buildings.players[e].setCurrentLevel()}updatePosition(){this.buildings.updatePosition(this._viewPos),this.background.updatePosition(this._viewPos),this.ingameUI.x=this.buildings.x}update(e){if(this._isDrag?(this._delta=this._currentDragPosition-this._prevDragPos,this._prevDragPos=this._currentDragPosition):this._delta=cr(this._delta,0,e.deltaTime*.04),Math.abs(this._delta)>.1){let i=this.buildings.players.length;this._viewPos=Math.min(this._viewPos+this._delta,S.width/2),this._viewPos=Math.max(this._viewPos,-(this.buildings.width-S.width/2-this.buildings.players[i-1].width)),this.updatePosition()}this.reflectionFilter.time+=e.deltaTime*.05,this.background.update(e)}updateByTimer(){const e=Nt.get("buildings").data.animations;for(let i=0;i<this.data.friends.length;i++)if(this.data.increaseMoney(i,fe[this.data.friends[i].level]),this.data.friends[i].level>0){const r=on.fromImages(e.coin);r.anchor.set(.5);const s=this.buildings.players[i];r.x=s.nameText.x,r.y=s.nameText.y-16,r.animationSpeed=1/5,r.loop=!1,r.play(),r.onFrameChange=()=>{r.y=s.nameText.y-16-r.currentFrame},r.onComplete=()=>{r.destroy()},this.ingameUI.addChild(r)}}}const Ls=1;class Me{static SaveData(t){localStorage.setItem("saveVersion",Ls.toString()),localStorage.setItem("friends",JSON.stringify(t.friends))}static LoadData(t){let e=!1;const i=localStorage.getItem("saveVersion");if(i!==null&&parseInt(i)===Ls){const r=localStorage.getItem("friends");if(r!==null){const s=JSON.parse(r);s!=null&&(t.friends=s,e=!0)}}e||t.friends.push(new rl)}static ClearData(){localStorage.clear(),window.location.reload()}}class en{static Name(t){return ki[t].name}static UnlockLevel(t){return ki[t].unlockLevel}static Tint(t){return ki[t].tint}}var pt=(n=>(n[n.PublicTransport=0]="PublicTransport",n[n.Retail=1]="Retail",n[n.Agriculture=2]="Agriculture",n[n.HealthCare=3]="HealthCare",n[n.Education=4]="Education",n[n.Telecommunication=5]="Telecommunication",n[n.Energy=6]="Energy",n[n.OilGas=7]="OilGas",n[n.Chemicals=8]="Chemicals",n[n.Biotech=9]="Biotech",n))(pt||{});const ki=[{name:` Public Transport 
🚌🚋🚕🚈`,unlockLevel:0,tint:"#9296A0"},{name:` Retail 
🛒🛍️🎁📦`,unlockLevel:0,tint:"#81B8A5"},{name:` Agriculture 
🚜🌽👨‍🌾`,unlockLevel:0,tint:"#33C481"},{name:` Health Care 
🧑‍⚕️🚑🩺🩼`,unlockLevel:15,tint:"#B65452"},{name:` Education 
🎓🏫📚🧑‍🎓`,unlockLevel:20,tint:"#D647E1"},{name:` Telecommunication 
🌍📡🌐`,unlockLevel:20,tint:"#3191F7"},{name:` Energy 
⚡🔌💡🔋`,unlockLevel:20,tint:"#F0E31A"},{name:` Oil & Gas 
⛽🛢️`,unlockLevel:40,tint:"#8F8F92"},{name:` Chemicals 
🧪⚗️👩‍🔬🔬`,unlockLevel:40,tint:"#22E528"},{name:` Biotech 
🦾🦿🤖`,unlockLevel:40,tint:"#47476C"}],Ct=5,be=30;class mg extends N{constructor(){super();w(this,"transportBtn");w(this,"retailBtn");w(this,"agricultureBtn");w(this,"scroller");w(this,"scrollerBg");w(this,"scrollBox");w(this,"backButton");const e=new ht().rect(0,0,S.width,S.height).fill("gray"),i=new ht().rect(0,S.bottomPos-be-Ct*2,S.width,be+Ct*2).fill("3E3E3E");this.addChild(e),this.addChild(i);const r=new ht().rect(0,0,S.width,be).fill("2B2B2B");r.y=S.topPos,this.addChild(r);const s=At("Select Business");s.style.fontSize=12,s.anchor.set(.5),s.x=r.width/2,s.y=S.topPos+r.height/2-2,this.addChild(s);const o=S.rightPos-S.leftPos-Ct*2-6;function a(g){const m=en.UnlockLevel(g),x=en.Tint(g);return new xt({text:en.Name(g),width:o,height:be,tint:x,note:m>0?`lvl.${m}`:void 0})}this.transportBtn=a(pt.PublicTransport),this.retailBtn=a(pt.Retail),this.agricultureBtn=a(pt.Agriculture);const l=a(pt.HealthCare),h=a(pt.Education),u=a(pt.Telecommunication),c=a(pt.Energy),f=a(pt.OilGas),d=a(pt.Chemicals),p=a(pt.Biotech);this.scrollBox=new Zf({elementsMargin:Ct,width:S.rightPos-Ct*2,height:S.bottomPos-S.topPos-i.height-Ct*2-r.height,radius:5,disableEasing:!1,globalScroll:!0,shiftScroll:!1}),this.scrollBox.x=S.leftPos+Ct,this.scrollBox.y=S.topPos+Ct+r.height,this.addChild(this.scrollBox),this.scrollBox.addItem(this.transportBtn,this.retailBtn,this.agricultureBtn,l,h,u,c,f,d,p),l.setEnabled(!1),h.setEnabled(!1),u.setEnabled(!1),d.setEnabled(!1),c.setEnabled(!1),f.setEnabled(!1),p.setEnabled(!1),this.scrollerBg=new ht().rect(S.rightPos-6,0,4,this.scrollBox.height).fill("black"),this.scrollerBg.alpha=.5,this.scrollerBg.y=this.scrollBox.y,this.addChild(this.scrollerBg),this.scroller=new ht().rect(S.rightPos-6,0,4,40).fill("00DCFF"),this.addChild(this.scroller),this.backButton=new xt({text:" Back ",width:o+6,height:be,tint:"ED4C4C"}),this.backButton.x=S.leftPos+Ct,this.backButton.y=S.bottomPos-this.backButton.height-Ct,this.backButton.onPress.connect(()=>{this.visible=!1}),this.addChild(this.backButton)}update(e){let i=this.scrollBox.items.length*be+(this.scrollBox.items.length-1)*Ct,r=i/this.scrollBox.height;if(r-=1,r>0&&r<1){this.scrollerBg.visible=!0,this.scroller.visible=!0,this.scroller.height=cr(this.scrollerBg.height,0,r);let s=-this.scrollBox.scrollY/(i-this.scrollBox.height-1);s=Math.min(Math.max(s,0),1),this.scroller.y=cr(this.scrollBox.y,this.scrollBox.y+this.scrollBox.height-this.scroller.height,s)}else this.scrollerBg.visible=!1,this.scroller.visible=!1}}const mt=5,he=30;class gg extends N{constructor(e){super();w(this,"upgradeButton");w(this,"business0Btn");const i=S.rightPos-S.leftPos-mt*2,r=e.ourLevel>0;r?this.business0Btn=new xt({text:en.Name(e.ourBusiness0),width:i,height:26,tint:"#9296A0"}):this.business0Btn=new xt({text:"Start new business",width:i,height:26,tint:"#9296A0"});const s=new xt({text:"",width:i,height:26,tint:"#9296A0",note:"Need lvl 15"}),o=new xt({text:"",width:i,height:26,tint:"#9296A0",note:"Need lvl 60"});this.business0Btn.x=S.leftPos+mt,this.business0Btn.y=S.bottomPos-this.business0Btn.height*3-he-2,s.x=S.leftPos+mt,s.y=S.bottomPos-this.business0Btn.height*2-he-2,o.x=S.leftPos+mt,o.y=S.bottomPos-this.business0Btn.height-he-2,s.setEnabled(!1),o.setEnabled(!1);const a=new xt({text:"",width:S.rightPos-S.leftPos,height:this.business0Btn.height*3+mt*2,tint:"orange"});a.x=S.leftPos,a.y=S.bottomPos-he-this.business0Btn.height*3-mt,a.changeTintOnClick=!1,this.addChild(a),this.addChild(o),this.addChild(s),this.addChild(this.business0Btn),r&&this.fixText(this.business0Btn),this.fixText(s),this.fixText(o),this.upgradeButton=new xt({text:this.updateUpgradeButtonText(fe[e.ourLevel]),tint:"orange",width:40,height:21}),this.upgradeButton.text.style.fontSize=8,this.upgradeButton.text.y-=1,this.upgradeButton.x=this.business0Btn.x+this.business0Btn.width-this.upgradeButton.width-mt,this.upgradeButton.y=this.business0Btn.y+1,this.upgradeButton.setEnabled(e.ourLevel<fe.length-1),this.upgradeButton.visible=r,this.addChild(this.upgradeButton)}updateUpgradeButtonText(e){return e===0?"Upgrade":`Upgrade
$${il(e)}`}fixText(e){e.text.x=e.buttonBg.x+3,e.text.anchor.set(0,.5),e.text.style.fontSize=8,e.text.style.align="left"}updateBusinnes0Btn(e){const i=S.rightPos-S.leftPos-mt*2,r=this.getChildIndex(this.business0Btn);this.business0Btn.destroy(),this.business0Btn=new xt({text:en.Name(e),width:i,height:26,tint:"#9296A0"}),this.addChild(this.business0Btn),this.setChildIndex(this.business0Btn,r),this.fixText(this.business0Btn),this.business0Btn.x=S.leftPos+mt,this.business0Btn.y=S.bottomPos-this.business0Btn.height*3-he-2,this.upgradeButton.visible=!0}}class je extends xt{constructor(e){super({text:e,tint:"gray",width:50,height:he});w(this,"isSelected",!1);w(this,"onDeselectCallback");this.onDown.disconnectAll(),this.onUp.disconnectAll(),this.onDown.connect(()=>{let i=new Y(this.buttonBg.tint).toRgba();i.r+=.25,i.g+=.25,i.b+=.25,this.buttonBg.tint=[i.r,i.g,i.b]}),this.onUp.connect(()=>{this.buttonBg.tint=this.isSelected?"orange":"gray"}),this.onPress.connect(()=>{this.setSelected(!this.isSelected)})}onDeselect(){this.onDeselectCallback!==void 0&&this.onDeselectCallback()}setSelected(e){this.isSelected!==e&&(this.isSelected=e,this.buttonBg.tint=e?"orange":"gray",this.text.y+=e?-2:2,this.buttonBg.height+=e?-4:4,this.buttonBg.x+=e?-2:2,this.buttonBg.width+=e?4:-4,e||this.onDeselect())}}class xg extends N{constructor(e){super();w(this,"friendsText");w(this,"inviteBtn");const i=new xt({text:"",width:S.rightPos-S.leftPos,height:50,tint:"orange"});i.x=S.leftPos,i.y=S.bottomPos-he-i.height+mt,i.changeTintOnClick=!1,this.addChild(i),this.friendsText=At("Friends: "+e),this.friendsText.anchor.set(0,.5),this.friendsText.x=i.x+mt,this.friendsText.y=i.y+8,this.addChild(this.friendsText);const r=S.rightPos-S.leftPos-mt*2;this.inviteBtn=new xt({text:"Invite friends",width:r,height:26,tint:"#9296A0"}),this.inviteBtn.x=S.leftPos+mt,this.inviteBtn.y=i.y+i.height-this.inviteBtn.height-mt-2,this.addChild(this.inviteBtn)}}const vg=0;class yg extends N{constructor(e,i){super();w(this,"moneyText");w(this,"profitText");w(this,"selectBusinessScreen");w(this,"game");w(this,"data");w(this,"marketButton");w(this,"ratingButton");w(this,"businessButton");w(this,"stockButton");w(this,"friendButton");w(this,"clearSaveButton");w(this,"businessMenu");w(this,"friendsMenu");this.game=e,this.data=i;const r=new ht().rect(0,S.bottomPos-30,S.width,30).fill("3E3E3E");this.addChild(r),this.moneyText=At(this.ourMoneyText),this.moneyText.style.fontSize=10,this.moneyText.anchor.set(0,.5),this.addChild(this.moneyText),this.profitText=At(this.updateProfitText),this.profitText.style.fontSize=10,this.profitText.anchor.set(1,.5),this.addChild(this.profitText),this.clearSaveButton=new xt({text:"❌",tint:"#404040",width:20,height:20}),this.clearSaveButton.onPress.connect(()=>{Me.ClearData()}),this.addChild(this.clearSaveButton),this.businessMenu=new gg(this.data),this.businessMenu.upgradeButton.onPress.connect(()=>{i.ourLevel<fe.length&&(i.ourMoney-=this.nextUpgradePrice,this.moneyText.text=this.ourMoneyText,i.increaseLevel(0),Me.SaveData(i),this.profitText.text=this.updateProfitText,e.gameView.increasePlayerLevel(0),this.updateInviteFriendButton())}),this.businessMenu.visible=!1,this.addChild(this.businessMenu),this.friendsMenu=new xg(i.friends.length-1),this.friendsMenu.visible=!1,this.addChild(this.friendsMenu),this.marketButton=new je("Market"),this.marketButton.setEnabled(!1),this.addChild(this.marketButton),this.ratingButton=new je("Rating"),this.ratingButton.setEnabled(!1),this.addChild(this.ratingButton),this.businessButton=new je("Business"),this.addChild(this.businessButton),this.stockButton=new je("Stock"),this.stockButton.setEnabled(!1),this.addChild(this.stockButton),this.friendButton=new je("Friends");const s=[this.marketButton,this.ratingButton,this.businessButton,this.stockButton,this.friendButton];function o(l,h){for(let u=0;u<s.length;u++)if(u!==h){let c=s[u];s[u].setSelected(!1),l.setChildIndex(c,5)}}this.businessButton.onDeselectCallback=()=>{this.businessMenu.visible=!1},this.businessButton.onPress.connect(()=>{this.businessMenu.visible=this.businessButton.isSelected,this.setChildIndex(this.businessMenu,10),this.setChildIndex(this.businessButton,11),o(this,2)}),this.friendButton.onDeselectCallback=()=>{this.friendsMenu.visible=!1},this.friendButton.onPress.connect(()=>{this.friendsMenu.visible=this.friendButton.isSelected,this.setChildIndex(this.friendsMenu,10),this.setChildIndex(this.friendButton,11),o(this,4)}),this.friendsMenu.inviteBtn.onPress.connect(()=>{const l=new rl(cg(1,5));i.friends.push(l),Me.SaveData(i),open("https://t.me/share/url?url=https://t.me/andeliseevTest01_bot&text=Играй! Строй! ЗАРАБАТЫВАЙ!","_blank"),this.friendsMenu.friendsText.text="Friends: "+(i.friends.length-1),e.gameView.addPlayer(l)}),this.updateInviteFriendButton(),this.addChild(this.friendButton),this.selectBusinessScreen=new mg,this.selectBusinessScreen.visible=!1;function a(l,h){i.setBusiness0(0,h),i.increaseLevel(0),Me.SaveData(i),l.profitText.text=l.updateProfitText,e.gameView.increasePlayerLevel(0),l.businessMenu.updateBusinnes0Btn(i.ourBusiness0),l.updateInviteFriendButton(),l.selectBusinessScreen.visible=!1}this.selectBusinessScreen.retailBtn.onPress.connect(()=>{a(this,pt.Retail)}),this.selectBusinessScreen.agricultureBtn.onPress.connect(()=>{a(this,pt.Agriculture)}),this.selectBusinessScreen.transportBtn.onPress.connect(()=>{a(this,pt.PublicTransport)}),this.addChild(this.selectBusinessScreen),i.ourLevel==0&&this.businessMenu.business0Btn.onPress.connect(()=>{this.selectBusinessScreen.visible=!0,o(this,-1)}),this.resize()}get updateProfitText(){return`Profit: $${fe[this.data.ourLevel]}/s`}get ourMoneyText(){return`Money: $${il(this.data.ourMoney)}`}get nextUpgradePrice(){return fe[this.data.ourLevel]*25}updateInviteFriendButton(){this.data.ourLevel>vg?(this.friendButton.enabled=!0,this.friendButton.alpha=1):(this.friendButton.enabled=!1,this.friendButton.alpha=.4)}update(e){if(this.selectBusinessScreen.visible)this.selectBusinessScreen.update(e);else{let i=!0;if(this.data.ourLevel!==fe.length-1){let r=this.nextUpgradePrice;this.businessMenu.upgradeButton.text.text=this.businessMenu.updateUpgradeButtonText(r),this.data.ourMoney<r&&(i=!1)}else i=!1,this.businessMenu.upgradeButton.text.text="Upgrade";this.businessMenu.upgradeButton.setEnabled(i)}}updateByTimer(){this.moneyText.text=this.ourMoneyText}resize(){this.moneyText.x=S.leftPos+5,this.moneyText.y=S.topPos+10,this.profitText.x=S.rightPos-5,this.profitText.y=S.topPos+10;const e=Math.floor((S.rightPos-S.leftPos)/5),i=S.rightPos-S.leftPos-e*5;this.marketButton.updateWidth(e),this.ratingButton.updateWidth(e),this.businessButton.updateWidth(e+i),this.stockButton.updateWidth(e),this.friendButton.updateWidth(e),this.marketButton.x=S.leftPos,this.ratingButton.x=S.leftPos+e,this.businessButton.x=S.leftPos+e*2,this.stockButton.x=S.leftPos+e*3+i,this.friendButton.x=S.leftPos+e*4+i;const r=S.bottomPos-this.businessButton.height;this.marketButton.y=r,this.ratingButton.y=r,this.businessButton.y=r,this.stockButton.y=r,this.friendButton.y=r,this.clearSaveButton.x=S.rightPos-this.clearSaveButton.width-5,this.clearSaveButton.y=S.topPos+20}}class _g extends N{constructor(){super();w(this,"gameView");w(this,"mainUI");w(this,"data");w(this,"timer");w(this,"assetBundles",["testBundle","background","buildings","fonts"]);this.data=new fg,Me.LoadData(this.data)}sizeLog(){const e=Math.max(document.documentElement.clientWidth,window.innerWidth||0),i=Math.max(document.documentElement.clientHeight,window.innerHeight||0),r=At(e+"x"+i);r.anchor.set(.5),r.x=S.width/2,r.y=S.width/2-10,this.addChild(r);const s=At(S.enlargedWidth+"x"+S.enlargedHeight);s.anchor.set(.5),s.x=S.width/2,s.y=S.width/2,this.addChild(s);const o=At(window.Telegram.WebApp.platform);o.anchor.set(.5),o.x=S.width/2,o.y=S.width/2+10,this.addChild(o)}constructorWithAssets(){this.gameView=new pg(this.data),this.addChild(this.gameView),this.mainUI=new yg(this,this.data)}update(e){this.gameView.update(e),this.mainUI.update(e),this.timer>0?this.timer-=e.deltaTime:this.data.ourLevel>0&&(this.timer=60,this.gameView.updateByTimer(),this.mainUI.updateByTimer(),Me.SaveData(this.data))}}let sl=750,ol=0;er.isDesktop&&(sl=400,ol=12);let fr;const bg=n=>{fr=n.touches[0].clientY},Gs=document.getElementsByTagName("body")[0],Sg=n=>{if(Gs){const t=Gs.scrollTop,e=n.changedTouches[0].clientY;t<=0&&fr!==void 0&&fr<e,n.preventDefault()}};document.documentElement.addEventListener("touchstart",bg,{passive:!1});document.documentElement.addEventListener("touchmove",Sg,{passive:!1});(async()=>(await S.Init(550,sl,1,ol),await S.ChangeScene(new _g)))();export{Q as $,Bo as A,nt as B,N as C,at as D,D as E,$ as F,L as G,Bt as H,jr as I,Pt as J,yu as K,Iu as L,j as M,rt as N,it as O,lt as P,ju as Q,$n as R,Mu as S,Gt as T,Co as U,Zr as V,ql as W,hi as X,Y,to as Z,O as _,Gn as a,Ro as a0,Oe as a1,bc as a2,Ko as a3,rf as a4,sf as a5,ke as a6,ft as a7,ua as a8,of as a9,Wo as aa,ye as ab,Jc as ac,me as ad,Ot as ae,Jr as af,ht as ag,wl as ah,Ho as ai,Et as b,G as c,xr as d,_t as e,ys as f,Uh as g,Lh as h,Mn as i,Zt as j,Fn as k,gr as l,Do as m,Rr as n,Fo as o,ho as p,kt as q,kl as r,k as s,Cl as t,Gh as u,kh as v,ut as w,Lt as x,Qs as y,yt as z};
