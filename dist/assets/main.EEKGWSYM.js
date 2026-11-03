//__HEAD__
var hh=Object.create;var tu=Object.defineProperty;var gh=Object.getOwnPropertyDescriptor;var dh=Object.getOwnPropertyNames;var fh=Object.getPrototypeOf,ph=Object.prototype.hasOwnProperty;var bh=(c,t)=>()=>(c&&(t=c(c=0)),t);var vh=(c,t)=>()=>(t||c((t={exports:{}}).exports,t),t.exports);var yh=(c,t,i,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of dh(t))!ph.call(c,l)&&l!==i&&tu(c,l,{get:()=>t[l],enumerable:!(u=gh(t,l))||u.enumerable});return c};var kh=(c,t,i)=>(i=c!=null?hh(fh(c)):{},yh(t||!c||!c.__esModule?tu(i,"default",{value:c,enumerable:!0}):i,c));var W=bh(()=>{});var Es=vh((sa,la)=>{W();(function(c,t){typeof sa=="object"&&typeof la<"u"?la.exports=t():typeof define=="function"&&define.amd?define(t):(c=typeof globalThis<"u"?globalThis:c||self,c.Dexie=t())})(sa,function(){"use strict";var c=function(e,n){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a])},c(e,n)};function t(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");c(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}var i=function(){return i=Object.assign||function(n){for(var r,o=1,a=arguments.length;o<a;o++){r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},i.apply(this,arguments)};function u(e,n,r){if(r||arguments.length===2)for(var o=0,a=n.length,s;o<a;o++)(s||!(o in n))&&(s||(s=Array.prototype.slice.call(n,0,o)),s[o]=n[o]);return e.concat(s||Array.prototype.slice.call(n))}typeof SuppressedError=="function"&&SuppressedError;var l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:globalThis,p=Object.keys,f=Array.isArray;typeof Promise<"u"&&!l.Promise&&(l.Promise=Promise);function b(e,n){return typeof n!="object"||p(n).forEach(function(r){e[r]=n[r]}),e}var C=Object.getPrototypeOf,I={}.hasOwnProperty;function R(e,n){return I.call(e,n)}function O(e,n){typeof n=="function"&&(n=n(C(e))),(typeof Reflect>"u"?p:Reflect.ownKeys)(n).forEach(function(r){X(e,r,n[r])})}var oe=Object.defineProperty;function X(e,n,r,o){oe(e,n,b(r&&R(r,"get")&&typeof r.get=="function"?{get:r.get,set:r.set,configurable:!0}:{value:r,configurable:!0,writable:!0},o))}function ee(e){return{from:function(n){return e.prototype=Object.create(n.prototype),X(e.prototype,"constructor",e),{extend:O.bind(null,e.prototype)}}}}var le=Object.getOwnPropertyDescriptor;function P(e,n){var r=le(e,n),o;return r||(o=C(e))&&P(o,n)}var J=[].slice;function ue(e,n,r){return J.call(e,n,r)}function me(e,n){return n(e)}function Y(e){if(!e)throw new Error("Assertion Failed")}function ae(e){l.setImmediate?setImmediate(e):setTimeout(e,0)}function ce(e,n){return e.reduce(function(r,o,a){var s=n(o,a);return s&&(r[s[0]]=s[1]),r},{})}function te(e,n){if(typeof n=="string"&&R(e,n))return e[n];if(!n)return e;if(typeof n!="string"){for(var r=[],o=0,a=n.length;o<a;++o){var s=te(e,n[o]);r.push(s)}return r}var m=n.indexOf(".");if(m!==-1){var h=e[n.substr(0,m)];return h==null?void 0:te(h,n.substr(m+1))}}function Q(e,n,r){if(!(!e||n===void 0)&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof n!="string"&&"length"in n){Y(typeof r!="string"&&"length"in r);for(var o=0,a=n.length;o<a;++o)Q(e,n[o],r[o])}else{var s=n.indexOf(".");if(s!==-1){var m=n.substr(0,s),h=n.substr(s+1);if(h==="")r===void 0?f(e)&&!isNaN(parseInt(m))?e.splice(m,1):delete e[m]:e[m]=r;else{var g=e[m];if(!g||!R(e,m)){if(r===void 0)return;g=e[m]={}}Q(g,h,r)}}else r===void 0?f(e)&&!isNaN(parseInt(n))?e.splice(n,1):delete e[n]:e[n]=r}}function ne(e,n){typeof n=="string"?Q(e,n,void 0):"length"in n&&[].map.call(n,function(r){Q(e,r,void 0)})}function pe(e){var n={};for(var r in e)R(e,r)&&(n[r]=e[r]);return n}var ke=[].concat;function Be(e){return ke.apply([],e)}var Re="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Be([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(n){return n+e+"Array"})}))).filter(function(e){return l[e]}),we=new Set(Re.map(function(e){return l[e]}));function $e(e){var n={};for(var r in e)if(R(e,r)){var o=e[r];n[r]=!o||typeof o!="object"||we.has(o.constructor)?o:$e(o)}return n}var Ee=null;function be(e){Ee=new WeakMap;var n=Ce(e);return Ee=null,n}function Ce(e){if(!e||typeof e!="object")return e;var n=Ee.get(e);if(n)return n;if(f(e)){n=[],Ee.set(e,n);for(var r=0,o=e.length;r<o;++r)n.push(Ce(e[r]))}else if(we.has(e.constructor))n=e;else{var a=C(e);n=a===Object.prototype?{}:Object.create(a),Ee.set(e,n);for(var s in e)R(e,s)&&(n[s]=Ce(e[s]))}return n}var Xe={}.toString;function Je(e){return Xe.call(e).slice(8,-1)}var xn=typeof Symbol<"u"?Symbol.iterator:"@@iterator",st=typeof xn=="symbol"?function(e){var n;return e!=null&&(n=e[xn])&&n.apply(e)}:function(){return null};function Ke(e,n){var r=e.indexOf(n);return r>=0&&e.splice(r,1),r>=0}var Ze={};function de(e){var n,r,o,a;if(arguments.length===1){if(f(e))return e.slice();if(this===Ze&&typeof e=="string")return[e];if(a=st(e)){for(r=[];o=a.next(),!o.done;)r.push(o.value);return r}if(e==null)return[e];if(n=e.length,typeof n=="number"){for(r=new Array(n);n--;)r[n]=e[n];return r}return[e]}for(n=arguments.length,r=new Array(n);n--;)r[n]=arguments[n];return r}var un=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},en=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"],Le=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],He=en.concat(Le),qn={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function xe(e,n){this.name=e,this.message=n}ee(xe).from(Error).extend({toString:function(){return this.name+": "+this.message}});function _n(e,n){return e+". Errors: "+Object.keys(n).map(function(r){return n[r].toString()}).filter(function(r,o,a){return a.indexOf(r)===o}).join(`
`)}function gn(e,n,r,o){this.failures=n,this.failedKeys=o,this.successCount=r,this.message=_n(e,n)}ee(gn).from(xe);function ze(e,n){this.name="BulkError",this.failures=Object.keys(n).map(function(r){return n[r]}),this.failuresByPos=n,this.message=_n(e,this.failures)}ee(ze).from(xe);var lt=He.reduce(function(e,n){return e[n]=n+"Error",e},{}),Bn=xe,L=He.reduce(function(e,n){var r=n+"Error";function o(a,s){this.name=r,a?typeof a=="string"?(this.message="".concat(a).concat(s?`
 `+s:""),this.inner=s||null):typeof a=="object"&&(this.message="".concat(a.name," ").concat(a.message),this.inner=a):(this.message=qn[n]||r,this.inner=null)}return ee(o).from(Bn),e[n]=o,e},{});L.Syntax=SyntaxError,L.Type=TypeError,L.Range=RangeError;var $t=Le.reduce(function(e,n){return e[n+"Error"]=L[n],e},{});function nn(e,n){if(!e||e instanceof xe||e instanceof TypeError||e instanceof SyntaxError||!e.name||!$t[e.name])return e;var r=new $t[e.name](n||e.message,e);return"stack"in e&&X(r,"stack",{get:function(){return this.inner.stack}}),r}var sn=He.reduce(function(e,n){return["Syntax","Type","Range"].indexOf(n)===-1&&(e[n+"Error"]=L[n]),e},{});sn.ModifyError=gn,sn.DexieError=xe,sn.BulkError=ze;function se(){}function ln(e){return e}function zm(e,n){return e==null||e===ln?n:function(r){return n(e(r))}}function Ln(e,n){return function(){e.apply(this,arguments),n.apply(this,arguments)}}function Hm(e,n){return e===se?n:function(){var r=e.apply(this,arguments);r!==void 0&&(arguments[0]=r);var o=this.onsuccess,a=this.onerror;this.onsuccess=null,this.onerror=null;var s=n.apply(this,arguments);return o&&(this.onsuccess=this.onsuccess?Ln(o,this.onsuccess):o),a&&(this.onerror=this.onerror?Ln(a,this.onerror):a),s!==void 0?s:r}}function Vm(e,n){return e===se?n:function(){e.apply(this,arguments);var r=this.onsuccess,o=this.onerror;this.onsuccess=this.onerror=null,n.apply(this,arguments),r&&(this.onsuccess=this.onsuccess?Ln(r,this.onsuccess):r),o&&(this.onerror=this.onerror?Ln(o,this.onerror):o)}}function Wm(e,n){return e===se?n:function(){var r=e.apply(this,arguments),o=arguments[0];b(o,r);var a=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var m=n.apply(this,arguments);return a&&(this.onsuccess=this.onsuccess?Ln(a,this.onsuccess):a),s&&(this.onerror=this.onerror?Ln(s,this.onerror):s),r===void 0?m===void 0?void 0:m:b(r,m)}}function Zm(e,n){return e===se?n:function(){return n.apply(this,arguments)===!1?!1:e.apply(this,arguments)}}function gi(e,n){return e===se?n:function(){var r=e.apply(this,arguments);if(r&&typeof r.then=="function"){for(var o=this,a=arguments.length,s=new Array(a);a--;)s[a]=arguments[a];return r.then(function(){return n.apply(o,s)})}return n.apply(this,arguments)}}var mn=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function ba(e,n){mn=e}var Tt={},va=100,di=typeof Promise>"u"?[]:function(){var e=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[e,C(e),e];var n=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[n,C(n),e]}(),ya=di[0],ka=di[1],Um=di[2],Gm=ka&&ka.then,zn=ya&&ya.constructor,fi=!!Um;function Ym(){queueMicrotask(Xm)}var jt=function(e,n){Et.push([e,n]),tr&&(Ym(),tr=!1)},pi=!0,tr=!0,Hn=[],rr=[],bi=ln,dn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:se,pgp:!1,env:{},finalize:se},B=dn,Et=[],Vn=0,ir=[];function M(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var n=this._PSD=B;if(typeof e!="function"){if(e!==Tt)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&yi(this,this._value);return}this._state=null,this._value=null,++n.ref,xa(this,e)}var vi={get:function(){var e=B,n=sr;function r(o,a){var s=this,m=!e.global&&(e!==B||n!==sr),h=m&&!$n(),g=new M(function(d,v){ki(s,new wa($a(o,e,m,h),$a(a,e,m,h),d,v,e))});return this._consoleTask&&(g._consoleTask=this._consoleTask),g}return r.prototype=Tt,r},set:function(e){X(this,"then",e&&e.prototype===Tt?vi:{get:function(){return e},set:vi.set})}};O(M.prototype,{then:vi,_then:function(e,n){ki(this,new wa(null,null,e,n,B))},catch:function(e){if(arguments.length===1)return this.then(null,e);var n=arguments[0],r=arguments[1];return typeof n=="function"?this.then(null,function(o){return o instanceof n?r(o):or(o)}):this.then(null,function(o){return o&&o.name===n?r(o):or(o)})},finally:function(e){return this.then(function(n){return M.resolve(e()).then(function(){return n})},function(n){return M.resolve(e()).then(function(){return or(n)})})},timeout:function(e,n){var r=this;return e<1/0?new M(function(o,a){var s=setTimeout(function(){return a(new L.Timeout(n))},e);r.then(o,a).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&X(M.prototype,Symbol.toStringTag,"Dexie.Promise"),dn.env=Sa();function wa(e,n,r,o,a){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof n=="function"?n:null,this.resolve=r,this.reject=o,this.psd=a}O(M,{all:function(){var e=de.apply(null,arguments).map(lr);return new M(function(n,r){e.length===0&&n([]);var o=e.length;e.forEach(function(a,s){return M.resolve(a).then(function(m){e[s]=m,--o||n(e)},r)})})},resolve:function(e){if(e instanceof M)return e;if(e&&typeof e.then=="function")return new M(function(r,o){e.then(r,o)});var n=new M(Tt,!0,e);return n},reject:or,race:function(){var e=de.apply(null,arguments).map(lr);return new M(function(n,r){e.map(function(o){return M.resolve(o).then(n,r)})})},PSD:{get:function(){return B},set:function(e){return B=e}},totalEchoes:{get:function(){return sr}},newPSD:Sn,usePSD:Wn,scheduler:{get:function(){return jt},set:function(e){jt=e}},rejectionMapper:{get:function(){return bi},set:function(e){bi=e}},follow:function(e,n){return new M(function(r,o){return Sn(function(a,s){var m=B;m.unhandleds=[],m.onunhandled=s,m.finalize=Ln(function(){var h=this;Jm(function(){h.unhandleds.length===0?a():s(h.unhandleds[0])})},m.finalize),e()},n,r,o)})}}),zn&&(zn.allSettled&&X(M,"allSettled",function(){var e=de.apply(null,arguments).map(lr);return new M(function(n){e.length===0&&n([]);var r=e.length,o=new Array(r);e.forEach(function(a,s){return M.resolve(a).then(function(m){return o[s]={status:"fulfilled",value:m}},function(m){return o[s]={status:"rejected",reason:m}}).then(function(){return--r||n(o)})})})}),zn.any&&typeof AggregateError<"u"&&X(M,"any",function(){var e=de.apply(null,arguments).map(lr);return new M(function(n,r){e.length===0&&r(new AggregateError([]));var o=e.length,a=new Array(o);e.forEach(function(s,m){return M.resolve(s).then(function(h){return n(h)},function(h){a[m]=h,--o||r(new AggregateError(a))})})})}),zn.withResolvers&&(M.withResolvers=zn.withResolvers));function xa(e,n){try{n(function(r){if(e._state===null){if(r===e)throw new TypeError("A promise cannot be resolved with itself.");var o=e._lib&&mt();r&&typeof r.then=="function"?xa(e,function(a,s){r instanceof M?r._then(a,s):r.then(a,s)}):(e._state=!0,e._value=r,_a(e)),o&&ct()}},yi.bind(null,e))}catch(r){yi(e,r)}}function yi(e,n){if(rr.push(n),e._state===null){var r=e._lib&&mt();n=bi(n),e._state=!1,e._value=n,ec(e),_a(e),r&&ct()}}function _a(e){var n=e._listeners;e._listeners=[];for(var r=0,o=n.length;r<o;++r)ki(e,n[r]);var a=e._PSD;--a.ref||a.finalize(),Vn===0&&(++Vn,jt(function(){--Vn===0&&wi()},[]))}function ki(e,n){if(e._state===null){e._listeners.push(n);return}var r=e._state?n.onFulfilled:n.onRejected;if(r===null)return(e._state?n.resolve:n.reject)(e._value);++n.psd.ref,++Vn,jt(Qm,[r,e,n])}function Qm(e,n,r){try{var o,a=n._value;!n._state&&rr.length&&(rr=[]),o=mn&&n._consoleTask?n._consoleTask.run(function(){return e(a)}):e(a),!n._state&&rr.indexOf(a)===-1&&nc(n),r.resolve(o)}catch(s){r.reject(s)}finally{--Vn===0&&wi(),--r.psd.ref||r.psd.finalize()}}function Xm(){Wn(dn,function(){mt()&&ct()})}function mt(){var e=pi;return pi=!1,tr=!1,e}function ct(){var e,n,r;do for(;Et.length>0;)for(e=Et,Et=[],r=e.length,n=0;n<r;++n){var o=e[n];o[0].apply(null,o[1])}while(Et.length>0);pi=!0,tr=!0}function wi(){var e=Hn;Hn=[],e.forEach(function(o){o._PSD.onunhandled.call(null,o._value,o)});for(var n=ir.slice(0),r=n.length;r;)n[--r]()}function Jm(e){function n(){e(),ir.splice(ir.indexOf(n),1)}ir.push(n),++Vn,jt(function(){--Vn===0&&wi()},[])}function ec(e){Hn.some(function(n){return n._value===e._value})||Hn.push(e)}function nc(e){for(var n=Hn.length;n;)if(Hn[--n]._value===e._value){Hn.splice(n,1);return}}function or(e){return new M(Tt,!1,e)}function ge(e,n){var r=B;return function(){var o=mt(),a=B;try{return Tn(r,!0),e.apply(this,arguments)}catch(s){n&&n(s)}finally{Tn(a,!1),o&&ct()}}}var Te={awaits:0,echoes:0,id:0},tc=0,ar=[],ur=0,sr=0,rc=0;function Sn(e,n,r,o){var a=B,s=Object.create(a);s.parent=a,s.ref=0,s.global=!1,s.id=++rc,dn.env,s.env=fi?{Promise:M,PromiseProp:{value:M,configurable:!0,writable:!0},all:M.all,race:M.race,allSettled:M.allSettled,any:M.any,resolve:M.resolve,reject:M.reject}:{},n&&b(s,n),++a.ref,s.finalize=function(){--this.parent.ref||this.parent.finalize()};var m=Wn(s,e,r,o);return s.ref===0&&s.finalize(),m}function ht(){return Te.id||(Te.id=++tc),++Te.awaits,Te.echoes+=va,Te.id}function $n(){return Te.awaits?(--Te.awaits===0&&(Te.id=0),Te.echoes=Te.awaits*va,!0):!1}(""+Gm).indexOf("[native code]")===-1&&(ht=$n=se);function lr(e){return Te.echoes&&e&&e.constructor===zn?(ht(),e.then(function(n){return $n(),n},function(n){return $n(),ve(n)})):e}function ic(e){++sr,(!Te.echoes||--Te.echoes===0)&&(Te.echoes=Te.awaits=Te.id=0),ar.push(B),Tn(e,!0)}function oc(){var e=ar[ar.length-1];ar.pop(),Tn(e,!1)}function Tn(e,n){var r=B;if((n?Te.echoes&&(!ur++||e!==B):ur&&(!--ur||e!==B))&&queueMicrotask(n?ic.bind(null,e):oc),e!==B&&(B=e,r===dn&&(dn.env=Sa()),fi)){var o=dn.env.Promise,a=e.env;(r.global||e.global)&&(Object.defineProperty(l,"Promise",a.PromiseProp),o.all=a.all,o.race=a.race,o.resolve=a.resolve,o.reject=a.reject,a.allSettled&&(o.allSettled=a.allSettled),a.any&&(o.any=a.any))}}function Sa(){var e=l.Promise;return fi?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(l,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function Wn(e,n,r,o,a){var s=B;try{return Tn(e,!0),n(r,o,a)}finally{Tn(s,!1)}}function $a(e,n,r,o){return typeof e!="function"?e:function(){var a=B;r&&ht(),Tn(n,!0);try{return e.apply(this,arguments)}finally{Tn(a,!1),o&&queueMicrotask($n)}}}function xi(e){Promise===zn&&Te.echoes===0?ur===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}var ve=M.reject;function _i(e,n,r,o){if(!e.idbdb||!e._state.openComplete&&!B.letThrough&&!e._vip){if(e._state.openComplete)return ve(new L.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return ve(new L.DatabaseClosed);e.open().catch(se)}return e._state.dbReadyPromise.then(function(){return _i(e,n,r,o)})}else{var a=e._createTransaction(n,r,e._dbSchema);try{a.create(),e._state.PR1398_maxLoop=3}catch(s){return s.name===lt.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e.close({disableAutoOpen:!1}),e.open().then(function(){return _i(e,n,r,o)})):ve(s)}return a._promise(n,function(s,m){return Sn(function(){return B.trans=a,o(s,m,a)})}).then(function(s){if(n==="readwrite")try{a.idbtrans.commit()}catch{}return n==="readonly"?s:a._completion.then(function(){return s})})}}var Ta="4.4.7",Zn="￿",Si=-1/0,fn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ja="String expected.",Ea=1e3,mr="__dbnames",$i="readonly",Ti="readwrite";function Un(e,n){return e?n?function(){return e.apply(this,arguments)&&n.apply(this,arguments)}:e:n}var Ca={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function cr(e){return typeof e=="string"&&!/\./.test(e)?function(n){return n[e]===void 0&&e in n&&(n=be(n),delete n[e]),n}:function(n){return n}}function Aa(){throw L.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function ie(e,n){try{var r=Pa(e),o=Pa(n);if(r!==o)return r==="Array"?1:o==="Array"?-1:r==="binary"?1:o==="binary"?-1:r==="string"?1:o==="string"?-1:r==="Date"?1:o!=="Date"?NaN:-1;switch(r){case"number":case"Date":case"string":return e>n?1:e<n?-1:0;case"binary":return uc(Ia(e),Ia(n));case"Array":return ac(e,n)}}catch{}return NaN}function ac(e,n){for(var r=e.length,o=n.length,a=r<o?r:o,s=0;s<a;++s){var m=ie(e[s],n[s]);if(m!==0)return m}return r===o?0:r<o?-1:1}function uc(e,n){for(var r=e.length,o=n.length,a=r<o?r:o,s=0;s<a;++s)if(e[s]!==n[s])return e[s]<n[s]?-1:1;return r===o?0:r<o?-1:1}function Pa(e){var n=typeof e;if(n!=="object")return n;if(ArrayBuffer.isView(e))return"binary";var r=Je(e);return r==="ArrayBuffer"?"binary":r}function Ia(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function hr(e,n,r){var o=e.schema.yProps;return o?(n&&r.numFailures>0&&(n=n.filter(function(a,s){return!r.failures[s]})),Promise.all(o.map(function(a){var s=a.updatesTable;return n?e.db.table(s).where("k").anyOf(n).delete():e.db.table(s).clear()})).then(function(){return r})):r}var Ct=function(){function e(n){this["@@propmod"]=n}return e.prototype.execute=function(n){var r,o=this["@@propmod"];if(o.add!==void 0){var a=o.add;if(f(a))return u(u([],f(n)?n:[],!0),a,!0).sort();if(typeof a=="number")return(Number(n)||0)+a;if(typeof a=="bigint")try{return BigInt(n)+a}catch{return BigInt(0)+a}throw new TypeError("Invalid term ".concat(a))}if(o.remove!==void 0){var s=o.remove;if(f(s))return f(n)?n.filter(function(h){return!s.includes(h)}).sort():[];if(typeof s=="number")return Number(n)-s;if(typeof s=="bigint")try{return BigInt(n)-s}catch{return BigInt(0)-s}throw new TypeError("Invalid subtrahend ".concat(s))}var m=(r=o.replacePrefix)===null||r===void 0?void 0:r[0];return m&&typeof n=="string"&&n.startsWith(m)?o.replacePrefix[1]+n.substring(m.length):n},e}();function Oa(e,n){for(var r=p(n),o=r.length,a=!1,s=0;s<o;++s){var m=r[s],h=n[m],g=te(e,m);h instanceof Ct?(Q(e,m,h.execute(g)),a=!0):g!==h&&(Q(e,m,h),a=!0)}return a}var Na=function(){function e(){}return e.prototype._trans=function(n,r,o){var a=this._tx||B.trans,s=this.name,m=mn&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(n==="readonly"?"read":"write"," ").concat(this.name));function h(v,w,x){if(!x.schema[s])throw new L.NotFound("Table "+s+" not part of transaction");return r(x.idbtrans,x)}var g=mt();try{var d=a&&a.db._novip===this.db._novip?a===B.trans?a._promise(n,h,o):Sn(function(){return a._promise(n,h,o)},{trans:a,transless:B.transless||B}):_i(this.db,n,[this.name],h);return m&&(d._consoleTask=m,d=d.catch(function(v){return console.trace(v),ve(v)})),d}finally{g&&ct()}},e.prototype.get=function(n,r){var o=this;return n&&n.constructor===Object?this.where(n).first(r):n==null?ve(new L.Type("Invalid argument to Table.get()")):this._trans("readonly",function(a){return o.core.get({trans:a,key:n}).then(function(s){return o.hook.reading.fire(s)})}).then(r)},e.prototype.where=function(n){if(typeof n=="string")return new this.db.WhereClause(this,n);if(f(n))return new this.db.WhereClause(this,"[".concat(n.join("+"),"]"));var r=p(n);if(r.length===1)return this.where(r[0]).equals(n[r[0]]);var o=this.schema.indexes.concat(this.schema.primKey).filter(function(v){if(v.compound&&r.every(function(x){return v.keyPath.indexOf(x)>=0})){for(var w=0;w<r.length;++w)if(r.indexOf(v.keyPath[w])===-1)return!1;return!0}return!1}).sort(function(v,w){return v.keyPath.length-w.keyPath.length})[0];if(o&&this.db._maxKey!==Zn){var a=o.keyPath.slice(0,r.length);return this.where(a).equals(a.map(function(v){return n[v]}))}!o&&mn&&console.warn("The query ".concat(JSON.stringify(n)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(r.join("+"),"]"));var s=this.schema.idxByName;function m(v,w){return ie(v,w)===0}var h=r.reduce(function(v,w){var x=v[0],j=v[1],y=s[w],k=n[w];return[x||y,x||!y?Un(j,y&&y.multi?function(S){var _=te(S,w);return f(_)&&_.some(function(A){return m(k,A)})}:function(S){return m(k,te(S,w))}):j]},[null,null]),g=h[0],d=h[1];return g?this.where(g.name).equals(n[g.keyPath]).filter(d):o?this.filter(d):this.where(r).equals("")},e.prototype.filter=function(n){return this.toCollection().and(n)},e.prototype.count=function(n){return this.toCollection().count(n)},e.prototype.offset=function(n){return this.toCollection().offset(n)},e.prototype.limit=function(n){return this.toCollection().limit(n)},e.prototype.each=function(n){return this.toCollection().each(n)},e.prototype.toArray=function(n){return this.toCollection().toArray(n)},e.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},e.prototype.orderBy=function(n){return new this.db.Collection(new this.db.WhereClause(this,f(n)?"[".concat(n.join("+"),"]"):n))},e.prototype.reverse=function(){return this.toCollection().reverse()},e.prototype.mapToClass=function(n){var r=this,o=r.db,a=r.name;this.schema.mappedClass=n,n.prototype instanceof Aa&&(n=function(g){t(d,g);function d(){return g!==null&&g.apply(this,arguments)||this}return Object.defineProperty(d.prototype,"db",{get:function(){return o},enumerable:!1,configurable:!0}),d.prototype.table=function(){return a},d}(n));for(var s=new Set,m=n.prototype;m;m=C(m))Object.getOwnPropertyNames(m).forEach(function(g){return s.add(g)});var h=function(g){if(!g)return g;var d=Object.create(n.prototype);for(var v in g)if(!s.has(v))try{d[v]=g[v]}catch{}return d};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=h,this.hook("reading",h),n},e.prototype.defineClass=function(){function n(r){b(this,r)}return this.mapToClass(n)},e.prototype.add=function(n,r){var o=this,a=this.schema.primKey,s=a.auto,m=a.keyPath,h=n;return m&&s&&(h=cr(m)(n)),this._trans("readwrite",function(g){return o.core.mutate({trans:g,type:"add",keys:r!=null?[r]:null,values:[h]})}).then(function(g){return g.numFailures?M.reject(g.failures[0]):g.lastResult}).then(function(g){if(m)try{Q(n,m,g)}catch{}return g})},e.prototype.upsert=function(n,r){var o=this,a=this.schema.primKey.keyPath;return this._trans("readwrite",function(s){return o.core.get({trans:s,key:n}).then(function(m){var h=m!=null?m:{};return Oa(h,r),a&&Q(h,a,n),o.core.mutate({trans:s,type:"put",values:[h],keys:[n],upsert:!0,updates:{keys:[n],changeSpecs:[r]}}).then(function(g){return g.numFailures?M.reject(g.failures[0]):!!m})})})},e.prototype.update=function(n,r){if(typeof n=="object"&&!f(n)){var o=te(n,this.schema.primKey.keyPath);return o===void 0?ve(new L.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(o).modify(r)}else return this.where(":id").equals(n).modify(r)},e.prototype.put=function(n,r){var o=this,a=this.schema.primKey,s=a.auto,m=a.keyPath,h=n;return m&&s&&(h=cr(m)(n)),this._trans("readwrite",function(g){return o.core.mutate({trans:g,type:"put",values:[h],keys:r!=null?[r]:null})}).then(function(g){return g.numFailures?M.reject(g.failures[0]):g.lastResult}).then(function(g){if(m)try{Q(n,m,g)}catch{}return g})},e.prototype.delete=function(n){var r=this;return this._trans("readwrite",function(o){return r.core.mutate({trans:o,type:"delete",keys:[n]}).then(function(a){return hr(r,[n],a)}).then(function(a){return a.numFailures?M.reject(a.failures[0]):void 0})})},e.prototype.clear=function(){var n=this;return this._trans("readwrite",function(r){return n.core.mutate({trans:r,type:"deleteRange",range:Ca}).then(function(o){return hr(n,null,o)})}).then(function(r){return r.numFailures?M.reject(r.failures[0]):void 0})},e.prototype.bulkGet=function(n){var r=this;return this._trans("readonly",function(o){return r.core.getMany({keys:n,trans:o}).then(function(a){return a.map(function(s){return r.hook.reading.fire(s)})})})},e.prototype.bulkAdd=function(n,r,o){var a=this,s=Array.isArray(r)?r:void 0;o=o||(s?void 0:r);var m=o?o.allKeys:void 0;return this._trans("readwrite",function(h){var g=a.schema.primKey,d=g.auto,v=g.keyPath;if(v&&s)throw new L.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==n.length)throw new L.InvalidArgument("Arguments objects and keys must have the same length");var w=n.length,x=v&&d?n.map(cr(v)):n;return a.core.mutate({trans:h,type:"add",keys:s,values:x,wantResults:m}).then(function(j){var y=j.numFailures,k=j.results,S=j.lastResult,_=j.failures,A=m?k:S;if(y===0)return A;throw new ze("".concat(a.name,".bulkAdd(): ").concat(y," of ").concat(w," operations failed"),_)})})},e.prototype.bulkPut=function(n,r,o){var a=this,s=Array.isArray(r)?r:void 0;o=o||(s?void 0:r);var m=o?o.allKeys:void 0;return this._trans("readwrite",function(h){var g=a.schema.primKey,d=g.auto,v=g.keyPath;if(v&&s)throw new L.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==n.length)throw new L.InvalidArgument("Arguments objects and keys must have the same length");var w=n.length,x=v&&d?n.map(cr(v)):n;return a.core.mutate({trans:h,type:"put",keys:s,values:x,wantResults:m}).then(function(j){var y=j.numFailures,k=j.results,S=j.lastResult,_=j.failures,A=m?k:S;if(y===0)return A;throw new ze("".concat(a.name,".bulkPut(): ").concat(y," of ").concat(w," operations failed"),_)})})},e.prototype.bulkUpdate=function(n){var r=this,o=n.map(function(m){return m.key}),a=n.map(function(m){return m.changes}),s=[];return this._trans("readwrite",function(m){var h=r.core;return h.getMany({trans:m,keys:o,cache:"clone"}).then(function(g){var d=h.schema.primaryKey,v=d.outbound,w=d.extractKey,x=[],j=[];n.forEach(function(k,S){var _=k.key,A=k.changes,E=g[S];if(E){for(var $=0,T=Object.keys(A);$<T.length;$++){var F=T[$];Q(E,F,A[F])}if(!v&&ie(w(E),_)!==0)throw new L.Constraint("Cannot update primary key in bulkUpdate()");s.push(S),x.push(_),j.push(E)}});var y=x.length;return h.mutate({trans:m,type:"put",keys:x,values:j,updates:{keys:o,changeSpecs:a}}).then(function(k){var S=k.numFailures,_=k.failures;if(S===0)return y;for(var A=0,E=Object.keys(_);A<E.length;A++){var $=E[A],T=s[Number($)];if(T!=null){var F=_[$];delete _[$],_[T]=F}}throw new ze("".concat(r.name,".bulkUpdate(): ").concat(S," of ").concat(y," operations failed"),_)})})})},e.prototype.bulkDelete=function(n){var r=this,o=n.length;return this._trans("readwrite",function(a){return r.core.mutate({trans:a,type:"delete",keys:n}).then(function(s){return hr(r,n,s)})}).then(function(a){var s=a.numFailures,m=a.lastResult,h=a.failures;if(s===0)return m;throw new ze("".concat(r.name,".bulkDelete(): ").concat(s," of ").concat(o," operations failed"),h)})},e}();function At(e){var n={},r=function(h,g){if(g){for(var d=arguments.length,v=new Array(d-1);--d;)v[d-1]=arguments[d];return n[h].subscribe.apply(null,v),e}else if(typeof h=="string")return n[h]};r.addEventType=s;for(var o=1,a=arguments.length;o<a;++o)s(arguments[o]);return r;function s(h,g,d){if(typeof h=="object")return m(h);g||(g=Zm),d||(d=se);var v={subscribers:[],fire:d,subscribe:function(w){v.subscribers.indexOf(w)===-1&&(v.subscribers.push(w),v.fire=g(v.fire,w))},unsubscribe:function(w){v.subscribers=v.subscribers.filter(function(x){return x!==w}),v.fire=v.subscribers.reduce(g,d)}};return n[h]=r[h]=v,v}function m(h){p(h).forEach(function(g){var d=h[g];if(f(d))s(g,h[g][0],h[g][1]);else if(d==="asap")var v=s(g,ln,function(){for(var x=arguments.length,j=new Array(x);x--;)j[x]=arguments[x];v.subscribers.forEach(function(y){ae(function(){y.apply(null,j)})})});else throw new L.InvalidArgument("Invalid event config")})}}function Pt(e,n){return ee(n).from({prototype:e}),n}function sc(e){return Pt(Na.prototype,function(r,o,a){this.db=e,this._tx=a,this.name=r,this.schema=o,this.hook=e._allTables[r]?e._allTables[r].hook:At(null,{creating:[Hm,se],reading:[zm,ln],updating:[Wm,se],deleting:[Vm,se]})})}function gt(e,n){return!(e.filter||e.algorithm||e.or)&&(n?e.justLimit:!e.replayFilter)}function ji(e,n){e.filter=Un(e.filter,n)}function Ei(e,n,r){var o=e.replayFilter;e.replayFilter=o?function(){return Un(o(),n())}:n,e.justLimit=r&&!o}function lc(e,n){e.isMatch=Un(e.isMatch,n)}function gr(e,n){if(e.isPrimKey)return n.primaryKey;var r=n.getIndexByKeyPath(e.index);if(!r)throw new L.Schema("KeyPath "+e.index+" on object store "+n.name+" is not indexed");return r}function Da(e,n,r){var o=gr(e,n.schema);return n.openCursor({trans:r,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:o,range:e.range}})}function dr(e,n,r,o){var a=e.replayFilter?Un(e.filter,e.replayFilter()):e.filter;if(e.or){var s={},m=function(h,g,d){if(!a||a(g,d,function(x){return g.stop(x)},function(x){return g.fail(x)})){var v=g.primaryKey,w=""+v;w==="[object ArrayBuffer]"&&(w=""+new Uint8Array(v)),R(s,w)||(s[w]=!0,n(h,g,d))}};return Promise.all([e.or._iterate(m,r),Fa(Da(e,o,r),e.algorithm,m,!e.keysOnly&&e.valueMapper)])}else return Fa(Da(e,o,r),Un(e.algorithm,a),n,!e.keysOnly&&e.valueMapper)}function Fa(e,n,r,o){var a=o?function(m,h,g){return r(o(m),h,g)}:r,s=ge(a);return e.then(function(m){if(m)return m.start(function(){var h=function(){return m.continue()};(!n||n(m,function(g){return h=g},function(g){m.stop(g),h=se},function(g){m.fail(g),h=se}))&&s(m.value,m,function(g){return h=g}),h()})})}var mc=function(){function e(){}return e.prototype._read=function(n,r){var o=this._ctx;return o.error?o.table._trans(null,ve.bind(null,o.error)):o.table._trans("readonly",n).then(r)},e.prototype._write=function(n){var r=this._ctx;return r.error?r.table._trans(null,ve.bind(null,r.error)):r.table._trans("readwrite",n,"locked")},e.prototype._addAlgorithm=function(n){var r=this._ctx;r.algorithm=Un(r.algorithm,n)},e.prototype._iterate=function(n,r){return dr(this._ctx,n,r,this._ctx.table.core)},e.prototype.clone=function(n){var r=Object.create(this.constructor.prototype),o=Object.create(this._ctx);return n&&b(o,n),r._ctx=o,r},e.prototype.raw=function(){return this._ctx.valueMapper=null,this},e.prototype.each=function(n){var r=this._ctx;return this._read(function(o){return dr(r,n,o,r.table.core)})},e.prototype.count=function(n){var r=this;return this._read(function(o){var a=r._ctx,s=a.table.core;if(gt(a,!0))return s.count({trans:o,query:{index:gr(a,s.schema),range:a.range}}).then(function(h){return Math.min(h,a.limit)});var m=0;return dr(a,function(){return++m,!1},o,s).then(function(){return m})}).then(n)},e.prototype.sortBy=function(n,r){var o=n.split(".").reverse(),a=o[0],s=o.length-1;function m(d,v){return v?m(d[o[v]],v-1):d[a]}var h=this._ctx.dir==="next"?1:-1;function g(d,v){var w=m(d,s),x=m(v,s);return ie(w,x)*h}return this.toArray(function(d){return d.slice().sort(g)}).then(r)},e.prototype.toArray=function(n){var r=this;return this._read(function(o){var a=r._ctx;if(gt(a,!0)&&a.limit>0){var s=a.valueMapper,m=gr(a,a.table.core.schema);return a.table.core.query({trans:o,limit:a.limit,values:!0,direction:a.dir==="prev"?"prev":void 0,query:{index:m,range:a.range}}).then(function(g){var d=g.result;return s?d.map(s):d})}else{var h=[];return dr(a,function(g){return h.push(g)},o,a.table.core).then(function(){return h})}},n)},e.prototype.offset=function(n){var r=this._ctx;return n<=0?this:(r.offset+=n,gt(r)?Ei(r,function(){var o=n;return function(a,s){return o===0?!0:o===1?(--o,!1):(s(function(){a.advance(o),o=0}),!1)}}):Ei(r,function(){var o=n;return function(){return--o<0}}),this)},e.prototype.limit=function(n){return this._ctx.limit=Math.min(this._ctx.limit,n),Ei(this._ctx,function(){var r=n;return function(o,a,s){return--r<=0&&a(s),r>=0}},!0),this},e.prototype.until=function(n,r){return ji(this._ctx,function(o,a,s){return n(o.value)?(a(s),r):!0}),this},e.prototype.first=function(n){return this.limit(1).toArray(function(r){return r[0]}).then(n)},e.prototype.last=function(n){return this.reverse().first(n)},e.prototype.filter=function(n){return ji(this._ctx,function(r){return n(r.value)}),lc(this._ctx,n),this},e.prototype.and=function(n){return this.filter(n)},e.prototype.or=function(n){return new this.db.WhereClause(this._ctx.table,n,this)},e.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},e.prototype.desc=function(){return this.reverse()},e.prototype.eachKey=function(n){var r=this._ctx;return r.keysOnly=!r.isMatch,this.each(function(o,a){n(a.key,a)})},e.prototype.eachUniqueKey=function(n){return this._ctx.unique="unique",this.eachKey(n)},e.prototype.eachPrimaryKey=function(n){var r=this._ctx;return r.keysOnly=!r.isMatch,this.each(function(o,a){n(a.primaryKey,a)})},e.prototype.keys=function(n){var r=this._ctx;r.keysOnly=!r.isMatch;var o=[];return this.each(function(a,s){o.push(s.key)}).then(function(){return o}).then(n)},e.prototype.primaryKeys=function(n){var r=this._ctx;if(gt(r,!0)&&r.limit>0)return this._read(function(a){var s=gr(r,r.table.core.schema);return r.table.core.query({trans:a,values:!1,limit:r.limit,direction:r.dir==="prev"?"prev":void 0,query:{index:s,range:r.range}})}).then(function(a){var s=a.result;return s}).then(n);r.keysOnly=!r.isMatch;var o=[];return this.each(function(a,s){o.push(s.primaryKey)}).then(function(){return o}).then(n)},e.prototype.uniqueKeys=function(n){return this._ctx.unique="unique",this.keys(n)},e.prototype.firstKey=function(n){return this.limit(1).keys(function(r){return r[0]}).then(n)},e.prototype.lastKey=function(n){return this.reverse().firstKey(n)},e.prototype.distinct=function(){var n=this._ctx,r=n.index&&n.table.schema.idxByName[n.index];if(!r||!r.multi)return this;var o={};return ji(this._ctx,function(a){var s=a.primaryKey.toString(),m=R(o,s);return o[s]=!0,!m}),this},e.prototype.modify=function(n){var r=this,o=this._ctx;return this._write(function(a){var s;typeof n=="function"?s=n:s=function(_){return Oa(_,n)};var m=o.table.core,h=m.schema.primaryKey,g=h.outbound,d=h.extractKey,v=200,w=r.db._options.modifyChunkSize;w&&(typeof w=="object"?v=w[m.name]||w["*"]||200:v=w);var x=[],j=0,y=[],k=function(_,A){var E=A.failures,$=A.numFailures;j+=_-$;for(var T=0,F=p(E);T<F.length;T++){var N=F[T];x.push(E[N])}},S=n===Ma;return r.clone().primaryKeys().then(function(_){var A=gt(o)&&o.limit===1/0&&(typeof n!="function"||S)&&{index:o.index,range:o.range},E=function($){var T=Math.min(v,_.length-$),F=_.slice($,$+T);return(S?Promise.resolve([]):m.getMany({trans:a,keys:F,cache:"immutable"})).then(function(N){var D=[],K=[],re=g?[]:null,H=S?F:[];if(!S)for(var q=0;q<T;++q){var Z=N[q],G={value:be(Z),primKey:_[$+q]};s.call(G,G.value,G)!==!1&&(G.value==null?H.push(_[$+q]):!g&&ie(d(Z),d(G.value))!==0?(H.push(_[$+q]),D.push(G.value)):(K.push(G.value),g&&re.push(_[$+q])))}return Promise.resolve(D.length>0&&m.mutate({trans:a,type:"add",values:D}).then(function(he){for(var V in he.failures)H.splice(parseInt(V),1);k(D.length,he)})).then(function(){return(K.length>0||A&&typeof n=="object")&&m.mutate({trans:a,type:"put",keys:re,values:K,criteria:A,changeSpec:typeof n!="function"&&n,isAdditionalChunk:$>0}).then(function(he){return k(K.length,he)})}).then(function(){return(H.length>0||A&&S)&&m.mutate({trans:a,type:"delete",keys:H,criteria:A,isAdditionalChunk:$>0}).then(function(he){return hr(o.table,H,he)}).then(function(he){return k(H.length,he)})}).then(function(){return _.length>$+T&&E($+v)})})};return E(0).then(function(){if(x.length>0)throw new gn("Error modifying one or more objects",x,j,y);return _.length})})})},e.prototype.delete=function(){var n=this._ctx,r=n.range;return gt(n)&&!n.table.schema.yProps&&(n.isPrimKey||r.type===3)?this._write(function(o){var a=n.table.core.schema.primaryKey,s=r;return n.table.core.count({trans:o,query:{index:a,range:s}}).then(function(m){return n.table.core.mutate({trans:o,type:"deleteRange",range:s}).then(function(h){var g=h.failures,d=h.numFailures;if(d)throw new gn("Could not delete some values",Object.keys(g).map(function(v){return g[v]}),m-d);return m-d})})}):this.modify(Ma)},e}(),Ma=function(e,n){return n.value=null};function cc(e){return Pt(mc.prototype,function(r,o){this.db=e;var a=Ca,s=null;if(o)try{a=o()}catch(d){s=d}var m=r._ctx,h=m.table,g=h.hook.reading.fire;this._ctx={table:h,index:m.index,isPrimKey:!m.index||h.schema.primKey.keyPath&&m.index===h.schema.primKey.name,range:a,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:s,or:m.or,valueMapper:g!==ln?g:null}})}function hc(e,n){return e<n?-1:e===n?0:1}function gc(e,n){return e>n?-1:e===n?0:1}function Ve(e,n,r){var o=e instanceof Ka?new e.Collection(e):e;return o._ctx.error=r?new r(n):new TypeError(n),o}function dt(e){var n=new e.Collection(e,function(){return Ra("")});return n._addAlgorithm(function(){return!1}),n}function dc(e){return e==="next"?function(n){return n.toUpperCase()}:function(n){return n.toLowerCase()}}function fc(e){return e==="next"?function(n){return n.toLowerCase()}:function(n){return n.toUpperCase()}}function pc(e,n,r,o,a,s){for(var m=Math.min(e.length,o.length),h=-1,g=0;g<m;++g){var d=n[g];if(d!==o[g])return a(e[g],r[g])<0?e.substr(0,g)+r[g]+r.substr(g+1):a(e[g],o[g])<0?e.substr(0,g)+o[g]+r.substr(g+1):h>=0?e.substr(0,h)+n[h]+r.substr(h+1):null;a(e[g],d)<0&&(h=g)}return m<o.length&&s==="next"?e+r.substr(e.length):m<e.length&&s==="prev"?e.substr(0,r.length):h<0?null:e.substr(0,h)+o[h]+r.substr(h+1)}function fr(e,n,r,o){var a,s,m,h,g,d,v,w=r.length;if(!r.every(function(k){return typeof k=="string"}))return Ve(e,ja);function x(k){a=dc(k),s=fc(k),m=k==="next"?hc:gc;var S=r.map(function(_){return{lower:s(_),upper:a(_)}}).sort(function(_,A){return m(_.lower,A.lower)});h=S.map(function(_){return _.upper}),g=S.map(function(_){return _.lower}),d=k,v=k==="next"?"":o}x("next");var j=new e.Collection(e,function(){return jn(h[0],g[w-1]+o)});j._ondirectionchange=function(k){x(k)};var y=0;return j._addAlgorithm(function(k,S,_){var A=k.key;if(typeof A!="string")return!1;var E=s(A);if(n(E,g,y))return!0;for(var $=null,T=y;T<w;++T){var F=pc(A,E,h[T],g[T],m,d);F===null&&$===null?y=T+1:($===null||m($,F)>0)&&($=F)}return S($!==null?function(){k.continue($+v)}:_),!1}),j}function jn(e,n,r,o){return{type:2,lower:e,upper:n,lowerOpen:r,upperOpen:o}}function Ra(e){return{type:1,lower:e,upper:e}}var Ka=function(){function e(){}return Object.defineProperty(e.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),e.prototype.between=function(n,r,o,a){o=o!==!1,a=a===!0;try{return this._cmp(n,r)>0||this._cmp(n,r)===0&&(o||a)&&!(o&&a)?dt(this):new this.Collection(this,function(){return jn(n,r,!o,!a)})}catch{return Ve(this,fn)}},e.prototype.equals=function(n){return n==null?Ve(this,fn):new this.Collection(this,function(){return Ra(n)})},e.prototype.above=function(n){return n==null?Ve(this,fn):new this.Collection(this,function(){return jn(n,void 0,!0)})},e.prototype.aboveOrEqual=function(n){return n==null?Ve(this,fn):new this.Collection(this,function(){return jn(n,void 0,!1)})},e.prototype.below=function(n){return n==null?Ve(this,fn):new this.Collection(this,function(){return jn(void 0,n,!1,!0)})},e.prototype.belowOrEqual=function(n){return n==null?Ve(this,fn):new this.Collection(this,function(){return jn(void 0,n)})},e.prototype.startsWith=function(n){return typeof n!="string"?Ve(this,ja):this.between(n,n+Zn,!0,!0)},e.prototype.startsWithIgnoreCase=function(n){return n===""?this.startsWith(n):fr(this,function(r,o){return r.indexOf(o[0])===0},[n],Zn)},e.prototype.equalsIgnoreCase=function(n){return fr(this,function(r,o){return r===o[0]},[n],"")},e.prototype.anyOfIgnoreCase=function(){var n=de.apply(Ze,arguments);return n.length===0?dt(this):fr(this,function(r,o){return o.indexOf(r)!==-1},n,"")},e.prototype.startsWithAnyOfIgnoreCase=function(){var n=de.apply(Ze,arguments);return n.length===0?dt(this):fr(this,function(r,o){return o.some(function(a){return r.indexOf(a)===0})},n,Zn)},e.prototype.anyOf=function(){var n=this,r=de.apply(Ze,arguments),o=this._cmp;try{r.sort(o)}catch{return Ve(this,fn)}if(r.length===0)return dt(this);var a=new this.Collection(this,function(){return jn(r[0],r[r.length-1])});a._ondirectionchange=function(m){o=m==="next"?n._ascending:n._descending,r.sort(o)};var s=0;return a._addAlgorithm(function(m,h,g){for(var d=m.key;o(d,r[s])>0;)if(++s,s===r.length)return h(g),!1;return o(d,r[s])===0?!0:(h(function(){m.continue(r[s])}),!1)}),a},e.prototype.notEqual=function(n){return this.inAnyRange([[Si,n],[n,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},e.prototype.noneOf=function(){var n=de.apply(Ze,arguments);if(n.length===0)return new this.Collection(this);try{n.sort(this._ascending)}catch{return Ve(this,fn)}var r=n.reduce(function(o,a){return o?o.concat([[o[o.length-1][1],a]]):[[Si,a]]},null);return r.push([n[n.length-1],this.db._maxKey]),this.inAnyRange(r,{includeLowers:!1,includeUppers:!1})},e.prototype.inAnyRange=function(n,r){var o=this,a=this._cmp,s=this._ascending,m=this._descending,h=this._min,g=this._max;if(n.length===0)return dt(this);if(!n.every(function(T){return T[0]!==void 0&&T[1]!==void 0&&s(T[0],T[1])<=0}))return Ve(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",L.InvalidArgument);var d=!r||r.includeLowers!==!1,v=r&&r.includeUppers===!0;function w(T,F){for(var N=0,D=T.length;N<D;++N){var K=T[N];if(a(F[0],K[1])<0&&a(F[1],K[0])>0){K[0]=h(K[0],F[0]),K[1]=g(K[1],F[1]);break}}return N===D&&T.push(F),T}var x=s;function j(T,F){return x(T[0],F[0])}var y;try{y=n.reduce(w,[]),y.sort(j)}catch{return Ve(this,fn)}var k=0,S=v?function(T){return s(T,y[k][1])>0}:function(T){return s(T,y[k][1])>=0},_=d?function(T){return m(T,y[k][0])>0}:function(T){return m(T,y[k][0])>=0};function A(T){return!S(T)&&!_(T)}var E=S,$=new this.Collection(this,function(){return jn(y[0][0],y[y.length-1][1],!d,!v)});return $._ondirectionchange=function(T){T==="next"?(E=S,x=s):(E=_,x=m),y.sort(j)},$._addAlgorithm(function(T,F,N){for(var D=T.key;E(D);)if(++k,k===y.length)return F(N),!1;return A(D)?!0:(o._cmp(D,y[k][1])===0||o._cmp(D,y[k][0])===0||F(function(){x===s?T.continue(y[k][0]):T.continue(y[k][1])}),!1)}),$},e.prototype.startsWithAnyOf=function(){var n=de.apply(Ze,arguments);return n.every(function(r){return typeof r=="string"})?n.length===0?dt(this):this.inAnyRange(n.map(function(r){return[r,r+Zn]})):Ve(this,"startsWithAnyOf() only works with strings")},e}();function bc(e){return Pt(Ka.prototype,function(r,o,a){if(this.db=e,this._ctx={table:r,index:o===":id"?null:o,or:a},this._cmp=this._ascending=ie,this._descending=function(s,m){return ie(m,s)},this._max=function(s,m){return ie(s,m)>0?s:m},this._min=function(s,m){return ie(s,m)<0?s:m},this._IDBKeyRange=e._deps.IDBKeyRange,!this._IDBKeyRange)throw new L.MissingAPI})}function tn(e){return ge(function(n){return It(n),e(n.target.error),!1})}function It(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var pr="storagemutated",Ci="x-storagemutated-1",En=At(null,pr),vc=function(){function e(){}return e.prototype._lock=function(){return Y(!B.global),++this._reculock,this._reculock===1&&!B.global&&(B.lockOwnerFor=this),this},e.prototype._unlock=function(){if(Y(!B.global),--this._reculock===0)for(B.global||(B.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var n=this._blockedFuncs.shift();try{Wn(n[1],n[0])}catch{}}return this},e.prototype._locked=function(){return this._reculock&&B.lockOwnerFor!==this},e.prototype.create=function(n){var r=this;if(!this.mode)return this;var o=this.db.idbdb,a=this.db._state.dbOpenError;if(Y(!this.idbtrans),!n&&!o)switch(a&&a.name){case"DatabaseClosedError":throw new L.DatabaseClosed(a);case"MissingAPIError":throw new L.MissingAPI(a.message,a);default:throw new L.OpenFailed(a)}if(!this.active)throw new L.TransactionInactive;return Y(this._completion._state===null),n=this.idbtrans=n||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):o.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})),n.onerror=ge(function(s){It(s),r._reject(n.error)}),n.onabort=ge(function(s){It(s),r.active&&r._reject(new L.Abort(n.error)),r.active=!1,r.on("abort").fire(s)}),n.oncomplete=ge(function(){r.active=!1,r._resolve(),"mutatedParts"in n&&En.storagemutated.fire(n.mutatedParts)}),this},e.prototype._promise=function(n,r,o){var a=this;if(n==="readwrite"&&this.mode!=="readwrite")return ve(new L.ReadOnly("Transaction is readonly"));if(!this.active)return ve(new L.TransactionInactive);if(this._locked())return new M(function(m,h){a._blockedFuncs.push([function(){a._promise(n,r,o).then(m,h)},B])});if(o)return Sn(function(){var m=new M(function(h,g){a._lock();var d=r(h,g,a);d&&d.then&&d.then(h,g)});return m.finally(function(){return a._unlock()}),m._lib=!0,m});var s=new M(function(m,h){var g=r(m,h,a);g&&g.then&&g.then(m,h)});return s._lib=!0,s},e.prototype._root=function(){return this.parent?this.parent._root():this},e.prototype.waitFor=function(n){var r=this._root(),o=M.resolve(n);if(r._waitingFor)r._waitingFor=r._waitingFor.then(function(){return o});else{r._waitingFor=o,r._waitingQueue=[];var a=r.idbtrans.objectStore(r.storeNames[0]);(function m(){for(++r._spinCount;r._waitingQueue.length;)r._waitingQueue.shift()();r._waitingFor&&(a.get(-1/0).onsuccess=m)})()}var s=r._waitingFor;return new M(function(m,h){o.then(function(g){return r._waitingQueue.push(ge(m.bind(null,g)))},function(g){return r._waitingQueue.push(ge(h.bind(null,g)))}).finally(function(){r._waitingFor===s&&(r._waitingFor=null)})})},e.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new L.Abort))},e.prototype.table=function(n){var r=this._memoizedTables||(this._memoizedTables={});if(R(r,n))return r[n];var o=this.schema[n];if(!o)throw new L.NotFound("Table "+n+" not part of transaction");var a=new this.db.Table(n,o,this);return a.core=this.db.core.table(n),r[n]=a,a},e}();function yc(e){return Pt(vc.prototype,function(r,o,a,s,m){var h=this;r!=="readonly"&&o.forEach(function(g){var d,v=(d=a[g])===null||d===void 0?void 0:d.yProps;v&&(o=o.concat(v.map(function(w){return w.updatesTable})))}),this.db=e,this.mode=r,this.storeNames=o,this.schema=a,this.chromeTransactionDurability=s,this.idbtrans=null,this.on=At(this,"complete","error","abort"),this.parent=m||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new M(function(g,d){h._resolve=g,h._reject=d}),this._completion.then(function(){h.active=!1,h.on.complete.fire()},function(g){var d=h.active;return h.active=!1,h.on.error.fire(g),h.parent?h.parent._reject(g):d&&h.idbtrans&&h.idbtrans.abort(),ve(g)})})}function Ai(e,n,r,o,a,s,m,h){return{name:e,keyPath:n,unique:r,multi:o,auto:a,compound:s,src:(r&&!m?"&":"")+(o?"*":"")+(a?"++":"")+qa(n),type:h}}function qa(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Pi(e,n,r){return{name:e,primKey:n,indexes:r,mappedClass:null,idxByName:ce(r,function(o){return[o.name,o]})}}function kc(e){return e.length===1?e[0]:e}var Ot=function(e){try{return e.only([[]]),Ot=function(){return[[]]},[[]]}catch{return Ot=function(){return Zn},Zn}};function Ii(e){return e==null?function(){}:typeof e=="string"?wc(e):function(n){return te(n,e)}}function wc(e){var n=e.split(".");return n.length===1?function(r){return r[e]}:function(r){return te(r,e)}}function Ba(e){return[].slice.call(e)}var xc=0;function Nt(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function _c(e,n,r){function o(x,j){var y=Ba(x.objectStoreNames),k=y.length>0?j.objectStore(y[0]):{};return{schema:{name:x.name,tables:y.map(function(S){return j.objectStore(S)}).map(function(S){var _=S.keyPath,A=S.autoIncrement,E=f(_),$=_==null,T={},F={name:S.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:$,compound:E,keyPath:_,autoIncrement:A,unique:!0,extractKey:Ii(_)},indexes:Ba(S.indexNames).map(function(N){return S.index(N)}).map(function(N){var D=N.name,K=N.unique,re=N.multiEntry,H=N.keyPath,q=f(H),Z={name:D,compound:q,keyPath:H,unique:K,multiEntry:re,extractKey:Ii(H)};return T[Nt(H)]=Z,Z}),getIndexByKeyPath:function(N){return T[Nt(N)]}};return T[":id"]=F.primaryKey,_!=null&&(T[Nt(_)]=F.primaryKey),F})},hasGetAll:y.length>0&&"getAll"in k&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:"getAllRecords"in k}}function a(x){if(x.type===3)return null;if(x.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var j=x.lower,y=x.upper,k=x.lowerOpen,S=x.upperOpen,_=j===void 0?y===void 0?null:n.upperBound(y,!!S):y===void 0?n.lowerBound(j,!!k):n.bound(j,y,!!k,!!S);return _}function s(x){var j=x.name;function y(_){var A=_.trans,E=_.type,$=_.keys,T=_.values,F=_.range;return new Promise(function(N,D){N=ge(N);var K=A.objectStore(j),re=K.keyPath==null,H=E==="put"||E==="add";if(!H&&E!=="delete"&&E!=="deleteRange")throw new Error("Invalid operation type: "+E);var q=($||T||{length:1}).length;if($&&T&&$.length!==T.length)throw new Error("Given keys array must have same length as given values array.");if(q===0)return N({numFailures:0,failures:{},results:[],lastResult:void 0});var Z,G=[],he=[],V=0,_e=function(Ae){++V,It(Ae)};if(E==="deleteRange"){if(F.type===4)return N({numFailures:V,failures:he,results:[],lastResult:void 0});F.type===3?G.push(Z=K.clear()):G.push(Z=K.delete(a(F)))}else{var Ue=H?re?[T,$]:[T,null]:[$,null],qe=Ue[0],Qn=Ue[1];if(H)for(var Oe=0;Oe<q;++Oe)G.push(Z=Qn&&Qn[Oe]!==void 0?K[E](qe[Oe],Qn[Oe]):K[E](qe[Oe])),Z.onerror=_e;else for(var Oe=0;Oe<q;++Oe)G.push(Z=K[E](qe[Oe])),Z.onerror=_e}var Ge=function(Ae){var Xn=Ae.target.result;G.forEach(function(rn,Er){return rn.error!=null&&(he[Er]=rn.error)}),N({numFailures:V,failures:he,results:E==="delete"?$:G.map(function(rn){return rn.result}),lastResult:Xn})};Z.onerror=function(Ae){_e(Ae),Ge(Ae)},Z.onsuccess=Ge})}function k(_){var A=_.trans,E=_.values,$=_.query,T=_.reverse,F=_.unique;return new Promise(function(N,D){N=ge(N);var K=$.index,re=$.range,H=A.objectStore(j),q=K.isPrimaryKey?H:H.index(K.name),Z=T?F?"prevunique":"prev":F?"nextunique":"next",G=E||!("openKeyCursor"in q)?q.openCursor(a(re),Z):q.openKeyCursor(a(re),Z);G.onerror=tn(D),G.onsuccess=ge(function(he){var V=G.result;if(!V){N(null);return}V.___id=++xc,V.done=!1;var _e=V.continue.bind(V),Ue=V.continuePrimaryKey;Ue&&(Ue=Ue.bind(V));var qe=V.advance.bind(V),Qn=function(){throw new Error("Cursor not started")},Oe=function(){throw new Error("Cursor not stopped")};V.trans=A,V.stop=V.continue=V.continuePrimaryKey=V.advance=Qn,V.fail=ge(D),V.next=function(){var Ge=this,Ae=1;return this.start(function(){return Ae--?Ge.continue():Ge.stop()}).then(function(){return Ge})},V.start=function(Ge){var Ae=new Promise(function(rn,Er){rn=ge(rn),G.onerror=tn(Er),V.fail=Er,V.stop=function(ch){V.stop=V.continue=V.continuePrimaryKey=V.advance=Oe,rn(ch)}}),Xn=function(){if(G.result)try{Ge()}catch(rn){V.fail(rn)}else V.done=!0,V.start=function(){throw new Error("Cursor behind last entry")},V.stop()};return G.onsuccess=ge(function(rn){G.onsuccess=Xn,Xn()}),V.continue=_e,V.continuePrimaryKey=Ue,V.advance=qe,Xn(),Ae},N(V)},D)})}function S(_,A){return function(E){return new Promise(function($,T){var F;$=ge($);var N=E.trans,D=E.values,K=E.limit,re=E.query,H=(F=E.direction)!==null&&F!==void 0?F:"next",q=K===1/0?void 0:K,Z=re.index,G=re.range,he=N.objectStore(j),V=Z.isPrimaryKey?he:he.index(Z.name),_e=a(G);if(K===0)return $({result:[]});if(A){var Ue={query:_e,count:q,direction:H},qe=D?V.getAll(Ue):V.getAllKeys(Ue);qe.onsuccess=function(Ae){return $({result:Ae.target.result})},qe.onerror=tn(T)}else if(_&&H==="next"){var qe=D?V.getAll(_e,q):V.getAllKeys(_e,q);qe.onsuccess=function(Xn){return $({result:Xn.target.result})},qe.onerror=tn(T)}else{var Qn=0,Oe=D||!("openKeyCursor"in V)?V.openCursor(_e,H):V.openKeyCursor(_e,H),Ge=[];Oe.onsuccess=function(){var Ae=Oe.result;if(!Ae)return $({result:Ge});if(Ge.push(D?Ae.value:Ae.primaryKey),++Qn===K)return $({result:Ge});Ae.continue()},Oe.onerror=tn(T)}})}}return{name:j,schema:x,mutate:y,getMany:function(_){var A=_.trans,E=_.keys;return new Promise(function($,T){$=ge($);for(var F=A.objectStore(j),N=E.length,D=new Array(N),K=0,re=0,H,q=function(V){var _e=V.target;(D[_e._pos]=_e.result)!=null,++re===K&&$(D)},Z=tn(T),G=0;G<N;++G){var he=E[G];he!=null&&(H=F.get(E[G]),H._pos=G,H.onsuccess=q,H.onerror=Z,++K)}K===0&&$(D)})},get:function(_){var A=_.trans,E=_.key;return new Promise(function($,T){$=ge($);var F=A.objectStore(j),N=F.get(E);N.onsuccess=function(D){return $(D.target.result)},N.onerror=tn(T)})},query:S(g,d),openCursor:k,count:function(_){var A=_.query,E=_.trans,$=A.index,T=A.range;return new Promise(function(F,N){var D=E.objectStore(j),K=$.isPrimaryKey?D:D.index($.name),re=a(T),H=re?K.count(re):K.count();H.onsuccess=ge(function(q){return F(q.target.result)}),H.onerror=tn(N)})}}}var m=o(e,r),h=m.schema,g=m.hasGetAll,d=m.hasIdb3Features,v=h.tables.map(function(x){return s(x)}),w={};return v.forEach(function(x){return w[x.name]=x}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(x){var j=w[x];if(!j)throw new Error("Table '".concat(x,"' not found"));return w[x]},MIN_KEY:-1/0,MAX_KEY:Ot(n),schema:h}}function Sc(e,n){return n.reduce(function(r,o){var a=o.create;return i(i({},r),a(r))},e)}function $c(e,n,r,o){var a=r.IDBKeyRange;r.indexedDB;var s=Sc(_c(n,a,o),e.dbcore);return{dbcore:s}}function br(e,n){var r=n.db,o=$c(e._middlewares,r,e._deps,n);e.core=o.dbcore,e.tables.forEach(function(a){var s=a.name;e.core.schema.tables.some(function(m){return m.name===s})&&(a.core=e.core.table(s),e[s]instanceof e.Table&&(e[s].core=a.core))})}function vr(e,n,r,o){r.forEach(function(a){var s=o[a];n.forEach(function(m){var h=P(m,a);(!h||"value"in h&&h.value===void 0)&&(m===e.Transaction.prototype||m instanceof e.Transaction?X(m,a,{get:function(){return this.table(a)},set:function(g){oe(this,a,{value:g,writable:!0,configurable:!0,enumerable:!0})}}):m[a]=new e.Table(a,s))})})}function Oi(e,n){n.forEach(function(r){for(var o in r)r[o]instanceof e.Table&&delete r[o]})}function Tc(e,n){return e._cfg.version-n._cfg.version}function jc(e,n,r,o){var a=e._dbSchema;r.objectStoreNames.contains("$meta")&&!a.$meta&&(a.$meta=Pi("$meta",za("")[0],[]),e._storeNames.push("$meta"));var s=e._createTransaction("readwrite",e._storeNames,a);s.create(r),s._completion.catch(o);var m=s._reject.bind(s),h=B.transless||B;Sn(function(){if(B.trans=s,B.transless=h,n===0)p(a).forEach(function(g){Di(r,g,a[g].primKey,a[g].indexes)}),br(e,r),M.follow(function(){return e.on.populate.fire(s)}).catch(m);else return br(e,r),Cc(e,s,n).then(function(g){return Ac(e,g,s,r)}).catch(m)})}function Ec(e,n){La(e._dbSchema,n),n.db.version%10===0&&!n.objectStoreNames.contains("$meta")&&n.db.createObjectStore("$meta").add(Math.ceil(n.db.version/10-1),"version");var r=kr(e,e.idbdb,n);wr(e,e._dbSchema,n);for(var o=Ni(r,e._dbSchema),a=function(d){if(d.change.length||d.recreate)return console.warn("Unable to patch indexes of table ".concat(d.name," because it has changes on the type of index or primary key.")),{value:void 0};var v=n.objectStore(d.name);d.add.forEach(function(w){mn&&console.debug("Dexie upgrade patch: Creating missing index ".concat(d.name,".").concat(w.src)),yr(v,w)})},s=0,m=o.change;s<m.length;s++){var h=m[s],g=a(h);if(typeof g=="object")return g.value}}function Cc(e,n,r){return n.storeNames.includes("$meta")?n.table("$meta").get("version").then(function(o){return o!=null?o:r}):M.resolve(r)}function Ac(e,n,r,o){var a=[],s=e._versions,m=e._dbSchema=kr(e,e.idbdb,o),h=s.filter(function(d){return d._cfg.version>=n});if(h.length===0)return M.resolve();h.forEach(function(d){a.push(function(){var v=m,w=d._cfg.dbschema;wr(e,v,o),wr(e,w,o),m=e._dbSchema=w;var x=Ni(v,w);x.add.forEach(function(A){Di(o,A[0],A[1].primKey,A[1].indexes)}),x.change.forEach(function(A){if(A.recreate)throw new L.Upgrade("Not yet support for changing primary key");var E=o.objectStore(A.name);A.add.forEach(function($){return yr(E,$)}),A.change.forEach(function($){E.deleteIndex($.name),yr(E,$)}),A.del.forEach(function($){return E.deleteIndex($)})});var j=d._cfg.contentUpgrade;if(j&&d._cfg.version>n){br(e,o),r._memoizedTables={};var y=pe(w);x.del.forEach(function(A){y[A]=v[A]}),Oi(e,[e.Transaction.prototype]),vr(e,[e.Transaction.prototype],p(y),y),r.schema=y;var k=un(j);k&&ht();var S,_=M.follow(function(){if(S=j(r),S&&k){var A=$n.bind(null,null);S.then(A,A)}});return S&&typeof S.then=="function"?M.resolve(S):_.then(function(){return S})}}),a.push(function(v){var w=d._cfg.dbschema;Pc(w,v),Oi(e,[e.Transaction.prototype]),vr(e,[e.Transaction.prototype],e._storeNames,e._dbSchema),r.schema=e._dbSchema}),a.push(function(v){e.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(e.idbdb.version/10)===d._cfg.version?(e.idbdb.deleteObjectStore("$meta"),delete e._dbSchema.$meta,e._storeNames=e._storeNames.filter(function(w){return w!=="$meta"})):v.objectStore("$meta").put(d._cfg.version,"version"))})});function g(){return a.length?M.resolve(a.shift()(r.idbtrans)).then(g):M.resolve()}return g().then(function(){La(m,o)})}function Ni(e,n){var r={del:[],add:[],change:[]},o;for(o in e)n[o]||r.del.push(o);for(o in n){var a=e[o],s=n[o];if(!a)r.add.push([o,s]);else{var m={name:o,def:s,recreate:!1,del:[],add:[],change:[]};if(""+(a.primKey.keyPath||"")!=""+(s.primKey.keyPath||"")||a.primKey.auto!==s.primKey.auto)m.recreate=!0,r.change.push(m);else{var h=a.idxByName,g=s.idxByName,d=void 0;for(d in h)g[d]||m.del.push(d);for(d in g){var v=h[d],w=g[d];v?v.src!==w.src&&m.change.push(w):m.add.push(w)}(m.del.length>0||m.add.length>0||m.change.length>0)&&r.change.push(m)}}}return r}function Di(e,n,r,o){var a=e.db.createObjectStore(n,r.keyPath?{keyPath:r.keyPath,autoIncrement:r.auto}:{autoIncrement:r.auto});return o.forEach(function(s){return yr(a,s)}),a}function La(e,n){p(e).forEach(function(r){n.db.objectStoreNames.contains(r)||(mn&&console.debug("Dexie: Creating missing table",r),Di(n,r,e[r].primKey,e[r].indexes))})}function Pc(e,n){[].slice.call(n.db.objectStoreNames).forEach(function(r){return e[r]==null&&n.db.deleteObjectStore(r)})}function yr(e,n){e.createIndex(n.name,n.keyPath,{unique:n.unique,multiEntry:n.multi})}function kr(e,n,r){var o={},a=ue(n.objectStoreNames,0);return a.forEach(function(s){for(var m=r.objectStore(s),h=m.keyPath,g=Ai(qa(h),h||"",!0,!1,!!m.autoIncrement,h&&typeof h!="string",!0),d=[],v=0;v<m.indexNames.length;++v){var w=m.index(m.indexNames[v]);h=w.keyPath;var x=Ai(w.name,h,!!w.unique,!!w.multiEntry,!1,h&&typeof h!="string",!1);d.push(x)}o[s]=Pi(s,g,d)}),o}function Ic(e,n,r){e.verno=n.version/10;var o=e._dbSchema=kr(e,n,r);e._storeNames=ue(n.objectStoreNames,0),vr(e,[e._allTables],p(o),o)}function Oc(e,n){var r=kr(e,e.idbdb,n),o=Ni(r,e._dbSchema);return!(o.add.length||o.change.some(function(a){return a.add.length||a.change.length}))}function wr(e,n,r){for(var o=r.db.objectStoreNames,a=0;a<o.length;++a){var s=o[a],m=r.objectStore(s);e._hasGetAll="getAll"in m;for(var h=0;h<m.indexNames.length;++h){var g=m.indexNames[h],d=m.index(g).keyPath,v=typeof d=="string"?d:"["+ue(d).join("+")+"]";if(n[s]){var w=n[s].idxByName[v];w&&(w.name=g,delete n[s].idxByName[v],n[s].idxByName[g]=w)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&l.WorkerGlobalScope&&l instanceof l.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function za(e){return e.split(",").map(function(n,r){var o,a=n.split(":"),s=(o=a[1])===null||o===void 0?void 0:o.trim();n=a[0].trim();var m=n.replace(/([&*]|\+\+)/g,""),h=/^\[/.test(m)?m.match(/^\[(.*)\]$/)[1].split("+"):m;return Ai(m,h||null,/\&/.test(n),/\*/.test(n),/\+\+/.test(n),f(h),r===0,s)})}var Nc=function(){function e(){}return e.prototype._createTableSchema=function(n,r,o){return Pi(n,r,o)},e.prototype._parseIndexSyntax=function(n){return za(n)},e.prototype._parseStoresSpec=function(n,r){var o=this;p(n).forEach(function(a){if(n[a]!==null){var s=o._parseIndexSyntax(n[a]),m=s.shift();if(!m)throw new L.Schema("Invalid schema for table "+a+": "+n[a]);if(m.unique=!0,m.multi)throw new L.Schema("Primary key cannot be multiEntry*");s.forEach(function(g){if(g.auto)throw new L.Schema("Only primary key can be marked as autoIncrement (++)");if(!g.keyPath)throw new L.Schema("Index must have a name and cannot be an empty string")});var h=o._createTableSchema(a,m,s);r[a]=h}})},e.prototype.stores=function(n){var r=this.db;this._cfg.storesSource=this._cfg.storesSource?b(this._cfg.storesSource,n):n;var o=r._versions,a={},s={};return o.forEach(function(m){b(a,m._cfg.storesSource),s=m._cfg.dbschema={},m._parseStoresSpec(a,s)}),r._dbSchema=s,Oi(r,[r._allTables,r,r.Transaction.prototype]),vr(r,[r._allTables,r,r.Transaction.prototype,this._cfg.tables],p(s),s),r._storeNames=p(s),this},e.prototype.upgrade=function(n){return this._cfg.contentUpgrade=gi(this._cfg.contentUpgrade||se,n),this},e}();function Dc(e){return Pt(Nc.prototype,function(r){this.db=e,this._cfg={version:r,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}var Dt=Fc();function Fc(){if(typeof FinalizationRegistry<"u"&&typeof WeakRef<"u"){var e=new Set,n=new FinalizationRegistry(function(m){e.delete(m)}),r=function(){return Array.from(e).map(function(m){return m.deref()}).filter(function(m){return m!==void 0})},o=function(m){var h=new WeakRef(m._novip);if(e.add(h),n.register(m._novip,h,h),e.size>m._options.maxConnections){var g=e.values().next().value;e.delete(g),n.unregister(g)}},a=function(m){if(m)for(var h=e.values(),g=h.next();!g.done;){var d=g.value;if(d.deref()===m._novip){e.delete(d),n.unregister(d);return}g=h.next()}};return{toArray:r,add:o,remove:a}}else{var s=[],r=function(){return s},o=function(d){s.push(d._novip)},a=function(d){if(d){var v=s.indexOf(d._novip);v!==-1&&s.splice(v,1)}};return{toArray:r,add:o,remove:a}}}function Fi(e,n){var r=e._dbNamesDB;return r||(r=e._dbNamesDB=new pn(mr,{addons:[],indexedDB:e,IDBKeyRange:n}),r.version(1).stores({dbnames:"name"})),r.table("dbnames")}function Mi(e){return e&&typeof e.databases=="function"}function Mc(e){var n=e.indexedDB,r=e.IDBKeyRange;return Mi(n)?Promise.resolve(n.databases()).then(function(o){return o.map(function(a){return a.name}).filter(function(a){return a!==mr})}):Fi(n,r).toCollection().primaryKeys()}function Rc(e,n){var r=e.indexedDB,o=e.IDBKeyRange;!Mi(r)&&n!==mr&&Fi(r,o).put({name:n}).catch(se)}function Kc(e,n){var r=e.indexedDB,o=e.IDBKeyRange;!Mi(r)&&n!==mr&&Fi(r,o).delete(n).catch(se)}function Ri(e){return Sn(function(){return B.letThrough=!0,e()})}function qc(){var e=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!e||!indexedDB.databases)return Promise.resolve();var n;return new Promise(function(r){var o=function(){return indexedDB.databases().finally(r)};n=setInterval(o,100),o()}).finally(function(){return clearInterval(n)})}var Ki;function qi(e){return!("from"in e)}var Ie=function(e,n){if(this)b(this,arguments.length?{d:1,from:e,to:arguments.length>1?n:e}:{d:0});else{var r=new Ie;return e&&"d"in e&&b(r,e),r}};O(Ie.prototype,(Ki={add:function(e){return Mt(this,e),this},addKey:function(e){return Ft(this,e,e),this},addKeys:function(e){var n=this;return e.forEach(function(r){return Ft(n,r,r)}),this},hasKey:function(e){var n=xr(this).next(e).value;return n&&ie(n.from,e)<=0&&ie(n.to,e)>=0}},Ki[xn]=function(){return xr(this)},Ki));function Ft(e,n,r){var o=ie(n,r);if(!isNaN(o)){if(o>0)throw RangeError();if(qi(e))return b(e,{from:n,to:r,d:1});var a=e.l,s=e.r;if(ie(r,e.from)<0)return a?Ft(a,n,r):e.l={from:n,to:r,d:1,l:null,r:null},Va(e);if(ie(n,e.to)>0)return s?Ft(s,n,r):e.r={from:n,to:r,d:1,l:null,r:null},Va(e);ie(n,e.from)<0&&(e.from=n,e.l=null,e.d=s?s.d+1:1),ie(r,e.to)>0&&(e.to=r,e.r=null,e.d=e.l?e.l.d+1:1);var m=!e.r;a&&!e.l&&Mt(e,a),s&&m&&Mt(e,s)}}function Mt(e,n){function r(o,a){var s=a.from,m=a.to,h=a.l,g=a.r;Ft(o,s,m),h&&r(o,h),g&&r(o,g)}qi(n)||r(e,n)}function Ha(e,n){var r=xr(n),o=r.next();if(o.done)return!1;for(var a=o.value,s=xr(e),m=s.next(a.from),h=m.value;!o.done&&!m.done;){if(ie(h.from,a.to)<=0&&ie(h.to,a.from)>=0)return!0;ie(a.from,h.from)<0?a=(o=r.next(h.from)).value:h=(m=s.next(a.from)).value}return!1}function xr(e){var n=qi(e)?null:{s:0,n:e};return{next:function(r){for(var o=arguments.length>0;n;)switch(n.s){case 0:if(n.s=1,o)for(;n.n.l&&ie(r,n.n.from)<0;)n={up:n,n:n.n.l,s:1};else for(;n.n.l;)n={up:n,n:n.n.l,s:1};case 1:if(n.s=2,!o||ie(r,n.n.to)<=0)return{value:n.n,done:!1};case 2:if(n.n.r){n.s=3,n={up:n,n:n.n.r,s:0};continue}case 3:n=n.up}return{done:!0}}}}function Va(e){var n,r,o=(((n=e.r)===null||n===void 0?void 0:n.d)||0)-(((r=e.l)===null||r===void 0?void 0:r.d)||0),a=o>1?"r":o<-1?"l":"";if(a){var s=a==="r"?"l":"r",m=i({},e),h=e[a];e.from=h.from,e.to=h.to,e[a]=h[a],m[a]=h[s],e[s]=m,m.d=Wa(m)}e.d=Wa(e)}function Wa(e){var n=e.r,r=e.l;return(n?r?Math.max(n.d,r.d):n.d:r?r.d:0)+1}function _r(e,n){return p(n).forEach(function(r){e[r]?Mt(e[r],n[r]):e[r]=$e(n[r])}),e}function Bi(e,n){return e.all||n.all||Object.keys(e).some(function(r){return n[r]&&Ha(n[r],e[r])})}var Gn={},Li={},zi=!1;function Sr(e,n){_r(Li,e),zi||(zi=!0,setTimeout(function(){zi=!1;var r=Li;Li={},Hi(r,!1)},0))}function Hi(e,n){n===void 0&&(n=!1);var r=new Set;if(e.all)for(var o=0,a=Object.values(Gn);o<a.length;o++){var s=a[o];Za(s,e,r,n)}else for(var m in e){var h=/^idb\:\/\/(.*)\/(.*)\//.exec(m);if(h){var g=h[1],d=h[2],s=Gn["idb://".concat(g,"/").concat(d)];s&&Za(s,e,r,n)}}r.forEach(function(v){return v()})}function Za(e,n,r,o){for(var a=[],s=0,m=Object.entries(e.queries.query);s<m.length;s++){for(var h=m[s],g=h[0],d=h[1],v=[],w=0,x=d;w<x.length;w++){var j=x[w];Bi(n,j.obsSet)?j.subscribers.forEach(function(_){return r.add(_)}):o&&v.push(j)}o&&a.push([g,v])}if(o)for(var y=0,k=a;y<k.length;y++){var S=k[y],g=S[0],v=S[1];e.queries.query[g]=v}}function Bc(e){var n=e._state,r=e._deps.indexedDB;if(n.isBeingOpened||e.idbdb)return n.dbReadyPromise.then(function(){return n.dbOpenError?ve(n.dbOpenError):e});n.isBeingOpened=!0,n.dbOpenError=null,n.openComplete=!1;var o=n.openCanceller,a=Math.round(e.verno*10),s=!1;function m(){if(n.openCanceller!==o)throw new L.DatabaseClosed("db.open() was cancelled")}var h=n.dbReadyResolve,g=null,d=!1,v=function(){return new M(function(x,j){if(m(),!r)throw new L.MissingAPI;var y=e.name,k=n.autoSchema||!a?r.open(y):r.open(y,a);if(!k)throw new L.MissingAPI;k.onerror=tn(j),k.onblocked=ge(e._fireOnBlocked),k.onupgradeneeded=ge(function(S){if(g=k.transaction,n.autoSchema&&!e._options.allowEmptyDB){k.onerror=It,g.abort(),k.result.close();var _=r.deleteDatabase(y);_.onsuccess=_.onerror=ge(function(){j(new L.NoSuchDatabase("Database ".concat(y," doesnt exist")))})}else{g.onerror=tn(j);var A=S.oldVersion>Math.pow(2,62)?0:S.oldVersion;d=A<1,e.idbdb=k.result,s&&Ec(e,g),jc(e,A/10,g,j)}},j),k.onsuccess=ge(function(){g=null;var S=e.idbdb=k.result,_=ue(S.objectStoreNames);if(_.length>0)try{var A=S.transaction(kc(_),"readonly");if(n.autoSchema)Ic(e,S,A);else if(wr(e,e._dbSchema,A),!Oc(e,A)&&!s)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),S.close(),a=S.version+1,s=!0,x(v());br(e,A)}catch{}Dt.add(e),S.onversionchange=ge(function(E){n.vcFired=!0,e.on("versionchange").fire(E)}),S.onclose=ge(function(){e.close({disableAutoOpen:!1})}),d&&Rc(e._deps,y),x()},j)}).catch(function(x){switch(x==null?void 0:x.name){case"UnknownError":if(n.PR1398_maxLoop>0)return n.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),v();break;case"VersionError":if(a>0)return a=0,v();break}return M.reject(x)})},w=typeof navigator<"u"&&!!r&&r===l.indexedDB;return M.race([o,(w?qc():M.resolve()).then(v)]).then(function(){return m(),n.onReadyBeingFired=[],M.resolve(Ri(function(){return e.on.ready.fire(e.vip)})).then(function x(){if(n.onReadyBeingFired.length>0){var j=n.onReadyBeingFired.reduce(gi,se);return n.onReadyBeingFired=[],M.resolve(Ri(function(){return j(e.vip)})).then(x)}})}).finally(function(){n.openCanceller===o&&(n.onReadyBeingFired=null,n.isBeingOpened=!1)}).catch(function(x){n.dbOpenError=x;try{g&&g.abort()}catch{}return o===n.openCanceller&&e._close(),ve(x)}).finally(function(){n.openComplete=!0,h()}).then(function(){if(d){var x={};e.tables.forEach(function(j){j.schema.indexes.forEach(function(y){y.name&&(x["idb://".concat(e.name,"/").concat(j.name,"/").concat(y.name)]=new Ie(-1/0,[[[]]]))}),x["idb://".concat(e.name,"/").concat(j.name,"/")]=x["idb://".concat(e.name,"/").concat(j.name,"/:dels")]=new Ie(-1/0,[[[]]])}),En(pr).fire(x),Hi(x,!0)}return e})}function Vi(e){var n=function(m){return e.next(m)},r=function(m){return e.throw(m)},o=s(n),a=s(r);function s(m){return function(h){var g=m(h),d=g.value;return g.done?d:!d||typeof d.then!="function"?f(d)?Promise.all(d).then(o,a):o(d):d.then(o,a)}}return s(n)()}function Lc(e,n,r){var o=arguments.length;if(o<2)throw new L.InvalidArgument("Too few arguments");for(var a=new Array(o-1);--o;)a[o-1]=arguments[o];r=a.pop();var s=Be(a);return[e,s,r]}function Ua(e,n,r,o,a){return M.resolve().then(function(){var s=B.transless||B,m=e._createTransaction(n,r,e._dbSchema,o);m.explicit=!0;var h={trans:m,transless:s};if(o)m.idbtrans=o.idbtrans;else try{m.create(),m.idbtrans._explicit=!0,e._state.PR1398_maxLoop=3}catch(w){return w.name===lt.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e.close({disableAutoOpen:!1}),e.open().then(function(){return Ua(e,n,r,null,a)})):ve(w)}var g=un(a);g&&ht();var d,v=M.follow(function(){if(d=a.call(m,m),d)if(g){var w=$n.bind(null,null);d.then(w,w)}else typeof d.next=="function"&&typeof d.throw=="function"&&(d=Vi(d))},h);return(d&&typeof d.then=="function"?M.resolve(d).then(function(w){return m.active?w:ve(new L.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):v.then(function(){return d})).then(function(w){return o&&m._resolve(),m._completion.then(function(){return w})}).catch(function(w){return m._reject(w),ve(w)})})}function $r(e,n,r){for(var o=f(e)?e.slice():[e],a=0;a<r;++a)o.push(n);return o}function zc(e){return i(i({},e),{table:function(n){var r=e.table(n),o=r.schema,a=Object.create(null),s=[];function m(k,S,_){var A=Nt(k),E=a[A]=a[A]||[],$=k==null?0:typeof k=="string"?1:k.length,T=S>0,F=i(i({},_),{name:T?"".concat(A,"(virtual-from:").concat(_.name,")"):_.name,lowLevelIndex:_,isVirtual:T,keyTail:S,keyLength:$,extractKey:Ii(k),unique:!T&&_.unique});if(E.push(F),F.isPrimaryKey||s.push(F),$>1){var N=$===2?k[0]:k.slice(0,$-1);m(N,S+1,_)}return E.sort(function(D,K){return D.keyTail-K.keyTail}),F}var h=m(o.primaryKey.keyPath,0,o.primaryKey);a[":id"]=[h];for(var g=0,d=o.indexes;g<d.length;g++){var v=d[g];m(v.keyPath,0,v)}function w(k){var S=a[Nt(k)];return S&&S[0]}function x(k,S){return{type:k.type===1?2:k.type,lower:$r(k.lower,k.lowerOpen?e.MAX_KEY:e.MIN_KEY,S),lowerOpen:!0,upper:$r(k.upper,k.upperOpen?e.MIN_KEY:e.MAX_KEY,S),upperOpen:!0}}function j(k){var S=k.query.index;return S.isVirtual?i(i({},k),{query:{index:S.lowLevelIndex,range:x(k.query.range,S.keyTail)}}):k}var y=i(i({},r),{schema:i(i({},o),{primaryKey:h,indexes:s,getIndexByKeyPath:w}),count:function(k){return r.count(j(k))},query:function(k){return r.query(j(k))},openCursor:function(k){var S=k.query.index,_=S.keyTail,A=S.isVirtual,E=S.keyLength;if(!A)return r.openCursor(k);function $(T){function F(D){D!=null?T.continue($r(D,k.reverse?e.MAX_KEY:e.MIN_KEY,_)):k.unique?T.continue(T.key.slice(0,E).concat(k.reverse?e.MIN_KEY:e.MAX_KEY,_)):T.continue()}var N=Object.create(T,{continue:{value:F},continuePrimaryKey:{value:function(D,K){T.continuePrimaryKey($r(D,e.MAX_KEY,_),K)}},primaryKey:{get:function(){return T.primaryKey}},key:{get:function(){var D=T.key;return E===1?D[0]:D.slice(0,E)}},value:{get:function(){return T.value}}});return N}return r.openCursor(j(k)).then(function(T){return T&&$(T)})}});return y}})}var Hc={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:zc};function Wi(e,n,r,o){return r=r||{},o=o||"",p(e).forEach(function(a){if(!R(n,a))r[o+a]=void 0;else{var s=e[a],m=n[a];if(typeof s=="object"&&typeof m=="object"&&s&&m){var h=Je(s),g=Je(m);h!==g?r[o+a]=n[a]:h==="Object"?Wi(s,m,r,o+a+"."):s!==m&&(r[o+a]=n[a])}else s!==m&&(r[o+a]=n[a])}}),p(n).forEach(function(a){R(e,a)||(r[o+a]=n[a])}),r}function Zi(e,n){return n.type==="delete"?n.keys:n.keys||n.values.map(e.extractKey)}var Vc={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return i(i({},e),{table:function(n){var r=e.table(n),o=r.schema.primaryKey,a=i(i({},r),{mutate:function(s){var m=B.trans,h=m.table(n).hook,g=h.deleting,d=h.creating,v=h.updating;switch(s.type){case"add":if(d.fire===se)break;return m._promise("readwrite",function(){return w(s)},!0);case"put":if(d.fire===se&&v.fire===se)break;return m._promise("readwrite",function(){return w(s)},!0);case"delete":if(g.fire===se)break;return m._promise("readwrite",function(){return w(s)},!0);case"deleteRange":if(g.fire===se)break;return m._promise("readwrite",function(){return x(s)},!0)}return r.mutate(s);function w(y){var k=B.trans,S=y.keys||Zi(o,y);if(!S)throw new Error("Keys missing");return y=y.type==="add"||y.type==="put"?i(i({},y),{keys:S}):i({},y),y.type!=="delete"&&(y.values=u([],y.values,!0)),y.keys&&(y.keys=u([],y.keys,!0)),Wc(r,y,S).then(function(_){var A=S.map(function(E,$){var T=_[$],F={onerror:null,onsuccess:null};if(y.type==="delete")g.fire.call(F,E,T,k);else if(y.type==="add"||T===void 0){var N=d.fire.call(F,E,y.values[$],k);E==null&&N!=null&&(E=N,y.keys[$]=E,o.outbound||Q(y.values[$],o.keyPath,E))}else{var D=Wi(T,y.values[$]),K=v.fire.call(F,D,E,T,k);if(K){var re=y.values[$];Object.keys(K).forEach(function(H){R(re,H)?re[H]=K[H]:Q(re,H,K[H])})}}return F});return r.mutate(y).then(function(E){for(var $=E.failures,T=E.results,F=E.numFailures,N=E.lastResult,D=0;D<S.length;++D){var K=T?T[D]:S[D],re=A[D];K==null?re.onerror&&re.onerror($[D]):re.onsuccess&&re.onsuccess(y.type==="put"&&_[D]?y.values[D]:K)}return{failures:$,results:T,numFailures:F,lastResult:N}}).catch(function(E){return A.forEach(function($){return $.onerror&&$.onerror(E)}),Promise.reject(E)})})}function x(y){return j(y.trans,y.range,1e4)}function j(y,k,S){return r.query({trans:y,values:!1,query:{index:o,range:k},limit:S}).then(function(_){var A=_.result;return w({type:"delete",keys:A,trans:y}).then(function(E){return E.numFailures>0?Promise.reject(E.failures[0]):A.length<S?{failures:[],numFailures:0,lastResult:void 0}:j(y,i(i({},k),{lower:A[A.length-1],lowerOpen:!0}),S)})})}}});return a}})}};function Wc(e,n,r){return n.type==="add"?Promise.resolve([]):e.getMany({trans:n.trans,keys:r,cache:"immutable"})}function Ga(e,n,r){try{if(!n||n.keys.length<e.length)return null;for(var o=[],a=0,s=0;a<n.keys.length&&s<e.length;++a)ie(n.keys[a],e[s])===0&&(o.push(r?be(n.values[a]):n.values[a]),++s);return o.length===e.length?o:null}catch{return null}}var Zc={stack:"dbcore",level:-1,create:function(e){return{table:function(n){var r=e.table(n);return i(i({},r),{getMany:function(o){if(!o.cache)return r.getMany(o);var a=Ga(o.keys,o.trans._cache,o.cache==="clone");return a?M.resolve(a):r.getMany(o).then(function(s){return o.trans._cache={keys:o.keys,values:o.cache==="clone"?be(s):s},s})},mutate:function(o){return o.type!=="add"&&(o.trans._cache=null),r.mutate(o)}})}}}};function Ya(e,n){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!n.schema.primaryKey.outbound}function Qa(e,n){switch(e){case"query":return n.values&&!n.unique;case"get":return!1;case"getMany":return!1;case"count":return!1;case"openCursor":return!1}}var Uc={stack:"dbcore",level:0,name:"Observability",create:function(e){var n=e.schema.name,r=new Ie(e.MIN_KEY,e.MAX_KEY);return i(i({},e),{transaction:function(o,a,s){if(B.subscr&&a!=="readonly")throw new L.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(B.querier));return e.transaction(o,a,s)},table:function(o){var a=e.table(o),s=a.schema,m=s.primaryKey,h=s.indexes,g=m.extractKey,d=m.outbound,v=m.autoIncrement&&h.filter(function(y){return y.compound&&y.keyPath.includes(m.keyPath)}),w=i(i({},a),{mutate:function(y){var k,S,_=y.trans,A=y.mutatedParts||(y.mutatedParts={}),E=function(Z){var G="idb://".concat(n,"/").concat(o,"/").concat(Z);return A[G]||(A[G]=new Ie)},$=E(""),T=E(":dels"),F=y.type,N=y.type==="deleteRange"?[y.range]:y.type==="delete"?[y.keys]:y.values.length<50?[Zi(m,y).filter(function(Z){return Z!=null}),y.values]:[],D=N[0],K=N[1],re=y.trans._cache;if(f(D)){$.addKeys(D);var H=F==="delete"||D.length===K.length?Ga(D,re):null;H||T.addKeys(D),(H||K)&&Gc(E,s,H,K)}else if(D){var q={from:(k=D.lower)!==null&&k!==void 0?k:e.MIN_KEY,to:(S=D.upper)!==null&&S!==void 0?S:e.MAX_KEY};T.add(q),$.add(q)}else $.add(r),T.add(r),s.indexes.forEach(function(Z){return E(Z.name).add(r)});return a.mutate(y).then(function(Z){return D&&(y.type==="add"||y.type==="put")&&($.addKeys(Z.results),v&&v.forEach(function(G){for(var he=y.values.map(function(qe){return G.extractKey(qe)}),V=G.keyPath.findIndex(function(qe){return qe===m.keyPath}),_e=0,Ue=Z.results.length;_e<Ue;++_e)he[_e][V]=Z.results[_e];E(G.name).addKeys(he)})),_.mutatedParts=_r(_.mutatedParts||{},A),Z})}}),x=function(y){var k,S,_=y.query,A=_.index,E=_.range;return[A,new Ie((k=E.lower)!==null&&k!==void 0?k:e.MIN_KEY,(S=E.upper)!==null&&S!==void 0?S:e.MAX_KEY)]},j={get:function(y){return[m,new Ie(y.key)]},getMany:function(y){return[m,new Ie().addKeys(y.keys)]},count:x,query:x,openCursor:x};return p(j).forEach(function(y){w[y]=function(k){var S=B.subscr,_=!!S,A=Ya(B,a)&&Qa(y,k),E=A?k.obsSet={}:S;if(_){var $=function(H){var q="idb://".concat(n,"/").concat(o,"/").concat(H);return E[q]||(E[q]=new Ie)},T=$(""),F=$(":dels"),N=j[y](k),D=N[0],K=N[1];if(y==="query"&&D.isPrimaryKey&&!k.values?F.add(K):$(D.name||"").add(K),!D.isPrimaryKey)if(y==="count")F.add(r);else{var re=y==="query"&&d&&k.values&&a.query(i(i({},k),{values:!1}));return a[y].apply(this,arguments).then(function(H){if(y==="query"){if(d&&k.values)return re.then(function(he){var V=he.result;return T.addKeys(V),H});var q=k.values?H.result.map(g):H.result;k.values?T.addKeys(q):F.addKeys(q)}else if(y==="openCursor"){var Z=H,G=k.values;return Z&&Object.create(Z,{key:{get:function(){return F.addKey(Z.primaryKey),Z.key}},primaryKey:{get:function(){var he=Z.primaryKey;return F.addKey(he),he}},value:{get:function(){return G&&T.addKey(Z.primaryKey),Z.value}}})}return H})}}return a[y].apply(this,arguments)}}),w}})}};function Gc(e,n,r,o){function a(s){var m=e(s.name||"");function h(d){return d!=null?s.extractKey(d):null}var g=function(d){return s.multiEntry&&f(d)?d.forEach(function(v){return m.addKey(v)}):m.addKey(d)};(r||o).forEach(function(d,v){var w=r&&h(r[v]),x=o&&h(o[v]);ie(w,x)!==0&&(w!=null&&g(w),x!=null&&g(x))})}n.indexes.forEach(a)}function Xa(e,n,r){if(r.numFailures===0)return n;if(n.type==="deleteRange")return null;var o=n.keys?n.keys.length:"values"in n&&n.values?n.values.length:1;if(r.numFailures===o)return null;var a=i({},n);return f(a.keys)&&(a.keys=a.keys.filter(function(s,m){return!(m in r.failures)})),"values"in a&&f(a.values)&&(a.values=a.values.filter(function(s,m){return!(m in r.failures)})),a}function Yc(e,n){return n.lower===void 0?!0:n.lowerOpen?ie(e,n.lower)>0:ie(e,n.lower)>=0}function Qc(e,n){return n.upper===void 0?!0:n.upperOpen?ie(e,n.upper)<0:ie(e,n.upper)<=0}function Ui(e,n){return Yc(e,n)&&Qc(e,n)}function Ja(e,n,r,o,a,s){if(!r||r.length===0)return e;var m=n.query.index,h=m.multiEntry,g=n.query.range,d=o.schema.primaryKey,v=d.extractKey,w=m.extractKey,x=(m.lowLevelIndex||m).extractKey,j=r.reduce(function(k,S){var _=k,A=[];if(S.type==="add"||S.type==="put")for(var E=new Ie,$=S.values.length-1;$>=0;--$){var T=S.values[$],F=v(T);if(!E.hasKey(F)){var N=w(T);(h&&f(N)?N.some(function(q){return Ui(q,g)}):Ui(N,g))&&(E.addKey(F),A.push(T))}}switch(S.type){case"add":{var D=new Ie().addKeys(n.values?k.map(function(q){return v(q)}):k);_=k.concat(n.values?A.filter(function(q){var Z=v(q);return D.hasKey(Z)?!1:(D.addKey(Z),!0)}):A.map(function(q){return v(q)}).filter(function(q){return D.hasKey(q)?!1:(D.addKey(q),!0)}));break}case"put":{var K=new Ie().addKeys(S.values.map(function(q){return v(q)}));_=k.filter(function(q){return!K.hasKey(n.values?v(q):q)}).concat(n.values?A:A.map(function(q){return v(q)}));break}case"delete":var re=new Ie().addKeys(S.keys);_=k.filter(function(q){return!re.hasKey(n.values?v(q):q)});break;case"deleteRange":var H=S.range;_=k.filter(function(q){return!Ui(v(q),H)});break}return _},e);if(j===e)return e;var y=function(k,S){return ie(x(k),x(S))||ie(v(k),v(S))};return j.sort(n.direction==="prev"||n.direction==="prevunique"?function(k,S){return y(S,k)}:y),n.limit&&n.limit<1/0&&(j.length>n.limit?j.length=n.limit:e.length===n.limit&&j.length<n.limit&&(a.dirty=!0)),s?Object.freeze(j):j}function eu(e,n){return ie(e.lower,n.lower)===0&&ie(e.upper,n.upper)===0&&!!e.lowerOpen==!!n.lowerOpen&&!!e.upperOpen==!!n.upperOpen}function Xc(e,n,r,o){if(e===void 0)return n!==void 0?-1:0;if(n===void 0)return 1;var a=ie(e,n);if(a===0){if(r&&o)return 0;if(r)return 1;if(o)return-1}return a}function Jc(e,n,r,o){if(e===void 0)return n!==void 0?1:0;if(n===void 0)return-1;var a=ie(e,n);if(a===0){if(r&&o)return 0;if(r)return-1;if(o)return 1}return a}function eh(e,n){return Xc(e.lower,n.lower,e.lowerOpen,n.lowerOpen)<=0&&Jc(e.upper,n.upper,e.upperOpen,n.upperOpen)>=0}function nh(e,n,r,o){var a,s=Gn["idb://".concat(e,"/").concat(n)];if(!s)return[];var m=s.queries[r];if(!m)return[null,!1,s,null];var h=o.query?o.query.index.name:null,g=m[h||""];if(!g)return[null,!1,s,null];switch(r){case"query":var d=(a=o.direction)!==null&&a!==void 0?a:"next",v=g.find(function(j){var y;return j.req.limit===o.limit&&j.req.values===o.values&&((y=j.req.direction)!==null&&y!==void 0?y:"next")===d&&eu(j.req.query.range,o.query.range)});if(v)return[v,!0,s,g];var w=g.find(function(j){var y,k="limit"in j.req?j.req.limit:1/0;return k>=o.limit&&((y=j.req.direction)!==null&&y!==void 0?y:"next")===d&&(o.values?j.req.values:!0)&&eh(j.req.query.range,o.query.range)});return[w,!1,s,g];case"count":var x=g.find(function(j){return eu(j.req.query.range,o.query.range)});return[x,!!x,s,g]}}function th(e,n,r,o){e.subscribers.add(r),o.addEventListener("abort",function(){e.subscribers.delete(r),e.subscribers.size===0&&rh(e,n)})}function rh(e,n){setTimeout(function(){e.subscribers.size===0&&Ke(n,e)},3e3)}var ih={stack:"dbcore",level:0,name:"Cache",create:function(e){var n=e.schema.name,r=i(i({},e),{transaction:function(o,a,s){var m=e.transaction(o,a,s);if(a==="readwrite"){var h=new AbortController,g=h.signal,d=function(v){return function(){if(h.abort(),a==="readwrite"){for(var w=new Set,x=0,j=o;x<j.length;x++){var y=j[x],k=Gn["idb://".concat(n,"/").concat(y)];if(k){var S=e.table(y),_=k.optimisticOps.filter(function(G){return G.trans===m});if(m._explicit&&v&&m.mutatedParts)for(var A=0,E=Object.values(k.queries.query);A<E.length;A++)for(var $=E[A],T=0,F=$.slice();T<F.length;T++){var N=F[T];Bi(N.obsSet,m.mutatedParts)&&(Ke($,N),N.subscribers.forEach(function(G){return w.add(G)}))}else if(_.length>0){k.optimisticOps=k.optimisticOps.filter(function(G){return G.trans!==m});for(var D=0,K=Object.values(k.queries.query);D<K.length;D++)for(var $=K[D],re=0,H=$.slice();re<H.length;re++){var N=H[re];if(N.res!=null&&m.mutatedParts)if(v&&!N.dirty){var q=Object.isFrozen(N.res),Z=Ja(N.res,N.req,_,S,N,q);N.dirty?(Ke($,N),N.subscribers.forEach(function(V){return w.add(V)})):Z!==N.res&&(N.res=Z,N.promise=M.resolve({result:Z}))}else N.dirty&&Ke($,N),N.subscribers.forEach(function(V){return w.add(V)})}}}}w.forEach(function(G){return G()})}}};m.addEventListener("abort",d(!1),{signal:g}),m.addEventListener("error",d(!1),{signal:g}),m.addEventListener("complete",d(!0),{signal:g})}return m},table:function(o){var a=e.table(o),s=a.schema.primaryKey,m=i(i({},a),{mutate:function(h){var g=B.trans;if(s.outbound||g.db._options.cache==="disabled"||g.explicit||g.idbtrans.mode!=="readwrite")return a.mutate(h);var d=Gn["idb://".concat(n,"/").concat(o)];if(!d)return a.mutate(h);var v=a.mutate(h);return(h.type==="add"||h.type==="put")&&(h.values.length>=50||Zi(s,h).some(function(w){return w==null}))?v.then(function(w){var x=i(i({},h),{values:h.values.map(function(y,k){var S;if(w.failures[k])return y;var _=!((S=s.keyPath)===null||S===void 0)&&S.includes(".")?be(y):i({},y);return Q(_,s.keyPath,w.results[k]),_})}),j=Xa(d,x,w);d.optimisticOps.push(j),queueMicrotask(function(){return h.mutatedParts&&Sr(h.mutatedParts)})}):(d.optimisticOps.push(h),h.mutatedParts&&Sr(h.mutatedParts),v.then(function(w){if(w.numFailures>0){Ke(d.optimisticOps,h);var x=Xa(d,h,w);x&&d.optimisticOps.push(x),h.mutatedParts&&Sr(h.mutatedParts)}}),v.catch(function(){Ke(d.optimisticOps,h),h.mutatedParts&&Sr(h.mutatedParts)})),v},query:function(h){var g;if(!Ya(B,a)||!Qa("query",h))return a.query(h);var d=((g=B.trans)===null||g===void 0?void 0:g.db._options.cache)==="immutable",v=B,w=v.requery,x=v.signal,j=nh(n,o,"query",h),y=j[0],k=j[1],S=j[2],_=j[3];if(y&&k)y.obsSet=h.obsSet;else{var A=a.query(h).then(function(E){var $=E.result;if(y&&(y.res=$),d){for(var T=0,F=$.length;T<F;++T)Object.freeze($[T]);Object.freeze($)}return E}).catch(function(E){return _&&y&&Ke(_,y),Promise.reject(E)});y={obsSet:h.obsSet,promise:A,subscribers:new Set,type:"query",req:h,dirty:!1},_?_.push(y):(_=[y],S||(S=Gn["idb://".concat(n,"/").concat(o)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}),S.queries.query[h.query.index.name||""]=_)}return th(y,_,w,x),y.promise.then(function(E){var $=Ja(E.result,h,S==null?void 0:S.optimisticOps,a,y,d);return{result:d?$:be($)}})}});return m}});return r}};function Tr(e,n){return new Proxy(e,{get:function(r,o,a){return o==="db"?n:Reflect.get(r,o,a)}})}var pn=function(){function e(n,r){var o=this;this._middlewares={},this.verno=0;var a=e.dependencies;this._options=r=i({addons:e.addons,autoOpen:!0,indexedDB:a.indexedDB,IDBKeyRange:a.IDBKeyRange,cache:"cloned",maxConnections:Ea},r),this._deps={indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange};var s=r.addons;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var m={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:se,dbReadyPromise:null,cancelOpen:se,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:r.autoOpen};m.dbReadyPromise=new M(function(g){m.dbReadyResolve=g}),m.openCanceller=new M(function(g,d){m.cancelOpen=d}),this._state=m,this.name=n,this.on=At(this,"populate","blocked","versionchange","close",{ready:[gi,se]}),this.once=function(g,d){var v=function(){for(var w=[],x=0;x<arguments.length;x++)w[x]=arguments[x];o.on(g).unsubscribe(v),d.apply(o,w)};return o.on(g,v)},this.on.ready.subscribe=me(this.on.ready.subscribe,function(g){return function(d,v){e.vip(function(){var w=o._state;if(w.openComplete)w.dbOpenError||M.resolve().then(d),v&&g(d);else if(w.onReadyBeingFired)w.onReadyBeingFired.push(d),v&&g(d);else{g(d);var x=o;v||g(function j(){x.on.ready.unsubscribe(d),x.on.ready.unsubscribe(j)})}})}}),this.Collection=cc(this),this.Table=sc(this),this.Transaction=yc(this),this.Version=Dc(this),this.WhereClause=bc(this),this.on("versionchange",function(g){g.newVersion>0?console.warn("Another connection wants to upgrade database '".concat(o.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(o.name,"'. Closing db now to resume the delete request.")),o.close({disableAutoOpen:!1})}),this.on("blocked",function(g){!g.newVersion||g.newVersion<g.oldVersion?console.warn("Dexie.delete('".concat(o.name,"') was blocked")):console.warn("Upgrade '".concat(o.name,"' blocked by other connection holding version ").concat(g.oldVersion/10))}),this._maxKey=Ot(r.IDBKeyRange),this._createTransaction=function(g,d,v,w){return new o.Transaction(g,d,v,o._options.chromeTransactionDurability,w)},this._fireOnBlocked=function(g){o.on("blocked").fire(g),Dt.toArray().filter(function(d){return d.name===o.name&&d!==o&&!d._state.vcFired}).map(function(d){return d.on("versionchange").fire(g)})},this.use(Zc),this.use(ih),this.use(Uc),this.use(Hc),this.use(Vc);var h=new Proxy(this,{get:function(g,d,v){if(d==="_vip")return!0;if(d==="table")return function(x){return Tr(o.table(x),h)};var w=Reflect.get(g,d,v);return w instanceof Na?Tr(w,h):d==="tables"?w.map(function(x){return Tr(x,h)}):d==="_createTransaction"?function(){var x=w.apply(this,arguments);return Tr(x,h)}:w}});this.vip=h,s.forEach(function(g){return g(o)})}return e.prototype.version=function(n){if(isNaN(n)||n<.1)throw new L.Type("Given version is not a positive number");if(n=Math.round(n*10)/10,this.idbdb||this._state.isBeingOpened)throw new L.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,n);var r=this._versions,o=r.filter(function(a){return a._cfg.version===n})[0];return o||(o=new this.Version(n),r.push(o),r.sort(Tc),o.stores({}),this._state.autoSchema=!1,o)},e.prototype._whenReady=function(n){var r=this;return this.idbdb&&(this._state.openComplete||B.letThrough||this._vip)?n():new M(function(o,a){if(r._state.openComplete)return a(new L.DatabaseClosed(r._state.dbOpenError));if(!r._state.isBeingOpened){if(!r._state.autoOpen){a(new L.DatabaseClosed);return}r.open().catch(se)}r._state.dbReadyPromise.then(o,a)}).then(n)},e.prototype.use=function(n){var r=n.stack,o=n.create,a=n.level,s=n.name;s&&this.unuse({stack:r,name:s});var m=this._middlewares[r]||(this._middlewares[r]=[]);return m.push({stack:r,create:o,level:a==null?10:a,name:s}),m.sort(function(h,g){return h.level-g.level}),this},e.prototype.unuse=function(n){var r=n.stack,o=n.name,a=n.create;return r&&this._middlewares[r]&&(this._middlewares[r]=this._middlewares[r].filter(function(s){return a?s.create!==a:o?s.name!==o:!1})),this},e.prototype.open=function(){var n=this;return Wn(dn,function(){return Bc(n)})},e.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var n=this._state;if(Dt.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}n.isBeingOpened||(n.dbReadyPromise=new M(function(r){n.dbReadyResolve=r}),n.openCanceller=new M(function(r,o){n.cancelOpen=o}))},e.prototype.close=function(n){var r=n===void 0?{disableAutoOpen:!0}:n,o=r.disableAutoOpen,a=this._state;o?(a.isBeingOpened&&a.cancelOpen(new L.DatabaseClosed),this._close(),a.autoOpen=!1,a.dbOpenError=new L.DatabaseClosed):(this._close(),a.autoOpen=this._options.autoOpen||a.isBeingOpened,a.openComplete=!1,a.dbOpenError=null)},e.prototype.delete=function(n){var r=this;n===void 0&&(n={disableAutoOpen:!0});var o=arguments.length>0&&typeof arguments[0]!="object",a=this._state;return new M(function(s,m){var h=function(){r.close(n);var g=r._deps.indexedDB.deleteDatabase(r.name);g.onsuccess=ge(function(){Kc(r._deps,r.name),s()}),g.onerror=tn(m),g.onblocked=r._fireOnBlocked};if(o)throw new L.InvalidArgument("Invalid closeOptions argument to db.delete()");a.isBeingOpened?a.dbReadyPromise.then(h):h()})},e.prototype.backendDB=function(){return this.idbdb},e.prototype.isOpen=function(){return this.idbdb!==null},e.prototype.hasBeenClosed=function(){var n=this._state.dbOpenError;return n&&n.name==="DatabaseClosedError"},e.prototype.hasFailed=function(){return this._state.dbOpenError!==null},e.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(e.prototype,"tables",{get:function(){var n=this;return p(this._allTables).map(function(r){return n._allTables[r]})},enumerable:!1,configurable:!0}),e.prototype.transaction=function(){var n=Lc.apply(this,arguments);return this._transaction.apply(this,n)},e.prototype._transaction=function(n,r,o){var a=this,s=B.trans;(!s||s.db!==this||n.indexOf("!")!==-1)&&(s=null);var m=n.indexOf("?")!==-1;n=n.replace("!","").replace("?","");var h,g;try{if(g=r.map(function(v){var w=v instanceof a.Table?v.name:v;if(typeof w!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return w}),n=="r"||n===$i)h=$i;else if(n=="rw"||n==Ti)h=Ti;else throw new L.InvalidArgument("Invalid transaction mode: "+n);if(s){if(s.mode===$i&&h===Ti)if(m)s=null;else throw new L.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s&&g.forEach(function(v){if(s&&s.storeNames.indexOf(v)===-1)if(m)s=null;else throw new L.SubTransaction("Table "+v+" not included in parent transaction.")}),m&&s&&!s.active&&(s=null)}}catch(v){return s?s._promise(null,function(w,x){x(v)}):ve(v)}var d=Ua.bind(null,this,h,g,s,o);return s?s._promise(h,d,"lock"):B.trans?Wn(B.transless,function(){return a._whenReady(d)}):this._whenReady(d)},e.prototype.table=function(n){if(!R(this._allTables,n))throw new L.InvalidTable("Table ".concat(n," does not exist"));return this._allTables[n]},e}(),oh=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",ah=function(){function e(n){this._subscribe=n}return e.prototype.subscribe=function(n,r,o){return this._subscribe(!n||typeof n=="function"?{next:n,error:r,complete:o}:n)},e.prototype[oh]=function(){return this},e}(),jr;try{jr={indexedDB:l.indexedDB||l.mozIndexedDB||l.webkitIndexedDB||l.msIndexedDB,IDBKeyRange:l.IDBKeyRange||l.webkitIDBKeyRange}}catch{jr={indexedDB:null,IDBKeyRange:null}}function nu(e){var n=!1,r,o=new ah(function(a){var s=un(e);function m(_){var A=mt();try{s&&ht();var E=Sn(e,_);return s&&(E=E.finally($n)),E}finally{A&&ct()}}var h=!1,g,d={},v={},w={get closed(){return h},unsubscribe:function(){h||(h=!0,g&&g.abort(),x&&En.storagemutated.unsubscribe(k))}};a.start&&a.start(w);var x=!1,j=function(){return xi(S)};function y(){return Bi(v,d)}var k=function(_){_r(d,_),y()&&j()},S=function(){if(!(h||!jr.indexedDB)){d={};var _={};g&&g.abort(),g=new AbortController;var A={subscr:_,signal:g.signal,requery:j,querier:e,trans:null},E=m(A);x||(En.storagemutated.subscribe(k),x=!0),Promise.resolve(E).then(function($){n=!0,r=$,!(h||A.signal.aborted)&&(y()?j():(v=_,y()?j():(d={},xi(function(){return!h&&a.next&&a.next($)}))))},function($){h||A.signal.aborted||(n=!1,["DatabaseClosedError","AbortError"].includes($==null?void 0:$.name)||h||xi(function(){h||a.error&&a.error($)}))})}};return setTimeout(j,0),w});return o.hasValue=function(){return n},o.getValue=function(){return r},o}var Yn=pn;O(Yn,i(i({},sn),{delete:function(e){var n=new Yn(e,{addons:[]});return n.delete()},exists:function(e){return new Yn(e,{addons:[]}).open().then(function(n){return n.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return Mc(Yn.dependencies).then(e)}catch{return ve(new L.MissingAPI)}},defineClass:function(){function e(n){b(this,n)}return e},ignoreTransaction:function(e){return B.trans?Wn(B.transless||dn,e):e()},vip:Ri,async:function(e){return function(){try{var n=Vi(e.apply(this,arguments));return!n||typeof n.then!="function"?M.resolve(n):n}catch(r){return ve(r)}}},spawn:function(e,n,r){try{var o=Vi(e.apply(r,n||[]));return!o||typeof o.then!="function"?M.resolve(o):o}catch(a){return ve(a)}},currentTransaction:{get:function(){return B.trans||null}},waitFor:function(e,n){var r=M.resolve(typeof e=="function"?Yn.ignoreTransaction(e):e).timeout(n||6e4);return B.trans?B.trans.waitFor(r):r},Promise:M,debug:{get:function(){return mn},set:function(e){ba(e)}},derive:ee,extend:b,props:O,override:me,Events:At,on:En,liveQuery:nu,extendObservabilitySet:_r,getByKeyPath:te,setByKeyPath:Q,delByKeyPath:ne,shallowClone:pe,deepClone:be,getObjectDiff:Wi,cmp:ie,asap:ae,minKey:Si,addons:[],connections:{get:Dt.toArray},errnames:lt,dependencies:jr,cache:Gn,semVer:Ta,version:Ta.split(".").map(function(e){return parseInt(e)}).reduce(function(e,n,r){return e+n/Math.pow(10,r*2)})})),Yn.maxKey=Ot(Yn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(En(pr,function(e){if(!Cn){var n;n=new CustomEvent(Ci,{detail:e}),Cn=!0,dispatchEvent(n),Cn=!1}}),addEventListener(Ci,function(e){var n=e.detail;Cn||Gi(n)}));function Gi(e){var n=Cn;try{Cn=!0,En.storagemutated.fire(e),Hi(e,!0)}finally{Cn=n}}var Cn=!1,An,Yi=function(){};typeof BroadcastChannel<"u"&&(Yi=function(){An=new BroadcastChannel(Ci),An.onmessage=function(e){return e.data&&Gi(e.data)}},Yi(),typeof An.unref=="function"&&An.unref(),En(pr,function(e){Cn||An.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!pn.disableBfCache&&e.persisted){mn&&console.debug("Dexie: handling persisted pagehide"),An==null||An.close();for(var n=0,r=Dt.toArray();n<r.length;n++){var o=r[n];o.close({disableAutoOpen:!1})}}}),addEventListener("pageshow",function(e){!pn.disableBfCache&&e.persisted&&(mn&&console.debug("Dexie: handling persisted pageshow"),Yi(),Gi({all:new Ie(-1/0,[[]])}))}));function uh(e){return new Ct({add:e})}function sh(e){return new Ct({remove:e})}function lh(e,n){return new Ct({replacePrefix:[e,n]})}M.rejectionMapper=nn,ba(mn);var mh=Object.freeze({__proto__:null,DEFAULT_MAX_CONNECTIONS:Ea,Dexie:pn,Entity:Aa,PropModification:Ct,RangeSet:Ie,add:uh,cmp:ie,default:pn,liveQuery:nu,mergeRanges:Mt,rangesOverlap:Ha,remove:sh,replacePrefix:lh});return i(pn,mh,{default:pn}),pn})});W();W();var Se=Symbol.for("#__init__"),wh=Symbol.for("#__initor__");var xh=Symbol.for("#meta"),Qi=Symbol.for("imba");var Jn={IsExtension:1,IsTag:2,HasDescriptors:4,HasSuperCalls:8,HasConstructor:16,HasFields:32,HasMixins:64,HasInitor:128,HasDecorators:256,IsObjectExtension:512,IsMixin:1024},ft=new Map,_h=globalThis[Qi]||(globalThis[Qi]={counter:0,classes:ft});function pt(c,t={}){var i;return ft.has(c)||ft.set(c,{symbol:Symbol(c.name),parent:(i=Object.getPrototypeOf(c.prototype))==null?void 0:i.constructor,for:c,uses:null,inits:null,id:_h.counter++,...t}),ft.get(c)}function ye(c){var t;return((t=c==null?void 0:c.toIterable)==null?void 0:t.call(c))||c}function Sh(c,t){if(!c||!t)return!1;if(c.get)return t.get===c.get;if(c.set)return t.set===c.set;if(c.value)return c.value===t.value}function ru(c,t,i,u={}){let l=c.constructor;!i&&t&&(i=Object.getOwnPropertyDescriptors(t),delete i.constructor,i[Se]&&(console.warn(`Cannot define plain fields when extending class ${l.name}`),delete i[Se]));let p=pt(l);if(p&&p.augments){let f=new Map;for(let b of Object.keys(i)){let C=Object.getOwnPropertyDescriptor(c,b);for(let I of p.augments){let R=f.get(I);R||f.set(I,R={});let O=Object.getOwnPropertyDescriptor(I.prototype,b);O&&!Sh(C,O)?console.warn("wont extend",b,O,C):R[b]=i[b]}}for(let[b,C]of f)Object.keys(C).length&&ru(b.prototype,null,C)}return Object.defineProperties(c,i),c}function Xi(c,t){var f;let i=pt(c),u=pt(t),l=u.parent;for(;l&&((f=pt(l))==null?void 0:f.flags)&Jn.IsMixin;){Xi(c,l),l=null;break}if(l&&!(c.prototype instanceof l))throw new Error(`Mixin ${t.name} has superclass not present in target class`);if(!u.augments){u.augments=new Set;let b=u.ref=Symbol(t.name),C=Object[Symbol.hasInstance];t.prototype[b]=!0,Object.defineProperty(t,Symbol.hasInstance,{value:function(I){return this===t?I&&!!I[b]:C.call(this,I)}})}if(c.prototype[u.ref])return c;if(u.uses)for(let b of u.uses)Xi(c,b);u.augments.add(c),i.uses||(i.uses=[]),i.uses.push(t);let p=Object.getOwnPropertyDescriptors(t.prototype);return delete p.constructor,p[Se]&&(i.inits||(i.inits=[]),i.inits.push(t.prototype[Se]),delete p[Se]),Object.defineProperties(c.prototype,p),(t==null?void 0:t.mixed)instanceof Function&&t.mixed(c),c}var et={cache:{},self:null,target:null,proxy:new Proxy({},{apply:(c,t,i)=>Reflect.apply(et.target,t,i),get:(c,t)=>{let i=Reflect.get(et.target,t,et.self);return i instanceof Function?i.bind(et.self):i},set:(c,t,i,u)=>Reflect.set(et.target,t,i,et.self)})};function U(c,t,i,u,l=null){var I;let p=Object.getPrototypeOf(c.prototype),f=(u&(Jn.HasMixins|Jn.IsExtension))==Jn.HasMixins,b;if(f&&(ft.set(c,ft.get(p.constructor)),p=Object.getPrototypeOf(p)),l){let R=u&Jn.IsObjectExtension?l:l.prototype,O=pt(c);if(O.uses){l===R&&console.warn("Cannot extend object with mixins");for(let oe of O.uses)Xi(l,oe)}return u&Jn.HasSuperCalls&&(et.cache[t]=Object.create(Object.getPrototypeOf(R),Object.getOwnPropertyDescriptors(R))),ru(R,c.prototype),l}let C=p==null?void 0:p.constructor;if(b=pt(c,{symbol:t}),Object.defineProperty(c,xh,{value:b,enumerable:!1,configurable:!0}),i&&c.name!==i&&Object.defineProperty(c,"name",{value:i,configurable:!0}),b.flags=u,u&Jn.HasConstructor&&(c.prototype[wh]=t),b.uses)for(let R of b.uses)(I=R.mixes)==null||I.call(R,c);return(C==null?void 0:C.inherited)instanceof Function&&C.inherited(c),c}W();W();var Rt=Symbol.for("#__listeners__");var $h=Symbol(),eo=class eo{static for(t){return new Proxy({},new this(t))}constructor(t){this.getter=t}get target(){return this.getter()}get(t,i){return this.target[i]}set(t,i,u){return this.target[i]=u,!0}};U(eo,$h,"LazyProxy",16);var iu=eo;function Kt(c){let t=typeof c;if(t=="number")return c;if(t=="string"){if(/^\d+fps$/.test(c))return 1e3/parseFloat(c);if(/^([-+]?[\d\.]+)s$/.test(c))return parseFloat(c)*1e3;if(/^([-+]?[\d\.]+)ms$/.test(c))return parseFloat(c)}return null}function Cr(c,t,i){if(!c)return;let u=Object.getOwnPropertyDescriptor(c,t);return u||c==i?u||void 0:Cr(Reflect.getPrototypeOf(c),t,i)}var ou=function(c,t,i){let u,l,p;for(;(u=i)&&(i=i.next);)(l=i.listener)&&(i.path&&l[i.path]?p=t?l[i.path].apply(l,t):l[i.path]():p=t?l.apply(i,t):l.call(i)),i.times&&--i.times<=0&&(u.next=i.next,i.listener=null)};function Ar(c,t,i,u){let l,p,f;return l=c[Rt]||(c[Rt]={}),p=l[t]||(l[t]={}),f=p.tail||(p.tail=p.next={}),f.listener=i,f.path=u,p.tail=f.next={},f}function Pn(c,t,i){let u=Ar(c,t,i);return u.times=1,u}function Ji(c,t,i,u){if(!i)return;let l,p,f=c[Rt];if(f&&(l=f[t])){for(;(p=l)&&(l=l.next);)if(l==i||l.listener==i){p.next=l.next,l.listener=null;break}}}function nt(c,t,i=null){let u;(u=c[Rt])&&(u[t]&&ou(t,i,u[t]),u.all&&ou(t,[t,i],u.all))}var Th=Symbol(),no=class no{emit(t,...i){return nt(this,t,i)}on(t,...i){return Ar(this,t,...i)}once(t,...i){return Pn(this,t,...i)}un(t,...i){return Ji(this,t,...i)}};U(no,Th,"Emitter",0);var au=no;W();function to(c,t){var i;return typeof t=="string"?typeof c===t:(i=t[Symbol.hasInstance])==null?void 0:i.call(t,c)}function jh(c){let t;return c&&((t=c.toIterable)?t.call(c):c)}var uu=Symbol.for("#__init__"),su=Symbol.for("#schedule"),ro=Symbol.for("#frames"),Pr=Symbol.for("#interval"),bt=Symbol.for("#stage"),vt=Symbol.for("#scheduled"),Ir=Symbol.for("#version"),Eh=Symbol.for("#fps"),lu=Symbol.for("#ticker"),Ch=globalThis.requestAnimationFrame||function(c){return globalThis.setTimeout(c,1e3/60)};var Fd=1/60,Ah=Symbol(),ao=class ao{constructor(t=null){this[uu](t)}[uu](t=null,i=!0,u=!0){var l;this.owner=t&&(l=t.owner)!==void 0?l:null,this.target=t&&(l=t.target)!==void 0?l:null,this.active=t&&(l=t.active)!==void 0?l:!1,this.value=t&&(l=t.value)!==void 0?l:void 0,this.skip=t&&(l=t.skip)!==void 0?l:0,this.last=t&&(l=t.last)!==void 0?l:0}tick(t,i){return this.last=this.owner[ro],this.target.tick(this,i),1}update(t,i){let u=this.active,l=t.value;return this.value!=l&&(this.deactivate(),this.value=l),(this.value||u||i)&&this.activate(),this}queue(){this.owner.add(this)}activate(){return this.value===!0?this.owner.on("commit",this):this.value===!1||typeof this.value=="number"&&(this.value/16.666666666666668<=2?this.owner.on("raf",this):this[Pr]=globalThis.setInterval(this.queue.bind(this),this.value)),this.active=!0,this}deactivate(){return this.value===!0&&this.owner.un("commit",this),this.owner.un("raf",this),this[Pr]&&(globalThis.clearInterval(this[Pr]),this[Pr]=null),this.active=!1,this}};U(ao,Ah,"Scheduled",16);var io=ao,Ph=Symbol(),uo=class uo{constructor(){var t=this;this.id=Symbol(),this.queue=[],this.stage=-1,this[bt]=-1,this[ro]=0,this[vt]=!1,this[Ir]=0,this.listeners={},this.intervals={},this.commit=function(){return t.add("commit"),t},this[Eh]=0,this.$promise=null,this.$resolve=null,this[lu]=function(i){return t[vt]=!1,t.tick(i)}}touch(){return this[Ir]++}get version(){return this[Ir]}add(t,i=!1){return(i||this.queue.indexOf(t)==-1)&&this.queue.push(t),this[vt]||this[su](),this}get committingΦ(){return this.queue.indexOf("commit")>=0}get syncingΦ(){return this[bt]==1}listen(t,i){let u=this.listeners[t],l=!u;return u||(u=this.listeners[t]=new Set),u.add(i),t=="raf"&&l&&this.add("raf"),this}unlisten(t,i){var u;let l=this.listeners[t];return l&&l.delete(i),t=="raf"&&l&&l.size==0&&(u=this.listeners.raf,delete this.listeners.raf),this}on(t,i){return this.listen(t,i)}un(t,i){return this.unlisten(t,i)}get promise(){var t=this;return this.$promise||(this.$promise=new Promise(function(i){return t.$resolve=i}))}tick(t){var i=this;let u=this.queue,l=this[ro]++;if(this.ts||(this.ts=t),this.dt=t-this.ts,this.ts=t,this.queue=[],this[bt]=1,this[Ir]++,u.length)for(let p=0,f=jh(u),b=f.length;p<b;p++){let C=f[p];typeof C=="string"&&this.listeners[C]?this.listeners[C].forEach(function(I){if(to(I.tick,Function))return I.tick(i,C);if(to(I,Function))return I(i,C)}):to(C,Function)?C(this.dt,this):C.tick&&C.tick(this.dt,this)}return this[bt]=this[vt]?0:-1,this.$promise&&(this.$resolve(this),this.$promise=this.$resolve=null),this.listeners.raf&&this.add("raf"),this}[su](){return this[vt]||(this[vt]=!0,this[bt]==-1&&(this[bt]=0),Ch(this[lu])),this}schedule(t,i){var l,p;return i||(i=t[l=this.id]||(t[l]={value:!0})),(i[p=this.id]||(i[p]=new io({owner:this,target:t}))).update(i,!0)}unschedule(t,i={}){i||(i=t[this.id]);let u=i&&i[this.id];return u&&u.active&&u.deactivate(),this}};U(uo,Ph,"Scheduler",16);var oo=uo,Pe=new oo;function Ne(){return Pe.add("commit").promise}function Ih(c,t){return globalThis.setTimeout(function(){c(),Ne()},t)}function Oh(c,t){return globalThis.setInterval(function(){c(),Ne()},t)}var Nh=globalThis.clearInterval,Dh=globalThis.clearTimeout,qt=globalThis.imba||(globalThis.imba={});qt.commit=Ne;qt.setTimeout=Ih;qt.setInterval=Oh;qt.clearInterval=Nh;qt.clearTimeout=Dh;W();W();var mu=Symbol.for("#toStringDeopt"),Bt=Symbol.for("#named"),cu=Symbol.for("#symbols"),hu=Symbol.for("#batches"),gu=Symbol.for("#extras"),so=Symbol.for("#stacks"),Fh=Symbol(),lo=class lo{constructor(t){this.dom=t,this.string=""}contains(t){return this.dom.classList.contains(t)}has(t){return this.dom.classList.contains(t)}add(t){return this.contains(t)?this:(this.string+=(this.string?" ":"")+t,this.dom.classList.add(t),this)}set(t,i){this[Bt]||(this[Bt]={});let u=this[Bt][t];return u!=i&&(u&&this.decr(u),i&&this.incr(i),this[Bt][t]=i),this}remove(t){if(!this.contains(t))return this;let i=new RegExp("(^|\\s)"+t+"(?=\\s|$)","g");return this.string=this.string.replace(i,""),this.dom.classList.remove(t),this}toggle(t,i){return i===void 0&&(i=!this.contains(t)),i?this.add(t):this.remove(t)}incr(t,i=0){var u=this;let l=this.stacks,p=l[t]||0;return p<1&&this.add(t),i>0&&setTimeout(function(){return u.decr(t)},i),l[t]=Math.max(p,0)+1}decr(t){let i=this.stacks,u=i[t]||0;return u==1&&this.remove(t),i[t]=Math.max(u,1)-1}reconcile(t,i,u){let l=this[cu],p=this[hu],f=!0;if(!l)l=this[cu]=[t],p=this[hu]=[i||""],u&&(this.dom.className||"").indexOf(u)==-1&&(l.push(t),p.push(u)),this.toString=this.valueOf=this[mu];else{let b=l.indexOf(t),C=i||"";b==-1?(l.push(t),p.push(C),u&&(this.dom.className||"").indexOf(u)==-1&&(l.push(t),p.push(u))):p[b]!=C?p[b]=C:f=!1}f&&(this[gu]=" "+p.join(" "),this.sync())}valueOf(){return this.string}toString(){return this.string}[mu](){return this.string+(this[gu]||"")}sync(){return this.dom.flagSync$()}get stacks(){return this[so]||(this[so]={})}};U(lo,Fh,"Flags",16);var yt=lo;W();var du=Symbol.for("#__init__"),mo=Symbol.for("#getRenderContext"),Mh=Symbol.for("#getDynamicContext"),Rh=Symbol.for("#removeFromCache"),De={context:null,document:null,createTextNode:function(c){return globalThis.document.createTextNode(c)}},Kh=Symbol(),ho=class ho{constructor(t=null){this[du](t)}[du](t=null,i=!0,u=!0){var l;this.stack=t&&(l=t.stack)!==void 0?l:[],this.moving=t&&(l=t.moving)!==void 0?l:new Set}push(t){return this.stack.push(t)}pop(t){return this.stack.pop()}};U(ho,Kh,"Renderer",16);var co=ho,tt=new co,qh=Symbol(),Or=class Or extends Map{constructor(t,i=null){super(),this._=t,this.sym=i}pop(){return De.context=null}[mo](t){let i=this.get(t);return i||this.set(t,i=new Or(this._,t)),De.context=i}[Mh](t,i){return this[mo](t)[mo](i)}[Rh](t){let i=this[t];return i&&(this.delete(i),this[t]=null,this.value==i&&(this.value=null)),this}run(t,i=1){if(this.value=t,De.context==this&&(De.context=null),i==0){let u=t;if(typeof u=="number"&&(u=String(u)),typeof u=="string"){let l=this.text||(this.text=De.createTextNode(u));return u!=l.textContent&&(l.textContent=u),l}}return this.get(t)}cache(t){return this.set(this.value,t),t}};U(Or,qh,"RenderContext",16);var In=Or;function Nr(c,t=Symbol(),i=c){return De.context=c[t]||(c[t]=new In(i,t))}function fu(){let c=De.context,t=c||new In(null);return c&&(De.context=null),t}function pu(c,t){var i;return typeof t=="string"?typeof c===t:(i=t[Symbol.hasInstance])==null?void 0:i.call(t,c)}function Bh(c){let t;return c&&((t=c.toIterable)?t.call(c):c)}var Vt=Symbol.for("#parent"),bu=Symbol.for("#closestNode"),Lh=Symbol.for("#parentNode"),zh=Symbol.for("#context"),Du=Symbol.for("##inited"),go=Symbol.for("#getRenderContext"),Hh=Symbol.for("#getDynamicContext"),vu=Symbol.for("#insertChild"),yo=Symbol.for("#appendChild"),fo=Symbol.for("#replaceChild"),yu=Symbol.for("#removeChild"),bn=Symbol.for("#insertInto"),ku=Symbol.for("#insertIntoDeopt"),Lt=Symbol.for("#removeFrom"),wu=Symbol.for("#removeFromDeopt"),kt=Symbol.for("#replaceWith"),xu=Symbol.for("#replaceWithDeopt"),po=Symbol.for("#placeholderNode"),Vh=Symbol.for("#attachToParent"),Wh=Symbol.for("#detachFromParent"),_u=Symbol.for("#placeChild"),Zh=Symbol.for("#beforeReconcile"),Uh=Symbol.for("#afterReconcile"),Gh=Symbol.for("#afterVisit"),Yh=Symbol.for("#visitContext"),Fu=Symbol.for("#__init__"),Mu=Symbol.for("##parent"),Dr=Symbol.for("##up"),bo=Symbol.for("##context"),rt=Symbol.for("#domNode"),zt=Symbol.for("##placeholderNode"),Su=Symbol.for("#forNode"),$u=Symbol.for("#domDeopt"),Ht=Symbol.for("##visitContext"),Qh=Symbol.for("#isRichElement"),Tu=Symbol.for("#src"),Fr=Symbol.for("#htmlNodeName"),Xh=Symbol.for("#getSlot");var ju=Symbol.for("#cssns"),Jh=Symbol.for("#cssid"),Qd=window.Event,Xd=window.UIEvent,Jd=window.FocusEvent,Ru=window.MouseEvent,ef=window.PointerEvent,Ku=window.KeyboardEvent,nf=window.CustomEvent,_o=window.Node,So=window.Comment,qu=window.Text,tf=window.Element,rf=window.HTMLElement,of=window.HTMLHtmlElement,af=window.HTMLSelectElement,uf=window.HTMLInputElement,sf=window.HTMLTextAreaElement,lf=window.HTMLButtonElement,mf=window.HTMLOptionElement,cf=window.HTMLScriptElement,hf=window.SVGElement,gf=window.DocumentFragment,df=window.ShadowRoot,ff=window.Document,pf=window.Window,bf=window.customElements;var vo={};function Bu(c,t,i){if(!c)return i[t]=null;if(i[t]!==void 0)return i[t];let u=Object.getOwnPropertyDescriptor(c,t);return u!==void 0||c==SVGElement?i[t]=u||null:Bu(Reflect.getPrototypeOf(c),t,i)}var ko={},wo={},eg={},ng={};var tg={get(c,t){let i=c,u;for(;i&&u==null;)(i=i[Vt])&&(u=i[t]);return u},set(c,t,i){let u=c,l;for(;u&&l==null;){if(Cr(u,t,Element))return u[t]=i,!0;u=u[Vt]}return!0}},rg=Symbol(),To=class To{get flags(){return this.documentElement.flags}emit(...t){return this.documentElement.emit(...t)}};U(To,rg,"Document",1,Document);var Eu=To;Node.prototype[Fu]=function(){return this};var ig=Symbol(),jo=class jo{get[Vt](){return this[Mu]||this.parentNode||this[Dr]}get[bu](){return this}get[Lh](){var t;return(t=this[Vt])==null?void 0:t[bu]}get[zh](){return this[bo]||(this[bo]=new Proxy(this,tg))}[Du](){return this}[go](t){return Nr(this,t)}[Hh](t,i){return this[go](t)[go](i)}[vu](t,i){return t[bn](this,i)}[yo](t){return t[bn](this,null)}[fo](t,i){let u=this[vu](t,i);return this[yu](i),u}[yu](t){return t[Lt](this)}[bn](t,i=null){return i?t.insertBefore(this,i):t.appendChild(this),this}[ku](t,i){return i?t.insertBefore(this[rt]||this,i):t.appendChild(this[rt]||this),this}[Lt](t){return t.removeChild(this)}[wu](t){return t.removeChild(this[rt]||this)}[kt](t,i){return i[fo](t,this)}[xu](t,i){return i[fo](t,this[rt]||this)}get[po](){let t;return this[zt]||(this[zt]=(t=globalThis.document.createComment("placeholder"),t[Su]=this,t))}set[po](t){let i=this[zt];this[zt]=t,t[Su]=this,i&&i!=t&&i.parentNode&&i[kt](t)}[Vh](){let t=this[rt],i=t&&t.parentNode;return t&&i&&t!=this&&(this[rt]=null,this[bn](i,t),t[Lt](i)),this}[Wh](){this[$u]!=!0&&(this[$u]=!0,!0)&&(this[kt]=this[xu],this[Lt]=this[wu],this[bn]=this[ku],this[Dr]||(this[Dr]=this[Vt]));let t=this[po];return this.parentNode&&t!=this&&(t[bn](this.parentNode,this),this[Lt](this.parentNode)),this[rt]=t,this}[_u](t,i,u){let l=typeof t;if(l==="undefined"||t===null){if(u&&pu(u,Comment))return u;let p=globalThis.document.createComment("");return u?u[kt](p,this):p[bn](this,null)}if(t===u)return t;if(l!=="object"){let p,f=t;return u?pu(u,Text)?(u.textContent=f,u):(p=globalThis.document.createTextNode(f),u[kt](p,this),p):(this.appendChild(p=globalThis.document.createTextNode(f)),p)}else return t[bn]?u?u[kt](t,this):t[bn](this,null):this[_u](String(t),i,u)}};U(jo,ig,"Node",1,Node);var Cu=jo,og=Symbol(),Eo=class Eo{log(...t){return console.log(...t)}get hiddenΦ(){var i,u;let t=globalThis.getComputedStyle(this);return t.display=="none"||t.visibility=="hidden"?!0:this.offsetParent||this===globalThis.document.body?!1:(u=(i=this.parentElement)==null?void 0:i.hiddenΦ)!=null?u:!0}get detachedΦ(){return!globalThis.document.documentElement.contains(this)}get unobstructedΦ(){let t=this.getBoundingClientRect(),i=window.visualViewport,u=t.left+t.width*.5,l=t.top+t.height*.5;if(i.width>u&&u>0&&i.height>l&&l>0){let p=globalThis.document.elementFromPoint(u,l);return!!(p&&(p.contains(this)||this.contains(p)))}return!1}get focusΦ(){return globalThis.document.activeElement==this}get focinΦ(){return this.contains(globalThis.document.activeElement)}emit(t,i,u={}){var f,b,C;i!=null&&((f=u.detail)!=null||(u.detail=i)),(b=u.bubbles)!=null||(u.bubbles=!0),(C=u.cancelable)!=null||(u.cancelable=!0);let l=new CustomEvent(t,u);u.original&&(l.originalEvent=u.original);let p=this.dispatchEvent(l);return l}text$(t){return this.textContent=t,this}[Zh](){return this}[Uh](){return this}[Gh](){this[Ht]&&(this[Ht]=null)}get[Yh](){return this[Ht]||(this[Ht]={})}get flags(){return this.$flags||(this.$flags=new yt(this),this.flag$==Element.prototype.flag$&&(this.flags$ext=this.className),this.flagDeopt$()),this.$flags}flag$(t){let i=this.flags$ns;this.className=i?i+(this.flags$ext=t):this.flags$ext=t}flagDeopt$(){var t=this;this.flag$=this.flagExt$,this.flagSelf$=function(i){return t.flagSync$(t.flags$own=i)}}flagExt$(t){return this.flagSync$(this.flags$ext=t)}flagSelf$(t){return this.flagDeopt$(),this.flagSelf$(t)}flagSync$(){return this.className=(this.flags$ns||"")+(this.flags$ext||"")+" "+(this.flags$own||"")+" "+(this.$flags||"")}set$(t,i){let u=Cr(this,t,Element);!u||!u.set?this.setAttribute(t,i):this[t]=i}get richValue(){return this.value}set richValue(t){this.value=t}};U(Eo,og,"Element",1,Element);var Au=Eo;Element.prototype.setns$=Element.prototype.setAttributeNS;Element.prototype[Qh]=!0;function z(c,t,i,u){let l=globalThis.document.createElement(c);return i&&(l.className=i),u!==null&&l.text$(u),t&&t[yo]&&t[yo](l),l}var ag=Symbol(),Co=class Co{set$(t,i){var p;let u=vo[p=this.nodeName]||(vo[p]={}),l=Bu(this,t,u);!l||!l.set?this.setAttribute(t,i):this[t]=i}flag$(t){let i=this.flags$ns;this.setAttribute("class",i?i+(this.flags$ext=t):this.flags$ext=t)}flagSelf$(t){var i=this;return this.flag$=function(u){return i.flagSync$(i.flags$ext=u)},this.flagSelf$=function(u){return i.flagSync$(i.flags$own=u)},this.flagSelf$(t)}flagSync$(){return this.setAttribute("class",(this.flags$ns||"")+(this.flags$ext||"")+" "+(this.flags$own||"")+" "+(this.$flags||""))}};U(Co,ag,"SVGElement",1,SVGElement);var Pu=Co,ug=Symbol(),Ao=class Ao{set src(t){if(this[Tu]!=t&&(this[Tu]=t,!0)){if(t&&t.adoptNode)t.adoptNode(this);else if(t&&t.type=="svg"){if(t.attributes)for(let i=t.attributes,u=0,l=Object.keys(i),p=l.length,f,b;u<p;u++)f=l[u],b=i[f],this.setAttribute(f,b);this.innerHTML=t.content}}}};U(Ao,ug,"SVGSVGElement",1,SVGSVGElement);var Iu=Ao;function it(c){return globalThis.document.createComment(c)}function $o(c){return globalThis.document.createTextNode(c)}var Mr=globalThis.navigator,sg=Mr&&Mr.vendor||"",Ou=Mr&&Mr.userAgent||"",lg=sg.indexOf("Apple")>-1||Ou.indexOf("CriOS")>=0||Ou.indexOf("FxiOS")>=0,Rr=!lg,Nu=new Map,mg=Symbol(),Po=class Po extends HTMLElement{connectedCallback(){return Rr?this.parentNode.removeChild(this):this.parentNode.connectedCallback()}disconnectedCallback(){if(!Rr)return this.parentNode.disconnectedCallback()}};U(Po,mg,"CustomHook",0);var xo=Po;window.customElements.define("i-hook",xo);function cg(c,t){let i=Nu.get(t);if(!i){i={};let u=t.prototype,l=[u];for(;(u=u&&Object.getPrototypeOf(u))&&u.constructor!=c.constructor;)l.unshift(u);for(let p=0,f=Bh(l),b=f.length;p<b;p++){let C=f[p],I=Object.getOwnPropertyDescriptors(C);Object.assign(i,I)}Nu.set(t,i)}return i}function vn(c,t,i,u,l){let p;typeof c!="string"&&c&&c.nodeName&&(c=c.nodeName);let f=wo[c]||c;if(ko[c]){let b=ko[c],C=b.prototype[Fr];if(C&&Rr)p=globalThis.document.createElement(C,{is:f});else if(b.create$&&C){p=globalThis.document.createElement(C),p.setAttribute("is",f);let I=cg(p,b);Object.defineProperties(p,I),p.__slots={},p.appendChild(globalThis.document.createElement("i-hook"))}else b.create$?(p=b.create$(p),p.__slots={}):console.warn("could not create tag "+c)}else p=globalThis.document.createElement(wo[c]||c);return p[Mu]=t,p[Fu](),p[Du](),u!==null&&p[Xh]("__").text$(u),(i||p.flags$ns)&&p.flag$(i||""),p}function yn(c,t,i={}){eg[c]=ng[c]=t,t.nodeName=c;let u=c,l=t.prototype;if(c.indexOf("-")==-1&&(u=""+c+"-tag",wo[c]=u),i.cssns){let p=(l._ns_||l[ju]||"")+" "+(i.cssns||"");l._ns_=p.trim()+" ",l[ju]=i.cssns}if(i.cssid){let p=(l.flags$ns||"")+" "+i.cssid;l[Jh]=i.cssid,l.flags$ns=p.trim()+" "}return l[Fr]&&!i.extends&&(i.extends=l[Fr]),i.extends?(l[Fr]=i.extends,ko[c]=t,Rr&&window.customElements.define(u,t,{extends:i.extends})):window.customElements.define(u,t),t}var hg=globalThis.imba||(globalThis.imba={});hg.document=globalThis.document;W();function Wt(c,t){var i;return typeof t=="string"?typeof c===t:(i=t[Symbol.hasInstance])==null?void 0:i.call(t,c)}function Io(c){let t;return c&&((t=c.toIterable)?t.call(c):c)}var zr=Symbol.for("#parent"),Lu=Symbol.for("#closestNode"),gg=Symbol.for("#isRichElement"),dg=Symbol.for("#afterVisit"),fg=Symbol.for("#getRenderContext"),zu=Symbol.for("#appendChild"),Hu=Symbol.for("#removeChild"),Vu=Symbol.for("#replaceChild"),kn=Symbol.for("#insertInto"),Kr=Symbol.for("#replaceWith"),Wu=Symbol.for("#insertChild"),qr=Symbol.for("#removeFrom"),Zu=Symbol.for("#placeChild"),pg=Symbol.for("#registerFunctionalSlot"),bg=Symbol.for("#getFunctionalSlot"),Uu=Symbol.for("#getSlot"),No=Symbol.for("##parent"),On=Symbol.for("##up"),Oo=Symbol.for("##flags"),vg=Symbol.for("#domFlags"),Ye=Symbol.for("#end"),Gu=Symbol.for("#textContent"),Br=Symbol.for("#textNode"),Lr=Symbol.for("#functionalSlots");var yg=Symbol(),Fo=class Fo{constructor(){this.childNodes=[]}log(...t){}hasChildNodes(){return!1}set[zr](t){this[No]=t}get[zr](){return this[No]||this[On]}get[Lu](){return this[zr][Lu]}get[gg](){return!0}get flags(){return this[Oo]||(this[Oo]=new yt(this))}flagSync$(){return this}[dg](){return this}[fg](t){return Nr(this,t)}};U(Fo,yg,"Fragment",16);var Nn=Fo,kg=0,wg=Symbol(),Mo=class Mo extends Nn{constructor(t,i){super(...arguments),this[On]=i,this.parentNode=null,this[vg]=t,this.childNodes=[],this[Ye]=it("slot"+kg++),i&&i[zu](this)}get[zr](){return this[No]||this.parentNode||this[On]}set textContent(t){this[Gu]=t}get textContent(){return this[Gu]}hasChildNodes(){for(let t=0,i=Io(this.childNodes),u=i.length;t<u;t++){let l=i[t];if(Wt(l,Nn)&&l.hasChildNodes())return!0;if(!Wt(l,So)){if(Wt(l,_o))return!0}}return!1}text$(t){return this[Br]?this[Br].textContent=t:this[Br]=this[Zu](t),this[Br]}appendChild(t){return this.parentNode&&t[kn](this.parentNode,this[Ye]),this.childNodes.push(t)}[zu](t){var i;return this.parentNode?t[kn](this.parentNode,this[Ye]):(i=t[On])!=null||(t[On]=this[On]||this),this.childNodes.push(t)}insertBefore(t,i){this.parentNode&&this.parentNode[Wu](t,i);let u=this.childNodes.indexOf(i);return u>=0&&this.childNodes.splice(u,0,t),t}[Hu](t){this.parentNode&&this.parentNode[Hu](t);let i=this.childNodes.indexOf(t);i>=0&&this.childNodes.splice(i,1)}[Vu](t,i){this.parentNode&&this.parentNode[Vu](t,i);let u=this.childNodes.indexOf(i);return this.childNodes[u]=t,t}[kn](t,i){let u=this.parentNode;if(this.parentNode!=t&&(this.parentNode=t,!0)){this[Ye]&&(i=this[Ye][kn](t,i));for(let l=0,p=Io(this.childNodes),f=p.length;l<f;l++)p[l][kn](t,i)}return this}[Kr](t,i){let u=t[kn](i,this[Ye]);return this[qr](i),u}[Wu](t,i){if(this.parentNode&&this.insertBefore(t,i||this[Ye]),i){let u=this.childNodes.indexOf(i);u>=0&&this.childNodes.splice(u,0,t)}else this.childNodes.push(t);return t}[qr](t){for(let i=0,u=Io(this.childNodes),l=u.length;i<l;i++)u[i][qr](t);return this[Ye]&&this[Ye][qr](t),this.parentNode=null,this}[Zu](t,i,u){let l=this.parentNode,p=typeof t;if(p==="undefined"||t===null){if(u&&Wt(u,So))return u;let f=it("");if(u){let b=this.childNodes.indexOf(u);return this.childNodes.splice(b,1,f),l&&u[Kr](f,l),f}return this.childNodes.push(f),l&&f[kn](l,this[Ye]),f}if(t===u)return t;if(p!=="object"){let f,b=t;if(u){if(Wt(u,qu))return u.textContent=b,u;{f=$o(b);let C=this.childNodes.indexOf(u);return this.childNodes.splice(C,1,f),l&&u[Kr](f,l),f}}else return this.childNodes.push(f=$o(b)),l&&f[kn](l,this[Ye]),f}else if(u){let f=this.childNodes.indexOf(u);return this.childNodes.splice(f,1,t),l&&u[Kr](t,l),t}else return this.childNodes.push(t),l&&t[kn](l,this[Ye]),t}};U(Mo,wg,"VirtualFragment",16);var Do=Mo;function Yu(c,t){let i=new Do(c,null);return i[On]=t,i}var xg=Symbol(),Ro=class Ro{[pg](t){let i=this[Lr]||(this[Lr]={});return i[t]||(i[t]=Yu(0,this))}[bg](t,i){let u=this[Lr];return u&&u[t]||this[Uu](t,i)}[Uu](t,i){var u;return t=="__"&&!this.render||!this.__slots?this:(u=this.__slots)[t]||(u[t]=Yu(0,this))}};U(Ro,xg,"Node",1,_o);var Qu=Ro;W();function _g(c){let t;return c&&((t=c.toIterable)?t.call(c):c)}var Sg=Symbol.for("#afterVisit"),Hr=Symbol.for("#insertInto"),Xu=Symbol.for("#appendChild"),$g=Symbol.for("#replaceWith"),Ko=Symbol.for("#removeFrom"),Tg=Symbol.for("#domFlags"),jg=Symbol.for("##parent"),Dn=Symbol.for("#end"),Eg=Symbol.for("#removeChild"),Cg=Symbol.for("#insertChild"),Ag=Symbol(),Bo=class Bo extends Nn{constructor(t,i){super(...arguments),this[Tg]=t,this[jg]=i,t&256||(this[Dn]=it("list")),this.$=this.childNodes,this.length=0,i&&i[Xu](this)}hasChildNodes(){return this.length!=0}[Sg](t){let i=this.length;if(this.length=t,i==t)return;let u=this.parentNode;if(!u)return;let l=this.childNodes,p=this[Dn];if(i>t)for(;i>t;)u[Eg](l[--i]);else if(t>i)for(;t>i;)u[Cg](l[i++],p);this.length=t}[Hr](t,i){this.parentNode=t,this[Dn]&&this[Dn][Hr](t,i),i=this[Dn];for(let u=0,l=_g(this.childNodes),p=l.length;u<p;u++){let f=l[u];if(u==this.length)break;f[Hr](t,i)}return this}[Xu](t){}[$g](t,i){let u=t[Hr](i,this[Dn]);return this[Ko](i),u}[Ko](t){let i=this.length;for(;i>0;)this.childNodes[--i][Ko](t);this[Dn]&&t.removeChild(this[Dn]),this.parentNode=null}};U(Bo,Ag,"IndexedTagFragment",16);var qo=Bo;function Ju(c,t){return new qo(c,t)}W();function es(c){let t;return c&&((t=c.toIterable)?t.call(c):c)}var Lo=Symbol.for("#appendChild"),Vr=Symbol.for("#insertChild"),Pg=Symbol.for("#replaceWith"),Wr=Symbol.for("#insertInto"),zo=Symbol.for("#removeFrom"),Ig=Symbol.for("#afterVisit"),Zr=Symbol.for("#domFlags"),ns=Symbol.for("##parent"),Fn=Symbol.for("#end"),ts=Symbol.for("#removeChild"),Og=Symbol(),Vo=class Vo extends Nn{constructor(t,i){super(...arguments),this[Zr]=t,this[ns]=i,this.changes=new Map,this.dirty=!1,this.array=this.childNodes,this.$=new In(this,Symbol()),t&256||(this[Fn]=it("map")),i&&i[Lo](this)}[Lo](t){if(this.parentNode)return this.parentNode[Vr](t,this[Fn])}hasChildNodes(){return this.childNodes.length!=0}push(t,i){if(!(this[Zr]&1)){this.array.push(t),this[Lo](t);return}let u=this.array[i];if(u!==t){this.dirty=!0;let l=this.array.indexOf(t),p=this.changes.get(t);l===-1?(this.array.splice(i,0,t),this.insertChild(t,i,l)):l===i+1?(u&&this.changes.set(u,-1),this.array.splice(i,1)):(l>=0&&this.array.splice(l,1),this.array.splice(i,0,t),this.moveChild(t,i,l)),p==-1&&this.changes.delete(t)}}insertChild(t,i,u){let l=this.parentNode;if(l)if(i>0){let p=this.array[i-1];l[Vr](t,p.nextSibling)}else l[Vr](t,this.childNodes[i+1]||this[Fn])}moveChild(t,i,u){return this.insertChild(t,i,u)}removeChild(t,i){t.parentNode&&t[zo](t.parentNode)}[Vr](t,i){}[Pg](t,i){let u=t[Wr](i,this[Fn]);return this[zo](i),u}[Wr](t,i){this[ns]=t;let u=this.parentNode;if(t!=u){this.parentNode=t;for(let l=0,p=es(this.array),f=p.length;l<f;l++)p[l][Wr](t,i);this[Fn]&&this[Fn][Wr](t,i)}return this}[zo](t){for(let i=0,u=es(this.array),l=u.length;i<l;i++){let p=u[i];t[ts](p)}return this[Fn]&&t[ts](this[Fn]),this.parentNode=null}[Ig](t){var i=this;if(!(this[Zr]&1)){this[Zr]|=1;return}if(this.dirty&&(this.changes.forEach(function(u,l){if(u==-1)return i.removeChild(l)}),this.changes.clear(),this.dirty=!1),this.array.length>t)for(;this.array.length>t;){let u=this.array.pop();this.removeChild(u)}}};U(Vo,Og,"KeyedTagFragment",16);var Ho=Vo;function Ur(c,t){return new Ho(c,t)}W();function rs(c,t){var i;return typeof t=="string"?typeof c===t:(i=t[Symbol.hasInstance])==null?void 0:i.call(t,c)}function Ng(c){let t;return c&&((t=c.toIterable)?t.call(c):c)}var Yr=Symbol.for("#__init__"),Dg=Symbol.for("##inited"),Fg=Symbol.for("#afterVisit"),Mg=Symbol.for("#insertInto"),Rg=Symbol.for("#insertIntoDeopt"),Kg=Symbol.for("#beforeReconcile"),qg=Symbol.for("#afterReconcile"),is=Symbol.for("#__hooks__"),ot=Symbol.for("#autorender"),Gr=Symbol.for("##visitContext"),os=Symbol.for("#domNode"),Bg=Symbol(),wt,Lg=new(wt=class{constructor(t=null){this[Yr](t)}[Yr](t=null,i=!0,u=!0){var l;this.items=t&&(l=t.items)!==void 0?l:[],this.current=t&&(l=t.current)!==void 0?l:null,this.lastQueued=t&&(l=t.lastQueued)!==void 0?l:null,this.tests=t&&(l=t.tests)!==void 0?l:0}flush(){let t=null;for(;t=this.items.shift();){if(!t.parentNode||t.hydratedΦ)continue;let i=this.current;this.current=t,t.__F|=1024;try{t.connectedCallback()}catch(u){console.error(u)}this.current=i}}queue(t){var i=this;let u=this.items.length,l=0,p=this.lastQueued;this.lastQueued=t;let f=Node.DOCUMENT_POSITION_PRECEDING,b=Node.DOCUMENT_POSITION_FOLLOWING;if(u){let C=this.items.indexOf(p),I=C,R=function(oe,X){return i.tests++,oe.compareDocumentPosition(X)};(C==-1||p.nodeName!=t.nodeName)&&(I=C=0);let O=this.items[I];for(;O&&R(O,t)&b;)O=this.items[++I];if(I!=C)O?this.items.splice(I,0,t):this.items.push(t);else{for(;O&&R(O,t)&f;)O=this.items[--I];I!=C&&(O?this.items.splice(I+1,0,t):this.items.unshift(t))}}else this.items.push(t),this.current||globalThis.queueMicrotask(this.flush.bind(this))}},U(wt,Bg,null,16),wt);var zg=Symbol(),Wo=class Wo extends HTMLElement{constructor(){super(),this.flags$ns&&(this.flag$=this.flagExt$),this.setup$(),this.build()}setup$(){return this.__slots={},this.__F=0}[Yr](){return this.__F|=3,this}[Dg](){if(this[is])return this[is].inited(this)}flag$(t){this.className=this.flags$ext=t}build(){return this}awaken(){return this}mount(){return this}remount(){return this.mount(),this}unmount(){return this}rendered(){return this}dehydrate(){return this}hydrate(){return this.autoschedule=!0,this}tick(t,i){return this.commit()}visit(){return this.commit()}commit(){return this.renderΦ?(this.__F|=256,this.render&&this.render(),this.rendered(),this.__F=(this.__F|512)&-257&-8193):(this.__F|=8192,this)}get autoschedule(){return(this.__F&64)!=0}set autoschedule(t){t?this.__F|=64:this.__F&=-65}set autorender(t){let i=this[ot]||(this[ot]={});i.value=t,this.mountedΦ&&Pe.schedule(this,i)}get renderΦ(){return!this.suspendedΦ}get mountingΦ(){return(this.__F&16)!=0}get mountedΦ(){return(this.__F&32)!=0}get awakenedΦ(){return(this.__F&8)!=0}get renderedΦ(){return(this.__F&512)!=0}get suspendedΦ(){return(this.__F&4096)!=0}get renderingΦ(){return(this.__F&256)!=0}get scheduledΦ(){return(this.__F&128)!=0}get hydratedΦ(){return(this.__F&2)!=0}get ssrΦ(){return(this.__F&1024)!=0}get scheduler(){return Pe}schedule(){return Pe.on("commit",this),this.__F|=128,this}unschedule(){return Pe.un("commit",this),this.__F&=-129,this}async suspend(t=null){let i=this.flags.incr("@suspended");return this.__F|=4096,rs(t,Function)&&(await t(),this.unsuspend()),this}unsuspend(){return this.flags.decr("@suspended")==0&&(this.__F&=-4097,this.commit()),this}[Fg](){if(this.visit(),this[Gr])return this[Gr]=null}[Mg](t,i=null){if(this.mountedΦ&&t.moveBefore)t.moveBefore(this,i);else{let u=(this.__F&32)!=0&&t==this.parentNode;u&&tt.moving.add(this),i?t.insertBefore(this,i):t.appendChild(this),u&&tt.moving.delete(this)}return this}[Rg](t,i){if(this.mountedΦ&&t.moveBefore)t.moveBefore(this[os]||this,i);else{let u=this[os]||this,l=(this.__F&32)!=0&&t==this.parentNode;l&&tt.moving.add(this),i?t.insertBefore(u,i):t.appendChild(u),l&&tt.moving.delete(this)}return this}[Kg](){return this.__F&1024&&(this.__F=this.__F&-1025,this.classList.remove("_ssr_"),this.flags$ext&&this.flags$ext.indexOf("_ssr_")==0&&(this.flags$ext=this.flags$ext.slice(5)),this.__F&512||(this.innerHTML="")),this[Gr]&&(this[Gr]=null),this}[qg](){return this}connectedMoveCallback(){this.remount()}connectedCallback(){let t=this.__F,i=t&1,u=t&8;if(t&16384){this.__F=t&-16385,this.remount();return}if(!i&&!(t&1024)){Lg.queue(this);return}if(t&48)return;this.__F|=16,i||this[Yr](),t&2||(this.flags$ext=this.className,this.__F|=2,this.hydrate(),this.commit()),u||(this.awaken(),this.__F|=8),nt(this,"mount",[this]);let l=this.mount();return l&&rs(l.then,Function)&&l.then(Pe.commit),t=this.__F=(this.__F|32)&-17,t&64&&this.schedule(),this[ot]&&Pe.schedule(this,this[ot]),this}disconnectedCallback(){var t;if(!(this.__F&16384)){if(tt.moving.size){for(let i of Ng(tt.moving))if((t=i==null?void 0:i.contains)!=null&&t.call(i,this)){this.__F|=16384;return}}if(this.__F=this.__F&-49,this.__F&128&&this.unschedule(),nt(this,"unmount",[this]),this.unmount(),this[ot])return Pe.unschedule(this,this[ot])}}dataForTagName(t){}};U(Wo,zg,"Component",16);var We=Wo;W();function Hg(c,t){var i;return typeof t=="string"?typeof c===t:(i=t[Symbol.hasInstance])==null?void 0:i.call(t,c)}var as=Symbol.for("#insertInto"),us=Symbol.for("#removeFrom");function Zo(c,t,i={}){let u=t||globalThis.document.body,l=c;if(Hg(c,Function)){let p=c,f=i.tick||(i.tick=function(){let b=i.context||(i.context=new In(u,null)),C=De.context;De.context=b;let I=c(b,i);return De.context==b&&(De.context=C),i.node!=I&&(i.node&&globalThis.imba.unmount(i.node),I?((i.node=I)[as](u),I.tick==We.prototype.tick&&(I.tick=i.tick,I.scheduledΦ),Pn(I,"unmount",function(){if(i.node==I)return i.node=null,Pe.unlisten("commit",i.tick)})):(i.node=I,Pe.unlisten("commit",i.tick))),I});return Pe.listen("commit",f),f()}else l.__F|=64;return l[as](u),l}function Vg(c){return c&&c[us]&&c.parentNode&&c[us](c.parentNode),c}var ss=globalThis.imba||(globalThis.imba={});ss.mount=Zo;ss.unmount=Vg;W();W();function ms(){return globalThis.imba.uses_events_keyboard=!0,!0}var Wg=Symbol(),Uo=class Uo{αesc(){return this.keyCode==27}αtab(){return this.keyCode==9}αenter(){return this.keyCode==13}αspace(){return this.keyCode==32}αup(){return this.keyCode==38}αdown(){return this.keyCode==40}αleft(){return this.keyCode==37}αright(){return this.keyCode==39}αdel(){return this.keyCode==8||this.keyCode==46}αkey(t){if(typeof t=="string")return this.key==t;if(typeof t=="number")return this.keyCode==t}αshift(){return!!this.shiftKey}αalt(){return!!this.altKey}αctrl(){return!!this.ctrlKey}αmeta(){return!!this.metaKey}αmod(){let t=globalThis.navigator.platform;return/^(Mac|iPhone|iPad|iPod)/.test(t||"")?!!this.metaKey:!!this.ctrlKey}};U(Uo,Wg,"KeyboardEvent",1,Ku);var ls=Uo;W();function cn(){return globalThis.imba.uses_events_mouse=!0,!0}var Zg=Symbol(),Go=class Go{αleft(){return this.button==0}αmiddle(){return this.button==1}αright(){return this.button==2}αshift(){return!!this.shiftKey}αalt(){return!!this.altKey}αctrl(){return!!this.ctrlKey}αmeta(){return!!this.metaKey}αmod(){let t=globalThis.navigator.platform;return/^(Mac|iPhone|iPad|iPod)/.test(t||"")?!!this.metaKey:!!this.ctrlKey}};U(Go,Zg,"MouseEvent",1,Ru);var cs=Go;function hn(c,t){var i;return typeof t=="string"?typeof c===t:(i=t[Symbol.hasInstance])==null?void 0:i.call(t,c)}function Yo(c){let t;return c&&((t=c.toIterable)?t.call(c):c)}var Ug=Symbol.for("#extendType"),Gg=Symbol.for("#modifierState"),Qr=Symbol.for("#sharedModifierState"),hs=Symbol.for("#onceHandlerEnd"),Qo=Symbol.for("#extendDescriptors"),Fe=Symbol.for("#context"),Xr=Symbol.for("#defaultPrevented"),Xo=Symbol.for("#stopPropagation"),gs=Symbol.for("#self"),Yg=Symbol.for("#target"),Qg=Symbol.for("#teleport");ms();cn();var Xg=Symbol(),Jo=class Jo{[Ug](t){var i,u;let l=t[Qo]||(t[Qo]=(i=Object.getOwnPropertyDescriptors(t.prototype),u=i.constructor,delete i.constructor,i));return Object.defineProperties(this,l)}};U(Jo,Xg,"CustomEvent",1,CustomEvent);var ds=Jo,Jg=Symbol(),ea=class ea{get original(){return this.originalEvent||this}get[Gg](){var t,i;return(t=this[Fe])[i=this[Fe].step]||(t[i]={})}get[Qr](){var t,i;return(t=this[Fe].handler)[i=this[Fe].step]||(t[i]={})}[hs](t){return Pn(this[Fe],"end",t)}αsel(t){return!!this.target.matches(String(t))}αclosest(t){return!!this.target.closest(String(t))}αprevent(){return this[Xr]=!0,this.preventDefault(),!0}αtrap(){return this[Xo]=!0,this.stopImmediatePropagation(),this[Xr]=!0,this.preventDefault(),!0}αfocin(t){var u;let i=this[Fe].element;return i=hn(t,Element)?t:t?i.closest(t):i,(u=i==null?void 0:i.contains)==null?void 0:u.call(i,globalThis.document.activeElement)}αlog(...t){return console.info(...t),!0}αtrusted(){return!!this.isTrusted}αuntrusted(){return!this.isTrusted}αif(t){return!!t}αwait(t=250){return new Promise(function(i){return setTimeout(i,Kt(t))})}αself(){return this.target==this[Fe].element}αcooldown(t=250){let i=this[Qr];return i.active?!1:(i.active=!0,i.target=this[Fe].element,i.target.flags.incr("cooldown"),this[hs](function(){return setTimeout(function(){return i.target.flags.decr("cooldown"),i.active=!1},Kt(t))}),!0)}αthrottle(t=250,i="throttled"){let u=this[Qr];return u.active?(u.next&&u.next(!1),new Promise(function(l){return u.next=function(p){return u.next=null,l(p)}})):(u.active=!0,u.el||(u.el=this[Fe].element),i&&u.el.flags.incr(i),Pn(this[Fe],"end",function(){let l=Kt(t);return u.interval=setInterval(function(){u.next?u.next(!0):(clearInterval(u.interval),i&&u.el.flags.decr(i),u.active=!1)},l)}),!0)}αdebounce(t=250){let i=this[Qr],u=this;return i.queue||(i.queue=[]),i.queue.push(i.last=u),new Promise(function(l){return setTimeout(function(){return i.last==u?(u.debounced=i.queue,i.last=null,i.queue=[],l(!0)):l(!1)},Kt(t))})}αflag(t,i){let{element:u,step:l,state:p,id:f,current:b}=this[Fe],C=hn(i,Element)?i:i?u.closest(i):u;if(!C)return!0;this[Fe].commit=!0,p[l]=f,C.flags.incr(t);let I=Date.now();return Pn(b,"end",function(){let R=Date.now()-I,O=Math.max(250-R,0);return setTimeout(function(){return C.flags.decr(t)},O)}),!0}αbusy(t){return this.αflag("busy",t)}αoutside(){let{handler:t}=this[Fe];if(t&&t[gs])return!t[gs].parentNode.contains(this.target)}async αpost(t,i={}){return await globalThis.fetch(t,{method:"POST",...i})}async αfetch(t,i={}){return await globalThis.fetch(t,i)}};U(ea,Jg,"Event",1,Event);var fs=ea,ed=Symbol(),na=class na{αself(){let t=this[Fe].element;return this.type=="focusout"?this.relatedTarget&&!t.contains(this.relatedTarget):this.type=="focusin"?!this.relatedTarget||!t.contains(this.relatedTarget):this.target==t}};U(na,ed,"FocusEvent",1,FocusEvent);var ps=na;function Mn(){return globalThis.imba.uses_events=!0,!0}var nd=Symbol(),ta=class ta{constructor(t,i){this.params=t,this.closure=i}getHandlerForMethod(t,i){return t?t[i]?t:this.getHandlerForMethod(t.parentNode,i):null}abortCurrentHandlers(){var t;if(this.currentEvents)for(let i of Yo(this.currentEvents))i.aborted=!0,(t=i==null?void 0:i.resolver)==null||t.call(i,!0);return this}emit(t,...i){return nt(this,t,i)}on(t,...i){return Ar(this,t,...i)}once(t,...i){return Pn(this,t,...i)}un(t,...i){return Ji(this,t,...i)}get passiveΦ(){return this.params.passive}get captureΦ(){return this.params.capture}get silentΦ(){return this.params.silent}get globalΦ(){return this.params.global}async handleEvent(t){if(this.disabled)return;let i=this[Yg]||t.currentTarget,u=this.params,l=null,p=u.silence||u.silent;this.count||(this.count=0),this.state||(this.state={});let f=this.lastState={element:i,event:t,modifiers:u,handler:this,id:++this.count,step:-1,state:this.state,commit:null,called:!1,current:null,aborted:!1};if(f.current=f,t.handle$mod&&t.handle$mod.apply(f,u.options||[])==!1)return;let b=Event[this.type+"$handle"]||Event[t.type+"$handle"]||this.guard;if(!(b&&b.apply(f,u.options||[])==!1)){this.currentEvents||(this.currentEvents=new Set),this.currentEvents.add(f);for(let C=0,I=Object.keys(u),R=I.length,O,oe;C<R&&(O=I[C],oe=u[O],!f.aborted);C++){if(f.step++,O[0]=="_")continue;O.indexOf("~")>0&&(O=O.split("~")[0]);let X=null,ee=[t,f],le,P=null,J,ue=!1,me=typeof O=="string";if(O[0]=="$"&&O[1]=="_"&&hn(oe[0],Function))t[Fe]=f,O=oe[0],f.called=!0,O.passive||(f.commit=!0),ee=[t,f].concat(oe.slice(1)),P=i;else if(hn(oe,Array)){ee=oe.slice(),X=ee;for(let Y=0,ae=Yo(ee),ce=ae.length;Y<ce;Y++){let te=ae[Y];if(typeof te=="string"&&te[0]=="~"&&te[1]=="$"){let ne=te.slice(2).split("."),pe=f[ne.shift()]||t;for(let ke=0,Be=Yo(ne),Re=Be.length;ke<Re;ke++){let we=Be[ke];pe=pe?pe[we]:void 0}ee[Y]=pe}}}if(typeof O=="string"&&(J=O.match(/^(emit|flag|mod|moved|pin|fit|refit|map|remap|css)-(.+)$/))&&(X||(X=ee=[]),ee.unshift(J[2]),O=J[1]),O=="trap")t[Xo]=!0,t.stopImmediatePropagation(),t[Xr]=!0,t.preventDefault();else if(O=="stop")t[Xo]=!0,t.stopImmediatePropagation();else if(O=="prevent")t[Xr]=!0,t.preventDefault();else if(O=="commit")f.commit=!0;else if(O=="once")i.removeEventListener(t.type,this);else{if(O=="options"||O=="silence"||O=="silent")continue;if(O=="emit"){let Y=ee[0],ae=ee[1];f.called=!0;let ce=new CustomEvent(Y,{bubbles:!0,detail:ae});ce.originalEvent=t;let Q=(this[Qg]||i).dispatchEvent(ce)}else if(typeof O=="string"){O[0]=="!"&&(ue=!0,O=O.slice(1));let Y="α"+O,ae=t[Y];ae||(ae=this.type&&Event[this.type+"$"+O+"$mod"]),ae||(ae=t[O+"$mod"]||Event[t.type+"$"+O]||Event[O+"$mod"]),hn(ae,Function)?(O=ae,P=f,ee=X||[],t[Y]&&(P=t,t[Fe]=f)):O[0]=="_"?(O=O.slice(1),P=this.closure):P=this.getHandlerForMethod(i,O)}}try{hn(O,Function)?le=O.apply(P||i,ee):P&&(le=P[O].apply(P,ee)),le&&hn(le.then,Function)&&le!=Pe.$promise&&(f.commit&&!p&&Pe.commit(),le=await le)}catch(Y){l=Y;break}if(ue&&le===!0||!ue&&le===!1)break;f.value=le}if(nt(f,"end",f),f.commit&&!p&&Pe.commit(),this.currentEvents.delete(f),this.currentEvents.size==0&&this.emit("idle"),l!=null){if(this.type!="error"){let C=hn(l,Error)?l.message:l,I=new CustomEvent("error",{detail:C,bubbles:!0,cancelable:!0});I.error=l,I.originalEvent=t;let R=i.dispatchEvent(I);if(I.defaultPrevented)return}throw l}return f}}};U(ta,nd,"EventHandler",16);var Jr=ta,td=Symbol(),ra=class ra{on$(t,i,u){let l="on$"+t,p=i.capture||!1,f=i.passive,b,C=p;return f&&(C={passive:f,capture:p}),hn(this[l],Function)?(this[l].length>2&&(b=new Jr(i,u)),b=this[l](i,u,b,C)):(b=new Jr(i,u),this.addEventListener(t,b,C)),b}on$error(t,i,u,l){var p;return(p=t.options)!=null&&p.length&&(u.guard=function(...f){let b=this.event.error;return!!f.find(function(I){return hn(b,I)})}),this.addEventListener("error",u,l),u}};U(ra,td,"Element",1,Element);var bs=ra;W();W();var vs=`{"mi": "tangata", "gr": "noun", "en": ["human being, person, man"]}
{"mi": "whare", "gr": "noun", "en": ["house", "any building", "people in a house", "suit (cards)"]}
{"mi": "wā", "gr": "noun", "en": ["time"]}
{"mi": "whenua", "gr": "noun", "en": ["land", "country", "state", "ground", "placenta, afterbirth"]}
{"mi": "mahi", "gr": "noun", "en": ["work, job, employment, trade (work), practice, occupation, activity, exercise, operation, function", "abundance, lots of, many, heaps of"]}
{"mi": "kōrero", "gr": "noun", "en": ["A story.", "A conversation.", "A discussion."]}
{"mi": "ao", "gr": "noun", "en": ["daytime"]}
{"mi": "ao", "gr": "noun", "en": ["world"]}
{"mi": "ao", "gr": "noun", "en": ["cloud"]}
{"mi": "wai", "gr": "noun", "en": ["water (clear liquid H₂O)", "liquid", "juice of plants from fruits etc.", "beverage from such liquids"]}
{"mi": "tāne", "gr": "noun", "en": ["man (adult male human)"]}
{"mi": "wahine", "gr": "noun", "en": ["woman"]}
{"mi": "tama", "gr": "noun", "en": ["child regardless of sex", "any male child i.e. son, nephew"]}
{"mi": "tamaiti", "gr": "noun", "en": ["child"]}
{"mi": "whānau", "gr": "noun", "en": ["an extended family; a group of family members"]}
{"mi": "reo", "gr": "noun", "en": ["voice", "speech, utterance", "language"]}
{"mi": "iwi", "gr": "noun", "en": ["bone", "strength", "extended kinship group, tribe, nation, people, nationality, race (often refers to a large group of people descended from a common ancestor and associated with a distinct territory)"]}
{"mi": "kura", "gr": "noun", "en": ["school, an educational institution providing primary and secondary education."]}
{"mi": "kura", "gr": "noun", "en": ["liquid container, tank"]}
{"mi": "marae", "gr": "noun", "en": ["The courtyard of a wharenui or meeting-house and the buildings around it."]}
{"mi": "ingoa", "gr": "noun", "en": ["name"]}
{"mi": "rangi", "gr": "noun", "en": ["sky, heaven", "weather", "tune, air, melody"]}
{"mi": "rangi", "gr": "noun", "en": ["daytime, day, period of brightness from morning to afternoon"]}
{"mi": "tau", "gr": "noun", "en": ["year (time it takes for the Earth to complete one revolution of the Sun)", "year (time it takes for any planetary body to make one revolution around another body)", "year (a period between set dates that mark a year)", "year (scheduled part of a calendar year spent in a specific activity)", "year (Julian year)", "year (level or grade at school or college)"]}
{"mi": "tau", "gr": "noun", "en": ["knowledge"]}
{"mi": "pō", "gr": "noun", "en": ["night", "day, time cycle of 24 hours"]}
{"mi": "ahi", "gr": "noun", "en": ["fire (oxidation reaction)"]}
{"mi": "mea", "gr": "noun", "en": ["thing", "a so-and-so (something, someone, or a place the speaker does not know)"]}
{"mi": "mea", "gr": "noun", "en": ["mayor"]}
{"mi": "kai", "gr": "noun", "en": ["food"]}
{"mi": "pukapuka", "gr": "noun", "en": ["Brachyglottis repanda, shrub with soft leaves with white undersides.", "book"]}
{"mi": "kupu", "gr": "noun", "en": ["word, vocabulary", "saying, talk", "message, statement", "utterance", "lyric", "culm (of grass, bamboo)"]}
{"mi": "waiata", "gr": "noun", "en": ["song"]}
{"mi": "kaupapa", "gr": "noun", "en": ["level surface, floor, stage, platform, layer", "topic, policy, matter for discussion, plan, purpose, scheme, proposal, agenda, subject, programme, theme, issue, initiative", "raft", "main body of a cloak"]}
{"mi": "aroha", "gr": "noun", "en": ["love"]}
{"mi": "ringa", "gr": "noun", "en": ["hand", "arm", "weapon", "handlebar"]}
{"mi": "upoko", "gr": "noun", "en": ["head", "paragraph", "heading", "chapter", "headline"]}
{"mi": "kanohi", "gr": "noun", "en": ["face", "view, sight, vision", "eye, eyeball"]}
{"mi": "mata", "gr": "noun", "en": ["eye (organ of sight)", "edge, point, tip", "face", "surface", "headland", "mesh (of a net)"]}
{"mi": "waewae", "gr": "noun", "en": ["foot", "leg", "footprint", "footstep"]}
{"mi": "waewae", "gr": "noun", "en": ["New Zealand rough skate (Zearaja nasuta)"]}
{"mi": "tinana", "gr": "noun", "en": ["body"]}
{"mi": "ngākau", "gr": "noun", "en": ["heart, mind, soul", "intestines, bowels"]}
{"mi": "manawa", "gr": "noun", "en": ["belly, stomach", "heart (of a person)", "heart (seat of affections)", "breath", "mind", "spirit"]}
{"mi": "wairua", "gr": "noun", "en": ["a soul or spirit of a person", "attitude, quintessence, mood, essence", "bonfire moss (Funaria hygrometrica)"]}
{"mi": "mauri", "gr": "noun", "en": ["life", "life force or principle; metaphorical soul; source of life", "heart, seat of emotions"]}
{"mi": "mana", "gr": "noun", "en": ["power; mana"]}
{"mi": "tapu", "gr": "noun", "en": ["taboo, restriction (as a spiritual or supernatural condition)"]}
{"mi": "tapu", "gr": "noun", "en": ["mark or indentation left on a surface"]}
{"mi": "tikanga", "gr": "noun", "en": ["custom, convention, correct manner of doing things", "traditional lore and protocols", "reason, purpose", "meaning"]}
{"mi": "kawa", "gr": "noun", "en": ["a ceremony to remove tapu from a new house or canoe", "karakia (“ritual chants”) and customs for the opening of new houses, canoes and other events", "marae protocol - customs of the marae and wharenui, particularly those related to formal activities such as pōhiri, speeches and mihimihi", "acid", "bitterness", "kava, plant brought by ancestors from the South Pacific, Piper methysticum."]}
{"mi": "whakapapa", "gr": "noun", "en": ["layering, the act of layering", "Genealogy, genealogical table, descent, lineage."]}
{"mi": "hapū", "gr": "noun", "en": ["clan or subtribe"]}
{"mi": "matua", "gr": "noun", "en": ["parent", "father"]}
{"mi": "kuia", "gr": "noun", "en": ["grandmother, old woman, female elder"]}
{"mi": "kaumātua", "gr": "noun", "en": ["elder"]}
{"mi": "tuakana", "gr": "noun", "en": ["older brother of a male", "older sister of a female"]}
{"mi": "teina", "gr": "noun", "en": ["younger brother of a male", "younger sister of a female", "any junior relative including cousins"]}
{"mi": "tuahine", "gr": "noun", "en": ["sister (of a man)"]}
{"mi": "tungāne", "gr": "noun", "en": ["brother (of a female)", "male cousin (of a female)"]}
{"mi": "whaea", "gr": "noun", "en": ["mother", "aunt"]}
{"mi": "papa", "gr": "noun", "en": ["board, plank", "chart", "slab", "floor", "box, chest", "victim, sacrifice", "buttock, flank"]}
{"mi": "mokopuna", "gr": "noun", "en": ["grandchild"]}
{"mi": "rangatira", "gr": "noun", "en": ["chief, chieftain, chieftainess, though of lesser rank than an ariki (paramount chief)", "highborn person", "master, mistress", "leader, boss"]}
{"mi": "rangatahi", "gr": "noun", "en": ["youth", "younger generation", "fishing net about 20 meters long that is smaller than a kaharoa"]}
{"mi": "tauira", "gr": "noun", "en": ["illustration", "formula", "pattern, design", "example, model, template", "precedent", "draft", "sample, specimen", "student, pupil, apprentice, cadet"]}
{"mi": "ākonga", "gr": "noun", "en": ["learner, pupil"]}
{"mi": "kaimahi", "gr": "noun", "en": ["worker, employee"]}
{"mi": "kaitiaki", "gr": "noun", "en": ["guardian, trustee"]}
{"mi": "kaikōrero", "gr": "noun", "en": ["speaker (one who speaks)"]}
{"mi": "kaiwhakahaere", "gr": "noun", "en": ["administrator, boss, director, organizer, manager", "council, advocate, agent, advisor"]}
{"mi": "wāhi", "gr": "noun", "en": ["a part, a portion", "a place, a location", "compartment or room of a house", "opening, any open area"]}
{"mi": "taha", "gr": "noun", "en": ["side, edge", "shore, bank", "part, section"]}
{"mi": "taonga", "gr": "noun", "en": ["treasure", "property"]}
{"mi": "rākau", "gr": "noun", "en": ["A weapon; a club or bat.", "A tree, stick, spar, or mast.", "Wood or timber."]}
{"mi": "manu", "gr": "noun", "en": ["bird (animal)", "kite", "a designated territory for muttonbirding.", "a person held in high esteem"]}
{"mi": "ika", "gr": "noun", "en": ["fish, marine animal, aquatic animal - any creature that swims in fresh or salt water including marine mammals such as whales", "slain warrior, victim", "prized possession"]}
{"mi": "ika", "gr": "noun", "en": ["cluster, band, troop, group, company, heap"]}
{"mi": "kurī", "gr": "noun", "en": ["dog", "horse"]}
{"mi": "ngeru", "gr": "noun", "en": ["cat (Felis silvestris catus)"]}
{"mi": "poaka", "gr": "noun", "en": ["pig", "pork"]}
{"mi": "kau", "gr": "noun", "en": ["a cow"]}
{"mi": "hipi", "gr": "noun", "en": ["sheep"]}
{"mi": "hōiho", "gr": "noun", "en": ["horse (Equus caballus)"]}
{"mi": "awa", "gr": "noun", "en": ["river, creek, stream", "groove, fluting", "channel", "landing for canoes"]}
{"mi": "moana", "gr": "noun", "en": ["ocean, sea"]}
{"mi": "maunga", "gr": "noun", "en": ["mountain"]}
{"mi": "motu", "gr": "noun", "en": ["cut, wound", "island", "clump of trees", "ship", "land", "country, nation"]}
{"mi": "roto", "gr": "noun", "en": ["interior", "lake"]}
{"mi": "marama", "gr": "noun", "en": ["moon", "month"]}
{"mi": "ata", "gr": "noun", "en": ["form, shape, image", "reflection", "shadow"]}
{"mi": "ata", "gr": "noun", "en": ["morning"]}
{"mi": "ahiahi", "gr": "noun", "en": ["evening (time of day)", "afternoon"]}
{"mi": "awatea", "gr": "noun", "en": ["daylight"]}
{"mi": "wiki", "gr": "noun", "en": ["week"]}
{"mi": "wiki", "gr": "noun", "en": ["wick; fuse"]}
{"mi": "tīmatanga", "gr": "noun", "en": ["beginning, introduction, start, commencement"]}
{"mi": "mutunga", "gr": "noun", "en": ["end; finish; conclusion"]}
{"mi": "takiwā", "gr": "noun", "en": ["territory, area, region", "time, period, season", "space", "setting"]}
{"mi": "tāone", "gr": "noun", "en": ["town, city, urban area"]}
{"mi": "kāinga", "gr": "noun", "en": ["The burning (of a fire)."]}
{"mi": "kāinga", "gr": "noun", "en": ["A place of residence or habitation.", "A country.", "A home."]}
{"mi": "pā", "gr": "noun", "en": ["fortified place", "fortified village", "screen or blockade"]}
{"mi": "pā", "gr": "noun", "en": ["clump, group or flock", "contact (netball, etc.)"]}
{"mi": "waka", "gr": "noun", "en": ["particular large canoes sometimes equipped with sails as continuous across Southeast Asia to Polynesia", "boat, canoe", "vehicle or any mode of transport", "spirit medium"]}
{"mi": "ara", "gr": "noun", "en": ["path (a trail for the use of, or worn by, pedestrians)", "path (a course taken)", "path (a metaphorical course)", "path (a method or direction of proceeding)", "road (a way for travel)", "road (a path in life)", "street (paved part of road in a village or a town)", "track (beaten path)", "track (course; way)", "track (path or course laid out for a race or exercise)", "track (permanent way; the rails)", "way (wide path)"]}
{"mi": "tiriti", "gr": "noun", "en": ["street"]}
{"mi": "tiriti", "gr": "noun", "en": ["treaty"]}
{"mi": "hōtēra", "gr": "noun", "en": ["hotel"]}
{"mi": "toa", "gr": "noun", "en": ["a warrior.", "bravery, courage", "a male."]}
{"mi": "toa", "gr": "noun", "en": ["a store or shop."]}
{"mi": "moni", "gr": "noun", "en": ["money, cash"]}
{"mi": "pūtea", "gr": "noun", "en": ["a special basket woven from leaves of harakeke (Phormium tenax) to hold belongings like clothing", "savings", "fund", "finance"]}
{"mi": "utu", "gr": "noun", "en": ["pay; payment; salary", "revenge; payback"]}
{"mi": "nama", "gr": "noun", "en": ["number, numeral", "bill, invoice"]}
{"mi": "hiahia", "gr": "noun", "en": ["desire, wish, want", "aspiration, hope", "need"]}
{"mi": "take", "gr": "noun", "en": ["reason, purpose", "cause", "origin, source, beginning", "root", "stump", "topic, subject, matter, issue, concern", "claim, right", "plan", "base, foot (e.g. of a hill)"]}
{"mi": "pātai", "gr": "noun", "en": ["a question"]}
{"mi": "momo", "gr": "noun", "en": ["a type, a kind, a species, a breed, a variety, a race, a genre"]}
{"mi": "āhua", "gr": "noun", "en": ["appearance, form", "shape", "character, trait"]}
{"mi": "huarere", "gr": "noun", "en": ["weather"]}
{"mi": "mātauranga", "gr": "noun", "en": ["knowledge, wisdom", "study of", "education", "sage, scholar"]}
{"mi": "akoranga", "gr": "noun", "en": ["learning, lesson"]}
{"mi": "pānui", "gr": "noun", "en": ["public notice, announcement, poster, proclamation"]}
{"mi": "tuhi", "gr": "noun", "en": ["pattern, adornment"]}
{"mi": "nūpepa", "gr": "noun", "en": ["newspaper"]}
{"mi": "pepa", "gr": "noun", "en": ["paper"]}
{"mi": "rorohiko", "gr": "noun", "en": ["computer"]}
{"mi": "ipurangi", "gr": "noun", "en": ["source (of a stream)", "Internet"]}
{"mi": "waea", "gr": "noun", "en": ["telephone, phone", "telegram, telephone message, cable, wire"]}
{"mi": "motokā", "gr": "noun", "en": ["car, automobile"]}
{"mi": "rererangi", "gr": "noun", "en": ["airplane, aeroplane, aircraft"]}
{"mi": "whetū", "gr": "noun", "en": ["star (luminous celestial body)"]}
{"mi": "hau", "gr": "noun", "en": ["essence", "ceremonial offering of food to an atua", "a present given in return for another gift", "wind, breeze, breath", "air", "excess", "external angle, corner, obtuse angle"]}
{"mi": "ua", "gr": "noun", "en": ["rain (condensed water from a cloud)"]}
{"mi": "ua", "gr": "noun", "en": ["vein (blood vessel)"]}
{"mi": "taru", "gr": "noun", "en": ["weed, grass; small vegetation"]}
{"mi": "pua", "gr": "noun", "en": ["flower"]}
{"mi": "rau", "gr": "noun", "en": ["leaf", "sheet of paper", "page of a book"]}
{"mi": "kahu", "gr": "noun", "en": ["cloak, cape", "garment, clothing", "covering, surface"]}
{"mi": "parāoa", "gr": "noun", "en": ["sperm whale (Physeter macrocephalus)", "whale", "whalebone", "weapon made of whalebone"]}
{"mi": "parāoa", "gr": "noun", "en": ["flour", "bread"]}
{"mi": "miraka", "gr": "noun", "en": ["milk"]}
{"mi": "huka", "gr": "noun", "en": ["sugar"]}
{"mi": "huka", "gr": "noun", "en": ["snow, foam, froth, any white form of precipitation"]}
{"mi": "tī", "gr": "noun", "en": ["Cordyline australis"]}
{"mi": "tī", "gr": "noun", "en": ["tea (drink)"]}
{"mi": "kawhe", "gr": "noun", "en": ["coffee"]}
{"mi": "pia", "gr": "noun", "en": ["beer"]}
{"mi": "waipiro", "gr": "noun", "en": ["alcohol, liquor"]}
{"mi": "hua", "gr": "noun", "en": ["fruit", "product, outcome", "egg, roe", "benefit, gain, asset"]}
{"mi": "āporo", "gr": "noun", "en": ["apple"]}
{"mi": "kūmara", "gr": "noun", "en": ["A sweet potato"]}
{"mi": "taringa", "gr": "noun", "en": ["ear", "several types of jelly fungi"]}
{"mi": "ihu", "gr": "noun", "en": ["nose (organ of the face)", "prow of a boat"]}
{"mi": "waha", "gr": "noun", "en": ["mouth", "any opening or entrance"]}
{"mi": "ngutu", "gr": "noun", "en": ["lip", "beak, bill", "mouth (of a cave, river, etc.)", "lip, rim (of a vessel)", "mouthpiece", "muzzle"]}
{"mi": "niho", "gr": "noun", "en": ["tooth", "sharp edge", "bud of a plant"]}
{"mi": "arero", "gr": "noun", "en": ["tongue"]}
{"mi": "makawe", "gr": "noun", "en": ["hair", "ringlet; a lock of it"]}
{"mi": "kiri", "gr": "noun", "en": ["skin", "peel, bark, rind", "hide, leather", "surface"]}
{"mi": "ate", "gr": "noun", "en": ["liver (organ of the body)", "any kind of organ (in compound words)", "heart (seat of emotions)"]}
{"mi": "puku", "gr": "noun", "en": ["swelling, lump", "stomach, belly"]}
{"mi": "tuarā", "gr": "noun", "en": ["back (part of the body)", "ally, supporter", "back"]}
{"mi": "uma", "gr": "noun", "en": ["chest"]}
{"mi": "riri", "gr": "noun", "en": ["anger, rage, wrath", "fight, quarrel, battle"]}
{"mi": "hari", "gr": "noun", "en": ["song, dance", "happiness, elation, joy"]}
{"mi": "ora", "gr": "noun", "en": ["life", "existence"]}
{"mi": "mate", "gr": "noun", "en": ["death", "sickness, illness, disease", "misfortune, calamity, defect", "desire, need, want"]}
{"mi": "atua", "gr": "noun", "en": ["god (deity)"]}
{"mi": "karakia", "gr": "noun", "en": ["an incantation, ritual chant, spell (related to Maori traditions)", "a prayer, grace, blessing (related to introduced religions)"]}
{"mi": "mihi", "gr": "noun", "en": ["A welcome", "A speech made to welcome somebody"]}
{"mi": "haka", "gr": "noun", "en": ["A war dance; a haka."]}
{"mi": "hui", "gr": "noun", "en": ["gathering, meeting, assembly, seminar, conference"]}
{"mi": "pōwhiri", "gr": "noun", "en": ["welcoming, a welcome", "invitation"]}
{"mi": "hākari", "gr": "noun", "en": ["platform to display or spread food for a feast", "feast, banquet, any huge meal for a special occasion", "gift"]}
{"mi": "hākari", "gr": "noun", "en": ["fish roe", "fine dosinia"]}
{"mi": "tangihanga", "gr": "noun", "en": ["funeral"]}
{"mi": "whanaungatanga", "gr": "noun", "en": ["close relationship"]}
{"mi": "manaakitanga", "gr": "noun", "en": ["Showing kindness, generosity, respect to others."]}
{"mi": "kaitiakitanga", "gr": "noun", "en": ["guardianship; trusteeship", "trust"]}
{"mi": "rangatiratanga", "gr": "noun", "en": ["chieftainship", "right to exercise authority", "kingdom", "self-determination", "independence"]}
{"mi": "whakawhanaungatanga", "gr": "noun", "en": ["The process of establishing relationships."]}
{"mi": "pakanga", "gr": "noun", "en": ["war; battle"]}
{"mi": "rongoā", "gr": "noun", "en": ["medicine; drug; medication; treatment; remedy; tonic", "solution (to a problem)"]}
{"mi": "tākuta", "gr": "noun", "en": ["doctor"]}
{"mi": "wānanga", "gr": "noun", "en": ["sacred ancestral medium", "person who is knowledgeable in traditional lore", "traditional knowledge, lore", "conference, forum or seminar", "instructor or expert"]}
{"mi": "wharekai", "gr": "noun", "en": ["any eating establishment e.g. restaurants, canteens etc.", "The dining hall in a marae."]}
{"mi": "wharenui", "gr": "noun", "en": ["wharenui"]}
{"mi": "rūma", "gr": "noun", "en": ["room (of a building)"]}
{"mi": "tēpu", "gr": "noun", "en": ["table"]}
{"mi": "pouaka", "gr": "noun", "en": ["box (cuboid space; container)", "Poa triodioides, a grass that grows on coastal dunes."]}
{"mi": "pēke", "gr": "noun", "en": ["bank"]}
{"mi": "pēke", "gr": "noun", "en": ["bag, sack"]}
{"mi": "kete", "gr": "noun", "en": ["basket"]}
{"mi": "pōro", "gr": "noun", "en": ["ball"]}
{"mi": "whutupōro", "gr": "noun", "en": ["rugby"]}
{"mi": "kirikiti", "gr": "noun", "en": ["cricket"]}
{"mi": "ama", "gr": "noun", "en": ["outrigger (of a canoe)", "bargeboard support"]}
{"mi": "hoe", "gr": "noun", "en": ["oar", "paddle"]}
{"mi": "tai", "gr": "noun", "en": ["nearshore waters", "seawards area including the coast", "tide"]}
{"mi": "one", "gr": "noun", "en": ["sand", "mud", "soil, earth", "beach"]}
{"mi": "repo", "gr": "noun", "en": ["swamp"]}
{"mi": "ngaru", "gr": "noun", "en": ["wave"]}
{"mi": "pūkeko", "gr": "noun", "en": ["pūkeko (Porphyrio melanotus)"]}
{"mi": "kiwi", "gr": "noun", "en": ["kiwi (bird)"]}
{"mi": "tūī", "gr": "noun", "en": ["tui (Prosthemadera novaeseelandiae)"]}
{"mi": "kererū", "gr": "noun", "en": ["The New Zealand pigeon (species Hemiphaga novaeseelandiae)."]}
{"mi": "kākāpō", "gr": "noun", "en": ["kakapo (Strigops habroptilus)"]}
{"mi": "kākā", "gr": "noun", "en": ["a parrot (especially the kaka)", "kaka (Nestor meridionalis)"]}
{"mi": "kea", "gr": "noun", "en": ["snot", "the kea (Nestor notabilis)"]}
{"mi": "tuatara", "gr": "noun", "en": ["tuatara"]}
{"mi": "kōura", "gr": "noun", "en": ["crayfish; lobster"]}
{"mi": "kōura", "gr": "noun", "en": ["gold"]}
{"mi": "tuna", "gr": "noun", "en": ["eel of various species, including longfin eels (Anguilla dieffenbachii) and shortfin eels (Anguilla australis)"]}
{"mi": "tāmure", "gr": "noun", "en": ["Australasian snapper, New Zealand snapper, silver seabream (Pagrus auratus, syn. Chrysophrys auratus), a silvery pinkish to golden fish with numerous bright blue spots over upper sides."]}
{"mi": "pāua", "gr": "noun", "en": ["Any of the three species of large edible sea snails, marine gastropod molluscs of the family Haliotidae (sole genus Haliotis), known in the United States and Australia as abalone, and in the United Kingdom as ormer shells."]}
{"mi": "kina", "gr": "noun", "en": ["sea urchin"]}
{"mi": "kuku", "gr": "noun", "en": ["any type of mussel"]}
{"mi": "kuku", "gr": "noun", "en": ["pincers, tweezers, any tool or item that nips or pinches", "finger or toe nail, alternative form of matikuku", "attraction"]}
{"mi": "pipi", "gr": "noun", "en": ["The edible saltwater clam Paphies australis, of the family Mesodesmatidae, endemic to New Zealand."]}
{"mi": "tio", "gr": "noun", "en": ["ice", "rock oyster (Saccostrea spp.)", "rough tree fern (Alsophila australis)"]}
{"mi": "tatau", "gr": "noun", "en": ["number, tally", "count, score"]}
{"mi": "tatau", "gr": "noun", "en": ["door"]}
{"mi": "tatauranga", "gr": "noun", "en": ["statistics (mathematical science)"]}
{"mi": "mano", "gr": "noun", "en": ["multitude, host (of a very large amount)"]}
{"mi": "mano", "gr": "noun", "en": ["interior, heart, core"]}
{"mi": "mano", "gr": "noun", "en": ["creed"]}
{"mi": "whakataukī", "gr": "noun", "en": ["proverb", "aphorism"]}
{"mi": "pepeha", "gr": "noun", "en": ["an introductory speech detailing one's ancestry", "proverb; motto; slogan"]}
{"mi": "pūtaiao", "gr": "noun", "en": ["science"]}
{"mi": "pāngarau", "gr": "noun", "en": ["mathematics"]}
{"mi": "toi", "gr": "noun", "en": ["tip, point", "finger"]}
{"mi": "toi", "gr": "noun", "en": ["knowledge, art"]}
{"mi": "ātaahua", "gr": "noun", "en": ["beauty"]}
{"mi": "ture", "gr": "noun", "en": ["law"]}
{"mi": "kāwanatanga", "gr": "noun", "en": ["Government."]}
{"mi": "pāremata", "gr": "noun", "en": ["parliament"]}
{"mi": "tōrangapū", "gr": "noun", "en": ["politics"]}
{"mi": "rōpū", "gr": "noun", "en": ["An organized group of people; group, party, organisation, committee, company, gang, association, entourage, etc.", "category"]}
{"mi": "kapa", "gr": "noun", "en": ["team, group", "row, line"]}
{"mi": "kapa", "gr": "noun", "en": ["copper"]}
{"mi": "pikitia", "gr": "noun", "en": ["picture, image"]}
{"mi": "kainga", "gr": "noun", "en": ["The refuse of a meal."]}
{"mi": "whakaahua", "gr": "noun", "en": ["photograph, picture, shot", "image", "photocopy", "illustration", "design"]}
{"mi": "īmēra", "gr": "noun", "en": ["email, electronic mail"]}
{"mi": "tamahine", "gr": "noun", "en": ["girl, female child", "daughter"]}
{"mi": "hoa", "gr": "noun", "en": ["friend, companion, mate, partner, spouse, ally"]}
{"mi": "hoa", "gr": "noun", "en": ["pitch (of a roof)"]}
{"mi": "hoa", "gr": "noun", "en": ["charm, spell, enchantment"]}
{"mi": "whanaunga", "gr": "noun", "en": ["familial relative"]}
{"mi": "tangata whenua", "gr": "noun", "en": ["indigenous people", "hosts"]}
{"mi": "kapa haka", "gr": "noun", "en": ["Māori performing arts group."]}
{"mi": "whare wānanga", "gr": "noun", "en": ["a type of traditional Maori school.", "university, polytechnic"]}
{"mi": "whare karakia", "gr": "noun", "en": ["a religious building: a church, a synagogue, a mosque, a house of prayer"]}
{"mi": "te reo Māori", "gr": "noun", "en": ["the Maori language"]}
{"mi": "tangata tiriti", "gr": "noun", "en": ["\\"People of the Treaty\\", or New Zealanders of non-Māori origin.", "Includes all non-Māori people who have a right to live in New Zealand under the Treaty of Waitangi."]}
{"mi": "whare noho", "gr": "noun", "en": ["hostel, alternative form of wharenoho"]}
{"mi": "mahi kāinga", "gr": "noun", "en": ["homework (preliminary or preparatory work)"]}
{"mi": "papa tapeke", "gr": "noun", "en": ["scoreboard"]}
{"mi": "mate huka", "gr": "noun", "en": ["diabetes"]}
{"mi": "whare herehere", "gr": "noun", "en": ["prison"]}
{"mi": "whiti", "gr": "noun", "en": ["shock, alarm, fright"]}
{"mi": "whiti", "gr": "noun", "en": ["crossbeam, crossbar"]}
{"mi": "whiti", "gr": "noun", "en": ["shining"]}
{"mi": "whiti", "gr": "noun", "en": ["verse, stanza, paragraph, clause"]}
{"mi": "whiti", "gr": "noun", "en": ["wheat"]}
{"mi": "whiti", "gr": "noun", "en": ["fitness"]}
{"mi": "au", "gr": "noun", "en": ["current (water)", "whirlpool; rapid", "wake (of a canoe, etc.)", "sea; ocean"]}
{"mi": "au", "gr": "noun", "en": ["gall; gall bladder"]}
{"mi": "au", "gr": "noun", "en": ["smoke", "cloud", "mist; fog"]}
{"mi": "ahu", "gr": "noun", "en": ["mound"]}
{"mi": "pere", "gr": "noun", "en": ["karapapa (Alseuosmia macrophylla)", "Alseuosmia banksii var. linariifolia"]}
{"mi": "pere", "gr": "noun", "en": ["dart", "arrow", "an adze-shaped wooden hoe", "vector"]}
{"mi": "pere", "gr": "noun", "en": ["riddle"]}
{"mi": "pere", "gr": "noun", "en": ["bell"]}
{"mi": "uta", "gr": "noun", "en": ["interior (the inside regions of a country or island)", "land (from a sea or water perspective)", "the shore"]}
{"mi": "uta", "gr": "noun", "en": ["load", "contribution", "freight, cargo", "import; export"]}
{"mi": "taki", "gr": "noun", "en": ["a kākā snare", "beat"]}
{"mi": "tari", "gr": "noun", "en": ["plaiting of several strands"]}
{"mi": "tari", "gr": "noun", "en": ["noose (for catching birds)"]}
{"mi": "tari", "gr": "noun", "en": ["study, office (room)", "office, department (agency)"]}
{"mi": "poro", "gr": "noun", "en": ["butt or end of a rod, stick etc", "block, slab (from cutting elongated object)"]}
{"mi": "poro", "gr": "noun", "en": ["anything with a rounded or curvy surface", "ball"]}
{"mi": "poro", "gr": "noun", "en": ["any kind of Solanum plant"]}
{"mi": "poi", "gr": "noun", "en": ["lump of dirt, clump of hair etc", "ball, sphere", "poi (tethered weights used in a poi performance)", "a poi performance or the accompanying music"]}
{"mi": "kopa", "gr": "noun", "en": ["space in front of a house", "floor space and corner on the left on entering a wharenui – normally the place where the local people of the marae sit or sleep"]}
{"mi": "kopa", "gr": "noun", "en": ["bend, fold", "any flappable item e.g. wallets, satchels"]}
{"mi": "kopa", "gr": "noun", "en": ["cripple, disability"]}
{"mi": "pū", "gr": "noun", "en": ["bunch, bundle", "heap, stack", "tribe", "origin, source", "base, foundation"]}
{"mi": "pū", "gr": "noun", "en": ["reed, tube, pipe", "any elongated wind musical instrument", "gun, firearm, musket"]}
{"mi": "tāke", "gr": "noun", "en": ["tax, a sum paid to the government for monetary transactions"]}
{"mi": "toro", "gr": "noun", "en": ["extension", "scout", "probe"]}
{"mi": "toro", "gr": "noun", "en": ["toro (Myrsine salicina, a small native New Zealand tree."]}
{"mi": "tara", "gr": "noun", "en": ["thorn of a plant", "tooth of a comb, tine of a fork", "spine of a fish, barb of a stingray", "skewer", "peak of a mountain"]}
{"mi": "tara", "gr": "noun", "en": ["gossip", "scandal"]}
{"mi": "aro", "gr": "noun", "en": ["front (facing side)", "front (weather)", "desire", "inclination", "heart, seat of feelings"]}
{"mi": "apa", "gr": "noun", "en": ["layer; level"]}
{"mi": "apa", "gr": "noun", "en": ["servant; slave"]}
{"mi": "apa", "gr": "noun", "en": ["spiritual beings; ancestral spirits"]}
{"mi": "whāngai", "gr": "noun", "en": ["foster child, adopted child"]}
{"mi": "wīwī", "gr": "noun", "en": ["sea rush, clubrush"]}
{"mi": "wīwī", "gr": "noun", "en": ["somewhere; hither and thither"]}
{"mi": "auau", "gr": "noun", "en": ["bark (of a dog)"]}
{"mi": "auau", "gr": "noun", "en": ["frequency, rate"]}
{"mi": "tupu", "gr": "noun", "en": ["seedling, shoot, bud"]}
{"mi": "uru", "gr": "noun", "en": ["head (in the singular)", "chief, leader", "top, upper end", "point (of a weapon, etc.)", "hair (of the head, in the plural)"]}
{"mi": "uru", "gr": "noun", "en": ["west"]}
{"mi": "tia", "gr": "noun", "en": ["abdomen, stomach", "umbilical cord"]}
{"mi": "tia", "gr": "noun", "en": ["deer"]}
{"mi": "tia", "gr": "noun", "en": ["steering"]}
{"mi": "kini", "gr": "noun", "en": ["pinch (amount)"]}
{"mi": "kini", "gr": "noun", "en": ["guinea (a coin)"]}
{"mi": "whai", "gr": "noun", "en": ["stingray", "skate (fish of family Rajidae)"]}
{"mi": "whai", "gr": "noun", "en": ["pursuit"]}
{"mi": "ngaro", "gr": "noun", "en": ["blowfly, in connection with mākutu the fly represented the life or spirit of the person involved.", "houseflies of various species, any plump winged insect"]}
{"mi": "ngaro", "gr": "noun", "en": ["roller (for moving a canoe, etc)"]}
{"mi": "piki", "gr": "noun", "en": ["fig tree", "fig"]}
{"mi": "niu", "gr": "noun", "en": ["coconut"]}
{"mi": "tukutuku", "gr": "noun", "en": ["ornamental lattice-work", "grid"]}
{"mi": "kēkē", "gr": "noun", "en": ["armpit"]}
{"mi": "kēkē", "gr": "noun", "en": ["quack (of a duck)"]}
{"mi": "kēkē", "gr": "noun", "en": ["distant, divergent"]}
{"mi": "kino", "gr": "noun", "en": ["harm", "hate"]}
{"mi": "maki", "gr": "noun", "en": ["sick person", "sore (injured, infected, inflamed, or diseased patch of skin)"]}
{"mi": "maki", "gr": "noun", "en": ["ape", "monkey"]}
{"mi": "ruru", "gr": "noun", "en": ["morepork (Ninox novaeseelandiae)"]}
{"mi": "ruru", "gr": "noun", "en": ["shelter", "shade"]}
{"mi": "tote", "gr": "noun", "en": ["salt"]}
{"mi": "māori", "gr": "noun", "en": ["aboriginal inhabitant, indigenous person, native (especially of the Pacific islands)"]}
{"mi": "hā", "gr": "noun", "en": ["breath, breathing, essence, taste.", "sound, tone, tenor, timbre, intonation."]}
{"mi": "rere", "gr": "noun", "en": ["flight", "attack, charge, rush", "waterfall"]}
{"mi": "puta", "gr": "noun", "en": ["anus", "vagina", "foramen"]}
{"mi": "pani", "gr": "noun", "en": ["paint", "polish"]}
{"mi": "ngāi", "gr": "noun", "en": ["Group marker used in certain nouns."]}
{"mi": "pahū", "gr": "noun", "en": ["drum (slotted or skinned)"]}
{"mi": "pahū", "gr": "noun", "en": ["boom, bang", "explosion", "bomb"]}
{"mi": "pohane", "gr": "noun", "en": ["sexual attraction", "love, affection, desire, lust"]}
{"mi": "kaha", "gr": "noun", "en": ["strength, power, energy"]}
{"mi": "kaha", "gr": "noun", "en": ["rope, noose"]}
{"mi": "kaha", "gr": "noun", "en": ["hill ridge", "lineage"]}
{"mi": "tina", "gr": "noun", "en": ["constipation"]}
{"mi": "tina", "gr": "noun", "en": ["lunch, dinner (midday meal)"]}
{"mi": "piro", "gr": "noun", "en": ["rot", "intestines"]}
{"mi": "nanu", "gr": "noun", "en": ["discontent, dissatisfaction"]}
{"mi": "moe", "gr": "noun", "en": ["sleep", "dream"]}
{"mi": "hira", "gr": "noun", "en": ["multitude", "importance, significance", "abundance, plentifulness, profusion"]}
{"mi": "tangi", "gr": "noun", "en": ["weeping, mourning, lament", "sound", "pitch", "intonation"]}
{"mi": "ārai", "gr": "noun", "en": ["obstacle; barricade", "screen (physical divider)", "insulator", "barrier", "veil; curtain", "apron"]}
{"mi": "heu", "gr": "noun", "en": ["razor"]}
{"mi": "heu", "gr": "noun", "en": ["scrub, undergrowth"]}
{"mi": "kī", "gr": "noun", "en": ["saying, word"]}
{"mi": "kī", "gr": "noun", "en": ["to be full"]}
{"mi": "kī", "gr": "noun", "en": ["key"]}
{"mi": "pare", "gr": "noun", "en": ["headband, wreath"]}
{"mi": "pare", "gr": "noun", "en": ["defence, protection"]}
{"mi": "whiu", "gr": "noun", "en": ["penalty, sentence, punishment", "hitting, wielding, knocking, driving"]}
{"mi": "whano", "gr": "noun", "en": ["lead of a road"]}
{"mi": "whano", "gr": "noun", "en": ["action, behaviour"]}
{"mi": "pae", "gr": "noun", "en": ["shelf", "horizon", "perch", "mountain range", "area, region", "circumference", "gum (oral)"]}
{"mi": "tapa", "gr": "noun", "en": ["rim, edge, boundary", "labia"]}
{"mi": "hiko", "gr": "noun", "en": ["flash, twinkle", "lightning", "electricity"]}
{"mi": "uaua", "gr": "noun", "en": ["blood vessel", "vein; artery", "sinew; tendon", "muscle", "difficulty; dilemma; problem; trouble"]}
{"mi": "uaua", "gr": "noun", "en": ["firmness, resolution"]}
{"mi": "whakahaere", "gr": "noun", "en": ["operation", "organization", "control", "administration"]}
{"mi": "hirahira", "gr": "noun", "en": ["standing", "importance, significance", "eminence"]}
{"mi": "atawhai", "gr": "noun", "en": ["kindness, generosity"]}
{"mi": "horo", "gr": "noun", "en": ["speed"]}
{"mi": "kā", "gr": "noun", "en": ["car"]}
{"mi": "pōhēhē", "gr": "noun", "en": ["mistake, misunderstanding, error"]}
{"mi": "inu", "gr": "noun", "en": ["liquid, drink"]}
{"mi": "wāwā", "gr": "noun", "en": ["somewhere; hither and thither"]}
{"mi": "taunga", "gr": "noun", "en": ["anchorage, resting place, landing", "fishing ground", "coordinate", "position"]}
{"mi": "whana", "gr": "noun", "en": ["archery bow", "jerking, recoiling, springing back", "revolt, rebellion, mutiny, uprising, riot, insurrection", "kick"]}
{"mi": "ira", "gr": "noun", "en": ["dot, freckle, speck, mole", "particle", "shine, glimmer"]}
{"mi": "ira", "gr": "noun", "en": ["life principle, gene."]}
{"mi": "heke", "gr": "noun", "en": ["descent", "rafting, rafter", "surfing"]}
{"mi": "tore", "gr": "noun", "en": ["strip, shred (of cloth etc)", "stripe", "narrow light beam passing through a slit"]}
{"mi": "tore", "gr": "noun", "en": ["vagina, vulva"]}
{"mi": "oka", "gr": "noun", "en": ["awl, tool used to bore holes in wood or leather", "a kind of dagger"]}
{"mi": "oka", "gr": "noun", "en": ["rafter, esp. that supports the roof of kumara storehouses"]}
{"mi": "oka", "gr": "noun", "en": ["yam"]}
{"mi": "pona", "gr": "noun", "en": ["node or knot of grass stalks etc", "joint of a limb (legs, arms)", "knuckle"]}
{"mi": "pona", "gr": "noun", "en": ["knot (of a rope)", "sachet, parcel"]}
{"mi": "ōi", "gr": "noun", "en": ["shout"]}
{"mi": "ōi", "gr": "noun", "en": ["grey-faced petrel", "sooty shearwater", "short-tailed shearwater"]}
{"mi": "ōi", "gr": "noun", "en": ["muck", "quicksand"]}
{"mi": "kōkō", "gr": "noun", "en": ["tui"]}
{"mi": "mutu", "gr": "noun", "en": ["bird trap or snare consisting of a stick with a long perpendicular arm which birds would perch on"]}
{"mi": "rū", "gr": "noun", "en": ["shake, agitation", "earthquake, tremor"]}
{"mi": "pīrangi", "gr": "noun", "en": ["desire, wish", "aspiration, hope"]}
{"mi": "popo", "gr": "noun", "en": ["anything rotten, something decayed", "rottenness, decay"]}
{"mi": "aitu", "gr": "noun", "en": ["atua of disaster and death", "demons", "sickness", "calamity, misery", "grief, sorrow", "woe"]}
{"mi": "māpere", "gr": "noun", "en": ["razor sedge (Gahnia setifolia)"]}
{"mi": "māpere", "gr": "noun", "en": ["middle digit"]}
{"mi": "māpere", "gr": "noun", "en": ["marble", "ballot"]}
{"mi": "māpere", "gr": "noun", "en": ["mulberry"]}
{"mi": "hae", "gr": "noun", "en": ["scratch, tear, laceration"]}
{"mi": "hae", "gr": "noun", "en": ["envy, jealousy", "dislike"]}
{"mi": "rore", "gr": "noun", "en": ["trap, snare"]}
{"mi": "rore", "gr": "noun", "en": ["rainbow"]}
{"mi": "ura", "gr": "noun", "en": ["krill (small marine crustacean)", "whalefeed, Munida gregaria", "shrimp (decapod crustacean)"]}
{"mi": "ngahuru", "gr": "noun", "en": ["autumn"]}
{"mi": "tiaki", "gr": "noun", "en": ["jack (playing card)"]}
{"mi": "tiaki", "gr": "noun", "en": ["cheque"]}
{"mi": "kawe", "gr": "noun", "en": ["handle (of a basket etc.), strap (of a bag, backpack)"]}
{"mi": "kawe", "gr": "noun", "en": ["tentacle", "spiral moko pattern on one's facial cheeks"]}
{"mi": "tātari", "gr": "noun", "en": ["filter, strainer, sieve, colander", "analysis"]}
{"mi": "whakaatu", "gr": "noun", "en": ["notification"]}
{"mi": "tū", "gr": "noun", "en": ["stance, position"]}
{"mi": "wae", "gr": "noun", "en": ["leg", "foot"]}
{"mi": "hara", "gr": "noun", "en": ["sin", "foul", "crime, offence, transgression, wrongdoing", "gaffe", "infringement", "fault", "problem"]}
{"mi": "eka", "gr": "noun", "en": ["acre"]}
{"mi": "kaka", "gr": "noun", "en": ["fibre (in general)", "cloth, clothes, garment", "strand of hair"]}
{"mi": "kaka", "gr": "noun", "en": ["stalk", "lineage", "nose bridge", "hill ridge"]}
{"mi": "whakaari", "gr": "noun", "en": ["drama, play, program", "acting, performance"]}
{"mi": "raka", "gr": "noun", "en": ["step, walk, trek"]}
{"mi": "raka", "gr": "noun", "en": ["lock"]}
{"mi": "roki", "gr": "noun", "en": ["any enclosed area", "store"]}
{"mi": "nohopuku", "gr": "noun", "en": ["fasting (abstention of eating for religious purposes)"]}
{"mi": "nohopuku", "gr": "noun", "en": ["silence"]}
{"mi": "kō", "gr": "noun", "en": ["digging stick (also used as a weapon)"]}
{"mi": "horoi", "gr": "noun", "en": ["washing", "soap"]}
{"mi": "eke", "gr": "noun", "en": ["embarking, boarding", "surfing", "rafting, rafter"]}
{"mi": "tua", "gr": "noun", "en": ["back, rear of the body"]}
{"mi": "pī", "gr": "noun", "en": ["snub"]}
{"mi": "pī", "gr": "noun", "en": ["bee"]}
{"mi": "rāhui", "gr": "noun", "en": ["bundle", "flock, herd, mob, swarm, cluster"]}
{"mi": "ware", "gr": "noun", "en": ["excretion, exudation", "saliva", "spume, foam of seawater"]}
{"mi": "toko", "gr": "noun", "en": ["pole", "sprit of a canoe's sail", "beam or ray of light"]}
{"mi": "raro", "gr": "noun", "en": ["the underworld", "bottom", "north"]}
{"mi": "tika", "gr": "noun", "en": ["directness", "truth, justice", "rights"]}
{"mi": "huri", "gr": "noun", "en": ["rotation, revolution"]}
{"mi": "whiwhi", "gr": "noun", "en": ["fat covering entrails"]}
{"mi": "auahi", "gr": "noun", "en": ["smoke"]}
{"mi": "oro", "gr": "noun", "en": ["sound", "echo", "rumble", "note"]}
{"mi": "unu", "gr": "noun", "en": ["withdrawal, extraction"]}
{"mi": "mura", "gr": "noun", "en": ["glow", "colour"]}
{"mi": "pota", "gr": "noun", "en": ["fragment, chip", "portion", "sample"]}
{"mi": "hū", "gr": "noun", "en": ["noise, racket, hubbub"]}
{"mi": "tohi", "gr": "noun", "en": ["boiling vessel for cooking by placing heated stones in water"]}
{"mi": "whao", "gr": "noun", "en": ["chisel", "any iron tool", "nail (metal fastener)"]}
{"mi": "ioio", "gr": "noun", "en": ["blood vessels, veins", "sinews; tendons"]}
{"mi": "utauta", "gr": "noun", "en": ["equipment, tools, property"]}
{"mi": "hanga", "gr": "noun", "en": ["group of people", "the manner in which something is made or built", "construction", "thing; object which has been made; product"]}
{"mi": "kato", "gr": "noun", "en": ["flow", "current"]}
{"mi": "kapu", "gr": "noun", "en": ["scoop, ladle", "palm of one's hand", "instep of one's foot"]}
{"mi": "whatu", "gr": "noun", "en": ["stone", "hailstone", "pupil (of the eye)", "eye", "kernel (of a fruit)"]}
{"mi": "hana", "gr": "noun", "en": ["heat, warmth", "radiance, glow, flame"]}
{"mi": "pepe", "gr": "noun", "en": ["any lepidopterans including butterflies and moths"]}
{"mi": "rehu", "gr": "noun", "en": ["dust", "mist", "spray"]}
{"mi": "punga", "gr": "noun", "en": ["coral", "any silicate or calcite material", "anchor"]}
{"mi": "anga", "gr": "noun", "en": ["shell, husk", "structure, framework"]}
{"mi": "hunga", "gr": "noun", "en": ["people", "slave"]}
{"mi": "hunga", "gr": "noun", "en": ["down, fine feathers", "grind, rub fine", "decayed, putrid", "light-coloured"]}
{"mi": "uira", "gr": "noun", "en": ["lightning", "electricity", "glow"]}
{"mi": "tuku", "gr": "noun", "en": ["offering", "presentation, submission"]}
{"mi": "tahe", "gr": "noun", "en": ["any exudate", "sap", "menses, menstruation i.e. natural monthly uterine discharge among women", "miscarriage, abortion"]}
{"mi": "inanga", "gr": "noun", "en": ["A fish, the jollytail (Galaxias maculatus).", "The grass tree, a shrub in the genus Dracophyllum.", "bamboo", "white greenstone"]}
{"mi": "nīko", "gr": "noun", "en": ["cabbage", "celery pine"]}
{"mi": "taurekareka", "gr": "noun", "en": ["slave or prisoner of war", "scoundrel, idiot, rascal", "rogue"]}
{"mi": "pata", "gr": "noun", "en": ["drop, drip"]}
{"mi": "pata", "gr": "noun", "en": ["seed", "granule"]}
{"mi": "matira", "gr": "noun", "en": ["fishing rod", "lookout"]}
{"mi": "amo", "gr": "noun", "en": ["litter, bier, stretcher", "front support of a marae's bargeboard (hihi, mahihi or maihi)"]}
{"mi": "kohu", "gr": "noun", "en": ["fog"]}
{"mi": "puru", "gr": "noun", "en": ["plug", "caulk", "coconut husk"]}
{"mi": "teka", "gr": "noun", "en": ["rung or step of a ladder", "horizontal footrest or tread on a digging stick to step on and push further into the ground"]}
{"mi": "teka", "gr": "noun", "en": ["dart"]}
{"mi": "tahua", "gr": "noun", "en": ["field, enclosure, courtyard", "square, plaza", "expanse"]}
{"mi": "tahua", "gr": "noun", "en": ["heap", "menu", "fund, budget"]}
{"mi": "tahua", "gr": "noun", "en": ["stencil"]}
{"mi": "patu", "gr": "noun", "en": ["beating, assault, killing", "weapon, club"]}
{"mi": "pou", "gr": "noun", "en": ["post, stake, pillar", "column", "support", "stalwart"]}
{"mi": "mina", "gr": "noun", "en": ["desire; wish", "aspiration", "longing", "appetite"]}
{"mi": "huru", "gr": "noun", "en": ["hair of human heads"]}
{"mi": "raki", "gr": "noun", "en": ["north", "drought"]}
{"mi": "ranga", "gr": "noun", "en": ["group, team, company of people", "school of fish"]}
{"mi": "pāho", "gr": "noun", "en": ["broadcast"]}
{"mi": "kiko", "gr": "noun", "en": ["meat of any animal", "flesh of fruit", "kernel of a seed or nut", "body, substance"]}
{"mi": "maka", "gr": "noun", "en": ["fish hook"]}
{"mi": "maka", "gr": "noun", "en": ["mug"]}
{"mi": "hina", "gr": "noun", "en": ["grey hair"]}
{"mi": "whero", "gr": "noun", "en": ["red (orangish or brownish)", "yellow", "gold (element and metal)"]}
{"mi": "neke", "gr": "noun", "en": ["roller for a waka"]}
{"mi": "neke", "gr": "noun", "en": ["snake"]}
{"mi": "wehi", "gr": "noun", "en": ["dread, fear"]}
{"mi": "whakamataku", "gr": "noun", "en": ["fright, fear"]}
{"mi": "ākau", "gr": "noun", "en": ["reef", "coast (of seas), bank (of rivers)"]}
{"mi": "manaaki", "gr": "noun", "en": ["support, caring for"]}
{"mi": "hinga", "gr": "noun", "en": ["loss, defeat"]}
{"mi": "whenu", "gr": "noun", "en": ["strand (each of the strings that make up a rope, etc.)", "warp", "cosine"]}
{"mi": "ane", "gr": "noun", "en": ["termite"]}
{"mi": "nuku", "gr": "noun", "en": ["distance, extent", "expanse", "land, ground", "indent"]}
{"mi": "uwhi", "gr": "noun", "en": ["yam; Dioscorea alata"]}
{"mi": "wāna", "gr": "noun", "en": ["swan"]}
{"mi": "mārama", "gr": "noun", "en": ["light, shine", "brightness", "lucidity, clarity", "transparency"]}
{"mi": "mārena", "gr": "noun", "en": ["marriage, wedding"]}
{"mi": "whakamōtī", "gr": "noun", "en": ["destruction, damage, devastation, desolation."]}
{"mi": "tiki", "gr": "noun", "en": ["figurine, carved figure"]}
{"mi": "hē", "gr": "noun", "en": ["fault"]}
{"mi": "kuru", "gr": "noun", "en": ["breadfruit"]}
{"mi": "kuru", "gr": "noun", "en": ["mallet; fragment; hammer-head stone"]}
{"mi": "tepe", "gr": "noun", "en": ["clot"]}
{"mi": "pūpū", "gr": "noun", "en": ["bunch, bundle"]}
{"mi": "pūpū", "gr": "noun", "en": ["snail"]}
{"mi": "haki", "gr": "noun", "en": ["flag"]}
{"mi": "haki", "gr": "noun", "en": ["mountain holly (Olearia ilicifolia)"]}
{"mi": "tini", "gr": "noun", "en": ["multitude, host, a very large amount"]}
{"mi": "whio", "gr": "noun", "en": ["whistle"]}
{"mi": "whio", "gr": "noun", "en": ["blue duck"]}
{"mi": "kākāriki", "gr": "noun", "en": ["a New Zealand parakeet of genus Cyanoramphus", "green, colour of said parakeet", "a green species of gecko", "cantaloupe"]}
{"mi": "ehu", "gr": "noun", "en": ["muddy water"]}
{"mi": "iro", "gr": "noun", "en": ["maggot"]}
{"mi": "maha", "gr": "noun", "en": ["abundance, bounty, majority"]}
{"mi": "whakangaro", "gr": "noun", "en": ["destruction, obliteration, ruin, annihilation, devastation."]}
{"mi": "whakamahi", "gr": "noun", "en": ["use"]}
{"mi": "tūnga", "gr": "noun", "en": ["wound"]}
{"mi": "tūnga", "gr": "noun", "en": ["position", "rank"]}
{"mi": "kīngi", "gr": "noun", "en": ["king (monarch)", "king"]}
{"mi": "hīkoi", "gr": "noun", "en": ["step", "march", "hike, trek, tramp", "journey, trip"]}
{"mi": "paki", "gr": "noun", "en": ["print", "story, tale, yarn"]}
{"mi": "tuke", "gr": "noun", "en": ["elbow", "bend, angle", "cubit, measurement from elbow to fingertip"]}
{"mi": "kumu", "gr": "noun", "en": ["anus", "buttocks"]}
{"mi": "kape", "gr": "noun", "en": ["tongs", "any wooden kitchen tool (spoon, stirrer etc)", "crescent", "eyebrow"]}
{"mi": "ū", "gr": "noun", "en": ["breast", "udder, teat"]}
{"mi": "hoariri", "gr": "noun", "en": ["enemy, opposition, opponent, adversary"]}
{"mi": "ripi", "gr": "noun", "en": ["special tool with long, oval blade used to pry out pāua from rocks", "a type of chisel to carve long grooves on wood", "discus, flat plate thrown as sport", "stone skipping, ducks and drakes"]}
{"mi": "urupatu", "gr": "noun", "en": ["annihilation, destruction, sacking."]}
{"mi": "koutu", "gr": "noun", "en": ["promontory, point (of land)"]}
{"mi": "piupiu", "gr": "noun", "en": ["A grass skirt with long strands or fringes that sway and produce sound while the wearer dances."]}
{"mi": "piupiu", "gr": "noun", "en": ["Lomaria discolor", "Pneumanopteris pennigera", "Parablechnum procerum", "Parablechnum novae-zelandiae"]}
{"mi": "mangeo", "gr": "noun", "en": ["itch, irritation, smart", "acridity", "annoyance, frustration"]}
{"mi": "piriti", "gr": "noun", "en": ["priest"]}
{"mi": "piriti", "gr": "noun", "en": ["bridge"]}
{"mi": "hōkaka", "gr": "noun", "en": ["desire, wish"]}
{"mi": "rekareka", "gr": "noun", "en": ["sweetness", "attractiveness", "enjoyment, pleasure", "orgasm"]}
{"mi": "pākehā", "gr": "noun", "en": ["New Zealander of European descent", "New Zealander of non-Māori descent", "foreigner, alien"]}
{"mi": "koko", "gr": "noun", "en": ["scoop, ladle", "shovel", "spoon"]}
{"mi": "tiri", "gr": "noun", "en": ["plant, crop"]}
{"mi": "hune", "gr": "noun", "en": ["core of a breadfruit.", "pappus of reeds like raupo that disperse its achened seeds.", "plant pubescence", "young soft feathers of a bird"]}
{"mi": "mahara", "gr": "noun", "en": ["recollection, memory", "spleen"]}
{"mi": "mātau", "gr": "noun", "en": ["knowledge, understanding"]}
{"mi": "punua", "gr": "noun", "en": ["a baby animal."]}
{"mi": "pōkai", "gr": "noun", "en": ["ball (of string etc)", "roll", "wrap, wrapper"]}
{"mi": "kūrae", "gr": "noun", "en": ["cape, headland, promontory, peninsula, boundary point"]}
{"mi": "moa", "gr": "noun", "en": ["moa (†Dinornis)"]}
{"mi": "mīti", "gr": "noun", "en": ["meat"]}
{"mi": "pito", "gr": "noun", "en": ["navel", "end, extremity", "pole"]}
{"mi": "kano", "gr": "noun", "en": ["seed, bean, grain, ovule", "sort, kind", "color, pigment, hue"]}
{"mi": "matomato", "gr": "noun", "en": ["lushness"]}
{"mi": "maina", "gr": "noun", "en": ["mine (explosive device)"]}
{"mi": "maina", "gr": "noun", "en": ["myna (Acridotheres tristis)"]}
{"mi": "aranga", "gr": "noun", "en": ["arising", "resurrection"]}
{"mi": "aukati", "gr": "noun", "en": ["barrier, boundary, roadblock", "discrimination"]}
{"mi": "autaia", "gr": "noun", "en": ["bloke, fellow, guy, chap", "contraption", "wonder"]}
{"mi": "wahangū", "gr": "noun", "en": ["dumbness, being mute"]}
{"mi": "tīmata", "gr": "noun", "en": ["drama, play, program", "acting, performance"]}
{"mi": "rahi", "gr": "noun", "en": ["size, greatness", "importance, (important person, important people)"]}
{"mi": "reka", "gr": "noun", "en": ["sweetness"]}
{"mi": "aru", "gr": "noun", "en": ["chase", "pursuit"]}
{"mi": "tui", "gr": "noun", "en": ["string, thread"]}
{"mi": "tuki", "gr": "noun", "en": ["pestle"]}
{"mi": "pihi", "gr": "noun", "en": ["sprout, shoot, bud", "horn, antler"]}
{"mi": "miti", "gr": "noun", "en": ["undertow, water flowing back from a breaking wave towards the sea"]}
{"mi": "kamo", "gr": "noun", "en": ["eyelid", "eyelash"]}
{"mi": "riki", "gr": "noun", "en": ["leek", "onion"]}
{"mi": "wiri", "gr": "noun", "en": ["gimlet, auger, drill, screwdriver, anything for boring holes", "trembling of the hands in Maori singing to indicate the interface between the mind and the body (the wiri represents the shimmering of the ocean water, the heat waves rising from the ground, the wind rustling the tree leaves)"]}
{"mi": "kope", "gr": "noun", "en": ["anything that wraps", "any kind of absorbent, sanitary pad", "certain types of moss traditionally used as pads or diapers"]}
{"mi": "hopu", "gr": "noun", "en": ["seizing, catching, snatching"]}
{"mi": "pāpaka", "gr": "noun", "en": ["paddle crab, Ovalipes catharus", "crabs in general"]}
{"mi": "pāpaka", "gr": "noun", "en": ["scab, eczema"]}
{"mi": "āio", "gr": "noun", "en": ["calm, halcyon", "peace"]}
{"mi": "tāpiri", "gr": "noun", "en": ["sticking plaster", "sticky tape"]}
{"mi": "kōpere", "gr": "noun", "en": ["a sling used to launch darts", "bow (weapon for shooting arrows or rod for playing string instruments)", "arrow", "arch", "rainbow", "sprint"]}
{"mi": "āki", "gr": "noun", "en": ["urging, encouragement"]}
{"mi": "whata", "gr": "noun", "en": ["shelf"]}
{"mi": "marangai", "gr": "noun", "en": ["bad weather", "east wind", "east", "rainstorm"]}
{"mi": "wharo", "gr": "noun", "en": ["cough", "phlegm"]}
{"mi": "tahu", "gr": "noun", "en": ["husband, lover", "near relative"]}
{"mi": "tira", "gr": "noun", "en": ["travelling party, company of travelers", "troupe", "choir", "ray, beam", "mast", "wand used in rituals", "conductor's baton"]}
{"mi": "wē", "gr": "noun", "en": ["water", "liquid"]}
{"mi": "puia", "gr": "noun", "en": ["volcano", "geyser, hot spring"]}
{"mi": "ngāwhā", "gr": "noun", "en": ["geyser, fumarole, hot spring"]}
{"mi": "maitai", "gr": "noun", "en": ["iron", "metal"]}
{"mi": "huatau", "gr": "noun", "en": ["comment, thought"]}
{"mi": "heuheu", "gr": "noun", "en": ["brushwood"]}
{"mi": "pōhara", "gr": "noun", "en": ["poverty", "a poor person"]}
{"mi": "ukauka", "gr": "noun", "en": ["cash"]}
{"mi": "whakapakaru", "gr": "noun", "en": ["falsetto"]}
{"mi": "kirikiri", "gr": "noun", "en": ["gravel", "sand", "shingle"]}
{"mi": "wera", "gr": "noun", "en": ["heat"]}
{"mi": "koi", "gr": "noun", "en": ["point", "spike"]}
{"mi": "ato", "gr": "noun", "en": ["thatch, roof"]}
{"mi": "rama", "gr": "noun", "en": ["torch", "light"]}
{"mi": "rama", "gr": "noun", "en": ["rum"]}
{"mi": "peka", "gr": "noun", "en": ["bat (the flying mammal)"]}
{"mi": "peka", "gr": "noun", "en": ["branch (of a tree, river)", "a piece of firewood"]}
{"mi": "hama", "gr": "noun", "en": ["hammer", "malleus (hammer ear bone)"]}
{"mi": "hako", "gr": "noun", "en": ["monkey", "clown"]}
{"mi": "poti", "gr": "noun", "en": ["cat (Felis silvestris catus)"]}
{"mi": "poti", "gr": "noun", "en": ["angle", "corner"]}
{"mi": "rara", "gr": "noun", "en": ["rib"]}
{"mi": "kohe", "gr": "noun", "en": ["synonym of kohekohe", "bamboo"]}
{"mi": "kohe", "gr": "noun", "en": ["Passiflora tetrandra, a kind of passionfruit endemic to New Zealand."]}
{"mi": "piko", "gr": "noun", "en": ["bend, curve", "corner"]}
{"mi": "tōhi", "gr": "noun", "en": ["toast (bread)", "toast (salutation)"]}
{"mi": "hīoi", "gr": "noun", "en": ["New Zealand mint (Mentha cunninghamii)", "New Zealand pipit (Anthus novaeseelandiae)"]}
{"mi": "anea", "gr": "noun", "en": ["devastation, destruction"]}
{"mi": "pukupuku", "gr": "noun", "en": ["gooseflesh, goose pimples", "lump, tumour", "shield", "rasp fern (Doodia media)", "wild pelargonium (Pelargonium inodorum)"]}
{"mi": "paoi", "gr": "noun", "en": ["wooden fern-root pounder", "pestle"]}
{"mi": "huaki", "gr": "noun", "en": ["dawn"]}
{"mi": "kāwana", "gr": "noun", "en": ["A governor."]}
{"mi": "manako", "gr": "noun", "en": ["desire, wish, want", "longing, yearning", "anxiety"]}
{"mi": "kapiti", "gr": "noun", "en": ["cleft, crevice", "gorge, pass of a mountain", "slot (for receiving cards, coins etc)"]}
{"mi": "karapu", "gr": "noun", "en": ["glove (item of clothing)"]}
{"mi": "karapu", "gr": "noun", "en": ["club (association)"]}
{"mi": "okaoka", "gr": "noun", "en": ["vaccine"]}
{"mi": "kotahi", "gr": "noun", "en": ["unit"]}
{"mi": "mangō", "gr": "noun", "en": ["shark"]}
{"mi": "taura", "gr": "noun", "en": ["rope"]}
{"mi": "taera", "gr": "noun", "en": ["sexual desire"]}
{"mi": "pūmua", "gr": "noun", "en": ["protein"]}
{"mi": "tao", "gr": "noun", "en": ["spear"]}
{"mi": "hai", "gr": "noun", "en": ["ace"]}
{"mi": "io", "gr": "noun", "en": ["sinew; tendon", "muscle", "vein", "strand of rope", "lock of hair", "warp, lengthwise weaving threads"]}
{"mi": "hapa", "gr": "noun", "en": ["tea (meal)"]}
{"mi": "mati", "gr": "noun", "en": ["finger, toe"]}
{"mi": "aihe", "gr": "noun", "en": ["The short-beaked common dolphin, Delphinus delphis"]}
{"mi": "kui", "gr": "noun", "en": ["grandmother, old woman, elderly woman"]}
{"mi": "wani", "gr": "noun", "en": ["swan"]}
{"mi": "tāra", "gr": "noun", "en": ["dollar, especially a New Zealand dollar"]}
{"mi": "āngi", "gr": "noun", "en": ["air"]}
{"mi": "marino", "gr": "noun", "en": ["fine weather, tranquility"]}
{"mi": "tahito", "gr": "noun", "en": ["age, antiquity"]}
{"mi": "pākete", "gr": "noun", "en": ["pocket"]}
{"mi": "pākete", "gr": "noun", "en": ["packet"]}
{"mi": "pākete", "gr": "noun", "en": ["bucket"]}
{"mi": "hepara", "gr": "noun", "en": ["shepherd; herdsman"]}
{"mi": "hepara", "gr": "noun", "en": ["zebra"]}
{"mi": "urunga", "gr": "noun", "en": ["pillow"]}
{"mi": "urunga", "gr": "noun", "en": ["entrance (act of entering)"]}
{"mi": "urunga", "gr": "noun", "en": ["rudder"]}
{"mi": "kōwhiti", "gr": "noun", "en": ["ulna", "cross stich"]}
{"mi": "tupuna", "gr": "noun", "en": ["A grandparent, or any ancestor more remote than one's parents."]}
{"mi": "karetao", "gr": "noun", "en": ["puppet", "robot"]}
{"mi": "pera", "gr": "noun", "en": ["blubber"]}
{"mi": "pera", "gr": "noun", "en": ["pillow"]}
{"mi": "toke", "gr": "noun", "en": ["cold"]}
{"mi": "toke", "gr": "noun", "en": ["worm"]}
{"mi": "nana", "gr": "noun", "en": ["eyebrow"]}
{"mi": "aka", "gr": "noun", "en": ["root (of plant)"]}
{"mi": "koru", "gr": "noun", "en": ["coil, loop"]}
{"mi": "moto", "gr": "noun", "en": ["hit or blow with the fist, punch"]}
{"mi": "toto", "gr": "noun", "en": ["blood"]}
{"mi": "rae", "gr": "noun", "en": ["forehead (part of face above eyebrows)"]}
{"mi": "rae", "gr": "noun", "en": ["promontory, headland"]}
{"mi": "turi", "gr": "noun", "en": ["knee"]}
{"mi": "uhi", "gr": "noun", "en": ["yam (Dioscorea)"]}
{"mi": "uhi", "gr": "noun", "en": ["a chisel-like tool used to puncture Maori tattoos (moko)"]}
{"mi": "moko", "gr": "noun", "en": ["Polynesian tattoo"]}
{"mi": "moko", "gr": "noun", "en": ["lizard, gecko"]}
{"mi": "namu", "gr": "noun", "en": ["sandfly of the genus Austrosimulium."]}
{"mi": "puna", "gr": "noun", "en": ["spring of water; well; pool"]}
{"mi": "tutū", "gr": "noun", "en": ["disobedience, offending; hooligan"]}
{"mi": "pono", "gr": "noun", "en": ["truth, non-fiction, validity"]}
{"mi": "papi", "gr": "noun", "en": ["poppy"]}
{"mi": "papi", "gr": "noun", "en": ["puppy"]}
{"mi": "heru", "gr": "noun", "en": ["comb"]}
{"mi": "rona", "gr": "noun", "en": ["a binder (for holding papers together)"]}
{"mi": "kipa", "gr": "noun", "en": ["spur (horse prod attached to heel)"]}
{"mi": "karo", "gr": "noun", "en": ["Pittosporum crassifolium, a shrub of New Zealand."]}
{"mi": "pewa", "gr": "noun", "en": ["eyebrow"]}
{"mi": "ranu", "gr": "noun", "en": ["mixture"]}
{"mi": "turu", "gr": "noun", "en": ["post, pole, pillar"]}
{"mi": "āta", "gr": "noun", "en": ["altar (Christian)"]}
{"mi": "ripo", "gr": "noun", "en": ["whirlpool, eddy, curl"]}
{"mi": "miha", "gr": "noun", "en": ["a whale calf"]}
{"mi": "miha", "gr": "noun", "en": ["young bracken fronds"]}
{"mi": "tupua", "gr": "noun", "en": ["demon", "foreigner", "strange being"]}
{"mi": "inoi", "gr": "noun", "en": ["a prayer"]}
{"mi": "rārā", "gr": "noun", "en": ["small branch, twig"]}
{"mi": "ānau", "gr": "noun", "en": ["curve"]}
{"mi": "ātea", "gr": "noun", "en": ["space"]}
{"mi": "kāoa", "gr": "noun", "en": ["coral"]}
{"mi": "puehu", "gr": "noun", "en": ["pollen", "dust"]}
{"mi": "nohi", "gr": "noun", "en": ["face"]}
{"mi": "nohi", "gr": "noun", "en": ["Luzuriaga parviflora, a kind of perennial plant found in North Island."]}
{"mi": "tari", "gr": "noun", "en": ["to wait, alternative form of tatari"]}
{"mi": "paheke", "gr": "noun", "en": ["failure, decline", "trickle, leak, discharge", "cloud ear (Auricularia polytricha)"]}
{"mi": "rango", "gr": "noun", "en": ["fly (insect)", "blowfly"]}
{"mi": "kiore", "gr": "noun", "en": ["rat", "mouse (input device)"]}
{"mi": "matā", "gr": "noun", "en": ["obsidian", "lava", "lead", "bullet", "seashore earwig"]}
{"mi": "kongakonga", "gr": "noun", "en": ["shrapnel, crumb", "fragment"]}
{"mi": "whānako", "gr": "noun", "en": ["theft, steal", "thief"]}
{"mi": "whakawhiti", "gr": "noun", "en": ["crossing over", "exchange"]}
{"mi": "whaikaha", "gr": "noun", "en": ["disability"]}
{"mi": "motumotu", "gr": "noun", "en": ["firebrand", "piece of burning wood", "a dumpling or doughboy"]}
{"mi": "wareware", "gr": "noun", "en": ["forgetfulness"]}
{"mi": "kakau", "gr": "noun", "en": ["stalk (of a plant)", "handle (of a tool)"]}
{"mi": "takai", "gr": "noun", "en": ["a wrapper; a covering"]}
{"mi": "kanga", "gr": "noun", "en": ["cursing", "swear word"]}
{"mi": "umere", "gr": "noun", "en": ["song, chant", "praise, applause"]}
{"mi": "taina", "gr": "noun", "en": ["younger brother of a male", "younger sister of a female"]}
{"mi": "mamae", "gr": "noun", "en": ["pain", "bullroarer"]}
{"mi": "tūmau", "gr": "noun", "en": ["servant"]}
{"mi": "parauri", "gr": "noun", "en": ["brown"]}
{"mi": "kōhua", "gr": "noun", "en": ["boiler, pot (any metal cooking vessel for boiling food)", "a trough or vessel dug out of a wooden trunk for boiling food using heated stones (pot boilers)."]}
{"mi": "kōpaki", "gr": "noun", "en": ["husk", "envelope, wrapper", "pie"]}
{"mi": "mōmona", "gr": "noun", "en": ["fat, corpulence, obesity", "fertility, richness"]}
{"mi": "ōriwa", "gr": "noun", "en": ["olive", "olive tree"]}
{"mi": "tāhuhu", "gr": "noun", "en": ["ridgepole", "horizontal beam supporting a kite's wings", "lineage"]}
{"mi": "rarau", "gr": "noun", "en": ["root"]}
{"mi": "tioro", "gr": "noun", "en": ["squawk, screech, shriek", "stitchbird"]}
{"mi": "kuīni", "gr": "noun", "en": ["queen (monarch)", "queen"]}
{"mi": "kōwhiri", "gr": "noun", "en": ["choice, selection"]}
{"mi": "wewehi", "gr": "noun", "en": ["dread, fear, awe", "regard", "spine, e.g. of a dorsal fin"]}
{"mi": "kēhua", "gr": "noun", "en": ["ghost", "joker (playing card)"]}
{"mi": "aronga", "gr": "noun", "en": ["definition"]}
{"mi": "kaipatu", "gr": "noun", "en": ["beater, striker, attacker", "assailant", "batsman"]}
{"mi": "waro", "gr": "noun", "en": ["pit, chasm, abyss", "mine", "coal, charcoal", "carbon"]}
{"mi": "kaho", "gr": "noun", "en": ["crossbar; crossbeam", "roof batten", "fence rail", "horizontal wall batten in a meeting house"]}
{"mi": "uranga", "gr": "noun", "en": ["glow", "sunrise", "sunset"]}
{"mi": "hāka", "gr": "noun", "en": ["jug", "groundsel", "hack (horse)", "butterweed"]}
{"mi": "āria", "gr": "noun", "en": ["tidal pool", "trough between shoals", "gap between rocks", "bay"]}
{"mi": "tonga", "gr": "noun", "en": ["south"]}
{"mi": "maita", "gr": "noun", "en": ["bowls, bowling"]}
{"mi": "tīeke", "gr": "noun", "en": ["saddleback (Philesturnus spp.)"]}
{"mi": "kawau", "gr": "noun", "en": ["cormorant, shag"]}
{"mi": "makariri", "gr": "noun", "en": ["cold, coldness", "winter", "frost"]}
{"mi": "whakamā", "gr": "noun", "en": ["shame, embarrassment"]}
{"mi": "waimarie", "gr": "noun", "en": ["good fortune", "luck"]}
{"mi": "matikuku", "gr": "noun", "en": ["nail (of the fingers and toes)", "hoof", "claw, talon (of birds etc)"]}
{"mi": "whakanui", "gr": "noun", "en": ["celebration"]}
{"mi": "tō", "gr": "noun", "en": ["plant stem/stalk – especially of non-woody monocots such as raupō (Typha orientalis), maize etc.", "finger", "sugar cane"]}
{"mi": "tō", "gr": "noun", "en": ["stove"]}
{"mi": "tō", "gr": "noun", "en": ["dragging", "portage"]}
{"mi": "taikoa", "gr": "noun", "en": ["A New Zealander belonging to the established Chinese New Zealand communities of New Zealand.", "A New Zealander of longstanding Cantonese descent, especially one belonging to a locally rooted family whose history in New Zealand extends across generations."]}
{"mi": "hongi", "gr": "noun", "en": ["The Maori greeting of touching noses."]}
{"mi": "akiri", "gr": "noun", "en": ["rejection, disposal, discarding"]}
{"mi": "koura", "gr": "noun", "en": ["gold"]}
{"mi": "koura", "gr": "noun", "en": ["koura (freshwater crayfish of the genus Paranephrops, endemic to New Zealand)"]}
{"mi": "renga", "gr": "noun", "en": ["turmeric"]}
{"mi": "katoa", "gr": "noun", "en": ["everything, everybody"]}
{"mi": "hauku", "gr": "noun", "en": ["dew"]}
{"mi": "peara", "gr": "noun", "en": ["pearl"]}
{"mi": "akeake", "gr": "noun", "en": ["broadleaf hopbush (Dodonaea viscosa)", "mountain akeake (Shawia avicenniifolia syn. Olearia avicenniaefolia)", "Chatham Island akeake (Olearia traversiorum)"]}
{"mi": "akeake", "gr": "noun", "en": ["infertile land"]}
{"mi": "mākutu", "gr": "noun", "en": ["sorcery (magical power)", "curse (supernatural detriment)"]}
{"mi": "pīata", "gr": "noun", "en": ["brightness, shine, gloss finish"]}
{"mi": "pakini", "gr": "noun", "en": ["nick (small cut in a surface)", "apostrophe (the character ’)"]}
{"mi": "uraura", "gr": "noun", "en": ["krill (small marine crustacean)", "whalefeed, Munida gregaria", "shrimp (decapod crustacean)"]}
{"mi": "haika", "gr": "noun", "en": ["anchor"]}
{"mi": "mamao", "gr": "noun", "en": ["distance"]}
{"mi": "kōhue", "gr": "noun", "en": ["boiler, pot (for boiling food)"]}
{"mi": "auporo", "gr": "noun", "en": ["strike", "work stoppage"]}
{"mi": "hautū", "gr": "noun", "en": ["leader"]}
{"mi": "atiti", "gr": "noun", "en": ["acid"]}
{"mi": "tāwhiri", "gr": "noun", "en": ["welcoming, a welcome"]}
{"mi": "whakataka", "gr": "noun", "en": ["preparation", "assembly, muster, gathering, expedition", "director, chief, administrator, controller, leader", "whakataka, Corokia macrocarpa (a shrub or tree to 6 m tall with stout branches and dark, rough bark. Leaves are leathery and shiny on top with white tomentum underneath. Petals are bright yellow and drupes yellow, dark red to black.)"]}
{"mi": "tūtaki", "gr": "noun", "en": ["bolt or bar between two sides of a double door, latch"]}
{"mi": "mātaki", "gr": "noun", "en": ["inspection"]}
{"mi": "tāniko", "gr": "noun", "en": ["fingerweaving", "embroidery"]}
{"mi": "pātari", "gr": "noun", "en": ["persuasiveness"]}
{"mi": "pūrou", "gr": "noun", "en": ["pointed stick; skewer, brochette"]}
{"mi": "pīkau", "gr": "noun", "en": ["backpack"]}
{"mi": "tōpito", "gr": "noun", "en": ["end", "extremity"]}
{"mi": "awarua", "gr": "noun", "en": ["trench, drain", "corridor, passageway"]}
{"mi": "haeata", "gr": "noun", "en": ["beam, ray of light", "dawn, daybreak"]}
{"mi": "hamuti", "gr": "noun", "en": ["dung, poop, poo, faeces, feces, doodoo", "toilet"]}
{"mi": "awe", "gr": "noun", "en": ["soot", "white feather", "power, influence"]}
{"mi": "puka", "gr": "noun", "en": ["cabbage", "Meryta sinclairii", "Griselinia lucida"]}
{"mi": "hiku", "gr": "noun", "en": ["tail", "rear, end", "apex (of a leaf)"]}
{"mi": "karu", "gr": "noun", "en": ["spongy matter (pulp around the seeds of a bottle gourd, brains, clotted blood etc)", "pupil of the eye", "eye"]}
{"mi": "weta", "gr": "noun", "en": ["dirt", "filth; excrement", "no way; hell no; never!"]}
{"mi": "uku", "gr": "noun", "en": ["clay", "pottery", "soap"]}
{"mi": "hinu", "gr": "noun", "en": ["fat, grease", "lard", "oil, petrol"]}
{"mi": "tumu", "gr": "noun", "en": ["foundation, base", "trunk, stump", "post, pole, stake"]}
{"mi": "tētē", "gr": "noun", "en": ["frond, shoot", "chief", "armless, legless figurehead on a canoe"]}
{"mi": "mātā", "gr": "noun", "en": ["heap, layer", "Carex secta", "longfin perch, pink maomao"]}
{"mi": "āraimate", "gr": "noun", "en": ["immunity"]}
{"mi": "kāeo", "gr": "noun", "en": ["Cook's turban (Cookia sulcata)", "dark rock shell", "any member of the species Hyridella menziesi of bivalve molluscs"]}
{"mi": "kapekape", "gr": "noun", "en": ["stirfry"]}
{"mi": "kapekape", "gr": "noun", "en": ["northwest", "northwest wind"]}
{"mi": "korukoru", "gr": "noun", "en": ["wrinkle", "nook, cavity"]}
{"mi": "korukoru", "gr": "noun", "en": ["turkey"]}
{"mi": "hangarau", "gr": "noun", "en": ["trickery, deception", "technology"]}
{"mi": "porotaka", "gr": "noun", "en": ["globe; spherical model of Earth", "sphere"]}
{"mi": "porotaka", "gr": "noun", "en": ["spinning top"]}
{"mi": "rārangi", "gr": "noun", "en": ["list", "line, row, queue", "clause, section"]}
{"mi": "konene", "gr": "noun", "en": ["wanderer, wayfarer, drifter", "refugee, displaced person"]}
{"mi": "karaka", "gr": "noun", "en": ["karaka (Corynocarpus laevigatus)", "orange"]}
{"mi": "karaka", "gr": "noun", "en": ["clock"]}
{"mi": "tārere", "gr": "noun", "en": ["swing, hanging seat", "pendulum"]}
{"mi": "mahaki", "gr": "noun", "en": ["sickness", "disease"]}
{"mi": "anuanu", "gr": "noun", "en": ["aversion"]}
{"mi": "kakano", "gr": "noun", "en": ["texture, grain (of wood)", "variety"]}
{"mi": "kakano", "gr": "noun", "en": ["berry"]}
{"mi": "kaokao", "gr": "noun", "en": ["side, flank (of the body, hills and mountains, canoes, etc.)", "ribs"]}
{"mi": "huahua", "gr": "noun", "en": ["water vessel used for boiling in such a method"]}
{"mi": "karāhe", "gr": "noun", "en": ["glass", "mirror"]}
{"mi": "karāhe", "gr": "noun", "en": ["class"]}
{"mi": "herehere", "gr": "noun", "en": ["prisoner"]}
{"mi": "mirumiru", "gr": "noun", "en": ["bubble"]}
{"mi": "tauranga", "gr": "noun", "en": ["anchorage"]}
{"mi": "ewe", "gr": "noun", "en": ["afterbirth, placenta", "womb"]}
{"mi": "manga", "gr": "noun", "en": ["branch", "stream, creek", "faculty (of a university), unit (of a hospital)", "act (of a play)"]}
{"mi": "hope", "gr": "noun", "en": ["waist", "hip (ringa hope)"]}
{"mi": "hue", "gr": "noun", "en": ["bottle gourd, Lagenaria siceraria", "any container using the shell of this fruit, calabash"]}
{"mi": "pene", "gr": "noun", "en": ["pen", "pencil"]}
{"mi": "taro", "gr": "noun", "en": ["taro", "bread"]}
{"mi": "puha", "gr": "noun", "en": ["gill (of fish)", "the sow thistle, also called rareke, or raraki"]}
{"mi": "rō", "gr": "noun", "en": ["ant", "mantis, praying mantis; stick insect"]}
{"mi": "whē", "gr": "noun", "en": ["stick insect esp. Acanthoderus horridus", "mantis, praying mantis"]}
{"mi": "kihu", "gr": "noun", "en": ["a thrum or fringe thread", "noodle"]}
{"mi": "rimu", "gr": "noun", "en": ["moss (plants of the division Bryophyta)", "a large tree native to New Zealand (Dacrydium cupressinum); see English rimu."]}
{"mi": "ipu", "gr": "noun", "en": ["cup", "any small receptacle"]}
{"mi": "pāpā", "gr": "noun", "en": ["father, dad", "uncle"]}
{"mi": "rūpi", "gr": "noun", "en": ["ruby", "rupee"]}
{"mi": "aute", "gr": "noun", "en": ["paper mulberry", "mulberry bark used to make clothes"]}
{"mi": "rino", "gr": "noun", "en": ["iron", "metal"]}
{"mi": "hāte", "gr": "noun", "en": ["shirt", "hearts"]}
{"mi": "iaia", "gr": "noun", "en": ["blood vessels, veins", "sinews; tendons"]}
{"mi": "whau", "gr": "noun", "en": ["corkwood, Entelea arborescens", "five-finger, Pseudopanax arboreus"]}
{"mi": "āwhā", "gr": "noun", "en": ["gale, storm, hurricane, any strong winds", "heavy or torrential rain"]}
{"mi": "paea", "gr": "noun", "en": ["swordfish (Xiphias gladius)", "flint"]}
{"mi": "kōpī", "gr": "noun", "en": ["Corynocarpus laevigatus", "ginger, Zingiber officinale"]}
{"mi": "kōiwi", "gr": "noun", "en": ["human bone", "corpse", "person, self", "descendants"]}
{"mi": "tupari", "gr": "noun", "en": ["palm-leaf fern"]}
{"mi": "tohorā", "gr": "noun", "en": ["right whale"]}
{"mi": "haeana", "gr": "noun", "en": ["iron"]}
{"mi": "hākete", "gr": "noun", "en": ["jacket"]}
{"mi": "kekeno", "gr": "noun", "en": ["New Zealand fur seal (Arctocephalus forsteri)"]}
{"mi": "kōtuku", "gr": "noun", "en": ["great egret"]}
{"mi": "parore", "gr": "noun", "en": ["luderick (Girella tricuspidata)"]}
{"mi": "taiaki", "gr": "noun", "en": ["hormone"]}
{"mi": "ārohirohi", "gr": "noun", "en": ["shimmering heat", "feeling, sense"]}
{"mi": "piropiro", "gr": "noun", "en": ["bowels, intestines"]}
{"mi": "hanihani", "gr": "noun", "en": ["disparaging comments"]}
{"mi": "miromiro", "gr": "noun", "en": ["A bird of subspecies Petroica macrocephala toitoi of tom-tits, of the North Island"]}
{"mi": "kaimoana", "gr": "noun", "en": ["seafood, shellfish"]}
{"mi": "ihumoana", "gr": "noun", "en": ["Portuguese man-of-war (Physalia physalis)"]}
{"mi": "tarawhiti", "gr": "noun", "en": ["hoop", "torus"]}
{"mi": "whakaruru", "gr": "noun", "en": ["screen, shelter, protector", "a facial gesture in kapa haka where the enlarged eyes stare in one direction and the tongue protrudes in the opposite direction"]}
{"mi": "whaiaro", "gr": "noun", "en": ["self", "person"]}
{"mi": "kakara", "gr": "noun", "en": ["scent, smell, odour"]}
{"mi": "aniani", "gr": "noun", "en": ["derision, disapproval, ridicule"]}
{"mi": "hauhau", "gr": "noun", "en": ["whip"]}
{"mi": "hapori", "gr": "noun", "en": ["community"]}
{"mi": "keakea", "gr": "noun", "en": ["quack (of a duck)"]}
{"mi": "mētara", "gr": "noun", "en": ["metal"]}
{"mi": "mētara", "gr": "noun", "en": ["medal"]}
{"mi": "tūhāhā", "gr": "noun", "en": ["individuality"]}
{"mi": "kokomo", "gr": "noun", "en": ["shirt"]}
{"mi": "pūrere", "gr": "noun", "en": ["ornamental feathers lining the sides (gunwales, near its strakes) of a waka"]}
{"mi": "pūrere", "gr": "noun", "en": ["appliance, device"]}
{"mi": "heihei", "gr": "noun", "en": ["chicken"]}
{"mi": "tāhono", "gr": "noun", "en": ["interface"]}
{"mi": "kororā", "gr": "noun", "en": ["little penguin; blue penguin (Eudyptula minor)"]}
{"mi": "kāmera", "gr": "noun", "en": ["camera"]}
{"mi": "kāmera", "gr": "noun", "en": ["camel"]}
{"mi": "utuutu", "gr": "noun", "en": ["repayments"]}
{"mi": "aronui", "gr": "noun", "en": ["armspan, fathom"]}
{"mi": "hākure", "gr": "noun", "en": ["lice"]}
{"mi": "haunga", "gr": "noun", "en": ["stench, stink"]}
{"mi": "hiainu", "gr": "noun", "en": ["thirst"]}
{"mi": "hākuku", "gr": "noun", "en": ["radula (tongue of mollusks used to scrape rocks)"]}
{"mi": "pūkaka", "gr": "noun", "en": ["humerus, thighbone"]}
{"mi": "pātiki", "gr": "noun", "en": ["flounder"]}
{"mi": "kōripo", "gr": "noun", "en": ["whirlpool, eddy"]}
{"mi": "tōkere", "gr": "noun", "en": ["a deathwatch beetle (Anobiidae)"]}
{"mi": "tōkere", "gr": "noun", "en": ["castanets made of wood, bone, or a pair of bivalve shells"]}
{"mi": "rīanga", "gr": "noun", "en": ["screen, stretched physical divider"]}
{"mi": "rīanga", "gr": "noun", "en": ["insurance"]}
{"mi": "wawata", "gr": "noun", "en": ["yearning, aspiration, hope, dream"]}
{"mi": "hītako", "gr": "noun", "en": ["the act of yawning"]}
{"mi": "tiritiri", "gr": "noun", "en": ["scattering, apportion", "shimmering, flickering, mirage"]}
{"mi": "whakaata", "gr": "noun", "en": ["reflection", "mirror"]}
{"mi": "whakapohane", "gr": "noun", "en": ["the act of mooning, showing one's buttocks"]}
{"mi": "rapunga", "gr": "noun", "en": ["search", "investigation"]}
{"mi": "paretai", "gr": "noun", "en": ["river bank", "washboard (of a canoe)"]}
{"mi": "anu", "gr": "noun", "en": ["cold"]}
{"mi": "more", "gr": "noun", "en": ["taproot"]}
{"mi": "muka", "gr": "noun", "en": ["prepared fibre of harakeke"]}
{"mi": "kamu", "gr": "noun", "en": ["Hawai'i birdcatching sedge (Carex uncinata)"]}
{"mi": "toki", "gr": "noun", "en": ["axe"]}
{"mi": "puke", "gr": "noun", "en": ["hill"]}
{"mi": "pine", "gr": "noun", "en": ["pin, tack, brooch"]}
{"mi": "mato", "gr": "noun", "en": ["deep swamp, deep valley"]}
{"mi": "rai", "gr": "noun", "en": ["rye"]}
{"mi": "oki", "gr": "noun", "en": ["rest"]}
{"mi": "pari", "gr": "noun", "en": ["cliff"]}
{"mi": "hore", "gr": "noun", "en": ["scrofula"]}
{"mi": "aho", "gr": "noun", "en": ["fishing line; string"]}
{"mi": "kutu", "gr": "noun", "en": ["louse (insect)"]}
{"mi": "haku", "gr": "noun", "en": ["yellowtail amberjack (Seriola lalandi)"]}
{"mi": "riha", "gr": "noun", "en": ["nit"]}
{"mi": "umu", "gr": "noun", "en": ["oven"]}
{"mi": "wati", "gr": "noun", "en": ["watch"]}
{"mi": "pune", "gr": "noun", "en": ["spoon"]}
{"mi": "rupe", "gr": "noun", "en": ["New Zealand pigeon"]}
{"mi": "honu", "gr": "noun", "en": ["turtle"]}
{"mi": "ure", "gr": "noun", "en": ["penis"]}
{"mi": "toma", "gr": "noun", "en": ["tomb, mausoleum"]}
{"mi": "noke", "gr": "noun", "en": ["earthworm"]}
{"mi": "reme", "gr": "noun", "en": ["lamb"]}
{"mi": "autō", "gr": "noun", "en": ["magnet"]}
{"mi": "tīra", "gr": "noun", "en": ["steel"]}
{"mi": "mōkō", "gr": "noun", "en": ["smoko"]}
{"mi": "rōtō", "gr": "noun", "en": ["lotto"]}
{"mi": "tute", "gr": "noun", "en": ["masculine equivalent of tūī"]}
{"mi": "tona", "gr": "noun", "en": ["wart, corn, nodule"]}
{"mi": "waiū", "gr": "noun", "en": ["milk"]}
{"mi": "hupa", "gr": "noun", "en": ["soup, broth"]}
{"mi": "epa", "gr": "noun", "en": ["wall post"]}
{"mi": "huia", "gr": "noun", "en": ["huia (†Heteralocha acutirostris)"]}
{"mi": "hema", "gr": "noun", "en": ["genitalia"]}
{"mi": "ngū", "gr": "noun", "en": ["broad squid (Sepioteuthis australis)"]}
{"mi": "roke", "gr": "noun", "en": ["dung, poop, poo, faeces, feces, doodoo"]}
{"mi": "keke", "gr": "noun", "en": ["cake"]}
{"mi": "hopi", "gr": "noun", "en": ["soap"]}
{"mi": "wētā", "gr": "noun", "en": ["weta, any of various species of insects resembling crickets"]}
{"mi": "weka", "gr": "noun", "en": ["woodhen (Gallirallus australis)"]}
{"mi": "māti", "gr": "noun", "en": ["ripe fruit of the tree fuchsia or kōtukutuku, Fuchsia excorticata"]}
{"mi": "kūkū", "gr": "noun", "en": ["pigeon"]}
{"mi": "hihi", "gr": "noun", "en": ["feeler, antenna"]}
{"mi": "pāti", "gr": "noun", "en": ["political party"]}
{"mi": "tiā", "gr": "noun", "en": ["jar (cylindrical container)"]}
{"mi": "tāpu", "gr": "noun", "en": ["a tub, a vat"]}
{"mi": "hēki", "gr": "noun", "en": ["egg"]}
{"mi": "nohu", "gr": "noun", "en": ["deepwater burrfish (Allomycterus pilatus)"]}
{"mi": "hīti", "gr": "noun", "en": ["sheet, bedsheet"]}
{"mi": "kāhu", "gr": "noun", "en": ["swamp harrier (Circus approximans), a species of harrier hawk"]}
{"mi": "tīhi", "gr": "noun", "en": ["cheese"]}
{"mi": "aihi", "gr": "noun", "en": ["dolphin"]}
{"mi": "tahā", "gr": "noun", "en": ["calabash, container using dried shell of bottle gourd fruit"]}
{"mi": "nanī", "gr": "noun", "en": ["any Brassica plant."]}
{"mi": "hūhi", "gr": "noun", "en": ["swamp"]}
{"mi": "pēpi", "gr": "noun", "en": ["baby"]}
{"mi": "ōrea", "gr": "noun", "en": ["New Zealand longfin eel (Anguilla dieffenbachii)"]}
{"mi": "ariki", "gr": "noun", "en": ["paramount chief of a tribe, the most senior by descent of the rangatira (chiefs) of the tribe", "first-born male or female in a family of high rank", "leader"]}
{"mi": "tenga", "gr": "noun", "en": ["crop (of a bird)", "Adam's apple", "goitre"]}
{"mi": "pītau", "gr": "noun", "en": ["frond, shoot", "figurehead on a canoe with such a carving", "canoe with such a figurehead"]}
{"mi": "kāwai", "gr": "noun", "en": ["tentacle", "tendril, shoot", "lineage, pedigree"]}
{"mi": "pākau", "gr": "noun", "en": ["wing", "shoulder blade", "gully fern (Pakau pennigera)"]}
{"mi": "tāiko", "gr": "noun", "en": ["black petrel", "Westland petrel, a seabird endemic to Aotearoa.", "New Zealand sandalwood (Mida salicifolia), a tree endemic to the North Island of Aotearoa."]}
{"mi": "whatutoto", "gr": "noun", "en": ["red heartwood"]}
{"mi": "āwhiowhio", "gr": "noun", "en": ["whirlwind"]}
{"mi": "wharenoho", "gr": "noun", "en": ["housing, accommodation", "dormitory, barracks"]}
{"mi": "pounamu", "gr": "noun", "en": ["greenstone, nephrite", "glass bottle"]}
{"mi": "tokotoko", "gr": "noun", "en": ["walking stick, cane", "crutch", "staff"]}
{"mi": "aumoana", "gr": "noun", "en": ["open sea", "blue"]}
{"mi": "hauraro", "gr": "noun", "en": ["north wind"]}
{"mi": "moehewa", "gr": "noun", "en": ["dream"]}
{"mi": "pūreirei", "gr": "noun", "en": ["cluster", "windthrow", "buffer", "Any of species Carex secta of sedges"]}
{"mi": "kōkōwai", "gr": "noun", "en": ["red ochre"]}
{"mi": "tauraki", "gr": "noun", "en": ["dehydrator"]}
{"mi": "whakatōpū", "gr": "noun", "en": ["amalgamation, consolidation"]}
{"mi": "kaniawhea", "gr": "noun", "en": ["remorse, regret, guilt, compunction"]}
{"mi": "nganga", "gr": "noun", "en": ["hail", "stone of a fruit", "core of a boil", "shell or husk"]}
{"mi": "tauiwi", "gr": "noun", "en": ["foreigner, European, non-Māori, colonist", "person coming from afar", "gentile, heathen", "outsider"]}
{"mi": "ikura", "gr": "noun", "en": ["hemorrhage", "menstruation"]}
{"mi": "kapua", "gr": "noun", "en": ["cloud", "mist"]}
{"mi": "matau", "gr": "noun", "en": ["fishhook", "hookgrass"]}
{"mi": "kauri", "gr": "noun", "en": ["A conifer of the genus Agathis, family Araucariaceae, found in Australasia and Melanesia.", "Agathis australis, a large conifer of the family Araucariaceae."]}
{"mi": "taniwha", "gr": "noun", "en": ["taniwha"]}
{"mi": "karaihe", "gr": "noun", "en": ["glass (substance)"]}
{"mi": "tapaono", "gr": "noun", "en": ["hexagon"]}
{"mi": "konga", "gr": "noun", "en": ["fragment, piece", "charcoal, live coal"]}
{"mi": "kuihi", "gr": "noun", "en": ["goose", "Canada goose"]}
{"mi": "āinga", "gr": "noun", "en": ["violence", "impetus"]}
{"mi": "ānini", "gr": "noun", "en": ["sensation", "headache"]}
{"mi": "rāwhiti", "gr": "noun", "en": ["east"]}
{"mi": "tīare", "gr": "noun", "en": ["fragrance, scent", "gardenia"]}
{"mi": "kōata", "gr": "noun", "en": ["glass (material)", "glass (drinking vessel)"]}
{"mi": "whākōkī", "gr": "noun", "en": ["catalyst"]}
{"mi": "kāhui", "gr": "noun", "en": ["group, cluster", "flock, herd, swarm"]}
{"mi": "whaki", "gr": "noun", "en": ["to pluck, to pick (of fruit)", "to harvest"]}
{"mi": "āpōpō", "gr": "noun", "en": ["tomorrow", "the future"]}
{"mi": "tawau", "gr": "noun", "en": ["latex or milky sap of any plant.", "rubber, flexible and pliable material made from coagulating natural latex of the rubber tree (Hevea brasiliensis)."]}
{"mi": "toroa", "gr": "noun", "en": ["an albatross, especially the royal albatross or wandering albatross", "a tuft of albatross down worn as an adornment."]}
{"mi": "tūpāpaku", "gr": "noun", "en": ["corpse, dead body", "sick person, invalid, someone who is terminally ill", "an intended victim of homicide"]}
{"mi": "tapawhā", "gr": "noun", "en": ["quadrilateral"]}
{"mi": "whakahirahira", "gr": "noun", "en": ["grandeur, greatness", "influence", "reputation, standing", "prominence", "importance", "eminence"]}
{"mi": "pekapeka", "gr": "noun", "en": ["bat (animal) – especially the species Mystacina tuberculata"]}
{"mi": "pekapeka", "gr": "noun", "en": ["toy windmill/pinwheel made from phormium leaves", "starfish", "a snood or gangion in a traditional longline set up"]}
{"mi": "rakuraku", "gr": "noun", "en": ["rake, harrow", "guitar"]}
{"mi": "mātanga", "gr": "noun", "en": ["experienced person, expert, professional"]}
{"mi": "moemoeā", "gr": "noun", "en": ["dream, vision"]}
{"mi": "whawhai", "gr": "noun", "en": ["war"]}
{"mi": "pikopiko", "gr": "noun", "en": ["fiddlehead, young fern frond (in general)"]}
{"mi": "pūmanawa", "gr": "noun", "en": ["natural talent", "software"]}
{"mi": "haramai", "gr": "noun", "en": ["welcome"]}
{"mi": "hemokai", "gr": "noun", "en": ["hunger"]}
{"mi": "marutau", "gr": "noun", "en": ["safety"]}
{"mi": "haumaru", "gr": "noun", "en": ["low frequency sound"]}
{"mi": "potipoti", "gr": "noun", "en": ["box", "a special kind of compartment with a rope-hinged lid used by tohunga"]}
{"mi": "potipoti", "gr": "noun", "en": ["conch trumpet", "sand flea, sandhopper"]}
{"mi": "uwhiuwhi", "gr": "noun", "en": ["covering"]}
{"mi": "tiketike", "gr": "noun", "en": ["height", "altitude"]}
{"mi": "retihuka", "gr": "noun", "en": ["ski", "skiing", "snowboard"]}
{"mi": "rangahau", "gr": "noun", "en": ["research", "survey"]}
{"mi": "ketekete", "gr": "noun", "en": ["astonishment, amazement, consternation", "chattering"]}
{"mi": "takirua", "gr": "noun", "en": ["pair, twosome, duo, couple, duet"]}
{"mi": "huruhuru", "gr": "noun", "en": ["feather", "coarse hair or fur (as opposed to hair on the head, for example: hair on an animal or pubic hair)"]}
{"mi": "kiripaka", "gr": "noun", "en": ["flint, quartz", "asbestos"]}
{"mi": "amana", "gr": "noun", "en": ["almond"]}
{"mi": "tiara", "gr": "noun", "en": ["vagabond"]}
{"mi": "wheke", "gr": "noun", "en": ["octopus, squid"]}
{"mi": "piana", "gr": "noun", "en": ["piano"]}
{"mi": "kawhi", "gr": "noun", "en": ["coffee"]}
{"mi": "kānga", "gr": "noun", "en": ["maize, corn"]}
{"mi": "ponga", "gr": "noun", "en": ["silver fern (Alsophila dealbata)"]}
{"mi": "taika", "gr": "noun", "en": ["tiger (Panthera tigris)"]}
{"mi": "tipua", "gr": "noun", "en": ["demon"]}
{"mi": "arata", "gr": "noun", "en": ["lettuce"]}
{"mi": "hoari", "gr": "noun", "en": ["sword"]}
{"mi": "haïra", "gr": "noun", "en": ["scythe"]}
{"mi": "mauka", "gr": "noun", "en": ["mountain"]}
{"mi": "pango", "gr": "noun", "en": ["black (colour/color)"]}
{"mi": "kanae", "gr": "noun", "en": ["grey mullet"]}
{"mi": "onika", "gr": "noun", "en": ["onyx"]}
{"mi": "maika", "gr": "noun", "en": ["banana"]}
{"mi": "tūtae", "gr": "noun", "en": ["excrement, dung, feces"]}
{"mi": "urupā", "gr": "noun", "en": ["a burial ground or cemetery"]}
{"mi": "anuhe", "gr": "noun", "en": ["caterpillar of the convolvulus hawk-moth (Agrius convolvuli)"]}
{"mi": "īkara", "gr": "noun", "en": ["eagle (bird of prey)"]}
{"mi": "āpiha", "gr": "noun", "en": ["officer, official"]}
{"mi": "whara", "gr": "noun", "en": ["Any of the several plants in the families Asteliaceae and Xanthorrhoeaceae."]}
{"mi": "raino", "gr": "noun", "en": ["rhino"]}
{"mi": "aitua", "gr": "noun", "en": ["accident, bad luck"]}
{"mi": "iuana", "gr": "noun", "en": ["iguana"]}
{"mi": "raupō", "gr": "noun", "en": ["Typha orientalis; bulrush"]}
{"mi": "koāra", "gr": "noun", "en": ["koala"]}
{"mi": "kātoa", "gr": "noun", "en": ["Any of the red variety of Leptospermum scoparium, a shrub or small tree native to New Zealand and southeast Australia."]}
{"mi": "ēkara", "gr": "noun", "en": ["eagle (bird of prey)"]}
{"mi": "āpaka", "gr": "noun", "en": ["alpaca"]}
{"mi": "karae", "gr": "noun", "en": ["seabird of unknown species"]}
{"mi": "aonga", "gr": "noun", "en": ["dawn"]}
{"mi": "aruhe", "gr": "noun", "en": ["fern, root"]}
{"mi": "autui", "gr": "noun", "en": ["brooch, cloak pin"]}
{"mi": "hākui", "gr": "noun", "en": ["old woman"]}
{"mi": "hāngī", "gr": "noun", "en": ["hangi (a traditional Māori pit oven, in which suitably wrapped raw food is lain on a base of heated stones; or, food cooked in this way)"]}
{"mi": "purei", "gr": "noun", "en": ["play (dramatic performance)"]}
{"mi": "kāwhe", "gr": "noun", "en": ["calf, a young cow or bull"]}
{"mi": "kōhia", "gr": "noun", "en": ["Passiflora tetrandra, a kind of passionfruit endemic to New Zealand."]}
{"mi": "atāta", "gr": "noun", "en": ["video"]}
{"mi": "pīwhi", "gr": "noun", "en": ["beef"]}
{"mi": "koata", "gr": "noun", "en": ["quart (unit of measure)"]}
{"mi": "mangā", "gr": "noun", "en": ["barracouta (Thyrsites atun)"]}
{"mi": "raihi", "gr": "noun", "en": ["rice"]}
{"mi": "poniu", "gr": "noun", "en": ["yellowcress (Rorippa palustris)"]}
{"mi": "nanua", "gr": "noun", "en": ["red moki (Cheilodactylus spectabilis)"]}
{"mi": "unahi", "gr": "noun", "en": ["scale, small fragment covering skin of a fish"]}
{"mi": "inohi", "gr": "noun", "en": ["scale, small fragment covering skin of a fish"]}
{"mi": "mataī", "gr": "noun", "en": ["matai, black pine (Prumnopitys taxifolia)"]}
{"mi": "hīnau", "gr": "noun", "en": ["hinau (Elaeocarpus dentatus)"]}
{"mi": "akaaka", "gr": "noun", "en": ["fibrous vines or roots", "nerve", "state of turmoil"]}
{"mi": "piopio", "gr": "noun", "en": ["piopio (Turnagra spp.)", "double-banded plover (Charadrius bicinctus)", "New Zealand blueberry (Dianella nigra)"]}
{"mi": "ahunga", "gr": "noun", "en": ["bearing, heading", "generation", "heap"]}
{"mi": "matawā", "gr": "noun", "en": ["clock", "watch", "chronometer"]}
{"mi": "kiokio", "gr": "noun", "en": ["palm-leaf fern (Blechnum novae-zelandiae)", "mountain kiokio (Blechnum procerum)", "crown fern (Blechnum discolor)"]}
{"mi": "ahotea", "gr": "noun", "en": ["heartbreak, heartache", "distress, stress", "celery pine"]}
{"mi": "hūngoingoi", "gr": "noun", "en": ["elderly woman"]}
{"mi": "tukituki", "gr": "noun", "en": ["pestle"]}
{"mi": "purupuru", "gr": "noun", "en": ["caulk"]}
{"mi": "angiangi", "gr": "noun", "en": ["gentle breeze", "taupata"]}
{"mi": "hukapapa", "gr": "noun", "en": ["frost", "ice"]}
{"mi": "makimaki", "gr": "noun", "en": ["monkey", "ape"]}
{"mi": "kumukumu", "gr": "noun", "en": ["bluefin gurnard (Chelidonichthys kumu)", "lizard"]}
{"mi": "hākoakoa", "gr": "noun", "en": ["bliss", "skua"]}
{"mi": "mātakitaki", "gr": "noun", "en": ["inspection, observation, sightseeing"]}
{"mi": "whārangi", "gr": "noun", "en": ["page, sheet", "rangiona (Brachyglottis repanda)"]}
{"mi": "hangarua", "gr": "noun", "en": ["The act of recycling", "Recyclable goods"]}
{"mi": "hutihuti", "gr": "noun", "en": ["a banana-shaped variety of kumara"]}
{"mi": "tuahiwi", "gr": "noun", "en": ["ridge of a hill", "shoal", "skeleton", "stick figure"]}
{"mi": "ataata", "gr": "noun", "en": ["shadow, image", "video"]}
{"mi": "kōwhai", "gr": "noun", "en": ["Any of several small woody legume trees in the genus Sophora native to New Zealand that have yellow flowers. The national flower of New Zealand.", "yellow"]}
{"mi": "whanga", "gr": "noun", "en": ["bay, gulf", "stretch of water"]}
{"mi": "kauwae", "gr": "noun", "en": ["jawbone", "chin"]}
{"mi": "tauhou", "gr": "noun", "en": ["novice, stranger.", "silvereye, wax-eye, Zosterops lateralis."]}
{"mi": "raurau", "gr": "noun", "en": ["foliage", "thatch"]}
{"mi": "manaia", "gr": "noun", "en": ["a manaia (a figure often seen in art, generally depicted as a man with a bird's head)", "a seahorse"]}
{"mi": "kahika", "gr": "noun", "en": ["synonym of kahikatea", "Malay apple"]}
{"mi": "ahoroa", "gr": "noun", "en": ["moon", "bright moonlight"]}
{"mi": "pouako", "gr": "noun", "en": ["teacher", "tutor"]}
{"mi": "kōauau", "gr": "noun", "en": ["cross-blown flute made of wood, bone or a species of kelp", "bull kelp (Durvillaea antarctica)"]}
{"mi": "moeone", "gr": "noun", "en": ["stone bass, wreckfish", "toheroa (an edible mollusc)"]}
{"mi": "manatū", "gr": "noun", "en": ["government", "authority"]}
{"mi": "aroaro", "gr": "noun", "en": ["presence", "front of a person"]}
{"mi": "āwaawa", "gr": "noun", "en": ["valley", "creeks"]}
{"mi": "hāpoki", "gr": "noun", "en": ["den", "pit"]}
{"mi": "mōrehu", "gr": "noun", "en": ["remnant", "survivor"]}
{"mi": "kōkopu", "gr": "noun", "en": ["cockabully (fish of the genus Gobiomorphus)", "kokopu (fish of the genus Galaxias)"]}
{"mi": "awaawa", "gr": "noun", "en": ["groove", "gully, gorge"]}
{"mi": "pūkoro", "gr": "noun", "en": ["pouch", "pocket"]}
{"mi": "pāhihi", "gr": "noun", "en": ["passage", "passenger"]}
{"mi": "rauemi", "gr": "noun", "en": ["resource", "material"]}
{"mi": "kounga", "gr": "noun", "en": ["quality", "excellence"]}
{"mi": "hukapuri", "gr": "noun", "en": ["hard frost"]}
{"mi": "rongo", "gr": "noun", "en": ["hearing", "any other sense excluding sight", "perception, awareness", "fame", "news"]}
{"mi": "rongo", "gr": "noun", "en": ["peace"]}
{"mi": "hangahanga", "gr": "noun", "en": ["practice, habit"]}
{"mi": "mōhio", "gr": "noun", "en": ["knowledge", "an expert", "wisdom"]}
{"mi": "mā", "gr": "noun", "en": ["white"]}
{"mi": "rongonui", "gr": "noun", "en": ["fame; renown"]}
{"mi": "kiwikiwi", "gr": "noun", "en": ["grey"]}
{"mi": "kiwikiwi", "gr": "noun", "en": ["Blechnum fluviatile, the star fern or creek fern."]}
{"mi": "maramara", "gr": "noun", "en": ["piece, bit, portion, chip, splinter."]}
{"mi": "kutikuti", "gr": "noun", "en": ["scissors, shears, clippers"]}
{"mi": "kōuraura", "gr": "noun", "en": ["shrimp (decapod crustacean)"]}
{"mi": "raumanga", "gr": "noun", "en": ["hound's tongue fern (Microsorum pustulatum)"]}
{"mi": "raumanga", "gr": "noun", "en": ["kitchen bench"]}
{"mi": "tangitangi", "gr": "noun", "en": ["sound", "salute", "wave"]}
{"mi": "apārangi", "gr": "noun", "en": ["group of noble people"]}
{"mi": "hanahana", "gr": "noun", "en": ["garment"]}
{"mi": "harawene", "gr": "noun", "en": ["envy, jealousy"]}
{"mi": "karikari", "gr": "noun", "en": ["notch"]}
{"mi": "hinahina", "gr": "noun", "en": ["Melicytus ramiflorus."]}
{"mi": "kikokiko", "gr": "noun", "en": ["flesh, meat"]}
{"mi": "toretore", "gr": "noun", "en": ["sea anemone"]}
{"mi": "tāmahana", "gr": "noun", "en": ["bubble and squeak"]}
{"mi": "harehare", "gr": "noun", "en": ["skin rash, sore, eczema, skin ailment, skin disorder"]}
{"mi": "takitoru", "gr": "noun", "en": ["group of three, trio, threesome"]}
{"mi": "hauwai", "gr": "noun", "en": ["hydrogen"]}
{"mi": "angina", "gr": "noun", "en": ["death"]}
{"mi": "morehu", "gr": "noun", "en": ["Followers of the Ratana Church, remnants of tribes, survivors."]}
{"mi": "putoko", "gr": "noun", "en": ["slug"]}
{"mi": "tohutō", "gr": "noun", "en": ["macron"]}
{"mi": "tōmato", "gr": "noun", "en": ["tomato"]}
{"mi": "tātahi", "gr": "noun", "en": ["beach"]}
{"mi": "panata", "gr": "noun", "en": ["panther"]}
{"mi": "pereti", "gr": "noun", "en": ["plate, platter"]}
{"mi": "takahē", "gr": "noun", "en": ["takahē, species of large flightless bird in the Rallidae family, endemic to New Zealand."]}
{"mi": "kokoru", "gr": "noun", "en": ["bay (gulf)"]}
{"mi": "aponga", "gr": "noun", "en": ["stack, pile"]}
{"mi": "rāpeti", "gr": "noun", "en": ["rabbit"]}
{"mi": "karani", "gr": "noun", "en": ["currant (small raisin)"]}
{"mi": "kiekie", "gr": "noun", "en": ["A vine used by the Maori for food and as material for mats, Freycinetia banksii"]}
{"mi": "panana", "gr": "noun", "en": ["banana"]}
{"mi": "pīkake", "gr": "noun", "en": ["peacock"]}
{"mi": "tēneti", "gr": "noun", "en": ["tent"]}
{"mi": "taiaha", "gr": "noun", "en": ["taiaha"]}
{"mi": "tuanui", "gr": "noun", "en": ["roof"]}
{"mi": "hānara", "gr": "noun", "en": ["handlebar"]}
{"mi": "otinga", "gr": "noun", "en": ["result, product, quotient"]}
{"mi": "pūmārō", "gr": "noun", "en": ["hardware"]}
{"mi": "pūnaha", "gr": "noun", "en": ["system"]}
{"mi": "kapuni", "gr": "noun", "en": ["natural gas"]}
{"mi": "hauora", "gr": "noun", "en": ["health"]}
{"mi": "mānuka", "gr": "noun", "en": ["Leptospermum scoparium, a shrub or small tree native to New Zealand and southeast Australia."]}
{"mi": "kakape", "gr": "noun", "en": ["chopsticks"]}
{"mi": "takoha", "gr": "noun", "en": ["pledge"]}
{"mi": "pōkiha", "gr": "noun", "en": ["fox (animal in genus Vulpes)"]}
{"mi": "wuruhi", "gr": "noun", "en": ["wolf (Canis lupus)"]}
{"mi": "rēparo", "gr": "noun", "en": ["leopard (Panthera pardus)"]}
{"mi": "rēpara", "gr": "noun", "en": ["leopard (Panthera pardus)"]}
{"mi": "warapī", "gr": "noun", "en": ["wallaby"]}
{"mi": "tūpara", "gr": "noun", "en": ["double-barrelled shotgun"]}
{"mi": "hiriwa", "gr": "noun", "en": ["silver"]}
{"mi": "raiona", "gr": "noun", "en": ["lion (big cat)"]}
{"mi": "roanga", "gr": "noun", "en": ["continuation"]}
{"mi": "kohuke", "gr": "noun", "en": ["mineral"]}
{"mi": "hinehī", "gr": "noun", "en": ["Someone assigned male at birth who has a female gender identity"]}
{"mi": "atanga", "gr": "noun", "en": ["interface"]}
{"mi": "pāreti", "gr": "noun", "en": ["porridge"]}
{"mi": "māhina", "gr": "noun", "en": ["moon"]}
{"mi": "karoro", "gr": "noun", "en": ["black-backed gull (Larus dominicanus)"]}
{"mi": "makura", "gr": "noun", "en": ["any member of the species Carex secta of sedges endemic to New Zealand"]}
{"mi": "pīhopa", "gr": "noun", "en": ["bishop"]}
{"mi": "tūāuri", "gr": "noun", "en": ["indigo"]}
{"mi": "kaihao", "gr": "noun", "en": ["fisher, fisherman (using a net)"]}
{"mi": "akiaki", "gr": "noun", "en": ["red-billed gull (Chroicocephalus novaehollandiae scopulinus)"]}
{"mi": "katatē", "gr": "noun", "en": ["red-billed gull (Chroicocephalus novaehollandiae scopulinus)"]}
{"mi": "makorā", "gr": "noun", "en": ["red-billed gull (Chroicocephalus novaehollandiae scopulinus)"]}
{"mi": "rourou", "gr": "noun", "en": ["a basket for food"]}
{"mi": "miware", "gr": "noun", "en": ["young snail-whelk (Haustrum haustorium, brown rock shell or dark rock shell)"]}
{"mi": "kōtare", "gr": "noun", "en": ["The sacred kingfisher, Todiramphus sanctus."]}
{"mi": "pāteke", "gr": "noun", "en": ["The brown teal, a species of dabbling duck."]}
{"mi": "ahurewa", "gr": "noun", "en": ["oracle, shrine, sacred place", "platform", "throne"]}
{"mi": "aikiha", "gr": "noun", "en": ["handkerchief"]}
{"mi": "araroa", "gr": "noun", "en": ["corridor, passage"]}
{"mi": "atarau", "gr": "noun", "en": ["moonlight"]}
{"mi": "aupatu", "gr": "noun", "en": ["bundle"]}
{"mi": "aupuru", "gr": "noun", "en": ["cushion, pad"]}
{"mi": "āwhato", "gr": "noun", "en": ["vegetable caterpillar of species Ophiocordyceps robertsii of New Zealand"]}
{"mi": "awhenga", "gr": "noun", "en": ["vassal, subordinate", "conquered people", "inlet"]}
{"mi": "haeroa", "gr": "noun", "en": ["grave for the spirits of enemies"]}
{"mi": "hākoro", "gr": "noun", "en": ["old man"]}
{"mi": "hāmanu", "gr": "noun", "en": ["ammunition"]}
{"mi": "harore", "gr": "noun", "en": ["fungus, mushrooms"]}
{"mi": "hāroto", "gr": "noun", "en": ["pool, pond"]}
{"mi": "haruru", "gr": "noun", "en": ["rumble, roar"]}
{"mi": "haukai", "gr": "noun", "en": ["feast"]}
{"mi": "hāwini", "gr": "noun", "en": ["servant"]}
{"mi": "hēkena", "gr": "noun", "en": ["second"]}
{"mi": "kūkupa", "gr": "noun", "en": ["A pigeon."]}
{"mi": "moenga", "gr": "noun", "en": ["a bed"]}
{"mi": "pūkāea", "gr": "noun", "en": ["a kind of long wooden trumpet, traditionally used to relay signals during times of conflict and other important occasions"]}
{"mi": "huahae", "gr": "noun", "en": ["catkin"]}
{"mi": "rāpere", "gr": "noun", "en": ["raspberry"]}
{"mi": "tioata", "gr": "noun", "en": ["crystal"]}
{"mi": "hōkete", "gr": "noun", "en": ["hogget"]}
{"mi": "kareni", "gr": "noun", "en": ["crane, a bird of the family Gruidae"]}
{"mi": "rātaka", "gr": "noun", "en": ["diary"]}
{"mi": "hūware", "gr": "noun", "en": ["spit, saliva"]}
{"mi": "kumete", "gr": "noun", "en": ["bowl"]}
{"mi": "hītori", "gr": "noun", "en": ["history"]}
{"mi": "kākano", "gr": "noun", "en": ["pip, kernel, flesh (of a coconut)"]}
{"mi": "amiami", "gr": "noun", "en": ["spice, herb"]}
{"mi": "kīnaki", "gr": "noun", "en": ["sauce, condiment, relish"]}
{"mi": "maihao", "gr": "noun", "en": ["finger"]}
{"mi": "hapopo", "gr": "noun", "en": ["a kind of pounamu"]}
{"mi": "kāriki", "gr": "noun", "en": ["green"]}
{"mi": "tāturi", "gr": "noun", "en": ["earwax"]}
{"mi": "reanga", "gr": "noun", "en": ["generation, the members of a family from the same parents"]}
{"mi": "kārapu", "gr": "noun", "en": ["northeast (compass point)"]}
{"mi": "kuriri", "gr": "noun", "en": ["Pacific golden plover"]}
{"mi": "hāmana", "gr": "noun", "en": ["salmon"]}
{"mi": "tākihi", "gr": "noun", "en": ["kidney"]}
{"mi": "kārani", "gr": "noun", "en": ["gallon"]}
{"mi": "kirīmi", "gr": "noun", "en": ["cream"]}
{"mi": "rearea", "gr": "noun", "en": ["New Zealand bellbird"]}
{"mi": "kūmera", "gr": "noun", "en": ["sweet potato"]}
{"mi": "kōhūhū", "gr": "noun", "en": ["kohuhu (Pittosporum tenuifolium)"]}
{"mi": "waitai", "gr": "noun", "en": ["seawater"]}
{"mi": "matuku", "gr": "noun", "en": ["bittern"]}
{"mi": "pīnohi", "gr": "noun", "en": ["tongs"]}
{"mi": "pōtaka", "gr": "noun", "en": ["spinning top"]}
{"mi": "kāpata", "gr": "noun", "en": ["cupboard"]}
{"mi": "koiora", "gr": "noun", "en": ["life"]}
{"mi": "wanira", "gr": "noun", "en": ["vanilla"]}
{"mi": "takihī", "gr": "noun", "en": ["taxi"]}
{"mi": "rereti", "gr": "noun", "en": ["lance water fern (Austroblechnum lanceolatum)"]}
{"mi": "rūtene", "gr": "noun", "en": ["lieutenant"]}
{"mi": "āhuahanga", "gr": "noun", "en": ["shape", "geometry"]}
{"mi": "tainui", "gr": "noun", "en": ["New Zealand hazel (Pomaderris apetala)"]}
{"mi": "tōtara", "gr": "noun", "en": ["Podocarpus totara, a podocarp tree endemic to New Zealand."]}
{"mi": "manono", "gr": "noun", "en": ["kanono (Coprosma autumnalis)"]}
{"mi": "hāpopo", "gr": "noun", "en": ["the corpse of an enemy, usually to be cannibalised"]}
{"mi": "kōnini", "gr": "noun", "en": ["green or raw fruit of the tree fuchsia or kōtukutuku, Fuchsia excorticata"]}
{"mi": "kōkako", "gr": "noun", "en": ["kokako; (Callaeas cinerea)"]}
{"mi": "pāhekeheke", "gr": "noun", "en": ["slip", "slipperiness"]}
{"mi": "kaitangata", "gr": "noun", "en": ["cannibal", "cannibalism", "cat's eye snail (Lunella smaragda)"]}
{"mi": "kahurangi", "gr": "noun", "en": ["dark blue"]}
{"mi": "tangiweto", "gr": "noun", "en": ["crybaby"]}
{"mi": "ngārara", "gr": "noun", "en": ["creepy-crawly (insect, reptile, etc.)", "bug, germ"]}
{"mi": "tokerau", "gr": "noun", "en": ["north", "autumn"]}
{"mi": "tohunga", "gr": "noun", "en": ["A skilled person, an expert", "A priest, a healer"]}
{"mi": "pukatea", "gr": "noun", "en": ["Laurelia novae-zelandiae,a tree ideal for canoe wood", "Pisonia grandis"]}
{"mi": "matangi", "gr": "noun", "en": ["wind", "breeze"]}
{"mi": "hereumu", "gr": "noun", "en": ["an outdoor building, shed, etc set for cooking", "bakery"]}
{"mi": "kōhanga", "gr": "noun", "en": ["nest, nursery", "birthplace, cradle, homeland, stronghold, bastion"]}
{"mi": "hauāuru", "gr": "noun", "en": ["west", "west wind"]}
{"mi": "emepaea", "gr": "noun", "en": ["empire (political unit, having numerous or extensive territories)", "empire (political unit ruled by an emperor)"]}
{"mi": "huringa", "gr": "noun", "en": ["rotation, revolution", "conversion, transformation"]}
{"mi": "tāranga", "gr": "noun", "en": ["long-leafed pimelea (Pimelea longifolia)", "a plant of species Veronica stenophylla"]}
{"mi": "ratonga", "gr": "noun", "en": ["waiting or attending of tables to send customers their food", "continuous provision of utility through an infrastructure network"]}
{"mi": "piringa", "gr": "noun", "en": ["refuge, haven, hiding place", "association, relationship"]}
{"mi": "mōwhiti", "gr": "noun", "en": ["ring, hoop", "eyeglasses, glasses, spectacles"]}
{"mi": "whāriki", "gr": "noun", "en": ["mat", "carpet"]}
{"mi": "ruānuku", "gr": "noun", "en": ["sage, wise man", "wizard, warlock"]}
{"mi": "maikuku", "gr": "noun", "en": ["fingernail, toenail", "claw, hoof"]}
{"mi": "whakarākei", "gr": "noun", "en": ["decoration, adornment", "set"]}
{"mi": "ahuwhenua", "gr": "noun", "en": ["agriculture"]}
{"mi": "parakuihi", "gr": "noun", "en": ["breakfast"]}
{"mi": "hekerangi", "gr": "noun", "en": ["parachute"]}
{"mi": "tewhatewha", "gr": "noun", "en": ["An axe-like bone or wooden weapon.", "vagina"]}
{"mi": "kīngitanga", "gr": "noun", "en": ["kingdom, dominion", "sovereignty"]}
{"mi": "tāriana", "gr": "noun", "en": ["stallion"]}
{"mi": "moepapa", "gr": "noun", "en": ["nightmare"]}
{"mi": "moenanu", "gr": "noun", "en": ["nightmare"]}
{"mi": "waikato", "gr": "noun", "en": ["flowing water"]}
{"mi": "akepiro", "gr": "noun", "en": ["A small tree of New Zealand (Olearia furfuracea)."]}
{"mi": "toheroa", "gr": "noun", "en": ["toheroa (edible bivalve)"]}
{"mi": "kautona", "gr": "noun", "en": ["wart"]}
{"mi": "moeriki", "gr": "noun", "en": ["Dieffenbach's rail (†Gallirallus dieffenbachii)"]}
{"mi": "kahawai", "gr": "noun", "en": ["kahawai (edible ocean fish)"]}
{"mi": "kangarū", "gr": "noun", "en": ["kangaroo"]}
{"mi": "wāhanga", "gr": "noun", "en": ["piece"]}
{"mi": "tōāpapa", "gr": "noun", "en": ["gravity"]}
{"mi": "rironga", "gr": "noun", "en": ["asset, receipt, acquisition"]}
{"mi": "amokura", "gr": "noun", "en": ["red-tailed tropicbird"]}
{"mi": "kawereo", "gr": "noun", "en": ["telephone"]}
{"mi": "tuhinga", "gr": "noun", "en": ["writing, document, text, script"]}
{"mi": "runanga", "gr": "noun", "en": ["assembly, council"]}
{"mi": "whāmere", "gr": "noun", "en": ["family, household"]}
{"mi": "wuruwhi", "gr": "noun", "en": ["wolf (Canis lupus)"]}
{"mi": "angengi", "gr": "noun", "en": ["a type of fish"]}
{"mi": "moutere", "gr": "noun", "en": ["island"]}
{"mi": "mokonui", "gr": "noun", "en": ["dinosaur"]}
{"mi": "rautupu", "gr": "noun", "en": ["thunderstorm"]}
{"mi": "māwhero", "gr": "noun", "en": ["pink (colour)"]}
{"mi": "paihamu", "gr": "noun", "en": ["brushtail possum (Trichosurus vulpecula)"]}
{"mi": "waikura", "gr": "noun", "en": ["rust"]}
{"mi": "pakiaka", "gr": "noun", "en": ["root (of a tree)"]}
{"mi": "taraute", "gr": "noun", "en": ["trout"]}
{"mi": "āheahea", "gr": "noun", "en": ["rainbow"]}
{"mi": "whatura", "gr": "noun", "en": ["vulture"]}
{"mi": "pounemu", "gr": "noun", "en": ["greenstone, nephrite"]}
{"mi": "ngutoro", "gr": "noun", "en": ["stone bass, wreckfish"]}
{"mi": "kotiate", "gr": "noun", "en": ["short weapon of wood or bone with a notch on both edges of the flat blade"]}
{"mi": "aitanga", "gr": "noun", "en": ["progeny, descendants"]}
{"mi": "amapaea", "gr": "noun", "en": ["umpire"]}
{"mi": "anahere", "gr": "noun", "en": ["angel, archangel"]}
{"mi": "apakura", "gr": "noun", "en": ["lament, dirge"]}
{"mi": "araheke", "gr": "noun", "en": ["stairs"]}
{"mi": "arapiki", "gr": "noun", "en": ["stairs"]}
{"mi": "areinga", "gr": "noun", "en": ["black field cricket"]}
{"mi": "atamira", "gr": "noun", "en": ["stage, platform, dais"]}
{"mi": "awakeri", "gr": "noun", "en": ["drain, ditch"]}
{"mi": "hahunga", "gr": "noun", "en": ["disinterment, exhumation"]}
{"mi": "haihana", "gr": "noun", "en": ["sergeant"]}
{"mi": "hapanga", "gr": "noun", "en": ["default"]}
{"mi": "haurahi", "gr": "noun", "en": ["dew"]}
{"mi": "hauware", "gr": "noun", "en": ["saliva"]}
{"mi": "heketua", "gr": "noun", "en": ["toilet"]}
{"mi": "kararua", "gr": "noun", "en": ["purple storm snail (Janthina janthina)"]}
{"mi": "raumati", "gr": "noun", "en": ["summer"]}
{"mi": "aramona", "gr": "noun", "en": ["almond"]}
{"mi": "kupenga", "gr": "noun", "en": ["net"]}
{"mi": "kitenga", "gr": "noun", "en": ["sight"]}
{"mi": "uawhatu", "gr": "noun", "en": ["hail"]}
{"mi": "keringa", "gr": "noun", "en": ["mine (place where people dig metals)"]}
{"mi": "kaiheke", "gr": "noun", "en": ["surfer"]}
{"mi": "taeturi", "gr": "noun", "en": ["earwax"]}
{"mi": "taumata", "gr": "noun", "en": ["pinnacle (highest point)"]}
{"mi": "pitonga", "gr": "noun", "en": ["southeast (compass point)"]}
{"mi": "pikinga", "gr": "noun", "en": ["ascent (act of ascending)"]}
{"mi": "whiunga", "gr": "noun", "en": ["punishment"]}
{"mi": "whetūao", "gr": "noun", "en": ["planet"]}
{"mi": "kōngutu", "gr": "noun", "en": ["mouth (of a river, etc.)"]}
{"mi": "puananī", "gr": "noun", "en": ["anemochory (wind dispersal of seeds)"]}
{"mi": "wētiwha", "gr": "noun", "en": ["mudsnail (Amphibola crenata)"]}
{"mi": "anahera", "gr": "noun", "en": ["angel"]}
{"mi": "taimona", "gr": "noun", "en": ["a male given name, equivalent to English Simon"]}
{"mi": "waihāro", "gr": "noun", "en": ["soup"]}
{"mi": "papamahi", "gr": "noun", "en": ["desk", "studio", "desktop"]}
{"mi": "amorangi", "gr": "noun", "en": ["priest", "leader", "emblem"]}
{"mi": "angaanga", "gr": "noun", "en": ["shell", "skull", "head"]}
{"mi": "arawhata", "gr": "noun", "en": ["stairs", "ladder", "bridge"]}
{"mi": "ngāwhāriki", "gr": "noun", "en": ["hot spring", "sulfur; sulfur-rich volcanic rock"]}
{"mi": "hākinakina", "gr": "noun", "en": ["sport, game"]}
{"mi": "māharahara", "gr": "noun", "en": ["anxiety, worry"]}
{"mi": "makomako", "gr": "noun", "en": ["wineberry (Aristotelia serrata)", "New Zealand bellbird (Anthornis melanura)"]}
{"mi": "tamatane", "gr": "noun", "en": ["boy, male child", "son"]}
{"mi": "pihapiha", "gr": "noun", "en": ["a blowhole (of a cetacean)", "a gill (of an aquatic animal)"]}
{"mi": "papakupu", "gr": "noun", "en": ["dictionary", "lexicon, vocabulary"]}
{"mi": "pīokeoke", "gr": "noun", "en": ["spiny dogfish (Squalus acanthias)", "spotted estuary smooth-hound (Mustelus lenticulatus)"]}
{"mi": "unahiroa", "gr": "noun", "en": ["comet", "will o' the wisp"]}
{"mi": "onehunga", "gr": "noun", "en": ["alluvial soil", "beach composed of mixed sand and mud"]}
{"mi": "mokomoko", "gr": "noun", "en": ["gecko", "lizard"]}
{"mi": "aroākapa", "gr": "noun", "en": ["foreboding, bad omen", "row, rank; front row"]}
{"mi": "haerenga", "gr": "noun", "en": ["journey", "departure"]}
{"mi": "kumikumi", "gr": "noun", "en": ["beard, moustache, whiskers", "bristles"]}
{"mi": "meremere", "gr": "noun", "en": ["a short weapon typically made out of stone or greenstone", "scapular feather"]}
{"mi": "tukemata", "gr": "noun", "en": ["eyebrow", "scowl"]}
{"mi": "toropapa", "gr": "noun", "en": ["karapapa (Alseuosmia macrophylla)", "oak-leaved toropapa (Alseuosmia quercifolia)"]}
{"mi": "rakiraki", "gr": "noun", "en": ["duck, especially an introduced species", "mallard (Anas platyrhynchos)"]}
{"mi": "whakakai", "gr": "noun", "en": ["cylindrical greenstone earring", "teething ring for babies"]}
{"mi": "pai", "gr": "noun", "en": ["goodness", "excellence", "suitability"]}
{"mi": "pōhutukawa", "gr": "noun", "en": ["Metrosideros excelsa"]}
{"mi": "pungapunga", "gr": "noun", "en": ["pumice"]}
{"mi": "pungapunga", "gr": "noun", "en": ["ankle"]}
{"mi": "pongipongi", "gr": "noun", "en": ["dawn"]}
{"mi": "kangakanga", "gr": "noun", "en": ["swearing, profanity"]}
{"mi": "tāuwhiuwhi", "gr": "noun", "en": ["shower (a shower bath)"]}
{"mi": "kōwhiringa", "gr": "noun", "en": ["selection", "menu", "option", "opportunity", "combination"]}
{"mi": "tarakihi", "gr": "noun", "en": ["A grey and black saltwater fish, Nemadactylus macropterus, found off the coast of Australia, New Zealand and South America."]}
{"mi": "manuhiri", "gr": "noun", "en": ["guest, visitor"]}
{"mi": "kohekohe", "gr": "noun", "en": ["Dysoxylum spectabile, a medium-sized tree native to New Zealand, related to mahogany."]}
{"mi": "koromiko", "gr": "noun", "en": ["koromiko shrub"]}
{"mi": "harakeke", "gr": "noun", "en": ["New Zealand flax (Phormium tenax)"]}
{"mi": "hāmonika", "gr": "noun", "en": ["harmonica (wind instrument)"]}
{"mi": "merekara", "gr": "noun", "en": ["miracle"]}
{"mi": "kiritona", "gr": "noun", "en": ["pimple, wart"]}
{"mi": "kawakawa", "gr": "noun", "en": ["kawakawa (Piper excelsum), a shrub endemic to New Zealand."]}
{"mi": "wharangi", "gr": "noun", "en": ["Melicope ternata"]}
{"mi": "rewarewa", "gr": "noun", "en": ["rewarewa (Knightia excelsa)"]}
{"mi": "tohumate", "gr": "noun", "en": ["symptom"]}
{"mi": "matimati", "gr": "noun", "en": ["finger, toe"]}
{"mi": "terepōno", "gr": "noun", "en": ["telephone"]}
{"mi": "mātātoka", "gr": "noun", "en": ["fossil"]}
{"mi": "tikinare", "gr": "noun", "en": ["dictionary"]}
{"mi": "pākaukau", "gr": "noun", "en": ["wing"]}
{"mi": "nanenane", "gr": "noun", "en": ["goat"]}
{"mi": "arewhana", "gr": "noun", "en": ["elephant"]}
{"mi": "temepara", "gr": "noun", "en": ["temple"]}
{"mi": "takitaki", "gr": "noun", "en": ["fence, palisade, barricade, stockade"]}
{"mi": "pūtāhono", "gr": "noun", "en": ["driver (program acting as interface between an application and hardware)"]}
{"mi": "poroporo", "gr": "noun", "en": ["The plant Solanum aviculare."]}
{"mi": "huripari", "gr": "noun", "en": ["hurricane"]}
{"mi": "pirikoko", "gr": "noun", "en": ["mystery"]}
{"mi": "motomoto", "gr": "noun", "en": ["boxing, combat sport involving punching"]}
{"mi": "takakaha", "gr": "noun", "en": ["tibia, shinbone"]}
{"mi": "putiputi", "gr": "noun", "en": ["Handwoven craft flower typically made of harakeke"]}
{"mi": "ngaupuku", "gr": "noun", "en": ["stomachache"]}
{"mi": "kotoreke", "gr": "noun", "en": ["marsh crake (Porzana pusilla affinis)"]}
{"mi": "tahepuia", "gr": "noun", "en": ["lava"]}
{"mi": "tarākona", "gr": "noun", "en": ["dragon"]}
{"mi": "riroriro", "gr": "noun", "en": ["A grey warbler, of the species Gerygone igata."]}
{"mi": "kārearea", "gr": "noun", "en": ["Falco novaeseelandiae, the only falcon endemic to New Zealand."]}
{"mi": "tapatoru", "gr": "noun", "en": ["triangle"]}
{"mi": "hakihaki", "gr": "noun", "en": ["scabies, itch, rash"]}
{"mi": "hakikoko", "gr": "noun", "en": ["shoulderblade"]}
{"mi": "hakuturi", "gr": "noun", "en": ["birds"]}
{"mi": "hamarara", "gr": "noun", "en": ["umbrella"]}
{"mi": "hanehane", "gr": "noun", "en": ["decay, rot"]}
{"mi": "harapaki", "gr": "noun", "en": ["hillside, slopes"]}
{"mi": "hauhanga", "gr": "noun", "en": ["frost"]}
{"mi": "tekoteko", "gr": "noun", "en": ["Carved figure as a finial on the gable of a house"]}
{"mi": "pukuhiko", "gr": "noun", "en": ["electrical generator"]}
{"mi": "kaiwawao", "gr": "noun", "en": ["referee, umpire"]}
{"mi": "piritoka", "gr": "noun", "en": ["limpet"]}
{"mi": "pahirini", "gr": "noun", "en": ["chaffinch"]}
{"mi": "rāhipere", "gr": "noun", "en": ["raspberry"]}
{"mi": "hinganga", "gr": "noun", "en": ["fall, defeat, demise"]}
{"mi": "pirikahu", "gr": "noun", "en": ["sheep"]}
{"mi": "wakarere", "gr": "noun", "en": ["aeroplane, airplane"]}
{"mi": "rongonga", "gr": "noun", "en": ["hearing (sense)"]}
{"mi": "kihukihu", "gr": "noun", "en": ["fringes, thrums, tassels"]}
{"mi": "rorouira", "gr": "noun", "en": ["computer"]}
{"mi": "hākēkeke", "gr": "noun", "en": ["sooty shearwater"]}
{"mi": "hakituri", "gr": "noun", "en": ["mythical forest guardians"]}
{"mi": "pūwhaiau", "gr": "noun", "en": ["bluefin gurnard (Chelidonichthys kumu)"]}
{"mi": "tānekaha", "gr": "noun", "en": ["celery pine (Phyllocladus trichomanoides, a coniferous tree endemic to New Zealand."]}
{"mi": "whananga", "gr": "noun", "en": ["uprising, mutiny, rebellion, revolt"]}
{"mi": "pohowera", "gr": "noun", "en": ["double-banded plover (Charadrius bicinctus)"]}
{"mi": "pīhoihoi", "gr": "noun", "en": ["New Zealand pipit (Anthus novaeseelandiae)"]}
{"mi": "pinātoro", "gr": "noun", "en": ["Strathmore weed"]}
{"mi": "taputapu", "gr": "noun", "en": ["Reduplication of tapu."]}
{"mi": "pahikara", "gr": "noun", "en": ["bicycle"]}
{"mi": "wakatono", "gr": "noun", "en": ["taxi"]}
{"mi": "wahakura", "gr": "noun", "en": ["bassinet, especially one woven from harakeke leaves"]}
{"mi": "whareumu", "gr": "noun", "en": ["kitchen"]}
{"mi": "pitokite", "gr": "noun", "en": ["skinflint, miser, niggard"]}
{"mi": "tenetene", "gr": "noun", "en": ["vagina"]}
{"mi": "taparima", "gr": "noun", "en": ["pentagon"]}
{"mi": "tapawaru", "gr": "noun", "en": ["octagon"]}
{"mi": "whakarato", "gr": "noun", "en": ["to distribute, to allocate", "to serve (of food), to wait", "to provide"]}
{"mi": "āwangawanga", "gr": "noun", "en": ["distress, worry", "doubt"]}
{"mi": "whakamahara", "gr": "noun", "en": ["reminder, memento"]}
{"mi": "rangitoto", "gr": "noun", "en": ["lava", "volcano"]}
{"mi": "takatāpui", "gr": "noun", "en": ["close friend of the same gender", "gay person. Usually used in the context of LGBT Māori people"]}
{"mi": "kikorangi", "gr": "noun", "en": ["light blue", "sky blue"]}
{"mi": "pōkokohua", "gr": "noun", "en": ["boiled head", "bugger, bastard, a highly offensive insult for an unpleasant person"]}
{"mi": "tarāpunga", "gr": "noun", "en": ["red-billed gull (Chroicocephalus novaehollandiae scopulinus)", "black-billed gull"]}
{"mi": "haukāinga", "gr": "noun", "en": ["true home", "homepage"]}
{"mi": "koromatua", "gr": "noun", "en": ["chief, mayor", "thumb"]}
{"mi": "namunamuā", "gr": "noun", "en": ["flavour", "spice"]}
{"mi": "whakawahine", "gr": "noun", "en": ["a person assigned male at birth who lives and behaves as a female socially; literally \\"to become a woman\\""]}
{"mi": "whakangākau", "gr": "noun", "en": ["affection, devotion"]}
{"mi": "rangimaarie", "gr": "noun", "en": ["peace, quietness"]}
{"mi": "maramataka", "gr": "noun", "en": ["the traditional Maori lunar calendar", "calendar", "almanac"]}
{"mi": "hātaretare", "gr": "noun", "en": ["snail", "slug", "invertebrate"]}
{"mi": "kuihipere", "gr": "noun", "en": ["gooseberry (fruit and plant)"]}
{"mi": "wheketere", "gr": "noun", "en": ["arrow squid"]}
{"mi": "kahikatea", "gr": "noun", "en": ["kahikatea (Dacrycarpus dacrydioides)"]}
{"mi": "uruwhenua", "gr": "noun", "en": ["a passport (official document)"]}
{"mi": "motopaika", "gr": "noun", "en": ["motorcycle"]}
{"mi": "pōtitanga", "gr": "noun", "en": ["election"]}
{"mi": "kikohunga", "gr": "noun", "en": ["gangrene"]}
{"mi": "āhuruhuru", "gr": "noun", "en": ["goatfish"]}
{"mi": "terewhōno", "gr": "noun", "en": ["telephone"]}
{"mi": "wharaunga", "gr": "noun", "en": ["voyage"]}
{"mi": "tauoranga", "gr": "noun", "en": ["existence"]}
{"mi": "anaterope", "gr": "noun", "en": ["antelope"]}
{"mi": "āniwaniwa", "gr": "noun", "en": ["rainbow"]}
{"mi": "paihikara", "gr": "noun", "en": ["bicycle"]}
{"mi": "atekōkiri", "gr": "noun", "en": ["driver (program acting as interface between an application and hardware)"]}
{"mi": "karehākoa", "gr": "noun", "en": ["red-billed gull (Chroicocephalus novaehollandiae scopulinus)"]}
{"mi": "āhuatanga", "gr": "noun", "en": ["situation, circumstances"]}
{"mi": "āhumehume", "gr": "noun", "en": ["petticoat"]}
{"mi": "aromaunga", "gr": "noun", "en": ["mountain face"]}
{"mi": "ataarangi", "gr": "noun", "en": ["shadow"]}
{"mi": "kārikiuri", "gr": "noun", "en": ["dark green"]}
{"mi": "hapūtanga", "gr": "noun", "en": ["pregnancy"]}
{"mi": "pangakupu", "gr": "noun", "en": ["crossword"]}
{"mi": "wharehoko", "gr": "noun", "en": ["shop, store"]}
{"mi": "hekengaru", "gr": "noun", "en": ["surfing, the sport of riding ocean waves on boards"]}
{"mi": "kekerengu", "gr": "noun", "en": ["A black beetle (Maoriblatta novaeseelandiae)"]}
{"mi": "wharepuni", "gr": "noun", "en": ["wharepuni"]}
{"mi": "aroarorua", "gr": "noun", "en": ["to be indecisive, to vacillate"]}
{"mi": "tohemanga", "gr": "noun", "en": ["any member of the species Oxyperas elongatum of large marine bivalve molluscs"]}
{"mi": "whaikīngi", "gr": "noun", "en": ["chess"]}
{"mi": "manuwhiri", "gr": "noun", "en": ["visitor, guest"]}
{"mi": "kaitātari", "gr": "noun", "en": ["analyst"]}
{"mi": "tapawhitu", "gr": "noun", "en": ["heptagon"]}
{"mi": "tupuranga", "gr": "noun", "en": ["a place to grow something"]}
{"mi": "whakatewhatewha", "gr": "noun", "en": ["investigator", "inspector"]}
{"mi": "rāhui", "gr": "noun", "en": ["restriction of access to a place (as a form of taboo)"]}
{"mi": "kite", "gr": "noun", "en": ["sight", "perception", "divination"]}
{"mi": "pirihimana", "gr": "noun", "en": ["police", "police officer, constable"]}
{"mi": "orokohanga", "gr": "noun", "en": ["origin", "creation"]}
{"mi": "urumaranga", "gr": "noun", "en": ["ambush", "flash mob"]}
{"mi": "pārekareka", "gr": "noun", "en": ["enjoyment, pleasure", "spotted shag (Phalacrocorax punctatus)"]}
{"mi": "tākahikahi", "gr": "noun", "en": ["cutty grass (sedge of the genus Gahnia)", "true sedge (sedge of the genus Carex)"]}
{"mi": "tahi", "gr": "noun", "en": ["sweeping action"]}
{"mi": "ngā", "gr": "noun", "en": ["breath"]}
{"mi": "tūwhaitara", "gr": "noun", "en": ["giraffe weevil"]}
{"mi": "ōritetanga", "gr": "noun", "en": ["equality (equal treatment of people)"]}
{"mi": "rengarenga", "gr": "noun", "en": ["Arthropodium cirratum, a herbaceous perennial plant endemic to New Zealand."]}
{"mi": "pūmanamārō", "gr": "noun", "en": ["firmware"]}
{"mi": "aihikirīmi", "gr": "noun", "en": ["ice cream"]}
{"mi": "taeratanga", "gr": "noun", "en": ["sexual orientation, sexuality"]}
{"mi": "pīwakawaka", "gr": "noun", "en": ["New Zealand fantail (Rhipidura fuliginosa)"]}
{"mi": "rāhuitanga", "gr": "noun", "en": ["lockdown (confinement of people as a security measure)"]}
{"mi": "rātāhuihui", "gr": "noun", "en": ["southern sunfish (Mola alexandrini, syn. Mola ramsayi)"]}
{"mi": "hahaetanga", "gr": "noun", "en": ["first gleam of light"]}
{"mi": "hainatanga", "gr": "noun", "en": ["signature"]}
{"mi": "kōpakipaki", "gr": "noun", "en": ["maize, corn"]}
{"mi": "ngirungiru", "gr": "noun", "en": ["Any of subspecies Petroica macrocephala macrocephala of tom-tits of the South Island"]}
{"mi": "tātarakihi", "gr": "noun", "en": ["cicada"]}
{"mi": "waru", "gr": "noun", "en": ["any scraper", "wood plane"]}
{"mi": "māramatanga", "gr": "noun", "en": ["clarity", "enlightenment"]}
{"mi": "tāpiritanga", "gr": "noun", "en": ["appendix, addendum", "addition"]}
{"mi": "tae", "gr": "noun", "en": ["excrement, filth", "sap or gum excreted from plants", "refuse, waste, rubbish"]}
{"mi": "tae", "gr": "noun", "en": ["stain", "dye, pigment", "colour"]}
{"mi": "pīne-ā-Wīwī", "gr": "noun", "en": ["French bean"]}
{"mi": "hōkakatanga", "gr": "noun", "en": ["sexual orientation, sexuality"]}
{"mi": "mārenatanga", "gr": "noun", "en": ["marriage"]}
{"mi": "takiwātanga", "gr": "noun", "en": ["autism"]}
{"mi": "karakotaera", "gr": "noun", "en": ["crocodile"]}
{"mi": "waiporoporo", "gr": "noun", "en": ["purple"]}
{"mi": "moho-pererū", "gr": "noun", "en": ["buff-banded rail (Gallirallus philippensis)"]}
{"mi": "takeketonga", "gr": "noun", "en": ["striped marlin (Kajikia audax)"]}
{"mi": "haeatatanga", "gr": "noun", "en": ["ray of light through a chink in a wall"]}
{"mi": "kaikoropeke", "gr": "noun", "en": ["skinflint, miser, niggard"]}
{"mi": "tapatapātiu", "gr": "noun", "en": ["northwest (compass point)"]}
{"mi": "tūturiwhatu", "gr": "noun", "en": ["New Zealand dotterel (Anarhynchus obscurus)"]}
{"mi": "pohewatanga", "gr": "noun", "en": ["imagination"]}
{"mi": "whētikotiko", "gr": "noun", "en": ["mudflat top shell (Diloma subrostrata)"]}
{"mi": "ā", "gr": "noun", "en": ["collarbone"]}
{"mi": "patupaiarehe", "gr": "noun", "en": ["patupaiarehe (legendary fair-skinned fairy folk)"]}
{"mi": "pamakaranete", "gr": "noun", "en": ["pomegranate (tree and fruit)"]}
{"mi": "poro-tapaono", "gr": "noun", "en": ["hexagonal prism"]}
{"mi": "angaangamate", "gr": "noun", "en": ["back, reverse"]}
{"mi": "kaitōrangapū", "gr": "noun", "en": ["politician"]}
{"mi": "uru-mā-tonga", "gr": "noun", "en": ["southwest (compass point)"]}
{"mi": "pūtangitangi", "gr": "noun", "en": ["paradise shelduck (Tadorna variegata)"]}
{"mi": "kihikihitara", "gr": "noun", "en": ["chorus cicada (Amphipsalta zelandica)"]}
{"mi": "hī ika", "gr": "noun", "en": ["angling, line fishing."]}
{"mi": "tino", "gr": "noun", "en": ["essence, essential, substance"]}
{"mi": "hēmanawatanga", "gr": "noun", "en": ["frustration", "depression"]}
{"mi": "whakawhitinga", "gr": "noun", "en": ["transfer", "transition"]}
{"mi": "hoki", "gr": "noun", "en": ["The blue grenadier (Macruronus novaezelandiae), a merluccid hake."]}
{"mi": "rua", "gr": "noun", "en": ["pit", "cavity"]}
{"mi": "tūrangawaewae", "gr": "noun", "en": ["turangawaewae (“the place where one belongs or has a right to live; one's own land; also, the sense of freedom, identity, and spiritual connection associated with this place”)"]}
{"mi": "niko", "gr": "noun", "en": ["cabbage - alternative form of nīko"]}
{"mi": "turangiwaiwai", "gr": "noun", "en": ["misspelling of tūrangawaewae"]}
{"mi": "koeko-tapaono", "gr": "noun", "en": ["hexagonal pyramid"]}
{"mi": "kaimātakitaki", "gr": "noun", "en": ["spectator, onlooker, audience, observer"]}
{"mi": "pūngāwerewere", "gr": "noun", "en": ["spider"]}
{"mi": "atewharowharo", "gr": "noun", "en": ["lung"]}
{"mi": "rā", "gr": "noun", "en": ["sail (a piece of fabric attached to a boat)"]}
{"mi": "rā", "gr": "noun", "en": ["sun", "daytime, period of brightness in the morning and afternoon", "day, time cycle of 24 hours"]}
{"mi": "whakapakotanga", "gr": "noun", "en": ["banishment", "exile"]}
{"mi": "matatangitangi", "gr": "noun", "en": ["lament", "dirge"]}
{"mi": "Wīwī", "gr": "noun", "en": ["French person (of, from or relating to France)"]}
{"mi": "whā", "gr": "noun", "en": ["any leaf of certain plants like taro and harakeke with a long and thick rachis (stalk)", "feather"]}
{"mi": "kaniawheatanga", "gr": "noun", "en": ["remorse"]}
{"mi": "poporokaiwhiri", "gr": "noun", "en": ["pigeonwood (Hedycarya arborea)"]}
{"mi": "ō", "gr": "noun", "en": ["food, provisions"]}
{"mi": "koro", "gr": "noun", "en": ["grandfather", "term of address to an elderly man"]}
{"mi": "koro", "gr": "noun", "en": ["cove, inlet", "noose", "white rātā (Metrosideros perforata)"]}
{"mi": "Ngāi", "gr": "noun", "en": ["Descent group marker used in iwi or hapū names beginning with T."]}
{"mi": "huhu", "gr": "noun", "en": ["huhu grub, the larval form of Prionoplus reticularis (a longhorn beetle species of the Cerambycidae family which is the largest endemic beetle found in New Zealand)"]}
{"mi": "mou", "gr": "noun", "en": ["island, islet, alternative form of motu"]}
{"mi": "rawa", "gr": "noun", "en": ["goods, property", "wealth"]}
{"mi": "kōtuku-ngutupapa", "gr": "noun", "en": ["royal spoonbill (Platalea regia)"]}
{"mi": "ana", "gr": "noun", "en": ["cave"]}
{"mi": "ake", "gr": "noun", "en": ["broadleaf hopbush (Dodonaea viscosa)"]}
{"mi": "kai hamuti", "gr": "noun", "en": ["shit-eater; an insult"]}
{"mi": "reo tupu", "gr": "noun", "en": ["mother tongue"]}
{"mi": "kau aihe", "gr": "noun", "en": ["butterfly stroke"]}
{"mi": "mīti kau", "gr": "noun", "en": ["beef"]}
{"mi": "kaki roa", "gr": "noun", "en": ["giraffe"]}
{"mi": "maki nui", "gr": "noun", "en": ["gorilla"]}
{"mi": "kiko kau", "gr": "noun", "en": ["beef; meat obtained from cattle."]}
{"mi": "kai a te kurī", "gr": "noun", "en": ["a contemptible person, a bastard, a son of a bitch", "a so-and-so, a person that the speaker does not know"]}
{"mi": "putanga", "gr": "noun", "en": ["any exit, outlet or vent", "anything that emerges or appears into view, appearance", "symptom", "outcome, upshot", "edition, form of a published work edited significantly since an earlier or past time"]}
{"mi": "kōpū", "gr": "noun", "en": ["belly, abdomen", "womb, uterus", "bosom", "Cran's bully (Gobiomorphus basalis)"]}
{"mi": "wai māori", "gr": "noun", "en": ["fresh water"]}
{"mi": "mīti hipi", "gr": "noun", "en": ["mutton, lamb"]}
{"mi": "papa mahi", "gr": "noun", "en": ["desktop"]}
{"mi": "hōiho uha", "gr": "noun", "en": ["a mare, a female horse"]}
{"mi": "pāmu wēra", "gr": "noun", "en": ["sperm whale (Physeter macrocephalus)"]}
{"mi": "mea ngaro", "gr": "noun", "en": ["mystery"]}
{"mi": "matea ako", "gr": "noun", "en": ["learning needs"]}
{"mi": "pū mīhini", "gr": "noun", "en": ["machine gun"]}
{"mi": "pane koti", "gr": "noun", "en": ["skirt"]}
{"mi": "nama waea", "gr": "noun", "en": ["telephone number"]}
{"mi": "kiko hipi", "gr": "noun", "en": ["sheepmeat or mutton; meat obtained from sheep."]}
{"mi": "hau māota", "gr": "noun", "en": ["chlorine"]}
{"mi": "poi whana", "gr": "noun", "en": ["association football, soccer"]}
{"mi": "tau toitū", "gr": "noun", "en": ["prime number"]}
{"mi": "hakari", "gr": "noun", "en": ["roe, yolk – also alternative form of hākari"]}
{"mi": "papa taunga", "gr": "noun", "en": ["airfield, airstrip", "airport, aerodrome", "base, headquarters", "coordinate plane"]}
{"mi": "tiro", "gr": "noun", "en": ["viewing, view"]}
{"mi": "pea", "gr": "noun", "en": ["bear"]}
{"mi": "mangō pare", "gr": "noun", "en": ["hammerhead shark, hammerhead"]}
{"mi": "pepe tunga", "gr": "noun", "en": ["huhu beetle or Prionoplus reticularis, a longhorn beetle species of the Cerambycidae family which is the largest endemic beetle found in New Zealand."]}
{"mi": "matua kēkē", "gr": "noun", "en": ["pibling, any sibling of a parent - aunt, uncle"]}
{"mi": "whaea kēkē", "gr": "noun", "en": ["aunty, aunt"]}
{"mi": "hua whenua", "gr": "noun", "en": ["vegetable"]}
{"mi": "tūnga waka", "gr": "noun", "en": ["parking lot"]}
{"mi": "Ngāti", "gr": "noun", "en": ["Prefix for an iwi or hapū; tribal group."]}
{"mi": "awa kōpaka", "gr": "noun", "en": ["glacier"]}
{"mi": "tino tāone", "gr": "noun", "en": ["capital city, capital"]}
{"mi": "toka ngiha", "gr": "noun", "en": ["igneous rock"]}
{"mi": "whare none", "gr": "noun", "en": ["nunnery, convent"]}
{"mi": "huru moana", "gr": "noun", "en": ["freshwater hydra (Hydra vulgaris)"]}
{"mi": "marama hua", "gr": "noun", "en": ["full moon"]}
{"mi": "taunga inu", "gr": "noun", "en": ["coaster"]}
{"mi": "taunga ika", "gr": "noun", "en": ["fishing ground"]}
{"mi": "aua", "gr": "noun", "en": ["yellow-eye mullet, (Aldrichetta forsteri)"]}
{"mi": "hei", "gr": "noun", "en": ["flower garland, lei"]}
{"mi": "poka tōrere", "gr": "noun", "en": ["abyss, bottomless pit, chasm"]}
{"mi": "ua kirikiri", "gr": "noun", "en": ["sandstorm"]}
{"mi": "manu kōrero", "gr": "noun", "en": ["orator"]}
{"mi": "tāone matua", "gr": "noun", "en": ["capital city, capital"]}
{"mi": "punua ngeru", "gr": "noun", "en": ["a small cat; a kitten"]}
{"mi": "haeana rāti", "gr": "noun", "en": ["harpoon"]}
{"mi": "whare maita", "gr": "noun", "en": ["bowling pavilion"]}
{"mi": "paura pūmua", "gr": "noun", "en": ["protein powder"]}
{"mi": "mahi okaoka", "gr": "noun", "en": ["vaccination"]}
{"mi": "kumi ihuroa", "gr": "noun", "en": ["crocodile"]}
{"mi": "hoahoa papa", "gr": "noun", "en": ["floor plan"]}
{"mi": "papa kūtoro", "gr": "noun", "en": ["stretch fabric"]}
{"mi": "papa pūkura", "gr": "noun", "en": ["badminton court"]}
{"mi": "taiaki tāne", "gr": "noun", "en": ["Testosterone"]}
{"mi": "iohere punga", "gr": "noun", "en": ["Achilles tendon"]}
{"mi": "kaupapa ture", "gr": "noun", "en": ["constitution"]}
{"mi": "aronga taera", "gr": "noun", "en": ["sexual orientation"]}
{"mi": "rīngi mārena", "gr": "noun", "en": ["wedding ring"]}
{"mi": "mutunga wiki", "gr": "noun", "en": ["weekend"]}
{"mi": "matira auahi", "gr": "noun", "en": ["fire alarm"]}
{"mi": "pere tapaono", "gr": "noun", "en": ["chevron"]}
{"mi": "mate pāpōuri", "gr": "noun", "en": ["depression"]}
{"mi": "inu mirumiru", "gr": "noun", "en": ["Coke (Coca-Cola)"]}
{"mi": "kahu kautere", "gr": "noun", "en": ["life jacket"]}
{"mi": "huka parauri", "gr": "noun", "en": ["brown sugar"]}
{"mi": "ngutu parore", "gr": "noun", "en": ["wrybill (Anarhynchus frontalis)"]}
{"mi": "papa ahumahi", "gr": "noun", "en": ["industrial land"]}
{"mi": "pae tukutuku", "gr": "noun", "en": ["website"]}
{"mi": "Mane", "gr": "noun", "en": ["Monday"]}
{"mi": "mata ipurangi", "gr": "noun", "en": ["internet browser", "media browser"]}
{"mi": "tangata māori", "gr": "noun", "en": ["human being (as opposed to supernatural being)"]}
{"mi": "mangō taniwha", "gr": "noun", "en": ["great white shark"]}
{"mi": "te reo Pākehā", "gr": "noun", "en": ["English language"]}
{"mi": "mate hukapuri", "gr": "noun", "en": ["frostbite"]}
{"mi": "aronga hōkaka", "gr": "noun", "en": ["sexual orientation"]}
{"mi": "wahine mārena", "gr": "noun", "en": ["bride, married woman"]}
{"mi": "kiri taratara", "gr": "noun", "en": ["echinoderm"]}
{"mi": "tōpito kōpaka", "gr": "noun", "en": ["polar ice caps"]}
{"mi": "mīhini turaki", "gr": "noun", "en": ["artillery"]}
{"mi": "whare pikitia", "gr": "noun", "en": ["cinema, movie theatre, picture theatre"]}
{"mi": "whare pūrākau", "gr": "noun", "en": ["school of learning where tohunga taught esoteric knowledge, rituals, karakia, history and creation narratives. A term used particularly by Ngāi Tahu for the whare wānanga."]}
{"mi": "pūmua whākōkī", "gr": "noun", "en": ["enzyme"]}
{"mi": "mate pukupuku", "gr": "noun", "en": ["cancer"]}
{"mi": "ringa karetao", "gr": "noun", "en": ["puppeteer"]}
{"mi": "mema pāremata", "gr": "noun", "en": ["Member of Parliament"]}
{"mi": "pouaka karapu", "gr": "noun", "en": ["glove box (glove compartment)"]}
{"mi": "tupari maunga", "gr": "noun", "en": ["Any member of the species Gahnia xanthocarpa of tussock-forming sedges native to New Zealand."]}
{"mi": "poi tarawhiti", "gr": "noun", "en": ["netball"]}
{"mi": "manu tukutuku", "gr": "noun", "en": ["kite"]}
{"mi": "tauwehe toitū", "gr": "noun", "en": ["prime factor"]}
{"mi": "taunga ahuroa", "gr": "noun", "en": ["polar coordinates"]}
{"mi": "papa kotikoti", "gr": "noun", "en": ["cutting board, chopping board"]}
{"mi": "papa kiripaka", "gr": "noun", "en": ["asbestos"]}
{"mi": "pepa tukutuku", "gr": "noun", "en": ["grid paper, graph paper"]}
{"mi": "mate wareware", "gr": "noun", "en": ["dementia"]}
{"mi": "rōpū tōrangapū", "gr": "noun", "en": ["political party"]}
{"mi": "mana tōrangapū", "gr": "noun", "en": ["political power"]}
{"mi": "kano ārai mate", "gr": "noun", "en": ["vaccine"]}
{"mi": "rākau whai hua", "gr": "noun", "en": ["fruit tree"]}
{"mi": "tawhai rauriki", "gr": "noun", "en": ["black beech (Nothofagus solandri)."]}
{"mi": "Wēra", "gr": "noun", "en": ["Wales (a constituent country of the United Kingdom)"]}
{"mi": "whare tūpāpaku", "gr": "noun", "en": ["morgue"]}
{"mi": "kaipatu tohorā", "gr": "noun", "en": ["whaler"]}
{"mi": "kaipatu kekeno", "gr": "noun", "en": ["sealer, seal-hunter"]}
{"mi": "ngaro huruhuru", "gr": "noun", "en": ["bee, any native pollinating insect in the family Colletidae of pan-apian clade Anthophila."]}
{"mi": "kawau tikitiki", "gr": "noun", "en": ["spotted shag (Phalacrocorax punctatus)"]}
{"mi": "rongoā āraimate", "gr": "noun", "en": ["vaccine", "vaccination (inoculation with a vaccine)"]}
{"mi": "taunga rererangi", "gr": "noun", "en": ["airport", "aerodrome", "airfield"]}
{"mi": "pepeke nguturoa", "gr": "noun", "en": ["weevil"]}
{"mi": "tai āniwhaniwha", "gr": "noun", "en": ["tidal wave"]}
{"mi": "hunga whakaruru", "gr": "noun", "en": ["refugee"]}
{"mi": "pūtiro tukutuku", "gr": "noun", "en": ["web browser"]}
{"mi": "hākete whakaora", "gr": "noun", "en": ["life jacket"]}
{"mi": "taunga tukutuku", "gr": "noun", "en": ["Cartesian coordinates"]}
{"mi": "tūtohi tukutuku", "gr": "noun", "en": ["array"]}
{"mi": "utauta tukutuku", "gr": "noun", "en": ["webtool"]}
{"mi": "Tararā", "gr": "noun", "en": ["A native or inhabitant of Dalmatia."]}
{"mi": "karaihe whakanui", "gr": "noun", "en": ["microscope"]}
{"mi": "tangata ira tāne", "gr": "noun", "en": ["a person assigned female at birth who behave as a man"]}
{"mi": "kōtuku ngutupapa", "gr": "noun", "en": ["royal spoonbill (Platalea regia)"]}
{"mi": "rapunga whakaaro", "gr": "noun", "en": ["philosophy"]}
{"mi": "mate pūkahu kakā", "gr": "noun", "en": ["pneumonia"]}
{"mi": "āhuahanga taunga", "gr": "noun", "en": ["analytic geometry"]}
{"mi": "tukutuku inerite", "gr": "noun", "en": ["isometric grid"]}
{"mi": "marangai kirikiri", "gr": "noun", "en": ["sandstorm"]}
{"mi": "poro-tapawhā rite", "gr": "noun", "en": ["square prism"]}
{"mi": "whakatōpū kongakonga", "gr": "noun", "en": ["defragmentation"]}
{"mi": "tangaroa wae whitu", "gr": "noun", "en": ["Astrostole scabra - a large starfish with only seven arms."]}
{"mi": "piriti whakatārewa", "gr": "noun", "en": ["suspension bridge"]}
{"mi": "Rātapu", "gr": "noun", "en": ["Sunday"]}
{"mi": "Peraha", "gr": "noun", "en": ["Perth (the capital of Western Australia, Australia)"]}
{"mi": "Ōpango", "gr": "noun", "en": ["All Blacks"]}
{"mi": "Paraire", "gr": "noun", "en": ["Friday"]}
{"mi": "Hātarei", "gr": "noun", "en": ["Saturday"]}
{"mi": "Mihinare", "gr": "noun", "en": ["Anglican", "missionary"]}
{"mi": "Pukamata", "gr": "noun", "en": ["Facebook"]}
{"mi": "whakatewhatewha pānga", "gr": "noun", "en": ["contact tracing"]}
{"mi": "Māoritanga", "gr": "noun", "en": ["Maoriness, Maoritanga, Maoridom"]}
{"mi": "Hinekōrako", "gr": "noun", "en": ["moonbow"]}
{"mi": "Papua Nūkini", "gr": "noun", "en": ["Papua New Guinea (a country in Oceania)"]}
{"mi": "Meri Kirihimete", "gr": "noun", "en": ["merry Christmas"]}
{"mi": "Pāremata Aotearoa", "gr": "noun", "en": ["New Zealand Parliament"]}
{"mi": "Whiringa ki Tawhiti", "gr": "noun", "en": ["Pluto"]}

`;var ys=`{"mi": "ngā", "gr": "verb", "en": ["to breathe"]}
{"mi": "haere", "gr": "verb", "en": ["go", "come"]}
{"mi": "hoki", "gr": "verb", "en": ["to return"]}
{"mi": "koe", "gr": "verb", "en": ["to squeak, to scream, to squawk, to cry"]}
{"mi": "ā", "gr": "verb", "en": ["to drive (something), such as cattle or other livestock", "to urge or compel (something) to move"]}
{"mi": "ō", "gr": "verb", "en": ["to have, to own"]}
{"mi": "tā", "gr": "verb", "en": ["to dump, strike, beat, thump, throw down, tackle", "to apply tattoo", "to carve, cut, etch, fashion", "to print"]}
{"mi": "tō", "gr": "verb", "en": ["to pull", "to open or shut", "to haul, i.e. to move something heavy by pulling along a surface", "to hold down and move something with a cursor across an interface"]}
{"mi": "tō", "gr": "verb", "en": ["to be calm, peaceful, tranquil", "to set (of an astronomical body)"]}
{"mi": "tō", "gr": "verb", "en": ["to vibrate, tingle"]}
{"mi": "noa", "gr": "verb", "en": ["to be unrestricted"]}
{"mi": "ai", "gr": "verb", "en": ["to copulate"]}
{"mi": "koro", "gr": "verb", "en": ["to desire"]}
{"mi": "noho", "gr": "verb", "en": ["to sit", "to reside, dwell", "to reign", "to be still, to remain in one place"]}
{"mi": "kōrero", "gr": "verb", "en": ["To speak, talk, address", "To read"]}
{"mi": "mahi", "gr": "verb", "en": ["to work, do, perform, make, accomplish, practise, raise (money)"]}
{"mi": "tae", "gr": "verb", "en": ["to arrive at or to somewhere", "to extend towards, to reach", "to proceed"]}
{"mi": "kite", "gr": "verb", "en": ["to see", "to find, to perceive", "to discover", "to recognize, to detect"]}
{"mi": "rongo", "gr": "verb", "en": ["to hear", "to perceive, to sense, to feel", "to obey, to heed"]}
{"mi": "tiro", "gr": "verb", "en": ["to observe, to view", "to inspect"]}
{"mi": "mōhio", "gr": "verb", "en": ["to know", "to understand, comprehend", "to realize", "to recognize"]}
{"mi": "whakaaro", "gr": "verb", "en": ["to think, plan, consider, decide"]}
{"mi": "hiahia", "gr": "verb", "en": ["to desire, wish, want, crave", "to need"]}
{"mi": "pai", "gr": "verb", "en": ["to like, to approve"]}
{"mi": "aha", "gr": "verb", "en": ["to do what, something (interrogative verb)"]}
{"mi": "hea", "gr": "verb", "en": ["grieve"]}
{"mi": "pēhea", "gr": "verb", "en": ["how?; of what sort?; in what way?"]}
{"mi": "pēhea", "gr": "verb", "en": ["what way?; in which direction?"]}
{"mi": "tahi", "gr": "verb", "en": ["to sweep, to clear away"]}
{"mi": "waru", "gr": "verb", "en": ["to scrape", "to grate", "to shave (of hair)", "to peel"]}
{"mi": "whānau", "gr": "verb", "en": ["to give birth", "to be born"]}
{"mi": "ako", "gr": "verb", "en": ["to learn, to study"]}
{"mi": "tauira", "gr": "verb", "en": ["to preordain", "to model"]}
{"mi": "tuhi", "gr": "verb", "en": ["to point at"]}
{"mi": "tuhi", "gr": "verb", "en": ["to draw", "to write"]}
{"mi": "pānui", "gr": "verb", "en": ["announce, notify, advertise, publish, proclaim"]}
{"mi": "pānui", "gr": "verb", "en": ["read, speak aloud, narrate, recite"]}
{"mi": "kai", "gr": "verb", "en": ["to eat (to consume food)"]}
{"mi": "inu", "gr": "verb", "en": ["to drink"]}
{"mi": "tau", "gr": "verb", "en": ["to settle"]}
{"mi": "tau", "gr": "verb", "en": ["to know"]}
{"mi": "tangi", "gr": "verb", "en": ["to cry (to weep)", "to sing, to make a sound"]}
{"mi": "waiata", "gr": "verb", "en": ["to sing"]}
{"mi": "patu", "gr": "verb", "en": ["to strike, to beat, to kill"]}
{"mi": "tū", "gr": "verb", "en": ["to stand", "to erect", "to establish, to convene", "to remain"]}
{"mi": "eke", "gr": "verb", "en": ["to climb, to ascend, to rise", "to mount, to ride on", "to embark", "to surf", "to skate, to skateboard", "to raft", "to place something on", "to achieve, to attain"]}
{"mi": "heke", "gr": "verb", "en": ["to descend, to fall", "to migrate", "to ebb", "to drip", "to surf", "to raft"]}
{"mi": "piki", "gr": "verb", "en": ["to climb, to scale"]}
{"mi": "piki", "gr": "verb", "en": ["to support, to assist"]}
{"mi": "kawe", "gr": "verb", "en": ["to carry, to bring, to bear", "to fetch", "to convey (of meaning etc.)", "to conduct (heat, energy etc.)", "to induce, to influence", "to persevere, to persist"]}
{"mi": "tiki", "gr": "verb", "en": ["to fetch, to get"]}
{"mi": "tiki", "gr": "verb", "en": ["to fail"]}
{"mi": "tuku", "gr": "verb", "en": ["to slacken, to let go", "to release", "to permit, allow", "to give up", "to present, to offer", "to send", "to post"]}
{"mi": "hoko", "gr": "verb", "en": ["to barter, exchange, trade"]}
{"mi": "kupu", "gr": "verb", "en": ["to speak"]}
{"mi": "kino", "gr": "verb", "en": ["to dislike, to hate"]}
{"mi": "kino", "gr": "verb", "en": ["evil, bad", "naughty", "ugly", "untidy", "spoiled, damaged", "defective, faulty"]}
{"mi": "wera", "gr": "verb", "en": ["to burn", "to be burnt; to be hot"]}
{"mi": "ora", "gr": "verb", "en": ["to exist", "to be alive, well, safe, cured, recovered, healthy", "to survive"]}
{"mi": "mate", "gr": "verb", "en": ["to be dead, deceased, killed", "to be sick, ill, unwell, diseased", "to be defeated, conquered, beaten, overcome", "to be in want of, deeply in love"]}
{"mi": "moe", "gr": "verb", "en": ["to sleep, to nap", "to dream", "to marry", "to die", "to faint"]}
{"mi": "riri", "gr": "verb", "en": ["to be angry, to rage", "to attack"]}
{"mi": "mataku", "gr": "verb", "en": ["to fear (feel fear about (something))"]}
{"mi": "whakahaere", "gr": "verb", "en": ["to organise", "to conduct, lead, operate, execute, direct, manage, control, administer, institute, implement, perform"]}
{"mi": "whakamahi", "gr": "verb", "en": ["to employ, use, utilise, put to work, operate, put to use"]}
{"mi": "whakahoki", "gr": "verb", "en": ["to turn back, to make something return", "to give back", "to answer"]}
{"mi": "whakaatu", "gr": "verb", "en": ["to show, reveal, display, exhibit", "to announce, disclose", "to notify", "to point out", "to perform"]}
{"mi": "hanga", "gr": "verb", "en": ["to make; to create", "to build"]}
{"mi": "whakaora", "gr": "verb", "en": ["to revive, to resuscitate", "to save, to rescue", "to heal, to cure"]}
{"mi": "mutu", "gr": "verb", "en": ["to cut, to chop", "to amputate", "to cease, to complete, to end, to finish"]}
{"mi": "tīmata", "gr": "verb", "en": ["to begin, to start, kick off, commence"]}
{"mi": "hou", "gr": "verb", "en": ["to bind or lash together"]}
{"mi": "hou", "gr": "verb", "en": ["to move or force downwards", "to strike down, to peck etc"]}
{"mi": "pākehā", "gr": "verb", "en": ["to become pākehā, to become westernised or influenced by British culture"]}
{"mi": "utu", "gr": "verb", "en": ["to pay", "to reply; to answer"]}
{"mi": "ahiahi", "gr": "verb", "en": ["to become evening"]}
{"mi": "tua", "gr": "verb", "en": ["to fell, chop down a tree"]}
{"mi": "kaha", "gr": "verb", "en": ["to be strong, be courageous"]}
{"mi": "tika", "gr": "verb", "en": ["straight, direct", "correct, true, lawful, proper"]}
{"mi": "hē", "gr": "verb", "en": ["to err"]}
{"mi": "whiti", "gr": "verb", "en": ["to be alarmed"]}
{"mi": "whiti", "gr": "verb", "en": ["to exchange, transfer, swap", "to cross over to reach the other side"]}
{"mi": "whiti", "gr": "verb", "en": ["to shine (of the sun)"]}
{"mi": "whiti", "gr": "verb", "en": ["to be fit"]}
{"mi": "au", "gr": "verb", "en": ["to howl, bark (of a dog)"]}
{"mi": "ahu", "gr": "verb", "en": ["to care for, to foster", "to face or move in a certain direction"]}
{"mi": "ahu", "gr": "verb", "en": ["to heap up"]}
{"mi": "pere", "gr": "verb", "en": ["to flick, to yank"]}
{"mi": "pere", "gr": "verb", "en": ["to ring (a bell), to toll"]}
{"mi": "uta", "gr": "verb", "en": ["to load on, put on (passengers or cargo on vehicles)", "to contribute"]}
{"mi": "taki", "gr": "verb", "en": ["to tow with a line", "to entice", "to challenge", "to give a speech", "to lead", "to recite", "to rise", "to stick in"]}
{"mi": "hau", "gr": "verb", "en": ["to be heard", "to spread news", "to exceed"]}
{"mi": "tari", "gr": "verb", "en": ["to ensnare"]}
{"mi": "tari", "gr": "verb", "en": ["to bring"]}
{"mi": "poro", "gr": "verb", "en": ["to break, to cut off", "to amputate, to behead", "to shorten, to abbreviate", "to finish"]}
{"mi": "poi", "gr": "verb", "en": ["to make into balls, to knead"]}
{"mi": "poi", "gr": "verb", "en": ["to toss up", "to swing or twirl"]}
{"mi": "kopa", "gr": "verb", "en": ["to fly away", "to pass by, to disappear"]}
{"mi": "kopa", "gr": "verb", "en": ["to be bent or folded"]}
{"mi": "kopa", "gr": "verb", "en": ["to be crippled, lame"]}
{"mi": "āhua", "gr": "verb", "en": ["to appear", "to apprehend in the mind; to come to knowledge or proof; to be obvious or manifest; to look like", "to be pregnant, to expect a child"]}
{"mi": "āhua", "gr": "verb", "en": ["to form", "to make"]}
{"mi": "pū", "gr": "verb", "en": ["to bundle", "to lay in a heap, to heap"]}
{"mi": "pū", "gr": "verb", "en": ["to blow", "to shoot (of a firearm)"]}
{"mi": "tāke", "gr": "verb", "en": ["to tax something or someone"]}
{"mi": "toro", "gr": "verb", "en": ["to stretch out, to extend", "to creep, to crawl", "to visit, to call on", "to scout out, to reconnoitre, to probe", "to forage"]}
{"mi": "tara", "gr": "verb", "en": ["to shine rays, to irradiate", "to disturb, to ruffle"]}
{"mi": "tara", "gr": "verb", "en": ["to gossip"]}
{"mi": "aro", "gr": "verb", "en": ["to turn toward something or someone", "to desire", "to incline towards something, to favour"]}
{"mi": "apa", "gr": "verb", "en": ["to heap; layer; stack"]}
{"mi": "whāngai", "gr": "verb", "en": ["to feed, nourish, bring up, foster, adopt, raise, nurture, rear"]}
{"mi": "take", "gr": "verb", "en": ["to originate, derive"]}
{"mi": "motu", "gr": "verb", "en": ["to sever, cut, cut off, set free, separate", "to be separated, moved to a distance - especially in the phrase motu ki te ara", "to be set free, escape", "to be cut, severed"]}
{"mi": "auau", "gr": "verb", "en": ["to bark"]}
{"mi": "auau", "gr": "verb", "en": ["to be frequent, recurring"]}
{"mi": "tatau", "gr": "verb", "en": ["to squeeze or wring out liquid"]}
{"mi": "tatau", "gr": "verb", "en": ["to count, to tally"]}
{"mi": "tatau", "gr": "verb", "en": ["to draw, to slide", "to shut a door"]}
{"mi": "pā", "gr": "verb", "en": ["to block up"]}
{"mi": "pā", "gr": "verb", "en": ["to touch, strike, hit (as by a stone), tag, affect", "to reach", "to be connected with, relate to, pertaining to, regarding", "to be heard, reach one's ears, hold personal communication with", "to blow (as the wind)", "to participate, act together, act in concert, join in (an undertaking)", "to have sex"]}
{"mi": "tupu", "gr": "verb", "en": ["to grow, to increase"]}
{"mi": "uru", "gr": "verb", "en": ["to enter, go in", "to possess", "to enlist, enrol, join, be included"]}
{"mi": "tia", "gr": "verb", "en": ["to steer"]}
{"mi": "kini", "gr": "verb", "en": ["to pinch, to nip (with fingers, claws etc)", "to pinch off"]}
{"mi": "whai", "gr": "verb", "en": ["to follow, chase, pursue", "to look for, search", "to proceed to a following action"]}
{"mi": "whai", "gr": "verb", "en": ["to possess, to have"]}
{"mi": "ngaro", "gr": "verb", "en": ["to be hidden, out of sight, covered, disappeared, absent", "to destroy"]}
{"mi": "ara", "gr": "verb", "en": ["to rise up, awake, arise, revive"]}
{"mi": "tukutuku", "gr": "verb", "en": ["to let go, down", "to get down", "to send", "to decorate with lattice-work"]}
{"mi": "wiki", "gr": "verb", "en": ["to form circular ripples on the surface of a fluid"]}
{"mi": "kēkē", "gr": "verb", "en": ["to quack (as a duck)"]}
{"mi": "maki", "gr": "verb", "en": ["to afflict (of an illness)"]}
{"mi": "ruru", "gr": "verb", "en": ["to enclose, to close together", "to take shelter"]}
{"mi": "tote", "gr": "verb", "en": ["to salt, add salt"]}
{"mi": "hā", "gr": "verb", "en": ["to breathe"]}
{"mi": "rere", "gr": "verb", "en": ["to fly", "to flee, escape", "to flow", "to leap", "to rush", "to run", "to race", "to descend, get down", "to sail", "to rise, set (of stars)"]}
{"mi": "puta", "gr": "verb", "en": ["to come out or come forth from some location", "to emerge, to appear into sight", "to rise (of celestial bodies)", "to pass through and out", "to graduate", "to run off; to escape", "to be born (of man)"]}
{"mi": "pani", "gr": "verb", "en": ["to smear, to spread across", "to daub", "to paint", "to apply (of medicine)", "to frost (of cakes)"]}
{"mi": "kau", "gr": "verb", "en": ["tree; wood", "stick"]}
{"mi": "kau", "gr": "verb", "en": ["to swim", "to wade"]}
{"mi": "pahū", "gr": "verb", "en": ["to burst, to explode"]}
{"mi": "pohane", "gr": "verb", "en": ["to desire earnestly", "to moon, expose the buttocks", "to practice sodomy"]}
{"mi": "tina", "gr": "verb", "en": ["be firm, hard, steadfast", "be constipated"]}
{"mi": "tina", "gr": "verb", "en": ["have lunch"]}
{"mi": "kuku", "gr": "verb", "en": ["to nip, to pinch", "to hold (of one's breath)", "to clench (of one's fist)", "to shut (of one's eyes)", "to draw together and close an opening of something"]}
{"mi": "piro", "gr": "verb", "en": ["to rot", "to disgust"]}
{"mi": "nanu", "gr": "verb", "en": ["to express disastifaction, to mumble or murmur"]}
{"mi": "hira", "gr": "verb", "en": ["to be great, important, widespread, of consequence", "to be numerous, abundant, plentiful", "to be large, big"]}
{"mi": "ārai", "gr": "verb", "en": ["to prevent; to forbid; to prohibit; to obstruct; to hinder", "to shield; to block out; to screen", "to insulate"]}
{"mi": "heu", "gr": "verb", "en": ["to separate, to pull apart or asunder", "to clear, to remove"]}
{"mi": "heu", "gr": "verb", "en": ["to shave"]}
{"mi": "hua", "gr": "verb", "en": ["to bear fruit, be abundant, accrue", "to flower, bloom, blossom"]}
{"mi": "kī", "gr": "verb", "en": ["to say, speak, express, utter, call, mention, tell, designate"]}
{"mi": "kī", "gr": "verb", "en": ["to lock", "to be locked"]}
{"mi": "pare", "gr": "verb", "en": ["to ward off, to fend"]}
{"mi": "hoa", "gr": "verb", "en": ["to lay out; to plan; to arrange"]}
{"mi": "whiu", "gr": "verb", "en": ["toss, throw, fling", "drive (animals, etc), herd", "present", "penalise, punish, lash, whip, chastise, flog"]}
{"mi": "whiu", "gr": "verb", "en": ["be satisfied (with food)"]}
{"mi": "haina", "gr": "verb", "en": ["to sign"]}
{"mi": "whano", "gr": "verb", "en": ["to proceed, to go towards", "to lead or verge towards something"]}
{"mi": "whano", "gr": "verb", "en": ["to act, to do", "to behave"]}
{"mi": "tapa", "gr": "verb", "en": ["to cut, to chop", "to reap, to harvest (of crops like wheat)"]}
{"mi": "tapa", "gr": "verb", "en": ["to call or name someone", "to command", "to recite, to incantate"]}
{"mi": "hiko", "gr": "verb", "en": ["to flash"]}
{"mi": "hiko", "gr": "verb", "en": ["to stimulate", "to grab; to grasp"]}
{"mi": "uaua", "gr": "verb", "en": ["difficult; hard; demanding"]}
{"mi": "hirahira", "gr": "verb", "en": ["to be great, important, significant, eminent"]}
{"mi": "atawhai", "gr": "verb", "en": ["to show kindness to"]}
{"mi": "horo", "gr": "verb", "en": ["to run", "to flee, to escape"]}
{"mi": "kā", "gr": "verb", "en": ["to burn", "to be alight"]}
{"mi": "kā", "gr": "verb", "en": ["to screech"]}
{"mi": "pōhēhē", "gr": "verb", "en": ["to misunderstand", "to be bewildered"]}
{"mi": "wāwā", "gr": "verb", "en": ["to be scattered"]}
{"mi": "taunga", "gr": "verb", "en": ["to become familiar with, used to, accustomed."]}
{"mi": "whana", "gr": "verb", "en": ["to spring back, to recoil, to kick backwards", "to impel", "to rush, charge", "to travel, come, go", "to revolt, rebel, mutiny, rise up, riot"]}
{"mi": "whakaahua", "gr": "verb", "en": ["to transform", "to take form", "to form", "to fashion", "to photograph", "to portray", "to film", "to delineate", "to photocopy"]}
{"mi": "tore", "gr": "verb", "en": ["to cut, to split", "to pass through a narrow aperture"]}
{"mi": "oka", "gr": "verb", "en": ["to stab, to pierce", "to prick", "to vaccinate"]}
{"mi": "pona", "gr": "verb", "en": ["to tie or fasten in a knot"]}
{"mi": "ōi", "gr": "verb", "en": ["to shout"]}
{"mi": "kōkō", "gr": "verb", "en": ["to unearth, to dig up, to excavate", "to thrust", "to pout the lips out of displeasure", "to tattoo esp. of the moko with special chisel tools (uhi)"]}
{"mi": "puku", "gr": "verb", "en": ["to swell", "to dilate"]}
{"mi": "rū", "gr": "verb", "en": ["to shake, to agitate, to quiver", "to scatter, to sow"]}
{"mi": "waea", "gr": "verb", "en": ["to be weary"]}
{"mi": "waea", "gr": "verb", "en": ["to telephone, ring", "to send a telegram, wire"]}
{"mi": "pīrangi", "gr": "verb", "en": ["to crave, want, desire", "to need", "to like"]}
{"mi": "popo", "gr": "verb", "en": ["to be rotten, decayed, worm-eaten, decomposed"]}
{"mi": "māpere", "gr": "verb", "en": ["to ballot", "to conscript"]}
{"mi": "āpuru", "gr": "verb", "en": ["to suppress, shut up, crowd together, overwhelm."]}
{"mi": "toa", "gr": "verb", "en": ["to win"]}
{"mi": "hae", "gr": "verb", "en": ["to tear, to scratch, to lacerate", "to inflict pain"]}
{"mi": "hae", "gr": "verb", "en": ["to envy"]}
{"mi": "rore", "gr": "verb", "en": ["to trap, to ensnare", "to entangle, to glide", "to deceive"]}
{"mi": "ura", "gr": "verb", "en": ["to glow, to be glowing"]}
{"mi": "tiaki", "gr": "verb", "en": ["to guard or keep", "to protect, to save"]}
{"mi": "tātari", "gr": "verb", "en": ["to strain, filter, sift", "to measure out", "to analyze"]}
{"mi": "wae", "gr": "verb", "en": ["to divide", "to separate", "to clear away"]}
{"mi": "hara", "gr": "verb", "en": ["to be in violation of a tapu", "to transgress", "to commit a sin", "to violate the law", "to offend"]}
{"mi": "eka", "gr": "verb", "en": ["to survey"]}
{"mi": "whakaari", "gr": "verb", "en": ["to expose, to display", "to act, to perform"]}
{"mi": "whakaari", "gr": "verb", "en": ["to nominate, to propose"]}
{"mi": "kawa", "gr": "verb", "en": ["to perform the kawa ceremony, open a new house"]}
{"mi": "ua", "gr": "verb", "en": ["to rain"]}
{"mi": "raka", "gr": "verb", "en": ["to step on something"]}
{"mi": "roki", "gr": "verb", "en": ["to secure, to keep intact", "to store, to contain", "to preserve", "to make calm, to make safe"]}
{"mi": "nohopuku", "gr": "verb", "en": ["to fast"]}
{"mi": "nohopuku", "gr": "verb", "en": ["to be silent"]}
{"mi": "horoi", "gr": "verb", "en": ["wash, clean"]}
{"mi": "pī", "gr": "verb", "en": ["to ignore, to slight, to neglect"]}
{"mi": "rāhui", "gr": "verb", "en": ["be reserved, be restricted"]}
{"mi": "toko", "gr": "verb", "en": ["to prop up", "to push away", "to separate, divorce"]}
{"mi": "nama", "gr": "verb", "en": ["to owe, to be in debt", "to borrow, to obtain on credit", "to lend, to give credit"]}
{"mi": "huri", "gr": "verb", "en": ["to turn round, to revolve", "to grind, to mill", "to change", "to overflow, to overwhelm"]}
{"mi": "whiwhi", "gr": "verb", "en": ["to wind round, to fasten", "to wrap around", "to encircle"]}
{"mi": "whiwhi", "gr": "verb", "en": ["to acquire, to possess"]}
{"mi": "auahi", "gr": "verb", "en": ["to be smoky"]}
{"mi": "oro", "gr": "verb", "en": ["to resound, to echo"]}
{"mi": "oro", "gr": "verb", "en": ["to sharpen, to grind"]}
{"mi": "unu", "gr": "verb", "en": ["pull out, withdraw, draw out, extract", "to pull off, put off, take off (clothes, etc.)", "to exempt, discharge, exclude", "to surrender"]}
{"mi": "unu", "gr": "verb", "en": ["to drink"]}
{"mi": "mura", "gr": "verb", "en": ["to burn (of firewood), to blaze", "to glow", "to blush, to redden"]}
{"mi": "pota", "gr": "verb", "en": ["to break, to snap"]}
{"mi": "hū", "gr": "verb", "en": ["to make a loud noise", "to bubble up (of water)", "to hiss", "to call (out to), signal, cooey"]}
{"mi": "tohi", "gr": "verb", "en": ["to cut or split something off, especially with a blade", "to chisel in a similar manner", "to separate", "to divide"]}
{"mi": "tohi", "gr": "verb", "en": ["to boil using such a vessel"]}
{"mi": "whao", "gr": "verb", "en": ["to chisel out"]}
{"mi": "whao", "gr": "verb", "en": ["to go into; to enter", "to put into; to fill"]}
{"mi": "ioio", "gr": "verb", "en": ["to shred"]}
{"mi": "utauta", "gr": "verb", "en": ["to load things"]}
{"mi": "kapu", "gr": "verb", "en": ["to ladle, to scoop up"]}
{"mi": "whatu", "gr": "verb", "en": ["to weave; to knit"]}
{"mi": "hana", "gr": "verb", "en": ["to shine, glow", "to give out heat"]}
{"mi": "pepe", "gr": "verb", "en": ["to flutter", "to frisk, to frolic", "to stumble, hesitate or stutter (in speech, reciting etc)"]}
{"mi": "punga", "gr": "verb", "en": ["to anchor", "to secure", "to sink, to fall"]}
{"mi": "anga", "gr": "verb", "en": ["to face", "to set about, to begin"]}
{"mi": "rī", "gr": "verb", "en": ["to bind", "to insure"]}
{"mi": "rī", "gr": "verb", "en": ["to block, to screen off", "to protect"]}
{"mi": "uira", "gr": "verb", "en": ["to flash, to gleam"]}
{"mi": "tahe", "gr": "verb", "en": ["to flow, to exude", "to drip", "to menstruate", "to drop", "to miscarry"]}
{"mi": "taurekareka", "gr": "verb", "en": ["to be enslaved"]}
{"mi": "pata", "gr": "verb", "en": ["to drip", "to splatter"]}
{"mi": "matira", "gr": "verb", "en": ["To fish (with a rod)"]}
{"mi": "amo", "gr": "verb", "en": ["to charge, to attack"]}
{"mi": "amo", "gr": "verb", "en": ["to carry something on the shoulder (on a litter, etc)", "to present (of an offering)"]}
{"mi": "mihi", "gr": "verb", "en": ["to lament for, to grieve", "to welcome, to greet, to acknowledge"]}
{"mi": "kohu", "gr": "verb", "en": ["to cook in a hollow receptacle i.e. pot in an earth pit (hangi)", "an oven"]}
{"mi": "puru", "gr": "verb", "en": ["to plug, to fill or stuff in, to cram"]}
{"mi": "teka", "gr": "verb", "en": ["to shoot with bow and arrow", "to drive something forward, to urge, to impel"]}
{"mi": "rawe", "gr": "verb", "en": ["to wrap around, to coil around (of clothing, cords, ropes etc.)"]}
{"mi": "karakia", "gr": "verb", "en": ["to recite ritual chants or a prayer, to say grace, to pray"]}
{"mi": "pou", "gr": "verb", "en": ["to erect a post", "to prop on (or elevate with) posts or pillars", "to establish", "to appoint"]}
{"mi": "mina", "gr": "verb", "en": ["to desire", "to feel an inclination", "to wish", "to have a craving for"]}
{"mi": "huru", "gr": "verb", "en": ["to glow", "to rise"]}
{"mi": "ranga", "gr": "verb", "en": ["to raise up from the ground", "to uproot, to pull from the roots", "to set in motion, to transport"]}
{"mi": "pāho", "gr": "verb", "en": ["to spread (of speech)", "(of electronic signals) to be transmitted far, to air, to be broadcast"]}
{"mi": "maka", "gr": "verb", "en": ["throw, fling, cast, pass (with the hands)", "place, put, put in"]}
{"mi": "hari", "gr": "verb", "en": ["to dance"]}
{"mi": "hari", "gr": "verb", "en": ["to carry"]}
{"mi": "whero", "gr": "verb", "en": ["to redden"]}
{"mi": "kati", "gr": "verb", "en": ["to bite, to nip"]}
{"mi": "kati", "gr": "verb", "en": ["to close, shut", "to block up, to obstruct"]}
{"mi": "kati", "gr": "verb", "en": ["to be closed"]}
{"mi": "neke", "gr": "verb", "en": ["to shift, to move slightly", "to indent (of text)"]}
{"mi": "wehi", "gr": "verb", "en": ["to be terrible", "to be afraid, fearful"]}
{"mi": "whakamataku", "gr": "verb", "en": ["to terrify, to scare, to frighten"]}
{"mi": "kukū", "gr": "verb", "en": ["to grate, to scrape", "to make a grating sound"]}
{"mi": "manaaki", "gr": "verb", "en": ["to support, take care of, look out for"]}
{"mi": "tāone", "gr": "verb", "en": ["to establish towns, lay out as a town"]}
{"mi": "hinga", "gr": "verb", "en": ["to fall, to tumble", "to slant, to tilt", "to lose"]}
{"mi": "whenu", "gr": "verb", "en": ["to spin, to twist"]}
{"mi": "ane", "gr": "verb", "en": ["to decay, to destroy"]}
{"mi": "hui", "gr": "verb", "en": ["to gather, congregate, assemble, meet"]}
{"mi": "hura", "gr": "verb", "en": ["to put or raise a hand up", "to twitch, to shrug"]}
{"mi": "hura", "gr": "verb", "en": ["to open a lid or cover", "to uncover, to expose", "to discover", "to break (of dawn)", "to swell or rise"]}
{"mi": "nuku", "gr": "verb", "en": ["to move, to shift", "to extend", "to indent"]}
{"mi": "wāhi", "gr": "verb", "en": ["to break", "to divide", "to disclose"]}
{"mi": "uwhi", "gr": "verb", "en": ["to spread over, to cover"]}
{"mi": "turaki", "gr": "verb", "en": ["to push over", "to oppose", "to overthrow"]}
{"mi": "mārena", "gr": "verb", "en": ["to marry"]}
{"mi": "kuru", "gr": "verb", "en": ["to strike with a fist; to pound or thump"]}
{"mi": "tepe", "gr": "verb", "en": ["to congeal, to coagulate"]}
{"mi": "pūpū", "gr": "verb", "en": ["to bunch, to bundle"]}
{"mi": "whio", "gr": "verb", "en": ["to whistle"]}
{"mi": "kākāriki", "gr": "verb", "en": ["to become green"]}
{"mi": "ehu", "gr": "verb", "en": ["disinter, exhume"]}
{"mi": "whakamōtī", "gr": "verb", "en": ["to destroy, extirpate, annihilate, crush, eradicate, devastate, eliminate."]}
{"mi": "whakangaro", "gr": "verb", "en": ["to destroy, exterminate, annihilate.", "to hide, conceal, put out of sight.", "to disappear."]}
{"mi": "kīngi", "gr": "verb", "en": ["to reign"]}
{"mi": "hīkoi", "gr": "verb", "en": ["to step on something", "to walk", "to stride", "to march"]}
{"mi": "paki", "gr": "verb", "en": ["to hit, to smack", "to slap, to spank", "to clap", "to print, to publish"]}
{"mi": "tuke", "gr": "verb", "en": ["to twitch", "to jerk", "to nudge"]}
{"mi": "kumu", "gr": "verb", "en": ["to clench, to close one's hand tightly into a fist", "to hold or carry an object with fingers closing around it", "to close or shut one's mouth", "to hold one's breath"]}
{"mi": "kape", "gr": "verb", "en": ["to pluck or pick out (items from an earth oven with sticks etc)", "to set aside something"]}
{"mi": "ū", "gr": "verb", "en": ["to strike home, to hit the mark (as of a weapon)", "to land (as of a vessel), to come ashore", "to comply", "to be firm, fixed, unyielding"]}
{"mi": "wānanga", "gr": "verb", "en": ["to meet and discuss", "to consider or deliberate"]}
{"mi": "hoariri", "gr": "verb", "en": ["to be an enemy"]}
{"mi": "hāro", "gr": "verb", "en": ["to scrape", "to scutch i.e. remove waxy outer layer of harakeke (Phormium tenax) leaves exposing inner fibres (muka) to be woven as fabric", "to plane or smoothen wood"]}
{"mi": "ripi", "gr": "verb", "en": ["to cut, to slice, to gash", "to skim or glide or ricochet off the water surface"]}
{"mi": "urupatu", "gr": "verb", "en": ["to utterly destroy, wipe out, devastate, annihilate, sack."]}
{"mi": "toitū", "gr": "verb", "en": ["to be undisturbed, untouched", "to be permanent", "to be entire", "to be sustainable"]}
{"mi": "taka", "gr": "verb", "en": ["to turn or wind round, to pivot", "to encircle", "to range, to roam", "to fall off"]}
{"mi": "runa", "gr": "verb", "en": ["to tie up, to draw together", "to secure", "to keep close, to gather", "to assemble"]}
{"mi": "piupiu", "gr": "verb", "en": ["to swing or sway to-and-fro, to oscillate"]}
{"mi": "koutu", "gr": "verb", "en": ["to project", "to stand out, to be conspicuous"]}
{"mi": "koutu", "gr": "verb", "en": ["to dip into"]}
{"mi": "mangeo", "gr": "verb", "en": ["to itch, to irritate"]}
{"mi": "āwhio", "gr": "verb", "en": ["to go in circles or in a roundabout way, to snake", "to swirl"]}
{"mi": "hōkaka", "gr": "verb", "en": ["to desire, to want, to yearn"]}
{"mi": "rekareka", "gr": "verb", "en": ["to be pleasant, enjoyable, fun", "to be happy, rapt, overjoyed, delighted"]}
{"mi": "hoe", "gr": "verb", "en": ["to row, to paddle", "to push away with one's hand", "to refuse, to reject"]}
{"mi": "koko", "gr": "verb", "en": ["to ladle, to scoop up", "to shovel"]}
{"mi": "tiri", "gr": "verb", "en": ["to cast, to scatter", "to throw or place one by one, to stack in a row", "to plant", "to share"]}
{"mi": "whiri", "gr": "verb", "en": ["to twist", "to weave", "to spin", "to curl or fold one's hands"]}
{"mi": "whiri", "gr": "verb", "en": ["to choose, to select, to elect", "to pick", "to decide"]}
{"mi": "hoka", "gr": "verb", "en": ["to soar, fly", "to lift; to hold aloft"]}
{"mi": "hoka", "gr": "verb", "en": ["to pierce", "to point or project sharply upwards", "to taper to a sharp point"]}
{"mi": "mātau", "gr": "verb", "en": ["to know, to understand"]}
{"mi": "rongoā", "gr": "verb", "en": ["to treat; to apply medicines", "to preserve"]}
{"mi": "upoko", "gr": "verb", "en": ["to meet and discuss", "to consider or deliberate"]}
{"mi": "mahara", "gr": "verb", "en": ["to think about", "to recollect, to remember"]}
{"mi": "pōkai", "gr": "verb", "en": ["to wind something in a ball or coil", "to roll up, to wrap up", "to travel", "to surround"]}
{"mi": "tārewa", "gr": "verb", "en": ["to suspend, to hang"]}
{"mi": "tārewa", "gr": "verb", "en": ["hanging, dangling", "unresolved, unsettled", "deferred, delayed"]}
{"mi": "kūrae", "gr": "verb", "en": ["to project"]}
{"mi": "ari", "gr": "verb", "en": ["clear, evident, visible"]}
{"mi": "matomato", "gr": "verb", "en": ["to be green (of foliage)", "aesthetically pleasing"]}
{"mi": "maina", "gr": "verb", "en": ["to lay mines"]}
{"mi": "aranga", "gr": "verb", "en": ["to arise, to emerge, to appear", "to become known"]}
{"mi": "aukati", "gr": "verb", "en": ["to bar, restrict, prohibit, block", "to discriminate"]}
{"mi": "wahangū", "gr": "verb", "en": ["to be silent, to be quiet", "to be mute", "to be reserved"]}
{"mi": "rahi", "gr": "verb", "en": ["to be big, many, plentiful, numerous", "big, large"]}
{"mi": "tipi", "gr": "verb", "en": ["to slice, to cut into slices", "to pare off, to plane, to smoothen wood"]}
{"mi": "tipi", "gr": "verb", "en": ["to skim or glide along the surface", "to move quickly or smooothly"]}
{"mi": "aru", "gr": "verb", "en": ["to chase", "to follow, pursue"]}
{"mi": "taha", "gr": "verb", "en": ["to pass by"]}
{"mi": "tui", "gr": "verb", "en": ["to thread, to string together", "to pierce with a needle", "to sew"]}
{"mi": "tuki", "gr": "verb", "en": ["to ram, to pound, to pestle", "to punch", "to bunt"]}
{"mi": "pihi", "gr": "verb", "en": ["to spring up", "to start growing, to sprout"]}
{"mi": "miti", "gr": "verb", "en": ["to lick; to lap", "to swash, to touch the surface of water", "to absorb"]}
{"mi": "kamo", "gr": "verb", "en": ["to blink", "to wink"]}
{"mi": "wiri", "gr": "verb", "en": ["to bore, twist, drill", "to tremble, shiver, shudder"]}
{"mi": "kune", "gr": "verb", "en": ["to swell (of fruit, the body)", "to be pregnant", "to grow, to spring forth"]}
{"mi": "kope", "gr": "verb", "en": ["to wrap something in leaves etc"]}
{"mi": "hopu", "gr": "verb", "en": ["to seize, catch, snatch", "to record (make an audio or video recording of)", "to detect"]}
{"mi": "tāpiri", "gr": "verb", "en": ["to add on, to append"]}
{"mi": "kōpere", "gr": "verb", "en": ["to launch, to sling, to shoot", "to sprint"]}
{"mi": "āki", "gr": "verb", "en": ["to encourage, urge on, challenge, induce, incite, exhort", "to beat, pound, crash against, dash against, strike with great force, throw down, buffet, slam against, slam", "to replace"]}
{"mi": "whata", "gr": "verb", "en": ["to shelve something, to put something on a shelf", "to be laid on some surface", "to suspend freely", "to elevate, to support", "to make prominent"]}
{"mi": "wharo", "gr": "verb", "en": ["to scrape", "to scold", "to abuse", "to clear one's throat, to expectorate, to hawk"]}
{"mi": "hahu", "gr": "verb", "en": ["to disinter", "to exhume"]}
{"mi": "ngāwhā", "gr": "verb", "en": ["to burst open, to split", "to bloom"]}
{"mi": "huatau", "gr": "verb", "en": ["to comment", "to realize"]}
{"mi": "heuheu", "gr": "verb", "en": ["to clear away, to remove", "to disperse"]}
{"mi": "heuheu", "gr": "verb", "en": ["shave"]}
{"mi": "pōhara", "gr": "verb", "en": ["to be poor, impoverished, destitute"]}
{"mi": "ukauka", "gr": "verb", "en": ["to support, to sustain"]}
{"mi": "whakapakaru", "gr": "verb", "en": ["to break, smash, rupture, shatter.", "to break"]}
{"mi": "kirikiri", "gr": "verb", "en": ["to incorporate gravel"]}
{"mi": "ato", "gr": "verb", "en": ["to thatch", "to fence in, enclose"]}
{"mi": "hama", "gr": "verb", "en": ["to hammer"]}
{"mi": "rara", "gr": "verb", "en": ["to spread out, to scatter", "to rush in disorder, to stampede"]}
{"mi": "waha", "gr": "verb", "en": ["to carry on one's back"]}
{"mi": "niko", "gr": "verb", "en": ["to coil, to form bights in ropes", "to go around"]}
{"mi": "tōhi", "gr": "verb", "en": ["toast (salutation)"]}
{"mi": "hīoi", "gr": "verb", "en": ["be a glossy green"]}
{"mi": "roha", "gr": "verb", "en": ["to spread out, to extend out, to stretch out", "to expand"]}
{"mi": "anea", "gr": "verb", "en": ["to be devastated, to be destroyed,", "to ravage, to ruin (in wars etc.)"]}
{"mi": "pukupuku", "gr": "verb", "en": ["to be lumpy, to be swollen"]}
{"mi": "paoi", "gr": "verb", "en": ["to pound fern root with a wooden beater"]}
{"mi": "huaki", "gr": "verb", "en": ["to open (of doors, lids)", "to uncover", "to dig out, to disinter or exhume", "to rise (of celestial bodies)"]}
{"mi": "kāwana", "gr": "verb", "en": ["To govern."]}
{"mi": "manako", "gr": "verb", "en": ["to long for, to yearn", "to miss", "to desire, to want", "to like"]}
{"mi": "kapiti", "gr": "verb", "en": ["to bring close together", "to join (of one separate thing to another)", "to clench, to shut", "to confine or surround (of an area)"]}
{"mi": "okaoka", "gr": "verb", "en": ["to vaccinate"]}
{"mi": "kotahi", "gr": "verb", "en": ["united"]}
{"mi": "whawhati", "gr": "verb", "en": ["to fracture", "to snap off, pick (e.g. fruit)", "to deny", "to repudiate, contradict, refute"]}
{"mi": "rite", "gr": "verb", "en": ["to resemble; to be like, similar, alike"]}
{"mi": "oni", "gr": "verb", "en": ["to wriggle", "to move, shift or slip from a previous position", "to jerk", "to thrust forward", "to thrust one's hips in a sexually suggestive way", "to make love, to copulate, to bed someone"]}
{"mi": "haha", "gr": "verb", "en": ["look for"]}
{"mi": "keri", "gr": "verb", "en": ["to dig (to move hard-packed earth out of the way)"]}
{"mi": "hahae", "gr": "verb", "en": ["to slit, to slash", "to erode", "to appear"]}
{"mi": "wehe", "gr": "verb", "en": ["to separate"]}
{"mi": "angi", "gr": "verb", "en": ["to float through the air"]}
{"mi": "pōti", "gr": "verb", "en": ["vote, elect"]}
{"mi": "tōpū", "gr": "verb", "en": ["to be assembled, consolidated in a group"]}
{"mi": "māota", "gr": "verb", "en": ["to be green", "to be raw", "to be freshly-grown"]}
{"mi": "marino", "gr": "verb", "en": ["to be calm or still (usually of the sea)"]}
{"mi": "tahito", "gr": "verb", "en": ["to be old, ancient, out of date"]}
{"mi": "hepara", "gr": "verb", "en": ["to shepherd"]}
{"mi": "kōwhiti", "gr": "verb", "en": ["to select, to choose", "to pull out, pull off"]}
{"mi": "kōwhiti", "gr": "verb", "en": ["to appear"]}
{"mi": "moto", "gr": "verb", "en": ["to strike with the fist, to punch, to box"]}
{"mi": "toto", "gr": "verb", "en": ["to bleed"]}
{"mi": "puna", "gr": "verb", "en": ["to well up; to flow"]}
{"mi": "tutū", "gr": "verb", "en": ["to be mischievous, disobedient, mutinous, rebellious, undisciplined, or disruptive."]}
{"mi": "heru", "gr": "verb", "en": ["to comb"]}
{"mi": "rona", "gr": "verb", "en": ["to bind, to tie together, to confine or tie down with cord"]}
{"mi": "nānā", "gr": "verb", "en": ["to tend carefully, to look after"]}
{"mi": "nānā", "gr": "verb", "en": ["to indulge, pamper"]}
{"mi": "kipa", "gr": "verb", "en": ["to spur (on)"]}
{"mi": "karo", "gr": "verb", "en": ["to pick out or scoop something out of a hole"]}
{"mi": "pewa", "gr": "verb", "en": ["to arch (of eyebrows)"]}
{"mi": "ranu", "gr": "verb", "en": ["to mix"]}
{"mi": "turu", "gr": "verb", "en": ["to drip; to leak"]}
{"mi": "ripo", "gr": "verb", "en": ["to swirl, to eddy"]}
{"mi": "pēpē", "gr": "verb", "en": ["to mash"]}
{"mi": "inoi", "gr": "verb", "en": ["to pray, beg, request, appeal"]}
{"mi": "ānau", "gr": "verb", "en": ["to curve"]}
{"mi": "ātea", "gr": "verb", "en": ["to be clear, to be unobstructed"]}
{"mi": "aweke", "gr": "verb", "en": ["to misrepresent, falsify, forge"]}
{"mi": "paheke", "gr": "verb", "en": ["to slip, to skid", "to fall, to decline", "to trickle, to drip"]}
{"mi": "tuarā", "gr": "verb", "en": ["to support, to assist"]}
{"mi": "ruku", "gr": "verb", "en": ["to dive", "to sink", "to submerge", "to hurl or let oneself fall into sth", "to ablute"]}
{"mi": "kongakonga", "gr": "verb", "en": ["to be crumbled", "to be fragmented"]}
{"mi": "whānako", "gr": "verb", "en": ["to steal"]}
{"mi": "whakawhiti", "gr": "verb", "en": ["to transfer, to convey", "to switch, to swap, to exchange"]}
{"mi": "whaikaha", "gr": "verb", "en": ["to have strength", "to be strong enough"]}
{"mi": "motumotu", "gr": "verb", "en": ["divided, broken up, cut"]}
{"mi": "wareware", "gr": "verb", "en": ["forget", "forgotten", "be forgetful"]}
{"mi": "kakau", "gr": "verb", "en": ["to swim"]}
{"mi": "takai", "gr": "verb", "en": ["to wrap up, wrap round", "to wind round"]}
{"mi": "kanga", "gr": "verb", "en": ["to curse, to swear"]}
{"mi": "umere", "gr": "verb", "en": ["to sing, to chant (of a choir)"]}
{"mi": "mamae", "gr": "verb", "en": ["to be painful, to hurt"]}
{"mi": "tūmau", "gr": "verb", "en": ["to be fixed, constant", "to serve"]}
{"mi": "kōhua", "gr": "verb", "en": ["to cook by boiling, to boil, to poach"]}
{"mi": "kōpaki", "gr": "verb", "en": ["to fold", "to wrap, cover"]}
{"mi": "rarau", "gr": "verb", "en": ["to grasp, to grab", "to take root"]}
{"mi": "tioro", "gr": "verb", "en": ["to squawk, to screech, to shriek"]}
{"mi": "kuīni", "gr": "verb", "en": ["to reign"]}
{"mi": "kōwhiri", "gr": "verb", "en": ["to pick, to choose, to select"]}
{"mi": "wewehi", "gr": "verb", "en": ["To be frightened, impressed, in awe", "To be frightening, alarming, fearsome, impressive, awesome"]}
{"mi": "kēhua", "gr": "verb", "en": ["to haunt"]}
{"mi": "piu", "gr": "verb", "en": ["to cast, to throw, to fling (of rope, line etc)", "to swing (of a cord)", "to wave, to sway", "to wield, to brandish (of a weapon)"]}
{"mi": "poki", "gr": "verb", "en": ["to turn over, to hang or place concave objects (like boats) upside down", "to overtake", "to capsize", "to cover over something (esp. with a lid)"]}
{"mi": "wawao", "gr": "verb", "en": ["referee, umpire"]}
{"mi": "makariri", "gr": "verb", "en": ["cold"]}
{"mi": "whakamā", "gr": "verb", "en": ["be ashamed, shy, bashful, embarrassed"]}
{"mi": "waimarie", "gr": "verb", "en": ["to be lucky, fortunate"]}
{"mi": "whakanui", "gr": "verb", "en": ["to enlarge, to magnify", "to celebrate, to honour"]}
{"mi": "hongi", "gr": "verb", "en": ["To perform the Maori greeting of touching noses."]}
{"mi": "akiri", "gr": "verb", "en": ["to discard, reject"]}
{"mi": "pātai", "gr": "verb", "en": ["to ask, to question"]}
{"mi": "pīata", "gr": "verb", "en": ["to be shiny, bright, polished, glossy"]}
{"mi": "pakini", "gr": "verb", "en": ["to pinch (to squeeze a small amount of skin)", "to nick (to make a nick or notch in)"]}
{"mi": "haika", "gr": "verb", "en": ["to anchor"]}
{"mi": "kōhue", "gr": "verb", "en": ["to cook by boiling, to boil"]}
{"mi": "auporo", "gr": "verb", "en": ["to curtail, truncate, cut short", "to strike"]}
{"mi": "hautū", "gr": "verb", "en": ["to lead"]}
{"mi": "atiti", "gr": "verb", "en": ["to wander; to moan"]}
{"mi": "tāwhiri", "gr": "verb", "en": ["to wave", "to whirl", "to beckon, to welcome", "to fan (esp. of flames)", "to wring out"]}
{"mi": "whakataka", "gr": "verb", "en": ["to drop, toss off, cause to fall, throw down, depose, overthrow, abdicate", "to prepare", "to muster, assemble, gather", "to turn, deviate, divert", "to take a circuitous route", "surround, encircle"]}
{"mi": "tūtaki", "gr": "verb", "en": ["to join together", "to meet", "to shut (of a enclosure), to block, to bolt"]}
{"mi": "mātaki", "gr": "verb", "en": ["to watch", "to observe, to survey", "to inspect, to examine"]}
{"mi": "tāniko", "gr": "verb", "en": ["to finger weave", "to embroider"]}
{"mi": "pātari", "gr": "verb", "en": ["to entice", "to divert, to decoy", "to provoke, to encite"]}
{"mi": "pūrou", "gr": "verb", "en": ["to spear (to thrust that catches an object on the tip of a pointed stick)"]}
{"mi": "pīkau", "gr": "verb", "en": ["to carry on the back"]}
{"mi": "īmēra", "gr": "verb", "en": ["to email"]}
{"mi": "kari", "gr": "verb", "en": ["to dig", "to cleave", "to wound"]}
{"mi": "tanu", "gr": "verb", "en": ["to plant (trees, seeds etc into the ground)", "to bury", "to smother with something"]}
{"mi": "kapi", "gr": "verb", "en": ["to close", "to cover, to shut", "to occupy a surface or space"]}
{"mi": "reti", "gr": "verb", "en": ["to slide", "to skate", "to surf"]}
{"mi": "kume", "gr": "verb", "en": ["to pull", "to drag", "to haul i.e. to move something heavy behind by pulling on a surface"]}
{"mi": "huke", "gr": "verb", "en": ["to uncover (of earth ovens)", "to unearth, to dig up, to excavate", "to gut or disembowel fish etc."]}
{"mi": "rewa", "gr": "verb", "en": ["to get under way, to depart, to set off", "to melt, to dissolve", "to float"]}
{"mi": "pōpō", "gr": "verb", "en": ["to knead", "to stir", "to pat, to stroke gently with the hand"]}
{"mi": "kapekape", "gr": "verb", "en": ["to stir-fry"]}
{"mi": "hangarau", "gr": "verb", "en": ["to fool, to deceive"]}
{"mi": "pakari", "gr": "verb", "en": ["to mature, to ripen"]}
{"mi": "rārangi", "gr": "verb", "en": ["list, arrange, itemise", "line up"]}
{"mi": "tārere", "gr": "verb", "en": ["to swing, to ride on a swing"]}
{"mi": "mahuru", "gr": "verb", "en": ["settled; calmed; soothed"]}
{"mi": "huahua", "gr": "verb", "en": ["to boil water", "especially in a rudimentary way by dropping hot stones onto the water container, before the advent of introduced metal cookery"]}
{"mi": "herehere", "gr": "verb", "en": ["to tie up (a number of times), bind, tie, shackle, hobble."]}
{"mi": "meme", "gr": "verb", "en": ["to murmur", "to mutter, to grumble"]}
{"mi": "hono", "gr": "verb", "en": ["add", "join"]}
{"mi": "topa", "gr": "verb", "en": ["to soar, to fly high", "to swoop, to dart, to dive (of a flying bird)"]}
{"mi": "piti", "gr": "verb", "en": ["to cling, to attach", "to join or pair together"]}
{"mi": "komo", "gr": "verb", "en": ["to plug, to thrust", "to insert"]}
{"mi": "raku", "gr": "verb", "en": ["to scratch", "to strum"]}
{"mi": "mānu", "gr": "verb", "en": ["be floating, launch, afloat", "be flooded, overflow"]}
{"mi": "māhī", "gr": "verb", "en": ["to ferment", "to putrefy"]}
{"mi": "wharau", "gr": "verb", "en": ["to travel (particularly by sea)"]}
{"mi": "ārohirohi", "gr": "verb", "en": ["to hover, quiver or shimmer", "to turn round and round; to feel giddiness."]}
{"mi": "hakirara", "gr": "verb", "en": ["to annoy, insult"]}
{"mi": "hanihani", "gr": "verb", "en": ["to disparage, speak ill of"]}
{"mi": "aniani", "gr": "verb", "en": ["to disparage, to belittle"]}
{"mi": "ātaahua", "gr": "verb", "en": ["to be beautiful, pretty, good-looking, gorgeous, lovely", "to be handsome, good-looking, gorgeous", "to be pleasant"]}
{"mi": "keakea", "gr": "verb", "en": ["to quack (as a duck)"]}
{"mi": "kokomo", "gr": "verb", "en": ["to wear, to put on something"]}
{"mi": "tāhono", "gr": "verb", "en": ["to connect"]}
{"mi": "utuutu", "gr": "verb", "en": ["to fill a container (with liquid) a number of times"]}
{"mi": "awhitu", "gr": "verb", "en": ["to feel hurt"]}
{"mi": "hākure", "gr": "verb", "en": ["search for lice"]}
{"mi": "haunga", "gr": "verb", "en": ["to stink, to reek"]}
{"mi": "pōwhiri", "gr": "verb", "en": ["to invite", "to beckon, to welcome"]}
{"mi": "hākaro", "gr": "verb", "en": ["to hollow out"]}
{"mi": "hākuku", "gr": "verb", "en": ["to scrape (especially of Phormium leaves like harakeke prior to weaving)"]}
{"mi": "pūkākā", "gr": "verb", "en": ["to be hot, eager"]}
{"mi": "pātiki", "gr": "verb", "en": ["to be flat, to be level"]}
{"mi": "tarawhiti", "gr": "verb", "en": ["to encircle"]}
{"mi": "kōripo", "gr": "verb", "en": ["to swirl, to eddy"]}
{"mi": "tākuta", "gr": "verb", "en": ["to practise medicine"]}
{"mi": "whakaruru", "gr": "verb", "en": ["to shelter, protect"]}
{"mi": "wawata", "gr": "verb", "en": ["to desire earnestly, long for, yearn for, daydream"]}
{"mi": "hītako", "gr": "verb", "en": ["to yawn"]}
{"mi": "tiritiri", "gr": "verb", "en": ["to toss about", "to split, to share", "to scatter, to shimmer (of light)", "to disturb"]}
{"mi": "whakaata", "gr": "verb", "en": ["to reflect", "to exhibit, display", "to simulate", "to act, pretend"]}
{"mi": "whakapohane", "gr": "verb", "en": ["to moon at someone"]}
{"mi": "whakarongo", "gr": "verb", "en": ["to hear, to listen", "to taste", "to obey"]}
{"mi": "hake", "gr": "verb", "en": ["to be hunched, crooked, bent"]}
{"mi": "hemo", "gr": "verb", "en": ["to die"]}
{"mi": "tomo", "gr": "verb", "en": ["to enter"]}
{"mi": "oma", "gr": "verb", "en": ["run, race, flee, escape, move quickly, run away"]}
{"mi": "hiki", "gr": "verb", "en": ["to carry (in the arms)"]}
{"mi": "hamu", "gr": "verb", "en": ["glean"]}
{"mi": "tunu", "gr": "verb", "en": ["to broil, roast, bake, cook"]}
{"mi": "ota", "gr": "verb", "en": ["to eat raw"]}
{"mi": "paho", "gr": "verb", "en": ["to be aloft, to float, to soar"]}
{"mi": "natu", "gr": "verb", "en": ["to stir, to mix"]}
{"mi": "ī", "gr": "verb", "en": ["to ferment, to sour, to spoil"]}
{"mi": "waku", "gr": "verb", "en": ["to scrape"]}
{"mi": "rīti", "gr": "verb", "en": ["read"]}
{"mi": "oroi", "gr": "verb", "en": ["to hone, sharpen"]}
{"mi": "ārahi", "gr": "verb", "en": ["to lead", "to escort", "to herald (as the appearance of a particular star signals the beginning of a particular month)"]}
{"mi": "amio", "gr": "verb", "en": ["to wander"]}
{"mi": "māhū", "gr": "verb", "en": ["to be gentle"]}
{"mi": "moī", "gr": "verb", "en": ["to ferment"]}
{"mi": "riaki", "gr": "verb", "en": ["to lift up or raise, to elevate", "to stick or stand out", "to pop out or bulge (of veins)"]}
{"mi": "takē", "gr": "verb", "en": ["to be absent"]}
{"mi": "whatutoto", "gr": "verb", "en": ["to be advanced", "to mature"]}
{"mi": "āwhiowhio", "gr": "verb", "en": ["to make sth swung around in circles, to whirl sth"]}
{"mi": "tokotoko", "gr": "verb", "en": ["to prop up", "to walk with a cane or crutch, to crutch"]}
{"mi": "haukaha", "gr": "verb", "en": ["reinforce, bolster", "amend"]}
{"mi": "hauraro", "gr": "verb", "en": ["to hang down", "to surrender"]}
{"mi": "moehewa", "gr": "verb", "en": ["to dream", "to delude oneself"]}
{"mi": "pūreirei", "gr": "verb", "en": ["to be patchy, to be scattered"]}
{"mi": "kōkōwai", "gr": "verb", "en": ["dark red, crimson", "auburn, reddish-brown"]}
{"mi": "tauraki", "gr": "verb", "en": ["to dry (by exposure to the sun), to dehydrate", "dried, dehydrated"]}
{"mi": "whakatōpū", "gr": "verb", "en": ["to amalgamate, consolidate, assemble (in a group)"]}
{"mi": "kaniawhea", "gr": "verb", "en": ["to feel remorseful"]}
{"mi": "nguru", "gr": "verb", "en": ["to rumble", "to grunt"]}
{"mi": "hārau", "gr": "verb", "en": ["to win", "to fumble; to grasp"]}
{"mi": "whāki", "gr": "verb", "en": ["to reveal, to disclose", "to admit, confess"]}
{"mi": "whakahirahira", "gr": "verb", "en": ["to extol"]}
{"mi": "rakuraku", "gr": "verb", "en": ["to scratch", "to strum"]}
{"mi": "moemoeā", "gr": "verb", "en": ["to dream, to experience a vision"]}
{"mi": "pakanga", "gr": "verb", "en": ["to fight, to battle"]}
{"mi": "whawhai", "gr": "verb", "en": ["fight"]}
{"mi": "pūmanawa", "gr": "verb", "en": ["to draw a long breath", "talented, gifted"]}
{"mi": "haramai", "gr": "verb", "en": ["come"]}
{"mi": "haumākū", "gr": "verb", "en": ["get wet"]}
{"mi": "hemokai", "gr": "verb", "en": ["starve"]}
{"mi": "uwhiuwhi", "gr": "verb", "en": ["to cover", "to sprinkle, to spray, to splatter", "to shower"]}
{"mi": "tiketike", "gr": "verb", "en": ["to be high, to be lofty", "to be important"]}
{"mi": "retihuka", "gr": "verb", "en": ["to ski"]}
{"mi": "rangahau", "gr": "verb", "en": ["To seek, search out, pursue", "To research, investigate"]}
{"mi": "ketekete", "gr": "verb", "en": ["to chirp, chatter, cackle", "to be annoyed"]}
{"mi": "takirua", "gr": "verb", "en": ["to double up"]}
{"mi": "whakapapa", "gr": "verb", "en": ["To lie or lay flat.", "To lay low or to strike down.", "To lay one upon another, to layer.", "To recite in order (genealogies, legends, etc.)"]}
{"mi": "parai", "gr": "verb", "en": ["to fry"]}
{"mi": "ruaki", "gr": "verb", "en": ["to vomit"]}
{"mi": "makere", "gr": "verb", "en": ["to fall, to descend", "to dispose", "to drop out of an event (such as school)"]}
{"mi": "auheke", "gr": "verb", "en": ["to surrender, to cave", "to surf", "to climb down"]}
{"mi": "tōkai", "gr": "verb", "en": ["to copulate"]}
{"mi": "tapahi", "gr": "verb", "en": ["to cut, to chop", "to reap, to harvest (of crops like wheat)", "to amputate limbs"]}
{"mi": "tārua", "gr": "verb", "en": ["to double something, to copy, to duplicate"]}
{"mi": "tinei", "gr": "verb", "en": ["to extinguish, to put out (of a fire, light)"]}
{"mi": "wātea", "gr": "verb", "en": ["to be free, unoccupied, vacant, open, blank, available, clear, unencumbered."]}
{"mi": "tīaho", "gr": "verb", "en": ["to shine, radiate"]}
{"mi": "hūngoingoi", "gr": "verb", "en": ["to tremble"]}
{"mi": "tukituki", "gr": "verb", "en": ["to batter, to pound, to pulverize, to ram", "to demolish, to deconstruct"]}
{"mi": "purupuru", "gr": "verb", "en": ["to stuff, to fill in", "to suppress"]}
{"mi": "angiangi", "gr": "verb", "en": ["to be thin, fine"]}
{"mi": "hukapapa", "gr": "verb", "en": ["to have a frost"]}
{"mi": "makimaki", "gr": "verb", "en": ["afflict with an illness"]}
{"mi": "kumukumu", "gr": "verb", "en": ["to be uncertain"]}
{"mi": "hakahaka", "gr": "verb", "en": ["rant, rave"]}
{"mi": "mātakitaki", "gr": "verb", "en": ["watch, gaze, inspect, examine, observe"]}
{"mi": "whārangi", "gr": "verb", "en": ["to spread out, spread flat"]}
{"mi": "hangarua", "gr": "verb", "en": ["To recycle"]}
{"mi": "hutihuti", "gr": "verb", "en": ["to pull out, hoist, haul up, pull up", "to pluck"]}
{"mi": "komiti", "gr": "verb", "en": ["to converge (of waters like rivers)", "to join, to merge, to mingle"]}
{"mi": "onioni", "gr": "verb", "en": ["to thrust or twerk one's hips in a sexually suggestive way", "to make love, to copulate, to bed someone"]}
{"mi": "hāmama", "gr": "verb", "en": ["to shout, to yell", "to gape, to be open wide"]}
{"mi": "hangahanga", "gr": "verb", "en": ["to work on, to fashion"]}
{"mi": "rehurehu", "gr": "verb", "en": ["to dim, to set"]}
{"mi": "kutikuti", "gr": "verb", "en": ["To cut with scissors etc"]}
{"mi": "kōuraura", "gr": "verb", "en": ["to be golden brown"]}
{"mi": "tangitangi", "gr": "verb", "en": ["to cry", "to mourn", "to make a sound"]}
{"mi": "hanahana", "gr": "verb", "en": ["shine"]}
{"mi": "karikari", "gr": "verb", "en": ["to strip off (of bark etc.)"]}
{"mi": "toretore", "gr": "verb", "en": ["to cut or split into strips, to shred"]}
{"mi": "tāmahana", "gr": "verb", "en": ["to warm up, to reheat, to recook"]}
{"mi": "whakatārewa", "gr": "verb", "en": ["to suspend, to dangle", "to defer, to postpone, to adjourn"]}
{"mi": "whakatārewa", "gr": "verb", "en": ["hanging, suspension"]}
{"mi": "whakaira", "gr": "verb", "en": ["glisten, glitter"]}
{"mi": "whakaira", "gr": "verb", "en": ["conceive, become pregnant"]}
{"mi": "takitoru", "gr": "verb", "en": ["to triple"]}
{"mi": "tuitui", "gr": "verb", "en": ["to sew"]}
{"mi": "pārara", "gr": "verb", "en": ["to bask under the sun, to sunbathe"]}
{"mi": "aurere", "gr": "verb", "en": ["moan, groan"]}
{"mi": "hārewa", "gr": "verb", "en": ["to take off (of an aircraft)"]}
{"mi": "papahū", "gr": "verb", "en": ["to ignite, flare up, burst into flame"]}
{"mi": "hūtuki", "gr": "verb", "en": ["to bump"]}
{"mi": "tūhura", "gr": "verb", "en": ["investigate, disclose, discover"]}
{"mi": "koekoe", "gr": "verb", "en": ["to squeak, scream, squawk or cry"]}
{"mi": "hahana", "gr": "verb", "en": ["glow, gleam, radiate"]}
{"mi": "hahani", "gr": "verb", "en": ["disparage"]}
{"mi": "hakiri", "gr": "verb", "en": ["hear"]}
{"mi": "hamumu", "gr": "verb", "en": ["speak softly"]}
{"mi": "hanake", "gr": "verb", "en": ["grow"]}
{"mi": "hanatu", "gr": "verb", "en": ["go forwards, go away"]}
{"mi": "hanumi", "gr": "verb", "en": ["merge; be swallowed up"]}
{"mi": "hārapa", "gr": "verb", "en": ["lead the way"]}
{"mi": "harirū", "gr": "verb", "en": ["shake hands"]}
{"mi": "ruruku", "gr": "verb", "en": ["to wrap"]}
{"mi": "aneane", "gr": "verb", "en": ["to be sharp"]}
{"mi": "kauhoe", "gr": "verb", "en": ["to swim"]}
{"mi": "konatu", "gr": "verb", "en": ["to stir, to mix, to blend"]}
{"mi": "hāmeme", "gr": "verb", "en": ["to mutter, to grumble"]}
{"mi": "pākati", "gr": "verb", "en": ["to block, obstruct"]}
{"mi": "toiere", "gr": "verb", "en": ["to sing"]}
{"mi": "kuku", "gr": "verb", "en": ["to grate, to scrape – usually part of compound verbs, otherwise an alternative form of kukū"]}
{"mi": "pāhekeheke", "gr": "verb", "en": ["slippery", "unstable, uncertain", "striped"]}
{"mi": "tangiweto", "gr": "verb", "en": ["to fret", "to cry"]}
{"mi": "haukoti", "gr": "verb", "en": ["intercept", "abort"]}
{"mi": "whakapako", "gr": "verb", "en": ["to banish, to exile"]}
{"mi": "whakarākei", "gr": "verb", "en": ["garnish, embellish", "decorate, adorn"]}
{"mi": "parakuihi", "gr": "verb", "en": ["to have breakfast"]}
{"mi": "whakaauau", "gr": "verb", "en": ["to smoke"]}
{"mi": "whakaauau", "gr": "verb", "en": ["to modulate"]}
{"mi": "hekerangi", "gr": "verb", "en": ["to parachute"]}
{"mi": "kihirua", "gr": "verb", "en": ["to change one's mind"]}
{"mi": "takiuru", "gr": "verb", "en": ["to log in"]}
{"mi": "anganui", "gr": "verb", "en": ["to face towards"]}
{"mi": "kumekume", "gr": "verb", "en": ["to pull and push repeatedly (of an accordion etc)", "to draw into", "to attract"]}
{"mi": "hākinakina", "gr": "verb", "en": ["to play sport", "to enjoy oneself"]}
{"mi": "māharahara", "gr": "verb", "en": ["to think about frequently", "to be preoccupied, to worry"]}
{"mi": "whakataukī", "gr": "verb", "en": ["to say a proverb"]}
{"mi": "whakananu", "gr": "verb", "en": ["to contaminate", "to confuse, to make something incoherent or unintelligible", "to jumble", "to mix"]}
{"mi": "mōiriiri", "gr": "verb", "en": ["to be widespread", "to be notorious, infamous"]}
{"mi": "whiriwhiri", "gr": "verb", "en": ["to negotiate"]}
{"mi": "whiriwhiri", "gr": "verb", "en": ["to weave, to plait"]}
{"mi": "kangakanga", "gr": "verb", "en": ["to curse, to swear"]}
{"mi": "tāuwhiuwhi", "gr": "verb", "en": ["to sprinkle, to shower"]}
{"mi": "kakakaka", "gr": "verb", "en": ["to stutter, stammer"]}
{"mi": "wakuwaku", "gr": "verb", "en": ["to scrape"]}
{"mi": "humuhumu", "gr": "verb", "en": ["to be amputated; to be ripped apart"]}
{"mi": "whakanau", "gr": "verb", "en": ["to decline, refuse"]}
{"mi": "tūmanako", "gr": "verb", "en": ["to expect, to hope"]}
{"mi": "wahawaha", "gr": "verb", "en": ["to carry on one's back"]}
{"mi": "tauwhere", "gr": "verb", "en": ["to bind"]}
{"mi": "penapena", "gr": "verb", "en": ["to save up (accumulate money for a specific purpose)"]}
{"mi": "haereere", "gr": "verb", "en": ["stroll about"]}
{"mi": "nekeneke", "gr": "verb", "en": ["to move gradually, to edge, to manoeuvre"]}
{"mi": "whakatote", "gr": "verb", "en": ["to salt", "to cure (preserve food by salting)", "to brine"]}
{"mi": "āwangawanga", "gr": "verb", "en": ["to be distressed, to worry"]}
{"mi": "whakamahara", "gr": "verb", "en": ["to remind", "to commemorate"]}
{"mi": "whakahohe", "gr": "verb", "en": ["to activate (to make something active)", "to enable (to activate a function of an electronic or mechanical device)"]}
{"mi": "whakaraka", "gr": "verb", "en": ["to walk", "to step out"]}
{"mi": "whakauwhi", "gr": "verb", "en": ["to cover", "to host, to entertain"]}
{"mi": "whakawahi", "gr": "verb", "en": ["to anoint, crown", "to ordain"]}
{"mi": "whakaririka", "gr": "verb", "en": ["to ignore"]}
{"mi": "whakawahine", "gr": "verb", "en": ["to become a woman"]}
{"mi": "whakangākau", "gr": "verb", "en": ["to show affection for, to take to heart"]}
{"mi": "kō", "gr": "verb", "en": ["to dig dirt esp. with the digging stick", "to stab, to thrust, alternative form of kōkō", "(of the lips) to pout out of displeasure"]}
{"mi": "kōnatunatu", "gr": "verb", "en": ["to stir up, to agitate, to disturb", "to unsettle, to unnerve", "to disconcert"]}
{"mi": "hāparangi", "gr": "verb", "en": ["to shout, scream, bawl"]}
{"mi": "whakapāho", "gr": "verb", "en": ["to air, broadcast or transmit electronic signals or waves"]}
{"mi": "ringakore", "gr": "verb", "en": ["unarmed"]}
{"mi": "whakatewhatewha", "gr": "verb", "en": ["to investigate, to look into", "to explore, to examine"]}
{"mi": "takatakahi", "gr": "verb", "en": ["to trample", "to disobey"]}
{"mi": "māngoingoi", "gr": "verb", "en": ["surfcasting", "to fish with a line from the shore"]}
{"mi": "whakatangi", "gr": "verb", "en": ["to make something or someone cry", "to play a musical instrument"]}
{"mi": "kārohirohi", "gr": "verb", "en": ["to shimmer (of light or heat waves)"]}
{"mi": "māhuruhuru", "gr": "verb", "en": ["placid, unruffled"]}
{"mi": "kōtetetete", "gr": "verb", "en": ["To chatter, prattle."]}
{"mi": "taupatupatu", "gr": "verb", "en": ["to beat or hit one another", "to compete or vie against one another for something", "to debate"]}
{"mi": "whakamaheni", "gr": "verb", "en": ["to polish, to burnish"]}
{"mi": "taumarumaru", "gr": "verb", "en": ["to overshadow"]}
{"mi": "whakapiriti", "gr": "verb", "en": ["to ordain as a priest"]}
{"mi": "tipu", "gr": "verb", "en": ["alternative form of tupu (“to grow”)"]}
{"mi": "hī ika", "gr": "verb", "en": ["to fish with a hook and line"]}
{"mi": "taurumarumaki", "gr": "verb", "en": ["to duck someone else into the water"]}
{"mi": "whakawhiti", "gr": "verb", "en": ["causative of whiti (“shine”)"]}
{"mi": "haere rā", "gr": "verb", "en": ["go, depart"]}
{"mi": "haere mai", "gr": "verb", "en": ["come"]}
{"mi": "kainga", "gr": "verb", "en": ["To be consumed; passive form of kai"]}
{"mi": "whakataurekareka", "gr": "verb", "en": ["To treat with contempt."]}
{"mi": "wehe atu", "gr": "verb", "en": ["to depart, to leave"]}
{"mi": "haere atu", "gr": "verb", "en": ["leave, go away, farewell"]}
{"mi": "tino mate nui ki", "gr": "verb", "en": ["to have a great desire for"]}
{"mi": "whakatōpū kongakonga", "gr": "verb", "en": ["to defragment"]}
`;var ks=`{"mi": "ngā", "gr": "adj", "en": ["satisfied"]}
{"mi": "kore", "gr": "adj", "en": ["without (not having)"]}
{"mi": "rawa", "gr": "adj", "en": ["many, numerous"]}
{"mi": "tino", "gr": "adj", "en": ["main, principal", "most, more (intensifier)"]}
{"mi": "noa", "gr": "adj", "en": ["common, ordinary"]}
{"mi": "nui", "gr": "adj", "en": ["big"]}
{"mi": "mea", "gr": "adj", "en": ["red, reddish"]}
{"mi": "rongo", "gr": "adj", "en": ["perceivable, physical"]}
{"mi": "mōhio", "gr": "adj", "en": ["knowledgable, intelligent, clever, bright", "wise", "skillful", "on one's guard, vigilant", "suspicious"]}
{"mi": "pai", "gr": "adj", "en": ["good", "excellent", "suitable", "nice", "pleasant"]}
{"mi": "hapū", "gr": "adj", "en": ["pregnant"]}
{"mi": "kura", "gr": "adj", "en": ["red"]}
{"mi": "kurī", "gr": "adj", "en": ["without purpose, unwarranted, pointless"]}
{"mi": "mata", "gr": "adj", "en": ["raw (uncooked)"]}
{"mi": "kino", "gr": "adj", "en": ["bad", "gory"]}
{"mi": "roa", "gr": "adj", "en": ["long", "tall", "slow"]}
{"mi": "moe", "gr": "adj", "en": ["dormant"]}
{"mi": "mataku", "gr": "adj", "en": ["afraid"]}
{"mi": "hōu", "gr": "adj", "en": ["new (recently made or created)"]}
{"mi": "hou", "gr": "adj", "en": ["alternative form of hōu (“new”)"]}
{"mi": "rongonui", "gr": "adj", "en": ["famous; well-known; renowned"]}
{"mi": "māori", "gr": "adj", "en": ["normal, usual, natural, common, ordinary", "native, indigenous, fresh (of water), belonging to Aotearoa/New Zealand, clear, intelligible", "freely, without restraint, without ceremony, without object, unannounced"]}
{"mi": "rangatira", "gr": "adj", "en": ["chiefly", "highborn", "high-ranking"]}
{"mi": "matua", "gr": "adj", "en": ["adult, grown up", "main, chief, important"]}
{"mi": "pūtea", "gr": "adj", "en": ["financial"]}
{"mi": "tua", "gr": "adj", "en": ["further, beyond"]}
{"mi": "hē", "gr": "adj", "en": ["wrong"]}
{"mi": "uta", "gr": "adj", "en": ["inland (from a coastal perspective)", "ashore"]}
{"mi": "hau", "gr": "adj", "en": ["famous"]}
{"mi": "poro", "gr": "adj", "en": ["broken off"]}
{"mi": "kopa", "gr": "adj", "en": ["bent, folded"]}
{"mi": "kopa", "gr": "adj", "en": ["crippled, lame"]}
{"mi": "whāngai", "gr": "adj", "en": ["foster, fostered, adopted, adoptive"]}
{"mi": "tupu", "gr": "adj", "en": ["real, own, ancestral"]}
{"mi": "maki", "gr": "adj", "en": ["sick, ill, invalid"]}
{"mi": "ruru", "gr": "adj", "en": ["sheltered"]}
{"mi": "tote", "gr": "adj", "en": ["salted"]}
{"mi": "piro", "gr": "adj", "en": ["rotten, putrid", "smelly", "disgusting", "offensive"]}
{"mi": "piro", "gr": "adj", "en": ["extinguished, put out", "defeated, beaten (in games)"]}
{"mi": "nanu", "gr": "adj", "en": ["mixed, jumbled", "confusing", "incoherent, inarticulate, unintelligible", "contaminated"]}
{"mi": "hira", "gr": "adj", "en": ["great", "significant, important", "widespread", "eminent", "of consequence", "notable", "momentous"]}
{"mi": "heu", "gr": "adj", "en": ["overgrown"]}
{"mi": "whano", "gr": "adj", "en": ["impending, imminent"]}
{"mi": "tapa", "gr": "adj", "en": ["split"]}
{"mi": "hiko", "gr": "adj", "en": ["random, irregular", "electric; electrical; electronic"]}
{"mi": "uaua", "gr": "adj", "en": ["strenuous; pertinacious"]}
{"mi": "hirahira", "gr": "adj", "en": ["great", "significant", "eminent", "of consequence"]}
{"mi": "atawhai", "gr": "adj", "en": ["kind, generous"]}
{"mi": "horo", "gr": "adj", "en": ["fast, quick, swift"]}
{"mi": "pōhēhē", "gr": "adj", "en": ["duped, mistaken, confused, misguided", "unsuspecting"]}
{"mi": "tore", "gr": "adj", "en": ["of keen or sharp eyesight"]}
{"mi": "pona", "gr": "adj", "en": ["portable, compact"]}
{"mi": "rū", "gr": "adj", "en": ["seismic, quake"]}
{"mi": "aitu", "gr": "adj", "en": ["sorrowful", "woeful"]}
{"mi": "toa", "gr": "adj", "en": ["brave, courageous."]}
{"mi": "rore", "gr": "adj", "en": ["deceitful"]}
{"mi": "kawa", "gr": "adj", "en": ["sour"]}
{"mi": "roki", "gr": "adj", "en": ["calm, tranquil", "settled"]}
{"mi": "nohopuku", "gr": "adj", "en": ["fasting"]}
{"mi": "nohopuku", "gr": "adj", "en": ["silent"]}
{"mi": "pī", "gr": "adj", "en": ["sodden"]}
{"mi": "ware", "gr": "adj", "en": ["distracted", "careless", "ignorant"]}
{"mi": "ware", "gr": "adj", "en": ["viscous, gummy"]}
{"mi": "whiwhi", "gr": "adj", "en": ["entangled, knotted", "complex, complicated"]}
{"mi": "auahi", "gr": "adj", "en": ["smoky"]}
{"mi": "mura", "gr": "adj", "en": ["brilliant or bright in colour"]}
{"mi": "pota", "gr": "adj", "en": ["broken, snapped, chipped into pieces", "few, little"]}
{"mi": "ioio", "gr": "adj", "en": ["stiff (of legs, muscles after activity)", "not friable", "obstinate"]}
{"mi": "kato", "gr": "adj", "en": ["flowing (of the tide)", "flooding (of the tide)"]}
{"mi": "rehu", "gr": "adj", "en": ["misty"]}
{"mi": "taurekareka", "gr": "adj", "en": ["dastardly", "shameful, dishonorable", "low", "base"]}
{"mi": "matira", "gr": "adj", "en": ["lookout"]}
{"mi": "kohu", "gr": "adj", "en": ["concave, warped, cupped", "bent"]}
{"mi": "rawe", "gr": "adj", "en": ["tight"]}
{"mi": "rawe", "gr": "adj", "en": ["suitable, appropriate, becoming", "clever", "excellent"]}
{"mi": "raki", "gr": "adj", "en": ["dry"]}
{"mi": "tapu", "gr": "adj", "en": ["holy, sacred, consecrated", "restricted, prohibited, forbidden"]}
{"mi": "hina", "gr": "adj", "en": ["pale", "grey-haired"]}
{"mi": "whero", "gr": "adj", "en": ["red", "bright, shining"]}
{"mi": "wehi", "gr": "adj", "en": ["terrific, awful"]}
{"mi": "whakamataku", "gr": "adj", "en": ["frightening"]}
{"mi": "mauī", "gr": "adj", "en": ["left (the west side of the body when one is facing north)"]}
{"mi": "mārama", "gr": "adj", "en": ["lucid, clear, bright", "transparent"]}
{"mi": "tepe", "gr": "adj", "en": ["clumpy, clotted (of milk)"]}
{"mi": "tini", "gr": "adj", "en": ["numerous, plenty"]}
{"mi": "kākāriki", "gr": "adj", "en": ["green"]}
{"mi": "ehu", "gr": "adj", "en": ["turbid"]}
{"mi": "whakamōtī", "gr": "adj", "en": ["destructive, devastating, damaging"]}
{"mi": "hāro", "gr": "adj", "en": ["smooth", "calm (of sea)", "low (of tides)"]}
{"mi": "rato", "gr": "adj", "en": ["spread, distributed", "available"]}
{"mi": "mangeo", "gr": "adj", "en": ["itchy, smarting", "acrid"]}
{"mi": "āwhio", "gr": "adj", "en": ["circuitous, roundabout"]}
{"mi": "one", "gr": "adj", "en": ["granular, granulated"]}
{"mi": "punua", "gr": "adj", "en": ["small."]}
{"mi": "kakā", "gr": "adj", "en": ["red or glowing hot, inflamed", "smarting", "spicy, pepper hot"]}
{"mi": "matomato", "gr": "adj", "en": ["lush, verdant"]}
{"mi": "aukati", "gr": "adj", "en": ["exclusive, discriminatory"]}
{"mi": "autaia", "gr": "adj", "en": ["wondrous, uncanny, extraordinary"]}
{"mi": "wahangū", "gr": "adj", "en": ["quiet, still", "mute, dumb (unable to speak)", "reserved"]}
{"mi": "reka", "gr": "adj", "en": ["nice, pleasant", "sweet (of taste)", "tasty"]}
{"mi": "riki", "gr": "adj", "en": ["small, little", "few"]}
{"mi": "kune", "gr": "adj", "en": ["plump, round"]}
{"mi": "āio", "gr": "adj", "en": ["calm", "peaceful"]}
{"mi": "marangai", "gr": "adj", "en": ["north", "north wind", "northerly"]}
{"mi": "oti", "gr": "adj", "en": ["finished", "completed"]}
{"mi": "ngāwhā", "gr": "adj", "en": ["geothermal"]}
{"mi": "maitai", "gr": "adj", "en": ["good, beautiful, agreeable"]}
{"mi": "maitai", "gr": "adj", "en": ["foreign"]}
{"mi": "huatau", "gr": "adj", "en": ["elegant, graceful"]}
{"mi": "pōhara", "gr": "adj", "en": ["poor; impoverished; destitute"]}
{"mi": "ukauka", "gr": "adj", "en": ["prolonged, preserved, long-lasting", "sluggish, slow"]}
{"mi": "koi", "gr": "adj", "en": ["sharp"]}
{"mi": "hako", "gr": "adj", "en": ["ugly"]}
{"mi": "piko", "gr": "adj", "en": ["bent, curved"]}
{"mi": "roha", "gr": "adj", "en": ["expansive"]}
{"mi": "mārie", "gr": "adj", "en": ["peaceful"]}
{"mi": "marino", "gr": "adj", "en": ["calm"]}
{"mi": "tahito", "gr": "adj", "en": ["ancient"]}
{"mi": "karetao", "gr": "adj", "en": ["robotic, tokenistic, insincere"]}
{"mi": "ani", "gr": "adj", "en": ["echoing, resounding (i.e. bounces sound waves)"]}
{"mi": "koru", "gr": "adj", "en": ["coiled, looped"]}
{"mi": "turi", "gr": "adj", "en": ["deaf (not hearing)"]}
{"mi": "namu", "gr": "adj", "en": ["blue-green, grue"]}
{"mi": "pono", "gr": "adj", "en": ["true, valid, honest, genuine, sincere"]}
{"mi": "pēpē", "gr": "adj", "en": ["mashed, pulped"]}
{"mi": "tupua", "gr": "adj", "en": ["strange"]}
{"mi": "aweke", "gr": "adj", "en": ["perverse", "trivial", "frivolous, idle"]}
{"mi": "kāoa", "gr": "adj", "en": ["coral"]}
{"mi": "puehu", "gr": "adj", "en": ["dusty", "mealy, floury"]}
{"mi": "kongakonga", "gr": "adj", "en": ["insignificant"]}
{"mi": "whānako", "gr": "adj", "en": ["thieving"]}
{"mi": "whaikaha", "gr": "adj", "en": ["having strength", "concentrated", "disabled"]}
{"mi": "motumotu", "gr": "adj", "en": ["separated", "discrete"]}
{"mi": "parauri", "gr": "adj", "en": ["dark (of skin colour)"]}
{"mi": "mōmona", "gr": "adj", "en": ["fatty", "fat, plump", "fertile, rich"]}
{"mi": "tāhuhu", "gr": "adj", "en": ["eldest", "chief"]}
{"mi": "māmā", "gr": "adj", "en": ["light, of little weight", "nimble, of low effort", "easy, simple, not difficult", "cheap, affordable (of price)"]}
{"mi": "anahe", "gr": "adj", "en": ["alone, only"]}
{"mi": "tōrangapū", "gr": "adj", "en": ["political"]}
{"mi": "makariri", "gr": "adj", "en": ["cold"]}
{"mi": "whakamā", "gr": "adj", "en": ["ashamed, shy, bashful, embarrassed"]}
{"mi": "waimarie", "gr": "adj", "en": ["lucky", "fortuitous"]}
{"mi": "taikoa", "gr": "adj", "en": ["Of or relating to the established Chinese New Zealand communities of New Zealand, especially their locally developed identity, history, culture, and heritage.", "Of or relating to longstanding Cantonese-descended New Zealand families."]}
{"mi": "renga", "gr": "adj", "en": ["yellow"]}
{"mi": "hauku", "gr": "adj", "en": ["damp"]}
{"mi": "peara", "gr": "adj", "en": ["pearly"]}
{"mi": "mākutu", "gr": "adj", "en": ["magical (relating to magic)", "supernatural (not of the usual)"]}
{"mi": "uraura", "gr": "adj", "en": ["reddened, flushed"]}
{"mi": "mamao", "gr": "adj", "en": ["far, distant, remote"]}
{"mi": "tea", "gr": "adj", "en": ["white", "light-coloured", "clear, transparent"]}
{"mi": "hape", "gr": "adj", "en": ["club-footed, having clubfoot i.e. a foot that twists inward", "deformed, crooked", "distorted, unrelated"]}
{"mi": "korukoru", "gr": "adj", "en": ["sagging, droopy (of skin)"]}
{"mi": "hangarau", "gr": "adj", "en": ["technological"]}
{"mi": "porotaka", "gr": "adj", "en": ["spherical"]}
{"mi": "pakari", "gr": "adj", "en": ["matured, ripe, aged", "solid, hard, firm"]}
{"mi": "konene", "gr": "adj", "en": ["wandering, nomadic"]}
{"mi": "mahaki", "gr": "adj", "en": ["sick, ill, invalid"]}
{"mi": "anuanu", "gr": "adj", "en": ["cold", "offensive, disgusting"]}
{"mi": "kaokao", "gr": "adj", "en": ["sideways"]}
{"mi": "rata", "gr": "adj", "en": ["tame", "quiet"]}
{"mi": "uka", "gr": "adj", "en": ["hard", "firm, solid"]}
{"mi": "mako", "gr": "adj", "en": ["to be peeled", "stripped off"]}
{"mi": "pohe", "gr": "adj", "en": ["blind", "stupid, dull"]}
{"mi": "ārohirohi", "gr": "adj", "en": ["shimmering, glistening"]}
{"mi": "hakirara", "gr": "adj", "en": ["sloppy"]}
{"mi": "piropiro", "gr": "adj", "en": ["putrid, stinking"]}
{"mi": "piropiro", "gr": "adj", "en": ["calm, still (of water)"]}
{"mi": "hanihani", "gr": "adj", "en": ["disparaging, derogatory, contemptuous, insulting, scornful"]}
{"mi": "kakara", "gr": "adj", "en": ["aromatic, fragrant, sweet-smelling"]}
{"mi": "hauhau", "gr": "adj", "en": ["windy"]}
{"mi": "hapori", "gr": "adj", "en": ["social"]}
{"mi": "tūhāhā", "gr": "adj", "en": ["unique, isolated"]}
{"mi": "heihei", "gr": "adj", "en": ["to be related to a chicken"]}
{"mi": "kororā", "gr": "adj", "en": ["bluish grey; blue-grey"]}
{"mi": "aronui", "gr": "adj", "en": ["suitable"]}
{"mi": "awhitu", "gr": "adj", "en": ["vigilant"]}
{"mi": "hiainu", "gr": "adj", "en": ["thirsty"]}
{"mi": "hākaro", "gr": "adj", "en": ["hollowed"]}
{"mi": "pūkākā", "gr": "adj", "en": ["volatile, fiery, hotheaded"]}
{"mi": "pūkaka", "gr": "adj", "en": ["direct (straight, constant, without interruption)"]}
{"mi": "whaiaro", "gr": "adj", "en": ["self-", "personal"]}
{"mi": "poke", "gr": "adj", "en": ["grimy"]}
{"mi": "mara", "gr": "adj", "en": ["preserved esp. by prolonged steeping under running water until softened"]}
{"mi": "uri", "gr": "adj", "en": ["dark, deep (of colour)"]}
{"mi": "hewa", "gr": "adj", "en": ["mistaken"]}
{"mi": "kehu", "gr": "adj", "en": ["reddish"]}
{"mi": "hauā", "gr": "adj", "en": ["disabled"]}
{"mi": "whatutoto", "gr": "adj", "en": ["advanced"]}
{"mi": "āwhiowhio", "gr": "adj", "en": ["swung or whirled around in circles", "circuitous, going around in circles"]}
{"mi": "pounamu", "gr": "adj", "en": ["dark green"]}
{"mi": "aumoana", "gr": "adj", "en": ["oceanic"]}
{"mi": "haukaha", "gr": "adj", "en": ["very windy"]}
{"mi": "ariari", "gr": "adj", "en": ["clear, visible", "gleaming", "undisturbed", "bare, stripped (of trees etc)"]}
{"mi": "āhuru", "gr": "adj", "en": ["snug, cozy, comfortable", "warm"]}
{"mi": "anipā", "gr": "adj", "en": ["anxious, uneasy", "solicitous"]}
{"mi": "āniwa", "gr": "adj", "en": ["bright", "reckless"]}
{"mi": "whakahirahira", "gr": "adj", "en": ["great", "magnificent", "wonderful", "inspiring"]}
{"mi": "mātanga", "gr": "adj", "en": ["sophisticated, experienced"]}
{"mi": "pikopiko", "gr": "adj", "en": ["winding, meandering, crooked", "tender, young", "unripe"]}
{"mi": "haumākū", "gr": "adj", "en": ["moist"]}
{"mi": "marutau", "gr": "adj", "en": ["safe"]}
{"mi": "haumaru", "gr": "adj", "en": ["safe"]}
{"mi": "mangu", "gr": "adj", "en": ["black"]}
{"mi": "roaka", "gr": "adj", "en": ["abundant"]}
{"mi": "pirau", "gr": "adj", "en": ["rotten"]}
{"mi": "urupū", "gr": "adj", "en": ["diligent"]}
{"mi": "anake", "gr": "adj", "en": ["alone, only"]}
{"mi": "hapui", "gr": "adj", "en": ["engaged to be married"]}
{"mi": "hūngoingoi", "gr": "adj", "en": ["wimpy, cowardly, spineless, faint-hearted, uncourageous", "weak, frail, slow"]}
{"mi": "tamahine", "gr": "adj", "en": ["girlish"]}
{"mi": "hakahaka", "gr": "adj", "en": ["low", "squat"]}
{"mi": "hākoakoa", "gr": "adj", "en": ["happy"]}
{"mi": "taimaha", "gr": "adj", "en": ["heavy", "expensive, costly, pricey", "harsh, severe, burdening", "unwell"]}
{"mi": "mahana", "gr": "adj", "en": ["warm (of temperature)", "cordial (of atmosphere)"]}
{"mi": "mūhore", "gr": "adj", "en": ["futile, pointless", "unproductive"]}
{"mi": "pupuru", "gr": "adj", "en": ["pulpy", "almost liquid/solid, curdled"]}
{"mi": "atamai", "gr": "adj", "en": ["nimble", "intelligent, smart, quickwitted, of sharp mind"]}
{"mi": "hēmanawa", "gr": "adj", "en": ["breathless; stressed"]}
{"mi": "hangahanga", "gr": "adj", "en": ["frivolous, trivial"]}
{"mi": "rehurehu", "gr": "adj", "en": ["obscure"]}
{"mi": "maramara", "gr": "adj", "en": ["miscellaneous"]}
{"mi": "harawene", "gr": "adj", "en": ["envious, jealous"]}
{"mi": "hemorere", "gr": "adj", "en": ["sudden"]}
{"mi": "hinahina", "gr": "adj", "en": ["grey-haired"]}
{"mi": "kikokiko", "gr": "adj", "en": ["malevolent, malicious"]}
{"mi": "harehare", "gr": "adj", "en": ["offensive, rude, affronting, objectionable"]}
{"mi": "pātata", "gr": "adj", "en": ["neighbouring"]}
{"mi": "taitoa", "gr": "adj", "en": ["manly"]}
{"mi": "hahake", "gr": "adj", "en": ["naked, unbecoming"]}
{"mi": "mākona", "gr": "adj", "en": ["satisfied, content"]}
{"mi": "peopeo", "gr": "adj", "en": ["slippery"]}
{"mi": "pākaha", "gr": "adj", "en": ["strict, severe"]}
{"mi": "hāhore", "gr": "adj", "en": ["bare, simple"]}
{"mi": "hakoko", "gr": "adj", "en": ["bent, concave"]}
{"mi": "hāpoko", "gr": "adj", "en": ["swampy, boggy"]}
{"mi": "heahea", "gr": "adj", "en": ["crazy, stupid, inane"]}
{"mi": "piapia", "gr": "adj", "en": ["viscid; glairy"]}
{"mi": "apiapi", "gr": "adj", "en": ["crowded together"]}
{"mi": "kaitangata", "gr": "adj", "en": ["cannibalistic", "man-eating"]}
{"mi": "kahurangi", "gr": "adj", "en": ["blue", "precious"]}
{"mi": "whakararo", "gr": "adj", "en": ["bottom; lower", "northern, northerly"]}
{"mi": "taikaha", "gr": "adj", "en": ["strict, severe", "violent"]}
{"mi": "ahuwhenua", "gr": "adj", "en": ["industrious, hard-working"]}
{"mi": "aniroro", "gr": "adj", "en": ["giddy, dizzy"]}
{"mi": "haratau", "gr": "adj", "en": ["suitable, fit"]}
{"mi": "hauangi", "gr": "adj", "en": ["cool, airy"]}
{"mi": "hauarea", "gr": "adj", "en": ["insignificant"]}
{"mi": "haututū", "gr": "adj", "en": ["insubordinate; naughty, noncompliant"]}
{"mi": "ngāwhāriki", "gr": "adj", "en": ["geothermal"]}
{"mi": "nihoniho", "gr": "adj", "en": ["toothed, serrated", "quarrelsome, cantankerous"]}
{"mi": "pongipongi", "gr": "adj", "en": ["dim, of low light"]}
{"mi": "mōrearea", "gr": "adj", "en": ["dangerous"]}
{"mi": "pakakina", "gr": "adj", "en": ["glowing"]}
{"mi": "hanganoa", "gr": "adj", "en": ["insignificant, inconsequential"]}
{"mi": "harapuku", "gr": "adj", "en": ["puzzled"]}
{"mi": "hātakēhi", "gr": "adj", "en": ["comical"]}
{"mi": "haurangi", "gr": "adj", "en": ["drunk"]}
{"mi": "muhumuhu", "gr": "adj", "en": ["discontented (experiencing discontent, dissatisfaction)"]}
{"mi": "potapota", "gr": "adj", "en": ["broken, fragmented"]}
{"mi": "whakaririka", "gr": "adj", "en": ["impassive"]}
{"mi": "rangimaarie", "gr": "adj", "en": ["peaceful, quiet, tranquil"]}
{"mi": "ārikarika", "gr": "adj", "en": ["restrained"]}
{"mi": "rangitahi", "gr": "adj", "en": ["momentary, ephemeral, transient, short-lived, brief"]}
{"mi": "puta noa", "gr": "adj", "en": ["unlimited"]}
{"mi": "Wīwī", "gr": "adj", "en": ["French (of, from or relating to France)"]}
{"mi": "hoou", "gr": "adj", "en": ["obsolete spelling of hōu"]}
{"mi": "kai a te kurī", "gr": "adj", "en": ["damn, vile"]}
{"mi": "Harare", "gr": "adj", "en": ["bleary-eyed"]}
{"mi": "kāore i te ngākau nui", "gr": "adj", "en": ["discontented"]}
`;var ws=`{"mi": "atu", "gr": "adv", "en": ["away"]}
{"mi": "mai", "gr": "adv", "en": ["hither", "to, from", "since"]}
{"mi": "hoki", "gr": "adv", "en": ["also; too."]}
{"mi": "tonu", "gr": "adv", "en": ["still, yet", "nonetheless, all the same", "very, exceedingly", "indeed, in fact", "on the contrary", "immediately, promptly", "quite, fairly", "almost, just about, virtually"]}
{"mi": "rawa", "gr": "adv", "en": ["very, really, too"]}
{"mi": "anō", "gr": "adv", "en": ["again"]}
{"mi": "tahi", "gr": "adv", "en": ["together, as one, in unison", "simultaneously", "altogether"]}
{"mi": "mutu", "gr": "adv", "en": ["only, exclusively, nothing more, that's it"]}
{"mi": "runga", "gr": "adv", "en": ["upwards, up"]}
{"mi": "mua", "gr": "adv", "en": ["front, forward", "to the future", "former, past, old"]}
{"mi": "muri", "gr": "adv", "en": ["behind, rear", "after", "afterwards, later"]}
{"mi": "tua", "gr": "adv", "en": ["this side, here"]}
{"mi": "taki", "gr": "adv", "en": ["one by one to completion, each and every"]}
{"mi": "āhua", "gr": "adv", "en": ["somewhat", "approximately"]}
{"mi": "auau", "gr": "adv", "en": ["frequently, again and again"]}
{"mi": "puku", "gr": "adv", "en": ["very"]}
{"mi": "puru", "gr": "adv", "en": ["absolutely, extremely, stuffed"]}
{"mi": "mauī", "gr": "adv", "en": ["on the left side"]}
{"mi": "āwhio", "gr": "adv", "en": ["around, round"]}
{"mi": "āta", "gr": "adv", "en": ["slowly, carefully"]}
{"mi": "rārā", "gr": "adv", "en": ["over there, there, yonder"]}
{"mi": "hakirara", "gr": "adv", "en": ["slovenly"]}
{"mi": "hemorere", "gr": "adv", "en": ["suddenly"]}
{"mi": "āianei", "gr": "adv", "en": ["today, soon, now"]}
{"mi": "whakararo", "gr": "adv", "en": ["downwards"]}
{"mi": "ākuanei", "gr": "adv", "en": ["presently, shortly, soon"]}
{"mi": "whakamauī", "gr": "adv", "en": ["towards the left"]}
{"mi": "ia tau", "gr": "adv", "en": ["As frequently as every year; yearly, annually.", "ia rā", "ia marama", "ia wiki"]}
{"mi": "ia rā", "gr": "adv", "en": ["As frequently as every day; daily."]}
{"mi": "ia wiki", "gr": "adv", "en": ["As frequently as every week; weekly.", "ia rā", "ia marama", "ia tau"]}
{"mi": "ia marama", "gr": "adv", "en": ["As frequently as every month; monthly."]}
`;var Zt={id:"nouns",label:"Nouns",file:"src/topics/mi-en-dic-nouns-by-frequency.jsonl"},xs={id:"verbs",label:"Verbs",file:"src/topics/mi-en-dic-verbs.jsonl"},_s={id:"adjectives",label:"Adjectives",file:"src/topics/mi-en-dic-adjectives.jsonl"},Ss={id:"adverbs",label:"Adverbs",file:"src/topics/mi-en-dic-adverbs.jsonl"},Ut=[Zt,xs,_s,Ss];function Gt(c){return typeof c=="object"?c.id:c}function xt(c){for(let t=0,i=ye(Ut),u=i.length;t<u;t++){let l=i[t];if(l.id==c)return l}return null}var Yt={};Yt[Zt.id]=vs;Yt[xs.id]=ys;Yt[_s.id]=ks;Yt[Ss.id]=ws;function $s(c){return Yt[c]}var aa=location.hostname=="localhost",ia={};function oa(c){return c.en.length?c.en[0]:""}function _t(c){let t=c.slice(0),i=t.length-1;for(;i>0;){let u=Math.floor(Math.random()*(i+1)),l=t[i];t[i]=t[u],t[u]=l,i--}return t}function Ts(c,t,i,u,l){u=_t(u);for(let p=0,f=ye(u),b=f.length;p<b;p++){let C=f[p];if(c.length>=l)break;t[C.mi]||i[oa(C)]||(t[C.mi]=!0,i[oa(C)]=!0,c.push(C))}}function ud(c){let t=[],i={};for(let u=0,l=ye(c.split(`
`)),p=l.length;u<p;u++){let b=l[u].trim();if(!b)continue;let C=JSON.parse(b),I={id:t.length,mi:C.mi,gr:C.gr,en:C.en||[]};t.push(I),i[I.gr]||(i[I.gr]=[]),i[I.gr].push(I)}return{words:t,groups:i}}function ei(c){let t=Gt(c);if(!ia[t]){let i=$s(t);ia[t]=i?ud(i):{words:[],groups:{}}}return ia[t]}function ni(c,t){return ei(c).words[t]}function ti(c){let t=[];for(let i=0,u=ye(c),l=u.length;i<l;i++){let p=u[i];t.push(p.id)}return t}function js(c,t){let i=ei(c).words.length,u=t.length,l=i?Math.round(u*100/i):0;return{count:u,total:i,percent:l}}function ua(c,t,i){let u=new Set(i||[]),l=[];for(let p=0,f=ye(ei(c).words),b=f.length;p<b;p++){let C=f[p];u.has(C.id)||l.push(C)}return l.slice(0,t)}function Qt(c,t,i=3){let u=ei(c),l=[],p={},f={};return p[t.mi]=!0,f[oa(t)]=!0,Ts(l,p,f,u.groups[t.gr]||[],i),l.length<i&&Ts(l,p,f,u.words,i),l}W();W();var ri=kh(Es(),1),Cs=Symbol.for("Dexie"),ii=globalThis[Cs]||(globalThis[Cs]=ri.default);if(ri.default.semVer!==ii.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${ri.default.semVer} and ${ii.semVer}`);var{liveQuery:Ip,mergeRanges:Op,rangesOverlap:Np,RangeSet:Dp,cmp:Fp,Entity:Mp,PropModification:Rp,replacePrefix:Kp,add:qp,remove:Bp,DexieYProvider:Lp}=ii;var As=ii;var Ps=new As("learn-maori");Ps.version(1).stores({progress:"key"});var ma=Ps.table("progress");function at(c){return"in-progress:"+Gt(c)}function Rn(c){return"learned:"+Gt(c)}async function wn(c){let t=await ma.get(c);return t&&t.ids?t.ids.slice(0):[]}async function Xt(c,t){return await ma.put({key:c,ids:t}),t}async function Is(){return await ma.clear(),!0}var ca="theme";function Os(c){try{return globalThis.localStorage.getItem(c)}catch{return null}}function Ns(c,t){try{return globalThis.localStorage.setItem(c,t)}catch{return null}}W();Mn(),cn();var sd=Symbol.for("#beforeReconcile"),ha=Symbol.for("##up"),oi=Symbol.for("#placeChild"),ld=Symbol.for("#afterVisit"),md=Symbol.for("#afterReconcile"),Ds=Symbol(),Fs=Symbol(),Ms=Symbol(),Rs=Symbol(),Ks=Symbol(),qs=Symbol();var ga=Symbol();var da=Symbol();var fa=Symbol(),Bs=Symbol(),Ls=Symbol(),zs=Symbol(),Hs=Symbol(),Vs=Symbol(),cd=Symbol(),ai=class ai extends We{[Se](t=null,i=!0,u=!0){var l;super[Se](...arguments),this.q=t&&(l=t.q)!==void 0?l:null,this.emitter=t&&(l=t.emitter)!==void 0?l:null}pickΞopt(t){if(!(this.q&&this.q.pick)&&this.q&&(this.q.pick=t,this.emitter))return this.emitter(t)}render(){var t=this,i,u,l,p,f,b=this._ns_||"",C,I,R,O,oe,X,ee,le,P,J,ue,me,Y;if(l=this,l[sd](),p=f=1,l[Ds]===1||(p=f=0,l[Ds]=1),i=u=null,this.q){C=I=1,(i=l[Fs])||(C=I=0,l[Fs]=i=z("div",null,`q-prompt ${b}`,null,null)),C||(i[ha]=l),R=this.q.prompt,R===i[Rs]&&C||(i[Ms]=i[oi](i[Rs]=R,384,i[Ms])),O=oe=1,(u=l[Ks])||(O=oe=0,l[Ks]=u=z("div",null,`word-list ${b}`,null,null)),O||(u[ha]=l),(X=u[qs])||(u[qs]=X=Ju(384,u)),ee=0,le=X.$;for(let ae=0,ce=ye(this.q.options),te=ce.length;ae<te;ae++){let Q=ce[ae];J=ue=1,(P=le[ee])||(J=ue=0,le[ee]=P=z("div",X,`options-btn ${b}`,null,null)),J||(P[ha]=X),me=this.q.pick&&Q==this.q.correct||void 0,me===P[ga]||(ue|=2,P[ga]=me),me=this.q.pick&&this.q.pick!=this.q.correct&&Q==this.q.pick||void 0,me===P[da]||(ue|=2,P[da]=me),me=this.q.pick&&Q!=this.q.correct&&Q!=this.q.pick||void 0,me===P[fa]||(ue|=2,P[fa]=me),Y=P[Bs]||(P[Bs]={$_:[function(ne,pe,ke){return t.pickΞopt(ke)},null]}),Y.$_[1]=Q,J||P.on$("click",Y,this),ue&2&&P.flag$(`options-btn ${b} `+(P[ga]?"right":"")+" "+(P[da]?"wrong":"")+" "+(P[fa]?"dim":""),null),me=Q,me===P[zs]&&J||(P[Ls]=P[oi](P[zs]=me,384,P[Ls])),ee++}X[ld](ee)}return l[Hs]=l[oi](i,0,l[Hs]),l[Vs]=l[oi](u,0,l[Vs]),l[md](f),l}};U(ai,cd,"mcq",2),yn("mcq",ai,{cssns:"dd_af",cssid:"dd-af"});var Ws=ai;W();Mn(),cn();var hd=Symbol.for("#beforeReconcile"),je=Symbol.for("#placeChild"),on=Symbol.for("##up"),Zs=Symbol.for("#afterVisit"),gd=Symbol.for("#afterReconcile"),Us=Symbol(),Gs=Symbol(),Ys=Symbol(),Qs=Symbol(),Xs=Symbol(),Js=Symbol(),el=Symbol(),nl=Symbol(),tl=Symbol(),rl=Symbol(),il=Symbol(),ol=Symbol(),al=Symbol(),ul=Symbol(),sl=Symbol(),ll=Symbol(),ml=Symbol(),cl=Symbol(),hl=Symbol(),gl=Symbol(),dl=Symbol(),fl=Symbol(),pl=Symbol(),bl=Symbol(),vl=Symbol(),yl=Symbol(),kl=Symbol(),wl=Symbol(),xl=Symbol(),_l=Symbol(),Sl=Symbol(),$l=Symbol(),Tl=Symbol(),jl=Symbol(),El=Symbol(),Cl=Symbol(),Al=Symbol(),Pl=5;function Jt(c){return c.en.length?c.en[0]:""}function dd(c){return c.gr.length?c.gr:""}var fd=Symbol(),ui=class ui extends We{[Se](t=null,i=!0,u=!0){var l;super[Se](...arguments),this.phase=t&&(l=t.phase)!==void 0?l:"loading",this.round=t&&(l=t.round)!==void 0?l:"maori-en",this.batch=t&&(l=t.batch)!==void 0?l:[],this.queue=t&&(l=t.queue)!==void 0?l:[],this.question=t&&(l=t.question)!==void 0?l:null,this.attempts=t&&(l=t.attempts)!==void 0?l:0,this.misses=t&&(l=t.misses)!==void 0?l:0,this.topic=t&&(l=t.topic)!==void 0?l:""}get topicΞlabel(){let t=xt(this.topic);return t?t.label:"Topic"}async mount(){return await this.setup()}async setup(){let t=await wn(at(this.topic)),i=await wn(Rn(this.topic)),u=t.length?t:ti(ua(this.topic,Pl,i));return this.batch=this.entriesΞfor(u),t.length||await Xt(at(this.topic),ti(this.batch)),this.phase="review",Ne()}entriesΞfor(t){let i=[];for(let u=0,l=ye(t),p=l.length;u<p;u++){let f=l[u],b=ni(this.topic,f);b&&i.push(b)}return i}startΞquiz(t){return this.queue=this.batch.slice(0),this.round=t,this.attempts=0,this.misses=0,this.phase="quiz",this.nextΞquestion()}nextΞquestion(){if(!this.queue.length){if(this.round=="maori-en")return this.startΞquiz("en-maori");this.completeΞbatch();return}let t=this.queue[0];if(this.round=="maori-en"){let i=[Jt(t)];for(let u=0,l=ye(Qt(this.topic,t,3)),p=l.length;u<p;u++){let f=l[u];i.push(Jt(f))}return this.question={entry:t,prompt:"What does “"+t.mi+"” ("+t.gr+") mean?",options:_t(i),correct:Jt(t),pick:null,wasΞright:!1}}else{let i=[t.mi];for(let u=0,l=ye(Qt(this.topic,t,3)),p=l.length;u<p;u++){let f=l[u];i.push(f.mi)}return this.question={entry:t,prompt:"What does “"+Jt(t)+"” ("+dd(t)+") mean?",options:_t(i),correct:t.mi,pick:null,wasΞright:!1}}}answerΞpicked(t){let i=this.question;if(!i)return;this.attempts++;let u=t==i.correct;return u||(this.misses++,this.queue.push(i.entry)),i.wasΞright=u,i.pick=t}advance(){if(this.phase!="quiz")return;let t=this.question;if(t&&t.pick)return this.queue.shift(),t.pick=null,this.nextΞquestion()}async completeΞbatch(){this.phase="review";let t=await wn(Rn(this.topic));for(let u=0,l=ye(this.batch),p=l.length;u<p;u++){let f=l[u];t.indexOf(f.id)==-1&&t.push(f.id)}await Xt(Rn(this.topic),t),await Xt(at(this.topic),[]);let i=ti(ua(this.topic,Pl,t));return await Xt(at(this.topic),i),this.batch=this.entriesΞfor(i),Ne()}render(){var t=this,i,u,l,p,f,b,C,I,R=this._ns_||"",O,oe,X,ee,le,P,J,ue,me,Y,ae,ce,te,Q,ne,pe,ke,Be,Re,we,$e,Ee,be,Ce,Xe,Je,xn,st,Ke,Ze,de,un,en,Le,He,qn,xe,_n,gn,ze,lt,Bn,L,$t;if(b=this,b[hd](),C=I=1,b[Us]===1||(C=I=0,b[Us]=1),C||(O=z("div",b,`page-head ${R}`,null,null)),C||(oe=z("button",O,`back ${R}`,"Back",null)),C||oe.on$("click",{$_:[function(nn,sn){return t.emit("close")}]},this),(X=b[Gs])||(b[Gs]=X=z("h1",O,`${R}`,null,null)),ee=this.topicΞlabel,ee===b[Qs]&&C||(b[Ys]=X[je](b[Qs]=ee,128,b[Ys])),C||X[je](" · Learn words"),u=l=p=f=null,this.phase=="loading")le=P=1,(u=b[Xs])||(le=P=0,b[Xs]=u=z("div",null,`tracker ${R}`,"Loading progress…",null)),le||(u[on]=b);else if(this.phase=="review")if(this.batch.length){J=ue=1,(u=b[Js])||(J=ue=0,b[Js]=u=z("h2",null,`${R}`,null,null)),J||(u[on]=b),J||u[je]("New words ("),me=this.batch.length,me===u[nl]&&J||(u[el]=u[je](u[nl]=me,0,u[el])),J||u[je](")"),Y=ae=1,(l=b[tl])||(Y=ae=0,b[tl]=l=z("div",null,`word-list ${R}`,null,null)),Y||(l[on]=b),(ce=l[rl])||(l[rl]=ce=Ur(384,l)),te=0,Q=ce.$;for(let nn=0,sn=ye(this.batch),se=sn.length;nn<se;nn++){let ln=sn[nn];pe=Be=1,(ne=Q.get(ke=ln.id))||(pe=Be=0,Q.set(ke,ne=z("div",null,`word ${R}`,null,null))),pe||(ne[on]=ce),(Re=ne[il])||(ne[il]=Re=z("span",ne,`mi ${R}`,null,null)),we=ln.mi,we===ne[al]&&pe||(ne[ol]=Re[je](ne[al]=we,384,ne[ol])),pe||($e=z("span",ne,`gr ${R}`,null,null)),(Ee=ne[ul])||(ne[ul]=Ee=z("i",$e,`${R}`,null,null)),be=ln.gr,be===ne[ll]&&pe||(ne[sl]=Ee[je](ne[ll]=be,384,ne[sl])),(Ce=ne[ml])||(ne[ml]=Ce=z("div",ne,`en ${R}`,null,null)),De.context=ne[hl]||(ne[hl]={_:Ce}),Xe=Jt(ln),De.context=null,Xe===ne[gl]&&pe||(ne[cl]=Ce[je](ne[gl]=Xe,384,ne[cl])),ce.push(ne,te++,ke)}ce[Zs](te),Je=xn=1,(p=b[dl])||(Je=xn=0,b[dl]=p=z("div",null,`row ${R}`,null,null)),Je||(p[on]=b),Je||(st=z("button",p,`next-btn ${R}`,"Test me",null)),Je||st.on$("click",{$_:[function(nn,sn){return t.startΞquiz("maori-en")}]},this)}else Ke=Ze=1,(u=b[fl])||(Ke=Ze=0,b[fl]=u=z("div",null,`tracker ${R}`,"Kua oti! You have learned every word in this topic.",null)),Ke||(u[on]=b);else this.phase=="quiz"&&(de=un=1,(u=b[pl])||(de=un=0,b[pl]=u=z("div",null,`tracker ${R}`,null,null)),de||(u[on]=b),i=null,this.round=="maori-en"?i="Word → English":i="English → Word",u[bl]=u[je](i,0,u[bl]),de||u[je](" · "),en=this.queue.length,en===u[yl]&&de||(u[vl]=u[je](u[yl]=en,0,u[vl])),de||u[je](" to go · "),en=this.misses,en===u[wl]&&de||(u[kl]=u[je](u[wl]=en,0,u[kl])),de||u[je](" retries"),Le=He=1,(l=b[xl])||(Le=He=0,b[xl]=l=vn("mcq",null,`${R}`,null,null)),Le||(l[on]=b),qn=this.question,qn===l[_l]||(l.q=l[_l]=qn),Le||(l.emitter=function(nn){return t.answerΞpicked(nn)}),Le||!l.setup||l.setup(He,xe),l[Zs](He),this.question&&this.question.pick&&(this.question.wasΞright?(_n=gn=1,(p=b[Sl])||(_n=gn=0,b[Sl]=p=z("div",null,`feedback ok ${R}`,"Correct!",null)),_n||(p[on]=b)):(ze=lt=1,(p=b[$l])||(ze=lt=0,b[$l]=p=z("div",null,`feedback ${R}`,"It will come back around in a moment.",null)),ze||(p[on]=b)),Bn=L=1,(f=b[Tl])||(Bn=L=0,b[Tl]=f=z("div",null,`row ${R}`,null,null)),Bn||(f[on]=b),Bn||($t=z("button",f,`next-btn ${R}`,"Continue",null)),Bn||$t.on$("click",{$_:[function(nn,sn){return t.advance(nn)}]},this)));return b[jl]=b[je](u,0,b[jl]),b[El]=b[je](l,0,b[El]),b[Cl]=b[je](p,0,b[Cl]),b[Al]=b[je](f,0,b[Al]),b[gd](I),b}};U(ui,fd,"learn-page",2),yn("learn-page",ui,{});var Il=ui;W();Mn(),cn();var pd=Symbol.for("#beforeReconcile"),Qe=Symbol.for("#placeChild"),Kn=Symbol.for("##up"),bd=Symbol.for("#afterVisit"),vd=Symbol.for("#afterReconcile"),Ol=Symbol(),Nl=Symbol(),Dl=Symbol(),Fl=Symbol(),Ml=Symbol(),Rl=Symbol(),Kl=Symbol(),ql=Symbol(),Bl=Symbol(),Ll=Symbol(),zl=Symbol(),Hl=Symbol(),Vl=Symbol(),Wl=Symbol(),Zl=Symbol(),Ul=Symbol(),Gl=Symbol(),Yl=Symbol(),Ql=Symbol(),Xl=Symbol(),Jl=Symbol(),em=Symbol(),nm=Symbol();function yd(c){return c.en.length?c.en[0]:""}function kd(c={}){var t;return(t=c.gr)!=null?t:""}function wd(c,t){return c-t}var xd=Symbol(),si=class si extends We{[Se](t=null,i=!0,u=!0){var l;super[Se](...arguments),this.phase=t&&(l=t.phase)!==void 0?l:"loading",this.queue=t&&(l=t.queue)!==void 0?l:[],this.pos=t&&(l=t.pos)!==void 0?l:0,this.question=t&&(l=t.question)!==void 0?l:null,this.answered=t&&(l=t.answered)!==void 0?l:0,this.correct=t&&(l=t.correct)!==void 0?l:0,this.topic=t&&(l=t.topic)!==void 0?l:""}get topicΞlabel(){let t=xt(this.topic);return t?t.label:"Topic"}async mount(){return await this.setup()}async setup(){let t=await wn(Rn(this.topic));if(!t.length){this.phase="empty",Ne();return}return this.queue=t.slice(0).sort(wd),this.pos=0,this.updateΞquestion(),this.phase="quiz",Ne()}updateΞquestion(){let t=ni(this.topic,this.queue[this.pos]);if(!t){if(this.queue.splice(this.pos,1),this.pos>=this.queue.length&&(this.pos=0),!this.queue.length){this.question=null,this.phase="done";return}return this.updateΞquestion()}let i=[t.mi];for(let u=0,l=ye(Qt(this.topic,t,3)),p=l.length;u<p;u++){let f=l[u];i.push(f.mi)}return this.question={prompt:"How do you say “"+yd(t)+"” ("+kd(t)+") in te reo Māori?",options:_t(i),correct:t.mi,pick:null,wasΞright:!1}}answerΞpicked(t){let i=this.question;if(i&&(i.wasΞright=t==i.correct,i.pick=t,this.answered++,i.wasΞright))return this.correct++}applyΞmoves(t){let i=this.queue,u=i.splice(this.pos,1)[0];if(this.pos>=i.length&&(this.pos=0),t)return i.push(u);{let l=Math.min(this.pos+5,i.length);return i.splice(l,0,u)}}advance(){let t=this.question;if(t&&t.pick){if(this.applyΞmoves(t.wasΞright),!this.queue.length){this.question=null,this.phase="done",Ne();return}return this.updateΞquestion()}}render(){var t=this,i,u,l,p,f,b,C,I=this._ns_||"",R,O,oe,X,ee,le,P,J,ue,me,Y,ae,ce,te,Q,ne,pe,ke,Be,Re,we,$e,Ee,be;return f=this,f[pd](),b=C=1,f[Ol]===1||(b=C=0,f[Ol]=1),b||(R=z("div",f,`page-head ${I}`,null,null)),b||(O=z("button",R,`back ${I}`,"Back",null)),b||O.on$("click",{$_:[function(Ce,Xe){return t.emit("close")}]},this),(oe=f[Nl])||(f[Nl]=oe=z("h1",R,`${I}`,null,null)),X=this.topicΞlabel,X===f[Fl]&&b||(f[Dl]=oe[Qe](f[Fl]=X,128,f[Dl])),b||oe[Qe](" · Recall words"),i=u=l=p=null,this.phase=="loading"?(ee=le=1,(i=f[Ml])||(ee=le=0,f[Ml]=i=z("div",null,`tracker ${I}`,"Loading progress…",null)),ee||(i[Kn]=f)):this.phase=="empty"?(P=J=1,(i=f[Rl])||(P=J=0,f[Rl]=i=z("div",null,`tracker ${I}`,"No learned words yet. Learn some words first.",null)),P||(i[Kn]=f)):this.phase=="done"?(ue=me=1,(i=f[Kl])||(ue=me=0,f[Kl]=i=z("div",null,`tracker ${I}`,"All recalls complete!",null)),ue||(i[Kn]=f)):(Y=ae=1,(i=f[ql])||(Y=ae=0,f[ql]=i=z("div",null,`tracker ${I}`,null,null)),Y||(i[Kn]=f),ce=this.queue.length,ce===i[Ll]&&Y||(i[Bl]=i[Qe](i[Ll]=ce,128,i[Bl])),Y||i[Qe](" learned words · "),ce=this.correct,ce===i[Hl]&&Y||(i[zl]=i[Qe](i[Hl]=ce,0,i[zl])),Y||i[Qe](" correct of "),ce=this.answered,ce===i[Wl]&&Y||(i[Vl]=i[Qe](i[Wl]=ce,0,i[Vl])),Y||i[Qe](" answered"),te=Q=1,(u=f[Zl])||(te=Q=0,f[Zl]=u=vn("mcq",null,`${I}`,null,null)),te||(u[Kn]=f),ne=this.question,ne===u[Ul]||(u.q=u[Ul]=ne),te||(u.emitter=function(Ce){return t.answerΞpicked(Ce)}),te||!u.setup||u.setup(Q,pe),u[bd](Q),this.question&&this.question.pick&&(this.question.wasΞright?(ke=Be=1,(l=f[Gl])||(ke=Be=0,f[Gl]=l=z("div",null,`feedback ok ${I}`,"Correct!",null)),ke||(l[Kn]=f)):(Re=we=1,(l=f[Yl])||(Re=we=0,f[Yl]=l=z("div",null,`feedback ${I}`,"Not quite - it will come back around soon.",null)),Re||(l[Kn]=f)),$e=Ee=1,(p=f[Ql])||($e=Ee=0,f[Ql]=p=z("div",null,`row ${I}`,null,null)),$e||(p[Kn]=f),$e||(be=z("button",p,`next-btn ${I}`,"Next",null)),$e||be.on$("click",{$_:[function(Ce,Xe){return t.advance(Ce)}]},this))),f[Xl]=f[Qe](i,0,f[Xl]),f[Jl]=f[Qe](u,0,f[Jl]),f[em]=f[Qe](l,0,f[em]),f[nm]=f[Qe](p,0,f[nm]),f[vd](C),f}};U(si,xd,"recall-page",2),yn("recall-page",si,{});var tm=si;Mn(),cn();var Km=Symbol.for("#beforeReconcile"),St=Symbol.for("##up"),Me=Symbol.for("#placeChild"),nr=Symbol.for("#afterVisit"),qm=Symbol.for("#afterReconcile"),_d=Symbol.for("##register"),rm=Symbol(),im=Symbol(),om=Symbol(),am=Symbol(),um=Symbol(),sm=Symbol(),lm=Symbol(),mm=Symbol(),cm=Symbol(),hm=Symbol(),gm=Symbol(),dm=Symbol(),fm=Symbol(),pm=Symbol(),bm=Symbol(),vm=Symbol(),ym=Symbol(),km=Symbol(),wm=Symbol();var pa=Symbol(),xm=Symbol(),_m=Symbol(),Sm=Symbol(),$m=Symbol(),Tm=Symbol(),jm=Symbol(),Em=Symbol(),Cm=Symbol(),Am=Symbol(),Pm=Symbol(),Im=Symbol(),Om=Symbol(),Nm=Symbol(),Dm=Symbol(),an,ut=fu(),li=Symbol(),er,mi,Sd=location.hostname=="localhost";function Bm(c){return globalThis.document.documentElement.classList.toggle("dark",c=="dark")}var Lm=Os(ca)=="dark"?"dark":"light";Bm(Lm);var $d=Symbol(),ci=class ci extends We{[Se](t=null,i=!0,u=!0){var l;super[Se](...arguments),this.loaded=t&&(l=t.loaded)!==void 0?l:!1,this.theme=t&&(l=t.theme)!==void 0?l:"light",this.learned=t&&(l=t.learned)!==void 0?l:{},this.inprogress=t&&(l=t.inprogress)!==void 0?l:{}}async mount(){return await this.refresh()}async refresh(){for(let t=0,i=ye(Ut),u=i.length;t<u;t++){let l=i[t];this.learned[l.id]=await wn(Rn(l.id)),this.inprogress[l.id]=await wn(at(l.id))}return this.loaded=!0,Ne()}learnedΞfor(t){return this.learned[t.id]||[]}inprogressΞfor(t){return this.inprogress[t.id]||[]}statsΞfor(t){return js(t,this.learnedΞfor(t))}async resetΞall(){if(globalThis.confirm("Reset all progress? This clears learned and in-progress words for every topic.")){await Is();for(let t=0,i=ye(Ut),u=i.length;t<u;t++){let l=i[t];this.learned[l.id]=[],this.inprogress[l.id]=[]}return Ne()}}toggleΞtheme(){return this.emit("toggle-theme")}render(){var t=this,i,u,l,p,f,b=this._ns_||"",C,I,R,O,oe,X,ee,le,P,J,ue,me,Y,ae,ce,te,Q,ne,pe,ke,Be,Re,we,$e,Ee,be,Ce,Xe,Je,xn,st,Ke,Ze,de,un,en;l=this,l[Km](),p=f=1,l[rm]===1||(p=f=0,l[rm]=1),i=null,Sd&&(C=I=1,(i=l[im])||(C=I=0,l[im]=i=z("div",null,`db-ag ${b}`,"Warning! Debug mode: On",null)),C||(i[St]=l)),l[om]=l[Me](i,0,l[om]),p||(R=z("div",l,`hero ${b}`,null,null)),p||(O=z("h1",R,`${b}`,"Learn Māori",null)),p||(oe=z("p",R,`lead ${b}`,"Learn te reo Māori, one word at a time. Pick a topic below - your progress is saved automatically on this device.",null)),(X=l[am])||(l[am]=X=Ur(0,l)),ee=0,le=X.$;for(let Le=0,He=ye(Ut),qn=He.length;Le<qn;Le++){let xe=He[Le];J=me=1,(P=le.get(ue=xe.id))||(J=me=0,le.set(ue,P=z("div",null,`stage-card card ${b}`,null,null))),J||(P[St]=X),(Y=P[um])||(P[um]=Y=z("h2",P,`${b}`,null,null)),ae=xe.label,ae===P[lm]&&J||(P[sm]=Y[Me](P[lm]=ae,384,P[sm])),J||(ce=z("p",P,`${b}`,"Review new words, then test recall from word to English and back.",null)),(te=P[mm])||(P[mm]=te=z("div",P,`tracker ${b}`,null,null)),J||te[Me]("Learned "),Q=this.statsΞfor(xe).count,Q===P[hm]&&J||(P[cm]=te[Me](P[hm]=Q,0,P[cm])),J||te[Me](" / "),Q=this.statsΞfor(xe).total,Q===P[dm]&&J||(P[gm]=te[Me](P[dm]=Q,0,P[gm])),J||te[Me](" ("),Q=this.statsΞfor(xe).percent,Q===P[pm]&&J||(P[fm]=te[Me](P[pm]=Q,0,P[fm])),J||te[Me]("%) · "),Q=this.inprogressΞfor(xe).length,Q===P[vm]&&J||(P[bm]=te[Me](P[vm]=Q,0,P[bm])),J||te[Me](" in progress"),J||(ne=z("div",P,`row ${b}`,null,null)),ke=Be=1,(pe=P[ym])||(ke=Be=0,P[ym]=pe=z("button",ne,`primary ${b}`,"Learn new words",null)),Re=P[km]||(P[km]={$_:[function(_n,gn,ze){return t.emit("learn",ze.id)},null]}),Re.$_[1]=xe,ke||pe.on$("click",Re,this),$e=Ee=1,(we=P[wm])||($e=Ee=0,P[wm]=we=z("button",ne,`mi-red-ochre-btn ${b}`,null,null)),be=this.loaded&&!this.learnedΞfor(xe).length||void 0,be===P[pa]||(Ee|=2,P[pa]=be),Ce=P[xm]||(P[xm]={$_:[function(_n,gn,ze){return t.emit("recall",ze.id)},null]}),Ce.$_[1]=xe,$e||we.on$("click",Ce,this),Ee&2&&we.flag$(`mi-red-ochre-btn ${b} `+(P[pa]?"disabled":""),null),$e||we[Me]("Recall learned words ("),be=this.learnedΞfor(xe).length,be===P[Sm]&&$e||(P[_m]=we[Me](P[Sm]=be,0,P[_m])),$e||we[Me](")"),X.push(P,ee++,ue)}return X[nr](ee),p||(Xe=z("div",l,`card locked ${b}`,null,null)),p||(Je=z("h2",Xe,`${b}`,"More topics",null)),p||(xn=z("p",Xe,`${b}`,"To be announced.",null)),p||(st=z("hr",l,`hr ${b}`,null,null)),p||(Ke=z("div",l,`footer ${b}`,null,null)),p||(Ze=z("button",Ke,`danger plain-btn ${b}`,"Reset progress",null)),p||Ze.on$("click",{$_:[function(Le,He){return t.resetΞall()}]},this),un=en=1,(de=l[$m])||(un=en=0,l[$m]=de=z("button",Ke,`theme-toggle plain-btn ${b}`,null,null)),un||de.on$("click",{$_:[function(Le,He){return t.toggleΞtheme()}]},this),u=null,this.theme=="dark"?u="☀️ Light mode":u="🌙 Dark mode",l[Tm]=de[Me](u,0,l[Tm]),l[qm](f),l}};U(ci,$d,"landing-page",2),yn("landing-page",ci,{});var Fm=ci,Td=Symbol(),hi=class hi extends We{[Se](t=null,i=!0,u=!0){var l;super[Se](...arguments),this.view=t&&(l=t.view)!==void 0?l:"landing",this.theme=t&&(l=t.theme)!==void 0?l:Lm,this.topic=t&&(l=t.topic)!==void 0?l:Zt.id}toggleΞtheme(){return this.theme=this.theme=="light"?"dark":"light",Bm(this.theme),Ns(ca,this.theme)}mount(){var t=this;return this.syncΞhash(),globalThis.addEventListener("hashchange",function(){return t.syncΞhash()})}syncΞhash(){let t=this.locationΞhash.split("/"),i=t[0],u=xt(t[1])?t[1]:Zt.id;if(i=="learn"){if(!(this.view=="learn"&&this.topic==u))return this.topic=u,this.view="learn",Ne()}else if(i=="recall"){if(!(this.view=="recall"&&this.topic==u))return this.topic=u,this.view="recall",Ne()}else if(i==""&&this.view!="landing")return this.view="landing",Ne()}get locationΞhash(){return(globalThis.location.hash||"").replace("#","")}showΞlearn(t){return this.topic=t,this.view="learn"}showΞrecall(t){return this.topic=t,this.view="recall"}showΞlanding(){return this.view="landing"}render(){var t=this,i,u,l,p,f=this._ns_||"",b,C,I,R,O,oe,X,ee,le,P,J,ue,me;return u=this,u[Km](),l=p=1,u[jm]===1||(l=p=0,u[jm]=1),(b=u[Em])||(u[Em]=b=z("div",u,`app-shell ${f}`,null,null)),i=null,this.view=="landing"?(C=I=1,(i=u[Cm])||(C=I=0,u[Cm]=i=vn("landing-page",null,`${f}`,null,null)),C||(i[St]=b),R=this.theme,R===i[Am]||(i.theme=i[Am]=R),C||i.on$("toggle-theme",{$_:[function(Y,ae){return t.toggleΞtheme()}]},this),C||i.on$("learn",{$_:[function(Y,ae){return t.showΞlearn(Y.detail)}]},this),C||i.on$("recall",{$_:[function(Y,ae){return t.showΞrecall(Y.detail)}]},this),C||!i.setup||i.setup(I,O),i[nr](I)):this.view=="learn"?(oe=X=1,(i=u[Pm])||(oe=X=0,u[Pm]=i=vn("learn-page",null,`${f}`,null,null)),oe||(i[St]=b),ee=this.topic,ee===i[Im]||(i.topic=i[Im]=ee),oe||i.on$("close",{$_:[function(Y,ae){return t.showΞlanding()}]},this),oe||!i.setup||i.setup(X,le),i[nr](X)):(P=J=1,(i=u[Om])||(P=J=0,u[Om]=i=vn("recall-page",null,`${f}`,null,null)),P||(i[St]=b),ue=this.topic,ue===i[Nm]||(i.topic=i[Nm]=ue),P||i.on$("close",{$_:[function(Y,ae){return t.showΞlanding()}]},this),P||!i.setup||i.setup(J,me),i[nr](J)),u[Dm]=b[Me](i,0,u[Dm]),u[qm](p),u}};U(hi,Td,"app",2),yn("app",hi,{});var Mm=hi,Rm;Zo((er=mi=1,(an=ut[li])||(er=mi=0,an=ut[li]=an=vn("app",null,null,null,null)),er||(an[St]=ut._),er||((Rm=an[_d])==null||Rm.call(an,ut,li)),er||ut.sym||!an.setup||an.setup(mi,ut,li),ut.sym||an[nr](mi),an));
//__FOOT__
