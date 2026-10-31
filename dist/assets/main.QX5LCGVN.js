//__HEAD__
var Ig=Object.create;var Vo=Object.defineProperty;var Rg=Object.getOwnPropertyDescriptor;var Og=Object.getOwnPropertyNames;var Kg=Object.getPrototypeOf,Dg=Object.prototype.hasOwnProperty;var Fg=(c,r)=>()=>(c&&(r=c(c=0)),r);var qg=(c,r)=>()=>(r||c((r={exports:{}}).exports,r),r.exports);var Bg=(c,r,i,u)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of Og(r))!Dg.call(c,l)&&l!==i&&Vo(c,l,{get:()=>r[l],enumerable:!(u=Rg(r,l))||u.enumerable});return c};var Hg=(c,r,i)=>(i=c!=null?Ig(Kg(c)):{},Bg(r||!c||!c.__esModule?Vo(i,"default",{value:c,enumerable:!0}):i,c));var J=Fg(()=>{});var ds=qg((eo,no)=>{J();(function(c,r){typeof eo=="object"&&typeof no<"u"?no.exports=r():typeof define=="function"&&define.amd?define(r):(c=typeof globalThis<"u"?globalThis:c||self,c.Dexie=r())})(eo,function(){"use strict";var c=function(e,n){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])},c(e,n)};function r(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");c(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var i=function(){return i=Object.assign||function(n){for(var t,a=1,o=arguments.length;a<o;a++){t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},i.apply(this,arguments)};function u(e,n,t){if(t||arguments.length===2)for(var a=0,o=n.length,s;a<o;a++)(s||!(a in n))&&(s||(s=Array.prototype.slice.call(n,0,a)),s[a]=n[a]);return e.concat(s||Array.prototype.slice.call(n))}typeof SuppressedError=="function"&&SuppressedError;var l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:globalThis,p=Object.keys,d=Array.isArray;typeof Promise<"u"&&!l.Promise&&(l.Promise=Promise);function y(e,n){return typeof n!="object"||p(n).forEach(function(t){e[t]=n[t]}),e}var j=Object.getPrototypeOf,P={}.hasOwnProperty;function K(e,n){return P.call(e,n)}function N(e,n){typeof n=="function"&&(n=n(j(e))),(typeof Reflect>"u"?p:Reflect.ownKeys)(n).forEach(function(t){Q(e,t,n[t])})}var oe=Object.defineProperty;function Q(e,n,t,a){oe(e,n,y(t&&K(t,"get")&&typeof t.get=="function"?{get:t.get,set:t.set,configurable:!0}:{value:t,configurable:!0,writable:!0},a))}function X(e){return{from:function(n){return e.prototype=Object.create(n.prototype),Q(e.prototype,"constructor",e),{extend:N.bind(null,e.prototype)}}}}var ie=Object.getOwnPropertyDescriptor;function z(e,n){var t=ie(e,n),a;return t||(a=j(e))&&z(a,n)}var le=[].slice;function te(e,n,t){return le.call(e,n,t)}function Y(e,n){return n(e)}function ue(e){if(!e)throw new Error("Assertion Failed")}function ee(e){l.setImmediate?setImmediate(e):setTimeout(e,0)}function he(e,n){return e.reduce(function(t,a,o){var s=n(a,o);return s&&(t[s[0]]=s[1]),t},{})}function ae(e,n){if(typeof n=="string"&&K(e,n))return e[n];if(!n)return e;if(typeof n!="string"){for(var t=[],a=0,o=n.length;a<o;++a){var s=ae(e,n[a]);t.push(s)}return t}var m=n.indexOf(".");if(m!==-1){var g=e[n.substr(0,m)];return g==null?void 0:ae(g,n.substr(m+1))}}function Z(e,n,t){if(!(!e||n===void 0)&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof n!="string"&&"length"in n){ue(typeof t!="string"&&"length"in t);for(var a=0,o=n.length;a<o;++a)Z(e,n[a],t[a])}else{var s=n.indexOf(".");if(s!==-1){var m=n.substr(0,s),g=n.substr(s+1);if(g==="")t===void 0?d(e)&&!isNaN(parseInt(m))?e.splice(m,1):delete e[m]:e[m]=t;else{var h=e[m];if(!h||!K(e,m)){if(t===void 0)return;h=e[m]={}}Z(h,g,t)}}else t===void 0?d(e)&&!isNaN(parseInt(n))?e.splice(n,1):delete e[n]:e[n]=t}}function Re(e,n){typeof n=="string"?Z(e,n,void 0):"length"in n&&[].map.call(n,function(t){Z(e,t,void 0)})}function pe(e){var n={};for(var t in e)K(e,t)&&(n[t]=e[t]);return n}var $e=[].concat;function de(e){return $e.apply([],e)}var _e="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(de([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(n){return n+e+"Array"})}))).filter(function(e){return l[e]}),ve=new Set(_e.map(function(e){return l[e]}));function Ce(e){var n={};for(var t in e)if(K(e,t)){var a=e[t];n[t]=!a||typeof a!="object"||ve.has(a.constructor)?a:Ce(a)}return n}var we=null;function Te(e){we=new WeakMap;var n=Qe(e);return we=null,n}function Qe(e){if(!e||typeof e!="object")return e;var n=we.get(e);if(n)return n;if(d(e)){n=[],we.set(e,n);for(var t=0,a=e.length;t<a;++t)n.push(Qe(e[t]))}else if(ve.has(e.constructor))n=e;else{var o=j(e);n=o===Object.prototype?{}:Object.create(o),we.set(e,n);for(var s in e)K(e,s)&&(n[s]=Qe(e[s]))}return n}var un={}.toString;function bn(e){return un.call(e).slice(8,-1)}var qe=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ir=typeof qe=="symbol"?function(e){var n;return e!=null&&(n=e[qe])&&n.apply(e)}:function(){return null};function xe(e,n){var t=e.indexOf(n);return t>=0&&e.splice(t,1),t>=0}var Oe={};function be(e){var n,t,a,o;if(arguments.length===1){if(d(e))return e.slice();if(this===Oe&&typeof e=="string")return[e];if(o=ir(e)){for(t=[];a=o.next(),!a.done;)t.push(a.value);return t}if(e==null)return[e];if(n=e.length,typeof n=="number"){for(t=new Array(n);n--;)t[n]=e[n];return t}return[e]}for(n=arguments.length,t=new Array(n);n--;)t[n]=arguments[n];return t}var Ue=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},ar=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"],Xe=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],en=ar.concat(Xe),wr={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function sn(e,n){this.name=e,this.message=n}X(sn).from(Error).extend({toString:function(){return this.name+": "+this.message}});function yn(e,n){return e+". Errors: "+Object.keys(n).map(function(t){return n[t].toString()}).filter(function(t,a,o){return o.indexOf(t)===a}).join(`
`)}function On(e,n,t,a){this.failures=n,this.failedKeys=a,this.successCount=t,this.message=yn(e,n)}X(On).from(sn);function ln(e,n){this.name="BulkError",this.failures=Object.keys(n).map(function(t){return n[t]}),this.failuresByPos=n,this.message=yn(e,this.failures)}X(ln).from(sn);var Be=en.reduce(function(e,n){return e[n]=n+"Error",e},{}),Kn=sn,H=en.reduce(function(e,n){var t=n+"Error";function a(o,s){this.name=t,o?typeof o=="string"?(this.message="".concat(o).concat(s?`
 `+s:""),this.inner=s||null):typeof o=="object"&&(this.message="".concat(o.name," ").concat(o.message),this.inner=o):(this.message=wr[n]||t,this.inner=null)}return X(a).from(Kn),e[n]=a,e},{});H.Syntax=SyntaxError,H.Type=TypeError,H.Range=RangeError;var or=Xe.reduce(function(e,n){return e[n+"Error"]=H[n],e},{});function mm(e,n){if(!e||e instanceof sn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!or[e.name])return e;var t=new or[e.name](n||e.message,e);return"stack"in e&&Q(t,"stack",{get:function(){return this.inner.stack}}),t}var Gr=en.reduce(function(e,n){return["Syntax","Type","Range"].indexOf(n)===-1&&(e[n+"Error"]=H[n]),e},{});Gr.ModifyError=On,Gr.DexieError=sn,Gr.BulkError=ln;function se(){}function xr(e){return e}function gm(e,n){return e==null||e===xr?n:function(t){return n(e(t))}}function Dn(e,n){return function(){e.apply(this,arguments),n.apply(this,arguments)}}function hm(e,n){return e===se?n:function(){var t=e.apply(this,arguments);t!==void 0&&(arguments[0]=t);var a=this.onsuccess,o=this.onerror;this.onsuccess=null,this.onerror=null;var s=n.apply(this,arguments);return a&&(this.onsuccess=this.onsuccess?Dn(a,this.onsuccess):a),o&&(this.onerror=this.onerror?Dn(o,this.onerror):o),s!==void 0?s:t}}function cm(e,n){return e===se?n:function(){e.apply(this,arguments);var t=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,n.apply(this,arguments),t&&(this.onsuccess=this.onsuccess?Dn(t,this.onsuccess):t),a&&(this.onerror=this.onerror?Dn(a,this.onerror):a)}}function dm(e,n){return e===se?n:function(){var t=e.apply(this,arguments),a=arguments[0];y(a,t);var o=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var m=n.apply(this,arguments);return o&&(this.onsuccess=this.onsuccess?Dn(o,this.onsuccess):o),s&&(this.onerror=this.onerror?Dn(s,this.onerror):s),t===void 0?m===void 0?void 0:m:y(t,m)}}function fm(e,n){return e===se?n:function(){return n.apply(this,arguments)===!1?!1:e.apply(this,arguments)}}function ui(e,n){return e===se?n:function(){var t=e.apply(this,arguments);if(t&&typeof t.then=="function"){for(var a=this,o=arguments.length,s=new Array(o);o--;)s[o]=arguments[o];return t.then(function(){return n.apply(a,s)})}return n.apply(this,arguments)}}var nn=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function lo(e,n){nn=e}var Sr={},mo=100,si=typeof Promise>"u"?[]:function(){var e=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[e,j(e),e];var n=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[n,j(n),e]}(),go=si[0],ho=si[1],pm=si[2],vm=ho&&ho.then,Fn=go&&go.constructor,li=!!pm;function bm(){queueMicrotask(km)}var _r=function(e,n){Tr.push([e,n]),Vr&&(bm(),Vr=!1)},mi=!0,Vr=!0,qn=[],Jr=[],gi=xr,mn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:se,pgp:!1,env:{},finalize:se},B=mn,Tr=[],Bn=0,Yr=[];function O(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var n=this._PSD=B;if(typeof e!="function"){if(e!==Sr)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&ci(this,this._value);return}this._state=null,this._value=null,++n.ref,fo(this,e)}var hi={get:function(){var e=B,n=nt;function t(a,o){var s=this,m=!e.global&&(e!==B||n!==nt),g=m&&!wn(),h=new O(function(f,v){di(s,new co(bo(a,e,m,g),bo(o,e,m,g),f,v,e))});return this._consoleTask&&(h._consoleTask=this._consoleTask),h}return t.prototype=Sr,t},set:function(e){Q(this,"then",e&&e.prototype===Sr?hi:{get:function(){return e},set:hi.set})}};N(O.prototype,{then:hi,_then:function(e,n){di(this,new co(null,null,e,n,B))},catch:function(e){if(arguments.length===1)return this.then(null,e);var n=arguments[0],t=arguments[1];return typeof n=="function"?this.then(null,function(a){return a instanceof n?t(a):Qr(a)}):this.then(null,function(a){return a&&a.name===n?t(a):Qr(a)})},finally:function(e){return this.then(function(n){return O.resolve(e()).then(function(){return n})},function(n){return O.resolve(e()).then(function(){return Qr(n)})})},timeout:function(e,n){var t=this;return e<1/0?new O(function(a,o){var s=setTimeout(function(){return o(new H.Timeout(n))},e);t.then(a,o).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&Q(O.prototype,Symbol.toStringTag,"Dexie.Promise"),mn.env=vo();function co(e,n,t,a,o){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof n=="function"?n:null,this.resolve=t,this.reject=a,this.psd=o}N(O,{all:function(){var e=be.apply(null,arguments).map(rt);return new O(function(n,t){e.length===0&&n([]);var a=e.length;e.forEach(function(o,s){return O.resolve(o).then(function(m){e[s]=m,--a||n(e)},t)})})},resolve:function(e){if(e instanceof O)return e;if(e&&typeof e.then=="function")return new O(function(t,a){e.then(t,a)});var n=new O(Sr,!0,e);return n},reject:Qr,race:function(){var e=be.apply(null,arguments).map(rt);return new O(function(n,t){e.map(function(a){return O.resolve(a).then(n,t)})})},PSD:{get:function(){return B},set:function(e){return B=e}},totalEchoes:{get:function(){return nt}},newPSD:kn,usePSD:Hn,scheduler:{get:function(){return _r},set:function(e){_r=e}},rejectionMapper:{get:function(){return gi},set:function(e){gi=e}},follow:function(e,n){return new O(function(t,a){return kn(function(o,s){var m=B;m.unhandleds=[],m.onunhandled=s,m.finalize=Dn(function(){var g=this;wm(function(){g.unhandleds.length===0?o():s(g.unhandleds[0])})},m.finalize),e()},n,t,a)})}}),Fn&&(Fn.allSettled&&Q(O,"allSettled",function(){var e=be.apply(null,arguments).map(rt);return new O(function(n){e.length===0&&n([]);var t=e.length,a=new Array(t);e.forEach(function(o,s){return O.resolve(o).then(function(m){return a[s]={status:"fulfilled",value:m}},function(m){return a[s]={status:"rejected",reason:m}}).then(function(){return--t||n(a)})})})}),Fn.any&&typeof AggregateError<"u"&&Q(O,"any",function(){var e=be.apply(null,arguments).map(rt);return new O(function(n,t){e.length===0&&t(new AggregateError([]));var a=e.length,o=new Array(a);e.forEach(function(s,m){return O.resolve(s).then(function(g){return n(g)},function(g){o[m]=g,--a||t(new AggregateError(o))})})})}),Fn.withResolvers&&(O.withResolvers=Fn.withResolvers));function fo(e,n){try{n(function(t){if(e._state===null){if(t===e)throw new TypeError("A promise cannot be resolved with itself.");var a=e._lib&&ur();t&&typeof t.then=="function"?fo(e,function(o,s){t instanceof O?t._then(o,s):t.then(o,s)}):(e._state=!0,e._value=t,po(e)),a&&sr()}},ci.bind(null,e))}catch(t){ci(e,t)}}function ci(e,n){if(Jr.push(n),e._state===null){var t=e._lib&&ur();n=gi(n),e._state=!1,e._value=n,xm(e),po(e),t&&sr()}}function po(e){var n=e._listeners;e._listeners=[];for(var t=0,a=n.length;t<a;++t)di(e,n[t]);var o=e._PSD;--o.ref||o.finalize(),Bn===0&&(++Bn,_r(function(){--Bn===0&&fi()},[]))}function di(e,n){if(e._state===null){e._listeners.push(n);return}var t=e._state?n.onFulfilled:n.onRejected;if(t===null)return(e._state?n.resolve:n.reject)(e._value);++n.psd.ref,++Bn,_r(ym,[t,e,n])}function ym(e,n,t){try{var a,o=n._value;!n._state&&Jr.length&&(Jr=[]),a=nn&&n._consoleTask?n._consoleTask.run(function(){return e(o)}):e(o),!n._state&&Jr.indexOf(o)===-1&&Sm(n),t.resolve(a)}catch(s){t.reject(s)}finally{--Bn===0&&fi(),--t.psd.ref||t.psd.finalize()}}function km(){Hn(mn,function(){ur()&&sr()})}function ur(){var e=mi;return mi=!1,Vr=!1,e}function sr(){var e,n,t;do for(;Tr.length>0;)for(e=Tr,Tr=[],t=e.length,n=0;n<t;++n){var a=e[n];a[0].apply(null,a[1])}while(Tr.length>0);mi=!0,Vr=!0}function fi(){var e=qn;qn=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)});for(var n=Yr.slice(0),t=n.length;t;)n[--t]()}function wm(e){function n(){e(),Yr.splice(Yr.indexOf(n),1)}Yr.push(n),++Bn,_r(function(){--Bn===0&&fi()},[])}function xm(e){qn.some(function(n){return n._value===e._value})||qn.push(e)}function Sm(e){for(var n=qn.length;n;)if(qn[--n]._value===e._value){qn.splice(n,1);return}}function Qr(e){return new O(Sr,!1,e)}function ge(e,n){var t=B;return function(){var a=ur(),o=B;try{return xn(t,!0),e.apply(this,arguments)}catch(s){n&&n(s)}finally{xn(o,!1),a&&sr()}}}var Se={awaits:0,echoes:0,id:0},_m=0,Xr=[],et=0,nt=0,Tm=0;function kn(e,n,t,a){var o=B,s=Object.create(o);s.parent=o,s.ref=0,s.global=!1,s.id=++Tm,mn.env,s.env=li?{Promise:O,PromiseProp:{value:O,configurable:!0,writable:!0},all:O.all,race:O.race,allSettled:O.allSettled,any:O.any,resolve:O.resolve,reject:O.reject}:{},n&&y(s,n),++o.ref,s.finalize=function(){--this.parent.ref||this.parent.finalize()};var m=Hn(s,e,t,a);return s.ref===0&&s.finalize(),m}function lr(){return Se.id||(Se.id=++_m),++Se.awaits,Se.echoes+=mo,Se.id}function wn(){return Se.awaits?(--Se.awaits===0&&(Se.id=0),Se.echoes=Se.awaits*mo,!0):!1}(""+vm).indexOf("[native code]")===-1&&(lr=wn=se);function rt(e){return Se.echoes&&e&&e.constructor===Fn?(lr(),e.then(function(n){return wn(),n},function(n){return wn(),fe(n)})):e}function Em(e){++nt,(!Se.echoes||--Se.echoes===0)&&(Se.echoes=Se.awaits=Se.id=0),Xr.push(B),xn(e,!0)}function Am(){var e=Xr[Xr.length-1];Xr.pop(),xn(e,!1)}function xn(e,n){var t=B;if((n?Se.echoes&&(!et++||e!==B):et&&(!--et||e!==B))&&queueMicrotask(n?Em.bind(null,e):Am),e!==B&&(B=e,t===mn&&(mn.env=vo()),li)){var a=mn.env.Promise,o=e.env;(t.global||e.global)&&(Object.defineProperty(l,"Promise",o.PromiseProp),a.all=o.all,a.race=o.race,a.resolve=o.resolve,a.reject=o.reject,o.allSettled&&(a.allSettled=o.allSettled),o.any&&(a.any=o.any))}}function vo(){var e=l.Promise;return li?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(l,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function Hn(e,n,t,a,o){var s=B;try{return xn(e,!0),n(t,a,o)}finally{xn(s,!1)}}function bo(e,n,t,a){return typeof e!="function"?e:function(){var o=B;t&&lr(),xn(n,!0);try{return e.apply(this,arguments)}finally{xn(o,!1),a&&queueMicrotask(wn)}}}function pi(e){Promise===Fn&&Se.echoes===0?et===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}var fe=O.reject;function vi(e,n,t,a){if(!e.idbdb||!e._state.openComplete&&!B.letThrough&&!e._vip){if(e._state.openComplete)return fe(new H.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return fe(new H.DatabaseClosed);e.open().catch(se)}return e._state.dbReadyPromise.then(function(){return vi(e,n,t,a)})}else{var o=e._createTransaction(n,t,e._dbSchema);try{o.create(),e._state.PR1398_maxLoop=3}catch(s){return s.name===Be.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e.close({disableAutoOpen:!1}),e.open().then(function(){return vi(e,n,t,a)})):fe(s)}return o._promise(n,function(s,m){return kn(function(){return B.trans=o,a(s,m,o)})}).then(function(s){if(n==="readwrite")try{o.idbtrans.commit()}catch{}return n==="readonly"?s:o._completion.then(function(){return s})})}}var yo="4.4.7",Wn="￿",bi=-1/0,gn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ko="String expected.",wo=1e3,tt="__dbnames",yi="readonly",ki="readwrite";function Ln(e,n){return e?n?function(){return e.apply(this,arguments)&&n.apply(this,arguments)}:e:n}var xo={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function it(e){return typeof e=="string"&&!/\./.test(e)?function(n){return n[e]===void 0&&e in n&&(n=Te(n),delete n[e]),n}:function(n){return n}}function So(){throw H.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function re(e,n){try{var t=_o(e),a=_o(n);if(t!==a)return t==="Array"?1:a==="Array"?-1:t==="binary"?1:a==="binary"?-1:t==="string"?1:a==="string"?-1:t==="Date"?1:a!=="Date"?NaN:-1;switch(t){case"number":case"Date":case"string":return e>n?1:e<n?-1:0;case"binary":return Cm(To(e),To(n));case"Array":return $m(e,n)}}catch{}return NaN}function $m(e,n){for(var t=e.length,a=n.length,o=t<a?t:a,s=0;s<o;++s){var m=re(e[s],n[s]);if(m!==0)return m}return t===a?0:t<a?-1:1}function Cm(e,n){for(var t=e.length,a=n.length,o=t<a?t:a,s=0;s<o;++s)if(e[s]!==n[s])return e[s]<n[s]?-1:1;return t===a?0:t<a?-1:1}function _o(e){var n=typeof e;if(n!=="object")return n;if(ArrayBuffer.isView(e))return"binary";var t=bn(e);return t==="ArrayBuffer"?"binary":t}function To(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function at(e,n,t){var a=e.schema.yProps;return a?(n&&t.numFailures>0&&(n=n.filter(function(o,s){return!t.failures[s]})),Promise.all(a.map(function(o){var s=o.updatesTable;return n?e.db.table(s).where("k").anyOf(n).delete():e.db.table(s).clear()})).then(function(){return t})):t}var Er=function(){function e(n){this["@@propmod"]=n}return e.prototype.execute=function(n){var t,a=this["@@propmod"];if(a.add!==void 0){var o=a.add;if(d(o))return u(u([],d(n)?n:[],!0),o,!0).sort();if(typeof o=="number")return(Number(n)||0)+o;if(typeof o=="bigint")try{return BigInt(n)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(a.remove!==void 0){var s=a.remove;if(d(s))return d(n)?n.filter(function(g){return!s.includes(g)}).sort():[];if(typeof s=="number")return Number(n)-s;if(typeof s=="bigint")try{return BigInt(n)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}var m=(t=a.replacePrefix)===null||t===void 0?void 0:t[0];return m&&typeof n=="string"&&n.startsWith(m)?a.replacePrefix[1]+n.substring(m.length):n},e}();function Eo(e,n){for(var t=p(n),a=t.length,o=!1,s=0;s<a;++s){var m=t[s],g=n[m],h=ae(e,m);g instanceof Er?(Z(e,m,g.execute(h)),o=!0):h!==g&&(Z(e,m,g),o=!0)}return o}var Ao=function(){function e(){}return e.prototype._trans=function(n,t,a){var o=this._tx||B.trans,s=this.name,m=nn&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(n==="readonly"?"read":"write"," ").concat(this.name));function g(v,w,x){if(!x.schema[s])throw new H.NotFound("Table "+s+" not part of transaction");return t(x.idbtrans,x)}var h=ur();try{var f=o&&o.db._novip===this.db._novip?o===B.trans?o._promise(n,g,a):kn(function(){return o._promise(n,g,a)},{trans:o,transless:B.transless||B}):vi(this.db,n,[this.name],g);return m&&(f._consoleTask=m,f=f.catch(function(v){return console.trace(v),fe(v)})),f}finally{h&&sr()}},e.prototype.get=function(n,t){var a=this;return n&&n.constructor===Object?this.where(n).first(t):n==null?fe(new H.Type("Invalid argument to Table.get()")):this._trans("readonly",function(o){return a.core.get({trans:o,key:n}).then(function(s){return a.hook.reading.fire(s)})}).then(t)},e.prototype.where=function(n){if(typeof n=="string")return new this.db.WhereClause(this,n);if(d(n))return new this.db.WhereClause(this,"[".concat(n.join("+"),"]"));var t=p(n);if(t.length===1)return this.where(t[0]).equals(n[t[0]]);var a=this.schema.indexes.concat(this.schema.primKey).filter(function(v){if(v.compound&&t.every(function(x){return v.keyPath.indexOf(x)>=0})){for(var w=0;w<t.length;++w)if(t.indexOf(v.keyPath[w])===-1)return!1;return!0}return!1}).sort(function(v,w){return v.keyPath.length-w.keyPath.length})[0];if(a&&this.db._maxKey!==Wn){var o=a.keyPath.slice(0,t.length);return this.where(o).equals(o.map(function(v){return n[v]}))}!a&&nn&&console.warn("The query ".concat(JSON.stringify(n)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var s=this.schema.idxByName;function m(v,w){return re(v,w)===0}var g=t.reduce(function(v,w){var x=v[0],A=v[1],b=s[w],k=n[w];return[x||b,x||!b?Ln(A,b&&b.multi?function(_){var S=ae(_,w);return d(S)&&S.some(function(C){return m(k,C)})}:function(_){return m(k,ae(_,w))}):A]},[null,null]),h=g[0],f=g[1];return h?this.where(h.name).equals(n[h.keyPath]).filter(f):a?this.filter(f):this.where(t).equals("")},e.prototype.filter=function(n){return this.toCollection().and(n)},e.prototype.count=function(n){return this.toCollection().count(n)},e.prototype.offset=function(n){return this.toCollection().offset(n)},e.prototype.limit=function(n){return this.toCollection().limit(n)},e.prototype.each=function(n){return this.toCollection().each(n)},e.prototype.toArray=function(n){return this.toCollection().toArray(n)},e.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},e.prototype.orderBy=function(n){return new this.db.Collection(new this.db.WhereClause(this,d(n)?"[".concat(n.join("+"),"]"):n))},e.prototype.reverse=function(){return this.toCollection().reverse()},e.prototype.mapToClass=function(n){var t=this,a=t.db,o=t.name;this.schema.mappedClass=n,n.prototype instanceof So&&(n=function(h){r(f,h);function f(){return h!==null&&h.apply(this,arguments)||this}return Object.defineProperty(f.prototype,"db",{get:function(){return a},enumerable:!1,configurable:!0}),f.prototype.table=function(){return o},f}(n));for(var s=new Set,m=n.prototype;m;m=j(m))Object.getOwnPropertyNames(m).forEach(function(h){return s.add(h)});var g=function(h){if(!h)return h;var f=Object.create(n.prototype);for(var v in h)if(!s.has(v))try{f[v]=h[v]}catch{}return f};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=g,this.hook("reading",g),n},e.prototype.defineClass=function(){function n(t){y(this,t)}return this.mapToClass(n)},e.prototype.add=function(n,t){var a=this,o=this.schema.primKey,s=o.auto,m=o.keyPath,g=n;return m&&s&&(g=it(m)(n)),this._trans("readwrite",function(h){return a.core.mutate({trans:h,type:"add",keys:t!=null?[t]:null,values:[g]})}).then(function(h){return h.numFailures?O.reject(h.failures[0]):h.lastResult}).then(function(h){if(m)try{Z(n,m,h)}catch{}return h})},e.prototype.upsert=function(n,t){var a=this,o=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return a.core.get({trans:s,key:n}).then(function(m){var g=m!=null?m:{};return Eo(g,t),o&&Z(g,o,n),a.core.mutate({trans:s,type:"put",values:[g],keys:[n],upsert:!0,updates:{keys:[n],changeSpecs:[t]}}).then(function(h){return h.numFailures?O.reject(h.failures[0]):!!m})})})},e.prototype.update=function(n,t){if(typeof n=="object"&&!d(n)){var a=ae(n,this.schema.primKey.keyPath);return a===void 0?fe(new H.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(a).modify(t)}else return this.where(":id").equals(n).modify(t)},e.prototype.put=function(n,t){var a=this,o=this.schema.primKey,s=o.auto,m=o.keyPath,g=n;return m&&s&&(g=it(m)(n)),this._trans("readwrite",function(h){return a.core.mutate({trans:h,type:"put",values:[g],keys:t!=null?[t]:null})}).then(function(h){return h.numFailures?O.reject(h.failures[0]):h.lastResult}).then(function(h){if(m)try{Z(n,m,h)}catch{}return h})},e.prototype.delete=function(n){var t=this;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:[n]}).then(function(o){return at(t,[n],o)}).then(function(o){return o.numFailures?O.reject(o.failures[0]):void 0})})},e.prototype.clear=function(){var n=this;return this._trans("readwrite",function(t){return n.core.mutate({trans:t,type:"deleteRange",range:xo}).then(function(a){return at(n,null,a)})}).then(function(t){return t.numFailures?O.reject(t.failures[0]):void 0})},e.prototype.bulkGet=function(n){var t=this;return this._trans("readonly",function(a){return t.core.getMany({keys:n,trans:a}).then(function(o){return o.map(function(s){return t.hook.reading.fire(s)})})})},e.prototype.bulkAdd=function(n,t,a){var o=this,s=Array.isArray(t)?t:void 0;a=a||(s?void 0:t);var m=a?a.allKeys:void 0;return this._trans("readwrite",function(g){var h=o.schema.primKey,f=h.auto,v=h.keyPath;if(v&&s)throw new H.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==n.length)throw new H.InvalidArgument("Arguments objects and keys must have the same length");var w=n.length,x=v&&f?n.map(it(v)):n;return o.core.mutate({trans:g,type:"add",keys:s,values:x,wantResults:m}).then(function(A){var b=A.numFailures,k=A.results,_=A.lastResult,S=A.failures,C=m?k:_;if(b===0)return C;throw new ln("".concat(o.name,".bulkAdd(): ").concat(b," of ").concat(w," operations failed"),S)})})},e.prototype.bulkPut=function(n,t,a){var o=this,s=Array.isArray(t)?t:void 0;a=a||(s?void 0:t);var m=a?a.allKeys:void 0;return this._trans("readwrite",function(g){var h=o.schema.primKey,f=h.auto,v=h.keyPath;if(v&&s)throw new H.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==n.length)throw new H.InvalidArgument("Arguments objects and keys must have the same length");var w=n.length,x=v&&f?n.map(it(v)):n;return o.core.mutate({trans:g,type:"put",keys:s,values:x,wantResults:m}).then(function(A){var b=A.numFailures,k=A.results,_=A.lastResult,S=A.failures,C=m?k:_;if(b===0)return C;throw new ln("".concat(o.name,".bulkPut(): ").concat(b," of ").concat(w," operations failed"),S)})})},e.prototype.bulkUpdate=function(n){var t=this,a=n.map(function(m){return m.key}),o=n.map(function(m){return m.changes}),s=[];return this._trans("readwrite",function(m){var g=t.core;return g.getMany({trans:m,keys:a,cache:"clone"}).then(function(h){var f=g.schema.primaryKey,v=f.outbound,w=f.extractKey,x=[],A=[];n.forEach(function(k,_){var S=k.key,C=k.changes,$=h[_];if($){for(var T=0,E=Object.keys(C);T<E.length;T++){var R=E[T];Z($,R,C[R])}if(!v&&re(w($),S)!==0)throw new H.Constraint("Cannot update primary key in bulkUpdate()");s.push(_),x.push(S),A.push($)}});var b=x.length;return g.mutate({trans:m,type:"put",keys:x,values:A,updates:{keys:a,changeSpecs:o}}).then(function(k){var _=k.numFailures,S=k.failures;if(_===0)return b;for(var C=0,$=Object.keys(S);C<$.length;C++){var T=$[C],E=s[Number(T)];if(E!=null){var R=S[T];delete S[T],S[E]=R}}throw new ln("".concat(t.name,".bulkUpdate(): ").concat(_," of ").concat(b," operations failed"),S)})})})},e.prototype.bulkDelete=function(n){var t=this,a=n.length;return this._trans("readwrite",function(o){return t.core.mutate({trans:o,type:"delete",keys:n}).then(function(s){return at(t,n,s)})}).then(function(o){var s=o.numFailures,m=o.lastResult,g=o.failures;if(s===0)return m;throw new ln("".concat(t.name,".bulkDelete(): ").concat(s," of ").concat(a," operations failed"),g)})},e}();function Ar(e){var n={},t=function(g,h){if(h){for(var f=arguments.length,v=new Array(f-1);--f;)v[f-1]=arguments[f];return n[g].subscribe.apply(null,v),e}else if(typeof g=="string")return n[g]};t.addEventType=s;for(var a=1,o=arguments.length;a<o;++a)s(arguments[a]);return t;function s(g,h,f){if(typeof g=="object")return m(g);h||(h=fm),f||(f=se);var v={subscribers:[],fire:f,subscribe:function(w){v.subscribers.indexOf(w)===-1&&(v.subscribers.push(w),v.fire=h(v.fire,w))},unsubscribe:function(w){v.subscribers=v.subscribers.filter(function(x){return x!==w}),v.fire=v.subscribers.reduce(h,f)}};return n[g]=t[g]=v,v}function m(g){p(g).forEach(function(h){var f=g[h];if(d(f))s(h,g[h][0],g[h][1]);else if(f==="asap")var v=s(h,xr,function(){for(var x=arguments.length,A=new Array(x);x--;)A[x]=arguments[x];v.subscribers.forEach(function(b){ee(function(){b.apply(null,A)})})});else throw new H.InvalidArgument("Invalid event config")})}}function $r(e,n){return X(n).from({prototype:e}),n}function jm(e){return $r(Ao.prototype,function(t,a,o){this.db=e,this._tx=o,this.name=t,this.schema=a,this.hook=e._allTables[t]?e._allTables[t].hook:Ar(null,{creating:[hm,se],reading:[gm,xr],updating:[dm,se],deleting:[cm,se]})})}function mr(e,n){return!(e.filter||e.algorithm||e.or)&&(n?e.justLimit:!e.replayFilter)}function wi(e,n){e.filter=Ln(e.filter,n)}function xi(e,n,t){var a=e.replayFilter;e.replayFilter=a?function(){return Ln(a(),n())}:n,e.justLimit=t&&!a}function Nm(e,n){e.isMatch=Ln(e.isMatch,n)}function ot(e,n){if(e.isPrimKey)return n.primaryKey;var t=n.getIndexByKeyPath(e.index);if(!t)throw new H.Schema("KeyPath "+e.index+" on object store "+n.name+" is not indexed");return t}function $o(e,n,t){var a=ot(e,n.schema);return n.openCursor({trans:t,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function ut(e,n,t,a){var o=e.replayFilter?Ln(e.filter,e.replayFilter()):e.filter;if(e.or){var s={},m=function(g,h,f){if(!o||o(h,f,function(x){return h.stop(x)},function(x){return h.fail(x)})){var v=h.primaryKey,w=""+v;w==="[object ArrayBuffer]"&&(w=""+new Uint8Array(v)),K(s,w)||(s[w]=!0,n(g,h,f))}};return Promise.all([e.or._iterate(m,t),Co($o(e,a,t),e.algorithm,m,!e.keysOnly&&e.valueMapper)])}else return Co($o(e,a,t),Ln(e.algorithm,o),n,!e.keysOnly&&e.valueMapper)}function Co(e,n,t,a){var o=a?function(m,g,h){return t(a(m),g,h)}:t,s=ge(o);return e.then(function(m){if(m)return m.start(function(){var g=function(){return m.continue()};(!n||n(m,function(h){return g=h},function(h){m.stop(h),g=se},function(h){m.fail(h),g=se}))&&s(m.value,m,function(h){return g=h}),g()})})}var Pm=function(){function e(){}return e.prototype._read=function(n,t){var a=this._ctx;return a.error?a.table._trans(null,fe.bind(null,a.error)):a.table._trans("readonly",n).then(t)},e.prototype._write=function(n){var t=this._ctx;return t.error?t.table._trans(null,fe.bind(null,t.error)):t.table._trans("readwrite",n,"locked")},e.prototype._addAlgorithm=function(n){var t=this._ctx;t.algorithm=Ln(t.algorithm,n)},e.prototype._iterate=function(n,t){return ut(this._ctx,n,t,this._ctx.table.core)},e.prototype.clone=function(n){var t=Object.create(this.constructor.prototype),a=Object.create(this._ctx);return n&&y(a,n),t._ctx=a,t},e.prototype.raw=function(){return this._ctx.valueMapper=null,this},e.prototype.each=function(n){var t=this._ctx;return this._read(function(a){return ut(t,n,a,t.table.core)})},e.prototype.count=function(n){var t=this;return this._read(function(a){var o=t._ctx,s=o.table.core;if(mr(o,!0))return s.count({trans:a,query:{index:ot(o,s.schema),range:o.range}}).then(function(g){return Math.min(g,o.limit)});var m=0;return ut(o,function(){return++m,!1},a,s).then(function(){return m})}).then(n)},e.prototype.sortBy=function(n,t){var a=n.split(".").reverse(),o=a[0],s=a.length-1;function m(f,v){return v?m(f[a[v]],v-1):f[o]}var g=this._ctx.dir==="next"?1:-1;function h(f,v){var w=m(f,s),x=m(v,s);return re(w,x)*g}return this.toArray(function(f){return f.slice().sort(h)}).then(t)},e.prototype.toArray=function(n){var t=this;return this._read(function(a){var o=t._ctx;if(mr(o,!0)&&o.limit>0){var s=o.valueMapper,m=ot(o,o.table.core.schema);return o.table.core.query({trans:a,limit:o.limit,values:!0,direction:o.dir==="prev"?"prev":void 0,query:{index:m,range:o.range}}).then(function(h){var f=h.result;return s?f.map(s):f})}else{var g=[];return ut(o,function(h){return g.push(h)},a,o.table.core).then(function(){return g})}},n)},e.prototype.offset=function(n){var t=this._ctx;return n<=0?this:(t.offset+=n,mr(t)?xi(t,function(){var a=n;return function(o,s){return a===0?!0:a===1?(--a,!1):(s(function(){o.advance(a),a=0}),!1)}}):xi(t,function(){var a=n;return function(){return--a<0}}),this)},e.prototype.limit=function(n){return this._ctx.limit=Math.min(this._ctx.limit,n),xi(this._ctx,function(){var t=n;return function(a,o,s){return--t<=0&&o(s),t>=0}},!0),this},e.prototype.until=function(n,t){return wi(this._ctx,function(a,o,s){return n(a.value)?(o(s),t):!0}),this},e.prototype.first=function(n){return this.limit(1).toArray(function(t){return t[0]}).then(n)},e.prototype.last=function(n){return this.reverse().first(n)},e.prototype.filter=function(n){return wi(this._ctx,function(t){return n(t.value)}),Nm(this._ctx,n),this},e.prototype.and=function(n){return this.filter(n)},e.prototype.or=function(n){return new this.db.WhereClause(this._ctx.table,n,this)},e.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},e.prototype.desc=function(){return this.reverse()},e.prototype.eachKey=function(n){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(a,o){n(o.key,o)})},e.prototype.eachUniqueKey=function(n){return this._ctx.unique="unique",this.eachKey(n)},e.prototype.eachPrimaryKey=function(n){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(a,o){n(o.primaryKey,o)})},e.prototype.keys=function(n){var t=this._ctx;t.keysOnly=!t.isMatch;var a=[];return this.each(function(o,s){a.push(s.key)}).then(function(){return a}).then(n)},e.prototype.primaryKeys=function(n){var t=this._ctx;if(mr(t,!0)&&t.limit>0)return this._read(function(o){var s=ot(t,t.table.core.schema);return t.table.core.query({trans:o,values:!1,limit:t.limit,direction:t.dir==="prev"?"prev":void 0,query:{index:s,range:t.range}})}).then(function(o){var s=o.result;return s}).then(n);t.keysOnly=!t.isMatch;var a=[];return this.each(function(o,s){a.push(s.primaryKey)}).then(function(){return a}).then(n)},e.prototype.uniqueKeys=function(n){return this._ctx.unique="unique",this.keys(n)},e.prototype.firstKey=function(n){return this.limit(1).keys(function(t){return t[0]}).then(n)},e.prototype.lastKey=function(n){return this.reverse().firstKey(n)},e.prototype.distinct=function(){var n=this._ctx,t=n.index&&n.table.schema.idxByName[n.index];if(!t||!t.multi)return this;var a={};return wi(this._ctx,function(o){var s=o.primaryKey.toString(),m=K(a,s);return a[s]=!0,!m}),this},e.prototype.modify=function(n){var t=this,a=this._ctx;return this._write(function(o){var s;typeof n=="function"?s=n:s=function(S){return Eo(S,n)};var m=a.table.core,g=m.schema.primaryKey,h=g.outbound,f=g.extractKey,v=200,w=t.db._options.modifyChunkSize;w&&(typeof w=="object"?v=w[m.name]||w["*"]||200:v=w);var x=[],A=0,b=[],k=function(S,C){var $=C.failures,T=C.numFailures;A+=S-T;for(var E=0,R=p($);E<R.length;E++){var M=R[E];x.push($[M])}},_=n===jo;return t.clone().primaryKeys().then(function(S){var C=mr(a)&&a.limit===1/0&&(typeof n!="function"||_)&&{index:a.index,range:a.range},$=function(T){var E=Math.min(v,S.length-T),R=S.slice(T,T+E);return(_?Promise.resolve([]):m.getMany({trans:o,keys:R,cache:"immutable"})).then(function(M){var I=[],F=[],ne=h?[]:null,W=_?R:[];if(!_)for(var q=0;q<E;++q){var U=M[q],V={value:Te(U),primKey:S[T+q]};s.call(V,V.value,V)!==!1&&(V.value==null?W.push(S[T+q]):!h&&re(f(U),f(V.value))!==0?(W.push(S[T+q]),I.push(V.value)):(F.push(V.value),h&&ne.push(S[T+q])))}return Promise.resolve(I.length>0&&m.mutate({trans:o,type:"add",values:I}).then(function(me){for(var L in me.failures)W.splice(parseInt(L),1);k(I.length,me)})).then(function(){return(F.length>0||C&&typeof n=="object")&&m.mutate({trans:o,type:"put",keys:ne,values:F,criteria:C,changeSpec:typeof n!="function"&&n,isAdditionalChunk:T>0}).then(function(me){return k(F.length,me)})}).then(function(){return(W.length>0||C&&_)&&m.mutate({trans:o,type:"delete",keys:W,criteria:C,isAdditionalChunk:T>0}).then(function(me){return at(a.table,W,me)}).then(function(me){return k(W.length,me)})}).then(function(){return S.length>T+E&&$(T+v)})})};return $(0).then(function(){if(x.length>0)throw new On("Error modifying one or more objects",x,A,b);return S.length})})})},e.prototype.delete=function(){var n=this._ctx,t=n.range;return mr(n)&&!n.table.schema.yProps&&(n.isPrimKey||t.type===3)?this._write(function(a){var o=n.table.core.schema.primaryKey,s=t;return n.table.core.count({trans:a,query:{index:o,range:s}}).then(function(m){return n.table.core.mutate({trans:a,type:"deleteRange",range:s}).then(function(g){var h=g.failures,f=g.numFailures;if(f)throw new On("Could not delete some values",Object.keys(h).map(function(v){return h[v]}),m-f);return m-f})})}):this.modify(jo)},e}(),jo=function(e,n){return n.value=null};function Mm(e){return $r(Pm.prototype,function(t,a){this.db=e;var o=xo,s=null;if(a)try{o=a()}catch(f){s=f}var m=t._ctx,g=m.table,h=g.hook.reading.fire;this._ctx={table:g,index:m.index,isPrimKey:!m.index||g.schema.primKey.keyPath&&m.index===g.schema.primKey.name,range:o,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:s,or:m.or,valueMapper:h!==xr?h:null}})}function Im(e,n){return e<n?-1:e===n?0:1}function Rm(e,n){return e>n?-1:e===n?0:1}function He(e,n,t){var a=e instanceof Po?new e.Collection(e):e;return a._ctx.error=t?new t(n):new TypeError(n),a}function gr(e){var n=new e.Collection(e,function(){return No("")});return n._addAlgorithm(function(){return!1}),n}function Om(e){return e==="next"?function(n){return n.toUpperCase()}:function(n){return n.toLowerCase()}}function Km(e){return e==="next"?function(n){return n.toLowerCase()}:function(n){return n.toUpperCase()}}function Dm(e,n,t,a,o,s){for(var m=Math.min(e.length,a.length),g=-1,h=0;h<m;++h){var f=n[h];if(f!==a[h])return o(e[h],t[h])<0?e.substr(0,h)+t[h]+t.substr(h+1):o(e[h],a[h])<0?e.substr(0,h)+a[h]+t.substr(h+1):g>=0?e.substr(0,g)+n[g]+t.substr(g+1):null;o(e[h],f)<0&&(g=h)}return m<a.length&&s==="next"?e+t.substr(e.length):m<e.length&&s==="prev"?e.substr(0,t.length):g<0?null:e.substr(0,g)+a[g]+t.substr(g+1)}function st(e,n,t,a){var o,s,m,g,h,f,v,w=t.length;if(!t.every(function(k){return typeof k=="string"}))return He(e,ko);function x(k){o=Om(k),s=Km(k),m=k==="next"?Im:Rm;var _=t.map(function(S){return{lower:s(S),upper:o(S)}}).sort(function(S,C){return m(S.lower,C.lower)});g=_.map(function(S){return S.upper}),h=_.map(function(S){return S.lower}),f=k,v=k==="next"?"":a}x("next");var A=new e.Collection(e,function(){return Sn(g[0],h[w-1]+a)});A._ondirectionchange=function(k){x(k)};var b=0;return A._addAlgorithm(function(k,_,S){var C=k.key;if(typeof C!="string")return!1;var $=s(C);if(n($,h,b))return!0;for(var T=null,E=b;E<w;++E){var R=Dm(C,$,g[E],h[E],m,f);R===null&&T===null?b=E+1:(T===null||m(T,R)>0)&&(T=R)}return _(T!==null?function(){k.continue(T+v)}:S),!1}),A}function Sn(e,n,t,a){return{type:2,lower:e,upper:n,lowerOpen:t,upperOpen:a}}function No(e){return{type:1,lower:e,upper:e}}var Po=function(){function e(){}return Object.defineProperty(e.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),e.prototype.between=function(n,t,a,o){a=a!==!1,o=o===!0;try{return this._cmp(n,t)>0||this._cmp(n,t)===0&&(a||o)&&!(a&&o)?gr(this):new this.Collection(this,function(){return Sn(n,t,!a,!o)})}catch{return He(this,gn)}},e.prototype.equals=function(n){return n==null?He(this,gn):new this.Collection(this,function(){return No(n)})},e.prototype.above=function(n){return n==null?He(this,gn):new this.Collection(this,function(){return Sn(n,void 0,!0)})},e.prototype.aboveOrEqual=function(n){return n==null?He(this,gn):new this.Collection(this,function(){return Sn(n,void 0,!1)})},e.prototype.below=function(n){return n==null?He(this,gn):new this.Collection(this,function(){return Sn(void 0,n,!1,!0)})},e.prototype.belowOrEqual=function(n){return n==null?He(this,gn):new this.Collection(this,function(){return Sn(void 0,n)})},e.prototype.startsWith=function(n){return typeof n!="string"?He(this,ko):this.between(n,n+Wn,!0,!0)},e.prototype.startsWithIgnoreCase=function(n){return n===""?this.startsWith(n):st(this,function(t,a){return t.indexOf(a[0])===0},[n],Wn)},e.prototype.equalsIgnoreCase=function(n){return st(this,function(t,a){return t===a[0]},[n],"")},e.prototype.anyOfIgnoreCase=function(){var n=be.apply(Oe,arguments);return n.length===0?gr(this):st(this,function(t,a){return a.indexOf(t)!==-1},n,"")},e.prototype.startsWithAnyOfIgnoreCase=function(){var n=be.apply(Oe,arguments);return n.length===0?gr(this):st(this,function(t,a){return a.some(function(o){return t.indexOf(o)===0})},n,Wn)},e.prototype.anyOf=function(){var n=this,t=be.apply(Oe,arguments),a=this._cmp;try{t.sort(a)}catch{return He(this,gn)}if(t.length===0)return gr(this);var o=new this.Collection(this,function(){return Sn(t[0],t[t.length-1])});o._ondirectionchange=function(m){a=m==="next"?n._ascending:n._descending,t.sort(a)};var s=0;return o._addAlgorithm(function(m,g,h){for(var f=m.key;a(f,t[s])>0;)if(++s,s===t.length)return g(h),!1;return a(f,t[s])===0?!0:(g(function(){m.continue(t[s])}),!1)}),o},e.prototype.notEqual=function(n){return this.inAnyRange([[bi,n],[n,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},e.prototype.noneOf=function(){var n=be.apply(Oe,arguments);if(n.length===0)return new this.Collection(this);try{n.sort(this._ascending)}catch{return He(this,gn)}var t=n.reduce(function(a,o){return a?a.concat([[a[a.length-1][1],o]]):[[bi,o]]},null);return t.push([n[n.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},e.prototype.inAnyRange=function(n,t){var a=this,o=this._cmp,s=this._ascending,m=this._descending,g=this._min,h=this._max;if(n.length===0)return gr(this);if(!n.every(function(E){return E[0]!==void 0&&E[1]!==void 0&&s(E[0],E[1])<=0}))return He(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",H.InvalidArgument);var f=!t||t.includeLowers!==!1,v=t&&t.includeUppers===!0;function w(E,R){for(var M=0,I=E.length;M<I;++M){var F=E[M];if(o(R[0],F[1])<0&&o(R[1],F[0])>0){F[0]=g(F[0],R[0]),F[1]=h(F[1],R[1]);break}}return M===I&&E.push(R),E}var x=s;function A(E,R){return x(E[0],R[0])}var b;try{b=n.reduce(w,[]),b.sort(A)}catch{return He(this,gn)}var k=0,_=v?function(E){return s(E,b[k][1])>0}:function(E){return s(E,b[k][1])>=0},S=f?function(E){return m(E,b[k][0])>0}:function(E){return m(E,b[k][0])>=0};function C(E){return!_(E)&&!S(E)}var $=_,T=new this.Collection(this,function(){return Sn(b[0][0],b[b.length-1][1],!f,!v)});return T._ondirectionchange=function(E){E==="next"?($=_,x=s):($=S,x=m),b.sort(A)},T._addAlgorithm(function(E,R,M){for(var I=E.key;$(I);)if(++k,k===b.length)return R(M),!1;return C(I)?!0:(a._cmp(I,b[k][1])===0||a._cmp(I,b[k][0])===0||R(function(){x===s?E.continue(b[k][0]):E.continue(b[k][1])}),!1)}),T},e.prototype.startsWithAnyOf=function(){var n=be.apply(Oe,arguments);return n.every(function(t){return typeof t=="string"})?n.length===0?gr(this):this.inAnyRange(n.map(function(t){return[t,t+Wn]})):He(this,"startsWithAnyOf() only works with strings")},e}();function Fm(e){return $r(Po.prototype,function(t,a,o){if(this.db=e,this._ctx={table:t,index:a===":id"?null:a,or:o},this._cmp=this._ascending=re,this._descending=function(s,m){return re(m,s)},this._max=function(s,m){return re(s,m)>0?s:m},this._min=function(s,m){return re(s,m)<0?s:m},this._IDBKeyRange=e._deps.IDBKeyRange,!this._IDBKeyRange)throw new H.MissingAPI})}function Ge(e){return ge(function(n){return Cr(n),e(n.target.error),!1})}function Cr(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var lt="storagemutated",Si="x-storagemutated-1",_n=Ar(null,lt),qm=function(){function e(){}return e.prototype._lock=function(){return ue(!B.global),++this._reculock,this._reculock===1&&!B.global&&(B.lockOwnerFor=this),this},e.prototype._unlock=function(){if(ue(!B.global),--this._reculock===0)for(B.global||(B.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var n=this._blockedFuncs.shift();try{Hn(n[1],n[0])}catch{}}return this},e.prototype._locked=function(){return this._reculock&&B.lockOwnerFor!==this},e.prototype.create=function(n){var t=this;if(!this.mode)return this;var a=this.db.idbdb,o=this.db._state.dbOpenError;if(ue(!this.idbtrans),!n&&!a)switch(o&&o.name){case"DatabaseClosedError":throw new H.DatabaseClosed(o);case"MissingAPIError":throw new H.MissingAPI(o.message,o);default:throw new H.OpenFailed(o)}if(!this.active)throw new H.TransactionInactive;return ue(this._completion._state===null),n=this.idbtrans=n||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):a.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})),n.onerror=ge(function(s){Cr(s),t._reject(n.error)}),n.onabort=ge(function(s){Cr(s),t.active&&t._reject(new H.Abort(n.error)),t.active=!1,t.on("abort").fire(s)}),n.oncomplete=ge(function(){t.active=!1,t._resolve(),"mutatedParts"in n&&_n.storagemutated.fire(n.mutatedParts)}),this},e.prototype._promise=function(n,t,a){var o=this;if(n==="readwrite"&&this.mode!=="readwrite")return fe(new H.ReadOnly("Transaction is readonly"));if(!this.active)return fe(new H.TransactionInactive);if(this._locked())return new O(function(m,g){o._blockedFuncs.push([function(){o._promise(n,t,a).then(m,g)},B])});if(a)return kn(function(){var m=new O(function(g,h){o._lock();var f=t(g,h,o);f&&f.then&&f.then(g,h)});return m.finally(function(){return o._unlock()}),m._lib=!0,m});var s=new O(function(m,g){var h=t(m,g,o);h&&h.then&&h.then(m,g)});return s._lib=!0,s},e.prototype._root=function(){return this.parent?this.parent._root():this},e.prototype.waitFor=function(n){var t=this._root(),a=O.resolve(n);if(t._waitingFor)t._waitingFor=t._waitingFor.then(function(){return a});else{t._waitingFor=a,t._waitingQueue=[];var o=t.idbtrans.objectStore(t.storeNames[0]);(function m(){for(++t._spinCount;t._waitingQueue.length;)t._waitingQueue.shift()();t._waitingFor&&(o.get(-1/0).onsuccess=m)})()}var s=t._waitingFor;return new O(function(m,g){a.then(function(h){return t._waitingQueue.push(ge(m.bind(null,h)))},function(h){return t._waitingQueue.push(ge(g.bind(null,h)))}).finally(function(){t._waitingFor===s&&(t._waitingFor=null)})})},e.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new H.Abort))},e.prototype.table=function(n){var t=this._memoizedTables||(this._memoizedTables={});if(K(t,n))return t[n];var a=this.schema[n];if(!a)throw new H.NotFound("Table "+n+" not part of transaction");var o=new this.db.Table(n,a,this);return o.core=this.db.core.table(n),t[n]=o,o},e}();function Bm(e){return $r(qm.prototype,function(t,a,o,s,m){var g=this;t!=="readonly"&&a.forEach(function(h){var f,v=(f=o[h])===null||f===void 0?void 0:f.yProps;v&&(a=a.concat(v.map(function(w){return w.updatesTable})))}),this.db=e,this.mode=t,this.storeNames=a,this.schema=o,this.chromeTransactionDurability=s,this.idbtrans=null,this.on=Ar(this,"complete","error","abort"),this.parent=m||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new O(function(h,f){g._resolve=h,g._reject=f}),this._completion.then(function(){g.active=!1,g.on.complete.fire()},function(h){var f=g.active;return g.active=!1,g.on.error.fire(h),g.parent?g.parent._reject(h):f&&g.idbtrans&&g.idbtrans.abort(),fe(h)})})}function _i(e,n,t,a,o,s,m,g){return{name:e,keyPath:n,unique:t,multi:a,auto:o,compound:s,src:(t&&!m?"&":"")+(a?"*":"")+(o?"++":"")+Mo(n),type:g}}function Mo(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Ti(e,n,t){return{name:e,primKey:n,indexes:t,mappedClass:null,idxByName:he(t,function(a){return[a.name,a]})}}function Hm(e){return e.length===1?e[0]:e}var jr=function(e){try{return e.only([[]]),jr=function(){return[[]]},[[]]}catch{return jr=function(){return Wn},Wn}};function Ei(e){return e==null?function(){}:typeof e=="string"?Wm(e):function(n){return ae(n,e)}}function Wm(e){var n=e.split(".");return n.length===1?function(t){return t[e]}:function(t){return ae(t,e)}}function Io(e){return[].slice.call(e)}var Lm=0;function Nr(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function zm(e,n,t){function a(x,A){var b=Io(x.objectStoreNames),k=b.length>0?A.objectStore(b[0]):{};return{schema:{name:x.name,tables:b.map(function(_){return A.objectStore(_)}).map(function(_){var S=_.keyPath,C=_.autoIncrement,$=d(S),T=S==null,E={},R={name:_.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:T,compound:$,keyPath:S,autoIncrement:C,unique:!0,extractKey:Ei(S)},indexes:Io(_.indexNames).map(function(M){return _.index(M)}).map(function(M){var I=M.name,F=M.unique,ne=M.multiEntry,W=M.keyPath,q=d(W),U={name:I,compound:q,keyPath:W,unique:F,multiEntry:ne,extractKey:Ei(W)};return E[Nr(W)]=U,U}),getIndexByKeyPath:function(M){return E[Nr(M)]}};return E[":id"]=R.primaryKey,S!=null&&(E[Nr(S)]=R.primaryKey),R})},hasGetAll:b.length>0&&"getAll"in k&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:"getAllRecords"in k}}function o(x){if(x.type===3)return null;if(x.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var A=x.lower,b=x.upper,k=x.lowerOpen,_=x.upperOpen,S=A===void 0?b===void 0?null:n.upperBound(b,!!_):b===void 0?n.lowerBound(A,!!k):n.bound(A,b,!!k,!!_);return S}function s(x){var A=x.name;function b(S){var C=S.trans,$=S.type,T=S.keys,E=S.values,R=S.range;return new Promise(function(M,I){M=ge(M);var F=C.objectStore(A),ne=F.keyPath==null,W=$==="put"||$==="add";if(!W&&$!=="delete"&&$!=="deleteRange")throw new Error("Invalid operation type: "+$);var q=(T||E||{length:1}).length;if(T&&E&&T.length!==E.length)throw new Error("Given keys array must have same length as given values array.");if(q===0)return M({numFailures:0,failures:{},results:[],lastResult:void 0});var U,V=[],me=[],L=0,ye=function(Ee){++L,Cr(Ee)};if($==="deleteRange"){if(R.type===4)return M({numFailures:L,failures:me,results:[],lastResult:void 0});R.type===3?V.push(U=F.clear()):V.push(U=F.delete(o(R)))}else{var Le=W?ne?[E,T]:[E,null]:[T,null],Ke=Le[0],Un=Le[1];if(W)for(var Ne=0;Ne<q;++Ne)V.push(U=Un&&Un[Ne]!==void 0?F[$](Ke[Ne],Un[Ne]):F[$](Ke[Ne])),U.onerror=ye;else for(var Ne=0;Ne<q;++Ne)V.push(U=F[$](Ke[Ne])),U.onerror=ye}var ze=function(Ee){var Gn=Ee.target.result;V.forEach(function(Ve,wt){return Ve.error!=null&&(me[wt]=Ve.error)}),M({numFailures:L,failures:me,results:$==="delete"?T:V.map(function(Ve){return Ve.result}),lastResult:Gn})};U.onerror=function(Ee){ye(Ee),ze(Ee)},U.onsuccess=ze})}function k(S){var C=S.trans,$=S.values,T=S.query,E=S.reverse,R=S.unique;return new Promise(function(M,I){M=ge(M);var F=T.index,ne=T.range,W=C.objectStore(A),q=F.isPrimaryKey?W:W.index(F.name),U=E?R?"prevunique":"prev":R?"nextunique":"next",V=$||!("openKeyCursor"in q)?q.openCursor(o(ne),U):q.openKeyCursor(o(ne),U);V.onerror=Ge(I),V.onsuccess=ge(function(me){var L=V.result;if(!L){M(null);return}L.___id=++Lm,L.done=!1;var ye=L.continue.bind(L),Le=L.continuePrimaryKey;Le&&(Le=Le.bind(L));var Ke=L.advance.bind(L),Un=function(){throw new Error("Cursor not started")},Ne=function(){throw new Error("Cursor not stopped")};L.trans=C,L.stop=L.continue=L.continuePrimaryKey=L.advance=Un,L.fail=ge(I),L.next=function(){var ze=this,Ee=1;return this.start(function(){return Ee--?ze.continue():ze.stop()}).then(function(){return ze})},L.start=function(ze){var Ee=new Promise(function(Ve,wt){Ve=ge(Ve),V.onerror=Ge(wt),L.fail=wt,L.stop=function(Mg){L.stop=L.continue=L.continuePrimaryKey=L.advance=Ne,Ve(Mg)}}),Gn=function(){if(V.result)try{ze()}catch(Ve){L.fail(Ve)}else L.done=!0,L.start=function(){throw new Error("Cursor behind last entry")},L.stop()};return V.onsuccess=ge(function(Ve){V.onsuccess=Gn,Gn()}),L.continue=ye,L.continuePrimaryKey=Le,L.advance=Ke,Gn(),Ee},M(L)},I)})}function _(S,C){return function($){return new Promise(function(T,E){var R;T=ge(T);var M=$.trans,I=$.values,F=$.limit,ne=$.query,W=(R=$.direction)!==null&&R!==void 0?R:"next",q=F===1/0?void 0:F,U=ne.index,V=ne.range,me=M.objectStore(A),L=U.isPrimaryKey?me:me.index(U.name),ye=o(V);if(F===0)return T({result:[]});if(C){var Le={query:ye,count:q,direction:W},Ke=I?L.getAll(Le):L.getAllKeys(Le);Ke.onsuccess=function(Ee){return T({result:Ee.target.result})},Ke.onerror=Ge(E)}else if(S&&W==="next"){var Ke=I?L.getAll(ye,q):L.getAllKeys(ye,q);Ke.onsuccess=function(Gn){return T({result:Gn.target.result})},Ke.onerror=Ge(E)}else{var Un=0,Ne=I||!("openKeyCursor"in L)?L.openCursor(ye,W):L.openKeyCursor(ye,W),ze=[];Ne.onsuccess=function(){var Ee=Ne.result;if(!Ee)return T({result:ze});if(ze.push(I?Ee.value:Ee.primaryKey),++Un===F)return T({result:ze});Ee.continue()},Ne.onerror=Ge(E)}})}}return{name:A,schema:x,mutate:b,getMany:function(S){var C=S.trans,$=S.keys;return new Promise(function(T,E){T=ge(T);for(var R=C.objectStore(A),M=$.length,I=new Array(M),F=0,ne=0,W,q=function(L){var ye=L.target;(I[ye._pos]=ye.result)!=null,++ne===F&&T(I)},U=Ge(E),V=0;V<M;++V){var me=$[V];me!=null&&(W=R.get($[V]),W._pos=V,W.onsuccess=q,W.onerror=U,++F)}F===0&&T(I)})},get:function(S){var C=S.trans,$=S.key;return new Promise(function(T,E){T=ge(T);var R=C.objectStore(A),M=R.get($);M.onsuccess=function(I){return T(I.target.result)},M.onerror=Ge(E)})},query:_(h,f),openCursor:k,count:function(S){var C=S.query,$=S.trans,T=C.index,E=C.range;return new Promise(function(R,M){var I=$.objectStore(A),F=T.isPrimaryKey?I:I.index(T.name),ne=o(E),W=ne?F.count(ne):F.count();W.onsuccess=ge(function(q){return R(q.target.result)}),W.onerror=Ge(M)})}}}var m=a(e,t),g=m.schema,h=m.hasGetAll,f=m.hasIdb3Features,v=g.tables.map(function(x){return s(x)}),w={};return v.forEach(function(x){return w[x.name]=x}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(x){var A=w[x];if(!A)throw new Error("Table '".concat(x,"' not found"));return w[x]},MIN_KEY:-1/0,MAX_KEY:jr(n),schema:g}}function Zm(e,n){return n.reduce(function(t,a){var o=a.create;return i(i({},t),o(t))},e)}function Um(e,n,t,a){var o=t.IDBKeyRange;t.indexedDB;var s=Zm(zm(n,o,a),e.dbcore);return{dbcore:s}}function mt(e,n){var t=n.db,a=Um(e._middlewares,t,e._deps,n);e.core=a.dbcore,e.tables.forEach(function(o){var s=o.name;e.core.schema.tables.some(function(m){return m.name===s})&&(o.core=e.core.table(s),e[s]instanceof e.Table&&(e[s].core=o.core))})}function gt(e,n,t,a){t.forEach(function(o){var s=a[o];n.forEach(function(m){var g=z(m,o);(!g||"value"in g&&g.value===void 0)&&(m===e.Transaction.prototype||m instanceof e.Transaction?Q(m,o,{get:function(){return this.table(o)},set:function(h){oe(this,o,{value:h,writable:!0,configurable:!0,enumerable:!0})}}):m[o]=new e.Table(o,s))})})}function Ai(e,n){n.forEach(function(t){for(var a in t)t[a]instanceof e.Table&&delete t[a]})}function Gm(e,n){return e._cfg.version-n._cfg.version}function Vm(e,n,t,a){var o=e._dbSchema;t.objectStoreNames.contains("$meta")&&!o.$meta&&(o.$meta=Ti("$meta",Oo("")[0],[]),e._storeNames.push("$meta"));var s=e._createTransaction("readwrite",e._storeNames,o);s.create(t),s._completion.catch(a);var m=s._reject.bind(s),g=B.transless||B;kn(function(){if(B.trans=s,B.transless=g,n===0)p(o).forEach(function(h){Ci(t,h,o[h].primKey,o[h].indexes)}),mt(e,t),O.follow(function(){return e.on.populate.fire(s)}).catch(m);else return mt(e,t),Ym(e,s,n).then(function(h){return Qm(e,h,s,t)}).catch(m)})}function Jm(e,n){Ro(e._dbSchema,n),n.db.version%10===0&&!n.objectStoreNames.contains("$meta")&&n.db.createObjectStore("$meta").add(Math.ceil(n.db.version/10-1),"version");var t=ct(e,e.idbdb,n);dt(e,e._dbSchema,n);for(var a=$i(t,e._dbSchema),o=function(f){if(f.change.length||f.recreate)return console.warn("Unable to patch indexes of table ".concat(f.name," because it has changes on the type of index or primary key.")),{value:void 0};var v=n.objectStore(f.name);f.add.forEach(function(w){nn&&console.debug("Dexie upgrade patch: Creating missing index ".concat(f.name,".").concat(w.src)),ht(v,w)})},s=0,m=a.change;s<m.length;s++){var g=m[s],h=o(g);if(typeof h=="object")return h.value}}function Ym(e,n,t){return n.storeNames.includes("$meta")?n.table("$meta").get("version").then(function(a){return a!=null?a:t}):O.resolve(t)}function Qm(e,n,t,a){var o=[],s=e._versions,m=e._dbSchema=ct(e,e.idbdb,a),g=s.filter(function(f){return f._cfg.version>=n});if(g.length===0)return O.resolve();g.forEach(function(f){o.push(function(){var v=m,w=f._cfg.dbschema;dt(e,v,a),dt(e,w,a),m=e._dbSchema=w;var x=$i(v,w);x.add.forEach(function(C){Ci(a,C[0],C[1].primKey,C[1].indexes)}),x.change.forEach(function(C){if(C.recreate)throw new H.Upgrade("Not yet support for changing primary key");var $=a.objectStore(C.name);C.add.forEach(function(T){return ht($,T)}),C.change.forEach(function(T){$.deleteIndex(T.name),ht($,T)}),C.del.forEach(function(T){return $.deleteIndex(T)})});var A=f._cfg.contentUpgrade;if(A&&f._cfg.version>n){mt(e,a),t._memoizedTables={};var b=pe(w);x.del.forEach(function(C){b[C]=v[C]}),Ai(e,[e.Transaction.prototype]),gt(e,[e.Transaction.prototype],p(b),b),t.schema=b;var k=Ue(A);k&&lr();var _,S=O.follow(function(){if(_=A(t),_&&k){var C=wn.bind(null,null);_.then(C,C)}});return _&&typeof _.then=="function"?O.resolve(_):S.then(function(){return _})}}),o.push(function(v){var w=f._cfg.dbschema;Xm(w,v),Ai(e,[e.Transaction.prototype]),gt(e,[e.Transaction.prototype],e._storeNames,e._dbSchema),t.schema=e._dbSchema}),o.push(function(v){e.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(e.idbdb.version/10)===f._cfg.version?(e.idbdb.deleteObjectStore("$meta"),delete e._dbSchema.$meta,e._storeNames=e._storeNames.filter(function(w){return w!=="$meta"})):v.objectStore("$meta").put(f._cfg.version,"version"))})});function h(){return o.length?O.resolve(o.shift()(t.idbtrans)).then(h):O.resolve()}return h().then(function(){Ro(m,a)})}function $i(e,n){var t={del:[],add:[],change:[]},a;for(a in e)n[a]||t.del.push(a);for(a in n){var o=e[a],s=n[a];if(!o)t.add.push([a,s]);else{var m={name:a,def:s,recreate:!1,del:[],add:[],change:[]};if(""+(o.primKey.keyPath||"")!=""+(s.primKey.keyPath||"")||o.primKey.auto!==s.primKey.auto)m.recreate=!0,t.change.push(m);else{var g=o.idxByName,h=s.idxByName,f=void 0;for(f in g)h[f]||m.del.push(f);for(f in h){var v=g[f],w=h[f];v?v.src!==w.src&&m.change.push(w):m.add.push(w)}(m.del.length>0||m.add.length>0||m.change.length>0)&&t.change.push(m)}}}return t}function Ci(e,n,t,a){var o=e.db.createObjectStore(n,t.keyPath?{keyPath:t.keyPath,autoIncrement:t.auto}:{autoIncrement:t.auto});return a.forEach(function(s){return ht(o,s)}),o}function Ro(e,n){p(e).forEach(function(t){n.db.objectStoreNames.contains(t)||(nn&&console.debug("Dexie: Creating missing table",t),Ci(n,t,e[t].primKey,e[t].indexes))})}function Xm(e,n){[].slice.call(n.db.objectStoreNames).forEach(function(t){return e[t]==null&&n.db.deleteObjectStore(t)})}function ht(e,n){e.createIndex(n.name,n.keyPath,{unique:n.unique,multiEntry:n.multi})}function ct(e,n,t){var a={},o=te(n.objectStoreNames,0);return o.forEach(function(s){for(var m=t.objectStore(s),g=m.keyPath,h=_i(Mo(g),g||"",!0,!1,!!m.autoIncrement,g&&typeof g!="string",!0),f=[],v=0;v<m.indexNames.length;++v){var w=m.index(m.indexNames[v]);g=w.keyPath;var x=_i(w.name,g,!!w.unique,!!w.multiEntry,!1,g&&typeof g!="string",!1);f.push(x)}a[s]=Ti(s,h,f)}),a}function eg(e,n,t){e.verno=n.version/10;var a=e._dbSchema=ct(e,n,t);e._storeNames=te(n.objectStoreNames,0),gt(e,[e._allTables],p(a),a)}function ng(e,n){var t=ct(e,e.idbdb,n),a=$i(t,e._dbSchema);return!(a.add.length||a.change.some(function(o){return o.add.length||o.change.length}))}function dt(e,n,t){for(var a=t.db.objectStoreNames,o=0;o<a.length;++o){var s=a[o],m=t.objectStore(s);e._hasGetAll="getAll"in m;for(var g=0;g<m.indexNames.length;++g){var h=m.indexNames[g],f=m.index(h).keyPath,v=typeof f=="string"?f:"["+te(f).join("+")+"]";if(n[s]){var w=n[s].idxByName[v];w&&(w.name=h,delete n[s].idxByName[v],n[s].idxByName[h]=w)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&l.WorkerGlobalScope&&l instanceof l.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Oo(e){return e.split(",").map(function(n,t){var a,o=n.split(":"),s=(a=o[1])===null||a===void 0?void 0:a.trim();n=o[0].trim();var m=n.replace(/([&*]|\+\+)/g,""),g=/^\[/.test(m)?m.match(/^\[(.*)\]$/)[1].split("+"):m;return _i(m,g||null,/\&/.test(n),/\*/.test(n),/\+\+/.test(n),d(g),t===0,s)})}var rg=function(){function e(){}return e.prototype._createTableSchema=function(n,t,a){return Ti(n,t,a)},e.prototype._parseIndexSyntax=function(n){return Oo(n)},e.prototype._parseStoresSpec=function(n,t){var a=this;p(n).forEach(function(o){if(n[o]!==null){var s=a._parseIndexSyntax(n[o]),m=s.shift();if(!m)throw new H.Schema("Invalid schema for table "+o+": "+n[o]);if(m.unique=!0,m.multi)throw new H.Schema("Primary key cannot be multiEntry*");s.forEach(function(h){if(h.auto)throw new H.Schema("Only primary key can be marked as autoIncrement (++)");if(!h.keyPath)throw new H.Schema("Index must have a name and cannot be an empty string")});var g=a._createTableSchema(o,m,s);t[o]=g}})},e.prototype.stores=function(n){var t=this.db;this._cfg.storesSource=this._cfg.storesSource?y(this._cfg.storesSource,n):n;var a=t._versions,o={},s={};return a.forEach(function(m){y(o,m._cfg.storesSource),s=m._cfg.dbschema={},m._parseStoresSpec(o,s)}),t._dbSchema=s,Ai(t,[t._allTables,t,t.Transaction.prototype]),gt(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],p(s),s),t._storeNames=p(s),this},e.prototype.upgrade=function(n){return this._cfg.contentUpgrade=ui(this._cfg.contentUpgrade||se,n),this},e}();function tg(e){return $r(rg.prototype,function(t){this.db=e,this._cfg={version:t,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}var Pr=ig();function ig(){if(typeof FinalizationRegistry<"u"&&typeof WeakRef<"u"){var e=new Set,n=new FinalizationRegistry(function(m){e.delete(m)}),t=function(){return Array.from(e).map(function(m){return m.deref()}).filter(function(m){return m!==void 0})},a=function(m){var g=new WeakRef(m._novip);if(e.add(g),n.register(m._novip,g,g),e.size>m._options.maxConnections){var h=e.values().next().value;e.delete(h),n.unregister(h)}},o=function(m){if(m)for(var g=e.values(),h=g.next();!h.done;){var f=h.value;if(f.deref()===m._novip){e.delete(f),n.unregister(f);return}h=g.next()}};return{toArray:t,add:a,remove:o}}else{var s=[],t=function(){return s},a=function(f){s.push(f._novip)},o=function(f){if(f){var v=s.indexOf(f._novip);v!==-1&&s.splice(v,1)}};return{toArray:t,add:a,remove:o}}}function ji(e,n){var t=e._dbNamesDB;return t||(t=e._dbNamesDB=new hn(tt,{addons:[],indexedDB:e,IDBKeyRange:n}),t.version(1).stores({dbnames:"name"})),t.table("dbnames")}function Ni(e){return e&&typeof e.databases=="function"}function ag(e){var n=e.indexedDB,t=e.IDBKeyRange;return Ni(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(o){return o.name}).filter(function(o){return o!==tt})}):ji(n,t).toCollection().primaryKeys()}function og(e,n){var t=e.indexedDB,a=e.IDBKeyRange;!Ni(t)&&n!==tt&&ji(t,a).put({name:n}).catch(se)}function ug(e,n){var t=e.indexedDB,a=e.IDBKeyRange;!Ni(t)&&n!==tt&&ji(t,a).delete(n).catch(se)}function Pi(e){return kn(function(){return B.letThrough=!0,e()})}function sg(){var e=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!e||!indexedDB.databases)return Promise.resolve();var n;return new Promise(function(t){var a=function(){return indexedDB.databases().finally(t)};n=setInterval(a,100),a()}).finally(function(){return clearInterval(n)})}var Mi;function Ii(e){return!("from"in e)}var je=function(e,n){if(this)y(this,arguments.length?{d:1,from:e,to:arguments.length>1?n:e}:{d:0});else{var t=new je;return e&&"d"in e&&y(t,e),t}};N(je.prototype,(Mi={add:function(e){return Ir(this,e),this},addKey:function(e){return Mr(this,e,e),this},addKeys:function(e){var n=this;return e.forEach(function(t){return Mr(n,t,t)}),this},hasKey:function(e){var n=ft(this).next(e).value;return n&&re(n.from,e)<=0&&re(n.to,e)>=0}},Mi[qe]=function(){return ft(this)},Mi));function Mr(e,n,t){var a=re(n,t);if(!isNaN(a)){if(a>0)throw RangeError();if(Ii(e))return y(e,{from:n,to:t,d:1});var o=e.l,s=e.r;if(re(t,e.from)<0)return o?Mr(o,n,t):e.l={from:n,to:t,d:1,l:null,r:null},Do(e);if(re(n,e.to)>0)return s?Mr(s,n,t):e.r={from:n,to:t,d:1,l:null,r:null},Do(e);re(n,e.from)<0&&(e.from=n,e.l=null,e.d=s?s.d+1:1),re(t,e.to)>0&&(e.to=t,e.r=null,e.d=e.l?e.l.d+1:1);var m=!e.r;o&&!e.l&&Ir(e,o),s&&m&&Ir(e,s)}}function Ir(e,n){function t(a,o){var s=o.from,m=o.to,g=o.l,h=o.r;Mr(a,s,m),g&&t(a,g),h&&t(a,h)}Ii(n)||t(e,n)}function Ko(e,n){var t=ft(n),a=t.next();if(a.done)return!1;for(var o=a.value,s=ft(e),m=s.next(o.from),g=m.value;!a.done&&!m.done;){if(re(g.from,o.to)<=0&&re(g.to,o.from)>=0)return!0;re(o.from,g.from)<0?o=(a=t.next(g.from)).value:g=(m=s.next(o.from)).value}return!1}function ft(e){var n=Ii(e)?null:{s:0,n:e};return{next:function(t){for(var a=arguments.length>0;n;)switch(n.s){case 0:if(n.s=1,a)for(;n.n.l&&re(t,n.n.from)<0;)n={up:n,n:n.n.l,s:1};else for(;n.n.l;)n={up:n,n:n.n.l,s:1};case 1:if(n.s=2,!a||re(t,n.n.to)<=0)return{value:n.n,done:!1};case 2:if(n.n.r){n.s=3,n={up:n,n:n.n.r,s:0};continue}case 3:n=n.up}return{done:!0}}}}function Do(e){var n,t,a=(((n=e.r)===null||n===void 0?void 0:n.d)||0)-(((t=e.l)===null||t===void 0?void 0:t.d)||0),o=a>1?"r":a<-1?"l":"";if(o){var s=o==="r"?"l":"r",m=i({},e),g=e[o];e.from=g.from,e.to=g.to,e[o]=g[o],m[o]=g[s],e[s]=m,m.d=Fo(m)}e.d=Fo(e)}function Fo(e){var n=e.r,t=e.l;return(n?t?Math.max(n.d,t.d):n.d:t?t.d:0)+1}function pt(e,n){return p(n).forEach(function(t){e[t]?Ir(e[t],n[t]):e[t]=Ce(n[t])}),e}function Ri(e,n){return e.all||n.all||Object.keys(e).some(function(t){return n[t]&&Ko(n[t],e[t])})}var zn={},Oi={},Ki=!1;function vt(e,n){pt(Oi,e),Ki||(Ki=!0,setTimeout(function(){Ki=!1;var t=Oi;Oi={},Di(t,!1)},0))}function Di(e,n){n===void 0&&(n=!1);var t=new Set;if(e.all)for(var a=0,o=Object.values(zn);a<o.length;a++){var s=o[a];qo(s,e,t,n)}else for(var m in e){var g=/^idb\:\/\/(.*)\/(.*)\//.exec(m);if(g){var h=g[1],f=g[2],s=zn["idb://".concat(h,"/").concat(f)];s&&qo(s,e,t,n)}}t.forEach(function(v){return v()})}function qo(e,n,t,a){for(var o=[],s=0,m=Object.entries(e.queries.query);s<m.length;s++){for(var g=m[s],h=g[0],f=g[1],v=[],w=0,x=f;w<x.length;w++){var A=x[w];Ri(n,A.obsSet)?A.subscribers.forEach(function(S){return t.add(S)}):a&&v.push(A)}a&&o.push([h,v])}if(a)for(var b=0,k=o;b<k.length;b++){var _=k[b],h=_[0],v=_[1];e.queries.query[h]=v}}function lg(e){var n=e._state,t=e._deps.indexedDB;if(n.isBeingOpened||e.idbdb)return n.dbReadyPromise.then(function(){return n.dbOpenError?fe(n.dbOpenError):e});n.isBeingOpened=!0,n.dbOpenError=null,n.openComplete=!1;var a=n.openCanceller,o=Math.round(e.verno*10),s=!1;function m(){if(n.openCanceller!==a)throw new H.DatabaseClosed("db.open() was cancelled")}var g=n.dbReadyResolve,h=null,f=!1,v=function(){return new O(function(x,A){if(m(),!t)throw new H.MissingAPI;var b=e.name,k=n.autoSchema||!o?t.open(b):t.open(b,o);if(!k)throw new H.MissingAPI;k.onerror=Ge(A),k.onblocked=ge(e._fireOnBlocked),k.onupgradeneeded=ge(function(_){if(h=k.transaction,n.autoSchema&&!e._options.allowEmptyDB){k.onerror=Cr,h.abort(),k.result.close();var S=t.deleteDatabase(b);S.onsuccess=S.onerror=ge(function(){A(new H.NoSuchDatabase("Database ".concat(b," doesnt exist")))})}else{h.onerror=Ge(A);var C=_.oldVersion>Math.pow(2,62)?0:_.oldVersion;f=C<1,e.idbdb=k.result,s&&Jm(e,h),Vm(e,C/10,h,A)}},A),k.onsuccess=ge(function(){h=null;var _=e.idbdb=k.result,S=te(_.objectStoreNames);if(S.length>0)try{var C=_.transaction(Hm(S),"readonly");if(n.autoSchema)eg(e,_,C);else if(dt(e,e._dbSchema,C),!ng(e,C)&&!s)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),_.close(),o=_.version+1,s=!0,x(v());mt(e,C)}catch{}Pr.add(e),_.onversionchange=ge(function($){n.vcFired=!0,e.on("versionchange").fire($)}),_.onclose=ge(function(){e.close({disableAutoOpen:!1})}),f&&og(e._deps,b),x()},A)}).catch(function(x){switch(x==null?void 0:x.name){case"UnknownError":if(n.PR1398_maxLoop>0)return n.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),v();break;case"VersionError":if(o>0)return o=0,v();break}return O.reject(x)})},w=typeof navigator<"u"&&!!t&&t===l.indexedDB;return O.race([a,(w?sg():O.resolve()).then(v)]).then(function(){return m(),n.onReadyBeingFired=[],O.resolve(Pi(function(){return e.on.ready.fire(e.vip)})).then(function x(){if(n.onReadyBeingFired.length>0){var A=n.onReadyBeingFired.reduce(ui,se);return n.onReadyBeingFired=[],O.resolve(Pi(function(){return A(e.vip)})).then(x)}})}).finally(function(){n.openCanceller===a&&(n.onReadyBeingFired=null,n.isBeingOpened=!1)}).catch(function(x){n.dbOpenError=x;try{h&&h.abort()}catch{}return a===n.openCanceller&&e._close(),fe(x)}).finally(function(){n.openComplete=!0,g()}).then(function(){if(f){var x={};e.tables.forEach(function(A){A.schema.indexes.forEach(function(b){b.name&&(x["idb://".concat(e.name,"/").concat(A.name,"/").concat(b.name)]=new je(-1/0,[[[]]]))}),x["idb://".concat(e.name,"/").concat(A.name,"/")]=x["idb://".concat(e.name,"/").concat(A.name,"/:dels")]=new je(-1/0,[[[]]])}),_n(lt).fire(x),Di(x,!0)}return e})}function Fi(e){var n=function(m){return e.next(m)},t=function(m){return e.throw(m)},a=s(n),o=s(t);function s(m){return function(g){var h=m(g),f=h.value;return h.done?f:!f||typeof f.then!="function"?d(f)?Promise.all(f).then(a,o):a(f):f.then(a,o)}}return s(n)()}function mg(e,n,t){var a=arguments.length;if(a<2)throw new H.InvalidArgument("Too few arguments");for(var o=new Array(a-1);--a;)o[a-1]=arguments[a];t=o.pop();var s=de(o);return[e,s,t]}function Bo(e,n,t,a,o){return O.resolve().then(function(){var s=B.transless||B,m=e._createTransaction(n,t,e._dbSchema,a);m.explicit=!0;var g={trans:m,transless:s};if(a)m.idbtrans=a.idbtrans;else try{m.create(),m.idbtrans._explicit=!0,e._state.PR1398_maxLoop=3}catch(w){return w.name===Be.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e.close({disableAutoOpen:!1}),e.open().then(function(){return Bo(e,n,t,null,o)})):fe(w)}var h=Ue(o);h&&lr();var f,v=O.follow(function(){if(f=o.call(m,m),f)if(h){var w=wn.bind(null,null);f.then(w,w)}else typeof f.next=="function"&&typeof f.throw=="function"&&(f=Fi(f))},g);return(f&&typeof f.then=="function"?O.resolve(f).then(function(w){return m.active?w:fe(new H.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):v.then(function(){return f})).then(function(w){return a&&m._resolve(),m._completion.then(function(){return w})}).catch(function(w){return m._reject(w),fe(w)})})}function bt(e,n,t){for(var a=d(e)?e.slice():[e],o=0;o<t;++o)a.push(n);return a}function gg(e){return i(i({},e),{table:function(n){var t=e.table(n),a=t.schema,o=Object.create(null),s=[];function m(k,_,S){var C=Nr(k),$=o[C]=o[C]||[],T=k==null?0:typeof k=="string"?1:k.length,E=_>0,R=i(i({},S),{name:E?"".concat(C,"(virtual-from:").concat(S.name,")"):S.name,lowLevelIndex:S,isVirtual:E,keyTail:_,keyLength:T,extractKey:Ei(k),unique:!E&&S.unique});if($.push(R),R.isPrimaryKey||s.push(R),T>1){var M=T===2?k[0]:k.slice(0,T-1);m(M,_+1,S)}return $.sort(function(I,F){return I.keyTail-F.keyTail}),R}var g=m(a.primaryKey.keyPath,0,a.primaryKey);o[":id"]=[g];for(var h=0,f=a.indexes;h<f.length;h++){var v=f[h];m(v.keyPath,0,v)}function w(k){var _=o[Nr(k)];return _&&_[0]}function x(k,_){return{type:k.type===1?2:k.type,lower:bt(k.lower,k.lowerOpen?e.MAX_KEY:e.MIN_KEY,_),lowerOpen:!0,upper:bt(k.upper,k.upperOpen?e.MIN_KEY:e.MAX_KEY,_),upperOpen:!0}}function A(k){var _=k.query.index;return _.isVirtual?i(i({},k),{query:{index:_.lowLevelIndex,range:x(k.query.range,_.keyTail)}}):k}var b=i(i({},t),{schema:i(i({},a),{primaryKey:g,indexes:s,getIndexByKeyPath:w}),count:function(k){return t.count(A(k))},query:function(k){return t.query(A(k))},openCursor:function(k){var _=k.query.index,S=_.keyTail,C=_.isVirtual,$=_.keyLength;if(!C)return t.openCursor(k);function T(E){function R(I){I!=null?E.continue(bt(I,k.reverse?e.MAX_KEY:e.MIN_KEY,S)):k.unique?E.continue(E.key.slice(0,$).concat(k.reverse?e.MIN_KEY:e.MAX_KEY,S)):E.continue()}var M=Object.create(E,{continue:{value:R},continuePrimaryKey:{value:function(I,F){E.continuePrimaryKey(bt(I,e.MAX_KEY,S),F)}},primaryKey:{get:function(){return E.primaryKey}},key:{get:function(){var I=E.key;return $===1?I[0]:I.slice(0,$)}},value:{get:function(){return E.value}}});return M}return t.openCursor(A(k)).then(function(E){return E&&T(E)})}});return b}})}var hg={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:gg};function qi(e,n,t,a){return t=t||{},a=a||"",p(e).forEach(function(o){if(!K(n,o))t[a+o]=void 0;else{var s=e[o],m=n[o];if(typeof s=="object"&&typeof m=="object"&&s&&m){var g=bn(s),h=bn(m);g!==h?t[a+o]=n[o]:g==="Object"?qi(s,m,t,a+o+"."):s!==m&&(t[a+o]=n[o])}else s!==m&&(t[a+o]=n[o])}}),p(n).forEach(function(o){K(e,o)||(t[a+o]=n[o])}),t}function Bi(e,n){return n.type==="delete"?n.keys:n.keys||n.values.map(e.extractKey)}var cg={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return i(i({},e),{table:function(n){var t=e.table(n),a=t.schema.primaryKey,o=i(i({},t),{mutate:function(s){var m=B.trans,g=m.table(n).hook,h=g.deleting,f=g.creating,v=g.updating;switch(s.type){case"add":if(f.fire===se)break;return m._promise("readwrite",function(){return w(s)},!0);case"put":if(f.fire===se&&v.fire===se)break;return m._promise("readwrite",function(){return w(s)},!0);case"delete":if(h.fire===se)break;return m._promise("readwrite",function(){return w(s)},!0);case"deleteRange":if(h.fire===se)break;return m._promise("readwrite",function(){return x(s)},!0)}return t.mutate(s);function w(b){var k=B.trans,_=b.keys||Bi(a,b);if(!_)throw new Error("Keys missing");return b=b.type==="add"||b.type==="put"?i(i({},b),{keys:_}):i({},b),b.type!=="delete"&&(b.values=u([],b.values,!0)),b.keys&&(b.keys=u([],b.keys,!0)),dg(t,b,_).then(function(S){var C=_.map(function($,T){var E=S[T],R={onerror:null,onsuccess:null};if(b.type==="delete")h.fire.call(R,$,E,k);else if(b.type==="add"||E===void 0){var M=f.fire.call(R,$,b.values[T],k);$==null&&M!=null&&($=M,b.keys[T]=$,a.outbound||Z(b.values[T],a.keyPath,$))}else{var I=qi(E,b.values[T]),F=v.fire.call(R,I,$,E,k);if(F){var ne=b.values[T];Object.keys(F).forEach(function(W){K(ne,W)?ne[W]=F[W]:Z(ne,W,F[W])})}}return R});return t.mutate(b).then(function($){for(var T=$.failures,E=$.results,R=$.numFailures,M=$.lastResult,I=0;I<_.length;++I){var F=E?E[I]:_[I],ne=C[I];F==null?ne.onerror&&ne.onerror(T[I]):ne.onsuccess&&ne.onsuccess(b.type==="put"&&S[I]?b.values[I]:F)}return{failures:T,results:E,numFailures:R,lastResult:M}}).catch(function($){return C.forEach(function(T){return T.onerror&&T.onerror($)}),Promise.reject($)})})}function x(b){return A(b.trans,b.range,1e4)}function A(b,k,_){return t.query({trans:b,values:!1,query:{index:a,range:k},limit:_}).then(function(S){var C=S.result;return w({type:"delete",keys:C,trans:b}).then(function($){return $.numFailures>0?Promise.reject($.failures[0]):C.length<_?{failures:[],numFailures:0,lastResult:void 0}:A(b,i(i({},k),{lower:C[C.length-1],lowerOpen:!0}),_)})})}}});return o}})}};function dg(e,n,t){return n.type==="add"?Promise.resolve([]):e.getMany({trans:n.trans,keys:t,cache:"immutable"})}function Ho(e,n,t){try{if(!n||n.keys.length<e.length)return null;for(var a=[],o=0,s=0;o<n.keys.length&&s<e.length;++o)re(n.keys[o],e[s])===0&&(a.push(t?Te(n.values[o]):n.values[o]),++s);return a.length===e.length?a:null}catch{return null}}var fg={stack:"dbcore",level:-1,create:function(e){return{table:function(n){var t=e.table(n);return i(i({},t),{getMany:function(a){if(!a.cache)return t.getMany(a);var o=Ho(a.keys,a.trans._cache,a.cache==="clone");return o?O.resolve(o):t.getMany(a).then(function(s){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?Te(s):s},s})},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),t.mutate(a)}})}}}};function Wo(e,n){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!n.schema.primaryKey.outbound}function Lo(e,n){switch(e){case"query":return n.values&&!n.unique;case"get":return!1;case"getMany":return!1;case"count":return!1;case"openCursor":return!1}}var pg={stack:"dbcore",level:0,name:"Observability",create:function(e){var n=e.schema.name,t=new je(e.MIN_KEY,e.MAX_KEY);return i(i({},e),{transaction:function(a,o,s){if(B.subscr&&o!=="readonly")throw new H.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(B.querier));return e.transaction(a,o,s)},table:function(a){var o=e.table(a),s=o.schema,m=s.primaryKey,g=s.indexes,h=m.extractKey,f=m.outbound,v=m.autoIncrement&&g.filter(function(b){return b.compound&&b.keyPath.includes(m.keyPath)}),w=i(i({},o),{mutate:function(b){var k,_,S=b.trans,C=b.mutatedParts||(b.mutatedParts={}),$=function(U){var V="idb://".concat(n,"/").concat(a,"/").concat(U);return C[V]||(C[V]=new je)},T=$(""),E=$(":dels"),R=b.type,M=b.type==="deleteRange"?[b.range]:b.type==="delete"?[b.keys]:b.values.length<50?[Bi(m,b).filter(function(U){return U!=null}),b.values]:[],I=M[0],F=M[1],ne=b.trans._cache;if(d(I)){T.addKeys(I);var W=R==="delete"||I.length===F.length?Ho(I,ne):null;W||E.addKeys(I),(W||F)&&vg($,s,W,F)}else if(I){var q={from:(k=I.lower)!==null&&k!==void 0?k:e.MIN_KEY,to:(_=I.upper)!==null&&_!==void 0?_:e.MAX_KEY};E.add(q),T.add(q)}else T.add(t),E.add(t),s.indexes.forEach(function(U){return $(U.name).add(t)});return o.mutate(b).then(function(U){return I&&(b.type==="add"||b.type==="put")&&(T.addKeys(U.results),v&&v.forEach(function(V){for(var me=b.values.map(function(Ke){return V.extractKey(Ke)}),L=V.keyPath.findIndex(function(Ke){return Ke===m.keyPath}),ye=0,Le=U.results.length;ye<Le;++ye)me[ye][L]=U.results[ye];$(V.name).addKeys(me)})),S.mutatedParts=pt(S.mutatedParts||{},C),U})}}),x=function(b){var k,_,S=b.query,C=S.index,$=S.range;return[C,new je((k=$.lower)!==null&&k!==void 0?k:e.MIN_KEY,(_=$.upper)!==null&&_!==void 0?_:e.MAX_KEY)]},A={get:function(b){return[m,new je(b.key)]},getMany:function(b){return[m,new je().addKeys(b.keys)]},count:x,query:x,openCursor:x};return p(A).forEach(function(b){w[b]=function(k){var _=B.subscr,S=!!_,C=Wo(B,o)&&Lo(b,k),$=C?k.obsSet={}:_;if(S){var T=function(W){var q="idb://".concat(n,"/").concat(a,"/").concat(W);return $[q]||($[q]=new je)},E=T(""),R=T(":dels"),M=A[b](k),I=M[0],F=M[1];if(b==="query"&&I.isPrimaryKey&&!k.values?R.add(F):T(I.name||"").add(F),!I.isPrimaryKey)if(b==="count")R.add(t);else{var ne=b==="query"&&f&&k.values&&o.query(i(i({},k),{values:!1}));return o[b].apply(this,arguments).then(function(W){if(b==="query"){if(f&&k.values)return ne.then(function(me){var L=me.result;return E.addKeys(L),W});var q=k.values?W.result.map(h):W.result;k.values?E.addKeys(q):R.addKeys(q)}else if(b==="openCursor"){var U=W,V=k.values;return U&&Object.create(U,{key:{get:function(){return R.addKey(U.primaryKey),U.key}},primaryKey:{get:function(){var me=U.primaryKey;return R.addKey(me),me}},value:{get:function(){return V&&E.addKey(U.primaryKey),U.value}}})}return W})}}return o[b].apply(this,arguments)}}),w}})}};function vg(e,n,t,a){function o(s){var m=e(s.name||"");function g(f){return f!=null?s.extractKey(f):null}var h=function(f){return s.multiEntry&&d(f)?f.forEach(function(v){return m.addKey(v)}):m.addKey(f)};(t||a).forEach(function(f,v){var w=t&&g(t[v]),x=a&&g(a[v]);re(w,x)!==0&&(w!=null&&h(w),x!=null&&h(x))})}n.indexes.forEach(o)}function zo(e,n,t){if(t.numFailures===0)return n;if(n.type==="deleteRange")return null;var a=n.keys?n.keys.length:"values"in n&&n.values?n.values.length:1;if(t.numFailures===a)return null;var o=i({},n);return d(o.keys)&&(o.keys=o.keys.filter(function(s,m){return!(m in t.failures)})),"values"in o&&d(o.values)&&(o.values=o.values.filter(function(s,m){return!(m in t.failures)})),o}function bg(e,n){return n.lower===void 0?!0:n.lowerOpen?re(e,n.lower)>0:re(e,n.lower)>=0}function yg(e,n){return n.upper===void 0?!0:n.upperOpen?re(e,n.upper)<0:re(e,n.upper)<=0}function Hi(e,n){return bg(e,n)&&yg(e,n)}function Zo(e,n,t,a,o,s){if(!t||t.length===0)return e;var m=n.query.index,g=m.multiEntry,h=n.query.range,f=a.schema.primaryKey,v=f.extractKey,w=m.extractKey,x=(m.lowLevelIndex||m).extractKey,A=t.reduce(function(k,_){var S=k,C=[];if(_.type==="add"||_.type==="put")for(var $=new je,T=_.values.length-1;T>=0;--T){var E=_.values[T],R=v(E);if(!$.hasKey(R)){var M=w(E);(g&&d(M)?M.some(function(q){return Hi(q,h)}):Hi(M,h))&&($.addKey(R),C.push(E))}}switch(_.type){case"add":{var I=new je().addKeys(n.values?k.map(function(q){return v(q)}):k);S=k.concat(n.values?C.filter(function(q){var U=v(q);return I.hasKey(U)?!1:(I.addKey(U),!0)}):C.map(function(q){return v(q)}).filter(function(q){return I.hasKey(q)?!1:(I.addKey(q),!0)}));break}case"put":{var F=new je().addKeys(_.values.map(function(q){return v(q)}));S=k.filter(function(q){return!F.hasKey(n.values?v(q):q)}).concat(n.values?C:C.map(function(q){return v(q)}));break}case"delete":var ne=new je().addKeys(_.keys);S=k.filter(function(q){return!ne.hasKey(n.values?v(q):q)});break;case"deleteRange":var W=_.range;S=k.filter(function(q){return!Hi(v(q),W)});break}return S},e);if(A===e)return e;var b=function(k,_){return re(x(k),x(_))||re(v(k),v(_))};return A.sort(n.direction==="prev"||n.direction==="prevunique"?function(k,_){return b(_,k)}:b),n.limit&&n.limit<1/0&&(A.length>n.limit?A.length=n.limit:e.length===n.limit&&A.length<n.limit&&(o.dirty=!0)),s?Object.freeze(A):A}function Uo(e,n){return re(e.lower,n.lower)===0&&re(e.upper,n.upper)===0&&!!e.lowerOpen==!!n.lowerOpen&&!!e.upperOpen==!!n.upperOpen}function kg(e,n,t,a){if(e===void 0)return n!==void 0?-1:0;if(n===void 0)return 1;var o=re(e,n);if(o===0){if(t&&a)return 0;if(t)return 1;if(a)return-1}return o}function wg(e,n,t,a){if(e===void 0)return n!==void 0?1:0;if(n===void 0)return-1;var o=re(e,n);if(o===0){if(t&&a)return 0;if(t)return-1;if(a)return 1}return o}function xg(e,n){return kg(e.lower,n.lower,e.lowerOpen,n.lowerOpen)<=0&&wg(e.upper,n.upper,e.upperOpen,n.upperOpen)>=0}function Sg(e,n,t,a){var o,s=zn["idb://".concat(e,"/").concat(n)];if(!s)return[];var m=s.queries[t];if(!m)return[null,!1,s,null];var g=a.query?a.query.index.name:null,h=m[g||""];if(!h)return[null,!1,s,null];switch(t){case"query":var f=(o=a.direction)!==null&&o!==void 0?o:"next",v=h.find(function(A){var b;return A.req.limit===a.limit&&A.req.values===a.values&&((b=A.req.direction)!==null&&b!==void 0?b:"next")===f&&Uo(A.req.query.range,a.query.range)});if(v)return[v,!0,s,h];var w=h.find(function(A){var b,k="limit"in A.req?A.req.limit:1/0;return k>=a.limit&&((b=A.req.direction)!==null&&b!==void 0?b:"next")===f&&(a.values?A.req.values:!0)&&xg(A.req.query.range,a.query.range)});return[w,!1,s,h];case"count":var x=h.find(function(A){return Uo(A.req.query.range,a.query.range)});return[x,!!x,s,h]}}function _g(e,n,t,a){e.subscribers.add(t),a.addEventListener("abort",function(){e.subscribers.delete(t),e.subscribers.size===0&&Tg(e,n)})}function Tg(e,n){setTimeout(function(){e.subscribers.size===0&&xe(n,e)},3e3)}var Eg={stack:"dbcore",level:0,name:"Cache",create:function(e){var n=e.schema.name,t=i(i({},e),{transaction:function(a,o,s){var m=e.transaction(a,o,s);if(o==="readwrite"){var g=new AbortController,h=g.signal,f=function(v){return function(){if(g.abort(),o==="readwrite"){for(var w=new Set,x=0,A=a;x<A.length;x++){var b=A[x],k=zn["idb://".concat(n,"/").concat(b)];if(k){var _=e.table(b),S=k.optimisticOps.filter(function(V){return V.trans===m});if(m._explicit&&v&&m.mutatedParts)for(var C=0,$=Object.values(k.queries.query);C<$.length;C++)for(var T=$[C],E=0,R=T.slice();E<R.length;E++){var M=R[E];Ri(M.obsSet,m.mutatedParts)&&(xe(T,M),M.subscribers.forEach(function(V){return w.add(V)}))}else if(S.length>0){k.optimisticOps=k.optimisticOps.filter(function(V){return V.trans!==m});for(var I=0,F=Object.values(k.queries.query);I<F.length;I++)for(var T=F[I],ne=0,W=T.slice();ne<W.length;ne++){var M=W[ne];if(M.res!=null&&m.mutatedParts)if(v&&!M.dirty){var q=Object.isFrozen(M.res),U=Zo(M.res,M.req,S,_,M,q);M.dirty?(xe(T,M),M.subscribers.forEach(function(L){return w.add(L)})):U!==M.res&&(M.res=U,M.promise=O.resolve({result:U}))}else M.dirty&&xe(T,M),M.subscribers.forEach(function(L){return w.add(L)})}}}}w.forEach(function(V){return V()})}}};m.addEventListener("abort",f(!1),{signal:h}),m.addEventListener("error",f(!1),{signal:h}),m.addEventListener("complete",f(!0),{signal:h})}return m},table:function(a){var o=e.table(a),s=o.schema.primaryKey,m=i(i({},o),{mutate:function(g){var h=B.trans;if(s.outbound||h.db._options.cache==="disabled"||h.explicit||h.idbtrans.mode!=="readwrite")return o.mutate(g);var f=zn["idb://".concat(n,"/").concat(a)];if(!f)return o.mutate(g);var v=o.mutate(g);return(g.type==="add"||g.type==="put")&&(g.values.length>=50||Bi(s,g).some(function(w){return w==null}))?v.then(function(w){var x=i(i({},g),{values:g.values.map(function(b,k){var _;if(w.failures[k])return b;var S=!((_=s.keyPath)===null||_===void 0)&&_.includes(".")?Te(b):i({},b);return Z(S,s.keyPath,w.results[k]),S})}),A=zo(f,x,w);f.optimisticOps.push(A),queueMicrotask(function(){return g.mutatedParts&&vt(g.mutatedParts)})}):(f.optimisticOps.push(g),g.mutatedParts&&vt(g.mutatedParts),v.then(function(w){if(w.numFailures>0){xe(f.optimisticOps,g);var x=zo(f,g,w);x&&f.optimisticOps.push(x),g.mutatedParts&&vt(g.mutatedParts)}}),v.catch(function(){xe(f.optimisticOps,g),g.mutatedParts&&vt(g.mutatedParts)})),v},query:function(g){var h;if(!Wo(B,o)||!Lo("query",g))return o.query(g);var f=((h=B.trans)===null||h===void 0?void 0:h.db._options.cache)==="immutable",v=B,w=v.requery,x=v.signal,A=Sg(n,a,"query",g),b=A[0],k=A[1],_=A[2],S=A[3];if(b&&k)b.obsSet=g.obsSet;else{var C=o.query(g).then(function($){var T=$.result;if(b&&(b.res=T),f){for(var E=0,R=T.length;E<R;++E)Object.freeze(T[E]);Object.freeze(T)}return $}).catch(function($){return S&&b&&xe(S,b),Promise.reject($)});b={obsSet:g.obsSet,promise:C,subscribers:new Set,type:"query",req:g,dirty:!1},S?S.push(b):(S=[b],_||(_=zn["idb://".concat(n,"/").concat(a)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}),_.queries.query[g.query.index.name||""]=S)}return _g(b,S,w,x),b.promise.then(function($){var T=Zo($.result,g,_==null?void 0:_.optimisticOps,o,b,f);return{result:f?T:Te(T)}})}});return m}});return t}};function yt(e,n){return new Proxy(e,{get:function(t,a,o){return a==="db"?n:Reflect.get(t,a,o)}})}var hn=function(){function e(n,t){var a=this;this._middlewares={},this.verno=0;var o=e.dependencies;this._options=t=i({addons:e.addons,autoOpen:!0,indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange,cache:"cloned",maxConnections:wo},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange};var s=t.addons;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var m={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:se,dbReadyPromise:null,cancelOpen:se,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen};m.dbReadyPromise=new O(function(h){m.dbReadyResolve=h}),m.openCanceller=new O(function(h,f){m.cancelOpen=f}),this._state=m,this.name=n,this.on=Ar(this,"populate","blocked","versionchange","close",{ready:[ui,se]}),this.once=function(h,f){var v=function(){for(var w=[],x=0;x<arguments.length;x++)w[x]=arguments[x];a.on(h).unsubscribe(v),f.apply(a,w)};return a.on(h,v)},this.on.ready.subscribe=Y(this.on.ready.subscribe,function(h){return function(f,v){e.vip(function(){var w=a._state;if(w.openComplete)w.dbOpenError||O.resolve().then(f),v&&h(f);else if(w.onReadyBeingFired)w.onReadyBeingFired.push(f),v&&h(f);else{h(f);var x=a;v||h(function A(){x.on.ready.unsubscribe(f),x.on.ready.unsubscribe(A)})}})}}),this.Collection=Mm(this),this.Table=jm(this),this.Transaction=Bm(this),this.Version=tg(this),this.WhereClause=Fm(this),this.on("versionchange",function(h){h.newVersion>0?console.warn("Another connection wants to upgrade database '".concat(a.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(a.name,"'. Closing db now to resume the delete request.")),a.close({disableAutoOpen:!1})}),this.on("blocked",function(h){!h.newVersion||h.newVersion<h.oldVersion?console.warn("Dexie.delete('".concat(a.name,"') was blocked")):console.warn("Upgrade '".concat(a.name,"' blocked by other connection holding version ").concat(h.oldVersion/10))}),this._maxKey=jr(t.IDBKeyRange),this._createTransaction=function(h,f,v,w){return new a.Transaction(h,f,v,a._options.chromeTransactionDurability,w)},this._fireOnBlocked=function(h){a.on("blocked").fire(h),Pr.toArray().filter(function(f){return f.name===a.name&&f!==a&&!f._state.vcFired}).map(function(f){return f.on("versionchange").fire(h)})},this.use(fg),this.use(Eg),this.use(pg),this.use(hg),this.use(cg);var g=new Proxy(this,{get:function(h,f,v){if(f==="_vip")return!0;if(f==="table")return function(x){return yt(a.table(x),g)};var w=Reflect.get(h,f,v);return w instanceof Ao?yt(w,g):f==="tables"?w.map(function(x){return yt(x,g)}):f==="_createTransaction"?function(){var x=w.apply(this,arguments);return yt(x,g)}:w}});this.vip=g,s.forEach(function(h){return h(a)})}return e.prototype.version=function(n){if(isNaN(n)||n<.1)throw new H.Type("Given version is not a positive number");if(n=Math.round(n*10)/10,this.idbdb||this._state.isBeingOpened)throw new H.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,n);var t=this._versions,a=t.filter(function(o){return o._cfg.version===n})[0];return a||(a=new this.Version(n),t.push(a),t.sort(Gm),a.stores({}),this._state.autoSchema=!1,a)},e.prototype._whenReady=function(n){var t=this;return this.idbdb&&(this._state.openComplete||B.letThrough||this._vip)?n():new O(function(a,o){if(t._state.openComplete)return o(new H.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen){o(new H.DatabaseClosed);return}t.open().catch(se)}t._state.dbReadyPromise.then(a,o)}).then(n)},e.prototype.use=function(n){var t=n.stack,a=n.create,o=n.level,s=n.name;s&&this.unuse({stack:t,name:s});var m=this._middlewares[t]||(this._middlewares[t]=[]);return m.push({stack:t,create:a,level:o==null?10:o,name:s}),m.sort(function(g,h){return g.level-h.level}),this},e.prototype.unuse=function(n){var t=n.stack,a=n.name,o=n.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(s){return o?s.create!==o:a?s.name!==a:!1})),this},e.prototype.open=function(){var n=this;return Hn(mn,function(){return lg(n)})},e.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var n=this._state;if(Pr.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}n.isBeingOpened||(n.dbReadyPromise=new O(function(t){n.dbReadyResolve=t}),n.openCanceller=new O(function(t,a){n.cancelOpen=a}))},e.prototype.close=function(n){var t=n===void 0?{disableAutoOpen:!0}:n,a=t.disableAutoOpen,o=this._state;a?(o.isBeingOpened&&o.cancelOpen(new H.DatabaseClosed),this._close(),o.autoOpen=!1,o.dbOpenError=new H.DatabaseClosed):(this._close(),o.autoOpen=this._options.autoOpen||o.isBeingOpened,o.openComplete=!1,o.dbOpenError=null)},e.prototype.delete=function(n){var t=this;n===void 0&&(n={disableAutoOpen:!0});var a=arguments.length>0&&typeof arguments[0]!="object",o=this._state;return new O(function(s,m){var g=function(){t.close(n);var h=t._deps.indexedDB.deleteDatabase(t.name);h.onsuccess=ge(function(){ug(t._deps,t.name),s()}),h.onerror=Ge(m),h.onblocked=t._fireOnBlocked};if(a)throw new H.InvalidArgument("Invalid closeOptions argument to db.delete()");o.isBeingOpened?o.dbReadyPromise.then(g):g()})},e.prototype.backendDB=function(){return this.idbdb},e.prototype.isOpen=function(){return this.idbdb!==null},e.prototype.hasBeenClosed=function(){var n=this._state.dbOpenError;return n&&n.name==="DatabaseClosedError"},e.prototype.hasFailed=function(){return this._state.dbOpenError!==null},e.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(e.prototype,"tables",{get:function(){var n=this;return p(this._allTables).map(function(t){return n._allTables[t]})},enumerable:!1,configurable:!0}),e.prototype.transaction=function(){var n=mg.apply(this,arguments);return this._transaction.apply(this,n)},e.prototype._transaction=function(n,t,a){var o=this,s=B.trans;(!s||s.db!==this||n.indexOf("!")!==-1)&&(s=null);var m=n.indexOf("?")!==-1;n=n.replace("!","").replace("?","");var g,h;try{if(h=t.map(function(v){var w=v instanceof o.Table?v.name:v;if(typeof w!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return w}),n=="r"||n===yi)g=yi;else if(n=="rw"||n==ki)g=ki;else throw new H.InvalidArgument("Invalid transaction mode: "+n);if(s){if(s.mode===yi&&g===ki)if(m)s=null;else throw new H.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s&&h.forEach(function(v){if(s&&s.storeNames.indexOf(v)===-1)if(m)s=null;else throw new H.SubTransaction("Table "+v+" not included in parent transaction.")}),m&&s&&!s.active&&(s=null)}}catch(v){return s?s._promise(null,function(w,x){x(v)}):fe(v)}var f=Bo.bind(null,this,g,h,s,a);return s?s._promise(g,f,"lock"):B.trans?Hn(B.transless,function(){return o._whenReady(f)}):this._whenReady(f)},e.prototype.table=function(n){if(!K(this._allTables,n))throw new H.InvalidTable("Table ".concat(n," does not exist"));return this._allTables[n]},e}(),Ag=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",$g=function(){function e(n){this._subscribe=n}return e.prototype.subscribe=function(n,t,a){return this._subscribe(!n||typeof n=="function"?{next:n,error:t,complete:a}:n)},e.prototype[Ag]=function(){return this},e}(),kt;try{kt={indexedDB:l.indexedDB||l.mozIndexedDB||l.webkitIndexedDB||l.msIndexedDB,IDBKeyRange:l.IDBKeyRange||l.webkitIDBKeyRange}}catch{kt={indexedDB:null,IDBKeyRange:null}}function Go(e){var n=!1,t,a=new $g(function(o){var s=Ue(e);function m(S){var C=ur();try{s&&lr();var $=kn(e,S);return s&&($=$.finally(wn)),$}finally{C&&sr()}}var g=!1,h,f={},v={},w={get closed(){return g},unsubscribe:function(){g||(g=!0,h&&h.abort(),x&&_n.storagemutated.unsubscribe(k))}};o.start&&o.start(w);var x=!1,A=function(){return pi(_)};function b(){return Ri(v,f)}var k=function(S){pt(f,S),b()&&A()},_=function(){if(!(g||!kt.indexedDB)){f={};var S={};h&&h.abort(),h=new AbortController;var C={subscr:S,signal:h.signal,requery:A,querier:e,trans:null},$=m(C);x||(_n.storagemutated.subscribe(k),x=!0),Promise.resolve($).then(function(T){n=!0,t=T,!(g||C.signal.aborted)&&(b()?A():(v=S,b()?A():(f={},pi(function(){return!g&&o.next&&o.next(T)}))))},function(T){g||C.signal.aborted||(n=!1,["DatabaseClosedError","AbortError"].includes(T==null?void 0:T.name)||g||pi(function(){g||o.error&&o.error(T)}))})}};return setTimeout(A,0),w});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var Zn=hn;N(Zn,i(i({},Gr),{delete:function(e){var n=new Zn(e,{addons:[]});return n.delete()},exists:function(e){return new Zn(e,{addons:[]}).open().then(function(n){return n.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return ag(Zn.dependencies).then(e)}catch{return fe(new H.MissingAPI)}},defineClass:function(){function e(n){y(this,n)}return e},ignoreTransaction:function(e){return B.trans?Hn(B.transless||mn,e):e()},vip:Pi,async:function(e){return function(){try{var n=Fi(e.apply(this,arguments));return!n||typeof n.then!="function"?O.resolve(n):n}catch(t){return fe(t)}}},spawn:function(e,n,t){try{var a=Fi(e.apply(t,n||[]));return!a||typeof a.then!="function"?O.resolve(a):a}catch(o){return fe(o)}},currentTransaction:{get:function(){return B.trans||null}},waitFor:function(e,n){var t=O.resolve(typeof e=="function"?Zn.ignoreTransaction(e):e).timeout(n||6e4);return B.trans?B.trans.waitFor(t):t},Promise:O,debug:{get:function(){return nn},set:function(e){lo(e)}},derive:X,extend:y,props:N,override:Y,Events:Ar,on:_n,liveQuery:Go,extendObservabilitySet:pt,getByKeyPath:ae,setByKeyPath:Z,delByKeyPath:Re,shallowClone:pe,deepClone:Te,getObjectDiff:qi,cmp:re,asap:ee,minKey:bi,addons:[],connections:{get:Pr.toArray},errnames:Be,dependencies:kt,cache:zn,semVer:yo,version:yo.split(".").map(function(e){return parseInt(e)}).reduce(function(e,n,t){return e+n/Math.pow(10,t*2)})})),Zn.maxKey=jr(Zn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(_n(lt,function(e){if(!Tn){var n;n=new CustomEvent(Si,{detail:e}),Tn=!0,dispatchEvent(n),Tn=!1}}),addEventListener(Si,function(e){var n=e.detail;Tn||Wi(n)}));function Wi(e){var n=Tn;try{Tn=!0,_n.storagemutated.fire(e),Di(e,!0)}finally{Tn=n}}var Tn=!1,En,Li=function(){};typeof BroadcastChannel<"u"&&(Li=function(){En=new BroadcastChannel(Si),En.onmessage=function(e){return e.data&&Wi(e.data)}},Li(),typeof En.unref=="function"&&En.unref(),_n(lt,function(e){Tn||En.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!hn.disableBfCache&&e.persisted){nn&&console.debug("Dexie: handling persisted pagehide"),En==null||En.close();for(var n=0,t=Pr.toArray();n<t.length;n++){var a=t[n];a.close({disableAutoOpen:!1})}}}),addEventListener("pageshow",function(e){!hn.disableBfCache&&e.persisted&&(nn&&console.debug("Dexie: handling persisted pageshow"),Li(),Wi({all:new je(-1/0,[[]])}))}));function Cg(e){return new Er({add:e})}function jg(e){return new Er({remove:e})}function Ng(e,n){return new Er({replacePrefix:[e,n]})}O.rejectionMapper=mm,lo(nn);var Pg=Object.freeze({__proto__:null,DEFAULT_MAX_CONNECTIONS:wo,Dexie:hn,Entity:So,PropModification:Er,RangeSet:je,add:Cg,cmp:re,default:hn,liveQuery:Go,mergeRanges:Ir,rangesOverlap:Ko,remove:jg,replacePrefix:Ng});return i(hn,Pg,{default:hn}),hn})});J();J();var ke=Symbol.for("#__init__"),Wg=Symbol.for("#__initor__");var Lg=Symbol.for("#meta"),zi=Symbol.for("imba");var Vn={IsExtension:1,IsTag:2,HasDescriptors:4,HasSuperCalls:8,HasConstructor:16,HasFields:32,HasMixins:64,HasInitor:128,HasDecorators:256,IsObjectExtension:512,IsMixin:1024},hr=new Map,zg=globalThis[zi]||(globalThis[zi]={counter:0,classes:hr});function cr(c,r={}){var i;return hr.has(c)||hr.set(c,{symbol:Symbol(c.name),parent:(i=Object.getPrototypeOf(c.prototype))==null?void 0:i.constructor,for:c,uses:null,inits:null,id:zg.counter++,...r}),hr.get(c)}function De(c){var r;return((r=c==null?void 0:c.toIterable)==null?void 0:r.call(c))||c}function Zg(c,r){if(!c||!r)return!1;if(c.get)return r.get===c.get;if(c.set)return r.set===c.set;if(c.value)return c.value===r.value}function Jo(c,r,i,u={}){let l=c.constructor;!i&&r&&(i=Object.getOwnPropertyDescriptors(r),delete i.constructor,i[ke]&&(console.warn(`Cannot define plain fields when extending class ${l.name}`),delete i[ke]));let p=cr(l);if(p&&p.augments){let d=new Map;for(let y of Object.keys(i)){let j=Object.getOwnPropertyDescriptor(c,y);for(let P of p.augments){let K=d.get(P);K||d.set(P,K={});let N=Object.getOwnPropertyDescriptor(P.prototype,y);N&&!Zg(j,N)?console.warn("wont extend",y,N,j):K[y]=i[y]}}for(let[y,j]of d)Object.keys(j).length&&Jo(y.prototype,null,j)}return Object.defineProperties(c,i),c}function Zi(c,r){var d;let i=cr(c),u=cr(r),l=u.parent;for(;l&&((d=cr(l))==null?void 0:d.flags)&Vn.IsMixin;){Zi(c,l),l=null;break}if(l&&!(c.prototype instanceof l))throw new Error(`Mixin ${r.name} has superclass not present in target class`);if(!u.augments){u.augments=new Set;let y=u.ref=Symbol(r.name),j=Object[Symbol.hasInstance];r.prototype[y]=!0,Object.defineProperty(r,Symbol.hasInstance,{value:function(P){return this===r?P&&!!P[y]:j.call(this,P)}})}if(c.prototype[u.ref])return c;if(u.uses)for(let y of u.uses)Zi(c,y);u.augments.add(c),i.uses||(i.uses=[]),i.uses.push(r);let p=Object.getOwnPropertyDescriptors(r.prototype);return delete p.constructor,p[ke]&&(i.inits||(i.inits=[]),i.inits.push(r.prototype[ke]),delete p[ke]),Object.defineProperties(c.prototype,p),(r==null?void 0:r.mixed)instanceof Function&&r.mixed(c),c}var Jn={cache:{},self:null,target:null,proxy:new Proxy({},{apply:(c,r,i)=>Reflect.apply(Jn.target,r,i),get:(c,r)=>{let i=Reflect.get(Jn.target,r,Jn.self);return i instanceof Function?i.bind(Jn.self):i},set:(c,r,i,u)=>Reflect.set(Jn.target,r,i,Jn.self)})};function G(c,r,i,u,l=null){var P;let p=Object.getPrototypeOf(c.prototype),d=(u&(Vn.HasMixins|Vn.IsExtension))==Vn.HasMixins,y;if(d&&(hr.set(c,hr.get(p.constructor)),p=Object.getPrototypeOf(p)),l){let K=u&Vn.IsObjectExtension?l:l.prototype,N=cr(c);if(N.uses){l===K&&console.warn("Cannot extend object with mixins");for(let oe of N.uses)Zi(l,oe)}return u&Vn.HasSuperCalls&&(Jn.cache[r]=Object.create(Object.getPrototypeOf(K),Object.getOwnPropertyDescriptors(K))),Jo(K,c.prototype),l}let j=p==null?void 0:p.constructor;if(y=cr(c,{symbol:r}),Object.defineProperty(c,Lg,{value:y,enumerable:!1,configurable:!0}),i&&c.name!==i&&Object.defineProperty(c,"name",{value:i,configurable:!0}),y.flags=u,u&Vn.HasConstructor&&(c.prototype[Wg]=r),y.uses)for(let K of y.uses)(P=K.mixes)==null||P.call(K,c);return(j==null?void 0:j.inherited)instanceof Function&&j.inherited(c),c}J();J();var Rr=Symbol.for("#__listeners__");var Ug=Symbol(),Gi=class Gi{static for(r){return new Proxy({},new this(r))}constructor(r){this.getter=r}get target(){return this.getter()}get(r,i){return this.target[i]}set(r,i,u){return this.target[i]=u,!0}};G(Gi,Ug,"LazyProxy",16);var Yo=Gi;function Or(c){let r=typeof c;if(r=="number")return c;if(r=="string"){if(/^\d+fps$/.test(c))return 1e3/parseFloat(c);if(/^([-+]?[\d\.]+)s$/.test(c))return parseFloat(c)*1e3;if(/^([-+]?[\d\.]+)ms$/.test(c))return parseFloat(c)}return null}function xt(c,r,i){if(!c)return;let u=Object.getOwnPropertyDescriptor(c,r);return u||c==i?u||void 0:xt(Reflect.getPrototypeOf(c),r,i)}var Qo=function(c,r,i){let u,l,p;for(;(u=i)&&(i=i.next);)(l=i.listener)&&(i.path&&l[i.path]?p=r?l[i.path].apply(l,r):l[i.path]():p=r?l.apply(i,r):l.call(i)),i.times&&--i.times<=0&&(u.next=i.next,i.listener=null)};function St(c,r,i,u){let l,p,d;return l=c[Rr]||(c[Rr]={}),p=l[r]||(l[r]={}),d=p.tail||(p.tail=p.next={}),d.listener=i,d.path=u,p.tail=d.next={},d}function An(c,r,i){let u=St(c,r,i);return u.times=1,u}function Ui(c,r,i,u){if(!i)return;let l,p,d=c[Rr];if(d&&(l=d[r])){for(;(p=l)&&(l=l.next);)if(l==i||l.listener==i){p.next=l.next,l.listener=null;break}}}function Yn(c,r,i=null){let u;(u=c[Rr])&&(u[r]&&Qo(r,i,u[r]),u.all&&Qo(r,[r,i],u.all))}var Gg=Symbol(),Vi=class Vi{emit(r,...i){return Yn(this,r,i)}on(r,...i){return St(this,r,...i)}once(r,...i){return An(this,r,...i)}un(r,...i){return Ui(this,r,...i)}};G(Vi,Gg,"Emitter",0);var Xo=Vi;J();function Ji(c,r){var i;return typeof r=="string"?typeof c===r:(i=r[Symbol.hasInstance])==null?void 0:i.call(r,c)}function Vg(c){let r;return c&&((r=c.toIterable)?r.call(c):c)}var eu=Symbol.for("#__init__"),nu=Symbol.for("#schedule"),Yi=Symbol.for("#frames"),_t=Symbol.for("#interval"),dr=Symbol.for("#stage"),fr=Symbol.for("#scheduled"),Tt=Symbol.for("#version"),Jg=Symbol.for("#fps"),ru=Symbol.for("#ticker"),Yg=globalThis.requestAnimationFrame||function(c){return globalThis.setTimeout(c,1e3/60)};var Yc=1/60,Qg=Symbol(),ea=class ea{constructor(r=null){this[eu](r)}[eu](r=null,i=!0,u=!0){var l;this.owner=r&&(l=r.owner)!==void 0?l:null,this.target=r&&(l=r.target)!==void 0?l:null,this.active=r&&(l=r.active)!==void 0?l:!1,this.value=r&&(l=r.value)!==void 0?l:void 0,this.skip=r&&(l=r.skip)!==void 0?l:0,this.last=r&&(l=r.last)!==void 0?l:0}tick(r,i){return this.last=this.owner[Yi],this.target.tick(this,i),1}update(r,i){let u=this.active,l=r.value;return this.value!=l&&(this.deactivate(),this.value=l),(this.value||u||i)&&this.activate(),this}queue(){this.owner.add(this)}activate(){return this.value===!0?this.owner.on("commit",this):this.value===!1||typeof this.value=="number"&&(this.value/16.666666666666668<=2?this.owner.on("raf",this):this[_t]=globalThis.setInterval(this.queue.bind(this),this.value)),this.active=!0,this}deactivate(){return this.value===!0&&this.owner.un("commit",this),this.owner.un("raf",this),this[_t]&&(globalThis.clearInterval(this[_t]),this[_t]=null),this.active=!1,this}};G(ea,Qg,"Scheduled",16);var Qi=ea,Xg=Symbol(),na=class na{constructor(){var r=this;this.id=Symbol(),this.queue=[],this.stage=-1,this[dr]=-1,this[Yi]=0,this[fr]=!1,this[Tt]=0,this.listeners={},this.intervals={},this.commit=function(){return r.add("commit"),r},this[Jg]=0,this.$promise=null,this.$resolve=null,this[ru]=function(i){return r[fr]=!1,r.tick(i)}}touch(){return this[Tt]++}get version(){return this[Tt]}add(r,i=!1){return(i||this.queue.indexOf(r)==-1)&&this.queue.push(r),this[fr]||this[nu](),this}get committingΦ(){return this.queue.indexOf("commit")>=0}get syncingΦ(){return this[dr]==1}listen(r,i){let u=this.listeners[r],l=!u;return u||(u=this.listeners[r]=new Set),u.add(i),r=="raf"&&l&&this.add("raf"),this}unlisten(r,i){var u;let l=this.listeners[r];return l&&l.delete(i),r=="raf"&&l&&l.size==0&&(u=this.listeners.raf,delete this.listeners.raf),this}on(r,i){return this.listen(r,i)}un(r,i){return this.unlisten(r,i)}get promise(){var r=this;return this.$promise||(this.$promise=new Promise(function(i){return r.$resolve=i}))}tick(r){var i=this;let u=this.queue,l=this[Yi]++;if(this.ts||(this.ts=r),this.dt=r-this.ts,this.ts=r,this.queue=[],this[dr]=1,this[Tt]++,u.length)for(let p=0,d=Vg(u),y=d.length;p<y;p++){let j=d[p];typeof j=="string"&&this.listeners[j]?this.listeners[j].forEach(function(P){if(Ji(P.tick,Function))return P.tick(i,j);if(Ji(P,Function))return P(i,j)}):Ji(j,Function)?j(this.dt,this):j.tick&&j.tick(this.dt,this)}return this[dr]=this[fr]?0:-1,this.$promise&&(this.$resolve(this),this.$promise=this.$resolve=null),this.listeners.raf&&this.add("raf"),this}[nu](){return this[fr]||(this[fr]=!0,this[dr]==-1&&(this[dr]=0),Yg(this[ru])),this}schedule(r,i){var l,p;return i||(i=r[l=this.id]||(r[l]={value:!0})),(i[p=this.id]||(i[p]=new Qi({owner:this,target:r}))).update(i,!0)}unschedule(r,i={}){i||(i=r[this.id]);let u=i&&i[this.id];return u&&u.active&&u.deactivate(),this}};G(na,Xg,"Scheduler",16);var Xi=na,Ae=new Xi;function Pe(){return Ae.add("commit").promise}function eh(c,r){return globalThis.setTimeout(function(){c(),Pe()},r)}function nh(c,r){return globalThis.setInterval(function(){c(),Pe()},r)}var rh=globalThis.clearInterval,th=globalThis.clearTimeout,Kr=globalThis.imba||(globalThis.imba={});Kr.commit=Pe;Kr.setTimeout=eh;Kr.setInterval=nh;Kr.clearInterval=rh;Kr.clearTimeout=th;J();J();var tu=Symbol.for("#toStringDeopt"),Dr=Symbol.for("#named"),iu=Symbol.for("#symbols"),au=Symbol.for("#batches"),ou=Symbol.for("#extras"),ra=Symbol.for("#stacks"),ih=Symbol(),ta=class ta{constructor(r){this.dom=r,this.string=""}contains(r){return this.dom.classList.contains(r)}has(r){return this.dom.classList.contains(r)}add(r){return this.contains(r)?this:(this.string+=(this.string?" ":"")+r,this.dom.classList.add(r),this)}set(r,i){this[Dr]||(this[Dr]={});let u=this[Dr][r];return u!=i&&(u&&this.decr(u),i&&this.incr(i),this[Dr][r]=i),this}remove(r){if(!this.contains(r))return this;let i=new RegExp("(^|\\s)"+r+"(?=\\s|$)","g");return this.string=this.string.replace(i,""),this.dom.classList.remove(r),this}toggle(r,i){return i===void 0&&(i=!this.contains(r)),i?this.add(r):this.remove(r)}incr(r,i=0){var u=this;let l=this.stacks,p=l[r]||0;return p<1&&this.add(r),i>0&&setTimeout(function(){return u.decr(r)},i),l[r]=Math.max(p,0)+1}decr(r){let i=this.stacks,u=i[r]||0;return u==1&&this.remove(r),i[r]=Math.max(u,1)-1}reconcile(r,i,u){let l=this[iu],p=this[au],d=!0;if(!l)l=this[iu]=[r],p=this[au]=[i||""],u&&(this.dom.className||"").indexOf(u)==-1&&(l.push(r),p.push(u)),this.toString=this.valueOf=this[tu];else{let y=l.indexOf(r),j=i||"";y==-1?(l.push(r),p.push(j),u&&(this.dom.className||"").indexOf(u)==-1&&(l.push(r),p.push(u))):p[y]!=j?p[y]=j:d=!1}d&&(this[ou]=" "+p.join(" "),this.sync())}valueOf(){return this.string}toString(){return this.string}[tu](){return this.string+(this[ou]||"")}sync(){return this.dom.flagSync$()}get stacks(){return this[ra]||(this[ra]={})}};G(ta,ih,"Flags",16);var pr=ta;J();var uu=Symbol.for("#__init__"),ia=Symbol.for("#getRenderContext"),ah=Symbol.for("#getDynamicContext"),oh=Symbol.for("#removeFromCache"),Me={context:null,document:null,createTextNode:function(c){return globalThis.document.createTextNode(c)}},uh=Symbol(),oa=class oa{constructor(r=null){this[uu](r)}[uu](r=null,i=!0,u=!0){var l;this.stack=r&&(l=r.stack)!==void 0?l:[],this.moving=r&&(l=r.moving)!==void 0?l:new Set}push(r){return this.stack.push(r)}pop(r){return this.stack.pop()}};G(oa,uh,"Renderer",16);var aa=oa,Qn=new aa,sh=Symbol(),Et=class Et extends Map{constructor(r,i=null){super(),this._=r,this.sym=i}pop(){return Me.context=null}[ia](r){let i=this.get(r);return i||this.set(r,i=new Et(this._,r)),Me.context=i}[ah](r,i){return this[ia](r)[ia](i)}[oh](r){let i=this[r];return i&&(this.delete(i),this[r]=null,this.value==i&&(this.value=null)),this}run(r,i=1){if(this.value=r,Me.context==this&&(Me.context=null),i==0){let u=r;if(typeof u=="number"&&(u=String(u)),typeof u=="string"){let l=this.text||(this.text=Me.createTextNode(u));return u!=l.textContent&&(l.textContent=u),l}}return this.get(r)}cache(r){return this.set(this.value,r),r}};G(Et,sh,"RenderContext",16);var $n=Et;function At(c,r=Symbol(),i=c){return Me.context=c[r]||(c[r]=new $n(i,r))}function su(){let c=Me.context,r=c||new $n(null);return c&&(Me.context=null),r}function lu(c,r){var i;return typeof r=="string"?typeof c===r:(i=r[Symbol.hasInstance])==null?void 0:i.call(r,c)}function lh(c){let r;return c&&((r=c.toIterable)?r.call(c):c)}var Hr=Symbol.for("#parent"),mu=Symbol.for("#closestNode"),mh=Symbol.for("#parentNode"),gh=Symbol.for("#context"),$u=Symbol.for("##inited"),ua=Symbol.for("#getRenderContext"),hh=Symbol.for("#getDynamicContext"),gu=Symbol.for("#insertChild"),ha=Symbol.for("#appendChild"),sa=Symbol.for("#replaceChild"),hu=Symbol.for("#removeChild"),cn=Symbol.for("#insertInto"),cu=Symbol.for("#insertIntoDeopt"),Fr=Symbol.for("#removeFrom"),du=Symbol.for("#removeFromDeopt"),vr=Symbol.for("#replaceWith"),fu=Symbol.for("#replaceWithDeopt"),la=Symbol.for("#placeholderNode"),ch=Symbol.for("#attachToParent"),dh=Symbol.for("#detachFromParent"),pu=Symbol.for("#placeChild"),fh=Symbol.for("#beforeReconcile"),ph=Symbol.for("#afterReconcile"),vh=Symbol.for("#afterVisit"),bh=Symbol.for("#visitContext"),Cu=Symbol.for("#__init__"),ju=Symbol.for("##parent"),$t=Symbol.for("##up"),ma=Symbol.for("##context"),Xn=Symbol.for("#domNode"),qr=Symbol.for("##placeholderNode"),vu=Symbol.for("#forNode"),bu=Symbol.for("#domDeopt"),Br=Symbol.for("##visitContext"),yh=Symbol.for("#isRichElement"),yu=Symbol.for("#src"),Ct=Symbol.for("#htmlNodeName"),kh=Symbol.for("#getSlot");var ku=Symbol.for("#cssns"),wh=Symbol.for("#cssid"),hd=window.Event,cd=window.UIEvent,dd=window.FocusEvent,Nu=window.MouseEvent,fd=window.PointerEvent,Pu=window.KeyboardEvent,pd=window.CustomEvent,pa=window.Node,va=window.Comment,Mu=window.Text,vd=window.Element,bd=window.HTMLElement,yd=window.HTMLHtmlElement,kd=window.HTMLSelectElement,wd=window.HTMLInputElement,xd=window.HTMLTextAreaElement,Sd=window.HTMLButtonElement,_d=window.HTMLOptionElement,Td=window.HTMLScriptElement,Ed=window.SVGElement,Ad=window.DocumentFragment,$d=window.ShadowRoot,Cd=window.Document,jd=window.Window,Nd=window.customElements;var ga={};function Iu(c,r,i){if(!c)return i[r]=null;if(i[r]!==void 0)return i[r];let u=Object.getOwnPropertyDescriptor(c,r);return u!==void 0||c==SVGElement?i[r]=u||null:Iu(Reflect.getPrototypeOf(c),r,i)}var ca={},da={},xh={},Sh={};var _h={get(c,r){let i=c,u;for(;i&&u==null;)(i=i[Hr])&&(u=i[r]);return u},set(c,r,i){let u=c,l;for(;u&&l==null;){if(xt(u,r,Element))return u[r]=i,!0;u=u[Hr]}return!0}},Th=Symbol(),ya=class ya{get flags(){return this.documentElement.flags}emit(...r){return this.documentElement.emit(...r)}};G(ya,Th,"Document",1,Document);var wu=ya;Node.prototype[Cu]=function(){return this};var Eh=Symbol(),ka=class ka{get[Hr](){return this[ju]||this.parentNode||this[$t]}get[mu](){return this}get[mh](){var r;return(r=this[Hr])==null?void 0:r[mu]}get[gh](){return this[ma]||(this[ma]=new Proxy(this,_h))}[$u](){return this}[ua](r){return At(this,r)}[hh](r,i){return this[ua](r)[ua](i)}[gu](r,i){return r[cn](this,i)}[ha](r){return r[cn](this,null)}[sa](r,i){let u=this[gu](r,i);return this[hu](i),u}[hu](r){return r[Fr](this)}[cn](r,i=null){return i?r.insertBefore(this,i):r.appendChild(this),this}[cu](r,i){return i?r.insertBefore(this[Xn]||this,i):r.appendChild(this[Xn]||this),this}[Fr](r){return r.removeChild(this)}[du](r){return r.removeChild(this[Xn]||this)}[vr](r,i){return i[sa](r,this)}[fu](r,i){return i[sa](r,this[Xn]||this)}get[la](){let r;return this[qr]||(this[qr]=(r=globalThis.document.createComment("placeholder"),r[vu]=this,r))}set[la](r){let i=this[qr];this[qr]=r,r[vu]=this,i&&i!=r&&i.parentNode&&i[vr](r)}[ch](){let r=this[Xn],i=r&&r.parentNode;return r&&i&&r!=this&&(this[Xn]=null,this[cn](i,r),r[Fr](i)),this}[dh](){this[bu]!=!0&&(this[bu]=!0,!0)&&(this[vr]=this[fu],this[Fr]=this[du],this[cn]=this[cu],this[$t]||(this[$t]=this[Hr]));let r=this[la];return this.parentNode&&r!=this&&(r[cn](this.parentNode,this),this[Fr](this.parentNode)),this[Xn]=r,this}[pu](r,i,u){let l=typeof r;if(l==="undefined"||r===null){if(u&&lu(u,Comment))return u;let p=globalThis.document.createComment("");return u?u[vr](p,this):p[cn](this,null)}if(r===u)return r;if(l!=="object"){let p,d=r;return u?lu(u,Text)?(u.textContent=d,u):(p=globalThis.document.createTextNode(d),u[vr](p,this),p):(this.appendChild(p=globalThis.document.createTextNode(d)),p)}else return r[cn]?u?u[vr](r,this):r[cn](this,null):this[pu](String(r),i,u)}};G(ka,Eh,"Node",1,Node);var xu=ka,Ah=Symbol(),wa=class wa{log(...r){return console.log(...r)}get hiddenΦ(){var i,u;let r=globalThis.getComputedStyle(this);return r.display=="none"||r.visibility=="hidden"?!0:this.offsetParent||this===globalThis.document.body?!1:(u=(i=this.parentElement)==null?void 0:i.hiddenΦ)!=null?u:!0}get detachedΦ(){return!globalThis.document.documentElement.contains(this)}get unobstructedΦ(){let r=this.getBoundingClientRect(),i=window.visualViewport,u=r.left+r.width*.5,l=r.top+r.height*.5;if(i.width>u&&u>0&&i.height>l&&l>0){let p=globalThis.document.elementFromPoint(u,l);return!!(p&&(p.contains(this)||this.contains(p)))}return!1}get focusΦ(){return globalThis.document.activeElement==this}get focinΦ(){return this.contains(globalThis.document.activeElement)}emit(r,i,u={}){var d,y,j;i!=null&&((d=u.detail)!=null||(u.detail=i)),(y=u.bubbles)!=null||(u.bubbles=!0),(j=u.cancelable)!=null||(u.cancelable=!0);let l=new CustomEvent(r,u);u.original&&(l.originalEvent=u.original);let p=this.dispatchEvent(l);return l}text$(r){return this.textContent=r,this}[fh](){return this}[ph](){return this}[vh](){this[Br]&&(this[Br]=null)}get[bh](){return this[Br]||(this[Br]={})}get flags(){return this.$flags||(this.$flags=new pr(this),this.flag$==Element.prototype.flag$&&(this.flags$ext=this.className),this.flagDeopt$()),this.$flags}flag$(r){let i=this.flags$ns;this.className=i?i+(this.flags$ext=r):this.flags$ext=r}flagDeopt$(){var r=this;this.flag$=this.flagExt$,this.flagSelf$=function(i){return r.flagSync$(r.flags$own=i)}}flagExt$(r){return this.flagSync$(this.flags$ext=r)}flagSelf$(r){return this.flagDeopt$(),this.flagSelf$(r)}flagSync$(){return this.className=(this.flags$ns||"")+(this.flags$ext||"")+" "+(this.flags$own||"")+" "+(this.$flags||"")}set$(r,i){let u=xt(this,r,Element);!u||!u.set?this.setAttribute(r,i):this[r]=i}get richValue(){return this.value}set richValue(r){this.value=r}};G(wa,Ah,"Element",1,Element);var Su=wa;Element.prototype.setns$=Element.prototype.setAttributeNS;Element.prototype[yh]=!0;function D(c,r,i,u){let l=globalThis.document.createElement(c);return i&&(l.className=i),u!==null&&l.text$(u),r&&r[ha]&&r[ha](l),l}var $h=Symbol(),xa=class xa{set$(r,i){var p;let u=ga[p=this.nodeName]||(ga[p]={}),l=Iu(this,r,u);!l||!l.set?this.setAttribute(r,i):this[r]=i}flag$(r){let i=this.flags$ns;this.setAttribute("class",i?i+(this.flags$ext=r):this.flags$ext=r)}flagSelf$(r){var i=this;return this.flag$=function(u){return i.flagSync$(i.flags$ext=u)},this.flagSelf$=function(u){return i.flagSync$(i.flags$own=u)},this.flagSelf$(r)}flagSync$(){return this.setAttribute("class",(this.flags$ns||"")+(this.flags$ext||"")+" "+(this.flags$own||"")+" "+(this.$flags||""))}};G(xa,$h,"SVGElement",1,SVGElement);var _u=xa,Ch=Symbol(),Sa=class Sa{set src(r){if(this[yu]!=r&&(this[yu]=r,!0)){if(r&&r.adoptNode)r.adoptNode(this);else if(r&&r.type=="svg"){if(r.attributes)for(let i=r.attributes,u=0,l=Object.keys(i),p=l.length,d,y;u<p;u++)d=l[u],y=i[d],this.setAttribute(d,y);this.innerHTML=r.content}}}};G(Sa,Ch,"SVGSVGElement",1,SVGSVGElement);var Tu=Sa;function er(c){return globalThis.document.createComment(c)}function ba(c){return globalThis.document.createTextNode(c)}var jt=globalThis.navigator,jh=jt&&jt.vendor||"",Eu=jt&&jt.userAgent||"",Nh=jh.indexOf("Apple")>-1||Eu.indexOf("CriOS")>=0||Eu.indexOf("FxiOS")>=0,Nt=!Nh,Au=new Map,Ph=Symbol(),_a=class _a extends HTMLElement{connectedCallback(){return Nt?this.parentNode.removeChild(this):this.parentNode.connectedCallback()}disconnectedCallback(){if(!Nt)return this.parentNode.disconnectedCallback()}};G(_a,Ph,"CustomHook",0);var fa=_a;window.customElements.define("i-hook",fa);function Mh(c,r){let i=Au.get(r);if(!i){i={};let u=r.prototype,l=[u];for(;(u=u&&Object.getPrototypeOf(u))&&u.constructor!=c.constructor;)l.unshift(u);for(let p=0,d=lh(l),y=d.length;p<y;p++){let j=d[p],P=Object.getOwnPropertyDescriptors(j);Object.assign(i,P)}Au.set(r,i)}return i}function dn(c,r,i,u,l){let p;typeof c!="string"&&c&&c.nodeName&&(c=c.nodeName);let d=da[c]||c;if(ca[c]){let y=ca[c],j=y.prototype[Ct];if(j&&Nt)p=globalThis.document.createElement(j,{is:d});else if(y.create$&&j){p=globalThis.document.createElement(j),p.setAttribute("is",d);let P=Mh(p,y);Object.defineProperties(p,P),p.__slots={},p.appendChild(globalThis.document.createElement("i-hook"))}else y.create$?(p=y.create$(p),p.__slots={}):console.warn("could not create tag "+c)}else p=globalThis.document.createElement(da[c]||c);return p[ju]=r,p[Cu](),p[$u](),u!==null&&p[kh]("__").text$(u),(i||p.flags$ns)&&p.flag$(i||""),p}function fn(c,r,i={}){xh[c]=Sh[c]=r,r.nodeName=c;let u=c,l=r.prototype;if(c.indexOf("-")==-1&&(u=""+c+"-tag",da[c]=u),i.cssns){let p=(l._ns_||l[ku]||"")+" "+(i.cssns||"");l._ns_=p.trim()+" ",l[ku]=i.cssns}if(i.cssid){let p=(l.flags$ns||"")+" "+i.cssid;l[wh]=i.cssid,l.flags$ns=p.trim()+" "}return l[Ct]&&!i.extends&&(i.extends=l[Ct]),i.extends?(l[Ct]=i.extends,ca[c]=r,Nt&&window.customElements.define(u,r,{extends:i.extends})):window.customElements.define(u,r),r}var Ih=globalThis.imba||(globalThis.imba={});Ih.document=globalThis.document;J();function Wr(c,r){var i;return typeof r=="string"?typeof c===r:(i=r[Symbol.hasInstance])==null?void 0:i.call(r,c)}function Ta(c){let r;return c&&((r=c.toIterable)?r.call(c):c)}var Ot=Symbol.for("#parent"),Ru=Symbol.for("#closestNode"),Rh=Symbol.for("#isRichElement"),Oh=Symbol.for("#afterVisit"),Kh=Symbol.for("#getRenderContext"),Ou=Symbol.for("#appendChild"),Ku=Symbol.for("#removeChild"),Du=Symbol.for("#replaceChild"),pn=Symbol.for("#insertInto"),Pt=Symbol.for("#replaceWith"),Fu=Symbol.for("#insertChild"),Mt=Symbol.for("#removeFrom"),qu=Symbol.for("#placeChild"),Dh=Symbol.for("#registerFunctionalSlot"),Fh=Symbol.for("#getFunctionalSlot"),Bu=Symbol.for("#getSlot"),Aa=Symbol.for("##parent"),Cn=Symbol.for("##up"),Ea=Symbol.for("##flags"),qh=Symbol.for("#domFlags"),Ze=Symbol.for("#end"),Hu=Symbol.for("#textContent"),It=Symbol.for("#textNode"),Rt=Symbol.for("#functionalSlots");var Bh=Symbol(),Ca=class Ca{constructor(){this.childNodes=[]}log(...r){}hasChildNodes(){return!1}set[Ot](r){this[Aa]=r}get[Ot](){return this[Aa]||this[Cn]}get[Ru](){return this[Ot][Ru]}get[Rh](){return!0}get flags(){return this[Ea]||(this[Ea]=new pr(this))}flagSync$(){return this}[Oh](){return this}[Kh](r){return At(this,r)}};G(Ca,Bh,"Fragment",16);var jn=Ca,Hh=0,Wh=Symbol(),ja=class ja extends jn{constructor(r,i){super(...arguments),this[Cn]=i,this.parentNode=null,this[qh]=r,this.childNodes=[],this[Ze]=er("slot"+Hh++),i&&i[Ou](this)}get[Ot](){return this[Aa]||this.parentNode||this[Cn]}set textContent(r){this[Hu]=r}get textContent(){return this[Hu]}hasChildNodes(){for(let r=0,i=Ta(this.childNodes),u=i.length;r<u;r++){let l=i[r];if(Wr(l,jn)&&l.hasChildNodes())return!0;if(!Wr(l,va)){if(Wr(l,pa))return!0}}return!1}text$(r){return this[It]?this[It].textContent=r:this[It]=this[qu](r),this[It]}appendChild(r){return this.parentNode&&r[pn](this.parentNode,this[Ze]),this.childNodes.push(r)}[Ou](r){var i;return this.parentNode?r[pn](this.parentNode,this[Ze]):(i=r[Cn])!=null||(r[Cn]=this[Cn]||this),this.childNodes.push(r)}insertBefore(r,i){this.parentNode&&this.parentNode[Fu](r,i);let u=this.childNodes.indexOf(i);return u>=0&&this.childNodes.splice(u,0,r),r}[Ku](r){this.parentNode&&this.parentNode[Ku](r);let i=this.childNodes.indexOf(r);i>=0&&this.childNodes.splice(i,1)}[Du](r,i){this.parentNode&&this.parentNode[Du](r,i);let u=this.childNodes.indexOf(i);return this.childNodes[u]=r,r}[pn](r,i){let u=this.parentNode;if(this.parentNode!=r&&(this.parentNode=r,!0)){this[Ze]&&(i=this[Ze][pn](r,i));for(let l=0,p=Ta(this.childNodes),d=p.length;l<d;l++)p[l][pn](r,i)}return this}[Pt](r,i){let u=r[pn](i,this[Ze]);return this[Mt](i),u}[Fu](r,i){if(this.parentNode&&this.insertBefore(r,i||this[Ze]),i){let u=this.childNodes.indexOf(i);u>=0&&this.childNodes.splice(u,0,r)}else this.childNodes.push(r);return r}[Mt](r){for(let i=0,u=Ta(this.childNodes),l=u.length;i<l;i++)u[i][Mt](r);return this[Ze]&&this[Ze][Mt](r),this.parentNode=null,this}[qu](r,i,u){let l=this.parentNode,p=typeof r;if(p==="undefined"||r===null){if(u&&Wr(u,va))return u;let d=er("");if(u){let y=this.childNodes.indexOf(u);return this.childNodes.splice(y,1,d),l&&u[Pt](d,l),d}return this.childNodes.push(d),l&&d[pn](l,this[Ze]),d}if(r===u)return r;if(p!=="object"){let d,y=r;if(u){if(Wr(u,Mu))return u.textContent=y,u;{d=ba(y);let j=this.childNodes.indexOf(u);return this.childNodes.splice(j,1,d),l&&u[Pt](d,l),d}}else return this.childNodes.push(d=ba(y)),l&&d[pn](l,this[Ze]),d}else if(u){let d=this.childNodes.indexOf(u);return this.childNodes.splice(d,1,r),l&&u[Pt](r,l),r}else return this.childNodes.push(r),l&&r[pn](l,this[Ze]),r}};G(ja,Wh,"VirtualFragment",16);var $a=ja;function Wu(c,r){let i=new $a(c,null);return i[Cn]=r,i}var Lh=Symbol(),Na=class Na{[Dh](r){let i=this[Rt]||(this[Rt]={});return i[r]||(i[r]=Wu(0,this))}[Fh](r,i){let u=this[Rt];return u&&u[r]||this[Bu](r,i)}[Bu](r,i){var u;return r=="__"&&!this.render||!this.__slots?this:(u=this.__slots)[r]||(u[r]=Wu(0,this))}};G(Na,Lh,"Node",1,pa);var Lu=Na;J();function zh(c){let r;return c&&((r=c.toIterable)?r.call(c):c)}var Zh=Symbol.for("#afterVisit"),Kt=Symbol.for("#insertInto"),zu=Symbol.for("#appendChild"),Uh=Symbol.for("#replaceWith"),Pa=Symbol.for("#removeFrom"),Gh=Symbol.for("#domFlags"),Vh=Symbol.for("##parent"),Nn=Symbol.for("#end"),Jh=Symbol.for("#removeChild"),Yh=Symbol.for("#insertChild"),Qh=Symbol(),Ia=class Ia extends jn{constructor(r,i){super(...arguments),this[Gh]=r,this[Vh]=i,r&256||(this[Nn]=er("list")),this.$=this.childNodes,this.length=0,i&&i[zu](this)}hasChildNodes(){return this.length!=0}[Zh](r){let i=this.length;if(this.length=r,i==r)return;let u=this.parentNode;if(!u)return;let l=this.childNodes,p=this[Nn];if(i>r)for(;i>r;)u[Jh](l[--i]);else if(r>i)for(;r>i;)u[Yh](l[i++],p);this.length=r}[Kt](r,i){this.parentNode=r,this[Nn]&&this[Nn][Kt](r,i),i=this[Nn];for(let u=0,l=zh(this.childNodes),p=l.length;u<p;u++){let d=l[u];if(u==this.length)break;d[Kt](r,i)}return this}[zu](r){}[Uh](r,i){let u=r[Kt](i,this[Nn]);return this[Pa](i),u}[Pa](r){let i=this.length;for(;i>0;)this.childNodes[--i][Pa](r);this[Nn]&&r.removeChild(this[Nn]),this.parentNode=null}};G(Ia,Qh,"IndexedTagFragment",16);var Ma=Ia;function Zu(c,r){return new Ma(c,r)}J();function Uu(c){let r;return c&&((r=c.toIterable)?r.call(c):c)}var Ra=Symbol.for("#appendChild"),Dt=Symbol.for("#insertChild"),Xh=Symbol.for("#replaceWith"),Ft=Symbol.for("#insertInto"),Oa=Symbol.for("#removeFrom"),ec=Symbol.for("#afterVisit"),qt=Symbol.for("#domFlags"),Gu=Symbol.for("##parent"),Pn=Symbol.for("#end"),Vu=Symbol.for("#removeChild"),nc=Symbol(),Da=class Da extends jn{constructor(r,i){super(...arguments),this[qt]=r,this[Gu]=i,this.changes=new Map,this.dirty=!1,this.array=this.childNodes,this.$=new $n(this,Symbol()),r&256||(this[Pn]=er("map")),i&&i[Ra](this)}[Ra](r){if(this.parentNode)return this.parentNode[Dt](r,this[Pn])}hasChildNodes(){return this.childNodes.length!=0}push(r,i){if(!(this[qt]&1)){this.array.push(r),this[Ra](r);return}let u=this.array[i];if(u!==r){this.dirty=!0;let l=this.array.indexOf(r),p=this.changes.get(r);l===-1?(this.array.splice(i,0,r),this.insertChild(r,i,l)):l===i+1?(u&&this.changes.set(u,-1),this.array.splice(i,1)):(l>=0&&this.array.splice(l,1),this.array.splice(i,0,r),this.moveChild(r,i,l)),p==-1&&this.changes.delete(r)}}insertChild(r,i,u){let l=this.parentNode;if(l)if(i>0){let p=this.array[i-1];l[Dt](r,p.nextSibling)}else l[Dt](r,this.childNodes[i+1]||this[Pn])}moveChild(r,i,u){return this.insertChild(r,i,u)}removeChild(r,i){r.parentNode&&r[Oa](r.parentNode)}[Dt](r,i){}[Xh](r,i){let u=r[Ft](i,this[Pn]);return this[Oa](i),u}[Ft](r,i){this[Gu]=r;let u=this.parentNode;if(r!=u){this.parentNode=r;for(let l=0,p=Uu(this.array),d=p.length;l<d;l++)p[l][Ft](r,i);this[Pn]&&this[Pn][Ft](r,i)}return this}[Oa](r){for(let i=0,u=Uu(this.array),l=u.length;i<l;i++){let p=u[i];r[Vu](p)}return this[Pn]&&r[Vu](this[Pn]),this.parentNode=null}[ec](r){var i=this;if(!(this[qt]&1)){this[qt]|=1;return}if(this.dirty&&(this.changes.forEach(function(u,l){if(u==-1)return i.removeChild(l)}),this.changes.clear(),this.dirty=!1),this.array.length>r)for(;this.array.length>r;){let u=this.array.pop();this.removeChild(u)}}};G(Da,nc,"KeyedTagFragment",16);var Ka=Da;function Ju(c,r){return new Ka(c,r)}J();function Yu(c,r){var i;return typeof r=="string"?typeof c===r:(i=r[Symbol.hasInstance])==null?void 0:i.call(r,c)}function rc(c){let r;return c&&((r=c.toIterable)?r.call(c):c)}var Ht=Symbol.for("#__init__"),tc=Symbol.for("##inited"),ic=Symbol.for("#afterVisit"),ac=Symbol.for("#insertInto"),oc=Symbol.for("#insertIntoDeopt"),uc=Symbol.for("#beforeReconcile"),sc=Symbol.for("#afterReconcile"),Qu=Symbol.for("#__hooks__"),nr=Symbol.for("#autorender"),Bt=Symbol.for("##visitContext"),Xu=Symbol.for("#domNode"),lc=Symbol(),br,mc=new(br=class{constructor(r=null){this[Ht](r)}[Ht](r=null,i=!0,u=!0){var l;this.items=r&&(l=r.items)!==void 0?l:[],this.current=r&&(l=r.current)!==void 0?l:null,this.lastQueued=r&&(l=r.lastQueued)!==void 0?l:null,this.tests=r&&(l=r.tests)!==void 0?l:0}flush(){let r=null;for(;r=this.items.shift();){if(!r.parentNode||r.hydratedΦ)continue;let i=this.current;this.current=r,r.__F|=1024;try{r.connectedCallback()}catch(u){console.error(u)}this.current=i}}queue(r){var i=this;let u=this.items.length,l=0,p=this.lastQueued;this.lastQueued=r;let d=Node.DOCUMENT_POSITION_PRECEDING,y=Node.DOCUMENT_POSITION_FOLLOWING;if(u){let j=this.items.indexOf(p),P=j,K=function(oe,Q){return i.tests++,oe.compareDocumentPosition(Q)};(j==-1||p.nodeName!=r.nodeName)&&(P=j=0);let N=this.items[P];for(;N&&K(N,r)&y;)N=this.items[++P];if(P!=j)N?this.items.splice(P,0,r):this.items.push(r);else{for(;N&&K(N,r)&d;)N=this.items[--P];P!=j&&(N?this.items.splice(P+1,0,r):this.items.unshift(r))}}else this.items.push(r),this.current||globalThis.queueMicrotask(this.flush.bind(this))}},G(br,lc,null,16),br);var gc=Symbol(),Fa=class Fa extends HTMLElement{constructor(){super(),this.flags$ns&&(this.flag$=this.flagExt$),this.setup$(),this.build()}setup$(){return this.__slots={},this.__F=0}[Ht](){return this.__F|=3,this}[tc](){if(this[Qu])return this[Qu].inited(this)}flag$(r){this.className=this.flags$ext=r}build(){return this}awaken(){return this}mount(){return this}remount(){return this.mount(),this}unmount(){return this}rendered(){return this}dehydrate(){return this}hydrate(){return this.autoschedule=!0,this}tick(r,i){return this.commit()}visit(){return this.commit()}commit(){return this.renderΦ?(this.__F|=256,this.render&&this.render(),this.rendered(),this.__F=(this.__F|512)&-257&-8193):(this.__F|=8192,this)}get autoschedule(){return(this.__F&64)!=0}set autoschedule(r){r?this.__F|=64:this.__F&=-65}set autorender(r){let i=this[nr]||(this[nr]={});i.value=r,this.mountedΦ&&Ae.schedule(this,i)}get renderΦ(){return!this.suspendedΦ}get mountingΦ(){return(this.__F&16)!=0}get mountedΦ(){return(this.__F&32)!=0}get awakenedΦ(){return(this.__F&8)!=0}get renderedΦ(){return(this.__F&512)!=0}get suspendedΦ(){return(this.__F&4096)!=0}get renderingΦ(){return(this.__F&256)!=0}get scheduledΦ(){return(this.__F&128)!=0}get hydratedΦ(){return(this.__F&2)!=0}get ssrΦ(){return(this.__F&1024)!=0}get scheduler(){return Ae}schedule(){return Ae.on("commit",this),this.__F|=128,this}unschedule(){return Ae.un("commit",this),this.__F&=-129,this}async suspend(r=null){let i=this.flags.incr("@suspended");return this.__F|=4096,Yu(r,Function)&&(await r(),this.unsuspend()),this}unsuspend(){return this.flags.decr("@suspended")==0&&(this.__F&=-4097,this.commit()),this}[ic](){if(this.visit(),this[Bt])return this[Bt]=null}[ac](r,i=null){if(this.mountedΦ&&r.moveBefore)r.moveBefore(this,i);else{let u=(this.__F&32)!=0&&r==this.parentNode;u&&Qn.moving.add(this),i?r.insertBefore(this,i):r.appendChild(this),u&&Qn.moving.delete(this)}return this}[oc](r,i){if(this.mountedΦ&&r.moveBefore)r.moveBefore(this[Xu]||this,i);else{let u=this[Xu]||this,l=(this.__F&32)!=0&&r==this.parentNode;l&&Qn.moving.add(this),i?r.insertBefore(u,i):r.appendChild(u),l&&Qn.moving.delete(this)}return this}[uc](){return this.__F&1024&&(this.__F=this.__F&-1025,this.classList.remove("_ssr_"),this.flags$ext&&this.flags$ext.indexOf("_ssr_")==0&&(this.flags$ext=this.flags$ext.slice(5)),this.__F&512||(this.innerHTML="")),this[Bt]&&(this[Bt]=null),this}[sc](){return this}connectedMoveCallback(){this.remount()}connectedCallback(){let r=this.__F,i=r&1,u=r&8;if(r&16384){this.__F=r&-16385,this.remount();return}if(!i&&!(r&1024)){mc.queue(this);return}if(r&48)return;this.__F|=16,i||this[Ht](),r&2||(this.flags$ext=this.className,this.__F|=2,this.hydrate(),this.commit()),u||(this.awaken(),this.__F|=8),Yn(this,"mount",[this]);let l=this.mount();return l&&Yu(l.then,Function)&&l.then(Ae.commit),r=this.__F=(this.__F|32)&-17,r&64&&this.schedule(),this[nr]&&Ae.schedule(this,this[nr]),this}disconnectedCallback(){var r;if(!(this.__F&16384)){if(Qn.moving.size){for(let i of rc(Qn.moving))if((r=i==null?void 0:i.contains)!=null&&r.call(i,this)){this.__F|=16384;return}}if(this.__F=this.__F&-49,this.__F&128&&this.unschedule(),Yn(this,"unmount",[this]),this.unmount(),this[nr])return Ae.unschedule(this,this[nr])}}dataForTagName(r){}};G(Fa,gc,"Component",16);var We=Fa;J();function hc(c,r){var i;return typeof r=="string"?typeof c===r:(i=r[Symbol.hasInstance])==null?void 0:i.call(r,c)}var es=Symbol.for("#insertInto"),ns=Symbol.for("#removeFrom");function qa(c,r,i={}){let u=r||globalThis.document.body,l=c;if(hc(c,Function)){let p=c,d=i.tick||(i.tick=function(){let y=i.context||(i.context=new $n(u,null)),j=Me.context;Me.context=y;let P=c(y,i);return Me.context==y&&(Me.context=j),i.node!=P&&(i.node&&globalThis.imba.unmount(i.node),P?((i.node=P)[es](u),P.tick==We.prototype.tick&&(P.tick=i.tick,P.scheduledΦ),An(P,"unmount",function(){if(i.node==P)return i.node=null,Ae.unlisten("commit",i.tick)})):(i.node=P,Ae.unlisten("commit",i.tick))),P});return Ae.listen("commit",d),d()}else l.__F|=64;return l[es](u),l}function cc(c){return c&&c[ns]&&c.parentNode&&c[ns](c.parentNode),c}var rs=globalThis.imba||(globalThis.imba={});rs.mount=qa;rs.unmount=cc;J();J();function is(){return globalThis.imba.uses_events_keyboard=!0,!0}var dc=Symbol(),Ba=class Ba{αesc(){return this.keyCode==27}αtab(){return this.keyCode==9}αenter(){return this.keyCode==13}αspace(){return this.keyCode==32}αup(){return this.keyCode==38}αdown(){return this.keyCode==40}αleft(){return this.keyCode==37}αright(){return this.keyCode==39}αdel(){return this.keyCode==8||this.keyCode==46}αkey(r){if(typeof r=="string")return this.key==r;if(typeof r=="number")return this.keyCode==r}αshift(){return!!this.shiftKey}αalt(){return!!this.altKey}αctrl(){return!!this.ctrlKey}αmeta(){return!!this.metaKey}αmod(){let r=globalThis.navigator.platform;return/^(Mac|iPhone|iPad|iPod)/.test(r||"")?!!this.metaKey:!!this.ctrlKey}};G(Ba,dc,"KeyboardEvent",1,Pu);var ts=Ba;J();function rn(){return globalThis.imba.uses_events_mouse=!0,!0}var fc=Symbol(),Ha=class Ha{αleft(){return this.button==0}αmiddle(){return this.button==1}αright(){return this.button==2}αshift(){return!!this.shiftKey}αalt(){return!!this.altKey}αctrl(){return!!this.ctrlKey}αmeta(){return!!this.metaKey}αmod(){let r=globalThis.navigator.platform;return/^(Mac|iPhone|iPad|iPod)/.test(r||"")?!!this.metaKey:!!this.ctrlKey}};G(Ha,fc,"MouseEvent",1,Nu);var as=Ha;function tn(c,r){var i;return typeof r=="string"?typeof c===r:(i=r[Symbol.hasInstance])==null?void 0:i.call(r,c)}function Wa(c){let r;return c&&((r=c.toIterable)?r.call(c):c)}var pc=Symbol.for("#extendType"),vc=Symbol.for("#modifierState"),Wt=Symbol.for("#sharedModifierState"),os=Symbol.for("#onceHandlerEnd"),La=Symbol.for("#extendDescriptors"),Ie=Symbol.for("#context"),Lt=Symbol.for("#defaultPrevented"),za=Symbol.for("#stopPropagation"),us=Symbol.for("#self"),bc=Symbol.for("#target"),yc=Symbol.for("#teleport");is();rn();var kc=Symbol(),Za=class Za{[pc](r){var i,u;let l=r[La]||(r[La]=(i=Object.getOwnPropertyDescriptors(r.prototype),u=i.constructor,delete i.constructor,i));return Object.defineProperties(this,l)}};G(Za,kc,"CustomEvent",1,CustomEvent);var ss=Za,wc=Symbol(),Ua=class Ua{get original(){return this.originalEvent||this}get[vc](){var r,i;return(r=this[Ie])[i=this[Ie].step]||(r[i]={})}get[Wt](){var r,i;return(r=this[Ie].handler)[i=this[Ie].step]||(r[i]={})}[os](r){return An(this[Ie],"end",r)}αsel(r){return!!this.target.matches(String(r))}αclosest(r){return!!this.target.closest(String(r))}αprevent(){return this[Lt]=!0,this.preventDefault(),!0}αtrap(){return this[za]=!0,this.stopImmediatePropagation(),this[Lt]=!0,this.preventDefault(),!0}αfocin(r){var u;let i=this[Ie].element;return i=tn(r,Element)?r:r?i.closest(r):i,(u=i==null?void 0:i.contains)==null?void 0:u.call(i,globalThis.document.activeElement)}αlog(...r){return console.info(...r),!0}αtrusted(){return!!this.isTrusted}αuntrusted(){return!this.isTrusted}αif(r){return!!r}αwait(r=250){return new Promise(function(i){return setTimeout(i,Or(r))})}αself(){return this.target==this[Ie].element}αcooldown(r=250){let i=this[Wt];return i.active?!1:(i.active=!0,i.target=this[Ie].element,i.target.flags.incr("cooldown"),this[os](function(){return setTimeout(function(){return i.target.flags.decr("cooldown"),i.active=!1},Or(r))}),!0)}αthrottle(r=250,i="throttled"){let u=this[Wt];return u.active?(u.next&&u.next(!1),new Promise(function(l){return u.next=function(p){return u.next=null,l(p)}})):(u.active=!0,u.el||(u.el=this[Ie].element),i&&u.el.flags.incr(i),An(this[Ie],"end",function(){let l=Or(r);return u.interval=setInterval(function(){u.next?u.next(!0):(clearInterval(u.interval),i&&u.el.flags.decr(i),u.active=!1)},l)}),!0)}αdebounce(r=250){let i=this[Wt],u=this;return i.queue||(i.queue=[]),i.queue.push(i.last=u),new Promise(function(l){return setTimeout(function(){return i.last==u?(u.debounced=i.queue,i.last=null,i.queue=[],l(!0)):l(!1)},Or(r))})}αflag(r,i){let{element:u,step:l,state:p,id:d,current:y}=this[Ie],j=tn(i,Element)?i:i?u.closest(i):u;if(!j)return!0;this[Ie].commit=!0,p[l]=d,j.flags.incr(r);let P=Date.now();return An(y,"end",function(){let K=Date.now()-P,N=Math.max(250-K,0);return setTimeout(function(){return j.flags.decr(r)},N)}),!0}αbusy(r){return this.αflag("busy",r)}αoutside(){let{handler:r}=this[Ie];if(r&&r[us])return!r[us].parentNode.contains(this.target)}async αpost(r,i={}){return await globalThis.fetch(r,{method:"POST",...i})}async αfetch(r,i={}){return await globalThis.fetch(r,i)}};G(Ua,wc,"Event",1,Event);var ls=Ua,xc=Symbol(),Ga=class Ga{αself(){let r=this[Ie].element;return this.type=="focusout"?this.relatedTarget&&!r.contains(this.relatedTarget):this.type=="focusin"?!this.relatedTarget||!r.contains(this.relatedTarget):this.target==r}};G(Ga,xc,"FocusEvent",1,FocusEvent);var ms=Ga;function Mn(){return globalThis.imba.uses_events=!0,!0}var Sc=Symbol(),Va=class Va{constructor(r,i){this.params=r,this.closure=i}getHandlerForMethod(r,i){return r?r[i]?r:this.getHandlerForMethod(r.parentNode,i):null}abortCurrentHandlers(){var r;if(this.currentEvents)for(let i of Wa(this.currentEvents))i.aborted=!0,(r=i==null?void 0:i.resolver)==null||r.call(i,!0);return this}emit(r,...i){return Yn(this,r,i)}on(r,...i){return St(this,r,...i)}once(r,...i){return An(this,r,...i)}un(r,...i){return Ui(this,r,...i)}get passiveΦ(){return this.params.passive}get captureΦ(){return this.params.capture}get silentΦ(){return this.params.silent}get globalΦ(){return this.params.global}async handleEvent(r){if(this.disabled)return;let i=this[bc]||r.currentTarget,u=this.params,l=null,p=u.silence||u.silent;this.count||(this.count=0),this.state||(this.state={});let d=this.lastState={element:i,event:r,modifiers:u,handler:this,id:++this.count,step:-1,state:this.state,commit:null,called:!1,current:null,aborted:!1};if(d.current=d,r.handle$mod&&r.handle$mod.apply(d,u.options||[])==!1)return;let y=Event[this.type+"$handle"]||Event[r.type+"$handle"]||this.guard;if(!(y&&y.apply(d,u.options||[])==!1)){this.currentEvents||(this.currentEvents=new Set),this.currentEvents.add(d);for(let j=0,P=Object.keys(u),K=P.length,N,oe;j<K&&(N=P[j],oe=u[N],!d.aborted);j++){if(d.step++,N[0]=="_")continue;N.indexOf("~")>0&&(N=N.split("~")[0]);let Q=null,X=[r,d],ie,z=null,le,te=!1,Y=typeof N=="string";if(N[0]=="$"&&N[1]=="_"&&tn(oe[0],Function))r[Ie]=d,N=oe[0],d.called=!0,N.passive||(d.commit=!0),X=[r,d].concat(oe.slice(1)),z=i;else if(tn(oe,Array)){X=oe.slice(),Q=X;for(let ue=0,ee=Wa(X),he=ee.length;ue<he;ue++){let ae=ee[ue];if(typeof ae=="string"&&ae[0]=="~"&&ae[1]=="$"){let Re=ae.slice(2).split("."),pe=d[Re.shift()]||r;for(let $e=0,de=Wa(Re),_e=de.length;$e<_e;$e++){let ve=de[$e];pe=pe?pe[ve]:void 0}X[ue]=pe}}}if(typeof N=="string"&&(le=N.match(/^(emit|flag|mod|moved|pin|fit|refit|map|remap|css)-(.+)$/))&&(Q||(Q=X=[]),X.unshift(le[2]),N=le[1]),N=="trap")r[za]=!0,r.stopImmediatePropagation(),r[Lt]=!0,r.preventDefault();else if(N=="stop")r[za]=!0,r.stopImmediatePropagation();else if(N=="prevent")r[Lt]=!0,r.preventDefault();else if(N=="commit")d.commit=!0;else if(N=="once")i.removeEventListener(r.type,this);else{if(N=="options"||N=="silence"||N=="silent")continue;if(N=="emit"){let ue=X[0],ee=X[1];d.called=!0;let he=new CustomEvent(ue,{bubbles:!0,detail:ee});he.originalEvent=r;let Z=(this[yc]||i).dispatchEvent(he)}else if(typeof N=="string"){N[0]=="!"&&(te=!0,N=N.slice(1));let ue="α"+N,ee=r[ue];ee||(ee=this.type&&Event[this.type+"$"+N+"$mod"]),ee||(ee=r[N+"$mod"]||Event[r.type+"$"+N]||Event[N+"$mod"]),tn(ee,Function)?(N=ee,z=d,X=Q||[],r[ue]&&(z=r,r[Ie]=d)):N[0]=="_"?(N=N.slice(1),z=this.closure):z=this.getHandlerForMethod(i,N)}}try{tn(N,Function)?ie=N.apply(z||i,X):z&&(ie=z[N].apply(z,X)),ie&&tn(ie.then,Function)&&ie!=Ae.$promise&&(d.commit&&!p&&Ae.commit(),ie=await ie)}catch(ue){l=ue;break}if(te&&ie===!0||!te&&ie===!1)break;d.value=ie}if(Yn(d,"end",d),d.commit&&!p&&Ae.commit(),this.currentEvents.delete(d),this.currentEvents.size==0&&this.emit("idle"),l!=null){if(this.type!="error"){let j=tn(l,Error)?l.message:l,P=new CustomEvent("error",{detail:j,bubbles:!0,cancelable:!0});P.error=l,P.originalEvent=r;let K=i.dispatchEvent(P);if(P.defaultPrevented)return}throw l}return d}}};G(Va,Sc,"EventHandler",16);var zt=Va,_c=Symbol(),Ja=class Ja{on$(r,i,u){let l="on$"+r,p=i.capture||!1,d=i.passive,y,j=p;return d&&(j={passive:d,capture:p}),tn(this[l],Function)?(this[l].length>2&&(y=new zt(i,u)),y=this[l](i,u,y,j)):(y=new zt(i,u),this.addEventListener(r,y,j)),y}on$error(r,i,u,l){var p;return(p=r.options)!=null&&p.length&&(u.guard=function(...d){let y=this.event.error;return!!d.find(function(P){return tn(y,P)})}),this.addEventListener("error",u,l),u}};G(Ja,_c,"Element",1,Element);var gs=Ja;J();var hs=`{"mi": "te", "gr": "article", "en": ["the"]}
{"mi": "te", "gr": "det", "en": ["Referring to a whole class of things or people designated by the noun that follows.", "Mr, mister, sir (capitalised)", "Used in front of another verb following a stative.", "Used in front of another verb following taea.", "Used before the names for the days of the week.", "Sometimes used before numbers with a following noun.", "Used before ordinal numbers including those using tua-."]}
{"mi": "o", "gr": "particle", "en": ["of"]}
{"mi": "one", "gr": "noun", "en": ["sand", "mud", "soil, earth", "beach"]}
{"mi": "one", "gr": "adj", "en": ["granular, granulated"]}
{"mi": "tao", "gr": "noun", "en": ["spear"]}
{"mi": "take", "gr": "verb", "en": ["to originate, derive"]}
{"mi": "take", "gr": "noun", "en": ["reason, purpose", "cause", "origin, source, beginning", "root", "stump", "topic, subject, matter, issue, concern", "claim, right", "plan", "base, foot (e.g. of a hill)"]}
{"mi": "ao", "gr": "noun", "en": ["daytime"]}
{"mi": "ao", "gr": "noun", "en": ["world"]}
{"mi": "ao", "gr": "noun", "en": ["cloud"]}
{"mi": "wiki", "gr": "verb", "en": ["to form circular ripples on the surface of a fluid"]}
{"mi": "wiki", "gr": "noun", "en": ["week"]}
{"mi": "wiki", "gr": "noun", "en": ["wick; fuse"]}
{"mi": "ate", "gr": "noun", "en": ["liver (organ of the body)", "any kind of organ (in compound words)", "heart (seat of emotions)"]}
{"mi": "kiwi", "gr": "noun", "en": ["kiwi (bird)"]}
{"mi": "rite", "gr": "verb", "en": ["to resemble; to be like, similar, alike"]}
{"mi": "ai", "gr": "particle", "en": ["Marks an event as habitual"]}
{"mi": "ai", "gr": "intj", "en": ["yikes, gosh"]}
{"mi": "ai", "gr": "verb", "en": ["to copulate"]}
{"mi": "anu", "gr": "noun", "en": ["cold"]}
{"mi": "he", "gr": "article", "en": ["a, an, some: indefinite article"]}
{"mi": "me", "gr": "particle", "en": ["and (joins two noun phrases)", "with (indicates people or things present when an event occurs)", "must, should (used before verbs to form a weak command)", "must be (used before nouns and adjectives)", "how should it be done (used before pēhea and a clause)", "if only (reverses what is stated)", "as if, like (simile)", "to see whether"]}
{"mi": "kawa", "gr": "adj", "en": ["sour"]}
{"mi": "kawa", "gr": "noun", "en": ["a ceremony to remove tapu from a new house or canoe", "karakia (“ritual chants”) and customs for the opening of new houses, canoes and other events", "marae protocol - customs of the marae and wharenui, particularly those related to formal activities such as pōhiri, speeches and mihimihi", "acid", "bitterness", "kava, plant brought by ancestors from the South Pacific, Piper methysticum."]}
{"mi": "kawa", "gr": "verb", "en": ["to perform the kawa ceremony, open a new house"]}
{"mi": "pata", "gr": "noun", "en": ["drop, drip"]}
{"mi": "pata", "gr": "verb", "en": ["to drip", "to splatter"]}
{"mi": "pata", "gr": "noun", "en": ["seed", "granule"]}
{"mi": "Maori", "gr": "name", "en": ["alternative spelling of Māori."]}
{"mi": "amana", "gr": "noun", "en": ["almond"]}
{"mi": "ia", "gr": "pron", "en": ["he / she / it (third person singular pronoun)"]}
{"mi": "aku", "gr": "pron", "en": ["my (when talking of more than one thing)"]}
{"mi": "rata", "gr": "adj", "en": ["tame", "quiet"]}
{"mi": "rato", "gr": "adj", "en": ["spread, distributed", "available"]}
{"mi": "tore", "gr": "verb", "en": ["to cut, to split", "to pass through a narrow aperture"]}
{"mi": "tore", "gr": "noun", "en": ["strip, shred (of cloth etc)", "stripe", "narrow light beam passing through a slit"]}
{"mi": "tore", "gr": "adj", "en": ["of keen or sharp eyesight"]}
{"mi": "tore", "gr": "noun", "en": ["vagina, vulva"]}
{"mi": "e", "gr": "particle", "en": ["vocative, used before terms of address", "used before stating numbers", "imperative, used before verbs of one long vowel or two short vowels", "imperative, used for negative commands", "well, used as a discourse marker", "will, used to mark future tense"]}
{"mi": "e", "gr": "conj", "en": ["if", "when"]}
{"mi": "e", "gr": "intj", "en": ["of course", "where?", "oh, used as an exclamation to call attention or to express surprise or admiration", "no way, not on your life, no", "yes, indeed"]}
{"mi": "e", "gr": "prep", "en": ["by, used before agents of passive constructions"]}
{"mi": "mana", "gr": "noun", "en": ["power; mana"]}
{"mi": "ewe", "gr": "noun", "en": ["afterbirth, placenta", "womb"]}
{"mi": "manga", "gr": "noun", "en": ["branch", "stream, creek", "faculty (of a university), unit (of a hospital)", "act (of a play)"]}
{"mi": "aha", "gr": "pron", "en": ["what (interrogative pronoun)", "what kind of (interrogative pronoun)", "anything, (with negation) nothing"]}
{"mi": "aha", "gr": "verb", "en": ["to do what, something (interrogative verb)"]}
{"mi": "ha", "gr": "intj", "en": ["alternative form of hā (“hey!”)"]}
{"mi": "kopa", "gr": "noun", "en": ["space in front of a house", "floor space and corner on the left on entering a wharenui – normally the place where the local people of the marae sit or sleep"]}
{"mi": "kopa", "gr": "verb", "en": ["to fly away", "to pass by, to disappear"]}
{"mi": "kopa", "gr": "adj", "en": ["bent, folded"]}
{"mi": "kopa", "gr": "noun", "en": ["bend, fold", "any flappable item e.g. wallets, satchels"]}
{"mi": "kopa", "gr": "verb", "en": ["to be bent or folded"]}
{"mi": "kopa", "gr": "adj", "en": ["crippled, lame"]}
{"mi": "kopa", "gr": "noun", "en": ["cripple, disability"]}
{"mi": "kopa", "gr": "verb", "en": ["to be crippled, lame"]}
{"mi": "au", "gr": "pron", "en": ["I (personal pronoun)", "me (direct object of a verb)", "me (object of a preposition)", "me (indirect object of a verb)"]}
{"mi": "au", "gr": "noun", "en": ["current (water)", "whirlpool; rapid", "wake (of a canoe, etc.)", "sea; ocean"]}
{"mi": "au", "gr": "noun", "en": ["gall; gall bladder"]}
{"mi": "au", "gr": "noun", "en": ["smoke", "cloud", "mist; fog"]}
{"mi": "au", "gr": "verb", "en": ["to howl, bark (of a dog)"]}
{"mi": "toro", "gr": "verb", "en": ["to stretch out, to extend", "to creep, to crawl", "to visit, to call on", "to scout out, to reconnoitre, to probe", "to forage"]}
{"mi": "toro", "gr": "noun", "en": ["extension", "scout", "probe"]}
{"mi": "toro", "gr": "noun", "en": ["toro (Myrsine salicina, a small native New Zealand tree."]}
{"mi": "toro", "gr": "num", "en": ["alternative form of toru"]}
{"mi": "mate", "gr": "noun", "en": ["death", "sickness, illness, disease", "misfortune, calamity, defect", "desire, need, want"]}
{"mi": "mate", "gr": "verb", "en": ["to be dead, deceased, killed", "to be sick, ill, unwell, diseased", "to be defeated, conquered, beaten, overcome", "to be in want of, deeply in love"]}
{"mi": "ika", "gr": "noun", "en": ["fish, marine animal, aquatic animal - any creature that swims in fresh or salt water including marine mammals such as whales", "slain warrior, victim", "prized possession"]}
{"mi": "ika", "gr": "noun", "en": ["cluster, band, troop, group, company, heap"]}
{"mi": "tau", "gr": "noun", "en": ["year (time it takes for the Earth to complete one revolution of the Sun)", "year (time it takes for any planetary body to make one revolution around another body)", "year (a period between set dates that mark a year)", "year (scheduled part of a calendar year spent in a specific activity)", "year (Julian year)", "year (level or grade at school or college)"]}
{"mi": "tau", "gr": "verb", "en": ["to settle"]}
{"mi": "tau", "gr": "noun", "en": ["knowledge"]}
{"mi": "tau", "gr": "verb", "en": ["to know"]}
{"mi": "motu", "gr": "noun", "en": ["cut, wound", "island", "clump of trees", "ship", "land", "country, nation"]}
{"mi": "motu", "gr": "verb", "en": ["to sever, cut, cut off, set free, separate", "to be separated, moved to a distance - especially in the phrase motu ki te ara", "to be set free, escape", "to be cut, severed"]}
{"mi": "tuna", "gr": "noun", "en": ["eel of various species, including longfin eels (Anguilla dieffenbachii) and shortfin eels (Anguilla australis)"]}
{"mi": "tea", "gr": "adj", "en": ["white", "light-coloured", "clear, transparent"]}
{"mi": "papa", "gr": "noun", "en": ["board, plank", "chart", "slab", "floor", "box, chest", "victim, sacrifice", "buttock, flank"]}
{"mi": "awe", "gr": "noun", "en": ["soot", "white feather", "power, influence"]}
{"mi": "pare", "gr": "noun", "en": ["headband, wreath"]}
{"mi": "pare", "gr": "verb", "en": ["to ward off, to fend"]}
{"mi": "pare", "gr": "noun", "en": ["defence, protection"]}
{"mi": "more", "gr": "noun", "en": ["taproot"]}
{"mi": "Aotearoa", "gr": "name", "en": ["New Zealand (a country and archipelago of Oceania, to the east of Australia)", "The national anthem of New Zealand, God Defend New Zealand", "North Island (of New Zealand)"]}
{"mi": "mano", "gr": "num", "en": ["thousand"]}
{"mi": "mano", "gr": "noun", "en": ["multitude, host (of a very large amount)"]}
{"mi": "mano", "gr": "noun", "en": ["interior, heart, core"]}
{"mi": "mano", "gr": "noun", "en": ["creed"]}
{"mi": "taikoa", "gr": "adj", "en": ["Of or relating to the established Chinese New Zealand communities of New Zealand, especially their locally developed identity, history, culture, and heritage.", "Of or relating to longstanding Cantonese-descended New Zealand families."]}
{"mi": "taikoa", "gr": "noun", "en": ["A New Zealander belonging to the established Chinese New Zealand communities of New Zealand.", "A New Zealander of longstanding Cantonese descent, especially one belonging to a locally rooted family whose history in New Zealand extends across generations."]}
{"mi": "pou", "gr": "noun", "en": ["post, stake, pillar", "column", "support", "stalwart"]}
{"mi": "pou", "gr": "verb", "en": ["to erect a post", "to prop on (or elevate with) posts or pillars", "to establish", "to appoint"]}
{"mi": "poke", "gr": "adj", "en": ["grimy"]}
{"mi": "pea", "gr": "noun", "en": ["bear"]}
{"mi": "hai", "gr": "noun", "en": ["ace"]}
{"mi": "nō", "gr": "prep", "en": ["of, from", "at, in, on; used for time comments in the past", "because of, on account of, owing to"]}
{"mi": "Māori", "gr": "name", "en": ["the Māori culture or ethnicity", "a member of the Māori culture or ethnicity, a Māori person"]}
{"mi": "manu", "gr": "noun", "en": ["bird (animal)", "kite", "a designated territory for muttonbirding.", "a person held in high esteem"]}
{"mi": "pera", "gr": "noun", "en": ["blubber"]}
{"mi": "pera", "gr": "noun", "en": ["pillow"]}
{"mi": "nei", "gr": "particle", "en": ["; marks spatial or temporal nearness to event in discourse"]}
{"mi": "raro", "gr": "noun", "en": ["the underworld", "bottom", "north"]}
{"mi": "raro", "gr": "prep", "en": ["below", "under"]}
{"mi": "apa", "gr": "verb", "en": ["to heap; layer; stack"]}
{"mi": "apa", "gr": "noun", "en": ["layer; level"]}
{"mi": "apa", "gr": "noun", "en": ["servant; slave"]}
{"mi": "apa", "gr": "noun", "en": ["spiritual beings; ancestral spirits"]}
{"mi": "muka", "gr": "noun", "en": ["prepared fibre of harakeke"]}
{"mi": "kamu", "gr": "noun", "en": ["Hawai'i birdcatching sedge (Carex uncinata)"]}
{"mi": "meme", "gr": "verb", "en": ["to murmur", "to mutter, to grumble"]}
{"mi": "ane", "gr": "noun", "en": ["termite"]}
{"mi": "ane", "gr": "verb", "en": ["to decay, to destroy"]}
{"mi": "ono", "gr": "num", "en": ["six"]}
{"mi": "oni", "gr": "verb", "en": ["to wriggle", "to move, shift or slip from a previous position", "to jerk", "to thrust forward", "to thrust one's hips in a sexually suggestive way", "to make love, to copulate, to bed someone"]}
{"mi": "kura", "gr": "adj", "en": ["red"]}
{"mi": "kura", "gr": "noun", "en": ["school, an educational institution providing primary and secondary education."]}
{"mi": "kura", "gr": "noun", "en": ["liquid container, tank"]}
{"mi": "ani", "gr": "adj", "en": ["echoing, resounding (i.e. bounces sound waves)"]}
{"mi": "ua", "gr": "noun", "en": ["rain (condensed water from a cloud)"]}
{"mi": "ua", "gr": "verb", "en": ["to rain"]}
{"mi": "ua", "gr": "noun", "en": ["vein (blood vessel)"]}
{"mi": "hoe", "gr": "noun", "en": ["oar", "paddle"]}
{"mi": "hoe", "gr": "verb", "en": ["to row, to paddle", "to push away with one's hand", "to refuse, to reject"]}
{"mi": "inu", "gr": "noun", "en": ["liquid, drink"]}
{"mi": "inu", "gr": "verb", "en": ["to drink"]}
{"mi": "toki", "gr": "noun", "en": ["axe"]}
{"mi": "nama", "gr": "noun", "en": ["number, numeral", "bill, invoice"]}
{"mi": "nama", "gr": "verb", "en": ["to owe, to be in debt", "to borrow, to obtain on credit", "to lend, to give credit"]}
{"mi": "io", "gr": "noun", "en": ["sinew; tendon", "muscle", "vein", "strand of rope", "lock of hair", "warp, lengthwise weaving threads"]}
{"mi": "ira", "gr": "noun", "en": ["dot, freckle, speck, mole", "particle", "shine, glimmer"]}
{"mi": "ira", "gr": "noun", "en": ["life principle, gene."]}
{"mi": "ako", "gr": "verb", "en": ["to learn, to study"]}
{"mi": "puka", "gr": "noun", "en": ["cabbage", "Meryta sinclairii", "Griselinia lucida"]}
{"mi": "kea", "gr": "noun", "en": ["snot", "the kea (Nestor notabilis)"]}
{"mi": "kai", "gr": "verb", "en": ["to eat (to consume food)"]}
{"mi": "kai", "gr": "noun", "en": ["food"]}
{"mi": "wai", "gr": "noun", "en": ["water (clear liquid H₂O)", "liquid", "juice of plants from fruits etc.", "beverage from such liquids"]}
{"mi": "wai", "gr": "pron", "en": ["who?"]}
{"mi": "poro", "gr": "verb", "en": ["to break, to cut off", "to amputate, to behead", "to shorten, to abbreviate", "to finish"]}
{"mi": "poro", "gr": "noun", "en": ["butt or end of a rod, stick etc", "block, slab (from cutting elongated object)"]}
{"mi": "poro", "gr": "adj", "en": ["broken off"]}
{"mi": "poro", "gr": "noun", "en": ["anything with a rounded or curvy surface", "ball"]}
{"mi": "poro", "gr": "noun", "en": ["any kind of Solanum plant"]}
{"mi": "ko", "gr": "particle", "en": ["Placed at the beginning of nominative phrases to signify that they are declarative"]}
{"mi": "hono", "gr": "verb", "en": ["add", "join"]}
{"mi": "puke", "gr": "noun", "en": ["hill"]}
{"mi": "-a", "gr": "suffix", "en": ["passive ending (used mainly for verbs with one or two vowels)"]}
{"mi": "tio", "gr": "noun", "en": ["ice", "rock oyster (Saccostrea spp.)", "rough tree fern (Alsophila australis)"]}
{"mi": "tia", "gr": "noun", "en": ["abdomen, stomach", "umbilical cord"]}
{"mi": "tia", "gr": "noun", "en": ["deer"]}
{"mi": "tia", "gr": "noun", "en": ["steering"]}
{"mi": "tia", "gr": "verb", "en": ["to steer"]}
{"mi": "kite", "gr": "verb", "en": ["to see", "to find, to perceive", "to discover", "to recognize, to detect"]}
{"mi": "kite", "gr": "noun", "en": ["sight", "perception", "divination"]}
{"mi": "lima", "gr": "num", "en": ["obsolete spelling of rima"]}
{"mi": "hope", "gr": "noun", "en": ["waist", "hip (ringa hope)"]}
{"mi": "pine", "gr": "noun", "en": ["pin, tack, brooch"]}
{"mi": "pere", "gr": "noun", "en": ["karapapa (Alseuosmia macrophylla)", "Alseuosmia banksii var. linariifolia"]}
{"mi": "pere", "gr": "verb", "en": ["to flick, to yank"]}
{"mi": "pere", "gr": "noun", "en": ["dart", "arrow", "an adze-shaped wooden hoe", "vector"]}
{"mi": "pere", "gr": "noun", "en": ["riddle"]}
{"mi": "pere", "gr": "noun", "en": ["bell"]}
{"mi": "pere", "gr": "verb", "en": ["to ring (a bell), to toll"]}
{"mi": "toke", "gr": "noun", "en": ["cold"]}
{"mi": "toke", "gr": "noun", "en": ["worm"]}
{"mi": "moa", "gr": "noun", "en": ["moa (†Dinornis)"]}
{"mi": "-na", "gr": "suffix", "en": ["Used in contractions with particles of possession of third person pronouns.", "a passive ending"]}
{"mi": "-u", "gr": "suffix", "en": ["Used in contractions with particles of possession to mean you"]}
{"mi": "eke", "gr": "verb", "en": ["to climb, to ascend, to rise", "to mount, to ride on", "to embark", "to surf", "to skate, to skateboard", "to raft", "to place something on", "to achieve, to attain"]}
{"mi": "eke", "gr": "noun", "en": ["embarking, boarding", "surfing", "rafting, rafter"]}
{"mi": "nana", "gr": "intj", "en": ["lo, look, see, behold (imperative)."]}
{"mi": "nana", "gr": "noun", "en": ["eyebrow"]}
{"mi": "Hera", "gr": "name", "en": ["a female given name, equivalent to English Sarah"]}
{"mi": "te reo", "gr": "name", "en": ["The Māori language.", "Used other than figuratively or idiomatically: see te, reo."]}
{"mi": "matira", "gr": "verb", "en": ["To fish (with a rod)"]}
{"mi": "matira", "gr": "adj", "en": ["lookout"]}
{"mi": "matira", "gr": "noun", "en": ["fishing rod", "lookout"]}
{"mi": "hongi", "gr": "noun", "en": ["The Maori greeting of touching noses."]}
{"mi": "hongi", "gr": "verb", "en": ["To perform the Maori greeting of touching noses."]}
{"mi": "whare", "gr": "noun", "en": ["house", "any building", "people in a house", "suit (cards)"]}
{"mi": "amo", "gr": "verb", "en": ["to charge, to attack"]}
{"mi": "amo", "gr": "verb", "en": ["to carry something on the shoulder (on a litter, etc)", "to present (of an offering)"]}
{"mi": "amo", "gr": "noun", "en": ["litter, bier, stretcher", "front support of a marae's bargeboard (hihi, mahihi or maihi)"]}
{"mi": "ana", "gr": "det", "en": ["his, her of more than one thing"]}
{"mi": "ana", "gr": "noun", "en": ["cave"]}
{"mi": "hue", "gr": "noun", "en": ["bottle gourd, Lagenaria siceraria", "any container using the shell of this fruit, calabash"]}
{"mi": "poi", "gr": "noun", "en": ["lump of dirt, clump of hair etc", "ball, sphere", "poi (tethered weights used in a poi performance)", "a poi performance or the accompanying music"]}
{"mi": "poi", "gr": "verb", "en": ["to make into balls, to knead"]}
{"mi": "poi", "gr": "verb", "en": ["to toss up", "to swing or twirl"]}
{"mi": "tapa", "gr": "verb", "en": ["to cut, to chop", "to reap, to harvest (of crops like wheat)"]}
{"mi": "tapa", "gr": "adj", "en": ["split"]}
{"mi": "tapa", "gr": "noun", "en": ["rim, edge, boundary", "labia"]}
{"mi": "tapa", "gr": "verb", "en": ["to call or name someone", "to command", "to recite, to incantate"]}
{"mi": "hake", "gr": "verb", "en": ["to be hunched, crooked, bent"]}
{"mi": "mai", "gr": "adv", "en": ["hither", "to, from", "since"]}
{"mi": "pipi", "gr": "noun", "en": ["The edible saltwater clam Paphies australis, of the family Mesodesmatidae, endemic to New Zealand."]}
{"mi": "maki", "gr": "verb", "en": ["to afflict (of an illness)"]}
{"mi": "maki", "gr": "noun", "en": ["sick person", "sore (injured, infected, inflamed, or diseased patch of skin)"]}
{"mi": "maki", "gr": "adj", "en": ["sick, ill, invalid"]}
{"mi": "maki", "gr": "noun", "en": ["ape", "monkey"]}
{"mi": "mato", "gr": "noun", "en": ["deep swamp, deep valley"]}
{"mi": "tai", "gr": "noun", "en": ["nearshore waters", "seawards area including the coast", "tide"]}
{"mi": "aka", "gr": "noun", "en": ["root (of plant)"]}
{"mi": "rahi", "gr": "verb", "en": ["to be big, many, plentiful, numerous", "big, large"]}
{"mi": "rahi", "gr": "noun", "en": ["size, greatness", "importance, (important person, important people)"]}
{"mi": "waka", "gr": "noun", "en": ["particular large canoes sometimes equipped with sails as continuous across Southeast Asia to Polynesia", "boat, canoe", "vehicle or any mode of transport", "spirit medium"]}
{"mi": "ki", "gr": "particle", "en": ["to, toward."]}
{"mi": "hou", "gr": "verb", "en": ["to bind or lash together"]}
{"mi": "hou", "gr": "adj", "en": ["alternative form of hōu (“new”)"]}
{"mi": "hou", "gr": "verb", "en": ["to move or force downwards", "to strike down, to peck etc"]}
{"mi": "maka", "gr": "verb", "en": ["throw, fling, cast, pass (with the hands)", "place, put, put in"]}
{"mi": "maka", "gr": "noun", "en": ["fish hook"]}
{"mi": "maka", "gr": "noun", "en": ["mug"]}
{"mi": "pito", "gr": "noun", "en": ["navel", "end, extremity", "pole"]}
{"mi": "hauwai", "gr": "noun", "en": ["hydrogen"]}
{"mi": "ataata", "gr": "noun", "en": ["shadow, image", "video"]}
{"mi": "muri", "gr": "adv", "en": ["behind, rear", "after", "afterwards, later"]}
{"mi": "ora", "gr": "verb", "en": ["to exist", "to be alive, well, safe, cured, recovered, healthy", "to survive"]}
{"mi": "ora", "gr": "noun", "en": ["life", "existence"]}
{"mi": "akaaka", "gr": "noun", "en": ["fibrous vines or roots", "nerve", "state of turmoil"]}
{"mi": "topa", "gr": "verb", "en": ["to soar, to fly high", "to swoop, to dart, to dive (of a flying bird)"]}
{"mi": "akiri", "gr": "noun", "en": ["rejection, disposal, discarding"]}
{"mi": "akiri", "gr": "verb", "en": ["to discard, reject"]}
{"mi": "tiki", "gr": "noun", "en": ["figurine, carved figure"]}
{"mi": "tiki", "gr": "verb", "en": ["to fetch, to get"]}
{"mi": "tiki", "gr": "verb", "en": ["to fail"]}
{"mi": "rai", "gr": "noun", "en": ["rye"]}
{"mi": "mina", "gr": "noun", "en": ["desire; wish", "aspiration", "longing", "appetite"]}
{"mi": "mina", "gr": "verb", "en": ["to desire", "to feel an inclination", "to wish", "to have a craving for"]}
{"mi": "toi", "gr": "noun", "en": ["tip, point", "finger"]}
{"mi": "toi", "gr": "noun", "en": ["knowledge, art"]}
{"mi": "hemo", "gr": "verb", "en": ["to die"]}
{"mi": "haka", "gr": "noun", "en": ["A war dance; a haka."]}
{"mi": "mea", "gr": "noun", "en": ["thing", "a so-and-so (something, someone, or a place the speaker does not know)"]}
{"mi": "mea", "gr": "adj", "en": ["red, reddish"]}
{"mi": "mea", "gr": "noun", "en": ["mayor"]}
{"mi": "oro", "gr": "noun", "en": ["sound", "echo", "rumble", "note"]}
{"mi": "oro", "gr": "verb", "en": ["to resound, to echo"]}
{"mi": "oro", "gr": "verb", "en": ["to sharpen, to grind"]}
{"mi": "roto", "gr": "noun", "en": ["interior", "lake"]}
{"mi": "roto", "gr": "prep", "en": ["in, within"]}
{"mi": "rua", "gr": "num", "en": ["two"]}
{"mi": "rua", "gr": "noun", "en": ["pit", "cavity"]}
{"mi": "haha", "gr": "verb", "en": ["look for"]}
{"mi": "tiara", "gr": "noun", "en": ["vagabond"]}
{"mi": "popo", "gr": "noun", "en": ["anything rotten, something decayed", "rottenness, decay"]}
{"mi": "popo", "gr": "verb", "en": ["to be rotten, decayed, worm-eaten, decomposed"]}
{"mi": "ware", "gr": "adj", "en": ["distracted", "careless", "ignorant"]}
{"mi": "ware", "gr": "noun", "en": ["excretion, exudation", "saliva", "spume, foam of seawater"]}
{"mi": "ware", "gr": "adj", "en": ["viscous, gummy"]}
{"mi": "angina", "gr": "noun", "en": ["death"]}
{"mi": "ka", "gr": "particle", "en": ["Marks an event as occurring at some time or as existing", "when; used before a verb to indicate the start of an action or state", "Marks a verb as being in future tense", "Used when counting numbers", "Used in commands with taua and tātou", "now (for the first time); when used after kātahi anō"]}
{"mi": "pene", "gr": "noun", "en": ["pen", "pencil"]}
{"mi": "ama", "gr": "noun", "en": ["outrigger (of a canoe)", "bargeboard support"]}
{"mi": "mata", "gr": "noun", "en": ["eye (organ of sight)", "edge, point, tip", "face", "surface", "headland", "mesh (of a net)"]}
{"mi": "mata", "gr": "adj", "en": ["raw (uncooked)"]}
{"mi": "koko", "gr": "noun", "en": ["scoop, ladle", "shovel", "spoon"]}
{"mi": "koko", "gr": "verb", "en": ["to ladle, to scoop up", "to shovel"]}
{"mi": "tomo", "gr": "verb", "en": ["to enter"]}
{"mi": "kakau", "gr": "verb", "en": ["to swim"]}
{"mi": "kakau", "gr": "noun", "en": ["stalk (of a plant)", "handle (of a tool)"]}
{"mi": "tuku", "gr": "verb", "en": ["to slacken, to let go", "to release", "to permit, allow", "to give up", "to present, to offer", "to send", "to post"]}
{"mi": "tuku", "gr": "noun", "en": ["offering", "presentation, submission"]}
{"mi": "kau", "gr": "verb", "en": ["tree; wood", "stick"]}
{"mi": "kau", "gr": "verb", "en": ["to swim", "to wade"]}
{"mi": "kau", "gr": "noun", "en": ["a cow"]}
{"mi": "tangi", "gr": "noun", "en": ["weeping, mourning, lament", "sound", "pitch", "intonation"]}
{"mi": "tangi", "gr": "verb", "en": ["to cry (to weep)", "to sing, to make a sound"]}
{"mi": "a", "gr": "particle", "en": ["of", "used before place names and location words when they act as subject of a phrase"]}
{"mi": "a", "gr": "intj", "en": ["well then"]}
{"mi": "Wiki", "gr": "name", "en": ["a female given name, short for Wikitoria"]}
{"mi": "Mane", "gr": "noun", "en": ["Monday"]}
{"mi": "Manu", "gr": "name", "en": ["a male given name"]}
{"mi": "Meri", "gr": "name", "en": ["Mary (biblical)", "a female given name, equivalent to English Mary"]}
{"mi": "Ra", "gr": "name", "en": ["Ra (Egyptian god of the Sun)"]}
{"mi": "tonga", "gr": "noun", "en": ["south"]}
{"mi": "kina", "gr": "noun", "en": ["sea urchin"]}
{"mi": "māori", "gr": "adj", "en": ["normal, usual, natural, common, ordinary", "native, indigenous, fresh (of water), belonging to Aotearoa/New Zealand, clear, intelligible", "freely, without restraint, without ceremony, without object, unannounced"]}
{"mi": "māori", "gr": "noun", "en": ["aboriginal inhabitant, indigenous person, native (especially of the Pacific islands)"]}
{"mi": "paki", "gr": "verb", "en": ["to hit, to smack", "to slap, to spank", "to clap", "to print, to publish"]}
{"mi": "paki", "gr": "noun", "en": ["print", "story, tale, yarn"]}
{"mi": "oki", "gr": "noun", "en": ["rest"]}
{"mi": "hei", "gr": "particle", "en": ["Future locative particle"]}
{"mi": "hei", "gr": "noun", "en": ["flower garland, lei"]}
{"mi": "reka", "gr": "adj", "en": ["nice, pleasant", "sweet (of taste)", "tasty"]}
{"mi": "reka", "gr": "noun", "en": ["sweetness"]}
{"mi": "oma", "gr": "verb", "en": ["run, race, flee, escape, move quickly, run away"]}
{"mi": "tangata māori", "gr": "noun", "en": ["human being (as opposed to supernatural being)"]}
{"mi": "wai māori", "gr": "noun", "en": ["fresh water"]}
{"mi": "tangata", "gr": "noun", "en": ["human being, person, man"]}
{"mi": "tāngata", "gr": "noun", "en": ["plural of tangata; people; humankind"]}
{"mi": "tangata whenua", "gr": "noun", "en": ["indigenous people", "hosts"]}
{"mi": "whenua", "gr": "noun", "en": ["land", "country", "state", "ground", "placenta, afterbirth"]}
{"mi": "reo", "gr": "noun", "en": ["voice", "speech, utterance", "language"]}
{"mi": "ahi", "gr": "noun", "en": ["fire (oxidation reaction)"]}
{"mi": "kia", "gr": "particle", "en": ["when; until (used for a future time)", "to; that (indicates a purpose, wish or effect) (used if second verb is passive or stative, or if the subject of the subordinate clause is different to the main clause)", "be, may (there be) (indicates desirability)", "specifies an amount", "not yet", "so that", "so that ... will not", "shouldn't"]}
{"mi": "ura", "gr": "noun", "en": ["krill (small marine crustacean)", "whalefeed, Munida gregaria", "shrimp (decapod crustacean)"]}
{"mi": "ura", "gr": "verb", "en": ["to glow, to be glowing"]}
{"mi": "utu", "gr": "noun", "en": ["pay; payment; salary", "revenge; payback"]}
{"mi": "utu", "gr": "verb", "en": ["to pay", "to reply; to answer"]}
{"mi": "repo", "gr": "noun", "en": ["swamp"]}
{"mi": "kōwhai", "gr": "noun", "en": ["Any of several small woody legume trees in the genus Sophora native to New Zealand that have yellow flowers. The national flower of New Zealand.", "yellow"]}
{"mi": "hau", "gr": "noun", "en": ["essence", "ceremonial offering of food to an atua", "a present given in return for another gift", "wind, breeze, breath", "air", "excess", "external angle, corner, obtuse angle"]}
{"mi": "hau", "gr": "verb", "en": ["to be heard", "to spread news", "to exceed"]}
{"mi": "hau", "gr": "adj", "en": ["famous"]}
{"mi": "ara", "gr": "noun", "en": ["path (a trail for the use of, or worn by, pedestrians)", "path (a course taken)", "path (a metaphorical course)", "path (a method or direction of proceeding)", "road (a way for travel)", "road (a path in life)", "street (paved part of road in a village or a town)", "track (beaten path)", "track (course; way)", "track (path or course laid out for a race or exercise)", "track (permanent way; the rails)", "way (wide path)"]}
{"mi": "ara", "gr": "verb", "en": ["to rise up, awake, arise, revive"]}
{"mi": "aro", "gr": "verb", "en": ["to turn toward something or someone", "to desire", "to incline towards something, to favour"]}
{"mi": "aro", "gr": "noun", "en": ["front (facing side)", "front (weather)", "desire", "inclination", "heart, seat of feelings"]}
{"mi": "puku", "gr": "noun", "en": ["swelling, lump", "stomach, belly"]}
{"mi": "puku", "gr": "adv", "en": ["very"]}
{"mi": "puku", "gr": "verb", "en": ["to swell", "to dilate"]}
{"mi": "hui", "gr": "verb", "en": ["to gather, congregate, assemble, meet"]}
{"mi": "hui", "gr": "noun", "en": ["gathering, meeting, assembly, seminar, conference"]}
{"mi": "tae", "gr": "noun", "en": ["excrement, filth", "sap or gum excreted from plants", "refuse, waste, rubbish"]}
{"mi": "tae", "gr": "noun", "en": ["stain", "dye, pigment", "colour"]}
{"mi": "tae", "gr": "verb", "en": ["to arrive at or to somewhere", "to extend towards, to reach", "to proceed"]}
{"mi": "koru", "gr": "noun", "en": ["coil, loop"]}
{"mi": "koru", "gr": "adj", "en": ["coiled, looped"]}
{"mi": "kato", "gr": "noun", "en": ["flow", "current"]}
{"mi": "kato", "gr": "adj", "en": ["flowing (of the tide)", "flooding (of the tide)"]}
{"mi": "puta", "gr": "verb", "en": ["to come out or come forth from some location", "to emerge, to appear into sight", "to rise (of celestial bodies)", "to pass through and out", "to graduate", "to run off; to escape", "to be born (of man)"]}
{"mi": "puta", "gr": "noun", "en": ["anus", "vagina", "foramen"]}
{"mi": "unu", "gr": "noun", "en": ["withdrawal, extraction"]}
{"mi": "unu", "gr": "verb", "en": ["pull out, withdraw, draw out, extract", "to pull off, put off, take off (clothes, etc.)", "to exempt, discharge, exclude", "to surrender"]}
{"mi": "unu", "gr": "verb", "en": ["to drink"]}
{"mi": "hiki", "gr": "verb", "en": ["to carry (in the arms)"]}
{"mi": "mangu", "gr": "adj", "en": ["black"]}
{"mi": "koro", "gr": "noun", "en": ["grandfather", "term of address to an elderly man"]}
{"mi": "koro", "gr": "noun", "en": ["cove, inlet", "noose", "white rātā (Metrosideros perforata)"]}
{"mi": "koro", "gr": "verb", "en": ["to desire"]}
{"mi": "taka", "gr": "verb", "en": ["to turn or wind round, to pivot", "to encircle", "to range, to roam", "to fall off"]}
{"mi": "horo", "gr": "verb", "en": ["to run", "to flee, to escape"]}
{"mi": "horo", "gr": "adj", "en": ["fast, quick, swift"]}
{"mi": "horo", "gr": "noun", "en": ["speed"]}
{"mi": "tiri", "gr": "verb", "en": ["to cast, to scatter", "to throw or place one by one, to stack in a row", "to plant", "to share"]}
{"mi": "tiri", "gr": "noun", "en": ["plant, crop"]}
{"mi": "Etiopia", "gr": "name", "en": ["Ethiopia (a country in East Africa)"]}
{"mi": "koi", "gr": "adj", "en": ["sharp"]}
{"mi": "koi", "gr": "noun", "en": ["point", "spike"]}
{"mi": "kakakaka", "gr": "verb", "en": ["to stutter, stammer"]}
{"mi": "marama", "gr": "noun", "en": ["moon", "month"]}
{"mi": "ato", "gr": "noun", "en": ["thatch, roof"]}
{"mi": "ato", "gr": "verb", "en": ["to thatch", "to fence in, enclose"]}
{"mi": "awa", "gr": "noun", "en": ["river, creek, stream", "groove, fluting", "channel", "landing for canoes"]}
{"mi": "tiro", "gr": "verb", "en": ["to observe, to view", "to inspect"]}
{"mi": "tiro", "gr": "noun", "en": ["viewing, view"]}
{"mi": "iro", "gr": "noun", "en": ["maggot"]}
{"mi": "iwa", "gr": "num", "en": ["nine"]}
{"mi": "koe", "gr": "pron", "en": ["you (singular)"]}
{"mi": "koe", "gr": "verb", "en": ["to squeak, to scream, to squawk, to cry"]}
{"mi": "ihu", "gr": "noun", "en": ["nose (organ of the face)", "prow of a boat"]}
{"mi": "ari", "gr": "verb", "en": ["clear, evident, visible"]}
{"mi": "kore", "gr": "adj", "en": ["without (not having)"]}
{"mi": "kore", "gr": "num", "en": ["zero"]}
{"mi": "uta", "gr": "noun", "en": ["interior (the inside regions of a country or island)", "land (from a sea or water perspective)", "the shore"]}
{"mi": "uta", "gr": "adj", "en": ["inland (from a coastal perspective)", "ashore"]}
{"mi": "uta", "gr": "noun", "en": ["load", "contribution", "freight, cargo", "import; export"]}
{"mi": "uta", "gr": "verb", "en": ["to load on, put on (passengers or cargo on vehicles)", "to contribute"]}
{"mi": "ā", "gr": "noun", "en": ["collarbone"]}
{"mi": "ā", "gr": "verb", "en": ["to drive (something), such as cattle or other livestock", "to urge or compel (something) to move"]}
{"mi": "ā", "gr": "intj", "en": ["yeah, yes"]}
{"mi": "tama", "gr": "noun", "en": ["child regardless of sex", "any male child i.e. son, nephew"]}
{"mi": "ata", "gr": "noun", "en": ["form, shape, image", "reflection", "shadow"]}
{"mi": "ata", "gr": "noun", "en": ["morning"]}
{"mi": "tō", "gr": "noun", "en": ["plant stem/stalk – especially of non-woody monocots such as raupō (Typha orientalis), maize etc.", "finger", "sugar cane"]}
{"mi": "tō", "gr": "noun", "en": ["stove"]}
{"mi": "tō", "gr": "verb", "en": ["to pull", "to open or shut", "to haul, i.e. to move something heavy by pulling along a surface", "to hold down and move something with a cursor across an interface"]}
{"mi": "tō", "gr": "noun", "en": ["dragging", "portage"]}
{"mi": "tō", "gr": "det", "en": ["your (singular)", "belonging to (combines with dual and plural pronouns)", "Denotes ownership of.", "that of, the one of"]}
{"mi": "tō", "gr": "verb", "en": ["to be calm, peaceful, tranquil", "to set (of an astronomical body)"]}
{"mi": "tō", "gr": "verb", "en": ["to vibrate, tingle"]}
{"mi": "taro", "gr": "noun", "en": ["taro", "bread"]}
{"mi": "piti", "gr": "verb", "en": ["to cling, to attach", "to join or pair together"]}
{"mi": "rama", "gr": "noun", "en": ["torch", "light"]}
{"mi": "rama", "gr": "noun", "en": ["rum"]}
{"mi": "tuatara", "gr": "noun", "en": ["tuatara"]}
{"mi": "uma", "gr": "noun", "en": ["chest"]}
{"mi": "ikura", "gr": "noun", "en": ["hemorrhage", "menstruation"]}
{"mi": "tara", "gr": "noun", "en": ["thorn of a plant", "tooth of a comb, tine of a fork", "spine of a fish, barb of a stingray", "skewer", "peak of a mountain"]}
{"mi": "tara", "gr": "verb", "en": ["to shine rays, to irradiate", "to disturb, to ruffle"]}
{"mi": "tara", "gr": "verb", "en": ["to gossip"]}
{"mi": "tara", "gr": "noun", "en": ["gossip", "scandal"]}
{"mi": "mauri", "gr": "noun", "en": ["life", "life force or principle; metaphorical soul; source of life", "heart, seat of emotions"]}
{"mi": "tua", "gr": "noun", "en": ["back, rear of the body"]}
{"mi": "tua", "gr": "adj", "en": ["further, beyond"]}
{"mi": "tua", "gr": "adv", "en": ["this side, here"]}
{"mi": "tua", "gr": "verb", "en": ["to fell, chop down a tree"]}
{"mi": "pari", "gr": "noun", "en": ["cliff"]}
{"mi": "hore", "gr": "noun", "en": ["scrofula"]}
{"mi": "moto", "gr": "verb", "en": ["to strike with the fist, to punch, to box"]}
{"mi": "moto", "gr": "noun", "en": ["hit or blow with the fist, punch"]}
{"mi": "iroiro", "gr": "noun", "en": ["alternative form of iro"]}
{"mi": "marae", "gr": "noun", "en": ["The courtyard of a wharenui or meeting-house and the buildings around it."]}
{"mi": "toko", "gr": "noun", "en": ["pole", "sprit of a canoe's sail", "beam or ray of light"]}
{"mi": "toko", "gr": "verb", "en": ["to prop up", "to push away", "to separate, divorce"]}
{"mi": "tote", "gr": "verb", "en": ["to salt, add salt"]}
{"mi": "tote", "gr": "noun", "en": ["salt"]}
{"mi": "tote", "gr": "adj", "en": ["salted"]}
{"mi": "oka", "gr": "verb", "en": ["to stab, to pierce", "to prick", "to vaccinate"]}
{"mi": "oka", "gr": "noun", "en": ["awl, tool used to bore holes in wood or leather", "a kind of dagger"]}
{"mi": "oka", "gr": "noun", "en": ["rafter, esp. that supports the roof of kumara storehouses"]}
{"mi": "oka", "gr": "noun", "en": ["yam"]}
{"mi": "uru", "gr": "verb", "en": ["to enter, go in", "to possess", "to enlist, enrol, join, be included"]}
{"mi": "uru", "gr": "noun", "en": ["head (in the singular)", "chief, leader", "top, upper end", "point (of a weapon, etc.)", "hair (of the head, in the plural)"]}
{"mi": "uru", "gr": "noun", "en": ["west"]}
{"mi": "ē", "gr": "intj", "en": ["Used to conclude a line or the end of a traditional waiata or karakia with no apparent meaning."]}
{"mi": "runa", "gr": "verb", "en": ["to tie up, to draw together", "to secure", "to keep close, to gather", "to assemble"]}
{"mi": "ake", "gr": "particle", "en": ["up, upward"]}
{"mi": "ake", "gr": "noun", "en": ["broadleaf hopbush (Dodonaea viscosa)"]}
{"mi": "hia", "gr": "det", "en": ["many", "several"]}
{"mi": "iwi", "gr": "noun", "en": ["bone", "strength", "extended kinship group, tribe, nation, people, nationality, race (often refers to a large group of people descended from a common ancestor and associated with a distinct territory)"]}
{"mi": "kurī", "gr": "noun", "en": ["dog", "horse"]}
{"mi": "kurī", "gr": "adj", "en": ["without purpose, unwarranted, pointless"]}
{"mi": "pākehā", "gr": "noun", "en": ["New Zealander of European descent", "New Zealander of non-Māori descent", "foreigner, alien"]}
{"mi": "pākehā", "gr": "verb", "en": ["to become pākehā, to become westernised or influenced by British culture"]}
{"mi": "mihi", "gr": "noun", "en": ["A welcome", "A speech made to welcome somebody"]}
{"mi": "mihi", "gr": "verb", "en": ["to lament for, to grieve", "to welcome, to greet, to acknowledge"]}
{"mi": "tipi", "gr": "verb", "en": ["to slice, to cut into slices", "to pare off, to plane, to smoothen wood"]}
{"mi": "tipi", "gr": "verb", "en": ["to skim or glide along the surface", "to move quickly or smooothly"]}
{"mi": "hapa", "gr": "noun", "en": ["tea (meal)"]}
{"mi": "pani", "gr": "verb", "en": ["to smear, to spread across", "to daub", "to paint", "to apply (of medicine)", "to frost (of cakes)"]}
{"mi": "pani", "gr": "noun", "en": ["paint", "polish"]}
{"mi": "heu", "gr": "verb", "en": ["to separate, to pull apart or asunder", "to clear, to remove"]}
{"mi": "heu", "gr": "noun", "en": ["razor"]}
{"mi": "heu", "gr": "verb", "en": ["to shave"]}
{"mi": "heu", "gr": "adj", "en": ["overgrown"]}
{"mi": "heu", "gr": "noun", "en": ["scrub, undergrowth"]}
{"mi": "-ina", "gr": "suffix", "en": ["passive ending (used for words ending in 'a')"]}
{"mi": "toto", "gr": "noun", "en": ["blood"]}
{"mi": "toto", "gr": "verb", "en": ["to bleed"]}
{"mi": "hara", "gr": "verb", "en": ["to be in violation of a tapu", "to transgress", "to commit a sin", "to violate the law", "to offend"]}
{"mi": "hara", "gr": "noun", "en": ["sin", "foul", "crime, offence, transgression, wrongdoing", "gaffe", "infringement", "fault", "problem"]}
{"mi": "marino", "gr": "adj", "en": ["calm"]}
{"mi": "marino", "gr": "noun", "en": ["fine weather, tranquility"]}
{"mi": "marino", "gr": "verb", "en": ["to be calm or still (usually of the sea)"]}
{"mi": "kuru", "gr": "noun", "en": ["breadfruit"]}
{"mi": "kuru", "gr": "verb", "en": ["to strike with a fist; to pound or thump"]}
{"mi": "kuru", "gr": "noun", "en": ["mallet; fragment; hammer-head stone"]}
{"mi": "tū", "gr": "verb", "en": ["to stand", "to erect", "to establish, to convene", "to remain"]}
{"mi": "tū", "gr": "noun", "en": ["stance, position"]}
{"mi": "rima", "gr": "num", "en": ["five"]}
{"mi": "tapu", "gr": "adj", "en": ["holy, sacred, consecrated", "restricted, prohibited, forbidden"]}
{"mi": "tapu", "gr": "noun", "en": ["taboo, restriction (as a spiritual or supernatural condition)"]}
{"mi": "tapu", "gr": "noun", "en": ["mark or indentation left on a surface"]}
{"mi": "kari", "gr": "verb", "en": ["to dig", "to cleave", "to wound"]}
{"mi": "hari", "gr": "verb", "en": ["to dance"]}
{"mi": "hari", "gr": "noun", "en": ["song, dance", "happiness, elation, joy"]}
{"mi": "hari", "gr": "verb", "en": ["to carry"]}
{"mi": "pia", "gr": "noun", "en": ["beer"]}
{"mi": "tepe", "gr": "verb", "en": ["to congeal, to coagulate"]}
{"mi": "tepe", "gr": "noun", "en": ["clot"]}
{"mi": "tepe", "gr": "adj", "en": ["clumpy, clotted (of milk)"]}
{"mi": "rae", "gr": "noun", "en": ["forehead (part of face above eyebrows)"]}
{"mi": "rae", "gr": "noun", "en": ["promontory, headland"]}
{"mi": "maha", "gr": "noun", "en": ["abundance, bounty, majority"]}
{"mi": "kapa", "gr": "noun", "en": ["team, group", "row, line"]}
{"mi": "kapa", "gr": "noun", "en": ["copper"]}
{"mi": "hanga", "gr": "verb", "en": ["to make; to create", "to build"]}
{"mi": "hanga", "gr": "noun", "en": ["group of people", "the manner in which something is made or built", "construction", "thing; object which has been made; product"]}
{"mi": "ringa", "gr": "noun", "en": ["hand", "arm", "weapon", "handlebar"]}
{"mi": "pai", "gr": "adj", "en": ["good", "excellent", "suitable", "nice", "pleasant"]}
{"mi": "pai", "gr": "noun", "en": ["goodness", "excellence", "suitability"]}
{"mi": "pai", "gr": "verb", "en": ["to like, to approve"]}
{"mi": "aru", "gr": "noun", "en": ["chase", "pursuit"]}
{"mi": "aru", "gr": "verb", "en": ["to chase", "to follow, pursue"]}
{"mi": "kiri", "gr": "noun", "en": ["skin", "peel, bark, rind", "hide, leather", "surface"]}
{"mi": "hamu", "gr": "verb", "en": ["glean"]}
{"mi": "kino", "gr": "adj", "en": ["bad", "gory"]}
{"mi": "kino", "gr": "noun", "en": ["harm", "hate"]}
{"mi": "kino", "gr": "verb", "en": ["to dislike, to hate"]}
{"mi": "kino", "gr": "verb", "en": ["evil, bad", "naughty", "ugly", "untidy", "spoiled, damaged", "defective, faulty"]}
{"mi": "turi", "gr": "adj", "en": ["deaf (not hearing)"]}
{"mi": "turi", "gr": "noun", "en": ["knee"]}
{"mi": "uhi", "gr": "noun", "en": ["yam (Dioscorea)"]}
{"mi": "uhi", "gr": "noun", "en": ["a chisel-like tool used to puncture Maori tattoos (moko)"]}
{"mi": "wahine", "gr": "noun", "en": ["woman"]}
{"mi": "aho", "gr": "noun", "en": ["fishing line; string"]}
{"mi": "hura", "gr": "verb", "en": ["to put or raise a hand up", "to twitch, to shrug"]}
{"mi": "hura", "gr": "verb", "en": ["to open a lid or cover", "to uncover, to expose", "to discover", "to break (of dawn)", "to swell or rise"]}
{"mi": "toa", "gr": "adj", "en": ["brave, courageous."]}
{"mi": "toa", "gr": "noun", "en": ["a warrior.", "bravery, courage", "a male."]}
{"mi": "toa", "gr": "verb", "en": ["to win"]}
{"mi": "toa", "gr": "noun", "en": ["a store or shop."]}
{"mi": "hina", "gr": "adj", "en": ["pale", "grey-haired"]}
{"mi": "hina", "gr": "noun", "en": ["grey hair"]}
{"mi": "tangihanga", "gr": "noun", "en": ["funeral"]}
{"mi": "moe", "gr": "verb", "en": ["to sleep, to nap", "to dream", "to marry", "to die", "to faint"]}
{"mi": "moe", "gr": "noun", "en": ["sleep", "dream"]}
{"mi": "moe", "gr": "adj", "en": ["dormant"]}
{"mi": "niu", "gr": "noun", "en": ["coconut"]}
{"mi": "nui", "gr": "adj", "en": ["big"]}
{"mi": "parai", "gr": "verb", "en": ["to fry"]}
{"mi": "taki", "gr": "verb", "en": ["to tow with a line", "to entice", "to challenge", "to give a speech", "to lead", "to recite", "to rise", "to stick in"]}
{"mi": "taki", "gr": "noun", "en": ["a kākā snare", "beat"]}
{"mi": "taki", "gr": "adv", "en": ["one by one to completion, each and every"]}
{"mi": "mati", "gr": "noun", "en": ["finger, toe"]}
{"mi": "mara", "gr": "adj", "en": ["preserved esp. by prolonged steeping under running water until softened"]}
{"mi": "kapu", "gr": "noun", "en": ["scoop, ladle", "palm of one's hand", "instep of one's foot"]}
{"mi": "kapu", "gr": "verb", "en": ["to ladle, to scoop up"]}
{"mi": "moko", "gr": "noun", "en": ["Polynesian tattoo"]}
{"mi": "moko", "gr": "noun", "en": ["lizard, gecko"]}
{"mi": "tina", "gr": "verb", "en": ["be firm, hard, steadfast", "be constipated"]}
{"mi": "tina", "gr": "noun", "en": ["constipation"]}
{"mi": "tina", "gr": "noun", "en": ["lunch, dinner (midday meal)"]}
{"mi": "tina", "gr": "verb", "en": ["have lunch"]}
{"mi": "namu", "gr": "noun", "en": ["sandfly of the genus Austrosimulium."]}
{"mi": "namu", "gr": "adj", "en": ["blue-green, grue"]}
{"mi": "kutu", "gr": "noun", "en": ["louse (insect)"]}
{"mi": "hiku", "gr": "noun", "en": ["tail", "rear, end", "apex (of a leaf)"]}
{"mi": "tanu", "gr": "verb", "en": ["to plant (trees, seeds etc into the ground)", "to bury", "to smother with something"]}
{"mi": "whitu", "gr": "num", "en": ["seven"]}
{"mi": "toru", "gr": "num", "en": ["three"]}
{"mi": "waru", "gr": "num", "en": ["eight"]}
{"mi": "waru", "gr": "verb", "en": ["to scrape", "to grate", "to shave (of hair)", "to peel"]}
{"mi": "waru", "gr": "noun", "en": ["any scraper", "wood plane"]}
{"mi": "oti", "gr": "adj", "en": ["finished", "completed"]}
{"mi": "roa", "gr": "adj", "en": ["long", "tall", "slow"]}
{"mi": "moana", "gr": "noun", "en": ["ocean, sea"]}
{"mi": "matua", "gr": "noun", "en": ["parent", "father"]}
{"mi": "matua", "gr": "adj", "en": ["adult, grown up", "main, chief, important"]}
{"mi": "atua", "gr": "noun", "en": ["god (deity)"]}
{"mi": "tunu", "gr": "verb", "en": ["to broil, roast, bake, cook"]}
{"mi": "uka", "gr": "adj", "en": ["hard", "firm, solid"]}
{"mi": "rangi", "gr": "noun", "en": ["sky, heaven", "weather", "tune, air, melody"]}
{"mi": "rangi", "gr": "noun", "en": ["daytime, day, period of brightness from morning to afternoon"]}
{"mi": "tahu", "gr": "noun", "en": ["husband, lover", "near relative"]}
{"mi": "tā", "gr": "verb", "en": ["to dump, strike, beat, thump, throw down, tackle", "to apply tattoo", "to carve, cut, etch, fashion", "to print"]}
{"mi": "rango", "gr": "noun", "en": ["fly (insect)", "blowfly"]}
{"mi": "kuku", "gr": "noun", "en": ["pincers, tweezers, any tool or item that nips or pinches", "finger or toe nail, alternative form of matikuku", "attraction"]}
{"mi": "kuku", "gr": "verb", "en": ["to nip, to pinch", "to hold (of one's breath)", "to clench (of one's fist)", "to shut (of one's eyes)", "to draw together and close an opening of something"]}
{"mi": "kuku", "gr": "verb", "en": ["to grate, to scrape – usually part of compound verbs, otherwise an alternative form of kukū"]}
{"mi": "kuku", "gr": "noun", "en": ["any type of mussel"]}
{"mi": "Paraire", "gr": "noun", "en": ["Friday"]}
{"mi": "whiri", "gr": "verb", "en": ["to twist", "to weave", "to spin", "to curl or fold one's hands"]}
{"mi": "whiri", "gr": "verb", "en": ["to choose, to select, to elect", "to pick", "to decide"]}
{"mi": "keri", "gr": "verb", "en": ["to dig (to move hard-packed earth out of the way)"]}
{"mi": "whero", "gr": "noun", "en": ["red (orangish or brownish)", "yellow", "gold (element and metal)"]}
{"mi": "whero", "gr": "adj", "en": ["red", "bright, shining"]}
{"mi": "whero", "gr": "verb", "en": ["to redden"]}
{"mi": "ariki", "gr": "noun", "en": ["paramount chief of a tribe, the most senior by descent of the rangatira (chiefs) of the tribe", "first-born male or female in a family of high rank", "leader"]}
{"mi": "ruaki", "gr": "verb", "en": ["to vomit"]}
{"mi": "huru", "gr": "noun", "en": ["hair of human heads"]}
{"mi": "huru", "gr": "verb", "en": ["to glow", "to rise"]}
{"mi": "haku", "gr": "noun", "en": ["yellowtail amberjack (Seriola lalandi)"]}
{"mi": "whatu", "gr": "noun", "en": ["stone", "hailstone", "pupil (of the eye)", "eye", "kernel (of a fruit)"]}
{"mi": "whatu", "gr": "verb", "en": ["to weave; to knit"]}
{"mi": "mutu", "gr": "verb", "en": ["to cut, to chop", "to amputate", "to cease, to complete, to end, to finish"]}
{"mi": "mutu", "gr": "adv", "en": ["only, exclusively, nothing more, that's it"]}
{"mi": "mutu", "gr": "noun", "en": ["bird trap or snare consisting of a stick with a long perpendicular arm which birds would perch on"]}
{"mi": "rongo", "gr": "verb", "en": ["to hear", "to perceive, to sense, to feel", "to obey, to heed"]}
{"mi": "rongo", "gr": "noun", "en": ["hearing", "any other sense excluding sight", "perception, awareness", "fame", "news"]}
{"mi": "rongo", "gr": "adj", "en": ["perceivable, physical"]}
{"mi": "rongo", "gr": "noun", "en": ["peace"]}
{"mi": "mataku", "gr": "adj", "en": ["afraid"]}
{"mi": "mataku", "gr": "verb", "en": ["to fear (feel fear about (something))"]}
{"mi": "tupu", "gr": "verb", "en": ["to grow, to increase"]}
{"mi": "tupu", "gr": "adj", "en": ["real, own, ancestral"]}
{"mi": "tupu", "gr": "noun", "en": ["seedling, shoot, bud"]}
{"mi": "rau", "gr": "noun", "en": ["leaf", "sheet of paper", "page of a book"]}
{"mi": "rau", "gr": "num", "en": ["hundred"]}
{"mi": "puha", "gr": "noun", "en": ["gill (of fish)", "the sow thistle, also called rareke, or raraki"]}
{"mi": "aroha", "gr": "noun", "en": ["love"]}
{"mi": "kohu", "gr": "noun", "en": ["fog"]}
{"mi": "kohu", "gr": "adj", "en": ["concave, warped, cupped", "bent"]}
{"mi": "kohu", "gr": "verb", "en": ["to cook in a hollow receptacle i.e. pot in an earth pit (hangi)", "an oven"]}
{"mi": "riha", "gr": "noun", "en": ["nit"]}
{"mi": "wheke", "gr": "noun", "en": ["octopus, squid"]}
{"mi": "umu", "gr": "noun", "en": ["oven"]}
{"mi": "tuhi", "gr": "verb", "en": ["to point at"]}
{"mi": "tuhi", "gr": "verb", "en": ["to draw", "to write"]}
{"mi": "tuhi", "gr": "noun", "en": ["pattern, adornment"]}
{"mi": "peka", "gr": "noun", "en": ["bat (the flying mammal)"]}
{"mi": "peka", "gr": "noun", "en": ["branch (of a tree, river)", "a piece of firewood"]}
{"mi": "whata", "gr": "noun", "en": ["shelf"]}
{"mi": "whata", "gr": "verb", "en": ["to shelve something, to put something on a shelf", "to be laid on some surface", "to suspend freely", "to elevate, to support", "to make prominent"]}
{"mi": "ota", "gr": "verb", "en": ["to eat raw"]}
{"mi": "pounamu", "gr": "adj", "en": ["dark green"]}
{"mi": "pounamu", "gr": "noun", "en": ["greenstone, nephrite", "glass bottle"]}
{"mi": "raki", "gr": "noun", "en": ["north", "drought"]}
{"mi": "raki", "gr": "adj", "en": ["dry"]}
{"mi": "kapi", "gr": "verb", "en": ["to close", "to cover, to shut", "to occupy a surface or space"]}
{"mi": "wati", "gr": "noun", "en": ["watch"]}
{"mi": "tari", "gr": "noun", "en": ["plaiting of several strands"]}
{"mi": "tari", "gr": "noun", "en": ["noose (for catching birds)"]}
{"mi": "tari", "gr": "verb", "en": ["to ensnare"]}
{"mi": "tari", "gr": "noun", "en": ["to wait, alternative form of tatari"]}
{"mi": "tari", "gr": "verb", "en": ["to bring"]}
{"mi": "tari", "gr": "noun", "en": ["study, office (room)", "office, department (agency)"]}
{"mi": "tahi", "gr": "num", "en": ["one, single"]}
{"mi": "tahi", "gr": "adv", "en": ["together, as one, in unison", "simultaneously", "altogether"]}
{"mi": "tahi", "gr": "verb", "en": ["to sweep, to clear away"]}
{"mi": "tahi", "gr": "noun", "en": ["sweeping action"]}
{"mi": "pune", "gr": "noun", "en": ["spoon"]}
{"mi": "kei", "gr": "particle", "en": ["at, in (present locative particle)", "have; in possession of", "like; as"]}
{"mi": "rupe", "gr": "noun", "en": ["New Zealand pigeon"]}
{"mi": "honu", "gr": "noun", "en": ["turtle"]}
{"mi": "puna", "gr": "noun", "en": ["spring of water; well; pool"]}
{"mi": "puna", "gr": "verb", "en": ["to well up; to flow"]}
{"mi": "mura", "gr": "verb", "en": ["to burn (of firewood), to blaze", "to glow", "to blush, to redden"]}
{"mi": "mura", "gr": "adj", "en": ["brilliant or bright in colour"]}
{"mi": "mura", "gr": "noun", "en": ["glow", "colour"]}
{"mi": "wera", "gr": "verb", "en": ["to burn", "to be burnt; to be hot"]}
{"mi": "wera", "gr": "noun", "en": ["heat"]}
{"mi": "hama", "gr": "noun", "en": ["hammer", "malleus (hammer ear bone)"]}
{"mi": "hama", "gr": "verb", "en": ["to hammer"]}
{"mi": "huhu", "gr": "noun", "en": ["huhu grub, the larval form of Prionoplus reticularis (a longhorn beetle species of the Cerambycidae family which is the largest endemic beetle found in New Zealand)"]}
{"mi": "ure", "gr": "noun", "en": ["penis"]}
{"mi": "raka", "gr": "verb", "en": ["to step on something"]}
{"mi": "raka", "gr": "noun", "en": ["step, walk, trek"]}
{"mi": "raka", "gr": "noun", "en": ["lock"]}
{"mi": "pota", "gr": "verb", "en": ["to break, to snap"]}
{"mi": "pota", "gr": "adj", "en": ["broken, snapped, chipped into pieces", "few, little"]}
{"mi": "pota", "gr": "noun", "en": ["fragment, chip", "portion", "sample"]}
{"mi": "hako", "gr": "noun", "en": ["monkey", "clown"]}
{"mi": "hako", "gr": "adj", "en": ["ugly"]}
{"mi": "taha", "gr": "noun", "en": ["side, edge", "shore, bank", "part, section"]}
{"mi": "taha", "gr": "verb", "en": ["to pass by"]}
{"mi": "toma", "gr": "noun", "en": ["tomb, mausoleum"]}
{"mi": "hana", "gr": "noun", "en": ["heat, warmth", "radiance, glow, flame"]}
{"mi": "hana", "gr": "verb", "en": ["to shine, glow", "to give out heat"]}
{"mi": "tui", "gr": "verb", "en": ["to thread, to string together", "to pierce with a needle", "to sew"]}
{"mi": "tui", "gr": "noun", "en": ["string, thread"]}
{"mi": "tira", "gr": "noun", "en": ["travelling party, company of travelers", "troupe", "choir", "ray, beam", "mast", "wand used in rituals", "conductor's baton"]}
{"mi": "kati", "gr": "verb", "en": ["to bite, to nip"]}
{"mi": "kati", "gr": "verb", "en": ["to close, shut", "to block up, to obstruct"]}
{"mi": "kati", "gr": "verb", "en": ["to be closed"]}
{"mi": "eka", "gr": "noun", "en": ["acre"]}
{"mi": "eka", "gr": "verb", "en": ["to survey"]}
{"mi": "koura", "gr": "noun", "en": ["gold"]}
{"mi": "koura", "gr": "noun", "en": ["koura (freshwater crayfish of the genus Paranephrops, endemic to New Zealand)"]}
{"mi": "morehu", "gr": "noun", "en": ["Followers of the Ratana Church, remnants of tribes, survivors."]}
{"mi": "kaka", "gr": "noun", "en": ["fibre (in general)", "cloth, clothes, garment", "strand of hair"]}
{"mi": "kaka", "gr": "noun", "en": ["stalk", "lineage", "nose bridge", "hill ridge"]}
{"mi": "mua", "gr": "adv", "en": ["front, forward", "to the future", "former, past, old"]}
{"mi": "puru", "gr": "noun", "en": ["plug", "caulk", "coconut husk"]}
{"mi": "puru", "gr": "verb", "en": ["to plug, to fill or stuff in, to cram"]}
{"mi": "puru", "gr": "adv", "en": ["absolutely, extremely, stuffed"]}
{"mi": "renga", "gr": "adj", "en": ["yellow"]}
{"mi": "renga", "gr": "noun", "en": ["turmeric"]}
{"mi": "piana", "gr": "noun", "en": ["piano"]}
{"mi": "kiore", "gr": "noun", "en": ["rat", "mouse (input device)"]}
{"mi": "pekapeka", "gr": "noun", "en": ["bat (animal) – especially the species Mystacina tuberculata"]}
{"mi": "pekapeka", "gr": "noun", "en": ["toy windmill/pinwheel made from phormium leaves", "starfish", "a snood or gangion in a traditional longline set up"]}
{"mi": "ngārara", "gr": "noun", "en": ["creepy-crawly (insect, reptile, etc.)", "bug, germ"]}
{"mi": "noke", "gr": "noun", "en": ["earthworm"]}
{"mi": "rō", "gr": "noun", "en": ["ant", "mantis, praying mantis; stick insect"]}
{"mi": "whē", "gr": "noun", "en": ["stick insect esp. Acanthoderus horridus", "mantis, praying mantis"]}
{"mi": "mangō", "gr": "noun", "en": ["shark"]}
{"mi": "mangō taniwha", "gr": "noun", "en": ["great white shark"]}
{"mi": "mangō pare", "gr": "noun", "en": ["hammerhead shark, hammerhead"]}
{"mi": "putoko", "gr": "noun", "en": ["slug"]}
{"mi": "pūpū", "gr": "noun", "en": ["bunch, bundle"]}
{"mi": "pūpū", "gr": "verb", "en": ["to bunch, to bundle"]}
{"mi": "pūpū", "gr": "noun", "en": ["snail"]}
{"mi": "pepeke nguturoa", "gr": "noun", "en": ["weevil"]}
{"mi": "tūwhaitara", "gr": "noun", "en": ["giraffe weevil"]}
{"mi": "kuihipere", "gr": "noun", "en": ["gooseberry (fruit and plant)"]}
{"mi": "kawhi", "gr": "noun", "en": ["coffee"]}
{"mi": "tī", "gr": "noun", "en": ["Cordyline australis"]}
{"mi": "tī", "gr": "noun", "en": ["tea (drink)"]}
{"mi": "hā", "gr": "noun", "en": ["breath, breathing, essence, taste.", "sound, tone, tenor, timbre, intonation."]}
{"mi": "hā", "gr": "verb", "en": ["to breathe"]}
{"mi": "hā", "gr": "intj", "en": ["what! oh! hey! (expression of surprise or disapproval)"]}
{"mi": "hae", "gr": "verb", "en": ["to tear, to scratch, to lacerate", "to inflict pain"]}
{"mi": "hae", "gr": "noun", "en": ["scratch, tear, laceration"]}
{"mi": "hae", "gr": "noun", "en": ["envy, jealousy", "dislike"]}
{"mi": "hae", "gr": "verb", "en": ["to envy"]}
{"mi": "reme", "gr": "noun", "en": ["lamb"]}
{"mi": "āe", "gr": "particle", "en": ["yes"]}
{"mi": "pepe", "gr": "noun", "en": ["any lepidopterans including butterflies and moths"]}
{"mi": "pepe", "gr": "verb", "en": ["to flutter", "to frisk, to frolic", "to stumble, hesitate or stutter (in speech, reciting etc)"]}
{"mi": "moni", "gr": "noun", "en": ["money, cash"]}
{"mi": "karu", "gr": "noun", "en": ["spongy matter (pulp around the seeds of a bottle gourd, brains, clotted blood etc)", "pupil of the eye", "eye"]}
{"mi": "rangitoto", "gr": "noun", "en": ["lava", "volcano"]}
{"mi": "pū", "gr": "noun", "en": ["bunch, bundle", "heap, stack", "tribe", "origin, source", "base, foundation"]}
{"mi": "pū", "gr": "verb", "en": ["to bundle", "to lay in a heap, to heap"]}
{"mi": "pū", "gr": "verb", "en": ["to blow", "to shoot (of a firearm)"]}
{"mi": "pū", "gr": "noun", "en": ["reed, tube, pipe", "any elongated wind musical instrument", "gun, firearm, musket"]}
{"mi": "matā", "gr": "noun", "en": ["obsidian", "lava", "lead", "bullet", "seashore earwig"]}
{"mi": "takai", "gr": "verb", "en": ["to wrap up, wrap round", "to wind round"]}
{"mi": "takai", "gr": "noun", "en": ["a wrapper; a covering"]}
{"mi": "pātata", "gr": "adj", "en": ["neighbouring"]}
{"mi": "kānga", "gr": "noun", "en": ["maize, corn"]}
{"mi": "autō", "gr": "noun", "en": ["magnet"]}
{"mi": "tutū", "gr": "noun", "en": ["disobedience, offending; hooligan"]}
{"mi": "tutū", "gr": "verb", "en": ["to be mischievous, disobedient, mutinous, rebellious, undisciplined, or disruptive."]}
{"mi": "tai āniwhaniwha", "gr": "noun", "en": ["tidal wave"]}
{"mi": "hōiho", "gr": "noun", "en": ["horse (Equus caballus)"]}
{"mi": "tāriana", "gr": "noun", "en": ["stallion"]}
{"mi": "reo tupu", "gr": "noun", "en": ["mother tongue"]}
{"mi": "tīra", "gr": "noun", "en": ["steel"]}
{"mi": "mōkō", "gr": "noun", "en": ["smoko"]}
{"mi": "hē", "gr": "noun", "en": ["fault"]}
{"mi": "hē", "gr": "verb", "en": ["to err"]}
{"mi": "hē", "gr": "adj", "en": ["wrong"]}
{"mi": "hōu", "gr": "adj", "en": ["new (recently made or created)"]}
{"mi": "hū", "gr": "verb", "en": ["to make a loud noise", "to bubble up (of water)", "to hiss", "to call (out to), signal, cooey"]}
{"mi": "hū", "gr": "noun", "en": ["noise, racket, hubbub"]}
{"mi": "hū", "gr": "intj", "en": ["boom!"]}
{"mi": "kā", "gr": "verb", "en": ["to burn", "to be alight"]}
{"mi": "kā", "gr": "verb", "en": ["to screech"]}
{"mi": "kā", "gr": "noun", "en": ["car"]}
{"mi": "kāo", "gr": "particle", "en": ["no"]}
{"mi": "mā", "gr": "noun", "en": ["white"]}
{"mi": "mā", "gr": "particle", "en": ["for (representing future possession)", "by, made by, acted on (combined with e to indicate future tense for who will perform an action)", "by way of; via; through", "by means of; on (followed by runga)"]}
{"mi": "mō", "gr": "prep", "en": ["for"]}
{"mi": "pā", "gr": "noun", "en": ["fortified place", "fortified village, usually on steep-sided raised ground that facilitates defence and affords good view of approaching attackers, such as a hilltop, promontory or small island", "screen or blockade"]}
{"mi": "pā", "gr": "verb", "en": ["to block up"]}
{"mi": "pā", "gr": "verb", "en": ["to touch, strike, hit (as by a stone), tag, affect", "to reach", "to be connected with, relate to, pertaining to, regarding", "to be heard, reach one's ears, hold personal communication with", "to blow (as the wind)", "to participate, act together, act in concert, join in (an undertaking)", "to have sex"]}
{"mi": "pā", "gr": "noun", "en": ["clump, group or flock", "contact (netball, etc.)"]}
{"mi": "pī", "gr": "adj", "en": ["sodden"]}
{"mi": "pī", "gr": "noun", "en": ["snub"]}
{"mi": "pī", "gr": "verb", "en": ["to ignore, to slight, to neglect"]}
{"mi": "pī", "gr": "noun", "en": ["bee"]}
{"mi": "pō", "gr": "noun", "en": ["night", "day, time cycle of 24 hours"]}
{"mi": "tōu", "gr": "det", "en": ["your; singular inalienable"]}
{"mi": "ō", "gr": "det", "en": ["your of more than one thing"]}
{"mi": "ō", "gr": "prep", "en": ["possessive article used before a pronoun, like the functions of and -’s in English"]}
{"mi": "ō", "gr": "verb", "en": ["to have, to own"]}
{"mi": "ō", "gr": "noun", "en": ["food, provisions"]}
{"mi": "ōu", "gr": "det", "en": ["your; dual/plural inalienable"]}
{"mi": "kākā", "gr": "noun", "en": ["a parrot (especially the kaka)", "kaka (Nestor meridionalis)"]}
{"mi": "rōtō", "gr": "noun", "en": ["lotto"]}
{"mi": "tohutō", "gr": "noun", "en": ["macron"]}
{"mi": "tōmato", "gr": "noun", "en": ["tomato"]}
{"mi": "tupuna", "gr": "noun", "en": ["A grandparent, or any ancestor more remote than one's parents."]}
{"mi": "tipuna", "gr": "noun", "en": ["alternative form of tupuna"]}
{"mi": "ponga", "gr": "noun", "en": ["silver fern (Alsophila dealbata)"]}
{"mi": "kia ora", "gr": "intj", "en": ["A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.", "An expression of gratitude (similar to cheers!).", "An expression of support or agreement (similar to hear hear)."]}
{"mi": "tangata tiriti", "gr": "noun", "en": ["\\"People of the Treaty\\", or New Zealanders of non-Māori origin.", "Includes all non-Māori people who have a right to live in New Zealand under the Treaty of Waitangi."]}
{"mi": "tute", "gr": "noun", "en": ["masculine equivalent of tūī"]}
{"mi": "aihe", "gr": "noun", "en": ["The short-beaked common dolphin, Delphinus delphis"]}
{"mi": "kihu", "gr": "noun", "en": ["a thrum or fringe thread", "noodle"]}
{"mi": "pua", "gr": "noun", "en": ["flower"]}
{"mi": "piu", "gr": "verb", "en": ["to cast, to throw, to fling (of rope, line etc)", "to swing (of a cord)", "to wave, to sway", "to wield, to brandish (of a weapon)"]}
{"mi": "kupu", "gr": "noun", "en": ["word, vocabulary", "saying, talk", "message, statement", "utterance", "lyric", "culm (of grass, bamboo)"]}
{"mi": "kupu", "gr": "verb", "en": ["to speak"]}
{"mi": "hua", "gr": "noun", "en": ["fruit", "product, outcome", "egg, roe", "benefit, gain, asset"]}
{"mi": "hua", "gr": "verb", "en": ["to bear fruit, be abundant, accrue", "to flower, bloom, blossom"]}
{"mi": "kua", "gr": "particle", "en": ["aspect marker, marks actions as recently initiated, in progress, or completed"]}
{"mi": "pono", "gr": "noun", "en": ["truth, non-fiction, validity"]}
{"mi": "pono", "gr": "adj", "en": ["true, valid, honest, genuine, sincere"]}
{"mi": "kui", "gr": "noun", "en": ["grandmother, old woman, elderly woman"]}
{"mi": "paho", "gr": "verb", "en": ["to be aloft, to float, to soar"]}
{"mi": "uri", "gr": "adj", "en": ["dark, deep (of colour)"]}
{"mi": "mou", "gr": "noun", "en": ["island, islet, alternative form of motu"]}
{"mi": "Harare", "gr": "adj", "en": ["bleary-eyed"]}
{"mi": "reti", "gr": "verb", "en": ["to slide", "to skate", "to surf"]}
{"mi": "poki", "gr": "verb", "en": ["to turn over, to hang or place concave objects (like boats) upside down", "to overtake", "to capsize", "to cover over something (esp. with a lid)"]}
{"mi": "papi", "gr": "noun", "en": ["poppy"]}
{"mi": "papi", "gr": "noun", "en": ["puppy"]}
{"mi": "poti", "gr": "noun", "en": ["cat (Felis silvestris catus)"]}
{"mi": "poti", "gr": "noun", "en": ["angle", "corner"]}
{"mi": "piki", "gr": "noun", "en": ["fig tree", "fig"]}
{"mi": "piki", "gr": "verb", "en": ["to climb, to scale"]}
{"mi": "piki", "gr": "verb", "en": ["to support, to assist"]}
{"mi": "rara", "gr": "verb", "en": ["to spread out, to scatter", "to rush in disorder, to stampede"]}
{"mi": "rara", "gr": "noun", "en": ["rib"]}
{"mi": "tona", "gr": "noun", "en": ["wart, corn, nodule"]}
{"mi": "tuki", "gr": "verb", "en": ["to ram, to pound, to pestle", "to punch", "to bunt"]}
{"mi": "tuki", "gr": "noun", "en": ["pestle"]}
{"mi": "taika", "gr": "noun", "en": ["tiger (Panthera tigris)"]}
{"mi": "maita", "gr": "noun", "en": ["bowls, bowling"]}
{"mi": "maina", "gr": "noun", "en": ["mine (explosive device)"]}
{"mi": "maina", "gr": "verb", "en": ["to lay mines"]}
{"mi": "maina", "gr": "noun", "en": ["myna (Acridotheres tristis)"]}
{"mi": "haki", "gr": "noun", "en": ["flag"]}
{"mi": "haki", "gr": "noun", "en": ["mountain holly (Olearia ilicifolia)"]}
{"mi": "taru", "gr": "noun", "en": ["weed, grass; small vegetation"]}
{"mi": "rehu", "gr": "noun", "en": ["dust", "mist", "spray"]}
{"mi": "rehu", "gr": "adj", "en": ["misty"]}
{"mi": "hoki", "gr": "verb", "en": ["to return"]}
{"mi": "hoki", "gr": "adv", "en": ["also; too."]}
{"mi": "hoki", "gr": "noun", "en": ["The blue grenadier (Macruronus novaezelandiae), a merluccid hake."]}
{"mi": "katoa", "gr": "det", "en": ["all"]}
{"mi": "katoa", "gr": "noun", "en": ["everything, everybody"]}
{"mi": "hauku", "gr": "noun", "en": ["dew"]}
{"mi": "hauku", "gr": "adj", "en": ["damp"]}
{"mi": "tipua", "gr": "noun", "en": ["demon"]}
{"mi": "piriti", "gr": "noun", "en": ["priest"]}
{"mi": "piriti", "gr": "noun", "en": ["bridge"]}
{"mi": "ingoa", "gr": "noun", "en": ["name"]}
{"mi": "wā", "gr": "noun", "en": ["time"]}
{"mi": "tenga", "gr": "noun", "en": ["crop (of a bird)", "Adam's apple", "goitre"]}
{"mi": "punga", "gr": "noun", "en": ["coral", "any silicate or calcite material", "anchor"]}
{"mi": "punga", "gr": "verb", "en": ["to anchor", "to secure", "to sink, to fall"]}
{"mi": "hoa", "gr": "noun", "en": ["friend, companion, mate, partner, spouse, ally"]}
{"mi": "hoa", "gr": "noun", "en": ["pitch (of a roof)"]}
{"mi": "hoa", "gr": "verb", "en": ["to lay out; to plan; to arrange"]}
{"mi": "hoa", "gr": "noun", "en": ["charm, spell, enchantment"]}
{"mi": "atu", "gr": "adv", "en": ["away"]}
{"mi": "tana", "gr": "det", "en": ["his, her of one thing"]}
{"mi": "tipu", "gr": "verb", "en": ["alternative form of tupu (“to grow”)"]}
{"mi": "arata", "gr": "noun", "en": ["lettuce"]}
{"mi": "aua", "gr": "noun", "en": ["yellow-eye mullet, (Aldrichetta forsteri)"]}
{"mi": "aua", "gr": "particle", "en": ["Negative imperative particle: no! don't!"]}
{"mi": "Taina", "gr": "name", "en": ["China (a country in Asia)"]}
{"mi": "nuku", "gr": "verb", "en": ["to move, to shift", "to extend", "to indent"]}
{"mi": "nuku", "gr": "noun", "en": ["distance, extent", "expanse", "land, ground", "indent"]}
{"mi": "utua", "gr": "verb", "en": ["passive of utu"]}
{"mi": "pihi", "gr": "verb", "en": ["to spring up", "to start growing, to sprout"]}
{"mi": "pihi", "gr": "noun", "en": ["sprout, shoot, bud", "horn, antler"]}
{"mi": "-ia", "gr": "suffix", "en": ["a passive ending"]}
{"mi": "komo", "gr": "verb", "en": ["to plug, to thrust", "to insert"]}
{"mi": "heru", "gr": "noun", "en": ["comb"]}
{"mi": "heru", "gr": "verb", "en": ["to comb"]}
{"mi": "tino", "gr": "noun", "en": ["essence, essential, substance"]}
{"mi": "tino", "gr": "adj", "en": ["main, principal", "most, more (intensifier)"]}
{"mi": "tino", "gr": "intj", "en": ["used to show strong agreement with a statement"]}
{"mi": "tini", "gr": "num", "en": ["ten thousand, myriad"]}
{"mi": "tini", "gr": "noun", "en": ["multitude, host, a very large amount"]}
{"mi": "tini", "gr": "adj", "en": ["numerous, plenty"]}
{"mi": "hewa", "gr": "adj", "en": ["mistaken"]}
{"mi": "teka", "gr": "noun", "en": ["rung or step of a ladder", "horizontal footrest or tread on a digging stick to step on and push further into the ground"]}
{"mi": "teka", "gr": "noun", "en": ["dart"]}
{"mi": "teka", "gr": "verb", "en": ["to shoot with bow and arrow", "to drive something forward, to urge, to impel"]}
{"mi": "pepa", "gr": "noun", "en": ["paper"]}
{"mi": "mahana", "gr": "adj", "en": ["warm (of temperature)", "cordial (of atmosphere)"]}
{"mi": "miti", "gr": "verb", "en": ["to lick; to lap", "to swash, to touch the surface of water", "to absorb"]}
{"mi": "miti", "gr": "noun", "en": ["undertow, water flowing back from a breaking wave towards the sea"]}
{"mi": "kini", "gr": "verb", "en": ["to pinch, to nip (with fingers, claws etc)", "to pinch off"]}
{"mi": "kini", "gr": "noun", "en": ["pinch (amount)"]}
{"mi": "kini", "gr": "noun", "en": ["guinea (a coin)"]}
{"mi": "rakuraku", "gr": "verb", "en": ["to scratch", "to strum"]}
{"mi": "rakuraku", "gr": "noun", "en": ["rake, harrow", "guitar"]}
{"mi": "hea", "gr": "verb", "en": ["grieve"]}
{"mi": "rona", "gr": "noun", "en": ["a binder (for holding papers together)"]}
{"mi": "rona", "gr": "verb", "en": ["to bind, to tie together, to confine or tie down with cord"]}
{"mi": "Ahitereiria", "gr": "name", "en": ["Australia (a country consisting of a main island, the island of Tasmania and other smaller islands, located in Oceania; historically, a collection of former colonies of the British Empire)", "Australia (a continent consisting of the land on the Australian tectonic plate, i.e. Australia, New Guinea and intervening islands)"]}
{"mi": "maunga", "gr": "noun", "en": ["mountain"]}
{"mi": "kō", "gr": "noun", "en": ["digging stick (also used as a weapon)"]}
{"mi": "kō", "gr": "verb", "en": ["to dig dirt esp. with the digging stick", "to stab, to thrust, alternative form of kōkō", "(of the lips) to pout out of displeasure"]}
{"mi": "ahiahi", "gr": "noun", "en": ["evening (time of day)", "afternoon"]}
{"mi": "ahiahi", "gr": "verb", "en": ["to become evening"]}
{"mi": "rimu", "gr": "noun", "en": ["moss (plants of the division Bryophyta)", "a large tree native to New Zealand (Dacrydium cupressinum); see English rimu."]}
{"mi": "tātahi", "gr": "noun", "en": ["beach"]}
{"mi": "kamo", "gr": "noun", "en": ["eyelid", "eyelash"]}
{"mi": "kamo", "gr": "verb", "en": ["to blink", "to wink"]}
{"mi": "rorohiko", "gr": "noun", "en": ["computer"]}
{"mi": "waiū", "gr": "noun", "en": ["milk"]}
{"mi": "moepapa", "gr": "noun", "en": ["nightmare"]}
{"mi": "moenanu", "gr": "noun", "en": ["nightmare"]}
{"mi": "kehu", "gr": "adj", "en": ["reddish"]}
{"mi": "panata", "gr": "noun", "en": ["panther"]}
{"mi": "kapua", "gr": "noun", "en": ["cloud", "mist"]}
{"mi": "totea", "gr": "verb", "en": ["passive of tote"]}
{"mi": "tūrangawaewae", "gr": "noun", "en": ["turangawaewae (“the place where one belongs or has a right to live; one's own land; also, the sense of freedom, identity, and spiritual connection associated with this place”)"]}
{"mi": "hahae", "gr": "verb", "en": ["to slit, to slash", "to erode", "to appear"]}
{"mi": "kano", "gr": "noun", "en": ["seed, bean, grain, ovule", "sort, kind", "color, pigment, hue"]}
{"mi": "hoari", "gr": "noun", "en": ["sword"]}
{"mi": "haïra", "gr": "noun", "en": ["scythe"]}
{"mi": "haina", "gr": "verb", "en": ["to sign"]}
{"mi": "tinana", "gr": "noun", "en": ["body"]}
{"mi": "nānā", "gr": "verb", "en": ["to tend carefully, to look after"]}
{"mi": "nānā", "gr": "verb", "en": ["to indulge, pamper"]}
{"mi": "wani", "gr": "noun", "en": ["swan"]}
{"mi": "-ku", "gr": "suffix", "en": ["Used in contractions with particles of possession to mean me"]}
{"mi": "pereti", "gr": "noun", "en": ["plate, platter"]}
{"mi": "anga", "gr": "noun", "en": ["shell, husk", "structure, framework"]}
{"mi": "anga", "gr": "verb", "en": ["to face", "to set about, to begin"]}
{"mi": "kainga", "gr": "noun", "en": ["The refuse of a meal."]}
{"mi": "kainga", "gr": "verb", "en": ["To be consumed; passive form of kai"]}
{"mi": "patu", "gr": "verb", "en": ["to strike, to beat, to kill"]}
{"mi": "patu", "gr": "noun", "en": ["beating, assault, killing", "weapon, club"]}
{"mi": "tuke", "gr": "noun", "en": ["elbow", "bend, angle", "cubit, measurement from elbow to fingertip"]}
{"mi": "tuke", "gr": "verb", "en": ["to twitch", "to jerk", "to nudge"]}
{"mi": "riki", "gr": "adj", "en": ["small, little", "few"]}
{"mi": "riki", "gr": "noun", "en": ["leek", "onion"]}
{"mi": "kumu", "gr": "verb", "en": ["to clench, to close one's hand tightly into a fist", "to hold or carry an object with fingers closing around it", "to close or shut one's mouth", "to hold one's breath"]}
{"mi": "kumu", "gr": "noun", "en": ["anus", "buttocks"]}
{"mi": "kakara", "gr": "adj", "en": ["aromatic, fragrant, sweet-smelling"]}
{"mi": "kakara", "gr": "noun", "en": ["scent, smell, odour"]}
{"mi": "hupa", "gr": "noun", "en": ["soup, broth"]}
{"mi": "kipa", "gr": "noun", "en": ["spur (horse prod attached to heel)"]}
{"mi": "kipa", "gr": "verb", "en": ["to spur (on)"]}
{"mi": "Tuna", "gr": "name", "en": ["An eel-god, the son of Manga-wai-roa, one of the lesser Maori deities who lived in a water hole called Muri-wai-o-ata."]}
{"mi": "karo", "gr": "verb", "en": ["to pick out or scoop something out of a hole"]}
{"mi": "karo", "gr": "noun", "en": ["Pittosporum crassifolium, a shrub of New Zealand."]}
{"mi": "momo", "gr": "noun", "en": ["a type, a kind, a species, a breed, a variety, a race, a genre"]}
{"mi": "tarakihi", "gr": "noun", "en": ["A grey and black saltwater fish, Nemadactylus macropterus, found off the coast of Australia, New Zealand and South America."]}
{"mi": "Mei", "gr": "name", "en": ["May (month)"]}
{"mi": "taitoa", "gr": "adj", "en": ["manly"]}
{"mi": "matau", "gr": "noun", "en": ["fishhook", "hookgrass"]}
{"mi": "kirikiti", "gr": "noun", "en": ["cricket"]}
{"mi": "epa", "gr": "noun", "en": ["wall post"]}
{"mi": "patupaiarehe", "gr": "noun", "en": ["patupaiarehe (legendary fair-skinned fairy folk)"]}
{"mi": "waha", "gr": "noun", "en": ["mouth", "any opening or entrance"]}
{"mi": "waha", "gr": "verb", "en": ["to carry on one's back"]}
{"mi": "kohe", "gr": "noun", "en": ["synonym of kohekohe", "bamboo"]}
{"mi": "kohe", "gr": "noun", "en": ["Passiflora tetrandra, a kind of passionfruit endemic to New Zealand."]}
{"mi": "pewa", "gr": "noun", "en": ["eyebrow"]}
{"mi": "pewa", "gr": "verb", "en": ["to arch (of eyebrows)"]}
{"mi": "kawe", "gr": "verb", "en": ["to carry, to bring, to bear", "to fetch", "to convey (of meaning etc.)", "to conduct (heat, energy etc.)", "to induce, to influence", "to persevere, to persist"]}
{"mi": "kawe", "gr": "noun", "en": ["handle (of a basket etc.), strap (of a bag, backpack)"]}
{"mi": "kawe", "gr": "noun", "en": ["tentacle", "spiral moko pattern on one's facial cheeks"]}
{"mi": "niko", "gr": "verb", "en": ["to coil, to form bights in ropes", "to go around"]}
{"mi": "niko", "gr": "noun", "en": ["cabbage - alternative form of nīko"]}
{"mi": "ranu", "gr": "verb", "en": ["to mix"]}
{"mi": "ranu", "gr": "noun", "en": ["mixture"]}
{"mi": "hipi", "gr": "noun", "en": ["sheep"]}
{"mi": "huia", "gr": "noun", "en": ["huia (†Heteralocha acutirostris)"]}
{"mi": "kanga", "gr": "verb", "en": ["to curse, to swear"]}
{"mi": "kanga", "gr": "noun", "en": ["cursing", "swear word"]}
{"mi": "mako", "gr": "adj", "en": ["to be peeled", "stripped off"]}
{"mi": "makomako", "gr": "noun", "en": ["wineberry (Aristotelia serrata)", "New Zealand bellbird (Anthornis melanura)"]}
{"mi": "wiri", "gr": "verb", "en": ["to bore, twist, drill", "to tremble, shiver, shudder"]}
{"mi": "wiri", "gr": "noun", "en": ["gimlet, auger, drill, screwdriver, anything for boring holes", "trembling of the hands in Maori singing to indicate the interface between the mind and the body (the wiri represents the shimmering of the ocean water, the heat waves rising from the ground, the wind rustling the tree leaves)"]}
{"mi": "manuhiri", "gr": "noun", "en": ["guest, visitor"]}
{"mi": "takahē", "gr": "noun", "en": ["takahē, species of large flightless bird in the Rallidae family, endemic to New Zealand."]}
{"mi": "peara", "gr": "noun", "en": ["pearl"]}
{"mi": "peara", "gr": "adj", "en": ["pearly"]}
{"mi": "mauka", "gr": "noun", "en": ["mountain"]}
{"mi": "whakapapa", "gr": "verb", "en": ["To lie or lay flat.", "To lay low or to strike down.", "To lay one upon another, to layer.", "To recite in order (genealogies, legends, etc.)"]}
{"mi": "whakapapa", "gr": "noun", "en": ["layering, the act of layering", "Genealogy, genealogical table, descent, lineage."]}
{"mi": "miromiro", "gr": "noun", "en": ["A bird of subspecies Petroica macrocephala toitoi of tom-tits, of the North Island"]}
{"mi": "kohekohe", "gr": "noun", "en": ["Dysoxylum spectabile, a medium-sized tree native to New Zealand, related to mahogany."]}
{"mi": "Hina", "gr": "name", "en": ["personification of the Moon"]}
{"mi": "koromiko", "gr": "noun", "en": ["koromiko shrub"]}
{"mi": "Ruta", "gr": "name", "en": ["a female given name, equivalent to English Ruth"]}
{"mi": "wharenui", "gr": "noun", "en": ["wharenui"]}
{"mi": "ipu", "gr": "noun", "en": ["cup", "any small receptacle"]}
{"mi": "kape", "gr": "noun", "en": ["tongs", "any wooden kitchen tool (spoon, stirrer etc)", "crescent", "eyebrow"]}
{"mi": "kape", "gr": "verb", "en": ["to pluck or pick out (items from an earth oven with sticks etc)", "to set aside something"]}
{"mi": "Miriama", "gr": "name", "en": ["a female given name, equivalent to English Miriam", "Miriam (biblical)"]}
{"mi": "piro", "gr": "adj", "en": ["rotten, putrid", "smelly", "disgusting", "offensive"]}
{"mi": "piro", "gr": "verb", "en": ["to rot", "to disgust"]}
{"mi": "piro", "gr": "noun", "en": ["rot", "intestines"]}
{"mi": "piro", "gr": "adj", "en": ["extinguished, put out", "defeated, beaten (in games)"]}
{"mi": "Māui", "gr": "name", "en": ["A trickster and a hero who had his superhuman strength and shapeshifting, believed to have created the islands of New Zealand from a great fish that he caught."]}
{"mi": "waikato", "gr": "noun", "en": ["flowing water"]}
{"mi": "Makanui", "gr": "name", "en": ["A Big Mac, a type of hamburger."]}
{"mi": "kiko", "gr": "noun", "en": ["meat of any animal", "flesh of fruit", "kernel of a seed or nut", "body, substance"]}
{"mi": "pepe tunga", "gr": "noun", "en": ["huhu beetle or Prionoplus reticularis, a longhorn beetle species of the Cerambycidae family which is the largest endemic beetle found in New Zealand."]}
{"mi": "nga", "gr": "article", "en": ["macronless spelling of ngā"]}
{"mi": "Mere", "gr": "name", "en": ["a female given name, equivalent to English Mary"]}
{"mi": "hema", "gr": "noun", "en": ["genitalia"]}
{"mi": "kune", "gr": "verb", "en": ["to swell (of fruit, the body)", "to be pregnant", "to grow, to spring forth"]}
{"mi": "kune", "gr": "adj", "en": ["plump, round"]}
{"mi": "Kini", "gr": "name", "en": ["Guinea (a country in West Africa)"]}
{"mi": "anō", "gr": "adv", "en": ["again"]}
{"mi": "horonga", "gr": "name", "en": ["avalanche"]}
{"mi": "Moroko", "gr": "name", "en": ["Morocco (a country in North Africa)"]}
{"mi": "wairua", "gr": "noun", "en": ["a soul or spirit of a person", "attitude, quintessence, mood, essence", "bonfire moss (Funaria hygrometrica)"]}
{"mi": "ngū", "gr": "noun", "en": ["broad squid (Sepioteuthis australis)"]}
{"mi": "wheketere", "gr": "noun", "en": ["arrow squid"]}
{"mi": "kokoru", "gr": "noun", "en": ["bay (gulf)"]}
{"mi": "whanga", "gr": "noun", "en": ["bay, gulf", "stretch of water"]}
{"mi": "pango", "gr": "noun", "en": ["black (colour/color)"]}
{"mi": "umere", "gr": "noun", "en": ["song, chant", "praise, applause"]}
{"mi": "umere", "gr": "verb", "en": ["to sing, to chant (of a choir)"]}
{"mi": "akepiro", "gr": "noun", "en": ["A small tree of New Zealand (Olearia furfuracea)."]}
{"mi": "kahikatea", "gr": "noun", "en": ["kahikatea (Dacrycarpus dacrydioides)"]}
{"mi": "pania", "gr": "verb", "en": ["passive of pani"]}
{"mi": "weta", "gr": "noun", "en": ["dirt", "filth; excrement", "no way; hell no; never!"]}
{"mi": "kia kaha", "gr": "intj", "en": ["be strong (used as an affirmation or motto)", "A term of comfort or solace (equivalent of the English phrase \\"be strong, my thoughts are with you\\").", "An interjection during a speech to indicate support or approval (similar to \\"hear, hear!\\")."]}
{"mi": "poaka", "gr": "noun", "en": ["pig", "pork"]}
{"mi": "hōtēra", "gr": "noun", "en": ["hotel"]}
{"mi": "whare noho", "gr": "noun", "en": ["hostel, alternative form of wharenoho"]}
{"mi": "Etonia", "gr": "name", "en": ["Estonia (a country in northeastern Europe, on the southeastern coast of the Baltic Sea)"]}
{"mi": "Rūhia", "gr": "name", "en": ["Russia (a transcontinental country in Eastern Europe and North Asia)"]}
{"mi": "Rituānia", "gr": "name", "en": ["Lithuania (a country in northeastern Europe)"]}
{"mi": "Ūkareinga", "gr": "name", "en": ["Ukraine (a country in Eastern Europe, bordering on the north shore of the Black Sea)"]}
{"mi": "Koria", "gr": "name", "en": ["Korea (a geographic region in East Asia, consisting of two countries, commonly known as South Korea and North Korea; formerly a single country)", "Korea (a peninsula in East Asia, containing the countries of North Korea and South Korea; in full, Korean Peninsula)"]}
{"mi": "Mongōria", "gr": "name", "en": ["Mongolia (a country in East Asia)", "Mongolia (a Mongolian-speaking geographic region in East Asia, including the country of Mongolia (Outer Mongolia), the autonomous region of Inner Mongolia in China, and sometimes also Buryatia, Tuva and the Altai Republic in Russia)"]}
{"mi": "Haina", "gr": "name", "en": ["China (a country in Asia)"]}
{"mi": "Huitene", "gr": "name", "en": ["Sweden"]}
{"mi": "Kīngitanga Kotahi", "gr": "name", "en": ["United Kingdom (a kingdom and country in Northern Europe)"]}
{"mi": "Itāria", "gr": "name", "en": ["Italy (a country in Southern Europe)"]}
{"mi": "Potukara", "gr": "name", "en": ["Portugal (a country in Europe)"]}
{"mi": "Pāniora", "gr": "name", "en": ["Spain (a country in Southern Europe, including most of the Iberian peninsula)"]}
{"mi": "Wīwī", "gr": "name", "en": ["France (a country located primarily in Western Europe)"]}
{"mi": "Wīwī", "gr": "adj", "en": ["French (of, from or relating to France)"]}
{"mi": "Wīwī", "gr": "noun", "en": ["French person (of, from or relating to France)"]}
{"mi": "Tiamana", "gr": "name", "en": ["Germany (a country in Central Europe)"]}
{"mi": "Huiterangi", "gr": "name", "en": ["Switzerland (a country in Western Europe and Central Europe)"]}
{"mi": "Kāmaka", "gr": "name", "en": ["Gibraltar"]}
{"mi": "Rāwhia", "gr": "name", "en": ["Latvia (a country in northeastern Europe)"]}
{"mi": "Hinerangi", "gr": "name", "en": ["a female given name"]}
{"mi": "Tenemāka", "gr": "name", "en": ["Denmark (a country in Northern Europe)"]}
{"mi": "Tiorangi", "gr": "name", "en": ["Iceland (an island and country in the North Atlantic Ocean in Europe)"]}
{"mi": "Airangi", "gr": "name", "en": ["Ireland (a country in northwestern Europe)"]}
{"mi": "Nōwei", "gr": "name", "en": ["Norway (a country in Scandinavia in Northern Europe)"]}
{"mi": "Kirihi", "gr": "name", "en": ["Greece (a country in Southeastern Europe)"]}
{"mi": "Poho o Pita", "gr": "name", "en": ["Vatican"]}
{"mi": "Ateria", "gr": "name", "en": ["Austria (a country in Central Europe)"]}
{"mi": "Pehiamu", "gr": "name", "en": ["Belgium (a country in Europe)"]}
{"mi": "Hōrana", "gr": "name", "en": ["Holland (a historical province of the Netherlands)", "Holland, the Netherlands (a country in Western Europe)"]}
{"mi": "Hōria", "gr": "name", "en": ["Georgia (a transcontinental country in the Caucasus region of Europe and Asia, on the coast of the Black Sea)"]}
{"mi": "Katatānga", "gr": "name", "en": ["Kazakhstan (a country in Central Asia and Eastern Europe)"]}
{"mi": "Tāke", "gr": "name", "en": ["Turkey (a country located in Eastern Thrace in Southeastern Europe and Anatolia in West Asia)"]}
{"mi": "Atepaihānia", "gr": "name", "en": ["Azerbaijan (a country in the South Caucasus in Asia and Europe)"]}
{"mi": "Āmenia", "gr": "name", "en": ["Armenia (a country in the South Caucasus region of Asia, considered to belong politically to Europe)"]}
{"mi": "Haipara", "gr": "name", "en": ["Cyprus (an island and country in the Mediterranean Sea, normally considered politically part of Europe but geographically part of West Asia)"]}
{"mi": "Koroātia", "gr": "name", "en": ["Croatia (a country on the Balkan Peninsula in Southeastern Europe)"]}
{"mi": "Arapeinia", "gr": "name", "en": ["Albania (a country in Southeastern Europe)"]}
{"mi": "Hanekeria", "gr": "name", "en": ["Hungary (a country in Europe)"]}
{"mi": "Horowākia", "gr": "name", "en": ["Slovakia (a country in Central Europe)"]}
{"mi": "Morotawa", "gr": "name", "en": ["Moldova (a country in Eastern Europe)"]}
{"mi": "Pērara", "gr": "name", "en": ["Belarus (a country in Europe)"]}
{"mi": "Pōrana", "gr": "name", "en": ["Poland (a country in Central Europe)"]}
{"mi": "Purukāria", "gr": "name", "en": ["Bulgaria (a country in Southeastern Europe)"]}
{"mi": "Romeinia", "gr": "name", "en": ["Romania"]}
{"mi": "Tūwehe Tīeke", "gr": "name", "en": ["Czech Republic (a country in Europe)"]}
{"mi": "Hononga-o-Amerika", "gr": "name", "en": ["the United States (a country in North America)"]}
{"mi": "noa", "gr": "particle", "en": ["merely, suddenly, unintentionally, etc. Denotes an absence of limitations or conditions. (Follows immediately after the word.)"]}
{"mi": "noa", "gr": "verb", "en": ["to be unrestricted"]}
{"mi": "noa", "gr": "adj", "en": ["common, ordinary"]}
{"mi": "kauwae", "gr": "noun", "en": ["jawbone", "chin"]}
{"mi": "tauhou", "gr": "noun", "en": ["novice, stranger.", "silvereye, wax-eye, Zosterops lateralis."]}
{"mi": "rere", "gr": "verb", "en": ["to fly", "to flee, escape", "to flow", "to leap", "to rush", "to run", "to race", "to descend, get down", "to sail", "to rise, set (of stars)"]}
{"mi": "rere", "gr": "noun", "en": ["flight", "attack, charge, rush", "waterfall"]}
{"mi": "rere", "gr": "intj", "en": ["heavens!"]}
{"mi": "wehe", "gr": "verb", "en": ["to separate"]}
{"mi": "roke", "gr": "noun", "en": ["dung, poop, poo, faeces, feces, doodoo"]}
{"mi": "keke", "gr": "noun", "en": ["cake"]}
{"mi": "kope", "gr": "verb", "en": ["to wrap something in leaves etc"]}
{"mi": "kope", "gr": "noun", "en": ["anything that wraps", "any kind of absorbent, sanitary pad", "certain types of moss traditionally used as pads or diapers"]}
{"mi": "ture", "gr": "noun", "en": ["law"]}
{"mi": "aponga", "gr": "noun", "en": ["stack, pile"]}
{"mi": "waiata", "gr": "noun", "en": ["song"]}
{"mi": "waiata", "gr": "verb", "en": ["to sing"]}
{"mi": "hiko", "gr": "noun", "en": ["flash, twinkle", "lightning", "electricity"]}
{"mi": "hiko", "gr": "verb", "en": ["to flash"]}
{"mi": "hiko", "gr": "adj", "en": ["random, irregular", "electric; electrical; electronic"]}
{"mi": "hiko", "gr": "verb", "en": ["to stimulate", "to grab; to grasp"]}
{"mi": "kaha", "gr": "noun", "en": ["strength, power, energy"]}
{"mi": "kaha", "gr": "verb", "en": ["to be strong, be courageous"]}
{"mi": "kaha", "gr": "noun", "en": ["rope, noose"]}
{"mi": "kaha", "gr": "noun", "en": ["hill ridge", "lineage"]}
{"mi": "teina", "gr": "noun", "en": ["younger brother of a male", "younger sister of a female", "any junior relative including cousins"]}
{"mi": "kauri", "gr": "noun", "en": ["A conifer of the genus Agathis, family Araucariaceae, found in Australasia and Melanesia.", "Agathis australis, a large conifer of the family Araucariaceae."]}
{"mi": "ranga", "gr": "verb", "en": ["to raise up from the ground", "to uproot, to pull from the roots", "to set in motion, to transport"]}
{"mi": "ranga", "gr": "noun", "en": ["group, team, company of people", "school of fish"]}
{"mi": "ngahuru", "gr": "num", "en": ["ten"]}
{"mi": "ngahuru", "gr": "noun", "en": ["autumn"]}
{"mi": "harakeke", "gr": "noun", "en": ["New Zealand flax (Phormium tenax)"]}
{"mi": "raku", "gr": "verb", "en": ["to scratch", "to strum"]}
{"mi": "haere", "gr": "verb", "en": ["go", "come"]}
{"mi": "angi", "gr": "verb", "en": ["to float through the air"]}
{"mi": "rore", "gr": "verb", "en": ["to trap, to ensnare", "to entangle, to glide", "to deceive"]}
{"mi": "rore", "gr": "noun", "en": ["trap, snare"]}
{"mi": "rore", "gr": "adj", "en": ["deceitful"]}
{"mi": "rore", "gr": "noun", "en": ["rainbow"]}
{"mi": "natu", "gr": "verb", "en": ["to stir, to mix"]}
{"mi": "piko", "gr": "noun", "en": ["bend, curve", "corner"]}
{"mi": "piko", "gr": "adj", "en": ["bent, curved"]}
{"mi": "Aka", "gr": "name", "en": ["Acre (a port city in northern Israel, holiest city in the Baháʼí Faith)"]}
{"mi": "mahi", "gr": "verb", "en": ["to work, do, perform, make, accomplish, practise, raise (money)"]}
{"mi": "mahi", "gr": "noun", "en": ["work, job, employment, trade (work), practice, occupation, activity, exercise, operation, function", "abundance, lots of, many, heaps of"]}
{"mi": "hopi", "gr": "noun", "en": ["soap"]}
{"mi": "pūkeko", "gr": "noun", "en": ["pūkeko (Porphyrio melanotus)"]}
{"mi": "wētā", "gr": "noun", "en": ["weta, any of various species of insects resembling crickets"]}
{"mi": "ī", "gr": "verb", "en": ["to ferment, to sour, to spoil"]}
{"mi": "ū", "gr": "noun", "en": ["breast", "udder, teat"]}
{"mi": "ū", "gr": "verb", "en": ["to strike home, to hit the mark (as of a weapon)", "to land (as of a vessel), to come ashore", "to comply", "to be firm, fixed, unyielding"]}
{"mi": "uku", "gr": "noun", "en": ["clay", "pottery", "soap"]}
{"mi": "te reo Māori", "gr": "noun", "en": ["the Maori language"]}
{"mi": "turangiwaiwai", "gr": "noun", "en": ["misspelling of tūrangawaewae"]}
{"mi": "raurau", "gr": "noun", "en": ["foliage", "thatch"]}
{"mi": "aniani", "gr": "verb", "en": ["to disparage, to belittle"]}
{"mi": "aniani", "gr": "noun", "en": ["derision, disapproval, ridicule"]}
{"mi": "wakuwaku", "gr": "verb", "en": ["to scrape"]}
{"mi": "pakari", "gr": "verb", "en": ["to mature, to ripen"]}
{"mi": "pakari", "gr": "adj", "en": ["matured, ripe, aged", "solid, hard, firm"]}
{"mi": "wareware", "gr": "noun", "en": ["forgetfulness"]}
{"mi": "wareware", "gr": "verb", "en": ["forget", "forgotten", "be forgetful"]}
{"mi": "hāmonika", "gr": "noun", "en": ["harmonica (wind instrument)"]}
{"mi": "humuhumu", "gr": "verb", "en": ["to be amputated; to be ripped apart"]}
{"mi": "māua", "gr": "pron", "en": ["First person dual exclusive"]}
{"mi": "tāua", "gr": "pron", "en": ["First person dual inclusive"]}
{"mi": "Ngai", "gr": "noun", "en": ["alternative spelling of Ngāi."]}
{"mi": "toheroa", "gr": "noun", "en": ["toheroa (edible bivalve)"]}
{"mi": "waku", "gr": "verb", "en": ["to scrape"]}
{"mi": "piopio", "gr": "noun", "en": ["piopio (Turnagra spp.)", "double-banded plover (Charadrius bicinctus)", "New Zealand blueberry (Dianella nigra)"]}
{"mi": "taihoa", "gr": "intj", "en": ["wait, don't (do something) yet"]}
{"mi": "mātanga", "gr": "noun", "en": ["experienced person, expert, professional"]}
{"mi": "mātanga", "gr": "adj", "en": ["sophisticated, experienced"]}
{"mi": "tekau", "gr": "num", "en": ["twenty, score (20).", "ten"]}
{"mi": "waipiro", "gr": "noun", "en": ["alcohol, liquor"]}
{"mi": "taniwha", "gr": "noun", "en": ["taniwha"]}
{"mi": "matua kēkē", "gr": "noun", "en": ["pibling, any sibling of a parent - aunt, uncle"]}
{"mi": "whaea kēkē", "gr": "noun", "en": ["aunty, aunt"]}
{"mi": "whaea", "gr": "noun", "en": ["mother", "aunt"]}
{"mi": "pāpā", "gr": "noun", "en": ["father, dad", "uncle"]}
{"mi": "hua whenua", "gr": "noun", "en": ["vegetable"]}
{"mi": "wae", "gr": "noun", "en": ["leg", "foot"]}
{"mi": "wae", "gr": "verb", "en": ["to divide", "to separate", "to clear away"]}
{"mi": "hoko", "gr": "verb", "en": ["to barter, exchange, trade"]}
{"mi": "ātaahua", "gr": "verb", "en": ["to be beautiful, pretty, good-looking, gorgeous, lovely", "to be handsome, good-looking, gorgeous", "to be pleasant"]}
{"mi": "ātaahua", "gr": "noun", "en": ["beauty"]}
{"mi": "rākau", "gr": "noun", "en": ["A weapon; a club or bat.", "A tree, stick, spar, or mast.", "Wood or timber."]}
{"mi": "merekara", "gr": "noun", "en": ["miracle"]}
{"mi": "rangatira", "gr": "noun", "en": ["chief, chieftain, chieftainess, though of lesser rank than an ariki (paramount chief)", "highborn person", "master, mistress", "leader, boss"]}
{"mi": "rangatira", "gr": "adj", "en": ["chiefly", "highborn", "high-ranking"]}
{"mi": "weka", "gr": "noun", "en": ["woodhen (Gallirallus australis)"]}
{"mi": "roaka", "gr": "adj", "en": ["abundant"]}
{"mi": "hira", "gr": "verb", "en": ["to be great, important, widespread, of consequence", "to be numerous, abundant, plentiful", "to be large, big"]}
{"mi": "hira", "gr": "noun", "en": ["multitude", "importance, significance", "abundance, plentifulness, profusion"]}
{"mi": "hira", "gr": "adj", "en": ["great", "significant, important", "widespread", "eminent", "of consequence", "notable", "momentous"]}
{"mi": "huri", "gr": "verb", "en": ["to turn round, to revolve", "to grind, to mill", "to change", "to overflow, to overwhelm"]}
{"mi": "huri", "gr": "noun", "en": ["rotation, revolution"]}
{"mi": "kume", "gr": "verb", "en": ["to pull", "to drag", "to haul i.e. to move something heavy behind by pulling on a surface"]}
{"mi": "kumekume", "gr": "verb", "en": ["to pull and push repeatedly (of an accordion etc)", "to draw into", "to attract"]}
{"mi": "ruku", "gr": "verb", "en": ["to dive", "to sink", "to submerge", "to hurl or let oneself fall into sth", "to ablute"]}
{"mi": "ahu", "gr": "verb", "en": ["to care for, to foster", "to face or move in a certain direction"]}
{"mi": "ahu", "gr": "verb", "en": ["to heap up"]}
{"mi": "ahu", "gr": "noun", "en": ["mound"]}
{"mi": "taura", "gr": "noun", "en": ["rope"]}
{"mi": "taringa", "gr": "noun", "en": ["ear", "several types of jelly fungi"]}
{"mi": "niho", "gr": "noun", "en": ["tooth", "sharp edge", "bud of a plant"]}
{"mi": "arero", "gr": "noun", "en": ["tongue"]}
{"mi": "inanga", "gr": "noun", "en": ["A fish, the jollytail (Galaxias maculatus).", "The grass tree, a shrub in the genus Dracophyllum.", "bamboo", "white greenstone"]}
{"mi": "noho", "gr": "verb", "en": ["to sit", "to reside, dwell", "to reign", "to be still, to remain in one place"]}
{"mi": "hinga", "gr": "verb", "en": ["to fall, to tumble", "to slant, to tilt", "to lose"]}
{"mi": "hinga", "gr": "noun", "en": ["loss, defeat"]}
{"mi": "hunga", "gr": "noun", "en": ["people", "slave"]}
{"mi": "hunga", "gr": "noun", "en": ["down, fine feathers", "grind, rub fine", "decayed, putrid", "light-coloured"]}
{"mi": "tokerau", "gr": "noun", "en": ["north", "autumn"]}
{"mi": "riri", "gr": "verb", "en": ["to be angry, to rage", "to attack"]}
{"mi": "riri", "gr": "noun", "en": ["anger, rage, wrath", "fight, quarrel, battle"]}
{"mi": "taimaha", "gr": "adj", "en": ["heavy", "expensive, costly, pricey", "harsh, severe, burdening", "unwell"]}
{"mi": "hinu", "gr": "noun", "en": ["fat, grease", "lard", "oil, petrol"]}
{"mi": "huruhuru", "gr": "noun", "en": ["feather", "coarse hair or fur (as opposed to hair on the head, for example: hair on an animal or pubic hair)"]}
{"mi": "pohe", "gr": "adj", "en": ["blind", "stupid, dull"]}
{"mi": "haere mai", "gr": "verb", "en": ["come"]}
{"mi": "haere mai", "gr": "intj", "en": ["welcome"]}
{"mi": "horoi", "gr": "verb", "en": ["wash, clean"]}
{"mi": "horoi", "gr": "noun", "en": ["washing", "soap"]}
{"mi": "ruru", "gr": "noun", "en": ["morepork (Ninox novaeseelandiae)"]}
{"mi": "ruru", "gr": "verb", "en": ["to enclose, to close together", "to take shelter"]}
{"mi": "ruru", "gr": "adj", "en": ["sheltered"]}
{"mi": "ruru", "gr": "noun", "en": ["shelter", "shade"]}
{"mi": "tahe", "gr": "verb", "en": ["to flow, to exude", "to drip", "to menstruate", "to drop", "to miscarry"]}
{"mi": "tahe", "gr": "noun", "en": ["any exudate", "sap", "menses, menstruation i.e. natural monthly uterine discharge among women", "miscarriage, abortion"]}
{"mi": "auahi", "gr": "adj", "en": ["smoky"]}
{"mi": "auahi", "gr": "noun", "en": ["smoke"]}
{"mi": "auahi", "gr": "verb", "en": ["to be smoky"]}
{"mi": "tahito", "gr": "adj", "en": ["ancient"]}
{"mi": "tahito", "gr": "noun", "en": ["age, antiquity"]}
{"mi": "tahito", "gr": "verb", "en": ["to be old, ancient, out of date"]}
{"mi": "pukapuka", "gr": "noun", "en": ["Brachyglottis repanda, shrub with soft leaves with white undersides.", "book"]}
{"mi": "ahau", "gr": "pron", "en": ["alternative form of au"]}
{"mi": "hahake", "gr": "adj", "en": ["naked, unbecoming"]}
{"mi": "turu", "gr": "noun", "en": ["post, pole, pillar"]}
{"mi": "turu", "gr": "verb", "en": ["to drip; to leak"]}
{"mi": "akeake", "gr": "noun", "en": ["broadleaf hopbush (Dodonaea viscosa)", "mountain akeake (Shawia avicenniifolia syn. Olearia avicenniaefolia)", "Chatham Island akeake (Olearia traversiorum)"]}
{"mi": "akeake", "gr": "noun", "en": ["infertile land"]}
{"mi": "tamatane", "gr": "noun", "en": ["boy, male child", "son"]}
{"mi": "manaia", "gr": "noun", "en": ["a manaia (a figure often seen in art, generally depicted as a man with a bird's head)", "a seahorse"]}
{"mi": "huke", "gr": "verb", "en": ["to uncover (of earth ovens)", "to unearth, to dig up, to excavate", "to gut or disembowel fish etc."]}
{"mi": "mātou", "gr": "pron", "en": ["First person plural exclusive"]}
{"mi": "tātou", "gr": "pron", "en": ["First person plural inclusive"]}
{"mi": "hauhau", "gr": "noun", "en": ["whip"]}
{"mi": "hauhau", "gr": "adj", "en": ["windy"]}
{"mi": "tuitui", "gr": "verb", "en": ["to sew"]}
{"mi": "kī", "gr": "verb", "en": ["to say, speak, express, utter, call, mention, tell, designate"]}
{"mi": "kī", "gr": "noun", "en": ["saying, word"]}
{"mi": "kī", "gr": "noun", "en": ["to be full"]}
{"mi": "kī", "gr": "noun", "en": ["key"]}
{"mi": "kī", "gr": "verb", "en": ["to lock", "to be locked"]}
{"mi": "whā", "gr": "num", "en": ["four"]}
{"mi": "whā", "gr": "noun", "en": ["any leaf of certain plants like taro and harakeke with a long and thick rachis (stalk)", "feather"]}
{"mi": "hoou", "gr": "adj", "en": ["obsolete spelling of hōu"]}
{"mi": "kakā", "gr": "adj", "en": ["red or glowing hot, inflamed", "smarting", "spicy, pepper hot"]}
{"mi": "aitu", "gr": "noun", "en": ["atua of disaster and death", "demons", "sickness", "calamity, misery", "grief, sorrow", "woe"]}
{"mi": "aitu", "gr": "adj", "en": ["sorrowful", "woeful"]}
{"mi": "māti", "gr": "noun", "en": ["ripe fruit of the tree fuchsia or kōtukutuku, Fuchsia excorticata"]}
{"mi": "tāne", "gr": "noun", "en": ["man (adult male human)"]}
{"mi": "āu", "gr": "det", "en": ["your; dual/plural alienable"]}
{"mi": "āna", "gr": "det", "en": ["his, her; dual/plural alienable"]}
{"mi": "nāu", "gr": "pron", "en": ["yours, your, by you (second person singular)"]}
{"mi": "te reo Pākehā", "gr": "noun", "en": ["English language"]}
{"mi": "ngā", "gr": "article", "en": ["the (plural)"]}
{"mi": "ngā", "gr": "noun", "en": ["breath"]}
{"mi": "ngā", "gr": "adj", "en": ["satisfied"]}
{"mi": "ngā", "gr": "verb", "en": ["to breathe"]}
{"mi": "Hānuere", "gr": "name", "en": ["January (month)"]}
{"mi": "Pēpuere", "gr": "name", "en": ["February (month)"]}
{"mi": "Māehe", "gr": "name", "en": ["March (month)"]}
{"mi": "Āperire", "gr": "name", "en": ["April (month)"]}
{"mi": "Hune", "gr": "name", "en": ["June (month)"]}
{"mi": "Hūrae", "gr": "name", "en": ["July (month)"]}
{"mi": "Ākuhata", "gr": "name", "en": ["August (month)"]}
{"mi": "Hepetema", "gr": "name", "en": ["September (month)"]}
{"mi": "Oketopa", "gr": "name", "en": ["October (month)"]}
{"mi": "Noema", "gr": "name", "en": ["November (month)"]}
{"mi": "Tīhema", "gr": "name", "en": ["December (month)"]}
{"mi": "wāhine", "gr": "noun", "en": ["plural of wahine"]}
{"mi": "kākāpō", "gr": "noun", "en": ["kakapo (Strigops habroptilus)"]}
{"mi": "wānanga", "gr": "noun", "en": ["sacred ancestral medium", "person who is knowledgeable in traditional lore", "traditional knowledge, lore", "conference, forum or seminar", "instructor or expert"]}
{"mi": "wānanga", "gr": "verb", "en": ["to meet and discuss", "to consider or deliberate"]}
{"mi": "whare wānanga", "gr": "noun", "en": ["a type of traditional Maori school.", "university, polytechnic"]}
{"mi": "mākona", "gr": "adj", "en": ["satisfied, content"]}
{"mi": "tūpuna", "gr": "noun", "en": ["plural of tupuna"]}
{"mi": "ma-", "gr": "prefix", "en": ["fossilised prefix found on some adjectives"]}
{"mi": "neke", "gr": "verb", "en": ["to shift, to move slightly", "to indent (of text)"]}
{"mi": "neke", "gr": "noun", "en": ["roller for a waka"]}
{"mi": "neke", "gr": "noun", "en": ["snake"]}
{"mi": "nanu", "gr": "adj", "en": ["mixed, jumbled", "confusing", "incoherent, inarticulate, unintelligible", "contaminated"]}
{"mi": "nanu", "gr": "verb", "en": ["to express disastifaction, to mumble or murmur"]}
{"mi": "nanu", "gr": "noun", "en": ["discontent, dissatisfaction"]}
{"mi": "pārara", "gr": "verb", "en": ["to bask under the sun, to sunbathe"]}
{"mi": "Mihi", "gr": "name", "en": ["A title given to a white female"]}
{"mi": "wāhi", "gr": "verb", "en": ["to break", "to divide", "to disclose"]}
{"mi": "wāhi", "gr": "noun", "en": ["a part, a portion", "a place, a location", "compartment or room of a house", "opening, any open area"]}
{"mi": "āta", "gr": "adv", "en": ["slowly, carefully"]}
{"mi": "āta", "gr": "noun", "en": ["altar (Christian)"]}
{"mi": "pirau", "gr": "adj", "en": ["rotten"]}
{"mi": "rūpi", "gr": "noun", "en": ["ruby", "rupee"]}
{"mi": "whānau", "gr": "verb", "en": ["to give birth", "to be born"]}
{"mi": "whānau", "gr": "noun", "en": ["an extended family; a group of family members"]}
{"mi": "koutou", "gr": "pron", "en": ["you (plural; three or more people)"]}
{"mi": "kōrua", "gr": "pron", "en": ["you two (dual; two people)"]}
{"mi": "rāua", "gr": "pron", "en": ["they two, them two (dual; two people)"]}
{"mi": "rātou", "gr": "pron", "en": ["they, them (plural; three or more people)"]}
{"mi": "whaka-", "gr": "prefix", "en": ["Causative prefix.", "towards"]}
{"mi": "taku", "gr": "pron", "en": ["my"]}
{"mi": "whenu", "gr": "verb", "en": ["to spin, to twist"]}
{"mi": "whenu", "gr": "noun", "en": ["strand (each of the strings that make up a rope, etc.)", "warp", "cosine"]}
{"mi": "kanae", "gr": "noun", "en": ["grey mullet"]}
{"mi": "Nipono", "gr": "name", "en": ["Japan (a country in East Asia)"]}
{"mi": "kiritona", "gr": "noun", "en": ["pimple, wart"]}
{"mi": "kautona", "gr": "noun", "en": ["wart"]}
{"mi": "hapori", "gr": "noun", "en": ["community"]}
{"mi": "hapori", "gr": "adj", "en": ["social"]}
{"mi": "pāua", "gr": "noun", "en": ["Any of the three species of large edible sea snails, marine gastropod molluscs of the family Haliotidae (sole genus Haliotis), known in the United States and Australia as abalone, and in the United Kingdom as ormer shells."]}
{"mi": "kau aihe", "gr": "noun", "en": ["butterfly stroke"]}
{"mi": "ākau", "gr": "noun", "en": ["reef", "coast (of seas), bank (of rivers)"]}
{"mi": "ōritetanga", "gr": "noun", "en": ["equality (equal treatment of people)"]}
{"mi": "utaina", "gr": "verb", "en": ["passive of uta"]}
{"mi": "ripo", "gr": "noun", "en": ["whirlpool, eddy, curl"]}
{"mi": "ripo", "gr": "verb", "en": ["to swirl, to eddy"]}
{"mi": "rāpeti", "gr": "noun", "en": ["rabbit"]}
{"mi": "wē", "gr": "noun", "en": ["water", "liquid"]}
{"mi": "pēpē", "gr": "verb", "en": ["to mash"]}
{"mi": "pēpē", "gr": "adj", "en": ["mashed, pulped"]}
{"mi": "moemoeā", "gr": "noun", "en": ["dream, vision"]}
{"mi": "moemoeā", "gr": "verb", "en": ["to dream, to experience a vision"]}
{"mi": "kahu", "gr": "noun", "en": ["cloak, cape", "garment, clothing", "covering, surface"]}
{"mi": "ngāwhā", "gr": "verb", "en": ["to burst open, to split", "to bloom"]}
{"mi": "ngāwhā", "gr": "noun", "en": ["geyser, fumarole, hot spring"]}
{"mi": "ngāwhā", "gr": "adj", "en": ["geothermal"]}
{"mi": "ngāwhāriki", "gr": "noun", "en": ["hot spring", "sulfur; sulfur-rich volcanic rock"]}
{"mi": "ngāwhāriki", "gr": "adj", "en": ["geothermal"]}
{"mi": "kiwikiwi", "gr": "noun", "en": ["grey"]}
{"mi": "kiwikiwi", "gr": "noun", "en": ["Blechnum fluviatile, the star fern or creek fern."]}
{"mi": "kawakawa", "gr": "noun", "en": ["kawakawa (Piper excelsum), a shrub endemic to New Zealand."]}
{"mi": "pihapiha", "gr": "noun", "en": ["a blowhole (of a cetacean)", "a gill (of an aquatic animal)"]}
{"mi": "taina", "gr": "noun", "en": ["younger brother of a male", "younger sister of a female"]}
{"mi": "mātua", "gr": "noun", "en": ["plural of matua"]}
{"mi": "tuahine", "gr": "noun", "en": ["sister (of a man)"]}
{"mi": "tuāhine", "gr": "noun", "en": ["plural of tuahine"]}
{"mi": "tuakana", "gr": "noun", "en": ["older brother of a male", "older sister of a female"]}
{"mi": "tuākana", "gr": "noun", "en": ["plural of tuakana"]}
{"mi": "tēina", "gr": "noun", "en": ["plural of teina"]}
{"mi": "tamahine", "gr": "noun", "en": ["girl, female child", "daughter"]}
{"mi": "tamahine", "gr": "adj", "en": ["girlish"]}
{"mi": "tamāhine", "gr": "noun", "en": ["plural of tamahine"]}
{"mi": "tamaiti", "gr": "noun", "en": ["child"]}
{"mi": "tamariki", "gr": "noun", "en": ["plural of tamaiti"]}
{"mi": "nūpepa", "gr": "noun", "en": ["newspaper"]}
{"mi": "āku", "gr": "det", "en": ["my; dual/plural alienable"]}
{"mi": "ōku", "gr": "det", "en": ["my; dual/plural inalienable"]}
{"mi": "Kaiana Wīwī", "gr": "name", "en": ["French Guiana (an overseas department and administrative region of France in South America)"]}
{"mi": "Kaiana", "gr": "name", "en": ["Guyana (a country in South America)", "Guiana (a region of South America)"]}
{"mi": "pīne-ā-Wīwī", "gr": "noun", "en": ["French bean"]}
{"mi": "wīwī", "gr": "noun", "en": ["sea rush, clubrush"]}
{"mi": "wīwī", "gr": "noun", "en": ["somewhere; hither and thither"]}
{"mi": "wāwā", "gr": "verb", "en": ["to be scattered"]}
{"mi": "wāwā", "gr": "noun", "en": ["somewhere; hither and thither"]}
{"mi": "wawā", "gr": "verb", "en": ["alternative form of wāwā"]}
{"mi": "wawā", "gr": "noun", "en": ["alternative form of wāwā"]}
{"mi": "pātai", "gr": "noun", "en": ["a question"]}
{"mi": "pātai", "gr": "verb", "en": ["to ask, to question"]}
{"mi": "nganga", "gr": "noun", "en": ["hail", "stone of a fruit", "core of a boil", "shell or husk"]}
{"mi": "karani", "gr": "noun", "en": ["currant (small raisin)"]}
{"mi": "pona", "gr": "noun", "en": ["node or knot of grass stalks etc", "joint of a limb (legs, arms)", "knuckle"]}
{"mi": "pona", "gr": "noun", "en": ["knot (of a rope)", "sachet, parcel"]}
{"mi": "pona", "gr": "verb", "en": ["to tie or fasten in a knot"]}
{"mi": "pona", "gr": "adj", "en": ["portable, compact"]}
{"mi": "keakea", "gr": "noun", "en": ["quack (of a duck)"]}
{"mi": "keakea", "gr": "verb", "en": ["to quack (as a duck)"]}
{"mi": "rīti", "gr": "verb", "en": ["read"]}
{"mi": "kiekie", "gr": "noun", "en": ["A vine used by the Maori for food and as material for mats, Freycinetia banksii"]}
{"mi": "tōku", "gr": "pron", "en": ["my; singular inalienable", "mine"]}
{"mi": "tāku", "gr": "pron", "en": ["my; singular alienable", "mine"]}
{"mi": "Irinoi", "gr": "name", "en": ["Illinois (a state of the United States)"]}
{"mi": "tēpu", "gr": "noun", "en": ["table"]}
{"mi": "rengarenga", "gr": "noun", "en": ["Arthropodium cirratum, a herbaceous perennial plant endemic to New Zealand."]}
{"mi": "pahu", "gr": "noun", "en": ["alternative form of pahū"]}
{"mi": "tokotoko", "gr": "noun", "en": ["walking stick, cane", "crutch", "staff"]}
{"mi": "tokotoko", "gr": "verb", "en": ["to prop up", "to walk with a cane or crutch, to crutch"]}
{"mi": "kōkō", "gr": "verb", "en": ["to unearth, to dig up, to excavate", "to thrust", "to pout the lips out of displeasure", "to tattoo esp. of the moko with special chisel tools (uhi)"]}
{"mi": "kōkō", "gr": "noun", "en": ["tui"]}
{"mi": "māmā", "gr": "adj", "en": ["light, of little weight", "nimble, of low effort", "easy, simple, not difficult", "cheap, affordable (of price)"]}
{"mi": "Piri", "gr": "name", "en": ["a male given name, equivalent to English Bill"]}
{"mi": "Ani", "gr": "name", "en": ["a female given name, equivalent to English Ann"]}
{"mi": "kete", "gr": "noun", "en": ["basket"]}
{"mi": "auau", "gr": "noun", "en": ["bark (of a dog)"]}
{"mi": "auau", "gr": "verb", "en": ["to bark"]}
{"mi": "auau", "gr": "noun", "en": ["frequency, rate"]}
{"mi": "auau", "gr": "verb", "en": ["to be frequent, recurring"]}
{"mi": "auau", "gr": "adv", "en": ["frequently, again and again"]}
{"mi": "pae", "gr": "noun", "en": ["shelf", "horizon", "perch", "mountain range", "area, region", "circumference", "gum (oral)"]}
{"mi": "ōi", "gr": "verb", "en": ["to shout"]}
{"mi": "ōi", "gr": "noun", "en": ["shout"]}
{"mi": "ōi", "gr": "noun", "en": ["grey-faced petrel", "sooty shearwater", "short-tailed shearwater"]}
{"mi": "ōi", "gr": "noun", "en": ["muck", "quicksand"]}
{"mi": "waro", "gr": "noun", "en": ["pit, chasm, abyss", "mine", "coal, charcoal", "carbon"]}
{"mi": "onika", "gr": "noun", "en": ["onyx"]}
{"mi": "hoka", "gr": "verb", "en": ["to soar, fly", "to lift; to hold aloft"]}
{"mi": "hoka", "gr": "verb", "en": ["to pierce", "to point or project sharply upwards", "to taper to a sharp point"]}
{"mi": "konene", "gr": "adj", "en": ["wandering, nomadic"]}
{"mi": "konene", "gr": "noun", "en": ["wanderer, wayfarer, drifter", "refugee, displaced person"]}
{"mi": "uruwhenua", "gr": "noun", "en": ["a passport (official document)"]}
{"mi": "taonga", "gr": "noun", "en": ["treasure", "property"]}
{"mi": "rangatiratanga", "gr": "noun", "en": ["chieftainship", "right to exercise authority", "kingdom", "self-determination", "independence"]}
{"mi": "tohunga", "gr": "noun", "en": ["A skilled person, an expert", "A priest, a healer"]}
{"mi": "mīti", "gr": "noun", "en": ["meat"]}
{"mi": "Rerehu", "gr": "name", "en": ["Antares, the brightest star in the constellation Scorpius"]}
{"mi": "kōura", "gr": "noun", "en": ["crayfish; lobster"]}
{"mi": "kōura", "gr": "noun", "en": ["gold"]}
{"mi": "pakanga", "gr": "noun", "en": ["war; battle"]}
{"mi": "pakanga", "gr": "verb", "en": ["to fight, to battle"]}
{"mi": "maitai", "gr": "adj", "en": ["good, beautiful, agreeable"]}
{"mi": "maitai", "gr": "adj", "en": ["foreign"]}
{"mi": "maitai", "gr": "noun", "en": ["iron", "metal"]}
{"mi": "mētara", "gr": "noun", "en": ["metal"]}
{"mi": "mētara", "gr": "noun", "en": ["medal"]}
{"mi": "karaka", "gr": "noun", "en": ["karaka (Corynocarpus laevigatus)", "orange"]}
{"mi": "karaka", "gr": "noun", "en": ["clock"]}
{"mi": "moeriki", "gr": "noun", "en": ["Dieffenbach's rail (†Gallirallus dieffenbachii)"]}
{"mi": "Rātapu", "gr": "noun", "en": ["Sunday"]}
{"mi": "huka", "gr": "noun", "en": ["snow, foam, froth, any white form of precipitation"]}
{"mi": "huka", "gr": "noun", "en": ["sugar"]}
{"mi": "panana", "gr": "noun", "en": ["banana"]}
{"mi": "pēke", "gr": "noun", "en": ["bank"]}
{"mi": "pēke", "gr": "noun", "en": ["bag, sack"]}
{"mi": "manawa", "gr": "noun", "en": ["belly, stomach", "heart (of a person)", "heart (seat of affections)", "breath", "mind", "spirit"]}
{"mi": "rūma", "gr": "noun", "en": ["room (of a building)"]}
{"mi": "kūkū", "gr": "noun", "en": ["pigeon"]}
{"mi": "tika", "gr": "verb", "en": ["straight, direct", "correct, true, lawful, proper"]}
{"mi": "tika", "gr": "noun", "en": ["directness", "truth, justice", "rights"]}
{"mi": "maika", "gr": "noun", "en": ["banana"]}
{"mi": "pukatea", "gr": "noun", "en": ["Laurelia novae-zelandiae,a tree ideal for canoe wood", "Pisonia grandis"]}
{"mi": "Hawaiki", "gr": "name", "en": ["Hawaiki, the legendary homeland of the Maori before their arrival at Aotearoa (New Zealand), and also the underworld."]}
{"mi": "tiriti", "gr": "noun", "en": ["street"]}
{"mi": "tiriti", "gr": "noun", "en": ["treaty"]}
{"mi": "aurere", "gr": "verb", "en": ["moan, groan"]}
{"mi": "Rēnata", "gr": "name", "en": ["a male given name"]}
{"mi": "pīkake", "gr": "noun", "en": ["peacock"]}
{"mi": "hune", "gr": "noun", "en": ["core of a breadfruit.", "pappus of reeds like raupo that disperse its achened seeds.", "plant pubescence", "young soft feathers of a bird"]}
{"mi": "rawa", "gr": "adj", "en": ["many, numerous"]}
{"mi": "rawa", "gr": "adv", "en": ["very, really, too"]}
{"mi": "rawa", "gr": "noun", "en": ["goods, property", "wealth"]}
{"mi": "Perū", "gr": "name", "en": ["Peru (a country in South America)"]}
{"mi": "kahawai", "gr": "noun", "en": ["kahawai (edible ocean fish)"]}
{"mi": "piupiu", "gr": "verb", "en": ["to swing or sway to-and-fro, to oscillate"]}
{"mi": "piupiu", "gr": "noun", "en": ["A grass skirt with long strands or fringes that sway and produce sound while the wearer dances."]}
{"mi": "piupiu", "gr": "noun", "en": ["Lomaria discolor", "Pneumanopteris pennigera", "Parablechnum procerum", "Parablechnum novae-zelandiae"]}
{"mi": "aute", "gr": "noun", "en": ["paper mulberry", "mulberry bark used to make clothes"]}
{"mi": "wharangi", "gr": "noun", "en": ["Melicope ternata"]}
{"mi": "kaitiaki", "gr": "noun", "en": ["guardian, trustee"]}
{"mi": "kaupapa", "gr": "noun", "en": ["level surface, floor, stage, platform, layer", "topic, policy, matter for discussion, plan, purpose, scheme, proposal, agenda, subject, programme, theme, issue, initiative", "raft", "main body of a cloak"]}
{"mi": "karakia", "gr": "verb", "en": ["to recite ritual chants or a prayer, to say grace, to pray"]}
{"mi": "karakia", "gr": "noun", "en": ["an incantation, ritual chant, spell (related to Maori traditions)", "a prayer, grace, blessing (related to introduced religions)"]}
{"mi": "mokopuna", "gr": "noun", "en": ["grandchild"]}
{"mi": "tukutuku", "gr": "verb", "en": ["to let go, down", "to get down", "to send", "to decorate with lattice-work"]}
{"mi": "tukutuku", "gr": "noun", "en": ["ornamental lattice-work", "grid"]}
{"mi": "rā", "gr": "noun", "en": ["sail (a piece of fabric attached to a boat)"]}
{"mi": "rā", "gr": "noun", "en": ["sun", "daytime, period of brightness in the morning and afternoon", "day, time cycle of 24 hours"]}
{"mi": "kangarū", "gr": "noun", "en": ["kangaroo"]}
{"mi": "Peti", "gr": "name", "en": ["a female given name, equivalent to English Betty, Betsy, and Bessie"]}
{"mi": "matangi", "gr": "noun", "en": ["wind", "breeze"]}
{"mi": "Matariki", "gr": "name", "en": ["The season, in late May or early June, when the Pleiades star cluster first rises, treated as the beginning of the new year by the Maori.", "The Pleiades star cluster"]}
{"mi": "kapa haka", "gr": "noun", "en": ["Māori performing arts group."]}
{"mi": "tāra", "gr": "noun", "en": ["dollar, especially a New Zealand dollar"]}
{"mi": "tūtae", "gr": "noun", "en": ["excrement, dung, feces"]}
{"mi": "rewarewa", "gr": "noun", "en": ["rewarewa (Knightia excelsa)"]}
{"mi": "motopaika", "gr": "noun", "en": ["motorcycle"]}
{"mi": "huarere", "gr": "noun", "en": ["weather"]}
{"mi": "motokā", "gr": "noun", "en": ["car, automobile"]}
{"mi": "tēneti", "gr": "noun", "en": ["tent"]}
{"mi": "iohere punga", "gr": "noun", "en": ["Achilles tendon"]}
{"mi": "taiaha", "gr": "noun", "en": ["taiaha"]}
{"mi": "aronga", "gr": "noun", "en": ["definition"]}
{"mi": "mīti hipi", "gr": "noun", "en": ["mutton, lamb"]}
{"mi": "mīti kau", "gr": "noun", "en": ["beef"]}
{"mi": "wehe atu", "gr": "verb", "en": ["to depart, to leave"]}
{"mi": "pōtitanga", "gr": "noun", "en": ["election"]}
{"mi": "hārewa", "gr": "verb", "en": ["to take off (of an aircraft)"]}
{"mi": "whawhai", "gr": "verb", "en": ["fight"]}
{"mi": "whawhai", "gr": "noun", "en": ["war"]}
{"mi": "tua-", "gr": "prefix", "en": ["prefixed to numerals 1 through 9 to produce an ordinal"]}
{"mi": "tūnga", "gr": "noun", "en": ["wound"]}
{"mi": "tūnga", "gr": "noun", "en": ["position", "rank"]}
{"mi": "tuanui", "gr": "noun", "en": ["roof"]}
{"mi": "wāhanga", "gr": "noun", "en": ["piece"]}
{"mi": "mōrearea", "gr": "adj", "en": ["dangerous"]}
{"mi": "hereumu", "gr": "noun", "en": ["an outdoor building, shed, etc set for cooking", "bakery"]}
{"mi": "Ānaru", "gr": "name", "en": ["a male given name, equivalent to English Andrew", "Andrew (biblical)"]}
{"mi": "Rāniera", "gr": "name", "en": ["a male given name, equivalent to English Daniel", "Daniel (biblical)"]}
{"mi": "Rāwiri", "gr": "name", "en": ["a male given name, equivalent to English David", "David (biblical)"]}
{"mi": "Hōri", "gr": "name", "en": ["a male given name, George"]}
{"mi": "Hēnare", "gr": "name", "en": ["a male given name, equivalent to English Henry"]}
{"mi": "Hēmi", "gr": "name", "en": ["a male given name, equivalent to English James", "James (biblical)"]}
{"mi": "Mikaere", "gr": "name", "en": ["a male given name, equivalent to English Michael", "Michael (Archangel)"]}
{"mi": "Pita", "gr": "name", "en": ["a male given name, equivalent to English Peter", "Peter (biblical)"]}
{"mi": "Petera", "gr": "name", "en": ["a male given name, equivalent to English Peter"]}
{"mi": "Piripi", "gr": "name", "en": ["a male given name, equivalent to English Philip", "Philip (biblical)"]}
{"mi": "Rihari", "gr": "name", "en": ["a male given name, equivalent to English Richard"]}
{"mi": "Rāpata", "gr": "name", "en": ["a male given name, equivalent to English Robert"]}
{"mi": "Tāmati", "gr": "name", "en": ["a male given name, equivalent to English Thomas", "Thomas (biblical)"]}
{"mi": "Wiremu", "gr": "name", "en": ["a male given name, equivalent to English William"]}
{"mi": "Matiu", "gr": "name", "en": ["Somes Island, an island in Wellington Harbour"]}
{"mi": "Matiu", "gr": "name", "en": ["a male given name, equivalent to English Matthew", "Matthew (biblical)"]}
{"mi": "Māka", "gr": "name", "en": ["a male given name, equivalent to English Mark", "Mark (biblical)"]}
{"mi": "Hēni", "gr": "name", "en": ["a female given name, equivalent to English Jane"]}
{"mi": "Pare", "gr": "name", "en": ["a female given name, equivalent to English Polly"]}
{"mi": "Irihāpeti", "gr": "name", "en": ["a female given name, equivalent to English Elizabeth"]}
{"mi": "Mākere", "gr": "name", "en": ["a female given name, equivalent to English Margaret"]}
{"mi": "Hoana", "gr": "name", "en": ["a female given name, equivalent to English Joan and Joanna", "Joanna (biblical)"]}
{"mi": "Ruiha", "gr": "name", "en": ["a female given name, equivalent to English Louisa"]}
{"mi": "Ruihi", "gr": "name", "en": ["a female given name, equivalent to English Lucy", "a female given name, equivalent to English Louise", "a male given name, equivalent to English Louis"]}
{"mi": "Erana", "gr": "name", "en": ["a female given name, equivalent to English Ellen"]}
{"mi": "Emere", "gr": "name", "en": ["a female given name, equivalent to English Emily"]}
{"mi": "Hārata", "gr": "name", "en": ["a female given name, equivalent to English Charlotte"]}
{"mi": "Kararaina", "gr": "name", "en": ["a female given name, equivalent to English Caroline"]}
{"mi": "Rīpeka", "gr": "name", "en": ["a female given name, equivalent to English Rebecca", "Rebekah (biblical)"]}
{"mi": "Wikitōria", "gr": "name", "en": ["a female given name, equivalent to English Victoria"]}
{"mi": "Hūhana", "gr": "name", "en": ["a female given name, equivalent to English Susan", "Susanna (biblical)"]}
{"mi": "Mereana", "gr": "name", "en": ["a female given name, equivalent to English Mary Ann"]}
{"mi": "Hāriata", "gr": "name", "en": ["a female given name, equivalent to English Harriet"]}
{"mi": "Riripeti", "gr": "name", "en": ["a female given name"]}
{"mi": "Māta", "gr": "name", "en": ["a female given name, equivalent to English Martha", "Martha (biblical)"]}
{"mi": "Maata", "gr": "name", "en": ["obsolete spelling of Māta"]}
{"mi": "Rutu", "gr": "name", "en": ["Ruth (biblical).", "a female given name, equivalent to English Ruth"]}
{"mi": "Ihipera", "gr": "name", "en": ["a female given name, equivalent to English Isabel and Isabella"]}
{"mi": "Pirihira", "gr": "name", "en": ["a female given name, equivalent to English Priscilla", "Priscilla (biblical)"]}
{"mi": "Riria", "gr": "name", "en": ["a female given name", "Lydia (biblical)"]}
{"mi": "Rāhera", "gr": "name", "en": ["a female given name, equivalent to English Rachel", "Rachel (biblical)"]}
{"mi": "Hoani", "gr": "name", "en": ["John (biblical)", "a male given name, equivalent to English John"]}
{"mi": "Hone", "gr": "name", "en": ["a male given name, equivalent to English John"]}
{"mi": "Hōne", "gr": "name", "en": ["a male given name, equivalent to English John", "a surname."]}
{"mi": "Hōhepa", "gr": "name", "en": ["a male given name, equivalent to English Joseph", "Joseph (biblical)"]}
{"mi": "Pāora", "gr": "name", "en": ["Paul (Christian apostle)", "a male given name, equivalent to English Paul"]}
{"mi": "Hāmuera", "gr": "name", "en": ["a male given name, equivalent to English Samuel", "Samuel (biblical)"]}
{"mi": "Hāmiora", "gr": "name", "en": ["a male given name, equivalent to English Samuel"]}
{"mi": "Tēpene", "gr": "name", "en": ["Stephen (biblical)", "a male given name, equivalent to English Stephen"]}
{"mi": "Tīpene", "gr": "name", "en": ["a male given name, equivalent to English Stephen"]}
{"mi": "Mohi", "gr": "name", "en": ["a male given name, equivalent to English Moses", "Moses (biblical)"]}
{"mi": "Tīmoti", "gr": "name", "en": ["a male given name, equivalent to English Timothy", "Timothy (biblical)"]}
{"mi": "Īhāia", "gr": "name", "en": ["a male given name, equivalent to English Isaiah", "Isaiah (biblical)"]}
{"mi": "Īhaka", "gr": "name", "en": ["a male given name, equivalent to English Isaac", "Isaac (biblical)"]}
{"mi": "Haimona", "gr": "name", "en": ["a male given name, Simon", "Simon (biblical)"]}
{"mi": "Himiona", "gr": "name", "en": ["a male given name, Simeon", "Simeon (biblical)"]}
{"mi": "Ārama", "gr": "name", "en": ["a male given name, equivalent to English Adam", "Adam (biblical)"]}
{"mi": "Eruera", "gr": "name", "en": ["a male given name, Edward"]}
{"mi": "Tame", "gr": "name", "en": ["a male given name, equivalent to English Tom"]}
{"mi": "Timi", "gr": "name", "en": ["a male given name, equivalent to English Jim and James"]}
{"mi": "Herewini", "gr": "name", "en": ["Selwyn (surname; place name)", "a male given name, Selwyn"]}
{"mi": "Hare", "gr": "name", "en": ["a male given name, Harry"]}
{"mi": "Mātene", "gr": "name", "en": ["a male given name, equivalent to English Martin"]}
{"mi": "tīpuna", "gr": "noun", "en": ["plural of tipuna"]}
{"mi": "Māoritanga", "gr": "noun", "en": ["Maoriness, Maoritanga, Maoridom"]}
{"mi": "-tanga", "gr": "suffix", "en": ["-ness, -ity, -ation (derived noun suffix)"]}
{"mi": "Komoro", "gr": "name", "en": ["Comoros (a country and group of islands in the Indian Ocean off the coast of East Africa)", "Comoros (an archipelago consisting of the Union of the Comoros and the French overseas department of Mayotte)"]}
{"mi": "hihi", "gr": "noun", "en": ["feeler, antenna"]}
{"mi": "tōāpapa", "gr": "noun", "en": ["gravity"]}
{"mi": "rironga", "gr": "noun", "en": ["asset, receipt, acquisition"]}
{"mi": "tahua", "gr": "noun", "en": ["field, enclosure, courtyard", "square, plaza", "expanse"]}
{"mi": "tahua", "gr": "noun", "en": ["heap", "menu", "fund, budget"]}
{"mi": "tahua", "gr": "noun", "en": ["stencil"]}
{"mi": "tatauranga", "gr": "noun", "en": ["statistics (mathematical science)"]}
{"mi": "Haki", "gr": "name", "en": ["a male given name, Jack"]}
{"mi": "Tāre", "gr": "name", "en": ["a male given name, equivalent to English Charles"]}
{"mi": "Wāta", "gr": "name", "en": ["a male given name, equivalent to English Walter"]}
{"mi": "Waata", "gr": "name", "en": ["a male given name, equivalent to English Walter: obsolete spelling of Wāta"]}
{"mi": "Maaka", "gr": "name", "en": ["a male given name, equivalent to English Mark: obsolete spelling of Māka"]}
{"mi": "Nīkora", "gr": "name", "en": ["a male given name, equivalent to English Nicholas"]}
{"mi": "Rewi", "gr": "name", "en": ["a male given name, equivalent to English Louis, Dave, and Levi"]}
{"mi": "Rōpata", "gr": "name", "en": ["a male given name, equivalent to English Robert"]}
{"mi": "Wī", "gr": "name", "en": ["a diminutive of the male given name Wiremu"]}
{"mi": "tumu", "gr": "noun", "en": ["foundation, base", "trunk, stump", "post, pole, stake"]}
{"mi": "peopeo", "gr": "adj", "en": ["slippery"]}
{"mi": "pāti", "gr": "noun", "en": ["political party"]}
{"mi": "tūhāhā", "gr": "adj", "en": ["unique, isolated"]}
{"mi": "tūhāhā", "gr": "noun", "en": ["individuality"]}
{"mi": "karaihe whakanui", "gr": "noun", "en": ["microscope"]}
{"mi": "karaihe", "gr": "noun", "en": ["glass (substance)"]}
{"mi": "oroi", "gr": "verb", "en": ["to hone, sharpen"]}
{"mi": "papahū", "gr": "verb", "en": ["to ignite, flare up, burst into flame"]}
{"mi": "hūtuki", "gr": "verb", "en": ["to bump"]}
{"mi": "tūhura", "gr": "verb", "en": ["investigate, disclose, discover"]}
{"mi": "whakatewhatewha", "gr": "verb", "en": ["to investigate, to look into", "to explore, to examine"]}
{"mi": "whakatewhatewha", "gr": "noun", "en": ["investigator", "inspector"]}
{"mi": "amokura", "gr": "noun", "en": ["red-tailed tropicbird"]}
{"mi": "hānara", "gr": "noun", "en": ["handlebar"]}
{"mi": "whio", "gr": "verb", "en": ["to whistle"]}
{"mi": "whio", "gr": "noun", "en": ["whistle"]}
{"mi": "whio", "gr": "noun", "en": ["blue duck"]}
{"mi": "whakanau", "gr": "verb", "en": ["to decline, refuse"]}
{"mi": "tētē", "gr": "noun", "en": ["frond, shoot", "chief", "armless, legless figurehead on a canoe"]}
{"mi": "pītau", "gr": "noun", "en": ["frond, shoot", "figurehead on a canoe with such a carving", "canoe with such a figurehead"]}
{"mi": "pākaha", "gr": "adj", "en": ["strict, severe"]}
{"mi": "otinga", "gr": "noun", "en": ["result, product, quotient"]}
{"mi": "hākinakina", "gr": "verb", "en": ["to play sport", "to enjoy oneself"]}
{"mi": "hākinakina", "gr": "noun", "en": ["sport, game"]}
{"mi": "whakaririka", "gr": "adj", "en": ["impassive"]}
{"mi": "whakaririka", "gr": "verb", "en": ["to ignore"]}
{"mi": "rārangi", "gr": "noun", "en": ["list", "line, row, queue", "clause, section"]}
{"mi": "rārangi", "gr": "verb", "en": ["list, arrange, itemise", "line up"]}
{"mi": "kaupapa ture", "gr": "noun", "en": ["constitution"]}
{"mi": "whiriwhiri", "gr": "verb", "en": ["to negotiate"]}
{"mi": "whiriwhiri", "gr": "verb", "en": ["to weave, to plait"]}
{"mi": "kaniawheatanga", "gr": "noun", "en": ["remorse"]}
{"mi": "kēkē", "gr": "noun", "en": ["armpit"]}
{"mi": "kēkē", "gr": "noun", "en": ["quack (of a duck)"]}
{"mi": "kēkē", "gr": "verb", "en": ["to quack (as a duck)"]}
{"mi": "kēkē", "gr": "noun", "en": ["distant, divergent"]}
{"mi": "urupū", "gr": "adj", "en": ["diligent"]}
{"mi": "tiā", "gr": "noun", "en": ["jar (cylindrical container)"]}
{"mi": "rehurehu", "gr": "adj", "en": ["obscure"]}
{"mi": "rehurehu", "gr": "verb", "en": ["to dim, to set"]}
{"mi": "ahua", "gr": "verb", "en": ["passive of ahu"]}
{"mi": "huatau", "gr": "adj", "en": ["elegant, graceful"]}
{"mi": "huatau", "gr": "noun", "en": ["comment, thought"]}
{"mi": "huatau", "gr": "verb", "en": ["to comment", "to realize"]}
{"mi": "kihirua", "gr": "verb", "en": ["to change one's mind"]}
{"mi": "tūmanako", "gr": "verb", "en": ["to expect, to hope"]}
{"mi": "tūnga waka", "gr": "noun", "en": ["parking lot"]}
{"mi": "mate hukapuri", "gr": "noun", "en": ["frostbite"]}
{"mi": "kikohunga", "gr": "noun", "en": ["gangrene"]}
{"mi": "mūhore", "gr": "adj", "en": ["futile, pointless", "unproductive"]}
{"mi": "ārahi", "gr": "verb", "en": ["to lead", "to escort", "to herald (as the appearance of a particular star signals the beginning of a particular month)"]}
{"mi": "tohumate", "gr": "noun", "en": ["symptom"]}
{"mi": "rū", "gr": "verb", "en": ["to shake, to agitate, to quiver", "to scatter, to sow"]}
{"mi": "rū", "gr": "noun", "en": ["shake, agitation", "earthquake, tremor"]}
{"mi": "rū", "gr": "adj", "en": ["seismic, quake"]}
{"mi": "tārere", "gr": "noun", "en": ["swing, hanging seat", "pendulum"]}
{"mi": "tārere", "gr": "verb", "en": ["to swing, to ride on a swing"]}
{"mi": "kaumātua", "gr": "noun", "en": ["elder"]}
{"mi": "īnanga", "gr": "noun", "en": ["alternative form of inanga"]}
{"mi": "īnaka", "gr": "noun", "en": ["alternative form of inanga (grass tree)"]}
{"mi": "āhuruhuru", "gr": "noun", "en": ["goatfish"]}
{"mi": "tikanga", "gr": "noun", "en": ["custom, convention, correct manner of doing things", "traditional lore and protocols", "reason, purpose", "meaning"]}
{"mi": "haere rā", "gr": "verb", "en": ["go, depart"]}
{"mi": "haere rā", "gr": "intj", "en": ["goodbye (said by one staying to one going)"]}
{"mi": "e noho rā", "gr": "intj", "en": ["goodbye (said by one going to one staying)"]}
{"mi": "tēnā koe", "gr": "intj", "en": ["hello (to one person)"]}
{"mi": "tēnā kōrua", "gr": "intj", "en": ["hello (to two people)"]}
{"mi": "tēnā koutou", "gr": "intj", "en": ["hello (to three or more people)"]}
{"mi": "tēnā", "gr": "det", "en": ["that (referring to something near the listener)"]}
{"mi": "tērā", "gr": "det", "en": ["that, yonder (referring to something distant from both speaker and listener)"]}
{"mi": "tēnei", "gr": "det", "en": ["this (referring to something near to the speaker)"]}
{"mi": "whakataurekareka", "gr": "verb", "en": ["To treat with contempt."]}
{"mi": "mahuru", "gr": "verb", "en": ["settled; calmed; soothed"]}
{"mi": "Aoraki", "gr": "name", "en": ["Mount Cook (tallest mountain in New Zealand)"]}
{"mi": "tōhi", "gr": "noun", "en": ["toast (bread)", "toast (salutation)"]}
{"mi": "tōhi", "gr": "verb", "en": ["toast (salutation)"]}
{"mi": "Initonīhia", "gr": "name", "en": ["Indonesia (a country and archipelago in maritime Southeast Asia)"]}
{"mi": "matimati", "gr": "noun", "en": ["finger, toe"]}
{"mi": "rino", "gr": "noun", "en": ["iron", "metal"]}
{"mi": "roki", "gr": "verb", "en": ["to secure, to keep intact", "to store, to contain", "to preserve", "to make calm, to make safe"]}
{"mi": "roki", "gr": "noun", "en": ["any enclosed area", "store"]}
{"mi": "roki", "gr": "adj", "en": ["calm, tranquil", "settled"]}
{"mi": "hapū", "gr": "adj", "en": ["pregnant"]}
{"mi": "hapū", "gr": "noun", "en": ["clan or subtribe"]}
{"mi": "kokomo", "gr": "verb", "en": ["to wear, to put on something"]}
{"mi": "kokomo", "gr": "noun", "en": ["shirt"]}
{"mi": "komiti", "gr": "verb", "en": ["to converge (of waters like rivers)", "to join, to merge, to mingle"]}
{"mi": "papamahi", "gr": "noun", "en": ["desk", "studio", "desktop"]}
{"mi": "pūmārō", "gr": "noun", "en": ["hardware"]}
{"mi": "pūrere", "gr": "noun", "en": ["ornamental feathers lining the sides (gunwales, near its strakes) of a waka"]}
{"mi": "pūrere", "gr": "noun", "en": ["appliance, device"]}
{"mi": "whakahohe", "gr": "verb", "en": ["to activate (to make something active)", "to enable (to activate a function of an electronic or mechanical device)"]}
{"mi": "pūmanamārō", "gr": "noun", "en": ["firmware"]}
{"mi": "pūnaha", "gr": "noun", "en": ["system"]}
{"mi": "āporo", "gr": "noun", "en": ["apple"]}
{"mi": "Ingarihi", "gr": "name", "en": ["English (nationality)"]}
{"mi": "kai-", "gr": "prefix", "en": ["A person that does an action indicated by the root verb; used to form an agent noun."]}
{"mi": "kaikōrero", "gr": "noun", "en": ["speaker (one who speaks)"]}
{"mi": "tiaki", "gr": "verb", "en": ["to guard or keep", "to protect, to save"]}
{"mi": "tiaki", "gr": "noun", "en": ["jack (playing card)"]}
{"mi": "tiaki", "gr": "noun", "en": ["cheque"]}
{"mi": "pōti", "gr": "verb", "en": ["vote, elect"]}
{"mi": "pirihimana", "gr": "noun", "en": ["police", "police officer, constable"]}
{"mi": "makariri", "gr": "verb", "en": ["cold"]}
{"mi": "makariri", "gr": "adj", "en": ["cold"]}
{"mi": "makariri", "gr": "noun", "en": ["cold, coldness", "winter", "frost"]}
{"mi": "pāngarau", "gr": "noun", "en": ["mathematics"]}
{"mi": "pūtaiao", "gr": "noun", "en": ["science"]}
{"mi": "whana", "gr": "verb", "en": ["to spring back, to recoil, to kick backwards", "to impel", "to rush, charge", "to travel, come, go", "to revolt, rebel, mutiny, rise up, riot"]}
{"mi": "whana", "gr": "noun", "en": ["archery bow", "jerking, recoiling, springing back", "revolt, rebellion, mutiny, uprising, riot, insurrection", "kick"]}
{"mi": "kapuni", "gr": "noun", "en": ["natural gas"]}
{"mi": "-hanga", "gr": "suffix", "en": ["-ness, -ity"]}
{"mi": "-ranga", "gr": "suffix", "en": ["-ness, -ity (derived noun suffix)"]}
{"mi": "mātauranga", "gr": "noun", "en": ["knowledge, wisdom", "study of", "education", "sage, scholar"]}
{"mi": "hauora", "gr": "noun", "en": ["health"]}
{"mi": "-anga", "gr": "suffix", "en": ["-ness, -ity (derived noun suffix)"]}
{"mi": "mahaki", "gr": "adj", "en": ["sick, ill, invalid"]}
{"mi": "mahaki", "gr": "noun", "en": ["sickness", "disease"]}
{"mi": "whakaraka", "gr": "verb", "en": ["to walk", "to step out"]}
{"mi": "wehi", "gr": "noun", "en": ["dread, fear"]}
{"mi": "wehi", "gr": "verb", "en": ["to be terrible", "to be afraid, fearful"]}
{"mi": "wehi", "gr": "adj", "en": ["terrific, awful"]}
{"mi": "nguru", "gr": "verb", "en": ["to rumble", "to grunt"]}
{"mi": "ipurangi", "gr": "noun", "en": ["source (of a stream)", "Internet"]}
{"mi": "papa mahi", "gr": "noun", "en": ["desktop"]}
{"mi": "Rakiura", "gr": "name", "en": ["Stewart Island"]}
{"mi": "Ihowā", "gr": "name", "en": ["Jehovah, the Lord"]}
{"mi": "mānuka", "gr": "noun", "en": ["Leptospermum scoparium, a shrub or small tree native to New Zealand and southeast Australia."]}
{"mi": "Rotorua", "gr": "name", "en": ["a city, the capital of Rotorua Lakes district, Bay of Plenty, North Island, New Zealand, on the southern shores of Lake Rotorua."]}
{"mi": "Wairarapa", "gr": "name", "en": ["Wairarapa (a lake in southern North Island, New Zealand)", "Wairarapa (a geographical region in southeastern North Island, New Zealand)"]}
{"mi": "Tauranga", "gr": "name", "en": ["Tauranga (a city in New Zealand)"]}
{"mi": "tāpu", "gr": "noun", "en": ["a tub, a vat"]}
{"mi": "terewhōno", "gr": "noun", "en": ["telephone"]}
{"mi": "terepōno", "gr": "noun", "en": ["telephone"]}
{"mi": "kawereo", "gr": "noun", "en": ["telephone"]}
{"mi": "waea", "gr": "verb", "en": ["to be weary"]}
{"mi": "waea", "gr": "verb", "en": ["to telephone, ring", "to send a telegram, wire"]}
{"mi": "waea", "gr": "noun", "en": ["telephone, phone", "telegram, telephone message, cable, wire"]}
{"mi": "kakape", "gr": "noun", "en": ["chopsticks"]}
{"mi": "miraka", "gr": "noun", "en": ["milk"]}
{"mi": "maramara", "gr": "adj", "en": ["miscellaneous"]}
{"mi": "maramara", "gr": "noun", "en": ["piece, bit, portion, chip, splinter."]}
{"mi": "whai", "gr": "noun", "en": ["stingray", "skate (fish of family Rajidae)"]}
{"mi": "whai", "gr": "noun", "en": ["pursuit"]}
{"mi": "whai", "gr": "verb", "en": ["to follow, chase, pursue", "to look for, search", "to proceed to a following action"]}
{"mi": "whai", "gr": "verb", "en": ["to possess, to have"]}
{"mi": "heke", "gr": "verb", "en": ["to descend, to fall", "to migrate", "to ebb", "to drip", "to surf", "to raft"]}
{"mi": "heke", "gr": "noun", "en": ["descent", "rafting, rafter", "surfing"]}
{"mi": "mākutu", "gr": "noun", "en": ["sorcery (magical power)", "curse (supernatural detriment)"]}
{"mi": "mākutu", "gr": "adj", "en": ["magical (relating to magic)", "supernatural (not of the usual)"]}
{"mi": "mātā", "gr": "noun", "en": ["heap, layer", "Carex secta", "longfin perch, pink maomao"]}
{"mi": "mātau", "gr": "noun", "en": ["knowledge, understanding"]}
{"mi": "mātau", "gr": "verb", "en": ["to know, to understand"]}
{"mi": "wharau", "gr": "verb", "en": ["to travel (particularly by sea)"]}
{"mi": "whakarongo", "gr": "verb", "en": ["to hear, to listen", "to taste", "to obey"]}
{"mi": "rewa", "gr": "verb", "en": ["to get under way, to depart, to set off", "to melt, to dissolve", "to float"]}
{"mi": "wharaunga", "gr": "noun", "en": ["voyage"]}
{"mi": "-nga", "gr": "suffix", "en": ["Nominalizing suffix used to form derivate nouns.", "a passive ending (used with only a few verbs ending in 'ai')"]}
{"mi": "kōhanga", "gr": "noun", "en": ["nest, nursery", "birthplace, cradle, homeland, stronghold, bastion"]}
{"mi": "mānu", "gr": "verb", "en": ["be floating, launch, afloat", "be flooded, overflow"]}
{"mi": "tuhinga", "gr": "noun", "en": ["writing, document, text, script"]}
{"mi": "tauoranga", "gr": "noun", "en": ["existence"]}
{"mi": "takoha", "gr": "noun", "en": ["pledge"]}
{"mi": "kōrero", "gr": "verb", "en": ["To speak, talk, address", "To read"]}
{"mi": "kōrero", "gr": "noun", "en": ["A story.", "A conversation.", "A discussion."]}
{"mi": "kāwana", "gr": "noun", "en": ["A governor."]}
{"mi": "kāwana", "gr": "verb", "en": ["To govern."]}
{"mi": "kāwanatanga", "gr": "noun", "en": ["Government."]}
{"mi": "rua tekau", "gr": "num", "en": ["twenty"]}
{"mi": "toru tekau", "gr": "num", "en": ["thirty"]}
{"mi": "whā tekau", "gr": "num", "en": ["forty"]}
{"mi": "rima tekau", "gr": "num", "en": ["fifty"]}
{"mi": "ono tekau", "gr": "num", "en": ["sixty"]}
{"mi": "whitu tekau", "gr": "num", "en": ["seventy"]}
{"mi": "waru tekau", "gr": "num", "en": ["eighty"]}
{"mi": "iwa tekau", "gr": "num", "en": ["ninety"]}
{"mi": "tekau mā tahi", "gr": "num", "en": ["eleven"]}
{"mi": "tekau mā rua", "gr": "num", "en": ["twelve"]}
{"mi": "tekau mā toru", "gr": "num", "en": ["thirteen"]}
{"mi": "tekau mā whā", "gr": "num", "en": ["fourteen"]}
{"mi": "tekau mā rima", "gr": "num", "en": ["fifteen"]}
{"mi": "tekau mā ono", "gr": "num", "en": ["sixteen"]}
{"mi": "tekau mā whitu", "gr": "num", "en": ["seventeen"]}
{"mi": "tekau mā waru", "gr": "num", "en": ["eighteen"]}
{"mi": "tekau mā iwa", "gr": "num", "en": ["nineteen"]}
{"mi": "rawe", "gr": "verb", "en": ["to wrap around, to coil around (of clothing, cords, ropes etc.)"]}
{"mi": "rawe", "gr": "adj", "en": ["tight"]}
{"mi": "rawe", "gr": "adj", "en": ["suitable, appropriate, becoming", "clever", "excellent"]}
{"mi": "kapekape", "gr": "verb", "en": ["to stir-fry"]}
{"mi": "kapekape", "gr": "noun", "en": ["stirfry"]}
{"mi": "kapekape", "gr": "noun", "en": ["northwest", "northwest wind"]}
{"mi": "mamae", "gr": "noun", "en": ["pain", "bullroarer"]}
{"mi": "mamae", "gr": "verb", "en": ["to be painful, to hurt"]}
{"mi": "runanga", "gr": "noun", "en": ["assembly, council"]}
{"mi": "urupā", "gr": "noun", "en": ["a burial ground or cemetery"]}
{"mi": "tapaono", "gr": "noun", "en": ["hexagon"]}
{"mi": "mātātoka", "gr": "noun", "en": ["fossil"]}
{"mi": "tāone", "gr": "noun", "en": ["town, city, urban area"]}
{"mi": "tāone", "gr": "verb", "en": ["to establish towns, lay out as a town"]}
{"mi": "kutikuti", "gr": "noun", "en": ["scissors, shears, clippers"]}
{"mi": "kutikuti", "gr": "verb", "en": ["To cut with scissors etc"]}
{"mi": "amio", "gr": "verb", "en": ["to wander"]}
{"mi": "whare herehere", "gr": "noun", "en": ["prison"]}
{"mi": "whare karakia", "gr": "noun", "en": ["a religious building: a church, a synagogue, a mosque, a house of prayer"]}
{"mi": "pākete", "gr": "noun", "en": ["pocket"]}
{"mi": "pākete", "gr": "noun", "en": ["packet"]}
{"mi": "pākete", "gr": "noun", "en": ["bucket"]}
{"mi": "tukituki", "gr": "verb", "en": ["to batter, to pound, to pulverize, to ram", "to demolish, to deconstruct"]}
{"mi": "tukituki", "gr": "noun", "en": ["pestle"]}
{"mi": "tikinare", "gr": "noun", "en": ["dictionary"]}
{"mi": "papakupu", "gr": "noun", "en": ["dictionary", "lexicon, vocabulary"]}
{"mi": "Airani", "gr": "name", "en": ["Ireland (a country in northwestern Europe)"]}
{"mi": "tatau", "gr": "verb", "en": ["to squeeze or wring out liquid"]}
{"mi": "tatau", "gr": "verb", "en": ["to count, to tally"]}
{"mi": "tatau", "gr": "noun", "en": ["number, tally", "count, score"]}
{"mi": "tatau", "gr": "verb", "en": ["to draw, to slide", "to shut a door"]}
{"mi": "tatau", "gr": "noun", "en": ["door"]}
{"mi": "hōiho uha", "gr": "noun", "en": ["a mare, a female horse"]}
{"mi": "hāte", "gr": "noun", "en": ["shirt", "hearts"]}
{"mi": "tupari", "gr": "noun", "en": ["palm-leaf fern"]}
{"mi": "mōrena", "gr": "intj", "en": ["good morning"]}
{"mi": "ata mārie", "gr": "intj", "en": ["good morning"]}
{"mi": "aihikirīmi", "gr": "noun", "en": ["ice cream"]}
{"mi": "kō-", "gr": "prefix", "en": ["Prefix added to a number of words, often without any obvious difference in meaning between the two words."]}
{"mi": "auē", "gr": "intj", "en": ["wow", "alas"]}
{"mi": "anuanu", "gr": "adj", "en": ["cold", "offensive, disgusting"]}
{"mi": "anuanu", "gr": "noun", "en": ["aversion"]}
{"mi": "pākaukau", "gr": "noun", "en": ["wing"]}
{"mi": "whāmere", "gr": "noun", "en": ["family, household"]}
{"mi": "konga", "gr": "noun", "en": ["fragment, piece", "charcoal, live coal"]}
{"mi": "Mihinare", "gr": "noun", "en": ["Anglican", "missionary"]}
{"mi": "kaimahi", "gr": "noun", "en": ["worker, employee"]}
{"mi": "heihei", "gr": "adj", "en": ["to be related to a chicken"]}
{"mi": "heihei", "gr": "noun", "en": ["chicken"]}
{"mi": "whakamaheni", "gr": "verb", "en": ["to polish, to burnish"]}
{"mi": "hopu", "gr": "verb", "en": ["to seize, catch, snatch", "to record (make an audio or video recording of)", "to detect"]}
{"mi": "hopu", "gr": "noun", "en": ["seizing, catching, snatching"]}
{"mi": "ngeru", "gr": "noun", "en": ["cat (Felis silvestris catus)"]}
{"mi": "hape", "gr": "adj", "en": ["club-footed, having clubfoot i.e. a foot that twists inward", "deformed, crooked", "distorted, unrelated"]}
{"mi": "aronga hōkaka", "gr": "noun", "en": ["sexual orientation"]}
{"mi": "aronga taera", "gr": "noun", "en": ["sexual orientation"]}
{"mi": "hōkaka", "gr": "noun", "en": ["desire, wish"]}
{"mi": "hōkaka", "gr": "verb", "en": ["to desire, to want, to yearn"]}
{"mi": "hōkakatanga", "gr": "noun", "en": ["sexual orientation, sexuality"]}
{"mi": "taera", "gr": "noun", "en": ["sexual desire"]}
{"mi": "taeratanga", "gr": "noun", "en": ["sexual orientation, sexuality"]}
{"mi": "pōkiha", "gr": "noun", "en": ["fox (animal in genus Vulpes)"]}
{"mi": "wuruhi", "gr": "noun", "en": ["wolf (Canis lupus)"]}
{"mi": "wuruwhi", "gr": "noun", "en": ["wolf (Canis lupus)"]}
{"mi": "anaterope", "gr": "noun", "en": ["antelope"]}
{"mi": "hepara", "gr": "noun", "en": ["shepherd; herdsman"]}
{"mi": "hepara", "gr": "verb", "en": ["to shepherd"]}
{"mi": "hepara", "gr": "noun", "en": ["zebra"]}
{"mi": "rēparo", "gr": "noun", "en": ["leopard (Panthera pardus)"]}
{"mi": "rēpara", "gr": "noun", "en": ["leopard (Panthera pardus)"]}
{"mi": "nanenane", "gr": "noun", "en": ["goat"]}
{"mi": "warapī", "gr": "noun", "en": ["wallaby"]}
{"mi": "hēki", "gr": "noun", "en": ["egg"]}
{"mi": "ngutu", "gr": "noun", "en": ["lip", "beak, bill", "mouth (of a cave, river, etc.)", "lip, rim (of a vessel)", "mouthpiece", "muzzle"]}
{"mi": "tā-", "gr": "prefix", "en": ["forms causative verbs"]}
{"mi": "mangamangaiatua", "gr": "intj", "en": ["abracadabra"]}
{"mi": "mārenatanga", "gr": "noun", "en": ["marriage"]}
{"mi": "mārena", "gr": "verb", "en": ["to marry"]}
{"mi": "mārena", "gr": "noun", "en": ["marriage, wedding"]}
{"mi": "rīngi mārena", "gr": "noun", "en": ["wedding ring"]}
{"mi": "wahine mārena", "gr": "noun", "en": ["bride, married woman"]}
{"mi": "whakawahine", "gr": "noun", "en": ["a person assigned male at birth who lives and behaves as a female socially; literally \\"to become a woman\\""]}
{"mi": "whakawahine", "gr": "verb", "en": ["to become a woman"]}
{"mi": "whakawāhine", "gr": "noun", "en": ["plural of whakawahine"]}
{"mi": "iaia", "gr": "noun", "en": ["blood vessels, veins", "sinews; tendons"]}
{"mi": "whakamā", "gr": "verb", "en": ["be ashamed, shy, bashful, embarrassed"]}
{"mi": "whakamā", "gr": "adj", "en": ["ashamed, shy, bashful, embarrassed"]}
{"mi": "whakamā", "gr": "noun", "en": ["shame, embarrassment"]}
{"mi": "tohi", "gr": "verb", "en": ["to cut or split something off, especially with a blade", "to chisel in a similar manner", "to separate", "to divide"]}
{"mi": "tohi", "gr": "noun", "en": ["boiling vessel for cooking by placing heated stones in water"]}
{"mi": "tohi", "gr": "verb", "en": ["to boil using such a vessel"]}
{"mi": "purupuru", "gr": "noun", "en": ["caulk"]}
{"mi": "purupuru", "gr": "verb", "en": ["to stuff, to fill in", "to suppress"]}
{"mi": "wahawaha", "gr": "verb", "en": ["to carry on one's back"]}
{"mi": "koutu", "gr": "noun", "en": ["promontory, point (of land)"]}
{"mi": "koutu", "gr": "verb", "en": ["to project", "to stand out, to be conspicuous"]}
{"mi": "koutu", "gr": "verb", "en": ["to dip into"]}
{"mi": "manako", "gr": "verb", "en": ["to long for, to yearn", "to miss", "to desire, to want", "to like"]}
{"mi": "manako", "gr": "noun", "en": ["desire, wish, want", "longing, yearning", "anxiety"]}
{"mi": "hakari", "gr": "noun", "en": ["roe, yolk – also alternative form of hākari"]}
{"mi": "takiwātanga", "gr": "noun", "en": ["autism"]}
{"mi": "pīata", "gr": "verb", "en": ["to be shiny, bright, polished, glossy"]}
{"mi": "pīata", "gr": "noun", "en": ["brightness, shine, gloss finish"]}
{"mi": "pakini", "gr": "noun", "en": ["nick (small cut in a surface)", "apostrophe (the character ’)"]}
{"mi": "pakini", "gr": "verb", "en": ["to pinch (to squeeze a small amount of skin)", "to nick (to make a nick or notch in)"]}
{"mi": "tūpara", "gr": "noun", "en": ["double-barrelled shotgun"]}
{"mi": "Pakangakite", "gr": "name", "en": ["Warsaw"]}
{"mi": "ariari", "gr": "adj", "en": ["clear, visible", "gleaming", "undisturbed", "bare, stripped (of trees etc)"]}
{"mi": "āniwaniwa", "gr": "noun", "en": ["rainbow"]}
{"mi": "angengi", "gr": "noun", "en": ["a type of fish"]}
{"mi": "anuhe", "gr": "noun", "en": ["caterpillar of the convolvulus hawk-moth (Agrius convolvuli)"]}
{"mi": "hīoi", "gr": "verb", "en": ["be a glossy green"]}
{"mi": "hīoi", "gr": "noun", "en": ["New Zealand mint (Mentha cunninghamii)", "New Zealand pipit (Anthus novaeseelandiae)"]}
{"mi": "hiriwa", "gr": "noun", "en": ["silver"]}
{"mi": "pīwakawaka", "gr": "noun", "en": ["New Zealand fantail (Rhipidura fuliginosa)"]}
{"mi": "pīokeoke", "gr": "noun", "en": ["spiny dogfish (Squalus acanthias)", "spotted estuary smooth-hound (Mustelus lenticulatus)"]}
{"mi": "poporokaiwhiri", "gr": "noun", "en": ["pigeonwood (Hedycarya arborea)"]}
{"mi": "tīeke", "gr": "noun", "en": ["saddleback (Philesturnus spp.)"]}
{"mi": "parāoa", "gr": "noun", "en": ["sperm whale (Physeter macrocephalus)", "whale", "whalebone", "weapon made of whalebone"]}
{"mi": "parāoa", "gr": "noun", "en": ["flour", "bread"]}
{"mi": "pāmu wēra", "gr": "noun", "en": ["sperm whale (Physeter macrocephalus)"]}
{"mi": "arewhana", "gr": "noun", "en": ["elephant"]}
{"mi": "raiona", "gr": "noun", "en": ["lion (big cat)"]}
{"mi": "īkara", "gr": "noun", "en": ["eagle (bird of prey)"]}
{"mi": "whakapakotanga", "gr": "noun", "en": ["banishment", "exile"]}
{"mi": "kāinga", "gr": "noun", "en": ["The burning (of a fire)."]}
{"mi": "kāinga", "gr": "noun", "en": ["A place of residence or habitation.", "An unfortified place of residence or village (in contrast to a pā, which is fortified).", "A country.", "A home."]}
{"mi": "-inga", "gr": "suffix", "en": ["-ness, -ity (derived noun suffix)"]}
{"mi": "kūmara", "gr": "noun", "en": ["A sweet potato"]}
{"mi": "takatakahi", "gr": "verb", "en": ["to trample", "to disobey"]}
{"mi": "ahakoa", "gr": "conj", "en": ["although, notwithstanding, even though, nevertheless"]}
{"mi": "ahuwhenua", "gr": "adj", "en": ["industrious, hard-working"]}
{"mi": "ahuwhenua", "gr": "noun", "en": ["agriculture"]}
{"mi": "roanga", "gr": "noun", "en": ["continuation"]}
{"mi": "unahiroa", "gr": "noun", "en": ["comet", "will o' the wisp"]}
{"mi": "taikaha", "gr": "adj", "en": ["strict, severe", "violent"]}
{"mi": "temepara", "gr": "noun", "en": ["temple"]}
{"mi": "paihikara", "gr": "noun", "en": ["bicycle"]}
{"mi": "tauwhere", "gr": "verb", "en": ["to bind"]}
{"mi": "uraura", "gr": "noun", "en": ["krill (small marine crustacean)", "whalefeed, Munida gregaria", "shrimp (decapod crustacean)"]}
{"mi": "uraura", "gr": "adj", "en": ["reddened, flushed"]}
{"mi": "kōuraura", "gr": "noun", "en": ["shrimp (decapod crustacean)"]}
{"mi": "kōuraura", "gr": "verb", "en": ["to be golden brown"]}
{"mi": "āpiha", "gr": "noun", "en": ["officer, official"]}
{"mi": "kohuke", "gr": "noun", "en": ["mineral"]}
{"mi": "matikuku", "gr": "noun", "en": ["nail (of the fingers and toes)", "hoof", "claw, talon (of birds etc)"]}
{"mi": "pikopiko", "gr": "adj", "en": ["winding, meandering, crooked", "tender, young", "unripe"]}
{"mi": "pikopiko", "gr": "noun", "en": ["fiddlehead, young fern frond (in general)"]}
{"mi": "nohu", "gr": "noun", "en": ["deepwater burrfish (Allomycterus pilatus)"]}
{"mi": "Kaikōura", "gr": "name", "en": ["a town on the east coast of the South Island of New Zealand"]}
{"mi": "Waitangi", "gr": "name", "en": ["a locality in the Bay of Islands on the North Island of New Zealand", "a town on the west coast of the Chatham Islands, New Zealand"]}
{"mi": "Paraparaumu", "gr": "name", "en": ["a town in Kapiti Coast district, Wellington region, New Zealand."]}
{"mi": "Whinirana", "gr": "name", "en": ["Finland (a country in Northern Europe)"]}
{"mi": "Whinarana", "gr": "name", "en": ["alternative form of Whinirana"]}
{"mi": "whara", "gr": "noun", "en": ["Any of the several plants in the families Asteliaceae and Xanthorrhoeaceae."]}
{"mi": "onehunga", "gr": "noun", "en": ["alluvial soil", "beach composed of mixed sand and mud"]}
{"mi": "kaho", "gr": "noun", "en": ["crossbar; crossbeam", "roof batten", "fence rail", "horizontal wall batten in a meeting house"]}
{"mi": "takitaki", "gr": "noun", "en": ["fence, palisade, barricade, stockade"]}
{"mi": "whau", "gr": "noun", "en": ["corkwood, Entelea arborescens", "five-finger, Pseudopanax arboreus"]}
{"mi": "moutere", "gr": "noun", "en": ["island"]}
{"mi": "Aranga", "gr": "name", "en": ["(Te ~) Easter"]}
{"mi": "āngi", "gr": "noun", "en": ["air"]}
{"mi": "runga", "gr": "adv", "en": ["upwards, up"]}
{"mi": "runga", "gr": "prep", "en": ["above, over, upon"]}
{"mi": "takatāpui", "gr": "noun", "en": ["close friend of the same gender", "gay person. Usually used in the context of LGBT Māori people"]}
{"mi": "māhū", "gr": "verb", "en": ["to be gentle"]}
{"mi": "tangata ira tāne", "gr": "noun", "en": ["a person assigned female at birth who behave as a man"]}
{"mi": "hinehī", "gr": "noun", "en": ["Someone assigned male at birth who has a female gender identity"]}
{"mi": "pāpaka", "gr": "noun", "en": ["paddle crab, Ovalipes catharus", "crabs in general"]}
{"mi": "pāpaka", "gr": "noun", "en": ["scab, eczema"]}
{"mi": "puia", "gr": "noun", "en": ["volcano", "geyser, hot spring"]}
{"mi": "Īemene", "gr": "name", "en": ["Yemen (a country in West Asia in the Middle East)"]}
{"mi": "mauī", "gr": "adj", "en": ["left (the west side of the body when one is facing north)"]}
{"mi": "mauī", "gr": "adv", "en": ["on the left side"]}
{"mi": "whakamauī", "gr": "adv", "en": ["towards the left"]}
{"mi": "pūtāhono", "gr": "noun", "en": ["driver (program acting as interface between an application and hardware)"]}
{"mi": "tāhono", "gr": "noun", "en": ["interface"]}
{"mi": "tāhono", "gr": "verb", "en": ["to connect"]}
{"mi": "atanga", "gr": "noun", "en": ["interface"]}
{"mi": "atekōkiri", "gr": "noun", "en": ["driver (program acting as interface between an application and hardware)"]}
{"mi": "pūmanawa", "gr": "noun", "en": ["natural talent", "software"]}
{"mi": "pūmanawa", "gr": "verb", "en": ["to draw a long breath", "talented, gifted"]}
{"mi": "whakatōpū kongakonga", "gr": "noun", "en": ["defragmentation"]}
{"mi": "whakatōpū kongakonga", "gr": "verb", "en": ["to defragment"]}
{"mi": "whakatōpū", "gr": "noun", "en": ["amalgamation, consolidation"]}
{"mi": "whakatōpū", "gr": "verb", "en": ["to amalgamate, consolidate, assemble (in a group)"]}
{"mi": "tōpū", "gr": "verb", "en": ["to be assembled, consolidated in a group"]}
{"mi": "kongakonga", "gr": "noun", "en": ["shrapnel, crumb", "fragment"]}
{"mi": "kongakonga", "gr": "verb", "en": ["to be crumbled", "to be fragmented"]}
{"mi": "kongakonga", "gr": "adj", "en": ["insignificant"]}
{"mi": "makere", "gr": "verb", "en": ["to fall, to descend", "to dispose", "to drop out of an event (such as school)"]}
{"mi": "parakuihi", "gr": "noun", "en": ["breakfast"]}
{"mi": "parakuihi", "gr": "verb", "en": ["to have breakfast"]}
{"mi": "pāreti", "gr": "noun", "en": ["porridge"]}
{"mi": "tūī", "gr": "noun", "en": ["tui (Prosthemadera novaeseelandiae)"]}
{"mi": "whetū", "gr": "noun", "en": ["star (luminous celestial body)"]}
{"mi": "awatea", "gr": "noun", "en": ["daylight"]}
{"mi": "raino", "gr": "noun", "en": ["rhino"]}
{"mi": "koekoe", "gr": "verb", "en": ["to squeak, scream, squawk or cry"]}
{"mi": "miha", "gr": "noun", "en": ["a whale calf"]}
{"mi": "miha", "gr": "noun", "en": ["young bracken fronds"]}
{"mi": "haika", "gr": "noun", "en": ["anchor"]}
{"mi": "haika", "gr": "verb", "en": ["to anchor"]}
{"mi": "āwhā", "gr": "noun", "en": ["gale, storm, hurricane, any strong winds", "heavy or torrential rain"]}
{"mi": "tai-", "gr": "prefix", "en": ["prefix indicating a qualifying trait or force"]}
{"mi": "haeremai", "gr": "verb", "en": ["alternative form of haere mai"]}
{"mi": "haeremai", "gr": "intj", "en": ["alternative form of haere mai"]}
{"mi": "hahu", "gr": "verb", "en": ["to disinter", "to exhume"]}
{"mi": "tētahi", "gr": "article", "en": ["a, an, a particular: singular indefinite article"]}
{"mi": "māhina", "gr": "noun", "en": ["moon"]}
{"mi": "tūmau", "gr": "verb", "en": ["to be fixed, constant", "to serve"]}
{"mi": "tūmau", "gr": "noun", "en": ["servant"]}
{"mi": "aitua", "gr": "noun", "en": ["accident, bad luck"]}
{"mi": "Hingapoa", "gr": "name", "en": ["Singapore (an island and city-state in Southeast Asia, located off the southernmost tip of the Malay Peninsula; a former British crown colony and state of Malaysia (1963-1965))"]}
{"mi": "pōpō", "gr": "verb", "en": ["to knead", "to stir", "to pat, to stroke gently with the hand"]}
{"mi": "kahika", "gr": "noun", "en": ["synonym of kahikatea", "Malay apple"]}
{"mi": "karoro", "gr": "noun", "en": ["black-backed gull (Larus dominicanus)"]}
{"mi": "poroporo", "gr": "noun", "en": ["The plant Solanum aviculare."]}
{"mi": "ka pai", "gr": "phrase", "en": ["good", "serves (you) right"]}
{"mi": "Kirihimete", "gr": "name", "en": ["Christmas"]}
{"mi": "Ōtautahi", "gr": "name", "en": ["Christchurch (a city in New Zealand)"]}
{"mi": "Tāmaki Makaurau", "gr": "name", "en": ["Auckland (a city in New Zealand)"]}
{"mi": "Te Whanganui-a-Tara", "gr": "name", "en": ["Wellington (the capital city of New Zealand)"]}
{"mi": "Tāmaki Makau Rau", "gr": "name", "en": ["alternative form of Tāmaki Makaurau"]}
{"mi": "Kirikiriroa", "gr": "name", "en": ["Hamilton (a city in New Zealand)"]}
{"mi": "Te Papa-i-Oea", "gr": "name", "en": ["Palmerston North (a city in New Zealand)"]}
{"mi": "Tūranga-nui-a-Kiwa", "gr": "name", "en": ["Gisborne (a city in New Zealand)"]}
{"mi": "Ahuriri", "gr": "name", "en": ["Napier (a city in New Zealand)"]}
{"mi": "Waiharakeke", "gr": "name", "en": ["Blenheim (a city in New Zealand)"]}
{"mi": "Whakatū", "gr": "name", "en": ["Nelson (a city in New Zealand)"]}
{"mi": "Whangārei", "gr": "name", "en": ["Whangarei (a city in New Zealand)"]}
{"mi": "Te Rotorua-nui-a-Kahumatamomoe", "gr": "name", "en": ["Rotorua (a city in New Zealand)"]}
{"mi": "Ngāmotu", "gr": "name", "en": ["New Plymouth (a city in New Zealand)"]}
{"mi": "Ōtepoti", "gr": "name", "en": ["Dunedin (a city in New Zealand)"]}
{"mi": "Waihōpai", "gr": "name", "en": ["Invercargill (a city in New Zealand)"]}
{"mi": "Tāhuna", "gr": "name", "en": ["Queenstown (a city in New Zealand)"]}
{"mi": "Heretaunga", "gr": "name", "en": ["Hastings (a city in New Zealand)"]}
{"mi": "Āwhekenetāna", "gr": "name", "en": ["Afghanistan (a landlocked country between Central Asia and South Asia)"]}
{"mi": "Anakora", "gr": "name", "en": ["Angola (a country in Southern Africa)"]}
{"mi": "Āketina", "gr": "name", "en": ["Argentina (a country in South America)"]}
{"mi": "Pākaratēhi", "gr": "name", "en": ["Bangladesh (a country in South Asia)"]}
{"mi": "Poriwia", "gr": "name", "en": ["Bolivia (a country in South America)"]}
{"mi": "Pōngia-Herekōmina", "gr": "name", "en": ["Bosnia and Herzegovina (a country on the Balkan Peninsula in Southeastern Europe)"]}
{"mi": "Parīhi", "gr": "name", "en": ["Brazil (a large Portuguese-speaking country in South America)"]}
{"mi": "Poronai", "gr": "name", "en": ["Brunei (a country in Southeast Asia)"]}
{"mi": "Kamapōtia", "gr": "name", "en": ["Cambodia (a country in Asia)"]}
{"mi": "Kānata", "gr": "name", "en": ["Canada (a country in North America)"]}
{"mi": "Kēpa Weriti", "gr": "name", "en": ["Cape Verde (a country in Africa)"]}
{"mi": "Hiri", "gr": "name", "en": ["Chile (a country in South America)"]}
{"mi": "Koromōpia", "gr": "name", "en": ["Colombia (a country in South America)"]}
{"mi": "Tīekia", "gr": "name", "en": ["Czechia, Czech Republic (a country in Central Europe)"]}
{"mi": "Ekuatoa", "gr": "name", "en": ["Ecuador (a country in South America)"]}
{"mi": "Kini Ekuatoria", "gr": "name", "en": ["Equatorial Guinea (a country in Central Africa)"]}
{"mi": "Kāna", "gr": "name", "en": ["Ghana (a country in West Africa)"]}
{"mi": "Karapōnia", "gr": "name", "en": ["California (the most populous state of the United States)"]}
{"mi": "Kini Pihō", "gr": "name", "en": ["Guinea-Bissau (a country in West Africa)"]}
{"mi": "Īnia", "gr": "name", "en": ["India (a country in South Asia)"]}
{"mi": "Pearīni", "gr": "name", "en": ["Berlin (the capital of Germany)"]}
{"mi": "Parī", "gr": "name", "en": ["Paris (the capital of France)"]}
{"mi": "Kānapera", "gr": "name", "en": ["Canberra (the capital city of Australia; located in the Australian Capital Territory)"]}
{"mi": "Mohikau", "gr": "name", "en": ["Moscow (the capital of Russia)"]}
{"mi": "Ngāti", "gr": "noun", "en": ["Prefix for an iwi or hapū; tribal group."]}
{"mi": "hīti", "gr": "noun", "en": ["sheet, bedsheet"]}
{"mi": "Reipa", "gr": "name", "en": ["Labour (New Zealand Labour Party)"]}
{"mi": "Nāhinara", "gr": "name", "en": ["National (New Zealand National Party)"]}
{"mi": "rōpū", "gr": "noun", "en": ["An organized group of people; group, party, organisation, committee, company, gang, association, entourage, etc.", "category"]}
{"mi": "Rōpū Reipa", "gr": "name", "en": ["Labour Party"]}
{"mi": "Rōpū Nāhinara", "gr": "name", "en": ["National Party"]}
{"mi": "tōrangapū", "gr": "noun", "en": ["politics"]}
{"mi": "tōrangapū", "gr": "adj", "en": ["political"]}
{"mi": "rōpū tōrangapū", "gr": "noun", "en": ["political party"]}
{"mi": "mana tōrangapū", "gr": "noun", "en": ["political power"]}
{"mi": "Rōpū Kākāriki", "gr": "name", "en": ["Green Party"]}
{"mi": "kākāriki", "gr": "noun", "en": ["a New Zealand parakeet of genus Cyanoramphus", "green, colour of said parakeet", "a green species of gecko", "cantaloupe"]}
{"mi": "kākāriki", "gr": "verb", "en": ["to become green"]}
{"mi": "kākāriki", "gr": "adj", "en": ["green"]}
{"mi": "Manei", "gr": "name", "en": ["alternative form of Mane"]}
{"mi": "Tūrei", "gr": "name", "en": ["Tuesday (day of the week)"]}
{"mi": "Wenerei", "gr": "name", "en": ["Wednesday"]}
{"mi": "Tāite", "gr": "name", "en": ["Thursday"]}
{"mi": "Hātarei", "gr": "noun", "en": ["Saturday"]}
{"mi": "mutunga", "gr": "noun", "en": ["end; finish; conclusion"]}
{"mi": "mutunga wiki", "gr": "noun", "en": ["weekend"]}
{"mi": "ake nei", "gr": "particle", "en": ["Indicates an expression is related to a future time."]}
{"mi": "whakawhanaungatanga", "gr": "noun", "en": ["The process of establishing relationships."]}
{"mi": "whanaunga", "gr": "noun", "en": ["familial relative"]}
{"mi": "whanaungatanga", "gr": "noun", "en": ["close relationship"]}
{"mi": "pamakaranete", "gr": "noun", "en": ["pomegranate (tree and fruit)"]}
{"mi": "karakotaera", "gr": "noun", "en": ["crocodile"]}
{"mi": "mokonui", "gr": "noun", "en": ["dinosaur"]}
{"mi": "mokomoko", "gr": "noun", "en": ["gecko", "lizard"]}
{"mi": "kaki roa", "gr": "noun", "en": ["giraffe"]}
{"mi": "maki nui", "gr": "noun", "en": ["gorilla"]}
{"mi": "iuana", "gr": "noun", "en": ["iguana"]}
{"mi": "huripari", "gr": "noun", "en": ["hurricane"]}
{"mi": "hunga whakaruru", "gr": "noun", "en": ["refugee"]}
{"mi": "rautupu", "gr": "noun", "en": ["thunderstorm"]}
{"mi": "penapena", "gr": "verb", "en": ["to save up (accumulate money for a specific purpose)"]}
{"mi": "uwhi", "gr": "noun", "en": ["yam; Dioscorea alata"]}
{"mi": "uwhi", "gr": "verb", "en": ["to spread over, to cover"]}
{"mi": "Poihākena", "gr": "name", "en": ["Sydney, Port Jackson (the capital of New South Wales, Australia)"]}
{"mi": "Piripane", "gr": "name", "en": ["Brisbane (the capital of Queensland, Australia)"]}
{"mi": "Poipiripi", "gr": "name", "en": ["Melbourne, Port Philip (the capital of Victoria, Australia)"]}
{"mi": "Niukāhera", "gr": "name", "en": ["Newcastle (a city in New South Wales, Australia)", "Any other city called Newcastle"]}
{"mi": "rāhuitanga", "gr": "noun", "en": ["lockdown (confinement of people as a security measure)"]}
{"mi": "rāhui", "gr": "noun", "en": ["restriction of access to a place (as a form of taboo)"]}
{"mi": "rāhui", "gr": "verb", "en": ["be reserved, be restricted"]}
{"mi": "rāhui", "gr": "noun", "en": ["bundle", "flock, herd, mob, swarm, cluster"]}
{"mi": "mea ngaro", "gr": "noun", "en": ["mystery"]}
{"mi": "pirikoko", "gr": "noun", "en": ["mystery"]}
{"mi": "motomoto", "gr": "noun", "en": ["boxing, combat sport involving punching"]}
{"mi": "kāhu", "gr": "noun", "en": ["swamp harrier (Circus approximans), a species of harrier hawk"]}
{"mi": "whao", "gr": "noun", "en": ["chisel", "any iron tool", "nail (metal fastener)"]}
{"mi": "whao", "gr": "verb", "en": ["to chisel out"]}
{"mi": "whao", "gr": "verb", "en": ["to go into; to enter", "to put into; to fill"]}
{"mi": "makura", "gr": "noun", "en": ["any member of the species Carex secta of sedges endemic to New Zealand"]}
{"mi": "takakaha", "gr": "noun", "en": ["tibia, shinbone"]}
{"mi": "mamao", "gr": "adj", "en": ["far, distant, remote"]}
{"mi": "mamao", "gr": "noun", "en": ["distance"]}
{"mi": "Korana", "gr": "name", "en": ["Golan Heights (a region of Syria)"]}
{"mi": "pīhopa", "gr": "noun", "en": ["bishop"]}
{"mi": "raupō", "gr": "noun", "en": ["Typha orientalis; bulrush"]}
{"mi": "Te Moana-a-Toi", "gr": "name", "en": ["Bay of Plenty (a sea and bay of the Bay of Plenty Region, North Island, New Zealand)", "Bay of Plenty (an administrative region of the North Island, New Zealand, surrounding the eponymous bay)"]}
{"mi": "Toi", "gr": "name", "en": ["a male given name, Toi, from Polynesian"]}
{"mi": "tūāuri", "gr": "noun", "en": ["indigo"]}
{"mi": "waiporoporo", "gr": "noun", "en": ["purple"]}
{"mi": "parauri", "gr": "adj", "en": ["dark (of skin colour)"]}
{"mi": "parauri", "gr": "noun", "en": ["brown"]}
{"mi": "kikorangi", "gr": "noun", "en": ["light blue", "sky blue"]}
{"mi": "māwhero", "gr": "noun", "en": ["pink (colour)"]}
{"mi": "kahurangi", "gr": "adj", "en": ["blue", "precious"]}
{"mi": "kahurangi", "gr": "noun", "en": ["dark blue"]}
{"mi": "raumanga", "gr": "noun", "en": ["hound's tongue fern (Microsorum pustulatum)"]}
{"mi": "raumanga", "gr": "noun", "en": ["kitchen bench"]}
{"mi": "paihamu", "gr": "noun", "en": ["brushtail possum (Trichosurus vulpecula)"]}
{"mi": "roha", "gr": "verb", "en": ["to spread out, to extend out, to stretch out", "to expand"]}
{"mi": "roha", "gr": "adj", "en": ["expansive"]}
{"mi": "inumia", "gr": "verb", "en": ["passive of inu"]}
{"mi": "Irāia", "gr": "name", "en": ["Elijah (biblical character).", "a male given name originating from the Bible"]}
{"mi": "waikura", "gr": "noun", "en": ["rust"]}
{"mi": "Peraha", "gr": "noun", "en": ["Perth (the capital of Western Australia, Australia)"]}
{"mi": "Ātaraita", "gr": "name", "en": ["Adelaide (the capital of South Australia, Australia)"]}
{"mi": "koāra", "gr": "noun", "en": ["koala"]}
{"mi": "pepeha", "gr": "noun", "en": ["an introductory speech detailing one's ancestry", "proverb; motto; slogan"]}
{"mi": "tupua", "gr": "adj", "en": ["strange"]}
{"mi": "tupua", "gr": "noun", "en": ["demon", "foreigner", "strange being"]}
{"mi": "tauiwi", "gr": "noun", "en": ["foreigner, European, non-Māori, colonist", "person coming from afar", "gentile, heathen", "outsider"]}
{"mi": "Papua Nūkini", "gr": "noun", "en": ["Papua New Guinea (a country in Oceania)"]}
{"mi": "Whītī", "gr": "name", "en": ["Fiji (a country and archipelago of over 300 islands in Melanesia in Oceania)", "Fijian"]}
{"mi": "kārohirohi", "gr": "verb", "en": ["to shimmer (of light or heat waves)"]}
{"mi": "ārohirohi", "gr": "adj", "en": ["shimmering, glistening"]}
{"mi": "ārohirohi", "gr": "noun", "en": ["shimmering heat", "feeling, sense"]}
{"mi": "ārohirohi", "gr": "verb", "en": ["to hover, quiver or shimmer", "to turn round and round; to feel giddiness."]}
{"mi": "kaitiakitanga", "gr": "noun", "en": ["guardianship; trusteeship", "trust"]}
{"mi": "ka kite", "gr": "phrase", "en": ["alternative form of ka kite anō"]}
{"mi": "ka kite anō", "gr": "phrase", "en": ["I'll see you again."]}
{"mi": "whakarangona", "gr": "verb", "en": ["passive of whakarongo; to be listened to"]}
{"mi": "whakarongona", "gr": "verb", "en": ["alternative form of whakarangona"]}
{"mi": "atawhai", "gr": "noun", "en": ["kindness, generosity"]}
{"mi": "atawhai", "gr": "verb", "en": ["to show kindness to"]}
{"mi": "atawhai", "gr": "adj", "en": ["kind, generous"]}
{"mi": "-tia", "gr": "suffix", "en": ["passive ending; commonly used for words with more than two vowels and for passive agreement"]}
{"mi": "manaaki", "gr": "verb", "en": ["to support, take care of, look out for"]}
{"mi": "manaaki", "gr": "noun", "en": ["support, caring for"]}
{"mi": "manaakitia", "gr": "verb", "en": ["passive of manaaki"]}
{"mi": "manaakitanga", "gr": "noun", "en": ["Showing kindness, generosity, respect to others."]}
{"mi": "pōhēhē", "gr": "verb", "en": ["to misunderstand", "to be bewildered"]}
{"mi": "pōhēhē", "gr": "adj", "en": ["duped, mistaken, confused, misguided", "unsuspecting"]}
{"mi": "pōhēhē", "gr": "noun", "en": ["mistake, misunderstanding, error"]}
{"mi": "tungāne", "gr": "noun", "en": ["brother (of a female)", "male cousin (of a female)"]}
{"mi": "pōhēhētia", "gr": "verb", "en": ["passive of pōhēhē"]}
{"mi": "utauta", "gr": "verb", "en": ["to load things"]}
{"mi": "utauta", "gr": "noun", "en": ["equipment, tools, property"]}
{"mi": "utautaina", "gr": "verb", "en": ["passive of utauta"]}
{"mi": "whiti", "gr": "verb", "en": ["to be alarmed"]}
{"mi": "whiti", "gr": "noun", "en": ["shock, alarm, fright"]}
{"mi": "whiti", "gr": "verb", "en": ["to exchange, transfer, swap", "to cross over to reach the other side"]}
{"mi": "whiti", "gr": "noun", "en": ["crossbeam, crossbar"]}
{"mi": "whiti", "gr": "verb", "en": ["to shine (of the sun)"]}
{"mi": "whiti", "gr": "noun", "en": ["shining"]}
{"mi": "whiti", "gr": "noun", "en": ["verse, stanza, paragraph, clause"]}
{"mi": "whiti", "gr": "noun", "en": ["wheat"]}
{"mi": "whiti", "gr": "noun", "en": ["fitness"]}
{"mi": "whiti", "gr": "verb", "en": ["to be fit"]}
{"mi": "whitia", "gr": "verb", "en": ["passive of whiti (“to transfer”)", "passive of whiti (“to shine”)"]}
{"mi": "-kina", "gr": "suffix", "en": ["a passive ending"]}
{"mi": "-hia", "gr": "suffix", "en": ["a passive ending (favoured in the Tūhoe dialect where -tia would be preferred in other dialects)"]}
{"mi": "-ngia", "gr": "suffix", "en": ["a passive ending (favoured in the Ngāti Porou dialect where -tia would be preferred in other dialects)"]}
{"mi": "-kia", "gr": "suffix", "en": ["a passive ending"]}
{"mi": "-mia", "gr": "suffix", "en": ["a passive ending (used only after verbs ending with 'o' or 'u')"]}
{"mi": "-ria", "gr": "suffix", "en": ["a passive ending"]}
{"mi": "-whia", "gr": "suffix", "en": ["a passive ending"]}
{"mi": "-whina", "gr": "suffix", "en": ["a passive ending"]}
{"mi": "karakiatia", "gr": "verb", "en": ["passive of karakia"]}
{"mi": "kai hamuti", "gr": "intj", "en": ["eat shit (a vulgar expression)"]}
{"mi": "kai hamuti", "gr": "noun", "en": ["shit-eater; an insult"]}
{"mi": "pōkokohua", "gr": "noun", "en": ["boiled head", "bugger, bastard, a highly offensive insult for an unpleasant person"]}
{"mi": "aitia", "gr": "verb", "en": ["passive of ai"]}
{"mi": "Whērangi", "gr": "name", "en": ["Uranus (planet)"]}
{"mi": "Tangaroa", "gr": "name", "en": ["The Maori god of the sea, lakes, rivers, and aquatic life.", "Neptune (Roman god)", "Neptune (planet)"]}
{"mi": "Apārangi", "gr": "name", "en": ["Mercury (planet)"]}
{"mi": "Matawhero", "gr": "name", "en": ["Mars (planet)"]}
{"mi": "Takero", "gr": "name", "en": ["Mercury (planet)"]}
{"mi": "Pareārau", "gr": "name", "en": ["Jupiter (planet)", "Saturn (planet)"]}
{"mi": "Kōpūnui", "gr": "name", "en": ["Jupiter (planet)"]}
{"mi": "Kōpū", "gr": "name", "en": ["Venus (planet)"]}
{"mi": "Hineitīweka", "gr": "name", "en": ["Jupiter (planet)"]}
{"mi": "Rangawhenua", "gr": "name", "en": ["Jupiter (planet)"]}
{"mi": "Hāmoa", "gr": "name", "en": ["Samoa (a country consisting of the western part of the Samoan archipelago in Polynesia, in Oceania)"]}
{"mi": "tohorā", "gr": "noun", "en": ["right whale"]}
{"mi": "kororā", "gr": "noun", "en": ["little penguin; blue penguin (Eudyptula minor)"]}
{"mi": "kororā", "gr": "adj", "en": ["bluish grey; blue-grey"]}
{"mi": "nau mai", "gr": "intj", "en": ["welcome"]}
{"mi": "Pipiri", "gr": "name", "en": ["The first month of the maramataka (lunar calendar), corresponding to May–June of the Gregorian calendar. Begins after the rising of Matariki."]}
{"mi": "Hongonui", "gr": "name", "en": ["The second month of the maramataka (lunar calendar), corresponding to June–July of the Gregorian calendar."]}
{"mi": "Here-turi-kōkā", "gr": "name", "en": ["The third month of the maramataka (lunar calendar), corresponding to July–August of the Gregorian calendar."]}
{"mi": "Hereturikōkā", "gr": "name", "en": ["alternative spelling of Here-turi-kōkā"]}
{"mi": "Mahuru", "gr": "name", "en": ["The fourth month of the maramataka (lunar calendar), corresponding to August–September of the Gregorian calendar.", "Alphard (star)"]}
{"mi": "Whiringa-ā-nuku", "gr": "name", "en": ["The fifth month of the maramataka (lunar calendar), corresponding to September–October of the Gregorian calendar."]}
{"mi": "Whiringa-ā-rangi", "gr": "name", "en": ["The sixth month of the maramataka (lunar calendar), corresponding to October–November of the Gregorian calendar."]}
{"mi": "Hakihea", "gr": "name", "en": ["The seventh month of the maramataka (lunar calendar), corresponding to November–December of the Gregorian calendar.", "Alpha Centauri"]}
{"mi": "Kohi-tātea", "gr": "name", "en": ["The eighth month of the maramataka (lunar calendar), corresponding to December–January of the Gregorian calendar."]}
{"mi": "Hui-tanguru", "gr": "name", "en": ["The ninth month of the maramataka (lunar calendar), corresponding to January–February of the Gregorian calendar."]}
{"mi": "Poutū-te-rangi", "gr": "name", "en": ["The tenth month of the maramataka (lunar calendar), corresponding to February–March of the Gregorian calendar.", "Altair (star in Aquila)"]}
{"mi": "Paenga-whāwhā", "gr": "name", "en": ["The eleventh month of the maramataka (lunar calendar), corresponding to March–April of the Gregorian calendar.", "Pegasus (consellation)"]}
{"mi": "Haratua", "gr": "name", "en": ["The twelfth month of the maramataka (lunar calendar), corresponding to April–May of the Gregorian calendar."]}
{"mi": "Kohitātea", "gr": "name", "en": ["alternative spelling of Kohi-tātea"]}
{"mi": "Huitanguru", "gr": "name", "en": ["alternative spelling of Hui-tanguru"]}
{"mi": "Poutūterangi", "gr": "name", "en": ["alternative spelling of Poutū-te-rangi"]}
{"mi": "Paengawhāwhā", "gr": "name", "en": ["alternative spelling of Paenga-whāwhā"]}
{"mi": "Rūhī-te-rangi", "gr": "name", "en": ["alternative form of Hui-tanguru (used by iwi Ngāti Awa)", "star in Scorpius"]}
{"mi": "Rehua", "gr": "name", "en": ["alternative form of Kohi-tātea", "star Antares in Scorpius"]}
{"mi": "maramataka", "gr": "noun", "en": ["the traditional Maori lunar calendar", "calendar", "almanac"]}
{"mi": "āngia", "gr": "verb", "en": ["passive of ā"]}
{"mi": "Rāhina", "gr": "name", "en": ["Monday"]}
{"mi": "Rātū", "gr": "name", "en": ["Tuesday"]}
{"mi": "Rāapa", "gr": "name", "en": ["Wednesday"]}
{"mi": "Rāpare", "gr": "name", "en": ["Thursday"]}
{"mi": "Rāmere", "gr": "name", "en": ["Friday"]}
{"mi": "Rāhoroi", "gr": "name", "en": ["Saturday"]}
{"mi": "horoia", "gr": "verb", "en": ["passive of horoi"]}
{"mi": "Rātahi", "gr": "name", "en": ["Monday"]}
{"mi": "Rārua", "gr": "name", "en": ["Tuesday"]}
{"mi": "Rātoru", "gr": "name", "en": ["Wednesday"]}
{"mi": "Rāwhā", "gr": "name", "en": ["Thursday"]}
{"mi": "Rārima", "gr": "name", "en": ["Friday"]}
{"mi": "aparia", "gr": "verb", "en": ["passive of apa"]}
{"mi": "anea", "gr": "verb", "en": ["to be devastated, to be destroyed,", "to ravage, to ruin (in wars etc.)"]}
{"mi": "anea", "gr": "noun", "en": ["devastation, destruction"]}
{"mi": "takiwā", "gr": "noun", "en": ["territory, area, region", "time, period, season", "space", "setting"]}
{"mi": "inoi", "gr": "noun", "en": ["a prayer"]}
{"mi": "inoi", "gr": "verb", "en": ["to pray, beg, request, appeal"]}
{"mi": "miriona", "gr": "num", "en": ["million"]}
{"mi": "putiputi", "gr": "noun", "en": ["Handwoven craft flower typically made of harakeke"]}
{"mi": "mano miriona", "gr": "num", "en": ["billion"]}
{"mi": "piriona", "gr": "num", "en": ["billion"]}
{"mi": "pēhea", "gr": "verb", "en": ["how?; of what sort?; in what way?"]}
{"mi": "pēhea", "gr": "verb", "en": ["what way?; in which direction?"]}
{"mi": "matomato", "gr": "adj", "en": ["lush, verdant"]}
{"mi": "matomato", "gr": "noun", "en": ["lushness"]}
{"mi": "matomato", "gr": "verb", "en": ["to be green (of foliage)", "aesthetically pleasing"]}
{"mi": "rongoā āraimate", "gr": "noun", "en": ["vaccine", "vaccination (inoculation with a vaccine)"]}
{"mi": "āraimate", "gr": "noun", "en": ["immunity"]}
{"mi": "rongoā", "gr": "noun", "en": ["medicine; drug; medication; treatment; remedy; tonic", "solution (to a problem)"]}
{"mi": "rongoā", "gr": "verb", "en": ["to treat; to apply medicines", "to preserve"]}
{"mi": "kano ārai mate", "gr": "noun", "en": ["vaccine"]}
{"mi": "ārai mate", "gr": "noun", "en": ["alternative form of āraimate"]}
{"mi": "ārai", "gr": "noun", "en": ["obstacle; barricade", "screen (physical divider)", "insulator", "barrier", "veil; curtain", "apron"]}
{"mi": "ārai", "gr": "verb", "en": ["to prevent; to forbid; to prohibit; to obstruct; to hinder", "to shield; to block out; to screen", "to insulate"]}
{"mi": "angiangi", "gr": "verb", "en": ["to be thin, fine"]}
{"mi": "angiangi", "gr": "noun", "en": ["gentle breeze", "taupata"]}
{"mi": "hukapapa", "gr": "noun", "en": ["frost", "ice"]}
{"mi": "hukapapa", "gr": "verb", "en": ["to have a frost"]}
{"mi": "kātoa", "gr": "noun", "en": ["Any of the red variety of Leptospermum scoparium, a shrub or small tree native to New Zealand and southeast Australia."]}
{"mi": "hī ika", "gr": "verb", "en": ["to fish with a hook and line"]}
{"mi": "hī ika", "gr": "noun", "en": ["angling, line fishing."]}
{"mi": "matira auahi", "gr": "noun", "en": ["fire alarm"]}
{"mi": "kaihao", "gr": "noun", "en": ["fisher, fisherman (using a net)"]}
{"mi": "kaimoana", "gr": "noun", "en": ["seafood, shellfish"]}
{"mi": "kai moana", "gr": "noun", "en": ["alternative form of kaimoana"]}
{"mi": "tangaroa wae whitu", "gr": "noun", "en": ["Astrostole scabra - a large starfish with only seven arms."]}
{"mi": "kererū", "gr": "noun", "en": ["The New Zealand pigeon (species Hemiphaga novaeseelandiae)."]}
{"mi": "tangitangi", "gr": "noun", "en": ["sound", "salute", "wave"]}
{"mi": "tangitangi", "gr": "verb", "en": ["to cry", "to mourn", "to make a sound"]}
{"mi": "tangiweto", "gr": "noun", "en": ["crybaby"]}
{"mi": "tangiweto", "gr": "verb", "en": ["to fret", "to cry"]}
{"mi": "pakiaka", "gr": "noun", "en": ["root (of a tree)"]}
{"mi": "māngoingoi", "gr": "verb", "en": ["surfcasting", "to fish with a line from the shore"]}
{"mi": "poka tōrere", "gr": "noun", "en": ["abyss, bottomless pit, chasm"]}
{"mi": "tino mate nui ki", "gr": "verb", "en": ["to have a great desire for"]}
{"mi": "whaikaha", "gr": "adj", "en": ["having strength", "concentrated", "disabled"]}
{"mi": "whaikaha", "gr": "noun", "en": ["disability"]}
{"mi": "whaikaha", "gr": "verb", "en": ["to have strength", "to be strong enough"]}
{"mi": "taraute", "gr": "noun", "en": ["trout"]}
{"mi": "poro-tapaono", "gr": "noun", "en": ["hexagonal prism"]}
{"mi": "pere tapaono", "gr": "noun", "en": ["chevron"]}
{"mi": "koeko-tapaono", "gr": "noun", "en": ["hexagonal pyramid"]}
{"mi": "rākau whai hua", "gr": "noun", "en": ["fruit tree"]}
{"mi": "ahoroa", "gr": "noun", "en": ["moon", "bright moonlight"]}
{"mi": "uranga", "gr": "noun", "en": ["glow", "sunrise", "sunset"]}
{"mi": "Hinekōrako", "gr": "noun", "en": ["moonbow"]}
{"mi": "āheahea", "gr": "noun", "en": ["rainbow"]}
{"mi": "Whanganui", "gr": "name", "en": ["Wanganui (a city and river in New Zealand)"]}
{"mi": "pouako", "gr": "noun", "en": ["teacher", "tutor"]}
{"mi": "matea ako", "gr": "noun", "en": ["learning needs"]}
{"mi": "ngaupuku", "gr": "noun", "en": ["stomachache"]}
{"mi": "mate pāpōuri", "gr": "noun", "en": ["depression"]}
{"mi": "māramatanga", "gr": "noun", "en": ["clarity", "enlightenment"]}
{"mi": "taurumarumaki", "gr": "verb", "en": ["to duck someone else into the water"]}
{"mi": "pakakina", "gr": "adj", "en": ["glowing"]}
{"mi": "rangatahi", "gr": "noun", "en": ["youth", "younger generation", "fishing net about 20 meters long that is smaller than a kaharoa"]}
{"mi": "kiri taratara", "gr": "noun", "en": ["echinoderm"]}
{"mi": "kiritaratara", "gr": "noun", "en": ["alternative form of kiri taratara"]}
{"mi": "tāmure", "gr": "noun", "en": ["Australasian snapper, New Zealand snapper, silver seabream (Pagrus auratus, syn. Chrysophrys auratus), a silvery pinkish to golden fish with numerous bright blue spots over upper sides."]}
{"mi": "rātāhuihui", "gr": "noun", "en": ["southern sunfish (Mola alexandrini, syn. Mola ramsayi)"]}
{"mi": "marangai kirikiri", "gr": "noun", "en": ["sandstorm"]}
{"mi": "ua kirikiri", "gr": "noun", "en": ["sandstorm"]}
{"mi": "marangai", "gr": "adj", "en": ["north", "north wind", "northerly"]}
{"mi": "marangai", "gr": "noun", "en": ["bad weather", "east wind", "east", "rainstorm"]}
{"mi": "kirikiri", "gr": "noun", "en": ["gravel", "sand", "shingle"]}
{"mi": "kirikiri", "gr": "verb", "en": ["to incorporate gravel"]}
{"mi": "Whiringa ki Tawhiti", "gr": "noun", "en": ["Pluto"]}
{"mi": "kōauau", "gr": "noun", "en": ["cross-blown flute made of wood, bone or a species of kelp", "bull kelp (Durvillaea antarctica)"]}
{"mi": "whatura", "gr": "noun", "en": ["vulture"]}
{"mi": "korukoru", "gr": "noun", "en": ["wrinkle", "nook, cavity"]}
{"mi": "korukoru", "gr": "adj", "en": ["sagging, droopy (of skin)"]}
{"mi": "korukoru", "gr": "noun", "en": ["turkey"]}
{"mi": "tarāpunga", "gr": "noun", "en": ["red-billed gull (Chroicocephalus novaehollandiae scopulinus)", "black-billed gull"]}
{"mi": "akiaki", "gr": "noun", "en": ["red-billed gull (Chroicocephalus novaehollandiae scopulinus)"]}
{"mi": "karehākoa", "gr": "noun", "en": ["red-billed gull (Chroicocephalus novaehollandiae scopulinus)"]}
{"mi": "katatē", "gr": "noun", "en": ["red-billed gull (Chroicocephalus novaehollandiae scopulinus)"]}
{"mi": "makorā", "gr": "noun", "en": ["red-billed gull (Chroicocephalus novaehollandiae scopulinus)"]}
{"mi": "kōtuku ngutupapa", "gr": "noun", "en": ["royal spoonbill (Platalea regia)"]}
{"mi": "kōtuku-ngutupapa", "gr": "noun", "en": ["royal spoonbill (Platalea regia)"]}
{"mi": "kotoreke", "gr": "noun", "en": ["marsh crake (Porzana pusilla affinis)"]}
{"mi": "moho-pererū", "gr": "noun", "en": ["buff-banded rail (Gallirallus philippensis)"]}
{"mi": "ēkara", "gr": "noun", "en": ["eagle (bird of prey)"]}
{"mi": "kuihi", "gr": "noun", "en": ["goose", "Canada goose"]}
{"mi": "wāna", "gr": "noun", "en": ["swan"]}
{"mi": "wāna", "gr": "pron", "en": ["possessive plural of āna (“his, her”)"]}
{"mi": "tahepuia", "gr": "noun", "en": ["lava"]}
{"mi": "kiripaka", "gr": "noun", "en": ["flint, quartz", "asbestos"]}
{"mi": "pounemu", "gr": "noun", "en": ["greenstone, nephrite"]}
{"mi": "Tiaina", "gr": "name", "en": ["China (a large country in East Asia, occupying the region around the Yellow, Yangtze, and Pearl Rivers; the People's Republic of China, since 1949)"]}
{"mi": "Hapani", "gr": "name", "en": ["Japan (a country in Asia)"]}
{"mi": "Paratipotoka", "gr": "name", "en": ["Vladivostok (a city in Russia)"]}
{"mi": "Tōkio", "gr": "name", "en": ["Tokyo (a city in Japan)"]}
{"mi": "Koramia", "gr": "name", "en": ["Columbia River (a river in the United States)"]}
{"mi": "Urukoi", "gr": "name", "en": ["Uruguay (a country in South America)"]}
{"mi": "Urukuai", "gr": "name", "en": ["Uruguay (a country in South America)"]}
{"mi": "Parakai", "gr": "name", "en": ["Paraguay (a country in South America)"]}
{"mi": "Hurināme", "gr": "name", "en": ["Suriname (a country in South America)"]}
{"mi": "Hurinamo", "gr": "name", "en": ["Suriname (a country in South America)"]}
{"mi": "Wenehūera", "gr": "name", "en": ["Venezuela (a country in South America)"]}
{"mi": "Penehūera", "gr": "name", "en": ["Venezuela (a country in South America)"]}
{"mi": "Te Pāpaka-a-Māui", "gr": "name", "en": ["Australia (a country consisting of a main island, the island of Tasmania and other smaller islands, located in Oceania; historically, a collection of former colonies of the British Empire)", "Australia (a continent consisting of the land on the Australian tectonic plate, i.e. Australia, New Guinea and intervening islands)"]}
{"mi": "Pārau", "gr": "name", "en": ["Palau (a country in Oceania)"]}
{"mi": "Aratiria", "gr": "name", "en": ["Algeria (a country in North Africa)"]}
{"mi": "Pēnina", "gr": "name", "en": ["Benin (a country in West Africa, formerly Dahomey)"]}
{"mi": "Poriwana", "gr": "name", "en": ["Botswana (a country in Southern Africa)"]}
{"mi": "Pūkina", "gr": "name", "en": ["Burkina Faso (a country in West Africa, formerly Upper Volta)"]}
{"mi": "Puruniti", "gr": "name", "en": ["Burundi (a country in East Africa)"]}
{"mi": "Kamarūna", "gr": "name", "en": ["Cameroon (a country in Central Africa)"]}
{"mi": "Te Kūrae Matomato", "gr": "name", "en": ["Cape Verde (an archipelago and country in West Africa)"]}
{"mi": "Te Puku o Āwherika", "gr": "name", "en": ["Central African Republic (a country in Central Africa)"]}
{"mi": "Kāta", "gr": "name", "en": ["Chad (a country in Central Africa)"]}
{"mi": "te Whenua o Kōngo", "gr": "name", "en": ["Democratic Republic of the Congo (a country in Central Africa, the larger of the two countries named Congo)"]}
{"mi": "Kōngo", "gr": "name", "en": ["Democratic Republic of the Congo (a country in Central Africa, larger and to the east of the Republic of the Congo)", "Republic of the Congo (a country in Central Africa, smaller and to the west of the Democratic Republic of the Congo)", "Congo (a major river in Central Africa which flows for about 4,380 km (2,720 miles) to the Atlantic Ocean in the Democratic Republic of the Congo, at times forming the border with the Republic of the Congo and Angola)"]}
{"mi": "Tipūti", "gr": "name", "en": ["Djibouti (a country in East Africa)"]}
{"mi": "Īhipa", "gr": "name", "en": ["Egypt (a country in North Africa and West Asia)"]}
{"mi": "Eritēria", "gr": "name", "en": ["Eritrea (a country in East Africa, on the Red Sea)"]}
{"mi": "Warerangi", "gr": "name", "en": ["Eswatini, Swaziland (a country in Southern Africa, formerly called Swaziland)"]}
{"mi": "Kāpona", "gr": "name", "en": ["Gabon (a country in Central Africa)"]}
{"mi": "Te Kamopia", "gr": "name", "en": ["The Gambia, Gambia (a country in West Africa)"]}
{"mi": "Te Tai Rei", "gr": "name", "en": ["Ivory Coast, Côte d'Ivoire (a country in West Africa)"]}
{"mi": "Kēnia", "gr": "name", "en": ["Kenya (a country in East Africa)"]}
{"mi": "Teroto", "gr": "name", "en": ["Lesotho (a country in Southern Africa)"]}
{"mi": "Raipiri", "gr": "name", "en": ["Liberia (a country in West Africa, on the Atlantic Ocean, with Monrovia as its capital)"]}
{"mi": "Rīpia", "gr": "name", "en": ["Libya (a country in North Africa)"]}
{"mi": "Tiriporī", "gr": "name", "en": ["Tripoli (a city in Libya)"]}
{"mi": "Matakahaka", "gr": "name", "en": ["Madagascar (an island and country off the east coast of Africa)"]}
{"mi": "Marakāhia", "gr": "name", "en": ["Madagascar (an island and country off the east coast of Africa)"]}
{"mi": "Marāwi", "gr": "name", "en": ["Malawi (a country in Southern Africa)"]}
{"mi": "Māri", "gr": "name", "en": ["Mali (a country in West Africa)"]}
{"mi": "Mauritānia", "gr": "name", "en": ["Mauritania (a country in West Africa)"]}
{"mi": "Marako", "gr": "name", "en": ["Morocco (a country in North Africa)"]}
{"mi": "Mohapiki", "gr": "name", "en": ["Mozambique (a country in East Africa and Southern Africa)"]}
{"mi": "Namīpia", "gr": "name", "en": ["Namibia (a country in Southern Africa)"]}
{"mi": "Ngāika", "gr": "name", "en": ["Niger (a country in West Africa, situated to the north of Nigeria)"]}
{"mi": "Ngāitiria", "gr": "name", "en": ["Nigeria (a country in West Africa, south of the country of Niger)"]}
{"mi": "Rāwana", "gr": "name", "en": ["Rwanda (a country in East Africa)"]}
{"mi": "Henekara", "gr": "name", "en": ["Senegal (a country in West Africa)"]}
{"mi": "Te Araone", "gr": "name", "en": ["Sierra Leone (a country in West Africa)"]}
{"mi": "Hūmārie", "gr": "name", "en": ["Somalia (a country in East Africa, in the Horn of Africa)"]}
{"mi": "Āwherika ki te Tonga", "gr": "name", "en": ["South Africa (a country in Southern Africa)"]}
{"mi": "Hūtāne", "gr": "name", "en": ["Sudan (a country in North Africa and East Africa)"]}
{"mi": "Tānahia", "gr": "name", "en": ["Tanzania (a country in East Africa)"]}
{"mi": "Toko", "gr": "name", "en": ["Togo (a country in West Africa)"]}
{"mi": "Tūnihia", "gr": "name", "en": ["Tunisia (a country in North Africa)"]}
{"mi": "Ukānga", "gr": "name", "en": ["Uganda (a country in East Africa)"]}
{"mi": "Ukāna", "gr": "name", "en": ["Uganda (a country in Africa)"]}
{"mi": "Ukanata", "gr": "name", "en": ["Uganda (a country in Africa)"]}
{"mi": "Tāmipia", "gr": "name", "en": ["Zambia (a country in Southern Africa)"]}
{"mi": "Rōtihia", "gr": "name", "en": ["Rhodesia (a country in Africa)"]}
{"mi": "Timuwawe", "gr": "name", "en": ["Zimbabwe (a country in Southern Africa)"]}
{"mi": "ngutoro", "gr": "noun", "en": ["stone bass, wreckfish"]}
{"mi": "moeone", "gr": "noun", "en": ["stone bass, wreckfish", "toheroa (an edible mollusc)"]}
{"mi": "pōhutukawa", "gr": "noun", "en": ["Metrosideros excelsa"]}
{"mi": "Pukamata", "gr": "noun", "en": ["Facebook"]}
{"mi": "orokohanga", "gr": "noun", "en": ["origin", "creation"]}
{"mi": "takiuru", "gr": "verb", "en": ["to log in"]}
{"mi": "whatutoto", "gr": "adj", "en": ["advanced"]}
{"mi": "whatutoto", "gr": "noun", "en": ["red heartwood"]}
{"mi": "whatutoto", "gr": "verb", "en": ["to be advanced", "to mature"]}
{"mi": "kāmera", "gr": "noun", "en": ["camera"]}
{"mi": "kāmera", "gr": "noun", "en": ["camel"]}
{"mi": "manu kōrero", "gr": "noun", "en": ["orator"]}
{"mi": "āpaka", "gr": "noun", "en": ["alpaca"]}
{"mi": "makimaki", "gr": "noun", "en": ["monkey", "ape"]}
{"mi": "makimaki", "gr": "verb", "en": ["afflict with an illness"]}
{"mi": "tarākona", "gr": "noun", "en": ["dragon"]}
{"mi": "Tāniora", "gr": "name", "en": ["a male given name, equivalent to English Daniel"]}
{"mi": "kōhue", "gr": "noun", "en": ["boiler, pot (for boiling food)"]}
{"mi": "kōhue", "gr": "verb", "en": ["to cook by boiling, to boil"]}
{"mi": "kōhua", "gr": "noun", "en": ["boiler, pot (any metal cooking vessel for boiling food)", "a trough or vessel dug out of a wooden trunk for boiling food using heated stones (pot boilers)."]}
{"mi": "kōhua", "gr": "verb", "en": ["to cook by boiling, to boil, to poach"]}
{"mi": "rapunga", "gr": "noun", "en": ["search", "investigation"]}
{"mi": "kotiate", "gr": "noun", "en": ["short weapon of wood or bone with a notch on both edges of the flat blade"]}
{"mi": "waimarie", "gr": "adj", "en": ["lucky", "fortuitous"]}
{"mi": "waimarie", "gr": "noun", "en": ["good fortune", "luck"]}
{"mi": "waimarie", "gr": "verb", "en": ["to be lucky, fortunate"]}
{"mi": "whakatewhatewha pānga", "gr": "noun", "en": ["contact tracing"]}
{"mi": "Marēhia", "gr": "name", "en": ["Malaysia (a country in Southeast Asia)"]}
{"mi": "Tairana", "gr": "name", "en": ["Thailand (a country in Southeast Asia)"]}
{"mi": "Piripīni", "gr": "name", "en": ["Philippines (a country in Southeast Asia)"]}
{"mi": "Parihitini", "gr": "name", "en": ["Palestine (a country in Asia)"]}
{"mi": "Katā", "gr": "name", "en": ["Qatar (a country in Asia)"]}
{"mi": "Hōrano", "gr": "name", "en": ["Jordan (a country in West Asia in the Middle East)"]}
{"mi": "Repanona", "gr": "name", "en": ["Lebanon (a country in Asia)"]}
{"mi": "Whitināma", "gr": "name", "en": ["Vietnam (a country in Southeast Asia)"]}
{"mi": "Hiria", "gr": "name", "en": ["Syria (a country in West Asia in the Middle East)"]}
{"mi": "Hiri Rānaka", "gr": "name", "en": ["Sri Lanka (a country in Asia)"]}
{"mi": "Rāoho", "gr": "name", "en": ["Laos (a country in Southeast Asia)"]}
{"mi": "Tīmoa", "gr": "name", "en": ["Timor Leste (a country in Asia)"]}
{"mi": "Kotahitanga o ngā Whenua Ārapi", "gr": "name", "en": ["United Arab Emirates (a country in Asia)"]}
{"mi": "Kehitāna", "gr": "name", "en": ["Kyrgyzstan (a country in Central Asia, bordering on Kazakhstan, Uzbekistan, Tajikistan and China)"]}
{"mi": "Uhipeketāne", "gr": "name", "en": ["Uzbekistan (a country in Central Asia)"]}
{"mi": "Tukumanatānga", "gr": "name", "en": ["Turkmenistan (a country in Central Asia)"]}
{"mi": "Tahikitāna", "gr": "name", "en": ["Tajikistan (a country in Central Asia)"]}
{"mi": "Īrāna", "gr": "name", "en": ["Iran (a country in West Asia)"]}
{"mi": "Īrāki", "gr": "name", "en": ["Iraq (a country in West Asia in the Middle East)"]}
{"mi": "Whitināmu", "gr": "name", "en": ["Vietnam (a country in Asia)"]}
{"mi": "Nepōra", "gr": "name", "en": ["Nepal (a country in Asia)"]}
{"mi": "Taiwana", "gr": "name", "en": ["Taiwan (a partly-recognized country in East Asia consisting of a main island and 167 smaller islands)", "Taiwan (an island between the Taiwan Strait and Philippine Sea in East Asia)"]}
{"mi": "Pakitāne", "gr": "name", "en": ["Pakistan (a country in South Asia)"]}
{"mi": "Kuamu", "gr": "name", "en": ["Guam (a country in Oceania)"]}
{"mi": "Ngā Motu Horomona", "gr": "name", "en": ["Solomon Islands (a country in Oceania)"]}
{"mi": "Tūwaru", "gr": "name", "en": ["Tuvalu (a country and archipelago of Polynesia in Oceania)"]}
{"mi": "Kiripāti", "gr": "name", "en": ["Kiribati (a country in Oceania)"]}
{"mi": "Kuki Airani", "gr": "name", "en": ["Cook Islands (an archipelago and self-governing country in Oceania, in free association with New Zealand)"]}
{"mi": "Whenuatū", "gr": "name", "en": ["Vanuatu (a country and archipelago of Melanesia in Oceania)"]}
{"mi": "manatū", "gr": "noun", "en": ["government", "authority"]}
{"mi": "awa kōpaka", "gr": "noun", "en": ["glacier"]}
{"mi": "tōpito kōpaka", "gr": "noun", "en": ["polar ice caps"]}
{"mi": "tōpito", "gr": "noun", "en": ["end", "extremity"]}
{"mi": "Miki Kiore", "gr": "name", "en": ["Mickey Mouse"]}
{"mi": "poro-tapawhā rite", "gr": "noun", "en": ["square prism"]}
{"mi": "tino tāone", "gr": "noun", "en": ["capital city, capital"]}
{"mi": "tāone matua", "gr": "noun", "en": ["capital city, capital"]}
{"mi": "mīhini turaki", "gr": "noun", "en": ["artillery"]}
{"mi": "Hopatāone", "gr": "name", "en": ["Hobart (the capital of Tasmania, Australia)"]}
{"mi": "Paramata", "gr": "name", "en": ["Parramatta (a suburb of Sydney, New South Wales, Australia)"]}
{"mi": "Pararata", "gr": "name", "en": ["Ballarat (a city in Victoria, Australia)"]}
{"mi": "Wūrongikongi", "gr": "name", "en": ["Wollongong (a city in New South Wales, Australia)"]}
{"mi": "Tāwini", "gr": "name", "en": ["Darwin (the capital of the Northern Territory, Australia)"]}
{"mi": "Huwa", "gr": "name", "en": ["Suva (the capital of Fiji)"]}
{"mi": "Hironga", "gr": "name", "en": ["Geelong (a city in Victoria, Australia)"]}
{"mi": "Tāonewhīra", "gr": "name", "en": ["Townsville (a city in Queensland, Australia)"]}
{"mi": "rārā", "gr": "noun", "en": ["small branch, twig"]}
{"mi": "rārā", "gr": "adv", "en": ["over there, there, yonder"]}
{"mi": "rourou", "gr": "noun", "en": ["a basket for food"]}
{"mi": "miware", "gr": "noun", "en": ["young snail-whelk (Haustrum haustorium, brown rock shell or dark rock shell)"]}
{"mi": "paea", "gr": "noun", "en": ["swordfish (Xiphias gladius)", "flint"]}
{"mi": "takeketonga", "gr": "noun", "en": ["striped marlin (Kajikia audax)"]}
{"mi": "rapunga whakaaro", "gr": "noun", "en": ["philosophy"]}
{"mi": "Pōhutukawa", "gr": "name", "en": ["Sterope"]}
{"mi": "karae", "gr": "noun", "en": ["seabird of unknown species"]}
{"mi": "utuutu", "gr": "noun", "en": ["repayments"]}
{"mi": "utuutu", "gr": "verb", "en": ["to fill a container (with liquid) a number of times"]}
{"mi": "pūtiro tukutuku", "gr": "noun", "en": ["web browser"]}
{"mi": "mata ipurangi", "gr": "noun", "en": ["internet browser", "media browser"]}
{"mi": "matatangitangi", "gr": "noun", "en": ["lament", "dirge"]}
{"mi": "hoariri", "gr": "noun", "en": ["enemy, opposition, opponent, adversary"]}
{"mi": "hoariri", "gr": "verb", "en": ["to be an enemy"]}
{"mi": "urumaranga", "gr": "noun", "en": ["ambush", "flash mob"]}
{"mi": "aranga", "gr": "verb", "en": ["to arise, to emerge, to appear", "to become known"]}
{"mi": "aranga", "gr": "noun", "en": ["arising", "resurrection"]}
{"mi": "kawau", "gr": "noun", "en": ["cormorant, shag"]}
{"mi": "motumotu", "gr": "verb", "en": ["divided, broken up, cut"]}
{"mi": "motumotu", "gr": "adj", "en": ["separated", "discrete"]}
{"mi": "motumotu", "gr": "noun", "en": ["firebrand", "piece of burning wood", "a dumpling or doughboy"]}
{"mi": "tīhi", "gr": "noun", "en": ["cheese"]}
{"mi": "pū mīhini", "gr": "noun", "en": ["machine gun"]}
{"mi": "punua ngeru", "gr": "noun", "en": ["a small cat; a kitten"]}
{"mi": "punua", "gr": "adj", "en": ["small."]}
{"mi": "punua", "gr": "noun", "en": ["a baby animal."]}
{"mi": "riroriro", "gr": "noun", "en": ["A grey warbler, of the species Gerygone igata."]}
{"mi": "kārearea", "gr": "noun", "en": ["Falco novaeseelandiae, the only falcon endemic to New Zealand."]}
{"mi": "kōtare", "gr": "noun", "en": ["The sacred kingfisher, Todiramphus sanctus."]}
{"mi": "pāteke", "gr": "noun", "en": ["The brown teal, a species of dabbling duck."]}
{"mi": "kumukumu", "gr": "verb", "en": ["to be uncertain"]}
{"mi": "kumukumu", "gr": "noun", "en": ["bluefin gurnard (Chelidonichthys kumu)", "lizard"]}
{"mi": "kawhe", "gr": "noun", "en": ["coffee"]}
{"mi": "inu mirumiru", "gr": "noun", "en": ["Coke (Coca-Cola)"]}
{"mi": "Hopa", "gr": "name", "en": ["a male given name, equivalent to English Job"]}
{"mi": "tapatoru", "gr": "noun", "en": ["triangle"]}
{"mi": "āhuatanga", "gr": "noun", "en": ["situation, circumstances"]}
{"mi": "āhumehume", "gr": "noun", "en": ["petticoat"]}
{"mi": "ahunga", "gr": "noun", "en": ["bearing, heading", "generation", "heap"]}
{"mi": "ahurewa", "gr": "noun", "en": ["oracle, shrine, sacred place", "platform", "throne"]}
{"mi": "āhuru", "gr": "adj", "en": ["snug, cozy, comfortable", "warm"]}
{"mi": "aihi", "gr": "noun", "en": ["dolphin"]}
{"mi": "āianei", "gr": "adv", "en": ["today, soon, now"]}
{"mi": "aikiha", "gr": "noun", "en": ["handkerchief"]}
{"mi": "āinga", "gr": "noun", "en": ["violence", "impetus"]}
{"mi": "āio", "gr": "adj", "en": ["calm", "peaceful"]}
{"mi": "āio", "gr": "noun", "en": ["calm, halcyon", "peace"]}
{"mi": "aitanga", "gr": "noun", "en": ["progeny, descendants"]}
{"mi": "akoranga", "gr": "noun", "en": ["learning, lesson"]}
{"mi": "ākuanei", "gr": "adv", "en": ["presently, shortly, soon"]}
{"mi": "amapaea", "gr": "noun", "en": ["umpire"]}
{"mi": "amorangi", "gr": "noun", "en": ["priest", "leader", "emblem"]}
{"mi": "anahe", "gr": "adj", "en": ["alone, only"]}
{"mi": "anahere", "gr": "noun", "en": ["angel, archangel"]}
{"mi": "ānau", "gr": "noun", "en": ["curve"]}
{"mi": "ānau", "gr": "verb", "en": ["to curve"]}
{"mi": "anake", "gr": "adj", "en": ["alone, only"]}
{"mi": "angaanga", "gr": "noun", "en": ["shell", "skull", "head"]}
{"mi": "angaangamate", "gr": "noun", "en": ["back, reverse"]}
{"mi": "anganui", "gr": "verb", "en": ["to face towards"]}
{"mi": "ānini", "gr": "noun", "en": ["sensation", "headache"]}
{"mi": "anipā", "gr": "adj", "en": ["anxious, uneasy", "solicitous"]}
{"mi": "aniroro", "gr": "adj", "en": ["giddy, dizzy"]}
{"mi": "āniwa", "gr": "adj", "en": ["bright", "reckless"]}
{"mi": "aonga", "gr": "noun", "en": ["dawn"]}
{"mi": "apakura", "gr": "noun", "en": ["lament, dirge"]}
{"mi": "araheke", "gr": "noun", "en": ["stairs"]}
{"mi": "arapiki", "gr": "noun", "en": ["stairs"]}
{"mi": "araroa", "gr": "noun", "en": ["corridor, passage"]}
{"mi": "apārangi", "gr": "noun", "en": ["group of noble people"]}
{"mi": "arawhata", "gr": "noun", "en": ["stairs", "ladder", "bridge"]}
{"mi": "areinga", "gr": "noun", "en": ["black field cricket"]}
{"mi": "ārikarika", "gr": "adj", "en": ["restrained"]}
{"mi": "aroākapa", "gr": "noun", "en": ["foreboding, bad omen", "row, rank; front row"]}
{"mi": "aroaro", "gr": "noun", "en": ["presence", "front of a person"]}
{"mi": "aromaunga", "gr": "noun", "en": ["mountain face"]}
{"mi": "aronui", "gr": "noun", "en": ["armspan, fathom"]}
{"mi": "aronui", "gr": "adj", "en": ["suitable"]}
{"mi": "aruhe", "gr": "noun", "en": ["fern, root"]}
{"mi": "ataarangi", "gr": "noun", "en": ["shadow"]}
{"mi": "atamira", "gr": "noun", "en": ["stage, platform, dais"]}
{"mi": "atarau", "gr": "noun", "en": ["moonlight"]}
{"mi": "ātea", "gr": "verb", "en": ["to be clear, to be unobstructed"]}
{"mi": "ātea", "gr": "noun", "en": ["space"]}
{"mi": "auheke", "gr": "verb", "en": ["to surrender, to cave", "to surf", "to climb down"]}
{"mi": "aukati", "gr": "verb", "en": ["to bar, restrict, prohibit, block", "to discriminate"]}
{"mi": "aukati", "gr": "noun", "en": ["barrier, boundary, roadblock", "discrimination"]}
{"mi": "aukati", "gr": "adj", "en": ["exclusive, discriminatory"]}
{"mi": "aumoana", "gr": "noun", "en": ["open sea", "blue"]}
{"mi": "aumoana", "gr": "adj", "en": ["oceanic"]}
{"mi": "aupatu", "gr": "noun", "en": ["bundle"]}
{"mi": "auporo", "gr": "verb", "en": ["to curtail, truncate, cut short", "to strike"]}
{"mi": "auporo", "gr": "noun", "en": ["strike", "work stoppage"]}
{"mi": "aupuru", "gr": "noun", "en": ["cushion, pad"]}
{"mi": "autaia", "gr": "noun", "en": ["bloke, fellow, guy, chap", "contraption", "wonder"]}
{"mi": "autaia", "gr": "adj", "en": ["wondrous, uncanny, extraordinary"]}
{"mi": "autaia", "gr": "verb", "en": ["passive of auta (“to attack”)"]}
{"mi": "autui", "gr": "noun", "en": ["brooch, cloak pin"]}
{"mi": "āwaawa", "gr": "noun", "en": ["valley", "creeks"]}
{"mi": "awairānei", "gr": "pron", "en": ["anyone, someone"]}
{"mi": "awakeri", "gr": "noun", "en": ["drain, ditch"]}
{"mi": "āwangawanga", "gr": "verb", "en": ["to be distressed, to worry"]}
{"mi": "āwangawanga", "gr": "noun", "en": ["distress, worry", "doubt"]}
{"mi": "awarua", "gr": "noun", "en": ["trench, drain", "corridor, passageway"]}
{"mi": "aweke", "gr": "adj", "en": ["perverse", "trivial", "frivolous, idle"]}
{"mi": "aweke", "gr": "verb", "en": ["to misrepresent, falsify, forge"]}
{"mi": "āwhato", "gr": "noun", "en": ["vegetable caterpillar of species Ophiocordyceps robertsii of New Zealand"]}
{"mi": "awhenga", "gr": "noun", "en": ["vassal, subordinate", "conquered people", "inlet"]}
{"mi": "awhitu", "gr": "verb", "en": ["to feel hurt"]}
{"mi": "awhitu", "gr": "adj", "en": ["vigilant"]}
{"mi": "ehu", "gr": "noun", "en": ["muddy water"]}
{"mi": "ehu", "gr": "verb", "en": ["disinter, exhume"]}
{"mi": "ehu", "gr": "adj", "en": ["turbid"]}
{"mi": "haeana", "gr": "noun", "en": ["iron"]}
{"mi": "haeana rāti", "gr": "noun", "en": ["harpoon"]}
{"mi": "haeata", "gr": "noun", "en": ["beam, ray of light", "dawn, daybreak"]}
{"mi": "haeatatanga", "gr": "noun", "en": ["ray of light through a chink in a wall"]}
{"mi": "haere atu", "gr": "verb", "en": ["leave, go away, farewell"]}
{"mi": "haereere", "gr": "verb", "en": ["stroll about"]}
{"mi": "haerenga", "gr": "noun", "en": ["journey", "departure"]}
{"mi": "haeroa", "gr": "noun", "en": ["grave for the spirits of enemies"]}
{"mi": "hahaetanga", "gr": "noun", "en": ["first gleam of light"]}
{"mi": "hahana", "gr": "verb", "en": ["glow, gleam, radiate"]}
{"mi": "hahani", "gr": "verb", "en": ["disparage"]}
{"mi": "hāhore", "gr": "adj", "en": ["bare, simple"]}
{"mi": "hahunga", "gr": "noun", "en": ["disinterment, exhumation"]}
{"mi": "haihana", "gr": "noun", "en": ["sergeant"]}
{"mi": "hainatanga", "gr": "noun", "en": ["signature"]}
{"mi": "hāka", "gr": "noun", "en": ["jug", "groundsel", "hack (horse)", "butterweed"]}
{"mi": "hakahaka", "gr": "adj", "en": ["low", "squat"]}
{"mi": "hakahaka", "gr": "verb", "en": ["rant, rave"]}
{"mi": "hakihaki", "gr": "noun", "en": ["scabies, itch, rash"]}
{"mi": "hakikoko", "gr": "noun", "en": ["shoulderblade"]}
{"mi": "hakirara", "gr": "verb", "en": ["to annoy, insult"]}
{"mi": "hakirara", "gr": "adv", "en": ["slovenly"]}
{"mi": "hakirara", "gr": "adj", "en": ["sloppy"]}
{"mi": "hakiri", "gr": "verb", "en": ["hear"]}
{"mi": "hākoakoa", "gr": "noun", "en": ["bliss", "skua"]}
{"mi": "hākoakoa", "gr": "adj", "en": ["happy"]}
{"mi": "hakoko", "gr": "adj", "en": ["bent, concave"]}
{"mi": "hākoro", "gr": "noun", "en": ["old man"]}
{"mi": "hākui", "gr": "noun", "en": ["old woman"]}
{"mi": "hākure", "gr": "noun", "en": ["lice"]}
{"mi": "hākure", "gr": "verb", "en": ["search for lice"]}
{"mi": "hakuturi", "gr": "noun", "en": ["birds"]}
{"mi": "hāmanu", "gr": "noun", "en": ["ammunition"]}
{"mi": "hamarara", "gr": "noun", "en": ["umbrella"]}
{"mi": "hamumu", "gr": "verb", "en": ["speak softly"]}
{"mi": "hamuti", "gr": "noun", "en": ["dung, poop, poo, faeces, feces, doodoo", "toilet"]}
{"mi": "hanahana", "gr": "noun", "en": ["garment"]}
{"mi": "hanahana", "gr": "verb", "en": ["shine"]}
{"mi": "hanake", "gr": "verb", "en": ["grow"]}
{"mi": "hanatu", "gr": "verb", "en": ["go forwards, go away"]}
{"mi": "hanehane", "gr": "noun", "en": ["decay, rot"]}
{"mi": "hangahanga", "gr": "verb", "en": ["to work on, to fashion"]}
{"mi": "hangahanga", "gr": "adj", "en": ["frivolous, trivial"]}
{"mi": "hangahanga", "gr": "noun", "en": ["practice, habit"]}
{"mi": "hanganoa", "gr": "adj", "en": ["insignificant, inconsequential"]}
{"mi": "hangarau", "gr": "adj", "en": ["technological"]}
{"mi": "hangarau", "gr": "noun", "en": ["trickery, deception", "technology"]}
{"mi": "hangarau", "gr": "verb", "en": ["to fool, to deceive"]}
{"mi": "hanumi", "gr": "verb", "en": ["merge; be swallowed up"]}
{"mi": "hapanga", "gr": "noun", "en": ["default"]}
{"mi": "hāparangi", "gr": "verb", "en": ["to shout, scream, bawl"]}
{"mi": "āwhiowhio", "gr": "noun", "en": ["whirlwind"]}
{"mi": "āwhiowhio", "gr": "verb", "en": ["to make sth swung around in circles, to whirl sth"]}
{"mi": "āwhiowhio", "gr": "adj", "en": ["swung or whirled around in circles", "circuitous, going around in circles"]}
{"mi": "hāpoki", "gr": "noun", "en": ["den", "pit"]}
{"mi": "hāpoko", "gr": "adj", "en": ["swampy, boggy"]}
{"mi": "hapui", "gr": "adj", "en": ["engaged to be married"]}
{"mi": "haramai", "gr": "noun", "en": ["welcome"]}
{"mi": "haramai", "gr": "verb", "en": ["come"]}
{"mi": "harapaki", "gr": "noun", "en": ["hillside, slopes"]}
{"mi": "hārapa", "gr": "verb", "en": ["lead the way"]}
{"mi": "harapuku", "gr": "adj", "en": ["puzzled"]}
{"mi": "haratau", "gr": "adj", "en": ["suitable, fit"]}
{"mi": "hārau", "gr": "verb", "en": ["to win", "to fumble; to grasp"]}
{"mi": "harawene", "gr": "noun", "en": ["envy, jealousy"]}
{"mi": "harawene", "gr": "adj", "en": ["envious, jealous"]}
{"mi": "harirū", "gr": "verb", "en": ["shake hands"]}
{"mi": "hāro", "gr": "verb", "en": ["to scrape", "to scutch i.e. remove waxy outer layer of harakeke (Phormium tenax) leaves exposing inner fibres (muka) to be woven as fabric", "to plane or smoothen wood"]}
{"mi": "hāro", "gr": "adj", "en": ["smooth", "calm (of sea)", "low (of tides)"]}
{"mi": "harore", "gr": "noun", "en": ["fungus, mushrooms"]}
{"mi": "hāroto", "gr": "noun", "en": ["pool, pond"]}
{"mi": "haruru", "gr": "noun", "en": ["rumble, roar"]}
{"mi": "hātakēhi", "gr": "adj", "en": ["comical"]}
{"mi": "hauangi", "gr": "adj", "en": ["cool, airy"]}
{"mi": "hauarea", "gr": "adj", "en": ["insignificant"]}
{"mi": "hauāuru", "gr": "noun", "en": ["west", "west wind"]}
{"mi": "hauhanga", "gr": "noun", "en": ["frost"]}
{"mi": "haukaha", "gr": "adj", "en": ["very windy"]}
{"mi": "haukaha", "gr": "verb", "en": ["reinforce, bolster", "amend"]}
{"mi": "haukai", "gr": "noun", "en": ["feast"]}
{"mi": "haukāinga", "gr": "noun", "en": ["true home", "homepage"]}
{"mi": "haukoti", "gr": "verb", "en": ["intercept", "abort"]}
{"mi": "haumākū", "gr": "verb", "en": ["get wet"]}
{"mi": "haumākū", "gr": "adj", "en": ["moist"]}
{"mi": "haunga", "gr": "noun", "en": ["stench, stink"]}
{"mi": "haunga", "gr": "verb", "en": ["to stink, to reek"]}
{"mi": "haurahi", "gr": "noun", "en": ["dew"]}
{"mi": "haurangi", "gr": "adj", "en": ["drunk"]}
{"mi": "hauraro", "gr": "noun", "en": ["north wind"]}
{"mi": "hauraro", "gr": "verb", "en": ["to hang down", "to surrender"]}
{"mi": "haututū", "gr": "adj", "en": ["insubordinate; naughty, noncompliant"]}
{"mi": "hautū", "gr": "noun", "en": ["leader"]}
{"mi": "hautū", "gr": "verb", "en": ["to lead"]}
{"mi": "hauware", "gr": "noun", "en": ["saliva"]}
{"mi": "hāwini", "gr": "noun", "en": ["servant"]}
{"mi": "heahea", "gr": "adj", "en": ["crazy, stupid, inane"]}
{"mi": "hēkena", "gr": "noun", "en": ["second"]}
{"mi": "heketua", "gr": "noun", "en": ["toilet"]}
{"mi": "hēmanawa", "gr": "adj", "en": ["breathless; stressed"]}
{"mi": "hēmanawatanga", "gr": "noun", "en": ["frustration", "depression"]}
{"mi": "hemokai", "gr": "noun", "en": ["hunger"]}
{"mi": "hemokai", "gr": "verb", "en": ["starve"]}
{"mi": "hemorere", "gr": "adj", "en": ["sudden"]}
{"mi": "hemorere", "gr": "adv", "en": ["suddenly"]}
{"mi": "herehere", "gr": "verb", "en": ["to tie up (a number of times), bind, tie, shackle, hobble."]}
{"mi": "herehere", "gr": "noun", "en": ["prisoner"]}
{"mi": "heuheu", "gr": "verb", "en": ["to clear away, to remove", "to disperse"]}
{"mi": "heuheu", "gr": "noun", "en": ["brushwood"]}
{"mi": "heuheu", "gr": "verb", "en": ["shave"]}
{"mi": "hiainu", "gr": "noun", "en": ["thirst"]}
{"mi": "hiainu", "gr": "adj", "en": ["thirsty"]}
{"mi": "kararua", "gr": "noun", "en": ["purple storm snail (Janthina janthina)"]}
{"mi": "rāwhiti", "gr": "noun", "en": ["east"]}
{"mi": "tōkai", "gr": "verb", "en": ["to copulate"]}
{"mi": "kūkupa", "gr": "noun", "en": ["A pigeon."]}
{"mi": "karikari", "gr": "verb", "en": ["to strip off (of bark etc.)"]}
{"mi": "karikari", "gr": "noun", "en": ["notch"]}
{"mi": "piapia", "gr": "adj", "en": ["viscid; glairy"]}
{"mi": "moenga", "gr": "noun", "en": ["a bed"]}
{"mi": "pane koti", "gr": "noun", "en": ["skirt"]}
{"mi": "ruruku", "gr": "verb", "en": ["to wrap"]}
{"mi": "ia rā", "gr": "adv", "en": ["As frequently as every day; daily."]}
{"mi": "ia wiki", "gr": "adv", "en": ["As frequently as every week; weekly.", "ia rā", "ia marama", "ia tau"]}
{"mi": "ia marama", "gr": "adv", "en": ["As frequently as every month; monthly."]}
{"mi": "ia tau", "gr": "adv", "en": ["As frequently as every year; yearly, annually.", "ia rā", "ia marama", "ia wiki"]}
{"mi": "hinahina", "gr": "adj", "en": ["grey-haired"]}
{"mi": "hinahina", "gr": "noun", "en": ["Melicytus ramiflorus."]}
{"mi": "ōna", "gr": "det", "en": ["his, her; dual/plural inalienable"]}
{"mi": "Meri Kirihimete", "gr": "noun", "en": ["merry Christmas"]}
{"mi": "tonu", "gr": "adv", "en": ["still, yet", "nonetheless, all the same", "very, exceedingly", "indeed, in fact", "on the contrary", "immediately, promptly", "quite, fairly", "almost, just about, virtually"]}
{"mi": "atiti", "gr": "noun", "en": ["acid"]}
{"mi": "atiti", "gr": "verb", "en": ["to wander; to moan"]}
{"mi": "kārikiuri", "gr": "noun", "en": ["dark green"]}
{"mi": "marutau", "gr": "adj", "en": ["safe"]}
{"mi": "marutau", "gr": "noun", "en": ["safety"]}
{"mi": "haumaru", "gr": "adj", "en": ["safe"]}
{"mi": "haumaru", "gr": "noun", "en": ["low frequency sound"]}
{"mi": "pūkāea", "gr": "noun", "en": ["a kind of long wooden trumpet, traditionally used to relay signals during times of conflict and other important occasions"]}
{"mi": "pāremata", "gr": "noun", "en": ["parliament"]}
{"mi": "tekoteko", "gr": "noun", "en": ["Carved figure as a finial on the gable of a house"]}
{"mi": "kōpakipaki", "gr": "noun", "en": ["maize, corn"]}
{"mi": "kōpaki", "gr": "noun", "en": ["husk", "envelope, wrapper", "pie"]}
{"mi": "kōpaki", "gr": "verb", "en": ["to fold", "to wrap, cover"]}
{"mi": "rongonui", "gr": "adj", "en": ["famous; well-known; renowned"]}
{"mi": "rongonui", "gr": "noun", "en": ["fame; renown"]}
{"mi": "turaki", "gr": "verb", "en": ["to push over", "to oppose", "to overthrow"]}
{"mi": "tawhai rauriki", "gr": "noun", "en": ["black beech (Nothofagus solandri)."]}
{"mi": "pukuhiko", "gr": "noun", "en": ["electrical generator"]}
{"mi": "matawā", "gr": "noun", "en": ["clock", "watch", "chronometer"]}
{"mi": "uaua", "gr": "noun", "en": ["blood vessel", "vein; artery", "sinew; tendon", "muscle", "difficulty; dilemma; problem; trouble"]}
{"mi": "uaua", "gr": "verb", "en": ["difficult; hard; demanding"]}
{"mi": "uaua", "gr": "adj", "en": ["strenuous; pertinacious"]}
{"mi": "uaua", "gr": "noun", "en": ["firmness, resolution"]}
{"mi": "Pōneke", "gr": "name", "en": ["Wellington (the capital city of New Zealand)"]}
{"mi": "hāngī", "gr": "noun", "en": ["hangi (a traditional Māori pit oven, in which suitably wrapped raw food is lain on a base of heated stones; or, food cooked in this way)"]}
{"mi": "Ōtākou", "gr": "name", "en": ["Otago (a region of New Zealand)"]}
{"mi": "Te Ika-a-Māui", "gr": "name", "en": ["North Island (an island of New Zealand)"]}
{"mi": "Te Ika-nui-a-Māui", "gr": "name", "en": ["alternative form of Te Ika-a-Māui"]}
{"mi": "Te Waka-a-Māui", "gr": "name", "en": ["South Island (an island of New Zealand)"]}
{"mi": "Te Waipounamu", "gr": "name", "en": ["South Island (an island of New Zealand)"]}
{"mi": "Manawatū-Whanganui", "gr": "name", "en": ["Manawatu-Wanganui (a region of New Zealand)"]}
{"mi": "Whakatāne", "gr": "name", "en": ["Whakatane (a town in New Zealand)", "Whakatane (a river in New Zealand)"]}
{"mi": "purei", "gr": "noun", "en": ["play (dramatic performance)"]}
{"mi": "rī", "gr": "verb", "en": ["to bind", "to insure"]}
{"mi": "rī", "gr": "verb", "en": ["to block, to screen off", "to protect"]}
{"mi": "wharekai", "gr": "noun", "en": ["any eating establishment e.g. restaurants, canteens etc.", "The dining hall in a marae."]}
{"mi": "wahangū", "gr": "verb", "en": ["to be silent, to be quiet", "to be mute", "to be reserved"]}
{"mi": "wahangū", "gr": "adj", "en": ["quiet, still", "mute, dumb (unable to speak)", "reserved"]}
{"mi": "wahangū", "gr": "noun", "en": ["dumbness, being mute"]}
{"mi": "tāwhiri", "gr": "noun", "en": ["welcoming, a welcome"]}
{"mi": "tāwhiri", "gr": "verb", "en": ["to wave", "to whirl", "to beckon, to welcome", "to fan (esp. of flames)", "to wring out"]}
{"mi": "uira", "gr": "noun", "en": ["lightning", "electricity", "glow"]}
{"mi": "uira", "gr": "verb", "en": ["to flash, to gleam"]}
{"mi": "ngākau", "gr": "noun", "en": ["heart, mind, soul", "intestines, bowels"]}
{"mi": "mōmona", "gr": "noun", "en": ["fat, corpulence, obesity", "fertility, richness"]}
{"mi": "mōmona", "gr": "adj", "en": ["fatty", "fat, plump", "fertile, rich"]}
{"mi": "puta noa", "gr": "prep", "en": ["across", "throughout", "everywhere, all over"]}
{"mi": "puta noa", "gr": "adj", "en": ["unlimited"]}
{"mi": "mārama", "gr": "noun", "en": ["light, shine", "brightness", "lucidity, clarity", "transparency"]}
{"mi": "mārama", "gr": "adj", "en": ["lucid, clear, bright", "transparent"]}
{"mi": "apiapi", "gr": "adj", "en": ["crowded together"]}
{"mi": "tīare", "gr": "noun", "en": ["fragrance, scent", "gardenia"]}
{"mi": "tangihia", "gr": "verb", "en": ["passive of tangi"]}
{"mi": "pungapunga", "gr": "noun", "en": ["pumice"]}
{"mi": "pungapunga", "gr": "noun", "en": ["ankle"]}
{"mi": "koromatua", "gr": "noun", "en": ["chief, mayor", "thumb"]}
{"mi": "ngaru", "gr": "noun", "en": ["wave"]}
{"mi": "pupuru", "gr": "adj", "en": ["pulpy", "almost liquid/solid, curdled"]}
{"mi": "kaitōrangapū", "gr": "noun", "en": ["politician"]}
{"mi": "pānui", "gr": "verb", "en": ["announce, notify, advertise, publish, proclaim"]}
{"mi": "pānui", "gr": "verb", "en": ["read, speak aloud, narrate, recite"]}
{"mi": "pānui", "gr": "noun", "en": ["public notice, announcement, poster, proclamation"]}
{"mi": "whutupōro", "gr": "noun", "en": ["rugby"]}
{"mi": "Ōpango", "gr": "noun", "en": ["All Blacks"]}
{"mi": "pōro", "gr": "noun", "en": ["ball"]}
{"mi": "kaiwawao", "gr": "noun", "en": ["referee, umpire"]}
{"mi": "wawao", "gr": "verb", "en": ["referee, umpire"]}
{"mi": "kaimātakitaki", "gr": "noun", "en": ["spectator, onlooker, audience, observer"]}
{"mi": "mātakitaki", "gr": "verb", "en": ["watch, gaze, inspect, examine, observe"]}
{"mi": "mātakitaki", "gr": "noun", "en": ["inspection, observation, sightseeing"]}
{"mi": "poitarawhiti", "gr": "noun", "en": ["alternative form of poi tarawhiti (“netball”)"]}
{"mi": "whiu", "gr": "verb", "en": ["toss, throw, fling", "drive (animals, etc), herd", "present", "penalise, punish, lash, whip, chastise, flog"]}
{"mi": "whiu", "gr": "noun", "en": ["penalty, sentence, punishment", "hitting, wielding, knocking, driving"]}
{"mi": "whiu", "gr": "verb", "en": ["be satisfied (with food)"]}
{"mi": "whakataka", "gr": "verb", "en": ["to drop, toss off, cause to fall, throw down, depose, overthrow, abdicate", "to prepare", "to muster, assemble, gather", "to turn, deviate, divert", "to take a circuitous route", "surround, encircle"]}
{"mi": "whakataka", "gr": "noun", "en": ["preparation", "assembly, muster, gathering, expedition", "director, chief, administrator, controller, leader", "whakataka, Corokia macrocarpa (a shrub or tree to 6 m tall with stout branches and dark, rough bark. Leaves are leathery and shiny on top with white tomentum underneath. Petals are bright yellow and drupes yellow, dark red to black.)"]}
{"mi": "whare pikitia", "gr": "noun", "en": ["cinema, movie theatre, picture theatre"]}
{"mi": "kōata", "gr": "noun", "en": ["glass (material)", "glass (drinking vessel)"]}
{"mi": "ngaro", "gr": "verb", "en": ["to be hidden, out of sight, covered, disappeared, absent", "to destroy"]}
{"mi": "ngaro", "gr": "noun", "en": ["blowfly, in connection with mākutu the fly represented the life or spirit of the person involved.", "houseflies of various species, any plump winged insect"]}
{"mi": "ngaro", "gr": "noun", "en": ["roller (for moving a canoe, etc)"]}
{"mi": "huahae", "gr": "noun", "en": ["catkin"]}
{"mi": "piritoka", "gr": "noun", "en": ["limpet"]}
{"mi": "ōriwa", "gr": "noun", "en": ["olive", "olive tree"]}
{"mi": "pahirini", "gr": "noun", "en": ["chaffinch"]}
{"mi": "rāhipere", "gr": "noun", "en": ["raspberry"]}
{"mi": "rāpere", "gr": "noun", "en": ["raspberry"]}
{"mi": "kumikumi", "gr": "noun", "en": ["beard, moustache, whiskers", "bristles"]}
{"mi": "turakina", "gr": "verb", "en": ["passive of turaki"]}
{"mi": "hākete", "gr": "noun", "en": ["jacket"]}
{"mi": "hākete whakaora", "gr": "noun", "en": ["life jacket"]}
{"mi": "kahu kautere", "gr": "noun", "en": ["life jacket"]}
{"mi": "Peratiamu", "gr": "name", "en": ["Belgium (a country in Western Europe that has borders with the Netherlands, Germany, Luxembourg and France)"]}
{"mi": "Peretiama", "gr": "name", "en": ["Belgium (a country in Europe)"]}
{"mi": "Paratiamu", "gr": "name", "en": ["Belgium (a country in Europe)"]}
{"mi": "Parahara", "gr": "name", "en": ["Brussels (the capital city of Belgium)"]}
{"mi": "meremere", "gr": "noun", "en": ["a short weapon typically made out of stone or greenstone", "scapular feather"]}
{"mi": "toka ngiha", "gr": "noun", "en": ["igneous rock"]}
{"mi": "tioata", "gr": "noun", "en": ["crystal"]}
{"mi": "Wēra", "gr": "noun", "en": ["Wales (a constituent country of the United Kingdom)"]}
{"mi": "whare none", "gr": "noun", "en": ["nunnery, convent"]}
{"mi": "whare pūrākau", "gr": "noun", "en": ["school of learning where tohunga taught esoteric knowledge, rituals, karakia, history and creation narratives. A term used particularly by Ngāi Tahu for the whare wānanga."]}
{"mi": "whare tūpāpaku", "gr": "noun", "en": ["morgue"]}
{"mi": "whare maita", "gr": "noun", "en": ["bowling pavilion"]}
{"mi": "kāoa", "gr": "noun", "en": ["coral"]}
{"mi": "kāoa", "gr": "adj", "en": ["coral"]}
{"mi": "ihumoana", "gr": "noun", "en": ["Portuguese man-of-war (Physalia physalis)"]}
{"mi": "ihu moana", "gr": "noun", "en": ["alternative form of ihumoana"]}
{"mi": "huru moana", "gr": "noun", "en": ["freshwater hydra (Hydra vulgaris)"]}
{"mi": "Wikitoria", "gr": "name", "en": ["a female given name, equivalent to English Victoria"]}
{"mi": "tāu", "gr": "det", "en": ["your; singular alienable"]}
{"mi": "kōpī", "gr": "noun", "en": ["Corynocarpus laevigatus", "ginger, Zingiber officinale"]}
{"mi": "pōwhiri", "gr": "verb", "en": ["to invite", "to beckon, to welcome"]}
{"mi": "pōwhiri", "gr": "noun", "en": ["welcoming, a welcome", "invitation"]}
{"mi": "tāna", "gr": "det", "en": ["his/her; singular alienable"]}
{"mi": "Waitohi", "gr": "name", "en": ["Picton (a town in New Zealand)"]}
{"mi": "Ōreti", "gr": "name", "en": ["Lumsden (a town in New Zealand)"]}
{"mi": "Motupōhue", "gr": "name", "en": ["Bluff (a town in New Zealand)"]}
{"mi": "Tairāwhiti", "gr": "name", "en": ["Gisborne (a city in New Zealand)"]}
{"mi": "Hakatere", "gr": "name", "en": ["Ashburton (a town in New Zealand)"]}
{"mi": "Māwhera", "gr": "name", "en": ["Greymouth (a town in New Zealand)"]}
{"mi": "Maruawai", "gr": "name", "en": ["Gore (a town in New Zealand)"]}
{"mi": "Mēhiko", "gr": "name", "en": ["Mexico (a country in North America)"]}
{"mi": "Kiupa", "gr": "name", "en": ["Cuba (a country, the largest island (based on land area) in the Caribbean)"]}
{"mi": "Kūpā", "gr": "name", "en": ["Cuba (a country in North America)"]}
{"mi": "Werinia", "gr": "name", "en": ["Virginia (a state of the United States)"]}
{"mi": "Wirinia", "gr": "name", "en": ["Virginia (a state of the United States)"]}
{"mi": "Hana Paraniko", "gr": "name", "en": ["San Francisco (a city in California, United States)"]}
{"mi": "Ūtā", "gr": "name", "en": ["Utah (a state of the United States)"]}
{"mi": "Iutā", "gr": "name", "en": ["Utah (a state of the United States)"]}
{"mi": "Ngā Ānahera", "gr": "name", "en": ["Los Angeles (a city in California, United States)"]}
{"mi": "Itaho", "gr": "name", "en": ["Idaho (a state of the United States)"]}
{"mi": "he aha te taima", "gr": "phrase", "en": ["what time is it?"]}
{"mi": "hapūtanga", "gr": "noun", "en": ["pregnancy"]}
{"mi": "kāwhe", "gr": "noun", "en": ["calf, a young cow or bull"]}
{"mi": "hōkete", "gr": "noun", "en": ["hogget"]}
{"mi": "kareni", "gr": "noun", "en": ["crane, a bird of the family Gruidae"]}
{"mi": "Hemeika", "gr": "name", "en": ["Jamaica (an island and country in the Caribbean)"]}
{"mi": "Patakonia", "gr": "name", "en": ["Patagonia (a region of South America)"]}
{"mi": "rātaka", "gr": "noun", "en": ["diary"]}
{"mi": "hūngoingoi", "gr": "adj", "en": ["wimpy, cowardly, spineless, faint-hearted, uncourageous", "weak, frail, slow"]}
{"mi": "hūngoingoi", "gr": "verb", "en": ["to tremble"]}
{"mi": "hūngoingoi", "gr": "noun", "en": ["elderly woman"]}
{"mi": "nihoniho", "gr": "adj", "en": ["toothed, serrated", "quarrelsome, cantankerous"]}
{"mi": "āhahā", "gr": "intj", "en": ["damn it, bugger, bloody hell; an expression to express disappointment, surprise or anger"]}
{"mi": "Te Tai Kōura", "gr": "name", "en": ["the Gold Coast (a city in Queensland, Australia)"]}
{"mi": "moehewa", "gr": "verb", "en": ["to dream", "to delude oneself"]}
{"mi": "moehewa", "gr": "noun", "en": ["dream"]}
{"mi": "Niu Ioka", "gr": "name", "en": ["New York, New York City (the largest city in the state of New York, and the largest city in the United States, a metropolis extending into neighboring New Jersey in addition to Pennsylvania and Connecticut)", "New York (a state of the United States)"]}
{"mi": "Waikanae", "gr": "name", "en": ["a town in Kapiti Coast district, Wellington region, New Zealand."]}
{"mi": "Karon", "gr": "name", "en": ["Charon (a moon of Pluto)"]}
{"mi": "pīrangi", "gr": "verb", "en": ["to crave, want, desire", "to need", "to like"]}
{"mi": "pīrangi", "gr": "noun", "en": ["desire, wish", "aspiration, hope"]}
{"mi": "kikokiko", "gr": "noun", "en": ["flesh, meat"]}
{"mi": "kikokiko", "gr": "adj", "en": ["malevolent, malicious"]}
{"mi": "paura pūmua", "gr": "noun", "en": ["protein powder"]}
{"mi": "pūmua", "gr": "noun", "en": ["protein"]}
{"mi": "pūmua whākōkī", "gr": "noun", "en": ["enzyme"]}
{"mi": "whākōkī", "gr": "noun", "en": ["catalyst"]}
{"mi": "hūware", "gr": "noun", "en": ["spit, saliva"]}
{"mi": "emepaea", "gr": "noun", "en": ["empire (political unit, having numerous or extensive territories)", "empire (political unit ruled by an emperor)"]}
{"mi": "Arame", "gr": "name", "en": ["Aram (a historical region mentioned in early cuneiforms and in the Bible, located in modern Syria as well as parts of Iraq, Lebanon and southeastern Turkey; inhabited by Arameans)"]}
{"mi": "mate pukupuku", "gr": "noun", "en": ["cancer"]}
{"mi": "pōhara", "gr": "noun", "en": ["poverty", "a poor person"]}
{"mi": "pōhara", "gr": "adj", "en": ["poor; impoverished; destitute"]}
{"mi": "pōhara", "gr": "verb", "en": ["to be poor, impoverished, destitute"]}
{"mi": "aneane", "gr": "verb", "en": ["to be sharp"]}
{"mi": "kuia", "gr": "noun", "en": ["grandmother, old woman, female elder"]}
{"mi": "whakaaro", "gr": "verb", "en": ["to think, plan, consider, decide"]}
{"mi": "raumati", "gr": "noun", "en": ["summer"]}
{"mi": "kauhoe", "gr": "verb", "en": ["to swim"]}
{"mi": "aramona", "gr": "noun", "en": ["almond"]}
{"mi": "hinganga", "gr": "noun", "en": ["fall, defeat, demise"]}
{"mi": "kaipatu tohorā", "gr": "noun", "en": ["whaler"]}
{"mi": "kaipatu kekeno", "gr": "noun", "en": ["sealer, seal-hunter"]}
{"mi": "kekeno", "gr": "noun", "en": ["New Zealand fur seal (Arctocephalus forsteri)"]}
{"mi": "kaikoropeke", "gr": "noun", "en": ["skinflint, miser, niggard"]}
{"mi": "kumete", "gr": "noun", "en": ["bowl"]}
{"mi": "karetao", "gr": "noun", "en": ["puppet", "robot"]}
{"mi": "karetao", "gr": "adj", "en": ["robotic, tokenistic, insincere"]}
{"mi": "kāhui", "gr": "noun", "en": ["group, cluster", "flock, herd, swarm"]}
{"mi": "ringa karetao", "gr": "noun", "en": ["puppeteer"]}
{"mi": "tāke", "gr": "noun", "en": ["tax, a sum paid to the government for monetary transactions"]}
{"mi": "tāke", "gr": "verb", "en": ["to tax something or someone"]}
{"mi": "pahū", "gr": "noun", "en": ["drum (slotted or skinned)"]}
{"mi": "pahū", "gr": "verb", "en": ["to burst, to explode"]}
{"mi": "pahū", "gr": "noun", "en": ["boom, bang", "explosion", "bomb"]}
{"mi": "marama hua", "gr": "noun", "en": ["full moon"]}
{"mi": "kupenga", "gr": "noun", "en": ["net"]}
{"mi": "māhī", "gr": "verb", "en": ["to ferment", "to putrefy"]}
{"mi": "moī", "gr": "verb", "en": ["to ferment"]}
{"mi": "pirikahu", "gr": "noun", "en": ["sheep"]}
{"mi": "tahā", "gr": "noun", "en": ["calabash, container using dried shell of bottle gourd fruit"]}
{"mi": "mangeo", "gr": "noun", "en": ["itch, irritation, smart", "acridity", "annoyance, frustration"]}
{"mi": "mangeo", "gr": "adj", "en": ["itchy, smarting", "acrid"]}
{"mi": "mangeo", "gr": "verb", "en": ["to itch, to irritate"]}
{"mi": "pangakupu", "gr": "noun", "en": ["crossword"]}
{"mi": "puehu", "gr": "noun", "en": ["pollen", "dust"]}
{"mi": "puehu", "gr": "adj", "en": ["dusty", "mealy, floury"]}
{"mi": "Kaperenauma", "gr": "name", "en": ["Capernaum (an ancient town in Galilee, Israel, a biblical and archaeological site)"]}
{"mi": "Nahareta", "gr": "name", "en": ["Nazareth (a city in northern Israel)"]}
{"mi": "Haiwha", "gr": "name", "en": ["Haifa (a port city in northern Israel)", "Haifa (a district of Israel)"]}
{"mi": "Karirī", "gr": "name", "en": ["Galilee (a mountainous geographic region in northern Israel)"]}
{"mi": "Heriko", "gr": "name", "en": ["Jericho (a city in the West Bank, Palestine)"]}
{"mi": "Peterehema", "gr": "name", "en": ["Bethlehem (a city in the West Bank, Palestine, believed to be the birthplace of Jesus)"]}
{"mi": "Kāha", "gr": "name", "en": ["Gaza (a city in the Gaza Strip, Palestine in the Levant; in full, Gaza City)", "Gaza (a governorate of the Gaza Strip, Palestine, around the city)"]}
{"mi": "Hawha", "gr": "name", "en": ["Jaffa (a port in western Israel)"]}
{"mi": "Nekepe", "gr": "name", "en": ["Negev (a desert region in southern Israel)"]}
{"mi": "Paretai Uru", "gr": "name", "en": ["West Bank (a region of Palestine)"]}
{"mi": "Rāwhiti Waenga", "gr": "name", "en": ["Middle East (the geopolitical region at the intersection of Asia, Africa and Europe, comprising West Asia excluding the South Caucasus and additionally including all of Egypt and all of Turkey)"]}
{"mi": "Taipīria", "gr": "name", "en": ["Tiberias (a town in the Northern District, on the Sea of Galilee in Israel)"]}
{"mi": "Āhia", "gr": "name", "en": ["Asia (the largest continent, located between Europe and the Pacific Ocean)"]}
{"mi": "Te Moana-nui-a-Kiwa", "gr": "name", "en": ["Pacific Ocean (an ocean, the world's largest body of water, to the east of Asia and Australasia and to the west of the Americas)"]}
{"mi": "Te Moana Mate", "gr": "name", "en": ["Dead Sea (a lake in the Middle East in Palestine and Jordan, noted for high salinity and for its banks being the lowest land-based elevation on Earth)"]}
{"mi": "hītori", "gr": "noun", "en": ["history"]}
{"mi": "Erata", "gr": "name", "en": ["Eilat (a city in southern Israel)"]}
{"mi": "Te Awarua o Kāha", "gr": "name", "en": ["Gaza Strip (a region in Palestine between Egypt and Israel)"]}
{"mi": "Aharoro", "gr": "name", "en": ["Ashdod (a city and seaport in Israel, on the Mediterranean Sea)"]}
{"mi": "Terewiwi", "gr": "name", "en": ["Tel Aviv (a city in Israel that later merged with Jaffa to form Tel Aviv-Yafo)"]}
{"mi": "paretai", "gr": "noun", "en": ["river bank", "washboard (of a canoe)"]}
{"mi": "Heperona", "gr": "name", "en": ["Hebron (a city in the West Bank, Palestine; holy in both Judaism and Islam)"]}
{"mi": "wakarere", "gr": "noun", "en": ["aeroplane, airplane"]}
{"mi": "whakatangi", "gr": "verb", "en": ["to make something or someone cry", "to play a musical instrument"]}
{"mi": "kākano", "gr": "noun", "en": ["pip, kernel, flesh (of a coconut)"]}
{"mi": "kanohi", "gr": "noun", "en": ["face", "view, sight, vision", "eye, eyeball"]}
{"mi": "kakano", "gr": "noun", "en": ["texture, grain (of wood)", "variety"]}
{"mi": "kakano", "gr": "noun", "en": ["berry"]}
{"mi": "kaokao", "gr": "noun", "en": ["side, flank (of the body, hills and mountains, canoes, etc.)", "ribs"]}
{"mi": "kaokao", "gr": "adj", "en": ["sideways"]}
{"mi": "kitenga", "gr": "noun", "en": ["sight"]}
{"mi": "mahi kāinga", "gr": "noun", "en": ["homework (preliminary or preparatory work)"]}
{"mi": "muhumuhu", "gr": "adj", "en": ["discontented (experiencing discontent, dissatisfaction)"]}
{"mi": "kāore i te ngākau nui", "gr": "adj", "en": ["discontented"]}
{"mi": "upoko", "gr": "noun", "en": ["head", "paragraph", "heading", "chapter", "headline"]}
{"mi": "upoko", "gr": "verb", "en": ["to meet and discuss", "to consider or deliberate"]}
{"mi": "rongonga", "gr": "noun", "en": ["hearing (sense)"]}
{"mi": "kihukihu", "gr": "noun", "en": ["fringes, thrums, tassels"]}
{"mi": "namunamuā", "gr": "noun", "en": ["flavour", "spice"]}
{"mi": "amiami", "gr": "noun", "en": ["spice, herb"]}
{"mi": "atamai", "gr": "adj", "en": ["nimble", "intelligent, smart, quickwitted, of sharp mind"]}
{"mi": "akau", "gr": "noun", "en": ["alternative form of ākau"]}
{"mi": "whaki", "gr": "noun", "en": ["to pluck, to pick (of fruit)", "to harvest"]}
{"mi": "whāki", "gr": "verb", "en": ["to reveal, to disclose", "to admit, confess"]}
{"mi": "nekeneke", "gr": "verb", "en": ["to move gradually, to edge, to manoeuvre"]}
{"mi": "Te Riu-a-Māui", "gr": "name", "en": ["Zealandia, a large mass of continental crust around the islands of New Zealand."]}
{"mi": "āpōpō", "gr": "noun", "en": ["tomorrow", "the future"]}
{"mi": "pongipongi", "gr": "adj", "en": ["dim, of low light"]}
{"mi": "pongipongi", "gr": "noun", "en": ["dawn"]}
{"mi": "tekau mano", "gr": "num", "en": ["ten thousand"]}
{"mi": "Harawīni", "gr": "name", "en": ["Halloween"]}
{"mi": "Pō whakamataku", "gr": "name", "en": ["Halloween"]}
{"mi": "whakamataku", "gr": "noun", "en": ["fright, fear"]}
{"mi": "whakamataku", "gr": "adj", "en": ["frightening"]}
{"mi": "whakamataku", "gr": "verb", "en": ["to terrify, to scare, to frighten"]}
{"mi": "hākaro", "gr": "verb", "en": ["to hollow out"]}
{"mi": "hākaro", "gr": "adj", "en": ["hollowed"]}
{"mi": "urunga", "gr": "noun", "en": ["pillow"]}
{"mi": "urunga", "gr": "noun", "en": ["entrance (act of entering)"]}
{"mi": "urunga", "gr": "noun", "en": ["rudder"]}
{"mi": "ripi", "gr": "verb", "en": ["to cut, to slice, to gash", "to skim or glide or ricochet off the water surface"]}
{"mi": "ripi", "gr": "noun", "en": ["special tool with long, oval blade used to pry out pāua from rocks", "a type of chisel to carve long grooves on wood", "discus, flat plate thrown as sport", "stone skipping, ducks and drakes"]}
{"mi": "uawhatu", "gr": "noun", "en": ["hail"]}
{"mi": "kīnaki", "gr": "noun", "en": ["sauce, condiment, relish"]}
{"mi": "whānako", "gr": "verb", "en": ["to steal"]}
{"mi": "whānako", "gr": "adj", "en": ["thieving"]}
{"mi": "whānako", "gr": "noun", "en": ["theft, steal", "thief"]}
{"mi": "whakaauau", "gr": "verb", "en": ["to smoke"]}
{"mi": "whakaauau", "gr": "verb", "en": ["to modulate"]}
{"mi": "tāhuhu", "gr": "noun", "en": ["ridgepole", "horizontal beam supporting a kite's wings", "lineage"]}
{"mi": "tāhuhu", "gr": "adj", "en": ["eldest", "chief"]}
{"mi": "whiwhi", "gr": "verb", "en": ["to wind round, to fasten", "to wrap around", "to encircle"]}
{"mi": "whiwhi", "gr": "adj", "en": ["entangled, knotted", "complex, complicated"]}
{"mi": "whiwhi", "gr": "noun", "en": ["fat covering entrails"]}
{"mi": "whiwhi", "gr": "verb", "en": ["to acquire, to possess"]}
{"mi": "wharo", "gr": "verb", "en": ["to scrape", "to scold", "to abuse", "to clear one's throat, to expectorate, to hawk"]}
{"mi": "wharo", "gr": "noun", "en": ["cough", "phlegm"]}
{"mi": "rorouira", "gr": "noun", "en": ["computer"]}
{"mi": "kāwai", "gr": "noun", "en": ["tentacle", "tendril, shoot", "lineage, pedigree"]}
{"mi": "maihao", "gr": "noun", "en": ["finger"]}
{"mi": "kōhia", "gr": "noun", "en": ["Passiflora tetrandra, a kind of passionfruit endemic to New Zealand."]}
{"mi": "tiritiri", "gr": "verb", "en": ["to toss about", "to split, to share", "to scatter, to shimmer (of light)", "to disturb"]}
{"mi": "tiritiri", "gr": "noun", "en": ["scattering, apportion", "shimmering, flickering, mirage"]}
{"mi": "makawe", "gr": "noun", "en": ["hair", "ringlet; a lock of it"]}
{"mi": "nīko", "gr": "noun", "en": ["cabbage", "celery pine"]}
{"mi": "nohi", "gr": "noun", "en": ["face"]}
{"mi": "nohi", "gr": "noun", "en": ["Luzuriaga parviflora, a kind of perennial plant found in North Island."]}
{"mi": "tūtaki", "gr": "verb", "en": ["to join together", "to meet", "to shut (of a enclosure), to block, to bolt"]}
{"mi": "tūtaki", "gr": "noun", "en": ["bolt or bar between two sides of a double door, latch"]}
{"mi": "ioio", "gr": "noun", "en": ["blood vessels, veins", "sinews; tendons"]}
{"mi": "ioio", "gr": "adj", "en": ["stiff (of legs, muscles after activity)", "not friable", "obstinate"]}
{"mi": "ioio", "gr": "verb", "en": ["to shred"]}
{"mi": "tawau", "gr": "noun", "en": ["latex or milky sap of any plant.", "rubber, flexible and pliable material made from coagulating natural latex of the rubber tree (Hevea brasiliensis)."]}
{"mi": "konatu", "gr": "verb", "en": ["to stir, to mix, to blend"]}
{"mi": "kōnatunatu", "gr": "verb", "en": ["to stir up, to agitate, to disturb", "to unsettle, to unnerve", "to disconcert"]}
{"mi": "ngaro huruhuru", "gr": "noun", "en": ["bee, any native pollinating insect in the family Colletidae of pan-apian clade Anthophila."]}
{"mi": "keringa", "gr": "noun", "en": ["mine (place where people dig metals)"]}
{"mi": "whakananu", "gr": "verb", "en": ["to contaminate", "to confuse, to make something incoherent or unintelligible", "to jumble", "to mix"]}
{"mi": "hapopo", "gr": "noun", "en": ["a kind of pounamu"]}
{"mi": "kāriki", "gr": "noun", "en": ["green"]}
{"mi": "toroa", "gr": "noun", "en": ["an albatross, especially the royal albatross or wandering albatross", "a tuft of albatross down worn as an adornment."]}
{"mi": "atāta", "gr": "noun", "en": ["video"]}
{"mi": "nanī", "gr": "noun", "en": ["any Brassica plant."]}
{"mi": "rarau", "gr": "noun", "en": ["root"]}
{"mi": "rarau", "gr": "verb", "en": ["to grasp, to grab", "to take root"]}
{"mi": "toretore", "gr": "verb", "en": ["to cut or split into strips, to shred"]}
{"mi": "toretore", "gr": "noun", "en": ["sea anemone"]}
{"mi": "mate pūkahu kakā", "gr": "noun", "en": ["pneumonia"]}
{"mi": "hūhi", "gr": "noun", "en": ["swamp"]}
{"mi": "tukemata", "gr": "noun", "en": ["eyebrow", "scowl"]}
{"mi": "tapahi", "gr": "verb", "en": ["to cut, to chop", "to reap, to harvest (of crops like wheat)", "to amputate limbs"]}
{"mi": "Whiro", "gr": "name", "en": ["The Maori god of darkness.", "The moon on the first night of a lunar month in the traditional Maori calendar.", "The sixteenth night of a lunar month in the Maori calendar, as observed by some tribes.", "The planet Mercury.", "The dwarf planet Pluto."]}
{"mi": "mema pāremata", "gr": "noun", "en": ["Member of Parliament"]}
{"mi": "nohopuku", "gr": "noun", "en": ["fasting (abstention of eating for religious purposes)"]}
{"mi": "nohopuku", "gr": "verb", "en": ["to fast"]}
{"mi": "nohopuku", "gr": "adj", "en": ["fasting"]}
{"mi": "nohopuku", "gr": "noun", "en": ["silence"]}
{"mi": "nohopuku", "gr": "verb", "en": ["to be silent"]}
{"mi": "nohopuku", "gr": "adj", "en": ["silent"]}
{"mi": "Āwherika", "gr": "name", "en": ["Africa (the continent south of Europe and between the Atlantic and Indian Oceans)"]}
{"mi": "Ūropi", "gr": "name", "en": ["Europe (a continent located west of Asia and north of Africa)"]}
{"mi": "ukauka", "gr": "adj", "en": ["prolonged, preserved, long-lasting", "sluggish, slow"]}
{"mi": "ukauka", "gr": "verb", "en": ["to support, to sustain"]}
{"mi": "ukauka", "gr": "noun", "en": ["cash"]}
{"mi": "wharehoko", "gr": "noun", "en": ["shop, store"]}
{"mi": "hekengaru", "gr": "noun", "en": ["surfing, the sport of riding ocean waves on boards"]}
{"mi": "kaiheke", "gr": "noun", "en": ["surfer"]}
{"mi": "pūngāwerewere", "gr": "noun", "en": ["spider"]}
{"mi": "wharenoho", "gr": "noun", "en": ["housing, accommodation", "dormitory, barracks"]}
{"mi": "kekerengu", "gr": "noun", "en": ["A black beetle (Maoriblatta novaeseelandiae)"]}
{"mi": "piropiro", "gr": "adj", "en": ["putrid, stinking"]}
{"mi": "piropiro", "gr": "noun", "en": ["bowels, intestines"]}
{"mi": "piropiro", "gr": "adj", "en": ["calm, still (of water)"]}
{"mi": "tāturi", "gr": "noun", "en": ["earwax"]}
{"mi": "taeturi", "gr": "noun", "en": ["earwax"]}
{"mi": "tau-", "gr": "prefix", "en": ["prefix indicating reciprocal action, added to a verb usually reduplicated"]}
{"mi": "taumarumaru", "gr": "verb", "en": ["to overshadow"]}
{"mi": "taupatupatu", "gr": "verb", "en": ["to beat or hit one another", "to compete or vie against one another for something", "to debate"]}
{"mi": "reanga", "gr": "noun", "en": ["generation, the members of a family from the same parents"]}
{"mi": "kapiti", "gr": "verb", "en": ["to bring close together", "to join (of one separate thing to another)", "to clench, to shut", "to confine or surround (of an area)"]}
{"mi": "kapiti", "gr": "noun", "en": ["cleft, crevice", "gorge, pass of a mountain", "slot (for receiving cards, coins etc)"]}
{"mi": "potapota", "gr": "adj", "en": ["broken, fragmented"]}
{"mi": "riaki", "gr": "verb", "en": ["to lift up or raise, to elevate", "to stick or stand out", "to pop out or bulge (of veins)"]}
{"mi": "pūtea", "gr": "noun", "en": ["a special basket woven from leaves of harakeke (Phormium tenax) to hold belongings like clothing", "savings", "fund", "finance"]}
{"mi": "pūtea", "gr": "adj", "en": ["financial"]}
{"mi": "kukū", "gr": "verb", "en": ["to grate, to scrape", "to make a grating sound"]}
{"mi": "hākuku", "gr": "verb", "en": ["to scrape (especially of Phormium leaves like harakeke prior to weaving)"]}
{"mi": "hākuku", "gr": "noun", "en": ["radula (tongue of mollusks used to scrape rocks)"]}
{"mi": "taumata", "gr": "noun", "en": ["pinnacle (highest point)"]}
{"mi": "Tamatea", "gr": "name", "en": ["the Moon, on the 8th night of a lunar month"]}
{"mi": "pūkākā", "gr": "adj", "en": ["volatile, fiery, hotheaded"]}
{"mi": "pūkākā", "gr": "verb", "en": ["to be hot, eager"]}
{"mi": "pūkaka", "gr": "adj", "en": ["direct (straight, constant, without interruption)"]}
{"mi": "pūkaka", "gr": "noun", "en": ["humerus, thighbone"]}
{"mi": "Marama", "gr": "name", "en": ["the Moon (sole natural satellite of the Earth)"]}
{"mi": "Papatūānuku", "gr": "name", "en": ["mother earth deity in Māori mythology spouse to Ranginui"]}
{"mi": "Papatūānuku", "gr": "name", "en": ["the Earth (third planet of the Solar System)"]}
{"mi": "Tamanuiterā", "gr": "name", "en": ["the Sun (star)"]}
{"mi": "whānau a Tamanuiterā", "gr": "name", "en": ["the Solar System (the Sun and all the heavenly bodies that orbit around it)"]}
{"mi": "tōna", "gr": "det", "en": ["his, her; singular inalienable"]}
{"mi": "uru-mā-tonga", "gr": "noun", "en": ["southwest (compass point)"]}
{"mi": "tapatapātiu", "gr": "noun", "en": ["northwest (compass point)"]}
{"mi": "pitonga", "gr": "noun", "en": ["southeast (compass point)"]}
{"mi": "kārapu", "gr": "noun", "en": ["northeast (compass point)"]}
{"mi": "karapu", "gr": "noun", "en": ["glove (item of clothing)"]}
{"mi": "karapu", "gr": "noun", "en": ["club (association)"]}
{"mi": "pouaka", "gr": "noun", "en": ["box (cuboid space; container)", "Poa triodioides, a grass that grows on coastal dunes."]}
{"mi": "pouaka karapu", "gr": "noun", "en": ["glove box (glove compartment)"]}
{"mi": "wharepuni", "gr": "noun", "en": ["wharepuni"]}
{"mi": "onioni", "gr": "verb", "en": ["to thrust or twerk one's hips in a sexually suggestive way", "to make love, to copulate, to bed someone"]}
{"mi": "okaoka", "gr": "verb", "en": ["to vaccinate"]}
{"mi": "okaoka", "gr": "noun", "en": ["vaccine"]}
{"mi": "mahi okaoka", "gr": "noun", "en": ["vaccination"]}
{"mi": "hauā", "gr": "adj", "en": ["disabled"]}
{"mi": "hākari", "gr": "noun", "en": ["platform to display or spread food for a feast", "feast, banquet, any huge meal for a special occasion", "gift"]}
{"mi": "hākari", "gr": "noun", "en": ["fish roe", "fine dosinia"]}
{"mi": "kuriri", "gr": "noun", "en": ["Pacific golden plover"]}
{"mi": "hākēkeke", "gr": "noun", "en": ["sooty shearwater"]}
{"mi": "hakituri", "gr": "noun", "en": ["mythical forest guardians"]}
{"mi": "hāmama", "gr": "verb", "en": ["to shout, to yell", "to gape, to be open wide"]}
{"mi": "hāmana", "gr": "noun", "en": ["salmon"]}
{"mi": "rangitahi", "gr": "adj", "en": ["momentary, ephemeral, transient, short-lived, brief"]}
{"mi": "mirumiru", "gr": "noun", "en": ["bubble"]}
{"mi": "mirumiru", "gr": "noun", "en": ["alternative form of miromiro (“North Island tomtit”)"]}
{"mi": "ngirungiru", "gr": "noun", "en": ["Any of subspecies Petroica macrocephala macrocephala of tom-tits of the South Island"]}
{"mi": "whakararo", "gr": "adj", "en": ["bottom; lower", "northern, northerly"]}
{"mi": "whakararo", "gr": "adv", "en": ["downwards"]}
{"mi": "tākihi", "gr": "noun", "en": ["kidney"]}
{"mi": "kaniawhea", "gr": "verb", "en": ["to feel remorseful"]}
{"mi": "kaniawhea", "gr": "noun", "en": ["remorse, regret, guilt, compunction"]}
{"mi": "kangakanga", "gr": "verb", "en": ["to curse, to swear"]}
{"mi": "kangakanga", "gr": "noun", "en": ["swearing, profanity"]}
{"mi": "kaipatu", "gr": "noun", "en": ["beater, striker, attacker", "assailant", "batsman"]}
{"mi": "whakanui", "gr": "verb", "en": ["to enlarge, to magnify", "to celebrate, to honour"]}
{"mi": "whakanui", "gr": "noun", "en": ["celebration"]}
{"mi": "kumi ihuroa", "gr": "noun", "en": ["crocodile"]}
{"mi": "kārani", "gr": "noun", "en": ["gallon"]}
{"mi": "pīwhi", "gr": "noun", "en": ["beef"]}
{"mi": "kāeo", "gr": "noun", "en": ["Cook's turban (Cookia sulcata)", "dark rock shell", "any member of the species Hyridella menziesi of bivalve molluscs"]}
{"mi": "Pāremata Aotearoa", "gr": "noun", "en": ["New Zealand Parliament"]}
{"mi": "mōrehu", "gr": "noun", "en": ["remnant", "survivor"]}
{"mi": "ākonga", "gr": "noun", "en": ["learner, pupil"]}
{"mi": "pikitia", "gr": "noun", "en": ["picture, image"]}
{"mi": "pikitia", "gr": "verb", "en": ["passive of piki"]}
{"mi": "pikinga", "gr": "noun", "en": ["ascent (act of ascending)"]}
{"mi": "whiunga", "gr": "noun", "en": ["punishment"]}
{"mi": "tioro", "gr": "verb", "en": ["to squawk, to screech, to shriek"]}
{"mi": "tioro", "gr": "noun", "en": ["squawk, screech, shriek", "stitchbird"]}
{"mi": "kawau tikitiki", "gr": "noun", "en": ["spotted shag (Phalacrocorax punctatus)"]}
{"mi": "pārekareka", "gr": "noun", "en": ["enjoyment, pleasure", "spotted shag (Phalacrocorax punctatus)"]}
{"mi": "hekerangi", "gr": "verb", "en": ["to parachute"]}
{"mi": "hekerangi", "gr": "noun", "en": ["parachute"]}
{"mi": "kirīmi", "gr": "noun", "en": ["cream"]}
{"mi": "pātiki", "gr": "noun", "en": ["flounder"]}
{"mi": "pātiki", "gr": "verb", "en": ["to be flat, to be level"]}
{"mi": "whetūao", "gr": "noun", "en": ["planet"]}
{"mi": "huringa", "gr": "noun", "en": ["rotation, revolution", "conversion, transformation"]}
{"mi": "rearea", "gr": "noun", "en": ["New Zealand bellbird"]}
{"mi": "māharahara", "gr": "verb", "en": ["to think about frequently", "to be preoccupied, to worry"]}
{"mi": "māharahara", "gr": "noun", "en": ["anxiety, worry"]}
{"mi": "mahara", "gr": "verb", "en": ["to think about", "to recollect, to remember"]}
{"mi": "mahara", "gr": "noun", "en": ["recollection, memory", "spleen"]}
{"mi": "whakamahara", "gr": "verb", "en": ["to remind", "to commemorate"]}
{"mi": "whakamahara", "gr": "noun", "en": ["reminder, memento"]}
{"mi": "hāmeme", "gr": "verb", "en": ["to mutter, to grumble"]}
{"mi": "kōkopu", "gr": "noun", "en": ["cockabully (fish of the genus Gobiomorphus)", "kokopu (fish of the genus Galaxias)"]}
{"mi": "whakapako", "gr": "verb", "en": ["to banish, to exile"]}
{"mi": "hukapuri", "gr": "noun", "en": ["hard frost"]}
{"mi": "huka parauri", "gr": "noun", "en": ["brown sugar"]}
{"mi": "mate huka", "gr": "noun", "en": ["diabetes"]}
{"mi": "pukupuku", "gr": "verb", "en": ["to be lumpy, to be swollen"]}
{"mi": "pukupuku", "gr": "noun", "en": ["gooseflesh, goose pimples", "lump, tumour", "shield", "rasp fern (Doodia media)", "wild pelargonium (Pelargonium inodorum)"]}
{"mi": "potipoti", "gr": "noun", "en": ["box", "a special kind of compartment with a rope-hinged lid used by tohunga"]}
{"mi": "potipoti", "gr": "noun", "en": ["conch trumpet", "sand flea, sandhopper"]}
{"mi": "koata", "gr": "noun", "en": ["quart (unit of measure)"]}
{"mi": "mātaki", "gr": "verb", "en": ["to watch", "to observe, to survey", "to inspect, to examine"]}
{"mi": "mātaki", "gr": "noun", "en": ["inspection"]}
{"mi": "pūreirei", "gr": "verb", "en": ["to be patchy, to be scattered"]}
{"mi": "pūreirei", "gr": "noun", "en": ["cluster", "windthrow", "buffer", "Any of species Carex secta of sedges"]}
{"mi": "kūmera", "gr": "noun", "en": ["sweet potato"]}
{"mi": "pūwhaiau", "gr": "noun", "en": ["bluefin gurnard (Chelidonichthys kumu)"]}
{"mi": "kōhūhū", "gr": "noun", "en": ["kohuhu (Pittosporum tenuifolium)"]}
{"mi": "ngahuru mano", "gr": "num", "en": ["ten thousand"]}
{"mi": "kōtuku", "gr": "noun", "en": ["great egret"]}
{"mi": "ngutu parore", "gr": "noun", "en": ["wrybill (Anarhynchus frontalis)"]}
{"mi": "parore", "gr": "noun", "en": ["luderick (Girella tricuspidata)"]}
{"mi": "pākau", "gr": "noun", "en": ["wing", "shoulder blade", "gully fern (Pakau pennigera)"]}
{"mi": "mangā", "gr": "noun", "en": ["barracouta (Thyrsites atun)"]}
{"mi": "aroarorua", "gr": "noun", "en": ["to be indecisive, to vacillate"]}
{"mi": "atewharowharo", "gr": "noun", "en": ["lung"]}
{"mi": "tarawhiti", "gr": "noun", "en": ["hoop", "torus"]}
{"mi": "tarawhiti", "gr": "verb", "en": ["to encircle"]}
{"mi": "kōwhiti", "gr": "verb", "en": ["to select, to choose", "to pull out, pull off"]}
{"mi": "kōwhiti", "gr": "verb", "en": ["to appear"]}
{"mi": "kōwhiti", "gr": "noun", "en": ["ulna", "cross stich"]}
{"mi": "paoi", "gr": "verb", "en": ["to pound fern root with a wooden beater"]}
{"mi": "paoi", "gr": "noun", "en": ["wooden fern-root pounder", "pestle"]}
{"mi": "whakawhiti", "gr": "verb", "en": ["to transfer, to convey", "to switch, to swap, to exchange"]}
{"mi": "whakawhiti", "gr": "noun", "en": ["crossing over", "exchange"]}
{"mi": "whakawhiti", "gr": "verb", "en": ["causative of whiti (“shine”)"]}
{"mi": "whakawhitinga", "gr": "noun", "en": ["transfer", "transition"]}
{"mi": "waitai", "gr": "noun", "en": ["seawater"]}
{"mi": "matuku", "gr": "noun", "en": ["bittern"]}
{"mi": "awaawa", "gr": "noun", "en": ["groove", "gully, gorge"]}
{"mi": "kōngutu", "gr": "noun", "en": ["mouth (of a river, etc.)"]}
{"mi": "whakaora", "gr": "verb", "en": ["to revive, to resuscitate", "to save, to rescue", "to heal, to cure"]}
{"mi": "kiokio", "gr": "noun", "en": ["palm-leaf fern (Blechnum novae-zelandiae)", "mountain kiokio (Blechnum procerum)", "crown fern (Blechnum discolor)"]}
{"mi": "tānekaha", "gr": "noun", "en": ["celery pine (Phyllocladus trichomanoides, a coniferous tree endemic to New Zealand."]}
{"mi": "ahotea", "gr": "noun", "en": ["heartbreak, heartache", "distress, stress", "celery pine"]}
{"mi": "tāniko", "gr": "verb", "en": ["to finger weave", "to embroider"]}
{"mi": "tāniko", "gr": "noun", "en": ["fingerweaving", "embroidery"]}
{"mi": "nama waea", "gr": "noun", "en": ["telephone number"]}
{"mi": "puananī", "gr": "noun", "en": ["anemochory (wind dispersal of seeds)"]}
{"mi": "pākati", "gr": "verb", "en": ["to block, obstruct"]}
{"mi": "māhuruhuru", "gr": "verb", "en": ["placid, unruffled"]}
{"mi": "tāmahana", "gr": "verb", "en": ["to warm up, to reheat, to recook"]}
{"mi": "tāmahana", "gr": "noun", "en": ["bubble and squeak"]}
{"mi": "uwhiuwhi", "gr": "verb", "en": ["to cover", "to sprinkle, to spray, to splatter", "to shower"]}
{"mi": "uwhiuwhi", "gr": "noun", "en": ["covering"]}
{"mi": "whakauwhi", "gr": "verb", "en": ["to cover", "to host, to entertain"]}
{"mi": "tāuwhiuwhi", "gr": "verb", "en": ["to sprinkle, to shower"]}
{"mi": "tāuwhiuwhi", "gr": "noun", "en": ["shower (a shower bath)"]}
{"mi": "tāpiri", "gr": "verb", "en": ["to add on, to append"]}
{"mi": "tāpiri", "gr": "noun", "en": ["sticking plaster", "sticky tape"]}
{"mi": "tāpiritanga", "gr": "noun", "en": ["appendix, addendum", "addition"]}
{"mi": "tupari maunga", "gr": "noun", "en": ["Any member of the species Gahnia xanthocarpa of tussock-forming sedges native to New Zealand."]}
{"mi": "toropapa", "gr": "noun", "en": ["karapapa (Alseuosmia macrophylla)", "oak-leaved toropapa (Alseuosmia quercifolia)"]}
{"mi": "kōpere", "gr": "verb", "en": ["to launch, to sling, to shoot", "to sprint"]}
{"mi": "kōpere", "gr": "noun", "en": ["a sling used to launch darts", "bow (weapon for shooting arrows or rod for playing string instruments)", "arrow", "arch", "rainbow", "sprint"]}
{"mi": "kōripo", "gr": "verb", "en": ["to swirl, to eddy"]}
{"mi": "kōripo", "gr": "noun", "en": ["whirlpool, eddy"]}
{"mi": "whananga", "gr": "noun", "en": ["uprising, mutiny, rebellion, revolt"]}
{"mi": "māpere", "gr": "noun", "en": ["razor sedge (Gahnia setifolia)"]}
{"mi": "māpere", "gr": "noun", "en": ["middle digit"]}
{"mi": "māpere", "gr": "noun", "en": ["marble", "ballot"]}
{"mi": "māpere", "gr": "verb", "en": ["to ballot", "to conscript"]}
{"mi": "māpere", "gr": "noun", "en": ["mulberry"]}
{"mi": "tākahikahi", "gr": "noun", "en": ["cutty grass (sedge of the genus Gahnia)", "true sedge (sedge of the genus Carex)"]}
{"mi": "tūturiwhatu", "gr": "noun", "en": ["New Zealand dotterel (Anarhynchus obscurus)"]}
{"mi": "tuturuatu", "gr": "noun", "en": ["shore plover (Charadrius novaeseelandiae)", "alternative form of tuturuwhatu (“New Zealand dotterel”)"]}
{"mi": "pohowera", "gr": "noun", "en": ["double-banded plover (Charadrius bicinctus)"]}
{"mi": "āwhio", "gr": "verb", "en": ["to go in circles or in a roundabout way, to snake", "to swirl"]}
{"mi": "āwhio", "gr": "adj", "en": ["circuitous, roundabout"]}
{"mi": "āwhio", "gr": "adv", "en": ["around, round"]}
{"mi": "tiketike", "gr": "verb", "en": ["to be high, to be lofty", "to be important"]}
{"mi": "tiketike", "gr": "noun", "en": ["height", "altitude"]}
{"mi": "mārie", "gr": "adj", "en": ["peaceful"]}
{"mi": "tohemanga", "gr": "noun", "en": ["any member of the species Oxyperas elongatum of large marine bivalve molluscs"]}
{"mi": "pātari", "gr": "verb", "en": ["to entice", "to divert, to decoy", "to provoke, to encite"]}
{"mi": "pātari", "gr": "noun", "en": ["persuasiveness"]}
{"mi": "whakangākau", "gr": "verb", "en": ["to show affection for, to take to heart"]}
{"mi": "whakangākau", "gr": "noun", "en": ["affection, devotion"]}
{"mi": "pīnohi", "gr": "noun", "en": ["tongs"]}
{"mi": "tārua", "gr": "verb", "en": ["to double something, to copy, to duplicate"]}
{"mi": "tuahiwi", "gr": "noun", "en": ["ridge of a hill", "shoal", "skeleton", "stick figure"]}
{"mi": "pīhoihoi", "gr": "noun", "en": ["New Zealand pipit (Anthus novaeseelandiae)"]}
{"mi": "kiko kau", "gr": "noun", "en": ["beef; meat obtained from cattle."]}
{"mi": "kiko hipi", "gr": "noun", "en": ["sheepmeat or mutton; meat obtained from sheep."]}
{"mi": "porotaka", "gr": "noun", "en": ["globe; spherical model of Earth", "sphere"]}
{"mi": "porotaka", "gr": "adj", "en": ["spherical"]}
{"mi": "porotaka", "gr": "noun", "en": ["spinning top"]}
{"mi": "whakahoki", "gr": "verb", "en": ["to turn back, to make something return", "to give back", "to answer"]}
{"mi": "tāranga", "gr": "noun", "en": ["long-leafed pimelea (Pimelea longifolia)", "a plant of species Veronica stenophylla"]}
{"mi": "pinātoro", "gr": "noun", "en": ["Strathmore weed"]}
{"mi": "kōpū", "gr": "noun", "en": ["belly, abdomen", "womb, uterus", "bosom", "Cran's bully (Gobiomorphus basalis)"]}
{"mi": "whaikīngi", "gr": "noun", "en": ["chess"]}
{"mi": "kīngi", "gr": "noun", "en": ["king (monarch)", "king"]}
{"mi": "kīngi", "gr": "verb", "en": ["to reign"]}
{"mi": "kuīni", "gr": "noun", "en": ["queen (monarch)", "queen"]}
{"mi": "kuīni", "gr": "verb", "en": ["to reign"]}
{"mi": "pāho", "gr": "verb", "en": ["to spread (of speech)", "(of electronic signals) to be transmitted far, to air, to be broadcast"]}
{"mi": "pāho", "gr": "noun", "en": ["broadcast"]}
{"mi": "whakapāho", "gr": "verb", "en": ["to air, broadcast or transmit electronic signals or waves"]}
{"mi": "pūkoro", "gr": "noun", "en": ["pouch", "pocket"]}
{"mi": "paheke", "gr": "verb", "en": ["to slip, to skid", "to fall, to decline", "to trickle, to drip"]}
{"mi": "paheke", "gr": "noun", "en": ["failure, decline", "trickle, leak, discharge", "cloud ear (Auricularia polytricha)"]}
{"mi": "pāhekeheke", "gr": "verb", "en": ["slippery", "unstable, uncertain", "striped"]}
{"mi": "pāhekeheke", "gr": "noun", "en": ["slip", "slipperiness"]}
{"mi": "whakarato", "gr": "noun", "en": ["to distribute, to allocate", "to serve (of food), to wait", "to provide"]}
{"mi": "ratonga", "gr": "noun", "en": ["waiting or attending of tables to send customers their food", "continuous provision of utility through an infrastructure network"]}
{"mi": "tinei", "gr": "verb", "en": ["to extinguish, to put out (of a fire, light)"]}
{"mi": "raihi", "gr": "noun", "en": ["rice"]}
{"mi": "āhua", "gr": "noun", "en": ["appearance, form", "shape", "character, trait"]}
{"mi": "āhua", "gr": "verb", "en": ["to appear", "to apprehend in the mind; to come to knowledge or proof; to be obvious or manifest; to look like", "to be pregnant, to expect a child"]}
{"mi": "āhua", "gr": "verb", "en": ["to form", "to make"]}
{"mi": "āhua", "gr": "adv", "en": ["somewhat", "approximately"]}
{"mi": "tewhatewha", "gr": "noun", "en": ["An axe-like bone or wooden weapon.", "vagina"]}
{"mi": "whakaari", "gr": "verb", "en": ["to expose, to display", "to act, to perform"]}
{"mi": "whakaari", "gr": "noun", "en": ["drama, play, program", "acting, performance"]}
{"mi": "whakaari", "gr": "verb", "en": ["to nominate, to propose"]}
{"mi": "Te Puia Whakaari", "gr": "name", "en": ["White Island (An active volcano located in the Bay of Plenty, New Zealand)"]}
{"mi": "tuatahi", "gr": "num", "en": ["first"]}
{"mi": "ringakore", "gr": "verb", "en": ["unarmed"]}
{"mi": "whakarākei", "gr": "verb", "en": ["garnish, embellish", "decorate, adorn"]}
{"mi": "whakarākei", "gr": "noun", "en": ["decoration, adornment", "set"]}
{"mi": "poniu", "gr": "noun", "en": ["yellowcress (Rorippa palustris)"]}
{"mi": "tākuta", "gr": "noun", "en": ["doctor"]}
{"mi": "tākuta", "gr": "verb", "en": ["to practise medicine"]}
{"mi": "whakatote", "gr": "verb", "en": ["to salt", "to cure (preserve food by salting)", "to brine"]}
{"mi": "kōkōwai", "gr": "noun", "en": ["red ochre"]}
{"mi": "kōkōwai", "gr": "verb", "en": ["dark red, crimson", "auburn, reddish-brown"]}
{"mi": "pōtaka", "gr": "noun", "en": ["spinning top"]}
{"mi": "taputapu", "gr": "noun", "en": ["Reduplication of tapu."]}
{"mi": "kīngitanga", "gr": "noun", "en": ["kingdom, dominion", "sovereignty"]}
{"mi": "kotahi", "gr": "noun", "en": ["unit"]}
{"mi": "kotahi", "gr": "verb", "en": ["united"]}
{"mi": "piringa", "gr": "noun", "en": ["refuge, haven, hiding place", "association, relationship"]}
{"mi": "tauraki", "gr": "verb", "en": ["to dry (by exposure to the sun), to dehydrate", "dried, dehydrated"]}
{"mi": "tauraki", "gr": "noun", "en": ["dehydrator"]}
{"mi": "kōiwi", "gr": "noun", "en": ["human bone", "corpse", "person, self", "descendants"]}
{"mi": "rongona", "gr": "verb", "en": ["passive of rongo (“to hear”)"]}
{"mi": "whakaruru", "gr": "verb", "en": ["to shelter, protect"]}
{"mi": "whakaruru", "gr": "noun", "en": ["screen, shelter, protector", "a facial gesture in kapa haka where the enlarged eyes stare in one direction and the tongue protrudes in the opposite direction"]}
{"mi": "whakamahi", "gr": "verb", "en": ["to employ, use, utilise, put to work, operate, put to use"]}
{"mi": "whakamahi", "gr": "noun", "en": ["use"]}
{"mi": "pūrou", "gr": "verb", "en": ["to spear (to thrust that catches an object on the tip of a pointed stick)"]}
{"mi": "pūrou", "gr": "noun", "en": ["pointed stick; skewer, brochette"]}
{"mi": "whāngai", "gr": "verb", "en": ["to feed, nourish, bring up, foster, adopt, raise, nurture, rear"]}
{"mi": "whāngai", "gr": "adj", "en": ["foster, fostered, adopted, adoptive"]}
{"mi": "whāngai", "gr": "noun", "en": ["foster child, adopted child"]}
{"mi": "kāpata", "gr": "noun", "en": ["cupboard"]}
{"mi": "haumāota", "gr": "noun", "en": ["alternative form of hau māota."]}
{"mi": "hau māota", "gr": "noun", "en": ["chlorine"]}
{"mi": "māota", "gr": "verb", "en": ["to be green", "to be raw", "to be freshly-grown"]}
{"mi": "waewae", "gr": "noun", "en": ["foot", "leg", "footprint", "footstep"]}
{"mi": "waewae", "gr": "noun", "en": ["New Zealand rough skate (Zearaja nasuta)"]}
{"mi": "mōwhiti", "gr": "noun", "en": ["ring, hoop", "eyeglasses, glasses, spectacles"]}
{"mi": "whakamahia", "gr": "verb", "en": ["passive of whakamahi"]}
{"mi": "whakamahingia", "gr": "verb", "en": ["passive of whakamahi"]}
{"mi": "whakaaria", "gr": "verb", "en": ["passive of whakaari"]}
{"mi": "whāngaia", "gr": "verb", "en": ["passive of whāngai"]}
{"mi": "Ngāruawāhia", "gr": "name", "en": ["a town in the Waikato region of the North Island of New Zealand"]}
{"mi": "Paekākāriki", "gr": "name", "en": ["a town in Kapiti Coast district, Wellington region, New Zealand."]}
{"mi": "Taupō", "gr": "name", "en": ["Taupo (a town in Waikato, New Zealand, on the shore of the lake)"]}
{"mi": "tauranga", "gr": "noun", "en": ["anchorage"]}
{"mi": "Wānaka", "gr": "name", "en": ["a town in Otago, New Zealand"]}
{"mi": "Ao-tea-roa", "gr": "name", "en": ["alternative form of Aotearoa"]}
{"mi": "koiora", "gr": "noun", "en": ["life"]}
{"mi": "whakapohane", "gr": "noun", "en": ["the act of mooning, showing one's buttocks"]}
{"mi": "whakapohane", "gr": "verb", "en": ["to moon at someone"]}
{"mi": "kai a te kurī", "gr": "intj", "en": ["damn it, bugger (a strong curse indicating anger)"]}
{"mi": "kai a te kurī", "gr": "adj", "en": ["damn, vile"]}
{"mi": "kai a te kurī", "gr": "noun", "en": ["a contemptible person, a bastard, a son of a bitch", "a so-and-so, a person that the speaker does not know"]}
{"mi": "Rānana", "gr": "name", "en": ["London (the capital of England, United Kingdom)"]}
{"mi": "Erinipara", "gr": "name", "en": ["Edinburgh (the capital of Scotland, United Kingdom)"]}
{"mi": "wanira", "gr": "noun", "en": ["vanilla"]}
{"mi": "kōwhiri", "gr": "verb", "en": ["to pick, to choose, to select"]}
{"mi": "kōwhiri", "gr": "noun", "en": ["choice, selection"]}
{"mi": "tuarā", "gr": "noun", "en": ["back (part of the body)", "ally, supporter", "back"]}
{"mi": "tuarā", "gr": "verb", "en": ["to support, to assist"]}
{"mi": "manuwhiri", "gr": "noun", "en": ["visitor, guest"]}
{"mi": "pahikara", "gr": "noun", "en": ["bicycle"]}
{"mi": "wakatono", "gr": "noun", "en": ["taxi"]}
{"mi": "takihī", "gr": "noun", "en": ["taxi"]}
{"mi": "whāriki", "gr": "noun", "en": ["mat", "carpet"]}
{"mi": "wahakura", "gr": "noun", "en": ["bassinet, especially one woven from harakeke leaves"]}
{"mi": "rakiraki", "gr": "noun", "en": ["duck, especially an introduced species", "mallard (Anas platyrhynchos)"]}
{"mi": "pūtangitangi", "gr": "noun", "en": ["paradise shelduck (Tadorna variegata)"]}
{"mi": "pēpi", "gr": "noun", "en": ["baby"]}
{"mi": "pohewatanga", "gr": "noun", "en": ["imagination"]}
{"mi": "ruānuku", "gr": "noun", "en": ["sage, wise man", "wizard, warlock"]}
{"mi": "whakaarohia", "gr": "verb", "en": ["passive of whakaaro"]}
{"mi": "whakapohanetia", "gr": "verb", "en": ["passive of whakapohane"]}
{"mi": "whakangaro", "gr": "noun", "en": ["destruction, obliteration, ruin, annihilation, devastation."]}
{"mi": "whakangaro", "gr": "verb", "en": ["to destroy, exterminate, annihilate.", "to hide, conceal, put out of sight.", "to disappear."]}
{"mi": "whakangaromia", "gr": "verb", "en": ["passive of whakangaro"]}
{"mi": "whakangarotia", "gr": "verb", "en": ["passive of whakangaro"]}
{"mi": "whakapakaru", "gr": "noun", "en": ["falsetto"]}
{"mi": "whakapakaru", "gr": "verb", "en": ["to break, smash, rupture, shatter.", "to break"]}
{"mi": "whakapakaruhia", "gr": "verb", "en": ["passive of whakapakaru"]}
{"mi": "whakapakarutia", "gr": "verb", "en": ["passive of whakapakaru"]}
{"mi": "whakamōtī", "gr": "noun", "en": ["destruction, damage, devastation, desolation."]}
{"mi": "whakamōtī", "gr": "adj", "en": ["destructive, devastating, damaging"]}
{"mi": "whakamōtī", "gr": "verb", "en": ["to destroy, extirpate, annihilate, crush, eradicate, devastate, eliminate."]}
{"mi": "whakamōtītia", "gr": "verb", "en": ["passive of whakamōtī"]}
{"mi": "urupatu", "gr": "noun", "en": ["annihilation, destruction, sacking."]}
{"mi": "urupatu", "gr": "verb", "en": ["to utterly destroy, wipe out, devastate, annihilate, sack."]}
{"mi": "urupatua", "gr": "verb", "en": ["passive of urupatu"]}
{"mi": "maikuku", "gr": "noun", "en": ["fingernail, toenail", "claw, hoof"]}
{"mi": "āpuru", "gr": "verb", "en": ["to suppress, shut up, crowd together, overwhelm."]}
{"mi": "āpurua", "gr": "verb", "en": ["passive of āpuru"]}
{"mi": "āpuruhia", "gr": "verb", "en": ["passive of āpuru"]}
{"mi": "āpurutia", "gr": "verb", "en": ["passive of āpuru"]}
{"mi": "pōkai", "gr": "verb", "en": ["to wind something in a ball or coil", "to roll up, to wrap up", "to travel", "to surround"]}
{"mi": "pōkai", "gr": "noun", "en": ["ball (of string etc)", "roll", "wrap, wrapper"]}
{"mi": "nanua", "gr": "noun", "en": ["red moki (Cheilodactylus spectabilis)"]}
{"mi": "retihuka", "gr": "noun", "en": ["ski", "skiing", "snowboard"]}
{"mi": "retihuka", "gr": "verb", "en": ["to ski"]}
{"mi": "rereti", "gr": "noun", "en": ["lance water fern (Austroblechnum lanceolatum)"]}
{"mi": "pohane", "gr": "noun", "en": ["sexual attraction", "love, affection, desire, lust"]}
{"mi": "pohane", "gr": "verb", "en": ["to desire earnestly", "to moon, expose the buttocks", "to practice sodomy"]}
{"mi": "pohanea", "gr": "verb", "en": ["passive of pohane"]}
{"mi": "pohanetia", "gr": "verb", "en": ["passive of pohane"]}
{"mi": "putanga", "gr": "noun", "en": ["any exit, outlet or vent", "anything that emerges or appears into view, appearance", "symptom", "outcome, upshot", "edition, form of a published work edited significantly since an earlier or past time"]}
{"mi": "whakamatakutia", "gr": "verb", "en": ["passive of whakamataku"]}
{"mi": "whakamatakuria", "gr": "verb", "en": ["passive of whakamataku"]}
{"mi": "ōrea", "gr": "noun", "en": ["New Zealand longfin eel (Anguilla dieffenbachii)"]}
{"mi": "pīkau", "gr": "noun", "en": ["backpack"]}
{"mi": "pīkau", "gr": "verb", "en": ["to carry on the back"]}
{"mi": "piriti whakatārewa", "gr": "noun", "en": ["suspension bridge"]}
{"mi": "whakatārewa", "gr": "verb", "en": ["to suspend, to dangle", "to defer, to postpone, to adjourn"]}
{"mi": "whakatārewa", "gr": "verb", "en": ["hanging, suspension"]}
{"mi": "tārewa", "gr": "verb", "en": ["to suspend, to hang"]}
{"mi": "tārewa", "gr": "verb", "en": ["hanging, dangling", "unresolved, unsettled", "deferred, delayed"]}
{"mi": "whakapiriti", "gr": "verb", "en": ["to ordain as a priest"]}
{"mi": "poi whana", "gr": "noun", "en": ["association football, soccer"]}
{"mi": "poi tarawhiti", "gr": "noun", "en": ["netball"]}
{"mi": "poiwhana", "gr": "noun", "en": ["alternative form of poi whana"]}
{"mi": "whaiaro", "gr": "noun", "en": ["self", "person"]}
{"mi": "whaiaro", "gr": "adj", "en": ["self-", "personal"]}
{"mi": "Hongipua", "gr": "name", "en": ["Hong Kong (a city, island and special administrative region in southeastern China)"]}
{"mi": "huahua", "gr": "verb", "en": ["to boil water", "especially in a rudimentary way by dropping hot stones onto the water container, before the advent of introduced metal cookery"]}
{"mi": "huahua", "gr": "noun", "en": ["water vessel used for boiling in such a method"]}
{"mi": "huaki", "gr": "verb", "en": ["to open (of doors, lids)", "to uncover", "to dig out, to disinter or exhume", "to rise (of celestial bodies)"]}
{"mi": "huaki", "gr": "noun", "en": ["dawn"]}
{"mi": "pō mārie", "gr": "intj", "en": ["goodnight"]}
{"mi": "hīkoi", "gr": "verb", "en": ["to step on something", "to walk", "to stride", "to march"]}
{"mi": "hīkoi", "gr": "noun", "en": ["step", "march", "hike, trek, tramp", "journey, trip"]}
{"mi": "Hiruhārama", "gr": "name", "en": ["Jerusalem (a city in the Holy Land between the Mediterranean Sea and Dead Sea, holy in Judaism, Christianity and Islam; the claimed capital city of both Israel and Palestine)", "a settlement in Gisborne District, New Zealand", "a settlement in the Manawatū-Whanganui region, New Zealand"]}
{"mi": "pīrangihia", "gr": "verb", "en": ["passive of pīrangi"]}
{"mi": "pīrangitia", "gr": "verb", "en": ["passive of pīrangi"]}
{"mi": "whāngaihia", "gr": "verb", "en": ["passive of whāngai"]}
{"mi": "whāngainga", "gr": "verb", "en": ["passive of whāngai"]}
{"mi": "whāngaitia", "gr": "verb", "en": ["passive of whāngai"]}
{"mi": "whareumu", "gr": "noun", "en": ["kitchen"]}
{"mi": "wātea", "gr": "verb", "en": ["to be free, unoccupied, vacant, open, blank, available, clear, unencumbered."]}
{"mi": "tukutukua", "gr": "verb", "en": ["passive of tukutuku"]}
{"mi": "tukutukuna", "gr": "verb", "en": ["passive of tukutuku"]}
{"mi": "taunga tukutuku", "gr": "noun", "en": ["Cartesian coordinates"]}
{"mi": "manu tukutuku", "gr": "noun", "en": ["kite"]}
{"mi": "whārangi", "gr": "verb", "en": ["to spread out, spread flat"]}
{"mi": "whārangi", "gr": "noun", "en": ["page, sheet", "rangiona (Brachyglottis repanda)"]}
{"mi": "whakahokia", "gr": "verb", "en": ["passive of whakahoki"]}
{"mi": "atawhaingia", "gr": "verb", "en": ["passive of atawhai"]}
{"mi": "atawhaitia", "gr": "verb", "en": ["passive of atawhai"]}
{"mi": "hainatia", "gr": "verb", "en": ["passive of haina"]}
{"mi": "hainangia", "gr": "verb", "en": ["passive of haina"]}
{"mi": "toitū", "gr": "verb", "en": ["to be undisturbed, untouched", "to be permanent", "to be entire", "to be sustainable"]}
{"mi": "tau toitū", "gr": "noun", "en": ["prime number"]}
{"mi": "tauwehe toitū", "gr": "noun", "en": ["prime factor"]}
{"mi": "rūtene", "gr": "noun", "en": ["lieutenant"]}
{"mi": "tamātane", "gr": "noun", "en": ["plural of tamatane"]}
{"mi": "taunga", "gr": "noun", "en": ["anchorage, resting place, landing", "fishing ground", "coordinate", "position"]}
{"mi": "taunga", "gr": "verb", "en": ["to become familiar with, used to, accustomed."]}
{"mi": "taunga inu", "gr": "noun", "en": ["coaster"]}
{"mi": "taunga ika", "gr": "noun", "en": ["fishing ground"]}
{"mi": "taunga rererangi", "gr": "noun", "en": ["airport", "aerodrome", "airfield"]}
{"mi": "rererangi", "gr": "noun", "en": ["airplane, aeroplane, aircraft"]}
{"mi": "kōtetetete", "gr": "verb", "en": ["To chatter, prattle."]}
{"mi": "taunga ahuroa", "gr": "noun", "en": ["polar coordinates"]}
{"mi": "āhuahanga taunga", "gr": "noun", "en": ["analytic geometry"]}
{"mi": "āhuahanga", "gr": "noun", "en": ["shape", "geometry"]}
{"mi": "papa taunga", "gr": "noun", "en": ["airfield, airstrip", "airport, aerodrome", "base, headquarters", "coordinate plane"]}
{"mi": "hoahoa papa", "gr": "noun", "en": ["floor plan"]}
{"mi": "papa tapeke", "gr": "noun", "en": ["scoreboard"]}
{"mi": "papa ahumahi", "gr": "noun", "en": ["industrial land"]}
{"mi": "papa kūtoro", "gr": "noun", "en": ["stretch fabric"]}
{"mi": "papa pūkura", "gr": "noun", "en": ["badminton court"]}
{"mi": "papa kotikoti", "gr": "noun", "en": ["cutting board, chopping board"]}
{"mi": "papa kiripaka", "gr": "noun", "en": ["asbestos"]}
{"mi": "ahatia", "gr": "verb", "en": ["passive of aha"]}
{"mi": "ahungia", "gr": "verb", "en": ["passive of ahu"]}
{"mi": "ahuria", "gr": "verb", "en": ["passive of ahu"]}
{"mi": "ahutia", "gr": "verb", "en": ["passive of ahu"]}
{"mi": "tātarakihi", "gr": "noun", "en": ["cicada"]}
{"mi": "kihikihitara", "gr": "noun", "en": ["chorus cicada (Amphipsalta zelandica)"]}
{"mi": "whawhati", "gr": "verb", "en": ["to fracture", "to snap off, pick (e.g. fruit)", "to deny", "to repudiate, contradict, refute"]}
{"mi": "whawhatia", "gr": "verb", "en": ["passive of whawhati"]}
{"mi": "wewehi", "gr": "verb", "en": ["To be frightened, impressed, in awe", "To be frightening, alarming, fearsome, impressive, awesome"]}
{"mi": "wewehi", "gr": "noun", "en": ["dread, fear, awe", "regard", "spine, e.g. of a dorsal fin"]}
{"mi": "karāhe", "gr": "noun", "en": ["glass", "mirror"]}
{"mi": "karāhe", "gr": "noun", "en": ["class"]}
{"mi": "ngahuru mā tahi", "gr": "num", "en": ["eleven"]}
{"mi": "ngahuru mā rua", "gr": "num", "en": ["twelve, dozen"]}
{"mi": "ngahuru mā toru", "gr": "num", "en": ["thirteen"]}
{"mi": "ngahuru mā whā", "gr": "num", "en": ["fourteen"]}
{"mi": "ngahuru mā rima", "gr": "num", "en": ["fifteen"]}
{"mi": "ngahuru mā ono", "gr": "num", "en": ["sixteen"]}
{"mi": "ngahuru mā whitu", "gr": "num", "en": ["seventeen"]}
{"mi": "ngahuru mā waru", "gr": "num", "en": ["eighteen"]}
{"mi": "ngahuru mā iwa", "gr": "num", "en": ["nineteen"]}
{"mi": "rua ngahuru", "gr": "num", "en": ["twenty"]}
{"mi": "whakaata", "gr": "verb", "en": ["to reflect", "to exhibit, display", "to simulate", "to act, pretend"]}
{"mi": "whakaata", "gr": "noun", "en": ["reflection", "mirror"]}
{"mi": "unahi", "gr": "noun", "en": ["scale, small fragment covering skin of a fish"]}
{"mi": "inohi", "gr": "noun", "en": ["scale, small fragment covering skin of a fish"]}
{"mi": "tainui", "gr": "noun", "en": ["New Zealand hazel (Pomaderris apetala)"]}
{"mi": "hangarua", "gr": "verb", "en": ["To recycle"]}
{"mi": "hangarua", "gr": "noun", "en": ["The act of recycling", "Recyclable goods"]}
{"mi": "Ngāi", "gr": "noun", "en": ["Descent group marker used in iwi or hapū names beginning with T."]}
{"mi": "Tipene", "gr": "name", "en": ["a male given name, equivalent to English Stephen.", "a surname."]}
{"mi": "whano", "gr": "verb", "en": ["to proceed, to go towards", "to lead or verge towards something"]}
{"mi": "whano", "gr": "noun", "en": ["lead of a road"]}
{"mi": "whano", "gr": "adj", "en": ["impending, imminent"]}
{"mi": "whano", "gr": "verb", "en": ["to act, to do", "to behave"]}
{"mi": "whano", "gr": "noun", "en": ["action, behaviour"]}
{"mi": "ngāi", "gr": "noun", "en": ["Group marker used in certain nouns."]}
{"mi": "Ngāi-", "gr": "noun", "en": ["Alternative form of Ngāi."]}
{"mi": "Kāi", "gr": "noun", "en": ["alternative form of Ngāi."]}
{"mi": "Ngaai", "gr": "noun", "en": ["Alternative form of Ngāi."]}
{"mi": "Kāti", "gr": "noun", "en": ["alternative form of Ngāti."]}
{"mi": "Ngaati", "gr": "noun", "en": ["Alternative form of Ngāti."]}
{"mi": "Ngati", "gr": "noun", "en": ["alternative spelling of Ngāti."]}
{"mi": "Ngāti-", "gr": "noun", "en": ["Alternative form of Ngāti."]}
{"mi": "kaitātari", "gr": "noun", "en": ["analyst"]}
{"mi": "tātari", "gr": "verb", "en": ["to strain, filter, sift", "to measure out", "to analyze"]}
{"mi": "tātari", "gr": "noun", "en": ["filter, strainer, sieve, colander", "analysis"]}
{"mi": "tātaritia", "gr": "verb", "en": ["passive of tātari"]}
{"mi": "kaitangata", "gr": "noun", "en": ["cannibal", "cannibalism", "cat's eye snail (Lunella smaragda)"]}
{"mi": "kaitangata", "gr": "adj", "en": ["cannibalistic", "man-eating"]}
{"mi": "mōiriiri", "gr": "verb", "en": ["to be widespread", "to be notorious, infamous"]}
{"mi": "tōtara", "gr": "noun", "en": ["Podocarpus totara, a podocarp tree endemic to New Zealand."]}
{"mi": "pāhihi", "gr": "noun", "en": ["passage", "passenger"]}
{"mi": "kōrerohia", "gr": "verb", "en": ["passive of kōrero"]}
{"mi": "kōrerotia", "gr": "verb", "en": ["passive of kōrero"]}
{"mi": "pae tukutuku", "gr": "noun", "en": ["website"]}
{"mi": "pepa tukutuku", "gr": "noun", "en": ["grid paper, graph paper"]}
{"mi": "tukutuku inerite", "gr": "noun", "en": ["isometric grid"]}
{"mi": "tūtohi tukutuku", "gr": "noun", "en": ["array"]}
{"mi": "utauta tukutuku", "gr": "noun", "en": ["webtool"]}
{"mi": "paingia", "gr": "verb", "en": ["passive of pai"]}
{"mi": "pāea", "gr": "verb", "en": ["passive of pae"]}
{"mi": "ētahi", "gr": "article", "en": ["some: plural indefinite article"]}
{"mi": "whakaatu", "gr": "verb", "en": ["to show, reveal, display, exhibit", "to announce, disclose", "to notify", "to point out", "to perform"]}
{"mi": "whakaatu", "gr": "noun", "en": ["notification"]}
{"mi": "kaiwhakahaere", "gr": "noun", "en": ["administrator, boss, director, organizer, manager", "council, advocate, agent, advisor"]}
{"mi": "whakaatuhia", "gr": "verb", "en": ["passive of whakaatu"]}
{"mi": "whakaaturia", "gr": "verb", "en": ["passive of whakaatu"]}
{"mi": "tīaho", "gr": "verb", "en": ["to shine, radiate"]}
{"mi": "whakawahi", "gr": "verb", "en": ["to anoint, crown", "to ordain"]}
{"mi": "hātaretare", "gr": "noun", "en": ["snail", "slug", "invertebrate"]}
{"mi": "wētiwha", "gr": "noun", "en": ["mudsnail (Amphibola crenata)"]}
{"mi": "whētikotiko", "gr": "noun", "en": ["mudflat top shell (Diloma subrostrata)"]}
{"mi": "tōkere", "gr": "noun", "en": ["a deathwatch beetle (Anobiidae)"]}
{"mi": "tōkere", "gr": "noun", "en": ["castanets made of wood, bone, or a pair of bivalve shells"]}
{"mi": "anahera", "gr": "noun", "en": ["angel"]}
{"mi": "taimona", "gr": "noun", "en": ["a male given name, equivalent to English Simon"]}
{"mi": "tāiko", "gr": "noun", "en": ["black petrel", "Westland petrel, a seabird endemic to Aotearoa.", "New Zealand sandalwood (Mida salicifolia), a tree endemic to the North Island of Aotearoa."]}
{"mi": "mataī", "gr": "noun", "en": ["matai, black pine (Prumnopitys taxifolia)"]}
{"mi": "manono", "gr": "noun", "en": ["kanono (Coprosma autumnalis)"]}
{"mi": "whakataukī", "gr": "verb", "en": ["to say a proverb"]}
{"mi": "whakataukī", "gr": "noun", "en": ["proverb", "aphorism"]}
{"mi": "Niu Tīreni", "gr": "name", "en": ["New Zealand."]}
{"mi": "rangahau", "gr": "verb", "en": ["To seek, search out, pursue", "To research, investigate"]}
{"mi": "rangahau", "gr": "noun", "en": ["research", "survey"]}
{"mi": "rīanga", "gr": "noun", "en": ["screen, stretched physical divider"]}
{"mi": "rīanga", "gr": "noun", "en": ["insurance"]}
{"mi": "Niu Tireni", "gr": "name", "en": ["alternative spelling of Niu Tīreni."]}
{"mi": "Niu Tīrani", "gr": "name", "en": ["alternative form of Niu Tīreni."]}
{"mi": "Niu Tīrene", "gr": "name", "en": ["alternative form of Niu Tīreni."]}
{"mi": "Nu Tīreni", "gr": "name", "en": ["alternative form of Niu Tīreni."]}
{"mi": "Nui Tīreni", "gr": "name", "en": ["alternative form of Niu Tīreni."]}
{"mi": "Peretānia", "gr": "name", "en": ["Britain", "United Kingdom (a kingdom and country in Northern Europe)"]}
{"mi": "takea", "gr": "verb", "en": ["passive of take"]}
{"mi": "tākehia", "gr": "verb", "en": ["passive of tāke"]}
{"mi": "tākengia", "gr": "verb", "en": ["passive of tāke"]}
{"mi": "tāketia", "gr": "verb", "en": ["passive of tāke"]}
{"mi": "takē", "gr": "verb", "en": ["to be absent"]}
{"mi": "pitokite", "gr": "noun", "en": ["skinflint, miser, niggard"]}
{"mi": "hutihuti", "gr": "verb", "en": ["to pull out, hoist, haul up, pull up", "to pluck"]}
{"mi": "hutihuti", "gr": "noun", "en": ["a banana-shaped variety of kumara"]}
{"mi": "tauira", "gr": "noun", "en": ["illustration", "formula", "pattern, design", "example, model, template", "precedent", "draft", "sample, specimen", "student, pupil, apprentice, cadet"]}
{"mi": "tauira", "gr": "verb", "en": ["to preordain", "to model"]}
{"mi": "hiahia", "gr": "noun", "en": ["desire, wish, want", "aspiration, hope", "need"]}
{"mi": "hiahia", "gr": "verb", "en": ["to desire, wish, want, crave", "to need"]}
{"mi": "hiahiatia", "gr": "verb", "en": ["passive of hiahia"]}
{"mi": "hanihani", "gr": "noun", "en": ["disparaging comments"]}
{"mi": "hanihani", "gr": "verb", "en": ["to disparage, speak ill of"]}
{"mi": "hanihani", "gr": "adj", "en": ["disparaging, derogatory, contemptuous, insulting, scornful"]}
{"mi": "kūrae", "gr": "noun", "en": ["cape, headland, promontory, peninsula, boundary point"]}
{"mi": "kūrae", "gr": "verb", "en": ["to project"]}
{"mi": "mate wareware", "gr": "noun", "en": ["dementia"]}
{"mi": "tīmata", "gr": "verb", "en": ["to begin, to start, kick off, commence"]}
{"mi": "tīmata", "gr": "noun", "en": ["drama, play, program", "acting, performance"]}
{"mi": "tīmatanga", "gr": "noun", "en": ["beginning, introduction, start, commencement"]}
{"mi": "kōwhiringa", "gr": "noun", "en": ["selection", "menu", "option", "opportunity", "combination"]}
{"mi": "rauemi", "gr": "noun", "en": ["resource", "material"]}
{"mi": "whakaahua", "gr": "noun", "en": ["photograph, picture, shot", "image", "photocopy", "illustration", "design"]}
{"mi": "whakaahua", "gr": "verb", "en": ["to transform", "to take form", "to form", "to fashion", "to photograph", "to portray", "to film", "to delineate", "to photocopy"]}
{"mi": "whakaahuatia", "gr": "verb", "en": ["passive of whakaahua"]}
{"mi": "kāore", "gr": "particle", "en": ["not, marks negation"]}
{"mi": "kitea", "gr": "verb", "en": ["passive of kite"]}
{"mi": "mōhio", "gr": "verb", "en": ["to know", "to understand, comprehend", "to realize", "to recognize"]}
{"mi": "mōhio", "gr": "noun", "en": ["knowledge", "an expert", "wisdom"]}
{"mi": "mōhio", "gr": "adj", "en": ["knowledgable, intelligent, clever, bright", "wise", "skillful", "on one's guard, vigilant", "suspicious"]}
{"mi": "mōhiohia", "gr": "verb", "en": ["passive of mōhio"]}
{"mi": "mōhiotia", "gr": "verb", "en": ["passive of mōhio"]}
{"mi": "tūpāpaku", "gr": "noun", "en": ["corpse, dead body", "sick person, invalid, someone who is terminally ill", "an intended victim of homicide"]}
{"mi": "hāpopo", "gr": "noun", "en": ["the corpse of an enemy, usually to be cannibalised"]}
{"mi": "kēhua", "gr": "verb", "en": ["to haunt"]}
{"mi": "kēhua", "gr": "noun", "en": ["ghost", "joker (playing card)"]}
{"mi": "kounga", "gr": "noun", "en": ["quality", "excellence"]}
{"mi": "īmēra", "gr": "verb", "en": ["to email"]}
{"mi": "īmēra", "gr": "noun", "en": ["email, electronic mail"]}
{"mi": "whakahirahira", "gr": "verb", "en": ["to extol"]}
{"mi": "whakahirahira", "gr": "noun", "en": ["grandeur, greatness", "influence", "reputation, standing", "prominence", "importance", "eminence"]}
{"mi": "whakahirahira", "gr": "adj", "en": ["great", "magnificent", "wonderful", "inspiring"]}
{"mi": "hirahira", "gr": "verb", "en": ["to be great, important, significant, eminent"]}
{"mi": "hirahira", "gr": "noun", "en": ["standing", "importance, significance", "eminence"]}
{"mi": "hirahira", "gr": "adj", "en": ["great", "significant", "eminent", "of consequence"]}
{"mi": "hirahiratia", "gr": "verb", "en": ["passive of hirahira"]}
{"mi": "wawata", "gr": "verb", "en": ["to desire earnestly, long for, yearn for, daydream"]}
{"mi": "wawata", "gr": "noun", "en": ["yearning, aspiration, hope, dream"]}
{"mi": "hītako", "gr": "verb", "en": ["to yawn"]}
{"mi": "hītako", "gr": "noun", "en": ["the act of yawning"]}
{"mi": "whakahaere", "gr": "noun", "en": ["operation", "organization", "control", "administration"]}
{"mi": "whakahaere", "gr": "verb", "en": ["to organise", "to conduct, lead, operate, execute, direct, manage, control, administer, institute, implement, perform"]}
{"mi": "whakahaerea", "gr": "verb", "en": ["passive of whakahaere"]}
{"mi": "whakahaerehia", "gr": "verb", "en": ["passive of whakahaere"]}
{"mi": "whakahaerengia", "gr": "verb", "en": ["passive of whakahaere"]}
{"mi": "whakahaeretia", "gr": "verb", "en": ["passive of whakahaere"]}
{"mi": "āria", "gr": "noun", "en": ["tidal pool", "trough between shoals", "gap between rocks", "bay"]}
{"mi": "ketekete", "gr": "verb", "en": ["to chirp, chatter, cackle", "to be annoyed"]}
{"mi": "ketekete", "gr": "noun", "en": ["astonishment, amazement, consternation", "chattering"]}
{"mi": "taurekareka", "gr": "noun", "en": ["slave or prisoner of war", "scoundrel, idiot, rascal", "rogue"]}
{"mi": "taurekareka", "gr": "verb", "en": ["to be enslaved"]}
{"mi": "taurekareka", "gr": "adj", "en": ["dastardly", "shameful, dishonorable", "low", "base"]}
{"mi": "taurekarekatia", "gr": "verb", "en": ["passive of taurekareka"]}
{"mi": "rekareka", "gr": "verb", "en": ["to be pleasant, enjoyable, fun", "to be happy, rapt, overjoyed, delighted"]}
{"mi": "rekareka", "gr": "noun", "en": ["sweetness", "attractiveness", "enjoyment, pleasure", "orgasm"]}
{"mi": "tenetene", "gr": "noun", "en": ["vagina"]}
{"mi": "harehare", "gr": "adj", "en": ["offensive, rude, affronting, objectionable"]}
{"mi": "harehare", "gr": "noun", "en": ["skin rash, sore, eczema, skin ailment, skin disorder"]}
{"mi": "Tararā", "gr": "name", "en": ["Yugoslavia (a former country in Southeastern Europe in the Balkans, now split into 6 countries: Bosnia and Herzegovina, Croatia, North Macedonia, Montenegro, Serbia, and Slovenia)", "Dalmatia (a historical region of Croatia, on the eastern coast of the Adriatic Sea)"]}
{"mi": "Tararā", "gr": "noun", "en": ["A native or inhabitant of Dalmatia."]}
{"mi": "kōnini", "gr": "noun", "en": ["green or raw fruit of the tree fuchsia or kōtukutuku, Fuchsia excorticata"]}
{"mi": "Wikiperia", "gr": "name", "en": ["Wikipedia"]}
{"mi": "i/languages M to Z", "gr": "particle", "en": ["from", "past-tense verbal particle", "particle indicating the direct object of a transitive sentence", "past-tense particle indicating location"]}
{"mi": "rangimaarie", "gr": "adj", "en": ["peaceful, quiet, tranquil"]}
{"mi": "rangimaarie", "gr": "noun", "en": ["peace, quietness"]}
{"mi": "whakakai", "gr": "noun", "en": ["cylindrical greenstone earring", "teething ring for babies"]}
{"mi": "tapawhā", "gr": "noun", "en": ["quadrilateral"]}
{"mi": "taparima", "gr": "noun", "en": ["pentagon"]}
{"mi": "tapawhitu", "gr": "noun", "en": ["heptagon"]}
{"mi": "tapawaru", "gr": "noun", "en": ["octagon"]}
{"mi": "tuarua", "gr": "num", "en": ["second"]}
{"mi": "tuatoru", "gr": "num", "en": ["third"]}
{"mi": "tuawhā", "gr": "num", "en": ["fourth"]}
{"mi": "tuarima", "gr": "num", "en": ["fifth"]}
{"mi": "tuaono", "gr": "num", "en": ["sixth"]}
{"mi": "tuawhitu", "gr": "num", "en": ["seventh"]}
{"mi": "tuawaru", "gr": "num", "en": ["eighth"]}
{"mi": "tuaiwa", "gr": "num", "en": ["ninth"]}
{"mi": "waihāro", "gr": "noun", "en": ["soup"]}
{"mi": "Ōriwa", "gr": "name", "en": ["a male given name, Oliver"]}
{"mi": "hīnau", "gr": "noun", "en": ["hinau (Elaeocarpus dentatus)"]}
{"mi": "hoariritia", "gr": "verb", "en": ["passive of hoariri"]}
{"mi": "popotia", "gr": "verb", "en": ["passive of popo"]}
{"mi": "kōkako", "gr": "noun", "en": ["kokako; (Callaeas cinerea)"]}
{"mi": "toiere", "gr": "verb", "en": ["to sing"]}
{"mi": "whakaira", "gr": "verb", "en": ["glisten, glitter"]}
{"mi": "whakaira", "gr": "verb", "en": ["conceive, become pregnant"]}
{"mi": "ekaina", "gr": "verb", "en": ["passive of eka"]}
{"mi": "tupuranga", "gr": "noun", "en": ["a place to grow something"]}
{"mi": "takirua", "gr": "noun", "en": ["pair, twosome, duo, couple, duet"]}
{"mi": "takirua", "gr": "verb", "en": ["to double up"]}
{"mi": "takina", "gr": "verb", "en": ["passive of taki"]}
{"mi": "tākina", "gr": "verb", "en": ["passive of taki (“to recite”)"]}
{"mi": "taki-", "gr": "prefix", "en": ["in a group of a certain number"]}
{"mi": "takitoru", "gr": "noun", "en": ["group of three, trio, threesome"]}
{"mi": "takitoru", "gr": "verb", "en": ["to triple"]}
{"mi": "Kōtirana", "gr": "name", "en": ["Scotland (a constituent country of the United Kingdom)"]}
{"mi": "Kōtirangi", "gr": "name", "en": ["Scotland (a constituent country of the United Kingdom)"]}
{"mi": "taiaki", "gr": "noun", "en": ["hormone"]}
{"mi": "āki", "gr": "verb", "en": ["to encourage, urge on, challenge, induce, incite, exhort", "to beat, pound, crash against, dash against, strike with great force, throw down, buffet, slam against, slam", "to replace"]}
{"mi": "āki", "gr": "noun", "en": ["urging, encouragement"]}
{"mi": "taiaki tāne", "gr": "noun", "en": ["Testosterone"]}
{"mi": "arotia", "gr": "verb", "en": ["passive of aro"]}
`;var yr=[],Zt={};function Ya(c){return c.en.length?c.en[0]:""}function kr(c){let r=c.slice(0),i=r.length-1;for(;i>0;){let u=Math.floor(Math.random()*(i+1)),l=r[i];r[i]=r[u],r[u]=l,i--}return r}function cs(c,r,i,u,l){for(let p=0,d=De(u),y=d.length;p<y;p++){let j=d[p];if(c.length>=l)break;r[j.mi]||i[Ya(j)]||(r[j.mi]=!0,i[Ya(j)]=!0,c.push(j))}}for(let c=0,r=De(hs.split(`
`)),i=r.length;c<i;c++){let l=r[c].trim();if(!l)continue;let p=JSON.parse(l),d={id:yr.length,mi:p.mi,gr:p.gr,en:p.en||[]};yr.push(d),Zt[d.gr]||(Zt[d.gr]=[]),Zt[d.gr].push(d)}function Ut(c){return yr[c]}function Gt(c){let r=[];for(let i=0,u=De(c),l=u.length;i<l;i++){let p=u[i];r.push(p.id)}return r}function Qa(c){let r=yr.length,i=c.length,u=r?Math.round(i*100/r):0;return{count:i,total:r,percent:u}}function Xa(c,r){let i=new Set(r||[]),u=[];for(let l=0,p=De(yr),d=p.length;l<d;l++){let y=p[l];i.has(y.id)||u.push(y)}return kr(u).slice(0,c)}function Lr(c,r=3){let i=[],u={},l={};return u[c.mi]=!0,l[Ya(c)]=!0,cs(i,u,l,Zt[c.gr]||[],r),i.length<r&&cs(i,u,l,yr,r),i}J();J();var Vt=Hg(ds(),1),fs=Symbol.for("Dexie"),Jt=globalThis[fs]||(globalThis[fs]=Vt.default);if(Vt.default.semVer!==Jt.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Vt.default.semVer} and ${Jt.semVer}`);var{liveQuery:Kf,mergeRanges:Df,rangesOverlap:Ff,RangeSet:qf,cmp:Bf,Entity:Hf,PropModification:Wf,replacePrefix:Lf,add:zf,remove:Zf,DexieYProvider:Uf}=Jt;var ps=Jt;var vs=new ps("learn-maori");vs.version(1).stores({progress:"key"});var ro=vs.table("progress"),rr="in-progress",In="learned";async function vn(c){let r=await ro.get(c);return r&&r.ids?r.ids.slice(0):[]}async function zr(c,r){return await ro.put({key:c,ids:r}),r}async function bs(){return await ro.clear(),!0}var to="theme";function ys(c){try{return globalThis.localStorage.getItem(c)}catch{return null}}function ks(c,r){try{return globalThis.localStorage.setItem(c,r)}catch{return null}}J();Mn(),rn();var Ec=Symbol.for("#beforeReconcile"),io=Symbol.for("##up"),Yt=Symbol.for("#placeChild"),Ac=Symbol.for("#afterVisit"),$c=Symbol.for("#afterReconcile"),ws=Symbol(),xs=Symbol(),Ss=Symbol(),_s=Symbol(),Ts=Symbol(),Es=Symbol();var ao=Symbol();var oo=Symbol();var uo=Symbol(),As=Symbol(),$s=Symbol(),Cs=Symbol(),js=Symbol(),Ns=Symbol(),Cc=Symbol(),Qt=class Qt extends We{[ke](r=null,i=!0,u=!0){var l;super[ke](...arguments),this.q=r&&(l=r.q)!==void 0?l:null,this.emitter=r&&(l=r.emitter)!==void 0?l:null}pickΞopt(r){if(!(this.q&&this.q.pick)&&this.q&&(this.q.pick=r,this.emitter))return this.emitter(r)}render(){var r=this,i,u,l,p,d,y=this._ns_||"",j,P,K,N,oe,Q,X,ie,z,le,te,Y,ue;if(l=this,l[Ec](),p=d=1,l[ws]===1||(p=d=0,l[ws]=1),i=u=null,this.q){j=P=1,(i=l[xs])||(j=P=0,l[xs]=i=D("div",null,`q-prompt ${y}`,null,null)),j||(i[io]=l),K=this.q.prompt,K===i[_s]&&j||(i[Ss]=i[Yt](i[_s]=K,384,i[Ss])),N=oe=1,(u=l[Ts])||(N=oe=0,l[Ts]=u=D("div",null,`word-list ${y}`,null,null)),N||(u[io]=l),(Q=u[Es])||(u[Es]=Q=Zu(384,u)),X=0,ie=Q.$;for(let ee=0,he=De(this.q.options),ae=he.length;ee<ae;ee++){let Z=he[ee];le=te=1,(z=ie[X])||(le=te=0,ie[X]=z=D("div",Q,`options-btn ${y}`,null,null)),le||(z[io]=Q),Y=this.q.pick&&Z==this.q.correct||void 0,Y===z[ao]||(te|=2,z[ao]=Y),Y=this.q.pick&&this.q.pick!=this.q.correct&&Z==this.q.pick||void 0,Y===z[oo]||(te|=2,z[oo]=Y),Y=this.q.pick&&Z!=this.q.correct&&Z!=this.q.pick||void 0,Y===z[uo]||(te|=2,z[uo]=Y),ue=z[As]||(z[As]={$_:[function(Re,pe,$e){return r.pickΞopt($e)},null]}),ue.$_[1]=Z,le||z.on$("click",ue,this),te&2&&z.flag$(`options-btn ${y} `+(z[ao]?"right":"")+" "+(z[oo]?"wrong":"")+" "+(z[uo]?"dim":""),null),Y=Z,Y===z[Cs]&&le||(z[$s]=z[Yt](z[Cs]=Y,384,z[$s])),X++}Q[Ac](X)}return l[js]=l[Yt](i,0,l[js]),l[Ns]=l[Yt](u,0,l[Ns]),l[$c](d),l}};G(Qt,Cc,"mcq",2),fn("mcq",Qt,{cssns:"dd_af",cssid:"dd-af"});var Ps=Qt;J();Mn(),rn();var jc=Symbol.for("#beforeReconcile"),Je=Symbol.for("##up"),Fe=Symbol.for("#placeChild"),Ms=Symbol.for("#afterVisit"),Nc=Symbol.for("#afterReconcile"),Is=Symbol(),Rs=Symbol(),Os=Symbol(),Ks=Symbol(),Ds=Symbol(),Fs=Symbol(),qs=Symbol(),Bs=Symbol(),Hs=Symbol(),Ws=Symbol(),Ls=Symbol(),zs=Symbol(),Zs=Symbol(),Us=Symbol(),Gs=Symbol(),Vs=Symbol(),Js=Symbol(),Ys=Symbol(),Qs=Symbol(),Xs=Symbol(),el=Symbol(),nl=Symbol(),rl=Symbol(),tl=Symbol(),il=Symbol(),al=Symbol(),ol=Symbol(),ul=Symbol(),sl=Symbol(),ll=Symbol(),ml=Symbol(),gl=5;function Zr(c){return c.en.length?c.en[0]:""}var Pc=Symbol(),Xt=class Xt extends We{[ke](r=null,i=!0,u=!0){var l;super[ke](...arguments),this.phase=r&&(l=r.phase)!==void 0?l:"loading",this.round=r&&(l=r.round)!==void 0?l:"maori-en",this.batch=r&&(l=r.batch)!==void 0?l:[],this.queue=r&&(l=r.queue)!==void 0?l:[],this.question=r&&(l=r.question)!==void 0?l:null,this.attempts=r&&(l=r.attempts)!==void 0?l:0,this.misses=r&&(l=r.misses)!==void 0?l:0}async mount(){return await this.setup()}async setup(){let r=await vn(rr),i=await vn(In),u=r.length?r:Gt(Xa(gl,i));return this.batch=this.entriesΞfor(u),r.length||await zr(rr,Gt(this.batch)),this.phase="review",Pe()}entriesΞfor(r){let i=[];for(let u=0,l=De(r),p=l.length;u<p;u++){let d=l[u],y=Ut(d);y&&i.push(y)}return i}startΞquiz(r){return this.queue=this.batch.slice(0),this.round=r,this.attempts=0,this.misses=0,this.phase="quiz",this.nextΞquestion()}nextΞquestion(){if(!this.queue.length){if(this.round=="maori-en")return this.startΞquiz("en-maori");this.completeΞbatch();return}let r=this.queue[0];if(this.round=="maori-en"){let i=[Zr(r)];for(let u=0,l=De(Lr(r,3)),p=l.length;u<p;u++){let d=l[u];i.push(Zr(d))}return this.question={entry:r,prompt:"What does “"+r.mi+"” mean?",options:kr(i),correct:Zr(r),pick:null,wasΞright:!1}}else{let i=[r.mi];for(let u=0,l=De(Lr(r,3)),p=l.length;u<p;u++){let d=l[u];i.push(d.mi)}return this.question={entry:r,prompt:"How do you say “"+Zr(r)+"” in te reo Māori?",options:kr(i),correct:r.mi,pick:null,wasΞright:!1}}}answerΞpicked(r){let i=this.question;if(!i)return;this.attempts++;let u=r==i.correct;return u||(this.misses++,this.queue.push(i.entry)),i.wasΞright=u,i.pick=r}advance(){if(this.phase!="quiz")return;let r=this.question;if(r&&r.pick)return this.queue.shift(),r.pick=null,this.nextΞquestion()}async completeΞbatch(){this.phase="review";let r=await vn(In);for(let u=0,l=De(this.batch),p=l.length;u<p;u++){let d=l[u];r.indexOf(d.id)==-1&&r.push(d.id)}await zr(In,r),await zr(rr,[]);let i=Gt(Xa(gl,r));return await zr(rr,i),this.batch=this.entriesΞfor(i),Pe()}render(){var r=this,i,u,l,p,d,y,j,P,K=this._ns_||"",N,oe,Q,X,ie,z,le,te,Y,ue,ee,he,ae,Z,Re,pe,$e,de,_e,ve,Ce,we,Te,Qe,un,bn,qe,ir,xe,Oe,be,Ue,ar,Xe,en,wr,sn,yn,On,ln;if(y=this,y[jc](),j=P=1,y[Is]===1||(j=P=0,y[Is]=1),j||(N=D("div",y,`page-head ${K}`,null,null)),j||(oe=D("button",N,`back ${K}`,"Back",null)),j||oe.on$("click",{$_:[function(Be,Kn){return r.emit("close")}]},this),j||(Q=D("h1",N,`${K}`,"Stage 1 · Learn words",null)),u=l=p=d=null,this.phase=="loading")X=ie=1,(u=y[Rs])||(X=ie=0,y[Rs]=u=D("div",null,`tracker ${K}`,"Loading progress…",null)),X||(u[Je]=y);else if(this.phase=="review")if(this.batch.length){z=le=1,(u=y[Os])||(z=le=0,y[Os]=u=D("h2",null,`${K}`,null,null)),z||(u[Je]=y),z||u[Fe]("New words ("),te=this.batch.length,te===u[Ds]&&z||(u[Ks]=u[Fe](u[Ds]=te,0,u[Ks])),z||u[Fe](")"),Y=ue=1,(l=y[Fs])||(Y=ue=0,y[Fs]=l=D("div",null,`word-list ${K}`,null,null)),Y||(l[Je]=y),(ee=l[qs])||(l[qs]=ee=Ju(384,l)),he=0,ae=ee.$;for(let Be=0,Kn=De(this.batch),H=Kn.length;Be<H;Be++){let or=Kn[Be];Re=$e=1,(Z=ae.get(pe=or.id))||(Re=$e=0,ae.set(pe,Z=D("div",null,`word ${K}`,null,null))),Re||(Z[Je]=ee),(de=Z[Bs])||(Z[Bs]=de=D("div",Z,`mi ${K}`,null,null)),_e=or.mi,_e===Z[Ws]&&Re||(Z[Hs]=de[Fe](Z[Ws]=_e,384,Z[Hs])),(ve=Z[Ls])||(Z[Ls]=ve=D("div",Z,`en ${K}`,null,null)),Me.context=Z[Zs]||(Z[Zs]={_:ve}),Ce=Zr(or),Me.context=null,Ce===Z[Us]&&Re||(Z[zs]=ve[Fe](Z[Us]=Ce,384,Z[zs])),ee.push(Z,he++,pe)}ee[Ms](he),we=Te=1,(p=y[Gs])||(we=Te=0,y[Gs]=p=D("div",null,`row ${K}`,null,null)),we||(p[Je]=y),we||(Qe=D("button",p,`next-btn ${K}`,"Test me",null)),we||Qe.on$("click",{$_:[function(Be,Kn){return r.startΞquiz("maori-en")}]},this)}else un=bn=1,(u=y[Vs])||(un=bn=0,y[Vs]=u=D("div",null,`tracker ${K}`,"Kua oti! You have learned every word in the dictionary.",null)),un||(u[Je]=y);else this.phase=="quiz"&&(qe=ir=1,(u=y[Js])||(qe=ir=0,y[Js]=u=D("div",null,`tracker ${K}`,null,null)),qe||(u[Je]=y),i=null,this.round=="maori-en"?i="Word → English":i="English → Word",u[Ys]=u[Fe](i,0,u[Ys]),qe||u[Fe](" · "),xe=this.queue.length,xe===u[Xs]&&qe||(u[Qs]=u[Fe](u[Xs]=xe,0,u[Qs])),qe||u[Fe](" to go · "),xe=this.misses,xe===u[nl]&&qe||(u[el]=u[Fe](u[nl]=xe,0,u[el])),qe||u[Fe](" retries"),Oe=be=1,(l=y[rl])||(Oe=be=0,y[rl]=l=dn("mcq",null,`${K}`,null,null)),Oe||(l[Je]=y),Ue=this.question,Ue===l[tl]||(l.q=l[tl]=Ue),Oe||(l.emitter=function(Be){return r.answerΞpicked(Be)}),Oe||!l.setup||l.setup(be,ar),l[Ms](be),this.question&&this.question.pick&&(this.question.wasΞright?(Xe=en=1,(p=y[il])||(Xe=en=0,y[il]=p=D("div",null,`feedback ok ${K}`,"Correct!",null)),Xe||(p[Je]=y)):(wr=sn=1,(p=y[al])||(wr=sn=0,y[al]=p=D("div",null,`feedback ${K}`,"It will come back around in a moment.",null)),wr||(p[Je]=y)),yn=On=1,(d=y[ol])||(yn=On=0,y[ol]=d=D("div",null,`row ${K}`,null,null)),yn||(d[Je]=y),yn||(ln=D("button",d,`next-btn ${K}`,"Continue",null)),yn||ln.on$("click",{$_:[function(Be,Kn){return r.advance(Be)}]},this)));return y[ul]=y[Fe](u,0,y[ul]),y[sl]=y[Fe](l,0,y[sl]),y[ll]=y[Fe](p,0,y[ll]),y[ml]=y[Fe](d,0,y[ml]),y[Nc](P),y}};G(Xt,Pc,"learn-page",2),fn("learn-page",Xt,{});var hl=Xt;J();Mn(),rn();var Mc=Symbol.for("#beforeReconcile"),Rn=Symbol.for("##up"),an=Symbol.for("#placeChild"),Ic=Symbol.for("#afterVisit"),Rc=Symbol.for("#afterReconcile"),cl=Symbol(),dl=Symbol(),fl=Symbol(),pl=Symbol(),vl=Symbol(),bl=Symbol(),yl=Symbol(),kl=Symbol(),wl=Symbol(),xl=Symbol(),Sl=Symbol(),_l=Symbol(),Tl=Symbol(),El=Symbol(),Al=Symbol(),$l=Symbol(),Cl=Symbol(),jl=Symbol(),Nl=Symbol(),Pl=Symbol();function Oc(c){return c.en.length?c.en[0]:""}function Kc(c,r){return c-r}var Dc=Symbol(),ei=class ei extends We{[ke](r=null,i=!0,u=!0){var l;super[ke](...arguments),this.phase=r&&(l=r.phase)!==void 0?l:"loading",this.queue=r&&(l=r.queue)!==void 0?l:[],this.pos=r&&(l=r.pos)!==void 0?l:0,this.question=r&&(l=r.question)!==void 0?l:null,this.answered=r&&(l=r.answered)!==void 0?l:0,this.correct=r&&(l=r.correct)!==void 0?l:0}async mount(){return await this.setup()}async setup(){let r=await vn(In);if(!r.length){this.phase="empty",Pe();return}return this.queue=r.slice(0).sort(Kc),this.pos=0,this.updateΞquestion(),this.phase="quiz",Pe()}updateΞquestion(){let r=Ut(this.queue[this.pos]);if(!r){if(this.queue.splice(this.pos,1),this.pos>=this.queue.length&&(this.pos=0),!this.queue.length){this.question=null,this.phase="done";return}return this.updateΞquestion()}let i=[r.mi];for(let u=0,l=De(Lr(r,3)),p=l.length;u<p;u++){let d=l[u];i.push(d.mi)}return this.question={prompt:"How do you say “"+Oc(r)+"” in te reo Māori?",options:kr(i),correct:r.mi,pick:null,wasΞright:!1}}answerΞpicked(r){let i=this.question;if(i&&(i.wasΞright=r==i.correct,i.pick=r,this.answered++,i.wasΞright))return this.correct++}applyΞmoves(r){let i=this.queue,u=i.splice(this.pos,1)[0];if(this.pos>=i.length&&(this.pos=0),r)return i.push(u);{let l=Math.min(this.pos+5,i.length);return i.splice(l,0,u)}}advance(){let r=this.question;if(r&&r.pick){if(this.applyΞmoves(r.wasΞright),!this.queue.length){this.question=null,this.phase="done",Pe();return}return this.updateΞquestion()}}render(){var r=this,i,u,l,p,d,y,j,P=this._ns_||"",K,N,oe,Q,X,ie,z,le,te,Y,ue,ee,he,ae,Z,Re,pe,$e,de,_e,ve,Ce,we;return d=this,d[Mc](),y=j=1,d[cl]===1||(y=j=0,d[cl]=1),y||(K=D("div",d,`page-head ${P}`,null,null)),y||(N=D("button",K,`back ${P}`,"Back",null)),y||N.on$("click",{$_:[function(Te,Qe){return r.emit("close")}]},this),y||(oe=D("h1",K,`${P}`,"Stage 1 · Recall words",null)),i=u=l=p=null,this.phase=="loading"?(Q=X=1,(i=d[dl])||(Q=X=0,d[dl]=i=D("div",null,`tracker ${P}`,"Loading progress…",null)),Q||(i[Rn]=d)):this.phase=="empty"?(ie=z=1,(i=d[fl])||(ie=z=0,d[fl]=i=D("div",null,`tracker ${P}`,"No learned words yet. Learn some words in Stage 1 first.",null)),ie||(i[Rn]=d)):this.phase=="done"?(le=te=1,(i=d[pl])||(le=te=0,d[pl]=i=D("div",null,`tracker ${P}`,"All recalls complete!",null)),le||(i[Rn]=d)):(Y=ue=1,(i=d[vl])||(Y=ue=0,d[vl]=i=D("div",null,`tracker ${P}`,null,null)),Y||(i[Rn]=d),ee=this.queue.length,ee===i[yl]&&Y||(i[bl]=i[an](i[yl]=ee,128,i[bl])),Y||i[an](" learned words · "),ee=this.correct,ee===i[wl]&&Y||(i[kl]=i[an](i[wl]=ee,0,i[kl])),Y||i[an](" correct of "),ee=this.answered,ee===i[Sl]&&Y||(i[xl]=i[an](i[Sl]=ee,0,i[xl])),Y||i[an](" answered"),he=ae=1,(u=d[_l])||(he=ae=0,d[_l]=u=dn("mcq",null,`${P}`,null,null)),he||(u[Rn]=d),Z=this.question,Z===u[Tl]||(u.q=u[Tl]=Z),he||(u.emitter=function(Te){return r.answerΞpicked(Te)}),he||!u.setup||u.setup(ae,Re),u[Ic](ae),this.question&&this.question.pick&&(this.question.wasΞright?(pe=$e=1,(l=d[El])||(pe=$e=0,d[El]=l=D("div",null,`feedback ok ${P}`,"Correct!",null)),pe||(l[Rn]=d)):(de=_e=1,(l=d[Al])||(de=_e=0,d[Al]=l=D("div",null,`feedback ${P}`,"Not quite - it will come back around soon.",null)),de||(l[Rn]=d)),ve=Ce=1,(p=d[$l])||(ve=Ce=0,d[$l]=p=D("div",null,`row ${P}`,null,null)),ve||(p[Rn]=d),ve||(we=D("button",p,`next-btn ${P}`,"Next",null)),ve||we.on$("click",{$_:[function(Te,Qe){return r.advance(Te)}]},this))),d[Cl]=d[an](i,0,d[Cl]),d[jl]=d[an](u,0,d[jl]),d[Nl]=d[an](l,0,d[Nl]),d[Pl]=d[an](p,0,d[Pl]),d[Rc](j),d}};G(ei,Dc,"recall-page",2),fn("recall-page",ei,{});var Ml=ei;Mn(),rn();var om=Symbol.for("#beforeReconcile"),on=Symbol.for("#placeChild"),um=Symbol.for("#afterReconcile"),ti=Symbol.for("##up"),ii=Symbol.for("#afterVisit"),Fc=Symbol.for("##register"),Il=Symbol(),Rl=Symbol(),Ol=Symbol(),Kl=Symbol(),Dl=Symbol(),Fl=Symbol(),ql=Symbol(),Bl=Symbol(),Hl=Symbol(),Wl=Symbol(),Ll=Symbol(),zl=Symbol();var so=Symbol(),Zl=Symbol(),Ul=Symbol(),Gl=Symbol(),Vl=Symbol(),Jl=Symbol(),Yl=Symbol(),Ql=Symbol(),Xl=Symbol(),em=Symbol(),nm=Symbol(),rm=Symbol(),Ye,tr=su(),ni=Symbol(),Ur,ri;function sm(c){return globalThis.document.documentElement.classList.toggle("dark",c=="dark")}var lm=ys(to)=="dark"?"dark":"light";sm(lm);var qc=Symbol(),ai=class ai extends We{[ke](r=null,i=!0,u=!0){var l;super[ke](...arguments),this.loaded=r&&(l=r.loaded)!==void 0?l:!1,this.theme=r&&(l=r.theme)!==void 0?l:"light",this.inprogressΞids=r&&(l=r.inprogressΞids)!==void 0?l:[],this.learnedΞids=r&&(l=r.learnedΞids)!==void 0?l:[],this.stats=r&&(l=r.stats)!==void 0?l:{count:0,total:0,percent:0}}async mount(){return await this.refresh()}async refresh(){let r=await vn(rr),i=await vn(In);return this.inprogressΞids=r,this.learnedΞids=i,this.stats=Qa(i),this.loaded=!0,Pe()}async resetΞall(){if(globalThis.confirm("Reset all progress? This clears learned and in-progress words."))return await bs(),this.learnedΞids=[],this.inprogressΞids=[],this.stats=Qa([]),Pe()}toggleΞtheme(){return this.emit("toggle-theme")}render(){var r=this,i,u,l,p,d=this._ns_||"",y,j,P,K,N,oe,Q,X,ie,z,le,te,Y,ue,ee,he,ae,Z,Re,pe,$e,de,_e,ve,Ce,we,Te,Qe,un,bn,qe,ir,xe,Oe,be,Ue,ar;return u=this,u[om](),l=p=1,u[Il]===1||(l=p=0,u[Il]=1),l||(y=D("div",u,`hero ${d}`,null,null)),l||(j=D("h1",y,`${d}`,"Learn Māori",null)),l||(P=D("p",y,`lead ${d}`,"Learn te reo Māori, one word at a time. Pick a stage below - your progress is saved automatically on this device.",null)),l||(K=D("div",u,`stats ${d}`,null,null)),l||(N=D("div",K,`${d}`,null,null)),l||(oe=D("span",N,`label ${d}`,"Learned",null)),(Q=u[Rl])||(u[Rl]=Q=D("span",N,`value ${d}`,null,null)),X=this.stats.percent,X===u[Kl]&&l||(u[Ol]=Q[on](u[Kl]=X,128,u[Ol])),l||Q[on]("%"),l||(ie=D("div",K,`${d}`,null,null)),l||(z=D("span",ie,`label ${d}`,"Words",null)),(le=u[Dl])||(u[Dl]=le=D("span",ie,`value ${d}`,null,null)),te=this.stats.count,te===u[ql]&&l||(u[Fl]=le[on](u[ql]=te,128,u[Fl])),l||le[on](" / "),te=this.stats.total,te===u[Hl]&&l||(u[Bl]=le[on](u[Hl]=te,256,u[Bl])),l||(Y=D("div",K,`${d}`,null,null)),l||(ue=D("span",Y,`label ${d}`,"In progress now",null)),(ee=u[Wl])||(u[Wl]=ee=D("span",Y,`value ${d}`,null,null)),he=this.inprogressΞids.length,he===u[Ll]||ee.text$(String(u[Ll]=he)),l||(ae=D("div",u,`stage-card card ${d}`,null,null)),l||(Z=D("h2",ae,`${d}`,"Stage 1 · Single words",null)),l||(Re=D("p",ae,`${d}`,"Review new words, then test recall from word to English and back.",null)),l||(pe=D("div",ae,`row ${d}`,null,null)),l||($e=D("button",pe,`primary ${d}`,"Learn new words",null)),l||$e.on$("click",{$_:[function(Xe,en){return r.emit("learn")}]},this),_e=ve=1,(de=u[zl])||(_e=ve=0,u[zl]=de=D("button",pe,`mi-red-ochre-btn ${d}`,null,null)),Ce=this.loaded&&!this.learnedΞids.length||void 0,Ce===u[so]||(ve|=2,u[so]=Ce),_e||de.on$("click",{$_:[function(Xe,en){return r.emit("recall")}]},this),ve&2&&de.flag$(`mi-red-ochre-btn ${d} `+(u[so]?"disabled":""),null),_e||de[on]("Recall learned words ("),Ce=this.learnedΞids.length,Ce===u[Ul]&&_e||(u[Zl]=de[on](u[Ul]=Ce,0,u[Zl])),_e||de[on](")"),l||(we=D("div",u,`card locked ${d}`,null,null)),l||(Te=D("h2",we,`${d}`,"Stage 2",null)),l||(Qe=D("p",we,`${d}`,"To be announced.",null)),l||(un=D("div",u,`card locked ${d}`,null,null)),l||(bn=D("h2",un,`${d}`,"Stage 3",null)),l||(qe=D("p",un,`${d}`,"To be announced.",null)),l||(ir=D("hr",u,`hr ${d}`,null,null)),l||(xe=D("div",u,`footer ${d}`,null,null)),l||(Oe=D("button",xe,`danger plain-btn ${d}`,"Reset progress",null)),l||Oe.on$("click",{$_:[function(Xe,en){return r.resetΞall()}]},this),Ue=ar=1,(be=u[Gl])||(Ue=ar=0,u[Gl]=be=D("button",xe,`theme-toggle plain-btn ${d}`,null,null)),Ue||be.on$("click",{$_:[function(Xe,en){return r.toggleΞtheme()}]},this),i=null,this.theme=="dark"?i="☀️ Light mode":i="🌙 Dark mode",u[Vl]=be[on](i,0,u[Vl]),u[um](p),u}};G(ai,qc,"landing-page",2),fn("landing-page",ai,{});var tm=ai,Bc=Symbol(),oi=class oi extends We{[ke](r=null,i=!0,u=!0){var l;super[ke](...arguments),this.view=r&&(l=r.view)!==void 0?l:"landing",this.theme=r&&(l=r.theme)!==void 0?l:lm}toggleΞtheme(){return this.theme=this.theme=="light"?"dark":"light",sm(this.theme),ks(to,this.theme)}mount(){var r=this;return this.syncΞhash(),globalThis.addEventListener("hashchange",function(){return r.syncΞhash()})}syncΞhash(){let r=this.locationΞhash;if(r=="learn"){if(this.view!="learn")return this.view="learn",Pe()}else if(r=="recall"){if(this.view!="recall")return this.view="recall",Pe()}else if(r==""&&this.view!="landing")return this.view="landing",Pe()}get locationΞhash(){return(globalThis.location.hash||"").replace("#","")}showΞlearn(){return this.view="learn"}showΞrecall(){return this.view="recall"}showΞlanding(){return this.view="landing"}render(){var r=this,i,u,l,p,d=this._ns_||"",y,j,P,K,N,oe,Q,X,ie,z,le;return u=this,u[om](),l=p=1,u[Jl]===1||(l=p=0,u[Jl]=1),(y=u[Yl])||(u[Yl]=y=D("div",u,`app-shell ${d}`,null,null)),i=null,this.view=="landing"?(j=P=1,(i=u[Ql])||(j=P=0,u[Ql]=i=dn("landing-page",null,`${d}`,null,null)),j||(i[ti]=y),K=this.theme,K===i[Xl]||(i.theme=i[Xl]=K),j||i.on$("toggle-theme",{$_:[function(te,Y){return r.toggleΞtheme()}]},this),j||i.on$("learn",{$_:[function(te,Y){return r.showΞlearn()}]},this),j||i.on$("recall",{$_:[function(te,Y){return r.showΞrecall()}]},this),j||!i.setup||i.setup(P,N),i[ii](P)):this.view=="learn"?(oe=Q=1,(i=u[em])||(oe=Q=0,u[em]=i=dn("learn-page",null,`${d}`,null,null)),oe||(i[ti]=y),oe||i.on$("close",{$_:[function(te,Y){return r.showΞlanding()}]},this),oe||!i.setup||i.setup(Q,X),i[ii](Q)):(ie=z=1,(i=u[nm])||(ie=z=0,u[nm]=i=dn("recall-page",null,`${d}`,null,null)),ie||(i[ti]=y),ie||i.on$("close",{$_:[function(te,Y){return r.showΞlanding()}]},this),ie||!i.setup||i.setup(z,le),i[ii](z)),u[rm]=y[on](i,0,u[rm]),u[um](p),u}};G(oi,Bc,"app",2),fn("app",oi,{});var im=oi,am;qa((Ur=ri=1,(Ye=tr[ni])||(Ur=ri=0,Ye=tr[ni]=Ye=dn("app",null,null,null,null)),Ur||(Ye[ti]=tr._),Ur||((am=Ye[Fc])==null||am.call(Ye,tr,ni)),Ur||tr.sym||!Ye.setup||Ye.setup(ri,tr,ni),tr.sym||Ye[ii](ri),Ye));
//__FOOT__
