(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ti(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const he={},fn=[],Ve=()=>{},Au=()=>!1,Xr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ri=t=>t.startsWith("onUpdate:"),Ce=Object.assign,Ci=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pu=Object.prototype.hasOwnProperty,ne=(t,e)=>Pu.call(t,e),V=Array.isArray,dn=t=>Qr(t)==="[object Map]",Qa=t=>Qr(t)==="[object Set]",K=t=>typeof t=="function",be=t=>typeof t=="string",Tn=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",Za=t=>(me(t)||K(t))&&K(t.then)&&K(t.catch),ec=Object.prototype.toString,Qr=t=>ec.call(t),Ou=t=>Qr(t).slice(8,-1),tc=t=>Qr(t)==="[object Object]",Ai=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Un=Ti(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ku=/-(\w)/g,lt=Zr(t=>t.replace(ku,(e,n)=>n?n.toUpperCase():"")),xu=/\B([A-Z])/g,Rn=Zr(t=>t.replace(xu,"-$1").toLowerCase()),es=Zr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cs=Zr(t=>t?`on${es(t)}`:""),$t=(t,e)=>!Object.is(t,e),Er=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Dr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Js=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fo;const nc=()=>fo||(fo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pi(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=be(r)?Mu(r):Pi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(be(t)||me(t))return t}const Nu=/;(?![^(]*\))/g,Lu=/:([^]+)/,Du=/\/\*[^]*?\*\//g;function Mu(t){const e={};return t.replace(Du,"").split(Nu).forEach(n=>{if(n){const r=n.split(Lu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Oe(t){let e="";if(be(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const r=Oe(t[n]);r&&(e+=r+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Uu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fu=Ti(Uu);function rc(t){return!!t||t===""}const ge=t=>be(t)?t:t==null?"":V(t)||me(t)&&(t.toString===ec||!K(t.toString))?JSON.stringify(t,sc,2):String(t),sc=(t,e)=>e&&e.__v_isRef?sc(t,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[As(r,i)+" =>"]=s,n),{})}:Qa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>As(n))}:Tn(e)?As(e):me(e)&&!V(e)&&!tc(e)?String(e):e,As=(t,e="")=>{var n;return Tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class ic{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function oc(t){return new ic(t)}function Bu(t,e=je){e&&e.active&&e.effects.push(t)}function ac(){return je}function $u(t){je&&je.cleanups.push(t)}let Gt;class Oi{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Bu(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,tn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(ju(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),nn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Dt,n=Gt;try{return Dt=!0,Gt=this,this._runnings++,ho(this),this.fn()}finally{po(this),this._runnings--,Gt=n,Dt=e}}stop(){var e;this.active&&(ho(this),po(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function ju(t){return t.value}function ho(t){t._trackId++,t._depsLength=0}function po(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)cc(t.deps[e],t);t.deps.length=t._depsLength}}function cc(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Dt=!0,Ys=0;const lc=[];function tn(){lc.push(Dt),Dt=!1}function nn(){const t=lc.pop();Dt=t===void 0?!0:t}function ki(){Ys++}function xi(){for(Ys--;!Ys&&Xs.length;)Xs.shift()()}function uc(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&cc(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Xs=[];function fc(t,e,n){ki();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Xs.push(r.scheduler)))}xi()}const dc=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Mr=new WeakMap,Jt=Symbol(""),Qs=Symbol("");function Be(t,e,n){if(Dt&&Gt){let r=Mr.get(t);r||Mr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=dc(()=>r.delete(n))),uc(Gt,s)}}function pt(t,e,n,r,s,i){const o=Mr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||!Tn(l)&&l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?Ai(n)&&a.push(o.get("length")):(a.push(o.get(Jt)),dn(t)&&a.push(o.get(Qs)));break;case"delete":V(t)||(a.push(o.get(Jt)),dn(t)&&a.push(o.get(Qs)));break;case"set":dn(t)&&a.push(o.get(Jt));break}ki();for(const c of a)c&&fc(c,4);xi()}function Hu(t,e){var n;return(n=Mr.get(t))==null?void 0:n.get(e)}const Vu=Ti("__proto__,__v_isRef,__isVue"),hc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tn)),mo=Wu();function Wu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=re(this);for(let i=0,o=this.length;i<o;i++)Be(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){tn(),ki();const r=re(this)[e].apply(this,n);return xi(),nn(),r}}),t}function zu(t){const e=re(this);return Be(e,"has",t),e.hasOwnProperty(t)}class pc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?sf:vc:i?_c:gc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=V(e);if(!s){if(o&&ne(mo,n))return Reflect.get(mo,n,r);if(n==="hasOwnProperty")return zu}const a=Reflect.get(e,n,r);return(Tn(n)?hc.has(n):Vu(n))||(s||Be(e,"get",n),i)?a:Ee(a)?o&&Ai(n)?a:a.value:me(a)?s?bc(a):rr(a):a}}class mc extends pc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=vn(i);if(!Ur(r)&&!vn(r)&&(i=re(i),r=re(r)),!V(e)&&Ee(i)&&!Ee(r))return c?!1:(i.value=r,!0)}const o=V(e)&&Ai(n)?Number(n)<e.length:ne(e,n),a=Reflect.set(e,n,r,s);return e===re(s)&&(o?$t(r,i)&&pt(e,"set",n,r):pt(e,"add",n,r)),a}deleteProperty(e,n){const r=ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&pt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tn(n)||!hc.has(n))&&Be(e,"has",n),r}ownKeys(e){return Be(e,"iterate",V(e)?"length":Jt),Reflect.ownKeys(e)}}class Ku extends pc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const qu=new mc,Gu=new Ku,Ju=new mc(!0),Ni=t=>t,ts=t=>Reflect.getPrototypeOf(t);function pr(t,e,n=!1,r=!1){t=t.__v_raw;const s=re(t),i=re(e);n||($t(e,i)&&Be(s,"get",e),Be(s,"get",i));const{has:o}=ts(s),a=r?Ni:n?Mi:zn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function mr(t,e=!1){const n=this.__v_raw,r=re(n),s=re(t);return e||($t(t,s)&&Be(r,"has",t),Be(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function gr(t,e=!1){return t=t.__v_raw,!e&&Be(re(t),"iterate",Jt),Reflect.get(t,"size",t)}function go(t){t=re(t);const e=re(this);return ts(e).has.call(e,t)||(e.add(t),pt(e,"add",t,t)),this}function _o(t,e){e=re(e);const n=re(this),{has:r,get:s}=ts(n);let i=r.call(n,t);i||(t=re(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?$t(e,o)&&pt(n,"set",t,e):pt(n,"add",t,e),this}function vo(t){const e=re(this),{has:n,get:r}=ts(e);let s=n.call(e,t);s||(t=re(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&pt(e,"delete",t,void 0),i}function yo(){const t=re(this),e=t.size!==0,n=t.clear();return e&&pt(t,"clear",void 0,void 0),n}function _r(t,e){return function(r,s){const i=this,o=i.__v_raw,a=re(o),c=e?Ni:t?Mi:zn;return!t&&Be(a,"iterate",Jt),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function vr(t,e,n){return function(...r){const s=this.__v_raw,i=re(s),o=dn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?Ni:e?Mi:zn;return!e&&Be(i,"iterate",c?Qs:Jt),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[l(f[0]),l(f[1])]:l(f),done:p}},[Symbol.iterator](){return this}}}}function yt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Yu(){const t={get(i){return pr(this,i)},get size(){return gr(this)},has:mr,add:go,set:_o,delete:vo,clear:yo,forEach:_r(!1,!1)},e={get(i){return pr(this,i,!1,!0)},get size(){return gr(this)},has:mr,add:go,set:_o,delete:vo,clear:yo,forEach:_r(!1,!0)},n={get(i){return pr(this,i,!0)},get size(){return gr(this,!0)},has(i){return mr.call(this,i,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:_r(!0,!1)},r={get(i){return pr(this,i,!0,!0)},get size(){return gr(this,!0)},has(i){return mr.call(this,i,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:_r(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=vr(i,!1,!1),n[i]=vr(i,!0,!1),e[i]=vr(i,!1,!0),r[i]=vr(i,!0,!0)}),[t,n,e,r]}const[Xu,Qu,Zu,ef]=Yu();function Li(t,e){const n=e?t?ef:Zu:t?Qu:Xu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ne(n,s)&&s in r?n:r,s,i)}const tf={get:Li(!1,!1)},nf={get:Li(!1,!0)},rf={get:Li(!0,!1)},gc=new WeakMap,_c=new WeakMap,vc=new WeakMap,sf=new WeakMap;function of(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function af(t){return t.__v_skip||!Object.isExtensible(t)?0:of(Ou(t))}function rr(t){return vn(t)?t:Di(t,!1,qu,tf,gc)}function yc(t){return Di(t,!1,Ju,nf,_c)}function bc(t){return Di(t,!0,Gu,rf,vc)}function Di(t,e,n,r,s){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=af(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Mt(t){return vn(t)?Mt(t.__v_raw):!!(t&&t.__v_isReactive)}function vn(t){return!!(t&&t.__v_isReadonly)}function Ur(t){return!!(t&&t.__v_isShallow)}function Ec(t){return Mt(t)||vn(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function ns(t){return Object.isExtensible(t)&&Dr(t,"__v_skip",!0),t}const zn=t=>me(t)?rr(t):t,Mi=t=>me(t)?bc(t):t;class wc{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Oi(()=>e(this._value),()=>wr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=re(this);return(!e._cacheable||e.effect.dirty)&&$t(e._value,e._value=e.effect.run())&&wr(e,4),Ic(e),e.effect._dirtyLevel>=2&&wr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function cf(t,e,n=!1){let r,s;const i=K(t);return i?(r=t,s=Ve):(r=t.get,s=t.set),new wc(r,s,i||!s,n)}function Ic(t){var e;Dt&&Gt&&(t=re(t),uc(Gt,(e=t.dep)!=null?e:t.dep=dc(()=>t.dep=void 0,t instanceof wc?t:void 0)))}function wr(t,e=4,n){t=re(t);const r=t.dep;r&&fc(r,e)}function Ee(t){return!!(t&&t.__v_isRef===!0)}function oe(t){return Sc(t,!1)}function lf(t){return Sc(t,!0)}function Sc(t,e){return Ee(t)?t:new uf(t,e)}class uf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:zn(e)}get value(){return Ic(this),this._value}set value(e){const n=this.__v_isShallow||Ur(e)||vn(e);e=n?e:re(e),$t(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:zn(e),wr(this,4))}}function Yt(t){return Ee(t)?t.value:t}const ff={get:(t,e,n)=>Yt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ee(s)&&!Ee(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Tc(t){return Mt(t)?t:new Proxy(t,ff)}function df(t){const e=V(t)?new Array(t.length):{};for(const n in t)e[n]=pf(t,n);return e}class hf{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Hu(re(this._object),this._key)}}function pf(t,e,n){const r=t[e];return Ee(r)?r:new hf(t,e,n)}/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ut(t,e,n,r){try{return r?t(...r):t()}catch(s){rs(s,e,n)}}function Je(t,e,n,r){if(K(t)){const i=Ut(t,e,n,r);return i&&Za(i)&&i.catch(o=>{rs(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Je(t[i],e,n,r));return s}function rs(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ut(c,null,10,[t,o,a]);return}}mf(t,n,s,r)}function mf(t,e,n,r=!0){console.error(t)}let Kn=!1,Zs=!1;const ke=[];let it=0;const hn=[];let St=null,Kt=0;const Rc=Promise.resolve();let Ui=null;function Fi(t){const e=Ui||Rc;return t?e.then(this?t.bind(this):t):e}function gf(t){let e=it+1,n=ke.length;for(;e<n;){const r=e+n>>>1,s=ke[r],i=qn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Bi(t){(!ke.length||!ke.includes(t,Kn&&t.allowRecurse?it+1:it))&&(t.id==null?ke.push(t):ke.splice(gf(t.id),0,t),Cc())}function Cc(){!Kn&&!Zs&&(Zs=!0,Ui=Rc.then(Pc))}function _f(t){const e=ke.indexOf(t);e>it&&ke.splice(e,1)}function vf(t){V(t)?hn.push(...t):(!St||!St.includes(t,t.allowRecurse?Kt+1:Kt))&&hn.push(t),Cc()}function bo(t,e,n=Kn?it+1:0){for(;n<ke.length;n++){const r=ke[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ke.splice(n,1),n--,r()}}}function Ac(t){if(hn.length){const e=[...new Set(hn)].sort((n,r)=>qn(n)-qn(r));if(hn.length=0,St){St.push(...e);return}for(St=e,Kt=0;Kt<St.length;Kt++)St[Kt]();St=null,Kt=0}}const qn=t=>t.id==null?1/0:t.id,yf=(t,e)=>{const n=qn(t)-qn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Pc(t){Zs=!1,Kn=!0,ke.sort(yf);try{for(it=0;it<ke.length;it++){const e=ke[it];e&&e.active!==!1&&Ut(e,null,14)}}finally{it=0,ke.length=0,Ac(),Kn=!1,Ui=null,(ke.length||hn.length)&&Pc()}}function bf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||he;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[l]||he;p&&(s=n.map(_=>be(_)?_.trim():_)),f&&(s=n.map(Js))}let a,c=r[a=Cs(e)]||r[a=Cs(lt(e))];!c&&i&&(c=r[a=Cs(Rn(e))]),c&&Je(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Je(u,t,6,s)}}function Oc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!K(t)){const c=u=>{const l=Oc(u,e,!0);l&&(a=!0,Ce(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(me(t)&&r.set(t,null),null):(V(i)?i.forEach(c=>o[c]=null):Ce(o,i),me(t)&&r.set(t,o),o)}function ss(t,e){return!t||!Xr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Rn(e))||ne(t,e))}let De=null,is=null;function Fr(t){const e=De;return De=t,is=t&&t.type.__scopeId||null,e}function os(t){is=t}function as(){is=null}function kc(t,e=De,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ko(-1);const i=Fr(e);let o;try{o=t(...s)}finally{Fr(i),r._d&&ko(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ps(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:f,data:p,setupState:_,ctx:v,inheritAttrs:b}=t;let N,P;const M=Fr(t);try{if(n.shapeFlag&4){const q=s||r,J=q;N=st(l.call(J,q,f,i,_,p,v)),P=c}else{const q=e;N=st(q.length>1?q(i,{attrs:c,slots:a,emit:u}):q(i,null)),P=e.props?c:Ef(c)}}catch(q){$n.length=0,rs(q,t,1),N=Re(Qt)}let U=N;if(P&&b!==!1){const q=Object.keys(P),{shapeFlag:J}=U;q.length&&J&7&&(o&&q.some(Ri)&&(P=wf(P,o)),U=yn(U,P))}return n.dirs&&(U=yn(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),N=U,Fr(M),N}const Ef=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xr(n))&&((e||(e={}))[n]=t[n]);return e},wf=(t,e)=>{const n={};for(const r in t)(!Ri(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function If(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Eo(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let f=0;f<l.length;f++){const p=l[f];if(o[p]!==r[p]&&!ss(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Eo(r,o,u):!0:!!o;return!1}function Eo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ss(n,i))return!0}return!1}function Sf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const xc="components";function Tf(t,e){return Cf(xc,t,!0,e)||t}const Rf=Symbol.for("v-ndc");function Cf(t,e,n=!0,r=!1){const s=De||Te;if(s){const i=s.type;if(t===xc){const a=Ed(i,!1);if(a&&(a===e||a===lt(e)||a===es(lt(e))))return i}const o=wo(s[t]||i[t],e)||wo(s.appContext[t],e);return!o&&r?i:o}}function wo(t,e){return t&&(t[e]||t[lt(e)]||t[es(lt(e))])}const Af=t=>t.__isSuspense;function Pf(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):vf(t)}const Of=Symbol.for("v-scx"),kf=()=>Ye(Of),yr={};function Fn(t,e,n){return Nc(t,e,n)}function Nc(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=he){if(e&&i){const $=e;e=(...se)=>{$(...se),J()}}const c=Te,u=$=>r===!0?$:qt($,r===!1?1:void 0);let l,f=!1,p=!1;if(Ee(t)?(l=()=>t.value,f=Ur(t)):Mt(t)?(l=()=>u(t),f=!0):V(t)?(p=!0,f=t.some($=>Mt($)||Ur($)),l=()=>t.map($=>{if(Ee($))return $.value;if(Mt($))return u($);if(K($))return Ut($,c,2)})):K(t)?e?l=()=>Ut(t,c,2):l=()=>(_&&_(),Je(t,c,3,[v])):l=Ve,e&&r){const $=l;l=()=>qt($())}let _,v=$=>{_=U.onStop=()=>{Ut($,c,4),_=U.onStop=void 0}},b;if(fs)if(v=Ve,e?n&&Je(e,c,3,[l(),p?[]:void 0,v]):l(),s==="sync"){const $=kf();b=$.__watcherHandles||($.__watcherHandles=[])}else return Ve;let N=p?new Array(t.length).fill(yr):yr;const P=()=>{if(!(!U.active||!U.dirty))if(e){const $=U.run();(r||f||(p?$.some((se,W)=>$t(se,N[W])):$t($,N)))&&(_&&_(),Je(e,c,3,[$,N===yr?void 0:p&&N[0]===yr?[]:N,v]),N=$)}else U.run()};P.allowRecurse=!!e;let M;s==="sync"?M=P:s==="post"?M=()=>Fe(P,c&&c.suspense):(P.pre=!0,c&&(P.id=c.uid),M=()=>Bi(P));const U=new Oi(l,Ve,M),q=ac(),J=()=>{U.stop(),q&&Ci(q.effects,U)};return e?n?P():N=U.run():s==="post"?Fe(U.run.bind(U),c&&c.suspense):U.run(),b&&b.push(J),J}function xf(t,e,n){const r=this.proxy,s=be(t)?t.includes(".")?Lc(r,t):()=>r[t]:t.bind(r,r);let i;K(e)?i=e:(i=e.handler,n=e);const o=sr(this),a=Nc(s,i.bind(r),n);return o(),a}function Lc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function qt(t,e,n=0,r){if(!me(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ee(t))qt(t.value,e,n,r);else if(V(t))for(let s=0;s<t.length;s++)qt(t[s],e,n,r);else if(Qa(t)||dn(t))t.forEach(s=>{qt(s,e,n,r)});else if(tc(t))for(const s in t)qt(t[s],e,n,r);return t}function Tt(t,e){if(De===null)return t;const n=ds(De)||De.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=he]=e[s];i&&(K(i)&&(i={mounted:i,updated:i}),i.deep&&qt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Vt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(tn(),Je(c,n,8,[t.el,a,t,e]),nn())}}/*! #__NO_SIDE_EFFECTS__ */function Dc(t,e){return K(t)?Ce({name:t.name},e,{setup:t}):t}const Ir=t=>!!t.type.__asyncLoader,Mc=t=>t.type.__isKeepAlive;function Nf(t,e){Uc(t,"a",e)}function Lf(t,e){Uc(t,"da",e)}function Uc(t,e,n=Te){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(cs(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Mc(s.parent.vnode)&&Df(r,e,n,s),s=s.parent}}function Df(t,e,n,r){const s=cs(e,t,r,!0);Bc(()=>{Ci(r[e],s)},n)}function cs(t,e,n=Te,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;tn();const a=sr(n),c=Je(e,n,t,o);return a(),nn(),c});return r?s.unshift(i):s.push(i),i}}const _t=t=>(e,n=Te)=>(!fs||t==="sp")&&cs(t,(...r)=>e(...r),n),Mf=_t("bm"),Fc=_t("m"),Uf=_t("bu"),Ff=_t("u"),Bf=_t("bum"),Bc=_t("um"),$f=_t("sp"),jf=_t("rtg"),Hf=_t("rtc");function Vf(t,e=Te){cs("ec",t,e)}function on(t,e,n,r){let s;const i=n&&n[r];if(V(t)||be(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(me(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ei=t=>t?Xc(t)?ds(t)||t.proxy:ei(t.parent):null,Bn=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ei(t.parent),$root:t=>ei(t.root),$emit:t=>t.emit,$options:t=>$i(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Bi(t.update)}),$nextTick:t=>t.n||(t.n=Fi.bind(t.proxy)),$watch:t=>xf.bind(t)}),Os=(t,e)=>t!==he&&!t.__isScriptSetup&&ne(t,e),Wf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Os(r,e))return o[e]=1,r[e];if(s!==he&&ne(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ne(u,e))return o[e]=3,i[e];if(n!==he&&ne(n,e))return o[e]=4,n[e];ti&&(o[e]=0)}}const l=Bn[e];let f,p;if(l)return e==="$attrs"&&Be(t,"get",e),l(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==he&&ne(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,ne(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Os(s,e)?(s[e]=n,!0):r!==he&&ne(r,e)?(r[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==he&&ne(t,o)||Os(e,o)||(a=i[0])&&ne(a,o)||ne(r,o)||ne(Bn,o)||ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Io(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ti=!0;function zf(t){const e=$i(t),n=t.proxy,r=t.ctx;ti=!1,e.beforeCreate&&So(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:p,beforeUpdate:_,updated:v,activated:b,deactivated:N,beforeDestroy:P,beforeUnmount:M,destroyed:U,unmounted:q,render:J,renderTracked:$,renderTriggered:se,errorCaptured:W,serverPrefetch:F,expose:fe,inheritAttrs:ve,components:Se,directives:Ue,filters:Ze}=e;if(u&&Kf(u,r,null),o)for(const ie in o){const te=o[ie];K(te)&&(r[ie]=te.bind(n))}if(s){const ie=s.call(n,n);me(ie)&&(t.data=rr(ie))}if(ti=!0,i)for(const ie in i){const te=i[ie],ze=K(te)?te.bind(n,n):K(te.get)?te.get.bind(n,n):Ve,et=!K(te)&&K(te.set)?te.set.bind(n):Ve,Ae=Ie({get:ze,set:et});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Pe=>Ae.value=Pe})}if(a)for(const ie in a)$c(a[ie],r,n,ie);if(c){const ie=K(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(te=>{Sr(te,ie[te])})}l&&So(l,t,"c");function X(ie,te){V(te)?te.forEach(ze=>ie(ze.bind(n))):te&&ie(te.bind(n))}if(X(Mf,f),X(Fc,p),X(Uf,_),X(Ff,v),X(Nf,b),X(Lf,N),X(Vf,W),X(Hf,$),X(jf,se),X(Bf,M),X(Bc,q),X($f,F),V(fe))if(fe.length){const ie=t.exposed||(t.exposed={});fe.forEach(te=>{Object.defineProperty(ie,te,{get:()=>n[te],set:ze=>n[te]=ze})})}else t.exposed||(t.exposed={});J&&t.render===Ve&&(t.render=J),ve!=null&&(t.inheritAttrs=ve),Se&&(t.components=Se),Ue&&(t.directives=Ue)}function Kf(t,e,n=Ve){V(t)&&(t=ni(t));for(const r in t){const s=t[r];let i;me(s)?"default"in s?i=Ye(s.from||r,s.default,!0):i=Ye(s.from||r):i=Ye(s),Ee(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function So(t,e,n){Je(V(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function $c(t,e,n,r){const s=r.includes(".")?Lc(n,r):()=>n[r];if(be(t)){const i=e[t];K(i)&&Fn(s,i)}else if(K(t))Fn(s,t.bind(n));else if(me(t))if(V(t))t.forEach(i=>$c(i,e,n,r));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&Fn(s,i,t)}}function $i(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Br(c,u,o,!0)),Br(c,e,o)),me(e)&&i.set(e,c),c}function Br(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Br(t,i,n,!0),s&&s.forEach(o=>Br(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=qf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qf={data:To,props:Ro,emits:Ro,methods:Ln,computed:Ln,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:Ln,directives:Ln,watch:Jf,provide:To,inject:Gf};function To(t,e){return e?t?function(){return Ce(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Gf(t,e){return Ln(ni(t),ni(e))}function ni(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ne(t,e){return t?[...new Set([].concat(t,e))]:e}function Ln(t,e){return t?Ce(Object.create(null),t,e):e}function Ro(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:Ce(Object.create(null),Io(t),Io(e??{})):e}function Jf(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const r in e)n[r]=Ne(t[r],e[r]);return n}function jc(){return{app:null,config:{isNativeTag:Au,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yf=0;function Xf(t,e){return function(r,s=null){K(r)||(r=Ce({},r)),s!=null&&!me(s)&&(s=null);const i=jc(),o=new WeakSet;let a=!1;const c=i.app={_uid:Yf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Id,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(c,...l)):K(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,f){if(!a){const p=Re(r,s);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),l&&e?e(p,u):t(p,u,f),a=!0,c._container=u,u.__vue_app__=c,ds(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c},runWithContext(u){const l=pn;pn=c;try{return u()}finally{pn=l}}};return c}}let pn=null;function Sr(t,e){if(Te){let n=Te.provides;const r=Te.parent&&Te.parent.provides;r===n&&(n=Te.provides=Object.create(r)),n[t]=e}}function Ye(t,e,n=!1){const r=Te||De;if(r||pn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:pn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&K(e)?e.call(r&&r.proxy):e}}function Qf(){return!!(Te||De||pn)}function Zf(t,e,n,r=!1){const s={},i={};Dr(i,us,1),t.propsDefaults=Object.create(null),Hc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:yc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ed(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=re(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let f=0;f<l.length;f++){let p=l[f];if(ss(t.emitsOptions,p))continue;const _=e[p];if(c)if(ne(i,p))_!==i[p]&&(i[p]=_,u=!0);else{const v=lt(p);s[v]=ri(c,a,v,_,t,!1)}else _!==i[p]&&(i[p]=_,u=!0)}}}else{Hc(t,e,s,i)&&(u=!0);let l;for(const f in a)(!e||!ne(e,f)&&((l=Rn(f))===f||!ne(e,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(s[f]=ri(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!ne(e,f))&&(delete i[f],u=!0)}u&&pt(t,"set","$attrs")}function Hc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Un(c))continue;const u=e[c];let l;s&&ne(s,l=lt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:ss(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=re(n),u=a||he;for(let l=0;l<i.length;l++){const f=i[l];n[f]=ri(s,c,f,u[f],t,!ne(u,f))}}return o}function ri(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&K(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const l=sr(s);r=u[n]=c.call(null,e),l()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Rn(n))&&(r=!0))}return r}function Vc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!K(t)){const l=f=>{c=!0;const[p,_]=Vc(f,e,!0);Ce(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return me(t)&&r.set(t,fn),fn;if(V(i))for(let l=0;l<i.length;l++){const f=lt(i[l]);Co(f)&&(o[f]=he)}else if(i)for(const l in i){const f=lt(l);if(Co(f)){const p=i[l],_=o[f]=V(p)||K(p)?{type:p}:Ce({},p);if(_){const v=Oo(Boolean,_.type),b=Oo(String,_.type);_[0]=v>-1,_[1]=b<0||v<b,(v>-1||ne(_,"default"))&&a.push(f)}}}const u=[o,a];return me(t)&&r.set(t,u),u}function Co(t){return t[0]!=="$"&&!Un(t)}function Ao(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Po(t,e){return Ao(t)===Ao(e)}function Oo(t,e){return V(e)?e.findIndex(n=>Po(n,t)):K(e)&&Po(e,t)?0:-1}const Wc=t=>t[0]==="_"||t==="$stable",ji=t=>V(t)?t.map(st):[st(t)],td=(t,e,n)=>{if(e._n)return e;const r=kc((...s)=>ji(e(...s)),n);return r._c=!1,r},zc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Wc(s))continue;const i=t[s];if(K(i))e[s]=td(s,i,r);else if(i!=null){const o=ji(i);e[s]=()=>o}}},Kc=(t,e)=>{const n=ji(e);t.slots.default=()=>n},nd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),Dr(e,"_",n)):zc(e,t.slots={})}else t.slots={},e&&Kc(t,e);Dr(t.slots,us,1)},rd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=he;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ce(s,e),!n&&a===1&&delete s._):(i=!e.$stable,zc(e,s)),o=e}else e&&(Kc(t,e),o={default:1});if(i)for(const a in s)!Wc(a)&&o[a]==null&&delete s[a]};function si(t,e,n,r,s=!1){if(V(t)){t.forEach((p,_)=>si(p,e&&(V(e)?e[_]:e),n,r,s));return}if(Ir(r)&&!s)return;const i=r.shapeFlag&4?ds(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===he?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==c&&(be(u)?(l[u]=null,ne(f,u)&&(f[u]=null)):Ee(u)&&(u.value=null)),K(c))Ut(c,a,12,[o,l]);else{const p=be(c),_=Ee(c);if(p||_){const v=()=>{if(t.f){const b=p?ne(f,c)?f[c]:l[c]:c.value;s?V(b)&&Ci(b,i):V(b)?b.includes(i)||b.push(i):p?(l[c]=[i],ne(f,c)&&(f[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else p?(l[c]=o,ne(f,c)&&(f[c]=o)):_&&(c.value=o,t.k&&(l[t.k]=o))};o?(v.id=-1,Fe(v,n)):v()}}}const Fe=Pf;function sd(t){return id(t)}function id(t,e){const n=nc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:p,setScopeId:_=Ve,insertStaticContent:v}=t,b=(d,h,g,w=null,y=null,C=null,x=void 0,R=null,O=!!h.dynamicChildren)=>{if(d===h)return;d&&!kn(d,h)&&(w=m(d),Pe(d,y,C,!0),d=null),h.patchFlag===-2&&(O=!1,h.dynamicChildren=null);const{type:I,ref:D,shapeFlag:j}=h;switch(I){case ls:N(d,h,g,w);break;case Qt:P(d,h,g,w);break;case Tr:d==null&&M(h,g,w,x);break;case Le:Se(d,h,g,w,y,C,x,R,O);break;default:j&1?J(d,h,g,w,y,C,x,R,O):j&6?Ue(d,h,g,w,y,C,x,R,O):(j&64||j&128)&&I.process(d,h,g,w,y,C,x,R,O,k)}D!=null&&y&&si(D,d&&d.ref,C,h||d,!h)},N=(d,h,g,w)=>{if(d==null)r(h.el=a(h.children),g,w);else{const y=h.el=d.el;h.children!==d.children&&u(y,h.children)}},P=(d,h,g,w)=>{d==null?r(h.el=c(h.children||""),g,w):h.el=d.el},M=(d,h,g,w)=>{[d.el,d.anchor]=v(d.children,h,g,w,d.el,d.anchor)},U=({el:d,anchor:h},g,w)=>{let y;for(;d&&d!==h;)y=p(d),r(d,g,w),d=y;r(h,g,w)},q=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),s(d),d=g;s(h)},J=(d,h,g,w,y,C,x,R,O)=>{h.type==="svg"?x="svg":h.type==="math"&&(x="mathml"),d==null?$(h,g,w,y,C,x,R,O):F(d,h,y,C,x,R,O)},$=(d,h,g,w,y,C,x,R)=>{let O,I;const{props:D,shapeFlag:j,transition:B,dirs:z}=d;if(O=d.el=o(d.type,C,D&&D.is,D),j&8?l(O,d.children):j&16&&W(d.children,O,null,w,y,ks(d,C),x,R),z&&Vt(d,null,w,"created"),se(O,d,d.scopeId,x,w),D){for(const le in D)le!=="value"&&!Un(le)&&i(O,le,null,D[le],C,d.children,w,y,L);"value"in D&&i(O,"value",null,D.value,C),(I=D.onVnodeBeforeMount)&&rt(I,w,d)}z&&Vt(d,null,w,"beforeMount");const Y=od(y,B);Y&&B.beforeEnter(O),r(O,h,g),((I=D&&D.onVnodeMounted)||Y||z)&&Fe(()=>{I&&rt(I,w,d),Y&&B.enter(O),z&&Vt(d,null,w,"mounted")},y)},se=(d,h,g,w,y)=>{if(g&&_(d,g),w)for(let C=0;C<w.length;C++)_(d,w[C]);if(y){let C=y.subTree;if(h===C){const x=y.vnode;se(d,x,x.scopeId,x.slotScopeIds,y.parent)}}},W=(d,h,g,w,y,C,x,R,O=0)=>{for(let I=O;I<d.length;I++){const D=d[I]=R?Ct(d[I]):st(d[I]);b(null,D,h,g,w,y,C,x,R)}},F=(d,h,g,w,y,C,x)=>{const R=h.el=d.el;let{patchFlag:O,dynamicChildren:I,dirs:D}=h;O|=d.patchFlag&16;const j=d.props||he,B=h.props||he;let z;if(g&&Wt(g,!1),(z=B.onVnodeBeforeUpdate)&&rt(z,g,h,d),D&&Vt(h,d,g,"beforeUpdate"),g&&Wt(g,!0),I?fe(d.dynamicChildren,I,R,g,w,ks(h,y),C):x||te(d,h,R,null,g,w,ks(h,y),C,!1),O>0){if(O&16)ve(R,h,j,B,g,w,y);else if(O&2&&j.class!==B.class&&i(R,"class",null,B.class,y),O&4&&i(R,"style",j.style,B.style,y),O&8){const Y=h.dynamicProps;for(let le=0;le<Y.length;le++){const pe=Y[le],we=j[pe],qe=B[pe];(qe!==we||pe==="value")&&i(R,pe,we,qe,y,d.children,g,w,L)}}O&1&&d.children!==h.children&&l(R,h.children)}else!x&&I==null&&ve(R,h,j,B,g,w,y);((z=B.onVnodeUpdated)||D)&&Fe(()=>{z&&rt(z,g,h,d),D&&Vt(h,d,g,"updated")},w)},fe=(d,h,g,w,y,C,x)=>{for(let R=0;R<h.length;R++){const O=d[R],I=h[R],D=O.el&&(O.type===Le||!kn(O,I)||O.shapeFlag&70)?f(O.el):g;b(O,I,D,null,w,y,C,x,!0)}},ve=(d,h,g,w,y,C,x)=>{if(g!==w){if(g!==he)for(const R in g)!Un(R)&&!(R in w)&&i(d,R,g[R],null,x,h.children,y,C,L);for(const R in w){if(Un(R))continue;const O=w[R],I=g[R];O!==I&&R!=="value"&&i(d,R,I,O,x,h.children,y,C,L)}"value"in w&&i(d,"value",g.value,w.value,x)}},Se=(d,h,g,w,y,C,x,R,O)=>{const I=h.el=d?d.el:a(""),D=h.anchor=d?d.anchor:a("");let{patchFlag:j,dynamicChildren:B,slotScopeIds:z}=h;z&&(R=R?R.concat(z):z),d==null?(r(I,g,w),r(D,g,w),W(h.children||[],g,D,y,C,x,R,O)):j>0&&j&64&&B&&d.dynamicChildren?(fe(d.dynamicChildren,B,g,y,C,x,R),(h.key!=null||y&&h===y.subTree)&&qc(d,h,!0)):te(d,h,g,D,y,C,x,R,O)},Ue=(d,h,g,w,y,C,x,R,O)=>{h.slotScopeIds=R,d==null?h.shapeFlag&512?y.ctx.activate(h,g,w,x,O):Ze(h,g,w,y,C,x,O):ye(d,h,O)},Ze=(d,h,g,w,y,C,x)=>{const R=d.component=gd(d,w,y);if(Mc(d)&&(R.ctx.renderer=k),_d(R),R.asyncDep){if(y&&y.registerDep(R,X),!d.el){const O=R.subTree=Re(Qt);P(null,O,h,g)}}else X(R,d,h,g,y,C,x)},ye=(d,h,g)=>{const w=h.component=d.component;if(If(d,h,g))if(w.asyncDep&&!w.asyncResolved){ie(w,h,g);return}else w.next=h,_f(w.update),w.effect.dirty=!0,w.update();else h.el=d.el,w.vnode=h},X=(d,h,g,w,y,C,x)=>{const R=()=>{if(d.isMounted){let{next:D,bu:j,u:B,parent:z,vnode:Y}=d;{const sn=Gc(d);if(sn){D&&(D.el=Y.el,ie(d,D,x)),sn.asyncDep.then(()=>{d.isUnmounted||R()});return}}let le=D,pe;Wt(d,!1),D?(D.el=Y.el,ie(d,D,x)):D=Y,j&&Er(j),(pe=D.props&&D.props.onVnodeBeforeUpdate)&&rt(pe,z,D,Y),Wt(d,!0);const we=Ps(d),qe=d.subTree;d.subTree=we,b(qe,we,f(qe.el),m(qe),d,y,C),D.el=we.el,le===null&&Sf(d,we.el),B&&Fe(B,y),(pe=D.props&&D.props.onVnodeUpdated)&&Fe(()=>rt(pe,z,D,Y),y)}else{let D;const{el:j,props:B}=h,{bm:z,m:Y,parent:le}=d,pe=Ir(h);if(Wt(d,!1),z&&Er(z),!pe&&(D=B&&B.onVnodeBeforeMount)&&rt(D,le,h),Wt(d,!0),j&&Z){const we=()=>{d.subTree=Ps(d),Z(j,d.subTree,d,y,null)};pe?h.type.__asyncLoader().then(()=>!d.isUnmounted&&we()):we()}else{const we=d.subTree=Ps(d);b(null,we,g,w,d,y,C),h.el=we.el}if(Y&&Fe(Y,y),!pe&&(D=B&&B.onVnodeMounted)){const we=h;Fe(()=>rt(D,le,we),y)}(h.shapeFlag&256||le&&Ir(le.vnode)&&le.vnode.shapeFlag&256)&&d.a&&Fe(d.a,y),d.isMounted=!0,h=g=w=null}},O=d.effect=new Oi(R,Ve,()=>Bi(I),d.scope),I=d.update=()=>{O.dirty&&O.run()};I.id=d.uid,Wt(d,!0),I()},ie=(d,h,g)=>{h.component=d;const w=d.vnode.props;d.vnode=h,d.next=null,ed(d,h.props,w,g),rd(d,h.children,g),tn(),bo(d),nn()},te=(d,h,g,w,y,C,x,R,O=!1)=>{const I=d&&d.children,D=d?d.shapeFlag:0,j=h.children,{patchFlag:B,shapeFlag:z}=h;if(B>0){if(B&128){et(I,j,g,w,y,C,x,R,O);return}else if(B&256){ze(I,j,g,w,y,C,x,R,O);return}}z&8?(D&16&&L(I,y,C),j!==I&&l(g,j)):D&16?z&16?et(I,j,g,w,y,C,x,R,O):L(I,y,C,!0):(D&8&&l(g,""),z&16&&W(j,g,w,y,C,x,R,O))},ze=(d,h,g,w,y,C,x,R,O)=>{d=d||fn,h=h||fn;const I=d.length,D=h.length,j=Math.min(I,D);let B;for(B=0;B<j;B++){const z=h[B]=O?Ct(h[B]):st(h[B]);b(d[B],z,g,null,y,C,x,R,O)}I>D?L(d,y,C,!0,!1,j):W(h,g,w,y,C,x,R,O,j)},et=(d,h,g,w,y,C,x,R,O)=>{let I=0;const D=h.length;let j=d.length-1,B=D-1;for(;I<=j&&I<=B;){const z=d[I],Y=h[I]=O?Ct(h[I]):st(h[I]);if(kn(z,Y))b(z,Y,g,null,y,C,x,R,O);else break;I++}for(;I<=j&&I<=B;){const z=d[j],Y=h[B]=O?Ct(h[B]):st(h[B]);if(kn(z,Y))b(z,Y,g,null,y,C,x,R,O);else break;j--,B--}if(I>j){if(I<=B){const z=B+1,Y=z<D?h[z].el:w;for(;I<=B;)b(null,h[I]=O?Ct(h[I]):st(h[I]),g,Y,y,C,x,R,O),I++}}else if(I>B)for(;I<=j;)Pe(d[I],y,C,!0),I++;else{const z=I,Y=I,le=new Map;for(I=Y;I<=B;I++){const $e=h[I]=O?Ct(h[I]):st(h[I]);$e.key!=null&&le.set($e.key,I)}let pe,we=0;const qe=B-Y+1;let sn=!1,co=0;const On=new Array(qe);for(I=0;I<qe;I++)On[I]=0;for(I=z;I<=j;I++){const $e=d[I];if(we>=qe){Pe($e,y,C,!0);continue}let nt;if($e.key!=null)nt=le.get($e.key);else for(pe=Y;pe<=B;pe++)if(On[pe-Y]===0&&kn($e,h[pe])){nt=pe;break}nt===void 0?Pe($e,y,C,!0):(On[nt-Y]=I+1,nt>=co?co=nt:sn=!0,b($e,h[nt],g,null,y,C,x,R,O),we++)}const lo=sn?ad(On):fn;for(pe=lo.length-1,I=qe-1;I>=0;I--){const $e=Y+I,nt=h[$e],uo=$e+1<D?h[$e+1].el:w;On[I]===0?b(null,nt,g,uo,y,C,x,R,O):sn&&(pe<0||I!==lo[pe]?Ae(nt,g,uo,2):pe--)}}},Ae=(d,h,g,w,y=null)=>{const{el:C,type:x,transition:R,children:O,shapeFlag:I}=d;if(I&6){Ae(d.component.subTree,h,g,w);return}if(I&128){d.suspense.move(h,g,w);return}if(I&64){x.move(d,h,g,k);return}if(x===Le){r(C,h,g);for(let j=0;j<O.length;j++)Ae(O[j],h,g,w);r(d.anchor,h,g);return}if(x===Tr){U(d,h,g);return}if(w!==2&&I&1&&R)if(w===0)R.beforeEnter(C),r(C,h,g),Fe(()=>R.enter(C),y);else{const{leave:j,delayLeave:B,afterLeave:z}=R,Y=()=>r(C,h,g),le=()=>{j(C,()=>{Y(),z&&z()})};B?B(C,Y,le):le()}else r(C,h,g)},Pe=(d,h,g,w=!1,y=!1)=>{const{type:C,props:x,ref:R,children:O,dynamicChildren:I,shapeFlag:D,patchFlag:j,dirs:B}=d;if(R!=null&&si(R,null,g,d,!0),D&256){h.ctx.deactivate(d);return}const z=D&1&&B,Y=!Ir(d);let le;if(Y&&(le=x&&x.onVnodeBeforeUnmount)&&rt(le,h,d),D&6)Q(d.component,g,w);else{if(D&128){d.suspense.unmount(g,w);return}z&&Vt(d,null,h,"beforeUnmount"),D&64?d.type.remove(d,h,g,y,k,w):I&&(C!==Le||j>0&&j&64)?L(I,h,g,!1,!0):(C===Le&&j&384||!y&&D&16)&&L(O,h,g),w&&Ke(d)}(Y&&(le=x&&x.onVnodeUnmounted)||z)&&Fe(()=>{le&&rt(le,h,d),z&&Vt(d,null,h,"unmounted")},g)},Ke=d=>{const{type:h,el:g,anchor:w,transition:y}=d;if(h===Le){tt(g,w);return}if(h===Tr){q(d);return}const C=()=>{s(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:x,delayLeave:R}=y,O=()=>x(g,C);R?R(d.el,C,O):O()}else C()},tt=(d,h)=>{let g;for(;d!==h;)g=p(d),s(d),d=g;s(h)},Q=(d,h,g)=>{const{bum:w,scope:y,update:C,subTree:x,um:R}=d;w&&Er(w),y.stop(),C&&(C.active=!1,Pe(x,d,h,g)),R&&Fe(R,h),Fe(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},L=(d,h,g,w=!1,y=!1,C=0)=>{for(let x=C;x<d.length;x++)Pe(d[x],h,g,w,y)},m=d=>d.shapeFlag&6?m(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el);let S=!1;const A=(d,h,g)=>{d==null?h._vnode&&Pe(h._vnode,null,null,!0):b(h._vnode||null,d,h,null,null,null,g),S||(S=!0,bo(),Ac(),S=!1),h._vnode=d},k={p:b,um:Pe,m:Ae,r:Ke,mt:Ze,mc:W,pc:te,pbc:fe,n:m,o:t};let G,Z;return e&&([G,Z]=e(k)),{render:A,hydrate:G,createApp:Xf(A,G)}}function ks({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function od(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function qc(t,e,n=!1){const r=t.children,s=e.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ct(s[i]),a.el=o.el),n||qc(o,a)),a.type===ls&&(a.el=o.el)}}function ad(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Gc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gc(e)}const cd=t=>t.__isTeleport,Le=Symbol.for("v-fgt"),ls=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),Tr=Symbol.for("v-stc"),$n=[];let Ge=null;function ae(t=!1){$n.push(Ge=t?null:[])}function ld(){$n.pop(),Ge=$n[$n.length-1]||null}let Gn=1;function ko(t){Gn+=t}function Jc(t){return t.dynamicChildren=Gn>0?Ge||fn:null,ld(),Gn>0&&Ge&&Ge.push(t),t}function de(t,e,n,r,s,i){return Jc(T(t,e,n,r,s,i,!0))}function $r(t,e,n,r,s){return Jc(Re(t,e,n,r,s,!0))}function ii(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return t.type===e.type&&t.key===e.key}const us="__vInternal",Yc=({key:t})=>t??null,Rr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?be(t)||Ee(t)||K(t)?{i:De,r:t,k:e,f:!!n}:t:null);function T(t,e=null,n=null,r=0,s=null,i=t===Le?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yc(e),ref:e&&Rr(e),scopeId:is,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:De};return a?(Hi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=be(n)?8:16),Gn>0&&!o&&Ge&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ge.push(c),c}const Re=ud;function ud(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Rf)&&(t=Qt),ii(t)){const a=yn(t,e,!0);return n&&Hi(a,n),Gn>0&&!i&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag|=-2,a}if(wd(t)&&(t=t.__vccOpts),e){e=fd(e);let{class:a,style:c}=e;a&&!be(a)&&(e.class=Oe(a)),me(c)&&(Ec(c)&&!V(c)&&(c=Ce({},c)),e.style=Pi(c))}const o=be(t)?1:Af(t)?128:cd(t)?64:me(t)?4:K(t)?2:0;return T(t,e,n,r,s,o,i,!0)}function fd(t){return t?Ec(t)||us in t?Ce({},t):t:null}function yn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?hd(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Yc(a),ref:e&&e.ref?n&&s?V(s)?s.concat(Rr(e)):[s,Rr(e)]:Rr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yn(t.ssContent),ssFallback:t.ssFallback&&yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Rt(t=" ",e=0){return Re(ls,null,t,e)}function dd(t,e){const n=Re(Tr,null,t);return n.staticCount=e,n}function He(t="",e=!1){return e?(ae(),$r(Qt,null,t)):Re(Qt,null,t)}function st(t){return t==null||typeof t=="boolean"?Re(Qt):V(t)?Re(Le,null,t.slice()):typeof t=="object"?Ct(t):Re(ls,null,String(t))}function Ct(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yn(t)}function Hi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Hi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(us in e)?e._ctx=De:s===3&&De&&(De.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:De},n=32):(e=String(e),r&64?(n=16,e=[Rt(e)]):n=8);t.children=e,t.shapeFlag|=n}function hd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Oe([e.class,r.class]));else if(s==="style")e.style=Pi([e.style,r.style]);else if(Xr(s)){const i=e[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rt(t,e,n,r=null){Je(t,e,7,[n,r])}const pd=jc();let md=0;function gd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||pd,i={uid:md++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ic(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vc(r,s),emitsOptions:Oc(r,s),emit:null,emitted:null,propsDefaults:he,inheritAttrs:r.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=bf.bind(null,i),t.ce&&t.ce(i),i}let Te=null,jr,oi;{const t=nc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};jr=e("__VUE_INSTANCE_SETTERS__",n=>Te=n),oi=e("__VUE_SSR_SETTERS__",n=>fs=n)}const sr=t=>{const e=Te;return jr(t),t.scope.on(),()=>{t.scope.off(),jr(e)}},xo=()=>{Te&&Te.scope.off(),jr(null)};function Xc(t){return t.vnode.shapeFlag&4}let fs=!1;function _d(t,e=!1){e&&oi(e);const{props:n,children:r}=t.vnode,s=Xc(t);Zf(t,n,s,e),nd(t,r);const i=s?vd(t,e):void 0;return e&&oi(!1),i}function vd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ns(new Proxy(t.ctx,Wf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?bd(t):null,i=sr(t);tn();const o=Ut(r,t,0,[t.props,s]);if(nn(),i(),Za(o)){if(o.then(xo,xo),e)return o.then(a=>{No(t,a,e)}).catch(a=>{rs(a,t,0)});t.asyncDep=o}else No(t,o,e)}else Qc(t,e)}function No(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=Tc(e)),Qc(t,n)}let Lo;function Qc(t,e,n){const r=t.type;if(!t.render){if(!e&&Lo&&!r.render){const s=r.template||$i(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Ce(Ce({isCustomElement:i,delimiters:a},o),c);r.render=Lo(s,u)}}t.render=r.render||Ve}{const s=sr(t);tn();try{zf(t)}finally{nn(),s()}}}function yd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Be(t,"get","$attrs"),e[n]}}))}function bd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return yd(t)},slots:t.slots,emit:t.emit,expose:e}}function ds(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Tc(ns(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bn)return Bn[n](t)},has(e,n){return n in e||n in Bn}}))}function Ed(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function wd(t){return K(t)&&"__vccOpts"in t}const Ie=(t,e)=>cf(t,e,fs);function Zc(t,e,n){const r=arguments.length;return r===2?me(e)&&!V(e)?ii(e)?Re(t,null,[e]):Re(t,e):Re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ii(n)&&(n=[n]),Re(t,e,n))}const Id="3.4.20";/**
* @vue/runtime-dom v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Sd="http://www.w3.org/2000/svg",Td="http://www.w3.org/1998/Math/MathML",At=typeof document<"u"?document:null,Do=At&&At.createElement("template"),Rd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?At.createElementNS(Sd,t):e==="mathml"?At.createElementNS(Td,t):At.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>At.createTextNode(t),createComment:t=>At.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>At.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Do.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Do.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cd=Symbol("_vtc");function Ad(t,e,n){const r=t[Cd];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Mo=Symbol("_vod"),Pd=Symbol("_vsh"),Od=Symbol(""),kd=/(^|;)\s*display\s*:/;function xd(t,e,n){const r=t.style,s=be(n);let i=!1;if(n&&!s){if(e)if(be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Cr(r,a,"")}else for(const o in e)n[o]==null&&Cr(r,o,"");for(const o in n)o==="display"&&(i=!0),Cr(r,o,n[o])}else if(s){if(e!==n){const o=r[Od];o&&(n+=";"+o),r.cssText=n,i=kd.test(n)}}else e&&t.removeAttribute("style");Mo in t&&(t[Mo]=i?r.display:"",t[Pd]&&(r.display="none"))}const Uo=/\s*!important$/;function Cr(t,e,n){if(V(n))n.forEach(r=>Cr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Nd(t,e);Uo.test(n)?t.setProperty(Rn(r),n.replace(Uo,""),"important"):t[r]=n}}const Fo=["Webkit","Moz","ms"],xs={};function Nd(t,e){const n=xs[e];if(n)return n;let r=lt(e);if(r!=="filter"&&r in t)return xs[e]=r;r=es(r);for(let s=0;s<Fo.length;s++){const i=Fo[s]+r;if(i in t)return xs[e]=i}return e}const Bo="http://www.w3.org/1999/xlink";function Ld(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bo,e.slice(6,e.length)):t.setAttributeNS(Bo,e,n);else{const i=Fu(e);n==null||i&&!rc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Dd(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value")||"":t.value,l=n??"";u!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=rc(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function cn(t,e,n,r){t.addEventListener(e,n,r)}function Md(t,e,n,r){t.removeEventListener(e,n,r)}const $o=Symbol("_vei");function Ud(t,e,n,r,s=null){const i=t[$o]||(t[$o]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Fd(e);if(r){const u=i[e]=jd(r,s);cn(t,a,u,c)}else o&&(Md(t,a,o,c),i[e]=void 0)}}const jo=/(?:Once|Passive|Capture)$/;function Fd(t){let e;if(jo.test(t)){e={};let r;for(;r=t.match(jo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rn(t.slice(2)),e]}let Ns=0;const Bd=Promise.resolve(),$d=()=>Ns||(Bd.then(()=>Ns=0),Ns=Date.now());function jd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Je(Hd(r,n.value),e,5,[r])};return n.value=t,n.attached=$d(),n}function Hd(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ho=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Vd=(t,e,n,r,s,i,o,a,c)=>{const u=s==="svg";e==="class"?Ad(t,r,u):e==="style"?xd(t,n,r):Xr(e)?Ri(e)||Ud(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wd(t,e,r,u))?Dd(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ld(t,e,r,u))};function Wd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ho(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ho(e)&&be(n)?!1:e in t}const Vo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>Er(e,n):e};function zd(t){t.target.composing=!0}function Wo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ls=Symbol("_assign"),Pt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ls]=Vo(s);const i=r||s.props&&s.props.type==="number";cn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Js(a)),t[Ls](a)}),n&&cn(t,"change",()=>{t.value=t.value.trim()}),e||(cn(t,"compositionstart",zd),cn(t,"compositionend",Wo),cn(t,"change",Wo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Ls]=Vo(i),t.composing)return;const o=s||t.type==="number"?Js(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Kd=Ce({patchProp:Vd},Rd);let zo;function qd(){return zo||(zo=sd(Kd))}const Gd=(...t)=>{const e=qd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Yd(r);if(!s)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Jd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Jd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Yd(t){return be(t)?document.querySelector(t):t}var Xd=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let el;const hs=t=>el=t,tl=Symbol();function ai(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var jn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(jn||(jn={}));function Qd(){const t=oc(!0),e=t.run(()=>oe({}));let n=[],r=[];const s=ns({install(i){hs(s),s._a=i,i.provide(tl,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Xd?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const nl=()=>{};function Ko(t,e,n,r=nl){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ac()&&$u(s),s}function an(t,...e){t.slice().forEach(n=>{n(...e)})}const Zd=t=>t();function ci(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ai(s)&&ai(r)&&t.hasOwnProperty(n)&&!Ee(r)&&!Mt(r)?t[n]=ci(s,r):t[n]=r}return t}const eh=Symbol();function th(t){return!ai(t)||!t.hasOwnProperty(eh)}const{assign:It}=Object;function nh(t){return!!(Ee(t)&&t.effect)}function rh(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const l=df(n.state.value[t]);return It(l,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=ns(Ie(()=>{hs(n);const _=n._s.get(t);return o[p].call(_,_)})),f),{}))}return c=rl(t,u,e,n,r,!0),c}function rl(t,e,n={},r,s,i){let o;const a=It({actions:{}},n),c={deep:!0};let u,l,f=[],p=[],_;const v=r.state.value[t];!i&&!v&&(r.state.value[t]={}),oe({});let b;function N(W){let F;u=l=!1,typeof W=="function"?(W(r.state.value[t]),F={type:jn.patchFunction,storeId:t,events:_}):(ci(r.state.value[t],W),F={type:jn.patchObject,payload:W,storeId:t,events:_});const fe=b=Symbol();Fi().then(()=>{b===fe&&(u=!0)}),l=!0,an(f,F,r.state.value[t])}const P=i?function(){const{state:F}=n,fe=F?F():{};this.$patch(ve=>{It(ve,fe)})}:nl;function M(){o.stop(),f=[],p=[],r._s.delete(t)}function U(W,F){return function(){hs(r);const fe=Array.from(arguments),ve=[],Se=[];function Ue(X){ve.push(X)}function Ze(X){Se.push(X)}an(p,{args:fe,name:W,store:J,after:Ue,onError:Ze});let ye;try{ye=F.apply(this&&this.$id===t?this:J,fe)}catch(X){throw an(Se,X),X}return ye instanceof Promise?ye.then(X=>(an(ve,X),X)).catch(X=>(an(Se,X),Promise.reject(X))):(an(ve,ye),ye)}}const q={_p:r,$id:t,$onAction:Ko.bind(null,p),$patch:N,$reset:P,$subscribe(W,F={}){const fe=Ko(f,W,F.detached,()=>ve()),ve=o.run(()=>Fn(()=>r.state.value[t],Se=>{(F.flush==="sync"?l:u)&&W({storeId:t,type:jn.direct,events:_},Se)},It({},c,F)));return fe},$dispose:M},J=rr(q);r._s.set(t,J);const se=(r._a&&r._a.runWithContext||Zd)(()=>r._e.run(()=>(o=oc()).run(e)));for(const W in se){const F=se[W];if(Ee(F)&&!nh(F)||Mt(F))i||(v&&th(F)&&(Ee(F)?F.value=v[W]:ci(F,v[W])),r.state.value[t][W]=F);else if(typeof F=="function"){const fe=U(W,F);se[W]=fe,a.actions[W]=F}}return It(J,se),It(re(J),se),Object.defineProperty(J,"$state",{get:()=>r.state.value[t],set:W=>{N(F=>{It(F,W)})}}),r._p.forEach(W=>{It(J,o.run(()=>W({store:J,app:r._a,pinia:r,options:a})))}),v&&i&&n.hydrate&&n.hydrate(J.$state,v),u=!0,l=!0,J}function sh(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const u=Qf();return a=a||(u?Ye(tl,null):null),a&&hs(a),a=el,a._s.has(r)||(i?rl(r,e,s,a):rh(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ln=typeof document<"u";function ih(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function Ds(t,e){const n={};for(const r in e){const s=e[r];n[r]=Xe(s)?s.map(t):t(s)}return n}const Hn=()=>{},Xe=Array.isArray,sl=/#/g,oh=/&/g,ah=/\//g,ch=/=/g,lh=/\?/g,il=/\+/g,uh=/%5B/g,fh=/%5D/g,ol=/%5E/g,dh=/%60/g,al=/%7B/g,hh=/%7C/g,cl=/%7D/g,ph=/%20/g;function Vi(t){return encodeURI(""+t).replace(hh,"|").replace(uh,"[").replace(fh,"]")}function mh(t){return Vi(t).replace(al,"{").replace(cl,"}").replace(ol,"^")}function li(t){return Vi(t).replace(il,"%2B").replace(ph,"+").replace(sl,"%23").replace(oh,"%26").replace(dh,"`").replace(al,"{").replace(cl,"}").replace(ol,"^")}function gh(t){return li(t).replace(ch,"%3D")}function _h(t){return Vi(t).replace(sl,"%23").replace(lh,"%3F")}function vh(t){return t==null?"":_h(t).replace(ah,"%2F")}function Jn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const yh=/\/$/,bh=t=>t.replace(yh,"");function Ms(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Sh(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Jn(o)}}function Eh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function wh(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&bn(e.matched[r],n.matched[s])&&ll(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ll(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ih(t[n],e[n]))return!1;return!0}function Ih(t,e){return Xe(t)?Go(t,e):Xe(e)?Go(e,t):t===e}function Go(t,e){return Xe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Sh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var Yn;(function(t){t.pop="pop",t.push="push"})(Yn||(Yn={}));var Vn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vn||(Vn={}));function Th(t){if(!t)if(ln){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bh(t)}const Rh=/^[^#]+#/;function Ch(t,e){return t.replace(Rh,"#")+e}function Ah(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ps=()=>({left:window.scrollX,top:window.scrollY});function Ph(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ah(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Jo(t,e){return(history.state?history.state.position-e:-1)+t}const ui=new Map;function Oh(t,e){ui.set(t,e)}function kh(t){const e=ui.get(t);return ui.delete(t),e}let xh=()=>location.protocol+"//"+location.host;function ul(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),qo(c,"")}return qo(n,t)+r+s}function Nh(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=ul(t,location),v=n.value,b=e.value;let N=0;if(p){if(n.value=_,e.value=p,o&&o===v){o=null;return}N=b?p.position-b.position:0}else r(_);s.forEach(P=>{P(n.value,v,{delta:N,type:Yn.pop,direction:N?N>0?Vn.forward:Vn.back:Vn.unknown})})};function c(){o=n.value}function u(p){s.push(p);const _=()=>{const v=s.indexOf(p);v>-1&&s.splice(v,1)};return i.push(_),_}function l(){const{history:p}=window;p.state&&p.replaceState(ce({},p.state,{scroll:ps()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function Yo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ps():null}}function Lh(t){const{history:e,location:n}=window,r={value:ul(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:xh()+t+c;try{e[l?"replaceState":"pushState"](u,"",p),s.value=u}catch(_){console.error(_),n[l?"replace":"assign"](p)}}function o(c,u){const l=ce({},e.state,Yo(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=ce({},s.value,e.state,{forward:c,scroll:ps()});i(l.current,l,!0);const f=ce({},Yo(r.value,c,null),{position:l.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Dh(t){t=Th(t);const e=Lh(t),n=Nh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ce({location:"",base:t,go:r,createHref:Ch.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Mh(t){return typeof t=="string"||t&&typeof t=="object"}function fl(t){return typeof t=="string"||typeof t=="symbol"}const bt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dl=Symbol("");var Xo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xo||(Xo={}));function En(t,e){return ce(new Error,{type:t,[dl]:!0},e)}function ft(t,e){return t instanceof Error&&dl in t&&(e==null||!!(t.type&e))}const Qo="[^/]+?",Uh={sensitive:!1,strict:!1,start:!0,end:!0},Fh=/[.+*?^${}()[\]/\\]/g;function Bh(t,e){const n=ce({},Uh,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let _=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(Fh,"\\$&"),_+=40;else if(p.type===1){const{value:v,repeatable:b,optional:N,regexp:P}=p;i.push({name:v,repeatable:b,optional:N});const M=P||Qo;if(M!==Qo){_+=10;try{new RegExp(`(${M})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+q.message)}}let U=b?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(U=N&&u.length<2?`(?:/${U})`:"/"+U),N&&(U+="?"),s+=U,_+=20,N&&(_+=-8),b&&(_+=-20),M===".*"&&(_+=-50)}l.push(_)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),f={};if(!l)return null;for(let p=1;p<l.length;p++){const _=l[p]||"",v=i[p-1];f[v.name]=_&&v.repeatable?_.split("/"):_}return f}function c(u){let l="",f=!1;for(const p of t){(!f||!l.endsWith("/"))&&(l+="/"),f=!1;for(const _ of p)if(_.type===0)l+=_.value;else if(_.type===1){const{value:v,repeatable:b,optional:N}=_,P=v in u?u[v]:"";if(Xe(P)&&!b)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=Xe(P)?P.join("/"):P;if(!M)if(N)p.length<2&&(l.endsWith("/")?l=l.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);l+=M}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function $h(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function jh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=$h(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Zo(r))return 1;if(Zo(s))return-1}return s.length-r.length}function Zo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Hh={type:0,value:""},Vh=/[a-zA-Z0-9_]/;function Wh(t){if(!t)return[[]];if(t==="/")return[[Hh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Vh.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function zh(t,e,n){const r=Bh(Wh(t.path),n),s=ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Kh(t,e){const n=[],r=new Map;e=na({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,f,p){const _=!p,v=qh(l);v.aliasOf=p&&p.record;const b=na(e,l),N=[v];if("alias"in l){const U=typeof l.alias=="string"?[l.alias]:l.alias;for(const q of U)N.push(ce({},v,{components:p?p.record.components:v.components,path:q,aliasOf:p?p.record:v}))}let P,M;for(const U of N){const{path:q}=U;if(f&&q[0]!=="/"){const J=f.record.path,$=J[J.length-1]==="/"?"":"/";U.path=f.record.path+(q&&$+q)}if(P=zh(U,f,b),p?p.alias.push(P):(M=M||P,M!==P&&M.alias.push(P),_&&l.name&&!ta(P)&&o(l.name)),v.children){const J=v.children;for(let $=0;$<J.length;$++)i(J[$],P,p&&p.children[$])}p=p||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return M?()=>{o(M)}:Hn}function o(l){if(fl(l)){const f=r.get(l);f&&(r.delete(l),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(l);f>-1&&(n.splice(f,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let f=0;for(;f<n.length&&jh(l,n[f])>=0&&(l.record.path!==n[f].record.path||!hl(l,n[f]));)f++;n.splice(f,0,l),l.record.name&&!ta(l)&&r.set(l.record.name,l)}function u(l,f){let p,_={},v,b;if("name"in l&&l.name){if(p=r.get(l.name),!p)throw En(1,{location:l});b=p.record.name,_=ce(ea(f.params,p.keys.filter(M=>!M.optional).concat(p.parent?p.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),l.params&&ea(l.params,p.keys.map(M=>M.name))),v=p.stringify(_)}else if(l.path!=null)v=l.path,p=n.find(M=>M.re.test(v)),p&&(_=p.parse(v),b=p.record.name);else{if(p=f.name?r.get(f.name):n.find(M=>M.re.test(f.path)),!p)throw En(1,{location:l,currentLocation:f});b=p.record.name,_=ce({},f.params,l.params),v=p.stringify(_)}const N=[];let P=p;for(;P;)N.unshift(P.record),P=P.parent;return{name:b,path:v,params:_,matched:N,meta:Jh(N)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ea(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function qh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Gh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Gh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ta(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Jh(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function na(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function hl(t,e){return e.children.some(n=>n===t||hl(t,n))}function Yh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(il," "),o=i.indexOf("="),a=Jn(o<0?i:i.slice(0,o)),c=o<0?null:Jn(i.slice(o+1));if(a in e){let u=e[a];Xe(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function ra(t){let e="";for(let n in t){const r=t[n];if(n=gh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xe(r)?r.map(i=>i&&li(i)):[r&&li(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Xh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Xe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Qh=Symbol(""),sa=Symbol(""),ms=Symbol(""),pl=Symbol(""),fi=Symbol("");function xn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ot(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(En(4,{from:n,to:e})):p instanceof Error?c(p):Mh(p)?c(En(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},l=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(l);t.length<3&&(f=f.then(u)),f.catch(p=>c(p))})}function Us(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Zh(c)){const l=(c.__vccOpts||c)[e];l&&i.push(Ot(l,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=ih(l)?l.default:l;o.components[a]=f;const _=(f.__vccOpts||f)[e];return _&&Ot(_,n,r,o,a,s)()}))}}return i}function Zh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ia(t){const e=Ye(ms),n=Ye(pl),r=Ie(()=>e.resolve(Yt(t.to))),s=Ie(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],f=n.matched;if(!l||!f.length)return-1;const p=f.findIndex(bn.bind(null,l));if(p>-1)return p;const _=oa(c[u-2]);return u>1&&oa(l)===_&&f[f.length-1].path!==_?f.findIndex(bn.bind(null,c[u-2])):p}),i=Ie(()=>s.value>-1&&rp(n.params,r.value.params)),o=Ie(()=>s.value>-1&&s.value===n.matched.length-1&&ll(n.params,r.value.params));function a(c={}){return np(c)?e[Yt(t.replace)?"replace":"push"](Yt(t.to)).catch(Hn):Promise.resolve()}return{route:r,href:Ie(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const ep=Dc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ia,setup(t,{slots:e}){const n=rr(ia(t)),{options:r}=Ye(ms),s=Ie(()=>({[aa(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[aa(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Zc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),tp=ep;function np(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rp(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function oa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const aa=(t,e,n)=>t??e??n,sp=Dc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ye(fi),s=Ie(()=>t.route||r.value),i=Ye(sa,0),o=Ie(()=>{let u=Yt(i);const{matched:l}=s.value;let f;for(;(f=l[u])&&!f.components;)u++;return u}),a=Ie(()=>s.value.matched[o.value]);Sr(sa,Ie(()=>o.value+1)),Sr(Qh,a),Sr(fi,s);const c=oe();return Fn(()=>[c.value,a.value,t.name],([u,l,f],[p,_,v])=>{l&&(l.instances[f]=u,_&&_!==l&&u&&u===p&&(l.leaveGuards.size||(l.leaveGuards=_.leaveGuards),l.updateGuards.size||(l.updateGuards=_.updateGuards))),u&&l&&(!_||!bn(l,_)||!p)&&(l.enterCallbacks[f]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,f=a.value,p=f&&f.components[l];if(!p)return ca(n.default,{Component:p,route:u});const _=f.props[l],v=_?_===!0?u.params:typeof _=="function"?_(u):_:null,N=Zc(p,ce({},v,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(f.instances[l]=null)},ref:c}));return ca(n.default,{Component:N,route:u})||N}}});function ca(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ml=sp;function ip(t){const e=Kh(t.routes,t),n=t.parseQuery||Yh,r=t.stringifyQuery||ra,s=t.history,i=xn(),o=xn(),a=xn(),c=lf(bt);let u=bt;ln&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Ds.bind(null,m=>""+m),f=Ds.bind(null,vh),p=Ds.bind(null,Jn);function _(m,S){let A,k;return fl(m)?(A=e.getRecordMatcher(m),k=S):k=m,e.addRoute(k,A)}function v(m){const S=e.getRecordMatcher(m);S&&e.removeRoute(S)}function b(){return e.getRoutes().map(m=>m.record)}function N(m){return!!e.getRecordMatcher(m)}function P(m,S){if(S=ce({},S||c.value),typeof m=="string"){const h=Ms(n,m,S.path),g=e.resolve({path:h.path},S),w=s.createHref(h.fullPath);return ce(h,g,{params:p(g.params),hash:Jn(h.hash),redirectedFrom:void 0,href:w})}let A;if(m.path!=null)A=ce({},m,{path:Ms(n,m.path,S.path).path});else{const h=ce({},m.params);for(const g in h)h[g]==null&&delete h[g];A=ce({},m,{params:f(h)}),S.params=f(S.params)}const k=e.resolve(A,S),G=m.hash||"";k.params=l(p(k.params));const Z=Eh(r,ce({},m,{hash:mh(G),path:k.path})),d=s.createHref(Z);return ce({fullPath:Z,hash:G,query:r===ra?Xh(m.query):m.query||{}},k,{redirectedFrom:void 0,href:d})}function M(m){return typeof m=="string"?Ms(n,m,c.value.path):ce({},m)}function U(m,S){if(u!==m)return En(8,{from:S,to:m})}function q(m){return se(m)}function J(m){return q(ce(M(m),{replace:!0}))}function $(m){const S=m.matched[m.matched.length-1];if(S&&S.redirect){const{redirect:A}=S;let k=typeof A=="function"?A(m):A;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=M(k):{path:k},k.params={}),ce({query:m.query,hash:m.hash,params:k.path!=null?{}:m.params},k)}}function se(m,S){const A=u=P(m),k=c.value,G=m.state,Z=m.force,d=m.replace===!0,h=$(A);if(h)return se(ce(M(h),{state:typeof h=="object"?ce({},G,h.state):G,force:Z,replace:d}),S||A);const g=A;g.redirectedFrom=S;let w;return!Z&&wh(r,k,A)&&(w=En(16,{to:g,from:k}),Ae(k,k,!0,!1)),(w?Promise.resolve(w):fe(g,k)).catch(y=>ft(y)?ft(y,2)?y:et(y):te(y,g,k)).then(y=>{if(y){if(ft(y,2))return se(ce({replace:d},M(y.to),{state:typeof y.to=="object"?ce({},G,y.to.state):G,force:Z}),S||g)}else y=Se(g,k,!0,d,G);return ve(g,k,y),y})}function W(m,S){const A=U(m,S);return A?Promise.reject(A):Promise.resolve()}function F(m){const S=tt.values().next().value;return S&&typeof S.runWithContext=="function"?S.runWithContext(m):m()}function fe(m,S){let A;const[k,G,Z]=op(m,S);A=Us(k.reverse(),"beforeRouteLeave",m,S);for(const h of k)h.leaveGuards.forEach(g=>{A.push(Ot(g,m,S))});const d=W.bind(null,m,S);return A.push(d),L(A).then(()=>{A=[];for(const h of i.list())A.push(Ot(h,m,S));return A.push(d),L(A)}).then(()=>{A=Us(G,"beforeRouteUpdate",m,S);for(const h of G)h.updateGuards.forEach(g=>{A.push(Ot(g,m,S))});return A.push(d),L(A)}).then(()=>{A=[];for(const h of Z)if(h.beforeEnter)if(Xe(h.beforeEnter))for(const g of h.beforeEnter)A.push(Ot(g,m,S));else A.push(Ot(h.beforeEnter,m,S));return A.push(d),L(A)}).then(()=>(m.matched.forEach(h=>h.enterCallbacks={}),A=Us(Z,"beforeRouteEnter",m,S,F),A.push(d),L(A))).then(()=>{A=[];for(const h of o.list())A.push(Ot(h,m,S));return A.push(d),L(A)}).catch(h=>ft(h,8)?h:Promise.reject(h))}function ve(m,S,A){a.list().forEach(k=>F(()=>k(m,S,A)))}function Se(m,S,A,k,G){const Z=U(m,S);if(Z)return Z;const d=S===bt,h=ln?history.state:{};A&&(k||d?s.replace(m.fullPath,ce({scroll:d&&h&&h.scroll},G)):s.push(m.fullPath,G)),c.value=m,Ae(m,S,A,d),et()}let Ue;function Ze(){Ue||(Ue=s.listen((m,S,A)=>{if(!Q.listening)return;const k=P(m),G=$(k);if(G){se(ce(G,{replace:!0}),k).catch(Hn);return}u=k;const Z=c.value;ln&&Oh(Jo(Z.fullPath,A.delta),ps()),fe(k,Z).catch(d=>ft(d,12)?d:ft(d,2)?(se(d.to,k).then(h=>{ft(h,20)&&!A.delta&&A.type===Yn.pop&&s.go(-1,!1)}).catch(Hn),Promise.reject()):(A.delta&&s.go(-A.delta,!1),te(d,k,Z))).then(d=>{d=d||Se(k,Z,!1),d&&(A.delta&&!ft(d,8)?s.go(-A.delta,!1):A.type===Yn.pop&&ft(d,20)&&s.go(-1,!1)),ve(k,Z,d)}).catch(Hn)}))}let ye=xn(),X=xn(),ie;function te(m,S,A){et(m);const k=X.list();return k.length?k.forEach(G=>G(m,S,A)):console.error(m),Promise.reject(m)}function ze(){return ie&&c.value!==bt?Promise.resolve():new Promise((m,S)=>{ye.add([m,S])})}function et(m){return ie||(ie=!m,Ze(),ye.list().forEach(([S,A])=>m?A(m):S()),ye.reset()),m}function Ae(m,S,A,k){const{scrollBehavior:G}=t;if(!ln||!G)return Promise.resolve();const Z=!A&&kh(Jo(m.fullPath,0))||(k||!A)&&history.state&&history.state.scroll||null;return Fi().then(()=>G(m,S,Z)).then(d=>d&&Ph(d)).catch(d=>te(d,m,S))}const Pe=m=>s.go(m);let Ke;const tt=new Set,Q={currentRoute:c,listening:!0,addRoute:_,removeRoute:v,hasRoute:N,getRoutes:b,resolve:P,options:t,push:q,replace:J,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:ze,install(m){const S=this;m.component("RouterLink",tp),m.component("RouterView",ml),m.config.globalProperties.$router=S,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(c)}),ln&&!Ke&&c.value===bt&&(Ke=!0,q(s.location).catch(G=>{}));const A={};for(const G in bt)Object.defineProperty(A,G,{get:()=>c.value[G],enumerable:!0});m.provide(ms,S),m.provide(pl,yc(A)),m.provide(fi,c);const k=m.unmount;tt.add(m),m.unmount=function(){tt.delete(m),tt.size<1&&(u=bt,Ue&&Ue(),Ue=null,c.value=bt,Ke=!1,ie=!1),k()}}};function L(m){return m.reduce((S,A)=>S.then(()=>F(A)),Promise.resolve())}return Q}function op(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>bn(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>bn(u,c))||s.push(c))}return[n,r,s]}function ap(){return Ye(ms)}const ir=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},cp={class:"main-container"},lp={__name:"App",setup(t){return(e,n)=>(ae(),de("div",cp,[Re(Yt(ml))]))}},up=ir(lp,[["__scopeId","data-v-4129fcea"]]);var la={};/**
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
 */const gl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,_=u&63;c||(_=64,o||(p=64)),r.push(n[l],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new dp;const p=i<<2|a>>4;if(r.push(p),u!==64){const _=a<<4&240|u>>2;if(r.push(_),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hp=function(t){const e=gl(t);return _l.encodeByteArray(e,!0)},vl=function(t){return hp(t).replace(/\./g,"")},yl=function(t){try{return _l.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mp=()=>pp().__FIREBASE_DEFAULTS__,gp=()=>{if(typeof process>"u"||typeof la>"u")return;const t=la.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_p=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yl(t[1]);return e&&JSON.parse(e)},Wi=()=>{try{return mp()||gp()||_p()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vp=t=>{var e,n;return(n=(e=Wi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bl=()=>{var t;return(t=Wi())===null||t===void 0?void 0:t.config},El=t=>{var e;return(e=Wi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class yp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Ep(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ip(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sp(){try{return typeof indexedDB=="object"}catch{return!1}}function Tp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Rp="FirebaseError";class jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rp,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,or.prototype.create)}}class or{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Cp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new jt(s,a,r)}}function Cp(t,e){return t.replace(Ap,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ap=/\{\$([^}]+)}/g;function Pp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ua(i)&&ua(o)){if(!Hr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ua(t){return t!==null&&typeof t=="object"}/**
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
 */function ar(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Dn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Mn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Op(t,e){const n=new kp(t,e);return n.subscribe.bind(n)}class kp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Fs),s.error===void 0&&(s.error=Fs),s.complete===void 0&&(s.complete=Fs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fs(){}/**
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
 */const zt="[DEFAULT]";/**
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
 */class Np{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dp(e))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zt){return this.instances.has(e)}getOptions(e=zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zt){return this.component?this.component.multipleInstances?e:zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lp(t){return t===zt?void 0:t}function Dp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Mp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Np(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Up={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Fp=ue.INFO,Bp={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},$p=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Bp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wl{constructor(e){this.name=e,this._logLevel=Fp,this._logHandler=$p,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Up[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const jp=(t,e)=>e.some(n=>t instanceof n);let fa,da;function Hp(){return fa||(fa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vp(){return da||(da=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Il=new WeakMap,di=new WeakMap,Sl=new WeakMap,Bs=new WeakMap,zi=new WeakMap;function Wp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ft(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Il.set(n,t)}).catch(()=>{}),zi.set(e,t),e}function zp(t){if(di.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});di.set(t,e)}let hi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return di.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kp(t){hi=t(hi)}function qp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($s(this),e,...n);return Sl.set(r,e.sort?e.sort():[e]),Ft(r)}:Vp().includes(t)?function(...e){return t.apply($s(this),e),Ft(Il.get(this))}:function(...e){return Ft(t.apply($s(this),e))}}function Gp(t){return typeof t=="function"?qp(t):(t instanceof IDBTransaction&&zp(t),jp(t,Hp())?new Proxy(t,hi):t)}function Ft(t){if(t instanceof IDBRequest)return Wp(t);if(Bs.has(t))return Bs.get(t);const e=Gp(t);return e!==t&&(Bs.set(t,e),zi.set(e,t)),e}const $s=t=>zi.get(t);function Jp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ft(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ft(o.result),c.oldVersion,c.newVersion,Ft(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Yp=["get","getKey","getAll","getAllKeys","count"],Xp=["put","add","delete","clear"],js=new Map;function ha(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(js.get(e))return js.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Xp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return js.set(e,i),i}Kp(t=>({...t,get:(e,n,r)=>ha(e,n)||t.get(e,n,r),has:(e,n)=>!!ha(e,n)||t.has(e,n)}));/**
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
 */class Qp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pi="@firebase/app",pa="0.9.27";/**
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
 */const Zt=new wl("@firebase/app"),em="@firebase/app-compat",tm="@firebase/analytics-compat",nm="@firebase/analytics",rm="@firebase/app-check-compat",sm="@firebase/app-check",im="@firebase/auth",om="@firebase/auth-compat",am="@firebase/database",cm="@firebase/database-compat",lm="@firebase/functions",um="@firebase/functions-compat",fm="@firebase/installations",dm="@firebase/installations-compat",hm="@firebase/messaging",pm="@firebase/messaging-compat",mm="@firebase/performance",gm="@firebase/performance-compat",_m="@firebase/remote-config",vm="@firebase/remote-config-compat",ym="@firebase/storage",bm="@firebase/storage-compat",Em="@firebase/firestore",wm="@firebase/firestore-compat",Im="firebase",Sm="10.8.0";/**
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
 */const mi="[DEFAULT]",Tm={[pi]:"fire-core",[em]:"fire-core-compat",[nm]:"fire-analytics",[tm]:"fire-analytics-compat",[sm]:"fire-app-check",[rm]:"fire-app-check-compat",[im]:"fire-auth",[om]:"fire-auth-compat",[am]:"fire-rtdb",[cm]:"fire-rtdb-compat",[lm]:"fire-fn",[um]:"fire-fn-compat",[fm]:"fire-iid",[dm]:"fire-iid-compat",[hm]:"fire-fcm",[pm]:"fire-fcm-compat",[mm]:"fire-perf",[gm]:"fire-perf-compat",[_m]:"fire-rc",[vm]:"fire-rc-compat",[ym]:"fire-gcs",[bm]:"fire-gcs-compat",[Em]:"fire-fst",[wm]:"fire-fst-compat","fire-js":"fire-js",[Im]:"fire-js-all"};/**
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
 */const Vr=new Map,gi=new Map;function Rm(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xn(t){const e=t.name;if(gi.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;gi.set(e,t);for(const n of Vr.values())Rm(n,t);return!0}function Tl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Cm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bt=new or("app","Firebase",Cm);/**
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
 */class Am{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
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
 */const cr=Sm;function Rl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Bt.create("bad-app-name",{appName:String(s)});if(n||(n=bl()),!n)throw Bt.create("no-options");const i=Vr.get(s);if(i){if(Hr(n,i.options)&&Hr(r,i.config))return i;throw Bt.create("duplicate-app",{appName:s})}const o=new Mp(s);for(const c of gi.values())o.addComponent(c);const a=new Am(n,r,o);return Vr.set(s,a),a}function Pm(t=mi){const e=Vr.get(t);if(!e&&t===mi&&bl())return Rl();if(!e)throw Bt.create("no-app",{appName:t});return e}function mn(t,e,n){var r;let s=(r=Tm[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(a.join(" "));return}Xn(new wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Om="firebase-heartbeat-database",km=1,Qn="firebase-heartbeat-store";let Hs=null;function Cl(){return Hs||(Hs=Jp(Om,km,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bt.create("idb-open",{originalErrorMessage:t.message})})),Hs}async function xm(t){try{const n=(await Cl()).transaction(Qn),r=await n.objectStore(Qn).get(Al(t));return await n.done,r}catch(e){if(e instanceof jt)Zt.warn(e.message);else{const n=Bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(n.message)}}}async function ma(t,e){try{const r=(await Cl()).transaction(Qn,"readwrite");await r.objectStore(Qn).put(e,Al(t)),await r.done}catch(n){if(n instanceof jt)Zt.warn(n.message);else{const r=Bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zt.warn(r.message)}}}function Al(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Nm=1024,Lm=30*24*60*60*1e3;class Dm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Um(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ga();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Lm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ga(),{heartbeatsToSend:r,unsentEntries:s}=Mm(this._heartbeatsCache.heartbeats),i=vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ga(){return new Date().toISOString().substring(0,10)}function Mm(t,e=Nm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_a(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_a(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Um{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sp()?Tp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ma(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ma(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _a(t){return vl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Fm(t){Xn(new wn("platform-logger",e=>new Qp(e),"PRIVATE")),Xn(new wn("heartbeat",e=>new Dm(e),"PRIVATE")),mn(pi,pa,t),mn(pi,pa,"esm2017"),mn("fire-js","")}Fm("");function Ki(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Pl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bm=Pl,Ol=new or("auth","Firebase",Pl());/**
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
 */const Wr=new wl("@firebase/auth");function $m(t,...e){Wr.logLevel<=ue.WARN&&Wr.warn(`Auth (${cr}): ${t}`,...e)}function Ar(t,...e){Wr.logLevel<=ue.ERROR&&Wr.error(`Auth (${cr}): ${t}`,...e)}/**
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
 */function Qe(t,...e){throw qi(t,...e)}function at(t,...e){return qi(t,...e)}function jm(t,e,n){const r=Object.assign(Object.assign({},Bm()),{[e]:n});return new or("auth","Firebase",r).create(e,{appName:t.name})}function qi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ol.create(t,...e)}function H(t,e,...n){if(!t)throw qi(e,...n)}function dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ar(e),new Error(e)}function gt(t,e){t||dt(e)}/**
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
 */function _i(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Hm(){return va()==="http:"||va()==="https:"}function va(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Vm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hm()||Ep()||"connection"in navigator)?navigator.onLine:!0}function Wm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class lr{constructor(e,n){this.shortDelay=e,this.longDelay=n,gt(n>e,"Short delay should be less than long delay!"),this.isMobile=bp()||wp()}get(){return Vm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gi(t,e){gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Km=new lr(3e4,6e4);function rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ht(t,e,n,r,s={}){return xl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ar(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),kl.fetch()(Nl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function xl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zm),e);try{const s=new Gm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw br(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw br(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw br(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw br(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jm(t,l,u);Qe(t,l)}}catch(s){if(s instanceof jt)throw s;Qe(t,"network-request-failed",{message:String(s)})}}async function gs(t,e,n,r,s={}){const i=await Ht(t,e,n,r,s);return"mfaPendingCredential"in i&&Qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Nl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Gi(t.config,s):`${t.config.apiScheme}://${s}`}function qm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Gm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),Km.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function br(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=at(t,e,r);return s.customData._tokenResponse=n,s}function ya(t){return t!==void 0&&t.enterprise!==void 0}class Jm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qm(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ym(t,e){return Ht(t,"GET","/v2/recaptchaConfig",rn(t,e))}/**
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
 */async function Xm(t,e){return Ht(t,"POST","/v1/accounts:delete",e)}async function Qm(t,e){return Ht(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zm(t,e=!1){const n=vt(t),r=await n.getIdToken(e),s=Ji(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wn(Vs(s.auth_time)),issuedAtTime:Wn(Vs(s.iat)),expirationTime:Wn(Vs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vs(t){return Number(t)*1e3}function Ji(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ar("JWT malformed, contained fewer than 3 sections"),null;try{const s=yl(n);return s?JSON.parse(s):(Ar("Failed to decode base64 JWT payload"),null)}catch(s){return Ar("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function eg(t){const e=Ji(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jt&&tg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ng{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ll{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wn(this.lastLoginAt),this.creationTime=Wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Zn(t,Qm(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ig(i.providerUserInfo):[],a=sg(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ll(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,f)}async function rg(t){const e=vt(t);await zr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ig(t){return t.map(e=>{var{providerId:n}=e,r=Ki(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function og(t,e){const n=await xl(t,{},async()=>{const r=ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Nl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ag(t,e){return Ht(t,"POST","/v2/accounts:revokeToken",rn(t,e))}/**
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
 */class er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await og(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new er;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new er,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
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
 */function Et(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ki(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ng(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ll(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zn(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zm(this,e)}reload(){return rg(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zn(this,Xm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:U,emailVerified:q,isAnonymous:J,providerData:$,stsTokenManager:se}=n;H(U&&se,e,"internal-error");const W=er.fromJSON(this.name,se);H(typeof U=="string",e,"internal-error"),Et(f,e.name),Et(p,e.name),H(typeof q=="boolean",e,"internal-error"),H(typeof J=="boolean",e,"internal-error"),Et(_,e.name),Et(v,e.name),Et(b,e.name),Et(N,e.name),Et(P,e.name),Et(M,e.name);const F=new Xt({uid:U,auth:e,email:p,emailVerified:q,displayName:f,isAnonymous:J,photoURL:v,phoneNumber:_,tenantId:b,stsTokenManager:W,createdAt:P,lastLoginAt:M});return $&&Array.isArray($)&&(F.providerData=$.map(fe=>Object.assign({},fe))),N&&(F._redirectEventId=N),F}static async _fromIdTokenResponse(e,n,r=!1){const s=new er;s.updateFromServerResponse(n);const i=new Xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await zr(i),i}}/**
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
 */const ba=new Map;function ht(t){gt(t instanceof Function,"Expected a class definition");let e=ba.get(t);return e?(gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ba.set(t,e),e)}/**
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
 */class Dl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dl.type="NONE";const Ea=Dl;/**
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
 */function Pr(t,e,n){return`firebase:${t}:${e}:${n}`}class gn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Pr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Pr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gn(ht(Ea),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||ht(Ea);const o=Pr(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const f=Xt._fromJSON(e,l);u!==i&&(a=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new gn(i,e,r))}}/**
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
 */function wa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ml(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($l(e))return"Blackberry";if(jl(e))return"Webos";if(Yi(e))return"Safari";if((e.includes("chrome/")||Ul(e))&&!e.includes("edge/"))return"Chrome";if(Bl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ml(t=xe()){return/firefox\//i.test(t)}function Yi(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ul(t=xe()){return/crios\//i.test(t)}function Fl(t=xe()){return/iemobile/i.test(t)}function Bl(t=xe()){return/android/i.test(t)}function $l(t=xe()){return/blackberry/i.test(t)}function jl(t=xe()){return/webos/i.test(t)}function _s(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cg(t=xe()){var e;return _s(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lg(){return Ip()&&document.documentMode===10}function Hl(t=xe()){return _s(t)||Bl(t)||jl(t)||$l(t)||/windows phone/i.test(t)||Fl(t)}function ug(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Vl(t,e=[]){let n;switch(t){case"Browser":n=wa(xe());break;case"Worker":n=`${wa(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cr}/${r}`}/**
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
 */class fg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function dg(t,e={}){return Ht(t,"GET","/v2/passwordPolicy",rn(t,e))}/**
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
 */const hg=6;class pg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:hg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class mg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ia(this),this.idTokenSubscription=new Ia(this),this.beforeStateQueue=new fg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ol,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ht(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await gn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?vt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dg(this),n=new pg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new or("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ag(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ht(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await gn.create(this,[ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$m(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cn(t){return vt(t)}class Ia{constructor(e){this.auth=e,this.observer=null,this.addObserver=Op(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gg(t){vs=t}function Wl(t){return vs.loadJS(t)}function _g(){return vs.recaptchaEnterpriseScript}function vg(){return vs.gapiScript}function yg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bg="recaptcha-enterprise",Eg="NO_RECAPTCHA";class wg{constructor(e){this.type=bg,this.auth=Cn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Ym(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Jm(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ya(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Eg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ya(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=_g();c.length!==0&&(c+=a),Wl(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Sa(t,e,n,r=!1){const s=new wg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ta(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Sa(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Sa(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Ig(t,e){const n=Tl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Hr(i,e??{}))return s;Qe(s,"already-initialized")}return n.initialize({options:e})}function Sg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Tg(t,e,n){const r=Cn(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=zl(e),{host:o,port:a}=Rg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Cg()}function zl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Rg(t){const e=zl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ra(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ra(o)}}}function Ra(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Cg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,n){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function Ag(t,e){return Ht(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Pg(t,e){return gs(t,"POST","/v1/accounts:signInWithPassword",rn(t,e))}/**
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
 */async function Og(t,e){return gs(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}async function kg(t,e){return gs(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}/**
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
 */class tr extends Xi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new tr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new tr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ta(e,n,"signInWithPassword",Pg);case"emailLink":return Og(e,{email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ta(e,r,"signUpPassword",Ag);case"emailLink":return kg(e,{idToken:n,email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function _n(t,e){return gs(t,"POST","/v1/accounts:signInWithIdp",rn(t,e))}/**
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
 */const xg="http://localhost";class en extends Xi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ki(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new en(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _n(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_n(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_n(e,n)}buildRequest(){const e={requestUri:xg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ar(n)}return e}}/**
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
 */function Ng(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lg(t){const e=Dn(Mn(t)).link,n=e?Dn(Mn(e)).deep_link_id:null,r=Dn(Mn(t)).deep_link_id;return(r?Dn(Mn(r)).link:null)||r||n||e||t}class Qi{constructor(e){var n,r,s,i,o,a;const c=Dn(Mn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Ng((s=c.mode)!==null&&s!==void 0?s:null);H(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Lg(e);try{return new Qi(n)}catch{return null}}}/**
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
 */class An{constructor(){this.providerId=An.PROVIDER_ID}static credential(e,n){return tr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qi.parseLink(n);return H(r,"argument-error"),tr._fromEmailAndCode(e,r.code,r.tenantId)}}An.PROVIDER_ID="password";An.EMAIL_PASSWORD_SIGN_IN_METHOD="password";An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Kl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ur extends Kl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kt extends ur{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
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
 */class xt extends ur{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return en._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xt.credential(n,r)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
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
 */class Nt extends ur{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.GITHUB_SIGN_IN_METHOD="github.com";Nt.PROVIDER_ID="github.com";/**
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
 */class Lt extends ur{constructor(){super("twitter.com")}static credential(e,n){return en._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.TWITTER_SIGN_IN_METHOD="twitter.com";Lt.PROVIDER_ID="twitter.com";/**
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
 */class In{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Xt._fromIdTokenResponse(e,r,s),o=Ca(r);return new In({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ca(r);return new In({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ca(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Kr extends jt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Kr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Kr(e,n,r,s)}}function ql(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Kr._fromErrorAndOperation(t,i,e,r):i})}async function Dg(t,e,n=!1){const r=await Zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return In._forOperation(t,"link",r)}/**
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
 */async function Mg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Zn(t,ql(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=Ji(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),In._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qe(r,"user-mismatch"),i}}/**
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
 */async function Gl(t,e,n=!1){const r="signIn",s=await ql(t,r,e),i=await In._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ug(t,e){return Gl(Cn(t),e)}/**
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
 */async function Fg(t){const e=Cn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Bg(t,e,n){return Ug(vt(t),An.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Fg(t),r})}function $g(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function jg(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function Hg(t,e,n,r){return vt(t).onAuthStateChanged(e,n,r)}function Vg(t){return vt(t).signOut()}const qr="__sak";/**
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
 */class Jl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qr,"1"),this.storage.removeItem(qr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Wg(){const t=xe();return Yi(t)||_s(t)}const zg=1e3,Kg=10;class Yl extends Jl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Wg()&&ug(),this.fallbackToPolling=Hl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Kg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yl.type="LOCAL";const qg=Yl;/**
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
 */class Xl extends Jl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xl.type="SESSION";const Ql=Xl;/**
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
 */function Gg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ys{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ys(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Gg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ys.receivers=[];/**
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
 */function Zi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Jg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Zi("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ct(){return window}function Yg(t){ct().location.href=t}/**
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
 */function Zl(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function Xg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Zg(){return Zl()?self:null}/**
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
 */const eu="firebaseLocalStorageDb",e_=1,Gr="firebaseLocalStorage",tu="fbase_key";class fr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bs(t,e){return t.transaction([Gr],e?"readwrite":"readonly").objectStore(Gr)}function t_(){const t=indexedDB.deleteDatabase(eu);return new fr(t).toPromise()}function vi(){const t=indexedDB.open(eu,e_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gr,{keyPath:tu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gr)?e(r):(r.close(),await t_(),e(await vi()))})})}async function Aa(t,e,n){const r=bs(t,!0).put({[tu]:e,value:n});return new fr(r).toPromise()}async function n_(t,e){const n=bs(t,!1).get(e),r=await new fr(n).toPromise();return r===void 0?null:r.value}function Pa(t,e){const n=bs(t,!0).delete(e);return new fr(n).toPromise()}const r_=800,s_=3;class nu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>s_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ys._getInstance(Zg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Xg(),!this.activeServiceWorker)return;this.sender=new Jg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Qg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vi();return await Aa(e,qr,"1"),await Pa(e,qr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Aa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>n_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=bs(s,!1).getAll();return new fr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),r_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nu.type="LOCAL";const i_=nu;new lr(3e4,6e4);/**
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
 */function o_(t,e){return e?ht(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class eo extends Xi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _n(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _n(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _n(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function a_(t){return Gl(t.auth,new eo(t),t.bypassAuthState)}function c_(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Mg(n,new eo(t),t.bypassAuthState)}async function l_(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Dg(n,new eo(t),t.bypassAuthState)}/**
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
 */class ru{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return a_;case"linkViaPopup":case"linkViaRedirect":return l_;case"reauthViaPopup":case"reauthViaRedirect":return c_;default:Qe(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const u_=new lr(2e3,1e4);class un extends ru{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const e=Zi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,u_.get())};e()}}un.currentPopupAction=null;/**
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
 */const f_="pendingRedirect",Or=new Map;class d_ extends ru{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Or.get(this.auth._key());if(!e){try{const r=await h_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Or.set(this.auth._key(),e)}return this.bypassAuthState||Or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function h_(t,e){const n=g_(e),r=m_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function p_(t,e){Or.set(t._key(),e)}function m_(t){return ht(t._redirectPersistence)}function g_(t){return Pr(f_,t.config.apiKey,t.name)}async function __(t,e,n=!1){const r=Cn(t),s=o_(r,e),o=await new d_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const v_=10*60*1e3;class y_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!b_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!su(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=v_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oa(e))}saveEventToCache(e){this.cachedEventUids.add(Oa(e)),this.lastProcessedEventTime=Date.now()}}function Oa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function su({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function b_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return su(t);default:return!1}}/**
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
 */async function E_(t,e={}){return Ht(t,"GET","/v1/projects",e)}/**
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
 */const w_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,I_=/^https?/;async function S_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await E_(t);for(const n of e)try{if(T_(n))return}catch{}Qe(t,"unauthorized-domain")}function T_(t){const e=_i(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!I_.test(n))return!1;if(w_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const R_=new lr(3e4,6e4);function ka(){const t=ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function C_(t){return new Promise((e,n)=>{var r,s,i;function o(){ka(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ka(),n(at(t,"network-request-failed"))},timeout:R_.get()})}if(!((s=(r=ct().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ct().gapi)===null||i===void 0)&&i.load)o();else{const a=yg("iframefcb");return ct()[a]=()=>{gapi.load?o():n(at(t,"network-request-failed"))},Wl(`${vg()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw kr=null,e})}let kr=null;function A_(t){return kr=kr||C_(t),kr}/**
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
 */const P_=new lr(5e3,15e3),O_="__/auth/iframe",k_="emulator/auth/iframe",x_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},N_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function L_(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gi(e,k_):`https://${t.config.authDomain}/${O_}`,r={apiKey:e.apiKey,appName:t.name,v:cr},s=N_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ar(r).slice(1)}`}async function D_(t){const e=await A_(t),n=ct().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:L_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:x_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=at(t,"network-request-failed"),a=ct().setTimeout(()=>{i(o)},P_.get());function c(){ct().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const M_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},U_=500,F_=600,B_="_blank",$_="http://localhost";class xa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function j_(t,e,n,r=U_,s=F_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},M_),{width:r.toString(),height:s.toString(),top:i,left:o}),u=xe().toLowerCase();n&&(a=Ul(u)?B_:n),Ml(u)&&(e=e||$_,c.scrollbars="yes");const l=Object.entries(c).reduce((p,[_,v])=>`${p}${_}=${v},`,"");if(cg(u)&&a!=="_self")return H_(e||"",a),new xa(null);const f=window.open(e||"",a,l);H(f,t,"popup-blocked");try{f.focus()}catch{}return new xa(f)}function H_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const V_="__/auth/handler",W_="emulator/auth/handler",z_=encodeURIComponent("fac");async function Na(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cr,eventId:s};if(e instanceof Kl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,f]of Object.entries(i||{}))o[l]=f}if(e instanceof ur){const l=e.getScopes().filter(f=>f!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${z_}=${encodeURIComponent(c)}`:"";return`${K_(t)}?${ar(a).slice(1)}${u}`}function K_({config:t}){return t.emulator?Gi(t,W_):`https://${t.authDomain}/${V_}`}/**
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
 */const Ws="webStorageSupport";class q_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ql,this._completeRedirectFn=__,this._overrideRedirectResult=p_}async _openPopup(e,n,r,s){var i;gt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Na(e,n,r,_i(),s);return j_(e,o,Zi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Na(e,n,r,_i(),s);return Yg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await D_(e),r=new y_(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ws,{type:Ws},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ws];o!==void 0&&n(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=S_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hl()||Yi()||_s()}}const G_=q_;var La="@firebase/auth",Da="1.6.0";/**
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
 */class J_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Y_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function X_(t){Xn(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vl(t)},u=new mg(r,s,i,c);return Sg(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xn(new wn("auth-internal",e=>{const n=Cn(e.getProvider("auth").getImmediate());return(r=>new J_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(La,Da,Y_(t)),mn(La,Da,"esm2017")}/**
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
 */const Q_=5*60,Z_=El("authIdTokenMaxAge")||Q_;let Ma=null;const ev=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Z_)return;const s=n==null?void 0:n.token;Ma!==s&&(Ma=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function iu(t=Pm()){const e=Tl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ig(t,{popupRedirectResolver:G_,persistence:[i_,qg,Ql]}),r=El("authTokenSyncURL");if(r){const i=ev(r);jg(n,i,()=>i(n.currentUser)),$g(n,o=>i(o))}const s=vp("auth");return s&&Tg(n,`http://${s}`),n}function tv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}gg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=at("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",tv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});X_("Browser");var nv="firebase",rv="10.8.0";/**
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
 */mn(nv,rv,"app");const sv="modulepreload",iv=function(t){return"/sirbofi/"+t},Ua={},Fa=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=iv(o),o in Ua)return;Ua[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const p=i[f];if(p.href===o&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":sv,a||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),a)return new Promise((f,p)=>{l.addEventListener("load",f),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},ov=t=>(os("data-v-93aa088f"),t=t(),as(),t),av={class:"top-bar-container"},cv=ov(()=>T("span",{class:"current-user"},null,-1)),lv={__name:"top-bar",setup(t){Rs();const e=()=>{const n=iu();Vg(n)};return(n,r)=>(ae(),de("div",av,[cv,T("span",{class:"buttons-wrapper"},[T("button",{onClick:e},"Log out")])]))}},uv=ir(lv,[["__scopeId","data-v-93aa088f"]]),fv={},dv=t=>(os("data-v-a88a5f1b"),t=t(),as(),t),hv={class:"loading-spinner"},pv=dv(()=>T("div",{class:"spinner"},null,-1)),mv=[pv];function gv(t,e){return ae(),de("div",hv,mv)}const yi=ir(fv,[["render",gv],["__scopeId","data-v-a88a5f1b"]]);function ou(t,e){return function(){return t.apply(e,arguments)}}const{toString:_v}=Object.prototype,{getPrototypeOf:to}=Object,Es=(t=>e=>{const n=_v.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ut=t=>(t=t.toLowerCase(),e=>Es(e)===t),ws=t=>e=>typeof e===t,{isArray:Pn}=Array,nr=ws("undefined");function vv(t){return t!==null&&!nr(t)&&t.constructor!==null&&!nr(t.constructor)&&We(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const au=ut("ArrayBuffer");function yv(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&au(t.buffer),e}const bv=ws("string"),We=ws("function"),cu=ws("number"),Is=t=>t!==null&&typeof t=="object",Ev=t=>t===!0||t===!1,xr=t=>{if(Es(t)!=="object")return!1;const e=to(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},wv=ut("Date"),Iv=ut("File"),Sv=ut("Blob"),Tv=ut("FileList"),Rv=t=>Is(t)&&We(t.pipe),Cv=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||We(t.append)&&((e=Es(t))==="formdata"||e==="object"&&We(t.toString)&&t.toString()==="[object FormData]"))},Av=ut("URLSearchParams"),Pv=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function dr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Pn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function lu(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const uu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,fu=t=>!nr(t)&&t!==uu;function bi(){const{caseless:t}=fu(this)&&this||{},e={},n=(r,s)=>{const i=t&&lu(e,s)||s;xr(e[i])&&xr(r)?e[i]=bi(e[i],r):xr(r)?e[i]=bi({},r):Pn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&dr(arguments[r],n);return e}const Ov=(t,e,n,{allOwnKeys:r}={})=>(dr(e,(s,i)=>{n&&We(s)?t[i]=ou(s,n):t[i]=s},{allOwnKeys:r}),t),kv=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),xv=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Nv=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&to(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Lv=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Dv=t=>{if(!t)return null;if(Pn(t))return t;let e=t.length;if(!cu(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Mv=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&to(Uint8Array)),Uv=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},Fv=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Bv=ut("HTMLFormElement"),$v=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ba=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),jv=ut("RegExp"),du=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};dr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},Hv=t=>{du(t,(e,n)=>{if(We(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(We(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Vv=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Pn(t)?r(t):r(String(t).split(e)),n},Wv=()=>{},zv=(t,e)=>(t=+t,Number.isFinite(t)?t:e),zs="abcdefghijklmnopqrstuvwxyz",$a="0123456789",hu={DIGIT:$a,ALPHA:zs,ALPHA_DIGIT:zs+zs.toUpperCase()+$a},Kv=(t=16,e=hu.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function qv(t){return!!(t&&We(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Gv=t=>{const e=new Array(10),n=(r,s)=>{if(Is(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Pn(r)?[]:{};return dr(r,(o,a)=>{const c=n(o,s+1);!nr(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Jv=ut("AsyncFunction"),Yv=t=>t&&(Is(t)||We(t))&&We(t.then)&&We(t.catch),E={isArray:Pn,isArrayBuffer:au,isBuffer:vv,isFormData:Cv,isArrayBufferView:yv,isString:bv,isNumber:cu,isBoolean:Ev,isObject:Is,isPlainObject:xr,isUndefined:nr,isDate:wv,isFile:Iv,isBlob:Sv,isRegExp:jv,isFunction:We,isStream:Rv,isURLSearchParams:Av,isTypedArray:Mv,isFileList:Tv,forEach:dr,merge:bi,extend:Ov,trim:Pv,stripBOM:kv,inherits:xv,toFlatObject:Nv,kindOf:Es,kindOfTest:ut,endsWith:Lv,toArray:Dv,forEachEntry:Uv,matchAll:Fv,isHTMLForm:Bv,hasOwnProperty:Ba,hasOwnProp:Ba,reduceDescriptors:du,freezeMethods:Hv,toObjectSet:Vv,toCamelCase:$v,noop:Wv,toFiniteNumber:zv,findKey:lu,global:uu,isContextDefined:fu,ALPHABET:hu,generateString:Kv,isSpecCompliantForm:qv,toJSONObject:Gv,isAsyncFn:Jv,isThenable:Yv};function ee(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}E.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const pu=ee.prototype,mu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{mu[t]={value:t}});Object.defineProperties(ee,mu);Object.defineProperty(pu,"isAxiosError",{value:!0});ee.from=(t,e,n,r,s,i)=>{const o=Object.create(pu);return E.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),ee.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Xv=null;function Ei(t){return E.isPlainObject(t)||E.isArray(t)}function gu(t){return E.endsWith(t,"[]")?t.slice(0,-2):t}function ja(t,e,n){return t?t.concat(e).map(function(s,i){return s=gu(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Qv(t){return E.isArray(t)&&!t.some(Ei)}const Zv=E.toFlatObject(E,{},null,function(e){return/^is[A-Z]/.test(e)});function Ss(t,e,n){if(!E.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,N){return!E.isUndefined(N[b])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(e);if(!E.isFunction(s))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(E.isDate(v))return v.toISOString();if(!c&&E.isBlob(v))throw new ee("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(v)||E.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function l(v,b,N){let P=v;if(v&&!N&&typeof v=="object"){if(E.endsWith(b,"{}"))b=r?b:b.slice(0,-2),v=JSON.stringify(v);else if(E.isArray(v)&&Qv(v)||(E.isFileList(v)||E.endsWith(b,"[]"))&&(P=E.toArray(v)))return b=gu(b),P.forEach(function(U,q){!(E.isUndefined(U)||U===null)&&e.append(o===!0?ja([b],q,i):o===null?b:b+"[]",u(U))}),!1}return Ei(v)?!0:(e.append(ja(N,b,i),u(v)),!1)}const f=[],p=Object.assign(Zv,{defaultVisitor:l,convertValue:u,isVisitable:Ei});function _(v,b){if(!E.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(v),E.forEach(v,function(P,M){(!(E.isUndefined(P)||P===null)&&s.call(e,P,E.isString(M)?M.trim():M,b,p))===!0&&_(P,b?b.concat(M):[M])}),f.pop()}}if(!E.isObject(t))throw new TypeError("data must be an object");return _(t),e}function Ha(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function no(t,e){this._pairs=[],t&&Ss(t,this,e)}const _u=no.prototype;_u.append=function(e,n){this._pairs.push([e,n])};_u.toString=function(e){const n=e?function(r){return e.call(this,r,Ha)}:Ha;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function ey(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function vu(t,e,n){if(!e)return t;const r=n&&n.encode||ey,s=n&&n.serialize;let i;if(s?i=s(e,n):i=E.isURLSearchParams(e)?e.toString():new no(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Va{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){E.forEach(this.handlers,function(r){r!==null&&e(r)})}}const yu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ty=typeof URLSearchParams<"u"?URLSearchParams:no,ny=typeof FormData<"u"?FormData:null,ry=typeof Blob<"u"?Blob:null,sy={isBrowser:!0,classes:{URLSearchParams:ty,FormData:ny,Blob:ry},protocols:["http","https","file","blob","url","data"]},bu=typeof window<"u"&&typeof document<"u",iy=(t=>bu&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),oy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ay=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:bu,hasStandardBrowserEnv:iy,hasStandardBrowserWebWorkerEnv:oy},Symbol.toStringTag,{value:"Module"})),ot={...ay,...sy};function cy(t,e){return Ss(t,new ot.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return ot.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function ly(t){return E.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function uy(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Eu(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&E.isArray(s)?s.length:o,c?(E.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!E.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&E.isArray(s[o])&&(s[o]=uy(s[o])),!a)}if(E.isFormData(t)&&E.isFunction(t.entries)){const n={};return E.forEachEntry(t,(r,s)=>{e(ly(r),s,n,0)}),n}return null}function fy(t,e,n){if(E.isString(t))try{return(e||JSON.parse)(t),E.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const ro={transitional:yu,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=E.isObject(e);if(i&&E.isHTMLForm(e)&&(e=new FormData(e)),E.isFormData(e))return s?JSON.stringify(Eu(e)):e;if(E.isArrayBuffer(e)||E.isBuffer(e)||E.isStream(e)||E.isFile(e)||E.isBlob(e))return e;if(E.isArrayBufferView(e))return e.buffer;if(E.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return cy(e,this.formSerializer).toString();if((a=E.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ss(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),fy(e)):e}],transformResponse:[function(e){const n=this.transitional||ro.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&E.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ee.from(a,ee.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ot.classes.FormData,Blob:ot.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],t=>{ro.headers[t]={}});const so=ro,dy=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hy=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&dy[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Wa=Symbol("internals");function Nn(t){return t&&String(t).trim().toLowerCase()}function Nr(t){return t===!1||t==null?t:E.isArray(t)?t.map(Nr):String(t)}function py(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const my=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ks(t,e,n,r,s){if(E.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!E.isString(e)){if(E.isString(r))return e.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(e)}}function gy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function _y(t,e){const n=E.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class Ts{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,u){const l=Nn(c);if(!l)throw new Error("header name must be a non-empty string");const f=E.findKey(s,l);(!f||s[f]===void 0||u===!0||u===void 0&&s[f]!==!1)&&(s[f||c]=Nr(a))}const o=(a,c)=>E.forEach(a,(u,l)=>i(u,l,c));return E.isPlainObject(e)||e instanceof this.constructor?o(e,n):E.isString(e)&&(e=e.trim())&&!my(e)?o(hy(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Nn(e),e){const r=E.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return py(s);if(E.isFunction(n))return n.call(this,s,r);if(E.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Nn(e),e){const r=E.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ks(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Nn(o),o){const a=E.findKey(r,o);a&&(!n||Ks(r,r[a],a,n))&&(delete r[a],s=!0)}}return E.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Ks(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return E.forEach(this,(s,i)=>{const o=E.findKey(r,i);if(o){n[o]=Nr(s),delete n[i];return}const a=e?gy(i):String(i).trim();a!==i&&delete n[i],n[a]=Nr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return E.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Wa]=this[Wa]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Nn(o);r[a]||(_y(s,o),r[a]=!0)}return E.isArray(e)?e.forEach(i):i(e),this}}Ts.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(Ts.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});E.freezeMethods(Ts);const mt=Ts;function qs(t,e){const n=this||so,r=e||n,s=mt.from(r.headers);let i=r.data;return E.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function wu(t){return!!(t&&t.__CANCEL__)}function hr(t,e,n){ee.call(this,t??"canceled",ee.ERR_CANCELED,e,n),this.name="CanceledError"}E.inherits(hr,ee,{__CANCEL__:!0});function vy(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const yy=ot.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];E.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),E.isString(r)&&o.push("path="+r),E.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function by(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Ey(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Iu(t,e){return t&&!by(e)?Ey(t,e):e}const wy=ot.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=E.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Iy(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Sy(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),l=r[i];o||(o=u),n[s]=c,r[s]=u;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const _=l&&u-l;return _?Math.round(p*1e3/_):void 0}}function za(t,e){let n=0;const r=Sy(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),u=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-i)/c:void 0,event:s};l[e?"download":"upload"]=!0,t(l)}}const Ty=typeof XMLHttpRequest<"u",Ry=Ty&&function(t){return new Promise(function(n,r){let s=t.data;const i=mt.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function u(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let l;if(E.isFormData(s)){if(ot.hasStandardBrowserEnv||ot.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((l=i.getContentType())!==!1){const[b,...N]=l?l.split(";").map(P=>P.trim()).filter(Boolean):[];i.setContentType([b||"multipart/form-data",...N].join("; "))}}let f=new XMLHttpRequest;if(t.auth){const b=t.auth.username||"",N=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(b+":"+N))}const p=Iu(t.baseURL,t.url);f.open(t.method.toUpperCase(),vu(p,t.params,t.paramsSerializer),!0),f.timeout=t.timeout;function _(){if(!f)return;const b=mt.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),P={data:!o||o==="text"||o==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:b,config:t,request:f};vy(function(U){n(U),u()},function(U){r(U),u()},P),f=null}if("onloadend"in f?f.onloadend=_:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(_)},f.onabort=function(){f&&(r(new ee("Request aborted",ee.ECONNABORTED,t,f)),f=null)},f.onerror=function(){r(new ee("Network Error",ee.ERR_NETWORK,t,f)),f=null},f.ontimeout=function(){let N=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const P=t.transitional||yu;t.timeoutErrorMessage&&(N=t.timeoutErrorMessage),r(new ee(N,P.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,t,f)),f=null},ot.hasStandardBrowserEnv&&(a&&E.isFunction(a)&&(a=a(t)),a||a!==!1&&wy(p))){const b=t.xsrfHeaderName&&t.xsrfCookieName&&yy.read(t.xsrfCookieName);b&&i.set(t.xsrfHeaderName,b)}s===void 0&&i.setContentType(null),"setRequestHeader"in f&&E.forEach(i.toJSON(),function(N,P){f.setRequestHeader(P,N)}),E.isUndefined(t.withCredentials)||(f.withCredentials=!!t.withCredentials),o&&o!=="json"&&(f.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&f.addEventListener("progress",za(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",za(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=b=>{f&&(r(!b||b.type?new hr(null,t,f):b),f.abort(),f=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const v=Iy(p);if(v&&ot.protocols.indexOf(v)===-1){r(new ee("Unsupported protocol "+v+":",ee.ERR_BAD_REQUEST,t));return}f.send(s||null)})},wi={http:Xv,xhr:Ry};E.forEach(wi,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ka=t=>`- ${t}`,Cy=t=>E.isFunction(t)||t===null||t===!1,Su={getAdapter:t=>{t=E.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!Cy(n)&&(r=wi[(o=String(n)).toLowerCase()],r===void 0))throw new ee(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Ka).join(`
`):" "+Ka(i[0]):"as no adapter specified";throw new ee("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:wi};function Gs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new hr(null,t)}function qa(t){return Gs(t),t.headers=mt.from(t.headers),t.data=qs.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Su.getAdapter(t.adapter||so.adapter)(t).then(function(r){return Gs(t),r.data=qs.call(t,t.transformResponse,r),r.headers=mt.from(r.headers),r},function(r){return wu(r)||(Gs(t),r&&r.response&&(r.response.data=qs.call(t,t.transformResponse,r.response),r.response.headers=mt.from(r.response.headers))),Promise.reject(r)})}const Ga=t=>t instanceof mt?t.toJSON():t;function Sn(t,e){e=e||{};const n={};function r(u,l,f){return E.isPlainObject(u)&&E.isPlainObject(l)?E.merge.call({caseless:f},u,l):E.isPlainObject(l)?E.merge({},l):E.isArray(l)?l.slice():l}function s(u,l,f){if(E.isUndefined(l)){if(!E.isUndefined(u))return r(void 0,u,f)}else return r(u,l,f)}function i(u,l){if(!E.isUndefined(l))return r(void 0,l)}function o(u,l){if(E.isUndefined(l)){if(!E.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function a(u,l,f){if(f in e)return r(u,l);if(f in t)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,l)=>s(Ga(u),Ga(l),!0)};return E.forEach(Object.keys(Object.assign({},t,e)),function(l){const f=c[l]||s,p=f(t[l],e[l],l);E.isUndefined(p)&&f!==a||(n[l]=p)}),n}const Tu="1.6.7",io={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{io[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Ja={};io.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Tu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new ee(s(o," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!Ja[o]&&(Ja[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function Ay(t,e,n){if(typeof t!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new ee("option "+i+" must be "+c,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+i,ee.ERR_BAD_OPTION)}}const Ii={assertOptions:Ay,validators:io},wt=Ii.validators;class Jr{constructor(e){this.defaults=e,this.interceptors={request:new Va,response:new Va}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Sn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Ii.assertOptions(r,{silentJSONParsing:wt.transitional(wt.boolean),forcedJSONParsing:wt.transitional(wt.boolean),clarifyTimeoutError:wt.transitional(wt.boolean)},!1),s!=null&&(E.isFunction(s)?n.paramsSerializer={serialize:s}:Ii.assertOptions(s,{encode:wt.function,serialize:wt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&E.merge(i.common,i[n.method]);i&&E.forEach(["delete","get","head","post","put","patch","common"],v=>{delete i[v]}),n.headers=mt.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const u=[];this.interceptors.response.forEach(function(b){u.push(b.fulfilled,b.rejected)});let l,f=0,p;if(!c){const v=[qa.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,u),p=v.length,l=Promise.resolve(n);f<p;)l=l.then(v[f++],v[f++]);return l}p=a.length;let _=n;for(f=0;f<p;){const v=a[f++],b=a[f++];try{_=v(_)}catch(N){b.call(this,N);break}}try{l=qa.call(this,_)}catch(v){return Promise.reject(v)}for(f=0,p=u.length;f<p;)l=l.then(u[f++],u[f++]);return l}getUri(e){e=Sn(this.defaults,e);const n=Iu(e.baseURL,e.url);return vu(n,e.params,e.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(e){Jr.prototype[e]=function(n,r){return this.request(Sn(r||{},{method:e,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(Sn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Jr.prototype[e]=n(),Jr.prototype[e+"Form"]=n(!0)});const Lr=Jr;class oo{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new hr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new oo(function(s){e=s}),cancel:e}}}const Py=oo;function Oy(t){return function(n){return t.apply(null,n)}}function ky(t){return E.isObject(t)&&t.isAxiosError===!0}const Si={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Si).forEach(([t,e])=>{Si[e]=t});const xy=Si;function Ru(t){const e=new Lr(t),n=ou(Lr.prototype.request,e);return E.extend(n,Lr.prototype,e,{allOwnKeys:!0}),E.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Ru(Sn(t,s))},n}const _e=Ru(so);_e.Axios=Lr;_e.CanceledError=hr;_e.CancelToken=Py;_e.isCancel=wu;_e.VERSION=Tu;_e.toFormData=Ss;_e.AxiosError=ee;_e.Cancel=_e.CanceledError;_e.all=function(e){return Promise.all(e)};_e.spread=Oy;_e.isAxiosError=ky;_e.mergeConfig=Sn;_e.AxiosHeaders=mt;_e.formToJSON=t=>Eu(E.isHTMLForm(t)?new FormData(t):t);_e.getAdapter=Su.getAdapter;_e.HttpStatusCode=xy;_e.default=_e;const Me=t=>(os("data-v-c25df89d"),t=t(),as(),t),Ny={class:"service-container"},Ly={class:"filters-container"},Dy={class:"icon open-close"},My={key:0,class:"filtering-pad-content-wrapper basic"},Uy=Me(()=>T("span",{class:"text"}," starting from BTC, ranked by market cap, start analyzing from rank: ",-1)),Fy=Me(()=>T("span",{class:"text"},"number of cryptos to check",-1)),By=Me(()=>T("span",{class:"text"},"number of market pairs to check",-1)),$y={class:"hr-buttons-container"},jy=["onClick"],Hy={class:"text"},Vy=Me(()=>T("span",{class:"text"},"market pairs check offset",-1)),Wy=Me(()=>T("span",{class:"text"},"minimum profit margin %",-1)),zy=Me(()=>T("span",{class:"text"},"maximum profit margin %",-1)),Ky=Me(()=>T("span",{class:"text"},"minimum trading volume (USD)",-1)),qy={class:"bottom-buttons"},Gy=Me(()=>T("span",{class:"text underline"},"Advanced settings",-1)),Jy=[Gy],Yy=Me(()=>T("span",{class:"text underline"},"stop",-1)),Xy=[Yy],Qy=Me(()=>T("span",{class:"text"},"Trigger",-1)),Zy={key:0,class:"text-tiny text-red"},eb={class:"wrap-row"},tb={class:"statistics"},nb={class:"text-tiny"},rb={class:"text-green"},sb={class:"text-tiny"},ib={class:"text text-green"},ob={class:"text-tiny"},ab={class:"text text-green"},cb={key:1,class:"filtering-pad-content-wrapper advanced"},lb=Me(()=>T("span",{class:"text underline"},ge("< basic settings"),-1)),ub=[lb],fb={class:"inputs-wrapper"},db={class:"advanced-filter-container"},hb={class:"text"},pb={class:"hr-buttons-container"},mb=["onClick"],gb={class:"text"},_b={class:"advanced-filter-container"},vb={class:"text"},yb={class:"hr-buttons-container"},bb=["onClick"],Eb={class:"text"},wb={class:"advanced-filter-container"},Ib={class:"text"},Sb={class:"hr-buttons-container"},Tb=Me(()=>T("span",{class:"text"},"SELECT ALL",-1)),Rb=[Tb],Cb=Me(()=>T("span",{class:"text"},"DESELECT ALL",-1)),Ab=[Cb],Pb=["onClick"],Ob={class:"text"},kb=Me(()=>T("span",{class:"text underline"},ge("< basic settings"),-1)),xb=[kb],Nb={class:"all-ops"},Lb=Me(()=>T("span",null,"Clear results",-1)),Db=[Lb],Mb={class:"ops-per-crypto"},Ub={class:"crypto-section-title"},Fb=dd('<div class="op-table-headers" data-v-c25df89d><div class="text exchange-link-header" data-v-c25df89d> Buy from </div><div class="text price-header" data-v-c25df89d> price </div><div class="text volume-header" data-v-c25df89d> 24h volume </div><div class="text profit-percentage-header" data-v-c25df89d> gap </div><div class="text volume-header" data-v-c25df89d> 24h volume </div><div class="text price-header" data-v-c25df89d> price </div><div class="text exchange-link-header" data-v-c25df89d> Sell to </div></div>',1),Bb={class:"op"},$b=["onClick"],jb={class:"text indicator price"},Hb={class:"text indicator volume"},Vb={class:"text text-green indicator profit-percentage"},Wb={class:"text indicator volume"},zb={class:"text indicator price"},Kb=["onClick"],Ya="https://data.sirbofi.com",Xa="Couldn't access API.",qb={__name:"HomeView",setup(t){function e(Q){window.open(Q,"_blank")}Fc(()=>{window.addEventListener("keydown",Q=>{Q.key==="Enter"&&te()})});const n={basic:"basic",advanced:"advanced"},r={spot:"spot",perpetual:"perpetual"},s=oe(!1),i=oe(n.basic);function o(Q){i.value=Q}const a=oe([]),c=["binance","binance-us","binance-tr","coinbase","coinbase-exchange","btcturk-pro","phemex","bitvavo","bitkub","coinex","indodax","coinmetro","kraken","kucoin","bitstamp","okx","gate-io","bitget","crypto-com-exchange","gemini","lbank","mexc","bybit","bitrue","probit-exchange","Toobit","xt","pionex","biconomy","bingx","latoken","whitebit","weex","coinstore","indodax","btse","dydx","pancakeswap-v2","uniswap-v3","uniswap-v2","kine-protocol-polygon","apex-protocol","dodo"],u=[r.spot,r.perpetual],l={USDT:825,BTC:1,USD:2781,TUSD:2563,BUSD:4687,EUR:2790,GBP:2791},f=oe(0),p=oe(null);function _(){Ae.value={},p.value=null,f.value=0,fe.value=0,ve.value=0,Se.value=0}const v=oe(1),b=oe(10),N=[20,50,100,1e3],P=oe(1e3),M=oe(1),U=oe(2),q=oe(12),J=oe(5e3),$=oe(null),se=oe([]),W=oe([]),F=oe(!1),fe=oe(0),ve=oe(0),Se=oe(0),Ue=oe(200),Ze={listingsEndpoint:()=>{const Q=Ya+"/api/listings",L={start:v.value||1,limit:b.value||20};return Q+"?"+new URLSearchParams(L).toString()},marketPairsEndpoint:(Q,L=null)=>{const m=Ya+"/api/market-pairs",S={slug:Q,start:M.value||1,limit:P.value||20};$.value&&(S.category=$.value),L&&(S.quoteCurrencyId=l[L]);const A=m+"?"+new URLSearchParams(S).toString();return console.log(A),A}};function ye(Q){return Intl.NumberFormat().format(Q)}function X(Q,L){L.includes(Q)?L.splice(L.indexOf(Q),1):L.push(Q)}function ie(){F.value=!1,p.value=null}async function te(){p.value=null,F.value=!0,f.value=0;const Q=Ze.listingsEndpoint();await _e.get(Q).then(L=>{if(L.status===429)return p.value="too many requests",F.value=!1,!1;a.value=L.data.data.cryptoCurrencyList,Pe()}).catch(L=>{console.log(L),p.value=Xa,F.value=!1})}async function ze(Q){const L=W.value.length>0?W.value:[null];let m=[];for(const S of L){const A=Ze.marketPairsEndpoint(Q,S);await _e.get(A).then(k=>{var G,Z,d;if(k.data.status===429)return p.value="too many requests",F.value=!1,!1;if(k.data.status.error_code==="500")return p.value="server gave err 500. could be overloaded",F.value=!1,!1;((d=(Z=(G=k.data)==null?void 0:G.data)==null?void 0:Z.marketPairs)==null?void 0:d.length)>0&&m.push(...k.data.data.marketPairs)}).catch(k=>{console.log(k),p.value=Xa,F.value=!1})}return[...new Set(m)]}function et(Q,L){return ve.value++,((L.price-Q.price)/Q.price*100).toFixed(2)}const Ae=oe({});async function Pe(){let Q={};for(const L of a.value){if(F.value===!1)break;await ze(L.slug).then(m=>{var A;if(!m)return;let S=[];for(const k of m)k.volumeUsd>J.value&&(!Ke.value||se.value.includes(k.exchangeSlug))&&k.isVerified&&!k.poorAuditStatus&&S.push(k);for(let k=0;k<S.length;k++){for(let G=k+1;G<S.length;G++){let Z=S[k],d=S[G],h=Z.price<d.price?Z:d,g=Z.price>d.price?Z:d,w=Number(et(h,g));if(w>U.value&&w<q.value&&(Q[L.slug]||(Q[L.slug]=[]),Q[L.slug].push({buy_from_exchange:h.exchangeSlug,buy_from_price:h.price,buy_from_volume:ye(h.volumeUsd.toFixed(0)),buy_link:h.marketUrl,crypto:L.slug,potential_profit:w,sell_to_exchange:g.exchangeSlug,sell_to_price:g.price,sell_to_volume:ye(g.volumeUsd.toFixed(0)),sell_link:g.marketUrl}),f.value++,f.value>=Ue.value&&(F.value=!1,p.value="Illogical amount of results! Stopped search to protect performance. You need more strict filters.")),F.value===!1)break}if(fe.value++,(A=Q[L.slug])==null||A.sort((G,Z)=>Z.potential_profit-G.potential_profit),F.value===!1)break}}),Ae.value={...Q},Se.value++}F.value=!1}const Ke=Ie(()=>se.value.length>0),tt=Ie(()=>!!$.value);return(Q,L)=>(ae(),de("main",null,[Re(uv),T("div",Ny,[T("div",Ly,[T("button",{class:"hide-filters-button",onClick:L[0]||(L[0]=m=>s.value=!s.value)},[T("span",Dy,ge(s.value?">":"<️"),1)]),T("div",{class:Oe({"pad filtering-pad":!0,hidden:s.value})},[i.value===n.basic?(ae(),de("div",My,[T("div",{class:Oe({"inputs-wrapper":!0,disabled:F.value})},[Uy,Tt(T("input",{type:"number",placeholder:"rank","onUpdate:modelValue":L[1]||(L[1]=m=>v.value=m)},null,512),[[Pt,v.value]]),Fy,Tt(T("input",{type:"number",placeholder:"Number","onUpdate:modelValue":L[2]||(L[2]=m=>b.value=m)},null,512),[[Pt,b.value]]),By,T("div",$y,[(ae(),de(Le,null,on(N,m=>T("button",{class:Oe({"toggle-button":!0,selected:P.value===m}),onClick:S=>P.value=m},[T("span",Hy,ge(m),1)],10,jy)),64))]),Vy,Tt(T("input",{type:"number",placeholder:"offset","onUpdate:modelValue":L[3]||(L[3]=m=>M.value=m)},null,512),[[Pt,M.value]]),Wy,Tt(T("input",{type:"number",placeholder:"profit %","onUpdate:modelValue":L[4]||(L[4]=m=>U.value=m)},null,512),[[Pt,U.value]]),zy,Tt(T("input",{type:"number",placeholder:"profit %","onUpdate:modelValue":L[5]||(L[5]=m=>q.value=m)},null,512),[[Pt,q.value]]),Ky,Tt(T("input",{type:"number",placeholder:"minimum trading volume","onUpdate:modelValue":L[6]||(L[6]=m=>J.value=m)},null,512),[[Pt,J.value]])],2),T("span",qy,[F.value?He("",!0):(ae(),de("button",{key:0,class:"bones",onClick:L[7]||(L[7]=m=>o(n.advanced))},Jy)),F.value?(ae(),de("button",{key:1,class:"bones",onClick:L[8]||(L[8]=m=>ie())},Xy)):He("",!0),T("button",{onClick:te,class:Oe({disabled:F.value})},[F.value?(ae(),$r(yi,{key:0})):He("",!0),Qy],2)]),p.value?(ae(),de("span",Zy,ge(p.value),1)):He("",!0),T("div",eb,[T("div",tb,[T("span",nb,[Rt(" number of price comparisons: "),T("span",rb,ge(ye(ve.value)),1)]),T("span",sb,[Rt(" number of cryptos checked: "),T("span",ib,ge(ye(Se.value)),1)]),T("span",ob,[Rt(" number of results: "),T("span",ab,ge(ye(f.value)),1)])])])])):He("",!0),i.value===n.advanced?(ae(),de("div",cb,[T("button",{class:"back bones",onClick:L[9]||(L[9]=m=>o(n.basic))},ub),T("div",fb,[T("div",db,[T("span",hb,[Rt(" Filter trading categories: "),T("span",{class:Oe({disabled:!tt.value,"text-green":tt.value})},ge(tt.value?"enabled":"disabled"),3)]),T("div",pb,[(ae(),de(Le,null,on(u,m=>T("button",{onClick:S=>$.value=$.value===m?null:m,class:Oe({"toggle-button":!0,selected:$.value===m})},[T("span",gb,ge(m),1)],10,mb)),64))])]),T("div",_b,[T("span",vb,[Rt(" Filter by trading pair quote symbol: "),T("span",{class:Oe({disabled:W.value.length===0,"text-green":W.value.length>0})},ge(W.value.length>0?"enabled":"disabled (compares all possible trading pairs)"),3)]),T("div",yb,[(ae(!0),de(Le,null,on(Object.keys(l),m=>(ae(),de("button",{onClick:S=>X(m,W.value),class:Oe({"toggle-button":!0,selected:W.value.includes(m)})},[T("span",Eb,ge(m),1)],10,bb))),256))])]),T("div",wb,[T("span",Ib,[Rt(" Filter trustworthy exchanges: "),T("span",{class:Oe({disabled:!Ke.value,"text-green":Ke.value})},ge(Ke.value?"enabled":"disabled (allows over 600 exchanges)"),3)]),T("div",Sb,[se.value.length!==c.length?(ae(),de("button",{key:0,onClick:L[10]||(L[10]=m=>se.value=[...c]),class:Oe({"toggle-button bones":!0})},Rb)):(ae(),de("button",{key:1,onClick:L[11]||(L[11]=m=>se.value=[]),class:Oe({"toggle-button bones":!0})},Ab)),(ae(),de(Le,null,on(c,m=>T("button",{onClick:S=>X(m,se.value),class:Oe({"toggle-button":!0,selected:se.value.includes(m)})},[T("span",Ob,ge(m),1)],10,Pb)),64))])])]),T("button",{class:"back bones",onClick:L[12]||(L[12]=m=>o(n.basic))},xb)])):He("",!0)],2)]),T("div",Nb,[Object.keys(Ae.value).length?(ae(),de("button",{key:0,class:"clear-results",onClick:_},Db)):He("",!0),(ae(!0),de(Le,null,on(Object.keys(Ae.value),m=>(ae(),de("div",Mb,[T("h2",Ub,ge(m),1),Fb,(ae(!0),de(Le,null,on(Ae.value[m],S=>(ae(),de("div",Bb,[T("button",{class:"text exchange-link",onClick:A=>e(S.buy_link)},ge(S.buy_from_exchange),9,$b),T("div",jb,ge(ye(S.buy_from_price))+" $ ",1),T("div",Hb,ge(S.buy_from_volume)+" $ ",1),T("div",Vb," +"+ge(S.potential_profit)+" % ",1),T("div",Wb,ge(S.sell_to_volume)+" $ ",1),T("div",zb,ge(ye(S.sell_to_price))+" $ ",1),T("button",{class:"text exchange-link",onClick:A=>e(S.sell_link)},ge(S.sell_to_exchange),9,Kb)]))),256))]))),256))])])]))}},Gb=ir(qb,[["__scopeId","data-v-c25df89d"]]),Cu=t=>(os("data-v-2c4053e0"),t=t(),as(),t),Jb={class:"main-container"},Yb={class:"top-buttons-wrapper"},Xb=Cu(()=>T("button",null," Subscribe ",-1)),Qb={class:"login-pad-container"},Zb={class:"pad login-pad"},eE={class:"login-pad-content-wrapper"},tE=Cu(()=>T("svg",{class:"logo",xmlns:"http://www.w3.org/2000/svg",width:"162",height:"256",viewBox:"0 0 162 256",fill:"none"},[T("path",{d:"M15 110.76L15 240.087L77.4026 239.923L77.4026 110.597L15 110.76Z"}),T("path",{d:"M85.4026 -0.0802917L85.4026 255.933L147.805 256.097L147.805 0.0834427L85.4026 -0.0802917Z"})],-1)),nE={class:"row"},rE={key:0,class:"input-fields"},sE={key:1,class:"buttons-wrapper"},iE={key:0,class:"error"},oE={__name:"Login",setup(t){const e=ap(),n=Rs(),r=Ie(()=>n.confirming_user),s=oe(!1),i=oe(!1),o=oe({email:"",password:""});function a(){i.value=!1,s.value=!0,n.signIn(o.value.email,o.value.password).then(c=>{var u;c&&((u=c.data)!=null&&u.uid)?(n.setUserData(c.data),n.setUserLoggedIn(!0),e.push("/")):i.value=!0}).catch(c=>{console.log(c),i.value=!0}).finally(()=>{s.value=!1})}return window.addEventListener("keypress",c=>{c.key==="Enter"&&a()}),(c,u)=>{const l=Tf("router-link");return ae(),de("div",Jb,[T("div",Yb,[Re(l,{to:"/subscription"},{default:kc(()=>[Xb]),_:1})]),T("div",Qb,[T("div",Zb,[T("div",eE,[tE,T("div",nE,[r.value?(ae(),$r(yi,{key:0})):He("",!0)]),r.value?He("",!0):(ae(),de("div",rE,[Tt(T("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=f=>o.value.email=f),placeholder:"Email"},null,512),[[Pt,o.value.email]]),Tt(T("input",{type:"password","onUpdate:modelValue":u[1]||(u[1]=f=>o.value.password=f),placeholder:"Key"},null,512),[[Pt,o.value.password]])])),r.value?He("",!0):(ae(),de("div",sE,[i.value?(ae(),de("div",iE," Authentication failed ")):He("",!0),T("button",{onClick:a,class:Oe({disabled:s.value})},[s.value?(ae(),$r(yi,{key:0})):He("",!0),Rt(" Authenticate ")],2)]))])])])])}}},aE=ir(oE,[["__scopeId","data-v-2c4053e0"]]),Yr=ip({history:Dh("/sirbofi/"),routes:[{path:"/",name:"home",component:Gb,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:aE},{path:"/subscription",name:"subscription",component:()=>Fa(()=>import("./Subscription-C5GI5zWt.js"),__vite__mapDeps([0,1]))},{path:"/payment",name:"payment",component:()=>Fa(()=>import("./Payment-BQraie4n.js"),__vite__mapDeps([2,3]))}]});Yr.beforeEach(async(t,e,n)=>{const r=Rs();t.matched.some(s=>s.meta.requiresAuth)?r.getUser.is_logged_in?n():n({name:"login"}):n()});const Rs=sh("AuthenticatorStore",()=>{const t={is_logged_in:!1,data:null};let e=!1,n=null;function r(_){t.data=_}function s(_){t.is_logged_in=_}const i=oe(null),o=Ie(()=>t),a=oe(!0),c=async()=>{Rl({apiKey:"AIzaSyD81g-c9f8yiDbC_atW-Pvp_MP7t_aTjKQ",authDomain:"aoft-de2ab.firebaseapp.com",projectId:"aoft-de2ab",storageBucket:"aoft-de2ab.appspot.com",messagingSenderId:"630650035711",appId:"1:630650035711:web:210507afd411fc5cb91bca",measurementId:"G-W5TJ6PV4GV"}),n=iu(),Hg(n,v=>{a.value=!1,v?(r(v),s(!0),Yr.push("/")):(s(!1),Yr.push("/login"))}),e=!0},u=Ie(()=>e),l=Ie(()=>n);return{user:t,initAuth:c,error:i,getAuthInitStatus:u,getAuthFromStore:l,setUserData:r,confirming_user:a,setUserLoggedIn:s,getUser:o,signIn:async(_,v)=>(await Bg(n,_,v).then(b=>{r(b.user),s(!0)}).catch(b=>{console.log(b.message),b.value=b.message}),t),signOut:async _=>{await _.signOut().then(()=>{s(!1)}).catch(v=>{console.log(v.message),v.value=v.message})}}}),cE=Qd(),ao=Gd(up);ao.use(cE);const lE=Rs();lE.initAuth();ao.use(Yr);ao.mount("#app");export{Le as F,ir as _,T as a,Re as b,de as c,as as d,Rt as e,oe as f,on as g,He as h,Oe as n,ae as o,os as p,Tf as r,ge as t,kc as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["Subscription-C5GI5zWt.js","Subscription-CNFk2o3n.css","Payment-BQraie4n.js","Payment-DSi6vRDX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
