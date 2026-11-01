//__HEAD__
var qg=Object.create;var Yo=Object.defineProperty;var Bg=Object.getOwnPropertyDescriptor;var Hg=Object.getOwnPropertyNames;var Wg=Object.getPrototypeOf,Lg=Object.prototype.hasOwnProperty;var zg=(c,r)=>()=>(c&&(r=c(c=0)),r);var Zg=(c,r)=>()=>(r||c((r={exports:{}}).exports,r),r.exports);var Ug=(c,r,i,u)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of Hg(r))!Lg.call(c,s)&&s!==i&&Yo(c,s,{get:()=>r[s],enumerable:!(u=Bg(r,s))||u.enumerable});return c};var Gg=(c,r,i)=>(i=c!=null?qg(Wg(c)):{},Ug(r||!c||!c.__esModule?Yo(i,"default",{value:c,enumerable:!0}):i,c));var J=zg(()=>{});var ps=Zg((ro,to)=>{J();(function(c,r){typeof ro=="object"&&typeof to<"u"?to.exports=r():typeof define=="function"&&define.amd?define(r):(c=typeof globalThis<"u"?globalThis:c||self,c.Dexie=r())})(ro,function(){"use strict";var c=function(e,n){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])},c(e,n)};function r(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");c(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var i=function(){return i=Object.assign||function(n){for(var t,a=1,o=arguments.length;a<o;a++){t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(n[l]=t[l])}return n},i.apply(this,arguments)};function u(e,n,t){if(t||arguments.length===2)for(var a=0,o=n.length,l;a<o;a++)(l||!(a in n))&&(l||(l=Array.prototype.slice.call(n,0,a)),l[a]=n[a]);return e.concat(l||Array.prototype.slice.call(n))}typeof SuppressedError=="function"&&SuppressedError;var s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:globalThis,d=Object.keys,p=Array.isArray;typeof Promise<"u"&&!s.Promise&&(s.Promise=Promise);function v(e,n){return typeof n!="object"||d(n).forEach(function(t){e[t]=n[t]}),e}var j=Object.getPrototypeOf,N={}.hasOwnProperty;function K(e,n){return N.call(e,n)}function P(e,n){typeof n=="function"&&(n=n(j(e))),(typeof Reflect>"u"?d:Reflect.ownKeys)(n).forEach(function(t){Q(e,t,n[t])})}var ue=Object.defineProperty;function Q(e,n,t,a){ue(e,n,v(t&&K(t,"get")&&typeof t.get=="function"?{get:t.get,set:t.set,configurable:!0}:{value:t,configurable:!0,writable:!0},a))}function X(e){return{from:function(n){return e.prototype=Object.create(n.prototype),Q(e.prototype,"constructor",e),{extend:P.bind(null,e.prototype)}}}}var ae=Object.getOwnPropertyDescriptor;function Z(e,n){var t=ae(e,n),a;return t||(a=j(e))&&Z(a,n)}var me=[].slice;function oe(e,n,t){return me.call(e,n,t)}function ee(e,n){return n(e)}function te(e){if(!e)throw new Error("Assertion Failed")}function Y(e){s.setImmediate?setImmediate(e):setTimeout(e,0)}function he(e,n){return e.reduce(function(t,a,o){var l=n(a,o);return l&&(t[l[0]]=l[1]),t},{})}function se(e,n){if(typeof n=="string"&&K(e,n))return e[n];if(!n)return e;if(typeof n!="string"){for(var t=[],a=0,o=n.length;a<o;++a){var l=se(e,n[a]);t.push(l)}return t}var m=n.indexOf(".");if(m!==-1){var g=e[n.substr(0,m)];return g==null?void 0:se(g,n.substr(m+1))}}function F(e,n,t){if(!(!e||n===void 0)&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof n!="string"&&"length"in n){te(typeof t!="string"&&"length"in t);for(var a=0,o=n.length;a<o;++a)F(e,n[a],t[a])}else{var l=n.indexOf(".");if(l!==-1){var m=n.substr(0,l),g=n.substr(l+1);if(g==="")t===void 0?p(e)&&!isNaN(parseInt(m))?e.splice(m,1):delete e[m]:e[m]=t;else{var h=e[m];if(!h||!K(e,m)){if(t===void 0)return;h=e[m]={}}F(h,g,t)}}else t===void 0?p(e)&&!isNaN(parseInt(n))?e.splice(n,1):delete e[n]:e[n]=t}}function ve(e,n){typeof n=="string"?F(e,n,void 0):"length"in n&&[].map.call(n,function(t){F(e,t,void 0)})}function fe(e){var n={};for(var t in e)K(e,t)&&(n[t]=e[t]);return n}var Re=[].concat;function Oe(e){return Re.apply([],e)}var Fe="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Oe([8,16,32,64].map(function(e){return["Int","Uint","Float"].map(function(n){return n+e+"Array"})}))).filter(function(e){return s[e]}),Ae=new Set(Fe.map(function(e){return s[e]}));function Se(e){var n={};for(var t in e)if(K(e,t)){var a=e[t];n[t]=!a||typeof a!="object"||Ae.has(a.constructor)?a:Se(a)}return n}var be=null;function ce(e){be=new WeakMap;var n=$e(e);return be=null,n}function $e(e){if(!e||typeof e!="object")return e;var n=be.get(e);if(n)return n;if(p(e)){n=[],be.set(e,n);for(var t=0,a=e.length;t<a;++t)n.push($e(e[t]))}else if(Ae.has(e.constructor))n=e;else{var o=j(e);n=o===Object.prototype?{}:Object.create(o),be.set(e,n);for(var l in e)K(e,l)&&(n[l]=$e(e[l]))}return n}var Ge={}.toString;function yn(e){return Ge.call(e).slice(8,-1)}var kn=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Dn=typeof kn=="symbol"?function(e){var n;return e!=null&&(n=e[kn])&&n.apply(e)}:function(){return null};function qe(e,n){var t=e.indexOf(n);return t>=0&&e.splice(t,1),t>=0}var we={};function _e(e){var n,t,a,o;if(arguments.length===1){if(p(e))return e.slice();if(this===we&&typeof e=="string")return[e];if(o=Dn(e)){for(t=[];a=o.next(),!a.done;)t.push(a.value);return t}if(e==null)return[e];if(n=e.length,typeof n=="number"){for(t=new Array(n);n--;)t[n]=e[n];return t}return[e]}for(n=arguments.length,t=new Array(n);n--;)t[n]=arguments[n];return t}var Be=typeof Symbol<"u"?function(e){return e[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},rn=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"],Ve=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Je=rn.concat(Ve),ui={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function tn(e,n){this.name=e,this.message=n}X(tn).from(Error).extend({toString:function(){return this.name+": "+this.message}});function wr(e,n){return e+". Errors: "+Object.keys(n).map(function(t){return n[t].toString()}).filter(function(t,a,o){return o.indexOf(t)===a}).join(`
`)}function wn(e,n,t,a){this.failures=n,this.failedKeys=a,this.successCount=t,this.message=wr(e,n)}X(wn).from(tn);function ln(e,n){this.name="BulkError",this.failures=Object.keys(n).map(function(t){return n[t]}),this.failuresByPos=n,this.message=wr(e,this.failures)}X(ln).from(tn);var mn=Je.reduce(function(e,n){return e[n]=n+"Error",e},{}),Vr=tn,W=Je.reduce(function(e,n){var t=n+"Error";function a(o,l){this.name=t,o?typeof o=="string"?(this.message="".concat(o).concat(l?`
 `+l:""),this.inner=l||null):typeof o=="object"&&(this.message="".concat(o.name," ").concat(o.message),this.inner=o):(this.message=ui[n]||t,this.inner=null)}return X(a).from(Vr),e[n]=a,e},{});W.Syntax=SyntaxError,W.Type=TypeError,W.Range=RangeError;var Le=Ve.reduce(function(e,n){return e[n+"Error"]=W[n],e},{});function Fn(e,n){if(!e||e instanceof tn||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Le[e.name])return e;var t=new Le[e.name](n||e.message,e);return"stack"in e&&Q(t,"stack",{get:function(){return this.inner.stack}}),t}var or=Je.reduce(function(e,n){return["Syntax","Type","Range"].indexOf(n)===-1&&(e[n+"Error"]=W[n]),e},{});or.ModifyError=wn,or.DexieError=tn,or.BulkError=ln;function ie(){}function xr(e){return e}function vm(e,n){return e==null||e===xr?n:function(t){return n(e(t))}}function qn(e,n){return function(){e.apply(this,arguments),n.apply(this,arguments)}}function bm(e,n){return e===ie?n:function(){var t=e.apply(this,arguments);t!==void 0&&(arguments[0]=t);var a=this.onsuccess,o=this.onerror;this.onsuccess=null,this.onerror=null;var l=n.apply(this,arguments);return a&&(this.onsuccess=this.onsuccess?qn(a,this.onsuccess):a),o&&(this.onerror=this.onerror?qn(o,this.onerror):o),l!==void 0?l:t}}function ym(e,n){return e===ie?n:function(){e.apply(this,arguments);var t=this.onsuccess,a=this.onerror;this.onsuccess=this.onerror=null,n.apply(this,arguments),t&&(this.onsuccess=this.onsuccess?qn(t,this.onsuccess):t),a&&(this.onerror=this.onerror?qn(a,this.onerror):a)}}function km(e,n){return e===ie?n:function(){var t=e.apply(this,arguments),a=arguments[0];v(a,t);var o=this.onsuccess,l=this.onerror;this.onsuccess=null,this.onerror=null;var m=n.apply(this,arguments);return o&&(this.onsuccess=this.onsuccess?qn(o,this.onsuccess):o),l&&(this.onerror=this.onerror?qn(l,this.onerror):l),t===void 0?m===void 0?void 0:m:v(t,m)}}function wm(e,n){return e===ie?n:function(){return n.apply(this,arguments)===!1?!1:e.apply(this,arguments)}}function si(e,n){return e===ie?n:function(){var t=e.apply(this,arguments);if(t&&typeof t.then=="function"){for(var a=this,o=arguments.length,l=new Array(o);o--;)l[o]=arguments[o];return t.then(function(){return n.apply(a,l)})}return n.apply(this,arguments)}}var an=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function go(e,n){an=e}var Sr={},ho=100,li=typeof Promise>"u"?[]:function(){var e=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[e,j(e),e];var n=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[n,j(n),e]}(),co=li[0],fo=li[1],xm=li[2],Sm=fo&&fo.then,Bn=co&&co.constructor,mi=!!xm;function _m(){queueMicrotask(Em)}var _r=function(e,n){Tr.push([e,n]),Jr&&(_m(),Jr=!1)},gi=!0,Jr=!0,Hn=[],Yr=[],hi=xr,gn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ie,pgp:!1,env:{},finalize:ie},H=gn,Tr=[],Wn=0,Qr=[];function O(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var n=this._PSD=H;if(typeof e!="function"){if(e!==Sr)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&di(this,this._value);return}this._state=null,this._value=null,++n.ref,vo(this,e)}var ci={get:function(){var e=H,n=rt;function t(a,o){var l=this,m=!e.global&&(e!==H||n!==rt),g=m&&!Sn(),h=new O(function(f,b){fi(l,new po(ko(a,e,m,g),ko(o,e,m,g),f,b,e))});return this._consoleTask&&(h._consoleTask=this._consoleTask),h}return t.prototype=Sr,t},set:function(e){Q(this,"then",e&&e.prototype===Sr?ci:{get:function(){return e},set:ci.set})}};P(O.prototype,{then:ci,_then:function(e,n){fi(this,new po(null,null,e,n,H))},catch:function(e){if(arguments.length===1)return this.then(null,e);var n=arguments[0],t=arguments[1];return typeof n=="function"?this.then(null,function(a){return a instanceof n?t(a):Xr(a)}):this.then(null,function(a){return a&&a.name===n?t(a):Xr(a)})},finally:function(e){return this.then(function(n){return O.resolve(e()).then(function(){return n})},function(n){return O.resolve(e()).then(function(){return Xr(n)})})},timeout:function(e,n){var t=this;return e<1/0?new O(function(a,o){var l=setTimeout(function(){return o(new W.Timeout(n))},e);t.then(a,o).finally(clearTimeout.bind(null,l))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&Q(O.prototype,Symbol.toStringTag,"Dexie.Promise"),gn.env=yo();function po(e,n,t,a,o){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof n=="function"?n:null,this.resolve=t,this.reject=a,this.psd=o}P(O,{all:function(){var e=_e.apply(null,arguments).map(tt);return new O(function(n,t){e.length===0&&n([]);var a=e.length;e.forEach(function(o,l){return O.resolve(o).then(function(m){e[l]=m,--a||n(e)},t)})})},resolve:function(e){if(e instanceof O)return e;if(e&&typeof e.then=="function")return new O(function(t,a){e.then(t,a)});var n=new O(Sr,!0,e);return n},reject:Xr,race:function(){var e=_e.apply(null,arguments).map(tt);return new O(function(n,t){e.map(function(a){return O.resolve(a).then(n,t)})})},PSD:{get:function(){return H},set:function(e){return H=e}},totalEchoes:{get:function(){return rt}},newPSD:xn,usePSD:Ln,scheduler:{get:function(){return _r},set:function(e){_r=e}},rejectionMapper:{get:function(){return hi},set:function(e){hi=e}},follow:function(e,n){return new O(function(t,a){return xn(function(o,l){var m=H;m.unhandleds=[],m.onunhandled=l,m.finalize=qn(function(){var g=this;Am(function(){g.unhandleds.length===0?o():l(g.unhandleds[0])})},m.finalize),e()},n,t,a)})}}),Bn&&(Bn.allSettled&&Q(O,"allSettled",function(){var e=_e.apply(null,arguments).map(tt);return new O(function(n){e.length===0&&n([]);var t=e.length,a=new Array(t);e.forEach(function(o,l){return O.resolve(o).then(function(m){return a[l]={status:"fulfilled",value:m}},function(m){return a[l]={status:"rejected",reason:m}}).then(function(){return--t||n(a)})})})}),Bn.any&&typeof AggregateError<"u"&&Q(O,"any",function(){var e=_e.apply(null,arguments).map(tt);return new O(function(n,t){e.length===0&&t(new AggregateError([]));var a=e.length,o=new Array(a);e.forEach(function(l,m){return O.resolve(l).then(function(g){return n(g)},function(g){o[m]=g,--a||t(new AggregateError(o))})})})}),Bn.withResolvers&&(O.withResolvers=Bn.withResolvers));function vo(e,n){try{n(function(t){if(e._state===null){if(t===e)throw new TypeError("A promise cannot be resolved with itself.");var a=e._lib&&ur();t&&typeof t.then=="function"?vo(e,function(o,l){t instanceof O?t._then(o,l):t.then(o,l)}):(e._state=!0,e._value=t,bo(e)),a&&sr()}},di.bind(null,e))}catch(t){di(e,t)}}function di(e,n){if(Yr.push(n),e._state===null){var t=e._lib&&ur();n=hi(n),e._state=!1,e._value=n,$m(e),bo(e),t&&sr()}}function bo(e){var n=e._listeners;e._listeners=[];for(var t=0,a=n.length;t<a;++t)fi(e,n[t]);var o=e._PSD;--o.ref||o.finalize(),Wn===0&&(++Wn,_r(function(){--Wn===0&&pi()},[]))}function fi(e,n){if(e._state===null){e._listeners.push(n);return}var t=e._state?n.onFulfilled:n.onRejected;if(t===null)return(e._state?n.resolve:n.reject)(e._value);++n.psd.ref,++Wn,_r(Tm,[t,e,n])}function Tm(e,n,t){try{var a,o=n._value;!n._state&&Yr.length&&(Yr=[]),a=an&&n._consoleTask?n._consoleTask.run(function(){return e(o)}):e(o),!n._state&&Yr.indexOf(o)===-1&&Cm(n),t.resolve(a)}catch(l){t.reject(l)}finally{--Wn===0&&pi(),--t.psd.ref||t.psd.finalize()}}function Em(){Ln(gn,function(){ur()&&sr()})}function ur(){var e=gi;return gi=!1,Jr=!1,e}function sr(){var e,n,t;do for(;Tr.length>0;)for(e=Tr,Tr=[],t=e.length,n=0;n<t;++n){var a=e[n];a[0].apply(null,a[1])}while(Tr.length>0);gi=!0,Jr=!0}function pi(){var e=Hn;Hn=[],e.forEach(function(a){a._PSD.onunhandled.call(null,a._value,a)});for(var n=Qr.slice(0),t=n.length;t;)n[--t]()}function Am(e){function n(){e(),Qr.splice(Qr.indexOf(n),1)}Qr.push(n),++Wn,_r(function(){--Wn===0&&pi()},[])}function $m(e){Hn.some(function(n){return n._value===e._value})||Hn.push(e)}function Cm(e){for(var n=Hn.length;n;)if(Hn[--n]._value===e._value){Hn.splice(n,1);return}}function Xr(e){return new O(Sr,!1,e)}function ge(e,n){var t=H;return function(){var a=ur(),o=H;try{return _n(t,!0),e.apply(this,arguments)}catch(l){n&&n(l)}finally{_n(o,!1),a&&sr()}}}var xe={awaits:0,echoes:0,id:0},jm=0,et=[],nt=0,rt=0,Nm=0;function xn(e,n,t,a){var o=H,l=Object.create(o);l.parent=o,l.ref=0,l.global=!1,l.id=++Nm,gn.env,l.env=mi?{Promise:O,PromiseProp:{value:O,configurable:!0,writable:!0},all:O.all,race:O.race,allSettled:O.allSettled,any:O.any,resolve:O.resolve,reject:O.reject}:{},n&&v(l,n),++o.ref,l.finalize=function(){--this.parent.ref||this.parent.finalize()};var m=Ln(l,e,t,a);return l.ref===0&&l.finalize(),m}function lr(){return xe.id||(xe.id=++jm),++xe.awaits,xe.echoes+=ho,xe.id}function Sn(){return xe.awaits?(--xe.awaits===0&&(xe.id=0),xe.echoes=xe.awaits*ho,!0):!1}(""+Sm).indexOf("[native code]")===-1&&(lr=Sn=ie);function tt(e){return xe.echoes&&e&&e.constructor===Bn?(lr(),e.then(function(n){return Sn(),n},function(n){return Sn(),pe(n)})):e}function Pm(e){++rt,(!xe.echoes||--xe.echoes===0)&&(xe.echoes=xe.awaits=xe.id=0),et.push(H),_n(e,!0)}function Mm(){var e=et[et.length-1];et.pop(),_n(e,!1)}function _n(e,n){var t=H;if((n?xe.echoes&&(!nt++||e!==H):nt&&(!--nt||e!==H))&&queueMicrotask(n?Pm.bind(null,e):Mm),e!==H&&(H=e,t===gn&&(gn.env=yo()),mi)){var a=gn.env.Promise,o=e.env;(t.global||e.global)&&(Object.defineProperty(s,"Promise",o.PromiseProp),a.all=o.all,a.race=o.race,a.resolve=o.resolve,a.reject=o.reject,o.allSettled&&(a.allSettled=o.allSettled),o.any&&(a.any=o.any))}}function yo(){var e=s.Promise;return mi?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(s,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function Ln(e,n,t,a,o){var l=H;try{return _n(e,!0),n(t,a,o)}finally{_n(l,!1)}}function ko(e,n,t,a){return typeof e!="function"?e:function(){var o=H;t&&lr(),_n(n,!0);try{return e.apply(this,arguments)}finally{_n(o,!1),a&&queueMicrotask(Sn)}}}function vi(e){Promise===Bn&&xe.echoes===0?nt===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}var pe=O.reject;function bi(e,n,t,a){if(!e.idbdb||!e._state.openComplete&&!H.letThrough&&!e._vip){if(e._state.openComplete)return pe(new W.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._state.autoOpen)return pe(new W.DatabaseClosed);e.open().catch(ie)}return e._state.dbReadyPromise.then(function(){return bi(e,n,t,a)})}else{var o=e._createTransaction(n,t,e._dbSchema);try{o.create(),e._state.PR1398_maxLoop=3}catch(l){return l.name===mn.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e.close({disableAutoOpen:!1}),e.open().then(function(){return bi(e,n,t,a)})):pe(l)}return o._promise(n,function(l,m){return xn(function(){return H.trans=o,a(l,m,o)})}).then(function(l){if(n==="readwrite")try{o.idbtrans.commit()}catch{}return n==="readonly"?l:o._completion.then(function(){return l})})}}var wo="4.4.7",zn="￿",yi=-1/0,hn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",xo="String expected.",So=1e3,it="__dbnames",ki="readonly",wi="readwrite";function Zn(e,n){return e?n?function(){return e.apply(this,arguments)&&n.apply(this,arguments)}:e:n}var _o={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function at(e){return typeof e=="string"&&!/\./.test(e)?function(n){return n[e]===void 0&&e in n&&(n=ce(n),delete n[e]),n}:function(n){return n}}function To(){throw W.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function re(e,n){try{var t=Eo(e),a=Eo(n);if(t!==a)return t==="Array"?1:a==="Array"?-1:t==="binary"?1:a==="binary"?-1:t==="string"?1:a==="string"?-1:t==="Date"?1:a!=="Date"?NaN:-1;switch(t){case"number":case"Date":case"string":return e>n?1:e<n?-1:0;case"binary":return Rm(Ao(e),Ao(n));case"Array":return Im(e,n)}}catch{}return NaN}function Im(e,n){for(var t=e.length,a=n.length,o=t<a?t:a,l=0;l<o;++l){var m=re(e[l],n[l]);if(m!==0)return m}return t===a?0:t<a?-1:1}function Rm(e,n){for(var t=e.length,a=n.length,o=t<a?t:a,l=0;l<o;++l)if(e[l]!==n[l])return e[l]<n[l]?-1:1;return t===a?0:t<a?-1:1}function Eo(e){var n=typeof e;if(n!=="object")return n;if(ArrayBuffer.isView(e))return"binary";var t=yn(e);return t==="ArrayBuffer"?"binary":t}function Ao(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function ot(e,n,t){var a=e.schema.yProps;return a?(n&&t.numFailures>0&&(n=n.filter(function(o,l){return!t.failures[l]})),Promise.all(a.map(function(o){var l=o.updatesTable;return n?e.db.table(l).where("k").anyOf(n).delete():e.db.table(l).clear()})).then(function(){return t})):t}var Er=function(){function e(n){this["@@propmod"]=n}return e.prototype.execute=function(n){var t,a=this["@@propmod"];if(a.add!==void 0){var o=a.add;if(p(o))return u(u([],p(n)?n:[],!0),o,!0).sort();if(typeof o=="number")return(Number(n)||0)+o;if(typeof o=="bigint")try{return BigInt(n)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(a.remove!==void 0){var l=a.remove;if(p(l))return p(n)?n.filter(function(g){return!l.includes(g)}).sort():[];if(typeof l=="number")return Number(n)-l;if(typeof l=="bigint")try{return BigInt(n)-l}catch{return BigInt(0)-l}throw new TypeError("Invalid subtrahend ".concat(l))}var m=(t=a.replacePrefix)===null||t===void 0?void 0:t[0];return m&&typeof n=="string"&&n.startsWith(m)?a.replacePrefix[1]+n.substring(m.length):n},e}();function $o(e,n){for(var t=d(n),a=t.length,o=!1,l=0;l<a;++l){var m=t[l],g=n[m],h=se(e,m);g instanceof Er?(F(e,m,g.execute(h)),o=!0):h!==g&&(F(e,m,g),o=!0)}return o}var Co=function(){function e(){}return e.prototype._trans=function(n,t,a){var o=this._tx||H.trans,l=this.name,m=an&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(n==="readonly"?"read":"write"," ").concat(this.name));function g(b,w,x){if(!x.schema[l])throw new W.NotFound("Table "+l+" not part of transaction");return t(x.idbtrans,x)}var h=ur();try{var f=o&&o.db._novip===this.db._novip?o===H.trans?o._promise(n,g,a):xn(function(){return o._promise(n,g,a)},{trans:o,transless:H.transless||H}):bi(this.db,n,[this.name],g);return m&&(f._consoleTask=m,f=f.catch(function(b){return console.trace(b),pe(b)})),f}finally{h&&sr()}},e.prototype.get=function(n,t){var a=this;return n&&n.constructor===Object?this.where(n).first(t):n==null?pe(new W.Type("Invalid argument to Table.get()")):this._trans("readonly",function(o){return a.core.get({trans:o,key:n}).then(function(l){return a.hook.reading.fire(l)})}).then(t)},e.prototype.where=function(n){if(typeof n=="string")return new this.db.WhereClause(this,n);if(p(n))return new this.db.WhereClause(this,"[".concat(n.join("+"),"]"));var t=d(n);if(t.length===1)return this.where(t[0]).equals(n[t[0]]);var a=this.schema.indexes.concat(this.schema.primKey).filter(function(b){if(b.compound&&t.every(function(x){return b.keyPath.indexOf(x)>=0})){for(var w=0;w<t.length;++w)if(t.indexOf(b.keyPath[w])===-1)return!1;return!0}return!1}).sort(function(b,w){return b.keyPath.length-w.keyPath.length})[0];if(a&&this.db._maxKey!==zn){var o=a.keyPath.slice(0,t.length);return this.where(o).equals(o.map(function(b){return n[b]}))}!a&&an&&console.warn("The query ".concat(JSON.stringify(n)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(t.join("+"),"]"));var l=this.schema.idxByName;function m(b,w){return re(b,w)===0}var g=t.reduce(function(b,w){var x=b[0],A=b[1],y=l[w],k=n[w];return[x||y,x||!y?Zn(A,y&&y.multi?function(_){var S=se(_,w);return p(S)&&S.some(function(C){return m(k,C)})}:function(_){return m(k,se(_,w))}):A]},[null,null]),h=g[0],f=g[1];return h?this.where(h.name).equals(n[h.keyPath]).filter(f):a?this.filter(f):this.where(t).equals("")},e.prototype.filter=function(n){return this.toCollection().and(n)},e.prototype.count=function(n){return this.toCollection().count(n)},e.prototype.offset=function(n){return this.toCollection().offset(n)},e.prototype.limit=function(n){return this.toCollection().limit(n)},e.prototype.each=function(n){return this.toCollection().each(n)},e.prototype.toArray=function(n){return this.toCollection().toArray(n)},e.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},e.prototype.orderBy=function(n){return new this.db.Collection(new this.db.WhereClause(this,p(n)?"[".concat(n.join("+"),"]"):n))},e.prototype.reverse=function(){return this.toCollection().reverse()},e.prototype.mapToClass=function(n){var t=this,a=t.db,o=t.name;this.schema.mappedClass=n,n.prototype instanceof To&&(n=function(h){r(f,h);function f(){return h!==null&&h.apply(this,arguments)||this}return Object.defineProperty(f.prototype,"db",{get:function(){return a},enumerable:!1,configurable:!0}),f.prototype.table=function(){return o},f}(n));for(var l=new Set,m=n.prototype;m;m=j(m))Object.getOwnPropertyNames(m).forEach(function(h){return l.add(h)});var g=function(h){if(!h)return h;var f=Object.create(n.prototype);for(var b in h)if(!l.has(b))try{f[b]=h[b]}catch{}return f};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=g,this.hook("reading",g),n},e.prototype.defineClass=function(){function n(t){v(this,t)}return this.mapToClass(n)},e.prototype.add=function(n,t){var a=this,o=this.schema.primKey,l=o.auto,m=o.keyPath,g=n;return m&&l&&(g=at(m)(n)),this._trans("readwrite",function(h){return a.core.mutate({trans:h,type:"add",keys:t!=null?[t]:null,values:[g]})}).then(function(h){return h.numFailures?O.reject(h.failures[0]):h.lastResult}).then(function(h){if(m)try{F(n,m,h)}catch{}return h})},e.prototype.upsert=function(n,t){var a=this,o=this.schema.primKey.keyPath;return this._trans("readwrite",function(l){return a.core.get({trans:l,key:n}).then(function(m){var g=m!=null?m:{};return $o(g,t),o&&F(g,o,n),a.core.mutate({trans:l,type:"put",values:[g],keys:[n],upsert:!0,updates:{keys:[n],changeSpecs:[t]}}).then(function(h){return h.numFailures?O.reject(h.failures[0]):!!m})})})},e.prototype.update=function(n,t){if(typeof n=="object"&&!p(n)){var a=se(n,this.schema.primKey.keyPath);return a===void 0?pe(new W.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(a).modify(t)}else return this.where(":id").equals(n).modify(t)},e.prototype.put=function(n,t){var a=this,o=this.schema.primKey,l=o.auto,m=o.keyPath,g=n;return m&&l&&(g=at(m)(n)),this._trans("readwrite",function(h){return a.core.mutate({trans:h,type:"put",values:[g],keys:t!=null?[t]:null})}).then(function(h){return h.numFailures?O.reject(h.failures[0]):h.lastResult}).then(function(h){if(m)try{F(n,m,h)}catch{}return h})},e.prototype.delete=function(n){var t=this;return this._trans("readwrite",function(a){return t.core.mutate({trans:a,type:"delete",keys:[n]}).then(function(o){return ot(t,[n],o)}).then(function(o){return o.numFailures?O.reject(o.failures[0]):void 0})})},e.prototype.clear=function(){var n=this;return this._trans("readwrite",function(t){return n.core.mutate({trans:t,type:"deleteRange",range:_o}).then(function(a){return ot(n,null,a)})}).then(function(t){return t.numFailures?O.reject(t.failures[0]):void 0})},e.prototype.bulkGet=function(n){var t=this;return this._trans("readonly",function(a){return t.core.getMany({keys:n,trans:a}).then(function(o){return o.map(function(l){return t.hook.reading.fire(l)})})})},e.prototype.bulkAdd=function(n,t,a){var o=this,l=Array.isArray(t)?t:void 0;a=a||(l?void 0:t);var m=a?a.allKeys:void 0;return this._trans("readwrite",function(g){var h=o.schema.primKey,f=h.auto,b=h.keyPath;if(b&&l)throw new W.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(l&&l.length!==n.length)throw new W.InvalidArgument("Arguments objects and keys must have the same length");var w=n.length,x=b&&f?n.map(at(b)):n;return o.core.mutate({trans:g,type:"add",keys:l,values:x,wantResults:m}).then(function(A){var y=A.numFailures,k=A.results,_=A.lastResult,S=A.failures,C=m?k:_;if(y===0)return C;throw new ln("".concat(o.name,".bulkAdd(): ").concat(y," of ").concat(w," operations failed"),S)})})},e.prototype.bulkPut=function(n,t,a){var o=this,l=Array.isArray(t)?t:void 0;a=a||(l?void 0:t);var m=a?a.allKeys:void 0;return this._trans("readwrite",function(g){var h=o.schema.primKey,f=h.auto,b=h.keyPath;if(b&&l)throw new W.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(l&&l.length!==n.length)throw new W.InvalidArgument("Arguments objects and keys must have the same length");var w=n.length,x=b&&f?n.map(at(b)):n;return o.core.mutate({trans:g,type:"put",keys:l,values:x,wantResults:m}).then(function(A){var y=A.numFailures,k=A.results,_=A.lastResult,S=A.failures,C=m?k:_;if(y===0)return C;throw new ln("".concat(o.name,".bulkPut(): ").concat(y," of ").concat(w," operations failed"),S)})})},e.prototype.bulkUpdate=function(n){var t=this,a=n.map(function(m){return m.key}),o=n.map(function(m){return m.changes}),l=[];return this._trans("readwrite",function(m){var g=t.core;return g.getMany({trans:m,keys:a,cache:"clone"}).then(function(h){var f=g.schema.primaryKey,b=f.outbound,w=f.extractKey,x=[],A=[];n.forEach(function(k,_){var S=k.key,C=k.changes,$=h[_];if($){for(var T=0,E=Object.keys(C);T<E.length;T++){var R=E[T];F($,R,C[R])}if(!b&&re(w($),S)!==0)throw new W.Constraint("Cannot update primary key in bulkUpdate()");l.push(_),x.push(S),A.push($)}});var y=x.length;return g.mutate({trans:m,type:"put",keys:x,values:A,updates:{keys:a,changeSpecs:o}}).then(function(k){var _=k.numFailures,S=k.failures;if(_===0)return y;for(var C=0,$=Object.keys(S);C<$.length;C++){var T=$[C],E=l[Number(T)];if(E!=null){var R=S[T];delete S[T],S[E]=R}}throw new ln("".concat(t.name,".bulkUpdate(): ").concat(_," of ").concat(y," operations failed"),S)})})})},e.prototype.bulkDelete=function(n){var t=this,a=n.length;return this._trans("readwrite",function(o){return t.core.mutate({trans:o,type:"delete",keys:n}).then(function(l){return ot(t,n,l)})}).then(function(o){var l=o.numFailures,m=o.lastResult,g=o.failures;if(l===0)return m;throw new ln("".concat(t.name,".bulkDelete(): ").concat(l," of ").concat(a," operations failed"),g)})},e}();function Ar(e){var n={},t=function(g,h){if(h){for(var f=arguments.length,b=new Array(f-1);--f;)b[f-1]=arguments[f];return n[g].subscribe.apply(null,b),e}else if(typeof g=="string")return n[g]};t.addEventType=l;for(var a=1,o=arguments.length;a<o;++a)l(arguments[a]);return t;function l(g,h,f){if(typeof g=="object")return m(g);h||(h=wm),f||(f=ie);var b={subscribers:[],fire:f,subscribe:function(w){b.subscribers.indexOf(w)===-1&&(b.subscribers.push(w),b.fire=h(b.fire,w))},unsubscribe:function(w){b.subscribers=b.subscribers.filter(function(x){return x!==w}),b.fire=b.subscribers.reduce(h,f)}};return n[g]=t[g]=b,b}function m(g){d(g).forEach(function(h){var f=g[h];if(p(f))l(h,g[h][0],g[h][1]);else if(f==="asap")var b=l(h,xr,function(){for(var x=arguments.length,A=new Array(x);x--;)A[x]=arguments[x];b.subscribers.forEach(function(y){Y(function(){y.apply(null,A)})})});else throw new W.InvalidArgument("Invalid event config")})}}function $r(e,n){return X(n).from({prototype:e}),n}function Om(e){return $r(Co.prototype,function(t,a,o){this.db=e,this._tx=o,this.name=t,this.schema=a,this.hook=e._allTables[t]?e._allTables[t].hook:Ar(null,{creating:[bm,ie],reading:[vm,xr],updating:[km,ie],deleting:[ym,ie]})})}function mr(e,n){return!(e.filter||e.algorithm||e.or)&&(n?e.justLimit:!e.replayFilter)}function xi(e,n){e.filter=Zn(e.filter,n)}function Si(e,n,t){var a=e.replayFilter;e.replayFilter=a?function(){return Zn(a(),n())}:n,e.justLimit=t&&!a}function Km(e,n){e.isMatch=Zn(e.isMatch,n)}function ut(e,n){if(e.isPrimKey)return n.primaryKey;var t=n.getIndexByKeyPath(e.index);if(!t)throw new W.Schema("KeyPath "+e.index+" on object store "+n.name+" is not indexed");return t}function jo(e,n,t){var a=ut(e,n.schema);return n.openCursor({trans:t,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:a,range:e.range}})}function st(e,n,t,a){var o=e.replayFilter?Zn(e.filter,e.replayFilter()):e.filter;if(e.or){var l={},m=function(g,h,f){if(!o||o(h,f,function(x){return h.stop(x)},function(x){return h.fail(x)})){var b=h.primaryKey,w=""+b;w==="[object ArrayBuffer]"&&(w=""+new Uint8Array(b)),K(l,w)||(l[w]=!0,n(g,h,f))}};return Promise.all([e.or._iterate(m,t),No(jo(e,a,t),e.algorithm,m,!e.keysOnly&&e.valueMapper)])}else return No(jo(e,a,t),Zn(e.algorithm,o),n,!e.keysOnly&&e.valueMapper)}function No(e,n,t,a){var o=a?function(m,g,h){return t(a(m),g,h)}:t,l=ge(o);return e.then(function(m){if(m)return m.start(function(){var g=function(){return m.continue()};(!n||n(m,function(h){return g=h},function(h){m.stop(h),g=ie},function(h){m.fail(h),g=ie}))&&l(m.value,m,function(h){return g=h}),g()})})}var Dm=function(){function e(){}return e.prototype._read=function(n,t){var a=this._ctx;return a.error?a.table._trans(null,pe.bind(null,a.error)):a.table._trans("readonly",n).then(t)},e.prototype._write=function(n){var t=this._ctx;return t.error?t.table._trans(null,pe.bind(null,t.error)):t.table._trans("readwrite",n,"locked")},e.prototype._addAlgorithm=function(n){var t=this._ctx;t.algorithm=Zn(t.algorithm,n)},e.prototype._iterate=function(n,t){return st(this._ctx,n,t,this._ctx.table.core)},e.prototype.clone=function(n){var t=Object.create(this.constructor.prototype),a=Object.create(this._ctx);return n&&v(a,n),t._ctx=a,t},e.prototype.raw=function(){return this._ctx.valueMapper=null,this},e.prototype.each=function(n){var t=this._ctx;return this._read(function(a){return st(t,n,a,t.table.core)})},e.prototype.count=function(n){var t=this;return this._read(function(a){var o=t._ctx,l=o.table.core;if(mr(o,!0))return l.count({trans:a,query:{index:ut(o,l.schema),range:o.range}}).then(function(g){return Math.min(g,o.limit)});var m=0;return st(o,function(){return++m,!1},a,l).then(function(){return m})}).then(n)},e.prototype.sortBy=function(n,t){var a=n.split(".").reverse(),o=a[0],l=a.length-1;function m(f,b){return b?m(f[a[b]],b-1):f[o]}var g=this._ctx.dir==="next"?1:-1;function h(f,b){var w=m(f,l),x=m(b,l);return re(w,x)*g}return this.toArray(function(f){return f.slice().sort(h)}).then(t)},e.prototype.toArray=function(n){var t=this;return this._read(function(a){var o=t._ctx;if(mr(o,!0)&&o.limit>0){var l=o.valueMapper,m=ut(o,o.table.core.schema);return o.table.core.query({trans:a,limit:o.limit,values:!0,direction:o.dir==="prev"?"prev":void 0,query:{index:m,range:o.range}}).then(function(h){var f=h.result;return l?f.map(l):f})}else{var g=[];return st(o,function(h){return g.push(h)},a,o.table.core).then(function(){return g})}},n)},e.prototype.offset=function(n){var t=this._ctx;return n<=0?this:(t.offset+=n,mr(t)?Si(t,function(){var a=n;return function(o,l){return a===0?!0:a===1?(--a,!1):(l(function(){o.advance(a),a=0}),!1)}}):Si(t,function(){var a=n;return function(){return--a<0}}),this)},e.prototype.limit=function(n){return this._ctx.limit=Math.min(this._ctx.limit,n),Si(this._ctx,function(){var t=n;return function(a,o,l){return--t<=0&&o(l),t>=0}},!0),this},e.prototype.until=function(n,t){return xi(this._ctx,function(a,o,l){return n(a.value)?(o(l),t):!0}),this},e.prototype.first=function(n){return this.limit(1).toArray(function(t){return t[0]}).then(n)},e.prototype.last=function(n){return this.reverse().first(n)},e.prototype.filter=function(n){return xi(this._ctx,function(t){return n(t.value)}),Km(this._ctx,n),this},e.prototype.and=function(n){return this.filter(n)},e.prototype.or=function(n){return new this.db.WhereClause(this._ctx.table,n,this)},e.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},e.prototype.desc=function(){return this.reverse()},e.prototype.eachKey=function(n){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(a,o){n(o.key,o)})},e.prototype.eachUniqueKey=function(n){return this._ctx.unique="unique",this.eachKey(n)},e.prototype.eachPrimaryKey=function(n){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(a,o){n(o.primaryKey,o)})},e.prototype.keys=function(n){var t=this._ctx;t.keysOnly=!t.isMatch;var a=[];return this.each(function(o,l){a.push(l.key)}).then(function(){return a}).then(n)},e.prototype.primaryKeys=function(n){var t=this._ctx;if(mr(t,!0)&&t.limit>0)return this._read(function(o){var l=ut(t,t.table.core.schema);return t.table.core.query({trans:o,values:!1,limit:t.limit,direction:t.dir==="prev"?"prev":void 0,query:{index:l,range:t.range}})}).then(function(o){var l=o.result;return l}).then(n);t.keysOnly=!t.isMatch;var a=[];return this.each(function(o,l){a.push(l.primaryKey)}).then(function(){return a}).then(n)},e.prototype.uniqueKeys=function(n){return this._ctx.unique="unique",this.keys(n)},e.prototype.firstKey=function(n){return this.limit(1).keys(function(t){return t[0]}).then(n)},e.prototype.lastKey=function(n){return this.reverse().firstKey(n)},e.prototype.distinct=function(){var n=this._ctx,t=n.index&&n.table.schema.idxByName[n.index];if(!t||!t.multi)return this;var a={};return xi(this._ctx,function(o){var l=o.primaryKey.toString(),m=K(a,l);return a[l]=!0,!m}),this},e.prototype.modify=function(n){var t=this,a=this._ctx;return this._write(function(o){var l;typeof n=="function"?l=n:l=function(S){return $o(S,n)};var m=a.table.core,g=m.schema.primaryKey,h=g.outbound,f=g.extractKey,b=200,w=t.db._options.modifyChunkSize;w&&(typeof w=="object"?b=w[m.name]||w["*"]||200:b=w);var x=[],A=0,y=[],k=function(S,C){var $=C.failures,T=C.numFailures;A+=S-T;for(var E=0,R=d($);E<R.length;E++){var M=R[E];x.push($[M])}},_=n===Po;return t.clone().primaryKeys().then(function(S){var C=mr(a)&&a.limit===1/0&&(typeof n!="function"||_)&&{index:a.index,range:a.range},$=function(T){var E=Math.min(b,S.length-T),R=S.slice(T,T+E);return(_?Promise.resolve([]):m.getMany({trans:o,keys:R,cache:"immutable"})).then(function(M){var I=[],q=[],ne=h?[]:null,L=_?R:[];if(!_)for(var B=0;B<E;++B){var U=M[B],V={value:ce(U),primKey:S[T+B]};l.call(V,V.value,V)!==!1&&(V.value==null?L.push(S[T+B]):!h&&re(f(U),f(V.value))!==0?(L.push(S[T+B]),I.push(V.value)):(q.push(V.value),h&&ne.push(S[T+B])))}return Promise.resolve(I.length>0&&m.mutate({trans:o,type:"add",values:I}).then(function(le){for(var z in le.failures)L.splice(parseInt(z),1);k(I.length,le)})).then(function(){return(q.length>0||C&&typeof n=="object")&&m.mutate({trans:o,type:"put",keys:ne,values:q,criteria:C,changeSpec:typeof n!="function"&&n,isAdditionalChunk:T>0}).then(function(le){return k(q.length,le)})}).then(function(){return(L.length>0||C&&_)&&m.mutate({trans:o,type:"delete",keys:L,criteria:C,isAdditionalChunk:T>0}).then(function(le){return ot(a.table,L,le)}).then(function(le){return k(L.length,le)})}).then(function(){return S.length>T+E&&$(T+b)})})};return $(0).then(function(){if(x.length>0)throw new wn("Error modifying one or more objects",x,A,y);return S.length})})})},e.prototype.delete=function(){var n=this._ctx,t=n.range;return mr(n)&&!n.table.schema.yProps&&(n.isPrimKey||t.type===3)?this._write(function(a){var o=n.table.core.schema.primaryKey,l=t;return n.table.core.count({trans:a,query:{index:o,range:l}}).then(function(m){return n.table.core.mutate({trans:a,type:"deleteRange",range:l}).then(function(g){var h=g.failures,f=g.numFailures;if(f)throw new wn("Could not delete some values",Object.keys(h).map(function(b){return h[b]}),m-f);return m-f})})}):this.modify(Po)},e}(),Po=function(e,n){return n.value=null};function Fm(e){return $r(Dm.prototype,function(t,a){this.db=e;var o=_o,l=null;if(a)try{o=a()}catch(f){l=f}var m=t._ctx,g=m.table,h=g.hook.reading.fire;this._ctx={table:g,index:m.index,isPrimKey:!m.index||g.schema.primKey.keyPath&&m.index===g.schema.primKey.name,range:o,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:l,or:m.or,valueMapper:h!==xr?h:null}})}function qm(e,n){return e<n?-1:e===n?0:1}function Bm(e,n){return e>n?-1:e===n?0:1}function He(e,n,t){var a=e instanceof Io?new e.Collection(e):e;return a._ctx.error=t?new t(n):new TypeError(n),a}function gr(e){var n=new e.Collection(e,function(){return Mo("")});return n._addAlgorithm(function(){return!1}),n}function Hm(e){return e==="next"?function(n){return n.toUpperCase()}:function(n){return n.toLowerCase()}}function Wm(e){return e==="next"?function(n){return n.toLowerCase()}:function(n){return n.toUpperCase()}}function Lm(e,n,t,a,o,l){for(var m=Math.min(e.length,a.length),g=-1,h=0;h<m;++h){var f=n[h];if(f!==a[h])return o(e[h],t[h])<0?e.substr(0,h)+t[h]+t.substr(h+1):o(e[h],a[h])<0?e.substr(0,h)+a[h]+t.substr(h+1):g>=0?e.substr(0,g)+n[g]+t.substr(g+1):null;o(e[h],f)<0&&(g=h)}return m<a.length&&l==="next"?e+t.substr(e.length):m<e.length&&l==="prev"?e.substr(0,t.length):g<0?null:e.substr(0,g)+a[g]+t.substr(g+1)}function lt(e,n,t,a){var o,l,m,g,h,f,b,w=t.length;if(!t.every(function(k){return typeof k=="string"}))return He(e,xo);function x(k){o=Hm(k),l=Wm(k),m=k==="next"?qm:Bm;var _=t.map(function(S){return{lower:l(S),upper:o(S)}}).sort(function(S,C){return m(S.lower,C.lower)});g=_.map(function(S){return S.upper}),h=_.map(function(S){return S.lower}),f=k,b=k==="next"?"":a}x("next");var A=new e.Collection(e,function(){return Tn(g[0],h[w-1]+a)});A._ondirectionchange=function(k){x(k)};var y=0;return A._addAlgorithm(function(k,_,S){var C=k.key;if(typeof C!="string")return!1;var $=l(C);if(n($,h,y))return!0;for(var T=null,E=y;E<w;++E){var R=Lm(C,$,g[E],h[E],m,f);R===null&&T===null?y=E+1:(T===null||m(T,R)>0)&&(T=R)}return _(T!==null?function(){k.continue(T+b)}:S),!1}),A}function Tn(e,n,t,a){return{type:2,lower:e,upper:n,lowerOpen:t,upperOpen:a}}function Mo(e){return{type:1,lower:e,upper:e}}var Io=function(){function e(){}return Object.defineProperty(e.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),e.prototype.between=function(n,t,a,o){a=a!==!1,o=o===!0;try{return this._cmp(n,t)>0||this._cmp(n,t)===0&&(a||o)&&!(a&&o)?gr(this):new this.Collection(this,function(){return Tn(n,t,!a,!o)})}catch{return He(this,hn)}},e.prototype.equals=function(n){return n==null?He(this,hn):new this.Collection(this,function(){return Mo(n)})},e.prototype.above=function(n){return n==null?He(this,hn):new this.Collection(this,function(){return Tn(n,void 0,!0)})},e.prototype.aboveOrEqual=function(n){return n==null?He(this,hn):new this.Collection(this,function(){return Tn(n,void 0,!1)})},e.prototype.below=function(n){return n==null?He(this,hn):new this.Collection(this,function(){return Tn(void 0,n,!1,!0)})},e.prototype.belowOrEqual=function(n){return n==null?He(this,hn):new this.Collection(this,function(){return Tn(void 0,n)})},e.prototype.startsWith=function(n){return typeof n!="string"?He(this,xo):this.between(n,n+zn,!0,!0)},e.prototype.startsWithIgnoreCase=function(n){return n===""?this.startsWith(n):lt(this,function(t,a){return t.indexOf(a[0])===0},[n],zn)},e.prototype.equalsIgnoreCase=function(n){return lt(this,function(t,a){return t===a[0]},[n],"")},e.prototype.anyOfIgnoreCase=function(){var n=_e.apply(we,arguments);return n.length===0?gr(this):lt(this,function(t,a){return a.indexOf(t)!==-1},n,"")},e.prototype.startsWithAnyOfIgnoreCase=function(){var n=_e.apply(we,arguments);return n.length===0?gr(this):lt(this,function(t,a){return a.some(function(o){return t.indexOf(o)===0})},n,zn)},e.prototype.anyOf=function(){var n=this,t=_e.apply(we,arguments),a=this._cmp;try{t.sort(a)}catch{return He(this,hn)}if(t.length===0)return gr(this);var o=new this.Collection(this,function(){return Tn(t[0],t[t.length-1])});o._ondirectionchange=function(m){a=m==="next"?n._ascending:n._descending,t.sort(a)};var l=0;return o._addAlgorithm(function(m,g,h){for(var f=m.key;a(f,t[l])>0;)if(++l,l===t.length)return g(h),!1;return a(f,t[l])===0?!0:(g(function(){m.continue(t[l])}),!1)}),o},e.prototype.notEqual=function(n){return this.inAnyRange([[yi,n],[n,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},e.prototype.noneOf=function(){var n=_e.apply(we,arguments);if(n.length===0)return new this.Collection(this);try{n.sort(this._ascending)}catch{return He(this,hn)}var t=n.reduce(function(a,o){return a?a.concat([[a[a.length-1][1],o]]):[[yi,o]]},null);return t.push([n[n.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},e.prototype.inAnyRange=function(n,t){var a=this,o=this._cmp,l=this._ascending,m=this._descending,g=this._min,h=this._max;if(n.length===0)return gr(this);if(!n.every(function(E){return E[0]!==void 0&&E[1]!==void 0&&l(E[0],E[1])<=0}))return He(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",W.InvalidArgument);var f=!t||t.includeLowers!==!1,b=t&&t.includeUppers===!0;function w(E,R){for(var M=0,I=E.length;M<I;++M){var q=E[M];if(o(R[0],q[1])<0&&o(R[1],q[0])>0){q[0]=g(q[0],R[0]),q[1]=h(q[1],R[1]);break}}return M===I&&E.push(R),E}var x=l;function A(E,R){return x(E[0],R[0])}var y;try{y=n.reduce(w,[]),y.sort(A)}catch{return He(this,hn)}var k=0,_=b?function(E){return l(E,y[k][1])>0}:function(E){return l(E,y[k][1])>=0},S=f?function(E){return m(E,y[k][0])>0}:function(E){return m(E,y[k][0])>=0};function C(E){return!_(E)&&!S(E)}var $=_,T=new this.Collection(this,function(){return Tn(y[0][0],y[y.length-1][1],!f,!b)});return T._ondirectionchange=function(E){E==="next"?($=_,x=l):($=S,x=m),y.sort(A)},T._addAlgorithm(function(E,R,M){for(var I=E.key;$(I);)if(++k,k===y.length)return R(M),!1;return C(I)?!0:(a._cmp(I,y[k][1])===0||a._cmp(I,y[k][0])===0||R(function(){x===l?E.continue(y[k][0]):E.continue(y[k][1])}),!1)}),T},e.prototype.startsWithAnyOf=function(){var n=_e.apply(we,arguments);return n.every(function(t){return typeof t=="string"})?n.length===0?gr(this):this.inAnyRange(n.map(function(t){return[t,t+zn]})):He(this,"startsWithAnyOf() only works with strings")},e}();function zm(e){return $r(Io.prototype,function(t,a,o){if(this.db=e,this._ctx={table:t,index:a===":id"?null:a,or:o},this._cmp=this._ascending=re,this._descending=function(l,m){return re(m,l)},this._max=function(l,m){return re(l,m)>0?l:m},this._min=function(l,m){return re(l,m)<0?l:m},this._IDBKeyRange=e._deps.IDBKeyRange,!this._IDBKeyRange)throw new W.MissingAPI})}function Ye(e){return ge(function(n){return Cr(n),e(n.target.error),!1})}function Cr(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var mt="storagemutated",_i="x-storagemutated-1",En=Ar(null,mt),Zm=function(){function e(){}return e.prototype._lock=function(){return te(!H.global),++this._reculock,this._reculock===1&&!H.global&&(H.lockOwnerFor=this),this},e.prototype._unlock=function(){if(te(!H.global),--this._reculock===0)for(H.global||(H.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var n=this._blockedFuncs.shift();try{Ln(n[1],n[0])}catch{}}return this},e.prototype._locked=function(){return this._reculock&&H.lockOwnerFor!==this},e.prototype.create=function(n){var t=this;if(!this.mode)return this;var a=this.db.idbdb,o=this.db._state.dbOpenError;if(te(!this.idbtrans),!n&&!a)switch(o&&o.name){case"DatabaseClosedError":throw new W.DatabaseClosed(o);case"MissingAPIError":throw new W.MissingAPI(o.message,o);default:throw new W.OpenFailed(o)}if(!this.active)throw new W.TransactionInactive;return te(this._completion._state===null),n=this.idbtrans=n||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):a.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})),n.onerror=ge(function(l){Cr(l),t._reject(n.error)}),n.onabort=ge(function(l){Cr(l),t.active&&t._reject(new W.Abort(n.error)),t.active=!1,t.on("abort").fire(l)}),n.oncomplete=ge(function(){t.active=!1,t._resolve(),"mutatedParts"in n&&En.storagemutated.fire(n.mutatedParts)}),this},e.prototype._promise=function(n,t,a){var o=this;if(n==="readwrite"&&this.mode!=="readwrite")return pe(new W.ReadOnly("Transaction is readonly"));if(!this.active)return pe(new W.TransactionInactive);if(this._locked())return new O(function(m,g){o._blockedFuncs.push([function(){o._promise(n,t,a).then(m,g)},H])});if(a)return xn(function(){var m=new O(function(g,h){o._lock();var f=t(g,h,o);f&&f.then&&f.then(g,h)});return m.finally(function(){return o._unlock()}),m._lib=!0,m});var l=new O(function(m,g){var h=t(m,g,o);h&&h.then&&h.then(m,g)});return l._lib=!0,l},e.prototype._root=function(){return this.parent?this.parent._root():this},e.prototype.waitFor=function(n){var t=this._root(),a=O.resolve(n);if(t._waitingFor)t._waitingFor=t._waitingFor.then(function(){return a});else{t._waitingFor=a,t._waitingQueue=[];var o=t.idbtrans.objectStore(t.storeNames[0]);(function m(){for(++t._spinCount;t._waitingQueue.length;)t._waitingQueue.shift()();t._waitingFor&&(o.get(-1/0).onsuccess=m)})()}var l=t._waitingFor;return new O(function(m,g){a.then(function(h){return t._waitingQueue.push(ge(m.bind(null,h)))},function(h){return t._waitingQueue.push(ge(g.bind(null,h)))}).finally(function(){t._waitingFor===l&&(t._waitingFor=null)})})},e.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new W.Abort))},e.prototype.table=function(n){var t=this._memoizedTables||(this._memoizedTables={});if(K(t,n))return t[n];var a=this.schema[n];if(!a)throw new W.NotFound("Table "+n+" not part of transaction");var o=new this.db.Table(n,a,this);return o.core=this.db.core.table(n),t[n]=o,o},e}();function Um(e){return $r(Zm.prototype,function(t,a,o,l,m){var g=this;t!=="readonly"&&a.forEach(function(h){var f,b=(f=o[h])===null||f===void 0?void 0:f.yProps;b&&(a=a.concat(b.map(function(w){return w.updatesTable})))}),this.db=e,this.mode=t,this.storeNames=a,this.schema=o,this.chromeTransactionDurability=l,this.idbtrans=null,this.on=Ar(this,"complete","error","abort"),this.parent=m||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new O(function(h,f){g._resolve=h,g._reject=f}),this._completion.then(function(){g.active=!1,g.on.complete.fire()},function(h){var f=g.active;return g.active=!1,g.on.error.fire(h),g.parent?g.parent._reject(h):f&&g.idbtrans&&g.idbtrans.abort(),pe(h)})})}function Ti(e,n,t,a,o,l,m,g){return{name:e,keyPath:n,unique:t,multi:a,auto:o,compound:l,src:(t&&!m?"&":"")+(a?"*":"")+(o?"++":"")+Ro(n),type:g}}function Ro(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function Ei(e,n,t){return{name:e,primKey:n,indexes:t,mappedClass:null,idxByName:he(t,function(a){return[a.name,a]})}}function Gm(e){return e.length===1?e[0]:e}var jr=function(e){try{return e.only([[]]),jr=function(){return[[]]},[[]]}catch{return jr=function(){return zn},zn}};function Ai(e){return e==null?function(){}:typeof e=="string"?Vm(e):function(n){return se(n,e)}}function Vm(e){var n=e.split(".");return n.length===1?function(t){return t[e]}:function(t){return se(t,e)}}function Oo(e){return[].slice.call(e)}var Jm=0;function Nr(e){return e==null?":id":typeof e=="string"?e:"[".concat(e.join("+"),"]")}function Ym(e,n,t){function a(x,A){var y=Oo(x.objectStoreNames),k=y.length>0?A.objectStore(y[0]):{};return{schema:{name:x.name,tables:y.map(function(_){return A.objectStore(_)}).map(function(_){var S=_.keyPath,C=_.autoIncrement,$=p(S),T=S==null,E={},R={name:_.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:T,compound:$,keyPath:S,autoIncrement:C,unique:!0,extractKey:Ai(S)},indexes:Oo(_.indexNames).map(function(M){return _.index(M)}).map(function(M){var I=M.name,q=M.unique,ne=M.multiEntry,L=M.keyPath,B=p(L),U={name:I,compound:B,keyPath:L,unique:q,multiEntry:ne,extractKey:Ai(L)};return E[Nr(L)]=U,U}),getIndexByKeyPath:function(M){return E[Nr(M)]}};return E[":id"]=R.primaryKey,S!=null&&(E[Nr(S)]=R.primaryKey),R})},hasGetAll:y.length>0&&"getAll"in k&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:"getAllRecords"in k}}function o(x){if(x.type===3)return null;if(x.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var A=x.lower,y=x.upper,k=x.lowerOpen,_=x.upperOpen,S=A===void 0?y===void 0?null:n.upperBound(y,!!_):y===void 0?n.lowerBound(A,!!k):n.bound(A,y,!!k,!!_);return S}function l(x){var A=x.name;function y(S){var C=S.trans,$=S.type,T=S.keys,E=S.values,R=S.range;return new Promise(function(M,I){M=ge(M);var q=C.objectStore(A),ne=q.keyPath==null,L=$==="put"||$==="add";if(!L&&$!=="delete"&&$!=="deleteRange")throw new Error("Invalid operation type: "+$);var B=(T||E||{length:1}).length;if(T&&E&&T.length!==E.length)throw new Error("Given keys array must have same length as given values array.");if(B===0)return M({numFailures:0,failures:{},results:[],lastResult:void 0});var U,V=[],le=[],z=0,ye=function(Te){++z,Cr(Te)};if($==="deleteRange"){if(R.type===4)return M({numFailures:z,failures:le,results:[],lastResult:void 0});R.type===3?V.push(U=q.clear()):V.push(U=q.delete(o(R)))}else{var ze=L?ne?[E,T]:[E,null]:[T,null],Ke=ze[0],Vn=ze[1];if(L)for(var je=0;je<B;++je)V.push(U=Vn&&Vn[je]!==void 0?q[$](Ke[je],Vn[je]):q[$](Ke[je])),U.onerror=ye;else for(var je=0;je<B;++je)V.push(U=q[$](Ke[je])),U.onerror=ye}var Ze=function(Te){var Jn=Te.target.result;V.forEach(function(Qe,xt){return Qe.error!=null&&(le[xt]=Qe.error)}),M({numFailures:z,failures:le,results:$==="delete"?T:V.map(function(Qe){return Qe.result}),lastResult:Jn})};U.onerror=function(Te){ye(Te),Ze(Te)},U.onsuccess=Ze})}function k(S){var C=S.trans,$=S.values,T=S.query,E=S.reverse,R=S.unique;return new Promise(function(M,I){M=ge(M);var q=T.index,ne=T.range,L=C.objectStore(A),B=q.isPrimaryKey?L:L.index(q.name),U=E?R?"prevunique":"prev":R?"nextunique":"next",V=$||!("openKeyCursor"in B)?B.openCursor(o(ne),U):B.openKeyCursor(o(ne),U);V.onerror=Ye(I),V.onsuccess=ge(function(le){var z=V.result;if(!z){M(null);return}z.___id=++Jm,z.done=!1;var ye=z.continue.bind(z),ze=z.continuePrimaryKey;ze&&(ze=ze.bind(z));var Ke=z.advance.bind(z),Vn=function(){throw new Error("Cursor not started")},je=function(){throw new Error("Cursor not stopped")};z.trans=C,z.stop=z.continue=z.continuePrimaryKey=z.advance=Vn,z.fail=ge(I),z.next=function(){var Ze=this,Te=1;return this.start(function(){return Te--?Ze.continue():Ze.stop()}).then(function(){return Ze})},z.start=function(Ze){var Te=new Promise(function(Qe,xt){Qe=ge(Qe),V.onerror=Ye(xt),z.fail=xt,z.stop=function(Fg){z.stop=z.continue=z.continuePrimaryKey=z.advance=je,Qe(Fg)}}),Jn=function(){if(V.result)try{Ze()}catch(Qe){z.fail(Qe)}else z.done=!0,z.start=function(){throw new Error("Cursor behind last entry")},z.stop()};return V.onsuccess=ge(function(Qe){V.onsuccess=Jn,Jn()}),z.continue=ye,z.continuePrimaryKey=ze,z.advance=Ke,Jn(),Te},M(z)},I)})}function _(S,C){return function($){return new Promise(function(T,E){var R;T=ge(T);var M=$.trans,I=$.values,q=$.limit,ne=$.query,L=(R=$.direction)!==null&&R!==void 0?R:"next",B=q===1/0?void 0:q,U=ne.index,V=ne.range,le=M.objectStore(A),z=U.isPrimaryKey?le:le.index(U.name),ye=o(V);if(q===0)return T({result:[]});if(C){var ze={query:ye,count:B,direction:L},Ke=I?z.getAll(ze):z.getAllKeys(ze);Ke.onsuccess=function(Te){return T({result:Te.target.result})},Ke.onerror=Ye(E)}else if(S&&L==="next"){var Ke=I?z.getAll(ye,B):z.getAllKeys(ye,B);Ke.onsuccess=function(Jn){return T({result:Jn.target.result})},Ke.onerror=Ye(E)}else{var Vn=0,je=I||!("openKeyCursor"in z)?z.openCursor(ye,L):z.openKeyCursor(ye,L),Ze=[];je.onsuccess=function(){var Te=je.result;if(!Te)return T({result:Ze});if(Ze.push(I?Te.value:Te.primaryKey),++Vn===q)return T({result:Ze});Te.continue()},je.onerror=Ye(E)}})}}return{name:A,schema:x,mutate:y,getMany:function(S){var C=S.trans,$=S.keys;return new Promise(function(T,E){T=ge(T);for(var R=C.objectStore(A),M=$.length,I=new Array(M),q=0,ne=0,L,B=function(z){var ye=z.target;(I[ye._pos]=ye.result)!=null,++ne===q&&T(I)},U=Ye(E),V=0;V<M;++V){var le=$[V];le!=null&&(L=R.get($[V]),L._pos=V,L.onsuccess=B,L.onerror=U,++q)}q===0&&T(I)})},get:function(S){var C=S.trans,$=S.key;return new Promise(function(T,E){T=ge(T);var R=C.objectStore(A),M=R.get($);M.onsuccess=function(I){return T(I.target.result)},M.onerror=Ye(E)})},query:_(h,f),openCursor:k,count:function(S){var C=S.query,$=S.trans,T=C.index,E=C.range;return new Promise(function(R,M){var I=$.objectStore(A),q=T.isPrimaryKey?I:I.index(T.name),ne=o(E),L=ne?q.count(ne):q.count();L.onsuccess=ge(function(B){return R(B.target.result)}),L.onerror=Ye(M)})}}}var m=a(e,t),g=m.schema,h=m.hasGetAll,f=m.hasIdb3Features,b=g.tables.map(function(x){return l(x)}),w={};return b.forEach(function(x){return w[x.name]=x}),{stack:"dbcore",transaction:e.transaction.bind(e),table:function(x){var A=w[x];if(!A)throw new Error("Table '".concat(x,"' not found"));return w[x]},MIN_KEY:-1/0,MAX_KEY:jr(n),schema:g}}function Qm(e,n){return n.reduce(function(t,a){var o=a.create;return i(i({},t),o(t))},e)}function Xm(e,n,t,a){var o=t.IDBKeyRange;t.indexedDB;var l=Qm(Ym(n,o,a),e.dbcore);return{dbcore:l}}function gt(e,n){var t=n.db,a=Xm(e._middlewares,t,e._deps,n);e.core=a.dbcore,e.tables.forEach(function(o){var l=o.name;e.core.schema.tables.some(function(m){return m.name===l})&&(o.core=e.core.table(l),e[l]instanceof e.Table&&(e[l].core=o.core))})}function ht(e,n,t,a){t.forEach(function(o){var l=a[o];n.forEach(function(m){var g=Z(m,o);(!g||"value"in g&&g.value===void 0)&&(m===e.Transaction.prototype||m instanceof e.Transaction?Q(m,o,{get:function(){return this.table(o)},set:function(h){ue(this,o,{value:h,writable:!0,configurable:!0,enumerable:!0})}}):m[o]=new e.Table(o,l))})})}function $i(e,n){n.forEach(function(t){for(var a in t)t[a]instanceof e.Table&&delete t[a]})}function eg(e,n){return e._cfg.version-n._cfg.version}function ng(e,n,t,a){var o=e._dbSchema;t.objectStoreNames.contains("$meta")&&!o.$meta&&(o.$meta=Ei("$meta",Do("")[0],[]),e._storeNames.push("$meta"));var l=e._createTransaction("readwrite",e._storeNames,o);l.create(t),l._completion.catch(a);var m=l._reject.bind(l),g=H.transless||H;xn(function(){if(H.trans=l,H.transless=g,n===0)d(o).forEach(function(h){ji(t,h,o[h].primKey,o[h].indexes)}),gt(e,t),O.follow(function(){return e.on.populate.fire(l)}).catch(m);else return gt(e,t),tg(e,l,n).then(function(h){return ig(e,h,l,t)}).catch(m)})}function rg(e,n){Ko(e._dbSchema,n),n.db.version%10===0&&!n.objectStoreNames.contains("$meta")&&n.db.createObjectStore("$meta").add(Math.ceil(n.db.version/10-1),"version");var t=dt(e,e.idbdb,n);ft(e,e._dbSchema,n);for(var a=Ci(t,e._dbSchema),o=function(f){if(f.change.length||f.recreate)return console.warn("Unable to patch indexes of table ".concat(f.name," because it has changes on the type of index or primary key.")),{value:void 0};var b=n.objectStore(f.name);f.add.forEach(function(w){an&&console.debug("Dexie upgrade patch: Creating missing index ".concat(f.name,".").concat(w.src)),ct(b,w)})},l=0,m=a.change;l<m.length;l++){var g=m[l],h=o(g);if(typeof h=="object")return h.value}}function tg(e,n,t){return n.storeNames.includes("$meta")?n.table("$meta").get("version").then(function(a){return a!=null?a:t}):O.resolve(t)}function ig(e,n,t,a){var o=[],l=e._versions,m=e._dbSchema=dt(e,e.idbdb,a),g=l.filter(function(f){return f._cfg.version>=n});if(g.length===0)return O.resolve();g.forEach(function(f){o.push(function(){var b=m,w=f._cfg.dbschema;ft(e,b,a),ft(e,w,a),m=e._dbSchema=w;var x=Ci(b,w);x.add.forEach(function(C){ji(a,C[0],C[1].primKey,C[1].indexes)}),x.change.forEach(function(C){if(C.recreate)throw new W.Upgrade("Not yet support for changing primary key");var $=a.objectStore(C.name);C.add.forEach(function(T){return ct($,T)}),C.change.forEach(function(T){$.deleteIndex(T.name),ct($,T)}),C.del.forEach(function(T){return $.deleteIndex(T)})});var A=f._cfg.contentUpgrade;if(A&&f._cfg.version>n){gt(e,a),t._memoizedTables={};var y=fe(w);x.del.forEach(function(C){y[C]=b[C]}),$i(e,[e.Transaction.prototype]),ht(e,[e.Transaction.prototype],d(y),y),t.schema=y;var k=Be(A);k&&lr();var _,S=O.follow(function(){if(_=A(t),_&&k){var C=Sn.bind(null,null);_.then(C,C)}});return _&&typeof _.then=="function"?O.resolve(_):S.then(function(){return _})}}),o.push(function(b){var w=f._cfg.dbschema;ag(w,b),$i(e,[e.Transaction.prototype]),ht(e,[e.Transaction.prototype],e._storeNames,e._dbSchema),t.schema=e._dbSchema}),o.push(function(b){e.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(e.idbdb.version/10)===f._cfg.version?(e.idbdb.deleteObjectStore("$meta"),delete e._dbSchema.$meta,e._storeNames=e._storeNames.filter(function(w){return w!=="$meta"})):b.objectStore("$meta").put(f._cfg.version,"version"))})});function h(){return o.length?O.resolve(o.shift()(t.idbtrans)).then(h):O.resolve()}return h().then(function(){Ko(m,a)})}function Ci(e,n){var t={del:[],add:[],change:[]},a;for(a in e)n[a]||t.del.push(a);for(a in n){var o=e[a],l=n[a];if(!o)t.add.push([a,l]);else{var m={name:a,def:l,recreate:!1,del:[],add:[],change:[]};if(""+(o.primKey.keyPath||"")!=""+(l.primKey.keyPath||"")||o.primKey.auto!==l.primKey.auto)m.recreate=!0,t.change.push(m);else{var g=o.idxByName,h=l.idxByName,f=void 0;for(f in g)h[f]||m.del.push(f);for(f in h){var b=g[f],w=h[f];b?b.src!==w.src&&m.change.push(w):m.add.push(w)}(m.del.length>0||m.add.length>0||m.change.length>0)&&t.change.push(m)}}}return t}function ji(e,n,t,a){var o=e.db.createObjectStore(n,t.keyPath?{keyPath:t.keyPath,autoIncrement:t.auto}:{autoIncrement:t.auto});return a.forEach(function(l){return ct(o,l)}),o}function Ko(e,n){d(e).forEach(function(t){n.db.objectStoreNames.contains(t)||(an&&console.debug("Dexie: Creating missing table",t),ji(n,t,e[t].primKey,e[t].indexes))})}function ag(e,n){[].slice.call(n.db.objectStoreNames).forEach(function(t){return e[t]==null&&n.db.deleteObjectStore(t)})}function ct(e,n){e.createIndex(n.name,n.keyPath,{unique:n.unique,multiEntry:n.multi})}function dt(e,n,t){var a={},o=oe(n.objectStoreNames,0);return o.forEach(function(l){for(var m=t.objectStore(l),g=m.keyPath,h=Ti(Ro(g),g||"",!0,!1,!!m.autoIncrement,g&&typeof g!="string",!0),f=[],b=0;b<m.indexNames.length;++b){var w=m.index(m.indexNames[b]);g=w.keyPath;var x=Ti(w.name,g,!!w.unique,!!w.multiEntry,!1,g&&typeof g!="string",!1);f.push(x)}a[l]=Ei(l,h,f)}),a}function og(e,n,t){e.verno=n.version/10;var a=e._dbSchema=dt(e,n,t);e._storeNames=oe(n.objectStoreNames,0),ht(e,[e._allTables],d(a),a)}function ug(e,n){var t=dt(e,e.idbdb,n),a=Ci(t,e._dbSchema);return!(a.add.length||a.change.some(function(o){return o.add.length||o.change.length}))}function ft(e,n,t){for(var a=t.db.objectStoreNames,o=0;o<a.length;++o){var l=a[o],m=t.objectStore(l);e._hasGetAll="getAll"in m;for(var g=0;g<m.indexNames.length;++g){var h=m.indexNames[g],f=m.index(h).keyPath,b=typeof f=="string"?f:"["+oe(f).join("+")+"]";if(n[l]){var w=n[l].idxByName[b];w&&(w.name=h,delete n[l].idxByName[b],n[l].idxByName[h]=w)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&s.WorkerGlobalScope&&s instanceof s.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function Do(e){return e.split(",").map(function(n,t){var a,o=n.split(":"),l=(a=o[1])===null||a===void 0?void 0:a.trim();n=o[0].trim();var m=n.replace(/([&*]|\+\+)/g,""),g=/^\[/.test(m)?m.match(/^\[(.*)\]$/)[1].split("+"):m;return Ti(m,g||null,/\&/.test(n),/\*/.test(n),/\+\+/.test(n),p(g),t===0,l)})}var sg=function(){function e(){}return e.prototype._createTableSchema=function(n,t,a){return Ei(n,t,a)},e.prototype._parseIndexSyntax=function(n){return Do(n)},e.prototype._parseStoresSpec=function(n,t){var a=this;d(n).forEach(function(o){if(n[o]!==null){var l=a._parseIndexSyntax(n[o]),m=l.shift();if(!m)throw new W.Schema("Invalid schema for table "+o+": "+n[o]);if(m.unique=!0,m.multi)throw new W.Schema("Primary key cannot be multiEntry*");l.forEach(function(h){if(h.auto)throw new W.Schema("Only primary key can be marked as autoIncrement (++)");if(!h.keyPath)throw new W.Schema("Index must have a name and cannot be an empty string")});var g=a._createTableSchema(o,m,l);t[o]=g}})},e.prototype.stores=function(n){var t=this.db;this._cfg.storesSource=this._cfg.storesSource?v(this._cfg.storesSource,n):n;var a=t._versions,o={},l={};return a.forEach(function(m){v(o,m._cfg.storesSource),l=m._cfg.dbschema={},m._parseStoresSpec(o,l)}),t._dbSchema=l,$i(t,[t._allTables,t,t.Transaction.prototype]),ht(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],d(l),l),t._storeNames=d(l),this},e.prototype.upgrade=function(n){return this._cfg.contentUpgrade=si(this._cfg.contentUpgrade||ie,n),this},e}();function lg(e){return $r(sg.prototype,function(t){this.db=e,this._cfg={version:t,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}var Pr=mg();function mg(){if(typeof FinalizationRegistry<"u"&&typeof WeakRef<"u"){var e=new Set,n=new FinalizationRegistry(function(m){e.delete(m)}),t=function(){return Array.from(e).map(function(m){return m.deref()}).filter(function(m){return m!==void 0})},a=function(m){var g=new WeakRef(m._novip);if(e.add(g),n.register(m._novip,g,g),e.size>m._options.maxConnections){var h=e.values().next().value;e.delete(h),n.unregister(h)}},o=function(m){if(m)for(var g=e.values(),h=g.next();!h.done;){var f=h.value;if(f.deref()===m._novip){e.delete(f),n.unregister(f);return}h=g.next()}};return{toArray:t,add:a,remove:o}}else{var l=[],t=function(){return l},a=function(f){l.push(f._novip)},o=function(f){if(f){var b=l.indexOf(f._novip);b!==-1&&l.splice(b,1)}};return{toArray:t,add:a,remove:o}}}function Ni(e,n){var t=e._dbNamesDB;return t||(t=e._dbNamesDB=new cn(it,{addons:[],indexedDB:e,IDBKeyRange:n}),t.version(1).stores({dbnames:"name"})),t.table("dbnames")}function Pi(e){return e&&typeof e.databases=="function"}function gg(e){var n=e.indexedDB,t=e.IDBKeyRange;return Pi(n)?Promise.resolve(n.databases()).then(function(a){return a.map(function(o){return o.name}).filter(function(o){return o!==it})}):Ni(n,t).toCollection().primaryKeys()}function hg(e,n){var t=e.indexedDB,a=e.IDBKeyRange;!Pi(t)&&n!==it&&Ni(t,a).put({name:n}).catch(ie)}function cg(e,n){var t=e.indexedDB,a=e.IDBKeyRange;!Pi(t)&&n!==it&&Ni(t,a).delete(n).catch(ie)}function Mi(e){return xn(function(){return H.letThrough=!0,e()})}function dg(){var e=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!e||!indexedDB.databases)return Promise.resolve();var n;return new Promise(function(t){var a=function(){return indexedDB.databases().finally(t)};n=setInterval(a,100),a()}).finally(function(){return clearInterval(n)})}var Ii;function Ri(e){return!("from"in e)}var Ce=function(e,n){if(this)v(this,arguments.length?{d:1,from:e,to:arguments.length>1?n:e}:{d:0});else{var t=new Ce;return e&&"d"in e&&v(t,e),t}};P(Ce.prototype,(Ii={add:function(e){return Ir(this,e),this},addKey:function(e){return Mr(this,e,e),this},addKeys:function(e){var n=this;return e.forEach(function(t){return Mr(n,t,t)}),this},hasKey:function(e){var n=pt(this).next(e).value;return n&&re(n.from,e)<=0&&re(n.to,e)>=0}},Ii[kn]=function(){return pt(this)},Ii));function Mr(e,n,t){var a=re(n,t);if(!isNaN(a)){if(a>0)throw RangeError();if(Ri(e))return v(e,{from:n,to:t,d:1});var o=e.l,l=e.r;if(re(t,e.from)<0)return o?Mr(o,n,t):e.l={from:n,to:t,d:1,l:null,r:null},qo(e);if(re(n,e.to)>0)return l?Mr(l,n,t):e.r={from:n,to:t,d:1,l:null,r:null},qo(e);re(n,e.from)<0&&(e.from=n,e.l=null,e.d=l?l.d+1:1),re(t,e.to)>0&&(e.to=t,e.r=null,e.d=e.l?e.l.d+1:1);var m=!e.r;o&&!e.l&&Ir(e,o),l&&m&&Ir(e,l)}}function Ir(e,n){function t(a,o){var l=o.from,m=o.to,g=o.l,h=o.r;Mr(a,l,m),g&&t(a,g),h&&t(a,h)}Ri(n)||t(e,n)}function Fo(e,n){var t=pt(n),a=t.next();if(a.done)return!1;for(var o=a.value,l=pt(e),m=l.next(o.from),g=m.value;!a.done&&!m.done;){if(re(g.from,o.to)<=0&&re(g.to,o.from)>=0)return!0;re(o.from,g.from)<0?o=(a=t.next(g.from)).value:g=(m=l.next(o.from)).value}return!1}function pt(e){var n=Ri(e)?null:{s:0,n:e};return{next:function(t){for(var a=arguments.length>0;n;)switch(n.s){case 0:if(n.s=1,a)for(;n.n.l&&re(t,n.n.from)<0;)n={up:n,n:n.n.l,s:1};else for(;n.n.l;)n={up:n,n:n.n.l,s:1};case 1:if(n.s=2,!a||re(t,n.n.to)<=0)return{value:n.n,done:!1};case 2:if(n.n.r){n.s=3,n={up:n,n:n.n.r,s:0};continue}case 3:n=n.up}return{done:!0}}}}function qo(e){var n,t,a=(((n=e.r)===null||n===void 0?void 0:n.d)||0)-(((t=e.l)===null||t===void 0?void 0:t.d)||0),o=a>1?"r":a<-1?"l":"";if(o){var l=o==="r"?"l":"r",m=i({},e),g=e[o];e.from=g.from,e.to=g.to,e[o]=g[o],m[o]=g[l],e[l]=m,m.d=Bo(m)}e.d=Bo(e)}function Bo(e){var n=e.r,t=e.l;return(n?t?Math.max(n.d,t.d):n.d:t?t.d:0)+1}function vt(e,n){return d(n).forEach(function(t){e[t]?Ir(e[t],n[t]):e[t]=Se(n[t])}),e}function Oi(e,n){return e.all||n.all||Object.keys(e).some(function(t){return n[t]&&Fo(n[t],e[t])})}var Un={},Ki={},Di=!1;function bt(e,n){vt(Ki,e),Di||(Di=!0,setTimeout(function(){Di=!1;var t=Ki;Ki={},Fi(t,!1)},0))}function Fi(e,n){n===void 0&&(n=!1);var t=new Set;if(e.all)for(var a=0,o=Object.values(Un);a<o.length;a++){var l=o[a];Ho(l,e,t,n)}else for(var m in e){var g=/^idb\:\/\/(.*)\/(.*)\//.exec(m);if(g){var h=g[1],f=g[2],l=Un["idb://".concat(h,"/").concat(f)];l&&Ho(l,e,t,n)}}t.forEach(function(b){return b()})}function Ho(e,n,t,a){for(var o=[],l=0,m=Object.entries(e.queries.query);l<m.length;l++){for(var g=m[l],h=g[0],f=g[1],b=[],w=0,x=f;w<x.length;w++){var A=x[w];Oi(n,A.obsSet)?A.subscribers.forEach(function(S){return t.add(S)}):a&&b.push(A)}a&&o.push([h,b])}if(a)for(var y=0,k=o;y<k.length;y++){var _=k[y],h=_[0],b=_[1];e.queries.query[h]=b}}function fg(e){var n=e._state,t=e._deps.indexedDB;if(n.isBeingOpened||e.idbdb)return n.dbReadyPromise.then(function(){return n.dbOpenError?pe(n.dbOpenError):e});n.isBeingOpened=!0,n.dbOpenError=null,n.openComplete=!1;var a=n.openCanceller,o=Math.round(e.verno*10),l=!1;function m(){if(n.openCanceller!==a)throw new W.DatabaseClosed("db.open() was cancelled")}var g=n.dbReadyResolve,h=null,f=!1,b=function(){return new O(function(x,A){if(m(),!t)throw new W.MissingAPI;var y=e.name,k=n.autoSchema||!o?t.open(y):t.open(y,o);if(!k)throw new W.MissingAPI;k.onerror=Ye(A),k.onblocked=ge(e._fireOnBlocked),k.onupgradeneeded=ge(function(_){if(h=k.transaction,n.autoSchema&&!e._options.allowEmptyDB){k.onerror=Cr,h.abort(),k.result.close();var S=t.deleteDatabase(y);S.onsuccess=S.onerror=ge(function(){A(new W.NoSuchDatabase("Database ".concat(y," doesnt exist")))})}else{h.onerror=Ye(A);var C=_.oldVersion>Math.pow(2,62)?0:_.oldVersion;f=C<1,e.idbdb=k.result,l&&rg(e,h),ng(e,C/10,h,A)}},A),k.onsuccess=ge(function(){h=null;var _=e.idbdb=k.result,S=oe(_.objectStoreNames);if(S.length>0)try{var C=_.transaction(Gm(S),"readonly");if(n.autoSchema)og(e,_,C);else if(ft(e,e._dbSchema,C),!ug(e,C)&&!l)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),_.close(),o=_.version+1,l=!0,x(b());gt(e,C)}catch{}Pr.add(e),_.onversionchange=ge(function($){n.vcFired=!0,e.on("versionchange").fire($)}),_.onclose=ge(function(){e.close({disableAutoOpen:!1})}),f&&hg(e._deps,y),x()},A)}).catch(function(x){switch(x==null?void 0:x.name){case"UnknownError":if(n.PR1398_maxLoop>0)return n.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),b();break;case"VersionError":if(o>0)return o=0,b();break}return O.reject(x)})},w=typeof navigator<"u"&&!!t&&t===s.indexedDB;return O.race([a,(w?dg():O.resolve()).then(b)]).then(function(){return m(),n.onReadyBeingFired=[],O.resolve(Mi(function(){return e.on.ready.fire(e.vip)})).then(function x(){if(n.onReadyBeingFired.length>0){var A=n.onReadyBeingFired.reduce(si,ie);return n.onReadyBeingFired=[],O.resolve(Mi(function(){return A(e.vip)})).then(x)}})}).finally(function(){n.openCanceller===a&&(n.onReadyBeingFired=null,n.isBeingOpened=!1)}).catch(function(x){n.dbOpenError=x;try{h&&h.abort()}catch{}return a===n.openCanceller&&e._close(),pe(x)}).finally(function(){n.openComplete=!0,g()}).then(function(){if(f){var x={};e.tables.forEach(function(A){A.schema.indexes.forEach(function(y){y.name&&(x["idb://".concat(e.name,"/").concat(A.name,"/").concat(y.name)]=new Ce(-1/0,[[[]]]))}),x["idb://".concat(e.name,"/").concat(A.name,"/")]=x["idb://".concat(e.name,"/").concat(A.name,"/:dels")]=new Ce(-1/0,[[[]]])}),En(mt).fire(x),Fi(x,!0)}return e})}function qi(e){var n=function(m){return e.next(m)},t=function(m){return e.throw(m)},a=l(n),o=l(t);function l(m){return function(g){var h=m(g),f=h.value;return h.done?f:!f||typeof f.then!="function"?p(f)?Promise.all(f).then(a,o):a(f):f.then(a,o)}}return l(n)()}function pg(e,n,t){var a=arguments.length;if(a<2)throw new W.InvalidArgument("Too few arguments");for(var o=new Array(a-1);--a;)o[a-1]=arguments[a];t=o.pop();var l=Oe(o);return[e,l,t]}function Wo(e,n,t,a,o){return O.resolve().then(function(){var l=H.transless||H,m=e._createTransaction(n,t,e._dbSchema,a);m.explicit=!0;var g={trans:m,transless:l};if(a)m.idbtrans=a.idbtrans;else try{m.create(),m.idbtrans._explicit=!0,e._state.PR1398_maxLoop=3}catch(w){return w.name===mn.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e.close({disableAutoOpen:!1}),e.open().then(function(){return Wo(e,n,t,null,o)})):pe(w)}var h=Be(o);h&&lr();var f,b=O.follow(function(){if(f=o.call(m,m),f)if(h){var w=Sn.bind(null,null);f.then(w,w)}else typeof f.next=="function"&&typeof f.throw=="function"&&(f=qi(f))},g);return(f&&typeof f.then=="function"?O.resolve(f).then(function(w){return m.active?w:pe(new W.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):b.then(function(){return f})).then(function(w){return a&&m._resolve(),m._completion.then(function(){return w})}).catch(function(w){return m._reject(w),pe(w)})})}function yt(e,n,t){for(var a=p(e)?e.slice():[e],o=0;o<t;++o)a.push(n);return a}function vg(e){return i(i({},e),{table:function(n){var t=e.table(n),a=t.schema,o=Object.create(null),l=[];function m(k,_,S){var C=Nr(k),$=o[C]=o[C]||[],T=k==null?0:typeof k=="string"?1:k.length,E=_>0,R=i(i({},S),{name:E?"".concat(C,"(virtual-from:").concat(S.name,")"):S.name,lowLevelIndex:S,isVirtual:E,keyTail:_,keyLength:T,extractKey:Ai(k),unique:!E&&S.unique});if($.push(R),R.isPrimaryKey||l.push(R),T>1){var M=T===2?k[0]:k.slice(0,T-1);m(M,_+1,S)}return $.sort(function(I,q){return I.keyTail-q.keyTail}),R}var g=m(a.primaryKey.keyPath,0,a.primaryKey);o[":id"]=[g];for(var h=0,f=a.indexes;h<f.length;h++){var b=f[h];m(b.keyPath,0,b)}function w(k){var _=o[Nr(k)];return _&&_[0]}function x(k,_){return{type:k.type===1?2:k.type,lower:yt(k.lower,k.lowerOpen?e.MAX_KEY:e.MIN_KEY,_),lowerOpen:!0,upper:yt(k.upper,k.upperOpen?e.MIN_KEY:e.MAX_KEY,_),upperOpen:!0}}function A(k){var _=k.query.index;return _.isVirtual?i(i({},k),{query:{index:_.lowLevelIndex,range:x(k.query.range,_.keyTail)}}):k}var y=i(i({},t),{schema:i(i({},a),{primaryKey:g,indexes:l,getIndexByKeyPath:w}),count:function(k){return t.count(A(k))},query:function(k){return t.query(A(k))},openCursor:function(k){var _=k.query.index,S=_.keyTail,C=_.isVirtual,$=_.keyLength;if(!C)return t.openCursor(k);function T(E){function R(I){I!=null?E.continue(yt(I,k.reverse?e.MAX_KEY:e.MIN_KEY,S)):k.unique?E.continue(E.key.slice(0,$).concat(k.reverse?e.MIN_KEY:e.MAX_KEY,S)):E.continue()}var M=Object.create(E,{continue:{value:R},continuePrimaryKey:{value:function(I,q){E.continuePrimaryKey(yt(I,e.MAX_KEY,S),q)}},primaryKey:{get:function(){return E.primaryKey}},key:{get:function(){var I=E.key;return $===1?I[0]:I.slice(0,$)}},value:{get:function(){return E.value}}});return M}return t.openCursor(A(k)).then(function(E){return E&&T(E)})}});return y}})}var bg={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:vg};function Bi(e,n,t,a){return t=t||{},a=a||"",d(e).forEach(function(o){if(!K(n,o))t[a+o]=void 0;else{var l=e[o],m=n[o];if(typeof l=="object"&&typeof m=="object"&&l&&m){var g=yn(l),h=yn(m);g!==h?t[a+o]=n[o]:g==="Object"?Bi(l,m,t,a+o+"."):l!==m&&(t[a+o]=n[o])}else l!==m&&(t[a+o]=n[o])}}),d(n).forEach(function(o){K(e,o)||(t[a+o]=n[o])}),t}function Hi(e,n){return n.type==="delete"?n.keys:n.keys||n.values.map(e.extractKey)}var yg={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(e){return i(i({},e),{table:function(n){var t=e.table(n),a=t.schema.primaryKey,o=i(i({},t),{mutate:function(l){var m=H.trans,g=m.table(n).hook,h=g.deleting,f=g.creating,b=g.updating;switch(l.type){case"add":if(f.fire===ie)break;return m._promise("readwrite",function(){return w(l)},!0);case"put":if(f.fire===ie&&b.fire===ie)break;return m._promise("readwrite",function(){return w(l)},!0);case"delete":if(h.fire===ie)break;return m._promise("readwrite",function(){return w(l)},!0);case"deleteRange":if(h.fire===ie)break;return m._promise("readwrite",function(){return x(l)},!0)}return t.mutate(l);function w(y){var k=H.trans,_=y.keys||Hi(a,y);if(!_)throw new Error("Keys missing");return y=y.type==="add"||y.type==="put"?i(i({},y),{keys:_}):i({},y),y.type!=="delete"&&(y.values=u([],y.values,!0)),y.keys&&(y.keys=u([],y.keys,!0)),kg(t,y,_).then(function(S){var C=_.map(function($,T){var E=S[T],R={onerror:null,onsuccess:null};if(y.type==="delete")h.fire.call(R,$,E,k);else if(y.type==="add"||E===void 0){var M=f.fire.call(R,$,y.values[T],k);$==null&&M!=null&&($=M,y.keys[T]=$,a.outbound||F(y.values[T],a.keyPath,$))}else{var I=Bi(E,y.values[T]),q=b.fire.call(R,I,$,E,k);if(q){var ne=y.values[T];Object.keys(q).forEach(function(L){K(ne,L)?ne[L]=q[L]:F(ne,L,q[L])})}}return R});return t.mutate(y).then(function($){for(var T=$.failures,E=$.results,R=$.numFailures,M=$.lastResult,I=0;I<_.length;++I){var q=E?E[I]:_[I],ne=C[I];q==null?ne.onerror&&ne.onerror(T[I]):ne.onsuccess&&ne.onsuccess(y.type==="put"&&S[I]?y.values[I]:q)}return{failures:T,results:E,numFailures:R,lastResult:M}}).catch(function($){return C.forEach(function(T){return T.onerror&&T.onerror($)}),Promise.reject($)})})}function x(y){return A(y.trans,y.range,1e4)}function A(y,k,_){return t.query({trans:y,values:!1,query:{index:a,range:k},limit:_}).then(function(S){var C=S.result;return w({type:"delete",keys:C,trans:y}).then(function($){return $.numFailures>0?Promise.reject($.failures[0]):C.length<_?{failures:[],numFailures:0,lastResult:void 0}:A(y,i(i({},k),{lower:C[C.length-1],lowerOpen:!0}),_)})})}}});return o}})}};function kg(e,n,t){return n.type==="add"?Promise.resolve([]):e.getMany({trans:n.trans,keys:t,cache:"immutable"})}function Lo(e,n,t){try{if(!n||n.keys.length<e.length)return null;for(var a=[],o=0,l=0;o<n.keys.length&&l<e.length;++o)re(n.keys[o],e[l])===0&&(a.push(t?ce(n.values[o]):n.values[o]),++l);return a.length===e.length?a:null}catch{return null}}var wg={stack:"dbcore",level:-1,create:function(e){return{table:function(n){var t=e.table(n);return i(i({},t),{getMany:function(a){if(!a.cache)return t.getMany(a);var o=Lo(a.keys,a.trans._cache,a.cache==="clone");return o?O.resolve(o):t.getMany(a).then(function(l){return a.trans._cache={keys:a.keys,values:a.cache==="clone"?ce(l):l},l})},mutate:function(a){return a.type!=="add"&&(a.trans._cache=null),t.mutate(a)}})}}}};function zo(e,n){return e.trans.mode==="readonly"&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!=="disabled"&&!n.schema.primaryKey.outbound}function Zo(e,n){switch(e){case"query":return n.values&&!n.unique;case"get":return!1;case"getMany":return!1;case"count":return!1;case"openCursor":return!1}}var xg={stack:"dbcore",level:0,name:"Observability",create:function(e){var n=e.schema.name,t=new Ce(e.MIN_KEY,e.MAX_KEY);return i(i({},e),{transaction:function(a,o,l){if(H.subscr&&o!=="readonly")throw new W.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(H.querier));return e.transaction(a,o,l)},table:function(a){var o=e.table(a),l=o.schema,m=l.primaryKey,g=l.indexes,h=m.extractKey,f=m.outbound,b=m.autoIncrement&&g.filter(function(y){return y.compound&&y.keyPath.includes(m.keyPath)}),w=i(i({},o),{mutate:function(y){var k,_,S=y.trans,C=y.mutatedParts||(y.mutatedParts={}),$=function(U){var V="idb://".concat(n,"/").concat(a,"/").concat(U);return C[V]||(C[V]=new Ce)},T=$(""),E=$(":dels"),R=y.type,M=y.type==="deleteRange"?[y.range]:y.type==="delete"?[y.keys]:y.values.length<50?[Hi(m,y).filter(function(U){return U!=null}),y.values]:[],I=M[0],q=M[1],ne=y.trans._cache;if(p(I)){T.addKeys(I);var L=R==="delete"||I.length===q.length?Lo(I,ne):null;L||E.addKeys(I),(L||q)&&Sg($,l,L,q)}else if(I){var B={from:(k=I.lower)!==null&&k!==void 0?k:e.MIN_KEY,to:(_=I.upper)!==null&&_!==void 0?_:e.MAX_KEY};E.add(B),T.add(B)}else T.add(t),E.add(t),l.indexes.forEach(function(U){return $(U.name).add(t)});return o.mutate(y).then(function(U){return I&&(y.type==="add"||y.type==="put")&&(T.addKeys(U.results),b&&b.forEach(function(V){for(var le=y.values.map(function(Ke){return V.extractKey(Ke)}),z=V.keyPath.findIndex(function(Ke){return Ke===m.keyPath}),ye=0,ze=U.results.length;ye<ze;++ye)le[ye][z]=U.results[ye];$(V.name).addKeys(le)})),S.mutatedParts=vt(S.mutatedParts||{},C),U})}}),x=function(y){var k,_,S=y.query,C=S.index,$=S.range;return[C,new Ce((k=$.lower)!==null&&k!==void 0?k:e.MIN_KEY,(_=$.upper)!==null&&_!==void 0?_:e.MAX_KEY)]},A={get:function(y){return[m,new Ce(y.key)]},getMany:function(y){return[m,new Ce().addKeys(y.keys)]},count:x,query:x,openCursor:x};return d(A).forEach(function(y){w[y]=function(k){var _=H.subscr,S=!!_,C=zo(H,o)&&Zo(y,k),$=C?k.obsSet={}:_;if(S){var T=function(L){var B="idb://".concat(n,"/").concat(a,"/").concat(L);return $[B]||($[B]=new Ce)},E=T(""),R=T(":dels"),M=A[y](k),I=M[0],q=M[1];if(y==="query"&&I.isPrimaryKey&&!k.values?R.add(q):T(I.name||"").add(q),!I.isPrimaryKey)if(y==="count")R.add(t);else{var ne=y==="query"&&f&&k.values&&o.query(i(i({},k),{values:!1}));return o[y].apply(this,arguments).then(function(L){if(y==="query"){if(f&&k.values)return ne.then(function(le){var z=le.result;return E.addKeys(z),L});var B=k.values?L.result.map(h):L.result;k.values?E.addKeys(B):R.addKeys(B)}else if(y==="openCursor"){var U=L,V=k.values;return U&&Object.create(U,{key:{get:function(){return R.addKey(U.primaryKey),U.key}},primaryKey:{get:function(){var le=U.primaryKey;return R.addKey(le),le}},value:{get:function(){return V&&E.addKey(U.primaryKey),U.value}}})}return L})}}return o[y].apply(this,arguments)}}),w}})}};function Sg(e,n,t,a){function o(l){var m=e(l.name||"");function g(f){return f!=null?l.extractKey(f):null}var h=function(f){return l.multiEntry&&p(f)?f.forEach(function(b){return m.addKey(b)}):m.addKey(f)};(t||a).forEach(function(f,b){var w=t&&g(t[b]),x=a&&g(a[b]);re(w,x)!==0&&(w!=null&&h(w),x!=null&&h(x))})}n.indexes.forEach(o)}function Uo(e,n,t){if(t.numFailures===0)return n;if(n.type==="deleteRange")return null;var a=n.keys?n.keys.length:"values"in n&&n.values?n.values.length:1;if(t.numFailures===a)return null;var o=i({},n);return p(o.keys)&&(o.keys=o.keys.filter(function(l,m){return!(m in t.failures)})),"values"in o&&p(o.values)&&(o.values=o.values.filter(function(l,m){return!(m in t.failures)})),o}function _g(e,n){return n.lower===void 0?!0:n.lowerOpen?re(e,n.lower)>0:re(e,n.lower)>=0}function Tg(e,n){return n.upper===void 0?!0:n.upperOpen?re(e,n.upper)<0:re(e,n.upper)<=0}function Wi(e,n){return _g(e,n)&&Tg(e,n)}function Go(e,n,t,a,o,l){if(!t||t.length===0)return e;var m=n.query.index,g=m.multiEntry,h=n.query.range,f=a.schema.primaryKey,b=f.extractKey,w=m.extractKey,x=(m.lowLevelIndex||m).extractKey,A=t.reduce(function(k,_){var S=k,C=[];if(_.type==="add"||_.type==="put")for(var $=new Ce,T=_.values.length-1;T>=0;--T){var E=_.values[T],R=b(E);if(!$.hasKey(R)){var M=w(E);(g&&p(M)?M.some(function(B){return Wi(B,h)}):Wi(M,h))&&($.addKey(R),C.push(E))}}switch(_.type){case"add":{var I=new Ce().addKeys(n.values?k.map(function(B){return b(B)}):k);S=k.concat(n.values?C.filter(function(B){var U=b(B);return I.hasKey(U)?!1:(I.addKey(U),!0)}):C.map(function(B){return b(B)}).filter(function(B){return I.hasKey(B)?!1:(I.addKey(B),!0)}));break}case"put":{var q=new Ce().addKeys(_.values.map(function(B){return b(B)}));S=k.filter(function(B){return!q.hasKey(n.values?b(B):B)}).concat(n.values?C:C.map(function(B){return b(B)}));break}case"delete":var ne=new Ce().addKeys(_.keys);S=k.filter(function(B){return!ne.hasKey(n.values?b(B):B)});break;case"deleteRange":var L=_.range;S=k.filter(function(B){return!Wi(b(B),L)});break}return S},e);if(A===e)return e;var y=function(k,_){return re(x(k),x(_))||re(b(k),b(_))};return A.sort(n.direction==="prev"||n.direction==="prevunique"?function(k,_){return y(_,k)}:y),n.limit&&n.limit<1/0&&(A.length>n.limit?A.length=n.limit:e.length===n.limit&&A.length<n.limit&&(o.dirty=!0)),l?Object.freeze(A):A}function Vo(e,n){return re(e.lower,n.lower)===0&&re(e.upper,n.upper)===0&&!!e.lowerOpen==!!n.lowerOpen&&!!e.upperOpen==!!n.upperOpen}function Eg(e,n,t,a){if(e===void 0)return n!==void 0?-1:0;if(n===void 0)return 1;var o=re(e,n);if(o===0){if(t&&a)return 0;if(t)return 1;if(a)return-1}return o}function Ag(e,n,t,a){if(e===void 0)return n!==void 0?1:0;if(n===void 0)return-1;var o=re(e,n);if(o===0){if(t&&a)return 0;if(t)return-1;if(a)return 1}return o}function $g(e,n){return Eg(e.lower,n.lower,e.lowerOpen,n.lowerOpen)<=0&&Ag(e.upper,n.upper,e.upperOpen,n.upperOpen)>=0}function Cg(e,n,t,a){var o,l=Un["idb://".concat(e,"/").concat(n)];if(!l)return[];var m=l.queries[t];if(!m)return[null,!1,l,null];var g=a.query?a.query.index.name:null,h=m[g||""];if(!h)return[null,!1,l,null];switch(t){case"query":var f=(o=a.direction)!==null&&o!==void 0?o:"next",b=h.find(function(A){var y;return A.req.limit===a.limit&&A.req.values===a.values&&((y=A.req.direction)!==null&&y!==void 0?y:"next")===f&&Vo(A.req.query.range,a.query.range)});if(b)return[b,!0,l,h];var w=h.find(function(A){var y,k="limit"in A.req?A.req.limit:1/0;return k>=a.limit&&((y=A.req.direction)!==null&&y!==void 0?y:"next")===f&&(a.values?A.req.values:!0)&&$g(A.req.query.range,a.query.range)});return[w,!1,l,h];case"count":var x=h.find(function(A){return Vo(A.req.query.range,a.query.range)});return[x,!!x,l,h]}}function jg(e,n,t,a){e.subscribers.add(t),a.addEventListener("abort",function(){e.subscribers.delete(t),e.subscribers.size===0&&Ng(e,n)})}function Ng(e,n){setTimeout(function(){e.subscribers.size===0&&qe(n,e)},3e3)}var Pg={stack:"dbcore",level:0,name:"Cache",create:function(e){var n=e.schema.name,t=i(i({},e),{transaction:function(a,o,l){var m=e.transaction(a,o,l);if(o==="readwrite"){var g=new AbortController,h=g.signal,f=function(b){return function(){if(g.abort(),o==="readwrite"){for(var w=new Set,x=0,A=a;x<A.length;x++){var y=A[x],k=Un["idb://".concat(n,"/").concat(y)];if(k){var _=e.table(y),S=k.optimisticOps.filter(function(V){return V.trans===m});if(m._explicit&&b&&m.mutatedParts)for(var C=0,$=Object.values(k.queries.query);C<$.length;C++)for(var T=$[C],E=0,R=T.slice();E<R.length;E++){var M=R[E];Oi(M.obsSet,m.mutatedParts)&&(qe(T,M),M.subscribers.forEach(function(V){return w.add(V)}))}else if(S.length>0){k.optimisticOps=k.optimisticOps.filter(function(V){return V.trans!==m});for(var I=0,q=Object.values(k.queries.query);I<q.length;I++)for(var T=q[I],ne=0,L=T.slice();ne<L.length;ne++){var M=L[ne];if(M.res!=null&&m.mutatedParts)if(b&&!M.dirty){var B=Object.isFrozen(M.res),U=Go(M.res,M.req,S,_,M,B);M.dirty?(qe(T,M),M.subscribers.forEach(function(z){return w.add(z)})):U!==M.res&&(M.res=U,M.promise=O.resolve({result:U}))}else M.dirty&&qe(T,M),M.subscribers.forEach(function(z){return w.add(z)})}}}}w.forEach(function(V){return V()})}}};m.addEventListener("abort",f(!1),{signal:h}),m.addEventListener("error",f(!1),{signal:h}),m.addEventListener("complete",f(!0),{signal:h})}return m},table:function(a){var o=e.table(a),l=o.schema.primaryKey,m=i(i({},o),{mutate:function(g){var h=H.trans;if(l.outbound||h.db._options.cache==="disabled"||h.explicit||h.idbtrans.mode!=="readwrite")return o.mutate(g);var f=Un["idb://".concat(n,"/").concat(a)];if(!f)return o.mutate(g);var b=o.mutate(g);return(g.type==="add"||g.type==="put")&&(g.values.length>=50||Hi(l,g).some(function(w){return w==null}))?b.then(function(w){var x=i(i({},g),{values:g.values.map(function(y,k){var _;if(w.failures[k])return y;var S=!((_=l.keyPath)===null||_===void 0)&&_.includes(".")?ce(y):i({},y);return F(S,l.keyPath,w.results[k]),S})}),A=Uo(f,x,w);f.optimisticOps.push(A),queueMicrotask(function(){return g.mutatedParts&&bt(g.mutatedParts)})}):(f.optimisticOps.push(g),g.mutatedParts&&bt(g.mutatedParts),b.then(function(w){if(w.numFailures>0){qe(f.optimisticOps,g);var x=Uo(f,g,w);x&&f.optimisticOps.push(x),g.mutatedParts&&bt(g.mutatedParts)}}),b.catch(function(){qe(f.optimisticOps,g),g.mutatedParts&&bt(g.mutatedParts)})),b},query:function(g){var h;if(!zo(H,o)||!Zo("query",g))return o.query(g);var f=((h=H.trans)===null||h===void 0?void 0:h.db._options.cache)==="immutable",b=H,w=b.requery,x=b.signal,A=Cg(n,a,"query",g),y=A[0],k=A[1],_=A[2],S=A[3];if(y&&k)y.obsSet=g.obsSet;else{var C=o.query(g).then(function($){var T=$.result;if(y&&(y.res=T),f){for(var E=0,R=T.length;E<R;++E)Object.freeze(T[E]);Object.freeze(T)}return $}).catch(function($){return S&&y&&qe(S,y),Promise.reject($)});y={obsSet:g.obsSet,promise:C,subscribers:new Set,type:"query",req:g,dirty:!1},S?S.push(y):(S=[y],_||(_=Un["idb://".concat(n,"/").concat(a)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}),_.queries.query[g.query.index.name||""]=S)}return jg(y,S,w,x),y.promise.then(function($){var T=Go($.result,g,_==null?void 0:_.optimisticOps,o,y,f);return{result:f?T:ce(T)}})}});return m}});return t}};function kt(e,n){return new Proxy(e,{get:function(t,a,o){return a==="db"?n:Reflect.get(t,a,o)}})}var cn=function(){function e(n,t){var a=this;this._middlewares={},this.verno=0;var o=e.dependencies;this._options=t=i({addons:e.addons,autoOpen:!0,indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange,cache:"cloned",maxConnections:So},t),this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange};var l=t.addons;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var m={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ie,dbReadyPromise:null,cancelOpen:ie,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:t.autoOpen};m.dbReadyPromise=new O(function(h){m.dbReadyResolve=h}),m.openCanceller=new O(function(h,f){m.cancelOpen=f}),this._state=m,this.name=n,this.on=Ar(this,"populate","blocked","versionchange","close",{ready:[si,ie]}),this.once=function(h,f){var b=function(){for(var w=[],x=0;x<arguments.length;x++)w[x]=arguments[x];a.on(h).unsubscribe(b),f.apply(a,w)};return a.on(h,b)},this.on.ready.subscribe=ee(this.on.ready.subscribe,function(h){return function(f,b){e.vip(function(){var w=a._state;if(w.openComplete)w.dbOpenError||O.resolve().then(f),b&&h(f);else if(w.onReadyBeingFired)w.onReadyBeingFired.push(f),b&&h(f);else{h(f);var x=a;b||h(function A(){x.on.ready.unsubscribe(f),x.on.ready.unsubscribe(A)})}})}}),this.Collection=Fm(this),this.Table=Om(this),this.Transaction=Um(this),this.Version=lg(this),this.WhereClause=zm(this),this.on("versionchange",function(h){h.newVersion>0?console.warn("Another connection wants to upgrade database '".concat(a.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(a.name,"'. Closing db now to resume the delete request.")),a.close({disableAutoOpen:!1})}),this.on("blocked",function(h){!h.newVersion||h.newVersion<h.oldVersion?console.warn("Dexie.delete('".concat(a.name,"') was blocked")):console.warn("Upgrade '".concat(a.name,"' blocked by other connection holding version ").concat(h.oldVersion/10))}),this._maxKey=jr(t.IDBKeyRange),this._createTransaction=function(h,f,b,w){return new a.Transaction(h,f,b,a._options.chromeTransactionDurability,w)},this._fireOnBlocked=function(h){a.on("blocked").fire(h),Pr.toArray().filter(function(f){return f.name===a.name&&f!==a&&!f._state.vcFired}).map(function(f){return f.on("versionchange").fire(h)})},this.use(wg),this.use(Pg),this.use(xg),this.use(bg),this.use(yg);var g=new Proxy(this,{get:function(h,f,b){if(f==="_vip")return!0;if(f==="table")return function(x){return kt(a.table(x),g)};var w=Reflect.get(h,f,b);return w instanceof Co?kt(w,g):f==="tables"?w.map(function(x){return kt(x,g)}):f==="_createTransaction"?function(){var x=w.apply(this,arguments);return kt(x,g)}:w}});this.vip=g,l.forEach(function(h){return h(a)})}return e.prototype.version=function(n){if(isNaN(n)||n<.1)throw new W.Type("Given version is not a positive number");if(n=Math.round(n*10)/10,this.idbdb||this._state.isBeingOpened)throw new W.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,n);var t=this._versions,a=t.filter(function(o){return o._cfg.version===n})[0];return a||(a=new this.Version(n),t.push(a),t.sort(eg),a.stores({}),this._state.autoSchema=!1,a)},e.prototype._whenReady=function(n){var t=this;return this.idbdb&&(this._state.openComplete||H.letThrough||this._vip)?n():new O(function(a,o){if(t._state.openComplete)return o(new W.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen){o(new W.DatabaseClosed);return}t.open().catch(ie)}t._state.dbReadyPromise.then(a,o)}).then(n)},e.prototype.use=function(n){var t=n.stack,a=n.create,o=n.level,l=n.name;l&&this.unuse({stack:t,name:l});var m=this._middlewares[t]||(this._middlewares[t]=[]);return m.push({stack:t,create:a,level:o==null?10:o,name:l}),m.sort(function(g,h){return g.level-h.level}),this},e.prototype.unuse=function(n){var t=n.stack,a=n.name,o=n.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(l){return o?l.create!==o:a?l.name!==a:!1})),this},e.prototype.open=function(){var n=this;return Ln(gn,function(){return fg(n)})},e.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var n=this._state;if(Pr.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}n.isBeingOpened||(n.dbReadyPromise=new O(function(t){n.dbReadyResolve=t}),n.openCanceller=new O(function(t,a){n.cancelOpen=a}))},e.prototype.close=function(n){var t=n===void 0?{disableAutoOpen:!0}:n,a=t.disableAutoOpen,o=this._state;a?(o.isBeingOpened&&o.cancelOpen(new W.DatabaseClosed),this._close(),o.autoOpen=!1,o.dbOpenError=new W.DatabaseClosed):(this._close(),o.autoOpen=this._options.autoOpen||o.isBeingOpened,o.openComplete=!1,o.dbOpenError=null)},e.prototype.delete=function(n){var t=this;n===void 0&&(n={disableAutoOpen:!0});var a=arguments.length>0&&typeof arguments[0]!="object",o=this._state;return new O(function(l,m){var g=function(){t.close(n);var h=t._deps.indexedDB.deleteDatabase(t.name);h.onsuccess=ge(function(){cg(t._deps,t.name),l()}),h.onerror=Ye(m),h.onblocked=t._fireOnBlocked};if(a)throw new W.InvalidArgument("Invalid closeOptions argument to db.delete()");o.isBeingOpened?o.dbReadyPromise.then(g):g()})},e.prototype.backendDB=function(){return this.idbdb},e.prototype.isOpen=function(){return this.idbdb!==null},e.prototype.hasBeenClosed=function(){var n=this._state.dbOpenError;return n&&n.name==="DatabaseClosedError"},e.prototype.hasFailed=function(){return this._state.dbOpenError!==null},e.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(e.prototype,"tables",{get:function(){var n=this;return d(this._allTables).map(function(t){return n._allTables[t]})},enumerable:!1,configurable:!0}),e.prototype.transaction=function(){var n=pg.apply(this,arguments);return this._transaction.apply(this,n)},e.prototype._transaction=function(n,t,a){var o=this,l=H.trans;(!l||l.db!==this||n.indexOf("!")!==-1)&&(l=null);var m=n.indexOf("?")!==-1;n=n.replace("!","").replace("?","");var g,h;try{if(h=t.map(function(b){var w=b instanceof o.Table?b.name:b;if(typeof w!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return w}),n=="r"||n===ki)g=ki;else if(n=="rw"||n==wi)g=wi;else throw new W.InvalidArgument("Invalid transaction mode: "+n);if(l){if(l.mode===ki&&g===wi)if(m)l=null;else throw new W.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");l&&h.forEach(function(b){if(l&&l.storeNames.indexOf(b)===-1)if(m)l=null;else throw new W.SubTransaction("Table "+b+" not included in parent transaction.")}),m&&l&&!l.active&&(l=null)}}catch(b){return l?l._promise(null,function(w,x){x(b)}):pe(b)}var f=Wo.bind(null,this,g,h,l,a);return l?l._promise(g,f,"lock"):H.trans?Ln(H.transless,function(){return o._whenReady(f)}):this._whenReady(f)},e.prototype.table=function(n){if(!K(this._allTables,n))throw new W.InvalidTable("Table ".concat(n," does not exist"));return this._allTables[n]},e}(),Mg=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ig=function(){function e(n){this._subscribe=n}return e.prototype.subscribe=function(n,t,a){return this._subscribe(!n||typeof n=="function"?{next:n,error:t,complete:a}:n)},e.prototype[Mg]=function(){return this},e}(),wt;try{wt={indexedDB:s.indexedDB||s.mozIndexedDB||s.webkitIndexedDB||s.msIndexedDB,IDBKeyRange:s.IDBKeyRange||s.webkitIDBKeyRange}}catch{wt={indexedDB:null,IDBKeyRange:null}}function Jo(e){var n=!1,t,a=new Ig(function(o){var l=Be(e);function m(S){var C=ur();try{l&&lr();var $=xn(e,S);return l&&($=$.finally(Sn)),$}finally{C&&sr()}}var g=!1,h,f={},b={},w={get closed(){return g},unsubscribe:function(){g||(g=!0,h&&h.abort(),x&&En.storagemutated.unsubscribe(k))}};o.start&&o.start(w);var x=!1,A=function(){return vi(_)};function y(){return Oi(b,f)}var k=function(S){vt(f,S),y()&&A()},_=function(){if(!(g||!wt.indexedDB)){f={};var S={};h&&h.abort(),h=new AbortController;var C={subscr:S,signal:h.signal,requery:A,querier:e,trans:null},$=m(C);x||(En.storagemutated.subscribe(k),x=!0),Promise.resolve($).then(function(T){n=!0,t=T,!(g||C.signal.aborted)&&(y()?A():(b=S,y()?A():(f={},vi(function(){return!g&&o.next&&o.next(T)}))))},function(T){g||C.signal.aborted||(n=!1,["DatabaseClosedError","AbortError"].includes(T==null?void 0:T.name)||g||vi(function(){g||o.error&&o.error(T)}))})}};return setTimeout(A,0),w});return a.hasValue=function(){return n},a.getValue=function(){return t},a}var Gn=cn;P(Gn,i(i({},or),{delete:function(e){var n=new Gn(e,{addons:[]});return n.delete()},exists:function(e){return new Gn(e,{addons:[]}).open().then(function(n){return n.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(e){try{return gg(Gn.dependencies).then(e)}catch{return pe(new W.MissingAPI)}},defineClass:function(){function e(n){v(this,n)}return e},ignoreTransaction:function(e){return H.trans?Ln(H.transless||gn,e):e()},vip:Mi,async:function(e){return function(){try{var n=qi(e.apply(this,arguments));return!n||typeof n.then!="function"?O.resolve(n):n}catch(t){return pe(t)}}},spawn:function(e,n,t){try{var a=qi(e.apply(t,n||[]));return!a||typeof a.then!="function"?O.resolve(a):a}catch(o){return pe(o)}},currentTransaction:{get:function(){return H.trans||null}},waitFor:function(e,n){var t=O.resolve(typeof e=="function"?Gn.ignoreTransaction(e):e).timeout(n||6e4);return H.trans?H.trans.waitFor(t):t},Promise:O,debug:{get:function(){return an},set:function(e){go(e)}},derive:X,extend:v,props:P,override:ee,Events:Ar,on:En,liveQuery:Jo,extendObservabilitySet:vt,getByKeyPath:se,setByKeyPath:F,delByKeyPath:ve,shallowClone:fe,deepClone:ce,getObjectDiff:Bi,cmp:re,asap:Y,minKey:yi,addons:[],connections:{get:Pr.toArray},errnames:mn,dependencies:wt,cache:Un,semVer:wo,version:wo.split(".").map(function(e){return parseInt(e)}).reduce(function(e,n,t){return e+n/Math.pow(10,t*2)})})),Gn.maxKey=jr(Gn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(En(mt,function(e){if(!An){var n;n=new CustomEvent(_i,{detail:e}),An=!0,dispatchEvent(n),An=!1}}),addEventListener(_i,function(e){var n=e.detail;An||Li(n)}));function Li(e){var n=An;try{An=!0,En.storagemutated.fire(e),Fi(e,!0)}finally{An=n}}var An=!1,$n,zi=function(){};typeof BroadcastChannel<"u"&&(zi=function(){$n=new BroadcastChannel(_i),$n.onmessage=function(e){return e.data&&Li(e.data)}},zi(),typeof $n.unref=="function"&&$n.unref(),En(mt,function(e){An||$n.postMessage(e)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(e){if(!cn.disableBfCache&&e.persisted){an&&console.debug("Dexie: handling persisted pagehide"),$n==null||$n.close();for(var n=0,t=Pr.toArray();n<t.length;n++){var a=t[n];a.close({disableAutoOpen:!1})}}}),addEventListener("pageshow",function(e){!cn.disableBfCache&&e.persisted&&(an&&console.debug("Dexie: handling persisted pageshow"),zi(),Li({all:new Ce(-1/0,[[]])}))}));function Rg(e){return new Er({add:e})}function Og(e){return new Er({remove:e})}function Kg(e,n){return new Er({replacePrefix:[e,n]})}O.rejectionMapper=Fn,go(an);var Dg=Object.freeze({__proto__:null,DEFAULT_MAX_CONNECTIONS:So,Dexie:cn,Entity:To,PropModification:Er,RangeSet:Ce,add:Rg,cmp:re,default:cn,liveQuery:Jo,mergeRanges:Ir,rangesOverlap:Fo,remove:Og,replacePrefix:Kg});return i(cn,Dg,{default:cn}),cn})});J();J();var ke=Symbol.for("#__init__"),Vg=Symbol.for("#__initor__");var Jg=Symbol.for("#meta"),Zi=Symbol.for("imba");var Yn={IsExtension:1,IsTag:2,HasDescriptors:4,HasSuperCalls:8,HasConstructor:16,HasFields:32,HasMixins:64,HasInitor:128,HasDecorators:256,IsObjectExtension:512,IsMixin:1024},hr=new Map,Yg=globalThis[Zi]||(globalThis[Zi]={counter:0,classes:hr});function cr(c,r={}){var i;return hr.has(c)||hr.set(c,{symbol:Symbol(c.name),parent:(i=Object.getPrototypeOf(c.prototype))==null?void 0:i.constructor,for:c,uses:null,inits:null,id:Yg.counter++,...r}),hr.get(c)}function De(c){var r;return((r=c==null?void 0:c.toIterable)==null?void 0:r.call(c))||c}function Qg(c,r){if(!c||!r)return!1;if(c.get)return r.get===c.get;if(c.set)return r.set===c.set;if(c.value)return c.value===r.value}function Qo(c,r,i,u={}){let s=c.constructor;!i&&r&&(i=Object.getOwnPropertyDescriptors(r),delete i.constructor,i[ke]&&(console.warn(`Cannot define plain fields when extending class ${s.name}`),delete i[ke]));let d=cr(s);if(d&&d.augments){let p=new Map;for(let v of Object.keys(i)){let j=Object.getOwnPropertyDescriptor(c,v);for(let N of d.augments){let K=p.get(N);K||p.set(N,K={});let P=Object.getOwnPropertyDescriptor(N.prototype,v);P&&!Qg(j,P)?console.warn("wont extend",v,P,j):K[v]=i[v]}}for(let[v,j]of p)Object.keys(j).length&&Qo(v.prototype,null,j)}return Object.defineProperties(c,i),c}function Ui(c,r){var p;let i=cr(c),u=cr(r),s=u.parent;for(;s&&((p=cr(s))==null?void 0:p.flags)&Yn.IsMixin;){Ui(c,s),s=null;break}if(s&&!(c.prototype instanceof s))throw new Error(`Mixin ${r.name} has superclass not present in target class`);if(!u.augments){u.augments=new Set;let v=u.ref=Symbol(r.name),j=Object[Symbol.hasInstance];r.prototype[v]=!0,Object.defineProperty(r,Symbol.hasInstance,{value:function(N){return this===r?N&&!!N[v]:j.call(this,N)}})}if(c.prototype[u.ref])return c;if(u.uses)for(let v of u.uses)Ui(c,v);u.augments.add(c),i.uses||(i.uses=[]),i.uses.push(r);let d=Object.getOwnPropertyDescriptors(r.prototype);return delete d.constructor,d[ke]&&(i.inits||(i.inits=[]),i.inits.push(r.prototype[ke]),delete d[ke]),Object.defineProperties(c.prototype,d),(r==null?void 0:r.mixed)instanceof Function&&r.mixed(c),c}var Qn={cache:{},self:null,target:null,proxy:new Proxy({},{apply:(c,r,i)=>Reflect.apply(Qn.target,r,i),get:(c,r)=>{let i=Reflect.get(Qn.target,r,Qn.self);return i instanceof Function?i.bind(Qn.self):i},set:(c,r,i,u)=>Reflect.set(Qn.target,r,i,Qn.self)})};function G(c,r,i,u,s=null){var N;let d=Object.getPrototypeOf(c.prototype),p=(u&(Yn.HasMixins|Yn.IsExtension))==Yn.HasMixins,v;if(p&&(hr.set(c,hr.get(d.constructor)),d=Object.getPrototypeOf(d)),s){let K=u&Yn.IsObjectExtension?s:s.prototype,P=cr(c);if(P.uses){s===K&&console.warn("Cannot extend object with mixins");for(let ue of P.uses)Ui(s,ue)}return u&Yn.HasSuperCalls&&(Qn.cache[r]=Object.create(Object.getPrototypeOf(K),Object.getOwnPropertyDescriptors(K))),Qo(K,c.prototype),s}let j=d==null?void 0:d.constructor;if(v=cr(c,{symbol:r}),Object.defineProperty(c,Jg,{value:v,enumerable:!1,configurable:!0}),i&&c.name!==i&&Object.defineProperty(c,"name",{value:i,configurable:!0}),v.flags=u,u&Yn.HasConstructor&&(c.prototype[Vg]=r),v.uses)for(let K of v.uses)(N=K.mixes)==null||N.call(K,c);return(j==null?void 0:j.inherited)instanceof Function&&j.inherited(c),c}J();J();var Rr=Symbol.for("#__listeners__");var Xg=Symbol(),Vi=class Vi{static for(r){return new Proxy({},new this(r))}constructor(r){this.getter=r}get target(){return this.getter()}get(r,i){return this.target[i]}set(r,i,u){return this.target[i]=u,!0}};G(Vi,Xg,"LazyProxy",16);var Xo=Vi;function Or(c){let r=typeof c;if(r=="number")return c;if(r=="string"){if(/^\d+fps$/.test(c))return 1e3/parseFloat(c);if(/^([-+]?[\d\.]+)s$/.test(c))return parseFloat(c)*1e3;if(/^([-+]?[\d\.]+)ms$/.test(c))return parseFloat(c)}return null}function St(c,r,i){if(!c)return;let u=Object.getOwnPropertyDescriptor(c,r);return u||c==i?u||void 0:St(Reflect.getPrototypeOf(c),r,i)}var eu=function(c,r,i){let u,s,d;for(;(u=i)&&(i=i.next);)(s=i.listener)&&(i.path&&s[i.path]?d=r?s[i.path].apply(s,r):s[i.path]():d=r?s.apply(i,r):s.call(i)),i.times&&--i.times<=0&&(u.next=i.next,i.listener=null)};function _t(c,r,i,u){let s,d,p;return s=c[Rr]||(c[Rr]={}),d=s[r]||(s[r]={}),p=d.tail||(d.tail=d.next={}),p.listener=i,p.path=u,d.tail=p.next={},p}function Cn(c,r,i){let u=_t(c,r,i);return u.times=1,u}function Gi(c,r,i,u){if(!i)return;let s,d,p=c[Rr];if(p&&(s=p[r])){for(;(d=s)&&(s=s.next);)if(s==i||s.listener==i){d.next=s.next,s.listener=null;break}}}function Xn(c,r,i=null){let u;(u=c[Rr])&&(u[r]&&eu(r,i,u[r]),u.all&&eu(r,[r,i],u.all))}var eh=Symbol(),Ji=class Ji{emit(r,...i){return Xn(this,r,i)}on(r,...i){return _t(this,r,...i)}once(r,...i){return Cn(this,r,...i)}un(r,...i){return Gi(this,r,...i)}};G(Ji,eh,"Emitter",0);var nu=Ji;J();function Yi(c,r){var i;return typeof r=="string"?typeof c===r:(i=r[Symbol.hasInstance])==null?void 0:i.call(r,c)}function nh(c){let r;return c&&((r=c.toIterable)?r.call(c):c)}var ru=Symbol.for("#__init__"),tu=Symbol.for("#schedule"),Qi=Symbol.for("#frames"),Tt=Symbol.for("#interval"),dr=Symbol.for("#stage"),fr=Symbol.for("#scheduled"),Et=Symbol.for("#version"),rh=Symbol.for("#fps"),iu=Symbol.for("#ticker"),th=globalThis.requestAnimationFrame||function(c){return globalThis.setTimeout(c,1e3/60)};var od=1/60,ih=Symbol(),na=class na{constructor(r=null){this[ru](r)}[ru](r=null,i=!0,u=!0){var s;this.owner=r&&(s=r.owner)!==void 0?s:null,this.target=r&&(s=r.target)!==void 0?s:null,this.active=r&&(s=r.active)!==void 0?s:!1,this.value=r&&(s=r.value)!==void 0?s:void 0,this.skip=r&&(s=r.skip)!==void 0?s:0,this.last=r&&(s=r.last)!==void 0?s:0}tick(r,i){return this.last=this.owner[Qi],this.target.tick(this,i),1}update(r,i){let u=this.active,s=r.value;return this.value!=s&&(this.deactivate(),this.value=s),(this.value||u||i)&&this.activate(),this}queue(){this.owner.add(this)}activate(){return this.value===!0?this.owner.on("commit",this):this.value===!1||typeof this.value=="number"&&(this.value/16.666666666666668<=2?this.owner.on("raf",this):this[Tt]=globalThis.setInterval(this.queue.bind(this),this.value)),this.active=!0,this}deactivate(){return this.value===!0&&this.owner.un("commit",this),this.owner.un("raf",this),this[Tt]&&(globalThis.clearInterval(this[Tt]),this[Tt]=null),this.active=!1,this}};G(na,ih,"Scheduled",16);var Xi=na,ah=Symbol(),ra=class ra{constructor(){var r=this;this.id=Symbol(),this.queue=[],this.stage=-1,this[dr]=-1,this[Qi]=0,this[fr]=!1,this[Et]=0,this.listeners={},this.intervals={},this.commit=function(){return r.add("commit"),r},this[rh]=0,this.$promise=null,this.$resolve=null,this[iu]=function(i){return r[fr]=!1,r.tick(i)}}touch(){return this[Et]++}get version(){return this[Et]}add(r,i=!1){return(i||this.queue.indexOf(r)==-1)&&this.queue.push(r),this[fr]||this[tu](),this}get committingΦ(){return this.queue.indexOf("commit")>=0}get syncingΦ(){return this[dr]==1}listen(r,i){let u=this.listeners[r],s=!u;return u||(u=this.listeners[r]=new Set),u.add(i),r=="raf"&&s&&this.add("raf"),this}unlisten(r,i){var u;let s=this.listeners[r];return s&&s.delete(i),r=="raf"&&s&&s.size==0&&(u=this.listeners.raf,delete this.listeners.raf),this}on(r,i){return this.listen(r,i)}un(r,i){return this.unlisten(r,i)}get promise(){var r=this;return this.$promise||(this.$promise=new Promise(function(i){return r.$resolve=i}))}tick(r){var i=this;let u=this.queue,s=this[Qi]++;if(this.ts||(this.ts=r),this.dt=r-this.ts,this.ts=r,this.queue=[],this[dr]=1,this[Et]++,u.length)for(let d=0,p=nh(u),v=p.length;d<v;d++){let j=p[d];typeof j=="string"&&this.listeners[j]?this.listeners[j].forEach(function(N){if(Yi(N.tick,Function))return N.tick(i,j);if(Yi(N,Function))return N(i,j)}):Yi(j,Function)?j(this.dt,this):j.tick&&j.tick(this.dt,this)}return this[dr]=this[fr]?0:-1,this.$promise&&(this.$resolve(this),this.$promise=this.$resolve=null),this.listeners.raf&&this.add("raf"),this}[tu](){return this[fr]||(this[fr]=!0,this[dr]==-1&&(this[dr]=0),th(this[iu])),this}schedule(r,i){var s,d;return i||(i=r[s=this.id]||(r[s]={value:!0})),(i[d=this.id]||(i[d]=new Xi({owner:this,target:r}))).update(i,!0)}unschedule(r,i={}){i||(i=r[this.id]);let u=i&&i[this.id];return u&&u.active&&u.deactivate(),this}};G(ra,ah,"Scheduler",16);var ea=ra,Ee=new ea;function Ne(){return Ee.add("commit").promise}function oh(c,r){return globalThis.setTimeout(function(){c(),Ne()},r)}function uh(c,r){return globalThis.setInterval(function(){c(),Ne()},r)}var sh=globalThis.clearInterval,lh=globalThis.clearTimeout,Kr=globalThis.imba||(globalThis.imba={});Kr.commit=Ne;Kr.setTimeout=oh;Kr.setInterval=uh;Kr.clearInterval=sh;Kr.clearTimeout=lh;J();J();var au=Symbol.for("#toStringDeopt"),Dr=Symbol.for("#named"),ou=Symbol.for("#symbols"),uu=Symbol.for("#batches"),su=Symbol.for("#extras"),ta=Symbol.for("#stacks"),mh=Symbol(),ia=class ia{constructor(r){this.dom=r,this.string=""}contains(r){return this.dom.classList.contains(r)}has(r){return this.dom.classList.contains(r)}add(r){return this.contains(r)?this:(this.string+=(this.string?" ":"")+r,this.dom.classList.add(r),this)}set(r,i){this[Dr]||(this[Dr]={});let u=this[Dr][r];return u!=i&&(u&&this.decr(u),i&&this.incr(i),this[Dr][r]=i),this}remove(r){if(!this.contains(r))return this;let i=new RegExp("(^|\\s)"+r+"(?=\\s|$)","g");return this.string=this.string.replace(i,""),this.dom.classList.remove(r),this}toggle(r,i){return i===void 0&&(i=!this.contains(r)),i?this.add(r):this.remove(r)}incr(r,i=0){var u=this;let s=this.stacks,d=s[r]||0;return d<1&&this.add(r),i>0&&setTimeout(function(){return u.decr(r)},i),s[r]=Math.max(d,0)+1}decr(r){let i=this.stacks,u=i[r]||0;return u==1&&this.remove(r),i[r]=Math.max(u,1)-1}reconcile(r,i,u){let s=this[ou],d=this[uu],p=!0;if(!s)s=this[ou]=[r],d=this[uu]=[i||""],u&&(this.dom.className||"").indexOf(u)==-1&&(s.push(r),d.push(u)),this.toString=this.valueOf=this[au];else{let v=s.indexOf(r),j=i||"";v==-1?(s.push(r),d.push(j),u&&(this.dom.className||"").indexOf(u)==-1&&(s.push(r),d.push(u))):d[v]!=j?d[v]=j:p=!1}p&&(this[su]=" "+d.join(" "),this.sync())}valueOf(){return this.string}toString(){return this.string}[au](){return this.string+(this[su]||"")}sync(){return this.dom.flagSync$()}get stacks(){return this[ta]||(this[ta]={})}};G(ia,mh,"Flags",16);var pr=ia;J();var lu=Symbol.for("#__init__"),aa=Symbol.for("#getRenderContext"),gh=Symbol.for("#getDynamicContext"),hh=Symbol.for("#removeFromCache"),Pe={context:null,document:null,createTextNode:function(c){return globalThis.document.createTextNode(c)}},ch=Symbol(),ua=class ua{constructor(r=null){this[lu](r)}[lu](r=null,i=!0,u=!0){var s;this.stack=r&&(s=r.stack)!==void 0?s:[],this.moving=r&&(s=r.moving)!==void 0?s:new Set}push(r){return this.stack.push(r)}pop(r){return this.stack.pop()}};G(ua,ch,"Renderer",16);var oa=ua,er=new oa,dh=Symbol(),At=class At extends Map{constructor(r,i=null){super(),this._=r,this.sym=i}pop(){return Pe.context=null}[aa](r){let i=this.get(r);return i||this.set(r,i=new At(this._,r)),Pe.context=i}[gh](r,i){return this[aa](r)[aa](i)}[hh](r){let i=this[r];return i&&(this.delete(i),this[r]=null,this.value==i&&(this.value=null)),this}run(r,i=1){if(this.value=r,Pe.context==this&&(Pe.context=null),i==0){let u=r;if(typeof u=="number"&&(u=String(u)),typeof u=="string"){let s=this.text||(this.text=Pe.createTextNode(u));return u!=s.textContent&&(s.textContent=u),s}}return this.get(r)}cache(r){return this.set(this.value,r),r}};G(At,dh,"RenderContext",16);var jn=At;function $t(c,r=Symbol(),i=c){return Pe.context=c[r]||(c[r]=new jn(i,r))}function mu(){let c=Pe.context,r=c||new jn(null);return c&&(Pe.context=null),r}function gu(c,r){var i;return typeof r=="string"?typeof c===r:(i=r[Symbol.hasInstance])==null?void 0:i.call(r,c)}function fh(c){let r;return c&&((r=c.toIterable)?r.call(c):c)}var Hr=Symbol.for("#parent"),hu=Symbol.for("#closestNode"),ph=Symbol.for("#parentNode"),vh=Symbol.for("#context"),ju=Symbol.for("##inited"),sa=Symbol.for("#getRenderContext"),bh=Symbol.for("#getDynamicContext"),cu=Symbol.for("#insertChild"),ca=Symbol.for("#appendChild"),la=Symbol.for("#replaceChild"),du=Symbol.for("#removeChild"),dn=Symbol.for("#insertInto"),fu=Symbol.for("#insertIntoDeopt"),Fr=Symbol.for("#removeFrom"),pu=Symbol.for("#removeFromDeopt"),vr=Symbol.for("#replaceWith"),vu=Symbol.for("#replaceWithDeopt"),ma=Symbol.for("#placeholderNode"),yh=Symbol.for("#attachToParent"),kh=Symbol.for("#detachFromParent"),bu=Symbol.for("#placeChild"),wh=Symbol.for("#beforeReconcile"),xh=Symbol.for("#afterReconcile"),Sh=Symbol.for("#afterVisit"),_h=Symbol.for("#visitContext"),Nu=Symbol.for("#__init__"),Pu=Symbol.for("##parent"),Ct=Symbol.for("##up"),ga=Symbol.for("##context"),nr=Symbol.for("#domNode"),qr=Symbol.for("##placeholderNode"),yu=Symbol.for("#forNode"),ku=Symbol.for("#domDeopt"),Br=Symbol.for("##visitContext"),Th=Symbol.for("#isRichElement"),wu=Symbol.for("#src"),jt=Symbol.for("#htmlNodeName"),Eh=Symbol.for("#getSlot");var xu=Symbol.for("#cssns"),Ah=Symbol.for("#cssid"),wd=window.Event,xd=window.UIEvent,Sd=window.FocusEvent,Mu=window.MouseEvent,_d=window.PointerEvent,Iu=window.KeyboardEvent,Td=window.CustomEvent,va=window.Node,ba=window.Comment,Ru=window.Text,Ed=window.Element,Ad=window.HTMLElement,$d=window.HTMLHtmlElement,Cd=window.HTMLSelectElement,jd=window.HTMLInputElement,Nd=window.HTMLTextAreaElement,Pd=window.HTMLButtonElement,Md=window.HTMLOptionElement,Id=window.HTMLScriptElement,Rd=window.SVGElement,Od=window.DocumentFragment,Kd=window.ShadowRoot,Dd=window.Document,Fd=window.Window,qd=window.customElements;var ha={};function Ou(c,r,i){if(!c)return i[r]=null;if(i[r]!==void 0)return i[r];let u=Object.getOwnPropertyDescriptor(c,r);return u!==void 0||c==SVGElement?i[r]=u||null:Ou(Reflect.getPrototypeOf(c),r,i)}var da={},fa={},$h={},Ch={};var jh={get(c,r){let i=c,u;for(;i&&u==null;)(i=i[Hr])&&(u=i[r]);return u},set(c,r,i){let u=c,s;for(;u&&s==null;){if(St(u,r,Element))return u[r]=i,!0;u=u[Hr]}return!0}},Nh=Symbol(),ka=class ka{get flags(){return this.documentElement.flags}emit(...r){return this.documentElement.emit(...r)}};G(ka,Nh,"Document",1,Document);var Su=ka;Node.prototype[Nu]=function(){return this};var Ph=Symbol(),wa=class wa{get[Hr](){return this[Pu]||this.parentNode||this[Ct]}get[hu](){return this}get[ph](){var r;return(r=this[Hr])==null?void 0:r[hu]}get[vh](){return this[ga]||(this[ga]=new Proxy(this,jh))}[ju](){return this}[sa](r){return $t(this,r)}[bh](r,i){return this[sa](r)[sa](i)}[cu](r,i){return r[dn](this,i)}[ca](r){return r[dn](this,null)}[la](r,i){let u=this[cu](r,i);return this[du](i),u}[du](r){return r[Fr](this)}[dn](r,i=null){return i?r.insertBefore(this,i):r.appendChild(this),this}[fu](r,i){return i?r.insertBefore(this[nr]||this,i):r.appendChild(this[nr]||this),this}[Fr](r){return r.removeChild(this)}[pu](r){return r.removeChild(this[nr]||this)}[vr](r,i){return i[la](r,this)}[vu](r,i){return i[la](r,this[nr]||this)}get[ma](){let r;return this[qr]||(this[qr]=(r=globalThis.document.createComment("placeholder"),r[yu]=this,r))}set[ma](r){let i=this[qr];this[qr]=r,r[yu]=this,i&&i!=r&&i.parentNode&&i[vr](r)}[yh](){let r=this[nr],i=r&&r.parentNode;return r&&i&&r!=this&&(this[nr]=null,this[dn](i,r),r[Fr](i)),this}[kh](){this[ku]!=!0&&(this[ku]=!0,!0)&&(this[vr]=this[vu],this[Fr]=this[pu],this[dn]=this[fu],this[Ct]||(this[Ct]=this[Hr]));let r=this[ma];return this.parentNode&&r!=this&&(r[dn](this.parentNode,this),this[Fr](this.parentNode)),this[nr]=r,this}[bu](r,i,u){let s=typeof r;if(s==="undefined"||r===null){if(u&&gu(u,Comment))return u;let d=globalThis.document.createComment("");return u?u[vr](d,this):d[dn](this,null)}if(r===u)return r;if(s!=="object"){let d,p=r;return u?gu(u,Text)?(u.textContent=p,u):(d=globalThis.document.createTextNode(p),u[vr](d,this),d):(this.appendChild(d=globalThis.document.createTextNode(p)),d)}else return r[dn]?u?u[vr](r,this):r[dn](this,null):this[bu](String(r),i,u)}};G(wa,Ph,"Node",1,Node);var _u=wa,Mh=Symbol(),xa=class xa{log(...r){return console.log(...r)}get hiddenΦ(){var i,u;let r=globalThis.getComputedStyle(this);return r.display=="none"||r.visibility=="hidden"?!0:this.offsetParent||this===globalThis.document.body?!1:(u=(i=this.parentElement)==null?void 0:i.hiddenΦ)!=null?u:!0}get detachedΦ(){return!globalThis.document.documentElement.contains(this)}get unobstructedΦ(){let r=this.getBoundingClientRect(),i=window.visualViewport,u=r.left+r.width*.5,s=r.top+r.height*.5;if(i.width>u&&u>0&&i.height>s&&s>0){let d=globalThis.document.elementFromPoint(u,s);return!!(d&&(d.contains(this)||this.contains(d)))}return!1}get focusΦ(){return globalThis.document.activeElement==this}get focinΦ(){return this.contains(globalThis.document.activeElement)}emit(r,i,u={}){var p,v,j;i!=null&&((p=u.detail)!=null||(u.detail=i)),(v=u.bubbles)!=null||(u.bubbles=!0),(j=u.cancelable)!=null||(u.cancelable=!0);let s=new CustomEvent(r,u);u.original&&(s.originalEvent=u.original);let d=this.dispatchEvent(s);return s}text$(r){return this.textContent=r,this}[wh](){return this}[xh](){return this}[Sh](){this[Br]&&(this[Br]=null)}get[_h](){return this[Br]||(this[Br]={})}get flags(){return this.$flags||(this.$flags=new pr(this),this.flag$==Element.prototype.flag$&&(this.flags$ext=this.className),this.flagDeopt$()),this.$flags}flag$(r){let i=this.flags$ns;this.className=i?i+(this.flags$ext=r):this.flags$ext=r}flagDeopt$(){var r=this;this.flag$=this.flagExt$,this.flagSelf$=function(i){return r.flagSync$(r.flags$own=i)}}flagExt$(r){return this.flagSync$(this.flags$ext=r)}flagSelf$(r){return this.flagDeopt$(),this.flagSelf$(r)}flagSync$(){return this.className=(this.flags$ns||"")+(this.flags$ext||"")+" "+(this.flags$own||"")+" "+(this.$flags||"")}set$(r,i){let u=St(this,r,Element);!u||!u.set?this.setAttribute(r,i):this[r]=i}get richValue(){return this.value}set richValue(r){this.value=r}};G(xa,Mh,"Element",1,Element);var Tu=xa;Element.prototype.setns$=Element.prototype.setAttributeNS;Element.prototype[Th]=!0;function D(c,r,i,u){let s=globalThis.document.createElement(c);return i&&(s.className=i),u!==null&&s.text$(u),r&&r[ca]&&r[ca](s),s}var Ih=Symbol(),Sa=class Sa{set$(r,i){var d;let u=ha[d=this.nodeName]||(ha[d]={}),s=Ou(this,r,u);!s||!s.set?this.setAttribute(r,i):this[r]=i}flag$(r){let i=this.flags$ns;this.setAttribute("class",i?i+(this.flags$ext=r):this.flags$ext=r)}flagSelf$(r){var i=this;return this.flag$=function(u){return i.flagSync$(i.flags$ext=u)},this.flagSelf$=function(u){return i.flagSync$(i.flags$own=u)},this.flagSelf$(r)}flagSync$(){return this.setAttribute("class",(this.flags$ns||"")+(this.flags$ext||"")+" "+(this.flags$own||"")+" "+(this.$flags||""))}};G(Sa,Ih,"SVGElement",1,SVGElement);var Eu=Sa,Rh=Symbol(),_a=class _a{set src(r){if(this[wu]!=r&&(this[wu]=r,!0)){if(r&&r.adoptNode)r.adoptNode(this);else if(r&&r.type=="svg"){if(r.attributes)for(let i=r.attributes,u=0,s=Object.keys(i),d=s.length,p,v;u<d;u++)p=s[u],v=i[p],this.setAttribute(p,v);this.innerHTML=r.content}}}};G(_a,Rh,"SVGSVGElement",1,SVGSVGElement);var Au=_a;function rr(c){return globalThis.document.createComment(c)}function ya(c){return globalThis.document.createTextNode(c)}var Nt=globalThis.navigator,Oh=Nt&&Nt.vendor||"",$u=Nt&&Nt.userAgent||"",Kh=Oh.indexOf("Apple")>-1||$u.indexOf("CriOS")>=0||$u.indexOf("FxiOS")>=0,Pt=!Kh,Cu=new Map,Dh=Symbol(),Ta=class Ta extends HTMLElement{connectedCallback(){return Pt?this.parentNode.removeChild(this):this.parentNode.connectedCallback()}disconnectedCallback(){if(!Pt)return this.parentNode.disconnectedCallback()}};G(Ta,Dh,"CustomHook",0);var pa=Ta;window.customElements.define("i-hook",pa);function Fh(c,r){let i=Cu.get(r);if(!i){i={};let u=r.prototype,s=[u];for(;(u=u&&Object.getPrototypeOf(u))&&u.constructor!=c.constructor;)s.unshift(u);for(let d=0,p=fh(s),v=p.length;d<v;d++){let j=p[d],N=Object.getOwnPropertyDescriptors(j);Object.assign(i,N)}Cu.set(r,i)}return i}function fn(c,r,i,u,s){let d;typeof c!="string"&&c&&c.nodeName&&(c=c.nodeName);let p=fa[c]||c;if(da[c]){let v=da[c],j=v.prototype[jt];if(j&&Pt)d=globalThis.document.createElement(j,{is:p});else if(v.create$&&j){d=globalThis.document.createElement(j),d.setAttribute("is",p);let N=Fh(d,v);Object.defineProperties(d,N),d.__slots={},d.appendChild(globalThis.document.createElement("i-hook"))}else v.create$?(d=v.create$(d),d.__slots={}):console.warn("could not create tag "+c)}else d=globalThis.document.createElement(fa[c]||c);return d[Pu]=r,d[Nu](),d[ju](),u!==null&&d[Eh]("__").text$(u),(i||d.flags$ns)&&d.flag$(i||""),d}function pn(c,r,i={}){$h[c]=Ch[c]=r,r.nodeName=c;let u=c,s=r.prototype;if(c.indexOf("-")==-1&&(u=""+c+"-tag",fa[c]=u),i.cssns){let d=(s._ns_||s[xu]||"")+" "+(i.cssns||"");s._ns_=d.trim()+" ",s[xu]=i.cssns}if(i.cssid){let d=(s.flags$ns||"")+" "+i.cssid;s[Ah]=i.cssid,s.flags$ns=d.trim()+" "}return s[jt]&&!i.extends&&(i.extends=s[jt]),i.extends?(s[jt]=i.extends,da[c]=r,Pt&&window.customElements.define(u,r,{extends:i.extends})):window.customElements.define(u,r),r}var qh=globalThis.imba||(globalThis.imba={});qh.document=globalThis.document;J();function Wr(c,r){var i;return typeof r=="string"?typeof c===r:(i=r[Symbol.hasInstance])==null?void 0:i.call(r,c)}function Ea(c){let r;return c&&((r=c.toIterable)?r.call(c):c)}var Kt=Symbol.for("#parent"),Ku=Symbol.for("#closestNode"),Bh=Symbol.for("#isRichElement"),Hh=Symbol.for("#afterVisit"),Wh=Symbol.for("#getRenderContext"),Du=Symbol.for("#appendChild"),Fu=Symbol.for("#removeChild"),qu=Symbol.for("#replaceChild"),vn=Symbol.for("#insertInto"),Mt=Symbol.for("#replaceWith"),Bu=Symbol.for("#insertChild"),It=Symbol.for("#removeFrom"),Hu=Symbol.for("#placeChild"),Lh=Symbol.for("#registerFunctionalSlot"),zh=Symbol.for("#getFunctionalSlot"),Wu=Symbol.for("#getSlot"),$a=Symbol.for("##parent"),Nn=Symbol.for("##up"),Aa=Symbol.for("##flags"),Zh=Symbol.for("#domFlags"),Ue=Symbol.for("#end"),Lu=Symbol.for("#textContent"),Rt=Symbol.for("#textNode"),Ot=Symbol.for("#functionalSlots");var Uh=Symbol(),ja=class ja{constructor(){this.childNodes=[]}log(...r){}hasChildNodes(){return!1}set[Kt](r){this[$a]=r}get[Kt](){return this[$a]||this[Nn]}get[Ku](){return this[Kt][Ku]}get[Bh](){return!0}get flags(){return this[Aa]||(this[Aa]=new pr(this))}flagSync$(){return this}[Hh](){return this}[Wh](r){return $t(this,r)}};G(ja,Uh,"Fragment",16);var Pn=ja,Gh=0,Vh=Symbol(),Na=class Na extends Pn{constructor(r,i){super(...arguments),this[Nn]=i,this.parentNode=null,this[Zh]=r,this.childNodes=[],this[Ue]=rr("slot"+Gh++),i&&i[Du](this)}get[Kt](){return this[$a]||this.parentNode||this[Nn]}set textContent(r){this[Lu]=r}get textContent(){return this[Lu]}hasChildNodes(){for(let r=0,i=Ea(this.childNodes),u=i.length;r<u;r++){let s=i[r];if(Wr(s,Pn)&&s.hasChildNodes())return!0;if(!Wr(s,ba)){if(Wr(s,va))return!0}}return!1}text$(r){return this[Rt]?this[Rt].textContent=r:this[Rt]=this[Hu](r),this[Rt]}appendChild(r){return this.parentNode&&r[vn](this.parentNode,this[Ue]),this.childNodes.push(r)}[Du](r){var i;return this.parentNode?r[vn](this.parentNode,this[Ue]):(i=r[Nn])!=null||(r[Nn]=this[Nn]||this),this.childNodes.push(r)}insertBefore(r,i){this.parentNode&&this.parentNode[Bu](r,i);let u=this.childNodes.indexOf(i);return u>=0&&this.childNodes.splice(u,0,r),r}[Fu](r){this.parentNode&&this.parentNode[Fu](r);let i=this.childNodes.indexOf(r);i>=0&&this.childNodes.splice(i,1)}[qu](r,i){this.parentNode&&this.parentNode[qu](r,i);let u=this.childNodes.indexOf(i);return this.childNodes[u]=r,r}[vn](r,i){let u=this.parentNode;if(this.parentNode!=r&&(this.parentNode=r,!0)){this[Ue]&&(i=this[Ue][vn](r,i));for(let s=0,d=Ea(this.childNodes),p=d.length;s<p;s++)d[s][vn](r,i)}return this}[Mt](r,i){let u=r[vn](i,this[Ue]);return this[It](i),u}[Bu](r,i){if(this.parentNode&&this.insertBefore(r,i||this[Ue]),i){let u=this.childNodes.indexOf(i);u>=0&&this.childNodes.splice(u,0,r)}else this.childNodes.push(r);return r}[It](r){for(let i=0,u=Ea(this.childNodes),s=u.length;i<s;i++)u[i][It](r);return this[Ue]&&this[Ue][It](r),this.parentNode=null,this}[Hu](r,i,u){let s=this.parentNode,d=typeof r;if(d==="undefined"||r===null){if(u&&Wr(u,ba))return u;let p=rr("");if(u){let v=this.childNodes.indexOf(u);return this.childNodes.splice(v,1,p),s&&u[Mt](p,s),p}return this.childNodes.push(p),s&&p[vn](s,this[Ue]),p}if(r===u)return r;if(d!=="object"){let p,v=r;if(u){if(Wr(u,Ru))return u.textContent=v,u;{p=ya(v);let j=this.childNodes.indexOf(u);return this.childNodes.splice(j,1,p),s&&u[Mt](p,s),p}}else return this.childNodes.push(p=ya(v)),s&&p[vn](s,this[Ue]),p}else if(u){let p=this.childNodes.indexOf(u);return this.childNodes.splice(p,1,r),s&&u[Mt](r,s),r}else return this.childNodes.push(r),s&&r[vn](s,this[Ue]),r}};G(Na,Vh,"VirtualFragment",16);var Ca=Na;function zu(c,r){let i=new Ca(c,null);return i[Nn]=r,i}var Jh=Symbol(),Pa=class Pa{[Lh](r){let i=this[Ot]||(this[Ot]={});return i[r]||(i[r]=zu(0,this))}[zh](r,i){let u=this[Ot];return u&&u[r]||this[Wu](r,i)}[Wu](r,i){var u;return r=="__"&&!this.render||!this.__slots?this:(u=this.__slots)[r]||(u[r]=zu(0,this))}};G(Pa,Jh,"Node",1,va);var Zu=Pa;J();function Yh(c){let r;return c&&((r=c.toIterable)?r.call(c):c)}var Qh=Symbol.for("#afterVisit"),Dt=Symbol.for("#insertInto"),Uu=Symbol.for("#appendChild"),Xh=Symbol.for("#replaceWith"),Ma=Symbol.for("#removeFrom"),ec=Symbol.for("#domFlags"),nc=Symbol.for("##parent"),Mn=Symbol.for("#end"),rc=Symbol.for("#removeChild"),tc=Symbol.for("#insertChild"),ic=Symbol(),Ra=class Ra extends Pn{constructor(r,i){super(...arguments),this[ec]=r,this[nc]=i,r&256||(this[Mn]=rr("list")),this.$=this.childNodes,this.length=0,i&&i[Uu](this)}hasChildNodes(){return this.length!=0}[Qh](r){let i=this.length;if(this.length=r,i==r)return;let u=this.parentNode;if(!u)return;let s=this.childNodes,d=this[Mn];if(i>r)for(;i>r;)u[rc](s[--i]);else if(r>i)for(;r>i;)u[tc](s[i++],d);this.length=r}[Dt](r,i){this.parentNode=r,this[Mn]&&this[Mn][Dt](r,i),i=this[Mn];for(let u=0,s=Yh(this.childNodes),d=s.length;u<d;u++){let p=s[u];if(u==this.length)break;p[Dt](r,i)}return this}[Uu](r){}[Xh](r,i){let u=r[Dt](i,this[Mn]);return this[Ma](i),u}[Ma](r){let i=this.length;for(;i>0;)this.childNodes[--i][Ma](r);this[Mn]&&r.removeChild(this[Mn]),this.parentNode=null}};G(Ra,ic,"IndexedTagFragment",16);var Ia=Ra;function Gu(c,r){return new Ia(c,r)}J();function Vu(c){let r;return c&&((r=c.toIterable)?r.call(c):c)}var Oa=Symbol.for("#appendChild"),Ft=Symbol.for("#insertChild"),ac=Symbol.for("#replaceWith"),qt=Symbol.for("#insertInto"),Ka=Symbol.for("#removeFrom"),oc=Symbol.for("#afterVisit"),Bt=Symbol.for("#domFlags"),Ju=Symbol.for("##parent"),In=Symbol.for("#end"),Yu=Symbol.for("#removeChild"),uc=Symbol(),Fa=class Fa extends Pn{constructor(r,i){super(...arguments),this[Bt]=r,this[Ju]=i,this.changes=new Map,this.dirty=!1,this.array=this.childNodes,this.$=new jn(this,Symbol()),r&256||(this[In]=rr("map")),i&&i[Oa](this)}[Oa](r){if(this.parentNode)return this.parentNode[Ft](r,this[In])}hasChildNodes(){return this.childNodes.length!=0}push(r,i){if(!(this[Bt]&1)){this.array.push(r),this[Oa](r);return}let u=this.array[i];if(u!==r){this.dirty=!0;let s=this.array.indexOf(r),d=this.changes.get(r);s===-1?(this.array.splice(i,0,r),this.insertChild(r,i,s)):s===i+1?(u&&this.changes.set(u,-1),this.array.splice(i,1)):(s>=0&&this.array.splice(s,1),this.array.splice(i,0,r),this.moveChild(r,i,s)),d==-1&&this.changes.delete(r)}}insertChild(r,i,u){let s=this.parentNode;if(s)if(i>0){let d=this.array[i-1];s[Ft](r,d.nextSibling)}else s[Ft](r,this.childNodes[i+1]||this[In])}moveChild(r,i,u){return this.insertChild(r,i,u)}removeChild(r,i){r.parentNode&&r[Ka](r.parentNode)}[Ft](r,i){}[ac](r,i){let u=r[qt](i,this[In]);return this[Ka](i),u}[qt](r,i){this[Ju]=r;let u=this.parentNode;if(r!=u){this.parentNode=r;for(let s=0,d=Vu(this.array),p=d.length;s<p;s++)d[s][qt](r,i);this[In]&&this[In][qt](r,i)}return this}[Ka](r){for(let i=0,u=Vu(this.array),s=u.length;i<s;i++){let d=u[i];r[Yu](d)}return this[In]&&r[Yu](this[In]),this.parentNode=null}[oc](r){var i=this;if(!(this[Bt]&1)){this[Bt]|=1;return}if(this.dirty&&(this.changes.forEach(function(u,s){if(u==-1)return i.removeChild(s)}),this.changes.clear(),this.dirty=!1),this.array.length>r)for(;this.array.length>r;){let u=this.array.pop();this.removeChild(u)}}};G(Fa,uc,"KeyedTagFragment",16);var Da=Fa;function Qu(c,r){return new Da(c,r)}J();function Xu(c,r){var i;return typeof r=="string"?typeof c===r:(i=r[Symbol.hasInstance])==null?void 0:i.call(r,c)}function sc(c){let r;return c&&((r=c.toIterable)?r.call(c):c)}var Wt=Symbol.for("#__init__"),lc=Symbol.for("##inited"),mc=Symbol.for("#afterVisit"),gc=Symbol.for("#insertInto"),hc=Symbol.for("#insertIntoDeopt"),cc=Symbol.for("#beforeReconcile"),dc=Symbol.for("#afterReconcile"),es=Symbol.for("#__hooks__"),tr=Symbol.for("#autorender"),Ht=Symbol.for("##visitContext"),ns=Symbol.for("#domNode"),fc=Symbol(),br,pc=new(br=class{constructor(r=null){this[Wt](r)}[Wt](r=null,i=!0,u=!0){var s;this.items=r&&(s=r.items)!==void 0?s:[],this.current=r&&(s=r.current)!==void 0?s:null,this.lastQueued=r&&(s=r.lastQueued)!==void 0?s:null,this.tests=r&&(s=r.tests)!==void 0?s:0}flush(){let r=null;for(;r=this.items.shift();){if(!r.parentNode||r.hydratedΦ)continue;let i=this.current;this.current=r,r.__F|=1024;try{r.connectedCallback()}catch(u){console.error(u)}this.current=i}}queue(r){var i=this;let u=this.items.length,s=0,d=this.lastQueued;this.lastQueued=r;let p=Node.DOCUMENT_POSITION_PRECEDING,v=Node.DOCUMENT_POSITION_FOLLOWING;if(u){let j=this.items.indexOf(d),N=j,K=function(ue,Q){return i.tests++,ue.compareDocumentPosition(Q)};(j==-1||d.nodeName!=r.nodeName)&&(N=j=0);let P=this.items[N];for(;P&&K(P,r)&v;)P=this.items[++N];if(N!=j)P?this.items.splice(N,0,r):this.items.push(r);else{for(;P&&K(P,r)&p;)P=this.items[--N];N!=j&&(P?this.items.splice(N+1,0,r):this.items.unshift(r))}}else this.items.push(r),this.current||globalThis.queueMicrotask(this.flush.bind(this))}},G(br,fc,null,16),br);var vc=Symbol(),qa=class qa extends HTMLElement{constructor(){super(),this.flags$ns&&(this.flag$=this.flagExt$),this.setup$(),this.build()}setup$(){return this.__slots={},this.__F=0}[Wt](){return this.__F|=3,this}[lc](){if(this[es])return this[es].inited(this)}flag$(r){this.className=this.flags$ext=r}build(){return this}awaken(){return this}mount(){return this}remount(){return this.mount(),this}unmount(){return this}rendered(){return this}dehydrate(){return this}hydrate(){return this.autoschedule=!0,this}tick(r,i){return this.commit()}visit(){return this.commit()}commit(){return this.renderΦ?(this.__F|=256,this.render&&this.render(),this.rendered(),this.__F=(this.__F|512)&-257&-8193):(this.__F|=8192,this)}get autoschedule(){return(this.__F&64)!=0}set autoschedule(r){r?this.__F|=64:this.__F&=-65}set autorender(r){let i=this[tr]||(this[tr]={});i.value=r,this.mountedΦ&&Ee.schedule(this,i)}get renderΦ(){return!this.suspendedΦ}get mountingΦ(){return(this.__F&16)!=0}get mountedΦ(){return(this.__F&32)!=0}get awakenedΦ(){return(this.__F&8)!=0}get renderedΦ(){return(this.__F&512)!=0}get suspendedΦ(){return(this.__F&4096)!=0}get renderingΦ(){return(this.__F&256)!=0}get scheduledΦ(){return(this.__F&128)!=0}get hydratedΦ(){return(this.__F&2)!=0}get ssrΦ(){return(this.__F&1024)!=0}get scheduler(){return Ee}schedule(){return Ee.on("commit",this),this.__F|=128,this}unschedule(){return Ee.un("commit",this),this.__F&=-129,this}async suspend(r=null){let i=this.flags.incr("@suspended");return this.__F|=4096,Xu(r,Function)&&(await r(),this.unsuspend()),this}unsuspend(){return this.flags.decr("@suspended")==0&&(this.__F&=-4097,this.commit()),this}[mc](){if(this.visit(),this[Ht])return this[Ht]=null}[gc](r,i=null){if(this.mountedΦ&&r.moveBefore)r.moveBefore(this,i);else{let u=(this.__F&32)!=0&&r==this.parentNode;u&&er.moving.add(this),i?r.insertBefore(this,i):r.appendChild(this),u&&er.moving.delete(this)}return this}[hc](r,i){if(this.mountedΦ&&r.moveBefore)r.moveBefore(this[ns]||this,i);else{let u=this[ns]||this,s=(this.__F&32)!=0&&r==this.parentNode;s&&er.moving.add(this),i?r.insertBefore(u,i):r.appendChild(u),s&&er.moving.delete(this)}return this}[cc](){return this.__F&1024&&(this.__F=this.__F&-1025,this.classList.remove("_ssr_"),this.flags$ext&&this.flags$ext.indexOf("_ssr_")==0&&(this.flags$ext=this.flags$ext.slice(5)),this.__F&512||(this.innerHTML="")),this[Ht]&&(this[Ht]=null),this}[dc](){return this}connectedMoveCallback(){this.remount()}connectedCallback(){let r=this.__F,i=r&1,u=r&8;if(r&16384){this.__F=r&-16385,this.remount();return}if(!i&&!(r&1024)){pc.queue(this);return}if(r&48)return;this.__F|=16,i||this[Wt](),r&2||(this.flags$ext=this.className,this.__F|=2,this.hydrate(),this.commit()),u||(this.awaken(),this.__F|=8),Xn(this,"mount",[this]);let s=this.mount();return s&&Xu(s.then,Function)&&s.then(Ee.commit),r=this.__F=(this.__F|32)&-17,r&64&&this.schedule(),this[tr]&&Ee.schedule(this,this[tr]),this}disconnectedCallback(){var r;if(!(this.__F&16384)){if(er.moving.size){for(let i of sc(er.moving))if((r=i==null?void 0:i.contains)!=null&&r.call(i,this)){this.__F|=16384;return}}if(this.__F=this.__F&-49,this.__F&128&&this.unschedule(),Xn(this,"unmount",[this]),this.unmount(),this[tr])return Ee.unschedule(this,this[tr])}}dataForTagName(r){}};G(qa,vc,"Component",16);var We=qa;J();function bc(c,r){var i;return typeof r=="string"?typeof c===r:(i=r[Symbol.hasInstance])==null?void 0:i.call(r,c)}var rs=Symbol.for("#insertInto"),ts=Symbol.for("#removeFrom");function Ba(c,r,i={}){let u=r||globalThis.document.body,s=c;if(bc(c,Function)){let d=c,p=i.tick||(i.tick=function(){let v=i.context||(i.context=new jn(u,null)),j=Pe.context;Pe.context=v;let N=c(v,i);return Pe.context==v&&(Pe.context=j),i.node!=N&&(i.node&&globalThis.imba.unmount(i.node),N?((i.node=N)[rs](u),N.tick==We.prototype.tick&&(N.tick=i.tick,N.scheduledΦ),Cn(N,"unmount",function(){if(i.node==N)return i.node=null,Ee.unlisten("commit",i.tick)})):(i.node=N,Ee.unlisten("commit",i.tick))),N});return Ee.listen("commit",p),p()}else s.__F|=64;return s[rs](u),s}function yc(c){return c&&c[ts]&&c.parentNode&&c[ts](c.parentNode),c}var is=globalThis.imba||(globalThis.imba={});is.mount=Ba;is.unmount=yc;J();J();function os(){return globalThis.imba.uses_events_keyboard=!0,!0}var kc=Symbol(),Ha=class Ha{αesc(){return this.keyCode==27}αtab(){return this.keyCode==9}αenter(){return this.keyCode==13}αspace(){return this.keyCode==32}αup(){return this.keyCode==38}αdown(){return this.keyCode==40}αleft(){return this.keyCode==37}αright(){return this.keyCode==39}αdel(){return this.keyCode==8||this.keyCode==46}αkey(r){if(typeof r=="string")return this.key==r;if(typeof r=="number")return this.keyCode==r}αshift(){return!!this.shiftKey}αalt(){return!!this.altKey}αctrl(){return!!this.ctrlKey}αmeta(){return!!this.metaKey}αmod(){let r=globalThis.navigator.platform;return/^(Mac|iPhone|iPad|iPod)/.test(r||"")?!!this.metaKey:!!this.ctrlKey}};G(Ha,kc,"KeyboardEvent",1,Iu);var as=Ha;J();function on(){return globalThis.imba.uses_events_mouse=!0,!0}var wc=Symbol(),Wa=class Wa{αleft(){return this.button==0}αmiddle(){return this.button==1}αright(){return this.button==2}αshift(){return!!this.shiftKey}αalt(){return!!this.altKey}αctrl(){return!!this.ctrlKey}αmeta(){return!!this.metaKey}αmod(){let r=globalThis.navigator.platform;return/^(Mac|iPhone|iPad|iPod)/.test(r||"")?!!this.metaKey:!!this.ctrlKey}};G(Wa,wc,"MouseEvent",1,Mu);var us=Wa;function un(c,r){var i;return typeof r=="string"?typeof c===r:(i=r[Symbol.hasInstance])==null?void 0:i.call(r,c)}function La(c){let r;return c&&((r=c.toIterable)?r.call(c):c)}var xc=Symbol.for("#extendType"),Sc=Symbol.for("#modifierState"),Lt=Symbol.for("#sharedModifierState"),ss=Symbol.for("#onceHandlerEnd"),za=Symbol.for("#extendDescriptors"),Me=Symbol.for("#context"),zt=Symbol.for("#defaultPrevented"),Za=Symbol.for("#stopPropagation"),ls=Symbol.for("#self"),_c=Symbol.for("#target"),Tc=Symbol.for("#teleport");os();on();var Ec=Symbol(),Ua=class Ua{[xc](r){var i,u;let s=r[za]||(r[za]=(i=Object.getOwnPropertyDescriptors(r.prototype),u=i.constructor,delete i.constructor,i));return Object.defineProperties(this,s)}};G(Ua,Ec,"CustomEvent",1,CustomEvent);var ms=Ua,Ac=Symbol(),Ga=class Ga{get original(){return this.originalEvent||this}get[Sc](){var r,i;return(r=this[Me])[i=this[Me].step]||(r[i]={})}get[Lt](){var r,i;return(r=this[Me].handler)[i=this[Me].step]||(r[i]={})}[ss](r){return Cn(this[Me],"end",r)}αsel(r){return!!this.target.matches(String(r))}αclosest(r){return!!this.target.closest(String(r))}αprevent(){return this[zt]=!0,this.preventDefault(),!0}αtrap(){return this[Za]=!0,this.stopImmediatePropagation(),this[zt]=!0,this.preventDefault(),!0}αfocin(r){var u;let i=this[Me].element;return i=un(r,Element)?r:r?i.closest(r):i,(u=i==null?void 0:i.contains)==null?void 0:u.call(i,globalThis.document.activeElement)}αlog(...r){return console.info(...r),!0}αtrusted(){return!!this.isTrusted}αuntrusted(){return!this.isTrusted}αif(r){return!!r}αwait(r=250){return new Promise(function(i){return setTimeout(i,Or(r))})}αself(){return this.target==this[Me].element}αcooldown(r=250){let i=this[Lt];return i.active?!1:(i.active=!0,i.target=this[Me].element,i.target.flags.incr("cooldown"),this[ss](function(){return setTimeout(function(){return i.target.flags.decr("cooldown"),i.active=!1},Or(r))}),!0)}αthrottle(r=250,i="throttled"){let u=this[Lt];return u.active?(u.next&&u.next(!1),new Promise(function(s){return u.next=function(d){return u.next=null,s(d)}})):(u.active=!0,u.el||(u.el=this[Me].element),i&&u.el.flags.incr(i),Cn(this[Me],"end",function(){let s=Or(r);return u.interval=setInterval(function(){u.next?u.next(!0):(clearInterval(u.interval),i&&u.el.flags.decr(i),u.active=!1)},s)}),!0)}αdebounce(r=250){let i=this[Lt],u=this;return i.queue||(i.queue=[]),i.queue.push(i.last=u),new Promise(function(s){return setTimeout(function(){return i.last==u?(u.debounced=i.queue,i.last=null,i.queue=[],s(!0)):s(!1)},Or(r))})}αflag(r,i){let{element:u,step:s,state:d,id:p,current:v}=this[Me],j=un(i,Element)?i:i?u.closest(i):u;if(!j)return!0;this[Me].commit=!0,d[s]=p,j.flags.incr(r);let N=Date.now();return Cn(v,"end",function(){let K=Date.now()-N,P=Math.max(250-K,0);return setTimeout(function(){return j.flags.decr(r)},P)}),!0}αbusy(r){return this.αflag("busy",r)}αoutside(){let{handler:r}=this[Me];if(r&&r[ls])return!r[ls].parentNode.contains(this.target)}async αpost(r,i={}){return await globalThis.fetch(r,{method:"POST",...i})}async αfetch(r,i={}){return await globalThis.fetch(r,i)}};G(Ga,Ac,"Event",1,Event);var gs=Ga,$c=Symbol(),Va=class Va{αself(){let r=this[Me].element;return this.type=="focusout"?this.relatedTarget&&!r.contains(this.relatedTarget):this.type=="focusin"?!this.relatedTarget||!r.contains(this.relatedTarget):this.target==r}};G(Va,$c,"FocusEvent",1,FocusEvent);var hs=Va;function Rn(){return globalThis.imba.uses_events=!0,!0}var Cc=Symbol(),Ja=class Ja{constructor(r,i){this.params=r,this.closure=i}getHandlerForMethod(r,i){return r?r[i]?r:this.getHandlerForMethod(r.parentNode,i):null}abortCurrentHandlers(){var r;if(this.currentEvents)for(let i of La(this.currentEvents))i.aborted=!0,(r=i==null?void 0:i.resolver)==null||r.call(i,!0);return this}emit(r,...i){return Xn(this,r,i)}on(r,...i){return _t(this,r,...i)}once(r,...i){return Cn(this,r,...i)}un(r,...i){return Gi(this,r,...i)}get passiveΦ(){return this.params.passive}get captureΦ(){return this.params.capture}get silentΦ(){return this.params.silent}get globalΦ(){return this.params.global}async handleEvent(r){if(this.disabled)return;let i=this[_c]||r.currentTarget,u=this.params,s=null,d=u.silence||u.silent;this.count||(this.count=0),this.state||(this.state={});let p=this.lastState={element:i,event:r,modifiers:u,handler:this,id:++this.count,step:-1,state:this.state,commit:null,called:!1,current:null,aborted:!1};if(p.current=p,r.handle$mod&&r.handle$mod.apply(p,u.options||[])==!1)return;let v=Event[this.type+"$handle"]||Event[r.type+"$handle"]||this.guard;if(!(v&&v.apply(p,u.options||[])==!1)){this.currentEvents||(this.currentEvents=new Set),this.currentEvents.add(p);for(let j=0,N=Object.keys(u),K=N.length,P,ue;j<K&&(P=N[j],ue=u[P],!p.aborted);j++){if(p.step++,P[0]=="_")continue;P.indexOf("~")>0&&(P=P.split("~")[0]);let Q=null,X=[r,p],ae,Z=null,me,oe=!1,ee=typeof P=="string";if(P[0]=="$"&&P[1]=="_"&&un(ue[0],Function))r[Me]=p,P=ue[0],p.called=!0,P.passive||(p.commit=!0),X=[r,p].concat(ue.slice(1)),Z=i;else if(un(ue,Array)){X=ue.slice(),Q=X;for(let te=0,Y=La(X),he=Y.length;te<he;te++){let se=Y[te];if(typeof se=="string"&&se[0]=="~"&&se[1]=="$"){let ve=se.slice(2).split("."),fe=p[ve.shift()]||r;for(let Re=0,Oe=La(ve),Fe=Oe.length;Re<Fe;Re++){let Ae=Oe[Re];fe=fe?fe[Ae]:void 0}X[te]=fe}}}if(typeof P=="string"&&(me=P.match(/^(emit|flag|mod|moved|pin|fit|refit|map|remap|css)-(.+)$/))&&(Q||(Q=X=[]),X.unshift(me[2]),P=me[1]),P=="trap")r[Za]=!0,r.stopImmediatePropagation(),r[zt]=!0,r.preventDefault();else if(P=="stop")r[Za]=!0,r.stopImmediatePropagation();else if(P=="prevent")r[zt]=!0,r.preventDefault();else if(P=="commit")p.commit=!0;else if(P=="once")i.removeEventListener(r.type,this);else{if(P=="options"||P=="silence"||P=="silent")continue;if(P=="emit"){let te=X[0],Y=X[1];p.called=!0;let he=new CustomEvent(te,{bubbles:!0,detail:Y});he.originalEvent=r;let F=(this[Tc]||i).dispatchEvent(he)}else if(typeof P=="string"){P[0]=="!"&&(oe=!0,P=P.slice(1));let te="α"+P,Y=r[te];Y||(Y=this.type&&Event[this.type+"$"+P+"$mod"]),Y||(Y=r[P+"$mod"]||Event[r.type+"$"+P]||Event[P+"$mod"]),un(Y,Function)?(P=Y,Z=p,X=Q||[],r[te]&&(Z=r,r[Me]=p)):P[0]=="_"?(P=P.slice(1),Z=this.closure):Z=this.getHandlerForMethod(i,P)}}try{un(P,Function)?ae=P.apply(Z||i,X):Z&&(ae=Z[P].apply(Z,X)),ae&&un(ae.then,Function)&&ae!=Ee.$promise&&(p.commit&&!d&&Ee.commit(),ae=await ae)}catch(te){s=te;break}if(oe&&ae===!0||!oe&&ae===!1)break;p.value=ae}if(Xn(p,"end",p),p.commit&&!d&&Ee.commit(),this.currentEvents.delete(p),this.currentEvents.size==0&&this.emit("idle"),s!=null){if(this.type!="error"){let j=un(s,Error)?s.message:s,N=new CustomEvent("error",{detail:j,bubbles:!0,cancelable:!0});N.error=s,N.originalEvent=r;let K=i.dispatchEvent(N);if(N.defaultPrevented)return}throw s}return p}}};G(Ja,Cc,"EventHandler",16);var Zt=Ja,jc=Symbol(),Ya=class Ya{on$(r,i,u){let s="on$"+r,d=i.capture||!1,p=i.passive,v,j=d;return p&&(j={passive:p,capture:d}),un(this[s],Function)?(this[s].length>2&&(v=new Zt(i,u)),v=this[s](i,u,v,j)):(v=new Zt(i,u),this.addEventListener(r,v,j)),v}on$error(r,i,u,s){var d;return(d=r.options)!=null&&d.length&&(u.guard=function(...p){let v=this.event.error;return!!p.find(function(N){return un(v,N)})}),this.addEventListener("error",u,s),u}};G(Ya,jc,"Element",1,Element);var cs=Ya;J();var ds=`{"mi": "te", "gr": "article", "en": ["the"]}
{"mi": "te", "gr": "det", "en": ["Referring to a whole class of things or people designated by the noun that follows.", "Mr, mister, sir (capitalised)", "Used in front of another verb following a stative.", "Used in front of another verb following taea.", "Used before the names for the days of the week.", "Sometimes used before numbers with a following noun.", "Used before ordinal numbers including those using tua-."]}
{"mi": "ki", "gr": "particle", "en": ["to, toward."]}
{"mi": "ka", "gr": "particle", "en": ["Marks an event as occurring at some time or as existing", "when; used before a verb to indicate the start of an action or state", "Marks a verb as being in future tense", "Used when counting numbers", "Used in commands with taua and tātou", "now (for the first time); when used after kātahi anō"]}
{"mi": "e", "gr": "particle", "en": ["vocative, used before terms of address", "used before stating numbers", "imperative, used before verbs of one long vowel or two short vowels", "imperative, used for negative commands", "well, used as a discourse marker", "will, used to mark future tense"]}
{"mi": "e", "gr": "conj", "en": ["if", "when"]}
{"mi": "e", "gr": "intj", "en": ["of course", "where?", "oh, used as an exclamation to call attention or to express surprise or admiration", "no way, not on your life, no", "yes, indeed"]}
{"mi": "e", "gr": "prep", "en": ["by, used before agents of passive constructions"]}
{"mi": "ngā", "gr": "article", "en": ["the (plural)"]}
{"mi": "ngā", "gr": "noun", "en": ["breath"]}
{"mi": "ngā", "gr": "adj", "en": ["satisfied"]}
{"mi": "ngā", "gr": "verb", "en": ["to breathe"]}
{"mi": "o", "gr": "particle", "en": ["of"]}
{"mi": "a", "gr": "particle", "en": ["of", "used before place names and location words when they act as subject of a phrase"]}
{"mi": "a", "gr": "intj", "en": ["well then"]}
{"mi": "he", "gr": "article", "en": ["a, an, some: indefinite article"]}
{"mi": "ko", "gr": "particle", "en": ["Placed at the beginning of nominative phrases to signify that they are declarative"]}
{"mi": "ana", "gr": "det", "en": ["his, her of more than one thing"]}
{"mi": "ana", "gr": "noun", "en": ["cave"]}
{"mi": "atu", "gr": "adv", "en": ["away"]}
{"mi": "me", "gr": "particle", "en": ["and (joins two noun phrases)", "with (indicates people or things present when an event occurs)", "must, should (used before verbs to form a weak command)", "must be (used before nouns and adjectives)", "how should it be done (used before pēhea and a clause)", "if only (reverses what is stated)", "as if, like (simile)", "to see whether"]}
{"mi": "mai", "gr": "adv", "en": ["hither", "to, from", "since"]}
{"mi": "ia", "gr": "pron", "en": ["he / she / it (third person singular pronoun)"]}
{"mi": "kei", "gr": "particle", "en": ["at, in (present locative particle)", "have; in possession of", "like; as"]}
{"mi": "kia", "gr": "particle", "en": ["when; until (used for a future time)", "to; that (indicates a purpose, wish or effect) (used if second verb is passive or stative, or if the subject of the subordinate clause is different to the main clause)", "be, may (there be) (indicates desirability)", "specifies an amount", "not yet", "so that", "so that ... will not", "shouldn't"]}
{"mi": "kua", "gr": "particle", "en": ["aspect marker, marks actions as recently initiated, in progress, or completed"]}
{"mi": "rā", "gr": "noun", "en": ["sail (a piece of fabric attached to a boat)"]}
{"mi": "rā", "gr": "noun", "en": ["sun", "daytime, period of brightness in the morning and afternoon", "day, time cycle of 24 hours"]}
{"mi": "nei", "gr": "particle", "en": ["; marks spatial or temporal nearness to event in discourse"]}
{"mi": "haere", "gr": "verb", "en": ["go", "come"]}
{"mi": "hoki", "gr": "verb", "en": ["to return"]}
{"mi": "hoki", "gr": "adv", "en": ["also; too."]}
{"mi": "hoki", "gr": "noun", "en": ["The blue grenadier (Macruronus novaezelandiae), a merluccid hake."]}
{"mi": "tētahi", "gr": "article", "en": ["a, an, a particular: singular indefinite article"]}
{"mi": "ahau", "gr": "pron", "en": ["alternative form of au"]}
{"mi": "koe", "gr": "pron", "en": ["you (singular)"]}
{"mi": "koe", "gr": "verb", "en": ["to squeak, to scream, to squawk, to cry"]}
{"mi": "nō", "gr": "prep", "en": ["of, from", "at, in, on; used for time comments in the past", "because of, on account of, owing to"]}
{"mi": "mō", "gr": "prep", "en": ["for"]}
{"mi": "mā", "gr": "noun", "en": ["white"]}
{"mi": "mā", "gr": "particle", "en": ["for (representing future possession)", "by, made by, acted on (combined with e to indicate future tense for who will perform an action)", "by way of; via; through", "by means of; on (followed by runga)"]}
{"mi": "ā", "gr": "noun", "en": ["collarbone"]}
{"mi": "ā", "gr": "verb", "en": ["to drive (something), such as cattle or other livestock", "to urge or compel (something) to move"]}
{"mi": "ā", "gr": "intj", "en": ["yeah, yes"]}
{"mi": "ō", "gr": "det", "en": ["your of more than one thing"]}
{"mi": "ō", "gr": "prep", "en": ["possessive article used before a pronoun, like the functions of and -’s in English"]}
{"mi": "ō", "gr": "verb", "en": ["to have, to own"]}
{"mi": "ō", "gr": "noun", "en": ["food, provisions"]}
{"mi": "tā", "gr": "verb", "en": ["to dump, strike, beat, thump, throw down, tackle", "to apply tattoo", "to carve, cut, etch, fashion", "to print"]}
{"mi": "tō", "gr": "noun", "en": ["plant stem/stalk – especially of non-woody monocots such as raupō (Typha orientalis), maize etc.", "finger", "sugar cane"]}
{"mi": "tō", "gr": "noun", "en": ["stove"]}
{"mi": "tō", "gr": "verb", "en": ["to pull", "to open or shut", "to haul, i.e. to move something heavy by pulling along a surface", "to hold down and move something with a cursor across an interface"]}
{"mi": "tō", "gr": "noun", "en": ["dragging", "portage"]}
{"mi": "tō", "gr": "det", "en": ["your (singular)", "belonging to (combines with dual and plural pronouns)", "Denotes ownership of.", "that of, the one of"]}
{"mi": "tō", "gr": "verb", "en": ["to be calm, peaceful, tranquil", "to set (of an astronomical body)"]}
{"mi": "tō", "gr": "verb", "en": ["to vibrate, tingle"]}
{"mi": "tāna", "gr": "det", "en": ["his/her; singular alienable"]}
{"mi": "tōna", "gr": "det", "en": ["his, her; singular inalienable"]}
{"mi": "āna", "gr": "det", "en": ["his, her; dual/plural alienable"]}
{"mi": "ōna", "gr": "det", "en": ["his, her; dual/plural inalienable"]}
{"mi": "tāku", "gr": "pron", "en": ["my; singular alienable", "mine"]}
{"mi": "tōku", "gr": "pron", "en": ["my; singular inalienable", "mine"]}
{"mi": "āku", "gr": "det", "en": ["my; dual/plural alienable"]}
{"mi": "ōku", "gr": "det", "en": ["my; dual/plural inalienable"]}
{"mi": "tāu", "gr": "det", "en": ["your; singular alienable"]}
{"mi": "tōu", "gr": "det", "en": ["your; singular inalienable"]}
{"mi": "āu", "gr": "det", "en": ["your; dual/plural alienable"]}
{"mi": "ōu", "gr": "det", "en": ["your; dual/plural inalienable"]}
{"mi": "tēnei", "gr": "det", "en": ["this (referring to something near to the speaker)"]}
{"mi": "tērā", "gr": "det", "en": ["that, yonder (referring to something distant from both speaker and listener)"]}
{"mi": "tēnā", "gr": "det", "en": ["that (referring to something near the listener)"]}
{"mi": "aua", "gr": "noun", "en": ["yellow-eye mullet, (Aldrichetta forsteri)"]}
{"mi": "aua", "gr": "particle", "en": ["Negative imperative particle: no! don't!"]}
{"mi": "kore", "gr": "adj", "en": ["without (not having)"]}
{"mi": "kore", "gr": "num", "en": ["zero"]}
{"mi": "tonu", "gr": "adv", "en": ["still, yet", "nonetheless, all the same", "very, exceedingly", "indeed, in fact", "on the contrary", "immediately, promptly", "quite, fairly", "almost, just about, virtually"]}
{"mi": "rawa", "gr": "adj", "en": ["many, numerous"]}
{"mi": "rawa", "gr": "adv", "en": ["very, really, too"]}
{"mi": "rawa", "gr": "noun", "en": ["goods, property", "wealth"]}
{"mi": "tino", "gr": "noun", "en": ["essence, essential, substance"]}
{"mi": "tino", "gr": "adj", "en": ["main, principal", "most, more (intensifier)"]}
{"mi": "tino", "gr": "intj", "en": ["used to show strong agreement with a statement"]}
{"mi": "anō", "gr": "adv", "en": ["again"]}
{"mi": "noa", "gr": "particle", "en": ["merely, suddenly, unintentionally, etc. Denotes an absence of limitations or conditions. (Follows immediately after the word.)"]}
{"mi": "noa", "gr": "verb", "en": ["to be unrestricted"]}
{"mi": "noa", "gr": "adj", "en": ["common, ordinary"]}
{"mi": "pea", "gr": "noun", "en": ["bear"]}
{"mi": "ake", "gr": "particle", "en": ["up, upward"]}
{"mi": "ake", "gr": "noun", "en": ["broadleaf hopbush (Dodonaea viscosa)"]}
{"mi": "ai", "gr": "particle", "en": ["Marks an event as habitual"]}
{"mi": "ai", "gr": "intj", "en": ["yikes, gosh"]}
{"mi": "ai", "gr": "verb", "en": ["to copulate"]}
{"mi": "hei", "gr": "particle", "en": ["Future locative particle"]}
{"mi": "hei", "gr": "noun", "en": ["flower garland, lei"]}
{"mi": "rātou", "gr": "pron", "en": ["they, them (plural; three or more people)"]}
{"mi": "mātou", "gr": "pron", "en": ["First person plural exclusive"]}
{"mi": "tātou", "gr": "pron", "en": ["First person plural inclusive"]}
{"mi": "koutou", "gr": "pron", "en": ["you (plural; three or more people)"]}
{"mi": "māua", "gr": "pron", "en": ["First person dual exclusive"]}
{"mi": "tāua", "gr": "pron", "en": ["First person dual inclusive"]}
{"mi": "rāua", "gr": "pron", "en": ["they two, them two (dual; two people)"]}
{"mi": "kōrua", "gr": "pron", "en": ["you two (dual; two people)"]}
{"mi": "koro", "gr": "noun", "en": ["grandfather", "term of address to an elderly man"]}
{"mi": "koro", "gr": "noun", "en": ["cove, inlet", "noose", "white rātā (Metrosideros perforata)"]}
{"mi": "koro", "gr": "verb", "en": ["to desire"]}
{"mi": "nui", "gr": "adj", "en": ["big"]}
{"mi": "roto", "gr": "noun", "en": ["interior", "lake"]}
{"mi": "roto", "gr": "prep", "en": ["in, within"]}
{"mi": "noho", "gr": "verb", "en": ["to sit", "to reside, dwell", "to reign", "to be still, to remain in one place"]}
{"mi": "kōrero", "gr": "verb", "en": ["To speak, talk, address", "To read"]}
{"mi": "kōrero", "gr": "noun", "en": ["A story.", "A conversation.", "A discussion."]}
{"mi": "mahi", "gr": "verb", "en": ["to work, do, perform, make, accomplish, practise, raise (money)"]}
{"mi": "mahi", "gr": "noun", "en": ["work, job, employment, trade (work), practice, occupation, activity, exercise, operation, function", "abundance, lots of, many, heaps of"]}
{"mi": "whare", "gr": "noun", "en": ["house", "any building", "people in a house", "suit (cards)"]}
{"mi": "tangata", "gr": "noun", "en": ["human being, person, man"]}
{"mi": "mea", "gr": "noun", "en": ["thing", "a so-and-so (something, someone, or a place the speaker does not know)"]}
{"mi": "mea", "gr": "adj", "en": ["red, reddish"]}
{"mi": "mea", "gr": "noun", "en": ["mayor"]}
{"mi": "tae", "gr": "noun", "en": ["excrement, filth", "sap or gum excreted from plants", "refuse, waste, rubbish"]}
{"mi": "tae", "gr": "noun", "en": ["stain", "dye, pigment", "colour"]}
{"mi": "tae", "gr": "verb", "en": ["to arrive at or to somewhere", "to extend towards, to reach", "to proceed"]}
{"mi": "kite", "gr": "verb", "en": ["to see", "to find, to perceive", "to discover", "to recognize, to detect"]}
{"mi": "kite", "gr": "noun", "en": ["sight", "perception", "divination"]}
{"mi": "rongo", "gr": "verb", "en": ["to hear", "to perceive, to sense, to feel", "to obey, to heed"]}
{"mi": "rongo", "gr": "noun", "en": ["hearing", "any other sense excluding sight", "perception, awareness", "fame", "news"]}
{"mi": "rongo", "gr": "adj", "en": ["perceivable, physical"]}
{"mi": "rongo", "gr": "noun", "en": ["peace"]}
{"mi": "tiro", "gr": "verb", "en": ["to observe, to view", "to inspect"]}
{"mi": "tiro", "gr": "noun", "en": ["viewing, view"]}
{"mi": "mōhio", "gr": "verb", "en": ["to know", "to understand, comprehend", "to realize", "to recognize"]}
{"mi": "mōhio", "gr": "noun", "en": ["knowledge", "an expert", "wisdom"]}
{"mi": "mōhio", "gr": "adj", "en": ["knowledgable, intelligent, clever, bright", "wise", "skillful", "on one's guard, vigilant", "suspicious"]}
{"mi": "whakaaro", "gr": "verb", "en": ["to think, plan, consider, decide"]}
{"mi": "hiahia", "gr": "noun", "en": ["desire, wish, want", "aspiration, hope", "need"]}
{"mi": "hiahia", "gr": "verb", "en": ["to desire, wish, want, crave", "to need"]}
{"mi": "pai", "gr": "adj", "en": ["good", "excellent", "suitable", "nice", "pleasant"]}
{"mi": "pai", "gr": "noun", "en": ["goodness", "excellence", "suitability"]}
{"mi": "pai", "gr": "verb", "en": ["to like, to approve"]}
{"mi": "kāore", "gr": "particle", "en": ["not, marks negation"]}
{"mi": "Kāti", "gr": "noun", "en": ["alternative form of Ngāti."]}
{"mi": "āe", "gr": "particle", "en": ["yes"]}
{"mi": "aha", "gr": "pron", "en": ["what (interrogative pronoun)", "what kind of (interrogative pronoun)", "anything, (with negation) nothing"]}
{"mi": "aha", "gr": "verb", "en": ["to do what, something (interrogative verb)"]}
{"mi": "wai", "gr": "noun", "en": ["water (clear liquid H₂O)", "liquid", "juice of plants from fruits etc.", "beverage from such liquids"]}
{"mi": "wai", "gr": "pron", "en": ["who?"]}
{"mi": "hea", "gr": "verb", "en": ["grieve"]}
{"mi": "pēhea", "gr": "verb", "en": ["how?; of what sort?; in what way?"]}
{"mi": "pēhea", "gr": "verb", "en": ["what way?; in which direction?"]}
{"mi": "tahi", "gr": "num", "en": ["one, single"]}
{"mi": "tahi", "gr": "adv", "en": ["together, as one, in unison", "simultaneously", "altogether"]}
{"mi": "tahi", "gr": "verb", "en": ["to sweep, to clear away"]}
{"mi": "tahi", "gr": "noun", "en": ["sweeping action"]}
{"mi": "rua", "gr": "num", "en": ["two"]}
{"mi": "rua", "gr": "noun", "en": ["pit", "cavity"]}
{"mi": "toru", "gr": "num", "en": ["three"]}
{"mi": "whā", "gr": "num", "en": ["four"]}
{"mi": "whā", "gr": "noun", "en": ["any leaf of certain plants like taro and harakeke with a long and thick rachis (stalk)", "feather"]}
{"mi": "rima", "gr": "num", "en": ["five"]}
{"mi": "ono", "gr": "num", "en": ["six"]}
{"mi": "whitu", "gr": "num", "en": ["seven"]}
{"mi": "waru", "gr": "num", "en": ["eight"]}
{"mi": "waru", "gr": "verb", "en": ["to scrape", "to grate", "to shave (of hair)", "to peel"]}
{"mi": "waru", "gr": "noun", "en": ["any scraper", "wood plane"]}
{"mi": "iwa", "gr": "num", "en": ["nine"]}
{"mi": "tekau", "gr": "num", "en": ["twenty, score (20).", "ten"]}
{"mi": "rau", "gr": "noun", "en": ["leaf", "sheet of paper", "page of a book"]}
{"mi": "rau", "gr": "num", "en": ["hundred"]}
{"mi": "mano", "gr": "num", "en": ["thousand"]}
{"mi": "mano", "gr": "noun", "en": ["multitude, host (of a very large amount)"]}
{"mi": "mano", "gr": "noun", "en": ["interior, heart, core"]}
{"mi": "mano", "gr": "noun", "en": ["creed"]}
{"mi": "tāne", "gr": "noun", "en": ["man (adult male human)"]}
{"mi": "wahine", "gr": "noun", "en": ["woman"]}
{"mi": "tamariki", "gr": "noun", "en": ["plural of tamaiti"]}
{"mi": "tama", "gr": "noun", "en": ["child regardless of sex", "any male child i.e. son, nephew"]}
{"mi": "tamaiti", "gr": "noun", "en": ["child"]}
{"mi": "tamāhine", "gr": "noun", "en": ["plural of tamahine"]}
{"mi": "whānau", "gr": "verb", "en": ["to give birth", "to be born"]}
{"mi": "whānau", "gr": "noun", "en": ["an extended family; a group of family members"]}
{"mi": "iwi", "gr": "noun", "en": ["bone", "strength", "extended kinship group, tribe, nation, people, nationality, race (often refers to a large group of people descended from a common ancestor and associated with a distinct territory)"]}
{"mi": "hapū", "gr": "adj", "en": ["pregnant"]}
{"mi": "hapū", "gr": "noun", "en": ["clan or subtribe"]}
{"mi": "marae", "gr": "noun", "en": ["The courtyard of a wharenui or meeting-house and the buildings around it."]}
{"mi": "reo", "gr": "noun", "en": ["voice", "speech, utterance", "language"]}
{"mi": "kura", "gr": "adj", "en": ["red"]}
{"mi": "kura", "gr": "noun", "en": ["school, an educational institution providing primary and secondary education."]}
{"mi": "kura", "gr": "noun", "en": ["liquid container, tank"]}
{"mi": "ako", "gr": "verb", "en": ["to learn, to study"]}
{"mi": "tauira", "gr": "noun", "en": ["illustration", "formula", "pattern, design", "example, model, template", "precedent", "draft", "sample, specimen", "student, pupil, apprentice, cadet"]}
{"mi": "tauira", "gr": "verb", "en": ["to preordain", "to model"]}
{"mi": "tuhi", "gr": "verb", "en": ["to point at"]}
{"mi": "tuhi", "gr": "verb", "en": ["to draw", "to write"]}
{"mi": "tuhi", "gr": "noun", "en": ["pattern, adornment"]}
{"mi": "pānui", "gr": "verb", "en": ["announce, notify, advertise, publish, proclaim"]}
{"mi": "pānui", "gr": "verb", "en": ["read, speak aloud, narrate, recite"]}
{"mi": "pānui", "gr": "noun", "en": ["public notice, announcement, poster, proclamation"]}
{"mi": "pukapuka", "gr": "noun", "en": ["Brachyglottis repanda, shrub with soft leaves with white undersides.", "book"]}
{"mi": "kai", "gr": "verb", "en": ["to eat (to consume food)"]}
{"mi": "kai", "gr": "noun", "en": ["food"]}
{"mi": "inu", "gr": "noun", "en": ["liquid, drink"]}
{"mi": "inu", "gr": "verb", "en": ["to drink"]}
{"mi": "whenua", "gr": "noun", "en": ["land", "country", "state", "ground", "placenta, afterbirth"]}
{"mi": "moana", "gr": "noun", "en": ["ocean, sea"]}
{"mi": "awa", "gr": "noun", "en": ["river, creek, stream", "groove, fluting", "channel", "landing for canoes"]}
{"mi": "maunga", "gr": "noun", "en": ["mountain"]}
{"mi": "rangi", "gr": "noun", "en": ["sky, heaven", "weather", "tune, air, melody"]}
{"mi": "rangi", "gr": "noun", "en": ["daytime, day, period of brightness from morning to afternoon"]}
{"mi": "marama", "gr": "noun", "en": ["moon", "month"]}
{"mi": "Marama", "gr": "name", "en": ["the Moon (sole natural satellite of the Earth)"]}
{"mi": "tau", "gr": "noun", "en": ["year (time it takes for the Earth to complete one revolution of the Sun)", "year (time it takes for any planetary body to make one revolution around another body)", "year (a period between set dates that mark a year)", "year (scheduled part of a calendar year spent in a specific activity)", "year (Julian year)", "year (level or grade at school or college)"]}
{"mi": "tau", "gr": "verb", "en": ["to settle"]}
{"mi": "tau", "gr": "noun", "en": ["knowledge"]}
{"mi": "tau", "gr": "verb", "en": ["to know"]}
{"mi": "wā", "gr": "noun", "en": ["time"]}
{"mi": "ao", "gr": "noun", "en": ["daytime"]}
{"mi": "ao", "gr": "noun", "en": ["world"]}
{"mi": "ao", "gr": "noun", "en": ["cloud"]}
{"mi": "pō", "gr": "noun", "en": ["night", "day, time cycle of 24 hours"]}
{"mi": "ahi", "gr": "noun", "en": ["fire (oxidation reaction)"]}
{"mi": "rākau", "gr": "noun", "en": ["A weapon; a club or bat.", "A tree, stick, spar, or mast.", "Wood or timber."]}
{"mi": "manu", "gr": "noun", "en": ["bird (animal)", "kite", "a designated territory for muttonbirding.", "a person held in high esteem"]}
{"mi": "Manu", "gr": "name", "en": ["a male given name"]}
{"mi": "ika", "gr": "noun", "en": ["fish, marine animal, aquatic animal - any creature that swims in fresh or salt water including marine mammals such as whales", "slain warrior, victim", "prized possession"]}
{"mi": "ika", "gr": "noun", "en": ["cluster, band, troop, group, company, heap"]}
{"mi": "kurī", "gr": "noun", "en": ["dog", "horse"]}
{"mi": "kurī", "gr": "adj", "en": ["without purpose, unwarranted, pointless"]}
{"mi": "tangi", "gr": "noun", "en": ["weeping, mourning, lament", "sound", "pitch", "intonation"]}
{"mi": "tangi", "gr": "verb", "en": ["to cry (to weep)", "to sing, to make a sound"]}
{"mi": "waiata", "gr": "noun", "en": ["song"]}
{"mi": "waiata", "gr": "verb", "en": ["to sing"]}
{"mi": "haka", "gr": "noun", "en": ["A war dance; a haka."]}
{"mi": "patu", "gr": "verb", "en": ["to strike, to beat, to kill"]}
{"mi": "patu", "gr": "noun", "en": ["beating, assault, killing", "weapon, club"]}
{"mi": "tū", "gr": "verb", "en": ["to stand", "to erect", "to establish, to convene", "to remain"]}
{"mi": "tū", "gr": "noun", "en": ["stance, position"]}
{"mi": "eke", "gr": "verb", "en": ["to climb, to ascend, to rise", "to mount, to ride on", "to embark", "to surf", "to skate, to skateboard", "to raft", "to place something on", "to achieve, to attain"]}
{"mi": "eke", "gr": "noun", "en": ["embarking, boarding", "surfing", "rafting, rafter"]}
{"mi": "heke", "gr": "verb", "en": ["to descend, to fall", "to migrate", "to ebb", "to drip", "to surf", "to raft"]}
{"mi": "heke", "gr": "noun", "en": ["descent", "rafting, rafter", "surfing"]}
{"mi": "piki", "gr": "noun", "en": ["fig tree", "fig"]}
{"mi": "piki", "gr": "verb", "en": ["to climb, to scale"]}
{"mi": "piki", "gr": "verb", "en": ["to support, to assist"]}
{"mi": "kawe", "gr": "verb", "en": ["to carry, to bring, to bear", "to fetch", "to convey (of meaning etc.)", "to conduct (heat, energy etc.)", "to induce, to influence", "to persevere, to persist"]}
{"mi": "kawe", "gr": "noun", "en": ["handle (of a basket etc.), strap (of a bag, backpack)"]}
{"mi": "kawe", "gr": "noun", "en": ["tentacle", "spiral moko pattern on one's facial cheeks"]}
{"mi": "tiki", "gr": "noun", "en": ["figurine, carved figure"]}
{"mi": "tiki", "gr": "verb", "en": ["to fetch, to get"]}
{"mi": "tiki", "gr": "verb", "en": ["to fail"]}
{"mi": "tuku", "gr": "verb", "en": ["to slacken, to let go", "to release", "to permit, allow", "to give up", "to present, to offer", "to send", "to post"]}
{"mi": "tuku", "gr": "noun", "en": ["offering", "presentation, submission"]}
{"mi": "hoko", "gr": "verb", "en": ["to barter, exchange, trade"]}
{"mi": "ringa", "gr": "noun", "en": ["hand", "arm", "weapon", "handlebar"]}
{"mi": "waewae", "gr": "noun", "en": ["foot", "leg", "footprint", "footstep"]}
{"mi": "waewae", "gr": "noun", "en": ["New Zealand rough skate (Zearaja nasuta)"]}
{"mi": "mata", "gr": "noun", "en": ["eye (organ of sight)", "edge, point, tip", "face", "surface", "headland", "mesh (of a net)"]}
{"mi": "mata", "gr": "adj", "en": ["raw (uncooked)"]}
{"mi": "kanohi", "gr": "noun", "en": ["face", "view, sight, vision", "eye, eyeball"]}
{"mi": "ngutu", "gr": "noun", "en": ["lip", "beak, bill", "mouth (of a cave, river, etc.)", "lip, rim (of a vessel)", "mouthpiece", "muzzle"]}
{"mi": "kupu", "gr": "noun", "en": ["word, vocabulary", "saying, talk", "message, statement", "utterance", "lyric", "culm (of grass, bamboo)"]}
{"mi": "kupu", "gr": "verb", "en": ["to speak"]}
{"mi": "aroha", "gr": "noun", "en": ["love"]}
{"mi": "kino", "gr": "adj", "en": ["bad", "gory"]}
{"mi": "kino", "gr": "noun", "en": ["harm", "hate"]}
{"mi": "kino", "gr": "verb", "en": ["to dislike, to hate"]}
{"mi": "kino", "gr": "verb", "en": ["evil, bad", "naughty", "ugly", "untidy", "spoiled, damaged", "defective, faulty"]}
{"mi": "roa", "gr": "adj", "en": ["long", "tall", "slow"]}
{"mi": "wera", "gr": "verb", "en": ["to burn", "to be burnt; to be hot"]}
{"mi": "wera", "gr": "noun", "en": ["heat"]}
{"mi": "ora", "gr": "verb", "en": ["to exist", "to be alive, well, safe, cured, recovered, healthy", "to survive"]}
{"mi": "ora", "gr": "noun", "en": ["life", "existence"]}
{"mi": "mate", "gr": "noun", "en": ["death", "sickness, illness, disease", "misfortune, calamity, defect", "desire, need, want"]}
{"mi": "mate", "gr": "verb", "en": ["to be dead, deceased, killed", "to be sick, ill, unwell, diseased", "to be defeated, conquered, beaten, overcome", "to be in want of, deeply in love"]}
{"mi": "moe", "gr": "verb", "en": ["to sleep, to nap", "to dream", "to marry", "to die", "to faint"]}
{"mi": "moe", "gr": "noun", "en": ["sleep", "dream"]}
{"mi": "moe", "gr": "adj", "en": ["dormant"]}
{"mi": "riri", "gr": "verb", "en": ["to be angry, to rage", "to attack"]}
{"mi": "riri", "gr": "noun", "en": ["anger, rage, wrath", "fight, quarrel, battle"]}
{"mi": "mataku", "gr": "adj", "en": ["afraid"]}
{"mi": "mataku", "gr": "verb", "en": ["to fear (feel fear about (something))"]}
{"mi": "whakahaere", "gr": "noun", "en": ["operation", "organization", "control", "administration"]}
{"mi": "whakahaere", "gr": "verb", "en": ["to organise", "to conduct, lead, operate, execute, direct, manage, control, administer, institute, implement, perform"]}
{"mi": "whakamahi", "gr": "verb", "en": ["to employ, use, utilise, put to work, operate, put to use"]}
{"mi": "whakamahi", "gr": "noun", "en": ["use"]}
{"mi": "whakahoki", "gr": "verb", "en": ["to turn back, to make something return", "to give back", "to answer"]}
{"mi": "Whakatū", "gr": "name", "en": ["Nelson (a city in New Zealand)"]}
{"mi": "whakaatu", "gr": "verb", "en": ["to show, reveal, display, exhibit", "to announce, disclose", "to notify", "to point out", "to perform"]}
{"mi": "whakaatu", "gr": "noun", "en": ["notification"]}
{"mi": "kaimahi", "gr": "noun", "en": ["worker, employee"]}
{"mi": "kaitiaki", "gr": "noun", "en": ["guardian, trustee"]}
{"mi": "kaiwhakahaere", "gr": "noun", "en": ["administrator, boss, director, organizer, manager", "council, advocate, agent, advisor"]}
{"mi": "kaikōrero", "gr": "noun", "en": ["speaker (one who speaks)"]}
{"mi": "hanga", "gr": "verb", "en": ["to make; to create", "to build"]}
{"mi": "hanga", "gr": "noun", "en": ["group of people", "the manner in which something is made or built", "construction", "thing; object which has been made; product"]}
{"mi": "kitea", "gr": "verb", "en": ["passive of kite"]}
{"mi": "whakaora", "gr": "verb", "en": ["to revive, to resuscitate", "to save, to rescue", "to heal, to cure"]}
{"mi": "tuatahi", "gr": "num", "en": ["first"]}
{"mi": "tuarua", "gr": "num", "en": ["second"]}
{"mi": "tuatoru", "gr": "num", "en": ["third"]}
{"mi": "mutu", "gr": "verb", "en": ["to cut, to chop", "to amputate", "to cease, to complete, to end, to finish"]}
{"mi": "mutu", "gr": "adv", "en": ["only, exclusively, nothing more, that's it"]}
{"mi": "mutu", "gr": "noun", "en": ["bird trap or snare consisting of a stick with a long perpendicular arm which birds would perch on"]}
{"mi": "tīmata", "gr": "verb", "en": ["to begin, to start, kick off, commence"]}
{"mi": "tīmata", "gr": "noun", "en": ["drama, play, program", "acting, performance"]}
{"mi": "tīmatanga", "gr": "noun", "en": ["beginning, introduction, start, commencement"]}
{"mi": "mutunga", "gr": "noun", "en": ["end; finish; conclusion"]}
{"mi": "hōu", "gr": "adj", "en": ["new (recently made or created)"]}
{"mi": "hou", "gr": "verb", "en": ["to bind or lash together"]}
{"mi": "hou", "gr": "adj", "en": ["alternative form of hōu (“new”)"]}
{"mi": "hou", "gr": "verb", "en": ["to move or force downwards", "to strike down, to peck etc"]}
{"mi": "rongonui", "gr": "adj", "en": ["famous; well-known; renowned"]}
{"mi": "rongonui", "gr": "noun", "en": ["fame; renown"]}
{"mi": "Aotearoa", "gr": "name", "en": ["New Zealand (a country and archipelago of Oceania, to the east of Australia)", "The national anthem of New Zealand, God Defend New Zealand", "North Island (of New Zealand)"]}
{"mi": "Māori", "gr": "name", "en": ["the Māori culture or ethnicity", "a member of the Māori culture or ethnicity, a Māori person"]}
{"mi": "māori", "gr": "adj", "en": ["normal, usual, natural, common, ordinary", "native, indigenous, fresh (of water), belonging to Aotearoa/New Zealand, clear, intelligible", "freely, without restraint, without ceremony, without object, unannounced"]}
{"mi": "māori", "gr": "noun", "en": ["aboriginal inhabitant, indigenous person, native (especially of the Pacific islands)"]}
{"mi": "pākehā", "gr": "noun", "en": ["New Zealander of European descent", "New Zealander of non-Māori descent", "foreigner, alien"]}
{"mi": "pākehā", "gr": "verb", "en": ["to become pākehā, to become westernised or influenced by British culture"]}
{"mi": "rangatira", "gr": "noun", "en": ["chief, chieftain, chieftainess, though of lesser rank than an ariki (paramount chief)", "highborn person", "master, mistress", "leader, boss"]}
{"mi": "rangatira", "gr": "adj", "en": ["chiefly", "highborn", "high-ranking"]}
{"mi": "tūpuna", "gr": "noun", "en": ["plural of tupuna"]}
{"mi": "tupuna", "gr": "noun", "en": ["A grandparent, or any ancestor more remote than one's parents."]}
{"mi": "tīpuna", "gr": "noun", "en": ["plural of tipuna"]}
{"mi": "kuia", "gr": "noun", "en": ["grandmother, old woman, female elder"]}
{"mi": "kaumātua", "gr": "noun", "en": ["elder"]}
{"mi": "matua", "gr": "noun", "en": ["parent", "father"]}
{"mi": "matua", "gr": "adj", "en": ["adult, grown up", "main, chief, important"]}
{"mi": "tuakana", "gr": "noun", "en": ["older brother of a male", "older sister of a female"]}
{"mi": "teina", "gr": "noun", "en": ["younger brother of a male", "younger sister of a female", "any junior relative including cousins"]}
{"mi": "tuahine", "gr": "noun", "en": ["sister (of a man)"]}
{"mi": "tungāne", "gr": "noun", "en": ["brother (of a female)", "male cousin (of a female)"]}
{"mi": "pūtea", "gr": "noun", "en": ["a special basket woven from leaves of harakeke (Phormium tenax) to hold belongings like clothing", "savings", "fund", "finance"]}
{"mi": "pūtea", "gr": "adj", "en": ["financial"]}
{"mi": "moni", "gr": "noun", "en": ["money, cash"]}
{"mi": "utu", "gr": "noun", "en": ["pay; payment; salary", "revenge; payback"]}
{"mi": "utu", "gr": "verb", "en": ["to pay", "to reply; to answer"]}
{"mi": "ata", "gr": "noun", "en": ["form, shape, image", "reflection", "shadow"]}
{"mi": "ata", "gr": "noun", "en": ["morning"]}
{"mi": "ahiahi", "gr": "noun", "en": ["evening (time of day)", "afternoon"]}
{"mi": "ahiahi", "gr": "verb", "en": ["to become evening"]}
{"mi": "awatea", "gr": "noun", "en": ["daylight"]}
{"mi": "raro", "gr": "noun", "en": ["the underworld", "bottom", "north"]}
{"mi": "raro", "gr": "prep", "en": ["below", "under"]}
{"mi": "runga", "gr": "adv", "en": ["upwards, up"]}
{"mi": "runga", "gr": "prep", "en": ["above, over, upon"]}
{"mi": "mua", "gr": "adv", "en": ["front, forward", "to the future", "former, past, old"]}
{"mi": "muri", "gr": "adv", "en": ["behind, rear", "after", "afterwards, later"]}
{"mi": "tua", "gr": "noun", "en": ["back, rear of the body"]}
{"mi": "tua", "gr": "adj", "en": ["further, beyond"]}
{"mi": "tua", "gr": "adv", "en": ["this side, here"]}
{"mi": "tua", "gr": "verb", "en": ["to fell, chop down a tree"]}
{"mi": "tai", "gr": "noun", "en": ["nearshore waters", "seawards area including the coast", "tide"]}
{"mi": "kaha", "gr": "noun", "en": ["strength, power, energy"]}
{"mi": "kaha", "gr": "verb", "en": ["to be strong, be courageous"]}
{"mi": "kaha", "gr": "noun", "en": ["rope, noose"]}
{"mi": "kaha", "gr": "noun", "en": ["hill ridge", "lineage"]}
{"mi": "tika", "gr": "verb", "en": ["straight, direct", "correct, true, lawful, proper"]}
{"mi": "tika", "gr": "noun", "en": ["directness", "truth, justice", "rights"]}
{"mi": "hē", "gr": "noun", "en": ["fault"]}
{"mi": "hē", "gr": "verb", "en": ["to err"]}
{"mi": "hē", "gr": "adj", "en": ["wrong"]}
{"mi": "au", "gr": "pron", "en": ["I (personal pronoun)", "me (direct object of a verb)", "me (object of a preposition)", "me (indirect object of a verb)"]}
{"mi": "taki", "gr": "adv", "en": ["one by one to completion, each and every"]}
{"mi": "āhua", "gr": "adv", "en": ["somewhat", "approximately"]}
{"mi": "auau", "gr": "adv", "en": ["frequently, again and again"]}
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
{"mi": "puku", "gr": "adv", "en": ["very"]}
{"mi": "au", "gr": "noun", "en": ["current (water)", "whirlpool; rapid", "wake (of a canoe, etc.)", "sea; ocean"]}
{"mi": "au", "gr": "noun", "en": ["gall; gall bladder"]}
{"mi": "au", "gr": "noun", "en": ["smoke", "cloud", "mist; fog"]}
{"mi": "au", "gr": "verb", "en": ["to howl, bark (of a dog)"]}
{"mi": "ahu", "gr": "verb", "en": ["to care for, to foster", "to face or move in a certain direction"]}
{"mi": "ahu", "gr": "verb", "en": ["to heap up"]}
{"mi": "ahu", "gr": "noun", "en": ["mound"]}
{"mi": "pere", "gr": "noun", "en": ["karapapa (Alseuosmia macrophylla)", "Alseuosmia banksii var. linariifolia"]}
{"mi": "pere", "gr": "verb", "en": ["to flick, to yank"]}
{"mi": "pere", "gr": "noun", "en": ["dart", "arrow", "an adze-shaped wooden hoe", "vector"]}
{"mi": "pere", "gr": "noun", "en": ["riddle"]}
{"mi": "pere", "gr": "noun", "en": ["bell"]}
{"mi": "pere", "gr": "verb", "en": ["to ring (a bell), to toll"]}
{"mi": "puru", "gr": "adv", "en": ["absolutely, extremely, stuffed"]}
{"mi": "uta", "gr": "noun", "en": ["interior (the inside regions of a country or island)", "land (from a sea or water perspective)", "the shore"]}
{"mi": "uta", "gr": "adj", "en": ["inland (from a coastal perspective)", "ashore"]}
{"mi": "uta", "gr": "noun", "en": ["load", "contribution", "freight, cargo", "import; export"]}
{"mi": "uta", "gr": "verb", "en": ["to load on, put on (passengers or cargo on vehicles)", "to contribute"]}
{"mi": "taki", "gr": "verb", "en": ["to tow with a line", "to entice", "to challenge", "to give a speech", "to lead", "to recite", "to rise", "to stick in"]}
{"mi": "taki", "gr": "noun", "en": ["a kākā snare", "beat"]}
{"mi": "mauī", "gr": "adv", "en": ["on the left side"]}
{"mi": "wāna", "gr": "pron", "en": ["possessive plural of āna (“his, her”)"]}
{"mi": "hau", "gr": "noun", "en": ["essence", "ceremonial offering of food to an atua", "a present given in return for another gift", "wind, breeze, breath", "air", "excess", "external angle, corner, obtuse angle"]}
{"mi": "hau", "gr": "verb", "en": ["to be heard", "to spread news", "to exceed"]}
{"mi": "hau", "gr": "adj", "en": ["famous"]}
{"mi": "nga", "gr": "article", "en": ["macronless spelling of ngā"]}
{"mi": "hia", "gr": "det", "en": ["many", "several"]}
{"mi": "tari", "gr": "noun", "en": ["plaiting of several strands"]}
{"mi": "tari", "gr": "noun", "en": ["noose (for catching birds)"]}
{"mi": "tari", "gr": "verb", "en": ["to ensnare"]}
{"mi": "tari", "gr": "verb", "en": ["to bring"]}
{"mi": "tari", "gr": "noun", "en": ["study, office (room)", "office, department (agency)"]}
{"mi": "āwhio", "gr": "adv", "en": ["around, round"]}
{"mi": "poro", "gr": "verb", "en": ["to break, to cut off", "to amputate, to behead", "to shorten, to abbreviate", "to finish"]}
{"mi": "poro", "gr": "noun", "en": ["butt or end of a rod, stick etc", "block, slab (from cutting elongated object)"]}
{"mi": "poro", "gr": "adj", "en": ["broken off"]}
{"mi": "poro", "gr": "noun", "en": ["anything with a rounded or curvy surface", "ball"]}
{"mi": "poro", "gr": "noun", "en": ["any kind of Solanum plant"]}
{"mi": "poi", "gr": "noun", "en": ["lump of dirt, clump of hair etc", "ball, sphere", "poi (tethered weights used in a poi performance)", "a poi performance or the accompanying music"]}
{"mi": "poi", "gr": "verb", "en": ["to make into balls, to knead"]}
{"mi": "poi", "gr": "verb", "en": ["to toss up", "to swing or twirl"]}
{"mi": "kopa", "gr": "noun", "en": ["space in front of a house", "floor space and corner on the left on entering a wharenui – normally the place where the local people of the marae sit or sleep"]}
{"mi": "kopa", "gr": "verb", "en": ["to fly away", "to pass by, to disappear"]}
{"mi": "kopa", "gr": "adj", "en": ["bent, folded"]}
{"mi": "kopa", "gr": "noun", "en": ["bend, fold", "any flappable item e.g. wallets, satchels"]}
{"mi": "kopa", "gr": "verb", "en": ["to be bent or folded"]}
{"mi": "kopa", "gr": "adj", "en": ["crippled, lame"]}
{"mi": "kopa", "gr": "noun", "en": ["cripple, disability"]}
{"mi": "kopa", "gr": "verb", "en": ["to be crippled, lame"]}
{"mi": "āhua", "gr": "noun", "en": ["appearance, form", "shape", "character, trait"]}
{"mi": "āhua", "gr": "verb", "en": ["to appear", "to apprehend in the mind; to come to knowledge or proof; to be obvious or manifest; to look like", "to be pregnant, to expect a child"]}
{"mi": "āhua", "gr": "verb", "en": ["to form", "to make"]}
{"mi": "pū", "gr": "noun", "en": ["bunch, bundle", "heap, stack", "tribe", "origin, source", "base, foundation"]}
{"mi": "pū", "gr": "verb", "en": ["to bundle", "to lay in a heap, to heap"]}
{"mi": "pū", "gr": "verb", "en": ["to blow", "to shoot (of a firearm)"]}
{"mi": "pū", "gr": "noun", "en": ["reed, tube, pipe", "any elongated wind musical instrument", "gun, firearm, musket"]}
{"mi": "tāke", "gr": "noun", "en": ["tax, a sum paid to the government for monetary transactions"]}
{"mi": "tāke", "gr": "verb", "en": ["to tax something or someone"]}
{"mi": "kāo", "gr": "particle", "en": ["no"]}
{"mi": "āta", "gr": "adv", "en": ["slowly, carefully"]}
{"mi": "rārā", "gr": "adv", "en": ["over there, there, yonder"]}
{"mi": "toro", "gr": "verb", "en": ["to stretch out, to extend", "to creep, to crawl", "to visit, to call on", "to scout out, to reconnoitre, to probe", "to forage"]}
{"mi": "toro", "gr": "noun", "en": ["extension", "scout", "probe"]}
{"mi": "toro", "gr": "noun", "en": ["toro (Myrsine salicina, a small native New Zealand tree."]}
{"mi": "tara", "gr": "noun", "en": ["thorn of a plant", "tooth of a comb, tine of a fork", "spine of a fish, barb of a stingray", "skewer", "peak of a mountain"]}
{"mi": "tara", "gr": "verb", "en": ["to shine rays, to irradiate", "to disturb, to ruffle"]}
{"mi": "tara", "gr": "verb", "en": ["to gossip"]}
{"mi": "tara", "gr": "noun", "en": ["gossip", "scandal"]}
{"mi": "aro", "gr": "verb", "en": ["to turn toward something or someone", "to desire", "to incline towards something, to favour"]}
{"mi": "aro", "gr": "noun", "en": ["front (facing side)", "front (weather)", "desire", "inclination", "heart, seat of feelings"]}
{"mi": "apa", "gr": "verb", "en": ["to heap; layer; stack"]}
{"mi": "apa", "gr": "noun", "en": ["layer; level"]}
{"mi": "apa", "gr": "noun", "en": ["servant; slave"]}
{"mi": "apa", "gr": "noun", "en": ["spiritual beings; ancestral spirits"]}
{"mi": "whāngai", "gr": "verb", "en": ["to feed, nourish, bring up, foster, adopt, raise, nurture, rear"]}
{"mi": "whāngai", "gr": "adj", "en": ["foster, fostered, adopted, adoptive"]}
{"mi": "whāngai", "gr": "noun", "en": ["foster child, adopted child"]}
{"mi": "papa", "gr": "noun", "en": ["board, plank", "chart", "slab", "floor", "box, chest", "victim, sacrifice", "buttock, flank"]}
{"mi": "take", "gr": "verb", "en": ["to originate, derive"]}
{"mi": "take", "gr": "noun", "en": ["reason, purpose", "cause", "origin, source, beginning", "root", "stump", "topic, subject, matter, issue, concern", "claim, right", "plan", "base, foot (e.g. of a hill)"]}
{"mi": "motu", "gr": "noun", "en": ["cut, wound", "island", "clump of trees", "ship", "land", "country, nation"]}
{"mi": "motu", "gr": "verb", "en": ["to sever, cut, cut off, set free, separate", "to be separated, moved to a distance - especially in the phrase motu ki te ara", "to be set free, escape", "to be cut, severed"]}
{"mi": "katoa", "gr": "det", "en": ["all"]}
{"mi": "wīwī", "gr": "noun", "en": ["sea rush, clubrush"]}
{"mi": "wīwī", "gr": "noun", "en": ["somewhere; hither and thither"]}
{"mi": "auau", "gr": "noun", "en": ["bark (of a dog)"]}
{"mi": "auau", "gr": "verb", "en": ["to bark"]}
{"mi": "auau", "gr": "noun", "en": ["frequency, rate"]}
{"mi": "auau", "gr": "verb", "en": ["to be frequent, recurring"]}
{"mi": "tatau", "gr": "verb", "en": ["to squeeze or wring out liquid"]}
{"mi": "tatau", "gr": "verb", "en": ["to count, to tally"]}
{"mi": "tatau", "gr": "noun", "en": ["number, tally", "count, score"]}
{"mi": "tatau", "gr": "verb", "en": ["to draw, to slide", "to shut a door"]}
{"mi": "tatau", "gr": "noun", "en": ["door"]}
{"mi": "pā", "gr": "noun", "en": ["fortified place", "fortified village, usually on steep-sided raised ground that facilitates defence and affords good view of approaching attackers, such as a hilltop, promontory or small island", "screen or blockade"]}
{"mi": "pā", "gr": "verb", "en": ["to block up"]}
{"mi": "pā", "gr": "verb", "en": ["to touch, strike, hit (as by a stone), tag, affect", "to reach", "to be connected with, relate to, pertaining to, regarding", "to be heard, reach one's ears, hold personal communication with", "to blow (as the wind)", "to participate, act together, act in concert, join in (an undertaking)", "to have sex"]}
{"mi": "pā", "gr": "noun", "en": ["clump, group or flock", "contact (netball, etc.)"]}
{"mi": "tupu", "gr": "verb", "en": ["to grow, to increase"]}
{"mi": "tupu", "gr": "adj", "en": ["real, own, ancestral"]}
{"mi": "tupu", "gr": "noun", "en": ["seedling, shoot, bud"]}
{"mi": "uru", "gr": "verb", "en": ["to enter, go in", "to possess", "to enlist, enrol, join, be included"]}
{"mi": "uru", "gr": "noun", "en": ["head (in the singular)", "chief, leader", "top, upper end", "point (of a weapon, etc.)", "hair (of the head, in the plural)"]}
{"mi": "uru", "gr": "noun", "en": ["west"]}
{"mi": "tia", "gr": "noun", "en": ["abdomen, stomach", "umbilical cord"]}
{"mi": "tia", "gr": "noun", "en": ["deer"]}
{"mi": "tia", "gr": "noun", "en": ["steering"]}
{"mi": "tia", "gr": "verb", "en": ["to steer"]}
{"mi": "kini", "gr": "verb", "en": ["to pinch, to nip (with fingers, claws etc)", "to pinch off"]}
{"mi": "kini", "gr": "noun", "en": ["pinch (amount)"]}
{"mi": "kini", "gr": "noun", "en": ["guinea (a coin)"]}
{"mi": "whai", "gr": "noun", "en": ["stingray", "skate (fish of family Rajidae)"]}
{"mi": "whai", "gr": "noun", "en": ["pursuit"]}
{"mi": "whai", "gr": "verb", "en": ["to follow, chase, pursue", "to look for, search", "to proceed to a following action"]}
{"mi": "whai", "gr": "verb", "en": ["to possess, to have"]}
{"mi": "ngaro", "gr": "verb", "en": ["to be hidden, out of sight, covered, disappeared, absent", "to destroy"]}
{"mi": "ngaro", "gr": "noun", "en": ["blowfly, in connection with mākutu the fly represented the life or spirit of the person involved.", "houseflies of various species, any plump winged insect"]}
{"mi": "ngaro", "gr": "noun", "en": ["roller (for moving a canoe, etc)"]}
{"mi": "hakirara", "gr": "adv", "en": ["slovenly"]}
{"mi": "niu", "gr": "noun", "en": ["coconut"]}
{"mi": "ara", "gr": "noun", "en": ["path (a trail for the use of, or worn by, pedestrians)", "path (a course taken)", "path (a metaphorical course)", "path (a method or direction of proceeding)", "road (a way for travel)", "road (a path in life)", "street (paved part of road in a village or a town)", "track (beaten path)", "track (course; way)", "track (path or course laid out for a race or exercise)", "track (permanent way; the rails)", "way (wide path)"]}
{"mi": "ara", "gr": "verb", "en": ["to rise up, awake, arise, revive"]}
{"mi": "tukutuku", "gr": "verb", "en": ["to let go, down", "to get down", "to send", "to decorate with lattice-work"]}
{"mi": "tukutuku", "gr": "noun", "en": ["ornamental lattice-work", "grid"]}
{"mi": "wiki", "gr": "verb", "en": ["to form circular ripples on the surface of a fluid"]}
{"mi": "wiki", "gr": "noun", "en": ["week"]}
{"mi": "wiki", "gr": "noun", "en": ["wick; fuse"]}
{"mi": "kēkē", "gr": "noun", "en": ["armpit"]}
{"mi": "kēkē", "gr": "noun", "en": ["quack (of a duck)"]}
{"mi": "kēkē", "gr": "verb", "en": ["to quack (as a duck)"]}
{"mi": "kēkē", "gr": "noun", "en": ["distant, divergent"]}
{"mi": "aku", "gr": "pron", "en": ["my (when talking of more than one thing)"]}
{"mi": "maki", "gr": "verb", "en": ["to afflict (of an illness)"]}
{"mi": "maki", "gr": "noun", "en": ["sick person", "sore (injured, infected, inflamed, or diseased patch of skin)"]}
{"mi": "maki", "gr": "adj", "en": ["sick, ill, invalid"]}
{"mi": "maki", "gr": "noun", "en": ["ape", "monkey"]}
{"mi": "tana", "gr": "det", "en": ["his, her of one thing"]}
{"mi": "ruru", "gr": "noun", "en": ["morepork (Ninox novaeseelandiae)"]}
{"mi": "ruru", "gr": "verb", "en": ["to enclose, to close together", "to take shelter"]}
{"mi": "ruru", "gr": "adj", "en": ["sheltered"]}
{"mi": "ruru", "gr": "noun", "en": ["shelter", "shade"]}
{"mi": "nāu", "gr": "pron", "en": ["yours, your, by you (second person singular)"]}
{"mi": "taku", "gr": "pron", "en": ["my"]}
{"mi": "tote", "gr": "verb", "en": ["to salt, add salt"]}
{"mi": "tote", "gr": "noun", "en": ["salt"]}
{"mi": "tote", "gr": "adj", "en": ["salted"]}
{"mi": "hā", "gr": "noun", "en": ["breath, breathing, essence, taste.", "sound, tone, tenor, timbre, intonation."]}
{"mi": "hā", "gr": "verb", "en": ["to breathe"]}
{"mi": "hā", "gr": "intj", "en": ["what! oh! hey! (expression of surprise or disapproval)"]}
{"mi": "rere", "gr": "verb", "en": ["to fly", "to flee, escape", "to flow", "to leap", "to rush", "to run", "to race", "to descend, get down", "to sail", "to rise, set (of stars)"]}
{"mi": "rere", "gr": "noun", "en": ["flight", "attack, charge, rush", "waterfall"]}
{"mi": "rere", "gr": "intj", "en": ["heavens!"]}
{"mi": "puta", "gr": "verb", "en": ["to come out or come forth from some location", "to emerge, to appear into sight", "to rise (of celestial bodies)", "to pass through and out", "to graduate", "to run off; to escape", "to be born (of man)"]}
{"mi": "puta", "gr": "noun", "en": ["anus", "vagina", "foramen"]}
{"mi": "pani", "gr": "verb", "en": ["to smear, to spread across", "to daub", "to paint", "to apply (of medicine)", "to frost (of cakes)"]}
{"mi": "pani", "gr": "noun", "en": ["paint", "polish"]}
{"mi": "ngāi", "gr": "noun", "en": ["Group marker used in certain nouns."]}
{"mi": "kau", "gr": "verb", "en": ["tree; wood", "stick"]}
{"mi": "kau", "gr": "verb", "en": ["to swim", "to wade"]}
{"mi": "kau", "gr": "noun", "en": ["a cow"]}
{"mi": "pahū", "gr": "noun", "en": ["drum (slotted or skinned)"]}
{"mi": "pahū", "gr": "verb", "en": ["to burst, to explode"]}
{"mi": "pahū", "gr": "noun", "en": ["boom, bang", "explosion", "bomb"]}
{"mi": "pohane", "gr": "noun", "en": ["sexual attraction", "love, affection, desire, lust"]}
{"mi": "pohane", "gr": "verb", "en": ["to desire earnestly", "to moon, expose the buttocks", "to practice sodomy"]}
{"mi": "tina", "gr": "verb", "en": ["be firm, hard, steadfast", "be constipated"]}
{"mi": "tina", "gr": "noun", "en": ["constipation"]}
{"mi": "tina", "gr": "noun", "en": ["lunch, dinner (midday meal)"]}
{"mi": "tina", "gr": "verb", "en": ["have lunch"]}
{"mi": "kuku", "gr": "verb", "en": ["to nip, to pinch", "to hold (of one's breath)", "to clench (of one's fist)", "to shut (of one's eyes)", "to draw together and close an opening of something"]}
{"mi": "kuku", "gr": "noun", "en": ["any type of mussel"]}
{"mi": "piro", "gr": "adj", "en": ["rotten, putrid", "smelly", "disgusting", "offensive"]}
{"mi": "piro", "gr": "verb", "en": ["to rot", "to disgust"]}
{"mi": "piro", "gr": "noun", "en": ["rot", "intestines"]}
{"mi": "piro", "gr": "adj", "en": ["extinguished, put out", "defeated, beaten (in games)"]}
{"mi": "nanu", "gr": "adj", "en": ["mixed, jumbled", "confusing", "incoherent, inarticulate, unintelligible", "contaminated"]}
{"mi": "nanu", "gr": "verb", "en": ["to express disastifaction, to mumble or murmur"]}
{"mi": "nanu", "gr": "noun", "en": ["discontent, dissatisfaction"]}
{"mi": "hira", "gr": "verb", "en": ["to be great, important, widespread, of consequence", "to be numerous, abundant, plentiful", "to be large, big"]}
{"mi": "hira", "gr": "noun", "en": ["multitude", "importance, significance", "abundance, plentifulness, profusion"]}
{"mi": "hira", "gr": "adj", "en": ["great", "significant, important", "widespread", "eminent", "of consequence", "notable", "momentous"]}
{"mi": "ārai", "gr": "noun", "en": ["obstacle; barricade", "screen (physical divider)", "insulator", "barrier", "veil; curtain", "apron"]}
{"mi": "ārai", "gr": "verb", "en": ["to prevent; to forbid; to prohibit; to obstruct; to hinder", "to shield; to block out; to screen", "to insulate"]}
{"mi": "heu", "gr": "verb", "en": ["to separate, to pull apart or asunder", "to clear, to remove"]}
{"mi": "heu", "gr": "noun", "en": ["razor"]}
{"mi": "heu", "gr": "verb", "en": ["to shave"]}
{"mi": "heu", "gr": "adj", "en": ["overgrown"]}
{"mi": "heu", "gr": "noun", "en": ["scrub, undergrowth"]}
{"mi": "hua", "gr": "noun", "en": ["fruit", "product, outcome", "egg, roe", "benefit, gain, asset"]}
{"mi": "hua", "gr": "verb", "en": ["to bear fruit, be abundant, accrue", "to flower, bloom, blossom"]}
{"mi": "kī", "gr": "verb", "en": ["to say, speak, express, utter, call, mention, tell, designate"]}
{"mi": "kī", "gr": "noun", "en": ["saying, word"]}
{"mi": "kī", "gr": "noun", "en": ["to be full"]}
{"mi": "kī", "gr": "noun", "en": ["key"]}
{"mi": "kī", "gr": "verb", "en": ["to lock", "to be locked"]}
{"mi": "pare", "gr": "noun", "en": ["headband, wreath"]}
{"mi": "pare", "gr": "verb", "en": ["to ward off, to fend"]}
{"mi": "pare", "gr": "noun", "en": ["defence, protection"]}
{"mi": "hoa", "gr": "noun", "en": ["friend, companion, mate, partner, spouse, ally"]}
{"mi": "hoa", "gr": "noun", "en": ["pitch (of a roof)"]}
{"mi": "hoa", "gr": "verb", "en": ["to lay out; to plan; to arrange"]}
{"mi": "hoa", "gr": "noun", "en": ["charm, spell, enchantment"]}
{"mi": "ētahi", "gr": "article", "en": ["some: plural indefinite article"]}
{"mi": "whiu", "gr": "verb", "en": ["toss, throw, fling", "drive (animals, etc), herd", "present", "penalise, punish, lash, whip, chastise, flog"]}
{"mi": "whiu", "gr": "noun", "en": ["penalty, sentence, punishment", "hitting, wielding, knocking, driving"]}
{"mi": "whiu", "gr": "verb", "en": ["be satisfied (with food)"]}
{"mi": "haina", "gr": "verb", "en": ["to sign"]}
{"mi": "whano", "gr": "verb", "en": ["to proceed, to go towards", "to lead or verge towards something"]}
{"mi": "whano", "gr": "noun", "en": ["lead of a road"]}
{"mi": "whano", "gr": "adj", "en": ["impending, imminent"]}
{"mi": "whano", "gr": "verb", "en": ["to act, to do", "to behave"]}
{"mi": "whano", "gr": "noun", "en": ["action, behaviour"]}
{"mi": "pae", "gr": "noun", "en": ["shelf", "horizon", "perch", "mountain range", "area, region", "circumference", "gum (oral)"]}
{"mi": "tapa", "gr": "verb", "en": ["to cut, to chop", "to reap, to harvest (of crops like wheat)"]}
{"mi": "tapa", "gr": "adj", "en": ["split"]}
{"mi": "tapa", "gr": "noun", "en": ["rim, edge, boundary", "labia"]}
{"mi": "tapa", "gr": "verb", "en": ["to call or name someone", "to command", "to recite, to incantate"]}
{"mi": "hiko", "gr": "noun", "en": ["flash, twinkle", "lightning", "electricity"]}
{"mi": "hiko", "gr": "verb", "en": ["to flash"]}
{"mi": "hiko", "gr": "adj", "en": ["random, irregular", "electric; electrical; electronic"]}
{"mi": "hiko", "gr": "verb", "en": ["to stimulate", "to grab; to grasp"]}
{"mi": "uaua", "gr": "noun", "en": ["blood vessel", "vein; artery", "sinew; tendon", "muscle", "difficulty; dilemma; problem; trouble"]}
{"mi": "uaua", "gr": "verb", "en": ["difficult; hard; demanding"]}
{"mi": "uaua", "gr": "adj", "en": ["strenuous; pertinacious"]}
{"mi": "uaua", "gr": "noun", "en": ["firmness, resolution"]}
{"mi": "hirahira", "gr": "verb", "en": ["to be great, important, significant, eminent"]}
{"mi": "hirahira", "gr": "noun", "en": ["standing", "importance, significance", "eminence"]}
{"mi": "hirahira", "gr": "adj", "en": ["great", "significant", "eminent", "of consequence"]}
{"mi": "atawhai", "gr": "noun", "en": ["kindness, generosity"]}
{"mi": "atawhai", "gr": "verb", "en": ["to show kindness to"]}
{"mi": "atawhai", "gr": "adj", "en": ["kind, generous"]}
{"mi": "horo", "gr": "verb", "en": ["to run", "to flee, to escape"]}
{"mi": "horo", "gr": "adj", "en": ["fast, quick, swift"]}
{"mi": "horo", "gr": "noun", "en": ["speed"]}
{"mi": "kā", "gr": "verb", "en": ["to burn", "to be alight"]}
{"mi": "kā", "gr": "verb", "en": ["to screech"]}
{"mi": "kā", "gr": "noun", "en": ["car"]}
{"mi": "pōhēhē", "gr": "verb", "en": ["to misunderstand", "to be bewildered"]}
{"mi": "pōhēhē", "gr": "adj", "en": ["duped, mistaken, confused, misguided", "unsuspecting"]}
{"mi": "pōhēhē", "gr": "noun", "en": ["mistake, misunderstanding, error"]}
{"mi": "wāwā", "gr": "verb", "en": ["to be scattered"]}
{"mi": "wāwā", "gr": "noun", "en": ["somewhere; hither and thither"]}
{"mi": "taunga", "gr": "noun", "en": ["anchorage, resting place, landing", "fishing ground", "coordinate", "position"]}
{"mi": "taunga", "gr": "verb", "en": ["to become familiar with, used to, accustomed."]}
{"mi": "whana", "gr": "verb", "en": ["to spring back, to recoil, to kick backwards", "to impel", "to rush, charge", "to travel, come, go", "to revolt, rebel, mutiny, rise up, riot"]}
{"mi": "whana", "gr": "noun", "en": ["archery bow", "jerking, recoiling, springing back", "revolt, rebellion, mutiny, uprising, riot, insurrection", "kick"]}
{"mi": "ira", "gr": "noun", "en": ["dot, freckle, speck, mole", "particle", "shine, glimmer"]}
{"mi": "ira", "gr": "noun", "en": ["life principle, gene."]}
{"mi": "hemorere", "gr": "adv", "en": ["suddenly"]}
{"mi": "whakaahua", "gr": "noun", "en": ["photograph, picture, shot", "image", "photocopy", "illustration", "design"]}
{"mi": "whakaahua", "gr": "verb", "en": ["to transform", "to take form", "to form", "to fashion", "to photograph", "to portray", "to film", "to delineate", "to photocopy"]}
{"mi": "tore", "gr": "verb", "en": ["to cut, to split", "to pass through a narrow aperture"]}
{"mi": "tore", "gr": "noun", "en": ["strip, shred (of cloth etc)", "stripe", "narrow light beam passing through a slit"]}
{"mi": "tore", "gr": "adj", "en": ["of keen or sharp eyesight"]}
{"mi": "tore", "gr": "noun", "en": ["vagina, vulva"]}
{"mi": "oka", "gr": "verb", "en": ["to stab, to pierce", "to prick", "to vaccinate"]}
{"mi": "oka", "gr": "noun", "en": ["awl, tool used to bore holes in wood or leather", "a kind of dagger"]}
{"mi": "oka", "gr": "noun", "en": ["rafter, esp. that supports the roof of kumara storehouses"]}
{"mi": "oka", "gr": "noun", "en": ["yam"]}
{"mi": "pona", "gr": "noun", "en": ["node or knot of grass stalks etc", "joint of a limb (legs, arms)", "knuckle"]}
{"mi": "pona", "gr": "noun", "en": ["knot (of a rope)", "sachet, parcel"]}
{"mi": "pona", "gr": "verb", "en": ["to tie or fasten in a knot"]}
{"mi": "pona", "gr": "adj", "en": ["portable, compact"]}
{"mi": "ōi", "gr": "verb", "en": ["to shout"]}
{"mi": "ōi", "gr": "noun", "en": ["shout"]}
{"mi": "ōi", "gr": "noun", "en": ["grey-faced petrel", "sooty shearwater", "short-tailed shearwater"]}
{"mi": "ōi", "gr": "noun", "en": ["muck", "quicksand"]}
{"mi": "ahakoa", "gr": "conj", "en": ["although, notwithstanding, even though, nevertheless"]}
{"mi": "āianei", "gr": "adv", "en": ["today, soon, now"]}
{"mi": "kōkō", "gr": "verb", "en": ["to unearth, to dig up, to excavate", "to thrust", "to pout the lips out of displeasure", "to tattoo esp. of the moko with special chisel tools (uhi)"]}
{"mi": "kōkō", "gr": "noun", "en": ["tui"]}
{"mi": "puku", "gr": "noun", "en": ["swelling, lump", "stomach, belly"]}
{"mi": "puku", "gr": "verb", "en": ["to swell", "to dilate"]}
{"mi": "rū", "gr": "verb", "en": ["to shake, to agitate, to quiver", "to scatter, to sow"]}
{"mi": "rū", "gr": "noun", "en": ["shake, agitation", "earthquake, tremor"]}
{"mi": "rū", "gr": "adj", "en": ["seismic, quake"]}
{"mi": "waea", "gr": "verb", "en": ["to be weary"]}
{"mi": "waea", "gr": "verb", "en": ["to telephone, ring", "to send a telegram, wire"]}
{"mi": "waea", "gr": "noun", "en": ["telephone, phone", "telegram, telephone message, cable, wire"]}
{"mi": "pīrangi", "gr": "verb", "en": ["to crave, want, desire", "to need", "to like"]}
{"mi": "pīrangi", "gr": "noun", "en": ["desire, wish", "aspiration, hope"]}
{"mi": "popo", "gr": "noun", "en": ["anything rotten, something decayed", "rottenness, decay"]}
{"mi": "popo", "gr": "verb", "en": ["to be rotten, decayed, worm-eaten, decomposed"]}
{"mi": "aitu", "gr": "noun", "en": ["atua of disaster and death", "demons", "sickness", "calamity, misery", "grief, sorrow", "woe"]}
{"mi": "aitu", "gr": "adj", "en": ["sorrowful", "woeful"]}
{"mi": "whakararo", "gr": "adv", "en": ["downwards"]}
{"mi": "māpere", "gr": "noun", "en": ["razor sedge (Gahnia setifolia)"]}
{"mi": "māpere", "gr": "noun", "en": ["middle digit"]}
{"mi": "māpere", "gr": "noun", "en": ["marble", "ballot"]}
{"mi": "māpere", "gr": "verb", "en": ["to ballot", "to conscript"]}
{"mi": "māpere", "gr": "noun", "en": ["mulberry"]}
{"mi": "āpuru", "gr": "verb", "en": ["to suppress, shut up, crowd together, overwhelm."]}
{"mi": "toa", "gr": "adj", "en": ["brave, courageous."]}
{"mi": "toa", "gr": "noun", "en": ["a warrior.", "bravery, courage", "a male."]}
{"mi": "toa", "gr": "verb", "en": ["to win"]}
{"mi": "toa", "gr": "noun", "en": ["a store or shop."]}
{"mi": "hae", "gr": "verb", "en": ["to tear, to scratch, to lacerate", "to inflict pain"]}
{"mi": "hae", "gr": "noun", "en": ["scratch, tear, laceration"]}
{"mi": "hae", "gr": "noun", "en": ["envy, jealousy", "dislike"]}
{"mi": "hae", "gr": "verb", "en": ["to envy"]}
{"mi": "rore", "gr": "verb", "en": ["to trap, to ensnare", "to entangle, to glide", "to deceive"]}
{"mi": "rore", "gr": "noun", "en": ["trap, snare"]}
{"mi": "rore", "gr": "adj", "en": ["deceitful"]}
{"mi": "rore", "gr": "noun", "en": ["rainbow"]}
{"mi": "ura", "gr": "noun", "en": ["krill (small marine crustacean)", "whalefeed, Munida gregaria", "shrimp (decapod crustacean)"]}
{"mi": "ura", "gr": "verb", "en": ["to glow, to be glowing"]}
{"mi": "ngahuru", "gr": "num", "en": ["ten"]}
{"mi": "ngahuru", "gr": "noun", "en": ["autumn"]}
{"mi": "tiaki", "gr": "verb", "en": ["to guard or keep", "to protect, to save"]}
{"mi": "tiaki", "gr": "noun", "en": ["jack (playing card)"]}
{"mi": "tiaki", "gr": "noun", "en": ["cheque"]}
{"mi": "toi", "gr": "noun", "en": ["tip, point", "finger"]}
{"mi": "toi", "gr": "noun", "en": ["knowledge, art"]}
{"mi": "tātari", "gr": "verb", "en": ["to strain, filter, sift", "to measure out", "to analyze"]}
{"mi": "tātari", "gr": "noun", "en": ["filter, strainer, sieve, colander", "analysis"]}
{"mi": "wae", "gr": "noun", "en": ["leg", "foot"]}
{"mi": "wae", "gr": "verb", "en": ["to divide", "to separate", "to clear away"]}
{"mi": "hara", "gr": "verb", "en": ["to be in violation of a tapu", "to transgress", "to commit a sin", "to violate the law", "to offend"]}
{"mi": "hara", "gr": "noun", "en": ["sin", "foul", "crime, offence, transgression, wrongdoing", "gaffe", "infringement", "fault", "problem"]}
{"mi": "eka", "gr": "noun", "en": ["acre"]}
{"mi": "eka", "gr": "verb", "en": ["to survey"]}
{"mi": "kaka", "gr": "noun", "en": ["fibre (in general)", "cloth, clothes, garment", "strand of hair"]}
{"mi": "kaka", "gr": "noun", "en": ["stalk", "lineage", "nose bridge", "hill ridge"]}
{"mi": "ākuanei", "gr": "adv", "en": ["presently, shortly, soon"]}
{"mi": "whakaari", "gr": "verb", "en": ["to expose, to display", "to act, to perform"]}
{"mi": "whakaari", "gr": "noun", "en": ["drama, play, program", "acting, performance"]}
{"mi": "whakaari", "gr": "verb", "en": ["to nominate, to propose"]}
{"mi": "kawa", "gr": "adj", "en": ["sour"]}
{"mi": "kawa", "gr": "noun", "en": ["a ceremony to remove tapu from a new house or canoe", "karakia (“ritual chants”) and customs for the opening of new houses, canoes and other events", "marae protocol - customs of the marae and wharenui, particularly those related to formal activities such as pōhiri, speeches and mihimihi", "acid", "bitterness", "kava, plant brought by ancestors from the South Pacific, Piper methysticum."]}
{"mi": "kawa", "gr": "verb", "en": ["to perform the kawa ceremony, open a new house"]}
{"mi": "ua", "gr": "noun", "en": ["rain (condensed water from a cloud)"]}
{"mi": "ua", "gr": "verb", "en": ["to rain"]}
{"mi": "ua", "gr": "noun", "en": ["vein (blood vessel)"]}
{"mi": "raka", "gr": "verb", "en": ["to step on something"]}
{"mi": "raka", "gr": "noun", "en": ["step, walk, trek"]}
{"mi": "raka", "gr": "noun", "en": ["lock"]}
{"mi": "roki", "gr": "verb", "en": ["to secure, to keep intact", "to store, to contain", "to preserve", "to make calm, to make safe"]}
{"mi": "roki", "gr": "noun", "en": ["any enclosed area", "store"]}
{"mi": "roki", "gr": "adj", "en": ["calm, tranquil", "settled"]}
{"mi": "nohopuku", "gr": "noun", "en": ["fasting (abstention of eating for religious purposes)"]}
{"mi": "nohopuku", "gr": "verb", "en": ["to fast"]}
{"mi": "nohopuku", "gr": "adj", "en": ["fasting"]}
{"mi": "nohopuku", "gr": "noun", "en": ["silence"]}
{"mi": "nohopuku", "gr": "verb", "en": ["to be silent"]}
{"mi": "nohopuku", "gr": "adj", "en": ["silent"]}
{"mi": "kō", "gr": "noun", "en": ["digging stick (also used as a weapon)"]}
{"mi": "horoi", "gr": "verb", "en": ["wash, clean"]}
{"mi": "horoi", "gr": "noun", "en": ["washing", "soap"]}
{"mi": "kiri", "gr": "noun", "en": ["skin", "peel, bark, rind", "hide, leather", "surface"]}
{"mi": "pī", "gr": "adj", "en": ["sodden"]}
{"mi": "pī", "gr": "noun", "en": ["snub"]}
{"mi": "pī", "gr": "verb", "en": ["to ignore, to slight, to neglect"]}
{"mi": "pī", "gr": "noun", "en": ["bee"]}
{"mi": "rāhui", "gr": "verb", "en": ["be reserved, be restricted"]}
{"mi": "rāhui", "gr": "noun", "en": ["bundle", "flock, herd, mob, swarm, cluster"]}
{"mi": "ware", "gr": "adj", "en": ["distracted", "careless", "ignorant"]}
{"mi": "ware", "gr": "noun", "en": ["excretion, exudation", "saliva", "spume, foam of seawater"]}
{"mi": "ware", "gr": "adj", "en": ["viscous, gummy"]}
{"mi": "toko", "gr": "noun", "en": ["pole", "sprit of a canoe's sail", "beam or ray of light"]}
{"mi": "toko", "gr": "verb", "en": ["to prop up", "to push away", "to separate, divorce"]}
{"mi": "nama", "gr": "noun", "en": ["number, numeral", "bill, invoice"]}
{"mi": "nama", "gr": "verb", "en": ["to owe, to be in debt", "to borrow, to obtain on credit", "to lend, to give credit"]}
{"mi": "huri", "gr": "verb", "en": ["to turn round, to revolve", "to grind, to mill", "to change", "to overflow, to overwhelm"]}
{"mi": "huri", "gr": "noun", "en": ["rotation, revolution"]}
{"mi": "whiwhi", "gr": "verb", "en": ["to wind round, to fasten", "to wrap around", "to encircle"]}
{"mi": "whiwhi", "gr": "adj", "en": ["entangled, knotted", "complex, complicated"]}
{"mi": "whiwhi", "gr": "noun", "en": ["fat covering entrails"]}
{"mi": "whiwhi", "gr": "verb", "en": ["to acquire, to possess"]}
{"mi": "hākari", "gr": "noun", "en": ["platform to display or spread food for a feast", "feast, banquet, any huge meal for a special occasion", "gift"]}
{"mi": "hākari", "gr": "noun", "en": ["fish roe", "fine dosinia"]}
{"mi": "auahi", "gr": "adj", "en": ["smoky"]}
{"mi": "auahi", "gr": "noun", "en": ["smoke"]}
{"mi": "auahi", "gr": "verb", "en": ["to be smoky"]}
{"mi": "oro", "gr": "noun", "en": ["sound", "echo", "rumble", "note"]}
{"mi": "oro", "gr": "verb", "en": ["to resound, to echo"]}
{"mi": "oro", "gr": "verb", "en": ["to sharpen, to grind"]}
{"mi": "unu", "gr": "noun", "en": ["withdrawal, extraction"]}
{"mi": "unu", "gr": "verb", "en": ["pull out, withdraw, draw out, extract", "to pull off, put off, take off (clothes, etc.)", "to exempt, discharge, exclude", "to surrender"]}
{"mi": "unu", "gr": "verb", "en": ["to drink"]}
{"mi": "mura", "gr": "verb", "en": ["to burn (of firewood), to blaze", "to glow", "to blush, to redden"]}
{"mi": "mura", "gr": "adj", "en": ["brilliant or bright in colour"]}
{"mi": "mura", "gr": "noun", "en": ["glow", "colour"]}
{"mi": "pota", "gr": "verb", "en": ["to break, to snap"]}
{"mi": "pota", "gr": "adj", "en": ["broken, snapped, chipped into pieces", "few, little"]}
{"mi": "pota", "gr": "noun", "en": ["fragment, chip", "portion", "sample"]}
{"mi": "hū", "gr": "verb", "en": ["to make a loud noise", "to bubble up (of water)", "to hiss", "to call (out to), signal, cooey"]}
{"mi": "hū", "gr": "noun", "en": ["noise, racket, hubbub"]}
{"mi": "hū", "gr": "intj", "en": ["boom!"]}
{"mi": "tohi", "gr": "verb", "en": ["to cut or split something off, especially with a blade", "to chisel in a similar manner", "to separate", "to divide"]}
{"mi": "tohi", "gr": "noun", "en": ["boiling vessel for cooking by placing heated stones in water"]}
{"mi": "tohi", "gr": "verb", "en": ["to boil using such a vessel"]}
{"mi": "whao", "gr": "noun", "en": ["chisel", "any iron tool", "nail (metal fastener)"]}
{"mi": "whao", "gr": "verb", "en": ["to chisel out"]}
{"mi": "whao", "gr": "verb", "en": ["to go into; to enter", "to put into; to fill"]}
{"mi": "ioio", "gr": "noun", "en": ["blood vessels, veins", "sinews; tendons"]}
{"mi": "ioio", "gr": "adj", "en": ["stiff (of legs, muscles after activity)", "not friable", "obstinate"]}
{"mi": "ioio", "gr": "verb", "en": ["to shred"]}
{"mi": "utauta", "gr": "verb", "en": ["to load things"]}
{"mi": "utauta", "gr": "noun", "en": ["equipment, tools, property"]}
{"mi": "huka", "gr": "noun", "en": ["sugar"]}
{"mi": "kato", "gr": "noun", "en": ["flow", "current"]}
{"mi": "kato", "gr": "adj", "en": ["flowing (of the tide)", "flooding (of the tide)"]}
{"mi": "kapu", "gr": "noun", "en": ["scoop, ladle", "palm of one's hand", "instep of one's foot"]}
{"mi": "kapu", "gr": "verb", "en": ["to ladle, to scoop up"]}
{"mi": "whatu", "gr": "noun", "en": ["stone", "hailstone", "pupil (of the eye)", "eye", "kernel (of a fruit)"]}
{"mi": "whatu", "gr": "verb", "en": ["to weave; to knit"]}
{"mi": "hana", "gr": "noun", "en": ["heat, warmth", "radiance, glow, flame"]}
{"mi": "hana", "gr": "verb", "en": ["to shine, glow", "to give out heat"]}
{"mi": "pepe", "gr": "noun", "en": ["any lepidopterans including butterflies and moths"]}
{"mi": "pepe", "gr": "verb", "en": ["to flutter", "to frisk, to frolic", "to stumble, hesitate or stutter (in speech, reciting etc)"]}
{"mi": "rehu", "gr": "noun", "en": ["dust", "mist", "spray"]}
{"mi": "rehu", "gr": "adj", "en": ["misty"]}
{"mi": "punga", "gr": "noun", "en": ["coral", "any silicate or calcite material", "anchor"]}
{"mi": "punga", "gr": "verb", "en": ["to anchor", "to secure", "to sink, to fall"]}
{"mi": "anga", "gr": "noun", "en": ["shell, husk", "structure, framework"]}
{"mi": "anga", "gr": "verb", "en": ["to face", "to set about, to begin"]}
{"mi": "hunga", "gr": "noun", "en": ["people", "slave"]}
{"mi": "hunga", "gr": "noun", "en": ["down, fine feathers", "grind, rub fine", "decayed, putrid", "light-coloured"]}
{"mi": "rī", "gr": "verb", "en": ["to bind", "to insure"]}
{"mi": "rī", "gr": "verb", "en": ["to block, to screen off", "to protect"]}
{"mi": "uira", "gr": "noun", "en": ["lightning", "electricity", "glow"]}
{"mi": "uira", "gr": "verb", "en": ["to flash, to gleam"]}
{"mi": "tahe", "gr": "verb", "en": ["to flow, to exude", "to drip", "to menstruate", "to drop", "to miscarry"]}
{"mi": "tahe", "gr": "noun", "en": ["any exudate", "sap", "menses, menstruation i.e. natural monthly uterine discharge among women", "miscarriage, abortion"]}
{"mi": "inanga", "gr": "noun", "en": ["A fish, the jollytail (Galaxias maculatus).", "The grass tree, a shrub in the genus Dracophyllum.", "bamboo", "white greenstone"]}
{"mi": "rōpū", "gr": "noun", "en": ["An organized group of people; group, party, organisation, committee, company, gang, association, entourage, etc.", "category"]}
{"mi": "nīko", "gr": "noun", "en": ["cabbage", "celery pine"]}
{"mi": "taurekareka", "gr": "noun", "en": ["slave or prisoner of war", "scoundrel, idiot, rascal", "rogue"]}
{"mi": "taurekareka", "gr": "verb", "en": ["to be enslaved"]}
{"mi": "taurekareka", "gr": "adj", "en": ["dastardly", "shameful, dishonorable", "low", "base"]}
{"mi": "pata", "gr": "noun", "en": ["drop, drip"]}
{"mi": "pata", "gr": "verb", "en": ["to drip", "to splatter"]}
{"mi": "pata", "gr": "noun", "en": ["seed", "granule"]}
{"mi": "matira", "gr": "verb", "en": ["To fish (with a rod)"]}
{"mi": "matira", "gr": "adj", "en": ["lookout"]}
{"mi": "matira", "gr": "noun", "en": ["fishing rod", "lookout"]}
{"mi": "amo", "gr": "verb", "en": ["to charge, to attack"]}
{"mi": "amo", "gr": "verb", "en": ["to carry something on the shoulder (on a litter, etc)", "to present (of an offering)"]}
{"mi": "amo", "gr": "noun", "en": ["litter, bier, stretcher", "front support of a marae's bargeboard (hihi, mahihi or maihi)"]}
{"mi": "mihi", "gr": "noun", "en": ["A welcome", "A speech made to welcome somebody"]}
{"mi": "mihi", "gr": "verb", "en": ["to lament for, to grieve", "to welcome, to greet, to acknowledge"]}
{"mi": "kohu", "gr": "noun", "en": ["fog"]}
{"mi": "kohu", "gr": "adj", "en": ["concave, warped, cupped", "bent"]}
{"mi": "kohu", "gr": "verb", "en": ["to cook in a hollow receptacle i.e. pot in an earth pit (hangi)", "an oven"]}
{"mi": "puru", "gr": "noun", "en": ["plug", "caulk", "coconut husk"]}
{"mi": "puru", "gr": "verb", "en": ["to plug, to fill or stuff in, to cram"]}
{"mi": "teka", "gr": "noun", "en": ["rung or step of a ladder", "horizontal footrest or tread on a digging stick to step on and push further into the ground"]}
{"mi": "teka", "gr": "noun", "en": ["dart"]}
{"mi": "teka", "gr": "verb", "en": ["to shoot with bow and arrow", "to drive something forward, to urge, to impel"]}
{"mi": "tahua", "gr": "noun", "en": ["field, enclosure, courtyard", "square, plaza", "expanse"]}
{"mi": "tahua", "gr": "noun", "en": ["heap", "menu", "fund, budget"]}
{"mi": "tahua", "gr": "noun", "en": ["stencil"]}
{"mi": "rawe", "gr": "verb", "en": ["to wrap around, to coil around (of clothing, cords, ropes etc.)"]}
{"mi": "rawe", "gr": "adj", "en": ["tight"]}
{"mi": "rawe", "gr": "adj", "en": ["suitable, appropriate, becoming", "clever", "excellent"]}
{"mi": "karakia", "gr": "verb", "en": ["to recite ritual chants or a prayer, to say grace, to pray"]}
{"mi": "karakia", "gr": "noun", "en": ["an incantation, ritual chant, spell (related to Maori traditions)", "a prayer, grace, blessing (related to introduced religions)"]}
{"mi": "pou", "gr": "noun", "en": ["post, stake, pillar", "column", "support", "stalwart"]}
{"mi": "pou", "gr": "verb", "en": ["to erect a post", "to prop on (or elevate with) posts or pillars", "to establish", "to appoint"]}
{"mi": "mina", "gr": "noun", "en": ["desire; wish", "aspiration", "longing", "appetite"]}
{"mi": "mina", "gr": "verb", "en": ["to desire", "to feel an inclination", "to wish", "to have a craving for"]}
{"mi": "kapa", "gr": "noun", "en": ["team, group", "row, line"]}
{"mi": "kapa", "gr": "noun", "en": ["copper"]}
{"mi": "huru", "gr": "noun", "en": ["hair of human heads"]}
{"mi": "huru", "gr": "verb", "en": ["to glow", "to rise"]}
{"mi": "raki", "gr": "noun", "en": ["north", "drought"]}
{"mi": "raki", "gr": "adj", "en": ["dry"]}
{"mi": "ranga", "gr": "verb", "en": ["to raise up from the ground", "to uproot, to pull from the roots", "to set in motion, to transport"]}
{"mi": "ranga", "gr": "noun", "en": ["group, team, company of people", "school of fish"]}
{"mi": "pāho", "gr": "verb", "en": ["to spread (of speech)", "(of electronic signals) to be transmitted far, to air, to be broadcast"]}
{"mi": "pāho", "gr": "noun", "en": ["broadcast"]}
{"mi": "waka", "gr": "noun", "en": ["particular large canoes sometimes equipped with sails as continuous across Southeast Asia to Polynesia", "boat, canoe", "vehicle or any mode of transport", "spirit medium"]}
{"mi": "kiko", "gr": "noun", "en": ["meat of any animal", "flesh of fruit", "kernel of a seed or nut", "body, substance"]}
{"mi": "whakamauī", "gr": "adv", "en": ["towards the left"]}
{"mi": "awairānei", "gr": "pron", "en": ["anyone, someone"]}
{"mi": "maka", "gr": "verb", "en": ["throw, fling, cast, pass (with the hands)", "place, put, put in"]}
{"mi": "maka", "gr": "noun", "en": ["fish hook"]}
{"mi": "maka", "gr": "noun", "en": ["mug"]}
{"mi": "tapu", "gr": "adj", "en": ["holy, sacred, consecrated", "restricted, prohibited, forbidden"]}
{"mi": "tapu", "gr": "noun", "en": ["taboo, restriction (as a spiritual or supernatural condition)"]}
{"mi": "tapu", "gr": "noun", "en": ["mark or indentation left on a surface"]}
{"mi": "hari", "gr": "verb", "en": ["to dance"]}
{"mi": "hari", "gr": "noun", "en": ["song, dance", "happiness, elation, joy"]}
{"mi": "hari", "gr": "verb", "en": ["to carry"]}
{"mi": "hina", "gr": "adj", "en": ["pale", "grey-haired"]}
{"mi": "hina", "gr": "noun", "en": ["grey hair"]}
{"mi": "whero", "gr": "noun", "en": ["red (orangish or brownish)", "yellow", "gold (element and metal)"]}
{"mi": "whero", "gr": "adj", "en": ["red", "bright, shining"]}
{"mi": "whero", "gr": "verb", "en": ["to redden"]}
{"mi": "kati", "gr": "verb", "en": ["to bite, to nip"]}
{"mi": "kati", "gr": "verb", "en": ["to close, shut", "to block up, to obstruct"]}
{"mi": "kati", "gr": "verb", "en": ["to be closed"]}
{"mi": "neke", "gr": "verb", "en": ["to shift, to move slightly", "to indent (of text)"]}
{"mi": "neke", "gr": "noun", "en": ["roller for a waka"]}
{"mi": "neke", "gr": "noun", "en": ["snake"]}
{"mi": "wehi", "gr": "noun", "en": ["dread, fear"]}
{"mi": "wehi", "gr": "verb", "en": ["to be terrible", "to be afraid, fearful"]}
{"mi": "wehi", "gr": "adj", "en": ["terrific, awful"]}
{"mi": "whakamataku", "gr": "noun", "en": ["fright, fear"]}
{"mi": "whakamataku", "gr": "adj", "en": ["frightening"]}
{"mi": "whakamataku", "gr": "verb", "en": ["to terrify, to scare, to frighten"]}
{"mi": "ākau", "gr": "noun", "en": ["reef", "coast (of seas), bank (of rivers)"]}
{"mi": "kukū", "gr": "verb", "en": ["to grate, to scrape", "to make a grating sound"]}
{"mi": "manaaki", "gr": "verb", "en": ["to support, take care of, look out for"]}
{"mi": "manaaki", "gr": "noun", "en": ["support, caring for"]}
{"mi": "kōura", "gr": "noun", "en": ["crayfish; lobster"]}
{"mi": "kōura", "gr": "noun", "en": ["gold"]}
{"mi": "tāone", "gr": "noun", "en": ["town, city, urban area"]}
{"mi": "tāone", "gr": "verb", "en": ["to establish towns, lay out as a town"]}
{"mi": "hinga", "gr": "verb", "en": ["to fall, to tumble", "to slant, to tilt", "to lose"]}
{"mi": "hinga", "gr": "noun", "en": ["loss, defeat"]}
{"mi": "whenu", "gr": "verb", "en": ["to spin, to twist"]}
{"mi": "whenu", "gr": "noun", "en": ["strand (each of the strings that make up a rope, etc.)", "warp", "cosine"]}
{"mi": "ane", "gr": "noun", "en": ["termite"]}
{"mi": "ane", "gr": "verb", "en": ["to decay, to destroy"]}
{"mi": "hui", "gr": "verb", "en": ["to gather, congregate, assemble, meet"]}
{"mi": "hui", "gr": "noun", "en": ["gathering, meeting, assembly, seminar, conference"]}
{"mi": "hura", "gr": "verb", "en": ["to put or raise a hand up", "to twitch, to shrug"]}
{"mi": "hura", "gr": "verb", "en": ["to open a lid or cover", "to uncover, to expose", "to discover", "to break (of dawn)", "to swell or rise"]}
{"mi": "tī", "gr": "noun", "en": ["Cordyline australis"]}
{"mi": "tī", "gr": "noun", "en": ["tea (drink)"]}
{"mi": "nuku", "gr": "verb", "en": ["to move, to shift", "to extend", "to indent"]}
{"mi": "nuku", "gr": "noun", "en": ["distance, extent", "expanse", "land, ground", "indent"]}
{"mi": "wāhi", "gr": "verb", "en": ["to break", "to divide", "to disclose"]}
{"mi": "wāhi", "gr": "noun", "en": ["a part, a portion", "a place, a location", "compartment or room of a house", "opening, any open area"]}
{"mi": "mauī", "gr": "adj", "en": ["left (the west side of the body when one is facing north)"]}
{"mi": "uwhi", "gr": "noun", "en": ["yam; Dioscorea alata"]}
{"mi": "uwhi", "gr": "verb", "en": ["to spread over, to cover"]}
{"mi": "wāna", "gr": "noun", "en": ["swan"]}
{"mi": "mārama", "gr": "noun", "en": ["light, shine", "brightness", "lucidity, clarity", "transparency"]}
{"mi": "mārama", "gr": "adj", "en": ["lucid, clear, bright", "transparent"]}
{"mi": "turaki", "gr": "verb", "en": ["to push over", "to oppose", "to overthrow"]}
{"mi": "mārena", "gr": "verb", "en": ["to marry"]}
{"mi": "mārena", "gr": "noun", "en": ["marriage, wedding"]}
{"mi": "kuru", "gr": "noun", "en": ["breadfruit"]}
{"mi": "kuru", "gr": "verb", "en": ["to strike with a fist; to pound or thump"]}
{"mi": "kuru", "gr": "noun", "en": ["mallet; fragment; hammer-head stone"]}
{"mi": "tepe", "gr": "verb", "en": ["to congeal, to coagulate"]}
{"mi": "tepe", "gr": "noun", "en": ["clot"]}
{"mi": "tepe", "gr": "adj", "en": ["clumpy, clotted (of milk)"]}
{"mi": "pūpū", "gr": "noun", "en": ["bunch, bundle"]}
{"mi": "pūpū", "gr": "verb", "en": ["to bunch, to bundle"]}
{"mi": "pūpū", "gr": "noun", "en": ["snail"]}
{"mi": "haki", "gr": "noun", "en": ["flag"]}
{"mi": "haki", "gr": "noun", "en": ["mountain holly (Olearia ilicifolia)"]}
{"mi": "tini", "gr": "num", "en": ["ten thousand, myriad"]}
{"mi": "tini", "gr": "noun", "en": ["multitude, host, a very large amount"]}
{"mi": "tini", "gr": "adj", "en": ["numerous, plenty"]}
{"mi": "whio", "gr": "verb", "en": ["to whistle"]}
{"mi": "whio", "gr": "noun", "en": ["whistle"]}
{"mi": "whio", "gr": "noun", "en": ["blue duck"]}
{"mi": "kākāriki", "gr": "noun", "en": ["a New Zealand parakeet of genus Cyanoramphus", "green, colour of said parakeet", "a green species of gecko", "cantaloupe"]}
{"mi": "kākāriki", "gr": "verb", "en": ["to become green"]}
{"mi": "kākāriki", "gr": "adj", "en": ["green"]}
{"mi": "ehu", "gr": "noun", "en": ["muddy water"]}
{"mi": "ehu", "gr": "verb", "en": ["disinter, exhume"]}
{"mi": "ehu", "gr": "adj", "en": ["turbid"]}
{"mi": "whakamōtī", "gr": "noun", "en": ["destruction, damage, devastation, desolation."]}
{"mi": "whakamōtī", "gr": "adj", "en": ["destructive, devastating, damaging"]}
{"mi": "whakamōtī", "gr": "verb", "en": ["to destroy, extirpate, annihilate, crush, eradicate, devastate, eliminate."]}
{"mi": "iro", "gr": "noun", "en": ["maggot"]}
{"mi": "maha", "gr": "noun", "en": ["abundance, bounty, majority"]}
{"mi": "whakangaro", "gr": "noun", "en": ["destruction, obliteration, ruin, annihilation, devastation."]}
{"mi": "whakangaro", "gr": "verb", "en": ["to destroy, exterminate, annihilate.", "to hide, conceal, put out of sight.", "to disappear."]}
{"mi": "tūnga", "gr": "noun", "en": ["wound"]}
{"mi": "tūnga", "gr": "noun", "en": ["position", "rank"]}
{"mi": "kīngi", "gr": "noun", "en": ["king (monarch)", "king"]}
{"mi": "kīngi", "gr": "verb", "en": ["to reign"]}
{"mi": "hīkoi", "gr": "verb", "en": ["to step on something", "to walk", "to stride", "to march"]}
{"mi": "hīkoi", "gr": "noun", "en": ["step", "march", "hike, trek, tramp", "journey, trip"]}
{"mi": "paki", "gr": "verb", "en": ["to hit, to smack", "to slap, to spank", "to clap", "to print, to publish"]}
{"mi": "paki", "gr": "noun", "en": ["print", "story, tale, yarn"]}
{"mi": "tuke", "gr": "noun", "en": ["elbow", "bend, angle", "cubit, measurement from elbow to fingertip"]}
{"mi": "tuke", "gr": "verb", "en": ["to twitch", "to jerk", "to nudge"]}
{"mi": "kumu", "gr": "verb", "en": ["to clench, to close one's hand tightly into a fist", "to hold or carry an object with fingers closing around it", "to close or shut one's mouth", "to hold one's breath"]}
{"mi": "kumu", "gr": "noun", "en": ["anus", "buttocks"]}
{"mi": "kape", "gr": "noun", "en": ["tongs", "any wooden kitchen tool (spoon, stirrer etc)", "crescent", "eyebrow"]}
{"mi": "kape", "gr": "verb", "en": ["to pluck or pick out (items from an earth oven with sticks etc)", "to set aside something"]}
{"mi": "ū", "gr": "noun", "en": ["breast", "udder, teat"]}
{"mi": "ū", "gr": "verb", "en": ["to strike home, to hit the mark (as of a weapon)", "to land (as of a vessel), to come ashore", "to comply", "to be firm, fixed, unyielding"]}
{"mi": "wānanga", "gr": "noun", "en": ["sacred ancestral medium", "person who is knowledgeable in traditional lore", "traditional knowledge, lore", "conference, forum or seminar", "instructor or expert"]}
{"mi": "wānanga", "gr": "verb", "en": ["to meet and discuss", "to consider or deliberate"]}
{"mi": "kāinga", "gr": "noun", "en": ["The burning (of a fire)."]}
{"mi": "kāinga", "gr": "noun", "en": ["A place of residence or habitation.", "An unfortified place of residence or village (in contrast to a pā, which is fortified).", "A country.", "A home."]}
{"mi": "hoariri", "gr": "noun", "en": ["enemy, opposition, opponent, adversary"]}
{"mi": "hoariri", "gr": "verb", "en": ["to be an enemy"]}
{"mi": "hāro", "gr": "verb", "en": ["to scrape", "to scutch i.e. remove waxy outer layer of harakeke (Phormium tenax) leaves exposing inner fibres (muka) to be woven as fabric", "to plane or smoothen wood"]}
{"mi": "hāro", "gr": "adj", "en": ["smooth", "calm (of sea)", "low (of tides)"]}
{"mi": "ripi", "gr": "verb", "en": ["to cut, to slice, to gash", "to skim or glide or ricochet off the water surface"]}
{"mi": "ripi", "gr": "noun", "en": ["special tool with long, oval blade used to pry out pāua from rocks", "a type of chisel to carve long grooves on wood", "discus, flat plate thrown as sport", "stone skipping, ducks and drakes"]}
{"mi": "urupatu", "gr": "noun", "en": ["annihilation, destruction, sacking."]}
{"mi": "urupatu", "gr": "verb", "en": ["to utterly destroy, wipe out, devastate, annihilate, sack."]}
{"mi": "rato", "gr": "adj", "en": ["spread, distributed", "available"]}
{"mi": "toitū", "gr": "verb", "en": ["to be undisturbed, untouched", "to be permanent", "to be entire", "to be sustainable"]}
{"mi": "taka", "gr": "verb", "en": ["to turn or wind round, to pivot", "to encircle", "to range, to roam", "to fall off"]}
{"mi": "runa", "gr": "verb", "en": ["to tie up, to draw together", "to secure", "to keep close, to gather", "to assemble"]}
{"mi": "piupiu", "gr": "verb", "en": ["to swing or sway to-and-fro, to oscillate"]}
{"mi": "piupiu", "gr": "noun", "en": ["A grass skirt with long strands or fringes that sway and produce sound while the wearer dances."]}
{"mi": "piupiu", "gr": "noun", "en": ["Lomaria discolor", "Pneumanopteris pennigera", "Parablechnum procerum", "Parablechnum novae-zelandiae"]}
{"mi": "koutu", "gr": "noun", "en": ["promontory, point (of land)"]}
{"mi": "koutu", "gr": "verb", "en": ["to project", "to stand out, to be conspicuous"]}
{"mi": "koutu", "gr": "verb", "en": ["to dip into"]}
{"mi": "mangeo", "gr": "noun", "en": ["itch, irritation, smart", "acridity", "annoyance, frustration"]}
{"mi": "mangeo", "gr": "adj", "en": ["itchy, smarting", "acrid"]}
{"mi": "mangeo", "gr": "verb", "en": ["to itch, to irritate"]}
{"mi": "āwhio", "gr": "verb", "en": ["to go in circles or in a roundabout way, to snake", "to swirl"]}
{"mi": "āwhio", "gr": "adj", "en": ["circuitous, roundabout"]}
{"mi": "piriti", "gr": "noun", "en": ["priest"]}
{"mi": "piriti", "gr": "noun", "en": ["bridge"]}
{"mi": "hōkaka", "gr": "noun", "en": ["desire, wish"]}
{"mi": "hōkaka", "gr": "verb", "en": ["to desire, to want, to yearn"]}
{"mi": "rekareka", "gr": "verb", "en": ["to be pleasant, enjoyable, fun", "to be happy, rapt, overjoyed, delighted"]}
{"mi": "rekareka", "gr": "noun", "en": ["sweetness", "attractiveness", "enjoyment, pleasure", "orgasm"]}
{"mi": "one", "gr": "noun", "en": ["sand", "mud", "soil, earth", "beach"]}
{"mi": "one", "gr": "adj", "en": ["granular, granulated"]}
{"mi": "hoe", "gr": "noun", "en": ["oar", "paddle"]}
{"mi": "hoe", "gr": "verb", "en": ["to row, to paddle", "to push away with one's hand", "to refuse, to reject"]}
{"mi": "koko", "gr": "noun", "en": ["scoop, ladle", "shovel", "spoon"]}
{"mi": "koko", "gr": "verb", "en": ["to ladle, to scoop up", "to shovel"]}
{"mi": "tiri", "gr": "verb", "en": ["to cast, to scatter", "to throw or place one by one, to stack in a row", "to plant", "to share"]}
{"mi": "tiri", "gr": "noun", "en": ["plant, crop"]}
{"mi": "whiri", "gr": "verb", "en": ["to twist", "to weave", "to spin", "to curl or fold one's hands"]}
{"mi": "whiri", "gr": "verb", "en": ["to choose, to select, to elect", "to pick", "to decide"]}
{"mi": "hoka", "gr": "verb", "en": ["to soar, fly", "to lift; to hold aloft"]}
{"mi": "hoka", "gr": "verb", "en": ["to pierce", "to point or project sharply upwards", "to taper to a sharp point"]}
{"mi": "hune", "gr": "noun", "en": ["core of a breadfruit.", "pappus of reeds like raupo that disperse its achened seeds.", "plant pubescence", "young soft feathers of a bird"]}
{"mi": "mātau", "gr": "noun", "en": ["knowledge, understanding"]}
{"mi": "mātau", "gr": "verb", "en": ["to know, to understand"]}
{"mi": "rongoā", "gr": "noun", "en": ["medicine; drug; medication; treatment; remedy; tonic", "solution (to a problem)"]}
{"mi": "rongoā", "gr": "verb", "en": ["to treat; to apply medicines", "to preserve"]}
{"mi": "punua", "gr": "adj", "en": ["small."]}
{"mi": "punua", "gr": "noun", "en": ["a baby animal."]}
{"mi": "upoko", "gr": "noun", "en": ["head", "paragraph", "heading", "chapter", "headline"]}
{"mi": "upoko", "gr": "verb", "en": ["to meet and discuss", "to consider or deliberate"]}
{"mi": "mahara", "gr": "verb", "en": ["to think about", "to recollect, to remember"]}
{"mi": "mahara", "gr": "noun", "en": ["recollection, memory", "spleen"]}
{"mi": "kōpū", "gr": "noun", "en": ["belly, abdomen", "womb, uterus", "bosom", "Cran's bully (Gobiomorphus basalis)"]}
{"mi": "pōkai", "gr": "verb", "en": ["to wind something in a ball or coil", "to roll up, to wrap up", "to travel", "to surround"]}
{"mi": "pōkai", "gr": "noun", "en": ["ball (of string etc)", "roll", "wrap, wrapper"]}
{"mi": "tārewa", "gr": "verb", "en": ["to suspend, to hang"]}
{"mi": "tārewa", "gr": "verb", "en": ["hanging, dangling", "unresolved, unsettled", "deferred, delayed"]}
{"mi": "kūrae", "gr": "noun", "en": ["cape, headland, promontory, peninsula, boundary point"]}
{"mi": "kūrae", "gr": "verb", "en": ["to project"]}
{"mi": "mana", "gr": "noun", "en": ["power; mana"]}
{"mi": "moa", "gr": "noun", "en": ["moa (†Dinornis)"]}
{"mi": "ari", "gr": "verb", "en": ["clear, evident, visible"]}
{"mi": "hipi", "gr": "noun", "en": ["sheep"]}
{"mi": "mīti", "gr": "noun", "en": ["meat"]}
{"mi": "ate", "gr": "noun", "en": ["liver (organ of the body)", "any kind of organ (in compound words)", "heart (seat of emotions)"]}
{"mi": "pito", "gr": "noun", "en": ["navel", "end, extremity", "pole"]}
{"mi": "kano", "gr": "noun", "en": ["seed, bean, grain, ovule", "sort, kind", "color, pigment, hue"]}
{"mi": "kakā", "gr": "adj", "en": ["red or glowing hot, inflamed", "smarting", "spicy, pepper hot"]}
{"mi": "kahu", "gr": "noun", "en": ["cloak, cape", "garment, clothing", "covering, surface"]}
{"mi": "matomato", "gr": "adj", "en": ["lush, verdant"]}
{"mi": "matomato", "gr": "noun", "en": ["lushness"]}
{"mi": "matomato", "gr": "verb", "en": ["to be green (of foliage)", "aesthetically pleasing"]}
{"mi": "maina", "gr": "noun", "en": ["mine (explosive device)"]}
{"mi": "maina", "gr": "verb", "en": ["to lay mines"]}
{"mi": "maina", "gr": "noun", "en": ["myna (Acridotheres tristis)"]}
{"mi": "aranga", "gr": "verb", "en": ["to arise, to emerge, to appear", "to become known"]}
{"mi": "aranga", "gr": "noun", "en": ["arising", "resurrection"]}
{"mi": "aukati", "gr": "verb", "en": ["to bar, restrict, prohibit, block", "to discriminate"]}
{"mi": "aukati", "gr": "noun", "en": ["barrier, boundary, roadblock", "discrimination"]}
{"mi": "aukati", "gr": "adj", "en": ["exclusive, discriminatory"]}
{"mi": "autaia", "gr": "noun", "en": ["bloke, fellow, guy, chap", "contraption", "wonder"]}
{"mi": "autaia", "gr": "adj", "en": ["wondrous, uncanny, extraordinary"]}
{"mi": "wahangū", "gr": "verb", "en": ["to be silent, to be quiet", "to be mute", "to be reserved"]}
{"mi": "wahangū", "gr": "adj", "en": ["quiet, still", "mute, dumb (unable to speak)", "reserved"]}
{"mi": "wahangū", "gr": "noun", "en": ["dumbness, being mute"]}
{"mi": "rahi", "gr": "verb", "en": ["to be big, many, plentiful, numerous", "big, large"]}
{"mi": "rahi", "gr": "noun", "en": ["size, greatness", "importance, (important person, important people)"]}
{"mi": "reka", "gr": "adj", "en": ["nice, pleasant", "sweet (of taste)", "tasty"]}
{"mi": "reka", "gr": "noun", "en": ["sweetness"]}
{"mi": "tipi", "gr": "verb", "en": ["to slice, to cut into slices", "to pare off, to plane, to smoothen wood"]}
{"mi": "tipi", "gr": "verb", "en": ["to skim or glide along the surface", "to move quickly or smooothly"]}
{"mi": "aru", "gr": "noun", "en": ["chase", "pursuit"]}
{"mi": "aru", "gr": "verb", "en": ["to chase", "to follow, pursue"]}
{"mi": "taha", "gr": "noun", "en": ["side, edge", "shore, bank", "part, section"]}
{"mi": "taha", "gr": "verb", "en": ["to pass by"]}
{"mi": "tui", "gr": "verb", "en": ["to thread, to string together", "to pierce with a needle", "to sew"]}
{"mi": "tui", "gr": "noun", "en": ["string, thread"]}
{"mi": "tuki", "gr": "verb", "en": ["to ram, to pound, to pestle", "to punch", "to bunt"]}
{"mi": "tuki", "gr": "noun", "en": ["pestle"]}
{"mi": "pihi", "gr": "verb", "en": ["to spring up", "to start growing, to sprout"]}
{"mi": "pihi", "gr": "noun", "en": ["sprout, shoot, bud", "horn, antler"]}
{"mi": "miti", "gr": "verb", "en": ["to lick; to lap", "to swash, to touch the surface of water", "to absorb"]}
{"mi": "miti", "gr": "noun", "en": ["undertow, water flowing back from a breaking wave towards the sea"]}
{"mi": "kamo", "gr": "noun", "en": ["eyelid", "eyelash"]}
{"mi": "kamo", "gr": "verb", "en": ["to blink", "to wink"]}
{"mi": "riki", "gr": "adj", "en": ["small, little", "few"]}
{"mi": "riki", "gr": "noun", "en": ["leek", "onion"]}
{"mi": "wiri", "gr": "verb", "en": ["to bore, twist, drill", "to tremble, shiver, shudder"]}
{"mi": "wiri", "gr": "noun", "en": ["gimlet, auger, drill, screwdriver, anything for boring holes", "trembling of the hands in Maori singing to indicate the interface between the mind and the body (the wiri represents the shimmering of the ocean water, the heat waves rising from the ground, the wind rustling the tree leaves)"]}
{"mi": "kune", "gr": "verb", "en": ["to swell (of fruit, the body)", "to be pregnant", "to grow, to spring forth"]}
{"mi": "kune", "gr": "adj", "en": ["plump, round"]}
{"mi": "kope", "gr": "verb", "en": ["to wrap something in leaves etc"]}
{"mi": "kope", "gr": "noun", "en": ["anything that wraps", "any kind of absorbent, sanitary pad", "certain types of moss traditionally used as pads or diapers"]}
{"mi": "hopu", "gr": "verb", "en": ["to seize, catch, snatch", "to record (make an audio or video recording of)", "to detect"]}
{"mi": "hopu", "gr": "noun", "en": ["seizing, catching, snatching"]}
{"mi": "pāpaka", "gr": "noun", "en": ["paddle crab, Ovalipes catharus", "crabs in general"]}
{"mi": "pāpaka", "gr": "noun", "en": ["scab, eczema"]}
{"mi": "āio", "gr": "adj", "en": ["calm", "peaceful"]}
{"mi": "āio", "gr": "noun", "en": ["calm, halcyon", "peace"]}
{"mi": "tāpiri", "gr": "verb", "en": ["to add on, to append"]}
{"mi": "tāpiri", "gr": "noun", "en": ["sticking plaster", "sticky tape"]}
{"mi": "kōpere", "gr": "verb", "en": ["to launch, to sling, to shoot", "to sprint"]}
{"mi": "kōpere", "gr": "noun", "en": ["a sling used to launch darts", "bow (weapon for shooting arrows or rod for playing string instruments)", "arrow", "arch", "rainbow", "sprint"]}
{"mi": "āki", "gr": "verb", "en": ["to encourage, urge on, challenge, induce, incite, exhort", "to beat, pound, crash against, dash against, strike with great force, throw down, buffet, slam against, slam", "to replace"]}
{"mi": "āki", "gr": "noun", "en": ["urging, encouragement"]}
{"mi": "whata", "gr": "noun", "en": ["shelf"]}
{"mi": "whata", "gr": "verb", "en": ["to shelve something, to put something on a shelf", "to be laid on some surface", "to suspend freely", "to elevate, to support", "to make prominent"]}
{"mi": "marangai", "gr": "adj", "en": ["north", "north wind", "northerly"]}
{"mi": "marangai", "gr": "noun", "en": ["bad weather", "east wind", "east", "rainstorm"]}
{"mi": "wharo", "gr": "verb", "en": ["to scrape", "to scold", "to abuse", "to clear one's throat, to expectorate, to hawk"]}
{"mi": "wharo", "gr": "noun", "en": ["cough", "phlegm"]}
{"mi": "kea", "gr": "noun", "en": ["snot", "the kea (Nestor notabilis)"]}
{"mi": "ama", "gr": "noun", "en": ["outrigger (of a canoe)", "bargeboard support"]}
{"mi": "ihu", "gr": "noun", "en": ["nose (organ of the face)", "prow of a boat"]}
{"mi": "oti", "gr": "adj", "en": ["finished", "completed"]}
{"mi": "tahu", "gr": "noun", "en": ["husband, lover", "near relative"]}
{"mi": "tira", "gr": "noun", "en": ["travelling party, company of travelers", "troupe", "choir", "ray, beam", "mast", "wand used in rituals", "conductor's baton"]}
{"mi": "wē", "gr": "noun", "en": ["water", "liquid"]}
{"mi": "puia", "gr": "noun", "en": ["volcano", "geyser, hot spring"]}
{"mi": "hahu", "gr": "verb", "en": ["to disinter", "to exhume"]}
{"mi": "ngāwhā", "gr": "verb", "en": ["to burst open, to split", "to bloom"]}
{"mi": "ngāwhā", "gr": "noun", "en": ["geyser, fumarole, hot spring"]}
{"mi": "ngāwhā", "gr": "adj", "en": ["geothermal"]}
{"mi": "maitai", "gr": "adj", "en": ["good, beautiful, agreeable"]}
{"mi": "maitai", "gr": "adj", "en": ["foreign"]}
{"mi": "maitai", "gr": "noun", "en": ["iron", "metal"]}
{"mi": "huatau", "gr": "adj", "en": ["elegant, graceful"]}
{"mi": "huatau", "gr": "noun", "en": ["comment, thought"]}
{"mi": "huatau", "gr": "verb", "en": ["to comment", "to realize"]}
{"mi": "heuheu", "gr": "verb", "en": ["to clear away, to remove", "to disperse"]}
{"mi": "heuheu", "gr": "noun", "en": ["brushwood"]}
{"mi": "heuheu", "gr": "verb", "en": ["shave"]}
{"mi": "pōhara", "gr": "noun", "en": ["poverty", "a poor person"]}
{"mi": "pōhara", "gr": "adj", "en": ["poor; impoverished; destitute"]}
{"mi": "pōhara", "gr": "verb", "en": ["to be poor, impoverished, destitute"]}
{"mi": "ukauka", "gr": "adj", "en": ["prolonged, preserved, long-lasting", "sluggish, slow"]}
{"mi": "ukauka", "gr": "verb", "en": ["to support, to sustain"]}
{"mi": "ukauka", "gr": "noun", "en": ["cash"]}
{"mi": "whakapakaru", "gr": "noun", "en": ["falsetto"]}
{"mi": "whakapakaru", "gr": "verb", "en": ["to break, smash, rupture, shatter.", "to break"]}
{"mi": "kirikiri", "gr": "noun", "en": ["gravel", "sand", "shingle"]}
{"mi": "kirikiri", "gr": "verb", "en": ["to incorporate gravel"]}
{"mi": "koi", "gr": "adj", "en": ["sharp"]}
{"mi": "koi", "gr": "noun", "en": ["point", "spike"]}
{"mi": "ato", "gr": "noun", "en": ["thatch, roof"]}
{"mi": "ato", "gr": "verb", "en": ["to thatch", "to fence in, enclose"]}
{"mi": "rama", "gr": "noun", "en": ["torch", "light"]}
{"mi": "rama", "gr": "noun", "en": ["rum"]}
{"mi": "peka", "gr": "noun", "en": ["bat (the flying mammal)"]}
{"mi": "peka", "gr": "noun", "en": ["branch (of a tree, river)", "a piece of firewood"]}
{"mi": "hama", "gr": "noun", "en": ["hammer", "malleus (hammer ear bone)"]}
{"mi": "hama", "gr": "verb", "en": ["to hammer"]}
{"mi": "hako", "gr": "noun", "en": ["monkey", "clown"]}
{"mi": "hako", "gr": "adj", "en": ["ugly"]}
{"mi": "poti", "gr": "noun", "en": ["cat (Felis silvestris catus)"]}
{"mi": "poti", "gr": "noun", "en": ["angle", "corner"]}
{"mi": "rara", "gr": "verb", "en": ["to spread out, to scatter", "to rush in disorder, to stampede"]}
{"mi": "rara", "gr": "noun", "en": ["rib"]}
{"mi": "waha", "gr": "noun", "en": ["mouth", "any opening or entrance"]}
{"mi": "waha", "gr": "verb", "en": ["to carry on one's back"]}
{"mi": "kohe", "gr": "noun", "en": ["synonym of kohekohe", "bamboo"]}
{"mi": "kohe", "gr": "noun", "en": ["Passiflora tetrandra, a kind of passionfruit endemic to New Zealand."]}
{"mi": "niko", "gr": "verb", "en": ["to coil, to form bights in ropes", "to go around"]}
{"mi": "piko", "gr": "noun", "en": ["bend, curve", "corner"]}
{"mi": "piko", "gr": "adj", "en": ["bent, curved"]}
{"mi": "tōhi", "gr": "noun", "en": ["toast (bread)", "toast (salutation)"]}
{"mi": "tōhi", "gr": "verb", "en": ["toast (salutation)"]}
{"mi": "hīoi", "gr": "verb", "en": ["be a glossy green"]}
{"mi": "hīoi", "gr": "noun", "en": ["New Zealand mint (Mentha cunninghamii)", "New Zealand pipit (Anthus novaeseelandiae)"]}
{"mi": "roha", "gr": "verb", "en": ["to spread out, to extend out, to stretch out", "to expand"]}
{"mi": "roha", "gr": "adj", "en": ["expansive"]}
{"mi": "anea", "gr": "verb", "en": ["to be devastated, to be destroyed,", "to ravage, to ruin (in wars etc.)"]}
{"mi": "anea", "gr": "noun", "en": ["devastation, destruction"]}
{"mi": "pukupuku", "gr": "verb", "en": ["to be lumpy, to be swollen"]}
{"mi": "pukupuku", "gr": "noun", "en": ["gooseflesh, goose pimples", "lump, tumour", "shield", "rasp fern (Doodia media)", "wild pelargonium (Pelargonium inodorum)"]}
{"mi": "paoi", "gr": "verb", "en": ["to pound fern root with a wooden beater"]}
{"mi": "paoi", "gr": "noun", "en": ["wooden fern-root pounder", "pestle"]}
{"mi": "huaki", "gr": "verb", "en": ["to open (of doors, lids)", "to uncover", "to dig out, to disinter or exhume", "to rise (of celestial bodies)"]}
{"mi": "huaki", "gr": "noun", "en": ["dawn"]}
{"mi": "tiriti", "gr": "noun", "en": ["street"]}
{"mi": "tiriti", "gr": "noun", "en": ["treaty"]}
{"mi": "kāwana", "gr": "noun", "en": ["A governor."]}
{"mi": "kāwana", "gr": "verb", "en": ["To govern."]}
{"mi": "manako", "gr": "verb", "en": ["to long for, to yearn", "to miss", "to desire, to want", "to like"]}
{"mi": "manako", "gr": "noun", "en": ["desire, wish, want", "longing, yearning", "anxiety"]}
{"mi": "kapiti", "gr": "verb", "en": ["to bring close together", "to join (of one separate thing to another)", "to clench, to shut", "to confine or surround (of an area)"]}
{"mi": "kapiti", "gr": "noun", "en": ["cleft, crevice", "gorge, pass of a mountain", "slot (for receiving cards, coins etc)"]}
{"mi": "karapu", "gr": "noun", "en": ["glove (item of clothing)"]}
{"mi": "karapu", "gr": "noun", "en": ["club (association)"]}
{"mi": "okaoka", "gr": "verb", "en": ["to vaccinate"]}
{"mi": "okaoka", "gr": "noun", "en": ["vaccine"]}
{"mi": "kotahi", "gr": "noun", "en": ["unit"]}
{"mi": "kotahi", "gr": "verb", "en": ["united"]}
{"mi": "mangō", "gr": "noun", "en": ["shark"]}
{"mi": "taura", "gr": "noun", "en": ["rope"]}
{"mi": "taera", "gr": "noun", "en": ["sexual desire"]}
{"mi": "pūmua", "gr": "noun", "en": ["protein"]}
{"mi": "mārie", "gr": "adj", "en": ["peaceful"]}
{"mi": "whawhati", "gr": "verb", "en": ["to fracture", "to snap off, pick (e.g. fruit)", "to deny", "to repudiate, contradict, refute"]}
{"mi": "tao", "gr": "noun", "en": ["spear"]}
{"mi": "rite", "gr": "verb", "en": ["to resemble; to be like, similar, alike"]}
{"mi": "hai", "gr": "noun", "en": ["ace"]}
{"mi": "oni", "gr": "verb", "en": ["to wriggle", "to move, shift or slip from a previous position", "to jerk", "to thrust forward", "to thrust one's hips in a sexually suggestive way", "to make love, to copulate, to bed someone"]}
{"mi": "io", "gr": "noun", "en": ["sinew; tendon", "muscle", "vein", "strand of rope", "lock of hair", "warp, lengthwise weaving threads"]}
{"mi": "haha", "gr": "verb", "en": ["look for"]}
{"mi": "kina", "gr": "noun", "en": ["sea urchin"]}
{"mi": "hapa", "gr": "noun", "en": ["tea (meal)"]}
{"mi": "pia", "gr": "noun", "en": ["beer"]}
{"mi": "mati", "gr": "noun", "en": ["finger, toe"]}
{"mi": "keri", "gr": "verb", "en": ["to dig (to move hard-packed earth out of the way)"]}
{"mi": "aihe", "gr": "noun", "en": ["The short-beaked common dolphin, Delphinus delphis"]}
{"mi": "kui", "gr": "noun", "en": ["grandmother, old woman, elderly woman"]}
{"mi": "pepa", "gr": "noun", "en": ["paper"]}
{"mi": "hahae", "gr": "verb", "en": ["to slit, to slash", "to erode", "to appear"]}
{"mi": "wani", "gr": "noun", "en": ["swan"]}
{"mi": "wehe", "gr": "verb", "en": ["to separate"]}
{"mi": "ture", "gr": "noun", "en": ["law"]}
{"mi": "angi", "gr": "verb", "en": ["to float through the air"]}
{"mi": "tāra", "gr": "noun", "en": ["dollar, especially a New Zealand dollar"]}
{"mi": "pōti", "gr": "verb", "en": ["vote, elect"]}
{"mi": "āngi", "gr": "noun", "en": ["air"]}
{"mi": "tōpū", "gr": "verb", "en": ["to be assembled, consolidated in a group"]}
{"mi": "māota", "gr": "verb", "en": ["to be green", "to be raw", "to be freshly-grown"]}
{"mi": "marino", "gr": "adj", "en": ["calm"]}
{"mi": "marino", "gr": "noun", "en": ["fine weather, tranquility"]}
{"mi": "marino", "gr": "verb", "en": ["to be calm or still (usually of the sea)"]}
{"mi": "tahito", "gr": "adj", "en": ["ancient"]}
{"mi": "tahito", "gr": "noun", "en": ["age, antiquity"]}
{"mi": "tahito", "gr": "verb", "en": ["to be old, ancient, out of date"]}
{"mi": "pākete", "gr": "noun", "en": ["pocket"]}
{"mi": "pākete", "gr": "noun", "en": ["packet"]}
{"mi": "pākete", "gr": "noun", "en": ["bucket"]}
{"mi": "hepara", "gr": "noun", "en": ["shepherd; herdsman"]}
{"mi": "hepara", "gr": "verb", "en": ["to shepherd"]}
{"mi": "hepara", "gr": "noun", "en": ["zebra"]}
{"mi": "urunga", "gr": "noun", "en": ["pillow"]}
{"mi": "urunga", "gr": "noun", "en": ["entrance (act of entering)"]}
{"mi": "urunga", "gr": "noun", "en": ["rudder"]}
{"mi": "kōwhiti", "gr": "verb", "en": ["to select, to choose", "to pull out, pull off"]}
{"mi": "kōwhiti", "gr": "verb", "en": ["to appear"]}
{"mi": "kōwhiti", "gr": "noun", "en": ["ulna", "cross stich"]}
{"mi": "karetao", "gr": "noun", "en": ["puppet", "robot"]}
{"mi": "karetao", "gr": "adj", "en": ["robotic, tokenistic, insincere"]}
{"mi": "tuna", "gr": "noun", "en": ["eel of various species, including longfin eels (Anguilla dieffenbachii) and shortfin eels (Anguilla australis)"]}
{"mi": "pera", "gr": "noun", "en": ["blubber"]}
{"mi": "pera", "gr": "noun", "en": ["pillow"]}
{"mi": "ani", "gr": "adj", "en": ["echoing, resounding (i.e. bounces sound waves)"]}
{"mi": "toke", "gr": "noun", "en": ["cold"]}
{"mi": "toke", "gr": "noun", "en": ["worm"]}
{"mi": "nana", "gr": "intj", "en": ["lo, look, see, behold (imperative)."]}
{"mi": "nana", "gr": "noun", "en": ["eyebrow"]}
{"mi": "aka", "gr": "noun", "en": ["root (of plant)"]}
{"mi": "koru", "gr": "noun", "en": ["coil, loop"]}
{"mi": "koru", "gr": "adj", "en": ["coiled, looped"]}
{"mi": "moto", "gr": "verb", "en": ["to strike with the fist, to punch, to box"]}
{"mi": "moto", "gr": "noun", "en": ["hit or blow with the fist, punch"]}
{"mi": "toto", "gr": "noun", "en": ["blood"]}
{"mi": "toto", "gr": "verb", "en": ["to bleed"]}
{"mi": "rae", "gr": "noun", "en": ["forehead (part of face above eyebrows)"]}
{"mi": "rae", "gr": "noun", "en": ["promontory, headland"]}
{"mi": "turi", "gr": "adj", "en": ["deaf (not hearing)"]}
{"mi": "turi", "gr": "noun", "en": ["knee"]}
{"mi": "uhi", "gr": "noun", "en": ["yam (Dioscorea)"]}
{"mi": "uhi", "gr": "noun", "en": ["a chisel-like tool used to puncture Maori tattoos (moko)"]}
{"mi": "moko", "gr": "noun", "en": ["Polynesian tattoo"]}
{"mi": "moko", "gr": "noun", "en": ["lizard, gecko"]}
{"mi": "namu", "gr": "noun", "en": ["sandfly of the genus Austrosimulium."]}
{"mi": "namu", "gr": "adj", "en": ["blue-green, grue"]}
{"mi": "tari", "gr": "noun", "en": ["to wait, alternative form of tatari"]}
{"mi": "puna", "gr": "noun", "en": ["spring of water; well; pool"]}
{"mi": "puna", "gr": "verb", "en": ["to well up; to flow"]}
{"mi": "tutū", "gr": "noun", "en": ["disobedience, offending; hooligan"]}
{"mi": "tutū", "gr": "verb", "en": ["to be mischievous, disobedient, mutinous, rebellious, undisciplined, or disruptive."]}
{"mi": "pono", "gr": "noun", "en": ["truth, non-fiction, validity"]}
{"mi": "pono", "gr": "adj", "en": ["true, valid, honest, genuine, sincere"]}
{"mi": "papi", "gr": "noun", "en": ["poppy"]}
{"mi": "papi", "gr": "noun", "en": ["puppy"]}
{"mi": "heru", "gr": "noun", "en": ["comb"]}
{"mi": "heru", "gr": "verb", "en": ["to comb"]}
{"mi": "rona", "gr": "noun", "en": ["a binder (for holding papers together)"]}
{"mi": "rona", "gr": "verb", "en": ["to bind, to tie together, to confine or tie down with cord"]}
{"mi": "nānā", "gr": "verb", "en": ["to tend carefully, to look after"]}
{"mi": "nānā", "gr": "verb", "en": ["to indulge, pamper"]}
{"mi": "kipa", "gr": "noun", "en": ["spur (horse prod attached to heel)"]}
{"mi": "kipa", "gr": "verb", "en": ["to spur (on)"]}
{"mi": "karo", "gr": "verb", "en": ["to pick out or scoop something out of a hole"]}
{"mi": "karo", "gr": "noun", "en": ["Pittosporum crassifolium, a shrub of New Zealand."]}
{"mi": "pewa", "gr": "noun", "en": ["eyebrow"]}
{"mi": "pewa", "gr": "verb", "en": ["to arch (of eyebrows)"]}
{"mi": "ranu", "gr": "verb", "en": ["to mix"]}
{"mi": "ranu", "gr": "noun", "en": ["mixture"]}
{"mi": "turu", "gr": "noun", "en": ["post, pole, pillar"]}
{"mi": "turu", "gr": "verb", "en": ["to drip; to leak"]}
{"mi": "āta", "gr": "noun", "en": ["altar (Christian)"]}
{"mi": "ripo", "gr": "noun", "en": ["whirlpool, eddy, curl"]}
{"mi": "ripo", "gr": "verb", "en": ["to swirl, to eddy"]}
{"mi": "pēpē", "gr": "verb", "en": ["to mash"]}
{"mi": "pēpē", "gr": "adj", "en": ["mashed, pulped"]}
{"mi": "pēke", "gr": "noun", "en": ["bank"]}
{"mi": "pēke", "gr": "noun", "en": ["bag, sack"]}
{"mi": "parāoa", "gr": "noun", "en": ["sperm whale (Physeter macrocephalus)", "whale", "whalebone", "weapon made of whalebone"]}
{"mi": "parāoa", "gr": "noun", "en": ["flour", "bread"]}
{"mi": "miha", "gr": "noun", "en": ["a whale calf"]}
{"mi": "miha", "gr": "noun", "en": ["young bracken fronds"]}
{"mi": "tupua", "gr": "adj", "en": ["strange"]}
{"mi": "tupua", "gr": "noun", "en": ["demon", "foreigner", "strange being"]}
{"mi": "inoi", "gr": "noun", "en": ["a prayer"]}
{"mi": "inoi", "gr": "verb", "en": ["to pray, beg, request, appeal"]}
{"mi": "rārā", "gr": "noun", "en": ["small branch, twig"]}
{"mi": "ānau", "gr": "noun", "en": ["curve"]}
{"mi": "ānau", "gr": "verb", "en": ["to curve"]}
{"mi": "ātea", "gr": "verb", "en": ["to be clear, to be unobstructed"]}
{"mi": "ātea", "gr": "noun", "en": ["space"]}
{"mi": "aweke", "gr": "adj", "en": ["perverse", "trivial", "frivolous, idle"]}
{"mi": "aweke", "gr": "verb", "en": ["to misrepresent, falsify, forge"]}
{"mi": "kāoa", "gr": "noun", "en": ["coral"]}
{"mi": "kāoa", "gr": "adj", "en": ["coral"]}
{"mi": "puehu", "gr": "noun", "en": ["pollen", "dust"]}
{"mi": "puehu", "gr": "adj", "en": ["dusty", "mealy, floury"]}
{"mi": "nohi", "gr": "noun", "en": ["face"]}
{"mi": "nohi", "gr": "noun", "en": ["Luzuriaga parviflora, a kind of perennial plant found in North Island."]}
{"mi": "paheke", "gr": "verb", "en": ["to slip, to skid", "to fall, to decline", "to trickle, to drip"]}
{"mi": "paheke", "gr": "noun", "en": ["failure, decline", "trickle, leak, discharge", "cloud ear (Auricularia polytricha)"]}
{"mi": "tuarā", "gr": "noun", "en": ["back (part of the body)", "ally, supporter", "back"]}
{"mi": "tuarā", "gr": "verb", "en": ["to support, to assist"]}
{"mi": "ngākau", "gr": "noun", "en": ["heart, mind, soul", "intestines, bowels"]}
{"mi": "rango", "gr": "noun", "en": ["fly (insect)", "blowfly"]}
{"mi": "kiore", "gr": "noun", "en": ["rat", "mouse (input device)"]}
{"mi": "matā", "gr": "noun", "en": ["obsidian", "lava", "lead", "bullet", "seashore earwig"]}
{"mi": "whaea", "gr": "noun", "en": ["mother", "aunt"]}
{"mi": "ruku", "gr": "verb", "en": ["to dive", "to sink", "to submerge", "to hurl or let oneself fall into sth", "to ablute"]}
{"mi": "takiwā", "gr": "noun", "en": ["territory, area, region", "time, period, season", "space", "setting"]}
{"mi": "kongakonga", "gr": "noun", "en": ["shrapnel, crumb", "fragment"]}
{"mi": "kongakonga", "gr": "verb", "en": ["to be crumbled", "to be fragmented"]}
{"mi": "kongakonga", "gr": "adj", "en": ["insignificant"]}
{"mi": "whānako", "gr": "verb", "en": ["to steal"]}
{"mi": "whānako", "gr": "adj", "en": ["thieving"]}
{"mi": "whānako", "gr": "noun", "en": ["theft, steal", "thief"]}
{"mi": "whakawhiti", "gr": "verb", "en": ["to transfer, to convey", "to switch, to swap, to exchange"]}
{"mi": "whakawhiti", "gr": "noun", "en": ["crossing over", "exchange"]}
{"mi": "whaikaha", "gr": "adj", "en": ["having strength", "concentrated", "disabled"]}
{"mi": "whaikaha", "gr": "noun", "en": ["disability"]}
{"mi": "whaikaha", "gr": "verb", "en": ["to have strength", "to be strong enough"]}
{"mi": "motumotu", "gr": "verb", "en": ["divided, broken up, cut"]}
{"mi": "motumotu", "gr": "adj", "en": ["separated", "discrete"]}
{"mi": "motumotu", "gr": "noun", "en": ["firebrand", "piece of burning wood", "a dumpling or doughboy"]}
{"mi": "wareware", "gr": "noun", "en": ["forgetfulness"]}
{"mi": "wareware", "gr": "verb", "en": ["forget", "forgotten", "be forgetful"]}
{"mi": "kakau", "gr": "verb", "en": ["to swim"]}
{"mi": "kakau", "gr": "noun", "en": ["stalk (of a plant)", "handle (of a tool)"]}
{"mi": "takai", "gr": "verb", "en": ["to wrap up, wrap round", "to wind round"]}
{"mi": "takai", "gr": "noun", "en": ["a wrapper; a covering"]}
{"mi": "kanga", "gr": "verb", "en": ["to curse, to swear"]}
{"mi": "kanga", "gr": "noun", "en": ["cursing", "swear word"]}
{"mi": "umere", "gr": "noun", "en": ["song, chant", "praise, applause"]}
{"mi": "umere", "gr": "verb", "en": ["to sing, to chant (of a choir)"]}
{"mi": "taina", "gr": "noun", "en": ["younger brother of a male", "younger sister of a female"]}
{"mi": "mamae", "gr": "noun", "en": ["pain", "bullroarer"]}
{"mi": "mamae", "gr": "verb", "en": ["to be painful, to hurt"]}
{"mi": "tūmau", "gr": "verb", "en": ["to be fixed, constant", "to serve"]}
{"mi": "tūmau", "gr": "noun", "en": ["servant"]}
{"mi": "parauri", "gr": "adj", "en": ["dark (of skin colour)"]}
{"mi": "parauri", "gr": "noun", "en": ["brown"]}
{"mi": "kōhua", "gr": "noun", "en": ["boiler, pot (any metal cooking vessel for boiling food)", "a trough or vessel dug out of a wooden trunk for boiling food using heated stones (pot boilers)."]}
{"mi": "kōhua", "gr": "verb", "en": ["to cook by boiling, to boil, to poach"]}
{"mi": "kōpaki", "gr": "noun", "en": ["husk", "envelope, wrapper", "pie"]}
{"mi": "kōpaki", "gr": "verb", "en": ["to fold", "to wrap, cover"]}
{"mi": "mōmona", "gr": "noun", "en": ["fat, corpulence, obesity", "fertility, richness"]}
{"mi": "mōmona", "gr": "adj", "en": ["fatty", "fat, plump", "fertile, rich"]}
{"mi": "ōriwa", "gr": "noun", "en": ["olive", "olive tree"]}
{"mi": "tāhuhu", "gr": "noun", "en": ["ridgepole", "horizontal beam supporting a kite's wings", "lineage"]}
{"mi": "tāhuhu", "gr": "adj", "en": ["eldest", "chief"]}
{"mi": "rarau", "gr": "noun", "en": ["root"]}
{"mi": "rarau", "gr": "verb", "en": ["to grasp, to grab", "to take root"]}
{"mi": "pikitia", "gr": "noun", "en": ["picture, image"]}
{"mi": "tioro", "gr": "verb", "en": ["to squawk, to screech, to shriek"]}
{"mi": "tioro", "gr": "noun", "en": ["squawk, screech, shriek", "stitchbird"]}
{"mi": "kuīni", "gr": "noun", "en": ["queen (monarch)", "queen"]}
{"mi": "kuīni", "gr": "verb", "en": ["to reign"]}
{"mi": "kōwhiri", "gr": "verb", "en": ["to pick, to choose, to select"]}
{"mi": "kōwhiri", "gr": "noun", "en": ["choice, selection"]}
{"mi": "wewehi", "gr": "verb", "en": ["To be frightened, impressed, in awe", "To be frightening, alarming, fearsome, impressive, awesome"]}
{"mi": "wewehi", "gr": "noun", "en": ["dread, fear, awe", "regard", "spine, e.g. of a dorsal fin"]}
{"mi": "kēhua", "gr": "verb", "en": ["to haunt"]}
{"mi": "kēhua", "gr": "noun", "en": ["ghost", "joker (playing card)"]}
{"mi": "aronga", "gr": "noun", "en": ["definition"]}
{"mi": "kaipatu", "gr": "noun", "en": ["beater, striker, attacker", "assailant", "batsman"]}
{"mi": "piu", "gr": "verb", "en": ["to cast, to throw, to fling (of rope, line etc)", "to swing (of a cord)", "to wave, to sway", "to wield, to brandish (of a weapon)"]}
{"mi": "poki", "gr": "verb", "en": ["to turn over, to hang or place concave objects (like boats) upside down", "to overtake", "to capsize", "to cover over something (esp. with a lid)"]}
{"mi": "māmā", "gr": "adj", "en": ["light, of little weight", "nimble, of low effort", "easy, simple, not difficult", "cheap, affordable (of price)"]}
{"mi": "waro", "gr": "noun", "en": ["pit, chasm, abyss", "mine", "coal, charcoal", "carbon"]}
{"mi": "kaho", "gr": "noun", "en": ["crossbar; crossbeam", "roof batten", "fence rail", "horizontal wall batten in a meeting house"]}
{"mi": "uranga", "gr": "noun", "en": ["glow", "sunrise", "sunset"]}
{"mi": "hāka", "gr": "noun", "en": ["jug", "groundsel", "hack (horse)", "butterweed"]}
{"mi": "āria", "gr": "noun", "en": ["tidal pool", "trough between shoals", "gap between rocks", "bay"]}
{"mi": "tonga", "gr": "noun", "en": ["south"]}
{"mi": "hōiho", "gr": "noun", "en": ["horse (Equus caballus)"]}
{"mi": "maita", "gr": "noun", "en": ["bowls, bowling"]}
{"mi": "ngeru", "gr": "noun", "en": ["cat (Felis silvestris catus)"]}
{"mi": "tīeke", "gr": "noun", "en": ["saddleback (Philesturnus spp.)"]}
{"mi": "kawau", "gr": "noun", "en": ["cormorant, shag"]}
{"mi": "anahe", "gr": "adj", "en": ["alone, only"]}
{"mi": "wawao", "gr": "verb", "en": ["referee, umpire"]}
{"mi": "tōrangapū", "gr": "noun", "en": ["politics"]}
{"mi": "tōrangapū", "gr": "adj", "en": ["political"]}
{"mi": "makariri", "gr": "verb", "en": ["cold"]}
{"mi": "makariri", "gr": "adj", "en": ["cold"]}
{"mi": "makariri", "gr": "noun", "en": ["cold, coldness", "winter", "frost"]}
{"mi": "whakamā", "gr": "verb", "en": ["be ashamed, shy, bashful, embarrassed"]}
{"mi": "whakamā", "gr": "adj", "en": ["ashamed, shy, bashful, embarrassed"]}
{"mi": "whakamā", "gr": "noun", "en": ["shame, embarrassment"]}
{"mi": "waimarie", "gr": "adj", "en": ["lucky", "fortuitous"]}
{"mi": "waimarie", "gr": "noun", "en": ["good fortune", "luck"]}
{"mi": "waimarie", "gr": "verb", "en": ["to be lucky, fortunate"]}
{"mi": "matikuku", "gr": "noun", "en": ["nail (of the fingers and toes)", "hoof", "claw, talon (of birds etc)"]}
{"mi": "whakanui", "gr": "verb", "en": ["to enlarge, to magnify", "to celebrate, to honour"]}
{"mi": "whakanui", "gr": "noun", "en": ["celebration"]}
{"mi": "taikoa", "gr": "adj", "en": ["Of or relating to the established Chinese New Zealand communities of New Zealand, especially their locally developed identity, history, culture, and heritage.", "Of or relating to longstanding Cantonese-descended New Zealand families."]}
{"mi": "taikoa", "gr": "noun", "en": ["A New Zealander belonging to the established Chinese New Zealand communities of New Zealand.", "A New Zealander of longstanding Cantonese descent, especially one belonging to a locally rooted family whose history in New Zealand extends across generations."]}
{"mi": "hongi", "gr": "noun", "en": ["The Maori greeting of touching noses."]}
{"mi": "hongi", "gr": "verb", "en": ["To perform the Maori greeting of touching noses."]}
{"mi": "akiri", "gr": "noun", "en": ["rejection, disposal, discarding"]}
{"mi": "akiri", "gr": "verb", "en": ["to discard, reject"]}
{"mi": "koura", "gr": "noun", "en": ["gold"]}
{"mi": "koura", "gr": "noun", "en": ["koura (freshwater crayfish of the genus Paranephrops, endemic to New Zealand)"]}
{"mi": "renga", "gr": "adj", "en": ["yellow"]}
{"mi": "renga", "gr": "noun", "en": ["turmeric"]}
{"mi": "katoa", "gr": "noun", "en": ["everything, everybody"]}
{"mi": "hauku", "gr": "noun", "en": ["dew"]}
{"mi": "hauku", "gr": "adj", "en": ["damp"]}
{"mi": "peara", "gr": "noun", "en": ["pearl"]}
{"mi": "peara", "gr": "adj", "en": ["pearly"]}
{"mi": "akeake", "gr": "noun", "en": ["broadleaf hopbush (Dodonaea viscosa)", "mountain akeake (Shawia avicenniifolia syn. Olearia avicenniaefolia)", "Chatham Island akeake (Olearia traversiorum)"]}
{"mi": "akeake", "gr": "noun", "en": ["infertile land"]}
{"mi": "pātai", "gr": "noun", "en": ["a question"]}
{"mi": "pātai", "gr": "verb", "en": ["to ask, to question"]}
{"mi": "mākutu", "gr": "noun", "en": ["sorcery (magical power)", "curse (supernatural detriment)"]}
{"mi": "mākutu", "gr": "adj", "en": ["magical (relating to magic)", "supernatural (not of the usual)"]}
{"mi": "pīata", "gr": "verb", "en": ["to be shiny, bright, polished, glossy"]}
{"mi": "pīata", "gr": "noun", "en": ["brightness, shine, gloss finish"]}
{"mi": "pakini", "gr": "noun", "en": ["nick (small cut in a surface)", "apostrophe (the character ’)"]}
{"mi": "pakini", "gr": "verb", "en": ["to pinch (to squeeze a small amount of skin)", "to nick (to make a nick or notch in)"]}
{"mi": "uraura", "gr": "noun", "en": ["krill (small marine crustacean)", "whalefeed, Munida gregaria", "shrimp (decapod crustacean)"]}
{"mi": "uraura", "gr": "adj", "en": ["reddened, flushed"]}
{"mi": "haika", "gr": "noun", "en": ["anchor"]}
{"mi": "haika", "gr": "verb", "en": ["to anchor"]}
{"mi": "mamao", "gr": "adj", "en": ["far, distant, remote"]}
{"mi": "mamao", "gr": "noun", "en": ["distance"]}
{"mi": "kōhue", "gr": "noun", "en": ["boiler, pot (for boiling food)"]}
{"mi": "kōhue", "gr": "verb", "en": ["to cook by boiling, to boil"]}
{"mi": "auporo", "gr": "verb", "en": ["to curtail, truncate, cut short", "to strike"]}
{"mi": "auporo", "gr": "noun", "en": ["strike", "work stoppage"]}
{"mi": "hautū", "gr": "noun", "en": ["leader"]}
{"mi": "hautū", "gr": "verb", "en": ["to lead"]}
{"mi": "ia tau", "gr": "adv", "en": ["As frequently as every year; yearly, annually.", "ia rā", "ia marama", "ia wiki"]}
{"mi": "atiti", "gr": "noun", "en": ["acid"]}
{"mi": "atiti", "gr": "verb", "en": ["to wander; to moan"]}
{"mi": "tāwhiri", "gr": "noun", "en": ["welcoming, a welcome"]}
{"mi": "tāwhiri", "gr": "verb", "en": ["to wave", "to whirl", "to beckon, to welcome", "to fan (esp. of flames)", "to wring out"]}
{"mi": "whakataka", "gr": "verb", "en": ["to drop, toss off, cause to fall, throw down, depose, overthrow, abdicate", "to prepare", "to muster, assemble, gather", "to turn, deviate, divert", "to take a circuitous route", "surround, encircle"]}
{"mi": "whakataka", "gr": "noun", "en": ["preparation", "assembly, muster, gathering, expedition", "director, chief, administrator, controller, leader", "whakataka, Corokia macrocarpa (a shrub or tree to 6 m tall with stout branches and dark, rough bark. Leaves are leathery and shiny on top with white tomentum underneath. Petals are bright yellow and drupes yellow, dark red to black.)"]}
{"mi": "tūtaki", "gr": "verb", "en": ["to join together", "to meet", "to shut (of a enclosure), to block, to bolt"]}
{"mi": "tūtaki", "gr": "noun", "en": ["bolt or bar between two sides of a double door, latch"]}
{"mi": "mātaki", "gr": "verb", "en": ["to watch", "to observe, to survey", "to inspect, to examine"]}
{"mi": "mātaki", "gr": "noun", "en": ["inspection"]}
{"mi": "tāniko", "gr": "verb", "en": ["to finger weave", "to embroider"]}
{"mi": "tāniko", "gr": "noun", "en": ["fingerweaving", "embroidery"]}
{"mi": "pātari", "gr": "verb", "en": ["to entice", "to divert, to decoy", "to provoke, to encite"]}
{"mi": "pātari", "gr": "noun", "en": ["persuasiveness"]}
{"mi": "pūrou", "gr": "verb", "en": ["to spear (to thrust that catches an object on the tip of a pointed stick)"]}
{"mi": "pūrou", "gr": "noun", "en": ["pointed stick; skewer, brochette"]}
{"mi": "pīkau", "gr": "noun", "en": ["backpack"]}
{"mi": "pīkau", "gr": "verb", "en": ["to carry on the back"]}
{"mi": "īmēra", "gr": "verb", "en": ["to email"]}
{"mi": "īmēra", "gr": "noun", "en": ["email, electronic mail"]}
{"mi": "kaupapa", "gr": "noun", "en": ["level surface, floor, stage, platform, layer", "topic, policy, matter for discussion, plan, purpose, scheme, proposal, agenda, subject, programme, theme, issue, initiative", "raft", "main body of a cloak"]}
{"mi": "tōpito", "gr": "noun", "en": ["end", "extremity"]}
{"mi": "awarua", "gr": "noun", "en": ["trench, drain", "corridor, passageway"]}
{"mi": "haeata", "gr": "noun", "en": ["beam, ray of light", "dawn, daybreak"]}
{"mi": "hamuti", "gr": "noun", "en": ["dung, poop, poo, faeces, feces, doodoo", "toilet"]}
{"mi": "pouaka", "gr": "noun", "en": ["box (cuboid space; container)", "Poa triodioides, a grass that grows on coastal dunes."]}
{"mi": "tea", "gr": "adj", "en": ["white", "light-coloured", "clear, transparent"]}
{"mi": "awe", "gr": "noun", "en": ["soot", "white feather", "power, influence"]}
{"mi": "puka", "gr": "noun", "en": ["cabbage", "Meryta sinclairii", "Griselinia lucida"]}
{"mi": "tio", "gr": "noun", "en": ["ice", "rock oyster (Saccostrea spp.)", "rough tree fern (Alsophila australis)"]}
{"mi": "kari", "gr": "verb", "en": ["to dig", "to cleave", "to wound"]}
{"mi": "hiku", "gr": "noun", "en": ["tail", "rear, end", "apex (of a leaf)"]}
{"mi": "tanu", "gr": "verb", "en": ["to plant (trees, seeds etc into the ground)", "to bury", "to smother with something"]}
{"mi": "kapi", "gr": "verb", "en": ["to close", "to cover, to shut", "to occupy a surface or space"]}
{"mi": "karu", "gr": "noun", "en": ["spongy matter (pulp around the seeds of a bottle gourd, brains, clotted blood etc)", "pupil of the eye", "eye"]}
{"mi": "reti", "gr": "verb", "en": ["to slide", "to skate", "to surf"]}
{"mi": "weta", "gr": "noun", "en": ["dirt", "filth; excrement", "no way; hell no; never!"]}
{"mi": "uku", "gr": "noun", "en": ["clay", "pottery", "soap"]}
{"mi": "kume", "gr": "verb", "en": ["to pull", "to drag", "to haul i.e. to move something heavy behind by pulling on a surface"]}
{"mi": "niho", "gr": "noun", "en": ["tooth", "sharp edge", "bud of a plant"]}
{"mi": "hinu", "gr": "noun", "en": ["fat, grease", "lard", "oil, petrol"]}
{"mi": "huke", "gr": "verb", "en": ["to uncover (of earth ovens)", "to unearth, to dig up, to excavate", "to gut or disembowel fish etc."]}
{"mi": "tumu", "gr": "noun", "en": ["foundation, base", "trunk, stump", "post, pole, stake"]}
{"mi": "tētē", "gr": "noun", "en": ["frond, shoot", "chief", "armless, legless figurehead on a canoe"]}
{"mi": "mātā", "gr": "noun", "en": ["heap, layer", "Carex secta", "longfin perch, pink maomao"]}
{"mi": "rewa", "gr": "verb", "en": ["to get under way, to depart, to set off", "to melt, to dissolve", "to float"]}
{"mi": "hape", "gr": "adj", "en": ["club-footed, having clubfoot i.e. a foot that twists inward", "deformed, crooked", "distorted, unrelated"]}
{"mi": "pōpō", "gr": "verb", "en": ["to knead", "to stir", "to pat, to stroke gently with the hand"]}
{"mi": "āraimate", "gr": "noun", "en": ["immunity"]}
{"mi": "kāeo", "gr": "noun", "en": ["Cook's turban (Cookia sulcata)", "dark rock shell", "any member of the species Hyridella menziesi of bivalve molluscs"]}
{"mi": "puta noa", "gr": "prep", "en": ["across", "throughout", "everywhere, all over"]}
{"mi": "kapekape", "gr": "verb", "en": ["to stir-fry"]}
{"mi": "kapekape", "gr": "noun", "en": ["stirfry"]}
{"mi": "kapekape", "gr": "noun", "en": ["northwest", "northwest wind"]}
{"mi": "korukoru", "gr": "noun", "en": ["wrinkle", "nook, cavity"]}
{"mi": "korukoru", "gr": "adj", "en": ["sagging, droopy (of skin)"]}
{"mi": "korukoru", "gr": "noun", "en": ["turkey"]}
{"mi": "hangarau", "gr": "adj", "en": ["technological"]}
{"mi": "hangarau", "gr": "noun", "en": ["trickery, deception", "technology"]}
{"mi": "hangarau", "gr": "verb", "en": ["to fool, to deceive"]}
{"mi": "porotaka", "gr": "noun", "en": ["globe; spherical model of Earth", "sphere"]}
{"mi": "porotaka", "gr": "adj", "en": ["spherical"]}
{"mi": "porotaka", "gr": "noun", "en": ["spinning top"]}
{"mi": "pakari", "gr": "verb", "en": ["to mature, to ripen"]}
{"mi": "pakari", "gr": "adj", "en": ["matured, ripe, aged", "solid, hard, firm"]}
{"mi": "konene", "gr": "adj", "en": ["wandering, nomadic"]}
{"mi": "konene", "gr": "noun", "en": ["wanderer, wayfarer, drifter", "refugee, displaced person"]}
{"mi": "karaka", "gr": "noun", "en": ["karaka (Corynocarpus laevigatus)", "orange"]}
{"mi": "karaka", "gr": "noun", "en": ["clock"]}
{"mi": "rārangi", "gr": "noun", "en": ["list", "line, row, queue", "clause, section"]}
{"mi": "rārangi", "gr": "verb", "en": ["list, arrange, itemise", "line up"]}
{"mi": "tārere", "gr": "noun", "en": ["swing, hanging seat", "pendulum"]}
{"mi": "tārere", "gr": "verb", "en": ["to swing, to ride on a swing"]}
{"mi": "mahuru", "gr": "verb", "en": ["settled; calmed; soothed"]}
{"mi": "mahaki", "gr": "adj", "en": ["sick, ill, invalid"]}
{"mi": "mahaki", "gr": "noun", "en": ["sickness", "disease"]}
{"mi": "anuanu", "gr": "adj", "en": ["cold", "offensive, disgusting"]}
{"mi": "anuanu", "gr": "noun", "en": ["aversion"]}
{"mi": "ia rā", "gr": "adv", "en": ["As frequently as every day; daily."]}
{"mi": "kakano", "gr": "noun", "en": ["texture, grain (of wood)", "variety"]}
{"mi": "kakano", "gr": "noun", "en": ["berry"]}
{"mi": "kaokao", "gr": "noun", "en": ["side, flank (of the body, hills and mountains, canoes, etc.)", "ribs"]}
{"mi": "kaokao", "gr": "adj", "en": ["sideways"]}
{"mi": "huahua", "gr": "verb", "en": ["to boil water", "especially in a rudimentary way by dropping hot stones onto the water container, before the advent of introduced metal cookery"]}
{"mi": "huahua", "gr": "noun", "en": ["water vessel used for boiling in such a method"]}
{"mi": "karāhe", "gr": "noun", "en": ["glass", "mirror"]}
{"mi": "karāhe", "gr": "noun", "en": ["class"]}
{"mi": "herehere", "gr": "verb", "en": ["to tie up (a number of times), bind, tie, shackle, hobble."]}
{"mi": "herehere", "gr": "noun", "en": ["prisoner"]}
{"mi": "mirumiru", "gr": "noun", "en": ["bubble"]}
{"mi": "tauranga", "gr": "noun", "en": ["anchorage"]}
{"mi": "rata", "gr": "adj", "en": ["tame", "quiet"]}
{"mi": "ewe", "gr": "noun", "en": ["afterbirth, placenta", "womb"]}
{"mi": "manga", "gr": "noun", "en": ["branch", "stream, creek", "faculty (of a university), unit (of a hospital)", "act (of a play)"]}
{"mi": "meme", "gr": "verb", "en": ["to murmur", "to mutter, to grumble"]}
{"mi": "hono", "gr": "verb", "en": ["add", "join"]}
{"mi": "hope", "gr": "noun", "en": ["waist", "hip (ringa hope)"]}
{"mi": "hue", "gr": "noun", "en": ["bottle gourd, Lagenaria siceraria", "any container using the shell of this fruit, calabash"]}
{"mi": "topa", "gr": "verb", "en": ["to soar, to fly high", "to swoop, to dart, to dive (of a flying bird)"]}
{"mi": "pene", "gr": "noun", "en": ["pen", "pencil"]}
{"mi": "taro", "gr": "noun", "en": ["taro", "bread"]}
{"mi": "piti", "gr": "verb", "en": ["to cling, to attach", "to join or pair together"]}
{"mi": "uka", "gr": "adj", "en": ["hard", "firm, solid"]}
{"mi": "puha", "gr": "noun", "en": ["gill (of fish)", "the sow thistle, also called rareke, or raraki"]}
{"mi": "rō", "gr": "noun", "en": ["ant", "mantis, praying mantis; stick insect"]}
{"mi": "whē", "gr": "noun", "en": ["stick insect esp. Acanthoderus horridus", "mantis, praying mantis"]}
{"mi": "kākā", "gr": "noun", "en": ["a parrot (especially the kaka)", "kaka (Nestor meridionalis)"]}
{"mi": "kihu", "gr": "noun", "en": ["a thrum or fringe thread", "noodle"]}
{"mi": "komo", "gr": "verb", "en": ["to plug, to thrust", "to insert"]}
{"mi": "rimu", "gr": "noun", "en": ["moss (plants of the division Bryophyta)", "a large tree native to New Zealand (Dacrydium cupressinum); see English rimu."]}
{"mi": "mako", "gr": "adj", "en": ["to be peeled", "stripped off"]}
{"mi": "ipu", "gr": "noun", "en": ["cup", "any small receptacle"]}
{"mi": "raku", "gr": "verb", "en": ["to scratch", "to strum"]}
{"mi": "pāpā", "gr": "noun", "en": ["father, dad", "uncle"]}
{"mi": "pohe", "gr": "adj", "en": ["blind", "stupid, dull"]}
{"mi": "rūpi", "gr": "noun", "en": ["ruby", "rupee"]}
{"mi": "aute", "gr": "noun", "en": ["paper mulberry", "mulberry bark used to make clothes"]}
{"mi": "rino", "gr": "noun", "en": ["iron", "metal"]}
{"mi": "mānu", "gr": "verb", "en": ["be floating, launch, afloat", "be flooded, overflow"]}
{"mi": "hāte", "gr": "noun", "en": ["shirt", "hearts"]}
{"mi": "auē", "gr": "intj", "en": ["wow", "alas"]}
{"mi": "iaia", "gr": "noun", "en": ["blood vessels, veins", "sinews; tendons"]}
{"mi": "whau", "gr": "noun", "en": ["corkwood, Entelea arborescens", "five-finger, Pseudopanax arboreus"]}
{"mi": "āwhā", "gr": "noun", "en": ["gale, storm, hurricane, any strong winds", "heavy or torrential rain"]}
{"mi": "paea", "gr": "noun", "en": ["swordfish (Xiphias gladius)", "flint"]}
{"mi": "kōpī", "gr": "noun", "en": ["Corynocarpus laevigatus", "ginger, Zingiber officinale"]}
{"mi": "māhī", "gr": "verb", "en": ["to ferment", "to putrefy"]}
{"mi": "kōiwi", "gr": "noun", "en": ["human bone", "corpse", "person, self", "descendants"]}
{"mi": "wāhine", "gr": "noun", "en": ["plural of wahine"]}
{"mi": "manawa", "gr": "noun", "en": ["belly, stomach", "heart (of a person)", "heart (seat of affections)", "breath", "mind", "spirit"]}
{"mi": "wharau", "gr": "verb", "en": ["to travel (particularly by sea)"]}
{"mi": "tupari", "gr": "noun", "en": ["palm-leaf fern"]}
{"mi": "tohorā", "gr": "noun", "en": ["right whale"]}
{"mi": "haeana", "gr": "noun", "en": ["iron"]}
{"mi": "hākete", "gr": "noun", "en": ["jacket"]}
{"mi": "kekeno", "gr": "noun", "en": ["New Zealand fur seal (Arctocephalus forsteri)"]}
{"mi": "kōtuku", "gr": "noun", "en": ["great egret"]}
{"mi": "parore", "gr": "noun", "en": ["luderick (Girella tricuspidata)"]}
{"mi": "taiaki", "gr": "noun", "en": ["hormone"]}
{"mi": "toro", "gr": "num", "en": ["alternative form of toru"]}
{"mi": "ārohirohi", "gr": "adj", "en": ["shimmering, glistening"]}
{"mi": "ārohirohi", "gr": "noun", "en": ["shimmering heat", "feeling, sense"]}
{"mi": "ārohirohi", "gr": "verb", "en": ["to hover, quiver or shimmer", "to turn round and round; to feel giddiness."]}
{"mi": "hakirara", "gr": "verb", "en": ["to annoy, insult"]}
{"mi": "hakirara", "gr": "adj", "en": ["sloppy"]}
{"mi": "piropiro", "gr": "adj", "en": ["putrid, stinking"]}
{"mi": "piropiro", "gr": "noun", "en": ["bowels, intestines"]}
{"mi": "piropiro", "gr": "adj", "en": ["calm, still (of water)"]}
{"mi": "hanihani", "gr": "noun", "en": ["disparaging comments"]}
{"mi": "hanihani", "gr": "verb", "en": ["to disparage, speak ill of"]}
{"mi": "hanihani", "gr": "adj", "en": ["disparaging, derogatory, contemptuous, insulting, scornful"]}
{"mi": "miromiro", "gr": "noun", "en": ["A bird of subspecies Petroica macrocephala toitoi of tom-tits, of the North Island"]}
{"mi": "kaimoana", "gr": "noun", "en": ["seafood, shellfish"]}
{"mi": "ihumoana", "gr": "noun", "en": ["Portuguese man-of-war (Physalia physalis)"]}
{"mi": "kainga", "gr": "noun", "en": ["The refuse of a meal."]}
{"mi": "kakara", "gr": "adj", "en": ["aromatic, fragrant, sweet-smelling"]}
{"mi": "kakara", "gr": "noun", "en": ["scent, smell, odour"]}
{"mi": "aniani", "gr": "verb", "en": ["to disparage, to belittle"]}
{"mi": "aniani", "gr": "noun", "en": ["derision, disapproval, ridicule"]}
{"mi": "ātaahua", "gr": "verb", "en": ["to be beautiful, pretty, good-looking, gorgeous, lovely", "to be handsome, good-looking, gorgeous", "to be pleasant"]}
{"mi": "ātaahua", "gr": "noun", "en": ["beauty"]}
{"mi": "hauhau", "gr": "noun", "en": ["whip"]}
{"mi": "hauhau", "gr": "adj", "en": ["windy"]}
{"mi": "hapori", "gr": "noun", "en": ["community"]}
{"mi": "hapori", "gr": "adj", "en": ["social"]}
{"mi": "keakea", "gr": "noun", "en": ["quack (of a duck)"]}
{"mi": "keakea", "gr": "verb", "en": ["to quack (as a duck)"]}
{"mi": "mētara", "gr": "noun", "en": ["metal"]}
{"mi": "mētara", "gr": "noun", "en": ["medal"]}
{"mi": "tūhāhā", "gr": "adj", "en": ["unique, isolated"]}
{"mi": "tūhāhā", "gr": "noun", "en": ["individuality"]}
{"mi": "kokomo", "gr": "verb", "en": ["to wear, to put on something"]}
{"mi": "kokomo", "gr": "noun", "en": ["shirt"]}
{"mi": "pūrere", "gr": "noun", "en": ["ornamental feathers lining the sides (gunwales, near its strakes) of a waka"]}
{"mi": "pūrere", "gr": "noun", "en": ["appliance, device"]}
{"mi": "heihei", "gr": "adj", "en": ["to be related to a chicken"]}
{"mi": "heihei", "gr": "noun", "en": ["chicken"]}
{"mi": "tāhono", "gr": "noun", "en": ["interface"]}
{"mi": "tāhono", "gr": "verb", "en": ["to connect"]}
{"mi": "kororā", "gr": "noun", "en": ["little penguin; blue penguin (Eudyptula minor)"]}
{"mi": "kororā", "gr": "adj", "en": ["bluish grey; blue-grey"]}
{"mi": "kāmera", "gr": "noun", "en": ["camera"]}
{"mi": "kāmera", "gr": "noun", "en": ["camel"]}
{"mi": "utuutu", "gr": "noun", "en": ["repayments"]}
{"mi": "utuutu", "gr": "verb", "en": ["to fill a container (with liquid) a number of times"]}
{"mi": "aronui", "gr": "noun", "en": ["armspan, fathom"]}
{"mi": "aronui", "gr": "adj", "en": ["suitable"]}
{"mi": "awhitu", "gr": "verb", "en": ["to feel hurt"]}
{"mi": "awhitu", "gr": "adj", "en": ["vigilant"]}
{"mi": "hākure", "gr": "noun", "en": ["lice"]}
{"mi": "hākure", "gr": "verb", "en": ["search for lice"]}
{"mi": "haunga", "gr": "noun", "en": ["stench, stink"]}
{"mi": "haunga", "gr": "verb", "en": ["to stink, to reek"]}
{"mi": "hiainu", "gr": "noun", "en": ["thirst"]}
{"mi": "hiainu", "gr": "adj", "en": ["thirsty"]}
{"mi": "ia wiki", "gr": "adv", "en": ["As frequently as every week; weekly.", "ia rā", "ia marama", "ia tau"]}
{"mi": "pōwhiri", "gr": "verb", "en": ["to invite", "to beckon, to welcome"]}
{"mi": "pōwhiri", "gr": "noun", "en": ["welcoming, a welcome", "invitation"]}
{"mi": "hākaro", "gr": "verb", "en": ["to hollow out"]}
{"mi": "hākaro", "gr": "adj", "en": ["hollowed"]}
{"mi": "hākuku", "gr": "verb", "en": ["to scrape (especially of Phormium leaves like harakeke prior to weaving)"]}
{"mi": "hākuku", "gr": "noun", "en": ["radula (tongue of mollusks used to scrape rocks)"]}
{"mi": "pūkākā", "gr": "adj", "en": ["volatile, fiery, hotheaded"]}
{"mi": "pūkākā", "gr": "verb", "en": ["to be hot, eager"]}
{"mi": "pūkaka", "gr": "adj", "en": ["direct (straight, constant, without interruption)"]}
{"mi": "pūkaka", "gr": "noun", "en": ["humerus, thighbone"]}
{"mi": "pātiki", "gr": "noun", "en": ["flounder"]}
{"mi": "pātiki", "gr": "verb", "en": ["to be flat, to be level"]}
{"mi": "tarawhiti", "gr": "noun", "en": ["hoop", "torus"]}
{"mi": "tarawhiti", "gr": "verb", "en": ["to encircle"]}
{"mi": "kōripo", "gr": "verb", "en": ["to swirl, to eddy"]}
{"mi": "kōripo", "gr": "noun", "en": ["whirlpool, eddy"]}
{"mi": "tākuta", "gr": "noun", "en": ["doctor"]}
{"mi": "tākuta", "gr": "verb", "en": ["to practise medicine"]}
{"mi": "whakaruru", "gr": "verb", "en": ["to shelter, protect"]}
{"mi": "whakaruru", "gr": "noun", "en": ["screen, shelter, protector", "a facial gesture in kapa haka where the enlarged eyes stare in one direction and the tongue protrudes in the opposite direction"]}
{"mi": "whaiaro", "gr": "noun", "en": ["self", "person"]}
{"mi": "whaiaro", "gr": "adj", "en": ["self-", "personal"]}
{"mi": "tōkere", "gr": "noun", "en": ["a deathwatch beetle (Anobiidae)"]}
{"mi": "tōkere", "gr": "noun", "en": ["castanets made of wood, bone, or a pair of bivalve shells"]}
{"mi": "rīanga", "gr": "noun", "en": ["screen, stretched physical divider"]}
{"mi": "rīanga", "gr": "noun", "en": ["insurance"]}
{"mi": "wawata", "gr": "verb", "en": ["to desire earnestly, long for, yearn for, daydream"]}
{"mi": "wawata", "gr": "noun", "en": ["yearning, aspiration, hope, dream"]}
{"mi": "hītako", "gr": "verb", "en": ["to yawn"]}
{"mi": "hītako", "gr": "noun", "en": ["the act of yawning"]}
{"mi": "tiritiri", "gr": "verb", "en": ["to toss about", "to split, to share", "to scatter, to shimmer (of light)", "to disturb"]}
{"mi": "tiritiri", "gr": "noun", "en": ["scattering, apportion", "shimmering, flickering, mirage"]}
{"mi": "whakaata", "gr": "verb", "en": ["to reflect", "to exhibit, display", "to simulate", "to act, pretend"]}
{"mi": "whakaata", "gr": "noun", "en": ["reflection", "mirror"]}
{"mi": "whakapohane", "gr": "noun", "en": ["the act of mooning, showing one's buttocks"]}
{"mi": "whakapohane", "gr": "verb", "en": ["to moon at someone"]}
{"mi": "whakarongo", "gr": "verb", "en": ["to hear, to listen", "to taste", "to obey"]}
{"mi": "rapunga", "gr": "noun", "en": ["search", "investigation"]}
{"mi": "paretai", "gr": "noun", "en": ["river bank", "washboard (of a canoe)"]}
{"mi": "kiwi", "gr": "noun", "en": ["kiwi (bird)"]}
{"mi": "anu", "gr": "noun", "en": ["cold"]}
{"mi": "more", "gr": "noun", "en": ["taproot"]}
{"mi": "poke", "gr": "adj", "en": ["grimy"]}
{"mi": "muka", "gr": "noun", "en": ["prepared fibre of harakeke"]}
{"mi": "kamu", "gr": "noun", "en": ["Hawai'i birdcatching sedge (Carex uncinata)"]}
{"mi": "toki", "gr": "noun", "en": ["axe"]}
{"mi": "puke", "gr": "noun", "en": ["hill"]}
{"mi": "pine", "gr": "noun", "en": ["pin, tack, brooch"]}
{"mi": "hake", "gr": "verb", "en": ["to be hunched, crooked, bent"]}
{"mi": "pipi", "gr": "noun", "en": ["The edible saltwater clam Paphies australis, of the family Mesodesmatidae, endemic to New Zealand."]}
{"mi": "mato", "gr": "noun", "en": ["deep swamp, deep valley"]}
{"mi": "rai", "gr": "noun", "en": ["rye"]}
{"mi": "hemo", "gr": "verb", "en": ["to die"]}
{"mi": "tomo", "gr": "verb", "en": ["to enter"]}
{"mi": "oki", "gr": "noun", "en": ["rest"]}
{"mi": "oma", "gr": "verb", "en": ["run, race, flee, escape, move quickly, run away"]}
{"mi": "repo", "gr": "noun", "en": ["swamp"]}
{"mi": "hiki", "gr": "verb", "en": ["to carry (in the arms)"]}
{"mi": "uma", "gr": "noun", "en": ["chest"]}
{"mi": "mauri", "gr": "noun", "en": ["life", "life force or principle; metaphorical soul; source of life", "heart, seat of emotions"]}
{"mi": "pari", "gr": "noun", "en": ["cliff"]}
{"mi": "hore", "gr": "noun", "en": ["scrofula"]}
{"mi": "ē", "gr": "intj", "en": ["Used to conclude a line or the end of a traditional waiata or karakia with no apparent meaning."]}
{"mi": "hamu", "gr": "verb", "en": ["glean"]}
{"mi": "aho", "gr": "noun", "en": ["fishing line; string"]}
{"mi": "mara", "gr": "adj", "en": ["preserved esp. by prolonged steeping under running water until softened"]}
{"mi": "kutu", "gr": "noun", "en": ["louse (insect)"]}
{"mi": "atua", "gr": "noun", "en": ["god (deity)"]}
{"mi": "tunu", "gr": "verb", "en": ["to broil, roast, bake, cook"]}
{"mi": "ariki", "gr": "noun", "en": ["paramount chief of a tribe, the most senior by descent of the rangatira (chiefs) of the tribe", "first-born male or female in a family of high rank", "leader"]}
{"mi": "haku", "gr": "noun", "en": ["yellowtail amberjack (Seriola lalandi)"]}
{"mi": "riha", "gr": "noun", "en": ["nit"]}
{"mi": "umu", "gr": "noun", "en": ["oven"]}
{"mi": "ota", "gr": "verb", "en": ["to eat raw"]}
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
{"mi": "pua", "gr": "noun", "en": ["flower"]}
{"mi": "paho", "gr": "verb", "en": ["to be aloft, to float, to soar"]}
{"mi": "uri", "gr": "adj", "en": ["dark, deep (of colour)"]}
{"mi": "tona", "gr": "noun", "en": ["wart, corn, nodule"]}
{"mi": "taru", "gr": "noun", "en": ["weed, grass; small vegetation"]}
{"mi": "tenga", "gr": "noun", "en": ["crop (of a bird)", "Adam's apple", "goitre"]}
{"mi": "hewa", "gr": "adj", "en": ["mistaken"]}
{"mi": "waiū", "gr": "noun", "en": ["milk"]}
{"mi": "kehu", "gr": "adj", "en": ["reddish"]}
{"mi": "hupa", "gr": "noun", "en": ["soup, broth"]}
{"mi": "momo", "gr": "noun", "en": ["a type, a kind, a species, a breed, a variety, a race, a genre"]}
{"mi": "epa", "gr": "noun", "en": ["wall post"]}
{"mi": "huia", "gr": "noun", "en": ["huia (†Heteralocha acutirostris)"]}
{"mi": "hema", "gr": "noun", "en": ["genitalia"]}
{"mi": "ngū", "gr": "noun", "en": ["broad squid (Sepioteuthis australis)"]}
{"mi": "roke", "gr": "noun", "en": ["dung, poop, poo, faeces, feces, doodoo"]}
{"mi": "keke", "gr": "noun", "en": ["cake"]}
{"mi": "natu", "gr": "verb", "en": ["to stir, to mix"]}
{"mi": "hopi", "gr": "noun", "en": ["soap"]}
{"mi": "wētā", "gr": "noun", "en": ["weta, any of various species of insects resembling crickets"]}
{"mi": "ī", "gr": "verb", "en": ["to ferment, to sour, to spoil"]}
{"mi": "waku", "gr": "verb", "en": ["to scrape"]}
{"mi": "weka", "gr": "noun", "en": ["woodhen (Gallirallus australis)"]}
{"mi": "māti", "gr": "noun", "en": ["ripe fruit of the tree fuchsia or kōtukutuku, Fuchsia excorticata"]}
{"mi": "pāua", "gr": "noun", "en": ["Any of the three species of large edible sea snails, marine gastropod molluscs of the family Haliotidae (sole genus Haliotis), known in the United States and Australia as abalone, and in the United Kingdom as ormer shells."]}
{"mi": "rīti", "gr": "verb", "en": ["read"]}
{"mi": "tēpu", "gr": "noun", "en": ["table"]}
{"mi": "kete", "gr": "noun", "en": ["basket"]}
{"mi": "rūma", "gr": "noun", "en": ["room (of a building)"]}
{"mi": "kūkū", "gr": "noun", "en": ["pigeon"]}
{"mi": "hihi", "gr": "noun", "en": ["feeler, antenna"]}
{"mi": "pāti", "gr": "noun", "en": ["political party"]}
{"mi": "oroi", "gr": "verb", "en": ["to hone, sharpen"]}
{"mi": "pītau", "gr": "noun", "en": ["frond, shoot", "figurehead on a canoe with such a carving", "canoe with such a figurehead"]}
{"mi": "tiā", "gr": "noun", "en": ["jar (cylindrical container)"]}
{"mi": "ārahi", "gr": "verb", "en": ["to lead", "to escort", "to herald (as the appearance of a particular star signals the beginning of a particular month)"]}
{"mi": "tāpu", "gr": "noun", "en": ["a tub, a vat"]}
{"mi": "amio", "gr": "verb", "en": ["to wander"]}
{"mi": "hēki", "gr": "noun", "en": ["egg"]}
{"mi": "nohu", "gr": "noun", "en": ["deepwater burrfish (Allomycterus pilatus)"]}
{"mi": "māhū", "gr": "verb", "en": ["to be gentle"]}
{"mi": "tūī", "gr": "noun", "en": ["tui (Prosthemadera novaeseelandiae)"]}
{"mi": "hīti", "gr": "noun", "en": ["sheet, bedsheet"]}
{"mi": "kāhu", "gr": "noun", "en": ["swamp harrier (Circus approximans), a species of harrier hawk"]}
{"mi": "tīhi", "gr": "noun", "en": ["cheese"]}
{"mi": "aihi", "gr": "noun", "en": ["dolphin"]}
{"mi": "pōro", "gr": "noun", "en": ["ball"]}
{"mi": "moī", "gr": "verb", "en": ["to ferment"]}
{"mi": "tahā", "gr": "noun", "en": ["calabash, container using dried shell of bottle gourd fruit"]}
{"mi": "kāwai", "gr": "noun", "en": ["tentacle", "tendril, shoot", "lineage, pedigree"]}
{"mi": "nanī", "gr": "noun", "en": ["any Brassica plant."]}
{"mi": "hūhi", "gr": "noun", "en": ["swamp"]}
{"mi": "riaki", "gr": "verb", "en": ["to lift up or raise, to elevate", "to stick or stand out", "to pop out or bulge (of veins)"]}
{"mi": "hauā", "gr": "adj", "en": ["disabled"]}
{"mi": "pākau", "gr": "noun", "en": ["wing", "shoulder blade", "gully fern (Pakau pennigera)"]}
{"mi": "pēpi", "gr": "noun", "en": ["baby"]}
{"mi": "ōrea", "gr": "noun", "en": ["New Zealand longfin eel (Anguilla dieffenbachii)"]}
{"mi": "tāiko", "gr": "noun", "en": ["black petrel", "Westland petrel, a seabird endemic to Aotearoa.", "New Zealand sandalwood (Mida salicifolia), a tree endemic to the North Island of Aotearoa."]}
{"mi": "takē", "gr": "verb", "en": ["to be absent"]}
{"mi": "whatutoto", "gr": "adj", "en": ["advanced"]}
{"mi": "whatutoto", "gr": "noun", "en": ["red heartwood"]}
{"mi": "whatutoto", "gr": "verb", "en": ["to be advanced", "to mature"]}
{"mi": "āwhiowhio", "gr": "noun", "en": ["whirlwind"]}
{"mi": "āwhiowhio", "gr": "verb", "en": ["to make sth swung around in circles, to whirl sth"]}
{"mi": "āwhiowhio", "gr": "adj", "en": ["swung or whirled around in circles", "circuitous, going around in circles"]}
{"mi": "wharenoho", "gr": "noun", "en": ["housing, accommodation", "dormitory, barracks"]}
{"mi": "pounamu", "gr": "adj", "en": ["dark green"]}
{"mi": "pounamu", "gr": "noun", "en": ["greenstone, nephrite", "glass bottle"]}
{"mi": "tokotoko", "gr": "noun", "en": ["walking stick, cane", "crutch", "staff"]}
{"mi": "tokotoko", "gr": "verb", "en": ["to prop up", "to walk with a cane or crutch, to crutch"]}
{"mi": "aumoana", "gr": "noun", "en": ["open sea", "blue"]}
{"mi": "aumoana", "gr": "adj", "en": ["oceanic"]}
{"mi": "haukaha", "gr": "adj", "en": ["very windy"]}
{"mi": "haukaha", "gr": "verb", "en": ["reinforce, bolster", "amend"]}
{"mi": "hauraro", "gr": "noun", "en": ["north wind"]}
{"mi": "hauraro", "gr": "verb", "en": ["to hang down", "to surrender"]}
{"mi": "moehewa", "gr": "verb", "en": ["to dream", "to delude oneself"]}
{"mi": "moehewa", "gr": "noun", "en": ["dream"]}
{"mi": "pūreirei", "gr": "verb", "en": ["to be patchy, to be scattered"]}
{"mi": "pūreirei", "gr": "noun", "en": ["cluster", "windthrow", "buffer", "Any of species Carex secta of sedges"]}
{"mi": "kōkōwai", "gr": "noun", "en": ["red ochre"]}
{"mi": "kōkōwai", "gr": "verb", "en": ["dark red, crimson", "auburn, reddish-brown"]}
{"mi": "tauraki", "gr": "verb", "en": ["to dry (by exposure to the sun), to dehydrate", "dried, dehydrated"]}
{"mi": "tauraki", "gr": "noun", "en": ["dehydrator"]}
{"mi": "whakatōpū", "gr": "noun", "en": ["amalgamation, consolidation"]}
{"mi": "whakatōpū", "gr": "verb", "en": ["to amalgamate, consolidate, assemble (in a group)"]}
{"mi": "kaniawhea", "gr": "verb", "en": ["to feel remorseful"]}
{"mi": "kaniawhea", "gr": "noun", "en": ["remorse, regret, guilt, compunction"]}
{"mi": "pāremata", "gr": "noun", "en": ["parliament"]}
{"mi": "ikura", "gr": "noun", "en": ["hemorrhage", "menstruation"]}
{"mi": "kapua", "gr": "noun", "en": ["cloud", "mist"]}
{"mi": "matau", "gr": "noun", "en": ["fishhook", "hookgrass"]}
{"mi": "poaka", "gr": "noun", "en": ["pig", "pork"]}
{"mi": "kauri", "gr": "noun", "en": ["A conifer of the genus Agathis, family Araucariaceae, found in Australasia and Melanesia.", "Agathis australis, a large conifer of the family Araucariaceae."]}
{"mi": "taniwha", "gr": "noun", "en": ["taniwha"]}
{"mi": "nganga", "gr": "noun", "en": ["hail", "stone of a fruit", "core of a boil", "shell or husk"]}
{"mi": "karaihe", "gr": "noun", "en": ["glass (substance)"]}
{"mi": "nguru", "gr": "verb", "en": ["to rumble", "to grunt"]}
{"mi": "tapaono", "gr": "noun", "en": ["hexagon"]}
{"mi": "konga", "gr": "noun", "en": ["fragment, piece", "charcoal, live coal"]}
{"mi": "ariari", "gr": "adj", "en": ["clear, visible", "gleaming", "undisturbed", "bare, stripped (of trees etc)"]}
{"mi": "tauiwi", "gr": "noun", "en": ["foreigner, European, non-Māori, colonist", "person coming from afar", "gentile, heathen", "outsider"]}
{"mi": "miriona", "gr": "num", "en": ["million"]}
{"mi": "kuihi", "gr": "noun", "en": ["goose", "Canada goose"]}
{"mi": "āhuru", "gr": "adj", "en": ["snug, cozy, comfortable", "warm"]}
{"mi": "āinga", "gr": "noun", "en": ["violence", "impetus"]}
{"mi": "ānini", "gr": "noun", "en": ["sensation", "headache"]}
{"mi": "anipā", "gr": "adj", "en": ["anxious, uneasy", "solicitous"]}
{"mi": "āniwa", "gr": "adj", "en": ["bright", "reckless"]}
{"mi": "hārau", "gr": "verb", "en": ["to win", "to fumble; to grasp"]}
{"mi": "rāwhiti", "gr": "noun", "en": ["east"]}
{"mi": "tīare", "gr": "noun", "en": ["fragrance, scent", "gardenia"]}
{"mi": "kōata", "gr": "noun", "en": ["glass (material)", "glass (drinking vessel)"]}
{"mi": "whākōkī", "gr": "noun", "en": ["catalyst"]}
{"mi": "kāhui", "gr": "noun", "en": ["group, cluster", "flock, herd, swarm"]}
{"mi": "whaki", "gr": "noun", "en": ["to pluck, to pick (of fruit)", "to harvest"]}
{"mi": "whāki", "gr": "verb", "en": ["to reveal, to disclose", "to admit, confess"]}
{"mi": "āpōpō", "gr": "noun", "en": ["tomorrow", "the future"]}
{"mi": "tawau", "gr": "noun", "en": ["latex or milky sap of any plant.", "rubber, flexible and pliable material made from coagulating natural latex of the rubber tree (Hevea brasiliensis)."]}
{"mi": "toroa", "gr": "noun", "en": ["an albatross, especially the royal albatross or wandering albatross", "a tuft of albatross down worn as an adornment."]}
{"mi": "tūpāpaku", "gr": "noun", "en": ["corpse, dead body", "sick person, invalid, someone who is terminally ill", "an intended victim of homicide"]}
{"mi": "tapawhā", "gr": "noun", "en": ["quadrilateral"]}
{"mi": "whakahirahira", "gr": "verb", "en": ["to extol"]}
{"mi": "whakahirahira", "gr": "noun", "en": ["grandeur, greatness", "influence", "reputation, standing", "prominence", "importance", "eminence"]}
{"mi": "whakahirahira", "gr": "adj", "en": ["great", "magnificent", "wonderful", "inspiring"]}
{"mi": "pekapeka", "gr": "noun", "en": ["bat (animal) – especially the species Mystacina tuberculata"]}
{"mi": "pekapeka", "gr": "noun", "en": ["toy windmill/pinwheel made from phormium leaves", "starfish", "a snood or gangion in a traditional longline set up"]}
{"mi": "rakuraku", "gr": "verb", "en": ["to scratch", "to strum"]}
{"mi": "rakuraku", "gr": "noun", "en": ["rake, harrow", "guitar"]}
{"mi": "mātanga", "gr": "noun", "en": ["experienced person, expert, professional"]}
{"mi": "mātanga", "gr": "adj", "en": ["sophisticated, experienced"]}
{"mi": "moemoeā", "gr": "noun", "en": ["dream, vision"]}
{"mi": "moemoeā", "gr": "verb", "en": ["to dream, to experience a vision"]}
{"mi": "pakanga", "gr": "noun", "en": ["war; battle"]}
{"mi": "pakanga", "gr": "verb", "en": ["to fight, to battle"]}
{"mi": "whawhai", "gr": "verb", "en": ["fight"]}
{"mi": "whawhai", "gr": "noun", "en": ["war"]}
{"mi": "pikopiko", "gr": "adj", "en": ["winding, meandering, crooked", "tender, young", "unripe"]}
{"mi": "pikopiko", "gr": "noun", "en": ["fiddlehead, young fern frond (in general)"]}
{"mi": "pūmanawa", "gr": "noun", "en": ["natural talent", "software"]}
{"mi": "pūmanawa", "gr": "verb", "en": ["to draw a long breath", "talented, gifted"]}
{"mi": "haramai", "gr": "noun", "en": ["welcome"]}
{"mi": "haramai", "gr": "verb", "en": ["come"]}
{"mi": "haumākū", "gr": "verb", "en": ["get wet"]}
{"mi": "haumākū", "gr": "adj", "en": ["moist"]}
{"mi": "hemokai", "gr": "noun", "en": ["hunger"]}
{"mi": "hemokai", "gr": "verb", "en": ["starve"]}
{"mi": "marutau", "gr": "adj", "en": ["safe"]}
{"mi": "marutau", "gr": "noun", "en": ["safety"]}
{"mi": "haumaru", "gr": "adj", "en": ["safe"]}
{"mi": "haumaru", "gr": "noun", "en": ["low frequency sound"]}
{"mi": "potipoti", "gr": "noun", "en": ["box", "a special kind of compartment with a rope-hinged lid used by tohunga"]}
{"mi": "potipoti", "gr": "noun", "en": ["conch trumpet", "sand flea, sandhopper"]}
{"mi": "uwhiuwhi", "gr": "verb", "en": ["to cover", "to sprinkle, to spray, to splatter", "to shower"]}
{"mi": "uwhiuwhi", "gr": "noun", "en": ["covering"]}
{"mi": "tiketike", "gr": "verb", "en": ["to be high, to be lofty", "to be important"]}
{"mi": "tiketike", "gr": "noun", "en": ["height", "altitude"]}
{"mi": "retihuka", "gr": "noun", "en": ["ski", "skiing", "snowboard"]}
{"mi": "retihuka", "gr": "verb", "en": ["to ski"]}
{"mi": "rangahau", "gr": "verb", "en": ["To seek, search out, pursue", "To research, investigate"]}
{"mi": "rangahau", "gr": "noun", "en": ["research", "survey"]}
{"mi": "ketekete", "gr": "verb", "en": ["to chirp, chatter, cackle", "to be annoyed"]}
{"mi": "ketekete", "gr": "noun", "en": ["astonishment, amazement, consternation", "chattering"]}
{"mi": "takirua", "gr": "noun", "en": ["pair, twosome, duo, couple, duet"]}
{"mi": "takirua", "gr": "verb", "en": ["to double up"]}
{"mi": "whakapapa", "gr": "verb", "en": ["To lie or lay flat.", "To lay low or to strike down.", "To lay one upon another, to layer.", "To recite in order (genealogies, legends, etc.)"]}
{"mi": "whakapapa", "gr": "noun", "en": ["layering, the act of layering", "Genealogy, genealogical table, descent, lineage."]}
{"mi": "amana", "gr": "noun", "en": ["almond"]}
{"mi": "akaaka", "gr": "noun", "en": ["fibrous vines or roots", "nerve", "state of turmoil"]}
{"mi": "tiara", "gr": "noun", "en": ["vagabond"]}
{"mi": "mangu", "gr": "adj", "en": ["black"]}
{"mi": "parai", "gr": "verb", "en": ["to fry"]}
{"mi": "ruaki", "gr": "verb", "en": ["to vomit"]}
{"mi": "wheke", "gr": "noun", "en": ["octopus, squid"]}
{"mi": "piana", "gr": "noun", "en": ["piano"]}
{"mi": "kawhi", "gr": "noun", "en": ["coffee"]}
{"mi": "kānga", "gr": "noun", "en": ["maize, corn"]}
{"mi": "ponga", "gr": "noun", "en": ["silver fern (Alsophila dealbata)"]}
{"mi": "taika", "gr": "noun", "en": ["tiger (Panthera tigris)"]}
{"mi": "tipua", "gr": "noun", "en": ["demon"]}
{"mi": "ingoa", "gr": "noun", "en": ["name"]}
{"mi": "arata", "gr": "noun", "en": ["lettuce"]}
{"mi": "hoari", "gr": "noun", "en": ["sword"]}
{"mi": "haïra", "gr": "noun", "en": ["scythe"]}
{"mi": "mauka", "gr": "noun", "en": ["mountain"]}
{"mi": "wairua", "gr": "noun", "en": ["a soul or spirit of a person", "attitude, quintessence, mood, essence", "bonfire moss (Funaria hygrometrica)"]}
{"mi": "pango", "gr": "noun", "en": ["black (colour/color)"]}
{"mi": "piopio", "gr": "noun", "en": ["piopio (Turnagra spp.)", "double-banded plover (Charadrius bicinctus)", "New Zealand blueberry (Dianella nigra)"]}
{"mi": "roaka", "gr": "adj", "en": ["abundant"]}
{"mi": "arero", "gr": "noun", "en": ["tongue"]}
{"mi": "huruhuru", "gr": "noun", "en": ["feather", "coarse hair or fur (as opposed to hair on the head, for example: hair on an animal or pubic hair)"]}
{"mi": "pirau", "gr": "adj", "en": ["rotten"]}
{"mi": "kanae", "gr": "noun", "en": ["grey mullet"]}
{"mi": "mātua", "gr": "noun", "en": ["plural of matua"]}
{"mi": "tēina", "gr": "noun", "en": ["plural of teina"]}
{"mi": "onika", "gr": "noun", "en": ["onyx"]}
{"mi": "maika", "gr": "noun", "en": ["banana"]}
{"mi": "tūtae", "gr": "noun", "en": ["excrement, dung, feces"]}
{"mi": "urupū", "gr": "adj", "en": ["diligent"]}
{"mi": "āporo", "gr": "noun", "en": ["apple"]}
{"mi": "ipurangi", "gr": "noun", "en": ["source (of a stream)", "Internet"]}
{"mi": "urupā", "gr": "noun", "en": ["a burial ground or cemetery"]}
{"mi": "anuhe", "gr": "noun", "en": ["caterpillar of the convolvulus hawk-moth (Agrius convolvuli)"]}
{"mi": "īkara", "gr": "noun", "en": ["eagle (bird of prey)"]}
{"mi": "āpiha", "gr": "noun", "en": ["officer, official"]}
{"mi": "whara", "gr": "noun", "en": ["Any of the several plants in the families Asteliaceae and Xanthorrhoeaceae."]}
{"mi": "makere", "gr": "verb", "en": ["to fall, to descend", "to dispose", "to drop out of an event (such as school)"]}
{"mi": "whetū", "gr": "noun", "en": ["star (luminous celestial body)"]}
{"mi": "raino", "gr": "noun", "en": ["rhino"]}
{"mi": "aitua", "gr": "noun", "en": ["accident, bad luck"]}
{"mi": "iuana", "gr": "noun", "en": ["iguana"]}
{"mi": "raupō", "gr": "noun", "en": ["Typha orientalis; bulrush"]}
{"mi": "koāra", "gr": "noun", "en": ["koala"]}
{"mi": "kātoa", "gr": "noun", "en": ["Any of the red variety of Leptospermum scoparium, a shrub or small tree native to New Zealand and southeast Australia."]}
{"mi": "ēkara", "gr": "noun", "en": ["eagle (bird of prey)"]}
{"mi": "kiripaka", "gr": "noun", "en": ["flint, quartz", "asbestos"]}
{"mi": "āpaka", "gr": "noun", "en": ["alpaca"]}
{"mi": "karae", "gr": "noun", "en": ["seabird of unknown species"]}
{"mi": "kawhe", "gr": "noun", "en": ["coffee"]}
{"mi": "ahunga", "gr": "noun", "en": ["bearing, heading", "generation", "heap"]}
{"mi": "anake", "gr": "adj", "en": ["alone, only"]}
{"mi": "aonga", "gr": "noun", "en": ["dawn"]}
{"mi": "aruhe", "gr": "noun", "en": ["fern, root"]}
{"mi": "auheke", "gr": "verb", "en": ["to surrender, to cave", "to surf", "to climb down"]}
{"mi": "autui", "gr": "noun", "en": ["brooch, cloak pin"]}
{"mi": "hākui", "gr": "noun", "en": ["old woman"]}
{"mi": "hapui", "gr": "adj", "en": ["engaged to be married"]}
{"mi": "tōkai", "gr": "verb", "en": ["to copulate"]}
{"mi": "matawā", "gr": "noun", "en": ["clock", "watch", "chronometer"]}
{"mi": "hāngī", "gr": "noun", "en": ["hangi (a traditional Māori pit oven, in which suitably wrapped raw food is lain on a base of heated stones; or, food cooked in this way)"]}
{"mi": "purei", "gr": "noun", "en": ["play (dramatic performance)"]}
{"mi": "ngaru", "gr": "noun", "en": ["wave"]}
{"mi": "kāwhe", "gr": "noun", "en": ["calf, a young cow or bull"]}
{"mi": "āhahā", "gr": "intj", "en": ["damn it, bugger, bloody hell; an expression to express disappointment, surprise or anger"]}
{"mi": "kōhia", "gr": "noun", "en": ["Passiflora tetrandra, a kind of passionfruit endemic to New Zealand."]}
{"mi": "atāta", "gr": "noun", "en": ["video"]}
{"mi": "tapahi", "gr": "verb", "en": ["to cut, to chop", "to reap, to harvest (of crops like wheat)", "to amputate limbs"]}
{"mi": "pīwhi", "gr": "noun", "en": ["beef"]}
{"mi": "koata", "gr": "noun", "en": ["quart (unit of measure)"]}
{"mi": "mangā", "gr": "noun", "en": ["barracouta (Thyrsites atun)"]}
{"mi": "kiokio", "gr": "noun", "en": ["palm-leaf fern (Blechnum novae-zelandiae)", "mountain kiokio (Blechnum procerum)", "crown fern (Blechnum discolor)"]}
{"mi": "ahotea", "gr": "noun", "en": ["heartbreak, heartache", "distress, stress", "celery pine"]}
{"mi": "tārua", "gr": "verb", "en": ["to double something, to copy, to duplicate"]}
{"mi": "tinei", "gr": "verb", "en": ["to extinguish, to put out (of a fire, light)"]}
{"mi": "raihi", "gr": "noun", "en": ["rice"]}
{"mi": "poniu", "gr": "noun", "en": ["yellowcress (Rorippa palustris)"]}
{"mi": "nanua", "gr": "noun", "en": ["red moki (Cheilodactylus spectabilis)"]}
{"mi": "wātea", "gr": "verb", "en": ["to be free, unoccupied, vacant, open, blank, available, clear, unencumbered."]}
{"mi": "unahi", "gr": "noun", "en": ["scale, small fragment covering skin of a fish"]}
{"mi": "inohi", "gr": "noun", "en": ["scale, small fragment covering skin of a fish"]}
{"mi": "tīaho", "gr": "verb", "en": ["to shine, radiate"]}
{"mi": "mataī", "gr": "noun", "en": ["matai, black pine (Prumnopitys taxifolia)"]}
{"mi": "hīnau", "gr": "noun", "en": ["hinau (Elaeocarpus dentatus)"]}
{"mi": "hūngoingoi", "gr": "adj", "en": ["wimpy, cowardly, spineless, faint-hearted, uncourageous", "weak, frail, slow"]}
{"mi": "hūngoingoi", "gr": "verb", "en": ["to tremble"]}
{"mi": "hūngoingoi", "gr": "noun", "en": ["elderly woman"]}
{"mi": "tamahine", "gr": "noun", "en": ["girl, female child", "daughter"]}
{"mi": "tamahine", "gr": "adj", "en": ["girlish"]}
{"mi": "tukituki", "gr": "verb", "en": ["to batter, to pound, to pulverize, to ram", "to demolish, to deconstruct"]}
{"mi": "tukituki", "gr": "noun", "en": ["pestle"]}
{"mi": "purupuru", "gr": "noun", "en": ["caulk"]}
{"mi": "purupuru", "gr": "verb", "en": ["to stuff, to fill in", "to suppress"]}
{"mi": "ake nei", "gr": "particle", "en": ["Indicates an expression is related to a future time."]}
{"mi": "angiangi", "gr": "verb", "en": ["to be thin, fine"]}
{"mi": "angiangi", "gr": "noun", "en": ["gentle breeze", "taupata"]}
{"mi": "hukapapa", "gr": "noun", "en": ["frost", "ice"]}
{"mi": "hukapapa", "gr": "verb", "en": ["to have a frost"]}
{"mi": "makimaki", "gr": "noun", "en": ["monkey", "ape"]}
{"mi": "makimaki", "gr": "verb", "en": ["afflict with an illness"]}
{"mi": "kumukumu", "gr": "verb", "en": ["to be uncertain"]}
{"mi": "kumukumu", "gr": "noun", "en": ["bluefin gurnard (Chelidonichthys kumu)", "lizard"]}
{"mi": "hakahaka", "gr": "adj", "en": ["low", "squat"]}
{"mi": "hakahaka", "gr": "verb", "en": ["rant, rave"]}
{"mi": "hākoakoa", "gr": "noun", "en": ["bliss", "skua"]}
{"mi": "hākoakoa", "gr": "adj", "en": ["happy"]}
{"mi": "mātakitaki", "gr": "verb", "en": ["watch, gaze, inspect, examine, observe"]}
{"mi": "mātakitaki", "gr": "noun", "en": ["inspection, observation, sightseeing"]}
{"mi": "whārangi", "gr": "verb", "en": ["to spread out, spread flat"]}
{"mi": "whārangi", "gr": "noun", "en": ["page, sheet", "rangiona (Brachyglottis repanda)"]}
{"mi": "hangarua", "gr": "verb", "en": ["To recycle"]}
{"mi": "hangarua", "gr": "noun", "en": ["The act of recycling", "Recyclable goods"]}
{"mi": "hutihuti", "gr": "verb", "en": ["to pull out, hoist, haul up, pull up", "to pluck"]}
{"mi": "hutihuti", "gr": "noun", "en": ["a banana-shaped variety of kumara"]}
{"mi": "whanaunga", "gr": "noun", "en": ["familial relative"]}
{"mi": "taimaha", "gr": "adj", "en": ["heavy", "expensive, costly, pricey", "harsh, severe, burdening", "unwell"]}
{"mi": "tikanga", "gr": "noun", "en": ["custom, convention, correct manner of doing things", "traditional lore and protocols", "reason, purpose", "meaning"]}
{"mi": "tuahiwi", "gr": "noun", "en": ["ridge of a hill", "shoal", "skeleton", "stick figure"]}
{"mi": "ataata", "gr": "noun", "en": ["shadow, image", "video"]}
{"mi": "kōwhai", "gr": "noun", "en": ["Any of several small woody legume trees in the genus Sophora native to New Zealand that have yellow flowers. The national flower of New Zealand.", "yellow"]}
{"mi": "mahana", "gr": "adj", "en": ["warm (of temperature)", "cordial (of atmosphere)"]}
{"mi": "whanga", "gr": "noun", "en": ["bay, gulf", "stretch of water"]}
{"mi": "kauwae", "gr": "noun", "en": ["jawbone", "chin"]}
{"mi": "tauhou", "gr": "noun", "en": ["novice, stranger.", "silvereye, wax-eye, Zosterops lateralis."]}
{"mi": "raurau", "gr": "noun", "en": ["foliage", "thatch"]}
{"mi": "manaia", "gr": "noun", "en": ["a manaia (a figure often seen in art, generally depicted as a man with a bird's head)", "a seahorse"]}
{"mi": "taonga", "gr": "noun", "en": ["treasure", "property"]}
{"mi": "mūhore", "gr": "adj", "en": ["futile, pointless", "unproductive"]}
{"mi": "komiti", "gr": "verb", "en": ["to converge (of waters like rivers)", "to join, to merge, to mingle"]}
{"mi": "kahika", "gr": "noun", "en": ["synonym of kahikatea", "Malay apple"]}
{"mi": "pepeha", "gr": "noun", "en": ["an introductory speech detailing one's ancestry", "proverb; motto; slogan"]}
{"mi": "ahoroa", "gr": "noun", "en": ["moon", "bright moonlight"]}
{"mi": "pouako", "gr": "noun", "en": ["teacher", "tutor"]}
{"mi": "kōauau", "gr": "noun", "en": ["cross-blown flute made of wood, bone or a species of kelp", "bull kelp (Durvillaea antarctica)"]}
{"mi": "moeone", "gr": "noun", "en": ["stone bass, wreckfish", "toheroa (an edible mollusc)"]}
{"mi": "manatū", "gr": "noun", "en": ["government", "authority"]}
{"mi": "aroaro", "gr": "noun", "en": ["presence", "front of a person"]}
{"mi": "āwaawa", "gr": "noun", "en": ["valley", "creeks"]}
{"mi": "hāpoki", "gr": "noun", "en": ["den", "pit"]}
{"mi": "pupuru", "gr": "adj", "en": ["pulpy", "almost liquid/solid, curdled"]}
{"mi": "atamai", "gr": "adj", "en": ["nimble", "intelligent, smart, quickwitted, of sharp mind"]}
{"mi": "makawe", "gr": "noun", "en": ["hair", "ringlet; a lock of it"]}
{"mi": "onioni", "gr": "verb", "en": ["to thrust or twerk one's hips in a sexually suggestive way", "to make love, to copulate, to bed someone"]}
{"mi": "hāmama", "gr": "verb", "en": ["to shout, to yell", "to gape, to be open wide"]}
{"mi": "mōrehu", "gr": "noun", "en": ["remnant", "survivor"]}
{"mi": "kōkopu", "gr": "noun", "en": ["cockabully (fish of the genus Gobiomorphus)", "kokopu (fish of the genus Galaxias)"]}
{"mi": "awaawa", "gr": "noun", "en": ["groove", "gully, gorge"]}
{"mi": "pūkoro", "gr": "noun", "en": ["pouch", "pocket"]}
{"mi": "pāhihi", "gr": "noun", "en": ["passage", "passenger"]}
{"mi": "rauemi", "gr": "noun", "en": ["resource", "material"]}
{"mi": "kounga", "gr": "noun", "en": ["quality", "excellence"]}
{"mi": "hēmanawa", "gr": "adj", "en": ["breathless; stressed"]}
{"mi": "hukapuri", "gr": "noun", "en": ["hard frost"]}
{"mi": "hangahanga", "gr": "verb", "en": ["to work on, to fashion"]}
{"mi": "hangahanga", "gr": "adj", "en": ["frivolous, trivial"]}
{"mi": "hangahanga", "gr": "noun", "en": ["practice, habit"]}
{"mi": "kiwikiwi", "gr": "noun", "en": ["grey"]}
{"mi": "kiwikiwi", "gr": "noun", "en": ["Blechnum fluviatile, the star fern or creek fern."]}
{"mi": "rehurehu", "gr": "adj", "en": ["obscure"]}
{"mi": "rehurehu", "gr": "verb", "en": ["to dim, to set"]}
{"mi": "maramara", "gr": "adj", "en": ["miscellaneous"]}
{"mi": "maramara", "gr": "noun", "en": ["piece, bit, portion, chip, splinter."]}
{"mi": "kutikuti", "gr": "noun", "en": ["scissors, shears, clippers"]}
{"mi": "kutikuti", "gr": "verb", "en": ["To cut with scissors etc"]}
{"mi": "kōuraura", "gr": "noun", "en": ["shrimp (decapod crustacean)"]}
{"mi": "kōuraura", "gr": "verb", "en": ["to be golden brown"]}
{"mi": "raumanga", "gr": "noun", "en": ["hound's tongue fern (Microsorum pustulatum)"]}
{"mi": "raumanga", "gr": "noun", "en": ["kitchen bench"]}
{"mi": "tangitangi", "gr": "noun", "en": ["sound", "salute", "wave"]}
{"mi": "tangitangi", "gr": "verb", "en": ["to cry", "to mourn", "to make a sound"]}
{"mi": "apārangi", "gr": "noun", "en": ["group of noble people"]}
{"mi": "hanahana", "gr": "noun", "en": ["garment"]}
{"mi": "hanahana", "gr": "verb", "en": ["shine"]}
{"mi": "harawene", "gr": "noun", "en": ["envy, jealousy"]}
{"mi": "harawene", "gr": "adj", "en": ["envious, jealous"]}
{"mi": "hemorere", "gr": "adj", "en": ["sudden"]}
{"mi": "karikari", "gr": "verb", "en": ["to strip off (of bark etc.)"]}
{"mi": "karikari", "gr": "noun", "en": ["notch"]}
{"mi": "hinahina", "gr": "adj", "en": ["grey-haired"]}
{"mi": "hinahina", "gr": "noun", "en": ["Melicytus ramiflorus."]}
{"mi": "kikokiko", "gr": "noun", "en": ["flesh, meat"]}
{"mi": "kikokiko", "gr": "adj", "en": ["malevolent, malicious"]}
{"mi": "toretore", "gr": "verb", "en": ["to cut or split into strips, to shred"]}
{"mi": "toretore", "gr": "noun", "en": ["sea anemone"]}
{"mi": "tāmahana", "gr": "verb", "en": ["to warm up, to reheat, to recook"]}
{"mi": "tāmahana", "gr": "noun", "en": ["bubble and squeak"]}
{"mi": "whakatārewa", "gr": "verb", "en": ["to suspend, to dangle", "to defer, to postpone, to adjourn"]}
{"mi": "whakatārewa", "gr": "verb", "en": ["hanging, suspension"]}
{"mi": "harehare", "gr": "adj", "en": ["offensive, rude, affronting, objectionable"]}
{"mi": "harehare", "gr": "noun", "en": ["skin rash, sore, eczema, skin ailment, skin disorder"]}
{"mi": "whakaira", "gr": "verb", "en": ["glisten, glitter"]}
{"mi": "whakaira", "gr": "verb", "en": ["conceive, become pregnant"]}
{"mi": "takitoru", "gr": "noun", "en": ["group of three, trio, threesome"]}
{"mi": "takitoru", "gr": "verb", "en": ["to triple"]}
{"mi": "hauwai", "gr": "noun", "en": ["hydrogen"]}
{"mi": "angina", "gr": "noun", "en": ["death"]}
{"mi": "morehu", "gr": "noun", "en": ["Followers of the Ratana Church, remnants of tribes, survivors."]}
{"mi": "putoko", "gr": "noun", "en": ["slug"]}
{"mi": "pātata", "gr": "adj", "en": ["neighbouring"]}
{"mi": "tohutō", "gr": "noun", "en": ["macron"]}
{"mi": "tōmato", "gr": "noun", "en": ["tomato"]}
{"mi": "tātahi", "gr": "noun", "en": ["beach"]}
{"mi": "panata", "gr": "noun", "en": ["panther"]}
{"mi": "tinana", "gr": "noun", "en": ["body"]}
{"mi": "pereti", "gr": "noun", "en": ["plate, platter"]}
{"mi": "taitoa", "gr": "adj", "en": ["manly"]}
{"mi": "takahē", "gr": "noun", "en": ["takahē, species of large flightless bird in the Rallidae family, endemic to New Zealand."]}
{"mi": "kokoru", "gr": "noun", "en": ["bay (gulf)"]}
{"mi": "hōtēra", "gr": "noun", "en": ["hotel"]}
{"mi": "aponga", "gr": "noun", "en": ["stack, pile"]}
{"mi": "pūkeko", "gr": "noun", "en": ["pūkeko (Porphyrio melanotus)"]}
{"mi": "taihoa", "gr": "intj", "en": ["wait, don't (do something) yet"]}
{"mi": "hahake", "gr": "adj", "en": ["naked, unbecoming"]}
{"mi": "tuitui", "gr": "verb", "en": ["to sew"]}
{"mi": "kākāpō", "gr": "noun", "en": ["kakapo (Strigops habroptilus)"]}
{"mi": "mākona", "gr": "adj", "en": ["satisfied, content"]}
{"mi": "pārara", "gr": "verb", "en": ["to bask under the sun, to sunbathe"]}
{"mi": "rāpeti", "gr": "noun", "en": ["rabbit"]}
{"mi": "nūpepa", "gr": "noun", "en": ["newspaper"]}
{"mi": "karani", "gr": "noun", "en": ["currant (small raisin)"]}
{"mi": "kiekie", "gr": "noun", "en": ["A vine used by the Maori for food and as material for mats, Freycinetia banksii"]}
{"mi": "panana", "gr": "noun", "en": ["banana"]}
{"mi": "aurere", "gr": "verb", "en": ["moan, groan"]}
{"mi": "pīkake", "gr": "noun", "en": ["peacock"]}
{"mi": "motokā", "gr": "noun", "en": ["car, automobile"]}
{"mi": "tēneti", "gr": "noun", "en": ["tent"]}
{"mi": "taiaha", "gr": "noun", "en": ["taiaha"]}
{"mi": "hārewa", "gr": "verb", "en": ["to take off (of an aircraft)"]}
{"mi": "tuanui", "gr": "noun", "en": ["roof"]}
{"mi": "peopeo", "gr": "adj", "en": ["slippery"]}
{"mi": "papahū", "gr": "verb", "en": ["to ignite, flare up, burst into flame"]}
{"mi": "hūtuki", "gr": "verb", "en": ["to bump"]}
{"mi": "tūhura", "gr": "verb", "en": ["investigate, disclose, discover"]}
{"mi": "hānara", "gr": "noun", "en": ["handlebar"]}
{"mi": "pākaha", "gr": "adj", "en": ["strict, severe"]}
{"mi": "otinga", "gr": "noun", "en": ["result, product, quotient"]}
{"mi": "pūmārō", "gr": "noun", "en": ["hardware"]}
{"mi": "pūnaha", "gr": "noun", "en": ["system"]}
{"mi": "kapuni", "gr": "noun", "en": ["natural gas"]}
{"mi": "hauora", "gr": "noun", "en": ["health"]}
{"mi": "mānuka", "gr": "noun", "en": ["Leptospermum scoparium, a shrub or small tree native to New Zealand and southeast Australia."]}
{"mi": "kakape", "gr": "noun", "en": ["chopsticks"]}
{"mi": "miraka", "gr": "noun", "en": ["milk"]}
{"mi": "takoha", "gr": "noun", "en": ["pledge"]}
{"mi": "mōrena", "gr": "intj", "en": ["good morning"]}
{"mi": "pōkiha", "gr": "noun", "en": ["fox (animal in genus Vulpes)"]}
{"mi": "wuruhi", "gr": "noun", "en": ["wolf (Canis lupus)"]}
{"mi": "rēparo", "gr": "noun", "en": ["leopard (Panthera pardus)"]}
{"mi": "rēpara", "gr": "noun", "en": ["leopard (Panthera pardus)"]}
{"mi": "warapī", "gr": "noun", "en": ["wallaby"]}
{"mi": "tūpara", "gr": "noun", "en": ["double-barrelled shotgun"]}
{"mi": "hiriwa", "gr": "noun", "en": ["silver"]}
{"mi": "raiona", "gr": "noun", "en": ["lion (big cat)"]}
{"mi": "kūmara", "gr": "noun", "en": ["A sweet potato"]}
{"mi": "roanga", "gr": "noun", "en": ["continuation"]}
{"mi": "kohuke", "gr": "noun", "en": ["mineral"]}
{"mi": "hinehī", "gr": "noun", "en": ["Someone assigned male at birth who has a female gender identity"]}
{"mi": "atanga", "gr": "noun", "en": ["interface"]}
{"mi": "pāreti", "gr": "noun", "en": ["porridge"]}
{"mi": "koekoe", "gr": "verb", "en": ["to squeak, scream, squawk or cry"]}
{"mi": "māhina", "gr": "noun", "en": ["moon"]}
{"mi": "karoro", "gr": "noun", "en": ["black-backed gull (Larus dominicanus)"]}
{"mi": "makura", "gr": "noun", "en": ["any member of the species Carex secta of sedges endemic to New Zealand"]}
{"mi": "pīhopa", "gr": "noun", "en": ["bishop"]}
{"mi": "tūāuri", "gr": "noun", "en": ["indigo"]}
{"mi": "kaihao", "gr": "noun", "en": ["fisher, fisherman (using a net)"]}
{"mi": "kererū", "gr": "noun", "en": ["The New Zealand pigeon (species Hemiphaga novaeseelandiae)."]}
{"mi": "tāmure", "gr": "noun", "en": ["Australasian snapper, New Zealand snapper, silver seabream (Pagrus auratus, syn. Chrysophrys auratus), a silvery pinkish to golden fish with numerous bright blue spots over upper sides."]}
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
{"mi": "hahana", "gr": "verb", "en": ["glow, gleam, radiate"]}
{"mi": "hahani", "gr": "verb", "en": ["disparage"]}
{"mi": "hāhore", "gr": "adj", "en": ["bare, simple"]}
{"mi": "hakiri", "gr": "verb", "en": ["hear"]}
{"mi": "hakoko", "gr": "adj", "en": ["bent, concave"]}
{"mi": "hākoro", "gr": "noun", "en": ["old man"]}
{"mi": "hāmanu", "gr": "noun", "en": ["ammunition"]}
{"mi": "hamumu", "gr": "verb", "en": ["speak softly"]}
{"mi": "hanake", "gr": "verb", "en": ["grow"]}
{"mi": "hanatu", "gr": "verb", "en": ["go forwards, go away"]}
{"mi": "hanumi", "gr": "verb", "en": ["merge; be swallowed up"]}
{"mi": "hāpoko", "gr": "adj", "en": ["swampy, boggy"]}
{"mi": "hārapa", "gr": "verb", "en": ["lead the way"]}
{"mi": "harirū", "gr": "verb", "en": ["shake hands"]}
{"mi": "harore", "gr": "noun", "en": ["fungus, mushrooms"]}
{"mi": "hāroto", "gr": "noun", "en": ["pool, pond"]}
{"mi": "haruru", "gr": "noun", "en": ["rumble, roar"]}
{"mi": "haukai", "gr": "noun", "en": ["feast"]}
{"mi": "hāwini", "gr": "noun", "en": ["servant"]}
{"mi": "heahea", "gr": "adj", "en": ["crazy, stupid, inane"]}
{"mi": "hēkena", "gr": "noun", "en": ["second"]}
{"mi": "kūkupa", "gr": "noun", "en": ["A pigeon."]}
{"mi": "piapia", "gr": "adj", "en": ["viscid; glairy"]}
{"mi": "moenga", "gr": "noun", "en": ["a bed"]}
{"mi": "ruruku", "gr": "verb", "en": ["to wrap"]}
{"mi": "pūkāea", "gr": "noun", "en": ["a kind of long wooden trumpet, traditionally used to relay signals during times of conflict and other important occasions"]}
{"mi": "apiapi", "gr": "adj", "en": ["crowded together"]}
{"mi": "huahae", "gr": "noun", "en": ["catkin"]}
{"mi": "rāpere", "gr": "noun", "en": ["raspberry"]}
{"mi": "tioata", "gr": "noun", "en": ["crystal"]}
{"mi": "hōkete", "gr": "noun", "en": ["hogget"]}
{"mi": "kareni", "gr": "noun", "en": ["crane, a bird of the family Gruidae"]}
{"mi": "rātaka", "gr": "noun", "en": ["diary"]}
{"mi": "hūware", "gr": "noun", "en": ["spit, saliva"]}
{"mi": "aneane", "gr": "verb", "en": ["to be sharp"]}
{"mi": "kauhoe", "gr": "verb", "en": ["to swim"]}
{"mi": "kumete", "gr": "noun", "en": ["bowl"]}
{"mi": "hītori", "gr": "noun", "en": ["history"]}
{"mi": "kākano", "gr": "noun", "en": ["pip, kernel, flesh (of a coconut)"]}
{"mi": "amiami", "gr": "noun", "en": ["spice, herb"]}
{"mi": "kīnaki", "gr": "noun", "en": ["sauce, condiment, relish"]}
{"mi": "maihao", "gr": "noun", "en": ["finger"]}
{"mi": "konatu", "gr": "verb", "en": ["to stir, to mix, to blend"]}
{"mi": "hapopo", "gr": "noun", "en": ["a kind of pounamu"]}
{"mi": "kāriki", "gr": "noun", "en": ["green"]}
{"mi": "tāturi", "gr": "noun", "en": ["earwax"]}
{"mi": "reanga", "gr": "noun", "en": ["generation, the members of a family from the same parents"]}
{"mi": "kārapu", "gr": "noun", "en": ["northeast (compass point)"]}
{"mi": "kuriri", "gr": "noun", "en": ["Pacific golden plover"]}
{"mi": "hāmana", "gr": "noun", "en": ["salmon"]}
{"mi": "tākihi", "gr": "noun", "en": ["kidney"]}
{"mi": "kārani", "gr": "noun", "en": ["gallon"]}
{"mi": "ākonga", "gr": "noun", "en": ["learner, pupil"]}
{"mi": "kirīmi", "gr": "noun", "en": ["cream"]}
{"mi": "rearea", "gr": "noun", "en": ["New Zealand bellbird"]}
{"mi": "hāmeme", "gr": "verb", "en": ["to mutter, to grumble"]}
{"mi": "kūmera", "gr": "noun", "en": ["sweet potato"]}
{"mi": "kōhūhū", "gr": "noun", "en": ["kohuhu (Pittosporum tenuifolium)"]}
{"mi": "waitai", "gr": "noun", "en": ["seawater"]}
{"mi": "matuku", "gr": "noun", "en": ["bittern"]}
{"mi": "pākati", "gr": "verb", "en": ["to block, obstruct"]}
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
{"mi": "tuawhā", "gr": "num", "en": ["fourth"]}
{"mi": "tuaono", "gr": "num", "en": ["sixth"]}
{"mi": "tuaiwa", "gr": "num", "en": ["ninth"]}
{"mi": "kōkako", "gr": "noun", "en": ["kokako; (Callaeas cinerea)"]}
{"mi": "toiere", "gr": "verb", "en": ["to sing"]}
{"mi": "kuku", "gr": "noun", "en": ["pincers, tweezers, any tool or item that nips or pinches", "finger or toe nail, alternative form of matikuku", "attraction"]}
{"mi": "kuku", "gr": "verb", "en": ["to grate, to scrape – usually part of compound verbs, otherwise an alternative form of kukū"]}
{"mi": "pāhekeheke", "gr": "verb", "en": ["slippery", "unstable, uncertain", "striped"]}
{"mi": "pāhekeheke", "gr": "noun", "en": ["slip", "slipperiness"]}
{"mi": "kaitangata", "gr": "noun", "en": ["cannibal", "cannibalism", "cat's eye snail (Lunella smaragda)"]}
{"mi": "kaitangata", "gr": "adj", "en": ["cannibalistic", "man-eating"]}
{"mi": "kahurangi", "gr": "adj", "en": ["blue", "precious"]}
{"mi": "kahurangi", "gr": "noun", "en": ["dark blue"]}
{"mi": "tangiweto", "gr": "noun", "en": ["crybaby"]}
{"mi": "tangiweto", "gr": "verb", "en": ["to fret", "to cry"]}
{"mi": "whakararo", "gr": "adj", "en": ["bottom; lower", "northern, northerly"]}
{"mi": "ngārara", "gr": "noun", "en": ["creepy-crawly (insect, reptile, etc.)", "bug, germ"]}
{"mi": "taringa", "gr": "noun", "en": ["ear", "several types of jelly fungi"]}
{"mi": "tokerau", "gr": "noun", "en": ["north", "autumn"]}
{"mi": "tohunga", "gr": "noun", "en": ["A skilled person, an expert", "A priest, a healer"]}
{"mi": "pukatea", "gr": "noun", "en": ["Laurelia novae-zelandiae,a tree ideal for canoe wood", "Pisonia grandis"]}
{"mi": "matangi", "gr": "noun", "en": ["wind", "breeze"]}
{"mi": "hereumu", "gr": "noun", "en": ["an outdoor building, shed, etc set for cooking", "bakery"]}
{"mi": "kōhanga", "gr": "noun", "en": ["nest, nursery", "birthplace, cradle, homeland, stronghold, bastion"]}
{"mi": "taikaha", "gr": "adj", "en": ["strict, severe", "violent"]}
{"mi": "hauāuru", "gr": "noun", "en": ["west", "west wind"]}
{"mi": "haukoti", "gr": "verb", "en": ["intercept", "abort"]}
{"mi": "emepaea", "gr": "noun", "en": ["empire (political unit, having numerous or extensive territories)", "empire (political unit ruled by an emperor)"]}
{"mi": "huringa", "gr": "noun", "en": ["rotation, revolution", "conversion, transformation"]}
{"mi": "tāranga", "gr": "noun", "en": ["long-leafed pimelea (Pimelea longifolia)", "a plant of species Veronica stenophylla"]}
{"mi": "ratonga", "gr": "noun", "en": ["waiting or attending of tables to send customers their food", "continuous provision of utility through an infrastructure network"]}
{"mi": "piringa", "gr": "noun", "en": ["refuge, haven, hiding place", "association, relationship"]}
{"mi": "mōwhiti", "gr": "noun", "en": ["ring, hoop", "eyeglasses, glasses, spectacles"]}
{"mi": "whāriki", "gr": "noun", "en": ["mat", "carpet"]}
{"mi": "ruānuku", "gr": "noun", "en": ["sage, wise man", "wizard, warlock"]}
{"mi": "maikuku", "gr": "noun", "en": ["fingernail, toenail", "claw, hoof"]}
{"mi": "whakapako", "gr": "verb", "en": ["to banish, to exile"]}
{"mi": "rererangi", "gr": "noun", "en": ["airplane, aeroplane, aircraft"]}
{"mi": "whakarākei", "gr": "verb", "en": ["garnish, embellish", "decorate, adorn"]}
{"mi": "whakarākei", "gr": "noun", "en": ["decoration, adornment", "set"]}
{"mi": "ahuwhenua", "gr": "adj", "en": ["industrious, hard-working"]}
{"mi": "ahuwhenua", "gr": "noun", "en": ["agriculture"]}
{"mi": "parakuihi", "gr": "noun", "en": ["breakfast"]}
{"mi": "parakuihi", "gr": "verb", "en": ["to have breakfast"]}
{"mi": "whakaauau", "gr": "verb", "en": ["to smoke"]}
{"mi": "whakaauau", "gr": "verb", "en": ["to modulate"]}
{"mi": "hekerangi", "gr": "verb", "en": ["to parachute"]}
{"mi": "hekerangi", "gr": "noun", "en": ["parachute"]}
{"mi": "tewhatewha", "gr": "noun", "en": ["An axe-like bone or wooden weapon.", "vagina"]}
{"mi": "kīngitanga", "gr": "noun", "en": ["kingdom, dominion", "sovereignty"]}
{"mi": "tāngata", "gr": "noun", "en": ["plural of tangata; people; humankind"]}
{"mi": "tuatara", "gr": "noun", "en": ["tuatara"]}
{"mi": "tāriana", "gr": "noun", "en": ["stallion"]}
{"mi": "moepapa", "gr": "noun", "en": ["nightmare"]}
{"mi": "moenanu", "gr": "noun", "en": ["nightmare"]}
{"mi": "waikato", "gr": "noun", "en": ["flowing water"]}
{"mi": "akepiro", "gr": "noun", "en": ["A small tree of New Zealand (Olearia furfuracea)."]}
{"mi": "toheroa", "gr": "noun", "en": ["toheroa (edible bivalve)"]}
{"mi": "waipiro", "gr": "noun", "en": ["alcohol, liquor"]}
{"mi": "kautona", "gr": "noun", "en": ["wart"]}
{"mi": "tuāhine", "gr": "noun", "en": ["plural of tuahine"]}
{"mi": "tuākana", "gr": "noun", "en": ["plural of tuakana"]}
{"mi": "moeriki", "gr": "noun", "en": ["Dieffenbach's rail (†Gallirallus dieffenbachii)"]}
{"mi": "kahawai", "gr": "noun", "en": ["kahawai (edible ocean fish)"]}
{"mi": "kangarū", "gr": "noun", "en": ["kangaroo"]}
{"mi": "huarere", "gr": "noun", "en": ["weather"]}
{"mi": "wāhanga", "gr": "noun", "en": ["piece"]}
{"mi": "tōāpapa", "gr": "noun", "en": ["gravity"]}
{"mi": "rironga", "gr": "noun", "en": ["asset, receipt, acquisition"]}
{"mi": "amokura", "gr": "noun", "en": ["red-tailed tropicbird"]}
{"mi": "kihirua", "gr": "verb", "en": ["to change one's mind"]}
{"mi": "pūtaiao", "gr": "noun", "en": ["science"]}
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
{"mi": "piriona", "gr": "num", "en": ["billion"]}
{"mi": "pakiaka", "gr": "noun", "en": ["root (of a tree)"]}
{"mi": "taraute", "gr": "noun", "en": ["trout"]}
{"mi": "āheahea", "gr": "noun", "en": ["rainbow"]}
{"mi": "whatura", "gr": "noun", "en": ["vulture"]}
{"mi": "pounemu", "gr": "noun", "en": ["greenstone, nephrite"]}
{"mi": "ngutoro", "gr": "noun", "en": ["stone bass, wreckfish"]}
{"mi": "takiuru", "gr": "verb", "en": ["to log in"]}
{"mi": "kotiate", "gr": "noun", "en": ["short weapon of wood or bone with a notch on both edges of the flat blade"]}
{"mi": "aitanga", "gr": "noun", "en": ["progeny, descendants"]}
{"mi": "amapaea", "gr": "noun", "en": ["umpire"]}
{"mi": "anahere", "gr": "noun", "en": ["angel, archangel"]}
{"mi": "anganui", "gr": "verb", "en": ["to face towards"]}
{"mi": "aniroro", "gr": "adj", "en": ["giddy, dizzy"]}
{"mi": "apakura", "gr": "noun", "en": ["lament, dirge"]}
{"mi": "araheke", "gr": "noun", "en": ["stairs"]}
{"mi": "arapiki", "gr": "noun", "en": ["stairs"]}
{"mi": "areinga", "gr": "noun", "en": ["black field cricket"]}
{"mi": "atamira", "gr": "noun", "en": ["stage, platform, dais"]}
{"mi": "awakeri", "gr": "noun", "en": ["drain, ditch"]}
{"mi": "hahunga", "gr": "noun", "en": ["disinterment, exhumation"]}
{"mi": "haihana", "gr": "noun", "en": ["sergeant"]}
{"mi": "hapanga", "gr": "noun", "en": ["default"]}
{"mi": "haratau", "gr": "adj", "en": ["suitable, fit"]}
{"mi": "hauangi", "gr": "adj", "en": ["cool, airy"]}
{"mi": "hauarea", "gr": "adj", "en": ["insignificant"]}
{"mi": "haurahi", "gr": "noun", "en": ["dew"]}
{"mi": "haututū", "gr": "adj", "en": ["insubordinate; naughty, noncompliant"]}
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
{"mi": "tuarima", "gr": "num", "en": ["fifth"]}
{"mi": "tuawaru", "gr": "num", "en": ["eighth"]}
{"mi": "waihāro", "gr": "noun", "en": ["soup"]}
{"mi": "kumekume", "gr": "verb", "en": ["to pull and push repeatedly (of an accordion etc)", "to draw into", "to attract"]}
{"mi": "papamahi", "gr": "noun", "en": ["desk", "studio", "desktop"]}
{"mi": "amorangi", "gr": "noun", "en": ["priest", "leader", "emblem"]}
{"mi": "angaanga", "gr": "noun", "en": ["shell", "skull", "head"]}
{"mi": "arawhata", "gr": "noun", "en": ["stairs", "ladder", "bridge"]}
{"mi": "ngāwhāriki", "gr": "noun", "en": ["hot spring", "sulfur; sulfur-rich volcanic rock"]}
{"mi": "ngāwhāriki", "gr": "adj", "en": ["geothermal"]}
{"mi": "hākinakina", "gr": "verb", "en": ["to play sport", "to enjoy oneself"]}
{"mi": "hākinakina", "gr": "noun", "en": ["sport, game"]}
{"mi": "māharahara", "gr": "verb", "en": ["to think about frequently", "to be preoccupied, to worry"]}
{"mi": "māharahara", "gr": "noun", "en": ["anxiety, worry"]}
{"mi": "whakataukī", "gr": "verb", "en": ["to say a proverb"]}
{"mi": "whakataukī", "gr": "noun", "en": ["proverb", "aphorism"]}
{"mi": "ia marama", "gr": "adv", "en": ["As frequently as every month; monthly."]}
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
{"mi": "wharekai", "gr": "noun", "en": ["any eating establishment e.g. restaurants, canteens etc.", "The dining hall in a marae."]}
{"mi": "kumikumi", "gr": "noun", "en": ["beard, moustache, whiskers", "bristles"]}
{"mi": "meremere", "gr": "noun", "en": ["a short weapon typically made out of stone or greenstone", "scapular feather"]}
{"mi": "nihoniho", "gr": "adj", "en": ["toothed, serrated", "quarrelsome, cantankerous"]}
{"mi": "whakananu", "gr": "verb", "en": ["to contaminate", "to confuse, to make something incoherent or unintelligible", "to jumble", "to mix"]}
{"mi": "tukemata", "gr": "noun", "en": ["eyebrow", "scowl"]}
{"mi": "toropapa", "gr": "noun", "en": ["karapapa (Alseuosmia macrophylla)", "oak-leaved toropapa (Alseuosmia quercifolia)"]}
{"mi": "rakiraki", "gr": "noun", "en": ["duck, especially an introduced species", "mallard (Anas platyrhynchos)"]}
{"mi": "mōiriiri", "gr": "verb", "en": ["to be widespread", "to be notorious, infamous"]}
{"mi": "whakakai", "gr": "noun", "en": ["cylindrical greenstone earring", "teething ring for babies"]}
{"mi": "whiriwhiri", "gr": "verb", "en": ["to negotiate"]}
{"mi": "whiriwhiri", "gr": "verb", "en": ["to weave, to plait"]}
{"mi": "pōhutukawa", "gr": "noun", "en": ["Metrosideros excelsa"]}
{"mi": "pungapunga", "gr": "noun", "en": ["pumice"]}
{"mi": "pungapunga", "gr": "noun", "en": ["ankle"]}
{"mi": "pongipongi", "gr": "adj", "en": ["dim, of low light"]}
{"mi": "pongipongi", "gr": "noun", "en": ["dawn"]}
{"mi": "kangakanga", "gr": "verb", "en": ["to curse, to swear"]}
{"mi": "kangakanga", "gr": "noun", "en": ["swearing, profanity"]}
{"mi": "tāuwhiuwhi", "gr": "verb", "en": ["to sprinkle, to shower"]}
{"mi": "tāuwhiuwhi", "gr": "noun", "en": ["shower (a shower bath)"]}
{"mi": "kōwhiringa", "gr": "noun", "en": ["selection", "menu", "option", "opportunity", "combination"]}
{"mi": "kakakaka", "gr": "verb", "en": ["to stutter, stammer"]}
{"mi": "rorohiko", "gr": "noun", "en": ["computer"]}
{"mi": "tarakihi", "gr": "noun", "en": ["A grey and black saltwater fish, Nemadactylus macropterus, found off the coast of Australia, New Zealand and South America."]}
{"mi": "kirikiti", "gr": "noun", "en": ["cricket"]}
{"mi": "manuhiri", "gr": "noun", "en": ["guest, visitor"]}
{"mi": "kohekohe", "gr": "noun", "en": ["Dysoxylum spectabile, a medium-sized tree native to New Zealand, related to mahogany."]}
{"mi": "koromiko", "gr": "noun", "en": ["koromiko shrub"]}
{"mi": "wharenui", "gr": "noun", "en": ["wharenui"]}
{"mi": "harakeke", "gr": "noun", "en": ["New Zealand flax (Phormium tenax)"]}
{"mi": "wakuwaku", "gr": "verb", "en": ["to scrape"]}
{"mi": "hāmonika", "gr": "noun", "en": ["harmonica (wind instrument)"]}
{"mi": "humuhumu", "gr": "verb", "en": ["to be amputated; to be ripped apart"]}
{"mi": "merekara", "gr": "noun", "en": ["miracle"]}
{"mi": "kiritona", "gr": "noun", "en": ["pimple, wart"]}
{"mi": "kawakawa", "gr": "noun", "en": ["kawakawa (Piper excelsum), a shrub endemic to New Zealand."]}
{"mi": "wharangi", "gr": "noun", "en": ["Melicope ternata"]}
{"mi": "mokopuna", "gr": "noun", "en": ["grandchild"]}
{"mi": "rewarewa", "gr": "noun", "en": ["rewarewa (Knightia excelsa)"]}
{"mi": "mōrearea", "gr": "adj", "en": ["dangerous"]}
{"mi": "whakanau", "gr": "verb", "en": ["to decline, refuse"]}
{"mi": "tūmanako", "gr": "verb", "en": ["to expect, to hope"]}
{"mi": "tohumate", "gr": "noun", "en": ["symptom"]}
{"mi": "matimati", "gr": "noun", "en": ["finger, toe"]}
{"mi": "pāngarau", "gr": "noun", "en": ["mathematics"]}
{"mi": "terepōno", "gr": "noun", "en": ["telephone"]}
{"mi": "mātātoka", "gr": "noun", "en": ["fossil"]}
{"mi": "tikinare", "gr": "noun", "en": ["dictionary"]}
{"mi": "pākaukau", "gr": "noun", "en": ["wing"]}
{"mi": "nanenane", "gr": "noun", "en": ["goat"]}
{"mi": "wahawaha", "gr": "verb", "en": ["to carry on one's back"]}
{"mi": "arewhana", "gr": "noun", "en": ["elephant"]}
{"mi": "temepara", "gr": "noun", "en": ["temple"]}
{"mi": "tauwhere", "gr": "verb", "en": ["to bind"]}
{"mi": "takitaki", "gr": "noun", "en": ["fence, palisade, barricade, stockade"]}
{"mi": "pūtāhono", "gr": "noun", "en": ["driver (program acting as interface between an application and hardware)"]}
{"mi": "poroporo", "gr": "noun", "en": ["The plant Solanum aviculare."]}
{"mi": "huripari", "gr": "noun", "en": ["hurricane"]}
{"mi": "penapena", "gr": "verb", "en": ["to save up (accumulate money for a specific purpose)"]}
{"mi": "pirikoko", "gr": "noun", "en": ["mystery"]}
{"mi": "motomoto", "gr": "noun", "en": ["boxing, combat sport involving punching"]}
{"mi": "takakaha", "gr": "noun", "en": ["tibia, shinbone"]}
{"mi": "putiputi", "gr": "noun", "en": ["Handwoven craft flower typically made of harakeke"]}
{"mi": "ngaupuku", "gr": "noun", "en": ["stomachache"]}
{"mi": "pakakina", "gr": "adj", "en": ["glowing"]}
{"mi": "kotoreke", "gr": "noun", "en": ["marsh crake (Porzana pusilla affinis)"]}
{"mi": "tahepuia", "gr": "noun", "en": ["lava"]}
{"mi": "tarākona", "gr": "noun", "en": ["dragon"]}
{"mi": "riroriro", "gr": "noun", "en": ["A grey warbler, of the species Gerygone igata."]}
{"mi": "kārearea", "gr": "noun", "en": ["Falco novaeseelandiae, the only falcon endemic to New Zealand."]}
{"mi": "tapatoru", "gr": "noun", "en": ["triangle"]}
{"mi": "akoranga", "gr": "noun", "en": ["learning, lesson"]}
{"mi": "haereere", "gr": "verb", "en": ["stroll about"]}
{"mi": "hakihaki", "gr": "noun", "en": ["scabies, itch, rash"]}
{"mi": "hakikoko", "gr": "noun", "en": ["shoulderblade"]}
{"mi": "hakuturi", "gr": "noun", "en": ["birds"]}
{"mi": "hamarara", "gr": "noun", "en": ["umbrella"]}
{"mi": "hanehane", "gr": "noun", "en": ["decay, rot"]}
{"mi": "hanganoa", "gr": "adj", "en": ["insignificant, inconsequential"]}
{"mi": "harapaki", "gr": "noun", "en": ["hillside, slopes"]}
{"mi": "harapuku", "gr": "adj", "en": ["puzzled"]}
{"mi": "hātakēhi", "gr": "adj", "en": ["comical"]}
{"mi": "hauhanga", "gr": "noun", "en": ["frost"]}
{"mi": "haurangi", "gr": "adj", "en": ["drunk"]}
{"mi": "tekoteko", "gr": "noun", "en": ["Carved figure as a finial on the gable of a house"]}
{"mi": "pukuhiko", "gr": "noun", "en": ["electrical generator"]}
{"mi": "kaiwawao", "gr": "noun", "en": ["referee, umpire"]}
{"mi": "piritoka", "gr": "noun", "en": ["limpet"]}
{"mi": "pahirini", "gr": "noun", "en": ["chaffinch"]}
{"mi": "rāhipere", "gr": "noun", "en": ["raspberry"]}
{"mi": "hinganga", "gr": "noun", "en": ["fall, defeat, demise"]}
{"mi": "pirikahu", "gr": "noun", "en": ["sheep"]}
{"mi": "wakarere", "gr": "noun", "en": ["aeroplane, airplane"]}
{"mi": "muhumuhu", "gr": "adj", "en": ["discontented (experiencing discontent, dissatisfaction)"]}
{"mi": "rongonga", "gr": "noun", "en": ["hearing (sense)"]}
{"mi": "kihukihu", "gr": "noun", "en": ["fringes, thrums, tassels"]}
{"mi": "nekeneke", "gr": "verb", "en": ["to move gradually, to edge, to manoeuvre"]}
{"mi": "rorouira", "gr": "noun", "en": ["computer"]}
{"mi": "potapota", "gr": "adj", "en": ["broken, fragmented"]}
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
{"mi": "tamātane", "gr": "noun", "en": ["plural of tamatane"]}
{"mi": "pitokite", "gr": "noun", "en": ["skinflint, miser, niggard"]}
{"mi": "tenetene", "gr": "noun", "en": ["vagina"]}
{"mi": "taparima", "gr": "noun", "en": ["pentagon"]}
{"mi": "tapawaru", "gr": "noun", "en": ["octagon"]}
{"mi": "tuawhitu", "gr": "num", "en": ["seventh"]}
{"mi": "rangatahi", "gr": "noun", "en": ["youth", "younger generation", "fishing net about 20 meters long that is smaller than a kaharoa"]}
{"mi": "whakarato", "gr": "noun", "en": ["to distribute, to allocate", "to serve (of food), to wait", "to provide"]}
{"mi": "whakatote", "gr": "verb", "en": ["to salt", "to cure (preserve food by salting)", "to brine"]}
{"mi": "āwangawanga", "gr": "verb", "en": ["to be distressed, to worry"]}
{"mi": "āwangawanga", "gr": "noun", "en": ["distress, worry", "doubt"]}
{"mi": "whakamahara", "gr": "verb", "en": ["to remind", "to commemorate"]}
{"mi": "whakamahara", "gr": "noun", "en": ["reminder, memento"]}
{"mi": "mātauranga", "gr": "noun", "en": ["knowledge, wisdom", "study of", "education", "sage, scholar"]}
{"mi": "rangitoto", "gr": "noun", "en": ["lava", "volcano"]}
{"mi": "whakahohe", "gr": "verb", "en": ["to activate (to make something active)", "to enable (to activate a function of an electronic or mechanical device)"]}
{"mi": "whakaraka", "gr": "verb", "en": ["to walk", "to step out"]}
{"mi": "takatāpui", "gr": "noun", "en": ["close friend of the same gender", "gay person. Usually used in the context of LGBT Māori people"]}
{"mi": "kikorangi", "gr": "noun", "en": ["light blue", "sky blue"]}
{"mi": "pōkokohua", "gr": "noun", "en": ["boiled head", "bugger, bastard, a highly offensive insult for an unpleasant person"]}
{"mi": "tarāpunga", "gr": "noun", "en": ["red-billed gull (Chroicocephalus novaehollandiae scopulinus)", "black-billed gull"]}
{"mi": "haukāinga", "gr": "noun", "en": ["true home", "homepage"]}
{"mi": "koromatua", "gr": "noun", "en": ["chief, mayor", "thumb"]}
{"mi": "namunamuā", "gr": "noun", "en": ["flavour", "spice"]}
{"mi": "whakauwhi", "gr": "verb", "en": ["to cover", "to host, to entertain"]}
{"mi": "whakawahi", "gr": "verb", "en": ["to anoint, crown", "to ordain"]}
{"mi": "whakaririka", "gr": "adj", "en": ["impassive"]}
{"mi": "whakaririka", "gr": "verb", "en": ["to ignore"]}
{"mi": "whakawahine", "gr": "noun", "en": ["a person assigned male at birth who lives and behaves as a female socially; literally \\"to become a woman\\""]}
{"mi": "whakawahine", "gr": "verb", "en": ["to become a woman"]}
{"mi": "whakangākau", "gr": "verb", "en": ["to show affection for, to take to heart"]}
{"mi": "whakangākau", "gr": "noun", "en": ["affection, devotion"]}
{"mi": "rangimaarie", "gr": "adj", "en": ["peaceful, quiet, tranquil"]}
{"mi": "rangimaarie", "gr": "noun", "en": ["peace, quietness"]}
{"mi": "kō", "gr": "verb", "en": ["to dig dirt esp. with the digging stick", "to stab, to thrust, alternative form of kōkō", "(of the lips) to pout out of displeasure"]}
{"mi": "maramataka", "gr": "noun", "en": ["the traditional Maori lunar calendar", "calendar", "almanac"]}
{"mi": "kōnatunatu", "gr": "verb", "en": ["to stir up, to agitate, to disturb", "to unsettle, to unnerve", "to disconcert"]}
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
{"mi": "ārikarika", "gr": "adj", "en": ["restrained"]}
{"mi": "aromaunga", "gr": "noun", "en": ["mountain face"]}
{"mi": "ataarangi", "gr": "noun", "en": ["shadow"]}
{"mi": "hāparangi", "gr": "verb", "en": ["to shout, scream, bawl"]}
{"mi": "kārikiuri", "gr": "noun", "en": ["dark green"]}
{"mi": "whutupōro", "gr": "noun", "en": ["rugby"]}
{"mi": "hapūtanga", "gr": "noun", "en": ["pregnancy"]}
{"mi": "pangakupu", "gr": "noun", "en": ["crossword"]}
{"mi": "wharehoko", "gr": "noun", "en": ["shop, store"]}
{"mi": "hekengaru", "gr": "noun", "en": ["surfing, the sport of riding ocean waves on boards"]}
{"mi": "kekerengu", "gr": "noun", "en": ["A black beetle (Maoriblatta novaeseelandiae)"]}
{"mi": "wharepuni", "gr": "noun", "en": ["wharepuni"]}
{"mi": "rangitahi", "gr": "adj", "en": ["momentary, ephemeral, transient, short-lived, brief"]}
{"mi": "aroarorua", "gr": "noun", "en": ["to be indecisive, to vacillate"]}
{"mi": "tohemanga", "gr": "noun", "en": ["any member of the species Oxyperas elongatum of large marine bivalve molluscs"]}
{"mi": "whaikīngi", "gr": "noun", "en": ["chess"]}
{"mi": "whakapāho", "gr": "verb", "en": ["to air, broadcast or transmit electronic signals or waves"]}
{"mi": "ringakore", "gr": "verb", "en": ["unarmed"]}
{"mi": "manuwhiri", "gr": "noun", "en": ["visitor, guest"]}
{"mi": "kaitātari", "gr": "noun", "en": ["analyst"]}
{"mi": "tapawhitu", "gr": "noun", "en": ["heptagon"]}
{"mi": "tupuranga", "gr": "noun", "en": ["a place to grow something"]}
{"mi": "whakatewhatewha", "gr": "verb", "en": ["to investigate, to look into", "to explore, to examine"]}
{"mi": "whakatewhatewha", "gr": "noun", "en": ["investigator", "inspector"]}
{"mi": "rāhui", "gr": "noun", "en": ["restriction of access to a place (as a form of taboo)"]}
{"mi": "pirihimana", "gr": "noun", "en": ["police", "police officer, constable"]}
{"mi": "takatakahi", "gr": "verb", "en": ["to trample", "to disobey"]}
{"mi": "māngoingoi", "gr": "verb", "en": ["surfcasting", "to fish with a line from the shore"]}
{"mi": "orokohanga", "gr": "noun", "en": ["origin", "creation"]}
{"mi": "urumaranga", "gr": "noun", "en": ["ambush", "flash mob"]}
{"mi": "whakatangi", "gr": "verb", "en": ["to make something or someone cry", "to play a musical instrument"]}
{"mi": "pārekareka", "gr": "noun", "en": ["enjoyment, pleasure", "spotted shag (Phalacrocorax punctatus)"]}
{"mi": "tākahikahi", "gr": "noun", "en": ["cutty grass (sedge of the genus Gahnia)", "true sedge (sedge of the genus Carex)"]}
{"mi": "huka", "gr": "noun", "en": ["snow, foam, froth, any white form of precipitation"]}
{"mi": "tangihanga", "gr": "noun", "en": ["funeral"]}
{"mi": "tūwhaitara", "gr": "noun", "en": ["giraffe weevil"]}
{"mi": "ōritetanga", "gr": "noun", "en": ["equality (equal treatment of people)"]}
{"mi": "rengarenga", "gr": "noun", "en": ["Arthropodium cirratum, a herbaceous perennial plant endemic to New Zealand."]}
{"mi": "tatauranga", "gr": "noun", "en": ["statistics (mathematical science)"]}
{"mi": "pūmanamārō", "gr": "noun", "en": ["firmware"]}
{"mi": "aihikirīmi", "gr": "noun", "en": ["ice cream"]}
{"mi": "taeratanga", "gr": "noun", "en": ["sexual orientation, sexuality"]}
{"mi": "pīwakawaka", "gr": "noun", "en": ["New Zealand fantail (Rhipidura fuliginosa)"]}
{"mi": "rāhuitanga", "gr": "noun", "en": ["lockdown (confinement of people as a security measure)"]}
{"mi": "kārohirohi", "gr": "verb", "en": ["to shimmer (of light or heat waves)"]}
{"mi": "rātāhuihui", "gr": "noun", "en": ["southern sunfish (Mola alexandrini, syn. Mola ramsayi)"]}
{"mi": "hahaetanga", "gr": "noun", "en": ["first gleam of light"]}
{"mi": "hainatanga", "gr": "noun", "en": ["signature"]}
{"mi": "kōpakipaki", "gr": "noun", "en": ["maize, corn"]}
{"mi": "ngirungiru", "gr": "noun", "en": ["Any of subspecies Petroica macrocephala macrocephala of tom-tits of the South Island"]}
{"mi": "māhuruhuru", "gr": "verb", "en": ["placid, unruffled"]}
{"mi": "kōtetetete", "gr": "verb", "en": ["To chatter, prattle."]}
{"mi": "tātarakihi", "gr": "noun", "en": ["cicada"]}
{"mi": "taupatupatu", "gr": "verb", "en": ["to beat or hit one another", "to compete or vie against one another for something", "to debate"]}
{"mi": "ha", "gr": "intj", "en": ["alternative form of hā (“hey!”)"]}
{"mi": "māramatanga", "gr": "noun", "en": ["clarity", "enlightenment"]}
{"mi": "tāpiritanga", "gr": "noun", "en": ["appendix, addendum", "addition"]}
{"mi": "pīne-ā-Wīwī", "gr": "noun", "en": ["French bean"]}
{"mi": "kāwanatanga", "gr": "noun", "en": ["Government."]}
{"mi": "whakamaheni", "gr": "verb", "en": ["to polish, to burnish"]}
{"mi": "hōkakatanga", "gr": "noun", "en": ["sexual orientation, sexuality"]}
{"mi": "mārenatanga", "gr": "noun", "en": ["marriage"]}
{"mi": "whakawāhine", "gr": "noun", "en": ["plural of whakawahine"]}
{"mi": "takiwātanga", "gr": "noun", "en": ["autism"]}
{"mi": "karakotaera", "gr": "noun", "en": ["crocodile"]}
{"mi": "waiporoporo", "gr": "noun", "en": ["purple"]}
{"mi": "moho-pererū", "gr": "noun", "en": ["buff-banded rail (Gallirallus philippensis)"]}
{"mi": "takeketonga", "gr": "noun", "en": ["striped marlin (Kajikia audax)"]}
{"mi": "haeatatanga", "gr": "noun", "en": ["ray of light through a chink in a wall"]}
{"mi": "kaikoropeke", "gr": "noun", "en": ["skinflint, miser, niggard"]}
{"mi": "taumarumaru", "gr": "verb", "en": ["to overshadow"]}
{"mi": "tapatapātiu", "gr": "noun", "en": ["northwest (compass point)"]}
{"mi": "tūturiwhatu", "gr": "noun", "en": ["New Zealand dotterel (Anarhynchus obscurus)"]}
{"mi": "pohewatanga", "gr": "noun", "en": ["imagination"]}
{"mi": "whakapiriti", "gr": "verb", "en": ["to ordain as a priest"]}
{"mi": "whētikotiko", "gr": "noun", "en": ["mudflat top shell (Diloma subrostrata)"]}
{"mi": "whanaungatanga", "gr": "noun", "en": ["close relationship"]}
{"mi": "patupaiarehe", "gr": "noun", "en": ["patupaiarehe (legendary fair-skinned fairy folk)"]}
{"mi": "rangatiratanga", "gr": "noun", "en": ["chieftainship", "right to exercise authority", "kingdom", "self-determination", "independence"]}
{"mi": "pamakaranete", "gr": "noun", "en": ["pomegranate (tree and fruit)"]}
{"mi": "manaakitanga", "gr": "noun", "en": ["Showing kindness, generosity, respect to others."]}
{"mi": "poro-tapaono", "gr": "noun", "en": ["hexagonal prism"]}
{"mi": "angaangamate", "gr": "noun", "en": ["back, reverse"]}
{"mi": "kaitōrangapū", "gr": "noun", "en": ["politician"]}
{"mi": "uru-mā-tonga", "gr": "noun", "en": ["southwest (compass point)"]}
{"mi": "pūtangitangi", "gr": "noun", "en": ["paradise shelduck (Tadorna variegata)"]}
{"mi": "kihikihitara", "gr": "noun", "en": ["chorus cicada (Amphipsalta zelandica)"]}
{"mi": "tipu", "gr": "verb", "en": ["alternative form of tupu (“to grow”)"]}
{"mi": "ahua", "gr": "verb", "en": ["passive of ahu"]}
{"mi": "hī ika", "gr": "verb", "en": ["to fish with a hook and line"]}
{"mi": "hī ika", "gr": "noun", "en": ["angling, line fishing."]}
{"mi": "autaia", "gr": "verb", "en": ["passive of auta (“to attack”)"]}
{"mi": "kaitiakitanga", "gr": "noun", "en": ["guardianship; trusteeship", "trust"]}
{"mi": "hēmanawatanga", "gr": "noun", "en": ["frustration", "depression"]}
{"mi": "whakawhitinga", "gr": "noun", "en": ["transfer", "transition"]}
{"mi": "tūrangawaewae", "gr": "noun", "en": ["turangawaewae (“the place where one belongs or has a right to live; one's own land; also, the sense of freedom, identity, and spiritual connection associated with this place”)"]}
{"mi": "niko", "gr": "noun", "en": ["cabbage - alternative form of nīko"]}
{"mi": "turangiwaiwai", "gr": "noun", "en": ["misspelling of tūrangawaewae"]}
{"mi": "koeko-tapaono", "gr": "noun", "en": ["hexagonal pyramid"]}
{"mi": "taurumarumaki", "gr": "verb", "en": ["to duck someone else into the water"]}
{"mi": "kaimātakitaki", "gr": "noun", "en": ["spectator, onlooker, audience, observer"]}
{"mi": "pūngāwerewere", "gr": "noun", "en": ["spider"]}
{"mi": "atewharowharo", "gr": "noun", "en": ["lung"]}
{"mi": "puta noa", "gr": "adj", "en": ["unlimited"]}
{"mi": "wawā", "gr": "verb", "en": ["alternative form of wāwā"]}
{"mi": "wawā", "gr": "noun", "en": ["alternative form of wāwā"]}
{"mi": "whakapakotanga", "gr": "noun", "en": ["banishment", "exile"]}
{"mi": "matatangitangi", "gr": "noun", "en": ["lament", "dirge"]}
{"mi": "Wīwī", "gr": "adj", "en": ["French (of, from or relating to France)"]}
{"mi": "Wīwī", "gr": "noun", "en": ["French person (of, from or relating to France)"]}
{"mi": "whakawhiti", "gr": "verb", "en": ["causative of whiti (“shine”)"]}
{"mi": "-a", "gr": "suffix", "en": ["passive ending (used mainly for verbs with one or two vowels)"]}
{"mi": "kaniawheatanga", "gr": "noun", "en": ["remorse"]}
{"mi": "poporokaiwhiri", "gr": "noun", "en": ["pigeonwood (Hedycarya arborea)"]}
{"mi": "pikitia", "gr": "verb", "en": ["passive of piki"]}
{"mi": "haere rā", "gr": "verb", "en": ["go, depart"]}
{"mi": "haere rā", "gr": "intj", "en": ["goodbye (said by one staying to one going)"]}
{"mi": "kia ora", "gr": "intj", "en": ["A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.", "An expression of gratitude (similar to cheers!).", "An expression of support or agreement (similar to hear hear)."]}
{"mi": "Tāke", "gr": "name", "en": ["Turkey (a country located in Eastern Thrace in Southeastern Europe and Anatolia in West Asia)"]}
{"mi": "i/languages M to Z", "gr": "particle", "en": ["from", "past-tense verbal particle", "particle indicating the direct object of a transitive sentence", "past-tense particle indicating location"]}
{"mi": "mangamangaiatua", "gr": "intj", "en": ["abracadabra"]}
{"mi": "mirumiru", "gr": "noun", "en": ["alternative form of miromiro (“North Island tomtit”)"]}
{"mi": "haere mai", "gr": "verb", "en": ["come"]}
{"mi": "haere mai", "gr": "intj", "en": ["welcome"]}
{"mi": "Ngāi", "gr": "noun", "en": ["Descent group marker used in iwi or hapū names beginning with T."]}
{"mi": "kia kaha", "gr": "intj", "en": ["be strong (used as an affirmation or motto)", "A term of comfort or solace (equivalent of the English phrase \\"be strong, my thoughts are with you\\").", "An interjection during a speech to indicate support or approval (similar to \\"hear, hear!\\")."]}
{"mi": "nau mai", "gr": "intj", "en": ["welcome"]}
{"mi": "kainga", "gr": "verb", "en": ["To be consumed; passive form of kai"]}
{"mi": "lima", "gr": "num", "en": ["obsolete spelling of rima"]}
{"mi": "huhu", "gr": "noun", "en": ["huhu grub, the larval form of Prionoplus reticularis (a longhorn beetle species of the Cerambycidae family which is the largest endemic beetle found in New Zealand)"]}
{"mi": "mou", "gr": "noun", "en": ["island, islet, alternative form of motu"]}
{"mi": "utua", "gr": "verb", "en": ["passive of utu"]}
{"mi": "hoou", "gr": "adj", "en": ["obsolete spelling of hōu"]}
{"mi": "pahu", "gr": "noun", "en": ["alternative form of pahū"]}
{"mi": "akau", "gr": "noun", "en": ["alternative form of ākau"]}
{"mi": "pāea", "gr": "verb", "en": ["passive of pae"]}
{"mi": "whakataurekareka", "gr": "verb", "en": ["To treat with contempt."]}
{"mi": "kōtuku-ngutupapa", "gr": "noun", "en": ["royal spoonbill (Platalea regia)"]}
{"mi": "-na", "gr": "suffix", "en": ["Used in contractions with particles of possession of third person pronouns.", "a passive ending"]}
{"mi": "-nga", "gr": "suffix", "en": ["Nominalizing suffix used to form derivate nouns.", "a passive ending (used with only a few verbs ending in 'ai')"]}
{"mi": "Wīwī", "gr": "name", "en": ["France (a country located primarily in Western Europe)"]}
{"mi": "kai hamuti", "gr": "intj", "en": ["eat shit (a vulgar expression)"]}
{"mi": "kai hamuti", "gr": "noun", "en": ["shit-eater; an insult"]}
{"mi": "rongona", "gr": "verb", "en": ["passive of rongo (“to hear”)"]}
{"mi": "reo tupu", "gr": "noun", "en": ["mother tongue"]}
{"mi": "kau aihe", "gr": "noun", "en": ["butterfly stroke"]}
{"mi": "mīti kau", "gr": "noun", "en": ["beef"]}
{"mi": "wehe atu", "gr": "verb", "en": ["to depart, to leave"]}
{"mi": "tēnā koe", "gr": "intj", "en": ["hello (to one person)"]}
{"mi": "ka pai", "gr": "phrase", "en": ["good", "serves (you) right"]}
{"mi": "kaki roa", "gr": "noun", "en": ["giraffe"]}
{"mi": "maki nui", "gr": "noun", "en": ["gorilla"]}
{"mi": "kiko kau", "gr": "noun", "en": ["beef; meat obtained from cattle."]}
{"mi": "pō mārie", "gr": "intj", "en": ["goodnight"]}
{"mi": "kai a te kurī", "gr": "intj", "en": ["damn it, bugger (a strong curse indicating anger)"]}
{"mi": "kai a te kurī", "gr": "adj", "en": ["damn, vile"]}
{"mi": "kai a te kurī", "gr": "noun", "en": ["a contemptible person, a bastard, a son of a bitch", "a so-and-so, a person that the speaker does not know"]}
{"mi": "-u", "gr": "suffix", "en": ["Used in contractions with particles of possession to mean you"]}
{"mi": "-ina", "gr": "suffix", "en": ["passive ending (used for words ending in 'a')"]}
{"mi": "-ia", "gr": "suffix", "en": ["a passive ending"]}
{"mi": "-ku", "gr": "suffix", "en": ["Used in contractions with particles of possession to mean me"]}
{"mi": "ma-", "gr": "prefix", "en": ["fossilised prefix found on some adjectives"]}
{"mi": "tua-", "gr": "prefix", "en": ["prefixed to numerals 1 through 9 to produce an ordinal"]}
{"mi": "kai-", "gr": "prefix", "en": ["A person that does an action indicated by the root verb; used to form an agent noun."]}
{"mi": "kō-", "gr": "prefix", "en": ["Prefix added to a number of words, often without any obvious difference in meaning between the two words."]}
{"mi": "tā-", "gr": "prefix", "en": ["forms causative verbs"]}
{"mi": "tai-", "gr": "prefix", "en": ["prefix indicating a qualifying trait or force"]}
{"mi": "-tia", "gr": "suffix", "en": ["passive ending; commonly used for words with more than two vowels and for passive agreement"]}
{"mi": "-kia", "gr": "suffix", "en": ["a passive ending"]}
{"mi": "-mia", "gr": "suffix", "en": ["a passive ending (used only after verbs ending with 'o' or 'u')"]}
{"mi": "-ria", "gr": "suffix", "en": ["a passive ending"]}
{"mi": "tau-", "gr": "prefix", "en": ["prefix indicating reciprocal action, added to a verb usually reduplicated"]}
{"mi": "totea", "gr": "verb", "en": ["passive of tote"]}
{"mi": "pania", "gr": "verb", "en": ["passive of pani"]}
{"mi": "īnaka", "gr": "noun", "en": ["alternative form of inanga (grass tree)"]}
{"mi": "aitia", "gr": "verb", "en": ["passive of ai"]}
{"mi": "āngia", "gr": "verb", "en": ["passive of ā"]}
{"mi": "putanga", "gr": "noun", "en": ["any exit, outlet or vent", "anything that emerges or appears into view, appearance", "symptom", "outcome, upshot", "edition, form of a published work edited significantly since an earlier or past time"]}
{"mi": "takea", "gr": "verb", "en": ["passive of take"]}
{"mi": "Kini", "gr": "name", "en": ["Guinea (a country in West Africa)"]}
{"mi": "whitia", "gr": "verb", "en": ["passive of whiti (“to transfer”)", "passive of whiti (“to shine”)"]}
{"mi": "Wiki", "gr": "name", "en": ["a female given name, short for Wikitoria"]}
{"mi": "wai māori", "gr": "noun", "en": ["fresh water"]}
{"mi": "kapa haka", "gr": "noun", "en": ["Māori performing arts group."]}
{"mi": "mīti hipi", "gr": "noun", "en": ["mutton, lamb"]}
{"mi": "e noho rā", "gr": "intj", "en": ["goodbye (said by one going to one staying)"]}
{"mi": "papa mahi", "gr": "noun", "en": ["desktop"]}
{"mi": "rua tekau", "gr": "num", "en": ["twenty"]}
{"mi": "whā tekau", "gr": "num", "en": ["forty"]}
{"mi": "ono tekau", "gr": "num", "en": ["sixty"]}
{"mi": "iwa tekau", "gr": "num", "en": ["ninety"]}
{"mi": "hōiho uha", "gr": "noun", "en": ["a mare, a female horse"]}
{"mi": "ata mārie", "gr": "intj", "en": ["good morning"]}
{"mi": "pāmu wēra", "gr": "noun", "en": ["sperm whale (Physeter macrocephalus)"]}
{"mi": "mea ngaro", "gr": "noun", "en": ["mystery"]}
{"mi": "matea ako", "gr": "noun", "en": ["learning needs"]}
{"mi": "pū mīhini", "gr": "noun", "en": ["machine gun"]}
{"mi": "haere atu", "gr": "verb", "en": ["leave, go away, farewell"]}
{"mi": "pane koti", "gr": "noun", "en": ["skirt"]}
{"mi": "mate huka", "gr": "noun", "en": ["diabetes"]}
{"mi": "nama waea", "gr": "noun", "en": ["telephone number"]}
{"mi": "kiko hipi", "gr": "noun", "en": ["sheepmeat or mutton; meat obtained from sheep."]}
{"mi": "hau māota", "gr": "noun", "en": ["chlorine"]}
{"mi": "poi whana", "gr": "noun", "en": ["association football, soccer"]}
{"mi": "tau toitū", "gr": "noun", "en": ["prime number"]}
{"mi": "-anga", "gr": "suffix", "en": ["-ness, -ity (derived noun suffix)"]}
{"mi": "-inga", "gr": "suffix", "en": ["-ness, -ity (derived noun suffix)"]}
{"mi": "haeremai", "gr": "verb", "en": ["alternative form of haere mai"]}
{"mi": "haeremai", "gr": "intj", "en": ["alternative form of haere mai"]}
{"mi": "-kina", "gr": "suffix", "en": ["a passive ending"]}
{"mi": "-whia", "gr": "suffix", "en": ["a passive ending"]}
{"mi": "taki-", "gr": "prefix", "en": ["in a group of a certain number"]}
{"mi": "iroiro", "gr": "noun", "en": ["alternative form of iro"]}
{"mi": "tipuna", "gr": "noun", "en": ["alternative form of tupuna"]}
{"mi": "utaina", "gr": "verb", "en": ["passive of uta"]}
{"mi": "īnanga", "gr": "noun", "en": ["alternative form of inanga"]}
{"mi": "hakari", "gr": "noun", "en": ["roe, yolk – also alternative form of hākari"]}
{"mi": "inumia", "gr": "verb", "en": ["passive of inu"]}
{"mi": "horoia", "gr": "verb", "en": ["passive of horoi"]}
{"mi": "aparia", "gr": "verb", "en": ["passive of apa"]}
{"mi": "āpurua", "gr": "verb", "en": ["passive of āpuru"]}
{"mi": "ahatia", "gr": "verb", "en": ["passive of aha"]}
{"mi": "ahuria", "gr": "verb", "en": ["passive of ahu"]}
{"mi": "ahutia", "gr": "verb", "en": ["passive of ahu"]}
{"mi": "ekaina", "gr": "verb", "en": ["passive of eka"]}
{"mi": "takina", "gr": "verb", "en": ["passive of taki"]}
{"mi": "tākina", "gr": "verb", "en": ["passive of taki (“to recite”)"]}
{"mi": "arotia", "gr": "verb", "en": ["passive of aro"]}
{"mi": "papa taunga", "gr": "noun", "en": ["airfield, airstrip", "airport, aerodrome", "base, headquarters", "coordinate plane"]}
{"mi": "whaka-", "gr": "prefix", "en": ["Causative prefix.", "towards"]}
{"mi": "pohanetia", "gr": "verb", "en": ["passive of pohane"]}
{"mi": "mangō pare", "gr": "noun", "en": ["hammerhead shark, hammerhead"]}
{"mi": "pepe tunga", "gr": "noun", "en": ["huhu beetle or Prionoplus reticularis, a longhorn beetle species of the Cerambycidae family which is the largest endemic beetle found in New Zealand."]}
{"mi": "matua kēkē", "gr": "noun", "en": ["pibling, any sibling of a parent - aunt, uncle"]}
{"mi": "whaea kēkē", "gr": "noun", "en": ["aunty, aunt"]}
{"mi": "hua whenua", "gr": "noun", "en": ["vegetable"]}
{"mi": "Pare", "gr": "name", "en": ["a female given name, equivalent to English Polly"]}
{"mi": "tūnga waka", "gr": "noun", "en": ["parking lot"]}
{"mi": "tēnā kōrua", "gr": "intj", "en": ["hello (to two people)"]}
{"mi": "toru tekau", "gr": "num", "en": ["thirty"]}
{"mi": "rima tekau", "gr": "num", "en": ["fifty"]}
{"mi": "waru tekau", "gr": "num", "en": ["eighty"]}
{"mi": "Ngāti", "gr": "noun", "en": ["Prefix for an iwi or hapū; tribal group."]}
{"mi": "awa kōpaka", "gr": "noun", "en": ["glacier"]}
{"mi": "tino tāone", "gr": "noun", "en": ["capital city, capital"]}
{"mi": "toka ngiha", "gr": "noun", "en": ["igneous rock"]}
{"mi": "whare none", "gr": "noun", "en": ["nunnery, convent"]}
{"mi": "huru moana", "gr": "noun", "en": ["freshwater hydra (Hydra vulgaris)"]}
{"mi": "marama hua", "gr": "noun", "en": ["full moon"]}
{"mi": "tekau mano", "gr": "num", "en": ["ten thousand"]}
{"mi": "taunga inu", "gr": "noun", "en": ["coaster"]}
{"mi": "taunga ika", "gr": "noun", "en": ["fishing ground"]}
{"mi": "-tanga", "gr": "suffix", "en": ["-ness, -ity, -ation (derived noun suffix)"]}
{"mi": "-hanga", "gr": "suffix", "en": ["-ness, -ity"]}
{"mi": "-ranga", "gr": "suffix", "en": ["-ness, -ity (derived noun suffix)"]}
{"mi": "-whina", "gr": "suffix", "en": ["a passive ending"]}
{"mi": "Haina", "gr": "name", "en": ["China (a country in Asia)"]}
{"mi": "pohanea", "gr": "verb", "en": ["passive of pohane"]}
{"mi": "ahungia", "gr": "verb", "en": ["passive of ahu"]}
{"mi": "paingia", "gr": "verb", "en": ["passive of pai"]}
{"mi": "tākehia", "gr": "verb", "en": ["passive of tāke"]}
{"mi": "tāketia", "gr": "verb", "en": ["passive of tāke"]}
{"mi": "popotia", "gr": "verb", "en": ["passive of popo"]}
{"mi": "whakawhanaungatanga", "gr": "noun", "en": ["The process of establishing relationships."]}
{"mi": "tēnā koutou", "gr": "intj", "en": ["hello (to three or more people)"]}
{"mi": "whitu tekau", "gr": "num", "en": ["seventy"]}
{"mi": "poka tōrere", "gr": "noun", "en": ["abyss, bottomless pit, chasm"]}
{"mi": "ua kirikiri", "gr": "noun", "en": ["sandstorm"]}
{"mi": "manu kōrero", "gr": "noun", "en": ["orator"]}
{"mi": "tāone matua", "gr": "noun", "en": ["capital city, capital"]}
{"mi": "punua ngeru", "gr": "noun", "en": ["a small cat; a kitten"]}
{"mi": "haeana rāti", "gr": "noun", "en": ["harpoon"]}
{"mi": "whare maita", "gr": "noun", "en": ["bowling pavilion"]}
{"mi": "paura pūmua", "gr": "noun", "en": ["protein powder"]}
{"mi": "mahi kāinga", "gr": "noun", "en": ["homework (preliminary or preparatory work)"]}
{"mi": "mahi okaoka", "gr": "noun", "en": ["vaccination"]}
{"mi": "kumi ihuroa", "gr": "noun", "en": ["crocodile"]}
{"mi": "hoahoa papa", "gr": "noun", "en": ["floor plan"]}
{"mi": "papa tapeke", "gr": "noun", "en": ["scoreboard"]}
{"mi": "papa kūtoro", "gr": "noun", "en": ["stretch fabric"]}
{"mi": "papa pūkura", "gr": "noun", "en": ["badminton court"]}
{"mi": "rua ngahuru", "gr": "num", "en": ["twenty"]}
{"mi": "taiaki tāne", "gr": "noun", "en": ["Testosterone"]}
{"mi": "whakarangona", "gr": "verb", "en": ["passive of whakarongo; to be listened to"]}
{"mi": "tangihia", "gr": "verb", "en": ["passive of tangi"]}
{"mi": "turakina", "gr": "verb", "en": ["passive of turaki"]}
{"mi": "haumāota", "gr": "noun", "en": ["alternative form of hau māota."]}
{"mi": "whāngaia", "gr": "verb", "en": ["passive of whāngai"]}
{"mi": "urupatua", "gr": "verb", "en": ["passive of urupatu"]}
{"mi": "āpuruhia", "gr": "verb", "en": ["passive of āpuru"]}
{"mi": "āpurutia", "gr": "verb", "en": ["passive of āpuru"]}
{"mi": "poiwhana", "gr": "noun", "en": ["alternative form of poi whana"]}
{"mi": "hainatia", "gr": "verb", "en": ["passive of haina"]}
{"mi": "tākengia", "gr": "verb", "en": ["passive of tāke"]}
{"mi": "mōhiohia", "gr": "verb", "en": ["passive of mōhio"]}
{"mi": "mōhiotia", "gr": "verb", "en": ["passive of mōhio"]}
{"mi": "Toi", "gr": "name", "en": ["a male given name, Toi, from Polynesian"]}
{"mi": "tuturuatu", "gr": "noun", "en": ["shore plover (Charadrius novaeseelandiae)", "alternative form of tuturuwhatu (“New Zealand dotterel”)"]}
{"mi": "te reo Māori", "gr": "noun", "en": ["the Maori language"]}
{"mi": "iohere punga", "gr": "noun", "en": ["Achilles tendon"]}
{"mi": "kaupapa ture", "gr": "noun", "en": ["constitution"]}
{"mi": "tekau mā rua", "gr": "num", "en": ["twelve"]}
{"mi": "tekau mā whā", "gr": "num", "en": ["fourteen"]}
{"mi": "tekau mā ono", "gr": "num", "en": ["sixteen"]}
{"mi": "tekau mā iwa", "gr": "num", "en": ["nineteen"]}
{"mi": "aronga taera", "gr": "noun", "en": ["sexual orientation"]}
{"mi": "rīngi mārena", "gr": "noun", "en": ["wedding ring"]}
{"mi": "mutunga wiki", "gr": "noun", "en": ["weekend"]}
{"mi": "mano miriona", "gr": "num", "en": ["billion"]}
{"mi": "matira auahi", "gr": "noun", "en": ["fire alarm"]}
{"mi": "pere tapaono", "gr": "noun", "en": ["chevron"]}
{"mi": "mate pāpōuri", "gr": "noun", "en": ["depression"]}
{"mi": "inu mirumiru", "gr": "noun", "en": ["Coke (Coca-Cola)"]}
{"mi": "kahu kautere", "gr": "noun", "en": ["life jacket"]}
{"mi": "huka parauri", "gr": "noun", "en": ["brown sugar"]}
{"mi": "ngahuru mano", "gr": "num", "en": ["ten thousand"]}
{"mi": "ngutu parore", "gr": "noun", "en": ["wrybill (Anarhynchus frontalis)"]}
{"mi": "papa ahumahi", "gr": "noun", "en": ["industrial land"]}
{"mi": "pae tukutuku", "gr": "noun", "en": ["website"]}
{"mi": "Mane", "gr": "noun", "en": ["Monday"]}
{"mi": "pōhēhētia", "gr": "verb", "en": ["passive of pōhēhē"]}
{"mi": "utautaina", "gr": "verb", "en": ["passive of utauta"]}
{"mi": "whakaaria", "gr": "verb", "en": ["passive of whakaari"]}
{"mi": "tukutukua", "gr": "verb", "en": ["passive of tukutuku"]}
{"mi": "hainangia", "gr": "verb", "en": ["passive of haina"]}
{"mi": "whawhatia", "gr": "verb", "en": ["passive of whawhati"]}
{"mi": "tātaritia", "gr": "verb", "en": ["passive of tātari"]}
{"mi": "kōrerohia", "gr": "verb", "en": ["passive of kōrero"]}
{"mi": "kōrerotia", "gr": "verb", "en": ["passive of kōrero"]}
{"mi": "hiahiatia", "gr": "verb", "en": ["passive of hiahia"]}
{"mi": "whare wānanga", "gr": "noun", "en": ["a type of traditional Maori school.", "university, polytechnic"]}
{"mi": "mata ipurangi", "gr": "noun", "en": ["internet browser", "media browser"]}
{"mi": "Toko", "gr": "name", "en": ["Togo (a country in West Africa)"]}
{"mi": "tangata māori", "gr": "noun", "en": ["human being (as opposed to supernatural being)"]}
{"mi": "mangō taniwha", "gr": "noun", "en": ["great white shark"]}
{"mi": "te reo Pākehā", "gr": "noun", "en": ["English language"]}
{"mi": "mate hukapuri", "gr": "noun", "en": ["frostbite"]}
{"mi": "tekau mā tahi", "gr": "num", "en": ["eleven"]}
{"mi": "tekau mā toru", "gr": "num", "en": ["thirteen"]}
{"mi": "tekau mā rima", "gr": "num", "en": ["fifteen"]}
{"mi": "tekau mā waru", "gr": "num", "en": ["eighteen"]}
{"mi": "whare karakia", "gr": "noun", "en": ["a religious building: a church, a synagogue, a mosque, a house of prayer"]}
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
{"mi": "manaakitia", "gr": "verb", "en": ["passive of manaaki"]}
{"mi": "karakiatia", "gr": "verb", "en": ["passive of karakia"]}
{"mi": "whakamahia", "gr": "verb", "en": ["passive of whakamahi"]}
{"mi": "pīrangihia", "gr": "verb", "en": ["passive of pīrangi"]}
{"mi": "pīrangitia", "gr": "verb", "en": ["passive of pīrangi"]}
{"mi": "whāngaihia", "gr": "verb", "en": ["passive of whāngai"]}
{"mi": "whāngainga", "gr": "verb", "en": ["passive of whāngai"]}
{"mi": "whāngaitia", "gr": "verb", "en": ["passive of whāngai"]}
{"mi": "tukutukuna", "gr": "verb", "en": ["passive of tukutuku"]}
{"mi": "whakahokia", "gr": "verb", "en": ["passive of whakahoki"]}
{"mi": "atawhaitia", "gr": "verb", "en": ["passive of atawhai"]}
{"mi": "hoariritia", "gr": "verb", "en": ["passive of hoariri"]}
{"mi": "Ra", "gr": "name", "en": ["Ra (Egyptian god of the Sun)"]}
{"mi": "Māui", "gr": "name", "en": ["A trickster and a hero who had his superhuman strength and shapeshifting, believed to have created the islands of New Zealand from a great fish that he caught."]}
{"mi": "tangata whenua", "gr": "noun", "en": ["indigenous people", "hosts"]}
{"mi": "tangata tiriti", "gr": "noun", "en": ["\\"People of the Treaty\\", or New Zealanders of non-Māori origin.", "Includes all non-Māori people who have a right to live in New Zealand under the Treaty of Waitangi."]}
{"mi": "ka kite anō", "gr": "phrase", "en": ["I'll see you again."]}
{"mi": "Mihi", "gr": "name", "en": ["A title given to a white female"]}
{"mi": "tekau mā whitu", "gr": "num", "en": ["seventeen"]}
{"mi": "whare herehere", "gr": "noun", "en": ["prison"]}
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
{"mi": "ngahuru mā rua", "gr": "num", "en": ["twelve, dozen"]}
{"mi": "ngahuru mā whā", "gr": "num", "en": ["fourteen"]}
{"mi": "ngahuru mā ono", "gr": "num", "en": ["sixteen"]}
{"mi": "ngahuru mā iwa", "gr": "num", "en": ["nineteen"]}
{"mi": "Hina", "gr": "name", "en": ["personification of the Moon"]}
{"mi": "whakaarohia", "gr": "verb", "en": ["passive of whakaaro"]}
{"mi": "atawhaingia", "gr": "verb", "en": ["passive of atawhai"]}
{"mi": "whakaatuhia", "gr": "verb", "en": ["passive of whakaatu"]}
{"mi": "whakaaturia", "gr": "verb", "en": ["passive of whakaatu"]}
{"mi": "hirahiratia", "gr": "verb", "en": ["passive of hirahira"]}
{"mi": "whakahaerea", "gr": "verb", "en": ["passive of whakahaere"]}
{"mi": "rongoā āraimate", "gr": "noun", "en": ["vaccine", "vaccination (inoculation with a vaccine)"]}
{"mi": "Haki", "gr": "name", "en": ["a male given name, Jack"]}
{"mi": "taunga rererangi", "gr": "noun", "en": ["airport", "aerodrome", "airfield"]}
{"mi": "pepeke nguturoa", "gr": "noun", "en": ["weevil"]}
{"mi": "tai āniwhaniwha", "gr": "noun", "en": ["tidal wave"]}
{"mi": "hunga whakaruru", "gr": "noun", "en": ["refugee"]}
{"mi": "pūtiro tukutuku", "gr": "noun", "en": ["web browser"]}
{"mi": "hākete whakaora", "gr": "noun", "en": ["life jacket"]}
{"mi": "taunga tukutuku", "gr": "noun", "en": ["Cartesian coordinates"]}
{"mi": "ngahuru mā tahi", "gr": "num", "en": ["eleven"]}
{"mi": "ngahuru mā toru", "gr": "num", "en": ["thirteen"]}
{"mi": "ngahuru mā rima", "gr": "num", "en": ["fifteen"]}
{"mi": "ngahuru mā waru", "gr": "num", "en": ["eighteen"]}
{"mi": "tūtohi tukutuku", "gr": "noun", "en": ["array"]}
{"mi": "utauta tukutuku", "gr": "noun", "en": ["webtool"]}
{"mi": "Hune", "gr": "name", "en": ["June (month)"]}
{"mi": "whakarongona", "gr": "verb", "en": ["alternative form of whakarangona"]}
{"mi": "Kōpū", "gr": "name", "en": ["Venus (planet)"]}
{"mi": "kiritaratara", "gr": "noun", "en": ["alternative form of kiri taratara"]}
{"mi": "poitarawhiti", "gr": "noun", "en": ["alternative form of poi tarawhiti (“netball”)"]}
{"mi": "whakamōtītia", "gr": "verb", "en": ["passive of whakamōtī"]}
{"mi": "whakaahuatia", "gr": "verb", "en": ["passive of whakaahua"]}
{"mi": "Hiri", "gr": "name", "en": ["Chile (a country in South America)"]}
{"mi": "Aranga", "gr": "name", "en": ["(Te ~) Easter"]}
{"mi": "Tararā", "gr": "noun", "en": ["A native or inhabitant of Dalmatia."]}
{"mi": "karaihe whakanui", "gr": "noun", "en": ["microscope"]}
{"mi": "tangata ira tāne", "gr": "noun", "en": ["a person assigned female at birth who behave as a man"]}
{"mi": "tino mate nui ki", "gr": "verb", "en": ["to have a great desire for"]}
{"mi": "kōtuku ngutupapa", "gr": "noun", "en": ["royal spoonbill (Platalea regia)"]}
{"mi": "rapunga whakaaro", "gr": "noun", "en": ["philosophy"]}
{"mi": "mate pūkahu kakā", "gr": "noun", "en": ["pneumonia"]}
{"mi": "āhuahanga taunga", "gr": "noun", "en": ["analytic geometry"]}
{"mi": "ngahuru mā whitu", "gr": "num", "en": ["seventeen"]}
{"mi": "tukutuku inerite", "gr": "noun", "en": ["isometric grid"]}
{"mi": "Meri", "gr": "name", "en": ["Mary (biblical)", "a female given name, equivalent to English Mary"]}
{"mi": "Pita", "gr": "name", "en": ["a male given name, equivalent to English Peter", "Peter (biblical)"]}
{"mi": "Māta", "gr": "name", "en": ["a female given name, equivalent to English Martha", "Martha (biblical)"]}
{"mi": "Kāha", "gr": "name", "en": ["Gaza (a city in the Gaza Strip, Palestine in the Levant; in full, Gaza City)", "Gaza (a governorate of the Gaza Strip, Palestine, around the city)"]}
{"mi": "whakamahingia", "gr": "verb", "en": ["passive of whakamahi"]}
{"mi": "whakangaromia", "gr": "verb", "en": ["passive of whakangaro"]}
{"mi": "whakangarotia", "gr": "verb", "en": ["passive of whakangaro"]}
{"mi": "whakahaerehia", "gr": "verb", "en": ["passive of whakahaere"]}
{"mi": "whakahaeretia", "gr": "verb", "en": ["passive of whakahaere"]}
{"mi": "Piri", "gr": "name", "en": ["a male given name, equivalent to English Bill"]}
{"mi": "Hōri", "gr": "name", "en": ["a male given name, George"]}
{"mi": "Kōngo", "gr": "name", "en": ["Democratic Republic of the Congo (a country in Central Africa, larger and to the east of the Republic of the Congo)", "Republic of the Congo (a country in Central Africa, smaller and to the west of the Democratic Republic of the Congo)", "Congo (a major river in Central Africa which flows for about 4,380 km (2,720 miles) to the Atlantic Ocean in the Democratic Republic of the Congo, at times forming the border with the Republic of the Congo and Angola)"]}
{"mi": "Tuna", "gr": "name", "en": ["An eel-god, the son of Manga-wai-roa, one of the lesser Maori deities who lived in a water hole called Muri-wai-o-ata."]}
{"mi": "Aka", "gr": "name", "en": ["Acre (a port city in northern Israel, holiest city in the Baháʼí Faith)"]}
{"mi": "Ani", "gr": "name", "en": ["a female given name, equivalent to English Ann"]}
{"mi": "marangai kirikiri", "gr": "noun", "en": ["sandstorm"]}
{"mi": "poro-tapawhā rite", "gr": "noun", "en": ["square prism"]}
{"mi": "Taina", "gr": "name", "en": ["China (a country in Asia)"]}
{"mi": "Matiu", "gr": "name", "en": ["Somes Island, an island in Wellington Harbour"]}
{"mi": "Matiu", "gr": "name", "en": ["a male given name, equivalent to English Matthew", "Matthew (biblical)"]}
{"mi": "whakapohanetia", "gr": "verb", "en": ["passive of whakapohane"]}
{"mi": "whakapakaruhia", "gr": "verb", "en": ["passive of whakapakaru"]}
{"mi": "whakapakarutia", "gr": "verb", "en": ["passive of whakapakaru"]}
{"mi": "whakamatakutia", "gr": "verb", "en": ["passive of whakamataku"]}
{"mi": "whakamatakuria", "gr": "verb", "en": ["passive of whakamataku"]}
{"mi": "whakahaerengia", "gr": "verb", "en": ["passive of whakahaere"]}
{"mi": "taurekarekatia", "gr": "verb", "en": ["passive of taurekareka"]}
{"mi": "Ōriwa", "gr": "name", "en": ["a male given name, Oliver"]}
{"mi": "Reipa", "gr": "name", "en": ["Labour (New Zealand Labour Party)"]}
{"mi": "he aha te taima", "gr": "phrase", "en": ["what time is it?"]}
{"mi": "Erata", "gr": "name", "en": ["Eilat (a city in southern Israel)"]}
{"mi": "whakatōpū kongakonga", "gr": "noun", "en": ["defragmentation"]}
{"mi": "whakatōpū kongakonga", "gr": "verb", "en": ["to defragment"]}
{"mi": "Kaiana", "gr": "name", "en": ["Guyana (a country in South America)", "Guiana (a region of South America)"]}
{"mi": "Whiro", "gr": "name", "en": ["The Maori god of darkness.", "The moon on the first night of a lunar month in the traditional Maori calendar.", "The sixteenth night of a lunar month in the Maori calendar, as observed by some tribes.", "The planet Mercury.", "The dwarf planet Pluto."]}
{"mi": "tangaroa wae whitu", "gr": "noun", "en": ["Astrostole scabra - a large starfish with only seven arms."]}
{"mi": "piriti whakatārewa", "gr": "noun", "en": ["suspension bridge"]}
{"mi": "Tauranga", "gr": "name", "en": ["Tauranga (a city in New Zealand)"]}
{"mi": "Mahuru", "gr": "name", "en": ["The fourth month of the maramataka (lunar calendar), corresponding to August–September of the Gregorian calendar.", "Alphard (star)"]}
{"mi": "Tararā", "gr": "name", "en": ["Yugoslavia (a former country in Southeastern Europe in the Balkans, now split into 6 countries: Bosnia and Herzegovina, Croatia, North Macedonia, Montenegro, Serbia, and Slovenia)", "Dalmatia (a historical region of Croatia, on the eastern coast of the Adriatic Sea)"]}
{"mi": "Harare", "gr": "adj", "en": ["bleary-eyed"]}
{"mi": "Rātapu", "gr": "noun", "en": ["Sunday"]}
{"mi": "Hēmi", "gr": "name", "en": ["a male given name, equivalent to English James", "James (biblical)"]}
{"mi": "Māka", "gr": "name", "en": ["a male given name, equivalent to English Mark", "Mark (biblical)"]}
{"mi": "Rutu", "gr": "name", "en": ["Ruth (biblical).", "a female given name, equivalent to English Ruth"]}
{"mi": "Hōne", "gr": "name", "en": ["a male given name, equivalent to English John", "a surname."]}
{"mi": "Mohi", "gr": "name", "en": ["a male given name, equivalent to English Moses", "Moses (biblical)"]}
{"mi": "Airani", "gr": "name", "en": ["Ireland (a country in northwestern Europe)"]}
{"mi": "Peraha", "gr": "noun", "en": ["Perth (the capital of Western Australia, Australia)"]}
{"mi": "Ōpango", "gr": "noun", "en": ["All Blacks"]}
{"mi": "Hera", "gr": "name", "en": ["a female given name, equivalent to English Sarah"]}
{"mi": "Mei", "gr": "name", "en": ["May (month)"]}
{"mi": "Ruta", "gr": "name", "en": ["a female given name, equivalent to English Ruth"]}
{"mi": "Mere", "gr": "name", "en": ["a female given name, equivalent to English Mary"]}
{"mi": "Perū", "gr": "name", "en": ["Peru (a country in South America)"]}
{"mi": "Peti", "gr": "name", "en": ["a female given name, equivalent to English Betty, Betsy, and Bessie"]}
{"mi": "Hēni", "gr": "name", "en": ["a female given name, equivalent to English Jane"]}
{"mi": "Ruihi", "gr": "name", "en": ["a female given name, equivalent to English Lucy", "a female given name, equivalent to English Louise", "a male given name, equivalent to English Louis"]}
{"mi": "Hone", "gr": "name", "en": ["a male given name, equivalent to English John"]}
{"mi": "Tame", "gr": "name", "en": ["a male given name, equivalent to English Tom"]}
{"mi": "Timi", "gr": "name", "en": ["a male given name, equivalent to English Jim and James"]}
{"mi": "Hare", "gr": "name", "en": ["a male given name, Harry"]}
{"mi": "Tāre", "gr": "name", "en": ["a male given name, equivalent to English Charles"]}
{"mi": "Wāta", "gr": "name", "en": ["a male given name, equivalent to English Walter"]}
{"mi": "Rewi", "gr": "name", "en": ["a male given name, equivalent to English Louis, Dave, and Levi"]}
{"mi": "Wī", "gr": "name", "en": ["a diminutive of the male given name Wiremu"]}
{"mi": "Kāna", "gr": "name", "en": ["Ghana (a country in West Africa)"]}
{"mi": "Īnia", "gr": "name", "en": ["India (a country in South Asia)"]}
{"mi": "Parī", "gr": "name", "en": ["Paris (the capital of France)"]}
{"mi": "Rātū", "gr": "name", "en": ["Tuesday"]}
{"mi": "Kāta", "gr": "name", "en": ["Chad (a country in Central Africa)"]}
{"mi": "Māri", "gr": "name", "en": ["Mali (a country in West Africa)"]}
{"mi": "Katā", "gr": "name", "en": ["Qatar (a country in Asia)"]}
{"mi": "Huwa", "gr": "name", "en": ["Suva (the capital of Fiji)"]}
{"mi": "Hopa", "gr": "name", "en": ["a male given name, equivalent to English Job"]}
{"mi": "Kūpā", "gr": "name", "en": ["Cuba (a country in North America)"]}
{"mi": "Ūtā", "gr": "name", "en": ["Utah (a state of the United States)"]}
{"mi": "Iutā", "gr": "name", "en": ["Utah (a state of the United States)"]}
{"mi": "Āhia", "gr": "name", "en": ["Asia (the largest continent, located between Europe and the Pacific Ocean)"]}
{"mi": "Āwherika", "gr": "name", "en": ["Africa (the continent south of Europe and between the Atlantic and Indian Oceans)"]}
{"mi": "Paraire", "gr": "noun", "en": ["Friday"]}
{"mi": "Koria", "gr": "name", "en": ["Korea (a geographic region in East Asia, consisting of two countries, commonly known as South Korea and North Korea; formerly a single country)", "Korea (a peninsula in East Asia, containing the countries of North Korea and South Korea; in full, Korean Peninsula)"]}
{"mi": "Ānaru", "gr": "name", "en": ["a male given name, equivalent to English Andrew", "Andrew (biblical)"]}
{"mi": "Hoana", "gr": "name", "en": ["a female given name, equivalent to English Joan and Joanna", "Joanna (biblical)"]}
{"mi": "Riria", "gr": "name", "en": ["a female given name", "Lydia (biblical)"]}
{"mi": "Hoani", "gr": "name", "en": ["John (biblical)", "a male given name, equivalent to English John"]}
{"mi": "Pāora", "gr": "name", "en": ["Paul (Christian apostle)", "a male given name, equivalent to English Paul"]}
{"mi": "Īhāia", "gr": "name", "en": ["a male given name, equivalent to English Isaiah", "Isaiah (biblical)"]}
{"mi": "Īhaka", "gr": "name", "en": ["a male given name, equivalent to English Isaac", "Isaac (biblical)"]}
{"mi": "Ārama", "gr": "name", "en": ["a male given name, equivalent to English Adam", "Adam (biblical)"]}
{"mi": "Rotorua", "gr": "name", "en": ["a city, the capital of Rotorua Lakes district, Bay of Plenty, North Island, New Zealand, on the southern shores of Lake Rotorua."]}
{"mi": "Hātarei", "gr": "noun", "en": ["Saturday"]}
{"mi": "Irāia", "gr": "name", "en": ["Elijah (biblical character).", "a male given name originating from the Bible"]}
{"mi": "Whītī", "gr": "name", "en": ["Fiji (a country and archipelago of over 300 islands in Melanesia in Oceania)", "Fijian"]}
{"mi": "Tangaroa", "gr": "name", "en": ["The Maori god of the sea, lakes, rivers, and aquatic life.", "Neptune (Roman god)", "Neptune (planet)"]}
{"mi": "Whinirana", "gr": "name", "en": ["Finland (a country in Northern Europe)"]}
{"mi": "-hia", "gr": "suffix", "en": ["a passive ending (favoured in the Tūhoe dialect where -tia would be preferred in other dialects)"]}
{"mi": "Rūhia", "gr": "name", "en": ["Russia (a transcontinental country in Eastern Europe and North Asia)"]}
{"mi": "Nōwei", "gr": "name", "en": ["Norway (a country in Scandinavia in Northern Europe)"]}
{"mi": "Hōria", "gr": "name", "en": ["Georgia (a transcontinental country in the Caucasus region of Europe and Asia, on the coast of the Black Sea)"]}
{"mi": "Māehe", "gr": "name", "en": ["March (month)"]}
{"mi": "Hūrae", "gr": "name", "en": ["July (month)"]}
{"mi": "Noema", "gr": "name", "en": ["November (month)"]}
{"mi": "Ruiha", "gr": "name", "en": ["a female given name, equivalent to English Louisa"]}
{"mi": "Erana", "gr": "name", "en": ["a female given name, equivalent to English Ellen"]}
{"mi": "Emere", "gr": "name", "en": ["a female given name, equivalent to English Emily"]}
{"mi": "Ihowā", "gr": "name", "en": ["Jehovah, the Lord"]}
{"mi": "Mihinare", "gr": "noun", "en": ["Anglican", "missionary"]}
{"mi": "Tūrei", "gr": "name", "en": ["Tuesday (day of the week)"]}
{"mi": "Tāite", "gr": "name", "en": ["Thursday"]}
{"mi": "Hāmoa", "gr": "name", "en": ["Samoa (a country consisting of the western part of the Samoan archipelago in Polynesia, in Oceania)"]}
{"mi": "Rāapa", "gr": "name", "en": ["Wednesday"]}
{"mi": "Rārua", "gr": "name", "en": ["Tuesday"]}
{"mi": "Rāwhā", "gr": "name", "en": ["Thursday"]}
{"mi": "Tōkio", "gr": "name", "en": ["Tokyo (a city in Japan)"]}
{"mi": "Pārau", "gr": "name", "en": ["Palau (a country in Oceania)"]}
{"mi": "Īhipa", "gr": "name", "en": ["Egypt (a country in North Africa and West Asia)"]}
{"mi": "Kēnia", "gr": "name", "en": ["Kenya (a country in East Africa)"]}
{"mi": "Rīpia", "gr": "name", "en": ["Libya (a country in North Africa)"]}
{"mi": "Ukāna", "gr": "name", "en": ["Uganda (a country in Africa)"]}
{"mi": "Hiria", "gr": "name", "en": ["Syria (a country in West Asia in the Middle East)"]}
{"mi": "Rāoho", "gr": "name", "en": ["Laos (a country in Southeast Asia)"]}
{"mi": "Tīmoa", "gr": "name", "en": ["Timor Leste (a country in Asia)"]}
{"mi": "Īrāna", "gr": "name", "en": ["Iran (a country in West Asia)"]}
{"mi": "Īrāki", "gr": "name", "en": ["Iraq (a country in West Asia in the Middle East)"]}
{"mi": "Kuamu", "gr": "name", "en": ["Guam (a country in Oceania)"]}
{"mi": "Ōreti", "gr": "name", "en": ["Lumsden (a town in New Zealand)"]}
{"mi": "Kiupa", "gr": "name", "en": ["Cuba (a country, the largest island (based on land area) in the Caribbean)"]}
{"mi": "Itaho", "gr": "name", "en": ["Idaho (a state of the United States)"]}
{"mi": "Karon", "gr": "name", "en": ["Charon (a moon of Pluto)"]}
{"mi": "Arame", "gr": "name", "en": ["Aram (a historical region mentioned in early cuneiforms and in the Bible, located in modern Syria as well as parts of Iraq, Lebanon and southeastern Turkey; inhabited by Arameans)"]}
{"mi": "Hawha", "gr": "name", "en": ["Jaffa (a port in western Israel)"]}
{"mi": "Ūropi", "gr": "name", "en": ["Europe (a continent located west of Asia and north of Africa)"]}
{"mi": "Taupō", "gr": "name", "en": ["Taupo (a town in Waikato, New Zealand, on the shore of the lake)"]}
{"mi": "Hōrana", "gr": "name", "en": ["Holland (a historical province of the Netherlands)", "Holland, the Netherlands (a country in Western Europe)"]}
{"mi": "Rāwiri", "gr": "name", "en": ["a male given name, equivalent to English David", "David (biblical)"]}
{"mi": "Piripi", "gr": "name", "en": ["a male given name, equivalent to English Philip", "Philip (biblical)"]}
{"mi": "Tāmati", "gr": "name", "en": ["a male given name, equivalent to English Thomas", "Thomas (biblical)"]}
{"mi": "Rīpeka", "gr": "name", "en": ["a female given name, equivalent to English Rebecca", "Rebekah (biblical)"]}
{"mi": "Hūhana", "gr": "name", "en": ["a female given name, equivalent to English Susan", "Susanna (biblical)"]}
{"mi": "Rāhera", "gr": "name", "en": ["a female given name, equivalent to English Rachel", "Rachel (biblical)"]}
{"mi": "Hōhepa", "gr": "name", "en": ["a male given name, equivalent to English Joseph", "Joseph (biblical)"]}
{"mi": "Tēpene", "gr": "name", "en": ["Stephen (biblical)", "a male given name, equivalent to English Stephen"]}
{"mi": "Tīmoti", "gr": "name", "en": ["a male given name, equivalent to English Timothy", "Timothy (biblical)"]}
{"mi": "Komoro", "gr": "name", "en": ["Comoros (a country and group of islands in the Indian Ocean off the coast of East Africa)", "Comoros (an archipelago consisting of the Union of the Comoros and the French overseas department of Mayotte)"]}
{"mi": "Nāhinara", "gr": "name", "en": ["National (New Zealand National Party)"]}
{"mi": "Pukamata", "gr": "noun", "en": ["Facebook"]}
{"mi": "Haiwha", "gr": "name", "en": ["Haifa (a port city in northern Israel)", "Haifa (a district of Israel)"]}
{"mi": "Tipene", "gr": "name", "en": ["a male given name, equivalent to English Stephen.", "a surname."]}
{"mi": "ārai mate", "gr": "noun", "en": ["alternative form of āraimate"]}
{"mi": "kai moana", "gr": "noun", "en": ["alternative form of kaimoana"]}
{"mi": "ihu moana", "gr": "noun", "en": ["alternative form of ihumoana"]}
{"mi": "Kohi-tātea", "gr": "name", "en": ["The eighth month of the maramataka (lunar calendar), corresponding to December–January of the Gregorian calendar."]}
{"mi": "-ngia", "gr": "suffix", "en": ["a passive ending (favoured in the Ngāti Porou dialect where -tia would be preferred in other dialects)"]}
{"mi": "Apārangi", "gr": "name", "en": ["Mercury (planet)"]}
{"mi": "whakatewhatewha pānga", "gr": "noun", "en": ["contact tracing"]}
{"mi": "kāore i te ngākau nui", "gr": "adj", "en": ["discontented"]}
{"mi": "Moroko", "gr": "name", "en": ["Morocco (a country in North Africa)"]}
{"mi": "Etonia", "gr": "name", "en": ["Estonia (a country in northeastern Europe, on the southeastern coast of the Baltic Sea)"]}
{"mi": "Itāria", "gr": "name", "en": ["Italy (a country in Southern Europe)"]}
{"mi": "Kāmaka", "gr": "name", "en": ["Gibraltar"]}
{"mi": "Rāwhia", "gr": "name", "en": ["Latvia (a country in northeastern Europe)"]}
{"mi": "Kirihi", "gr": "name", "en": ["Greece (a country in Southeastern Europe)"]}
{"mi": "Ateria", "gr": "name", "en": ["Austria (a country in Central Europe)"]}
{"mi": "Āmenia", "gr": "name", "en": ["Armenia (a country in the South Caucasus region of Asia, considered to belong politically to Europe)"]}
{"mi": "Pērara", "gr": "name", "en": ["Belarus (a country in Europe)"]}
{"mi": "Pōrana", "gr": "name", "en": ["Poland (a country in Central Europe)"]}
{"mi": "Tīhema", "gr": "name", "en": ["December (month)"]}
{"mi": "Nipono", "gr": "name", "en": ["Japan (a country in East Asia)"]}
{"mi": "Irinoi", "gr": "name", "en": ["Illinois (a state of the United States)"]}
{"mi": "Rerehu", "gr": "name", "en": ["Antares, the brightest star in the constellation Scorpius"]}
{"mi": "Rēnata", "gr": "name", "en": ["a male given name"]}
{"mi": "Hēnare", "gr": "name", "en": ["a male given name, equivalent to English Henry"]}
{"mi": "Petera", "gr": "name", "en": ["a male given name, equivalent to English Peter"]}
{"mi": "Rihari", "gr": "name", "en": ["a male given name, equivalent to English Richard"]}
{"mi": "Rāpata", "gr": "name", "en": ["a male given name, equivalent to English Robert"]}
{"mi": "Wiremu", "gr": "name", "en": ["a male given name, equivalent to English William"]}
{"mi": "Mākere", "gr": "name", "en": ["a female given name, equivalent to English Margaret"]}
{"mi": "Hārata", "gr": "name", "en": ["a female given name, equivalent to English Charlotte"]}
{"mi": "Tīpene", "gr": "name", "en": ["a male given name, equivalent to English Stephen"]}
{"mi": "Eruera", "gr": "name", "en": ["a male given name, Edward"]}
{"mi": "Mātene", "gr": "name", "en": ["a male given name, equivalent to English Martin"]}
{"mi": "Nīkora", "gr": "name", "en": ["a male given name, equivalent to English Nicholas"]}
{"mi": "Rōpata", "gr": "name", "en": ["a male given name, equivalent to English Robert"]}
{"mi": "Aoraki", "gr": "name", "en": ["Mount Cook (tallest mountain in New Zealand)"]}
{"mi": "Īemene", "gr": "name", "en": ["Yemen (a country in West Asia in the Middle East)"]}
{"mi": "Tāhuna", "gr": "name", "en": ["Queenstown (a city in New Zealand)"]}
{"mi": "Parīhi", "gr": "name", "en": ["Brazil (a large Portuguese-speaking country in South America)"]}
{"mi": "Kānata", "gr": "name", "en": ["Canada (a country in North America)"]}
{"mi": "Tīekia", "gr": "name", "en": ["Czechia, Czech Republic (a country in Central Europe)"]}
{"mi": "Korana", "gr": "name", "en": ["Golan Heights (a region of Syria)"]}
{"mi": "Takero", "gr": "name", "en": ["Mercury (planet)"]}
{"mi": "Pipiri", "gr": "name", "en": ["The first month of the maramataka (lunar calendar), corresponding to May–June of the Gregorian calendar. Begins after the rising of Matariki."]}
{"mi": "Rāhina", "gr": "name", "en": ["Monday"]}
{"mi": "Rāpare", "gr": "name", "en": ["Thursday"]}
{"mi": "Rāmere", "gr": "name", "en": ["Friday"]}
{"mi": "Rātahi", "gr": "name", "en": ["Monday"]}
{"mi": "Rātoru", "gr": "name", "en": ["Wednesday"]}
{"mi": "Rārima", "gr": "name", "en": ["Friday"]}
{"mi": "Tiaina", "gr": "name", "en": ["China (a large country in East Asia, occupying the region around the Yellow, Yangtze, and Pearl Rivers; the People's Republic of China, since 1949)"]}
{"mi": "Hapani", "gr": "name", "en": ["Japan (a country in Asia)"]}
{"mi": "Urukoi", "gr": "name", "en": ["Uruguay (a country in South America)"]}
{"mi": "Pēnina", "gr": "name", "en": ["Benin (a country in West Africa, formerly Dahomey)"]}
{"mi": "Pūkina", "gr": "name", "en": ["Burkina Faso (a country in West Africa, formerly Upper Volta)"]}
{"mi": "Tipūti", "gr": "name", "en": ["Djibouti (a country in East Africa)"]}
{"mi": "Kāpona", "gr": "name", "en": ["Gabon (a country in Central Africa)"]}
{"mi": "Teroto", "gr": "name", "en": ["Lesotho (a country in Southern Africa)"]}
{"mi": "Marāwi", "gr": "name", "en": ["Malawi (a country in Southern Africa)"]}
{"mi": "Marako", "gr": "name", "en": ["Morocco (a country in North Africa)"]}
{"mi": "Ngāika", "gr": "name", "en": ["Niger (a country in West Africa, situated to the north of Nigeria)"]}
{"mi": "Rāwana", "gr": "name", "en": ["Rwanda (a country in East Africa)"]}
{"mi": "Hūtāne", "gr": "name", "en": ["Sudan (a country in North Africa and East Africa)"]}
{"mi": "Ukānga", "gr": "name", "en": ["Uganda (a country in East Africa)"]}
{"mi": "Hōrano", "gr": "name", "en": ["Jordan (a country in West Asia in the Middle East)"]}
{"mi": "Nepōra", "gr": "name", "en": ["Nepal (a country in Asia)"]}
{"mi": "Tūwaru", "gr": "name", "en": ["Tuvalu (a country and archipelago of Polynesia in Oceania)"]}
{"mi": "Tāwini", "gr": "name", "en": ["Darwin (the capital of the Northern Territory, Australia)"]}
{"mi": "Pōneke", "gr": "name", "en": ["Wellington (the capital city of New Zealand)"]}
{"mi": "Ōtākou", "gr": "name", "en": ["Otago (a region of New Zealand)"]}
{"mi": "Mēhiko", "gr": "name", "en": ["Mexico (a country in North America)"]}
{"mi": "Karirī", "gr": "name", "en": ["Galilee (a mountainous geographic region in northern Israel)"]}
{"mi": "Heriko", "gr": "name", "en": ["Jericho (a city in the West Bank, Palestine)"]}
{"mi": "Nekepe", "gr": "name", "en": ["Negev (a desert region in southern Israel)"]}
{"mi": "Wānaka", "gr": "name", "en": ["a town in Otago, New Zealand"]}
{"mi": "Rānana", "gr": "name", "en": ["London (the capital of England, United Kingdom)"]}
{"mi": "ka kite", "gr": "phrase", "en": ["alternative form of ka kite anō"]}
{"mi": "Miriama", "gr": "name", "en": ["a female given name, equivalent to English Miriam", "Miriam (biblical)"]}
{"mi": "Rāniera", "gr": "name", "en": ["a male given name, equivalent to English Daniel", "Daniel (biblical)"]}
{"mi": "Mikaere", "gr": "name", "en": ["a male given name, equivalent to English Michael", "Michael (Archangel)"]}
{"mi": "Hāmuera", "gr": "name", "en": ["a male given name, equivalent to English Samuel", "Samuel (biblical)"]}
{"mi": "Haimona", "gr": "name", "en": ["a male given name, Simon", "Simon (biblical)"]}
{"mi": "Himiona", "gr": "name", "en": ["a male given name, Simeon", "Simeon (biblical)"]}
{"mi": "Hakihea", "gr": "name", "en": ["The seventh month of the maramataka (lunar calendar), corresponding to November–December of the Gregorian calendar.", "Alpha Centauri"]}
{"mi": "Whanganui", "gr": "name", "en": ["Wanganui (a city and river in New Zealand)"]}
{"mi": "Taiwana", "gr": "name", "en": ["Taiwan (a partly-recognized country in East Asia consisting of a main island and 167 smaller islands)", "Taiwan (an island between the Taiwan Strait and Philippine Sea in East Asia)"]}
{"mi": "whare noho", "gr": "noun", "en": ["hostel, alternative form of wharenoho"]}
{"mi": "Hui-tanguru", "gr": "name", "en": ["The ninth month of the maramataka (lunar calendar), corresponding to January–February of the Gregorian calendar."]}
{"mi": "Etiopia", "gr": "name", "en": ["Ethiopia (a country in East Africa)"]}
{"mi": "Makanui", "gr": "name", "en": ["A Big Mac, a type of hamburger."]}
{"mi": "horonga", "gr": "name", "en": ["avalanche"]}
{"mi": "Huitene", "gr": "name", "en": ["Sweden"]}
{"mi": "Pāniora", "gr": "name", "en": ["Spain (a country in Southern Europe, including most of the Iberian peninsula)"]}
{"mi": "Tiamana", "gr": "name", "en": ["Germany (a country in Central Europe)"]}
{"mi": "Airangi", "gr": "name", "en": ["Ireland (a country in northwestern Europe)"]}
{"mi": "Pehiamu", "gr": "name", "en": ["Belgium (a country in Europe)"]}
{"mi": "Haipara", "gr": "name", "en": ["Cyprus (an island and country in the Mediterranean Sea, normally considered politically part of Europe but geographically part of West Asia)"]}
{"mi": "Hānuere", "gr": "name", "en": ["January (month)"]}
{"mi": "Pēpuere", "gr": "name", "en": ["February (month)"]}
{"mi": "Āperire", "gr": "name", "en": ["April (month)"]}
{"mi": "Ākuhata", "gr": "name", "en": ["August (month)"]}
{"mi": "Oketopa", "gr": "name", "en": ["October (month)"]}
{"mi": "Hawaiki", "gr": "name", "en": ["Hawaiki, the legendary homeland of the Maori before their arrival at Aotearoa (New Zealand), and also the underworld."]}
{"mi": "Mereana", "gr": "name", "en": ["a female given name, equivalent to English Mary Ann"]}
{"mi": "Hāriata", "gr": "name", "en": ["a female given name, equivalent to English Harriet"]}
{"mi": "Ihipera", "gr": "name", "en": ["a female given name, equivalent to English Isabel and Isabella"]}
{"mi": "Hāmiora", "gr": "name", "en": ["a male given name, equivalent to English Samuel"]}
{"mi": "Rakiura", "gr": "name", "en": ["Stewart Island"]}
{"mi": "Ahuriri", "gr": "name", "en": ["Napier (a city in New Zealand)"]}
{"mi": "Ngāmotu", "gr": "name", "en": ["New Plymouth (a city in New Zealand)"]}
{"mi": "Ōtepoti", "gr": "name", "en": ["Dunedin (a city in New Zealand)"]}
{"mi": "Anakora", "gr": "name", "en": ["Angola (a country in Southern Africa)"]}
{"mi": "Āketina", "gr": "name", "en": ["Argentina (a country in South America)"]}
{"mi": "Poriwia", "gr": "name", "en": ["Bolivia (a country in South America)"]}
{"mi": "Poronai", "gr": "name", "en": ["Brunei (a country in Southeast Asia)"]}
{"mi": "Ekuatoa", "gr": "name", "en": ["Ecuador (a country in South America)"]}
{"mi": "Pearīni", "gr": "name", "en": ["Berlin (the capital of Germany)"]}
{"mi": "Mohikau", "gr": "name", "en": ["Moscow (the capital of Russia)"]}
{"mi": "Wenerei", "gr": "name", "en": ["Wednesday"]}
{"mi": "Kōpūnui", "gr": "name", "en": ["Jupiter (planet)"]}
{"mi": "Haratua", "gr": "name", "en": ["The twelfth month of the maramataka (lunar calendar), corresponding to April–May of the Gregorian calendar."]}
{"mi": "Rāhoroi", "gr": "name", "en": ["Saturday"]}
{"mi": "Koramia", "gr": "name", "en": ["Columbia River (a river in the United States)"]}
{"mi": "Urukuai", "gr": "name", "en": ["Uruguay (a country in South America)"]}
{"mi": "Parakai", "gr": "name", "en": ["Paraguay (a country in South America)"]}
{"mi": "Raipiri", "gr": "name", "en": ["Liberia (a country in West Africa, on the Atlantic Ocean, with Monrovia as its capital)"]}
{"mi": "Namīpia", "gr": "name", "en": ["Namibia (a country in Southern Africa)"]}
{"mi": "Hūmārie", "gr": "name", "en": ["Somalia (a country in East Africa, in the Horn of Africa)"]}
{"mi": "Tānahia", "gr": "name", "en": ["Tanzania (a country in East Africa)"]}
{"mi": "Tūnihia", "gr": "name", "en": ["Tunisia (a country in North Africa)"]}
{"mi": "Ukanata", "gr": "name", "en": ["Uganda (a country in Africa)"]}
{"mi": "Tāmipia", "gr": "name", "en": ["Zambia (a country in Southern Africa)"]}
{"mi": "Rōtihia", "gr": "name", "en": ["Rhodesia (a country in Africa)"]}
{"mi": "Tāniora", "gr": "name", "en": ["a male given name, equivalent to English Daniel"]}
{"mi": "Marēhia", "gr": "name", "en": ["Malaysia (a country in Southeast Asia)"]}
{"mi": "Tairana", "gr": "name", "en": ["Thailand (a country in Southeast Asia)"]}
{"mi": "Hironga", "gr": "name", "en": ["Geelong (a city in Victoria, Australia)"]}
{"mi": "Waitohi", "gr": "name", "en": ["Picton (a town in New Zealand)"]}
{"mi": "Māwhera", "gr": "name", "en": ["Greymouth (a town in New Zealand)"]}
{"mi": "Werinia", "gr": "name", "en": ["Virginia (a state of the United States)"]}
{"mi": "Wirinia", "gr": "name", "en": ["Virginia (a state of the United States)"]}
{"mi": "Hemeika", "gr": "name", "en": ["Jamaica (an island and country in the Caribbean)"]}
{"mi": "Aharoro", "gr": "name", "en": ["Ashdod (a city and seaport in Israel, on the Mediterranean Sea)"]}
{"mi": "Tamatea", "gr": "name", "en": ["the Moon, on the 8th night of a lunar month"]}
{"mi": "Mongōria", "gr": "name", "en": ["Mongolia (a country in East Asia)", "Mongolia (a Mongolian-speaking geographic region in East Asia, including the country of Mongolia (Outer Mongolia), the autonomous region of Inner Mongolia in China, and sometimes also Buryatia, Tuva and the Altai Republic in Russia)"]}
{"mi": "Matariki", "gr": "name", "en": ["The season, in late May or early June, when the Pleiades star cluster first rises, treated as the beginning of the new year by the Maori.", "The Pleiades star cluster"]}
{"mi": "Pirihira", "gr": "name", "en": ["a female given name, equivalent to English Priscilla", "Priscilla (biblical)"]}
{"mi": "Herewini", "gr": "name", "en": ["Selwyn (surname; place name)", "a male given name, Selwyn"]}
{"mi": "Māoritanga", "gr": "noun", "en": ["Maoriness, Maoritanga, Maoridom"]}
{"mi": "Waitangi", "gr": "name", "en": ["a locality in the Bay of Islands on the North Island of New Zealand", "a town on the west coast of the Chatham Islands, New Zealand"]}
{"mi": "Kirihimete", "gr": "name", "en": ["Christmas"]}
{"mi": "Pareārau", "gr": "name", "en": ["Jupiter (planet)", "Saturn (planet)"]}
{"mi": "Hinekōrako", "gr": "noun", "en": ["moonbow"]}
{"mi": "Pōhutukawa", "gr": "name", "en": ["Sterope"]}
{"mi": "Rituānia", "gr": "name", "en": ["Lithuania (a country in northeastern Europe)"]}
{"mi": "Potukara", "gr": "name", "en": ["Portugal (a country in Europe)"]}
{"mi": "Tenemāka", "gr": "name", "en": ["Denmark (a country in Northern Europe)"]}
{"mi": "Tiorangi", "gr": "name", "en": ["Iceland (an island and country in the North Atlantic Ocean in Europe)"]}
{"mi": "Koroātia", "gr": "name", "en": ["Croatia (a country on the Balkan Peninsula in Southeastern Europe)"]}
{"mi": "Morotawa", "gr": "name", "en": ["Moldova (a country in Eastern Europe)"]}
{"mi": "Romeinia", "gr": "name", "en": ["Romania"]}
{"mi": "Hepetema", "gr": "name", "en": ["September (month)"]}
{"mi": "Riripeti", "gr": "name", "en": ["a female given name"]}
{"mi": "Ingarihi", "gr": "name", "en": ["English (nationality)"]}
{"mi": "Kaikōura", "gr": "name", "en": ["a town on the east coast of the South Island of New Zealand"]}
{"mi": "Hingapoa", "gr": "name", "en": ["Singapore (an island and city-state in Southeast Asia, located off the southernmost tip of the Malay Peninsula; a former British crown colony and state of Malaysia (1963-1965))"]}
{"mi": "Ōtautahi", "gr": "name", "en": ["Christchurch (a city in New Zealand)"]}
{"mi": "Waihōpai", "gr": "name", "en": ["Invercargill (a city in New Zealand)"]}
{"mi": "Kānapera", "gr": "name", "en": ["Canberra (the capital city of Australia; located in the Australian Capital Territory)"]}
{"mi": "Piripane", "gr": "name", "en": ["Brisbane (the capital of Queensland, Australia)"]}
{"mi": "Ātaraita", "gr": "name", "en": ["Adelaide (the capital of South Australia, Australia)"]}
{"mi": "Whērangi", "gr": "name", "en": ["Uranus (planet)"]}
{"mi": "Hongonui", "gr": "name", "en": ["The second month of the maramataka (lunar calendar), corresponding to June–July of the Gregorian calendar."]}
{"mi": "Hurināme", "gr": "name", "en": ["Suriname (a country in South America)"]}
{"mi": "Hurinamo", "gr": "name", "en": ["Suriname (a country in South America)"]}
{"mi": "Aratiria", "gr": "name", "en": ["Algeria (a country in North Africa)"]}
{"mi": "Poriwana", "gr": "name", "en": ["Botswana (a country in Southern Africa)"]}
{"mi": "Puruniti", "gr": "name", "en": ["Burundi (a country in East Africa)"]}
{"mi": "Kamarūna", "gr": "name", "en": ["Cameroon (a country in Central Africa)"]}
{"mi": "Eritēria", "gr": "name", "en": ["Eritrea (a country in East Africa, on the Red Sea)"]}
{"mi": "Tiriporī", "gr": "name", "en": ["Tripoli (a city in Libya)"]}
{"mi": "Mohapiki", "gr": "name", "en": ["Mozambique (a country in East Africa and Southern Africa)"]}
{"mi": "Henekara", "gr": "name", "en": ["Senegal (a country in West Africa)"]}
{"mi": "Timuwawe", "gr": "name", "en": ["Zimbabwe (a country in Southern Africa)"]}
{"mi": "Piripīni", "gr": "name", "en": ["Philippines (a country in Southeast Asia)"]}
{"mi": "Repanona", "gr": "name", "en": ["Lebanon (a country in Asia)"]}
{"mi": "Kehitāna", "gr": "name", "en": ["Kyrgyzstan (a country in Central Asia, bordering on Kazakhstan, Uzbekistan, Tajikistan and China)"]}
{"mi": "Pakitāne", "gr": "name", "en": ["Pakistan (a country in South Asia)"]}
{"mi": "Kiripāti", "gr": "name", "en": ["Kiribati (a country in Oceania)"]}
{"mi": "Whenuatū", "gr": "name", "en": ["Vanuatu (a country and archipelago of Melanesia in Oceania)"]}
{"mi": "Paramata", "gr": "name", "en": ["Parramatta (a suburb of Sydney, New South Wales, Australia)"]}
{"mi": "Pararata", "gr": "name", "en": ["Ballarat (a city in Victoria, Australia)"]}
{"mi": "Parahara", "gr": "name", "en": ["Brussels (the capital city of Belgium)"]}
{"mi": "Hakatere", "gr": "name", "en": ["Ashburton (a town in New Zealand)"]}
{"mi": "Maruawai", "gr": "name", "en": ["Gore (a town in New Zealand)"]}
{"mi": "Waikanae", "gr": "name", "en": ["a town in Kapiti Coast district, Wellington region, New Zealand."]}
{"mi": "Nahareta", "gr": "name", "en": ["Nazareth (a city in northern Israel)"]}
{"mi": "Taipīria", "gr": "name", "en": ["Tiberias (a town in the Northern District, on the Sea of Galilee in Israel)"]}
{"mi": "Terewiwi", "gr": "name", "en": ["Tel Aviv (a city in Israel that later merged with Jaffa to form Tel Aviv-Yafo)"]}
{"mi": "Heperona", "gr": "name", "en": ["Hebron (a city in the West Bank, Palestine; holy in both Judaism and Islam)"]}
{"mi": "Harawīni", "gr": "name", "en": ["Halloween"]}
{"mi": "Hongipua", "gr": "name", "en": ["Hong Kong (a city, island and special administrative region in southeastern China)"]}
{"mi": "Kōtirana", "gr": "name", "en": ["Scotland (a constituent country of the United Kingdom)"]}
{"mi": "Wairarapa", "gr": "name", "en": ["Wairarapa (a lake in southern North Island, New Zealand)", "Wairarapa (a geographical region in southeastern North Island, New Zealand)"]}
{"mi": "Niukāhera", "gr": "name", "en": ["Newcastle (a city in New South Wales, Australia)", "Any other city called Newcastle"]}
{"mi": "Whakatāne", "gr": "name", "en": ["Whakatane (a town in New Zealand)", "Whakatane (a river in New Zealand)"]}
{"mi": "Tamanuiterā", "gr": "name", "en": ["the Sun (star)"]}
{"mi": "Peretānia", "gr": "name", "en": ["Britain", "United Kingdom (a kingdom and country in Northern Europe)"]}
{"mi": "Papatūānuku", "gr": "name", "en": ["mother earth deity in Māori mythology spouse to Ranginui"]}
{"mi": "Papatūānuku", "gr": "name", "en": ["the Earth (third planet of the Solar System)"]}
{"mi": "Ūkareinga", "gr": "name", "en": ["Ukraine (a country in Eastern Europe, bordering on the north shore of the Black Sea)"]}
{"mi": "Hinerangi", "gr": "name", "en": ["a female given name"]}
{"mi": "Katatānga", "gr": "name", "en": ["Kazakhstan (a country in Central Asia and Eastern Europe)"]}
{"mi": "Arapeinia", "gr": "name", "en": ["Albania (a country in Southeastern Europe)"]}
{"mi": "Hanekeria", "gr": "name", "en": ["Hungary (a country in Europe)"]}
{"mi": "Horowākia", "gr": "name", "en": ["Slovakia (a country in Central Europe)"]}
{"mi": "Purukāria", "gr": "name", "en": ["Bulgaria (a country in Southeastern Europe)"]}
{"mi": "Irihāpeti", "gr": "name", "en": ["a female given name, equivalent to English Elizabeth"]}
{"mi": "Kararaina", "gr": "name", "en": ["a female given name, equivalent to English Caroline"]}
{"mi": "Wikitōria", "gr": "name", "en": ["a female given name, equivalent to English Victoria"]}
{"mi": "Whangārei", "gr": "name", "en": ["Whangarei (a city in New Zealand)"]}
{"mi": "Kamapōtia", "gr": "name", "en": ["Cambodia (a country in Asia)"]}
{"mi": "Koromōpia", "gr": "name", "en": ["Colombia (a country in South America)"]}
{"mi": "Karapōnia", "gr": "name", "en": ["California (the most populous state of the United States)"]}
{"mi": "Poihākena", "gr": "name", "en": ["Sydney, Port Jackson (the capital of New South Wales, Australia)"]}
{"mi": "Poipiripi", "gr": "name", "en": ["Melbourne, Port Philip (the capital of Victoria, Australia)"]}
{"mi": "Matawhero", "gr": "name", "en": ["Mars (planet)"]}
{"mi": "Wenehūera", "gr": "name", "en": ["Venezuela (a country in South America)"]}
{"mi": "Penehūera", "gr": "name", "en": ["Venezuela (a country in South America)"]}
{"mi": "Warerangi", "gr": "name", "en": ["Eswatini, Swaziland (a country in Southern Africa, formerly called Swaziland)"]}
{"mi": "Marakāhia", "gr": "name", "en": ["Madagascar (an island and country off the east coast of Africa)"]}
{"mi": "Ngāitiria", "gr": "name", "en": ["Nigeria (a country in West Africa, south of the country of Niger)"]}
{"mi": "Whitināma", "gr": "name", "en": ["Vietnam (a country in Southeast Asia)"]}
{"mi": "Whitināmu", "gr": "name", "en": ["Vietnam (a country in Asia)"]}
{"mi": "Hopatāone", "gr": "name", "en": ["Hobart (the capital of Tasmania, Australia)"]}
{"mi": "Peratiamu", "gr": "name", "en": ["Belgium (a country in Western Europe that has borders with the Netherlands, Germany, Luxembourg and France)"]}
{"mi": "Peretiama", "gr": "name", "en": ["Belgium (a country in Europe)"]}
{"mi": "Paratiamu", "gr": "name", "en": ["Belgium (a country in Europe)"]}
{"mi": "Wikitoria", "gr": "name", "en": ["a female given name, equivalent to English Victoria"]}
{"mi": "Motupōhue", "gr": "name", "en": ["Bluff (a town in New Zealand)"]}
{"mi": "Patakonia", "gr": "name", "en": ["Patagonia (a region of South America)"]}
{"mi": "Erinipara", "gr": "name", "en": ["Edinburgh (the capital of Scotland, United Kingdom)"]}
{"mi": "Hiruhārama", "gr": "name", "en": ["Jerusalem (a city in the Holy Land between the Mediterranean Sea and Dead Sea, holy in Judaism, Christianity and Islam; the claimed capital city of both Israel and Palestine)", "a settlement in Gisborne District, New Zealand", "a settlement in the Manawatū-Whanganui region, New Zealand"]}
{"mi": "Wikiperia", "gr": "name", "en": ["Wikipedia"]}
{"mi": "Kōtirangi", "gr": "name", "en": ["Scotland (a constituent country of the United Kingdom)"]}
{"mi": "Huiterangi", "gr": "name", "en": ["Switzerland (a country in Western Europe and Central Europe)"]}
{"mi": "Initonīhia", "gr": "name", "en": ["Indonesia (a country and archipelago in maritime Southeast Asia)"]}
{"mi": "Heretaunga", "gr": "name", "en": ["Hastings (a city in New Zealand)"]}
{"mi": "Pākaratēhi", "gr": "name", "en": ["Bangladesh (a country in South Asia)"]}
{"mi": "Matakahaka", "gr": "name", "en": ["Madagascar (an island and country off the east coast of Africa)"]}
{"mi": "Mauritānia", "gr": "name", "en": ["Mauritania (a country in West Africa)"]}
{"mi": "Parihitini", "gr": "name", "en": ["Palestine (a country in Asia)"]}
{"mi": "Tahikitāna", "gr": "name", "en": ["Tajikistan (a country in Central Asia)"]}
{"mi": "Tāonewhīra", "gr": "name", "en": ["Townsville (a city in Queensland, Australia)"]}
{"mi": "Tairāwhiti", "gr": "name", "en": ["Gisborne (a city in New Zealand)"]}
{"mi": "Peterehema", "gr": "name", "en": ["Bethlehem (a city in the West Bank, Palestine, believed to be the birthplace of Jesus)"]}
{"mi": "Ahitereiria", "gr": "name", "en": ["Australia (a country consisting of a main island, the island of Tasmania and other smaller islands, located in Oceania; historically, a collection of former colonies of the British Empire)", "Australia (a continent consisting of the land on the Australian tectonic plate, i.e. Australia, New Guinea and intervening islands)"]}
{"mi": "Kāi", "gr": "noun", "en": ["alternative form of Ngāi."]}
{"mi": "Atepaihānia", "gr": "name", "en": ["Azerbaijan (a country in the South Caucasus in Asia and Europe)"]}
{"mi": "Pakangakite", "gr": "name", "en": ["Warsaw"]}
{"mi": "Paraparaumu", "gr": "name", "en": ["a town in Kapiti Coast district, Wellington region, New Zealand."]}
{"mi": "Kirikiriroa", "gr": "name", "en": ["Hamilton (a city in New Zealand)"]}
{"mi": "Waiharakeke", "gr": "name", "en": ["Blenheim (a city in New Zealand)"]}
{"mi": "Hineitīweka", "gr": "name", "en": ["Jupiter (planet)"]}
{"mi": "Rangawhenua", "gr": "name", "en": ["Jupiter (planet)"]}
{"mi": "Uhipeketāne", "gr": "name", "en": ["Uzbekistan (a country in Central Asia)"]}
{"mi": "Kaperenauma", "gr": "name", "en": ["Capernaum (an ancient town in Galilee, Israel, a biblical and archaeological site)"]}
{"mi": "Ngāruawāhia", "gr": "name", "en": ["a town in the Waikato region of the North Island of New Zealand"]}
{"mi": "Paekākāriki", "gr": "name", "en": ["a town in Kapiti Coast district, Wellington region, New Zealand."]}
{"mi": "Āwhekenetāna", "gr": "name", "en": ["Afghanistan (a landlocked country between Central Asia and South Asia)"]}
{"mi": "Paratipotoka", "gr": "name", "en": ["Vladivostok (a city in Russia)"]}
{"mi": "Wūrongikongi", "gr": "name", "en": ["Wollongong (a city in New South Wales, Australia)"]}
{"mi": "Paenga-whāwhā", "gr": "name", "en": ["The eleventh month of the maramataka (lunar calendar), corresponding to March–April of the Gregorian calendar.", "Pegasus (consellation)"]}
{"mi": "Tukumanatānga", "gr": "name", "en": ["Turkmenistan (a country in Central Asia)"]}
{"mi": "Ngai", "gr": "noun", "en": ["alternative spelling of Ngāi."]}
{"mi": "Poutū-te-rangi", "gr": "name", "en": ["The tenth month of the maramataka (lunar calendar), corresponding to February–March of the Gregorian calendar.", "Altair (star in Aquila)"]}
{"mi": "te reo", "gr": "name", "en": ["The Māori language.", "Used other than figuratively or idiomatically: see te, reo."]}
{"mi": "Here-turi-kōkā", "gr": "name", "en": ["The third month of the maramataka (lunar calendar), corresponding to July–August of the Gregorian calendar."]}
{"mi": "Ngaai", "gr": "noun", "en": ["Alternative form of Ngāi."]}
{"mi": "Ngati", "gr": "noun", "en": ["alternative spelling of Ngāti."]}
{"mi": "Whiringa-ā-nuku", "gr": "name", "en": ["The fifth month of the maramataka (lunar calendar), corresponding to September–October of the Gregorian calendar."]}
{"mi": "Ngaati", "gr": "noun", "en": ["Alternative form of Ngāti."]}
{"mi": "Niu Ioka", "gr": "name", "en": ["New York, New York City (the largest city in the state of New York, and the largest city in the United States, a metropolis extending into neighboring New Jersey in addition to Pennsylvania and Connecticut)", "New York (a state of the United States)"]}
{"mi": "Whiringa-ā-rangi", "gr": "name", "en": ["The sixth month of the maramataka (lunar calendar), corresponding to October–November of the Gregorian calendar."]}
{"mi": "Rehua", "gr": "name", "en": ["alternative form of Kohi-tātea", "star Antares in Scorpius"]}
{"mi": "Maori", "gr": "name", "en": ["alternative spelling of Māori."]}
{"mi": "Maata", "gr": "name", "en": ["obsolete spelling of Māta"]}
{"mi": "Waata", "gr": "name", "en": ["a male given name, equivalent to English Walter: obsolete spelling of Wāta"]}
{"mi": "Maaka", "gr": "name", "en": ["a male given name, equivalent to English Mark: obsolete spelling of Māka"]}
{"mi": "Manei", "gr": "name", "en": ["alternative form of Mane"]}
{"mi": "Hononga-o-Amerika", "gr": "name", "en": ["the United States (a country in North America)"]}
{"mi": "Pōngia-Herekōmina", "gr": "name", "en": ["Bosnia and Herzegovina (a country on the Balkan Peninsula in Southeastern Europe)"]}
{"mi": "Kini Pihō", "gr": "name", "en": ["Guinea-Bissau (a country in West Africa)"]}
{"mi": "Te Araone", "gr": "name", "en": ["Sierra Leone (a country in West Africa)"]}
{"mi": "Papua Nūkini", "gr": "noun", "en": ["Papua New Guinea (a country in Oceania)"]}
{"mi": "Tūranga-nui-a-Kiwa", "gr": "name", "en": ["Gisborne (a city in New Zealand)"]}
{"mi": "Manawatū-Whanganui", "gr": "name", "en": ["Manawatu-Wanganui (a region of New Zealand)"]}
{"mi": "Rōpū Reipa", "gr": "name", "en": ["Labour Party"]}
{"mi": "Te Kamopia", "gr": "name", "en": ["The Gambia, Gambia (a country in West Africa)"]}
{"mi": "Te Tai Rei", "gr": "name", "en": ["Ivory Coast, Côte d'Ivoire (a country in West Africa)"]}
{"mi": "Miki Kiore", "gr": "name", "en": ["Mickey Mouse"]}
{"mi": "Niu Tīreni", "gr": "name", "en": ["New Zealand."]}
{"mi": "Poho o Pita", "gr": "name", "en": ["Vatican"]}
{"mi": "Kaiana Wīwī", "gr": "name", "en": ["French Guiana (an overseas department and administrative region of France in South America)"]}
{"mi": "Kēpa Weriti", "gr": "name", "en": ["Cape Verde (a country in Africa)"]}
{"mi": "Hiri Rānaka", "gr": "name", "en": ["Sri Lanka (a country in Asia)"]}
{"mi": "Kuki Airani", "gr": "name", "en": ["Cook Islands (an archipelago and self-governing country in Oceania, in free association with New Zealand)"]}
{"mi": "Ngā Ānahera", "gr": "name", "en": ["Los Angeles (a city in California, United States)"]}
{"mi": "Paretai Uru", "gr": "name", "en": ["West Bank (a region of Palestine)"]}
{"mi": "Tūwehe Tīeke", "gr": "name", "en": ["Czech Republic (a country in Europe)"]}
{"mi": "Te Tai Kōura", "gr": "name", "en": ["the Gold Coast (a city in Queensland, Australia)"]}
{"mi": "Whinarana", "gr": "name", "en": ["alternative form of Whinirana"]}
{"mi": "Kohitātea", "gr": "name", "en": ["alternative spelling of Kohi-tātea"]}
{"mi": "Meri Kirihimete", "gr": "noun", "en": ["merry Christmas"]}
{"mi": "Te Papa-i-Oea", "gr": "name", "en": ["Palmerston North (a city in New Zealand)"]}
{"mi": "Rōpū Nāhinara", "gr": "name", "en": ["National Party"]}
{"mi": "Rōpū Kākāriki", "gr": "name", "en": ["Green Party"]}
{"mi": "Te Ika-a-Māui", "gr": "name", "en": ["North Island (an island of New Zealand)"]}
{"mi": "Te Waipounamu", "gr": "name", "en": ["South Island (an island of New Zealand)"]}
{"mi": "Hana Paraniko", "gr": "name", "en": ["San Francisco (a city in California, United States)"]}
{"mi": "Te Moana Mate", "gr": "name", "en": ["Dead Sea (a lake in the Middle East in Palestine and Jordan, noted for high salinity and for its banks being the lowest land-based elevation on Earth)"]}
{"mi": "Te Riu-a-Māui", "gr": "name", "en": ["Zealandia, a large mass of continental crust around the islands of New Zealand."]}
{"mi": "Huitanguru", "gr": "name", "en": ["alternative spelling of Hui-tanguru"]}
{"mi": "Ao-tea-roa", "gr": "name", "en": ["alternative form of Aotearoa"]}
{"mi": "Te Moana-a-Toi", "gr": "name", "en": ["Bay of Plenty (a sea and bay of the Bay of Plenty Region, North Island, New Zealand)", "Bay of Plenty (an administrative region of the North Island, New Zealand, surrounding the eponymous bay)"]}
{"mi": "Kini Ekuatoria", "gr": "name", "en": ["Equatorial Guinea (a country in Central Africa)"]}
{"mi": "Te Waka-a-Māui", "gr": "name", "en": ["South Island (an island of New Zealand)"]}
{"mi": "Rāwhiti Waenga", "gr": "name", "en": ["Middle East (the geopolitical region at the intersection of Asia, Africa and Europe, comprising West Asia excluding the South Caucasus and additionally including all of Egypt and all of Turkey)"]}
{"mi": "Pō whakamataku", "gr": "name", "en": ["Halloween"]}
{"mi": "Pāremata Aotearoa", "gr": "noun", "en": ["New Zealand Parliament"]}
{"mi": "Tāmaki Makaurau", "gr": "name", "en": ["Auckland (a city in New Zealand)"]}
{"mi": "Hereturikōkā", "gr": "name", "en": ["alternative spelling of Here-turi-kōkā"]}
{"mi": "Poutūterangi", "gr": "name", "en": ["alternative spelling of Poutū-te-rangi"]}
{"mi": "Paengawhāwhā", "gr": "name", "en": ["alternative spelling of Paenga-whāwhā"]}
{"mi": "Te Pāpaka-a-Māui", "gr": "name", "en": ["Australia (a country consisting of a main island, the island of Tasmania and other smaller islands, located in Oceania; historically, a collection of former colonies of the British Empire)", "Australia (a continent consisting of the land on the Australian tectonic plate, i.e. Australia, New Guinea and intervening islands)"]}
{"mi": "Rūhī-te-rangi", "gr": "name", "en": ["alternative form of Hui-tanguru (used by iwi Ngāti Awa)", "star in Scorpius"]}
{"mi": "Ngāi-", "gr": "noun", "en": ["Alternative form of Ngāi."]}
{"mi": "Te Awarua o Kāha", "gr": "name", "en": ["Gaza Strip (a region in Palestine between Egypt and Israel)"]}
{"mi": "Te Puia Whakaari", "gr": "name", "en": ["White Island (An active volcano located in the Bay of Plenty, New Zealand)"]}
{"mi": "Whiringa ki Tawhiti", "gr": "noun", "en": ["Pluto"]}
{"mi": "Ngāti-", "gr": "noun", "en": ["Alternative form of Ngāti."]}
{"mi": "Kīngitanga Kotahi", "gr": "name", "en": ["United Kingdom (a kingdom and country in Northern Europe)"]}
{"mi": "Te Kūrae Matomato", "gr": "name", "en": ["Cape Verde (an archipelago and country in West Africa)"]}
{"mi": "te Whenua o Kōngo", "gr": "name", "en": ["Democratic Republic of the Congo (a country in Central Africa, the larger of the two countries named Congo)"]}
{"mi": "Ngā Motu Horomona", "gr": "name", "en": ["Solomon Islands (a country in Oceania)"]}
{"mi": "Te Puku o Āwherika", "gr": "name", "en": ["Central African Republic (a country in Central Africa)"]}
{"mi": "Te Whanganui-a-Tara", "gr": "name", "en": ["Wellington (the capital city of New Zealand)"]}
{"mi": "Te Moana-nui-a-Kiwa", "gr": "name", "en": ["Pacific Ocean (an ocean, the world's largest body of water, to the east of Asia and Australasia and to the west of the Americas)"]}
{"mi": "Āwherika ki te Tonga", "gr": "name", "en": ["South Africa (a country in Southern Africa)"]}
{"mi": "whānau a Tamanuiterā", "gr": "name", "en": ["the Solar System (the Sun and all the heavenly bodies that orbit around it)"]}
{"mi": "Nu Tīreni", "gr": "name", "en": ["alternative form of Niu Tīreni."]}
{"mi": "Niu Tireni", "gr": "name", "en": ["alternative spelling of Niu Tīreni."]}
{"mi": "Niu Tīrani", "gr": "name", "en": ["alternative form of Niu Tīreni."]}
{"mi": "Niu Tīrene", "gr": "name", "en": ["alternative form of Niu Tīreni."]}
{"mi": "Nui Tīreni", "gr": "name", "en": ["alternative form of Niu Tīreni."]}
{"mi": "Tāmaki Makau Rau", "gr": "name", "en": ["alternative form of Tāmaki Makaurau"]}
{"mi": "Te Ika-nui-a-Māui", "gr": "name", "en": ["alternative form of Te Ika-a-Māui"]}
{"mi": "Te Rotorua-nui-a-Kahumatamomoe", "gr": "name", "en": ["Rotorua (a city in New Zealand)"]}
{"mi": "Kotahitanga o ngā Whenua Ārapi", "gr": "name", "en": ["United Arab Emirates (a country in Asia)"]}
`;var yr=[],Ut={},Xa=location.hostname=="localhost";function Qa(c){return c.en.length?c.en[0]:""}function kr(c){let r=c.slice(0),i=r.length-1;for(;i>0;){let u=Math.floor(Math.random()*(i+1)),s=r[i];r[i]=r[u],r[u]=s,i--}return r}function fs(c,r,i,u,s){u=kr(u);for(let d=0,p=De(u),v=p.length;d<v;d++){let j=p[d];if(c.length>=s)break;r[j.mi]||i[Qa(j)]||(r[j.mi]=!0,i[Qa(j)]=!0,c.push(j))}}for(let c=0,r=De(ds.split(`
`)),i=r.length;c<i;c++){let s=r[c].trim();if(!s)continue;let d=JSON.parse(s),p={id:yr.length,mi:d.mi,gr:d.gr,en:d.en||[]};yr.push(p),Ut[p.gr]||(Ut[p.gr]=[]),Ut[p.gr].push(p)}function Gt(c){return yr[c]}function Vt(c){let r=[];for(let i=0,u=De(c),s=u.length;i<s;i++){let d=u[i];r.push(d.id)}return r}function eo(c){let r=yr.length,i=c.length,u=r?Math.round(i*100/r):0;return{count:i,total:r,percent:u}}function no(c,r){let i=new Set(r||[]),u=[];for(let s=0,d=De(yr),p=d.length;s<p;s++){let v=d[s];i.has(v.id)||u.push(v)}return u.slice(0,c)}function Lr(c,r=3){let i=[],u={},s={};return u[c.mi]=!0,s[Qa(c)]=!0,fs(i,u,s,Ut[c.gr]||[],r),i.length<r&&fs(i,u,s,yr,r),i}J();J();var Jt=Gg(ps(),1),vs=Symbol.for("Dexie"),Yt=globalThis[vs]||(globalThis[vs]=Jt.default);if(Jt.default.semVer!==Yt.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Jt.default.semVer} and ${Yt.semVer}`);var{liveQuery:Zf,mergeRanges:Uf,rangesOverlap:Gf,RangeSet:Vf,cmp:Jf,Entity:Yf,PropModification:Qf,replacePrefix:Xf,add:ep,remove:np,DexieYProvider:rp}=Yt;var bs=Yt;var ys=new bs("learn-maori");ys.version(1).stores({progress:"key"});var io=ys.table("progress"),ir="in-progress",On="learned";async function bn(c){let r=await io.get(c);return r&&r.ids?r.ids.slice(0):[]}async function zr(c,r){return await io.put({key:c,ids:r}),r}async function ks(){return await io.clear(),!0}var ao="theme";function ws(c){try{return globalThis.localStorage.getItem(c)}catch{return null}}function xs(c,r){try{return globalThis.localStorage.setItem(c,r)}catch{return null}}J();Rn(),on();var Pc=Symbol.for("#beforeReconcile"),oo=Symbol.for("##up"),Qt=Symbol.for("#placeChild"),Mc=Symbol.for("#afterVisit"),Ic=Symbol.for("#afterReconcile"),Ss=Symbol(),_s=Symbol(),Ts=Symbol(),Es=Symbol(),As=Symbol(),$s=Symbol();var uo=Symbol();var so=Symbol();var lo=Symbol(),Cs=Symbol(),js=Symbol(),Ns=Symbol(),Ps=Symbol(),Ms=Symbol(),Rc=Symbol(),Xt=class Xt extends We{[ke](r=null,i=!0,u=!0){var s;super[ke](...arguments),this.q=r&&(s=r.q)!==void 0?s:null,this.emitter=r&&(s=r.emitter)!==void 0?s:null}pickΞopt(r){if(!(this.q&&this.q.pick)&&this.q&&(this.q.pick=r,this.emitter))return this.emitter(r)}render(){var r=this,i,u,s,d,p,v=this._ns_||"",j,N,K,P,ue,Q,X,ae,Z,me,oe,ee,te;if(s=this,s[Pc](),d=p=1,s[Ss]===1||(d=p=0,s[Ss]=1),i=u=null,this.q){j=N=1,(i=s[_s])||(j=N=0,s[_s]=i=D("div",null,`q-prompt ${v}`,null,null)),j||(i[oo]=s),K=this.q.prompt,K===i[Es]&&j||(i[Ts]=i[Qt](i[Es]=K,384,i[Ts])),P=ue=1,(u=s[As])||(P=ue=0,s[As]=u=D("div",null,`word-list ${v}`,null,null)),P||(u[oo]=s),(Q=u[$s])||(u[$s]=Q=Gu(384,u)),X=0,ae=Q.$;for(let Y=0,he=De(this.q.options),se=he.length;Y<se;Y++){let F=he[Y];me=oe=1,(Z=ae[X])||(me=oe=0,ae[X]=Z=D("div",Q,`options-btn ${v}`,null,null)),me||(Z[oo]=Q),ee=this.q.pick&&F==this.q.correct||void 0,ee===Z[uo]||(oe|=2,Z[uo]=ee),ee=this.q.pick&&this.q.pick!=this.q.correct&&F==this.q.pick||void 0,ee===Z[so]||(oe|=2,Z[so]=ee),ee=this.q.pick&&F!=this.q.correct&&F!=this.q.pick||void 0,ee===Z[lo]||(oe|=2,Z[lo]=ee),te=Z[Cs]||(Z[Cs]={$_:[function(ve,fe,Re){return r.pickΞopt(Re)},null]}),te.$_[1]=F,me||Z.on$("click",te,this),oe&2&&Z.flag$(`options-btn ${v} `+(Z[uo]?"right":"")+" "+(Z[so]?"wrong":"")+" "+(Z[lo]?"dim":""),null),ee=F,ee===Z[Ns]&&me||(Z[js]=Z[Qt](Z[Ns]=ee,384,Z[js])),X++}Q[Mc](X)}return s[Ps]=s[Qt](i,0,s[Ps]),s[Ms]=s[Qt](u,0,s[Ms]),s[Ic](p),s}};G(Xt,Rc,"mcq",2),pn("mcq",Xt,{cssns:"dd_af",cssid:"dd-af"});var Is=Xt;J();Rn(),on();var Oc=Symbol.for("#beforeReconcile"),Xe=Symbol.for("##up"),Ie=Symbol.for("#placeChild"),Rs=Symbol.for("#afterVisit"),Kc=Symbol.for("#afterReconcile"),Os=Symbol(),Ks=Symbol(),Ds=Symbol(),Fs=Symbol(),qs=Symbol(),Bs=Symbol(),Hs=Symbol(),Ws=Symbol(),Ls=Symbol(),zs=Symbol(),Zs=Symbol(),Us=Symbol(),Gs=Symbol(),Vs=Symbol(),Js=Symbol(),Ys=Symbol(),Qs=Symbol(),Xs=Symbol(),el=Symbol(),nl=Symbol(),rl=Symbol(),tl=Symbol(),il=Symbol(),al=Symbol(),ol=Symbol(),ul=Symbol(),sl=Symbol(),ll=Symbol(),ml=Symbol(),gl=Symbol(),hl=Symbol(),cl=Symbol(),dl=Symbol(),fl=Symbol(),pl=5;function Zr(c){return c.en.length?c.en[0]:""}function Dc(c){return c.gr.length?c.gr:""}var Fc=Symbol(),ei=class ei extends We{[ke](r=null,i=!0,u=!0){var s;super[ke](...arguments),this.phase=r&&(s=r.phase)!==void 0?s:"loading",this.round=r&&(s=r.round)!==void 0?s:"maori-en",this.batch=r&&(s=r.batch)!==void 0?s:[],this.queue=r&&(s=r.queue)!==void 0?s:[],this.question=r&&(s=r.question)!==void 0?s:null,this.attempts=r&&(s=r.attempts)!==void 0?s:0,this.misses=r&&(s=r.misses)!==void 0?s:0}async mount(){return await this.setup()}async setup(){let r=await bn(ir),i=await bn(On),u=r.length?r:Vt(no(pl,i));return this.batch=this.entriesΞfor(u),r.length||await zr(ir,Vt(this.batch)),this.phase="review",Ne()}entriesΞfor(r){let i=[];for(let u=0,s=De(r),d=s.length;u<d;u++){let p=s[u],v=Gt(p);v&&i.push(v)}return i}startΞquiz(r){return this.queue=this.batch.slice(0),this.round=r,this.attempts=0,this.misses=0,this.phase="quiz",this.nextΞquestion()}nextΞquestion(){if(!this.queue.length){if(this.round=="maori-en")return this.startΞquiz("en-maori");this.completeΞbatch();return}let r=this.queue[0];if(this.round=="maori-en"){let i=[Zr(r)];for(let u=0,s=De(Lr(r,3)),d=s.length;u<d;u++){let p=s[u];i.push(Zr(p))}return this.question={entry:r,prompt:"What does “"+r.mi+"” ("+r.gr+") mean?",options:kr(i),correct:Zr(r),pick:null,wasΞright:!1}}else{let i=[r.mi];for(let u=0,s=De(Lr(r,3)),d=s.length;u<d;u++){let p=s[u];i.push(p.mi)}return this.question={entry:r,prompt:"How do you say “"+Zr(r)+"” ("+Dc(r)+") in te reo Māori?",options:kr(i),correct:r.mi,pick:null,wasΞright:!1}}}answerΞpicked(r){let i=this.question;if(!i)return;this.attempts++;let u=r==i.correct;return u||(this.misses++,this.queue.push(i.entry)),i.wasΞright=u,i.pick=r}advance(){if(this.phase!="quiz")return;let r=this.question;if(r&&r.pick)return this.queue.shift(),r.pick=null,this.nextΞquestion()}async completeΞbatch(){this.phase="review";let r=await bn(On);for(let u=0,s=De(this.batch),d=s.length;u<d;u++){let p=s[u];r.indexOf(p.id)==-1&&r.push(p.id)}await zr(On,r),await zr(ir,[]);let i=Vt(no(pl,r));return await zr(ir,i),this.batch=this.entriesΞfor(i),Ne()}render(){var r=this,i,u,s,d,p,v,j,N,K=this._ns_||"",P,ue,Q,X,ae,Z,me,oe,ee,te,Y,he,se,F,ve,fe,Re,Oe,Fe,Ae,Se,be,ce,$e,Ge,yn,kn,Dn,qe,we,_e,Be,rn,Ve,Je,ui,tn,wr,wn,ln,mn,Vr,W;if(v=this,v[Oc](),j=N=1,v[Os]===1||(j=N=0,v[Os]=1),j||(P=D("div",v,`page-head ${K}`,null,null)),j||(ue=D("button",P,`back ${K}`,"Back",null)),j||ue.on$("click",{$_:[function(Le,Fn){return r.emit("close")}]},this),j||(Q=D("h1",P,`${K}`,"Stage 1 · Learn words",null)),u=s=d=p=null,this.phase=="loading")X=ae=1,(u=v[Ks])||(X=ae=0,v[Ks]=u=D("div",null,`tracker ${K}`,"Loading progress…",null)),X||(u[Xe]=v);else if(this.phase=="review")if(this.batch.length){Z=me=1,(u=v[Ds])||(Z=me=0,v[Ds]=u=D("h2",null,`${K}`,null,null)),Z||(u[Xe]=v),Z||u[Ie]("New words ("),oe=this.batch.length,oe===u[qs]&&Z||(u[Fs]=u[Ie](u[qs]=oe,0,u[Fs])),Z||u[Ie](")"),ee=te=1,(s=v[Bs])||(ee=te=0,v[Bs]=s=D("div",null,`word-list ${K}`,null,null)),ee||(s[Xe]=v),(Y=s[Hs])||(s[Hs]=Y=Qu(384,s)),he=0,se=Y.$;for(let Le=0,Fn=De(this.batch),or=Fn.length;Le<or;Le++){let ie=Fn[Le];ve=Re=1,(F=se.get(fe=ie.id))||(ve=Re=0,se.set(fe,F=D("div",null,`word ${K}`,null,null))),ve||(F[Xe]=Y),(Oe=F[Ws])||(F[Ws]=Oe=D("span",F,`mi ${K}`,null,null)),Fe=ie.mi,Fe===F[zs]&&ve||(F[Ls]=Oe[Ie](F[zs]=Fe,384,F[Ls])),ve||(Ae=D("span",F,`gr ${K}`,null,null)),(Se=F[Zs])||(F[Zs]=Se=D("i",Ae,`${K}`,null,null)),be=ie.gr,be===F[Gs]&&ve||(F[Us]=Se[Ie](F[Gs]=be,384,F[Us])),(ce=F[Vs])||(F[Vs]=ce=D("div",F,`en ${K}`,null,null)),Pe.context=F[Ys]||(F[Ys]={_:ce}),$e=Zr(ie),Pe.context=null,$e===F[Qs]&&ve||(F[Js]=ce[Ie](F[Qs]=$e,384,F[Js])),Y.push(F,he++,fe)}Y[Rs](he),Ge=yn=1,(d=v[Xs])||(Ge=yn=0,v[Xs]=d=D("div",null,`row ${K}`,null,null)),Ge||(d[Xe]=v),Ge||(kn=D("button",d,`next-btn ${K}`,"Test me",null)),Ge||kn.on$("click",{$_:[function(Le,Fn){return r.startΞquiz("maori-en")}]},this)}else Dn=qe=1,(u=v[el])||(Dn=qe=0,v[el]=u=D("div",null,`tracker ${K}`,"Kua oti! You have learned every word in the dictionary.",null)),Dn||(u[Xe]=v);else this.phase=="quiz"&&(we=_e=1,(u=v[nl])||(we=_e=0,v[nl]=u=D("div",null,`tracker ${K}`,null,null)),we||(u[Xe]=v),i=null,this.round=="maori-en"?i="Word → English":i="English → Word",u[rl]=u[Ie](i,0,u[rl]),we||u[Ie](" · "),Be=this.queue.length,Be===u[il]&&we||(u[tl]=u[Ie](u[il]=Be,0,u[tl])),we||u[Ie](" to go · "),Be=this.misses,Be===u[ol]&&we||(u[al]=u[Ie](u[ol]=Be,0,u[al])),we||u[Ie](" retries"),rn=Ve=1,(s=v[ul])||(rn=Ve=0,v[ul]=s=fn("mcq",null,`${K}`,null,null)),rn||(s[Xe]=v),Je=this.question,Je===s[sl]||(s.q=s[sl]=Je),rn||(s.emitter=function(Le){return r.answerΞpicked(Le)}),rn||!s.setup||s.setup(Ve,ui),s[Rs](Ve),this.question&&this.question.pick&&(this.question.wasΞright?(tn=wr=1,(d=v[ll])||(tn=wr=0,v[ll]=d=D("div",null,`feedback ok ${K}`,"Correct!",null)),tn||(d[Xe]=v)):(wn=ln=1,(d=v[ml])||(wn=ln=0,v[ml]=d=D("div",null,`feedback ${K}`,"It will come back around in a moment.",null)),wn||(d[Xe]=v)),mn=Vr=1,(p=v[gl])||(mn=Vr=0,v[gl]=p=D("div",null,`row ${K}`,null,null)),mn||(p[Xe]=v),mn||(W=D("button",p,`next-btn ${K}`,"Continue",null)),mn||W.on$("click",{$_:[function(Le,Fn){return r.advance(Le)}]},this)));return v[hl]=v[Ie](u,0,v[hl]),v[cl]=v[Ie](s,0,v[cl]),v[dl]=v[Ie](d,0,v[dl]),v[fl]=v[Ie](p,0,v[fl]),v[Kc](N),v}};G(ei,Fc,"learn-page",2),pn("learn-page",ei,{});var vl=ei;J();Rn(),on();var qc=Symbol.for("#beforeReconcile"),Kn=Symbol.for("##up"),sn=Symbol.for("#placeChild"),Bc=Symbol.for("#afterVisit"),Hc=Symbol.for("#afterReconcile"),bl=Symbol(),yl=Symbol(),kl=Symbol(),wl=Symbol(),xl=Symbol(),Sl=Symbol(),_l=Symbol(),Tl=Symbol(),El=Symbol(),Al=Symbol(),$l=Symbol(),Cl=Symbol(),jl=Symbol(),Nl=Symbol(),Pl=Symbol(),Ml=Symbol(),Il=Symbol(),Rl=Symbol(),Ol=Symbol(),Kl=Symbol();function Wc(c){return c.en.length?c.en[0]:""}function Lc(c={}){var r;return(r=c.gr)!=null?r:""}function zc(c,r){return c-r}var Zc=Symbol(),ni=class ni extends We{[ke](r=null,i=!0,u=!0){var s;super[ke](...arguments),this.phase=r&&(s=r.phase)!==void 0?s:"loading",this.queue=r&&(s=r.queue)!==void 0?s:[],this.pos=r&&(s=r.pos)!==void 0?s:0,this.question=r&&(s=r.question)!==void 0?s:null,this.answered=r&&(s=r.answered)!==void 0?s:0,this.correct=r&&(s=r.correct)!==void 0?s:0}async mount(){return await this.setup()}async setup(){let r=await bn(On);if(!r.length){this.phase="empty",Ne();return}return this.queue=r.slice(0).sort(zc),this.pos=0,this.updateΞquestion(),this.phase="quiz",Ne()}updateΞquestion(){let r=Gt(this.queue[this.pos]);if(!r){if(this.queue.splice(this.pos,1),this.pos>=this.queue.length&&(this.pos=0),!this.queue.length){this.question=null,this.phase="done";return}return this.updateΞquestion()}let i=[r.mi];for(let u=0,s=De(Lr(r,3)),d=s.length;u<d;u++){let p=s[u];i.push(p.mi)}return this.question={prompt:"How do you say “"+Wc(r)+"” ("+Lc(r)+") in te reo Māori?",options:kr(i),correct:r.mi,pick:null,wasΞright:!1}}answerΞpicked(r){let i=this.question;if(i&&(i.wasΞright=r==i.correct,i.pick=r,this.answered++,i.wasΞright))return this.correct++}applyΞmoves(r){let i=this.queue,u=i.splice(this.pos,1)[0];if(this.pos>=i.length&&(this.pos=0),r)return i.push(u);{let s=Math.min(this.pos+5,i.length);return i.splice(s,0,u)}}advance(){let r=this.question;if(r&&r.pick){if(this.applyΞmoves(r.wasΞright),!this.queue.length){this.question=null,this.phase="done",Ne();return}return this.updateΞquestion()}}render(){var r=this,i,u,s,d,p,v,j,N=this._ns_||"",K,P,ue,Q,X,ae,Z,me,oe,ee,te,Y,he,se,F,ve,fe,Re,Oe,Fe,Ae,Se,be;return p=this,p[qc](),v=j=1,p[bl]===1||(v=j=0,p[bl]=1),v||(K=D("div",p,`page-head ${N}`,null,null)),v||(P=D("button",K,`back ${N}`,"Back",null)),v||P.on$("click",{$_:[function(ce,$e){return r.emit("close")}]},this),v||(ue=D("h1",K,`${N}`,"Stage 1 · Recall words",null)),i=u=s=d=null,this.phase=="loading"?(Q=X=1,(i=p[yl])||(Q=X=0,p[yl]=i=D("div",null,`tracker ${N}`,"Loading progress…",null)),Q||(i[Kn]=p)):this.phase=="empty"?(ae=Z=1,(i=p[kl])||(ae=Z=0,p[kl]=i=D("div",null,`tracker ${N}`,"No learned words yet. Learn some words in Stage 1 first.",null)),ae||(i[Kn]=p)):this.phase=="done"?(me=oe=1,(i=p[wl])||(me=oe=0,p[wl]=i=D("div",null,`tracker ${N}`,"All recalls complete!",null)),me||(i[Kn]=p)):(ee=te=1,(i=p[xl])||(ee=te=0,p[xl]=i=D("div",null,`tracker ${N}`,null,null)),ee||(i[Kn]=p),Y=this.queue.length,Y===i[_l]&&ee||(i[Sl]=i[sn](i[_l]=Y,128,i[Sl])),ee||i[sn](" learned words · "),Y=this.correct,Y===i[El]&&ee||(i[Tl]=i[sn](i[El]=Y,0,i[Tl])),ee||i[sn](" correct of "),Y=this.answered,Y===i[$l]&&ee||(i[Al]=i[sn](i[$l]=Y,0,i[Al])),ee||i[sn](" answered"),he=se=1,(u=p[Cl])||(he=se=0,p[Cl]=u=fn("mcq",null,`${N}`,null,null)),he||(u[Kn]=p),F=this.question,F===u[jl]||(u.q=u[jl]=F),he||(u.emitter=function(ce){return r.answerΞpicked(ce)}),he||!u.setup||u.setup(se,ve),u[Bc](se),this.question&&this.question.pick&&(this.question.wasΞright?(fe=Re=1,(s=p[Nl])||(fe=Re=0,p[Nl]=s=D("div",null,`feedback ok ${N}`,"Correct!",null)),fe||(s[Kn]=p)):(Oe=Fe=1,(s=p[Pl])||(Oe=Fe=0,p[Pl]=s=D("div",null,`feedback ${N}`,"Not quite - it will come back around soon.",null)),Oe||(s[Kn]=p)),Ae=Se=1,(d=p[Ml])||(Ae=Se=0,p[Ml]=d=D("div",null,`row ${N}`,null,null)),Ae||(d[Kn]=p),Ae||(be=D("button",d,`next-btn ${N}`,"Next",null)),Ae||be.on$("click",{$_:[function(ce,$e){return r.advance(ce)}]},this))),p[Il]=p[sn](i,0,p[Il]),p[Rl]=p[sn](u,0,p[Rl]),p[Ol]=p[sn](s,0,p[Ol]),p[Kl]=p[sn](d,0,p[Kl]),p[Hc](j),p}};G(ni,Zc,"recall-page",2),pn("recall-page",ni,{});var Dl=ni;Rn(),on();var cm=Symbol.for("#beforeReconcile"),Gr=Symbol.for("##up"),nn=Symbol.for("#placeChild"),dm=Symbol.for("#afterReconcile"),ii=Symbol.for("#afterVisit"),Uc=Symbol.for("##register"),Fl=Symbol(),ql=Symbol(),Bl=Symbol(),Hl=Symbol(),Wl=Symbol(),Ll=Symbol(),zl=Symbol(),Zl=Symbol(),Ul=Symbol(),Gl=Symbol(),Vl=Symbol(),Jl=Symbol(),Yl=Symbol(),Ql=Symbol();var mo=Symbol(),Xl=Symbol(),em=Symbol(),nm=Symbol(),rm=Symbol(),tm=Symbol(),im=Symbol(),am=Symbol(),om=Symbol(),um=Symbol(),sm=Symbol(),lm=Symbol(),en,ar=mu(),ri=Symbol(),Ur,ti,Gc=location.hostname=="localhost";function fm(c){return globalThis.document.documentElement.classList.toggle("dark",c=="dark")}var pm=ws(ao)=="dark"?"dark":"light";fm(pm);var Vc=Symbol(),ai=class ai extends We{[ke](r=null,i=!0,u=!0){var s;super[ke](...arguments),this.loaded=r&&(s=r.loaded)!==void 0?s:!1,this.theme=r&&(s=r.theme)!==void 0?s:"light",this.inprogressΞids=r&&(s=r.inprogressΞids)!==void 0?s:[],this.learnedΞids=r&&(s=r.learnedΞids)!==void 0?s:[],this.stats=r&&(s=r.stats)!==void 0?s:{count:0,total:0,percent:0}}async mount(){return await this.refresh()}async refresh(){let r=await bn(ir),i=await bn(On);return this.inprogressΞids=r,this.learnedΞids=i,this.stats=eo(i),this.loaded=!0,Ne()}async resetΞall(){if(globalThis.confirm("Reset all progress? This clears learned and in-progress words."))return await ks(),this.learnedΞids=[],this.inprogressΞids=[],this.stats=eo([]),Ne()}toggleΞtheme(){return this.emit("toggle-theme")}render(){var r=this,i,u,s,d,p,v=this._ns_||"",j,N,K,P,ue,Q,X,ae,Z,me,oe,ee,te,Y,he,se,F,ve,fe,Re,Oe,Fe,Ae,Se,be,ce,$e,Ge,yn,kn,Dn,qe,we,_e,Be,rn;return s=this,s[cm](),d=p=1,s[Fl]===1||(d=p=0,s[Fl]=1),i=null,Gc&&(j=N=1,(i=s[ql])||(j=N=0,s[ql]=i=D("div",null,`db-ag ${v}`,"Warning! Debug mode: On",null)),j||(i[Gr]=s)),s[Bl]=s[nn](i,0,s[Bl]),d||(K=D("div",s,`hero ${v}`,null,null)),d||(P=D("h1",K,`${v}`,"Learn Māori",null)),d||(ue=D("p",K,`lead ${v}`,"Learn te reo Māori, one word at a time. Pick a stage below - your progress is saved automatically on this device.",null)),d||(Q=D("div",s,`stats ${v}`,null,null)),d||(X=D("div",Q,`${v}`,null,null)),d||(ae=D("span",X,`label ${v}`,"Learned",null)),(Z=s[Hl])||(s[Hl]=Z=D("span",X,`value ${v}`,null,null)),me=this.stats.percent,me===s[Ll]&&d||(s[Wl]=Z[nn](s[Ll]=me,128,s[Wl])),d||Z[nn]("%"),d||(oe=D("div",Q,`${v}`,null,null)),d||(ee=D("span",oe,`label ${v}`,"Words",null)),(te=s[zl])||(s[zl]=te=D("span",oe,`value ${v}`,null,null)),Y=this.stats.count,Y===s[Ul]&&d||(s[Zl]=te[nn](s[Ul]=Y,128,s[Zl])),d||te[nn](" / "),Y=this.stats.total,Y===s[Vl]&&d||(s[Gl]=te[nn](s[Vl]=Y,256,s[Gl])),d||(he=D("div",Q,`${v}`,null,null)),d||(se=D("span",he,`label ${v}`,"In progress now",null)),(F=s[Jl])||(s[Jl]=F=D("span",he,`value ${v}`,null,null)),ve=this.inprogressΞids.length,ve===s[Yl]||F.text$(String(s[Yl]=ve)),d||(fe=D("div",s,`stage-card card ${v}`,null,null)),d||(Re=D("h2",fe,`${v}`,"Stage 1 · Single words",null)),d||(Oe=D("p",fe,`${v}`,"Review new words, then test recall from word to English and back.",null)),d||(Fe=D("div",fe,`row ${v}`,null,null)),d||(Ae=D("button",Fe,`primary ${v}`,"Learn new words",null)),d||Ae.on$("click",{$_:[function(Ve,Je){return r.emit("learn")}]},this),be=ce=1,(Se=s[Ql])||(be=ce=0,s[Ql]=Se=D("button",Fe,`mi-red-ochre-btn ${v}`,null,null)),$e=this.loaded&&!this.learnedΞids.length||void 0,$e===s[mo]||(ce|=2,s[mo]=$e),be||Se.on$("click",{$_:[function(Ve,Je){return r.emit("recall")}]},this),ce&2&&Se.flag$(`mi-red-ochre-btn ${v} `+(s[mo]?"disabled":""),null),be||Se[nn]("Recall learned words ("),$e=this.learnedΞids.length,$e===s[em]&&be||(s[Xl]=Se[nn](s[em]=$e,0,s[Xl])),be||Se[nn](")"),d||(Ge=D("div",s,`card locked ${v}`,null,null)),d||(yn=D("h2",Ge,`${v}`,"Stage 2",null)),d||(kn=D("p",Ge,`${v}`,"To be announced.",null)),d||(Dn=D("hr",s,`hr ${v}`,null,null)),d||(qe=D("div",s,`footer ${v}`,null,null)),d||(we=D("button",qe,`danger plain-btn ${v}`,"Reset progress",null)),d||we.on$("click",{$_:[function(Ve,Je){return r.resetΞall()}]},this),Be=rn=1,(_e=s[nm])||(Be=rn=0,s[nm]=_e=D("button",qe,`theme-toggle plain-btn ${v}`,null,null)),Be||_e.on$("click",{$_:[function(Ve,Je){return r.toggleΞtheme()}]},this),u=null,this.theme=="dark"?u="☀️ Light mode":u="🌙 Dark mode",s[rm]=_e[nn](u,0,s[rm]),s[dm](p),s}};G(ai,Vc,"landing-page",2),pn("landing-page",ai,{});var mm=ai,Jc=Symbol(),oi=class oi extends We{[ke](r=null,i=!0,u=!0){var s;super[ke](...arguments),this.view=r&&(s=r.view)!==void 0?s:"landing",this.theme=r&&(s=r.theme)!==void 0?s:pm}toggleΞtheme(){return this.theme=this.theme=="light"?"dark":"light",fm(this.theme),xs(ao,this.theme)}mount(){var r=this;return this.syncΞhash(),globalThis.addEventListener("hashchange",function(){return r.syncΞhash()})}syncΞhash(){let r=this.locationΞhash;if(r=="learn"){if(this.view!="learn")return this.view="learn",Ne()}else if(r=="recall"){if(this.view!="recall")return this.view="recall",Ne()}else if(r==""&&this.view!="landing")return this.view="landing",Ne()}get locationΞhash(){return(globalThis.location.hash||"").replace("#","")}showΞlearn(){return this.view="learn"}showΞrecall(){return this.view="recall"}showΞlanding(){return this.view="landing"}render(){var r=this,i,u,s,d,p=this._ns_||"",v,j,N,K,P,ue,Q,X,ae,Z,me;return u=this,u[cm](),s=d=1,u[tm]===1||(s=d=0,u[tm]=1),(v=u[im])||(u[im]=v=D("div",u,`app-shell ${p}`,null,null)),i=null,this.view=="landing"?(j=N=1,(i=u[am])||(j=N=0,u[am]=i=fn("landing-page",null,`${p}`,null,null)),j||(i[Gr]=v),K=this.theme,K===i[om]||(i.theme=i[om]=K),j||i.on$("toggle-theme",{$_:[function(oe,ee){return r.toggleΞtheme()}]},this),j||i.on$("learn",{$_:[function(oe,ee){return r.showΞlearn()}]},this),j||i.on$("recall",{$_:[function(oe,ee){return r.showΞrecall()}]},this),j||!i.setup||i.setup(N,P),i[ii](N)):this.view=="learn"?(ue=Q=1,(i=u[um])||(ue=Q=0,u[um]=i=fn("learn-page",null,`${p}`,null,null)),ue||(i[Gr]=v),ue||i.on$("close",{$_:[function(oe,ee){return r.showΞlanding()}]},this),ue||!i.setup||i.setup(Q,X),i[ii](Q)):(ae=Z=1,(i=u[sm])||(ae=Z=0,u[sm]=i=fn("recall-page",null,`${p}`,null,null)),ae||(i[Gr]=v),ae||i.on$("close",{$_:[function(oe,ee){return r.showΞlanding()}]},this),ae||!i.setup||i.setup(Z,me),i[ii](Z)),u[lm]=v[nn](i,0,u[lm]),u[dm](d),u}};G(oi,Jc,"app",2),pn("app",oi,{});var gm=oi,hm;Ba((Ur=ti=1,(en=ar[ri])||(Ur=ti=0,en=ar[ri]=en=fn("app",null,null,null,null)),Ur||(en[Gr]=ar._),Ur||((hm=en[Uc])==null||hm.call(en,ar,ri)),Ur||ar.sym||!en.setup||en.setup(ti,ar,ri),ar.sym||en[ii](ti),en));
//__FOOT__
