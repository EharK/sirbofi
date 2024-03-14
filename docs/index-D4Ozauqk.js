(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ci(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const he={},fn=[],He=()=>{},ku=()=>!1,Qr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ai=t=>t.startsWith("onUpdate:"),Pe=Object.assign,Pi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xu=Object.prototype.hasOwnProperty,ne=(t,e)=>xu.call(t,e),V=Array.isArray,dn=t=>Zr(t)==="[object Map]",rc=t=>Zr(t)==="[object Set]",q=t=>typeof t=="function",Ee=t=>typeof t=="string",Tn=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",sc=t=>(me(t)||q(t))&&q(t.then)&&q(t.catch),ic=Object.prototype.toString,Zr=t=>ic.call(t),Nu=t=>Zr(t).slice(8,-1),oc=t=>Zr(t)==="[object Object]",Oi=t=>Ee(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Un=Ci(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),es=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Lu=/-(\w)/g,lt=es(t=>t.replace(Lu,(e,n)=>n?n.toUpperCase():"")),Du=/\B([A-Z])/g,Rn=es(t=>t.replace(Du,"-$1").toLowerCase()),ts=es(t=>t.charAt(0).toUpperCase()+t.slice(1)),As=es(t=>t?`on${ts(t)}`:""),jt=(t,e)=>!Object.is(t,e),wr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Dr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ys=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let _o;const ac=()=>_o||(_o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ki(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ee(r)?Bu(r):ki(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ee(t)||me(t))return t}const Mu=/;(?![^(]*\))/g,Uu=/:([^]+)/,Fu=/\/\*[^]*?\*\//g;function Bu(t){const e={};return t.replace(Fu,"").split(Mu).forEach(n=>{if(n){const r=n.split(Uu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function be(t){let e="";if(Ee(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const r=be(t[n]);r&&(e+=r+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $u="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ju=Ci($u);function cc(t){return!!t||t===""}const ge=t=>Ee(t)?t:t==null?"":V(t)||me(t)&&(t.toString===ic||!q(t.toString))?JSON.stringify(t,lc,2):String(t),lc=(t,e)=>e&&e.__v_isRef?lc(t,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ps(r,i)+" =>"]=s,n),{})}:rc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ps(n))}:Tn(e)?Ps(e):me(e)&&!V(e)&&!oc(e)?String(e):e,Ps=(t,e="")=>{var n;return Tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class uc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function fc(t){return new uc(t)}function Hu(t,e=je){e&&e.active&&e.effects.push(t)}function dc(){return je}function Vu(t){je&&je.cleanups.push(t)}let Jt;class xi{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Hu(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,tn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Wu(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),nn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Mt,n=Jt;try{return Mt=!0,Jt=this,this._runnings++,yo(this),this.fn()}finally{vo(this),this._runnings--,Jt=n,Mt=e}}stop(){var e;this.active&&(yo(this),vo(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Wu(t){return t.value}function yo(t){t._trackId++,t._depsLength=0}function vo(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)hc(t.deps[e],t);t.deps.length=t._depsLength}}function hc(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Mt=!0,Xs=0;const pc=[];function tn(){pc.push(Mt),Mt=!1}function nn(){const t=pc.pop();Mt=t===void 0?!0:t}function Ni(){Xs++}function Li(){for(Xs--;!Xs&&Qs.length;)Qs.shift()()}function mc(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&hc(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Qs=[];function gc(t,e,n){Ni();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Qs.push(r.scheduler)))}Li()}const _c=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Mr=new WeakMap,Yt=Symbol(""),Zs=Symbol("");function Be(t,e,n){if(Mt&&Jt){let r=Mr.get(t);r||Mr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=_c(()=>r.delete(n))),mc(Jt,s)}}function pt(t,e,n,r,s,i){const o=Mr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||!Tn(l)&&l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?Oi(n)&&a.push(o.get("length")):(a.push(o.get(Yt)),dn(t)&&a.push(o.get(Zs)));break;case"delete":V(t)||(a.push(o.get(Yt)),dn(t)&&a.push(o.get(Zs)));break;case"set":dn(t)&&a.push(o.get(Yt));break}Ni();for(const c of a)c&&gc(c,4);Li()}function zu(t,e){var n;return(n=Mr.get(t))==null?void 0:n.get(e)}const qu=Ci("__proto__,__v_isRef,__isVue"),yc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tn)),bo=Ku();function Ku(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=re(this);for(let i=0,o=this.length;i<o;i++)Be(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){tn(),Ni();const r=re(this)[e].apply(this,n);return Li(),nn(),r}}),t}function Gu(t){const e=re(this);return Be(e,"has",t),e.hasOwnProperty(t)}class vc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?cf:Ic:i?wc:Ec).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=V(e);if(!s){if(o&&ne(bo,n))return Reflect.get(bo,n,r);if(n==="hasOwnProperty")return Gu}const a=Reflect.get(e,n,r);return(Tn(n)?yc.has(n):qu(n))||(s||Be(e,"get",n),i)?a:we(a)?o&&Oi(n)?a:a.value:me(a)?s?Tc(a):sr(a):a}}class bc extends vc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=yn(i);if(!Ur(r)&&!yn(r)&&(i=re(i),r=re(r)),!V(e)&&we(i)&&!we(r))return c?!1:(i.value=r,!0)}const o=V(e)&&Oi(n)?Number(n)<e.length:ne(e,n),a=Reflect.set(e,n,r,s);return e===re(s)&&(o?jt(r,i)&&pt(e,"set",n,r):pt(e,"add",n,r)),a}deleteProperty(e,n){const r=ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&pt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tn(n)||!yc.has(n))&&Be(e,"has",n),r}ownKeys(e){return Be(e,"iterate",V(e)?"length":Yt),Reflect.ownKeys(e)}}class Ju extends vc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Yu=new bc,Xu=new Ju,Qu=new bc(!0),Di=t=>t,ns=t=>Reflect.getPrototypeOf(t);function mr(t,e,n=!1,r=!1){t=t.__v_raw;const s=re(t),i=re(e);n||(jt(e,i)&&Be(s,"get",e),Be(s,"get",i));const{has:o}=ns(s),a=r?Di:n?Fi:qn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function gr(t,e=!1){const n=this.__v_raw,r=re(n),s=re(t);return e||(jt(t,s)&&Be(r,"has",t),Be(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function _r(t,e=!1){return t=t.__v_raw,!e&&Be(re(t),"iterate",Yt),Reflect.get(t,"size",t)}function Eo(t){t=re(t);const e=re(this);return ns(e).has.call(e,t)||(e.add(t),pt(e,"add",t,t)),this}function wo(t,e){e=re(e);const n=re(this),{has:r,get:s}=ns(n);let i=r.call(n,t);i||(t=re(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?jt(e,o)&&pt(n,"set",t,e):pt(n,"add",t,e),this}function Io(t){const e=re(this),{has:n,get:r}=ns(e);let s=n.call(e,t);s||(t=re(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&pt(e,"delete",t,void 0),i}function So(){const t=re(this),e=t.size!==0,n=t.clear();return e&&pt(t,"clear",void 0,void 0),n}function yr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=re(o),c=e?Di:t?Fi:qn;return!t&&Be(a,"iterate",Yt),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function vr(t,e,n){return function(...r){const s=this.__v_raw,i=re(s),o=dn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?Di:e?Fi:qn;return!e&&Be(i,"iterate",c?Zs:Yt),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[l(f[0]),l(f[1])]:l(f),done:p}},[Symbol.iterator](){return this}}}}function bt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Zu(){const t={get(i){return mr(this,i)},get size(){return _r(this)},has:gr,add:Eo,set:wo,delete:Io,clear:So,forEach:yr(!1,!1)},e={get(i){return mr(this,i,!1,!0)},get size(){return _r(this)},has:gr,add:Eo,set:wo,delete:Io,clear:So,forEach:yr(!1,!0)},n={get(i){return mr(this,i,!0)},get size(){return _r(this,!0)},has(i){return gr.call(this,i,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:yr(!0,!1)},r={get(i){return mr(this,i,!0,!0)},get size(){return _r(this,!0)},has(i){return gr.call(this,i,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:yr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=vr(i,!1,!1),n[i]=vr(i,!0,!1),e[i]=vr(i,!1,!0),r[i]=vr(i,!0,!0)}),[t,n,e,r]}const[ef,tf,nf,rf]=Zu();function Mi(t,e){const n=e?t?rf:nf:t?tf:ef;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ne(n,s)&&s in r?n:r,s,i)}const sf={get:Mi(!1,!1)},of={get:Mi(!1,!0)},af={get:Mi(!0,!1)},Ec=new WeakMap,wc=new WeakMap,Ic=new WeakMap,cf=new WeakMap;function lf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uf(t){return t.__v_skip||!Object.isExtensible(t)?0:lf(Nu(t))}function sr(t){return yn(t)?t:Ui(t,!1,Yu,sf,Ec)}function Sc(t){return Ui(t,!1,Qu,of,wc)}function Tc(t){return Ui(t,!0,Xu,af,Ic)}function Ui(t,e,n,r,s){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=uf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Ut(t){return yn(t)?Ut(t.__v_raw):!!(t&&t.__v_isReactive)}function yn(t){return!!(t&&t.__v_isReadonly)}function Ur(t){return!!(t&&t.__v_isShallow)}function Rc(t){return Ut(t)||yn(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function rs(t){return Object.isExtensible(t)&&Dr(t,"__v_skip",!0),t}const qn=t=>me(t)?sr(t):t,Fi=t=>me(t)?Tc(t):t;class Cc{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new xi(()=>e(this._value),()=>Ir(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=re(this);return(!e._cacheable||e.effect.dirty)&&jt(e._value,e._value=e.effect.run())&&Ir(e,4),Ac(e),e.effect._dirtyLevel>=2&&Ir(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function ff(t,e,n=!1){let r,s;const i=q(t);return i?(r=t,s=He):(r=t.get,s=t.set),new Cc(r,s,i||!s,n)}function Ac(t){var e;Mt&&Jt&&(t=re(t),mc(Jt,(e=t.dep)!=null?e:t.dep=_c(()=>t.dep=void 0,t instanceof Cc?t:void 0)))}function Ir(t,e=4,n){t=re(t);const r=t.dep;r&&gc(r,e)}function we(t){return!!(t&&t.__v_isRef===!0)}function ae(t){return Pc(t,!1)}function df(t){return Pc(t,!0)}function Pc(t,e){return we(t)?t:new hf(t,e)}class hf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:qn(e)}get value(){return Ac(this),this._value}set value(e){const n=this.__v_isShallow||Ur(e)||yn(e);e=n?e:re(e),jt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:qn(e),Ir(this,4))}}function mt(t){return we(t)?t.value:t}const pf={get:(t,e,n)=>mt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return we(s)&&!we(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Oc(t){return Ut(t)?t:new Proxy(t,pf)}function mf(t){const e=V(t)?new Array(t.length):{};for(const n in t)e[n]=_f(t,n);return e}class gf{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return zu(re(this._object),this._key)}}function _f(t,e,n){const r=t[e];return we(r)?r:new gf(t,e,n)}/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ft(t,e,n,r){try{return r?t(...r):t()}catch(s){ss(s,e,n)}}function Je(t,e,n,r){if(q(t)){const i=Ft(t,e,n,r);return i&&sc(i)&&i.catch(o=>{ss(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Je(t[i],e,n,r));return s}function ss(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ft(c,null,10,[t,o,a]);return}}yf(t,n,s,r)}function yf(t,e,n,r=!0){console.error(t)}let Kn=!1,ei=!1;const xe=[];let it=0;const hn=[];let Tt=null,Kt=0;const kc=Promise.resolve();let Bi=null;function $i(t){const e=Bi||kc;return t?e.then(this?t.bind(this):t):e}function vf(t){let e=it+1,n=xe.length;for(;e<n;){const r=e+n>>>1,s=xe[r],i=Gn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function ji(t){(!xe.length||!xe.includes(t,Kn&&t.allowRecurse?it+1:it))&&(t.id==null?xe.push(t):xe.splice(vf(t.id),0,t),xc())}function xc(){!Kn&&!ei&&(ei=!0,Bi=kc.then(Lc))}function bf(t){const e=xe.indexOf(t);e>it&&xe.splice(e,1)}function Ef(t){V(t)?hn.push(...t):(!Tt||!Tt.includes(t,t.allowRecurse?Kt+1:Kt))&&hn.push(t),xc()}function To(t,e,n=Kn?it+1:0){for(;n<xe.length;n++){const r=xe[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;xe.splice(n,1),n--,r()}}}function Nc(t){if(hn.length){const e=[...new Set(hn)].sort((n,r)=>Gn(n)-Gn(r));if(hn.length=0,Tt){Tt.push(...e);return}for(Tt=e,Kt=0;Kt<Tt.length;Kt++)Tt[Kt]();Tt=null,Kt=0}}const Gn=t=>t.id==null?1/0:t.id,wf=(t,e)=>{const n=Gn(t)-Gn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Lc(t){ei=!1,Kn=!0,xe.sort(wf);try{for(it=0;it<xe.length;it++){const e=xe[it];e&&e.active!==!1&&Ft(e,null,14)}}finally{it=0,xe.length=0,Nc(),Kn=!1,Bi=null,(xe.length||hn.length)&&Lc()}}function If(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||he;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[l]||he;p&&(s=n.map(_=>Ee(_)?_.trim():_)),f&&(s=n.map(Ys))}let a,c=r[a=As(e)]||r[a=As(lt(e))];!c&&i&&(c=r[a=As(Rn(e))]),c&&Je(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Je(u,t,6,s)}}function Dc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!q(t)){const c=u=>{const l=Dc(u,e,!0);l&&(a=!0,Pe(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(me(t)&&r.set(t,null),null):(V(i)?i.forEach(c=>o[c]=null):Pe(o,i),me(t)&&r.set(t,o),o)}function is(t,e){return!t||!Qr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Rn(e))||ne(t,e))}let Ne=null,os=null;function Fr(t){const e=Ne;return Ne=t,os=t&&t.type.__scopeId||null,e}function as(t){os=t}function cs(){os=null}function Mc(t,e=Ne,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Mo(-1);const i=Fr(e);let o;try{o=t(...s)}finally{Fr(i),r._d&&Mo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Os(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:f,data:p,setupState:_,ctx:y,inheritAttrs:b}=t;let N,P;const M=Fr(t);try{if(n.shapeFlag&4){const K=s||r,J=K;N=st(l.call(J,K,f,i,_,p,y)),P=c}else{const K=e;N=st(K.length>1?K(i,{attrs:c,slots:a,emit:u}):K(i,null)),P=e.props?c:Sf(c)}}catch(K){jn.length=0,ss(K,t,1),N=Re(Qt)}let U=N;if(P&&b!==!1){const K=Object.keys(P),{shapeFlag:J}=U;K.length&&J&7&&(o&&K.some(Ai)&&(P=Tf(P,o)),U=vn(U,P))}return n.dirs&&(U=vn(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),N=U,Fr(M),N}const Sf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qr(n))&&((e||(e={}))[n]=t[n]);return e},Tf=(t,e)=>{const n={};for(const r in t)(!Ai(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Rf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ro(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let f=0;f<l.length;f++){const p=l[f];if(o[p]!==r[p]&&!is(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ro(r,o,u):!0:!!o;return!1}function Ro(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!is(n,i))return!0}return!1}function Cf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Uc="components";function Af(t,e){return Of(Uc,t,!0,e)||t}const Pf=Symbol.for("v-ndc");function Of(t,e,n=!0,r=!1){const s=Ne||Se;if(s){const i=s.type;if(t===Uc){const a=Rd(i,!1);if(a&&(a===e||a===lt(e)||a===ts(lt(e))))return i}const o=Co(s[t]||i[t],e)||Co(s.appContext[t],e);return!o&&r?i:o}}function Co(t,e){return t&&(t[e]||t[lt(e)]||t[ts(lt(e))])}const kf=t=>t.__isSuspense;function xf(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):Ef(t)}const Nf=Symbol.for("v-scx"),Lf=()=>Ye(Nf);function Df(t,e){return Hi(t,null,{flush:"post"})}const br={};function Fn(t,e,n){return Hi(t,e,n)}function Hi(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=he){if(e&&i){const $=e;e=(...se)=>{$(...se),J()}}const c=Se,u=$=>r===!0?$:Gt($,r===!1?1:void 0);let l,f=!1,p=!1;if(we(t)?(l=()=>t.value,f=Ur(t)):Ut(t)?(l=()=>u(t),f=!0):V(t)?(p=!0,f=t.some($=>Ut($)||Ur($)),l=()=>t.map($=>{if(we($))return $.value;if(Ut($))return u($);if(q($))return Ft($,c,2)})):q(t)?e?l=()=>Ft(t,c,2):l=()=>(_&&_(),Je(t,c,3,[y])):l=He,e&&r){const $=l;l=()=>Gt($())}let _,y=$=>{_=U.onStop=()=>{Ft($,c,4),_=U.onStop=void 0}},b;if(ds)if(y=He,e?n&&Je(e,c,3,[l(),p?[]:void 0,y]):l(),s==="sync"){const $=Lf();b=$.__watcherHandles||($.__watcherHandles=[])}else return He;let N=p?new Array(t.length).fill(br):br;const P=()=>{if(!(!U.active||!U.dirty))if(e){const $=U.run();(r||f||(p?$.some((se,W)=>jt(se,N[W])):jt($,N)))&&(_&&_(),Je(e,c,3,[$,N===br?void 0:p&&N[0]===br?[]:N,y]),N=$)}else U.run()};P.allowRecurse=!!e;let M;s==="sync"?M=P:s==="post"?M=()=>Fe(P,c&&c.suspense):(P.pre=!0,c&&(P.id=c.uid),M=()=>ji(P));const U=new xi(l,He,M),K=dc(),J=()=>{U.stop(),K&&Pi(K.effects,U)};return e?n?P():N=U.run():s==="post"?Fe(U.run.bind(U),c&&c.suspense):U.run(),b&&b.push(J),J}function Mf(t,e,n){const r=this.proxy,s=Ee(t)?t.includes(".")?Fc(r,t):()=>r[t]:t.bind(r,r);let i;q(e)?i=e:(i=e.handler,n=e);const o=ir(this),a=Hi(s,i.bind(r),n);return o(),a}function Fc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Gt(t,e,n=0,r){if(!me(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),we(t))Gt(t.value,e,n,r);else if(V(t))for(let s=0;s<t.length;s++)Gt(t[s],e,n,r);else if(rc(t)||dn(t))t.forEach(s=>{Gt(s,e,n,r)});else if(oc(t))for(const s in t)Gt(t[s],e,n,r);return t}function Rt(t,e){if(Ne===null)return t;const n=hs(Ne)||Ne.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=he]=e[s];i&&(q(i)&&(i={mounted:i,updated:i}),i.deep&&Gt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Wt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(tn(),Je(c,n,8,[t.el,a,t,e]),nn())}}/*! #__NO_SIDE_EFFECTS__ */function Bc(t,e){return q(t)?Pe({name:t.name},e,{setup:t}):t}const Sr=t=>!!t.type.__asyncLoader,$c=t=>t.type.__isKeepAlive;function Uf(t,e){jc(t,"a",e)}function Ff(t,e){jc(t,"da",e)}function jc(t,e,n=Se){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ls(e,r,n),n){let s=n.parent;for(;s&&s.parent;)$c(s.parent.vnode)&&Bf(r,e,n,s),s=s.parent}}function Bf(t,e,n,r){const s=ls(e,t,r,!0);Wi(()=>{Pi(r[e],s)},n)}function ls(t,e,n=Se,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;tn();const a=ir(n),c=Je(e,n,t,o);return a(),nn(),c});return r?s.unshift(i):s.push(i),i}}const yt=t=>(e,n=Se)=>(!ds||t==="sp")&&ls(t,(...r)=>e(...r),n),$f=yt("bm"),Vi=yt("m"),jf=yt("bu"),Hf=yt("u"),Vf=yt("bum"),Wi=yt("um"),Wf=yt("sp"),zf=yt("rtg"),qf=yt("rtc");function Kf(t,e=Se){ls("ec",t,e)}function on(t,e,n,r){let s;const i=n&&n[r];if(V(t)||Ee(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(me(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ti=t=>t?Zc(t)?hs(t)||t.proxy:ti(t.parent):null,Bn=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ti(t.parent),$root:t=>ti(t.root),$emit:t=>t.emit,$options:t=>zi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ji(t.update)}),$nextTick:t=>t.n||(t.n=$i.bind(t.proxy)),$watch:t=>Mf.bind(t)}),ks=(t,e)=>t!==he&&!t.__isScriptSetup&&ne(t,e),Gf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ks(r,e))return o[e]=1,r[e];if(s!==he&&ne(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ne(u,e))return o[e]=3,i[e];if(n!==he&&ne(n,e))return o[e]=4,n[e];ni&&(o[e]=0)}}const l=Bn[e];let f,p;if(l)return e==="$attrs"&&Be(t,"get",e),l(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==he&&ne(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,ne(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ks(s,e)?(s[e]=n,!0):r!==he&&ne(r,e)?(r[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==he&&ne(t,o)||ks(e,o)||(a=i[0])&&ne(a,o)||ne(r,o)||ne(Bn,o)||ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ao(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ni=!0;function Jf(t){const e=zi(t),n=t.proxy,r=t.ctx;ni=!1,e.beforeCreate&&Po(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:p,beforeUpdate:_,updated:y,activated:b,deactivated:N,beforeDestroy:P,beforeUnmount:M,destroyed:U,unmounted:K,render:J,renderTracked:$,renderTriggered:se,errorCaptured:W,serverPrefetch:F,expose:fe,inheritAttrs:ye,components:Ce,directives:Ue,filters:Ze}=e;if(u&&Yf(u,r,null),o)for(const ie in o){const te=o[ie];q(te)&&(r[ie]=te.bind(n))}if(s){const ie=s.call(n,n);me(ie)&&(t.data=sr(ie))}if(ni=!0,i)for(const ie in i){const te=i[ie],We=q(te)?te.bind(n,n):q(te.get)?te.get.bind(n,n):He,et=!q(te)&&q(te.set)?te.set.bind(n):He,Ae=Te({get:We,set:et});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Oe=>Ae.value=Oe})}if(a)for(const ie in a)Hc(a[ie],r,n,ie);if(c){const ie=q(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(te=>{Tr(te,ie[te])})}l&&Po(l,t,"c");function X(ie,te){V(te)?te.forEach(We=>ie(We.bind(n))):te&&ie(te.bind(n))}if(X($f,f),X(Vi,p),X(jf,_),X(Hf,y),X(Uf,b),X(Ff,N),X(Kf,W),X(qf,$),X(zf,se),X(Vf,M),X(Wi,K),X(Wf,F),V(fe))if(fe.length){const ie=t.exposed||(t.exposed={});fe.forEach(te=>{Object.defineProperty(ie,te,{get:()=>n[te],set:We=>n[te]=We})})}else t.exposed||(t.exposed={});J&&t.render===He&&(t.render=J),ye!=null&&(t.inheritAttrs=ye),Ce&&(t.components=Ce),Ue&&(t.directives=Ue)}function Yf(t,e,n=He){V(t)&&(t=ri(t));for(const r in t){const s=t[r];let i;me(s)?"default"in s?i=Ye(s.from||r,s.default,!0):i=Ye(s.from||r):i=Ye(s),we(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Po(t,e,n){Je(V(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hc(t,e,n,r){const s=r.includes(".")?Fc(n,r):()=>n[r];if(Ee(t)){const i=e[t];q(i)&&Fn(s,i)}else if(q(t))Fn(s,t.bind(n));else if(me(t))if(V(t))t.forEach(i=>Hc(i,e,n,r));else{const i=q(t.handler)?t.handler.bind(n):e[t.handler];q(i)&&Fn(s,i,t)}}function zi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Br(c,u,o,!0)),Br(c,e,o)),me(e)&&i.set(e,c),c}function Br(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Br(t,i,n,!0),s&&s.forEach(o=>Br(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Xf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Xf={data:Oo,props:ko,emits:ko,methods:Ln,computed:Ln,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:Ln,directives:Ln,watch:Zf,provide:Oo,inject:Qf};function Oo(t,e){return e?t?function(){return Pe(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function Qf(t,e){return Ln(ri(t),ri(e))}function ri(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Me(t,e){return t?[...new Set([].concat(t,e))]:e}function Ln(t,e){return t?Pe(Object.create(null),t,e):e}function ko(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:Pe(Object.create(null),Ao(t),Ao(e??{})):e}function Zf(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const r in e)n[r]=Me(t[r],e[r]);return n}function Vc(){return{app:null,config:{isNativeTag:ku,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ed=0;function td(t,e){return function(r,s=null){q(r)||(r=Pe({},r)),s!=null&&!me(s)&&(s=null);const i=Vc(),o=new WeakSet;let a=!1;const c=i.app={_uid:ed++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ad,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&q(u.install)?(o.add(u),u.install(c,...l)):q(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,f){if(!a){const p=Re(r,s);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),l&&e?e(p,u):t(p,u,f),a=!0,c._container=u,u.__vue_app__=c,hs(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c},runWithContext(u){const l=pn;pn=c;try{return u()}finally{pn=l}}};return c}}let pn=null;function Tr(t,e){if(Se){let n=Se.provides;const r=Se.parent&&Se.parent.provides;r===n&&(n=Se.provides=Object.create(r)),n[t]=e}}function Ye(t,e,n=!1){const r=Se||Ne;if(r||pn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:pn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&q(e)?e.call(r&&r.proxy):e}}function nd(){return!!(Se||Ne||pn)}function rd(t,e,n,r=!1){const s={},i={};Dr(i,fs,1),t.propsDefaults=Object.create(null),Wc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Sc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function sd(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=re(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let f=0;f<l.length;f++){let p=l[f];if(is(t.emitsOptions,p))continue;const _=e[p];if(c)if(ne(i,p))_!==i[p]&&(i[p]=_,u=!0);else{const y=lt(p);s[y]=si(c,a,y,_,t,!1)}else _!==i[p]&&(i[p]=_,u=!0)}}}else{Wc(t,e,s,i)&&(u=!0);let l;for(const f in a)(!e||!ne(e,f)&&((l=Rn(f))===f||!ne(e,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(s[f]=si(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!ne(e,f))&&(delete i[f],u=!0)}u&&pt(t,"set","$attrs")}function Wc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Un(c))continue;const u=e[c];let l;s&&ne(s,l=lt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:is(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=re(n),u=a||he;for(let l=0;l<i.length;l++){const f=i[l];n[f]=si(s,c,f,u[f],t,!ne(u,f))}}return o}function si(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&q(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const l=ir(s);r=u[n]=c.call(null,e),l()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Rn(n))&&(r=!0))}return r}function zc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!q(t)){const l=f=>{c=!0;const[p,_]=zc(f,e,!0);Pe(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return me(t)&&r.set(t,fn),fn;if(V(i))for(let l=0;l<i.length;l++){const f=lt(i[l]);xo(f)&&(o[f]=he)}else if(i)for(const l in i){const f=lt(l);if(xo(f)){const p=i[l],_=o[f]=V(p)||q(p)?{type:p}:Pe({},p);if(_){const y=Do(Boolean,_.type),b=Do(String,_.type);_[0]=y>-1,_[1]=b<0||y<b,(y>-1||ne(_,"default"))&&a.push(f)}}}const u=[o,a];return me(t)&&r.set(t,u),u}function xo(t){return t[0]!=="$"&&!Un(t)}function No(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Lo(t,e){return No(t)===No(e)}function Do(t,e){return V(e)?e.findIndex(n=>Lo(n,t)):q(e)&&Lo(e,t)?0:-1}const qc=t=>t[0]==="_"||t==="$stable",qi=t=>V(t)?t.map(st):[st(t)],id=(t,e,n)=>{if(e._n)return e;const r=Mc((...s)=>qi(e(...s)),n);return r._c=!1,r},Kc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(qc(s))continue;const i=t[s];if(q(i))e[s]=id(s,i,r);else if(i!=null){const o=qi(i);e[s]=()=>o}}},Gc=(t,e)=>{const n=qi(e);t.slots.default=()=>n},od=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),Dr(e,"_",n)):Kc(e,t.slots={})}else t.slots={},e&&Gc(t,e);Dr(t.slots,fs,1)},ad=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=he;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Pe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Kc(e,s)),o=e}else e&&(Gc(t,e),o={default:1});if(i)for(const a in s)!qc(a)&&o[a]==null&&delete s[a]};function ii(t,e,n,r,s=!1){if(V(t)){t.forEach((p,_)=>ii(p,e&&(V(e)?e[_]:e),n,r,s));return}if(Sr(r)&&!s)return;const i=r.shapeFlag&4?hs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===he?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==c&&(Ee(u)?(l[u]=null,ne(f,u)&&(f[u]=null)):we(u)&&(u.value=null)),q(c))Ft(c,a,12,[o,l]);else{const p=Ee(c),_=we(c);if(p||_){const y=()=>{if(t.f){const b=p?ne(f,c)?f[c]:l[c]:c.value;s?V(b)&&Pi(b,i):V(b)?b.includes(i)||b.push(i):p?(l[c]=[i],ne(f,c)&&(f[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else p?(l[c]=o,ne(f,c)&&(f[c]=o)):_&&(c.value=o,t.k&&(l[t.k]=o))};o?(y.id=-1,Fe(y,n)):y()}}}const Fe=xf;function cd(t){return ld(t)}function ld(t,e){const n=ac();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:p,setScopeId:_=He,insertStaticContent:y}=t,b=(d,h,g,w=null,v=null,C=null,x=void 0,R=null,O=!!h.dynamicChildren)=>{if(d===h)return;d&&!kn(d,h)&&(w=m(d),Oe(d,v,C,!0),d=null),h.patchFlag===-2&&(O=!1,h.dynamicChildren=null);const{type:S,ref:D,shapeFlag:j}=h;switch(S){case us:N(d,h,g,w);break;case Qt:P(d,h,g,w);break;case $n:d==null&&M(h,g,w,x);break;case ke:Ce(d,h,g,w,v,C,x,R,O);break;default:j&1?J(d,h,g,w,v,C,x,R,O):j&6?Ue(d,h,g,w,v,C,x,R,O):(j&64||j&128)&&S.process(d,h,g,w,v,C,x,R,O,k)}D!=null&&v&&ii(D,d&&d.ref,C,h||d,!h)},N=(d,h,g,w)=>{if(d==null)r(h.el=a(h.children),g,w);else{const v=h.el=d.el;h.children!==d.children&&u(v,h.children)}},P=(d,h,g,w)=>{d==null?r(h.el=c(h.children||""),g,w):h.el=d.el},M=(d,h,g,w)=>{[d.el,d.anchor]=y(d.children,h,g,w,d.el,d.anchor)},U=({el:d,anchor:h},g,w)=>{let v;for(;d&&d!==h;)v=p(d),r(d,g,w),d=v;r(h,g,w)},K=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),s(d),d=g;s(h)},J=(d,h,g,w,v,C,x,R,O)=>{h.type==="svg"?x="svg":h.type==="math"&&(x="mathml"),d==null?$(h,g,w,v,C,x,R,O):F(d,h,v,C,x,R,O)},$=(d,h,g,w,v,C,x,R)=>{let O,S;const{props:D,shapeFlag:j,transition:B,dirs:z}=d;if(O=d.el=o(d.type,C,D&&D.is,D),j&8?l(O,d.children):j&16&&W(d.children,O,null,w,v,xs(d,C),x,R),z&&Wt(d,null,w,"created"),se(O,d,d.scopeId,x,w),D){for(const le in D)le!=="value"&&!Un(le)&&i(O,le,null,D[le],C,d.children,w,v,L);"value"in D&&i(O,"value",null,D.value,C),(S=D.onVnodeBeforeMount)&&rt(S,w,d)}z&&Wt(d,null,w,"beforeMount");const Y=ud(v,B);Y&&B.beforeEnter(O),r(O,h,g),((S=D&&D.onVnodeMounted)||Y||z)&&Fe(()=>{S&&rt(S,w,d),Y&&B.enter(O),z&&Wt(d,null,w,"mounted")},v)},se=(d,h,g,w,v)=>{if(g&&_(d,g),w)for(let C=0;C<w.length;C++)_(d,w[C]);if(v){let C=v.subTree;if(h===C){const x=v.vnode;se(d,x,x.scopeId,x.slotScopeIds,v.parent)}}},W=(d,h,g,w,v,C,x,R,O=0)=>{for(let S=O;S<d.length;S++){const D=d[S]=R?At(d[S]):st(d[S]);b(null,D,h,g,w,v,C,x,R)}},F=(d,h,g,w,v,C,x)=>{const R=h.el=d.el;let{patchFlag:O,dynamicChildren:S,dirs:D}=h;O|=d.patchFlag&16;const j=d.props||he,B=h.props||he;let z;if(g&&zt(g,!1),(z=B.onVnodeBeforeUpdate)&&rt(z,g,h,d),D&&Wt(h,d,g,"beforeUpdate"),g&&zt(g,!0),S?fe(d.dynamicChildren,S,R,g,w,xs(h,v),C):x||te(d,h,R,null,g,w,xs(h,v),C,!1),O>0){if(O&16)ye(R,h,j,B,g,w,v);else if(O&2&&j.class!==B.class&&i(R,"class",null,B.class,v),O&4&&i(R,"style",j.style,B.style,v),O&8){const Y=h.dynamicProps;for(let le=0;le<Y.length;le++){const pe=Y[le],Ie=j[pe],qe=B[pe];(qe!==Ie||pe==="value")&&i(R,pe,Ie,qe,v,d.children,g,w,L)}}O&1&&d.children!==h.children&&l(R,h.children)}else!x&&S==null&&ye(R,h,j,B,g,w,v);((z=B.onVnodeUpdated)||D)&&Fe(()=>{z&&rt(z,g,h,d),D&&Wt(h,d,g,"updated")},w)},fe=(d,h,g,w,v,C,x)=>{for(let R=0;R<h.length;R++){const O=d[R],S=h[R],D=O.el&&(O.type===ke||!kn(O,S)||O.shapeFlag&70)?f(O.el):g;b(O,S,D,null,w,v,C,x,!0)}},ye=(d,h,g,w,v,C,x)=>{if(g!==w){if(g!==he)for(const R in g)!Un(R)&&!(R in w)&&i(d,R,g[R],null,x,h.children,v,C,L);for(const R in w){if(Un(R))continue;const O=w[R],S=g[R];O!==S&&R!=="value"&&i(d,R,S,O,x,h.children,v,C,L)}"value"in w&&i(d,"value",g.value,w.value,x)}},Ce=(d,h,g,w,v,C,x,R,O)=>{const S=h.el=d?d.el:a(""),D=h.anchor=d?d.anchor:a("");let{patchFlag:j,dynamicChildren:B,slotScopeIds:z}=h;z&&(R=R?R.concat(z):z),d==null?(r(S,g,w),r(D,g,w),W(h.children||[],g,D,v,C,x,R,O)):j>0&&j&64&&B&&d.dynamicChildren?(fe(d.dynamicChildren,B,g,v,C,x,R),(h.key!=null||v&&h===v.subTree)&&Jc(d,h,!0)):te(d,h,g,D,v,C,x,R,O)},Ue=(d,h,g,w,v,C,x,R,O)=>{h.slotScopeIds=R,d==null?h.shapeFlag&512?v.ctx.activate(h,g,w,x,O):Ze(h,g,w,v,C,x,O):ve(d,h,O)},Ze=(d,h,g,w,v,C,x)=>{const R=d.component=bd(d,w,v);if($c(d)&&(R.ctx.renderer=k),wd(R),R.asyncDep){if(v&&v.registerDep(R,X),!d.el){const O=R.subTree=Re(Qt);P(null,O,h,g)}}else X(R,d,h,g,v,C,x)},ve=(d,h,g)=>{const w=h.component=d.component;if(Rf(d,h,g))if(w.asyncDep&&!w.asyncResolved){ie(w,h,g);return}else w.next=h,bf(w.update),w.effect.dirty=!0,w.update();else h.el=d.el,w.vnode=h},X=(d,h,g,w,v,C,x)=>{const R=()=>{if(d.isMounted){let{next:D,bu:j,u:B,parent:z,vnode:Y}=d;{const sn=Yc(d);if(sn){D&&(D.el=Y.el,ie(d,D,x)),sn.asyncDep.then(()=>{d.isUnmounted||R()});return}}let le=D,pe;zt(d,!1),D?(D.el=Y.el,ie(d,D,x)):D=Y,j&&wr(j),(pe=D.props&&D.props.onVnodeBeforeUpdate)&&rt(pe,z,D,Y),zt(d,!0);const Ie=Os(d),qe=d.subTree;d.subTree=Ie,b(qe,Ie,f(qe.el),m(qe),d,v,C),D.el=Ie.el,le===null&&Cf(d,Ie.el),B&&Fe(B,v),(pe=D.props&&D.props.onVnodeUpdated)&&Fe(()=>rt(pe,z,D,Y),v)}else{let D;const{el:j,props:B}=h,{bm:z,m:Y,parent:le}=d,pe=Sr(h);if(zt(d,!1),z&&wr(z),!pe&&(D=B&&B.onVnodeBeforeMount)&&rt(D,le,h),zt(d,!0),j&&Z){const Ie=()=>{d.subTree=Os(d),Z(j,d.subTree,d,v,null)};pe?h.type.__asyncLoader().then(()=>!d.isUnmounted&&Ie()):Ie()}else{const Ie=d.subTree=Os(d);b(null,Ie,g,w,d,v,C),h.el=Ie.el}if(Y&&Fe(Y,v),!pe&&(D=B&&B.onVnodeMounted)){const Ie=h;Fe(()=>rt(D,le,Ie),v)}(h.shapeFlag&256||le&&Sr(le.vnode)&&le.vnode.shapeFlag&256)&&d.a&&Fe(d.a,v),d.isMounted=!0,h=g=w=null}},O=d.effect=new xi(R,He,()=>ji(S),d.scope),S=d.update=()=>{O.dirty&&O.run()};S.id=d.uid,zt(d,!0),S()},ie=(d,h,g)=>{h.component=d;const w=d.vnode.props;d.vnode=h,d.next=null,sd(d,h.props,w,g),ad(d,h.children,g),tn(),To(d),nn()},te=(d,h,g,w,v,C,x,R,O=!1)=>{const S=d&&d.children,D=d?d.shapeFlag:0,j=h.children,{patchFlag:B,shapeFlag:z}=h;if(B>0){if(B&128){et(S,j,g,w,v,C,x,R,O);return}else if(B&256){We(S,j,g,w,v,C,x,R,O);return}}z&8?(D&16&&L(S,v,C),j!==S&&l(g,j)):D&16?z&16?et(S,j,g,w,v,C,x,R,O):L(S,v,C,!0):(D&8&&l(g,""),z&16&&W(j,g,w,v,C,x,R,O))},We=(d,h,g,w,v,C,x,R,O)=>{d=d||fn,h=h||fn;const S=d.length,D=h.length,j=Math.min(S,D);let B;for(B=0;B<j;B++){const z=h[B]=O?At(h[B]):st(h[B]);b(d[B],z,g,null,v,C,x,R,O)}S>D?L(d,v,C,!0,!1,j):W(h,g,w,v,C,x,R,O,j)},et=(d,h,g,w,v,C,x,R,O)=>{let S=0;const D=h.length;let j=d.length-1,B=D-1;for(;S<=j&&S<=B;){const z=d[S],Y=h[S]=O?At(h[S]):st(h[S]);if(kn(z,Y))b(z,Y,g,null,v,C,x,R,O);else break;S++}for(;S<=j&&S<=B;){const z=d[j],Y=h[B]=O?At(h[B]):st(h[B]);if(kn(z,Y))b(z,Y,g,null,v,C,x,R,O);else break;j--,B--}if(S>j){if(S<=B){const z=B+1,Y=z<D?h[z].el:w;for(;S<=B;)b(null,h[S]=O?At(h[S]):st(h[S]),g,Y,v,C,x,R,O),S++}}else if(S>B)for(;S<=j;)Oe(d[S],v,C,!0),S++;else{const z=S,Y=S,le=new Map;for(S=Y;S<=B;S++){const $e=h[S]=O?At(h[S]):st(h[S]);$e.key!=null&&le.set($e.key,S)}let pe,Ie=0;const qe=B-Y+1;let sn=!1,po=0;const On=new Array(qe);for(S=0;S<qe;S++)On[S]=0;for(S=z;S<=j;S++){const $e=d[S];if(Ie>=qe){Oe($e,v,C,!0);continue}let nt;if($e.key!=null)nt=le.get($e.key);else for(pe=Y;pe<=B;pe++)if(On[pe-Y]===0&&kn($e,h[pe])){nt=pe;break}nt===void 0?Oe($e,v,C,!0):(On[nt-Y]=S+1,nt>=po?po=nt:sn=!0,b($e,h[nt],g,null,v,C,x,R,O),Ie++)}const mo=sn?fd(On):fn;for(pe=mo.length-1,S=qe-1;S>=0;S--){const $e=Y+S,nt=h[$e],go=$e+1<D?h[$e+1].el:w;On[S]===0?b(null,nt,g,go,v,C,x,R,O):sn&&(pe<0||S!==mo[pe]?Ae(nt,g,go,2):pe--)}}},Ae=(d,h,g,w,v=null)=>{const{el:C,type:x,transition:R,children:O,shapeFlag:S}=d;if(S&6){Ae(d.component.subTree,h,g,w);return}if(S&128){d.suspense.move(h,g,w);return}if(S&64){x.move(d,h,g,k);return}if(x===ke){r(C,h,g);for(let j=0;j<O.length;j++)Ae(O[j],h,g,w);r(d.anchor,h,g);return}if(x===$n){U(d,h,g);return}if(w!==2&&S&1&&R)if(w===0)R.beforeEnter(C),r(C,h,g),Fe(()=>R.enter(C),v);else{const{leave:j,delayLeave:B,afterLeave:z}=R,Y=()=>r(C,h,g),le=()=>{j(C,()=>{Y(),z&&z()})};B?B(C,Y,le):le()}else r(C,h,g)},Oe=(d,h,g,w=!1,v=!1)=>{const{type:C,props:x,ref:R,children:O,dynamicChildren:S,shapeFlag:D,patchFlag:j,dirs:B}=d;if(R!=null&&ii(R,null,g,d,!0),D&256){h.ctx.deactivate(d);return}const z=D&1&&B,Y=!Sr(d);let le;if(Y&&(le=x&&x.onVnodeBeforeUnmount)&&rt(le,h,d),D&6)Q(d.component,g,w);else{if(D&128){d.suspense.unmount(g,w);return}z&&Wt(d,null,h,"beforeUnmount"),D&64?d.type.remove(d,h,g,v,k,w):S&&(C!==ke||j>0&&j&64)?L(S,h,g,!1,!0):(C===ke&&j&384||!v&&D&16)&&L(O,h,g),w&&ze(d)}(Y&&(le=x&&x.onVnodeUnmounted)||z)&&Fe(()=>{le&&rt(le,h,d),z&&Wt(d,null,h,"unmounted")},g)},ze=d=>{const{type:h,el:g,anchor:w,transition:v}=d;if(h===ke){tt(g,w);return}if(h===$n){K(d);return}const C=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:x,delayLeave:R}=v,O=()=>x(g,C);R?R(d.el,C,O):O()}else C()},tt=(d,h)=>{let g;for(;d!==h;)g=p(d),s(d),d=g;s(h)},Q=(d,h,g)=>{const{bum:w,scope:v,update:C,subTree:x,um:R}=d;w&&wr(w),v.stop(),C&&(C.active=!1,Oe(x,d,h,g)),R&&Fe(R,h),Fe(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},L=(d,h,g,w=!1,v=!1,C=0)=>{for(let x=C;x<d.length;x++)Oe(d[x],h,g,w,v)},m=d=>d.shapeFlag&6?m(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el);let T=!1;const A=(d,h,g)=>{d==null?h._vnode&&Oe(h._vnode,null,null,!0):b(h._vnode||null,d,h,null,null,null,g),T||(T=!0,To(),Nc(),T=!1),h._vnode=d},k={p:b,um:Oe,m:Ae,r:ze,mt:Ze,mc:W,pc:te,pbc:fe,n:m,o:t};let G,Z;return e&&([G,Z]=e(k)),{render:A,hydrate:G,createApp:td(A,G)}}function xs({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ud(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Jc(t,e,n=!1){const r=t.children,s=e.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=At(s[i]),a.el=o.el),n||Jc(o,a)),a.type===us&&(a.el=o.el)}}function fd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Yc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yc(e)}const dd=t=>t.__isTeleport,ke=Symbol.for("v-fgt"),us=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),$n=Symbol.for("v-stc"),jn=[];let Ge=null;function oe(t=!1){jn.push(Ge=t?null:[])}function hd(){jn.pop(),Ge=jn[jn.length-1]||null}let Jn=1;function Mo(t){Jn+=t}function Xc(t){return t.dynamicChildren=Jn>0?Ge||fn:null,hd(),Jn>0&&Ge&&Ge.push(t),t}function de(t,e,n,r,s,i){return Xc(I(t,e,n,r,s,i,!0))}function $r(t,e,n,r,s){return Xc(Re(t,e,n,r,s,!0))}function oi(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return t.type===e.type&&t.key===e.key}const fs="__vInternal",Qc=({key:t})=>t??null,Rr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ee(t)||we(t)||q(t)?{i:Ne,r:t,k:e,f:!!n}:t:null);function I(t,e=null,n=null,r=0,s=null,i=t===ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qc(e),ref:e&&Rr(e),scopeId:os,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ne};return a?(Ki(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ee(n)?8:16),Jn>0&&!o&&Ge&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ge.push(c),c}const Re=pd;function pd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Pf)&&(t=Qt),oi(t)){const a=vn(t,e,!0);return n&&Ki(a,n),Jn>0&&!i&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag|=-2,a}if(Cd(t)&&(t=t.__vccOpts),e){e=md(e);let{class:a,style:c}=e;a&&!Ee(a)&&(e.class=be(a)),me(c)&&(Rc(c)&&!V(c)&&(c=Pe({},c)),e.style=ki(c))}const o=Ee(t)?1:kf(t)?128:dd(t)?64:me(t)?4:q(t)?2:0;return I(t,e,n,r,s,o,i,!0)}function md(t){return t?Rc(t)||fs in t?Pe({},t):t:null}function vn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?_d(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Qc(a),ref:e&&e.ref?n&&s?V(s)?s.concat(Rr(e)):[s,Rr(e)]:Rr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vn(t.ssContent),ssFallback:t.ssFallback&&vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ct(t=" ",e=0){return Re(us,null,t,e)}function gd(t,e){const n=Re($n,null,t);return n.staticCount=e,n}function Ke(t="",e=!1){return e?(oe(),$r(Qt,null,t)):Re(Qt,null,t)}function st(t){return t==null||typeof t=="boolean"?Re(Qt):V(t)?Re(ke,null,t.slice()):typeof t=="object"?At(t):Re(us,null,String(t))}function At(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vn(t)}function Ki(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ki(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(fs in e)?e._ctx=Ne:s===3&&Ne&&(Ne.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:Ne},n=32):(e=String(e),r&64?(n=16,e=[Ct(e)]):n=8);t.children=e,t.shapeFlag|=n}function _d(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=be([e.class,r.class]));else if(s==="style")e.style=ki([e.style,r.style]);else if(Qr(s)){const i=e[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rt(t,e,n,r=null){Je(t,e,7,[n,r])}const yd=Vc();let vd=0;function bd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||yd,i={uid:vd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new uc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zc(r,s),emitsOptions:Dc(r,s),emit:null,emitted:null,propsDefaults:he,inheritAttrs:r.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=If.bind(null,i),t.ce&&t.ce(i),i}let Se=null;const Ed=()=>Se||Ne;let jr,ai;{const t=ac(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};jr=e("__VUE_INSTANCE_SETTERS__",n=>Se=n),ai=e("__VUE_SSR_SETTERS__",n=>ds=n)}const ir=t=>{const e=Se;return jr(t),t.scope.on(),()=>{t.scope.off(),jr(e)}},Uo=()=>{Se&&Se.scope.off(),jr(null)};function Zc(t){return t.vnode.shapeFlag&4}let ds=!1;function wd(t,e=!1){e&&ai(e);const{props:n,children:r}=t.vnode,s=Zc(t);rd(t,n,s,e),od(t,r);const i=s?Id(t,e):void 0;return e&&ai(!1),i}function Id(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=rs(new Proxy(t.ctx,Gf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Td(t):null,i=ir(t);tn();const o=Ft(r,t,0,[t.props,s]);if(nn(),i(),sc(o)){if(o.then(Uo,Uo),e)return o.then(a=>{Fo(t,a,e)}).catch(a=>{ss(a,t,0)});t.asyncDep=o}else Fo(t,o,e)}else el(t,e)}function Fo(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=Oc(e)),el(t,n)}let Bo;function el(t,e,n){const r=t.type;if(!t.render){if(!e&&Bo&&!r.render){const s=r.template||zi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Pe(Pe({isCustomElement:i,delimiters:a},o),c);r.render=Bo(s,u)}}t.render=r.render||He}{const s=ir(t);tn();try{Jf(t)}finally{nn(),s()}}}function Sd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Be(t,"get","$attrs"),e[n]}}))}function Td(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Sd(t)},slots:t.slots,emit:t.emit,expose:e}}function hs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Oc(rs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bn)return Bn[n](t)},has(e,n){return n in e||n in Bn}}))}function Rd(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function Cd(t){return q(t)&&"__vccOpts"in t}const Te=(t,e)=>ff(t,e,ds);function tl(t,e,n){const r=arguments.length;return r===2?me(e)&&!V(e)?oi(e)?Re(t,null,[e]):Re(t,e):Re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oi(n)&&(n=[n]),Re(t,e,n))}const Ad="3.4.20";/**
* @vue/runtime-dom v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Pd="http://www.w3.org/2000/svg",Od="http://www.w3.org/1998/Math/MathML",Pt=typeof document<"u"?document:null,$o=Pt&&Pt.createElement("template"),kd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Pt.createElementNS(Pd,t):e==="mathml"?Pt.createElementNS(Od,t):Pt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Pt.createTextNode(t),createComment:t=>Pt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{$o.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=$o.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},xd=Symbol("_vtc");function Nd(t,e,n){const r=t[xd];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jo=Symbol("_vod"),Ld=Symbol("_vsh"),nl=Symbol("");function Dd(t){const e=Ed();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>li(i,s))},r=()=>{const s=t(e.proxy);ci(e.subTree,s),n(s)};Df(r),Vi(()=>{const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),Wi(()=>s.disconnect())})}function ci(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ci(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)li(t.el,e);else if(t.type===ke)t.children.forEach(n=>ci(n,e));else if(t.type===$n){let{el:n,anchor:r}=t;for(;n&&(li(n,e),n!==r);)n=n.nextSibling}}function li(t,e){if(t.nodeType===1){const n=t.style;let r="";for(const s in e)n.setProperty(`--${s}`,e[s]),r+=`--${s}: ${e[s]};`;n[nl]=r}}const Md=/(^|;)\s*display\s*:/;function Ud(t,e,n){const r=t.style,s=Ee(n);let i=!1;if(n&&!s){if(e)if(Ee(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Cr(r,a,"")}else for(const o in e)n[o]==null&&Cr(r,o,"");for(const o in n)o==="display"&&(i=!0),Cr(r,o,n[o])}else if(s){if(e!==n){const o=r[nl];o&&(n+=";"+o),r.cssText=n,i=Md.test(n)}}else e&&t.removeAttribute("style");jo in t&&(t[jo]=i?r.display:"",t[Ld]&&(r.display="none"))}const Ho=/\s*!important$/;function Cr(t,e,n){if(V(n))n.forEach(r=>Cr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Fd(t,e);Ho.test(n)?t.setProperty(Rn(r),n.replace(Ho,""),"important"):t[r]=n}}const Vo=["Webkit","Moz","ms"],Ns={};function Fd(t,e){const n=Ns[e];if(n)return n;let r=lt(e);if(r!=="filter"&&r in t)return Ns[e]=r;r=ts(r);for(let s=0;s<Vo.length;s++){const i=Vo[s]+r;if(i in t)return Ns[e]=i}return e}const Wo="http://www.w3.org/1999/xlink";function Bd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Wo,e.slice(6,e.length)):t.setAttributeNS(Wo,e,n);else{const i=ju(e);n==null||i&&!cc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function $d(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value")||"":t.value,l=n??"";u!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=cc(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function cn(t,e,n,r){t.addEventListener(e,n,r)}function jd(t,e,n,r){t.removeEventListener(e,n,r)}const zo=Symbol("_vei");function Hd(t,e,n,r,s=null){const i=t[zo]||(t[zo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Vd(e);if(r){const u=i[e]=qd(r,s);cn(t,a,u,c)}else o&&(jd(t,a,o,c),i[e]=void 0)}}const qo=/(?:Once|Passive|Capture)$/;function Vd(t){let e;if(qo.test(t)){e={};let r;for(;r=t.match(qo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rn(t.slice(2)),e]}let Ls=0;const Wd=Promise.resolve(),zd=()=>Ls||(Wd.then(()=>Ls=0),Ls=Date.now());function qd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Je(Kd(r,n.value),e,5,[r])};return n.value=t,n.attached=zd(),n}function Kd(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ko=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Gd=(t,e,n,r,s,i,o,a,c)=>{const u=s==="svg";e==="class"?Nd(t,r,u):e==="style"?Ud(t,n,r):Qr(e)?Ai(e)||Hd(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jd(t,e,r,u))?$d(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Bd(t,e,r,u))};function Jd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ko(e)&&q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ko(e)&&Ee(n)?!1:e in t}const Go=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>wr(e,n):e};function Yd(t){t.target.composing=!0}function Jo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ds=Symbol("_assign"),Ot={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ds]=Go(s);const i=r||s.props&&s.props.type==="number";cn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ys(a)),t[Ds](a)}),n&&cn(t,"change",()=>{t.value=t.value.trim()}),e||(cn(t,"compositionstart",Yd),cn(t,"compositionend",Jo),cn(t,"change",Jo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Ds]=Go(i),t.composing)return;const o=s||t.type==="number"?Ys(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Xd=Pe({patchProp:Gd},kd);let Yo;function Qd(){return Yo||(Yo=cd(Xd))}const Zd=(...t)=>{const e=Qd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=th(r);if(!s)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,eh(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function eh(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function th(t){return Ee(t)?document.querySelector(t):t}var nh=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let rl;const ps=t=>rl=t,sl=Symbol();function ui(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hn||(Hn={}));function rh(){const t=fc(!0),e=t.run(()=>ae({}));let n=[],r=[];const s=rs({install(i){ps(s),s._a=i,i.provide(sl,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!nh?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const il=()=>{};function Xo(t,e,n,r=il){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&dc()&&Vu(s),s}function an(t,...e){t.slice().forEach(n=>{n(...e)})}const sh=t=>t();function fi(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ui(s)&&ui(r)&&t.hasOwnProperty(n)&&!we(r)&&!Ut(r)?t[n]=fi(s,r):t[n]=r}return t}const ih=Symbol();function oh(t){return!ui(t)||!t.hasOwnProperty(ih)}const{assign:St}=Object;function ah(t){return!!(we(t)&&t.effect)}function ch(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const l=mf(n.state.value[t]);return St(l,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=rs(Te(()=>{ps(n);const _=n._s.get(t);return o[p].call(_,_)})),f),{}))}return c=ol(t,u,e,n,r,!0),c}function ol(t,e,n={},r,s,i){let o;const a=St({actions:{}},n),c={deep:!0};let u,l,f=[],p=[],_;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),ae({});let b;function N(W){let F;u=l=!1,typeof W=="function"?(W(r.state.value[t]),F={type:Hn.patchFunction,storeId:t,events:_}):(fi(r.state.value[t],W),F={type:Hn.patchObject,payload:W,storeId:t,events:_});const fe=b=Symbol();$i().then(()=>{b===fe&&(u=!0)}),l=!0,an(f,F,r.state.value[t])}const P=i?function(){const{state:F}=n,fe=F?F():{};this.$patch(ye=>{St(ye,fe)})}:il;function M(){o.stop(),f=[],p=[],r._s.delete(t)}function U(W,F){return function(){ps(r);const fe=Array.from(arguments),ye=[],Ce=[];function Ue(X){ye.push(X)}function Ze(X){Ce.push(X)}an(p,{args:fe,name:W,store:J,after:Ue,onError:Ze});let ve;try{ve=F.apply(this&&this.$id===t?this:J,fe)}catch(X){throw an(Ce,X),X}return ve instanceof Promise?ve.then(X=>(an(ye,X),X)).catch(X=>(an(Ce,X),Promise.reject(X))):(an(ye,ve),ve)}}const K={_p:r,$id:t,$onAction:Xo.bind(null,p),$patch:N,$reset:P,$subscribe(W,F={}){const fe=Xo(f,W,F.detached,()=>ye()),ye=o.run(()=>Fn(()=>r.state.value[t],Ce=>{(F.flush==="sync"?l:u)&&W({storeId:t,type:Hn.direct,events:_},Ce)},St({},c,F)));return fe},$dispose:M},J=sr(K);r._s.set(t,J);const se=(r._a&&r._a.runWithContext||sh)(()=>r._e.run(()=>(o=fc()).run(e)));for(const W in se){const F=se[W];if(we(F)&&!ah(F)||Ut(F))i||(y&&oh(F)&&(we(F)?F.value=y[W]:fi(F,y[W])),r.state.value[t][W]=F);else if(typeof F=="function"){const fe=U(W,F);se[W]=fe,a.actions[W]=F}}return St(J,se),St(re(J),se),Object.defineProperty(J,"$state",{get:()=>r.state.value[t],set:W=>{N(F=>{St(F,W)})}}),r._p.forEach(W=>{St(J,o.run(()=>W({store:J,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(J.$state,y),u=!0,l=!0,J}function lh(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const u=nd();return a=a||(u?Ye(sl,null):null),a&&ps(a),a=rl,a._s.has(r)||(i?ol(r,e,s,a):ch(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ln=typeof document<"u";function uh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function Ms(t,e){const n={};for(const r in e){const s=e[r];n[r]=Xe(s)?s.map(t):t(s)}return n}const Vn=()=>{},Xe=Array.isArray,al=/#/g,fh=/&/g,dh=/\//g,hh=/=/g,ph=/\?/g,cl=/\+/g,mh=/%5B/g,gh=/%5D/g,ll=/%5E/g,_h=/%60/g,ul=/%7B/g,yh=/%7C/g,fl=/%7D/g,vh=/%20/g;function Gi(t){return encodeURI(""+t).replace(yh,"|").replace(mh,"[").replace(gh,"]")}function bh(t){return Gi(t).replace(ul,"{").replace(fl,"}").replace(ll,"^")}function di(t){return Gi(t).replace(cl,"%2B").replace(vh,"+").replace(al,"%23").replace(fh,"%26").replace(_h,"`").replace(ul,"{").replace(fl,"}").replace(ll,"^")}function Eh(t){return di(t).replace(hh,"%3D")}function wh(t){return Gi(t).replace(al,"%23").replace(ph,"%3F")}function Ih(t){return t==null?"":wh(t).replace(dh,"%2F")}function Yn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Sh=/\/$/,Th=t=>t.replace(Sh,"");function Us(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Ph(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Yn(o)}}function Rh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Qo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ch(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&bn(e.matched[r],n.matched[s])&&dl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function dl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ah(t[n],e[n]))return!1;return!0}function Ah(t,e){return Xe(t)?Zo(t,e):Xe(e)?Zo(e,t):t===e}function Zo(t,e){return Xe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ph(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var Xn;(function(t){t.pop="pop",t.push="push"})(Xn||(Xn={}));var Wn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wn||(Wn={}));function Oh(t){if(!t)if(ln){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Th(t)}const kh=/^[^#]+#/;function xh(t,e){return t.replace(kh,"#")+e}function Nh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ms=()=>({left:window.scrollX,top:window.scrollY});function Lh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Nh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ea(t,e){return(history.state?history.state.position-e:-1)+t}const hi=new Map;function Dh(t,e){hi.set(t,e)}function Mh(t){const e=hi.get(t);return hi.delete(t),e}let Uh=()=>location.protocol+"//"+location.host;function hl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Qo(c,"")}return Qo(n,t)+r+s}function Fh(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=hl(t,location),y=n.value,b=e.value;let N=0;if(p){if(n.value=_,e.value=p,o&&o===y){o=null;return}N=b?p.position-b.position:0}else r(_);s.forEach(P=>{P(n.value,y,{delta:N,type:Xn.pop,direction:N?N>0?Wn.forward:Wn.back:Wn.unknown})})};function c(){o=n.value}function u(p){s.push(p);const _=()=>{const y=s.indexOf(p);y>-1&&s.splice(y,1)};return i.push(_),_}function l(){const{history:p}=window;p.state&&p.replaceState(ce({},p.state,{scroll:ms()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function ta(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ms():null}}function Bh(t){const{history:e,location:n}=window,r={value:hl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Uh()+t+c;try{e[l?"replaceState":"pushState"](u,"",p),s.value=u}catch(_){console.error(_),n[l?"replace":"assign"](p)}}function o(c,u){const l=ce({},e.state,ta(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=ce({},s.value,e.state,{forward:c,scroll:ms()});i(l.current,l,!0);const f=ce({},ta(r.value,c,null),{position:l.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function $h(t){t=Oh(t);const e=Bh(t),n=Fh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ce({location:"",base:t,go:r,createHref:xh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function jh(t){return typeof t=="string"||t&&typeof t=="object"}function pl(t){return typeof t=="string"||typeof t=="symbol"}const Et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ml=Symbol("");var na;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(na||(na={}));function En(t,e){return ce(new Error,{type:t,[ml]:!0},e)}function ft(t,e){return t instanceof Error&&ml in t&&(e==null||!!(t.type&e))}const ra="[^/]+?",Hh={sensitive:!1,strict:!1,start:!0,end:!0},Vh=/[.+*?^${}()[\]/\\]/g;function Wh(t,e){const n=ce({},Hh,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let _=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(Vh,"\\$&"),_+=40;else if(p.type===1){const{value:y,repeatable:b,optional:N,regexp:P}=p;i.push({name:y,repeatable:b,optional:N});const M=P||ra;if(M!==ra){_+=10;try{new RegExp(`(${M})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${y}" (${M}): `+K.message)}}let U=b?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(U=N&&u.length<2?`(?:/${U})`:"/"+U),N&&(U+="?"),s+=U,_+=20,N&&(_+=-8),b&&(_+=-20),M===".*"&&(_+=-50)}l.push(_)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),f={};if(!l)return null;for(let p=1;p<l.length;p++){const _=l[p]||"",y=i[p-1];f[y.name]=_&&y.repeatable?_.split("/"):_}return f}function c(u){let l="",f=!1;for(const p of t){(!f||!l.endsWith("/"))&&(l+="/"),f=!1;for(const _ of p)if(_.type===0)l+=_.value;else if(_.type===1){const{value:y,repeatable:b,optional:N}=_,P=y in u?u[y]:"";if(Xe(P)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const M=Xe(P)?P.join("/"):P;if(!M)if(N)p.length<2&&(l.endsWith("/")?l=l.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);l+=M}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function zh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function qh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=zh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(sa(r))return 1;if(sa(s))return-1}return s.length-r.length}function sa(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Kh={type:0,value:""},Gh=/[a-zA-Z0-9_]/;function Jh(t){if(!t)return[[]];if(t==="/")return[[Kh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Gh.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function Yh(t,e,n){const r=Wh(Jh(t.path),n),s=ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Xh(t,e){const n=[],r=new Map;e=aa({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,f,p){const _=!p,y=Qh(l);y.aliasOf=p&&p.record;const b=aa(e,l),N=[y];if("alias"in l){const U=typeof l.alias=="string"?[l.alias]:l.alias;for(const K of U)N.push(ce({},y,{components:p?p.record.components:y.components,path:K,aliasOf:p?p.record:y}))}let P,M;for(const U of N){const{path:K}=U;if(f&&K[0]!=="/"){const J=f.record.path,$=J[J.length-1]==="/"?"":"/";U.path=f.record.path+(K&&$+K)}if(P=Yh(U,f,b),p?p.alias.push(P):(M=M||P,M!==P&&M.alias.push(P),_&&l.name&&!oa(P)&&o(l.name)),y.children){const J=y.children;for(let $=0;$<J.length;$++)i(J[$],P,p&&p.children[$])}p=p||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return M?()=>{o(M)}:Vn}function o(l){if(pl(l)){const f=r.get(l);f&&(r.delete(l),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(l);f>-1&&(n.splice(f,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let f=0;for(;f<n.length&&qh(l,n[f])>=0&&(l.record.path!==n[f].record.path||!gl(l,n[f]));)f++;n.splice(f,0,l),l.record.name&&!oa(l)&&r.set(l.record.name,l)}function u(l,f){let p,_={},y,b;if("name"in l&&l.name){if(p=r.get(l.name),!p)throw En(1,{location:l});b=p.record.name,_=ce(ia(f.params,p.keys.filter(M=>!M.optional).concat(p.parent?p.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),l.params&&ia(l.params,p.keys.map(M=>M.name))),y=p.stringify(_)}else if(l.path!=null)y=l.path,p=n.find(M=>M.re.test(y)),p&&(_=p.parse(y),b=p.record.name);else{if(p=f.name?r.get(f.name):n.find(M=>M.re.test(f.path)),!p)throw En(1,{location:l,currentLocation:f});b=p.record.name,_=ce({},f.params,l.params),y=p.stringify(_)}const N=[];let P=p;for(;P;)N.unshift(P.record),P=P.parent;return{name:b,path:y,params:_,matched:N,meta:ep(N)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ia(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Qh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Zh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Zh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function oa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ep(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function aa(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function gl(t,e){return e.children.some(n=>n===t||gl(t,n))}function tp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(cl," "),o=i.indexOf("="),a=Yn(o<0?i:i.slice(0,o)),c=o<0?null:Yn(i.slice(o+1));if(a in e){let u=e[a];Xe(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function ca(t){let e="";for(let n in t){const r=t[n];if(n=Eh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xe(r)?r.map(i=>i&&di(i)):[r&&di(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function np(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Xe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const rp=Symbol(""),la=Symbol(""),gs=Symbol(""),_l=Symbol(""),pi=Symbol("");function xn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function kt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(En(4,{from:n,to:e})):p instanceof Error?c(p):jh(p)?c(En(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},l=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(l);t.length<3&&(f=f.then(u)),f.catch(p=>c(p))})}function Fs(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(sp(c)){const l=(c.__vccOpts||c)[e];l&&i.push(kt(l,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=uh(l)?l.default:l;o.components[a]=f;const _=(f.__vccOpts||f)[e];return _&&kt(_,n,r,o,a,s)()}))}}return i}function sp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ua(t){const e=Ye(gs),n=Ye(_l),r=Te(()=>e.resolve(mt(t.to))),s=Te(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],f=n.matched;if(!l||!f.length)return-1;const p=f.findIndex(bn.bind(null,l));if(p>-1)return p;const _=fa(c[u-2]);return u>1&&fa(l)===_&&f[f.length-1].path!==_?f.findIndex(bn.bind(null,c[u-2])):p}),i=Te(()=>s.value>-1&&cp(n.params,r.value.params)),o=Te(()=>s.value>-1&&s.value===n.matched.length-1&&dl(n.params,r.value.params));function a(c={}){return ap(c)?e[mt(t.replace)?"replace":"push"](mt(t.to)).catch(Vn):Promise.resolve()}return{route:r,href:Te(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const ip=Bc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ua,setup(t,{slots:e}){const n=sr(ua(t)),{options:r}=Ye(gs),s=Te(()=>({[da(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[da(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:tl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),op=ip;function ap(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cp(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function fa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const da=(t,e,n)=>t??e??n,lp=Bc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ye(pi),s=Te(()=>t.route||r.value),i=Ye(la,0),o=Te(()=>{let u=mt(i);const{matched:l}=s.value;let f;for(;(f=l[u])&&!f.components;)u++;return u}),a=Te(()=>s.value.matched[o.value]);Tr(la,Te(()=>o.value+1)),Tr(rp,a),Tr(pi,s);const c=ae();return Fn(()=>[c.value,a.value,t.name],([u,l,f],[p,_,y])=>{l&&(l.instances[f]=u,_&&_!==l&&u&&u===p&&(l.leaveGuards.size||(l.leaveGuards=_.leaveGuards),l.updateGuards.size||(l.updateGuards=_.updateGuards))),u&&l&&(!_||!bn(l,_)||!p)&&(l.enterCallbacks[f]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,f=a.value,p=f&&f.components[l];if(!p)return ha(n.default,{Component:p,route:u});const _=f.props[l],y=_?_===!0?u.params:typeof _=="function"?_(u):_:null,N=tl(p,ce({},y,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(f.instances[l]=null)},ref:c}));return ha(n.default,{Component:N,route:u})||N}}});function ha(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const yl=lp;function up(t){const e=Xh(t.routes,t),n=t.parseQuery||tp,r=t.stringifyQuery||ca,s=t.history,i=xn(),o=xn(),a=xn(),c=df(Et);let u=Et;ln&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Ms.bind(null,m=>""+m),f=Ms.bind(null,Ih),p=Ms.bind(null,Yn);function _(m,T){let A,k;return pl(m)?(A=e.getRecordMatcher(m),k=T):k=m,e.addRoute(k,A)}function y(m){const T=e.getRecordMatcher(m);T&&e.removeRoute(T)}function b(){return e.getRoutes().map(m=>m.record)}function N(m){return!!e.getRecordMatcher(m)}function P(m,T){if(T=ce({},T||c.value),typeof m=="string"){const h=Us(n,m,T.path),g=e.resolve({path:h.path},T),w=s.createHref(h.fullPath);return ce(h,g,{params:p(g.params),hash:Yn(h.hash),redirectedFrom:void 0,href:w})}let A;if(m.path!=null)A=ce({},m,{path:Us(n,m.path,T.path).path});else{const h=ce({},m.params);for(const g in h)h[g]==null&&delete h[g];A=ce({},m,{params:f(h)}),T.params=f(T.params)}const k=e.resolve(A,T),G=m.hash||"";k.params=l(p(k.params));const Z=Rh(r,ce({},m,{hash:bh(G),path:k.path})),d=s.createHref(Z);return ce({fullPath:Z,hash:G,query:r===ca?np(m.query):m.query||{}},k,{redirectedFrom:void 0,href:d})}function M(m){return typeof m=="string"?Us(n,m,c.value.path):ce({},m)}function U(m,T){if(u!==m)return En(8,{from:T,to:m})}function K(m){return se(m)}function J(m){return K(ce(M(m),{replace:!0}))}function $(m){const T=m.matched[m.matched.length-1];if(T&&T.redirect){const{redirect:A}=T;let k=typeof A=="function"?A(m):A;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=M(k):{path:k},k.params={}),ce({query:m.query,hash:m.hash,params:k.path!=null?{}:m.params},k)}}function se(m,T){const A=u=P(m),k=c.value,G=m.state,Z=m.force,d=m.replace===!0,h=$(A);if(h)return se(ce(M(h),{state:typeof h=="object"?ce({},G,h.state):G,force:Z,replace:d}),T||A);const g=A;g.redirectedFrom=T;let w;return!Z&&Ch(r,k,A)&&(w=En(16,{to:g,from:k}),Ae(k,k,!0,!1)),(w?Promise.resolve(w):fe(g,k)).catch(v=>ft(v)?ft(v,2)?v:et(v):te(v,g,k)).then(v=>{if(v){if(ft(v,2))return se(ce({replace:d},M(v.to),{state:typeof v.to=="object"?ce({},G,v.to.state):G,force:Z}),T||g)}else v=Ce(g,k,!0,d,G);return ye(g,k,v),v})}function W(m,T){const A=U(m,T);return A?Promise.reject(A):Promise.resolve()}function F(m){const T=tt.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(m):m()}function fe(m,T){let A;const[k,G,Z]=fp(m,T);A=Fs(k.reverse(),"beforeRouteLeave",m,T);for(const h of k)h.leaveGuards.forEach(g=>{A.push(kt(g,m,T))});const d=W.bind(null,m,T);return A.push(d),L(A).then(()=>{A=[];for(const h of i.list())A.push(kt(h,m,T));return A.push(d),L(A)}).then(()=>{A=Fs(G,"beforeRouteUpdate",m,T);for(const h of G)h.updateGuards.forEach(g=>{A.push(kt(g,m,T))});return A.push(d),L(A)}).then(()=>{A=[];for(const h of Z)if(h.beforeEnter)if(Xe(h.beforeEnter))for(const g of h.beforeEnter)A.push(kt(g,m,T));else A.push(kt(h.beforeEnter,m,T));return A.push(d),L(A)}).then(()=>(m.matched.forEach(h=>h.enterCallbacks={}),A=Fs(Z,"beforeRouteEnter",m,T,F),A.push(d),L(A))).then(()=>{A=[];for(const h of o.list())A.push(kt(h,m,T));return A.push(d),L(A)}).catch(h=>ft(h,8)?h:Promise.reject(h))}function ye(m,T,A){a.list().forEach(k=>F(()=>k(m,T,A)))}function Ce(m,T,A,k,G){const Z=U(m,T);if(Z)return Z;const d=T===Et,h=ln?history.state:{};A&&(k||d?s.replace(m.fullPath,ce({scroll:d&&h&&h.scroll},G)):s.push(m.fullPath,G)),c.value=m,Ae(m,T,A,d),et()}let Ue;function Ze(){Ue||(Ue=s.listen((m,T,A)=>{if(!Q.listening)return;const k=P(m),G=$(k);if(G){se(ce(G,{replace:!0}),k).catch(Vn);return}u=k;const Z=c.value;ln&&Dh(ea(Z.fullPath,A.delta),ms()),fe(k,Z).catch(d=>ft(d,12)?d:ft(d,2)?(se(d.to,k).then(h=>{ft(h,20)&&!A.delta&&A.type===Xn.pop&&s.go(-1,!1)}).catch(Vn),Promise.reject()):(A.delta&&s.go(-A.delta,!1),te(d,k,Z))).then(d=>{d=d||Ce(k,Z,!1),d&&(A.delta&&!ft(d,8)?s.go(-A.delta,!1):A.type===Xn.pop&&ft(d,20)&&s.go(-1,!1)),ye(k,Z,d)}).catch(Vn)}))}let ve=xn(),X=xn(),ie;function te(m,T,A){et(m);const k=X.list();return k.length?k.forEach(G=>G(m,T,A)):console.error(m),Promise.reject(m)}function We(){return ie&&c.value!==Et?Promise.resolve():new Promise((m,T)=>{ve.add([m,T])})}function et(m){return ie||(ie=!m,Ze(),ve.list().forEach(([T,A])=>m?A(m):T()),ve.reset()),m}function Ae(m,T,A,k){const{scrollBehavior:G}=t;if(!ln||!G)return Promise.resolve();const Z=!A&&Mh(ea(m.fullPath,0))||(k||!A)&&history.state&&history.state.scroll||null;return $i().then(()=>G(m,T,Z)).then(d=>d&&Lh(d)).catch(d=>te(d,m,T))}const Oe=m=>s.go(m);let ze;const tt=new Set,Q={currentRoute:c,listening:!0,addRoute:_,removeRoute:y,hasRoute:N,getRoutes:b,resolve:P,options:t,push:K,replace:J,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:We,install(m){const T=this;m.component("RouterLink",op),m.component("RouterView",yl),m.config.globalProperties.$router=T,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>mt(c)}),ln&&!ze&&c.value===Et&&(ze=!0,K(s.location).catch(G=>{}));const A={};for(const G in Et)Object.defineProperty(A,G,{get:()=>c.value[G],enumerable:!0});m.provide(gs,T),m.provide(_l,Sc(A)),m.provide(pi,c);const k=m.unmount;tt.add(m),m.unmount=function(){tt.delete(m),tt.size<1&&(u=Et,Ue&&Ue(),Ue=null,c.value=Et,ze=!1,ie=!1),k()}}};function L(m){return m.reduce((T,A)=>T.then(()=>F(A)),Promise.resolve())}return Q}function fp(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>bn(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>bn(u,c))||s.push(c))}return[n,r,s]}function dp(){return Ye(gs)}const or=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},hp={class:"main-container"},pp={__name:"App",setup(t){return(e,n)=>(oe(),de("div",hp,[Re(mt(yl))]))}},mp=or(pp,[["__scopeId","data-v-4129fcea"]]);var pa={};/**
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
 */const vl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,_=u&63;c||(_=64,o||(p=64)),r.push(n[l],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new _p;const p=i<<2|a>>4;if(r.push(p),u!==64){const _=a<<4&240|u>>2;if(r.push(_),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _p extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yp=function(t){const e=vl(t);return bl.encodeByteArray(e,!0)},El=function(t){return yp(t).replace(/\./g,"")},wl=function(t){try{return bl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bp=()=>vp().__FIREBASE_DEFAULTS__,Ep=()=>{if(typeof process>"u"||typeof pa>"u")return;const t=pa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wl(t[1]);return e&&JSON.parse(e)},Ji=()=>{try{return bp()||Ep()||wp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ip=t=>{var e,n;return(n=(e=Ji())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Il=()=>{var t;return(t=Ji())===null||t===void 0?void 0:t.config},Sl=t=>{var e;return(e=Ji())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Sp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Rp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Cp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ap(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Pp(){try{return typeof indexedDB=="object"}catch{return!1}}function Op(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const kp="FirebaseError";class Ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kp,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ht(s,a,r)}}function xp(t,e){return t.replace(Np,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Np=/\{\$([^}]+)}/g;function Lp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ma(i)&&ma(o)){if(!Hr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ma(t){return t!==null&&typeof t=="object"}/**
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
 */function cr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Dn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Mn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dp(t,e){const n=new Mp(t,e);return n.subscribe.bind(n)}class Mp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Up(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Bs),s.error===void 0&&(s.error=Bs),s.complete===void 0&&(s.complete=Bs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Up(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bs(){}/**
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
 */function vt(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qt="[DEFAULT]";/**
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
 */class Fp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Sp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($p(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bp(t){return t===qt?void 0:t}function $p(t){return t.instantiationMode==="EAGER"}/**
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
 */class jp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Hp={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Vp=ue.INFO,Wp={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},zp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Wp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tl{constructor(e){this.name=e,this._logLevel=Vp,this._logHandler=zp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const qp=(t,e)=>e.some(n=>t instanceof n);let ga,_a;function Kp(){return ga||(ga=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gp(){return _a||(_a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rl=new WeakMap,mi=new WeakMap,Cl=new WeakMap,$s=new WeakMap,Yi=new WeakMap;function Jp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Bt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rl.set(n,t)}).catch(()=>{}),Yi.set(e,t),e}function Yp(t){if(mi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});mi.set(t,e)}let gi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xp(t){gi=t(gi)}function Qp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(js(this),e,...n);return Cl.set(r,e.sort?e.sort():[e]),Bt(r)}:Gp().includes(t)?function(...e){return t.apply(js(this),e),Bt(Rl.get(this))}:function(...e){return Bt(t.apply(js(this),e))}}function Zp(t){return typeof t=="function"?Qp(t):(t instanceof IDBTransaction&&Yp(t),qp(t,Kp())?new Proxy(t,gi):t)}function Bt(t){if(t instanceof IDBRequest)return Jp(t);if($s.has(t))return $s.get(t);const e=Zp(t);return e!==t&&($s.set(t,e),Yi.set(e,t)),e}const js=t=>Yi.get(t);function em(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Bt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Bt(o.result),c.oldVersion,c.newVersion,Bt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const tm=["get","getKey","getAll","getAllKeys","count"],nm=["put","add","delete","clear"],Hs=new Map;function ya(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hs.get(e))return Hs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=nm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tm.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Hs.set(e,i),i}Xp(t=>({...t,get:(e,n,r)=>ya(e,n)||t.get(e,n,r),has:(e,n)=>!!ya(e,n)||t.has(e,n)}));/**
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
 */class rm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _i="@firebase/app",va="0.9.27";/**
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
 */const Zt=new Tl("@firebase/app"),im="@firebase/app-compat",om="@firebase/analytics-compat",am="@firebase/analytics",cm="@firebase/app-check-compat",lm="@firebase/app-check",um="@firebase/auth",fm="@firebase/auth-compat",dm="@firebase/database",hm="@firebase/database-compat",pm="@firebase/functions",mm="@firebase/functions-compat",gm="@firebase/installations",_m="@firebase/installations-compat",ym="@firebase/messaging",vm="@firebase/messaging-compat",bm="@firebase/performance",Em="@firebase/performance-compat",wm="@firebase/remote-config",Im="@firebase/remote-config-compat",Sm="@firebase/storage",Tm="@firebase/storage-compat",Rm="@firebase/firestore",Cm="@firebase/firestore-compat",Am="firebase",Pm="10.8.0";/**
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
 */const yi="[DEFAULT]",Om={[_i]:"fire-core",[im]:"fire-core-compat",[am]:"fire-analytics",[om]:"fire-analytics-compat",[lm]:"fire-app-check",[cm]:"fire-app-check-compat",[um]:"fire-auth",[fm]:"fire-auth-compat",[dm]:"fire-rtdb",[hm]:"fire-rtdb-compat",[pm]:"fire-fn",[mm]:"fire-fn-compat",[gm]:"fire-iid",[_m]:"fire-iid-compat",[ym]:"fire-fcm",[vm]:"fire-fcm-compat",[bm]:"fire-perf",[Em]:"fire-perf-compat",[wm]:"fire-rc",[Im]:"fire-rc-compat",[Sm]:"fire-gcs",[Tm]:"fire-gcs-compat",[Rm]:"fire-fst",[Cm]:"fire-fst-compat","fire-js":"fire-js",[Am]:"fire-js-all"};/**
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
 */const Vr=new Map,vi=new Map;function km(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qn(t){const e=t.name;if(vi.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;vi.set(e,t);for(const n of Vr.values())km(n,t);return!0}function Al(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const xm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$t=new ar("app","Firebase",xm);/**
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
 */class Nm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const lr=Pm;function Pl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw $t.create("bad-app-name",{appName:String(s)});if(n||(n=Il()),!n)throw $t.create("no-options");const i=Vr.get(s);if(i){if(Hr(n,i.options)&&Hr(r,i.config))return i;throw $t.create("duplicate-app",{appName:s})}const o=new jp(s);for(const c of vi.values())o.addComponent(c);const a=new Nm(n,r,o);return Vr.set(s,a),a}function Lm(t=yi){const e=Vr.get(t);if(!e&&t===yi&&Il())return Pl();if(!e)throw $t.create("no-app",{appName:t});return e}function mn(t,e,n){var r;let s=(r=Om[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(a.join(" "));return}Qn(new wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Dm="firebase-heartbeat-database",Mm=1,Zn="firebase-heartbeat-store";let Vs=null;function Ol(){return Vs||(Vs=em(Dm,Mm,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zn)}catch(n){console.warn(n)}}}}).catch(t=>{throw $t.create("idb-open",{originalErrorMessage:t.message})})),Vs}async function Um(t){try{const n=(await Ol()).transaction(Zn),r=await n.objectStore(Zn).get(kl(t));return await n.done,r}catch(e){if(e instanceof Ht)Zt.warn(e.message);else{const n=$t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(n.message)}}}async function ba(t,e){try{const r=(await Ol()).transaction(Zn,"readwrite");await r.objectStore(Zn).put(e,kl(t)),await r.done}catch(n){if(n instanceof Ht)Zt.warn(n.message);else{const r=$t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zt.warn(r.message)}}}function kl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Fm=1024,Bm=30*24*60*60*1e3;class $m{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ea();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Bm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ea(),{heartbeatsToSend:r,unsentEntries:s}=jm(this._heartbeatsCache.heartbeats),i=El(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ea(){return new Date().toISOString().substring(0,10)}function jm(t,e=Fm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Hm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pp()?Op().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Um(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ba(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ba(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wa(t){return El(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Vm(t){Qn(new wn("platform-logger",e=>new rm(e),"PRIVATE")),Qn(new wn("heartbeat",e=>new $m(e),"PRIVATE")),mn(_i,va,t),mn(_i,va,"esm2017"),mn("fire-js","")}Vm("");function Xi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function xl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wm=xl,Nl=new ar("auth","Firebase",xl());/**
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
 */const Wr=new Tl("@firebase/auth");function zm(t,...e){Wr.logLevel<=ue.WARN&&Wr.warn(`Auth (${lr}): ${t}`,...e)}function Ar(t,...e){Wr.logLevel<=ue.ERROR&&Wr.error(`Auth (${lr}): ${t}`,...e)}/**
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
 */function Qe(t,...e){throw Qi(t,...e)}function at(t,...e){return Qi(t,...e)}function qm(t,e,n){const r=Object.assign(Object.assign({},Wm()),{[e]:n});return new ar("auth","Firebase",r).create(e,{appName:t.name})}function Qi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nl.create(t,...e)}function H(t,e,...n){if(!t)throw Qi(e,...n)}function dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ar(e),new Error(e)}function _t(t,e){t||dt(e)}/**
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
 */function bi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Km(){return Ia()==="http:"||Ia()==="https:"}function Ia(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Gm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Km()||Rp()||"connection"in navigator)?navigator.onLine:!0}function Jm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ur{constructor(e,n){this.shortDelay=e,this.longDelay=n,_t(n>e,"Short delay should be less than long delay!"),this.isMobile=Tp()||Cp()}get(){return Gm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zi(t,e){_t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ll{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ym={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Xm=new ur(3e4,6e4);function rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vt(t,e,n,r,s={}){return Dl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=cr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ll.fetch()(Ml(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Dl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ym),e);try{const s=new Zm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Er(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Er(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Er(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Er(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qm(t,l,u);Qe(t,l)}}catch(s){if(s instanceof Ht)throw s;Qe(t,"network-request-failed",{message:String(s)})}}async function _s(t,e,n,r,s={}){const i=await Vt(t,e,n,r,s);return"mfaPendingCredential"in i&&Qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ml(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Zi(t.config,s):`${t.config.apiScheme}://${s}`}function Qm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),Xm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Er(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=at(t,e,r);return s.customData._tokenResponse=n,s}function Sa(t){return t!==void 0&&t.enterprise!==void 0}class eg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Qm(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function tg(t,e){return Vt(t,"GET","/v2/recaptchaConfig",rn(t,e))}/**
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
 */async function ng(t,e){return Vt(t,"POST","/v1/accounts:delete",e)}async function rg(t,e){return Vt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sg(t,e=!1){const n=vt(t),r=await n.getIdToken(e),s=eo(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zn(Ws(s.auth_time)),issuedAtTime:zn(Ws(s.iat)),expirationTime:zn(Ws(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ws(t){return Number(t)*1e3}function eo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ar("JWT malformed, contained fewer than 3 sections"),null;try{const s=wl(n);return s?JSON.parse(s):(Ar("Failed to decode base64 JWT payload"),null)}catch(s){return Ar("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ig(t){const e=eo(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function er(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ht&&og(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function og({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ag{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ul{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zn(this.lastLoginAt),this.creationTime=zn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await er(t,rg(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ug(i.providerUserInfo):[],a=lg(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ul(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,f)}async function cg(t){const e=vt(t);await zr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ug(t){return t.map(e=>{var{providerId:n}=e,r=Xi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fg(t,e){const n=await Dl(t,{},async()=>{const r=cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ml(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ll.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dg(t,e){return Vt(t,"POST","/v2/accounts:revokeToken",rn(t,e))}/**
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
 */class tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ig(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new tr;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tr,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
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
 */function wt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Xi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ag(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ul(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await er(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sg(this,e)}reload(){return cg(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await er(this,ng(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:U,emailVerified:K,isAnonymous:J,providerData:$,stsTokenManager:se}=n;H(U&&se,e,"internal-error");const W=tr.fromJSON(this.name,se);H(typeof U=="string",e,"internal-error"),wt(f,e.name),wt(p,e.name),H(typeof K=="boolean",e,"internal-error"),H(typeof J=="boolean",e,"internal-error"),wt(_,e.name),wt(y,e.name),wt(b,e.name),wt(N,e.name),wt(P,e.name),wt(M,e.name);const F=new Xt({uid:U,auth:e,email:p,emailVerified:K,displayName:f,isAnonymous:J,photoURL:y,phoneNumber:_,tenantId:b,stsTokenManager:W,createdAt:P,lastLoginAt:M});return $&&Array.isArray($)&&(F.providerData=$.map(fe=>Object.assign({},fe))),N&&(F._redirectEventId=N),F}static async _fromIdTokenResponse(e,n,r=!1){const s=new tr;s.updateFromServerResponse(n);const i=new Xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await zr(i),i}}/**
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
 */const Ta=new Map;function ht(t){_t(t instanceof Function,"Expected a class definition");let e=Ta.get(t);return e?(_t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ta.set(t,e),e)}/**
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
 */class Fl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fl.type="NONE";const Ra=Fl;/**
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
 */function Pr(t,e,n){return`firebase:${t}:${e}:${n}`}class gn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Pr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Pr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gn(ht(Ra),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||ht(Ra);const o=Pr(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const f=Xt._fromJSON(e,l);u!==i&&(a=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new gn(i,e,r))}}/**
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
 */function Ca(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vl(e))return"Blackberry";if(Wl(e))return"Webos";if(to(e))return"Safari";if((e.includes("chrome/")||$l(e))&&!e.includes("edge/"))return"Chrome";if(Hl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bl(t=Le()){return/firefox\//i.test(t)}function to(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $l(t=Le()){return/crios\//i.test(t)}function jl(t=Le()){return/iemobile/i.test(t)}function Hl(t=Le()){return/android/i.test(t)}function Vl(t=Le()){return/blackberry/i.test(t)}function Wl(t=Le()){return/webos/i.test(t)}function ys(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hg(t=Le()){var e;return ys(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pg(){return Ap()&&document.documentMode===10}function zl(t=Le()){return ys(t)||Hl(t)||Wl(t)||Vl(t)||/windows phone/i.test(t)||jl(t)}function mg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ql(t,e=[]){let n;switch(t){case"Browser":n=Ca(Le());break;case"Worker":n=`${Ca(Le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${lr}/${r}`}/**
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
 */class gg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _g(t,e={}){return Vt(t,"GET","/v2/passwordPolicy",rn(t,e))}/**
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
 */const yg=6;class vg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class bg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Aa(this),this.idTokenSubscription=new Aa(this),this.beforeStateQueue=new gg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ht(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await gn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?vt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _g(this),n=new vg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ar("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ht(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await gn.create(this,[ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ql(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cn(t){return vt(t)}class Aa{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dp(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Eg(t){vs=t}function Kl(t){return vs.loadJS(t)}function wg(){return vs.recaptchaEnterpriseScript}function Ig(){return vs.gapiScript}function Sg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Tg="recaptcha-enterprise",Rg="NO_RECAPTCHA";class Cg{constructor(e){this.type=Tg,this.auth=Cn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{tg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new eg(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Sa(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Rg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Sa(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=wg();c.length!==0&&(c+=a),Kl(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Pa(t,e,n,r=!1){const s=new Cg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Oa(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Pa(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Pa(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Ag(t,e){const n=Al(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Hr(i,e??{}))return s;Qe(s,"already-initialized")}return n.initialize({options:e})}function Pg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Og(t,e,n){const r=Cn(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Gl(e),{host:o,port:a}=kg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||xg()}function Gl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kg(t){const e=Gl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ka(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ka(o)}}}function ka(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class no{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,n){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function Ng(t,e){return Vt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Lg(t,e){return _s(t,"POST","/v1/accounts:signInWithPassword",rn(t,e))}/**
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
 */async function Dg(t,e){return _s(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}async function Mg(t,e){return _s(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}/**
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
 */class nr extends no{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new nr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new nr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oa(e,n,"signInWithPassword",Lg);case"emailLink":return Dg(e,{email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oa(e,r,"signUpPassword",Ng);case"emailLink":return Mg(e,{idToken:n,email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function _n(t,e){return _s(t,"POST","/v1/accounts:signInWithIdp",rn(t,e))}/**
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
 */const Ug="http://localhost";class en extends no{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Xi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new en(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _n(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_n(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_n(e,n)}buildRequest(){const e={requestUri:Ug,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cr(n)}return e}}/**
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
 */function Fg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bg(t){const e=Dn(Mn(t)).link,n=e?Dn(Mn(e)).deep_link_id:null,r=Dn(Mn(t)).deep_link_id;return(r?Dn(Mn(r)).link:null)||r||n||e||t}class ro{constructor(e){var n,r,s,i,o,a;const c=Dn(Mn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Fg((s=c.mode)!==null&&s!==void 0?s:null);H(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Bg(e);try{return new ro(n)}catch{return null}}}/**
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
 */class An{constructor(){this.providerId=An.PROVIDER_ID}static credential(e,n){return nr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ro.parseLink(n);return H(r,"argument-error"),nr._fromEmailAndCode(e,r.code,r.tenantId)}}An.PROVIDER_ID="password";An.EMAIL_PASSWORD_SIGN_IN_METHOD="password";An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Jl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fr extends Jl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xt extends fr{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return en._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class Lt extends fr{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
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
 */class Dt extends fr{constructor(){super("twitter.com")}static credential(e,n){return en._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dt.credential(n,r)}catch{return null}}}Dt.TWITTER_SIGN_IN_METHOD="twitter.com";Dt.PROVIDER_ID="twitter.com";/**
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
 */class In{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Xt._fromIdTokenResponse(e,r,s),o=xa(r);return new In({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=xa(r);return new In({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function xa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qr extends Ht{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new qr(e,n,r,s)}}function Yl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qr._fromErrorAndOperation(t,i,e,r):i})}async function $g(t,e,n=!1){const r=await er(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return In._forOperation(t,"link",r)}/**
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
 */async function jg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await er(t,Yl(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=eo(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),In._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qe(r,"user-mismatch"),i}}/**
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
 */async function Xl(t,e,n=!1){const r="signIn",s=await Yl(t,r,e),i=await In._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Hg(t,e){return Xl(Cn(t),e)}/**
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
 */async function Vg(t){const e=Cn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Wg(t,e,n){return Hg(vt(t),An.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Vg(t),r})}function zg(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function qg(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function Kg(t,e,n,r){return vt(t).onAuthStateChanged(e,n,r)}function Gg(t){return vt(t).signOut()}const Kr="__sak";/**
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
 */class Ql{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kr,"1"),this.storage.removeItem(Kr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Jg(){const t=Le();return to(t)||ys(t)}const Yg=1e3,Xg=10;class Zl extends Ql{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Jg()&&mg(),this.fallbackToPolling=zl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);pg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Xg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Yg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zl.type="LOCAL";const Qg=Zl;/**
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
 */class eu extends Ql{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eu.type="SESSION";const tu=eu;/**
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
 */function Zg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new bs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Zg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bs.receivers=[];/**
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
 */function so(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class e_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=so("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ct(){return window}function t_(t){ct().location.href=t}/**
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
 */function nu(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function n_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function s_(){return nu()?self:null}/**
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
 */const ru="firebaseLocalStorageDb",i_=1,Gr="firebaseLocalStorage",su="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Es(t,e){return t.transaction([Gr],e?"readwrite":"readonly").objectStore(Gr)}function o_(){const t=indexedDB.deleteDatabase(ru);return new dr(t).toPromise()}function Ei(){const t=indexedDB.open(ru,i_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gr,{keyPath:su})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gr)?e(r):(r.close(),await o_(),e(await Ei()))})})}async function Na(t,e,n){const r=Es(t,!0).put({[su]:e,value:n});return new dr(r).toPromise()}async function a_(t,e){const n=Es(t,!1).get(e),r=await new dr(n).toPromise();return r===void 0?null:r.value}function La(t,e){const n=Es(t,!0).delete(e);return new dr(n).toPromise()}const c_=800,l_=3;class iu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ei(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>l_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bs._getInstance(s_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await n_(),!this.activeServiceWorker)return;this.sender=new e_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||r_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ei();return await Na(e,Kr,"1"),await La(e,Kr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Na(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>a_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>La(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Es(s,!1).getAll();return new dr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),c_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iu.type="LOCAL";const u_=iu;new ur(3e4,6e4);/**
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
 */function f_(t,e){return e?ht(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class io extends no{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _n(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _n(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _n(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function d_(t){return Xl(t.auth,new io(t),t.bypassAuthState)}function h_(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),jg(n,new io(t),t.bypassAuthState)}async function p_(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),$g(n,new io(t),t.bypassAuthState)}/**
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
 */class ou{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return d_;case"linkViaPopup":case"linkViaRedirect":return p_;case"reauthViaPopup":case"reauthViaRedirect":return h_;default:Qe(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const m_=new ur(2e3,1e4);class un extends ou{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=so();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,m_.get())};e()}}un.currentPopupAction=null;/**
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
 */const g_="pendingRedirect",Or=new Map;class __ extends ou{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Or.get(this.auth._key());if(!e){try{const r=await y_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Or.set(this.auth._key(),e)}return this.bypassAuthState||Or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function y_(t,e){const n=E_(e),r=b_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function v_(t,e){Or.set(t._key(),e)}function b_(t){return ht(t._redirectPersistence)}function E_(t){return Pr(g_,t.config.apiKey,t.name)}async function w_(t,e,n=!1){const r=Cn(t),s=f_(r,e),o=await new __(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const I_=10*60*1e3;class S_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!T_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!au(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=I_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Da(e))}saveEventToCache(e){this.cachedEventUids.add(Da(e)),this.lastProcessedEventTime=Date.now()}}function Da(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function au({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function T_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return au(t);default:return!1}}/**
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
 */async function R_(t,e={}){return Vt(t,"GET","/v1/projects",e)}/**
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
 */const C_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,A_=/^https?/;async function P_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await R_(t);for(const n of e)try{if(O_(n))return}catch{}Qe(t,"unauthorized-domain")}function O_(t){const e=bi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!A_.test(n))return!1;if(C_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const k_=new ur(3e4,6e4);function Ma(){const t=ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function x_(t){return new Promise((e,n)=>{var r,s,i;function o(){Ma(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ma(),n(at(t,"network-request-failed"))},timeout:k_.get()})}if(!((s=(r=ct().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ct().gapi)===null||i===void 0)&&i.load)o();else{const a=Sg("iframefcb");return ct()[a]=()=>{gapi.load?o():n(at(t,"network-request-failed"))},Kl(`${Ig()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw kr=null,e})}let kr=null;function N_(t){return kr=kr||x_(t),kr}/**
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
 */const L_=new ur(5e3,15e3),D_="__/auth/iframe",M_="emulator/auth/iframe",U_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},F_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function B_(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zi(e,M_):`https://${t.config.authDomain}/${D_}`,r={apiKey:e.apiKey,appName:t.name,v:lr},s=F_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${cr(r).slice(1)}`}async function $_(t){const e=await N_(t),n=ct().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:B_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=at(t,"network-request-failed"),a=ct().setTimeout(()=>{i(o)},L_.get());function c(){ct().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const j_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},H_=500,V_=600,W_="_blank",z_="http://localhost";class Ua{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function q_(t,e,n,r=H_,s=V_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},j_),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Le().toLowerCase();n&&(a=$l(u)?W_:n),Bl(u)&&(e=e||z_,c.scrollbars="yes");const l=Object.entries(c).reduce((p,[_,y])=>`${p}${_}=${y},`,"");if(hg(u)&&a!=="_self")return K_(e||"",a),new Ua(null);const f=window.open(e||"",a,l);H(f,t,"popup-blocked");try{f.focus()}catch{}return new Ua(f)}function K_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const G_="__/auth/handler",J_="emulator/auth/handler",Y_=encodeURIComponent("fac");async function Fa(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:lr,eventId:s};if(e instanceof Jl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Lp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,f]of Object.entries(i||{}))o[l]=f}if(e instanceof fr){const l=e.getScopes().filter(f=>f!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${Y_}=${encodeURIComponent(c)}`:"";return`${X_(t)}?${cr(a).slice(1)}${u}`}function X_({config:t}){return t.emulator?Zi(t,J_):`https://${t.authDomain}/${G_}`}/**
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
 */const zs="webStorageSupport";class Q_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tu,this._completeRedirectFn=w_,this._overrideRedirectResult=v_}async _openPopup(e,n,r,s){var i;_t((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Fa(e,n,r,bi(),s);return q_(e,o,so())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Fa(e,n,r,bi(),s);return t_(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(_t(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $_(e),r=new S_(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zs,{type:zs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zs];o!==void 0&&n(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=P_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zl()||to()||ys()}}const Z_=Q_;var Ba="@firebase/auth",$a="1.6.0";/**
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
 */class ey{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ty(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ny(t){Qn(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ql(t)},u=new bg(r,s,i,c);return Pg(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qn(new wn("auth-internal",e=>{const n=Cn(e.getProvider("auth").getImmediate());return(r=>new ey(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(Ba,$a,ty(t)),mn(Ba,$a,"esm2017")}/**
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
 */const ry=5*60,sy=Sl("authIdTokenMaxAge")||ry;let ja=null;const iy=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sy)return;const s=n==null?void 0:n.token;ja!==s&&(ja=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cu(t=Lm()){const e=Al(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ag(t,{popupRedirectResolver:Z_,persistence:[u_,Qg,tu]}),r=Sl("authTokenSyncURL");if(r){const i=iy(r);qg(n,i,()=>i(n.currentUser)),zg(n,o=>i(o))}const s=Ip("auth");return s&&Og(n,`http://${s}`),n}function oy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Eg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=at("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",oy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ny("Browser");var ay="firebase",cy="10.8.0";/**
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
 */mn(ay,cy,"app");const ly="modulepreload",uy=function(t){return"/sirbofi/"+t},Ha={},Va=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=uy(o),o in Ha)return;Ha[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const p=i[f];if(p.href===o&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":ly,a||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),a)return new Promise((f,p)=>{l.addEventListener("load",f),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},fy=t=>(as("data-v-aee78b52"),t=t(),cs(),t),dy={class:"top-bar-container"},hy=fy(()=>I("span",{class:"current-user"},null,-1)),py={__name:"top-bar",setup(t){Cs();const e=()=>{const n=cu();Gg(n)};return(n,r)=>(oe(),de("div",dy,[hy,I("span",{class:"buttons-wrapper"},[I("button",{onClick:e},"Log out")])]))}},my=or(py,[["__scopeId","data-v-aee78b52"]]),gy=t=>(as("data-v-3317e126"),t=t(),cs(),t),_y={class:"loading-spinner"},yy=gy(()=>I("div",{class:"spinner"},null,-1)),vy=[yy],by={__name:"loadingSpinner",props:{size:{type:Number,default:16},thickness:{type:Number,default:3}},setup(t){Dd(s=>({"5874b82c":mt(n)+"px","3393f71b":mt(r)+"px"}));const e=t,n=e.size,r=e.thickness;return(s,i)=>(oe(),de("div",_y,vy))}},Jr=or(by,[["__scopeId","data-v-3317e126"]]);function lu(t,e){return function(){return t.apply(e,arguments)}}const{toString:Ey}=Object.prototype,{getPrototypeOf:oo}=Object,ws=(t=>e=>{const n=Ey.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ut=t=>(t=t.toLowerCase(),e=>ws(e)===t),Is=t=>e=>typeof e===t,{isArray:Pn}=Array,rr=Is("undefined");function wy(t){return t!==null&&!rr(t)&&t.constructor!==null&&!rr(t.constructor)&&Ve(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const uu=ut("ArrayBuffer");function Iy(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&uu(t.buffer),e}const Sy=Is("string"),Ve=Is("function"),fu=Is("number"),Ss=t=>t!==null&&typeof t=="object",Ty=t=>t===!0||t===!1,xr=t=>{if(ws(t)!=="object")return!1;const e=oo(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Ry=ut("Date"),Cy=ut("File"),Ay=ut("Blob"),Py=ut("FileList"),Oy=t=>Ss(t)&&Ve(t.pipe),ky=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Ve(t.append)&&((e=ws(t))==="formdata"||e==="object"&&Ve(t.toString)&&t.toString()==="[object FormData]"))},xy=ut("URLSearchParams"),Ny=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function hr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Pn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function du(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const hu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,pu=t=>!rr(t)&&t!==hu;function wi(){const{caseless:t}=pu(this)&&this||{},e={},n=(r,s)=>{const i=t&&du(e,s)||s;xr(e[i])&&xr(r)?e[i]=wi(e[i],r):xr(r)?e[i]=wi({},r):Pn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&hr(arguments[r],n);return e}const Ly=(t,e,n,{allOwnKeys:r}={})=>(hr(e,(s,i)=>{n&&Ve(s)?t[i]=lu(s,n):t[i]=s},{allOwnKeys:r}),t),Dy=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),My=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Uy=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&oo(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Fy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},By=t=>{if(!t)return null;if(Pn(t))return t;let e=t.length;if(!fu(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},$y=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&oo(Uint8Array)),jy=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},Hy=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Vy=ut("HTMLFormElement"),Wy=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Wa=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),zy=ut("RegExp"),mu=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};hr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},qy=t=>{mu(t,(e,n)=>{if(Ve(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Ve(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ky=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Pn(t)?r(t):r(String(t).split(e)),n},Gy=()=>{},Jy=(t,e)=>(t=+t,Number.isFinite(t)?t:e),qs="abcdefghijklmnopqrstuvwxyz",za="0123456789",gu={DIGIT:za,ALPHA:qs,ALPHA_DIGIT:qs+qs.toUpperCase()+za},Yy=(t=16,e=gu.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Xy(t){return!!(t&&Ve(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Qy=t=>{const e=new Array(10),n=(r,s)=>{if(Ss(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Pn(r)?[]:{};return hr(r,(o,a)=>{const c=n(o,s+1);!rr(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Zy=ut("AsyncFunction"),ev=t=>t&&(Ss(t)||Ve(t))&&Ve(t.then)&&Ve(t.catch),E={isArray:Pn,isArrayBuffer:uu,isBuffer:wy,isFormData:ky,isArrayBufferView:Iy,isString:Sy,isNumber:fu,isBoolean:Ty,isObject:Ss,isPlainObject:xr,isUndefined:rr,isDate:Ry,isFile:Cy,isBlob:Ay,isRegExp:zy,isFunction:Ve,isStream:Oy,isURLSearchParams:xy,isTypedArray:$y,isFileList:Py,forEach:hr,merge:wi,extend:Ly,trim:Ny,stripBOM:Dy,inherits:My,toFlatObject:Uy,kindOf:ws,kindOfTest:ut,endsWith:Fy,toArray:By,forEachEntry:jy,matchAll:Hy,isHTMLForm:Vy,hasOwnProperty:Wa,hasOwnProp:Wa,reduceDescriptors:mu,freezeMethods:qy,toObjectSet:Ky,toCamelCase:Wy,noop:Gy,toFiniteNumber:Jy,findKey:du,global:hu,isContextDefined:pu,ALPHABET:gu,generateString:Yy,isSpecCompliantForm:Xy,toJSONObject:Qy,isAsyncFn:Zy,isThenable:ev};function ee(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}E.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const _u=ee.prototype,yu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{yu[t]={value:t}});Object.defineProperties(ee,yu);Object.defineProperty(_u,"isAxiosError",{value:!0});ee.from=(t,e,n,r,s,i)=>{const o=Object.create(_u);return E.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),ee.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const tv=null;function Ii(t){return E.isPlainObject(t)||E.isArray(t)}function vu(t){return E.endsWith(t,"[]")?t.slice(0,-2):t}function qa(t,e,n){return t?t.concat(e).map(function(s,i){return s=vu(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function nv(t){return E.isArray(t)&&!t.some(Ii)}const rv=E.toFlatObject(E,{},null,function(e){return/^is[A-Z]/.test(e)});function Ts(t,e,n){if(!E.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,N){return!E.isUndefined(N[b])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(e);if(!E.isFunction(s))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(E.isDate(y))return y.toISOString();if(!c&&E.isBlob(y))throw new ee("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(y)||E.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function l(y,b,N){let P=y;if(y&&!N&&typeof y=="object"){if(E.endsWith(b,"{}"))b=r?b:b.slice(0,-2),y=JSON.stringify(y);else if(E.isArray(y)&&nv(y)||(E.isFileList(y)||E.endsWith(b,"[]"))&&(P=E.toArray(y)))return b=vu(b),P.forEach(function(U,K){!(E.isUndefined(U)||U===null)&&e.append(o===!0?qa([b],K,i):o===null?b:b+"[]",u(U))}),!1}return Ii(y)?!0:(e.append(qa(N,b,i),u(y)),!1)}const f=[],p=Object.assign(rv,{defaultVisitor:l,convertValue:u,isVisitable:Ii});function _(y,b){if(!E.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(y),E.forEach(y,function(P,M){(!(E.isUndefined(P)||P===null)&&s.call(e,P,E.isString(M)?M.trim():M,b,p))===!0&&_(P,b?b.concat(M):[M])}),f.pop()}}if(!E.isObject(t))throw new TypeError("data must be an object");return _(t),e}function Ka(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function ao(t,e){this._pairs=[],t&&Ts(t,this,e)}const bu=ao.prototype;bu.append=function(e,n){this._pairs.push([e,n])};bu.toString=function(e){const n=e?function(r){return e.call(this,r,Ka)}:Ka;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function sv(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Eu(t,e,n){if(!e)return t;const r=n&&n.encode||sv,s=n&&n.serialize;let i;if(s?i=s(e,n):i=E.isURLSearchParams(e)?e.toString():new ao(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Ga{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){E.forEach(this.handlers,function(r){r!==null&&e(r)})}}const wu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},iv=typeof URLSearchParams<"u"?URLSearchParams:ao,ov=typeof FormData<"u"?FormData:null,av=typeof Blob<"u"?Blob:null,cv={isBrowser:!0,classes:{URLSearchParams:iv,FormData:ov,Blob:av},protocols:["http","https","file","blob","url","data"]},Iu=typeof window<"u"&&typeof document<"u",lv=(t=>Iu&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),uv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",fv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Iu,hasStandardBrowserEnv:lv,hasStandardBrowserWebWorkerEnv:uv},Symbol.toStringTag,{value:"Module"})),ot={...fv,...cv};function dv(t,e){return Ts(t,new ot.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return ot.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function hv(t){return E.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function pv(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Su(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&E.isArray(s)?s.length:o,c?(E.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!E.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&E.isArray(s[o])&&(s[o]=pv(s[o])),!a)}if(E.isFormData(t)&&E.isFunction(t.entries)){const n={};return E.forEachEntry(t,(r,s)=>{e(hv(r),s,n,0)}),n}return null}function mv(t,e,n){if(E.isString(t))try{return(e||JSON.parse)(t),E.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const co={transitional:wu,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=E.isObject(e);if(i&&E.isHTMLForm(e)&&(e=new FormData(e)),E.isFormData(e))return s?JSON.stringify(Su(e)):e;if(E.isArrayBuffer(e)||E.isBuffer(e)||E.isStream(e)||E.isFile(e)||E.isBlob(e))return e;if(E.isArrayBufferView(e))return e.buffer;if(E.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return dv(e,this.formSerializer).toString();if((a=E.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ts(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),mv(e)):e}],transformResponse:[function(e){const n=this.transitional||co.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&E.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ee.from(a,ee.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ot.classes.FormData,Blob:ot.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],t=>{co.headers[t]={}});const lo=co,gv=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_v=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&gv[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ja=Symbol("internals");function Nn(t){return t&&String(t).trim().toLowerCase()}function Nr(t){return t===!1||t==null?t:E.isArray(t)?t.map(Nr):String(t)}function yv(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const vv=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ks(t,e,n,r,s){if(E.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!E.isString(e)){if(E.isString(r))return e.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(e)}}function bv(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Ev(t,e){const n=E.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class Rs{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,u){const l=Nn(c);if(!l)throw new Error("header name must be a non-empty string");const f=E.findKey(s,l);(!f||s[f]===void 0||u===!0||u===void 0&&s[f]!==!1)&&(s[f||c]=Nr(a))}const o=(a,c)=>E.forEach(a,(u,l)=>i(u,l,c));return E.isPlainObject(e)||e instanceof this.constructor?o(e,n):E.isString(e)&&(e=e.trim())&&!vv(e)?o(_v(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Nn(e),e){const r=E.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return yv(s);if(E.isFunction(n))return n.call(this,s,r);if(E.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Nn(e),e){const r=E.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ks(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Nn(o),o){const a=E.findKey(r,o);a&&(!n||Ks(r,r[a],a,n))&&(delete r[a],s=!0)}}return E.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Ks(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return E.forEach(this,(s,i)=>{const o=E.findKey(r,i);if(o){n[o]=Nr(s),delete n[i];return}const a=e?bv(i):String(i).trim();a!==i&&delete n[i],n[a]=Nr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return E.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ja]=this[Ja]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Nn(o);r[a]||(Ev(s,o),r[a]=!0)}return E.isArray(e)?e.forEach(i):i(e),this}}Rs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(Rs.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});E.freezeMethods(Rs);const gt=Rs;function Gs(t,e){const n=this||lo,r=e||n,s=gt.from(r.headers);let i=r.data;return E.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Tu(t){return!!(t&&t.__CANCEL__)}function pr(t,e,n){ee.call(this,t??"canceled",ee.ERR_CANCELED,e,n),this.name="CanceledError"}E.inherits(pr,ee,{__CANCEL__:!0});function wv(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Iv=ot.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];E.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),E.isString(r)&&o.push("path="+r),E.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Sv(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Tv(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Ru(t,e){return t&&!Sv(e)?Tv(t,e):e}const Rv=ot.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=E.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Cv(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Av(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),l=r[i];o||(o=u),n[s]=c,r[s]=u;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const _=l&&u-l;return _?Math.round(p*1e3/_):void 0}}function Ya(t,e){let n=0;const r=Av(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),u=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-i)/c:void 0,event:s};l[e?"download":"upload"]=!0,t(l)}}const Pv=typeof XMLHttpRequest<"u",Ov=Pv&&function(t){return new Promise(function(n,r){let s=t.data;const i=gt.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function u(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let l;if(E.isFormData(s)){if(ot.hasStandardBrowserEnv||ot.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((l=i.getContentType())!==!1){const[b,...N]=l?l.split(";").map(P=>P.trim()).filter(Boolean):[];i.setContentType([b||"multipart/form-data",...N].join("; "))}}let f=new XMLHttpRequest;if(t.auth){const b=t.auth.username||"",N=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(b+":"+N))}const p=Ru(t.baseURL,t.url);f.open(t.method.toUpperCase(),Eu(p,t.params,t.paramsSerializer),!0),f.timeout=t.timeout;function _(){if(!f)return;const b=gt.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),P={data:!o||o==="text"||o==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:b,config:t,request:f};wv(function(U){n(U),u()},function(U){r(U),u()},P),f=null}if("onloadend"in f?f.onloadend=_:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(_)},f.onabort=function(){f&&(r(new ee("Request aborted",ee.ECONNABORTED,t,f)),f=null)},f.onerror=function(){r(new ee("Network Error",ee.ERR_NETWORK,t,f)),f=null},f.ontimeout=function(){let N=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const P=t.transitional||wu;t.timeoutErrorMessage&&(N=t.timeoutErrorMessage),r(new ee(N,P.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,t,f)),f=null},ot.hasStandardBrowserEnv&&(a&&E.isFunction(a)&&(a=a(t)),a||a!==!1&&Rv(p))){const b=t.xsrfHeaderName&&t.xsrfCookieName&&Iv.read(t.xsrfCookieName);b&&i.set(t.xsrfHeaderName,b)}s===void 0&&i.setContentType(null),"setRequestHeader"in f&&E.forEach(i.toJSON(),function(N,P){f.setRequestHeader(P,N)}),E.isUndefined(t.withCredentials)||(f.withCredentials=!!t.withCredentials),o&&o!=="json"&&(f.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&f.addEventListener("progress",Ya(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",Ya(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=b=>{f&&(r(!b||b.type?new pr(null,t,f):b),f.abort(),f=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const y=Cv(p);if(y&&ot.protocols.indexOf(y)===-1){r(new ee("Unsupported protocol "+y+":",ee.ERR_BAD_REQUEST,t));return}f.send(s||null)})},Si={http:tv,xhr:Ov};E.forEach(Si,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Xa=t=>`- ${t}`,kv=t=>E.isFunction(t)||t===null||t===!1,Cu={getAdapter:t=>{t=E.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!kv(n)&&(r=Si[(o=String(n)).toLowerCase()],r===void 0))throw new ee(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Xa).join(`
`):" "+Xa(i[0]):"as no adapter specified";throw new ee("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Si};function Js(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new pr(null,t)}function Qa(t){return Js(t),t.headers=gt.from(t.headers),t.data=Gs.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Cu.getAdapter(t.adapter||lo.adapter)(t).then(function(r){return Js(t),r.data=Gs.call(t,t.transformResponse,r),r.headers=gt.from(r.headers),r},function(r){return Tu(r)||(Js(t),r&&r.response&&(r.response.data=Gs.call(t,t.transformResponse,r.response),r.response.headers=gt.from(r.response.headers))),Promise.reject(r)})}const Za=t=>t instanceof gt?t.toJSON():t;function Sn(t,e){e=e||{};const n={};function r(u,l,f){return E.isPlainObject(u)&&E.isPlainObject(l)?E.merge.call({caseless:f},u,l):E.isPlainObject(l)?E.merge({},l):E.isArray(l)?l.slice():l}function s(u,l,f){if(E.isUndefined(l)){if(!E.isUndefined(u))return r(void 0,u,f)}else return r(u,l,f)}function i(u,l){if(!E.isUndefined(l))return r(void 0,l)}function o(u,l){if(E.isUndefined(l)){if(!E.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function a(u,l,f){if(f in e)return r(u,l);if(f in t)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,l)=>s(Za(u),Za(l),!0)};return E.forEach(Object.keys(Object.assign({},t,e)),function(l){const f=c[l]||s,p=f(t[l],e[l],l);E.isUndefined(p)&&f!==a||(n[l]=p)}),n}const Au="1.6.7",uo={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{uo[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const ec={};uo.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Au+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new ee(s(o," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!ec[o]&&(ec[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function xv(t,e,n){if(typeof t!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new ee("option "+i+" must be "+c,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+i,ee.ERR_BAD_OPTION)}}const Ti={assertOptions:xv,validators:uo},It=Ti.validators;class Yr{constructor(e){this.defaults=e,this.interceptors={request:new Ga,response:new Ga}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Sn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Ti.assertOptions(r,{silentJSONParsing:It.transitional(It.boolean),forcedJSONParsing:It.transitional(It.boolean),clarifyTimeoutError:It.transitional(It.boolean)},!1),s!=null&&(E.isFunction(s)?n.paramsSerializer={serialize:s}:Ti.assertOptions(s,{encode:It.function,serialize:It.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&E.merge(i.common,i[n.method]);i&&E.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=gt.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const u=[];this.interceptors.response.forEach(function(b){u.push(b.fulfilled,b.rejected)});let l,f=0,p;if(!c){const y=[Qa.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,u),p=y.length,l=Promise.resolve(n);f<p;)l=l.then(y[f++],y[f++]);return l}p=a.length;let _=n;for(f=0;f<p;){const y=a[f++],b=a[f++];try{_=y(_)}catch(N){b.call(this,N);break}}try{l=Qa.call(this,_)}catch(y){return Promise.reject(y)}for(f=0,p=u.length;f<p;)l=l.then(u[f++],u[f++]);return l}getUri(e){e=Sn(this.defaults,e);const n=Ru(e.baseURL,e.url);return Eu(n,e.params,e.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(e){Yr.prototype[e]=function(n,r){return this.request(Sn(r||{},{method:e,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(Sn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Yr.prototype[e]=n(),Yr.prototype[e+"Form"]=n(!0)});const Lr=Yr;class fo{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new pr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new fo(function(s){e=s}),cancel:e}}}const Nv=fo;function Lv(t){return function(n){return t.apply(null,n)}}function Dv(t){return E.isObject(t)&&t.isAxiosError===!0}const Ri={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ri).forEach(([t,e])=>{Ri[e]=t});const Mv=Ri;function Pu(t){const e=new Lr(t),n=lu(Lr.prototype.request,e);return E.extend(n,Lr.prototype,e,{allOwnKeys:!0}),E.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Pu(Sn(t,s))},n}const _e=Pu(lo);_e.Axios=Lr;_e.CanceledError=pr;_e.CancelToken=Nv;_e.isCancel=Tu;_e.VERSION=Au;_e.toFormData=Ts;_e.AxiosError=ee;_e.Cancel=_e.CanceledError;_e.all=function(e){return Promise.all(e)};_e.spread=Lv;_e.isAxiosError=Dv;_e.mergeConfig=Sn;_e.AxiosHeaders=gt;_e.formToJSON=t=>Su(E.isHTMLForm(t)?new FormData(t):t);_e.getAdapter=Cu.getAdapter;_e.HttpStatusCode=Mv;_e.default=_e;const De=t=>(as("data-v-273ab3ba"),t=t(),cs(),t),Uv={class:"service-container"},Fv={class:"filters-container"},Bv={class:"filters-container-top-bar"},$v={class:"flex column w-full"},jv={class:"text"},Hv={class:"flex row space-between"},Vv=De(()=>I("span",{class:"text underline"},ge("< basic settings"),-1)),Wv=[Vv],zv=De(()=>I("span",{class:"text underline"},"Advanced settings >",-1)),qv=[zv],Kv=De(()=>I("span",null,"Clear results",-1)),Gv=[Kv],Jv={key:0,class:"filtering-pad-content-wrapper basic"},Yv=De(()=>I("span",{class:"text"}," starting from BTC, ranked by market cap, start analyzing from rank: ",-1)),Xv=De(()=>I("span",{class:"text"},"number of cryptos to check",-1)),Qv=De(()=>I("span",{class:"text"},"number of market pairs to check",-1)),Zv={class:"hr-buttons-container"},eb=["onClick"],tb={class:"text"},nb=De(()=>I("span",{class:"text"},"market pairs check offset",-1)),rb=De(()=>I("span",{class:"text"},"minimum profit margin %",-1)),sb=De(()=>I("span",{class:"text"},"maximum profit margin %",-1)),ib=De(()=>I("span",{class:"text"},"minimum trading volume (USD)",-1)),ob={class:"bottom-buttons"},ab=De(()=>I("span",{class:"text underline"},"stop",-1)),cb=[ab],lb=De(()=>I("span",{class:"text"},"Trigger",-1)),ub={key:0,class:"text-tiny text-red"},fb={class:"wrap-row"},db={class:"statistics"},hb={class:"text-tiny"},pb={class:"text-green"},mb={class:"text-tiny"},gb={class:"text text-green"},_b={class:"text-tiny"},yb={class:"text text-green"},vb={key:1,class:"filtering-pad-content-wrapper advanced"},bb={class:"inputs-wrapper"},Eb={class:"advanced-filter-container"},wb={class:"text"},Ib={class:"hr-buttons-container"},Sb=["onClick"],Tb={class:"text"},Rb={class:"advanced-filter-container"},Cb={class:"text"},Ab={class:"hr-buttons-container"},Pb=["onClick"],Ob={class:"text"},kb={class:"advanced-filter-container"},xb={class:"text"},Nb={class:"hr-buttons-container"},Lb=De(()=>I("span",{class:"text"},"SELECT ALL",-1)),Db=[Lb],Mb=De(()=>I("span",{class:"text"},"DESELECT ALL",-1)),Ub=[Mb],Fb=["onClick"],Bb={class:"text"},$b={class:"flex column main-board"},jb={class:"all-ops"},Hb={class:"ops-per-crypto"},Vb={class:"crypto-section-title"},Wb=gd('<div class="op-table-headers" data-v-273ab3ba><div class="text exchange-link-header" data-v-273ab3ba> Buy from </div><div class="text price-header" data-v-273ab3ba> price </div><div class="text volume-header" data-v-273ab3ba> 24h volume </div><div class="text profit-percentage-header" data-v-273ab3ba> gap </div><div class="text volume-header" data-v-273ab3ba> 24h volume </div><div class="text price-header" data-v-273ab3ba> price </div><div class="text exchange-link-header" data-v-273ab3ba> Sell to </div></div>',1),zb={class:"op"},qb=["onClick"],Kb={class:"text indicator price"},Gb={class:"text indicator volume"},Jb={class:"text text-green indicator profit-percentage"},Yb={class:"text indicator volume"},Xb={class:"text indicator price"},Qb=["onClick"],Zb={key:0,class:"no-results-placeholder"},eE=De(()=>I("h1",null,"No results",-1)),tE=De(()=>I("ul",null,[I("li",null,"Apply desired filters on left"),I("li",null,'Click "Trigger" to start'),I("li",null,"Wait for results to load")],-1)),nE=[eE,tE],rE={key:1},tc="https://data.sirbofi.com",nc="Couldn't access API.",sE={__name:"HomeView",setup(t){function e(Q){window.open(Q,"_blank")}Vi(()=>{window.addEventListener("keydown",Q=>{Q.key==="Enter"&&te()})});const n={basic:"basic",advanced:"advanced"},r={spot:"spot",perpetual:"perpetual"},s=ae(!1),i=ae(n.basic);function o(Q){i.value=Q}const a=ae([]),c=["binance","binance-us","binance-tr","coinbase","coinbase-exchange","btcturk-pro","phemex","bitvavo","bitkub","coinex","indodax","coinmetro","kraken","kucoin","bitstamp","okx","gate-io","bitget","crypto-com-exchange","gemini","lbank","mexc","bybit","bitrue","probit-exchange","Toobit","xt","pionex","biconomy","bingx","latoken","whitebit","weex","coinstore","indodax","btse","dydx","pancakeswap-v2","uniswap-v3","uniswap-v2","kine-protocol-polygon","apex-protocol","dodo"],u=[r.spot,r.perpetual],l={USDT:825,BTC:1,USD:2781,TUSD:2563,BUSD:4687,EUR:2790,GBP:2791},f=ae(0),p=ae(null);function _(){Ae.value={},p.value=null,f.value=0,fe.value=0,ye.value=0,Ce.value=0}const y=ae(1),b=ae(10),N=[20,50,100,1e3],P=ae(1e3),M=ae(1),U=ae(2),K=ae(12),J=ae(5e3),$=ae(null),se=ae([]),W=ae([]),F=ae(!1),fe=ae(0),ye=ae(0),Ce=ae(0),Ue=ae(200),Ze={listingsEndpoint:()=>{const Q=tc+"/api/listings",L={start:y.value||1,limit:b.value||20};return Q+"?"+new URLSearchParams(L).toString()},marketPairsEndpoint:(Q,L=null)=>{const m=tc+"/api/market-pairs",T={slug:Q,start:M.value||1,limit:P.value||20};$.value&&(T.category=$.value),L&&(T.quoteCurrencyId=l[L]);const A=m+"?"+new URLSearchParams(T).toString();return console.log(A),A}};function ve(Q){return Intl.NumberFormat().format(Q)}function X(Q,L){L.includes(Q)?L.splice(L.indexOf(Q),1):L.push(Q)}function ie(){F.value=!1,p.value=null}async function te(){p.value=null,F.value=!0,f.value=0;const Q=Ze.listingsEndpoint();await _e.get(Q).then(L=>{if(L.status===429)return p.value="too many requests",F.value=!1,!1;a.value=L.data.data.cryptoCurrencyList,Oe()}).catch(L=>{console.log(L),p.value=nc,F.value=!1})}async function We(Q){const L=W.value.length>0?W.value:[null];let m=[];for(const T of L){const A=Ze.marketPairsEndpoint(Q,T);await _e.get(A).then(k=>{var G,Z,d;if(k.data.status===429)return p.value="too many requests",F.value=!1,!1;if(k.data.status.error_code==="500")return p.value="server gave err 500. could be overloaded",F.value=!1,!1;((d=(Z=(G=k.data)==null?void 0:G.data)==null?void 0:Z.marketPairs)==null?void 0:d.length)>0&&m.push(...k.data.data.marketPairs)}).catch(k=>{console.log(k),p.value=nc,F.value=!1})}return[...new Set(m)]}function et(Q,L){return ye.value++,((L.price-Q.price)/Q.price*100).toFixed(2)}const Ae=ae({});async function Oe(){let Q={};for(const L of a.value){if(F.value===!1)break;await We(L.slug).then(m=>{var A;if(!m)return;let T=[];for(const k of m)k.volumeUsd>J.value&&(!ze.value||se.value.includes(k.exchangeSlug))&&k.isVerified&&!k.poorAuditStatus&&T.push(k);for(let k=0;k<T.length;k++){for(let G=k+1;G<T.length;G++){let Z=T[k],d=T[G],h=Z.price<d.price?Z:d,g=Z.price>d.price?Z:d,w=Number(et(h,g));if(w>U.value&&w<K.value&&(Q[L.slug]||(Q[L.slug]=[]),Q[L.slug].push({buy_from_exchange:h.exchangeSlug,buy_from_price:h.price,buy_from_volume:ve(h.volumeUsd.toFixed(0)),buy_link:h.marketUrl,crypto:L.slug,potential_profit:w,sell_to_exchange:g.exchangeSlug,sell_to_price:g.price,sell_to_volume:ve(g.volumeUsd.toFixed(0)),sell_link:g.marketUrl}),f.value++,f.value>=Ue.value&&(F.value=!1,p.value="Illogical amount of results! Stopped search to protect performance. You need more strict filters.")),F.value===!1)break}if(fe.value++,(A=Q[L.slug])==null||A.sort((G,Z)=>Z.potential_profit-G.potential_profit),F.value===!1)break}}),Ae.value={...Q},Ce.value++}F.value=!1}const ze=Te(()=>se.value.length>0),tt=Te(()=>!!$.value);return(Q,L)=>(oe(),de("main",null,[I("div",Uv,[I("div",Fv,[I("div",{class:be({"pad filtering-pad":!0,hidden:s.value})},[I("div",Bv,[I("div",$v,[I("button",{class:be(["toggle-button w-full",{selected:!s.value}]),onClick:L[0]||(L[0]=m=>s.value=!s.value)},[I("h2",jv,ge(s.value?" << Undocked":" >> Docked"),1)],2),I("div",Hv,[i.value===n.advanced?(oe(),de("button",{key:0,class:"filter-pad-top-nav-button bones",onClick:L[1]||(L[1]=m=>o(n.basic))},Wv)):(oe(),de("button",{key:1,class:"filter-pad-top-nav-button bones",onClick:L[2]||(L[2]=m=>o(n.advanced))},qv)),I("button",{class:be(["filter-pad-top-nav-button bones",{disabled:!Object.keys(Ae.value).length}]),onClick:_},Gv,2)])])]),i.value===n.basic?(oe(),de("div",Jv,[I("div",{class:be({"inputs-wrapper":!0,disabled:F.value})},[Yv,Rt(I("input",{type:"number",placeholder:"rank","onUpdate:modelValue":L[3]||(L[3]=m=>y.value=m)},null,512),[[Ot,y.value]]),Xv,Rt(I("input",{type:"number",placeholder:"Number","onUpdate:modelValue":L[4]||(L[4]=m=>b.value=m)},null,512),[[Ot,b.value]]),Qv,I("div",Zv,[(oe(),de(ke,null,on(N,m=>I("button",{class:be({"toggle-button":!0,selected:P.value===m}),onClick:T=>P.value=m},[I("span",tb,ge(m),1)],10,eb)),64))]),nb,Rt(I("input",{type:"number",placeholder:"offset","onUpdate:modelValue":L[5]||(L[5]=m=>M.value=m)},null,512),[[Ot,M.value]]),rb,Rt(I("input",{type:"number",placeholder:"profit %","onUpdate:modelValue":L[6]||(L[6]=m=>U.value=m)},null,512),[[Ot,U.value]]),sb,Rt(I("input",{type:"number",placeholder:"profit %","onUpdate:modelValue":L[7]||(L[7]=m=>K.value=m)},null,512),[[Ot,K.value]]),ib,Rt(I("input",{type:"number",placeholder:"minimum trading volume","onUpdate:modelValue":L[8]||(L[8]=m=>J.value=m)},null,512),[[Ot,J.value]])],2),I("span",ob,[I("button",{class:be(["bones",{disabled:!F.value}]),onClick:L[9]||(L[9]=m=>ie())},cb,2),I("button",{onClick:te,class:be({disabled:F.value})},[F.value?(oe(),$r(Jr,{key:0})):Ke("",!0),lb],2)]),p.value?(oe(),de("span",ub,ge(p.value),1)):Ke("",!0),I("div",fb,[I("div",db,[I("span",hb,[Ct(" number of price comparisons: "),I("span",pb,ge(ve(ye.value)),1)]),I("span",mb,[Ct(" number of cryptos checked: "),I("span",gb,ge(ve(Ce.value)),1)]),I("span",_b,[Ct(" number of results: "),I("span",yb,ge(ve(f.value)),1)])])])])):Ke("",!0),i.value===n.advanced?(oe(),de("div",vb,[I("div",bb,[I("div",Eb,[I("span",wb,[Ct(" Filter trading categories: "),I("span",{class:be({disabled:!tt.value,"text-green":tt.value})},ge(tt.value?"enabled":"disabled"),3)]),I("div",Ib,[(oe(),de(ke,null,on(u,m=>I("button",{onClick:T=>$.value=$.value===m?null:m,class:be({"toggle-button":!0,selected:$.value===m})},[I("span",Tb,ge(m),1)],10,Sb)),64))])]),I("div",Rb,[I("span",Cb,[Ct(" Filter by trading pair quote symbol: "),I("span",{class:be({disabled:W.value.length===0,"text-green":W.value.length>0})},ge(W.value.length>0?"enabled":"disabled (compares all possible trading pairs)"),3)]),I("div",Ab,[(oe(!0),de(ke,null,on(Object.keys(l),m=>(oe(),de("button",{onClick:T=>X(m,W.value),class:be({"toggle-button":!0,selected:W.value.includes(m)})},[I("span",Ob,ge(m),1)],10,Pb))),256))])]),I("div",kb,[I("span",xb,[Ct(" Filter trustworthy exchanges: "),I("span",{class:be({disabled:!ze.value,"text-green":ze.value})},ge(ze.value?"enabled":"disabled (allows over 600 exchanges)"),3)]),I("div",Nb,[se.value.length!==c.length?(oe(),de("button",{key:0,onClick:L[10]||(L[10]=m=>se.value=[...c]),class:be({"toggle-button bones":!0})},Db)):(oe(),de("button",{key:1,onClick:L[11]||(L[11]=m=>se.value=[]),class:be({"toggle-button bones":!0})},Ub)),(oe(),de(ke,null,on(c,m=>I("button",{onClick:T=>X(m,se.value),class:be({"toggle-button":!0,selected:se.value.includes(m)})},[I("span",Bb,ge(m),1)],10,Fb)),64))])])])])):Ke("",!0)],2)]),I("div",$b,[Re(my),I("div",jb,[(oe(!0),de(ke,null,on(Object.keys(Ae.value),m=>(oe(),de("div",Hb,[I("h2",Vb,ge(m),1),Wb,(oe(!0),de(ke,null,on(Ae.value[m],T=>(oe(),de("div",zb,[I("button",{class:"text exchange-link",onClick:A=>e(T.buy_link)},ge(T.buy_from_exchange),9,qb),I("div",Kb,ge(ve(T.buy_from_price))+" $ ",1),I("div",Gb,ge(T.buy_from_volume)+" $ ",1),I("div",Jb," +"+ge(T.potential_profit)+" % ",1),I("div",Yb,ge(T.sell_to_volume)+" $ ",1),I("div",Xb,ge(ve(T.sell_to_price))+" $ ",1),I("button",{class:"text exchange-link",onClick:A=>e(T.sell_link)},ge(T.sell_to_exchange),9,Qb)]))),256))]))),256)),Object.keys(Ae.value).length===0&&!F.value?(oe(),de("div",Zb,nE)):Ke("",!0),F.value?(oe(),de("div",rE,[Re(Jr,{size:64})])):Ke("",!0)])])])]))}},iE=or(sE,[["__scopeId","data-v-273ab3ba"]]),Ou=t=>(as("data-v-2c4053e0"),t=t(),cs(),t),oE={class:"main-container"},aE={class:"top-buttons-wrapper"},cE=Ou(()=>I("button",null," Subscribe ",-1)),lE={class:"login-pad-container"},uE={class:"pad login-pad"},fE={class:"login-pad-content-wrapper"},dE=Ou(()=>I("svg",{class:"logo",xmlns:"http://www.w3.org/2000/svg",width:"162",height:"256",viewBox:"0 0 162 256",fill:"none"},[I("path",{d:"M15 110.76L15 240.087L77.4026 239.923L77.4026 110.597L15 110.76Z"}),I("path",{d:"M85.4026 -0.0802917L85.4026 255.933L147.805 256.097L147.805 0.0834427L85.4026 -0.0802917Z"})],-1)),hE={class:"row"},pE={key:0,class:"input-fields"},mE={key:1,class:"buttons-wrapper"},gE={key:0,class:"error"},_E={__name:"Login",setup(t){const e=dp(),n=Cs(),r=Te(()=>n.confirming_user),s=ae(!1),i=ae(!1),o=ae({email:"",password:""});function a(){i.value=!1,s.value=!0,n.signIn(o.value.email,o.value.password).then(c=>{var u;c&&((u=c.data)!=null&&u.uid)?(n.setUserData(c.data),n.setUserLoggedIn(!0),e.push("/")):i.value=!0}).catch(c=>{console.log(c),i.value=!0}).finally(()=>{s.value=!1})}return window.addEventListener("keypress",c=>{c.key==="Enter"&&a()}),(c,u)=>{const l=Af("router-link");return oe(),de("div",oE,[I("div",aE,[Re(l,{to:"/subscription"},{default:Mc(()=>[cE]),_:1})]),I("div",lE,[I("div",uE,[I("div",fE,[dE,I("div",hE,[r.value?(oe(),$r(Jr,{key:0})):Ke("",!0)]),r.value?Ke("",!0):(oe(),de("div",pE,[Rt(I("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=f=>o.value.email=f),placeholder:"Email"},null,512),[[Ot,o.value.email]]),Rt(I("input",{type:"password","onUpdate:modelValue":u[1]||(u[1]=f=>o.value.password=f),placeholder:"Key"},null,512),[[Ot,o.value.password]])])),r.value?Ke("",!0):(oe(),de("div",mE,[i.value?(oe(),de("div",gE," Authentication failed ")):Ke("",!0),I("button",{onClick:a,class:be({disabled:s.value})},[s.value?(oe(),$r(Jr,{key:0})):Ke("",!0),Ct(" Authenticate ")],2)]))])])])])}}},yE=or(_E,[["__scopeId","data-v-2c4053e0"]]),Xr=up({history:$h("/sirbofi/"),routes:[{path:"/",name:"home",component:iE,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:yE},{path:"/subscription",name:"subscription",component:()=>Va(()=>import("./Subscription-Bf31pckp.js"),__vite__mapDeps([0,1]))},{path:"/payment",name:"payment",component:()=>Va(()=>import("./Payment-e0kjiw8p.js"),__vite__mapDeps([2,3]))}]});Xr.beforeEach(async(t,e,n)=>{const r=Cs();t.matched.some(s=>s.meta.requiresAuth)?r.getUser.is_logged_in?n():n({name:"login"}):n()});const Cs=lh("AuthenticatorStore",()=>{const t={is_logged_in:!1,data:null};let e=!1,n=null;function r(_){t.data=_}function s(_){t.is_logged_in=_}const i=ae(null),o=Te(()=>t),a=ae(!0),c=async()=>{Pl({apiKey:"AIzaSyD81g-c9f8yiDbC_atW-Pvp_MP7t_aTjKQ",authDomain:"aoft-de2ab.firebaseapp.com",projectId:"aoft-de2ab",storageBucket:"aoft-de2ab.appspot.com",messagingSenderId:"630650035711",appId:"1:630650035711:web:210507afd411fc5cb91bca",measurementId:"G-W5TJ6PV4GV"}),n=cu(),Kg(n,y=>{a.value=!1,y?(r(y),s(!0),Xr.push("/")):(s(!1),Xr.push("/login"))}),e=!0},u=Te(()=>e),l=Te(()=>n);return{user:t,initAuth:c,error:i,getAuthInitStatus:u,getAuthFromStore:l,setUserData:r,confirming_user:a,setUserLoggedIn:s,getUser:o,signIn:async(_,y)=>(await Wg(n,_,y).then(b=>{r(b.user),s(!0)}).catch(b=>{console.log(b.message),b.value=b.message}),t),signOut:async _=>{await _.signOut().then(()=>{s(!1)}).catch(y=>{console.log(y.message),y.value=y.message})}}}),vE=rh(),ho=Zd(mp);ho.use(vE);const bE=Cs();bE.initAuth();ho.use(Xr);ho.mount("#app");export{ke as F,or as _,I as a,Re as b,de as c,cs as d,Ct as e,ae as f,on as g,Ke as h,be as n,oe as o,as as p,Af as r,ge as t,Mc as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["Subscription-Bf31pckp.js","Subscription-CNFk2o3n.css","Payment-e0kjiw8p.js","Payment-DSi6vRDX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
