(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oi(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const pe={},hn=[],We=()=>{},Pu=()=>!1,sr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Pi=t=>t.startsWith("onUpdate:"),Re=Object.assign,ki=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ku=Object.prototype.hasOwnProperty,se=(t,e)=>ku.call(t,e),V=Array.isArray,pn=t=>rr(t)==="[object Map]",ec=t=>rr(t)==="[object Set]",K=t=>typeof t=="function",be=t=>typeof t=="string",Tn=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",tc=t=>(me(t)||K(t))&&K(t.then)&&K(t.catch),nc=Object.prototype.toString,rr=t=>nc.call(t),xu=t=>rr(t).slice(8,-1),sc=t=>rr(t)==="[object Object]",xi=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,jn=Oi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ir=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nu=/-(\w)/g,ft=ir(t=>t.replace(Nu,(e,n)=>n?n.toUpperCase():"")),Du=/\B([A-Z])/g,Rn=ir(t=>t.replace(Du,"-$1").toLowerCase()),or=ir(t=>t.charAt(0).toUpperCase()+t.slice(1)),kr=ir(t=>t?`on${or(t)}`:""),Ht=(t,e)=>!Object.is(t,e),Cs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},$s=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Zr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mo;const rc=()=>mo||(mo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ni(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=be(s)?Uu(s):Ni(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(be(t)||me(t))return t}const Lu=/;(?![^(]*\))/g,Mu=/:([^]+)/,Bu=/\/\*[^]*?\*\//g;function Uu(t){const e={};return t.replace(Bu,"").split(Lu).forEach(n=>{if(n){const s=n.split(Mu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ie(t){let e="";if(be(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=Ie(t[n]);s&&(e+=s+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$u=Oi(Fu);function ic(t){return!!t||t===""}const fe=t=>be(t)?t:t==null?"":V(t)||me(t)&&(t.toString===nc||!K(t.toString))?JSON.stringify(t,oc,2):String(t),oc=(t,e)=>e&&e.__v_isRef?oc(t,e.value):pn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[xr(s,i)+" =>"]=r,n),{})}:ec(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xr(n))}:Tn(e)?xr(e):me(e)&&!V(e)&&!sc(e)?String(e):e,xr=(t,e="")=>{var n;return Tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let He;class ac{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=He,!e&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=He;try{return He=this,e()}finally{He=n}}}on(){He=this}off(){He=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function cc(t){return new ac(t)}function Hu(t,e=He){e&&e.active&&e.effects.push(t)}function lc(){return He}function ju(t){He&&He.cleanups.push(t)}let Jt;class Di{constructor(e,n,s,r){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Hu(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,sn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Vu(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),rn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Mt,n=Jt;try{return Mt=!0,Jt=this,this._runnings++,_o(this),this.fn()}finally{Ao(this),this._runnings--,Jt=n,Mt=e}}stop(){var e;this.active&&(_o(this),Ao(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Vu(t){return t.value}function _o(t){t._trackId++,t._depsLength=0}function Ao(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)uc(t.deps[e],t);t.deps.length=t._depsLength}}function uc(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Mt=!0,ei=0;const fc=[];function sn(){fc.push(Mt),Mt=!1}function rn(){const t=fc.pop();Mt=t===void 0?!0:t}function Li(){ei++}function Mi(){for(ei--;!ei&&ti.length;)ti.shift()()}function dc(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&uc(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const ti=[];function hc(t,e,n){Li();for(const s of t.keys()){let r;s._dirtyLevel<e&&(r??(r=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(r??(r=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&ti.push(s.scheduler)))}Mi()}const pc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Hs=new WeakMap,Qt=Symbol(""),ni=Symbol("");function Fe(t,e,n){if(Mt&&Jt){let s=Hs.get(t);s||Hs.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=pc(()=>s.delete(n))),dc(Jt,r)}}function mt(t,e,n,s,r,i){const o=Hs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||!Tn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?xi(n)&&a.push(o.get("length")):(a.push(o.get(Qt)),pn(t)&&a.push(o.get(ni)));break;case"delete":V(t)||(a.push(o.get(Qt)),pn(t)&&a.push(o.get(ni)));break;case"set":pn(t)&&a.push(o.get(Qt));break}Li();for(const c of a)c&&hc(c,4);Mi()}function Wu(t,e){var n;return(n=Hs.get(t))==null?void 0:n.get(e)}const zu=Oi("__proto__,__v_isRef,__isVue"),gc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tn)),vo=Ku();function Ku(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let i=0,o=this.length;i<o;i++)Fe(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(re)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){sn(),Li();const s=re(this)[e].apply(this,n);return Mi(),rn(),s}}),t}function Gu(t){const e=re(this);return Fe(e,"has",t),e.hasOwnProperty(t)}class mc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?af:yc:i?vc:Ac).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=V(e);if(!r){if(o&&se(vo,n))return Reflect.get(vo,n,s);if(n==="hasOwnProperty")return Gu}const a=Reflect.get(e,n,s);return(Tn(n)?gc.has(n):zu(n))||(r||Fe(e,"get",n),i)?a:we(a)?o&&xi(n)?a:a.value:me(a)?r?wc(a):ls(a):a}}class _c extends mc{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=yn(i);if(!js(s)&&!yn(s)&&(i=re(i),s=re(s)),!V(e)&&we(i)&&!we(s))return c?!1:(i.value=s,!0)}const o=V(e)&&xi(n)?Number(n)<e.length:se(e,n),a=Reflect.set(e,n,s,r);return e===re(r)&&(o?Ht(s,i)&&mt(e,"set",n,s):mt(e,"add",n,s)),a}deleteProperty(e,n){const s=se(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&mt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Tn(n)||!gc.has(n))&&Fe(e,"has",n),s}ownKeys(e){return Fe(e,"iterate",V(e)?"length":Qt),Reflect.ownKeys(e)}}class qu extends mc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Yu=new _c,Ju=new qu,Qu=new _c(!0),Bi=t=>t,ar=t=>Reflect.getPrototypeOf(t);function vs(t,e,n=!1,s=!1){t=t.__v_raw;const r=re(t),i=re(e);n||(Ht(e,i)&&Fe(r,"get",e),Fe(r,"get",i));const{has:o}=ar(r),a=s?Bi:n?$i:Jn;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ys(t,e=!1){const n=this.__v_raw,s=re(n),r=re(t);return e||(Ht(t,r)&&Fe(s,"has",t),Fe(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function bs(t,e=!1){return t=t.__v_raw,!e&&Fe(re(t),"iterate",Qt),Reflect.get(t,"size",t)}function yo(t){t=re(t);const e=re(this);return ar(e).has.call(e,t)||(e.add(t),mt(e,"add",t,t)),this}function bo(t,e){e=re(e);const n=re(this),{has:s,get:r}=ar(n);let i=s.call(n,t);i||(t=re(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Ht(e,o)&&mt(n,"set",t,e):mt(n,"add",t,e),this}function wo(t){const e=re(this),{has:n,get:s}=ar(e);let r=n.call(e,t);r||(t=re(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&mt(e,"delete",t,void 0),i}function Eo(){const t=re(this),e=t.size!==0,n=t.clear();return e&&mt(t,"clear",void 0,void 0),n}function ws(t,e){return function(s,r){const i=this,o=i.__v_raw,a=re(o),c=e?Bi:t?$i:Jn;return!t&&Fe(a,"iterate",Qt),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Es(t,e,n){return function(...s){const r=this.__v_raw,i=re(r),o=pn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Bi:e?$i:Jn;return!e&&Fe(i,"iterate",c?ni:Qt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function bt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xu(){const t={get(i){return vs(this,i)},get size(){return bs(this)},has:ys,add:yo,set:bo,delete:wo,clear:Eo,forEach:ws(!1,!1)},e={get(i){return vs(this,i,!1,!0)},get size(){return bs(this)},has:ys,add:yo,set:bo,delete:wo,clear:Eo,forEach:ws(!1,!0)},n={get(i){return vs(this,i,!0)},get size(){return bs(this,!0)},has(i){return ys.call(this,i,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:ws(!0,!1)},s={get(i){return vs(this,i,!0,!0)},get size(){return bs(this,!0)},has(i){return ys.call(this,i,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:ws(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Es(i,!1,!1),n[i]=Es(i,!0,!1),e[i]=Es(i,!1,!0),s[i]=Es(i,!0,!0)}),[t,n,e,s]}const[Zu,ef,tf,nf]=Xu();function Ui(t,e){const n=e?t?nf:tf:t?ef:Zu;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const sf={get:Ui(!1,!1)},rf={get:Ui(!1,!0)},of={get:Ui(!0,!1)},Ac=new WeakMap,vc=new WeakMap,yc=new WeakMap,af=new WeakMap;function cf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lf(t){return t.__v_skip||!Object.isExtensible(t)?0:cf(xu(t))}function ls(t){return yn(t)?t:Fi(t,!1,Yu,sf,Ac)}function bc(t){return Fi(t,!1,Qu,rf,vc)}function wc(t){return Fi(t,!0,Ju,of,yc)}function Fi(t,e,n,s,r){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=lf(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Bt(t){return yn(t)?Bt(t.__v_raw):!!(t&&t.__v_isReactive)}function yn(t){return!!(t&&t.__v_isReadonly)}function js(t){return!!(t&&t.__v_isShallow)}function Ec(t){return Bt(t)||yn(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function cr(t){return Object.isExtensible(t)&&$s(t,"__v_skip",!0),t}const Jn=t=>me(t)?ls(t):t,$i=t=>me(t)?wc(t):t;class Ic{constructor(e,n,s,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Di(()=>e(this._value),()=>Ts(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=re(this);return(!e._cacheable||e.effect.dirty)&&Ht(e._value,e._value=e.effect.run())&&Ts(e,4),Sc(e),e.effect._dirtyLevel>=2&&Ts(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function uf(t,e,n=!1){let s,r;const i=K(t);return i?(s=t,r=We):(s=t.get,r=t.set),new Ic(s,r,i||!r,n)}function Sc(t){var e;Mt&&Jt&&(t=re(t),dc(Jt,(e=t.dep)!=null?e:t.dep=pc(()=>t.dep=void 0,t instanceof Ic?t:void 0)))}function Ts(t,e=4,n){t=re(t);const s=t.dep;s&&hc(s,e)}function we(t){return!!(t&&t.__v_isRef===!0)}function oe(t){return Cc(t,!1)}function ff(t){return Cc(t,!0)}function Cc(t,e){return we(t)?t:new df(t,e)}class df{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:Jn(e)}get value(){return Sc(this),this._value}set value(e){const n=this.__v_isShallow||js(e)||yn(e);e=n?e:re(e),Ht(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Jn(e),Ts(this,4))}}function Xt(t){return we(t)?t.value:t}const hf={get:(t,e,n)=>Xt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return we(r)&&!we(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Tc(t){return Bt(t)?t:new Proxy(t,hf)}function pf(t){const e=V(t)?new Array(t.length):{};for(const n in t)e[n]=mf(t,n);return e}class gf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Wu(re(this._object),this._key)}}function mf(t,e,n){const s=t[e];return we(s)?s:new gf(t,e,n)}/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ut(t,e,n,s){try{return s?t(...s):t()}catch(r){lr(r,e,n)}}function Je(t,e,n,s){if(K(t)){const i=Ut(t,e,n,s);return i&&tc(i)&&i.catch(o=>{lr(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Je(t[i],e,n,s));return r}function lr(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ut(c,null,10,[t,o,a]);return}}_f(t,n,r,s)}function _f(t,e,n,s=!0){console.error(t)}let Qn=!1,si=!1;const xe=[];let at=0;const gn=[];let Ct=null,qt=0;const Rc=Promise.resolve();let Hi=null;function ji(t){const e=Hi||Rc;return t?e.then(this?t.bind(this):t):e}function Af(t){let e=at+1,n=xe.length;for(;e<n;){const s=e+n>>>1,r=xe[s],i=Xn(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function Vi(t){(!xe.length||!xe.includes(t,Qn&&t.allowRecurse?at+1:at))&&(t.id==null?xe.push(t):xe.splice(Af(t.id),0,t),Oc())}function Oc(){!Qn&&!si&&(si=!0,Hi=Rc.then(kc))}function vf(t){const e=xe.indexOf(t);e>at&&xe.splice(e,1)}function yf(t){V(t)?gn.push(...t):(!Ct||!Ct.includes(t,t.allowRecurse?qt+1:qt))&&gn.push(t),Oc()}function Io(t,e,n=Qn?at+1:0){for(;n<xe.length;n++){const s=xe[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;xe.splice(n,1),n--,s()}}}function Pc(t){if(gn.length){const e=[...new Set(gn)].sort((n,s)=>Xn(n)-Xn(s));if(gn.length=0,Ct){Ct.push(...e);return}for(Ct=e,qt=0;qt<Ct.length;qt++)Ct[qt]();Ct=null,qt=0}}const Xn=t=>t.id==null?1/0:t.id,bf=(t,e)=>{const n=Xn(t)-Xn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function kc(t){si=!1,Qn=!0,xe.sort(bf);try{for(at=0;at<xe.length;at++){const e=xe[at];e&&e.active!==!1&&Ut(e,null,14)}}finally{at=0,xe.length=0,Pc(),Qn=!1,Hi=null,(xe.length||gn.length)&&kc()}}function wf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||pe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||pe;p&&(r=n.map(_=>be(_)?_.trim():_)),f&&(r=n.map(Zr))}let a,c=s[a=kr(e)]||s[a=kr(ft(e))];!c&&i&&(c=s[a=kr(Rn(e))]),c&&Je(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Je(l,t,6,r)}}function xc(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!K(t)){const c=l=>{const u=xc(l,e,!0);u&&(a=!0,Re(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(me(t)&&s.set(t,null),null):(V(i)?i.forEach(c=>o[c]=null):Re(o,i),me(t)&&s.set(t,o),o)}function ur(t,e){return!t||!sr(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Rn(e))||se(t,e))}let Le=null,fr=null;function Vs(t){const e=Le;return Le=t,fr=t&&t.type.__scopeId||null,e}function On(t){fr=t}function Pn(){fr=null}function Zn(t,e=Le,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Lo(-1);const i=Vs(e);let o;try{o=t(...r)}finally{Vs(i),s._d&&Lo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Nr(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:_,ctx:v,inheritAttrs:b}=t;let N,O;const M=Vs(t);try{if(n.shapeFlag&4){const G=r||s,Y=G;N=ot(u.call(Y,G,f,i,_,p,v)),O=c}else{const G=e;N=ot(G.length>1?G(i,{attrs:c,slots:a,emit:l}):G(i,null)),O=e.props?c:Ef(c)}}catch(G){zn.length=0,lr(G,t,1),N=ye(en)}let B=N;if(O&&b!==!1){const G=Object.keys(O),{shapeFlag:Y}=B;G.length&&Y&7&&(o&&G.some(Pi)&&(O=If(O,o)),B=bn(B,O))}return n.dirs&&(B=bn(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),N=B,Vs(M),N}const Ef=t=>{let e;for(const n in t)(n==="class"||n==="style"||sr(n))&&((e||(e={}))[n]=t[n]);return e},If=(t,e)=>{const n={};for(const s in t)(!Pi(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Sf(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?So(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!ur(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?So(s,o,l):!0:!!o;return!1}function So(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ur(n,i))return!0}return!1}function Cf({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Nc="components";function Ws(t,e){return Rf(Nc,t,!0,e)||t}const Tf=Symbol.for("v-ndc");function Rf(t,e,n=!0,s=!1){const r=Le||Te;if(r){const i=r.type;if(t===Nc){const a=wd(i,!1);if(a&&(a===e||a===ft(e)||a===or(ft(e))))return i}const o=Co(r[t]||i[t],e)||Co(r.appContext[t],e);return!o&&s?i:o}}function Co(t,e){return t&&(t[e]||t[ft(e)]||t[or(ft(e))])}const Of=t=>t.__isSuspense;function Pf(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):yf(t)}const kf=Symbol.for("v-scx"),xf=()=>Qe(kf),Is={};function Vn(t,e,n){return Dc(t,e,n)}function Dc(t,e,{immediate:n,deep:s,flush:r,once:i,onTrack:o,onTrigger:a}=pe){if(e&&i){const $=e;e=(...ie)=>{$(...ie),Y()}}const c=Te,l=$=>s===!0?$:Yt($,s===!1?1:void 0);let u,f=!1,p=!1;if(we(t)?(u=()=>t.value,f=js(t)):Bt(t)?(u=()=>l(t),f=!0):V(t)?(p=!0,f=t.some($=>Bt($)||js($)),u=()=>t.map($=>{if(we($))return $.value;if(Bt($))return l($);if(K($))return Ut($,c,2)})):K(t)?e?u=()=>Ut(t,c,2):u=()=>(_&&_(),Je(t,c,3,[v])):u=We,e&&s){const $=u;u=()=>Yt($())}let _,v=$=>{_=B.onStop=()=>{Ut($,c,4),_=B.onStop=void 0}},b;if(gr)if(v=We,e?n&&Je(e,c,3,[u(),p?[]:void 0,v]):u(),r==="sync"){const $=xf();b=$.__watcherHandles||($.__watcherHandles=[])}else return We;let N=p?new Array(t.length).fill(Is):Is;const O=()=>{if(!(!B.active||!B.dirty))if(e){const $=B.run();(s||f||(p?$.some((ie,W)=>Ht(ie,N[W])):Ht($,N)))&&(_&&_(),Je(e,c,3,[$,N===Is?void 0:p&&N[0]===Is?[]:N,v]),N=$)}else B.run()};O.allowRecurse=!!e;let M;r==="sync"?M=O:r==="post"?M=()=>Ue(O,c&&c.suspense):(O.pre=!0,c&&(O.id=c.uid),M=()=>Vi(O));const B=new Di(u,We,M),G=lc(),Y=()=>{B.stop(),G&&ki(G.effects,B)};return e?n?O():N=B.run():r==="post"?Ue(B.run.bind(B),c&&c.suspense):B.run(),b&&b.push(Y),Y}function Nf(t,e,n){const s=this.proxy,r=be(t)?t.includes(".")?Lc(s,t):()=>s[t]:t.bind(s,s);let i;K(e)?i=e:(i=e.handler,n=e);const o=us(this),a=Dc(r,i.bind(s),n);return o(),a}function Lc(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Yt(t,e,n=0,s){if(!me(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),we(t))Yt(t.value,e,n,s);else if(V(t))for(let r=0;r<t.length;r++)Yt(t[r],e,n,s);else if(ec(t)||pn(t))t.forEach(r=>{Yt(r,e,n,s)});else if(sc(t))for(const r in t)Yt(t[r],e,n,s);return t}function Tt(t,e){if(Le===null)return t;const n=mr(Le)||Le.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=pe]=e[r];i&&(K(i)&&(i={mounted:i,updated:i}),i.deep&&Yt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Wt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(sn(),Je(c,n,8,[t.el,a,t,e]),rn())}}/*! #__NO_SIDE_EFFECTS__ */function Mc(t,e){return K(t)?Re({name:t.name},e,{setup:t}):t}const Rs=t=>!!t.type.__asyncLoader,Bc=t=>t.type.__isKeepAlive;function Df(t,e){Uc(t,"a",e)}function Lf(t,e){Uc(t,"da",e)}function Uc(t,e,n=Te){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(dr(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Bc(r.parent.vnode)&&Mf(s,e,n,r),r=r.parent}}function Mf(t,e,n,s){const r=dr(e,t,s,!0);$c(()=>{ki(s[e],r)},n)}function dr(t,e,n=Te,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;sn();const a=us(n),c=Je(e,n,t,o);return a(),rn(),c});return s?r.unshift(i):r.push(i),i}}const vt=t=>(e,n=Te)=>(!gr||t==="sp")&&dr(t,(...s)=>e(...s),n),Bf=vt("bm"),Fc=vt("m"),Uf=vt("bu"),Ff=vt("u"),$f=vt("bum"),$c=vt("um"),Hf=vt("sp"),jf=vt("rtg"),Vf=vt("rtc");function Wf(t,e=Te){dr("ec",t,e)}function Kt(t,e,n,s){let r;const i=n&&n[s];if(V(t)||be(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(me(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const ri=t=>t?Xc(t)?mr(t)||t.proxy:ri(t.parent):null,Wn=Re(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ri(t.parent),$root:t=>ri(t.root),$emit:t=>t.emit,$options:t=>Wi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Vi(t.update)}),$nextTick:t=>t.n||(t.n=ji.bind(t.proxy)),$watch:t=>Nf.bind(t)}),Dr=(t,e)=>t!==pe&&!t.__isScriptSetup&&se(t,e),zf={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Dr(s,e))return o[e]=1,s[e];if(r!==pe&&se(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&se(l,e))return o[e]=3,i[e];if(n!==pe&&se(n,e))return o[e]=4,n[e];ii&&(o[e]=0)}}const u=Wn[e];let f,p;if(u)return e==="$attrs"&&Fe(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==pe&&se(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,se(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Dr(r,e)?(r[e]=n,!0):s!==pe&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==pe&&se(t,o)||Dr(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(Wn,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function To(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ii=!0;function Kf(t){const e=Wi(t),n=t.proxy,s=t.ctx;ii=!1,e.beforeCreate&&Ro(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:_,updated:v,activated:b,deactivated:N,beforeDestroy:O,beforeUnmount:M,destroyed:B,unmounted:G,render:Y,renderTracked:$,renderTriggered:ie,errorCaptured:W,serverPrefetch:U,expose:he,inheritAttrs:Ae,components:Ce,directives:Be,filters:tt}=e;if(l&&Gf(l,s,null),o)for(const ce in o){const ne=o[ce];K(ne)&&(s[ce]=ne.bind(n))}if(r){const ce=r.call(n,n);me(ce)&&(t.data=ls(ce))}if(ii=!0,i)for(const ce in i){const ne=i[ce],Ke=K(ne)?ne.bind(n,n):K(ne.get)?ne.get.bind(n,n):We,nt=!K(ne)&&K(ne.set)?ne.set.bind(n):We,Oe=Se({get:Ke,set:nt});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:Pe=>Oe.value=Pe})}if(a)for(const ce in a)Hc(a[ce],s,n,ce);if(c){const ce=K(c)?c.call(n):c;Reflect.ownKeys(ce).forEach(ne=>{Os(ne,ce[ne])})}u&&Ro(u,t,"c");function X(ce,ne){V(ne)?ne.forEach(Ke=>ce(Ke.bind(n))):ne&&ce(ne.bind(n))}if(X(Bf,f),X(Fc,p),X(Uf,_),X(Ff,v),X(Df,b),X(Lf,N),X(Wf,W),X(Vf,$),X(jf,ie),X($f,M),X($c,G),X(Hf,U),V(he))if(he.length){const ce=t.exposed||(t.exposed={});he.forEach(ne=>{Object.defineProperty(ce,ne,{get:()=>n[ne],set:Ke=>n[ne]=Ke})})}else t.exposed||(t.exposed={});Y&&t.render===We&&(t.render=Y),Ae!=null&&(t.inheritAttrs=Ae),Ce&&(t.components=Ce),Be&&(t.directives=Be)}function Gf(t,e,n=We){V(t)&&(t=oi(t));for(const s in t){const r=t[s];let i;me(r)?"default"in r?i=Qe(r.from||s,r.default,!0):i=Qe(r.from||s):i=Qe(r),we(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Ro(t,e,n){Je(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hc(t,e,n,s){const r=s.includes(".")?Lc(n,s):()=>n[s];if(be(t)){const i=e[t];K(i)&&Vn(r,i)}else if(K(t))Vn(r,t.bind(n));else if(me(t))if(V(t))t.forEach(i=>Hc(i,e,n,s));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&Vn(r,i,t)}}function Wi(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>zs(c,l,o,!0)),zs(c,e,o)),me(e)&&i.set(e,c),c}function zs(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&zs(t,i,n,!0),r&&r.forEach(o=>zs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=qf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qf={data:Oo,props:Po,emits:Po,methods:Fn,computed:Fn,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:Fn,directives:Fn,watch:Jf,provide:Oo,inject:Yf};function Oo(t,e){return e?t?function(){return Re(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Yf(t,e){return Fn(oi(t),oi(e))}function oi(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function De(t,e){return t?[...new Set([].concat(t,e))]:e}function Fn(t,e){return t?Re(Object.create(null),t,e):e}function Po(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:Re(Object.create(null),To(t),To(e??{})):e}function Jf(t,e){if(!t)return e;if(!e)return t;const n=Re(Object.create(null),t);for(const s in e)n[s]=De(t[s],e[s]);return n}function jc(){return{app:null,config:{isNativeTag:Pu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qf=0;function Xf(t,e){return function(s,r=null){K(s)||(s=Re({},s)),r!=null&&!me(r)&&(r=null);const i=jc(),o=new WeakSet;let a=!1;const c=i.app={_uid:Qf++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Id,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&K(l.install)?(o.add(l),l.install(c,...u)):K(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=ye(s,r);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,mr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=mn;mn=c;try{return l()}finally{mn=u}}};return c}}let mn=null;function Os(t,e){if(Te){let n=Te.provides;const s=Te.parent&&Te.parent.provides;s===n&&(n=Te.provides=Object.create(s)),n[t]=e}}function Qe(t,e,n=!1){const s=Te||Le;if(s||mn){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:mn._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}function Zf(){return!!(Te||Le||mn)}function ed(t,e,n,s=!1){const r={},i={};$s(i,pr,1),t.propsDefaults=Object.create(null),Vc(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:bc(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function td(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=re(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(ur(t.emitsOptions,p))continue;const _=e[p];if(c)if(se(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const v=ft(p);r[v]=ai(c,a,v,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{Vc(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!se(e,f)&&((u=Rn(f))===f||!se(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=ai(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!se(e,f))&&(delete i[f],l=!0)}l&&mt(t,"set","$attrs")}function Vc(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(jn(c))continue;const l=e[c];let u;r&&se(r,u=ft(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ur(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=re(n),l=a||pe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ai(r,c,f,l[f],t,!se(l,f))}}return o}function ai(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&K(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=us(r);s=l[n]=c.call(null,e),u()}}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Rn(n))&&(s=!0))}return s}function Wc(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!K(t)){const u=f=>{c=!0;const[p,_]=Wc(f,e,!0);Re(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return me(t)&&s.set(t,hn),hn;if(V(i))for(let u=0;u<i.length;u++){const f=ft(i[u]);ko(f)&&(o[f]=pe)}else if(i)for(const u in i){const f=ft(u);if(ko(f)){const p=i[u],_=o[f]=V(p)||K(p)?{type:p}:Re({},p);if(_){const v=Do(Boolean,_.type),b=Do(String,_.type);_[0]=v>-1,_[1]=b<0||v<b,(v>-1||se(_,"default"))&&a.push(f)}}}const l=[o,a];return me(t)&&s.set(t,l),l}function ko(t){return t[0]!=="$"&&!jn(t)}function xo(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function No(t,e){return xo(t)===xo(e)}function Do(t,e){return V(e)?e.findIndex(n=>No(n,t)):K(e)&&No(e,t)?0:-1}const zc=t=>t[0]==="_"||t==="$stable",zi=t=>V(t)?t.map(ot):[ot(t)],nd=(t,e,n)=>{if(e._n)return e;const s=Zn((...r)=>zi(e(...r)),n);return s._c=!1,s},Kc=(t,e,n)=>{const s=t._ctx;for(const r in t){if(zc(r))continue;const i=t[r];if(K(i))e[r]=nd(r,i,s);else if(i!=null){const o=zi(i);e[r]=()=>o}}},Gc=(t,e)=>{const n=zi(e);t.slots.default=()=>n},sd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),$s(e,"_",n)):Kc(e,t.slots={})}else t.slots={},e&&Gc(t,e);$s(t.slots,pr,1)},rd=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Re(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Kc(e,r)),o=e}else e&&(Gc(t,e),o={default:1});if(i)for(const a in r)!zc(a)&&o[a]==null&&delete r[a]};function ci(t,e,n,s,r=!1){if(V(t)){t.forEach((p,_)=>ci(p,e&&(V(e)?e[_]:e),n,s,r));return}if(Rs(s)&&!r)return;const i=s.shapeFlag&4?mr(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===pe?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(be(l)?(u[l]=null,se(f,l)&&(f[l]=null)):we(l)&&(l.value=null)),K(c))Ut(c,a,12,[o,u]);else{const p=be(c),_=we(c);if(p||_){const v=()=>{if(t.f){const b=p?se(f,c)?f[c]:u[c]:c.value;r?V(b)&&ki(b,i):V(b)?b.includes(i)||b.push(i):p?(u[c]=[i],se(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,se(f,c)&&(f[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,Ue(v,n)):v()}}}const Ue=Pf;function id(t){return od(t)}function od(t,e){const n=rc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:_=We,insertStaticContent:v}=t,b=(d,h,m,E=null,y=null,T=null,x=void 0,C=null,P=!!h.dynamicChildren)=>{if(d===h)return;d&&!Mn(d,h)&&(E=g(d),Pe(d,y,T,!0),d=null),h.patchFlag===-2&&(P=!1,h.dynamicChildren=null);const{type:I,ref:L,shapeFlag:H}=h;switch(I){case hr:N(d,h,m,E);break;case en:O(d,h,m,E);break;case Ps:d==null&&M(h,m,E,x);break;case ke:Ce(d,h,m,E,y,T,x,C,P);break;default:H&1?Y(d,h,m,E,y,T,x,C,P):H&6?Be(d,h,m,E,y,T,x,C,P):(H&64||H&128)&&I.process(d,h,m,E,y,T,x,C,P,k)}L!=null&&y&&ci(L,d&&d.ref,T,h||d,!h)},N=(d,h,m,E)=>{if(d==null)s(h.el=a(h.children),m,E);else{const y=h.el=d.el;h.children!==d.children&&l(y,h.children)}},O=(d,h,m,E)=>{d==null?s(h.el=c(h.children||""),m,E):h.el=d.el},M=(d,h,m,E)=>{[d.el,d.anchor]=v(d.children,h,m,E,d.el,d.anchor)},B=({el:d,anchor:h},m,E)=>{let y;for(;d&&d!==h;)y=p(d),s(d,m,E),d=y;s(h,m,E)},G=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),r(d),d=m;r(h)},Y=(d,h,m,E,y,T,x,C,P)=>{h.type==="svg"?x="svg":h.type==="math"&&(x="mathml"),d==null?$(h,m,E,y,T,x,C,P):U(d,h,y,T,x,C,P)},$=(d,h,m,E,y,T,x,C)=>{let P,I;const{props:L,shapeFlag:H,transition:F,dirs:z}=d;if(P=d.el=o(d.type,T,L&&L.is,L),H&8?u(P,d.children):H&16&&W(d.children,P,null,E,y,Lr(d,T),x,C),z&&Wt(d,null,E,"created"),ie(P,d,d.scopeId,x,E),L){for(const ue in L)ue!=="value"&&!jn(ue)&&i(P,ue,null,L[ue],T,d.children,E,y,D);"value"in L&&i(P,"value",null,L.value,T),(I=L.onVnodeBeforeMount)&&it(I,E,d)}z&&Wt(d,null,E,"beforeMount");const J=ad(y,F);J&&F.beforeEnter(P),s(P,h,m),((I=L&&L.onVnodeMounted)||J||z)&&Ue(()=>{I&&it(I,E,d),J&&F.enter(P),z&&Wt(d,null,E,"mounted")},y)},ie=(d,h,m,E,y)=>{if(m&&_(d,m),E)for(let T=0;T<E.length;T++)_(d,E[T]);if(y){let T=y.subTree;if(h===T){const x=y.vnode;ie(d,x,x.scopeId,x.slotScopeIds,y.parent)}}},W=(d,h,m,E,y,T,x,C,P=0)=>{for(let I=P;I<d.length;I++){const L=d[I]=C?Rt(d[I]):ot(d[I]);b(null,L,h,m,E,y,T,x,C)}},U=(d,h,m,E,y,T,x)=>{const C=h.el=d.el;let{patchFlag:P,dynamicChildren:I,dirs:L}=h;P|=d.patchFlag&16;const H=d.props||pe,F=h.props||pe;let z;if(m&&zt(m,!1),(z=F.onVnodeBeforeUpdate)&&it(z,m,h,d),L&&Wt(h,d,m,"beforeUpdate"),m&&zt(m,!0),I?he(d.dynamicChildren,I,C,m,E,Lr(h,y),T):x||ne(d,h,C,null,m,E,Lr(h,y),T,!1),P>0){if(P&16)Ae(C,h,H,F,m,E,y);else if(P&2&&H.class!==F.class&&i(C,"class",null,F.class,y),P&4&&i(C,"style",H.style,F.style,y),P&8){const J=h.dynamicProps;for(let ue=0;ue<J.length;ue++){const ge=J[ue],Ee=H[ge],qe=F[ge];(qe!==Ee||ge==="value")&&i(C,ge,Ee,qe,y,d.children,m,E,D)}}P&1&&d.children!==h.children&&u(C,h.children)}else!x&&I==null&&Ae(C,h,H,F,m,E,y);((z=F.onVnodeUpdated)||L)&&Ue(()=>{z&&it(z,m,h,d),L&&Wt(h,d,m,"updated")},E)},he=(d,h,m,E,y,T,x)=>{for(let C=0;C<h.length;C++){const P=d[C],I=h[C],L=P.el&&(P.type===ke||!Mn(P,I)||P.shapeFlag&70)?f(P.el):m;b(P,I,L,null,E,y,T,x,!0)}},Ae=(d,h,m,E,y,T,x)=>{if(m!==E){if(m!==pe)for(const C in m)!jn(C)&&!(C in E)&&i(d,C,m[C],null,x,h.children,y,T,D);for(const C in E){if(jn(C))continue;const P=E[C],I=m[C];P!==I&&C!=="value"&&i(d,C,I,P,x,h.children,y,T,D)}"value"in E&&i(d,"value",m.value,E.value,x)}},Ce=(d,h,m,E,y,T,x,C,P)=>{const I=h.el=d?d.el:a(""),L=h.anchor=d?d.anchor:a("");let{patchFlag:H,dynamicChildren:F,slotScopeIds:z}=h;z&&(C=C?C.concat(z):z),d==null?(s(I,m,E),s(L,m,E),W(h.children||[],m,L,y,T,x,C,P)):H>0&&H&64&&F&&d.dynamicChildren?(he(d.dynamicChildren,F,m,y,T,x,C),(h.key!=null||y&&h===y.subTree)&&qc(d,h,!0)):ne(d,h,m,L,y,T,x,C,P)},Be=(d,h,m,E,y,T,x,C,P)=>{h.slotScopeIds=C,d==null?h.shapeFlag&512?y.ctx.activate(h,m,E,x,P):tt(h,m,E,y,T,x,P):ve(d,h,P)},tt=(d,h,m,E,y,T,x)=>{const C=d.component=_d(d,E,y);if(Bc(d)&&(C.ctx.renderer=k),Ad(C),C.asyncDep){if(y&&y.registerDep(C,X),!d.el){const P=C.subTree=ye(en);O(null,P,h,m)}}else X(C,d,h,m,y,T,x)},ve=(d,h,m)=>{const E=h.component=d.component;if(Sf(d,h,m))if(E.asyncDep&&!E.asyncResolved){ce(E,h,m);return}else E.next=h,vf(E.update),E.effect.dirty=!0,E.update();else h.el=d.el,E.vnode=h},X=(d,h,m,E,y,T,x)=>{const C=()=>{if(d.isMounted){let{next:L,bu:H,u:F,parent:z,vnode:J}=d;{const cn=Yc(d);if(cn){L&&(L.el=J.el,ce(d,L,x)),cn.asyncDep.then(()=>{d.isUnmounted||C()});return}}let ue=L,ge;zt(d,!1),L?(L.el=J.el,ce(d,L,x)):L=J,H&&Cs(H),(ge=L.props&&L.props.onVnodeBeforeUpdate)&&it(ge,z,L,J),zt(d,!0);const Ee=Nr(d),qe=d.subTree;d.subTree=Ee,b(qe,Ee,f(qe.el),g(qe),d,y,T),L.el=Ee.el,ue===null&&Cf(d,Ee.el),F&&Ue(F,y),(ge=L.props&&L.props.onVnodeUpdated)&&Ue(()=>it(ge,z,L,J),y)}else{let L;const{el:H,props:F}=h,{bm:z,m:J,parent:ue}=d,ge=Rs(h);if(zt(d,!1),z&&Cs(z),!ge&&(L=F&&F.onVnodeBeforeMount)&&it(L,ue,h),zt(d,!0),H&&ee){const Ee=()=>{d.subTree=Nr(d),ee(H,d.subTree,d,y,null)};ge?h.type.__asyncLoader().then(()=>!d.isUnmounted&&Ee()):Ee()}else{const Ee=d.subTree=Nr(d);b(null,Ee,m,E,d,y,T),h.el=Ee.el}if(J&&Ue(J,y),!ge&&(L=F&&F.onVnodeMounted)){const Ee=h;Ue(()=>it(L,ue,Ee),y)}(h.shapeFlag&256||ue&&Rs(ue.vnode)&&ue.vnode.shapeFlag&256)&&d.a&&Ue(d.a,y),d.isMounted=!0,h=m=E=null}},P=d.effect=new Di(C,We,()=>Vi(I),d.scope),I=d.update=()=>{P.dirty&&P.run()};I.id=d.uid,zt(d,!0),I()},ce=(d,h,m)=>{h.component=d;const E=d.vnode.props;d.vnode=h,d.next=null,td(d,h.props,E,m),rd(d,h.children,m),sn(),Io(d),rn()},ne=(d,h,m,E,y,T,x,C,P=!1)=>{const I=d&&d.children,L=d?d.shapeFlag:0,H=h.children,{patchFlag:F,shapeFlag:z}=h;if(F>0){if(F&128){nt(I,H,m,E,y,T,x,C,P);return}else if(F&256){Ke(I,H,m,E,y,T,x,C,P);return}}z&8?(L&16&&D(I,y,T),H!==I&&u(m,H)):L&16?z&16?nt(I,H,m,E,y,T,x,C,P):D(I,y,T,!0):(L&8&&u(m,""),z&16&&W(H,m,E,y,T,x,C,P))},Ke=(d,h,m,E,y,T,x,C,P)=>{d=d||hn,h=h||hn;const I=d.length,L=h.length,H=Math.min(I,L);let F;for(F=0;F<H;F++){const z=h[F]=P?Rt(h[F]):ot(h[F]);b(d[F],z,m,null,y,T,x,C,P)}I>L?D(d,y,T,!0,!1,H):W(h,m,E,y,T,x,C,P,H)},nt=(d,h,m,E,y,T,x,C,P)=>{let I=0;const L=h.length;let H=d.length-1,F=L-1;for(;I<=H&&I<=F;){const z=d[I],J=h[I]=P?Rt(h[I]):ot(h[I]);if(Mn(z,J))b(z,J,m,null,y,T,x,C,P);else break;I++}for(;I<=H&&I<=F;){const z=d[H],J=h[F]=P?Rt(h[F]):ot(h[F]);if(Mn(z,J))b(z,J,m,null,y,T,x,C,P);else break;H--,F--}if(I>H){if(I<=F){const z=F+1,J=z<L?h[z].el:E;for(;I<=F;)b(null,h[I]=P?Rt(h[I]):ot(h[I]),m,J,y,T,x,C,P),I++}}else if(I>F)for(;I<=H;)Pe(d[I],y,T,!0),I++;else{const z=I,J=I,ue=new Map;for(I=J;I<=F;I++){const $e=h[I]=P?Rt(h[I]):ot(h[I]);$e.key!=null&&ue.set($e.key,I)}let ge,Ee=0;const qe=F-J+1;let cn=!1,ho=0;const Ln=new Array(qe);for(I=0;I<qe;I++)Ln[I]=0;for(I=z;I<=H;I++){const $e=d[I];if(Ee>=qe){Pe($e,y,T,!0);continue}let rt;if($e.key!=null)rt=ue.get($e.key);else for(ge=J;ge<=F;ge++)if(Ln[ge-J]===0&&Mn($e,h[ge])){rt=ge;break}rt===void 0?Pe($e,y,T,!0):(Ln[rt-J]=I+1,rt>=ho?ho=rt:cn=!0,b($e,h[rt],m,null,y,T,x,C,P),Ee++)}const po=cn?cd(Ln):hn;for(ge=po.length-1,I=qe-1;I>=0;I--){const $e=J+I,rt=h[$e],go=$e+1<L?h[$e+1].el:E;Ln[I]===0?b(null,rt,m,go,y,T,x,C,P):cn&&(ge<0||I!==po[ge]?Oe(rt,m,go,2):ge--)}}},Oe=(d,h,m,E,y=null)=>{const{el:T,type:x,transition:C,children:P,shapeFlag:I}=d;if(I&6){Oe(d.component.subTree,h,m,E);return}if(I&128){d.suspense.move(h,m,E);return}if(I&64){x.move(d,h,m,k);return}if(x===ke){s(T,h,m);for(let H=0;H<P.length;H++)Oe(P[H],h,m,E);s(d.anchor,h,m);return}if(x===Ps){B(d,h,m);return}if(E!==2&&I&1&&C)if(E===0)C.beforeEnter(T),s(T,h,m),Ue(()=>C.enter(T),y);else{const{leave:H,delayLeave:F,afterLeave:z}=C,J=()=>s(T,h,m),ue=()=>{H(T,()=>{J(),z&&z()})};F?F(T,J,ue):ue()}else s(T,h,m)},Pe=(d,h,m,E=!1,y=!1)=>{const{type:T,props:x,ref:C,children:P,dynamicChildren:I,shapeFlag:L,patchFlag:H,dirs:F}=d;if(C!=null&&ci(C,null,m,d,!0),L&256){h.ctx.deactivate(d);return}const z=L&1&&F,J=!Rs(d);let ue;if(J&&(ue=x&&x.onVnodeBeforeUnmount)&&it(ue,h,d),L&6)Z(d.component,m,E);else{if(L&128){d.suspense.unmount(m,E);return}z&&Wt(d,null,h,"beforeUnmount"),L&64?d.type.remove(d,h,m,y,k,E):I&&(T!==ke||H>0&&H&64)?D(I,h,m,!1,!0):(T===ke&&H&384||!y&&L&16)&&D(P,h,m),E&&Ge(d)}(J&&(ue=x&&x.onVnodeUnmounted)||z)&&Ue(()=>{ue&&it(ue,h,d),z&&Wt(d,null,h,"unmounted")},m)},Ge=d=>{const{type:h,el:m,anchor:E,transition:y}=d;if(h===ke){st(m,E);return}if(h===Ps){G(d);return}const T=()=>{r(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:x,delayLeave:C}=y,P=()=>x(m,T);C?C(d.el,T,P):P()}else T()},st=(d,h)=>{let m;for(;d!==h;)m=p(d),r(d),d=m;r(h)},Z=(d,h,m)=>{const{bum:E,scope:y,update:T,subTree:x,um:C}=d;E&&Cs(E),y.stop(),T&&(T.active=!1,Pe(x,d,h,m)),C&&Ue(C,h),Ue(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},D=(d,h,m,E=!1,y=!1,T=0)=>{for(let x=T;x<d.length;x++)Pe(d[x],h,m,E,y)},g=d=>d.shapeFlag&6?g(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el);let S=!1;const R=(d,h,m)=>{d==null?h._vnode&&Pe(h._vnode,null,null,!0):b(h._vnode||null,d,h,null,null,null,m),S||(S=!0,Io(),Pc(),S=!1),h._vnode=d},k={p:b,um:Pe,m:Oe,r:Ge,mt:tt,mc:W,pc:ne,pbc:he,n:g,o:t};let q,ee;return e&&([q,ee]=e(k)),{render:R,hydrate:q,createApp:Xf(R,q)}}function Lr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ad(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function qc(t,e,n=!1){const s=t.children,r=e.children;if(V(s)&&V(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Rt(r[i]),a.el=o.el),n||qc(o,a)),a.type===hr&&(a.el=o.el)}}function cd(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Yc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yc(e)}const ld=t=>t.__isTeleport,ke=Symbol.for("v-fgt"),hr=Symbol.for("v-txt"),en=Symbol.for("v-cmt"),Ps=Symbol.for("v-stc"),zn=[];let Ye=null;function Q(t=!1){zn.push(Ye=t?null:[])}function ud(){zn.pop(),Ye=zn[zn.length-1]||null}let es=1;function Lo(t){es+=t}function Jc(t){return t.dynamicChildren=es>0?Ye||hn:null,ud(),es>0&&Ye&&Ye.push(t),t}function ae(t,e,n,s,r,i){return Jc(A(t,e,n,s,r,i,!0))}function Ks(t,e,n,s,r){return Jc(ye(t,e,n,s,r,!0))}function li(t){return t?t.__v_isVNode===!0:!1}function Mn(t,e){return t.type===e.type&&t.key===e.key}const pr="__vInternal",Qc=({key:t})=>t??null,ks=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?be(t)||we(t)||K(t)?{i:Le,r:t,k:e,f:!!n}:t:null);function A(t,e=null,n=null,s=0,r=null,i=t===ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qc(e),ref:e&&ks(e),scopeId:fr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Le};return a?(Ki(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=be(n)?8:16),es>0&&!o&&Ye&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ye.push(c),c}const ye=fd;function fd(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Tf)&&(t=en),li(t)){const a=bn(t,e,!0);return n&&Ki(a,n),es>0&&!i&&Ye&&(a.shapeFlag&6?Ye[Ye.indexOf(t)]=a:Ye.push(a)),a.patchFlag|=-2,a}if(Ed(t)&&(t=t.__vccOpts),e){e=dd(e);let{class:a,style:c}=e;a&&!be(a)&&(e.class=Ie(a)),me(c)&&(Ec(c)&&!V(c)&&(c=Re({},c)),e.style=Ni(c))}const o=be(t)?1:Of(t)?128:ld(t)?64:me(t)?4:K(t)?2:0;return A(t,e,n,s,r,o,i,!0)}function dd(t){return t?Ec(t)||pr in t?Re({},t):t:null}function bn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?pd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Qc(a),ref:e&&e.ref?n&&r?V(r)?r.concat(ks(e)):[r,ks(e)]:ks(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bn(t.ssContent),ssFallback:t.ssFallback&&bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ve(t=" ",e=0){return ye(hr,null,t,e)}function hd(t,e){const n=ye(Ps,null,t);return n.staticCount=e,n}function je(t="",e=!1){return e?(Q(),Ks(en,null,t)):ye(en,null,t)}function ot(t){return t==null||typeof t=="boolean"?ye(en):V(t)?ye(ke,null,t.slice()):typeof t=="object"?Rt(t):ye(hr,null,String(t))}function Rt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bn(t)}function Ki(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Ki(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(pr in e)?e._ctx=Le:r===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),s&64?(n=16,e=[Ve(e)]):n=8);t.children=e,t.shapeFlag|=n}function pd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ie([e.class,s.class]));else if(r==="style")e.style=Ni([e.style,s.style]);else if(sr(r)){const i=e[r],o=s[r];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function it(t,e,n,s=null){Je(t,e,7,[n,s])}const gd=jc();let md=0;function _d(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||gd,i={uid:md++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ac(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wc(s,r),emitsOptions:xc(s,r),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wf.bind(null,i),t.ce&&t.ce(i),i}let Te=null,Gs,ui;{const t=rc(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Gs=e("__VUE_INSTANCE_SETTERS__",n=>Te=n),ui=e("__VUE_SSR_SETTERS__",n=>gr=n)}const us=t=>{const e=Te;return Gs(t),t.scope.on(),()=>{t.scope.off(),Gs(e)}},Mo=()=>{Te&&Te.scope.off(),Gs(null)};function Xc(t){return t.vnode.shapeFlag&4}let gr=!1;function Ad(t,e=!1){e&&ui(e);const{props:n,children:s}=t.vnode,r=Xc(t);ed(t,n,r,e),sd(t,s);const i=r?vd(t,e):void 0;return e&&ui(!1),i}function vd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=cr(new Proxy(t.ctx,zf));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?bd(t):null,i=us(t);sn();const o=Ut(s,t,0,[t.props,r]);if(rn(),i(),tc(o)){if(o.then(Mo,Mo),e)return o.then(a=>{Bo(t,a,e)}).catch(a=>{lr(a,t,0)});t.asyncDep=o}else Bo(t,o,e)}else Zc(t,e)}function Bo(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=Tc(e)),Zc(t,n)}let Uo;function Zc(t,e,n){const s=t.type;if(!t.render){if(!e&&Uo&&!s.render){const r=s.template||Wi(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Re(Re({isCustomElement:i,delimiters:a},o),c);s.render=Uo(r,l)}}t.render=s.render||We}{const r=us(t);sn();try{Kf(t)}finally{rn(),r()}}}function yd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Fe(t,"get","$attrs"),e[n]}}))}function bd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return yd(t)},slots:t.slots,emit:t.emit,expose:e}}function mr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Tc(cr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wn)return Wn[n](t)},has(e,n){return n in e||n in Wn}}))}function wd(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function Ed(t){return K(t)&&"__vccOpts"in t}const Se=(t,e)=>uf(t,e,gr);function el(t,e,n){const s=arguments.length;return s===2?me(e)&&!V(e)?li(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&li(n)&&(n=[n]),ye(t,e,n))}const Id="3.4.20";/**
* @vue/runtime-dom v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Sd="http://www.w3.org/2000/svg",Cd="http://www.w3.org/1998/Math/MathML",Ot=typeof document<"u"?document:null,Fo=Ot&&Ot.createElement("template"),Td={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Ot.createElementNS(Sd,t):e==="mathml"?Ot.createElementNS(Cd,t):Ot.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ot.createTextNode(t),createComment:t=>Ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Fo.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=Fo.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Rd=Symbol("_vtc");function Od(t,e,n){const s=t[Rd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $o=Symbol("_vod"),Pd=Symbol("_vsh"),kd=Symbol(""),xd=/(^|;)\s*display\s*:/;function Nd(t,e,n){const s=t.style,r=be(n);let i=!1;if(n&&!r){if(e)if(be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&xs(s,a,"")}else for(const o in e)n[o]==null&&xs(s,o,"");for(const o in n)o==="display"&&(i=!0),xs(s,o,n[o])}else if(r){if(e!==n){const o=s[kd];o&&(n+=";"+o),s.cssText=n,i=xd.test(n)}}else e&&t.removeAttribute("style");$o in t&&(t[$o]=i?s.display:"",t[Pd]&&(s.display="none"))}const Ho=/\s*!important$/;function xs(t,e,n){if(V(n))n.forEach(s=>xs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Dd(t,e);Ho.test(n)?t.setProperty(Rn(s),n.replace(Ho,""),"important"):t[s]=n}}const jo=["Webkit","Moz","ms"],Mr={};function Dd(t,e){const n=Mr[e];if(n)return n;let s=ft(e);if(s!=="filter"&&s in t)return Mr[e]=s;s=or(s);for(let r=0;r<jo.length;r++){const i=jo[r]+s;if(i in t)return Mr[e]=i}return e}const Vo="http://www.w3.org/1999/xlink";function Ld(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Vo,e.slice(6,e.length)):t.setAttributeNS(Vo,e,n);else{const i=$u(e);n==null||i&&!ic(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Md(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ic(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function un(t,e,n,s){t.addEventListener(e,n,s)}function Bd(t,e,n,s){t.removeEventListener(e,n,s)}const Wo=Symbol("_vei");function Ud(t,e,n,s,r=null){const i=t[Wo]||(t[Wo]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Fd(e);if(s){const l=i[e]=jd(s,r);un(t,a,l,c)}else o&&(Bd(t,a,o,c),i[e]=void 0)}}const zo=/(?:Once|Passive|Capture)$/;function Fd(t){let e;if(zo.test(t)){e={};let s;for(;s=t.match(zo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rn(t.slice(2)),e]}let Br=0;const $d=Promise.resolve(),Hd=()=>Br||($d.then(()=>Br=0),Br=Date.now());function jd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Je(Vd(s,n.value),e,5,[s])};return n.value=t,n.attached=Hd(),n}function Vd(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Ko=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Wd=(t,e,n,s,r,i,o,a,c)=>{const l=r==="svg";e==="class"?Od(t,s,l):e==="style"?Nd(t,n,s):sr(e)?Pi(e)||Ud(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zd(t,e,s,l))?Md(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ld(t,e,s,l))};function zd(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ko(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ko(e)&&be(n)?!1:e in t}const Go=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>Cs(e,n):e};function Kd(t){t.target.composing=!0}function qo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ur=Symbol("_assign"),Pt={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Ur]=Go(r);const i=s||r.props&&r.props.type==="number";un(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Zr(a)),t[Ur](a)}),n&&un(t,"change",()=>{t.value=t.value.trim()}),e||(un(t,"compositionstart",Kd),un(t,"compositionend",qo),un(t,"change",qo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[Ur]=Go(i),t.composing)return;const o=r||t.type==="number"?Zr(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},Gd=Re({patchProp:Wd},Td);let Yo;function qd(){return Yo||(Yo=id(Gd))}const Yd=(...t)=>{const e=qd().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Qd(s);if(!r)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,Jd(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Jd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Qd(t){return be(t)?document.querySelector(t):t}var Xd=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let tl;const _r=t=>tl=t,nl=Symbol();function fi(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Kn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Kn||(Kn={}));function Zd(){const t=cc(!0),e=t.run(()=>oe({}));let n=[],s=[];const r=cr({install(i){_r(r),r._a=i,i.provide(nl,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Xd?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const sl=()=>{};function Jo(t,e,n,s=sl){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&lc()&&ju(r),r}function ln(t,...e){t.slice().forEach(n=>{n(...e)})}const eh=t=>t();function di(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];fi(r)&&fi(s)&&t.hasOwnProperty(n)&&!we(s)&&!Bt(s)?t[n]=di(r,s):t[n]=s}return t}const th=Symbol();function nh(t){return!fi(t)||!t.hasOwnProperty(th)}const{assign:St}=Object;function sh(t){return!!(we(t)&&t.effect)}function rh(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=pf(n.state.value[t]);return St(u,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=cr(Se(()=>{_r(n);const _=n._s.get(t);return o[p].call(_,_)})),f),{}))}return c=rl(t,l,e,n,s,!0),c}function rl(t,e,n={},s,r,i){let o;const a=St({actions:{}},n),c={deep:!0};let l,u,f=[],p=[],_;const v=s.state.value[t];!i&&!v&&(s.state.value[t]={}),oe({});let b;function N(W){let U;l=u=!1,typeof W=="function"?(W(s.state.value[t]),U={type:Kn.patchFunction,storeId:t,events:_}):(di(s.state.value[t],W),U={type:Kn.patchObject,payload:W,storeId:t,events:_});const he=b=Symbol();ji().then(()=>{b===he&&(l=!0)}),u=!0,ln(f,U,s.state.value[t])}const O=i?function(){const{state:U}=n,he=U?U():{};this.$patch(Ae=>{St(Ae,he)})}:sl;function M(){o.stop(),f=[],p=[],s._s.delete(t)}function B(W,U){return function(){_r(s);const he=Array.from(arguments),Ae=[],Ce=[];function Be(X){Ae.push(X)}function tt(X){Ce.push(X)}ln(p,{args:he,name:W,store:Y,after:Be,onError:tt});let ve;try{ve=U.apply(this&&this.$id===t?this:Y,he)}catch(X){throw ln(Ce,X),X}return ve instanceof Promise?ve.then(X=>(ln(Ae,X),X)).catch(X=>(ln(Ce,X),Promise.reject(X))):(ln(Ae,ve),ve)}}const G={_p:s,$id:t,$onAction:Jo.bind(null,p),$patch:N,$reset:O,$subscribe(W,U={}){const he=Jo(f,W,U.detached,()=>Ae()),Ae=o.run(()=>Vn(()=>s.state.value[t],Ce=>{(U.flush==="sync"?u:l)&&W({storeId:t,type:Kn.direct,events:_},Ce)},St({},c,U)));return he},$dispose:M},Y=ls(G);s._s.set(t,Y);const ie=(s._a&&s._a.runWithContext||eh)(()=>s._e.run(()=>(o=cc()).run(e)));for(const W in ie){const U=ie[W];if(we(U)&&!sh(U)||Bt(U))i||(v&&nh(U)&&(we(U)?U.value=v[W]:di(U,v[W])),s.state.value[t][W]=U);else if(typeof U=="function"){const he=B(W,U);ie[W]=he,a.actions[W]=U}}return St(Y,ie),St(re(Y),ie),Object.defineProperty(Y,"$state",{get:()=>s.state.value[t],set:W=>{N(U=>{St(U,W)})}}),s._p.forEach(W=>{St(Y,o.run(()=>W({store:Y,app:s._a,pinia:s,options:a})))}),v&&i&&n.hydrate&&n.hydrate(Y.$state,v),l=!0,u=!0,Y}function ih(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=Zf();return a=a||(l?Qe(nl,null):null),a&&_r(a),a=tl,a._s.has(s)||(i?rl(s,e,r,a):rh(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const fn=typeof document<"u";function oh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const le=Object.assign;function Fr(t,e){const n={};for(const s in e){const r=e[s];n[s]=Xe(r)?r.map(t):t(r)}return n}const Gn=()=>{},Xe=Array.isArray,il=/#/g,ah=/&/g,ch=/\//g,lh=/=/g,uh=/\?/g,ol=/\+/g,fh=/%5B/g,dh=/%5D/g,al=/%5E/g,hh=/%60/g,cl=/%7B/g,ph=/%7C/g,ll=/%7D/g,gh=/%20/g;function Gi(t){return encodeURI(""+t).replace(ph,"|").replace(fh,"[").replace(dh,"]")}function mh(t){return Gi(t).replace(cl,"{").replace(ll,"}").replace(al,"^")}function hi(t){return Gi(t).replace(ol,"%2B").replace(gh,"+").replace(il,"%23").replace(ah,"%26").replace(hh,"`").replace(cl,"{").replace(ll,"}").replace(al,"^")}function _h(t){return hi(t).replace(lh,"%3D")}function Ah(t){return Gi(t).replace(il,"%23").replace(uh,"%3F")}function vh(t){return t==null?"":Ah(t).replace(ch,"%2F")}function ts(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const yh=/\/$/,bh=t=>t.replace(yh,"");function $r(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Sh(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:ts(o)}}function wh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Qo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Eh(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&wn(e.matched[s],n.matched[r])&&ul(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function wn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ul(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ih(t[n],e[n]))return!1;return!0}function Ih(t,e){return Xe(t)?Xo(t,e):Xe(e)?Xo(e,t):t===e}function Xo(t,e){return Xe(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Sh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}var ns;(function(t){t.pop="pop",t.push="push"})(ns||(ns={}));var qn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qn||(qn={}));function Ch(t){if(!t)if(fn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bh(t)}const Th=/^[^#]+#/;function Rh(t,e){return t.replace(Th,"#")+e}function Oh(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ar=()=>({left:window.scrollX,top:window.scrollY});function Ph(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Oh(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zo(t,e){return(history.state?history.state.position-e:-1)+t}const pi=new Map;function kh(t,e){pi.set(t,e)}function xh(t){const e=pi.get(t);return pi.delete(t),e}let Nh=()=>location.protocol+"//"+location.host;function fl(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Qo(c,"")}return Qo(n,t)+s+r}function Dh(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const _=fl(t,location),v=n.value,b=e.value;let N=0;if(p){if(n.value=_,e.value=p,o&&o===v){o=null;return}N=b?p.position-b.position:0}else s(_);r.forEach(O=>{O(n.value,v,{delta:N,type:ns.pop,direction:N?N>0?qn.forward:qn.back:qn.unknown})})};function c(){o=n.value}function l(p){r.push(p);const _=()=>{const v=r.indexOf(p);v>-1&&r.splice(v,1)};return i.push(_),_}function u(){const{history:p}=window;p.state&&p.replaceState(le({},p.state,{scroll:Ar()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function ea(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ar():null}}function Lh(t){const{history:e,location:n}=window,s={value:fl(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Nh()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),r.value=l}catch(_){console.error(_),n[u?"replace":"assign"](p)}}function o(c,l){const u=le({},e.state,ea(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=le({},r.value,e.state,{forward:c,scroll:Ar()});i(u.current,u,!0);const f=le({},ea(s.value,c,null),{position:u.position+1},l);i(c,f,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Mh(t){t=Ch(t);const e=Lh(t),n=Dh(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=le({location:"",base:t,go:s,createHref:Rh.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Bh(t){return typeof t=="string"||t&&typeof t=="object"}function dl(t){return typeof t=="string"||typeof t=="symbol"}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hl=Symbol("");var ta;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ta||(ta={}));function En(t,e){return le(new Error,{type:t,[hl]:!0},e)}function ht(t,e){return t instanceof Error&&hl in t&&(e==null||!!(t.type&e))}const na="[^/]+?",Uh={sensitive:!1,strict:!1,start:!0,end:!0},Fh=/[.+*?^${}()[\]/\\]/g;function $h(t,e){const n=le({},Uh,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let f=0;f<l.length;f++){const p=l[f];let _=40+(n.sensitive?.25:0);if(p.type===0)f||(r+="/"),r+=p.value.replace(Fh,"\\$&"),_+=40;else if(p.type===1){const{value:v,repeatable:b,optional:N,regexp:O}=p;i.push({name:v,repeatable:b,optional:N});const M=O||na;if(M!==na){_+=10;try{new RegExp(`(${M})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+G.message)}}let B=b?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(B=N&&l.length<2?`(?:/${B})`:"/"+B),N&&(B+="?"),r+=B,_+=20,N&&(_+=-8),b&&(_+=-20),M===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const _=u[p]||"",v=i[p-1];f[v.name]=_&&v.repeatable?_.split("/"):_}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const _ of p)if(_.type===0)u+=_.value;else if(_.type===1){const{value:v,repeatable:b,optional:N}=_,O=v in l?l[v]:"";if(Xe(O)&&!b)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=Xe(O)?O.join("/"):O;if(!M)if(N)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Hh(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function jh(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Hh(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(sa(s))return 1;if(sa(r))return-1}return r.length-s.length}function sa(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Vh={type:0,value:""},Wh=/[a-zA-Z0-9_]/;function zh(t){if(!t)return[[]];if(t==="/")return[[Vh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:Wh.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),r}function Kh(t,e,n){const s=$h(zh(t.path),n),r=le(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Gh(t,e){const n=[],s=new Map;e=oa({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,f,p){const _=!p,v=qh(u);v.aliasOf=p&&p.record;const b=oa(e,u),N=[v];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const G of B)N.push(le({},v,{components:p?p.record.components:v.components,path:G,aliasOf:p?p.record:v}))}let O,M;for(const B of N){const{path:G}=B;if(f&&G[0]!=="/"){const Y=f.record.path,$=Y[Y.length-1]==="/"?"":"/";B.path=f.record.path+(G&&$+G)}if(O=Kh(B,f,b),p?p.alias.push(O):(M=M||O,M!==O&&M.alias.push(O),_&&u.name&&!ia(O)&&o(u.name)),v.children){const Y=v.children;for(let $=0;$<Y.length;$++)i(Y[$],O,p&&p.children[$])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return M?()=>{o(M)}:Gn}function o(u){if(dl(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&jh(u,n[f])>=0&&(u.record.path!==n[f].record.path||!pl(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!ia(u)&&s.set(u.record.name,u)}function l(u,f){let p,_={},v,b;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw En(1,{location:u});b=p.record.name,_=le(ra(f.params,p.keys.filter(M=>!M.optional).concat(p.parent?p.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&ra(u.params,p.keys.map(M=>M.name))),v=p.stringify(_)}else if(u.path!=null)v=u.path,p=n.find(M=>M.re.test(v)),p&&(_=p.parse(v),b=p.record.name);else{if(p=f.name?s.get(f.name):n.find(M=>M.re.test(f.path)),!p)throw En(1,{location:u,currentLocation:f});b=p.record.name,_=le({},f.params,u.params),v=p.stringify(_)}const N=[];let O=p;for(;O;)N.unshift(O.record),O=O.parent;return{name:b,path:v,params:_,matched:N,meta:Jh(N)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ra(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function qh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Yh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Yh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function ia(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Jh(t){return t.reduce((e,n)=>le(e,n.meta),{})}function oa(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function pl(t,e){return e.children.some(n=>n===t||pl(t,n))}function Qh(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(ol," "),o=i.indexOf("="),a=ts(o<0?i:i.slice(0,o)),c=o<0?null:ts(i.slice(o+1));if(a in e){let l=e[a];Xe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function aa(t){let e="";for(let n in t){const s=t[n];if(n=_h(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xe(s)?s.map(i=>i&&hi(i)):[s&&hi(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Xh(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Xe(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Zh=Symbol(""),ca=Symbol(""),vr=Symbol(""),gl=Symbol(""),gi=Symbol("");function Bn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function kt(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(En(4,{from:n,to:e})):p instanceof Error?c(p):Bh(p)?c(En(2,{from:e,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(s&&s.instances[r],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function Hr(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(ep(c)){const u=(c.__vccOpts||c)[e];u&&i.push(kt(u,n,s,o,a,r))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=oh(u)?u.default:u;o.components[a]=f;const _=(f.__vccOpts||f)[e];return _&&kt(_,n,s,o,a,r)()}))}}return i}function ep(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function la(t){const e=Qe(vr),n=Qe(gl),s=Se(()=>e.resolve(Xt(t.to))),r=Se(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(wn.bind(null,u));if(p>-1)return p;const _=ua(c[l-2]);return l>1&&ua(u)===_&&f[f.length-1].path!==_?f.findIndex(wn.bind(null,c[l-2])):p}),i=Se(()=>r.value>-1&&rp(n.params,s.value.params)),o=Se(()=>r.value>-1&&r.value===n.matched.length-1&&ul(n.params,s.value.params));function a(c={}){return sp(c)?e[Xt(t.replace)?"replace":"push"](Xt(t.to)).catch(Gn):Promise.resolve()}return{route:s,href:Se(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const tp=Mc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:la,setup(t,{slots:e}){const n=ls(la(t)),{options:s}=Qe(vr),r=Se(()=>({[fa(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[fa(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:el("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),np=tp;function sp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rp(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Xe(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function ua(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fa=(t,e,n)=>t??e??n,ip=Mc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Qe(gi),r=Se(()=>t.route||s.value),i=Qe(ca,0),o=Se(()=>{let l=Xt(i);const{matched:u}=r.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Se(()=>r.value.matched[o.value]);Os(ca,Se(()=>o.value+1)),Os(Zh,a),Os(gi,r);const c=oe();return Vn(()=>[c.value,a.value,t.name],([l,u,f],[p,_,v])=>{u&&(u.instances[f]=l,_&&_!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!wn(u,_)||!p)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return da(n.default,{Component:p,route:l});const _=f.props[u],v=_?_===!0?l.params:typeof _=="function"?_(l):_:null,N=el(p,le({},v,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return da(n.default,{Component:N,route:l})||N}}});function da(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ml=ip;function op(t){const e=Gh(t.routes,t),n=t.parseQuery||Qh,s=t.stringifyQuery||aa,r=t.history,i=Bn(),o=Bn(),a=Bn(),c=ff(wt);let l=wt;fn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fr.bind(null,g=>""+g),f=Fr.bind(null,vh),p=Fr.bind(null,ts);function _(g,S){let R,k;return dl(g)?(R=e.getRecordMatcher(g),k=S):k=g,e.addRoute(k,R)}function v(g){const S=e.getRecordMatcher(g);S&&e.removeRoute(S)}function b(){return e.getRoutes().map(g=>g.record)}function N(g){return!!e.getRecordMatcher(g)}function O(g,S){if(S=le({},S||c.value),typeof g=="string"){const h=$r(n,g,S.path),m=e.resolve({path:h.path},S),E=r.createHref(h.fullPath);return le(h,m,{params:p(m.params),hash:ts(h.hash),redirectedFrom:void 0,href:E})}let R;if(g.path!=null)R=le({},g,{path:$r(n,g.path,S.path).path});else{const h=le({},g.params);for(const m in h)h[m]==null&&delete h[m];R=le({},g,{params:f(h)}),S.params=f(S.params)}const k=e.resolve(R,S),q=g.hash||"";k.params=u(p(k.params));const ee=wh(s,le({},g,{hash:mh(q),path:k.path})),d=r.createHref(ee);return le({fullPath:ee,hash:q,query:s===aa?Xh(g.query):g.query||{}},k,{redirectedFrom:void 0,href:d})}function M(g){return typeof g=="string"?$r(n,g,c.value.path):le({},g)}function B(g,S){if(l!==g)return En(8,{from:S,to:g})}function G(g){return ie(g)}function Y(g){return G(le(M(g),{replace:!0}))}function $(g){const S=g.matched[g.matched.length-1];if(S&&S.redirect){const{redirect:R}=S;let k=typeof R=="function"?R(g):R;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=M(k):{path:k},k.params={}),le({query:g.query,hash:g.hash,params:k.path!=null?{}:g.params},k)}}function ie(g,S){const R=l=O(g),k=c.value,q=g.state,ee=g.force,d=g.replace===!0,h=$(R);if(h)return ie(le(M(h),{state:typeof h=="object"?le({},q,h.state):q,force:ee,replace:d}),S||R);const m=R;m.redirectedFrom=S;let E;return!ee&&Eh(s,k,R)&&(E=En(16,{to:m,from:k}),Oe(k,k,!0,!1)),(E?Promise.resolve(E):he(m,k)).catch(y=>ht(y)?ht(y,2)?y:nt(y):ne(y,m,k)).then(y=>{if(y){if(ht(y,2))return ie(le({replace:d},M(y.to),{state:typeof y.to=="object"?le({},q,y.to.state):q,force:ee}),S||m)}else y=Ce(m,k,!0,d,q);return Ae(m,k,y),y})}function W(g,S){const R=B(g,S);return R?Promise.reject(R):Promise.resolve()}function U(g){const S=st.values().next().value;return S&&typeof S.runWithContext=="function"?S.runWithContext(g):g()}function he(g,S){let R;const[k,q,ee]=ap(g,S);R=Hr(k.reverse(),"beforeRouteLeave",g,S);for(const h of k)h.leaveGuards.forEach(m=>{R.push(kt(m,g,S))});const d=W.bind(null,g,S);return R.push(d),D(R).then(()=>{R=[];for(const h of i.list())R.push(kt(h,g,S));return R.push(d),D(R)}).then(()=>{R=Hr(q,"beforeRouteUpdate",g,S);for(const h of q)h.updateGuards.forEach(m=>{R.push(kt(m,g,S))});return R.push(d),D(R)}).then(()=>{R=[];for(const h of ee)if(h.beforeEnter)if(Xe(h.beforeEnter))for(const m of h.beforeEnter)R.push(kt(m,g,S));else R.push(kt(h.beforeEnter,g,S));return R.push(d),D(R)}).then(()=>(g.matched.forEach(h=>h.enterCallbacks={}),R=Hr(ee,"beforeRouteEnter",g,S,U),R.push(d),D(R))).then(()=>{R=[];for(const h of o.list())R.push(kt(h,g,S));return R.push(d),D(R)}).catch(h=>ht(h,8)?h:Promise.reject(h))}function Ae(g,S,R){a.list().forEach(k=>U(()=>k(g,S,R)))}function Ce(g,S,R,k,q){const ee=B(g,S);if(ee)return ee;const d=S===wt,h=fn?history.state:{};R&&(k||d?r.replace(g.fullPath,le({scroll:d&&h&&h.scroll},q)):r.push(g.fullPath,q)),c.value=g,Oe(g,S,R,d),nt()}let Be;function tt(){Be||(Be=r.listen((g,S,R)=>{if(!Z.listening)return;const k=O(g),q=$(k);if(q){ie(le(q,{replace:!0}),k).catch(Gn);return}l=k;const ee=c.value;fn&&kh(Zo(ee.fullPath,R.delta),Ar()),he(k,ee).catch(d=>ht(d,12)?d:ht(d,2)?(ie(d.to,k).then(h=>{ht(h,20)&&!R.delta&&R.type===ns.pop&&r.go(-1,!1)}).catch(Gn),Promise.reject()):(R.delta&&r.go(-R.delta,!1),ne(d,k,ee))).then(d=>{d=d||Ce(k,ee,!1),d&&(R.delta&&!ht(d,8)?r.go(-R.delta,!1):R.type===ns.pop&&ht(d,20)&&r.go(-1,!1)),Ae(k,ee,d)}).catch(Gn)}))}let ve=Bn(),X=Bn(),ce;function ne(g,S,R){nt(g);const k=X.list();return k.length?k.forEach(q=>q(g,S,R)):console.error(g),Promise.reject(g)}function Ke(){return ce&&c.value!==wt?Promise.resolve():new Promise((g,S)=>{ve.add([g,S])})}function nt(g){return ce||(ce=!g,tt(),ve.list().forEach(([S,R])=>g?R(g):S()),ve.reset()),g}function Oe(g,S,R,k){const{scrollBehavior:q}=t;if(!fn||!q)return Promise.resolve();const ee=!R&&xh(Zo(g.fullPath,0))||(k||!R)&&history.state&&history.state.scroll||null;return ji().then(()=>q(g,S,ee)).then(d=>d&&Ph(d)).catch(d=>ne(d,g,S))}const Pe=g=>r.go(g);let Ge;const st=new Set,Z={currentRoute:c,listening:!0,addRoute:_,removeRoute:v,hasRoute:N,getRoutes:b,resolve:O,options:t,push:G,replace:Y,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:Ke,install(g){const S=this;g.component("RouterLink",np),g.component("RouterView",ml),g.config.globalProperties.$router=S,Object.defineProperty(g.config.globalProperties,"$route",{enumerable:!0,get:()=>Xt(c)}),fn&&!Ge&&c.value===wt&&(Ge=!0,G(r.location).catch(q=>{}));const R={};for(const q in wt)Object.defineProperty(R,q,{get:()=>c.value[q],enumerable:!0});g.provide(vr,S),g.provide(gl,bc(R)),g.provide(gi,c);const k=g.unmount;st.add(g),g.unmount=function(){st.delete(g),st.size<1&&(l=wt,Be&&Be(),Be=null,c.value=wt,Ge=!1,ce=!1),k()}}};function D(g){return g.reduce((S,R)=>S.then(()=>U(R)),Promise.resolve())}return Z}function ap(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>wn(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>wn(l,c))||r.push(c))}return[n,s,r]}function cp(){return Qe(vr)}const on=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},lp={class:"main-container"},up={__name:"App",setup(t){return(e,n)=>(Q(),ae("div",lp,[ye(Xt(ml))]))}},fp=on(up,[["__scopeId","data-v-4129fcea"]]);var ha={};/**
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
 */const _l=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},dp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Al={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),s.push(n[u],n[f],n[p],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_l(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw new hp;const p=i<<2|a>>4;if(s.push(p),l!==64){const _=a<<4&240|l>>2;if(s.push(_),f!==64){const v=l<<6&192|f;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pp=function(t){const e=_l(t);return Al.encodeByteArray(e,!0)},vl=function(t){return pp(t).replace(/\./g,"")},yl=function(t){try{return Al.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mp=()=>gp().__FIREBASE_DEFAULTS__,_p=()=>{if(typeof process>"u"||typeof ha>"u")return;const t=ha.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ap=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yl(t[1]);return e&&JSON.parse(e)},qi=()=>{try{return mp()||_p()||Ap()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vp=t=>{var e,n;return(n=(e=qi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bl=()=>{var t;return(t=qi())===null||t===void 0?void 0:t.config},wl=t=>{var e;return(e=qi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class yp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function wp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ep(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ip(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sp(){try{return typeof indexedDB=="object"}catch{return!1}}function Cp(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Tp="FirebaseError";class jt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Tp,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Rp(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new jt(r,a,s)}}function Rp(t,e){return t.replace(Op,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Op=/\{\$([^}]+)}/g;function Pp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(pa(i)&&pa(o)){if(!qs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function pa(t){return t!==null&&typeof t=="object"}/**
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
 */function ds(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $n(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Hn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kp(t,e){const n=new xp(t,e);return n.subscribe.bind(n)}class xp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Np(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=jr),r.error===void 0&&(r.error=jr),r.complete===void 0&&(r.complete=jr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Np(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jr(){}/**
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
 */function yt(t){return t&&t._delegate?t._delegate:t}class In{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gt="[DEFAULT]";/**
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
 */class Dp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new yp;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mp(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Lp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lp(t){return t===Gt?void 0:t}function Mp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Bp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const Up={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},Fp=de.INFO,$p={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Hp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=$p[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class El{constructor(e){this.name=e,this._logLevel=Fp,this._logHandler=Hp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Up[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const jp=(t,e)=>e.some(n=>t instanceof n);let ga,ma;function Vp(){return ga||(ga=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wp(){return ma||(ma=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Il=new WeakMap,mi=new WeakMap,Sl=new WeakMap,Vr=new WeakMap,Yi=new WeakMap;function zp(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ft(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Il.set(n,t)}).catch(()=>{}),Yi.set(e,t),e}function Kp(t){if(mi.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});mi.set(t,e)}let _i={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gp(t){_i=t(_i)}function qp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Wr(this),e,...n);return Sl.set(s,e.sort?e.sort():[e]),Ft(s)}:Wp().includes(t)?function(...e){return t.apply(Wr(this),e),Ft(Il.get(this))}:function(...e){return Ft(t.apply(Wr(this),e))}}function Yp(t){return typeof t=="function"?qp(t):(t instanceof IDBTransaction&&Kp(t),jp(t,Vp())?new Proxy(t,_i):t)}function Ft(t){if(t instanceof IDBRequest)return zp(t);if(Vr.has(t))return Vr.get(t);const e=Yp(t);return e!==t&&(Vr.set(t,e),Yi.set(e,t)),e}const Wr=t=>Yi.get(t);function Jp(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ft(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ft(o.result),c.oldVersion,c.newVersion,Ft(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Qp=["get","getKey","getAll","getAllKeys","count"],Xp=["put","add","delete","clear"],zr=new Map;function _a(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zr.get(e))return zr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Xp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Qp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return zr.set(e,i),i}Gp(t=>({...t,get:(e,n,s)=>_a(e,n)||t.get(e,n,s),has:(e,n)=>!!_a(e,n)||t.has(e,n)}));/**
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
 */class Zp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function eg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ai="@firebase/app",Aa="0.9.27";/**
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
 */const tn=new El("@firebase/app"),tg="@firebase/app-compat",ng="@firebase/analytics-compat",sg="@firebase/analytics",rg="@firebase/app-check-compat",ig="@firebase/app-check",og="@firebase/auth",ag="@firebase/auth-compat",cg="@firebase/database",lg="@firebase/database-compat",ug="@firebase/functions",fg="@firebase/functions-compat",dg="@firebase/installations",hg="@firebase/installations-compat",pg="@firebase/messaging",gg="@firebase/messaging-compat",mg="@firebase/performance",_g="@firebase/performance-compat",Ag="@firebase/remote-config",vg="@firebase/remote-config-compat",yg="@firebase/storage",bg="@firebase/storage-compat",wg="@firebase/firestore",Eg="@firebase/firestore-compat",Ig="firebase",Sg="10.8.0";/**
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
 */const vi="[DEFAULT]",Cg={[Ai]:"fire-core",[tg]:"fire-core-compat",[sg]:"fire-analytics",[ng]:"fire-analytics-compat",[ig]:"fire-app-check",[rg]:"fire-app-check-compat",[og]:"fire-auth",[ag]:"fire-auth-compat",[cg]:"fire-rtdb",[lg]:"fire-rtdb-compat",[ug]:"fire-fn",[fg]:"fire-fn-compat",[dg]:"fire-iid",[hg]:"fire-iid-compat",[pg]:"fire-fcm",[gg]:"fire-fcm-compat",[mg]:"fire-perf",[_g]:"fire-perf-compat",[Ag]:"fire-rc",[vg]:"fire-rc-compat",[yg]:"fire-gcs",[bg]:"fire-gcs-compat",[wg]:"fire-fst",[Eg]:"fire-fst-compat","fire-js":"fire-js",[Ig]:"fire-js-all"};/**
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
 */const Ys=new Map,yi=new Map;function Tg(t,e){try{t.container.addComponent(e)}catch(n){tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ss(t){const e=t.name;if(yi.has(e))return tn.debug(`There were multiple attempts to register component ${e}.`),!1;yi.set(e,t);for(const n of Ys.values())Tg(n,t);return!0}function Cl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Rg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$t=new fs("app","Firebase",Rg);/**
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
 */class Og{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const hs=Sg;function Tl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:vi,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw $t.create("bad-app-name",{appName:String(r)});if(n||(n=bl()),!n)throw $t.create("no-options");const i=Ys.get(r);if(i){if(qs(n,i.options)&&qs(s,i.config))return i;throw $t.create("duplicate-app",{appName:r})}const o=new Bp(r);for(const c of yi.values())o.addComponent(c);const a=new Og(n,s,o);return Ys.set(r,a),a}function Pg(t=vi){const e=Ys.get(t);if(!e&&t===vi&&bl())return Tl();if(!e)throw $t.create("no-app",{appName:t});return e}function _n(t,e,n){var s;let r=(s=Cg[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tn.warn(a.join(" "));return}ss(new In(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const kg="firebase-heartbeat-database",xg=1,rs="firebase-heartbeat-store";let Kr=null;function Rl(){return Kr||(Kr=Jp(kg,xg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(rs)}catch(n){console.warn(n)}}}}).catch(t=>{throw $t.create("idb-open",{originalErrorMessage:t.message})})),Kr}async function Ng(t){try{const n=(await Rl()).transaction(rs),s=await n.objectStore(rs).get(Ol(t));return await n.done,s}catch(e){if(e instanceof jt)tn.warn(e.message);else{const n=$t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tn.warn(n.message)}}}async function va(t,e){try{const s=(await Rl()).transaction(rs,"readwrite");await s.objectStore(rs).put(e,Ol(t)),await s.done}catch(n){if(n instanceof jt)tn.warn(n.message);else{const s=$t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tn.warn(s.message)}}}function Ol(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Dg=1024,Lg=30*24*60*60*1e3;class Mg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ug(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ya();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Lg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ya(),{heartbeatsToSend:s,unsentEntries:r}=Bg(this._heartbeatsCache.heartbeats),i=vl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ya(){return new Date().toISOString().substring(0,10)}function Bg(t,e=Dg){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ba(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ba(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ug{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sp()?Cp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ng(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return va(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return va(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ba(t){return vl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Fg(t){ss(new In("platform-logger",e=>new Zp(e),"PRIVATE")),ss(new In("heartbeat",e=>new Mg(e),"PRIVATE")),_n(Ai,Aa,t),_n(Ai,Aa,"esm2017"),_n("fire-js","")}Fg("");function Ji(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Pl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $g=Pl,kl=new fs("auth","Firebase",Pl());/**
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
 */const Js=new El("@firebase/auth");function Hg(t,...e){Js.logLevel<=de.WARN&&Js.warn(`Auth (${hs}): ${t}`,...e)}function Ns(t,...e){Js.logLevel<=de.ERROR&&Js.error(`Auth (${hs}): ${t}`,...e)}/**
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
 */function Ze(t,...e){throw Qi(t,...e)}function lt(t,...e){return Qi(t,...e)}function jg(t,e,n){const s=Object.assign(Object.assign({},$g()),{[e]:n});return new fs("auth","Firebase",s).create(e,{appName:t.name})}function Qi(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return kl.create(t,...e)}function j(t,e,...n){if(!t)throw Qi(e,...n)}function pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ns(e),new Error(e)}function At(t,e){t||pt(e)}/**
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
 */function bi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vg(){return wa()==="http:"||wa()==="https:"}function wa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Wg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vg()||wp()||"connection"in navigator)?navigator.onLine:!0}function zg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ps{constructor(e,n){this.shortDelay=e,this.longDelay=n,At(n>e,"Short delay should be less than long delay!"),this.isMobile=bp()||Ep()}get(){return Wg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xi(t,e){At(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class xl{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Kg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Gg=new ps(3e4,6e4);function an(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vt(t,e,n,s,r={}){return Nl(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ds(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),xl.fetch()(Dl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Nl(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Kg),e);try{const r=new Yg(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ss(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ss(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ss(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ss(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw jg(t,u,l);Ze(t,u)}}catch(r){if(r instanceof jt)throw r;Ze(t,"network-request-failed",{message:String(r)})}}async function yr(t,e,n,s,r={}){const i=await Vt(t,e,n,s,r);return"mfaPendingCredential"in i&&Ze(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Dl(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Xi(t.config,r):`${t.config.apiScheme}://${r}`}function qg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Yg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(lt(this.auth,"network-request-failed")),Gg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ss(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=lt(t,e,s);return r.customData._tokenResponse=n,r}function Ea(t){return t!==void 0&&t.enterprise!==void 0}class Jg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Qg(t,e){return Vt(t,"GET","/v2/recaptchaConfig",an(t,e))}/**
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
 */async function Xg(t,e){return Vt(t,"POST","/v1/accounts:delete",e)}async function Zg(t,e){return Vt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function em(t,e=!1){const n=yt(t),s=await n.getIdToken(e),r=Zi(s);j(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Yn(Gr(r.auth_time)),issuedAtTime:Yn(Gr(r.iat)),expirationTime:Yn(Gr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Gr(t){return Number(t)*1e3}function Zi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ns("JWT malformed, contained fewer than 3 sections"),null;try{const r=yl(n);return r?JSON.parse(r):(Ns("Failed to decode base64 JWT payload"),null)}catch(r){return Ns("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function tm(t){const e=Zi(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function is(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof jt&&nm(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function nm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ll{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yn(this.lastLoginAt),this.creationTime=Yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qs(t){var e;const n=t.auth,s=await t.getIdToken(),r=await is(t,Zg(n,{idToken:s}));j(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?om(i.providerUserInfo):[],a=im(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ll(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function rm(t){const e=yt(t);await Qs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function im(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function om(t){return t.map(e=>{var{providerId:n}=e,s=Ji(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function am(t,e){const n=await Nl(t,{},async()=>{const s=ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Dl(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xl.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cm(t,e){return Vt(t,"POST","/v2/accounts:revokeToken",an(t,e))}/**
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
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await am(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new os;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(j(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
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
 */function Et(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ji(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ll(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await is(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return em(this,e)}reload(){return rm(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Qs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await is(this,Xg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:G,isAnonymous:Y,providerData:$,stsTokenManager:ie}=n;j(B&&ie,e,"internal-error");const W=os.fromJSON(this.name,ie);j(typeof B=="string",e,"internal-error"),Et(f,e.name),Et(p,e.name),j(typeof G=="boolean",e,"internal-error"),j(typeof Y=="boolean",e,"internal-error"),Et(_,e.name),Et(v,e.name),Et(b,e.name),Et(N,e.name),Et(O,e.name),Et(M,e.name);const U=new Zt({uid:B,auth:e,email:p,emailVerified:G,displayName:f,isAnonymous:Y,photoURL:v,phoneNumber:_,tenantId:b,stsTokenManager:W,createdAt:O,lastLoginAt:M});return $&&Array.isArray($)&&(U.providerData=$.map(he=>Object.assign({},he))),N&&(U._redirectEventId=N),U}static async _fromIdTokenResponse(e,n,s=!1){const r=new os;r.updateFromServerResponse(n);const i=new Zt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Qs(i),i}}/**
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
 */const Ia=new Map;function gt(t){At(t instanceof Function,"Expected a class definition");let e=Ia.get(t);return e?(At(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ia.set(t,e),e)}/**
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
 */class Ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ml.type="NONE";const Sa=Ml;/**
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
 */function Ds(t,e,n){return`firebase:${t}:${e}:${n}`}class An{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ds(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ds("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new An(gt(Sa),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||gt(Sa);const o=Ds(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Zt._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new An(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new An(i,e,s))}}/**
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
 */function Ca(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hl(e))return"Blackberry";if(jl(e))return"Webos";if(eo(e))return"Safari";if((e.includes("chrome/")||Ul(e))&&!e.includes("edge/"))return"Chrome";if($l(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Bl(t=Ne()){return/firefox\//i.test(t)}function eo(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ul(t=Ne()){return/crios\//i.test(t)}function Fl(t=Ne()){return/iemobile/i.test(t)}function $l(t=Ne()){return/android/i.test(t)}function Hl(t=Ne()){return/blackberry/i.test(t)}function jl(t=Ne()){return/webos/i.test(t)}function br(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lm(t=Ne()){var e;return br(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function um(){return Ip()&&document.documentMode===10}function Vl(t=Ne()){return br(t)||$l(t)||jl(t)||Hl(t)||/windows phone/i.test(t)||Fl(t)}function fm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Wl(t,e=[]){let n;switch(t){case"Browser":n=Ca(Ne());break;case"Worker":n=`${Ca(Ne())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${s}`}/**
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
 */class dm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function hm(t,e={}){return Vt(t,"GET","/v2/passwordPolicy",an(t,e))}/**
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
 */const pm=6;class gm{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:pm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class mm{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ta(this),this.idTokenSubscription=new Ta(this),this.beforeStateQueue=new dm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await An.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?yt(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hm(this),n=new gm(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await cm(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await An.create(this,[gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Hg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kn(t){return yt(t)}let Ta=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=kp(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
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
 */let wr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _m(t){wr=t}function zl(t){return wr.loadJS(t)}function Am(){return wr.recaptchaEnterpriseScript}function vm(){return wr.gapiScript}function ym(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bm="recaptcha-enterprise",wm="NO_RECAPTCHA";class Em{constructor(e){this.type=bm,this.auth=kn(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Qg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Jg(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Ea(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(wm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Ea(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Am();c.length!==0&&(c+=a),zl(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ra(t,e,n,s=!1){const r=new Em(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Oa(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ra(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ra(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
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
 */function Im(t,e){const n=Cl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(qs(i,e??{}))return r;Ze(r,"already-initialized")}return n.initialize({options:e})}function Sm(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Cm(t,e,n){const s=kn(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Kl(e),{host:o,port:a}=Tm(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Rm()}function Kl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Tm(t){const e=Kl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Pa(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Pa(o)}}}function Pa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Rm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class to{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,n){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}async function Om(t,e){return Vt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Pm(t,e){return yr(t,"POST","/v1/accounts:signInWithPassword",an(t,e))}/**
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
 */async function km(t,e){return yr(t,"POST","/v1/accounts:signInWithEmailLink",an(t,e))}async function xm(t,e){return yr(t,"POST","/v1/accounts:signInWithEmailLink",an(t,e))}/**
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
 */class as extends to{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new as(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new as(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oa(e,n,"signInWithPassword",Pm);case"emailLink":return km(e,{email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oa(e,s,"signUpPassword",Om);case"emailLink":return xm(e,{idToken:n,email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vn(t,e){return yr(t,"POST","/v1/accounts:signInWithIdp",an(t,e))}/**
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
 */const Nm="http://localhost";class nn extends to{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ji(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new nn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,vn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vn(e,n)}buildRequest(){const e={requestUri:Nm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ds(n)}return e}}/**
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
 */function Dm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lm(t){const e=$n(Hn(t)).link,n=e?$n(Hn(e)).deep_link_id:null,s=$n(Hn(t)).deep_link_id;return(s?$n(Hn(s)).link:null)||s||n||e||t}class no{constructor(e){var n,s,r,i,o,a;const c=$n(Hn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,f=Dm((r=c.mode)!==null&&r!==void 0?r:null);j(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Lm(e);try{return new no(n)}catch{return null}}}/**
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
 */class xn{constructor(){this.providerId=xn.PROVIDER_ID}static credential(e,n){return as._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=no.parseLink(n);return j(s,"argument-error"),as._fromEmailAndCode(e,s.code,s.tenantId)}}xn.PROVIDER_ID="password";xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gs extends Gl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xt extends gs{constructor(){super("facebook.com")}static credential(e){return nn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends gs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return nn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Nt.credential(n,s)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class Dt extends gs{constructor(){super("github.com")}static credential(e){return nn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
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
 */class Lt extends gs{constructor(){super("twitter.com")}static credential(e,n){return nn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Lt.credential(n,s)}catch{return null}}}Lt.TWITTER_SIGN_IN_METHOD="twitter.com";Lt.PROVIDER_ID="twitter.com";/**
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
 */class Sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Zt._fromIdTokenResponse(e,s,r),o=ka(s);return new Sn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ka(s);return new Sn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ka(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Xs extends jt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Xs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Xs(e,n,s,r)}}function ql(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xs._fromErrorAndOperation(t,i,e,s):i})}async function Mm(t,e,n=!1){const s=await is(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Sn._forOperation(t,"link",s)}/**
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
 */async function Bm(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await is(t,ql(s,r,e,t),n);j(i.idToken,s,"internal-error");const o=Zi(i.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),Sn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ze(s,"user-mismatch"),i}}/**
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
 */async function Yl(t,e,n=!1){const s="signIn",r=await ql(t,s,e),i=await Sn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Um(t,e){return Yl(kn(t),e)}/**
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
 */async function Fm(t){const e=kn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function $m(t,e,n){return Um(yt(t),xn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Fm(t),s})}function Hm(t,e,n,s){return yt(t).onIdTokenChanged(e,n,s)}function jm(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}function Vm(t,e,n,s){return yt(t).onAuthStateChanged(e,n,s)}function Wm(t){return yt(t).signOut()}const Zs="__sak";/**
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
 */class Jl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zs,"1"),this.storage.removeItem(Zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function zm(){const t=Ne();return eo(t)||br(t)}const Km=1e3,Gm=10;class Ql extends Jl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zm()&&fm(),this.fallbackToPolling=Vl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);um()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Gm):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Km)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ql.type="LOCAL";const qm=Ql;/**
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
 */class Xl extends Jl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xl.type="SESSION";const Zl=Xl;/**
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
 */function Ym(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Er{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Er(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Ym(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Er.receivers=[];/**
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
 */function so(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Jm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=so("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ut(){return window}function Qm(t){ut().location.href=t}/**
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
 */function eu(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function Xm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function e_(){return eu()?self:null}/**
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
 */const tu="firebaseLocalStorageDb",t_=1,er="firebaseLocalStorage",nu="fbase_key";class ms{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ir(t,e){return t.transaction([er],e?"readwrite":"readonly").objectStore(er)}function n_(){const t=indexedDB.deleteDatabase(tu);return new ms(t).toPromise()}function wi(){const t=indexedDB.open(tu,t_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(er,{keyPath:nu})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(er)?e(s):(s.close(),await n_(),e(await wi()))})})}async function xa(t,e,n){const s=Ir(t,!0).put({[nu]:e,value:n});return new ms(s).toPromise()}async function s_(t,e){const n=Ir(t,!1).get(e),s=await new ms(n).toPromise();return s===void 0?null:s.value}function Na(t,e){const n=Ir(t,!0).delete(e);return new ms(n).toPromise()}const r_=800,i_=3;class su{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>i_)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Er._getInstance(e_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Xm(),!this.activeServiceWorker)return;this.sender=new Jm(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wi();return await xa(e,Zs,"1"),await Na(e,Zs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>xa(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>s_(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Na(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ir(r,!1).getAll();return new ms(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),r_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}su.type="LOCAL";const o_=su;new ps(3e4,6e4);/**
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
 */function a_(t,e){return e?gt(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ro extends to{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function c_(t){return Yl(t.auth,new ro(t),t.bypassAuthState)}function l_(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Bm(n,new ro(t),t.bypassAuthState)}async function u_(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Mm(n,new ro(t),t.bypassAuthState)}/**
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
 */class ru{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return c_;case"linkViaPopup":case"linkViaRedirect":return u_;case"reauthViaPopup":case"reauthViaRedirect":return l_;default:Ze(this.auth,"internal-error")}}resolve(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const f_=new ps(2e3,1e4);class dn extends ru{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const e=so();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,f_.get())};e()}}dn.currentPopupAction=null;/**
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
 */const d_="pendingRedirect",Ls=new Map;class h_ extends ru{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ls.get(this.auth._key());if(!e){try{const s=await p_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ls.set(this.auth._key(),e)}return this.bypassAuthState||Ls.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function p_(t,e){const n=__(e),s=m_(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function g_(t,e){Ls.set(t._key(),e)}function m_(t){return gt(t._redirectPersistence)}function __(t){return Ds(d_,t.config.apiKey,t.name)}async function A_(t,e,n=!1){const s=kn(t),r=a_(s,e),o=await new h_(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const v_=10*60*1e3;class y_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!b_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!iu(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(lt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=v_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Da(e))}saveEventToCache(e){this.cachedEventUids.add(Da(e)),this.lastProcessedEventTime=Date.now()}}function Da(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function b_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iu(t);default:return!1}}/**
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
 */async function w_(t,e={}){return Vt(t,"GET","/v1/projects",e)}/**
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
 */const E_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,I_=/^https?/;async function S_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await w_(t);for(const n of e)try{if(C_(n))return}catch{}Ze(t,"unauthorized-domain")}function C_(t){const e=bi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!I_.test(n))return!1;if(E_.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const T_=new ps(3e4,6e4);function La(){const t=ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function R_(t){return new Promise((e,n)=>{var s,r,i;function o(){La(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{La(),n(lt(t,"network-request-failed"))},timeout:T_.get()})}if(!((r=(s=ut().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=ut().gapi)===null||i===void 0)&&i.load)o();else{const a=ym("iframefcb");return ut()[a]=()=>{gapi.load?o():n(lt(t,"network-request-failed"))},zl(`${vm()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ms=null,e})}let Ms=null;function O_(t){return Ms=Ms||R_(t),Ms}/**
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
 */const P_=new ps(5e3,15e3),k_="__/auth/iframe",x_="emulator/auth/iframe",N_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function L_(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xi(e,x_):`https://${t.config.authDomain}/${k_}`,s={apiKey:e.apiKey,appName:t.name,v:hs},r=D_.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ds(s).slice(1)}`}async function M_(t){const e=await O_(t),n=ut().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:L_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N_,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=lt(t,"network-request-failed"),a=ut().setTimeout(()=>{i(o)},P_.get());function c(){ut().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const B_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},U_=500,F_=600,$_="_blank",H_="http://localhost";class Ma{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function j_(t,e,n,s=U_,r=F_){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},B_),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Ne().toLowerCase();n&&(a=Ul(l)?$_:n),Bl(l)&&(e=e||H_,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[_,v])=>`${p}${_}=${v},`,"");if(lm(l)&&a!=="_self")return V_(e||"",a),new Ma(null);const f=window.open(e||"",a,u);j(f,t,"popup-blocked");try{f.focus()}catch{}return new Ma(f)}function V_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const W_="__/auth/handler",z_="emulator/auth/handler",K_=encodeURIComponent("fac");async function Ba(t,e,n,s,r,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:hs,eventId:r};if(e instanceof Gl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(e instanceof gs){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${K_}=${encodeURIComponent(c)}`:"";return`${G_(t)}?${ds(a).slice(1)}${l}`}function G_({config:t}){return t.emulator?Xi(t,z_):`https://${t.authDomain}/${W_}`}/**
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
 */const qr="webStorageSupport";class q_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zl,this._completeRedirectFn=A_,this._overrideRedirectResult=g_}async _openPopup(e,n,s,r){var i;At((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ba(e,n,s,bi(),r);return j_(e,o,so())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Ba(e,n,s,bi(),r);return Qm(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(At(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await M_(e),s=new y_(e);return n.register("authEvent",r=>(j(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qr,{type:qr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[qr];o!==void 0&&n(!!o),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=S_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vl()||eo()||br()}}const Y_=q_;var Ua="@firebase/auth",Fa="1.6.0";/**
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
 */class J_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Q_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function X_(t){ss(new In("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wl(t)},l=new mm(s,r,i,c);return Sm(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ss(new In("auth-internal",e=>{const n=kn(e.getProvider("auth").getImmediate());return(s=>new J_(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(Ua,Fa,Q_(t)),_n(Ua,Fa,"esm2017")}/**
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
 */const Z_=5*60,eA=wl("authIdTokenMaxAge")||Z_;let $a=null;const tA=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>eA)return;const r=n==null?void 0:n.token;$a!==r&&($a=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ou(t=Pg()){const e=Cl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Im(t,{popupRedirectResolver:Y_,persistence:[o_,qm,Zl]}),s=wl("authTokenSyncURL");if(s){const i=tA(s);jm(n,i,()=>i(n.currentUser)),Hm(n,o=>i(o))}const r=vp("auth");return r&&Cm(n,`http://${r}`),n}function nA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_m({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=lt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",nA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});X_("Browser");var sA="firebase",rA="10.8.0";/**
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
 */_n(sA,rA,"app");const iA=t=>(On("data-v-93aa088f"),t=t(),Pn(),t),oA={class:"top-bar-container"},aA=iA(()=>A("span",{class:"current-user"},null,-1)),cA={__name:"top-bar",setup(t){Pr();const e=()=>{const n=ou();Wm(n)};return(n,s)=>(Q(),ae("div",oA,[aA,A("span",{class:"buttons-wrapper"},[A("button",{onClick:e},"Log out")])]))}},lA=on(cA,[["__scopeId","data-v-93aa088f"]]),uA={},fA=t=>(On("data-v-a88a5f1b"),t=t(),Pn(),t),dA={class:"loading-spinner"},hA=fA(()=>A("div",{class:"spinner"},null,-1)),pA=[hA];function gA(t,e){return Q(),ae("div",dA,pA)}const Ei=on(uA,[["render",gA],["__scopeId","data-v-a88a5f1b"]]);function au(t,e){return function(){return t.apply(e,arguments)}}const{toString:mA}=Object.prototype,{getPrototypeOf:io}=Object,Sr=(t=>e=>{const n=mA.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),dt=t=>(t=t.toLowerCase(),e=>Sr(e)===t),Cr=t=>e=>typeof e===t,{isArray:Nn}=Array,cs=Cr("undefined");function _A(t){return t!==null&&!cs(t)&&t.constructor!==null&&!cs(t.constructor)&&ze(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const cu=dt("ArrayBuffer");function AA(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&cu(t.buffer),e}const vA=Cr("string"),ze=Cr("function"),lu=Cr("number"),Tr=t=>t!==null&&typeof t=="object",yA=t=>t===!0||t===!1,Bs=t=>{if(Sr(t)!=="object")return!1;const e=io(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},bA=dt("Date"),wA=dt("File"),EA=dt("Blob"),IA=dt("FileList"),SA=t=>Tr(t)&&ze(t.pipe),CA=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||ze(t.append)&&((e=Sr(t))==="formdata"||e==="object"&&ze(t.toString)&&t.toString()==="[object FormData]"))},TA=dt("URLSearchParams"),RA=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _s(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,r;if(typeof t!="object"&&(t=[t]),Nn(t))for(s=0,r=t.length;s<r;s++)e.call(null,t[s],s,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(s=0;s<o;s++)a=i[s],e.call(null,t[a],a,t)}}function uu(t,e){e=e.toLowerCase();const n=Object.keys(t);let s=n.length,r;for(;s-- >0;)if(r=n[s],e===r.toLowerCase())return r;return null}const fu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,du=t=>!cs(t)&&t!==fu;function Ii(){const{caseless:t}=du(this)&&this||{},e={},n=(s,r)=>{const i=t&&uu(e,r)||r;Bs(e[i])&&Bs(s)?e[i]=Ii(e[i],s):Bs(s)?e[i]=Ii({},s):Nn(s)?e[i]=s.slice():e[i]=s};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&_s(arguments[s],n);return e}const OA=(t,e,n,{allOwnKeys:s}={})=>(_s(e,(r,i)=>{n&&ze(r)?t[i]=au(r,n):t[i]=r},{allOwnKeys:s}),t),PA=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),kA=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},xA=(t,e,n,s)=>{let r,i,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),i=r.length;i-- >0;)o=r[i],(!s||s(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&io(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},NA=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},DA=t=>{if(!t)return null;if(Nn(t))return t;let e=t.length;if(!lu(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},LA=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&io(Uint8Array)),MA=(t,e)=>{const s=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=s.next())&&!r.done;){const i=r.value;e.call(t,i[0],i[1])}},BA=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},UA=dt("HTMLFormElement"),FA=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),Ha=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),$A=dt("RegExp"),hu=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};_s(n,(r,i)=>{let o;(o=e(r,i,t))!==!1&&(s[i]=o||r)}),Object.defineProperties(t,s)},HA=t=>{hu(t,(e,n)=>{if(ze(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(ze(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},jA=(t,e)=>{const n={},s=r=>{r.forEach(i=>{n[i]=!0})};return Nn(t)?s(t):s(String(t).split(e)),n},VA=()=>{},WA=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Yr="abcdefghijklmnopqrstuvwxyz",ja="0123456789",pu={DIGIT:ja,ALPHA:Yr,ALPHA_DIGIT:Yr+Yr.toUpperCase()+ja},zA=(t=16,e=pu.ALPHA_DIGIT)=>{let n="";const{length:s}=e;for(;t--;)n+=e[Math.random()*s|0];return n};function KA(t){return!!(t&&ze(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const GA=t=>{const e=new Array(10),n=(s,r)=>{if(Tr(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[r]=s;const i=Nn(s)?[]:{};return _s(s,(o,a)=>{const c=n(o,r+1);!cs(c)&&(i[a]=c)}),e[r]=void 0,i}}return s};return n(t,0)},qA=dt("AsyncFunction"),YA=t=>t&&(Tr(t)||ze(t))&&ze(t.then)&&ze(t.catch),w={isArray:Nn,isArrayBuffer:cu,isBuffer:_A,isFormData:CA,isArrayBufferView:AA,isString:vA,isNumber:lu,isBoolean:yA,isObject:Tr,isPlainObject:Bs,isUndefined:cs,isDate:bA,isFile:wA,isBlob:EA,isRegExp:$A,isFunction:ze,isStream:SA,isURLSearchParams:TA,isTypedArray:LA,isFileList:IA,forEach:_s,merge:Ii,extend:OA,trim:RA,stripBOM:PA,inherits:kA,toFlatObject:xA,kindOf:Sr,kindOfTest:dt,endsWith:NA,toArray:DA,forEachEntry:MA,matchAll:BA,isHTMLForm:UA,hasOwnProperty:Ha,hasOwnProp:Ha,reduceDescriptors:hu,freezeMethods:HA,toObjectSet:jA,toCamelCase:FA,noop:VA,toFiniteNumber:WA,findKey:uu,global:fu,isContextDefined:du,ALPHABET:pu,generateString:zA,isSpecCompliantForm:KA,toJSONObject:GA,isAsyncFn:qA,isThenable:YA};function te(t,e,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r)}w.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const gu=te.prototype,mu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{mu[t]={value:t}});Object.defineProperties(te,mu);Object.defineProperty(gu,"isAxiosError",{value:!0});te.from=(t,e,n,s,r,i)=>{const o=Object.create(gu);return w.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),te.call(o,t.message,e,n,s,r),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const JA=null;function Si(t){return w.isPlainObject(t)||w.isArray(t)}function _u(t){return w.endsWith(t,"[]")?t.slice(0,-2):t}function Va(t,e,n){return t?t.concat(e).map(function(r,i){return r=_u(r),!n&&i?"["+r+"]":r}).join(n?".":""):e}function QA(t){return w.isArray(t)&&!t.some(Si)}const XA=w.toFlatObject(w,{},null,function(e){return/^is[A-Z]/.test(e)});function Rr(t,e,n){if(!w.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=w.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,N){return!w.isUndefined(N[b])});const s=n.metaTokens,r=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(e);if(!w.isFunction(r))throw new TypeError("visitor must be a function");function l(v){if(v===null)return"";if(w.isDate(v))return v.toISOString();if(!c&&w.isBlob(v))throw new te("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(v)||w.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function u(v,b,N){let O=v;if(v&&!N&&typeof v=="object"){if(w.endsWith(b,"{}"))b=s?b:b.slice(0,-2),v=JSON.stringify(v);else if(w.isArray(v)&&QA(v)||(w.isFileList(v)||w.endsWith(b,"[]"))&&(O=w.toArray(v)))return b=_u(b),O.forEach(function(B,G){!(w.isUndefined(B)||B===null)&&e.append(o===!0?Va([b],G,i):o===null?b:b+"[]",l(B))}),!1}return Si(v)?!0:(e.append(Va(N,b,i),l(v)),!1)}const f=[],p=Object.assign(XA,{defaultVisitor:u,convertValue:l,isVisitable:Si});function _(v,b){if(!w.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(v),w.forEach(v,function(O,M){(!(w.isUndefined(O)||O===null)&&r.call(e,O,w.isString(M)?M.trim():M,b,p))===!0&&_(O,b?b.concat(M):[M])}),f.pop()}}if(!w.isObject(t))throw new TypeError("data must be an object");return _(t),e}function Wa(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function oo(t,e){this._pairs=[],t&&Rr(t,this,e)}const Au=oo.prototype;Au.append=function(e,n){this._pairs.push([e,n])};Au.toString=function(e){const n=e?function(s){return e.call(this,s,Wa)}:Wa;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function ZA(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function vu(t,e,n){if(!e)return t;const s=n&&n.encode||ZA,r=n&&n.serialize;let i;if(r?i=r(e,n):i=w.isURLSearchParams(e)?e.toString():new oo(e,n).toString(s),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class za{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){w.forEach(this.handlers,function(s){s!==null&&e(s)})}}const yu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ev=typeof URLSearchParams<"u"?URLSearchParams:oo,tv=typeof FormData<"u"?FormData:null,nv=typeof Blob<"u"?Blob:null,sv={isBrowser:!0,classes:{URLSearchParams:ev,FormData:tv,Blob:nv},protocols:["http","https","file","blob","url","data"]},bu=typeof window<"u"&&typeof document<"u",rv=(t=>bu&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),iv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ov=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:bu,hasStandardBrowserEnv:rv,hasStandardBrowserWebWorkerEnv:iv},Symbol.toStringTag,{value:"Module"})),ct={...ov,...sv};function av(t,e){return Rr(t,new ct.classes.URLSearchParams,Object.assign({visitor:function(n,s,r,i){return ct.isNode&&w.isBuffer(n)?(this.append(s,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function cv(t){return w.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function lv(t){const e={},n=Object.keys(t);let s;const r=n.length;let i;for(s=0;s<r;s++)i=n[s],e[i]=t[i];return e}function wu(t){function e(n,s,r,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&w.isArray(r)?r.length:o,c?(w.hasOwnProp(r,o)?r[o]=[r[o],s]:r[o]=s,!a):((!r[o]||!w.isObject(r[o]))&&(r[o]=[]),e(n,s,r[o],i)&&w.isArray(r[o])&&(r[o]=lv(r[o])),!a)}if(w.isFormData(t)&&w.isFunction(t.entries)){const n={};return w.forEachEntry(t,(s,r)=>{e(cv(s),r,n,0)}),n}return null}function uv(t,e,n){if(w.isString(t))try{return(e||JSON.parse)(t),w.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(t)}const ao={transitional:yu,adapter:["xhr","http"],transformRequest:[function(e,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,i=w.isObject(e);if(i&&w.isHTMLForm(e)&&(e=new FormData(e)),w.isFormData(e))return r?JSON.stringify(wu(e)):e;if(w.isArrayBuffer(e)||w.isBuffer(e)||w.isStream(e)||w.isFile(e)||w.isBlob(e))return e;if(w.isArrayBufferView(e))return e.buffer;if(w.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return av(e,this.formSerializer).toString();if((a=w.isFileList(e))||s.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Rr(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||r?(n.setContentType("application/json",!1),uv(e)):e}],transformResponse:[function(e){const n=this.transitional||ao.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(e&&w.isString(e)&&(s&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?te.from(a,te.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ct.classes.FormData,Blob:ct.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};w.forEach(["delete","get","head","post","put","patch"],t=>{ao.headers[t]={}});const co=ao,fv=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),dv=t=>{const e={};let n,s,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),s=o.substring(r+1).trim(),!(!n||e[n]&&fv[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},Ka=Symbol("internals");function Un(t){return t&&String(t).trim().toLowerCase()}function Us(t){return t===!1||t==null?t:w.isArray(t)?t.map(Us):String(t)}function hv(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}const pv=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Jr(t,e,n,s,r){if(w.isFunction(s))return s.call(this,e,n);if(r&&(e=n),!!w.isString(e)){if(w.isString(s))return e.indexOf(s)!==-1;if(w.isRegExp(s))return s.test(e)}}function gv(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function mv(t,e){const n=w.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(r,i,o){return this[s].call(this,e,r,i,o)},configurable:!0})})}class Or{constructor(e){e&&this.set(e)}set(e,n,s){const r=this;function i(a,c,l){const u=Un(c);if(!u)throw new Error("header name must be a non-empty string");const f=w.findKey(r,u);(!f||r[f]===void 0||l===!0||l===void 0&&r[f]!==!1)&&(r[f||c]=Us(a))}const o=(a,c)=>w.forEach(a,(l,u)=>i(l,u,c));return w.isPlainObject(e)||e instanceof this.constructor?o(e,n):w.isString(e)&&(e=e.trim())&&!pv(e)?o(dv(e),n):e!=null&&i(n,e,s),this}get(e,n){if(e=Un(e),e){const s=w.findKey(this,e);if(s){const r=this[s];if(!n)return r;if(n===!0)return hv(r);if(w.isFunction(n))return n.call(this,r,s);if(w.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Un(e),e){const s=w.findKey(this,e);return!!(s&&this[s]!==void 0&&(!n||Jr(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let r=!1;function i(o){if(o=Un(o),o){const a=w.findKey(s,o);a&&(!n||Jr(s,s[a],a,n))&&(delete s[a],r=!0)}}return w.isArray(e)?e.forEach(i):i(e),r}clear(e){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const i=n[s];(!e||Jr(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){const n=this,s={};return w.forEach(this,(r,i)=>{const o=w.findKey(s,i);if(o){n[o]=Us(r),delete n[i];return}const a=e?gv(i):String(i).trim();a!==i&&delete n[i],n[a]=Us(r),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return w.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=e&&w.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(r=>s.set(r)),s}static accessor(e){const s=(this[Ka]=this[Ka]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=Un(o);s[a]||(mv(r,o),s[a]=!0)}return w.isArray(e)?e.forEach(i):i(e),this}}Or.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);w.reduceDescriptors(Or.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(s){this[n]=s}}});w.freezeMethods(Or);const _t=Or;function Qr(t,e){const n=this||co,s=e||n,r=_t.from(s.headers);let i=s.data;return w.forEach(t,function(a){i=a.call(n,i,r.normalize(),e?e.status:void 0)}),r.normalize(),i}function Eu(t){return!!(t&&t.__CANCEL__)}function As(t,e,n){te.call(this,t??"canceled",te.ERR_CANCELED,e,n),this.name="CanceledError"}w.inherits(As,te,{__CANCEL__:!0});function _v(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new te("Request failed with status code "+n.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Av=ct.hasStandardBrowserEnv?{write(t,e,n,s,r,i){const o=[t+"="+encodeURIComponent(e)];w.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),w.isString(s)&&o.push("path="+s),w.isString(r)&&o.push("domain="+r),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function vv(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function yv(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Iu(t,e){return t&&!vv(e)?yv(t,e):e}const bv=ct.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let s;function r(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=r(window.location.href),function(o){const a=w.isString(o)?r(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}();function wv(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Ev(t,e){t=t||10;const n=new Array(t),s=new Array(t);let r=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=s[i];o||(o=l),n[r]=c,s[r]=l;let f=i,p=0;for(;f!==r;)p+=n[f++],f=f%t;if(r=(r+1)%t,r===i&&(i=(i+1)%t),l-o<e)return;const _=u&&l-u;return _?Math.round(p*1e3/_):void 0}}function Ga(t,e){let n=0;const s=Ev(50,250);return r=>{const i=r.loaded,o=r.lengthComputable?r.total:void 0,a=i-n,c=s(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:r};u[e?"download":"upload"]=!0,t(u)}}const Iv=typeof XMLHttpRequest<"u",Sv=Iv&&function(t){return new Promise(function(n,s){let r=t.data;const i=_t.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let u;if(w.isFormData(r)){if(ct.hasStandardBrowserEnv||ct.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((u=i.getContentType())!==!1){const[b,...N]=u?u.split(";").map(O=>O.trim()).filter(Boolean):[];i.setContentType([b||"multipart/form-data",...N].join("; "))}}let f=new XMLHttpRequest;if(t.auth){const b=t.auth.username||"",N=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(b+":"+N))}const p=Iu(t.baseURL,t.url);f.open(t.method.toUpperCase(),vu(p,t.params,t.paramsSerializer),!0),f.timeout=t.timeout;function _(){if(!f)return;const b=_t.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),O={data:!o||o==="text"||o==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:b,config:t,request:f};_v(function(B){n(B),l()},function(B){s(B),l()},O),f=null}if("onloadend"in f?f.onloadend=_:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(_)},f.onabort=function(){f&&(s(new te("Request aborted",te.ECONNABORTED,t,f)),f=null)},f.onerror=function(){s(new te("Network Error",te.ERR_NETWORK,t,f)),f=null},f.ontimeout=function(){let N=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const O=t.transitional||yu;t.timeoutErrorMessage&&(N=t.timeoutErrorMessage),s(new te(N,O.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,t,f)),f=null},ct.hasStandardBrowserEnv&&(a&&w.isFunction(a)&&(a=a(t)),a||a!==!1&&bv(p))){const b=t.xsrfHeaderName&&t.xsrfCookieName&&Av.read(t.xsrfCookieName);b&&i.set(t.xsrfHeaderName,b)}r===void 0&&i.setContentType(null),"setRequestHeader"in f&&w.forEach(i.toJSON(),function(N,O){f.setRequestHeader(O,N)}),w.isUndefined(t.withCredentials)||(f.withCredentials=!!t.withCredentials),o&&o!=="json"&&(f.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&f.addEventListener("progress",Ga(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",Ga(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=b=>{f&&(s(!b||b.type?new As(null,t,f):b),f.abort(),f=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const v=wv(p);if(v&&ct.protocols.indexOf(v)===-1){s(new te("Unsupported protocol "+v+":",te.ERR_BAD_REQUEST,t));return}f.send(r||null)})},Ci={http:JA,xhr:Sv};w.forEach(Ci,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const qa=t=>`- ${t}`,Cv=t=>w.isFunction(t)||t===null||t===!1,Su={getAdapter:t=>{t=w.isArray(t)?t:[t];const{length:e}=t;let n,s;const r={};for(let i=0;i<e;i++){n=t[i];let o;if(s=n,!Cv(n)&&(s=Ci[(o=String(n)).toLowerCase()],s===void 0))throw new te(`Unknown adapter '${o}'`);if(s)break;r[o||"#"+i]=s}if(!s){const i=Object.entries(r).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(qa).join(`
`):" "+qa(i[0]):"as no adapter specified";throw new te("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return s},adapters:Ci};function Xr(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new As(null,t)}function Ya(t){return Xr(t),t.headers=_t.from(t.headers),t.data=Qr.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Su.getAdapter(t.adapter||co.adapter)(t).then(function(s){return Xr(t),s.data=Qr.call(t,t.transformResponse,s),s.headers=_t.from(s.headers),s},function(s){return Eu(s)||(Xr(t),s&&s.response&&(s.response.data=Qr.call(t,t.transformResponse,s.response),s.response.headers=_t.from(s.response.headers))),Promise.reject(s)})}const Ja=t=>t instanceof _t?t.toJSON():t;function Cn(t,e){e=e||{};const n={};function s(l,u,f){return w.isPlainObject(l)&&w.isPlainObject(u)?w.merge.call({caseless:f},l,u):w.isPlainObject(u)?w.merge({},u):w.isArray(u)?u.slice():u}function r(l,u,f){if(w.isUndefined(u)){if(!w.isUndefined(l))return s(void 0,l,f)}else return s(l,u,f)}function i(l,u){if(!w.isUndefined(u))return s(void 0,u)}function o(l,u){if(w.isUndefined(u)){if(!w.isUndefined(l))return s(void 0,l)}else return s(void 0,u)}function a(l,u,f){if(f in e)return s(l,u);if(f in t)return s(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>r(Ja(l),Ja(u),!0)};return w.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=c[u]||r,p=f(t[u],e[u],u);w.isUndefined(p)&&f!==a||(n[u]=p)}),n}const Cu="1.6.7",lo={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{lo[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const Qa={};lo.transitional=function(e,n,s){function r(i,o){return"[Axios v"+Cu+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return(i,o,a)=>{if(e===!1)throw new te(r(o," has been removed"+(n?" in "+n:"")),te.ERR_DEPRECATED);return n&&!Qa[o]&&(Qa[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function Tv(t,e,n){if(typeof t!="object")throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let r=s.length;for(;r-- >0;){const i=s[r],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new te("option "+i+" must be "+c,te.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new te("Unknown option "+i,te.ERR_BAD_OPTION)}}const Ti={assertOptions:Tv,validators:lo},It=Ti.validators;class tr{constructor(e){this.defaults=e,this.interceptors={request:new za,response:new za}}async request(e,n){try{return await this._request(e,n)}catch(s){if(s instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const i=r.stack?r.stack.replace(/^.+\n/,""):"";s.stack?i&&!String(s.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+i):s.stack=i}throw s}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Cn(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:i}=n;s!==void 0&&Ti.assertOptions(s,{silentJSONParsing:It.transitional(It.boolean),forcedJSONParsing:It.transitional(It.boolean),clarifyTimeoutError:It.transitional(It.boolean)},!1),r!=null&&(w.isFunction(r)?n.paramsSerializer={serialize:r}:Ti.assertOptions(r,{encode:It.function,serialize:It.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&w.merge(i.common,i[n.method]);i&&w.forEach(["delete","get","head","post","put","patch","common"],v=>{delete i[v]}),n.headers=_t.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,p;if(!c){const v=[Ya.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,l),p=v.length,u=Promise.resolve(n);f<p;)u=u.then(v[f++],v[f++]);return u}p=a.length;let _=n;for(f=0;f<p;){const v=a[f++],b=a[f++];try{_=v(_)}catch(N){b.call(this,N);break}}try{u=Ya.call(this,_)}catch(v){return Promise.reject(v)}for(f=0,p=l.length;f<p;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=Cn(this.defaults,e);const n=Iu(e.baseURL,e.url);return vu(n,e.params,e.paramsSerializer)}}w.forEach(["delete","get","head","options"],function(e){tr.prototype[e]=function(n,s){return this.request(Cn(s||{},{method:e,url:n,data:(s||{}).data}))}});w.forEach(["post","put","patch"],function(e){function n(s){return function(i,o,a){return this.request(Cn(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}tr.prototype[e]=n(),tr.prototype[e+"Form"]=n(!0)});const Fs=tr;class uo{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const s=this;this.promise.then(r=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](r);s._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(a=>{s.subscribe(a),i=a}).then(r);return o.cancel=function(){s.unsubscribe(i)},o},e(function(i,o,a){s.reason||(s.reason=new As(i,o,a),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new uo(function(r){e=r}),cancel:e}}}const Rv=uo;function Ov(t){return function(n){return t.apply(null,n)}}function Pv(t){return w.isObject(t)&&t.isAxiosError===!0}const Ri={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ri).forEach(([t,e])=>{Ri[e]=t});const kv=Ri;function Tu(t){const e=new Fs(t),n=au(Fs.prototype.request,e);return w.extend(n,Fs.prototype,e,{allOwnKeys:!0}),w.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Tu(Cn(t,r))},n}const _e=Tu(co);_e.Axios=Fs;_e.CanceledError=As;_e.CancelToken=Rv;_e.isCancel=Eu;_e.VERSION=Cu;_e.toFormData=Rr;_e.AxiosError=te;_e.Cancel=_e.CanceledError;_e.all=function(e){return Promise.all(e)};_e.spread=Ov;_e.isAxiosError=Pv;_e.mergeConfig=Cn;_e.AxiosHeaders=_t;_e.formToJSON=t=>wu(w.isHTMLForm(t)?new FormData(t):t);_e.getAdapter=Su.getAdapter;_e.HttpStatusCode=kv;_e.default=_e;const Me=t=>(On("data-v-c25df89d"),t=t(),Pn(),t),xv={class:"service-container"},Nv={class:"filters-container"},Dv={class:"icon open-close"},Lv={key:0,class:"filtering-pad-content-wrapper basic"},Mv=Me(()=>A("span",{class:"text"}," starting from BTC, ranked by market cap, start analyzing from rank: ",-1)),Bv=Me(()=>A("span",{class:"text"},"number of cryptos to check",-1)),Uv=Me(()=>A("span",{class:"text"},"number of market pairs to check",-1)),Fv={class:"hr-buttons-container"},$v=["onClick"],Hv={class:"text"},jv=Me(()=>A("span",{class:"text"},"market pairs check offset",-1)),Vv=Me(()=>A("span",{class:"text"},"minimum profit margin %",-1)),Wv=Me(()=>A("span",{class:"text"},"maximum profit margin %",-1)),zv=Me(()=>A("span",{class:"text"},"minimum trading volume (USD)",-1)),Kv={class:"bottom-buttons"},Gv=Me(()=>A("span",{class:"text underline"},"Advanced settings",-1)),qv=[Gv],Yv=Me(()=>A("span",{class:"text underline"},"stop",-1)),Jv=[Yv],Qv=Me(()=>A("span",{class:"text"},"Trigger",-1)),Xv={key:0,class:"text-tiny text-red"},Zv={class:"wrap-row"},ey={class:"statistics"},ty={class:"text-tiny"},ny={class:"text-green"},sy={class:"text-tiny"},ry={class:"text text-green"},iy={class:"text-tiny"},oy={class:"text text-green"},ay={key:1,class:"filtering-pad-content-wrapper advanced"},cy=Me(()=>A("span",{class:"text underline"},fe("< basic settings"),-1)),ly=[cy],uy={class:"inputs-wrapper"},fy={class:"advanced-filter-container"},dy={class:"text"},hy={class:"hr-buttons-container"},py=["onClick"],gy={class:"text"},my={class:"advanced-filter-container"},_y={class:"text"},Ay={class:"hr-buttons-container"},vy=["onClick"],yy={class:"text"},by={class:"advanced-filter-container"},wy={class:"text"},Ey={class:"hr-buttons-container"},Iy=Me(()=>A("span",{class:"text"},"SELECT ALL",-1)),Sy=[Iy],Cy=Me(()=>A("span",{class:"text"},"DESELECT ALL",-1)),Ty=[Cy],Ry=["onClick"],Oy={class:"text"},Py=Me(()=>A("span",{class:"text underline"},fe("< basic settings"),-1)),ky=[Py],xy={class:"all-ops"},Ny=Me(()=>A("span",null,"Clear results",-1)),Dy=[Ny],Ly={class:"ops-per-crypto"},My={class:"crypto-section-title"},By=hd('<div class="op-table-headers" data-v-c25df89d><div class="text exchange-link-header" data-v-c25df89d> Buy from </div><div class="text price-header" data-v-c25df89d> price </div><div class="text volume-header" data-v-c25df89d> 24h volume </div><div class="text profit-percentage-header" data-v-c25df89d> gap </div><div class="text volume-header" data-v-c25df89d> 24h volume </div><div class="text price-header" data-v-c25df89d> price </div><div class="text exchange-link-header" data-v-c25df89d> Sell to </div></div>',1),Uy={class:"op"},Fy=["onClick"],$y={class:"text indicator price"},Hy={class:"text indicator volume"},jy={class:"text text-green indicator profit-percentage"},Vy={class:"text indicator volume"},Wy={class:"text indicator price"},zy=["onClick"],Xa="https://data.sirbofi.com",Za="Couldn't access API.",Ky={__name:"HomeView",setup(t){function e(Z){window.open(Z,"_blank")}Fc(()=>{window.addEventListener("keydown",Z=>{Z.key==="Enter"&&ne()})});const n={basic:"basic",advanced:"advanced"},s={spot:"spot",perpetual:"perpetual"},r=oe(!1),i=oe(n.basic);function o(Z){i.value=Z}const a=oe([]),c=["binance","binance-us","binance-tr","coinbase","coinbase-exchange","btcturk-pro","phemex","bitvavo","bitkub","coinex","indodax","coinmetro","kraken","kucoin","bitstamp","okx","gate-io","bitget","crypto-com-exchange","gemini","lbank","mexc","bybit","bitrue","probit-exchange","Toobit","xt","pionex","biconomy","bingx","latoken","whitebit","weex","coinstore","indodax","btse","dydx","pancakeswap-v2","uniswap-v3","uniswap-v2","kine-protocol-polygon","apex-protocol","dodo"],l=[s.spot,s.perpetual],u={USDT:825,BTC:1,USD:2781,TUSD:2563,BUSD:4687,EUR:2790,GBP:2791},f=oe(0),p=oe(null);function _(){Oe.value={},p.value=null,f.value=0,he.value=0,Ae.value=0,Ce.value=0}const v=oe(1),b=oe(10),N=[20,50,100,1e3],O=oe(1e3),M=oe(1),B=oe(2),G=oe(12),Y=oe(5e3),$=oe(null),ie=oe([]),W=oe([]),U=oe(!1),he=oe(0),Ae=oe(0),Ce=oe(0),Be=oe(200),tt={listingsEndpoint:()=>{const Z=Xa+"/api/listings",D={start:v.value||1,limit:b.value||20};return Z+"?"+new URLSearchParams(D).toString()},marketPairsEndpoint:(Z,D=null)=>{const g=Xa+"/api/market-pairs",S={slug:Z,start:M.value||1,limit:O.value||20};$.value&&(S.category=$.value),D&&(S.quoteCurrencyId=u[D]);const R=g+"?"+new URLSearchParams(S).toString();return console.log(R),R}};function ve(Z){return Intl.NumberFormat().format(Z)}function X(Z,D){D.includes(Z)?D.splice(D.indexOf(Z),1):D.push(Z)}function ce(){U.value=!1,p.value=null}async function ne(){p.value=null,U.value=!0,f.value=0;const Z=tt.listingsEndpoint();await _e.get(Z).then(D=>{if(D.status===429)return p.value="too many requests",U.value=!1,!1;a.value=D.data.data.cryptoCurrencyList,Pe()}).catch(D=>{console.log(D),p.value=Za,U.value=!1})}async function Ke(Z){const D=W.value.length>0?W.value:[null];let g=[];for(const S of D){const R=tt.marketPairsEndpoint(Z,S);await _e.get(R).then(k=>{var q,ee,d;if(k.data.status===429)return p.value="too many requests",U.value=!1,!1;if(k.data.status.error_code==="500")return p.value="server gave err 500. could be overloaded",U.value=!1,!1;((d=(ee=(q=k.data)==null?void 0:q.data)==null?void 0:ee.marketPairs)==null?void 0:d.length)>0&&g.push(...k.data.data.marketPairs)}).catch(k=>{console.log(k),p.value=Za,U.value=!1})}return[...new Set(g)]}function nt(Z,D){return Ae.value++,((D.price-Z.price)/Z.price*100).toFixed(2)}const Oe=oe({});async function Pe(){let Z={};for(const D of a.value){if(U.value===!1)break;await Ke(D.slug).then(g=>{var R;if(!g)return;let S=[];for(const k of g)k.volumeUsd>Y.value&&(!Ge.value||ie.value.includes(k.exchangeSlug))&&k.isVerified&&!k.poorAuditStatus&&S.push(k);for(let k=0;k<S.length;k++){for(let q=k+1;q<S.length;q++){let ee=S[k],d=S[q],h=ee.price<d.price?ee:d,m=ee.price>d.price?ee:d,E=Number(nt(h,m));if(E>B.value&&E<G.value&&(Z[D.slug]||(Z[D.slug]=[]),Z[D.slug].push({buy_from_exchange:h.exchangeSlug,buy_from_price:h.price,buy_from_volume:ve(h.volumeUsd.toFixed(0)),buy_link:h.marketUrl,crypto:D.slug,potential_profit:E,sell_to_exchange:m.exchangeSlug,sell_to_price:m.price,sell_to_volume:ve(m.volumeUsd.toFixed(0)),sell_link:m.marketUrl}),f.value++,f.value>=Be.value&&(U.value=!1,p.value="Illogical amount of results! Stopped search to protect performance. You need more strict filters.")),U.value===!1)break}if(he.value++,(R=Z[D.slug])==null||R.sort((q,ee)=>ee.potential_profit-q.potential_profit),U.value===!1)break}}),Oe.value={...Z},Ce.value++}U.value=!1}const Ge=Se(()=>ie.value.length>0),st=Se(()=>!!$.value);return(Z,D)=>(Q(),ae("main",null,[ye(lA),A("div",xv,[A("div",Nv,[A("button",{class:"hide-filters-button",onClick:D[0]||(D[0]=g=>r.value=!r.value)},[A("span",Dv,fe(r.value?">":"<️"),1)]),A("div",{class:Ie({"pad filtering-pad":!0,hidden:r.value})},[i.value===n.basic?(Q(),ae("div",Lv,[A("div",{class:Ie({"inputs-wrapper":!0,disabled:U.value})},[Mv,Tt(A("input",{type:"number",placeholder:"rank","onUpdate:modelValue":D[1]||(D[1]=g=>v.value=g)},null,512),[[Pt,v.value]]),Bv,Tt(A("input",{type:"number",placeholder:"Number","onUpdate:modelValue":D[2]||(D[2]=g=>b.value=g)},null,512),[[Pt,b.value]]),Uv,A("div",Fv,[(Q(),ae(ke,null,Kt(N,g=>A("button",{class:Ie({"toggle-button":!0,selected:O.value===g}),onClick:S=>O.value=g},[A("span",Hv,fe(g),1)],10,$v)),64))]),jv,Tt(A("input",{type:"number",placeholder:"offset","onUpdate:modelValue":D[3]||(D[3]=g=>M.value=g)},null,512),[[Pt,M.value]]),Vv,Tt(A("input",{type:"number",placeholder:"profit %","onUpdate:modelValue":D[4]||(D[4]=g=>B.value=g)},null,512),[[Pt,B.value]]),Wv,Tt(A("input",{type:"number",placeholder:"profit %","onUpdate:modelValue":D[5]||(D[5]=g=>G.value=g)},null,512),[[Pt,G.value]]),zv,Tt(A("input",{type:"number",placeholder:"minimum trading volume","onUpdate:modelValue":D[6]||(D[6]=g=>Y.value=g)},null,512),[[Pt,Y.value]])],2),A("span",Kv,[U.value?je("",!0):(Q(),ae("button",{key:0,class:"bones",onClick:D[7]||(D[7]=g=>o(n.advanced))},qv)),U.value?(Q(),ae("button",{key:1,class:"bones",onClick:D[8]||(D[8]=g=>ce())},Jv)):je("",!0),A("button",{onClick:ne,class:Ie({disabled:U.value})},[U.value?(Q(),Ks(Ei,{key:0})):je("",!0),Qv],2)]),p.value?(Q(),ae("span",Xv,fe(p.value),1)):je("",!0),A("div",Zv,[A("div",ey,[A("span",ty,[Ve(" number of price comparisons: "),A("span",ny,fe(ve(Ae.value)),1)]),A("span",sy,[Ve(" number of cryptos checked: "),A("span",ry,fe(ve(Ce.value)),1)]),A("span",iy,[Ve(" number of results: "),A("span",oy,fe(ve(f.value)),1)])])])])):je("",!0),i.value===n.advanced?(Q(),ae("div",ay,[A("button",{class:"back bones",onClick:D[9]||(D[9]=g=>o(n.basic))},ly),A("div",uy,[A("div",fy,[A("span",dy,[Ve(" Filter trading categories: "),A("span",{class:Ie({disabled:!st.value,"text-green":st.value})},fe(st.value?"enabled":"disabled"),3)]),A("div",hy,[(Q(),ae(ke,null,Kt(l,g=>A("button",{onClick:S=>$.value=$.value===g?null:g,class:Ie({"toggle-button":!0,selected:$.value===g})},[A("span",gy,fe(g),1)],10,py)),64))])]),A("div",my,[A("span",_y,[Ve(" Filter by trading pair quote symbol: "),A("span",{class:Ie({disabled:W.value.length===0,"text-green":W.value.length>0})},fe(W.value.length>0?"enabled":"disabled (compares all possible trading pairs)"),3)]),A("div",Ay,[(Q(!0),ae(ke,null,Kt(Object.keys(u),g=>(Q(),ae("button",{onClick:S=>X(g,W.value),class:Ie({"toggle-button":!0,selected:W.value.includes(g)})},[A("span",yy,fe(g),1)],10,vy))),256))])]),A("div",by,[A("span",wy,[Ve(" Filter trustworthy exchanges: "),A("span",{class:Ie({disabled:!Ge.value,"text-green":Ge.value})},fe(Ge.value?"enabled":"disabled (allows over 600 exchanges)"),3)]),A("div",Ey,[ie.value.length!==c.length?(Q(),ae("button",{key:0,onClick:D[10]||(D[10]=g=>ie.value=[...c]),class:Ie({"toggle-button bones":!0})},Sy)):(Q(),ae("button",{key:1,onClick:D[11]||(D[11]=g=>ie.value=[]),class:Ie({"toggle-button bones":!0})},Ty)),(Q(),ae(ke,null,Kt(c,g=>A("button",{onClick:S=>X(g,ie.value),class:Ie({"toggle-button":!0,selected:ie.value.includes(g)})},[A("span",Oy,fe(g),1)],10,Ry)),64))])])]),A("button",{class:"back bones",onClick:D[12]||(D[12]=g=>o(n.basic))},ky)])):je("",!0)],2)]),A("div",xy,[Object.keys(Oe.value).length?(Q(),ae("button",{key:0,class:"clear-results",onClick:_},Dy)):je("",!0),(Q(!0),ae(ke,null,Kt(Object.keys(Oe.value),g=>(Q(),ae("div",Ly,[A("h2",My,fe(g),1),By,(Q(!0),ae(ke,null,Kt(Oe.value[g],S=>(Q(),ae("div",Uy,[A("button",{class:"text exchange-link",onClick:R=>e(S.buy_link)},fe(S.buy_from_exchange),9,Fy),A("div",$y,fe(ve(S.buy_from_price))+" $ ",1),A("div",Hy,fe(S.buy_from_volume)+" $ ",1),A("div",jy," +"+fe(S.potential_profit)+" % ",1),A("div",Vy,fe(S.sell_to_volume)+" $ ",1),A("div",Wy,fe(ve(S.sell_to_price))+" $ ",1),A("button",{class:"text exchange-link",onClick:R=>e(S.sell_link)},fe(S.sell_to_exchange),9,zy)]))),256))]))),256))])])]))}},Gy=on(Ky,[["__scopeId","data-v-c25df89d"]]),Ru=t=>(On("data-v-2c4053e0"),t=t(),Pn(),t),qy={class:"main-container"},Yy={class:"top-buttons-wrapper"},Jy=Ru(()=>A("button",null," Subscribe ",-1)),Qy={class:"login-pad-container"},Xy={class:"pad login-pad"},Zy={class:"login-pad-content-wrapper"},eb=Ru(()=>A("svg",{class:"logo",xmlns:"http://www.w3.org/2000/svg",width:"162",height:"256",viewBox:"0 0 162 256",fill:"none"},[A("path",{d:"M15 110.76L15 240.087L77.4026 239.923L77.4026 110.597L15 110.76Z"}),A("path",{d:"M85.4026 -0.0802917L85.4026 255.933L147.805 256.097L147.805 0.0834427L85.4026 -0.0802917Z"})],-1)),tb={class:"row"},nb={key:0,class:"input-fields"},sb={key:1,class:"buttons-wrapper"},rb={key:0,class:"error"},ib={__name:"Login",setup(t){const e=cp(),n=Pr(),s=Se(()=>n.confirming_user),r=oe(!1),i=oe(!1),o=oe({email:"",password:""});function a(){i.value=!1,r.value=!0,n.signIn(o.value.email,o.value.password).then(c=>{var l;c&&((l=c.data)!=null&&l.uid)?(n.setUserData(c.data),n.setUserLoggedIn(!0),e.push("/")):i.value=!0}).catch(c=>{console.log(c),i.value=!0}).finally(()=>{r.value=!1})}return window.addEventListener("keypress",c=>{c.key==="Enter"&&a()}),(c,l)=>{const u=Ws("router-link");return Q(),ae("div",qy,[A("div",Yy,[ye(u,{to:"/subscription"},{default:Zn(()=>[Jy]),_:1})]),A("div",Qy,[A("div",Xy,[A("div",Zy,[eb,A("div",tb,[s.value?(Q(),Ks(Ei,{key:0})):je("",!0)]),s.value?je("",!0):(Q(),ae("div",nb,[Tt(A("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=f=>o.value.email=f),placeholder:"Email"},null,512),[[Pt,o.value.email]]),Tt(A("input",{type:"password","onUpdate:modelValue":l[1]||(l[1]=f=>o.value.password=f),placeholder:"Key"},null,512),[[Pt,o.value.password]])])),s.value?je("",!0):(Q(),ae("div",sb,[i.value?(Q(),ae("div",rb," Authentication failed ")):je("",!0),A("button",{onClick:a,class:Ie({disabled:r.value})},[r.value?(Q(),Ks(Ei,{key:0})):je("",!0),Ve(" Authenticate ")],2)]))])])])])}}},ob=on(ib,[["__scopeId","data-v-2c4053e0"]]),ab={},Dn=t=>(On("data-v-406117a3"),t=t(),Pn(),t),cb={class:"main-container"},lb={class:"top-buttons-wrapper"},ub=Dn(()=>A("button",null," Connect wallet ",-1)),fb={class:"title-and-options"},db=Dn(()=>A("h1",null,"Choose your plan",-1)),hb={class:"options-container"},pb={class:"option pad space-between"},gb=Dn(()=>A("div",{class:"group flex column"},[A("h2",null," Annual subscription "),A("p",null," Pay once a year and get unlimited access! ")],-1)),mb={class:"group flex space-between align-center"},_b=Dn(()=>A("button",null," Subscribe ",-1)),Ab=Dn(()=>A("p",null,[A("span",{class:"blur"},"299$"),Ve(" / year ")],-1)),vb=Dn(()=>A("div",{class:"option pad space-between"},[A("div",{class:"group flex column"},[A("h2",null,"Premium Access"),A("p",null,"Buy $BOFI once and get unlimited access while holding!")]),A("div",{class:"group flex space-between align-center"},[A("button",null," Check my wallet "),A("p",null,[A("span",{class:"blur"},"4%"),Ve(" of $BOFI supply ")])])],-1));function yb(t,e){const n=Ws("router-link"),s=Ws("RouterLink");return Q(),ae("div",cb,[A("div",lb,[ye(n,{to:"/login"},{default:Zn(()=>[ub]),_:1})]),A("div",fb,[db,A("div",hb,[A("div",pb,[gb,A("div",mb,[ye(s,{to:"/payment"},{default:Zn(()=>[_b]),_:1}),Ab])]),vb])])])}const bb=on(ab,[["render",yb],["__scopeId","data-v-406117a3"]]),Ou="data:image/x-icon;base64,AAABAAEAAAAAAAEAIAB1CwAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAEAAAABAAgGAAAAXHKoZgAAAAFzUkdCAK7OHOkAAAsvSURBVHhe7dztzR1JEYbhmQzIAEJhMyAEkwGZEMKKEMjAoUAGm8EgSy8fWmz3rGaq/XT19Ur+5XZ1VT323ffRkXwefmzgfzZwXdfPx3F8ariUX47j+PLrWz+fz/P8c8O5vzvSudvA5v3+BhoDYBT9FwD8NDrU7fcBoFuiD+cBgIcLXOyPA8BigVW3CwDVG86qDwBZefzwbgDgh0cwtQEAmLru/MsAID+jNzsEgDe32aAWADQI8TeMAAC/YVk7HAWAHVL+74wAsFfew2kBYLiiVgcAoFWcz4cBgOc7XKkCAKyU1oReAWDCkoOuAICgMBJaAYCEFOb1AADzdr3ETQCwREyvNQkAr62yRyEA6JHj3SkA4O6mNjkHAJsE/TEmAOyV93BaABiuqNUBAGgV5/NhAOD5DleqAAArpTWhVwCYsOSgKwAgKIyEVgAgIYV5PQDAvF0vcRMALBHTa00CwGur7FEIAHrkeHcKALi7qU3OAcAmQfsacK+g704LAHc31eMcA+iR42tTAMBrq1yiEAAsEdO8JgFg3q4TbgKAhBSCegCAoDAmtAIAE5a80hUAsFJaz3sFgOc7bFUBAFrFORwGAIYr2usAAOyVNwDslfdwWgAYrqjVAQBoFefzYQDg+Q5XqgAAK6U1oVcAmLDkoCsAICiMhFYAICGFeT0AwLxdL3ETACwR02tNAsBrq+xRCAB65Hh3CgC4u6lNzgHAJkF/jAkAe+U9nBYAhitqdQAAWsX5fBgAeL7DlSoAwEppTegVACYsOegKAAgKI6EVAEhIYV4PADBv10vcBABLxPRakwDw2ip7FAKAHjnenQIA7m5qk3MAsEnQvgbcK+i70wLA3U31OMcAeuT42hQA8NoqlygEAEvENK9JAJi364SbACAhhaAeACAojAmtAMCEJa90BQCslNbzXgHg+Q5bVQCAVnEOhwGA4Yr2OgAAe+UNAHvlPZwWAIYranUAAFrF+XwYAHi+w5UqAMBKaU3oFQAmLDnoCgAICiOhFQBISGFeDwAwb9dL3AQAS8T0WpMA8NoqexQCgB453p0CAO5uapNzALBJ0B9jAsBeeQ+nBYDhilodAIBWcT4fBgCe73ClCgCwUloTegWACUsOugIAgsJIaAUAElKY1wMAzNv1EjcBwBIxvdYkALy2yh6FAKBHjnenAIC7m9rkHABsErSvAfcK+u60AHB3Uz3OMYAeOb42BQC8tsolCgHAEjHNaxIA5u064SYASEghqAcACApjQisAMGHJK10BACul9bxXAHi+w1YVAKBVnMNhAGC4or0OAMBeeQPAXnkPpwWA4YpaHQCAVnE+HwYAnu9wpQoAsFJaE3oFgAlLDroCAILCSGgFABJSmNcDAMzb9RI3AcASMb3WJAC8tsoehQCgR453pwCAu5va5BwAbBL0x5gAsFfew2kBYLiiVgcAoFWcz4cBgOc7XKkCAKyU1oReAWDCkoOuAICgMBJaAYCEFOb1AADzdr3ETQCwREyvNQkAr62yRyEA6JHj3SkA4O6mNjkHAJsE7WvAvYK+Oy0A3N1Uj3MMoEeOr00BAK+tcolCALBETPOaBIB5u064CQASUgjqAQCCwpjQCgBMWPJKVwDASmk97xUAnu+wVQUAaBXncBgAGK5orwMAsFfeALBX3sNpAWC4olYHAKBVnM+HAYDnO1ypAgCslNaEXgFgwpKDrgCAoDASWgGAhBTm9QAA83a9xE0AsERMrzUJAK+tskchAOiR490pAODupjY5BwCbBP0xJgDslfdwWgAYrqjVAQBoFefzYQDg+Q5XqgAAK6U1oVcAmLDkoCsAICiMhFYAICGFeT0AwLxdL3ETACwR02tNAsBrq+xRCAB65Hh3CgC4u6lNzgHAJkH7GnCvoO9OCwB3N9XjHAPokeNrUwDAa6tcohAALBHTvCYBYN6uE24CgIQUgnoAgKAwJrSyLQCu6/rjhP3++4rfHcfx5VfCz+fzPP/xrUYAICGieT3sDIBr3pqjbvp0nuffAOD/NvAFjD9FJTWhGQCYsOSwKwDg64EAQNhf1NJ2rutiAF/ZsI8ApX/t4oozgLhIyhtiAAzgPxsAgPJ/b3EXAAAAAICPAF//V+AjQBywSxtiAKXrjSzOABgAA2AADOBXG/AtQOR7VdQUAAAAAByHjwBFgAku6yOAjwA+AjAABsAAGEDwQ13WGgNgAAyAATAABsAAyp7Z4MIMgAEwAAbAABgAAwh+qMtaYwAMgAEwAAbAABhA2TMbXJgBMAAGwAAYAANgAMEPdVlrDIABMAAGwAAYAAMoe2aDCzMABsAAGAADYAAMIPihLmuNATAABsAAGAADYABlz2xwYQbAABgAA2AADIABBD/UZa0xAAbAABgAA2AADKDsmQ0uzAAYAANgAAyAATCA4Ie6rDUGwAAYAANgAAyAAZQ9s8GFGQADYAAMgAEwAAYQ/FCXtcYAGAADYAAMgAEwgLJnNrgwA2AADIABMAAGwACCH+qy1hgAA2AADIABMAAGUPbMBhdmAAyAATAABsAAGEDwQ13WGgNgAAyAATAABsAAyp7Z4MIMgAEwAAbAABgAAwh+qMtaYwAMgAEwAAbAABhA2TMbXJgBMAAGwAAYAANgAMEPdVlrDIABMAAGwAAYAAMoe2aDCzMABsAAGAADYAAMIPihLmuNATAABsAAGAADYABlz2xwYQbAABgAA2AADIABBD/UZa0xAAbAABgAA2AADKDsmQ0uzAAYAANgAAyAATCA4Ie6rDUGwAAYAANgAAyAAZQ9s8GFGQADYAAMgAEwAAYQ/FCXtcYAGAADYAAMgAEwgLJnNrgwA2AADIABMAAGwACCH+qy1hgAA2AADIABMAAGUPbMBhdmAAyAATAABsAAGEDwQ13WGgNgAAyAATAABsAAyp7Z4MIMgAEwAAbAABgAAwh+qMtaYwAMgAEwAAbAABhA2TMbXJgBMAAGwAAYAANgAMEPdVlrDIABMAAGwAAYAAMoe2aDCzMABsAAGAADYAAMIPihLmuNATAABsAAGAADYABlz2xwYQbAABgAA2AADIABBD/UZa0xAAbAABgAA2AADKDsmQ0uzAAYAANgAAyAATCA4Ie6rDUGwAAYAANgAAyAAZQ9s8GFGQADYAAMgAEwAAYQ/FCXtcYAGAADYAAMgAEwgLJnNrgwA2AADIABMAAGwACCH+qy1hgAA2AADIABMAAGUPbMBhdmAAyAATAABsAAGEDwQ13WGgNgAAyAATAABsAAyp7Z4MIMgAEwAAbAABgAAwh+qMtaYwAMgAEwAAbAABhA2TMbXJgBMAAGwAAYAANgAMEPdVlrDIABMAAGwAAYAAMoe2aDCzMABsAAGAADYAAMIPihLmuNATAABsAAGAADYABlz2xwYQbAABgAA2AADIABBD/UZa0xAAbAABgAA2AADKDsmQ0uzAAYAANgAAyAATCA4Ie6rDUGwAAYwAYG8MtxHF9+/frnL+d5/v1beLmu6+fjOD6V4Se38OfzPH/Kba+ms7OmbH7V67p+P+ryPM9/js50+30A6Jbo9+fZFgB7xXx/WgC4v6sOJwGgQ4ovzgAALy5zgVIAsEBIM1sEgJnb/vF3AcCPzyCqAwCIiqO8GQAoX/FaFwDAWnk97RYAnm6w2Z8HgGaBDsYBgL3yHk4LAMMVtToAAK3ifD4MADzf4UoVAGCltCb0CgATlhx0BQAEhZHQCgAkpDCvBwCYt+slbgKAJWJ6rUkAeG2VPQoBQI8c704BAHc3tck5ANgk6I8xAWCvvIfTAsBwRa0OAECrOJ8Pc13XX4/j+NNxHH94Xm2pClv+fwD/AreQk2r4xw3vAAAAAElFTkSuQmCC",et=t=>(On("data-v-39e24c88"),t=t(),Pn(),t),wb={class:"main-container"},Eb={class:"payment-section-sides-wrapper"},Ib={class:"payment-wrapper left-side option flex column"},Sb=et(()=>A("img",{src:Ou,alt:"sirbofi-logo",width:"64px"},null,-1)),Cb=et(()=>A("h2",null," 12 months of unlimited access ",-1)),Tb=et(()=>A("ul",null,[A("li",null,"Fastest in the market"),A("li",null,"600+ exchanges"),A("li",null,"9000+ crypto currencies")],-1)),Rb=et(()=>A("button",null,fe("Available plans"),-1)),Ob=et(()=>A("div",{class:"vr"},null,-1)),Pb={class:"payment-wrapper option flex column"},kb=et(()=>A("img",{src:Ou,alt:"sirbofi-logo",style:{opacity:"0"},width:"64px"},null,-1)),xb={class:"group flex column gap-8"},Nb=et(()=>A("h2",null,"Welcome to Sir Bofi!",-1)),Db=et(()=>A("div",null,[Ve("Select payment currency "),A("span",{class:"text-red"},"*")],-1)),Lb={class:"flex row gap-8"},Mb=["onClick"],Bb={class:"group flex column gap-8"},Ub=et(()=>A("div",null," currently selected wallet: ",-1)),Fb={key:0,class:"text-green"},$b={key:1},Hb=et(()=>A("hr",null,null,-1)),jb={key:0},Vb={class:"text-green blur"},Wb=et(()=>A("button",{class:"cta"}," Send payment ",-1)),zb={__name:"Payment",setup(t){const e={eth:"eth",bofi:"bofi"},n=oe(e.ethereum),s=oe(299),r=oe(null),i=o=>{n.value=o};return(o,a)=>{const c=Ws("router-link");return Q(),ae("div",wb,[A("div",Eb,[A("div",Ib,[Sb,Cb,Tb,ye(c,{to:"/subscription"},{default:Zn(()=>[Rb]),_:1})]),Ob,A("div",Pb,[kb,A("div",xb,[Nb,Db,A("div",Lb,[(Q(),ae(ke,null,Kt(e,l=>A("button",{class:Ie(["toggle-button uppercase",{selected:l===n.value}]),onClick:u=>i(e[l])},fe(l),11,Mb)),64))])]),A("div",Bb,[Ub,A("div",null,[r.value?(Q(),ae("span",Fb,fe(r.value),1)):(Q(),ae("button",$b," Connect wallet "))])]),Hb,A("div",{class:Ie(["group flex space-between align-center",{disabled:!n.value}])},[A("h3",null,[n.value?(Q(),ae("div",jb,[Ve(" Send "),A("span",Vb,fe(s.value),1),Ve(" "+fe(n.value.toUpperCase()),1)])):je("",!0)]),Wb],2)])])])}}},Kb=on(zb,[["__scopeId","data-v-39e24c88"]]),nr=op({history:Mh("/sirbofi/"),routes:[{path:"/",name:"home",component:Gy,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:ob},{path:"/subscription",name:"subscription",component:bb},{path:"/payment",name:"payment",component:Kb}]});nr.beforeEach(async(t,e,n)=>{const s=Pr();t.matched.some(r=>r.meta.requiresAuth)?s.getUser.is_logged_in?n():n({name:"login"}):n()});const Pr=ih("AuthenticatorStore",()=>{const t={is_logged_in:!1,data:null};let e=!1,n=null;function s(_){t.data=_}function r(_){t.is_logged_in=_}const i=oe(null),o=Se(()=>t),a=oe(!0),c=async()=>{Tl({apiKey:"AIzaSyD81g-c9f8yiDbC_atW-Pvp_MP7t_aTjKQ",authDomain:"aoft-de2ab.firebaseapp.com",projectId:"aoft-de2ab",storageBucket:"aoft-de2ab.appspot.com",messagingSenderId:"630650035711",appId:"1:630650035711:web:210507afd411fc5cb91bca",measurementId:"G-W5TJ6PV4GV"}),n=ou(),Vm(n,v=>{a.value=!1,v?(s(v),r(!0),nr.push("/")):(r(!1),nr.push("/login"))}),e=!0},l=Se(()=>e),u=Se(()=>n);return{user:t,initAuth:c,error:i,getAuthInitStatus:l,getAuthFromStore:u,setUserData:s,confirming_user:a,setUserLoggedIn:r,getUser:o,signIn:async(_,v)=>(await $m(n,_,v).then(b=>{s(b.user),r(!0)}).catch(b=>{console.log(b.message),b.value=b.message}),t),signOut:async _=>{await _.signOut().then(()=>{r(!1)}).catch(v=>{console.log(v.message),v.value=v.message})}}}),Gb=Zd(),fo=Yd(fp);fo.use(Gb);const qb=Pr();qb.initAuth();fo.use(nr);fo.mount("#app");
