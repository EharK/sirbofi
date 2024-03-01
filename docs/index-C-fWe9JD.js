(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Si(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const he={},un=[],Ve=()=>{},wu=()=>!1,Xr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ti=t=>t.startsWith("onUpdate:"),Te=Object.assign,Ri=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Iu=Object.prototype.hasOwnProperty,ne=(t,e)=>Iu.call(t,e),V=Array.isArray,fn=t=>Qr(t)==="[object Map]",Ga=t=>Qr(t)==="[object Set]",q=t=>typeof t=="function",be=t=>typeof t=="string",Tn=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",Ja=t=>(me(t)||q(t))&&q(t.then)&&q(t.catch),Ya=Object.prototype.toString,Qr=t=>Ya.call(t),Su=t=>Qr(t).slice(8,-1),Xa=t=>Qr(t)==="[object Object]",Ci=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Un=Si(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Tu=/-(\w)/g,_n=Zr(t=>t.replace(Tu,(e,n)=>n?n.toUpperCase():"")),Ru=/\B([A-Z])/g,Rn=Zr(t=>t.replace(Ru,"-$1").toLowerCase()),Qa=Zr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Rs=Zr(t=>t?`on${Qa(t)}`:""),Bt=(t,e)=>!Object.is(t,e),Er=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Dr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Gs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let uo;const Za=()=>uo||(uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ai(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=be(r)?Ou(r):Ai(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(be(t)||me(t))return t}const Cu=/;(?![^(]*\))/g,Au=/:([^]+)/,Pu=/\/\*[^]*?\*\//g;function Ou(t){const e={};return t.replace(Pu,"").split(Cu).forEach(n=>{if(n){const r=n.split(Au);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ae(t){let e="";if(be(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const r=Ae(t[n]);r&&(e+=r+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ku="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xu=Si(ku);function ec(t){return!!t||t===""}const ge=t=>be(t)?t:t==null?"":V(t)||me(t)&&(t.toString===Ya||!q(t.toString))?JSON.stringify(t,tc,2):String(t),tc=(t,e)=>e&&e.__v_isRef?tc(t,e.value):fn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Cs(r,i)+" =>"]=s,n),{})}:Ga(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Cs(n))}:Tn(e)?Cs(e):me(e)&&!V(e)&&!Xa(e)?String(e):e,Cs=(t,e="")=>{var n;return Tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class nc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function rc(t){return new nc(t)}function Nu(t,e=je){e&&e.active&&e.effects.push(t)}function sc(){return je}function Lu(t){je&&je.cleanups.push(t)}let qt;class Pi{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Nu(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,en();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Du(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),tn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Lt,n=qt;try{return Lt=!0,qt=this,this._runnings++,fo(this),this.fn()}finally{ho(this),this._runnings--,qt=n,Lt=e}}stop(){var e;this.active&&(fo(this),ho(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Du(t){return t.value}function fo(t){t._trackId++,t._depsLength=0}function ho(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ic(t.deps[e],t);t.deps.length=t._depsLength}}function ic(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Lt=!0,Js=0;const oc=[];function en(){oc.push(Lt),Lt=!1}function tn(){const t=oc.pop();Lt=t===void 0?!0:t}function Oi(){Js++}function ki(){for(Js--;!Js&&Ys.length;)Ys.shift()()}function ac(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&ic(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Ys=[];function cc(t,e,n){Oi();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Ys.push(r.scheduler)))}ki()}const lc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Mr=new WeakMap,Gt=Symbol(""),Xs=Symbol("");function Be(t,e,n){if(Lt&&qt){let r=Mr.get(t);r||Mr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=lc(()=>r.delete(n))),ac(qt,s)}}function ht(t,e,n,r,s,i){const o=Mr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Tn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?Ci(n)&&a.push(o.get("length")):(a.push(o.get(Gt)),fn(t)&&a.push(o.get(Xs)));break;case"delete":V(t)||(a.push(o.get(Gt)),fn(t)&&a.push(o.get(Xs)));break;case"set":fn(t)&&a.push(o.get(Gt));break}Oi();for(const c of a)c&&cc(c,4);ki()}function Mu(t,e){var n;return(n=Mr.get(t))==null?void 0:n.get(e)}const Uu=Si("__proto__,__v_isRef,__isVue"),uc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tn)),po=Fu();function Fu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=re(this);for(let i=0,o=this.length;i<o;i++)Be(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){en(),Oi();const r=re(this)[e].apply(this,n);return ki(),tn(),r}}),t}function Bu(t){const e=re(this);return Be(e,"has",t),e.hasOwnProperty(t)}class fc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Qu:mc:i?pc:hc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=V(e);if(!s){if(o&&ne(po,n))return Reflect.get(po,n,r);if(n==="hasOwnProperty")return Bu}const a=Reflect.get(e,n,r);return(Tn(n)?uc.has(n):Uu(n))||(s||Be(e,"get",n),i)?a:Ee(a)?o&&Ci(n)?a:a.value:me(a)?s?_c(a):rr(a):a}}class dc extends fc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=yn(i);if(!Ur(r)&&!yn(r)&&(i=re(i),r=re(r)),!V(e)&&Ee(i)&&!Ee(r))return c?!1:(i.value=r,!0)}const o=V(e)&&Ci(n)?Number(n)<e.length:ne(e,n),a=Reflect.set(e,n,r,s);return e===re(s)&&(o?Bt(r,i)&&ht(e,"set",n,r):ht(e,"add",n,r)),a}deleteProperty(e,n){const r=ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ht(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tn(n)||!uc.has(n))&&Be(e,"has",n),r}ownKeys(e){return Be(e,"iterate",V(e)?"length":Gt),Reflect.ownKeys(e)}}class $u extends fc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ju=new dc,Hu=new $u,Vu=new dc(!0),xi=t=>t,es=t=>Reflect.getPrototypeOf(t);function pr(t,e,n=!1,r=!1){t=t.__v_raw;const s=re(t),i=re(e);n||(Bt(e,i)&&Be(s,"get",e),Be(s,"get",i));const{has:o}=es(s),a=r?xi:n?Di:zn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function mr(t,e=!1){const n=this.__v_raw,r=re(n),s=re(t);return e||(Bt(t,s)&&Be(r,"has",t),Be(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function gr(t,e=!1){return t=t.__v_raw,!e&&Be(re(t),"iterate",Gt),Reflect.get(t,"size",t)}function mo(t){t=re(t);const e=re(this);return es(e).has.call(e,t)||(e.add(t),ht(e,"add",t,t)),this}function go(t,e){e=re(e);const n=re(this),{has:r,get:s}=es(n);let i=r.call(n,t);i||(t=re(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Bt(e,o)&&ht(n,"set",t,e):ht(n,"add",t,e),this}function _o(t){const e=re(this),{has:n,get:r}=es(e);let s=n.call(e,t);s||(t=re(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ht(e,"delete",t,void 0),i}function yo(){const t=re(this),e=t.size!==0,n=t.clear();return e&&ht(t,"clear",void 0,void 0),n}function _r(t,e){return function(r,s){const i=this,o=i.__v_raw,a=re(o),c=e?xi:t?Di:zn;return!t&&Be(a,"iterate",Gt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function yr(t,e,n){return function(...r){const s=this.__v_raw,i=re(s),o=fn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?xi:e?Di:zn;return!e&&Be(i,"iterate",c?Xs:Gt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function yt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Wu(){const t={get(i){return pr(this,i)},get size(){return gr(this)},has:mr,add:mo,set:go,delete:_o,clear:yo,forEach:_r(!1,!1)},e={get(i){return pr(this,i,!1,!0)},get size(){return gr(this)},has:mr,add:mo,set:go,delete:_o,clear:yo,forEach:_r(!1,!0)},n={get(i){return pr(this,i,!0)},get size(){return gr(this,!0)},has(i){return mr.call(this,i,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:_r(!0,!1)},r={get(i){return pr(this,i,!0,!0)},get size(){return gr(this,!0)},has(i){return mr.call(this,i,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:_r(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=yr(i,!1,!1),n[i]=yr(i,!0,!1),e[i]=yr(i,!1,!0),r[i]=yr(i,!0,!0)}),[t,n,e,r]}const[zu,Ku,qu,Gu]=Wu();function Ni(t,e){const n=e?t?Gu:qu:t?Ku:zu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ne(n,s)&&s in r?n:r,s,i)}const Ju={get:Ni(!1,!1)},Yu={get:Ni(!1,!0)},Xu={get:Ni(!0,!1)},hc=new WeakMap,pc=new WeakMap,mc=new WeakMap,Qu=new WeakMap;function Zu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ef(t){return t.__v_skip||!Object.isExtensible(t)?0:Zu(Su(t))}function rr(t){return yn(t)?t:Li(t,!1,ju,Ju,hc)}function gc(t){return Li(t,!1,Vu,Yu,pc)}function _c(t){return Li(t,!0,Hu,Xu,mc)}function Li(t,e,n,r,s){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ef(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Dt(t){return yn(t)?Dt(t.__v_raw):!!(t&&t.__v_isReactive)}function yn(t){return!!(t&&t.__v_isReadonly)}function Ur(t){return!!(t&&t.__v_isShallow)}function yc(t){return Dt(t)||yn(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function ts(t){return Object.isExtensible(t)&&Dr(t,"__v_skip",!0),t}const zn=t=>me(t)?rr(t):t,Di=t=>me(t)?_c(t):t;class vc{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Pi(()=>e(this._value),()=>wr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=re(this);return(!e._cacheable||e.effect.dirty)&&Bt(e._value,e._value=e.effect.run())&&wr(e,4),bc(e),e.effect._dirtyLevel>=2&&wr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function tf(t,e,n=!1){let r,s;const i=q(t);return i?(r=t,s=Ve):(r=t.get,s=t.set),new vc(r,s,i||!s,n)}function bc(t){var e;Lt&&qt&&(t=re(t),ac(qt,(e=t.dep)!=null?e:t.dep=lc(()=>t.dep=void 0,t instanceof vc?t:void 0)))}function wr(t,e=4,n){t=re(t);const r=t.dep;r&&cc(r,e)}function Ee(t){return!!(t&&t.__v_isRef===!0)}function oe(t){return Ec(t,!1)}function nf(t){return Ec(t,!0)}function Ec(t,e){return Ee(t)?t:new rf(t,e)}class rf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:zn(e)}get value(){return bc(this),this._value}set value(e){const n=this.__v_isShallow||Ur(e)||yn(e);e=n?e:re(e),Bt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:zn(e),wr(this,4))}}function Jt(t){return Ee(t)?t.value:t}const sf={get:(t,e,n)=>Jt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ee(s)&&!Ee(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function wc(t){return Dt(t)?t:new Proxy(t,sf)}function of(t){const e=V(t)?new Array(t.length):{};for(const n in t)e[n]=cf(t,n);return e}class af{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Mu(re(this._object),this._key)}}function cf(t,e,n){const r=t[e];return Ee(r)?r:new af(t,e,n)}/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mt(t,e,n,r){try{return r?t(...r):t()}catch(s){ns(s,e,n)}}function Je(t,e,n,r){if(q(t)){const i=Mt(t,e,n,r);return i&&Ja(i)&&i.catch(o=>{ns(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Je(t[i],e,n,r));return s}function ns(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Mt(c,null,10,[t,o,a]);return}}lf(t,n,s,r)}function lf(t,e,n,r=!0){console.error(t)}let Kn=!1,Qs=!1;const Pe=[];let it=0;const dn=[];let It=null,zt=0;const Ic=Promise.resolve();let Mi=null;function Ui(t){const e=Mi||Ic;return t?e.then(this?t.bind(this):t):e}function uf(t){let e=it+1,n=Pe.length;for(;e<n;){const r=e+n>>>1,s=Pe[r],i=qn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Fi(t){(!Pe.length||!Pe.includes(t,Kn&&t.allowRecurse?it+1:it))&&(t.id==null?Pe.push(t):Pe.splice(uf(t.id),0,t),Sc())}function Sc(){!Kn&&!Qs&&(Qs=!0,Mi=Ic.then(Rc))}function ff(t){const e=Pe.indexOf(t);e>it&&Pe.splice(e,1)}function df(t){V(t)?dn.push(...t):(!It||!It.includes(t,t.allowRecurse?zt+1:zt))&&dn.push(t),Sc()}function vo(t,e,n=Kn?it+1:0){for(;n<Pe.length;n++){const r=Pe[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Pe.splice(n,1),n--,r()}}}function Tc(t){if(dn.length){const e=[...new Set(dn)].sort((n,r)=>qn(n)-qn(r));if(dn.length=0,It){It.push(...e);return}for(It=e,zt=0;zt<It.length;zt++)It[zt]();It=null,zt=0}}const qn=t=>t.id==null?1/0:t.id,hf=(t,e)=>{const n=qn(t)-qn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Rc(t){Qs=!1,Kn=!0,Pe.sort(hf);try{for(it=0;it<Pe.length;it++){const e=Pe[it];e&&e.active!==!1&&Mt(e,null,14)}}finally{it=0,Pe.length=0,Tc(),Kn=!1,Mi=null,(Pe.length||dn.length)&&Rc()}}function pf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||he;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||he;p&&(s=n.map(_=>be(_)?_.trim():_)),f&&(s=n.map(Gs))}let a,c=r[a=Rs(e)]||r[a=Rs(_n(e))];!c&&i&&(c=r[a=Rs(Rn(e))]),c&&Je(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Je(l,t,6,s)}}function Cc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!q(t)){const c=l=>{const u=Cc(l,e,!0);u&&(a=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(me(t)&&r.set(t,null),null):(V(i)?i.forEach(c=>o[c]=null):Te(o,i),me(t)&&r.set(t,o),o)}function rs(t,e){return!t||!Xr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Rn(e))||ne(t,e))}let Fe=null,ss=null;function Fr(t){const e=Fe;return Fe=t,ss=t&&t.type.__scopeId||null,e}function is(t){ss=t}function os(){ss=null}function mf(t,e=Fe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Po(-1);const i=Fr(e);let o;try{o=t(...s)}finally{Fr(i),r._d&&Po(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function As(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:_,ctx:y,inheritAttrs:b}=t;let N,P;const M=Fr(t);try{if(n.shapeFlag&4){const K=s||r,J=K;N=st(u.call(J,K,f,i,_,p,y)),P=c}else{const K=e;N=st(K.length>1?K(i,{attrs:c,slots:a,emit:l}):K(i,null)),P=e.props?c:gf(c)}}catch(K){$n.length=0,ns(K,t,1),N=ke(Xt)}let U=N;if(P&&b!==!1){const K=Object.keys(P),{shapeFlag:J}=U;K.length&&J&7&&(o&&K.some(Ti)&&(P=_f(P,o)),U=vn(U,P))}return n.dirs&&(U=vn(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),N=U,Fr(M),N}const gf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xr(n))&&((e||(e={}))[n]=t[n]);return e},_f=(t,e)=>{const n={};for(const r in t)(!Ti(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function yf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?bo(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!rs(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?bo(r,o,l):!0:!!o;return!1}function bo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!rs(n,i))return!0}return!1}function vf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const bf=Symbol.for("v-ndc"),Ef=t=>t.__isSuspense;function wf(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):df(t)}const If=Symbol.for("v-scx"),Sf=()=>Ye(If),vr={};function Fn(t,e,n){return Ac(t,e,n)}function Ac(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=he){if(e&&i){const $=e;e=(...se)=>{$(...se),J()}}const c=Oe,l=$=>r===!0?$:Kt($,r===!1?1:void 0);let u,f=!1,p=!1;if(Ee(t)?(u=()=>t.value,f=Ur(t)):Dt(t)?(u=()=>l(t),f=!0):V(t)?(p=!0,f=t.some($=>Dt($)||Ur($)),u=()=>t.map($=>{if(Ee($))return $.value;if(Dt($))return l($);if(q($))return Mt($,c,2)})):q(t)?e?u=()=>Mt(t,c,2):u=()=>(_&&_(),Je(t,c,3,[y])):u=Ve,e&&r){const $=u;u=()=>Kt($())}let _,y=$=>{_=U.onStop=()=>{Mt($,c,4),_=U.onStop=void 0}},b;if(us)if(y=Ve,e?n&&Je(e,c,3,[u(),p?[]:void 0,y]):u(),s==="sync"){const $=Sf();b=$.__watcherHandles||($.__watcherHandles=[])}else return Ve;let N=p?new Array(t.length).fill(vr):vr;const P=()=>{if(!(!U.active||!U.dirty))if(e){const $=U.run();(r||f||(p?$.some((se,W)=>Bt(se,N[W])):Bt($,N)))&&(_&&_(),Je(e,c,3,[$,N===vr?void 0:p&&N[0]===vr?[]:N,y]),N=$)}else U.run()};P.allowRecurse=!!e;let M;s==="sync"?M=P:s==="post"?M=()=>Ue(P,c&&c.suspense):(P.pre=!0,c&&(P.id=c.uid),M=()=>Fi(P));const U=new Pi(u,Ve,M),K=sc(),J=()=>{U.stop(),K&&Ri(K.effects,U)};return e?n?P():N=U.run():s==="post"?Ue(U.run.bind(U),c&&c.suspense):U.run(),b&&b.push(J),J}function Tf(t,e,n){const r=this.proxy,s=be(t)?t.includes(".")?Pc(r,t):()=>r[t]:t.bind(r,r);let i;q(e)?i=e:(i=e.handler,n=e);const o=sr(this),a=Ac(s,i.bind(r),n);return o(),a}function Pc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Kt(t,e,n=0,r){if(!me(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ee(t))Kt(t.value,e,n,r);else if(V(t))for(let s=0;s<t.length;s++)Kt(t[s],e,n,r);else if(Ga(t)||fn(t))t.forEach(s=>{Kt(s,e,n,r)});else if(Xa(t))for(const s in t)Kt(t[s],e,n,r);return t}function St(t,e){if(Fe===null)return t;const n=fs(Fe)||Fe.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=he]=e[s];i&&(q(i)&&(i={mounted:i,updated:i}),i.deep&&Kt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Ht(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(en(),Je(c,n,8,[t.el,a,t,e]),tn())}}/*! #__NO_SIDE_EFFECTS__ */function Oc(t,e){return q(t)?Te({name:t.name},e,{setup:t}):t}const Ir=t=>!!t.type.__asyncLoader,kc=t=>t.type.__isKeepAlive;function Rf(t,e){xc(t,"a",e)}function Cf(t,e){xc(t,"da",e)}function xc(t,e,n=Oe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(as(e,r,n),n){let s=n.parent;for(;s&&s.parent;)kc(s.parent.vnode)&&Af(r,e,n,s),s=s.parent}}function Af(t,e,n,r){const s=as(e,t,r,!0);Lc(()=>{Ri(r[e],s)},n)}function as(t,e,n=Oe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;en();const a=sr(n),c=Je(e,n,t,o);return a(),tn(),c});return r?s.unshift(i):s.push(i),i}}const gt=t=>(e,n=Oe)=>(!us||t==="sp")&&as(t,(...r)=>e(...r),n),Pf=gt("bm"),Nc=gt("m"),Of=gt("bu"),kf=gt("u"),xf=gt("bum"),Lc=gt("um"),Nf=gt("sp"),Lf=gt("rtg"),Df=gt("rtc");function Mf(t,e=Oe){as("ec",t,e)}function sn(t,e,n,r){let s;const i=n&&n[r];if(V(t)||be(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(me(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Zs=t=>t?Kc(t)?fs(t)||t.proxy:Zs(t.parent):null,Bn=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zs(t.parent),$root:t=>Zs(t.root),$emit:t=>t.emit,$options:t=>Bi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Fi(t.update)}),$nextTick:t=>t.n||(t.n=Ui.bind(t.proxy)),$watch:t=>Tf.bind(t)}),Ps=(t,e)=>t!==he&&!t.__isScriptSetup&&ne(t,e),Uf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ps(r,e))return o[e]=1,r[e];if(s!==he&&ne(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ne(l,e))return o[e]=3,i[e];if(n!==he&&ne(n,e))return o[e]=4,n[e];ei&&(o[e]=0)}}const u=Bn[e];let f,p;if(u)return e==="$attrs"&&Be(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==he&&ne(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,ne(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ps(s,e)?(s[e]=n,!0):r!==he&&ne(r,e)?(r[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==he&&ne(t,o)||Ps(e,o)||(a=i[0])&&ne(a,o)||ne(r,o)||ne(Bn,o)||ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Eo(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ei=!0;function Ff(t){const e=Bi(t),n=t.proxy,r=t.ctx;ei=!1,e.beforeCreate&&wo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:_,updated:y,activated:b,deactivated:N,beforeDestroy:P,beforeUnmount:M,destroyed:U,unmounted:K,render:J,renderTracked:$,renderTriggered:se,errorCaptured:W,serverPrefetch:F,expose:fe,inheritAttrs:ye,components:Se,directives:Me,filters:Ze}=e;if(l&&Bf(l,r,null),o)for(const ie in o){const te=o[ie];q(te)&&(r[ie]=te.bind(n))}if(s){const ie=s.call(n,n);me(ie)&&(t.data=rr(ie))}if(ei=!0,i)for(const ie in i){const te=i[ie],ze=q(te)?te.bind(n,n):q(te.get)?te.get.bind(n,n):Ve,et=!q(te)&&q(te.set)?te.set.bind(n):Ve,Re=Ie({get:ze,set:et});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Ce=>Re.value=Ce})}if(a)for(const ie in a)Dc(a[ie],r,n,ie);if(c){const ie=q(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(te=>{Sr(te,ie[te])})}u&&wo(u,t,"c");function X(ie,te){V(te)?te.forEach(ze=>ie(ze.bind(n))):te&&ie(te.bind(n))}if(X(Pf,f),X(Nc,p),X(Of,_),X(kf,y),X(Rf,b),X(Cf,N),X(Mf,W),X(Df,$),X(Lf,se),X(xf,M),X(Lc,K),X(Nf,F),V(fe))if(fe.length){const ie=t.exposed||(t.exposed={});fe.forEach(te=>{Object.defineProperty(ie,te,{get:()=>n[te],set:ze=>n[te]=ze})})}else t.exposed||(t.exposed={});J&&t.render===Ve&&(t.render=J),ye!=null&&(t.inheritAttrs=ye),Se&&(t.components=Se),Me&&(t.directives=Me)}function Bf(t,e,n=Ve){V(t)&&(t=ti(t));for(const r in t){const s=t[r];let i;me(s)?"default"in s?i=Ye(s.from||r,s.default,!0):i=Ye(s.from||r):i=Ye(s),Ee(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function wo(t,e,n){Je(V(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Dc(t,e,n,r){const s=r.includes(".")?Pc(n,r):()=>n[r];if(be(t)){const i=e[t];q(i)&&Fn(s,i)}else if(q(t))Fn(s,t.bind(n));else if(me(t))if(V(t))t.forEach(i=>Dc(i,e,n,r));else{const i=q(t.handler)?t.handler.bind(n):e[t.handler];q(i)&&Fn(s,i,t)}}function Bi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Br(c,l,o,!0)),Br(c,e,o)),me(e)&&i.set(e,c),c}function Br(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Br(t,i,n,!0),s&&s.forEach(o=>Br(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=$f[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const $f={data:Io,props:So,emits:So,methods:Ln,computed:Ln,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:Ln,directives:Ln,watch:Hf,provide:Io,inject:jf};function Io(t,e){return e?t?function(){return Te(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function jf(t,e){return Ln(ti(t),ti(e))}function ti(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ne(t,e){return t?[...new Set([].concat(t,e))]:e}function Ln(t,e){return t?Te(Object.create(null),t,e):e}function So(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:Te(Object.create(null),Eo(t),Eo(e??{})):e}function Hf(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const r in e)n[r]=Ne(t[r],e[r]);return n}function Mc(){return{app:null,config:{isNativeTag:wu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vf=0;function Wf(t,e){return function(r,s=null){q(r)||(r=Te({},r)),s!=null&&!me(s)&&(s=null);const i=Mc(),o=new WeakSet;let a=!1;const c=i.app={_uid:Vf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:md,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&q(l.install)?(o.add(l),l.install(c,...u)):q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=ke(r,s);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,fs(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=hn;hn=c;try{return l()}finally{hn=u}}};return c}}let hn=null;function Sr(t,e){if(Oe){let n=Oe.provides;const r=Oe.parent&&Oe.parent.provides;r===n&&(n=Oe.provides=Object.create(r)),n[t]=e}}function Ye(t,e,n=!1){const r=Oe||Fe;if(r||hn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:hn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&q(e)?e.call(r&&r.proxy):e}}function zf(){return!!(Oe||Fe||hn)}function Kf(t,e,n,r=!1){const s={},i={};Dr(i,ls,1),t.propsDefaults=Object.create(null),Uc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:gc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=re(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(rs(t.emitsOptions,p))continue;const _=e[p];if(c)if(ne(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const y=_n(p);s[y]=ni(c,a,y,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{Uc(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!ne(e,f)&&((u=Rn(f))===f||!ne(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ni(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!ne(e,f))&&(delete i[f],l=!0)}l&&ht(t,"set","$attrs")}function Uc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Un(c))continue;const l=e[c];let u;s&&ne(s,u=_n(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:rs(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=re(n),l=a||he;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ni(s,c,f,l[f],t,!ne(l,f))}}return o}function ni(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&q(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=sr(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Rn(n))&&(r=!0))}return r}function Fc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!q(t)){const u=f=>{c=!0;const[p,_]=Fc(f,e,!0);Te(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return me(t)&&r.set(t,un),un;if(V(i))for(let u=0;u<i.length;u++){const f=_n(i[u]);To(f)&&(o[f]=he)}else if(i)for(const u in i){const f=_n(u);if(To(f)){const p=i[u],_=o[f]=V(p)||q(p)?{type:p}:Te({},p);if(_){const y=Ao(Boolean,_.type),b=Ao(String,_.type);_[0]=y>-1,_[1]=b<0||y<b,(y>-1||ne(_,"default"))&&a.push(f)}}}const l=[o,a];return me(t)&&r.set(t,l),l}function To(t){return t[0]!=="$"&&!Un(t)}function Ro(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Co(t,e){return Ro(t)===Ro(e)}function Ao(t,e){return V(e)?e.findIndex(n=>Co(n,t)):q(e)&&Co(e,t)?0:-1}const Bc=t=>t[0]==="_"||t==="$stable",$i=t=>V(t)?t.map(st):[st(t)],Gf=(t,e,n)=>{if(e._n)return e;const r=mf((...s)=>$i(e(...s)),n);return r._c=!1,r},$c=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Bc(s))continue;const i=t[s];if(q(i))e[s]=Gf(s,i,r);else if(i!=null){const o=$i(i);e[s]=()=>o}}},jc=(t,e)=>{const n=$i(e);t.slots.default=()=>n},Jf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),Dr(e,"_",n)):$c(e,t.slots={})}else t.slots={},e&&jc(t,e);Dr(t.slots,ls,1)},Yf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=he;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Te(s,e),!n&&a===1&&delete s._):(i=!e.$stable,$c(e,s)),o=e}else e&&(jc(t,e),o={default:1});if(i)for(const a in s)!Bc(a)&&o[a]==null&&delete s[a]};function ri(t,e,n,r,s=!1){if(V(t)){t.forEach((p,_)=>ri(p,e&&(V(e)?e[_]:e),n,r,s));return}if(Ir(r)&&!s)return;const i=r.shapeFlag&4?fs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===he?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(be(l)?(u[l]=null,ne(f,l)&&(f[l]=null)):Ee(l)&&(l.value=null)),q(c))Mt(c,a,12,[o,u]);else{const p=be(c),_=Ee(c);if(p||_){const y=()=>{if(t.f){const b=p?ne(f,c)?f[c]:u[c]:c.value;s?V(b)&&Ri(b,i):V(b)?b.includes(i)||b.push(i):p?(u[c]=[i],ne(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,ne(f,c)&&(f[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,Ue(y,n)):y()}}}const Ue=wf;function Xf(t){return Qf(t)}function Qf(t,e){const n=Za();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:_=Ve,insertStaticContent:y}=t,b=(d,h,g,w=null,v=null,C=null,x=void 0,T=null,O=!!h.dynamicChildren)=>{if(d===h)return;d&&!kn(d,h)&&(w=m(d),Ce(d,v,C,!0),d=null),h.patchFlag===-2&&(O=!1,h.dynamicChildren=null);const{type:I,ref:D,shapeFlag:j}=h;switch(I){case cs:N(d,h,g,w);break;case Xt:P(d,h,g,w);break;case Tr:d==null&&M(h,g,w,x);break;case Le:Se(d,h,g,w,v,C,x,T,O);break;default:j&1?J(d,h,g,w,v,C,x,T,O):j&6?Me(d,h,g,w,v,C,x,T,O):(j&64||j&128)&&I.process(d,h,g,w,v,C,x,T,O,k)}D!=null&&v&&ri(D,d&&d.ref,C,h||d,!h)},N=(d,h,g,w)=>{if(d==null)r(h.el=a(h.children),g,w);else{const v=h.el=d.el;h.children!==d.children&&l(v,h.children)}},P=(d,h,g,w)=>{d==null?r(h.el=c(h.children||""),g,w):h.el=d.el},M=(d,h,g,w)=>{[d.el,d.anchor]=y(d.children,h,g,w,d.el,d.anchor)},U=({el:d,anchor:h},g,w)=>{let v;for(;d&&d!==h;)v=p(d),r(d,g,w),d=v;r(h,g,w)},K=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),s(d),d=g;s(h)},J=(d,h,g,w,v,C,x,T,O)=>{h.type==="svg"?x="svg":h.type==="math"&&(x="mathml"),d==null?$(h,g,w,v,C,x,T,O):F(d,h,v,C,x,T,O)},$=(d,h,g,w,v,C,x,T)=>{let O,I;const{props:D,shapeFlag:j,transition:B,dirs:z}=d;if(O=d.el=o(d.type,C,D&&D.is,D),j&8?u(O,d.children):j&16&&W(d.children,O,null,w,v,Os(d,C),x,T),z&&Ht(d,null,w,"created"),se(O,d,d.scopeId,x,w),D){for(const le in D)le!=="value"&&!Un(le)&&i(O,le,null,D[le],C,d.children,w,v,L);"value"in D&&i(O,"value",null,D.value,C),(I=D.onVnodeBeforeMount)&&rt(I,w,d)}z&&Ht(d,null,w,"beforeMount");const Y=Zf(v,B);Y&&B.beforeEnter(O),r(O,h,g),((I=D&&D.onVnodeMounted)||Y||z)&&Ue(()=>{I&&rt(I,w,d),Y&&B.enter(O),z&&Ht(d,null,w,"mounted")},v)},se=(d,h,g,w,v)=>{if(g&&_(d,g),w)for(let C=0;C<w.length;C++)_(d,w[C]);if(v){let C=v.subTree;if(h===C){const x=v.vnode;se(d,x,x.scopeId,x.slotScopeIds,v.parent)}}},W=(d,h,g,w,v,C,x,T,O=0)=>{for(let I=O;I<d.length;I++){const D=d[I]=T?Rt(d[I]):st(d[I]);b(null,D,h,g,w,v,C,x,T)}},F=(d,h,g,w,v,C,x)=>{const T=h.el=d.el;let{patchFlag:O,dynamicChildren:I,dirs:D}=h;O|=d.patchFlag&16;const j=d.props||he,B=h.props||he;let z;if(g&&Vt(g,!1),(z=B.onVnodeBeforeUpdate)&&rt(z,g,h,d),D&&Ht(h,d,g,"beforeUpdate"),g&&Vt(g,!0),I?fe(d.dynamicChildren,I,T,g,w,Os(h,v),C):x||te(d,h,T,null,g,w,Os(h,v),C,!1),O>0){if(O&16)ye(T,h,j,B,g,w,v);else if(O&2&&j.class!==B.class&&i(T,"class",null,B.class,v),O&4&&i(T,"style",j.style,B.style,v),O&8){const Y=h.dynamicProps;for(let le=0;le<Y.length;le++){const pe=Y[le],we=j[pe],qe=B[pe];(qe!==we||pe==="value")&&i(T,pe,we,qe,v,d.children,g,w,L)}}O&1&&d.children!==h.children&&u(T,h.children)}else!x&&I==null&&ye(T,h,j,B,g,w,v);((z=B.onVnodeUpdated)||D)&&Ue(()=>{z&&rt(z,g,h,d),D&&Ht(h,d,g,"updated")},w)},fe=(d,h,g,w,v,C,x)=>{for(let T=0;T<h.length;T++){const O=d[T],I=h[T],D=O.el&&(O.type===Le||!kn(O,I)||O.shapeFlag&70)?f(O.el):g;b(O,I,D,null,w,v,C,x,!0)}},ye=(d,h,g,w,v,C,x)=>{if(g!==w){if(g!==he)for(const T in g)!Un(T)&&!(T in w)&&i(d,T,g[T],null,x,h.children,v,C,L);for(const T in w){if(Un(T))continue;const O=w[T],I=g[T];O!==I&&T!=="value"&&i(d,T,I,O,x,h.children,v,C,L)}"value"in w&&i(d,"value",g.value,w.value,x)}},Se=(d,h,g,w,v,C,x,T,O)=>{const I=h.el=d?d.el:a(""),D=h.anchor=d?d.anchor:a("");let{patchFlag:j,dynamicChildren:B,slotScopeIds:z}=h;z&&(T=T?T.concat(z):z),d==null?(r(I,g,w),r(D,g,w),W(h.children||[],g,D,v,C,x,T,O)):j>0&&j&64&&B&&d.dynamicChildren?(fe(d.dynamicChildren,B,g,v,C,x,T),(h.key!=null||v&&h===v.subTree)&&Hc(d,h,!0)):te(d,h,g,D,v,C,x,T,O)},Me=(d,h,g,w,v,C,x,T,O)=>{h.slotScopeIds=T,d==null?h.shapeFlag&512?v.ctx.activate(h,g,w,x,O):Ze(h,g,w,v,C,x,O):ve(d,h,O)},Ze=(d,h,g,w,v,C,x)=>{const T=d.component=ld(d,w,v);if(kc(d)&&(T.ctx.renderer=k),ud(T),T.asyncDep){if(v&&v.registerDep(T,X),!d.el){const O=T.subTree=ke(Xt);P(null,O,h,g)}}else X(T,d,h,g,v,C,x)},ve=(d,h,g)=>{const w=h.component=d.component;if(yf(d,h,g))if(w.asyncDep&&!w.asyncResolved){ie(w,h,g);return}else w.next=h,ff(w.update),w.effect.dirty=!0,w.update();else h.el=d.el,w.vnode=h},X=(d,h,g,w,v,C,x)=>{const T=()=>{if(d.isMounted){let{next:D,bu:j,u:B,parent:z,vnode:Y}=d;{const rn=Vc(d);if(rn){D&&(D.el=Y.el,ie(d,D,x)),rn.asyncDep.then(()=>{d.isUnmounted||T()});return}}let le=D,pe;Vt(d,!1),D?(D.el=Y.el,ie(d,D,x)):D=Y,j&&Er(j),(pe=D.props&&D.props.onVnodeBeforeUpdate)&&rt(pe,z,D,Y),Vt(d,!0);const we=As(d),qe=d.subTree;d.subTree=we,b(qe,we,f(qe.el),m(qe),d,v,C),D.el=we.el,le===null&&vf(d,we.el),B&&Ue(B,v),(pe=D.props&&D.props.onVnodeUpdated)&&Ue(()=>rt(pe,z,D,Y),v)}else{let D;const{el:j,props:B}=h,{bm:z,m:Y,parent:le}=d,pe=Ir(h);if(Vt(d,!1),z&&Er(z),!pe&&(D=B&&B.onVnodeBeforeMount)&&rt(D,le,h),Vt(d,!0),j&&Z){const we=()=>{d.subTree=As(d),Z(j,d.subTree,d,v,null)};pe?h.type.__asyncLoader().then(()=>!d.isUnmounted&&we()):we()}else{const we=d.subTree=As(d);b(null,we,g,w,d,v,C),h.el=we.el}if(Y&&Ue(Y,v),!pe&&(D=B&&B.onVnodeMounted)){const we=h;Ue(()=>rt(D,le,we),v)}(h.shapeFlag&256||le&&Ir(le.vnode)&&le.vnode.shapeFlag&256)&&d.a&&Ue(d.a,v),d.isMounted=!0,h=g=w=null}},O=d.effect=new Pi(T,Ve,()=>Fi(I),d.scope),I=d.update=()=>{O.dirty&&O.run()};I.id=d.uid,Vt(d,!0),I()},ie=(d,h,g)=>{h.component=d;const w=d.vnode.props;d.vnode=h,d.next=null,qf(d,h.props,w,g),Yf(d,h.children,g),en(),vo(d),tn()},te=(d,h,g,w,v,C,x,T,O=!1)=>{const I=d&&d.children,D=d?d.shapeFlag:0,j=h.children,{patchFlag:B,shapeFlag:z}=h;if(B>0){if(B&128){et(I,j,g,w,v,C,x,T,O);return}else if(B&256){ze(I,j,g,w,v,C,x,T,O);return}}z&8?(D&16&&L(I,v,C),j!==I&&u(g,j)):D&16?z&16?et(I,j,g,w,v,C,x,T,O):L(I,v,C,!0):(D&8&&u(g,""),z&16&&W(j,g,w,v,C,x,T,O))},ze=(d,h,g,w,v,C,x,T,O)=>{d=d||un,h=h||un;const I=d.length,D=h.length,j=Math.min(I,D);let B;for(B=0;B<j;B++){const z=h[B]=O?Rt(h[B]):st(h[B]);b(d[B],z,g,null,v,C,x,T,O)}I>D?L(d,v,C,!0,!1,j):W(h,g,w,v,C,x,T,O,j)},et=(d,h,g,w,v,C,x,T,O)=>{let I=0;const D=h.length;let j=d.length-1,B=D-1;for(;I<=j&&I<=B;){const z=d[I],Y=h[I]=O?Rt(h[I]):st(h[I]);if(kn(z,Y))b(z,Y,g,null,v,C,x,T,O);else break;I++}for(;I<=j&&I<=B;){const z=d[j],Y=h[B]=O?Rt(h[B]):st(h[B]);if(kn(z,Y))b(z,Y,g,null,v,C,x,T,O);else break;j--,B--}if(I>j){if(I<=B){const z=B+1,Y=z<D?h[z].el:w;for(;I<=B;)b(null,h[I]=O?Rt(h[I]):st(h[I]),g,Y,v,C,x,T,O),I++}}else if(I>B)for(;I<=j;)Ce(d[I],v,C,!0),I++;else{const z=I,Y=I,le=new Map;for(I=Y;I<=B;I++){const $e=h[I]=O?Rt(h[I]):st(h[I]);$e.key!=null&&le.set($e.key,I)}let pe,we=0;const qe=B-Y+1;let rn=!1,ao=0;const On=new Array(qe);for(I=0;I<qe;I++)On[I]=0;for(I=z;I<=j;I++){const $e=d[I];if(we>=qe){Ce($e,v,C,!0);continue}let nt;if($e.key!=null)nt=le.get($e.key);else for(pe=Y;pe<=B;pe++)if(On[pe-Y]===0&&kn($e,h[pe])){nt=pe;break}nt===void 0?Ce($e,v,C,!0):(On[nt-Y]=I+1,nt>=ao?ao=nt:rn=!0,b($e,h[nt],g,null,v,C,x,T,O),we++)}const co=rn?ed(On):un;for(pe=co.length-1,I=qe-1;I>=0;I--){const $e=Y+I,nt=h[$e],lo=$e+1<D?h[$e+1].el:w;On[I]===0?b(null,nt,g,lo,v,C,x,T,O):rn&&(pe<0||I!==co[pe]?Re(nt,g,lo,2):pe--)}}},Re=(d,h,g,w,v=null)=>{const{el:C,type:x,transition:T,children:O,shapeFlag:I}=d;if(I&6){Re(d.component.subTree,h,g,w);return}if(I&128){d.suspense.move(h,g,w);return}if(I&64){x.move(d,h,g,k);return}if(x===Le){r(C,h,g);for(let j=0;j<O.length;j++)Re(O[j],h,g,w);r(d.anchor,h,g);return}if(x===Tr){U(d,h,g);return}if(w!==2&&I&1&&T)if(w===0)T.beforeEnter(C),r(C,h,g),Ue(()=>T.enter(C),v);else{const{leave:j,delayLeave:B,afterLeave:z}=T,Y=()=>r(C,h,g),le=()=>{j(C,()=>{Y(),z&&z()})};B?B(C,Y,le):le()}else r(C,h,g)},Ce=(d,h,g,w=!1,v=!1)=>{const{type:C,props:x,ref:T,children:O,dynamicChildren:I,shapeFlag:D,patchFlag:j,dirs:B}=d;if(T!=null&&ri(T,null,g,d,!0),D&256){h.ctx.deactivate(d);return}const z=D&1&&B,Y=!Ir(d);let le;if(Y&&(le=x&&x.onVnodeBeforeUnmount)&&rt(le,h,d),D&6)Q(d.component,g,w);else{if(D&128){d.suspense.unmount(g,w);return}z&&Ht(d,null,h,"beforeUnmount"),D&64?d.type.remove(d,h,g,v,k,w):I&&(C!==Le||j>0&&j&64)?L(I,h,g,!1,!0):(C===Le&&j&384||!v&&D&16)&&L(O,h,g),w&&Ke(d)}(Y&&(le=x&&x.onVnodeUnmounted)||z)&&Ue(()=>{le&&rt(le,h,d),z&&Ht(d,null,h,"unmounted")},g)},Ke=d=>{const{type:h,el:g,anchor:w,transition:v}=d;if(h===Le){tt(g,w);return}if(h===Tr){K(d);return}const C=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:x,delayLeave:T}=v,O=()=>x(g,C);T?T(d.el,C,O):O()}else C()},tt=(d,h)=>{let g;for(;d!==h;)g=p(d),s(d),d=g;s(h)},Q=(d,h,g)=>{const{bum:w,scope:v,update:C,subTree:x,um:T}=d;w&&Er(w),v.stop(),C&&(C.active=!1,Ce(x,d,h,g)),T&&Ue(T,h),Ue(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},L=(d,h,g,w=!1,v=!1,C=0)=>{for(let x=C;x<d.length;x++)Ce(d[x],h,g,w,v)},m=d=>d.shapeFlag&6?m(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el);let S=!1;const A=(d,h,g)=>{d==null?h._vnode&&Ce(h._vnode,null,null,!0):b(h._vnode||null,d,h,null,null,null,g),S||(S=!0,vo(),Tc(),S=!1),h._vnode=d},k={p:b,um:Ce,m:Re,r:Ke,mt:Ze,mc:W,pc:te,pbc:fe,n:m,o:t};let G,Z;return e&&([G,Z]=e(k)),{render:A,hydrate:G,createApp:Wf(A,G)}}function Os({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Zf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Hc(t,e,n=!1){const r=t.children,s=e.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Rt(s[i]),a.el=o.el),n||Hc(o,a)),a.type===cs&&(a.el=o.el)}}function ed(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Vc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vc(e)}const td=t=>t.__isTeleport,Le=Symbol.for("v-fgt"),cs=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),Tr=Symbol.for("v-stc"),$n=[];let Ge=null;function ae(t=!1){$n.push(Ge=t?null:[])}function nd(){$n.pop(),Ge=$n[$n.length-1]||null}let Gn=1;function Po(t){Gn+=t}function Wc(t){return t.dynamicChildren=Gn>0?Ge||un:null,nd(),Gn>0&&Ge&&Ge.push(t),t}function de(t,e,n,r,s,i){return Wc(R(t,e,n,r,s,i,!0))}function $r(t,e,n,r,s){return Wc(ke(t,e,n,r,s,!0))}function si(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return t.type===e.type&&t.key===e.key}const ls="__vInternal",zc=({key:t})=>t??null,Rr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?be(t)||Ee(t)||q(t)?{i:Fe,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,r=0,s=null,i=t===Le?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zc(e),ref:e&&Rr(e),scopeId:ss,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Fe};return a?(ji(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=be(n)?8:16),Gn>0&&!o&&Ge&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ge.push(c),c}const ke=rd;function rd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===bf)&&(t=Xt),si(t)){const a=vn(t,e,!0);return n&&ji(a,n),Gn>0&&!i&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag|=-2,a}if(pd(t)&&(t=t.__vccOpts),e){e=sd(e);let{class:a,style:c}=e;a&&!be(a)&&(e.class=Ae(a)),me(c)&&(yc(c)&&!V(c)&&(c=Te({},c)),e.style=Ai(c))}const o=be(t)?1:Ef(t)?128:td(t)?64:me(t)?4:q(t)?2:0;return R(t,e,n,r,s,o,i,!0)}function sd(t){return t?yc(t)||ls in t?Te({},t):t:null}function vn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?od(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&zc(a),ref:e&&e.ref?n&&s?V(s)?s.concat(Rr(e)):[s,Rr(e)]:Rr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vn(t.ssContent),ssFallback:t.ssFallback&&vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Tt(t=" ",e=0){return ke(cs,null,t,e)}function id(t,e){const n=ke(Tr,null,t);return n.staticCount=e,n}function He(t="",e=!1){return e?(ae(),$r(Xt,null,t)):ke(Xt,null,t)}function st(t){return t==null||typeof t=="boolean"?ke(Xt):V(t)?ke(Le,null,t.slice()):typeof t=="object"?Rt(t):ke(cs,null,String(t))}function Rt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vn(t)}function ji(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ji(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ls in e)?e._ctx=Fe:s===3&&Fe&&(Fe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:Fe},n=32):(e=String(e),r&64?(n=16,e=[Tt(e)]):n=8);t.children=e,t.shapeFlag|=n}function od(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ae([e.class,r.class]));else if(s==="style")e.style=Ai([e.style,r.style]);else if(Xr(s)){const i=e[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rt(t,e,n,r=null){Je(t,e,7,[n,r])}const ad=Mc();let cd=0;function ld(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ad,i={uid:cd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new nc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fc(r,s),emitsOptions:Cc(r,s),emit:null,emitted:null,propsDefaults:he,inheritAttrs:r.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=pf.bind(null,i),t.ce&&t.ce(i),i}let Oe=null,jr,ii;{const t=Za(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};jr=e("__VUE_INSTANCE_SETTERS__",n=>Oe=n),ii=e("__VUE_SSR_SETTERS__",n=>us=n)}const sr=t=>{const e=Oe;return jr(t),t.scope.on(),()=>{t.scope.off(),jr(e)}},Oo=()=>{Oe&&Oe.scope.off(),jr(null)};function Kc(t){return t.vnode.shapeFlag&4}let us=!1;function ud(t,e=!1){e&&ii(e);const{props:n,children:r}=t.vnode,s=Kc(t);Kf(t,n,s,e),Jf(t,r);const i=s?fd(t,e):void 0;return e&&ii(!1),i}function fd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ts(new Proxy(t.ctx,Uf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?hd(t):null,i=sr(t);en();const o=Mt(r,t,0,[t.props,s]);if(tn(),i(),Ja(o)){if(o.then(Oo,Oo),e)return o.then(a=>{ko(t,a,e)}).catch(a=>{ns(a,t,0)});t.asyncDep=o}else ko(t,o,e)}else qc(t,e)}function ko(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=wc(e)),qc(t,n)}let xo;function qc(t,e,n){const r=t.type;if(!t.render){if(!e&&xo&&!r.render){const s=r.template||Bi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Te(Te({isCustomElement:i,delimiters:a},o),c);r.render=xo(s,l)}}t.render=r.render||Ve}{const s=sr(t);en();try{Ff(t)}finally{tn(),s()}}}function dd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Be(t,"get","$attrs"),e[n]}}))}function hd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return dd(t)},slots:t.slots,emit:t.emit,expose:e}}function fs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(wc(ts(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bn)return Bn[n](t)},has(e,n){return n in e||n in Bn}}))}function pd(t){return q(t)&&"__vccOpts"in t}const Ie=(t,e)=>tf(t,e,us);function Gc(t,e,n){const r=arguments.length;return r===2?me(e)&&!V(e)?si(e)?ke(t,null,[e]):ke(t,e):ke(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&si(n)&&(n=[n]),ke(t,e,n))}const md="3.4.20";/**
* @vue/runtime-dom v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const gd="http://www.w3.org/2000/svg",_d="http://www.w3.org/1998/Math/MathML",Ct=typeof document<"u"?document:null,No=Ct&&Ct.createElement("template"),yd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ct.createElementNS(gd,t):e==="mathml"?Ct.createElementNS(_d,t):Ct.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ct.createTextNode(t),createComment:t=>Ct.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ct.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{No.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=No.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},vd=Symbol("_vtc");function bd(t,e,n){const r=t[vd];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Lo=Symbol("_vod"),Ed=Symbol("_vsh"),wd=Symbol(""),Id=/(^|;)\s*display\s*:/;function Sd(t,e,n){const r=t.style,s=be(n);let i=!1;if(n&&!s){if(e)if(be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Cr(r,a,"")}else for(const o in e)n[o]==null&&Cr(r,o,"");for(const o in n)o==="display"&&(i=!0),Cr(r,o,n[o])}else if(s){if(e!==n){const o=r[wd];o&&(n+=";"+o),r.cssText=n,i=Id.test(n)}}else e&&t.removeAttribute("style");Lo in t&&(t[Lo]=i?r.display:"",t[Ed]&&(r.display="none"))}const Do=/\s*!important$/;function Cr(t,e,n){if(V(n))n.forEach(r=>Cr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Td(t,e);Do.test(n)?t.setProperty(Rn(r),n.replace(Do,""),"important"):t[r]=n}}const Mo=["Webkit","Moz","ms"],ks={};function Td(t,e){const n=ks[e];if(n)return n;let r=_n(e);if(r!=="filter"&&r in t)return ks[e]=r;r=Qa(r);for(let s=0;s<Mo.length;s++){const i=Mo[s]+r;if(i in t)return ks[e]=i}return e}const Uo="http://www.w3.org/1999/xlink";function Rd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Uo,e.slice(6,e.length)):t.setAttributeNS(Uo,e,n);else{const i=xu(e);n==null||i&&!ec(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Cd(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ec(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function an(t,e,n,r){t.addEventListener(e,n,r)}function Ad(t,e,n,r){t.removeEventListener(e,n,r)}const Fo=Symbol("_vei");function Pd(t,e,n,r,s=null){const i=t[Fo]||(t[Fo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Od(e);if(r){const l=i[e]=Nd(r,s);an(t,a,l,c)}else o&&(Ad(t,a,o,c),i[e]=void 0)}}const Bo=/(?:Once|Passive|Capture)$/;function Od(t){let e;if(Bo.test(t)){e={};let r;for(;r=t.match(Bo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rn(t.slice(2)),e]}let xs=0;const kd=Promise.resolve(),xd=()=>xs||(kd.then(()=>xs=0),xs=Date.now());function Nd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Je(Ld(r,n.value),e,5,[r])};return n.value=t,n.attached=xd(),n}function Ld(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const $o=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Dd=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?bd(t,r,l):e==="style"?Sd(t,n,r):Xr(e)?Ti(e)||Pd(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Md(t,e,r,l))?Cd(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Rd(t,e,r,l))};function Md(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&$o(e)&&q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $o(e)&&be(n)?!1:e in t}const jo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>Er(e,n):e};function Ud(t){t.target.composing=!0}function Ho(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ns=Symbol("_assign"),At={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ns]=jo(s);const i=r||s.props&&s.props.type==="number";an(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Gs(a)),t[Ns](a)}),n&&an(t,"change",()=>{t.value=t.value.trim()}),e||(an(t,"compositionstart",Ud),an(t,"compositionend",Ho),an(t,"change",Ho))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Ns]=jo(i),t.composing)return;const o=s||t.type==="number"?Gs(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Fd=Te({patchProp:Dd},yd);let Vo;function Bd(){return Vo||(Vo=Xf(Fd))}const $d=(...t)=>{const e=Bd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Hd(r);if(!s)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,jd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function jd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Hd(t){return be(t)?document.querySelector(t):t}var Vd=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Jc;const ds=t=>Jc=t,Yc=Symbol();function oi(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var jn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(jn||(jn={}));function Wd(){const t=rc(!0),e=t.run(()=>oe({}));let n=[],r=[];const s=ts({install(i){ds(s),s._a=i,i.provide(Yc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Vd?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Xc=()=>{};function Wo(t,e,n,r=Xc){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&sc()&&Lu(s),s}function on(t,...e){t.slice().forEach(n=>{n(...e)})}const zd=t=>t();function ai(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];oi(s)&&oi(r)&&t.hasOwnProperty(n)&&!Ee(r)&&!Dt(r)?t[n]=ai(s,r):t[n]=r}return t}const Kd=Symbol();function qd(t){return!oi(t)||!t.hasOwnProperty(Kd)}const{assign:wt}=Object;function Gd(t){return!!(Ee(t)&&t.effect)}function Jd(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=of(n.state.value[t]);return wt(u,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=ts(Ie(()=>{ds(n);const _=n._s.get(t);return o[p].call(_,_)})),f),{}))}return c=Qc(t,l,e,n,r,!0),c}function Qc(t,e,n={},r,s,i){let o;const a=wt({actions:{}},n),c={deep:!0};let l,u,f=[],p=[],_;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),oe({});let b;function N(W){let F;l=u=!1,typeof W=="function"?(W(r.state.value[t]),F={type:jn.patchFunction,storeId:t,events:_}):(ai(r.state.value[t],W),F={type:jn.patchObject,payload:W,storeId:t,events:_});const fe=b=Symbol();Ui().then(()=>{b===fe&&(l=!0)}),u=!0,on(f,F,r.state.value[t])}const P=i?function(){const{state:F}=n,fe=F?F():{};this.$patch(ye=>{wt(ye,fe)})}:Xc;function M(){o.stop(),f=[],p=[],r._s.delete(t)}function U(W,F){return function(){ds(r);const fe=Array.from(arguments),ye=[],Se=[];function Me(X){ye.push(X)}function Ze(X){Se.push(X)}on(p,{args:fe,name:W,store:J,after:Me,onError:Ze});let ve;try{ve=F.apply(this&&this.$id===t?this:J,fe)}catch(X){throw on(Se,X),X}return ve instanceof Promise?ve.then(X=>(on(ye,X),X)).catch(X=>(on(Se,X),Promise.reject(X))):(on(ye,ve),ve)}}const K={_p:r,$id:t,$onAction:Wo.bind(null,p),$patch:N,$reset:P,$subscribe(W,F={}){const fe=Wo(f,W,F.detached,()=>ye()),ye=o.run(()=>Fn(()=>r.state.value[t],Se=>{(F.flush==="sync"?u:l)&&W({storeId:t,type:jn.direct,events:_},Se)},wt({},c,F)));return fe},$dispose:M},J=rr(K);r._s.set(t,J);const se=(r._a&&r._a.runWithContext||zd)(()=>r._e.run(()=>(o=rc()).run(e)));for(const W in se){const F=se[W];if(Ee(F)&&!Gd(F)||Dt(F))i||(y&&qd(F)&&(Ee(F)?F.value=y[W]:ai(F,y[W])),r.state.value[t][W]=F);else if(typeof F=="function"){const fe=U(W,F);se[W]=fe,a.actions[W]=F}}return wt(J,se),wt(re(J),se),Object.defineProperty(J,"$state",{get:()=>r.state.value[t],set:W=>{N(F=>{wt(F,W)})}}),r._p.forEach(W=>{wt(J,o.run(()=>W({store:J,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(J.$state,y),l=!0,u=!0,J}function Yd(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=zf();return a=a||(l?Ye(Yc,null):null),a&&ds(a),a=Jc,a._s.has(r)||(i?Qc(r,e,s,a):Jd(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const cn=typeof document<"u";function Xd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function Ls(t,e){const n={};for(const r in e){const s=e[r];n[r]=Xe(s)?s.map(t):t(s)}return n}const Hn=()=>{},Xe=Array.isArray,Zc=/#/g,Qd=/&/g,Zd=/\//g,eh=/=/g,th=/\?/g,el=/\+/g,nh=/%5B/g,rh=/%5D/g,tl=/%5E/g,sh=/%60/g,nl=/%7B/g,ih=/%7C/g,rl=/%7D/g,oh=/%20/g;function Hi(t){return encodeURI(""+t).replace(ih,"|").replace(nh,"[").replace(rh,"]")}function ah(t){return Hi(t).replace(nl,"{").replace(rl,"}").replace(tl,"^")}function ci(t){return Hi(t).replace(el,"%2B").replace(oh,"+").replace(Zc,"%23").replace(Qd,"%26").replace(sh,"`").replace(nl,"{").replace(rl,"}").replace(tl,"^")}function ch(t){return ci(t).replace(eh,"%3D")}function lh(t){return Hi(t).replace(Zc,"%23").replace(th,"%3F")}function uh(t){return t==null?"":lh(t).replace(Zd,"%2F")}function Jn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const fh=/\/$/,dh=t=>t.replace(fh,"");function Ds(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=gh(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Jn(o)}}function hh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ph(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&bn(e.matched[r],n.matched[s])&&sl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mh(t[n],e[n]))return!1;return!0}function mh(t,e){return Xe(t)?Ko(t,e):Xe(e)?Ko(e,t):t===e}function Ko(t,e){return Xe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var Yn;(function(t){t.pop="pop",t.push="push"})(Yn||(Yn={}));var Vn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vn||(Vn={}));function _h(t){if(!t)if(cn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dh(t)}const yh=/^[^#]+#/;function vh(t,e){return t.replace(yh,"#")+e}function bh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const hs=()=>({left:window.scrollX,top:window.scrollY});function Eh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=bh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function qo(t,e){return(history.state?history.state.position-e:-1)+t}const li=new Map;function wh(t,e){li.set(t,e)}function Ih(t){const e=li.get(t);return li.delete(t),e}let Sh=()=>location.protocol+"//"+location.host;function il(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),zo(c,"")}return zo(n,t)+r+s}function Th(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=il(t,location),y=n.value,b=e.value;let N=0;if(p){if(n.value=_,e.value=p,o&&o===y){o=null;return}N=b?p.position-b.position:0}else r(_);s.forEach(P=>{P(n.value,y,{delta:N,type:Yn.pop,direction:N?N>0?Vn.forward:Vn.back:Vn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const _=()=>{const y=s.indexOf(p);y>-1&&s.splice(y,1)};return i.push(_),_}function u(){const{history:p}=window;p.state&&p.replaceState(ce({},p.state,{scroll:hs()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Go(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?hs():null}}function Rh(t){const{history:e,location:n}=window,r={value:il(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Sh()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[u?"replace":"assign"](p)}}function o(c,l){const u=ce({},e.state,Go(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ce({},s.value,e.state,{forward:c,scroll:hs()});i(u.current,u,!0);const f=ce({},Go(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Ch(t){t=_h(t);const e=Rh(t),n=Th(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ce({location:"",base:t,go:r,createHref:vh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ah(t){return typeof t=="string"||t&&typeof t=="object"}function ol(t){return typeof t=="string"||typeof t=="symbol"}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},al=Symbol("");var Jo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Jo||(Jo={}));function En(t,e){return ce(new Error,{type:t,[al]:!0},e)}function ut(t,e){return t instanceof Error&&al in t&&(e==null||!!(t.type&e))}const Yo="[^/]+?",Ph={sensitive:!1,strict:!1,start:!0,end:!0},Oh=/[.+*?^${}()[\]/\\]/g;function kh(t,e){const n=ce({},Ph,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let _=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(Oh,"\\$&"),_+=40;else if(p.type===1){const{value:y,repeatable:b,optional:N,regexp:P}=p;i.push({name:y,repeatable:b,optional:N});const M=P||Yo;if(M!==Yo){_+=10;try{new RegExp(`(${M})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${y}" (${M}): `+K.message)}}let U=b?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(U=N&&l.length<2?`(?:/${U})`:"/"+U),N&&(U+="?"),s+=U,_+=20,N&&(_+=-8),b&&(_+=-20),M===".*"&&(_+=-50)}u.push(_)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const _=u[p]||"",y=i[p-1];f[y.name]=_&&y.repeatable?_.split("/"):_}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const _ of p)if(_.type===0)u+=_.value;else if(_.type===1){const{value:y,repeatable:b,optional:N}=_,P=y in l?l[y]:"";if(Xe(P)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const M=Xe(P)?P.join("/"):P;if(!M)if(N)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=M}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function xh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Nh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=xh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xo(r))return 1;if(Xo(s))return-1}return s.length-r.length}function Xo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Lh={type:0,value:""},Dh=/[a-zA-Z0-9_]/;function Mh(t){if(!t)return[[]];if(t==="/")return[[Lh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Dh.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Uh(t,e,n){const r=kh(Mh(t.path),n),s=ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Fh(t,e){const n=[],r=new Map;e=ea({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,p){const _=!p,y=Bh(u);y.aliasOf=p&&p.record;const b=ea(e,u),N=[y];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of U)N.push(ce({},y,{components:p?p.record.components:y.components,path:K,aliasOf:p?p.record:y}))}let P,M;for(const U of N){const{path:K}=U;if(f&&K[0]!=="/"){const J=f.record.path,$=J[J.length-1]==="/"?"":"/";U.path=f.record.path+(K&&$+K)}if(P=Uh(U,f,b),p?p.alias.push(P):(M=M||P,M!==P&&M.alias.push(P),_&&u.name&&!Zo(P)&&o(u.name)),y.children){const J=y.children;for(let $=0;$<J.length;$++)i(J[$],P,p&&p.children[$])}p=p||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return M?()=>{o(M)}:Hn}function o(u){if(ol(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&Nh(u,n[f])>=0&&(u.record.path!==n[f].record.path||!cl(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Zo(u)&&r.set(u.record.name,u)}function l(u,f){let p,_={},y,b;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw En(1,{location:u});b=p.record.name,_=ce(Qo(f.params,p.keys.filter(M=>!M.optional).concat(p.parent?p.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&Qo(u.params,p.keys.map(M=>M.name))),y=p.stringify(_)}else if(u.path!=null)y=u.path,p=n.find(M=>M.re.test(y)),p&&(_=p.parse(y),b=p.record.name);else{if(p=f.name?r.get(f.name):n.find(M=>M.re.test(f.path)),!p)throw En(1,{location:u,currentLocation:f});b=p.record.name,_=ce({},f.params,u.params),y=p.stringify(_)}const N=[];let P=p;for(;P;)N.unshift(P.record),P=P.parent;return{name:b,path:y,params:_,matched:N,meta:jh(N)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Qo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Bh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$h(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function $h(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Zo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jh(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function ea(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function cl(t,e){return e.children.some(n=>n===t||cl(t,n))}function Hh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(el," "),o=i.indexOf("="),a=Jn(o<0?i:i.slice(0,o)),c=o<0?null:Jn(i.slice(o+1));if(a in e){let l=e[a];Xe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ta(t){let e="";for(let n in t){const r=t[n];if(n=ch(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xe(r)?r.map(i=>i&&ci(i)):[r&&ci(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Vh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Xe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Wh=Symbol(""),na=Symbol(""),ps=Symbol(""),ll=Symbol(""),ui=Symbol("");function xn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(En(4,{from:n,to:e})):p instanceof Error?c(p):Ah(p)?c(En(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function Ms(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(zh(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Pt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=Xd(u)?u.default:u;o.components[a]=f;const _=(f.__vccOpts||f)[e];return _&&Pt(_,n,r,o,a,s)()}))}}return i}function zh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ra(t){const e=Ye(ps),n=Ye(ll),r=Ie(()=>e.resolve(Jt(t.to))),s=Ie(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(bn.bind(null,u));if(p>-1)return p;const _=sa(c[l-2]);return l>1&&sa(u)===_&&f[f.length-1].path!==_?f.findIndex(bn.bind(null,c[l-2])):p}),i=Ie(()=>s.value>-1&&Jh(n.params,r.value.params)),o=Ie(()=>s.value>-1&&s.value===n.matched.length-1&&sl(n.params,r.value.params));function a(c={}){return Gh(c)?e[Jt(t.replace)?"replace":"push"](Jt(t.to)).catch(Hn):Promise.resolve()}return{route:r,href:Ie(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Kh=Oc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ra,setup(t,{slots:e}){const n=rr(ra(t)),{options:r}=Ye(ps),s=Ie(()=>({[ia(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ia(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Gc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),qh=Kh;function Gh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function sa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ia=(t,e,n)=>t??e??n,Yh=Oc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ye(ui),s=Ie(()=>t.route||r.value),i=Ye(na,0),o=Ie(()=>{let l=Jt(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ie(()=>s.value.matched[o.value]);Sr(na,Ie(()=>o.value+1)),Sr(Wh,a),Sr(ui,s);const c=oe();return Fn(()=>[c.value,a.value,t.name],([l,u,f],[p,_,y])=>{u&&(u.instances[f]=l,_&&_!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!bn(u,_)||!p)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return oa(n.default,{Component:p,route:l});const _=f.props[u],y=_?_===!0?l.params:typeof _=="function"?_(l):_:null,N=Gc(p,ce({},y,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return oa(n.default,{Component:N,route:l})||N}}});function oa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ul=Yh;function Xh(t){const e=Fh(t.routes,t),n=t.parseQuery||Hh,r=t.stringifyQuery||ta,s=t.history,i=xn(),o=xn(),a=xn(),c=nf(vt);let l=vt;cn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ls.bind(null,m=>""+m),f=Ls.bind(null,uh),p=Ls.bind(null,Jn);function _(m,S){let A,k;return ol(m)?(A=e.getRecordMatcher(m),k=S):k=m,e.addRoute(k,A)}function y(m){const S=e.getRecordMatcher(m);S&&e.removeRoute(S)}function b(){return e.getRoutes().map(m=>m.record)}function N(m){return!!e.getRecordMatcher(m)}function P(m,S){if(S=ce({},S||c.value),typeof m=="string"){const h=Ds(n,m,S.path),g=e.resolve({path:h.path},S),w=s.createHref(h.fullPath);return ce(h,g,{params:p(g.params),hash:Jn(h.hash),redirectedFrom:void 0,href:w})}let A;if(m.path!=null)A=ce({},m,{path:Ds(n,m.path,S.path).path});else{const h=ce({},m.params);for(const g in h)h[g]==null&&delete h[g];A=ce({},m,{params:f(h)}),S.params=f(S.params)}const k=e.resolve(A,S),G=m.hash||"";k.params=u(p(k.params));const Z=hh(r,ce({},m,{hash:ah(G),path:k.path})),d=s.createHref(Z);return ce({fullPath:Z,hash:G,query:r===ta?Vh(m.query):m.query||{}},k,{redirectedFrom:void 0,href:d})}function M(m){return typeof m=="string"?Ds(n,m,c.value.path):ce({},m)}function U(m,S){if(l!==m)return En(8,{from:S,to:m})}function K(m){return se(m)}function J(m){return K(ce(M(m),{replace:!0}))}function $(m){const S=m.matched[m.matched.length-1];if(S&&S.redirect){const{redirect:A}=S;let k=typeof A=="function"?A(m):A;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=M(k):{path:k},k.params={}),ce({query:m.query,hash:m.hash,params:k.path!=null?{}:m.params},k)}}function se(m,S){const A=l=P(m),k=c.value,G=m.state,Z=m.force,d=m.replace===!0,h=$(A);if(h)return se(ce(M(h),{state:typeof h=="object"?ce({},G,h.state):G,force:Z,replace:d}),S||A);const g=A;g.redirectedFrom=S;let w;return!Z&&ph(r,k,A)&&(w=En(16,{to:g,from:k}),Re(k,k,!0,!1)),(w?Promise.resolve(w):fe(g,k)).catch(v=>ut(v)?ut(v,2)?v:et(v):te(v,g,k)).then(v=>{if(v){if(ut(v,2))return se(ce({replace:d},M(v.to),{state:typeof v.to=="object"?ce({},G,v.to.state):G,force:Z}),S||g)}else v=Se(g,k,!0,d,G);return ye(g,k,v),v})}function W(m,S){const A=U(m,S);return A?Promise.reject(A):Promise.resolve()}function F(m){const S=tt.values().next().value;return S&&typeof S.runWithContext=="function"?S.runWithContext(m):m()}function fe(m,S){let A;const[k,G,Z]=Qh(m,S);A=Ms(k.reverse(),"beforeRouteLeave",m,S);for(const h of k)h.leaveGuards.forEach(g=>{A.push(Pt(g,m,S))});const d=W.bind(null,m,S);return A.push(d),L(A).then(()=>{A=[];for(const h of i.list())A.push(Pt(h,m,S));return A.push(d),L(A)}).then(()=>{A=Ms(G,"beforeRouteUpdate",m,S);for(const h of G)h.updateGuards.forEach(g=>{A.push(Pt(g,m,S))});return A.push(d),L(A)}).then(()=>{A=[];for(const h of Z)if(h.beforeEnter)if(Xe(h.beforeEnter))for(const g of h.beforeEnter)A.push(Pt(g,m,S));else A.push(Pt(h.beforeEnter,m,S));return A.push(d),L(A)}).then(()=>(m.matched.forEach(h=>h.enterCallbacks={}),A=Ms(Z,"beforeRouteEnter",m,S,F),A.push(d),L(A))).then(()=>{A=[];for(const h of o.list())A.push(Pt(h,m,S));return A.push(d),L(A)}).catch(h=>ut(h,8)?h:Promise.reject(h))}function ye(m,S,A){a.list().forEach(k=>F(()=>k(m,S,A)))}function Se(m,S,A,k,G){const Z=U(m,S);if(Z)return Z;const d=S===vt,h=cn?history.state:{};A&&(k||d?s.replace(m.fullPath,ce({scroll:d&&h&&h.scroll},G)):s.push(m.fullPath,G)),c.value=m,Re(m,S,A,d),et()}let Me;function Ze(){Me||(Me=s.listen((m,S,A)=>{if(!Q.listening)return;const k=P(m),G=$(k);if(G){se(ce(G,{replace:!0}),k).catch(Hn);return}l=k;const Z=c.value;cn&&wh(qo(Z.fullPath,A.delta),hs()),fe(k,Z).catch(d=>ut(d,12)?d:ut(d,2)?(se(d.to,k).then(h=>{ut(h,20)&&!A.delta&&A.type===Yn.pop&&s.go(-1,!1)}).catch(Hn),Promise.reject()):(A.delta&&s.go(-A.delta,!1),te(d,k,Z))).then(d=>{d=d||Se(k,Z,!1),d&&(A.delta&&!ut(d,8)?s.go(-A.delta,!1):A.type===Yn.pop&&ut(d,20)&&s.go(-1,!1)),ye(k,Z,d)}).catch(Hn)}))}let ve=xn(),X=xn(),ie;function te(m,S,A){et(m);const k=X.list();return k.length?k.forEach(G=>G(m,S,A)):console.error(m),Promise.reject(m)}function ze(){return ie&&c.value!==vt?Promise.resolve():new Promise((m,S)=>{ve.add([m,S])})}function et(m){return ie||(ie=!m,Ze(),ve.list().forEach(([S,A])=>m?A(m):S()),ve.reset()),m}function Re(m,S,A,k){const{scrollBehavior:G}=t;if(!cn||!G)return Promise.resolve();const Z=!A&&Ih(qo(m.fullPath,0))||(k||!A)&&history.state&&history.state.scroll||null;return Ui().then(()=>G(m,S,Z)).then(d=>d&&Eh(d)).catch(d=>te(d,m,S))}const Ce=m=>s.go(m);let Ke;const tt=new Set,Q={currentRoute:c,listening:!0,addRoute:_,removeRoute:y,hasRoute:N,getRoutes:b,resolve:P,options:t,push:K,replace:J,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:ze,install(m){const S=this;m.component("RouterLink",qh),m.component("RouterView",ul),m.config.globalProperties.$router=S,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>Jt(c)}),cn&&!Ke&&c.value===vt&&(Ke=!0,K(s.location).catch(G=>{}));const A={};for(const G in vt)Object.defineProperty(A,G,{get:()=>c.value[G],enumerable:!0});m.provide(ps,S),m.provide(ll,gc(A)),m.provide(ui,c);const k=m.unmount;tt.add(m),m.unmount=function(){tt.delete(m),tt.size<1&&(l=vt,Me&&Me(),Me=null,c.value=vt,Ke=!1,ie=!1),k()}}};function L(m){return m.reduce((S,A)=>S.then(()=>F(A)),Promise.resolve())}return Q}function Qh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>bn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>bn(l,c))||s.push(c))}return[n,r,s]}function Zh(){return Ye(ps)}const ir=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ep={class:"main-container"},tp={__name:"App",setup(t){return(e,n)=>(ae(),de("div",ep,[ke(Jt(ul))]))}},np=ir(tp,[["__scopeId","data-v-4129fcea"]]);var aa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[u],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new sp;const p=i<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),f!==64){const y=l<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ip=function(t){const e=fl(t);return dl.encodeByteArray(e,!0)},hl=function(t){return ip(t).replace(/\./g,"")},pl=function(t){try{return dl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=()=>op().__FIREBASE_DEFAULTS__,cp=()=>{if(typeof process>"u"||typeof aa>"u")return;const t=aa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pl(t[1]);return e&&JSON.parse(e)},Vi=()=>{try{return ap()||cp()||lp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},up=t=>{var e,n;return(n=(e=Vi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ml=()=>{var t;return(t=Vi())===null||t===void 0?void 0:t.config},gl=t=>{var e;return(e=Vi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function hp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mp(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gp(){try{return typeof indexedDB=="object"}catch{return!1}}function _p(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="FirebaseError";class $t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yp,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,or.prototype.create)}}class or{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?vp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $t(s,a,r)}}function vp(t,e){return t.replace(bp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bp=/\{\$([^}]+)}/g;function Ep(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ca(i)&&ca(o)){if(!Hr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ca(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Dn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Mn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wp(t,e){const n=new Ip(t,e);return n.subscribe.bind(n)}class Ip{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Sp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Us),s.error===void 0&&(s.error=Us),s.complete===void 0&&(s.complete=Us);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Us(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cp(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rp(t){return t===Wt?void 0:t}function Cp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Pp={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Op=ue.INFO,kp={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},xp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=kp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _l{constructor(e){this.name=e,this._logLevel=Op,this._logHandler=xp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Np=(t,e)=>e.some(n=>t instanceof n);let la,ua;function Lp(){return la||(la=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dp(){return ua||(ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yl=new WeakMap,fi=new WeakMap,vl=new WeakMap,Fs=new WeakMap,Wi=new WeakMap;function Mp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ut(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yl.set(n,t)}).catch(()=>{}),Wi.set(e,t),e}function Up(t){if(fi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fi.set(t,e)}let di={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fp(t){di=t(di)}function Bp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bs(this),e,...n);return vl.set(r,e.sort?e.sort():[e]),Ut(r)}:Dp().includes(t)?function(...e){return t.apply(Bs(this),e),Ut(yl.get(this))}:function(...e){return Ut(t.apply(Bs(this),e))}}function $p(t){return typeof t=="function"?Bp(t):(t instanceof IDBTransaction&&Up(t),Np(t,Lp())?new Proxy(t,di):t)}function Ut(t){if(t instanceof IDBRequest)return Mp(t);if(Fs.has(t))return Fs.get(t);const e=$p(t);return e!==t&&(Fs.set(t,e),Wi.set(e,t)),e}const Bs=t=>Wi.get(t);function jp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ut(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ut(o.result),c.oldVersion,c.newVersion,Ut(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Hp=["get","getKey","getAll","getAllKeys","count"],Vp=["put","add","delete","clear"],$s=new Map;function fa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($s.get(e))return $s.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Vp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return $s.set(e,i),i}Fp(t=>({...t,get:(e,n,r)=>fa(e,n)||t.get(e,n,r),has:(e,n)=>!!fa(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hi="@firebase/app",da="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new _l("@firebase/app"),Kp="@firebase/app-compat",qp="@firebase/analytics-compat",Gp="@firebase/analytics",Jp="@firebase/app-check-compat",Yp="@firebase/app-check",Xp="@firebase/auth",Qp="@firebase/auth-compat",Zp="@firebase/database",em="@firebase/database-compat",tm="@firebase/functions",nm="@firebase/functions-compat",rm="@firebase/installations",sm="@firebase/installations-compat",im="@firebase/messaging",om="@firebase/messaging-compat",am="@firebase/performance",cm="@firebase/performance-compat",lm="@firebase/remote-config",um="@firebase/remote-config-compat",fm="@firebase/storage",dm="@firebase/storage-compat",hm="@firebase/firestore",pm="@firebase/firestore-compat",mm="firebase",gm="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="[DEFAULT]",_m={[hi]:"fire-core",[Kp]:"fire-core-compat",[Gp]:"fire-analytics",[qp]:"fire-analytics-compat",[Yp]:"fire-app-check",[Jp]:"fire-app-check-compat",[Xp]:"fire-auth",[Qp]:"fire-auth-compat",[Zp]:"fire-rtdb",[em]:"fire-rtdb-compat",[tm]:"fire-fn",[nm]:"fire-fn-compat",[rm]:"fire-iid",[sm]:"fire-iid-compat",[im]:"fire-fcm",[om]:"fire-fcm-compat",[am]:"fire-perf",[cm]:"fire-perf-compat",[lm]:"fire-rc",[um]:"fire-rc-compat",[fm]:"fire-gcs",[dm]:"fire-gcs-compat",[hm]:"fire-fst",[pm]:"fire-fst-compat","fire-js":"fire-js",[mm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new Map,mi=new Map;function ym(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xn(t){const e=t.name;if(mi.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;mi.set(e,t);for(const n of Vr.values())ym(n,t);return!0}function bl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ft=new or("app","Firebase",vm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=gm;function El(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ft.create("bad-app-name",{appName:String(s)});if(n||(n=ml()),!n)throw Ft.create("no-options");const i=Vr.get(s);if(i){if(Hr(n,i.options)&&Hr(r,i.config))return i;throw Ft.create("duplicate-app",{appName:s})}const o=new Ap(s);for(const c of mi.values())o.addComponent(c);const a=new bm(n,r,o);return Vr.set(s,a),a}function Em(t=pi){const e=Vr.get(t);if(!e&&t===pi&&ml())return El();if(!e)throw Ft.create("no-app",{appName:t});return e}function pn(t,e,n){var r;let s=(r=_m[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}Xn(new wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="firebase-heartbeat-database",Im=1,Qn="firebase-heartbeat-store";let js=null;function wl(){return js||(js=jp(wm,Im,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ft.create("idb-open",{originalErrorMessage:t.message})})),js}async function Sm(t){try{const n=(await wl()).transaction(Qn),r=await n.objectStore(Qn).get(Il(t));return await n.done,r}catch(e){if(e instanceof $t)Qt.warn(e.message);else{const n=Ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(n.message)}}}async function ha(t,e){try{const r=(await wl()).transaction(Qn,"readwrite");await r.objectStore(Qn).put(e,Il(t)),await r.done}catch(n){if(n instanceof $t)Qt.warn(n.message);else{const r=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(r.message)}}}function Il(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=1024,Rm=30*24*60*60*1e3;class Cm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pa();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Rm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pa(),{heartbeatsToSend:r,unsentEntries:s}=Am(this._heartbeatsCache.heartbeats),i=hl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function pa(){return new Date().toISOString().substring(0,10)}function Am(t,e=Tm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ma(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ma(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gp()?_p().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ha(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ha(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ma(t){return hl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t){Xn(new wn("platform-logger",e=>new Wp(e),"PRIVATE")),Xn(new wn("heartbeat",e=>new Cm(e),"PRIVATE")),pn(hi,da,t),pn(hi,da,"esm2017"),pn("fire-js","")}Om("");function zi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Sl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const km=Sl,Tl=new or("auth","Firebase",Sl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new _l("@firebase/auth");function xm(t,...e){Wr.logLevel<=ue.WARN&&Wr.warn(`Auth (${cr}): ${t}`,...e)}function Ar(t,...e){Wr.logLevel<=ue.ERROR&&Wr.error(`Auth (${cr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,...e){throw Ki(t,...e)}function at(t,...e){return Ki(t,...e)}function Nm(t,e,n){const r=Object.assign(Object.assign({},km()),{[e]:n});return new or("auth","Firebase",r).create(e,{appName:t.name})}function Ki(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tl.create(t,...e)}function H(t,e,...n){if(!t)throw Ki(e,...n)}function ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ar(e),new Error(e)}function mt(t,e){t||ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lm(){return ga()==="http:"||ga()==="https:"}function ga(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lm()||hp()||"connection"in navigator)?navigator.onLine:!0}function Mm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){this.shortDelay=e,this.longDelay=n,mt(n>e,"Short delay should be less than long delay!"),this.isMobile=dp()||pp()}get(){return Dm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t,e){mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=new lr(3e4,6e4);function nn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jt(t,e,n,r,s={}){return Cl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ar(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Rl.fetch()(Al(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Cl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Um),e);try{const s=new $m(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw br(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw br(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw br(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw br(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Nm(t,u,l);Qe(t,u)}}catch(s){if(s instanceof $t)throw s;Qe(t,"network-request-failed",{message:String(s)})}}async function ms(t,e,n,r,s={}){const i=await jt(t,e,n,r,s);return"mfaPendingCredential"in i&&Qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Al(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?qi(t.config,s):`${t.config.apiScheme}://${s}`}function Bm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $m{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),Fm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function br(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=at(t,e,r);return s.customData._tokenResponse=n,s}function _a(t){return t!==void 0&&t.enterprise!==void 0}class jm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Bm(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Hm(t,e){return jt(t,"GET","/v2/recaptchaConfig",nn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(t,e){return jt(t,"POST","/v1/accounts:delete",e)}async function Wm(t,e){return jt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zm(t,e=!1){const n=_t(t),r=await n.getIdToken(e),s=Gi(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wn(Hs(s.auth_time)),issuedAtTime:Wn(Hs(s.iat)),expirationTime:Wn(Hs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hs(t){return Number(t)*1e3}function Gi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ar("JWT malformed, contained fewer than 3 sections"),null;try{const s=pl(n);return s?JSON.parse(s):(Ar("Failed to decode base64 JWT payload"),null)}catch(s){return Ar("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Km(t){const e=Gi(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $t&&qm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wn(this.lastLoginAt),this.creationTime=Wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Zn(t,Wm(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Xm(i.providerUserInfo):[],a=Ym(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Pl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Jm(t){const e=_t(t);await zr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ym(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xm(t){return t.map(e=>{var{providerId:n}=e,r=zi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qm(t,e){const n=await Cl(t,{},async()=>{const r=ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Al(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Zm(t,e){return jt(t,"POST","/v2/accounts:revokeToken",nn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Km(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new er;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new er,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=zi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zn(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zm(this,e)}reload(){return Jm(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zn(this,Vm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:K,isAnonymous:J,providerData:$,stsTokenManager:se}=n;H(U&&se,e,"internal-error");const W=er.fromJSON(this.name,se);H(typeof U=="string",e,"internal-error"),bt(f,e.name),bt(p,e.name),H(typeof K=="boolean",e,"internal-error"),H(typeof J=="boolean",e,"internal-error"),bt(_,e.name),bt(y,e.name),bt(b,e.name),bt(N,e.name),bt(P,e.name),bt(M,e.name);const F=new Yt({uid:U,auth:e,email:p,emailVerified:K,displayName:f,isAnonymous:J,photoURL:y,phoneNumber:_,tenantId:b,stsTokenManager:W,createdAt:P,lastLoginAt:M});return $&&Array.isArray($)&&(F.providerData=$.map(fe=>Object.assign({},fe))),N&&(F._redirectEventId=N),F}static async _fromIdTokenResponse(e,n,r=!1){const s=new er;s.updateFromServerResponse(n);const i=new Yt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await zr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new Map;function dt(t){mt(t instanceof Function,"Expected a class definition");let e=ya.get(t);return e?(mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ya.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ol.type="NONE";const va=Ol;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t,e,n){return`firebase:${t}:${e}:${n}`}class mn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Pr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Pr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new mn(dt(va),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||dt(va);const o=Pr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Yt._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new mn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new mn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dl(e))return"Blackberry";if(Ml(e))return"Webos";if(Ji(e))return"Safari";if((e.includes("chrome/")||xl(e))&&!e.includes("edge/"))return"Chrome";if(Ll(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kl(t=xe()){return/firefox\//i.test(t)}function Ji(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xl(t=xe()){return/crios\//i.test(t)}function Nl(t=xe()){return/iemobile/i.test(t)}function Ll(t=xe()){return/android/i.test(t)}function Dl(t=xe()){return/blackberry/i.test(t)}function Ml(t=xe()){return/webos/i.test(t)}function gs(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eg(t=xe()){var e;return gs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tg(){return mp()&&document.documentMode===10}function Ul(t=xe()){return gs(t)||Ll(t)||Ml(t)||Dl(t)||/windows phone/i.test(t)||Nl(t)}function ng(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t,e=[]){let n;switch(t){case"Browser":n=ba(xe());break;case"Worker":n=`${ba(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(t,e={}){return jt(t,"GET","/v2/passwordPolicy",nn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=6;class og{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ig,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ea(this),this.idTokenSubscription=new Ea(this),this.beforeStateQueue=new rg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await mn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?_t(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sg(this),n=new og(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new or("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Zm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await mn.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cn(t){return _t(t)}class Ea{constructor(e){this.auth=e,this.observer=null,this.addObserver=wp(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cg(t){_s=t}function Bl(t){return _s.loadJS(t)}function lg(){return _s.recaptchaEnterpriseScript}function ug(){return _s.gapiScript}function fg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const dg="recaptcha-enterprise",hg="NO_RECAPTCHA";class pg{constructor(e){this.type=dg,this.auth=Cn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Hm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new jm(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;_a(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(hg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&_a(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=lg();c.length!==0&&(c+=a),Bl(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function wa(t,e,n,r=!1){const s=new pg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ia(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await wa(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await wa(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t,e){const n=bl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Hr(i,e??{}))return s;Qe(s,"already-initialized")}return n.initialize({options:e})}function gg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _g(t,e,n){const r=Cn(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=$l(e),{host:o,port:a}=yg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||vg()}function $l(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yg(t){const e=$l(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Sa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Sa(o)}}}function Sa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,n){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}async function bg(t,e){return jt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(t,e){return ms(t,"POST","/v1/accounts:signInWithPassword",nn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(t,e){return ms(t,"POST","/v1/accounts:signInWithEmailLink",nn(t,e))}async function Ig(t,e){return ms(t,"POST","/v1/accounts:signInWithEmailLink",nn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Yi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new tr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new tr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ia(e,n,"signInWithPassword",Eg);case"emailLink":return wg(e,{email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ia(e,r,"signUpPassword",bg);case"emailLink":return Ig(e,{idToken:n,email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(t,e){return ms(t,"POST","/v1/accounts:signInWithIdp",nn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="http://localhost";class Zt extends Yi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=zi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Zt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gn(e,n)}buildRequest(){const e={requestUri:Sg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ar(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rg(t){const e=Dn(Mn(t)).link,n=e?Dn(Mn(e)).deep_link_id:null,r=Dn(Mn(t)).deep_link_id;return(r?Dn(Mn(r)).link:null)||r||n||e||t}class Xi{constructor(e){var n,r,s,i,o,a;const c=Dn(Mn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Tg((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Rg(e);try{return new Xi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.providerId=An.PROVIDER_ID}static credential(e,n){return tr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xi.parseLink(n);return H(r,"argument-error"),tr._fromEmailAndCode(e,r.code,r.tenantId)}}An.PROVIDER_ID="password";An.EMAIL_PASSWORD_SIGN_IN_METHOD="password";An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends jl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends ur{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends ur{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends ur{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends ur{constructor(){super("twitter.com")}static credential(e,n){return Zt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Yt._fromIdTokenResponse(e,r,s),o=Ta(r);return new In({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ta(r);return new In({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ta(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends $t{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Kr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Kr(e,n,r,s)}}function Hl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Kr._fromErrorAndOperation(t,i,e,r):i})}async function Cg(t,e,n=!1){const r=await Zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return In._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Zn(t,Hl(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=Gi(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),In._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(t,e,n=!1){const r="signIn",s=await Hl(t,r,e),i=await In._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Pg(t,e){return Vl(Cn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(t){const e=Cn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function kg(t,e,n){return Pg(_t(t),An.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Og(t),r})}function xg(t,e,n,r){return _t(t).onIdTokenChanged(e,n,r)}function Ng(t,e,n){return _t(t).beforeAuthStateChanged(e,n)}function Lg(t,e,n,r){return _t(t).onAuthStateChanged(e,n,r)}function Dg(t){return _t(t).signOut()}const qr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qr,"1"),this.storage.removeItem(qr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(){const t=xe();return Ji(t)||gs(t)}const Ug=1e3,Fg=10;class zl extends Wl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mg()&&ng(),this.fallbackToPolling=Ul(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);tg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ug)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zl.type="LOCAL";const Bg=zl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends Wl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kl.type="SESSION";const ql=Kl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ys(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await $g(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ys.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Qi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return window}function Hg(t){ct().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function Vg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zg(){return Gl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="firebaseLocalStorageDb",Kg=1,Gr="firebaseLocalStorage",Yl="fbase_key";class fr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vs(t,e){return t.transaction([Gr],e?"readwrite":"readonly").objectStore(Gr)}function qg(){const t=indexedDB.deleteDatabase(Jl);return new fr(t).toPromise()}function _i(){const t=indexedDB.open(Jl,Kg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gr,{keyPath:Yl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gr)?e(r):(r.close(),await qg(),e(await _i()))})})}async function Ra(t,e,n){const r=vs(t,!0).put({[Yl]:e,value:n});return new fr(r).toPromise()}async function Gg(t,e){const n=vs(t,!1).get(e),r=await new fr(n).toPromise();return r===void 0?null:r.value}function Ca(t,e){const n=vs(t,!0).delete(e);return new fr(n).toPromise()}const Jg=800,Yg=3;class Xl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _i(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Yg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ys._getInstance(zg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Vg(),!this.activeServiceWorker)return;this.sender=new jg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _i();return await Ra(e,qr,"1"),await Ca(e,qr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ra(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Gg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ca(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=vs(s,!1).getAll();return new fr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xl.type="LOCAL";const Xg=Xl;new lr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t,e){return e?dt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Yi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zg(t){return Vl(t.auth,new Zi(t),t.bypassAuthState)}function e_(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Ag(n,new Zi(t),t.bypassAuthState)}async function t_(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Cg(n,new Zi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zg;case"linkViaPopup":case"linkViaRedirect":return t_;case"reauthViaPopup":case"reauthViaRedirect":return e_;default:Qe(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=new lr(2e3,1e4);class ln extends Ql{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=Qi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n_.get())};e()}}ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="pendingRedirect",Or=new Map;class s_ extends Ql{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Or.get(this.auth._key());if(!e){try{const r=await i_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Or.set(this.auth._key(),e)}return this.bypassAuthState||Or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function i_(t,e){const n=c_(e),r=a_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function o_(t,e){Or.set(t._key(),e)}function a_(t){return dt(t._redirectPersistence)}function c_(t){return Pr(r_,t.config.apiKey,t.name)}async function l_(t,e,n=!1){const r=Cn(t),s=Qg(r,e),o=await new s_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=10*60*1e3;class f_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!d_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=u_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Aa(e))}saveEventToCache(e){this.cachedEventUids.add(Aa(e)),this.lastProcessedEventTime=Date.now()}}function Aa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function d_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(t,e={}){return jt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,m_=/^https?/;async function g_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await h_(t);for(const n of e)try{if(__(n))return}catch{}Qe(t,"unauthorized-domain")}function __(t){const e=gi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!m_.test(n))return!1;if(p_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=new lr(3e4,6e4);function Pa(){const t=ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function v_(t){return new Promise((e,n)=>{var r,s,i;function o(){Pa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pa(),n(at(t,"network-request-failed"))},timeout:y_.get()})}if(!((s=(r=ct().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ct().gapi)===null||i===void 0)&&i.load)o();else{const a=fg("iframefcb");return ct()[a]=()=>{gapi.load?o():n(at(t,"network-request-failed"))},Bl(`${ug()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw kr=null,e})}let kr=null;function b_(t){return kr=kr||v_(t),kr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=new lr(5e3,15e3),w_="__/auth/iframe",I_="emulator/auth/iframe",S_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R_(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qi(e,I_):`https://${t.config.authDomain}/${w_}`,r={apiKey:e.apiKey,appName:t.name,v:cr},s=T_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ar(r).slice(1)}`}async function C_(t){const e=await b_(t),n=ct().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:R_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:S_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=at(t,"network-request-failed"),a=ct().setTimeout(()=>{i(o)},E_.get());function c(){ct().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P_=500,O_=600,k_="_blank",x_="http://localhost";class Oa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N_(t,e,n,r=P_,s=O_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},A_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=xe().toLowerCase();n&&(a=xl(l)?k_:n),kl(l)&&(e=e||x_,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[_,y])=>`${p}${_}=${y},`,"");if(eg(l)&&a!=="_self")return L_(e||"",a),new Oa(null);const f=window.open(e||"",a,u);H(f,t,"popup-blocked");try{f.focus()}catch{}return new Oa(f)}function L_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="__/auth/handler",M_="emulator/auth/handler",U_=encodeURIComponent("fac");async function ka(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cr,eventId:s};if(e instanceof jl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ep(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(e instanceof ur){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${U_}=${encodeURIComponent(c)}`:"";return`${F_(t)}?${ar(a).slice(1)}${l}`}function F_({config:t}){return t.emulator?qi(t,M_):`https://${t.authDomain}/${D_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="webStorageSupport";class B_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ql,this._completeRedirectFn=l_,this._overrideRedirectResult=o_}async _openPopup(e,n,r,s){var i;mt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ka(e,n,r,gi(),s);return N_(e,o,Qi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ka(e,n,r,gi(),s);return Hg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await C_(e),r=new f_(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vs,{type:Vs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Vs];o!==void 0&&n(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=g_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ul()||Ji()||gs()}}const $_=B_;var xa="@firebase/auth",Na="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function V_(t){Xn(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fl(t)},l=new ag(r,s,i,c);return gg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xn(new wn("auth-internal",e=>{const n=Cn(e.getProvider("auth").getImmediate());return(r=>new j_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(xa,Na,H_(t)),pn(xa,Na,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=5*60,z_=gl("authIdTokenMaxAge")||W_;let La=null;const K_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>z_)return;const s=n==null?void 0:n.token;La!==s&&(La=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function eu(t=Em()){const e=bl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mg(t,{popupRedirectResolver:$_,persistence:[Xg,Bg,ql]}),r=gl("authTokenSyncURL");if(r){const i=K_(r);Ng(n,i,()=>i(n.currentUser)),xg(n,o=>i(o))}const s=up("auth");return s&&_g(n,`http://${s}`),n}function q_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}cg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=at("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",q_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});V_("Browser");var G_="firebase",J_="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(G_,J_,"app");const Y_=t=>(is("data-v-93aa088f"),t=t(),os(),t),X_={class:"top-bar-container"},Q_=Y_(()=>R("span",{class:"current-user"},null,-1)),Z_={__name:"top-bar",setup(t){Ts();const e=()=>{const n=eu();Dg(n)};return(n,r)=>(ae(),de("div",X_,[Q_,R("span",{class:"buttons-wrapper"},[R("button",{onClick:e},"Log out")])]))}},ey=ir(Z_,[["__scopeId","data-v-93aa088f"]]),ty={},ny=t=>(is("data-v-a88a5f1b"),t=t(),os(),t),ry={class:"loading-spinner"},sy=ny(()=>R("div",{class:"spinner"},null,-1)),iy=[sy];function oy(t,e){return ae(),de("div",ry,iy)}const yi=ir(ty,[["render",oy],["__scopeId","data-v-a88a5f1b"]]);function tu(t,e){return function(){return t.apply(e,arguments)}}const{toString:ay}=Object.prototype,{getPrototypeOf:eo}=Object,bs=(t=>e=>{const n=ay.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),lt=t=>(t=t.toLowerCase(),e=>bs(e)===t),Es=t=>e=>typeof e===t,{isArray:Pn}=Array,nr=Es("undefined");function cy(t){return t!==null&&!nr(t)&&t.constructor!==null&&!nr(t.constructor)&&We(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const nu=lt("ArrayBuffer");function ly(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&nu(t.buffer),e}const uy=Es("string"),We=Es("function"),ru=Es("number"),ws=t=>t!==null&&typeof t=="object",fy=t=>t===!0||t===!1,xr=t=>{if(bs(t)!=="object")return!1;const e=eo(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},dy=lt("Date"),hy=lt("File"),py=lt("Blob"),my=lt("FileList"),gy=t=>ws(t)&&We(t.pipe),_y=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||We(t.append)&&((e=bs(t))==="formdata"||e==="object"&&We(t.toString)&&t.toString()==="[object FormData]"))},yy=lt("URLSearchParams"),vy=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function dr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Pn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function su(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ou=t=>!nr(t)&&t!==iu;function vi(){const{caseless:t}=ou(this)&&this||{},e={},n=(r,s)=>{const i=t&&su(e,s)||s;xr(e[i])&&xr(r)?e[i]=vi(e[i],r):xr(r)?e[i]=vi({},r):Pn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&dr(arguments[r],n);return e}const by=(t,e,n,{allOwnKeys:r}={})=>(dr(e,(s,i)=>{n&&We(s)?t[i]=tu(s,n):t[i]=s},{allOwnKeys:r}),t),Ey=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),wy=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Iy=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&eo(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Sy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Ty=t=>{if(!t)return null;if(Pn(t))return t;let e=t.length;if(!ru(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Ry=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&eo(Uint8Array)),Cy=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},Ay=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Py=lt("HTMLFormElement"),Oy=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Da=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),ky=lt("RegExp"),au=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};dr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},xy=t=>{au(t,(e,n)=>{if(We(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(We(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ny=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Pn(t)?r(t):r(String(t).split(e)),n},Ly=()=>{},Dy=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Ws="abcdefghijklmnopqrstuvwxyz",Ma="0123456789",cu={DIGIT:Ma,ALPHA:Ws,ALPHA_DIGIT:Ws+Ws.toUpperCase()+Ma},My=(t=16,e=cu.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Uy(t){return!!(t&&We(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Fy=t=>{const e=new Array(10),n=(r,s)=>{if(ws(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Pn(r)?[]:{};return dr(r,(o,a)=>{const c=n(o,s+1);!nr(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},By=lt("AsyncFunction"),$y=t=>t&&(ws(t)||We(t))&&We(t.then)&&We(t.catch),E={isArray:Pn,isArrayBuffer:nu,isBuffer:cy,isFormData:_y,isArrayBufferView:ly,isString:uy,isNumber:ru,isBoolean:fy,isObject:ws,isPlainObject:xr,isUndefined:nr,isDate:dy,isFile:hy,isBlob:py,isRegExp:ky,isFunction:We,isStream:gy,isURLSearchParams:yy,isTypedArray:Ry,isFileList:my,forEach:dr,merge:vi,extend:by,trim:vy,stripBOM:Ey,inherits:wy,toFlatObject:Iy,kindOf:bs,kindOfTest:lt,endsWith:Sy,toArray:Ty,forEachEntry:Cy,matchAll:Ay,isHTMLForm:Py,hasOwnProperty:Da,hasOwnProp:Da,reduceDescriptors:au,freezeMethods:xy,toObjectSet:Ny,toCamelCase:Oy,noop:Ly,toFiniteNumber:Dy,findKey:su,global:iu,isContextDefined:ou,ALPHABET:cu,generateString:My,isSpecCompliantForm:Uy,toJSONObject:Fy,isAsyncFn:By,isThenable:$y};function ee(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}E.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const lu=ee.prototype,uu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{uu[t]={value:t}});Object.defineProperties(ee,uu);Object.defineProperty(lu,"isAxiosError",{value:!0});ee.from=(t,e,n,r,s,i)=>{const o=Object.create(lu);return E.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),ee.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const jy=null;function bi(t){return E.isPlainObject(t)||E.isArray(t)}function fu(t){return E.endsWith(t,"[]")?t.slice(0,-2):t}function Ua(t,e,n){return t?t.concat(e).map(function(s,i){return s=fu(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Hy(t){return E.isArray(t)&&!t.some(bi)}const Vy=E.toFlatObject(E,{},null,function(e){return/^is[A-Z]/.test(e)});function Is(t,e,n){if(!E.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,N){return!E.isUndefined(N[b])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(e);if(!E.isFunction(s))throw new TypeError("visitor must be a function");function l(y){if(y===null)return"";if(E.isDate(y))return y.toISOString();if(!c&&E.isBlob(y))throw new ee("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(y)||E.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function u(y,b,N){let P=y;if(y&&!N&&typeof y=="object"){if(E.endsWith(b,"{}"))b=r?b:b.slice(0,-2),y=JSON.stringify(y);else if(E.isArray(y)&&Hy(y)||(E.isFileList(y)||E.endsWith(b,"[]"))&&(P=E.toArray(y)))return b=fu(b),P.forEach(function(U,K){!(E.isUndefined(U)||U===null)&&e.append(o===!0?Ua([b],K,i):o===null?b:b+"[]",l(U))}),!1}return bi(y)?!0:(e.append(Ua(N,b,i),l(y)),!1)}const f=[],p=Object.assign(Vy,{defaultVisitor:u,convertValue:l,isVisitable:bi});function _(y,b){if(!E.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(y),E.forEach(y,function(P,M){(!(E.isUndefined(P)||P===null)&&s.call(e,P,E.isString(M)?M.trim():M,b,p))===!0&&_(P,b?b.concat(M):[M])}),f.pop()}}if(!E.isObject(t))throw new TypeError("data must be an object");return _(t),e}function Fa(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function to(t,e){this._pairs=[],t&&Is(t,this,e)}const du=to.prototype;du.append=function(e,n){this._pairs.push([e,n])};du.toString=function(e){const n=e?function(r){return e.call(this,r,Fa)}:Fa;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Wy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function hu(t,e,n){if(!e)return t;const r=n&&n.encode||Wy,s=n&&n.serialize;let i;if(s?i=s(e,n):i=E.isURLSearchParams(e)?e.toString():new to(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Ba{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){E.forEach(this.handlers,function(r){r!==null&&e(r)})}}const pu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},zy=typeof URLSearchParams<"u"?URLSearchParams:to,Ky=typeof FormData<"u"?FormData:null,qy=typeof Blob<"u"?Blob:null,Gy={isBrowser:!0,classes:{URLSearchParams:zy,FormData:Ky,Blob:qy},protocols:["http","https","file","blob","url","data"]},mu=typeof window<"u"&&typeof document<"u",Jy=(t=>mu&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),Yy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Xy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:mu,hasStandardBrowserEnv:Jy,hasStandardBrowserWebWorkerEnv:Yy},Symbol.toStringTag,{value:"Module"})),ot={...Xy,...Gy};function Qy(t,e){return Is(t,new ot.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return ot.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Zy(t){return E.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function ev(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function gu(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&E.isArray(s)?s.length:o,c?(E.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!E.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&E.isArray(s[o])&&(s[o]=ev(s[o])),!a)}if(E.isFormData(t)&&E.isFunction(t.entries)){const n={};return E.forEachEntry(t,(r,s)=>{e(Zy(r),s,n,0)}),n}return null}function tv(t,e,n){if(E.isString(t))try{return(e||JSON.parse)(t),E.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const no={transitional:pu,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=E.isObject(e);if(i&&E.isHTMLForm(e)&&(e=new FormData(e)),E.isFormData(e))return s?JSON.stringify(gu(e)):e;if(E.isArrayBuffer(e)||E.isBuffer(e)||E.isStream(e)||E.isFile(e)||E.isBlob(e))return e;if(E.isArrayBufferView(e))return e.buffer;if(E.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Qy(e,this.formSerializer).toString();if((a=E.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Is(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),tv(e)):e}],transformResponse:[function(e){const n=this.transitional||no.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&E.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ee.from(a,ee.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ot.classes.FormData,Blob:ot.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],t=>{no.headers[t]={}});const ro=no,nv=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),rv=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&nv[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},$a=Symbol("internals");function Nn(t){return t&&String(t).trim().toLowerCase()}function Nr(t){return t===!1||t==null?t:E.isArray(t)?t.map(Nr):String(t)}function sv(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const iv=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function zs(t,e,n,r,s){if(E.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!E.isString(e)){if(E.isString(r))return e.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(e)}}function ov(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function av(t,e){const n=E.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class Ss{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Nn(c);if(!u)throw new Error("header name must be a non-empty string");const f=E.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Nr(a))}const o=(a,c)=>E.forEach(a,(l,u)=>i(l,u,c));return E.isPlainObject(e)||e instanceof this.constructor?o(e,n):E.isString(e)&&(e=e.trim())&&!iv(e)?o(rv(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Nn(e),e){const r=E.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return sv(s);if(E.isFunction(n))return n.call(this,s,r);if(E.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Nn(e),e){const r=E.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||zs(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Nn(o),o){const a=E.findKey(r,o);a&&(!n||zs(r,r[a],a,n))&&(delete r[a],s=!0)}}return E.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||zs(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return E.forEach(this,(s,i)=>{const o=E.findKey(r,i);if(o){n[o]=Nr(s),delete n[i];return}const a=e?ov(i):String(i).trim();a!==i&&delete n[i],n[a]=Nr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return E.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[$a]=this[$a]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Nn(o);r[a]||(av(s,o),r[a]=!0)}return E.isArray(e)?e.forEach(i):i(e),this}}Ss.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(Ss.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});E.freezeMethods(Ss);const pt=Ss;function Ks(t,e){const n=this||ro,r=e||n,s=pt.from(r.headers);let i=r.data;return E.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function _u(t){return!!(t&&t.__CANCEL__)}function hr(t,e,n){ee.call(this,t??"canceled",ee.ERR_CANCELED,e,n),this.name="CanceledError"}E.inherits(hr,ee,{__CANCEL__:!0});function cv(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const lv=ot.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];E.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),E.isString(r)&&o.push("path="+r),E.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function uv(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function fv(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function yu(t,e){return t&&!uv(e)?fv(t,e):e}const dv=ot.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=E.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function hv(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function pv(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const _=u&&l-u;return _?Math.round(p*1e3/_):void 0}}function ja(t,e){let n=0;const r=pv(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[e?"download":"upload"]=!0,t(u)}}const mv=typeof XMLHttpRequest<"u",gv=mv&&function(t){return new Promise(function(n,r){let s=t.data;const i=pt.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let u;if(E.isFormData(s)){if(ot.hasStandardBrowserEnv||ot.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((u=i.getContentType())!==!1){const[b,...N]=u?u.split(";").map(P=>P.trim()).filter(Boolean):[];i.setContentType([b||"multipart/form-data",...N].join("; "))}}let f=new XMLHttpRequest;if(t.auth){const b=t.auth.username||"",N=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(b+":"+N))}const p=yu(t.baseURL,t.url);f.open(t.method.toUpperCase(),hu(p,t.params,t.paramsSerializer),!0),f.timeout=t.timeout;function _(){if(!f)return;const b=pt.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),P={data:!o||o==="text"||o==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:b,config:t,request:f};cv(function(U){n(U),l()},function(U){r(U),l()},P),f=null}if("onloadend"in f?f.onloadend=_:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(_)},f.onabort=function(){f&&(r(new ee("Request aborted",ee.ECONNABORTED,t,f)),f=null)},f.onerror=function(){r(new ee("Network Error",ee.ERR_NETWORK,t,f)),f=null},f.ontimeout=function(){let N=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const P=t.transitional||pu;t.timeoutErrorMessage&&(N=t.timeoutErrorMessage),r(new ee(N,P.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,t,f)),f=null},ot.hasStandardBrowserEnv&&(a&&E.isFunction(a)&&(a=a(t)),a||a!==!1&&dv(p))){const b=t.xsrfHeaderName&&t.xsrfCookieName&&lv.read(t.xsrfCookieName);b&&i.set(t.xsrfHeaderName,b)}s===void 0&&i.setContentType(null),"setRequestHeader"in f&&E.forEach(i.toJSON(),function(N,P){f.setRequestHeader(P,N)}),E.isUndefined(t.withCredentials)||(f.withCredentials=!!t.withCredentials),o&&o!=="json"&&(f.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&f.addEventListener("progress",ja(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",ja(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=b=>{f&&(r(!b||b.type?new hr(null,t,f):b),f.abort(),f=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const y=hv(p);if(y&&ot.protocols.indexOf(y)===-1){r(new ee("Unsupported protocol "+y+":",ee.ERR_BAD_REQUEST,t));return}f.send(s||null)})},Ei={http:jy,xhr:gv};E.forEach(Ei,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ha=t=>`- ${t}`,_v=t=>E.isFunction(t)||t===null||t===!1,vu={getAdapter:t=>{t=E.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!_v(n)&&(r=Ei[(o=String(n)).toLowerCase()],r===void 0))throw new ee(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Ha).join(`
`):" "+Ha(i[0]):"as no adapter specified";throw new ee("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ei};function qs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new hr(null,t)}function Va(t){return qs(t),t.headers=pt.from(t.headers),t.data=Ks.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),vu.getAdapter(t.adapter||ro.adapter)(t).then(function(r){return qs(t),r.data=Ks.call(t,t.transformResponse,r),r.headers=pt.from(r.headers),r},function(r){return _u(r)||(qs(t),r&&r.response&&(r.response.data=Ks.call(t,t.transformResponse,r.response),r.response.headers=pt.from(r.response.headers))),Promise.reject(r)})}const Wa=t=>t instanceof pt?t.toJSON():t;function Sn(t,e){e=e||{};const n={};function r(l,u,f){return E.isPlainObject(l)&&E.isPlainObject(u)?E.merge.call({caseless:f},l,u):E.isPlainObject(u)?E.merge({},u):E.isArray(u)?u.slice():u}function s(l,u,f){if(E.isUndefined(u)){if(!E.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function i(l,u){if(!E.isUndefined(u))return r(void 0,u)}function o(l,u){if(E.isUndefined(u)){if(!E.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in e)return r(l,u);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(Wa(l),Wa(u),!0)};return E.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=c[u]||s,p=f(t[u],e[u],u);E.isUndefined(p)&&f!==a||(n[u]=p)}),n}const bu="1.6.7",so={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{so[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const za={};so.transitional=function(e,n,r){function s(i,o){return"[Axios v"+bu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new ee(s(o," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!za[o]&&(za[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function yv(t,e,n){if(typeof t!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new ee("option "+i+" must be "+c,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+i,ee.ERR_BAD_OPTION)}}const wi={assertOptions:yv,validators:so},Et=wi.validators;class Jr{constructor(e){this.defaults=e,this.interceptors={request:new Ba,response:new Ba}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Sn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&wi.assertOptions(r,{silentJSONParsing:Et.transitional(Et.boolean),forcedJSONParsing:Et.transitional(Et.boolean),clarifyTimeoutError:Et.transitional(Et.boolean)},!1),s!=null&&(E.isFunction(s)?n.paramsSerializer={serialize:s}:wi.assertOptions(s,{encode:Et.function,serialize:Et.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&E.merge(i.common,i[n.method]);i&&E.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=pt.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,p;if(!c){const y=[Va.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,l),p=y.length,u=Promise.resolve(n);f<p;)u=u.then(y[f++],y[f++]);return u}p=a.length;let _=n;for(f=0;f<p;){const y=a[f++],b=a[f++];try{_=y(_)}catch(N){b.call(this,N);break}}try{u=Va.call(this,_)}catch(y){return Promise.reject(y)}for(f=0,p=l.length;f<p;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=Sn(this.defaults,e);const n=yu(e.baseURL,e.url);return hu(n,e.params,e.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(e){Jr.prototype[e]=function(n,r){return this.request(Sn(r||{},{method:e,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(Sn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Jr.prototype[e]=n(),Jr.prototype[e+"Form"]=n(!0)});const Lr=Jr;class io{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new hr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new io(function(s){e=s}),cancel:e}}}const vv=io;function bv(t){return function(n){return t.apply(null,n)}}function Ev(t){return E.isObject(t)&&t.isAxiosError===!0}const Ii={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ii).forEach(([t,e])=>{Ii[e]=t});const wv=Ii;function Eu(t){const e=new Lr(t),n=tu(Lr.prototype.request,e);return E.extend(n,Lr.prototype,e,{allOwnKeys:!0}),E.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Eu(Sn(t,s))},n}const _e=Eu(ro);_e.Axios=Lr;_e.CanceledError=hr;_e.CancelToken=vv;_e.isCancel=_u;_e.VERSION=bu;_e.toFormData=Is;_e.AxiosError=ee;_e.Cancel=_e.CanceledError;_e.all=function(e){return Promise.all(e)};_e.spread=bv;_e.isAxiosError=Ev;_e.mergeConfig=Sn;_e.AxiosHeaders=pt;_e.formToJSON=t=>gu(E.isHTMLForm(t)?new FormData(t):t);_e.getAdapter=vu.getAdapter;_e.HttpStatusCode=wv;_e.default=_e;const De=t=>(is("data-v-48ade388"),t=t(),os(),t),Iv={class:"service-container"},Sv={class:"filters-container"},Tv={class:"icon open-close"},Rv={key:0,class:"filtering-pad-content-wrapper basic"},Cv=De(()=>R("span",{class:"text"}," starting from BTC, ranked by market cap, start analyzing from rank: ",-1)),Av=De(()=>R("span",{class:"text"},"number of cryptos to check",-1)),Pv=De(()=>R("span",{class:"text"},"number of market pairs to check",-1)),Ov={class:"hr-buttons-container"},kv=["onClick"],xv={class:"text"},Nv=De(()=>R("span",{class:"text"},"market pairs check offset",-1)),Lv=De(()=>R("span",{class:"text"},"minimum profit margin %",-1)),Dv=De(()=>R("span",{class:"text"},"maximum profit margin %",-1)),Mv=De(()=>R("span",{class:"text"},"minimum trading volume (USD)",-1)),Uv={class:"bottom-buttons"},Fv=De(()=>R("span",{class:"text underline"},"Advanced settings",-1)),Bv=[Fv],$v=De(()=>R("span",{class:"text underline"},"stop",-1)),jv=[$v],Hv=De(()=>R("span",{class:"text"},"Trigger",-1)),Vv={key:0,class:"text-tiny text-red"},Wv={class:"wrap-row"},zv={class:"statistics"},Kv={class:"text-tiny"},qv={class:"text-green"},Gv={class:"text-tiny"},Jv={class:"text text-green"},Yv={class:"text-tiny"},Xv={class:"text text-green"},Qv={key:1,class:"filtering-pad-content-wrapper advanced"},Zv=De(()=>R("span",{class:"text underline"},ge("< basic settings"),-1)),eb=[Zv],tb={class:"inputs-wrapper"},nb={class:"advanced-filter-container"},rb={class:"text"},sb={class:"hr-buttons-container"},ib=["onClick"],ob={class:"text"},ab={class:"advanced-filter-container"},cb={class:"text"},lb={class:"hr-buttons-container"},ub=["onClick"],fb={class:"text"},db={class:"advanced-filter-container"},hb={class:"text"},pb={class:"hr-buttons-container"},mb=De(()=>R("span",{class:"text"},"SELECT ALL",-1)),gb=[mb],_b=De(()=>R("span",{class:"text"},"DESELECT ALL",-1)),yb=[_b],vb=["onClick"],bb={class:"text"},Eb=De(()=>R("span",{class:"text underline"},ge("< basic settings"),-1)),wb=[Eb],Ib={class:"all-ops"},Sb=De(()=>R("span",null,"Clear results",-1)),Tb=[Sb],Rb={class:"ops-per-crypto"},Cb={class:"crypto-section-title"},Ab=id('<div class="op-table-headers" data-v-48ade388><div class="text exchange-link-header" data-v-48ade388> Buy from </div><div class="text price-header" data-v-48ade388> price </div><div class="text volume-header" data-v-48ade388> 24h volume </div><div class="text profit-percentage-header" data-v-48ade388> gap </div><div class="text volume-header" data-v-48ade388> 24h volume </div><div class="text price-header" data-v-48ade388> price </div><div class="text exchange-link-header" data-v-48ade388> Sell to </div></div>',1),Pb={class:"op"},Ob=["onClick"],kb={class:"text indicator price"},xb={class:"text indicator volume"},Nb={class:"text text-green indicator profit-percentage"},Lb={class:"text indicator volume"},Db={class:"text indicator price"},Mb=["onClick"],Ka="https://data.sirbofi.com",qa="Couldn't access API.",Ub={__name:"HomeView",setup(t){function e(Q){window.open(Q,"_blank")}Nc(()=>{window.addEventListener("keydown",Q=>{Q.key==="Enter"&&te()})});const n={basic:"basic",advanced:"advanced"},r={spot:"spot",perpetual:"perpetual"},s=oe(!1),i=oe(n.basic);function o(Q){i.value=Q}const a=oe([]),c=["binance","binance-us","binance-tr","coinbase","coinbase-exchange","btcturk-pro","phemex","bitvavo","bitkub","coinex","indodax","coinmetro","kraken","kucoin","bitstamp","okx","gate-io","bitget","crypto-com-exchange","gemini","lbank","mexc","bybit","bitrue","probit-exchange","Toobit","xt","pionex","biconomy","bingx","latoken","whitebit","weex","coinstore","indodax","btse","dydx","pancakeswap-v2","uniswap-v3","uniswap-v2","kine-protocol-polygon","apex-protocol","dodo"],l=[r.spot,r.perpetual],u={USDT:825,BTC:1,USD:2781,TUSD:2563,BUSD:4687,EUR:2790,GBP:2791},f=oe(0),p=oe(null);function _(){Re.value={},p.value=null,f.value=0,fe.value=0,ye.value=0,Se.value=0}const y=oe(1),b=oe(10),N=[20,50,100,1e3],P=oe(1e3),M=oe(1),U=oe(2),K=oe(12),J=oe(5e3),$=oe(null),se=oe([]),W=oe([]),F=oe(!1),fe=oe(0),ye=oe(0),Se=oe(0),Me=oe(200),Ze={listingsEndpoint:()=>{const Q=Ka+"/api/listings",L={start:y.value||1,limit:b.value||20};return Q+"?"+new URLSearchParams(L).toString()},marketPairsEndpoint:(Q,L=null)=>{const m=Ka+"/api/market-pairs",S={slug:Q,start:M.value||1,limit:P.value||20};$.value&&(S.category=$.value),L&&(S.quoteCurrencyId=u[L]);const A=m+"?"+new URLSearchParams(S).toString();return console.log(A),A}};function ve(Q){return Intl.NumberFormat().format(Q)}function X(Q,L){L.includes(Q)?L.splice(L.indexOf(Q),1):L.push(Q)}function ie(){F.value=!1,p.value=null}async function te(){p.value=null,F.value=!0,f.value=0;const Q=Ze.listingsEndpoint();await _e.get(Q).then(L=>{if(L.status===429)return p.value="too many requests",F.value=!1,!1;a.value=L.data.data.cryptoCurrencyList,Ce()}).catch(L=>{console.log(L),p.value=qa,F.value=!1})}async function ze(Q){const L=W.value.length>0?W.value:[null];let m=[];for(const S of L){const A=Ze.marketPairsEndpoint(Q,S);await _e.get(A).then(k=>{var G,Z,d;if(k.data.status===429)return p.value="too many requests",F.value=!1,!1;if(k.data.status.error_code==="500")return p.value="server gave err 500. could be overloaded",F.value=!1,!1;((d=(Z=(G=k.data)==null?void 0:G.data)==null?void 0:Z.marketPairs)==null?void 0:d.length)>0&&m.push(...k.data.data.marketPairs)}).catch(k=>{console.log(k),p.value=qa,F.value=!1})}return[...new Set(m)]}function et(Q,L){return ye.value++,((L.price-Q.price)/Q.price*100).toFixed(2)}const Re=oe({});async function Ce(){let Q={};for(const L of a.value){if(F.value===!1)break;await ze(L.slug).then(m=>{var A;if(!m)return;let S=[];for(const k of m)k.volumeUsd>J.value&&(!Ke.value||se.value.includes(k.exchangeSlug))&&k.isVerified&&!k.poorAuditStatus&&S.push(k);for(let k=0;k<S.length;k++){for(let G=k+1;G<S.length;G++){let Z=S[k],d=S[G],h=Z.price<d.price?Z:d,g=Z.price>d.price?Z:d,w=Number(et(h,g));if(w>U.value&&w<K.value&&(Q[L.slug]||(Q[L.slug]=[]),Q[L.slug].push({buy_from_exchange:h.exchangeSlug,buy_from_price:h.price,buy_from_volume:ve(h.volumeUsd.toFixed(0)),buy_link:h.marketUrl,crypto:L.slug,potential_profit:w,sell_to_exchange:g.exchangeSlug,sell_to_price:g.price,sell_to_volume:ve(g.volumeUsd.toFixed(0)),sell_link:g.marketUrl}),f.value++,f.value>=Me.value&&(F.value=!1,p.value="Illogical amount of results! Stopped search to protect performance. You need more strict filters.")),F.value===!1)break}if(fe.value++,(A=Q[L.slug])==null||A.sort((G,Z)=>Z.potential_profit-G.potential_profit),F.value===!1)break}}),Re.value={...Q},Se.value++}F.value=!1}const Ke=Ie(()=>se.value.length>0),tt=Ie(()=>!!$.value);return(Q,L)=>(ae(),de("main",null,[ke(ey),R("div",Iv,[R("div",Sv,[R("button",{class:"hide-filters-button",onClick:L[0]||(L[0]=m=>s.value=!s.value)},[R("span",Tv,ge(s.value?">":"<️"),1)]),R("div",{class:Ae({"pad filtering-pad":!0,hidden:s.value})},[i.value===n.basic?(ae(),de("div",Rv,[R("div",{class:Ae({"inputs-wrapper":!0,disabled:F.value})},[Cv,St(R("input",{type:"number",placeholder:"rank","onUpdate:modelValue":L[1]||(L[1]=m=>y.value=m)},null,512),[[At,y.value]]),Av,St(R("input",{type:"number",placeholder:"Number","onUpdate:modelValue":L[2]||(L[2]=m=>b.value=m)},null,512),[[At,b.value]]),Pv,R("div",Ov,[(ae(),de(Le,null,sn(N,m=>R("button",{class:Ae({"toggle-button":!0,selected:P.value===m}),onClick:S=>P.value=m},[R("span",xv,ge(m),1)],10,kv)),64))]),Nv,St(R("input",{type:"number",placeholder:"offset","onUpdate:modelValue":L[3]||(L[3]=m=>M.value=m)},null,512),[[At,M.value]]),Lv,St(R("input",{type:"number",placeholder:"profit %","onUpdate:modelValue":L[4]||(L[4]=m=>U.value=m)},null,512),[[At,U.value]]),Dv,St(R("input",{type:"number",placeholder:"profit %","onUpdate:modelValue":L[5]||(L[5]=m=>K.value=m)},null,512),[[At,K.value]]),Mv,St(R("input",{type:"number",placeholder:"minimum trading volume","onUpdate:modelValue":L[6]||(L[6]=m=>J.value=m)},null,512),[[At,J.value]])],2),R("span",Uv,[F.value?He("",!0):(ae(),de("button",{key:0,class:"bones",onClick:L[7]||(L[7]=m=>o(n.advanced))},Bv)),F.value?(ae(),de("button",{key:1,class:"bones",onClick:L[8]||(L[8]=m=>ie())},jv)):He("",!0),R("button",{onClick:te,class:Ae({disabled:F.value})},[F.value?(ae(),$r(yi,{key:0})):He("",!0),Hv],2)]),p.value?(ae(),de("span",Vv,ge(p.value),1)):He("",!0),R("div",Wv,[R("div",zv,[R("span",Kv,[Tt(" number of price comparisons: "),R("span",qv,ge(ve(ye.value)),1)]),R("span",Gv,[Tt(" number of cryptos checked: "),R("span",Jv,ge(ve(Se.value)),1)]),R("span",Yv,[Tt(" number of results: "),R("span",Xv,ge(ve(f.value)),1)])])])])):He("",!0),i.value===n.advanced?(ae(),de("div",Qv,[R("button",{class:"back bones",onClick:L[9]||(L[9]=m=>o(n.basic))},eb),R("div",tb,[R("div",nb,[R("span",rb,[Tt(" Filter trading categories: "),R("span",{class:Ae({disabled:!tt.value,"text-green":tt.value})},ge(tt.value?"enabled":"disabled"),3)]),R("div",sb,[(ae(),de(Le,null,sn(l,m=>R("button",{onClick:S=>$.value=$.value===m?null:m,class:Ae({"toggle-button":!0,selected:$.value===m})},[R("span",ob,ge(m),1)],10,ib)),64))])]),R("div",ab,[R("span",cb,[Tt(" Filter by trading pair quote symbol: "),R("span",{class:Ae({disabled:W.value.length===0,"text-green":W.value.length>0})},ge(W.value.length>0?"enabled":"disabled (compares all possible trading pairs)"),3)]),R("div",lb,[(ae(!0),de(Le,null,sn(Object.keys(u),m=>(ae(),de("button",{onClick:S=>X(m,W.value),class:Ae({"toggle-button":!0,selected:W.value.includes(m)})},[R("span",fb,ge(m),1)],10,ub))),256))])]),R("div",db,[R("span",hb,[Tt(" Filter trustworthy exchanges: "),R("span",{class:Ae({disabled:!Ke.value,"text-green":Ke.value})},ge(Ke.value?"enabled":"disabled (allows over 600 exchanges)"),3)]),R("div",pb,[se.value.length!==c.length?(ae(),de("button",{key:0,onClick:L[10]||(L[10]=m=>se.value=[...c]),class:Ae({"toggle-button bones":!0})},gb)):(ae(),de("button",{key:1,onClick:L[11]||(L[11]=m=>se.value=[]),class:Ae({"toggle-button bones":!0})},yb)),(ae(),de(Le,null,sn(c,m=>R("button",{onClick:S=>X(m,se.value),class:Ae({"toggle-button":!0,selected:se.value.includes(m)})},[R("span",bb,ge(m),1)],10,vb)),64))])])]),R("button",{class:"back bones",onClick:L[12]||(L[12]=m=>o(n.basic))},wb)])):He("",!0)],2)]),R("div",Ib,[Object.keys(Re.value).length?(ae(),de("button",{key:0,class:"clear-results",onClick:_},Tb)):He("",!0),(ae(!0),de(Le,null,sn(Object.keys(Re.value),m=>(ae(),de("div",Rb,[R("h2",Cb,ge(m),1),Ab,(ae(!0),de(Le,null,sn(Re.value[m],S=>(ae(),de("div",Pb,[R("button",{class:"text exchange-link",onClick:A=>e(S.buy_link)},ge(S.buy_from_exchange),9,Ob),R("div",kb,ge(ve(S.buy_from_price))+" $ ",1),R("div",xb,ge(S.buy_from_volume)+" $ ",1),R("div",Nb," +"+ge(S.potential_profit)+" % ",1),R("div",Lb,ge(S.sell_to_volume)+" $ ",1),R("div",Db,ge(ve(S.sell_to_price))+" $ ",1),R("button",{class:"text exchange-link",onClick:A=>e(S.sell_link)},ge(S.sell_to_exchange),9,Mb)]))),256))]))),256))])])]))}},Fb=ir(Ub,[["__scopeId","data-v-48ade388"]]),Bb=t=>(is("data-v-afd27caf"),t=t(),os(),t),$b={class:"login-pad-container"},jb={class:"pad login-pad"},Hb={class:"login-pad-content-wrapper"},Vb=Bb(()=>R("svg",{class:"logo",xmlns:"http://www.w3.org/2000/svg",width:"162",height:"256",viewBox:"0 0 162 256",fill:"none"},[R("path",{d:"M15 110.76L15 240.087L77.4026 239.923L77.4026 110.597L15 110.76Z"}),R("path",{d:"M85.4026 -0.0802917L85.4026 255.933L147.805 256.097L147.805 0.0834427L85.4026 -0.0802917Z"})],-1)),Wb={class:"row"},zb={key:0,class:"input-fields"},Kb={key:1,class:"buttons-wrapper"},qb={key:0,class:"error"},Gb={__name:"Login",setup(t){const e=Zh(),n=Ts(),r=Ie(()=>n.confirming_user),s=oe(!1),i=oe(!1),o=oe({email:"",password:""});function a(){i.value=!1,s.value=!0,n.signIn(o.value.email,o.value.password).then(c=>{var l;c&&((l=c.data)!=null&&l.uid)?(n.setUserData(c.data),n.setUserLoggedIn(!0),e.push("/")):i.value=!0}).catch(c=>{console.log(c),i.value=!0}).finally(()=>{s.value=!1})}return window.addEventListener("keypress",c=>{c.key==="Enter"&&a()}),(c,l)=>(ae(),de("div",$b,[R("div",jb,[R("div",Hb,[Vb,R("div",Wb,[r.value?(ae(),$r(yi,{key:0})):He("",!0)]),r.value?He("",!0):(ae(),de("div",zb,[St(R("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=u=>o.value.email=u),placeholder:"Email"},null,512),[[At,o.value.email]]),St(R("input",{type:"password","onUpdate:modelValue":l[1]||(l[1]=u=>o.value.password=u),placeholder:"Key"},null,512),[[At,o.value.password]])])),r.value?He("",!0):(ae(),de("div",Kb,[i.value?(ae(),de("div",qb," Authentication failed ")):He("",!0),R("button",{onClick:a,class:Ae({disabled:s.value})},[s.value?(ae(),$r(yi,{key:0})):He("",!0),Tt(" Authenticate ")],2)]))])])]))}},Jb=ir(Gb,[["__scopeId","data-v-afd27caf"]]),Yr=Xh({history:Ch("/sirbofi/"),routes:[{path:"/",name:"home",component:Fb,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:Jb}]});Yr.beforeEach(async(t,e,n)=>{const r=Ts();t.matched.some(s=>s.meta.requiresAuth)?r.getUser.is_logged_in?n():n({name:"login"}):n()});const Ts=Yd("AuthenticatorStore",()=>{const t={is_logged_in:!1,data:null};let e=!1,n=null;function r(_){t.data=_}function s(_){t.is_logged_in=_}const i=oe(null),o=Ie(()=>t),a=oe(!0),c=async()=>{El({apiKey:"AIzaSyD81g-c9f8yiDbC_atW-Pvp_MP7t_aTjKQ",authDomain:"aoft-de2ab.firebaseapp.com",projectId:"aoft-de2ab",storageBucket:"aoft-de2ab.appspot.com",messagingSenderId:"630650035711",appId:"1:630650035711:web:210507afd411fc5cb91bca",measurementId:"G-W5TJ6PV4GV"}),n=eu(),Lg(n,y=>{a.value=!1,y?(r(y),s(!0),Yr.push("/")):(s(!1),Yr.push("/login"))}),e=!0},l=Ie(()=>e),u=Ie(()=>n);return{user:t,initAuth:c,error:i,getAuthInitStatus:l,getAuthFromStore:u,setUserData:r,confirming_user:a,setUserLoggedIn:s,getUser:o,signIn:async(_,y)=>(await kg(n,_,y).then(b=>{r(b.user),s(!0)}).catch(b=>{console.log(b.message),b.value=b.message}),t),signOut:async _=>{await _.signOut().then(()=>{s(!1)}).catch(y=>{console.log(y.message),y.value=y.message})}}}),Yb=Wd(),oo=$d(np);oo.use(Yb);const Xb=Ts();Xb.initAuth();oo.use(Yr);oo.mount("#app");
